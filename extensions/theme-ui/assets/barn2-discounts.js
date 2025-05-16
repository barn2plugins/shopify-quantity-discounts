function ek(B) {
  return B && B.__esModule && Object.prototype.hasOwnProperty.call(B, "default") ? B.default : B;
}
var cE = { exports: {} }, Xp = {}, fE = { exports: {} }, wt = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var GR;
function tk() {
  if (GR) return wt;
  GR = 1;
  var B = Symbol.for("react.element"), G = Symbol.for("react.portal"), L = Symbol.for("react.fragment"), We = Symbol.for("react.strict_mode"), et = Symbol.for("react.profiler"), Ne = Symbol.for("react.provider"), je = Symbol.for("react.context"), S = Symbol.for("react.forward_ref"), Ie = Symbol.for("react.suspense"), pe = Symbol.for("react.memo"), le = Symbol.for("react.lazy"), Z = Symbol.iterator;
  function $(R) {
    return R === null || typeof R != "object" ? null : (R = Z && R[Z] || R["@@iterator"], typeof R == "function" ? R : null);
  }
  var q = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, Q = Object.assign, ie = {};
  function Ce(R, j, ye) {
    this.props = R, this.context = j, this.refs = ie, this.updater = ye || q;
  }
  Ce.prototype.isReactComponent = {}, Ce.prototype.setState = function(R, j) {
    if (typeof R != "object" && typeof R != "function" && R != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, R, j, "setState");
  }, Ce.prototype.forceUpdate = function(R) {
    this.updater.enqueueForceUpdate(this, R, "forceUpdate");
  };
  function ut() {
  }
  ut.prototype = Ce.prototype;
  function jt(R, j, ye) {
    this.props = R, this.context = j, this.refs = ie, this.updater = ye || q;
  }
  var ot = jt.prototype = new ut();
  ot.constructor = jt, Q(ot, Ce.prototype), ot.isPureReactComponent = !0;
  var $e = Array.isArray, Lt = Object.prototype.hasOwnProperty, ke = { current: null }, dt = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Be(R, j, ye) {
    var Te, Se = {}, Me = null, st = null;
    if (j != null) for (Te in j.ref !== void 0 && (st = j.ref), j.key !== void 0 && (Me = "" + j.key), j) Lt.call(j, Te) && !dt.hasOwnProperty(Te) && (Se[Te] = j[Te]);
    var Ye = arguments.length - 2;
    if (Ye === 1) Se.children = ye;
    else if (1 < Ye) {
      for (var mt = Array(Ye), ct = 0; ct < Ye; ct++) mt[ct] = arguments[ct + 2];
      Se.children = mt;
    }
    if (R && R.defaultProps) for (Te in Ye = R.defaultProps, Ye) Se[Te] === void 0 && (Se[Te] = Ye[Te]);
    return { $$typeof: B, type: R, key: Me, ref: st, props: Se, _owner: ke.current };
  }
  function mn(R, j) {
    return { $$typeof: B, type: R.type, key: j, ref: R.ref, props: R.props, _owner: R._owner };
  }
  function Nt(R) {
    return typeof R == "object" && R !== null && R.$$typeof === B;
  }
  function ln(R) {
    var j = { "=": "=0", ":": "=2" };
    return "$" + R.replace(/[=:]/g, function(ye) {
      return j[ye];
    });
  }
  var Vt = /\/+/g;
  function Et(R, j) {
    return typeof R == "object" && R !== null && R.key != null ? ln("" + R.key) : j.toString(36);
  }
  function Pe(R, j, ye, Te, Se) {
    var Me = typeof R;
    (Me === "undefined" || Me === "boolean") && (R = null);
    var st = !1;
    if (R === null) st = !0;
    else switch (Me) {
      case "string":
      case "number":
        st = !0;
        break;
      case "object":
        switch (R.$$typeof) {
          case B:
          case G:
            st = !0;
        }
    }
    if (st) return st = R, Se = Se(st), R = Te === "" ? "." + Et(st, 0) : Te, $e(Se) ? (ye = "", R != null && (ye = R.replace(Vt, "$&/") + "/"), Pe(Se, j, ye, "", function(ct) {
      return ct;
    })) : Se != null && (Nt(Se) && (Se = mn(Se, ye + (!Se.key || st && st.key === Se.key ? "" : ("" + Se.key).replace(Vt, "$&/") + "/") + R)), j.push(Se)), 1;
    if (st = 0, Te = Te === "" ? "." : Te + ":", $e(R)) for (var Ye = 0; Ye < R.length; Ye++) {
      Me = R[Ye];
      var mt = Te + Et(Me, Ye);
      st += Pe(Me, j, ye, mt, Se);
    }
    else if (mt = $(R), typeof mt == "function") for (R = mt.call(R), Ye = 0; !(Me = R.next()).done; ) Me = Me.value, mt = Te + Et(Me, Ye++), st += Pe(Me, j, ye, mt, Se);
    else if (Me === "object") throw j = String(R), Error("Objects are not valid as a React child (found: " + (j === "[object Object]" ? "object with keys {" + Object.keys(R).join(", ") + "}" : j) + "). If you meant to render a collection of children, use an array instead.");
    return st;
  }
  function Mt(R, j, ye) {
    if (R == null) return R;
    var Te = [], Se = 0;
    return Pe(R, Te, "", "", function(Me) {
      return j.call(ye, Me, Se++);
    }), Te;
  }
  function ht(R) {
    if (R._status === -1) {
      var j = R._result;
      j = j(), j.then(function(ye) {
        (R._status === 0 || R._status === -1) && (R._status = 1, R._result = ye);
      }, function(ye) {
        (R._status === 0 || R._status === -1) && (R._status = 2, R._result = ye);
      }), R._status === -1 && (R._status = 0, R._result = j);
    }
    if (R._status === 1) return R._result.default;
    throw R._result;
  }
  var at = { current: null }, W = { transition: null }, Ee = { ReactCurrentDispatcher: at, ReactCurrentBatchConfig: W, ReactCurrentOwner: ke };
  function F() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return wt.Children = { map: Mt, forEach: function(R, j, ye) {
    Mt(R, function() {
      j.apply(this, arguments);
    }, ye);
  }, count: function(R) {
    var j = 0;
    return Mt(R, function() {
      j++;
    }), j;
  }, toArray: function(R) {
    return Mt(R, function(j) {
      return j;
    }) || [];
  }, only: function(R) {
    if (!Nt(R)) throw Error("React.Children.only expected to receive a single React element child.");
    return R;
  } }, wt.Component = Ce, wt.Fragment = L, wt.Profiler = et, wt.PureComponent = jt, wt.StrictMode = We, wt.Suspense = Ie, wt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ee, wt.act = F, wt.cloneElement = function(R, j, ye) {
    if (R == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + R + ".");
    var Te = Q({}, R.props), Se = R.key, Me = R.ref, st = R._owner;
    if (j != null) {
      if (j.ref !== void 0 && (Me = j.ref, st = ke.current), j.key !== void 0 && (Se = "" + j.key), R.type && R.type.defaultProps) var Ye = R.type.defaultProps;
      for (mt in j) Lt.call(j, mt) && !dt.hasOwnProperty(mt) && (Te[mt] = j[mt] === void 0 && Ye !== void 0 ? Ye[mt] : j[mt]);
    }
    var mt = arguments.length - 2;
    if (mt === 1) Te.children = ye;
    else if (1 < mt) {
      Ye = Array(mt);
      for (var ct = 0; ct < mt; ct++) Ye[ct] = arguments[ct + 2];
      Te.children = Ye;
    }
    return { $$typeof: B, type: R.type, key: Se, ref: Me, props: Te, _owner: st };
  }, wt.createContext = function(R) {
    return R = { $$typeof: je, _currentValue: R, _currentValue2: R, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, R.Provider = { $$typeof: Ne, _context: R }, R.Consumer = R;
  }, wt.createElement = Be, wt.createFactory = function(R) {
    var j = Be.bind(null, R);
    return j.type = R, j;
  }, wt.createRef = function() {
    return { current: null };
  }, wt.forwardRef = function(R) {
    return { $$typeof: S, render: R };
  }, wt.isValidElement = Nt, wt.lazy = function(R) {
    return { $$typeof: le, _payload: { _status: -1, _result: R }, _init: ht };
  }, wt.memo = function(R, j) {
    return { $$typeof: pe, type: R, compare: j === void 0 ? null : j };
  }, wt.startTransition = function(R) {
    var j = W.transition;
    W.transition = {};
    try {
      R();
    } finally {
      W.transition = j;
    }
  }, wt.unstable_act = F, wt.useCallback = function(R, j) {
    return at.current.useCallback(R, j);
  }, wt.useContext = function(R) {
    return at.current.useContext(R);
  }, wt.useDebugValue = function() {
  }, wt.useDeferredValue = function(R) {
    return at.current.useDeferredValue(R);
  }, wt.useEffect = function(R, j) {
    return at.current.useEffect(R, j);
  }, wt.useId = function() {
    return at.current.useId();
  }, wt.useImperativeHandle = function(R, j, ye) {
    return at.current.useImperativeHandle(R, j, ye);
  }, wt.useInsertionEffect = function(R, j) {
    return at.current.useInsertionEffect(R, j);
  }, wt.useLayoutEffect = function(R, j) {
    return at.current.useLayoutEffect(R, j);
  }, wt.useMemo = function(R, j) {
    return at.current.useMemo(R, j);
  }, wt.useReducer = function(R, j, ye) {
    return at.current.useReducer(R, j, ye);
  }, wt.useRef = function(R) {
    return at.current.useRef(R);
  }, wt.useState = function(R) {
    return at.current.useState(R);
  }, wt.useSyncExternalStore = function(R, j, ye) {
    return at.current.useSyncExternalStore(R, j, ye);
  }, wt.useTransition = function() {
    return at.current.useTransition();
  }, wt.version = "18.3.1", wt;
}
var Jp = { exports: {} };
Jp.exports;
var XR;
function nk() {
  return XR || (XR = 1, function(B, G) {
    var L = {};
    /**
     * @license React
     * react.development.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    L.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var We = "18.3.1", et = Symbol.for("react.element"), Ne = Symbol.for("react.portal"), je = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), Ie = Symbol.for("react.profiler"), pe = Symbol.for("react.provider"), le = Symbol.for("react.context"), Z = Symbol.for("react.forward_ref"), $ = Symbol.for("react.suspense"), q = Symbol.for("react.suspense_list"), Q = Symbol.for("react.memo"), ie = Symbol.for("react.lazy"), Ce = Symbol.for("react.offscreen"), ut = Symbol.iterator, jt = "@@iterator";
      function ot(h) {
        if (h === null || typeof h != "object")
          return null;
        var C = ut && h[ut] || h[jt];
        return typeof C == "function" ? C : null;
      }
      var $e = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, Lt = {
        transition: null
      }, ke = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, dt = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, Be = {}, mn = null;
      function Nt(h) {
        mn = h;
      }
      Be.setExtraStackFrame = function(h) {
        mn = h;
      }, Be.getCurrentStack = null, Be.getStackAddendum = function() {
        var h = "";
        mn && (h += mn);
        var C = Be.getCurrentStack;
        return C && (h += C() || ""), h;
      };
      var ln = !1, Vt = !1, Et = !1, Pe = !1, Mt = !1, ht = {
        ReactCurrentDispatcher: $e,
        ReactCurrentBatchConfig: Lt,
        ReactCurrentOwner: dt
      };
      ht.ReactDebugCurrentFrame = Be, ht.ReactCurrentActQueue = ke;
      function at(h) {
        {
          for (var C = arguments.length, M = new Array(C > 1 ? C - 1 : 0), H = 1; H < C; H++)
            M[H - 1] = arguments[H];
          Ee("warn", h, M);
        }
      }
      function W(h) {
        {
          for (var C = arguments.length, M = new Array(C > 1 ? C - 1 : 0), H = 1; H < C; H++)
            M[H - 1] = arguments[H];
          Ee("error", h, M);
        }
      }
      function Ee(h, C, M) {
        {
          var H = ht.ReactDebugCurrentFrame, re = H.getStackAddendum();
          re !== "" && (C += "%s", M = M.concat([re]));
          var be = M.map(function(ve) {
            return String(ve);
          });
          be.unshift("Warning: " + C), Function.prototype.apply.call(console[h], console, be);
        }
      }
      var F = {};
      function R(h, C) {
        {
          var M = h.constructor, H = M && (M.displayName || M.name) || "ReactClass", re = H + "." + C;
          if (F[re])
            return;
          W("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", C, H), F[re] = !0;
        }
      }
      var j = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(h) {
          return !1;
        },
        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function(h, C, M) {
          R(h, "forceUpdate");
        },
        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function(h, C, M, H) {
          R(h, "replaceState");
        },
        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function(h, C, M, H) {
          R(h, "setState");
        }
      }, ye = Object.assign, Te = {};
      Object.freeze(Te);
      function Se(h, C, M) {
        this.props = h, this.context = C, this.refs = Te, this.updater = M || j;
      }
      Se.prototype.isReactComponent = {}, Se.prototype.setState = function(h, C) {
        if (typeof h != "object" && typeof h != "function" && h != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, h, C, "setState");
      }, Se.prototype.forceUpdate = function(h) {
        this.updater.enqueueForceUpdate(this, h, "forceUpdate");
      };
      {
        var Me = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, st = function(h, C) {
          Object.defineProperty(Se.prototype, h, {
            get: function() {
              at("%s(...) is deprecated in plain JavaScript React classes. %s", C[0], C[1]);
            }
          });
        };
        for (var Ye in Me)
          Me.hasOwnProperty(Ye) && st(Ye, Me[Ye]);
      }
      function mt() {
      }
      mt.prototype = Se.prototype;
      function ct(h, C, M) {
        this.props = h, this.context = C, this.refs = Te, this.updater = M || j;
      }
      var sn = ct.prototype = new mt();
      sn.constructor = ct, ye(sn, Se.prototype), sn.isPureReactComponent = !0;
      function qn() {
        var h = {
          current: null
        };
        return Object.seal(h), h;
      }
      var ir = Array.isArray;
      function Ln(h) {
        return ir(h);
      }
      function Cr(h) {
        {
          var C = typeof Symbol == "function" && Symbol.toStringTag, M = C && h[Symbol.toStringTag] || h.constructor.name || "Object";
          return M;
        }
      }
      function Bn(h) {
        try {
          return Nn(h), !1;
        } catch {
          return !0;
        }
      }
      function Nn(h) {
        return "" + h;
      }
      function ca(h) {
        if (Bn(h))
          return W("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Cr(h)), Nn(h);
      }
      function qa(h, C, M) {
        var H = h.displayName;
        if (H)
          return H;
        var re = C.displayName || C.name || "";
        return re !== "" ? M + "(" + re + ")" : M;
      }
      function Dr(h) {
        return h.displayName || "Context";
      }
      function $n(h) {
        if (h == null)
          return null;
        if (typeof h.tag == "number" && W("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof h == "function")
          return h.displayName || h.name || null;
        if (typeof h == "string")
          return h;
        switch (h) {
          case je:
            return "Fragment";
          case Ne:
            return "Portal";
          case Ie:
            return "Profiler";
          case S:
            return "StrictMode";
          case $:
            return "Suspense";
          case q:
            return "SuspenseList";
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case le:
              var C = h;
              return Dr(C) + ".Consumer";
            case pe:
              var M = h;
              return Dr(M._context) + ".Provider";
            case Z:
              return qa(h, h.render, "ForwardRef");
            case Q:
              var H = h.displayName || null;
              return H !== null ? H : $n(h.type) || "Memo";
            case ie: {
              var re = h, be = re._payload, ve = re._init;
              try {
                return $n(ve(be));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var Gn = Object.prototype.hasOwnProperty, Xn = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, Rr, Ga, Mn;
      Mn = {};
      function lr(h) {
        if (Gn.call(h, "ref")) {
          var C = Object.getOwnPropertyDescriptor(h, "ref").get;
          if (C && C.isReactWarning)
            return !1;
        }
        return h.ref !== void 0;
      }
      function Ir(h) {
        if (Gn.call(h, "key")) {
          var C = Object.getOwnPropertyDescriptor(h, "key").get;
          if (C && C.isReactWarning)
            return !1;
        }
        return h.key !== void 0;
      }
      function Li(h, C) {
        var M = function() {
          Rr || (Rr = !0, W("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        M.isReactWarning = !0, Object.defineProperty(h, "key", {
          get: M,
          configurable: !0
        });
      }
      function fa(h, C) {
        var M = function() {
          Ga || (Ga = !0, W("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        M.isReactWarning = !0, Object.defineProperty(h, "ref", {
          get: M,
          configurable: !0
        });
      }
      function ae(h) {
        if (typeof h.ref == "string" && dt.current && h.__self && dt.current.stateNode !== h.__self) {
          var C = $n(dt.current.type);
          Mn[C] || (W('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', C, h.ref), Mn[C] = !0);
        }
      }
      var Fe = function(h, C, M, H, re, be, ve) {
        var qe = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: et,
          // Built-in properties that belong on the element
          type: h,
          key: C,
          ref: M,
          props: ve,
          // Record the component responsible for creating this element.
          _owner: be
        };
        return qe._store = {}, Object.defineProperty(qe._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(qe, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: H
        }), Object.defineProperty(qe, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: re
        }), Object.freeze && (Object.freeze(qe.props), Object.freeze(qe)), qe;
      };
      function ft(h, C, M) {
        var H, re = {}, be = null, ve = null, qe = null, vt = null;
        if (C != null) {
          lr(C) && (ve = C.ref, ae(C)), Ir(C) && (ca(C.key), be = "" + C.key), qe = C.__self === void 0 ? null : C.__self, vt = C.__source === void 0 ? null : C.__source;
          for (H in C)
            Gn.call(C, H) && !Xn.hasOwnProperty(H) && (re[H] = C[H]);
        }
        var Bt = arguments.length - 2;
        if (Bt === 1)
          re.children = M;
        else if (Bt > 1) {
          for (var Xt = Array(Bt), Kt = 0; Kt < Bt; Kt++)
            Xt[Kt] = arguments[Kt + 2];
          Object.freeze && Object.freeze(Xt), re.children = Xt;
        }
        if (h && h.defaultProps) {
          var it = h.defaultProps;
          for (H in it)
            re[H] === void 0 && (re[H] = it[H]);
        }
        if (be || ve) {
          var nn = typeof h == "function" ? h.displayName || h.name || "Unknown" : h;
          be && Li(re, nn), ve && fa(re, nn);
        }
        return Fe(h, be, ve, qe, vt, dt.current, re);
      }
      function Ft(h, C) {
        var M = Fe(h.type, C, h.ref, h._self, h._source, h._owner, h.props);
        return M;
      }
      function cn(h, C, M) {
        if (h == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + h + ".");
        var H, re = ye({}, h.props), be = h.key, ve = h.ref, qe = h._self, vt = h._source, Bt = h._owner;
        if (C != null) {
          lr(C) && (ve = C.ref, Bt = dt.current), Ir(C) && (ca(C.key), be = "" + C.key);
          var Xt;
          h.type && h.type.defaultProps && (Xt = h.type.defaultProps);
          for (H in C)
            Gn.call(C, H) && !Xn.hasOwnProperty(H) && (C[H] === void 0 && Xt !== void 0 ? re[H] = Xt[H] : re[H] = C[H]);
        }
        var Kt = arguments.length - 2;
        if (Kt === 1)
          re.children = M;
        else if (Kt > 1) {
          for (var it = Array(Kt), nn = 0; nn < Kt; nn++)
            it[nn] = arguments[nn + 2];
          re.children = it;
        }
        return Fe(h.type, be, ve, qe, vt, Bt, re);
      }
      function fn(h) {
        return typeof h == "object" && h !== null && h.$$typeof === et;
      }
      var dn = ".", Kn = ":";
      function un(h) {
        var C = /[=:]/g, M = {
          "=": "=0",
          ":": "=2"
        }, H = h.replace(C, function(re) {
          return M[re];
        });
        return "$" + H;
      }
      var qt = !1, Ht = /\/+/g;
      function da(h) {
        return h.replace(Ht, "$&/");
      }
      function xa(h, C) {
        return typeof h == "object" && h !== null && h.key != null ? (ca(h.key), un("" + h.key)) : C.toString(36);
      }
      function ka(h, C, M, H, re) {
        var be = typeof h;
        (be === "undefined" || be === "boolean") && (h = null);
        var ve = !1;
        if (h === null)
          ve = !0;
        else
          switch (be) {
            case "string":
            case "number":
              ve = !0;
              break;
            case "object":
              switch (h.$$typeof) {
                case et:
                case Ne:
                  ve = !0;
              }
          }
        if (ve) {
          var qe = h, vt = re(qe), Bt = H === "" ? dn + xa(qe, 0) : H;
          if (Ln(vt)) {
            var Xt = "";
            Bt != null && (Xt = da(Bt) + "/"), ka(vt, C, Xt, "", function(Kf) {
              return Kf;
            });
          } else vt != null && (fn(vt) && (vt.key && (!qe || qe.key !== vt.key) && ca(vt.key), vt = Ft(
            vt,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            M + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (vt.key && (!qe || qe.key !== vt.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              da("" + vt.key) + "/"
            ) : "") + Bt
          )), C.push(vt));
          return 1;
        }
        var Kt, it, nn = 0, _n = H === "" ? dn : H + Kn;
        if (Ln(h))
          for (var Zl = 0; Zl < h.length; Zl++)
            Kt = h[Zl], it = _n + xa(Kt, Zl), nn += ka(Kt, C, M, it, re);
        else {
          var Go = ot(h);
          if (typeof Go == "function") {
            var Vi = h;
            Go === Vi.entries && (qt || at("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), qt = !0);
            for (var eu = Go.call(Vi), Xo, Xf = 0; !(Xo = eu.next()).done; )
              Kt = Xo.value, it = _n + xa(Kt, Xf++), nn += ka(Kt, C, M, it, re);
          } else if (be === "object") {
            var oc = String(h);
            throw new Error("Objects are not valid as a React child (found: " + (oc === "[object Object]" ? "object with keys {" + Object.keys(h).join(", ") + "}" : oc) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return nn;
      }
      function Ni(h, C, M) {
        if (h == null)
          return h;
        var H = [], re = 0;
        return ka(h, H, "", "", function(be) {
          return C.call(M, be, re++);
        }), H;
      }
      function Il(h) {
        var C = 0;
        return Ni(h, function() {
          C++;
        }), C;
      }
      function Ql(h, C, M) {
        Ni(h, function() {
          C.apply(this, arguments);
        }, M);
      }
      function Mi(h) {
        return Ni(h, function(C) {
          return C;
        }) || [];
      }
      function Wl(h) {
        if (!fn(h))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return h;
      }
      function si(h) {
        var C = {
          $$typeof: le,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: h,
          _currentValue2: h,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null,
          // Add these to use same hidden class in VM as ServerContext
          _defaultValue: null,
          _globalName: null
        };
        C.Provider = {
          $$typeof: pe,
          _context: C
        };
        var M = !1, H = !1, re = !1;
        {
          var be = {
            $$typeof: le,
            _context: C
          };
          Object.defineProperties(be, {
            Provider: {
              get: function() {
                return H || (H = !0, W("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), C.Provider;
              },
              set: function(ve) {
                C.Provider = ve;
              }
            },
            _currentValue: {
              get: function() {
                return C._currentValue;
              },
              set: function(ve) {
                C._currentValue = ve;
              }
            },
            _currentValue2: {
              get: function() {
                return C._currentValue2;
              },
              set: function(ve) {
                C._currentValue2 = ve;
              }
            },
            _threadCount: {
              get: function() {
                return C._threadCount;
              },
              set: function(ve) {
                C._threadCount = ve;
              }
            },
            Consumer: {
              get: function() {
                return M || (M = !0, W("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), C.Consumer;
              }
            },
            displayName: {
              get: function() {
                return C.displayName;
              },
              set: function(ve) {
                re || (at("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", ve), re = !0);
              }
            }
          }), C.Consumer = be;
        }
        return C._currentRenderer = null, C._currentRenderer2 = null, C;
      }
      var pa = -1, ur = 0, va = 1, Qr = 2;
      function ci(h) {
        if (h._status === pa) {
          var C = h._result, M = C();
          if (M.then(function(be) {
            if (h._status === ur || h._status === pa) {
              var ve = h;
              ve._status = va, ve._result = be;
            }
          }, function(be) {
            if (h._status === ur || h._status === pa) {
              var ve = h;
              ve._status = Qr, ve._result = be;
            }
          }), h._status === pa) {
            var H = h;
            H._status = ur, H._result = M;
          }
        }
        if (h._status === va) {
          var re = h._result;
          return re === void 0 && W(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, re), "default" in re || W(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, re), re.default;
        } else
          throw h._result;
      }
      function fi(h) {
        var C = {
          // We use these fields to store the result.
          _status: pa,
          _result: h
        }, M = {
          $$typeof: ie,
          _payload: C,
          _init: ci
        };
        {
          var H, re;
          Object.defineProperties(M, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return H;
              },
              set: function(be) {
                W("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), H = be, Object.defineProperty(M, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return re;
              },
              set: function(be) {
                W("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), re = be, Object.defineProperty(M, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return M;
      }
      function zi(h) {
        h != null && h.$$typeof === Q ? W("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof h != "function" ? W("forwardRef requires a render function but was given %s.", h === null ? "null" : typeof h) : h.length !== 0 && h.length !== 2 && W("forwardRef render functions accept exactly two parameters: props and ref. %s", h.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), h != null && (h.defaultProps != null || h.propTypes != null) && W("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var C = {
          $$typeof: Z,
          render: h
        };
        {
          var M;
          Object.defineProperty(C, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return M;
            },
            set: function(H) {
              M = H, !h.name && !h.displayName && (h.displayName = H);
            }
          });
        }
        return C;
      }
      var T;
      T = Symbol.for("react.module.reference");
      function X(h) {
        return !!(typeof h == "string" || typeof h == "function" || h === je || h === Ie || Mt || h === S || h === $ || h === q || Pe || h === Ce || ln || Vt || Et || typeof h == "object" && h !== null && (h.$$typeof === ie || h.$$typeof === Q || h.$$typeof === pe || h.$$typeof === le || h.$$typeof === Z || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        h.$$typeof === T || h.getModuleId !== void 0));
      }
      function se(h, C) {
        X(h) || W("memo: The first argument must be a component. Instead received: %s", h === null ? "null" : typeof h);
        var M = {
          $$typeof: Q,
          type: h,
          compare: C === void 0 ? null : C
        };
        {
          var H;
          Object.defineProperty(M, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return H;
            },
            set: function(re) {
              H = re, !h.name && !h.displayName && (h.displayName = re);
            }
          });
        }
        return M;
      }
      function fe() {
        var h = $e.current;
        return h === null && W(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), h;
      }
      function yt(h) {
        var C = fe();
        if (h._context !== void 0) {
          var M = h._context;
          M.Consumer === h ? W("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : M.Provider === h && W("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return C.useContext(h);
      }
      function Je(h) {
        var C = fe();
        return C.useState(h);
      }
      function Ct(h, C, M) {
        var H = fe();
        return H.useReducer(h, C, M);
      }
      function pt(h) {
        var C = fe();
        return C.useRef(h);
      }
      function bn(h, C) {
        var M = fe();
        return M.useEffect(h, C);
      }
      function on(h, C) {
        var M = fe();
        return M.useInsertionEffect(h, C);
      }
      function pn(h, C) {
        var M = fe();
        return M.useLayoutEffect(h, C);
      }
      function Tr(h, C) {
        var M = fe();
        return M.useCallback(h, C);
      }
      function Xa(h, C) {
        var M = fe();
        return M.useMemo(h, C);
      }
      function Pt(h, C, M) {
        var H = fe();
        return H.useImperativeHandle(h, C, M);
      }
      function yn(h, C) {
        {
          var M = fe();
          return M.useDebugValue(h, C);
        }
      }
      function nt() {
        var h = fe();
        return h.useTransition();
      }
      function di(h) {
        var C = fe();
        return C.useDeferredValue(h);
      }
      function Ui() {
        var h = fe();
        return h.useId();
      }
      function ac(h, C, M) {
        var H = fe();
        return H.useSyncExternalStore(h, C, M);
      }
      var Ai = 0, ol, Wr, $o, Or, Yo, ic, lc;
      function ji() {
      }
      ji.__reactDisabledLog = !0;
      function sl() {
        {
          if (Ai === 0) {
            ol = console.log, Wr = console.info, $o = console.warn, Or = console.error, Yo = console.group, ic = console.groupCollapsed, lc = console.groupEnd;
            var h = {
              configurable: !0,
              enumerable: !0,
              value: ji,
              writable: !0
            };
            Object.defineProperties(console, {
              info: h,
              log: h,
              warn: h,
              error: h,
              group: h,
              groupCollapsed: h,
              groupEnd: h
            });
          }
          Ai++;
        }
      }
      function qr() {
        {
          if (Ai--, Ai === 0) {
            var h = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: ye({}, h, {
                value: ol
              }),
              info: ye({}, h, {
                value: Wr
              }),
              warn: ye({}, h, {
                value: $o
              }),
              error: ye({}, h, {
                value: Or
              }),
              group: ye({}, h, {
                value: Yo
              }),
              groupCollapsed: ye({}, h, {
                value: ic
              }),
              groupEnd: ye({}, h, {
                value: lc
              })
            });
          }
          Ai < 0 && W("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var pi = ht.ReactCurrentDispatcher, cl;
      function Fu(h, C, M) {
        {
          if (cl === void 0)
            try {
              throw Error();
            } catch (re) {
              var H = re.stack.trim().match(/\n( *(at )?)/);
              cl = H && H[1] || "";
            }
          return `
` + cl + h;
        }
      }
      var Fi = !1, ql;
      {
        var Gl = typeof WeakMap == "function" ? WeakMap : Map;
        ql = new Gl();
      }
      function fl(h, C) {
        if (!h || Fi)
          return "";
        {
          var M = ql.get(h);
          if (M !== void 0)
            return M;
        }
        var H;
        Fi = !0;
        var re = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var be;
        be = pi.current, pi.current = null, sl();
        try {
          if (C) {
            var ve = function() {
              throw Error();
            };
            if (Object.defineProperty(ve.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(ve, []);
              } catch (_n) {
                H = _n;
              }
              Reflect.construct(h, [], ve);
            } else {
              try {
                ve.call();
              } catch (_n) {
                H = _n;
              }
              h.call(ve.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (_n) {
              H = _n;
            }
            h();
          }
        } catch (_n) {
          if (_n && H && typeof _n.stack == "string") {
            for (var qe = _n.stack.split(`
`), vt = H.stack.split(`
`), Bt = qe.length - 1, Xt = vt.length - 1; Bt >= 1 && Xt >= 0 && qe[Bt] !== vt[Xt]; )
              Xt--;
            for (; Bt >= 1 && Xt >= 0; Bt--, Xt--)
              if (qe[Bt] !== vt[Xt]) {
                if (Bt !== 1 || Xt !== 1)
                  do
                    if (Bt--, Xt--, Xt < 0 || qe[Bt] !== vt[Xt]) {
                      var Kt = `
` + qe[Bt].replace(" at new ", " at ");
                      return h.displayName && Kt.includes("<anonymous>") && (Kt = Kt.replace("<anonymous>", h.displayName)), typeof h == "function" && ql.set(h, Kt), Kt;
                    }
                  while (Bt >= 1 && Xt >= 0);
                break;
              }
          }
        } finally {
          Fi = !1, pi.current = be, qr(), Error.prepareStackTrace = re;
        }
        var it = h ? h.displayName || h.name : "", nn = it ? Fu(it) : "";
        return typeof h == "function" && ql.set(h, nn), nn;
      }
      function Io(h, C, M) {
        return fl(h, !1);
      }
      function Qo(h) {
        var C = h.prototype;
        return !!(C && C.isReactComponent);
      }
      function xt(h, C, M) {
        if (h == null)
          return "";
        if (typeof h == "function")
          return fl(h, Qo(h));
        if (typeof h == "string")
          return Fu(h);
        switch (h) {
          case $:
            return Fu("Suspense");
          case q:
            return Fu("SuspenseList");
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case Z:
              return Io(h.render);
            case Q:
              return xt(h.type, C, M);
            case ie: {
              var H = h, re = H._payload, be = H._init;
              try {
                return xt(be(re), C, M);
              } catch {
              }
            }
          }
        return "";
      }
      var Wo = {}, Hu = ht.ReactDebugCurrentFrame;
      function kt(h) {
        if (h) {
          var C = h._owner, M = xt(h.type, h._source, C ? C.type : null);
          Hu.setExtraStackFrame(M);
        } else
          Hu.setExtraStackFrame(null);
      }
      function uc(h, C, M, H, re) {
        {
          var be = Function.call.bind(Gn);
          for (var ve in h)
            if (be(h, ve)) {
              var qe = void 0;
              try {
                if (typeof h[ve] != "function") {
                  var vt = Error((H || "React class") + ": " + M + " type `" + ve + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof h[ve] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw vt.name = "Invariant Violation", vt;
                }
                qe = h[ve](C, ve, H, M, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (Bt) {
                qe = Bt;
              }
              qe && !(qe instanceof Error) && (kt(re), W("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", H || "React class", M, ve, typeof qe), kt(null)), qe instanceof Error && !(qe.message in Wo) && (Wo[qe.message] = !0, kt(re), W("Failed %s type: %s", M, qe.message), kt(null));
            }
        }
      }
      function vi(h) {
        if (h) {
          var C = h._owner, M = xt(h.type, h._source, C ? C.type : null);
          Nt(M);
        } else
          Nt(null);
      }
      var Ke;
      Ke = !1;
      function Xl() {
        if (dt.current) {
          var h = $n(dt.current.type);
          if (h)
            return `

Check the render method of \`` + h + "`.";
        }
        return "";
      }
      function Jn(h) {
        if (h !== void 0) {
          var C = h.fileName.replace(/^.*[\\\/]/, ""), M = h.lineNumber;
          return `

Check your code at ` + C + ":" + M + ".";
        }
        return "";
      }
      function Gr(h) {
        return h != null ? Jn(h.__source) : "";
      }
      var Lr = {};
      function hi(h) {
        var C = Xl();
        if (!C) {
          var M = typeof h == "string" ? h : h.displayName || h.name;
          M && (C = `

Check the top-level render call using <` + M + ">.");
        }
        return C;
      }
      function Cn(h, C) {
        if (!(!h._store || h._store.validated || h.key != null)) {
          h._store.validated = !0;
          var M = hi(C);
          if (!Lr[M]) {
            Lr[M] = !0;
            var H = "";
            h && h._owner && h._owner !== dt.current && (H = " It was passed a child from " + $n(h._owner.type) + "."), vi(h), W('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', M, H), vi(null);
          }
        }
      }
      function Gt(h, C) {
        if (typeof h == "object") {
          if (Ln(h))
            for (var M = 0; M < h.length; M++) {
              var H = h[M];
              fn(H) && Cn(H, C);
            }
          else if (fn(h))
            h._store && (h._store.validated = !0);
          else if (h) {
            var re = ot(h);
            if (typeof re == "function" && re !== h.entries)
              for (var be = re.call(h), ve; !(ve = be.next()).done; )
                fn(ve.value) && Cn(ve.value, C);
          }
        }
      }
      function Ka(h) {
        {
          var C = h.type;
          if (C == null || typeof C == "string")
            return;
          var M;
          if (typeof C == "function")
            M = C.propTypes;
          else if (typeof C == "object" && (C.$$typeof === Z || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          C.$$typeof === Q))
            M = C.propTypes;
          else
            return;
          if (M) {
            var H = $n(C);
            uc(M, h.props, "prop", H, h);
          } else if (C.PropTypes !== void 0 && !Ke) {
            Ke = !0;
            var re = $n(C);
            W("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", re || "Unknown");
          }
          typeof C.getDefaultProps == "function" && !C.getDefaultProps.isReactClassApproved && W("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Da(h) {
        {
          for (var C = Object.keys(h.props), M = 0; M < C.length; M++) {
            var H = C[M];
            if (H !== "children" && H !== "key") {
              vi(h), W("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", H), vi(null);
              break;
            }
          }
          h.ref !== null && (vi(h), W("Invalid attribute `ref` supplied to `React.Fragment`."), vi(null));
        }
      }
      function br(h, C, M) {
        var H = X(h);
        if (!H) {
          var re = "";
          (h === void 0 || typeof h == "object" && h !== null && Object.keys(h).length === 0) && (re += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var be = Gr(C);
          be ? re += be : re += Xl();
          var ve;
          h === null ? ve = "null" : Ln(h) ? ve = "array" : h !== void 0 && h.$$typeof === et ? (ve = "<" + ($n(h.type) || "Unknown") + " />", re = " Did you accidentally export a JSX literal instead of a component?") : ve = typeof h, W("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ve, re);
        }
        var qe = ft.apply(this, arguments);
        if (qe == null)
          return qe;
        if (H)
          for (var vt = 2; vt < arguments.length; vt++)
            Gt(arguments[vt], h);
        return h === je ? Da(qe) : Ka(qe), qe;
      }
      var Nr = !1;
      function Gf(h) {
        var C = br.bind(null, h);
        return C.type = h, Nr || (Nr = !0, at("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(C, "type", {
          enumerable: !1,
          get: function() {
            return at("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: h
            }), h;
          }
        }), C;
      }
      function Pu(h, C, M) {
        for (var H = cn.apply(this, arguments), re = 2; re < arguments.length; re++)
          Gt(arguments[re], H.type);
        return Ka(H), H;
      }
      function Kl(h, C) {
        var M = Lt.transition;
        Lt.transition = {};
        var H = Lt.transition;
        Lt.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          h();
        } finally {
          if (Lt.transition = M, M === null && H._updatedFibers) {
            var re = H._updatedFibers.size;
            re > 10 && at("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), H._updatedFibers.clear();
          }
        }
      }
      var Vu = !1, Bu = null;
      function Jl(h) {
        if (Bu === null)
          try {
            var C = ("require" + Math.random()).slice(0, 7), M = B && B[C];
            Bu = M.call(B, "timers").setImmediate;
          } catch {
            Bu = function(re) {
              Vu === !1 && (Vu = !0, typeof MessageChannel > "u" && W("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var be = new MessageChannel();
              be.port1.onmessage = re, be.port2.postMessage(void 0);
            };
          }
        return Bu(h);
      }
      var Oa = 0, La = !1;
      function dl(h) {
        {
          var C = Oa;
          Oa++, ke.current === null && (ke.current = []);
          var M = ke.isBatchingLegacy, H;
          try {
            if (ke.isBatchingLegacy = !0, H = h(), !M && ke.didScheduleLegacyUpdate) {
              var re = ke.current;
              re !== null && (ke.didScheduleLegacyUpdate = !1, Pi(re));
            }
          } catch (it) {
            throw Hi(C), it;
          } finally {
            ke.isBatchingLegacy = M;
          }
          if (H !== null && typeof H == "object" && typeof H.then == "function") {
            var be = H, ve = !1, qe = {
              then: function(it, nn) {
                ve = !0, be.then(function(_n) {
                  Hi(C), Oa === 0 ? $u(_n, it, nn) : it(_n);
                }, function(_n) {
                  Hi(C), nn(_n);
                });
              }
            };
            return !La && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              ve || (La = !0, W("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), qe;
          } else {
            var vt = H;
            if (Hi(C), Oa === 0) {
              var Bt = ke.current;
              Bt !== null && (Pi(Bt), ke.current = null);
              var Xt = {
                then: function(it, nn) {
                  ke.current === null ? (ke.current = [], $u(vt, it, nn)) : it(vt);
                }
              };
              return Xt;
            } else {
              var Kt = {
                then: function(it, nn) {
                  it(vt);
                }
              };
              return Kt;
            }
          }
        }
      }
      function Hi(h) {
        h !== Oa - 1 && W("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Oa = h;
      }
      function $u(h, C, M) {
        {
          var H = ke.current;
          if (H !== null)
            try {
              Pi(H), Jl(function() {
                H.length === 0 ? (ke.current = null, C(h)) : $u(h, C, M);
              });
            } catch (re) {
              M(re);
            }
          else
            C(h);
        }
      }
      var pl = !1;
      function Pi(h) {
        if (!pl) {
          pl = !0;
          var C = 0;
          try {
            for (; C < h.length; C++) {
              var M = h[C];
              do
                M = M(!0);
              while (M !== null);
            }
            h.length = 0;
          } catch (H) {
            throw h = h.slice(C + 1), H;
          } finally {
            pl = !1;
          }
        }
      }
      var Yu = br, qo = Pu, Na = Gf, Iu = {
        map: Ni,
        forEach: Ql,
        count: Il,
        toArray: Mi,
        only: Wl
      };
      G.Children = Iu, G.Component = Se, G.Fragment = je, G.Profiler = Ie, G.PureComponent = ct, G.StrictMode = S, G.Suspense = $, G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ht, G.act = dl, G.cloneElement = qo, G.createContext = si, G.createElement = Yu, G.createFactory = Na, G.createRef = qn, G.forwardRef = zi, G.isValidElement = fn, G.lazy = fi, G.memo = se, G.startTransition = Kl, G.unstable_act = dl, G.useCallback = Tr, G.useContext = yt, G.useDebugValue = yn, G.useDeferredValue = di, G.useEffect = bn, G.useId = Ui, G.useImperativeHandle = Pt, G.useInsertionEffect = on, G.useLayoutEffect = pn, G.useMemo = Xa, G.useReducer = Ct, G.useRef = pt, G.useState = Je, G.useSyncExternalStore = ac, G.useTransition = nt, G.version = We, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Jp, Jp.exports)), Jp.exports;
}
var rk = {};
rk.NODE_ENV === "production" ? fE.exports = tk() : fE.exports = nk();
var Wt = fE.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var KR;
function ak() {
  if (KR) return Xp;
  KR = 1;
  var B = Wt, G = Symbol.for("react.element"), L = Symbol.for("react.fragment"), We = Object.prototype.hasOwnProperty, et = B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Ne = { key: !0, ref: !0, __self: !0, __source: !0 };
  function je(S, Ie, pe) {
    var le, Z = {}, $ = null, q = null;
    pe !== void 0 && ($ = "" + pe), Ie.key !== void 0 && ($ = "" + Ie.key), Ie.ref !== void 0 && (q = Ie.ref);
    for (le in Ie) We.call(Ie, le) && !Ne.hasOwnProperty(le) && (Z[le] = Ie[le]);
    if (S && S.defaultProps) for (le in Ie = S.defaultProps, Ie) Z[le] === void 0 && (Z[le] = Ie[le]);
    return { $$typeof: G, type: S, key: $, ref: q, props: Z, _owner: et.current };
  }
  return Xp.Fragment = L, Xp.jsx = je, Xp.jsxs = je, Xp;
}
var Kp = {}, JR;
function ik() {
  if (JR) return Kp;
  JR = 1;
  var B = {};
  /**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  return B.NODE_ENV !== "production" && function() {
    var G = Wt, L = Symbol.for("react.element"), We = Symbol.for("react.portal"), et = Symbol.for("react.fragment"), Ne = Symbol.for("react.strict_mode"), je = Symbol.for("react.profiler"), S = Symbol.for("react.provider"), Ie = Symbol.for("react.context"), pe = Symbol.for("react.forward_ref"), le = Symbol.for("react.suspense"), Z = Symbol.for("react.suspense_list"), $ = Symbol.for("react.memo"), q = Symbol.for("react.lazy"), Q = Symbol.for("react.offscreen"), ie = Symbol.iterator, Ce = "@@iterator";
    function ut(T) {
      if (T === null || typeof T != "object")
        return null;
      var X = ie && T[ie] || T[Ce];
      return typeof X == "function" ? X : null;
    }
    var jt = G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function ot(T) {
      {
        for (var X = arguments.length, se = new Array(X > 1 ? X - 1 : 0), fe = 1; fe < X; fe++)
          se[fe - 1] = arguments[fe];
        $e("error", T, se);
      }
    }
    function $e(T, X, se) {
      {
        var fe = jt.ReactDebugCurrentFrame, yt = fe.getStackAddendum();
        yt !== "" && (X += "%s", se = se.concat([yt]));
        var Je = se.map(function(Ct) {
          return String(Ct);
        });
        Je.unshift("Warning: " + X), Function.prototype.apply.call(console[T], console, Je);
      }
    }
    var Lt = !1, ke = !1, dt = !1, Be = !1, mn = !1, Nt;
    Nt = Symbol.for("react.module.reference");
    function ln(T) {
      return !!(typeof T == "string" || typeof T == "function" || T === et || T === je || mn || T === Ne || T === le || T === Z || Be || T === Q || Lt || ke || dt || typeof T == "object" && T !== null && (T.$$typeof === q || T.$$typeof === $ || T.$$typeof === S || T.$$typeof === Ie || T.$$typeof === pe || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      T.$$typeof === Nt || T.getModuleId !== void 0));
    }
    function Vt(T, X, se) {
      var fe = T.displayName;
      if (fe)
        return fe;
      var yt = X.displayName || X.name || "";
      return yt !== "" ? se + "(" + yt + ")" : se;
    }
    function Et(T) {
      return T.displayName || "Context";
    }
    function Pe(T) {
      if (T == null)
        return null;
      if (typeof T.tag == "number" && ot("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof T == "function")
        return T.displayName || T.name || null;
      if (typeof T == "string")
        return T;
      switch (T) {
        case et:
          return "Fragment";
        case We:
          return "Portal";
        case je:
          return "Profiler";
        case Ne:
          return "StrictMode";
        case le:
          return "Suspense";
        case Z:
          return "SuspenseList";
      }
      if (typeof T == "object")
        switch (T.$$typeof) {
          case Ie:
            var X = T;
            return Et(X) + ".Consumer";
          case S:
            var se = T;
            return Et(se._context) + ".Provider";
          case pe:
            return Vt(T, T.render, "ForwardRef");
          case $:
            var fe = T.displayName || null;
            return fe !== null ? fe : Pe(T.type) || "Memo";
          case q: {
            var yt = T, Je = yt._payload, Ct = yt._init;
            try {
              return Pe(Ct(Je));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Mt = Object.assign, ht = 0, at, W, Ee, F, R, j, ye;
    function Te() {
    }
    Te.__reactDisabledLog = !0;
    function Se() {
      {
        if (ht === 0) {
          at = console.log, W = console.info, Ee = console.warn, F = console.error, R = console.group, j = console.groupCollapsed, ye = console.groupEnd;
          var T = {
            configurable: !0,
            enumerable: !0,
            value: Te,
            writable: !0
          };
          Object.defineProperties(console, {
            info: T,
            log: T,
            warn: T,
            error: T,
            group: T,
            groupCollapsed: T,
            groupEnd: T
          });
        }
        ht++;
      }
    }
    function Me() {
      {
        if (ht--, ht === 0) {
          var T = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Mt({}, T, {
              value: at
            }),
            info: Mt({}, T, {
              value: W
            }),
            warn: Mt({}, T, {
              value: Ee
            }),
            error: Mt({}, T, {
              value: F
            }),
            group: Mt({}, T, {
              value: R
            }),
            groupCollapsed: Mt({}, T, {
              value: j
            }),
            groupEnd: Mt({}, T, {
              value: ye
            })
          });
        }
        ht < 0 && ot("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var st = jt.ReactCurrentDispatcher, Ye;
    function mt(T, X, se) {
      {
        if (Ye === void 0)
          try {
            throw Error();
          } catch (yt) {
            var fe = yt.stack.trim().match(/\n( *(at )?)/);
            Ye = fe && fe[1] || "";
          }
        return `
` + Ye + T;
      }
    }
    var ct = !1, sn;
    {
      var qn = typeof WeakMap == "function" ? WeakMap : Map;
      sn = new qn();
    }
    function ir(T, X) {
      if (!T || ct)
        return "";
      {
        var se = sn.get(T);
        if (se !== void 0)
          return se;
      }
      var fe;
      ct = !0;
      var yt = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Je;
      Je = st.current, st.current = null, Se();
      try {
        if (X) {
          var Ct = function() {
            throw Error();
          };
          if (Object.defineProperty(Ct.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Ct, []);
            } catch (yn) {
              fe = yn;
            }
            Reflect.construct(T, [], Ct);
          } else {
            try {
              Ct.call();
            } catch (yn) {
              fe = yn;
            }
            T.call(Ct.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (yn) {
            fe = yn;
          }
          T();
        }
      } catch (yn) {
        if (yn && fe && typeof yn.stack == "string") {
          for (var pt = yn.stack.split(`
`), bn = fe.stack.split(`
`), on = pt.length - 1, pn = bn.length - 1; on >= 1 && pn >= 0 && pt[on] !== bn[pn]; )
            pn--;
          for (; on >= 1 && pn >= 0; on--, pn--)
            if (pt[on] !== bn[pn]) {
              if (on !== 1 || pn !== 1)
                do
                  if (on--, pn--, pn < 0 || pt[on] !== bn[pn]) {
                    var Tr = `
` + pt[on].replace(" at new ", " at ");
                    return T.displayName && Tr.includes("<anonymous>") && (Tr = Tr.replace("<anonymous>", T.displayName)), typeof T == "function" && sn.set(T, Tr), Tr;
                  }
                while (on >= 1 && pn >= 0);
              break;
            }
        }
      } finally {
        ct = !1, st.current = Je, Me(), Error.prepareStackTrace = yt;
      }
      var Xa = T ? T.displayName || T.name : "", Pt = Xa ? mt(Xa) : "";
      return typeof T == "function" && sn.set(T, Pt), Pt;
    }
    function Ln(T, X, se) {
      return ir(T, !1);
    }
    function Cr(T) {
      var X = T.prototype;
      return !!(X && X.isReactComponent);
    }
    function Bn(T, X, se) {
      if (T == null)
        return "";
      if (typeof T == "function")
        return ir(T, Cr(T));
      if (typeof T == "string")
        return mt(T);
      switch (T) {
        case le:
          return mt("Suspense");
        case Z:
          return mt("SuspenseList");
      }
      if (typeof T == "object")
        switch (T.$$typeof) {
          case pe:
            return Ln(T.render);
          case $:
            return Bn(T.type, X, se);
          case q: {
            var fe = T, yt = fe._payload, Je = fe._init;
            try {
              return Bn(Je(yt), X, se);
            } catch {
            }
          }
        }
      return "";
    }
    var Nn = Object.prototype.hasOwnProperty, ca = {}, qa = jt.ReactDebugCurrentFrame;
    function Dr(T) {
      if (T) {
        var X = T._owner, se = Bn(T.type, T._source, X ? X.type : null);
        qa.setExtraStackFrame(se);
      } else
        qa.setExtraStackFrame(null);
    }
    function $n(T, X, se, fe, yt) {
      {
        var Je = Function.call.bind(Nn);
        for (var Ct in T)
          if (Je(T, Ct)) {
            var pt = void 0;
            try {
              if (typeof T[Ct] != "function") {
                var bn = Error((fe || "React class") + ": " + se + " type `" + Ct + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof T[Ct] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw bn.name = "Invariant Violation", bn;
              }
              pt = T[Ct](X, Ct, fe, se, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (on) {
              pt = on;
            }
            pt && !(pt instanceof Error) && (Dr(yt), ot("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", fe || "React class", se, Ct, typeof pt), Dr(null)), pt instanceof Error && !(pt.message in ca) && (ca[pt.message] = !0, Dr(yt), ot("Failed %s type: %s", se, pt.message), Dr(null));
          }
      }
    }
    var Gn = Array.isArray;
    function Xn(T) {
      return Gn(T);
    }
    function Rr(T) {
      {
        var X = typeof Symbol == "function" && Symbol.toStringTag, se = X && T[Symbol.toStringTag] || T.constructor.name || "Object";
        return se;
      }
    }
    function Ga(T) {
      try {
        return Mn(T), !1;
      } catch {
        return !0;
      }
    }
    function Mn(T) {
      return "" + T;
    }
    function lr(T) {
      if (Ga(T))
        return ot("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Rr(T)), Mn(T);
    }
    var Ir = jt.ReactCurrentOwner, Li = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, fa, ae;
    function Fe(T) {
      if (Nn.call(T, "ref")) {
        var X = Object.getOwnPropertyDescriptor(T, "ref").get;
        if (X && X.isReactWarning)
          return !1;
      }
      return T.ref !== void 0;
    }
    function ft(T) {
      if (Nn.call(T, "key")) {
        var X = Object.getOwnPropertyDescriptor(T, "key").get;
        if (X && X.isReactWarning)
          return !1;
      }
      return T.key !== void 0;
    }
    function Ft(T, X) {
      typeof T.ref == "string" && Ir.current;
    }
    function cn(T, X) {
      {
        var se = function() {
          fa || (fa = !0, ot("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", X));
        };
        se.isReactWarning = !0, Object.defineProperty(T, "key", {
          get: se,
          configurable: !0
        });
      }
    }
    function fn(T, X) {
      {
        var se = function() {
          ae || (ae = !0, ot("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", X));
        };
        se.isReactWarning = !0, Object.defineProperty(T, "ref", {
          get: se,
          configurable: !0
        });
      }
    }
    var dn = function(T, X, se, fe, yt, Je, Ct) {
      var pt = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: L,
        // Built-in properties that belong on the element
        type: T,
        key: X,
        ref: se,
        props: Ct,
        // Record the component responsible for creating this element.
        _owner: Je
      };
      return pt._store = {}, Object.defineProperty(pt._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(pt, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: fe
      }), Object.defineProperty(pt, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: yt
      }), Object.freeze && (Object.freeze(pt.props), Object.freeze(pt)), pt;
    };
    function Kn(T, X, se, fe, yt) {
      {
        var Je, Ct = {}, pt = null, bn = null;
        se !== void 0 && (lr(se), pt = "" + se), ft(X) && (lr(X.key), pt = "" + X.key), Fe(X) && (bn = X.ref, Ft(X, yt));
        for (Je in X)
          Nn.call(X, Je) && !Li.hasOwnProperty(Je) && (Ct[Je] = X[Je]);
        if (T && T.defaultProps) {
          var on = T.defaultProps;
          for (Je in on)
            Ct[Je] === void 0 && (Ct[Je] = on[Je]);
        }
        if (pt || bn) {
          var pn = typeof T == "function" ? T.displayName || T.name || "Unknown" : T;
          pt && cn(Ct, pn), bn && fn(Ct, pn);
        }
        return dn(T, pt, bn, yt, fe, Ir.current, Ct);
      }
    }
    var un = jt.ReactCurrentOwner, qt = jt.ReactDebugCurrentFrame;
    function Ht(T) {
      if (T) {
        var X = T._owner, se = Bn(T.type, T._source, X ? X.type : null);
        qt.setExtraStackFrame(se);
      } else
        qt.setExtraStackFrame(null);
    }
    var da;
    da = !1;
    function xa(T) {
      return typeof T == "object" && T !== null && T.$$typeof === L;
    }
    function ka() {
      {
        if (un.current) {
          var T = Pe(un.current.type);
          if (T)
            return `

Check the render method of \`` + T + "`.";
        }
        return "";
      }
    }
    function Ni(T) {
      return "";
    }
    var Il = {};
    function Ql(T) {
      {
        var X = ka();
        if (!X) {
          var se = typeof T == "string" ? T : T.displayName || T.name;
          se && (X = `

Check the top-level render call using <` + se + ">.");
        }
        return X;
      }
    }
    function Mi(T, X) {
      {
        if (!T._store || T._store.validated || T.key != null)
          return;
        T._store.validated = !0;
        var se = Ql(X);
        if (Il[se])
          return;
        Il[se] = !0;
        var fe = "";
        T && T._owner && T._owner !== un.current && (fe = " It was passed a child from " + Pe(T._owner.type) + "."), Ht(T), ot('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', se, fe), Ht(null);
      }
    }
    function Wl(T, X) {
      {
        if (typeof T != "object")
          return;
        if (Xn(T))
          for (var se = 0; se < T.length; se++) {
            var fe = T[se];
            xa(fe) && Mi(fe, X);
          }
        else if (xa(T))
          T._store && (T._store.validated = !0);
        else if (T) {
          var yt = ut(T);
          if (typeof yt == "function" && yt !== T.entries)
            for (var Je = yt.call(T), Ct; !(Ct = Je.next()).done; )
              xa(Ct.value) && Mi(Ct.value, X);
        }
      }
    }
    function si(T) {
      {
        var X = T.type;
        if (X == null || typeof X == "string")
          return;
        var se;
        if (typeof X == "function")
          se = X.propTypes;
        else if (typeof X == "object" && (X.$$typeof === pe || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        X.$$typeof === $))
          se = X.propTypes;
        else
          return;
        if (se) {
          var fe = Pe(X);
          $n(se, T.props, "prop", fe, T);
        } else if (X.PropTypes !== void 0 && !da) {
          da = !0;
          var yt = Pe(X);
          ot("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", yt || "Unknown");
        }
        typeof X.getDefaultProps == "function" && !X.getDefaultProps.isReactClassApproved && ot("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function pa(T) {
      {
        for (var X = Object.keys(T.props), se = 0; se < X.length; se++) {
          var fe = X[se];
          if (fe !== "children" && fe !== "key") {
            Ht(T), ot("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", fe), Ht(null);
            break;
          }
        }
        T.ref !== null && (Ht(T), ot("Invalid attribute `ref` supplied to `React.Fragment`."), Ht(null));
      }
    }
    var ur = {};
    function va(T, X, se, fe, yt, Je) {
      {
        var Ct = ln(T);
        if (!Ct) {
          var pt = "";
          (T === void 0 || typeof T == "object" && T !== null && Object.keys(T).length === 0) && (pt += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var bn = Ni();
          bn ? pt += bn : pt += ka();
          var on;
          T === null ? on = "null" : Xn(T) ? on = "array" : T !== void 0 && T.$$typeof === L ? (on = "<" + (Pe(T.type) || "Unknown") + " />", pt = " Did you accidentally export a JSX literal instead of a component?") : on = typeof T, ot("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", on, pt);
        }
        var pn = Kn(T, X, se, yt, Je);
        if (pn == null)
          return pn;
        if (Ct) {
          var Tr = X.children;
          if (Tr !== void 0)
            if (fe)
              if (Xn(Tr)) {
                for (var Xa = 0; Xa < Tr.length; Xa++)
                  Wl(Tr[Xa], T);
                Object.freeze && Object.freeze(Tr);
              } else
                ot("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Wl(Tr, T);
        }
        if (Nn.call(X, "key")) {
          var Pt = Pe(T), yn = Object.keys(X).filter(function(Ui) {
            return Ui !== "key";
          }), nt = yn.length > 0 ? "{key: someKey, " + yn.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!ur[Pt + nt]) {
            var di = yn.length > 0 ? "{" + yn.join(": ..., ") + ": ...}" : "{}";
            ot(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, nt, Pt, di, Pt), ur[Pt + nt] = !0;
          }
        }
        return T === et ? pa(pn) : si(pn), pn;
      }
    }
    function Qr(T, X, se) {
      return va(T, X, se, !0);
    }
    function ci(T, X, se) {
      return va(T, X, se, !1);
    }
    var fi = ci, zi = Qr;
    Kp.Fragment = et, Kp.jsx = fi, Kp.jsxs = zi;
  }(), Kp;
}
var lk = {};
lk.NODE_ENV === "production" ? cE.exports = ak() : cE.exports = ik();
var He = cE.exports, dE = { exports: {} }, Qa = {}, Bm = { exports: {} }, oE = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ZR;
function uk() {
  return ZR || (ZR = 1, function(B) {
    function G(W, Ee) {
      var F = W.length;
      W.push(Ee);
      e: for (; 0 < F; ) {
        var R = F - 1 >>> 1, j = W[R];
        if (0 < et(j, Ee)) W[R] = Ee, W[F] = j, F = R;
        else break e;
      }
    }
    function L(W) {
      return W.length === 0 ? null : W[0];
    }
    function We(W) {
      if (W.length === 0) return null;
      var Ee = W[0], F = W.pop();
      if (F !== Ee) {
        W[0] = F;
        e: for (var R = 0, j = W.length, ye = j >>> 1; R < ye; ) {
          var Te = 2 * (R + 1) - 1, Se = W[Te], Me = Te + 1, st = W[Me];
          if (0 > et(Se, F)) Me < j && 0 > et(st, Se) ? (W[R] = st, W[Me] = F, R = Me) : (W[R] = Se, W[Te] = F, R = Te);
          else if (Me < j && 0 > et(st, F)) W[R] = st, W[Me] = F, R = Me;
          else break e;
        }
      }
      return Ee;
    }
    function et(W, Ee) {
      var F = W.sortIndex - Ee.sortIndex;
      return F !== 0 ? F : W.id - Ee.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var Ne = performance;
      B.unstable_now = function() {
        return Ne.now();
      };
    } else {
      var je = Date, S = je.now();
      B.unstable_now = function() {
        return je.now() - S;
      };
    }
    var Ie = [], pe = [], le = 1, Z = null, $ = 3, q = !1, Q = !1, ie = !1, Ce = typeof setTimeout == "function" ? setTimeout : null, ut = typeof clearTimeout == "function" ? clearTimeout : null, jt = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function ot(W) {
      for (var Ee = L(pe); Ee !== null; ) {
        if (Ee.callback === null) We(pe);
        else if (Ee.startTime <= W) We(pe), Ee.sortIndex = Ee.expirationTime, G(Ie, Ee);
        else break;
        Ee = L(pe);
      }
    }
    function $e(W) {
      if (ie = !1, ot(W), !Q) if (L(Ie) !== null) Q = !0, ht(Lt);
      else {
        var Ee = L(pe);
        Ee !== null && at($e, Ee.startTime - W);
      }
    }
    function Lt(W, Ee) {
      Q = !1, ie && (ie = !1, ut(Be), Be = -1), q = !0;
      var F = $;
      try {
        for (ot(Ee), Z = L(Ie); Z !== null && (!(Z.expirationTime > Ee) || W && !ln()); ) {
          var R = Z.callback;
          if (typeof R == "function") {
            Z.callback = null, $ = Z.priorityLevel;
            var j = R(Z.expirationTime <= Ee);
            Ee = B.unstable_now(), typeof j == "function" ? Z.callback = j : Z === L(Ie) && We(Ie), ot(Ee);
          } else We(Ie);
          Z = L(Ie);
        }
        if (Z !== null) var ye = !0;
        else {
          var Te = L(pe);
          Te !== null && at($e, Te.startTime - Ee), ye = !1;
        }
        return ye;
      } finally {
        Z = null, $ = F, q = !1;
      }
    }
    var ke = !1, dt = null, Be = -1, mn = 5, Nt = -1;
    function ln() {
      return !(B.unstable_now() - Nt < mn);
    }
    function Vt() {
      if (dt !== null) {
        var W = B.unstable_now();
        Nt = W;
        var Ee = !0;
        try {
          Ee = dt(!0, W);
        } finally {
          Ee ? Et() : (ke = !1, dt = null);
        }
      } else ke = !1;
    }
    var Et;
    if (typeof jt == "function") Et = function() {
      jt(Vt);
    };
    else if (typeof MessageChannel < "u") {
      var Pe = new MessageChannel(), Mt = Pe.port2;
      Pe.port1.onmessage = Vt, Et = function() {
        Mt.postMessage(null);
      };
    } else Et = function() {
      Ce(Vt, 0);
    };
    function ht(W) {
      dt = W, ke || (ke = !0, Et());
    }
    function at(W, Ee) {
      Be = Ce(function() {
        W(B.unstable_now());
      }, Ee);
    }
    B.unstable_IdlePriority = 5, B.unstable_ImmediatePriority = 1, B.unstable_LowPriority = 4, B.unstable_NormalPriority = 3, B.unstable_Profiling = null, B.unstable_UserBlockingPriority = 2, B.unstable_cancelCallback = function(W) {
      W.callback = null;
    }, B.unstable_continueExecution = function() {
      Q || q || (Q = !0, ht(Lt));
    }, B.unstable_forceFrameRate = function(W) {
      0 > W || 125 < W ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : mn = 0 < W ? Math.floor(1e3 / W) : 5;
    }, B.unstable_getCurrentPriorityLevel = function() {
      return $;
    }, B.unstable_getFirstCallbackNode = function() {
      return L(Ie);
    }, B.unstable_next = function(W) {
      switch ($) {
        case 1:
        case 2:
        case 3:
          var Ee = 3;
          break;
        default:
          Ee = $;
      }
      var F = $;
      $ = Ee;
      try {
        return W();
      } finally {
        $ = F;
      }
    }, B.unstable_pauseExecution = function() {
    }, B.unstable_requestPaint = function() {
    }, B.unstable_runWithPriority = function(W, Ee) {
      switch (W) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          W = 3;
      }
      var F = $;
      $ = W;
      try {
        return Ee();
      } finally {
        $ = F;
      }
    }, B.unstable_scheduleCallback = function(W, Ee, F) {
      var R = B.unstable_now();
      switch (typeof F == "object" && F !== null ? (F = F.delay, F = typeof F == "number" && 0 < F ? R + F : R) : F = R, W) {
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
      return j = F + j, W = { id: le++, callback: Ee, priorityLevel: W, startTime: F, expirationTime: j, sortIndex: -1 }, F > R ? (W.sortIndex = F, G(pe, W), L(Ie) === null && W === L(pe) && (ie ? (ut(Be), Be = -1) : ie = !0, at($e, F - R))) : (W.sortIndex = j, G(Ie, W), Q || q || (Q = !0, ht(Lt))), W;
    }, B.unstable_shouldYield = ln, B.unstable_wrapCallback = function(W) {
      var Ee = $;
      return function() {
        var F = $;
        $ = Ee;
        try {
          return W.apply(this, arguments);
        } finally {
          $ = F;
        }
      };
    };
  }(oE)), oE;
}
var sE = {}, eT;
function ok() {
  return eT || (eT = 1, function(B) {
    var G = {};
    /**
     * @license React
     * scheduler.development.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    G.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var L = !1, We = 5;
      function et(ae, Fe) {
        var ft = ae.length;
        ae.push(Fe), S(ae, Fe, ft);
      }
      function Ne(ae) {
        return ae.length === 0 ? null : ae[0];
      }
      function je(ae) {
        if (ae.length === 0)
          return null;
        var Fe = ae[0], ft = ae.pop();
        return ft !== Fe && (ae[0] = ft, Ie(ae, ft, 0)), Fe;
      }
      function S(ae, Fe, ft) {
        for (var Ft = ft; Ft > 0; ) {
          var cn = Ft - 1 >>> 1, fn = ae[cn];
          if (pe(fn, Fe) > 0)
            ae[cn] = Fe, ae[Ft] = fn, Ft = cn;
          else
            return;
        }
      }
      function Ie(ae, Fe, ft) {
        for (var Ft = ft, cn = ae.length, fn = cn >>> 1; Ft < fn; ) {
          var dn = (Ft + 1) * 2 - 1, Kn = ae[dn], un = dn + 1, qt = ae[un];
          if (pe(Kn, Fe) < 0)
            un < cn && pe(qt, Kn) < 0 ? (ae[Ft] = qt, ae[un] = Fe, Ft = un) : (ae[Ft] = Kn, ae[dn] = Fe, Ft = dn);
          else if (un < cn && pe(qt, Fe) < 0)
            ae[Ft] = qt, ae[un] = Fe, Ft = un;
          else
            return;
        }
      }
      function pe(ae, Fe) {
        var ft = ae.sortIndex - Fe.sortIndex;
        return ft !== 0 ? ft : ae.id - Fe.id;
      }
      var le = 1, Z = 2, $ = 3, q = 4, Q = 5;
      function ie(ae, Fe) {
      }
      var Ce = typeof performance == "object" && typeof performance.now == "function";
      if (Ce) {
        var ut = performance;
        B.unstable_now = function() {
          return ut.now();
        };
      } else {
        var jt = Date, ot = jt.now();
        B.unstable_now = function() {
          return jt.now() - ot;
        };
      }
      var $e = 1073741823, Lt = -1, ke = 250, dt = 5e3, Be = 1e4, mn = $e, Nt = [], ln = [], Vt = 1, Et = null, Pe = $, Mt = !1, ht = !1, at = !1, W = typeof setTimeout == "function" ? setTimeout : null, Ee = typeof clearTimeout == "function" ? clearTimeout : null, F = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function R(ae) {
        for (var Fe = Ne(ln); Fe !== null; ) {
          if (Fe.callback === null)
            je(ln);
          else if (Fe.startTime <= ae)
            je(ln), Fe.sortIndex = Fe.expirationTime, et(Nt, Fe);
          else
            return;
          Fe = Ne(ln);
        }
      }
      function j(ae) {
        if (at = !1, R(ae), !ht)
          if (Ne(Nt) !== null)
            ht = !0, Mn(ye);
          else {
            var Fe = Ne(ln);
            Fe !== null && lr(j, Fe.startTime - ae);
          }
      }
      function ye(ae, Fe) {
        ht = !1, at && (at = !1, Ir()), Mt = !0;
        var ft = Pe;
        try {
          var Ft;
          if (!L) return Te(ae, Fe);
        } finally {
          Et = null, Pe = ft, Mt = !1;
        }
      }
      function Te(ae, Fe) {
        var ft = Fe;
        for (R(ft), Et = Ne(Nt); Et !== null && !(Et.expirationTime > ft && (!ae || qa())); ) {
          var Ft = Et.callback;
          if (typeof Ft == "function") {
            Et.callback = null, Pe = Et.priorityLevel;
            var cn = Et.expirationTime <= ft, fn = Ft(cn);
            ft = B.unstable_now(), typeof fn == "function" ? Et.callback = fn : Et === Ne(Nt) && je(Nt), R(ft);
          } else
            je(Nt);
          Et = Ne(Nt);
        }
        if (Et !== null)
          return !0;
        var dn = Ne(ln);
        return dn !== null && lr(j, dn.startTime - ft), !1;
      }
      function Se(ae, Fe) {
        switch (ae) {
          case le:
          case Z:
          case $:
          case q:
          case Q:
            break;
          default:
            ae = $;
        }
        var ft = Pe;
        Pe = ae;
        try {
          return Fe();
        } finally {
          Pe = ft;
        }
      }
      function Me(ae) {
        var Fe;
        switch (Pe) {
          case le:
          case Z:
          case $:
            Fe = $;
            break;
          default:
            Fe = Pe;
            break;
        }
        var ft = Pe;
        Pe = Fe;
        try {
          return ae();
        } finally {
          Pe = ft;
        }
      }
      function st(ae) {
        var Fe = Pe;
        return function() {
          var ft = Pe;
          Pe = Fe;
          try {
            return ae.apply(this, arguments);
          } finally {
            Pe = ft;
          }
        };
      }
      function Ye(ae, Fe, ft) {
        var Ft = B.unstable_now(), cn;
        if (typeof ft == "object" && ft !== null) {
          var fn = ft.delay;
          typeof fn == "number" && fn > 0 ? cn = Ft + fn : cn = Ft;
        } else
          cn = Ft;
        var dn;
        switch (ae) {
          case le:
            dn = Lt;
            break;
          case Z:
            dn = ke;
            break;
          case Q:
            dn = mn;
            break;
          case q:
            dn = Be;
            break;
          case $:
          default:
            dn = dt;
            break;
        }
        var Kn = cn + dn, un = {
          id: Vt++,
          callback: Fe,
          priorityLevel: ae,
          startTime: cn,
          expirationTime: Kn,
          sortIndex: -1
        };
        return cn > Ft ? (un.sortIndex = cn, et(ln, un), Ne(Nt) === null && un === Ne(ln) && (at ? Ir() : at = !0, lr(j, cn - Ft))) : (un.sortIndex = Kn, et(Nt, un), !ht && !Mt && (ht = !0, Mn(ye))), un;
      }
      function mt() {
      }
      function ct() {
        !ht && !Mt && (ht = !0, Mn(ye));
      }
      function sn() {
        return Ne(Nt);
      }
      function qn(ae) {
        ae.callback = null;
      }
      function ir() {
        return Pe;
      }
      var Ln = !1, Cr = null, Bn = -1, Nn = We, ca = -1;
      function qa() {
        var ae = B.unstable_now() - ca;
        return !(ae < Nn);
      }
      function Dr() {
      }
      function $n(ae) {
        if (ae < 0 || ae > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        ae > 0 ? Nn = Math.floor(1e3 / ae) : Nn = We;
      }
      var Gn = function() {
        if (Cr !== null) {
          var ae = B.unstable_now();
          ca = ae;
          var Fe = !0, ft = !0;
          try {
            ft = Cr(Fe, ae);
          } finally {
            ft ? Xn() : (Ln = !1, Cr = null);
          }
        } else
          Ln = !1;
      }, Xn;
      if (typeof F == "function")
        Xn = function() {
          F(Gn);
        };
      else if (typeof MessageChannel < "u") {
        var Rr = new MessageChannel(), Ga = Rr.port2;
        Rr.port1.onmessage = Gn, Xn = function() {
          Ga.postMessage(null);
        };
      } else
        Xn = function() {
          W(Gn, 0);
        };
      function Mn(ae) {
        Cr = ae, Ln || (Ln = !0, Xn());
      }
      function lr(ae, Fe) {
        Bn = W(function() {
          ae(B.unstable_now());
        }, Fe);
      }
      function Ir() {
        Ee(Bn), Bn = -1;
      }
      var Li = Dr, fa = null;
      B.unstable_IdlePriority = Q, B.unstable_ImmediatePriority = le, B.unstable_LowPriority = q, B.unstable_NormalPriority = $, B.unstable_Profiling = fa, B.unstable_UserBlockingPriority = Z, B.unstable_cancelCallback = qn, B.unstable_continueExecution = ct, B.unstable_forceFrameRate = $n, B.unstable_getCurrentPriorityLevel = ir, B.unstable_getFirstCallbackNode = sn, B.unstable_next = Me, B.unstable_pauseExecution = mt, B.unstable_requestPaint = Li, B.unstable_runWithPriority = Se, B.unstable_scheduleCallback = Ye, B.unstable_shouldYield = qa, B.unstable_wrapCallback = st, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(sE)), sE;
}
var tT;
function oT() {
  if (tT) return Bm.exports;
  tT = 1;
  var B = {};
  return B.NODE_ENV === "production" ? Bm.exports = uk() : Bm.exports = ok(), Bm.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nT;
function sk() {
  if (nT) return Qa;
  nT = 1;
  var B = Wt, G = oT();
  function L(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, l = 1; l < arguments.length; l++) r += "&args[]=" + encodeURIComponent(arguments[l]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var We = /* @__PURE__ */ new Set(), et = {};
  function Ne(n, r) {
    je(n, r), je(n + "Capture", r);
  }
  function je(n, r) {
    for (et[n] = r, n = 0; n < r.length; n++) We.add(r[n]);
  }
  var S = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Ie = Object.prototype.hasOwnProperty, pe = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, le = {}, Z = {};
  function $(n) {
    return Ie.call(Z, n) ? !0 : Ie.call(le, n) ? !1 : pe.test(n) ? Z[n] = !0 : (le[n] = !0, !1);
  }
  function q(n, r, l, o) {
    if (l !== null && l.type === 0) return !1;
    switch (typeof r) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return o ? !1 : l !== null ? !l.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function Q(n, r, l, o) {
    if (r === null || typeof r > "u" || q(n, r, l, o)) return !0;
    if (o) return !1;
    if (l !== null) switch (l.type) {
      case 3:
        return !r;
      case 4:
        return r === !1;
      case 5:
        return isNaN(r);
      case 6:
        return isNaN(r) || 1 > r;
    }
    return !1;
  }
  function ie(n, r, l, o, c, d, m) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = o, this.attributeNamespace = c, this.mustUseProperty = l, this.propertyName = n, this.type = r, this.sanitizeURL = d, this.removeEmptyString = m;
  }
  var Ce = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    Ce[n] = new ie(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    Ce[r] = new ie(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    Ce[n] = new ie(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    Ce[n] = new ie(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    Ce[n] = new ie(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    Ce[n] = new ie(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    Ce[n] = new ie(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    Ce[n] = new ie(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    Ce[n] = new ie(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var ut = /[\-:]([a-z])/g;
  function jt(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      ut,
      jt
    );
    Ce[r] = new ie(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(ut, jt);
    Ce[r] = new ie(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(ut, jt);
    Ce[r] = new ie(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    Ce[n] = new ie(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), Ce.xlinkHref = new ie("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    Ce[n] = new ie(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function ot(n, r, l, o) {
    var c = Ce.hasOwnProperty(r) ? Ce[r] : null;
    (c !== null ? c.type !== 0 : o || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (Q(r, l, c, o) && (l = null), o || c === null ? $(r) && (l === null ? n.removeAttribute(r) : n.setAttribute(r, "" + l)) : c.mustUseProperty ? n[c.propertyName] = l === null ? c.type === 3 ? !1 : "" : l : (r = c.attributeName, o = c.attributeNamespace, l === null ? n.removeAttribute(r) : (c = c.type, l = c === 3 || c === 4 && l === !0 ? "" : "" + l, o ? n.setAttributeNS(o, r, l) : n.setAttribute(r, l))));
  }
  var $e = B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Lt = Symbol.for("react.element"), ke = Symbol.for("react.portal"), dt = Symbol.for("react.fragment"), Be = Symbol.for("react.strict_mode"), mn = Symbol.for("react.profiler"), Nt = Symbol.for("react.provider"), ln = Symbol.for("react.context"), Vt = Symbol.for("react.forward_ref"), Et = Symbol.for("react.suspense"), Pe = Symbol.for("react.suspense_list"), Mt = Symbol.for("react.memo"), ht = Symbol.for("react.lazy"), at = Symbol.for("react.offscreen"), W = Symbol.iterator;
  function Ee(n) {
    return n === null || typeof n != "object" ? null : (n = W && n[W] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var F = Object.assign, R;
  function j(n) {
    if (R === void 0) try {
      throw Error();
    } catch (l) {
      var r = l.stack.trim().match(/\n( *(at )?)/);
      R = r && r[1] || "";
    }
    return `
` + R + n;
  }
  var ye = !1;
  function Te(n, r) {
    if (!n || ye) return "";
    ye = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (r) if (r = function() {
        throw Error();
      }, Object.defineProperty(r.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(r, []);
        } catch (U) {
          var o = U;
        }
        Reflect.construct(n, [], r);
      } else {
        try {
          r.call();
        } catch (U) {
          o = U;
        }
        n.call(r.prototype);
      }
      else {
        try {
          throw Error();
        } catch (U) {
          o = U;
        }
        n();
      }
    } catch (U) {
      if (U && o && typeof U.stack == "string") {
        for (var c = U.stack.split(`
`), d = o.stack.split(`
`), m = c.length - 1, E = d.length - 1; 1 <= m && 0 <= E && c[m] !== d[E]; ) E--;
        for (; 1 <= m && 0 <= E; m--, E--) if (c[m] !== d[E]) {
          if (m !== 1 || E !== 1)
            do
              if (m--, E--, 0 > E || c[m] !== d[E]) {
                var b = `
` + c[m].replace(" at new ", " at ");
                return n.displayName && b.includes("<anonymous>") && (b = b.replace("<anonymous>", n.displayName)), b;
              }
            while (1 <= m && 0 <= E);
          break;
        }
      }
    } finally {
      ye = !1, Error.prepareStackTrace = l;
    }
    return (n = n ? n.displayName || n.name : "") ? j(n) : "";
  }
  function Se(n) {
    switch (n.tag) {
      case 5:
        return j(n.type);
      case 16:
        return j("Lazy");
      case 13:
        return j("Suspense");
      case 19:
        return j("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = Te(n.type, !1), n;
      case 11:
        return n = Te(n.type.render, !1), n;
      case 1:
        return n = Te(n.type, !0), n;
      default:
        return "";
    }
  }
  function Me(n) {
    if (n == null) return null;
    if (typeof n == "function") return n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case dt:
        return "Fragment";
      case ke:
        return "Portal";
      case mn:
        return "Profiler";
      case Be:
        return "StrictMode";
      case Et:
        return "Suspense";
      case Pe:
        return "SuspenseList";
    }
    if (typeof n == "object") switch (n.$$typeof) {
      case ln:
        return (n.displayName || "Context") + ".Consumer";
      case Nt:
        return (n._context.displayName || "Context") + ".Provider";
      case Vt:
        var r = n.render;
        return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
      case Mt:
        return r = n.displayName || null, r !== null ? r : Me(n.type) || "Memo";
      case ht:
        r = n._payload, n = n._init;
        try {
          return Me(n(r));
        } catch {
        }
    }
    return null;
  }
  function st(n) {
    var r = n.type;
    switch (n.tag) {
      case 24:
        return "Cache";
      case 9:
        return (r.displayName || "Context") + ".Consumer";
      case 10:
        return (r._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return n = r.render, n = n.displayName || n.name || "", r.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return r;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return Me(r);
      case 8:
        return r === Be ? "StrictMode" : "Mode";
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
        if (typeof r == "function") return r.displayName || r.name || null;
        if (typeof r == "string") return r;
    }
    return null;
  }
  function Ye(n) {
    switch (typeof n) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return n;
      case "object":
        return n;
      default:
        return "";
    }
  }
  function mt(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function ct(n) {
    var r = mt(n) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), o = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
      var c = l.get, d = l.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return c.call(this);
      }, set: function(m) {
        o = "" + m, d.call(this, m);
      } }), Object.defineProperty(n, r, { enumerable: l.enumerable }), { getValue: function() {
        return o;
      }, setValue: function(m) {
        o = "" + m;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function sn(n) {
    n._valueTracker || (n._valueTracker = ct(n));
  }
  function qn(n) {
    if (!n) return !1;
    var r = n._valueTracker;
    if (!r) return !0;
    var l = r.getValue(), o = "";
    return n && (o = mt(n) ? n.checked ? "true" : "false" : n.value), n = o, n !== l ? (r.setValue(n), !0) : !1;
  }
  function ir(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u") return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function Ln(n, r) {
    var l = r.checked;
    return F({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: l ?? n._wrapperState.initialChecked });
  }
  function Cr(n, r) {
    var l = r.defaultValue == null ? "" : r.defaultValue, o = r.checked != null ? r.checked : r.defaultChecked;
    l = Ye(r.value != null ? r.value : l), n._wrapperState = { initialChecked: o, initialValue: l, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function Bn(n, r) {
    r = r.checked, r != null && ot(n, "checked", r, !1);
  }
  function Nn(n, r) {
    Bn(n, r);
    var l = Ye(r.value), o = r.type;
    if (l != null) o === "number" ? (l === 0 && n.value === "" || n.value != l) && (n.value = "" + l) : n.value !== "" + l && (n.value = "" + l);
    else if (o === "submit" || o === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? qa(n, r.type, l) : r.hasOwnProperty("defaultValue") && qa(n, r.type, Ye(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function ca(n, r, l) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var o = r.type;
      if (!(o !== "submit" && o !== "reset" || r.value !== void 0 && r.value !== null)) return;
      r = "" + n._wrapperState.initialValue, l || r === n.value || (n.value = r), n.defaultValue = r;
    }
    l = n.name, l !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, l !== "" && (n.name = l);
  }
  function qa(n, r, l) {
    (r !== "number" || ir(n.ownerDocument) !== n) && (l == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + l && (n.defaultValue = "" + l));
  }
  var Dr = Array.isArray;
  function $n(n, r, l, o) {
    if (n = n.options, r) {
      r = {};
      for (var c = 0; c < l.length; c++) r["$" + l[c]] = !0;
      for (l = 0; l < n.length; l++) c = r.hasOwnProperty("$" + n[l].value), n[l].selected !== c && (n[l].selected = c), c && o && (n[l].defaultSelected = !0);
    } else {
      for (l = "" + Ye(l), r = null, c = 0; c < n.length; c++) {
        if (n[c].value === l) {
          n[c].selected = !0, o && (n[c].defaultSelected = !0);
          return;
        }
        r !== null || n[c].disabled || (r = n[c]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function Gn(n, r) {
    if (r.dangerouslySetInnerHTML != null) throw Error(L(91));
    return F({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function Xn(n, r) {
    var l = r.value;
    if (l == null) {
      if (l = r.children, r = r.defaultValue, l != null) {
        if (r != null) throw Error(L(92));
        if (Dr(l)) {
          if (1 < l.length) throw Error(L(93));
          l = l[0];
        }
        r = l;
      }
      r == null && (r = ""), l = r;
    }
    n._wrapperState = { initialValue: Ye(l) };
  }
  function Rr(n, r) {
    var l = Ye(r.value), o = Ye(r.defaultValue);
    l != null && (l = "" + l, l !== n.value && (n.value = l), r.defaultValue == null && n.defaultValue !== l && (n.defaultValue = l)), o != null && (n.defaultValue = "" + o);
  }
  function Ga(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function Mn(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function lr(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? Mn(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var Ir, Li = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, l, o, c) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, l, o, c);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n) n.innerHTML = r;
    else {
      for (Ir = Ir || document.createElement("div"), Ir.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = Ir.firstChild; n.firstChild; ) n.removeChild(n.firstChild);
      for (; r.firstChild; ) n.appendChild(r.firstChild);
    }
  });
  function fa(n, r) {
    if (r) {
      var l = n.firstChild;
      if (l && l === n.lastChild && l.nodeType === 3) {
        l.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var ae = {
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
  Object.keys(ae).forEach(function(n) {
    Fe.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), ae[r] = ae[n];
    });
  });
  function ft(n, r, l) {
    return r == null || typeof r == "boolean" || r === "" ? "" : l || typeof r != "number" || r === 0 || ae.hasOwnProperty(n) && ae[n] ? ("" + r).trim() : r + "px";
  }
  function Ft(n, r) {
    n = n.style;
    for (var l in r) if (r.hasOwnProperty(l)) {
      var o = l.indexOf("--") === 0, c = ft(l, r[l], o);
      l === "float" && (l = "cssFloat"), o ? n.setProperty(l, c) : n[l] = c;
    }
  }
  var cn = F({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function fn(n, r) {
    if (r) {
      if (cn[n] && (r.children != null || r.dangerouslySetInnerHTML != null)) throw Error(L(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null) throw Error(L(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML)) throw Error(L(61));
      }
      if (r.style != null && typeof r.style != "object") throw Error(L(62));
    }
  }
  function dn(n, r) {
    if (n.indexOf("-") === -1) return typeof r.is == "string";
    switch (n) {
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
  var Kn = null;
  function un(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var qt = null, Ht = null, da = null;
  function xa(n) {
    if (n = cs(n)) {
      if (typeof qt != "function") throw Error(L(280));
      var r = n.stateNode;
      r && (r = Ii(r), qt(n.stateNode, n.type, r));
    }
  }
  function ka(n) {
    Ht ? da ? da.push(n) : da = [n] : Ht = n;
  }
  function Ni() {
    if (Ht) {
      var n = Ht, r = da;
      if (da = Ht = null, xa(n), r) for (n = 0; n < r.length; n++) xa(r[n]);
    }
  }
  function Il(n, r) {
    return n(r);
  }
  function Ql() {
  }
  var Mi = !1;
  function Wl(n, r, l) {
    if (Mi) return n(r, l);
    Mi = !0;
    try {
      return Il(n, r, l);
    } finally {
      Mi = !1, (Ht !== null || da !== null) && (Ql(), Ni());
    }
  }
  function si(n, r) {
    var l = n.stateNode;
    if (l === null) return null;
    var o = Ii(l);
    if (o === null) return null;
    l = o[r];
    e: switch (r) {
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
        (o = !o.disabled) || (n = n.type, o = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !o;
        break e;
      default:
        n = !1;
    }
    if (n) return null;
    if (l && typeof l != "function") throw Error(L(231, r, typeof l));
    return l;
  }
  var pa = !1;
  if (S) try {
    var ur = {};
    Object.defineProperty(ur, "passive", { get: function() {
      pa = !0;
    } }), window.addEventListener("test", ur, ur), window.removeEventListener("test", ur, ur);
  } catch {
    pa = !1;
  }
  function va(n, r, l, o, c, d, m, E, b) {
    var U = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(l, U);
    } catch (J) {
      this.onError(J);
    }
  }
  var Qr = !1, ci = null, fi = !1, zi = null, T = { onError: function(n) {
    Qr = !0, ci = n;
  } };
  function X(n, r, l, o, c, d, m, E, b) {
    Qr = !1, ci = null, va.apply(T, arguments);
  }
  function se(n, r, l, o, c, d, m, E, b) {
    if (X.apply(this, arguments), Qr) {
      if (Qr) {
        var U = ci;
        Qr = !1, ci = null;
      } else throw Error(L(198));
      fi || (fi = !0, zi = U);
    }
  }
  function fe(n) {
    var r = n, l = n;
    if (n.alternate) for (; r.return; ) r = r.return;
    else {
      n = r;
      do
        r = n, r.flags & 4098 && (l = r.return), n = r.return;
      while (n);
    }
    return r.tag === 3 ? l : null;
  }
  function yt(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null) return r.dehydrated;
    }
    return null;
  }
  function Je(n) {
    if (fe(n) !== n) throw Error(L(188));
  }
  function Ct(n) {
    var r = n.alternate;
    if (!r) {
      if (r = fe(n), r === null) throw Error(L(188));
      return r !== n ? null : n;
    }
    for (var l = n, o = r; ; ) {
      var c = l.return;
      if (c === null) break;
      var d = c.alternate;
      if (d === null) {
        if (o = c.return, o !== null) {
          l = o;
          continue;
        }
        break;
      }
      if (c.child === d.child) {
        for (d = c.child; d; ) {
          if (d === l) return Je(c), n;
          if (d === o) return Je(c), r;
          d = d.sibling;
        }
        throw Error(L(188));
      }
      if (l.return !== o.return) l = c, o = d;
      else {
        for (var m = !1, E = c.child; E; ) {
          if (E === l) {
            m = !0, l = c, o = d;
            break;
          }
          if (E === o) {
            m = !0, o = c, l = d;
            break;
          }
          E = E.sibling;
        }
        if (!m) {
          for (E = d.child; E; ) {
            if (E === l) {
              m = !0, l = d, o = c;
              break;
            }
            if (E === o) {
              m = !0, o = d, l = c;
              break;
            }
            E = E.sibling;
          }
          if (!m) throw Error(L(189));
        }
      }
      if (l.alternate !== o) throw Error(L(190));
    }
    if (l.tag !== 3) throw Error(L(188));
    return l.stateNode.current === l ? n : r;
  }
  function pt(n) {
    return n = Ct(n), n !== null ? bn(n) : null;
  }
  function bn(n) {
    if (n.tag === 5 || n.tag === 6) return n;
    for (n = n.child; n !== null; ) {
      var r = bn(n);
      if (r !== null) return r;
      n = n.sibling;
    }
    return null;
  }
  var on = G.unstable_scheduleCallback, pn = G.unstable_cancelCallback, Tr = G.unstable_shouldYield, Xa = G.unstable_requestPaint, Pt = G.unstable_now, yn = G.unstable_getCurrentPriorityLevel, nt = G.unstable_ImmediatePriority, di = G.unstable_UserBlockingPriority, Ui = G.unstable_NormalPriority, ac = G.unstable_LowPriority, Ai = G.unstable_IdlePriority, ol = null, Wr = null;
  function $o(n) {
    if (Wr && typeof Wr.onCommitFiberRoot == "function") try {
      Wr.onCommitFiberRoot(ol, n, void 0, (n.current.flags & 128) === 128);
    } catch {
    }
  }
  var Or = Math.clz32 ? Math.clz32 : lc, Yo = Math.log, ic = Math.LN2;
  function lc(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (Yo(n) / ic | 0) | 0;
  }
  var ji = 64, sl = 4194304;
  function qr(n) {
    switch (n & -n) {
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
        return n & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return n & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return n;
    }
  }
  function pi(n, r) {
    var l = n.pendingLanes;
    if (l === 0) return 0;
    var o = 0, c = n.suspendedLanes, d = n.pingedLanes, m = l & 268435455;
    if (m !== 0) {
      var E = m & ~c;
      E !== 0 ? o = qr(E) : (d &= m, d !== 0 && (o = qr(d)));
    } else m = l & ~c, m !== 0 ? o = qr(m) : d !== 0 && (o = qr(d));
    if (o === 0) return 0;
    if (r !== 0 && r !== o && !(r & c) && (c = o & -o, d = r & -r, c >= d || c === 16 && (d & 4194240) !== 0)) return r;
    if (o & 4 && (o |= l & 16), r = n.entangledLanes, r !== 0) for (n = n.entanglements, r &= o; 0 < r; ) l = 31 - Or(r), c = 1 << l, o |= n[l], r &= ~c;
    return o;
  }
  function cl(n, r) {
    switch (n) {
      case 1:
      case 2:
      case 4:
        return r + 250;
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
        return r + 5e3;
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
  function Fu(n, r) {
    for (var l = n.suspendedLanes, o = n.pingedLanes, c = n.expirationTimes, d = n.pendingLanes; 0 < d; ) {
      var m = 31 - Or(d), E = 1 << m, b = c[m];
      b === -1 ? (!(E & l) || E & o) && (c[m] = cl(E, r)) : b <= r && (n.expiredLanes |= E), d &= ~E;
    }
  }
  function Fi(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function ql() {
    var n = ji;
    return ji <<= 1, !(ji & 4194240) && (ji = 64), n;
  }
  function Gl(n) {
    for (var r = [], l = 0; 31 > l; l++) r.push(n);
    return r;
  }
  function fl(n, r, l) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - Or(r), n[r] = l;
  }
  function Io(n, r) {
    var l = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var o = n.eventTimes;
    for (n = n.expirationTimes; 0 < l; ) {
      var c = 31 - Or(l), d = 1 << c;
      r[c] = 0, o[c] = -1, n[c] = -1, l &= ~d;
    }
  }
  function Qo(n, r) {
    var l = n.entangledLanes |= r;
    for (n = n.entanglements; l; ) {
      var o = 31 - Or(l), c = 1 << o;
      c & r | n[o] & r && (n[o] |= r), l &= ~c;
    }
  }
  var xt = 0;
  function Wo(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var Hu, kt, uc, vi, Ke, Xl = !1, Jn = [], Gr = null, Lr = null, hi = null, Cn = /* @__PURE__ */ new Map(), Gt = /* @__PURE__ */ new Map(), Ka = [], Da = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function br(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        Gr = null;
        break;
      case "dragenter":
      case "dragleave":
        Lr = null;
        break;
      case "mouseover":
      case "mouseout":
        hi = null;
        break;
      case "pointerover":
      case "pointerout":
        Cn.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Gt.delete(r.pointerId);
    }
  }
  function Nr(n, r, l, o, c, d) {
    return n === null || n.nativeEvent !== d ? (n = { blockedOn: r, domEventName: l, eventSystemFlags: o, nativeEvent: d, targetContainers: [c] }, r !== null && (r = cs(r), r !== null && kt(r)), n) : (n.eventSystemFlags |= o, r = n.targetContainers, c !== null && r.indexOf(c) === -1 && r.push(c), n);
  }
  function Gf(n, r, l, o, c) {
    switch (r) {
      case "focusin":
        return Gr = Nr(Gr, n, r, l, o, c), !0;
      case "dragenter":
        return Lr = Nr(Lr, n, r, l, o, c), !0;
      case "mouseover":
        return hi = Nr(hi, n, r, l, o, c), !0;
      case "pointerover":
        var d = c.pointerId;
        return Cn.set(d, Nr(Cn.get(d) || null, n, r, l, o, c)), !0;
      case "gotpointercapture":
        return d = c.pointerId, Gt.set(d, Nr(Gt.get(d) || null, n, r, l, o, c)), !0;
    }
    return !1;
  }
  function Pu(n) {
    var r = iu(n.target);
    if (r !== null) {
      var l = fe(r);
      if (l !== null) {
        if (r = l.tag, r === 13) {
          if (r = yt(l), r !== null) {
            n.blockedOn = r, Ke(n.priority, function() {
              uc(l);
            });
            return;
          }
        } else if (r === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function Kl(n) {
    if (n.blockedOn !== null) return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var l = Yu(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (l === null) {
        l = n.nativeEvent;
        var o = new l.constructor(l.type, l);
        Kn = o, l.target.dispatchEvent(o), Kn = null;
      } else return r = cs(l), r !== null && kt(r), n.blockedOn = l, !1;
      r.shift();
    }
    return !0;
  }
  function Vu(n, r, l) {
    Kl(n) && l.delete(r);
  }
  function Bu() {
    Xl = !1, Gr !== null && Kl(Gr) && (Gr = null), Lr !== null && Kl(Lr) && (Lr = null), hi !== null && Kl(hi) && (hi = null), Cn.forEach(Vu), Gt.forEach(Vu);
  }
  function Jl(n, r) {
    n.blockedOn === r && (n.blockedOn = null, Xl || (Xl = !0, G.unstable_scheduleCallback(G.unstable_NormalPriority, Bu)));
  }
  function Oa(n) {
    function r(c) {
      return Jl(c, n);
    }
    if (0 < Jn.length) {
      Jl(Jn[0], n);
      for (var l = 1; l < Jn.length; l++) {
        var o = Jn[l];
        o.blockedOn === n && (o.blockedOn = null);
      }
    }
    for (Gr !== null && Jl(Gr, n), Lr !== null && Jl(Lr, n), hi !== null && Jl(hi, n), Cn.forEach(r), Gt.forEach(r), l = 0; l < Ka.length; l++) o = Ka[l], o.blockedOn === n && (o.blockedOn = null);
    for (; 0 < Ka.length && (l = Ka[0], l.blockedOn === null); ) Pu(l), l.blockedOn === null && Ka.shift();
  }
  var La = $e.ReactCurrentBatchConfig, dl = !0;
  function Hi(n, r, l, o) {
    var c = xt, d = La.transition;
    La.transition = null;
    try {
      xt = 1, pl(n, r, l, o);
    } finally {
      xt = c, La.transition = d;
    }
  }
  function $u(n, r, l, o) {
    var c = xt, d = La.transition;
    La.transition = null;
    try {
      xt = 4, pl(n, r, l, o);
    } finally {
      xt = c, La.transition = d;
    }
  }
  function pl(n, r, l, o) {
    if (dl) {
      var c = Yu(n, r, l, o);
      if (c === null) od(n, r, o, Pi, l), br(n, o);
      else if (Gf(c, n, r, l, o)) o.stopPropagation();
      else if (br(n, o), r & 4 && -1 < Da.indexOf(n)) {
        for (; c !== null; ) {
          var d = cs(c);
          if (d !== null && Hu(d), d = Yu(n, r, l, o), d === null && od(n, r, o, Pi, l), d === c) break;
          c = d;
        }
        c !== null && o.stopPropagation();
      } else od(n, r, o, null, l);
    }
  }
  var Pi = null;
  function Yu(n, r, l, o) {
    if (Pi = null, n = un(o), n = iu(n), n !== null) if (r = fe(n), r === null) n = null;
    else if (l = r.tag, l === 13) {
      if (n = yt(r), n !== null) return n;
      n = null;
    } else if (l === 3) {
      if (r.stateNode.current.memoizedState.isDehydrated) return r.tag === 3 ? r.stateNode.containerInfo : null;
      n = null;
    } else r !== n && (n = null);
    return Pi = n, null;
  }
  function qo(n) {
    switch (n) {
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
        switch (yn()) {
          case nt:
            return 1;
          case di:
            return 4;
          case Ui:
          case ac:
            return 16;
          case Ai:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Na = null, Iu = null, h = null;
  function C() {
    if (h) return h;
    var n, r = Iu, l = r.length, o, c = "value" in Na ? Na.value : Na.textContent, d = c.length;
    for (n = 0; n < l && r[n] === c[n]; n++) ;
    var m = l - n;
    for (o = 1; o <= m && r[l - o] === c[d - o]; o++) ;
    return h = c.slice(n, 1 < o ? 1 - o : void 0);
  }
  function M(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function H() {
    return !0;
  }
  function re() {
    return !1;
  }
  function be(n) {
    function r(l, o, c, d, m) {
      this._reactName = l, this._targetInst = c, this.type = o, this.nativeEvent = d, this.target = m, this.currentTarget = null;
      for (var E in n) n.hasOwnProperty(E) && (l = n[E], this[E] = l ? l(d) : d[E]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? H : re, this.isPropagationStopped = re, this;
    }
    return F(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var l = this.nativeEvent;
      l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = H);
    }, stopPropagation: function() {
      var l = this.nativeEvent;
      l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = H);
    }, persist: function() {
    }, isPersistent: H }), r;
  }
  var ve = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, qe = be(ve), vt = F({}, ve, { view: 0, detail: 0 }), Bt = be(vt), Xt, Kt, it, nn = F({}, vt, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Ja, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== it && (it && n.type === "mousemove" ? (Xt = n.screenX - it.screenX, Kt = n.screenY - it.screenY) : Kt = Xt = 0, it = n), Xt);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : Kt;
  } }), _n = be(nn), Zl = F({}, nn, { dataTransfer: 0 }), Go = be(Zl), Vi = F({}, vt, { relatedTarget: 0 }), eu = be(Vi), Xo = F({}, ve, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Xf = be(Xo), oc = F({}, ve, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), Kf = be(oc), Zp = F({}, ve, { data: 0 }), sc = be(Zp), ev = {
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
  }, tv = {
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
  }, nv = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Ym(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = nv[n]) ? !!r[n] : !1;
  }
  function Ja() {
    return Ym;
  }
  var Im = F({}, vt, { key: function(n) {
    if (n.key) {
      var r = ev[n.key] || n.key;
      if (r !== "Unidentified") return r;
    }
    return n.type === "keypress" ? (n = M(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? tv[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Ja, charCode: function(n) {
    return n.type === "keypress" ? M(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? M(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), Jf = be(Im), Zf = F({}, nn, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), cc = be(Zf), Qm = F({}, vt, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Ja }), fc = be(Qm), rv = F({}, ve, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Xr = be(rv), Bi = F({}, nn, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), zn = be(Bi), $i = [9, 13, 27, 32], Ko = S && "CompositionEvent" in window, vl = null;
  S && "documentMode" in document && (vl = document.documentMode);
  var Wm = S && "TextEvent" in window && !vl, Qu = S && (!Ko || vl && 8 < vl && 11 >= vl), av = " ", iv = !1;
  function dc(n, r) {
    switch (n) {
      case "keyup":
        return $i.indexOf(r.keyCode) !== -1;
      case "keydown":
        return r.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function lv(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var Wu = !1;
  function qm(n, r) {
    switch (n) {
      case "compositionend":
        return lv(r);
      case "keypress":
        return r.which !== 32 ? null : (iv = !0, av);
      case "textInput":
        return n = r.data, n === av && iv ? null : n;
      default:
        return null;
    }
  }
  function uv(n, r) {
    if (Wu) return n === "compositionend" || !Ko && dc(n, r) ? (n = C(), h = Iu = Na = null, Wu = !1, n) : null;
    switch (n) {
      case "paste":
        return null;
      case "keypress":
        if (!(r.ctrlKey || r.altKey || r.metaKey) || r.ctrlKey && r.altKey) {
          if (r.char && 1 < r.char.length) return r.char;
          if (r.which) return String.fromCharCode(r.which);
        }
        return null;
      case "compositionend":
        return Qu && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var Gm = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function ov(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!Gm[n.type] : r === "textarea";
  }
  function sv(n, r, l, o) {
    ka(o), r = us(r, "onChange"), 0 < r.length && (l = new qe("onChange", "change", null, l, o), n.push({ event: l, listeners: r }));
  }
  var qu = null, mi = null;
  function ed(n) {
    mc(n, 0);
  }
  function Jo(n) {
    var r = ze(n);
    if (qn(r)) return n;
  }
  function cv(n, r) {
    if (n === "change") return r;
  }
  var fv = !1;
  if (S) {
    var td;
    if (S) {
      var nd = "oninput" in document;
      if (!nd) {
        var dv = document.createElement("div");
        dv.setAttribute("oninput", "return;"), nd = typeof dv.oninput == "function";
      }
      td = nd;
    } else td = !1;
    fv = td && (!document.documentMode || 9 < document.documentMode);
  }
  function pv() {
    qu && (qu.detachEvent("onpropertychange", vv), mi = qu = null);
  }
  function vv(n) {
    if (n.propertyName === "value" && Jo(mi)) {
      var r = [];
      sv(r, mi, n, un(n)), Wl(ed, r);
    }
  }
  function Xm(n, r, l) {
    n === "focusin" ? (pv(), qu = r, mi = l, qu.attachEvent("onpropertychange", vv)) : n === "focusout" && pv();
  }
  function Km(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown") return Jo(mi);
  }
  function hv(n, r) {
    if (n === "click") return Jo(r);
  }
  function Jm(n, r) {
    if (n === "input" || n === "change") return Jo(r);
  }
  function mv(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var Za = typeof Object.is == "function" ? Object.is : mv;
  function Zo(n, r) {
    if (Za(n, r)) return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null) return !1;
    var l = Object.keys(n), o = Object.keys(r);
    if (l.length !== o.length) return !1;
    for (o = 0; o < l.length; o++) {
      var c = l[o];
      if (!Ie.call(r, c) || !Za(n[c], r[c])) return !1;
    }
    return !0;
  }
  function yv(n) {
    for (; n && n.firstChild; ) n = n.firstChild;
    return n;
  }
  function gv(n, r) {
    var l = yv(n);
    n = 0;
    for (var o; l; ) {
      if (l.nodeType === 3) {
        if (o = n + l.textContent.length, n <= r && o >= r) return { node: l, offset: r - n };
        n = o;
      }
      e: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break e;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = yv(l);
    }
  }
  function pc(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? pc(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function hl() {
    for (var n = window, r = ir(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var l = typeof r.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) n = r.contentWindow;
      else break;
      r = ir(n.document);
    }
    return r;
  }
  function Gu(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function Sv(n) {
    var r = hl(), l = n.focusedElem, o = n.selectionRange;
    if (r !== l && l && l.ownerDocument && pc(l.ownerDocument.documentElement, l)) {
      if (o !== null && Gu(l)) {
        if (r = o.start, n = o.end, n === void 0 && (n = r), "selectionStart" in l) l.selectionStart = r, l.selectionEnd = Math.min(n, l.value.length);
        else if (n = (r = l.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var c = l.textContent.length, d = Math.min(o.start, c);
          o = o.end === void 0 ? d : Math.min(o.end, c), !n.extend && d > o && (c = o, o = d, d = c), c = gv(l, d);
          var m = gv(
            l,
            o
          );
          c && m && (n.rangeCount !== 1 || n.anchorNode !== c.node || n.anchorOffset !== c.offset || n.focusNode !== m.node || n.focusOffset !== m.offset) && (r = r.createRange(), r.setStart(c.node, c.offset), n.removeAllRanges(), d > o ? (n.addRange(r), n.extend(m.node, m.offset)) : (r.setEnd(m.node, m.offset), n.addRange(r)));
        }
      }
      for (r = [], n = l; n = n.parentNode; ) n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof l.focus == "function" && l.focus(), l = 0; l < r.length; l++) n = r[l], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var Xu = S && "documentMode" in document && 11 >= document.documentMode, Ku = null, rd = null, es = null, ad = !1;
  function Ev(n, r, l) {
    var o = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    ad || Ku == null || Ku !== ir(o) || (o = Ku, "selectionStart" in o && Gu(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = { anchorNode: o.anchorNode, anchorOffset: o.anchorOffset, focusNode: o.focusNode, focusOffset: o.focusOffset }), es && Zo(es, o) || (es = o, o = us(rd, "onSelect"), 0 < o.length && (r = new qe("onSelect", "select", null, r, l), n.push({ event: r, listeners: o }), r.target = Ku)));
  }
  function ts(n, r) {
    var l = {};
    return l[n.toLowerCase()] = r.toLowerCase(), l["Webkit" + n] = "webkit" + r, l["Moz" + n] = "moz" + r, l;
  }
  var Ju = { animationend: ts("Animation", "AnimationEnd"), animationiteration: ts("Animation", "AnimationIteration"), animationstart: ts("Animation", "AnimationStart"), transitionend: ts("Transition", "TransitionEnd") }, vc = {}, _r = {};
  S && (_r = document.createElement("div").style, "AnimationEvent" in window || (delete Ju.animationend.animation, delete Ju.animationiteration.animation, delete Ju.animationstart.animation), "TransitionEvent" in window || delete Ju.transitionend.transition);
  function ns(n) {
    if (vc[n]) return vc[n];
    if (!Ju[n]) return n;
    var r = Ju[n], l;
    for (l in r) if (r.hasOwnProperty(l) && l in _r) return vc[n] = r[l];
    return n;
  }
  var Cv = ns("animationend"), Rv = ns("animationiteration"), Tv = ns("animationstart"), bv = ns("transitionend"), _v = /* @__PURE__ */ new Map(), id = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function yi(n, r) {
    _v.set(n, r), Ne(r, [n]);
  }
  for (var tu = 0; tu < id.length; tu++) {
    var ld = id[tu], rs = ld.toLowerCase(), Zm = ld[0].toUpperCase() + ld.slice(1);
    yi(rs, "on" + Zm);
  }
  yi(Cv, "onAnimationEnd"), yi(Rv, "onAnimationIteration"), yi(Tv, "onAnimationStart"), yi("dblclick", "onDoubleClick"), yi("focusin", "onFocus"), yi("focusout", "onBlur"), yi(bv, "onTransitionEnd"), je("onMouseEnter", ["mouseout", "mouseover"]), je("onMouseLeave", ["mouseout", "mouseover"]), je("onPointerEnter", ["pointerout", "pointerover"]), je("onPointerLeave", ["pointerout", "pointerover"]), Ne("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Ne("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Ne("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Ne("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Ne("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Ne("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var as = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), ey = new Set("cancel close invalid load scroll toggle".split(" ").concat(as));
  function hc(n, r, l) {
    var o = n.type || "unknown-event";
    n.currentTarget = l, se(o, r, void 0, n), n.currentTarget = null;
  }
  function mc(n, r) {
    r = (r & 4) !== 0;
    for (var l = 0; l < n.length; l++) {
      var o = n[l], c = o.event;
      o = o.listeners;
      e: {
        var d = void 0;
        if (r) for (var m = o.length - 1; 0 <= m; m--) {
          var E = o[m], b = E.instance, U = E.currentTarget;
          if (E = E.listener, b !== d && c.isPropagationStopped()) break e;
          hc(c, E, U), d = b;
        }
        else for (m = 0; m < o.length; m++) {
          if (E = o[m], b = E.instance, U = E.currentTarget, E = E.listener, b !== d && c.isPropagationStopped()) break e;
          hc(c, E, U), d = b;
        }
      }
    }
    if (fi) throw n = zi, fi = !1, zi = null, n;
  }
  function $t(n, r) {
    var l = r[sd];
    l === void 0 && (l = r[sd] = /* @__PURE__ */ new Set());
    var o = n + "__bubble";
    l.has(o) || (ud(r, n, 2, !1), l.add(o));
  }
  function ml(n, r, l) {
    var o = 0;
    r && (o |= 4), ud(l, n, o, r);
  }
  var is = "_reactListening" + Math.random().toString(36).slice(2);
  function ls(n) {
    if (!n[is]) {
      n[is] = !0, We.forEach(function(l) {
        l !== "selectionchange" && (ey.has(l) || ml(l, !1, n), ml(l, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[is] || (r[is] = !0, ml("selectionchange", !1, r));
    }
  }
  function ud(n, r, l, o) {
    switch (qo(r)) {
      case 1:
        var c = Hi;
        break;
      case 4:
        c = $u;
        break;
      default:
        c = pl;
    }
    l = c.bind(null, r, l, n), c = void 0, !pa || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (c = !0), o ? c !== void 0 ? n.addEventListener(r, l, { capture: !0, passive: c }) : n.addEventListener(r, l, !0) : c !== void 0 ? n.addEventListener(r, l, { passive: c }) : n.addEventListener(r, l, !1);
  }
  function od(n, r, l, o, c) {
    var d = o;
    if (!(r & 1) && !(r & 2) && o !== null) e: for (; ; ) {
      if (o === null) return;
      var m = o.tag;
      if (m === 3 || m === 4) {
        var E = o.stateNode.containerInfo;
        if (E === c || E.nodeType === 8 && E.parentNode === c) break;
        if (m === 4) for (m = o.return; m !== null; ) {
          var b = m.tag;
          if ((b === 3 || b === 4) && (b = m.stateNode.containerInfo, b === c || b.nodeType === 8 && b.parentNode === c)) return;
          m = m.return;
        }
        for (; E !== null; ) {
          if (m = iu(E), m === null) return;
          if (b = m.tag, b === 5 || b === 6) {
            o = d = m;
            continue e;
          }
          E = E.parentNode;
        }
      }
      o = o.return;
    }
    Wl(function() {
      var U = d, J = un(l), ee = [];
      e: {
        var K = _v.get(n);
        if (K !== void 0) {
          var he = qe, _e = n;
          switch (n) {
            case "keypress":
              if (M(l) === 0) break e;
            case "keydown":
            case "keyup":
              he = Jf;
              break;
            case "focusin":
              _e = "focus", he = eu;
              break;
            case "focusout":
              _e = "blur", he = eu;
              break;
            case "beforeblur":
            case "afterblur":
              he = eu;
              break;
            case "click":
              if (l.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              he = _n;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              he = Go;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              he = fc;
              break;
            case Cv:
            case Rv:
            case Tv:
              he = Xf;
              break;
            case bv:
              he = Xr;
              break;
            case "scroll":
              he = Bt;
              break;
            case "wheel":
              he = zn;
              break;
            case "copy":
            case "cut":
            case "paste":
              he = Kf;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              he = cc;
          }
          var De = (r & 4) !== 0, Dn = !De && n === "scroll", k = De ? K !== null ? K + "Capture" : null : K;
          De = [];
          for (var w = U, N; w !== null; ) {
            N = w;
            var ne = N.stateNode;
            if (N.tag === 5 && ne !== null && (N = ne, k !== null && (ne = si(w, k), ne != null && De.push(Zu(w, ne, N)))), Dn) break;
            w = w.return;
          }
          0 < De.length && (K = new he(K, _e, null, l, J), ee.push({ event: K, listeners: De }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (K = n === "mouseover" || n === "pointerover", he = n === "mouseout" || n === "pointerout", K && l !== Kn && (_e = l.relatedTarget || l.fromElement) && (iu(_e) || _e[Yi])) break e;
          if ((he || K) && (K = J.window === J ? J : (K = J.ownerDocument) ? K.defaultView || K.parentWindow : window, he ? (_e = l.relatedTarget || l.toElement, he = U, _e = _e ? iu(_e) : null, _e !== null && (Dn = fe(_e), _e !== Dn || _e.tag !== 5 && _e.tag !== 6) && (_e = null)) : (he = null, _e = U), he !== _e)) {
            if (De = _n, ne = "onMouseLeave", k = "onMouseEnter", w = "mouse", (n === "pointerout" || n === "pointerover") && (De = cc, ne = "onPointerLeave", k = "onPointerEnter", w = "pointer"), Dn = he == null ? K : ze(he), N = _e == null ? K : ze(_e), K = new De(ne, w + "leave", he, l, J), K.target = Dn, K.relatedTarget = N, ne = null, iu(J) === U && (De = new De(k, w + "enter", _e, l, J), De.target = N, De.relatedTarget = Dn, ne = De), Dn = ne, he && _e) t: {
              for (De = he, k = _e, w = 0, N = De; N; N = nu(N)) w++;
              for (N = 0, ne = k; ne; ne = nu(ne)) N++;
              for (; 0 < w - N; ) De = nu(De), w--;
              for (; 0 < N - w; ) k = nu(k), N--;
              for (; w--; ) {
                if (De === k || k !== null && De === k.alternate) break t;
                De = nu(De), k = nu(k);
              }
              De = null;
            }
            else De = null;
            he !== null && yc(ee, K, he, De, !1), _e !== null && Dn !== null && yc(ee, Dn, _e, De, !0);
          }
        }
        e: {
          if (K = U ? ze(U) : window, he = K.nodeName && K.nodeName.toLowerCase(), he === "select" || he === "input" && K.type === "file") var Oe = cv;
          else if (ov(K)) if (fv) Oe = Jm;
          else {
            Oe = Km;
            var we = Xm;
          }
          else (he = K.nodeName) && he.toLowerCase() === "input" && (K.type === "checkbox" || K.type === "radio") && (Oe = hv);
          if (Oe && (Oe = Oe(n, U))) {
            sv(ee, Oe, l, J);
            break e;
          }
          we && we(n, K, U), n === "focusout" && (we = K._wrapperState) && we.controlled && K.type === "number" && qa(K, "number", K.value);
        }
        switch (we = U ? ze(U) : window, n) {
          case "focusin":
            (ov(we) || we.contentEditable === "true") && (Ku = we, rd = U, es = null);
            break;
          case "focusout":
            es = rd = Ku = null;
            break;
          case "mousedown":
            ad = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ad = !1, Ev(ee, l, J);
            break;
          case "selectionchange":
            if (Xu) break;
          case "keydown":
          case "keyup":
            Ev(ee, l, J);
        }
        var Ae;
        if (Ko) e: {
          switch (n) {
            case "compositionstart":
              var Xe = "onCompositionStart";
              break e;
            case "compositionend":
              Xe = "onCompositionEnd";
              break e;
            case "compositionupdate":
              Xe = "onCompositionUpdate";
              break e;
          }
          Xe = void 0;
        }
        else Wu ? dc(n, l) && (Xe = "onCompositionEnd") : n === "keydown" && l.keyCode === 229 && (Xe = "onCompositionStart");
        Xe && (Qu && l.locale !== "ko" && (Wu || Xe !== "onCompositionStart" ? Xe === "onCompositionEnd" && Wu && (Ae = C()) : (Na = J, Iu = "value" in Na ? Na.value : Na.textContent, Wu = !0)), we = us(U, Xe), 0 < we.length && (Xe = new sc(Xe, n, null, l, J), ee.push({ event: Xe, listeners: we }), Ae ? Xe.data = Ae : (Ae = lv(l), Ae !== null && (Xe.data = Ae)))), (Ae = Wm ? qm(n, l) : uv(n, l)) && (U = us(U, "onBeforeInput"), 0 < U.length && (J = new sc("onBeforeInput", "beforeinput", null, l, J), ee.push({ event: J, listeners: U }), J.data = Ae));
      }
      mc(ee, r);
    });
  }
  function Zu(n, r, l) {
    return { instance: n, listener: r, currentTarget: l };
  }
  function us(n, r) {
    for (var l = r + "Capture", o = []; n !== null; ) {
      var c = n, d = c.stateNode;
      c.tag === 5 && d !== null && (c = d, d = si(n, l), d != null && o.unshift(Zu(n, d, c)), d = si(n, r), d != null && o.push(Zu(n, d, c))), n = n.return;
    }
    return o;
  }
  function nu(n) {
    if (n === null) return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function yc(n, r, l, o, c) {
    for (var d = r._reactName, m = []; l !== null && l !== o; ) {
      var E = l, b = E.alternate, U = E.stateNode;
      if (b !== null && b === o) break;
      E.tag === 5 && U !== null && (E = U, c ? (b = si(l, d), b != null && m.unshift(Zu(l, b, E))) : c || (b = si(l, d), b != null && m.push(Zu(l, b, E)))), l = l.return;
    }
    m.length !== 0 && n.push({ event: r, listeners: m });
  }
  var ty = /\r\n?/g, wv = /\u0000|\uFFFD/g;
  function xv(n) {
    return (typeof n == "string" ? n : "" + n).replace(ty, `
`).replace(wv, "");
  }
  function gc(n, r, l) {
    if (r = xv(r), xv(n) !== r && l) throw Error(L(425));
  }
  function Sc() {
  }
  var ru = null, os = null;
  function au(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var Ec = typeof setTimeout == "function" ? setTimeout : void 0, kv = typeof clearTimeout == "function" ? clearTimeout : void 0, Cc = typeof Promise == "function" ? Promise : void 0, ny = typeof queueMicrotask == "function" ? queueMicrotask : typeof Cc < "u" ? function(n) {
    return Cc.resolve(null).then(n).catch(eo);
  } : Ec;
  function eo(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function to(n, r) {
    var l = r, o = 0;
    do {
      var c = l.nextSibling;
      if (n.removeChild(l), c && c.nodeType === 8) if (l = c.data, l === "/$") {
        if (o === 0) {
          n.removeChild(c), Oa(r);
          return;
        }
        o--;
      } else l !== "$" && l !== "$?" && l !== "$!" || o++;
      l = c;
    } while (l);
    Oa(r);
  }
  function ei(n) {
    for (; n != null; n = n.nextSibling) {
      var r = n.nodeType;
      if (r === 1 || r === 3) break;
      if (r === 8) {
        if (r = n.data, r === "$" || r === "$!" || r === "$?") break;
        if (r === "/$") return null;
      }
    }
    return n;
  }
  function Rc(n) {
    n = n.previousSibling;
    for (var r = 0; n; ) {
      if (n.nodeType === 8) {
        var l = n.data;
        if (l === "$" || l === "$!" || l === "$?") {
          if (r === 0) return n;
          r--;
        } else l === "/$" && r++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  var no = Math.random().toString(36).slice(2), Ma = "__reactFiber$" + no, ss = "__reactProps$" + no, Yi = "__reactContainer$" + no, sd = "__reactEvents$" + no, cd = "__reactListeners$" + no, ro = "__reactHandles$" + no;
  function iu(n) {
    var r = n[Ma];
    if (r) return r;
    for (var l = n.parentNode; l; ) {
      if (r = l[Yi] || l[Ma]) {
        if (l = r.alternate, r.child !== null || l !== null && l.child !== null) for (n = Rc(n); n !== null; ) {
          if (l = n[Ma]) return l;
          n = Rc(n);
        }
        return r;
      }
      n = l, l = n.parentNode;
    }
    return null;
  }
  function cs(n) {
    return n = n[Ma] || n[Yi], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function ze(n) {
    if (n.tag === 5 || n.tag === 6) return n.stateNode;
    throw Error(L(33));
  }
  function Ii(n) {
    return n[ss] || null;
  }
  var Un = [], Rt = -1;
  function Kr(n) {
    return { current: n };
  }
  function Jt(n) {
    0 > Rt || (n.current = Un[Rt], Un[Rt] = null, Rt--);
  }
  function rn(n, r) {
    Rt++, Un[Rt] = n.current, n.current = r;
  }
  var gt = {}, Rn = Kr(gt), An = Kr(!1), za = gt;
  function ha(n, r) {
    var l = n.type.contextTypes;
    if (!l) return gt;
    var o = n.stateNode;
    if (o && o.__reactInternalMemoizedUnmaskedChildContext === r) return o.__reactInternalMemoizedMaskedChildContext;
    var c = {}, d;
    for (d in l) c[d] = r[d];
    return o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = c), c;
  }
  function jn(n) {
    return n = n.childContextTypes, n != null;
  }
  function gi() {
    Jt(An), Jt(Rn);
  }
  function Tc(n, r, l) {
    if (Rn.current !== gt) throw Error(L(168));
    rn(Rn, r), rn(An, l);
  }
  function Dv(n, r, l) {
    var o = n.stateNode;
    if (r = r.childContextTypes, typeof o.getChildContext != "function") return l;
    o = o.getChildContext();
    for (var c in o) if (!(c in r)) throw Error(L(108, st(n) || "Unknown", c));
    return F({}, l, o);
  }
  function lu(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || gt, za = Rn.current, rn(Rn, n), rn(An, An.current), !0;
  }
  function Ua(n, r, l) {
    var o = n.stateNode;
    if (!o) throw Error(L(169));
    l ? (n = Dv(n, r, za), o.__reactInternalMemoizedMergedChildContext = n, Jt(An), Jt(Rn), rn(Rn, n)) : Jt(An), rn(An, l);
  }
  var ti = null, fs = !1, ds = !1;
  function yl(n) {
    ti === null ? ti = [n] : ti.push(n);
  }
  function fd(n) {
    fs = !0, yl(n);
  }
  function Mr() {
    if (!ds && ti !== null) {
      ds = !0;
      var n = 0, r = xt;
      try {
        var l = ti;
        for (xt = 1; n < l.length; n++) {
          var o = l[n];
          do
            o = o(!0);
          while (o !== null);
        }
        ti = null, fs = !1;
      } catch (c) {
        throw ti !== null && (ti = ti.slice(n + 1)), on(nt, Mr), c;
      } finally {
        xt = r, ds = !1;
      }
    }
    return null;
  }
  var gl = [], Sl = 0, ao = null, El = 0, or = [], Fn = 0, uu = null, zr = 1, Si = "";
  function Cl(n, r) {
    gl[Sl++] = El, gl[Sl++] = ao, ao = n, El = r;
  }
  function Ov(n, r, l) {
    or[Fn++] = zr, or[Fn++] = Si, or[Fn++] = uu, uu = n;
    var o = zr;
    n = Si;
    var c = 32 - Or(o) - 1;
    o &= ~(1 << c), l += 1;
    var d = 32 - Or(r) + c;
    if (30 < d) {
      var m = c - c % 5;
      d = (o & (1 << m) - 1).toString(32), o >>= m, c -= m, zr = 1 << 32 - Or(r) + c | l << c | o, Si = d + n;
    } else zr = 1 << d | l << c | o, Si = n;
  }
  function dd(n) {
    n.return !== null && (Cl(n, 1), Ov(n, 1, 0));
  }
  function bc(n) {
    for (; n === ao; ) ao = gl[--Sl], gl[Sl] = null, El = gl[--Sl], gl[Sl] = null;
    for (; n === uu; ) uu = or[--Fn], or[Fn] = null, Si = or[--Fn], or[Fn] = null, zr = or[--Fn], or[Fn] = null;
  }
  var Jr = null, Zr = null, vn = !1, ni = null;
  function pd(n, r) {
    var l = Pa(5, null, null, 0);
    l.elementType = "DELETED", l.stateNode = r, l.return = n, r = n.deletions, r === null ? (n.deletions = [l], n.flags |= 16) : r.push(l);
  }
  function vd(n, r) {
    switch (n.tag) {
      case 5:
        var l = n.type;
        return r = r.nodeType !== 1 || l.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, Jr = n, Zr = ei(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, Jr = n, Zr = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (l = uu !== null ? { id: zr, overflow: Si } : null, n.memoizedState = { dehydrated: r, treeContext: l, retryLane: 1073741824 }, l = Pa(18, null, null, 0), l.stateNode = r, l.return = n, n.child = l, Jr = n, Zr = null, !0) : !1;
      default:
        return !1;
    }
  }
  function hd(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function md(n) {
    if (vn) {
      var r = Zr;
      if (r) {
        var l = r;
        if (!vd(n, r)) {
          if (hd(n)) throw Error(L(418));
          r = ei(l.nextSibling);
          var o = Jr;
          r && vd(n, r) ? pd(o, l) : (n.flags = n.flags & -4097 | 2, vn = !1, Jr = n);
        }
      } else {
        if (hd(n)) throw Error(L(418));
        n.flags = n.flags & -4097 | 2, vn = !1, Jr = n;
      }
    }
  }
  function Lv(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; ) n = n.return;
    Jr = n;
  }
  function wn(n) {
    if (n !== Jr) return !1;
    if (!vn) return Lv(n), vn = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !au(n.type, n.memoizedProps)), r && (r = Zr)) {
      if (hd(n)) throw Nv(), Error(L(418));
      for (; r; ) pd(n, r), r = ei(r.nextSibling);
    }
    if (Lv(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(L(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var l = n.data;
            if (l === "/$") {
              if (r === 0) {
                Zr = ei(n.nextSibling);
                break e;
              }
              r--;
            } else l !== "$" && l !== "$!" && l !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        Zr = null;
      }
    } else Zr = Jr ? ei(n.stateNode.nextSibling) : null;
    return !0;
  }
  function Nv() {
    for (var n = Zr; n; ) n = ei(n.nextSibling);
  }
  function Qi() {
    Zr = Jr = null, vn = !1;
  }
  function ps(n) {
    ni === null ? ni = [n] : ni.push(n);
  }
  var ou = $e.ReactCurrentBatchConfig;
  function vs(n, r, l) {
    if (n = l.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (l._owner) {
        if (l = l._owner, l) {
          if (l.tag !== 1) throw Error(L(309));
          var o = l.stateNode;
        }
        if (!o) throw Error(L(147, n));
        var c = o, d = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === d ? r.ref : (r = function(m) {
          var E = c.refs;
          m === null ? delete E[d] : E[d] = m;
        }, r._stringRef = d, r);
      }
      if (typeof n != "string") throw Error(L(284));
      if (!l._owner) throw Error(L(290, n));
    }
    return n;
  }
  function io(n, r) {
    throw n = Object.prototype.toString.call(r), Error(L(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function Mv(n) {
    var r = n._init;
    return r(n._payload);
  }
  function zv(n) {
    function r(k, w) {
      if (n) {
        var N = k.deletions;
        N === null ? (k.deletions = [w], k.flags |= 16) : N.push(w);
      }
    }
    function l(k, w) {
      if (!n) return null;
      for (; w !== null; ) r(k, w), w = w.sibling;
      return null;
    }
    function o(k, w) {
      for (k = /* @__PURE__ */ new Map(); w !== null; ) w.key !== null ? k.set(w.key, w) : k.set(w.index, w), w = w.sibling;
      return k;
    }
    function c(k, w) {
      return k = Nl(k, w), k.index = 0, k.sibling = null, k;
    }
    function d(k, w, N) {
      return k.index = N, n ? (N = k.alternate, N !== null ? (N = N.index, N < w ? (k.flags |= 2, w) : N) : (k.flags |= 2, w)) : (k.flags |= 1048576, w);
    }
    function m(k) {
      return n && k.alternate === null && (k.flags |= 2), k;
    }
    function E(k, w, N, ne) {
      return w === null || w.tag !== 6 ? (w = _u(N, k.mode, ne), w.return = k, w) : (w = c(w, N), w.return = k, w);
    }
    function b(k, w, N, ne) {
      var Oe = N.type;
      return Oe === dt ? J(k, w, N.props.children, ne, N.key) : w !== null && (w.elementType === Oe || typeof Oe == "object" && Oe !== null && Oe.$$typeof === ht && Mv(Oe) === w.type) ? (ne = c(w, N.props), ne.ref = vs(k, w, N), ne.return = k, ne) : (ne = cf(N.type, N.key, N.props, null, k.mode, ne), ne.ref = vs(k, w, N), ne.return = k, ne);
    }
    function U(k, w, N, ne) {
      return w === null || w.tag !== 4 || w.stateNode.containerInfo !== N.containerInfo || w.stateNode.implementation !== N.implementation ? (w = Wd(N, k.mode, ne), w.return = k, w) : (w = c(w, N.children || []), w.return = k, w);
    }
    function J(k, w, N, ne, Oe) {
      return w === null || w.tag !== 7 ? (w = Ml(N, k.mode, ne, Oe), w.return = k, w) : (w = c(w, N), w.return = k, w);
    }
    function ee(k, w, N) {
      if (typeof w == "string" && w !== "" || typeof w == "number") return w = _u("" + w, k.mode, N), w.return = k, w;
      if (typeof w == "object" && w !== null) {
        switch (w.$$typeof) {
          case Lt:
            return N = cf(w.type, w.key, w.props, null, k.mode, N), N.ref = vs(k, null, w), N.return = k, N;
          case ke:
            return w = Wd(w, k.mode, N), w.return = k, w;
          case ht:
            var ne = w._init;
            return ee(k, ne(w._payload), N);
        }
        if (Dr(w) || Ee(w)) return w = Ml(w, k.mode, N, null), w.return = k, w;
        io(k, w);
      }
      return null;
    }
    function K(k, w, N, ne) {
      var Oe = w !== null ? w.key : null;
      if (typeof N == "string" && N !== "" || typeof N == "number") return Oe !== null ? null : E(k, w, "" + N, ne);
      if (typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case Lt:
            return N.key === Oe ? b(k, w, N, ne) : null;
          case ke:
            return N.key === Oe ? U(k, w, N, ne) : null;
          case ht:
            return Oe = N._init, K(
              k,
              w,
              Oe(N._payload),
              ne
            );
        }
        if (Dr(N) || Ee(N)) return Oe !== null ? null : J(k, w, N, ne, null);
        io(k, N);
      }
      return null;
    }
    function he(k, w, N, ne, Oe) {
      if (typeof ne == "string" && ne !== "" || typeof ne == "number") return k = k.get(N) || null, E(w, k, "" + ne, Oe);
      if (typeof ne == "object" && ne !== null) {
        switch (ne.$$typeof) {
          case Lt:
            return k = k.get(ne.key === null ? N : ne.key) || null, b(w, k, ne, Oe);
          case ke:
            return k = k.get(ne.key === null ? N : ne.key) || null, U(w, k, ne, Oe);
          case ht:
            var we = ne._init;
            return he(k, w, N, we(ne._payload), Oe);
        }
        if (Dr(ne) || Ee(ne)) return k = k.get(N) || null, J(w, k, ne, Oe, null);
        io(w, ne);
      }
      return null;
    }
    function _e(k, w, N, ne) {
      for (var Oe = null, we = null, Ae = w, Xe = w = 0, rr = null; Ae !== null && Xe < N.length; Xe++) {
        Ae.index > Xe ? (rr = Ae, Ae = null) : rr = Ae.sibling;
        var zt = K(k, Ae, N[Xe], ne);
        if (zt === null) {
          Ae === null && (Ae = rr);
          break;
        }
        n && Ae && zt.alternate === null && r(k, Ae), w = d(zt, w, Xe), we === null ? Oe = zt : we.sibling = zt, we = zt, Ae = rr;
      }
      if (Xe === N.length) return l(k, Ae), vn && Cl(k, Xe), Oe;
      if (Ae === null) {
        for (; Xe < N.length; Xe++) Ae = ee(k, N[Xe], ne), Ae !== null && (w = d(Ae, w, Xe), we === null ? Oe = Ae : we.sibling = Ae, we = Ae);
        return vn && Cl(k, Xe), Oe;
      }
      for (Ae = o(k, Ae); Xe < N.length; Xe++) rr = he(Ae, k, Xe, N[Xe], ne), rr !== null && (n && rr.alternate !== null && Ae.delete(rr.key === null ? Xe : rr.key), w = d(rr, w, Xe), we === null ? Oe = rr : we.sibling = rr, we = rr);
      return n && Ae.forEach(function(zl) {
        return r(k, zl);
      }), vn && Cl(k, Xe), Oe;
    }
    function De(k, w, N, ne) {
      var Oe = Ee(N);
      if (typeof Oe != "function") throw Error(L(150));
      if (N = Oe.call(N), N == null) throw Error(L(151));
      for (var we = Oe = null, Ae = w, Xe = w = 0, rr = null, zt = N.next(); Ae !== null && !zt.done; Xe++, zt = N.next()) {
        Ae.index > Xe ? (rr = Ae, Ae = null) : rr = Ae.sibling;
        var zl = K(k, Ae, zt.value, ne);
        if (zl === null) {
          Ae === null && (Ae = rr);
          break;
        }
        n && Ae && zl.alternate === null && r(k, Ae), w = d(zl, w, Xe), we === null ? Oe = zl : we.sibling = zl, we = zl, Ae = rr;
      }
      if (zt.done) return l(
        k,
        Ae
      ), vn && Cl(k, Xe), Oe;
      if (Ae === null) {
        for (; !zt.done; Xe++, zt = N.next()) zt = ee(k, zt.value, ne), zt !== null && (w = d(zt, w, Xe), we === null ? Oe = zt : we.sibling = zt, we = zt);
        return vn && Cl(k, Xe), Oe;
      }
      for (Ae = o(k, Ae); !zt.done; Xe++, zt = N.next()) zt = he(Ae, k, Xe, zt.value, ne), zt !== null && (n && zt.alternate !== null && Ae.delete(zt.key === null ? Xe : zt.key), w = d(zt, w, Xe), we === null ? Oe = zt : we.sibling = zt, we = zt);
      return n && Ae.forEach(function(yy) {
        return r(k, yy);
      }), vn && Cl(k, Xe), Oe;
    }
    function Dn(k, w, N, ne) {
      if (typeof N == "object" && N !== null && N.type === dt && N.key === null && (N = N.props.children), typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case Lt:
            e: {
              for (var Oe = N.key, we = w; we !== null; ) {
                if (we.key === Oe) {
                  if (Oe = N.type, Oe === dt) {
                    if (we.tag === 7) {
                      l(k, we.sibling), w = c(we, N.props.children), w.return = k, k = w;
                      break e;
                    }
                  } else if (we.elementType === Oe || typeof Oe == "object" && Oe !== null && Oe.$$typeof === ht && Mv(Oe) === we.type) {
                    l(k, we.sibling), w = c(we, N.props), w.ref = vs(k, we, N), w.return = k, k = w;
                    break e;
                  }
                  l(k, we);
                  break;
                } else r(k, we);
                we = we.sibling;
              }
              N.type === dt ? (w = Ml(N.props.children, k.mode, ne, N.key), w.return = k, k = w) : (ne = cf(N.type, N.key, N.props, null, k.mode, ne), ne.ref = vs(k, w, N), ne.return = k, k = ne);
            }
            return m(k);
          case ke:
            e: {
              for (we = N.key; w !== null; ) {
                if (w.key === we) if (w.tag === 4 && w.stateNode.containerInfo === N.containerInfo && w.stateNode.implementation === N.implementation) {
                  l(k, w.sibling), w = c(w, N.children || []), w.return = k, k = w;
                  break e;
                } else {
                  l(k, w);
                  break;
                }
                else r(k, w);
                w = w.sibling;
              }
              w = Wd(N, k.mode, ne), w.return = k, k = w;
            }
            return m(k);
          case ht:
            return we = N._init, Dn(k, w, we(N._payload), ne);
        }
        if (Dr(N)) return _e(k, w, N, ne);
        if (Ee(N)) return De(k, w, N, ne);
        io(k, N);
      }
      return typeof N == "string" && N !== "" || typeof N == "number" ? (N = "" + N, w !== null && w.tag === 6 ? (l(k, w.sibling), w = c(w, N), w.return = k, k = w) : (l(k, w), w = _u(N, k.mode, ne), w.return = k, k = w), m(k)) : l(k, w);
    }
    return Dn;
  }
  var ri = zv(!0), sr = zv(!1), oe = Kr(null), ma = null, wr = null, yd = null;
  function gd() {
    yd = wr = ma = null;
  }
  function Sd(n) {
    var r = oe.current;
    Jt(oe), n._currentValue = r;
  }
  function Ed(n, r, l) {
    for (; n !== null; ) {
      var o = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, o !== null && (o.childLanes |= r)) : o !== null && (o.childLanes & r) !== r && (o.childLanes |= r), n === l) break;
      n = n.return;
    }
  }
  function lo(n, r) {
    ma = n, yd = wr = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (tr = !0), n.firstContext = null);
  }
  function It(n) {
    var r = n._currentValue;
    if (yd !== n) if (n = { context: n, memoizedValue: r, next: null }, wr === null) {
      if (ma === null) throw Error(L(308));
      wr = n, ma.dependencies = { lanes: 0, firstContext: n };
    } else wr = wr.next = n;
    return r;
  }
  var su = null;
  function Cd(n) {
    su === null ? su = [n] : su.push(n);
  }
  function Uv(n, r, l, o) {
    var c = r.interleaved;
    return c === null ? (l.next = l, Cd(r)) : (l.next = c.next, c.next = l), r.interleaved = l, Ei(n, o);
  }
  function Ei(n, r) {
    n.lanes |= r;
    var l = n.alternate;
    for (l !== null && (l.lanes |= r), l = n, n = n.return; n !== null; ) n.childLanes |= r, l = n.alternate, l !== null && (l.childLanes |= r), l = n, n = n.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var Aa = !1;
  function Rl(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Av(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function Wi(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function Tl(n, r, l) {
    var o = n.updateQueue;
    if (o === null) return null;
    if (o = o.shared, Tt & 2) {
      var c = o.pending;
      return c === null ? r.next = r : (r.next = c.next, c.next = r), o.pending = r, Ei(n, l);
    }
    return c = o.interleaved, c === null ? (r.next = r, Cd(o)) : (r.next = c.next, c.next = r), o.interleaved = r, Ei(n, l);
  }
  function _c(n, r, l) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (l & 4194240) !== 0)) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, Qo(n, l);
    }
  }
  function jv(n, r) {
    var l = n.updateQueue, o = n.alternate;
    if (o !== null && (o = o.updateQueue, l === o)) {
      var c = null, d = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var m = { eventTime: l.eventTime, lane: l.lane, tag: l.tag, payload: l.payload, callback: l.callback, next: null };
          d === null ? c = d = m : d = d.next = m, l = l.next;
        } while (l !== null);
        d === null ? c = d = r : d = d.next = r;
      } else c = d = r;
      l = { baseState: o.baseState, firstBaseUpdate: c, lastBaseUpdate: d, shared: o.shared, effects: o.effects }, n.updateQueue = l;
      return;
    }
    n = l.lastBaseUpdate, n === null ? l.firstBaseUpdate = r : n.next = r, l.lastBaseUpdate = r;
  }
  function wc(n, r, l, o) {
    var c = n.updateQueue;
    Aa = !1;
    var d = c.firstBaseUpdate, m = c.lastBaseUpdate, E = c.shared.pending;
    if (E !== null) {
      c.shared.pending = null;
      var b = E, U = b.next;
      b.next = null, m === null ? d = U : m.next = U, m = b;
      var J = n.alternate;
      J !== null && (J = J.updateQueue, E = J.lastBaseUpdate, E !== m && (E === null ? J.firstBaseUpdate = U : E.next = U, J.lastBaseUpdate = b));
    }
    if (d !== null) {
      var ee = c.baseState;
      m = 0, J = U = b = null, E = d;
      do {
        var K = E.lane, he = E.eventTime;
        if ((o & K) === K) {
          J !== null && (J = J.next = {
            eventTime: he,
            lane: 0,
            tag: E.tag,
            payload: E.payload,
            callback: E.callback,
            next: null
          });
          e: {
            var _e = n, De = E;
            switch (K = r, he = l, De.tag) {
              case 1:
                if (_e = De.payload, typeof _e == "function") {
                  ee = _e.call(he, ee, K);
                  break e;
                }
                ee = _e;
                break e;
              case 3:
                _e.flags = _e.flags & -65537 | 128;
              case 0:
                if (_e = De.payload, K = typeof _e == "function" ? _e.call(he, ee, K) : _e, K == null) break e;
                ee = F({}, ee, K);
                break e;
              case 2:
                Aa = !0;
            }
          }
          E.callback !== null && E.lane !== 0 && (n.flags |= 64, K = c.effects, K === null ? c.effects = [E] : K.push(E));
        } else he = { eventTime: he, lane: K, tag: E.tag, payload: E.payload, callback: E.callback, next: null }, J === null ? (U = J = he, b = ee) : J = J.next = he, m |= K;
        if (E = E.next, E === null) {
          if (E = c.shared.pending, E === null) break;
          K = E, E = K.next, K.next = null, c.lastBaseUpdate = K, c.shared.pending = null;
        }
      } while (!0);
      if (J === null && (b = ee), c.baseState = b, c.firstBaseUpdate = U, c.lastBaseUpdate = J, r = c.shared.interleaved, r !== null) {
        c = r;
        do
          m |= c.lane, c = c.next;
        while (c !== r);
      } else d === null && (c.shared.lanes = 0);
      Su |= m, n.lanes = m, n.memoizedState = ee;
    }
  }
  function Rd(n, r, l) {
    if (n = r.effects, r.effects = null, n !== null) for (r = 0; r < n.length; r++) {
      var o = n[r], c = o.callback;
      if (c !== null) {
        if (o.callback = null, o = l, typeof c != "function") throw Error(L(191, c));
        c.call(o);
      }
    }
  }
  var uo = {}, Ci = Kr(uo), hs = Kr(uo), ms = Kr(uo);
  function cu(n) {
    if (n === uo) throw Error(L(174));
    return n;
  }
  function Td(n, r) {
    switch (rn(ms, r), rn(hs, n), rn(Ci, uo), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : lr(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = lr(r, n);
    }
    Jt(Ci), rn(Ci, r);
  }
  function oo() {
    Jt(Ci), Jt(hs), Jt(ms);
  }
  function bd(n) {
    cu(ms.current);
    var r = cu(Ci.current), l = lr(r, n.type);
    r !== l && (rn(hs, n), rn(Ci, l));
  }
  function _d(n) {
    hs.current === n && (Jt(Ci), Jt(hs));
  }
  var gn = Kr(0);
  function xc(n) {
    for (var r = n; r !== null; ) {
      if (r.tag === 13) {
        var l = r.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || l.data === "$?" || l.data === "$!")) return r;
      } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
        if (r.flags & 128) return r;
      } else if (r.child !== null) {
        r.child.return = r, r = r.child;
        continue;
      }
      if (r === n) break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === n) return null;
        r = r.return;
      }
      r.sibling.return = r.return, r = r.sibling;
    }
    return null;
  }
  var wd = [];
  function ys() {
    for (var n = 0; n < wd.length; n++) wd[n]._workInProgressVersionPrimary = null;
    wd.length = 0;
  }
  var Ue = $e.ReactCurrentDispatcher, St = $e.ReactCurrentBatchConfig, _t = 0, rt = null, Zt = null, Yn = null, kc = !1, gs = !1, Ss = 0, xd = 0;
  function Y() {
    throw Error(L(321));
  }
  function Hn(n, r) {
    if (r === null) return !1;
    for (var l = 0; l < r.length && l < n.length; l++) if (!Za(n[l], r[l])) return !1;
    return !0;
  }
  function Qe(n, r, l, o, c, d) {
    if (_t = d, rt = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, Ue.current = n === null || n.memoizedState === null ? $c : Yc, n = l(o, c), gs) {
      d = 0;
      do {
        if (gs = !1, Ss = 0, 25 <= d) throw Error(L(301));
        d += 1, Yn = Zt = null, r.updateQueue = null, Ue.current = bs, n = l(o, c);
      } while (gs);
    }
    if (Ue.current = Qt, r = Zt !== null && Zt.next !== null, _t = 0, Yn = Zt = rt = null, kc = !1, r) throw Error(L(300));
    return n;
  }
  function bl() {
    var n = Ss !== 0;
    return Ss = 0, n;
  }
  function Zn() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Yn === null ? rt.memoizedState = Yn = n : Yn = Yn.next = n, Yn;
  }
  function er() {
    if (Zt === null) {
      var n = rt.alternate;
      n = n !== null ? n.memoizedState : null;
    } else n = Zt.next;
    var r = Yn === null ? rt.memoizedState : Yn.next;
    if (r !== null) Yn = r, Zt = n;
    else {
      if (n === null) throw Error(L(310));
      Zt = n, n = { memoizedState: Zt.memoizedState, baseState: Zt.baseState, baseQueue: Zt.baseQueue, queue: Zt.queue, next: null }, Yn === null ? rt.memoizedState = Yn = n : Yn = Yn.next = n;
    }
    return Yn;
  }
  function ea(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function fu(n) {
    var r = er(), l = r.queue;
    if (l === null) throw Error(L(311));
    l.lastRenderedReducer = n;
    var o = Zt, c = o.baseQueue, d = l.pending;
    if (d !== null) {
      if (c !== null) {
        var m = c.next;
        c.next = d.next, d.next = m;
      }
      o.baseQueue = c = d, l.pending = null;
    }
    if (c !== null) {
      d = c.next, o = o.baseState;
      var E = m = null, b = null, U = d;
      do {
        var J = U.lane;
        if ((_t & J) === J) b !== null && (b = b.next = { lane: 0, action: U.action, hasEagerState: U.hasEagerState, eagerState: U.eagerState, next: null }), o = U.hasEagerState ? U.eagerState : n(o, U.action);
        else {
          var ee = {
            lane: J,
            action: U.action,
            hasEagerState: U.hasEagerState,
            eagerState: U.eagerState,
            next: null
          };
          b === null ? (E = b = ee, m = o) : b = b.next = ee, rt.lanes |= J, Su |= J;
        }
        U = U.next;
      } while (U !== null && U !== d);
      b === null ? m = o : b.next = E, Za(o, r.memoizedState) || (tr = !0), r.memoizedState = o, r.baseState = m, r.baseQueue = b, l.lastRenderedState = o;
    }
    if (n = l.interleaved, n !== null) {
      c = n;
      do
        d = c.lane, rt.lanes |= d, Su |= d, c = c.next;
      while (c !== n);
    } else c === null && (l.lanes = 0);
    return [r.memoizedState, l.dispatch];
  }
  function _l(n) {
    var r = er(), l = r.queue;
    if (l === null) throw Error(L(311));
    l.lastRenderedReducer = n;
    var o = l.dispatch, c = l.pending, d = r.memoizedState;
    if (c !== null) {
      l.pending = null;
      var m = c = c.next;
      do
        d = n(d, m.action), m = m.next;
      while (m !== c);
      Za(d, r.memoizedState) || (tr = !0), r.memoizedState = d, r.baseQueue === null && (r.baseState = d), l.lastRenderedState = d;
    }
    return [d, o];
  }
  function so() {
  }
  function Dc(n, r) {
    var l = rt, o = er(), c = r(), d = !Za(o.memoizedState, c);
    if (d && (o.memoizedState = c, tr = !0), o = o.queue, Es(Nc.bind(null, l, o, n), [n]), o.getSnapshot !== r || d || Yn !== null && Yn.memoizedState.tag & 1) {
      if (l.flags |= 2048, du(9, Lc.bind(null, l, o, c, r), void 0, null), Pn === null) throw Error(L(349));
      _t & 30 || Oc(l, r, c);
    }
    return c;
  }
  function Oc(n, r, l) {
    n.flags |= 16384, n = { getSnapshot: r, value: l }, r = rt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, rt.updateQueue = r, r.stores = [n]) : (l = r.stores, l === null ? r.stores = [n] : l.push(n));
  }
  function Lc(n, r, l, o) {
    r.value = l, r.getSnapshot = o, Mc(r) && zc(n);
  }
  function Nc(n, r, l) {
    return l(function() {
      Mc(r) && zc(n);
    });
  }
  function Mc(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var l = r();
      return !Za(n, l);
    } catch {
      return !0;
    }
  }
  function zc(n) {
    var r = Ei(n, 1);
    r !== null && Ca(r, n, 1, -1);
  }
  function Uc(n) {
    var r = Zn();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: ea, lastRenderedState: n }, r.queue = n, n = n.dispatch = Ts.bind(null, rt, n), [r.memoizedState, n];
  }
  function du(n, r, l, o) {
    return n = { tag: n, create: r, destroy: l, deps: o, next: null }, r = rt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, rt.updateQueue = r, r.lastEffect = n.next = n) : (l = r.lastEffect, l === null ? r.lastEffect = n.next = n : (o = l.next, l.next = n, n.next = o, r.lastEffect = n)), n;
  }
  function Ac() {
    return er().memoizedState;
  }
  function co(n, r, l, o) {
    var c = Zn();
    rt.flags |= n, c.memoizedState = du(1 | r, l, void 0, o === void 0 ? null : o);
  }
  function fo(n, r, l, o) {
    var c = er();
    o = o === void 0 ? null : o;
    var d = void 0;
    if (Zt !== null) {
      var m = Zt.memoizedState;
      if (d = m.destroy, o !== null && Hn(o, m.deps)) {
        c.memoizedState = du(r, l, d, o);
        return;
      }
    }
    rt.flags |= n, c.memoizedState = du(1 | r, l, d, o);
  }
  function jc(n, r) {
    return co(8390656, 8, n, r);
  }
  function Es(n, r) {
    return fo(2048, 8, n, r);
  }
  function Fc(n, r) {
    return fo(4, 2, n, r);
  }
  function Hc(n, r) {
    return fo(4, 4, n, r);
  }
  function Cs(n, r) {
    if (typeof r == "function") return n = n(), r(n), function() {
      r(null);
    };
    if (r != null) return n = n(), r.current = n, function() {
      r.current = null;
    };
  }
  function pu(n, r, l) {
    return l = l != null ? l.concat([n]) : null, fo(4, 4, Cs.bind(null, r, n), l);
  }
  function Rs() {
  }
  function Pc(n, r) {
    var l = er();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && Hn(r, o[1]) ? o[0] : (l.memoizedState = [n, r], n);
  }
  function Vc(n, r) {
    var l = er();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && Hn(r, o[1]) ? o[0] : (n = n(), l.memoizedState = [n, r], n);
  }
  function Bc(n, r, l) {
    return _t & 21 ? (Za(l, r) || (l = ql(), rt.lanes |= l, Su |= l, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, tr = !0), n.memoizedState = l);
  }
  function Fv(n, r) {
    var l = xt;
    xt = l !== 0 && 4 > l ? l : 4, n(!0);
    var o = St.transition;
    St.transition = {};
    try {
      n(!1), r();
    } finally {
      xt = l, St.transition = o;
    }
  }
  function po() {
    return er().memoizedState;
  }
  function Hv(n, r, l) {
    var o = Ea(n);
    if (l = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null }, wl(n)) ya(r, l);
    else if (l = Uv(n, r, l, o), l !== null) {
      var c = an();
      Ca(l, n, o, c), Pv(l, r, o);
    }
  }
  function Ts(n, r, l) {
    var o = Ea(n), c = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null };
    if (wl(n)) ya(r, c);
    else {
      var d = n.alternate;
      if (n.lanes === 0 && (d === null || d.lanes === 0) && (d = r.lastRenderedReducer, d !== null)) try {
        var m = r.lastRenderedState, E = d(m, l);
        if (c.hasEagerState = !0, c.eagerState = E, Za(E, m)) {
          var b = r.interleaved;
          b === null ? (c.next = c, Cd(r)) : (c.next = b.next, b.next = c), r.interleaved = c;
          return;
        }
      } catch {
      } finally {
      }
      l = Uv(n, r, c, o), l !== null && (c = an(), Ca(l, n, o, c), Pv(l, r, o));
    }
  }
  function wl(n) {
    var r = n.alternate;
    return n === rt || r !== null && r === rt;
  }
  function ya(n, r) {
    gs = kc = !0;
    var l = n.pending;
    l === null ? r.next = r : (r.next = l.next, l.next = r), n.pending = r;
  }
  function Pv(n, r, l) {
    if (l & 4194240) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, Qo(n, l);
    }
  }
  var Qt = { readContext: It, useCallback: Y, useContext: Y, useEffect: Y, useImperativeHandle: Y, useInsertionEffect: Y, useLayoutEffect: Y, useMemo: Y, useReducer: Y, useRef: Y, useState: Y, useDebugValue: Y, useDeferredValue: Y, useTransition: Y, useMutableSource: Y, useSyncExternalStore: Y, useId: Y, unstable_isNewReconciler: !1 }, $c = { readContext: It, useCallback: function(n, r) {
    return Zn().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: It, useEffect: jc, useImperativeHandle: function(n, r, l) {
    return l = l != null ? l.concat([n]) : null, co(
      4194308,
      4,
      Cs.bind(null, r, n),
      l
    );
  }, useLayoutEffect: function(n, r) {
    return co(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return co(4, 2, n, r);
  }, useMemo: function(n, r) {
    var l = Zn();
    return r = r === void 0 ? null : r, n = n(), l.memoizedState = [n, r], n;
  }, useReducer: function(n, r, l) {
    var o = Zn();
    return r = l !== void 0 ? l(r) : r, o.memoizedState = o.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, o.queue = n, n = n.dispatch = Hv.bind(null, rt, n), [o.memoizedState, n];
  }, useRef: function(n) {
    var r = Zn();
    return n = { current: n }, r.memoizedState = n;
  }, useState: Uc, useDebugValue: Rs, useDeferredValue: function(n) {
    return Zn().memoizedState = n;
  }, useTransition: function() {
    var n = Uc(!1), r = n[0];
    return n = Fv.bind(null, n[1]), Zn().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, l) {
    var o = rt, c = Zn();
    if (vn) {
      if (l === void 0) throw Error(L(407));
      l = l();
    } else {
      if (l = r(), Pn === null) throw Error(L(349));
      _t & 30 || Oc(o, r, l);
    }
    c.memoizedState = l;
    var d = { value: l, getSnapshot: r };
    return c.queue = d, jc(Nc.bind(
      null,
      o,
      d,
      n
    ), [n]), o.flags |= 2048, du(9, Lc.bind(null, o, d, l, r), void 0, null), l;
  }, useId: function() {
    var n = Zn(), r = Pn.identifierPrefix;
    if (vn) {
      var l = Si, o = zr;
      l = (o & ~(1 << 32 - Or(o) - 1)).toString(32) + l, r = ":" + r + "R" + l, l = Ss++, 0 < l && (r += "H" + l.toString(32)), r += ":";
    } else l = xd++, r = ":" + r + "r" + l.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, Yc = {
    readContext: It,
    useCallback: Pc,
    useContext: It,
    useEffect: Es,
    useImperativeHandle: pu,
    useInsertionEffect: Fc,
    useLayoutEffect: Hc,
    useMemo: Vc,
    useReducer: fu,
    useRef: Ac,
    useState: function() {
      return fu(ea);
    },
    useDebugValue: Rs,
    useDeferredValue: function(n) {
      var r = er();
      return Bc(r, Zt.memoizedState, n);
    },
    useTransition: function() {
      var n = fu(ea)[0], r = er().memoizedState;
      return [n, r];
    },
    useMutableSource: so,
    useSyncExternalStore: Dc,
    useId: po,
    unstable_isNewReconciler: !1
  }, bs = { readContext: It, useCallback: Pc, useContext: It, useEffect: Es, useImperativeHandle: pu, useInsertionEffect: Fc, useLayoutEffect: Hc, useMemo: Vc, useReducer: _l, useRef: Ac, useState: function() {
    return _l(ea);
  }, useDebugValue: Rs, useDeferredValue: function(n) {
    var r = er();
    return Zt === null ? r.memoizedState = n : Bc(r, Zt.memoizedState, n);
  }, useTransition: function() {
    var n = _l(ea)[0], r = er().memoizedState;
    return [n, r];
  }, useMutableSource: so, useSyncExternalStore: Dc, useId: po, unstable_isNewReconciler: !1 };
  function ta(n, r) {
    if (n && n.defaultProps) {
      r = F({}, r), n = n.defaultProps;
      for (var l in n) r[l] === void 0 && (r[l] = n[l]);
      return r;
    }
    return r;
  }
  function kd(n, r, l, o) {
    r = n.memoizedState, l = l(o, r), l = l == null ? r : F({}, r, l), n.memoizedState = l, n.lanes === 0 && (n.updateQueue.baseState = l);
  }
  var Ic = { isMounted: function(n) {
    return (n = n._reactInternals) ? fe(n) === n : !1;
  }, enqueueSetState: function(n, r, l) {
    n = n._reactInternals;
    var o = an(), c = Ea(n), d = Wi(o, c);
    d.payload = r, l != null && (d.callback = l), r = Tl(n, d, c), r !== null && (Ca(r, n, c, o), _c(r, n, c));
  }, enqueueReplaceState: function(n, r, l) {
    n = n._reactInternals;
    var o = an(), c = Ea(n), d = Wi(o, c);
    d.tag = 1, d.payload = r, l != null && (d.callback = l), r = Tl(n, d, c), r !== null && (Ca(r, n, c, o), _c(r, n, c));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var l = an(), o = Ea(n), c = Wi(l, o);
    c.tag = 2, r != null && (c.callback = r), r = Tl(n, c, o), r !== null && (Ca(r, n, o, l), _c(r, n, o));
  } };
  function Vv(n, r, l, o, c, d, m) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(o, d, m) : r.prototype && r.prototype.isPureReactComponent ? !Zo(l, o) || !Zo(c, d) : !0;
  }
  function Bv(n, r, l) {
    var o = !1, c = gt, d = r.contextType;
    return typeof d == "object" && d !== null ? d = It(d) : (c = jn(r) ? za : Rn.current, o = r.contextTypes, d = (o = o != null) ? ha(n, c) : gt), r = new r(l, d), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = Ic, n.stateNode = r, r._reactInternals = n, o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = d), r;
  }
  function Qc(n, r, l, o) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(l, o), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(l, o), r.state !== n && Ic.enqueueReplaceState(r, r.state, null);
  }
  function Dd(n, r, l, o) {
    var c = n.stateNode;
    c.props = l, c.state = n.memoizedState, c.refs = {}, Rl(n);
    var d = r.contextType;
    typeof d == "object" && d !== null ? c.context = It(d) : (d = jn(r) ? za : Rn.current, c.context = ha(n, d)), c.state = n.memoizedState, d = r.getDerivedStateFromProps, typeof d == "function" && (kd(n, r, d, l), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && Ic.enqueueReplaceState(c, c.state, null), wc(n, l, c, o), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function xl(n, r) {
    try {
      var l = "", o = r;
      do
        l += Se(o), o = o.return;
      while (o);
      var c = l;
    } catch (d) {
      c = `
Error generating stack: ` + d.message + `
` + d.stack;
    }
    return { value: n, source: r, stack: c, digest: null };
  }
  function Wc(n, r, l) {
    return { value: n, source: null, stack: l ?? null, digest: r ?? null };
  }
  function Od(n, r) {
    try {
      console.error(r.value);
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  var ry = typeof WeakMap == "function" ? WeakMap : Map;
  function _s(n, r, l) {
    l = Wi(-1, l), l.tag = 3, l.payload = { element: null };
    var o = r.value;
    return l.callback = function() {
      Dl || (Dl = !0, Ms = o), Od(n, r);
    }, l;
  }
  function $v(n, r, l) {
    l = Wi(-1, l), l.tag = 3;
    var o = n.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var c = r.value;
      l.payload = function() {
        return o(c);
      }, l.callback = function() {
        Od(n, r);
      };
    }
    var d = n.stateNode;
    return d !== null && typeof d.componentDidCatch == "function" && (l.callback = function() {
      Od(n, r), typeof o != "function" && (Ha === null ? Ha = /* @__PURE__ */ new Set([this]) : Ha.add(this));
      var m = r.stack;
      this.componentDidCatch(r.value, { componentStack: m !== null ? m : "" });
    }), l;
  }
  function Ld(n, r, l) {
    var o = n.pingCache;
    if (o === null) {
      o = n.pingCache = new ry();
      var c = /* @__PURE__ */ new Set();
      o.set(r, c);
    } else c = o.get(r), c === void 0 && (c = /* @__PURE__ */ new Set(), o.set(r, c));
    c.has(l) || (c.add(l), n = Yd.bind(null, n, r, l), r.then(n, n));
  }
  function Nd(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r) return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function Yv(n, r, l, o, c) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = c, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, l.flags |= 131072, l.flags &= -52805, l.tag === 1 && (l.alternate === null ? l.tag = 17 : (r = Wi(-1, 1), r.tag = 2, Tl(l, r, 1))), l.lanes |= 1), n);
  }
  var vu = $e.ReactCurrentOwner, tr = !1;
  function xn(n, r, l, o) {
    r.child = n === null ? sr(r, null, l, o) : ri(r, n.child, l, o);
  }
  function qc(n, r, l, o, c) {
    l = l.render;
    var d = r.ref;
    return lo(r, c), o = Qe(n, r, l, o, d, c), l = bl(), n !== null && !tr ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, cr(n, r, c)) : (vn && l && dd(r), r.flags |= 1, xn(n, r, o, c), r.child);
  }
  function na(n, r, l, o, c) {
    if (n === null) {
      var d = l.type;
      return typeof d == "function" && !Qd(d) && d.defaultProps === void 0 && l.compare === null && l.defaultProps === void 0 ? (r.tag = 15, r.type = d, hu(n, r, d, o, c)) : (n = cf(l.type, null, o, r, r.mode, c), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (d = n.child, !(n.lanes & c)) {
      var m = d.memoizedProps;
      if (l = l.compare, l = l !== null ? l : Zo, l(m, o) && n.ref === r.ref) return cr(n, r, c);
    }
    return r.flags |= 1, n = Nl(d, o), n.ref = r.ref, n.return = r, r.child = n;
  }
  function hu(n, r, l, o, c) {
    if (n !== null) {
      var d = n.memoizedProps;
      if (Zo(d, o) && n.ref === r.ref) if (tr = !1, r.pendingProps = o = d, (n.lanes & c) !== 0) n.flags & 131072 && (tr = !0);
      else return r.lanes = n.lanes, cr(n, r, c);
    }
    return Gc(n, r, l, o, c);
  }
  function lt(n, r, l) {
    var o = r.pendingProps, c = o.children, d = n !== null ? n.memoizedState : null;
    if (o.mode === "hidden") if (!(r.mode & 1)) r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, rn(yo, Sa), Sa |= l;
    else {
      if (!(l & 1073741824)) return n = d !== null ? d.baseLanes | l : l, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, rn(yo, Sa), Sa |= n, null;
      r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, o = d !== null ? d.baseLanes : l, rn(yo, Sa), Sa |= o;
    }
    else d !== null ? (o = d.baseLanes | l, r.memoizedState = null) : o = l, rn(yo, Sa), Sa |= o;
    return xn(n, r, c, l), r.child;
  }
  function ws(n, r) {
    var l = r.ref;
    (n === null && l !== null || n !== null && n.ref !== l) && (r.flags |= 512, r.flags |= 2097152);
  }
  function Gc(n, r, l, o, c) {
    var d = jn(l) ? za : Rn.current;
    return d = ha(r, d), lo(r, c), l = Qe(n, r, l, o, d, c), o = bl(), n !== null && !tr ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, cr(n, r, c)) : (vn && o && dd(r), r.flags |= 1, xn(n, r, l, c), r.child);
  }
  function ay(n, r, l, o, c) {
    if (jn(l)) {
      var d = !0;
      lu(r);
    } else d = !1;
    if (lo(r, c), r.stateNode === null) ja(n, r), Bv(r, l, o), Dd(r, l, o, c), o = !0;
    else if (n === null) {
      var m = r.stateNode, E = r.memoizedProps;
      m.props = E;
      var b = m.context, U = l.contextType;
      typeof U == "object" && U !== null ? U = It(U) : (U = jn(l) ? za : Rn.current, U = ha(r, U));
      var J = l.getDerivedStateFromProps, ee = typeof J == "function" || typeof m.getSnapshotBeforeUpdate == "function";
      ee || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (E !== o || b !== U) && Qc(r, m, o, U), Aa = !1;
      var K = r.memoizedState;
      m.state = K, wc(r, o, m, c), b = r.memoizedState, E !== o || K !== b || An.current || Aa ? (typeof J == "function" && (kd(r, l, J, o), b = r.memoizedState), (E = Aa || Vv(r, l, E, o, K, b, U)) ? (ee || typeof m.UNSAFE_componentWillMount != "function" && typeof m.componentWillMount != "function" || (typeof m.componentWillMount == "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && m.UNSAFE_componentWillMount()), typeof m.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = o, r.memoizedState = b), m.props = o, m.state = b, m.context = U, o = E) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), o = !1);
    } else {
      m = r.stateNode, Av(n, r), E = r.memoizedProps, U = r.type === r.elementType ? E : ta(r.type, E), m.props = U, ee = r.pendingProps, K = m.context, b = l.contextType, typeof b == "object" && b !== null ? b = It(b) : (b = jn(l) ? za : Rn.current, b = ha(r, b));
      var he = l.getDerivedStateFromProps;
      (J = typeof he == "function" || typeof m.getSnapshotBeforeUpdate == "function") || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (E !== ee || K !== b) && Qc(r, m, o, b), Aa = !1, K = r.memoizedState, m.state = K, wc(r, o, m, c);
      var _e = r.memoizedState;
      E !== ee || K !== _e || An.current || Aa ? (typeof he == "function" && (kd(r, l, he, o), _e = r.memoizedState), (U = Aa || Vv(r, l, U, o, K, _e, b) || !1) ? (J || typeof m.UNSAFE_componentWillUpdate != "function" && typeof m.componentWillUpdate != "function" || (typeof m.componentWillUpdate == "function" && m.componentWillUpdate(o, _e, b), typeof m.UNSAFE_componentWillUpdate == "function" && m.UNSAFE_componentWillUpdate(o, _e, b)), typeof m.componentDidUpdate == "function" && (r.flags |= 4), typeof m.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof m.componentDidUpdate != "function" || E === n.memoizedProps && K === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || E === n.memoizedProps && K === n.memoizedState || (r.flags |= 1024), r.memoizedProps = o, r.memoizedState = _e), m.props = o, m.state = _e, m.context = b, o = U) : (typeof m.componentDidUpdate != "function" || E === n.memoizedProps && K === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || E === n.memoizedProps && K === n.memoizedState || (r.flags |= 1024), o = !1);
    }
    return Md(n, r, l, o, d, c);
  }
  function Md(n, r, l, o, c, d) {
    ws(n, r);
    var m = (r.flags & 128) !== 0;
    if (!o && !m) return c && Ua(r, l, !1), cr(n, r, d);
    o = r.stateNode, vu.current = r;
    var E = m && typeof l.getDerivedStateFromError != "function" ? null : o.render();
    return r.flags |= 1, n !== null && m ? (r.child = ri(r, n.child, null, d), r.child = ri(r, null, E, d)) : xn(n, r, E, d), r.memoizedState = o.state, c && Ua(r, l, !0), r.child;
  }
  function Xc(n) {
    var r = n.stateNode;
    r.pendingContext ? Tc(n, r.pendingContext, r.pendingContext !== r.context) : r.context && Tc(n, r.context, !1), Td(n, r.containerInfo);
  }
  function vo(n, r, l, o, c) {
    return Qi(), ps(c), r.flags |= 256, xn(n, r, l, o), r.child;
  }
  var zd = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Kc(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function Iv(n, r, l) {
    var o = r.pendingProps, c = gn.current, d = !1, m = (r.flags & 128) !== 0, E;
    if ((E = m) || (E = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), E ? (d = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), rn(gn, c & 1), n === null)
      return md(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (m = o.children, n = o.fallback, d ? (o = r.mode, d = r.child, m = { mode: "hidden", children: m }, !(o & 1) && d !== null ? (d.childLanes = 0, d.pendingProps = m) : d = To(m, o, 0, null), n = Ml(n, o, l, null), d.return = r, n.return = r, d.sibling = n, r.child = d, r.child.memoizedState = Kc(l), r.memoizedState = zd, n) : xs(r, m));
    if (c = n.memoizedState, c !== null && (E = c.dehydrated, E !== null)) return Qv(n, r, m, o, E, c, l);
    if (d) {
      d = o.fallback, m = r.mode, c = n.child, E = c.sibling;
      var b = { mode: "hidden", children: o.children };
      return !(m & 1) && r.child !== c ? (o = r.child, o.childLanes = 0, o.pendingProps = b, r.deletions = null) : (o = Nl(c, b), o.subtreeFlags = c.subtreeFlags & 14680064), E !== null ? d = Nl(E, d) : (d = Ml(d, m, l, null), d.flags |= 2), d.return = r, o.return = r, o.sibling = d, r.child = o, o = d, d = r.child, m = n.child.memoizedState, m = m === null ? Kc(l) : { baseLanes: m.baseLanes | l, cachePool: null, transitions: m.transitions }, d.memoizedState = m, d.childLanes = n.childLanes & ~l, r.memoizedState = zd, o;
    }
    return d = n.child, n = d.sibling, o = Nl(d, { mode: "visible", children: o.children }), !(r.mode & 1) && (o.lanes = l), o.return = r, o.sibling = null, n !== null && (l = r.deletions, l === null ? (r.deletions = [n], r.flags |= 16) : l.push(n)), r.child = o, r.memoizedState = null, o;
  }
  function xs(n, r) {
    return r = To({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function Jc(n, r, l, o) {
    return o !== null && ps(o), ri(r, n.child, null, l), n = xs(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function Qv(n, r, l, o, c, d, m) {
    if (l)
      return r.flags & 256 ? (r.flags &= -257, o = Wc(Error(L(422))), Jc(n, r, m, o)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (d = o.fallback, c = r.mode, o = To({ mode: "visible", children: o.children }, c, 0, null), d = Ml(d, c, m, null), d.flags |= 2, o.return = r, d.return = r, o.sibling = d, r.child = o, r.mode & 1 && ri(r, n.child, null, m), r.child.memoizedState = Kc(m), r.memoizedState = zd, d);
    if (!(r.mode & 1)) return Jc(n, r, m, null);
    if (c.data === "$!") {
      if (o = c.nextSibling && c.nextSibling.dataset, o) var E = o.dgst;
      return o = E, d = Error(L(419)), o = Wc(d, o, void 0), Jc(n, r, m, o);
    }
    if (E = (m & n.childLanes) !== 0, tr || E) {
      if (o = Pn, o !== null) {
        switch (m & -m) {
          case 4:
            c = 2;
            break;
          case 16:
            c = 8;
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
            c = 32;
            break;
          case 536870912:
            c = 268435456;
            break;
          default:
            c = 0;
        }
        c = c & (o.suspendedLanes | m) ? 0 : c, c !== 0 && c !== d.retryLane && (d.retryLane = c, Ei(n, c), Ca(o, n, c, -1));
      }
      return Bd(), o = Wc(Error(L(421))), Jc(n, r, m, o);
    }
    return c.data === "$?" ? (r.flags |= 128, r.child = n.child, r = cy.bind(null, n), c._reactRetry = r, null) : (n = d.treeContext, Zr = ei(c.nextSibling), Jr = r, vn = !0, ni = null, n !== null && (or[Fn++] = zr, or[Fn++] = Si, or[Fn++] = uu, zr = n.id, Si = n.overflow, uu = r), r = xs(r, o.children), r.flags |= 4096, r);
  }
  function Ud(n, r, l) {
    n.lanes |= r;
    var o = n.alternate;
    o !== null && (o.lanes |= r), Ed(n.return, r, l);
  }
  function Zc(n, r, l, o, c) {
    var d = n.memoizedState;
    d === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: o, tail: l, tailMode: c } : (d.isBackwards = r, d.rendering = null, d.renderingStartTime = 0, d.last = o, d.tail = l, d.tailMode = c);
  }
  function ra(n, r, l) {
    var o = r.pendingProps, c = o.revealOrder, d = o.tail;
    if (xn(n, r, o.children, l), o = gn.current, o & 2) o = o & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && n.flags & 128) e: for (n = r.child; n !== null; ) {
        if (n.tag === 13) n.memoizedState !== null && Ud(n, l, r);
        else if (n.tag === 19) Ud(n, l, r);
        else if (n.child !== null) {
          n.child.return = n, n = n.child;
          continue;
        }
        if (n === r) break e;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === r) break e;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
      o &= 1;
    }
    if (rn(gn, o), !(r.mode & 1)) r.memoizedState = null;
    else switch (c) {
      case "forwards":
        for (l = r.child, c = null; l !== null; ) n = l.alternate, n !== null && xc(n) === null && (c = l), l = l.sibling;
        l = c, l === null ? (c = r.child, r.child = null) : (c = l.sibling, l.sibling = null), Zc(r, !1, c, l, d);
        break;
      case "backwards":
        for (l = null, c = r.child, r.child = null; c !== null; ) {
          if (n = c.alternate, n !== null && xc(n) === null) {
            r.child = c;
            break;
          }
          n = c.sibling, c.sibling = l, l = c, c = n;
        }
        Zc(r, !0, l, null, d);
        break;
      case "together":
        Zc(r, !1, null, null, void 0);
        break;
      default:
        r.memoizedState = null;
    }
    return r.child;
  }
  function ja(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function cr(n, r, l) {
    if (n !== null && (r.dependencies = n.dependencies), Su |= r.lanes, !(l & r.childLanes)) return null;
    if (n !== null && r.child !== n.child) throw Error(L(153));
    if (r.child !== null) {
      for (n = r.child, l = Nl(n, n.pendingProps), r.child = l, l.return = r; n.sibling !== null; ) n = n.sibling, l = l.sibling = Nl(n, n.pendingProps), l.return = r;
      l.sibling = null;
    }
    return r.child;
  }
  function ef(n, r, l) {
    switch (r.tag) {
      case 3:
        Xc(r), Qi();
        break;
      case 5:
        bd(r);
        break;
      case 1:
        jn(r.type) && lu(r);
        break;
      case 4:
        Td(r, r.stateNode.containerInfo);
        break;
      case 10:
        var o = r.type._context, c = r.memoizedProps.value;
        rn(oe, o._currentValue), o._currentValue = c;
        break;
      case 13:
        if (o = r.memoizedState, o !== null)
          return o.dehydrated !== null ? (rn(gn, gn.current & 1), r.flags |= 128, null) : l & r.child.childLanes ? Iv(n, r, l) : (rn(gn, gn.current & 1), n = cr(n, r, l), n !== null ? n.sibling : null);
        rn(gn, gn.current & 1);
        break;
      case 19:
        if (o = (l & r.childLanes) !== 0, n.flags & 128) {
          if (o) return ra(n, r, l);
          r.flags |= 128;
        }
        if (c = r.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), rn(gn, gn.current), o) break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, lt(n, r, l);
    }
    return cr(n, r, l);
  }
  var ho, ga, In, Wv;
  ho = function(n, r) {
    for (var l = r.child; l !== null; ) {
      if (l.tag === 5 || l.tag === 6) n.appendChild(l.stateNode);
      else if (l.tag !== 4 && l.child !== null) {
        l.child.return = l, l = l.child;
        continue;
      }
      if (l === r) break;
      for (; l.sibling === null; ) {
        if (l.return === null || l.return === r) return;
        l = l.return;
      }
      l.sibling.return = l.return, l = l.sibling;
    }
  }, ga = function() {
  }, In = function(n, r, l, o) {
    var c = n.memoizedProps;
    if (c !== o) {
      n = r.stateNode, cu(Ci.current);
      var d = null;
      switch (l) {
        case "input":
          c = Ln(n, c), o = Ln(n, o), d = [];
          break;
        case "select":
          c = F({}, c, { value: void 0 }), o = F({}, o, { value: void 0 }), d = [];
          break;
        case "textarea":
          c = Gn(n, c), o = Gn(n, o), d = [];
          break;
        default:
          typeof c.onClick != "function" && typeof o.onClick == "function" && (n.onclick = Sc);
      }
      fn(l, o);
      var m;
      l = null;
      for (U in c) if (!o.hasOwnProperty(U) && c.hasOwnProperty(U) && c[U] != null) if (U === "style") {
        var E = c[U];
        for (m in E) E.hasOwnProperty(m) && (l || (l = {}), l[m] = "");
      } else U !== "dangerouslySetInnerHTML" && U !== "children" && U !== "suppressContentEditableWarning" && U !== "suppressHydrationWarning" && U !== "autoFocus" && (et.hasOwnProperty(U) ? d || (d = []) : (d = d || []).push(U, null));
      for (U in o) {
        var b = o[U];
        if (E = c != null ? c[U] : void 0, o.hasOwnProperty(U) && b !== E && (b != null || E != null)) if (U === "style") if (E) {
          for (m in E) !E.hasOwnProperty(m) || b && b.hasOwnProperty(m) || (l || (l = {}), l[m] = "");
          for (m in b) b.hasOwnProperty(m) && E[m] !== b[m] && (l || (l = {}), l[m] = b[m]);
        } else l || (d || (d = []), d.push(
          U,
          l
        )), l = b;
        else U === "dangerouslySetInnerHTML" ? (b = b ? b.__html : void 0, E = E ? E.__html : void 0, b != null && E !== b && (d = d || []).push(U, b)) : U === "children" ? typeof b != "string" && typeof b != "number" || (d = d || []).push(U, "" + b) : U !== "suppressContentEditableWarning" && U !== "suppressHydrationWarning" && (et.hasOwnProperty(U) ? (b != null && U === "onScroll" && $t("scroll", n), d || E === b || (d = [])) : (d = d || []).push(U, b));
      }
      l && (d = d || []).push("style", l);
      var U = d;
      (r.updateQueue = U) && (r.flags |= 4);
    }
  }, Wv = function(n, r, l, o) {
    l !== o && (r.flags |= 4);
  };
  function ks(n, r) {
    if (!vn) switch (n.tailMode) {
      case "hidden":
        r = n.tail;
        for (var l = null; r !== null; ) r.alternate !== null && (l = r), r = r.sibling;
        l === null ? n.tail = null : l.sibling = null;
        break;
      case "collapsed":
        l = n.tail;
        for (var o = null; l !== null; ) l.alternate !== null && (o = l), l = l.sibling;
        o === null ? r || n.tail === null ? n.tail = null : n.tail.sibling = null : o.sibling = null;
    }
  }
  function xr(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, l = 0, o = 0;
    if (r) for (var c = n.child; c !== null; ) l |= c.lanes | c.childLanes, o |= c.subtreeFlags & 14680064, o |= c.flags & 14680064, c.return = n, c = c.sibling;
    else for (c = n.child; c !== null; ) l |= c.lanes | c.childLanes, o |= c.subtreeFlags, o |= c.flags, c.return = n, c = c.sibling;
    return n.subtreeFlags |= o, n.childLanes = l, r;
  }
  function Ad(n, r, l) {
    var o = r.pendingProps;
    switch (bc(r), r.tag) {
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
        return xr(r), null;
      case 1:
        return jn(r.type) && gi(), xr(r), null;
      case 3:
        return o = r.stateNode, oo(), Jt(An), Jt(Rn), ys(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (n === null || n.child === null) && (wn(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, ni !== null && (js(ni), ni = null))), ga(n, r), xr(r), null;
      case 5:
        _d(r);
        var c = cu(ms.current);
        if (l = r.type, n !== null && r.stateNode != null) In(n, r, l, o, c), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!o) {
            if (r.stateNode === null) throw Error(L(166));
            return xr(r), null;
          }
          if (n = cu(Ci.current), wn(r)) {
            o = r.stateNode, l = r.type;
            var d = r.memoizedProps;
            switch (o[Ma] = r, o[ss] = d, n = (r.mode & 1) !== 0, l) {
              case "dialog":
                $t("cancel", o), $t("close", o);
                break;
              case "iframe":
              case "object":
              case "embed":
                $t("load", o);
                break;
              case "video":
              case "audio":
                for (c = 0; c < as.length; c++) $t(as[c], o);
                break;
              case "source":
                $t("error", o);
                break;
              case "img":
              case "image":
              case "link":
                $t(
                  "error",
                  o
                ), $t("load", o);
                break;
              case "details":
                $t("toggle", o);
                break;
              case "input":
                Cr(o, d), $t("invalid", o);
                break;
              case "select":
                o._wrapperState = { wasMultiple: !!d.multiple }, $t("invalid", o);
                break;
              case "textarea":
                Xn(o, d), $t("invalid", o);
            }
            fn(l, d), c = null;
            for (var m in d) if (d.hasOwnProperty(m)) {
              var E = d[m];
              m === "children" ? typeof E == "string" ? o.textContent !== E && (d.suppressHydrationWarning !== !0 && gc(o.textContent, E, n), c = ["children", E]) : typeof E == "number" && o.textContent !== "" + E && (d.suppressHydrationWarning !== !0 && gc(
                o.textContent,
                E,
                n
              ), c = ["children", "" + E]) : et.hasOwnProperty(m) && E != null && m === "onScroll" && $t("scroll", o);
            }
            switch (l) {
              case "input":
                sn(o), ca(o, d, !0);
                break;
              case "textarea":
                sn(o), Ga(o);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof d.onClick == "function" && (o.onclick = Sc);
            }
            o = c, r.updateQueue = o, o !== null && (r.flags |= 4);
          } else {
            m = c.nodeType === 9 ? c : c.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = Mn(l)), n === "http://www.w3.org/1999/xhtml" ? l === "script" ? (n = m.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof o.is == "string" ? n = m.createElement(l, { is: o.is }) : (n = m.createElement(l), l === "select" && (m = n, o.multiple ? m.multiple = !0 : o.size && (m.size = o.size))) : n = m.createElementNS(n, l), n[Ma] = r, n[ss] = o, ho(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (m = dn(l, o), l) {
                case "dialog":
                  $t("cancel", n), $t("close", n), c = o;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  $t("load", n), c = o;
                  break;
                case "video":
                case "audio":
                  for (c = 0; c < as.length; c++) $t(as[c], n);
                  c = o;
                  break;
                case "source":
                  $t("error", n), c = o;
                  break;
                case "img":
                case "image":
                case "link":
                  $t(
                    "error",
                    n
                  ), $t("load", n), c = o;
                  break;
                case "details":
                  $t("toggle", n), c = o;
                  break;
                case "input":
                  Cr(n, o), c = Ln(n, o), $t("invalid", n);
                  break;
                case "option":
                  c = o;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!o.multiple }, c = F({}, o, { value: void 0 }), $t("invalid", n);
                  break;
                case "textarea":
                  Xn(n, o), c = Gn(n, o), $t("invalid", n);
                  break;
                default:
                  c = o;
              }
              fn(l, c), E = c;
              for (d in E) if (E.hasOwnProperty(d)) {
                var b = E[d];
                d === "style" ? Ft(n, b) : d === "dangerouslySetInnerHTML" ? (b = b ? b.__html : void 0, b != null && Li(n, b)) : d === "children" ? typeof b == "string" ? (l !== "textarea" || b !== "") && fa(n, b) : typeof b == "number" && fa(n, "" + b) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (et.hasOwnProperty(d) ? b != null && d === "onScroll" && $t("scroll", n) : b != null && ot(n, d, b, m));
              }
              switch (l) {
                case "input":
                  sn(n), ca(n, o, !1);
                  break;
                case "textarea":
                  sn(n), Ga(n);
                  break;
                case "option":
                  o.value != null && n.setAttribute("value", "" + Ye(o.value));
                  break;
                case "select":
                  n.multiple = !!o.multiple, d = o.value, d != null ? $n(n, !!o.multiple, d, !1) : o.defaultValue != null && $n(
                    n,
                    !!o.multiple,
                    o.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof c.onClick == "function" && (n.onclick = Sc);
              }
              switch (l) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  o = !!o.autoFocus;
                  break e;
                case "img":
                  o = !0;
                  break e;
                default:
                  o = !1;
              }
            }
            o && (r.flags |= 4);
          }
          r.ref !== null && (r.flags |= 512, r.flags |= 2097152);
        }
        return xr(r), null;
      case 6:
        if (n && r.stateNode != null) Wv(n, r, n.memoizedProps, o);
        else {
          if (typeof o != "string" && r.stateNode === null) throw Error(L(166));
          if (l = cu(ms.current), cu(Ci.current), wn(r)) {
            if (o = r.stateNode, l = r.memoizedProps, o[Ma] = r, (d = o.nodeValue !== l) && (n = Jr, n !== null)) switch (n.tag) {
              case 3:
                gc(o.nodeValue, l, (n.mode & 1) !== 0);
                break;
              case 5:
                n.memoizedProps.suppressHydrationWarning !== !0 && gc(o.nodeValue, l, (n.mode & 1) !== 0);
            }
            d && (r.flags |= 4);
          } else o = (l.nodeType === 9 ? l : l.ownerDocument).createTextNode(o), o[Ma] = r, r.stateNode = o;
        }
        return xr(r), null;
      case 13:
        if (Jt(gn), o = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (vn && Zr !== null && r.mode & 1 && !(r.flags & 128)) Nv(), Qi(), r.flags |= 98560, d = !1;
          else if (d = wn(r), o !== null && o.dehydrated !== null) {
            if (n === null) {
              if (!d) throw Error(L(318));
              if (d = r.memoizedState, d = d !== null ? d.dehydrated : null, !d) throw Error(L(317));
              d[Ma] = r;
            } else Qi(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            xr(r), d = !1;
          } else ni !== null && (js(ni), ni = null), d = !0;
          if (!d) return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = l, r) : (o = o !== null, o !== (n !== null && n.memoizedState !== null) && o && (r.child.flags |= 8192, r.mode & 1 && (n === null || gn.current & 1 ? Qn === 0 && (Qn = 3) : Bd())), r.updateQueue !== null && (r.flags |= 4), xr(r), null);
      case 4:
        return oo(), ga(n, r), n === null && ls(r.stateNode.containerInfo), xr(r), null;
      case 10:
        return Sd(r.type._context), xr(r), null;
      case 17:
        return jn(r.type) && gi(), xr(r), null;
      case 19:
        if (Jt(gn), d = r.memoizedState, d === null) return xr(r), null;
        if (o = (r.flags & 128) !== 0, m = d.rendering, m === null) if (o) ks(d, !1);
        else {
          if (Qn !== 0 || n !== null && n.flags & 128) for (n = r.child; n !== null; ) {
            if (m = xc(n), m !== null) {
              for (r.flags |= 128, ks(d, !1), o = m.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), r.subtreeFlags = 0, o = l, l = r.child; l !== null; ) d = l, n = o, d.flags &= 14680066, m = d.alternate, m === null ? (d.childLanes = 0, d.lanes = n, d.child = null, d.subtreeFlags = 0, d.memoizedProps = null, d.memoizedState = null, d.updateQueue = null, d.dependencies = null, d.stateNode = null) : (d.childLanes = m.childLanes, d.lanes = m.lanes, d.child = m.child, d.subtreeFlags = 0, d.deletions = null, d.memoizedProps = m.memoizedProps, d.memoizedState = m.memoizedState, d.updateQueue = m.updateQueue, d.type = m.type, n = m.dependencies, d.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), l = l.sibling;
              return rn(gn, gn.current & 1 | 2), r.child;
            }
            n = n.sibling;
          }
          d.tail !== null && Pt() > So && (r.flags |= 128, o = !0, ks(d, !1), r.lanes = 4194304);
        }
        else {
          if (!o) if (n = xc(m), n !== null) {
            if (r.flags |= 128, o = !0, l = n.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), ks(d, !0), d.tail === null && d.tailMode === "hidden" && !m.alternate && !vn) return xr(r), null;
          } else 2 * Pt() - d.renderingStartTime > So && l !== 1073741824 && (r.flags |= 128, o = !0, ks(d, !1), r.lanes = 4194304);
          d.isBackwards ? (m.sibling = r.child, r.child = m) : (l = d.last, l !== null ? l.sibling = m : r.child = m, d.last = m);
        }
        return d.tail !== null ? (r = d.tail, d.rendering = r, d.tail = r.sibling, d.renderingStartTime = Pt(), r.sibling = null, l = gn.current, rn(gn, o ? l & 1 | 2 : l & 1), r) : (xr(r), null);
      case 22:
      case 23:
        return Vd(), o = r.memoizedState !== null, n !== null && n.memoizedState !== null !== o && (r.flags |= 8192), o && r.mode & 1 ? Sa & 1073741824 && (xr(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : xr(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(L(156, r.tag));
  }
  function qv(n, r) {
    switch (bc(r), r.tag) {
      case 1:
        return jn(r.type) && gi(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return oo(), Jt(An), Jt(Rn), ys(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return _d(r), null;
      case 13:
        if (Jt(gn), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null) throw Error(L(340));
          Qi();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return Jt(gn), null;
      case 4:
        return oo(), null;
      case 10:
        return Sd(r.type._context), null;
      case 22:
      case 23:
        return Vd(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var mu = !1, fr = !1, iy = typeof WeakSet == "function" ? WeakSet : Set, Re = null;
  function kl(n, r) {
    var l = n.ref;
    if (l !== null) if (typeof l == "function") try {
      l(null);
    } catch (o) {
      Tn(n, r, o);
    }
    else l.current = null;
  }
  function jd(n, r, l) {
    try {
      l();
    } catch (o) {
      Tn(n, r, o);
    }
  }
  var Fd = !1;
  function ly(n, r) {
    if (ru = dl, n = hl(), Gu(n)) {
      if ("selectionStart" in n) var l = { start: n.selectionStart, end: n.selectionEnd };
      else e: {
        l = (l = n.ownerDocument) && l.defaultView || window;
        var o = l.getSelection && l.getSelection();
        if (o && o.rangeCount !== 0) {
          l = o.anchorNode;
          var c = o.anchorOffset, d = o.focusNode;
          o = o.focusOffset;
          try {
            l.nodeType, d.nodeType;
          } catch {
            l = null;
            break e;
          }
          var m = 0, E = -1, b = -1, U = 0, J = 0, ee = n, K = null;
          t: for (; ; ) {
            for (var he; ee !== l || c !== 0 && ee.nodeType !== 3 || (E = m + c), ee !== d || o !== 0 && ee.nodeType !== 3 || (b = m + o), ee.nodeType === 3 && (m += ee.nodeValue.length), (he = ee.firstChild) !== null; )
              K = ee, ee = he;
            for (; ; ) {
              if (ee === n) break t;
              if (K === l && ++U === c && (E = m), K === d && ++J === o && (b = m), (he = ee.nextSibling) !== null) break;
              ee = K, K = ee.parentNode;
            }
            ee = he;
          }
          l = E === -1 || b === -1 ? null : { start: E, end: b };
        } else l = null;
      }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (os = { focusedElem: n, selectionRange: l }, dl = !1, Re = r; Re !== null; ) if (r = Re, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null) n.return = r, Re = n;
    else for (; Re !== null; ) {
      r = Re;
      try {
        var _e = r.alternate;
        if (r.flags & 1024) switch (r.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (_e !== null) {
              var De = _e.memoizedProps, Dn = _e.memoizedState, k = r.stateNode, w = k.getSnapshotBeforeUpdate(r.elementType === r.type ? De : ta(r.type, De), Dn);
              k.__reactInternalSnapshotBeforeUpdate = w;
            }
            break;
          case 3:
            var N = r.stateNode.containerInfo;
            N.nodeType === 1 ? N.textContent = "" : N.nodeType === 9 && N.documentElement && N.removeChild(N.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(L(163));
        }
      } catch (ne) {
        Tn(r, r.return, ne);
      }
      if (n = r.sibling, n !== null) {
        n.return = r.return, Re = n;
        break;
      }
      Re = r.return;
    }
    return _e = Fd, Fd = !1, _e;
  }
  function mo(n, r, l) {
    var o = r.updateQueue;
    if (o = o !== null ? o.lastEffect : null, o !== null) {
      var c = o = o.next;
      do {
        if ((c.tag & n) === n) {
          var d = c.destroy;
          c.destroy = void 0, d !== void 0 && jd(r, l, d);
        }
        c = c.next;
      } while (c !== o);
    }
  }
  function tf(n, r) {
    if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
      var l = r = r.next;
      do {
        if ((l.tag & n) === n) {
          var o = l.create;
          l.destroy = o();
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function nf(n) {
    var r = n.ref;
    if (r !== null) {
      var l = n.stateNode;
      switch (n.tag) {
        case 5:
          n = l;
          break;
        default:
          n = l;
      }
      typeof r == "function" ? r(n) : r.current = n;
    }
  }
  function Gv(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, Gv(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[Ma], delete r[ss], delete r[sd], delete r[cd], delete r[ro])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function rf(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function Ds(n) {
    e: for (; ; ) {
      for (; n.sibling === null; ) {
        if (n.return === null || rf(n.return)) return null;
        n = n.return;
      }
      for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
        if (n.flags & 2 || n.child === null || n.tag === 4) continue e;
        n.child.return = n, n = n.child;
      }
      if (!(n.flags & 2)) return n.stateNode;
    }
  }
  function Ri(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6) n = n.stateNode, r ? l.nodeType === 8 ? l.parentNode.insertBefore(n, r) : l.insertBefore(n, r) : (l.nodeType === 8 ? (r = l.parentNode, r.insertBefore(n, l)) : (r = l, r.appendChild(n)), l = l._reactRootContainer, l != null || r.onclick !== null || (r.onclick = Sc));
    else if (o !== 4 && (n = n.child, n !== null)) for (Ri(n, r, l), n = n.sibling; n !== null; ) Ri(n, r, l), n = n.sibling;
  }
  function Ti(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6) n = n.stateNode, r ? l.insertBefore(n, r) : l.appendChild(n);
    else if (o !== 4 && (n = n.child, n !== null)) for (Ti(n, r, l), n = n.sibling; n !== null; ) Ti(n, r, l), n = n.sibling;
  }
  var Sn = null, Ur = !1;
  function Fa(n, r, l) {
    for (l = l.child; l !== null; ) qi(n, r, l), l = l.sibling;
  }
  function qi(n, r, l) {
    if (Wr && typeof Wr.onCommitFiberUnmount == "function") try {
      Wr.onCommitFiberUnmount(ol, l);
    } catch {
    }
    switch (l.tag) {
      case 5:
        fr || kl(l, r);
      case 6:
        var o = Sn, c = Ur;
        Sn = null, Fa(n, r, l), Sn = o, Ur = c, Sn !== null && (Ur ? (n = Sn, l = l.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(l) : n.removeChild(l)) : Sn.removeChild(l.stateNode));
        break;
      case 18:
        Sn !== null && (Ur ? (n = Sn, l = l.stateNode, n.nodeType === 8 ? to(n.parentNode, l) : n.nodeType === 1 && to(n, l), Oa(n)) : to(Sn, l.stateNode));
        break;
      case 4:
        o = Sn, c = Ur, Sn = l.stateNode.containerInfo, Ur = !0, Fa(n, r, l), Sn = o, Ur = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!fr && (o = l.updateQueue, o !== null && (o = o.lastEffect, o !== null))) {
          c = o = o.next;
          do {
            var d = c, m = d.destroy;
            d = d.tag, m !== void 0 && (d & 2 || d & 4) && jd(l, r, m), c = c.next;
          } while (c !== o);
        }
        Fa(n, r, l);
        break;
      case 1:
        if (!fr && (kl(l, r), o = l.stateNode, typeof o.componentWillUnmount == "function")) try {
          o.props = l.memoizedProps, o.state = l.memoizedState, o.componentWillUnmount();
        } catch (E) {
          Tn(l, r, E);
        }
        Fa(n, r, l);
        break;
      case 21:
        Fa(n, r, l);
        break;
      case 22:
        l.mode & 1 ? (fr = (o = fr) || l.memoizedState !== null, Fa(n, r, l), fr = o) : Fa(n, r, l);
        break;
      default:
        Fa(n, r, l);
    }
  }
  function Xv(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var l = n.stateNode;
      l === null && (l = n.stateNode = new iy()), r.forEach(function(o) {
        var c = fy.bind(null, n, o);
        l.has(o) || (l.add(o), o.then(c, c));
      });
    }
  }
  function ai(n, r) {
    var l = r.deletions;
    if (l !== null) for (var o = 0; o < l.length; o++) {
      var c = l[o];
      try {
        var d = n, m = r, E = m;
        e: for (; E !== null; ) {
          switch (E.tag) {
            case 5:
              Sn = E.stateNode, Ur = !1;
              break e;
            case 3:
              Sn = E.stateNode.containerInfo, Ur = !0;
              break e;
            case 4:
              Sn = E.stateNode.containerInfo, Ur = !0;
              break e;
          }
          E = E.return;
        }
        if (Sn === null) throw Error(L(160));
        qi(d, m, c), Sn = null, Ur = !1;
        var b = c.alternate;
        b !== null && (b.return = null), c.return = null;
      } catch (U) {
        Tn(c, r, U);
      }
    }
    if (r.subtreeFlags & 12854) for (r = r.child; r !== null; ) Kv(r, n), r = r.sibling;
  }
  function Kv(n, r) {
    var l = n.alternate, o = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (ai(r, n), ii(n), o & 4) {
          try {
            mo(3, n, n.return), tf(3, n);
          } catch (De) {
            Tn(n, n.return, De);
          }
          try {
            mo(5, n, n.return);
          } catch (De) {
            Tn(n, n.return, De);
          }
        }
        break;
      case 1:
        ai(r, n), ii(n), o & 512 && l !== null && kl(l, l.return);
        break;
      case 5:
        if (ai(r, n), ii(n), o & 512 && l !== null && kl(l, l.return), n.flags & 32) {
          var c = n.stateNode;
          try {
            fa(c, "");
          } catch (De) {
            Tn(n, n.return, De);
          }
        }
        if (o & 4 && (c = n.stateNode, c != null)) {
          var d = n.memoizedProps, m = l !== null ? l.memoizedProps : d, E = n.type, b = n.updateQueue;
          if (n.updateQueue = null, b !== null) try {
            E === "input" && d.type === "radio" && d.name != null && Bn(c, d), dn(E, m);
            var U = dn(E, d);
            for (m = 0; m < b.length; m += 2) {
              var J = b[m], ee = b[m + 1];
              J === "style" ? Ft(c, ee) : J === "dangerouslySetInnerHTML" ? Li(c, ee) : J === "children" ? fa(c, ee) : ot(c, J, ee, U);
            }
            switch (E) {
              case "input":
                Nn(c, d);
                break;
              case "textarea":
                Rr(c, d);
                break;
              case "select":
                var K = c._wrapperState.wasMultiple;
                c._wrapperState.wasMultiple = !!d.multiple;
                var he = d.value;
                he != null ? $n(c, !!d.multiple, he, !1) : K !== !!d.multiple && (d.defaultValue != null ? $n(
                  c,
                  !!d.multiple,
                  d.defaultValue,
                  !0
                ) : $n(c, !!d.multiple, d.multiple ? [] : "", !1));
            }
            c[ss] = d;
          } catch (De) {
            Tn(n, n.return, De);
          }
        }
        break;
      case 6:
        if (ai(r, n), ii(n), o & 4) {
          if (n.stateNode === null) throw Error(L(162));
          c = n.stateNode, d = n.memoizedProps;
          try {
            c.nodeValue = d;
          } catch (De) {
            Tn(n, n.return, De);
          }
        }
        break;
      case 3:
        if (ai(r, n), ii(n), o & 4 && l !== null && l.memoizedState.isDehydrated) try {
          Oa(r.containerInfo);
        } catch (De) {
          Tn(n, n.return, De);
        }
        break;
      case 4:
        ai(r, n), ii(n);
        break;
      case 13:
        ai(r, n), ii(n), c = n.child, c.flags & 8192 && (d = c.memoizedState !== null, c.stateNode.isHidden = d, !d || c.alternate !== null && c.alternate.memoizedState !== null || (Pd = Pt())), o & 4 && Xv(n);
        break;
      case 22:
        if (J = l !== null && l.memoizedState !== null, n.mode & 1 ? (fr = (U = fr) || J, ai(r, n), fr = U) : ai(r, n), ii(n), o & 8192) {
          if (U = n.memoizedState !== null, (n.stateNode.isHidden = U) && !J && n.mode & 1) for (Re = n, J = n.child; J !== null; ) {
            for (ee = Re = J; Re !== null; ) {
              switch (K = Re, he = K.child, K.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  mo(4, K, K.return);
                  break;
                case 1:
                  kl(K, K.return);
                  var _e = K.stateNode;
                  if (typeof _e.componentWillUnmount == "function") {
                    o = K, l = K.return;
                    try {
                      r = o, _e.props = r.memoizedProps, _e.state = r.memoizedState, _e.componentWillUnmount();
                    } catch (De) {
                      Tn(o, l, De);
                    }
                  }
                  break;
                case 5:
                  kl(K, K.return);
                  break;
                case 22:
                  if (K.memoizedState !== null) {
                    Zv(ee);
                    continue;
                  }
              }
              he !== null ? (he.return = K, Re = he) : Zv(ee);
            }
            J = J.sibling;
          }
          e: for (J = null, ee = n; ; ) {
            if (ee.tag === 5) {
              if (J === null) {
                J = ee;
                try {
                  c = ee.stateNode, U ? (d = c.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none") : (E = ee.stateNode, b = ee.memoizedProps.style, m = b != null && b.hasOwnProperty("display") ? b.display : null, E.style.display = ft("display", m));
                } catch (De) {
                  Tn(n, n.return, De);
                }
              }
            } else if (ee.tag === 6) {
              if (J === null) try {
                ee.stateNode.nodeValue = U ? "" : ee.memoizedProps;
              } catch (De) {
                Tn(n, n.return, De);
              }
            } else if ((ee.tag !== 22 && ee.tag !== 23 || ee.memoizedState === null || ee === n) && ee.child !== null) {
              ee.child.return = ee, ee = ee.child;
              continue;
            }
            if (ee === n) break e;
            for (; ee.sibling === null; ) {
              if (ee.return === null || ee.return === n) break e;
              J === ee && (J = null), ee = ee.return;
            }
            J === ee && (J = null), ee.sibling.return = ee.return, ee = ee.sibling;
          }
        }
        break;
      case 19:
        ai(r, n), ii(n), o & 4 && Xv(n);
        break;
      case 21:
        break;
      default:
        ai(
          r,
          n
        ), ii(n);
    }
  }
  function ii(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var l = n.return; l !== null; ) {
            if (rf(l)) {
              var o = l;
              break e;
            }
            l = l.return;
          }
          throw Error(L(160));
        }
        switch (o.tag) {
          case 5:
            var c = o.stateNode;
            o.flags & 32 && (fa(c, ""), o.flags &= -33);
            var d = Ds(n);
            Ti(n, d, c);
            break;
          case 3:
          case 4:
            var m = o.stateNode.containerInfo, E = Ds(n);
            Ri(n, E, m);
            break;
          default:
            throw Error(L(161));
        }
      } catch (b) {
        Tn(n, n.return, b);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function Os(n, r, l) {
    Re = n, Jv(n);
  }
  function Jv(n, r, l) {
    for (var o = (n.mode & 1) !== 0; Re !== null; ) {
      var c = Re, d = c.child;
      if (c.tag === 22 && o) {
        var m = c.memoizedState !== null || mu;
        if (!m) {
          var E = c.alternate, b = E !== null && E.memoizedState !== null || fr;
          E = mu;
          var U = fr;
          if (mu = m, (fr = b) && !U) for (Re = c; Re !== null; ) m = Re, b = m.child, m.tag === 22 && m.memoizedState !== null ? Ls(c) : b !== null ? (b.return = m, Re = b) : Ls(c);
          for (; d !== null; ) Re = d, Jv(d), d = d.sibling;
          Re = c, mu = E, fr = U;
        }
        Hd(n);
      } else c.subtreeFlags & 8772 && d !== null ? (d.return = c, Re = d) : Hd(n);
    }
  }
  function Hd(n) {
    for (; Re !== null; ) {
      var r = Re;
      if (r.flags & 8772) {
        var l = r.alternate;
        try {
          if (r.flags & 8772) switch (r.tag) {
            case 0:
            case 11:
            case 15:
              fr || tf(5, r);
              break;
            case 1:
              var o = r.stateNode;
              if (r.flags & 4 && !fr) if (l === null) o.componentDidMount();
              else {
                var c = r.elementType === r.type ? l.memoizedProps : ta(r.type, l.memoizedProps);
                o.componentDidUpdate(c, l.memoizedState, o.__reactInternalSnapshotBeforeUpdate);
              }
              var d = r.updateQueue;
              d !== null && Rd(r, d, o);
              break;
            case 3:
              var m = r.updateQueue;
              if (m !== null) {
                if (l = null, r.child !== null) switch (r.child.tag) {
                  case 5:
                    l = r.child.stateNode;
                    break;
                  case 1:
                    l = r.child.stateNode;
                }
                Rd(r, m, l);
              }
              break;
            case 5:
              var E = r.stateNode;
              if (l === null && r.flags & 4) {
                l = E;
                var b = r.memoizedProps;
                switch (r.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    b.autoFocus && l.focus();
                    break;
                  case "img":
                    b.src && (l.src = b.src);
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
              if (r.memoizedState === null) {
                var U = r.alternate;
                if (U !== null) {
                  var J = U.memoizedState;
                  if (J !== null) {
                    var ee = J.dehydrated;
                    ee !== null && Oa(ee);
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
              throw Error(L(163));
          }
          fr || r.flags & 512 && nf(r);
        } catch (K) {
          Tn(r, r.return, K);
        }
      }
      if (r === n) {
        Re = null;
        break;
      }
      if (l = r.sibling, l !== null) {
        l.return = r.return, Re = l;
        break;
      }
      Re = r.return;
    }
  }
  function Zv(n) {
    for (; Re !== null; ) {
      var r = Re;
      if (r === n) {
        Re = null;
        break;
      }
      var l = r.sibling;
      if (l !== null) {
        l.return = r.return, Re = l;
        break;
      }
      Re = r.return;
    }
  }
  function Ls(n) {
    for (; Re !== null; ) {
      var r = Re;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var l = r.return;
            try {
              tf(4, r);
            } catch (b) {
              Tn(r, l, b);
            }
            break;
          case 1:
            var o = r.stateNode;
            if (typeof o.componentDidMount == "function") {
              var c = r.return;
              try {
                o.componentDidMount();
              } catch (b) {
                Tn(r, c, b);
              }
            }
            var d = r.return;
            try {
              nf(r);
            } catch (b) {
              Tn(r, d, b);
            }
            break;
          case 5:
            var m = r.return;
            try {
              nf(r);
            } catch (b) {
              Tn(r, m, b);
            }
        }
      } catch (b) {
        Tn(r, r.return, b);
      }
      if (r === n) {
        Re = null;
        break;
      }
      var E = r.sibling;
      if (E !== null) {
        E.return = r.return, Re = E;
        break;
      }
      Re = r.return;
    }
  }
  var eh = Math.ceil, af = $e.ReactCurrentDispatcher, yu = $e.ReactCurrentOwner, kr = $e.ReactCurrentBatchConfig, Tt = 0, Pn = null, kn = null, dr = 0, Sa = 0, yo = Kr(0), Qn = 0, gu = null, Su = 0, Eu = 0, Ns = 0, go = null, aa = null, Pd = 0, So = 1 / 0, Gi = null, Dl = !1, Ms = null, Ha = null, lf = !1, Ol = null, zs = 0, Eo = 0, Co = null, Cu = -1, Us = 0;
  function an() {
    return Tt & 6 ? Pt() : Cu !== -1 ? Cu : Cu = Pt();
  }
  function Ea(n) {
    return n.mode & 1 ? Tt & 2 && dr !== 0 ? dr & -dr : ou.transition !== null ? (Us === 0 && (Us = ql()), Us) : (n = xt, n !== 0 || (n = window.event, n = n === void 0 ? 16 : qo(n.type)), n) : 1;
  }
  function Ca(n, r, l, o) {
    if (50 < Eo) throw Eo = 0, Co = null, Error(L(185));
    fl(n, l, o), (!(Tt & 2) || n !== Pn) && (n === Pn && (!(Tt & 2) && (Eu |= l), Qn === 4 && Ll(n, dr)), nr(n, o), l === 1 && Tt === 0 && !(r.mode & 1) && (So = Pt() + 500, fs && Mr()));
  }
  function nr(n, r) {
    var l = n.callbackNode;
    Fu(n, r);
    var o = pi(n, n === Pn ? dr : 0);
    if (o === 0) l !== null && pn(l), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = o & -o, n.callbackPriority !== r) {
      if (l != null && pn(l), r === 1) n.tag === 0 ? fd(Hs.bind(null, n)) : yl(Hs.bind(null, n)), ny(function() {
        !(Tt & 6) && Mr();
      }), l = null;
      else {
        switch (Wo(o)) {
          case 1:
            l = nt;
            break;
          case 4:
            l = di;
            break;
          case 16:
            l = Ui;
            break;
          case 536870912:
            l = Ai;
            break;
          default:
            l = Ui;
        }
        l = lh(l, th.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = l;
    }
  }
  function th(n, r) {
    if (Cu = -1, Us = 0, Tt & 6) throw Error(L(327));
    var l = n.callbackNode;
    if (Ro() && n.callbackNode !== l) return null;
    var o = pi(n, n === Pn ? dr : 0);
    if (o === 0) return null;
    if (o & 30 || o & n.expiredLanes || r) r = sf(n, o);
    else {
      r = o;
      var c = Tt;
      Tt |= 2;
      var d = nh();
      (Pn !== n || dr !== r) && (Gi = null, So = Pt() + 500, Tu(n, r));
      do
        try {
          oy();
          break;
        } catch (E) {
          of(n, E);
        }
      while (!0);
      gd(), af.current = d, Tt = c, kn !== null ? r = 0 : (Pn = null, dr = 0, r = Qn);
    }
    if (r !== 0) {
      if (r === 2 && (c = Fi(n), c !== 0 && (o = c, r = As(n, c))), r === 1) throw l = gu, Tu(n, 0), Ll(n, o), nr(n, Pt()), l;
      if (r === 6) Ll(n, o);
      else {
        if (c = n.current.alternate, !(o & 30) && !Fs(c) && (r = sf(n, o), r === 2 && (d = Fi(n), d !== 0 && (o = d, r = As(n, d))), r === 1)) throw l = gu, Tu(n, 0), Ll(n, o), nr(n, Pt()), l;
        switch (n.finishedWork = c, n.finishedLanes = o, r) {
          case 0:
          case 1:
            throw Error(L(345));
          case 2:
            bu(n, aa, Gi);
            break;
          case 3:
            if (Ll(n, o), (o & 130023424) === o && (r = Pd + 500 - Pt(), 10 < r)) {
              if (pi(n, 0) !== 0) break;
              if (c = n.suspendedLanes, (c & o) !== o) {
                an(), n.pingedLanes |= n.suspendedLanes & c;
                break;
              }
              n.timeoutHandle = Ec(bu.bind(null, n, aa, Gi), r);
              break;
            }
            bu(n, aa, Gi);
            break;
          case 4:
            if (Ll(n, o), (o & 4194240) === o) break;
            for (r = n.eventTimes, c = -1; 0 < o; ) {
              var m = 31 - Or(o);
              d = 1 << m, m = r[m], m > c && (c = m), o &= ~d;
            }
            if (o = c, o = Pt() - o, o = (120 > o ? 120 : 480 > o ? 480 : 1080 > o ? 1080 : 1920 > o ? 1920 : 3e3 > o ? 3e3 : 4320 > o ? 4320 : 1960 * eh(o / 1960)) - o, 10 < o) {
              n.timeoutHandle = Ec(bu.bind(null, n, aa, Gi), o);
              break;
            }
            bu(n, aa, Gi);
            break;
          case 5:
            bu(n, aa, Gi);
            break;
          default:
            throw Error(L(329));
        }
      }
    }
    return nr(n, Pt()), n.callbackNode === l ? th.bind(null, n) : null;
  }
  function As(n, r) {
    var l = go;
    return n.current.memoizedState.isDehydrated && (Tu(n, r).flags |= 256), n = sf(n, r), n !== 2 && (r = aa, aa = l, r !== null && js(r)), n;
  }
  function js(n) {
    aa === null ? aa = n : aa.push.apply(aa, n);
  }
  function Fs(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var l = r.updateQueue;
        if (l !== null && (l = l.stores, l !== null)) for (var o = 0; o < l.length; o++) {
          var c = l[o], d = c.getSnapshot;
          c = c.value;
          try {
            if (!Za(d(), c)) return !1;
          } catch {
            return !1;
          }
        }
      }
      if (l = r.child, r.subtreeFlags & 16384 && l !== null) l.return = r, r = l;
      else {
        if (r === n) break;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === n) return !0;
          r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
      }
    }
    return !0;
  }
  function Ll(n, r) {
    for (r &= ~Ns, r &= ~Eu, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var l = 31 - Or(r), o = 1 << l;
      n[l] = -1, r &= ~o;
    }
  }
  function Hs(n) {
    if (Tt & 6) throw Error(L(327));
    Ro();
    var r = pi(n, 0);
    if (!(r & 1)) return nr(n, Pt()), null;
    var l = sf(n, r);
    if (n.tag !== 0 && l === 2) {
      var o = Fi(n);
      o !== 0 && (r = o, l = As(n, o));
    }
    if (l === 1) throw l = gu, Tu(n, 0), Ll(n, r), nr(n, Pt()), l;
    if (l === 6) throw Error(L(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, bu(n, aa, Gi), nr(n, Pt()), null;
  }
  function uf(n, r) {
    var l = Tt;
    Tt |= 1;
    try {
      return n(r);
    } finally {
      Tt = l, Tt === 0 && (So = Pt() + 500, fs && Mr());
    }
  }
  function Ru(n) {
    Ol !== null && Ol.tag === 0 && !(Tt & 6) && Ro();
    var r = Tt;
    Tt |= 1;
    var l = kr.transition, o = xt;
    try {
      if (kr.transition = null, xt = 1, n) return n();
    } finally {
      xt = o, kr.transition = l, Tt = r, !(Tt & 6) && Mr();
    }
  }
  function Vd() {
    Sa = yo.current, Jt(yo);
  }
  function Tu(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var l = n.timeoutHandle;
    if (l !== -1 && (n.timeoutHandle = -1, kv(l)), kn !== null) for (l = kn.return; l !== null; ) {
      var o = l;
      switch (bc(o), o.tag) {
        case 1:
          o = o.type.childContextTypes, o != null && gi();
          break;
        case 3:
          oo(), Jt(An), Jt(Rn), ys();
          break;
        case 5:
          _d(o);
          break;
        case 4:
          oo();
          break;
        case 13:
          Jt(gn);
          break;
        case 19:
          Jt(gn);
          break;
        case 10:
          Sd(o.type._context);
          break;
        case 22:
        case 23:
          Vd();
      }
      l = l.return;
    }
    if (Pn = n, kn = n = Nl(n.current, null), dr = Sa = r, Qn = 0, gu = null, Ns = Eu = Su = 0, aa = go = null, su !== null) {
      for (r = 0; r < su.length; r++) if (l = su[r], o = l.interleaved, o !== null) {
        l.interleaved = null;
        var c = o.next, d = l.pending;
        if (d !== null) {
          var m = d.next;
          d.next = c, o.next = m;
        }
        l.pending = o;
      }
      su = null;
    }
    return n;
  }
  function of(n, r) {
    do {
      var l = kn;
      try {
        if (gd(), Ue.current = Qt, kc) {
          for (var o = rt.memoizedState; o !== null; ) {
            var c = o.queue;
            c !== null && (c.pending = null), o = o.next;
          }
          kc = !1;
        }
        if (_t = 0, Yn = Zt = rt = null, gs = !1, Ss = 0, yu.current = null, l === null || l.return === null) {
          Qn = 1, gu = r, kn = null;
          break;
        }
        e: {
          var d = n, m = l.return, E = l, b = r;
          if (r = dr, E.flags |= 32768, b !== null && typeof b == "object" && typeof b.then == "function") {
            var U = b, J = E, ee = J.tag;
            if (!(J.mode & 1) && (ee === 0 || ee === 11 || ee === 15)) {
              var K = J.alternate;
              K ? (J.updateQueue = K.updateQueue, J.memoizedState = K.memoizedState, J.lanes = K.lanes) : (J.updateQueue = null, J.memoizedState = null);
            }
            var he = Nd(m);
            if (he !== null) {
              he.flags &= -257, Yv(he, m, E, d, r), he.mode & 1 && Ld(d, U, r), r = he, b = U;
              var _e = r.updateQueue;
              if (_e === null) {
                var De = /* @__PURE__ */ new Set();
                De.add(b), r.updateQueue = De;
              } else _e.add(b);
              break e;
            } else {
              if (!(r & 1)) {
                Ld(d, U, r), Bd();
                break e;
              }
              b = Error(L(426));
            }
          } else if (vn && E.mode & 1) {
            var Dn = Nd(m);
            if (Dn !== null) {
              !(Dn.flags & 65536) && (Dn.flags |= 256), Yv(Dn, m, E, d, r), ps(xl(b, E));
              break e;
            }
          }
          d = b = xl(b, E), Qn !== 4 && (Qn = 2), go === null ? go = [d] : go.push(d), d = m;
          do {
            switch (d.tag) {
              case 3:
                d.flags |= 65536, r &= -r, d.lanes |= r;
                var k = _s(d, b, r);
                jv(d, k);
                break e;
              case 1:
                E = b;
                var w = d.type, N = d.stateNode;
                if (!(d.flags & 128) && (typeof w.getDerivedStateFromError == "function" || N !== null && typeof N.componentDidCatch == "function" && (Ha === null || !Ha.has(N)))) {
                  d.flags |= 65536, r &= -r, d.lanes |= r;
                  var ne = $v(d, E, r);
                  jv(d, ne);
                  break e;
                }
            }
            d = d.return;
          } while (d !== null);
        }
        rh(l);
      } catch (Oe) {
        r = Oe, kn === l && l !== null && (kn = l = l.return);
        continue;
      }
      break;
    } while (!0);
  }
  function nh() {
    var n = af.current;
    return af.current = Qt, n === null ? Qt : n;
  }
  function Bd() {
    (Qn === 0 || Qn === 3 || Qn === 2) && (Qn = 4), Pn === null || !(Su & 268435455) && !(Eu & 268435455) || Ll(Pn, dr);
  }
  function sf(n, r) {
    var l = Tt;
    Tt |= 2;
    var o = nh();
    (Pn !== n || dr !== r) && (Gi = null, Tu(n, r));
    do
      try {
        uy();
        break;
      } catch (c) {
        of(n, c);
      }
    while (!0);
    if (gd(), Tt = l, af.current = o, kn !== null) throw Error(L(261));
    return Pn = null, dr = 0, Qn;
  }
  function uy() {
    for (; kn !== null; ) $d(kn);
  }
  function oy() {
    for (; kn !== null && !Tr(); ) $d(kn);
  }
  function $d(n) {
    var r = Id(n.alternate, n, Sa);
    n.memoizedProps = n.pendingProps, r === null ? rh(n) : kn = r, yu.current = null;
  }
  function rh(n) {
    var r = n;
    do {
      var l = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (l = qv(l, r), l !== null) {
          l.flags &= 32767, kn = l;
          return;
        }
        if (n !== null) n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          Qn = 6, kn = null;
          return;
        }
      } else if (l = Ad(l, r, Sa), l !== null) {
        kn = l;
        return;
      }
      if (r = r.sibling, r !== null) {
        kn = r;
        return;
      }
      kn = r = n;
    } while (r !== null);
    Qn === 0 && (Qn = 5);
  }
  function bu(n, r, l) {
    var o = xt, c = kr.transition;
    try {
      kr.transition = null, xt = 1, sy(n, r, l, o);
    } finally {
      kr.transition = c, xt = o;
    }
    return null;
  }
  function sy(n, r, l, o) {
    do
      Ro();
    while (Ol !== null);
    if (Tt & 6) throw Error(L(327));
    l = n.finishedWork;
    var c = n.finishedLanes;
    if (l === null) return null;
    if (n.finishedWork = null, n.finishedLanes = 0, l === n.current) throw Error(L(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var d = l.lanes | l.childLanes;
    if (Io(n, d), n === Pn && (kn = Pn = null, dr = 0), !(l.subtreeFlags & 2064) && !(l.flags & 2064) || lf || (lf = !0, lh(Ui, function() {
      return Ro(), null;
    })), d = (l.flags & 15990) !== 0, l.subtreeFlags & 15990 || d) {
      d = kr.transition, kr.transition = null;
      var m = xt;
      xt = 1;
      var E = Tt;
      Tt |= 4, yu.current = null, ly(n, l), Kv(l, n), Sv(os), dl = !!ru, os = ru = null, n.current = l, Os(l), Xa(), Tt = E, xt = m, kr.transition = d;
    } else n.current = l;
    if (lf && (lf = !1, Ol = n, zs = c), d = n.pendingLanes, d === 0 && (Ha = null), $o(l.stateNode), nr(n, Pt()), r !== null) for (o = n.onRecoverableError, l = 0; l < r.length; l++) c = r[l], o(c.value, { componentStack: c.stack, digest: c.digest });
    if (Dl) throw Dl = !1, n = Ms, Ms = null, n;
    return zs & 1 && n.tag !== 0 && Ro(), d = n.pendingLanes, d & 1 ? n === Co ? Eo++ : (Eo = 0, Co = n) : Eo = 0, Mr(), null;
  }
  function Ro() {
    if (Ol !== null) {
      var n = Wo(zs), r = kr.transition, l = xt;
      try {
        if (kr.transition = null, xt = 16 > n ? 16 : n, Ol === null) var o = !1;
        else {
          if (n = Ol, Ol = null, zs = 0, Tt & 6) throw Error(L(331));
          var c = Tt;
          for (Tt |= 4, Re = n.current; Re !== null; ) {
            var d = Re, m = d.child;
            if (Re.flags & 16) {
              var E = d.deletions;
              if (E !== null) {
                for (var b = 0; b < E.length; b++) {
                  var U = E[b];
                  for (Re = U; Re !== null; ) {
                    var J = Re;
                    switch (J.tag) {
                      case 0:
                      case 11:
                      case 15:
                        mo(8, J, d);
                    }
                    var ee = J.child;
                    if (ee !== null) ee.return = J, Re = ee;
                    else for (; Re !== null; ) {
                      J = Re;
                      var K = J.sibling, he = J.return;
                      if (Gv(J), J === U) {
                        Re = null;
                        break;
                      }
                      if (K !== null) {
                        K.return = he, Re = K;
                        break;
                      }
                      Re = he;
                    }
                  }
                }
                var _e = d.alternate;
                if (_e !== null) {
                  var De = _e.child;
                  if (De !== null) {
                    _e.child = null;
                    do {
                      var Dn = De.sibling;
                      De.sibling = null, De = Dn;
                    } while (De !== null);
                  }
                }
                Re = d;
              }
            }
            if (d.subtreeFlags & 2064 && m !== null) m.return = d, Re = m;
            else e: for (; Re !== null; ) {
              if (d = Re, d.flags & 2048) switch (d.tag) {
                case 0:
                case 11:
                case 15:
                  mo(9, d, d.return);
              }
              var k = d.sibling;
              if (k !== null) {
                k.return = d.return, Re = k;
                break e;
              }
              Re = d.return;
            }
          }
          var w = n.current;
          for (Re = w; Re !== null; ) {
            m = Re;
            var N = m.child;
            if (m.subtreeFlags & 2064 && N !== null) N.return = m, Re = N;
            else e: for (m = w; Re !== null; ) {
              if (E = Re, E.flags & 2048) try {
                switch (E.tag) {
                  case 0:
                  case 11:
                  case 15:
                    tf(9, E);
                }
              } catch (Oe) {
                Tn(E, E.return, Oe);
              }
              if (E === m) {
                Re = null;
                break e;
              }
              var ne = E.sibling;
              if (ne !== null) {
                ne.return = E.return, Re = ne;
                break e;
              }
              Re = E.return;
            }
          }
          if (Tt = c, Mr(), Wr && typeof Wr.onPostCommitFiberRoot == "function") try {
            Wr.onPostCommitFiberRoot(ol, n);
          } catch {
          }
          o = !0;
        }
        return o;
      } finally {
        xt = l, kr.transition = r;
      }
    }
    return !1;
  }
  function ah(n, r, l) {
    r = xl(l, r), r = _s(n, r, 1), n = Tl(n, r, 1), r = an(), n !== null && (fl(n, 1, r), nr(n, r));
  }
  function Tn(n, r, l) {
    if (n.tag === 3) ah(n, n, l);
    else for (; r !== null; ) {
      if (r.tag === 3) {
        ah(r, n, l);
        break;
      } else if (r.tag === 1) {
        var o = r.stateNode;
        if (typeof r.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (Ha === null || !Ha.has(o))) {
          n = xl(l, n), n = $v(r, n, 1), r = Tl(r, n, 1), n = an(), r !== null && (fl(r, 1, n), nr(r, n));
          break;
        }
      }
      r = r.return;
    }
  }
  function Yd(n, r, l) {
    var o = n.pingCache;
    o !== null && o.delete(r), r = an(), n.pingedLanes |= n.suspendedLanes & l, Pn === n && (dr & l) === l && (Qn === 4 || Qn === 3 && (dr & 130023424) === dr && 500 > Pt() - Pd ? Tu(n, 0) : Ns |= l), nr(n, r);
  }
  function ih(n, r) {
    r === 0 && (n.mode & 1 ? (r = sl, sl <<= 1, !(sl & 130023424) && (sl = 4194304)) : r = 1);
    var l = an();
    n = Ei(n, r), n !== null && (fl(n, r, l), nr(n, l));
  }
  function cy(n) {
    var r = n.memoizedState, l = 0;
    r !== null && (l = r.retryLane), ih(n, l);
  }
  function fy(n, r) {
    var l = 0;
    switch (n.tag) {
      case 13:
        var o = n.stateNode, c = n.memoizedState;
        c !== null && (l = c.retryLane);
        break;
      case 19:
        o = n.stateNode;
        break;
      default:
        throw Error(L(314));
    }
    o !== null && o.delete(r), ih(n, l);
  }
  var Id;
  Id = function(n, r, l) {
    if (n !== null) if (n.memoizedProps !== r.pendingProps || An.current) tr = !0;
    else {
      if (!(n.lanes & l) && !(r.flags & 128)) return tr = !1, ef(n, r, l);
      tr = !!(n.flags & 131072);
    }
    else tr = !1, vn && r.flags & 1048576 && Ov(r, El, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var o = r.type;
        ja(n, r), n = r.pendingProps;
        var c = ha(r, Rn.current);
        lo(r, l), c = Qe(null, r, o, n, c, l);
        var d = bl();
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, jn(o) ? (d = !0, lu(r)) : d = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, Rl(r), c.updater = Ic, r.stateNode = c, c._reactInternals = r, Dd(r, o, n, l), r = Md(null, r, o, !0, d, l)) : (r.tag = 0, vn && d && dd(r), xn(null, r, c, l), r = r.child), r;
      case 16:
        o = r.elementType;
        e: {
          switch (ja(n, r), n = r.pendingProps, c = o._init, o = c(o._payload), r.type = o, c = r.tag = py(o), n = ta(o, n), c) {
            case 0:
              r = Gc(null, r, o, n, l);
              break e;
            case 1:
              r = ay(null, r, o, n, l);
              break e;
            case 11:
              r = qc(null, r, o, n, l);
              break e;
            case 14:
              r = na(null, r, o, ta(o.type, n), l);
              break e;
          }
          throw Error(L(
            306,
            o,
            ""
          ));
        }
        return r;
      case 0:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ta(o, c), Gc(n, r, o, c, l);
      case 1:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ta(o, c), ay(n, r, o, c, l);
      case 3:
        e: {
          if (Xc(r), n === null) throw Error(L(387));
          o = r.pendingProps, d = r.memoizedState, c = d.element, Av(n, r), wc(r, o, null, l);
          var m = r.memoizedState;
          if (o = m.element, d.isDehydrated) if (d = { element: o, isDehydrated: !1, cache: m.cache, pendingSuspenseBoundaries: m.pendingSuspenseBoundaries, transitions: m.transitions }, r.updateQueue.baseState = d, r.memoizedState = d, r.flags & 256) {
            c = xl(Error(L(423)), r), r = vo(n, r, o, l, c);
            break e;
          } else if (o !== c) {
            c = xl(Error(L(424)), r), r = vo(n, r, o, l, c);
            break e;
          } else for (Zr = ei(r.stateNode.containerInfo.firstChild), Jr = r, vn = !0, ni = null, l = sr(r, null, o, l), r.child = l; l; ) l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (Qi(), o === c) {
              r = cr(n, r, l);
              break e;
            }
            xn(n, r, o, l);
          }
          r = r.child;
        }
        return r;
      case 5:
        return bd(r), n === null && md(r), o = r.type, c = r.pendingProps, d = n !== null ? n.memoizedProps : null, m = c.children, au(o, c) ? m = null : d !== null && au(o, d) && (r.flags |= 32), ws(n, r), xn(n, r, m, l), r.child;
      case 6:
        return n === null && md(r), null;
      case 13:
        return Iv(n, r, l);
      case 4:
        return Td(r, r.stateNode.containerInfo), o = r.pendingProps, n === null ? r.child = ri(r, null, o, l) : xn(n, r, o, l), r.child;
      case 11:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ta(o, c), qc(n, r, o, c, l);
      case 7:
        return xn(n, r, r.pendingProps, l), r.child;
      case 8:
        return xn(n, r, r.pendingProps.children, l), r.child;
      case 12:
        return xn(n, r, r.pendingProps.children, l), r.child;
      case 10:
        e: {
          if (o = r.type._context, c = r.pendingProps, d = r.memoizedProps, m = c.value, rn(oe, o._currentValue), o._currentValue = m, d !== null) if (Za(d.value, m)) {
            if (d.children === c.children && !An.current) {
              r = cr(n, r, l);
              break e;
            }
          } else for (d = r.child, d !== null && (d.return = r); d !== null; ) {
            var E = d.dependencies;
            if (E !== null) {
              m = d.child;
              for (var b = E.firstContext; b !== null; ) {
                if (b.context === o) {
                  if (d.tag === 1) {
                    b = Wi(-1, l & -l), b.tag = 2;
                    var U = d.updateQueue;
                    if (U !== null) {
                      U = U.shared;
                      var J = U.pending;
                      J === null ? b.next = b : (b.next = J.next, J.next = b), U.pending = b;
                    }
                  }
                  d.lanes |= l, b = d.alternate, b !== null && (b.lanes |= l), Ed(
                    d.return,
                    l,
                    r
                  ), E.lanes |= l;
                  break;
                }
                b = b.next;
              }
            } else if (d.tag === 10) m = d.type === r.type ? null : d.child;
            else if (d.tag === 18) {
              if (m = d.return, m === null) throw Error(L(341));
              m.lanes |= l, E = m.alternate, E !== null && (E.lanes |= l), Ed(m, l, r), m = d.sibling;
            } else m = d.child;
            if (m !== null) m.return = d;
            else for (m = d; m !== null; ) {
              if (m === r) {
                m = null;
                break;
              }
              if (d = m.sibling, d !== null) {
                d.return = m.return, m = d;
                break;
              }
              m = m.return;
            }
            d = m;
          }
          xn(n, r, c.children, l), r = r.child;
        }
        return r;
      case 9:
        return c = r.type, o = r.pendingProps.children, lo(r, l), c = It(c), o = o(c), r.flags |= 1, xn(n, r, o, l), r.child;
      case 14:
        return o = r.type, c = ta(o, r.pendingProps), c = ta(o.type, c), na(n, r, o, c, l);
      case 15:
        return hu(n, r, r.type, r.pendingProps, l);
      case 17:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ta(o, c), ja(n, r), r.tag = 1, jn(o) ? (n = !0, lu(r)) : n = !1, lo(r, l), Bv(r, o, c), Dd(r, o, c, l), Md(null, r, o, !0, n, l);
      case 19:
        return ra(n, r, l);
      case 22:
        return lt(n, r, l);
    }
    throw Error(L(156, r.tag));
  };
  function lh(n, r) {
    return on(n, r);
  }
  function dy(n, r, l, o) {
    this.tag = n, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Pa(n, r, l, o) {
    return new dy(n, r, l, o);
  }
  function Qd(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function py(n) {
    if (typeof n == "function") return Qd(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === Vt) return 11;
      if (n === Mt) return 14;
    }
    return 2;
  }
  function Nl(n, r) {
    var l = n.alternate;
    return l === null ? (l = Pa(n.tag, r, n.key, n.mode), l.elementType = n.elementType, l.type = n.type, l.stateNode = n.stateNode, l.alternate = n, n.alternate = l) : (l.pendingProps = r, l.type = n.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = n.flags & 14680064, l.childLanes = n.childLanes, l.lanes = n.lanes, l.child = n.child, l.memoizedProps = n.memoizedProps, l.memoizedState = n.memoizedState, l.updateQueue = n.updateQueue, r = n.dependencies, l.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, l.sibling = n.sibling, l.index = n.index, l.ref = n.ref, l;
  }
  function cf(n, r, l, o, c, d) {
    var m = 2;
    if (o = n, typeof n == "function") Qd(n) && (m = 1);
    else if (typeof n == "string") m = 5;
    else e: switch (n) {
      case dt:
        return Ml(l.children, c, d, r);
      case Be:
        m = 8, c |= 8;
        break;
      case mn:
        return n = Pa(12, l, r, c | 2), n.elementType = mn, n.lanes = d, n;
      case Et:
        return n = Pa(13, l, r, c), n.elementType = Et, n.lanes = d, n;
      case Pe:
        return n = Pa(19, l, r, c), n.elementType = Pe, n.lanes = d, n;
      case at:
        return To(l, c, d, r);
      default:
        if (typeof n == "object" && n !== null) switch (n.$$typeof) {
          case Nt:
            m = 10;
            break e;
          case ln:
            m = 9;
            break e;
          case Vt:
            m = 11;
            break e;
          case Mt:
            m = 14;
            break e;
          case ht:
            m = 16, o = null;
            break e;
        }
        throw Error(L(130, n == null ? n : typeof n, ""));
    }
    return r = Pa(m, l, r, c), r.elementType = n, r.type = o, r.lanes = d, r;
  }
  function Ml(n, r, l, o) {
    return n = Pa(7, n, o, r), n.lanes = l, n;
  }
  function To(n, r, l, o) {
    return n = Pa(22, n, o, r), n.elementType = at, n.lanes = l, n.stateNode = { isHidden: !1 }, n;
  }
  function _u(n, r, l) {
    return n = Pa(6, n, null, r), n.lanes = l, n;
  }
  function Wd(n, r, l) {
    return r = Pa(4, n.children !== null ? n.children : [], n.key, r), r.lanes = l, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function uh(n, r, l, o, c) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Gl(0), this.expirationTimes = Gl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Gl(0), this.identifierPrefix = o, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function ff(n, r, l, o, c, d, m, E, b) {
    return n = new uh(n, r, l, E, b), r === 1 ? (r = 1, d === !0 && (r |= 8)) : r = 0, d = Pa(3, null, null, r), n.current = d, d.stateNode = n, d.memoizedState = { element: o, isDehydrated: l, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Rl(d), n;
  }
  function oh(n, r, l) {
    var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: ke, key: o == null ? null : "" + o, children: n, containerInfo: r, implementation: l };
  }
  function sh(n) {
    if (!n) return gt;
    n = n._reactInternals;
    e: {
      if (fe(n) !== n || n.tag !== 1) throw Error(L(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (jn(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(L(171));
    }
    if (n.tag === 1) {
      var l = n.type;
      if (jn(l)) return Dv(n, l, r);
    }
    return r;
  }
  function qd(n, r, l, o, c, d, m, E, b) {
    return n = ff(l, o, !0, n, c, d, m, E, b), n.context = sh(null), l = n.current, o = an(), c = Ea(l), d = Wi(o, c), d.callback = r ?? null, Tl(l, d, c), n.current.lanes = c, fl(n, c, o), nr(n, o), n;
  }
  function df(n, r, l, o) {
    var c = r.current, d = an(), m = Ea(c);
    return l = sh(l), r.context === null ? r.context = l : r.pendingContext = l, r = Wi(d, m), r.payload = { element: n }, o = o === void 0 ? null : o, o !== null && (r.callback = o), n = Tl(c, r, m), n !== null && (Ca(n, c, m, d), _c(n, c, m)), m;
  }
  function pf(n) {
    if (n = n.current, !n.child) return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function ch(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var l = n.retryLane;
      n.retryLane = l !== 0 && l < r ? l : r;
    }
  }
  function vf(n, r) {
    ch(n, r), (n = n.alternate) && ch(n, r);
  }
  var Gd = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function hf(n) {
    this._internalRoot = n;
  }
  Xi.prototype.render = hf.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null) throw Error(L(409));
    df(n, r, null, null);
  }, Xi.prototype.unmount = hf.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Ru(function() {
        df(null, n, null, null);
      }), r[Yi] = null;
    }
  };
  function Xi(n) {
    this._internalRoot = n;
  }
  Xi.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = vi();
      n = { blockedOn: null, target: n, priority: r };
      for (var l = 0; l < Ka.length && r !== 0 && r < Ka[l].priority; l++) ;
      Ka.splice(l, 0, n), l === 0 && Pu(n);
    }
  };
  function Xd(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function mf(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function fh() {
  }
  function vy(n, r, l, o, c) {
    if (c) {
      if (typeof o == "function") {
        var d = o;
        o = function() {
          var U = pf(m);
          d.call(U);
        };
      }
      var m = qd(r, o, n, 0, null, !1, !1, "", fh);
      return n._reactRootContainer = m, n[Yi] = m.current, ls(n.nodeType === 8 ? n.parentNode : n), Ru(), m;
    }
    for (; c = n.lastChild; ) n.removeChild(c);
    if (typeof o == "function") {
      var E = o;
      o = function() {
        var U = pf(b);
        E.call(U);
      };
    }
    var b = ff(n, 0, !1, null, null, !1, !1, "", fh);
    return n._reactRootContainer = b, n[Yi] = b.current, ls(n.nodeType === 8 ? n.parentNode : n), Ru(function() {
      df(r, b, l, o);
    }), b;
  }
  function yf(n, r, l, o, c) {
    var d = l._reactRootContainer;
    if (d) {
      var m = d;
      if (typeof c == "function") {
        var E = c;
        c = function() {
          var b = pf(m);
          E.call(b);
        };
      }
      df(r, m, n, c);
    } else m = vy(l, r, n, c, o);
    return pf(m);
  }
  Hu = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var l = qr(r.pendingLanes);
          l !== 0 && (Qo(r, l | 1), nr(r, Pt()), !(Tt & 6) && (So = Pt() + 500, Mr()));
        }
        break;
      case 13:
        Ru(function() {
          var o = Ei(n, 1);
          if (o !== null) {
            var c = an();
            Ca(o, n, 1, c);
          }
        }), vf(n, 1);
    }
  }, kt = function(n) {
    if (n.tag === 13) {
      var r = Ei(n, 134217728);
      if (r !== null) {
        var l = an();
        Ca(r, n, 134217728, l);
      }
      vf(n, 134217728);
    }
  }, uc = function(n) {
    if (n.tag === 13) {
      var r = Ea(n), l = Ei(n, r);
      if (l !== null) {
        var o = an();
        Ca(l, n, r, o);
      }
      vf(n, r);
    }
  }, vi = function() {
    return xt;
  }, Ke = function(n, r) {
    var l = xt;
    try {
      return xt = n, r();
    } finally {
      xt = l;
    }
  }, qt = function(n, r, l) {
    switch (r) {
      case "input":
        if (Nn(n, l), r = l.name, l.type === "radio" && r != null) {
          for (l = n; l.parentNode; ) l = l.parentNode;
          for (l = l.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < l.length; r++) {
            var o = l[r];
            if (o !== n && o.form === n.form) {
              var c = Ii(o);
              if (!c) throw Error(L(90));
              qn(o), Nn(o, c);
            }
          }
        }
        break;
      case "textarea":
        Rr(n, l);
        break;
      case "select":
        r = l.value, r != null && $n(n, !!l.multiple, r, !1);
    }
  }, Il = uf, Ql = Ru;
  var hy = { usingClientEntryPoint: !1, Events: [cs, ze, Ii, ka, Ni, uf] }, bo = { findFiberByHostInstance: iu, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, my = { bundleType: bo.bundleType, version: bo.version, rendererPackageName: bo.rendererPackageName, rendererConfig: bo.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: $e.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = pt(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: bo.findFiberByHostInstance, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var gf = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!gf.isDisabled && gf.supportsFiber) try {
      ol = gf.inject(my), Wr = gf;
    } catch {
    }
  }
  return Qa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = hy, Qa.createPortal = function(n, r) {
    var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Xd(r)) throw Error(L(200));
    return oh(n, r, null, l);
  }, Qa.createRoot = function(n, r) {
    if (!Xd(n)) throw Error(L(299));
    var l = !1, o = "", c = Gd;
    return r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (o = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), r = ff(n, 1, !1, null, null, l, !1, o, c), n[Yi] = r.current, ls(n.nodeType === 8 ? n.parentNode : n), new hf(r);
  }, Qa.findDOMNode = function(n) {
    if (n == null) return null;
    if (n.nodeType === 1) return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(L(188)) : (n = Object.keys(n).join(","), Error(L(268, n)));
    return n = pt(r), n = n === null ? null : n.stateNode, n;
  }, Qa.flushSync = function(n) {
    return Ru(n);
  }, Qa.hydrate = function(n, r, l) {
    if (!mf(r)) throw Error(L(200));
    return yf(null, n, r, !0, l);
  }, Qa.hydrateRoot = function(n, r, l) {
    if (!Xd(n)) throw Error(L(405));
    var o = l != null && l.hydratedSources || null, c = !1, d = "", m = Gd;
    if (l != null && (l.unstable_strictMode === !0 && (c = !0), l.identifierPrefix !== void 0 && (d = l.identifierPrefix), l.onRecoverableError !== void 0 && (m = l.onRecoverableError)), r = qd(r, null, n, 1, l ?? null, c, !1, d, m), n[Yi] = r.current, ls(n), o) for (n = 0; n < o.length; n++) l = o[n], c = l._getVersion, c = c(l._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [l, c] : r.mutableSourceEagerHydrationData.push(
      l,
      c
    );
    return new Xi(r);
  }, Qa.render = function(n, r, l) {
    if (!mf(r)) throw Error(L(200));
    return yf(null, n, r, !1, l);
  }, Qa.unmountComponentAtNode = function(n) {
    if (!mf(n)) throw Error(L(40));
    return n._reactRootContainer ? (Ru(function() {
      yf(null, null, n, !1, function() {
        n._reactRootContainer = null, n[Yi] = null;
      });
    }), !0) : !1;
  }, Qa.unstable_batchedUpdates = uf, Qa.unstable_renderSubtreeIntoContainer = function(n, r, l, o) {
    if (!mf(l)) throw Error(L(200));
    if (n == null || n._reactInternals === void 0) throw Error(L(38));
    return yf(n, r, l, !1, o);
  }, Qa.version = "18.3.1-next-f1338f8080-20240426", Qa;
}
var Wa = {}, rT;
function ck() {
  if (rT) return Wa;
  rT = 1;
  var B = {};
  /**
   * @license React
   * react-dom.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  return B.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var G = Wt, L = oT(), We = G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, et = !1;
    function Ne(e) {
      et = e;
    }
    function je(e) {
      if (!et) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        Ie("warn", e, a);
      }
    }
    function S(e) {
      if (!et) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        Ie("error", e, a);
      }
    }
    function Ie(e, t, a) {
      {
        var i = We.ReactDebugCurrentFrame, u = i.getStackAddendum();
        u !== "" && (t += "%s", a = a.concat([u]));
        var s = a.map(function(f) {
          return String(f);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var pe = 0, le = 1, Z = 2, $ = 3, q = 4, Q = 5, ie = 6, Ce = 7, ut = 8, jt = 9, ot = 10, $e = 11, Lt = 12, ke = 13, dt = 14, Be = 15, mn = 16, Nt = 17, ln = 18, Vt = 19, Et = 21, Pe = 22, Mt = 23, ht = 24, at = 25, W = !0, Ee = !1, F = !1, R = !1, j = !1, ye = !0, Te = !0, Se = !0, Me = !0, st = /* @__PURE__ */ new Set(), Ye = {}, mt = {};
    function ct(e, t) {
      sn(e, t), sn(e + "Capture", t);
    }
    function sn(e, t) {
      Ye[e] && S("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), Ye[e] = t;
      {
        var a = e.toLowerCase();
        mt[a] = e, e === "onDoubleClick" && (mt.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        st.add(t[i]);
    }
    var qn = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", ir = Object.prototype.hasOwnProperty;
    function Ln(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function Cr(e) {
      try {
        return Bn(e), !1;
      } catch {
        return !0;
      }
    }
    function Bn(e) {
      return "" + e;
    }
    function Nn(e, t) {
      if (Cr(e))
        return S("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Ln(e)), Bn(e);
    }
    function ca(e) {
      if (Cr(e))
        return S("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ln(e)), Bn(e);
    }
    function qa(e, t) {
      if (Cr(e))
        return S("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Ln(e)), Bn(e);
    }
    function Dr(e, t) {
      if (Cr(e))
        return S("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Ln(e)), Bn(e);
    }
    function $n(e) {
      if (Cr(e))
        return S("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", Ln(e)), Bn(e);
    }
    function Gn(e) {
      if (Cr(e))
        return S("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", Ln(e)), Bn(e);
    }
    var Xn = 0, Rr = 1, Ga = 2, Mn = 3, lr = 4, Ir = 5, Li = 6, fa = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", ae = fa + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", Fe = new RegExp("^[" + fa + "][" + ae + "]*$"), ft = {}, Ft = {};
    function cn(e) {
      return ir.call(Ft, e) ? !0 : ir.call(ft, e) ? !1 : Fe.test(e) ? (Ft[e] = !0, !0) : (ft[e] = !0, S("Invalid attribute name: `%s`", e), !1);
    }
    function fn(e, t, a) {
      return t !== null ? t.type === Xn : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function dn(e, t, a, i) {
      if (a !== null && a.type === Xn)
        return !1;
      switch (typeof t) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (i)
            return !1;
          if (a !== null)
            return !a.acceptsBooleans;
          var u = e.toLowerCase().slice(0, 5);
          return u !== "data-" && u !== "aria-";
        }
        default:
          return !1;
      }
    }
    function Kn(e, t, a, i) {
      if (t === null || typeof t > "u" || dn(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case Mn:
            return !t;
          case lr:
            return t === !1;
          case Ir:
            return isNaN(t);
          case Li:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function un(e) {
      return Ht.hasOwnProperty(e) ? Ht[e] : null;
    }
    function qt(e, t, a, i, u, s, f) {
      this.acceptsBooleans = t === Ga || t === Mn || t === lr, this.attributeName = i, this.attributeNamespace = u, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = f;
    }
    var Ht = {}, da = [
      "children",
      "dangerouslySetInnerHTML",
      // TODO: This prevents the assignment of defaultValue to regular
      // elements (not just inputs). Now that ReactDOMInput assigns to the
      // defaultValue property -- do we need this?
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    da.forEach(function(e) {
      Ht[e] = new qt(
        e,
        Xn,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var t = e[0], a = e[1];
      Ht[t] = new qt(
        t,
        Rr,
        !1,
        // mustUseProperty
        a,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
      Ht[e] = new qt(
        e,
        Ga,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
      Ht[e] = new qt(
        e,
        Ga,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "allowFullScreen",
      "async",
      // Note: there is a special case that prevents it from being written to the DOM
      // on the client side because the browsers are inconsistent. Instead we call focus().
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      // Microdata
      "itemScope"
    ].forEach(function(e) {
      Ht[e] = new qt(
        e,
        Mn,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "checked",
      // Note: `option.selected` is not updated if `select.multiple` is
      // disabled with `removeAttribute`. We have special logic for handling this.
      "multiple",
      "muted",
      "selected"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Ht[e] = new qt(
        e,
        Mn,
        !0,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "capture",
      "download"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Ht[e] = new qt(
        e,
        lr,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Ht[e] = new qt(
        e,
        Li,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["rowSpan", "start"].forEach(function(e) {
      Ht[e] = new qt(
        e,
        Ir,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var xa = /[\-\:]([a-z])/g, ka = function(e) {
      return e[1].toUpperCase();
    };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(xa, ka);
      Ht[t] = new qt(
        t,
        Rr,
        !1,
        // mustUseProperty
        e,
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(xa, ka);
      Ht[t] = new qt(
        t,
        Rr,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/1999/xlink",
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(xa, ka);
      Ht[t] = new qt(
        t,
        Rr,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      Ht[e] = new qt(
        e,
        Rr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var Ni = "xlinkHref";
    Ht[Ni] = new qt(
      "xlinkHref",
      Rr,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      Ht[e] = new qt(
        e,
        Rr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !0,
        // sanitizeURL
        !0
      );
    });
    var Il = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, Ql = !1;
    function Mi(e) {
      !Ql && Il.test(e) && (Ql = !0, S("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function Wl(e, t, a, i) {
      if (i.mustUseProperty) {
        var u = i.propertyName;
        return e[u];
      } else {
        Nn(a, t), i.sanitizeURL && Mi("" + a);
        var s = i.attributeName, f = null;
        if (i.type === lr) {
          if (e.hasAttribute(s)) {
            var p = e.getAttribute(s);
            return p === "" ? !0 : Kn(t, a, i, !1) ? p : p === "" + a ? a : p;
          }
        } else if (e.hasAttribute(s)) {
          if (Kn(t, a, i, !1))
            return e.getAttribute(s);
          if (i.type === Mn)
            return a;
          f = e.getAttribute(s);
        }
        return Kn(t, a, i, !1) ? f === null ? a : f : f === "" + a ? a : f;
      }
    }
    function si(e, t, a, i) {
      {
        if (!cn(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var u = e.getAttribute(t);
        return Nn(a, t), u === "" + a ? a : u;
      }
    }
    function pa(e, t, a, i) {
      var u = un(t);
      if (!fn(t, u, i)) {
        if (Kn(t, a, u, i) && (a = null), i || u === null) {
          if (cn(t)) {
            var s = t;
            a === null ? e.removeAttribute(s) : (Nn(a, t), e.setAttribute(s, "" + a));
          }
          return;
        }
        var f = u.mustUseProperty;
        if (f) {
          var p = u.propertyName;
          if (a === null) {
            var v = u.type;
            e[p] = v === Mn ? !1 : "";
          } else
            e[p] = a;
          return;
        }
        var y = u.attributeName, g = u.attributeNamespace;
        if (a === null)
          e.removeAttribute(y);
        else {
          var x = u.type, _;
          x === Mn || x === lr && a === !0 ? _ = "" : (Nn(a, y), _ = "" + a, u.sanitizeURL && Mi(_.toString())), g ? e.setAttributeNS(g, y, _) : e.setAttribute(y, _);
        }
      }
    }
    var ur = Symbol.for("react.element"), va = Symbol.for("react.portal"), Qr = Symbol.for("react.fragment"), ci = Symbol.for("react.strict_mode"), fi = Symbol.for("react.profiler"), zi = Symbol.for("react.provider"), T = Symbol.for("react.context"), X = Symbol.for("react.forward_ref"), se = Symbol.for("react.suspense"), fe = Symbol.for("react.suspense_list"), yt = Symbol.for("react.memo"), Je = Symbol.for("react.lazy"), Ct = Symbol.for("react.scope"), pt = Symbol.for("react.debug_trace_mode"), bn = Symbol.for("react.offscreen"), on = Symbol.for("react.legacy_hidden"), pn = Symbol.for("react.cache"), Tr = Symbol.for("react.tracing_marker"), Xa = Symbol.iterator, Pt = "@@iterator";
    function yn(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = Xa && e[Xa] || e[Pt];
      return typeof t == "function" ? t : null;
    }
    var nt = Object.assign, di = 0, Ui, ac, Ai, ol, Wr, $o, Or;
    function Yo() {
    }
    Yo.__reactDisabledLog = !0;
    function ic() {
      {
        if (di === 0) {
          Ui = console.log, ac = console.info, Ai = console.warn, ol = console.error, Wr = console.group, $o = console.groupCollapsed, Or = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Yo,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        di++;
      }
    }
    function lc() {
      {
        if (di--, di === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: nt({}, e, {
              value: Ui
            }),
            info: nt({}, e, {
              value: ac
            }),
            warn: nt({}, e, {
              value: Ai
            }),
            error: nt({}, e, {
              value: ol
            }),
            group: nt({}, e, {
              value: Wr
            }),
            groupCollapsed: nt({}, e, {
              value: $o
            }),
            groupEnd: nt({}, e, {
              value: Or
            })
          });
        }
        di < 0 && S("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ji = We.ReactCurrentDispatcher, sl;
    function qr(e, t, a) {
      {
        if (sl === void 0)
          try {
            throw Error();
          } catch (u) {
            var i = u.stack.trim().match(/\n( *(at )?)/);
            sl = i && i[1] || "";
          }
        return `
` + sl + e;
      }
    }
    var pi = !1, cl;
    {
      var Fu = typeof WeakMap == "function" ? WeakMap : Map;
      cl = new Fu();
    }
    function Fi(e, t) {
      if (!e || pi)
        return "";
      {
        var a = cl.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      pi = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = ji.current, ji.current = null, ic();
      try {
        if (t) {
          var f = function() {
            throw Error();
          };
          if (Object.defineProperty(f.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(f, []);
            } catch (A) {
              i = A;
            }
            Reflect.construct(e, [], f);
          } else {
            try {
              f.call();
            } catch (A) {
              i = A;
            }
            e.call(f.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (A) {
            i = A;
          }
          e();
        }
      } catch (A) {
        if (A && i && typeof A.stack == "string") {
          for (var p = A.stack.split(`
`), v = i.stack.split(`
`), y = p.length - 1, g = v.length - 1; y >= 1 && g >= 0 && p[y] !== v[g]; )
            g--;
          for (; y >= 1 && g >= 0; y--, g--)
            if (p[y] !== v[g]) {
              if (y !== 1 || g !== 1)
                do
                  if (y--, g--, g < 0 || p[y] !== v[g]) {
                    var x = `
` + p[y].replace(" at new ", " at ");
                    return e.displayName && x.includes("<anonymous>") && (x = x.replace("<anonymous>", e.displayName)), typeof e == "function" && cl.set(e, x), x;
                  }
                while (y >= 1 && g >= 0);
              break;
            }
        }
      } finally {
        pi = !1, ji.current = s, lc(), Error.prepareStackTrace = u;
      }
      var _ = e ? e.displayName || e.name : "", z = _ ? qr(_) : "";
      return typeof e == "function" && cl.set(e, z), z;
    }
    function ql(e, t, a) {
      return Fi(e, !0);
    }
    function Gl(e, t, a) {
      return Fi(e, !1);
    }
    function fl(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Io(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Fi(e, fl(e));
      if (typeof e == "string")
        return qr(e);
      switch (e) {
        case se:
          return qr("Suspense");
        case fe:
          return qr("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case X:
            return Gl(e.render);
          case yt:
            return Io(e.type, t, a);
          case Je: {
            var i = e, u = i._payload, s = i._init;
            try {
              return Io(s(u), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function Qo(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case Q:
          return qr(e.type);
        case mn:
          return qr("Lazy");
        case ke:
          return qr("Suspense");
        case Vt:
          return qr("SuspenseList");
        case pe:
        case Z:
        case Be:
          return Gl(e.type);
        case $e:
          return Gl(e.type.render);
        case le:
          return ql(e.type);
        default:
          return "";
      }
    }
    function xt(e) {
      try {
        var t = "", a = e;
        do
          t += Qo(a), a = a.return;
        while (a);
        return t;
      } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack;
      }
    }
    function Wo(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var u = t.displayName || t.name || "";
      return u !== "" ? a + "(" + u + ")" : a;
    }
    function Hu(e) {
      return e.displayName || "Context";
    }
    function kt(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && S("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case Qr:
          return "Fragment";
        case va:
          return "Portal";
        case fi:
          return "Profiler";
        case ci:
          return "StrictMode";
        case se:
          return "Suspense";
        case fe:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case T:
            var t = e;
            return Hu(t) + ".Consumer";
          case zi:
            var a = e;
            return Hu(a._context) + ".Provider";
          case X:
            return Wo(e, e.render, "ForwardRef");
          case yt:
            var i = e.displayName || null;
            return i !== null ? i : kt(e.type) || "Memo";
          case Je: {
            var u = e, s = u._payload, f = u._init;
            try {
              return kt(f(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function uc(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function vi(e) {
      return e.displayName || "Context";
    }
    function Ke(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case ht:
          return "Cache";
        case jt:
          var i = a;
          return vi(i) + ".Consumer";
        case ot:
          var u = a;
          return vi(u._context) + ".Provider";
        case ln:
          return "DehydratedFragment";
        case $e:
          return uc(a, a.render, "ForwardRef");
        case Ce:
          return "Fragment";
        case Q:
          return a;
        case q:
          return "Portal";
        case $:
          return "Root";
        case ie:
          return "Text";
        case mn:
          return kt(a);
        case ut:
          return a === ci ? "StrictMode" : "Mode";
        case Pe:
          return "Offscreen";
        case Lt:
          return "Profiler";
        case Et:
          return "Scope";
        case ke:
          return "Suspense";
        case Vt:
          return "SuspenseList";
        case at:
          return "TracingMarker";
        case le:
        case pe:
        case Nt:
        case Z:
        case dt:
        case Be:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var Xl = We.ReactDebugCurrentFrame, Jn = null, Gr = !1;
    function Lr() {
      {
        if (Jn === null)
          return null;
        var e = Jn._debugOwner;
        if (e !== null && typeof e < "u")
          return Ke(e);
      }
      return null;
    }
    function hi() {
      return Jn === null ? "" : xt(Jn);
    }
    function Cn() {
      Xl.getCurrentStack = null, Jn = null, Gr = !1;
    }
    function Gt(e) {
      Xl.getCurrentStack = e === null ? null : hi, Jn = e, Gr = !1;
    }
    function Ka() {
      return Jn;
    }
    function Da(e) {
      Gr = e;
    }
    function br(e) {
      return "" + e;
    }
    function Nr(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return Gn(e), e;
        default:
          return "";
      }
    }
    var Gf = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function Pu(e, t) {
      Gf[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || S("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || S("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function Kl(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function Vu(e) {
      return e._valueTracker;
    }
    function Bu(e) {
      e._valueTracker = null;
    }
    function Jl(e) {
      var t = "";
      return e && (Kl(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function Oa(e) {
      var t = Kl(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      Gn(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var u = a.get, s = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return u.call(this);
          },
          set: function(p) {
            Gn(p), i = "" + p, s.call(this, p);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var f = {
          getValue: function() {
            return i;
          },
          setValue: function(p) {
            Gn(p), i = "" + p;
          },
          stopTracking: function() {
            Bu(e), delete e[t];
          }
        };
        return f;
      }
    }
    function La(e) {
      Vu(e) || (e._valueTracker = Oa(e));
    }
    function dl(e) {
      if (!e)
        return !1;
      var t = Vu(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = Jl(e);
      return i !== a ? (t.setValue(i), !0) : !1;
    }
    function Hi(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var $u = !1, pl = !1, Pi = !1, Yu = !1;
    function qo(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function Na(e, t) {
      var a = e, i = t.checked, u = nt({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return u;
    }
    function Iu(e, t) {
      Pu("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !pl && (S("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Lr() || "A component", t.type), pl = !0), t.value !== void 0 && t.defaultValue !== void 0 && !$u && (S("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Lr() || "A component", t.type), $u = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: Nr(t.value != null ? t.value : i),
        controlled: qo(t)
      };
    }
    function h(e, t) {
      var a = e, i = t.checked;
      i != null && pa(a, "checked", i, !1);
    }
    function C(e, t) {
      var a = e;
      {
        var i = qo(t);
        !a._wrapperState.controlled && i && !Yu && (S("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Yu = !0), a._wrapperState.controlled && !i && !Pi && (S("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Pi = !0);
      }
      h(e, t);
      var u = Nr(t.value), s = t.type;
      if (u != null)
        s === "number" ? (u === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != u) && (a.value = br(u)) : a.value !== br(u) && (a.value = br(u));
      else if (s === "submit" || s === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? be(a, t.type, u) : t.hasOwnProperty("defaultValue") && be(a, t.type, Nr(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function M(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var u = t.type, s = u === "submit" || u === "reset";
        if (s && (t.value === void 0 || t.value === null))
          return;
        var f = br(i._wrapperState.initialValue);
        a || f !== i.value && (i.value = f), i.defaultValue = f;
      }
      var p = i.name;
      p !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, p !== "" && (i.name = p);
    }
    function H(e, t) {
      var a = e;
      C(a, t), re(a, t);
    }
    function re(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        Nn(a, "name");
        for (var u = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), s = 0; s < u.length; s++) {
          var f = u[s];
          if (!(f === e || f.form !== e.form)) {
            var p = kh(f);
            if (!p)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            dl(f), C(f, p);
          }
        }
      }
    }
    function be(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || Hi(e.ownerDocument) !== e) && (a == null ? e.defaultValue = br(e._wrapperState.initialValue) : e.defaultValue !== br(a) && (e.defaultValue = br(a)));
    }
    var ve = !1, qe = !1, vt = !1;
    function Bt(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? G.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || qe || (qe = !0, S("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (vt || (vt = !0, S("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !ve && (S("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), ve = !0);
    }
    function Xt(e, t) {
      t.value != null && e.setAttribute("value", br(Nr(t.value)));
    }
    var Kt = Array.isArray;
    function it(e) {
      return Kt(e);
    }
    var nn;
    nn = !1;
    function _n() {
      var e = Lr();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var Zl = ["value", "defaultValue"];
    function Go(e) {
      {
        Pu("select", e);
        for (var t = 0; t < Zl.length; t++) {
          var a = Zl[t];
          if (e[a] != null) {
            var i = it(e[a]);
            e.multiple && !i ? S("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, _n()) : !e.multiple && i && S("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, _n());
          }
        }
      }
    }
    function Vi(e, t, a, i) {
      var u = e.options;
      if (t) {
        for (var s = a, f = {}, p = 0; p < s.length; p++)
          f["$" + s[p]] = !0;
        for (var v = 0; v < u.length; v++) {
          var y = f.hasOwnProperty("$" + u[v].value);
          u[v].selected !== y && (u[v].selected = y), y && i && (u[v].defaultSelected = !0);
        }
      } else {
        for (var g = br(Nr(a)), x = null, _ = 0; _ < u.length; _++) {
          if (u[_].value === g) {
            u[_].selected = !0, i && (u[_].defaultSelected = !0);
            return;
          }
          x === null && !u[_].disabled && (x = u[_]);
        }
        x !== null && (x.selected = !0);
      }
    }
    function eu(e, t) {
      return nt({}, t, {
        value: void 0
      });
    }
    function Xo(e, t) {
      var a = e;
      Go(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !nn && (S("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), nn = !0);
    }
    function Xf(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? Vi(a, !!t.multiple, i, !1) : t.defaultValue != null && Vi(a, !!t.multiple, t.defaultValue, !0);
    }
    function oc(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var u = t.value;
      u != null ? Vi(a, !!t.multiple, u, !1) : i !== !!t.multiple && (t.defaultValue != null ? Vi(a, !!t.multiple, t.defaultValue, !0) : Vi(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function Kf(e, t) {
      var a = e, i = t.value;
      i != null && Vi(a, !!t.multiple, i, !1);
    }
    var Zp = !1;
    function sc(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = nt({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: br(a._wrapperState.initialValue)
      });
      return i;
    }
    function ev(e, t) {
      var a = e;
      Pu("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !Zp && (S("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Lr() || "A component"), Zp = !0);
      var i = t.value;
      if (i == null) {
        var u = t.children, s = t.defaultValue;
        if (u != null) {
          S("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (s != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (it(u)) {
              if (u.length > 1)
                throw new Error("<textarea> can only have at most one child.");
              u = u[0];
            }
            s = u;
          }
        }
        s == null && (s = ""), i = s;
      }
      a._wrapperState = {
        initialValue: Nr(i)
      };
    }
    function tv(e, t) {
      var a = e, i = Nr(t.value), u = Nr(t.defaultValue);
      if (i != null) {
        var s = br(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      u != null && (a.defaultValue = br(u));
    }
    function nv(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function Ym(e, t) {
      tv(e, t);
    }
    var Ja = "http://www.w3.org/1999/xhtml", Im = "http://www.w3.org/1998/Math/MathML", Jf = "http://www.w3.org/2000/svg";
    function Zf(e) {
      switch (e) {
        case "svg":
          return Jf;
        case "math":
          return Im;
        default:
          return Ja;
      }
    }
    function cc(e, t) {
      return e == null || e === Ja ? Zf(t) : e === Jf && t === "foreignObject" ? Ja : e;
    }
    var Qm = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, u) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, u);
        });
      } : e;
    }, fc, rv = Qm(function(e, t) {
      if (e.namespaceURI === Jf && !("innerHTML" in e)) {
        fc = fc || document.createElement("div"), fc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = fc.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), Xr = 1, Bi = 3, zn = 8, $i = 9, Ko = 11, vl = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === Bi) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, Wm = {
      animation: ["animationDelay", "animationDirection", "animationDuration", "animationFillMode", "animationIterationCount", "animationName", "animationPlayState", "animationTimingFunction"],
      background: ["backgroundAttachment", "backgroundClip", "backgroundColor", "backgroundImage", "backgroundOrigin", "backgroundPositionX", "backgroundPositionY", "backgroundRepeat", "backgroundSize"],
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth", "borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth", "borderLeftColor", "borderLeftStyle", "borderLeftWidth", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderBlockEnd: ["borderBlockEndColor", "borderBlockEndStyle", "borderBlockEndWidth"],
      borderBlockStart: ["borderBlockStartColor", "borderBlockStartStyle", "borderBlockStartWidth"],
      borderBottom: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth"],
      borderColor: ["borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor"],
      borderImage: ["borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth"],
      borderInlineEnd: ["borderInlineEndColor", "borderInlineEndStyle", "borderInlineEndWidth"],
      borderInlineStart: ["borderInlineStartColor", "borderInlineStartStyle", "borderInlineStartWidth"],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: ["borderBottomLeftRadius", "borderBottomRightRadius", "borderTopLeftRadius", "borderTopRightRadius"],
      borderRight: ["borderRightColor", "borderRightStyle", "borderRightWidth"],
      borderStyle: ["borderBottomStyle", "borderLeftStyle", "borderRightStyle", "borderTopStyle"],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth"],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: ["fontFamily", "fontFeatureSettings", "fontKerning", "fontLanguageOverride", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition", "fontWeight", "lineHeight"],
      fontVariant: ["fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition"],
      gap: ["columnGap", "rowGap"],
      grid: ["gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      gridArea: ["gridColumnEnd", "gridColumnStart", "gridRowEnd", "gridRowStart"],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: ["gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: ["maskClip", "maskComposite", "maskImage", "maskMode", "maskOrigin", "maskPositionX", "maskPositionY", "maskRepeat", "maskSize"],
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: ["textDecorationColor", "textDecorationLine", "textDecorationStyle"],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: ["transitionDelay", "transitionDuration", "transitionProperty", "transitionTimingFunction"],
      wordWrap: ["overflowWrap"]
    }, Qu = {
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
      // SVG-related properties
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    function av(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var iv = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Qu).forEach(function(e) {
      iv.forEach(function(t) {
        Qu[av(t, e)] = Qu[e];
      });
    });
    function dc(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(Qu.hasOwnProperty(e) && Qu[e]) ? t + "px" : (Dr(t, e), ("" + t).trim());
    }
    var lv = /([A-Z])/g, Wu = /^ms-/;
    function qm(e) {
      return e.replace(lv, "-$1").toLowerCase().replace(Wu, "-ms-");
    }
    var uv = function() {
    };
    {
      var Gm = /^(?:webkit|moz|o)[A-Z]/, ov = /^-ms-/, sv = /-(.)/g, qu = /;\s*$/, mi = {}, ed = {}, Jo = !1, cv = !1, fv = function(e) {
        return e.replace(sv, function(t, a) {
          return a.toUpperCase();
        });
      }, td = function(e) {
        mi.hasOwnProperty(e) && mi[e] || (mi[e] = !0, S(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          fv(e.replace(ov, "ms-"))
        ));
      }, nd = function(e) {
        mi.hasOwnProperty(e) && mi[e] || (mi[e] = !0, S("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, dv = function(e, t) {
        ed.hasOwnProperty(t) && ed[t] || (ed[t] = !0, S(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(qu, "")));
      }, pv = function(e, t) {
        Jo || (Jo = !0, S("`NaN` is an invalid value for the `%s` css style property.", e));
      }, vv = function(e, t) {
        cv || (cv = !0, S("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      uv = function(e, t) {
        e.indexOf("-") > -1 ? td(e) : Gm.test(e) ? nd(e) : qu.test(t) && dv(e, t), typeof t == "number" && (isNaN(t) ? pv(e, t) : isFinite(t) || vv(e, t));
      };
    }
    var Xm = uv;
    function Km(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var u = e[i];
            if (u != null) {
              var s = i.indexOf("--") === 0;
              t += a + (s ? i : qm(i)) + ":", t += dc(i, u, s), a = ";";
            }
          }
        return t || null;
      }
    }
    function hv(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var u = i.indexOf("--") === 0;
          u || Xm(i, t[i]);
          var s = dc(i, t[i], u);
          i === "float" && (i = "cssFloat"), u ? a.setProperty(i, s) : a[i] = s;
        }
    }
    function Jm(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function mv(e) {
      var t = {};
      for (var a in e)
        for (var i = Wm[a] || [a], u = 0; u < i.length; u++)
          t[i[u]] = a;
      return t;
    }
    function Za(e, t) {
      {
        if (!t)
          return;
        var a = mv(e), i = mv(t), u = {};
        for (var s in a) {
          var f = a[s], p = i[s];
          if (p && f !== p) {
            var v = f + "," + p;
            if (u[v])
              continue;
            u[v] = !0, S("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", Jm(e[f]) ? "Removing" : "Updating", f, p);
          }
        }
      }
    }
    var Zo = {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0
      // NOTE: menuitem's close tag should be omitted, but that causes problems.
    }, yv = nt({
      menuitem: !0
    }, Zo), gv = "__html";
    function pc(e, t) {
      if (t) {
        if (yv[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(gv in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && S("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function hl(e, t) {
      if (e.indexOf("-") === -1)
        return typeof t.is == "string";
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
    var Gu = {
      // HTML
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      // SVG
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, Sv = {
      "aria-current": 0,
      // state
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      // state
      "aria-hidden": 0,
      // state
      "aria-invalid": 0,
      // state
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      // Widget Attributes
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      // Live Region Attributes
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      // Drag-and-Drop Attributes
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      // Relationship Attributes
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, Xu = {}, Ku = new RegExp("^(aria)-[" + ae + "]*$"), rd = new RegExp("^(aria)[A-Z][" + ae + "]*$");
    function es(e, t) {
      {
        if (ir.call(Xu, t) && Xu[t])
          return !0;
        if (rd.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = Sv.hasOwnProperty(a) ? a : null;
          if (i == null)
            return S("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), Xu[t] = !0, !0;
          if (t !== i)
            return S("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), Xu[t] = !0, !0;
        }
        if (Ku.test(t)) {
          var u = t.toLowerCase(), s = Sv.hasOwnProperty(u) ? u : null;
          if (s == null)
            return Xu[t] = !0, !1;
          if (t !== s)
            return S("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), Xu[t] = !0, !0;
        }
      }
      return !0;
    }
    function ad(e, t) {
      {
        var a = [];
        for (var i in t) {
          var u = es(e, i);
          u || a.push(i);
        }
        var s = a.map(function(f) {
          return "`" + f + "`";
        }).join(", ");
        a.length === 1 ? S("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e) : a.length > 1 && S("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e);
      }
    }
    function Ev(e, t) {
      hl(e, t) || ad(e, t);
    }
    var ts = !1;
    function Ju(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !ts && (ts = !0, e === "select" && t.multiple ? S("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : S("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var vc = function() {
    };
    {
      var _r = {}, ns = /^on./, Cv = /^on[^A-Z]/, Rv = new RegExp("^(aria)-[" + ae + "]*$"), Tv = new RegExp("^(aria)[A-Z][" + ae + "]*$");
      vc = function(e, t, a, i) {
        if (ir.call(_r, t) && _r[t])
          return !0;
        var u = t.toLowerCase();
        if (u === "onfocusin" || u === "onfocusout")
          return S("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), _r[t] = !0, !0;
        if (i != null) {
          var s = i.registrationNameDependencies, f = i.possibleRegistrationNames;
          if (s.hasOwnProperty(t))
            return !0;
          var p = f.hasOwnProperty(u) ? f[u] : null;
          if (p != null)
            return S("Invalid event handler property `%s`. Did you mean `%s`?", t, p), _r[t] = !0, !0;
          if (ns.test(t))
            return S("Unknown event handler property `%s`. It will be ignored.", t), _r[t] = !0, !0;
        } else if (ns.test(t))
          return Cv.test(t) && S("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), _r[t] = !0, !0;
        if (Rv.test(t) || Tv.test(t))
          return !0;
        if (u === "innerhtml")
          return S("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), _r[t] = !0, !0;
        if (u === "aria")
          return S("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), _r[t] = !0, !0;
        if (u === "is" && a !== null && a !== void 0 && typeof a != "string")
          return S("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), _r[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return S("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), _r[t] = !0, !0;
        var v = un(t), y = v !== null && v.type === Xn;
        if (Gu.hasOwnProperty(u)) {
          var g = Gu[u];
          if (g !== t)
            return S("Invalid DOM property `%s`. Did you mean `%s`?", t, g), _r[t] = !0, !0;
        } else if (!y && t !== u)
          return S("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, u), _r[t] = !0, !0;
        return typeof a == "boolean" && dn(t, a, v, !1) ? (a ? S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), _r[t] = !0, !0) : y ? !0 : dn(t, a, v, !1) ? (_r[t] = !0, !1) : ((a === "false" || a === "true") && v !== null && v.type === Mn && (S("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), _r[t] = !0), !0);
      };
    }
    var bv = function(e, t, a) {
      {
        var i = [];
        for (var u in t) {
          var s = vc(e, u, t[u], a);
          s || i.push(u);
        }
        var f = i.map(function(p) {
          return "`" + p + "`";
        }).join(", ");
        i.length === 1 ? S("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e) : i.length > 1 && S("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e);
      }
    };
    function _v(e, t, a) {
      hl(e, t) || bv(e, t, a);
    }
    var id = 1, yi = 2, tu = 4, ld = id | yi | tu, rs = null;
    function Zm(e) {
      rs !== null && S("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), rs = e;
    }
    function as() {
      rs === null && S("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), rs = null;
    }
    function ey(e) {
      return e === rs;
    }
    function hc(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === Bi ? t.parentNode : t;
    }
    var mc = null, $t = null, ml = null;
    function is(e) {
      var t = xo(e);
      if (t) {
        if (typeof mc != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = kh(a);
          mc(t.stateNode, t.type, i);
        }
      }
    }
    function ls(e) {
      mc = e;
    }
    function ud(e) {
      $t ? ml ? ml.push(e) : ml = [e] : $t = e;
    }
    function od() {
      return $t !== null || ml !== null;
    }
    function Zu() {
      if ($t) {
        var e = $t, t = ml;
        if ($t = null, ml = null, is(e), t)
          for (var a = 0; a < t.length; a++)
            is(t[a]);
      }
    }
    var us = function(e, t) {
      return e(t);
    }, nu = function() {
    }, yc = !1;
    function ty() {
      var e = od();
      e && (nu(), Zu());
    }
    function wv(e, t, a) {
      if (yc)
        return e(t, a);
      yc = !0;
      try {
        return us(e, t, a);
      } finally {
        yc = !1, ty();
      }
    }
    function xv(e, t, a) {
      us = e, nu = a;
    }
    function gc(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function Sc(e, t, a) {
      switch (e) {
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
          return !!(a.disabled && gc(t));
        default:
          return !1;
      }
    }
    function ru(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = kh(a);
      if (i === null)
        return null;
      var u = i[t];
      if (Sc(t, e.type, i))
        return null;
      if (u && typeof u != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof u + "` type.");
      return u;
    }
    var os = !1;
    if (qn)
      try {
        var au = {};
        Object.defineProperty(au, "passive", {
          get: function() {
            os = !0;
          }
        }), window.addEventListener("test", au, au), window.removeEventListener("test", au, au);
      } catch {
        os = !1;
      }
    function Ec(e, t, a, i, u, s, f, p, v) {
      var y = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, y);
      } catch (g) {
        this.onError(g);
      }
    }
    var kv = Ec;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var Cc = document.createElement("react");
      kv = function(t, a, i, u, s, f, p, v, y) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var g = document.createEvent("Event"), x = !1, _ = !0, z = window.event, A = Object.getOwnPropertyDescriptor(window, "event");
        function P() {
          Cc.removeEventListener(V, Ve, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = z);
        }
        var ce = Array.prototype.slice.call(arguments, 3);
        function Ve() {
          x = !0, P(), a.apply(i, ce), _ = !1;
        }
        var Le, Ot = !1, bt = !1;
        function D(O) {
          if (Le = O.error, Ot = !0, Le === null && O.colno === 0 && O.lineno === 0 && (bt = !0), O.defaultPrevented && Le != null && typeof Le == "object")
            try {
              Le._suppressLogging = !0;
            } catch {
            }
        }
        var V = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", D), Cc.addEventListener(V, Ve, !1), g.initEvent(V, !1, !1), Cc.dispatchEvent(g), A && Object.defineProperty(window, "event", A), x && _ && (Ot ? bt && (Le = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : Le = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(Le)), window.removeEventListener("error", D), !x)
          return P(), Ec.apply(this, arguments);
      };
    }
    var ny = kv, eo = !1, to = null, ei = !1, Rc = null, no = {
      onError: function(e) {
        eo = !0, to = e;
      }
    };
    function Ma(e, t, a, i, u, s, f, p, v) {
      eo = !1, to = null, ny.apply(no, arguments);
    }
    function ss(e, t, a, i, u, s, f, p, v) {
      if (Ma.apply(this, arguments), eo) {
        var y = cd();
        ei || (ei = !0, Rc = y);
      }
    }
    function Yi() {
      if (ei) {
        var e = Rc;
        throw ei = !1, Rc = null, e;
      }
    }
    function sd() {
      return eo;
    }
    function cd() {
      if (eo) {
        var e = to;
        return eo = !1, to = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function ro(e) {
      return e._reactInternals;
    }
    function iu(e) {
      return e._reactInternals !== void 0;
    }
    function cs(e, t) {
      e._reactInternals = t;
    }
    var ze = (
      /*                      */
      0
    ), Ii = (
      /*                */
      1
    ), Un = (
      /*                    */
      2
    ), Rt = (
      /*                       */
      4
    ), Kr = (
      /*                */
      16
    ), Jt = (
      /*                 */
      32
    ), rn = (
      /*                     */
      64
    ), gt = (
      /*                   */
      128
    ), Rn = (
      /*            */
      256
    ), An = (
      /*                          */
      512
    ), za = (
      /*                     */
      1024
    ), ha = (
      /*                      */
      2048
    ), jn = (
      /*                    */
      4096
    ), gi = (
      /*                   */
      8192
    ), Tc = (
      /*             */
      16384
    ), Dv = (
      /*               */
      32767
    ), lu = (
      /*                   */
      32768
    ), Ua = (
      /*                */
      65536
    ), ti = (
      /* */
      131072
    ), fs = (
      /*                       */
      1048576
    ), ds = (
      /*                    */
      2097152
    ), yl = (
      /*                 */
      4194304
    ), fd = (
      /*                */
      8388608
    ), Mr = (
      /*               */
      16777216
    ), gl = (
      /*              */
      33554432
    ), Sl = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      Rt | za | 0
    ), ao = Un | Rt | Kr | Jt | An | jn | gi, El = Rt | rn | An | gi, or = ha | Kr, Fn = yl | fd | ds, uu = We.ReactCurrentOwner;
    function zr(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (Un | jn)) !== ze && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === $ ? a : null;
    }
    function Si(e) {
      if (e.tag === ke) {
        var t = e.memoizedState;
        if (t === null) {
          var a = e.alternate;
          a !== null && (t = a.memoizedState);
        }
        if (t !== null)
          return t.dehydrated;
      }
      return null;
    }
    function Cl(e) {
      return e.tag === $ ? e.stateNode.containerInfo : null;
    }
    function Ov(e) {
      return zr(e) === e;
    }
    function dd(e) {
      {
        var t = uu.current;
        if (t !== null && t.tag === le) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || S("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Ke(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var u = ro(e);
      return u ? zr(u) === u : !1;
    }
    function bc(e) {
      if (zr(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function Jr(e) {
      var t = e.alternate;
      if (!t) {
        var a = zr(e);
        if (a === null)
          throw new Error("Unable to find node on an unmounted component.");
        return a !== e ? null : e;
      }
      for (var i = e, u = t; ; ) {
        var s = i.return;
        if (s === null)
          break;
        var f = s.alternate;
        if (f === null) {
          var p = s.return;
          if (p !== null) {
            i = u = p;
            continue;
          }
          break;
        }
        if (s.child === f.child) {
          for (var v = s.child; v; ) {
            if (v === i)
              return bc(s), e;
            if (v === u)
              return bc(s), t;
            v = v.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (i.return !== u.return)
          i = s, u = f;
        else {
          for (var y = !1, g = s.child; g; ) {
            if (g === i) {
              y = !0, i = s, u = f;
              break;
            }
            if (g === u) {
              y = !0, u = s, i = f;
              break;
            }
            g = g.sibling;
          }
          if (!y) {
            for (g = f.child; g; ) {
              if (g === i) {
                y = !0, i = f, u = s;
                break;
              }
              if (g === u) {
                y = !0, u = f, i = s;
                break;
              }
              g = g.sibling;
            }
            if (!y)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (i.alternate !== u)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (i.tag !== $)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function Zr(e) {
      var t = Jr(e);
      return t !== null ? vn(t) : null;
    }
    function vn(e) {
      if (e.tag === Q || e.tag === ie)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = vn(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function ni(e) {
      var t = Jr(e);
      return t !== null ? pd(t) : null;
    }
    function pd(e) {
      if (e.tag === Q || e.tag === ie)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== q) {
          var a = pd(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var vd = L.unstable_scheduleCallback, hd = L.unstable_cancelCallback, md = L.unstable_shouldYield, Lv = L.unstable_requestPaint, wn = L.unstable_now, Nv = L.unstable_getCurrentPriorityLevel, Qi = L.unstable_ImmediatePriority, ps = L.unstable_UserBlockingPriority, ou = L.unstable_NormalPriority, vs = L.unstable_LowPriority, io = L.unstable_IdlePriority, Mv = L.unstable_yieldValue, zv = L.unstable_setDisableYieldValue, ri = null, sr = null, oe = null, ma = !1, wr = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function yd(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return S("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        Te && (e = nt({}, e, {
          getLaneLabelMap: Cd,
          injectProfilingHooks: su
        })), ri = t.inject(e), sr = t;
      } catch (a) {
        S("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function gd(e, t) {
      if (sr && typeof sr.onScheduleFiberRoot == "function")
        try {
          sr.onScheduleFiberRoot(ri, e, t);
        } catch (a) {
          ma || (ma = !0, S("React instrumentation encountered an error: %s", a));
        }
    }
    function Sd(e, t) {
      if (sr && typeof sr.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & gt) === gt;
          if (Se) {
            var i;
            switch (t) {
              case ra:
                i = Qi;
                break;
              case ja:
                i = ps;
                break;
              case cr:
                i = ou;
                break;
              case ef:
                i = io;
                break;
              default:
                i = ou;
                break;
            }
            sr.onCommitFiberRoot(ri, e, i, a);
          }
        } catch (u) {
          ma || (ma = !0, S("React instrumentation encountered an error: %s", u));
        }
    }
    function Ed(e) {
      if (sr && typeof sr.onPostCommitFiberRoot == "function")
        try {
          sr.onPostCommitFiberRoot(ri, e);
        } catch (t) {
          ma || (ma = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function lo(e) {
      if (sr && typeof sr.onCommitFiberUnmount == "function")
        try {
          sr.onCommitFiberUnmount(ri, e);
        } catch (t) {
          ma || (ma = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function It(e) {
      if (typeof Mv == "function" && (zv(e), Ne(e)), sr && typeof sr.setStrictMode == "function")
        try {
          sr.setStrictMode(ri, e);
        } catch (t) {
          ma || (ma = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function su(e) {
      oe = e;
    }
    function Cd() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < xd; a++) {
          var i = Pv(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function Uv(e) {
      oe !== null && typeof oe.markCommitStarted == "function" && oe.markCommitStarted(e);
    }
    function Ei() {
      oe !== null && typeof oe.markCommitStopped == "function" && oe.markCommitStopped();
    }
    function Aa(e) {
      oe !== null && typeof oe.markComponentRenderStarted == "function" && oe.markComponentRenderStarted(e);
    }
    function Rl() {
      oe !== null && typeof oe.markComponentRenderStopped == "function" && oe.markComponentRenderStopped();
    }
    function Av(e) {
      oe !== null && typeof oe.markComponentPassiveEffectMountStarted == "function" && oe.markComponentPassiveEffectMountStarted(e);
    }
    function Wi() {
      oe !== null && typeof oe.markComponentPassiveEffectMountStopped == "function" && oe.markComponentPassiveEffectMountStopped();
    }
    function Tl(e) {
      oe !== null && typeof oe.markComponentPassiveEffectUnmountStarted == "function" && oe.markComponentPassiveEffectUnmountStarted(e);
    }
    function _c() {
      oe !== null && typeof oe.markComponentPassiveEffectUnmountStopped == "function" && oe.markComponentPassiveEffectUnmountStopped();
    }
    function jv(e) {
      oe !== null && typeof oe.markComponentLayoutEffectMountStarted == "function" && oe.markComponentLayoutEffectMountStarted(e);
    }
    function wc() {
      oe !== null && typeof oe.markComponentLayoutEffectMountStopped == "function" && oe.markComponentLayoutEffectMountStopped();
    }
    function Rd(e) {
      oe !== null && typeof oe.markComponentLayoutEffectUnmountStarted == "function" && oe.markComponentLayoutEffectUnmountStarted(e);
    }
    function uo() {
      oe !== null && typeof oe.markComponentLayoutEffectUnmountStopped == "function" && oe.markComponentLayoutEffectUnmountStopped();
    }
    function Ci(e, t, a) {
      oe !== null && typeof oe.markComponentErrored == "function" && oe.markComponentErrored(e, t, a);
    }
    function hs(e, t, a) {
      oe !== null && typeof oe.markComponentSuspended == "function" && oe.markComponentSuspended(e, t, a);
    }
    function ms(e) {
      oe !== null && typeof oe.markLayoutEffectsStarted == "function" && oe.markLayoutEffectsStarted(e);
    }
    function cu() {
      oe !== null && typeof oe.markLayoutEffectsStopped == "function" && oe.markLayoutEffectsStopped();
    }
    function Td(e) {
      oe !== null && typeof oe.markPassiveEffectsStarted == "function" && oe.markPassiveEffectsStarted(e);
    }
    function oo() {
      oe !== null && typeof oe.markPassiveEffectsStopped == "function" && oe.markPassiveEffectsStopped();
    }
    function bd(e) {
      oe !== null && typeof oe.markRenderStarted == "function" && oe.markRenderStarted(e);
    }
    function _d() {
      oe !== null && typeof oe.markRenderYielded == "function" && oe.markRenderYielded();
    }
    function gn() {
      oe !== null && typeof oe.markRenderStopped == "function" && oe.markRenderStopped();
    }
    function xc(e) {
      oe !== null && typeof oe.markRenderScheduled == "function" && oe.markRenderScheduled(e);
    }
    function wd(e, t) {
      oe !== null && typeof oe.markForceUpdateScheduled == "function" && oe.markForceUpdateScheduled(e, t);
    }
    function ys(e, t) {
      oe !== null && typeof oe.markStateUpdateScheduled == "function" && oe.markStateUpdateScheduled(e, t);
    }
    var Ue = (
      /*                         */
      0
    ), St = (
      /*                 */
      1
    ), _t = (
      /*                    */
      2
    ), rt = (
      /*               */
      8
    ), Zt = (
      /*              */
      16
    ), Yn = Math.clz32 ? Math.clz32 : Ss, kc = Math.log, gs = Math.LN2;
    function Ss(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (kc(t) / gs | 0) | 0;
    }
    var xd = 31, Y = (
      /*                        */
      0
    ), Hn = (
      /*                          */
      0
    ), Qe = (
      /*                        */
      1
    ), bl = (
      /*    */
      2
    ), Zn = (
      /*             */
      4
    ), er = (
      /*            */
      8
    ), ea = (
      /*                     */
      16
    ), fu = (
      /*                */
      32
    ), _l = (
      /*                       */
      4194240
    ), so = (
      /*                        */
      64
    ), Dc = (
      /*                        */
      128
    ), Oc = (
      /*                        */
      256
    ), Lc = (
      /*                        */
      512
    ), Nc = (
      /*                        */
      1024
    ), Mc = (
      /*                        */
      2048
    ), zc = (
      /*                        */
      4096
    ), Uc = (
      /*                        */
      8192
    ), du = (
      /*                        */
      16384
    ), Ac = (
      /*                       */
      32768
    ), co = (
      /*                       */
      65536
    ), fo = (
      /*                       */
      131072
    ), jc = (
      /*                       */
      262144
    ), Es = (
      /*                       */
      524288
    ), Fc = (
      /*                       */
      1048576
    ), Hc = (
      /*                       */
      2097152
    ), Cs = (
      /*                            */
      130023424
    ), pu = (
      /*                             */
      4194304
    ), Rs = (
      /*                             */
      8388608
    ), Pc = (
      /*                             */
      16777216
    ), Vc = (
      /*                             */
      33554432
    ), Bc = (
      /*                             */
      67108864
    ), Fv = pu, po = (
      /*          */
      134217728
    ), Hv = (
      /*                          */
      268435455
    ), Ts = (
      /*               */
      268435456
    ), wl = (
      /*                        */
      536870912
    ), ya = (
      /*                   */
      1073741824
    );
    function Pv(e) {
      {
        if (e & Qe)
          return "Sync";
        if (e & bl)
          return "InputContinuousHydration";
        if (e & Zn)
          return "InputContinuous";
        if (e & er)
          return "DefaultHydration";
        if (e & ea)
          return "Default";
        if (e & fu)
          return "TransitionHydration";
        if (e & _l)
          return "Transition";
        if (e & Cs)
          return "Retry";
        if (e & po)
          return "SelectiveHydration";
        if (e & Ts)
          return "IdleHydration";
        if (e & wl)
          return "Idle";
        if (e & ya)
          return "Offscreen";
      }
    }
    var Qt = -1, $c = so, Yc = pu;
    function bs(e) {
      switch (vu(e)) {
        case Qe:
          return Qe;
        case bl:
          return bl;
        case Zn:
          return Zn;
        case er:
          return er;
        case ea:
          return ea;
        case fu:
          return fu;
        case so:
        case Dc:
        case Oc:
        case Lc:
        case Nc:
        case Mc:
        case zc:
        case Uc:
        case du:
        case Ac:
        case co:
        case fo:
        case jc:
        case Es:
        case Fc:
        case Hc:
          return e & _l;
        case pu:
        case Rs:
        case Pc:
        case Vc:
        case Bc:
          return e & Cs;
        case po:
          return po;
        case Ts:
          return Ts;
        case wl:
          return wl;
        case ya:
          return ya;
        default:
          return S("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function ta(e, t) {
      var a = e.pendingLanes;
      if (a === Y)
        return Y;
      var i = Y, u = e.suspendedLanes, s = e.pingedLanes, f = a & Hv;
      if (f !== Y) {
        var p = f & ~u;
        if (p !== Y)
          i = bs(p);
        else {
          var v = f & s;
          v !== Y && (i = bs(v));
        }
      } else {
        var y = a & ~u;
        y !== Y ? i = bs(y) : s !== Y && (i = bs(s));
      }
      if (i === Y)
        return Y;
      if (t !== Y && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & u) === Y) {
        var g = vu(i), x = vu(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          g >= x || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          g === ea && (x & _l) !== Y
        )
          return t;
      }
      (i & Zn) !== Y && (i |= a & ea);
      var _ = e.entangledLanes;
      if (_ !== Y)
        for (var z = e.entanglements, A = i & _; A > 0; ) {
          var P = xn(A), ce = 1 << P;
          i |= z[P], A &= ~ce;
        }
      return i;
    }
    function kd(e, t) {
      for (var a = e.eventTimes, i = Qt; t > 0; ) {
        var u = xn(t), s = 1 << u, f = a[u];
        f > i && (i = f), t &= ~s;
      }
      return i;
    }
    function Ic(e, t) {
      switch (e) {
        case Qe:
        case bl:
        case Zn:
          return t + 250;
        case er:
        case ea:
        case fu:
        case so:
        case Dc:
        case Oc:
        case Lc:
        case Nc:
        case Mc:
        case zc:
        case Uc:
        case du:
        case Ac:
        case co:
        case fo:
        case jc:
        case Es:
        case Fc:
        case Hc:
          return t + 5e3;
        case pu:
        case Rs:
        case Pc:
        case Vc:
        case Bc:
          return Qt;
        case po:
        case Ts:
        case wl:
        case ya:
          return Qt;
        default:
          return S("Should have found matching lanes. This is a bug in React."), Qt;
      }
    }
    function Vv(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, u = e.pingedLanes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = xn(f), v = 1 << p, y = s[p];
        y === Qt ? ((v & i) === Y || (v & u) !== Y) && (s[p] = Ic(v, t)) : y <= t && (e.expiredLanes |= v), f &= ~v;
      }
    }
    function Bv(e) {
      return bs(e.pendingLanes);
    }
    function Qc(e) {
      var t = e.pendingLanes & -1073741825;
      return t !== Y ? t : t & ya ? ya : Y;
    }
    function Dd(e) {
      return (e & Qe) !== Y;
    }
    function xl(e) {
      return (e & Hv) !== Y;
    }
    function Wc(e) {
      return (e & Cs) === e;
    }
    function Od(e) {
      var t = Qe | Zn | ea;
      return (e & t) === Y;
    }
    function ry(e) {
      return (e & _l) === e;
    }
    function _s(e, t) {
      var a = bl | Zn | er | ea;
      return (t & a) !== Y;
    }
    function $v(e, t) {
      return (t & e.expiredLanes) !== Y;
    }
    function Ld(e) {
      return (e & _l) !== Y;
    }
    function Nd() {
      var e = $c;
      return $c <<= 1, ($c & _l) === Y && ($c = so), e;
    }
    function Yv() {
      var e = Yc;
      return Yc <<= 1, (Yc & Cs) === Y && (Yc = pu), e;
    }
    function vu(e) {
      return e & -e;
    }
    function tr(e) {
      return vu(e);
    }
    function xn(e) {
      return 31 - Yn(e);
    }
    function qc(e) {
      return xn(e);
    }
    function na(e, t) {
      return (e & t) !== Y;
    }
    function hu(e, t) {
      return (e & t) === t;
    }
    function lt(e, t) {
      return e | t;
    }
    function ws(e, t) {
      return e & ~t;
    }
    function Gc(e, t) {
      return e & t;
    }
    function ay(e) {
      return e;
    }
    function Md(e, t) {
      return e !== Hn && e < t ? e : t;
    }
    function Xc(e) {
      for (var t = [], a = 0; a < xd; a++)
        t.push(e);
      return t;
    }
    function vo(e, t, a) {
      e.pendingLanes |= t, t !== wl && (e.suspendedLanes = Y, e.pingedLanes = Y);
      var i = e.eventTimes, u = qc(t);
      i[u] = a;
    }
    function zd(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var u = xn(i), s = 1 << u;
        a[u] = Qt, i &= ~s;
      }
    }
    function Kc(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function Iv(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = Y, e.pingedLanes = Y, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, u = e.eventTimes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = xn(f), v = 1 << p;
        i[p] = Y, u[p] = Qt, s[p] = Qt, f &= ~v;
      }
    }
    function xs(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, u = a; u; ) {
        var s = xn(u), f = 1 << s;
        // Is this one of the newly entangled lanes?
        f & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[s] & t && (i[s] |= t), u &= ~f;
      }
    }
    function Jc(e, t) {
      var a = vu(t), i;
      switch (a) {
        case Zn:
          i = bl;
          break;
        case ea:
          i = er;
          break;
        case so:
        case Dc:
        case Oc:
        case Lc:
        case Nc:
        case Mc:
        case zc:
        case Uc:
        case du:
        case Ac:
        case co:
        case fo:
        case jc:
        case Es:
        case Fc:
        case Hc:
        case pu:
        case Rs:
        case Pc:
        case Vc:
        case Bc:
          i = fu;
          break;
        case wl:
          i = Ts;
          break;
        default:
          i = Hn;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== Hn ? Hn : i;
    }
    function Qv(e, t, a) {
      if (wr)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var u = qc(a), s = 1 << u, f = i[u];
          f.add(t), a &= ~s;
        }
    }
    function Ud(e, t) {
      if (wr)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var u = qc(t), s = 1 << u, f = a[u];
          f.size > 0 && (f.forEach(function(p) {
            var v = p.alternate;
            (v === null || !i.has(v)) && i.add(p);
          }), f.clear()), t &= ~s;
        }
    }
    function Zc(e, t) {
      return null;
    }
    var ra = Qe, ja = Zn, cr = ea, ef = wl, ho = Hn;
    function ga() {
      return ho;
    }
    function In(e) {
      ho = e;
    }
    function Wv(e, t) {
      var a = ho;
      try {
        return ho = e, t();
      } finally {
        ho = a;
      }
    }
    function ks(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function xr(e, t) {
      return e > t ? e : t;
    }
    function Ad(e, t) {
      return e !== 0 && e < t;
    }
    function qv(e) {
      var t = vu(e);
      return Ad(ra, t) ? Ad(ja, t) ? xl(t) ? cr : ef : ja : ra;
    }
    function mu(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var fr;
    function iy(e) {
      fr = e;
    }
    function Re(e) {
      fr(e);
    }
    var kl;
    function jd(e) {
      kl = e;
    }
    var Fd;
    function ly(e) {
      Fd = e;
    }
    var mo;
    function tf(e) {
      mo = e;
    }
    var nf;
    function Gv(e) {
      nf = e;
    }
    var rf = !1, Ds = [], Ri = null, Ti = null, Sn = null, Ur = /* @__PURE__ */ new Map(), Fa = /* @__PURE__ */ new Map(), qi = [], Xv = [
      "mousedown",
      "mouseup",
      "touchcancel",
      "touchend",
      "touchstart",
      "auxclick",
      "dblclick",
      "pointercancel",
      "pointerdown",
      "pointerup",
      "dragend",
      "dragstart",
      "drop",
      "compositionend",
      "compositionstart",
      "keydown",
      "keypress",
      "keyup",
      "input",
      "textInput",
      // Intentionally camelCase
      "copy",
      "cut",
      "paste",
      "click",
      "change",
      "contextmenu",
      "reset",
      "submit"
    ];
    function ai(e) {
      return Xv.indexOf(e) > -1;
    }
    function Kv(e, t, a, i, u) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a,
        nativeEvent: u,
        targetContainers: [i]
      };
    }
    function ii(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          Ri = null;
          break;
        case "dragenter":
        case "dragleave":
          Ti = null;
          break;
        case "mouseover":
        case "mouseout":
          Sn = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          Ur.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var i = t.pointerId;
          Fa.delete(i);
          break;
        }
      }
    }
    function Os(e, t, a, i, u, s) {
      if (e === null || e.nativeEvent !== s) {
        var f = Kv(t, a, i, u, s);
        if (t !== null) {
          var p = xo(t);
          p !== null && kl(p);
        }
        return f;
      }
      e.eventSystemFlags |= i;
      var v = e.targetContainers;
      return u !== null && v.indexOf(u) === -1 && v.push(u), e;
    }
    function Jv(e, t, a, i, u) {
      switch (t) {
        case "focusin": {
          var s = u;
          return Ri = Os(Ri, e, t, a, i, s), !0;
        }
        case "dragenter": {
          var f = u;
          return Ti = Os(Ti, e, t, a, i, f), !0;
        }
        case "mouseover": {
          var p = u;
          return Sn = Os(Sn, e, t, a, i, p), !0;
        }
        case "pointerover": {
          var v = u, y = v.pointerId;
          return Ur.set(y, Os(Ur.get(y) || null, e, t, a, i, v)), !0;
        }
        case "gotpointercapture": {
          var g = u, x = g.pointerId;
          return Fa.set(x, Os(Fa.get(x) || null, e, t, a, i, g)), !0;
        }
      }
      return !1;
    }
    function Hd(e) {
      var t = Bs(e.target);
      if (t !== null) {
        var a = zr(t);
        if (a !== null) {
          var i = a.tag;
          if (i === ke) {
            var u = Si(a);
            if (u !== null) {
              e.blockedOn = u, nf(e.priority, function() {
                Fd(a);
              });
              return;
            }
          } else if (i === $) {
            var s = a.stateNode;
            if (mu(s)) {
              e.blockedOn = Cl(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function Zv(e) {
      for (var t = mo(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < qi.length && Ad(t, qi[i].priority); i++)
        ;
      qi.splice(i, 0, a), i === 0 && Hd(a);
    }
    function Ls(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = Ns(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var u = e.nativeEvent, s = new u.constructor(u.type, u);
          Zm(s), u.target.dispatchEvent(s), as();
        } else {
          var f = xo(i);
          return f !== null && kl(f), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function eh(e, t, a) {
      Ls(e) && a.delete(t);
    }
    function af() {
      rf = !1, Ri !== null && Ls(Ri) && (Ri = null), Ti !== null && Ls(Ti) && (Ti = null), Sn !== null && Ls(Sn) && (Sn = null), Ur.forEach(eh), Fa.forEach(eh);
    }
    function yu(e, t) {
      e.blockedOn === t && (e.blockedOn = null, rf || (rf = !0, L.unstable_scheduleCallback(L.unstable_NormalPriority, af)));
    }
    function kr(e) {
      if (Ds.length > 0) {
        yu(Ds[0], e);
        for (var t = 1; t < Ds.length; t++) {
          var a = Ds[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      Ri !== null && yu(Ri, e), Ti !== null && yu(Ti, e), Sn !== null && yu(Sn, e);
      var i = function(p) {
        return yu(p, e);
      };
      Ur.forEach(i), Fa.forEach(i);
      for (var u = 0; u < qi.length; u++) {
        var s = qi[u];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; qi.length > 0; ) {
        var f = qi[0];
        if (f.blockedOn !== null)
          break;
        Hd(f), f.blockedOn === null && qi.shift();
      }
    }
    var Tt = We.ReactCurrentBatchConfig, Pn = !0;
    function kn(e) {
      Pn = !!e;
    }
    function dr() {
      return Pn;
    }
    function Sa(e, t, a) {
      var i = go(t), u;
      switch (i) {
        case ra:
          u = yo;
          break;
        case ja:
          u = Qn;
          break;
        case cr:
        default:
          u = gu;
          break;
      }
      return u.bind(null, t, a, e);
    }
    function yo(e, t, a, i) {
      var u = ga(), s = Tt.transition;
      Tt.transition = null;
      try {
        In(ra), gu(e, t, a, i);
      } finally {
        In(u), Tt.transition = s;
      }
    }
    function Qn(e, t, a, i) {
      var u = ga(), s = Tt.transition;
      Tt.transition = null;
      try {
        In(ja), gu(e, t, a, i);
      } finally {
        In(u), Tt.transition = s;
      }
    }
    function gu(e, t, a, i) {
      Pn && Su(e, t, a, i);
    }
    function Su(e, t, a, i) {
      var u = Ns(e, t, a, i);
      if (u === null) {
        by(e, t, i, Eu, a), ii(e, i);
        return;
      }
      if (Jv(u, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (ii(e, i), t & tu && ai(e)) {
        for (; u !== null; ) {
          var s = xo(u);
          s !== null && Re(s);
          var f = Ns(e, t, a, i);
          if (f === null && by(e, t, i, Eu, a), f === u)
            break;
          u = f;
        }
        u !== null && i.stopPropagation();
        return;
      }
      by(e, t, i, null, a);
    }
    var Eu = null;
    function Ns(e, t, a, i) {
      Eu = null;
      var u = hc(i), s = Bs(u);
      if (s !== null) {
        var f = zr(s);
        if (f === null)
          s = null;
        else {
          var p = f.tag;
          if (p === ke) {
            var v = Si(f);
            if (v !== null)
              return v;
            s = null;
          } else if (p === $) {
            var y = f.stateNode;
            if (mu(y))
              return Cl(f);
            s = null;
          } else f !== s && (s = null);
        }
      }
      return Eu = s, null;
    }
    function go(e) {
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
          return ra;
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
          return ja;
        case "message": {
          var t = Nv();
          switch (t) {
            case Qi:
              return ra;
            case ps:
              return ja;
            case ou:
            case vs:
              return cr;
            case io:
              return ef;
            default:
              return cr;
          }
        }
        default:
          return cr;
      }
    }
    function aa(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function Pd(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function So(e, t, a, i) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: i
      }), a;
    }
    function Gi(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var Dl = null, Ms = null, Ha = null;
    function lf(e) {
      return Dl = e, Ms = Eo(), !0;
    }
    function Ol() {
      Dl = null, Ms = null, Ha = null;
    }
    function zs() {
      if (Ha)
        return Ha;
      var e, t = Ms, a = t.length, i, u = Eo(), s = u.length;
      for (e = 0; e < a && t[e] === u[e]; e++)
        ;
      var f = a - e;
      for (i = 1; i <= f && t[a - i] === u[s - i]; i++)
        ;
      var p = i > 1 ? 1 - i : void 0;
      return Ha = u.slice(e, p), Ha;
    }
    function Eo() {
      return "value" in Dl ? Dl.value : Dl.textContent;
    }
    function Co(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function Cu() {
      return !0;
    }
    function Us() {
      return !1;
    }
    function an(e) {
      function t(a, i, u, s, f) {
        this._reactName = a, this._targetInst = u, this.type = i, this.nativeEvent = s, this.target = f, this.currentTarget = null;
        for (var p in e)
          if (e.hasOwnProperty(p)) {
            var v = e[p];
            v ? this[p] = v(s) : this[p] = s[p];
          }
        var y = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
        return y ? this.isDefaultPrevented = Cu : this.isDefaultPrevented = Us, this.isPropagationStopped = Us, this;
      }
      return nt(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = Cu);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = Cu);
        },
        /**
         * We release all dispatched `SyntheticEvent`s after each event loop, adding
         * them back into the pool. This allows a way to hold onto a reference that
         * won't be added back into the pool.
         */
        persist: function() {
        },
        /**
         * Checks if this event should be released back into the pool.
         *
         * @return {boolean} True if this should not be released, false otherwise.
         */
        isPersistent: Cu
      }), t;
    }
    var Ea = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, Ca = an(Ea), nr = nt({}, Ea, {
      view: 0,
      detail: 0
    }), th = an(nr), As, js, Fs;
    function Ll(e) {
      e !== Fs && (Fs && e.type === "mousemove" ? (As = e.screenX - Fs.screenX, js = e.screenY - Fs.screenY) : (As = 0, js = 0), Fs = e);
    }
    var Hs = nt({}, nr, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Yd,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (Ll(e), As);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : js;
      }
    }), uf = an(Hs), Ru = nt({}, Hs, {
      dataTransfer: 0
    }), Vd = an(Ru), Tu = nt({}, nr, {
      relatedTarget: 0
    }), of = an(Tu), nh = nt({}, Ea, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Bd = an(nh), sf = nt({}, Ea, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), uy = an(sf), oy = nt({}, Ea, {
      data: 0
    }), $d = an(oy), rh = $d, bu = {
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
    }, sy = {
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
    };
    function Ro(e) {
      if (e.key) {
        var t = bu[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = Co(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? sy[e.keyCode] || "Unidentified" : "";
    }
    var ah = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function Tn(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = ah[e];
      return i ? !!a[i] : !1;
    }
    function Yd(e) {
      return Tn;
    }
    var ih = nt({}, nr, {
      key: Ro,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Yd,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? Co(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? Co(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), cy = an(ih), fy = nt({}, Hs, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), Id = an(fy), lh = nt({}, nr, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Yd
    }), dy = an(lh), Pa = nt({}, Ea, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Qd = an(Pa), py = nt({}, Hs, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : (
          // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
          "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        );
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : (
          // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
          "wheelDeltaY" in e ? -e.wheelDeltaY : (
            // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
            "wheelDelta" in e ? -e.wheelDelta : 0
          )
        );
      },
      deltaZ: 0,
      // Browsers without "deltaMode" is reporting in raw wheel delta where one
      // notch on the scroll is always +/- 120, roughly equivalent to pixels.
      // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
      // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
      deltaMode: 0
    }), Nl = an(py), cf = [9, 13, 27, 32], Ml = 229, To = qn && "CompositionEvent" in window, _u = null;
    qn && "documentMode" in document && (_u = document.documentMode);
    var Wd = qn && "TextEvent" in window && !_u, uh = qn && (!To || _u && _u > 8 && _u <= 11), ff = 32, oh = String.fromCharCode(ff);
    function sh() {
      ct("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), ct("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), ct("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), ct("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var qd = !1;
    function df(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function pf(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function ch(e, t) {
      return e === "keydown" && t.keyCode === Ml;
    }
    function vf(e, t) {
      switch (e) {
        case "keyup":
          return cf.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== Ml;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function Gd(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function hf(e) {
      return e.locale === "ko";
    }
    var Xi = !1;
    function Xd(e, t, a, i, u) {
      var s, f;
      if (To ? s = pf(t) : Xi ? vf(t, i) && (s = "onCompositionEnd") : ch(t, i) && (s = "onCompositionStart"), !s)
        return null;
      uh && !hf(i) && (!Xi && s === "onCompositionStart" ? Xi = lf(u) : s === "onCompositionEnd" && Xi && (f = zs()));
      var p = hh(a, s);
      if (p.length > 0) {
        var v = new $d(s, t, null, i, u);
        if (e.push({
          event: v,
          listeners: p
        }), f)
          v.data = f;
        else {
          var y = Gd(i);
          y !== null && (v.data = y);
        }
      }
    }
    function mf(e, t) {
      switch (e) {
        case "compositionend":
          return Gd(t);
        case "keypress":
          var a = t.which;
          return a !== ff ? null : (qd = !0, oh);
        case "textInput":
          var i = t.data;
          return i === oh && qd ? null : i;
        default:
          return null;
      }
    }
    function fh(e, t) {
      if (Xi) {
        if (e === "compositionend" || !To && vf(e, t)) {
          var a = zs();
          return Ol(), Xi = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!df(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return uh && !hf(t) ? null : t.data;
        default:
          return null;
      }
    }
    function vy(e, t, a, i, u) {
      var s;
      if (Wd ? s = mf(t, i) : s = fh(t, i), !s)
        return null;
      var f = hh(a, "onBeforeInput");
      if (f.length > 0) {
        var p = new rh("onBeforeInput", "beforeinput", null, i, u);
        e.push({
          event: p,
          listeners: f
        }), p.data = s;
      }
    }
    function yf(e, t, a, i, u, s, f) {
      Xd(e, t, a, i, u), vy(e, t, a, i, u);
    }
    var hy = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0
    };
    function bo(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!hy[e.type] : t === "textarea";
    }
    /**
     * Checks if an event is supported in the current execution environment.
     *
     * NOTE: This will not work correctly for non-generic events such as `change`,
     * `reset`, `load`, `error`, and `select`.
     *
     * Borrows from Modernizr.
     *
     * @param {string} eventNameSuffix Event name, e.g. "click".
     * @return {boolean} True if the event is supported.
     * @internal
     * @license Modernizr 3.0.0pre (Custom Build) | MIT
     */
    function my(e) {
      if (!qn)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function gf() {
      ct("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function n(e, t, a, i) {
      ud(i);
      var u = hh(t, "onChange");
      if (u.length > 0) {
        var s = new Ca("onChange", "change", null, a, i);
        e.push({
          event: s,
          listeners: u
        });
      }
    }
    var r = null, l = null;
    function o(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function c(e) {
      var t = [];
      n(t, l, e, hc(e)), wv(d, t);
    }
    function d(e) {
      wE(e, 0);
    }
    function m(e) {
      var t = bf(e);
      if (dl(t))
        return e;
    }
    function E(e, t) {
      if (e === "change")
        return t;
    }
    var b = !1;
    qn && (b = my("input") && (!document.documentMode || document.documentMode > 9));
    function U(e, t) {
      r = e, l = t, r.attachEvent("onpropertychange", ee);
    }
    function J() {
      r && (r.detachEvent("onpropertychange", ee), r = null, l = null);
    }
    function ee(e) {
      e.propertyName === "value" && m(l) && c(e);
    }
    function K(e, t, a) {
      e === "focusin" ? (J(), U(t, a)) : e === "focusout" && J();
    }
    function he(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return m(l);
    }
    function _e(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function De(e, t) {
      if (e === "click")
        return m(t);
    }
    function Dn(e, t) {
      if (e === "input" || e === "change")
        return m(t);
    }
    function k(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || be(e, "number", e.value);
    }
    function w(e, t, a, i, u, s, f) {
      var p = a ? bf(a) : window, v, y;
      if (o(p) ? v = E : bo(p) ? b ? v = Dn : (v = he, y = K) : _e(p) && (v = De), v) {
        var g = v(t, a);
        if (g) {
          n(e, g, i, u);
          return;
        }
      }
      y && y(t, p, a), t === "focusout" && k(p);
    }
    function N() {
      sn("onMouseEnter", ["mouseout", "mouseover"]), sn("onMouseLeave", ["mouseout", "mouseover"]), sn("onPointerEnter", ["pointerout", "pointerover"]), sn("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function ne(e, t, a, i, u, s, f) {
      var p = t === "mouseover" || t === "pointerover", v = t === "mouseout" || t === "pointerout";
      if (p && !ey(i)) {
        var y = i.relatedTarget || i.fromElement;
        if (y && (Bs(y) || cp(y)))
          return;
      }
      if (!(!v && !p)) {
        var g;
        if (u.window === u)
          g = u;
        else {
          var x = u.ownerDocument;
          x ? g = x.defaultView || x.parentWindow : g = window;
        }
        var _, z;
        if (v) {
          var A = i.relatedTarget || i.toElement;
          if (_ = a, z = A ? Bs(A) : null, z !== null) {
            var P = zr(z);
            (z !== P || z.tag !== Q && z.tag !== ie) && (z = null);
          }
        } else
          _ = null, z = a;
        if (_ !== z) {
          var ce = uf, Ve = "onMouseLeave", Le = "onMouseEnter", Ot = "mouse";
          (t === "pointerout" || t === "pointerover") && (ce = Id, Ve = "onPointerLeave", Le = "onPointerEnter", Ot = "pointer");
          var bt = _ == null ? g : bf(_), D = z == null ? g : bf(z), V = new ce(Ve, Ot + "leave", _, i, u);
          V.target = bt, V.relatedTarget = D;
          var O = null, te = Bs(u);
          if (te === a) {
            var ge = new ce(Le, Ot + "enter", z, i, u);
            ge.target = D, ge.relatedTarget = bt, O = ge;
          }
          NT(e, V, O, _, z);
        }
      }
    }
    function Oe(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var we = typeof Object.is == "function" ? Object.is : Oe;
    function Ae(e, t) {
      if (we(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var u = 0; u < a.length; u++) {
        var s = a[u];
        if (!ir.call(t, s) || !we(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function Xe(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function rr(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function zt(e, t) {
      for (var a = Xe(e), i = 0, u = 0; a; ) {
        if (a.nodeType === Bi) {
          if (u = i + a.textContent.length, i <= t && u >= t)
            return {
              node: a,
              offset: t - i
            };
          i = u;
        }
        a = Xe(rr(a));
      }
    }
    function zl(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var u = i.anchorNode, s = i.anchorOffset, f = i.focusNode, p = i.focusOffset;
      try {
        u.nodeType, f.nodeType;
      } catch {
        return null;
      }
      return yy(e, u, s, f, p);
    }
    function yy(e, t, a, i, u) {
      var s = 0, f = -1, p = -1, v = 0, y = 0, g = e, x = null;
      e: for (; ; ) {
        for (var _ = null; g === t && (a === 0 || g.nodeType === Bi) && (f = s + a), g === i && (u === 0 || g.nodeType === Bi) && (p = s + u), g.nodeType === Bi && (s += g.nodeValue.length), (_ = g.firstChild) !== null; )
          x = g, g = _;
        for (; ; ) {
          if (g === e)
            break e;
          if (x === t && ++v === a && (f = s), x === i && ++y === u && (p = s), (_ = g.nextSibling) !== null)
            break;
          g = x, x = g.parentNode;
        }
        g = _;
      }
      return f === -1 || p === -1 ? null : {
        start: f,
        end: p
      };
    }
    function pT(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var u = i.getSelection(), s = e.textContent.length, f = Math.min(t.start, s), p = t.end === void 0 ? f : Math.min(t.end, s);
        if (!u.extend && f > p) {
          var v = p;
          p = f, f = v;
        }
        var y = zt(e, f), g = zt(e, p);
        if (y && g) {
          if (u.rangeCount === 1 && u.anchorNode === y.node && u.anchorOffset === y.offset && u.focusNode === g.node && u.focusOffset === g.offset)
            return;
          var x = a.createRange();
          x.setStart(y.node, y.offset), u.removeAllRanges(), f > p ? (u.addRange(x), u.extend(g.node, g.offset)) : (x.setEnd(g.node, g.offset), u.addRange(x));
        }
      }
    }
    function vE(e) {
      return e && e.nodeType === Bi;
    }
    function hE(e, t) {
      return !e || !t ? !1 : e === t ? !0 : vE(e) ? !1 : vE(t) ? hE(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function vT(e) {
      return e && e.ownerDocument && hE(e.ownerDocument.documentElement, e);
    }
    function hT(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function mE() {
      for (var e = window, t = Hi(); t instanceof e.HTMLIFrameElement; ) {
        if (hT(t))
          e = t.contentWindow;
        else
          return t;
        t = Hi(e.document);
      }
      return t;
    }
    function gy(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function mT() {
      var e = mE();
      return {
        focusedElem: e,
        selectionRange: gy(e) ? gT(e) : null
      };
    }
    function yT(e) {
      var t = mE(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && vT(a)) {
        i !== null && gy(a) && ST(a, i);
        for (var u = [], s = a; s = s.parentNode; )
          s.nodeType === Xr && u.push({
            element: s,
            left: s.scrollLeft,
            top: s.scrollTop
          });
        typeof a.focus == "function" && a.focus();
        for (var f = 0; f < u.length; f++) {
          var p = u[f];
          p.element.scrollLeft = p.left, p.element.scrollTop = p.top;
        }
      }
    }
    function gT(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = zl(e), t || {
        start: 0,
        end: 0
      };
    }
    function ST(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : pT(e, t);
    }
    var ET = qn && "documentMode" in document && document.documentMode <= 11;
    function CT() {
      ct("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var Sf = null, Sy = null, Kd = null, Ey = !1;
    function RT(e) {
      if ("selectionStart" in e && gy(e))
        return {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      var t = e.ownerDocument && e.ownerDocument.defaultView || window, a = t.getSelection();
      return {
        anchorNode: a.anchorNode,
        anchorOffset: a.anchorOffset,
        focusNode: a.focusNode,
        focusOffset: a.focusOffset
      };
    }
    function TT(e) {
      return e.window === e ? e.document : e.nodeType === $i ? e : e.ownerDocument;
    }
    function yE(e, t, a) {
      var i = TT(a);
      if (!(Ey || Sf == null || Sf !== Hi(i))) {
        var u = RT(Sf);
        if (!Kd || !Ae(Kd, u)) {
          Kd = u;
          var s = hh(Sy, "onSelect");
          if (s.length > 0) {
            var f = new Ca("onSelect", "select", null, t, a);
            e.push({
              event: f,
              listeners: s
            }), f.target = Sf;
          }
        }
      }
    }
    function bT(e, t, a, i, u, s, f) {
      var p = a ? bf(a) : window;
      switch (t) {
        case "focusin":
          (bo(p) || p.contentEditable === "true") && (Sf = p, Sy = a, Kd = null);
          break;
        case "focusout":
          Sf = null, Sy = null, Kd = null;
          break;
        case "mousedown":
          Ey = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Ey = !1, yE(e, i, u);
          break;
        case "selectionchange":
          if (ET)
            break;
        case "keydown":
        case "keyup":
          yE(e, i, u);
      }
    }
    function dh(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var Ef = {
      animationend: dh("Animation", "AnimationEnd"),
      animationiteration: dh("Animation", "AnimationIteration"),
      animationstart: dh("Animation", "AnimationStart"),
      transitionend: dh("Transition", "TransitionEnd")
    }, Cy = {}, gE = {};
    qn && (gE = document.createElement("div").style, "AnimationEvent" in window || (delete Ef.animationend.animation, delete Ef.animationiteration.animation, delete Ef.animationstart.animation), "TransitionEvent" in window || delete Ef.transitionend.transition);
    function ph(e) {
      if (Cy[e])
        return Cy[e];
      if (!Ef[e])
        return e;
      var t = Ef[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in gE)
          return Cy[e] = t[a];
      return e;
    }
    var SE = ph("animationend"), EE = ph("animationiteration"), CE = ph("animationstart"), RE = ph("transitionend"), TE = /* @__PURE__ */ new Map(), bE = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function _o(e, t) {
      TE.set(e, t), ct(t, [e]);
    }
    function _T() {
      for (var e = 0; e < bE.length; e++) {
        var t = bE[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        _o(a, "on" + i);
      }
      _o(SE, "onAnimationEnd"), _o(EE, "onAnimationIteration"), _o(CE, "onAnimationStart"), _o("dblclick", "onDoubleClick"), _o("focusin", "onFocus"), _o("focusout", "onBlur"), _o(RE, "onTransitionEnd");
    }
    function wT(e, t, a, i, u, s, f) {
      var p = TE.get(t);
      if (p !== void 0) {
        var v = Ca, y = t;
        switch (t) {
          case "keypress":
            if (Co(i) === 0)
              return;
          case "keydown":
          case "keyup":
            v = cy;
            break;
          case "focusin":
            y = "focus", v = of;
            break;
          case "focusout":
            y = "blur", v = of;
            break;
          case "beforeblur":
          case "afterblur":
            v = of;
            break;
          case "click":
            if (i.button === 2)
              return;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            v = uf;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = Vd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = dy;
            break;
          case SE:
          case EE:
          case CE:
            v = Bd;
            break;
          case RE:
            v = Qd;
            break;
          case "scroll":
            v = th;
            break;
          case "wheel":
            v = Nl;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = uy;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = Id;
            break;
        }
        var g = (s & tu) !== 0;
        {
          var x = !g && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", _ = OT(a, p, i.type, g, x);
          if (_.length > 0) {
            var z = new v(p, y, null, i, u);
            e.push({
              event: z,
              listeners: _
            });
          }
        }
      }
    }
    _T(), N(), gf(), CT(), sh();
    function xT(e, t, a, i, u, s, f) {
      wT(e, t, a, i, u, s);
      var p = (s & ld) === 0;
      p && (ne(e, t, a, i, u), w(e, t, a, i, u), bT(e, t, a, i, u), yf(e, t, a, i, u));
    }
    var Jd = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], Ry = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(Jd));
    function _E(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, ss(i, t, void 0, e), e.currentTarget = null;
    }
    function kT(e, t, a) {
      var i;
      if (a)
        for (var u = t.length - 1; u >= 0; u--) {
          var s = t[u], f = s.instance, p = s.currentTarget, v = s.listener;
          if (f !== i && e.isPropagationStopped())
            return;
          _E(e, v, p), i = f;
        }
      else
        for (var y = 0; y < t.length; y++) {
          var g = t[y], x = g.instance, _ = g.currentTarget, z = g.listener;
          if (x !== i && e.isPropagationStopped())
            return;
          _E(e, z, _), i = x;
        }
    }
    function wE(e, t) {
      for (var a = (t & tu) !== 0, i = 0; i < e.length; i++) {
        var u = e[i], s = u.event, f = u.listeners;
        kT(s, f, a);
      }
      Yi();
    }
    function DT(e, t, a, i, u) {
      var s = hc(a), f = [];
      xT(f, e, i, a, s, t), wE(f, t);
    }
    function En(e, t) {
      Ry.has(e) || S('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = i_(t), u = MT(e);
      i.has(u) || (xE(t, e, yi, a), i.add(u));
    }
    function Ty(e, t, a) {
      Ry.has(e) && !t && S('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= tu), xE(a, e, i, t);
    }
    var vh = "_reactListening" + Math.random().toString(36).slice(2);
    function Zd(e) {
      if (!e[vh]) {
        e[vh] = !0, st.forEach(function(a) {
          a !== "selectionchange" && (Ry.has(a) || Ty(a, !1, e), Ty(a, !0, e));
        });
        var t = e.nodeType === $i ? e : e.ownerDocument;
        t !== null && (t[vh] || (t[vh] = !0, Ty("selectionchange", !1, t)));
      }
    }
    function xE(e, t, a, i, u) {
      var s = Sa(e, t, a), f = void 0;
      os && (t === "touchstart" || t === "touchmove" || t === "wheel") && (f = !0), e = e, i ? f !== void 0 ? So(e, t, s, f) : Pd(e, t, s) : f !== void 0 ? Gi(e, t, s, f) : aa(e, t, s);
    }
    function kE(e, t) {
      return e === t || e.nodeType === zn && e.parentNode === t;
    }
    function by(e, t, a, i, u) {
      var s = i;
      if (!(t & id) && !(t & yi)) {
        var f = u;
        if (i !== null) {
          var p = i;
          e: for (; ; ) {
            if (p === null)
              return;
            var v = p.tag;
            if (v === $ || v === q) {
              var y = p.stateNode.containerInfo;
              if (kE(y, f))
                break;
              if (v === q)
                for (var g = p.return; g !== null; ) {
                  var x = g.tag;
                  if (x === $ || x === q) {
                    var _ = g.stateNode.containerInfo;
                    if (kE(_, f))
                      return;
                  }
                  g = g.return;
                }
              for (; y !== null; ) {
                var z = Bs(y);
                if (z === null)
                  return;
                var A = z.tag;
                if (A === Q || A === ie) {
                  p = s = z;
                  continue e;
                }
                y = y.parentNode;
              }
            }
            p = p.return;
          }
        }
      }
      wv(function() {
        return DT(e, t, a, s);
      });
    }
    function ep(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function OT(e, t, a, i, u, s) {
      for (var f = t !== null ? t + "Capture" : null, p = i ? f : t, v = [], y = e, g = null; y !== null; ) {
        var x = y, _ = x.stateNode, z = x.tag;
        if (z === Q && _ !== null && (g = _, p !== null)) {
          var A = ru(y, p);
          A != null && v.push(ep(y, A, g));
        }
        if (u)
          break;
        y = y.return;
      }
      return v;
    }
    function hh(e, t) {
      for (var a = t + "Capture", i = [], u = e; u !== null; ) {
        var s = u, f = s.stateNode, p = s.tag;
        if (p === Q && f !== null) {
          var v = f, y = ru(u, a);
          y != null && i.unshift(ep(u, y, v));
          var g = ru(u, t);
          g != null && i.push(ep(u, g, v));
        }
        u = u.return;
      }
      return i;
    }
    function Cf(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== Q);
      return e || null;
    }
    function LT(e, t) {
      for (var a = e, i = t, u = 0, s = a; s; s = Cf(s))
        u++;
      for (var f = 0, p = i; p; p = Cf(p))
        f++;
      for (; u - f > 0; )
        a = Cf(a), u--;
      for (; f - u > 0; )
        i = Cf(i), f--;
      for (var v = u; v--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = Cf(a), i = Cf(i);
      }
      return null;
    }
    function DE(e, t, a, i, u) {
      for (var s = t._reactName, f = [], p = a; p !== null && p !== i; ) {
        var v = p, y = v.alternate, g = v.stateNode, x = v.tag;
        if (y !== null && y === i)
          break;
        if (x === Q && g !== null) {
          var _ = g;
          if (u) {
            var z = ru(p, s);
            z != null && f.unshift(ep(p, z, _));
          } else if (!u) {
            var A = ru(p, s);
            A != null && f.push(ep(p, A, _));
          }
        }
        p = p.return;
      }
      f.length !== 0 && e.push({
        event: t,
        listeners: f
      });
    }
    function NT(e, t, a, i, u) {
      var s = i && u ? LT(i, u) : null;
      i !== null && DE(e, t, i, s, !1), u !== null && a !== null && DE(e, a, u, s, !0);
    }
    function MT(e, t) {
      return e + "__bubble";
    }
    var Va = !1, tp = "dangerouslySetInnerHTML", mh = "suppressContentEditableWarning", wo = "suppressHydrationWarning", OE = "autoFocus", Ps = "children", Vs = "style", yh = "__html", _y, gh, np, LE, Sh, NE, ME;
    _y = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, gh = function(e, t) {
      Ev(e, t), Ju(e, t), _v(e, t, {
        registrationNameDependencies: Ye,
        possibleRegistrationNames: mt
      });
    }, NE = qn && !document.documentMode, np = function(e, t, a) {
      if (!Va) {
        var i = Eh(a), u = Eh(t);
        u !== i && (Va = !0, S("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(u), JSON.stringify(i)));
      }
    }, LE = function(e) {
      if (!Va) {
        Va = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), S("Extra attributes from the server: %s", t);
      }
    }, Sh = function(e, t) {
      t === !1 ? S("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : S("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, ME = function(e, t) {
      var a = e.namespaceURI === Ja ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var zT = /\r\n?/g, UT = /\u0000|\uFFFD/g;
    function Eh(e) {
      $n(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(zT, `
`).replace(UT, "");
    }
    function Ch(e, t, a, i) {
      var u = Eh(t), s = Eh(e);
      if (s !== u && (i && (Va || (Va = !0, S('Text content did not match. Server: "%s" Client: "%s"', s, u))), a && W))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function zE(e) {
      return e.nodeType === $i ? e : e.ownerDocument;
    }
    function AT() {
    }
    function Rh(e) {
      e.onclick = AT;
    }
    function jT(e, t, a, i, u) {
      for (var s in i)
        if (i.hasOwnProperty(s)) {
          var f = i[s];
          if (s === Vs)
            f && Object.freeze(f), hv(t, f);
          else if (s === tp) {
            var p = f ? f[yh] : void 0;
            p != null && rv(t, p);
          } else if (s === Ps)
            if (typeof f == "string") {
              var v = e !== "textarea" || f !== "";
              v && vl(t, f);
            } else typeof f == "number" && vl(t, "" + f);
          else s === mh || s === wo || s === OE || (Ye.hasOwnProperty(s) ? f != null && (typeof f != "function" && Sh(s, f), s === "onScroll" && En("scroll", t)) : f != null && pa(t, s, f, u));
        }
    }
    function FT(e, t, a, i) {
      for (var u = 0; u < t.length; u += 2) {
        var s = t[u], f = t[u + 1];
        s === Vs ? hv(e, f) : s === tp ? rv(e, f) : s === Ps ? vl(e, f) : pa(e, s, f, i);
      }
    }
    function HT(e, t, a, i) {
      var u, s = zE(a), f, p = i;
      if (p === Ja && (p = Zf(e)), p === Ja) {
        if (u = hl(e, t), !u && e !== e.toLowerCase() && S("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var v = s.createElement("div");
          v.innerHTML = "<script><\/script>";
          var y = v.firstChild;
          f = v.removeChild(y);
        } else if (typeof t.is == "string")
          f = s.createElement(e, {
            is: t.is
          });
        else if (f = s.createElement(e), e === "select") {
          var g = f;
          t.multiple ? g.multiple = !0 : t.size && (g.size = t.size);
        }
      } else
        f = s.createElementNS(p, e);
      return p === Ja && !u && Object.prototype.toString.call(f) === "[object HTMLUnknownElement]" && !ir.call(_y, e) && (_y[e] = !0, S("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), f;
    }
    function PT(e, t) {
      return zE(t).createTextNode(e);
    }
    function VT(e, t, a, i) {
      var u = hl(t, a);
      gh(t, a);
      var s;
      switch (t) {
        case "dialog":
          En("cancel", e), En("close", e), s = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          En("load", e), s = a;
          break;
        case "video":
        case "audio":
          for (var f = 0; f < Jd.length; f++)
            En(Jd[f], e);
          s = a;
          break;
        case "source":
          En("error", e), s = a;
          break;
        case "img":
        case "image":
        case "link":
          En("error", e), En("load", e), s = a;
          break;
        case "details":
          En("toggle", e), s = a;
          break;
        case "input":
          Iu(e, a), s = Na(e, a), En("invalid", e);
          break;
        case "option":
          Bt(e, a), s = a;
          break;
        case "select":
          Xo(e, a), s = eu(e, a), En("invalid", e);
          break;
        case "textarea":
          ev(e, a), s = sc(e, a), En("invalid", e);
          break;
        default:
          s = a;
      }
      switch (pc(t, s), jT(t, e, i, s, u), t) {
        case "input":
          La(e), M(e, a, !1);
          break;
        case "textarea":
          La(e), nv(e);
          break;
        case "option":
          Xt(e, a);
          break;
        case "select":
          Xf(e, a);
          break;
        default:
          typeof s.onClick == "function" && Rh(e);
          break;
      }
    }
    function BT(e, t, a, i, u) {
      gh(t, i);
      var s = null, f, p;
      switch (t) {
        case "input":
          f = Na(e, a), p = Na(e, i), s = [];
          break;
        case "select":
          f = eu(e, a), p = eu(e, i), s = [];
          break;
        case "textarea":
          f = sc(e, a), p = sc(e, i), s = [];
          break;
        default:
          f = a, p = i, typeof f.onClick != "function" && typeof p.onClick == "function" && Rh(e);
          break;
      }
      pc(t, p);
      var v, y, g = null;
      for (v in f)
        if (!(p.hasOwnProperty(v) || !f.hasOwnProperty(v) || f[v] == null))
          if (v === Vs) {
            var x = f[v];
            for (y in x)
              x.hasOwnProperty(y) && (g || (g = {}), g[y] = "");
          } else v === tp || v === Ps || v === mh || v === wo || v === OE || (Ye.hasOwnProperty(v) ? s || (s = []) : (s = s || []).push(v, null));
      for (v in p) {
        var _ = p[v], z = f != null ? f[v] : void 0;
        if (!(!p.hasOwnProperty(v) || _ === z || _ == null && z == null))
          if (v === Vs)
            if (_ && Object.freeze(_), z) {
              for (y in z)
                z.hasOwnProperty(y) && (!_ || !_.hasOwnProperty(y)) && (g || (g = {}), g[y] = "");
              for (y in _)
                _.hasOwnProperty(y) && z[y] !== _[y] && (g || (g = {}), g[y] = _[y]);
            } else
              g || (s || (s = []), s.push(v, g)), g = _;
          else if (v === tp) {
            var A = _ ? _[yh] : void 0, P = z ? z[yh] : void 0;
            A != null && P !== A && (s = s || []).push(v, A);
          } else v === Ps ? (typeof _ == "string" || typeof _ == "number") && (s = s || []).push(v, "" + _) : v === mh || v === wo || (Ye.hasOwnProperty(v) ? (_ != null && (typeof _ != "function" && Sh(v, _), v === "onScroll" && En("scroll", e)), !s && z !== _ && (s = [])) : (s = s || []).push(v, _));
      }
      return g && (Za(g, p[Vs]), (s = s || []).push(Vs, g)), s;
    }
    function $T(e, t, a, i, u) {
      a === "input" && u.type === "radio" && u.name != null && h(e, u);
      var s = hl(a, i), f = hl(a, u);
      switch (FT(e, t, s, f), a) {
        case "input":
          C(e, u);
          break;
        case "textarea":
          tv(e, u);
          break;
        case "select":
          oc(e, u);
          break;
      }
    }
    function YT(e) {
      {
        var t = e.toLowerCase();
        return Gu.hasOwnProperty(t) && Gu[t] || null;
      }
    }
    function IT(e, t, a, i, u, s, f) {
      var p, v;
      switch (p = hl(t, a), gh(t, a), t) {
        case "dialog":
          En("cancel", e), En("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          En("load", e);
          break;
        case "video":
        case "audio":
          for (var y = 0; y < Jd.length; y++)
            En(Jd[y], e);
          break;
        case "source":
          En("error", e);
          break;
        case "img":
        case "image":
        case "link":
          En("error", e), En("load", e);
          break;
        case "details":
          En("toggle", e);
          break;
        case "input":
          Iu(e, a), En("invalid", e);
          break;
        case "option":
          Bt(e, a);
          break;
        case "select":
          Xo(e, a), En("invalid", e);
          break;
        case "textarea":
          ev(e, a), En("invalid", e);
          break;
      }
      pc(t, a);
      {
        v = /* @__PURE__ */ new Set();
        for (var g = e.attributes, x = 0; x < g.length; x++) {
          var _ = g[x].name.toLowerCase();
          switch (_) {
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              v.add(g[x].name);
          }
        }
      }
      var z = null;
      for (var A in a)
        if (a.hasOwnProperty(A)) {
          var P = a[A];
          if (A === Ps)
            typeof P == "string" ? e.textContent !== P && (a[wo] !== !0 && Ch(e.textContent, P, s, f), z = [Ps, P]) : typeof P == "number" && e.textContent !== "" + P && (a[wo] !== !0 && Ch(e.textContent, P, s, f), z = [Ps, "" + P]);
          else if (Ye.hasOwnProperty(A))
            P != null && (typeof P != "function" && Sh(A, P), A === "onScroll" && En("scroll", e));
          else if (f && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof p == "boolean") {
            var ce = void 0, Ve = un(A);
            if (a[wo] !== !0) {
              if (!(A === mh || A === wo || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              A === "value" || A === "checked" || A === "selected")) {
                if (A === tp) {
                  var Le = e.innerHTML, Ot = P ? P[yh] : void 0;
                  if (Ot != null) {
                    var bt = ME(e, Ot);
                    bt !== Le && np(A, Le, bt);
                  }
                } else if (A === Vs) {
                  if (v.delete(A), NE) {
                    var D = Km(P);
                    ce = e.getAttribute("style"), D !== ce && np(A, ce, D);
                  }
                } else if (p)
                  v.delete(A.toLowerCase()), ce = si(e, A, P), P !== ce && np(A, ce, P);
                else if (!fn(A, Ve, p) && !Kn(A, P, Ve, p)) {
                  var V = !1;
                  if (Ve !== null)
                    v.delete(Ve.attributeName), ce = Wl(e, A, P, Ve);
                  else {
                    var O = i;
                    if (O === Ja && (O = Zf(t)), O === Ja)
                      v.delete(A.toLowerCase());
                    else {
                      var te = YT(A);
                      te !== null && te !== A && (V = !0, v.delete(te)), v.delete(A);
                    }
                    ce = si(e, A, P);
                  }
                  var ge = j;
                  !ge && P !== ce && !V && np(A, ce, P);
                }
              }
            }
          }
        }
      switch (f && // $FlowFixMe - Should be inferred as not undefined.
      v.size > 0 && a[wo] !== !0 && LE(v), t) {
        case "input":
          La(e), M(e, a, !0);
          break;
        case "textarea":
          La(e), nv(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && Rh(e);
          break;
      }
      return z;
    }
    function QT(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function wy(e, t) {
      {
        if (Va)
          return;
        Va = !0, S("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function xy(e, t) {
      {
        if (Va)
          return;
        Va = !0, S('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function ky(e, t, a) {
      {
        if (Va)
          return;
        Va = !0, S("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function Dy(e, t) {
      {
        if (t === "" || Va)
          return;
        Va = !0, S('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function WT(e, t, a) {
      switch (t) {
        case "input":
          H(e, a);
          return;
        case "textarea":
          Ym(e, a);
          return;
        case "select":
          Kf(e, a);
          return;
      }
    }
    var rp = function() {
    }, ap = function() {
    };
    {
      var qT = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], UE = [
        "applet",
        "caption",
        "html",
        "table",
        "td",
        "th",
        "marquee",
        "object",
        "template",
        // https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
        // TODO: Distinguish by namespace here -- for <title>, including it here
        // errs on the side of fewer warnings
        "foreignObject",
        "desc",
        "title"
      ], GT = UE.concat(["button"]), XT = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], AE = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      ap = function(e, t) {
        var a = nt({}, e || AE), i = {
          tag: t
        };
        return UE.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), GT.indexOf(t) !== -1 && (a.pTagInButtonScope = null), qT.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var KT = function(e, t) {
        switch (t) {
          case "select":
            return e === "option" || e === "optgroup" || e === "#text";
          case "optgroup":
            return e === "option" || e === "#text";
          case "option":
            return e === "#text";
          case "tr":
            return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
          case "tbody":
          case "thead":
          case "tfoot":
            return e === "tr" || e === "style" || e === "script" || e === "template";
          case "colgroup":
            return e === "col" || e === "template";
          case "table":
            return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
          case "head":
            return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
          case "html":
            return e === "head" || e === "body" || e === "frameset";
          case "frameset":
            return e === "frame";
          case "#document":
            return e === "html";
        }
        switch (e) {
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
          case "rp":
          case "rt":
            return XT.indexOf(t) === -1;
          case "body":
          case "caption":
          case "col":
          case "colgroup":
          case "frameset":
          case "frame":
          case "head":
          case "html":
          case "tbody":
          case "td":
          case "tfoot":
          case "th":
          case "thead":
          case "tr":
            return t == null;
        }
        return !0;
      }, JT = function(e, t) {
        switch (e) {
          case "address":
          case "article":
          case "aside":
          case "blockquote":
          case "center":
          case "details":
          case "dialog":
          case "dir":
          case "div":
          case "dl":
          case "fieldset":
          case "figcaption":
          case "figure":
          case "footer":
          case "header":
          case "hgroup":
          case "main":
          case "menu":
          case "nav":
          case "ol":
          case "p":
          case "section":
          case "summary":
          case "ul":
          case "pre":
          case "listing":
          case "table":
          case "hr":
          case "xmp":
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t.pTagInButtonScope;
          case "form":
            return t.formTag || t.pTagInButtonScope;
          case "li":
            return t.listItemTagAutoclosing;
          case "dd":
          case "dt":
            return t.dlItemTagAutoclosing;
          case "button":
            return t.buttonTagInScope;
          case "a":
            return t.aTagInScope;
          case "nobr":
            return t.nobrTagInScope;
        }
        return null;
      }, jE = {};
      rp = function(e, t, a) {
        a = a || AE;
        var i = a.current, u = i && i.tag;
        t != null && (e != null && S("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = KT(e, u) ? null : i, f = s ? null : JT(e, a), p = s || f;
        if (p) {
          var v = p.tag, y = !!s + "|" + e + "|" + v;
          if (!jE[y]) {
            jE[y] = !0;
            var g = e, x = "";
            if (e === "#text" ? /\S/.test(t) ? g = "Text nodes" : (g = "Whitespace text nodes", x = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : g = "<" + e + ">", s) {
              var _ = "";
              v === "table" && e === "tr" && (_ += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), S("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", g, v, x, _);
            } else
              S("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", g, v);
          }
        }
      };
    }
    var Th = "suppressHydrationWarning", bh = "$", _h = "/$", ip = "$?", lp = "$!", ZT = "style", Oy = null, Ly = null;
    function eb(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case $i:
        case Ko: {
          t = i === $i ? "#document" : "#fragment";
          var u = e.documentElement;
          a = u ? u.namespaceURI : cc(null, "");
          break;
        }
        default: {
          var s = i === zn ? e.parentNode : e, f = s.namespaceURI || null;
          t = s.tagName, a = cc(f, t);
          break;
        }
      }
      {
        var p = t.toLowerCase(), v = ap(null, p);
        return {
          namespace: a,
          ancestorInfo: v
        };
      }
    }
    function tb(e, t, a) {
      {
        var i = e, u = cc(i.namespace, t), s = ap(i.ancestorInfo, t);
        return {
          namespace: u,
          ancestorInfo: s
        };
      }
    }
    function Sk(e) {
      return e;
    }
    function nb(e) {
      Oy = dr(), Ly = mT();
      var t = null;
      return kn(!1), t;
    }
    function rb(e) {
      yT(Ly), kn(Oy), Oy = null, Ly = null;
    }
    function ab(e, t, a, i, u) {
      var s;
      {
        var f = i;
        if (rp(e, null, f.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var p = "" + t.children, v = ap(f.ancestorInfo, e);
          rp(null, p, v);
        }
        s = f.namespace;
      }
      var y = HT(e, t, a, s);
      return sp(u, y), Hy(y, t), y;
    }
    function ib(e, t) {
      e.appendChild(t);
    }
    function lb(e, t, a, i, u) {
      switch (VT(e, t, a, i), t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!a.autoFocus;
        case "img":
          return !0;
        default:
          return !1;
      }
    }
    function ub(e, t, a, i, u, s) {
      {
        var f = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var p = "" + i.children, v = ap(f.ancestorInfo, t);
          rp(null, p, v);
        }
      }
      return BT(e, t, a, i);
    }
    function Ny(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function ob(e, t, a, i) {
      {
        var u = a;
        rp(null, e, u.ancestorInfo);
      }
      var s = PT(e, t);
      return sp(i, s), s;
    }
    function sb() {
      var e = window.event;
      return e === void 0 ? cr : go(e.type);
    }
    var My = typeof setTimeout == "function" ? setTimeout : void 0, cb = typeof clearTimeout == "function" ? clearTimeout : void 0, zy = -1, FE = typeof Promise == "function" ? Promise : void 0, fb = typeof queueMicrotask == "function" ? queueMicrotask : typeof FE < "u" ? function(e) {
      return FE.resolve(null).then(e).catch(db);
    } : My;
    function db(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function pb(e, t, a, i) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          return;
        case "img": {
          a.src && (e.src = a.src);
          return;
        }
      }
    }
    function vb(e, t, a, i, u, s) {
      $T(e, t, a, i, u), Hy(e, u);
    }
    function HE(e) {
      vl(e, "");
    }
    function hb(e, t, a) {
      e.nodeValue = a;
    }
    function mb(e, t) {
      e.appendChild(t);
    }
    function yb(e, t) {
      var a;
      e.nodeType === zn ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && Rh(a);
    }
    function gb(e, t, a) {
      e.insertBefore(t, a);
    }
    function Sb(e, t, a) {
      e.nodeType === zn ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function Eb(e, t) {
      e.removeChild(t);
    }
    function Cb(e, t) {
      e.nodeType === zn ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function Uy(e, t) {
      var a = t, i = 0;
      do {
        var u = a.nextSibling;
        if (e.removeChild(a), u && u.nodeType === zn) {
          var s = u.data;
          if (s === _h)
            if (i === 0) {
              e.removeChild(u), kr(t);
              return;
            } else
              i--;
          else (s === bh || s === ip || s === lp) && i++;
        }
        a = u;
      } while (a);
      kr(t);
    }
    function Rb(e, t) {
      e.nodeType === zn ? Uy(e.parentNode, t) : e.nodeType === Xr && Uy(e, t), kr(e);
    }
    function Tb(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function bb(e) {
      e.nodeValue = "";
    }
    function _b(e, t) {
      e = e;
      var a = t[ZT], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = dc("display", i);
    }
    function wb(e, t) {
      e.nodeValue = t;
    }
    function xb(e) {
      e.nodeType === Xr ? e.textContent = "" : e.nodeType === $i && e.documentElement && e.removeChild(e.documentElement);
    }
    function kb(e, t, a) {
      return e.nodeType !== Xr || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function Db(e, t) {
      return t === "" || e.nodeType !== Bi ? null : e;
    }
    function Ob(e) {
      return e.nodeType !== zn ? null : e;
    }
    function PE(e) {
      return e.data === ip;
    }
    function Ay(e) {
      return e.data === lp;
    }
    function Lb(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, u;
      return t && (a = t.dgst, i = t.msg, u = t.stck), {
        message: i,
        digest: a,
        stack: u
      };
    }
    function Nb(e, t) {
      e._reactRetry = t;
    }
    function wh(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === Xr || t === Bi)
          break;
        if (t === zn) {
          var a = e.data;
          if (a === bh || a === lp || a === ip)
            break;
          if (a === _h)
            return null;
        }
      }
      return e;
    }
    function up(e) {
      return wh(e.nextSibling);
    }
    function Mb(e) {
      return wh(e.firstChild);
    }
    function zb(e) {
      return wh(e.firstChild);
    }
    function Ub(e) {
      return wh(e.nextSibling);
    }
    function Ab(e, t, a, i, u, s, f) {
      sp(s, e), Hy(e, a);
      var p;
      {
        var v = u;
        p = v.namespace;
      }
      var y = (s.mode & St) !== Ue;
      return IT(e, t, a, p, i, y, f);
    }
    function jb(e, t, a, i) {
      return sp(a, e), a.mode & St, QT(e, t);
    }
    function Fb(e, t) {
      sp(t, e);
    }
    function Hb(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === zn) {
          var i = t.data;
          if (i === _h) {
            if (a === 0)
              return up(t);
            a--;
          } else (i === bh || i === lp || i === ip) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function VE(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === zn) {
          var i = t.data;
          if (i === bh || i === lp || i === ip) {
            if (a === 0)
              return t;
            a--;
          } else i === _h && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function Pb(e) {
      kr(e);
    }
    function Vb(e) {
      kr(e);
    }
    function Bb(e) {
      return e !== "head" && e !== "body";
    }
    function $b(e, t, a, i) {
      var u = !0;
      Ch(t.nodeValue, a, i, u);
    }
    function Yb(e, t, a, i, u, s) {
      if (t[Th] !== !0) {
        var f = !0;
        Ch(i.nodeValue, u, s, f);
      }
    }
    function Ib(e, t) {
      t.nodeType === Xr ? wy(e, t) : t.nodeType === zn || xy(e, t);
    }
    function Qb(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === Xr ? wy(a, t) : t.nodeType === zn || xy(a, t));
      }
    }
    function Wb(e, t, a, i, u) {
      (u || t[Th] !== !0) && (i.nodeType === Xr ? wy(a, i) : i.nodeType === zn || xy(a, i));
    }
    function qb(e, t, a) {
      ky(e, t);
    }
    function Gb(e, t) {
      Dy(e, t);
    }
    function Xb(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && ky(i, t);
      }
    }
    function Kb(e, t) {
      {
        var a = e.parentNode;
        a !== null && Dy(a, t);
      }
    }
    function Jb(e, t, a, i, u, s) {
      (s || t[Th] !== !0) && ky(a, i);
    }
    function Zb(e, t, a, i, u) {
      (u || t[Th] !== !0) && Dy(a, i);
    }
    function e_(e) {
      S("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function t_(e) {
      Zd(e);
    }
    var Rf = Math.random().toString(36).slice(2), Tf = "__reactFiber$" + Rf, jy = "__reactProps$" + Rf, op = "__reactContainer$" + Rf, Fy = "__reactEvents$" + Rf, n_ = "__reactListeners$" + Rf, r_ = "__reactHandles$" + Rf;
    function a_(e) {
      delete e[Tf], delete e[jy], delete e[Fy], delete e[n_], delete e[r_];
    }
    function sp(e, t) {
      t[Tf] = e;
    }
    function xh(e, t) {
      t[op] = e;
    }
    function BE(e) {
      e[op] = null;
    }
    function cp(e) {
      return !!e[op];
    }
    function Bs(e) {
      var t = e[Tf];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[op] || a[Tf], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var u = VE(e); u !== null; ) {
              var s = u[Tf];
              if (s)
                return s;
              u = VE(u);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function xo(e) {
      var t = e[Tf] || e[op];
      return t && (t.tag === Q || t.tag === ie || t.tag === ke || t.tag === $) ? t : null;
    }
    function bf(e) {
      if (e.tag === Q || e.tag === ie)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function kh(e) {
      return e[jy] || null;
    }
    function Hy(e, t) {
      e[jy] = t;
    }
    function i_(e) {
      var t = e[Fy];
      return t === void 0 && (t = e[Fy] = /* @__PURE__ */ new Set()), t;
    }
    var $E = {}, YE = We.ReactDebugCurrentFrame;
    function Dh(e) {
      if (e) {
        var t = e._owner, a = Io(e.type, e._source, t ? t.type : null);
        YE.setExtraStackFrame(a);
      } else
        YE.setExtraStackFrame(null);
    }
    function Ki(e, t, a, i, u) {
      {
        var s = Function.call.bind(ir);
        for (var f in e)
          if (s(e, f)) {
            var p = void 0;
            try {
              if (typeof e[f] != "function") {
                var v = Error((i || "React class") + ": " + a + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw v.name = "Invariant Violation", v;
              }
              p = e[f](t, f, i, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (y) {
              p = y;
            }
            p && !(p instanceof Error) && (Dh(u), S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, f, typeof p), Dh(null)), p instanceof Error && !(p.message in $E) && ($E[p.message] = !0, Dh(u), S("Failed %s type: %s", a, p.message), Dh(null));
          }
      }
    }
    var Py = [], Oh;
    Oh = [];
    var wu = -1;
    function ko(e) {
      return {
        current: e
      };
    }
    function ia(e, t) {
      if (wu < 0) {
        S("Unexpected pop.");
        return;
      }
      t !== Oh[wu] && S("Unexpected Fiber popped."), e.current = Py[wu], Py[wu] = null, Oh[wu] = null, wu--;
    }
    function la(e, t, a) {
      wu++, Py[wu] = e.current, Oh[wu] = a, e.current = t;
    }
    var Vy;
    Vy = {};
    var li = {};
    Object.freeze(li);
    var xu = ko(li), Ul = ko(!1), By = li;
    function _f(e, t, a) {
      return a && Al(t) ? By : xu.current;
    }
    function IE(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function wf(e, t) {
      {
        var a = e.type, i = a.contextTypes;
        if (!i)
          return li;
        var u = e.stateNode;
        if (u && u.__reactInternalMemoizedUnmaskedChildContext === t)
          return u.__reactInternalMemoizedMaskedChildContext;
        var s = {};
        for (var f in i)
          s[f] = t[f];
        {
          var p = Ke(e) || "Unknown";
          Ki(i, s, "context", p);
        }
        return u && IE(e, t, s), s;
      }
    }
    function Lh() {
      return Ul.current;
    }
    function Al(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function Nh(e) {
      ia(Ul, e), ia(xu, e);
    }
    function $y(e) {
      ia(Ul, e), ia(xu, e);
    }
    function QE(e, t, a) {
      {
        if (xu.current !== li)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        la(xu, t, e), la(Ul, a, e);
      }
    }
    function WE(e, t, a) {
      {
        var i = e.stateNode, u = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = Ke(e) || "Unknown";
            Vy[s] || (Vy[s] = !0, S("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var f = i.getChildContext();
        for (var p in f)
          if (!(p in u))
            throw new Error((Ke(e) || "Unknown") + '.getChildContext(): key "' + p + '" is not defined in childContextTypes.');
        {
          var v = Ke(e) || "Unknown";
          Ki(u, f, "child context", v);
        }
        return nt({}, a, f);
      }
    }
    function Mh(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || li;
        return By = xu.current, la(xu, a, e), la(Ul, Ul.current, e), !0;
      }
    }
    function qE(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var u = WE(e, t, By);
          i.__reactInternalMemoizedMergedChildContext = u, ia(Ul, e), ia(xu, e), la(xu, u, e), la(Ul, a, e);
        } else
          ia(Ul, e), la(Ul, a, e);
      }
    }
    function l_(e) {
      {
        if (!Ov(e) || e.tag !== le)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case $:
              return t.stateNode.context;
            case le: {
              var a = t.type;
              if (Al(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var Do = 0, zh = 1, ku = null, Yy = !1, Iy = !1;
    function GE(e) {
      ku === null ? ku = [e] : ku.push(e);
    }
    function u_(e) {
      Yy = !0, GE(e);
    }
    function XE() {
      Yy && Oo();
    }
    function Oo() {
      if (!Iy && ku !== null) {
        Iy = !0;
        var e = 0, t = ga();
        try {
          var a = !0, i = ku;
          for (In(ra); e < i.length; e++) {
            var u = i[e];
            do
              u = u(a);
            while (u !== null);
          }
          ku = null, Yy = !1;
        } catch (s) {
          throw ku !== null && (ku = ku.slice(e + 1)), vd(Qi, Oo), s;
        } finally {
          In(t), Iy = !1;
        }
      }
      return null;
    }
    var xf = [], kf = 0, Uh = null, Ah = 0, bi = [], _i = 0, $s = null, Du = 1, Ou = "";
    function o_(e) {
      return Is(), (e.flags & fs) !== ze;
    }
    function s_(e) {
      return Is(), Ah;
    }
    function c_() {
      var e = Ou, t = Du, a = t & ~f_(t);
      return a.toString(32) + e;
    }
    function Ys(e, t) {
      Is(), xf[kf++] = Ah, xf[kf++] = Uh, Uh = e, Ah = t;
    }
    function KE(e, t, a) {
      Is(), bi[_i++] = Du, bi[_i++] = Ou, bi[_i++] = $s, $s = e;
      var i = Du, u = Ou, s = jh(i) - 1, f = i & ~(1 << s), p = a + 1, v = jh(t) + s;
      if (v > 30) {
        var y = s - s % 5, g = (1 << y) - 1, x = (f & g).toString(32), _ = f >> y, z = s - y, A = jh(t) + z, P = p << z, ce = P | _, Ve = x + u;
        Du = 1 << A | ce, Ou = Ve;
      } else {
        var Le = p << s, Ot = Le | f, bt = u;
        Du = 1 << v | Ot, Ou = bt;
      }
    }
    function Qy(e) {
      Is();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        Ys(e, a), KE(e, a, i);
      }
    }
    function jh(e) {
      return 32 - Yn(e);
    }
    function f_(e) {
      return 1 << jh(e) - 1;
    }
    function Wy(e) {
      for (; e === Uh; )
        Uh = xf[--kf], xf[kf] = null, Ah = xf[--kf], xf[kf] = null;
      for (; e === $s; )
        $s = bi[--_i], bi[_i] = null, Ou = bi[--_i], bi[_i] = null, Du = bi[--_i], bi[_i] = null;
    }
    function d_() {
      return Is(), $s !== null ? {
        id: Du,
        overflow: Ou
      } : null;
    }
    function p_(e, t) {
      Is(), bi[_i++] = Du, bi[_i++] = Ou, bi[_i++] = $s, Du = t.id, Ou = t.overflow, $s = e;
    }
    function Is() {
      jr() || S("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Ar = null, wi = null, Ji = !1, Qs = !1, Lo = null;
    function v_() {
      Ji && S("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function JE() {
      Qs = !0;
    }
    function h_() {
      return Qs;
    }
    function m_(e) {
      var t = e.stateNode.containerInfo;
      return wi = zb(t), Ar = e, Ji = !0, Lo = null, Qs = !1, !0;
    }
    function y_(e, t, a) {
      return wi = Ub(t), Ar = e, Ji = !0, Lo = null, Qs = !1, a !== null && p_(e, a), !0;
    }
    function ZE(e, t) {
      switch (e.tag) {
        case $: {
          Ib(e.stateNode.containerInfo, t);
          break;
        }
        case Q: {
          var a = (e.mode & St) !== Ue;
          Wb(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case ke: {
          var i = e.memoizedState;
          i.dehydrated !== null && Qb(i.dehydrated, t);
          break;
        }
      }
    }
    function eC(e, t) {
      ZE(e, t);
      var a = Cx();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= Kr) : i.push(a);
    }
    function qy(e, t) {
      {
        if (Qs)
          return;
        switch (e.tag) {
          case $: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case Q:
                var i = t.type;
                t.pendingProps, qb(a, i);
                break;
              case ie:
                var u = t.pendingProps;
                Gb(a, u);
                break;
            }
            break;
          }
          case Q: {
            var s = e.type, f = e.memoizedProps, p = e.stateNode;
            switch (t.tag) {
              case Q: {
                var v = t.type, y = t.pendingProps, g = (e.mode & St) !== Ue;
                Jb(
                  s,
                  f,
                  p,
                  v,
                  y,
                  // TODO: Delete this argument when we remove the legacy root API.
                  g
                );
                break;
              }
              case ie: {
                var x = t.pendingProps, _ = (e.mode & St) !== Ue;
                Zb(
                  s,
                  f,
                  p,
                  x,
                  // TODO: Delete this argument when we remove the legacy root API.
                  _
                );
                break;
              }
            }
            break;
          }
          case ke: {
            var z = e.memoizedState, A = z.dehydrated;
            if (A !== null) switch (t.tag) {
              case Q:
                var P = t.type;
                t.pendingProps, Xb(A, P);
                break;
              case ie:
                var ce = t.pendingProps;
                Kb(A, ce);
                break;
            }
            break;
          }
          default:
            return;
        }
      }
    }
    function tC(e, t) {
      t.flags = t.flags & -4097 | Un, qy(e, t);
    }
    function nC(e, t) {
      switch (e.tag) {
        case Q: {
          var a = e.type;
          e.pendingProps;
          var i = kb(t, a);
          return i !== null ? (e.stateNode = i, Ar = e, wi = Mb(i), !0) : !1;
        }
        case ie: {
          var u = e.pendingProps, s = Db(t, u);
          return s !== null ? (e.stateNode = s, Ar = e, wi = null, !0) : !1;
        }
        case ke: {
          var f = Ob(t);
          if (f !== null) {
            var p = {
              dehydrated: f,
              treeContext: d_(),
              retryLane: ya
            };
            e.memoizedState = p;
            var v = Rx(f);
            return v.return = e, e.child = v, Ar = e, wi = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function Gy(e) {
      return (e.mode & St) !== Ue && (e.flags & gt) === ze;
    }
    function Xy(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function Ky(e) {
      if (Ji) {
        var t = wi;
        if (!t) {
          Gy(e) && (qy(Ar, e), Xy()), tC(Ar, e), Ji = !1, Ar = e;
          return;
        }
        var a = t;
        if (!nC(e, t)) {
          Gy(e) && (qy(Ar, e), Xy()), t = up(a);
          var i = Ar;
          if (!t || !nC(e, t)) {
            tC(Ar, e), Ji = !1, Ar = e;
            return;
          }
          eC(i, a);
        }
      }
    }
    function g_(e, t, a) {
      var i = e.stateNode, u = !Qs, s = Ab(i, e.type, e.memoizedProps, t, a, e, u);
      return e.updateQueue = s, s !== null;
    }
    function S_(e) {
      var t = e.stateNode, a = e.memoizedProps, i = jb(t, a, e);
      if (i) {
        var u = Ar;
        if (u !== null)
          switch (u.tag) {
            case $: {
              var s = u.stateNode.containerInfo, f = (u.mode & St) !== Ue;
              $b(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                f
              );
              break;
            }
            case Q: {
              var p = u.type, v = u.memoizedProps, y = u.stateNode, g = (u.mode & St) !== Ue;
              Yb(
                p,
                v,
                y,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                g
              );
              break;
            }
          }
      }
      return i;
    }
    function E_(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      Fb(a, e);
    }
    function C_(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return Hb(a);
    }
    function rC(e) {
      for (var t = e.return; t !== null && t.tag !== Q && t.tag !== $ && t.tag !== ke; )
        t = t.return;
      Ar = t;
    }
    function Fh(e) {
      if (e !== Ar)
        return !1;
      if (!Ji)
        return rC(e), Ji = !0, !1;
      if (e.tag !== $ && (e.tag !== Q || Bb(e.type) && !Ny(e.type, e.memoizedProps))) {
        var t = wi;
        if (t)
          if (Gy(e))
            aC(e), Xy();
          else
            for (; t; )
              eC(e, t), t = up(t);
      }
      return rC(e), e.tag === ke ? wi = C_(e) : wi = Ar ? up(e.stateNode) : null, !0;
    }
    function R_() {
      return Ji && wi !== null;
    }
    function aC(e) {
      for (var t = wi; t; )
        ZE(e, t), t = up(t);
    }
    function Df() {
      Ar = null, wi = null, Ji = !1, Qs = !1;
    }
    function iC() {
      Lo !== null && (J0(Lo), Lo = null);
    }
    function jr() {
      return Ji;
    }
    function Jy(e) {
      Lo === null ? Lo = [e] : Lo.push(e);
    }
    var T_ = We.ReactCurrentBatchConfig, b_ = null;
    function __() {
      return T_.transition;
    }
    var Zi = {
      recordUnsafeLifecycleWarnings: function(e, t) {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function(e, t) {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    };
    {
      var w_ = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & rt && (t = a), a = a.return;
        return t;
      }, Ws = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, fp = [], dp = [], pp = [], vp = [], hp = [], mp = [], qs = /* @__PURE__ */ new Set();
      Zi.recordUnsafeLifecycleWarnings = function(e, t) {
        qs.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && fp.push(e), e.mode & rt && typeof t.UNSAFE_componentWillMount == "function" && dp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && pp.push(e), e.mode & rt && typeof t.UNSAFE_componentWillReceiveProps == "function" && vp.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && hp.push(e), e.mode & rt && typeof t.UNSAFE_componentWillUpdate == "function" && mp.push(e));
      }, Zi.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        fp.length > 0 && (fp.forEach(function(_) {
          e.add(Ke(_) || "Component"), qs.add(_.type);
        }), fp = []);
        var t = /* @__PURE__ */ new Set();
        dp.length > 0 && (dp.forEach(function(_) {
          t.add(Ke(_) || "Component"), qs.add(_.type);
        }), dp = []);
        var a = /* @__PURE__ */ new Set();
        pp.length > 0 && (pp.forEach(function(_) {
          a.add(Ke(_) || "Component"), qs.add(_.type);
        }), pp = []);
        var i = /* @__PURE__ */ new Set();
        vp.length > 0 && (vp.forEach(function(_) {
          i.add(Ke(_) || "Component"), qs.add(_.type);
        }), vp = []);
        var u = /* @__PURE__ */ new Set();
        hp.length > 0 && (hp.forEach(function(_) {
          u.add(Ke(_) || "Component"), qs.add(_.type);
        }), hp = []);
        var s = /* @__PURE__ */ new Set();
        if (mp.length > 0 && (mp.forEach(function(_) {
          s.add(Ke(_) || "Component"), qs.add(_.type);
        }), mp = []), t.size > 0) {
          var f = Ws(t);
          S(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, f);
        }
        if (i.size > 0) {
          var p = Ws(i);
          S(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, p);
        }
        if (s.size > 0) {
          var v = Ws(s);
          S(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, v);
        }
        if (e.size > 0) {
          var y = Ws(e);
          je(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, y);
        }
        if (a.size > 0) {
          var g = Ws(a);
          je(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, g);
        }
        if (u.size > 0) {
          var x = Ws(u);
          je(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, x);
        }
      };
      var Hh = /* @__PURE__ */ new Map(), lC = /* @__PURE__ */ new Set();
      Zi.recordLegacyContextWarning = function(e, t) {
        var a = w_(e);
        if (a === null) {
          S("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!lC.has(e.type)) {
          var i = Hh.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], Hh.set(a, i)), i.push(e));
        }
      }, Zi.flushLegacyContextWarning = function() {
        Hh.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(Ke(s) || "Component"), lC.add(s.type);
            });
            var u = Ws(i);
            try {
              Gt(a), S(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u);
            } finally {
              Cn();
            }
          }
        });
      }, Zi.discardPendingWarnings = function() {
        fp = [], dp = [], pp = [], vp = [], hp = [], mp = [], Hh = /* @__PURE__ */ new Map();
      };
    }
    var Zy, eg, tg, ng, rg, uC = function(e, t) {
    };
    Zy = !1, eg = !1, tg = {}, ng = {}, rg = {}, uC = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = Ke(t) || "Component";
        ng[a] || (ng[a] = !0, S('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function x_(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function yp(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & rt || ye) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self) && // Will already throw with "Function components cannot have string refs"
        !(a._owner && a._owner.tag !== le) && // Will already warn with "Function components cannot be given refs"
        !(typeof a.type == "function" && !x_(a.type)) && // Will already throw with "Element ref was specified as a string (someStringRef) but no owner was set"
        a._owner) {
          var u = Ke(e) || "Component";
          tg[u] || (S('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', u, i), tg[u] = !0);
        }
        if (a._owner) {
          var s = a._owner, f;
          if (s) {
            var p = s;
            if (p.tag !== le)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            f = p.stateNode;
          }
          if (!f)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var v = f;
          qa(i, "ref");
          var y = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === y)
            return t.ref;
          var g = function(x) {
            var _ = v.refs;
            x === null ? delete _[y] : _[y] = x;
          };
          return g._stringRef = y, g;
        } else {
          if (typeof i != "string")
            throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
          if (!a._owner)
            throw new Error("Element ref was specified as a string (" + i + `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`);
        }
      }
      return i;
    }
    function Ph(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function Vh(e) {
      {
        var t = Ke(e) || "Component";
        if (rg[t])
          return;
        rg[t] = !0, S("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function oC(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function sC(e) {
      function t(D, V) {
        if (e) {
          var O = D.deletions;
          O === null ? (D.deletions = [V], D.flags |= Kr) : O.push(V);
        }
      }
      function a(D, V) {
        if (!e)
          return null;
        for (var O = V; O !== null; )
          t(D, O), O = O.sibling;
        return null;
      }
      function i(D, V) {
        for (var O = /* @__PURE__ */ new Map(), te = V; te !== null; )
          te.key !== null ? O.set(te.key, te) : O.set(te.index, te), te = te.sibling;
        return O;
      }
      function u(D, V) {
        var O = rc(D, V);
        return O.index = 0, O.sibling = null, O;
      }
      function s(D, V, O) {
        if (D.index = O, !e)
          return D.flags |= fs, V;
        var te = D.alternate;
        if (te !== null) {
          var ge = te.index;
          return ge < V ? (D.flags |= Un, V) : ge;
        } else
          return D.flags |= Un, V;
      }
      function f(D) {
        return e && D.alternate === null && (D.flags |= Un), D;
      }
      function p(D, V, O, te) {
        if (V === null || V.tag !== ie) {
          var ge = JS(O, D.mode, te);
          return ge.return = D, ge;
        } else {
          var de = u(V, O);
          return de.return = D, de;
        }
      }
      function v(D, V, O, te) {
        var ge = O.type;
        if (ge === Qr)
          return g(D, V, O.props.children, te, O.key);
        if (V !== null && (V.elementType === ge || // Keep this check inline so it only runs on the false path:
        vR(V, O) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof ge == "object" && ge !== null && ge.$$typeof === Je && oC(ge) === V.type)) {
          var de = u(V, O.props);
          return de.ref = yp(D, V, O), de.return = D, de._debugSource = O._source, de._debugOwner = O._owner, de;
        }
        var Ge = KS(O, D.mode, te);
        return Ge.ref = yp(D, V, O), Ge.return = D, Ge;
      }
      function y(D, V, O, te) {
        if (V === null || V.tag !== q || V.stateNode.containerInfo !== O.containerInfo || V.stateNode.implementation !== O.implementation) {
          var ge = ZS(O, D.mode, te);
          return ge.return = D, ge;
        } else {
          var de = u(V, O.children || []);
          return de.return = D, de;
        }
      }
      function g(D, V, O, te, ge) {
        if (V === null || V.tag !== Ce) {
          var de = Bo(O, D.mode, te, ge);
          return de.return = D, de;
        } else {
          var Ge = u(V, O);
          return Ge.return = D, Ge;
        }
      }
      function x(D, V, O) {
        if (typeof V == "string" && V !== "" || typeof V == "number") {
          var te = JS("" + V, D.mode, O);
          return te.return = D, te;
        }
        if (typeof V == "object" && V !== null) {
          switch (V.$$typeof) {
            case ur: {
              var ge = KS(V, D.mode, O);
              return ge.ref = yp(D, null, V), ge.return = D, ge;
            }
            case va: {
              var de = ZS(V, D.mode, O);
              return de.return = D, de;
            }
            case Je: {
              var Ge = V._payload, tt = V._init;
              return x(D, tt(Ge), O);
            }
          }
          if (it(V) || yn(V)) {
            var tn = Bo(V, D.mode, O, null);
            return tn.return = D, tn;
          }
          Ph(D, V);
        }
        return typeof V == "function" && Vh(D), null;
      }
      function _(D, V, O, te) {
        var ge = V !== null ? V.key : null;
        if (typeof O == "string" && O !== "" || typeof O == "number")
          return ge !== null ? null : p(D, V, "" + O, te);
        if (typeof O == "object" && O !== null) {
          switch (O.$$typeof) {
            case ur:
              return O.key === ge ? v(D, V, O, te) : null;
            case va:
              return O.key === ge ? y(D, V, O, te) : null;
            case Je: {
              var de = O._payload, Ge = O._init;
              return _(D, V, Ge(de), te);
            }
          }
          if (it(O) || yn(O))
            return ge !== null ? null : g(D, V, O, te, null);
          Ph(D, O);
        }
        return typeof O == "function" && Vh(D), null;
      }
      function z(D, V, O, te, ge) {
        if (typeof te == "string" && te !== "" || typeof te == "number") {
          var de = D.get(O) || null;
          return p(V, de, "" + te, ge);
        }
        if (typeof te == "object" && te !== null) {
          switch (te.$$typeof) {
            case ur: {
              var Ge = D.get(te.key === null ? O : te.key) || null;
              return v(V, Ge, te, ge);
            }
            case va: {
              var tt = D.get(te.key === null ? O : te.key) || null;
              return y(V, tt, te, ge);
            }
            case Je:
              var tn = te._payload, Ut = te._init;
              return z(D, V, O, Ut(tn), ge);
          }
          if (it(te) || yn(te)) {
            var Wn = D.get(O) || null;
            return g(V, Wn, te, ge, null);
          }
          Ph(V, te);
        }
        return typeof te == "function" && Vh(V), null;
      }
      function A(D, V, O) {
        {
          if (typeof D != "object" || D === null)
            return V;
          switch (D.$$typeof) {
            case ur:
            case va:
              uC(D, O);
              var te = D.key;
              if (typeof te != "string")
                break;
              if (V === null) {
                V = /* @__PURE__ */ new Set(), V.add(te);
                break;
              }
              if (!V.has(te)) {
                V.add(te);
                break;
              }
              S("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", te);
              break;
            case Je:
              var ge = D._payload, de = D._init;
              A(de(ge), V, O);
              break;
          }
        }
        return V;
      }
      function P(D, V, O, te) {
        for (var ge = null, de = 0; de < O.length; de++) {
          var Ge = O[de];
          ge = A(Ge, ge, D);
        }
        for (var tt = null, tn = null, Ut = V, Wn = 0, At = 0, Vn = null; Ut !== null && At < O.length; At++) {
          Ut.index > At ? (Vn = Ut, Ut = null) : Vn = Ut.sibling;
          var oa = _(D, Ut, O[At], te);
          if (oa === null) {
            Ut === null && (Ut = Vn);
            break;
          }
          e && Ut && oa.alternate === null && t(D, Ut), Wn = s(oa, Wn, At), tn === null ? tt = oa : tn.sibling = oa, tn = oa, Ut = Vn;
        }
        if (At === O.length) {
          if (a(D, Ut), jr()) {
            var Yr = At;
            Ys(D, Yr);
          }
          return tt;
        }
        if (Ut === null) {
          for (; At < O.length; At++) {
            var oi = x(D, O[At], te);
            oi !== null && (Wn = s(oi, Wn, At), tn === null ? tt = oi : tn.sibling = oi, tn = oi);
          }
          if (jr()) {
            var _a = At;
            Ys(D, _a);
          }
          return tt;
        }
        for (var wa = i(D, Ut); At < O.length; At++) {
          var sa = z(wa, D, At, O[At], te);
          sa !== null && (e && sa.alternate !== null && wa.delete(sa.key === null ? At : sa.key), Wn = s(sa, Wn, At), tn === null ? tt = sa : tn.sibling = sa, tn = sa);
        }
        if (e && wa.forEach(function(qf) {
          return t(D, qf);
        }), jr()) {
          var ju = At;
          Ys(D, ju);
        }
        return tt;
      }
      function ce(D, V, O, te) {
        var ge = yn(O);
        if (typeof ge != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          O[Symbol.toStringTag] === "Generator" && (eg || S("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), eg = !0), O.entries === ge && (Zy || S("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Zy = !0);
          var de = ge.call(O);
          if (de)
            for (var Ge = null, tt = de.next(); !tt.done; tt = de.next()) {
              var tn = tt.value;
              Ge = A(tn, Ge, D);
            }
        }
        var Ut = ge.call(O);
        if (Ut == null)
          throw new Error("An iterable object provided no iterator.");
        for (var Wn = null, At = null, Vn = V, oa = 0, Yr = 0, oi = null, _a = Ut.next(); Vn !== null && !_a.done; Yr++, _a = Ut.next()) {
          Vn.index > Yr ? (oi = Vn, Vn = null) : oi = Vn.sibling;
          var wa = _(D, Vn, _a.value, te);
          if (wa === null) {
            Vn === null && (Vn = oi);
            break;
          }
          e && Vn && wa.alternate === null && t(D, Vn), oa = s(wa, oa, Yr), At === null ? Wn = wa : At.sibling = wa, At = wa, Vn = oi;
        }
        if (_a.done) {
          if (a(D, Vn), jr()) {
            var sa = Yr;
            Ys(D, sa);
          }
          return Wn;
        }
        if (Vn === null) {
          for (; !_a.done; Yr++, _a = Ut.next()) {
            var ju = x(D, _a.value, te);
            ju !== null && (oa = s(ju, oa, Yr), At === null ? Wn = ju : At.sibling = ju, At = ju);
          }
          if (jr()) {
            var qf = Yr;
            Ys(D, qf);
          }
          return Wn;
        }
        for (var Gp = i(D, Vn); !_a.done; Yr++, _a = Ut.next()) {
          var Yl = z(Gp, D, Yr, _a.value, te);
          Yl !== null && (e && Yl.alternate !== null && Gp.delete(Yl.key === null ? Yr : Yl.key), oa = s(Yl, oa, Yr), At === null ? Wn = Yl : At.sibling = Yl, At = Yl);
        }
        if (e && Gp.forEach(function(Zx) {
          return t(D, Zx);
        }), jr()) {
          var Jx = Yr;
          Ys(D, Jx);
        }
        return Wn;
      }
      function Ve(D, V, O, te) {
        if (V !== null && V.tag === ie) {
          a(D, V.sibling);
          var ge = u(V, O);
          return ge.return = D, ge;
        }
        a(D, V);
        var de = JS(O, D.mode, te);
        return de.return = D, de;
      }
      function Le(D, V, O, te) {
        for (var ge = O.key, de = V; de !== null; ) {
          if (de.key === ge) {
            var Ge = O.type;
            if (Ge === Qr) {
              if (de.tag === Ce) {
                a(D, de.sibling);
                var tt = u(de, O.props.children);
                return tt.return = D, tt._debugSource = O._source, tt._debugOwner = O._owner, tt;
              }
            } else if (de.elementType === Ge || // Keep this check inline so it only runs on the false path:
            vR(de, O) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof Ge == "object" && Ge !== null && Ge.$$typeof === Je && oC(Ge) === de.type) {
              a(D, de.sibling);
              var tn = u(de, O.props);
              return tn.ref = yp(D, de, O), tn.return = D, tn._debugSource = O._source, tn._debugOwner = O._owner, tn;
            }
            a(D, de);
            break;
          } else
            t(D, de);
          de = de.sibling;
        }
        if (O.type === Qr) {
          var Ut = Bo(O.props.children, D.mode, te, O.key);
          return Ut.return = D, Ut;
        } else {
          var Wn = KS(O, D.mode, te);
          return Wn.ref = yp(D, V, O), Wn.return = D, Wn;
        }
      }
      function Ot(D, V, O, te) {
        for (var ge = O.key, de = V; de !== null; ) {
          if (de.key === ge)
            if (de.tag === q && de.stateNode.containerInfo === O.containerInfo && de.stateNode.implementation === O.implementation) {
              a(D, de.sibling);
              var Ge = u(de, O.children || []);
              return Ge.return = D, Ge;
            } else {
              a(D, de);
              break;
            }
          else
            t(D, de);
          de = de.sibling;
        }
        var tt = ZS(O, D.mode, te);
        return tt.return = D, tt;
      }
      function bt(D, V, O, te) {
        var ge = typeof O == "object" && O !== null && O.type === Qr && O.key === null;
        if (ge && (O = O.props.children), typeof O == "object" && O !== null) {
          switch (O.$$typeof) {
            case ur:
              return f(Le(D, V, O, te));
            case va:
              return f(Ot(D, V, O, te));
            case Je:
              var de = O._payload, Ge = O._init;
              return bt(D, V, Ge(de), te);
          }
          if (it(O))
            return P(D, V, O, te);
          if (yn(O))
            return ce(D, V, O, te);
          Ph(D, O);
        }
        return typeof O == "string" && O !== "" || typeof O == "number" ? f(Ve(D, V, "" + O, te)) : (typeof O == "function" && Vh(D), a(D, V));
      }
      return bt;
    }
    var Of = sC(!0), cC = sC(!1);
    function k_(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = rc(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = rc(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function D_(e, t) {
      for (var a = e.child; a !== null; )
        mx(a, t), a = a.sibling;
    }
    var ag = ko(null), ig;
    ig = {};
    var Bh = null, Lf = null, lg = null, $h = !1;
    function Yh() {
      Bh = null, Lf = null, lg = null, $h = !1;
    }
    function fC() {
      $h = !0;
    }
    function dC() {
      $h = !1;
    }
    function pC(e, t, a) {
      la(ag, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== ig && S("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = ig;
    }
    function ug(e, t) {
      var a = ag.current;
      ia(ag, t), e._currentValue = a;
    }
    function og(e, t, a) {
      for (var i = e; i !== null; ) {
        var u = i.alternate;
        if (hu(i.childLanes, t) ? u !== null && !hu(u.childLanes, t) && (u.childLanes = lt(u.childLanes, t)) : (i.childLanes = lt(i.childLanes, t), u !== null && (u.childLanes = lt(u.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && S("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function O_(e, t, a) {
      L_(e, t, a);
    }
    function L_(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var u = void 0, s = i.dependencies;
        if (s !== null) {
          u = i.child;
          for (var f = s.firstContext; f !== null; ) {
            if (f.context === t) {
              if (i.tag === le) {
                var p = tr(a), v = Lu(Qt, p);
                v.tag = Qh;
                var y = i.updateQueue;
                if (y !== null) {
                  var g = y.shared, x = g.pending;
                  x === null ? v.next = v : (v.next = x.next, x.next = v), g.pending = v;
                }
              }
              i.lanes = lt(i.lanes, a);
              var _ = i.alternate;
              _ !== null && (_.lanes = lt(_.lanes, a)), og(i.return, a, e), s.lanes = lt(s.lanes, a);
              break;
            }
            f = f.next;
          }
        } else if (i.tag === ot)
          u = i.type === e.type ? null : i.child;
        else if (i.tag === ln) {
          var z = i.return;
          if (z === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          z.lanes = lt(z.lanes, a);
          var A = z.alternate;
          A !== null && (A.lanes = lt(A.lanes, a)), og(z, a, e), u = i.sibling;
        } else
          u = i.child;
        if (u !== null)
          u.return = i;
        else
          for (u = i; u !== null; ) {
            if (u === e) {
              u = null;
              break;
            }
            var P = u.sibling;
            if (P !== null) {
              P.return = u.return, u = P;
              break;
            }
            u = u.return;
          }
        i = u;
      }
    }
    function Nf(e, t) {
      Bh = e, Lf = null, lg = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (na(a.lanes, t) && Np(), a.firstContext = null);
      }
    }
    function ar(e) {
      $h && S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (lg !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (Lf === null) {
          if (Bh === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          Lf = a, Bh.dependencies = {
            lanes: Y,
            firstContext: a
          };
        } else
          Lf = Lf.next = a;
      }
      return t;
    }
    var Gs = null;
    function sg(e) {
      Gs === null ? Gs = [e] : Gs.push(e);
    }
    function N_() {
      if (Gs !== null) {
        for (var e = 0; e < Gs.length; e++) {
          var t = Gs[e], a = t.interleaved;
          if (a !== null) {
            t.interleaved = null;
            var i = a.next, u = t.pending;
            if (u !== null) {
              var s = u.next;
              u.next = i, a.next = s;
            }
            t.pending = a;
          }
        }
        Gs = null;
      }
    }
    function vC(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, sg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Ih(e, i);
    }
    function M_(e, t, a, i) {
      var u = t.interleaved;
      u === null ? (a.next = a, sg(t)) : (a.next = u.next, u.next = a), t.interleaved = a;
    }
    function z_(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, sg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Ih(e, i);
    }
    function Ba(e, t) {
      return Ih(e, t);
    }
    var U_ = Ih;
    function Ih(e, t) {
      e.lanes = lt(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = lt(a.lanes, t)), a === null && (e.flags & (Un | jn)) !== ze && cR(e);
      for (var i = e, u = e.return; u !== null; )
        u.childLanes = lt(u.childLanes, t), a = u.alternate, a !== null ? a.childLanes = lt(a.childLanes, t) : (u.flags & (Un | jn)) !== ze && cR(e), i = u, u = u.return;
      if (i.tag === $) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var hC = 0, mC = 1, Qh = 2, cg = 3, Wh = !1, fg, qh;
    fg = !1, qh = null;
    function dg(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: Y
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function yC(e, t) {
      var a = t.updateQueue, i = e.updateQueue;
      if (a === i) {
        var u = {
          baseState: i.baseState,
          firstBaseUpdate: i.firstBaseUpdate,
          lastBaseUpdate: i.lastBaseUpdate,
          shared: i.shared,
          effects: i.effects
        };
        t.updateQueue = u;
      }
    }
    function Lu(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: hC,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function No(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var u = i.shared;
      if (qh === u && !fg && (S("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), fg = !0), M1()) {
        var s = u.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), u.pending = t, U_(e, a);
      } else
        return z_(e, u, t, a);
    }
    function Gh(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var u = i.shared;
        if (Ld(a)) {
          var s = u.lanes;
          s = Gc(s, e.pendingLanes);
          var f = lt(s, a);
          u.lanes = f, xs(e, f);
        }
      }
    }
    function pg(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null) {
        var u = i.updateQueue;
        if (a === u) {
          var s = null, f = null, p = a.firstBaseUpdate;
          if (p !== null) {
            var v = p;
            do {
              var y = {
                eventTime: v.eventTime,
                lane: v.lane,
                tag: v.tag,
                payload: v.payload,
                callback: v.callback,
                next: null
              };
              f === null ? s = f = y : (f.next = y, f = y), v = v.next;
            } while (v !== null);
            f === null ? s = f = t : (f.next = t, f = t);
          } else
            s = f = t;
          a = {
            baseState: u.baseState,
            firstBaseUpdate: s,
            lastBaseUpdate: f,
            shared: u.shared,
            effects: u.effects
          }, e.updateQueue = a;
          return;
        }
      }
      var g = a.lastBaseUpdate;
      g === null ? a.firstBaseUpdate = t : g.next = t, a.lastBaseUpdate = t;
    }
    function A_(e, t, a, i, u, s) {
      switch (a.tag) {
        case mC: {
          var f = a.payload;
          if (typeof f == "function") {
            fC();
            var p = f.call(s, i, u);
            {
              if (e.mode & rt) {
                It(!0);
                try {
                  f.call(s, i, u);
                } finally {
                  It(!1);
                }
              }
              dC();
            }
            return p;
          }
          return f;
        }
        case cg:
          e.flags = e.flags & -65537 | gt;
        case hC: {
          var v = a.payload, y;
          if (typeof v == "function") {
            fC(), y = v.call(s, i, u);
            {
              if (e.mode & rt) {
                It(!0);
                try {
                  v.call(s, i, u);
                } finally {
                  It(!1);
                }
              }
              dC();
            }
          } else
            y = v;
          return y == null ? i : nt({}, i, y);
        }
        case Qh:
          return Wh = !0, i;
      }
      return i;
    }
    function Xh(e, t, a, i) {
      var u = e.updateQueue;
      Wh = !1, qh = u.shared;
      var s = u.firstBaseUpdate, f = u.lastBaseUpdate, p = u.shared.pending;
      if (p !== null) {
        u.shared.pending = null;
        var v = p, y = v.next;
        v.next = null, f === null ? s = y : f.next = y, f = v;
        var g = e.alternate;
        if (g !== null) {
          var x = g.updateQueue, _ = x.lastBaseUpdate;
          _ !== f && (_ === null ? x.firstBaseUpdate = y : _.next = y, x.lastBaseUpdate = v);
        }
      }
      if (s !== null) {
        var z = u.baseState, A = Y, P = null, ce = null, Ve = null, Le = s;
        do {
          var Ot = Le.lane, bt = Le.eventTime;
          if (hu(i, Ot)) {
            if (Ve !== null) {
              var V = {
                eventTime: bt,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Hn,
                tag: Le.tag,
                payload: Le.payload,
                callback: Le.callback,
                next: null
              };
              Ve = Ve.next = V;
            }
            z = A_(e, u, Le, z, t, a);
            var O = Le.callback;
            if (O !== null && // If the update was already committed, we should not queue its
            // callback again.
            Le.lane !== Hn) {
              e.flags |= rn;
              var te = u.effects;
              te === null ? u.effects = [Le] : te.push(Le);
            }
          } else {
            var D = {
              eventTime: bt,
              lane: Ot,
              tag: Le.tag,
              payload: Le.payload,
              callback: Le.callback,
              next: null
            };
            Ve === null ? (ce = Ve = D, P = z) : Ve = Ve.next = D, A = lt(A, Ot);
          }
          if (Le = Le.next, Le === null) {
            if (p = u.shared.pending, p === null)
              break;
            var ge = p, de = ge.next;
            ge.next = null, Le = de, u.lastBaseUpdate = ge, u.shared.pending = null;
          }
        } while (!0);
        Ve === null && (P = z), u.baseState = P, u.firstBaseUpdate = ce, u.lastBaseUpdate = Ve;
        var Ge = u.shared.interleaved;
        if (Ge !== null) {
          var tt = Ge;
          do
            A = lt(A, tt.lane), tt = tt.next;
          while (tt !== Ge);
        } else s === null && (u.shared.lanes = Y);
        Yp(A), e.lanes = A, e.memoizedState = z;
      }
      qh = null;
    }
    function j_(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function gC() {
      Wh = !1;
    }
    function Kh() {
      return Wh;
    }
    function SC(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u], f = s.callback;
          f !== null && (s.callback = null, j_(f, a));
        }
    }
    var gp = {}, Mo = ko(gp), Sp = ko(gp), Jh = ko(gp);
    function Zh(e) {
      if (e === gp)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function EC() {
      var e = Zh(Jh.current);
      return e;
    }
    function vg(e, t) {
      la(Jh, t, e), la(Sp, e, e), la(Mo, gp, e);
      var a = eb(t);
      ia(Mo, e), la(Mo, a, e);
    }
    function Mf(e) {
      ia(Mo, e), ia(Sp, e), ia(Jh, e);
    }
    function hg() {
      var e = Zh(Mo.current);
      return e;
    }
    function CC(e) {
      Zh(Jh.current);
      var t = Zh(Mo.current), a = tb(t, e.type);
      t !== a && (la(Sp, e, e), la(Mo, a, e));
    }
    function mg(e) {
      Sp.current === e && (ia(Mo, e), ia(Sp, e));
    }
    var F_ = 0, RC = 1, TC = 1, Ep = 2, el = ko(F_);
    function yg(e, t) {
      return (e & t) !== 0;
    }
    function zf(e) {
      return e & RC;
    }
    function gg(e, t) {
      return e & RC | t;
    }
    function H_(e, t) {
      return e | t;
    }
    function zo(e, t) {
      la(el, t, e);
    }
    function Uf(e) {
      ia(el, e);
    }
    function P_(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function em(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === ke) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || PE(i) || Ay(i))
              return t;
          }
        } else if (t.tag === Vt && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var u = (t.flags & gt) !== ze;
          if (u)
            return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e)
          return null;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    var $a = (
      /*   */
      0
    ), pr = (
      /* */
      1
    ), jl = (
      /*  */
      2
    ), vr = (
      /*    */
      4
    ), Fr = (
      /*   */
      8
    ), Sg = [];
    function Eg() {
      for (var e = 0; e < Sg.length; e++) {
        var t = Sg[e];
        t._workInProgressVersionPrimary = null;
      }
      Sg.length = 0;
    }
    function V_(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var me = We.ReactCurrentDispatcher, Cp = We.ReactCurrentBatchConfig, Cg, Af;
    Cg = /* @__PURE__ */ new Set();
    var Xs = Y, en = null, hr = null, mr = null, tm = !1, Rp = !1, Tp = 0, B_ = 0, $_ = 25, I = null, xi = null, Uo = -1, Rg = !1;
    function Yt() {
      {
        var e = I;
        xi === null ? xi = [e] : xi.push(e);
      }
    }
    function ue() {
      {
        var e = I;
        xi !== null && (Uo++, xi[Uo] !== e && Y_(e));
      }
    }
    function jf(e) {
      e != null && !it(e) && S("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", I, typeof e);
    }
    function Y_(e) {
      {
        var t = Ke(en);
        if (!Cg.has(t) && (Cg.add(t), xi !== null)) {
          for (var a = "", i = 30, u = 0; u <= Uo; u++) {
            for (var s = xi[u], f = u === Uo ? e : s, p = u + 1 + ". " + s; p.length < i; )
              p += " ";
            p += f + `
`, a += p;
          }
          S(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, a);
        }
      }
    }
    function ua() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function Tg(e, t) {
      if (Rg)
        return !1;
      if (t === null)
        return S("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", I), !1;
      e.length !== t.length && S(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, I, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!we(e[a], t[a]))
          return !1;
      return !0;
    }
    function Ff(e, t, a, i, u, s) {
      Xs = s, en = t, xi = e !== null ? e._debugHookTypes : null, Uo = -1, Rg = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = Y, e !== null && e.memoizedState !== null ? me.current = IC : xi !== null ? me.current = YC : me.current = $C;
      var f = a(i, u);
      if (Rp) {
        var p = 0;
        do {
          if (Rp = !1, Tp = 0, p >= $_)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          p += 1, Rg = !1, hr = null, mr = null, t.updateQueue = null, Uo = -1, me.current = QC, f = a(i, u);
        } while (Rp);
      }
      me.current = vm, t._debugHookTypes = xi;
      var v = hr !== null && hr.next !== null;
      if (Xs = Y, en = null, hr = null, mr = null, I = null, xi = null, Uo = -1, e !== null && (e.flags & Fn) !== (t.flags & Fn) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & St) !== Ue && S("Internal React error: Expected static flag was missing. Please notify the React team."), tm = !1, v)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return f;
    }
    function Hf() {
      var e = Tp !== 0;
      return Tp = 0, e;
    }
    function bC(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & Zt) !== Ue ? t.flags &= -50333701 : t.flags &= -2053, e.lanes = ws(e.lanes, a);
    }
    function _C() {
      if (me.current = vm, tm) {
        for (var e = en.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        tm = !1;
      }
      Xs = Y, en = null, hr = null, mr = null, xi = null, Uo = -1, I = null, FC = !1, Rp = !1, Tp = 0;
    }
    function Fl() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return mr === null ? en.memoizedState = mr = e : mr = mr.next = e, mr;
    }
    function ki() {
      var e;
      if (hr === null) {
        var t = en.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = hr.next;
      var a;
      if (mr === null ? a = en.memoizedState : a = mr.next, a !== null)
        mr = a, a = mr.next, hr = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        hr = e;
        var i = {
          memoizedState: hr.memoizedState,
          baseState: hr.baseState,
          baseQueue: hr.baseQueue,
          queue: hr.queue,
          next: null
        };
        mr === null ? en.memoizedState = mr = i : mr = mr.next = i;
      }
      return mr;
    }
    function wC() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function bg(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function _g(e, t, a) {
      var i = Fl(), u;
      a !== void 0 ? u = a(t) : u = t, i.memoizedState = i.baseState = u;
      var s = {
        pending: null,
        interleaved: null,
        lanes: Y,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: u
      };
      i.queue = s;
      var f = s.dispatch = q_.bind(null, en, s);
      return [i.memoizedState, f];
    }
    function wg(e, t, a) {
      var i = ki(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = hr, f = s.baseQueue, p = u.pending;
      if (p !== null) {
        if (f !== null) {
          var v = f.next, y = p.next;
          f.next = y, p.next = v;
        }
        s.baseQueue !== f && S("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = f = p, u.pending = null;
      }
      if (f !== null) {
        var g = f.next, x = s.baseState, _ = null, z = null, A = null, P = g;
        do {
          var ce = P.lane;
          if (hu(Xs, ce)) {
            if (A !== null) {
              var Le = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Hn,
                action: P.action,
                hasEagerState: P.hasEagerState,
                eagerState: P.eagerState,
                next: null
              };
              A = A.next = Le;
            }
            if (P.hasEagerState)
              x = P.eagerState;
            else {
              var Ot = P.action;
              x = e(x, Ot);
            }
          } else {
            var Ve = {
              lane: ce,
              action: P.action,
              hasEagerState: P.hasEagerState,
              eagerState: P.eagerState,
              next: null
            };
            A === null ? (z = A = Ve, _ = x) : A = A.next = Ve, en.lanes = lt(en.lanes, ce), Yp(ce);
          }
          P = P.next;
        } while (P !== null && P !== g);
        A === null ? _ = x : A.next = z, we(x, i.memoizedState) || Np(), i.memoizedState = x, i.baseState = _, i.baseQueue = A, u.lastRenderedState = x;
      }
      var bt = u.interleaved;
      if (bt !== null) {
        var D = bt;
        do {
          var V = D.lane;
          en.lanes = lt(en.lanes, V), Yp(V), D = D.next;
        } while (D !== bt);
      } else f === null && (u.lanes = Y);
      var O = u.dispatch;
      return [i.memoizedState, O];
    }
    function xg(e, t, a) {
      var i = ki(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = u.dispatch, f = u.pending, p = i.memoizedState;
      if (f !== null) {
        u.pending = null;
        var v = f.next, y = v;
        do {
          var g = y.action;
          p = e(p, g), y = y.next;
        } while (y !== v);
        we(p, i.memoizedState) || Np(), i.memoizedState = p, i.baseQueue === null && (i.baseState = p), u.lastRenderedState = p;
      }
      return [p, s];
    }
    function Ek(e, t, a) {
    }
    function Ck(e, t, a) {
    }
    function kg(e, t, a) {
      var i = en, u = Fl(), s, f = jr();
      if (f) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), Af || s !== a() && (S("The result of getServerSnapshot should be cached to avoid an infinite loop"), Af = !0);
      } else {
        if (s = t(), !Af) {
          var p = t();
          we(s, p) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), Af = !0);
        }
        var v = Mm();
        if (v === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        _s(v, Xs) || xC(i, t, s);
      }
      u.memoizedState = s;
      var y = {
        value: s,
        getSnapshot: t
      };
      return u.queue = y, lm(DC.bind(null, i, y, e), [e]), i.flags |= ha, bp(pr | Fr, kC.bind(null, i, y, s, t), void 0, null), s;
    }
    function nm(e, t, a) {
      var i = en, u = ki(), s = t();
      if (!Af) {
        var f = t();
        we(s, f) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), Af = !0);
      }
      var p = u.memoizedState, v = !we(p, s);
      v && (u.memoizedState = s, Np());
      var y = u.queue;
      if (wp(DC.bind(null, i, y, e), [e]), y.getSnapshot !== t || v || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      mr !== null && mr.memoizedState.tag & pr) {
        i.flags |= ha, bp(pr | Fr, kC.bind(null, i, y, s, t), void 0, null);
        var g = Mm();
        if (g === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        _s(g, Xs) || xC(i, t, s);
      }
      return s;
    }
    function xC(e, t, a) {
      e.flags |= Tc;
      var i = {
        getSnapshot: t,
        value: a
      }, u = en.updateQueue;
      if (u === null)
        u = wC(), en.updateQueue = u, u.stores = [i];
      else {
        var s = u.stores;
        s === null ? u.stores = [i] : s.push(i);
      }
    }
    function kC(e, t, a, i) {
      t.value = a, t.getSnapshot = i, OC(t) && LC(e);
    }
    function DC(e, t, a) {
      var i = function() {
        OC(t) && LC(e);
      };
      return a(i);
    }
    function OC(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !we(a, i);
      } catch {
        return !0;
      }
    }
    function LC(e) {
      var t = Ba(e, Qe);
      t !== null && Er(t, e, Qe, Qt);
    }
    function rm(e) {
      var t = Fl();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: Y,
        dispatch: null,
        lastRenderedReducer: bg,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = G_.bind(null, en, a);
      return [t.memoizedState, i];
    }
    function Dg(e) {
      return wg(bg);
    }
    function Og(e) {
      return xg(bg);
    }
    function bp(e, t, a, i) {
      var u = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, s = en.updateQueue;
      if (s === null)
        s = wC(), en.updateQueue = s, s.lastEffect = u.next = u;
      else {
        var f = s.lastEffect;
        if (f === null)
          s.lastEffect = u.next = u;
        else {
          var p = f.next;
          f.next = u, u.next = p, s.lastEffect = u;
        }
      }
      return u;
    }
    function Lg(e) {
      var t = Fl();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function am(e) {
      var t = ki();
      return t.memoizedState;
    }
    function _p(e, t, a, i) {
      var u = Fl(), s = i === void 0 ? null : i;
      en.flags |= e, u.memoizedState = bp(pr | t, a, void 0, s);
    }
    function im(e, t, a, i) {
      var u = ki(), s = i === void 0 ? null : i, f = void 0;
      if (hr !== null) {
        var p = hr.memoizedState;
        if (f = p.destroy, s !== null) {
          var v = p.deps;
          if (Tg(s, v)) {
            u.memoizedState = bp(t, a, f, s);
            return;
          }
        }
      }
      en.flags |= e, u.memoizedState = bp(pr | t, a, f, s);
    }
    function lm(e, t) {
      return (en.mode & Zt) !== Ue ? _p(gl | ha | fd, Fr, e, t) : _p(ha | fd, Fr, e, t);
    }
    function wp(e, t) {
      return im(ha, Fr, e, t);
    }
    function Ng(e, t) {
      return _p(Rt, jl, e, t);
    }
    function um(e, t) {
      return im(Rt, jl, e, t);
    }
    function Mg(e, t) {
      var a = Rt;
      return a |= yl, (en.mode & Zt) !== Ue && (a |= Mr), _p(a, vr, e, t);
    }
    function om(e, t) {
      return im(Rt, vr, e, t);
    }
    function NC(e, t) {
      if (typeof t == "function") {
        var a = t, i = e();
        return a(i), function() {
          a(null);
        };
      } else if (t != null) {
        var u = t;
        u.hasOwnProperty("current") || S("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(u).join(", ") + "}");
        var s = e();
        return u.current = s, function() {
          u.current = null;
        };
      }
    }
    function zg(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, u = Rt;
      return u |= yl, (en.mode & Zt) !== Ue && (u |= Mr), _p(u, vr, NC.bind(null, t, e), i);
    }
    function sm(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return im(Rt, vr, NC.bind(null, t, e), i);
    }
    function I_(e, t) {
    }
    var cm = I_;
    function Ug(e, t) {
      var a = Fl(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function fm(e, t) {
      var a = ki(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (Tg(i, s))
          return u[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function Ag(e, t) {
      var a = Fl(), i = t === void 0 ? null : t, u = e();
      return a.memoizedState = [u, i], u;
    }
    function dm(e, t) {
      var a = ki(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (Tg(i, s))
          return u[0];
      }
      var f = e();
      return a.memoizedState = [f, i], f;
    }
    function jg(e) {
      var t = Fl();
      return t.memoizedState = e, e;
    }
    function MC(e) {
      var t = ki(), a = hr, i = a.memoizedState;
      return UC(t, i, e);
    }
    function zC(e) {
      var t = ki();
      if (hr === null)
        return t.memoizedState = e, e;
      var a = hr.memoizedState;
      return UC(t, a, e);
    }
    function UC(e, t, a) {
      var i = !Od(Xs);
      if (i) {
        if (!we(a, t)) {
          var u = Nd();
          en.lanes = lt(en.lanes, u), Yp(u), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, Np()), e.memoizedState = a, a;
    }
    function Q_(e, t, a) {
      var i = ga();
      In(ks(i, ja)), e(!0);
      var u = Cp.transition;
      Cp.transition = {};
      var s = Cp.transition;
      Cp.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (In(i), Cp.transition = u, u === null && s._updatedFibers) {
          var f = s._updatedFibers.size;
          f > 10 && je("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function Fg() {
      var e = rm(!1), t = e[0], a = e[1], i = Q_.bind(null, a), u = Fl();
      return u.memoizedState = i, [t, i];
    }
    function AC() {
      var e = Dg(), t = e[0], a = ki(), i = a.memoizedState;
      return [t, i];
    }
    function jC() {
      var e = Og(), t = e[0], a = ki(), i = a.memoizedState;
      return [t, i];
    }
    var FC = !1;
    function W_() {
      return FC;
    }
    function Hg() {
      var e = Fl(), t = Mm(), a = t.identifierPrefix, i;
      if (jr()) {
        var u = c_();
        i = ":" + a + "R" + u;
        var s = Tp++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var f = B_++;
        i = ":" + a + "r" + f.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function pm() {
      var e = ki(), t = e.memoizedState;
      return t;
    }
    function q_(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Po(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (HC(e))
        PC(t, u);
      else {
        var s = vC(e, t, u, i);
        if (s !== null) {
          var f = ba();
          Er(s, e, i, f), VC(s, t, i);
        }
      }
      BC(e, i);
    }
    function G_(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Po(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (HC(e))
        PC(t, u);
      else {
        var s = e.alternate;
        if (e.lanes === Y && (s === null || s.lanes === Y)) {
          var f = t.lastRenderedReducer;
          if (f !== null) {
            var p;
            p = me.current, me.current = tl;
            try {
              var v = t.lastRenderedState, y = f(v, a);
              if (u.hasEagerState = !0, u.eagerState = y, we(y, v)) {
                M_(e, t, u, i);
                return;
              }
            } catch {
            } finally {
              me.current = p;
            }
          }
        }
        var g = vC(e, t, u, i);
        if (g !== null) {
          var x = ba();
          Er(g, e, i, x), VC(g, t, i);
        }
      }
      BC(e, i);
    }
    function HC(e) {
      var t = e.alternate;
      return e === en || t !== null && t === en;
    }
    function PC(e, t) {
      Rp = tm = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function VC(e, t, a) {
      if (Ld(a)) {
        var i = t.lanes;
        i = Gc(i, e.pendingLanes);
        var u = lt(i, a);
        t.lanes = u, xs(e, u);
      }
    }
    function BC(e, t, a) {
      ys(e, t);
    }
    var vm = {
      readContext: ar,
      useCallback: ua,
      useContext: ua,
      useEffect: ua,
      useImperativeHandle: ua,
      useInsertionEffect: ua,
      useLayoutEffect: ua,
      useMemo: ua,
      useReducer: ua,
      useRef: ua,
      useState: ua,
      useDebugValue: ua,
      useDeferredValue: ua,
      useTransition: ua,
      useMutableSource: ua,
      useSyncExternalStore: ua,
      useId: ua,
      unstable_isNewReconciler: Ee
    }, $C = null, YC = null, IC = null, QC = null, Hl = null, tl = null, hm = null;
    {
      var Pg = function() {
        S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, Ze = function() {
        S("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      $C = {
        readContext: function(e) {
          return ar(e);
        },
        useCallback: function(e, t) {
          return I = "useCallback", Yt(), jf(t), Ug(e, t);
        },
        useContext: function(e) {
          return I = "useContext", Yt(), ar(e);
        },
        useEffect: function(e, t) {
          return I = "useEffect", Yt(), jf(t), lm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return I = "useImperativeHandle", Yt(), jf(a), zg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return I = "useInsertionEffect", Yt(), jf(t), Ng(e, t);
        },
        useLayoutEffect: function(e, t) {
          return I = "useLayoutEffect", Yt(), jf(t), Mg(e, t);
        },
        useMemo: function(e, t) {
          I = "useMemo", Yt(), jf(t);
          var a = me.current;
          me.current = Hl;
          try {
            return Ag(e, t);
          } finally {
            me.current = a;
          }
        },
        useReducer: function(e, t, a) {
          I = "useReducer", Yt();
          var i = me.current;
          me.current = Hl;
          try {
            return _g(e, t, a);
          } finally {
            me.current = i;
          }
        },
        useRef: function(e) {
          return I = "useRef", Yt(), Lg(e);
        },
        useState: function(e) {
          I = "useState", Yt();
          var t = me.current;
          me.current = Hl;
          try {
            return rm(e);
          } finally {
            me.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return I = "useDebugValue", Yt(), void 0;
        },
        useDeferredValue: function(e) {
          return I = "useDeferredValue", Yt(), jg(e);
        },
        useTransition: function() {
          return I = "useTransition", Yt(), Fg();
        },
        useMutableSource: function(e, t, a) {
          return I = "useMutableSource", Yt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return I = "useSyncExternalStore", Yt(), kg(e, t, a);
        },
        useId: function() {
          return I = "useId", Yt(), Hg();
        },
        unstable_isNewReconciler: Ee
      }, YC = {
        readContext: function(e) {
          return ar(e);
        },
        useCallback: function(e, t) {
          return I = "useCallback", ue(), Ug(e, t);
        },
        useContext: function(e) {
          return I = "useContext", ue(), ar(e);
        },
        useEffect: function(e, t) {
          return I = "useEffect", ue(), lm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return I = "useImperativeHandle", ue(), zg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return I = "useInsertionEffect", ue(), Ng(e, t);
        },
        useLayoutEffect: function(e, t) {
          return I = "useLayoutEffect", ue(), Mg(e, t);
        },
        useMemo: function(e, t) {
          I = "useMemo", ue();
          var a = me.current;
          me.current = Hl;
          try {
            return Ag(e, t);
          } finally {
            me.current = a;
          }
        },
        useReducer: function(e, t, a) {
          I = "useReducer", ue();
          var i = me.current;
          me.current = Hl;
          try {
            return _g(e, t, a);
          } finally {
            me.current = i;
          }
        },
        useRef: function(e) {
          return I = "useRef", ue(), Lg(e);
        },
        useState: function(e) {
          I = "useState", ue();
          var t = me.current;
          me.current = Hl;
          try {
            return rm(e);
          } finally {
            me.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return I = "useDebugValue", ue(), void 0;
        },
        useDeferredValue: function(e) {
          return I = "useDeferredValue", ue(), jg(e);
        },
        useTransition: function() {
          return I = "useTransition", ue(), Fg();
        },
        useMutableSource: function(e, t, a) {
          return I = "useMutableSource", ue(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return I = "useSyncExternalStore", ue(), kg(e, t, a);
        },
        useId: function() {
          return I = "useId", ue(), Hg();
        },
        unstable_isNewReconciler: Ee
      }, IC = {
        readContext: function(e) {
          return ar(e);
        },
        useCallback: function(e, t) {
          return I = "useCallback", ue(), fm(e, t);
        },
        useContext: function(e) {
          return I = "useContext", ue(), ar(e);
        },
        useEffect: function(e, t) {
          return I = "useEffect", ue(), wp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return I = "useImperativeHandle", ue(), sm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return I = "useInsertionEffect", ue(), um(e, t);
        },
        useLayoutEffect: function(e, t) {
          return I = "useLayoutEffect", ue(), om(e, t);
        },
        useMemo: function(e, t) {
          I = "useMemo", ue();
          var a = me.current;
          me.current = tl;
          try {
            return dm(e, t);
          } finally {
            me.current = a;
          }
        },
        useReducer: function(e, t, a) {
          I = "useReducer", ue();
          var i = me.current;
          me.current = tl;
          try {
            return wg(e, t, a);
          } finally {
            me.current = i;
          }
        },
        useRef: function(e) {
          return I = "useRef", ue(), am();
        },
        useState: function(e) {
          I = "useState", ue();
          var t = me.current;
          me.current = tl;
          try {
            return Dg(e);
          } finally {
            me.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return I = "useDebugValue", ue(), cm();
        },
        useDeferredValue: function(e) {
          return I = "useDeferredValue", ue(), MC(e);
        },
        useTransition: function() {
          return I = "useTransition", ue(), AC();
        },
        useMutableSource: function(e, t, a) {
          return I = "useMutableSource", ue(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return I = "useSyncExternalStore", ue(), nm(e, t);
        },
        useId: function() {
          return I = "useId", ue(), pm();
        },
        unstable_isNewReconciler: Ee
      }, QC = {
        readContext: function(e) {
          return ar(e);
        },
        useCallback: function(e, t) {
          return I = "useCallback", ue(), fm(e, t);
        },
        useContext: function(e) {
          return I = "useContext", ue(), ar(e);
        },
        useEffect: function(e, t) {
          return I = "useEffect", ue(), wp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return I = "useImperativeHandle", ue(), sm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return I = "useInsertionEffect", ue(), um(e, t);
        },
        useLayoutEffect: function(e, t) {
          return I = "useLayoutEffect", ue(), om(e, t);
        },
        useMemo: function(e, t) {
          I = "useMemo", ue();
          var a = me.current;
          me.current = hm;
          try {
            return dm(e, t);
          } finally {
            me.current = a;
          }
        },
        useReducer: function(e, t, a) {
          I = "useReducer", ue();
          var i = me.current;
          me.current = hm;
          try {
            return xg(e, t, a);
          } finally {
            me.current = i;
          }
        },
        useRef: function(e) {
          return I = "useRef", ue(), am();
        },
        useState: function(e) {
          I = "useState", ue();
          var t = me.current;
          me.current = hm;
          try {
            return Og(e);
          } finally {
            me.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return I = "useDebugValue", ue(), cm();
        },
        useDeferredValue: function(e) {
          return I = "useDeferredValue", ue(), zC(e);
        },
        useTransition: function() {
          return I = "useTransition", ue(), jC();
        },
        useMutableSource: function(e, t, a) {
          return I = "useMutableSource", ue(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return I = "useSyncExternalStore", ue(), nm(e, t);
        },
        useId: function() {
          return I = "useId", ue(), pm();
        },
        unstable_isNewReconciler: Ee
      }, Hl = {
        readContext: function(e) {
          return Pg(), ar(e);
        },
        useCallback: function(e, t) {
          return I = "useCallback", Ze(), Yt(), Ug(e, t);
        },
        useContext: function(e) {
          return I = "useContext", Ze(), Yt(), ar(e);
        },
        useEffect: function(e, t) {
          return I = "useEffect", Ze(), Yt(), lm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return I = "useImperativeHandle", Ze(), Yt(), zg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return I = "useInsertionEffect", Ze(), Yt(), Ng(e, t);
        },
        useLayoutEffect: function(e, t) {
          return I = "useLayoutEffect", Ze(), Yt(), Mg(e, t);
        },
        useMemo: function(e, t) {
          I = "useMemo", Ze(), Yt();
          var a = me.current;
          me.current = Hl;
          try {
            return Ag(e, t);
          } finally {
            me.current = a;
          }
        },
        useReducer: function(e, t, a) {
          I = "useReducer", Ze(), Yt();
          var i = me.current;
          me.current = Hl;
          try {
            return _g(e, t, a);
          } finally {
            me.current = i;
          }
        },
        useRef: function(e) {
          return I = "useRef", Ze(), Yt(), Lg(e);
        },
        useState: function(e) {
          I = "useState", Ze(), Yt();
          var t = me.current;
          me.current = Hl;
          try {
            return rm(e);
          } finally {
            me.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return I = "useDebugValue", Ze(), Yt(), void 0;
        },
        useDeferredValue: function(e) {
          return I = "useDeferredValue", Ze(), Yt(), jg(e);
        },
        useTransition: function() {
          return I = "useTransition", Ze(), Yt(), Fg();
        },
        useMutableSource: function(e, t, a) {
          return I = "useMutableSource", Ze(), Yt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return I = "useSyncExternalStore", Ze(), Yt(), kg(e, t, a);
        },
        useId: function() {
          return I = "useId", Ze(), Yt(), Hg();
        },
        unstable_isNewReconciler: Ee
      }, tl = {
        readContext: function(e) {
          return Pg(), ar(e);
        },
        useCallback: function(e, t) {
          return I = "useCallback", Ze(), ue(), fm(e, t);
        },
        useContext: function(e) {
          return I = "useContext", Ze(), ue(), ar(e);
        },
        useEffect: function(e, t) {
          return I = "useEffect", Ze(), ue(), wp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return I = "useImperativeHandle", Ze(), ue(), sm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return I = "useInsertionEffect", Ze(), ue(), um(e, t);
        },
        useLayoutEffect: function(e, t) {
          return I = "useLayoutEffect", Ze(), ue(), om(e, t);
        },
        useMemo: function(e, t) {
          I = "useMemo", Ze(), ue();
          var a = me.current;
          me.current = tl;
          try {
            return dm(e, t);
          } finally {
            me.current = a;
          }
        },
        useReducer: function(e, t, a) {
          I = "useReducer", Ze(), ue();
          var i = me.current;
          me.current = tl;
          try {
            return wg(e, t, a);
          } finally {
            me.current = i;
          }
        },
        useRef: function(e) {
          return I = "useRef", Ze(), ue(), am();
        },
        useState: function(e) {
          I = "useState", Ze(), ue();
          var t = me.current;
          me.current = tl;
          try {
            return Dg(e);
          } finally {
            me.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return I = "useDebugValue", Ze(), ue(), cm();
        },
        useDeferredValue: function(e) {
          return I = "useDeferredValue", Ze(), ue(), MC(e);
        },
        useTransition: function() {
          return I = "useTransition", Ze(), ue(), AC();
        },
        useMutableSource: function(e, t, a) {
          return I = "useMutableSource", Ze(), ue(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return I = "useSyncExternalStore", Ze(), ue(), nm(e, t);
        },
        useId: function() {
          return I = "useId", Ze(), ue(), pm();
        },
        unstable_isNewReconciler: Ee
      }, hm = {
        readContext: function(e) {
          return Pg(), ar(e);
        },
        useCallback: function(e, t) {
          return I = "useCallback", Ze(), ue(), fm(e, t);
        },
        useContext: function(e) {
          return I = "useContext", Ze(), ue(), ar(e);
        },
        useEffect: function(e, t) {
          return I = "useEffect", Ze(), ue(), wp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return I = "useImperativeHandle", Ze(), ue(), sm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return I = "useInsertionEffect", Ze(), ue(), um(e, t);
        },
        useLayoutEffect: function(e, t) {
          return I = "useLayoutEffect", Ze(), ue(), om(e, t);
        },
        useMemo: function(e, t) {
          I = "useMemo", Ze(), ue();
          var a = me.current;
          me.current = tl;
          try {
            return dm(e, t);
          } finally {
            me.current = a;
          }
        },
        useReducer: function(e, t, a) {
          I = "useReducer", Ze(), ue();
          var i = me.current;
          me.current = tl;
          try {
            return xg(e, t, a);
          } finally {
            me.current = i;
          }
        },
        useRef: function(e) {
          return I = "useRef", Ze(), ue(), am();
        },
        useState: function(e) {
          I = "useState", Ze(), ue();
          var t = me.current;
          me.current = tl;
          try {
            return Og(e);
          } finally {
            me.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return I = "useDebugValue", Ze(), ue(), cm();
        },
        useDeferredValue: function(e) {
          return I = "useDeferredValue", Ze(), ue(), zC(e);
        },
        useTransition: function() {
          return I = "useTransition", Ze(), ue(), jC();
        },
        useMutableSource: function(e, t, a) {
          return I = "useMutableSource", Ze(), ue(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return I = "useSyncExternalStore", Ze(), ue(), nm(e, t);
        },
        useId: function() {
          return I = "useId", Ze(), ue(), pm();
        },
        unstable_isNewReconciler: Ee
      };
    }
    var Ao = L.unstable_now, WC = 0, mm = -1, xp = -1, ym = -1, Vg = !1, gm = !1;
    function qC() {
      return Vg;
    }
    function X_() {
      gm = !0;
    }
    function K_() {
      Vg = !1, gm = !1;
    }
    function J_() {
      Vg = gm, gm = !1;
    }
    function GC() {
      return WC;
    }
    function XC() {
      WC = Ao();
    }
    function Bg(e) {
      xp = Ao(), e.actualStartTime < 0 && (e.actualStartTime = Ao());
    }
    function KC(e) {
      xp = -1;
    }
    function Sm(e, t) {
      if (xp >= 0) {
        var a = Ao() - xp;
        e.actualDuration += a, t && (e.selfBaseDuration = a), xp = -1;
      }
    }
    function Pl(e) {
      if (mm >= 0) {
        var t = Ao() - mm;
        mm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case $:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case Lt:
              var u = a.stateNode;
              u.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function $g(e) {
      if (ym >= 0) {
        var t = Ao() - ym;
        ym = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case $:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case Lt:
              var u = a.stateNode;
              u !== null && (u.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function Vl() {
      mm = Ao();
    }
    function Yg() {
      ym = Ao();
    }
    function Ig(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function nl(e, t) {
      if (e && e.defaultProps) {
        var a = nt({}, t), i = e.defaultProps;
        for (var u in i)
          a[u] === void 0 && (a[u] = i[u]);
        return a;
      }
      return t;
    }
    var Qg = {}, Wg, qg, Gg, Xg, Kg, JC, Em, Jg, Zg, eS, kp;
    {
      Wg = /* @__PURE__ */ new Set(), qg = /* @__PURE__ */ new Set(), Gg = /* @__PURE__ */ new Set(), Xg = /* @__PURE__ */ new Set(), Jg = /* @__PURE__ */ new Set(), Kg = /* @__PURE__ */ new Set(), Zg = /* @__PURE__ */ new Set(), eS = /* @__PURE__ */ new Set(), kp = /* @__PURE__ */ new Set();
      var ZC = /* @__PURE__ */ new Set();
      Em = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          ZC.has(a) || (ZC.add(a), S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, JC = function(e, t) {
        if (t === void 0) {
          var a = kt(e) || "Component";
          Kg.has(a) || (Kg.add(a), S("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(Qg, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(Qg);
    }
    function tS(e, t, a, i) {
      var u = e.memoizedState, s = a(i, u);
      {
        if (e.mode & rt) {
          It(!0);
          try {
            s = a(i, u);
          } finally {
            It(!1);
          }
        }
        JC(t, s);
      }
      var f = s == null ? u : nt({}, u, s);
      if (e.memoizedState = f, e.lanes === Y) {
        var p = e.updateQueue;
        p.baseState = f;
      }
    }
    var nS = {
      isMounted: dd,
      enqueueSetState: function(e, t, a) {
        var i = ro(e), u = ba(), s = Po(i), f = Lu(u, s);
        f.payload = t, a != null && (Em(a, "setState"), f.callback = a);
        var p = No(i, f, s);
        p !== null && (Er(p, i, s, u), Gh(p, i, s)), ys(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = ro(e), u = ba(), s = Po(i), f = Lu(u, s);
        f.tag = mC, f.payload = t, a != null && (Em(a, "replaceState"), f.callback = a);
        var p = No(i, f, s);
        p !== null && (Er(p, i, s, u), Gh(p, i, s)), ys(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = ro(e), i = ba(), u = Po(a), s = Lu(i, u);
        s.tag = Qh, t != null && (Em(t, "forceUpdate"), s.callback = t);
        var f = No(a, s, u);
        f !== null && (Er(f, a, u, i), Gh(f, a, u)), wd(a, u);
      }
    };
    function e0(e, t, a, i, u, s, f) {
      var p = e.stateNode;
      if (typeof p.shouldComponentUpdate == "function") {
        var v = p.shouldComponentUpdate(i, s, f);
        {
          if (e.mode & rt) {
            It(!0);
            try {
              v = p.shouldComponentUpdate(i, s, f);
            } finally {
              It(!1);
            }
          }
          v === void 0 && S("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", kt(t) || "Component");
        }
        return v;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !Ae(a, i) || !Ae(u, s) : !0;
    }
    function Z_(e, t, a) {
      var i = e.stateNode;
      {
        var u = kt(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? S("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", u) : S("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", u)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && S("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", u), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && S("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", u), i.propTypes && S("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", u), i.contextType && S("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", u), t.childContextTypes && !kp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & rt) === Ue && (kp.add(t), S(`%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), t.contextTypes && !kp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & rt) === Ue && (kp.add(t), S(`%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), i.contextTypes && S("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", u), t.contextType && t.contextTypes && !Zg.has(t) && (Zg.add(t), S("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", u)), typeof i.componentShouldUpdate == "function" && S("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", u), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && S("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", kt(t) || "A pure component"), typeof i.componentDidUnmount == "function" && S("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", u), typeof i.componentDidReceiveProps == "function" && S("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", u), typeof i.componentWillRecieveProps == "function" && S("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", u), typeof i.UNSAFE_componentWillRecieveProps == "function" && S("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", u);
        var f = i.props !== a;
        i.props !== void 0 && f && S("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", u, u), i.defaultProps && S("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", u, u), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !Gg.has(t) && (Gg.add(t), S("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", kt(t))), typeof i.getDerivedStateFromProps == "function" && S("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof i.getDerivedStateFromError == "function" && S("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof t.getSnapshotBeforeUpdate == "function" && S("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", u);
        var p = i.state;
        p && (typeof p != "object" || it(p)) && S("%s.state: must be set to an object or null", u), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && S("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", u);
      }
    }
    function t0(e, t) {
      t.updater = nS, e.stateNode = t, cs(t, e), t._reactInternalInstance = Qg;
    }
    function n0(e, t, a) {
      var i = !1, u = li, s = li, f = t.contextType;
      if ("contextType" in t) {
        var p = (
          // Allow null for conditional declaration
          f === null || f !== void 0 && f.$$typeof === T && f._context === void 0
        );
        if (!p && !eS.has(t)) {
          eS.add(t);
          var v = "";
          f === void 0 ? v = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? v = " However, it is set to a " + typeof f + "." : f.$$typeof === zi ? v = " Did you accidentally pass the Context.Provider instead?" : f._context !== void 0 ? v = " Did you accidentally pass the Context.Consumer instead?" : v = " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", S("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", kt(t) || "Component", v);
        }
      }
      if (typeof f == "object" && f !== null)
        s = ar(f);
      else {
        u = _f(e, t, !0);
        var y = t.contextTypes;
        i = y != null, s = i ? wf(e, u) : li;
      }
      var g = new t(a, s);
      if (e.mode & rt) {
        It(!0);
        try {
          g = new t(a, s);
        } finally {
          It(!1);
        }
      }
      var x = e.memoizedState = g.state !== null && g.state !== void 0 ? g.state : null;
      t0(e, g);
      {
        if (typeof t.getDerivedStateFromProps == "function" && x === null) {
          var _ = kt(t) || "Component";
          qg.has(_) || (qg.add(_), S("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", _, g.state === null ? "null" : "undefined", _));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof g.getSnapshotBeforeUpdate == "function") {
          var z = null, A = null, P = null;
          if (typeof g.componentWillMount == "function" && g.componentWillMount.__suppressDeprecationWarning !== !0 ? z = "componentWillMount" : typeof g.UNSAFE_componentWillMount == "function" && (z = "UNSAFE_componentWillMount"), typeof g.componentWillReceiveProps == "function" && g.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? A = "componentWillReceiveProps" : typeof g.UNSAFE_componentWillReceiveProps == "function" && (A = "UNSAFE_componentWillReceiveProps"), typeof g.componentWillUpdate == "function" && g.componentWillUpdate.__suppressDeprecationWarning !== !0 ? P = "componentWillUpdate" : typeof g.UNSAFE_componentWillUpdate == "function" && (P = "UNSAFE_componentWillUpdate"), z !== null || A !== null || P !== null) {
            var ce = kt(t) || "Component", Ve = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            Xg.has(ce) || (Xg.add(ce), S(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, ce, Ve, z !== null ? `
  ` + z : "", A !== null ? `
  ` + A : "", P !== null ? `
  ` + P : ""));
          }
        }
      }
      return i && IE(e, u, s), g;
    }
    function ew(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (S("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", Ke(e) || "Component"), nS.enqueueReplaceState(t, t.state, null));
    }
    function r0(e, t, a, i) {
      var u = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== u) {
        {
          var s = Ke(e) || "Component";
          Wg.has(s) || (Wg.add(s), S("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        nS.enqueueReplaceState(t, t.state, null);
      }
    }
    function rS(e, t, a, i) {
      Z_(e, t, a);
      var u = e.stateNode;
      u.props = a, u.state = e.memoizedState, u.refs = {}, dg(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        u.context = ar(s);
      else {
        var f = _f(e, t, !0);
        u.context = wf(e, f);
      }
      {
        if (u.state === a) {
          var p = kt(t) || "Component";
          Jg.has(p) || (Jg.add(p), S("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", p));
        }
        e.mode & rt && Zi.recordLegacyContextWarning(e, u), Zi.recordUnsafeLifecycleWarnings(e, u);
      }
      u.state = e.memoizedState;
      var v = t.getDerivedStateFromProps;
      if (typeof v == "function" && (tS(e, t, v, a), u.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof u.getSnapshotBeforeUpdate != "function" && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (ew(e, u), Xh(e, a, u, i), u.state = e.memoizedState), typeof u.componentDidMount == "function") {
        var y = Rt;
        y |= yl, (e.mode & Zt) !== Ue && (y |= Mr), e.flags |= y;
      }
    }
    function tw(e, t, a, i) {
      var u = e.stateNode, s = e.memoizedProps;
      u.props = s;
      var f = u.context, p = t.contextType, v = li;
      if (typeof p == "object" && p !== null)
        v = ar(p);
      else {
        var y = _f(e, t, !0);
        v = wf(e, y);
      }
      var g = t.getDerivedStateFromProps, x = typeof g == "function" || typeof u.getSnapshotBeforeUpdate == "function";
      !x && (typeof u.UNSAFE_componentWillReceiveProps == "function" || typeof u.componentWillReceiveProps == "function") && (s !== a || f !== v) && r0(e, u, a, v), gC();
      var _ = e.memoizedState, z = u.state = _;
      if (Xh(e, a, u, i), z = e.memoizedState, s === a && _ === z && !Lh() && !Kh()) {
        if (typeof u.componentDidMount == "function") {
          var A = Rt;
          A |= yl, (e.mode & Zt) !== Ue && (A |= Mr), e.flags |= A;
        }
        return !1;
      }
      typeof g == "function" && (tS(e, t, g, a), z = e.memoizedState);
      var P = Kh() || e0(e, t, s, a, _, z, v);
      if (P) {
        if (!x && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function") {
          var ce = Rt;
          ce |= yl, (e.mode & Zt) !== Ue && (ce |= Mr), e.flags |= ce;
        }
      } else {
        if (typeof u.componentDidMount == "function") {
          var Ve = Rt;
          Ve |= yl, (e.mode & Zt) !== Ue && (Ve |= Mr), e.flags |= Ve;
        }
        e.memoizedProps = a, e.memoizedState = z;
      }
      return u.props = a, u.state = z, u.context = v, P;
    }
    function nw(e, t, a, i, u) {
      var s = t.stateNode;
      yC(e, t);
      var f = t.memoizedProps, p = t.type === t.elementType ? f : nl(t.type, f);
      s.props = p;
      var v = t.pendingProps, y = s.context, g = a.contextType, x = li;
      if (typeof g == "object" && g !== null)
        x = ar(g);
      else {
        var _ = _f(t, a, !0);
        x = wf(t, _);
      }
      var z = a.getDerivedStateFromProps, A = typeof z == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !A && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (f !== v || y !== x) && r0(t, s, i, x), gC();
      var P = t.memoizedState, ce = s.state = P;
      if (Xh(t, i, s, u), ce = t.memoizedState, f === v && P === ce && !Lh() && !Kh())
        return typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || P !== e.memoizedState) && (t.flags |= Rt), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || P !== e.memoizedState) && (t.flags |= za), !1;
      typeof z == "function" && (tS(t, a, z, i), ce = t.memoizedState);
      var Ve = Kh() || e0(t, a, p, i, P, ce, x) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      F;
      return Ve ? (!A && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, ce, x), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, ce, x)), typeof s.componentDidUpdate == "function" && (t.flags |= Rt), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= za)) : (typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || P !== e.memoizedState) && (t.flags |= Rt), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || P !== e.memoizedState) && (t.flags |= za), t.memoizedProps = i, t.memoizedState = ce), s.props = i, s.state = ce, s.context = x, Ve;
    }
    function Ks(e, t) {
      return {
        value: e,
        source: t,
        stack: xt(t),
        digest: null
      };
    }
    function aS(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function rw(e, t) {
      return !0;
    }
    function iS(e, t) {
      try {
        var a = rw(e, t);
        if (a === !1)
          return;
        var i = t.value, u = t.source, s = t.stack, f = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === le)
            return;
          console.error(i);
        }
        var p = u ? Ke(u) : null, v = p ? "The above error occurred in the <" + p + "> component:" : "The above error occurred in one of your React components:", y;
        if (e.tag === $)
          y = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var g = Ke(e) || "Anonymous";
          y = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + g + ".");
        }
        var x = v + `
` + f + `

` + ("" + y);
        console.error(x);
      } catch (_) {
        setTimeout(function() {
          throw _;
        });
      }
    }
    var aw = typeof WeakMap == "function" ? WeakMap : Map;
    function a0(e, t, a) {
      var i = Lu(Qt, a);
      i.tag = cg, i.payload = {
        element: null
      };
      var u = t.value;
      return i.callback = function() {
        X1(u), iS(e, t);
      }, i;
    }
    function lS(e, t, a) {
      var i = Lu(Qt, a);
      i.tag = cg;
      var u = e.type.getDerivedStateFromError;
      if (typeof u == "function") {
        var s = t.value;
        i.payload = function() {
          return u(s);
        }, i.callback = function() {
          hR(e), iS(e, t);
        };
      }
      var f = e.stateNode;
      return f !== null && typeof f.componentDidCatch == "function" && (i.callback = function() {
        hR(e), iS(e, t), typeof u != "function" && q1(this);
        var v = t.value, y = t.stack;
        this.componentDidCatch(v, {
          componentStack: y !== null ? y : ""
        }), typeof u != "function" && (na(e.lanes, Qe) || S("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", Ke(e) || "Unknown"));
      }), i;
    }
    function i0(e, t, a) {
      var i = e.pingCache, u;
      if (i === null ? (i = e.pingCache = new aw(), u = /* @__PURE__ */ new Set(), i.set(t, u)) : (u = i.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), i.set(t, u))), !u.has(a)) {
        u.add(a);
        var s = K1.bind(null, e, t, a);
        wr && Ip(e, a), t.then(s, s);
      }
    }
    function iw(e, t, a, i) {
      var u = e.updateQueue;
      if (u === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        u.add(a);
    }
    function lw(e, t) {
      var a = e.tag;
      if ((e.mode & St) === Ue && (a === pe || a === $e || a === Be)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function l0(e) {
      var t = e;
      do {
        if (t.tag === ke && P_(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function u0(e, t, a, i, u) {
      if ((e.mode & St) === Ue) {
        if (e === t)
          e.flags |= Ua;
        else {
          if (e.flags |= gt, a.flags |= ti, a.flags &= -52805, a.tag === le) {
            var s = a.alternate;
            if (s === null)
              a.tag = Nt;
            else {
              var f = Lu(Qt, Qe);
              f.tag = Qh, No(a, f, Qe);
            }
          }
          a.lanes = lt(a.lanes, Qe);
        }
        return e;
      }
      return e.flags |= Ua, e.lanes = u, e;
    }
    function uw(e, t, a, i, u) {
      if (a.flags |= lu, wr && Ip(e, u), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        lw(a), jr() && a.mode & St && JE();
        var f = l0(t);
        if (f !== null) {
          f.flags &= -257, u0(f, t, a, e, u), f.mode & St && i0(e, s, u), iw(f, e, s);
          return;
        } else {
          if (!Dd(u)) {
            i0(e, s, u), HS();
            return;
          }
          var p = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = p;
        }
      } else if (jr() && a.mode & St) {
        JE();
        var v = l0(t);
        if (v !== null) {
          (v.flags & Ua) === ze && (v.flags |= Rn), u0(v, t, a, e, u), Jy(Ks(i, a));
          return;
        }
      }
      i = Ks(i, a), P1(i);
      var y = t;
      do {
        switch (y.tag) {
          case $: {
            var g = i;
            y.flags |= Ua;
            var x = tr(u);
            y.lanes = lt(y.lanes, x);
            var _ = a0(y, g, x);
            pg(y, _);
            return;
          }
          case le:
            var z = i, A = y.type, P = y.stateNode;
            if ((y.flags & gt) === ze && (typeof A.getDerivedStateFromError == "function" || P !== null && typeof P.componentDidCatch == "function" && !lR(P))) {
              y.flags |= Ua;
              var ce = tr(u);
              y.lanes = lt(y.lanes, ce);
              var Ve = lS(y, z, ce);
              pg(y, Ve);
              return;
            }
            break;
        }
        y = y.return;
      } while (y !== null);
    }
    function ow() {
      return null;
    }
    var Dp = We.ReactCurrentOwner, rl = !1, uS, Op, oS, sS, cS, Js, fS, Cm, Lp;
    uS = {}, Op = {}, oS = {}, sS = {}, cS = {}, Js = !1, fS = {}, Cm = {}, Lp = {};
    function Ra(e, t, a, i) {
      e === null ? t.child = cC(t, null, a, i) : t.child = Of(t, e.child, a, i);
    }
    function sw(e, t, a, i) {
      t.child = Of(t, e.child, null, i), t.child = Of(t, null, a, i);
    }
    function o0(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && Ki(
          s,
          i,
          // Resolved props
          "prop",
          kt(a)
        );
      }
      var f = a.render, p = t.ref, v, y;
      Nf(t, u), Aa(t);
      {
        if (Dp.current = t, Da(!0), v = Ff(e, t, f, i, p, u), y = Hf(), t.mode & rt) {
          It(!0);
          try {
            v = Ff(e, t, f, i, p, u), y = Hf();
          } finally {
            It(!1);
          }
        }
        Da(!1);
      }
      return Rl(), e !== null && !rl ? (bC(e, t, u), Nu(e, t, u)) : (jr() && y && Qy(t), t.flags |= Ii, Ra(e, t, v, u), t.child);
    }
    function s0(e, t, a, i, u) {
      if (e === null) {
        var s = a.type;
        if (vx(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var f = s;
          return f = Wf(s), t.tag = Be, t.type = f, vS(t, s), c0(e, t, f, i, u);
        }
        {
          var p = s.propTypes;
          if (p && Ki(
            p,
            i,
            // Resolved props
            "prop",
            kt(s)
          ), a.defaultProps !== void 0) {
            var v = kt(s) || "Unknown";
            Lp[v] || (S("%s: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.", v), Lp[v] = !0);
          }
        }
        var y = XS(a.type, null, i, t, t.mode, u);
        return y.ref = t.ref, y.return = t, t.child = y, y;
      }
      {
        var g = a.type, x = g.propTypes;
        x && Ki(
          x,
          i,
          // Resolved props
          "prop",
          kt(g)
        );
      }
      var _ = e.child, z = ES(e, u);
      if (!z) {
        var A = _.memoizedProps, P = a.compare;
        if (P = P !== null ? P : Ae, P(A, i) && e.ref === t.ref)
          return Nu(e, t, u);
      }
      t.flags |= Ii;
      var ce = rc(_, i);
      return ce.ref = t.ref, ce.return = t, t.child = ce, ce;
    }
    function c0(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === Je) {
          var f = s, p = f._payload, v = f._init;
          try {
            s = v(p);
          } catch {
            s = null;
          }
          var y = s && s.propTypes;
          y && Ki(
            y,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            kt(s)
          );
        }
      }
      if (e !== null) {
        var g = e.memoizedProps;
        if (Ae(g, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (rl = !1, t.pendingProps = i = g, ES(e, u))
            (e.flags & ti) !== ze && (rl = !0);
          else return t.lanes = e.lanes, Nu(e, t, u);
      }
      return dS(e, t, a, i, u);
    }
    function f0(e, t, a) {
      var i = t.pendingProps, u = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || R)
        if ((t.mode & St) === Ue) {
          var f = {
            baseLanes: Y,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = f, zm(t, a);
        } else if (na(a, ya)) {
          var x = {
            baseLanes: Y,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = x;
          var _ = s !== null ? s.baseLanes : a;
          zm(t, _);
        } else {
          var p = null, v;
          if (s !== null) {
            var y = s.baseLanes;
            v = lt(y, a);
          } else
            v = a;
          t.lanes = t.childLanes = ya;
          var g = {
            baseLanes: v,
            cachePool: p,
            transitions: null
          };
          return t.memoizedState = g, t.updateQueue = null, zm(t, v), null;
        }
      else {
        var z;
        s !== null ? (z = lt(s.baseLanes, a), t.memoizedState = null) : z = a, zm(t, z);
      }
      return Ra(e, t, u, a), t.child;
    }
    function cw(e, t, a) {
      var i = t.pendingProps;
      return Ra(e, t, i, a), t.child;
    }
    function fw(e, t, a) {
      var i = t.pendingProps.children;
      return Ra(e, t, i, a), t.child;
    }
    function dw(e, t, a) {
      {
        t.flags |= Rt;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var u = t.pendingProps, s = u.children;
      return Ra(e, t, s, a), t.child;
    }
    function d0(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= An, t.flags |= ds);
    }
    function dS(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && Ki(
          s,
          i,
          // Resolved props
          "prop",
          kt(a)
        );
      }
      var f;
      {
        var p = _f(t, a, !0);
        f = wf(t, p);
      }
      var v, y;
      Nf(t, u), Aa(t);
      {
        if (Dp.current = t, Da(!0), v = Ff(e, t, a, i, f, u), y = Hf(), t.mode & rt) {
          It(!0);
          try {
            v = Ff(e, t, a, i, f, u), y = Hf();
          } finally {
            It(!1);
          }
        }
        Da(!1);
      }
      return Rl(), e !== null && !rl ? (bC(e, t, u), Nu(e, t, u)) : (jr() && y && Qy(t), t.flags |= Ii, Ra(e, t, v, u), t.child);
    }
    function p0(e, t, a, i, u) {
      {
        switch (Dx(t)) {
          case !1: {
            var s = t.stateNode, f = t.type, p = new f(t.memoizedProps, s.context), v = p.state;
            s.updater.enqueueSetState(s, v, null);
            break;
          }
          case !0: {
            t.flags |= gt, t.flags |= Ua;
            var y = new Error("Simulated error coming from DevTools"), g = tr(u);
            t.lanes = lt(t.lanes, g);
            var x = lS(t, Ks(y, t), g);
            pg(t, x);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var _ = a.propTypes;
          _ && Ki(
            _,
            i,
            // Resolved props
            "prop",
            kt(a)
          );
        }
      }
      var z;
      Al(a) ? (z = !0, Mh(t)) : z = !1, Nf(t, u);
      var A = t.stateNode, P;
      A === null ? (Tm(e, t), n0(t, a, i), rS(t, a, i, u), P = !0) : e === null ? P = tw(t, a, i, u) : P = nw(e, t, a, i, u);
      var ce = pS(e, t, a, P, z, u);
      {
        var Ve = t.stateNode;
        P && Ve.props !== i && (Js || S("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", Ke(t) || "a component"), Js = !0);
      }
      return ce;
    }
    function pS(e, t, a, i, u, s) {
      d0(e, t);
      var f = (t.flags & gt) !== ze;
      if (!i && !f)
        return u && qE(t, a, !1), Nu(e, t, s);
      var p = t.stateNode;
      Dp.current = t;
      var v;
      if (f && typeof a.getDerivedStateFromError != "function")
        v = null, KC();
      else {
        Aa(t);
        {
          if (Da(!0), v = p.render(), t.mode & rt) {
            It(!0);
            try {
              p.render();
            } finally {
              It(!1);
            }
          }
          Da(!1);
        }
        Rl();
      }
      return t.flags |= Ii, e !== null && f ? sw(e, t, v, s) : Ra(e, t, v, s), t.memoizedState = p.state, u && qE(t, a, !0), t.child;
    }
    function v0(e) {
      var t = e.stateNode;
      t.pendingContext ? QE(e, t.pendingContext, t.pendingContext !== t.context) : t.context && QE(e, t.context, !1), vg(e, t.containerInfo);
    }
    function pw(e, t, a) {
      if (v0(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, u = t.memoizedState, s = u.element;
      yC(e, t), Xh(t, i, null, a);
      var f = t.memoizedState;
      t.stateNode;
      var p = f.element;
      if (u.isDehydrated) {
        var v = {
          element: p,
          isDehydrated: !1,
          cache: f.cache,
          pendingSuspenseBoundaries: f.pendingSuspenseBoundaries,
          transitions: f.transitions
        }, y = t.updateQueue;
        if (y.baseState = v, t.memoizedState = v, t.flags & Rn) {
          var g = Ks(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return h0(e, t, p, a, g);
        } else if (p !== s) {
          var x = Ks(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return h0(e, t, p, a, x);
        } else {
          m_(t);
          var _ = cC(t, null, p, a);
          t.child = _;
          for (var z = _; z; )
            z.flags = z.flags & -3 | jn, z = z.sibling;
        }
      } else {
        if (Df(), p === s)
          return Nu(e, t, a);
        Ra(e, t, p, a);
      }
      return t.child;
    }
    function h0(e, t, a, i, u) {
      return Df(), Jy(u), t.flags |= Rn, Ra(e, t, a, i), t.child;
    }
    function vw(e, t, a) {
      CC(t), e === null && Ky(t);
      var i = t.type, u = t.pendingProps, s = e !== null ? e.memoizedProps : null, f = u.children, p = Ny(i, u);
      return p ? f = null : s !== null && Ny(i, s) && (t.flags |= Jt), d0(e, t), Ra(e, t, f, a), t.child;
    }
    function hw(e, t) {
      return e === null && Ky(t), null;
    }
    function mw(e, t, a, i) {
      Tm(e, t);
      var u = t.pendingProps, s = a, f = s._payload, p = s._init, v = p(f);
      t.type = v;
      var y = t.tag = hx(v), g = nl(v, u), x;
      switch (y) {
        case pe:
          return vS(t, v), t.type = v = Wf(v), x = dS(null, t, v, g, i), x;
        case le:
          return t.type = v = YS(v), x = p0(null, t, v, g, i), x;
        case $e:
          return t.type = v = IS(v), x = o0(null, t, v, g, i), x;
        case dt: {
          if (t.type !== t.elementType) {
            var _ = v.propTypes;
            _ && Ki(
              _,
              g,
              // Resolved for outer only
              "prop",
              kt(v)
            );
          }
          return x = s0(
            null,
            t,
            v,
            nl(v.type, g),
            // The inner type can have defaults too
            i
          ), x;
        }
      }
      var z = "";
      throw v !== null && typeof v == "object" && v.$$typeof === Je && (z = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + v + ". " + ("Lazy element type must resolve to a class or function." + z));
    }
    function yw(e, t, a, i, u) {
      Tm(e, t), t.tag = le;
      var s;
      return Al(a) ? (s = !0, Mh(t)) : s = !1, Nf(t, u), n0(t, a, i), rS(t, a, i, u), pS(null, t, a, !0, s, u);
    }
    function gw(e, t, a, i) {
      Tm(e, t);
      var u = t.pendingProps, s;
      {
        var f = _f(t, a, !1);
        s = wf(t, f);
      }
      Nf(t, i);
      var p, v;
      Aa(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var y = kt(a) || "Unknown";
          uS[y] || (S("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", y, y), uS[y] = !0);
        }
        t.mode & rt && Zi.recordLegacyContextWarning(t, null), Da(!0), Dp.current = t, p = Ff(null, t, a, u, s, i), v = Hf(), Da(!1);
      }
      if (Rl(), t.flags |= Ii, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0) {
        var g = kt(a) || "Unknown";
        Op[g] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", g, g, g), Op[g] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0
      ) {
        {
          var x = kt(a) || "Unknown";
          Op[x] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", x, x, x), Op[x] = !0);
        }
        t.tag = le, t.memoizedState = null, t.updateQueue = null;
        var _ = !1;
        return Al(a) ? (_ = !0, Mh(t)) : _ = !1, t.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, dg(t), t0(t, p), rS(t, a, u, i), pS(null, t, a, !0, _, i);
      } else {
        if (t.tag = pe, t.mode & rt) {
          It(!0);
          try {
            p = Ff(null, t, a, u, s, i), v = Hf();
          } finally {
            It(!1);
          }
        }
        return jr() && v && Qy(t), Ra(null, t, p, i), vS(t, a), t.child;
      }
    }
    function vS(e, t) {
      {
        if (t && t.childContextTypes && S("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = Lr();
          i && (a += `

Check the render method of \`` + i + "`.");
          var u = i || "", s = e._debugSource;
          s && (u = s.fileName + ":" + s.lineNumber), cS[u] || (cS[u] = !0, S("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (t.defaultProps !== void 0) {
          var f = kt(t) || "Unknown";
          Lp[f] || (S("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", f), Lp[f] = !0);
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var p = kt(t) || "Unknown";
          sS[p] || (S("%s: Function components do not support getDerivedStateFromProps.", p), sS[p] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var v = kt(t) || "Unknown";
          oS[v] || (S("%s: Function components do not support contextType.", v), oS[v] = !0);
        }
      }
    }
    var hS = {
      dehydrated: null,
      treeContext: null,
      retryLane: Hn
    };
    function mS(e) {
      return {
        baseLanes: e,
        cachePool: ow(),
        transitions: null
      };
    }
    function Sw(e, t) {
      var a = null;
      return {
        baseLanes: lt(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function Ew(e, t, a, i) {
      if (t !== null) {
        var u = t.memoizedState;
        if (u === null)
          return !1;
      }
      return yg(e, Ep);
    }
    function Cw(e, t) {
      return ws(e.childLanes, t);
    }
    function m0(e, t, a) {
      var i = t.pendingProps;
      Ox(t) && (t.flags |= gt);
      var u = el.current, s = !1, f = (t.flags & gt) !== ze;
      if (f || Ew(u, e) ? (s = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (u = H_(u, TC)), u = zf(u), zo(t, u), e === null) {
        Ky(t);
        var p = t.memoizedState;
        if (p !== null) {
          var v = p.dehydrated;
          if (v !== null)
            return ww(t, v);
        }
        var y = i.children, g = i.fallback;
        if (s) {
          var x = Rw(t, y, g, a), _ = t.child;
          return _.memoizedState = mS(a), t.memoizedState = hS, x;
        } else
          return yS(t, y);
      } else {
        var z = e.memoizedState;
        if (z !== null) {
          var A = z.dehydrated;
          if (A !== null)
            return xw(e, t, f, i, A, z, a);
        }
        if (s) {
          var P = i.fallback, ce = i.children, Ve = bw(e, t, ce, P, a), Le = t.child, Ot = e.child.memoizedState;
          return Le.memoizedState = Ot === null ? mS(a) : Sw(Ot, a), Le.childLanes = Cw(e, a), t.memoizedState = hS, Ve;
        } else {
          var bt = i.children, D = Tw(e, t, bt, a);
          return t.memoizedState = null, D;
        }
      }
    }
    function yS(e, t, a) {
      var i = e.mode, u = {
        mode: "visible",
        children: t
      }, s = gS(u, i);
      return s.return = e, e.child = s, s;
    }
    function Rw(e, t, a, i) {
      var u = e.mode, s = e.child, f = {
        mode: "hidden",
        children: t
      }, p, v;
      return (u & St) === Ue && s !== null ? (p = s, p.childLanes = Y, p.pendingProps = f, e.mode & _t && (p.actualDuration = 0, p.actualStartTime = -1, p.selfBaseDuration = 0, p.treeBaseDuration = 0), v = Bo(a, u, i, null)) : (p = gS(f, u), v = Bo(a, u, i, null)), p.return = e, v.return = e, p.sibling = v, e.child = p, v;
    }
    function gS(e, t, a) {
      return yR(e, t, Y, null);
    }
    function y0(e, t) {
      return rc(e, t);
    }
    function Tw(e, t, a, i) {
      var u = e.child, s = u.sibling, f = y0(u, {
        mode: "visible",
        children: a
      });
      if ((t.mode & St) === Ue && (f.lanes = i), f.return = t, f.sibling = null, s !== null) {
        var p = t.deletions;
        p === null ? (t.deletions = [s], t.flags |= Kr) : p.push(s);
      }
      return t.child = f, f;
    }
    function bw(e, t, a, i, u) {
      var s = t.mode, f = e.child, p = f.sibling, v = {
        mode: "hidden",
        children: a
      }, y;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (s & St) === Ue && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== f
      ) {
        var g = t.child;
        y = g, y.childLanes = Y, y.pendingProps = v, t.mode & _t && (y.actualDuration = 0, y.actualStartTime = -1, y.selfBaseDuration = f.selfBaseDuration, y.treeBaseDuration = f.treeBaseDuration), t.deletions = null;
      } else
        y = y0(f, v), y.subtreeFlags = f.subtreeFlags & Fn;
      var x;
      return p !== null ? x = rc(p, i) : (x = Bo(i, s, u, null), x.flags |= Un), x.return = t, y.return = t, y.sibling = x, t.child = y, x;
    }
    function Rm(e, t, a, i) {
      i !== null && Jy(i), Of(t, e.child, null, a);
      var u = t.pendingProps, s = u.children, f = yS(t, s);
      return f.flags |= Un, t.memoizedState = null, f;
    }
    function _w(e, t, a, i, u) {
      var s = t.mode, f = {
        mode: "visible",
        children: a
      }, p = gS(f, s), v = Bo(i, s, u, null);
      return v.flags |= Un, p.return = t, v.return = t, p.sibling = v, t.child = p, (t.mode & St) !== Ue && Of(t, e.child, null, u), v;
    }
    function ww(e, t, a) {
      return (e.mode & St) === Ue ? (S("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = Qe) : Ay(t) ? e.lanes = er : e.lanes = ya, null;
    }
    function xw(e, t, a, i, u, s, f) {
      if (a)
        if (t.flags & Rn) {
          t.flags &= -257;
          var D = aS(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return Rm(e, t, f, D);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= gt, null;
          var V = i.children, O = i.fallback, te = _w(e, t, V, O, f), ge = t.child;
          return ge.memoizedState = mS(f), t.memoizedState = hS, te;
        }
      else {
        if (v_(), (t.mode & St) === Ue)
          return Rm(
            e,
            t,
            f,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (Ay(u)) {
          var p, v, y;
          {
            var g = Lb(u);
            p = g.digest, v = g.message, y = g.stack;
          }
          var x;
          v ? x = new Error(v) : x = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var _ = aS(x, p, y);
          return Rm(e, t, f, _);
        }
        var z = na(f, e.childLanes);
        if (rl || z) {
          var A = Mm();
          if (A !== null) {
            var P = Jc(A, f);
            if (P !== Hn && P !== s.retryLane) {
              s.retryLane = P;
              var ce = Qt;
              Ba(e, P), Er(A, e, P, ce);
            }
          }
          HS();
          var Ve = aS(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return Rm(e, t, f, Ve);
        } else if (PE(u)) {
          t.flags |= gt, t.child = e.child;
          var Le = J1.bind(null, e);
          return Nb(u, Le), null;
        } else {
          y_(t, u, s.treeContext);
          var Ot = i.children, bt = yS(t, Ot);
          return bt.flags |= jn, bt;
        }
      }
    }
    function g0(e, t, a) {
      e.lanes = lt(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = lt(i.lanes, t)), og(e.return, t, a);
    }
    function kw(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === ke) {
          var u = i.memoizedState;
          u !== null && g0(i, a, e);
        } else if (i.tag === Vt)
          g0(i, a, e);
        else if (i.child !== null) {
          i.child.return = i, i = i.child;
          continue;
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
    }
    function Dw(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && em(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function Ow(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !fS[e])
        if (fS[e] = !0, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              S('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              S('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              S('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          S('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    function Lw(e, t) {
      e !== void 0 && !Cm[e] && (e !== "collapsed" && e !== "hidden" ? (Cm[e] = !0, S('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (Cm[e] = !0, S('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function S0(e, t) {
      {
        var a = it(e), i = !a && typeof yn(e) == "function";
        if (a || i) {
          var u = a ? "array" : "iterable";
          return S("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", u, t, u), !1;
        }
      }
      return !0;
    }
    function Nw(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (it(e)) {
          for (var a = 0; a < e.length; a++)
            if (!S0(e[a], a))
              return;
        } else {
          var i = yn(e);
          if (typeof i == "function") {
            var u = i.call(e);
            if (u)
              for (var s = u.next(), f = 0; !s.done; s = u.next()) {
                if (!S0(s.value, f))
                  return;
                f++;
              }
          } else
            S('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function SS(e, t, a, i, u) {
      var s = e.memoizedState;
      s === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: a,
        tailMode: u
      } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = i, s.tail = a, s.tailMode = u);
    }
    function E0(e, t, a) {
      var i = t.pendingProps, u = i.revealOrder, s = i.tail, f = i.children;
      Ow(u), Lw(s, u), Nw(f, u), Ra(e, t, f, a);
      var p = el.current, v = yg(p, Ep);
      if (v)
        p = gg(p, Ep), t.flags |= gt;
      else {
        var y = e !== null && (e.flags & gt) !== ze;
        y && kw(t, t.child, a), p = zf(p);
      }
      if (zo(t, p), (t.mode & St) === Ue)
        t.memoizedState = null;
      else
        switch (u) {
          case "forwards": {
            var g = Dw(t.child), x;
            g === null ? (x = t.child, t.child = null) : (x = g.sibling, g.sibling = null), SS(
              t,
              !1,
              // isBackwards
              x,
              g,
              s
            );
            break;
          }
          case "backwards": {
            var _ = null, z = t.child;
            for (t.child = null; z !== null; ) {
              var A = z.alternate;
              if (A !== null && em(A) === null) {
                t.child = z;
                break;
              }
              var P = z.sibling;
              z.sibling = _, _ = z, z = P;
            }
            SS(
              t,
              !0,
              // isBackwards
              _,
              null,
              // last
              s
            );
            break;
          }
          case "together": {
            SS(
              t,
              !1,
              // isBackwards
              null,
              // tail
              null,
              // last
              void 0
            );
            break;
          }
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function Mw(e, t, a) {
      vg(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = Of(t, null, i, a) : Ra(e, t, i, a), t.child;
    }
    var C0 = !1;
    function zw(e, t, a) {
      var i = t.type, u = i._context, s = t.pendingProps, f = t.memoizedProps, p = s.value;
      {
        "value" in s || C0 || (C0 = !0, S("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var v = t.type.propTypes;
        v && Ki(v, s, "prop", "Context.Provider");
      }
      if (pC(t, u, p), f !== null) {
        var y = f.value;
        if (we(y, p)) {
          if (f.children === s.children && !Lh())
            return Nu(e, t, a);
        } else
          O_(t, u, a);
      }
      var g = s.children;
      return Ra(e, t, g, a), t.child;
    }
    var R0 = !1;
    function Uw(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (R0 || (R0 = !0, S("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var u = t.pendingProps, s = u.children;
      typeof s != "function" && S("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), Nf(t, a);
      var f = ar(i);
      Aa(t);
      var p;
      return Dp.current = t, Da(!0), p = s(f), Da(!1), Rl(), t.flags |= Ii, Ra(e, t, p, a), t.child;
    }
    function Np() {
      rl = !0;
    }
    function Tm(e, t) {
      (t.mode & St) === Ue && e !== null && (e.alternate = null, t.alternate = null, t.flags |= Un);
    }
    function Nu(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), KC(), Yp(t.lanes), na(a, t.childLanes) ? (k_(e, t), t.child) : null;
    }
    function Aw(e, t, a) {
      {
        var i = t.return;
        if (i === null)
          throw new Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, t === i.child)
          i.child = a;
        else {
          var u = i.child;
          if (u === null)
            throw new Error("Expected parent to have a child.");
          for (; u.sibling !== t; )
            if (u = u.sibling, u === null)
              throw new Error("Expected to find the previous sibling.");
          u.sibling = a;
        }
        var s = i.deletions;
        return s === null ? (i.deletions = [e], i.flags |= Kr) : s.push(e), a.flags |= Un, a;
      }
    }
    function ES(e, t) {
      var a = e.lanes;
      return !!na(a, t);
    }
    function jw(e, t, a) {
      switch (t.tag) {
        case $:
          v0(t), t.stateNode, Df();
          break;
        case Q:
          CC(t);
          break;
        case le: {
          var i = t.type;
          Al(i) && Mh(t);
          break;
        }
        case q:
          vg(t, t.stateNode.containerInfo);
          break;
        case ot: {
          var u = t.memoizedProps.value, s = t.type._context;
          pC(t, s, u);
          break;
        }
        case Lt:
          {
            var f = na(a, t.childLanes);
            f && (t.flags |= Rt);
            {
              var p = t.stateNode;
              p.effectDuration = 0, p.passiveEffectDuration = 0;
            }
          }
          break;
        case ke: {
          var v = t.memoizedState;
          if (v !== null) {
            if (v.dehydrated !== null)
              return zo(t, zf(el.current)), t.flags |= gt, null;
            var y = t.child, g = y.childLanes;
            if (na(a, g))
              return m0(e, t, a);
            zo(t, zf(el.current));
            var x = Nu(e, t, a);
            return x !== null ? x.sibling : null;
          } else
            zo(t, zf(el.current));
          break;
        }
        case Vt: {
          var _ = (e.flags & gt) !== ze, z = na(a, t.childLanes);
          if (_) {
            if (z)
              return E0(e, t, a);
            t.flags |= gt;
          }
          var A = t.memoizedState;
          if (A !== null && (A.rendering = null, A.tail = null, A.lastEffect = null), zo(t, el.current), z)
            break;
          return null;
        }
        case Pe:
        case Mt:
          return t.lanes = Y, f0(e, t, a);
      }
      return Nu(e, t, a);
    }
    function T0(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return Aw(e, t, XS(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, u = t.pendingProps;
        if (i !== u || Lh() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          rl = !0;
        else {
          var s = ES(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & gt) === ze)
            return rl = !1, jw(e, t, a);
          (e.flags & ti) !== ze ? rl = !0 : rl = !1;
        }
      } else if (rl = !1, jr() && o_(t)) {
        var f = t.index, p = s_();
        KE(t, p, f);
      }
      switch (t.lanes = Y, t.tag) {
        case Z:
          return gw(e, t, t.type, a);
        case mn: {
          var v = t.elementType;
          return mw(e, t, v, a);
        }
        case pe: {
          var y = t.type, g = t.pendingProps, x = t.elementType === y ? g : nl(y, g);
          return dS(e, t, y, x, a);
        }
        case le: {
          var _ = t.type, z = t.pendingProps, A = t.elementType === _ ? z : nl(_, z);
          return p0(e, t, _, A, a);
        }
        case $:
          return pw(e, t, a);
        case Q:
          return vw(e, t, a);
        case ie:
          return hw(e, t);
        case ke:
          return m0(e, t, a);
        case q:
          return Mw(e, t, a);
        case $e: {
          var P = t.type, ce = t.pendingProps, Ve = t.elementType === P ? ce : nl(P, ce);
          return o0(e, t, P, Ve, a);
        }
        case Ce:
          return cw(e, t, a);
        case ut:
          return fw(e, t, a);
        case Lt:
          return dw(e, t, a);
        case ot:
          return zw(e, t, a);
        case jt:
          return Uw(e, t, a);
        case dt: {
          var Le = t.type, Ot = t.pendingProps, bt = nl(Le, Ot);
          if (t.type !== t.elementType) {
            var D = Le.propTypes;
            D && Ki(
              D,
              bt,
              // Resolved for outer only
              "prop",
              kt(Le)
            );
          }
          return bt = nl(Le.type, bt), s0(e, t, Le, bt, a);
        }
        case Be:
          return c0(e, t, t.type, t.pendingProps, a);
        case Nt: {
          var V = t.type, O = t.pendingProps, te = t.elementType === V ? O : nl(V, O);
          return yw(e, t, V, te, a);
        }
        case Vt:
          return E0(e, t, a);
        case Et:
          break;
        case Pe:
          return f0(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Pf(e) {
      e.flags |= Rt;
    }
    function b0(e) {
      e.flags |= An, e.flags |= ds;
    }
    var _0, CS, w0, x0;
    _0 = function(e, t, a, i) {
      for (var u = t.child; u !== null; ) {
        if (u.tag === Q || u.tag === ie)
          ib(e, u.stateNode);
        else if (u.tag !== q) {
          if (u.child !== null) {
            u.child.return = u, u = u.child;
            continue;
          }
        }
        if (u === t)
          return;
        for (; u.sibling === null; ) {
          if (u.return === null || u.return === t)
            return;
          u = u.return;
        }
        u.sibling.return = u.return, u = u.sibling;
      }
    }, CS = function(e, t) {
    }, w0 = function(e, t, a, i, u) {
      var s = e.memoizedProps;
      if (s !== i) {
        var f = t.stateNode, p = hg(), v = ub(f, a, s, i, u, p);
        t.updateQueue = v, v && Pf(t);
      }
    }, x0 = function(e, t, a, i) {
      a !== i && Pf(t);
    };
    function Mp(e, t) {
      if (!jr())
        switch (e.tailMode) {
          case "hidden": {
            for (var a = e.tail, i = null; a !== null; )
              a.alternate !== null && (i = a), a = a.sibling;
            i === null ? e.tail = null : i.sibling = null;
            break;
          }
          case "collapsed": {
            for (var u = e.tail, s = null; u !== null; )
              u.alternate !== null && (s = u), u = u.sibling;
            s === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : s.sibling = null;
            break;
          }
        }
    }
    function Hr(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = Y, i = ze;
      if (t) {
        if ((e.mode & _t) !== Ue) {
          for (var v = e.selfBaseDuration, y = e.child; y !== null; )
            a = lt(a, lt(y.lanes, y.childLanes)), i |= y.subtreeFlags & Fn, i |= y.flags & Fn, v += y.treeBaseDuration, y = y.sibling;
          e.treeBaseDuration = v;
        } else
          for (var g = e.child; g !== null; )
            a = lt(a, lt(g.lanes, g.childLanes)), i |= g.subtreeFlags & Fn, i |= g.flags & Fn, g.return = e, g = g.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & _t) !== Ue) {
          for (var u = e.actualDuration, s = e.selfBaseDuration, f = e.child; f !== null; )
            a = lt(a, lt(f.lanes, f.childLanes)), i |= f.subtreeFlags, i |= f.flags, u += f.actualDuration, s += f.treeBaseDuration, f = f.sibling;
          e.actualDuration = u, e.treeBaseDuration = s;
        } else
          for (var p = e.child; p !== null; )
            a = lt(a, lt(p.lanes, p.childLanes)), i |= p.subtreeFlags, i |= p.flags, p.return = e, p = p.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function Fw(e, t, a) {
      if (R_() && (t.mode & St) !== Ue && (t.flags & gt) === ze)
        return aC(t), Df(), t.flags |= Rn | lu | Ua, !1;
      var i = Fh(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (E_(t), Hr(t), (t.mode & _t) !== Ue) {
            var u = a !== null;
            if (u) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (Df(), (t.flags & gt) === ze && (t.memoizedState = null), t.flags |= Rt, Hr(t), (t.mode & _t) !== Ue) {
            var f = a !== null;
            if (f) {
              var p = t.child;
              p !== null && (t.treeBaseDuration -= p.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return iC(), !0;
    }
    function k0(e, t, a) {
      var i = t.pendingProps;
      switch (Wy(t), t.tag) {
        case Z:
        case mn:
        case Be:
        case pe:
        case $e:
        case Ce:
        case ut:
        case Lt:
        case jt:
        case dt:
          return Hr(t), null;
        case le: {
          var u = t.type;
          return Al(u) && Nh(t), Hr(t), null;
        }
        case $: {
          var s = t.stateNode;
          if (Mf(t), $y(t), Eg(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var f = Fh(t);
            if (f)
              Pf(t);
            else if (e !== null) {
              var p = e.memoizedState;
              // Check if this is a client root
              (!p.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & Rn) !== ze) && (t.flags |= za, iC());
            }
          }
          return CS(e, t), Hr(t), null;
        }
        case Q: {
          mg(t);
          var v = EC(), y = t.type;
          if (e !== null && t.stateNode != null)
            w0(e, t, y, i, v), e.ref !== t.ref && b0(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return Hr(t), null;
            }
            var g = hg(), x = Fh(t);
            if (x)
              g_(t, v, g) && Pf(t);
            else {
              var _ = ab(y, i, v, g, t);
              _0(_, t, !1, !1), t.stateNode = _, lb(_, y, i, v) && Pf(t);
            }
            t.ref !== null && b0(t);
          }
          return Hr(t), null;
        }
        case ie: {
          var z = i;
          if (e && t.stateNode != null) {
            var A = e.memoizedProps;
            x0(e, t, A, z);
          } else {
            if (typeof z != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var P = EC(), ce = hg(), Ve = Fh(t);
            Ve ? S_(t) && Pf(t) : t.stateNode = ob(z, P, ce, t);
          }
          return Hr(t), null;
        }
        case ke: {
          Uf(t);
          var Le = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var Ot = Fw(e, t, Le);
            if (!Ot)
              return t.flags & Ua ? t : null;
          }
          if ((t.flags & gt) !== ze)
            return t.lanes = a, (t.mode & _t) !== Ue && Ig(t), t;
          var bt = Le !== null, D = e !== null && e.memoizedState !== null;
          if (bt !== D && bt) {
            var V = t.child;
            if (V.flags |= gi, (t.mode & St) !== Ue) {
              var O = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !0);
              O || yg(el.current, TC) ? H1() : HS();
            }
          }
          var te = t.updateQueue;
          if (te !== null && (t.flags |= Rt), Hr(t), (t.mode & _t) !== Ue && bt) {
            var ge = t.child;
            ge !== null && (t.treeBaseDuration -= ge.treeBaseDuration);
          }
          return null;
        }
        case q:
          return Mf(t), CS(e, t), e === null && t_(t.stateNode.containerInfo), Hr(t), null;
        case ot:
          var de = t.type._context;
          return ug(de, t), Hr(t), null;
        case Nt: {
          var Ge = t.type;
          return Al(Ge) && Nh(t), Hr(t), null;
        }
        case Vt: {
          Uf(t);
          var tt = t.memoizedState;
          if (tt === null)
            return Hr(t), null;
          var tn = (t.flags & gt) !== ze, Ut = tt.rendering;
          if (Ut === null)
            if (tn)
              Mp(tt, !1);
            else {
              var Wn = V1() && (e === null || (e.flags & gt) === ze);
              if (!Wn)
                for (var At = t.child; At !== null; ) {
                  var Vn = em(At);
                  if (Vn !== null) {
                    tn = !0, t.flags |= gt, Mp(tt, !1);
                    var oa = Vn.updateQueue;
                    return oa !== null && (t.updateQueue = oa, t.flags |= Rt), t.subtreeFlags = ze, D_(t, a), zo(t, gg(el.current, Ep)), t.child;
                  }
                  At = At.sibling;
                }
              tt.tail !== null && wn() > G0() && (t.flags |= gt, tn = !0, Mp(tt, !1), t.lanes = Fv);
            }
          else {
            if (!tn) {
              var Yr = em(Ut);
              if (Yr !== null) {
                t.flags |= gt, tn = !0;
                var oi = Yr.updateQueue;
                if (oi !== null && (t.updateQueue = oi, t.flags |= Rt), Mp(tt, !0), tt.tail === null && tt.tailMode === "hidden" && !Ut.alternate && !jr())
                  return Hr(t), null;
              } else // The time it took to render last row is greater than the remaining
              // time we have to render. So rendering one more row would likely
              // exceed it.
              wn() * 2 - tt.renderingStartTime > G0() && a !== ya && (t.flags |= gt, tn = !0, Mp(tt, !1), t.lanes = Fv);
            }
            if (tt.isBackwards)
              Ut.sibling = t.child, t.child = Ut;
            else {
              var _a = tt.last;
              _a !== null ? _a.sibling = Ut : t.child = Ut, tt.last = Ut;
            }
          }
          if (tt.tail !== null) {
            var wa = tt.tail;
            tt.rendering = wa, tt.tail = wa.sibling, tt.renderingStartTime = wn(), wa.sibling = null;
            var sa = el.current;
            return tn ? sa = gg(sa, Ep) : sa = zf(sa), zo(t, sa), wa;
          }
          return Hr(t), null;
        }
        case Et:
          break;
        case Pe:
        case Mt: {
          FS(t);
          var ju = t.memoizedState, qf = ju !== null;
          if (e !== null) {
            var Gp = e.memoizedState, Yl = Gp !== null;
            Yl !== qf && (t.flags |= gi);
          }
          return !qf || (t.mode & St) === Ue ? Hr(t) : na($l, ya) && (Hr(t), t.subtreeFlags & (Un | Rt) && (t.flags |= gi)), null;
        }
        case ht:
          return null;
        case at:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Hw(e, t, a) {
      switch (Wy(t), t.tag) {
        case le: {
          var i = t.type;
          Al(i) && Nh(t);
          var u = t.flags;
          return u & Ua ? (t.flags = u & -65537 | gt, (t.mode & _t) !== Ue && Ig(t), t) : null;
        }
        case $: {
          t.stateNode, Mf(t), $y(t), Eg();
          var s = t.flags;
          return (s & Ua) !== ze && (s & gt) === ze ? (t.flags = s & -65537 | gt, t) : null;
        }
        case Q:
          return mg(t), null;
        case ke: {
          Uf(t);
          var f = t.memoizedState;
          if (f !== null && f.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            Df();
          }
          var p = t.flags;
          return p & Ua ? (t.flags = p & -65537 | gt, (t.mode & _t) !== Ue && Ig(t), t) : null;
        }
        case Vt:
          return Uf(t), null;
        case q:
          return Mf(t), null;
        case ot:
          var v = t.type._context;
          return ug(v, t), null;
        case Pe:
        case Mt:
          return FS(t), null;
        case ht:
          return null;
        default:
          return null;
      }
    }
    function D0(e, t, a) {
      switch (Wy(t), t.tag) {
        case le: {
          var i = t.type.childContextTypes;
          i != null && Nh(t);
          break;
        }
        case $: {
          t.stateNode, Mf(t), $y(t), Eg();
          break;
        }
        case Q: {
          mg(t);
          break;
        }
        case q:
          Mf(t);
          break;
        case ke:
          Uf(t);
          break;
        case Vt:
          Uf(t);
          break;
        case ot:
          var u = t.type._context;
          ug(u, t);
          break;
        case Pe:
        case Mt:
          FS(t);
          break;
      }
    }
    var O0 = null;
    O0 = /* @__PURE__ */ new Set();
    var bm = !1, Pr = !1, Pw = typeof WeakSet == "function" ? WeakSet : Set, xe = null, Vf = null, Bf = null;
    function Vw(e) {
      Ma(null, function() {
        throw e;
      }), cd();
    }
    var Bw = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & _t)
        try {
          Vl(), t.componentWillUnmount();
        } finally {
          Pl(e);
        }
      else
        t.componentWillUnmount();
    };
    function L0(e, t) {
      try {
        jo(vr, e);
      } catch (a) {
        hn(e, t, a);
      }
    }
    function RS(e, t, a) {
      try {
        Bw(e, a);
      } catch (i) {
        hn(e, t, i);
      }
    }
    function $w(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        hn(e, t, i);
      }
    }
    function N0(e, t) {
      try {
        z0(e);
      } catch (a) {
        hn(e, t, a);
      }
    }
    function $f(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (Se && Me && e.mode & _t)
              try {
                Vl(), i = a(null);
              } finally {
                Pl(e);
              }
            else
              i = a(null);
          } catch (u) {
            hn(e, t, u);
          }
          typeof i == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Ke(e));
        } else
          a.current = null;
    }
    function _m(e, t, a) {
      try {
        a();
      } catch (i) {
        hn(e, t, i);
      }
    }
    var M0 = !1;
    function Yw(e, t) {
      nb(e.containerInfo), xe = t, Iw();
      var a = M0;
      return M0 = !1, a;
    }
    function Iw() {
      for (; xe !== null; ) {
        var e = xe, t = e.child;
        (e.subtreeFlags & Sl) !== ze && t !== null ? (t.return = e, xe = t) : Qw();
      }
    }
    function Qw() {
      for (; xe !== null; ) {
        var e = xe;
        Gt(e);
        try {
          Ww(e);
        } catch (a) {
          hn(e, e.return, a);
        }
        Cn();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, xe = t;
          return;
        }
        xe = e.return;
      }
    }
    function Ww(e) {
      var t = e.alternate, a = e.flags;
      if ((a & za) !== ze) {
        switch (Gt(e), e.tag) {
          case pe:
          case $e:
          case Be:
            break;
          case le: {
            if (t !== null) {
              var i = t.memoizedProps, u = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !Js && (s.props !== e.memoizedProps && S("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ke(e) || "instance"), s.state !== e.memoizedState && S("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ke(e) || "instance"));
              var f = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : nl(e.type, i), u);
              {
                var p = O0;
                f === void 0 && !p.has(e.type) && (p.add(e.type), S("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", Ke(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = f;
            }
            break;
          }
          case $: {
            {
              var v = e.stateNode;
              xb(v.containerInfo);
            }
            break;
          }
          case Q:
          case ie:
          case q:
          case Nt:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        Cn();
      }
    }
    function al(e, t, a) {
      var i = t.updateQueue, u = i !== null ? i.lastEffect : null;
      if (u !== null) {
        var s = u.next, f = s;
        do {
          if ((f.tag & e) === e) {
            var p = f.destroy;
            f.destroy = void 0, p !== void 0 && ((e & Fr) !== $a ? Tl(t) : (e & vr) !== $a && Rd(t), (e & jl) !== $a && Qp(!0), _m(t, a, p), (e & jl) !== $a && Qp(!1), (e & Fr) !== $a ? _c() : (e & vr) !== $a && uo());
          }
          f = f.next;
        } while (f !== s);
      }
    }
    function jo(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var u = i.next, s = u;
        do {
          if ((s.tag & e) === e) {
            (e & Fr) !== $a ? Av(t) : (e & vr) !== $a && jv(t);
            var f = s.create;
            (e & jl) !== $a && Qp(!0), s.destroy = f(), (e & jl) !== $a && Qp(!1), (e & Fr) !== $a ? Wi() : (e & vr) !== $a && wc();
            {
              var p = s.destroy;
              if (p !== void 0 && typeof p != "function") {
                var v = void 0;
                (s.tag & vr) !== ze ? v = "useLayoutEffect" : (s.tag & jl) !== ze ? v = "useInsertionEffect" : v = "useEffect";
                var y = void 0;
                p === null ? y = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof p.then == "function" ? y = `

It looks like you wrote ` + v + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + v + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : y = " You returned: " + p, S("%s must not return anything besides a function, which is used for clean-up.%s", v, y);
              }
            }
          }
          s = s.next;
        } while (s !== u);
      }
    }
    function qw(e, t) {
      if ((t.flags & Rt) !== ze)
        switch (t.tag) {
          case Lt: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, u = i.id, s = i.onPostCommit, f = GC(), p = t.alternate === null ? "mount" : "update";
            qC() && (p = "nested-update"), typeof s == "function" && s(u, p, a, f);
            var v = t.return;
            e: for (; v !== null; ) {
              switch (v.tag) {
                case $:
                  var y = v.stateNode;
                  y.passiveEffectDuration += a;
                  break e;
                case Lt:
                  var g = v.stateNode;
                  g.passiveEffectDuration += a;
                  break e;
              }
              v = v.return;
            }
            break;
          }
        }
    }
    function Gw(e, t, a, i) {
      if ((a.flags & El) !== ze)
        switch (a.tag) {
          case pe:
          case $e:
          case Be: {
            if (!Pr)
              if (a.mode & _t)
                try {
                  Vl(), jo(vr | pr, a);
                } finally {
                  Pl(a);
                }
              else
                jo(vr | pr, a);
            break;
          }
          case le: {
            var u = a.stateNode;
            if (a.flags & Rt && !Pr)
              if (t === null)
                if (a.type === a.elementType && !Js && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ke(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ke(a) || "instance")), a.mode & _t)
                  try {
                    Vl(), u.componentDidMount();
                  } finally {
                    Pl(a);
                  }
                else
                  u.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : nl(a.type, t.memoizedProps), f = t.memoizedState;
                if (a.type === a.elementType && !Js && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ke(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ke(a) || "instance")), a.mode & _t)
                  try {
                    Vl(), u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    Pl(a);
                  }
                else
                  u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
              }
            var p = a.updateQueue;
            p !== null && (a.type === a.elementType && !Js && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ke(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ke(a) || "instance")), SC(a, p, u));
            break;
          }
          case $: {
            var v = a.updateQueue;
            if (v !== null) {
              var y = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case Q:
                    y = a.child.stateNode;
                    break;
                  case le:
                    y = a.child.stateNode;
                    break;
                }
              SC(a, v, y);
            }
            break;
          }
          case Q: {
            var g = a.stateNode;
            if (t === null && a.flags & Rt) {
              var x = a.type, _ = a.memoizedProps;
              pb(g, x, _);
            }
            break;
          }
          case ie:
            break;
          case q:
            break;
          case Lt: {
            {
              var z = a.memoizedProps, A = z.onCommit, P = z.onRender, ce = a.stateNode.effectDuration, Ve = GC(), Le = t === null ? "mount" : "update";
              qC() && (Le = "nested-update"), typeof P == "function" && P(a.memoizedProps.id, Le, a.actualDuration, a.treeBaseDuration, a.actualStartTime, Ve);
              {
                typeof A == "function" && A(a.memoizedProps.id, Le, ce, Ve), Q1(a);
                var Ot = a.return;
                e: for (; Ot !== null; ) {
                  switch (Ot.tag) {
                    case $:
                      var bt = Ot.stateNode;
                      bt.effectDuration += ce;
                      break e;
                    case Lt:
                      var D = Ot.stateNode;
                      D.effectDuration += ce;
                      break e;
                  }
                  Ot = Ot.return;
                }
              }
            }
            break;
          }
          case ke: {
            r1(e, a);
            break;
          }
          case Vt:
          case Nt:
          case Et:
          case Pe:
          case Mt:
          case at:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Pr || a.flags & An && z0(a);
    }
    function Xw(e) {
      switch (e.tag) {
        case pe:
        case $e:
        case Be: {
          if (e.mode & _t)
            try {
              Vl(), L0(e, e.return);
            } finally {
              Pl(e);
            }
          else
            L0(e, e.return);
          break;
        }
        case le: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && $w(e, e.return, t), N0(e, e.return);
          break;
        }
        case Q: {
          N0(e, e.return);
          break;
        }
      }
    }
    function Kw(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === Q) {
          if (a === null) {
            a = i;
            try {
              var u = i.stateNode;
              t ? Tb(u) : _b(i.stateNode, i.memoizedProps);
            } catch (f) {
              hn(e, e.return, f);
            }
          }
        } else if (i.tag === ie) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? bb(s) : wb(s, i.memoizedProps);
            } catch (f) {
              hn(e, e.return, f);
            }
        } else if (!((i.tag === Pe || i.tag === Mt) && i.memoizedState !== null && i !== e)) {
          if (i.child !== null) {
            i.child.return = i, i = i.child;
            continue;
          }
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          a === i && (a = null), i = i.return;
        }
        a === i && (a = null), i.sibling.return = i.return, i = i.sibling;
      }
    }
    function z0(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        switch (e.tag) {
          case Q:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var u;
          if (e.mode & _t)
            try {
              Vl(), u = t(i);
            } finally {
              Pl(e);
            }
          else
            u = t(i);
          typeof u == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Ke(e));
        } else
          t.hasOwnProperty("current") || S("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", Ke(e)), t.current = i;
      }
    }
    function Jw(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function U0(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, U0(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === Q) {
          var a = e.stateNode;
          a !== null && a_(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function Zw(e) {
      for (var t = e.return; t !== null; ) {
        if (A0(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function A0(e) {
      return e.tag === Q || e.tag === $ || e.tag === q;
    }
    function j0(e) {
      var t = e;
      e: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || A0(t.return))
            return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== Q && t.tag !== ie && t.tag !== ln; ) {
          if (t.flags & Un || t.child === null || t.tag === q)
            continue e;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & Un))
          return t.stateNode;
      }
    }
    function e1(e) {
      var t = Zw(e);
      switch (t.tag) {
        case Q: {
          var a = t.stateNode;
          t.flags & Jt && (HE(a), t.flags &= -33);
          var i = j0(e);
          bS(e, i, a);
          break;
        }
        case $:
        case q: {
          var u = t.stateNode.containerInfo, s = j0(e);
          TS(e, s, u);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function TS(e, t, a) {
      var i = e.tag, u = i === Q || i === ie;
      if (u) {
        var s = e.stateNode;
        t ? Sb(a, s, t) : yb(a, s);
      } else if (i !== q) {
        var f = e.child;
        if (f !== null) {
          TS(f, t, a);
          for (var p = f.sibling; p !== null; )
            TS(p, t, a), p = p.sibling;
        }
      }
    }
    function bS(e, t, a) {
      var i = e.tag, u = i === Q || i === ie;
      if (u) {
        var s = e.stateNode;
        t ? gb(a, s, t) : mb(a, s);
      } else if (i !== q) {
        var f = e.child;
        if (f !== null) {
          bS(f, t, a);
          for (var p = f.sibling; p !== null; )
            bS(p, t, a), p = p.sibling;
        }
      }
    }
    var Vr = null, il = !1;
    function t1(e, t, a) {
      {
        var i = t;
        e: for (; i !== null; ) {
          switch (i.tag) {
            case Q: {
              Vr = i.stateNode, il = !1;
              break e;
            }
            case $: {
              Vr = i.stateNode.containerInfo, il = !0;
              break e;
            }
            case q: {
              Vr = i.stateNode.containerInfo, il = !0;
              break e;
            }
          }
          i = i.return;
        }
        if (Vr === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        F0(e, t, a), Vr = null, il = !1;
      }
      Jw(a);
    }
    function Fo(e, t, a) {
      for (var i = a.child; i !== null; )
        F0(e, t, i), i = i.sibling;
    }
    function F0(e, t, a) {
      switch (lo(a), a.tag) {
        case Q:
          Pr || $f(a, t);
        case ie: {
          {
            var i = Vr, u = il;
            Vr = null, Fo(e, t, a), Vr = i, il = u, Vr !== null && (il ? Cb(Vr, a.stateNode) : Eb(Vr, a.stateNode));
          }
          return;
        }
        case ln: {
          Vr !== null && (il ? Rb(Vr, a.stateNode) : Uy(Vr, a.stateNode));
          return;
        }
        case q: {
          {
            var s = Vr, f = il;
            Vr = a.stateNode.containerInfo, il = !0, Fo(e, t, a), Vr = s, il = f;
          }
          return;
        }
        case pe:
        case $e:
        case dt:
        case Be: {
          if (!Pr) {
            var p = a.updateQueue;
            if (p !== null) {
              var v = p.lastEffect;
              if (v !== null) {
                var y = v.next, g = y;
                do {
                  var x = g, _ = x.destroy, z = x.tag;
                  _ !== void 0 && ((z & jl) !== $a ? _m(a, t, _) : (z & vr) !== $a && (Rd(a), a.mode & _t ? (Vl(), _m(a, t, _), Pl(a)) : _m(a, t, _), uo())), g = g.next;
                } while (g !== y);
              }
            }
          }
          Fo(e, t, a);
          return;
        }
        case le: {
          if (!Pr) {
            $f(a, t);
            var A = a.stateNode;
            typeof A.componentWillUnmount == "function" && RS(a, t, A);
          }
          Fo(e, t, a);
          return;
        }
        case Et: {
          Fo(e, t, a);
          return;
        }
        case Pe: {
          if (
            // TODO: Remove this dead flag
            a.mode & St
          ) {
            var P = Pr;
            Pr = P || a.memoizedState !== null, Fo(e, t, a), Pr = P;
          } else
            Fo(e, t, a);
          break;
        }
        default: {
          Fo(e, t, a);
          return;
        }
      }
    }
    function n1(e) {
      e.memoizedState;
    }
    function r1(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var u = i.memoizedState;
          if (u !== null) {
            var s = u.dehydrated;
            s !== null && Vb(s);
          }
        }
      }
    }
    function H0(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new Pw()), t.forEach(function(i) {
          var u = Z1.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), wr)
              if (Vf !== null && Bf !== null)
                Ip(Bf, Vf);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(u, u);
          }
        });
      }
    }
    function a1(e, t, a) {
      Vf = a, Bf = e, Gt(t), P0(t, e), Gt(t), Vf = null, Bf = null;
    }
    function ll(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u];
          try {
            t1(e, t, s);
          } catch (v) {
            hn(s, t, v);
          }
        }
      var f = Ka();
      if (t.subtreeFlags & ao)
        for (var p = t.child; p !== null; )
          Gt(p), P0(p, e), p = p.sibling;
      Gt(f);
    }
    function P0(e, t, a) {
      var i = e.alternate, u = e.flags;
      switch (e.tag) {
        case pe:
        case $e:
        case dt:
        case Be: {
          if (ll(t, e), Bl(e), u & Rt) {
            try {
              al(jl | pr, e, e.return), jo(jl | pr, e);
            } catch (Ge) {
              hn(e, e.return, Ge);
            }
            if (e.mode & _t) {
              try {
                Vl(), al(vr | pr, e, e.return);
              } catch (Ge) {
                hn(e, e.return, Ge);
              }
              Pl(e);
            } else
              try {
                al(vr | pr, e, e.return);
              } catch (Ge) {
                hn(e, e.return, Ge);
              }
          }
          return;
        }
        case le: {
          ll(t, e), Bl(e), u & An && i !== null && $f(i, i.return);
          return;
        }
        case Q: {
          ll(t, e), Bl(e), u & An && i !== null && $f(i, i.return);
          {
            if (e.flags & Jt) {
              var s = e.stateNode;
              try {
                HE(s);
              } catch (Ge) {
                hn(e, e.return, Ge);
              }
            }
            if (u & Rt) {
              var f = e.stateNode;
              if (f != null) {
                var p = e.memoizedProps, v = i !== null ? i.memoizedProps : p, y = e.type, g = e.updateQueue;
                if (e.updateQueue = null, g !== null)
                  try {
                    vb(f, g, y, v, p, e);
                  } catch (Ge) {
                    hn(e, e.return, Ge);
                  }
              }
            }
          }
          return;
        }
        case ie: {
          if (ll(t, e), Bl(e), u & Rt) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var x = e.stateNode, _ = e.memoizedProps, z = i !== null ? i.memoizedProps : _;
            try {
              hb(x, z, _);
            } catch (Ge) {
              hn(e, e.return, Ge);
            }
          }
          return;
        }
        case $: {
          if (ll(t, e), Bl(e), u & Rt && i !== null) {
            var A = i.memoizedState;
            if (A.isDehydrated)
              try {
                Pb(t.containerInfo);
              } catch (Ge) {
                hn(e, e.return, Ge);
              }
          }
          return;
        }
        case q: {
          ll(t, e), Bl(e);
          return;
        }
        case ke: {
          ll(t, e), Bl(e);
          var P = e.child;
          if (P.flags & gi) {
            var ce = P.stateNode, Ve = P.memoizedState, Le = Ve !== null;
            if (ce.isHidden = Le, Le) {
              var Ot = P.alternate !== null && P.alternate.memoizedState !== null;
              Ot || F1();
            }
          }
          if (u & Rt) {
            try {
              n1(e);
            } catch (Ge) {
              hn(e, e.return, Ge);
            }
            H0(e);
          }
          return;
        }
        case Pe: {
          var bt = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & St
          ) {
            var D = Pr;
            Pr = D || bt, ll(t, e), Pr = D;
          } else
            ll(t, e);
          if (Bl(e), u & gi) {
            var V = e.stateNode, O = e.memoizedState, te = O !== null, ge = e;
            if (V.isHidden = te, te && !bt && (ge.mode & St) !== Ue) {
              xe = ge;
              for (var de = ge.child; de !== null; )
                xe = de, l1(de), de = de.sibling;
            }
            Kw(ge, te);
          }
          return;
        }
        case Vt: {
          ll(t, e), Bl(e), u & Rt && H0(e);
          return;
        }
        case Et:
          return;
        default: {
          ll(t, e), Bl(e);
          return;
        }
      }
    }
    function Bl(e) {
      var t = e.flags;
      if (t & Un) {
        try {
          e1(e);
        } catch (a) {
          hn(e, e.return, a);
        }
        e.flags &= -3;
      }
      t & jn && (e.flags &= -4097);
    }
    function i1(e, t, a) {
      Vf = a, Bf = t, xe = e, V0(e, t, a), Vf = null, Bf = null;
    }
    function V0(e, t, a) {
      for (var i = (e.mode & St) !== Ue; xe !== null; ) {
        var u = xe, s = u.child;
        if (u.tag === Pe && i) {
          var f = u.memoizedState !== null, p = f || bm;
          if (p) {
            _S(e, t, a);
            continue;
          } else {
            var v = u.alternate, y = v !== null && v.memoizedState !== null, g = y || Pr, x = bm, _ = Pr;
            bm = p, Pr = g, Pr && !_ && (xe = u, u1(u));
            for (var z = s; z !== null; )
              xe = z, V0(
                z,
                // New root; bubble back up to here and stop.
                t,
                a
              ), z = z.sibling;
            xe = u, bm = x, Pr = _, _S(e, t, a);
            continue;
          }
        }
        (u.subtreeFlags & El) !== ze && s !== null ? (s.return = u, xe = s) : _S(e, t, a);
      }
    }
    function _S(e, t, a) {
      for (; xe !== null; ) {
        var i = xe;
        if ((i.flags & El) !== ze) {
          var u = i.alternate;
          Gt(i);
          try {
            Gw(t, u, i, a);
          } catch (f) {
            hn(i, i.return, f);
          }
          Cn();
        }
        if (i === e) {
          xe = null;
          return;
        }
        var s = i.sibling;
        if (s !== null) {
          s.return = i.return, xe = s;
          return;
        }
        xe = i.return;
      }
    }
    function l1(e) {
      for (; xe !== null; ) {
        var t = xe, a = t.child;
        switch (t.tag) {
          case pe:
          case $e:
          case dt:
          case Be: {
            if (t.mode & _t)
              try {
                Vl(), al(vr, t, t.return);
              } finally {
                Pl(t);
              }
            else
              al(vr, t, t.return);
            break;
          }
          case le: {
            $f(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && RS(t, t.return, i);
            break;
          }
          case Q: {
            $f(t, t.return);
            break;
          }
          case Pe: {
            var u = t.memoizedState !== null;
            if (u) {
              B0(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, xe = a) : B0(e);
      }
    }
    function B0(e) {
      for (; xe !== null; ) {
        var t = xe;
        if (t === e) {
          xe = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, xe = a;
          return;
        }
        xe = t.return;
      }
    }
    function u1(e) {
      for (; xe !== null; ) {
        var t = xe, a = t.child;
        if (t.tag === Pe) {
          var i = t.memoizedState !== null;
          if (i) {
            $0(e);
            continue;
          }
        }
        a !== null ? (a.return = t, xe = a) : $0(e);
      }
    }
    function $0(e) {
      for (; xe !== null; ) {
        var t = xe;
        Gt(t);
        try {
          Xw(t);
        } catch (i) {
          hn(t, t.return, i);
        }
        if (Cn(), t === e) {
          xe = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, xe = a;
          return;
        }
        xe = t.return;
      }
    }
    function o1(e, t, a, i) {
      xe = t, s1(t, e, a, i);
    }
    function s1(e, t, a, i) {
      for (; xe !== null; ) {
        var u = xe, s = u.child;
        (u.subtreeFlags & or) !== ze && s !== null ? (s.return = u, xe = s) : c1(e, t, a, i);
      }
    }
    function c1(e, t, a, i) {
      for (; xe !== null; ) {
        var u = xe;
        if ((u.flags & ha) !== ze) {
          Gt(u);
          try {
            f1(t, u, a, i);
          } catch (f) {
            hn(u, u.return, f);
          }
          Cn();
        }
        if (u === e) {
          xe = null;
          return;
        }
        var s = u.sibling;
        if (s !== null) {
          s.return = u.return, xe = s;
          return;
        }
        xe = u.return;
      }
    }
    function f1(e, t, a, i) {
      switch (t.tag) {
        case pe:
        case $e:
        case Be: {
          if (t.mode & _t) {
            Yg();
            try {
              jo(Fr | pr, t);
            } finally {
              $g(t);
            }
          } else
            jo(Fr | pr, t);
          break;
        }
      }
    }
    function d1(e) {
      xe = e, p1();
    }
    function p1() {
      for (; xe !== null; ) {
        var e = xe, t = e.child;
        if ((xe.flags & Kr) !== ze) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var u = a[i];
              xe = u, m1(u, e);
            }
            {
              var s = e.alternate;
              if (s !== null) {
                var f = s.child;
                if (f !== null) {
                  s.child = null;
                  do {
                    var p = f.sibling;
                    f.sibling = null, f = p;
                  } while (f !== null);
                }
              }
            }
            xe = e;
          }
        }
        (e.subtreeFlags & or) !== ze && t !== null ? (t.return = e, xe = t) : v1();
      }
    }
    function v1() {
      for (; xe !== null; ) {
        var e = xe;
        (e.flags & ha) !== ze && (Gt(e), h1(e), Cn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, xe = t;
          return;
        }
        xe = e.return;
      }
    }
    function h1(e) {
      switch (e.tag) {
        case pe:
        case $e:
        case Be: {
          e.mode & _t ? (Yg(), al(Fr | pr, e, e.return), $g(e)) : al(Fr | pr, e, e.return);
          break;
        }
      }
    }
    function m1(e, t) {
      for (; xe !== null; ) {
        var a = xe;
        Gt(a), g1(a, t), Cn();
        var i = a.child;
        i !== null ? (i.return = a, xe = i) : y1(e);
      }
    }
    function y1(e) {
      for (; xe !== null; ) {
        var t = xe, a = t.sibling, i = t.return;
        if (U0(t), t === e) {
          xe = null;
          return;
        }
        if (a !== null) {
          a.return = i, xe = a;
          return;
        }
        xe = i;
      }
    }
    function g1(e, t) {
      switch (e.tag) {
        case pe:
        case $e:
        case Be: {
          e.mode & _t ? (Yg(), al(Fr, e, t), $g(e)) : al(Fr, e, t);
          break;
        }
      }
    }
    function S1(e) {
      switch (e.tag) {
        case pe:
        case $e:
        case Be: {
          try {
            jo(vr | pr, e);
          } catch (a) {
            hn(e, e.return, a);
          }
          break;
        }
        case le: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            hn(e, e.return, a);
          }
          break;
        }
      }
    }
    function E1(e) {
      switch (e.tag) {
        case pe:
        case $e:
        case Be: {
          try {
            jo(Fr | pr, e);
          } catch (t) {
            hn(e, e.return, t);
          }
          break;
        }
      }
    }
    function C1(e) {
      switch (e.tag) {
        case pe:
        case $e:
        case Be: {
          try {
            al(vr | pr, e, e.return);
          } catch (a) {
            hn(e, e.return, a);
          }
          break;
        }
        case le: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && RS(e, e.return, t);
          break;
        }
      }
    }
    function R1(e) {
      switch (e.tag) {
        case pe:
        case $e:
        case Be:
          try {
            al(Fr | pr, e, e.return);
          } catch (t) {
            hn(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var zp = Symbol.for;
      zp("selector.component"), zp("selector.has_pseudo_class"), zp("selector.role"), zp("selector.test_id"), zp("selector.text");
    }
    var T1 = [];
    function b1() {
      T1.forEach(function(e) {
        return e();
      });
    }
    var _1 = We.ReactCurrentActQueue;
    function w1(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function Y0() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && _1.current !== null && S("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var x1 = Math.ceil, wS = We.ReactCurrentDispatcher, xS = We.ReactCurrentOwner, Br = We.ReactCurrentBatchConfig, ul = We.ReactCurrentActQueue, yr = (
      /*             */
      0
    ), I0 = (
      /*               */
      1
    ), $r = (
      /*                */
      2
    ), Di = (
      /*                */
      4
    ), Mu = 0, Up = 1, Zs = 2, wm = 3, Ap = 4, Q0 = 5, kS = 6, Dt = yr, Ta = null, On = null, gr = Y, $l = Y, DS = ko(Y), Sr = Mu, jp = null, xm = Y, Fp = Y, km = Y, Hp = null, Ya = null, OS = 0, W0 = 500, q0 = 1 / 0, k1 = 500, zu = null;
    function Pp() {
      q0 = wn() + k1;
    }
    function G0() {
      return q0;
    }
    var Dm = !1, LS = null, Yf = null, ec = !1, Ho = null, Vp = Y, NS = [], MS = null, D1 = 50, Bp = 0, zS = null, US = !1, Om = !1, O1 = 50, If = 0, Lm = null, $p = Qt, Nm = Y, X0 = !1;
    function Mm() {
      return Ta;
    }
    function ba() {
      return (Dt & ($r | Di)) !== yr ? wn() : ($p !== Qt || ($p = wn()), $p);
    }
    function Po(e) {
      var t = e.mode;
      if ((t & St) === Ue)
        return Qe;
      if ((Dt & $r) !== yr && gr !== Y)
        return tr(gr);
      var a = __() !== b_;
      if (a) {
        if (Br.transition !== null) {
          var i = Br.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return Nm === Hn && (Nm = Nd()), Nm;
      }
      var u = ga();
      if (u !== Hn)
        return u;
      var s = sb();
      return s;
    }
    function L1(e) {
      var t = e.mode;
      return (t & St) === Ue ? Qe : Yv();
    }
    function Er(e, t, a, i) {
      tx(), X0 && S("useInsertionEffect must not schedule updates."), US && (Om = !0), vo(e, a, i), (Dt & $r) !== Y && e === Ta ? ax(t) : (wr && Qv(e, t, a), ix(t), e === Ta && ((Dt & $r) === yr && (Fp = lt(Fp, a)), Sr === Ap && Vo(e, gr)), Ia(e, i), a === Qe && Dt === yr && (t.mode & St) === Ue && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !ul.isBatchingLegacy && (Pp(), XE()));
    }
    function N1(e, t, a) {
      var i = e.current;
      i.lanes = t, vo(e, t, a), Ia(e, a);
    }
    function M1(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (Dt & $r) !== yr
      );
    }
    function Ia(e, t) {
      var a = e.callbackNode;
      Vv(e, t);
      var i = ta(e, e === Ta ? gr : Y);
      if (i === Y) {
        a !== null && dR(a), e.callbackNode = null, e.callbackPriority = Hn;
        return;
      }
      var u = vu(i), s = e.callbackPriority;
      if (s === u && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(ul.current !== null && a !== BS)) {
        a == null && s !== Qe && S("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && dR(a);
      var f;
      if (u === Qe)
        e.tag === Do ? (ul.isBatchingLegacy !== null && (ul.didScheduleLegacyUpdate = !0), u_(Z0.bind(null, e))) : GE(Z0.bind(null, e)), ul.current !== null ? ul.current.push(Oo) : fb(function() {
          (Dt & ($r | Di)) === yr && Oo();
        }), f = null;
      else {
        var p;
        switch (qv(i)) {
          case ra:
            p = Qi;
            break;
          case ja:
            p = ps;
            break;
          case cr:
            p = ou;
            break;
          case ef:
            p = io;
            break;
          default:
            p = ou;
            break;
        }
        f = $S(p, K0.bind(null, e));
      }
      e.callbackPriority = u, e.callbackNode = f;
    }
    function K0(e, t) {
      if (K_(), $p = Qt, Nm = Y, (Dt & ($r | Di)) !== yr)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = Au();
      if (i && e.callbackNode !== a)
        return null;
      var u = ta(e, e === Ta ? gr : Y);
      if (u === Y)
        return null;
      var s = !_s(e, u) && !$v(e, u) && !t, f = s ? $1(e, u) : Um(e, u);
      if (f !== Mu) {
        if (f === Zs) {
          var p = Qc(e);
          p !== Y && (u = p, f = AS(e, p));
        }
        if (f === Up) {
          var v = jp;
          throw tc(e, Y), Vo(e, u), Ia(e, wn()), v;
        }
        if (f === kS)
          Vo(e, u);
        else {
          var y = !_s(e, u), g = e.current.alternate;
          if (y && !U1(g)) {
            if (f = Um(e, u), f === Zs) {
              var x = Qc(e);
              x !== Y && (u = x, f = AS(e, x));
            }
            if (f === Up) {
              var _ = jp;
              throw tc(e, Y), Vo(e, u), Ia(e, wn()), _;
            }
          }
          e.finishedWork = g, e.finishedLanes = u, z1(e, f, u);
        }
      }
      return Ia(e, wn()), e.callbackNode === a ? K0.bind(null, e) : null;
    }
    function AS(e, t) {
      var a = Hp;
      if (mu(e)) {
        var i = tc(e, t);
        i.flags |= Rn, e_(e.containerInfo);
      }
      var u = Um(e, t);
      if (u !== Zs) {
        var s = Ya;
        Ya = a, s !== null && J0(s);
      }
      return u;
    }
    function J0(e) {
      Ya === null ? Ya = e : Ya.push.apply(Ya, e);
    }
    function z1(e, t, a) {
      switch (t) {
        case Mu:
        case Up:
          throw new Error("Root did not complete. This is a bug in React.");
        case Zs: {
          nc(e, Ya, zu);
          break;
        }
        case wm: {
          if (Vo(e, a), Wc(a) && // do not delay if we're inside an act() scope
          !pR()) {
            var i = OS + W0 - wn();
            if (i > 10) {
              var u = ta(e, Y);
              if (u !== Y)
                break;
              var s = e.suspendedLanes;
              if (!hu(s, a)) {
                ba(), Kc(e, s);
                break;
              }
              e.timeoutHandle = My(nc.bind(null, e, Ya, zu), i);
              break;
            }
          }
          nc(e, Ya, zu);
          break;
        }
        case Ap: {
          if (Vo(e, a), ry(a))
            break;
          if (!pR()) {
            var f = kd(e, a), p = f, v = wn() - p, y = ex(v) - v;
            if (y > 10) {
              e.timeoutHandle = My(nc.bind(null, e, Ya, zu), y);
              break;
            }
          }
          nc(e, Ya, zu);
          break;
        }
        case Q0: {
          nc(e, Ya, zu);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function U1(e) {
      for (var t = e; ; ) {
        if (t.flags & Tc) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var u = 0; u < i.length; u++) {
                var s = i[u], f = s.getSnapshot, p = s.value;
                try {
                  if (!we(f(), p))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var v = t.child;
        if (t.subtreeFlags & Tc && v !== null) {
          v.return = t, t = v;
          continue;
        }
        if (t === e)
          return !0;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return !0;
    }
    function Vo(e, t) {
      t = ws(t, km), t = ws(t, Fp), zd(e, t);
    }
    function Z0(e) {
      if (J_(), (Dt & ($r | Di)) !== yr)
        throw new Error("Should not already be working.");
      Au();
      var t = ta(e, Y);
      if (!na(t, Qe))
        return Ia(e, wn()), null;
      var a = Um(e, t);
      if (e.tag !== Do && a === Zs) {
        var i = Qc(e);
        i !== Y && (t = i, a = AS(e, i));
      }
      if (a === Up) {
        var u = jp;
        throw tc(e, Y), Vo(e, t), Ia(e, wn()), u;
      }
      if (a === kS)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, nc(e, Ya, zu), Ia(e, wn()), null;
    }
    function A1(e, t) {
      t !== Y && (xs(e, lt(t, Qe)), Ia(e, wn()), (Dt & ($r | Di)) === yr && (Pp(), Oo()));
    }
    function jS(e, t) {
      var a = Dt;
      Dt |= I0;
      try {
        return e(t);
      } finally {
        Dt = a, Dt === yr && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !ul.isBatchingLegacy && (Pp(), XE());
      }
    }
    function j1(e, t, a, i, u) {
      var s = ga(), f = Br.transition;
      try {
        return Br.transition = null, In(ra), e(t, a, i, u);
      } finally {
        In(s), Br.transition = f, Dt === yr && Pp();
      }
    }
    function Uu(e) {
      Ho !== null && Ho.tag === Do && (Dt & ($r | Di)) === yr && Au();
      var t = Dt;
      Dt |= I0;
      var a = Br.transition, i = ga();
      try {
        return Br.transition = null, In(ra), e ? e() : void 0;
      } finally {
        In(i), Br.transition = a, Dt = t, (Dt & ($r | Di)) === yr && Oo();
      }
    }
    function eR() {
      return (Dt & ($r | Di)) !== yr;
    }
    function zm(e, t) {
      la(DS, $l, e), $l = lt($l, t);
    }
    function FS(e) {
      $l = DS.current, ia(DS, e);
    }
    function tc(e, t) {
      e.finishedWork = null, e.finishedLanes = Y;
      var a = e.timeoutHandle;
      if (a !== zy && (e.timeoutHandle = zy, cb(a)), On !== null)
        for (var i = On.return; i !== null; ) {
          var u = i.alternate;
          D0(u, i), i = i.return;
        }
      Ta = e;
      var s = rc(e.current, null);
      return On = s, gr = $l = t, Sr = Mu, jp = null, xm = Y, Fp = Y, km = Y, Hp = null, Ya = null, N_(), Zi.discardPendingWarnings(), s;
    }
    function tR(e, t) {
      do {
        var a = On;
        try {
          if (Yh(), _C(), Cn(), xS.current = null, a === null || a.return === null) {
            Sr = Up, jp = t, On = null;
            return;
          }
          if (Se && a.mode & _t && Sm(a, !0), Te)
            if (Rl(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              hs(a, i, gr);
            } else
              Ci(a, t, gr);
          uw(e, a.return, a, t, gr), iR(a);
        } catch (u) {
          t = u, On === a && a !== null ? (a = a.return, On = a) : a = On;
          continue;
        }
        return;
      } while (!0);
    }
    function nR() {
      var e = wS.current;
      return wS.current = vm, e === null ? vm : e;
    }
    function rR(e) {
      wS.current = e;
    }
    function F1() {
      OS = wn();
    }
    function Yp(e) {
      xm = lt(e, xm);
    }
    function H1() {
      Sr === Mu && (Sr = wm);
    }
    function HS() {
      (Sr === Mu || Sr === wm || Sr === Zs) && (Sr = Ap), Ta !== null && (xl(xm) || xl(Fp)) && Vo(Ta, gr);
    }
    function P1(e) {
      Sr !== Ap && (Sr = Zs), Hp === null ? Hp = [e] : Hp.push(e);
    }
    function V1() {
      return Sr === Mu;
    }
    function Um(e, t) {
      var a = Dt;
      Dt |= $r;
      var i = nR();
      if (Ta !== e || gr !== t) {
        if (wr) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Ip(e, gr), u.clear()), Ud(e, t);
        }
        zu = Zc(), tc(e, t);
      }
      bd(t);
      do
        try {
          B1();
          break;
        } catch (s) {
          tR(e, s);
        }
      while (!0);
      if (Yh(), Dt = a, rR(i), On !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return gn(), Ta = null, gr = Y, Sr;
    }
    function B1() {
      for (; On !== null; )
        aR(On);
    }
    function $1(e, t) {
      var a = Dt;
      Dt |= $r;
      var i = nR();
      if (Ta !== e || gr !== t) {
        if (wr) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Ip(e, gr), u.clear()), Ud(e, t);
        }
        zu = Zc(), Pp(), tc(e, t);
      }
      bd(t);
      do
        try {
          Y1();
          break;
        } catch (s) {
          tR(e, s);
        }
      while (!0);
      return Yh(), rR(i), Dt = a, On !== null ? (_d(), Mu) : (gn(), Ta = null, gr = Y, Sr);
    }
    function Y1() {
      for (; On !== null && !md(); )
        aR(On);
    }
    function aR(e) {
      var t = e.alternate;
      Gt(e);
      var a;
      (e.mode & _t) !== Ue ? (Bg(e), a = PS(t, e, $l), Sm(e, !0)) : a = PS(t, e, $l), Cn(), e.memoizedProps = e.pendingProps, a === null ? iR(e) : On = a, xS.current = null;
    }
    function iR(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & lu) === ze) {
          Gt(t);
          var u = void 0;
          if ((t.mode & _t) === Ue ? u = k0(a, t, $l) : (Bg(t), u = k0(a, t, $l), Sm(t, !1)), Cn(), u !== null) {
            On = u;
            return;
          }
        } else {
          var s = Hw(a, t);
          if (s !== null) {
            s.flags &= Dv, On = s;
            return;
          }
          if ((t.mode & _t) !== Ue) {
            Sm(t, !1);
            for (var f = t.actualDuration, p = t.child; p !== null; )
              f += p.actualDuration, p = p.sibling;
            t.actualDuration = f;
          }
          if (i !== null)
            i.flags |= lu, i.subtreeFlags = ze, i.deletions = null;
          else {
            Sr = kS, On = null;
            return;
          }
        }
        var v = t.sibling;
        if (v !== null) {
          On = v;
          return;
        }
        t = i, On = t;
      } while (t !== null);
      Sr === Mu && (Sr = Q0);
    }
    function nc(e, t, a) {
      var i = ga(), u = Br.transition;
      try {
        Br.transition = null, In(ra), I1(e, t, a, i);
      } finally {
        Br.transition = u, In(i);
      }
      return null;
    }
    function I1(e, t, a, i) {
      do
        Au();
      while (Ho !== null);
      if (nx(), (Dt & ($r | Di)) !== yr)
        throw new Error("Should not already be working.");
      var u = e.finishedWork, s = e.finishedLanes;
      if (Uv(s), u === null)
        return Ei(), null;
      if (s === Y && S("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = Y, u === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = Hn;
      var f = lt(u.lanes, u.childLanes);
      Iv(e, f), e === Ta && (Ta = null, On = null, gr = Y), ((u.subtreeFlags & or) !== ze || (u.flags & or) !== ze) && (ec || (ec = !0, MS = a, $S(ou, function() {
        return Au(), null;
      })));
      var p = (u.subtreeFlags & (Sl | ao | El | or)) !== ze, v = (u.flags & (Sl | ao | El | or)) !== ze;
      if (p || v) {
        var y = Br.transition;
        Br.transition = null;
        var g = ga();
        In(ra);
        var x = Dt;
        Dt |= Di, xS.current = null, Yw(e, u), XC(), a1(e, u, s), rb(e.containerInfo), e.current = u, ms(s), i1(u, e, s), cu(), Lv(), Dt = x, In(g), Br.transition = y;
      } else
        e.current = u, XC();
      var _ = ec;
      if (ec ? (ec = !1, Ho = e, Vp = s) : (If = 0, Lm = null), f = e.pendingLanes, f === Y && (Yf = null), _ || sR(e.current, !1), Sd(u.stateNode, i), wr && e.memoizedUpdaters.clear(), b1(), Ia(e, wn()), t !== null)
        for (var z = e.onRecoverableError, A = 0; A < t.length; A++) {
          var P = t[A], ce = P.stack, Ve = P.digest;
          z(P.value, {
            componentStack: ce,
            digest: Ve
          });
        }
      if (Dm) {
        Dm = !1;
        var Le = LS;
        throw LS = null, Le;
      }
      return na(Vp, Qe) && e.tag !== Do && Au(), f = e.pendingLanes, na(f, Qe) ? (X_(), e === zS ? Bp++ : (Bp = 0, zS = e)) : Bp = 0, Oo(), Ei(), null;
    }
    function Au() {
      if (Ho !== null) {
        var e = qv(Vp), t = xr(cr, e), a = Br.transition, i = ga();
        try {
          return Br.transition = null, In(t), W1();
        } finally {
          In(i), Br.transition = a;
        }
      }
      return !1;
    }
    function Q1(e) {
      NS.push(e), ec || (ec = !0, $S(ou, function() {
        return Au(), null;
      }));
    }
    function W1() {
      if (Ho === null)
        return !1;
      var e = MS;
      MS = null;
      var t = Ho, a = Vp;
      if (Ho = null, Vp = Y, (Dt & ($r | Di)) !== yr)
        throw new Error("Cannot flush passive effects while already rendering.");
      US = !0, Om = !1, Td(a);
      var i = Dt;
      Dt |= Di, d1(t.current), o1(t, t.current, a, e);
      {
        var u = NS;
        NS = [];
        for (var s = 0; s < u.length; s++) {
          var f = u[s];
          qw(t, f);
        }
      }
      oo(), sR(t.current, !0), Dt = i, Oo(), Om ? t === Lm ? If++ : (If = 0, Lm = t) : If = 0, US = !1, Om = !1, Ed(t);
      {
        var p = t.current.stateNode;
        p.effectDuration = 0, p.passiveEffectDuration = 0;
      }
      return !0;
    }
    function lR(e) {
      return Yf !== null && Yf.has(e);
    }
    function q1(e) {
      Yf === null ? Yf = /* @__PURE__ */ new Set([e]) : Yf.add(e);
    }
    function G1(e) {
      Dm || (Dm = !0, LS = e);
    }
    var X1 = G1;
    function uR(e, t, a) {
      var i = Ks(a, t), u = a0(e, i, Qe), s = No(e, u, Qe), f = ba();
      s !== null && (vo(s, Qe, f), Ia(s, f));
    }
    function hn(e, t, a) {
      if (Vw(a), Qp(!1), e.tag === $) {
        uR(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === $) {
          uR(i, e, a);
          return;
        } else if (i.tag === le) {
          var u = i.type, s = i.stateNode;
          if (typeof u.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !lR(s)) {
            var f = Ks(a, e), p = lS(i, f, Qe), v = No(i, p, Qe), y = ba();
            v !== null && (vo(v, Qe, y), Ia(v, y));
            return;
          }
        }
        i = i.return;
      }
      S(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function K1(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var u = ba();
      Kc(e, a), lx(e), Ta === e && hu(gr, a) && (Sr === Ap || Sr === wm && Wc(gr) && wn() - OS < W0 ? tc(e, Y) : km = lt(km, a)), Ia(e, u);
    }
    function oR(e, t) {
      t === Hn && (t = L1(e));
      var a = ba(), i = Ba(e, t);
      i !== null && (vo(i, t, a), Ia(i, a));
    }
    function J1(e) {
      var t = e.memoizedState, a = Hn;
      t !== null && (a = t.retryLane), oR(e, a);
    }
    function Z1(e, t) {
      var a = Hn, i;
      switch (e.tag) {
        case ke:
          i = e.stateNode;
          var u = e.memoizedState;
          u !== null && (a = u.retryLane);
          break;
        case Vt:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), oR(e, a);
    }
    function ex(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : x1(e / 1960) * 1960;
    }
    function tx() {
      if (Bp > D1)
        throw Bp = 0, zS = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      If > O1 && (If = 0, Lm = null, S("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function nx() {
      Zi.flushLegacyContextWarning(), Zi.flushPendingUnsafeLifecycleWarnings();
    }
    function sR(e, t) {
      Gt(e), Am(e, Mr, C1), t && Am(e, gl, R1), Am(e, Mr, S1), t && Am(e, gl, E1), Cn();
    }
    function Am(e, t, a) {
      for (var i = e, u = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== u && i.child !== null && s !== ze ? i = i.child : ((i.flags & t) !== ze && a(i), i.sibling !== null ? i = i.sibling : i = u = i.return);
      }
    }
    var jm = null;
    function cR(e) {
      {
        if ((Dt & $r) !== yr || !(e.mode & St))
          return;
        var t = e.tag;
        if (t !== Z && t !== $ && t !== le && t !== pe && t !== $e && t !== dt && t !== Be)
          return;
        var a = Ke(e) || "ReactComponent";
        if (jm !== null) {
          if (jm.has(a))
            return;
          jm.add(a);
        } else
          jm = /* @__PURE__ */ new Set([a]);
        var i = Jn;
        try {
          Gt(e), S("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? Gt(e) : Cn();
        }
      }
    }
    var PS;
    {
      var rx = null;
      PS = function(e, t, a) {
        var i = gR(rx, t);
        try {
          return T0(e, t, a);
        } catch (s) {
          if (h_() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (Yh(), _C(), D0(e, t), gR(t, i), t.mode & _t && Bg(t), Ma(null, T0, null, e, t, a), sd()) {
            var u = cd();
            typeof u == "object" && u !== null && u._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var fR = !1, VS;
    VS = /* @__PURE__ */ new Set();
    function ax(e) {
      if (Gr && !W_())
        switch (e.tag) {
          case pe:
          case $e:
          case Be: {
            var t = On && Ke(On) || "Unknown", a = t;
            if (!VS.has(a)) {
              VS.add(a);
              var i = Ke(e) || "Unknown";
              S("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case le: {
            fR || (S("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), fR = !0);
            break;
          }
        }
    }
    function Ip(e, t) {
      if (wr) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          Qv(e, i, t);
        });
      }
    }
    var BS = {};
    function $S(e, t) {
      {
        var a = ul.current;
        return a !== null ? (a.push(t), BS) : vd(e, t);
      }
    }
    function dR(e) {
      if (e !== BS)
        return hd(e);
    }
    function pR() {
      return ul.current !== null;
    }
    function ix(e) {
      {
        if (e.mode & St) {
          if (!Y0())
            return;
        } else if (!w1() || Dt !== yr || e.tag !== pe && e.tag !== $e && e.tag !== Be)
          return;
        if (ul.current === null) {
          var t = Jn;
          try {
            Gt(e), S(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, Ke(e));
          } finally {
            t ? Gt(e) : Cn();
          }
        }
      }
    }
    function lx(e) {
      e.tag !== Do && Y0() && ul.current === null && S(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function Qp(e) {
      X0 = e;
    }
    var Oi = null, Qf = null, ux = function(e) {
      Oi = e;
    };
    function Wf(e) {
      {
        if (Oi === null)
          return e;
        var t = Oi(e);
        return t === void 0 ? e : t.current;
      }
    }
    function YS(e) {
      return Wf(e);
    }
    function IS(e) {
      {
        if (Oi === null)
          return e;
        var t = Oi(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = Wf(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: X,
                render: a
              };
              return e.displayName !== void 0 && (i.displayName = e.displayName), i;
            }
          }
          return e;
        }
        return t.current;
      }
    }
    function vR(e, t) {
      {
        if (Oi === null)
          return !1;
        var a = e.elementType, i = t.type, u = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case le: {
            typeof i == "function" && (u = !0);
            break;
          }
          case pe: {
            (typeof i == "function" || s === Je) && (u = !0);
            break;
          }
          case $e: {
            (s === X || s === Je) && (u = !0);
            break;
          }
          case dt:
          case Be: {
            (s === yt || s === Je) && (u = !0);
            break;
          }
          default:
            return !1;
        }
        if (u) {
          var f = Oi(a);
          if (f !== void 0 && f === Oi(i))
            return !0;
        }
        return !1;
      }
    }
    function hR(e) {
      {
        if (Oi === null || typeof WeakSet != "function")
          return;
        Qf === null && (Qf = /* @__PURE__ */ new WeakSet()), Qf.add(e);
      }
    }
    var ox = function(e, t) {
      {
        if (Oi === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        Au(), Uu(function() {
          QS(e.current, i, a);
        });
      }
    }, sx = function(e, t) {
      {
        if (e.context !== li)
          return;
        Au(), Uu(function() {
          Wp(t, e, null, null);
        });
      }
    };
    function QS(e, t, a) {
      {
        var i = e.alternate, u = e.child, s = e.sibling, f = e.tag, p = e.type, v = null;
        switch (f) {
          case pe:
          case Be:
          case le:
            v = p;
            break;
          case $e:
            v = p.render;
            break;
        }
        if (Oi === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var y = !1, g = !1;
        if (v !== null) {
          var x = Oi(v);
          x !== void 0 && (a.has(x) ? g = !0 : t.has(x) && (f === le ? g = !0 : y = !0));
        }
        if (Qf !== null && (Qf.has(e) || i !== null && Qf.has(i)) && (g = !0), g && (e._debugNeedsRemount = !0), g || y) {
          var _ = Ba(e, Qe);
          _ !== null && Er(_, e, Qe, Qt);
        }
        u !== null && !g && QS(u, t, a), s !== null && QS(s, t, a);
      }
    }
    var cx = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(u) {
          return u.current;
        }));
        return WS(e.current, i, a), a;
      }
    };
    function WS(e, t, a) {
      {
        var i = e.child, u = e.sibling, s = e.tag, f = e.type, p = null;
        switch (s) {
          case pe:
          case Be:
          case le:
            p = f;
            break;
          case $e:
            p = f.render;
            break;
        }
        var v = !1;
        p !== null && t.has(p) && (v = !0), v ? fx(e, a) : i !== null && WS(i, t, a), u !== null && WS(u, t, a);
      }
    }
    function fx(e, t) {
      {
        var a = dx(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case Q:
              t.add(i.stateNode);
              return;
            case q:
              t.add(i.stateNode.containerInfo);
              return;
            case $:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function dx(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === Q)
          i = !0, t.add(a.stateNode);
        else if (a.child !== null) {
          a.child.return = a, a = a.child;
          continue;
        }
        if (a === e)
          return i;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === e)
            return i;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
      return !1;
    }
    var qS;
    {
      qS = !1;
      try {
        var mR = Object.preventExtensions({});
      } catch {
        qS = !0;
      }
    }
    function px(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = ze, this.subtreeFlags = ze, this.deletions = null, this.lanes = Y, this.childLanes = Y, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !qS && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var ui = function(e, t, a, i) {
      return new px(e, t, a, i);
    };
    function GS(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function vx(e) {
      return typeof e == "function" && !GS(e) && e.defaultProps === void 0;
    }
    function hx(e) {
      if (typeof e == "function")
        return GS(e) ? le : pe;
      if (e != null) {
        var t = e.$$typeof;
        if (t === X)
          return $e;
        if (t === yt)
          return dt;
      }
      return Z;
    }
    function rc(e, t) {
      var a = e.alternate;
      a === null ? (a = ui(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = ze, a.subtreeFlags = ze, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & Fn, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case Z:
        case pe:
        case Be:
          a.type = Wf(e.type);
          break;
        case le:
          a.type = YS(e.type);
          break;
        case $e:
          a.type = IS(e.type);
          break;
      }
      return a;
    }
    function mx(e, t) {
      e.flags &= Fn | Un;
      var a = e.alternate;
      if (a === null)
        e.childLanes = Y, e.lanes = t, e.child = null, e.subtreeFlags = ze, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = ze, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function yx(e, t, a) {
      var i;
      return e === zh ? (i = St, t === !0 && (i |= rt, i |= Zt)) : i = Ue, wr && (i |= _t), ui($, null, null, i);
    }
    function XS(e, t, a, i, u, s) {
      var f = Z, p = e;
      if (typeof e == "function")
        GS(e) ? (f = le, p = YS(p)) : p = Wf(p);
      else if (typeof e == "string")
        f = Q;
      else
        e: switch (e) {
          case Qr:
            return Bo(a.children, u, s, t);
          case ci:
            f = ut, u |= rt, (u & St) !== Ue && (u |= Zt);
            break;
          case fi:
            return gx(a, u, s, t);
          case se:
            return Sx(a, u, s, t);
          case fe:
            return Ex(a, u, s, t);
          case bn:
            return yR(a, u, s, t);
          case on:
          case Ct:
          case pn:
          case Tr:
          case pt:
          default: {
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case zi:
                  f = ot;
                  break e;
                case T:
                  f = jt;
                  break e;
                case X:
                  f = $e, p = IS(p);
                  break e;
                case yt:
                  f = dt;
                  break e;
                case Je:
                  f = mn, p = null;
                  break e;
              }
            var v = "";
            {
              (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
              var y = i ? Ke(i) : null;
              y && (v += `

Check the render method of \`` + y + "`.");
            }
            throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + v));
          }
        }
      var g = ui(f, a, t, u);
      return g.elementType = e, g.type = p, g.lanes = s, g._debugOwner = i, g;
    }
    function KS(e, t, a) {
      var i = null;
      i = e._owner;
      var u = e.type, s = e.key, f = e.props, p = XS(u, s, f, i, t, a);
      return p._debugSource = e._source, p._debugOwner = e._owner, p;
    }
    function Bo(e, t, a, i) {
      var u = ui(Ce, e, i, t);
      return u.lanes = a, u;
    }
    function gx(e, t, a, i) {
      typeof e.id != "string" && S('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var u = ui(Lt, e, i, t | _t);
      return u.elementType = fi, u.lanes = a, u.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, u;
    }
    function Sx(e, t, a, i) {
      var u = ui(ke, e, i, t);
      return u.elementType = se, u.lanes = a, u;
    }
    function Ex(e, t, a, i) {
      var u = ui(Vt, e, i, t);
      return u.elementType = fe, u.lanes = a, u;
    }
    function yR(e, t, a, i) {
      var u = ui(Pe, e, i, t);
      u.elementType = bn, u.lanes = a;
      var s = {
        isHidden: !1
      };
      return u.stateNode = s, u;
    }
    function JS(e, t, a) {
      var i = ui(ie, e, null, t);
      return i.lanes = a, i;
    }
    function Cx() {
      var e = ui(Q, null, null, Ue);
      return e.elementType = "DELETED", e;
    }
    function Rx(e) {
      var t = ui(ln, null, null, Ue);
      return t.stateNode = e, t;
    }
    function ZS(e, t, a) {
      var i = e.children !== null ? e.children : [], u = ui(q, i, e.key, t);
      return u.lanes = a, u.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, u;
    }
    function gR(e, t) {
      return e === null && (e = ui(Z, null, null, Ue)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function Tx(e, t, a, i, u) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = zy, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = Hn, this.eventTimes = Xc(Y), this.expirationTimes = Xc(Qt), this.pendingLanes = Y, this.suspendedLanes = Y, this.pingedLanes = Y, this.expiredLanes = Y, this.mutableReadLanes = Y, this.finishedLanes = Y, this.entangledLanes = Y, this.entanglements = Xc(Y), this.identifierPrefix = i, this.onRecoverableError = u, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], f = 0; f < xd; f++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case zh:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case Do:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function SR(e, t, a, i, u, s, f, p, v, y) {
      var g = new Tx(e, t, a, p, v), x = yx(t, s);
      g.current = x, x.stateNode = g;
      {
        var _ = {
          element: i,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        x.memoizedState = _;
      }
      return dg(x), g;
    }
    var eE = "18.3.1";
    function bx(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return ca(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: va,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var tE, nE;
    tE = !1, nE = {};
    function ER(e) {
      if (!e)
        return li;
      var t = ro(e), a = l_(t);
      if (t.tag === le) {
        var i = t.type;
        if (Al(i))
          return WE(t, i, a);
      }
      return a;
    }
    function _x(e, t) {
      {
        var a = ro(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var u = Zr(a);
        if (u === null)
          return null;
        if (u.mode & rt) {
          var s = Ke(a) || "Component";
          if (!nE[s]) {
            nE[s] = !0;
            var f = Jn;
            try {
              Gt(u), a.mode & rt ? S("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : S("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              f ? Gt(f) : Cn();
            }
          }
        }
        return u.stateNode;
      }
    }
    function CR(e, t, a, i, u, s, f, p) {
      var v = !1, y = null;
      return SR(e, t, v, y, a, i, u, s, f);
    }
    function RR(e, t, a, i, u, s, f, p, v, y) {
      var g = !0, x = SR(a, i, g, e, u, s, f, p, v);
      x.context = ER(null);
      var _ = x.current, z = ba(), A = Po(_), P = Lu(z, A);
      return P.callback = t ?? null, No(_, P, A), N1(x, A, z), x;
    }
    function Wp(e, t, a, i) {
      gd(t, e);
      var u = t.current, s = ba(), f = Po(u);
      xc(f);
      var p = ER(a);
      t.context === null ? t.context = p : t.pendingContext = p, Gr && Jn !== null && !tE && (tE = !0, S(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, Ke(Jn) || "Unknown"));
      var v = Lu(s, f);
      v.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && S("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), v.callback = i);
      var y = No(u, v, f);
      return y !== null && (Er(y, u, f, s), Gh(y, u, f)), f;
    }
    function Fm(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case Q:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function wx(e) {
      switch (e.tag) {
        case $: {
          var t = e.stateNode;
          if (mu(t)) {
            var a = Bv(t);
            A1(t, a);
          }
          break;
        }
        case ke: {
          Uu(function() {
            var u = Ba(e, Qe);
            if (u !== null) {
              var s = ba();
              Er(u, e, Qe, s);
            }
          });
          var i = Qe;
          rE(e, i);
          break;
        }
      }
    }
    function TR(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = Md(a.retryLane, t));
    }
    function rE(e, t) {
      TR(e, t);
      var a = e.alternate;
      a && TR(a, t);
    }
    function xx(e) {
      if (e.tag === ke) {
        var t = po, a = Ba(e, t);
        if (a !== null) {
          var i = ba();
          Er(a, e, t, i);
        }
        rE(e, t);
      }
    }
    function kx(e) {
      if (e.tag === ke) {
        var t = Po(e), a = Ba(e, t);
        if (a !== null) {
          var i = ba();
          Er(a, e, t, i);
        }
        rE(e, t);
      }
    }
    function bR(e) {
      var t = ni(e);
      return t === null ? null : t.stateNode;
    }
    var _R = function(e) {
      return null;
    };
    function Dx(e) {
      return _R(e);
    }
    var wR = function(e) {
      return !1;
    };
    function Ox(e) {
      return wR(e);
    }
    var xR = null, kR = null, DR = null, OR = null, LR = null, NR = null, MR = null, zR = null, UR = null;
    {
      var AR = function(e, t, a) {
        var i = t[a], u = it(e) ? e.slice() : nt({}, e);
        return a + 1 === t.length ? (it(u) ? u.splice(i, 1) : delete u[i], u) : (u[i] = AR(e[i], t, a + 1), u);
      }, jR = function(e, t) {
        return AR(e, t, 0);
      }, FR = function(e, t, a, i) {
        var u = t[i], s = it(e) ? e.slice() : nt({}, e);
        if (i + 1 === t.length) {
          var f = a[i];
          s[f] = s[u], it(s) ? s.splice(u, 1) : delete s[u];
        } else
          s[u] = FR(
            // $FlowFixMe number or string is fine here
            e[u],
            t,
            a,
            i + 1
          );
        return s;
      }, HR = function(e, t, a) {
        if (t.length !== a.length) {
          je("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              je("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return FR(e, t, a, 0);
      }, PR = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var u = t[a], s = it(e) ? e.slice() : nt({}, e);
        return s[u] = PR(e[u], t, a + 1, i), s;
      }, VR = function(e, t, a) {
        return PR(e, t, 0, a);
      }, aE = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      xR = function(e, t, a, i) {
        var u = aE(e, t);
        if (u !== null) {
          var s = VR(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = nt({}, e.memoizedProps);
          var f = Ba(e, Qe);
          f !== null && Er(f, e, Qe, Qt);
        }
      }, kR = function(e, t, a) {
        var i = aE(e, t);
        if (i !== null) {
          var u = jR(i.memoizedState, a);
          i.memoizedState = u, i.baseState = u, e.memoizedProps = nt({}, e.memoizedProps);
          var s = Ba(e, Qe);
          s !== null && Er(s, e, Qe, Qt);
        }
      }, DR = function(e, t, a, i) {
        var u = aE(e, t);
        if (u !== null) {
          var s = HR(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = nt({}, e.memoizedProps);
          var f = Ba(e, Qe);
          f !== null && Er(f, e, Qe, Qt);
        }
      }, OR = function(e, t, a) {
        e.pendingProps = VR(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Ba(e, Qe);
        i !== null && Er(i, e, Qe, Qt);
      }, LR = function(e, t) {
        e.pendingProps = jR(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = Ba(e, Qe);
        a !== null && Er(a, e, Qe, Qt);
      }, NR = function(e, t, a) {
        e.pendingProps = HR(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Ba(e, Qe);
        i !== null && Er(i, e, Qe, Qt);
      }, MR = function(e) {
        var t = Ba(e, Qe);
        t !== null && Er(t, e, Qe, Qt);
      }, zR = function(e) {
        _R = e;
      }, UR = function(e) {
        wR = e;
      };
    }
    function Lx(e) {
      var t = Zr(e);
      return t === null ? null : t.stateNode;
    }
    function Nx(e) {
      return null;
    }
    function Mx() {
      return Jn;
    }
    function zx(e) {
      var t = e.findFiberByHostInstance, a = We.ReactCurrentDispatcher;
      return yd({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: xR,
        overrideHookStateDeletePath: kR,
        overrideHookStateRenamePath: DR,
        overrideProps: OR,
        overridePropsDeletePath: LR,
        overridePropsRenamePath: NR,
        setErrorHandler: zR,
        setSuspenseHandler: UR,
        scheduleUpdate: MR,
        currentDispatcherRef: a,
        findHostInstanceByFiber: Lx,
        findFiberByHostInstance: t || Nx,
        // React Refresh
        findHostInstancesForRefresh: cx,
        scheduleRefresh: ox,
        scheduleRoot: sx,
        setRefreshHandler: ux,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: Mx,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: eE
      });
    }
    var BR = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function iE(e) {
      this._internalRoot = e;
    }
    Hm.prototype.render = iE.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? S("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : Pm(arguments[1]) ? S("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && S("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== zn) {
          var i = bR(t.current);
          i && i.parentNode !== a && S("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      Wp(e, t, null, null);
    }, Hm.prototype.unmount = iE.prototype.unmount = function() {
      typeof arguments[0] == "function" && S("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        eR() && S("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Uu(function() {
          Wp(null, e, null, null);
        }), BE(t);
      }
    };
    function Ux(e, t) {
      if (!Pm(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      $R(e);
      var a = !1, i = !1, u = "", s = BR;
      t != null && (t.hydrate ? je("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === ur && S(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var f = CR(e, zh, null, a, i, u, s);
      xh(f.current, e);
      var p = e.nodeType === zn ? e.parentNode : e;
      return Zd(p), new iE(f);
    }
    function Hm(e) {
      this._internalRoot = e;
    }
    function Ax(e) {
      e && Zv(e);
    }
    Hm.prototype.unstable_scheduleHydration = Ax;
    function jx(e, t, a) {
      if (!Pm(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      $R(e), t === void 0 && S("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, u = a != null && a.hydratedSources || null, s = !1, f = !1, p = "", v = BR;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (p = a.identifierPrefix), a.onRecoverableError !== void 0 && (v = a.onRecoverableError));
      var y = RR(t, null, e, zh, i, s, f, p, v);
      if (xh(y.current, e), Zd(e), u)
        for (var g = 0; g < u.length; g++) {
          var x = u[g];
          V_(y, x);
        }
      return new Hm(y);
    }
    function Pm(e) {
      return !!(e && (e.nodeType === Xr || e.nodeType === $i || e.nodeType === Ko));
    }
    function qp(e) {
      return !!(e && (e.nodeType === Xr || e.nodeType === $i || e.nodeType === Ko || e.nodeType === zn && e.nodeValue === " react-mount-point-unstable "));
    }
    function $R(e) {
      e.nodeType === Xr && e.tagName && e.tagName.toUpperCase() === "BODY" && S("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), cp(e) && (e._reactRootContainer ? S("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : S("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var Fx = We.ReactCurrentOwner, YR;
    YR = function(e) {
      if (e._reactRootContainer && e.nodeType !== zn) {
        var t = bR(e._reactRootContainer.current);
        t && t.parentNode !== e && S("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = lE(e), u = !!(i && xo(i));
      u && !a && S("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === Xr && e.tagName && e.tagName.toUpperCase() === "BODY" && S("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function lE(e) {
      return e ? e.nodeType === $i ? e.documentElement : e.firstChild : null;
    }
    function IR() {
    }
    function Hx(e, t, a, i, u) {
      if (u) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var _ = Fm(f);
            s.call(_);
          };
        }
        var f = RR(
          t,
          i,
          e,
          Do,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          IR
        );
        e._reactRootContainer = f, xh(f.current, e);
        var p = e.nodeType === zn ? e.parentNode : e;
        return Zd(p), Uu(), f;
      } else {
        for (var v; v = e.lastChild; )
          e.removeChild(v);
        if (typeof i == "function") {
          var y = i;
          i = function() {
            var _ = Fm(g);
            y.call(_);
          };
        }
        var g = CR(
          e,
          Do,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          IR
        );
        e._reactRootContainer = g, xh(g.current, e);
        var x = e.nodeType === zn ? e.parentNode : e;
        return Zd(x), Uu(function() {
          Wp(t, g, a, i);
        }), g;
      }
    }
    function Px(e, t) {
      e !== null && typeof e != "function" && S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function Vm(e, t, a, i, u) {
      YR(a), Px(u === void 0 ? null : u, "render");
      var s = a._reactRootContainer, f;
      if (!s)
        f = Hx(a, t, e, u, i);
      else {
        if (f = s, typeof u == "function") {
          var p = u;
          u = function() {
            var v = Fm(f);
            p.call(v);
          };
        }
        Wp(t, f, e, u);
      }
      return Fm(f);
    }
    var QR = !1;
    function Vx(e) {
      {
        QR || (QR = !0, S("findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node"));
        var t = Fx.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || S("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", kt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === Xr ? e : _x(e, "findDOMNode");
    }
    function Bx(e, t, a) {
      if (S("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !qp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = cp(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return Vm(null, e, t, !0, a);
    }
    function $x(e, t, a) {
      if (S("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !qp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = cp(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return Vm(null, e, t, !1, a);
    }
    function Yx(e, t, a, i) {
      if (S("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !qp(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !iu(e))
        throw new Error("parentComponent must be a valid React Component");
      return Vm(e, t, a, !1, i);
    }
    var WR = !1;
    function Ix(e) {
      if (WR || (WR = !0, S("unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot")), !qp(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = cp(e) && e._reactRootContainer === void 0;
        t && S("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = lE(e), i = a && !xo(a);
          i && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return Uu(function() {
          Vm(null, null, e, !1, function() {
            e._reactRootContainer = null, BE(e);
          });
        }), !0;
      } else {
        {
          var u = lE(e), s = !!(u && xo(u)), f = e.nodeType === Xr && qp(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", f ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    iy(wx), jd(xx), ly(kx), tf(ga), Gv(Wv), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && S("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), ls(WT), xv(jS, j1, Uu);
    function Qx(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Pm(t))
        throw new Error("Target container is not a DOM element.");
      return bx(e, t, null, a);
    }
    function Wx(e, t, a, i) {
      return Yx(e, t, a, i);
    }
    var uE = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [xo, bf, kh, ud, Zu, jS]
    };
    function qx(e, t) {
      return uE.usingClientEntryPoint || S('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), Ux(e, t);
    }
    function Gx(e, t, a) {
      return uE.usingClientEntryPoint || S('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), jx(e, t, a);
    }
    function Xx(e) {
      return eR() && S("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Uu(e);
    }
    var Kx = zx({
      findFiberByHostInstance: Bs,
      bundleType: 1,
      version: eE,
      rendererPackageName: "react-dom"
    });
    if (!Kx && qn && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var qR = window.location.protocol;
      /^(https?|file):$/.test(qR) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (qR === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    Wa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = uE, Wa.createPortal = Qx, Wa.createRoot = qx, Wa.findDOMNode = Vx, Wa.flushSync = Xx, Wa.hydrate = Bx, Wa.hydrateRoot = Gx, Wa.render = $x, Wa.unmountComponentAtNode = Ix, Wa.unstable_batchedUpdates = jS, Wa.unstable_renderSubtreeIntoContainer = Wx, Wa.version = eE, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }(), Wa;
}
var sT = {};
function cT() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (sT.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(cT);
    } catch (B) {
      console.error(B);
    }
  }
}
sT.NODE_ENV === "production" ? (cT(), dE.exports = sk()) : dE.exports = ck();
var fk = dE.exports, pE, dk = {}, $m = fk;
if (dk.NODE_ENV === "production")
  pE = $m.createRoot, $m.hydrateRoot;
else {
  var aT = $m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  pE = function(B, G) {
    aT.usingClientEntryPoint = !0;
    try {
      return $m.createRoot(B, G);
    } finally {
      aT.usingClientEntryPoint = !1;
    }
  };
}
const pk = (B) => {
  if (!B.designOptions || B.designOptions !== "custom_design") return;
  const G = JSON.parse(B.customDesigns);
  document.documentElement.style.setProperty("--barn2-bundles-bundle-text-color", G.bundleTextColor), document.documentElement.style.setProperty("--barn2-bundles-highlighted-text-color", G.highlightedTextColor), document.documentElement.style.setProperty("--barn2-bundles-bundle-border-color", G.bundleBorderColor), document.documentElement.style.setProperty("--barn2-bundles-highlighted-border-color", G.highlightedBorderColor), document.documentElement.style.setProperty("--barn2-bundles-bundle-badge-color", G.bundleBadgeColor), document.documentElement.style.setProperty("--barn2-bundles-badge-text-color", G.badgeTextColor), document.documentElement.style.setProperty("--barn2-bundles-highlighted-color", G.highlightedColor), document.documentElement.style.setProperty("--barn2-bundles-table-color", G.tableColor), document.documentElement.style.setProperty("--barn2-bundles-header-text-color", G.headerTextColor), document.documentElement.style.setProperty("--barn2-bundles-background-color", G.backgroundColor), document.documentElement.style.setProperty("--barn2-bundles-text-color", G.textColor), document.documentElement.style.setProperty("--barn2-bundles-label-color", G.labelColor), document.documentElement.style.setProperty("--barn2-bundles-label-text-color", G.lebelTextColor), document.documentElement.style.setProperty("--barn2-bundles-cart-notice-bg-color", G.cartNoticeBackgroundColor), document.documentElement.style.setProperty("--barn2-bundles-cart-notice-text-color", G.cartNoticeTextColor), document.documentElement.style.setProperty("--barn2-bundles-badge-color", G.badgeColor), document.documentElement.style.setProperty("--barn2-bundles-border-color", G.borderColor);
  let L = "0";
  switch (G.cornerRadius) {
    case "slightlyRounded":
      L = "8px";
      break;
    case "fullyRounded":
      L = "15px";
      break;
    case "square":
    default:
      L = "0";
  }
  document.documentElement.style.setProperty("--barn2-bundles-corner-radius", L);
}, fT = () => {
  const B = document.querySelector(".product-form__input.product-form__quantity");
  B && (B.style.display = "block");
  const G = document.querySelector(".product__info-container variant-selects, .product__info-wrapper variant-selects, .product-page-section variant-selects");
  G && (G.style.display = "block");
};
var dT = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(B) {
  (function() {
    var G = function() {
      function L() {
      }
      L.prototype = /* @__PURE__ */ Object.create(null);
      function We(Z, $) {
        for (var q = $.length, Q = 0; Q < q; ++Q)
          pe(Z, $[Q]);
      }
      var et = {}.hasOwnProperty;
      function Ne(Z, $) {
        Z[$] = !0;
      }
      function je(Z, $) {
        if ($.toString !== Object.prototype.toString && !$.toString.toString().includes("[native code]")) {
          Z[$.toString()] = !0;
          return;
        }
        for (var q in $)
          et.call($, q) && (Z[q] = !!$[q]);
      }
      var S = /\s+/;
      function Ie(Z, $) {
        for (var q = $.split(S), Q = q.length, ie = 0; ie < Q; ++ie)
          Z[q[ie]] = !0;
      }
      function pe(Z, $) {
        if ($) {
          var q = typeof $;
          q === "string" ? Ie(Z, $) : Array.isArray($) ? We(Z, $) : q === "object" ? je(Z, $) : q === "number" && Ne(Z, $);
        }
      }
      function le() {
        for (var Z = arguments.length, $ = Array(Z), q = 0; q < Z; q++)
          $[q] = arguments[q];
        var Q = new L();
        We(Q, $);
        var ie = [];
        for (var Ce in Q)
          Q[Ce] && ie.push(Ce);
        return ie.join(" ");
      }
      return le;
    }();
    B.exports ? (G.default = G, B.exports = G) : window.classNames = G;
  })();
})(dT);
var vk = dT.exports;
const iT = /* @__PURE__ */ ek(vk);
function hk({
  bundleData: B,
  isInEditor: G,
  currentVariant: L,
  storeDetails: We,
  productCartAddedEvent: et
}) {
  var ht, at, W, Ee;
  const [Ne, je] = Wt.useState(null), [S, Ie] = Wt.useState([]), [pe, le] = Wt.useState(), [Z, $] = Wt.useState([]), [q, Q] = Wt.useState(((at = (ht = window.b2ProductData) == null ? void 0 : ht.product) == null ? void 0 : at.options) || []), [ie, Ce] = Wt.useState(((Ee = (W = window.b2ProductData) == null ? void 0 : W.product) == null ? void 0 : Ee.variants) || []), [ut, jt] = Wt.useState([]), ot = (F) => {
    const R = typeof F == "number" ? F % 1 === 0 ? F.toString() : F.toFixed(2) : F;
    return We.moneyFormat.replace("{{amount}}", R);
  }, $e = (F) => {
    let R = "";
    return F.discount_type === "amount" ? R = /* @__PURE__ */ He.jsxs("span", { children: [
      "Save ",
      ot(F.discount)
    ] }) : R = /* @__PURE__ */ He.jsxs("span", { children: [
      "Save ",
      F.discount,
      "%"
    ] }), F.discount || (R = /* @__PURE__ */ He.jsx("span", { children: "Regular price" })), R;
  }, Lt = (F) => (G ? window.b2ProductData.product.price : L.price) / 100, ke = (F, R = "discounted") => {
    let j = 0;
    if (Ne && ut && F.id === (Ne == null ? void 0 : Ne.id) ? j = ut.reduce((Se, Me) => Se + Me.price / 100, 0) : j = Lt() * F.quantity, R === "regular")
      return dt(j);
    let ye = j;
    if (F.discount_type === "percentage" && F.discount) {
      const Te = j * F.discount / 100;
      ye = j - Te;
    } else F.discount_type === "amount" && F.discount && (ye = j - F.discount);
    return dt(ye);
  }, dt = (F) => {
    const R = Number(F), j = Number(R.toFixed(2));
    return ot(j);
  }, Be = (F) => {
    const R = document.querySelector('.product-form__input.product-form__quantity input[type="number"]');
    R && (R.value = F, R.dispatchEvent(new Event("change", { bubbles: !0 })));
  }, mn = (F) => Ne ? Ne.id === F.id : !1, Nt = (F, R) => {
    if (!(ut != null && ut[F])) return "";
    const j = ut[F].options;
    return (j == null ? void 0 : j[R]) || "";
  }, ln = () => {
    if (Ne === null) return;
    const F = {
      available: L.available,
      id: L.id,
      options: L.options,
      price: L.price
    }, R = Array(Ne.quantity).fill(null).map(() => ({ ...F }));
    jt(R);
  }, Vt = (F) => {
    const R = new URL(window.location.href);
    R.searchParams.set("variant", F), window.history.replaceState({}, "", R.toString()), window.dispatchEvent(new Event("popstate"));
    const j = document.querySelector(".product-variant-id");
    j && (j.value = F, j.dispatchEvent(new Event("change", { bubbles: !0 })));
  }, Et = (F, R, j) => {
    jt((ye) => {
      const Te = ye.map((Me, st) => st === R ? {
        ...Me,
        options: Me.options.map(
          (Ye, mt) => mt === j ? F.target.value : Ye
        )
      } : Me), Se = ie.find((Me) => Me.options.every(
        (st, Ye) => st === Te[R].options[Ye]
      ));
      return Vt(Se.id), Te[R].id = Se.id, Te[R].available = Se.available, Te[R].price = Se.price, Te;
    });
  };
  Wt.useEffect(() => {
    const F = S.find((R) => R.highlighted);
    F && (je(F), Be(F.quantity));
  }, [S]), Wt.useEffect(() => {
    ln();
  }, [Ne, L]), Wt.useEffect(() => {
    Ne !== null && (Be(Ne.quantity), Pe(Ne));
  }, [Ne]), Wt.useEffect(() => {
    const F = ut.every(
      (Te, Se, Me) => Te.id === Me[0].id
    ), R = document.querySelector('[type="submit"]'), j = document.querySelector(".shopify-payment-button");
    F ? (Be(ut.length), R.classList.remove("b2-different-variants-selected"), j && (j.style.display = "")) : (Be(1), R.classList.add("b2-different-variants-selected"), j && (j.style.display = "none")), et && (async (Te) => {
      if (!R.classList.contains("b2-different-variants-selected"))
        return;
      const Se = document.querySelector(".product-variant-id");
      let Me = !1;
      const Ye = ut.filter((ct) => ct.id === parseInt(Se.value) && !Me ? (Me = !0, !1) : !0).filter((ct) => ct.available).map((ct) => ct.id).reduce((ct, sn) => (ct[sn] = (ct[sn] || 0) + 1, ct), {}), mt = {
        items: Object.entries(Ye).map(([ct, sn]) => ({
          id: parseInt(ct),
          quantity: sn,
          properties: {
            _barn2_discount_campaign_name: B.name,
            _barn2_discount_bundle_type: "volume_discount",
            _barn2_discount_quantity: Ne.quantity,
            _barn2_discount_value: Ne.discount,
            _barn2_discount_type: Ne.discount_type
          }
        }))
      };
      try {
        await fetch("/cart/add.js", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(mt)
        });
      } catch {
      }
    })();
  }, [ut, et]), Wt.useEffect(() => {
    Ie(JSON.parse(B.volumeBundles || [])), $(JSON.parse(B.previewOptions || {})), le(B.layout);
  }, []);
  const Pe = (F) => {
    const R = document.querySelector("product-form.product-form form");
    if (!R)
      return;
    const j = (ye, Te) => {
      let Se = R.querySelector(`input[name="${ye}"]`);
      Se ? Se.value = Te : (Se = document.createElement("input"), Se.type = "hidden", Se.name = ye, Se.value = Te, R.appendChild(Se));
    };
    j(
      "properties[_barn2_discount_campaign_name]",
      B.name || ""
    ), j(
      "properties[_barn2_discount_bundle_type]",
      "volume_discount"
    ), j(
      "properties[_barn2_discount_quantity]",
      F.quantity || 0
    ), j(
      "properties[_barn2_discount_value]",
      F.discount || 0
    ), j(
      "properties[_barn2_discount_type]",
      F.discount_type || "percentage"
    );
  };
  return /* @__PURE__ */ He.jsxs("div", { className: "barn2-discount-bundles", children: [
    B.previewEnabled && /* @__PURE__ */ He.jsxs(He.Fragment, { children: [
      (Z == null ? void 0 : Z.title) && /* @__PURE__ */ He.jsx("div", { className: "barn2-db-main-title", children: /* @__PURE__ */ He.jsx("span", { children: Z == null ? void 0 : Z.title }) }),
      (Z == null ? void 0 : Z.description) && /* @__PURE__ */ He.jsx("div", { className: "barn2-db-main-description", children: /* @__PURE__ */ He.jsx("span", { children: Z == null ? void 0 : Z.description }) })
    ] }),
    /* @__PURE__ */ He.jsx(
      "div",
      {
        className: iT(
          "barn2-discount-bundles-list",
          `barn2-dbs-layout-${pe}`,
          `discount-columns-${S.length}`
        ),
        children: S.map((F, R) => /* @__PURE__ */ He.jsxs(
          "div",
          {
            className: iT(
              "barn2-discount-bundle",
              {
                highlighted: F.highlighted,
                selected: mn(F)
              }
            ),
            onClick: () => {
              je(F), Be(F.quantity);
            },
            children: [
              F.label.length > 0 && /* @__PURE__ */ He.jsx("span", { className: "barn2-highlighted-text", children: F.label }),
              /* @__PURE__ */ He.jsxs("div", { className: "barn2-dbs-top", children: [
                /* @__PURE__ */ He.jsx("span", { className: "barn2-input-circle" }),
                /* @__PURE__ */ He.jsxs("div", { className: "barn2-dbs-text-block-wrapper", children: [
                  /* @__PURE__ */ He.jsxs("div", { className: "barn2-dbs-text-block", children: [
                    /* @__PURE__ */ He.jsx("h4", { className: "barn2-dbs-bundle-title", children: F.description }),
                    Z.amountSaved && /* @__PURE__ */ He.jsx("p", { children: $e(F) })
                  ] }),
                  B.layout === "horizontal" && mn(F) && Mt()
                ] })
              ] }),
              /* @__PURE__ */ He.jsxs("div", { className: "barn2-dbs-bottom", children: [
                /* @__PURE__ */ He.jsx("span", { className: "barn2-dbs-price", children: ke(F, "discounted") }),
                Z.showOriginalPrice && F.discount && /* @__PURE__ */ He.jsx("span", { className: "barn2-dbs-regular-price", children: ke(F, "regular") })
              ] })
            ]
          },
          R
        ))
      }
    ),
    B.layout === "vertical" && /* @__PURE__ */ He.jsx("div", { className: "barn2-db-bars-wrapper", children: Mt() })
  ] });
  function Mt() {
    return /* @__PURE__ */ He.jsx("div", { className: "barn2-db-bars", children: Array.from({ length: Ne == null ? void 0 : Ne.quantity }).map((F, R) => {
      var j, ye;
      return /* @__PURE__ */ He.jsxs("div", { children: [
        /* @__PURE__ */ He.jsxs("div", { className: "barn2-db-bar", "data-variant-available": (j = ut[R]) == null ? void 0 : j.available, children: [
          /* @__PURE__ */ He.jsx("span", { className: "barn2-db-bar-number", children: R + 1 }),
          /* @__PURE__ */ He.jsx("div", { className: `barn2-dbs-select-variants barn2-dbs-variants-number-${q.length}`, children: q.map((Te, Se) => /* @__PURE__ */ He.jsx("div", { className: "barn2-dbs-variant", children: /* @__PURE__ */ He.jsx(
            "select",
            {
              value: Nt(R, Se),
              onChange: (Me) => {
                Et(Me, R, Se);
              },
              children: Te.values.map((Me, st) => /* @__PURE__ */ He.jsx("option", { value: Me, children: Me }, st))
            }
          ) }, Se)) })
        ] }),
        !((ye = ut[R]) != null && ye.available) && /* @__PURE__ */ He.jsx("p", { className: "barn2-dbs-stock-unavailable", children: "Sorry, this is currently unavailable." })
      ] }, R);
    }) });
  }
}
function mk({
  bundleData: B,
  isInEditor: G,
  currentVariant: L,
  storeDetails: We
}) {
  const [et, Ne] = Wt.useState([]), [je, S] = Wt.useState([]);
  Wt.useEffect(() => {
    Ne(JSON.parse(B.pricingTiers || [])), S(JSON.parse(B.previewOptions || {})), B && $(), fT();
  }, []);
  const Ie = (q) => {
    let Q;
    return q.discount_type === "percentage" ? Q = q.discount + "% off" : Q = Z(q.discount) + " off", /* @__PURE__ */ He.jsx("span", { className: "b2-pricing-tier-discount", children: Q });
  }, pe = () => (G ? window.b2ProductData.product.price : L.price) / 100, le = (q) => {
    let Q = pe();
    if (q.discount_type === "percentage" && q.discount) {
      const ie = pe() * q.discount / 100;
      Q = pe() - ie;
    } else q.discount_type === "amount" && q.discount && (Q = pe() - q.discount);
    return Math.max(0, Q.toFixed(2));
  }, Z = (q) => {
    const Q = typeof q == "number" ? q % 1 === 0 ? q.toString() : q.toFixed(2) : q;
    return We.moneyFormat.replace("{{amount}}", Q);
  }, $ = () => {
    const q = document.querySelector("product-form.product-form form");
    if (!q)
      return;
    const Q = (ie, Ce) => {
      let ut = q.querySelector(`input[name="${ie}"]`);
      ut ? ut.value = Ce : (ut = document.createElement("input"), ut.type = "hidden", ut.name = ie, ut.value = Ce, q.appendChild(ut));
    };
    Q(
      "properties[_barn2_discount_campaign_name]",
      B.name || ""
    ), Q(
      "properties[_barn2_discount_bundle_type]",
      "bulk_pricing"
    ), Q(
      "properties[_barn2_discount_pricing_tiers]",
      B.pricingTiers || ""
    ), Q(
      "properties[_barn2_discount_applies_to]",
      B.discountCalculation || "individual_products"
    );
  };
  return /* @__PURE__ */ He.jsxs("div", { className: "barn2-bulk-table-wrapper", children: [
    B.previewEnabled && /* @__PURE__ */ He.jsxs(He.Fragment, { children: [
      (je == null ? void 0 : je.title) && /* @__PURE__ */ He.jsx("div", { className: "barn2-db-main-title", children: /* @__PURE__ */ He.jsx("span", { children: je == null ? void 0 : je.title }) }),
      (je == null ? void 0 : je.description) && /* @__PURE__ */ He.jsx("div", { className: "barn2-db-main-description", children: /* @__PURE__ */ He.jsx("span", { children: je == null ? void 0 : je.description }) })
    ] }),
    /* @__PURE__ */ He.jsx("div", { className: "barn2-bulk-table-container", children: /* @__PURE__ */ He.jsxs("table", { className: "barn2-bulk-table", children: [
      /* @__PURE__ */ He.jsx("thead", { children: /* @__PURE__ */ He.jsxs("tr", { children: [
        /* @__PURE__ */ He.jsx("th", { children: "Quantity" }),
        /* @__PURE__ */ He.jsx("th", { children: "Discount" }),
        /* @__PURE__ */ He.jsx("th", { children: "Price per item" })
      ] }) }),
      /* @__PURE__ */ He.jsx("tbody", { children: et.length > 0 && et.map((q, Q) => /* @__PURE__ */ He.jsxs("tr", { children: [
        /* @__PURE__ */ He.jsxs("td", { children: [
          q.min_quantity,
          "-",
          q.max_quantity
        ] }),
        /* @__PURE__ */ He.jsx("td", { children: /* @__PURE__ */ He.jsx("span", { className: "discount-pill", children: Ie(q) }) }),
        /* @__PURE__ */ He.jsx("td", { children: Z(le(q)) })
      ] }, Q)) })
    ] }) })
  ] });
}
function yk({ bundleData: B, isInEditor: G, storeDetails: L }) {
  const [We, et] = Wt.useState(null), [Ne, je] = Wt.useState(!1), S = () => {
    var $, q;
    const Z = ((q = ($ = window.b2ProductData) == null ? void 0 : $.product) == null ? void 0 : q.variants) || [];
    return Z.length > 0 ? Z[0] : 0;
  }, Ie = (Z) => {
    var Q, ie;
    const q = (((ie = (Q = window.b2ProductData) == null ? void 0 : Q.product) == null ? void 0 : ie.variants) || []).find((Ce) => Ce.id === Number(Z));
    q && et(q);
  }, pe = () => {
    const Z = document.querySelector(".product-form__input.product-form__quantity");
    Z && (Z.style.display = "none");
  }, le = () => {
    const Z = document.querySelector(".product__info-container variant-selects, .product__info-wrapper variant-selects, .product-page-section variant-selects");
    Z && (Z.style.display = "none");
  };
  if (Wt.useEffect(() => {
    const $ = new URLSearchParams(window.location.search).get("variant");
    $ ? Ie($) : et(S());
    const q = new MutationObserver((ie) => {
      ie.forEach((Ce) => {
        if (Ce.type === "attributes" || Ce.type === "childList") {
          const jt = new URLSearchParams(window.location.search).get("variant");
          jt && Ie(jt);
        }
      });
    }), Q = document.querySelector("form[action*='/cart/add']");
    return Q && q.observe(Q, { attributes: !0, childList: !0, subtree: !0 }), () => {
      q.disconnect();
    };
  }, []), Wt.useEffect(() => {
    const Z = new MutationObserver((q) => {
      q.forEach((Q) => {
        var Ce;
        Q.target.closest('form[action*="/cart/add"]') && Q.type === "attributes" && Q.attributeName === "class" && !Q.target.classList.contains("loading") && (Ce = Q.oldValue) != null && Ce.includes("loading") && je(!0);
      });
    }), $ = document.querySelector('form[action*="/cart/add"] button[type="submit"]');
    return $ && Z.observe($, {
      attributes: !0,
      attributeOldValue: !0
    }), () => {
      Z.disconnect();
    };
  }, []), Wt.useEffect(() => {
    pk(B), B.type === "volume_bundle" && (pe(), le());
  }, []), We !== null) {
    if (We !== null && B.type === "volume_bundle")
      return /* @__PURE__ */ He.jsx(
        hk,
        {
          bundleData: B,
          isInEditor: G,
          currentVariant: We,
          storeDetails: L,
          productCartAddedEvent: Ne
        }
      );
    if (We !== null && B.type === "bulk_pricing" && B.previewEnabled === !0)
      return /* @__PURE__ */ He.jsx(
        mk,
        {
          bundleData: B,
          isInEditor: G,
          currentVariant: We,
          storeDetails: L
        }
      );
  }
}
function gk() {
  var Z, $, q, Q;
  const [B, G] = Wt.useState((q = ($ = (Z = window == null ? void 0 : window.ShopifyAnalytics) == null ? void 0 : Z.meta) == null ? void 0 : $.product) == null ? void 0 : q.id), [L, We] = Wt.useState(null), [et, Ne] = Wt.useState(((Q = window == null ? void 0 : window.b2ProductData) == null ? void 0 : Q.isDesignMode) || !1), [je, S] = Wt.useState({}), [Ie, pe] = Wt.useState(!1), le = async (ie) => {
    try {
      return await (await fetch("/apps/barn2-bundles-bulk-discounts/discountbundle", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          productId: ie,
          isInEditor: et
        })
      })).json();
    } catch {
      return pe(!0), null;
    }
  };
  return Wt.useEffect(() => {
    (async () => {
      try {
        const Ce = await le(B);
        if ((Ce == null ? void 0 : Ce.success) === !1) {
          pe(!0);
          return;
        } else
          We(Ce == null ? void 0 : Ce.eligibleProductBundle), S(Ce == null ? void 0 : Ce.store);
      } catch {
      }
    })();
  }, [B, et]), Wt.useEffect(() => {
    Ie && fT();
  }, [Ie]), L && /* @__PURE__ */ He.jsx(
    yk,
    {
      bundleData: L,
      isInEditor: et,
      storeDetails: je,
      unHideQuantityVariantBlocks: Ie
    }
  );
}
const lT = (B) => {
  pE(B).render(/* @__PURE__ */ He.jsx(gk, {}));
}, uT = document.getElementById("barn2_discounts_block");
if (uT)
  lT(uT);
else {
  const B = document.querySelector("product-form.product-form");
  if (B) {
    const G = B.querySelector("form");
    if (G) {
      const L = document.createElement("div");
      L.id = "barn2_discounts", L.classList.add("barn2_discounts"), G.parentNode.insertBefore(L, G), lT(L);
    }
  }
}
