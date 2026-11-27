function bd(o) {
  return o && o.__esModule && Object.prototype.hasOwnProperty.call(o, "default") ? o.default : o;
}
var pa = { exports: {} }, li = {}, ma = { exports: {} }, je = {};
var dc;
function Jd() {
  if (dc) return je;
  dc = 1;
  var o = /* @__PURE__ */ Symbol.for("react.element"), i = /* @__PURE__ */ Symbol.for("react.portal"), l = /* @__PURE__ */ Symbol.for("react.fragment"), u = /* @__PURE__ */ Symbol.for("react.strict_mode"), d = /* @__PURE__ */ Symbol.for("react.profiler"), h = /* @__PURE__ */ Symbol.for("react.provider"), v = /* @__PURE__ */ Symbol.for("react.context"), y = /* @__PURE__ */ Symbol.for("react.forward_ref"), j = /* @__PURE__ */ Symbol.for("react.suspense"), _ = /* @__PURE__ */ Symbol.for("react.memo"), N = /* @__PURE__ */ Symbol.for("react.lazy"), S = Symbol.iterator;
  function M(k) {
    return k === null || typeof k != "object" ? null : (k = S && k[S] || k["@@iterator"], typeof k == "function" ? k : null);
  }
  var L = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, F = Object.assign, P = {};
  function A(k, T, ae) {
    this.props = k, this.context = T, this.refs = P, this.updater = ae || L;
  }
  A.prototype.isReactComponent = {}, A.prototype.setState = function(k, T) {
    if (typeof k != "object" && typeof k != "function" && k != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, k, T, "setState");
  }, A.prototype.forceUpdate = function(k) {
    this.updater.enqueueForceUpdate(this, k, "forceUpdate");
  };
  function Q() {
  }
  Q.prototype = A.prototype;
  function G(k, T, ae) {
    this.props = k, this.context = T, this.refs = P, this.updater = ae || L;
  }
  var Z = G.prototype = new Q();
  Z.constructor = G, F(Z, A.prototype), Z.isPureReactComponent = !0;
  var te = Array.isArray, fe = Object.prototype.hasOwnProperty, Ee = { current: null }, de = { key: !0, ref: !0, __self: !0, __source: !0 };
  function U(k, T, ae) {
    var ce, ye = {}, ge = null, _e = null;
    if (T != null) for (ce in T.ref !== void 0 && (_e = T.ref), T.key !== void 0 && (ge = "" + T.key), T) fe.call(T, ce) && !de.hasOwnProperty(ce) && (ye[ce] = T[ce]);
    var we = arguments.length - 2;
    if (we === 1) ye.children = ae;
    else if (1 < we) {
      for (var Re = Array(we), O = 0; O < we; O++) Re[O] = arguments[O + 2];
      ye.children = Re;
    }
    if (k && k.defaultProps) for (ce in we = k.defaultProps, we) ye[ce] === void 0 && (ye[ce] = we[ce]);
    return { $$typeof: o, type: k, key: ge, ref: _e, props: ye, _owner: Ee.current };
  }
  function se(k, T) {
    return { $$typeof: o, type: k.type, key: T, ref: k.ref, props: k.props, _owner: k._owner };
  }
  function xe(k) {
    return typeof k == "object" && k !== null && k.$$typeof === o;
  }
  function Me(k) {
    var T = { "=": "=0", ":": "=2" };
    return "$" + k.replace(/[=:]/g, function(ae) {
      return T[ae];
    });
  }
  var De = /\/+/g;
  function ze(k, T) {
    return typeof k == "object" && k !== null && k.key != null ? Me("" + k.key) : T.toString(36);
  }
  function Ae(k, T, ae, ce, ye) {
    var ge = typeof k;
    (ge === "undefined" || ge === "boolean") && (k = null);
    var _e = !1;
    if (k === null) _e = !0;
    else switch (ge) {
      case "string":
      case "number":
        _e = !0;
        break;
      case "object":
        switch (k.$$typeof) {
          case o:
          case i:
            _e = !0;
        }
    }
    if (_e) return _e = k, ye = ye(_e), k = ce === "" ? "." + ze(_e, 0) : ce, te(ye) ? (ae = "", k != null && (ae = k.replace(De, "$&/") + "/"), Ae(ye, T, ae, "", function(O) {
      return O;
    })) : ye != null && (xe(ye) && (ye = se(ye, ae + (!ye.key || _e && _e.key === ye.key ? "" : ("" + ye.key).replace(De, "$&/") + "/") + k)), T.push(ye)), 1;
    if (_e = 0, ce = ce === "" ? "." : ce + ":", te(k)) for (var we = 0; we < k.length; we++) {
      ge = k[we];
      var Re = ce + ze(ge, we);
      _e += Ae(ge, T, ae, Re, ye);
    }
    else if (Re = M(k), typeof Re == "function") for (k = Re.call(k), we = 0; !(ge = k.next()).done; ) ge = ge.value, Re = ce + ze(ge, we++), _e += Ae(ge, T, ae, Re, ye);
    else if (ge === "object") throw T = String(k), Error("Objects are not valid as a React child (found: " + (T === "[object Object]" ? "object with keys {" + Object.keys(k).join(", ") + "}" : T) + "). If you meant to render a collection of children, use an array instead.");
    return _e;
  }
  function We(k, T, ae) {
    if (k == null) return k;
    var ce = [], ye = 0;
    return Ae(k, ce, "", "", function(ge) {
      return T.call(ae, ge, ye++);
    }), ce;
  }
  function Be(k) {
    if (k._status === -1) {
      var T = k._result;
      T = T(), T.then(function(ae) {
        (k._status === 0 || k._status === -1) && (k._status = 1, k._result = ae);
      }, function(ae) {
        (k._status === 0 || k._status === -1) && (k._status = 2, k._result = ae);
      }), k._status === -1 && (k._status = 0, k._result = T);
    }
    if (k._status === 1) return k._result.default;
    throw k._result;
  }
  var Te = { current: null }, z = { transition: null }, b = { ReactCurrentDispatcher: Te, ReactCurrentBatchConfig: z, ReactCurrentOwner: Ee };
  function D() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return je.Children = { map: We, forEach: function(k, T, ae) {
    We(k, function() {
      T.apply(this, arguments);
    }, ae);
  }, count: function(k) {
    var T = 0;
    return We(k, function() {
      T++;
    }), T;
  }, toArray: function(k) {
    return We(k, function(T) {
      return T;
    }) || [];
  }, only: function(k) {
    if (!xe(k)) throw Error("React.Children.only expected to receive a single React element child.");
    return k;
  } }, je.Component = A, je.Fragment = l, je.Profiler = d, je.PureComponent = G, je.StrictMode = u, je.Suspense = j, je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = b, je.act = D, je.cloneElement = function(k, T, ae) {
    if (k == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + k + ".");
    var ce = F({}, k.props), ye = k.key, ge = k.ref, _e = k._owner;
    if (T != null) {
      if (T.ref !== void 0 && (ge = T.ref, _e = Ee.current), T.key !== void 0 && (ye = "" + T.key), k.type && k.type.defaultProps) var we = k.type.defaultProps;
      for (Re in T) fe.call(T, Re) && !de.hasOwnProperty(Re) && (ce[Re] = T[Re] === void 0 && we !== void 0 ? we[Re] : T[Re]);
    }
    var Re = arguments.length - 2;
    if (Re === 1) ce.children = ae;
    else if (1 < Re) {
      we = Array(Re);
      for (var O = 0; O < Re; O++) we[O] = arguments[O + 2];
      ce.children = we;
    }
    return { $$typeof: o, type: k.type, key: ye, ref: ge, props: ce, _owner: _e };
  }, je.createContext = function(k) {
    return k = { $$typeof: v, _currentValue: k, _currentValue2: k, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, k.Provider = { $$typeof: h, _context: k }, k.Consumer = k;
  }, je.createElement = U, je.createFactory = function(k) {
    var T = U.bind(null, k);
    return T.type = k, T;
  }, je.createRef = function() {
    return { current: null };
  }, je.forwardRef = function(k) {
    return { $$typeof: y, render: k };
  }, je.isValidElement = xe, je.lazy = function(k) {
    return { $$typeof: N, _payload: { _status: -1, _result: k }, _init: Be };
  }, je.memo = function(k, T) {
    return { $$typeof: _, type: k, compare: T === void 0 ? null : T };
  }, je.startTransition = function(k) {
    var T = z.transition;
    z.transition = {};
    try {
      k();
    } finally {
      z.transition = T;
    }
  }, je.unstable_act = D, je.useCallback = function(k, T) {
    return Te.current.useCallback(k, T);
  }, je.useContext = function(k) {
    return Te.current.useContext(k);
  }, je.useDebugValue = function() {
  }, je.useDeferredValue = function(k) {
    return Te.current.useDeferredValue(k);
  }, je.useEffect = function(k, T) {
    return Te.current.useEffect(k, T);
  }, je.useId = function() {
    return Te.current.useId();
  }, je.useImperativeHandle = function(k, T, ae) {
    return Te.current.useImperativeHandle(k, T, ae);
  }, je.useInsertionEffect = function(k, T) {
    return Te.current.useInsertionEffect(k, T);
  }, je.useLayoutEffect = function(k, T) {
    return Te.current.useLayoutEffect(k, T);
  }, je.useMemo = function(k, T) {
    return Te.current.useMemo(k, T);
  }, je.useReducer = function(k, T, ae) {
    return Te.current.useReducer(k, T, ae);
  }, je.useRef = function(k) {
    return Te.current.useRef(k);
  }, je.useState = function(k) {
    return Te.current.useState(k);
  }, je.useSyncExternalStore = function(k, T, ae) {
    return Te.current.useSyncExternalStore(k, T, ae);
  }, je.useTransition = function() {
    return Te.current.useTransition();
  }, je.version = "18.3.1", je;
}
var hc;
function Ta() {
  return hc || (hc = 1, ma.exports = Jd()), ma.exports;
}
var pc;
function Zd() {
  if (pc) return li;
  pc = 1;
  var o = Ta(), i = /* @__PURE__ */ Symbol.for("react.element"), l = /* @__PURE__ */ Symbol.for("react.fragment"), u = Object.prototype.hasOwnProperty, d = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, h = { key: !0, ref: !0, __self: !0, __source: !0 };
  function v(y, j, _) {
    var N, S = {}, M = null, L = null;
    _ !== void 0 && (M = "" + _), j.key !== void 0 && (M = "" + j.key), j.ref !== void 0 && (L = j.ref);
    for (N in j) u.call(j, N) && !h.hasOwnProperty(N) && (S[N] = j[N]);
    if (y && y.defaultProps) for (N in j = y.defaultProps, j) S[N] === void 0 && (S[N] = j[N]);
    return { $$typeof: i, type: y, key: M, ref: L, props: S, _owner: d.current };
  }
  return li.Fragment = l, li.jsx = v, li.jsxs = v, li;
}
var mc;
function eh() {
  return mc || (mc = 1, pa.exports = Zd()), pa.exports;
}
var c = eh(), le = Ta(), ws = {}, va = { exports: {} }, Et = {}, ya = { exports: {} }, ga = {};
var vc;
function th() {
  return vc || (vc = 1, (function(o) {
    function i(z, b) {
      var D = z.length;
      z.push(b);
      e: for (; 0 < D; ) {
        var k = D - 1 >>> 1, T = z[k];
        if (0 < d(T, b)) z[k] = b, z[D] = T, D = k;
        else break e;
      }
    }
    function l(z) {
      return z.length === 0 ? null : z[0];
    }
    function u(z) {
      if (z.length === 0) return null;
      var b = z[0], D = z.pop();
      if (D !== b) {
        z[0] = D;
        e: for (var k = 0, T = z.length, ae = T >>> 1; k < ae; ) {
          var ce = 2 * (k + 1) - 1, ye = z[ce], ge = ce + 1, _e = z[ge];
          if (0 > d(ye, D)) ge < T && 0 > d(_e, ye) ? (z[k] = _e, z[ge] = D, k = ge) : (z[k] = ye, z[ce] = D, k = ce);
          else if (ge < T && 0 > d(_e, D)) z[k] = _e, z[ge] = D, k = ge;
          else break e;
        }
      }
      return b;
    }
    function d(z, b) {
      var D = z.sortIndex - b.sortIndex;
      return D !== 0 ? D : z.id - b.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var h = performance;
      o.unstable_now = function() {
        return h.now();
      };
    } else {
      var v = Date, y = v.now();
      o.unstable_now = function() {
        return v.now() - y;
      };
    }
    var j = [], _ = [], N = 1, S = null, M = 3, L = !1, F = !1, P = !1, A = typeof setTimeout == "function" ? setTimeout : null, Q = typeof clearTimeout == "function" ? clearTimeout : null, G = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function Z(z) {
      for (var b = l(_); b !== null; ) {
        if (b.callback === null) u(_);
        else if (b.startTime <= z) u(_), b.sortIndex = b.expirationTime, i(j, b);
        else break;
        b = l(_);
      }
    }
    function te(z) {
      if (P = !1, Z(z), !F) if (l(j) !== null) F = !0, Be(fe);
      else {
        var b = l(_);
        b !== null && Te(te, b.startTime - z);
      }
    }
    function fe(z, b) {
      F = !1, P && (P = !1, Q(U), U = -1), L = !0;
      var D = M;
      try {
        for (Z(b), S = l(j); S !== null && (!(S.expirationTime > b) || z && !Me()); ) {
          var k = S.callback;
          if (typeof k == "function") {
            S.callback = null, M = S.priorityLevel;
            var T = k(S.expirationTime <= b);
            b = o.unstable_now(), typeof T == "function" ? S.callback = T : S === l(j) && u(j), Z(b);
          } else u(j);
          S = l(j);
        }
        if (S !== null) var ae = !0;
        else {
          var ce = l(_);
          ce !== null && Te(te, ce.startTime - b), ae = !1;
        }
        return ae;
      } finally {
        S = null, M = D, L = !1;
      }
    }
    var Ee = !1, de = null, U = -1, se = 5, xe = -1;
    function Me() {
      return !(o.unstable_now() - xe < se);
    }
    function De() {
      if (de !== null) {
        var z = o.unstable_now();
        xe = z;
        var b = !0;
        try {
          b = de(!0, z);
        } finally {
          b ? ze() : (Ee = !1, de = null);
        }
      } else Ee = !1;
    }
    var ze;
    if (typeof G == "function") ze = function() {
      G(De);
    };
    else if (typeof MessageChannel < "u") {
      var Ae = new MessageChannel(), We = Ae.port2;
      Ae.port1.onmessage = De, ze = function() {
        We.postMessage(null);
      };
    } else ze = function() {
      A(De, 0);
    };
    function Be(z) {
      de = z, Ee || (Ee = !0, ze());
    }
    function Te(z, b) {
      U = A(function() {
        z(o.unstable_now());
      }, b);
    }
    o.unstable_IdlePriority = 5, o.unstable_ImmediatePriority = 1, o.unstable_LowPriority = 4, o.unstable_NormalPriority = 3, o.unstable_Profiling = null, o.unstable_UserBlockingPriority = 2, o.unstable_cancelCallback = function(z) {
      z.callback = null;
    }, o.unstable_continueExecution = function() {
      F || L || (F = !0, Be(fe));
    }, o.unstable_forceFrameRate = function(z) {
      0 > z || 125 < z ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : se = 0 < z ? Math.floor(1e3 / z) : 5;
    }, o.unstable_getCurrentPriorityLevel = function() {
      return M;
    }, o.unstable_getFirstCallbackNode = function() {
      return l(j);
    }, o.unstable_next = function(z) {
      switch (M) {
        case 1:
        case 2:
        case 3:
          var b = 3;
          break;
        default:
          b = M;
      }
      var D = M;
      M = b;
      try {
        return z();
      } finally {
        M = D;
      }
    }, o.unstable_pauseExecution = function() {
    }, o.unstable_requestPaint = function() {
    }, o.unstable_runWithPriority = function(z, b) {
      switch (z) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          z = 3;
      }
      var D = M;
      M = z;
      try {
        return b();
      } finally {
        M = D;
      }
    }, o.unstable_scheduleCallback = function(z, b, D) {
      var k = o.unstable_now();
      switch (typeof D == "object" && D !== null ? (D = D.delay, D = typeof D == "number" && 0 < D ? k + D : k) : D = k, z) {
        case 1:
          var T = -1;
          break;
        case 2:
          T = 250;
          break;
        case 5:
          T = 1073741823;
          break;
        case 4:
          T = 1e4;
          break;
        default:
          T = 5e3;
      }
      return T = D + T, z = { id: N++, callback: b, priorityLevel: z, startTime: D, expirationTime: T, sortIndex: -1 }, D > k ? (z.sortIndex = D, i(_, z), l(j) === null && z === l(_) && (P ? (Q(U), U = -1) : P = !0, Te(te, D - k))) : (z.sortIndex = T, i(j, z), F || L || (F = !0, Be(fe))), z;
    }, o.unstable_shouldYield = Me, o.unstable_wrapCallback = function(z) {
      var b = M;
      return function() {
        var D = M;
        M = b;
        try {
          return z.apply(this, arguments);
        } finally {
          M = D;
        }
      };
    };
  })(ga)), ga;
}
var yc;
function nh() {
  return yc || (yc = 1, ya.exports = th()), ya.exports;
}
var gc;
function rh() {
  if (gc) return Et;
  gc = 1;
  var o = Ta(), i = nh();
  function l(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var u = /* @__PURE__ */ new Set(), d = {};
  function h(e, t) {
    v(e, t), v(e + "Capture", t);
  }
  function v(e, t) {
    for (d[e] = t, e = 0; e < t.length; e++) u.add(t[e]);
  }
  var y = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), j = Object.prototype.hasOwnProperty, _ = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, N = {}, S = {};
  function M(e) {
    return j.call(S, e) ? !0 : j.call(N, e) ? !1 : _.test(e) ? S[e] = !0 : (N[e] = !0, !1);
  }
  function L(e, t, n, r) {
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
  function F(e, t, n, r) {
    if (t === null || typeof t > "u" || L(e, t, n, r)) return !0;
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
  function P(e, t, n, r, s, a, f) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = s, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = a, this.removeEmptyString = f;
  }
  var A = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    A[e] = new P(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    A[t] = new P(t, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    A[e] = new P(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    A[e] = new P(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    A[e] = new P(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    A[e] = new P(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    A[e] = new P(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    A[e] = new P(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    A[e] = new P(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var Q = /[\-:]([a-z])/g;
  function G(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(
      Q,
      G
    );
    A[t] = new P(t, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(Q, G);
    A[t] = new P(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(Q, G);
    A[t] = new P(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    A[e] = new P(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), A.xlinkHref = new P("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    A[e] = new P(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function Z(e, t, n, r) {
    var s = A.hasOwnProperty(t) ? A[t] : null;
    (s !== null ? s.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (F(t, n, s, r) && (n = null), r || s === null ? M(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : s.mustUseProperty ? e[s.propertyName] = n === null ? s.type === 3 ? !1 : "" : n : (t = s.attributeName, r = s.attributeNamespace, n === null ? e.removeAttribute(t) : (s = s.type, n = s === 3 || s === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var te = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, fe = /* @__PURE__ */ Symbol.for("react.element"), Ee = /* @__PURE__ */ Symbol.for("react.portal"), de = /* @__PURE__ */ Symbol.for("react.fragment"), U = /* @__PURE__ */ Symbol.for("react.strict_mode"), se = /* @__PURE__ */ Symbol.for("react.profiler"), xe = /* @__PURE__ */ Symbol.for("react.provider"), Me = /* @__PURE__ */ Symbol.for("react.context"), De = /* @__PURE__ */ Symbol.for("react.forward_ref"), ze = /* @__PURE__ */ Symbol.for("react.suspense"), Ae = /* @__PURE__ */ Symbol.for("react.suspense_list"), We = /* @__PURE__ */ Symbol.for("react.memo"), Be = /* @__PURE__ */ Symbol.for("react.lazy"), Te = /* @__PURE__ */ Symbol.for("react.offscreen"), z = Symbol.iterator;
  function b(e) {
    return e === null || typeof e != "object" ? null : (e = z && e[z] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var D = Object.assign, k;
  function T(e) {
    if (k === void 0) try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      k = t && t[1] || "";
    }
    return `
` + k + e;
  }
  var ae = !1;
  function ce(e, t) {
    if (!e || ae) return "";
    ae = !0;
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
        } catch (E) {
          var r = E;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (E) {
          r = E;
        }
        e.call(t.prototype);
      }
      else {
        try {
          throw Error();
        } catch (E) {
          r = E;
        }
        e();
      }
    } catch (E) {
      if (E && r && typeof E.stack == "string") {
        for (var s = E.stack.split(`
`), a = r.stack.split(`
`), f = s.length - 1, p = a.length - 1; 1 <= f && 0 <= p && s[f] !== a[p]; ) p--;
        for (; 1 <= f && 0 <= p; f--, p--) if (s[f] !== a[p]) {
          if (f !== 1 || p !== 1)
            do
              if (f--, p--, 0 > p || s[f] !== a[p]) {
                var m = `
` + s[f].replace(" at new ", " at ");
                return e.displayName && m.includes("<anonymous>") && (m = m.replace("<anonymous>", e.displayName)), m;
              }
            while (1 <= f && 0 <= p);
          break;
        }
      }
    } finally {
      ae = !1, Error.prepareStackTrace = n;
    }
    return (e = e ? e.displayName || e.name : "") ? T(e) : "";
  }
  function ye(e) {
    switch (e.tag) {
      case 5:
        return T(e.type);
      case 16:
        return T("Lazy");
      case 13:
        return T("Suspense");
      case 19:
        return T("SuspenseList");
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
  function ge(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case de:
        return "Fragment";
      case Ee:
        return "Portal";
      case se:
        return "Profiler";
      case U:
        return "StrictMode";
      case ze:
        return "Suspense";
      case Ae:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case Me:
        return (e.displayName || "Context") + ".Consumer";
      case xe:
        return (e._context.displayName || "Context") + ".Provider";
      case De:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case We:
        return t = e.displayName || null, t !== null ? t : ge(e.type) || "Memo";
      case Be:
        t = e._payload, e = e._init;
        try {
          return ge(e(t));
        } catch {
        }
    }
    return null;
  }
  function _e(e) {
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
        return ge(t);
      case 8:
        return t === U ? "StrictMode" : "Mode";
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
  function we(e) {
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
  function Re(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function O(e) {
    var t = Re(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
      var s = n.get, a = n.set;
      return Object.defineProperty(e, t, { configurable: !0, get: function() {
        return s.call(this);
      }, set: function(f) {
        r = "" + f, a.call(this, f);
      } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
        return r;
      }, setValue: function(f) {
        r = "" + f;
      }, stopTracking: function() {
        e._valueTracker = null, delete e[t];
      } };
    }
  }
  function J(e) {
    e._valueTracker || (e._valueTracker = O(e));
  }
  function B(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), r = "";
    return e && (r = Re(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
  }
  function ee(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function ue(e, t) {
    var n = t.checked;
    return D({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
  }
  function q(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
    n = we(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function ie(e, t) {
    t = t.checked, t != null && Z(e, "checked", t, !1);
  }
  function X(e, t) {
    ie(e, t);
    var n = we(t.value), r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? pe(e, t.type, n) : t.hasOwnProperty("defaultValue") && pe(e, t.type, we(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function he(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
  }
  function pe(e, t, n) {
    (t !== "number" || ee(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var Se = Array.isArray;
  function Pe(e, t, n, r) {
    if (e = e.options, t) {
      t = {};
      for (var s = 0; s < n.length; s++) t["$" + n[s]] = !0;
      for (n = 0; n < e.length; n++) s = t.hasOwnProperty("$" + e[n].value), e[n].selected !== s && (e[n].selected = s), s && r && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + we(n), t = null, s = 0; s < e.length; s++) {
        if (e[s].value === n) {
          e[s].selected = !0, r && (e[s].defaultSelected = !0);
          return;
        }
        t !== null || e[s].disabled || (t = e[s]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Ne(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(l(91));
    return D({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function Ue(e, t) {
    var n = t.value;
    if (n == null) {
      if (n = t.children, t = t.defaultValue, n != null) {
        if (t != null) throw Error(l(92));
        if (Se(n)) {
          if (1 < n.length) throw Error(l(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), n = t;
    }
    e._wrapperState = { initialValue: we(n) };
  }
  function rt(e, t) {
    var n = we(t.value), r = we(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
  }
  function Zt(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function vt(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Ie(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? vt(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var Ye, Ct = (function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, s) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, n, r, s);
      });
    } : e;
  })(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (Ye = Ye || document.createElement("div"), Ye.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Ye.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
  function Kt(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var en = {
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
  }, Fe = ["Webkit", "ms", "Moz", "O"];
  Object.keys(en).forEach(function(e) {
    Fe.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), en[t] = en[e];
    });
  });
  function $e(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || en.hasOwnProperty(e) && en[e] ? ("" + t).trim() : t + "px";
  }
  function ve(e, t) {
    e = e.style;
    for (var n in t) if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, s = $e(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, s) : e[n] = s;
    }
  }
  var me = D({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function it(e, t) {
    if (t) {
      if (me[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(l(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(l(60));
        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(l(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(l(62));
    }
  }
  function ot(e, t) {
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
  var tn = null;
  function Rt(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Rn = null, Qt = null, Gt = null;
  function qn(e) {
    if (e = Kr(e)) {
      if (typeof Rn != "function") throw Error(l(280));
      var t = e.stateNode;
      t && (t = $i(t), Rn(e.stateNode, e.type, t));
    }
  }
  function Ca(e) {
    Qt ? Gt ? Gt.push(e) : Gt = [e] : Qt = e;
  }
  function Ra() {
    if (Qt) {
      var e = Qt, t = Gt;
      if (Gt = Qt = null, qn(e), t) for (e = 0; e < t.length; e++) qn(t[e]);
    }
  }
  function Pa(e, t) {
    return e(t);
  }
  function La() {
  }
  var Ps = !1;
  function Aa(e, t, n) {
    if (Ps) return e(t, n);
    Ps = !0;
    try {
      return Pa(e, t, n);
    } finally {
      Ps = !1, (Qt !== null || Gt !== null) && (La(), Ra());
    }
  }
  function Er(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = $i(n);
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
  var Ls = !1;
  if (y) try {
    var _r = {};
    Object.defineProperty(_r, "passive", { get: function() {
      Ls = !0;
    } }), window.addEventListener("test", _r, _r), window.removeEventListener("test", _r, _r);
  } catch {
    Ls = !1;
  }
  function nf(e, t, n, r, s, a, f, p, m) {
    var E = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, E);
    } catch (R) {
      this.onError(R);
    }
  }
  var Nr = !1, pi = null, mi = !1, As = null, rf = { onError: function(e) {
    Nr = !0, pi = e;
  } };
  function sf(e, t, n, r, s, a, f, p, m) {
    Nr = !1, pi = null, nf.apply(rf, arguments);
  }
  function lf(e, t, n, r, s, a, f, p, m) {
    if (sf.apply(this, arguments), Nr) {
      if (Nr) {
        var E = pi;
        Nr = !1, pi = null;
      } else throw Error(l(198));
      mi || (mi = !0, As = E);
    }
  }
  function Pn(e) {
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
  function Ia(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function Fa(e) {
    if (Pn(e) !== e) throw Error(l(188));
  }
  function af(e) {
    var t = e.alternate;
    if (!t) {
      if (t = Pn(e), t === null) throw Error(l(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
      var s = n.return;
      if (s === null) break;
      var a = s.alternate;
      if (a === null) {
        if (r = s.return, r !== null) {
          n = r;
          continue;
        }
        break;
      }
      if (s.child === a.child) {
        for (a = s.child; a; ) {
          if (a === n) return Fa(s), e;
          if (a === r) return Fa(s), t;
          a = a.sibling;
        }
        throw Error(l(188));
      }
      if (n.return !== r.return) n = s, r = a;
      else {
        for (var f = !1, p = s.child; p; ) {
          if (p === n) {
            f = !0, n = s, r = a;
            break;
          }
          if (p === r) {
            f = !0, r = s, n = a;
            break;
          }
          p = p.sibling;
        }
        if (!f) {
          for (p = a.child; p; ) {
            if (p === n) {
              f = !0, n = a, r = s;
              break;
            }
            if (p === r) {
              f = !0, r = a, n = s;
              break;
            }
            p = p.sibling;
          }
          if (!f) throw Error(l(189));
        }
      }
      if (n.alternate !== r) throw Error(l(190));
    }
    if (n.tag !== 3) throw Error(l(188));
    return n.stateNode.current === n ? e : t;
  }
  function $a(e) {
    return e = af(e), e !== null ? za(e) : null;
  }
  function za(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = za(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var Oa = i.unstable_scheduleCallback, Da = i.unstable_cancelCallback, of = i.unstable_shouldYield, uf = i.unstable_requestPaint, Je = i.unstable_now, cf = i.unstable_getCurrentPriorityLevel, Is = i.unstable_ImmediatePriority, Ba = i.unstable_UserBlockingPriority, vi = i.unstable_NormalPriority, ff = i.unstable_LowPriority, Va = i.unstable_IdlePriority, yi = null, qt = null;
  function df(e) {
    if (qt && typeof qt.onCommitFiberRoot == "function") try {
      qt.onCommitFiberRoot(yi, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var zt = Math.clz32 ? Math.clz32 : mf, hf = Math.log, pf = Math.LN2;
  function mf(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (hf(e) / pf | 0) | 0;
  }
  var gi = 64, ki = 4194304;
  function Tr(e) {
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
  function xi(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0, s = e.suspendedLanes, a = e.pingedLanes, f = n & 268435455;
    if (f !== 0) {
      var p = f & ~s;
      p !== 0 ? r = Tr(p) : (a &= f, a !== 0 && (r = Tr(a)));
    } else f = n & ~s, f !== 0 ? r = Tr(f) : a !== 0 && (r = Tr(a));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && (t & s) === 0 && (s = r & -r, a = t & -t, s >= a || s === 16 && (a & 4194240) !== 0)) return t;
    if ((r & 4) !== 0 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - zt(t), s = 1 << n, r |= e[n], t &= ~s;
    return r;
  }
  function vf(e, t) {
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
  function yf(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, s = e.expirationTimes, a = e.pendingLanes; 0 < a; ) {
      var f = 31 - zt(a), p = 1 << f, m = s[f];
      m === -1 ? ((p & n) === 0 || (p & r) !== 0) && (s[f] = vf(p, t)) : m <= t && (e.expiredLanes |= p), a &= ~p;
    }
  }
  function Fs(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function Ua() {
    var e = gi;
    return gi <<= 1, (gi & 4194240) === 0 && (gi = 64), e;
  }
  function $s(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Mr(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - zt(t), e[t] = n;
  }
  function gf(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var s = 31 - zt(n), a = 1 << s;
      t[s] = 0, r[s] = -1, e[s] = -1, n &= ~a;
    }
  }
  function zs(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var r = 31 - zt(n), s = 1 << r;
      s & t | e[r] & t && (e[r] |= t), n &= ~s;
    }
  }
  var Oe = 0;
  function Ha(e) {
    return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var Wa, Os, Ka, Qa, Ga, Ds = !1, wi = [], fn = null, dn = null, hn = null, Cr = /* @__PURE__ */ new Map(), Rr = /* @__PURE__ */ new Map(), pn = [], kf = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function qa(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        fn = null;
        break;
      case "dragenter":
      case "dragleave":
        dn = null;
        break;
      case "mouseover":
      case "mouseout":
        hn = null;
        break;
      case "pointerover":
      case "pointerout":
        Cr.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Rr.delete(t.pointerId);
    }
  }
  function Pr(e, t, n, r, s, a) {
    return e === null || e.nativeEvent !== a ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: a, targetContainers: [s] }, t !== null && (t = Kr(t), t !== null && Os(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, s !== null && t.indexOf(s) === -1 && t.push(s), e);
  }
  function xf(e, t, n, r, s) {
    switch (t) {
      case "focusin":
        return fn = Pr(fn, e, t, n, r, s), !0;
      case "dragenter":
        return dn = Pr(dn, e, t, n, r, s), !0;
      case "mouseover":
        return hn = Pr(hn, e, t, n, r, s), !0;
      case "pointerover":
        var a = s.pointerId;
        return Cr.set(a, Pr(Cr.get(a) || null, e, t, n, r, s)), !0;
      case "gotpointercapture":
        return a = s.pointerId, Rr.set(a, Pr(Rr.get(a) || null, e, t, n, r, s)), !0;
    }
    return !1;
  }
  function Xa(e) {
    var t = Ln(e.target);
    if (t !== null) {
      var n = Pn(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = Ia(n), t !== null) {
            e.blockedOn = t, Ga(e.priority, function() {
              Ka(n);
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
  function Si(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Vs(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        tn = r, n.target.dispatchEvent(r), tn = null;
      } else return t = Kr(n), t !== null && Os(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function Ya(e, t, n) {
    Si(e) && n.delete(t);
  }
  function wf() {
    Ds = !1, fn !== null && Si(fn) && (fn = null), dn !== null && Si(dn) && (dn = null), hn !== null && Si(hn) && (hn = null), Cr.forEach(Ya), Rr.forEach(Ya);
  }
  function Lr(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Ds || (Ds = !0, i.unstable_scheduleCallback(i.unstable_NormalPriority, wf)));
  }
  function Ar(e) {
    function t(s) {
      return Lr(s, e);
    }
    if (0 < wi.length) {
      Lr(wi[0], e);
      for (var n = 1; n < wi.length; n++) {
        var r = wi[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (fn !== null && Lr(fn, e), dn !== null && Lr(dn, e), hn !== null && Lr(hn, e), Cr.forEach(t), Rr.forEach(t), n = 0; n < pn.length; n++) r = pn[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < pn.length && (n = pn[0], n.blockedOn === null); ) Xa(n), n.blockedOn === null && pn.shift();
  }
  var Xn = te.ReactCurrentBatchConfig, ji = !0;
  function Sf(e, t, n, r) {
    var s = Oe, a = Xn.transition;
    Xn.transition = null;
    try {
      Oe = 1, Bs(e, t, n, r);
    } finally {
      Oe = s, Xn.transition = a;
    }
  }
  function jf(e, t, n, r) {
    var s = Oe, a = Xn.transition;
    Xn.transition = null;
    try {
      Oe = 4, Bs(e, t, n, r);
    } finally {
      Oe = s, Xn.transition = a;
    }
  }
  function Bs(e, t, n, r) {
    if (ji) {
      var s = Vs(e, t, n, r);
      if (s === null) il(e, t, r, Ei, n), qa(e, r);
      else if (xf(s, e, t, n, r)) r.stopPropagation();
      else if (qa(e, r), t & 4 && -1 < kf.indexOf(e)) {
        for (; s !== null; ) {
          var a = Kr(s);
          if (a !== null && Wa(a), a = Vs(e, t, n, r), a === null && il(e, t, r, Ei, n), a === s) break;
          s = a;
        }
        s !== null && r.stopPropagation();
      } else il(e, t, r, null, n);
    }
  }
  var Ei = null;
  function Vs(e, t, n, r) {
    if (Ei = null, e = Rt(r), e = Ln(e), e !== null) if (t = Pn(e), t === null) e = null;
    else if (n = t.tag, n === 13) {
      if (e = Ia(t), e !== null) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
    return Ei = e, null;
  }
  function ba(e) {
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
        switch (cf()) {
          case Is:
            return 1;
          case Ba:
            return 4;
          case vi:
          case ff:
            return 16;
          case Va:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var mn = null, Us = null, _i = null;
  function Ja() {
    if (_i) return _i;
    var e, t = Us, n = t.length, r, s = "value" in mn ? mn.value : mn.textContent, a = s.length;
    for (e = 0; e < n && t[e] === s[e]; e++) ;
    var f = n - e;
    for (r = 1; r <= f && t[n - r] === s[a - r]; r++) ;
    return _i = s.slice(e, 1 < r ? 1 - r : void 0);
  }
  function Ni(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Ti() {
    return !0;
  }
  function Za() {
    return !1;
  }
  function _t(e) {
    function t(n, r, s, a, f) {
      this._reactName = n, this._targetInst = s, this.type = r, this.nativeEvent = a, this.target = f, this.currentTarget = null;
      for (var p in e) e.hasOwnProperty(p) && (n = e[p], this[p] = n ? n(a) : a[p]);
      return this.isDefaultPrevented = (a.defaultPrevented != null ? a.defaultPrevented : a.returnValue === !1) ? Ti : Za, this.isPropagationStopped = Za, this;
    }
    return D(t.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var n = this.nativeEvent;
      n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Ti);
    }, stopPropagation: function() {
      var n = this.nativeEvent;
      n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Ti);
    }, persist: function() {
    }, isPersistent: Ti }), t;
  }
  var Yn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Hs = _t(Yn), Ir = D({}, Yn, { view: 0, detail: 0 }), Ef = _t(Ir), Ws, Ks, Fr, Mi = D({}, Ir, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Gs, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== Fr && (Fr && e.type === "mousemove" ? (Ws = e.screenX - Fr.screenX, Ks = e.screenY - Fr.screenY) : Ks = Ws = 0, Fr = e), Ws);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : Ks;
  } }), eo = _t(Mi), _f = D({}, Mi, { dataTransfer: 0 }), Nf = _t(_f), Tf = D({}, Ir, { relatedTarget: 0 }), Qs = _t(Tf), Mf = D({}, Yn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Cf = _t(Mf), Rf = D({}, Yn, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), Pf = _t(Rf), Lf = D({}, Yn, { data: 0 }), to = _t(Lf), Af = {
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
  }, Ff = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function $f(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Ff[e]) ? !!t[e] : !1;
  }
  function Gs() {
    return $f;
  }
  var zf = D({}, Ir, { key: function(e) {
    if (e.key) {
      var t = Af[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = Ni(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? If[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Gs, charCode: function(e) {
    return e.type === "keypress" ? Ni(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? Ni(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), Of = _t(zf), Df = D({}, Mi, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), no = _t(Df), Bf = D({}, Ir, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Gs }), Vf = _t(Bf), Uf = D({}, Yn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Hf = _t(Uf), Wf = D({}, Mi, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Kf = _t(Wf), Qf = [9, 13, 27, 32], qs = y && "CompositionEvent" in window, $r = null;
  y && "documentMode" in document && ($r = document.documentMode);
  var Gf = y && "TextEvent" in window && !$r, ro = y && (!qs || $r && 8 < $r && 11 >= $r), io = " ", so = !1;
  function lo(e, t) {
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
  function ao(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var bn = !1;
  function qf(e, t) {
    switch (e) {
      case "compositionend":
        return ao(t);
      case "keypress":
        return t.which !== 32 ? null : (so = !0, io);
      case "textInput":
        return e = t.data, e === io && so ? null : e;
      default:
        return null;
    }
  }
  function Xf(e, t) {
    if (bn) return e === "compositionend" || !qs && lo(e, t) ? (e = Ja(), _i = Us = mn = null, bn = !1, e) : null;
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
        return ro && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Yf = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function oo(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Yf[e.type] : t === "textarea";
  }
  function uo(e, t, n, r) {
    Ca(r), t = Ai(t, "onChange"), 0 < t.length && (n = new Hs("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
  }
  var zr = null, Or = null;
  function bf(e) {
    Mo(e, 0);
  }
  function Ci(e) {
    var t = nr(e);
    if (B(t)) return e;
  }
  function Jf(e, t) {
    if (e === "change") return t;
  }
  var co = !1;
  if (y) {
    var Xs;
    if (y) {
      var Ys = "oninput" in document;
      if (!Ys) {
        var fo = document.createElement("div");
        fo.setAttribute("oninput", "return;"), Ys = typeof fo.oninput == "function";
      }
      Xs = Ys;
    } else Xs = !1;
    co = Xs && (!document.documentMode || 9 < document.documentMode);
  }
  function ho() {
    zr && (zr.detachEvent("onpropertychange", po), Or = zr = null);
  }
  function po(e) {
    if (e.propertyName === "value" && Ci(Or)) {
      var t = [];
      uo(t, Or, e, Rt(e)), Aa(bf, t);
    }
  }
  function Zf(e, t, n) {
    e === "focusin" ? (ho(), zr = t, Or = n, zr.attachEvent("onpropertychange", po)) : e === "focusout" && ho();
  }
  function ed(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Ci(Or);
  }
  function td(e, t) {
    if (e === "click") return Ci(t);
  }
  function nd(e, t) {
    if (e === "input" || e === "change") return Ci(t);
  }
  function rd(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Ot = typeof Object.is == "function" ? Object.is : rd;
  function Dr(e, t) {
    if (Ot(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e), r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var s = n[r];
      if (!j.call(t, s) || !Ot(e[s], t[s])) return !1;
    }
    return !0;
  }
  function mo(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function vo(e, t) {
    var n = mo(e);
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
      n = mo(n);
    }
  }
  function yo(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? yo(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function go() {
    for (var e = window, t = ee(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = ee(e.document);
    }
    return t;
  }
  function bs(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function id(e) {
    var t = go(), n = e.focusedElem, r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && yo(n.ownerDocument.documentElement, n)) {
      if (r !== null && bs(n)) {
        if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
        else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var s = n.textContent.length, a = Math.min(r.start, s);
          r = r.end === void 0 ? a : Math.min(r.end, s), !e.extend && a > r && (s = r, r = a, a = s), s = vo(n, a);
          var f = vo(
            n,
            r
          );
          s && f && (e.rangeCount !== 1 || e.anchorNode !== s.node || e.anchorOffset !== s.offset || e.focusNode !== f.node || e.focusOffset !== f.offset) && (t = t.createRange(), t.setStart(s.node, s.offset), e.removeAllRanges(), a > r ? (e.addRange(t), e.extend(f.node, f.offset)) : (t.setEnd(f.node, f.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
    }
  }
  var sd = y && "documentMode" in document && 11 >= document.documentMode, Jn = null, Js = null, Br = null, Zs = !1;
  function ko(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Zs || Jn == null || Jn !== ee(r) || (r = Jn, "selectionStart" in r && bs(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Br && Dr(Br, r) || (Br = r, r = Ai(Js, "onSelect"), 0 < r.length && (t = new Hs("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Jn)));
  }
  function Ri(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var Zn = { animationend: Ri("Animation", "AnimationEnd"), animationiteration: Ri("Animation", "AnimationIteration"), animationstart: Ri("Animation", "AnimationStart"), transitionend: Ri("Transition", "TransitionEnd") }, el = {}, xo = {};
  y && (xo = document.createElement("div").style, "AnimationEvent" in window || (delete Zn.animationend.animation, delete Zn.animationiteration.animation, delete Zn.animationstart.animation), "TransitionEvent" in window || delete Zn.transitionend.transition);
  function Pi(e) {
    if (el[e]) return el[e];
    if (!Zn[e]) return e;
    var t = Zn[e], n;
    for (n in t) if (t.hasOwnProperty(n) && n in xo) return el[e] = t[n];
    return e;
  }
  var wo = Pi("animationend"), So = Pi("animationiteration"), jo = Pi("animationstart"), Eo = Pi("transitionend"), _o = /* @__PURE__ */ new Map(), No = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function vn(e, t) {
    _o.set(e, t), h(t, [e]);
  }
  for (var tl = 0; tl < No.length; tl++) {
    var nl = No[tl], ld = nl.toLowerCase(), ad = nl[0].toUpperCase() + nl.slice(1);
    vn(ld, "on" + ad);
  }
  vn(wo, "onAnimationEnd"), vn(So, "onAnimationIteration"), vn(jo, "onAnimationStart"), vn("dblclick", "onDoubleClick"), vn("focusin", "onFocus"), vn("focusout", "onBlur"), vn(Eo, "onTransitionEnd"), v("onMouseEnter", ["mouseout", "mouseover"]), v("onMouseLeave", ["mouseout", "mouseover"]), v("onPointerEnter", ["pointerout", "pointerover"]), v("onPointerLeave", ["pointerout", "pointerover"]), h("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), h("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), h("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), h("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), h("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), h("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Vr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), od = new Set("cancel close invalid load scroll toggle".split(" ").concat(Vr));
  function To(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, lf(r, t, void 0, e), e.currentTarget = null;
  }
  function Mo(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n], s = r.event;
      r = r.listeners;
      e: {
        var a = void 0;
        if (t) for (var f = r.length - 1; 0 <= f; f--) {
          var p = r[f], m = p.instance, E = p.currentTarget;
          if (p = p.listener, m !== a && s.isPropagationStopped()) break e;
          To(s, p, E), a = m;
        }
        else for (f = 0; f < r.length; f++) {
          if (p = r[f], m = p.instance, E = p.currentTarget, p = p.listener, m !== a && s.isPropagationStopped()) break e;
          To(s, p, E), a = m;
        }
      }
    }
    if (mi) throw e = As, mi = !1, As = null, e;
  }
  function Ke(e, t) {
    var n = t[cl];
    n === void 0 && (n = t[cl] = /* @__PURE__ */ new Set());
    var r = e + "__bubble";
    n.has(r) || (Co(t, e, 2, !1), n.add(r));
  }
  function rl(e, t, n) {
    var r = 0;
    t && (r |= 4), Co(n, e, r, t);
  }
  var Li = "_reactListening" + Math.random().toString(36).slice(2);
  function Ur(e) {
    if (!e[Li]) {
      e[Li] = !0, u.forEach(function(n) {
        n !== "selectionchange" && (od.has(n) || rl(n, !1, e), rl(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Li] || (t[Li] = !0, rl("selectionchange", !1, t));
    }
  }
  function Co(e, t, n, r) {
    switch (ba(t)) {
      case 1:
        var s = Sf;
        break;
      case 4:
        s = jf;
        break;
      default:
        s = Bs;
    }
    n = s.bind(null, t, n, e), s = void 0, !Ls || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (s = !0), r ? s !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: s }) : e.addEventListener(t, n, !0) : s !== void 0 ? e.addEventListener(t, n, { passive: s }) : e.addEventListener(t, n, !1);
  }
  function il(e, t, n, r, s) {
    var a = r;
    if ((t & 1) === 0 && (t & 2) === 0 && r !== null) e: for (; ; ) {
      if (r === null) return;
      var f = r.tag;
      if (f === 3 || f === 4) {
        var p = r.stateNode.containerInfo;
        if (p === s || p.nodeType === 8 && p.parentNode === s) break;
        if (f === 4) for (f = r.return; f !== null; ) {
          var m = f.tag;
          if ((m === 3 || m === 4) && (m = f.stateNode.containerInfo, m === s || m.nodeType === 8 && m.parentNode === s)) return;
          f = f.return;
        }
        for (; p !== null; ) {
          if (f = Ln(p), f === null) return;
          if (m = f.tag, m === 5 || m === 6) {
            r = a = f;
            continue e;
          }
          p = p.parentNode;
        }
      }
      r = r.return;
    }
    Aa(function() {
      var E = a, R = Rt(n), I = [];
      e: {
        var C = _o.get(e);
        if (C !== void 0) {
          var V = Hs, W = e;
          switch (e) {
            case "keypress":
              if (Ni(n) === 0) break e;
            case "keydown":
            case "keyup":
              V = Of;
              break;
            case "focusin":
              W = "focus", V = Qs;
              break;
            case "focusout":
              W = "blur", V = Qs;
              break;
            case "beforeblur":
            case "afterblur":
              V = Qs;
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
              V = eo;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              V = Nf;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              V = Vf;
              break;
            case wo:
            case So:
            case jo:
              V = Cf;
              break;
            case Eo:
              V = Hf;
              break;
            case "scroll":
              V = Ef;
              break;
            case "wheel":
              V = Kf;
              break;
            case "copy":
            case "cut":
            case "paste":
              V = Pf;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              V = no;
          }
          var K = (t & 4) !== 0, Ze = !K && e === "scroll", x = K ? C !== null ? C + "Capture" : null : C;
          K = [];
          for (var g = E, w; g !== null; ) {
            w = g;
            var $ = w.stateNode;
            if (w.tag === 5 && $ !== null && (w = $, x !== null && ($ = Er(g, x), $ != null && K.push(Hr(g, $, w)))), Ze) break;
            g = g.return;
          }
          0 < K.length && (C = new V(C, W, null, n, R), I.push({ event: C, listeners: K }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (C = e === "mouseover" || e === "pointerover", V = e === "mouseout" || e === "pointerout", C && n !== tn && (W = n.relatedTarget || n.fromElement) && (Ln(W) || W[nn])) break e;
          if ((V || C) && (C = R.window === R ? R : (C = R.ownerDocument) ? C.defaultView || C.parentWindow : window, V ? (W = n.relatedTarget || n.toElement, V = E, W = W ? Ln(W) : null, W !== null && (Ze = Pn(W), W !== Ze || W.tag !== 5 && W.tag !== 6) && (W = null)) : (V = null, W = E), V !== W)) {
            if (K = eo, $ = "onMouseLeave", x = "onMouseEnter", g = "mouse", (e === "pointerout" || e === "pointerover") && (K = no, $ = "onPointerLeave", x = "onPointerEnter", g = "pointer"), Ze = V == null ? C : nr(V), w = W == null ? C : nr(W), C = new K($, g + "leave", V, n, R), C.target = Ze, C.relatedTarget = w, $ = null, Ln(R) === E && (K = new K(x, g + "enter", W, n, R), K.target = w, K.relatedTarget = Ze, $ = K), Ze = $, V && W) t: {
              for (K = V, x = W, g = 0, w = K; w; w = er(w)) g++;
              for (w = 0, $ = x; $; $ = er($)) w++;
              for (; 0 < g - w; ) K = er(K), g--;
              for (; 0 < w - g; ) x = er(x), w--;
              for (; g--; ) {
                if (K === x || x !== null && K === x.alternate) break t;
                K = er(K), x = er(x);
              }
              K = null;
            }
            else K = null;
            V !== null && Ro(I, C, V, K, !1), W !== null && Ze !== null && Ro(I, Ze, W, K, !0);
          }
        }
        e: {
          if (C = E ? nr(E) : window, V = C.nodeName && C.nodeName.toLowerCase(), V === "select" || V === "input" && C.type === "file") var Y = Jf;
          else if (oo(C)) if (co) Y = nd;
          else {
            Y = ed;
            var ne = Zf;
          }
          else (V = C.nodeName) && V.toLowerCase() === "input" && (C.type === "checkbox" || C.type === "radio") && (Y = td);
          if (Y && (Y = Y(e, E))) {
            uo(I, Y, n, R);
            break e;
          }
          ne && ne(e, C, E), e === "focusout" && (ne = C._wrapperState) && ne.controlled && C.type === "number" && pe(C, "number", C.value);
        }
        switch (ne = E ? nr(E) : window, e) {
          case "focusin":
            (oo(ne) || ne.contentEditable === "true") && (Jn = ne, Js = E, Br = null);
            break;
          case "focusout":
            Br = Js = Jn = null;
            break;
          case "mousedown":
            Zs = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Zs = !1, ko(I, n, R);
            break;
          case "selectionchange":
            if (sd) break;
          case "keydown":
          case "keyup":
            ko(I, n, R);
        }
        var re;
        if (qs) e: {
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
        else bn ? lo(e, n) && (oe = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (oe = "onCompositionStart");
        oe && (ro && n.locale !== "ko" && (bn || oe !== "onCompositionStart" ? oe === "onCompositionEnd" && bn && (re = Ja()) : (mn = R, Us = "value" in mn ? mn.value : mn.textContent, bn = !0)), ne = Ai(E, oe), 0 < ne.length && (oe = new to(oe, e, null, n, R), I.push({ event: oe, listeners: ne }), re ? oe.data = re : (re = ao(n), re !== null && (oe.data = re)))), (re = Gf ? qf(e, n) : Xf(e, n)) && (E = Ai(E, "onBeforeInput"), 0 < E.length && (R = new to("onBeforeInput", "beforeinput", null, n, R), I.push({ event: R, listeners: E }), R.data = re));
      }
      Mo(I, t);
    });
  }
  function Hr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Ai(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var s = e, a = s.stateNode;
      s.tag === 5 && a !== null && (s = a, a = Er(e, n), a != null && r.unshift(Hr(e, a, s)), a = Er(e, t), a != null && r.push(Hr(e, a, s))), e = e.return;
    }
    return r;
  }
  function er(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Ro(e, t, n, r, s) {
    for (var a = t._reactName, f = []; n !== null && n !== r; ) {
      var p = n, m = p.alternate, E = p.stateNode;
      if (m !== null && m === r) break;
      p.tag === 5 && E !== null && (p = E, s ? (m = Er(n, a), m != null && f.unshift(Hr(n, m, p))) : s || (m = Er(n, a), m != null && f.push(Hr(n, m, p)))), n = n.return;
    }
    f.length !== 0 && e.push({ event: t, listeners: f });
  }
  var ud = /\r\n?/g, cd = /\u0000|\uFFFD/g;
  function Po(e) {
    return (typeof e == "string" ? e : "" + e).replace(ud, `
`).replace(cd, "");
  }
  function Ii(e, t, n) {
    if (t = Po(t), Po(e) !== t && n) throw Error(l(425));
  }
  function Fi() {
  }
  var sl = null, ll = null;
  function al(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var ol = typeof setTimeout == "function" ? setTimeout : void 0, fd = typeof clearTimeout == "function" ? clearTimeout : void 0, Lo = typeof Promise == "function" ? Promise : void 0, dd = typeof queueMicrotask == "function" ? queueMicrotask : typeof Lo < "u" ? function(e) {
    return Lo.resolve(null).then(e).catch(hd);
  } : ol;
  function hd(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function ul(e, t) {
    var n = t, r = 0;
    do {
      var s = n.nextSibling;
      if (e.removeChild(n), s && s.nodeType === 8) if (n = s.data, n === "/$") {
        if (r === 0) {
          e.removeChild(s), Ar(t);
          return;
        }
        r--;
      } else n !== "$" && n !== "$?" && n !== "$!" || r++;
      n = s;
    } while (n);
    Ar(t);
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
  function Ao(e) {
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
  var tr = Math.random().toString(36).slice(2), Xt = "__reactFiber$" + tr, Wr = "__reactProps$" + tr, nn = "__reactContainer$" + tr, cl = "__reactEvents$" + tr, pd = "__reactListeners$" + tr, md = "__reactHandles$" + tr;
  function Ln(e) {
    var t = e[Xt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[nn] || n[Xt]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Ao(e); e !== null; ) {
          if (n = e[Xt]) return n;
          e = Ao(e);
        }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function Kr(e) {
    return e = e[Xt] || e[nn], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function nr(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(l(33));
  }
  function $i(e) {
    return e[Wr] || null;
  }
  var fl = [], rr = -1;
  function gn(e) {
    return { current: e };
  }
  function Qe(e) {
    0 > rr || (e.current = fl[rr], fl[rr] = null, rr--);
  }
  function He(e, t) {
    rr++, fl[rr] = e.current, e.current = t;
  }
  var kn = {}, dt = gn(kn), kt = gn(!1), An = kn;
  function ir(e, t) {
    var n = e.type.contextTypes;
    if (!n) return kn;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var s = {}, a;
    for (a in n) s[a] = t[a];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = s), s;
  }
  function xt(e) {
    return e = e.childContextTypes, e != null;
  }
  function zi() {
    Qe(kt), Qe(dt);
  }
  function Io(e, t, n) {
    if (dt.current !== kn) throw Error(l(168));
    He(dt, t), He(kt, n);
  }
  function Fo(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var s in r) if (!(s in t)) throw Error(l(108, _e(e) || "Unknown", s));
    return D({}, n, r);
  }
  function Oi(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || kn, An = dt.current, He(dt, e), He(kt, kt.current), !0;
  }
  function $o(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(l(169));
    n ? (e = Fo(e, t, An), r.__reactInternalMemoizedMergedChildContext = e, Qe(kt), Qe(dt), He(dt, e)) : Qe(kt), He(kt, n);
  }
  var rn = null, Di = !1, dl = !1;
  function zo(e) {
    rn === null ? rn = [e] : rn.push(e);
  }
  function vd(e) {
    Di = !0, zo(e);
  }
  function xn() {
    if (!dl && rn !== null) {
      dl = !0;
      var e = 0, t = Oe;
      try {
        var n = rn;
        for (Oe = 1; e < n.length; e++) {
          var r = n[e];
          do
            r = r(!0);
          while (r !== null);
        }
        rn = null, Di = !1;
      } catch (s) {
        throw rn !== null && (rn = rn.slice(e + 1)), Oa(Is, xn), s;
      } finally {
        Oe = t, dl = !1;
      }
    }
    return null;
  }
  var sr = [], lr = 0, Bi = null, Vi = 0, Pt = [], Lt = 0, In = null, sn = 1, ln = "";
  function Fn(e, t) {
    sr[lr++] = Vi, sr[lr++] = Bi, Bi = e, Vi = t;
  }
  function Oo(e, t, n) {
    Pt[Lt++] = sn, Pt[Lt++] = ln, Pt[Lt++] = In, In = e;
    var r = sn;
    e = ln;
    var s = 32 - zt(r) - 1;
    r &= ~(1 << s), n += 1;
    var a = 32 - zt(t) + s;
    if (30 < a) {
      var f = s - s % 5;
      a = (r & (1 << f) - 1).toString(32), r >>= f, s -= f, sn = 1 << 32 - zt(t) + s | n << s | r, ln = a + e;
    } else sn = 1 << a | n << s | r, ln = e;
  }
  function hl(e) {
    e.return !== null && (Fn(e, 1), Oo(e, 1, 0));
  }
  function pl(e) {
    for (; e === Bi; ) Bi = sr[--lr], sr[lr] = null, Vi = sr[--lr], sr[lr] = null;
    for (; e === In; ) In = Pt[--Lt], Pt[Lt] = null, ln = Pt[--Lt], Pt[Lt] = null, sn = Pt[--Lt], Pt[Lt] = null;
  }
  var Nt = null, Tt = null, Ge = !1, Dt = null;
  function Do(e, t) {
    var n = $t(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
  }
  function Bo(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Nt = e, Tt = yn(t.firstChild), !0) : !1;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Nt = e, Tt = null, !0) : !1;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (n = In !== null ? { id: sn, overflow: ln } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = $t(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Nt = e, Tt = null, !0) : !1;
      default:
        return !1;
    }
  }
  function ml(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function vl(e) {
    if (Ge) {
      var t = Tt;
      if (t) {
        var n = t;
        if (!Bo(e, t)) {
          if (ml(e)) throw Error(l(418));
          t = yn(n.nextSibling);
          var r = Nt;
          t && Bo(e, t) ? Do(r, n) : (e.flags = e.flags & -4097 | 2, Ge = !1, Nt = e);
        }
      } else {
        if (ml(e)) throw Error(l(418));
        e.flags = e.flags & -4097 | 2, Ge = !1, Nt = e;
      }
    }
  }
  function Vo(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    Nt = e;
  }
  function Ui(e) {
    if (e !== Nt) return !1;
    if (!Ge) return Vo(e), Ge = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !al(e.type, e.memoizedProps)), t && (t = Tt)) {
      if (ml(e)) throw Uo(), Error(l(418));
      for (; t; ) Do(e, t), t = yn(t.nextSibling);
    }
    if (Vo(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(l(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                Tt = yn(e.nextSibling);
                break e;
              }
              t--;
            } else n !== "$" && n !== "$!" && n !== "$?" || t++;
          }
          e = e.nextSibling;
        }
        Tt = null;
      }
    } else Tt = Nt ? yn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Uo() {
    for (var e = Tt; e; ) e = yn(e.nextSibling);
  }
  function ar() {
    Tt = Nt = null, Ge = !1;
  }
  function yl(e) {
    Dt === null ? Dt = [e] : Dt.push(e);
  }
  var yd = te.ReactCurrentBatchConfig;
  function Qr(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (n._owner) {
        if (n = n._owner, n) {
          if (n.tag !== 1) throw Error(l(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(l(147, e));
        var s = r, a = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === a ? t.ref : (t = function(f) {
          var p = s.refs;
          f === null ? delete p[a] : p[a] = f;
        }, t._stringRef = a, t);
      }
      if (typeof e != "string") throw Error(l(284));
      if (!n._owner) throw Error(l(290, e));
    }
    return e;
  }
  function Hi(e, t) {
    throw e = Object.prototype.toString.call(t), Error(l(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
  }
  function Ho(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Wo(e) {
    function t(x, g) {
      if (e) {
        var w = x.deletions;
        w === null ? (x.deletions = [g], x.flags |= 16) : w.push(g);
      }
    }
    function n(x, g) {
      if (!e) return null;
      for (; g !== null; ) t(x, g), g = g.sibling;
      return null;
    }
    function r(x, g) {
      for (x = /* @__PURE__ */ new Map(); g !== null; ) g.key !== null ? x.set(g.key, g) : x.set(g.index, g), g = g.sibling;
      return x;
    }
    function s(x, g) {
      return x = Mn(x, g), x.index = 0, x.sibling = null, x;
    }
    function a(x, g, w) {
      return x.index = w, e ? (w = x.alternate, w !== null ? (w = w.index, w < g ? (x.flags |= 2, g) : w) : (x.flags |= 2, g)) : (x.flags |= 1048576, g);
    }
    function f(x) {
      return e && x.alternate === null && (x.flags |= 2), x;
    }
    function p(x, g, w, $) {
      return g === null || g.tag !== 6 ? (g = oa(w, x.mode, $), g.return = x, g) : (g = s(g, w), g.return = x, g);
    }
    function m(x, g, w, $) {
      var Y = w.type;
      return Y === de ? R(x, g, w.props.children, $, w.key) : g !== null && (g.elementType === Y || typeof Y == "object" && Y !== null && Y.$$typeof === Be && Ho(Y) === g.type) ? ($ = s(g, w.props), $.ref = Qr(x, g, w), $.return = x, $) : ($ = hs(w.type, w.key, w.props, null, x.mode, $), $.ref = Qr(x, g, w), $.return = x, $);
    }
    function E(x, g, w, $) {
      return g === null || g.tag !== 4 || g.stateNode.containerInfo !== w.containerInfo || g.stateNode.implementation !== w.implementation ? (g = ua(w, x.mode, $), g.return = x, g) : (g = s(g, w.children || []), g.return = x, g);
    }
    function R(x, g, w, $, Y) {
      return g === null || g.tag !== 7 ? (g = Hn(w, x.mode, $, Y), g.return = x, g) : (g = s(g, w), g.return = x, g);
    }
    function I(x, g, w) {
      if (typeof g == "string" && g !== "" || typeof g == "number") return g = oa("" + g, x.mode, w), g.return = x, g;
      if (typeof g == "object" && g !== null) {
        switch (g.$$typeof) {
          case fe:
            return w = hs(g.type, g.key, g.props, null, x.mode, w), w.ref = Qr(x, null, g), w.return = x, w;
          case Ee:
            return g = ua(g, x.mode, w), g.return = x, g;
          case Be:
            var $ = g._init;
            return I(x, $(g._payload), w);
        }
        if (Se(g) || b(g)) return g = Hn(g, x.mode, w, null), g.return = x, g;
        Hi(x, g);
      }
      return null;
    }
    function C(x, g, w, $) {
      var Y = g !== null ? g.key : null;
      if (typeof w == "string" && w !== "" || typeof w == "number") return Y !== null ? null : p(x, g, "" + w, $);
      if (typeof w == "object" && w !== null) {
        switch (w.$$typeof) {
          case fe:
            return w.key === Y ? m(x, g, w, $) : null;
          case Ee:
            return w.key === Y ? E(x, g, w, $) : null;
          case Be:
            return Y = w._init, C(
              x,
              g,
              Y(w._payload),
              $
            );
        }
        if (Se(w) || b(w)) return Y !== null ? null : R(x, g, w, $, null);
        Hi(x, w);
      }
      return null;
    }
    function V(x, g, w, $, Y) {
      if (typeof $ == "string" && $ !== "" || typeof $ == "number") return x = x.get(w) || null, p(g, x, "" + $, Y);
      if (typeof $ == "object" && $ !== null) {
        switch ($.$$typeof) {
          case fe:
            return x = x.get($.key === null ? w : $.key) || null, m(g, x, $, Y);
          case Ee:
            return x = x.get($.key === null ? w : $.key) || null, E(g, x, $, Y);
          case Be:
            var ne = $._init;
            return V(x, g, w, ne($._payload), Y);
        }
        if (Se($) || b($)) return x = x.get(w) || null, R(g, x, $, Y, null);
        Hi(g, $);
      }
      return null;
    }
    function W(x, g, w, $) {
      for (var Y = null, ne = null, re = g, oe = g = 0, at = null; re !== null && oe < w.length; oe++) {
        re.index > oe ? (at = re, re = null) : at = re.sibling;
        var Le = C(x, re, w[oe], $);
        if (Le === null) {
          re === null && (re = at);
          break;
        }
        e && re && Le.alternate === null && t(x, re), g = a(Le, g, oe), ne === null ? Y = Le : ne.sibling = Le, ne = Le, re = at;
      }
      if (oe === w.length) return n(x, re), Ge && Fn(x, oe), Y;
      if (re === null) {
        for (; oe < w.length; oe++) re = I(x, w[oe], $), re !== null && (g = a(re, g, oe), ne === null ? Y = re : ne.sibling = re, ne = re);
        return Ge && Fn(x, oe), Y;
      }
      for (re = r(x, re); oe < w.length; oe++) at = V(re, x, oe, w[oe], $), at !== null && (e && at.alternate !== null && re.delete(at.key === null ? oe : at.key), g = a(at, g, oe), ne === null ? Y = at : ne.sibling = at, ne = at);
      return e && re.forEach(function(Cn) {
        return t(x, Cn);
      }), Ge && Fn(x, oe), Y;
    }
    function K(x, g, w, $) {
      var Y = b(w);
      if (typeof Y != "function") throw Error(l(150));
      if (w = Y.call(w), w == null) throw Error(l(151));
      for (var ne = Y = null, re = g, oe = g = 0, at = null, Le = w.next(); re !== null && !Le.done; oe++, Le = w.next()) {
        re.index > oe ? (at = re, re = null) : at = re.sibling;
        var Cn = C(x, re, Le.value, $);
        if (Cn === null) {
          re === null && (re = at);
          break;
        }
        e && re && Cn.alternate === null && t(x, re), g = a(Cn, g, oe), ne === null ? Y = Cn : ne.sibling = Cn, ne = Cn, re = at;
      }
      if (Le.done) return n(
        x,
        re
      ), Ge && Fn(x, oe), Y;
      if (re === null) {
        for (; !Le.done; oe++, Le = w.next()) Le = I(x, Le.value, $), Le !== null && (g = a(Le, g, oe), ne === null ? Y = Le : ne.sibling = Le, ne = Le);
        return Ge && Fn(x, oe), Y;
      }
      for (re = r(x, re); !Le.done; oe++, Le = w.next()) Le = V(re, x, oe, Le.value, $), Le !== null && (e && Le.alternate !== null && re.delete(Le.key === null ? oe : Le.key), g = a(Le, g, oe), ne === null ? Y = Le : ne.sibling = Le, ne = Le);
      return e && re.forEach(function(Yd) {
        return t(x, Yd);
      }), Ge && Fn(x, oe), Y;
    }
    function Ze(x, g, w, $) {
      if (typeof w == "object" && w !== null && w.type === de && w.key === null && (w = w.props.children), typeof w == "object" && w !== null) {
        switch (w.$$typeof) {
          case fe:
            e: {
              for (var Y = w.key, ne = g; ne !== null; ) {
                if (ne.key === Y) {
                  if (Y = w.type, Y === de) {
                    if (ne.tag === 7) {
                      n(x, ne.sibling), g = s(ne, w.props.children), g.return = x, x = g;
                      break e;
                    }
                  } else if (ne.elementType === Y || typeof Y == "object" && Y !== null && Y.$$typeof === Be && Ho(Y) === ne.type) {
                    n(x, ne.sibling), g = s(ne, w.props), g.ref = Qr(x, ne, w), g.return = x, x = g;
                    break e;
                  }
                  n(x, ne);
                  break;
                } else t(x, ne);
                ne = ne.sibling;
              }
              w.type === de ? (g = Hn(w.props.children, x.mode, $, w.key), g.return = x, x = g) : ($ = hs(w.type, w.key, w.props, null, x.mode, $), $.ref = Qr(x, g, w), $.return = x, x = $);
            }
            return f(x);
          case Ee:
            e: {
              for (ne = w.key; g !== null; ) {
                if (g.key === ne) if (g.tag === 4 && g.stateNode.containerInfo === w.containerInfo && g.stateNode.implementation === w.implementation) {
                  n(x, g.sibling), g = s(g, w.children || []), g.return = x, x = g;
                  break e;
                } else {
                  n(x, g);
                  break;
                }
                else t(x, g);
                g = g.sibling;
              }
              g = ua(w, x.mode, $), g.return = x, x = g;
            }
            return f(x);
          case Be:
            return ne = w._init, Ze(x, g, ne(w._payload), $);
        }
        if (Se(w)) return W(x, g, w, $);
        if (b(w)) return K(x, g, w, $);
        Hi(x, w);
      }
      return typeof w == "string" && w !== "" || typeof w == "number" ? (w = "" + w, g !== null && g.tag === 6 ? (n(x, g.sibling), g = s(g, w), g.return = x, x = g) : (n(x, g), g = oa(w, x.mode, $), g.return = x, x = g), f(x)) : n(x, g);
    }
    return Ze;
  }
  var or = Wo(!0), Ko = Wo(!1), Wi = gn(null), Ki = null, ur = null, gl = null;
  function kl() {
    gl = ur = Ki = null;
  }
  function xl(e) {
    var t = Wi.current;
    Qe(Wi), e._currentValue = t;
  }
  function wl(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function cr(e, t) {
    Ki = e, gl = ur = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (wt = !0), e.firstContext = null);
  }
  function At(e) {
    var t = e._currentValue;
    if (gl !== e) if (e = { context: e, memoizedValue: t, next: null }, ur === null) {
      if (Ki === null) throw Error(l(308));
      ur = e, Ki.dependencies = { lanes: 0, firstContext: e };
    } else ur = ur.next = e;
    return t;
  }
  var $n = null;
  function Sl(e) {
    $n === null ? $n = [e] : $n.push(e);
  }
  function Qo(e, t, n, r) {
    var s = t.interleaved;
    return s === null ? (n.next = n, Sl(t)) : (n.next = s.next, s.next = n), t.interleaved = n, an(e, r);
  }
  function an(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null;
  }
  var wn = !1;
  function jl(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Go(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function on(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Sn(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, (Ce & 2) !== 0) {
      var s = r.pending;
      return s === null ? t.next = t : (t.next = s.next, s.next = t), r.pending = t, an(e, n);
    }
    return s = r.interleaved, s === null ? (t.next = t, Sl(r)) : (t.next = s.next, s.next = t), r.interleaved = t, an(e, n);
  }
  function Qi(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, zs(e, n);
    }
  }
  function qo(e, t) {
    var n = e.updateQueue, r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
      var s = null, a = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var f = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
          a === null ? s = a = f : a = a.next = f, n = n.next;
        } while (n !== null);
        a === null ? s = a = t : a = a.next = t;
      } else s = a = t;
      n = { baseState: r.baseState, firstBaseUpdate: s, lastBaseUpdate: a, shared: r.shared, effects: r.effects }, e.updateQueue = n;
      return;
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
  }
  function Gi(e, t, n, r) {
    var s = e.updateQueue;
    wn = !1;
    var a = s.firstBaseUpdate, f = s.lastBaseUpdate, p = s.shared.pending;
    if (p !== null) {
      s.shared.pending = null;
      var m = p, E = m.next;
      m.next = null, f === null ? a = E : f.next = E, f = m;
      var R = e.alternate;
      R !== null && (R = R.updateQueue, p = R.lastBaseUpdate, p !== f && (p === null ? R.firstBaseUpdate = E : p.next = E, R.lastBaseUpdate = m));
    }
    if (a !== null) {
      var I = s.baseState;
      f = 0, R = E = m = null, p = a;
      do {
        var C = p.lane, V = p.eventTime;
        if ((r & C) === C) {
          R !== null && (R = R.next = {
            eventTime: V,
            lane: 0,
            tag: p.tag,
            payload: p.payload,
            callback: p.callback,
            next: null
          });
          e: {
            var W = e, K = p;
            switch (C = t, V = n, K.tag) {
              case 1:
                if (W = K.payload, typeof W == "function") {
                  I = W.call(V, I, C);
                  break e;
                }
                I = W;
                break e;
              case 3:
                W.flags = W.flags & -65537 | 128;
              case 0:
                if (W = K.payload, C = typeof W == "function" ? W.call(V, I, C) : W, C == null) break e;
                I = D({}, I, C);
                break e;
              case 2:
                wn = !0;
            }
          }
          p.callback !== null && p.lane !== 0 && (e.flags |= 64, C = s.effects, C === null ? s.effects = [p] : C.push(p));
        } else V = { eventTime: V, lane: C, tag: p.tag, payload: p.payload, callback: p.callback, next: null }, R === null ? (E = R = V, m = I) : R = R.next = V, f |= C;
        if (p = p.next, p === null) {
          if (p = s.shared.pending, p === null) break;
          C = p, p = C.next, C.next = null, s.lastBaseUpdate = C, s.shared.pending = null;
        }
      } while (!0);
      if (R === null && (m = I), s.baseState = m, s.firstBaseUpdate = E, s.lastBaseUpdate = R, t = s.shared.interleaved, t !== null) {
        s = t;
        do
          f |= s.lane, s = s.next;
        while (s !== t);
      } else a === null && (s.shared.lanes = 0);
      Dn |= f, e.lanes = f, e.memoizedState = I;
    }
  }
  function Xo(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
      var r = e[t], s = r.callback;
      if (s !== null) {
        if (r.callback = null, r = n, typeof s != "function") throw Error(l(191, s));
        s.call(r);
      }
    }
  }
  var Gr = {}, Yt = gn(Gr), qr = gn(Gr), Xr = gn(Gr);
  function zn(e) {
    if (e === Gr) throw Error(l(174));
    return e;
  }
  function El(e, t) {
    switch (He(Xr, t), He(qr, e), He(Yt, Gr), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Ie(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Ie(t, e);
    }
    Qe(Yt), He(Yt, t);
  }
  function fr() {
    Qe(Yt), Qe(qr), Qe(Xr);
  }
  function Yo(e) {
    zn(Xr.current);
    var t = zn(Yt.current), n = Ie(t, e.type);
    t !== n && (He(qr, e), He(Yt, n));
  }
  function _l(e) {
    qr.current === e && (Qe(Yt), Qe(qr));
  }
  var qe = gn(0);
  function qi(e) {
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
  var Nl = [];
  function Tl() {
    for (var e = 0; e < Nl.length; e++) Nl[e]._workInProgressVersionPrimary = null;
    Nl.length = 0;
  }
  var Xi = te.ReactCurrentDispatcher, Ml = te.ReactCurrentBatchConfig, On = 0, Xe = null, tt = null, st = null, Yi = !1, Yr = !1, br = 0, gd = 0;
  function ht() {
    throw Error(l(321));
  }
  function Cl(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!Ot(e[n], t[n])) return !1;
    return !0;
  }
  function Rl(e, t, n, r, s, a) {
    if (On = a, Xe = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Xi.current = e === null || e.memoizedState === null ? Sd : jd, e = n(r, s), Yr) {
      a = 0;
      do {
        if (Yr = !1, br = 0, 25 <= a) throw Error(l(301));
        a += 1, st = tt = null, t.updateQueue = null, Xi.current = Ed, e = n(r, s);
      } while (Yr);
    }
    if (Xi.current = Zi, t = tt !== null && tt.next !== null, On = 0, st = tt = Xe = null, Yi = !1, t) throw Error(l(300));
    return e;
  }
  function Pl() {
    var e = br !== 0;
    return br = 0, e;
  }
  function bt() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return st === null ? Xe.memoizedState = st = e : st = st.next = e, st;
  }
  function It() {
    if (tt === null) {
      var e = Xe.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = tt.next;
    var t = st === null ? Xe.memoizedState : st.next;
    if (t !== null) st = t, tt = e;
    else {
      if (e === null) throw Error(l(310));
      tt = e, e = { memoizedState: tt.memoizedState, baseState: tt.baseState, baseQueue: tt.baseQueue, queue: tt.queue, next: null }, st === null ? Xe.memoizedState = st = e : st = st.next = e;
    }
    return st;
  }
  function Jr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Ll(e) {
    var t = It(), n = t.queue;
    if (n === null) throw Error(l(311));
    n.lastRenderedReducer = e;
    var r = tt, s = r.baseQueue, a = n.pending;
    if (a !== null) {
      if (s !== null) {
        var f = s.next;
        s.next = a.next, a.next = f;
      }
      r.baseQueue = s = a, n.pending = null;
    }
    if (s !== null) {
      a = s.next, r = r.baseState;
      var p = f = null, m = null, E = a;
      do {
        var R = E.lane;
        if ((On & R) === R) m !== null && (m = m.next = { lane: 0, action: E.action, hasEagerState: E.hasEagerState, eagerState: E.eagerState, next: null }), r = E.hasEagerState ? E.eagerState : e(r, E.action);
        else {
          var I = {
            lane: R,
            action: E.action,
            hasEagerState: E.hasEagerState,
            eagerState: E.eagerState,
            next: null
          };
          m === null ? (p = m = I, f = r) : m = m.next = I, Xe.lanes |= R, Dn |= R;
        }
        E = E.next;
      } while (E !== null && E !== a);
      m === null ? f = r : m.next = p, Ot(r, t.memoizedState) || (wt = !0), t.memoizedState = r, t.baseState = f, t.baseQueue = m, n.lastRenderedState = r;
    }
    if (e = n.interleaved, e !== null) {
      s = e;
      do
        a = s.lane, Xe.lanes |= a, Dn |= a, s = s.next;
      while (s !== e);
    } else s === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function Al(e) {
    var t = It(), n = t.queue;
    if (n === null) throw Error(l(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch, s = n.pending, a = t.memoizedState;
    if (s !== null) {
      n.pending = null;
      var f = s = s.next;
      do
        a = e(a, f.action), f = f.next;
      while (f !== s);
      Ot(a, t.memoizedState) || (wt = !0), t.memoizedState = a, t.baseQueue === null && (t.baseState = a), n.lastRenderedState = a;
    }
    return [a, r];
  }
  function bo() {
  }
  function Jo(e, t) {
    var n = Xe, r = It(), s = t(), a = !Ot(r.memoizedState, s);
    if (a && (r.memoizedState = s, wt = !0), r = r.queue, Il(tu.bind(null, n, r, e), [e]), r.getSnapshot !== t || a || st !== null && st.memoizedState.tag & 1) {
      if (n.flags |= 2048, Zr(9, eu.bind(null, n, r, s, t), void 0, null), lt === null) throw Error(l(349));
      (On & 30) !== 0 || Zo(n, t, s);
    }
    return s;
  }
  function Zo(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = Xe.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Xe.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function eu(e, t, n, r) {
    t.value = n, t.getSnapshot = r, nu(t) && ru(e);
  }
  function tu(e, t, n) {
    return n(function() {
      nu(t) && ru(e);
    });
  }
  function nu(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !Ot(e, n);
    } catch {
      return !0;
    }
  }
  function ru(e) {
    var t = an(e, 1);
    t !== null && Ht(t, e, 1, -1);
  }
  function iu(e) {
    var t = bt();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Jr, lastRenderedState: e }, t.queue = e, e = e.dispatch = wd.bind(null, Xe, e), [t.memoizedState, e];
  }
  function Zr(e, t, n, r) {
    return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = Xe.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Xe.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
  }
  function su() {
    return It().memoizedState;
  }
  function bi(e, t, n, r) {
    var s = bt();
    Xe.flags |= e, s.memoizedState = Zr(1 | t, n, void 0, r === void 0 ? null : r);
  }
  function Ji(e, t, n, r) {
    var s = It();
    r = r === void 0 ? null : r;
    var a = void 0;
    if (tt !== null) {
      var f = tt.memoizedState;
      if (a = f.destroy, r !== null && Cl(r, f.deps)) {
        s.memoizedState = Zr(t, n, a, r);
        return;
      }
    }
    Xe.flags |= e, s.memoizedState = Zr(1 | t, n, a, r);
  }
  function lu(e, t) {
    return bi(8390656, 8, e, t);
  }
  function Il(e, t) {
    return Ji(2048, 8, e, t);
  }
  function au(e, t) {
    return Ji(4, 2, e, t);
  }
  function ou(e, t) {
    return Ji(4, 4, e, t);
  }
  function uu(e, t) {
    if (typeof t == "function") return e = e(), t(e), function() {
      t(null);
    };
    if (t != null) return e = e(), t.current = e, function() {
      t.current = null;
    };
  }
  function cu(e, t, n) {
    return n = n != null ? n.concat([e]) : null, Ji(4, 4, uu.bind(null, t, e), n);
  }
  function Fl() {
  }
  function fu(e, t) {
    var n = It();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Cl(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
  }
  function du(e, t) {
    var n = It();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Cl(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
  }
  function hu(e, t, n) {
    return (On & 21) === 0 ? (e.baseState && (e.baseState = !1, wt = !0), e.memoizedState = n) : (Ot(n, t) || (n = Ua(), Xe.lanes |= n, Dn |= n, e.baseState = !0), t);
  }
  function kd(e, t) {
    var n = Oe;
    Oe = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = Ml.transition;
    Ml.transition = {};
    try {
      e(!1), t();
    } finally {
      Oe = n, Ml.transition = r;
    }
  }
  function pu() {
    return It().memoizedState;
  }
  function xd(e, t, n) {
    var r = Nn(e);
    if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, mu(e)) vu(t, n);
    else if (n = Qo(e, t, n, r), n !== null) {
      var s = gt();
      Ht(n, e, r, s), yu(n, t, r);
    }
  }
  function wd(e, t, n) {
    var r = Nn(e), s = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (mu(e)) vu(t, s);
    else {
      var a = e.alternate;
      if (e.lanes === 0 && (a === null || a.lanes === 0) && (a = t.lastRenderedReducer, a !== null)) try {
        var f = t.lastRenderedState, p = a(f, n);
        if (s.hasEagerState = !0, s.eagerState = p, Ot(p, f)) {
          var m = t.interleaved;
          m === null ? (s.next = s, Sl(t)) : (s.next = m.next, m.next = s), t.interleaved = s;
          return;
        }
      } catch {
      }
      n = Qo(e, t, s, r), n !== null && (s = gt(), Ht(n, e, r, s), yu(n, t, r));
    }
  }
  function mu(e) {
    var t = e.alternate;
    return e === Xe || t !== null && t === Xe;
  }
  function vu(e, t) {
    Yr = Yi = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function yu(e, t, n) {
    if ((n & 4194240) !== 0) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, zs(e, n);
    }
  }
  var Zi = { readContext: At, useCallback: ht, useContext: ht, useEffect: ht, useImperativeHandle: ht, useInsertionEffect: ht, useLayoutEffect: ht, useMemo: ht, useReducer: ht, useRef: ht, useState: ht, useDebugValue: ht, useDeferredValue: ht, useTransition: ht, useMutableSource: ht, useSyncExternalStore: ht, useId: ht, unstable_isNewReconciler: !1 }, Sd = { readContext: At, useCallback: function(e, t) {
    return bt().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: At, useEffect: lu, useImperativeHandle: function(e, t, n) {
    return n = n != null ? n.concat([e]) : null, bi(
      4194308,
      4,
      uu.bind(null, t, e),
      n
    );
  }, useLayoutEffect: function(e, t) {
    return bi(4194308, 4, e, t);
  }, useInsertionEffect: function(e, t) {
    return bi(4, 2, e, t);
  }, useMemo: function(e, t) {
    var n = bt();
    return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
  }, useReducer: function(e, t, n) {
    var r = bt();
    return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = xd.bind(null, Xe, e), [r.memoizedState, e];
  }, useRef: function(e) {
    var t = bt();
    return e = { current: e }, t.memoizedState = e;
  }, useState: iu, useDebugValue: Fl, useDeferredValue: function(e) {
    return bt().memoizedState = e;
  }, useTransition: function() {
    var e = iu(!1), t = e[0];
    return e = kd.bind(null, e[1]), bt().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, n) {
    var r = Xe, s = bt();
    if (Ge) {
      if (n === void 0) throw Error(l(407));
      n = n();
    } else {
      if (n = t(), lt === null) throw Error(l(349));
      (On & 30) !== 0 || Zo(r, t, n);
    }
    s.memoizedState = n;
    var a = { value: n, getSnapshot: t };
    return s.queue = a, lu(tu.bind(
      null,
      r,
      a,
      e
    ), [e]), r.flags |= 2048, Zr(9, eu.bind(null, r, a, n, t), void 0, null), n;
  }, useId: function() {
    var e = bt(), t = lt.identifierPrefix;
    if (Ge) {
      var n = ln, r = sn;
      n = (r & ~(1 << 32 - zt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = br++, 0 < n && (t += "H" + n.toString(32)), t += ":";
    } else n = gd++, t = ":" + t + "r" + n.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, jd = {
    readContext: At,
    useCallback: fu,
    useContext: At,
    useEffect: Il,
    useImperativeHandle: cu,
    useInsertionEffect: au,
    useLayoutEffect: ou,
    useMemo: du,
    useReducer: Ll,
    useRef: su,
    useState: function() {
      return Ll(Jr);
    },
    useDebugValue: Fl,
    useDeferredValue: function(e) {
      var t = It();
      return hu(t, tt.memoizedState, e);
    },
    useTransition: function() {
      var e = Ll(Jr)[0], t = It().memoizedState;
      return [e, t];
    },
    useMutableSource: bo,
    useSyncExternalStore: Jo,
    useId: pu,
    unstable_isNewReconciler: !1
  }, Ed = { readContext: At, useCallback: fu, useContext: At, useEffect: Il, useImperativeHandle: cu, useInsertionEffect: au, useLayoutEffect: ou, useMemo: du, useReducer: Al, useRef: su, useState: function() {
    return Al(Jr);
  }, useDebugValue: Fl, useDeferredValue: function(e) {
    var t = It();
    return tt === null ? t.memoizedState = e : hu(t, tt.memoizedState, e);
  }, useTransition: function() {
    var e = Al(Jr)[0], t = It().memoizedState;
    return [e, t];
  }, useMutableSource: bo, useSyncExternalStore: Jo, useId: pu, unstable_isNewReconciler: !1 };
  function Bt(e, t) {
    if (e && e.defaultProps) {
      t = D({}, t), e = e.defaultProps;
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function $l(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : D({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var es = { isMounted: function(e) {
    return (e = e._reactInternals) ? Pn(e) === e : !1;
  }, enqueueSetState: function(e, t, n) {
    e = e._reactInternals;
    var r = gt(), s = Nn(e), a = on(r, s);
    a.payload = t, n != null && (a.callback = n), t = Sn(e, a, s), t !== null && (Ht(t, e, s, r), Qi(t, e, s));
  }, enqueueReplaceState: function(e, t, n) {
    e = e._reactInternals;
    var r = gt(), s = Nn(e), a = on(r, s);
    a.tag = 1, a.payload = t, n != null && (a.callback = n), t = Sn(e, a, s), t !== null && (Ht(t, e, s, r), Qi(t, e, s));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var n = gt(), r = Nn(e), s = on(n, r);
    s.tag = 2, t != null && (s.callback = t), t = Sn(e, s, r), t !== null && (Ht(t, e, r, n), Qi(t, e, r));
  } };
  function gu(e, t, n, r, s, a, f) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, a, f) : t.prototype && t.prototype.isPureReactComponent ? !Dr(n, r) || !Dr(s, a) : !0;
  }
  function ku(e, t, n) {
    var r = !1, s = kn, a = t.contextType;
    return typeof a == "object" && a !== null ? a = At(a) : (s = xt(t) ? An : dt.current, r = t.contextTypes, a = (r = r != null) ? ir(e, s) : kn), t = new t(n, a), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = es, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = s, e.__reactInternalMemoizedMaskedChildContext = a), t;
  }
  function xu(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && es.enqueueReplaceState(t, t.state, null);
  }
  function zl(e, t, n, r) {
    var s = e.stateNode;
    s.props = n, s.state = e.memoizedState, s.refs = {}, jl(e);
    var a = t.contextType;
    typeof a == "object" && a !== null ? s.context = At(a) : (a = xt(t) ? An : dt.current, s.context = ir(e, a)), s.state = e.memoizedState, a = t.getDerivedStateFromProps, typeof a == "function" && ($l(e, t, a, n), s.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof s.getSnapshotBeforeUpdate == "function" || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (t = s.state, typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount(), t !== s.state && es.enqueueReplaceState(s, s.state, null), Gi(e, n, s, r), s.state = e.memoizedState), typeof s.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function dr(e, t) {
    try {
      var n = "", r = t;
      do
        n += ye(r), r = r.return;
      while (r);
      var s = n;
    } catch (a) {
      s = `
Error generating stack: ` + a.message + `
` + a.stack;
    }
    return { value: e, source: t, stack: s, digest: null };
  }
  function Ol(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function Dl(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  var _d = typeof WeakMap == "function" ? WeakMap : Map;
  function wu(e, t, n) {
    n = on(-1, n), n.tag = 3, n.payload = { element: null };
    var r = t.value;
    return n.callback = function() {
      as || (as = !0, ea = r), Dl(e, t);
    }, n;
  }
  function Su(e, t, n) {
    n = on(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var s = t.value;
      n.payload = function() {
        return r(s);
      }, n.callback = function() {
        Dl(e, t);
      };
    }
    var a = e.stateNode;
    return a !== null && typeof a.componentDidCatch == "function" && (n.callback = function() {
      Dl(e, t), typeof r != "function" && (En === null ? En = /* @__PURE__ */ new Set([this]) : En.add(this));
      var f = t.stack;
      this.componentDidCatch(t.value, { componentStack: f !== null ? f : "" });
    }), n;
  }
  function ju(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new _d();
      var s = /* @__PURE__ */ new Set();
      r.set(t, s);
    } else s = r.get(t), s === void 0 && (s = /* @__PURE__ */ new Set(), r.set(t, s));
    s.has(n) || (s.add(n), e = Dd.bind(null, e, t, n), t.then(e, e));
  }
  function Eu(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function _u(e, t, n, r, s) {
    return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = on(-1, 1), t.tag = 2, Sn(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = s, e);
  }
  var Nd = te.ReactCurrentOwner, wt = !1;
  function yt(e, t, n, r) {
    t.child = e === null ? Ko(t, null, n, r) : or(t, e.child, n, r);
  }
  function Nu(e, t, n, r, s) {
    n = n.render;
    var a = t.ref;
    return cr(t, s), r = Rl(e, t, n, r, a, s), n = Pl(), e !== null && !wt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~s, un(e, t, s)) : (Ge && n && hl(t), t.flags |= 1, yt(e, t, r, s), t.child);
  }
  function Tu(e, t, n, r, s) {
    if (e === null) {
      var a = n.type;
      return typeof a == "function" && !aa(a) && a.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = a, Mu(e, t, a, r, s)) : (e = hs(n.type, null, r, t, t.mode, s), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (a = e.child, (e.lanes & s) === 0) {
      var f = a.memoizedProps;
      if (n = n.compare, n = n !== null ? n : Dr, n(f, r) && e.ref === t.ref) return un(e, t, s);
    }
    return t.flags |= 1, e = Mn(a, r), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Mu(e, t, n, r, s) {
    if (e !== null) {
      var a = e.memoizedProps;
      if (Dr(a, r) && e.ref === t.ref) if (wt = !1, t.pendingProps = r = a, (e.lanes & s) !== 0) (e.flags & 131072) !== 0 && (wt = !0);
      else return t.lanes = e.lanes, un(e, t, s);
    }
    return Bl(e, t, n, r, s);
  }
  function Cu(e, t, n) {
    var r = t.pendingProps, s = r.children, a = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden") if ((t.mode & 1) === 0) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, He(pr, Mt), Mt |= n;
    else {
      if ((n & 1073741824) === 0) return e = a !== null ? a.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, He(pr, Mt), Mt |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = a !== null ? a.baseLanes : n, He(pr, Mt), Mt |= r;
    }
    else a !== null ? (r = a.baseLanes | n, t.memoizedState = null) : r = n, He(pr, Mt), Mt |= r;
    return yt(e, t, s, n), t.child;
  }
  function Ru(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
  }
  function Bl(e, t, n, r, s) {
    var a = xt(n) ? An : dt.current;
    return a = ir(t, a), cr(t, s), n = Rl(e, t, n, r, a, s), r = Pl(), e !== null && !wt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~s, un(e, t, s)) : (Ge && r && hl(t), t.flags |= 1, yt(e, t, n, s), t.child);
  }
  function Pu(e, t, n, r, s) {
    if (xt(n)) {
      var a = !0;
      Oi(t);
    } else a = !1;
    if (cr(t, s), t.stateNode === null) ns(e, t), ku(t, n, r), zl(t, n, r, s), r = !0;
    else if (e === null) {
      var f = t.stateNode, p = t.memoizedProps;
      f.props = p;
      var m = f.context, E = n.contextType;
      typeof E == "object" && E !== null ? E = At(E) : (E = xt(n) ? An : dt.current, E = ir(t, E));
      var R = n.getDerivedStateFromProps, I = typeof R == "function" || typeof f.getSnapshotBeforeUpdate == "function";
      I || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (p !== r || m !== E) && xu(t, f, r, E), wn = !1;
      var C = t.memoizedState;
      f.state = C, Gi(t, r, f, s), m = t.memoizedState, p !== r || C !== m || kt.current || wn ? (typeof R == "function" && ($l(t, n, R, r), m = t.memoizedState), (p = wn || gu(t, n, p, r, C, m, E)) ? (I || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount()), typeof f.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = m), f.props = r, f.state = m, f.context = E, r = p) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
    } else {
      f = t.stateNode, Go(e, t), p = t.memoizedProps, E = t.type === t.elementType ? p : Bt(t.type, p), f.props = E, I = t.pendingProps, C = f.context, m = n.contextType, typeof m == "object" && m !== null ? m = At(m) : (m = xt(n) ? An : dt.current, m = ir(t, m));
      var V = n.getDerivedStateFromProps;
      (R = typeof V == "function" || typeof f.getSnapshotBeforeUpdate == "function") || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (p !== I || C !== m) && xu(t, f, r, m), wn = !1, C = t.memoizedState, f.state = C, Gi(t, r, f, s);
      var W = t.memoizedState;
      p !== I || C !== W || kt.current || wn ? (typeof V == "function" && ($l(t, n, V, r), W = t.memoizedState), (E = wn || gu(t, n, E, r, C, W, m) || !1) ? (R || typeof f.UNSAFE_componentWillUpdate != "function" && typeof f.componentWillUpdate != "function" || (typeof f.componentWillUpdate == "function" && f.componentWillUpdate(r, W, m), typeof f.UNSAFE_componentWillUpdate == "function" && f.UNSAFE_componentWillUpdate(r, W, m)), typeof f.componentDidUpdate == "function" && (t.flags |= 4), typeof f.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof f.componentDidUpdate != "function" || p === e.memoizedProps && C === e.memoizedState || (t.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || p === e.memoizedProps && C === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = W), f.props = r, f.state = W, f.context = m, r = E) : (typeof f.componentDidUpdate != "function" || p === e.memoizedProps && C === e.memoizedState || (t.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || p === e.memoizedProps && C === e.memoizedState || (t.flags |= 1024), r = !1);
    }
    return Vl(e, t, n, r, a, s);
  }
  function Vl(e, t, n, r, s, a) {
    Ru(e, t);
    var f = (t.flags & 128) !== 0;
    if (!r && !f) return s && $o(t, n, !1), un(e, t, a);
    r = t.stateNode, Nd.current = t;
    var p = f && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && f ? (t.child = or(t, e.child, null, a), t.child = or(t, null, p, a)) : yt(e, t, p, a), t.memoizedState = r.state, s && $o(t, n, !0), t.child;
  }
  function Lu(e) {
    var t = e.stateNode;
    t.pendingContext ? Io(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Io(e, t.context, !1), El(e, t.containerInfo);
  }
  function Au(e, t, n, r, s) {
    return ar(), yl(s), t.flags |= 256, yt(e, t, n, r), t.child;
  }
  var Ul = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Hl(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Iu(e, t, n) {
    var r = t.pendingProps, s = qe.current, a = !1, f = (t.flags & 128) !== 0, p;
    if ((p = f) || (p = e !== null && e.memoizedState === null ? !1 : (s & 2) !== 0), p ? (a = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (s |= 1), He(qe, s & 1), e === null)
      return vl(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (f = r.children, e = r.fallback, a ? (r = t.mode, a = t.child, f = { mode: "hidden", children: f }, (r & 1) === 0 && a !== null ? (a.childLanes = 0, a.pendingProps = f) : a = ps(f, r, 0, null), e = Hn(e, r, n, null), a.return = t, e.return = t, a.sibling = e, t.child = a, t.child.memoizedState = Hl(n), t.memoizedState = Ul, e) : Wl(t, f));
    if (s = e.memoizedState, s !== null && (p = s.dehydrated, p !== null)) return Td(e, t, f, r, p, s, n);
    if (a) {
      a = r.fallback, f = t.mode, s = e.child, p = s.sibling;
      var m = { mode: "hidden", children: r.children };
      return (f & 1) === 0 && t.child !== s ? (r = t.child, r.childLanes = 0, r.pendingProps = m, t.deletions = null) : (r = Mn(s, m), r.subtreeFlags = s.subtreeFlags & 14680064), p !== null ? a = Mn(p, a) : (a = Hn(a, f, n, null), a.flags |= 2), a.return = t, r.return = t, r.sibling = a, t.child = r, r = a, a = t.child, f = e.child.memoizedState, f = f === null ? Hl(n) : { baseLanes: f.baseLanes | n, cachePool: null, transitions: f.transitions }, a.memoizedState = f, a.childLanes = e.childLanes & ~n, t.memoizedState = Ul, r;
    }
    return a = e.child, e = a.sibling, r = Mn(a, { mode: "visible", children: r.children }), (t.mode & 1) === 0 && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
  }
  function Wl(e, t) {
    return t = ps({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function ts(e, t, n, r) {
    return r !== null && yl(r), or(t, e.child, null, n), e = Wl(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function Td(e, t, n, r, s, a, f) {
    if (n)
      return t.flags & 256 ? (t.flags &= -257, r = Ol(Error(l(422))), ts(e, t, f, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (a = r.fallback, s = t.mode, r = ps({ mode: "visible", children: r.children }, s, 0, null), a = Hn(a, s, f, null), a.flags |= 2, r.return = t, a.return = t, r.sibling = a, t.child = r, (t.mode & 1) !== 0 && or(t, e.child, null, f), t.child.memoizedState = Hl(f), t.memoizedState = Ul, a);
    if ((t.mode & 1) === 0) return ts(e, t, f, null);
    if (s.data === "$!") {
      if (r = s.nextSibling && s.nextSibling.dataset, r) var p = r.dgst;
      return r = p, a = Error(l(419)), r = Ol(a, r, void 0), ts(e, t, f, r);
    }
    if (p = (f & e.childLanes) !== 0, wt || p) {
      if (r = lt, r !== null) {
        switch (f & -f) {
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
        s = (s & (r.suspendedLanes | f)) !== 0 ? 0 : s, s !== 0 && s !== a.retryLane && (a.retryLane = s, an(e, s), Ht(r, e, s, -1));
      }
      return la(), r = Ol(Error(l(421))), ts(e, t, f, r);
    }
    return s.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Bd.bind(null, e), s._reactRetry = t, null) : (e = a.treeContext, Tt = yn(s.nextSibling), Nt = t, Ge = !0, Dt = null, e !== null && (Pt[Lt++] = sn, Pt[Lt++] = ln, Pt[Lt++] = In, sn = e.id, ln = e.overflow, In = t), t = Wl(t, r.children), t.flags |= 4096, t);
  }
  function Fu(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), wl(e.return, t, n);
  }
  function Kl(e, t, n, r, s) {
    var a = e.memoizedState;
    a === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: s } : (a.isBackwards = t, a.rendering = null, a.renderingStartTime = 0, a.last = r, a.tail = n, a.tailMode = s);
  }
  function $u(e, t, n) {
    var r = t.pendingProps, s = r.revealOrder, a = r.tail;
    if (yt(e, t, r.children, n), r = qe.current, (r & 2) !== 0) r = r & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0) e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Fu(e, n, t);
        else if (e.tag === 19) Fu(e, n, t);
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
    if (He(qe, r), (t.mode & 1) === 0) t.memoizedState = null;
    else switch (s) {
      case "forwards":
        for (n = t.child, s = null; n !== null; ) e = n.alternate, e !== null && qi(e) === null && (s = n), n = n.sibling;
        n = s, n === null ? (s = t.child, t.child = null) : (s = n.sibling, n.sibling = null), Kl(t, !1, s, n, a);
        break;
      case "backwards":
        for (n = null, s = t.child, t.child = null; s !== null; ) {
          if (e = s.alternate, e !== null && qi(e) === null) {
            t.child = s;
            break;
          }
          e = s.sibling, s.sibling = n, n = s, s = e;
        }
        Kl(t, !0, n, null, a);
        break;
      case "together":
        Kl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function ns(e, t) {
    (t.mode & 1) === 0 && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
  }
  function un(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), Dn |= t.lanes, (n & t.childLanes) === 0) return null;
    if (e !== null && t.child !== e.child) throw Error(l(153));
    if (t.child !== null) {
      for (e = t.child, n = Mn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Mn(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function Md(e, t, n) {
    switch (t.tag) {
      case 3:
        Lu(t), ar();
        break;
      case 5:
        Yo(t);
        break;
      case 1:
        xt(t.type) && Oi(t);
        break;
      case 4:
        El(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context, s = t.memoizedProps.value;
        He(Wi, r._currentValue), r._currentValue = s;
        break;
      case 13:
        if (r = t.memoizedState, r !== null)
          return r.dehydrated !== null ? (He(qe, qe.current & 1), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? Iu(e, t, n) : (He(qe, qe.current & 1), e = un(e, t, n), e !== null ? e.sibling : null);
        He(qe, qe.current & 1);
        break;
      case 19:
        if (r = (n & t.childLanes) !== 0, (e.flags & 128) !== 0) {
          if (r) return $u(e, t, n);
          t.flags |= 128;
        }
        if (s = t.memoizedState, s !== null && (s.rendering = null, s.tail = null, s.lastEffect = null), He(qe, qe.current), r) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, Cu(e, t, n);
    }
    return un(e, t, n);
  }
  var zu, Ql, Ou, Du;
  zu = function(e, t) {
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
  }, Ql = function() {
  }, Ou = function(e, t, n, r) {
    var s = e.memoizedProps;
    if (s !== r) {
      e = t.stateNode, zn(Yt.current);
      var a = null;
      switch (n) {
        case "input":
          s = ue(e, s), r = ue(e, r), a = [];
          break;
        case "select":
          s = D({}, s, { value: void 0 }), r = D({}, r, { value: void 0 }), a = [];
          break;
        case "textarea":
          s = Ne(e, s), r = Ne(e, r), a = [];
          break;
        default:
          typeof s.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Fi);
      }
      it(n, r);
      var f;
      n = null;
      for (E in s) if (!r.hasOwnProperty(E) && s.hasOwnProperty(E) && s[E] != null) if (E === "style") {
        var p = s[E];
        for (f in p) p.hasOwnProperty(f) && (n || (n = {}), n[f] = "");
      } else E !== "dangerouslySetInnerHTML" && E !== "children" && E !== "suppressContentEditableWarning" && E !== "suppressHydrationWarning" && E !== "autoFocus" && (d.hasOwnProperty(E) ? a || (a = []) : (a = a || []).push(E, null));
      for (E in r) {
        var m = r[E];
        if (p = s?.[E], r.hasOwnProperty(E) && m !== p && (m != null || p != null)) if (E === "style") if (p) {
          for (f in p) !p.hasOwnProperty(f) || m && m.hasOwnProperty(f) || (n || (n = {}), n[f] = "");
          for (f in m) m.hasOwnProperty(f) && p[f] !== m[f] && (n || (n = {}), n[f] = m[f]);
        } else n || (a || (a = []), a.push(
          E,
          n
        )), n = m;
        else E === "dangerouslySetInnerHTML" ? (m = m ? m.__html : void 0, p = p ? p.__html : void 0, m != null && p !== m && (a = a || []).push(E, m)) : E === "children" ? typeof m != "string" && typeof m != "number" || (a = a || []).push(E, "" + m) : E !== "suppressContentEditableWarning" && E !== "suppressHydrationWarning" && (d.hasOwnProperty(E) ? (m != null && E === "onScroll" && Ke("scroll", e), a || p === m || (a = [])) : (a = a || []).push(E, m));
      }
      n && (a = a || []).push("style", n);
      var E = a;
      (t.updateQueue = E) && (t.flags |= 4);
    }
  }, Du = function(e, t, n, r) {
    n !== r && (t.flags |= 4);
  };
  function ei(e, t) {
    if (!Ge) switch (e.tailMode) {
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
  function pt(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
    if (t) for (var s = e.child; s !== null; ) n |= s.lanes | s.childLanes, r |= s.subtreeFlags & 14680064, r |= s.flags & 14680064, s.return = e, s = s.sibling;
    else for (s = e.child; s !== null; ) n |= s.lanes | s.childLanes, r |= s.subtreeFlags, r |= s.flags, s.return = e, s = s.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t;
  }
  function Cd(e, t, n) {
    var r = t.pendingProps;
    switch (pl(t), t.tag) {
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
        return pt(t), null;
      case 1:
        return xt(t.type) && zi(), pt(t), null;
      case 3:
        return r = t.stateNode, fr(), Qe(kt), Qe(dt), Tl(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Ui(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Dt !== null && (ra(Dt), Dt = null))), Ql(e, t), pt(t), null;
      case 5:
        _l(t);
        var s = zn(Xr.current);
        if (n = t.type, e !== null && t.stateNode != null) Ou(e, t, n, r, s), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(l(166));
            return pt(t), null;
          }
          if (e = zn(Yt.current), Ui(t)) {
            r = t.stateNode, n = t.type;
            var a = t.memoizedProps;
            switch (r[Xt] = t, r[Wr] = a, e = (t.mode & 1) !== 0, n) {
              case "dialog":
                Ke("cancel", r), Ke("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                Ke("load", r);
                break;
              case "video":
              case "audio":
                for (s = 0; s < Vr.length; s++) Ke(Vr[s], r);
                break;
              case "source":
                Ke("error", r);
                break;
              case "img":
              case "image":
              case "link":
                Ke(
                  "error",
                  r
                ), Ke("load", r);
                break;
              case "details":
                Ke("toggle", r);
                break;
              case "input":
                q(r, a), Ke("invalid", r);
                break;
              case "select":
                r._wrapperState = { wasMultiple: !!a.multiple }, Ke("invalid", r);
                break;
              case "textarea":
                Ue(r, a), Ke("invalid", r);
            }
            it(n, a), s = null;
            for (var f in a) if (a.hasOwnProperty(f)) {
              var p = a[f];
              f === "children" ? typeof p == "string" ? r.textContent !== p && (a.suppressHydrationWarning !== !0 && Ii(r.textContent, p, e), s = ["children", p]) : typeof p == "number" && r.textContent !== "" + p && (a.suppressHydrationWarning !== !0 && Ii(
                r.textContent,
                p,
                e
              ), s = ["children", "" + p]) : d.hasOwnProperty(f) && p != null && f === "onScroll" && Ke("scroll", r);
            }
            switch (n) {
              case "input":
                J(r), he(r, a, !0);
                break;
              case "textarea":
                J(r), Zt(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof a.onClick == "function" && (r.onclick = Fi);
            }
            r = s, t.updateQueue = r, r !== null && (t.flags |= 4);
          } else {
            f = s.nodeType === 9 ? s : s.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = vt(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = f.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = f.createElement(n, { is: r.is }) : (e = f.createElement(n), n === "select" && (f = e, r.multiple ? f.multiple = !0 : r.size && (f.size = r.size))) : e = f.createElementNS(e, n), e[Xt] = t, e[Wr] = r, zu(e, t, !1, !1), t.stateNode = e;
            e: {
              switch (f = ot(n, r), n) {
                case "dialog":
                  Ke("cancel", e), Ke("close", e), s = r;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Ke("load", e), s = r;
                  break;
                case "video":
                case "audio":
                  for (s = 0; s < Vr.length; s++) Ke(Vr[s], e);
                  s = r;
                  break;
                case "source":
                  Ke("error", e), s = r;
                  break;
                case "img":
                case "image":
                case "link":
                  Ke(
                    "error",
                    e
                  ), Ke("load", e), s = r;
                  break;
                case "details":
                  Ke("toggle", e), s = r;
                  break;
                case "input":
                  q(e, r), s = ue(e, r), Ke("invalid", e);
                  break;
                case "option":
                  s = r;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!r.multiple }, s = D({}, r, { value: void 0 }), Ke("invalid", e);
                  break;
                case "textarea":
                  Ue(e, r), s = Ne(e, r), Ke("invalid", e);
                  break;
                default:
                  s = r;
              }
              it(n, s), p = s;
              for (a in p) if (p.hasOwnProperty(a)) {
                var m = p[a];
                a === "style" ? ve(e, m) : a === "dangerouslySetInnerHTML" ? (m = m ? m.__html : void 0, m != null && Ct(e, m)) : a === "children" ? typeof m == "string" ? (n !== "textarea" || m !== "") && Kt(e, m) : typeof m == "number" && Kt(e, "" + m) : a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && a !== "autoFocus" && (d.hasOwnProperty(a) ? m != null && a === "onScroll" && Ke("scroll", e) : m != null && Z(e, a, m, f));
              }
              switch (n) {
                case "input":
                  J(e), he(e, r, !1);
                  break;
                case "textarea":
                  J(e), Zt(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + we(r.value));
                  break;
                case "select":
                  e.multiple = !!r.multiple, a = r.value, a != null ? Pe(e, !!r.multiple, a, !1) : r.defaultValue != null && Pe(
                    e,
                    !!r.multiple,
                    r.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof s.onClick == "function" && (e.onclick = Fi);
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
        return pt(t), null;
      case 6:
        if (e && t.stateNode != null) Du(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(l(166));
          if (n = zn(Xr.current), zn(Yt.current), Ui(t)) {
            if (r = t.stateNode, n = t.memoizedProps, r[Xt] = t, (a = r.nodeValue !== n) && (e = Nt, e !== null)) switch (e.tag) {
              case 3:
                Ii(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Ii(r.nodeValue, n, (e.mode & 1) !== 0);
            }
            a && (t.flags |= 4);
          } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Xt] = t, t.stateNode = r;
        }
        return pt(t), null;
      case 13:
        if (Qe(qe), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (Ge && Tt !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0) Uo(), ar(), t.flags |= 98560, a = !1;
          else if (a = Ui(t), r !== null && r.dehydrated !== null) {
            if (e === null) {
              if (!a) throw Error(l(318));
              if (a = t.memoizedState, a = a !== null ? a.dehydrated : null, !a) throw Error(l(317));
              a[Xt] = t;
            } else ar(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            pt(t), a = !1;
          } else Dt !== null && (ra(Dt), Dt = null), a = !0;
          if (!a) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, (t.mode & 1) !== 0 && (e === null || (qe.current & 1) !== 0 ? nt === 0 && (nt = 3) : la())), t.updateQueue !== null && (t.flags |= 4), pt(t), null);
      case 4:
        return fr(), Ql(e, t), e === null && Ur(t.stateNode.containerInfo), pt(t), null;
      case 10:
        return xl(t.type._context), pt(t), null;
      case 17:
        return xt(t.type) && zi(), pt(t), null;
      case 19:
        if (Qe(qe), a = t.memoizedState, a === null) return pt(t), null;
        if (r = (t.flags & 128) !== 0, f = a.rendering, f === null) if (r) ei(a, !1);
        else {
          if (nt !== 0 || e !== null && (e.flags & 128) !== 0) for (e = t.child; e !== null; ) {
            if (f = qi(e), f !== null) {
              for (t.flags |= 128, ei(a, !1), r = f.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) a = n, e = r, a.flags &= 14680066, f = a.alternate, f === null ? (a.childLanes = 0, a.lanes = e, a.child = null, a.subtreeFlags = 0, a.memoizedProps = null, a.memoizedState = null, a.updateQueue = null, a.dependencies = null, a.stateNode = null) : (a.childLanes = f.childLanes, a.lanes = f.lanes, a.child = f.child, a.subtreeFlags = 0, a.deletions = null, a.memoizedProps = f.memoizedProps, a.memoizedState = f.memoizedState, a.updateQueue = f.updateQueue, a.type = f.type, e = f.dependencies, a.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
              return He(qe, qe.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          a.tail !== null && Je() > mr && (t.flags |= 128, r = !0, ei(a, !1), t.lanes = 4194304);
        }
        else {
          if (!r) if (e = qi(f), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), ei(a, !0), a.tail === null && a.tailMode === "hidden" && !f.alternate && !Ge) return pt(t), null;
          } else 2 * Je() - a.renderingStartTime > mr && n !== 1073741824 && (t.flags |= 128, r = !0, ei(a, !1), t.lanes = 4194304);
          a.isBackwards ? (f.sibling = t.child, t.child = f) : (n = a.last, n !== null ? n.sibling = f : t.child = f, a.last = f);
        }
        return a.tail !== null ? (t = a.tail, a.rendering = t, a.tail = t.sibling, a.renderingStartTime = Je(), t.sibling = null, n = qe.current, He(qe, r ? n & 1 | 2 : n & 1), t) : (pt(t), null);
      case 22:
      case 23:
        return sa(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && (t.mode & 1) !== 0 ? (Mt & 1073741824) !== 0 && (pt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : pt(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(l(156, t.tag));
  }
  function Rd(e, t) {
    switch (pl(t), t.tag) {
      case 1:
        return xt(t.type) && zi(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return fr(), Qe(kt), Qe(dt), Tl(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return _l(t), null;
      case 13:
        if (Qe(qe), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(l(340));
          ar();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return Qe(qe), null;
      case 4:
        return fr(), null;
      case 10:
        return xl(t.type._context), null;
      case 22:
      case 23:
        return sa(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var rs = !1, mt = !1, Pd = typeof WeakSet == "function" ? WeakSet : Set, H = null;
  function hr(e, t) {
    var n = e.ref;
    if (n !== null) if (typeof n == "function") try {
      n(null);
    } catch (r) {
      be(e, t, r);
    }
    else n.current = null;
  }
  function Gl(e, t, n) {
    try {
      n();
    } catch (r) {
      be(e, t, r);
    }
  }
  var Bu = !1;
  function Ld(e, t) {
    if (sl = ji, e = go(), bs(e)) {
      if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
      else e: {
        n = (n = e.ownerDocument) && n.defaultView || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var s = r.anchorOffset, a = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, a.nodeType;
          } catch {
            n = null;
            break e;
          }
          var f = 0, p = -1, m = -1, E = 0, R = 0, I = e, C = null;
          t: for (; ; ) {
            for (var V; I !== n || s !== 0 && I.nodeType !== 3 || (p = f + s), I !== a || r !== 0 && I.nodeType !== 3 || (m = f + r), I.nodeType === 3 && (f += I.nodeValue.length), (V = I.firstChild) !== null; )
              C = I, I = V;
            for (; ; ) {
              if (I === e) break t;
              if (C === n && ++E === s && (p = f), C === a && ++R === r && (m = f), (V = I.nextSibling) !== null) break;
              I = C, C = I.parentNode;
            }
            I = V;
          }
          n = p === -1 || m === -1 ? null : { start: p, end: m };
        } else n = null;
      }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (ll = { focusedElem: e, selectionRange: n }, ji = !1, H = t; H !== null; ) if (t = H, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, H = e;
    else for (; H !== null; ) {
      t = H;
      try {
        var W = t.alternate;
        if ((t.flags & 1024) !== 0) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (W !== null) {
              var K = W.memoizedProps, Ze = W.memoizedState, x = t.stateNode, g = x.getSnapshotBeforeUpdate(t.elementType === t.type ? K : Bt(t.type, K), Ze);
              x.__reactInternalSnapshotBeforeUpdate = g;
            }
            break;
          case 3:
            var w = t.stateNode.containerInfo;
            w.nodeType === 1 ? w.textContent = "" : w.nodeType === 9 && w.documentElement && w.removeChild(w.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(l(163));
        }
      } catch ($) {
        be(t, t.return, $);
      }
      if (e = t.sibling, e !== null) {
        e.return = t.return, H = e;
        break;
      }
      H = t.return;
    }
    return W = Bu, Bu = !1, W;
  }
  function ti(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
      var s = r = r.next;
      do {
        if ((s.tag & e) === e) {
          var a = s.destroy;
          s.destroy = void 0, a !== void 0 && Gl(t, n, a);
        }
        s = s.next;
      } while (s !== r);
    }
  }
  function is(e, t) {
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
  function Vu(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Vu(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Xt], delete t[Wr], delete t[cl], delete t[pd], delete t[md])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function Uu(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Hu(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Uu(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Xl(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Fi));
    else if (r !== 4 && (e = e.child, e !== null)) for (Xl(e, t, n), e = e.sibling; e !== null; ) Xl(e, t, n), e = e.sibling;
  }
  function Yl(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null)) for (Yl(e, t, n), e = e.sibling; e !== null; ) Yl(e, t, n), e = e.sibling;
  }
  var ut = null, Vt = !1;
  function jn(e, t, n) {
    for (n = n.child; n !== null; ) Wu(e, t, n), n = n.sibling;
  }
  function Wu(e, t, n) {
    if (qt && typeof qt.onCommitFiberUnmount == "function") try {
      qt.onCommitFiberUnmount(yi, n);
    } catch {
    }
    switch (n.tag) {
      case 5:
        mt || hr(n, t);
      case 6:
        var r = ut, s = Vt;
        ut = null, jn(e, t, n), ut = r, Vt = s, ut !== null && (Vt ? (e = ut, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : ut.removeChild(n.stateNode));
        break;
      case 18:
        ut !== null && (Vt ? (e = ut, n = n.stateNode, e.nodeType === 8 ? ul(e.parentNode, n) : e.nodeType === 1 && ul(e, n), Ar(e)) : ul(ut, n.stateNode));
        break;
      case 4:
        r = ut, s = Vt, ut = n.stateNode.containerInfo, Vt = !0, jn(e, t, n), ut = r, Vt = s;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!mt && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
          s = r = r.next;
          do {
            var a = s, f = a.destroy;
            a = a.tag, f !== void 0 && ((a & 2) !== 0 || (a & 4) !== 0) && Gl(n, t, f), s = s.next;
          } while (s !== r);
        }
        jn(e, t, n);
        break;
      case 1:
        if (!mt && (hr(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
        } catch (p) {
          be(n, t, p);
        }
        jn(e, t, n);
        break;
      case 21:
        jn(e, t, n);
        break;
      case 22:
        n.mode & 1 ? (mt = (r = mt) || n.memoizedState !== null, jn(e, t, n), mt = r) : jn(e, t, n);
        break;
      default:
        jn(e, t, n);
    }
  }
  function Ku(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new Pd()), t.forEach(function(r) {
        var s = Vd.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(s, s));
      });
    }
  }
  function Ut(e, t) {
    var n = t.deletions;
    if (n !== null) for (var r = 0; r < n.length; r++) {
      var s = n[r];
      try {
        var a = e, f = t, p = f;
        e: for (; p !== null; ) {
          switch (p.tag) {
            case 5:
              ut = p.stateNode, Vt = !1;
              break e;
            case 3:
              ut = p.stateNode.containerInfo, Vt = !0;
              break e;
            case 4:
              ut = p.stateNode.containerInfo, Vt = !0;
              break e;
          }
          p = p.return;
        }
        if (ut === null) throw Error(l(160));
        Wu(a, f, s), ut = null, Vt = !1;
        var m = s.alternate;
        m !== null && (m.return = null), s.return = null;
      } catch (E) {
        be(s, t, E);
      }
    }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Qu(t, e), t = t.sibling;
  }
  function Qu(e, t) {
    var n = e.alternate, r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (Ut(t, e), Jt(e), r & 4) {
          try {
            ti(3, e, e.return), is(3, e);
          } catch (K) {
            be(e, e.return, K);
          }
          try {
            ti(5, e, e.return);
          } catch (K) {
            be(e, e.return, K);
          }
        }
        break;
      case 1:
        Ut(t, e), Jt(e), r & 512 && n !== null && hr(n, n.return);
        break;
      case 5:
        if (Ut(t, e), Jt(e), r & 512 && n !== null && hr(n, n.return), e.flags & 32) {
          var s = e.stateNode;
          try {
            Kt(s, "");
          } catch (K) {
            be(e, e.return, K);
          }
        }
        if (r & 4 && (s = e.stateNode, s != null)) {
          var a = e.memoizedProps, f = n !== null ? n.memoizedProps : a, p = e.type, m = e.updateQueue;
          if (e.updateQueue = null, m !== null) try {
            p === "input" && a.type === "radio" && a.name != null && ie(s, a), ot(p, f);
            var E = ot(p, a);
            for (f = 0; f < m.length; f += 2) {
              var R = m[f], I = m[f + 1];
              R === "style" ? ve(s, I) : R === "dangerouslySetInnerHTML" ? Ct(s, I) : R === "children" ? Kt(s, I) : Z(s, R, I, E);
            }
            switch (p) {
              case "input":
                X(s, a);
                break;
              case "textarea":
                rt(s, a);
                break;
              case "select":
                var C = s._wrapperState.wasMultiple;
                s._wrapperState.wasMultiple = !!a.multiple;
                var V = a.value;
                V != null ? Pe(s, !!a.multiple, V, !1) : C !== !!a.multiple && (a.defaultValue != null ? Pe(
                  s,
                  !!a.multiple,
                  a.defaultValue,
                  !0
                ) : Pe(s, !!a.multiple, a.multiple ? [] : "", !1));
            }
            s[Wr] = a;
          } catch (K) {
            be(e, e.return, K);
          }
        }
        break;
      case 6:
        if (Ut(t, e), Jt(e), r & 4) {
          if (e.stateNode === null) throw Error(l(162));
          s = e.stateNode, a = e.memoizedProps;
          try {
            s.nodeValue = a;
          } catch (K) {
            be(e, e.return, K);
          }
        }
        break;
      case 3:
        if (Ut(t, e), Jt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
          Ar(t.containerInfo);
        } catch (K) {
          be(e, e.return, K);
        }
        break;
      case 4:
        Ut(t, e), Jt(e);
        break;
      case 13:
        Ut(t, e), Jt(e), s = e.child, s.flags & 8192 && (a = s.memoizedState !== null, s.stateNode.isHidden = a, !a || s.alternate !== null && s.alternate.memoizedState !== null || (Zl = Je())), r & 4 && Ku(e);
        break;
      case 22:
        if (R = n !== null && n.memoizedState !== null, e.mode & 1 ? (mt = (E = mt) || R, Ut(t, e), mt = E) : Ut(t, e), Jt(e), r & 8192) {
          if (E = e.memoizedState !== null, (e.stateNode.isHidden = E) && !R && (e.mode & 1) !== 0) for (H = e, R = e.child; R !== null; ) {
            for (I = H = R; H !== null; ) {
              switch (C = H, V = C.child, C.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  ti(4, C, C.return);
                  break;
                case 1:
                  hr(C, C.return);
                  var W = C.stateNode;
                  if (typeof W.componentWillUnmount == "function") {
                    r = C, n = C.return;
                    try {
                      t = r, W.props = t.memoizedProps, W.state = t.memoizedState, W.componentWillUnmount();
                    } catch (K) {
                      be(r, n, K);
                    }
                  }
                  break;
                case 5:
                  hr(C, C.return);
                  break;
                case 22:
                  if (C.memoizedState !== null) {
                    Xu(I);
                    continue;
                  }
              }
              V !== null ? (V.return = C, H = V) : Xu(I);
            }
            R = R.sibling;
          }
          e: for (R = null, I = e; ; ) {
            if (I.tag === 5) {
              if (R === null) {
                R = I;
                try {
                  s = I.stateNode, E ? (a = s.style, typeof a.setProperty == "function" ? a.setProperty("display", "none", "important") : a.display = "none") : (p = I.stateNode, m = I.memoizedProps.style, f = m != null && m.hasOwnProperty("display") ? m.display : null, p.style.display = $e("display", f));
                } catch (K) {
                  be(e, e.return, K);
                }
              }
            } else if (I.tag === 6) {
              if (R === null) try {
                I.stateNode.nodeValue = E ? "" : I.memoizedProps;
              } catch (K) {
                be(e, e.return, K);
              }
            } else if ((I.tag !== 22 && I.tag !== 23 || I.memoizedState === null || I === e) && I.child !== null) {
              I.child.return = I, I = I.child;
              continue;
            }
            if (I === e) break e;
            for (; I.sibling === null; ) {
              if (I.return === null || I.return === e) break e;
              R === I && (R = null), I = I.return;
            }
            R === I && (R = null), I.sibling.return = I.return, I = I.sibling;
          }
        }
        break;
      case 19:
        Ut(t, e), Jt(e), r & 4 && Ku(e);
        break;
      case 21:
        break;
      default:
        Ut(
          t,
          e
        ), Jt(e);
    }
  }
  function Jt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (Uu(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(l(160));
        }
        switch (r.tag) {
          case 5:
            var s = r.stateNode;
            r.flags & 32 && (Kt(s, ""), r.flags &= -33);
            var a = Hu(e);
            Yl(e, a, s);
            break;
          case 3:
          case 4:
            var f = r.stateNode.containerInfo, p = Hu(e);
            Xl(e, p, f);
            break;
          default:
            throw Error(l(161));
        }
      } catch (m) {
        be(e, e.return, m);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Ad(e, t, n) {
    H = e, Gu(e);
  }
  function Gu(e, t, n) {
    for (var r = (e.mode & 1) !== 0; H !== null; ) {
      var s = H, a = s.child;
      if (s.tag === 22 && r) {
        var f = s.memoizedState !== null || rs;
        if (!f) {
          var p = s.alternate, m = p !== null && p.memoizedState !== null || mt;
          p = rs;
          var E = mt;
          if (rs = f, (mt = m) && !E) for (H = s; H !== null; ) f = H, m = f.child, f.tag === 22 && f.memoizedState !== null ? Yu(s) : m !== null ? (m.return = f, H = m) : Yu(s);
          for (; a !== null; ) H = a, Gu(a), a = a.sibling;
          H = s, rs = p, mt = E;
        }
        qu(e);
      } else (s.subtreeFlags & 8772) !== 0 && a !== null ? (a.return = s, H = a) : qu(e);
    }
  }
  function qu(e) {
    for (; H !== null; ) {
      var t = H;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              mt || is(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !mt) if (n === null) r.componentDidMount();
              else {
                var s = t.elementType === t.type ? n.memoizedProps : Bt(t.type, n.memoizedProps);
                r.componentDidUpdate(s, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
              }
              var a = t.updateQueue;
              a !== null && Xo(t, a, r);
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
                Xo(t, f, n);
              }
              break;
            case 5:
              var p = t.stateNode;
              if (n === null && t.flags & 4) {
                n = p;
                var m = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    m.autoFocus && n.focus();
                    break;
                  case "img":
                    m.src && (n.src = m.src);
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
                var E = t.alternate;
                if (E !== null) {
                  var R = E.memoizedState;
                  if (R !== null) {
                    var I = R.dehydrated;
                    I !== null && Ar(I);
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
          mt || t.flags & 512 && ql(t);
        } catch (C) {
          be(t, t.return, C);
        }
      }
      if (t === e) {
        H = null;
        break;
      }
      if (n = t.sibling, n !== null) {
        n.return = t.return, H = n;
        break;
      }
      H = t.return;
    }
  }
  function Xu(e) {
    for (; H !== null; ) {
      var t = H;
      if (t === e) {
        H = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        n.return = t.return, H = n;
        break;
      }
      H = t.return;
    }
  }
  function Yu(e) {
    for (; H !== null; ) {
      var t = H;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              is(4, t);
            } catch (m) {
              be(t, n, m);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var s = t.return;
              try {
                r.componentDidMount();
              } catch (m) {
                be(t, s, m);
              }
            }
            var a = t.return;
            try {
              ql(t);
            } catch (m) {
              be(t, a, m);
            }
            break;
          case 5:
            var f = t.return;
            try {
              ql(t);
            } catch (m) {
              be(t, f, m);
            }
        }
      } catch (m) {
        be(t, t.return, m);
      }
      if (t === e) {
        H = null;
        break;
      }
      var p = t.sibling;
      if (p !== null) {
        p.return = t.return, H = p;
        break;
      }
      H = t.return;
    }
  }
  var Id = Math.ceil, ss = te.ReactCurrentDispatcher, bl = te.ReactCurrentOwner, Ft = te.ReactCurrentBatchConfig, Ce = 0, lt = null, et = null, ct = 0, Mt = 0, pr = gn(0), nt = 0, ni = null, Dn = 0, ls = 0, Jl = 0, ri = null, St = null, Zl = 0, mr = 1 / 0, cn = null, as = !1, ea = null, En = null, os = !1, _n = null, us = 0, ii = 0, ta = null, cs = -1, fs = 0;
  function gt() {
    return (Ce & 6) !== 0 ? Je() : cs !== -1 ? cs : cs = Je();
  }
  function Nn(e) {
    return (e.mode & 1) === 0 ? 1 : (Ce & 2) !== 0 && ct !== 0 ? ct & -ct : yd.transition !== null ? (fs === 0 && (fs = Ua()), fs) : (e = Oe, e !== 0 || (e = window.event, e = e === void 0 ? 16 : ba(e.type)), e);
  }
  function Ht(e, t, n, r) {
    if (50 < ii) throw ii = 0, ta = null, Error(l(185));
    Mr(e, n, r), ((Ce & 2) === 0 || e !== lt) && (e === lt && ((Ce & 2) === 0 && (ls |= n), nt === 4 && Tn(e, ct)), jt(e, r), n === 1 && Ce === 0 && (t.mode & 1) === 0 && (mr = Je() + 500, Di && xn()));
  }
  function jt(e, t) {
    var n = e.callbackNode;
    yf(e, t);
    var r = xi(e, e === lt ? ct : 0);
    if (r === 0) n !== null && Da(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
      if (n != null && Da(n), t === 1) e.tag === 0 ? vd(Ju.bind(null, e)) : zo(Ju.bind(null, e)), dd(function() {
        (Ce & 6) === 0 && xn();
      }), n = null;
      else {
        switch (Ha(r)) {
          case 1:
            n = Is;
            break;
          case 4:
            n = Ba;
            break;
          case 16:
            n = vi;
            break;
          case 536870912:
            n = Va;
            break;
          default:
            n = vi;
        }
        n = lc(n, bu.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = n;
    }
  }
  function bu(e, t) {
    if (cs = -1, fs = 0, (Ce & 6) !== 0) throw Error(l(327));
    var n = e.callbackNode;
    if (vr() && e.callbackNode !== n) return null;
    var r = xi(e, e === lt ? ct : 0);
    if (r === 0) return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = ds(e, r);
    else {
      t = r;
      var s = Ce;
      Ce |= 2;
      var a = ec();
      (lt !== e || ct !== t) && (cn = null, mr = Je() + 500, Vn(e, t));
      do
        try {
          zd();
          break;
        } catch (p) {
          Zu(e, p);
        }
      while (!0);
      kl(), ss.current = a, Ce = s, et !== null ? t = 0 : (lt = null, ct = 0, t = nt);
    }
    if (t !== 0) {
      if (t === 2 && (s = Fs(e), s !== 0 && (r = s, t = na(e, s))), t === 1) throw n = ni, Vn(e, 0), Tn(e, r), jt(e, Je()), n;
      if (t === 6) Tn(e, r);
      else {
        if (s = e.current.alternate, (r & 30) === 0 && !Fd(s) && (t = ds(e, r), t === 2 && (a = Fs(e), a !== 0 && (r = a, t = na(e, a))), t === 1)) throw n = ni, Vn(e, 0), Tn(e, r), jt(e, Je()), n;
        switch (e.finishedWork = s, e.finishedLanes = r, t) {
          case 0:
          case 1:
            throw Error(l(345));
          case 2:
            Un(e, St, cn);
            break;
          case 3:
            if (Tn(e, r), (r & 130023424) === r && (t = Zl + 500 - Je(), 10 < t)) {
              if (xi(e, 0) !== 0) break;
              if (s = e.suspendedLanes, (s & r) !== r) {
                gt(), e.pingedLanes |= e.suspendedLanes & s;
                break;
              }
              e.timeoutHandle = ol(Un.bind(null, e, St, cn), t);
              break;
            }
            Un(e, St, cn);
            break;
          case 4:
            if (Tn(e, r), (r & 4194240) === r) break;
            for (t = e.eventTimes, s = -1; 0 < r; ) {
              var f = 31 - zt(r);
              a = 1 << f, f = t[f], f > s && (s = f), r &= ~a;
            }
            if (r = s, r = Je() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Id(r / 1960)) - r, 10 < r) {
              e.timeoutHandle = ol(Un.bind(null, e, St, cn), r);
              break;
            }
            Un(e, St, cn);
            break;
          case 5:
            Un(e, St, cn);
            break;
          default:
            throw Error(l(329));
        }
      }
    }
    return jt(e, Je()), e.callbackNode === n ? bu.bind(null, e) : null;
  }
  function na(e, t) {
    var n = ri;
    return e.current.memoizedState.isDehydrated && (Vn(e, t).flags |= 256), e = ds(e, t), e !== 2 && (t = St, St = n, t !== null && ra(t)), e;
  }
  function ra(e) {
    St === null ? St = e : St.push.apply(St, e);
  }
  function Fd(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
          var s = n[r], a = s.getSnapshot;
          s = s.value;
          try {
            if (!Ot(a(), s)) return !1;
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
  function Tn(e, t) {
    for (t &= ~Jl, t &= ~ls, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var n = 31 - zt(t), r = 1 << n;
      e[n] = -1, t &= ~r;
    }
  }
  function Ju(e) {
    if ((Ce & 6) !== 0) throw Error(l(327));
    vr();
    var t = xi(e, 0);
    if ((t & 1) === 0) return jt(e, Je()), null;
    var n = ds(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = Fs(e);
      r !== 0 && (t = r, n = na(e, r));
    }
    if (n === 1) throw n = ni, Vn(e, 0), Tn(e, t), jt(e, Je()), n;
    if (n === 6) throw Error(l(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, Un(e, St, cn), jt(e, Je()), null;
  }
  function ia(e, t) {
    var n = Ce;
    Ce |= 1;
    try {
      return e(t);
    } finally {
      Ce = n, Ce === 0 && (mr = Je() + 500, Di && xn());
    }
  }
  function Bn(e) {
    _n !== null && _n.tag === 0 && (Ce & 6) === 0 && vr();
    var t = Ce;
    Ce |= 1;
    var n = Ft.transition, r = Oe;
    try {
      if (Ft.transition = null, Oe = 1, e) return e();
    } finally {
      Oe = r, Ft.transition = n, Ce = t, (Ce & 6) === 0 && xn();
    }
  }
  function sa() {
    Mt = pr.current, Qe(pr);
  }
  function Vn(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, fd(n)), et !== null) for (n = et.return; n !== null; ) {
      var r = n;
      switch (pl(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && zi();
          break;
        case 3:
          fr(), Qe(kt), Qe(dt), Tl();
          break;
        case 5:
          _l(r);
          break;
        case 4:
          fr();
          break;
        case 13:
          Qe(qe);
          break;
        case 19:
          Qe(qe);
          break;
        case 10:
          xl(r.type._context);
          break;
        case 22:
        case 23:
          sa();
      }
      n = n.return;
    }
    if (lt = e, et = e = Mn(e.current, null), ct = Mt = t, nt = 0, ni = null, Jl = ls = Dn = 0, St = ri = null, $n !== null) {
      for (t = 0; t < $n.length; t++) if (n = $n[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var s = r.next, a = n.pending;
        if (a !== null) {
          var f = a.next;
          a.next = s, r.next = f;
        }
        n.pending = r;
      }
      $n = null;
    }
    return e;
  }
  function Zu(e, t) {
    do {
      var n = et;
      try {
        if (kl(), Xi.current = Zi, Yi) {
          for (var r = Xe.memoizedState; r !== null; ) {
            var s = r.queue;
            s !== null && (s.pending = null), r = r.next;
          }
          Yi = !1;
        }
        if (On = 0, st = tt = Xe = null, Yr = !1, br = 0, bl.current = null, n === null || n.return === null) {
          nt = 1, ni = t, et = null;
          break;
        }
        e: {
          var a = e, f = n.return, p = n, m = t;
          if (t = ct, p.flags |= 32768, m !== null && typeof m == "object" && typeof m.then == "function") {
            var E = m, R = p, I = R.tag;
            if ((R.mode & 1) === 0 && (I === 0 || I === 11 || I === 15)) {
              var C = R.alternate;
              C ? (R.updateQueue = C.updateQueue, R.memoizedState = C.memoizedState, R.lanes = C.lanes) : (R.updateQueue = null, R.memoizedState = null);
            }
            var V = Eu(f);
            if (V !== null) {
              V.flags &= -257, _u(V, f, p, a, t), V.mode & 1 && ju(a, E, t), t = V, m = E;
              var W = t.updateQueue;
              if (W === null) {
                var K = /* @__PURE__ */ new Set();
                K.add(m), t.updateQueue = K;
              } else W.add(m);
              break e;
            } else {
              if ((t & 1) === 0) {
                ju(a, E, t), la();
                break e;
              }
              m = Error(l(426));
            }
          } else if (Ge && p.mode & 1) {
            var Ze = Eu(f);
            if (Ze !== null) {
              (Ze.flags & 65536) === 0 && (Ze.flags |= 256), _u(Ze, f, p, a, t), yl(dr(m, p));
              break e;
            }
          }
          a = m = dr(m, p), nt !== 4 && (nt = 2), ri === null ? ri = [a] : ri.push(a), a = f;
          do {
            switch (a.tag) {
              case 3:
                a.flags |= 65536, t &= -t, a.lanes |= t;
                var x = wu(a, m, t);
                qo(a, x);
                break e;
              case 1:
                p = m;
                var g = a.type, w = a.stateNode;
                if ((a.flags & 128) === 0 && (typeof g.getDerivedStateFromError == "function" || w !== null && typeof w.componentDidCatch == "function" && (En === null || !En.has(w)))) {
                  a.flags |= 65536, t &= -t, a.lanes |= t;
                  var $ = Su(a, p, t);
                  qo(a, $);
                  break e;
                }
            }
            a = a.return;
          } while (a !== null);
        }
        nc(n);
      } catch (Y) {
        t = Y, et === n && n !== null && (et = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function ec() {
    var e = ss.current;
    return ss.current = Zi, e === null ? Zi : e;
  }
  function la() {
    (nt === 0 || nt === 3 || nt === 2) && (nt = 4), lt === null || (Dn & 268435455) === 0 && (ls & 268435455) === 0 || Tn(lt, ct);
  }
  function ds(e, t) {
    var n = Ce;
    Ce |= 2;
    var r = ec();
    (lt !== e || ct !== t) && (cn = null, Vn(e, t));
    do
      try {
        $d();
        break;
      } catch (s) {
        Zu(e, s);
      }
    while (!0);
    if (kl(), Ce = n, ss.current = r, et !== null) throw Error(l(261));
    return lt = null, ct = 0, nt;
  }
  function $d() {
    for (; et !== null; ) tc(et);
  }
  function zd() {
    for (; et !== null && !of(); ) tc(et);
  }
  function tc(e) {
    var t = sc(e.alternate, e, Mt);
    e.memoizedProps = e.pendingProps, t === null ? nc(e) : et = t, bl.current = null;
  }
  function nc(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (e = t.return, (t.flags & 32768) === 0) {
        if (n = Cd(n, t, Mt), n !== null) {
          et = n;
          return;
        }
      } else {
        if (n = Rd(n, t), n !== null) {
          n.flags &= 32767, et = n;
          return;
        }
        if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          nt = 6, et = null;
          return;
        }
      }
      if (t = t.sibling, t !== null) {
        et = t;
        return;
      }
      et = t = e;
    } while (t !== null);
    nt === 0 && (nt = 5);
  }
  function Un(e, t, n) {
    var r = Oe, s = Ft.transition;
    try {
      Ft.transition = null, Oe = 1, Od(e, t, n, r);
    } finally {
      Ft.transition = s, Oe = r;
    }
    return null;
  }
  function Od(e, t, n, r) {
    do
      vr();
    while (_n !== null);
    if ((Ce & 6) !== 0) throw Error(l(327));
    n = e.finishedWork;
    var s = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(l(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var a = n.lanes | n.childLanes;
    if (gf(e, a), e === lt && (et = lt = null, ct = 0), (n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0 || os || (os = !0, lc(vi, function() {
      return vr(), null;
    })), a = (n.flags & 15990) !== 0, (n.subtreeFlags & 15990) !== 0 || a) {
      a = Ft.transition, Ft.transition = null;
      var f = Oe;
      Oe = 1;
      var p = Ce;
      Ce |= 4, bl.current = null, Ld(e, n), Qu(n, e), id(ll), ji = !!sl, ll = sl = null, e.current = n, Ad(n), uf(), Ce = p, Oe = f, Ft.transition = a;
    } else e.current = n;
    if (os && (os = !1, _n = e, us = s), a = e.pendingLanes, a === 0 && (En = null), df(n.stateNode), jt(e, Je()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) s = t[n], r(s.value, { componentStack: s.stack, digest: s.digest });
    if (as) throw as = !1, e = ea, ea = null, e;
    return (us & 1) !== 0 && e.tag !== 0 && vr(), a = e.pendingLanes, (a & 1) !== 0 ? e === ta ? ii++ : (ii = 0, ta = e) : ii = 0, xn(), null;
  }
  function vr() {
    if (_n !== null) {
      var e = Ha(us), t = Ft.transition, n = Oe;
      try {
        if (Ft.transition = null, Oe = 16 > e ? 16 : e, _n === null) var r = !1;
        else {
          if (e = _n, _n = null, us = 0, (Ce & 6) !== 0) throw Error(l(331));
          var s = Ce;
          for (Ce |= 4, H = e.current; H !== null; ) {
            var a = H, f = a.child;
            if ((H.flags & 16) !== 0) {
              var p = a.deletions;
              if (p !== null) {
                for (var m = 0; m < p.length; m++) {
                  var E = p[m];
                  for (H = E; H !== null; ) {
                    var R = H;
                    switch (R.tag) {
                      case 0:
                      case 11:
                      case 15:
                        ti(8, R, a);
                    }
                    var I = R.child;
                    if (I !== null) I.return = R, H = I;
                    else for (; H !== null; ) {
                      R = H;
                      var C = R.sibling, V = R.return;
                      if (Vu(R), R === E) {
                        H = null;
                        break;
                      }
                      if (C !== null) {
                        C.return = V, H = C;
                        break;
                      }
                      H = V;
                    }
                  }
                }
                var W = a.alternate;
                if (W !== null) {
                  var K = W.child;
                  if (K !== null) {
                    W.child = null;
                    do {
                      var Ze = K.sibling;
                      K.sibling = null, K = Ze;
                    } while (K !== null);
                  }
                }
                H = a;
              }
            }
            if ((a.subtreeFlags & 2064) !== 0 && f !== null) f.return = a, H = f;
            else e: for (; H !== null; ) {
              if (a = H, (a.flags & 2048) !== 0) switch (a.tag) {
                case 0:
                case 11:
                case 15:
                  ti(9, a, a.return);
              }
              var x = a.sibling;
              if (x !== null) {
                x.return = a.return, H = x;
                break e;
              }
              H = a.return;
            }
          }
          var g = e.current;
          for (H = g; H !== null; ) {
            f = H;
            var w = f.child;
            if ((f.subtreeFlags & 2064) !== 0 && w !== null) w.return = f, H = w;
            else e: for (f = g; H !== null; ) {
              if (p = H, (p.flags & 2048) !== 0) try {
                switch (p.tag) {
                  case 0:
                  case 11:
                  case 15:
                    is(9, p);
                }
              } catch (Y) {
                be(p, p.return, Y);
              }
              if (p === f) {
                H = null;
                break e;
              }
              var $ = p.sibling;
              if ($ !== null) {
                $.return = p.return, H = $;
                break e;
              }
              H = p.return;
            }
          }
          if (Ce = s, xn(), qt && typeof qt.onPostCommitFiberRoot == "function") try {
            qt.onPostCommitFiberRoot(yi, e);
          } catch {
          }
          r = !0;
        }
        return r;
      } finally {
        Oe = n, Ft.transition = t;
      }
    }
    return !1;
  }
  function rc(e, t, n) {
    t = dr(n, t), t = wu(e, t, 1), e = Sn(e, t, 1), t = gt(), e !== null && (Mr(e, 1, t), jt(e, t));
  }
  function be(e, t, n) {
    if (e.tag === 3) rc(e, e, n);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        rc(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (En === null || !En.has(r))) {
          e = dr(n, e), e = Su(t, e, 1), t = Sn(t, e, 1), e = gt(), t !== null && (Mr(t, 1, e), jt(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function Dd(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = gt(), e.pingedLanes |= e.suspendedLanes & n, lt === e && (ct & n) === n && (nt === 4 || nt === 3 && (ct & 130023424) === ct && 500 > Je() - Zl ? Vn(e, 0) : Jl |= n), jt(e, t);
  }
  function ic(e, t) {
    t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = ki, ki <<= 1, (ki & 130023424) === 0 && (ki = 4194304)));
    var n = gt();
    e = an(e, t), e !== null && (Mr(e, t, n), jt(e, n));
  }
  function Bd(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), ic(e, n);
  }
  function Vd(e, t) {
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
        throw Error(l(314));
    }
    r !== null && r.delete(t), ic(e, n);
  }
  var sc;
  sc = function(e, t, n) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || kt.current) wt = !0;
    else {
      if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return wt = !1, Md(e, t, n);
      wt = (e.flags & 131072) !== 0;
    }
    else wt = !1, Ge && (t.flags & 1048576) !== 0 && Oo(t, Vi, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var r = t.type;
        ns(e, t), e = t.pendingProps;
        var s = ir(t, dt.current);
        cr(t, n), s = Rl(null, t, r, e, s, n);
        var a = Pl();
        return t.flags |= 1, typeof s == "object" && s !== null && typeof s.render == "function" && s.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, xt(r) ? (a = !0, Oi(t)) : a = !1, t.memoizedState = s.state !== null && s.state !== void 0 ? s.state : null, jl(t), s.updater = es, t.stateNode = s, s._reactInternals = t, zl(t, r, e, n), t = Vl(null, t, r, !0, a, n)) : (t.tag = 0, Ge && a && hl(t), yt(null, t, s, n), t = t.child), t;
      case 16:
        r = t.elementType;
        e: {
          switch (ns(e, t), e = t.pendingProps, s = r._init, r = s(r._payload), t.type = r, s = t.tag = Hd(r), e = Bt(r, e), s) {
            case 0:
              t = Bl(null, t, r, e, n);
              break e;
            case 1:
              t = Pu(null, t, r, e, n);
              break e;
            case 11:
              t = Nu(null, t, r, e, n);
              break e;
            case 14:
              t = Tu(null, t, r, Bt(r.type, e), n);
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
        return r = t.type, s = t.pendingProps, s = t.elementType === r ? s : Bt(r, s), Bl(e, t, r, s, n);
      case 1:
        return r = t.type, s = t.pendingProps, s = t.elementType === r ? s : Bt(r, s), Pu(e, t, r, s, n);
      case 3:
        e: {
          if (Lu(t), e === null) throw Error(l(387));
          r = t.pendingProps, a = t.memoizedState, s = a.element, Go(e, t), Gi(t, r, null, n);
          var f = t.memoizedState;
          if (r = f.element, a.isDehydrated) if (a = { element: r, isDehydrated: !1, cache: f.cache, pendingSuspenseBoundaries: f.pendingSuspenseBoundaries, transitions: f.transitions }, t.updateQueue.baseState = a, t.memoizedState = a, t.flags & 256) {
            s = dr(Error(l(423)), t), t = Au(e, t, r, n, s);
            break e;
          } else if (r !== s) {
            s = dr(Error(l(424)), t), t = Au(e, t, r, n, s);
            break e;
          } else for (Tt = yn(t.stateNode.containerInfo.firstChild), Nt = t, Ge = !0, Dt = null, n = Ko(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (ar(), r === s) {
              t = un(e, t, n);
              break e;
            }
            yt(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return Yo(t), e === null && vl(t), r = t.type, s = t.pendingProps, a = e !== null ? e.memoizedProps : null, f = s.children, al(r, s) ? f = null : a !== null && al(r, a) && (t.flags |= 32), Ru(e, t), yt(e, t, f, n), t.child;
      case 6:
        return e === null && vl(t), null;
      case 13:
        return Iu(e, t, n);
      case 4:
        return El(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = or(t, null, r, n) : yt(e, t, r, n), t.child;
      case 11:
        return r = t.type, s = t.pendingProps, s = t.elementType === r ? s : Bt(r, s), Nu(e, t, r, s, n);
      case 7:
        return yt(e, t, t.pendingProps, n), t.child;
      case 8:
        return yt(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return yt(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (r = t.type._context, s = t.pendingProps, a = t.memoizedProps, f = s.value, He(Wi, r._currentValue), r._currentValue = f, a !== null) if (Ot(a.value, f)) {
            if (a.children === s.children && !kt.current) {
              t = un(e, t, n);
              break e;
            }
          } else for (a = t.child, a !== null && (a.return = t); a !== null; ) {
            var p = a.dependencies;
            if (p !== null) {
              f = a.child;
              for (var m = p.firstContext; m !== null; ) {
                if (m.context === r) {
                  if (a.tag === 1) {
                    m = on(-1, n & -n), m.tag = 2;
                    var E = a.updateQueue;
                    if (E !== null) {
                      E = E.shared;
                      var R = E.pending;
                      R === null ? m.next = m : (m.next = R.next, R.next = m), E.pending = m;
                    }
                  }
                  a.lanes |= n, m = a.alternate, m !== null && (m.lanes |= n), wl(
                    a.return,
                    n,
                    t
                  ), p.lanes |= n;
                  break;
                }
                m = m.next;
              }
            } else if (a.tag === 10) f = a.type === t.type ? null : a.child;
            else if (a.tag === 18) {
              if (f = a.return, f === null) throw Error(l(341));
              f.lanes |= n, p = f.alternate, p !== null && (p.lanes |= n), wl(f, n, t), f = a.sibling;
            } else f = a.child;
            if (f !== null) f.return = a;
            else for (f = a; f !== null; ) {
              if (f === t) {
                f = null;
                break;
              }
              if (a = f.sibling, a !== null) {
                a.return = f.return, f = a;
                break;
              }
              f = f.return;
            }
            a = f;
          }
          yt(e, t, s.children, n), t = t.child;
        }
        return t;
      case 9:
        return s = t.type, r = t.pendingProps.children, cr(t, n), s = At(s), r = r(s), t.flags |= 1, yt(e, t, r, n), t.child;
      case 14:
        return r = t.type, s = Bt(r, t.pendingProps), s = Bt(r.type, s), Tu(e, t, r, s, n);
      case 15:
        return Mu(e, t, t.type, t.pendingProps, n);
      case 17:
        return r = t.type, s = t.pendingProps, s = t.elementType === r ? s : Bt(r, s), ns(e, t), t.tag = 1, xt(r) ? (e = !0, Oi(t)) : e = !1, cr(t, n), ku(t, r, s), zl(t, r, s, n), Vl(null, t, r, !0, e, n);
      case 19:
        return $u(e, t, n);
      case 22:
        return Cu(e, t, n);
    }
    throw Error(l(156, t.tag));
  };
  function lc(e, t) {
    return Oa(e, t);
  }
  function Ud(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function $t(e, t, n, r) {
    return new Ud(e, t, n, r);
  }
  function aa(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Hd(e) {
    if (typeof e == "function") return aa(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === De) return 11;
      if (e === We) return 14;
    }
    return 2;
  }
  function Mn(e, t) {
    var n = e.alternate;
    return n === null ? (n = $t(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
  }
  function hs(e, t, n, r, s, a) {
    var f = 2;
    if (r = e, typeof e == "function") aa(e) && (f = 1);
    else if (typeof e == "string") f = 5;
    else e: switch (e) {
      case de:
        return Hn(n.children, s, a, t);
      case U:
        f = 8, s |= 8;
        break;
      case se:
        return e = $t(12, n, t, s | 2), e.elementType = se, e.lanes = a, e;
      case ze:
        return e = $t(13, n, t, s), e.elementType = ze, e.lanes = a, e;
      case Ae:
        return e = $t(19, n, t, s), e.elementType = Ae, e.lanes = a, e;
      case Te:
        return ps(n, s, a, t);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case xe:
            f = 10;
            break e;
          case Me:
            f = 9;
            break e;
          case De:
            f = 11;
            break e;
          case We:
            f = 14;
            break e;
          case Be:
            f = 16, r = null;
            break e;
        }
        throw Error(l(130, e == null ? e : typeof e, ""));
    }
    return t = $t(f, n, t, s), t.elementType = e, t.type = r, t.lanes = a, t;
  }
  function Hn(e, t, n, r) {
    return e = $t(7, e, r, t), e.lanes = n, e;
  }
  function ps(e, t, n, r) {
    return e = $t(22, e, r, t), e.elementType = Te, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
  }
  function oa(e, t, n) {
    return e = $t(6, e, null, t), e.lanes = n, e;
  }
  function ua(e, t, n) {
    return t = $t(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function Wd(e, t, n, r, s) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = $s(0), this.expirationTimes = $s(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = $s(0), this.identifierPrefix = r, this.onRecoverableError = s, this.mutableSourceEagerHydrationData = null;
  }
  function ca(e, t, n, r, s, a, f, p, m) {
    return e = new Wd(e, t, n, p, m), t === 1 ? (t = 1, a === !0 && (t |= 8)) : t = 0, a = $t(3, null, null, t), e.current = a, a.stateNode = e, a.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, jl(a), e;
  }
  function Kd(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: Ee, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
  }
  function ac(e) {
    if (!e) return kn;
    e = e._reactInternals;
    e: {
      if (Pn(e) !== e || e.tag !== 1) throw Error(l(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (xt(t.type)) {
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
      if (xt(n)) return Fo(e, n, t);
    }
    return t;
  }
  function oc(e, t, n, r, s, a, f, p, m) {
    return e = ca(n, r, !0, e, s, a, f, p, m), e.context = ac(null), n = e.current, r = gt(), s = Nn(n), a = on(r, s), a.callback = t ?? null, Sn(n, a, s), e.current.lanes = s, Mr(e, s, r), jt(e, r), e;
  }
  function ms(e, t, n, r) {
    var s = t.current, a = gt(), f = Nn(s);
    return n = ac(n), t.context === null ? t.context = n : t.pendingContext = n, t = on(a, f), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Sn(s, t, f), e !== null && (Ht(e, s, f, a), Qi(e, s, f)), f;
  }
  function vs(e) {
    return e = e.current, e.child ? (e.child.tag === 5, e.child.stateNode) : null;
  }
  function uc(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function fa(e, t) {
    uc(e, t), (e = e.alternate) && uc(e, t);
  }
  function Qd() {
    return null;
  }
  var cc = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function da(e) {
    this._internalRoot = e;
  }
  ys.prototype.render = da.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(l(409));
    ms(e, t, null, null);
  }, ys.prototype.unmount = da.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Bn(function() {
        ms(null, e, null, null);
      }), t[nn] = null;
    }
  };
  function ys(e) {
    this._internalRoot = e;
  }
  ys.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Qa();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < pn.length && t !== 0 && t < pn[n].priority; n++) ;
      pn.splice(n, 0, e), n === 0 && Xa(e);
    }
  };
  function ha(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function gs(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function fc() {
  }
  function Gd(e, t, n, r, s) {
    if (s) {
      if (typeof r == "function") {
        var a = r;
        r = function() {
          var E = vs(f);
          a.call(E);
        };
      }
      var f = oc(t, r, e, 0, null, !1, !1, "", fc);
      return e._reactRootContainer = f, e[nn] = f.current, Ur(e.nodeType === 8 ? e.parentNode : e), Bn(), f;
    }
    for (; s = e.lastChild; ) e.removeChild(s);
    if (typeof r == "function") {
      var p = r;
      r = function() {
        var E = vs(m);
        p.call(E);
      };
    }
    var m = ca(e, 0, !1, null, null, !1, !1, "", fc);
    return e._reactRootContainer = m, e[nn] = m.current, Ur(e.nodeType === 8 ? e.parentNode : e), Bn(function() {
      ms(t, m, n, r);
    }), m;
  }
  function ks(e, t, n, r, s) {
    var a = n._reactRootContainer;
    if (a) {
      var f = a;
      if (typeof s == "function") {
        var p = s;
        s = function() {
          var m = vs(f);
          p.call(m);
        };
      }
      ms(t, f, e, s);
    } else f = Gd(n, t, e, s, r);
    return vs(f);
  }
  Wa = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = Tr(t.pendingLanes);
          n !== 0 && (zs(t, n | 1), jt(t, Je()), (Ce & 6) === 0 && (mr = Je() + 500, xn()));
        }
        break;
      case 13:
        Bn(function() {
          var r = an(e, 1);
          if (r !== null) {
            var s = gt();
            Ht(r, e, 1, s);
          }
        }), fa(e, 1);
    }
  }, Os = function(e) {
    if (e.tag === 13) {
      var t = an(e, 134217728);
      if (t !== null) {
        var n = gt();
        Ht(t, e, 134217728, n);
      }
      fa(e, 134217728);
    }
  }, Ka = function(e) {
    if (e.tag === 13) {
      var t = Nn(e), n = an(e, t);
      if (n !== null) {
        var r = gt();
        Ht(n, e, t, r);
      }
      fa(e, t);
    }
  }, Qa = function() {
    return Oe;
  }, Ga = function(e, t) {
    var n = Oe;
    try {
      return Oe = e, t();
    } finally {
      Oe = n;
    }
  }, Rn = function(e, t, n) {
    switch (t) {
      case "input":
        if (X(e, n), t = n.name, n.type === "radio" && t != null) {
          for (n = e; n.parentNode; ) n = n.parentNode;
          for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
            var r = n[t];
            if (r !== e && r.form === e.form) {
              var s = $i(r);
              if (!s) throw Error(l(90));
              B(r), X(r, s);
            }
          }
        }
        break;
      case "textarea":
        rt(e, n);
        break;
      case "select":
        t = n.value, t != null && Pe(e, !!n.multiple, t, !1);
    }
  }, Pa = ia, La = Bn;
  var qd = { usingClientEntryPoint: !1, Events: [Kr, nr, $i, Ca, Ra, ia] }, si = { findFiberByHostInstance: Ln, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Xd = { bundleType: si.bundleType, version: si.version, rendererPackageName: si.rendererPackageName, rendererConfig: si.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: te.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = $a(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: si.findFiberByHostInstance || Qd, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var xs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!xs.isDisabled && xs.supportsFiber) try {
      yi = xs.inject(Xd), qt = xs;
    } catch {
    }
  }
  return Et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = qd, Et.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!ha(t)) throw Error(l(200));
    return Kd(e, t, null, n);
  }, Et.createRoot = function(e, t) {
    if (!ha(e)) throw Error(l(299));
    var n = !1, r = "", s = cc;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError)), t = ca(e, 1, !1, null, null, n, !1, r, s), e[nn] = t.current, Ur(e.nodeType === 8 ? e.parentNode : e), new da(t);
  }, Et.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(l(188)) : (e = Object.keys(e).join(","), Error(l(268, e)));
    return e = $a(t), e = e === null ? null : e.stateNode, e;
  }, Et.flushSync = function(e) {
    return Bn(e);
  }, Et.hydrate = function(e, t, n) {
    if (!gs(t)) throw Error(l(200));
    return ks(null, e, t, !0, n);
  }, Et.hydrateRoot = function(e, t, n) {
    if (!ha(e)) throw Error(l(405));
    var r = n != null && n.hydratedSources || null, s = !1, a = "", f = cc;
    if (n != null && (n.unstable_strictMode === !0 && (s = !0), n.identifierPrefix !== void 0 && (a = n.identifierPrefix), n.onRecoverableError !== void 0 && (f = n.onRecoverableError)), t = oc(t, null, e, 1, n ?? null, s, !1, a, f), e[nn] = t.current, Ur(e), r) for (e = 0; e < r.length; e++) n = r[e], s = n._getVersion, s = s(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, s] : t.mutableSourceEagerHydrationData.push(
      n,
      s
    );
    return new ys(t);
  }, Et.render = function(e, t, n) {
    if (!gs(t)) throw Error(l(200));
    return ks(null, e, t, !1, n);
  }, Et.unmountComponentAtNode = function(e) {
    if (!gs(e)) throw Error(l(40));
    return e._reactRootContainer ? (Bn(function() {
      ks(null, null, e, !1, function() {
        e._reactRootContainer = null, e[nn] = null;
      });
    }), !0) : !1;
  }, Et.unstable_batchedUpdates = ia, Et.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!gs(n)) throw Error(l(200));
    if (e == null || e._reactInternals === void 0) throw Error(l(38));
    return ks(e, t, n, !1, r);
  }, Et.version = "18.3.1-next-f1338f8080-20240426", Et;
}
var kc;
function ih() {
  if (kc) return va.exports;
  kc = 1;
  function o() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o);
      } catch (i) {
        console.error(i);
      }
  }
  return o(), va.exports = rh(), va.exports;
}
var xc;
function sh() {
  if (xc) return ws;
  xc = 1;
  var o = ih();
  return ws.createRoot = o.createRoot, ws.hydrateRoot = o.hydrateRoot, ws;
}
var lh = sh();
const ah = (() => {
  const o = ["C", "C♯", "D", "E♭", "E", "F", "F♯", "G", "A♭", "A", "B♭", "B"], i = "CDEFGAB", l = [0, 2, 4, 5, 7, 9, 11], u = [64, 59, 55, 50, 45, 40], d = u.at(-1), h = { pentatonic: 15, "3nps": 17 }, v = 7, y = [
    [[5, 8], [5, 8], [5, 7], [5, 7], [5, 7], [5, 8]],
    [[8, 10], [8, 10], [7, 9], [7, 10], [7, 10], [8, 10]],
    [[10, 12], [10, 13], [9, 12], [10, 12], [10, 12], [10, 12]],
    [[12, 15], [13, 15], [12, 14], [12, 14], [12, 15], [12, 15]],
    [[15, 17], [15, 17], [14, 17], [14, 17], [15, 17], [15, 17]]
  ], j = ["e", "B", "G", "D", "A", "E"], _ = ["ohut e", "B", "G", "D", "A", "paksu E"], N = [[0, "1"], [3, "♭3"], [5, "4"], [7, "5"], [10, "♭7"]], S = [[0, "1"], [2, "2"], [4, "3"], [7, "5"], [9, "6"]], M = {
    mp: {
      name: "mollipentatoninen",
      base: N,
      add: [],
      hint: "Kokeile samaa boksia doorisessa, fryygisessä tai aiolisessa moodissa."
    },
    dorian: {
      name: "doorinen",
      base: N,
      add: [[2, "2"], [9, "6"]],
      hint: "Lisäsävelet: 2. aste ja luonnollinen 6. aste – jazzia ja funkia."
    },
    phrygian: {
      name: "fryyginen",
      base: N,
      add: [[1, "♭2"], [8, "♭6"]],
      hint: "Alennettu 2. ja 6. aste antavat moodille tumman sävyn."
    },
    aeolian: {
      name: "aiolinen",
      base: N,
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
      base: S,
      add: [],
      hint: "Kirkas boksi – lisää 2 säveltä, niin syntyy duurimoodi."
    },
    ionian: {
      name: "jooninen",
      base: S,
      add: [[5, "4"], [11, "7"]],
      hint: "Lisäsävelet: 4. ja 7. aste – tavallinen duuri."
    },
    lydian: {
      name: "lyydinen",
      base: S,
      add: [[6, "♯4"], [11, "7"]],
      hint: "Korotettu 4. aste antaa moodille leijuvan sävyn."
    },
    mixolydian: {
      name: "miksolyydinen",
      base: S,
      add: [[5, "4"], [10, "♭7"]],
      hint: "Alennettu 7. aste on tuttu bluesista ja rockista."
    }
  }, L = {
    rail: 46,
    wood: "#21343e",
    wire: "#8ca9b0",
    string: "#c4d2d3",
    nut: "#e2d1ad",
    markers: [3, 5, 7, 9, 12, 15, 17, 19, 21, 24]
  }, F = 0, P = L.rail, A = 42, Q = 54, G = 34, Z = 11, te = (F + P) / 2, fe = A + (u.length - 1) * G + 30, Ee = (O) => P + O * Q, de = (O) => O === 0 ? te : Ee(O) - Q / 2, U = (O) => A + O * G;
  let se = 0;
  function xe({ count: O, cell: J, row: B, firstY: ee, dimmed: ue = [] }) {
    const q = L.rail, ie = q + O * J, X = ee - B * 0.46, he = ee + B * 5.46, pe = (Ne) => q + (Ne - 0.5) * J, Se = "neck-" + ++se;
    let Pe = `<defs><linearGradient id="${Se}-wood" x2="0" y2="1"><stop stop-color="#2b3f48"/><stop offset=".52" stop-color="${L.wood}"/><stop offset="1" stop-color="#142731"/></linearGradient>
      <linearGradient id="${Se}-nut"><stop stop-color="#938771"/><stop offset=".35" stop-color="#eee1c4"/><stop offset=".7" stop-color="${L.nut}"/><stop offset="1" stop-color="#998d76"/></linearGradient></defs>
      <rect x="${q}" y="${X}" width="${O * J}" height="${he - X}" rx="3" fill="url(#${Se}-wood)" stroke="#728895" stroke-opacity=".42"/>`;
    for (let Ne = 1; Ne <= O; Ne++) {
      const Ue = q + Ne * J, rt = Ne % 12 === 0;
      Pe += `<text x="${pe(Ne)}" y="${X - 10}" fill="${rt ? "#e7c78e" : "#afc1c9"}" font-size="${rt ? 13 : 12}" font-weight="${rt ? 750 : 550}" text-anchor="middle">${Ne}</text>
        <line x1="${Ue}" y1="${X}" x2="${Ue}" y2="${he}" stroke="${L.wire}" stroke-width="2" opacity=".57"/>`;
    }
    Pe += `<rect x="${q}" y="${X}" width="4" height="${he - X}" rx="1.5" fill="url(#${Se}-nut)"/>`;
    for (const Ne of L.markers.filter((Ue) => Ue <= O))
      for (const Ue of Ne % 12 ? [2.5] : [1.5, 3.5])
        Pe += `<circle cx="${pe(Ne)}" cy="${ee + Ue * B}" r="6" fill="#a5bdc6" opacity=".28"/>`;
    return j.forEach((Ne, Ue) => {
      const rt = ee + Ue * B;
      Pe += `<line x1="${q}" x2="${ie}" y1="${rt}" y2="${rt}" stroke="${L.string}" stroke-width="${1 + Ue * 0.32}" opacity="${ue[Ue] ? ".35" : 0.49 + Ue * 0.06}"/>`;
    }), Pe;
  }
  function Me(O, J, B) {
    const ee = i.indexOf(o[O][0]) + Number(B.slice(-1)) - 1, ue = ee % i.length, q = l[ue] + 12 * Math.floor(ee / i.length), ie = O + J - q;
    return i[ue] + (ie < 0 ? "♭" : "♯").repeat(Math.abs(ie));
  }
  function De(O) {
    return [...O.base, ...O.add].sort((J, B) => J[0] - B[0]);
  }
  function ze(O, J, B) {
    const ee = J + (B ? 1 : 0), ue = y[ee % y.length], q = Math.min(...ue.map(([Se]) => Se)), ie = Math.max(...ue.map(([, Se]) => Se));
    let pe = (O - d % 12 + 12) % 12 - (B ? 8 : 5) + 12 * Math.floor(ee / y.length);
    return q + pe < 0 && (pe += 12), ie + pe > h.pentatonic && (pe -= 12), {
      strings: ue.map((Se) => Se.map((Pe) => Pe + pe)),
      start: q + pe,
      end: ie + pe
    };
  }
  function Ae(O, J, B) {
    const ee = B[J], ue = (O + ee - d % 12 + 12) % 12, q = d + ue - ee, ie = u.map((X, he) => {
      const pe = J + (u.length - 1 - he) * 3;
      return [pe, pe + 1, pe + 2].map((Se) => {
        const Pe = Math.floor(Se / B.length), Ne = B[Se % B.length];
        return q + Ne + 12 * Pe - X;
      });
    });
    return {
      strings: ie,
      start: Math.min(...ie.map((X) => X[0])),
      end: Math.max(...ie.map((X) => X.at(-1)))
    };
  }
  function We(O, J) {
    const B = [], ee = Math.ceil(-O.end / 12) * 12;
    for (let q = ee; O.start + q <= J; q += 12) {
      const ie = O.strings.map((he) => he.map((pe) => pe + q).filter((pe) => pe >= 0 && pe <= J)), X = ie.flat();
      B.push({
        strings: ie,
        start: Math.min(...X),
        end: Math.max(...X),
        partial: O.start + q < 0 || O.end + q > J
      });
    }
    const ue = B.filter((q) => !q.partial);
    return ue.length ? ue : B;
  }
  function Be(O) {
    return De(O).length === v;
  }
  function Te(O, J, B) {
    const ee = Be(J);
    O.querySelector('[value="3nps"]').disabled = !ee, O.value = ee ? B ?? "3nps" : "pentatonic";
  }
  function z(O, J, B, ee, ue) {
    const q = De(J).map(([ie]) => ie);
    return ee.map((ie) => {
      const X = ie - 1, he = B === "3nps" ? Ae(O, X, q) : ze(O, X, J.base === S), pe = ue === void 0 ? [he] : We(he, ue);
      return { number: ie, positions: pe };
    });
  }
  function b(O, J) {
    const B = O.getBoundingClientRect(), ee = O.querySelectorAll(J);
    let ue = 1 / 0;
    ee.forEach((q) => {
      const ie = q.getBoundingClientRect();
      let X = 0;
      ie.left < B.left ? X = ie.left - B.left - 8 : ie.right > B.right && (X = ie.right - B.right + 8), Math.abs(X) < Math.abs(ue) && (ue = X);
    }), Number.isFinite(ue) && (O.scrollLeft += ue);
  }
  function D(O, J = !1) {
    const B = O === "3nps" ? v : y.length;
    return Array.from({ length: B }, (ee, ue) => {
      const q = ue + 1;
      return '<label class="box-toggle" data-box="' + q + '"><input type="checkbox" value="' + q + '"' + (J && ue === 0 ? " checked" : "") + "> Boksi " + q + "</label>";
    }).join("");
  }
  function k(O, J) {
    const B = De(J), ee = new Map(B.map(([q, ie]) => [q, Me(O, q, ie)])), ue = [
      { suffix: "", base: [[0, "1"], [4, "3"], [7, "5"]] },
      { suffix: "m", base: [[0, "1"], [3, "♭3"], [7, "5"]] },
      { suffix: "°", base: [[0, "1"], [3, "♭3"], [6, "♭5"]] }
    ];
    return B.flatMap(([q, ie]) => ue.flatMap(({ suffix: X, base: he }) => {
      const pe = he.map(([Se]) => ee.get((q + Se) % 12));
      return pe.every(Boolean) ? {
        root: (O + q) % 12,
        degree: Number(String(ie).replace(/\D/g, "")),
        name: pe[0] + X,
        notes: pe,
        base: he,
        add: []
      } : [];
    }));
  }
  function T(O, J) {
    const B = O.base.map(([q]) => (O.root + q) % 12), ee = u.map((q) => {
      const ie = [];
      for (let X = 0; X <= J; X++) {
        const he = (q + X) % 12;
        B.includes(he) && ie.push({ fret: X, pitch: he });
      }
      return ie;
    }), ue = [];
    for (let q = 0; q <= ee.length - 3; q++)
      for (const ie of ee[q])
        for (const X of ee[q + 1])
          if (ie.pitch !== X.pitch)
            for (const he of ee[q + 2]) {
              if (he.pitch === ie.pitch || he.pitch === X.pitch) continue;
              const pe = [ie.fret, X.fret, he.fret], Se = Math.min(...pe), Pe = Math.max(...pe);
              if (Pe - Se > 3) continue;
              const Ne = Array(u.length).fill(null);
              Ne.splice(q, 3, ...pe), ue.push({ strings: Ne, low: Se, high: Pe });
            }
    return ue.sort((q, ie) => q.high - ie.high || q.low - ie.low);
  }
  const ae = {
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
  }, ce = [
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
  function ye(O, J) {
    const B = ae[O + ":" + J];
    if (B) return { frets: B, barre: null };
    let ee = null;
    return ce.forEach(({ string: ue, openPC: q, shapes: ie }) => {
      const X = ie[J];
      if (!X) return;
      let he = (O - q + 12) % 12;
      if (he + Math.min(...X.filter((Pe) => Pe !== null)) < 0 && (he += 12), ee && ee.fret <= he) return;
      const pe = X.map((Pe) => Pe === null ? null : he + Pe), Se = he > 0 && X.at(-1) === 0 ? { fret: he, from: ue, to: X.length - 1 } : null;
      ee = { fret: he, frets: pe, barre: Se };
    }), ee && { frets: ee.frets, barre: ee.barre };
  }
  function ge(O, { frets: J, barre: B }, ee) {
    const pe = [...u].reverse(), Se = J.filter((Ie) => Ie > 0), Ne = !Se.length || Math.max(...Se) <= 4 && (J.includes(0) || Math.min(...Se) === 1) ? 1 : Math.min(...Se), Ue = (Ie) => 24 + Ie * 14, rt = (Ie) => 30 + (Ie - Ne) * 18 + 18 / 2, Zt = 102;
    let vt = '<svg class="chord-svg" viewBox="0 0 108 ' + (Zt + 8) + '" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="' + ee + "-ote paksusta kielestä ohueen: " + J.map((Ie) => Ie ?? "x").join(" ") + '">';
    for (let Ie = 0; Ie <= 4; Ie++)
      vt += '<line class="' + (Ie === 0 && Ne === 1 ? "nut" : "fret") + '" x1="' + Ue(0) + '" y1="' + (30 + Ie * 18) + '" x2="' + Ue(5) + '" y2="' + (30 + Ie * 18) + '"/>';
    return J.forEach((Ie, Ye) => {
      vt += '<line class="string" x1="' + Ue(Ye) + '" y1="30" x2="' + Ue(Ye) + '" y2="' + Zt + '"/>';
    }), Ne > 1 && (vt += '<text class="fret-label" x="15" y="' + (rt(Ne) + 4) + '">' + Ne + "</text>"), B && (vt += '<rect class="barre" x="' + (Ue(B.from) - 6.5) + '" y="' + (rt(B.fret) - 6.5) + '" width="' + ((B.to - B.from) * 14 + 13) + '" height="13" rx="6.5"/>'), J.forEach((Ie, Ye) => {
      if (Ie === null) {
        vt += '<text class="marker" x="' + Ue(Ye) + '" y="22">×</text>';
        return;
      }
      const Ct = (pe[Ye] + Ie) % 12 === O;
      if (Ie === 0) {
        vt += '<circle class="open' + (Ct ? " root-open" : "") + '" cx="' + Ue(Ye) + '" cy="18" r="4.5"/>';
        return;
      }
      B && Ie === B.fret && Ye >= B.from && Ye <= B.to && !Ct || (vt += '<circle class="' + (Ct ? "root" : "tone") + '" cx="' + Ue(Ye) + '" cy="' + rt(Ie) + '" r="6.5"/>');
    }), vt + "</svg>";
  }
  function _e(O, J) {
    const B = new URLSearchParams(location.search), ee = o.indexOf(B.get("toonikka")), ue = B.get("asteikko");
    return {
      rootPC: ee === -1 ? O : ee,
      scaleId: Object.hasOwn(M, ue) ? ue : J
    };
  }
  function we(O, J, B) {
    return O + "?" + new URLSearchParams({ toonikka: o[J], asteikko: B });
  }
  function Re(O, J, B, {
    boxes: ee = [],
    onlyBoxNotes: ue = !1,
    automatic: q = !0,
    focusDegree: ie = "",
    grip: X = null,
    barre: he = null,
    label: pe = o[O] + " " + J.name,
    notes: Se = null,
    targets: Pe = !1,
    muteFret: Ne = null
  } = {}) {
    const rt = Ee(B) + 2, Zt = q ? 680 : Math.ceil(rt * 0.64), vt = ee.flatMap(($e) => $e.positions), Ie = {};
    J.base.forEach(([$e, ve]) => Ie[(O + $e) % 12] = { deg: ve, added: !1 }), J.add.forEach(([$e, ve]) => Ie[(O + $e) % 12] = { deg: ve, added: !0 });
    const Ye = u.map(($e, ve) => !!X && X[ve] === null), Ct = !!X && Ne !== null, Kt = _.filter(($e, ve) => Ye[ve]).reverse(), en = pe + ". " + B + " nauhaa. Vapaat kielet satulan vasemmalla puolella." + (Kt.length ? " Soittamatta jäävät kielet: " + Kt.join(", ") + "." : "");
    let Fe = '<svg viewBox="0 0 ' + rt + " " + fe + '" style="min-width:' + Zt + 'px" xmlns="http://www.w3.org/2000/svg" role="' + (Pe ? "group" : "img") + '" aria-label="' + en + '">';
    if (Fe += xe({
      count: B,
      cell: Q,
      row: G,
      firstY: A,
      dimmed: Ye.map(($e) => $e && !Ct)
    }), ee.forEach(({ number: $e, positions: ve }) => {
      ve.forEach((me) => {
        const it = me.partial ? "box-highlight box-partial" : "box-highlight";
        Fe += '<g class="' + it + '" data-box="' + $e + '" aria-hidden="true">';
        const ot = me.strings.find((Rt) => Rt.length), tn = (de(ot[0]) + de(ot.at(-1))) / 2;
        Fe += '<text class="box-number" x="' + tn + '" y="' + (fe - 2) + '">' + $e + "</text>", me.strings.forEach((Rt, Rn) => {
          if (!Rt.length) return;
          const Qt = de(Rt[0]) - 16, Gt = de(Rt.at(-1)) - de(Rt[0]) + 32;
          Fe += '<rect class="box-band" x="' + Qt + '" y="' + (U(Rn) - 14) + '" width="' + Gt + '" height="28" rx="14"/>';
        }), Fe += "</g>";
      });
    }), u.forEach(($e, ve) => {
      const me = U(ve);
      Ye[ve] && !Ct ? Fe += '<text class="muted-mark" x="' + te + '" y="' + (me + 6) + '" font-size="18" font-weight="700" fill="#efeaff" text-anchor="middle">×</text>' : Ye[ve] && Ne === 0 || (Fe += '<line x1="' + (F + 4) + '" y1="' + me + '" x2="' + (P - 4) + '" y2="' + me + '" stroke="#8b809d" stroke-dasharray="3 3"/>'), Fe += '<text x="7" y="' + (me + 4) + '" font-size="14" fill="#efeaff" text-anchor="middle">' + j[ve] + "</text>";
    }), X && he && he.fret >= 1 && he.fret <= B) {
      const $e = U(he.from), ve = U(he.to), me = Math.min($e, ve) - 6, it = Math.max($e, ve) + 6;
      Fe += '<rect class="barre-indicator" x="' + (de(he.fret) - 7) + '" y="' + me + '" width="14" height="' + (it - me) + '" rx="7" fill="#d5b5ff" opacity=".53"/>';
    }
    return Pe && (Fe += '<g class="fret-targets">', u.forEach(($e, ve) => {
      for (let me = 0; me <= B; me++) {
        const it = me ? _[ve] + "-kieli, " + me + ". nauha" : "vapaa " + _[ve] + "-kieli", ot = me ? Q : P;
        Fe += '<rect class="fret-target" role="button" tabindex="0" data-string="' + ve + '" data-fret="' + me + '" data-midi="' + ($e + me) + '" aria-label="' + it + '" x="' + (de(me) - ot / 2) + '" y="' + (U(ve) - G / 2) + '" width="' + ot + '" height="' + G + '" fill="transparent"/>';
      }
    }), Fe += "</g>"), (Se ?? []).forEach(({ string: $e, fret: ve, label: me, kind: it }) => {
      Fe += '<g class="octave-note octave-' + it + '">', Fe += '<circle cx="' + de(ve) + '" cy="' + U($e) + '" r="' + Z + '"/>', Fe += '<text x="' + de(ve) + '" y="' + (U($e) + 3.5) + '" font-size="' + (me.length > 1 ? 9.5 : 11) + '" font-weight="700" text-anchor="middle">' + me + "</text>", Fe += "</g>";
    }), X && (Fe += '<g class="grip-notes">'), (Se ? [] : u).forEach(($e, ve) => {
      for (let me = 0; me <= B; me++) {
        const it = ($e + me) % 12;
        if (!(it in Ie) || X && X[ve] !== me || ue && !vt.some(({ strings: Gt }) => {
          const qn = Gt[ve];
          return qn.length > 0 && me >= qn[0] && me <= qn.at(-1);
        })) continue;
        const ot = Ie[it], tn = ot.deg === "1", Rt = ot.added ? "#f0a13c" : tn ? "#4b2fd6" : "#6d4aff", Rn = ot.added ? "#1a1430" : "#fff";
        ot.deg === ie && (Fe += '<circle class="focus-note" cx="' + de(me) + '" cy="' + U(ve) + '" r="14.5"/>');
        const Qt = X ? ' data-string="' + (ve + 1) + '" data-fret="' + me + '" data-degree="' + ot.deg + '"' : "";
        Fe += "<circle" + Qt + ' cx="' + de(me) + '" cy="' + U(ve) + '" r="' + Z + '" fill="' + Rt + '" stroke="' + (tn ? "#fff" : "#1a1430") + '" stroke-width="' + (tn ? 2.5 : 1) + '"/>', Fe += '<text x="' + de(me) + '" y="' + (U(ve) + 3.5) + '" font-size="' + (ot.deg.length > 1 ? 9.5 : 11) + '" font-weight="700" fill="' + Rn + '" text-anchor="middle">' + ot.deg + "</text>";
      }
    }), X && (Fe += "</g>"), Ct && Ye.forEach(($e, ve) => {
      if (!$e) return;
      const me = de(Ne), it = U(ve);
      Fe += '<g class="muted-mark grip-mute" data-string="' + (ve + 1) + '" data-fret="' + Ne + '">', Fe += '<circle cx="' + me + '" cy="' + it + '" r="9" fill="' + (Ne === 0 ? "#2a2338" : "#231a12") + '"/>', Fe += '<text x="' + me + '" y="' + (it + 6) + '" font-size="18" font-weight="700" fill="#efeaff" text-anchor="middle">×</text>', Fe += "</g>";
    }), Fe += "</svg>", Fe;
  }
  return {
    neckStyle: L,
    neckSurface: xe,
    STRING_NAMES: j,
    CHROM: o,
    OPEN_PITCHES: u,
    PENT_MAJ: S,
    SCALES: M,
    noteName: Me,
    scaleNotes: De,
    scaleTriads: k,
    triadGrips: T,
    chordGrip: ye,
    renderChordDiagram: ge,
    selectionFromURL: _e,
    selectionHref: we,
    renderBoard: Re,
    BOX_FRETS: h,
    supportsThreeNoteBoxes: Be,
    syncBoxSystem: Te,
    fingeringBoxes: z,
    boxOptions: D,
    revealPositions: b
  };
})();
globalThis.MusicMapFretboard = ah;
function ka(o) {
  return 440 * Math.pow(2, (o - 69) / 12);
}
function oh(o) {
  return 69 + 12 * Math.log2(o / 440);
}
function uh(o) {
  const i = oh(o), l = Math.round(i), u = (i - l) * 100;
  return { midi: l, cents: u };
}
const xr = globalThis.MusicMapFretboard, ch = (o) => (o % 12 + 12) % 12, fh = ["C", "C♯", "D", "D♯", "E", "F", "F♯", "G", "G♯", "A", "A♯", "B"], dh = ["C", "D♭", "D", "E♭", "E", "F", "G♭", "G", "A♭", "A", "B♭", "B"], hh = (o, i = !1, l = !1) => (i ? dh : fh)[ch(o)] + (l ? Math.floor(o / 12) - 1 : ""), Ns = ["ohut E", "B", "G", "D", "A", "paksu E"], ph = (o) => o === 0 ? "vapaa kieli" : `${o}. nauha`, mh = (o, i) => ({ string: o, fret: i, midi: xr.OPEN_PITCHES[o] + i });
function vh(o, i, l) {
  return [...o].sort((u, d) => u - d).flatMap((u) => Array.from({ length: Math.max(0, l - i + 1) }, (d, h) => mh(u, i + h)));
}
const ai = (o) => `${o.string}:${o.fret}`, yh = 4e3;
class wc extends Error {
  name = "MicSetupError";
}
async function gh(o, i) {
  if (!navigator.mediaDevices?.getUserMedia) throw new wc("Mikrofoni tarvitsee HTTPS-yhteyden tai localhost-osoitteen ja sitä tukevan selaimen.");
  const l = {
    audio: {
      deviceId: o ? { exact: o } : void 0,
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
      let _;
      await Promise.race([
        d.resume(),
        new Promise((N, S) => {
          _ = setTimeout(() => S(new wc("Äänen käsittely ei käynnistynyt. Napauta painiketta uudelleen tai lataa sivu.")), yh);
        })
      ]).finally(() => clearTimeout(_));
    }
    const h = d.createMediaStreamSource(u), v = d, y = u.getAudioTracks?.()[0] ?? u.getTracks()[0], j = y?.getSettings?.() ?? {};
    return {
      context: d,
      source: h,
      stream: u,
      label: y?.label ?? "",
      deviceId: j.deviceId ?? "",
      channelCount: j.channelCount ?? 1,
      stop: () => {
        u.getTracks().forEach((_) => _.stop()), h.disconnect(), i || v.close().catch(() => {
        });
      }
    };
  } catch (h) {
    throw u.getTracks().forEach((v) => v.stop()), i || await d?.close().catch(() => {
    }), h;
  }
}
async function kh() {
  return navigator.mediaDevices?.enumerateDevices ? (await navigator.mediaDevices.enumerateDevices()).filter((i) => i.kind === "audioinput" && i.deviceId) : [];
}
var xa, Sc;
function xh() {
  if (Sc) return xa;
  Sc = 1;
  function o(i) {
    if (this.size = i | 0, this.size <= 1 || (this.size & this.size - 1) !== 0)
      throw new Error("FFT size must be a power of two and bigger than 1");
    this._csize = i << 1;
    for (var l = new Array(this.size * 2), u = 0; u < l.length; u += 2) {
      const _ = Math.PI * u / this.size;
      l[u] = Math.cos(_), l[u + 1] = -Math.sin(_);
    }
    this.table = l;
    for (var d = 0, h = 1; this.size > h; h <<= 1)
      d++;
    this._width = d % 2 === 0 ? d - 1 : d, this._bitrev = new Array(1 << this._width);
    for (var v = 0; v < this._bitrev.length; v++) {
      this._bitrev[v] = 0;
      for (var y = 0; y < this._width; y += 2) {
        var j = this._width - y - 2;
        this._bitrev[v] |= (v >>> y & 3) << j;
      }
    }
    this._out = null, this._data = null, this._inv = 0;
  }
  return xa = o, o.prototype.fromComplexArray = function(l, u) {
    for (var d = u || new Array(l.length >>> 1), h = 0; h < l.length; h += 2)
      d[h >>> 1] = l[h];
    return d;
  }, o.prototype.createComplexArray = function() {
    const l = new Array(this._csize);
    for (var u = 0; u < l.length; u++)
      l[u] = 0;
    return l;
  }, o.prototype.toComplexArray = function(l, u) {
    for (var d = u || this.createComplexArray(), h = 0; h < d.length; h += 2)
      d[h] = l[h >>> 1], d[h + 1] = 0;
    return d;
  }, o.prototype.completeSpectrum = function(l) {
    for (var u = this._csize, d = u >>> 1, h = 2; h < d; h += 2)
      l[u - h] = l[h], l[u - h + 1] = -l[h + 1];
  }, o.prototype.transform = function(l, u) {
    if (l === u)
      throw new Error("Input and output buffers must be different");
    this._out = l, this._data = u, this._inv = 0, this._transform4(), this._out = null, this._data = null;
  }, o.prototype.realTransform = function(l, u) {
    if (l === u)
      throw new Error("Input and output buffers must be different");
    this._out = l, this._data = u, this._inv = 0, this._realTransform4(), this._out = null, this._data = null;
  }, o.prototype.inverseTransform = function(l, u) {
    if (l === u)
      throw new Error("Input and output buffers must be different");
    this._out = l, this._data = u, this._inv = 1, this._transform4();
    for (var d = 0; d < l.length; d++)
      l[d] /= this.size;
    this._out = null, this._data = null;
  }, o.prototype._transform4 = function() {
    var l = this._out, u = this._csize, d = this._width, h = 1 << d, v = u / h << 1, y, j, _ = this._bitrev;
    if (v === 4)
      for (y = 0, j = 0; y < u; y += v, j++) {
        const A = _[j];
        this._singleTransform2(y, A, h);
      }
    else
      for (y = 0, j = 0; y < u; y += v, j++) {
        const A = _[j];
        this._singleTransform4(y, A, h);
      }
    var N = this._inv ? -1 : 1, S = this.table;
    for (h >>= 2; h >= 2; h >>= 2) {
      v = u / h << 1;
      var M = v >>> 2;
      for (y = 0; y < u; y += v)
        for (var L = y + M, F = y, P = 0; F < L; F += 2, P += h) {
          const A = F, Q = A + M, G = Q + M, Z = G + M, te = l[A], fe = l[A + 1], Ee = l[Q], de = l[Q + 1], U = l[G], se = l[G + 1], xe = l[Z], Me = l[Z + 1], De = te, ze = fe, Ae = S[P], We = N * S[P + 1], Be = Ee * Ae - de * We, Te = Ee * We + de * Ae, z = S[2 * P], b = N * S[2 * P + 1], D = U * z - se * b, k = U * b + se * z, T = S[3 * P], ae = N * S[3 * P + 1], ce = xe * T - Me * ae, ye = xe * ae + Me * T, ge = De + D, _e = ze + k, we = De - D, Re = ze - k, O = Be + ce, J = Te + ye, B = N * (Be - ce), ee = N * (Te - ye), ue = ge + O, q = _e + J, ie = ge - O, X = _e - J, he = we + ee, pe = Re - B, Se = we - ee, Pe = Re + B;
          l[A] = ue, l[A + 1] = q, l[Q] = he, l[Q + 1] = pe, l[G] = ie, l[G + 1] = X, l[Z] = Se, l[Z + 1] = Pe;
        }
    }
  }, o.prototype._singleTransform2 = function(l, u, d) {
    const h = this._out, v = this._data, y = v[u], j = v[u + 1], _ = v[u + d], N = v[u + d + 1], S = y + _, M = j + N, L = y - _, F = j - N;
    h[l] = S, h[l + 1] = M, h[l + 2] = L, h[l + 3] = F;
  }, o.prototype._singleTransform4 = function(l, u, d) {
    const h = this._out, v = this._data, y = this._inv ? -1 : 1, j = d * 2, _ = d * 3, N = v[u], S = v[u + 1], M = v[u + d], L = v[u + d + 1], F = v[u + j], P = v[u + j + 1], A = v[u + _], Q = v[u + _ + 1], G = N + F, Z = S + P, te = N - F, fe = S - P, Ee = M + A, de = L + Q, U = y * (M - A), se = y * (L - Q), xe = G + Ee, Me = Z + de, De = te + se, ze = fe - U, Ae = G - Ee, We = Z - de, Be = te - se, Te = fe + U;
    h[l] = xe, h[l + 1] = Me, h[l + 2] = De, h[l + 3] = ze, h[l + 4] = Ae, h[l + 5] = We, h[l + 6] = Be, h[l + 7] = Te;
  }, o.prototype._realTransform4 = function() {
    var l = this._out, u = this._csize, d = this._width, h = 1 << d, v = u / h << 1, y, j, _ = this._bitrev;
    if (v === 4)
      for (y = 0, j = 0; y < u; y += v, j++) {
        const me = _[j];
        this._singleRealTransform2(y, me >>> 1, h >>> 1);
      }
    else
      for (y = 0, j = 0; y < u; y += v, j++) {
        const me = _[j];
        this._singleRealTransform4(y, me >>> 1, h >>> 1);
      }
    var N = this._inv ? -1 : 1, S = this.table;
    for (h >>= 2; h >= 2; h >>= 2) {
      v = u / h << 1;
      var M = v >>> 1, L = M >>> 1, F = L >>> 1;
      for (y = 0; y < u; y += v)
        for (var P = 0, A = 0; P <= F; P += 2, A += h) {
          var Q = y + P, G = Q + L, Z = G + L, te = Z + L, fe = l[Q], Ee = l[Q + 1], de = l[G], U = l[G + 1], se = l[Z], xe = l[Z + 1], Me = l[te], De = l[te + 1], ze = fe, Ae = Ee, We = S[A], Be = N * S[A + 1], Te = de * We - U * Be, z = de * Be + U * We, b = S[2 * A], D = N * S[2 * A + 1], k = se * b - xe * D, T = se * D + xe * b, ae = S[3 * A], ce = N * S[3 * A + 1], ye = Me * ae - De * ce, ge = Me * ce + De * ae, _e = ze + k, we = Ae + T, Re = ze - k, O = Ae - T, J = Te + ye, B = z + ge, ee = N * (Te - ye), ue = N * (z - ge), q = _e + J, ie = we + B, X = Re + ue, he = O - ee;
          if (l[Q] = q, l[Q + 1] = ie, l[G] = X, l[G + 1] = he, P === 0) {
            var pe = _e - J, Se = we - B;
            l[Z] = pe, l[Z + 1] = Se;
            continue;
          }
          if (P !== F) {
            var Pe = Re, Ne = -O, Ue = _e, rt = -we, Zt = -N * ue, vt = -N * ee, Ie = -N * B, Ye = -N * J, Ct = Pe + Zt, Kt = Ne + vt, en = Ue + Ye, Fe = rt - Ie, $e = y + L - P, ve = y + M - P;
            l[$e] = Ct, l[$e + 1] = Kt, l[ve] = en, l[ve + 1] = Fe;
          }
        }
    }
  }, o.prototype._singleRealTransform2 = function(l, u, d) {
    const h = this._out, v = this._data, y = v[u], j = v[u + d], _ = y + j, N = y - j;
    h[l] = _, h[l + 1] = 0, h[l + 2] = N, h[l + 3] = 0;
  }, o.prototype._singleRealTransform4 = function(l, u, d) {
    const h = this._out, v = this._data, y = this._inv ? -1 : 1, j = d * 2, _ = d * 3, N = v[u], S = v[u + d], M = v[u + j], L = v[u + _], F = N + M, P = N - M, A = S + L, Q = y * (S - L), G = F + A, Z = P, te = -Q, fe = F - A, Ee = P, de = Q;
    h[l] = G, h[l + 1] = 0, h[l + 2] = Z, h[l + 3] = te, h[l + 4] = fe, h[l + 5] = 0, h[l + 6] = Ee, h[l + 7] = de;
  }, xa;
}
var wh = xh();
const Sh = /* @__PURE__ */ bd(wh);
class ci {
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
    return new ci(
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
    return new ci(
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
    return new ci(i, (l) => Array(l));
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
    this._inputLength = i, this._fft = new Sh(_h(2 * i)), this._bufferSupplier = l, this._paddedInputBuffer = this._bufferSupplier(this._fft.size), this._transformBuffer = this._bufferSupplier(2 * this._fft.size), this._inverseBuffer = this._bufferSupplier(2 * this._fft.size);
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
function jh(o) {
  const i = [];
  let l = !1, u = -1 / 0, d = -1;
  for (let h = 1; h < o.length - 1; h++)
    o[h - 1] <= 0 && o[h] > 0 ? (l = !0, d = h, u = o[h]) : o[h - 1] > 0 && o[h] <= 0 ? (l = !1, d !== -1 && i.push(d)) : l && o[h] > u && (u = o[h], d = h);
  return i;
}
function Eh(o, i) {
  const [l, u, d] = [o - 1, o, o + 1], [h, v, y] = [i[l], i[u], i[d]], j = h / 2 - v + y / 2, _ = -(h / 2) * (u + d) + v * (l + d) - y / 2 * (l + u), N = h * u * d / 2 - v * l * d + y * l * u / 2, S = -_ / (2 * j), M = j * S * S + _ * S + N;
  return [S, M];
}
class fi {
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
    return new fi(i, (l) => new Float32Array(l));
  }
  /**
   * A helper method to create an {@link PitchDetector} using {@link Float64Array} buffers.
   *
   * @param inputLength {number} the input array length to support
   * @returns {PitchDetector<Float64Array>}
   */
  static forFloat64Array(i) {
    return new fi(i, (l) => new Float64Array(l));
  }
  /**
   * A helper method to create an {@link PitchDetector} using `number[]` buffers.
   *
   * @param inputLength {number} the input array length to support
   * @returns {PitchDetector<number[]>}
   */
  static forNumberArray(i) {
    return new fi(i, (l) => Array(l));
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
    this._autocorrelator = new ci(i, l), this._nsdfBuffer = l(i);
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
    const u = jh(this._nsdfBuffer);
    if (u.length === 0)
      return [0, 0];
    const d = Math.max(...u.map((j) => this._nsdfBuffer[j])), h = u.find(
      (j) => this._nsdfBuffer[j] >= this._clarityThreshold * d
    ), [v, y] = Eh(
      // @ts-expect-error resultIndex is guaranteed to be defined
      h,
      this._nsdfBuffer
    );
    return [l / v, Math.min(y, 1)];
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
function _h(o) {
  return o--, o |= o >> 1, o |= o >> 2, o |= o >> 4, o |= o >> 8, o |= o >> 16, o++, o;
}
function Nh(o) {
  const i = o * 0.17;
  let l = 2048;
  for (; l < i && l < 32768; ) l *= 2;
  return l;
}
const Th = 0.05, Mh = 1.5;
class Ch {
  constructor(i, l = {}) {
    this.mic = i, this.opts = l;
    const u = i.context, d = Nh(u.sampleRate), h = Math.max(1, Math.min(2, i.channelCount ?? 1));
    h > 1 && typeof u.createChannelSplitter == "function" && (this.splitter = u.createChannelSplitter(h), i.source.connect(this.splitter));
    for (let v = 0; v < (this.splitter ? h : 1); v++) {
      const y = u.createAnalyser();
      y.fftSize = d, y.smoothingTimeConstant = 0, this.splitter ? this.splitter.connect(y, v) : i.source.connect(y), this.analysers.push(y), this.buffers.push(new Float32Array(new ArrayBuffer(d * 4)));
    }
    this.shortLength = Math.min(d, Math.max(256, Math.round(u.sampleRate * Th))), this.detector = fi.forFloat32Array(d), this.detector.minVolumeDecibels = -60;
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
  gate = new Rh();
  onset = new $c();
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
      minFreq: v = 70,
      maxFreq: y = 1450,
      onFrame: j,
      onStableNote: _
    } = this.opts, N = this.analysers.map((de, U) => (de.getFloatTimeDomainData(this.buffers[U]), jc(this.buffers[U], this.buffers[U].length - this.shortLength))), S = N.indexOf(Math.max(...N));
    S !== this.channel && N[S] > (N[this.channel] ?? 0) * Mh && (this.channel = S);
    const M = this.buffers[this.channel], L = N[this.channel], F = Ph(M, M.length - this.shortLength), P = { rms: L, peak: F, channel: this.channel, levels: N }, A = L < u, Q = this.onset.feed(L, i, u);
    if (A && jc(M, 0) < u) {
      this.gate.feed(null, i, d, !0, !1), j?.({ ...P, status: "silent" });
      return;
    }
    const [G, Z] = this.detector.findPitch(M, this.mic.context.sampleRate);
    if (!isFinite(G) || Z < l) {
      this.gate.feed(null, i, d, A, Q), j?.({ ...P, status: A ? "silent" : "unclear", clarity: isFinite(Z) ? Z : 0 });
      return;
    }
    if (G < v || G > y) {
      this.gate.feed(null, i, d, A, Q), j?.({ ...P, status: "out-of-range", frequency: G, clarity: Z });
      return;
    }
    const { midi: te, cents: fe } = uh(G);
    if (Math.abs(fe) > h) {
      this.gate.feed(null, i, d, A, Q), j?.({ ...P, status: "off-pitch", frequency: G, clarity: Z, midi: te, cents: fe });
      return;
    }
    j?.({ ...P, status: "pitch", frequency: G, clarity: Z, midi: te, cents: fe });
    const Ee = this.gate.feed(te, i, d, A, Q);
    Ee !== null && _?.({ midi: te, frequency: G, cents: fe, clarity: Z, timestamp: i, heldMs: Ee.heldMs });
  }
}
class Rh {
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
    const v = l - this.current.since;
    return v < u ? null : (this.armed = !1, this.current = null, { midi: i, heldMs: v });
  }
}
class $c {
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
function jc(o, i = 0) {
  const l = Math.max(0, i);
  let u = 0;
  for (let d = l; d < o.length; d++) u += o[d] * o[d];
  return Math.sqrt(u / Math.max(1, o.length - l));
}
function Ph(o, i = 0) {
  let l = 0;
  for (let u = Math.max(0, i); u < o.length; u++) {
    const d = Math.abs(o[u]);
    d > l && (l = d);
  }
  return l;
}
const Es = (o) => o > 0 ? Math.max(-90, 20 * Math.log10(o)) : -90;
let kr;
function zc() {
  return (!kr || kr.state === "closed") && (kr = new AudioContext()), kr;
}
function Lh() {
  const o = kr;
  kr = void 0, o?.close().catch(() => {
  });
}
const Oc = (o) => o instanceof Error ? o.name : "";
function Ah(o) {
  const i = Oc(o);
  return ["NotAllowedError", "SecurityError", "PermissionDeniedError"].includes(i) ? "Mikrofonilupa evättiin. Salli mikrofoni selaimen osoiterivin lukko- tai mikrofonikuvakkeesta ja yritä uudelleen. Voit myös vastata otelaudalta." : i === "NotFoundError" || i === "OverconstrainedError" ? "Äänituloa ei löydy. Kytke mikrofoni tai äänikortti, valitse se Mikrofonin asetuksista ja yritä uudelleen." : i === "NotReadableError" || i === "AbortError" ? "Äänituloa ei voitu avata. Sulje muut laitetta käyttävät ohjelmat, irrota ja kytke äänikortti uudelleen ja yritä sitten uudestaan." : i === "MicSetupError" ? o.message : "Mikrofonia ei voitu käynnistää. Lataa sivu uudelleen ja yritä vielä kerran.";
}
class Ih {
  constructor(i = (l) => gh(l, zc)) {
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
    let h, v = !1;
    try {
      h = await this.opener(i || void 0);
    } catch (y) {
      if (!i || d !== this.generation || !["OverconstrainedError", "NotFoundError"].includes(Oc(y))) throw y;
      h = await this.opener(void 0), v = !0;
    }
    if (d !== this.generation)
      return h.stop(), null;
    this.mic = h;
    try {
      this.loop = new Ch(h, { ...l });
      const y = () => {
        this.mic === h && (this.stop(), u());
      }, j = this.listeners = new AbortController();
      return h.stream.getTracks().forEach((_) => _.addEventListener("ended", y, { once: !0, signal: j.signal })), h.context.addEventListener?.("statechange", () => {
        h.context.state !== "running" && y();
      }, { signal: j.signal }), this.loop.start(), { label: h.label, deviceId: h.deviceId, channels: h.channelCount, sampleRate: h.context.sampleRate, fallback: v };
    } catch (y) {
      throw this.stop(), y;
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
function Fh(o) {
  const i = [...o].sort((u, d) => u - d), l = i[Math.min(i.length - 1, Math.floor(i.length * 0.95))] ?? 2e-3;
  return { threshold: Math.min(0.15, Math.max(3e-3, l * 3)), noise: l, loud: l > 0.04 };
}
async function wa(o) {
  const i = () => o.state === "running";
  if (i()) return;
  let l;
  try {
    await Promise.race([
      o.resume(),
      new Promise((u, d) => {
        l = setTimeout(() => d(new Error("reference-audio-resume-timeout")), 4e3);
      })
    ]);
  } finally {
    l !== void 0 && clearTimeout(l);
  }
  if (!i()) throw new Error("reference-audio-not-running");
}
function Dc(o) {
  const i = o instanceof Error ? o.message : "";
  return i === "reference-audio-resume-timeout" || i === "reference-audio-not-running" ? "Selaimen äänimoottori ei käynnistynyt. Tarkista, ettei Safari-välilehti ole mykistetty, ja kokeile mallisoittoa uudelleen. Tarvittaessa lataa sivu uudelleen." : o instanceof Error && o.name === "NotAllowedError" ? "Safari esti äänentoiston käynnistämisen. Käynnistä soitto uudelleen painikkeesta ja tarkista sivuston ääniasetukset." : "Mallisoitto ei käynnistynyt. Tarkista selaimen ja tietokoneen ääniasetukset ja yritä uudelleen.";
}
class Ec {
  constructor(i = zc) {
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
    if (await wa(d), u !== this.token) return !1;
    const h = d.createGain();
    h.connect(d.destination), this.master = h;
    const v = Array.from({ length: 12 }, (_, N) => 1 / (N + 1) ** 1.3), y = d.createPeriodicWave?.(new Float32Array([0, ...v.map(() => 0)]), new Float32Array([0, ...v]));
    return i.forEach((_, N) => {
      const S = d.createOscillator(), M = d.createGain(), L = d.currentTime + 0.05 + N * 0.8;
      y ? S.setPeriodicWave(y) : S.type = "triangle", S.frequency.value = ka(_), M.gain.setValueAtTime(0, L), M.gain.linearRampToValueAtTime(0.22, L + 0.012), M.gain.exponentialRampToValueAtTime(1e-3, L + 0.7), S.connect(M), M.connect(h), S.start(L), S.stop(L + 0.72), l && this.noteTimers.push(setTimeout(() => {
        u === this.token && l(N);
      }, 50 + N * 800));
    }), !await new Promise((_) => {
      this.settle = _, this.timer = setTimeout(() => _(!0), i.length * 800 + 350);
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
    const h = this.token, v = this.provide();
    if (await wa(v), h !== this.token) return !1;
    const y = 60 / Math.max(40, Math.min(140, l)), j = v.createGain();
    j.connect(v.destination), this.master = j;
    const _ = Array.from({ length: 12 }, (F, P) => 1 / (P + 1) ** 1.3), N = v.createPeriodicWave?.(
      new Float32Array([0, ..._.map(() => 0)]),
      new Float32Array([0, ..._])
    ), S = v.currentTime + 0.05;
    let M = 0;
    return i.forEach((F, P) => {
      if (!Number.isFinite(F.beat) || F.beat < 0 || !Number.isFinite(F.duration) || F.duration <= 0)
        throw new Error("Virheellinen melodian aika-arvo.");
      const A = S + F.beat * y, Q = F.duration * y, G = A + Math.max(0.08, Q * 0.94), Z = v.createOscillator(), te = v.createGain();
      N ? Z.setPeriodicWave(N) : Z.type = "triangle", Z.frequency.value = ka(F.midi), te.gain.setValueAtTime(0, A), te.gain.linearRampToValueAtTime(0.22, A + 0.012), te.gain.exponentialRampToValueAtTime(1e-3, G - 0.01), Z.connect(te), te.connect(j), Z.start(A), Z.stop(G), u && this.noteTimers.push(setTimeout(() => {
        h === this.token && u(P);
      }, 50 + F.beat * y * 1e3));
      const fe = i[P + 1]?.beat ?? 1 / 0;
      d && fe > F.beat + F.duration + 0.02 && this.noteTimers.push(setTimeout(() => {
        h === this.token && d();
      }, 50 + F.beat * y * 1e3 + Q * 1e3)), M = Math.max(M, F.beat + F.duration);
    }), !await new Promise((F) => {
      this.settle = F, this.timer = setTimeout(() => F(!0), 50 + M * y * 1e3 + 150);
    }) || h !== this.token ? !1 : (this.settle = void 0, this.noteTimers.forEach(clearTimeout), this.noteTimers = [], j.disconnect(), this.master = void 0, !0);
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
    if (await wa(h), d !== this.token) return !1;
    const v = h.createGain();
    v.connect(h.destination), this.master = v;
    const y = Array.from({ length: 12 }, (P, A) => 1 / (A + 1) ** 1.3), j = h.createPeriodicWave?.(new Float32Array([0, ...y.map(() => 0)]), new Float32Array([0, ...y]));
    let _ = 60 / Math.max(40, Math.min(140, u));
    this.adjustLoopTempo = (P) => {
      d === this.token && Number.isFinite(P) && (_ = 60 / Math.max(40, Math.min(140, P)));
    };
    const N = 1.6;
    let S = h.currentTime + 0.05, M = 0;
    const L = [], F = () => {
      if (d === this.token) {
        if (S < h.currentTime - 0.02) {
          const P = Math.ceil((h.currentTime - S) / _);
          S += P * _, M = (M + P) % i.length, L.length = 0;
        }
        for (; S < h.currentTime + N; ) {
          const P = i[M], A = M, Q = S, G = h.createOscillator(), Z = h.createGain();
          j ? G.setPeriodicWave(j) : G.type = "triangle", G.frequency.value = ka(P), Z.gain.setValueAtTime(0, Q), Z.gain.linearRampToValueAtTime(0.22, Q + 0.012), Z.gain.exponentialRampToValueAtTime(1e-3, Q + _ * 0.975), G.connect(Z), Z.connect(v), G.start(Q), G.stop(Q + _ * 0.985), L.push({ at: Q, index: A }), S += _, M = (M + 1) % i.length;
        }
        for (; L.length && L[0].at <= h.currentTime + 0.01; ) {
          const P = L.shift();
          l?.(P.index);
        }
      }
    };
    return F(), this.loopTick = setInterval(F, 25), new Promise((P) => {
      this.settle = P;
    });
  }
}
const $h = /* @__PURE__ */ new Set([12, 19, 24, 28, 31, 36]), zh = 0.25;
class _c {
  constructor(i) {
    this.opts = i;
  }
  opts;
  onset = new $c();
  armed = !1;
  armedBy = null;
  quietSince = null;
  current = null;
  /** Edellinen hyväksytty sävel ja sen huipputaso. Nollaus (reset/rearm) poistaa ne. */
  previous = null;
  /** Suurin taso nykyisen sävelen alusta (viritys tai uuden ehdokkaan alku) lähtien: näppäyksen huippu. */
  notePeak = 0;
  last = null;
  count = 0;
  reason = null;
  setMinRms(i) {
    this.opts = { ...this.opts, minRms: i };
  }
  get minRms() {
    return this.opts.minRms;
  }
  /**
   * Uusi kysymys tai jatko tauolta: soimaan jäänyt ääni ei saa vastata. Myös sävelvaihdosta
   * virittyminen estetään, kunnes seuraava näppäily on hyväksytty alukkeen tai hiljaisuuden kautta
   * (esim. mallisoiton kaiutinhäntä on eri sävel kuin pelaajan edellinen).
   */
  rearm() {
    this.armed = !1, this.armedBy = null, this.quietSince = null, this.current = null, this.previous = null;
  }
  reset() {
    this.rearm(), this.onset.reset(), this.reason = null;
  }
  state() {
    return {
      armed: this.armed,
      armedBy: this.armedBy,
      reason: this.reason,
      last: this.last,
      count: this.count,
      candidate: this.current ? { midi: this.current.midi, heldMs: Math.max(0, this.current.seen - this.current.since) } : null
    };
  }
  feed(i, l) {
    const { minRms: u, stabilityMs: d, releaseMs: h = 120, gapMs: v = 80 } = this.opts, y = i.rms < u, j = this.onset.feed(i.rms, l, u);
    if (y ? (this.quietSince ??= l, l - this.quietSince >= h && this.arm("quiet")) : (this.quietSince = null, j && this.arm("onset")), this.notePeak = Math.max(this.notePeak, i.rms), i.status !== "pitch" || i.midi === void 0)
      return this.current && l - this.current.seen > v && (this.current = null), this.reason = i.status === "pitch" ? "unclear" : i.status, null;
    const _ = i.midi;
    let N = this.armedBy;
    if (!this.armed) {
      const L = this.previous;
      if (!L || _ === L.midi)
        return this.current = null, this.reason = "waiting-new-pluck", null;
      if ($h.has(Math.abs(_ - L.midi)))
        return this.current = null, this.reason = "harmonic", null;
      if (i.rms < L.peak * zh)
        return this.current = null, this.reason = "too-quiet-for-change", null;
      N = "pitch-change";
    }
    (!this.current || this.current.midi !== _) && (this.current = { midi: _, since: l, seen: l, armedBy: N }, N === "pitch-change" && (this.notePeak = i.rms)), this.current.seen = l;
    const S = l - this.current.since;
    if (S < d)
      return this.reason = "stabilizing", null;
    const M = this.current.armedBy;
    return this.armed = !1, this.armedBy = null, this.current = null, this.previous = { midi: _, peak: this.notePeak }, this.last = { midi: _, at: l, armedBy: M }, this.count++, this.reason = null, { midi: _, frequency: i.frequency ?? 0, cents: i.cents ?? 0, clarity: i.clarity ?? 0, timestamp: l, heldMs: S, armedBy: M };
  }
  arm(i) {
    this.armed = !0, this.armedBy = i, this.current = null, this.notePeak = 0;
  }
}
const Qn = { minRms: 0.01, minClarity: 0.94, stabilityMs: 240, centsTolerance: 35 };
function Oh(o, i, l) {
  return (u) => {
    const d = i.feed(u, l());
    o.onFrame(u, i.state()), d && o.onStable(d);
  };
}
class Bc {
  mic = new Ih();
  player = new Ec();
  /** Oma soitin painalluksille, jotta nopea uusi painallus ei keskeytä mallia eikä päinvastoin. */
  strings = new Ec();
  minRms = Qn.minRms;
  detector = new _c({ minRms: Qn.minRms, stabilityMs: Qn.stabilityMs });
  async openMic(i, l) {
    this.detector = new _c({ minRms: this.minRms, stabilityMs: Qn.stabilityMs });
    const u = Oh(i, this.detector, () => performance.now());
    return this.mic.start(l, { ...Qn, minRms: this.minRms, onFrame: u }, i.onEnded);
  }
  async listDevices() {
    return (await kh()).filter((l) => l.deviceId !== "default" && l.deviceId !== "communications").map((l, u) => ({ id: l.deviceId, label: l.label || `Äänitulo ${u + 1}` }));
  }
  setMinRms(i) {
    this.minRms = i, this.mic.setOptions({ minRms: i }), this.detector.setMinRms(i);
  }
  pauseAnalysis() {
    this.mic.pause(), this.detector.reset();
  }
  resumeAnalysis() {
    this.mic.resume(), this.detector.reset();
  }
  rearm() {
    this.mic.rearm(), this.detector.rearm();
  }
  closeMic() {
    this.mic.stop(), this.detector.reset();
  }
  playModel(i, l) {
    return this.player.play(i, l);
  }
  stopModel() {
    this.player.stop(), this.strings.stop();
  }
  stopReference() {
    this.player.stop();
  }
  // Uusi painallus katkaisee edellisen sävelen: sama sävel kahdesti kuuluu kahtena näppäyksenä.
  pluck(i) {
    this.strings.play([i]).catch(() => {
    });
  }
}
const ke = (o) => hh(o, !1, !0), Dh = [64, 59, 55, 50, 45, 40], Vc = [0, 1, 2, 3, 4, 5], Bh = 0, Vh = 5, gr = {
  guided: { autoplay: !0, showNotes: !0, memoryHints: !0, label: "Opastettu" },
  memory: { autoplay: !0, showNotes: !1, memoryHints: !0, label: "Muistista" },
  challenge: { autoplay: !0, showNotes: !1, memoryHints: !1, label: "Haaste" }
}, Wn = (o, i, l, u) => ({
  id: o,
  title: i,
  tip: u,
  spots: l.map(([d, h]) => ({ string: d, fret: h })),
  midi: l.map(([d, h]) => Dh[d] + h)
}), Kn = (o, i) => i.map((l) => [o, l]), oi = 1, Ss = 2, Ts = 59, ui = Wn("opastus", "Opastus: kaksi säveltä", Kn(oi, [0, 1]), "Vapaa B-kieli ja sitten 1. nauha."), Ve = [
  { number: 1, name: "Kotitreeni 1", title: "B-kieli", strings: [oi], instruction: "Soita riffi B-kieleltä.", guidance: "guided", riffs: [
    // Sävelet B3, C4 ja D4: vapaa kieli, 1. ja 3. nauha.
    Wn("b-kaari", "Ensimmäinen kaiku", Kn(oi, [0, 1, 3, 1]), "Vapaa kieli, 1., 3. ja takaisin 1. nauhaan."),
    Wn("b-vaihto", "Edestakaisin", Kn(oi, [1, 0, 1, 3]), "1. nauha, vapaa kieli, 1. ja 3. nauha."),
    Wn("b-takaisin", "Kaari takaisin", Kn(oi, [0, 3, 1, 0]), "Vapaa kieli, 3. ja 1. nauha ja taas vapaa kieli.")
  ] },
  { number: 2, name: "Kotitreeni 2", title: "G-kieli", strings: [Ss], instruction: "Soita riffi G-kieleltä.", guidance: "guided", riffs: [
    // Sävelet G3, A3 ja B3: vapaa kieli, 2. ja 4. nauha. Vaihtelevampi: toisto ja hyppy.
    Wn("g-nousu", "G-kielen kaari", Kn(Ss, [0, 2, 4, 2]), "Vapaa kieli, 2., 4. ja takaisin 2. nauhaan."),
    Wn("g-toisto", "Kaksi samaa", Kn(Ss, [2, 2, 0, 4]), "Kaksi erillistä näppäystä 2. nauhalla, sitten vapaa kieli ja 4. nauha. Vaimenna kieli hetkeksi samojen sävelten välissä."),
    Wn("g-hyppy", "Hyppy alas", Kn(Ss, [4, 0, 2, 0]), "4. nauha, vapaa kieli, 2. nauha ja taas vapaa kieli.")
  ] }
], Wt = Ve.flatMap((o) => o.riffs), Uc = (o) => Ve.find((i) => i.riffs.some((l) => l.id === o));
function Hc(o) {
  const i = Uc(o), l = i?.riffs.find((u) => u.id === o);
  return i && l ? { level: i, riff: l, number: i.riffs.indexOf(l) + 1 } : void 0;
}
const Ma = (o) => `${Ns[o.string]}-kieli, ${o.fret === 0 ? "vapaa kieli" : `${o.fret}. nauha`}`;
class ja {
  constructor(i, l, u) {
    if (this.round = l, this.input = u, !i.length || i.some((d) => !Number.isInteger(d))) throw new Error("Säveljonossa pitää olla vähintään yksi kokonaislukuinen MIDI-sävel.");
    this.expected = [...i], this.slots = this.expected.map(() => "pending");
  }
  round;
  input;
  position = 0;
  hint = !1;
  wrongs = 0;
  octaves = 0;
  slots;
  expected;
  get index() {
    return this.position;
  }
  get complete() {
    return this.position >= this.expected.length;
  }
  get hintUsed() {
    return this.hint;
  }
  /** Väärät sävelet tällä yrityksellä (myös väärät oktaavit). */
  get wrongCount() {
    return this.wrongs;
  }
  /** Niistä väärässä oktaavissa soitetut. */
  get octaveCount() {
    return this.octaves;
  }
  /** Seuraavaksi odotettu MIDI-korkeus, tai null kun jono on valmis. */
  get next() {
    return this.complete ? null : this.expected[this.position];
  }
  /** Etenemispallukoiden tilat (kopio). */
  get marks() {
    return [...this.slots];
  }
  /** Valmis ja jokainen kohta vihreä. */
  get flawless() {
    return this.complete && this.slots.every((i) => i === "green");
  }
  useHint() {
    this.hint = !0;
  }
  feed(i) {
    if (i.round !== this.round) return { type: "ignored", reason: "stale-round" };
    if (i.input !== this.input) return { type: "ignored", reason: "wrong-input" };
    if (this.complete) return { type: "ignored", reason: "complete" };
    const l = this.position, u = this.expected[l], d = i.midi;
    if (d === u) {
      const v = this.slots[l] === "red" ? "yellow" : "green";
      return this.slots[l] = v, this.position++, { type: "accepted", index: l, midi: d, complete: this.complete, mark: v };
    }
    const h = ((d - u) % 12 + 12) % 12 === 0;
    return this.wrongs++, h && this.octaves++, this.slots[l] = "red", { type: "wrong", index: l, expected: u, played: d, octave: h };
  }
}
const Uh = 3;
class Hh {
  constructor(i, l) {
    this.input = l, this.expected = [...i], this.known = this.expected.map(() => !1);
  }
  input;
  failed = 0;
  known;
  current = null;
  expected;
  get failedAttempts() {
    return this.failed;
  }
  get memoryActive() {
    return this.failed >= Uh;
  }
  /** Paikkakohtaiset muistivihjeet: MIDI-korkeus näytettäväksi tai null. Tyhjä ennen kolmatta epäonnistumista. */
  get memory() {
    return this.expected.map((i, l) => this.memoryActive && this.known[l] ? i : null);
  }
  get attempt() {
    return this.current;
  }
  /** Uusi yritys: edellisen yrityksen vihreät paikat muistetaan (myös kesken jääneestä). */
  start(i) {
    return this.absorb(), this.current = new ja(this.expected, i, this.input), this.current;
  }
  /** Loppuun soitettu yritys: palauttaa läpäisyn. Epäonnistunut kasvattaa laskuria kerran. */
  finish() {
    const i = this.current;
    return i?.complete ? (this.absorb(), this.current = null, i.flawless || this.failed++, i.flawless) : !1;
  }
  absorb() {
    this.current?.marks.forEach((i, l) => {
      i === "green" && (this.known[l] = !0);
    });
  }
}
class Wh {
  constructor(i = 250, l = 150, u = 1500) {
    this.minMs = i, this.quietMs = l, this.maxMs = u;
  }
  minMs;
  quietMs;
  maxMs;
  startedAt = null;
  quietSince = null;
  start(i) {
    this.startedAt = i, this.quietSince = null;
  }
  get active() {
    return this.startedAt !== null;
  }
  /** Palauttaa 'ready', kun kuuntelun saa aloittaa, ja syyn: hiljaisuus tai aikaraja. */
  feed(i, l) {
    if (this.startedAt === null) return "settling";
    i ? this.quietSince ??= l : this.quietSince = null;
    const u = l - this.startedAt;
    return u >= this.minMs && this.quietSince !== null && l - this.quietSince >= this.quietMs ? (this.startedAt = null, "ready-quiet") : u >= this.maxMs ? (this.startedAt = null, "ready-timeout") : "settling";
  }
  cancel() {
    this.startedAt = null, this.quietSince = null;
  }
}
const Sa = ["practice", "success", "retry"], js = (o) => o.midi.map(() => "pending"), ft = "board";
class Kh {
  constructor(i, l, u = () => performance.now()) {
    this.audio = i, this.store = l, this.clock = u;
    const d = this.position();
    this.state = {
      phase: "home",
      ...d,
      guidance: d.level.guidance,
      index: 0,
      memory: [],
      failedAttempts: 0,
      playing: null,
      modelPlaying: !1,
      notesShown: !1,
      hint: !1,
      feedback: null,
      audioError: "",
      achievement: null,
      ...this.progressPatch()
    };
  }
  audio;
  store;
  clock;
  state;
  listeners = /* @__PURE__ */ new Set();
  modelOp = 0;
  round = 0;
  series = null;
  seriesRiff = null;
  takeStart = null;
  /** Mallin kuuntelut pelaajan pyynnöstä edellisen oton jälkeen (kirjataan seuraavan oton tulokseen). */
  listens = 0;
  takeListens = 0;
  /** Tallennettu kohta: opastus, kotitreenin seuraava riffi tai läpäisty kotitreeni. */
  position() {
    const i = this.store.level(ft);
    if (!this.store.data.tutorialDone) return { riff: ui, tutorial: !0, level: Ve[0], riffNumber: 1, marks: js(ui) };
    const l = this.store.currentRiff(ft) ?? i.riffs[i.riffs.length - 1];
    return { riff: l, tutorial: !1, level: i, riffNumber: i.riffs.indexOf(l) + 1, marks: js(l) };
  }
  progressPatch() {
    return { completedLevels: this.store.completedLevels(ft), unlockedLevels: this.store.unlockedLevels(ft), passedInRun: [...this.store.run(ft).passed] };
  }
  // ---- tilaus (React: useSyncExternalStore) ----
  subscribe = (i) => (this.listeners.add(i), () => {
    this.listeners.delete(i);
  });
  getState = () => this.state;
  set(i) {
    this.state = { ...this.state, ...i }, this.listeners.forEach((l) => l());
  }
  /** Yhden riffin saavutukset virtuaalikitaralla. */
  record(i) {
    return Wc(this.store, i);
  }
  // ---- aloitus ja kotitreenit ----
  /** Pelaa: opastus, kesken oleva kotitreeni tai sen onnittelunäkymä. Malli soi heti. */
  play() {
    this.beginRiff();
  }
  /** Pelin aloitusnäkymä: kotitreenit ja eteneminen. Kaikki pysähtyy; edistyminen on jo tallennettu. */
  home() {
    this.silence(), this.series = null;
    const i = this.position();
    this.set({
      phase: "home",
      ...i,
      guidance: i.level.guidance,
      feedback: null,
      audioError: "",
      achievement: null,
      index: 0,
      hint: !1,
      notesShown: !1,
      memory: [],
      failedAttempts: 0,
      ...this.progressPatch()
    });
  }
  /**
   * Valitse kotitreeni: läpäisty, nykyinen tai seuraava avattu. Nykyinen jatkuu siitä, mihin jäätiin;
   * muu kotitreeni (tai restart) alkaa ensimmäisestä riffistä. Läpäistyt kotitreenit säilyvät aina.
   */
  chooseLevel(i, l = !1) {
    !["home", "level-complete"].includes(this.state.phase) || !this.store.unlockedLevels(ft).includes(i) || ((l || i !== this.store.run(ft).level) && this.store.startLevel(ft, i), this.store.finishTutorial(), this.beginRiff());
  }
  // ---- riffi: harjoittelu ----
  /** Kaikki ääni pois (riffin vaihto, valikko, sivulta poistuminen). Myöhässä palaava malli ohitetaan. */
  silence() {
    ++this.modelOp, this.audio.stopModel(), (this.state.modelPlaying || this.state.playing !== null) && this.set({ modelPlaying: !1, playing: null });
  }
  /** Avaa tallennetun kohdan riffin harjoitteluun ja soittaa mallin heti (opastustason mukaan). */
  beginRiff() {
    this.silence();
    const i = this.position();
    if (!i.tutorial && this.store.currentRiff(ft) === null) {
      this.showLevelComplete();
      return;
    }
    const l = i.tutorial ? ui : i.riff;
    (this.seriesRiff !== l.id || !this.series) && this.newSeries(l), this.listens = 0;
    const u = i.level.guidance;
    this.set({
      ...i,
      riff: l,
      guidance: u,
      riffNumber: i.tutorial ? 1 : i.level.riffs.indexOf(l) + 1,
      index: 0,
      marks: js(l),
      memory: this.memory(u, l),
      failedAttempts: this.series.failedAttempts,
      hint: !1,
      notesShown: gr[u].showNotes,
      feedback: null,
      audioError: "",
      achievement: null,
      ...this.progressPatch()
    }), this.enterPractice(gr[u].autoplay);
  }
  newSeries(i) {
    this.series = new Hh(i.midi, ft), this.seriesRiff = i.id;
  }
  /** Muistivihjeet vain, jos opastustaso sallii automaattiset muistivihjeet. */
  memory(i = this.state.guidance, l = this.state.riff) {
    return gr[i].memoryHints && this.series ? this.series.memory : l.midi.map(() => null);
  }
  enterPractice(i) {
    this.set({ phase: "practice", hint: !1 }), i && this.playModel(!0);
  }
  /**
   * Harjoittele vielä / Harjoittele lisää: takaisin vapaaseen harjoitteluun.
   * Kesken olevaa ottoa ei kirjata (ei tulosta, ei epäonnistunutta yritystä). Tuloksen jälkeen malli
   * soi heti uudelleen; kesken oton palatessa ei, koska pelaaja haluaa yleensä kokeilla säveliä.
   */
  practiceMore() {
    const i = this.state.phase;
    ["take", "success", "retry"].includes(i) && (this.set({ index: 0, marks: js(this.state.riff), feedback: null, achievement: null, notesShown: gr[this.state.guidance].showNotes }), this.enterPractice(i !== "take"));
  }
  /** Näytä / piilota harjoittelun sävelet ja otelautapaikat. Ei vaikuta tähtiin. */
  toggleNotes() {
    this.state.phase === "practice" && this.set({ notesShown: !this.state.notesShown });
  }
  // ---- mallisoitto ----
  /**
   * Kuuntele riffi / Pysäytä (sama painike) harjoittelussa ja tuloksen jälkeen. Ei koskaan aloita ottoa.
   * Kesken arvioitavan oton mallia ei soiteta: otto soitetaan muistista.
   */
  listen() {
    if (this.state.modelPlaying) {
      this.stopListening();
      return;
    }
    Sa.includes(this.state.phase) && this.playModel(!1);
  }
  stopListening() {
    this.state.modelPlaying && (++this.modelOp, this.audio.stopReference(), this.set({ modelPlaying: !1, playing: null }));
  }
  async playModel(i) {
    const l = ++this.modelOp;
    !i && this.state.phase === "practice" && this.listens++, this.audio.stopReference(), this.set({ modelPlaying: !0, playing: null, audioError: "" });
    let u;
    try {
      u = await this.audio.playModel(this.state.riff.midi, (d) => {
        l === this.modelOp && this.set({ playing: d });
      });
    } catch (d) {
      if (l !== this.modelOp) return;
      this.set({ modelPlaying: !1, playing: null, audioError: Dc(d) + (i ? " Selain ei ehkä salli automaattista toistoa: paina Kuuntele riffi." : "") + " Voit harjoitella myös sävelvihjeiden avulla." });
      return;
    }
    l !== this.modelOp || !u || this.set({ playing: null, modelPlaying: !1 });
  }
  // ---- arvioitava otto ----
  /**
   * Nyt riffataan! Pysäyttää mallin, piilottaa vastaukset, aloittaa uuden arvioitavan oton ensimmäisestä
   * sävelestä. Malli ei soi; pelaaja aloittaa itse. Harjoittelun painallukset eivät koskaan kuulu ottoon.
   */
  startTake() {
    if (!Sa.includes(this.state.phase)) return;
    this.state.modelPlaying && (++this.modelOp, this.audio.stopReference()), this.series || this.newSeries(this.state.riff);
    const i = this.series.start(++this.round);
    this.takeListens = this.listens, this.listens = 0, this.takeStart = this.clock(), this.set({
      phase: "take",
      modelPlaying: !1,
      playing: null,
      notesShown: !1,
      hint: !1,
      feedback: null,
      achievement: null,
      audioError: "",
      index: 0,
      marks: i.marks,
      memory: this.memory(),
      failedAttempts: this.series.failedAttempts
    });
  }
  /** Yritä uudelleen tuloksen jälkeen: uusi otto heti, ilman mallia. */
  retry() {
    (this.state.phase === "retry" || this.state.phase === "success" && !this.state.tutorial) && this.startTake();
  }
  get checker() {
    return this.series?.attempt ?? null;
  }
  /**
   * Virtuaalikitaran painallus. Jokainen painallus soi ja on täsmälleen yksi syötetapahtuma, joten
   * sama sävel kahdesti (A–A) on kaksi painallusta. Vain arvioitavassa otossa painallus tarkistetaan;
   * harjoittelussa ja tuloksen jälkeen se soi (myös mallin aikana) eikä muuta mitään.
   */
  tap(i) {
    const l = this.state.phase;
    return l !== "take" && !Sa.includes(l) ? null : (this.audio.pluck(i), l === "take" ? this.answer(i) : "free");
  }
  answer(i) {
    const l = this.checker;
    if (!l) return "free";
    const u = l.feed({ midi: i, round: this.round, input: ft }), d = l.expected.length;
    return u.type === "accepted" ? (this.set({ index: u.index + 1, marks: l.marks, feedback: { tone: "good", text: u.mark === "yellow" ? `${ke(i)} löytyi (${u.index + 1}/${d}). Kohta korjattiin, joten pallukka on keltainen.` : `${ke(i)} oikein (${u.index + 1}/${d}).` } }), u.complete && this.finish(l), "right") : u.type === "wrong" ? (this.set({ marks: l.marks, feedback: { tone: "bad", text: "Väärä sävel. Kokeile uudelleen." } }), "wrong") : "free";
  }
  /** Otto soitettu loppuun. Kirjataan kerran. */
  finish(i) {
    const l = this.state.riff, u = this.series.finish(), d = this.series.failedAttempts, h = this.store.record({
      riff: l.id,
      input: ft,
      hint: i.hintUsed,
      passed: u,
      wrong: i.wrongCount,
      octave: i.octaveCount,
      replays: this.takeListens,
      ms: Math.max(0, Math.round(this.clock() - (this.takeStart ?? this.clock()))),
      at: Date.now()
    });
    if (this.set({ ...this.progressPatch(), failedAttempts: d }), l.id === ui.id) {
      u && (this.series = null), this.set({ phase: u ? "success" : "retry", feedback: { tone: u ? "good" : "info", text: u ? `Hienoa! Opastus on tehty. Seuraavaksi ${Ve[0].name}: kolme riffiä ${Ve[0].title.toLowerCase().replace("kieli", "kielellä")}.` : "Soitit opastuksen loppuun. Riffi hyväksytään, kun kaikki pallukat ovat vihreitä – yritä uudelleen tai harjoittele lisää." } });
      return;
    }
    const v = { flawless: u, wrong: i.wrongCount, firstPass: h.firstPass, firstStar: h.firstStar, newBest: h.newBest };
    if (!u) {
      const j = gr[this.state.guidance].memoryHints && this.series.memoryActive;
      this.set({ phase: "retry", achievement: v, feedback: { tone: "info", text: "Soitit riffin loppuun! Kokeile vielä ilman virheitä – suoraan uudella otolla tai harjoittelemalla ensin lisää." + (h.newBest ? ` Uusi ennätys: ${Gh(i.wrongCount)}.` : "") + (j ? " Muistivihjeet ovat käytössä: aiemmin heti oikein soitetut sävelet näkyvät seuraavassa otossa." : "") } });
      return;
    }
    this.newSeries(l);
    const y = this.record(l.id);
    this.set({ phase: "success", achievement: v, feedback: { tone: "good", text: i.hintUsed ? `Virheetön, vihjeen kanssa! Riffi läpäisty.${y.star ? "" : " Soita uudelleen ilman otossa pyydettyä vihjettä, niin saat tähden."}` : `Virheetön! Kaikki pallukat vihreinä – riffi läpäisty.${h.firstStar ? " Sait tähden." : ""}` } });
  }
  showLevelComplete() {
    const i = this.store.level(ft);
    this.set({ phase: "level-complete", level: i, guidance: i.guidance, ...this.progressPatch(), feedback: null, hint: !1, achievement: null, audioError: "" });
  }
  // ---- sivutoiminnot ----
  /** Arvioitavan oton Vihje: sävelet ja paikat näkyviin. Kirjataan tulokseen (ei tähteä). */
  toggleHint() {
    if (this.state.phase !== "take") return;
    const i = !this.state.hint;
    i && this.checker?.useHint(), this.set({ hint: i });
  }
  /** Välilehti taustalle: malli pysähtyy; harjoittelu tai otto säilyy. */
  hidden() {
    this.stopListening();
  }
  /** Seuraava riffi (läpäisyn jälkeen); kotitreenin kolmannen jälkeen onnittelunäkymä. */
  next() {
    this.state.phase === "success" && this.beginRiff();
  }
  /** Onnittelunäkymästä: seuraava kotitreeni. Ei koskaan automaattisesti. */
  continueLevel() {
    if (this.state.phase !== "level-complete") return;
    const i = this.state.level.number + 1;
    Ve.some((l) => l.number === i) && (this.store.startLevel(ft, i), this.beginRiff());
  }
  /** Onnittelunäkymästä: sama kotitreeni alusta. */
  repeatLevel(i = this.state.level.number) {
    this.state.phase === "level-complete" && (this.store.startLevel(ft, i), this.beginRiff());
  }
  /** Sivulta poistuttaessa: kaikki ääni pysähtyy, myöhässä palaavat tapahtumat ohitetaan. */
  dispose() {
    this.silence();
  }
}
function Wc(o, i) {
  const l = o.data.stats.board[i];
  return { passed: (l?.passed ?? 0) > 0, star: (l?.solo ?? 0) > 0, best: l?.best ?? null, done: l?.done ?? 0 };
}
function Qh(o) {
  const i = Ve.flatMap((l) => l.riffs).map((l) => Wc(o, l.id));
  return {
    level: o.run(ft).level,
    completed: o.completedLevels(ft),
    passed: i.filter((l) => l.passed).length,
    stars: i.filter((l) => l.star).length,
    total: i.length,
    started: o.data.tutorialDone || i.some((l) => l.done > 0)
  };
}
const Gh = (o) => o === 1 ? "vain yksi väärä sävel" : `vain ${o} väärää säveltä`, qh = 4e3, Nc = 12, Xh = 1500;
function Yh(o, i) {
  const l = o.left + o.stickyLeft, u = o.right;
  let d = 0;
  if (i.left < l ? d = i.left - l - Nc : i.right > u && (d = i.right - u + Nc), d === 0) return null;
  const h = Math.max(0, Math.min(o.maxScroll, o.scrollLeft + d));
  return Math.abs(h - o.scrollLeft) < 1 ? null : h;
}
function bh(o, i) {
  return i.right <= o.left + o.stickyLeft || i.left >= o.right;
}
function Jh(o, i, l, { stickySelector: u, enabled: d = !0, playback: h } = {}) {
  const v = le.useRef(0), y = le.useRef(!1), j = le.useRef(""), _ = le.useRef(0), N = le.useRef(h);
  le.useEffect(() => {
    const S = o.current;
    if (!S || !d) return;
    const M = () => {
      v.current = Date.now() + qh;
    }, L = () => {
      y.current = !0, M();
    }, F = () => {
      y.current && (y.current = !1, M());
    }, P = (A) => {
      ["ArrowLeft", "ArrowRight", "Home", "End", "PageUp", "PageDown"].includes(A.key) && M();
    };
    return S.addEventListener("pointerdown", L, { passive: !0 }), S.addEventListener("touchstart", L, { passive: !0 }), S.addEventListener("wheel", M, { passive: !0 }), S.addEventListener("keydown", P), window.addEventListener("pointerup", F, { passive: !0 }), window.addEventListener("pointercancel", F, { passive: !0 }), window.addEventListener("touchend", F, { passive: !0 }), window.addEventListener("touchcancel", F, { passive: !0 }), () => {
      S.removeEventListener("pointerdown", L), S.removeEventListener("touchstart", L), S.removeEventListener("wheel", M), S.removeEventListener("keydown", P), window.removeEventListener("pointerup", F), window.removeEventListener("pointercancel", F), window.removeEventListener("touchend", F), window.removeEventListener("touchcancel", F);
    };
  }, [o, d]), le.useLayoutEffect(() => {
    const S = h !== void 0 && !!h && h !== N.current;
    N.current = h, S && !y.current && (v.current = 0);
  }, [h]), le.useLayoutEffect(() => {
    h === void 0 && j.current === "" && l !== "" && Date.now() - _.current > Xh && !y.current && (v.current = 0), j.current !== "" && l === "" && (_.current = Date.now()), j.current = l;
    const S = o.current;
    if (!S || !d || !l || y.current || Date.now() < v.current) return;
    const M = S.querySelector(i);
    if (!M || u && M.closest(u)) return;
    const L = S.getBoundingClientRect(), F = M.getBoundingClientRect(), P = u ? S.querySelector(u) : null, A = P && getComputedStyle(P).position === "sticky" ? P.getBoundingClientRect().width : 0, Q = {
      left: L.left,
      right: L.left + S.clientWidth,
      scrollLeft: S.scrollLeft,
      maxScroll: S.scrollWidth - S.clientWidth,
      stickyLeft: A
    }, G = Yh(Q, F);
    if (G === null) return;
    const te = typeof matchMedia == "function" && matchMedia("(prefers-reduced-motion: reduce)").matches || bh(Q, F);
    typeof S.scrollTo == "function" ? S.scrollTo({ left: G, behavior: te ? "auto" : "smooth" }) : S.scrollLeft = G;
  }, [o, i, l, u, d, h]);
}
const Zh = new Set(xr.neckStyle.markers), ep = xr.STRING_NAMES;
function Tc({ string: o }) {
  return /* @__PURE__ */ c.jsxs("span", { className: "string-label", children: [
    /* @__PURE__ */ c.jsxs("span", { children: [
      o + 1,
      " · ",
      /* @__PURE__ */ c.jsx("strong", { children: ep[o] })
    ] }),
    o === 0 ? /* @__PURE__ */ c.jsx("small", { children: "ohuin" }) : o === 5 ? /* @__PURE__ */ c.jsx("small", { children: "paksuin" }) : null
  ] });
}
const tp = (o) => ({ "--string-thickness": 1.25 + o * 0.45 + "px" }), np = { answer: "vastaus", anchor: "apupiste", shape: "muodon sävel", wrong: "valintasi, ei oikea", playing: "nyt soi" };
function rp({ min: o, max: i }) {
  return /* @__PURE__ */ c.jsx("thead", { children: /* @__PURE__ */ c.jsxs("tr", { children: [
    /* @__PURE__ */ c.jsx("th", { scope: "col", children: "Kielet" }),
    Array.from({ length: i - o + 1 }, (l, u) => {
      const d = o + u;
      return /* @__PURE__ */ c.jsxs("th", { scope: "col", className: d === 0 ? "open-fret" : "", children: [
        d,
        d > 0 && d % 12 === 0 ? /* @__PURE__ */ c.jsx("span", { className: "inlay", "aria-hidden": "true", children: "●●" }) : Zh.has(d) ? /* @__PURE__ */ c.jsx("span", { className: "inlay", "aria-hidden": "true", children: "●" }) : null
      ] }, d);
    })
  ] }) });
}
function ip({ area: o, marks: i = [], mutedStrings: l = [], disabled: u = !1, onAnswer: d, caption: h = "Otelauta", follow: v = "hints", playback: y }) {
  const { strings: j, min: _, max: N } = o, S = Math.max(1, _), M = Math.max(0, N - S + 1), L = le.useMemo(() => {
    if (!M) return "";
    const U = 46, se = xr.neckStyle.rail + (S - 1) * U, xe = xr.neckSurface({ count: N, cell: U, row: U, firstY: U / 2 }), Me = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${se} 0 ${M * U} ${6 * U}" preserveAspectRatio="none">${xe}</svg>`;
    return `url("data:image/svg+xml,${encodeURIComponent(Me)}")`;
  }, [S, M, N]), F = { "--cols": M, "--neck-surface": L }, [P, A] = le.useState({ string: Math.min(...j), fret: _ }), Q = le.useRef(null), G = new Map(i.map((U) => [ai(U), U])), Z = i.map((U) => `${ai(U)}${U.kind}`).join(",");
  le.useEffect(() => {
    if (v !== "hints") return;
    const U = Q.current, se = U?.querySelector(".target, .anchor");
    U && se && !se.matches("th.open-fret") && (U.scrollLeft += se.getBoundingClientRect().left - U.getBoundingClientRect().left - U.clientWidth / 2 + se.clientWidth / 2);
  }, [Z, v]), le.useEffect(() => {
    v === "playing" && Q.current && (Q.current.scrollLeft = 0);
  }, [v, _, N]);
  const te = i.find((U) => U.kind === "playing");
  Jh(Q, ".playing", te ? ai(te) : "", { stickySelector: "tbody th", enabled: v === "playing", playback: y });
  const [fe, Ee] = le.useState({ left: !1, right: !1 });
  le.useEffect(() => {
    const U = Q.current;
    if (!U) return;
    const se = () => {
      const Me = U.scrollLeft > 2, De = U.scrollLeft + U.clientWidth < U.scrollWidth - 2;
      Ee((ze) => ze.left === Me && ze.right === De ? ze : { left: Me, right: De });
    };
    se(), U.addEventListener("scroll", se, { passive: !0 });
    const xe = typeof ResizeObserver > "u" ? null : new ResizeObserver(se);
    return xe?.observe(U), () => {
      U.removeEventListener("scroll", se), xe?.disconnect();
    };
  }, [Z, _, N]);
  const de = j.includes(P.string) && P.fret >= _ && P.fret <= N ? P : { string: Math.min(...j), fret: _ };
  return /* @__PURE__ */ c.jsxs("div", { className: "fret-wrap" + (fe.left ? " more-left" : "") + (fe.right ? " more-right" : ""), children: [
    (fe.left || fe.right) && /* @__PURE__ */ c.jsxs("p", { className: "fret-scroll-hint", children: [
      fe.left && /* @__PURE__ */ c.jsx("span", { "aria-hidden": "true", children: "← " }),
      "Vieritä otelautaa sivusuunnassa: nauhoja on lisää ",
      fe.left && fe.right ? "molemmilla puolilla" : fe.right ? "oikealla" : "vasemmalla",
      fe.right && /* @__PURE__ */ c.jsx("span", { "aria-hidden": "true", children: " →" })
    ] }),
    /* @__PURE__ */ c.jsx("div", { ref: Q, className: "fret-scroll", tabIndex: 0, role: "region", "aria-label": "Otelaudan vastausruudukko", children: /* @__PURE__ */ c.jsxs("table", { className: "practice-board note-board", style: F, children: [
      /* @__PURE__ */ c.jsxs("caption", { children: [
        h,
        " · ohut e ylhäällä, paksu E alhaalla"
      ] }),
      /* @__PURE__ */ c.jsx(rp, { min: S, max: N }),
      /* @__PURE__ */ c.jsx("tbody", { children: xr.OPEN_PITCHES.map((U, se) => /* @__PURE__ */ c.jsxs("tr", { className: j.includes(se) ? "" : "unused", style: tp(se), children: [
        _ > 0 && /* @__PURE__ */ c.jsxs("th", { scope: "row", "aria-label": `${se + 1}. kieli: ${Ns[se]}${l.includes(se) ? ", ei soiteta" : ""}`, children: [
          /* @__PURE__ */ c.jsx(Tc, { string: se }),
          l.includes(se) && /* @__PURE__ */ c.jsx("span", { className: "string-muted", "aria-hidden": "true", children: "×" })
        ] }),
        vh([se], _, N).map((xe) => {
          const Me = G.get(ai(xe)), De = `${Ns[se]}-kieli, ${ph(xe.fret)}`, ze = xe.fret === 0 ? "th" : "td";
          return /* @__PURE__ */ c.jsx(ze, { scope: xe.fret === 0 ? "row" : void 0, className: `${xe.fret === 0 ? "open-fret " : ""}${Me ? Me.kind === "answer" ? "target" : Me.kind : ""}`, children: /* @__PURE__ */ c.jsxs(
            "button",
            {
              type: "button",
              "data-string": se,
              "data-fret": xe.fret,
              tabIndex: de.string === se && de.fret === xe.fret ? 0 : -1,
              onFocus: () => A(xe),
              onKeyDown: (Ae) => {
                if (!["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(Ae.key)) return;
                Ae.preventDefault();
                const We = [...j].sort((b, D) => b - D), Be = We.indexOf(se), Te = Ae.key === "ArrowUp" ? We[Math.max(0, Be - 1)] : Ae.key === "ArrowDown" ? We[Math.min(We.length - 1, Be + 1)] : se, z = Ae.key === "Home" ? _ : Ae.key === "End" ? N : Math.max(_, Math.min(N, xe.fret + (Ae.key === "ArrowRight" ? 1 : Ae.key === "ArrowLeft" ? -1 : 0)));
                Ae.currentTarget.closest("table")?.querySelector(`button[data-string="${Te}"][data-fret="${z}"]`)?.focus();
              },
              disabled: u || !j.includes(se),
              "aria-label": De + (Me ? `, ${np[Me.kind]}${Me.label ? " " + Me.label : ""}` : ""),
              onClick: () => d?.(xe),
              children: [
                xe.fret === 0 && /* @__PURE__ */ c.jsxs("span", { className: "open-string-name", children: [
                  /* @__PURE__ */ c.jsx(Tc, { string: se }),
                  l.includes(se) && " ×"
                ] }),
                Me ? /* @__PURE__ */ c.jsx("span", { className: "dot", children: Me.label || "●" }) : null
              ]
            }
          ) }, xe.fret);
        })
      ] }, se)) })
    ] }) })
  ] });
}
const wr = {
  harjoitus: {
    title: "Riffiharjoitus – oikea kitara",
    tag: "Oikea kitara · Harjoittele",
    card: "Oikea kitara · Harjoittele",
    description: "Kuuntele riffejä, opettele sävelet ja harjoittele soittamista omalla kitarallasi.",
    action: "Avaa harjoitus"
  },
  peli: {
    title: "Riffikaiku-peli – virtuaalikitara",
    tag: "Virtuaalikitara · Pelaa",
    card: "Virtuaalikitara · Pelaa",
    description: "Kuuntele riffi ja toista se virtuaalikitaralla. Läpäise haasteita ja etene uusiin riffeihin.",
    action: "Avaa peli"
  }
}, sp = "kitaraharjoittelija.html?polku=otelauta";
function lp(o) {
  const i = new URLSearchParams(o).get("tila");
  return i === "harjoitus" || i === "peli" ? i : null;
}
function Rs(o) {
  const i = typeof location > "u" ? void 0 : location, l = new URLSearchParams(), u = new URLSearchParams(i?.search).get("aihe");
  o && l.set("tila", o), u && l.set("aihe", u);
  const d = l.toString(), h = i?.pathname.split("/").pop() || "riffikaiku.html", v = o ? "" : "./" + h;
  return d ? v + "?" + d : v;
}
const ap = (o) => `${o ? wr[o].title + " · " : ""}Riffikaiku (beta) – Musiikin kartta`, op = { strings: Vc, min: Bh, max: Vh, fixed: "" };
function hi({ mode: o }) {
  return /* @__PURE__ */ c.jsxs("nav", { className: "riff-crumbs", "aria-label": "Sijainti", children: [
    /* @__PURE__ */ c.jsxs("a", { className: "riff-back", href: sp, children: [
      /* @__PURE__ */ c.jsx("span", { "aria-hidden": "true", children: "←" }),
      " Takaisin harjoitusvalikkoon"
    ] }),
    o && /* @__PURE__ */ c.jsxs("ol", { children: [
      /* @__PURE__ */ c.jsx("li", { children: /* @__PURE__ */ c.jsx("a", { href: Rs(null), children: "Riffikaiku" }) }),
      /* @__PURE__ */ c.jsx("li", { "aria-current": "page", children: wr[o].tag })
    ] })
  ] });
}
function jr({ mode: o }) {
  return /* @__PURE__ */ c.jsx("p", { className: `riff-mode-tag ${o}`, "data-testid": "mode-tag", children: wr[o].title });
}
function Kc({ slots: o, label: i }) {
  return /* @__PURE__ */ c.jsx("ol", { className: "riff-slots", "aria-label": i, "data-testid": "slots", children: o.map((l, u) => /* @__PURE__ */ c.jsxs("li", { className: l.cls, "data-mark": l.mark, "aria-label": l.label, children: [
    /* @__PURE__ */ c.jsx("span", { className: "slot-note", "aria-hidden": "true", children: l.content }),
    l.symbol && /* @__PURE__ */ c.jsx("span", { className: "slot-symbol", "aria-hidden": "true", children: l.symbol })
  ] }, u)) });
}
function Ea(o, i, l = () => !0, u = (d) => String(d + 1)) {
  const d = /* @__PURE__ */ new Map();
  return o.spots.forEach((h, v) => {
    if (!l(v)) return;
    const y = { ...h, midi: o.midi[v] }, j = ai(y), _ = d.get(j);
    d.set(j, { ...y, kind: i === v ? "playing" : _?.kind ?? "answer", label: _ ? `${_.label}·${u(v)}` : u(v) });
  }), [...d.values()];
}
const up = ["ohuin kieli", "toiseksi ohuin", "kolmanneksi ohuin", "kolmanneksi paksuin", "toiseksi paksuin", "paksuin kieli"];
function Qc({ focus: o, marks: i, disabled: l, onAnswer: u, caption: d }) {
  const h = o.length < Vc.length;
  return /* @__PURE__ */ c.jsxs("div", { className: `riff-board ${h ? "has-focus" : ""} ${o.map((v) => `focus-s${v}`).join(" ")}`, "data-testid": "board", children: [
    h && /* @__PURE__ */ c.jsxs("p", { className: "riff-focus-legend", "data-testid": "focus-legend", children: [
      /* @__PURE__ */ c.jsx("span", { className: "swatch", "aria-hidden": "true" }),
      " Harjoituskieli: ",
      o.map((v) => `${Ns[v]}-kieli`).join(" ja "),
      o.length === 1 ? ` (${up[o[0]]})` : ""
    ] }),
    /* @__PURE__ */ c.jsx(ip, { area: op, marks: i, disabled: l, onAnswer: u, caption: d })
  ] });
}
const cp = { pending: "harmaa, ei vielä ratkaistu", red: "punainen, väärä sävel – yritä tätä kohtaa uudelleen", green: "vihreä, oikein heti", yellow: "keltainen, löytyi virheen jälkeen" }, Mc = { pending: "", red: "✗", green: "✓", yellow: "↻" }, fp = {
  practice: { title: "Harjoittele", text: "Kuuntele riffi ja etsi sen sävelet otelaudalta omaan tahtiin. Mitään ei vielä arvioida." },
  take: { title: "Sinun vuorosi!", text: "Soita riffi muistista. Painalluksesi tarkistetaan." },
  success: { title: "Riffi läpäisty!", text: "" },
  retry: { title: "Riffi soitettu loppuun", text: "" }
};
function dp(o) {
  return o.riff.midi.map((i, l) => {
    const u = o.modelPlaying && o.playing === l;
    if (o.phase === "practice") {
      const j = o.notesShown;
      return {
        cls: `${j ? "shown" : "pending"}${u ? " model" : ""}`,
        mark: "pending",
        content: u ? "♪" : j ? ke(i) : "",
        label: `${l + 1}. sävel${j ? `: ${ke(i)}` : ""}${u ? ", soi nyt" : ""}`
      };
    }
    const d = o.marks[l] ?? "pending", h = (d === "pending" || d === "red") && l === o.index && o.phase === "take", v = d === "pending" && o.memory[l] != null, y = d === "green" || d === "yellow";
    return {
      cls: `${d}${h ? " current" : ""}${u ? " model" : ""}${v ? " memory" : ""}`,
      mark: d,
      content: y ? ke(i) : u ? "♪" : v ? ke(o.memory[l]) : Mc[d] || (h ? "?" : ""),
      symbol: y ? Mc[d] : void 0,
      label: `${l + 1}. sävel: ${cp[d]}${v ? `, muistivihje ${ke(o.memory[l])}` : ""}${h ? ", vuorossa" : ""}`
    };
  });
}
function hp({ game: o, s: i }) {
  return i.tutorial ? null : /* @__PURE__ */ c.jsx("ol", { className: "riff-run", "aria-label": `${i.level.name}: läpäisty ${i.passedInRun.length}/${i.level.riffs.length} riffiä`, "data-testid": "run-progress", children: i.level.riffs.map((l, u) => {
    const d = i.passedInRun.includes(l.id), h = o.record(l.id).star, v = l.id === i.riff.id;
    return /* @__PURE__ */ c.jsx(
      "li",
      {
        className: `${d ? "passed" : ""}${v ? " current" : ""}`,
        "aria-label": `Riffi ${u + 1}: ${l.title}${d ? ", läpäisty" : ""}${h ? ", tähti" : ""}${v ? ", nyt" : ""}`,
        children: /* @__PURE__ */ c.jsx("span", { "aria-hidden": "true", children: d ? h ? "★" : "✓" : u + 1 })
      },
      l.id
    );
  }) });
}
function pp({ s: o }) {
  const i = o.achievement;
  return !i || !(i.firstStar || i.newBest || i.flawless && i.firstPass) ? null : /* @__PURE__ */ c.jsxs("p", { className: "riff-achievement", "data-testid": "achievement", children: [
    i.firstStar ? /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
      /* @__PURE__ */ c.jsx("span", { "aria-hidden": "true", children: "★ " }),
      "Tähti! Virheetön ilman vihjettä."
    ] }) : i.flawless && i.firstPass ? /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
      /* @__PURE__ */ c.jsx("span", { "aria-hidden": "true", children: "✓ " }),
      "Ensimmäinen läpäisy!"
    ] }) : null,
    i.newBest && /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
      " Uusi ennätys: ",
      i.wrong === 0 ? "ei yhtään väärää säveltä" : i.wrong === 1 ? "vain yksi väärä sävel" : `vain ${i.wrong} väärää säveltä`,
      "."
    ] })
  ] });
}
function mp({ game: o, s: i, titleRef: l, onHome: u }) {
  const [d, h] = le.useState(null), v = le.useRef(), y = le.useRef(null), j = le.useRef(i.phase);
  le.useEffect(() => () => clearTimeout(v.current), []), le.useEffect(() => {
    j.current !== i.phase && y.current?.focus(), j.current = i.phase, h(null);
  }, [i.phase, i.riff.id]);
  function _(te) {
    const fe = o.tap(te.midi);
    fe && (clearTimeout(v.current), h((Ee) => ({ p: te, result: fe, n: (Ee?.n ?? 0) + 1 })), v.current = setTimeout(() => h(null), 600));
  }
  const N = i.riff.midi.length, S = fp[i.phase] ?? { title: "", text: "" }, M = i.phase === "practice", L = i.phase === "take", F = i.phase === "success" || i.phase === "retry", P = M && i.notesShown || L && i.hint, A = d ? [{
    ...d.p,
    kind: d.result === "right" ? "answer" : d.result === "wrong" ? "wrong" : "playing",
    label: d.result === "wrong" ? "✗" : ke(d.p.midi)
  }] : [], Q = [...P ? Ea(i.riff, i.playing) : [], ...A], G = (te = !1) => /* @__PURE__ */ c.jsx("button", { type: "button", className: te ? "primary" : "", onClick: () => o.listen(), "aria-pressed": i.modelPlaying, "data-testid": "listen", children: i.modelPlaying ? "Pysäytä kuuntelu" : "Kuuntele riffi" }), Z = gr[i.guidance];
  return /* @__PURE__ */ c.jsxs("section", { className: "riff-game", "data-phase": i.phase, "data-mode": "peli", "aria-labelledby": "riff-title", children: [
    /* @__PURE__ */ c.jsx(hi, { mode: "peli" }),
    /* @__PURE__ */ c.jsxs("div", { className: `riff-panel riff-play stage-${i.phase}`, children: [
      /* @__PURE__ */ c.jsxs("header", { className: "riff-round-heading", children: [
        /* @__PURE__ */ c.jsx(jr, { mode: "peli" }),
        /* @__PURE__ */ c.jsx("h1", { id: "riff-title", ref: l, tabIndex: -1, "data-testid": "level-heading", children: i.tutorial ? `${Ve[0].name} · Opastus` : `${i.level.name} · Riffi ${i.riffNumber}/${i.level.riffs.length}` }),
        /* @__PURE__ */ c.jsx("p", { className: "riff-name", children: i.tutorial ? "Kaksi säveltä" : i.riff.title }),
        /* @__PURE__ */ c.jsx(hp, { game: o, s: i })
      ] }),
      /* @__PURE__ */ c.jsxs("ol", { className: "riff-flow", "aria-label": "Riffin vaiheet", children: [
        /* @__PURE__ */ c.jsx("li", { "aria-current": M ? "step" : void 0, children: "Kuuntele ja harjoittele" }),
        /* @__PURE__ */ c.jsx("li", { "aria-current": L ? "step" : void 0, children: "Soita muistista" }),
        /* @__PURE__ */ c.jsx("li", { "aria-current": F ? "step" : void 0, children: "Tulos" })
      ] }),
      /* @__PURE__ */ c.jsxs("div", { className: "riff-turn", children: [
        /* @__PURE__ */ c.jsx("h2", { className: `riff-status ${L ? "turn" : i.phase === "success" ? "good" : ""}`, tabIndex: -1, ref: y, "data-testid": "riff-status", children: S.title }),
        S.text && /* @__PURE__ */ c.jsx("p", { className: "riff-stage-text", "data-testid": "stage-text", children: S.text }),
        !F && /* @__PURE__ */ c.jsx("p", { className: "riff-instruction", "data-testid": "instruction", children: i.level.instruction })
      ] }),
      /* @__PURE__ */ c.jsx(Kc, { slots: dp(i), label: M ? `Riffissä on ${N} säveltä` : `Ratkaistu ${i.index} / ${N} säveltä` }),
      !M && /* @__PURE__ */ c.jsxs("p", { className: "riff-count", "data-testid": "count", children: [
        "Ratkaistu ",
        i.index,
        "/",
        N,
        L && i.memory.some((te) => te !== null) ? " · muistivihjeet käytössä" : ""
      ] }),
      F && /* @__PURE__ */ c.jsx(pp, { s: i }),
      i.feedback && !M && /* @__PURE__ */ c.jsx("p", { className: `riff-feedback ${i.feedback.tone}`, role: "status", "data-testid": "feedback", children: i.feedback.text }),
      i.audioError && /* @__PURE__ */ c.jsx("p", { className: "riff-feedback bad", role: "alert", "data-testid": "audio-error", children: i.audioError }),
      M && /* @__PURE__ */ c.jsxs("div", { className: "riff-actions riff-practice-actions", children: [
        G(),
        /* @__PURE__ */ c.jsx("button", { type: "button", "aria-pressed": i.notesShown, onClick: () => o.toggleNotes(), "data-testid": "toggle-notes", children: i.notesShown ? "Piilota sävelet" : "Näytä sävelet" })
      ] }),
      P && /* @__PURE__ */ c.jsxs("div", { className: "riff-hint", "data-testid": "hint", children: [
        /* @__PURE__ */ c.jsxs("p", { children: [
          /* @__PURE__ */ c.jsx("strong", { children: "Sävelet:" }),
          " ",
          i.riff.midi.map(ke).join(" – ")
        ] }),
        /* @__PURE__ */ c.jsx("p", { children: i.riff.tip }),
        L && /* @__PURE__ */ c.jsx("p", { className: "riff-help", children: "Otossa pyydetty vihje kirjataan: riffi voi silti mennä läpi, mutta tähteä ei tule." })
      ] }),
      /* @__PURE__ */ c.jsx(
        Qc,
        {
          focus: i.level.strings,
          marks: Q,
          disabled: !1,
          onAnswer: _,
          caption: L ? "Virtuaalikitara: soita riffi muistista – painallukset tarkistetaan" : "Virtuaalikitara: kokeile säveliä vapaasti (ei arvioida)"
        }
      ),
      M && /* @__PURE__ */ c.jsxs("div", { className: "riff-go", children: [
        /* @__PURE__ */ c.jsx("button", { type: "button", className: "primary riff-go-button", onClick: () => o.startTake(), "aria-describedby": "riff-go-text", children: "Nyt riffataan!" }),
        /* @__PURE__ */ c.jsx("p", { id: "riff-go-text", className: "riff-help", children: "Nyt soitat riffin muistista. Painalluksesi tarkistetaan." }),
        Z.showNotes === !1 && !i.notesShown && /* @__PURE__ */ c.jsx("p", { className: "riff-help", children: "Tällä tasolla sävelet ovat piilossa, kunnes avaat ne. Harjoittelun apu ei vaikuta tähtiin." })
      ] }),
      L && /* @__PURE__ */ c.jsxs("div", { className: "riff-actions riff-main-actions", children: [
        /* @__PURE__ */ c.jsx("button", { type: "button", "aria-pressed": i.hint, onClick: () => o.toggleHint(), children: i.hint ? "Piilota vihje" : "Vihje" }),
        /* @__PURE__ */ c.jsx("button", { type: "button", onClick: () => o.practiceMore(), children: "Harjoittele vielä" })
      ] }),
      F && /* @__PURE__ */ c.jsxs("div", { className: "riff-actions riff-main-actions", children: [
        i.phase === "success" && /* @__PURE__ */ c.jsx("button", { type: "button", className: "primary", onClick: () => o.next(), children: i.tutorial ? `Aloita ${Ve[0].name}` : "Seuraava riffi" }),
        !(i.phase === "success" && i.tutorial) && /* @__PURE__ */ c.jsx("button", { type: "button", className: i.phase === "retry" ? "primary" : "", onClick: () => o.retry(), children: "Yritä uudelleen" }),
        !(i.phase === "success" && i.tutorial) && /* @__PURE__ */ c.jsx("button", { type: "button", onClick: () => o.practiceMore(), children: "Harjoittele lisää" }),
        G()
      ] }),
      /* @__PURE__ */ c.jsx("div", { className: "riff-end-actions", children: /* @__PURE__ */ c.jsx("button", { type: "button", onClick: u, children: "Lopeta peli" }) })
    ] })
  ] });
}
const vp = ["practice", "take", "success", "retry"], Cc = (o) => `${Ve[o - 1]?.name ?? `Kotitreeni ${o}`} – ${Ve[o - 1]?.title ?? ""}`;
function yp({ game: o, s: i, titleRef: l }) {
  const u = Ve.flatMap((S) => S.riffs).map((S) => o.record(S.id)), d = u.filter((S) => S.passed).length, h = u.filter((S) => S.star).length, v = Ve.find((S) => S.number === i.level.number) ?? Ve[0], y = !i.tutorial && i.passedInRun.length >= v.riffs.length, j = y ? Ve.find((S) => S.number === v.number + 1 && i.unlockedLevels.includes(S.number)) : void 0, _ = i.tutorial ? "Aloita peli: lyhyt opastus" : j ? `Aloita: ${j.name} – ${j.title}` : y ? "Kaikki kotitreenit suoritettu – valitse uusinta" : `${d > 0 || i.passedInRun.length > 0 ? "Jatka" : "Aloita"}: ${v.name} · Riffi ${i.passedInRun.length + 1}/${v.riffs.length}`, N = () => j ? o.chooseLevel(j.number) : o.play();
  return /* @__PURE__ */ c.jsxs("section", { className: "riff-game", "data-phase": "home", "data-mode": "peli", "aria-labelledby": "riff-title", children: [
    /* @__PURE__ */ c.jsx(hi, { mode: "peli" }),
    /* @__PURE__ */ c.jsxs("div", { className: "intro riff-intro", children: [
      /* @__PURE__ */ c.jsx(jr, { mode: "peli" }),
      /* @__PURE__ */ c.jsx("h1", { id: "riff-title", ref: l, tabIndex: -1, children: "Kuuntele ja toista" }),
      /* @__PURE__ */ c.jsx("p", { children: "Kuuntele riffi, harjoittele sen sävelet otelaudalla ja soita se sitten muistista. Riffi läpäistään, kun kaikki pallukat ovat vihreitä. Ei aikarajaa eikä elämiä – harjoitteluun pääsee aina takaisin." })
    ] }),
    /* @__PURE__ */ c.jsxs("dl", { className: "riff-score", "data-testid": "game-score", children: [
      /* @__PURE__ */ c.jsxs("div", { children: [
        /* @__PURE__ */ c.jsx("dt", { children: "Läpäistyt riffit" }),
        /* @__PURE__ */ c.jsxs("dd", { children: [
          d,
          "/",
          u.length
        ] })
      ] }),
      /* @__PURE__ */ c.jsxs("div", { children: [
        /* @__PURE__ */ c.jsxs("dt", { children: [
          "Tähdet ",
          /* @__PURE__ */ c.jsx("small", { children: "(ilman vihjettä)" })
        ] }),
        /* @__PURE__ */ c.jsxs("dd", { children: [
          /* @__PURE__ */ c.jsx("span", { "aria-hidden": "true", children: "★ " }),
          h,
          "/",
          u.length
        ] })
      ] }),
      /* @__PURE__ */ c.jsxs("div", { children: [
        /* @__PURE__ */ c.jsx("dt", { children: "Kotitreenit" }),
        /* @__PURE__ */ c.jsxs("dd", { children: [
          i.completedLevels.length,
          "/",
          Ve.length
        ] })
      ] })
    ] }),
    /* @__PURE__ */ c.jsx("div", { className: "riff-actions", children: /* @__PURE__ */ c.jsx("button", { type: "button", className: "primary riff-play-button", onClick: N, children: _ }) }),
    /* @__PURE__ */ c.jsx("h2", { children: "Kotitreenit" }),
    /* @__PURE__ */ c.jsx("p", { className: "riff-help", children: "Jokainen kotitreeni harjoittaa yhtä kieltä kolmella riffillä. Seuraava avautuu, kun edellisen kaikki kolme riffiä on läpäisty." }),
    /* @__PURE__ */ c.jsx("ol", { className: "riff-levels", "data-testid": "levels", children: Ve.map((S) => {
      const M = i.completedLevels.includes(S.number), L = i.unlockedLevels.includes(S.number), F = i.level.number === S.number && !i.tutorial && !y;
      return /* @__PURE__ */ c.jsxs("li", { className: M ? "done" : L ? "open" : "locked", children: [
        /* @__PURE__ */ c.jsxs("div", { children: [
          /* @__PURE__ */ c.jsxs("strong", { children: [
            S.name,
            " – ",
            S.title
          ] }),
          /* @__PURE__ */ c.jsx("span", { children: M ? "suoritettu" : F ? "kesken" : L ? "avattu" : "lukittu – läpäise ensin edellinen kotitreeni" }),
          /* @__PURE__ */ c.jsx("span", { className: "riff-level-riffs", children: S.riffs.map((P) => {
            const A = o.record(P.id);
            return /* @__PURE__ */ c.jsxs("span", { className: A.star ? "star" : A.passed ? "passed" : "", children: [
              /* @__PURE__ */ c.jsx("span", { "aria-hidden": "true", children: A.star ? "★" : A.passed ? "✓" : "○" }),
              " ",
              P.title,
              /* @__PURE__ */ c.jsx("span", { className: "sr-only", children: A.star ? ", läpäisty ilman vihjettä" : A.passed ? ", läpäisty" : ", ei vielä läpäisty" })
            ] }, P.id);
          }) })
        ] }),
        L && /* @__PURE__ */ c.jsx("button", { type: "button", className: F ? "primary" : "", onClick: () => o.chooseLevel(S.number, M && !F), children: F ? "Jatka" : M ? "Pelaa uudelleen" : "Aloita" })
      ] }, S.number);
    }) }),
    /* @__PURE__ */ c.jsxs("p", { className: "riff-help", children: [
      "Muiden kielten kotitreenit tulevat myöhemmin. Haluatko soittaa oikealla kitaralla? ",
      /* @__PURE__ */ c.jsx("a", { href: Rs("harjoitus"), children: "Riffiharjoitus – oikea kitara" }),
      "."
    ] })
  ] });
}
function gp({ game: o }) {
  const i = le.useSyncExternalStore(o.subscribe, o.getState), l = vp.includes(i.phase) ? "play" : i.phase, u = le.useRef(null), d = le.useRef(null), h = le.useRef(l);
  le.useEffect(() => {
    h.current !== l && (l === "level-complete" ? d.current?.focus() : u.current?.focus()), h.current = l;
  }, [l]);
  const v = le.useRef(i.riff.id);
  if (le.useEffect(() => {
    v.current !== i.riff.id && l === "play" && u.current?.focus(), v.current = i.riff.id;
  }, [i.riff.id, l]), le.useEffect(() => {
    const j = () => {
      document.visibilityState === "hidden" && o.hidden();
    }, _ = () => o.dispose();
    return document.addEventListener("visibilitychange", j), window.addEventListener("pagehide", _), () => {
      document.removeEventListener("visibilitychange", j), window.removeEventListener("pagehide", _);
    };
  }, [o]), i.phase === "home") return /* @__PURE__ */ c.jsx(yp, { game: o, s: i, titleRef: u });
  const y = () => o.home();
  if (i.phase === "level-complete") {
    const j = i.level.riffs.filter((_) => o.record(_.id).star).length;
    return /* @__PURE__ */ c.jsxs("section", { className: "riff-game", "data-phase": i.phase, "data-mode": "peli", "aria-labelledby": "riff-cleared-title", children: [
      /* @__PURE__ */ c.jsx(hi, { mode: "peli" }),
      /* @__PURE__ */ c.jsx(jr, { mode: "peli" }),
      /* @__PURE__ */ c.jsxs("div", { className: "riff-panel riff-cleared", "data-testid": "level-complete", children: [
        /* @__PURE__ */ c.jsx("p", { className: "riff-cleared-badge", "aria-hidden": "true", children: "★".repeat(j) + "☆".repeat(i.level.riffs.length - j) }),
        /* @__PURE__ */ c.jsx("h2", { id: "riff-cleared-title", tabIndex: -1, ref: d, children: "Onneksi olkoon!" }),
        /* @__PURE__ */ c.jsxs("p", { className: "riff-cleared-big", children: [
          Cc(i.level.number),
          " suoritettu!"
        ] }),
        /* @__PURE__ */ c.jsxs("p", { children: [
          "Läpäisit kaikki kolme riffiä virheettömästi. Tähtiä ",
          j,
          "/",
          i.level.riffs.length,
          j < i.level.riffs.length ? " – tähden saa, kun riffi menee virheettä ilman otossa pyydettyä vihjettä." : " – kaikki ilman vihjettä!"
        ] }),
        i.level.number < Ve.length ? /* @__PURE__ */ c.jsxs("p", { children: [
          "Seuraava kotitreeni on auki: ",
          Cc(i.level.number + 1),
          "."
        ] }) : /* @__PURE__ */ c.jsx("p", { children: "Olet suorittanut kaikki nykyiset kotitreenit. Muiden kielten kotitreenit ovat tulossa." }),
        /* @__PURE__ */ c.jsxs("div", { className: "riff-actions", children: [
          i.level.number < Ve.length && /* @__PURE__ */ c.jsxs("button", { type: "button", className: "primary", onClick: () => o.continueLevel(), children: [
            "Jatka: ",
            Ve[i.level.number].name
          ] }),
          /* @__PURE__ */ c.jsx("button", { type: "button", onClick: () => o.repeatLevel(), children: "Pelaa uudelleen" }),
          /* @__PURE__ */ c.jsx("button", { type: "button", onClick: y, children: "Pelin valikko" })
        ] })
      ] })
    ] });
  }
  return /* @__PURE__ */ c.jsx(mp, { game: o, s: i, titleRef: u, onHome: y });
}
const Gc = 440, _a = (o) => Gc * 2 ** ((o - 69) / 12), Ms = (o, i) => 1200 * Math.log2(o / i), _s = 5, kp = 100, Cs = [
  { name: "E2", midi: 40, number: 6 },
  { name: "A2", midi: 45, number: 5 },
  { name: "D3", midi: 50, number: 4 },
  { name: "G3", midi: 55, number: 3 },
  { name: "B3", midi: 59, number: 2 },
  { name: "E4", midi: 64, number: 1 }
], xp = (o) => {
  const i = [...o].sort((u, d) => u - d), l = i.length >> 1;
  return i.length % 2 ? i[l] : (i[l - 1] + i[l]) / 2;
}, wp = (o) => Cs.reduce((i, l) => Math.abs(Ms(o, _a(l.midi))) < Math.abs(Ms(o, _a(i.midi))) ? l : i);
class Sp {
  constructor(i = 160, l = 5, u = 25, d = 0.35) {
    this.windowMs = i, this.minSamples = l, this.maxSpreadCents = u, this.smoothing = d;
  }
  windowMs;
  minSamples;
  maxSpreadCents;
  smoothing;
  samples = [];
  smoothed = null;
  target = null;
  lastAt = -1 / 0;
  /** null = automaattinen (lähin vapaa kieli). */
  setTarget(i) {
    this.target = i === null ? null : Cs.find((l) => l.midi === i) ?? null, this.smoothed = null;
  }
  get selected() {
    return this.target;
  }
  reset() {
    this.samples = [], this.smoothed = null;
  }
  feed(i, l) {
    const u = (i.status === "pitch" || i.status === "off-pitch") && i.frequency !== void 0 && i.frequency > 0;
    u && (this.samples.push({ at: l, frequency: i.frequency }), this.lastAt = l), this.samples = this.samples.filter((L) => l - L.at <= this.windowMs), !u && l - this.lastAt > this.windowMs && (this.smoothed = null);
    const d = this.target ?? Cs[0];
    if (!this.samples.length)
      return { status: i.status === "silent" ? "no-signal" : "unreliable", target: d, auto: !this.target };
    const h = xp(this.samples.map((L) => L.frequency)), v = Ms(Math.max(...this.samples.map((L) => L.frequency)), Math.min(...this.samples.map((L) => L.frequency))), y = this.samples[this.samples.length - 1].at - this.samples[0].at, j = this.target ?? wp(h), _ = Math.round(69 + 12 * Math.log2(h / Gc));
    if (this.samples.length < this.minSamples || y < 100 || v > this.maxSpreadCents)
      return { status: "unreliable", target: j, auto: !this.target, frequency: h, heardMidi: _ };
    const N = Ms(h, _a(j.midi));
    if (Math.abs(N) > kp)
      return this.smoothed = null, { status: "far", target: j, auto: !this.target, frequency: h, cents: N, heardMidi: _ };
    this.smoothed = this.smoothed === null ? N : this.smoothed + this.smoothing * (N - this.smoothed);
    const S = this.smoothed;
    return { status: Math.abs(S) <= _s ? "in-tune" : S < 0 ? "flat" : "sharp", target: j, auto: !this.target, frequency: h, cents: S, heardMidi: _ };
  }
}
const jp = 1e3, Ep = 80;
class _p {
  constructor(i, l, u = () => performance.now()) {
    this.audio = i, this.store = l, this.clock = u, this.state = {
      status: "off",
      error: "",
      closed: null,
      device: l.data.device,
      devices: [],
      micInfo: null,
      minRms: Qn.minRms,
      noise: null,
      calibrating: !1,
      muted: null,
      heard: null,
      view: "practice",
      check: "waiting",
      notice: null,
      tuner: null,
      tunerTarget: null,
      diag: null
    };
  }
  audio;
  store;
  clock;
  state;
  listeners = /* @__PURE__ */ new Set();
  session = 0;
  open = !1;
  calibration = null;
  settler = new Wh();
  settleTimer;
  tunerEngine = new Sp();
  lastView = -1 / 0;
  routed = { count: 0, last: null };
  /** Harjoitus asettaa: käyttikö se näppäilyn. */
  onPluck = () => !1;
  /** Harjoitus asettaa: jokainen analyysikehys (epävarman tunnistuksen ja toistuvan sävelen ohjeet). */
  onFrame = () => {
  };
  subscribe = (i) => (this.listeners.add(i), () => {
    this.listeners.delete(i);
  });
  getState = () => this.state;
  get isOn() {
    return this.open && this.state.status === "on";
  }
  /** Voiko harjoitus juuri nyt arvioida näppäilyjä. */
  get listening() {
    return this.isOn && !this.state.calibrating && this.state.muted === null;
  }
  set(i) {
    this.state = { ...this.state, ...i }, this.listeners.forEach((l) => l());
  }
  /**
   * Avaa mikrofonin (lupa pyydetään tästä kutsusta, eli vain käyttäjän valinnasta) ja mittaa taustakohinan.
   * Palauttaa true, kun mikrofoni on auki.
   */
  async start() {
    this.closeStream(), this.cancelSettle();
    const i = ++this.session;
    this.set({ status: "permission", error: "", closed: null, heard: null, muted: null, notice: null });
    const l = {
      onFrame: (u, d) => {
        i === this.session && this.frame(u, d);
      },
      onStable: (u) => {
        i === this.session && this.stable(u);
      },
      onEnded: () => {
        i === this.session && this.stop("mic-lost");
      }
    };
    try {
      const u = await this.audio.openMic(l, this.state.device);
      return i !== this.session || !u ? !1 : (this.open = !0, this.set({ status: "on", micInfo: u, check: "waiting", tuner: null }), this.tunerEngine.reset(), this.startCalibration(), this.refreshDevices(), !0);
    } catch (u) {
      return i !== this.session || (this.open = !1, this.set({ status: "error", error: Ah(u), micInfo: null })), !1;
    }
  }
  /** Sulkee mikrofonin. Syy näytetään käyttäjälle (taustavälilehti, irrotettu laite). */
  stop(i = "user") {
    const l = this.open || this.state.status === "permission";
    this.session++, this.closeStream(), this.cancelSettle(), this.calibration = null, this.set({
      status: "off",
      error: "",
      closed: l ? i : this.state.closed,
      micInfo: null,
      heard: null,
      muted: null,
      calibrating: !1,
      diag: null,
      tuner: null,
      notice: null
    });
  }
  closeStream() {
    this.open && this.audio.closeMic(), this.open = !1;
  }
  /** Päivittää laitelistan (nimet näkyvät vasta luvan jälkeen). Kutsutaan myös devicechange-tapahtumasta. */
  async refreshDevices() {
    try {
      this.set({ devices: await this.audio.listDevices() });
    } catch {
    }
  }
  /** Äänitulon vaihto: vanha virta suljetaan ja uusi avataan; kohina mitataan uudelleen. */
  setDevice(i) {
    this.store.setDevice(i), this.set({ device: i }), (this.open || this.state.status === "permission") && this.start();
  }
  /** Mihin näkymään mikrofoni on kytketty. Viritin ja diagnostiikka eivät koskaan anna vastauksia. */
  setView(i) {
    i !== this.state.view && (i === "tuner" && (this.tunerEngine.reset(), this.tunerEngine.setTarget(this.state.tunerTarget)), this.open && this.audio.rearm(), this.set({ view: i, tuner: null, ...i === "check" && this.state.check === "waiting" && !this.state.calibrating ? { notice: Rc() } : {} }));
  }
  setTunerTarget(i) {
    this.tunerEngine.setTarget(i), this.set({ tunerTarget: i });
  }
  /** Taustakohinan mittaus: äänikynnys mitatun kohinan mukaan (sama menetelmä kuin Kitaraharjoittelijassa). */
  calibrate() {
    this.isOn && this.startCalibration();
  }
  startCalibration() {
    this.calibration = { start: this.clock(), samples: [] }, this.set({ calibrating: !0, notice: { tone: "info", text: "Pidä kielet hiljaa hetki: mitataan taustakohinaa…" } });
  }
  finishCalibration(i) {
    this.calibration = null;
    const l = Fh(i), u = l.loud ? Qn.minRms : l.threshold;
    this.audio.setMinRms(u), this.audio.rearm(), this.set({ calibrating: !1, minRms: u, noise: l, notice: l.loud ? { tone: "bad", text: "Taustalla kuului ääntä mittauksen aikana. Käytössä on oletuskynnys. Vaimenna kielet ja mittaa uudelleen." } : this.state.view === "check" && this.state.check === "waiting" ? Rc() : null });
  }
  // ---- mallisoiton suojaus ----
  /** Malli alkaa soida: analyysi tauolle, jotta kaiuttimen ääni ei vastaa käyttäjän puolesta. */
  muteForOutput() {
    this.open && (this.cancelSettle(), this.audio.pauseAnalysis(), this.set({ muted: "model" }));
  }
  /**
   * Malli loppui: analyysi jatkuu, mutta näppäilyt välitetään vasta, kun kaiuttimen häntä on vaimentunut
   * (OutputSettler) tai viimeistään aikarajan jälkeen. Näppäilytunnistin nollataan.
   */
  unmuteAfterOutput() {
    if (!this.open || this.state.muted === null) {
      this.state.muted !== null && this.set({ muted: null });
      return;
    }
    this.audio.resumeAnalysis(), this.settler.start(this.clock()), this.set({ muted: "settling" });
    const i = this.session;
    this.settleTimer = setTimeout(() => {
      i === this.session && this.state.muted === "settling" && this.endSettle();
    }, this.settler.maxMs + 200);
  }
  endSettle() {
    this.cancelSettle(), this.open && this.audio.rearm(), this.set({ muted: null });
  }
  cancelSettle() {
    clearTimeout(this.settleTimer), this.settleTimer = void 0, this.settler.cancel();
  }
  /** Soimaan jäänyt ääni ei vastaa: seuraava näppäily vaatii uuden alukkeen tai vaimennuksen. */
  rearm() {
    this.open && this.audio.rearm();
  }
  // ---- mikrofonin tapahtumat ----
  frame(i, l) {
    const u = this.clock(), d = { status: i.status, midi: i.status === "pitch" || i.status === "off-pitch" ? i.midi : void 0 }, h = this.state.heard;
    (!h || h.status !== d.status || h.midi !== d.midi) && this.set({ heard: d }), this.calibration && (this.calibration.samples.push(i.rms), u - this.calibration.start >= jp && this.finishCalibration(this.calibration.samples)), this.state.muted === "settling" && this.settler.feed(i.status === "silent", u) !== "settling" && this.endSettle();
    const v = this.state.view, y = v === "tuner" ? this.tunerEngine.feed(i, u) : null, j = v === "diagnostics" || v === "check";
    (y || j) && u - this.lastView >= Ep && (this.lastView = u, this.set({ ...y ? { tuner: y } : {}, ...j ? { diag: { frame: i, pluck: l, minRms: this.state.minRms, routed: this.routed } } : {} })), v === "practice" && this.listening && this.onFrame(i, l, u);
  }
  route(i, l) {
    this.routed = { count: this.routed.count + 1, last: { midi: i.midi, at: i.timestamp, route: l } }, this.state.diag && this.set({ diag: { ...this.state.diag, routed: this.routed } });
  }
  stable(i) {
    if (this.state.calibrating || this.state.muted !== null) {
      this.route(i, "not-routed");
      return;
    }
    if (this.state.view === "check") {
      this.route(i, "check");
      const l = i.midi === Ts;
      this.set({ check: l ? "ok" : "other", notice: l ? { tone: "good", text: `Kuulin ${ke(i.midi)}. Mikrofoni toimii.` } : { tone: "info", text: `Kuulin ${ke(i.midi)}. Mikrofoni toimii, mutta testisävel on ${ke(Ts)}: vapaa B-kieli, toiseksi ohuin kieli. Tarkista tarvittaessa viritys.` } });
      return;
    }
    if (this.state.view !== "practice") {
      this.route(i, "not-routed");
      return;
    }
    this.route(i, this.onPluck(i) ? "practice" : "not-routed");
  }
}
const Rc = () => ({ tone: "info", text: `Soita vapaa B-kieli (${ke(Ts)}) ja anna sen soida hetki.` }), Np = 450, Tp = 700;
class Mp {
  constructor(i, l, u) {
    this.audio = i, this.mic = l, this.store = u;
    const d = Ve[0].riffs[0];
    this.checker = new ja(d.midi, this.round, "mic"), this.state = {
      view: "home",
      level: Ve[0],
      riff: d,
      riffNumber: 1,
      step: "listen",
      panel: null,
      modelPlaying: !1,
      playing: null,
      modelError: "",
      ...this.freshAttempt(d),
      progress: this.progressCopy()
    }, l.onPluck = (h) => this.pluck(h), l.onFrame = (h, v, y) => this.frame(h, v, y);
  }
  audio;
  mic;
  store;
  state;
  listeners = /* @__PURE__ */ new Set();
  op = 0;
  round = 0;
  checker;
  unsure = null;
  repeatSince = null;
  repeatShown = -1;
  subscribe = (i) => (this.listeners.add(i), () => {
    this.listeners.delete(i);
  });
  getState = () => this.state;
  set(i) {
    this.state = { ...this.state, ...i }, this.listeners.forEach((l) => l());
  }
  progressCopy() {
    const i = this.store.data.practice;
    return { marked: { ...i.marked }, heard: { ...i.heard }, last: i.last && { ...i.last } };
  }
  /** Vanhan mikrofonipelin läpäistyt riffit: näytetään erikseen, ei harjoituskuittauksina. */
  legacyMicPasses() {
    return Object.values(this.store.data.stats.mic).filter((i) => (i.passed ?? 0) > 0).length;
  }
  // ---- navigointi ----
  /** Harjoitusten valikko. Malli pysähtyy; mikrofoni saa jäädä auki. */
  home() {
    this.stopModel(), this.mic.setView("practice"), this.set({ view: "home", panel: null, progress: this.progressCopy() });
  }
  /** Avaa riffin. Uusi riffi aloittaa uuden muistista-kierroksen; saman riffin avaus säilyttää sen. */
  openRiff(i, l = "listen") {
    const u = Hc(i);
    if (!u) return;
    this.stopModel();
    const d = u.riff.id === this.state.riff.id;
    d || this.newAttempt(u.riff), this.store.setPracticeLast(u.riff.id, l), this.mic.setView("practice"), this.mic.rearm(), this.set({
      view: "riff",
      level: u.level,
      riff: u.riff,
      riffNumber: u.number,
      step: l,
      panel: null,
      modelError: "",
      ...d ? {} : this.freshAttempt(u.riff),
      progress: this.progressCopy()
    });
  }
  /** Jatka viimeksi harjoiteltua, tai aloita ensimmäisestä. */
  continueLast() {
    const i = this.store.data.practice.last;
    this.openRiff(i?.riff ?? Wt[0].id, i?.step ?? "listen");
  }
  /** Siirry riffijärjestyksessä eteen- tai taaksepäin (kotitreenien yli). Ei vaadi läpäisyä. */
  moveRiff(i) {
    const l = Wt.findIndex((u) => u.id === this.state.riff.id) + i;
    l >= 0 && l < Wt.length && this.openRiff(Wt[l].id, "listen");
  }
  /** Vaihe vaihtuu vapaasti. Muistista-kierroksen eteneminen ja kuitattu tila säilyvät. */
  setStep(i) {
    i !== this.state.step && (this.mic.rearm(), this.store.setPracticeLast(this.state.riff.id, i), this.unsure = null, this.set({ step: i, last: null, feedback: i === "recall" ? this.state.feedback : null }));
  }
  // ---- mikrofoni ja työkalut ----
  /** Avaa paneelin. Mikrofonin lupa pyydetään vasta tästä valinnasta. */
  openPanel(i) {
    this.stopModel(), this.set({ panel: i }), this.mic.setView(i === "mic" ? "check" : i), !this.mic.isOn && this.mic.getState().status !== "permission" && this.mic.start();
  }
  closePanel() {
    this.mic.setView("practice"), this.set({ panel: null });
  }
  /** Sulje mikrofoni: harjoittelu jatkuu ilman automaattista arviointia. */
  closeMic() {
    this.mic.stop("user"), this.state.panel && this.closePanel();
  }
  // ---- kuuntelu ----
  /** Kuuntele malli / Pysäytä (sama painike). Ei nollaa mitään. */
  listen() {
    if (this.state.modelPlaying) {
      this.stopModel();
      return;
    }
    this.playModel();
  }
  async playModel() {
    const i = ++this.op;
    this.audio.stopModel(), this.mic.muteForOutput(), this.set({ modelPlaying: !0, playing: null, modelError: "" });
    try {
      const l = await this.audio.playModel(this.state.riff.midi, (u) => {
        i === this.op && this.set({ playing: u });
      });
      if (i !== this.op || !l) return;
    } catch (l) {
      if (i !== this.op) return;
      this.set({ modelError: Dc(l) });
    }
    this.set({ modelPlaying: !1, playing: null }), this.mic.unmuteAfterOutput();
  }
  stopModel() {
    this.state.modelPlaying && (++this.op, this.audio.stopModel(), this.set({ modelPlaying: !1, playing: null }), this.mic.unmuteAfterOutput());
  }
  /** Otelaudan painallus Kuuntele- ja Opettele-vaiheissa: soittaa sävelen. Ei koskaan arvioida. */
  tap(i) {
    return this.state.view !== "riff" || this.state.step === "recall" || this.state.modelPlaying ? !1 : (this.audio.pluck(i), !0);
  }
  // ---- Kokeile muistista ----
  /** Aloita alusta: uusi kierros samalla riffillä. */
  restartRecall() {
    this.newAttempt(this.state.riff), this.mic.rearm(), this.set({ ...this.freshAttempt(this.state.riff), feedback: { tone: "info", text: "Uusi kierros: soita riffi alusta." } });
  }
  /** Vihje pyynnöstä: seuraava odotettu sävel ja sen ehdotettu paikka. Ei rangaistusta. */
  showNextHint() {
    const i = this.state.index;
    if (this.state.step !== "recall" || this.state.complete) return;
    const l = this.state.riff.spots[i];
    this.set({ nextHint: !0, feedback: { tone: "hint", text: `Seuraava sävel (${i + 1}/${this.state.riff.midi.length}): ${ke(this.state.riff.midi[i])} – ${Ma(l)}.` } });
  }
  /** Ilman mikrofonia: näytä tai piilota riffin sävelet oman soiton tarkistamiseksi. */
  toggleReveal() {
    this.state.step === "recall" && this.set({ revealed: !this.state.revealed });
  }
  newAttempt(i) {
    this.checker = new ja(i.midi, ++this.round, "mic"), this.unsure = null, this.repeatSince = null, this.repeatShown = -1;
  }
  freshAttempt(i) {
    return { found: i.midi.map(() => !1), index: 0, complete: !1, nextHint: !1, revealed: !1, last: null, feedback: null };
  }
  /** Itse kuittaus: riffi on harjoiteltu. Ei vaadi mikrofonia eikä virheetöntä soittoa. Voi perua. */
  toggleMarked() {
    const i = this.state.riff.id;
    this.store.setMarked(i, !(i in this.store.data.practice.marked)), this.set({ progress: this.progressCopy() });
  }
  /** Välilehti taustalle: malli pysähtyy ja mikrofoni suljetaan. Harjoituksen tila säilyy. */
  hidden() {
    (this.mic.isOn || this.mic.getState().status === "permission") && this.mic.stop("background"), this.stopModel();
  }
  dispose() {
    ++this.op, this.audio.stopModel(), this.mic.stop("user");
  }
  // ---- mikrofonin tapahtumat ----
  pluck(i) {
    const l = this.state;
    if (l.view !== "riff" || l.panel !== null || l.modelPlaying) return !1;
    if (this.unsure = null, l.step !== "recall" || l.complete)
      return this.set({ last: { midi: i.midi, verdict: "free" } }), !0;
    const u = this.checker.feed({ midi: i.midi, round: this.checker.round, input: "mic" }), d = l.riff.midi.length;
    if (u.type === "accepted") {
      const h = l.found.map((v, y) => v || y === u.index);
      return u.complete ? (this.store.addHeard(l.riff.id), this.set({
        found: h,
        index: u.index + 1,
        complete: !0,
        nextHint: !1,
        last: { midi: i.midi, verdict: "right" },
        progress: this.progressCopy(),
        feedback: { tone: "done", text: `Mikrofoni kuuli koko riffin oikeassa järjestyksessä: ${l.riff.midi.map(ke).join(" – ")}. Voit soittaa uudelleen, kuitata riffin harjoitelluksi tai siirtyä seuraavaan.` }
      })) : this.set({
        found: h,
        index: u.index + 1,
        nextHint: !1,
        last: { midi: i.midi, verdict: "right" },
        feedback: { tone: "good", text: `${ke(i.midi)} – oikea sävel oikeassa kohdassa (${u.index + 1}/${d}).` }
      }), !0;
    }
    return u.type === "wrong" ? (this.set({ last: { midi: i.midi, verdict: u.octave ? "octave" : "wrong" }, feedback: u.octave ? { tone: "near", text: `Kuulin ${ke(i.midi)}: sävelnimi on oikea, mutta korkeus on eri oktaavissa. Kokeile toista nauhaa tai kieltä. Mikrofoni voi myös kuulla ylä-äänen – jos soitit mielestäsi oikein, näppää uudelleen.` } : { tone: "info", text: `Kuulin ${ke(i.midi)}. Tähän kohtaan (${u.index + 1}/${d}) kuuluu toinen sävel. Kokeile uudelleen, kuuntele malli tai pyydä vihje.` } }), !0) : !1;
  }
  /**
   * Analyysikehykset: epävarma tunnistus ja toistuva sama sävel. Kumpikaan ei ole virhe; ne kertovat,
   * miksi soitto ei (vielä) tunnistunut.
   */
  frame(i, l, u) {
    const d = this.state;
    if (d.view !== "riff" || d.panel !== null || d.modelPlaying || d.step === "listen") return;
    const h = i.rms >= this.mic.getState().minRms;
    h && (i.status === "unclear" || i.status === "off-pitch") ? (this.unsure ??= { since: u, shown: !1 }, !this.unsure.shown && u - this.unsure.since >= Np && (this.unsure.shown = !0, this.set({ feedback: { tone: "uncertain", text: i.status === "off-pitch" && i.midi !== void 0 ? `Epävarma tunnistus: lähin sävel on ${ke(i.midi)}, mutta vire on yli 35 senttiä sivussa. Tätä ei arvioida – tarkista viritys virittimellä.` : "Epävarma tunnistus: kuulen ääntä, mutta selvää säveltä ei löydy. Syynä voi olla useampi soiva kieli, taustamelu tai hiljainen soitto. Tätä ei lasketa virheeksi – soita yksi kieli kerrallaan ja anna sen soida hetki." } }))) : (!h || i.status === "pitch") && (this.unsure = null);
    const v = this.checker.next;
    if (!(d.step === "recall" && !d.complete && v !== null && l.reason === "waiting-new-pluck" && l.last?.midi === v && d.index > 0 && d.riff.midi[d.index - 1] === v)) {
      this.repeatSince = null;
      return;
    }
    this.repeatSince ??= u, this.repeatShown !== d.index && u - this.repeatSince >= Tp && (this.repeatShown = d.index, this.set({ feedback: { tone: "hint", text: "Sama sävel soi yhä. Toistuvaa säveltä varten vaimenna kieli hetkeksi kämmenellä tai sormella ja näppää sitten uudelleen." } }));
  }
}
const Sr = (o, i = 1) => o.toFixed(i).replace(".", ","), yr = (o) => {
  const i = Math.round(Es(o));
  return `${i < 0 ? "−" : ""}${Math.abs(i)} dB`;
}, qc = (o) => (o > 0 ? "+" : o < 0 ? "−" : "±") + Sr(Math.abs(o), 0);
function Cp({ s: o, mic: i }) {
  const l = o.devices.some((u) => u.id === o.device);
  return /* @__PURE__ */ c.jsxs("div", { className: "riff-device", children: [
    /* @__PURE__ */ c.jsx("label", { htmlFor: "riff-device", children: "Äänitulo" }),
    /* @__PURE__ */ c.jsxs("select", { id: "riff-device", value: l || !o.device ? o.device : "", onChange: (u) => i.setDevice(u.target.value), children: [
      /* @__PURE__ */ c.jsx("option", { value: "", children: "Järjestelmän oletus" }),
      o.devices.map((u) => /* @__PURE__ */ c.jsx("option", { value: u.id, children: u.label }, u.id))
    ] }),
    /* @__PURE__ */ c.jsxs("p", { className: "riff-help", "data-testid": "mic-device", children: [
      o.micInfo ? /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
        "Käytössä: ",
        /* @__PURE__ */ c.jsx("strong", { children: o.micInfo.label || "nimetön äänitulo" }),
        " · ",
        o.micInfo.channels,
        " ",
        o.micInfo.channels === 1 ? "kanava" : "kanavaa",
        " · ",
        Sr(o.micInfo.sampleRate / 1e3, 1),
        " kHz"
      ] }) : "Mikrofoni ei ole auki.",
      o.micInfo?.fallback && /* @__PURE__ */ c.jsx(c.Fragment, { children: " · Valittua laitetta ei löytynyt, joten käytössä on järjestelmän oletus." })
    ] }),
    !o.devices.length && o.micInfo && /* @__PURE__ */ c.jsx("p", { className: "riff-help", children: "Selain ei ilmoittanut laitteita. Valitse laite tarvittaessa järjestelmän ääniasetuksista ja valitse sitten ”Järjestelmän oletus” uudelleen." })
  ] });
}
const Rp = {
  silent: "Taso on äänikynnyksen alapuolella.",
  unclear: "Ääntä tulee, mutta selkeää sävelkorkeutta ei löydy (selkeys alle 94 %).",
  "out-of-range": "Taajuus on kitaran alueen ulkopuolella.",
  "off-pitch": "Sävel tunnistettiin, mutta se on yli ±35 senttiä vireestä.",
  pitch: "Sävelkorkeus tunnistettu."
}, Pc = {
  silent: "Ei ääntä kynnyksen yläpuolella.",
  unclear: "Ei selkeää säveltä.",
  "out-of-range": "Taajuus alueen ulkopuolella.",
  "off-pitch": "Liian epävireinen.",
  "waiting-new-pluck": "Sama sävel soi yhä: odotetaan uutta näppäystä tai lyhyttä vaimennusta.",
  harmonic: "Edellisen sävelen ylä-ääni tai oktaavi: ei uusi näppäily ilman uutta aluketta.",
  "too-quiet-for-change": "Eri sävel, mutta liian hiljainen (myötäresonanssi?): ei uusi näppäily ilman aluketta.",
  stabilizing: "Sävel vakautuu."
}, Lc = { quiet: "hiljaisuuden jälkeen", onset: "uusi aluke", "pitch-change": "sävelen vaihto" }, Pp = { practice: "harjoitukseen", check: "mikrofonitestiin", "not-routed": "ei välitetty (ei kuunteluvuoroa)" };
function Lp({ s: o }) {
  const i = o.diag;
  if (!i) return /* @__PURE__ */ c.jsx("p", { className: "riff-help", "data-testid": "diag", children: "Odotetaan mikrofonin ensimmäisiä analyysitietoja…" });
  const l = i.frame, u = i.pluck, d = l.rms >= i.minRms, h = Math.max(0, Math.min(100, (Es(l.rms) + 60) / 60 * 100)), v = Math.max(0, Math.min(100, (Es(i.minRms) + 60) / 60 * 100)), y = (j, _, N, S) => /* @__PURE__ */ c.jsxs("li", { className: j ? "ok" : "no", "data-testid": `diag-${S}`, children: [
    /* @__PURE__ */ c.jsxs("strong", { children: [
      /* @__PURE__ */ c.jsx("span", { "aria-hidden": "true", children: j ? "●" : "○" }),
      " ",
      _
    ] }),
    /* @__PURE__ */ c.jsx("span", { children: N })
  ] });
  return /* @__PURE__ */ c.jsxs("div", { className: "riff-diag", "data-testid": "diag", children: [
    /* @__PURE__ */ c.jsxs("div", { className: "riff-meter", role: "meter", "aria-label": "Äänitaso", "aria-valuemin": -60, "aria-valuemax": 0, "aria-valuenow": Math.round(Es(l.rms)), children: [
      /* @__PURE__ */ c.jsx("span", { className: "fill", style: { width: h + "%" } }),
      /* @__PURE__ */ c.jsx("span", { className: "threshold", style: { left: v + "%" }, title: "Äänikynnys" })
    ] }),
    /* @__PURE__ */ c.jsxs("ol", { className: "riff-stages", children: [
      y(d, "1. Ääntä mikrofonista", /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
        yr(l.rms),
        " (kynnys ",
        yr(i.minRms),
        ")",
        l.levels.length > 1 ? ` · kanavat ${l.levels.map(yr).join(" / ")}, analysoidaan kanavaa ${l.channel + 1}` : "",
        l.peak > 0.98 ? " · leikkautuu: pienennä gainia" : ""
      ] }), "level"),
      y(l.status === "pitch" || l.status === "off-pitch", "2. Sävelkorkeus", l.frequency ? /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
        Sr(l.frequency),
        " Hz · ",
        l.midi !== void 0 ? `${ke(l.midi)} (MIDI ${l.midi})` : "–",
        " · ",
        l.cents !== void 0 ? `${qc(l.cents)} snt` : "",
        " · selkeys ",
        Math.round((l.clarity ?? 0) * 100),
        " %"
      ] }) : /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
        Rp[l.status],
        l.clarity ? ` Selkeys ${Math.round(l.clarity * 100)} %.` : ""
      ] }), "pitch"),
      y(
        !!u.candidate && u.reason === "stabilizing" || !!u.last && u.reason === null,
        "3. Vakaa sävel",
        u.candidate ? /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
          ke(u.candidate.midi),
          ": ",
          Math.round(u.candidate.heldMs),
          " / 240 ms"
        ] }) : u.reason ? Pc[u.reason] : "–",
        "stable"
      ),
      y(u.armed, "4. Uusi näppäily", /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
        u.armed ? `Valmis hyväksymään (${Lc[u.armedBy]}).` : u.reason ? Pc[u.reason] : "Odotetaan uutta näppäystä.",
        u.last && /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
          " Viimeisin: ",
          /* @__PURE__ */ c.jsx("strong", { children: ke(u.last.midi) }),
          " (",
          Lc[u.last.armedBy],
          "), näppäilyjä ",
          u.count,
          "."
        ] })
      ] }), "pluck"),
      y(i.routed.last?.route === "practice" || i.routed.last?.route === "check", "5. Välitetty harjoitukselle", i.routed.last ? /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
        ke(i.routed.last.midi),
        " → ",
        Pp[i.routed.last.route],
        " · yhteensä ",
        i.routed.count
      ] }) : "Ei vielä näppäilyjä.", "routed")
    ] }),
    /* @__PURE__ */ c.jsxs("p", { className: "riff-help", children: [
      "Taustakohina ",
      o.noise ? `${yr(o.noise.noise)} → äänikynnys ${yr(o.minRms)}` : `ei mitattu, oletuskynnys ${yr(o.minRms)}`,
      ". Diagnostiikka ei lähetä mitään harjoitukseen."
    ] })
  ] });
}
const Ap = {
  "no-signal": "Näppää kieli ja anna sen soida.",
  unreliable: "Epävarma havainto – näppää kieli uudelleen ja anna soida. Viritysohjetta ei anneta.",
  far: "",
  flat: "Liian matala – kiristä kieltä hieman.",
  "in-tune": "Vireessä!",
  sharp: "Liian korkea – löysää kieltä hieman."
};
function Ip({ s: o, mic: i }) {
  const l = o.tuner, u = l?.cents ?? 0, d = l && ["flat", "in-tune", "sharp"].includes(l.status), h = 50 + Math.max(-50, Math.min(50, u));
  return /* @__PURE__ */ c.jsxs("div", { className: "riff-tuner", "data-testid": "tuner", children: [
    /* @__PURE__ */ c.jsxs("fieldset", { className: "riff-strings", children: [
      /* @__PURE__ */ c.jsx("legend", { children: "Kieli" }),
      /* @__PURE__ */ c.jsx("button", { type: "button", "aria-pressed": o.tunerTarget === null, onClick: () => i.setTunerTarget(null), children: "Auto" }),
      Cs.map((v) => /* @__PURE__ */ c.jsxs("button", { type: "button", "aria-pressed": o.tunerTarget === v.midi, onClick: () => i.setTunerTarget(v.midi), children: [
        /* @__PURE__ */ c.jsx("strong", { children: v.name }),
        /* @__PURE__ */ c.jsxs("small", { children: [
          v.number,
          ". kieli"
        ] })
      ] }, v.midi))
    ] }),
    /* @__PURE__ */ c.jsxs("div", { className: `riff-tuner-readout ${l?.status ?? "no-signal"}`, role: "status", "data-testid": "tuner-status", "data-status": l?.status ?? "no-signal", children: [
      /* @__PURE__ */ c.jsx("p", { className: "target", children: l ? /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
        "Tavoite ",
        /* @__PURE__ */ c.jsx("strong", { children: l.target.name }),
        " (",
        Sr(440 * 2 ** ((l.target.midi - 69) / 12), 2),
        " Hz)",
        l.auto ? ", valittu automaattisesti" : ""
      ] }) : "Näppää kieli." }),
      /* @__PURE__ */ c.jsx("p", { className: "value", "data-testid": "tuner-cents", children: d ? `${qc(u)} senttiä` : "–" }),
      /* @__PURE__ */ c.jsxs("div", { className: "riff-tuner-scale", "aria-hidden": "true", children: [
        /* @__PURE__ */ c.jsx("span", { className: "zone", style: { left: `${50 - _s}%`, width: `${_s * 2}%` } }),
        d && /* @__PURE__ */ c.jsx("span", { className: "needle", style: { left: h + "%" } }),
        /* @__PURE__ */ c.jsx("span", { className: "label left", children: "−50" }),
        /* @__PURE__ */ c.jsx("span", { className: "label mid", children: "0" }),
        /* @__PURE__ */ c.jsx("span", { className: "label right", children: "+50" })
      ] }),
      /* @__PURE__ */ c.jsx("p", { className: "advice", "data-testid": "tuner-advice", children: l?.status === "far" && l.heardMidi !== void 0 ? `Kuulen ${ke(l.heardMidi)} (${Sr(l.frequency)} Hz), mikä on yli puolisävelaskeleen päässä kielestä ${l.target.name}. Tarkista, että soitat oikeaa kieltä.` : Ap[l?.status ?? "no-signal"] }),
      l?.frequency && l.status !== "far" && /* @__PURE__ */ c.jsxs("p", { className: "riff-help", "data-testid": "tuner-frequency", children: [
        "Mitattu ",
        Sr(l.frequency, 2),
        " Hz",
        l.heardMidi !== void 0 ? ` · lähin sävel ${ke(l.heardMidi)}` : ""
      ] })
    ] }),
    /* @__PURE__ */ c.jsxs("p", { className: "riff-help", children: [
      "A4 = 440 Hz. Vihreä alue on ±",
      _s,
      " senttiä. Viritin käyttää samaa sävelentunnistusta kuin harjoitus, mutta sen lukemat eivät koskaan mene harjoitukseen."
    ] })
  ] });
}
const Xc = {
  user: "",
  background: "Mikrofoni suljettiin, koska välilehti siirtyi taustalle.",
  "mic-lost": "Yhteys mikrofoniin katkesi (laite irrotettiin tai selain pysäytti äänen). Tarkista laite."
};
function Yc(o) {
  if (o.calibrating) return "mittaa taustakohinaa";
  if (o.muted === "model") return "tauolla mallin ajan";
  if (o.muted === "settling") return "odottaa, että malli hiljenee";
  const i = o.heard;
  return i ? i.status === "silent" ? "alle äänikynnyksen" : i.status === "pitch" && i.midi !== void 0 ? ke(i.midi) : i.status === "off-pitch" && i.midi !== void 0 ? `${ke(i.midi)}, epävireinen` : "ääntä, ei selvää säveltä" : "ei vielä analyysia";
}
function bc({ m: o, practice: i }) {
  const l = o.closed ? Xc[o.closed] : "";
  return /* @__PURE__ */ c.jsxs("div", { className: `riff-micbar ${o.status}`, "data-testid": "mic-bar", children: [
    o.status === "on" && /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
      /* @__PURE__ */ c.jsxs("p", { className: "riff-mic-line", children: [
        /* @__PURE__ */ c.jsx("strong", { children: "Mikrofoni käytössä" }),
        " · ",
        o.micInfo?.label || "äänitulo"
      ] }),
      /* @__PURE__ */ c.jsxs("p", { className: "riff-heard", children: [
        "Mikrofoni kuulee: ",
        /* @__PURE__ */ c.jsx("strong", { "data-testid": "heard", children: Yc(o) })
      ] }),
      /* @__PURE__ */ c.jsxs("div", { className: "riff-actions compact", children: [
        /* @__PURE__ */ c.jsx("button", { type: "button", onClick: () => i.openPanel("mic"), children: "Mikrofoni ja viritys" }),
        /* @__PURE__ */ c.jsx("button", { type: "button", onClick: () => i.closeMic(), children: "Sulje mikrofoni" })
      ] })
    ] }),
    o.status === "permission" && /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
      /* @__PURE__ */ c.jsx("p", { className: "riff-status", role: "status", children: "Pyydetään mikrofonilupaa…" }),
      /* @__PURE__ */ c.jsx("p", { className: "riff-help", children: "Salli mikrofoni selaimen kysymyksestä. Voit myös harjoitella ilman mikrofonia." }),
      /* @__PURE__ */ c.jsx("div", { className: "riff-actions compact", children: /* @__PURE__ */ c.jsx("button", { type: "button", onClick: () => i.closeMic(), children: "Jatka ilman mikrofonia" }) })
    ] }),
    o.status === "error" && /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
      /* @__PURE__ */ c.jsx("p", { className: "riff-status bad", role: "alert", "data-testid": "riff-error", children: o.error }),
      /* @__PURE__ */ c.jsxs("div", { className: "riff-actions compact", children: [
        /* @__PURE__ */ c.jsx("button", { type: "button", onClick: () => i.openPanel("mic"), children: "Yritä mikrofonia uudelleen" }),
        /* @__PURE__ */ c.jsx("button", { type: "button", onClick: () => i.closeMic(), children: "Jatka ilman mikrofonia" })
      ] })
    ] }),
    o.status === "off" && /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
      l && /* @__PURE__ */ c.jsx("p", { className: "riff-status bad", role: "status", "data-testid": "mic-closed", children: l }),
      /* @__PURE__ */ c.jsxs("p", { className: "riff-mic-line", children: [
        /* @__PURE__ */ c.jsx("strong", { children: "Mikrofoni ei ole käytössä." }),
        " Voit harjoitella ilman sitä: kuuntele, opettele ja tarkista soittosi korvalla."
      ] }),
      /* @__PURE__ */ c.jsxs("div", { className: "riff-actions compact", children: [
        /* @__PURE__ */ c.jsx("button", { type: "button", onClick: () => i.openPanel("mic"), children: o.closed ? "Ota mikrofoni uudelleen käyttöön" : "Ota mikrofoni käyttöön" }),
        /* @__PURE__ */ c.jsx("button", { type: "button", onClick: () => i.openPanel("tuner"), children: "Viritin" })
      ] })
    ] })
  ] });
}
const Fp = { mic: "Mikrofonin valmistelu", tuner: "Viritin", diagnostics: "Mikrofonin diagnostiikka" };
function $p({ m: o, mic: i, practice: l, panel: u, headingRef: d }) {
  return /* @__PURE__ */ c.jsxs("div", { className: "riff-panel", "data-testid": u === "mic" ? "mic-setup" : "tools", children: [
    /* @__PURE__ */ c.jsx("h2", { tabIndex: -1, ref: d, children: Fp[u] }),
    /* @__PURE__ */ c.jsx("div", { className: "riff-tools-switch", role: "group", "aria-label": "Mikrofonin työkalut", children: ["mic", "tuner", "diagnostics"].map((h) => /* @__PURE__ */ c.jsx("button", { type: "button", "aria-pressed": u === h, onClick: () => l.openPanel(h), children: h === "mic" ? "Valmistelu" : h === "tuner" ? "Viritin" : "Diagnostiikka" }, h)) }),
    o.status === "permission" && /* @__PURE__ */ c.jsx("p", { className: "riff-status", role: "status", children: "Pyydetään mikrofonilupaa… Salli mikrofoni selaimen kysymyksestä." }),
    o.status === "error" && /* @__PURE__ */ c.jsx("p", { className: "riff-status bad", role: "alert", "data-testid": "riff-error", children: o.error }),
    o.status === "off" && /* @__PURE__ */ c.jsxs("p", { className: "riff-status", role: "status", children: [
      o.closed && o.closed !== "user" ? Xc[o.closed] + " " : "",
      "Mikrofoni ei ole auki."
    ] }),
    (o.status === "error" || o.status === "off") && /* @__PURE__ */ c.jsx("div", { className: "riff-actions", children: /* @__PURE__ */ c.jsx("button", { type: "button", className: "primary", onClick: () => {
      i.start();
    }, children: "Avaa mikrofoni" }) }),
    /* @__PURE__ */ c.jsx(Cp, { s: o, mic: i }),
    o.calibrating && /* @__PURE__ */ c.jsx("p", { className: "riff-status", role: "status", "data-testid": "calibrating", children: "Pidä kielet hiljaa hetki: mitataan taustakohinaa…" }),
    u === "mic" && /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
      /* @__PURE__ */ c.jsx("h3", { children: "Mikrofonin testi" }),
      !o.calibrating && /* @__PURE__ */ c.jsxs("p", { children: [
        "Soita ",
        /* @__PURE__ */ c.jsxs("strong", { children: [
          "vapaa B-kieli (",
          ke(Ts),
          ")"
        ] }),
        ", toiseksi ohuin kieli, ja anna sen soida hetki. Testi on vapaaehtoinen."
      ] }),
      /* @__PURE__ */ c.jsxs("p", { className: "riff-heard", children: [
        "Mikrofoni kuulee: ",
        /* @__PURE__ */ c.jsx("strong", { "data-testid": "heard", children: o.status === "on" ? Yc(o) : "mikrofoni ei ole auki" })
      ] }),
      o.notice && !o.calibrating && /* @__PURE__ */ c.jsx("p", { className: `riff-feedback ${o.notice.tone}`, role: "status", "data-testid": "feedback", children: o.notice.text })
    ] }),
    u !== "mic" && o.notice && !o.calibrating && o.notice.tone === "bad" && /* @__PURE__ */ c.jsx("p", { className: "riff-feedback bad", role: "status", children: o.notice.text }),
    u === "tuner" && /* @__PURE__ */ c.jsx(Ip, { s: o, mic: i }),
    u === "diagnostics" && /* @__PURE__ */ c.jsx(Lp, { s: o }),
    /* @__PURE__ */ c.jsxs("div", { className: "riff-actions", children: [
      /* @__PURE__ */ c.jsx("button", { type: "button", className: "primary", onClick: () => l.closePanel(), children: o.status === "on" ? "Valmis – takaisin harjoitukseen" : "Takaisin harjoitukseen" }),
      o.status === "on" && /* @__PURE__ */ c.jsx("button", { type: "button", onClick: () => i.calibrate(), disabled: o.calibrating, children: "Mittaa taustakohina uudelleen" }),
      o.status === "on" && /* @__PURE__ */ c.jsx("button", { type: "button", onClick: () => l.closeMic(), children: "Sulje mikrofoni" })
    ] }),
    /* @__PURE__ */ c.jsxs("details", { className: "riff-limits", children: [
      /* @__PURE__ */ c.jsx("summary", { children: "Mitä mikrofoni tunnistaa – ja mitä ei" }),
      /* @__PURE__ */ c.jsxs("ul", { children: [
        /* @__PURE__ */ c.jsxs("li", { children: [
          "Mikrofoni kuulee vain ",
          /* @__PURE__ */ c.jsx("strong", { children: "sävelkorkeuden" }),
          ". Se ei tunnista, miltä kieleltä tai millä sormella soitat."
        ] }),
        /* @__PURE__ */ c.jsx("li", { children: "Soita yksi kieli kerrallaan. Yhtä aikaa soivat kielet ja pitkään soimaan jäävät kielet sotkevat tunnistusta – vaimenna tarvittaessa." }),
        /* @__PURE__ */ c.jsx("li", { children: "Sama sävel kahdesti: vaimenna kieli hetkeksi välissä, jotta toinen näppäys erottuu." }),
        /* @__PURE__ */ c.jsx("li", { children: "Matalat kielet ja ylä-äänet voivat näkyä oktaavin eri sävelenä. Siitä kerrotaan erikseen, eikä sitä lasketa virheeksi." }),
        /* @__PURE__ */ c.jsx("li", { children: "Hiljainen soitto, taustamelu, kannettavan sisäinen mikrofoni ja vahvistamaton sähkökitara heikentävät tunnistusta. Äänikortin soitintulo tai lähellä oleva mikrofoni toimii parhaiten." }),
        /* @__PURE__ */ c.jsx("li", { children: "Mallin ääni kaiuttimesta ei vastaa puolestasi: kuuntelu on tauolla mallin ajan. Kuulokkeet auttavat silti." }),
        /* @__PURE__ */ c.jsx("li", { children: "Ääntä ei tallenneta eikä lähetetä mihinkään. Analyysi tehdään vain tässä selaimessa." })
      ] })
    ] })
  ] });
}
const Jc = { listen: "Kuuntele", learn: "Opettele", recall: "Kokeile muistista" };
function zp({ s: o, practice: i }) {
  return /* @__PURE__ */ c.jsx("nav", { className: "riff-steps", "aria-label": "Harjoittelun vaiheet", children: /* @__PURE__ */ c.jsx("ol", { children: ["listen", "learn", "recall"].map((l, u) => /* @__PURE__ */ c.jsx("li", { children: /* @__PURE__ */ c.jsxs("button", { type: "button", "aria-current": o.step === l ? "step" : void 0, onClick: () => i.setStep(l), children: [
    /* @__PURE__ */ c.jsx("span", { className: "riff-step-number", "aria-hidden": "true", children: u + 1 }),
    " ",
    Jc[l],
    l === "recall" && o.index > 0 && /* @__PURE__ */ c.jsxs("span", { className: "riff-step-progress", children: [
      " · ",
      o.index,
      "/",
      o.riff.midi.length
    ] })
  ] }) }, l)) }) });
}
function Op(o, i) {
  return o.riff.midi.map((l, u) => {
    const d = o.modelPlaying && o.playing === u;
    if (o.step === "listen") return { cls: `pending${d ? " model" : ""}`, content: d ? "♪" : "", label: `${u + 1}. sävel${d ? ", soi nyt" : ""}` };
    if (!i && o.step === "recall") return {
      cls: `${o.revealed ? "shown" : "pending"}${d ? " model" : ""}`,
      content: o.revealed ? ke(l) : d ? "♪" : "",
      label: `${u + 1}. sävel${o.revealed ? `: ${ke(l)}` : ""}`
    };
    if (o.step === "learn") return { cls: `shown${d ? " model" : ""}`, content: ke(l), label: `${u + 1}. sävel: ${ke(l)}, ${Ma(o.riff.spots[u])}` };
    const h = o.found[u], v = !o.complete && u === o.index, y = v && o.nextHint;
    return {
      cls: `${h ? "found" : "pending"}${v ? " current" : ""}${d ? " model" : ""}${y ? " memory" : ""}`,
      mark: h ? "found" : "pending",
      content: h ? ke(l) : d ? "♪" : y ? ke(l) : v ? "?" : "",
      symbol: h ? "✓" : void 0,
      label: `${u + 1}. sävel: ${h ? `${ke(l)}, tunnistettu oikeassa kohdassa` : y ? `vihje ${ke(l)}` : "ei vielä soitettu"}${v ? ", vuorossa" : ""}`
    };
  });
}
const Dp = (o) => o.modelPlaying ? "Pysäytä malli" : "Kuuntele malli";
function Bp({ s: o, m: i, practice: l, headingRef: u }) {
  const d = o.riff.midi.length, h = i.status === "on", v = /* @__PURE__ */ c.jsx(Kc, { slots: Op(o, h), label: o.step === "recall" && h ? `Kokeile muistista: tunnistettu ${o.index}/${d} säveltä` : `Riffissä on ${d} säveltä` }), y = (_) => /* @__PURE__ */ c.jsx("button", { type: "button", className: _ ? "primary" : "", onClick: () => l.listen(), "aria-pressed": o.modelPlaying, "data-testid": "listen", children: Dp(o) }), j = o.modelError && /* @__PURE__ */ c.jsx("p", { className: "riff-feedback bad", role: "status", children: o.modelError });
  return o.step === "listen" ? /* @__PURE__ */ c.jsxs("section", { className: "riff-step", "data-testid": "step-listen", "aria-labelledby": "riff-step-title", children: [
    /* @__PURE__ */ c.jsx("h2", { id: "riff-step-title", tabIndex: -1, ref: u, children: "1. Kuuntele" }),
    /* @__PURE__ */ c.jsx("p", { children: "Kuuntele malliriffi rauhassa niin monta kertaa kuin haluat. Montako säveltä siinä on? Nouseeko vai laskeeko melodia? Toistuuko jokin sävel?" }),
    v,
    j,
    /* @__PURE__ */ c.jsxs("div", { className: "riff-actions", children: [
      y(!0),
      /* @__PURE__ */ c.jsxs("button", { type: "button", onClick: () => l.setStep("learn"), children: [
        "Seuraavaksi: Opettele ",
        /* @__PURE__ */ c.jsx("span", { "aria-hidden": "true", children: "→" })
      ] })
    ] })
  ] }) : o.step === "learn" ? /* @__PURE__ */ c.jsxs("section", { className: "riff-step", "data-testid": "step-learn", "aria-labelledby": "riff-step-title", children: [
    /* @__PURE__ */ c.jsx("h2", { id: "riff-step-title", tabIndex: -1, ref: u, children: "2. Opettele" }),
    /* @__PURE__ */ c.jsx("p", { children: "Näin riffin voi soittaa. Soita sitä omaan tahtiin – tässä vaiheessa mitään ei arvioida." }),
    v,
    /* @__PURE__ */ c.jsx("ol", { className: "riff-notes", "data-testid": "learn-notes", children: o.riff.midi.map((_, N) => /* @__PURE__ */ c.jsxs("li", { children: [
      /* @__PURE__ */ c.jsx("strong", { children: ke(_) }),
      " – ",
      Ma(o.riff.spots[N])
    ] }, N)) }),
    /* @__PURE__ */ c.jsx("p", { className: "riff-tip", children: o.riff.tip }),
    h && /* @__PURE__ */ c.jsx("p", { className: "riff-help", children: "Mikrofoni näyttää kuulemansa sävelen ja sen paikan otelaudalla, jos sävel kuuluu riffiin. Se ei tunnista kieltä – sama sävel löytyy usein muualtakin." }),
    j,
    /* @__PURE__ */ c.jsxs("div", { className: "riff-actions", children: [
      y(!1),
      /* @__PURE__ */ c.jsxs("button", { type: "button", className: "primary", onClick: () => l.setStep("recall"), children: [
        "Seuraavaksi: Kokeile muistista ",
        /* @__PURE__ */ c.jsx("span", { "aria-hidden": "true", children: "→" })
      ] })
    ] })
  ] }) : /* @__PURE__ */ c.jsxs("section", { className: "riff-step", "data-testid": "step-recall", "aria-labelledby": "riff-step-title", children: [
    /* @__PURE__ */ c.jsx("h2", { id: "riff-step-title", tabIndex: -1, ref: u, children: "3. Kokeile muistista" }),
    /* @__PURE__ */ c.jsx("p", { children: "Sävelet ja otelautapaikat ovat piilossa. Soita riffi kuulemasi perusteella. Ei aikarajaa eikä virhepisteitä." }),
    v,
    h && /* @__PURE__ */ c.jsxs("p", { className: "riff-count", "data-testid": "count", children: [
      "Tunnistettu ",
      o.index,
      "/",
      d
    ] }),
    h ? /* @__PURE__ */ c.jsx("p", { className: "riff-help", "data-testid": "recall-mode", children: "Mikrofoni kertoo, mitkä sävelet se tunnisti oikeassa järjestyksessä. Väärä sävel ei ole virhe: kohta vain odottaa oikeaa säveltä." }) : /* @__PURE__ */ c.jsx("p", { className: "riff-help", "data-testid": "recall-mode", children: "Mikrofoni ei ole käytössä, joten soittoa ei arvioida automaattisesti. Soita riffi ja vertaa sitä malliin kuuntelemalla – tai ota mikrofoni käyttöön yläpuolelta." }),
    o.feedback && /* @__PURE__ */ c.jsx("p", { className: `riff-feedback ${o.feedback.tone}`, role: "status", "data-testid": "feedback", children: o.feedback.text }),
    j,
    h ? /* @__PURE__ */ c.jsxs("div", { className: "riff-actions", children: [
      y(!1),
      !o.complete && /* @__PURE__ */ c.jsx("button", { type: "button", onClick: () => l.showNextHint(), disabled: o.nextHint, children: "Näytä seuraava sävel" }),
      /* @__PURE__ */ c.jsx("button", { type: "button", onClick: () => l.restartRecall(), className: o.complete ? "primary" : "", children: o.complete ? "Soita uudelleen" : "Aloita alusta" })
    ] }) : /* @__PURE__ */ c.jsxs("div", { className: "riff-actions", children: [
      y(!1),
      /* @__PURE__ */ c.jsx("button", { type: "button", "aria-pressed": o.revealed, onClick: () => l.toggleReveal(), children: o.revealed ? "Piilota sävelet" : "Näytä sävelet tarkistukseen" })
    ] })
  ] });
}
function Ac(o, i) {
  const l = le.useRef(o);
  le.useEffect(() => {
    l.current !== o && i.current?.focus(), l.current = o;
  }, [o, i]);
}
function Zc(o, i) {
  const l = i in o.progress.marked, u = o.progress.heard[i] ?? 0;
  return { marked: l, heard: u, text: [l ? "harjoiteltu (itse kuitattu)" : "", u ? `mikrofoni kuuli kokonaan ${u} ${u === 1 ? "kerran" : "kertaa"}` : ""].filter(Boolean).join(" · ") };
}
function Vp({ s: o, m: i, practice: l, titleRef: u }) {
  const d = o.progress.last && Hc(o.progress.last.riff), h = Wt.filter((y) => y.id in o.progress.marked).length, v = l.legacyMicPasses();
  return /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
    /* @__PURE__ */ c.jsxs("div", { className: "intro riff-intro", children: [
      /* @__PURE__ */ c.jsx(jr, { mode: "harjoitus" }),
      /* @__PURE__ */ c.jsx("h1", { id: "riff-title", ref: u, tabIndex: -1, children: "Opettele riffit omaan tahtiin" }),
      /* @__PURE__ */ c.jsx("p", { children: "Harjoittele lyhyitä riffejä omalla kitaralla. Mikrofoni voi kertoa, mitkä sävelet se tunnisti, mutta harjoitella voi myös ilman sitä. Ei aikarajoja eikä virhepisteitä – siirry seuraavaan, kun olet valmis." })
    ] }),
    /* @__PURE__ */ c.jsxs("ol", { className: "riff-process", "aria-label": "Näin harjoittelet", children: [
      /* @__PURE__ */ c.jsxs("li", { children: [
        /* @__PURE__ */ c.jsx("strong", { children: "Valitse riffi" }),
        " alta."
      ] }),
      /* @__PURE__ */ c.jsxs("li", { children: [
        /* @__PURE__ */ c.jsx("strong", { children: "Valmistele mikrofoni" }),
        " ja tarkista viritys, jos haluat palautetta (vapaaehtoinen)."
      ] }),
      /* @__PURE__ */ c.jsxs("li", { children: [
        /* @__PURE__ */ c.jsx("strong", { children: "Kuuntele" }),
        " malli, ",
        /* @__PURE__ */ c.jsx("strong", { children: "opettele" }),
        " sävelet ja otelautapaikat ja ",
        /* @__PURE__ */ c.jsx("strong", { children: "kokeile muistista" }),
        "."
      ] }),
      /* @__PURE__ */ c.jsxs("li", { children: [
        /* @__PURE__ */ c.jsx("strong", { children: "Kuittaa riffi harjoitelluksi" }),
        ", kun se tuntuu sujuvan. Saman riffin voi harjoitella uudelleen milloin vain."
      ] })
    ] }),
    d && /* @__PURE__ */ c.jsx("div", { className: "riff-actions", children: /* @__PURE__ */ c.jsxs("button", { type: "button", className: "primary", onClick: () => l.continueLast(), "data-testid": "continue-practice", children: [
      "Jatka: ",
      d.level.name,
      " · ",
      d.riff.title,
      " (",
      Jc[o.progress.last.step],
      ")"
    ] }) }),
    /* @__PURE__ */ c.jsx(bc, { m: i, practice: l }),
    /* @__PURE__ */ c.jsx("h2", { children: "Harjoitukset" }),
    /* @__PURE__ */ c.jsxs("p", { className: "riff-help", "data-testid": "practice-summary", children: [
      "Harjoiteltu ",
      h,
      "/",
      Wt.length,
      " riffiä. Kaikki harjoitukset ovat auki: järjestystä ei tarvitse noudattaa."
    ] }),
    Ve.map((y) => {
      const j = y.riffs.filter((_) => _.id in o.progress.marked).length;
      return /* @__PURE__ */ c.jsxs("section", { className: "riff-set", "aria-labelledby": `riff-set-${y.number}`, children: [
        /* @__PURE__ */ c.jsxs("h3", { id: `riff-set-${y.number}`, children: [
          y.name,
          " – ",
          y.title,
          " ",
          /* @__PURE__ */ c.jsxs("span", { className: "riff-set-count", children: [
            "Harjoiteltu ",
            j,
            "/",
            y.riffs.length
          ] })
        ] }),
        /* @__PURE__ */ c.jsx("ol", { className: "riff-set-list", children: y.riffs.map((_, N) => {
          const S = Zc(o, _.id);
          return /* @__PURE__ */ c.jsx("li", { children: /* @__PURE__ */ c.jsxs("button", { type: "button", className: `riff-set-item${S.marked ? " marked" : ""}`, onClick: () => l.openRiff(_.id), children: [
            /* @__PURE__ */ c.jsx("span", { className: "riff-set-mark", "aria-hidden": "true", children: S.marked ? "✓" : N + 1 }),
            /* @__PURE__ */ c.jsxs("span", { children: [
              /* @__PURE__ */ c.jsx("strong", { children: _.title }),
              S.text && /* @__PURE__ */ c.jsx("small", { children: S.text })
            ] })
          ] }) }, _.id);
        }) })
      ] }, y.number);
    }),
    v > 0 && /* @__PURE__ */ c.jsxs("p", { className: "riff-help", "data-testid": "legacy-mic", children: [
      "Aiemman version mikrofonipelin tulokset ovat tallessa (",
      v,
      " läpäistyä riffiä). Niitä ei lasketa tämän harjoituksen kuittauksiksi."
    ] }),
    /* @__PURE__ */ c.jsxs("p", { className: "riff-help", children: [
      "Haluatko pelata ilman kitaraa? ",
      /* @__PURE__ */ c.jsx("a", { href: Rs("peli"), children: "Riffikaiku-peli – virtuaalikitara" }),
      "."
    ] })
  ] });
}
function Up({ s: o, m: i, practice: l, titleRef: u, stepRef: d }) {
  const [h, v] = le.useState(null), y = le.useRef();
  le.useEffect(() => () => clearTimeout(y.current), []), le.useEffect(() => {
    v(null);
  }, [o.step, o.riff.id]);
  const j = Wt.findIndex((A) => A.id === o.riff.id), _ = Zc(o, o.riff.id), N = i.status === "on" && i.muted === null && !i.calibrating && i.heard?.status === "pitch" ? i.heard.midi : void 0, S = o.step !== "recall";
  function M(A) {
    l.tap(A.midi) && (clearTimeout(y.current), v((Q) => ({ p: A, n: (Q?.n ?? 0) + 1 })), y.current = setTimeout(() => v(null), 600));
  }
  const L = i.status === "on", F = o.step === "learn" || o.step === "recall" && !L && o.revealed ? Ea(o.riff, o.playing) : o.step === "recall" && L ? Ea(o.riff, o.playing, (A) => o.complete || o.found[A] || o.nextHint && A === o.index, (A) => o.found[A] || o.complete ? String(A + 1) : "?") : [], P = N !== void 0 && o.step === "learn" ? o.riff.spots[o.riff.midi.indexOf(N)] : void 0;
  return P && F.push({ ...P, midi: N, kind: "playing", label: ke(N) }), h && S && F.push({ ...h.p, kind: "playing", label: ke(h.p.midi) }), /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
    /* @__PURE__ */ c.jsxs("header", { className: "riff-round-heading", children: [
      /* @__PURE__ */ c.jsx(jr, { mode: "harjoitus" }),
      /* @__PURE__ */ c.jsxs("h1", { id: "riff-title", ref: u, tabIndex: -1, "data-testid": "level-heading", children: [
        o.level.name,
        " · Riffi ",
        o.riffNumber,
        "/",
        o.level.riffs.length
      ] }),
      /* @__PURE__ */ c.jsxs("p", { className: "riff-name", children: [
        o.riff.title,
        _.marked && /* @__PURE__ */ c.jsx("span", { className: "riff-marked-badge", children: " · ✓ harjoiteltu" })
      ] })
    ] }),
    /* @__PURE__ */ c.jsx(zp, { s: o, practice: l }),
    /* @__PURE__ */ c.jsx(bc, { m: i, practice: l }),
    /* @__PURE__ */ c.jsxs("div", { className: "riff-panel riff-play", children: [
      /* @__PURE__ */ c.jsx(Bp, { s: o, m: i, practice: l, headingRef: d }),
      o.step === "learn" && i.status === "on" && /* @__PURE__ */ c.jsxs("p", { className: "riff-heard", "data-testid": "learn-heard", children: [
        "Kuulen nyt: ",
        /* @__PURE__ */ c.jsx("strong", { children: N !== void 0 ? ke(N) : "–" }),
        N !== void 0 && !o.riff.midi.includes(N) ? " (ei kuulu tähän riffiin)" : ""
      ] }),
      /* @__PURE__ */ c.jsx(
        Qc,
        {
          focus: o.level.strings,
          marks: F,
          disabled: !S || o.modelPlaying,
          onAnswer: M,
          caption: S ? "Otelauta: painamalla kuulet sävelen (ei arvioida)" : "Otelauta: soita oikealla kitaralla – mikrofoni kuulee vain sävelkorkeuden, ei kieltä"
        }
      ),
      /* @__PURE__ */ c.jsxs("div", { className: "riff-actions riff-practice-footer", children: [
        /* @__PURE__ */ c.jsx("button", { type: "button", "aria-pressed": _.marked, onClick: () => l.toggleMarked(), "data-testid": "mark-practiced", className: _.marked ? "marked" : "", children: _.marked ? "✓ Harjoiteltu – poista kuittaus" : "Kuittaa harjoitelluksi" }),
        j > 0 && /* @__PURE__ */ c.jsxs("button", { type: "button", onClick: () => l.moveRiff(-1), children: [
          /* @__PURE__ */ c.jsx("span", { "aria-hidden": "true", children: "←" }),
          " Edellinen riffi"
        ] }),
        j < Wt.length - 1 && /* @__PURE__ */ c.jsxs("button", { type: "button", onClick: () => l.moveRiff(1), children: [
          "Seuraava riffi ",
          /* @__PURE__ */ c.jsx("span", { "aria-hidden": "true", children: "→" })
        ] })
      ] }),
      /* @__PURE__ */ c.jsx("div", { className: "riff-end-actions", children: /* @__PURE__ */ c.jsx("button", { type: "button", onClick: () => l.home(), children: "Kaikki harjoitukset" }) })
    ] })
  ] });
}
function Hp({ practice: o }) {
  const i = le.useSyncExternalStore(o.subscribe, o.getState), l = le.useSyncExternalStore(o.mic.subscribe, o.mic.getState), u = le.useRef(null), d = le.useRef(null), h = le.useRef(null);
  return Ac(i.panel ? "panel" : `${i.view}:${i.riff.id}`, i.panel ? h : u), Ac(i.step, d), le.useEffect(() => {
    const v = () => {
      document.visibilityState === "hidden" && o.hidden();
    }, y = () => o.dispose(), j = () => {
      o.mic.refreshDevices();
    };
    return document.addEventListener("visibilitychange", v), window.addEventListener("pagehide", y), navigator.mediaDevices?.addEventListener?.("devicechange", j), () => {
      document.removeEventListener("visibilitychange", v), window.removeEventListener("pagehide", y), navigator.mediaDevices?.removeEventListener?.("devicechange", j);
    };
  }, [o]), /* @__PURE__ */ c.jsxs("section", { className: "riff-game", "data-mode": "harjoitus", "data-view": i.panel ? "panel" : i.view, "aria-labelledby": i.panel ? void 0 : "riff-title", "aria-label": i.panel ? "Riffiharjoitus – oikea kitara" : void 0, children: [
    /* @__PURE__ */ c.jsx(hi, { mode: "harjoitus" }),
    i.panel ? /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
      /* @__PURE__ */ c.jsx(jr, { mode: "harjoitus" }),
      /* @__PURE__ */ c.jsx($p, { m: l, mic: o.mic, practice: o, panel: i.panel, headingRef: h })
    ] }) : i.view === "home" ? /* @__PURE__ */ c.jsx(Vp, { s: i, m: l, practice: o, titleRef: u }) : /* @__PURE__ */ c.jsx(Up, { s: i, m: l, practice: o, titleRef: u, stepRef: d })
  ] });
}
function Wp({ store: o }) {
  const i = Qh(o), l = Wt.filter((d) => d.id in o.data.practice.marked).length, u = {
    harjoitus: l ? `Harjoiteltu ${l}/${Wt.length} riffiä (itse kuitattu)` : "Mikrofoni on vapaaehtoinen: harjoitella voi myös ilman sitä.",
    peli: i.started ? `Läpäisty ${i.passed}/${i.total} riffiä · tähdet ${i.stars}/${i.total}` : "Aloita lyhyellä kahden sävelen opastuksella."
  };
  return /* @__PURE__ */ c.jsxs("section", { className: "riff-game", "data-view": "start", "aria-labelledby": "riff-title", children: [
    /* @__PURE__ */ c.jsx(hi, { mode: null }),
    /* @__PURE__ */ c.jsxs("div", { className: "intro riff-intro", children: [
      /* @__PURE__ */ c.jsx("h1", { id: "riff-title", tabIndex: -1, children: "Riffikaiku (beta)" }),
      /* @__PURE__ */ c.jsx("p", { children: "Lyhyitä, neljän sävelen kitarariffejä kuunneltavaksi ja soitettavaksi. Valitse, harjoitteletko omalla kitaralla vai pelaatko virtuaalikitaralla." })
    ] }),
    /* @__PURE__ */ c.jsx("div", { className: "learning-grid riff-modes", children: ["harjoitus", "peli"].map((d, h) => /* @__PURE__ */ c.jsxs("a", { className: `learning-card riff-mode-card ${d}`, href: Rs(d), "data-testid": `mode-${d}`, children: [
      /* @__PURE__ */ c.jsx("span", { className: "learning-number", "aria-hidden": "true", children: String(h + 1).padStart(2, "0") }),
      /* @__PURE__ */ c.jsxs("span", { className: "learning-card-body", children: [
        /* @__PURE__ */ c.jsx("strong", { children: wr[d].card }),
        /* @__PURE__ */ c.jsx("span", { children: wr[d].description }),
        /* @__PURE__ */ c.jsx("span", { className: "riff-card-progress", children: u[d] }),
        /* @__PURE__ */ c.jsx("small", { children: wr[d].action })
      ] }),
      /* @__PURE__ */ c.jsx("span", { className: "learning-arrow", "aria-hidden": "true", children: "→" })
    ] }, d)) }),
    /* @__PURE__ */ c.jsx("p", { className: "riff-help", children: "Mikrofonin lupaa kysytään vasta, kun otat sen käyttöön harjoituksessa. Ääntä ei tallenneta eikä lähetetä mihinkään. Edistyminen tallentuu vain tähän selaimeen, ja harjoituksen ja pelin tulokset pidetään erillään." })
  ] });
}
const Ic = "musiikin-kartta:riffikaiku:v1", Kp = ["mic", "board"], Qp = ["listen", "learn", "recall"], ef = "kotitreenit", Gp = () => ({
  version: 1,
  structure: ef,
  tutorialDone: !1,
  input: "mic",
  fullBoard: !1,
  device: "",
  stats: { mic: {}, board: {} },
  results: [],
  run: { mic: { level: 1, passed: [] }, board: { level: 1, passed: [] } },
  levels: { mic: [], board: [] },
  practice: { marked: {}, heard: {}, last: null }
}), Gn = (o) => typeof o == "number" && Number.isFinite(o) && o >= 0, tf = (o) => o === "mic" || o === "board", Na = (o) => Number.isInteger(o) && Ve.some((i) => i.number === o), qp = (o) => {
  const i = o;
  return !!i && typeof i == "object" && Gn(i.done) && Gn(i.solo) && Gn(i.lastAt) && i.solo <= i.done && (i.passed === void 0 || Gn(i.passed) && i.passed <= i.done && i.solo <= i.passed) && (i.best === void 0 || Gn(i.best));
}, di = (o) => Wt.some((i) => i.id === o);
function Xp(o) {
  const i = { marked: {}, heard: {}, last: null }, l = o;
  if (!l || typeof l != "object") return i;
  for (const d of ["marked", "heard"]) {
    const h = l[d];
    if (h && typeof h == "object")
      for (const [v, y] of Object.entries(h)) di(v) && Gn(y) && (i[d][v] = y);
  }
  const u = l.last;
  return u && typeof u == "object" && typeof u.riff == "string" && di(u.riff) && Qp.includes(u.step) && (i.last = { riff: u.riff, step: u.step }), i;
}
const Yp = (o) => {
  const i = o;
  return !!i && typeof i == "object" && typeof i.riff == "string" && tf(i.input) && typeof i.hint == "boolean" && ["wrong", "octave", "replays", "ms", "at"].every((l) => Gn(i[l])) && (i.passed === void 0 || typeof i.passed == "boolean") && (i.level === void 0 || Number.isInteger(i.level) && i.level > 0);
};
function bp(o) {
  const i = Gp();
  if (!o) return i;
  let l;
  try {
    l = JSON.parse(o);
  } catch {
    return i;
  }
  const u = l;
  if (!u || u.version !== 1) return i;
  i.tutorialDone = u.tutorialDone === !0, i.fullBoard = u.fullBoard === !0, typeof u.device == "string" && (i.device = u.device.slice(0, 256)), tf(u.input) && (i.input = u.input);
  const d = u.structure !== ef;
  for (const h of Kp) {
    const v = u.stats?.[h];
    if (v && typeof v == "object")
      for (const [_, N] of Object.entries(v)) qp(N) && (i.stats[h][_] = { ...N });
    const y = u.run?.[h];
    if (d) {
      y && y.level === 1 && Array.isArray(y.passed) && (i.run[h] = { level: 1, passed: Ve[0].riffs.map((_) => _.id).filter((_) => y.passed.includes(_)) });
      continue;
    }
    if (y && Na(y.level) && Array.isArray(y.passed)) {
      const _ = Ve.find((N) => N.number === y.level).riffs.map((N) => N.id);
      i.run[h] = { level: y.level, passed: _.filter((N) => y.passed.includes(N)) };
    }
    const j = u.levels?.[h];
    Array.isArray(j) && (i.levels[h] = [...new Set(j.filter(Na))].sort((_, N) => _ - N));
  }
  return i.practice = Xp(u.practice), Array.isArray(u.results) && (i.results = u.results.filter(Yp).slice(-300).map((h) => d && !h.legacy ? { ...h, legacy: !0 } : h)), i;
}
class Jp {
  /** storage puuttuu tai heittää (yksityinen ikkuna, estetty tallennus): peli toimii ilman tallennusta. */
  constructor(i) {
    this.storage = i;
    let l = null;
    try {
      l = i?.getItem(Ic) ?? null;
    } catch {
      l = null;
    }
    this.data = bp(l);
  }
  storage;
  data;
  save() {
    try {
      this.storage?.setItem(Ic, JSON.stringify(this.data));
    } catch {
    }
  }
  setInput(i) {
    this.data.input !== i && (this.data.input = i, this.save());
  }
  setFullBoard(i) {
    this.data.fullBoard !== i && (this.data.fullBoard = i, this.save());
  }
  setDevice(i) {
    this.data.device !== i && (this.data.device = i, this.save());
  }
  /** Tasot, jotka voi valita tasovalikosta: läpäistyt, nykyinen ja seuraava läpäisemätön. */
  unlockedLevels(i) {
    const l = Math.max(this.data.run[i].level, ...this.data.levels[i].map((u) => u + 1));
    return Ve.map((u) => u.number).filter((u) => u <= l);
  }
  finishTutorial() {
    this.data.tutorialDone || (this.data.tutorialDone = !0, this.save());
  }
  run(i) {
    return this.data.run[i];
  }
  completedLevels(i) {
    return this.data.levels[i];
  }
  level(i) {
    return Ve.find((l) => l.number === this.data.run[i].level);
  }
  /** Tasokierroksen seuraava läpäisemätön riffi, tai null kun kaikki kolme on läpäisty. */
  currentRiff(i) {
    const l = this.data.run[i];
    return this.level(i).riffs.find((u) => !l.passed.includes(u.id)) ?? null;
  }
  /** Aloittaa tason alusta (uusi kierros). Läpäistyt tasot säilyvät. */
  startLevel(i, l) {
    Na(l) && (this.data.run[i] = { level: l, passed: [] }, this.save());
  }
  /**
   * Kirjaa yhden loppuun soitetun riffiyrityksen kerran. Opastus merkitään tehdyksi, mutta se ei ole
   * tasotulos. Palauttaa levelComplete = true sillä kirjauksella, jolla tason kolmas riffi läpäistiin,
   * ja tiedot uusista saavutuksista (ensimmäinen läpäisy, ensimmäinen tähti, uusi ennätys).
   */
  record(i) {
    if (i.riff === ui.id)
      return this.finishTutorial(), { levelComplete: !1, firstPass: !1, firstStar: !1, newBest: !1 };
    const { input: l } = i, u = i.passed === !0, d = this.data.stats[l], h = d[i.riff] ?? { done: 0, solo: 0, passed: 0 }, v = u && !i.hint, y = u && (h.passed ?? 0) === 0, j = v && h.solo === 0, _ = h.best !== void 0 && i.wrong < h.best, N = h.best === void 0 ? i.wrong : Math.min(h.best, i.wrong);
    d[i.riff] = {
      done: h.done + 1,
      passed: (h.passed ?? 0) + (u ? 1 : 0),
      solo: h.solo + (v ? 1 : 0),
      lastAt: i.at,
      best: N
    }, this.data.results = [...this.data.results, { ...i, level: i.level ?? Uc(i.riff)?.number }].slice(-300);
    let S = !1;
    const M = this.data.run[l], L = this.level(l);
    return u && L.riffs.some((F) => F.id === i.riff) && !M.passed.includes(i.riff) && (M.passed = L.riffs.map((F) => F.id).filter((F) => F === i.riff || M.passed.includes(F)), M.passed.length === L.riffs.length && (S = !0, this.data.levels[l].includes(L.number) || (this.data.levels[l] = [...this.data.levels[l], L.number].sort((F, P) => F - P)))), this.save(), { levelComplete: S, firstPass: y, firstStar: j, newBest: _ };
  }
  // ---- oikean kitaran riffiharjoitus ----
  /** Itse kuitattu (true) tai kuittaus poistettu (false). */
  setMarked(i, l, u = Date.now()) {
    !di(i) || i in this.data.practice.marked === l || (l ? this.data.practice.marked[i] = u : delete this.data.practice.marked[i], this.save());
  }
  /** Mikrofoni kuuli koko riffin oikeassa järjestyksessä. */
  addHeard(i) {
    di(i) && (this.data.practice.heard[i] = (this.data.practice.heard[i] ?? 0) + 1, this.save());
  }
  setPracticeLast(i, l) {
    const u = this.data.practice.last;
    !di(i) || u?.riff === i && u.step === l || (this.data.practice.last = { riff: i, step: l }, this.save());
  }
}
function Zp() {
  try {
    return localStorage;
  } catch {
    return;
  }
}
function em({ store: o }) {
  const [i] = le.useState(() => new Kh(new Bc(), o));
  return le.useEffect(() => () => {
    i.dispose();
  }, [i]), /* @__PURE__ */ c.jsx(gp, { game: i });
}
function tm({ store: o }) {
  const [i] = le.useState(() => {
    const l = new Bc();
    return new Mp(l, new _p(l, o), o);
  });
  return le.useEffect(() => () => {
    i.dispose();
  }, [i]), /* @__PURE__ */ c.jsx(Hp, { practice: i });
}
function nm({ mode: o }) {
  const [i] = le.useState(() => new Jp(Zp()));
  return le.useEffect(() => {
    document.title = ap(o);
  }, [o]), o === "harjoitus" ? /* @__PURE__ */ c.jsx(tm, { store: i }) : o === "peli" ? /* @__PURE__ */ c.jsx(em, { store: i }) : /* @__PURE__ */ c.jsx(Wp, { store: i });
}
window.addEventListener("pagehide", () => Lh());
const Fc = document.getElementById("riffikaiku");
Fc && lh.createRoot(Fc).render(/* @__PURE__ */ c.jsx(le.StrictMode, { children: /* @__PURE__ */ c.jsx(nm, { mode: lp(location.search) }) }));
//# sourceMappingURL=app.js.map
