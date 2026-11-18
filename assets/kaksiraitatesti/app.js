var hu = { exports: {} }, fl = {}, vu = { exports: {} }, le = {};
var Ga;
function ad() {
  if (Ga) return le;
  Ga = 1;
  var u = /* @__PURE__ */ Symbol.for("react.element"), s = /* @__PURE__ */ Symbol.for("react.portal"), a = /* @__PURE__ */ Symbol.for("react.fragment"), k = /* @__PURE__ */ Symbol.for("react.strict_mode"), w = /* @__PURE__ */ Symbol.for("react.profiler"), M = /* @__PURE__ */ Symbol.for("react.provider"), S = /* @__PURE__ */ Symbol.for("react.context"), E = /* @__PURE__ */ Symbol.for("react.forward_ref"), z = /* @__PURE__ */ Symbol.for("react.suspense"), L = /* @__PURE__ */ Symbol.for("react.memo"), H = /* @__PURE__ */ Symbol.for("react.lazy"), Y = Symbol.iterator;
  function Q(m) {
    return m === null || typeof m != "object" ? null : (m = Y && m[Y] || m["@@iterator"], typeof m == "function" ? m : null);
  }
  var ie = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, ee = Object.assign, Z = {};
  function I(m, x, K) {
    this.props = m, this.context = x, this.refs = Z, this.updater = K || ie;
  }
  I.prototype.isReactComponent = {}, I.prototype.setState = function(m, x) {
    if (typeof m != "object" && typeof m != "function" && m != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, m, x, "setState");
  }, I.prototype.forceUpdate = function(m) {
    this.updater.enqueueForceUpdate(this, m, "forceUpdate");
  };
  function ze() {
  }
  ze.prototype = I.prototype;
  function Ce(m, x, K) {
    this.props = m, this.context = x, this.refs = Z, this.updater = K || ie;
  }
  var se = Ce.prototype = new ze();
  se.constructor = Ce, ee(se, I.prototype), se.isPureReactComponent = !0;
  var Ee = Array.isArray, te = Object.prototype.hasOwnProperty, me = { current: null }, oe = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Ve(m, x, K) {
    var ne, ce = {}, ae = null, ye = null;
    if (x != null) for (ne in x.ref !== void 0 && (ye = x.ref), x.key !== void 0 && (ae = "" + x.key), x) te.call(x, ne) && !oe.hasOwnProperty(ne) && (ce[ne] = x[ne]);
    var fe = arguments.length - 2;
    if (fe === 1) ce.children = K;
    else if (1 < fe) {
      for (var ge = Array(fe), tt = 0; tt < fe; tt++) ge[tt] = arguments[tt + 2];
      ce.children = ge;
    }
    if (m && m.defaultProps) for (ne in fe = m.defaultProps, fe) ce[ne] === void 0 && (ce[ne] = fe[ne]);
    return { $$typeof: u, type: m, key: ae, ref: ye, props: ce, _owner: me.current };
  }
  function Ae(m, x) {
    return { $$typeof: u, type: m.type, key: x, ref: m.ref, props: m.props, _owner: m._owner };
  }
  function Qe(m) {
    return typeof m == "object" && m !== null && m.$$typeof === u;
  }
  function be(m) {
    var x = { "=": "=0", ":": "=2" };
    return "$" + m.replace(/[=:]/g, function(K) {
      return x[K];
    });
  }
  var ft = /\/+/g;
  function Ke(m, x) {
    return typeof m == "object" && m !== null && m.key != null ? be("" + m.key) : x.toString(36);
  }
  function et(m, x, K, ne, ce) {
    var ae = typeof m;
    (ae === "undefined" || ae === "boolean") && (m = null);
    var ye = !1;
    if (m === null) ye = !0;
    else switch (ae) {
      case "string":
      case "number":
        ye = !0;
        break;
      case "object":
        switch (m.$$typeof) {
          case u:
          case s:
            ye = !0;
        }
    }
    if (ye) return ye = m, ce = ce(ye), m = ne === "" ? "." + Ke(ye, 0) : ne, Ee(ce) ? (K = "", m != null && (K = m.replace(ft, "$&/") + "/"), et(ce, x, K, "", function(tt) {
      return tt;
    })) : ce != null && (Qe(ce) && (ce = Ae(ce, K + (!ce.key || ye && ye.key === ce.key ? "" : ("" + ce.key).replace(ft, "$&/") + "/") + m)), x.push(ce)), 1;
    if (ye = 0, ne = ne === "" ? "." : ne + ":", Ee(m)) for (var fe = 0; fe < m.length; fe++) {
      ae = m[fe];
      var ge = ne + Ke(ae, fe);
      ye += et(ae, x, K, ge, ce);
    }
    else if (ge = Q(m), typeof ge == "function") for (m = ge.call(m), fe = 0; !(ae = m.next()).done; ) ae = ae.value, ge = ne + Ke(ae, fe++), ye += et(ae, x, K, ge, ce);
    else if (ae === "object") throw x = String(m), Error("Objects are not valid as a React child (found: " + (x === "[object Object]" ? "object with keys {" + Object.keys(m).join(", ") + "}" : x) + "). If you meant to render a collection of children, use an array instead.");
    return ye;
  }
  function Ye(m, x, K) {
    if (m == null) return m;
    var ne = [], ce = 0;
    return et(m, ne, "", "", function(ae) {
      return x.call(K, ae, ce++);
    }), ne;
  }
  function Ne(m) {
    if (m._status === -1) {
      var x = m._result;
      x = x(), x.then(function(K) {
        (m._status === 0 || m._status === -1) && (m._status = 1, m._result = K);
      }, function(K) {
        (m._status === 0 || m._status === -1) && (m._status = 2, m._result = K);
      }), m._status === -1 && (m._status = 0, m._result = x);
    }
    if (m._status === 1) return m._result.default;
    throw m._result;
  }
  var he = { current: null }, j = { transition: null }, V = { ReactCurrentDispatcher: he, ReactCurrentBatchConfig: j, ReactCurrentOwner: me };
  function D() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return le.Children = { map: Ye, forEach: function(m, x, K) {
    Ye(m, function() {
      x.apply(this, arguments);
    }, K);
  }, count: function(m) {
    var x = 0;
    return Ye(m, function() {
      x++;
    }), x;
  }, toArray: function(m) {
    return Ye(m, function(x) {
      return x;
    }) || [];
  }, only: function(m) {
    if (!Qe(m)) throw Error("React.Children.only expected to receive a single React element child.");
    return m;
  } }, le.Component = I, le.Fragment = a, le.Profiler = w, le.PureComponent = Ce, le.StrictMode = k, le.Suspense = z, le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = V, le.act = D, le.cloneElement = function(m, x, K) {
    if (m == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + m + ".");
    var ne = ee({}, m.props), ce = m.key, ae = m.ref, ye = m._owner;
    if (x != null) {
      if (x.ref !== void 0 && (ae = x.ref, ye = me.current), x.key !== void 0 && (ce = "" + x.key), m.type && m.type.defaultProps) var fe = m.type.defaultProps;
      for (ge in x) te.call(x, ge) && !oe.hasOwnProperty(ge) && (ne[ge] = x[ge] === void 0 && fe !== void 0 ? fe[ge] : x[ge]);
    }
    var ge = arguments.length - 2;
    if (ge === 1) ne.children = K;
    else if (1 < ge) {
      fe = Array(ge);
      for (var tt = 0; tt < ge; tt++) fe[tt] = arguments[tt + 2];
      ne.children = fe;
    }
    return { $$typeof: u, type: m.type, key: ce, ref: ae, props: ne, _owner: ye };
  }, le.createContext = function(m) {
    return m = { $$typeof: S, _currentValue: m, _currentValue2: m, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, m.Provider = { $$typeof: M, _context: m }, m.Consumer = m;
  }, le.createElement = Ve, le.createFactory = function(m) {
    var x = Ve.bind(null, m);
    return x.type = m, x;
  }, le.createRef = function() {
    return { current: null };
  }, le.forwardRef = function(m) {
    return { $$typeof: E, render: m };
  }, le.isValidElement = Qe, le.lazy = function(m) {
    return { $$typeof: H, _payload: { _status: -1, _result: m }, _init: Ne };
  }, le.memo = function(m, x) {
    return { $$typeof: L, type: m, compare: x === void 0 ? null : x };
  }, le.startTransition = function(m) {
    var x = j.transition;
    j.transition = {};
    try {
      m();
    } finally {
      j.transition = x;
    }
  }, le.unstable_act = D, le.useCallback = function(m, x) {
    return he.current.useCallback(m, x);
  }, le.useContext = function(m) {
    return he.current.useContext(m);
  }, le.useDebugValue = function() {
  }, le.useDeferredValue = function(m) {
    return he.current.useDeferredValue(m);
  }, le.useEffect = function(m, x) {
    return he.current.useEffect(m, x);
  }, le.useId = function() {
    return he.current.useId();
  }, le.useImperativeHandle = function(m, x, K) {
    return he.current.useImperativeHandle(m, x, K);
  }, le.useInsertionEffect = function(m, x) {
    return he.current.useInsertionEffect(m, x);
  }, le.useLayoutEffect = function(m, x) {
    return he.current.useLayoutEffect(m, x);
  }, le.useMemo = function(m, x) {
    return he.current.useMemo(m, x);
  }, le.useReducer = function(m, x, K) {
    return he.current.useReducer(m, x, K);
  }, le.useRef = function(m) {
    return he.current.useRef(m);
  }, le.useState = function(m) {
    return he.current.useState(m);
  }, le.useSyncExternalStore = function(m, x, K) {
    return he.current.useSyncExternalStore(m, x, K);
  }, le.useTransition = function() {
    return he.current.useTransition();
  }, le.version = "18.3.1", le;
}
var Za;
function xu() {
  return Za || (Za = 1, vu.exports = ad()), vu.exports;
}
var Ja;
function cd() {
  if (Ja) return fl;
  Ja = 1;
  var u = xu(), s = /* @__PURE__ */ Symbol.for("react.element"), a = /* @__PURE__ */ Symbol.for("react.fragment"), k = Object.prototype.hasOwnProperty, w = u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, M = { key: !0, ref: !0, __self: !0, __source: !0 };
  function S(E, z, L) {
    var H, Y = {}, Q = null, ie = null;
    L !== void 0 && (Q = "" + L), z.key !== void 0 && (Q = "" + z.key), z.ref !== void 0 && (ie = z.ref);
    for (H in z) k.call(z, H) && !M.hasOwnProperty(H) && (Y[H] = z[H]);
    if (E && E.defaultProps) for (H in z = E.defaultProps, z) Y[H] === void 0 && (Y[H] = z[H]);
    return { $$typeof: s, type: E, key: Q, ref: ie, props: Y, _owner: w.current };
  }
  return fl.Fragment = a, fl.jsx = S, fl.jsxs = S, fl;
}
var qa;
function fd() {
  return qa || (qa = 1, hu.exports = cd()), hu.exports;
}
var R = fd(), Mi = {}, yu = { exports: {} }, ct = {}, gu = { exports: {} }, ku = {};
var ba;
function dd() {
  return ba || (ba = 1, (function(u) {
    function s(j, V) {
      var D = j.length;
      j.push(V);
      e: for (; 0 < D; ) {
        var m = D - 1 >>> 1, x = j[m];
        if (0 < w(x, V)) j[m] = V, j[D] = x, D = m;
        else break e;
      }
    }
    function a(j) {
      return j.length === 0 ? null : j[0];
    }
    function k(j) {
      if (j.length === 0) return null;
      var V = j[0], D = j.pop();
      if (D !== V) {
        j[0] = D;
        e: for (var m = 0, x = j.length, K = x >>> 1; m < K; ) {
          var ne = 2 * (m + 1) - 1, ce = j[ne], ae = ne + 1, ye = j[ae];
          if (0 > w(ce, D)) ae < x && 0 > w(ye, ce) ? (j[m] = ye, j[ae] = D, m = ae) : (j[m] = ce, j[ne] = D, m = ne);
          else if (ae < x && 0 > w(ye, D)) j[m] = ye, j[ae] = D, m = ae;
          else break e;
        }
      }
      return V;
    }
    function w(j, V) {
      var D = j.sortIndex - V.sortIndex;
      return D !== 0 ? D : j.id - V.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var M = performance;
      u.unstable_now = function() {
        return M.now();
      };
    } else {
      var S = Date, E = S.now();
      u.unstable_now = function() {
        return S.now() - E;
      };
    }
    var z = [], L = [], H = 1, Y = null, Q = 3, ie = !1, ee = !1, Z = !1, I = typeof setTimeout == "function" ? setTimeout : null, ze = typeof clearTimeout == "function" ? clearTimeout : null, Ce = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function se(j) {
      for (var V = a(L); V !== null; ) {
        if (V.callback === null) k(L);
        else if (V.startTime <= j) k(L), V.sortIndex = V.expirationTime, s(z, V);
        else break;
        V = a(L);
      }
    }
    function Ee(j) {
      if (Z = !1, se(j), !ee) if (a(z) !== null) ee = !0, Ne(te);
      else {
        var V = a(L);
        V !== null && he(Ee, V.startTime - j);
      }
    }
    function te(j, V) {
      ee = !1, Z && (Z = !1, ze(Ve), Ve = -1), ie = !0;
      var D = Q;
      try {
        for (se(V), Y = a(z); Y !== null && (!(Y.expirationTime > V) || j && !be()); ) {
          var m = Y.callback;
          if (typeof m == "function") {
            Y.callback = null, Q = Y.priorityLevel;
            var x = m(Y.expirationTime <= V);
            V = u.unstable_now(), typeof x == "function" ? Y.callback = x : Y === a(z) && k(z), se(V);
          } else k(z);
          Y = a(z);
        }
        if (Y !== null) var K = !0;
        else {
          var ne = a(L);
          ne !== null && he(Ee, ne.startTime - V), K = !1;
        }
        return K;
      } finally {
        Y = null, Q = D, ie = !1;
      }
    }
    var me = !1, oe = null, Ve = -1, Ae = 5, Qe = -1;
    function be() {
      return !(u.unstable_now() - Qe < Ae);
    }
    function ft() {
      if (oe !== null) {
        var j = u.unstable_now();
        Qe = j;
        var V = !0;
        try {
          V = oe(!0, j);
        } finally {
          V ? Ke() : (me = !1, oe = null);
        }
      } else me = !1;
    }
    var Ke;
    if (typeof Ce == "function") Ke = function() {
      Ce(ft);
    };
    else if (typeof MessageChannel < "u") {
      var et = new MessageChannel(), Ye = et.port2;
      et.port1.onmessage = ft, Ke = function() {
        Ye.postMessage(null);
      };
    } else Ke = function() {
      I(ft, 0);
    };
    function Ne(j) {
      oe = j, me || (me = !0, Ke());
    }
    function he(j, V) {
      Ve = I(function() {
        j(u.unstable_now());
      }, V);
    }
    u.unstable_IdlePriority = 5, u.unstable_ImmediatePriority = 1, u.unstable_LowPriority = 4, u.unstable_NormalPriority = 3, u.unstable_Profiling = null, u.unstable_UserBlockingPriority = 2, u.unstable_cancelCallback = function(j) {
      j.callback = null;
    }, u.unstable_continueExecution = function() {
      ee || ie || (ee = !0, Ne(te));
    }, u.unstable_forceFrameRate = function(j) {
      0 > j || 125 < j ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Ae = 0 < j ? Math.floor(1e3 / j) : 5;
    }, u.unstable_getCurrentPriorityLevel = function() {
      return Q;
    }, u.unstable_getFirstCallbackNode = function() {
      return a(z);
    }, u.unstable_next = function(j) {
      switch (Q) {
        case 1:
        case 2:
        case 3:
          var V = 3;
          break;
        default:
          V = Q;
      }
      var D = Q;
      Q = V;
      try {
        return j();
      } finally {
        Q = D;
      }
    }, u.unstable_pauseExecution = function() {
    }, u.unstable_requestPaint = function() {
    }, u.unstable_runWithPriority = function(j, V) {
      switch (j) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          j = 3;
      }
      var D = Q;
      Q = j;
      try {
        return V();
      } finally {
        Q = D;
      }
    }, u.unstable_scheduleCallback = function(j, V, D) {
      var m = u.unstable_now();
      switch (typeof D == "object" && D !== null ? (D = D.delay, D = typeof D == "number" && 0 < D ? m + D : m) : D = m, j) {
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
      return x = D + x, j = { id: H++, callback: V, priorityLevel: j, startTime: D, expirationTime: x, sortIndex: -1 }, D > m ? (j.sortIndex = D, s(L, j), a(z) === null && j === a(L) && (Z ? (ze(Ve), Ve = -1) : Z = !0, he(Ee, D - m))) : (j.sortIndex = x, s(z, j), ee || ie || (ee = !0, Ne(te))), j;
    }, u.unstable_shouldYield = be, u.unstable_wrapCallback = function(j) {
      var V = Q;
      return function() {
        var D = Q;
        Q = V;
        try {
          return j.apply(this, arguments);
        } finally {
          Q = D;
        }
      };
    };
  })(ku)), ku;
}
var ec;
function pd() {
  return ec || (ec = 1, gu.exports = dd()), gu.exports;
}
var tc;
function md() {
  if (tc) return ct;
  tc = 1;
  var u = xu(), s = pd();
  function a(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var k = /* @__PURE__ */ new Set(), w = {};
  function M(e, t) {
    S(e, t), S(e + "Capture", t);
  }
  function S(e, t) {
    for (w[e] = t, e = 0; e < t.length; e++) k.add(t[e]);
  }
  var E = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), z = Object.prototype.hasOwnProperty, L = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, H = {}, Y = {};
  function Q(e) {
    return z.call(Y, e) ? !0 : z.call(H, e) ? !1 : L.test(e) ? Y[e] = !0 : (H[e] = !0, !1);
  }
  function ie(e, t, n, r) {
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
  function ee(e, t, n, r) {
    if (t === null || typeof t > "u" || ie(e, t, n, r)) return !0;
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
  function Z(e, t, n, r, l, i, o) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = o;
  }
  var I = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    I[e] = new Z(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    I[t] = new Z(t, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    I[e] = new Z(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    I[e] = new Z(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    I[e] = new Z(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    I[e] = new Z(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    I[e] = new Z(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    I[e] = new Z(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    I[e] = new Z(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var ze = /[\-:]([a-z])/g;
  function Ce(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(
      ze,
      Ce
    );
    I[t] = new Z(t, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(ze, Ce);
    I[t] = new Z(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(ze, Ce);
    I[t] = new Z(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    I[e] = new Z(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), I.xlinkHref = new Z("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    I[e] = new Z(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function se(e, t, n, r) {
    var l = I.hasOwnProperty(t) ? I[t] : null;
    (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (ee(t, n, l, r) && (n = null), r || l === null ? Q(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var Ee = u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, te = /* @__PURE__ */ Symbol.for("react.element"), me = /* @__PURE__ */ Symbol.for("react.portal"), oe = /* @__PURE__ */ Symbol.for("react.fragment"), Ve = /* @__PURE__ */ Symbol.for("react.strict_mode"), Ae = /* @__PURE__ */ Symbol.for("react.profiler"), Qe = /* @__PURE__ */ Symbol.for("react.provider"), be = /* @__PURE__ */ Symbol.for("react.context"), ft = /* @__PURE__ */ Symbol.for("react.forward_ref"), Ke = /* @__PURE__ */ Symbol.for("react.suspense"), et = /* @__PURE__ */ Symbol.for("react.suspense_list"), Ye = /* @__PURE__ */ Symbol.for("react.memo"), Ne = /* @__PURE__ */ Symbol.for("react.lazy"), he = /* @__PURE__ */ Symbol.for("react.offscreen"), j = Symbol.iterator;
  function V(e) {
    return e === null || typeof e != "object" ? null : (e = j && e[j] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var D = Object.assign, m;
  function x(e) {
    if (m === void 0) try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      m = t && t[1] || "";
    }
    return `
` + m + e;
  }
  var K = !1;
  function ne(e, t) {
    if (!e || K) return "";
    K = !0;
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
        } catch (y) {
          var r = y;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (y) {
          r = y;
        }
        e.call(t.prototype);
      }
      else {
        try {
          throw Error();
        } catch (y) {
          r = y;
        }
        e();
      }
    } catch (y) {
      if (y && r && typeof y.stack == "string") {
        for (var l = y.stack.split(`
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
      K = !1, Error.prepareStackTrace = n;
    }
    return (e = e ? e.displayName || e.name : "") ? x(e) : "";
  }
  function ce(e) {
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
        return e = ne(e.type, !1), e;
      case 11:
        return e = ne(e.type.render, !1), e;
      case 1:
        return e = ne(e.type, !0), e;
      default:
        return "";
    }
  }
  function ae(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case oe:
        return "Fragment";
      case me:
        return "Portal";
      case Ae:
        return "Profiler";
      case Ve:
        return "StrictMode";
      case Ke:
        return "Suspense";
      case et:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case be:
        return (e.displayName || "Context") + ".Consumer";
      case Qe:
        return (e._context.displayName || "Context") + ".Provider";
      case ft:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case Ye:
        return t = e.displayName || null, t !== null ? t : ae(e.type) || "Memo";
      case Ne:
        t = e._payload, e = e._init;
        try {
          return ae(e(t));
        } catch {
        }
    }
    return null;
  }
  function ye(e) {
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
        return ae(t);
      case 8:
        return t === Ve ? "StrictMode" : "Mode";
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
  function fe(e) {
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
  function ge(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function tt(e) {
    var t = ge(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
  function Hn(e) {
    e._valueTracker || (e._valueTracker = tt(e));
  }
  function Nr(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), r = "";
    return e && (r = ge(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
  }
  function Qn(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Ht(e, t) {
    var n = t.checked;
    return D({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
  }
  function Kn(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
    n = fe(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function ue(e, t) {
    t = t.checked, t != null && se(e, "checked", t, !1);
  }
  function Yn(e, t) {
    ue(e, t);
    var n = fe(t.value), r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? Gn(e, t.type, n) : t.hasOwnProperty("defaultValue") && Gn(e, t.type, fe(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function Xn(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
  }
  function Gn(e, t, n) {
    (t !== "number" || Qn(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var en = Array.isArray;
  function nt(e, t, n, r) {
    if (e = e.options, t) {
      t = {};
      for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
      for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + fe(n), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === n) {
          e[l].selected = !0, r && (e[l].defaultSelected = !0);
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Zn(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(a(91));
    return D({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function Pr(e, t) {
    var n = t.value;
    if (n == null) {
      if (n = t.children, t = t.defaultValue, n != null) {
        if (t != null) throw Error(a(92));
        if (en(n)) {
          if (1 < n.length) throw Error(a(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), n = t;
    }
    e._wrapperState = { initialValue: fe(n) };
  }
  function hl(e, t) {
    var n = fe(t.value), r = fe(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
  }
  function tn(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function Rr(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Jn(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Rr(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var jt, zt = (function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, n, r, l);
      });
    } : e;
  })(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (jt = jt || document.createElement("div"), jt.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = jt.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
  function Ft(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Dt = {
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
  }, vl = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Dt).forEach(function(e) {
    vl.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), Dt[t] = Dt[e];
    });
  });
  function qn(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Dt.hasOwnProperty(e) && Dt[e] ? ("" + t).trim() : t + "px";
  }
  function yl(e, t) {
    e = e.style;
    for (var n in t) if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, l = qn(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
    }
  }
  var bn = D({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Tn(e, t) {
    if (t) {
      if (bn[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(a(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(a(60));
        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(a(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(a(62));
    }
  }
  function Nn(e, t) {
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
  var er = null;
  function tr(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var nr = null, Ot = null, It = null;
  function gl(e) {
    if (e = Zr(e)) {
      if (typeof nr != "function") throw Error(a(280));
      var t = e.stateNode;
      t && (t = Wl(t), nr(e.stateNode, e.type, t));
    }
  }
  function nn(e) {
    Ot ? It ? It.push(e) : It = [e] : Ot = e;
  }
  function rn() {
    if (Ot) {
      var e = Ot, t = It;
      if (It = Ot = null, gl(e), t) for (e = 0; e < t.length; e++) gl(t[e]);
    }
  }
  function rr(e, t) {
    return e(t);
  }
  function ln() {
  }
  var Lr = !1;
  function kl(e, t, n) {
    if (Lr) return e(t, n);
    Lr = !0;
    try {
      return rr(e, t, n);
    } finally {
      Lr = !1, (Ot !== null || It !== null) && (ln(), rn());
    }
  }
  function on(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = Wl(n);
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
  var lr = !1;
  if (E) try {
    var Qt = {};
    Object.defineProperty(Qt, "passive", { get: function() {
      lr = !0;
    } }), window.addEventListener("test", Qt, Qt), window.removeEventListener("test", Qt, Qt);
  } catch {
    lr = !1;
  }
  function Li(e, t, n, r, l, i, o, f, d) {
    var y = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, y);
    } catch (C) {
      this.onError(C);
    }
  }
  var Pn = !1, ir = null, Rn = !1, vt = null, wl = { onError: function(e) {
    Pn = !0, ir = e;
  } };
  function ji(e, t, n, r, l, i, o, f, d) {
    Pn = !1, ir = null, Li.apply(wl, arguments);
  }
  function c(e, t, n, r, l, i, o, f, d) {
    if (ji.apply(this, arguments), Pn) {
      if (Pn) {
        var y = ir;
        Pn = !1, ir = null;
      } else throw Error(a(198));
      Rn || (Rn = !0, vt = y);
    }
  }
  function g(e) {
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
  function P(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function B(e) {
    if (g(e) !== e) throw Error(a(188));
  }
  function $(e) {
    var t = e.alternate;
    if (!t) {
      if (t = g(e), t === null) throw Error(a(188));
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
          if (i === n) return B(l), e;
          if (i === r) return B(l), t;
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
  function re(e) {
    return e = $(e), e !== null ? b(e) : null;
  }
  function b(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = b(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var ke = s.unstable_scheduleCallback, we = s.unstable_cancelCallback, Xe = s.unstable_shouldYield, Le = s.unstable_requestPaint, Me = s.unstable_now, zi = s.unstable_getCurrentPriorityLevel, Fi = s.unstable_ImmediatePriority, _u = s.unstable_UserBlockingPriority, Sl = s.unstable_NormalPriority, Ec = s.unstable_LowPriority, Cu = s.unstable_IdlePriority, El = null, At = null;
  function xc(e) {
    if (At && typeof At.onCommitFiberRoot == "function") try {
      At.onCommitFiberRoot(El, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var Ct = Math.clz32 ? Math.clz32 : Mc, _c = Math.log, Cc = Math.LN2;
  function Mc(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (_c(e) / Cc | 0) | 0;
  }
  var xl = 64, _l = 4194304;
  function jr(e) {
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
  function Cl(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0, l = e.suspendedLanes, i = e.pingedLanes, o = n & 268435455;
    if (o !== 0) {
      var f = o & ~l;
      f !== 0 ? r = jr(f) : (i &= o, i !== 0 && (r = jr(i)));
    } else o = n & ~l, o !== 0 ? r = jr(o) : i !== 0 && (r = jr(i));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && (t & l) === 0 && (l = r & -r, i = t & -t, l >= i || l === 16 && (i & 4194240) !== 0)) return t;
    if ((r & 4) !== 0 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - Ct(t), l = 1 << n, r |= e[n], t &= ~l;
    return r;
  }
  function Tc(e, t) {
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
  function Nc(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
      var o = 31 - Ct(i), f = 1 << o, d = l[o];
      d === -1 ? ((f & n) === 0 || (f & r) !== 0) && (l[o] = Tc(f, t)) : d <= t && (e.expiredLanes |= f), i &= ~f;
    }
  }
  function Di(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function Mu() {
    var e = xl;
    return xl <<= 1, (xl & 4194240) === 0 && (xl = 64), e;
  }
  function Oi(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function zr(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Ct(t), e[t] = n;
  }
  function Pc(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var l = 31 - Ct(n), i = 1 << l;
      t[l] = 0, r[l] = -1, e[l] = -1, n &= ~i;
    }
  }
  function Ii(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var r = 31 - Ct(n), l = 1 << r;
      l & t | e[r] & t && (e[r] |= t), n &= ~l;
    }
  }
  var ve = 0;
  function Tu(e) {
    return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var Nu, Ai, Pu, Ru, Lu, Ui = !1, Ml = [], un = null, sn = null, an = null, Fr = /* @__PURE__ */ new Map(), Dr = /* @__PURE__ */ new Map(), cn = [], Rc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function ju(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        un = null;
        break;
      case "dragenter":
      case "dragleave":
        sn = null;
        break;
      case "mouseover":
      case "mouseout":
        an = null;
        break;
      case "pointerover":
      case "pointerout":
        Fr.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Dr.delete(t.pointerId);
    }
  }
  function Or(e, t, n, r, l, i) {
    return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [l] }, t !== null && (t = Zr(t), t !== null && Ai(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
  }
  function Lc(e, t, n, r, l) {
    switch (t) {
      case "focusin":
        return un = Or(un, e, t, n, r, l), !0;
      case "dragenter":
        return sn = Or(sn, e, t, n, r, l), !0;
      case "mouseover":
        return an = Or(an, e, t, n, r, l), !0;
      case "pointerover":
        var i = l.pointerId;
        return Fr.set(i, Or(Fr.get(i) || null, e, t, n, r, l)), !0;
      case "gotpointercapture":
        return i = l.pointerId, Dr.set(i, Or(Dr.get(i) || null, e, t, n, r, l)), !0;
    }
    return !1;
  }
  function zu(e) {
    var t = Ln(e.target);
    if (t !== null) {
      var n = g(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = P(n), t !== null) {
            e.blockedOn = t, Lu(e.priority, function() {
              Pu(n);
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
  function Tl(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Wi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        er = r, n.target.dispatchEvent(r), er = null;
      } else return t = Zr(n), t !== null && Ai(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function Fu(e, t, n) {
    Tl(e) && n.delete(t);
  }
  function jc() {
    Ui = !1, un !== null && Tl(un) && (un = null), sn !== null && Tl(sn) && (sn = null), an !== null && Tl(an) && (an = null), Fr.forEach(Fu), Dr.forEach(Fu);
  }
  function Ir(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Ui || (Ui = !0, s.unstable_scheduleCallback(s.unstable_NormalPriority, jc)));
  }
  function Ar(e) {
    function t(l) {
      return Ir(l, e);
    }
    if (0 < Ml.length) {
      Ir(Ml[0], e);
      for (var n = 1; n < Ml.length; n++) {
        var r = Ml[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (un !== null && Ir(un, e), sn !== null && Ir(sn, e), an !== null && Ir(an, e), Fr.forEach(t), Dr.forEach(t), n = 0; n < cn.length; n++) r = cn[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < cn.length && (n = cn[0], n.blockedOn === null); ) zu(n), n.blockedOn === null && cn.shift();
  }
  var or = Ee.ReactCurrentBatchConfig, Nl = !0;
  function zc(e, t, n, r) {
    var l = ve, i = or.transition;
    or.transition = null;
    try {
      ve = 1, $i(e, t, n, r);
    } finally {
      ve = l, or.transition = i;
    }
  }
  function Fc(e, t, n, r) {
    var l = ve, i = or.transition;
    or.transition = null;
    try {
      ve = 4, $i(e, t, n, r);
    } finally {
      ve = l, or.transition = i;
    }
  }
  function $i(e, t, n, r) {
    if (Nl) {
      var l = Wi(e, t, n, r);
      if (l === null) lo(e, t, r, Pl, n), ju(e, r);
      else if (Lc(l, e, t, n, r)) r.stopPropagation();
      else if (ju(e, r), t & 4 && -1 < Rc.indexOf(e)) {
        for (; l !== null; ) {
          var i = Zr(l);
          if (i !== null && Nu(i), i = Wi(e, t, n, r), i === null && lo(e, t, r, Pl, n), i === l) break;
          l = i;
        }
        l !== null && r.stopPropagation();
      } else lo(e, t, r, null, n);
    }
  }
  var Pl = null;
  function Wi(e, t, n, r) {
    if (Pl = null, e = tr(r), e = Ln(e), e !== null) if (t = g(e), t === null) e = null;
    else if (n = t.tag, n === 13) {
      if (e = P(t), e !== null) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
    return Pl = e, null;
  }
  function Du(e) {
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
        switch (zi()) {
          case Fi:
            return 1;
          case _u:
            return 4;
          case Sl:
          case Ec:
            return 16;
          case Cu:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var fn = null, Vi = null, Rl = null;
  function Ou() {
    if (Rl) return Rl;
    var e, t = Vi, n = t.length, r, l = "value" in fn ? fn.value : fn.textContent, i = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++) ;
    var o = n - e;
    for (r = 1; r <= o && t[n - r] === l[i - r]; r++) ;
    return Rl = l.slice(e, 1 < r ? 1 - r : void 0);
  }
  function Ll(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function jl() {
    return !0;
  }
  function Iu() {
    return !1;
  }
  function dt(e) {
    function t(n, r, l, i, o) {
      this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = i, this.target = o, this.currentTarget = null;
      for (var f in e) e.hasOwnProperty(f) && (n = e[f], this[f] = n ? n(i) : i[f]);
      return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? jl : Iu, this.isPropagationStopped = Iu, this;
    }
    return D(t.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var n = this.nativeEvent;
      n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = jl);
    }, stopPropagation: function() {
      var n = this.nativeEvent;
      n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = jl);
    }, persist: function() {
    }, isPersistent: jl }), t;
  }
  var ur = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Bi = dt(ur), Ur = D({}, ur, { view: 0, detail: 0 }), Dc = dt(Ur), Hi, Qi, $r, zl = D({}, Ur, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Yi, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== $r && ($r && e.type === "mousemove" ? (Hi = e.screenX - $r.screenX, Qi = e.screenY - $r.screenY) : Qi = Hi = 0, $r = e), Hi);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : Qi;
  } }), Au = dt(zl), Oc = D({}, zl, { dataTransfer: 0 }), Ic = dt(Oc), Ac = D({}, Ur, { relatedTarget: 0 }), Ki = dt(Ac), Uc = D({}, ur, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), $c = dt(Uc), Wc = D({}, ur, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), Vc = dt(Wc), Bc = D({}, ur, { data: 0 }), Uu = dt(Bc), Hc = {
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
  }, Qc = {
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
  }, Kc = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Yc(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Kc[e]) ? !!t[e] : !1;
  }
  function Yi() {
    return Yc;
  }
  var Xc = D({}, Ur, { key: function(e) {
    if (e.key) {
      var t = Hc[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = Ll(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Qc[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Yi, charCode: function(e) {
    return e.type === "keypress" ? Ll(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? Ll(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), Gc = dt(Xc), Zc = D({}, zl, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), $u = dt(Zc), Jc = D({}, Ur, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Yi }), qc = dt(Jc), bc = D({}, ur, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), ef = dt(bc), tf = D({}, zl, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), nf = dt(tf), rf = [9, 13, 27, 32], Xi = E && "CompositionEvent" in window, Wr = null;
  E && "documentMode" in document && (Wr = document.documentMode);
  var lf = E && "TextEvent" in window && !Wr, Wu = E && (!Xi || Wr && 8 < Wr && 11 >= Wr), Vu = " ", Bu = !1;
  function Hu(e, t) {
    switch (e) {
      case "keyup":
        return rf.indexOf(t.keyCode) !== -1;
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
  function Qu(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var sr = !1;
  function of(e, t) {
    switch (e) {
      case "compositionend":
        return Qu(t);
      case "keypress":
        return t.which !== 32 ? null : (Bu = !0, Vu);
      case "textInput":
        return e = t.data, e === Vu && Bu ? null : e;
      default:
        return null;
    }
  }
  function uf(e, t) {
    if (sr) return e === "compositionend" || !Xi && Hu(e, t) ? (e = Ou(), Rl = Vi = fn = null, sr = !1, e) : null;
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
        return Wu && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var sf = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Ku(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!sf[e.type] : t === "textarea";
  }
  function Yu(e, t, n, r) {
    nn(r), t = Al(t, "onChange"), 0 < t.length && (n = new Bi("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
  }
  var Vr = null, Br = null;
  function af(e) {
    fs(e, 0);
  }
  function Fl(e) {
    var t = pr(e);
    if (Nr(t)) return e;
  }
  function cf(e, t) {
    if (e === "change") return t;
  }
  var Xu = !1;
  if (E) {
    var Gi;
    if (E) {
      var Zi = "oninput" in document;
      if (!Zi) {
        var Gu = document.createElement("div");
        Gu.setAttribute("oninput", "return;"), Zi = typeof Gu.oninput == "function";
      }
      Gi = Zi;
    } else Gi = !1;
    Xu = Gi && (!document.documentMode || 9 < document.documentMode);
  }
  function Zu() {
    Vr && (Vr.detachEvent("onpropertychange", Ju), Br = Vr = null);
  }
  function Ju(e) {
    if (e.propertyName === "value" && Fl(Br)) {
      var t = [];
      Yu(t, Br, e, tr(e)), kl(af, t);
    }
  }
  function ff(e, t, n) {
    e === "focusin" ? (Zu(), Vr = t, Br = n, Vr.attachEvent("onpropertychange", Ju)) : e === "focusout" && Zu();
  }
  function df(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Fl(Br);
  }
  function pf(e, t) {
    if (e === "click") return Fl(t);
  }
  function mf(e, t) {
    if (e === "input" || e === "change") return Fl(t);
  }
  function hf(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Mt = typeof Object.is == "function" ? Object.is : hf;
  function Hr(e, t) {
    if (Mt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e), r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var l = n[r];
      if (!z.call(t, l) || !Mt(e[l], t[l])) return !1;
    }
    return !0;
  }
  function qu(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function bu(e, t) {
    var n = qu(e);
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
      n = qu(n);
    }
  }
  function es(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? es(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function ts() {
    for (var e = window, t = Qn(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Qn(e.document);
    }
    return t;
  }
  function Ji(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function vf(e) {
    var t = ts(), n = e.focusedElem, r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && es(n.ownerDocument.documentElement, n)) {
      if (r !== null && Ji(n)) {
        if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
        else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var l = n.textContent.length, i = Math.min(r.start, l);
          r = r.end === void 0 ? i : Math.min(r.end, l), !e.extend && i > r && (l = r, r = i, i = l), l = bu(n, i);
          var o = bu(
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
  var yf = E && "documentMode" in document && 11 >= document.documentMode, ar = null, qi = null, Qr = null, bi = !1;
  function ns(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    bi || ar == null || ar !== Qn(r) || (r = ar, "selectionStart" in r && Ji(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Qr && Hr(Qr, r) || (Qr = r, r = Al(qi, "onSelect"), 0 < r.length && (t = new Bi("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = ar)));
  }
  function Dl(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var cr = { animationend: Dl("Animation", "AnimationEnd"), animationiteration: Dl("Animation", "AnimationIteration"), animationstart: Dl("Animation", "AnimationStart"), transitionend: Dl("Transition", "TransitionEnd") }, eo = {}, rs = {};
  E && (rs = document.createElement("div").style, "AnimationEvent" in window || (delete cr.animationend.animation, delete cr.animationiteration.animation, delete cr.animationstart.animation), "TransitionEvent" in window || delete cr.transitionend.transition);
  function Ol(e) {
    if (eo[e]) return eo[e];
    if (!cr[e]) return e;
    var t = cr[e], n;
    for (n in t) if (t.hasOwnProperty(n) && n in rs) return eo[e] = t[n];
    return e;
  }
  var ls = Ol("animationend"), is = Ol("animationiteration"), os = Ol("animationstart"), us = Ol("transitionend"), ss = /* @__PURE__ */ new Map(), as = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function dn(e, t) {
    ss.set(e, t), M(t, [e]);
  }
  for (var to = 0; to < as.length; to++) {
    var no = as[to], gf = no.toLowerCase(), kf = no[0].toUpperCase() + no.slice(1);
    dn(gf, "on" + kf);
  }
  dn(ls, "onAnimationEnd"), dn(is, "onAnimationIteration"), dn(os, "onAnimationStart"), dn("dblclick", "onDoubleClick"), dn("focusin", "onFocus"), dn("focusout", "onBlur"), dn(us, "onTransitionEnd"), S("onMouseEnter", ["mouseout", "mouseover"]), S("onMouseLeave", ["mouseout", "mouseover"]), S("onPointerEnter", ["pointerout", "pointerover"]), S("onPointerLeave", ["pointerout", "pointerover"]), M("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), M("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), M("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), M("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), M("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), M("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Kr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), wf = new Set("cancel close invalid load scroll toggle".split(" ").concat(Kr));
  function cs(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, c(r, t, void 0, e), e.currentTarget = null;
  }
  function fs(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n], l = r.event;
      r = r.listeners;
      e: {
        var i = void 0;
        if (t) for (var o = r.length - 1; 0 <= o; o--) {
          var f = r[o], d = f.instance, y = f.currentTarget;
          if (f = f.listener, d !== i && l.isPropagationStopped()) break e;
          cs(l, f, y), i = d;
        }
        else for (o = 0; o < r.length; o++) {
          if (f = r[o], d = f.instance, y = f.currentTarget, f = f.listener, d !== i && l.isPropagationStopped()) break e;
          cs(l, f, y), i = d;
        }
      }
    }
    if (Rn) throw e = vt, Rn = !1, vt = null, e;
  }
  function xe(e, t) {
    var n = t[co];
    n === void 0 && (n = t[co] = /* @__PURE__ */ new Set());
    var r = e + "__bubble";
    n.has(r) || (ds(t, e, 2, !1), n.add(r));
  }
  function ro(e, t, n) {
    var r = 0;
    t && (r |= 4), ds(n, e, r, t);
  }
  var Il = "_reactListening" + Math.random().toString(36).slice(2);
  function Yr(e) {
    if (!e[Il]) {
      e[Il] = !0, k.forEach(function(n) {
        n !== "selectionchange" && (wf.has(n) || ro(n, !1, e), ro(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Il] || (t[Il] = !0, ro("selectionchange", !1, t));
    }
  }
  function ds(e, t, n, r) {
    switch (Du(t)) {
      case 1:
        var l = zc;
        break;
      case 4:
        l = Fc;
        break;
      default:
        l = $i;
    }
    n = l.bind(null, t, n, e), l = void 0, !lr || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
  }
  function lo(e, t, n, r, l) {
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
          if (o = Ln(f), o === null) return;
          if (d = o.tag, d === 5 || d === 6) {
            r = i = o;
            continue e;
          }
          f = f.parentNode;
        }
      }
      r = r.return;
    }
    kl(function() {
      var y = i, C = tr(n), T = [];
      e: {
        var _ = ss.get(e);
        if (_ !== void 0) {
          var F = Bi, A = e;
          switch (e) {
            case "keypress":
              if (Ll(n) === 0) break e;
            case "keydown":
            case "keyup":
              F = Gc;
              break;
            case "focusin":
              A = "focus", F = Ki;
              break;
            case "focusout":
              A = "blur", F = Ki;
              break;
            case "beforeblur":
            case "afterblur":
              F = Ki;
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
              F = Au;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              F = Ic;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              F = qc;
              break;
            case ls:
            case is:
            case os:
              F = $c;
              break;
            case us:
              F = ef;
              break;
            case "scroll":
              F = Dc;
              break;
            case "wheel":
              F = nf;
              break;
            case "copy":
            case "cut":
            case "paste":
              F = Vc;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              F = $u;
          }
          var U = (t & 4) !== 0, Fe = !U && e === "scroll", h = U ? _ !== null ? _ + "Capture" : null : _;
          U = [];
          for (var p = y, v; p !== null; ) {
            v = p;
            var N = v.stateNode;
            if (v.tag === 5 && N !== null && (v = N, h !== null && (N = on(p, h), N != null && U.push(Xr(p, N, v)))), Fe) break;
            p = p.return;
          }
          0 < U.length && (_ = new F(_, A, null, n, C), T.push({ event: _, listeners: U }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (_ = e === "mouseover" || e === "pointerover", F = e === "mouseout" || e === "pointerout", _ && n !== er && (A = n.relatedTarget || n.fromElement) && (Ln(A) || A[Kt])) break e;
          if ((F || _) && (_ = C.window === C ? C : (_ = C.ownerDocument) ? _.defaultView || _.parentWindow : window, F ? (A = n.relatedTarget || n.toElement, F = y, A = A ? Ln(A) : null, A !== null && (Fe = g(A), A !== Fe || A.tag !== 5 && A.tag !== 6) && (A = null)) : (F = null, A = y), F !== A)) {
            if (U = Au, N = "onMouseLeave", h = "onMouseEnter", p = "mouse", (e === "pointerout" || e === "pointerover") && (U = $u, N = "onPointerLeave", h = "onPointerEnter", p = "pointer"), Fe = F == null ? _ : pr(F), v = A == null ? _ : pr(A), _ = new U(N, p + "leave", F, n, C), _.target = Fe, _.relatedTarget = v, N = null, Ln(C) === y && (U = new U(h, p + "enter", A, n, C), U.target = v, U.relatedTarget = Fe, N = U), Fe = N, F && A) t: {
              for (U = F, h = A, p = 0, v = U; v; v = fr(v)) p++;
              for (v = 0, N = h; N; N = fr(N)) v++;
              for (; 0 < p - v; ) U = fr(U), p--;
              for (; 0 < v - p; ) h = fr(h), v--;
              for (; p--; ) {
                if (U === h || h !== null && U === h.alternate) break t;
                U = fr(U), h = fr(h);
              }
              U = null;
            }
            else U = null;
            F !== null && ps(T, _, F, U, !1), A !== null && Fe !== null && ps(T, Fe, A, U, !0);
          }
        }
        e: {
          if (_ = y ? pr(y) : window, F = _.nodeName && _.nodeName.toLowerCase(), F === "select" || F === "input" && _.type === "file") var W = cf;
          else if (Ku(_)) if (Xu) W = mf;
          else {
            W = df;
            var X = ff;
          }
          else (F = _.nodeName) && F.toLowerCase() === "input" && (_.type === "checkbox" || _.type === "radio") && (W = pf);
          if (W && (W = W(e, y))) {
            Yu(T, W, n, C);
            break e;
          }
          X && X(e, _, y), e === "focusout" && (X = _._wrapperState) && X.controlled && _.type === "number" && Gn(_, "number", _.value);
        }
        switch (X = y ? pr(y) : window, e) {
          case "focusin":
            (Ku(X) || X.contentEditable === "true") && (ar = X, qi = y, Qr = null);
            break;
          case "focusout":
            Qr = qi = ar = null;
            break;
          case "mousedown":
            bi = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            bi = !1, ns(T, n, C);
            break;
          case "selectionchange":
            if (yf) break;
          case "keydown":
          case "keyup":
            ns(T, n, C);
        }
        var G;
        if (Xi) e: {
          switch (e) {
            case "compositionstart":
              var q = "onCompositionStart";
              break e;
            case "compositionend":
              q = "onCompositionEnd";
              break e;
            case "compositionupdate":
              q = "onCompositionUpdate";
              break e;
          }
          q = void 0;
        }
        else sr ? Hu(e, n) && (q = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (q = "onCompositionStart");
        q && (Wu && n.locale !== "ko" && (sr || q !== "onCompositionStart" ? q === "onCompositionEnd" && sr && (G = Ou()) : (fn = C, Vi = "value" in fn ? fn.value : fn.textContent, sr = !0)), X = Al(y, q), 0 < X.length && (q = new Uu(q, e, null, n, C), T.push({ event: q, listeners: X }), G ? q.data = G : (G = Qu(n), G !== null && (q.data = G)))), (G = lf ? of(e, n) : uf(e, n)) && (y = Al(y, "onBeforeInput"), 0 < y.length && (C = new Uu("onBeforeInput", "beforeinput", null, n, C), T.push({ event: C, listeners: y }), C.data = G));
      }
      fs(T, t);
    });
  }
  function Xr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Al(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var l = e, i = l.stateNode;
      l.tag === 5 && i !== null && (l = i, i = on(e, n), i != null && r.unshift(Xr(e, i, l)), i = on(e, t), i != null && r.push(Xr(e, i, l))), e = e.return;
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
  function ps(e, t, n, r, l) {
    for (var i = t._reactName, o = []; n !== null && n !== r; ) {
      var f = n, d = f.alternate, y = f.stateNode;
      if (d !== null && d === r) break;
      f.tag === 5 && y !== null && (f = y, l ? (d = on(n, i), d != null && o.unshift(Xr(n, d, f))) : l || (d = on(n, i), d != null && o.push(Xr(n, d, f)))), n = n.return;
    }
    o.length !== 0 && e.push({ event: t, listeners: o });
  }
  var Sf = /\r\n?/g, Ef = /\u0000|\uFFFD/g;
  function ms(e) {
    return (typeof e == "string" ? e : "" + e).replace(Sf, `
`).replace(Ef, "");
  }
  function Ul(e, t, n) {
    if (t = ms(t), ms(e) !== t && n) throw Error(a(425));
  }
  function $l() {
  }
  var io = null, oo = null;
  function uo(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var so = typeof setTimeout == "function" ? setTimeout : void 0, xf = typeof clearTimeout == "function" ? clearTimeout : void 0, hs = typeof Promise == "function" ? Promise : void 0, _f = typeof queueMicrotask == "function" ? queueMicrotask : typeof hs < "u" ? function(e) {
    return hs.resolve(null).then(e).catch(Cf);
  } : so;
  function Cf(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function ao(e, t) {
    var n = t, r = 0;
    do {
      var l = n.nextSibling;
      if (e.removeChild(n), l && l.nodeType === 8) if (n = l.data, n === "/$") {
        if (r === 0) {
          e.removeChild(l), Ar(t);
          return;
        }
        r--;
      } else n !== "$" && n !== "$?" && n !== "$!" || r++;
      n = l;
    } while (n);
    Ar(t);
  }
  function pn(e) {
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
  function vs(e) {
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
  var dr = Math.random().toString(36).slice(2), Ut = "__reactFiber$" + dr, Gr = "__reactProps$" + dr, Kt = "__reactContainer$" + dr, co = "__reactEvents$" + dr, Mf = "__reactListeners$" + dr, Tf = "__reactHandles$" + dr;
  function Ln(e) {
    var t = e[Ut];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[Kt] || n[Ut]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = vs(e); e !== null; ) {
          if (n = e[Ut]) return n;
          e = vs(e);
        }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function Zr(e) {
    return e = e[Ut] || e[Kt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function pr(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(a(33));
  }
  function Wl(e) {
    return e[Gr] || null;
  }
  var fo = [], mr = -1;
  function mn(e) {
    return { current: e };
  }
  function _e(e) {
    0 > mr || (e.current = fo[mr], fo[mr] = null, mr--);
  }
  function Se(e, t) {
    mr++, fo[mr] = e.current, e.current = t;
  }
  var hn = {}, Ge = mn(hn), it = mn(!1), jn = hn;
  function hr(e, t) {
    var n = e.type.contextTypes;
    if (!n) return hn;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var l = {}, i;
    for (i in n) l[i] = t[i];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
  }
  function ot(e) {
    return e = e.childContextTypes, e != null;
  }
  function Vl() {
    _e(it), _e(Ge);
  }
  function ys(e, t, n) {
    if (Ge.current !== hn) throw Error(a(168));
    Se(Ge, t), Se(it, n);
  }
  function gs(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var l in r) if (!(l in t)) throw Error(a(108, ye(e) || "Unknown", l));
    return D({}, n, r);
  }
  function Bl(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || hn, jn = Ge.current, Se(Ge, e), Se(it, it.current), !0;
  }
  function ks(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(a(169));
    n ? (e = gs(e, t, jn), r.__reactInternalMemoizedMergedChildContext = e, _e(it), _e(Ge), Se(Ge, e)) : _e(it), Se(it, n);
  }
  var Yt = null, Hl = !1, po = !1;
  function ws(e) {
    Yt === null ? Yt = [e] : Yt.push(e);
  }
  function Nf(e) {
    Hl = !0, ws(e);
  }
  function vn() {
    if (!po && Yt !== null) {
      po = !0;
      var e = 0, t = ve;
      try {
        var n = Yt;
        for (ve = 1; e < n.length; e++) {
          var r = n[e];
          do
            r = r(!0);
          while (r !== null);
        }
        Yt = null, Hl = !1;
      } catch (l) {
        throw Yt !== null && (Yt = Yt.slice(e + 1)), ke(Fi, vn), l;
      } finally {
        ve = t, po = !1;
      }
    }
    return null;
  }
  var vr = [], yr = 0, Ql = null, Kl = 0, yt = [], gt = 0, zn = null, Xt = 1, Gt = "";
  function Fn(e, t) {
    vr[yr++] = Kl, vr[yr++] = Ql, Ql = e, Kl = t;
  }
  function Ss(e, t, n) {
    yt[gt++] = Xt, yt[gt++] = Gt, yt[gt++] = zn, zn = e;
    var r = Xt;
    e = Gt;
    var l = 32 - Ct(r) - 1;
    r &= ~(1 << l), n += 1;
    var i = 32 - Ct(t) + l;
    if (30 < i) {
      var o = l - l % 5;
      i = (r & (1 << o) - 1).toString(32), r >>= o, l -= o, Xt = 1 << 32 - Ct(t) + l | n << l | r, Gt = i + e;
    } else Xt = 1 << i | n << l | r, Gt = e;
  }
  function mo(e) {
    e.return !== null && (Fn(e, 1), Ss(e, 1, 0));
  }
  function ho(e) {
    for (; e === Ql; ) Ql = vr[--yr], vr[yr] = null, Kl = vr[--yr], vr[yr] = null;
    for (; e === zn; ) zn = yt[--gt], yt[gt] = null, Gt = yt[--gt], yt[gt] = null, Xt = yt[--gt], yt[gt] = null;
  }
  var pt = null, mt = null, Te = !1, Tt = null;
  function Es(e, t) {
    var n = Et(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
  }
  function xs(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, pt = e, mt = pn(t.firstChild), !0) : !1;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, pt = e, mt = null, !0) : !1;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (n = zn !== null ? { id: Xt, overflow: Gt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Et(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, pt = e, mt = null, !0) : !1;
      default:
        return !1;
    }
  }
  function vo(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function yo(e) {
    if (Te) {
      var t = mt;
      if (t) {
        var n = t;
        if (!xs(e, t)) {
          if (vo(e)) throw Error(a(418));
          t = pn(n.nextSibling);
          var r = pt;
          t && xs(e, t) ? Es(r, n) : (e.flags = e.flags & -4097 | 2, Te = !1, pt = e);
        }
      } else {
        if (vo(e)) throw Error(a(418));
        e.flags = e.flags & -4097 | 2, Te = !1, pt = e;
      }
    }
  }
  function _s(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    pt = e;
  }
  function Yl(e) {
    if (e !== pt) return !1;
    if (!Te) return _s(e), Te = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !uo(e.type, e.memoizedProps)), t && (t = mt)) {
      if (vo(e)) throw Cs(), Error(a(418));
      for (; t; ) Es(e, t), t = pn(t.nextSibling);
    }
    if (_s(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(a(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                mt = pn(e.nextSibling);
                break e;
              }
              t--;
            } else n !== "$" && n !== "$!" && n !== "$?" || t++;
          }
          e = e.nextSibling;
        }
        mt = null;
      }
    } else mt = pt ? pn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Cs() {
    for (var e = mt; e; ) e = pn(e.nextSibling);
  }
  function gr() {
    mt = pt = null, Te = !1;
  }
  function go(e) {
    Tt === null ? Tt = [e] : Tt.push(e);
  }
  var Pf = Ee.ReactCurrentBatchConfig;
  function Jr(e, t, n) {
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
  function Xl(e, t) {
    throw e = Object.prototype.toString.call(t), Error(a(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
  }
  function Ms(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Ts(e) {
    function t(h, p) {
      if (e) {
        var v = h.deletions;
        v === null ? (h.deletions = [p], h.flags |= 16) : v.push(p);
      }
    }
    function n(h, p) {
      if (!e) return null;
      for (; p !== null; ) t(h, p), p = p.sibling;
      return null;
    }
    function r(h, p) {
      for (h = /* @__PURE__ */ new Map(); p !== null; ) p.key !== null ? h.set(p.key, p) : h.set(p.index, p), p = p.sibling;
      return h;
    }
    function l(h, p) {
      return h = _n(h, p), h.index = 0, h.sibling = null, h;
    }
    function i(h, p, v) {
      return h.index = v, e ? (v = h.alternate, v !== null ? (v = v.index, v < p ? (h.flags |= 2, p) : v) : (h.flags |= 2, p)) : (h.flags |= 1048576, p);
    }
    function o(h) {
      return e && h.alternate === null && (h.flags |= 2), h;
    }
    function f(h, p, v, N) {
      return p === null || p.tag !== 6 ? (p = au(v, h.mode, N), p.return = h, p) : (p = l(p, v), p.return = h, p);
    }
    function d(h, p, v, N) {
      var W = v.type;
      return W === oe ? C(h, p, v.props.children, N, v.key) : p !== null && (p.elementType === W || typeof W == "object" && W !== null && W.$$typeof === Ne && Ms(W) === p.type) ? (N = l(p, v.props), N.ref = Jr(h, p, v), N.return = h, N) : (N = gi(v.type, v.key, v.props, null, h.mode, N), N.ref = Jr(h, p, v), N.return = h, N);
    }
    function y(h, p, v, N) {
      return p === null || p.tag !== 4 || p.stateNode.containerInfo !== v.containerInfo || p.stateNode.implementation !== v.implementation ? (p = cu(v, h.mode, N), p.return = h, p) : (p = l(p, v.children || []), p.return = h, p);
    }
    function C(h, p, v, N, W) {
      return p === null || p.tag !== 7 ? (p = Vn(v, h.mode, N, W), p.return = h, p) : (p = l(p, v), p.return = h, p);
    }
    function T(h, p, v) {
      if (typeof p == "string" && p !== "" || typeof p == "number") return p = au("" + p, h.mode, v), p.return = h, p;
      if (typeof p == "object" && p !== null) {
        switch (p.$$typeof) {
          case te:
            return v = gi(p.type, p.key, p.props, null, h.mode, v), v.ref = Jr(h, null, p), v.return = h, v;
          case me:
            return p = cu(p, h.mode, v), p.return = h, p;
          case Ne:
            var N = p._init;
            return T(h, N(p._payload), v);
        }
        if (en(p) || V(p)) return p = Vn(p, h.mode, v, null), p.return = h, p;
        Xl(h, p);
      }
      return null;
    }
    function _(h, p, v, N) {
      var W = p !== null ? p.key : null;
      if (typeof v == "string" && v !== "" || typeof v == "number") return W !== null ? null : f(h, p, "" + v, N);
      if (typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case te:
            return v.key === W ? d(h, p, v, N) : null;
          case me:
            return v.key === W ? y(h, p, v, N) : null;
          case Ne:
            return W = v._init, _(
              h,
              p,
              W(v._payload),
              N
            );
        }
        if (en(v) || V(v)) return W !== null ? null : C(h, p, v, N, null);
        Xl(h, v);
      }
      return null;
    }
    function F(h, p, v, N, W) {
      if (typeof N == "string" && N !== "" || typeof N == "number") return h = h.get(v) || null, f(p, h, "" + N, W);
      if (typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case te:
            return h = h.get(N.key === null ? v : N.key) || null, d(p, h, N, W);
          case me:
            return h = h.get(N.key === null ? v : N.key) || null, y(p, h, N, W);
          case Ne:
            var X = N._init;
            return F(h, p, v, X(N._payload), W);
        }
        if (en(N) || V(N)) return h = h.get(v) || null, C(p, h, N, W, null);
        Xl(p, N);
      }
      return null;
    }
    function A(h, p, v, N) {
      for (var W = null, X = null, G = p, q = p = 0, We = null; G !== null && q < v.length; q++) {
        G.index > q ? (We = G, G = null) : We = G.sibling;
        var pe = _(h, G, v[q], N);
        if (pe === null) {
          G === null && (G = We);
          break;
        }
        e && G && pe.alternate === null && t(h, G), p = i(pe, p, q), X === null ? W = pe : X.sibling = pe, X = pe, G = We;
      }
      if (q === v.length) return n(h, G), Te && Fn(h, q), W;
      if (G === null) {
        for (; q < v.length; q++) G = T(h, v[q], N), G !== null && (p = i(G, p, q), X === null ? W = G : X.sibling = G, X = G);
        return Te && Fn(h, q), W;
      }
      for (G = r(h, G); q < v.length; q++) We = F(G, h, q, v[q], N), We !== null && (e && We.alternate !== null && G.delete(We.key === null ? q : We.key), p = i(We, p, q), X === null ? W = We : X.sibling = We, X = We);
      return e && G.forEach(function(Cn) {
        return t(h, Cn);
      }), Te && Fn(h, q), W;
    }
    function U(h, p, v, N) {
      var W = V(v);
      if (typeof W != "function") throw Error(a(150));
      if (v = W.call(v), v == null) throw Error(a(151));
      for (var X = W = null, G = p, q = p = 0, We = null, pe = v.next(); G !== null && !pe.done; q++, pe = v.next()) {
        G.index > q ? (We = G, G = null) : We = G.sibling;
        var Cn = _(h, G, pe.value, N);
        if (Cn === null) {
          G === null && (G = We);
          break;
        }
        e && G && Cn.alternate === null && t(h, G), p = i(Cn, p, q), X === null ? W = Cn : X.sibling = Cn, X = Cn, G = We;
      }
      if (pe.done) return n(
        h,
        G
      ), Te && Fn(h, q), W;
      if (G === null) {
        for (; !pe.done; q++, pe = v.next()) pe = T(h, pe.value, N), pe !== null && (p = i(pe, p, q), X === null ? W = pe : X.sibling = pe, X = pe);
        return Te && Fn(h, q), W;
      }
      for (G = r(h, G); !pe.done; q++, pe = v.next()) pe = F(G, h, q, pe.value, N), pe !== null && (e && pe.alternate !== null && G.delete(pe.key === null ? q : pe.key), p = i(pe, p, q), X === null ? W = pe : X.sibling = pe, X = pe);
      return e && G.forEach(function(sd) {
        return t(h, sd);
      }), Te && Fn(h, q), W;
    }
    function Fe(h, p, v, N) {
      if (typeof v == "object" && v !== null && v.type === oe && v.key === null && (v = v.props.children), typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case te:
            e: {
              for (var W = v.key, X = p; X !== null; ) {
                if (X.key === W) {
                  if (W = v.type, W === oe) {
                    if (X.tag === 7) {
                      n(h, X.sibling), p = l(X, v.props.children), p.return = h, h = p;
                      break e;
                    }
                  } else if (X.elementType === W || typeof W == "object" && W !== null && W.$$typeof === Ne && Ms(W) === X.type) {
                    n(h, X.sibling), p = l(X, v.props), p.ref = Jr(h, X, v), p.return = h, h = p;
                    break e;
                  }
                  n(h, X);
                  break;
                } else t(h, X);
                X = X.sibling;
              }
              v.type === oe ? (p = Vn(v.props.children, h.mode, N, v.key), p.return = h, h = p) : (N = gi(v.type, v.key, v.props, null, h.mode, N), N.ref = Jr(h, p, v), N.return = h, h = N);
            }
            return o(h);
          case me:
            e: {
              for (X = v.key; p !== null; ) {
                if (p.key === X) if (p.tag === 4 && p.stateNode.containerInfo === v.containerInfo && p.stateNode.implementation === v.implementation) {
                  n(h, p.sibling), p = l(p, v.children || []), p.return = h, h = p;
                  break e;
                } else {
                  n(h, p);
                  break;
                }
                else t(h, p);
                p = p.sibling;
              }
              p = cu(v, h.mode, N), p.return = h, h = p;
            }
            return o(h);
          case Ne:
            return X = v._init, Fe(h, p, X(v._payload), N);
        }
        if (en(v)) return A(h, p, v, N);
        if (V(v)) return U(h, p, v, N);
        Xl(h, v);
      }
      return typeof v == "string" && v !== "" || typeof v == "number" ? (v = "" + v, p !== null && p.tag === 6 ? (n(h, p.sibling), p = l(p, v), p.return = h, h = p) : (n(h, p), p = au(v, h.mode, N), p.return = h, h = p), o(h)) : n(h, p);
    }
    return Fe;
  }
  var kr = Ts(!0), Ns = Ts(!1), Gl = mn(null), Zl = null, wr = null, ko = null;
  function wo() {
    ko = wr = Zl = null;
  }
  function So(e) {
    var t = Gl.current;
    _e(Gl), e._currentValue = t;
  }
  function Eo(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function Sr(e, t) {
    Zl = e, ko = wr = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (ut = !0), e.firstContext = null);
  }
  function kt(e) {
    var t = e._currentValue;
    if (ko !== e) if (e = { context: e, memoizedValue: t, next: null }, wr === null) {
      if (Zl === null) throw Error(a(308));
      wr = e, Zl.dependencies = { lanes: 0, firstContext: e };
    } else wr = wr.next = e;
    return t;
  }
  var Dn = null;
  function xo(e) {
    Dn === null ? Dn = [e] : Dn.push(e);
  }
  function Ps(e, t, n, r) {
    var l = t.interleaved;
    return l === null ? (n.next = n, xo(t)) : (n.next = l.next, l.next = n), t.interleaved = n, Zt(e, r);
  }
  function Zt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null;
  }
  var yn = !1;
  function _o(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Rs(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function Jt(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function gn(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, (de & 2) !== 0) {
      var l = r.pending;
      return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, Zt(e, n);
    }
    return l = r.interleaved, l === null ? (t.next = t, xo(r)) : (t.next = l.next, l.next = t), r.interleaved = t, Zt(e, n);
  }
  function Jl(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, Ii(e, n);
    }
  }
  function Ls(e, t) {
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
  function ql(e, t, n, r) {
    var l = e.updateQueue;
    yn = !1;
    var i = l.firstBaseUpdate, o = l.lastBaseUpdate, f = l.shared.pending;
    if (f !== null) {
      l.shared.pending = null;
      var d = f, y = d.next;
      d.next = null, o === null ? i = y : o.next = y, o = d;
      var C = e.alternate;
      C !== null && (C = C.updateQueue, f = C.lastBaseUpdate, f !== o && (f === null ? C.firstBaseUpdate = y : f.next = y, C.lastBaseUpdate = d));
    }
    if (i !== null) {
      var T = l.baseState;
      o = 0, C = y = d = null, f = i;
      do {
        var _ = f.lane, F = f.eventTime;
        if ((r & _) === _) {
          C !== null && (C = C.next = {
            eventTime: F,
            lane: 0,
            tag: f.tag,
            payload: f.payload,
            callback: f.callback,
            next: null
          });
          e: {
            var A = e, U = f;
            switch (_ = t, F = n, U.tag) {
              case 1:
                if (A = U.payload, typeof A == "function") {
                  T = A.call(F, T, _);
                  break e;
                }
                T = A;
                break e;
              case 3:
                A.flags = A.flags & -65537 | 128;
              case 0:
                if (A = U.payload, _ = typeof A == "function" ? A.call(F, T, _) : A, _ == null) break e;
                T = D({}, T, _);
                break e;
              case 2:
                yn = !0;
            }
          }
          f.callback !== null && f.lane !== 0 && (e.flags |= 64, _ = l.effects, _ === null ? l.effects = [f] : _.push(f));
        } else F = { eventTime: F, lane: _, tag: f.tag, payload: f.payload, callback: f.callback, next: null }, C === null ? (y = C = F, d = T) : C = C.next = F, o |= _;
        if (f = f.next, f === null) {
          if (f = l.shared.pending, f === null) break;
          _ = f, f = _.next, _.next = null, l.lastBaseUpdate = _, l.shared.pending = null;
        }
      } while (!0);
      if (C === null && (d = T), l.baseState = d, l.firstBaseUpdate = y, l.lastBaseUpdate = C, t = l.shared.interleaved, t !== null) {
        l = t;
        do
          o |= l.lane, l = l.next;
        while (l !== t);
      } else i === null && (l.shared.lanes = 0);
      An |= o, e.lanes = o, e.memoizedState = T;
    }
  }
  function js(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
      var r = e[t], l = r.callback;
      if (l !== null) {
        if (r.callback = null, r = n, typeof l != "function") throw Error(a(191, l));
        l.call(r);
      }
    }
  }
  var qr = {}, $t = mn(qr), br = mn(qr), el = mn(qr);
  function On(e) {
    if (e === qr) throw Error(a(174));
    return e;
  }
  function Co(e, t) {
    switch (Se(el, t), Se(br, e), Se($t, qr), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Jn(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Jn(t, e);
    }
    _e($t), Se($t, t);
  }
  function Er() {
    _e($t), _e(br), _e(el);
  }
  function zs(e) {
    On(el.current);
    var t = On($t.current), n = Jn(t, e.type);
    t !== n && (Se(br, e), Se($t, n));
  }
  function Mo(e) {
    br.current === e && (_e($t), _e(br));
  }
  var Pe = mn(0);
  function bl(e) {
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
  var To = [];
  function No() {
    for (var e = 0; e < To.length; e++) To[e]._workInProgressVersionPrimary = null;
    To.length = 0;
  }
  var ei = Ee.ReactCurrentDispatcher, Po = Ee.ReactCurrentBatchConfig, In = 0, Re = null, Oe = null, Ue = null, ti = !1, tl = !1, nl = 0, Rf = 0;
  function Ze() {
    throw Error(a(321));
  }
  function Ro(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!Mt(e[n], t[n])) return !1;
    return !0;
  }
  function Lo(e, t, n, r, l, i) {
    if (In = i, Re = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, ei.current = e === null || e.memoizedState === null ? Ff : Df, e = n(r, l), tl) {
      i = 0;
      do {
        if (tl = !1, nl = 0, 25 <= i) throw Error(a(301));
        i += 1, Ue = Oe = null, t.updateQueue = null, ei.current = Of, e = n(r, l);
      } while (tl);
    }
    if (ei.current = li, t = Oe !== null && Oe.next !== null, In = 0, Ue = Oe = Re = null, ti = !1, t) throw Error(a(300));
    return e;
  }
  function jo() {
    var e = nl !== 0;
    return nl = 0, e;
  }
  function Wt() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Ue === null ? Re.memoizedState = Ue = e : Ue = Ue.next = e, Ue;
  }
  function wt() {
    if (Oe === null) {
      var e = Re.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Oe.next;
    var t = Ue === null ? Re.memoizedState : Ue.next;
    if (t !== null) Ue = t, Oe = e;
    else {
      if (e === null) throw Error(a(310));
      Oe = e, e = { memoizedState: Oe.memoizedState, baseState: Oe.baseState, baseQueue: Oe.baseQueue, queue: Oe.queue, next: null }, Ue === null ? Re.memoizedState = Ue = e : Ue = Ue.next = e;
    }
    return Ue;
  }
  function rl(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function zo(e) {
    var t = wt(), n = t.queue;
    if (n === null) throw Error(a(311));
    n.lastRenderedReducer = e;
    var r = Oe, l = r.baseQueue, i = n.pending;
    if (i !== null) {
      if (l !== null) {
        var o = l.next;
        l.next = i.next, i.next = o;
      }
      r.baseQueue = l = i, n.pending = null;
    }
    if (l !== null) {
      i = l.next, r = r.baseState;
      var f = o = null, d = null, y = i;
      do {
        var C = y.lane;
        if ((In & C) === C) d !== null && (d = d.next = { lane: 0, action: y.action, hasEagerState: y.hasEagerState, eagerState: y.eagerState, next: null }), r = y.hasEagerState ? y.eagerState : e(r, y.action);
        else {
          var T = {
            lane: C,
            action: y.action,
            hasEagerState: y.hasEagerState,
            eagerState: y.eagerState,
            next: null
          };
          d === null ? (f = d = T, o = r) : d = d.next = T, Re.lanes |= C, An |= C;
        }
        y = y.next;
      } while (y !== null && y !== i);
      d === null ? o = r : d.next = f, Mt(r, t.memoizedState) || (ut = !0), t.memoizedState = r, t.baseState = o, t.baseQueue = d, n.lastRenderedState = r;
    }
    if (e = n.interleaved, e !== null) {
      l = e;
      do
        i = l.lane, Re.lanes |= i, An |= i, l = l.next;
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function Fo(e) {
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
      Mt(i, t.memoizedState) || (ut = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
    }
    return [i, r];
  }
  function Fs() {
  }
  function Ds(e, t) {
    var n = Re, r = wt(), l = t(), i = !Mt(r.memoizedState, l);
    if (i && (r.memoizedState = l, ut = !0), r = r.queue, Do(As.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || Ue !== null && Ue.memoizedState.tag & 1) {
      if (n.flags |= 2048, ll(9, Is.bind(null, n, r, l, t), void 0, null), $e === null) throw Error(a(349));
      (In & 30) !== 0 || Os(n, t, l);
    }
    return l;
  }
  function Os(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = Re.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Re.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function Is(e, t, n, r) {
    t.value = n, t.getSnapshot = r, Us(t) && $s(e);
  }
  function As(e, t, n) {
    return n(function() {
      Us(t) && $s(e);
    });
  }
  function Us(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !Mt(e, n);
    } catch {
      return !0;
    }
  }
  function $s(e) {
    var t = Zt(e, 1);
    t !== null && Lt(t, e, 1, -1);
  }
  function Ws(e) {
    var t = Wt();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: rl, lastRenderedState: e }, t.queue = e, e = e.dispatch = zf.bind(null, Re, e), [t.memoizedState, e];
  }
  function ll(e, t, n, r) {
    return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = Re.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Re.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
  }
  function Vs() {
    return wt().memoizedState;
  }
  function ni(e, t, n, r) {
    var l = Wt();
    Re.flags |= e, l.memoizedState = ll(1 | t, n, void 0, r === void 0 ? null : r);
  }
  function ri(e, t, n, r) {
    var l = wt();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (Oe !== null) {
      var o = Oe.memoizedState;
      if (i = o.destroy, r !== null && Ro(r, o.deps)) {
        l.memoizedState = ll(t, n, i, r);
        return;
      }
    }
    Re.flags |= e, l.memoizedState = ll(1 | t, n, i, r);
  }
  function Bs(e, t) {
    return ni(8390656, 8, e, t);
  }
  function Do(e, t) {
    return ri(2048, 8, e, t);
  }
  function Hs(e, t) {
    return ri(4, 2, e, t);
  }
  function Qs(e, t) {
    return ri(4, 4, e, t);
  }
  function Ks(e, t) {
    if (typeof t == "function") return e = e(), t(e), function() {
      t(null);
    };
    if (t != null) return e = e(), t.current = e, function() {
      t.current = null;
    };
  }
  function Ys(e, t, n) {
    return n = n != null ? n.concat([e]) : null, ri(4, 4, Ks.bind(null, t, e), n);
  }
  function Oo() {
  }
  function Xs(e, t) {
    var n = wt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Ro(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
  }
  function Gs(e, t) {
    var n = wt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Ro(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
  }
  function Zs(e, t, n) {
    return (In & 21) === 0 ? (e.baseState && (e.baseState = !1, ut = !0), e.memoizedState = n) : (Mt(n, t) || (n = Mu(), Re.lanes |= n, An |= n, e.baseState = !0), t);
  }
  function Lf(e, t) {
    var n = ve;
    ve = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = Po.transition;
    Po.transition = {};
    try {
      e(!1), t();
    } finally {
      ve = n, Po.transition = r;
    }
  }
  function Js() {
    return wt().memoizedState;
  }
  function jf(e, t, n) {
    var r = En(e);
    if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, qs(e)) bs(t, n);
    else if (n = Ps(e, t, n, r), n !== null) {
      var l = lt();
      Lt(n, e, r, l), ea(n, t, r);
    }
  }
  function zf(e, t, n) {
    var r = En(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (qs(e)) bs(t, l);
    else {
      var i = e.alternate;
      if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
        var o = t.lastRenderedState, f = i(o, n);
        if (l.hasEagerState = !0, l.eagerState = f, Mt(f, o)) {
          var d = t.interleaved;
          d === null ? (l.next = l, xo(t)) : (l.next = d.next, d.next = l), t.interleaved = l;
          return;
        }
      } catch {
      }
      n = Ps(e, t, l, r), n !== null && (l = lt(), Lt(n, e, r, l), ea(n, t, r));
    }
  }
  function qs(e) {
    var t = e.alternate;
    return e === Re || t !== null && t === Re;
  }
  function bs(e, t) {
    tl = ti = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function ea(e, t, n) {
    if ((n & 4194240) !== 0) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, Ii(e, n);
    }
  }
  var li = { readContext: kt, useCallback: Ze, useContext: Ze, useEffect: Ze, useImperativeHandle: Ze, useInsertionEffect: Ze, useLayoutEffect: Ze, useMemo: Ze, useReducer: Ze, useRef: Ze, useState: Ze, useDebugValue: Ze, useDeferredValue: Ze, useTransition: Ze, useMutableSource: Ze, useSyncExternalStore: Ze, useId: Ze, unstable_isNewReconciler: !1 }, Ff = { readContext: kt, useCallback: function(e, t) {
    return Wt().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: kt, useEffect: Bs, useImperativeHandle: function(e, t, n) {
    return n = n != null ? n.concat([e]) : null, ni(
      4194308,
      4,
      Ks.bind(null, t, e),
      n
    );
  }, useLayoutEffect: function(e, t) {
    return ni(4194308, 4, e, t);
  }, useInsertionEffect: function(e, t) {
    return ni(4, 2, e, t);
  }, useMemo: function(e, t) {
    var n = Wt();
    return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
  }, useReducer: function(e, t, n) {
    var r = Wt();
    return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = jf.bind(null, Re, e), [r.memoizedState, e];
  }, useRef: function(e) {
    var t = Wt();
    return e = { current: e }, t.memoizedState = e;
  }, useState: Ws, useDebugValue: Oo, useDeferredValue: function(e) {
    return Wt().memoizedState = e;
  }, useTransition: function() {
    var e = Ws(!1), t = e[0];
    return e = Lf.bind(null, e[1]), Wt().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, n) {
    var r = Re, l = Wt();
    if (Te) {
      if (n === void 0) throw Error(a(407));
      n = n();
    } else {
      if (n = t(), $e === null) throw Error(a(349));
      (In & 30) !== 0 || Os(r, t, n);
    }
    l.memoizedState = n;
    var i = { value: n, getSnapshot: t };
    return l.queue = i, Bs(As.bind(
      null,
      r,
      i,
      e
    ), [e]), r.flags |= 2048, ll(9, Is.bind(null, r, i, n, t), void 0, null), n;
  }, useId: function() {
    var e = Wt(), t = $e.identifierPrefix;
    if (Te) {
      var n = Gt, r = Xt;
      n = (r & ~(1 << 32 - Ct(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = nl++, 0 < n && (t += "H" + n.toString(32)), t += ":";
    } else n = Rf++, t = ":" + t + "r" + n.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, Df = {
    readContext: kt,
    useCallback: Xs,
    useContext: kt,
    useEffect: Do,
    useImperativeHandle: Ys,
    useInsertionEffect: Hs,
    useLayoutEffect: Qs,
    useMemo: Gs,
    useReducer: zo,
    useRef: Vs,
    useState: function() {
      return zo(rl);
    },
    useDebugValue: Oo,
    useDeferredValue: function(e) {
      var t = wt();
      return Zs(t, Oe.memoizedState, e);
    },
    useTransition: function() {
      var e = zo(rl)[0], t = wt().memoizedState;
      return [e, t];
    },
    useMutableSource: Fs,
    useSyncExternalStore: Ds,
    useId: Js,
    unstable_isNewReconciler: !1
  }, Of = { readContext: kt, useCallback: Xs, useContext: kt, useEffect: Do, useImperativeHandle: Ys, useInsertionEffect: Hs, useLayoutEffect: Qs, useMemo: Gs, useReducer: Fo, useRef: Vs, useState: function() {
    return Fo(rl);
  }, useDebugValue: Oo, useDeferredValue: function(e) {
    var t = wt();
    return Oe === null ? t.memoizedState = e : Zs(t, Oe.memoizedState, e);
  }, useTransition: function() {
    var e = Fo(rl)[0], t = wt().memoizedState;
    return [e, t];
  }, useMutableSource: Fs, useSyncExternalStore: Ds, useId: Js, unstable_isNewReconciler: !1 };
  function Nt(e, t) {
    if (e && e.defaultProps) {
      t = D({}, t), e = e.defaultProps;
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function Io(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : D({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var ii = { isMounted: function(e) {
    return (e = e._reactInternals) ? g(e) === e : !1;
  }, enqueueSetState: function(e, t, n) {
    e = e._reactInternals;
    var r = lt(), l = En(e), i = Jt(r, l);
    i.payload = t, n != null && (i.callback = n), t = gn(e, i, l), t !== null && (Lt(t, e, l, r), Jl(t, e, l));
  }, enqueueReplaceState: function(e, t, n) {
    e = e._reactInternals;
    var r = lt(), l = En(e), i = Jt(r, l);
    i.tag = 1, i.payload = t, n != null && (i.callback = n), t = gn(e, i, l), t !== null && (Lt(t, e, l, r), Jl(t, e, l));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var n = lt(), r = En(e), l = Jt(n, r);
    l.tag = 2, t != null && (l.callback = t), t = gn(e, l, r), t !== null && (Lt(t, e, r, n), Jl(t, e, r));
  } };
  function ta(e, t, n, r, l, i, o) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, o) : t.prototype && t.prototype.isPureReactComponent ? !Hr(n, r) || !Hr(l, i) : !0;
  }
  function na(e, t, n) {
    var r = !1, l = hn, i = t.contextType;
    return typeof i == "object" && i !== null ? i = kt(i) : (l = ot(t) ? jn : Ge.current, r = t.contextTypes, i = (r = r != null) ? hr(e, l) : hn), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = ii, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = i), t;
  }
  function ra(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && ii.enqueueReplaceState(t, t.state, null);
  }
  function Ao(e, t, n, r) {
    var l = e.stateNode;
    l.props = n, l.state = e.memoizedState, l.refs = {}, _o(e);
    var i = t.contextType;
    typeof i == "object" && i !== null ? l.context = kt(i) : (i = ot(t) ? jn : Ge.current, l.context = hr(e, i)), l.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (Io(e, t, i, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && ii.enqueueReplaceState(l, l.state, null), ql(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function xr(e, t) {
    try {
      var n = "", r = t;
      do
        n += ce(r), r = r.return;
      while (r);
      var l = n;
    } catch (i) {
      l = `
Error generating stack: ` + i.message + `
` + i.stack;
    }
    return { value: e, source: t, stack: l, digest: null };
  }
  function Uo(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function $o(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  var If = typeof WeakMap == "function" ? WeakMap : Map;
  function la(e, t, n) {
    n = Jt(-1, n), n.tag = 3, n.payload = { element: null };
    var r = t.value;
    return n.callback = function() {
      di || (di = !0, tu = r), $o(e, t);
    }, n;
  }
  function ia(e, t, n) {
    n = Jt(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var l = t.value;
      n.payload = function() {
        return r(l);
      }, n.callback = function() {
        $o(e, t);
      };
    }
    var i = e.stateNode;
    return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
      $o(e, t), typeof r != "function" && (wn === null ? wn = /* @__PURE__ */ new Set([this]) : wn.add(this));
      var o = t.stack;
      this.componentDidCatch(t.value, { componentStack: o !== null ? o : "" });
    }), n;
  }
  function oa(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new If();
      var l = /* @__PURE__ */ new Set();
      r.set(t, l);
    } else l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
    l.has(n) || (l.add(n), e = Jf.bind(null, e, t, n), t.then(e, e));
  }
  function ua(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function sa(e, t, n, r, l) {
    return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Jt(-1, 1), t.tag = 2, gn(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = l, e);
  }
  var Af = Ee.ReactCurrentOwner, ut = !1;
  function rt(e, t, n, r) {
    t.child = e === null ? Ns(t, null, n, r) : kr(t, e.child, n, r);
  }
  function aa(e, t, n, r, l) {
    n = n.render;
    var i = t.ref;
    return Sr(t, l), r = Lo(e, t, n, r, i, l), n = jo(), e !== null && !ut ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, qt(e, t, l)) : (Te && n && mo(t), t.flags |= 1, rt(e, t, r, l), t.child);
  }
  function ca(e, t, n, r, l) {
    if (e === null) {
      var i = n.type;
      return typeof i == "function" && !su(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, fa(e, t, i, r, l)) : (e = gi(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (i = e.child, (e.lanes & l) === 0) {
      var o = i.memoizedProps;
      if (n = n.compare, n = n !== null ? n : Hr, n(o, r) && e.ref === t.ref) return qt(e, t, l);
    }
    return t.flags |= 1, e = _n(i, r), e.ref = t.ref, e.return = t, t.child = e;
  }
  function fa(e, t, n, r, l) {
    if (e !== null) {
      var i = e.memoizedProps;
      if (Hr(i, r) && e.ref === t.ref) if (ut = !1, t.pendingProps = r = i, (e.lanes & l) !== 0) (e.flags & 131072) !== 0 && (ut = !0);
      else return t.lanes = e.lanes, qt(e, t, l);
    }
    return Wo(e, t, n, r, l);
  }
  function da(e, t, n) {
    var r = t.pendingProps, l = r.children, i = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden") if ((t.mode & 1) === 0) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Se(Cr, ht), ht |= n;
    else {
      if ((n & 1073741824) === 0) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, Se(Cr, ht), ht |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, Se(Cr, ht), ht |= r;
    }
    else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, Se(Cr, ht), ht |= r;
    return rt(e, t, l, n), t.child;
  }
  function pa(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
  }
  function Wo(e, t, n, r, l) {
    var i = ot(n) ? jn : Ge.current;
    return i = hr(t, i), Sr(t, l), n = Lo(e, t, n, r, i, l), r = jo(), e !== null && !ut ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, qt(e, t, l)) : (Te && r && mo(t), t.flags |= 1, rt(e, t, n, l), t.child);
  }
  function ma(e, t, n, r, l) {
    if (ot(n)) {
      var i = !0;
      Bl(t);
    } else i = !1;
    if (Sr(t, l), t.stateNode === null) ui(e, t), na(t, n, r), Ao(t, n, r, l), r = !0;
    else if (e === null) {
      var o = t.stateNode, f = t.memoizedProps;
      o.props = f;
      var d = o.context, y = n.contextType;
      typeof y == "object" && y !== null ? y = kt(y) : (y = ot(n) ? jn : Ge.current, y = hr(t, y));
      var C = n.getDerivedStateFromProps, T = typeof C == "function" || typeof o.getSnapshotBeforeUpdate == "function";
      T || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (f !== r || d !== y) && ra(t, o, r, y), yn = !1;
      var _ = t.memoizedState;
      o.state = _, ql(t, r, o, l), d = t.memoizedState, f !== r || _ !== d || it.current || yn ? (typeof C == "function" && (Io(t, n, C, r), d = t.memoizedState), (f = yn || ta(t, n, f, r, _, d, y)) ? (T || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = d), o.props = r, o.state = d, o.context = y, r = f) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
    } else {
      o = t.stateNode, Rs(e, t), f = t.memoizedProps, y = t.type === t.elementType ? f : Nt(t.type, f), o.props = y, T = t.pendingProps, _ = o.context, d = n.contextType, typeof d == "object" && d !== null ? d = kt(d) : (d = ot(n) ? jn : Ge.current, d = hr(t, d));
      var F = n.getDerivedStateFromProps;
      (C = typeof F == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (f !== T || _ !== d) && ra(t, o, r, d), yn = !1, _ = t.memoizedState, o.state = _, ql(t, r, o, l);
      var A = t.memoizedState;
      f !== T || _ !== A || it.current || yn ? (typeof F == "function" && (Io(t, n, F, r), A = t.memoizedState), (y = yn || ta(t, n, y, r, _, A, d) || !1) ? (C || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, A, d), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, A, d)), typeof o.componentDidUpdate == "function" && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || f === e.memoizedProps && _ === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || f === e.memoizedProps && _ === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = A), o.props = r, o.state = A, o.context = d, r = y) : (typeof o.componentDidUpdate != "function" || f === e.memoizedProps && _ === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || f === e.memoizedProps && _ === e.memoizedState || (t.flags |= 1024), r = !1);
    }
    return Vo(e, t, n, r, i, l);
  }
  function Vo(e, t, n, r, l, i) {
    pa(e, t);
    var o = (t.flags & 128) !== 0;
    if (!r && !o) return l && ks(t, n, !1), qt(e, t, i);
    r = t.stateNode, Af.current = t;
    var f = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && o ? (t.child = kr(t, e.child, null, i), t.child = kr(t, null, f, i)) : rt(e, t, f, i), t.memoizedState = r.state, l && ks(t, n, !0), t.child;
  }
  function ha(e) {
    var t = e.stateNode;
    t.pendingContext ? ys(e, t.pendingContext, t.pendingContext !== t.context) : t.context && ys(e, t.context, !1), Co(e, t.containerInfo);
  }
  function va(e, t, n, r, l) {
    return gr(), go(l), t.flags |= 256, rt(e, t, n, r), t.child;
  }
  var Bo = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Ho(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function ya(e, t, n) {
    var r = t.pendingProps, l = Pe.current, i = !1, o = (t.flags & 128) !== 0, f;
    if ((f = o) || (f = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), f ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), Se(Pe, l & 1), e === null)
      return yo(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (o = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, o = { mode: "hidden", children: o }, (r & 1) === 0 && i !== null ? (i.childLanes = 0, i.pendingProps = o) : i = ki(o, r, 0, null), e = Vn(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = Ho(n), t.memoizedState = Bo, e) : Qo(t, o));
    if (l = e.memoizedState, l !== null && (f = l.dehydrated, f !== null)) return Uf(e, t, o, r, f, l, n);
    if (i) {
      i = r.fallback, o = t.mode, l = e.child, f = l.sibling;
      var d = { mode: "hidden", children: r.children };
      return (o & 1) === 0 && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = d, t.deletions = null) : (r = _n(l, d), r.subtreeFlags = l.subtreeFlags & 14680064), f !== null ? i = _n(f, i) : (i = Vn(i, o, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, o = e.child.memoizedState, o = o === null ? Ho(n) : { baseLanes: o.baseLanes | n, cachePool: null, transitions: o.transitions }, i.memoizedState = o, i.childLanes = e.childLanes & ~n, t.memoizedState = Bo, r;
    }
    return i = e.child, e = i.sibling, r = _n(i, { mode: "visible", children: r.children }), (t.mode & 1) === 0 && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
  }
  function Qo(e, t) {
    return t = ki({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function oi(e, t, n, r) {
    return r !== null && go(r), kr(t, e.child, null, n), e = Qo(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function Uf(e, t, n, r, l, i, o) {
    if (n)
      return t.flags & 256 ? (t.flags &= -257, r = Uo(Error(a(422))), oi(e, t, o, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, l = t.mode, r = ki({ mode: "visible", children: r.children }, l, 0, null), i = Vn(i, l, o, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, (t.mode & 1) !== 0 && kr(t, e.child, null, o), t.child.memoizedState = Ho(o), t.memoizedState = Bo, i);
    if ((t.mode & 1) === 0) return oi(e, t, o, null);
    if (l.data === "$!") {
      if (r = l.nextSibling && l.nextSibling.dataset, r) var f = r.dgst;
      return r = f, i = Error(a(419)), r = Uo(i, r, void 0), oi(e, t, o, r);
    }
    if (f = (o & e.childLanes) !== 0, ut || f) {
      if (r = $e, r !== null) {
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
        l = (l & (r.suspendedLanes | o)) !== 0 ? 0 : l, l !== 0 && l !== i.retryLane && (i.retryLane = l, Zt(e, l), Lt(r, e, l, -1));
      }
      return uu(), r = Uo(Error(a(421))), oi(e, t, o, r);
    }
    return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = qf.bind(null, e), l._reactRetry = t, null) : (e = i.treeContext, mt = pn(l.nextSibling), pt = t, Te = !0, Tt = null, e !== null && (yt[gt++] = Xt, yt[gt++] = Gt, yt[gt++] = zn, Xt = e.id, Gt = e.overflow, zn = t), t = Qo(t, r.children), t.flags |= 4096, t);
  }
  function ga(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), Eo(e.return, t, n);
  }
  function Ko(e, t, n, r, l) {
    var i = e.memoizedState;
    i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = l);
  }
  function ka(e, t, n) {
    var r = t.pendingProps, l = r.revealOrder, i = r.tail;
    if (rt(e, t, r.children, n), r = Pe.current, (r & 2) !== 0) r = r & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0) e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && ga(e, n, t);
        else if (e.tag === 19) ga(e, n, t);
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
    if (Se(Pe, r), (t.mode & 1) === 0) t.memoizedState = null;
    else switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && bl(e) === null && (l = n), n = n.sibling;
        n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), Ko(t, !1, l, n, i);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (e = l.alternate, e !== null && bl(e) === null) {
            t.child = l;
            break;
          }
          e = l.sibling, l.sibling = n, n = l, l = e;
        }
        Ko(t, !0, n, null, i);
        break;
      case "together":
        Ko(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function ui(e, t) {
    (t.mode & 1) === 0 && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
  }
  function qt(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), An |= t.lanes, (n & t.childLanes) === 0) return null;
    if (e !== null && t.child !== e.child) throw Error(a(153));
    if (t.child !== null) {
      for (e = t.child, n = _n(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = _n(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function $f(e, t, n) {
    switch (t.tag) {
      case 3:
        ha(t), gr();
        break;
      case 5:
        zs(t);
        break;
      case 1:
        ot(t.type) && Bl(t);
        break;
      case 4:
        Co(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context, l = t.memoizedProps.value;
        Se(Gl, r._currentValue), r._currentValue = l;
        break;
      case 13:
        if (r = t.memoizedState, r !== null)
          return r.dehydrated !== null ? (Se(Pe, Pe.current & 1), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? ya(e, t, n) : (Se(Pe, Pe.current & 1), e = qt(e, t, n), e !== null ? e.sibling : null);
        Se(Pe, Pe.current & 1);
        break;
      case 19:
        if (r = (n & t.childLanes) !== 0, (e.flags & 128) !== 0) {
          if (r) return ka(e, t, n);
          t.flags |= 128;
        }
        if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), Se(Pe, Pe.current), r) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, da(e, t, n);
    }
    return qt(e, t, n);
  }
  var wa, Yo, Sa, Ea;
  wa = function(e, t) {
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
  }, Yo = function() {
  }, Sa = function(e, t, n, r) {
    var l = e.memoizedProps;
    if (l !== r) {
      e = t.stateNode, On($t.current);
      var i = null;
      switch (n) {
        case "input":
          l = Ht(e, l), r = Ht(e, r), i = [];
          break;
        case "select":
          l = D({}, l, { value: void 0 }), r = D({}, r, { value: void 0 }), i = [];
          break;
        case "textarea":
          l = Zn(e, l), r = Zn(e, r), i = [];
          break;
        default:
          typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = $l);
      }
      Tn(n, r);
      var o;
      n = null;
      for (y in l) if (!r.hasOwnProperty(y) && l.hasOwnProperty(y) && l[y] != null) if (y === "style") {
        var f = l[y];
        for (o in f) f.hasOwnProperty(o) && (n || (n = {}), n[o] = "");
      } else y !== "dangerouslySetInnerHTML" && y !== "children" && y !== "suppressContentEditableWarning" && y !== "suppressHydrationWarning" && y !== "autoFocus" && (w.hasOwnProperty(y) ? i || (i = []) : (i = i || []).push(y, null));
      for (y in r) {
        var d = r[y];
        if (f = l?.[y], r.hasOwnProperty(y) && d !== f && (d != null || f != null)) if (y === "style") if (f) {
          for (o in f) !f.hasOwnProperty(o) || d && d.hasOwnProperty(o) || (n || (n = {}), n[o] = "");
          for (o in d) d.hasOwnProperty(o) && f[o] !== d[o] && (n || (n = {}), n[o] = d[o]);
        } else n || (i || (i = []), i.push(
          y,
          n
        )), n = d;
        else y === "dangerouslySetInnerHTML" ? (d = d ? d.__html : void 0, f = f ? f.__html : void 0, d != null && f !== d && (i = i || []).push(y, d)) : y === "children" ? typeof d != "string" && typeof d != "number" || (i = i || []).push(y, "" + d) : y !== "suppressContentEditableWarning" && y !== "suppressHydrationWarning" && (w.hasOwnProperty(y) ? (d != null && y === "onScroll" && xe("scroll", e), i || f === d || (i = [])) : (i = i || []).push(y, d));
      }
      n && (i = i || []).push("style", n);
      var y = i;
      (t.updateQueue = y) && (t.flags |= 4);
    }
  }, Ea = function(e, t, n, r) {
    n !== r && (t.flags |= 4);
  };
  function il(e, t) {
    if (!Te) switch (e.tailMode) {
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
  function Je(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
    if (t) for (var l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
    else for (l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t;
  }
  function Wf(e, t, n) {
    var r = t.pendingProps;
    switch (ho(t), t.tag) {
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
        return Je(t), null;
      case 1:
        return ot(t.type) && Vl(), Je(t), null;
      case 3:
        return r = t.stateNode, Er(), _e(it), _e(Ge), No(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Yl(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Tt !== null && (lu(Tt), Tt = null))), Yo(e, t), Je(t), null;
      case 5:
        Mo(t);
        var l = On(el.current);
        if (n = t.type, e !== null && t.stateNode != null) Sa(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(a(166));
            return Je(t), null;
          }
          if (e = On($t.current), Yl(t)) {
            r = t.stateNode, n = t.type;
            var i = t.memoizedProps;
            switch (r[Ut] = t, r[Gr] = i, e = (t.mode & 1) !== 0, n) {
              case "dialog":
                xe("cancel", r), xe("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                xe("load", r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < Kr.length; l++) xe(Kr[l], r);
                break;
              case "source":
                xe("error", r);
                break;
              case "img":
              case "image":
              case "link":
                xe(
                  "error",
                  r
                ), xe("load", r);
                break;
              case "details":
                xe("toggle", r);
                break;
              case "input":
                Kn(r, i), xe("invalid", r);
                break;
              case "select":
                r._wrapperState = { wasMultiple: !!i.multiple }, xe("invalid", r);
                break;
              case "textarea":
                Pr(r, i), xe("invalid", r);
            }
            Tn(n, i), l = null;
            for (var o in i) if (i.hasOwnProperty(o)) {
              var f = i[o];
              o === "children" ? typeof f == "string" ? r.textContent !== f && (i.suppressHydrationWarning !== !0 && Ul(r.textContent, f, e), l = ["children", f]) : typeof f == "number" && r.textContent !== "" + f && (i.suppressHydrationWarning !== !0 && Ul(
                r.textContent,
                f,
                e
              ), l = ["children", "" + f]) : w.hasOwnProperty(o) && f != null && o === "onScroll" && xe("scroll", r);
            }
            switch (n) {
              case "input":
                Hn(r), Xn(r, i, !0);
                break;
              case "textarea":
                Hn(r), tn(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof i.onClick == "function" && (r.onclick = $l);
            }
            r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
          } else {
            o = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Rr(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = o.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, { is: r.is }) : (e = o.createElement(n), n === "select" && (o = e, r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, n), e[Ut] = t, e[Gr] = r, wa(e, t, !1, !1), t.stateNode = e;
            e: {
              switch (o = Nn(n, r), n) {
                case "dialog":
                  xe("cancel", e), xe("close", e), l = r;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  xe("load", e), l = r;
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < Kr.length; l++) xe(Kr[l], e);
                  l = r;
                  break;
                case "source":
                  xe("error", e), l = r;
                  break;
                case "img":
                case "image":
                case "link":
                  xe(
                    "error",
                    e
                  ), xe("load", e), l = r;
                  break;
                case "details":
                  xe("toggle", e), l = r;
                  break;
                case "input":
                  Kn(e, r), l = Ht(e, r), xe("invalid", e);
                  break;
                case "option":
                  l = r;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!r.multiple }, l = D({}, r, { value: void 0 }), xe("invalid", e);
                  break;
                case "textarea":
                  Pr(e, r), l = Zn(e, r), xe("invalid", e);
                  break;
                default:
                  l = r;
              }
              Tn(n, l), f = l;
              for (i in f) if (f.hasOwnProperty(i)) {
                var d = f[i];
                i === "style" ? yl(e, d) : i === "dangerouslySetInnerHTML" ? (d = d ? d.__html : void 0, d != null && zt(e, d)) : i === "children" ? typeof d == "string" ? (n !== "textarea" || d !== "") && Ft(e, d) : typeof d == "number" && Ft(e, "" + d) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (w.hasOwnProperty(i) ? d != null && i === "onScroll" && xe("scroll", e) : d != null && se(e, i, d, o));
              }
              switch (n) {
                case "input":
                  Hn(e), Xn(e, r, !1);
                  break;
                case "textarea":
                  Hn(e), tn(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + fe(r.value));
                  break;
                case "select":
                  e.multiple = !!r.multiple, i = r.value, i != null ? nt(e, !!r.multiple, i, !1) : r.defaultValue != null && nt(
                    e,
                    !!r.multiple,
                    r.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = $l);
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
        return Je(t), null;
      case 6:
        if (e && t.stateNode != null) Ea(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(a(166));
          if (n = On(el.current), On($t.current), Yl(t)) {
            if (r = t.stateNode, n = t.memoizedProps, r[Ut] = t, (i = r.nodeValue !== n) && (e = pt, e !== null)) switch (e.tag) {
              case 3:
                Ul(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Ul(r.nodeValue, n, (e.mode & 1) !== 0);
            }
            i && (t.flags |= 4);
          } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Ut] = t, t.stateNode = r;
        }
        return Je(t), null;
      case 13:
        if (_e(Pe), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (Te && mt !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0) Cs(), gr(), t.flags |= 98560, i = !1;
          else if (i = Yl(t), r !== null && r.dehydrated !== null) {
            if (e === null) {
              if (!i) throw Error(a(318));
              if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(a(317));
              i[Ut] = t;
            } else gr(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Je(t), i = !1;
          } else Tt !== null && (lu(Tt), Tt = null), i = !0;
          if (!i) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, (t.mode & 1) !== 0 && (e === null || (Pe.current & 1) !== 0 ? Ie === 0 && (Ie = 3) : uu())), t.updateQueue !== null && (t.flags |= 4), Je(t), null);
      case 4:
        return Er(), Yo(e, t), e === null && Yr(t.stateNode.containerInfo), Je(t), null;
      case 10:
        return So(t.type._context), Je(t), null;
      case 17:
        return ot(t.type) && Vl(), Je(t), null;
      case 19:
        if (_e(Pe), i = t.memoizedState, i === null) return Je(t), null;
        if (r = (t.flags & 128) !== 0, o = i.rendering, o === null) if (r) il(i, !1);
        else {
          if (Ie !== 0 || e !== null && (e.flags & 128) !== 0) for (e = t.child; e !== null; ) {
            if (o = bl(e), o !== null) {
              for (t.flags |= 128, il(i, !1), r = o.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) i = n, e = r, i.flags &= 14680066, o = i.alternate, o === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = o.childLanes, i.lanes = o.lanes, i.child = o.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = o.memoizedProps, i.memoizedState = o.memoizedState, i.updateQueue = o.updateQueue, i.type = o.type, e = o.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
              return Se(Pe, Pe.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          i.tail !== null && Me() > Mr && (t.flags |= 128, r = !0, il(i, !1), t.lanes = 4194304);
        }
        else {
          if (!r) if (e = bl(o), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), il(i, !0), i.tail === null && i.tailMode === "hidden" && !o.alternate && !Te) return Je(t), null;
          } else 2 * Me() - i.renderingStartTime > Mr && n !== 1073741824 && (t.flags |= 128, r = !0, il(i, !1), t.lanes = 4194304);
          i.isBackwards ? (o.sibling = t.child, t.child = o) : (n = i.last, n !== null ? n.sibling = o : t.child = o, i.last = o);
        }
        return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = Me(), t.sibling = null, n = Pe.current, Se(Pe, r ? n & 1 | 2 : n & 1), t) : (Je(t), null);
      case 22:
      case 23:
        return ou(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && (t.mode & 1) !== 0 ? (ht & 1073741824) !== 0 && (Je(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Je(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(a(156, t.tag));
  }
  function Vf(e, t) {
    switch (ho(t), t.tag) {
      case 1:
        return ot(t.type) && Vl(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Er(), _e(it), _e(Ge), No(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return Mo(t), null;
      case 13:
        if (_e(Pe), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(a(340));
          gr();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return _e(Pe), null;
      case 4:
        return Er(), null;
      case 10:
        return So(t.type._context), null;
      case 22:
      case 23:
        return ou(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var si = !1, qe = !1, Bf = typeof WeakSet == "function" ? WeakSet : Set, O = null;
  function _r(e, t) {
    var n = e.ref;
    if (n !== null) if (typeof n == "function") try {
      n(null);
    } catch (r) {
      je(e, t, r);
    }
    else n.current = null;
  }
  function Xo(e, t, n) {
    try {
      n();
    } catch (r) {
      je(e, t, r);
    }
  }
  var xa = !1;
  function Hf(e, t) {
    if (io = Nl, e = ts(), Ji(e)) {
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
          var o = 0, f = -1, d = -1, y = 0, C = 0, T = e, _ = null;
          t: for (; ; ) {
            for (var F; T !== n || l !== 0 && T.nodeType !== 3 || (f = o + l), T !== i || r !== 0 && T.nodeType !== 3 || (d = o + r), T.nodeType === 3 && (o += T.nodeValue.length), (F = T.firstChild) !== null; )
              _ = T, T = F;
            for (; ; ) {
              if (T === e) break t;
              if (_ === n && ++y === l && (f = o), _ === i && ++C === r && (d = o), (F = T.nextSibling) !== null) break;
              T = _, _ = T.parentNode;
            }
            T = F;
          }
          n = f === -1 || d === -1 ? null : { start: f, end: d };
        } else n = null;
      }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (oo = { focusedElem: e, selectionRange: n }, Nl = !1, O = t; O !== null; ) if (t = O, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, O = e;
    else for (; O !== null; ) {
      t = O;
      try {
        var A = t.alternate;
        if ((t.flags & 1024) !== 0) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (A !== null) {
              var U = A.memoizedProps, Fe = A.memoizedState, h = t.stateNode, p = h.getSnapshotBeforeUpdate(t.elementType === t.type ? U : Nt(t.type, U), Fe);
              h.__reactInternalSnapshotBeforeUpdate = p;
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
      } catch (N) {
        je(t, t.return, N);
      }
      if (e = t.sibling, e !== null) {
        e.return = t.return, O = e;
        break;
      }
      O = t.return;
    }
    return A = xa, xa = !1, A;
  }
  function ol(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
      var l = r = r.next;
      do {
        if ((l.tag & e) === e) {
          var i = l.destroy;
          l.destroy = void 0, i !== void 0 && Xo(t, n, i);
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function ai(e, t) {
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
  function Go(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      e.tag, e = n, typeof t == "function" ? t(e) : t.current = e;
    }
  }
  function _a(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, _a(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Ut], delete t[Gr], delete t[co], delete t[Mf], delete t[Tf])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function Ca(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Ma(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Ca(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Zo(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = $l));
    else if (r !== 4 && (e = e.child, e !== null)) for (Zo(e, t, n), e = e.sibling; e !== null; ) Zo(e, t, n), e = e.sibling;
  }
  function Jo(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null)) for (Jo(e, t, n), e = e.sibling; e !== null; ) Jo(e, t, n), e = e.sibling;
  }
  var Be = null, Pt = !1;
  function kn(e, t, n) {
    for (n = n.child; n !== null; ) Ta(e, t, n), n = n.sibling;
  }
  function Ta(e, t, n) {
    if (At && typeof At.onCommitFiberUnmount == "function") try {
      At.onCommitFiberUnmount(El, n);
    } catch {
    }
    switch (n.tag) {
      case 5:
        qe || _r(n, t);
      case 6:
        var r = Be, l = Pt;
        Be = null, kn(e, t, n), Be = r, Pt = l, Be !== null && (Pt ? (e = Be, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Be.removeChild(n.stateNode));
        break;
      case 18:
        Be !== null && (Pt ? (e = Be, n = n.stateNode, e.nodeType === 8 ? ao(e.parentNode, n) : e.nodeType === 1 && ao(e, n), Ar(e)) : ao(Be, n.stateNode));
        break;
      case 4:
        r = Be, l = Pt, Be = n.stateNode.containerInfo, Pt = !0, kn(e, t, n), Be = r, Pt = l;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!qe && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
          l = r = r.next;
          do {
            var i = l, o = i.destroy;
            i = i.tag, o !== void 0 && ((i & 2) !== 0 || (i & 4) !== 0) && Xo(n, t, o), l = l.next;
          } while (l !== r);
        }
        kn(e, t, n);
        break;
      case 1:
        if (!qe && (_r(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
        } catch (f) {
          je(n, t, f);
        }
        kn(e, t, n);
        break;
      case 21:
        kn(e, t, n);
        break;
      case 22:
        n.mode & 1 ? (qe = (r = qe) || n.memoizedState !== null, kn(e, t, n), qe = r) : kn(e, t, n);
        break;
      default:
        kn(e, t, n);
    }
  }
  function Na(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new Bf()), t.forEach(function(r) {
        var l = bf.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
    }
  }
  function Rt(e, t) {
    var n = t.deletions;
    if (n !== null) for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var i = e, o = t, f = o;
        e: for (; f !== null; ) {
          switch (f.tag) {
            case 5:
              Be = f.stateNode, Pt = !1;
              break e;
            case 3:
              Be = f.stateNode.containerInfo, Pt = !0;
              break e;
            case 4:
              Be = f.stateNode.containerInfo, Pt = !0;
              break e;
          }
          f = f.return;
        }
        if (Be === null) throw Error(a(160));
        Ta(i, o, l), Be = null, Pt = !1;
        var d = l.alternate;
        d !== null && (d.return = null), l.return = null;
      } catch (y) {
        je(l, t, y);
      }
    }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Pa(t, e), t = t.sibling;
  }
  function Pa(e, t) {
    var n = e.alternate, r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (Rt(t, e), Vt(e), r & 4) {
          try {
            ol(3, e, e.return), ai(3, e);
          } catch (U) {
            je(e, e.return, U);
          }
          try {
            ol(5, e, e.return);
          } catch (U) {
            je(e, e.return, U);
          }
        }
        break;
      case 1:
        Rt(t, e), Vt(e), r & 512 && n !== null && _r(n, n.return);
        break;
      case 5:
        if (Rt(t, e), Vt(e), r & 512 && n !== null && _r(n, n.return), e.flags & 32) {
          var l = e.stateNode;
          try {
            Ft(l, "");
          } catch (U) {
            je(e, e.return, U);
          }
        }
        if (r & 4 && (l = e.stateNode, l != null)) {
          var i = e.memoizedProps, o = n !== null ? n.memoizedProps : i, f = e.type, d = e.updateQueue;
          if (e.updateQueue = null, d !== null) try {
            f === "input" && i.type === "radio" && i.name != null && ue(l, i), Nn(f, o);
            var y = Nn(f, i);
            for (o = 0; o < d.length; o += 2) {
              var C = d[o], T = d[o + 1];
              C === "style" ? yl(l, T) : C === "dangerouslySetInnerHTML" ? zt(l, T) : C === "children" ? Ft(l, T) : se(l, C, T, y);
            }
            switch (f) {
              case "input":
                Yn(l, i);
                break;
              case "textarea":
                hl(l, i);
                break;
              case "select":
                var _ = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!i.multiple;
                var F = i.value;
                F != null ? nt(l, !!i.multiple, F, !1) : _ !== !!i.multiple && (i.defaultValue != null ? nt(
                  l,
                  !!i.multiple,
                  i.defaultValue,
                  !0
                ) : nt(l, !!i.multiple, i.multiple ? [] : "", !1));
            }
            l[Gr] = i;
          } catch (U) {
            je(e, e.return, U);
          }
        }
        break;
      case 6:
        if (Rt(t, e), Vt(e), r & 4) {
          if (e.stateNode === null) throw Error(a(162));
          l = e.stateNode, i = e.memoizedProps;
          try {
            l.nodeValue = i;
          } catch (U) {
            je(e, e.return, U);
          }
        }
        break;
      case 3:
        if (Rt(t, e), Vt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
          Ar(t.containerInfo);
        } catch (U) {
          je(e, e.return, U);
        }
        break;
      case 4:
        Rt(t, e), Vt(e);
        break;
      case 13:
        Rt(t, e), Vt(e), l = e.child, l.flags & 8192 && (i = l.memoizedState !== null, l.stateNode.isHidden = i, !i || l.alternate !== null && l.alternate.memoizedState !== null || (eu = Me())), r & 4 && Na(e);
        break;
      case 22:
        if (C = n !== null && n.memoizedState !== null, e.mode & 1 ? (qe = (y = qe) || C, Rt(t, e), qe = y) : Rt(t, e), Vt(e), r & 8192) {
          if (y = e.memoizedState !== null, (e.stateNode.isHidden = y) && !C && (e.mode & 1) !== 0) for (O = e, C = e.child; C !== null; ) {
            for (T = O = C; O !== null; ) {
              switch (_ = O, F = _.child, _.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  ol(4, _, _.return);
                  break;
                case 1:
                  _r(_, _.return);
                  var A = _.stateNode;
                  if (typeof A.componentWillUnmount == "function") {
                    r = _, n = _.return;
                    try {
                      t = r, A.props = t.memoizedProps, A.state = t.memoizedState, A.componentWillUnmount();
                    } catch (U) {
                      je(r, n, U);
                    }
                  }
                  break;
                case 5:
                  _r(_, _.return);
                  break;
                case 22:
                  if (_.memoizedState !== null) {
                    ja(T);
                    continue;
                  }
              }
              F !== null ? (F.return = _, O = F) : ja(T);
            }
            C = C.sibling;
          }
          e: for (C = null, T = e; ; ) {
            if (T.tag === 5) {
              if (C === null) {
                C = T;
                try {
                  l = T.stateNode, y ? (i = l.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (f = T.stateNode, d = T.memoizedProps.style, o = d != null && d.hasOwnProperty("display") ? d.display : null, f.style.display = qn("display", o));
                } catch (U) {
                  je(e, e.return, U);
                }
              }
            } else if (T.tag === 6) {
              if (C === null) try {
                T.stateNode.nodeValue = y ? "" : T.memoizedProps;
              } catch (U) {
                je(e, e.return, U);
              }
            } else if ((T.tag !== 22 && T.tag !== 23 || T.memoizedState === null || T === e) && T.child !== null) {
              T.child.return = T, T = T.child;
              continue;
            }
            if (T === e) break e;
            for (; T.sibling === null; ) {
              if (T.return === null || T.return === e) break e;
              C === T && (C = null), T = T.return;
            }
            C === T && (C = null), T.sibling.return = T.return, T = T.sibling;
          }
        }
        break;
      case 19:
        Rt(t, e), Vt(e), r & 4 && Na(e);
        break;
      case 21:
        break;
      default:
        Rt(
          t,
          e
        ), Vt(e);
    }
  }
  function Vt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (Ca(n)) {
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
            r.flags & 32 && (Ft(l, ""), r.flags &= -33);
            var i = Ma(e);
            Jo(e, i, l);
            break;
          case 3:
          case 4:
            var o = r.stateNode.containerInfo, f = Ma(e);
            Zo(e, f, o);
            break;
          default:
            throw Error(a(161));
        }
      } catch (d) {
        je(e, e.return, d);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Qf(e, t, n) {
    O = e, Ra(e);
  }
  function Ra(e, t, n) {
    for (var r = (e.mode & 1) !== 0; O !== null; ) {
      var l = O, i = l.child;
      if (l.tag === 22 && r) {
        var o = l.memoizedState !== null || si;
        if (!o) {
          var f = l.alternate, d = f !== null && f.memoizedState !== null || qe;
          f = si;
          var y = qe;
          if (si = o, (qe = d) && !y) for (O = l; O !== null; ) o = O, d = o.child, o.tag === 22 && o.memoizedState !== null ? za(l) : d !== null ? (d.return = o, O = d) : za(l);
          for (; i !== null; ) O = i, Ra(i), i = i.sibling;
          O = l, si = f, qe = y;
        }
        La(e);
      } else (l.subtreeFlags & 8772) !== 0 && i !== null ? (i.return = l, O = i) : La(e);
    }
  }
  function La(e) {
    for (; O !== null; ) {
      var t = O;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              qe || ai(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !qe) if (n === null) r.componentDidMount();
              else {
                var l = t.elementType === t.type ? n.memoizedProps : Nt(t.type, n.memoizedProps);
                r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
              }
              var i = t.updateQueue;
              i !== null && js(t, i, r);
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
                js(t, o, n);
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
                var y = t.alternate;
                if (y !== null) {
                  var C = y.memoizedState;
                  if (C !== null) {
                    var T = C.dehydrated;
                    T !== null && Ar(T);
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
          qe || t.flags & 512 && Go(t);
        } catch (_) {
          je(t, t.return, _);
        }
      }
      if (t === e) {
        O = null;
        break;
      }
      if (n = t.sibling, n !== null) {
        n.return = t.return, O = n;
        break;
      }
      O = t.return;
    }
  }
  function ja(e) {
    for (; O !== null; ) {
      var t = O;
      if (t === e) {
        O = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        n.return = t.return, O = n;
        break;
      }
      O = t.return;
    }
  }
  function za(e) {
    for (; O !== null; ) {
      var t = O;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              ai(4, t);
            } catch (d) {
              je(t, n, d);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var l = t.return;
              try {
                r.componentDidMount();
              } catch (d) {
                je(t, l, d);
              }
            }
            var i = t.return;
            try {
              Go(t);
            } catch (d) {
              je(t, i, d);
            }
            break;
          case 5:
            var o = t.return;
            try {
              Go(t);
            } catch (d) {
              je(t, o, d);
            }
        }
      } catch (d) {
        je(t, t.return, d);
      }
      if (t === e) {
        O = null;
        break;
      }
      var f = t.sibling;
      if (f !== null) {
        f.return = t.return, O = f;
        break;
      }
      O = t.return;
    }
  }
  var Kf = Math.ceil, ci = Ee.ReactCurrentDispatcher, qo = Ee.ReactCurrentOwner, St = Ee.ReactCurrentBatchConfig, de = 0, $e = null, De = null, He = 0, ht = 0, Cr = mn(0), Ie = 0, ul = null, An = 0, fi = 0, bo = 0, sl = null, st = null, eu = 0, Mr = 1 / 0, bt = null, di = !1, tu = null, wn = null, pi = !1, Sn = null, mi = 0, al = 0, nu = null, hi = -1, vi = 0;
  function lt() {
    return (de & 6) !== 0 ? Me() : hi !== -1 ? hi : hi = Me();
  }
  function En(e) {
    return (e.mode & 1) === 0 ? 1 : (de & 2) !== 0 && He !== 0 ? He & -He : Pf.transition !== null ? (vi === 0 && (vi = Mu()), vi) : (e = ve, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Du(e.type)), e);
  }
  function Lt(e, t, n, r) {
    if (50 < al) throw al = 0, nu = null, Error(a(185));
    zr(e, n, r), ((de & 2) === 0 || e !== $e) && (e === $e && ((de & 2) === 0 && (fi |= n), Ie === 4 && xn(e, He)), at(e, r), n === 1 && de === 0 && (t.mode & 1) === 0 && (Mr = Me() + 500, Hl && vn()));
  }
  function at(e, t) {
    var n = e.callbackNode;
    Nc(e, t);
    var r = Cl(e, e === $e ? He : 0);
    if (r === 0) n !== null && we(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
      if (n != null && we(n), t === 1) e.tag === 0 ? Nf(Da.bind(null, e)) : ws(Da.bind(null, e)), _f(function() {
        (de & 6) === 0 && vn();
      }), n = null;
      else {
        switch (Tu(r)) {
          case 1:
            n = Fi;
            break;
          case 4:
            n = _u;
            break;
          case 16:
            n = Sl;
            break;
          case 536870912:
            n = Cu;
            break;
          default:
            n = Sl;
        }
        n = Ba(n, Fa.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = n;
    }
  }
  function Fa(e, t) {
    if (hi = -1, vi = 0, (de & 6) !== 0) throw Error(a(327));
    var n = e.callbackNode;
    if (Tr() && e.callbackNode !== n) return null;
    var r = Cl(e, e === $e ? He : 0);
    if (r === 0) return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = yi(e, r);
    else {
      t = r;
      var l = de;
      de |= 2;
      var i = Ia();
      ($e !== e || He !== t) && (bt = null, Mr = Me() + 500, $n(e, t));
      do
        try {
          Gf();
          break;
        } catch (f) {
          Oa(e, f);
        }
      while (!0);
      wo(), ci.current = i, de = l, De !== null ? t = 0 : ($e = null, He = 0, t = Ie);
    }
    if (t !== 0) {
      if (t === 2 && (l = Di(e), l !== 0 && (r = l, t = ru(e, l))), t === 1) throw n = ul, $n(e, 0), xn(e, r), at(e, Me()), n;
      if (t === 6) xn(e, r);
      else {
        if (l = e.current.alternate, (r & 30) === 0 && !Yf(l) && (t = yi(e, r), t === 2 && (i = Di(e), i !== 0 && (r = i, t = ru(e, i))), t === 1)) throw n = ul, $n(e, 0), xn(e, r), at(e, Me()), n;
        switch (e.finishedWork = l, e.finishedLanes = r, t) {
          case 0:
          case 1:
            throw Error(a(345));
          case 2:
            Wn(e, st, bt);
            break;
          case 3:
            if (xn(e, r), (r & 130023424) === r && (t = eu + 500 - Me(), 10 < t)) {
              if (Cl(e, 0) !== 0) break;
              if (l = e.suspendedLanes, (l & r) !== r) {
                lt(), e.pingedLanes |= e.suspendedLanes & l;
                break;
              }
              e.timeoutHandle = so(Wn.bind(null, e, st, bt), t);
              break;
            }
            Wn(e, st, bt);
            break;
          case 4:
            if (xn(e, r), (r & 4194240) === r) break;
            for (t = e.eventTimes, l = -1; 0 < r; ) {
              var o = 31 - Ct(r);
              i = 1 << o, o = t[o], o > l && (l = o), r &= ~i;
            }
            if (r = l, r = Me() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Kf(r / 1960)) - r, 10 < r) {
              e.timeoutHandle = so(Wn.bind(null, e, st, bt), r);
              break;
            }
            Wn(e, st, bt);
            break;
          case 5:
            Wn(e, st, bt);
            break;
          default:
            throw Error(a(329));
        }
      }
    }
    return at(e, Me()), e.callbackNode === n ? Fa.bind(null, e) : null;
  }
  function ru(e, t) {
    var n = sl;
    return e.current.memoizedState.isDehydrated && ($n(e, t).flags |= 256), e = yi(e, t), e !== 2 && (t = st, st = n, t !== null && lu(t)), e;
  }
  function lu(e) {
    st === null ? st = e : st.push.apply(st, e);
  }
  function Yf(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
          var l = n[r], i = l.getSnapshot;
          l = l.value;
          try {
            if (!Mt(i(), l)) return !1;
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
  function xn(e, t) {
    for (t &= ~bo, t &= ~fi, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var n = 31 - Ct(t), r = 1 << n;
      e[n] = -1, t &= ~r;
    }
  }
  function Da(e) {
    if ((de & 6) !== 0) throw Error(a(327));
    Tr();
    var t = Cl(e, 0);
    if ((t & 1) === 0) return at(e, Me()), null;
    var n = yi(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = Di(e);
      r !== 0 && (t = r, n = ru(e, r));
    }
    if (n === 1) throw n = ul, $n(e, 0), xn(e, t), at(e, Me()), n;
    if (n === 6) throw Error(a(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, Wn(e, st, bt), at(e, Me()), null;
  }
  function iu(e, t) {
    var n = de;
    de |= 1;
    try {
      return e(t);
    } finally {
      de = n, de === 0 && (Mr = Me() + 500, Hl && vn());
    }
  }
  function Un(e) {
    Sn !== null && Sn.tag === 0 && (de & 6) === 0 && Tr();
    var t = de;
    de |= 1;
    var n = St.transition, r = ve;
    try {
      if (St.transition = null, ve = 1, e) return e();
    } finally {
      ve = r, St.transition = n, de = t, (de & 6) === 0 && vn();
    }
  }
  function ou() {
    ht = Cr.current, _e(Cr);
  }
  function $n(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, xf(n)), De !== null) for (n = De.return; n !== null; ) {
      var r = n;
      switch (ho(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && Vl();
          break;
        case 3:
          Er(), _e(it), _e(Ge), No();
          break;
        case 5:
          Mo(r);
          break;
        case 4:
          Er();
          break;
        case 13:
          _e(Pe);
          break;
        case 19:
          _e(Pe);
          break;
        case 10:
          So(r.type._context);
          break;
        case 22:
        case 23:
          ou();
      }
      n = n.return;
    }
    if ($e = e, De = e = _n(e.current, null), He = ht = t, Ie = 0, ul = null, bo = fi = An = 0, st = sl = null, Dn !== null) {
      for (t = 0; t < Dn.length; t++) if (n = Dn[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var l = r.next, i = n.pending;
        if (i !== null) {
          var o = i.next;
          i.next = l, r.next = o;
        }
        n.pending = r;
      }
      Dn = null;
    }
    return e;
  }
  function Oa(e, t) {
    do {
      var n = De;
      try {
        if (wo(), ei.current = li, ti) {
          for (var r = Re.memoizedState; r !== null; ) {
            var l = r.queue;
            l !== null && (l.pending = null), r = r.next;
          }
          ti = !1;
        }
        if (In = 0, Ue = Oe = Re = null, tl = !1, nl = 0, qo.current = null, n === null || n.return === null) {
          Ie = 1, ul = t, De = null;
          break;
        }
        e: {
          var i = e, o = n.return, f = n, d = t;
          if (t = He, f.flags |= 32768, d !== null && typeof d == "object" && typeof d.then == "function") {
            var y = d, C = f, T = C.tag;
            if ((C.mode & 1) === 0 && (T === 0 || T === 11 || T === 15)) {
              var _ = C.alternate;
              _ ? (C.updateQueue = _.updateQueue, C.memoizedState = _.memoizedState, C.lanes = _.lanes) : (C.updateQueue = null, C.memoizedState = null);
            }
            var F = ua(o);
            if (F !== null) {
              F.flags &= -257, sa(F, o, f, i, t), F.mode & 1 && oa(i, y, t), t = F, d = y;
              var A = t.updateQueue;
              if (A === null) {
                var U = /* @__PURE__ */ new Set();
                U.add(d), t.updateQueue = U;
              } else A.add(d);
              break e;
            } else {
              if ((t & 1) === 0) {
                oa(i, y, t), uu();
                break e;
              }
              d = Error(a(426));
            }
          } else if (Te && f.mode & 1) {
            var Fe = ua(o);
            if (Fe !== null) {
              (Fe.flags & 65536) === 0 && (Fe.flags |= 256), sa(Fe, o, f, i, t), go(xr(d, f));
              break e;
            }
          }
          i = d = xr(d, f), Ie !== 4 && (Ie = 2), sl === null ? sl = [i] : sl.push(i), i = o;
          do {
            switch (i.tag) {
              case 3:
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var h = la(i, d, t);
                Ls(i, h);
                break e;
              case 1:
                f = d;
                var p = i.type, v = i.stateNode;
                if ((i.flags & 128) === 0 && (typeof p.getDerivedStateFromError == "function" || v !== null && typeof v.componentDidCatch == "function" && (wn === null || !wn.has(v)))) {
                  i.flags |= 65536, t &= -t, i.lanes |= t;
                  var N = ia(i, f, t);
                  Ls(i, N);
                  break e;
                }
            }
            i = i.return;
          } while (i !== null);
        }
        Ua(n);
      } catch (W) {
        t = W, De === n && n !== null && (De = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Ia() {
    var e = ci.current;
    return ci.current = li, e === null ? li : e;
  }
  function uu() {
    (Ie === 0 || Ie === 3 || Ie === 2) && (Ie = 4), $e === null || (An & 268435455) === 0 && (fi & 268435455) === 0 || xn($e, He);
  }
  function yi(e, t) {
    var n = de;
    de |= 2;
    var r = Ia();
    ($e !== e || He !== t) && (bt = null, $n(e, t));
    do
      try {
        Xf();
        break;
      } catch (l) {
        Oa(e, l);
      }
    while (!0);
    if (wo(), de = n, ci.current = r, De !== null) throw Error(a(261));
    return $e = null, He = 0, Ie;
  }
  function Xf() {
    for (; De !== null; ) Aa(De);
  }
  function Gf() {
    for (; De !== null && !Xe(); ) Aa(De);
  }
  function Aa(e) {
    var t = Va(e.alternate, e, ht);
    e.memoizedProps = e.pendingProps, t === null ? Ua(e) : De = t, qo.current = null;
  }
  function Ua(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (e = t.return, (t.flags & 32768) === 0) {
        if (n = Wf(n, t, ht), n !== null) {
          De = n;
          return;
        }
      } else {
        if (n = Vf(n, t), n !== null) {
          n.flags &= 32767, De = n;
          return;
        }
        if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          Ie = 6, De = null;
          return;
        }
      }
      if (t = t.sibling, t !== null) {
        De = t;
        return;
      }
      De = t = e;
    } while (t !== null);
    Ie === 0 && (Ie = 5);
  }
  function Wn(e, t, n) {
    var r = ve, l = St.transition;
    try {
      St.transition = null, ve = 1, Zf(e, t, n, r);
    } finally {
      St.transition = l, ve = r;
    }
    return null;
  }
  function Zf(e, t, n, r) {
    do
      Tr();
    while (Sn !== null);
    if ((de & 6) !== 0) throw Error(a(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(a(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var i = n.lanes | n.childLanes;
    if (Pc(e, i), e === $e && (De = $e = null, He = 0), (n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0 || pi || (pi = !0, Ba(Sl, function() {
      return Tr(), null;
    })), i = (n.flags & 15990) !== 0, (n.subtreeFlags & 15990) !== 0 || i) {
      i = St.transition, St.transition = null;
      var o = ve;
      ve = 1;
      var f = de;
      de |= 4, qo.current = null, Hf(e, n), Pa(n, e), vf(oo), Nl = !!io, oo = io = null, e.current = n, Qf(n), Le(), de = f, ve = o, St.transition = i;
    } else e.current = n;
    if (pi && (pi = !1, Sn = e, mi = l), i = e.pendingLanes, i === 0 && (wn = null), xc(n.stateNode), at(e, Me()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
    if (di) throw di = !1, e = tu, tu = null, e;
    return (mi & 1) !== 0 && e.tag !== 0 && Tr(), i = e.pendingLanes, (i & 1) !== 0 ? e === nu ? al++ : (al = 0, nu = e) : al = 0, vn(), null;
  }
  function Tr() {
    if (Sn !== null) {
      var e = Tu(mi), t = St.transition, n = ve;
      try {
        if (St.transition = null, ve = 16 > e ? 16 : e, Sn === null) var r = !1;
        else {
          if (e = Sn, Sn = null, mi = 0, (de & 6) !== 0) throw Error(a(331));
          var l = de;
          for (de |= 4, O = e.current; O !== null; ) {
            var i = O, o = i.child;
            if ((O.flags & 16) !== 0) {
              var f = i.deletions;
              if (f !== null) {
                for (var d = 0; d < f.length; d++) {
                  var y = f[d];
                  for (O = y; O !== null; ) {
                    var C = O;
                    switch (C.tag) {
                      case 0:
                      case 11:
                      case 15:
                        ol(8, C, i);
                    }
                    var T = C.child;
                    if (T !== null) T.return = C, O = T;
                    else for (; O !== null; ) {
                      C = O;
                      var _ = C.sibling, F = C.return;
                      if (_a(C), C === y) {
                        O = null;
                        break;
                      }
                      if (_ !== null) {
                        _.return = F, O = _;
                        break;
                      }
                      O = F;
                    }
                  }
                }
                var A = i.alternate;
                if (A !== null) {
                  var U = A.child;
                  if (U !== null) {
                    A.child = null;
                    do {
                      var Fe = U.sibling;
                      U.sibling = null, U = Fe;
                    } while (U !== null);
                  }
                }
                O = i;
              }
            }
            if ((i.subtreeFlags & 2064) !== 0 && o !== null) o.return = i, O = o;
            else e: for (; O !== null; ) {
              if (i = O, (i.flags & 2048) !== 0) switch (i.tag) {
                case 0:
                case 11:
                case 15:
                  ol(9, i, i.return);
              }
              var h = i.sibling;
              if (h !== null) {
                h.return = i.return, O = h;
                break e;
              }
              O = i.return;
            }
          }
          var p = e.current;
          for (O = p; O !== null; ) {
            o = O;
            var v = o.child;
            if ((o.subtreeFlags & 2064) !== 0 && v !== null) v.return = o, O = v;
            else e: for (o = p; O !== null; ) {
              if (f = O, (f.flags & 2048) !== 0) try {
                switch (f.tag) {
                  case 0:
                  case 11:
                  case 15:
                    ai(9, f);
                }
              } catch (W) {
                je(f, f.return, W);
              }
              if (f === o) {
                O = null;
                break e;
              }
              var N = f.sibling;
              if (N !== null) {
                N.return = f.return, O = N;
                break e;
              }
              O = f.return;
            }
          }
          if (de = l, vn(), At && typeof At.onPostCommitFiberRoot == "function") try {
            At.onPostCommitFiberRoot(El, e);
          } catch {
          }
          r = !0;
        }
        return r;
      } finally {
        ve = n, St.transition = t;
      }
    }
    return !1;
  }
  function $a(e, t, n) {
    t = xr(n, t), t = la(e, t, 1), e = gn(e, t, 1), t = lt(), e !== null && (zr(e, 1, t), at(e, t));
  }
  function je(e, t, n) {
    if (e.tag === 3) $a(e, e, n);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        $a(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (wn === null || !wn.has(r))) {
          e = xr(n, e), e = ia(t, e, 1), t = gn(t, e, 1), e = lt(), t !== null && (zr(t, 1, e), at(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function Jf(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = lt(), e.pingedLanes |= e.suspendedLanes & n, $e === e && (He & n) === n && (Ie === 4 || Ie === 3 && (He & 130023424) === He && 500 > Me() - eu ? $n(e, 0) : bo |= n), at(e, t);
  }
  function Wa(e, t) {
    t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = _l, _l <<= 1, (_l & 130023424) === 0 && (_l = 4194304)));
    var n = lt();
    e = Zt(e, t), e !== null && (zr(e, t, n), at(e, n));
  }
  function qf(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), Wa(e, n);
  }
  function bf(e, t) {
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
    r !== null && r.delete(t), Wa(e, n);
  }
  var Va;
  Va = function(e, t, n) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || it.current) ut = !0;
    else {
      if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return ut = !1, $f(e, t, n);
      ut = (e.flags & 131072) !== 0;
    }
    else ut = !1, Te && (t.flags & 1048576) !== 0 && Ss(t, Kl, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var r = t.type;
        ui(e, t), e = t.pendingProps;
        var l = hr(t, Ge.current);
        Sr(t, n), l = Lo(null, t, r, e, l, n);
        var i = jo();
        return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, ot(r) ? (i = !0, Bl(t)) : i = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, _o(t), l.updater = ii, t.stateNode = l, l._reactInternals = t, Ao(t, r, e, n), t = Vo(null, t, r, !0, i, n)) : (t.tag = 0, Te && i && mo(t), rt(null, t, l, n), t = t.child), t;
      case 16:
        r = t.elementType;
        e: {
          switch (ui(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = td(r), e = Nt(r, e), l) {
            case 0:
              t = Wo(null, t, r, e, n);
              break e;
            case 1:
              t = ma(null, t, r, e, n);
              break e;
            case 11:
              t = aa(null, t, r, e, n);
              break e;
            case 14:
              t = ca(null, t, r, Nt(r.type, e), n);
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
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Nt(r, l), Wo(e, t, r, l, n);
      case 1:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Nt(r, l), ma(e, t, r, l, n);
      case 3:
        e: {
          if (ha(t), e === null) throw Error(a(387));
          r = t.pendingProps, i = t.memoizedState, l = i.element, Rs(e, t), ql(t, r, null, n);
          var o = t.memoizedState;
          if (r = o.element, i.isDehydrated) if (i = { element: r, isDehydrated: !1, cache: o.cache, pendingSuspenseBoundaries: o.pendingSuspenseBoundaries, transitions: o.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
            l = xr(Error(a(423)), t), t = va(e, t, r, n, l);
            break e;
          } else if (r !== l) {
            l = xr(Error(a(424)), t), t = va(e, t, r, n, l);
            break e;
          } else for (mt = pn(t.stateNode.containerInfo.firstChild), pt = t, Te = !0, Tt = null, n = Ns(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (gr(), r === l) {
              t = qt(e, t, n);
              break e;
            }
            rt(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return zs(t), e === null && yo(t), r = t.type, l = t.pendingProps, i = e !== null ? e.memoizedProps : null, o = l.children, uo(r, l) ? o = null : i !== null && uo(r, i) && (t.flags |= 32), pa(e, t), rt(e, t, o, n), t.child;
      case 6:
        return e === null && yo(t), null;
      case 13:
        return ya(e, t, n);
      case 4:
        return Co(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = kr(t, null, r, n) : rt(e, t, r, n), t.child;
      case 11:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Nt(r, l), aa(e, t, r, l, n);
      case 7:
        return rt(e, t, t.pendingProps, n), t.child;
      case 8:
        return rt(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return rt(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (r = t.type._context, l = t.pendingProps, i = t.memoizedProps, o = l.value, Se(Gl, r._currentValue), r._currentValue = o, i !== null) if (Mt(i.value, o)) {
            if (i.children === l.children && !it.current) {
              t = qt(e, t, n);
              break e;
            }
          } else for (i = t.child, i !== null && (i.return = t); i !== null; ) {
            var f = i.dependencies;
            if (f !== null) {
              o = i.child;
              for (var d = f.firstContext; d !== null; ) {
                if (d.context === r) {
                  if (i.tag === 1) {
                    d = Jt(-1, n & -n), d.tag = 2;
                    var y = i.updateQueue;
                    if (y !== null) {
                      y = y.shared;
                      var C = y.pending;
                      C === null ? d.next = d : (d.next = C.next, C.next = d), y.pending = d;
                    }
                  }
                  i.lanes |= n, d = i.alternate, d !== null && (d.lanes |= n), Eo(
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
              o.lanes |= n, f = o.alternate, f !== null && (f.lanes |= n), Eo(o, n, t), o = i.sibling;
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
          rt(e, t, l.children, n), t = t.child;
        }
        return t;
      case 9:
        return l = t.type, r = t.pendingProps.children, Sr(t, n), l = kt(l), r = r(l), t.flags |= 1, rt(e, t, r, n), t.child;
      case 14:
        return r = t.type, l = Nt(r, t.pendingProps), l = Nt(r.type, l), ca(e, t, r, l, n);
      case 15:
        return fa(e, t, t.type, t.pendingProps, n);
      case 17:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Nt(r, l), ui(e, t), t.tag = 1, ot(r) ? (e = !0, Bl(t)) : e = !1, Sr(t, n), na(t, r, l), Ao(t, r, l, n), Vo(null, t, r, !0, e, n);
      case 19:
        return ka(e, t, n);
      case 22:
        return da(e, t, n);
    }
    throw Error(a(156, t.tag));
  };
  function Ba(e, t) {
    return ke(e, t);
  }
  function ed(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Et(e, t, n, r) {
    return new ed(e, t, n, r);
  }
  function su(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function td(e) {
    if (typeof e == "function") return su(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === ft) return 11;
      if (e === Ye) return 14;
    }
    return 2;
  }
  function _n(e, t) {
    var n = e.alternate;
    return n === null ? (n = Et(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
  }
  function gi(e, t, n, r, l, i) {
    var o = 2;
    if (r = e, typeof e == "function") su(e) && (o = 1);
    else if (typeof e == "string") o = 5;
    else e: switch (e) {
      case oe:
        return Vn(n.children, l, i, t);
      case Ve:
        o = 8, l |= 8;
        break;
      case Ae:
        return e = Et(12, n, t, l | 2), e.elementType = Ae, e.lanes = i, e;
      case Ke:
        return e = Et(13, n, t, l), e.elementType = Ke, e.lanes = i, e;
      case et:
        return e = Et(19, n, t, l), e.elementType = et, e.lanes = i, e;
      case he:
        return ki(n, l, i, t);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case Qe:
            o = 10;
            break e;
          case be:
            o = 9;
            break e;
          case ft:
            o = 11;
            break e;
          case Ye:
            o = 14;
            break e;
          case Ne:
            o = 16, r = null;
            break e;
        }
        throw Error(a(130, e == null ? e : typeof e, ""));
    }
    return t = Et(o, n, t, l), t.elementType = e, t.type = r, t.lanes = i, t;
  }
  function Vn(e, t, n, r) {
    return e = Et(7, e, r, t), e.lanes = n, e;
  }
  function ki(e, t, n, r) {
    return e = Et(22, e, r, t), e.elementType = he, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
  }
  function au(e, t, n) {
    return e = Et(6, e, null, t), e.lanes = n, e;
  }
  function cu(e, t, n) {
    return t = Et(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function nd(e, t, n, r, l) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Oi(0), this.expirationTimes = Oi(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Oi(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
  }
  function fu(e, t, n, r, l, i, o, f, d) {
    return e = new nd(e, t, n, f, d), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = Et(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, _o(i), e;
  }
  function rd(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: me, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
  }
  function Ha(e) {
    if (!e) return hn;
    e = e._reactInternals;
    e: {
      if (g(e) !== e || e.tag !== 1) throw Error(a(170));
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
      if (ot(n)) return gs(e, n, t);
    }
    return t;
  }
  function Qa(e, t, n, r, l, i, o, f, d) {
    return e = fu(n, r, !0, e, l, i, o, f, d), e.context = Ha(null), n = e.current, r = lt(), l = En(n), i = Jt(r, l), i.callback = t ?? null, gn(n, i, l), e.current.lanes = l, zr(e, l, r), at(e, r), e;
  }
  function wi(e, t, n, r) {
    var l = t.current, i = lt(), o = En(l);
    return n = Ha(n), t.context === null ? t.context = n : t.pendingContext = n, t = Jt(i, o), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = gn(l, t, o), e !== null && (Lt(e, l, o, i), Jl(e, l, o)), o;
  }
  function Si(e) {
    return e = e.current, e.child ? (e.child.tag === 5, e.child.stateNode) : null;
  }
  function Ka(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function du(e, t) {
    Ka(e, t), (e = e.alternate) && Ka(e, t);
  }
  function ld() {
    return null;
  }
  var Ya = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function pu(e) {
    this._internalRoot = e;
  }
  Ei.prototype.render = pu.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(a(409));
    wi(e, t, null, null);
  }, Ei.prototype.unmount = pu.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Un(function() {
        wi(null, e, null, null);
      }), t[Kt] = null;
    }
  };
  function Ei(e) {
    this._internalRoot = e;
  }
  Ei.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Ru();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < cn.length && t !== 0 && t < cn[n].priority; n++) ;
      cn.splice(n, 0, e), n === 0 && zu(e);
    }
  };
  function mu(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function xi(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function Xa() {
  }
  function id(e, t, n, r, l) {
    if (l) {
      if (typeof r == "function") {
        var i = r;
        r = function() {
          var y = Si(o);
          i.call(y);
        };
      }
      var o = Qa(t, r, e, 0, null, !1, !1, "", Xa);
      return e._reactRootContainer = o, e[Kt] = o.current, Yr(e.nodeType === 8 ? e.parentNode : e), Un(), o;
    }
    for (; l = e.lastChild; ) e.removeChild(l);
    if (typeof r == "function") {
      var f = r;
      r = function() {
        var y = Si(d);
        f.call(y);
      };
    }
    var d = fu(e, 0, !1, null, null, !1, !1, "", Xa);
    return e._reactRootContainer = d, e[Kt] = d.current, Yr(e.nodeType === 8 ? e.parentNode : e), Un(function() {
      wi(t, d, n, r);
    }), d;
  }
  function _i(e, t, n, r, l) {
    var i = n._reactRootContainer;
    if (i) {
      var o = i;
      if (typeof l == "function") {
        var f = l;
        l = function() {
          var d = Si(o);
          f.call(d);
        };
      }
      wi(t, o, e, l);
    } else o = id(n, t, e, l, r);
    return Si(o);
  }
  Nu = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = jr(t.pendingLanes);
          n !== 0 && (Ii(t, n | 1), at(t, Me()), (de & 6) === 0 && (Mr = Me() + 500, vn()));
        }
        break;
      case 13:
        Un(function() {
          var r = Zt(e, 1);
          if (r !== null) {
            var l = lt();
            Lt(r, e, 1, l);
          }
        }), du(e, 1);
    }
  }, Ai = function(e) {
    if (e.tag === 13) {
      var t = Zt(e, 134217728);
      if (t !== null) {
        var n = lt();
        Lt(t, e, 134217728, n);
      }
      du(e, 134217728);
    }
  }, Pu = function(e) {
    if (e.tag === 13) {
      var t = En(e), n = Zt(e, t);
      if (n !== null) {
        var r = lt();
        Lt(n, e, t, r);
      }
      du(e, t);
    }
  }, Ru = function() {
    return ve;
  }, Lu = function(e, t) {
    var n = ve;
    try {
      return ve = e, t();
    } finally {
      ve = n;
    }
  }, nr = function(e, t, n) {
    switch (t) {
      case "input":
        if (Yn(e, n), t = n.name, n.type === "radio" && t != null) {
          for (n = e; n.parentNode; ) n = n.parentNode;
          for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
            var r = n[t];
            if (r !== e && r.form === e.form) {
              var l = Wl(r);
              if (!l) throw Error(a(90));
              Nr(r), Yn(r, l);
            }
          }
        }
        break;
      case "textarea":
        hl(e, n);
        break;
      case "select":
        t = n.value, t != null && nt(e, !!n.multiple, t, !1);
    }
  }, rr = iu, ln = Un;
  var od = { usingClientEntryPoint: !1, Events: [Zr, pr, Wl, nn, rn, iu] }, cl = { findFiberByHostInstance: Ln, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, ud = { bundleType: cl.bundleType, version: cl.version, rendererPackageName: cl.rendererPackageName, rendererConfig: cl.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Ee.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = re(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: cl.findFiberByHostInstance || ld, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ci = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ci.isDisabled && Ci.supportsFiber) try {
      El = Ci.inject(ud), At = Ci;
    } catch {
    }
  }
  return ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = od, ct.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!mu(t)) throw Error(a(200));
    return rd(e, t, null, n);
  }, ct.createRoot = function(e, t) {
    if (!mu(e)) throw Error(a(299));
    var n = !1, r = "", l = Ya;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = fu(e, 1, !1, null, null, n, !1, r, l), e[Kt] = t.current, Yr(e.nodeType === 8 ? e.parentNode : e), new pu(t);
  }, ct.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(a(188)) : (e = Object.keys(e).join(","), Error(a(268, e)));
    return e = re(t), e = e === null ? null : e.stateNode, e;
  }, ct.flushSync = function(e) {
    return Un(e);
  }, ct.hydrate = function(e, t, n) {
    if (!xi(t)) throw Error(a(200));
    return _i(null, e, t, !0, n);
  }, ct.hydrateRoot = function(e, t, n) {
    if (!mu(e)) throw Error(a(405));
    var r = n != null && n.hydratedSources || null, l = !1, i = "", o = Ya;
    if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (o = n.onRecoverableError)), t = Qa(t, null, e, 1, n ?? null, l, !1, i, o), e[Kt] = t.current, Yr(e), r) for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
      n,
      l
    );
    return new Ei(t);
  }, ct.render = function(e, t, n) {
    if (!xi(t)) throw Error(a(200));
    return _i(null, e, t, !1, n);
  }, ct.unmountComponentAtNode = function(e) {
    if (!xi(e)) throw Error(a(40));
    return e._reactRootContainer ? (Un(function() {
      _i(null, null, e, !1, function() {
        e._reactRootContainer = null, e[Kt] = null;
      });
    }), !0) : !1;
  }, ct.unstable_batchedUpdates = iu, ct.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!xi(n)) throw Error(a(200));
    if (e == null || e._reactInternals === void 0) throw Error(a(38));
    return _i(e, t, n, !1, r);
  }, ct.version = "18.3.1-next-f1338f8080-20240426", ct;
}
var nc;
function hd() {
  if (nc) return yu.exports;
  nc = 1;
  function u() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u);
      } catch (s) {
        console.error(s);
      }
  }
  return u(), yu.exports = md(), yu.exports;
}
var rc;
function vd() {
  if (rc) return Mi;
  rc = 1;
  var u = hd();
  return Mi.createRoot = u.createRoot, Mi.hydrateRoot = u.hydrateRoot, Mi;
}
var yd = vd(), J = xu();
const gd = { backing: 0.85, guitar: 0.78, vocals: 0.78 }, lc = 100;
function kd(u) {
  if (u === null || u.trim() === "") return lc;
  const s = Number(u);
  return Number.isFinite(s) ? Math.round(Math.min(100, Math.max(0, s))) : lc;
}
function ic(u, s, a = !0) {
  return a ? gd[u] * kd(String(s)) / 100 : 0;
}
function wd(u = () => new Audio()) {
  try {
    const s = u();
    return s.volume = 0.5, Math.abs(s.volume - 0.5) < 0.01;
  } catch {
    return !1;
  }
}
const Sd = 0.12, Ed = 2e3, xd = 3;
function _d(u, s = !1) {
  return s ? !0 : u.atLoopBoundary || u.drift <= Sd || u.seeking || u.readyState < xd ? !1 : u.msSinceLastFix >= Ed;
}
const Cd = 1.5, Md = 0.4, Td = 0.5;
let wu = null, Nd = null;
function Pd(u) {
  return wu !== null ? wu : (Nd ??= wd()) ? 0 : Md;
}
class Rd {
  constructor(s = Pd()) {
    this.latency = s;
  }
  latency;
  lastFix = /* @__PURE__ */ new WeakMap();
  /** Palauttaa true, jos raita kelattiin. force = toiston alku, käyttäjän kelaus tai raidan päälle kytkentä. */
  align(s, a, k = !1, w = performance.now()) {
    if (a.readyState < 1 || s.readyState < 1 || !k && (a.paused || s.paused)) return !1;
    const M = a.currentTime - s.currentTime, S = Math.abs(M), E = s.loop && Number.isFinite(s.duration) && Math.abs(S - s.duration) < 0.35, z = this.lastFix.get(a);
    if (!_d({
      drift: S,
      atLoopBoundary: E,
      seeking: a.seeking,
      readyState: a.readyState,
      msSinceLastFix: z === void 0 ? 1 / 0 : w - z
    }, k)) return !1;
    const L = !s.paused;
    !k && L && z !== void 0 && (this.latency = Math.min(Cd, Math.max(0, this.latency - Td * M)), wu = this.latency);
    let H = s.currentTime + (L ? this.latency : 0);
    Number.isFinite(a.duration) && (H = Math.min(H, Math.max(0, a.duration - 0.05)));
    try {
      a.currentTime = H;
    } catch {
      return !1;
    }
    return L ? this.lastFix.set(a, w) : this.lastFix.delete(a), !0;
  }
}
function Ld(u = globalThis.navigator) {
  const s = u?.audioSession;
  s && s.type !== "playback" && (s.type = "playback");
}
const jd = () => {
  const u = globalThis.AudioContext ?? globalThis.webkitAudioContext;
  if (!u) throw new Error("Web Audio API puuttuu");
  return new u();
}, zd = 250, Fd = 0.5, oc = 2e3, Dd = 50, Od = 8;
class Id {
  samples = [];
  sample(s, a) {
    if (!Number.isFinite(s) || !Number.isFinite(a)) return;
    const k = this.samples.at(-1);
    k && a - k.wallMs < Dd && this.samples.pop(), this.samples.push({ contextTime: s, wallMs: a }), this.samples.length > Od && this.samples.shift();
  }
  reset() {
    this.samples = [];
  }
  check(s, a) {
    if (!Number.isFinite(s) || !Number.isFinite(a)) return "unknown";
    for (let k = this.samples.length - 1; k >= 0; k--) {
      const w = this.samples[k], M = a - w.wallMs;
      if (M < zd) continue;
      return (s - w.contextTime) * 1e3 < M * Fd ? "stalled" : "advancing";
    }
    return "unknown";
  }
}
function uc(u, s, a) {
  let k;
  const w = new Promise((M, S) => {
    k = setTimeout(() => S(new Error(`${a}: aikakatkaisu ${s} ms`)), s);
  });
  return Promise.race([u, w]).finally(() => clearTimeout(k));
}
function Ad(u) {
  const s = u?.name, a = u?.message;
  return typeof s == "string" && s !== "Error" ? typeof a == "string" && a ? `${s}: ${a}` : s : typeof a == "string" ? a : String(u);
}
class sc {
  constructor(s = jd, a = globalThis.navigator, k = () => performance.now()) {
    this.create = s, this.nav = a, this.now = k;
  }
  create;
  nav;
  now;
  context = null;
  gains = /* @__PURE__ */ new WeakMap();
  clock = new Id();
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
        Ld(this.nav);
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
    const k = (async () => {
      try {
        if (typeof s.suspend != "function" || typeof s.resume != "function")
          throw new Error("suspend() tai resume() puuttuu");
        if (await uc(s.suspend(), oc, "suspend()"), await uc(s.resume(), oc, "resume()"), s.state !== "running") throw new Error(`tila ${s.state} palautuksen jälkeen`);
        if (s !== this.context) throw new Error("konteksti suljettiin palautuksen aikana");
        return this.clock.reset(), this.observe(), !0;
      } catch (w) {
        return this.lastError = "Web Audion palautus epäonnistui: " + Ad(w), !1;
      }
    })().finally(() => {
      this.recovery === k && (this.recovery = null);
    });
    return this.recovery = k, k;
  }
  /** Kytkee elementin yhden kerran: elementin oma ääni kulkee sen jälkeen vain GainNoden kautta. */
  route(s) {
    if (this.gains.has(s)) return !0;
    if (!this.context) return !1;
    try {
      const a = this.context.createMediaElementSource(s), k = this.context.createGain();
      return a.connect(k), k.connect(this.context.destination), this.gains.set(s, k), !0;
    } catch (a) {
      return this.lastError = "Raidan kytkentä äänenvoimakkuussäätimeen epäonnistui: " + String(a), !1;
    }
  }
  routed(s) {
    return !!s && this.gains.has(s);
  }
  setLevel(s, a) {
    const k = this.gains.get(s);
    k && (k.gain.value = a);
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
function Ud(u) {
  const s = new DataView(u), a = (M) => String.fromCharCode(
    s.getUint8(M),
    s.getUint8(M + 1),
    s.getUint8(M + 2),
    s.getUint8(M + 3)
  );
  if (s.byteLength < 12 || a(0) !== "RIFF" || a(8) !== "WAVE") throw new Error("Tiedosto ei ole WAV");
  let k = 12, w = null;
  for (; k + 8 <= s.byteLength; ) {
    const M = a(k), S = s.getUint32(k + 4, !0), E = k + 8;
    if (M === "fmt ") {
      let z = s.getUint16(E, !0);
      z === 65534 && S >= 26 && (z = s.getUint16(E + 24, !0)), w = {
        format: z,
        channels: s.getUint16(E + 2, !0),
        sampleRate: s.getUint32(E + 4, !0),
        blockAlign: s.getUint16(E + 12, !0),
        bitsPerSample: s.getUint16(E + 14, !0)
      };
    } else if (M === "data") {
      if (!w) throw new Error("WAV: data-lohko ennen fmt-lohkoa");
      if (!(w.format === 1 && [16, 24, 32].includes(w.bitsPerSample) || w.format === 3 && w.bitsPerSample === 32))
        throw new Error(`WAV: muotoa ${w.format}/${w.bitsPerSample} bittiä ei tueta`);
      return { ...w, dataOffset: E, dataBytes: S, frames: Math.floor(S / w.blockAlign) };
    }
    k = E + S + S % 2;
  }
  throw new Error("WAV: data-lohkoa ei löytynyt otsakkeesta");
}
function $d(u, s) {
  const a = Math.floor(u.byteLength / s.blockAlign), k = new DataView(u.buffer, u.byteOffset, u.byteLength), w = s.bitsPerSample / 8, M = s.format === 3 ? (E) => k.getFloat32(E, !0) : w === 2 ? (E) => k.getInt16(E, !0) / 32768 : w === 3 ? (E) => (k.getUint8(E) | k.getUint8(E + 1) << 8 | k.getInt8(E + 2) << 16) / 8388608 : (E) => k.getInt32(E, !0) / 2147483648, S = new Float32Array(a);
  for (let E = 0; E < a; E++) {
    let z = 0;
    const L = E * s.blockAlign;
    for (let H = 0; H < s.channels; H++) z += M(L + H * w);
    S[E] = z / s.channels;
  }
  return S;
}
function Wd(u, s, a) {
  if (s === a) return u;
  const k = Math.floor(u.length * a / s), w = new Float32Array(k), M = s / a;
  for (let S = 0; S < k; S++) {
    const E = S * M, z = Math.floor(E), L = E - z, H = u[z] ?? 0, Y = u[z + 1] ?? H;
    w[S] = H + (Y - H) * L;
  }
  return w;
}
function ac(u, s) {
  if (s <= 1) return u;
  const a = Math.floor(u.length / s), k = new Float32Array(a);
  for (let w = 0; w < a; w++) {
    let M = 0;
    const S = w * s;
    for (let E = 0; E < s; E++) M += u[S + E];
    k[w] = M / s;
  }
  return k;
}
function Vd(u) {
  let s = 0;
  for (const a of u) s += a * a;
  return u.length ? Math.sqrt(s / u.length) : 0;
}
function cc(u, s, a, k) {
  const w = Math.max(0, a), M = Math.min(k, u.length - s.length);
  if (M < w) return new Float32Array(0);
  const S = new Float64Array(u.length + 1);
  for (let L = 0; L < u.length; L++) S[L + 1] = S[L] + u[L] * u[L];
  let E = 0;
  for (const L of s) E += L * L;
  const z = new Float32Array(M - w + 1);
  for (let L = w; L <= M; L++) {
    let H = 0;
    for (let Q = 0; Q < s.length; Q++) H += s[Q] * u[Q + L];
    const Y = Math.sqrt(E * (S[L + s.length] - S[L]));
    z[L - w] = Y > 0 ? H / Y : 0;
  }
  return z;
}
function fc(u, s) {
  if (s <= 1) return u;
  const a = new Float32Array(u.length);
  let k = 0;
  for (let w = 0; w < u.length; w++)
    k += u[w], w >= s && (k -= u[w - s]), a[w] = k / Math.min(s, w + 1);
  return a;
}
function Bd(u, s, a) {
  let k = s;
  for (; k > 0 && u[k - 1] <= u[k]; ) k--;
  let w = s;
  for (; w < u.length - 1 && u[w + 1] <= u[w]; ) w++;
  let M = 0;
  for (let S = 0; S < u.length; S++) {
    if (S >= k && S <= w || Math.abs(S - s) <= a) continue;
    (S === 0 || u[S] >= u[S - 1]) && (S === u.length - 1 || u[S] >= u[S + 1]) && u[S] > M && (M = u[S]);
  }
  return M;
}
function Hd(u, s, a, k = 16) {
  if (s.length === 0 || u.length < s.length) throw new Error("Referenssi on lyhyempi kuin näyte");
  const w = ac(u, k), M = ac(s, k), S = cc(w, M, 0, w.length - M.length);
  let E = 0;
  for (let I = 1; I < S.length; I++) S[I] > S[E] && (E = I);
  const z = Bd(S, E, Math.max(1, Math.round(0.02 * a / k))), L = E * k, H = Math.max(0, L - 2 * k), Y = Math.min(u.length - s.length, L + 2 * k), Q = Math.max(1, Math.round(a / 12e3)), ie = cc(fc(u, Q), fc(s, Q), H, Y);
  let ee = 0;
  for (let I = 1; I < ie.length; I++) ie[I] > ie[ee] && (ee = I);
  let Z = 0;
  if (ee > 0 && ee < ie.length - 1) {
    const [I, ze, Ce] = [ie[ee - 1], ie[ee], ie[ee + 1]], se = I - 2 * ze + Ce;
    se < 0 && (Z = Math.max(-0.5, Math.min(0.5, 0.5 * (I - Ce) / se)));
  }
  return { lag: H + ee + Z, score: ie[ee], runnerUp: z };
}
function Qd(u, s = 0.6, a = 0.1) {
  return u.score >= s && u.score - u.runnerUp >= a;
}
const Su = 32768, Ti = 1.5, wc = /* @__PURE__ */ new WeakMap();
function Kd() {
  const u = globalThis.AudioContext?.prototype;
  if (!u || u.__kaksiraita) return;
  const s = u.createMediaElementSource;
  u.createMediaElementSource = function(a) {
    const k = s.call(this, a), w = this.createAnalyser();
    return w.fftSize = Su, k.connect(w), wc.set(a, { analyser: w, context: this, source: k }), k;
  }, u.__kaksiraita = !0;
}
function ml(u) {
  return u ? wc.get(u) ?? null : null;
}
function dc(u) {
  let s = null;
  async function a(w, M) {
    const S = await u();
    return new Uint8Array(await S.slice(w, M + 1).arrayBuffer());
  }
  const k = () => {
    if (!s) {
      const w = a(0, 4095).then((M) => Ud(M.slice().buffer));
      s = w, w.catch(() => {
        s === w && (s = null);
      });
    }
    return s;
  };
  return {
    async durationSeconds() {
      const w = await k();
      return w.frames / w.sampleRate;
    },
    async window(w, M) {
      const S = await k(), E = Math.max(0, Math.floor(w * S.sampleRate)), z = Math.min(S.frames, Math.ceil(M * S.sampleRate));
      if (z <= E) throw new Error("Referenssi-ikkuna on tiedoston ulkopuolella");
      const L = await a(S.dataOffset + E * S.blockAlign, S.dataOffset + z * S.blockAlign - 1);
      return { samples: $d(L, S), sampleRate: S.sampleRate, startSeconds: E / S.sampleRate };
    }
  };
}
function pc(u, s) {
  return {
    async durationSeconds() {
      return u.length / s;
    },
    async window(a, k) {
      const w = Math.max(0, Math.floor(a * s)), M = Math.min(u.length, Math.ceil(k * s));
      return { samples: u.slice(w, M), sampleRate: s, startSeconds: w / s };
    }
  };
}
async function Yd(u, s) {
  const a = s.map((ee) => ({ input: ee, tap: ml(ee.element) }));
  if (a.some((ee) => !ee.tap)) throw new Error("Raitaa ei ole vielä kytketty Web Audioon");
  const k = a[0].tap.context;
  let w = 0, M = [], S = [], E = 0;
  for (; ; ) {
    w++;
    const ee = k.currentTime;
    if (M = a.map(({ tap: Z }) => {
      const I = new Float32Array(Su);
      return Z.analyser.getFloatTimeDomainData(I), I;
    }), S = a.map(({ input: Z }) => Z.element.currentTime), E = k.currentTime, E === ee || w >= 8) break;
    await new Promise((Z) => setTimeout(Z, 0));
  }
  const z = k.sampleRate, L = Su / z, H = [];
  for (let ee = 0; ee < a.length; ee++) {
    const { input: Z } = a[ee], I = M[ee], ze = Vd(I), Ce = { name: Z.name, mediaTime: S[ee], probeRms: ze };
    try {
      const se = S[ee] + Z.referenceOffsetSeconds, Ee = await Z.reference.durationSeconds();
      if (se - L - Ti < 0 || se + Ti > Ee)
        throw new Error("Kohta on referenssin ulkopuolella");
      const te = await Z.reference.window(se - L - Ti, se + Ti), me = Wd(te.samples, te.sampleRate, z), oe = Hd(me, I, z), Ve = te.startSeconds + (oe.lag + I.length) / z, Ae = Qd(oe) && ze > 1e-4;
      H.push({
        ...Ce,
        renderedTime: Ve,
        score: oe.score,
        runnerUp: oe.runnerUp,
        reliable: Ae,
        mediaMinusRenderedMs: (se - Ve) * 1e3
      });
    } catch (se) {
      H.push({ ...Ce, renderedTime: null, score: null, runnerUp: null, reliable: !1, mediaMinusRenderedMs: null, error: String(se) });
    }
  }
  const [Y, Q] = H, ie = Y.reliable && Q.reliable && Y.renderedTime !== null && Q.renderedTime !== null;
  return {
    phase: u,
    ms: Math.round(performance.now()),
    contextTime: E,
    sampleRate: z,
    attempts: w,
    tracks: H,
    mediaDiffMs: (Q.mediaTime - Y.mediaTime) * 1e3,
    renderedDiffMs: ie ? (Q.renderedTime - Y.renderedTime) * 1e3 : null,
    reliable: ie
  };
}
class Xd {
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
function Gd(u) {
  const s = /* @__PURE__ */ new Map(), a = [];
  for (const k of u) {
    const w = String(k.track ?? "");
    if (k.event === "seek-write" && s.set(w, k), k.event === "seeked" && s.has(w)) {
      const M = s.get(w);
      a.push({ track: w, forced: !!M.forced, ms: k.ms - M.ms, from: Number(M.from), to: Number(M.to) }), s.delete(w);
    }
  }
  return a;
}
class Sc extends Error {
  constructor(s, a, k) {
    super(`${a} (${k} ${k === 1 ? "yritys" : "yritystä"})`), this.url = s, this.reason = a, this.attempts = k, this.name = "LoadError";
  }
  url;
  reason;
  attempts;
}
class Bn extends Error {
  constructor(s, a) {
    super(s), this.retryable = a;
  }
  retryable;
}
const Zd = (u) => u >= 500 || u === 408 || u === 429;
async function Jd(u, s, a) {
  const k = new AbortController(), w = a.idleTimeoutMs ?? 2e4;
  let M = 0, S = !1, E = null;
  const z = () => {
    clearTimeout(M), M = setTimeout(() => {
      S = !0, k.abort(), E?.cancel().catch(() => {
      });
    }, w);
  };
  z();
  const L = w >= 1e3 ? `${Math.round(w / 1e3)} s` : `${w} ms`, H = performance.now();
  try {
    let Y;
    try {
      Y = await (a.fetchImpl ?? fetch)(u, { signal: k.signal });
    } catch (se) {
      throw new Bn(S ? `ei vastausta ${L}` : `verkkovirhe (${String(se)})`, !0);
    }
    if (!Y.ok) throw new Bn(`HTTP ${Y.status}`, Zd(Y.status));
    const Q = Number(Y.headers.get("Content-Length")) || null, ie = a.type ?? Y.headers.get("Content-Type") ?? "application/octet-stream", ee = performance.now() - H;
    if (!Y.body) {
      const se = await Y.arrayBuffer(), Ee = performance.now() - H, te = new Blob([se], { type: ie });
      return a.onProgress?.({ loaded: te.size, total: Q, attempt: s }), a.onDone?.({ attempt: s, headersMs: ee, bodyMs: Ee, blobMs: performance.now() - H, bytes: te.size }), te;
    }
    E = Y.body.getReader();
    const Z = [];
    let I = 0;
    for (; ; ) {
      let se;
      try {
        se = await E.read();
      } catch (Ee) {
        throw new Bn(S ? `lataus pysähtyi ${L}` : `lataus katkesi (${String(Ee)})`, !0);
      }
      if (S) throw new Bn(`lataus pysähtyi ${L}`, !0);
      if (se.done) break;
      z(), Z.push(se.value), I += se.value.byteLength, a.onProgress?.({ loaded: I, total: Q, attempt: s });
    }
    if (Q !== null && I !== Q) throw new Bn(`vajaa tiedosto (${I}/${Q} tavua)`, !0);
    const ze = performance.now() - H, Ce = new Blob(Z, { type: ie });
    return a.onDone?.({ attempt: s, headersMs: ee, bodyMs: ze, blobMs: performance.now() - H, bytes: Ce.size }), Ce;
  } finally {
    clearTimeout(M);
  }
}
async function qd(u, s = {}) {
  const a = Math.max(1, s.attempts ?? 3), k = s.retryDelaysMs ?? [1e3, 3e3], w = s.sleep ?? ((M) => new Promise((S) => setTimeout(S, M)));
  for (let M = 1; ; M++)
    try {
      return await Jd(u, M, s);
    } catch (S) {
      const E = S instanceof Bn ? S.message : String(S), z = S instanceof Bn && S.retryable && M < a;
      if (s.onAttemptFailed?.({ attempt: M, reason: E, willRetry: z }), !z) throw new Sc(u, E, M);
      await w(k[Math.min(M - 1, k.length - 1)] ?? 0);
    }
}
class bd {
  constructor(s = () => ({})) {
    this.options = s;
  }
  options;
  cache = /* @__PURE__ */ new Map();
  load(s) {
    let a = this.cache.get(s);
    return a || (a = qd(s, this.options(s)), this.cache.set(s, a), a.catch(() => {
      this.cache.get(s) === a && this.cache.delete(s);
    })), a;
  }
}
function Eu(u, s) {
  let a = u * 2654435761 + s * 2246822507 | 0;
  return a = Math.imul(a ^ a >>> 16, 2146121005), a = Math.imul(a ^ a >>> 15, 2221713035), a ^= a >>> 16, (a >>> 0) / 4294967296 * 2 - 1;
}
function ep(u, s) {
  const a = [];
  let k = Math.round(0.25 * s);
  for (let w = 0; k < u; w++)
    a.push(k), k += Math.round((0.35 + 0.4 * (Eu(w, 101) * 0.5 + 0.5)) * s);
  return a;
}
function mc(u, s, a, k, w, M) {
  const S = new Float32Array(u), E = Math.round(0.1 * s), z = Math.round(0.03 * s), L = ep(u, s);
  let H = 0, Y = 0;
  for (let Q = 0; Q < u; Q++) {
    const ie = Q - a;
    if (ie < 0) {
      S[Q] = 0;
      continue;
    }
    const ee = 0.03 + 0.12 * (Eu(Math.floor(ie / E), k + 7) * 0.5 + 0.5);
    Y += 0.5 * (Eu(ie, k) - Y);
    let Z = ee * Y;
    for (; H < L.length && L[H] + z <= ie; ) H++;
    const I = H < L.length ? ie - L[H] : -1;
    if (I >= 0 && I < z) {
      const ze = 0.5 - 0.5 * Math.cos(2 * Math.PI * I / z);
      Z += M * ze * Math.sin(2 * Math.PI * w * I / s);
    }
    S[Q] = Z;
  }
  return S;
}
function hc(u = 60, s = 48e3, a = 0) {
  const k = Math.round(u * s), w = Math.round(a * s / 1e3);
  return {
    sampleRate: s,
    shiftSamples: w,
    tausta: mc(k, s, 0, 11, 300, 0.22),
    kitara: mc(k, s, w, 23, 1500, 0.16)
  };
}
function tp(u, s) {
  const a = new ArrayBuffer(44 + u.length * 2), k = new DataView(a), w = (M, S) => {
    for (let E = 0; E < S.length; E++) k.setUint8(M + E, S.charCodeAt(E));
  };
  w(0, "RIFF"), k.setUint32(4, 36 + u.length * 2, !0), w(8, "WAVE"), w(12, "fmt "), k.setUint32(16, 16, !0), k.setUint16(20, 1, !0), k.setUint16(22, 1, !0), k.setUint32(24, s, !0), k.setUint32(28, s * 2, !0), k.setUint16(32, 2, !0), k.setUint16(34, 16, !0), w(36, "data"), k.setUint32(40, u.length * 2, !0);
  for (let M = 0; M < u.length; M++) {
    const S = Math.max(-1, Math.min(1, u[M]));
    k.setInt16(44 + M * 2, Math.round(S * 32767), !0);
  }
  return a;
}
const xt = ["tausta", "kitara"], Ni = { tausta: "tausta", kitara: "kitara" }, Pi = { state: "odottaa", loaded: 0, total: null, attempt: 1, reason: "", url: null }, np = { 1: "keskeytetty", 2: "verkkovirhe", 3: "purkuvirhe", 4: "lähdettä ei voi toistaa" }, _t = "assets/audio/kaksiraitatesti/", Mn = {
  mp3: { tausta: _t + "yksi-sointu-akustinen-tausta.mp3", kitara: _t + "yksi-sointu-akustinen-kitara.mp3" },
  wav: { tausta: _t + "yksi-sointu-akustinen-tausta-0-120s.wav", kitara: _t + "yksi-sointu-akustinen-kitara-0-120s.wav" }
}, rp = {
  aac: {
    120: { tausta: _t + "yksi-sointu-akustinen-tausta-0-120s.m4a", kitara: _t + "yksi-sointu-akustinen-kitara-0-120s.m4a" },
    koko: { tausta: _t + "yksi-sointu-akustinen-tausta-koko.m4a", kitara: _t + "yksi-sointu-akustinen-kitara-koko.m4a" }
  },
  mp3cbr: {
    120: { tausta: _t + "yksi-sointu-akustinen-tausta-0-120s-cbr192.mp3", kitara: _t + "yksi-sointu-akustinen-kitara-0-120s-cbr192.mp3" },
    koko: { tausta: _t + "yksi-sointu-akustinen-tausta-koko-cbr192.mp3", kitara: _t + "yksi-sointu-akustinen-kitara-koko-cbr192.mp3" }
  }
}, lp = (u) => u.endsWith(".m4a") ? "audio/mp4" : u.endsWith(".mp3") ? "audio/mpeg" : "audio/wav", vc = 1e-3, yc = 3e3;
function ip() {
  const u = new URLSearchParams(location.search), s = u.get("lahde"), a = s === "wav" || s === "aac" || s === "mp3cbr" || s === "synteettinen" ? s : "mp3", k = (a === "aac" || a === "mp3cbr") && u.get("pituus") === "koko" ? "koko" : "120", w = Number(u.get("siirto") ?? "0"), M = u.get("tahdistin") === "pois" ? "pois" : u.get("tahdistin") === "ei-korjauksia" ? "ei-korjauksia" : "kaytossa", S = Number(u.get("mittausvali") ?? "5000"), E = u.get("moottori") === "uusi" ? "uusi" : "nykyinen", z = a === "mp3" || a === "wav" && u.get("lataus") === "verkko" ? "verkko" : "muisti", L = Number(u.get("latausaikaraja") ?? "20000");
  return {
    source: a,
    length: k,
    engine: E,
    loading: z,
    loadIdleMs: Number.isFinite(L) && L >= 500 ? L : 2e4,
    // Laaja vakiokoe lisää lopuksi kaksi peräkkäistä kelausta (MK-20261118-03, vaihe C).
    wideScenario: u.get("koe") === "laaja",
    // &mittaus=pois: ei renderöityjä mittauksia eikä WAV-referenssejä (muistinkulutus ilman mittausvälineitä).
    measure: u.get("mittaus") !== "pois",
    syncMode: E === "uusi" ? "uusi-moottori" : M,
    sync: E === "nykyinen" && M !== "pois",
    corrections: E === "nykyinen" && M === "kaytossa",
    offsetMs: a === "synteettinen" && Number.isFinite(w) ? w : 0,
    measureIntervalMs: Number.isFinite(S) && S >= 1e3 ? S : 5e3
  };
}
function Ri(u) {
  if (!Number.isFinite(u) || u < 0) return "0:00";
  const s = Math.floor(u);
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
}
const dl = (u) => u === null ? "?" : (u / 1e6).toFixed(1).replace(".", ",");
function pl(u) {
  const s = u.error;
  return s ? (np[s.code] ?? `virhe ${s.code}`) + (s.message ? `: ${s.message}` : "") : "";
}
const Bt = (u, s = 1) => u == null || !Number.isFinite(u) ? "–" : u.toFixed(s);
function gc(u) {
  if (!u.length) return null;
  const s = [...u].sort((k, w) => k - w), a = Math.floor(s.length / 2);
  return s.length % 2 ? s[a] : (s[a - 1] + s[a]) / 2;
}
function op() {
  const u = J.useMemo(ip, []), s = J.useMemo(() => u.source === "synteettinen" ? hc(60, 48e3, u.offsetMs) : null, [u]), a = J.useMemo(() => {
    if (!s) return null;
    const c = (g) => URL.createObjectURL(new Blob([tp(g, s.sampleRate)], { type: "audio/wav" }));
    return { tausta: c(s.tausta), kitara: c(s.kitara) };
  }, [s]), k = u.source === "wav" ? Mn.wav : u.source === "aac" || u.source === "mp3cbr" ? rp[u.source][u.length] : null, w = k !== null && u.loading === "muisti", M = w && k !== Mn.wav, S = w ? k : Mn.wav, [E, z] = J.useState({ tausta: Pi, kitara: Pi }), [L, H] = J.useState({ tausta: Pi, kitara: Pi }), Y = J.useRef({}), Q = J.useRef({}), ie = J.useRef({}), ee = J.useMemo(() => new bd((c) => {
    const g = c.includes("-kitara") ? "kitara" : "tausta", P = M && c === Mn.wav[g] ? H : z;
    return {
      idleTimeoutMs: u.loadIdleMs,
      type: lp(c),
      onProgress: ({ loaded: B, total: $, attempt: re }) => {
        B !== $ && B - (Q.current[c] ?? 0) < 1 << 20 || (Q.current[c] = B, P((b) => ({ ...b, [g]: { ...b[g], loaded: B, total: $, attempt: re } })));
      },
      onAttemptFailed: ({ attempt: B, reason: $, willRetry: re }) => {
        Q.current[c] = 0, ue("lataus-yritys-epaonnistui", { track: g, url: c, attempt: B, reason: $, willRetry: re });
      },
      onDone: (B) => {
        ie.current[c] = B;
      }
    };
  }), [u, M]), Z = a ?? (w ? { tausta: E.tausta.url ?? void 0, kitara: E.kitara.url ?? void 0 } : Mn[u.source]), I = J.useMemo(() => s && u.offsetMs !== 0 ? hc(60, s.sampleRate, 0) : s, [u, s]), ze = J.useRef(() => Promise.reject(new Error("ei alustettu"))), Ce = J.useRef(() => Promise.reject(new Error("ei alustettu"))), se = J.useRef({}), Ee = J.useMemo(() => I ? { tausta: pc(I.tausta, I.sampleRate), kitara: pc(I.kitara, I.sampleRate) } : { tausta: dc(() => Ce.current("tausta")), kitara: dc(() => Ce.current("kitara")) }, [I]), te = J.useRef(null), me = J.useRef(null), oe = J.useRef(0), Ve = J.useRef(new Rd()), Ae = J.useRef(null), Qe = J.useRef(null), be = J.useRef(new Xd()), ft = J.useRef(!1), Ke = J.useRef(/* @__PURE__ */ new WeakMap()), et = J.useRef(!1), Ye = J.useRef([]), [Ne, he] = J.useState(!1), [j, V] = J.useState(0), [D, m] = J.useState(0), [x, K] = J.useState(""), [ne, ce] = J.useState(""), [ae, ye] = J.useState([]), [fe, ge] = J.useState(null), [tt, Hn] = J.useState([]), [Nr, Qn] = J.useState(""), Ht = J.useRef(0), Kn = J.useRef(!1), ue = (c, g = {}) => be.current.record(c, g);
  function Yn(c, g, P) {
    const B = ee.load(c);
    if (Y.current[c] === B) return B;
    Y.current[c] = B;
    const $ = P === "referenssi" ? H : z, re = performance.now();
    return Q.current[c] = 0, ue("lataus-alku", { track: g, url: c, kind: P }), $((b) => ({ ...b, [g]: { ...b[g], state: "lataa", loaded: 0, reason: "" } })), B.then((b) => {
      const ke = ie.current[c], we = P === "ensisijainen" && w ? URL.createObjectURL(b) : null;
      ue("lataus-valmis", {
        track: g,
        url: c,
        kind: P,
        bytes: b.size,
        kestoMs: Math.round(performance.now() - re),
        attempt: ke?.attempt ?? null,
        otsakkeetMs: ke ? Math.round(ke.headersMs) : null,
        siirtoMs: ke ? Math.round(ke.bodyMs) : null,
        blobMs: ke ? Math.round(ke.blobMs - ke.bodyMs) : null
      }), we && ue("lahde-asetettu", { track: g, bytes: b.size }), $((Xe) => ({ ...Xe, [g]: { ...Xe[g], state: "valmis", loaded: b.size, total: b.size, reason: "", url: we } }));
    }, (b) => {
      const ke = b instanceof Sc ? b.message : String(b);
      ue("lataus-virhe", { track: g, url: c, kind: P, reason: ke }), se.current[c] = !0, $((we) => ({ ...we, [g]: { ...we[g], state: "virhe", reason: ke } }));
    }), B;
  }
  const Xn = (c) => Yn(S[c], c, "ensisijainen"), Gn = (c) => M ? Yn(Mn.wav[c], c, "referenssi") : Xn(c);
  ze.current = Xn, Ce.current = (c) => {
    const g = Mn.wav[c], P = M ? L[c] : E[c];
    return se.current[g] ? Promise.reject(new Error(`Mittausreferenssi (${c}) ei latautunut: ${P.reason}`)) : Gn(c);
  };
  function en() {
    for (const c of xt)
      E[c].state === "virhe" && (se.current[S[c]] = !1, Xn(c).catch(() => {
      })), M && L[c].state === "virhe" && (se.current[Mn.wav[c]] = !1, Gn(c).catch(() => {
      }));
  }
  const nt = !w || xt.every((c) => E[c].state === "valmis"), Zn = xt.filter((c) => E[c].state === "virhe"), Pr = M ? xt.filter((c) => L[c].state === "virhe") : [];
  function hl(c) {
    let g = Ke.current.get(c);
    return g || (g = {
      get currentTime() {
        return c.currentTime;
      },
      set currentTime(P) {
        ue("seek-write", { track: "kitara", from: c.currentTime, to: P, forced: ft.current, readyState: c.readyState, paused: c.paused }), c.currentTime = P;
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
    }, Ke.current.set(c, g)), g;
  }
  function tn(c = !1) {
    const g = te.current, P = me.current;
    !g || !P || !u.sync || !c && !u.corrections || (ft.current = c, Ve.current.align(g, hl(P), c));
  }
  function Rr(c, g) {
    ue("seek-write", { track: "tausta", from: c.currentTime, to: g, forced: "käyttäjä", readyState: c.readyState, paused: c.paused });
    try {
      c.currentTime = g;
    } catch {
    }
  }
  function Jn() {
    const c = Qe.current;
    c && (te.current && c.setLevel(te.current, ic("backing", 100)), me.current && c.setLevel(me.current, ic("guitar", 100)));
  }
  function jt() {
    for (const c of Ye.current) clearTimeout(c);
    Ye.current = [];
  }
  function zt(c) {
    oe.current++, jt(), ue("pause-call", { cause: c }), Qe.current?.observe(), te.current?.pause(), me.current?.pause(), u.engine === "uusi" && te.current && (Ht.current = te.current.currentTime), he(!1);
  }
  function Ft(c) {
    const g = te.current;
    if (!g || !Number.isFinite(c)) return;
    const P = Math.max(0, Math.min(c, Number.isFinite(g.duration) ? g.duration : c));
    if (ue("control", { control: "kelaus", to: P }), u.engine === "uusi") {
      Ht.current = P, V(P), Ne ? nr(P, "kelaus") : oe.current++;
      return;
    }
    Ae.current = P, V(P), Rr(g, P), g.paused || qn("kelaus", oe.current);
  }
  function Dt(c) {
    const g = Ae.current;
    if (g === null || c !== te.current || c.seeking) return;
    const P = Number.isFinite(c.duration) ? Math.min(g, c.duration) : g;
    if (P !== g && (Ae.current = P, V(P)), Math.abs(c.currentTime - P) < vc) return;
    const B = c.seekable;
    for (let $ = 0; $ < B.length; $++)
      if (B.start($) <= P && P <= B.end($)) {
        Rr(c, P);
        return;
      }
  }
  async function vl(c, g) {
    if (et.current || g !== oe.current) return;
    const P = te.current, B = me.current;
    if (!(!P || !B || !ml(P) || !ml(B))) {
      et.current = !0;
      try {
        const $ = [
          { name: "tausta", element: P, reference: Ee.tausta, referenceOffsetSeconds: 0 },
          { name: "kitara", element: B, reference: Ee.kitara, referenceOffsetSeconds: 0 }
        ], re = await Yd(c, $);
        be.current.measurements.push(re), ue("mittaus", { phase: c, mediaDiffMs: re.mediaDiffMs, renderedDiffMs: re.renderedDiffMs, reliable: re.reliable }), ye((b) => [...b, re]);
      } catch ($) {
        ue("mittausvirhe", { phase: c, reason: String($) });
      } finally {
        et.current = !1;
      }
    }
  }
  function qn(c, g) {
    if (jt(), !u.measure) return;
    Ye.current.push(window.setTimeout(() => {
      vl(c, g);
    }, yc));
    const P = () => {
      g === oe.current && (vl("jatkuva", g), Ye.current.push(window.setTimeout(P, u.measureIntervalMs)));
    };
    Ye.current.push(window.setTimeout(P, yc + u.measureIntervalMs));
  }
  function yl(c) {
    if (c !== te.current) return;
    if (u.engine === "uusi") {
      V(c.currentTime);
      return;
    }
    const g = Ae.current;
    if (g === null)
      V(c.currentTime);
    else if (c.readyState >= 1 && !c.seeking && Math.abs(c.currentTime - g) < vc) {
      Ae.current = null, ue("kelaus-valmis", { time: c.currentTime }), tn(!0);
      return;
    }
    c.paused || tn();
  }
  function bn(c, g) {
    return ue("play-call", { track: g, time: c.currentTime, readyState: c.readyState }), c.play().then(
      () => {
        ue("play-result", { track: g, result: "fulfilled", time: c.currentTime });
      },
      (P) => {
        throw ue("play-result", { track: g, result: "rejected", reason: P?.name ?? String(P) }), P;
      }
    );
  }
  async function Tn() {
    const c = te.current, g = me.current;
    if (!c || !g || !Ne && !nt) return;
    if (ue("control", { control: Ne ? "tauko" : "soita" }), Ne) {
      zt("painallus");
      return;
    }
    if (u.engine === "uusi") return nr(Ht.current, Kn.current ? "jatko" : "käynnistys");
    K("");
    for (const [we, Xe] of [[c, "tausta"], [g, "kitara"]])
      we.error && (ue("uusi-lataus", { track: Xe, reason: pl(we) }), we.load());
    const P = c.currentTime > 0.05, B = Ae.current ?? c.currentTime;
    Number.isFinite(c.duration) && B >= c.duration - 0.05 && Ft(0), Dt(c);
    const $ = Qe.current ??= new sc(), re = $.unlock() && [c, g].map((we) => $.route(we)).every(Boolean);
    ce(re ? "" : "Web Audio -kytkentä epäonnistui: " + $.lastError);
    let b = null;
    re && ($.recovering || $.clockState() === "stalled") && (ue("palautus", { reason: $.recovering ? "kesken" : "kello pysähtynyt" }), b = $.recover()), Jn(), tn(!0);
    const ke = ++oe.current;
    if (b) {
      const we = await b;
      if (ue("palautus-tulos", { restored: we, error: we ? "" : $.lastError }), ke !== oe.current) return;
      if (!we) {
        K("Ääni ei palautunut: Web Audio on pysähtynyt. Lataa sivu uudelleen. " + $.lastError);
        return;
      }
    }
    try {
      if (await Promise.all([bn(c, "tausta"), bn(g, "kitara")]), ke !== oe.current) return;
      tn(), he(!0), ue("toisto-alkoi", { tausta: c.currentTime, kitara: g.currentTime }), qn(P ? "jatko" : "käynnistys", ke), re && ($.observe(), window.setTimeout(() => {
        ke === oe.current && ($.state !== "running" ? K(`Ääni ei käynnistynyt (Web Audio: ${$.state}).`) : $.clockState() === "stalled" && (zt("vahti"), K("Ääni ei kulje: Web Audio on pysähtynyt. Paina Soita uudelleen.")));
      }, 800));
    } catch {
      if (ke !== oe.current) return;
      zt("virhe"), K(Nn() || "Toisto epäonnistui.");
    }
  }
  function Nn() {
    const c = [[te.current, "tausta"], [me.current, "kitara"]].filter(([g]) => g?.error).map(([g, P]) => `${P}: ${pl(g)}`);
    return c.length ? `Äänitiedoston lataus epäonnistui (${c.join("; ")}). Paina Soita yrittääksesi uudelleen.` : "";
  }
  function er(c, g) {
    Ne && zt("latausvirhe"), K(`Äänitiedoston lataus epäonnistui (${c}: ${pl(g)}). Paina Soita yrittääksesi uudelleen.`);
  }
  function tr(c, g, P = 5e3) {
    return new Promise((B) => {
      const $ = () => c.readyState >= 1 && !c.seeking && Math.abs(c.currentTime - g) < 0.25;
      if (c.error) {
        B("virhe");
        return;
      }
      if ($()) {
        B("valmis");
        return;
      }
      const re = ["loadedmetadata", "seeked", "canplay", "loadeddata", "error"], b = () => {
        c.error ? we("virhe") : $() && we("valmis");
      }, ke = window.setTimeout(() => we("aikakatkaisu"), P);
      function we(Xe) {
        window.clearTimeout(ke);
        for (const Le of re) c.removeEventListener(Le, b);
        B(Xe);
      }
      for (const Xe of re) c.addEventListener(Xe, b);
    });
  }
  async function nr(c, g) {
    const P = ++oe.current;
    jt(), K("");
    const B = Kn.current;
    Kn.current = !0, ue("tuore-aloitus", { phase: g, target: c, reload: B }), V(c);
    const $ = te.current, re = me.current;
    if (!$ || !re) return;
    const b = Qe.current ??= new sc(), ke = b.unlock() && [$, re].map((Le) => b.route(Le)).every(Boolean);
    ce(ke ? "" : "Web Audio -kytkentä epäonnistui: " + b.lastError);
    let we = null;
    ke && (b.recovering || b.clockState() === "stalled") && (ue("palautus", { reason: b.recovering ? "kesken" : "kello pysähtynyt" }), we = b.recover()), Jn();
    for (const Le of [$, re])
      Le.pause(), (B || Le.error) && Le.load(), c > 0 && (ue("seek-write", { track: Le === $ ? "tausta" : "kitara", from: Le.currentTime, to: c, forced: "aloitus", readyState: Le.readyState, paused: !0 }), Le.currentTime = c);
    if (we) {
      const Le = await we;
      if (ue("palautus-tulos", { restored: Le, error: Le ? "" : b.lastError }), P !== oe.current) return;
      if (!Le) {
        K("Ääni ei palautunut: Web Audio on pysähtynyt. Lataa sivu uudelleen. " + b.lastError);
        return;
      }
    }
    const Xe = await Promise.all([tr($, c), tr(re, c)]);
    if (ue("kelattu", { tausta: Xe[0], kitara: Xe[1], tT: $.currentTime, tK: re.currentTime }), P === oe.current) {
      if (Xe.includes("virhe")) {
        ue("latausvirhe", { target: c, tausta: pl($), kitara: pl(re) }), Ht.current = c, he(!1), K(Nn());
        return;
      }
      if (Xe.includes("aikakatkaisu")) {
        const Le = xt.filter((Me, zi) => Xe[zi] !== "valmis");
        ue("kelaus-aikakatkaisu", { target: c, raidat: Le }), Ht.current = c, he(!1), K(`Kelaus ei valmistunut (${Le.join(", ")}). Paina Soita uudelleen.`);
        return;
      }
      try {
        if (await Promise.all([bn($, "tausta"), bn(re, "kitara")]), P !== oe.current) return;
        he(!0), ue("toisto-alkoi", { tausta: $.currentTime, kitara: re.currentTime }), qn(g, P), ke && (b.observe(), window.setTimeout(() => {
          P === oe.current && (b.state !== "running" ? K(`Ääni ei käynnistynyt (Web Audio: ${b.state}).`) : b.clockState() === "stalled" && (zt("vahti"), K("Ääni ei kulje: Web Audio on pysähtynyt. Paina Soita uudelleen.")));
        }, 800));
      } catch (Le) {
        if (P !== oe.current) return;
        zt("virhe");
        const Me = Le?.name === "NotAllowedError";
        K(Me ? "Toisto vaatii uuden painalluksen. Paina Soita." : Nn() || "Toisto epäonnistui.");
      }
    }
  }
  function Ot(c) {
    const g = te.current?.currentTime ?? 0;
    ue("kuulokuva", { value: c, time: g }), Hn((P) => [...P, { value: c, time: g }]);
  }
  function It() {
    const c = te.current;
    return {
      meta: {
        test: "kaksiraitatesti",
        source: u.source,
        sync: u.sync,
        syncMode: u.syncMode,
        offsetMs: u.offsetMs,
        measureIntervalMs: u.measureIntervalMs,
        engine: u.engine,
        loading: u.loading,
        bundle: new URL(import.meta.url).searchParams.get("v"),
        files: Z,
        userAgent: navigator.userAgent,
        length: u.length,
        wideScenario: u.wideScenario,
        measure: u.measure,
        fileLoads: Object.fromEntries(xt.map((g) => [g, { url: S[g], state: E[g].state, bytes: E[g].loaded, attempt: E[g].attempt, reason: E[g].reason }])),
        referenceLoads: M ? Object.fromEntries(xt.map((g) => [g, { state: L[g].state, bytes: L[g].loaded, reason: L[g].reason }])) : null,
        loadTimings: ie.current,
        navigation: (() => {
          const g = performance.getEntriesByType("navigation")[0];
          return g ? { responseEndMs: Math.round(g.responseEnd), domContentLoadedMs: Math.round(g.domContentLoadedEventEnd) } : null;
        })(),
        audioSession: navigator.audioSession?.type ?? null,
        contextSampleRate: ml(c)?.context.sampleRate ?? null
      },
      seekLatencies: Gd(be.current.events),
      measurements: be.current.measurements,
      events: be.current.events,
      samples: be.current.samples
    };
  }
  function gl() {
    Qn(JSON.stringify(It()));
  }
  const nn = J.useRef(Tn);
  nn.current = Tn;
  const rn = J.useRef(Ft);
  rn.current = Ft;
  const rr = J.useRef(!1), [ln, Lr] = J.useState("");
  async function kl() {
    if (rr.current || Ne || !nt) return;
    rr.current = !0;
    const c = (P) => new Promise((B) => window.setTimeout(B, P)), g = (P) => {
      ue("vakiokoe", { step: P, time: te.current?.currentTime ?? 0 }), Lr(P);
    };
    try {
      g("soita"), await nn.current(), await c(25e3), g("kelaus"), rn.current(u.source === "synteettinen" ? 30 : 60), await c(15e3), g("tauko"), await nn.current(), await c(3e3), g("jatko"), await nn.current(), await c(15e3), u.wideScenario && (g("kaksoiskelaus"), rn.current(u.source === "synteettinen" ? 20 : 30), await c(1e3), rn.current(u.source === "synteettinen" ? 45 : 90), await c(15e3)), g("tauko-loppu"), await nn.current(), g("valmis");
    } finally {
      rr.current = !1;
    }
  }
  const on = J.useRef(It);
  on.current = It, J.useEffect(() => {
    window.kaksiraitatesti = {
      report: () => on.current(),
      // Selaintesteille: peräkkäiset ja keskeneräisen kelauksen aikana tehdyt kelaukset.
      seek: (c) => rn.current(c)
    };
  }, []), J.useEffect(() => {
    if (u.source === "synteettinen") return;
    const c = xt.map((g) => ze.current(g));
    for (const g of c) g.catch(() => {
    });
    M && u.measure && Promise.allSettled(c).then(() => {
      for (const g of xt) Ce.current(g).catch(() => {
      });
    });
  }, [u, M]);
  const lr = J.useRef(!1), [Qt, Li] = J.useState(null);
  J.useEffect(() => {
    if (!nt || lr.current || u.source === "synteettinen") return;
    lr.current = !0;
    const c = Math.round(performance.now());
    ue("soita-kaytossa", { sivustaMs: c }), Li(c);
  }, [nt, u]), J.useEffect(() => {
    const c = [[te.current, "tausta"], [me.current, "kitara"]], g = ["loadstart", "emptied", "loadedmetadata", "canplay", "canplaythrough", "play", "playing", "waiting", "stalled", "seeking", "seeked", "pause", "ended", "error"], P = [];
    for (const [B, $] of c)
      if (B)
        for (const re of g) {
          const b = () => ue(re, {
            track: $,
            time: B.currentTime,
            readyState: B.readyState,
            paused: B.paused,
            ...re === "error" ? { code: B.error?.code ?? null, message: B.error?.message ?? "" } : {}
          });
          B.addEventListener(re, b), P.push(() => B.removeEventListener(re, b));
        }
    return () => P.forEach((B) => B());
  }, []), J.useEffect(() => {
    const c = window.setInterval(() => {
      const P = te.current, B = me.current;
      if (!P || !B) return;
      const $ = ml(P)?.context, re = (B.currentTime - P.currentTime) * 1e3;
      be.current.sample({
        tausta: P.currentTime,
        kitara: B.currentTime,
        mediaDiffMs: re,
        pausedT: P.paused,
        pausedK: B.paused,
        readyT: P.readyState,
        readyK: B.readyState,
        contextState: $?.state ?? null,
        contextTime: $?.currentTime ?? null,
        hidden: document.hidden
      }), ge({ diff: re, tausta: P.currentTime, kitara: B.currentTime });
    }, 500), g = () => {
      ue("visibilitychange", { hidden: document.hidden }), Qe.current?.observe(), document.hidden && zt("sivu-piiloon");
    };
    return document.addEventListener("visibilitychange", g), () => {
      clearInterval(c), document.removeEventListener("visibilitychange", g), oe.current++, jt(), Qe.current?.close();
    };
  }, []);
  const Pn = ae.filter((c) => c.reliable && c.renderedDiffMs !== null), ir = ["käynnistys", "jatko", "kelaus", "jatkuva"].map((c) => {
    const g = Pn.filter(($) => $.phase === c), P = g.map(($) => $.renderedDiffMs), B = g.map(($) => $.mediaDiffMs);
    return {
      phase: c,
      count: g.length,
      renderedMedian: gc(P),
      renderedMaxAbs: P.length ? Math.max(...P.map(Math.abs)) : null,
      mediaMedian: gc(B),
      unreliable: ae.filter(($) => $.phase === c && !$.reliable).length
    };
  }), Rn = u.source === "synteettinen" ? 30 : 60, vt = (c, g = "kaytossa") => `?lahde=${c}${g === "kaytossa" ? "" : "&tahdistin=" + g}`, wl = u.length === "koko" ? "koko kappale" : "0–120 s", ji = u.source === "mp3" ? "MP3" : u.source === "wav" ? `WAV (0–120 s, ${w ? "muistista" : "verkosta"})` : u.source === "aac" ? `AAC 192 kbit/s (${wl}, muistista)` : u.source === "mp3cbr" ? `MP3 CBR 192 kbit/s (${wl}, muistista)` : `Synteettinen (kitara siirretty ${u.offsetMs} ms myöhemmäksi)`;
  return /* @__PURE__ */ R.jsxs("main", { className: "kaksiraita", children: [
    /* @__PURE__ */ R.jsx("h1", { children: "Kahden raidan synkronointitesti" }),
    /* @__PURE__ */ R.jsxs("p", { className: "mode", "data-source": u.source, "data-sync": u.sync ? "on" : "off", "data-sync-mode": u.syncMode, children: [
      "Tila: ",
      /* @__PURE__ */ R.jsx("strong", { children: ji }),
      " · ",
      u.engine === "uusi" ? /* @__PURE__ */ R.jsx("strong", { children: "uusi moottori (korjausehdokas)" }) : /* @__PURE__ */ R.jsxs(R.Fragment, { children: [
        "tahdistin ",
        /* @__PURE__ */ R.jsx("strong", { children: u.syncMode === "kaytossa" ? "käytössä" : u.syncMode === "pois" ? "pois" : "ilman korjauskelauksia" })
      ] })
    ] }),
    /* @__PURE__ */ R.jsxs("p", { className: "links", children: [
      /* @__PURE__ */ R.jsx("a", { href: vt("mp3"), children: "MP3" }),
      " · ",
      /* @__PURE__ */ R.jsx("a", { href: vt("wav"), children: "WAV" }),
      " · ",
      /* @__PURE__ */ R.jsx("a", { href: vt("aac") + "&moottori=uusi", children: "AAC" }),
      " · ",
      /* @__PURE__ */ R.jsx("a", { href: vt("mp3cbr") + "&moottori=uusi", children: "MP3 CBR" }),
      " · ",
      /* @__PURE__ */ R.jsx("a", { href: vt("synteettinen"), children: "Synteettinen" }),
      " · ",
      /* @__PURE__ */ R.jsx("a", { href: vt(u.source), children: "tahdistin käyttöön" }),
      " · ",
      /* @__PURE__ */ R.jsx("a", { href: vt(u.source, "pois"), children: "pois" }),
      " · ",
      /* @__PURE__ */ R.jsx("a", { href: vt(u.source, "ei-korjauksia"), children: "ilman korjauksia" }),
      " · ",
      /* @__PURE__ */ R.jsx("a", { href: `?lahde=${u.source}&moottori=uusi`, children: "uusi moottori" })
    ] }),
    /* @__PURE__ */ R.jsxs("section", { className: "player", "aria-label": "Testisoitin", children: [
      /* @__PURE__ */ R.jsx("button", { type: "button", className: "play", onClick: () => {
        Tn();
      }, disabled: !Ne && !nt, children: Ne ? "■ Tauko" : "▶ Soita" }),
      /* @__PURE__ */ R.jsxs("button", { type: "button", onClick: () => Ft(Rn), disabled: !nt, children: [
        "Siirry kohtaan ",
        Ri(Rn)
      ] }),
      /* @__PURE__ */ R.jsx("button", { type: "button", onClick: () => {
        kl();
      }, disabled: !nt || ln !== "" && ln !== "valmis", children: "Aja vakiokoe (n. 60 s)" }),
      ln && /* @__PURE__ */ R.jsxs("output", { className: "scenario", "data-step": ln, children: [
        " Vakiokoe: ",
        ln
      ] }),
      /* @__PURE__ */ R.jsxs("output", { className: "time", children: [
        Ri(j),
        " / ",
        Ri(D)
      ] }),
      u.source !== "synteettinen" && /* @__PURE__ */ R.jsxs("p", { className: "files", "data-ready": nt ? "kyllä" : "ei", children: [
        w ? "Äänitiedostot" : "Mittausreferenssit (WAV)",
        ":",
        " ",
        xt.map((c, g) => /* @__PURE__ */ R.jsxs("span", { "data-track": c, "data-state": E[c].state, children: [
          g ? " · " : "",
          Ni[c],
          " ",
          E[c].state === "valmis" ? `valmis (${dl(E[c].loaded)} Mt)` : E[c].state === "virhe" ? "virhe" : `${dl(E[c].loaded)} / ${dl(E[c].total)} Mt${E[c].attempt > 1 ? ` (yritys ${E[c].attempt})` : ""}`
        ] }, c)),
        Qt !== null && /* @__PURE__ */ R.jsxs("span", { className: "ready-time", "data-ms": Qt, children: [
          " · Soita käytössä ",
          (Qt / 1e3).toFixed(1).replace(".", ","),
          " s sivun avaamisesta"
        ] })
      ] }),
      M && u.measure && /* @__PURE__ */ R.jsxs("p", { className: "files refs", "data-ready": xt.every((c) => L[c].state === "valmis") ? "kyllä" : "ei", children: [
        "Mittausreferenssit (WAV, vain mittausta varten):",
        " ",
        xt.map((c, g) => /* @__PURE__ */ R.jsxs("span", { "data-track": c, "data-state": L[c].state, children: [
          g ? " · " : "",
          Ni[c],
          " ",
          L[c].state === "valmis" ? "valmis" : L[c].state === "virhe" ? "virhe" : L[c].state === "odottaa" ? "odottaa" : `${dl(L[c].loaded)} / ${dl(L[c].total)} Mt`
        ] }, c))
      ] }),
      Pr.length > 0 && /* @__PURE__ */ R.jsxs("p", { role: "alert", className: "error load-error", children: [
        "Mittausreferenssin lataus epäonnistui: ",
        Pr.map((c) => `${Ni[c]} (${L[c].reason})`).join(", "),
        ".",
        " ",
        "Toisto toimii, mutta mittaukset eivät.",
        " ",
        /* @__PURE__ */ R.jsx("button", { type: "button", onClick: en, children: "Yritä uudelleen" })
      ] }),
      Zn.length > 0 && /* @__PURE__ */ R.jsxs("p", { role: "alert", className: "error load-error", children: [
        w ? "Äänitiedoston" : "Mittausreferenssin",
        " lataus epäonnistui: ",
        Zn.map((c) => `${Ni[c]} (${E[c].reason})`).join(", "),
        ".",
        w ? " Toistoa ei voi aloittaa." : " Toisto toimii, mutta mittaukset eivät.",
        " ",
        /* @__PURE__ */ R.jsx("button", { type: "button", onClick: en, children: "Yritä uudelleen" })
      ] }),
      ne && /* @__PURE__ */ R.jsx("p", { role: "status", children: ne }),
      x && /* @__PURE__ */ R.jsx("p", { role: "alert", className: "error", children: x }),
      /* @__PURE__ */ R.jsx(
        "audio",
        {
          ref: te,
          src: Z.tausta,
          preload: "metadata",
          onLoadedMetadata: (c) => {
            m(c.currentTarget.duration), Dt(c.currentTarget);
          },
          onProgress: (c) => Dt(c.currentTarget),
          onCanPlay: (c) => Dt(c.currentTarget),
          onTimeUpdate: (c) => yl(c.currentTarget),
          onEnded: () => {
            Ae.current = null, jt(), ue("ended", {}), me.current?.pause(), he(!1);
          },
          onPause: (c) => {
            c.currentTarget === te.current && he(!1);
          },
          onError: (c) => er("tausta", c.currentTarget)
        }
      ),
      /* @__PURE__ */ R.jsx(
        "audio",
        {
          ref: me,
          src: Z.kitara,
          preload: "metadata",
          onLoadedMetadata: () => {
            u.engine === "nykyinen" && te.current?.paused && tn(!0);
          },
          onError: (c) => er("kitara", c.currentTarget)
        }
      )
    ] }),
    /* @__PURE__ */ R.jsxs("section", { "aria-label": "Mediakellot", children: [
      /* @__PURE__ */ R.jsx("h2", { children: "Mediaelementtien kellot" }),
      /* @__PURE__ */ R.jsxs("p", { className: "live", children: [
        "Tausta ",
        Bt(fe?.tausta, 3),
        " s · Kitara ",
        Bt(fe?.kitara, 3),
        " s · ",
        /* @__PURE__ */ R.jsxs("strong", { children: [
          "ero ",
          Bt(fe?.diff),
          " ms"
        ] })
      ] }),
      /* @__PURE__ */ R.jsx("p", { className: "hint", children: "Ero on elementtien kellojen ero (kitara − tausta). Se ei ole kuultava kohdistus." })
    ] }),
    /* @__PURE__ */ R.jsxs("section", { "aria-label": "Renderöity kohdistus", children: [
      /* @__PURE__ */ R.jsx("h2", { children: "Renderöity kohdistus (Web Audio -graafi)" }),
      /* @__PURE__ */ R.jsx("p", { className: "hint", children: "Mitataan automaattisesti 3 s Soita-painalluksen ja kelauksen jälkeen ja sen jälkeen 5 s välein. Positiivinen = kitara edellä." }),
      /* @__PURE__ */ R.jsxs("table", { className: "summary", children: [
        /* @__PURE__ */ R.jsx("thead", { children: /* @__PURE__ */ R.jsxs("tr", { children: [
          /* @__PURE__ */ R.jsx("th", { children: "Vaihe" }),
          /* @__PURE__ */ R.jsx("th", { children: "Mittauksia" }),
          /* @__PURE__ */ R.jsx("th", { children: "Renderöity mediaani (ms)" }),
          /* @__PURE__ */ R.jsx("th", { children: "Suurin |ero| (ms)" }),
          /* @__PURE__ */ R.jsx("th", { children: "Mediakellojen mediaani (ms)" }),
          /* @__PURE__ */ R.jsx("th", { children: "Epävarmoja" })
        ] }) }),
        /* @__PURE__ */ R.jsx("tbody", { children: ir.map((c) => /* @__PURE__ */ R.jsxs("tr", { "data-phase": c.phase, children: [
          /* @__PURE__ */ R.jsx("td", { children: c.phase }),
          /* @__PURE__ */ R.jsx("td", { children: c.count }),
          /* @__PURE__ */ R.jsx("td", { children: Bt(c.renderedMedian) }),
          /* @__PURE__ */ R.jsx("td", { children: Bt(c.renderedMaxAbs) }),
          /* @__PURE__ */ R.jsx("td", { children: Bt(c.mediaMedian) }),
          /* @__PURE__ */ R.jsx("td", { children: c.unreliable })
        ] }, c.phase)) })
      ] }),
      /* @__PURE__ */ R.jsx("ol", { className: "measurements", "aria-label": "Mittaukset", children: ae.slice(-12).map((c) => /* @__PURE__ */ R.jsxs("li", { "data-reliable": c.reliable ? "kyllä" : "ei", children: [
        c.phase,
        ": renderöity ",
        Bt(c.renderedDiffMs),
        " ms, mediakellot ",
        Bt(c.mediaDiffMs),
        " ms",
        " ",
        "(korrelaatio T ",
        Bt(c.tracks[0].score, 3),
        " / K ",
        Bt(c.tracks[1].score, 3),
        c.reliable ? "" : ", epävarma" + (c.tracks.find((g) => g.error)?.error ? ": " + c.tracks.find((g) => g.error).error : c.tracks.some((g) => g.probeRms <= 1e-4) ? ": raita hiljaa" : ""),
        ")"
      ] }, c.ms)) })
    ] }),
    /* @__PURE__ */ R.jsxs("section", { "aria-label": "Kuulokuva", children: [
      /* @__PURE__ */ R.jsx("h2", { children: "Kuulokuva" }),
      /* @__PURE__ */ R.jsx("p", { className: "hint", children: "Kirjaa, miltä kuulostaa juuri nyt. Kirjaus tallentuu raporttiin soittimen kohdan kanssa." }),
      /* @__PURE__ */ R.jsx("button", { type: "button", onClick: () => Ot("tahdissa"), children: "Kuulostaa tahdissa" }),
      " ",
      /* @__PURE__ */ R.jsx("button", { type: "button", onClick: () => Ot("epätahdissa"), children: "Kuulostaa epätahdissa" }),
      " ",
      /* @__PURE__ */ R.jsx("button", { type: "button", onClick: () => Ot("epävarma"), children: "En osaa sanoa" }),
      /* @__PURE__ */ R.jsx("ul", { children: tt.map((c, g) => /* @__PURE__ */ R.jsxs("li", { children: [
        Ri(c.time),
        ": ",
        c.value
      ] }, g)) })
    ] }),
    /* @__PURE__ */ R.jsxs("section", { "aria-label": "Raportti", children: [
      /* @__PURE__ */ R.jsx("h2", { children: "Raportti" }),
      /* @__PURE__ */ R.jsx("button", { type: "button", onClick: gl, children: "Valitse raportti" }),
      Nr && /* @__PURE__ */ R.jsx(
        "textarea",
        {
          readOnly: !0,
          rows: 8,
          "aria-label": "Testiraportti",
          value: Nr,
          ref: (c) => {
            c?.focus(), c?.select();
          }
        }
      )
    ] })
  ] });
}
Kd();
const kc = document.getElementById("kaksiraitatesti");
kc && yd.createRoot(kc).render(/* @__PURE__ */ R.jsx(op, {}));
//# sourceMappingURL=app.js.map
