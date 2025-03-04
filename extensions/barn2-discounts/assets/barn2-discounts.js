function Xb(X) {
  return X && X.__esModule && Object.prototype.hasOwnProperty.call(X, "default") ? X.default : X;
}
var cE = { exports: {} }, qp = {}, fE = { exports: {} }, Rt = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var K0;
function Zb() {
  if (K0) return Rt;
  K0 = 1;
  var X = Symbol.for("react.element"), oe = Symbol.for("react.portal"), A = Symbol.for("react.fragment"), Xe = Symbol.for("react.strict_mode"), gt = Symbol.for("react.profiler"), ft = Symbol.for("react.provider"), lt = Symbol.for("react.context"), S = Symbol.for("react.forward_ref"), Ze = Symbol.for("react.suspense"), Se = Symbol.for("react.memo"), ne = Symbol.for("react.lazy"), se = Symbol.iterator;
  function B(b) {
    return b === null || typeof b != "object" ? null : (b = se && b[se] || b["@@iterator"], typeof b == "function" ? b : null);
  }
  var ee = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, G = Object.assign, de = {};
  function Ge(b, Y, Oe) {
    this.props = b, this.context = Y, this.refs = de, this.updater = Oe || ee;
  }
  Ge.prototype.isReactComponent = {}, Ge.prototype.setState = function(b, Y) {
    if (typeof b != "object" && typeof b != "function" && b != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, b, Y, "setState");
  }, Ge.prototype.forceUpdate = function(b) {
    this.updater.enqueueForceUpdate(this, b, "forceUpdate");
  };
  function Hn() {
  }
  Hn.prototype = Ge.prototype;
  function rn(b, Y, Oe) {
    this.props = b, this.context = Y, this.refs = de, this.updater = Oe || ee;
  }
  var ut = rn.prototype = new Hn();
  ut.constructor = rn, G(ut, Ge.prototype), ut.isPureReactComponent = !0;
  var Ue = Array.isArray, kt = Object.prototype.hasOwnProperty, xe = { current: null }, dt = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Pe(b, Y, Oe) {
    var Ve, $e = {}, it = null, Tt = null;
    if (Y != null) for (Ve in Y.ref !== void 0 && (Tt = Y.ref), Y.key !== void 0 && (it = "" + Y.key), Y) kt.call(Y, Ve) && !dt.hasOwnProperty(Ve) && ($e[Ve] = Y[Ve]);
    var Qe = arguments.length - 2;
    if (Qe === 1) $e.children = Oe;
    else if (1 < Qe) {
      for (var Et = Array(Qe), Pt = 0; Pt < Qe; Pt++) Et[Pt] = arguments[Pt + 2];
      $e.children = Et;
    }
    if (b && b.defaultProps) for (Ve in Qe = b.defaultProps, Qe) $e[Ve] === void 0 && ($e[Ve] = Qe[Ve]);
    return { $$typeof: X, type: b, key: it, ref: Tt, props: $e, _owner: xe.current };
  }
  function Sn(b, Y) {
    return { $$typeof: X, type: b.type, key: Y, ref: b.ref, props: b.props, _owner: b._owner };
  }
  function Mt(b) {
    return typeof b == "object" && b !== null && b.$$typeof === X;
  }
  function fn(b) {
    var Y = { "=": "=0", ":": "=2" };
    return "$" + b.replace(/[=:]/g, function(Oe) {
      return Y[Oe];
    });
  }
  var $t = /\/+/g;
  function St(b, Y) {
    return typeof b == "object" && b !== null && b.key != null ? fn("" + b.key) : Y.toString(36);
  }
  function ze(b, Y, Oe, Ve, $e) {
    var it = typeof b;
    (it === "undefined" || it === "boolean") && (b = null);
    var Tt = !1;
    if (b === null) Tt = !0;
    else switch (it) {
      case "string":
      case "number":
        Tt = !0;
        break;
      case "object":
        switch (b.$$typeof) {
          case X:
          case oe:
            Tt = !0;
        }
    }
    if (Tt) return Tt = b, $e = $e(Tt), b = Ve === "" ? "." + St(Tt, 0) : Ve, Ue($e) ? (Oe = "", b != null && (Oe = b.replace($t, "$&/") + "/"), ze($e, Y, Oe, "", function(Pt) {
      return Pt;
    })) : $e != null && (Mt($e) && ($e = Sn($e, Oe + (!$e.key || Tt && Tt.key === $e.key ? "" : ("" + $e.key).replace($t, "$&/") + "/") + b)), Y.push($e)), 1;
    if (Tt = 0, Ve = Ve === "" ? "." : Ve + ":", Ue(b)) for (var Qe = 0; Qe < b.length; Qe++) {
      it = b[Qe];
      var Et = Ve + St(it, Qe);
      Tt += ze(it, Y, Oe, Et, $e);
    }
    else if (Et = B(b), typeof Et == "function") for (b = Et.call(b), Qe = 0; !(it = b.next()).done; ) it = it.value, Et = Ve + St(it, Qe++), Tt += ze(it, Y, Oe, Et, $e);
    else if (it === "object") throw Y = String(b), Error("Objects are not valid as a React child (found: " + (Y === "[object Object]" ? "object with keys {" + Object.keys(b).join(", ") + "}" : Y) + "). If you meant to render a collection of children, use an array instead.");
    return Tt;
  }
  function At(b, Y, Oe) {
    if (b == null) return b;
    var Ve = [], $e = 0;
    return ze(b, Ve, "", "", function(it) {
      return Y.call(Oe, it, $e++);
    }), Ve;
  }
  function mt(b) {
    if (b._status === -1) {
      var Y = b._result;
      Y = Y(), Y.then(function(Oe) {
        (b._status === 0 || b._status === -1) && (b._status = 1, b._result = Oe);
      }, function(Oe) {
        (b._status === 0 || b._status === -1) && (b._status = 2, b._result = Oe);
      }), b._status === -1 && (b._status = 0, b._result = Y);
    }
    if (b._status === 1) return b._result.default;
    throw b._result;
  }
  var at = { current: null }, $ = { transition: null }, Ee = { ReactCurrentDispatcher: at, ReactCurrentBatchConfig: $, ReactCurrentOwner: xe };
  function le() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return Rt.Children = { map: At, forEach: function(b, Y, Oe) {
    At(b, function() {
      Y.apply(this, arguments);
    }, Oe);
  }, count: function(b) {
    var Y = 0;
    return At(b, function() {
      Y++;
    }), Y;
  }, toArray: function(b) {
    return At(b, function(Y) {
      return Y;
    }) || [];
  }, only: function(b) {
    if (!Mt(b)) throw Error("React.Children.only expected to receive a single React element child.");
    return b;
  } }, Rt.Component = Ge, Rt.Fragment = A, Rt.Profiler = gt, Rt.PureComponent = rn, Rt.StrictMode = Xe, Rt.Suspense = Ze, Rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ee, Rt.act = le, Rt.cloneElement = function(b, Y, Oe) {
    if (b == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + b + ".");
    var Ve = G({}, b.props), $e = b.key, it = b.ref, Tt = b._owner;
    if (Y != null) {
      if (Y.ref !== void 0 && (it = Y.ref, Tt = xe.current), Y.key !== void 0 && ($e = "" + Y.key), b.type && b.type.defaultProps) var Qe = b.type.defaultProps;
      for (Et in Y) kt.call(Y, Et) && !dt.hasOwnProperty(Et) && (Ve[Et] = Y[Et] === void 0 && Qe !== void 0 ? Qe[Et] : Y[Et]);
    }
    var Et = arguments.length - 2;
    if (Et === 1) Ve.children = Oe;
    else if (1 < Et) {
      Qe = Array(Et);
      for (var Pt = 0; Pt < Et; Pt++) Qe[Pt] = arguments[Pt + 2];
      Ve.children = Qe;
    }
    return { $$typeof: X, type: b.type, key: $e, ref: it, props: Ve, _owner: Tt };
  }, Rt.createContext = function(b) {
    return b = { $$typeof: lt, _currentValue: b, _currentValue2: b, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, b.Provider = { $$typeof: ft, _context: b }, b.Consumer = b;
  }, Rt.createElement = Pe, Rt.createFactory = function(b) {
    var Y = Pe.bind(null, b);
    return Y.type = b, Y;
  }, Rt.createRef = function() {
    return { current: null };
  }, Rt.forwardRef = function(b) {
    return { $$typeof: S, render: b };
  }, Rt.isValidElement = Mt, Rt.lazy = function(b) {
    return { $$typeof: ne, _payload: { _status: -1, _result: b }, _init: mt };
  }, Rt.memo = function(b, Y) {
    return { $$typeof: Se, type: b, compare: Y === void 0 ? null : Y };
  }, Rt.startTransition = function(b) {
    var Y = $.transition;
    $.transition = {};
    try {
      b();
    } finally {
      $.transition = Y;
    }
  }, Rt.unstable_act = le, Rt.useCallback = function(b, Y) {
    return at.current.useCallback(b, Y);
  }, Rt.useContext = function(b) {
    return at.current.useContext(b);
  }, Rt.useDebugValue = function() {
  }, Rt.useDeferredValue = function(b) {
    return at.current.useDeferredValue(b);
  }, Rt.useEffect = function(b, Y) {
    return at.current.useEffect(b, Y);
  }, Rt.useId = function() {
    return at.current.useId();
  }, Rt.useImperativeHandle = function(b, Y, Oe) {
    return at.current.useImperativeHandle(b, Y, Oe);
  }, Rt.useInsertionEffect = function(b, Y) {
    return at.current.useInsertionEffect(b, Y);
  }, Rt.useLayoutEffect = function(b, Y) {
    return at.current.useLayoutEffect(b, Y);
  }, Rt.useMemo = function(b, Y) {
    return at.current.useMemo(b, Y);
  }, Rt.useReducer = function(b, Y, Oe) {
    return at.current.useReducer(b, Y, Oe);
  }, Rt.useRef = function(b) {
    return at.current.useRef(b);
  }, Rt.useState = function(b) {
    return at.current.useState(b);
  }, Rt.useSyncExternalStore = function(b, Y, Oe) {
    return at.current.useSyncExternalStore(b, Y, Oe);
  }, Rt.useTransition = function() {
    return at.current.useTransition();
  }, Rt.version = "18.3.1", Rt;
}
var Zp = { exports: {} };
Zp.exports;
var q0;
function Jb() {
  return q0 || (q0 = 1, function(X, oe) {
    var A = {};
    /**
     * @license React
     * react.development.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    A.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var Xe = "18.3.1", gt = Symbol.for("react.element"), ft = Symbol.for("react.portal"), lt = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), Ze = Symbol.for("react.profiler"), Se = Symbol.for("react.provider"), ne = Symbol.for("react.context"), se = Symbol.for("react.forward_ref"), B = Symbol.for("react.suspense"), ee = Symbol.for("react.suspense_list"), G = Symbol.for("react.memo"), de = Symbol.for("react.lazy"), Ge = Symbol.for("react.offscreen"), Hn = Symbol.iterator, rn = "@@iterator";
      function ut(h) {
        if (h === null || typeof h != "object")
          return null;
        var C = Hn && h[Hn] || h[rn];
        return typeof C == "function" ? C : null;
      }
      var Ue = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, kt = {
        transition: null
      }, xe = {
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
      }, Pe = {}, Sn = null;
      function Mt(h) {
        Sn = h;
      }
      Pe.setExtraStackFrame = function(h) {
        Sn = h;
      }, Pe.getCurrentStack = null, Pe.getStackAddendum = function() {
        var h = "";
        Sn && (h += Sn);
        var C = Pe.getCurrentStack;
        return C && (h += C() || ""), h;
      };
      var fn = !1, $t = !1, St = !1, ze = !1, At = !1, mt = {
        ReactCurrentDispatcher: Ue,
        ReactCurrentBatchConfig: kt,
        ReactCurrentOwner: dt
      };
      mt.ReactDebugCurrentFrame = Pe, mt.ReactCurrentActQueue = xe;
      function at(h) {
        {
          for (var C = arguments.length, M = new Array(C > 1 ? C - 1 : 0), F = 1; F < C; F++)
            M[F - 1] = arguments[F];
          Ee("warn", h, M);
        }
      }
      function $(h) {
        {
          for (var C = arguments.length, M = new Array(C > 1 ? C - 1 : 0), F = 1; F < C; F++)
            M[F - 1] = arguments[F];
          Ee("error", h, M);
        }
      }
      function Ee(h, C, M) {
        {
          var F = mt.ReactDebugCurrentFrame, J = F.getStackAddendum();
          J !== "" && (C += "%s", M = M.concat([J]));
          var ge = M.map(function(pe) {
            return String(pe);
          });
          ge.unshift("Warning: " + C), Function.prototype.apply.call(console[h], console, ge);
        }
      }
      var le = {};
      function b(h, C) {
        {
          var M = h.constructor, F = M && (M.displayName || M.name) || "ReactClass", J = F + "." + C;
          if (le[J])
            return;
          $("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", C, F), le[J] = !0;
        }
      }
      var Y = {
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
          b(h, "forceUpdate");
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
        enqueueReplaceState: function(h, C, M, F) {
          b(h, "replaceState");
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
        enqueueSetState: function(h, C, M, F) {
          b(h, "setState");
        }
      }, Oe = Object.assign, Ve = {};
      Object.freeze(Ve);
      function $e(h, C, M) {
        this.props = h, this.context = C, this.refs = Ve, this.updater = M || Y;
      }
      $e.prototype.isReactComponent = {}, $e.prototype.setState = function(h, C) {
        if (typeof h != "object" && typeof h != "function" && h != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, h, C, "setState");
      }, $e.prototype.forceUpdate = function(h) {
        this.updater.enqueueForceUpdate(this, h, "forceUpdate");
      };
      {
        var it = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, Tt = function(h, C) {
          Object.defineProperty($e.prototype, h, {
            get: function() {
              at("%s(...) is deprecated in plain JavaScript React classes. %s", C[0], C[1]);
            }
          });
        };
        for (var Qe in it)
          it.hasOwnProperty(Qe) && Tt(Qe, it[Qe]);
      }
      function Et() {
      }
      Et.prototype = $e.prototype;
      function Pt(h, C, M) {
        this.props = h, this.context = C, this.refs = Ve, this.updater = M || Y;
      }
      var bn = Pt.prototype = new Et();
      bn.constructor = Pt, Oe(bn, $e.prototype), bn.isPureReactComponent = !0;
      function Qn() {
        var h = {
          current: null
        };
        return Object.seal(h), h;
      }
      var rr = Array.isArray;
      function Dn(h) {
        return rr(h);
      }
      function Er(h) {
        {
          var C = typeof Symbol == "function" && Symbol.toStringTag, M = C && h[Symbol.toStringTag] || h.constructor.name || "Object";
          return M;
        }
      }
      function Pn(h) {
        try {
          return kn(h), !1;
        } catch {
          return !0;
        }
      }
      function kn(h) {
        return "" + h;
      }
      function ca(h) {
        if (Pn(h))
          return $("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Er(h)), kn(h);
      }
      function Ga(h, C, M) {
        var F = h.displayName;
        if (F)
          return F;
        var J = C.displayName || C.name || "";
        return J !== "" ? M + "(" + J + ")" : M;
      }
      function Dr(h) {
        return h.displayName || "Context";
      }
      function Vn(h) {
        if (h == null)
          return null;
        if (typeof h.tag == "number" && $("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof h == "function")
          return h.displayName || h.name || null;
        if (typeof h == "string")
          return h;
        switch (h) {
          case lt:
            return "Fragment";
          case ft:
            return "Portal";
          case Ze:
            return "Profiler";
          case S:
            return "StrictMode";
          case B:
            return "Suspense";
          case ee:
            return "SuspenseList";
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case ne:
              var C = h;
              return Dr(C) + ".Consumer";
            case Se:
              var M = h;
              return Dr(M._context) + ".Provider";
            case se:
              return Ga(h, h.render, "ForwardRef");
            case G:
              var F = h.displayName || null;
              return F !== null ? F : Vn(h.type) || "Memo";
            case de: {
              var J = h, ge = J._payload, pe = J._init;
              try {
                return Vn(pe(ge));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var Wn = Object.prototype.hasOwnProperty, Gn = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, Cr, Ka, On;
      On = {};
      function ar(h) {
        if (Wn.call(h, "ref")) {
          var C = Object.getOwnPropertyDescriptor(h, "ref").get;
          if (C && C.isReactWarning)
            return !1;
        }
        return h.ref !== void 0;
      }
      function Ir(h) {
        if (Wn.call(h, "key")) {
          var C = Object.getOwnPropertyDescriptor(h, "key").get;
          if (C && C.isReactWarning)
            return !1;
        }
        return h.key !== void 0;
      }
      function Li(h, C) {
        var M = function() {
          Cr || (Cr = !0, $("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        M.isReactWarning = !0, Object.defineProperty(h, "key", {
          get: M,
          configurable: !0
        });
      }
      function fa(h, C) {
        var M = function() {
          Ka || (Ka = !0, $("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        M.isReactWarning = !0, Object.defineProperty(h, "ref", {
          get: M,
          configurable: !0
        });
      }
      function te(h) {
        if (typeof h.ref == "string" && dt.current && h.__self && dt.current.stateNode !== h.__self) {
          var C = Vn(dt.current.type);
          On[C] || ($('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', C, h.ref), On[C] = !0);
        }
      }
      var Me = function(h, C, M, F, J, ge, pe) {
        var Fe = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: gt,
          // Built-in properties that belong on the element
          type: h,
          key: C,
          ref: M,
          props: pe,
          // Record the component responsible for creating this element.
          _owner: ge
        };
        return Fe._store = {}, Object.defineProperty(Fe._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(Fe, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: F
        }), Object.defineProperty(Fe, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: J
        }), Object.freeze && (Object.freeze(Fe.props), Object.freeze(Fe)), Fe;
      };
      function tt(h, C, M) {
        var F, J = {}, ge = null, pe = null, Fe = null, rt = null;
        if (C != null) {
          ar(C) && (pe = C.ref, te(C)), Ir(C) && (ca(C.key), ge = "" + C.key), Fe = C.__self === void 0 ? null : C.__self, rt = C.__source === void 0 ? null : C.__source;
          for (F in C)
            Wn.call(C, F) && !Gn.hasOwnProperty(F) && (J[F] = C[F]);
        }
        var Ft = arguments.length - 2;
        if (Ft === 1)
          J.children = M;
        else if (Ft > 1) {
          for (var Qt = Array(Ft), Wt = 0; Wt < Ft; Wt++)
            Qt[Wt] = arguments[Wt + 2];
          Object.freeze && Object.freeze(Qt), J.children = Qt;
        }
        if (h && h.defaultProps) {
          var Je = h.defaultProps;
          for (F in Je)
            J[F] === void 0 && (J[F] = Je[F]);
        }
        if (ge || pe) {
          var Zt = typeof h == "function" ? h.displayName || h.name || "Unknown" : h;
          ge && Li(J, Zt), pe && fa(J, Zt);
        }
        return Me(h, ge, pe, Fe, rt, dt.current, J);
      }
      function Nt(h, C) {
        var M = Me(h.type, C, h.ref, h._self, h._source, h._owner, h.props);
        return M;
      }
      function an(h, C, M) {
        if (h == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + h + ".");
        var F, J = Oe({}, h.props), ge = h.key, pe = h.ref, Fe = h._self, rt = h._source, Ft = h._owner;
        if (C != null) {
          ar(C) && (pe = C.ref, Ft = dt.current), Ir(C) && (ca(C.key), ge = "" + C.key);
          var Qt;
          h.type && h.type.defaultProps && (Qt = h.type.defaultProps);
          for (F in C)
            Wn.call(C, F) && !Gn.hasOwnProperty(F) && (C[F] === void 0 && Qt !== void 0 ? J[F] = Qt[F] : J[F] = C[F]);
        }
        var Wt = arguments.length - 2;
        if (Wt === 1)
          J.children = M;
        else if (Wt > 1) {
          for (var Je = Array(Wt), Zt = 0; Zt < Wt; Zt++)
            Je[Zt] = arguments[Zt + 2];
          J.children = Je;
        }
        return Me(h.type, ge, pe, Fe, rt, Ft, J);
      }
      function ln(h) {
        return typeof h == "object" && h !== null && h.$$typeof === gt;
      }
      var un = ".", Kn = ":";
      function tn(h) {
        var C = /[=:]/g, M = {
          "=": "=0",
          ":": "=2"
        }, F = h.replace(C, function(J) {
          return M[J];
        });
        return "$" + F;
      }
      var Yt = !1, zt = /\/+/g;
      function da(h) {
        return h.replace(zt, "$&/");
      }
      function ba(h, C) {
        return typeof h == "object" && h !== null && h.key != null ? (ca(h.key), tn("" + h.key)) : C.toString(36);
      }
      function Da(h, C, M, F, J) {
        var ge = typeof h;
        (ge === "undefined" || ge === "boolean") && (h = null);
        var pe = !1;
        if (h === null)
          pe = !0;
        else
          switch (ge) {
            case "string":
            case "number":
              pe = !0;
              break;
            case "object":
              switch (h.$$typeof) {
                case gt:
                case ft:
                  pe = !0;
              }
          }
        if (pe) {
          var Fe = h, rt = J(Fe), Ft = F === "" ? un + ba(Fe, 0) : F;
          if (Dn(rt)) {
            var Qt = "";
            Ft != null && (Qt = da(Ft) + "/"), Da(rt, C, Qt, "", function(Xf) {
              return Xf;
            });
          } else rt != null && (ln(rt) && (rt.key && (!Fe || Fe.key !== rt.key) && ca(rt.key), rt = Nt(
            rt,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            M + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (rt.key && (!Fe || Fe.key !== rt.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              da("" + rt.key) + "/"
            ) : "") + Ft
          )), C.push(rt));
          return 1;
        }
        var Wt, Je, Zt = 0, Cn = F === "" ? un : F + Kn;
        if (Dn(h))
          for (var Jl = 0; Jl < h.length; Jl++)
            Wt = h[Jl], Je = Cn + ba(Wt, Jl), Zt += Da(Wt, C, M, Je, J);
        else {
          var Ko = ut(h);
          if (typeof Ko == "function") {
            var Vi = h;
            Ko === Vi.entries && (Yt || at("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Yt = !0);
            for (var eu = Ko.call(Vi), qo, qf = 0; !(qo = eu.next()).done; )
              Wt = qo.value, Je = Cn + ba(Wt, qf++), Zt += Da(Wt, C, M, Je, J);
          } else if (ge === "object") {
            var oc = String(h);
            throw new Error("Objects are not valid as a React child (found: " + (oc === "[object Object]" ? "object with keys {" + Object.keys(h).join(", ") + "}" : oc) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return Zt;
      }
      function Mi(h, C, M) {
        if (h == null)
          return h;
        var F = [], J = 0;
        return Da(h, F, "", "", function(ge) {
          return C.call(M, ge, J++);
        }), F;
      }
      function Il(h) {
        var C = 0;
        return Mi(h, function() {
          C++;
        }), C;
      }
      function Ql(h, C, M) {
        Mi(h, function() {
          C.apply(this, arguments);
        }, M);
      }
      function Ni(h) {
        return Mi(h, function(C) {
          return C;
        }) || [];
      }
      function Wl(h) {
        if (!ln(h))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return h;
      }
      function si(h) {
        var C = {
          $$typeof: ne,
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
          $$typeof: Se,
          _context: C
        };
        var M = !1, F = !1, J = !1;
        {
          var ge = {
            $$typeof: ne,
            _context: C
          };
          Object.defineProperties(ge, {
            Provider: {
              get: function() {
                return F || (F = !0, $("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), C.Provider;
              },
              set: function(pe) {
                C.Provider = pe;
              }
            },
            _currentValue: {
              get: function() {
                return C._currentValue;
              },
              set: function(pe) {
                C._currentValue = pe;
              }
            },
            _currentValue2: {
              get: function() {
                return C._currentValue2;
              },
              set: function(pe) {
                C._currentValue2 = pe;
              }
            },
            _threadCount: {
              get: function() {
                return C._threadCount;
              },
              set: function(pe) {
                C._threadCount = pe;
              }
            },
            Consumer: {
              get: function() {
                return M || (M = !0, $("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), C.Consumer;
              }
            },
            displayName: {
              get: function() {
                return C.displayName;
              },
              set: function(pe) {
                J || (at("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", pe), J = !0);
              }
            }
          }), C.Consumer = ge;
        }
        return C._currentRenderer = null, C._currentRenderer2 = null, C;
      }
      var pa = -1, ir = 0, va = 1, Qr = 2;
      function ci(h) {
        if (h._status === pa) {
          var C = h._result, M = C();
          if (M.then(function(ge) {
            if (h._status === ir || h._status === pa) {
              var pe = h;
              pe._status = va, pe._result = ge;
            }
          }, function(ge) {
            if (h._status === ir || h._status === pa) {
              var pe = h;
              pe._status = Qr, pe._result = ge;
            }
          }), h._status === pa) {
            var F = h;
            F._status = ir, F._result = M;
          }
        }
        if (h._status === va) {
          var J = h._result;
          return J === void 0 && $(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, J), "default" in J || $(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, J), J.default;
        } else
          throw h._result;
      }
      function fi(h) {
        var C = {
          // We use these fields to store the result.
          _status: pa,
          _result: h
        }, M = {
          $$typeof: de,
          _payload: C,
          _init: ci
        };
        {
          var F, J;
          Object.defineProperties(M, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return F;
              },
              set: function(ge) {
                $("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), F = ge, Object.defineProperty(M, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return J;
              },
              set: function(ge) {
                $("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), J = ge, Object.defineProperty(M, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return M;
      }
      function zi(h) {
        h != null && h.$$typeof === G ? $("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof h != "function" ? $("forwardRef requires a render function but was given %s.", h === null ? "null" : typeof h) : h.length !== 0 && h.length !== 2 && $("forwardRef render functions accept exactly two parameters: props and ref. %s", h.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), h != null && (h.defaultProps != null || h.propTypes != null) && $("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var C = {
          $$typeof: se,
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
            set: function(F) {
              M = F, !h.name && !h.displayName && (h.displayName = F);
            }
          });
        }
        return C;
      }
      var R;
      R = Symbol.for("react.module.reference");
      function I(h) {
        return !!(typeof h == "string" || typeof h == "function" || h === lt || h === Ze || At || h === S || h === B || h === ee || ze || h === Ge || fn || $t || St || typeof h == "object" && h !== null && (h.$$typeof === de || h.$$typeof === G || h.$$typeof === Se || h.$$typeof === ne || h.$$typeof === se || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        h.$$typeof === R || h.getModuleId !== void 0));
      }
      function ie(h, C) {
        I(h) || $("memo: The first argument must be a component. Instead received: %s", h === null ? "null" : typeof h);
        var M = {
          $$typeof: G,
          type: h,
          compare: C === void 0 ? null : C
        };
        {
          var F;
          Object.defineProperty(M, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return F;
            },
            set: function(J) {
              F = J, !h.name && !h.displayName && (h.displayName = J);
            }
          });
        }
        return M;
      }
      function ce() {
        var h = Ue.current;
        return h === null && $(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), h;
      }
      function ot(h) {
        var C = ce();
        if (h._context !== void 0) {
          var M = h._context;
          M.Consumer === h ? $("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : M.Provider === h && $("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return C.useContext(h);
      }
      function Ye(h) {
        var C = ce();
        return C.useState(h);
      }
      function pt(h, C, M) {
        var F = ce();
        return F.useReducer(h, C, M);
      }
      function nt(h) {
        var C = ce();
        return C.useRef(h);
      }
      function En(h, C) {
        var M = ce();
        return M.useEffect(h, C);
      }
      function nn(h, C) {
        var M = ce();
        return M.useInsertionEffect(h, C);
      }
      function on(h, C) {
        var M = ce();
        return M.useLayoutEffect(h, C);
      }
      function Rr(h, C) {
        var M = ce();
        return M.useCallback(h, C);
      }
      function qa(h, C) {
        var M = ce();
        return M.useMemo(h, C);
      }
      function Ut(h, C, M) {
        var F = ce();
        return F.useImperativeHandle(h, C, M);
      }
      function dn(h, C) {
        {
          var M = ce();
          return M.useDebugValue(h, C);
        }
      }
      function Ke() {
        var h = ce();
        return h.useTransition();
      }
      function di(h) {
        var C = ce();
        return C.useDeferredValue(h);
      }
      function Ui() {
        var h = ce();
        return h.useId();
      }
      function ac(h, C, M) {
        var F = ce();
        return F.useSyncExternalStore(h, C, M);
      }
      var Ai = 0, ol, Wr, $o, kr, Yo, ic, lc;
      function Fi() {
      }
      Fi.__reactDisabledLog = !0;
      function sl() {
        {
          if (Ai === 0) {
            ol = console.log, Wr = console.info, $o = console.warn, kr = console.error, Yo = console.group, ic = console.groupCollapsed, lc = console.groupEnd;
            var h = {
              configurable: !0,
              enumerable: !0,
              value: Fi,
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
      function Gr() {
        {
          if (Ai--, Ai === 0) {
            var h = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: Oe({}, h, {
                value: ol
              }),
              info: Oe({}, h, {
                value: Wr
              }),
              warn: Oe({}, h, {
                value: $o
              }),
              error: Oe({}, h, {
                value: kr
              }),
              group: Oe({}, h, {
                value: Yo
              }),
              groupCollapsed: Oe({}, h, {
                value: ic
              }),
              groupEnd: Oe({}, h, {
                value: lc
              })
            });
          }
          Ai < 0 && $("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var pi = mt.ReactCurrentDispatcher, cl;
      function ju(h, C, M) {
        {
          if (cl === void 0)
            try {
              throw Error();
            } catch (J) {
              var F = J.stack.trim().match(/\n( *(at )?)/);
              cl = F && F[1] || "";
            }
          return `
` + cl + h;
        }
      }
      var ji = !1, Gl;
      {
        var Kl = typeof WeakMap == "function" ? WeakMap : Map;
        Gl = new Kl();
      }
      function fl(h, C) {
        if (!h || ji)
          return "";
        {
          var M = Gl.get(h);
          if (M !== void 0)
            return M;
        }
        var F;
        ji = !0;
        var J = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var ge;
        ge = pi.current, pi.current = null, sl();
        try {
          if (C) {
            var pe = function() {
              throw Error();
            };
            if (Object.defineProperty(pe.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(pe, []);
              } catch (Cn) {
                F = Cn;
              }
              Reflect.construct(h, [], pe);
            } else {
              try {
                pe.call();
              } catch (Cn) {
                F = Cn;
              }
              h.call(pe.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (Cn) {
              F = Cn;
            }
            h();
          }
        } catch (Cn) {
          if (Cn && F && typeof Cn.stack == "string") {
            for (var Fe = Cn.stack.split(`
`), rt = F.stack.split(`
`), Ft = Fe.length - 1, Qt = rt.length - 1; Ft >= 1 && Qt >= 0 && Fe[Ft] !== rt[Qt]; )
              Qt--;
            for (; Ft >= 1 && Qt >= 0; Ft--, Qt--)
              if (Fe[Ft] !== rt[Qt]) {
                if (Ft !== 1 || Qt !== 1)
                  do
                    if (Ft--, Qt--, Qt < 0 || Fe[Ft] !== rt[Qt]) {
                      var Wt = `
` + Fe[Ft].replace(" at new ", " at ");
                      return h.displayName && Wt.includes("<anonymous>") && (Wt = Wt.replace("<anonymous>", h.displayName)), typeof h == "function" && Gl.set(h, Wt), Wt;
                    }
                  while (Ft >= 1 && Qt >= 0);
                break;
              }
          }
        } finally {
          ji = !1, pi.current = ge, Gr(), Error.prepareStackTrace = J;
        }
        var Je = h ? h.displayName || h.name : "", Zt = Je ? ju(Je) : "";
        return typeof h == "function" && Gl.set(h, Zt), Zt;
      }
      function Io(h, C, M) {
        return fl(h, !1);
      }
      function Qo(h) {
        var C = h.prototype;
        return !!(C && C.isReactComponent);
      }
      function wt(h, C, M) {
        if (h == null)
          return "";
        if (typeof h == "function")
          return fl(h, Qo(h));
        if (typeof h == "string")
          return ju(h);
        switch (h) {
          case B:
            return ju("Suspense");
          case ee:
            return ju("SuspenseList");
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case se:
              return Io(h.render);
            case G:
              return wt(h.type, C, M);
            case de: {
              var F = h, J = F._payload, ge = F._init;
              try {
                return wt(ge(J), C, M);
              } catch {
              }
            }
          }
        return "";
      }
      var Wo = {}, Hu = mt.ReactDebugCurrentFrame;
      function xt(h) {
        if (h) {
          var C = h._owner, M = wt(h.type, h._source, C ? C.type : null);
          Hu.setExtraStackFrame(M);
        } else
          Hu.setExtraStackFrame(null);
      }
      function uc(h, C, M, F, J) {
        {
          var ge = Function.call.bind(Wn);
          for (var pe in h)
            if (ge(h, pe)) {
              var Fe = void 0;
              try {
                if (typeof h[pe] != "function") {
                  var rt = Error((F || "React class") + ": " + M + " type `" + pe + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof h[pe] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw rt.name = "Invariant Violation", rt;
                }
                Fe = h[pe](C, pe, F, M, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (Ft) {
                Fe = Ft;
              }
              Fe && !(Fe instanceof Error) && (xt(J), $("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", F || "React class", M, pe, typeof Fe), xt(null)), Fe instanceof Error && !(Fe.message in Wo) && (Wo[Fe.message] = !0, xt(J), $("Failed %s type: %s", M, Fe.message), xt(null));
            }
        }
      }
      function vi(h) {
        if (h) {
          var C = h._owner, M = wt(h.type, h._source, C ? C.type : null);
          Mt(M);
        } else
          Mt(null);
      }
      var Be;
      Be = !1;
      function ql() {
        if (dt.current) {
          var h = Vn(dt.current.type);
          if (h)
            return `

Check the render method of \`` + h + "`.";
        }
        return "";
      }
      function qn(h) {
        if (h !== void 0) {
          var C = h.fileName.replace(/^.*[\\\/]/, ""), M = h.lineNumber;
          return `

Check your code at ` + C + ":" + M + ".";
        }
        return "";
      }
      function Kr(h) {
        return h != null ? qn(h.__source) : "";
      }
      var Or = {};
      function hi(h) {
        var C = ql();
        if (!C) {
          var M = typeof h == "string" ? h : h.displayName || h.name;
          M && (C = `

Check the top-level render call using <` + M + ">.");
        }
        return C;
      }
      function mn(h, C) {
        if (!(!h._store || h._store.validated || h.key != null)) {
          h._store.validated = !0;
          var M = hi(C);
          if (!Or[M]) {
            Or[M] = !0;
            var F = "";
            h && h._owner && h._owner !== dt.current && (F = " It was passed a child from " + Vn(h._owner.type) + "."), vi(h), $('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', M, F), vi(null);
          }
        }
      }
      function It(h, C) {
        if (typeof h == "object") {
          if (Dn(h))
            for (var M = 0; M < h.length; M++) {
              var F = h[M];
              ln(F) && mn(F, C);
            }
          else if (ln(h))
            h._store && (h._store.validated = !0);
          else if (h) {
            var J = ut(h);
            if (typeof J == "function" && J !== h.entries)
              for (var ge = J.call(h), pe; !(pe = ge.next()).done; )
                ln(pe.value) && mn(pe.value, C);
          }
        }
      }
      function Xa(h) {
        {
          var C = h.type;
          if (C == null || typeof C == "string")
            return;
          var M;
          if (typeof C == "function")
            M = C.propTypes;
          else if (typeof C == "object" && (C.$$typeof === se || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          C.$$typeof === G))
            M = C.propTypes;
          else
            return;
          if (M) {
            var F = Vn(C);
            uc(M, h.props, "prop", F, h);
          } else if (C.PropTypes !== void 0 && !Be) {
            Be = !0;
            var J = Vn(C);
            $("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", J || "Unknown");
          }
          typeof C.getDefaultProps == "function" && !C.getDefaultProps.isReactClassApproved && $("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function ka(h) {
        {
          for (var C = Object.keys(h.props), M = 0; M < C.length; M++) {
            var F = C[M];
            if (F !== "children" && F !== "key") {
              vi(h), $("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", F), vi(null);
              break;
            }
          }
          h.ref !== null && (vi(h), $("Invalid attribute `ref` supplied to `React.Fragment`."), vi(null));
        }
      }
      function Tr(h, C, M) {
        var F = I(h);
        if (!F) {
          var J = "";
          (h === void 0 || typeof h == "object" && h !== null && Object.keys(h).length === 0) && (J += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ge = Kr(C);
          ge ? J += ge : J += ql();
          var pe;
          h === null ? pe = "null" : Dn(h) ? pe = "array" : h !== void 0 && h.$$typeof === gt ? (pe = "<" + (Vn(h.type) || "Unknown") + " />", J = " Did you accidentally export a JSX literal instead of a component?") : pe = typeof h, $("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", pe, J);
        }
        var Fe = tt.apply(this, arguments);
        if (Fe == null)
          return Fe;
        if (F)
          for (var rt = 2; rt < arguments.length; rt++)
            It(arguments[rt], h);
        return h === lt ? ka(Fe) : Xa(Fe), Fe;
      }
      var Lr = !1;
      function Kf(h) {
        var C = Tr.bind(null, h);
        return C.type = h, Lr || (Lr = !0, at("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(C, "type", {
          enumerable: !1,
          get: function() {
            return at("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: h
            }), h;
          }
        }), C;
      }
      function Pu(h, C, M) {
        for (var F = an.apply(this, arguments), J = 2; J < arguments.length; J++)
          It(arguments[J], F.type);
        return Xa(F), F;
      }
      function Xl(h, C) {
        var M = kt.transition;
        kt.transition = {};
        var F = kt.transition;
        kt.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          h();
        } finally {
          if (kt.transition = M, M === null && F._updatedFibers) {
            var J = F._updatedFibers.size;
            J > 10 && at("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), F._updatedFibers.clear();
          }
        }
      }
      var Vu = !1, Bu = null;
      function Zl(h) {
        if (Bu === null)
          try {
            var C = ("require" + Math.random()).slice(0, 7), M = X && X[C];
            Bu = M.call(X, "timers").setImmediate;
          } catch {
            Bu = function(J) {
              Vu === !1 && (Vu = !0, typeof MessageChannel > "u" && $("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var ge = new MessageChannel();
              ge.port1.onmessage = J, ge.port2.postMessage(void 0);
            };
          }
        return Bu(h);
      }
      var Oa = 0, La = !1;
      function dl(h) {
        {
          var C = Oa;
          Oa++, xe.current === null && (xe.current = []);
          var M = xe.isBatchingLegacy, F;
          try {
            if (xe.isBatchingLegacy = !0, F = h(), !M && xe.didScheduleLegacyUpdate) {
              var J = xe.current;
              J !== null && (xe.didScheduleLegacyUpdate = !1, Pi(J));
            }
          } catch (Je) {
            throw Hi(C), Je;
          } finally {
            xe.isBatchingLegacy = M;
          }
          if (F !== null && typeof F == "object" && typeof F.then == "function") {
            var ge = F, pe = !1, Fe = {
              then: function(Je, Zt) {
                pe = !0, ge.then(function(Cn) {
                  Hi(C), Oa === 0 ? $u(Cn, Je, Zt) : Je(Cn);
                }, function(Cn) {
                  Hi(C), Zt(Cn);
                });
              }
            };
            return !La && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              pe || (La = !0, $("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), Fe;
          } else {
            var rt = F;
            if (Hi(C), Oa === 0) {
              var Ft = xe.current;
              Ft !== null && (Pi(Ft), xe.current = null);
              var Qt = {
                then: function(Je, Zt) {
                  xe.current === null ? (xe.current = [], $u(rt, Je, Zt)) : Je(rt);
                }
              };
              return Qt;
            } else {
              var Wt = {
                then: function(Je, Zt) {
                  Je(rt);
                }
              };
              return Wt;
            }
          }
        }
      }
      function Hi(h) {
        h !== Oa - 1 && $("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Oa = h;
      }
      function $u(h, C, M) {
        {
          var F = xe.current;
          if (F !== null)
            try {
              Pi(F), Zl(function() {
                F.length === 0 ? (xe.current = null, C(h)) : $u(h, C, M);
              });
            } catch (J) {
              M(J);
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
          } catch (F) {
            throw h = h.slice(C + 1), F;
          } finally {
            pl = !1;
          }
        }
      }
      var Yu = Tr, Go = Pu, Ma = Kf, Iu = {
        map: Mi,
        forEach: Ql,
        count: Il,
        toArray: Ni,
        only: Wl
      };
      oe.Children = Iu, oe.Component = $e, oe.Fragment = lt, oe.Profiler = Ze, oe.PureComponent = Pt, oe.StrictMode = S, oe.Suspense = B, oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = mt, oe.act = dl, oe.cloneElement = Go, oe.createContext = si, oe.createElement = Yu, oe.createFactory = Ma, oe.createRef = Qn, oe.forwardRef = zi, oe.isValidElement = ln, oe.lazy = fi, oe.memo = ie, oe.startTransition = Xl, oe.unstable_act = dl, oe.useCallback = Rr, oe.useContext = ot, oe.useDebugValue = dn, oe.useDeferredValue = di, oe.useEffect = En, oe.useId = Ui, oe.useImperativeHandle = Ut, oe.useInsertionEffect = nn, oe.useLayoutEffect = on, oe.useMemo = qa, oe.useReducer = pt, oe.useRef = nt, oe.useState = Ye, oe.useSyncExternalStore = ac, oe.useTransition = Ke, oe.version = Xe, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Zp, Zp.exports)), Zp.exports;
}
var eD = {};
eD.NODE_ENV === "production" ? fE.exports = Zb() : fE.exports = Jb();
var Yr = fE.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var X0;
function tD() {
  if (X0) return qp;
  X0 = 1;
  var X = Yr, oe = Symbol.for("react.element"), A = Symbol.for("react.fragment"), Xe = Object.prototype.hasOwnProperty, gt = X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, ft = { key: !0, ref: !0, __self: !0, __source: !0 };
  function lt(S, Ze, Se) {
    var ne, se = {}, B = null, ee = null;
    Se !== void 0 && (B = "" + Se), Ze.key !== void 0 && (B = "" + Ze.key), Ze.ref !== void 0 && (ee = Ze.ref);
    for (ne in Ze) Xe.call(Ze, ne) && !ft.hasOwnProperty(ne) && (se[ne] = Ze[ne]);
    if (S && S.defaultProps) for (ne in Ze = S.defaultProps, Ze) se[ne] === void 0 && (se[ne] = Ze[ne]);
    return { $$typeof: oe, type: S, key: B, ref: ee, props: se, _owner: gt.current };
  }
  return qp.Fragment = A, qp.jsx = lt, qp.jsxs = lt, qp;
}
var Xp = {}, Z0;
function nD() {
  if (Z0) return Xp;
  Z0 = 1;
  var X = {};
  /**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  return X.NODE_ENV !== "production" && function() {
    var oe = Yr, A = Symbol.for("react.element"), Xe = Symbol.for("react.portal"), gt = Symbol.for("react.fragment"), ft = Symbol.for("react.strict_mode"), lt = Symbol.for("react.profiler"), S = Symbol.for("react.provider"), Ze = Symbol.for("react.context"), Se = Symbol.for("react.forward_ref"), ne = Symbol.for("react.suspense"), se = Symbol.for("react.suspense_list"), B = Symbol.for("react.memo"), ee = Symbol.for("react.lazy"), G = Symbol.for("react.offscreen"), de = Symbol.iterator, Ge = "@@iterator";
    function Hn(R) {
      if (R === null || typeof R != "object")
        return null;
      var I = de && R[de] || R[Ge];
      return typeof I == "function" ? I : null;
    }
    var rn = oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function ut(R) {
      {
        for (var I = arguments.length, ie = new Array(I > 1 ? I - 1 : 0), ce = 1; ce < I; ce++)
          ie[ce - 1] = arguments[ce];
        Ue("error", R, ie);
      }
    }
    function Ue(R, I, ie) {
      {
        var ce = rn.ReactDebugCurrentFrame, ot = ce.getStackAddendum();
        ot !== "" && (I += "%s", ie = ie.concat([ot]));
        var Ye = ie.map(function(pt) {
          return String(pt);
        });
        Ye.unshift("Warning: " + I), Function.prototype.apply.call(console[R], console, Ye);
      }
    }
    var kt = !1, xe = !1, dt = !1, Pe = !1, Sn = !1, Mt;
    Mt = Symbol.for("react.module.reference");
    function fn(R) {
      return !!(typeof R == "string" || typeof R == "function" || R === gt || R === lt || Sn || R === ft || R === ne || R === se || Pe || R === G || kt || xe || dt || typeof R == "object" && R !== null && (R.$$typeof === ee || R.$$typeof === B || R.$$typeof === S || R.$$typeof === Ze || R.$$typeof === Se || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      R.$$typeof === Mt || R.getModuleId !== void 0));
    }
    function $t(R, I, ie) {
      var ce = R.displayName;
      if (ce)
        return ce;
      var ot = I.displayName || I.name || "";
      return ot !== "" ? ie + "(" + ot + ")" : ie;
    }
    function St(R) {
      return R.displayName || "Context";
    }
    function ze(R) {
      if (R == null)
        return null;
      if (typeof R.tag == "number" && ut("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof R == "function")
        return R.displayName || R.name || null;
      if (typeof R == "string")
        return R;
      switch (R) {
        case gt:
          return "Fragment";
        case Xe:
          return "Portal";
        case lt:
          return "Profiler";
        case ft:
          return "StrictMode";
        case ne:
          return "Suspense";
        case se:
          return "SuspenseList";
      }
      if (typeof R == "object")
        switch (R.$$typeof) {
          case Ze:
            var I = R;
            return St(I) + ".Consumer";
          case S:
            var ie = R;
            return St(ie._context) + ".Provider";
          case Se:
            return $t(R, R.render, "ForwardRef");
          case B:
            var ce = R.displayName || null;
            return ce !== null ? ce : ze(R.type) || "Memo";
          case ee: {
            var ot = R, Ye = ot._payload, pt = ot._init;
            try {
              return ze(pt(Ye));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var At = Object.assign, mt = 0, at, $, Ee, le, b, Y, Oe;
    function Ve() {
    }
    Ve.__reactDisabledLog = !0;
    function $e() {
      {
        if (mt === 0) {
          at = console.log, $ = console.info, Ee = console.warn, le = console.error, b = console.group, Y = console.groupCollapsed, Oe = console.groupEnd;
          var R = {
            configurable: !0,
            enumerable: !0,
            value: Ve,
            writable: !0
          };
          Object.defineProperties(console, {
            info: R,
            log: R,
            warn: R,
            error: R,
            group: R,
            groupCollapsed: R,
            groupEnd: R
          });
        }
        mt++;
      }
    }
    function it() {
      {
        if (mt--, mt === 0) {
          var R = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: At({}, R, {
              value: at
            }),
            info: At({}, R, {
              value: $
            }),
            warn: At({}, R, {
              value: Ee
            }),
            error: At({}, R, {
              value: le
            }),
            group: At({}, R, {
              value: b
            }),
            groupCollapsed: At({}, R, {
              value: Y
            }),
            groupEnd: At({}, R, {
              value: Oe
            })
          });
        }
        mt < 0 && ut("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Tt = rn.ReactCurrentDispatcher, Qe;
    function Et(R, I, ie) {
      {
        if (Qe === void 0)
          try {
            throw Error();
          } catch (ot) {
            var ce = ot.stack.trim().match(/\n( *(at )?)/);
            Qe = ce && ce[1] || "";
          }
        return `
` + Qe + R;
      }
    }
    var Pt = !1, bn;
    {
      var Qn = typeof WeakMap == "function" ? WeakMap : Map;
      bn = new Qn();
    }
    function rr(R, I) {
      if (!R || Pt)
        return "";
      {
        var ie = bn.get(R);
        if (ie !== void 0)
          return ie;
      }
      var ce;
      Pt = !0;
      var ot = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Ye;
      Ye = Tt.current, Tt.current = null, $e();
      try {
        if (I) {
          var pt = function() {
            throw Error();
          };
          if (Object.defineProperty(pt.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(pt, []);
            } catch (dn) {
              ce = dn;
            }
            Reflect.construct(R, [], pt);
          } else {
            try {
              pt.call();
            } catch (dn) {
              ce = dn;
            }
            R.call(pt.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (dn) {
            ce = dn;
          }
          R();
        }
      } catch (dn) {
        if (dn && ce && typeof dn.stack == "string") {
          for (var nt = dn.stack.split(`
`), En = ce.stack.split(`
`), nn = nt.length - 1, on = En.length - 1; nn >= 1 && on >= 0 && nt[nn] !== En[on]; )
            on--;
          for (; nn >= 1 && on >= 0; nn--, on--)
            if (nt[nn] !== En[on]) {
              if (nn !== 1 || on !== 1)
                do
                  if (nn--, on--, on < 0 || nt[nn] !== En[on]) {
                    var Rr = `
` + nt[nn].replace(" at new ", " at ");
                    return R.displayName && Rr.includes("<anonymous>") && (Rr = Rr.replace("<anonymous>", R.displayName)), typeof R == "function" && bn.set(R, Rr), Rr;
                  }
                while (nn >= 1 && on >= 0);
              break;
            }
        }
      } finally {
        Pt = !1, Tt.current = Ye, it(), Error.prepareStackTrace = ot;
      }
      var qa = R ? R.displayName || R.name : "", Ut = qa ? Et(qa) : "";
      return typeof R == "function" && bn.set(R, Ut), Ut;
    }
    function Dn(R, I, ie) {
      return rr(R, !1);
    }
    function Er(R) {
      var I = R.prototype;
      return !!(I && I.isReactComponent);
    }
    function Pn(R, I, ie) {
      if (R == null)
        return "";
      if (typeof R == "function")
        return rr(R, Er(R));
      if (typeof R == "string")
        return Et(R);
      switch (R) {
        case ne:
          return Et("Suspense");
        case se:
          return Et("SuspenseList");
      }
      if (typeof R == "object")
        switch (R.$$typeof) {
          case Se:
            return Dn(R.render);
          case B:
            return Pn(R.type, I, ie);
          case ee: {
            var ce = R, ot = ce._payload, Ye = ce._init;
            try {
              return Pn(Ye(ot), I, ie);
            } catch {
            }
          }
        }
      return "";
    }
    var kn = Object.prototype.hasOwnProperty, ca = {}, Ga = rn.ReactDebugCurrentFrame;
    function Dr(R) {
      if (R) {
        var I = R._owner, ie = Pn(R.type, R._source, I ? I.type : null);
        Ga.setExtraStackFrame(ie);
      } else
        Ga.setExtraStackFrame(null);
    }
    function Vn(R, I, ie, ce, ot) {
      {
        var Ye = Function.call.bind(kn);
        for (var pt in R)
          if (Ye(R, pt)) {
            var nt = void 0;
            try {
              if (typeof R[pt] != "function") {
                var En = Error((ce || "React class") + ": " + ie + " type `" + pt + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof R[pt] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw En.name = "Invariant Violation", En;
              }
              nt = R[pt](I, pt, ce, ie, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (nn) {
              nt = nn;
            }
            nt && !(nt instanceof Error) && (Dr(ot), ut("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", ce || "React class", ie, pt, typeof nt), Dr(null)), nt instanceof Error && !(nt.message in ca) && (ca[nt.message] = !0, Dr(ot), ut("Failed %s type: %s", ie, nt.message), Dr(null));
          }
      }
    }
    var Wn = Array.isArray;
    function Gn(R) {
      return Wn(R);
    }
    function Cr(R) {
      {
        var I = typeof Symbol == "function" && Symbol.toStringTag, ie = I && R[Symbol.toStringTag] || R.constructor.name || "Object";
        return ie;
      }
    }
    function Ka(R) {
      try {
        return On(R), !1;
      } catch {
        return !0;
      }
    }
    function On(R) {
      return "" + R;
    }
    function ar(R) {
      if (Ka(R))
        return ut("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Cr(R)), On(R);
    }
    var Ir = rn.ReactCurrentOwner, Li = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, fa, te;
    function Me(R) {
      if (kn.call(R, "ref")) {
        var I = Object.getOwnPropertyDescriptor(R, "ref").get;
        if (I && I.isReactWarning)
          return !1;
      }
      return R.ref !== void 0;
    }
    function tt(R) {
      if (kn.call(R, "key")) {
        var I = Object.getOwnPropertyDescriptor(R, "key").get;
        if (I && I.isReactWarning)
          return !1;
      }
      return R.key !== void 0;
    }
    function Nt(R, I) {
      typeof R.ref == "string" && Ir.current;
    }
    function an(R, I) {
      {
        var ie = function() {
          fa || (fa = !0, ut("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", I));
        };
        ie.isReactWarning = !0, Object.defineProperty(R, "key", {
          get: ie,
          configurable: !0
        });
      }
    }
    function ln(R, I) {
      {
        var ie = function() {
          te || (te = !0, ut("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", I));
        };
        ie.isReactWarning = !0, Object.defineProperty(R, "ref", {
          get: ie,
          configurable: !0
        });
      }
    }
    var un = function(R, I, ie, ce, ot, Ye, pt) {
      var nt = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: A,
        // Built-in properties that belong on the element
        type: R,
        key: I,
        ref: ie,
        props: pt,
        // Record the component responsible for creating this element.
        _owner: Ye
      };
      return nt._store = {}, Object.defineProperty(nt._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(nt, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ce
      }), Object.defineProperty(nt, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ot
      }), Object.freeze && (Object.freeze(nt.props), Object.freeze(nt)), nt;
    };
    function Kn(R, I, ie, ce, ot) {
      {
        var Ye, pt = {}, nt = null, En = null;
        ie !== void 0 && (ar(ie), nt = "" + ie), tt(I) && (ar(I.key), nt = "" + I.key), Me(I) && (En = I.ref, Nt(I, ot));
        for (Ye in I)
          kn.call(I, Ye) && !Li.hasOwnProperty(Ye) && (pt[Ye] = I[Ye]);
        if (R && R.defaultProps) {
          var nn = R.defaultProps;
          for (Ye in nn)
            pt[Ye] === void 0 && (pt[Ye] = nn[Ye]);
        }
        if (nt || En) {
          var on = typeof R == "function" ? R.displayName || R.name || "Unknown" : R;
          nt && an(pt, on), En && ln(pt, on);
        }
        return un(R, nt, En, ot, ce, Ir.current, pt);
      }
    }
    var tn = rn.ReactCurrentOwner, Yt = rn.ReactDebugCurrentFrame;
    function zt(R) {
      if (R) {
        var I = R._owner, ie = Pn(R.type, R._source, I ? I.type : null);
        Yt.setExtraStackFrame(ie);
      } else
        Yt.setExtraStackFrame(null);
    }
    var da;
    da = !1;
    function ba(R) {
      return typeof R == "object" && R !== null && R.$$typeof === A;
    }
    function Da() {
      {
        if (tn.current) {
          var R = ze(tn.current.type);
          if (R)
            return `

Check the render method of \`` + R + "`.";
        }
        return "";
      }
    }
    function Mi(R) {
      return "";
    }
    var Il = {};
    function Ql(R) {
      {
        var I = Da();
        if (!I) {
          var ie = typeof R == "string" ? R : R.displayName || R.name;
          ie && (I = `

Check the top-level render call using <` + ie + ">.");
        }
        return I;
      }
    }
    function Ni(R, I) {
      {
        if (!R._store || R._store.validated || R.key != null)
          return;
        R._store.validated = !0;
        var ie = Ql(I);
        if (Il[ie])
          return;
        Il[ie] = !0;
        var ce = "";
        R && R._owner && R._owner !== tn.current && (ce = " It was passed a child from " + ze(R._owner.type) + "."), zt(R), ut('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', ie, ce), zt(null);
      }
    }
    function Wl(R, I) {
      {
        if (typeof R != "object")
          return;
        if (Gn(R))
          for (var ie = 0; ie < R.length; ie++) {
            var ce = R[ie];
            ba(ce) && Ni(ce, I);
          }
        else if (ba(R))
          R._store && (R._store.validated = !0);
        else if (R) {
          var ot = Hn(R);
          if (typeof ot == "function" && ot !== R.entries)
            for (var Ye = ot.call(R), pt; !(pt = Ye.next()).done; )
              ba(pt.value) && Ni(pt.value, I);
        }
      }
    }
    function si(R) {
      {
        var I = R.type;
        if (I == null || typeof I == "string")
          return;
        var ie;
        if (typeof I == "function")
          ie = I.propTypes;
        else if (typeof I == "object" && (I.$$typeof === Se || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        I.$$typeof === B))
          ie = I.propTypes;
        else
          return;
        if (ie) {
          var ce = ze(I);
          Vn(ie, R.props, "prop", ce, R);
        } else if (I.PropTypes !== void 0 && !da) {
          da = !0;
          var ot = ze(I);
          ut("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ot || "Unknown");
        }
        typeof I.getDefaultProps == "function" && !I.getDefaultProps.isReactClassApproved && ut("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function pa(R) {
      {
        for (var I = Object.keys(R.props), ie = 0; ie < I.length; ie++) {
          var ce = I[ie];
          if (ce !== "children" && ce !== "key") {
            zt(R), ut("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", ce), zt(null);
            break;
          }
        }
        R.ref !== null && (zt(R), ut("Invalid attribute `ref` supplied to `React.Fragment`."), zt(null));
      }
    }
    var ir = {};
    function va(R, I, ie, ce, ot, Ye) {
      {
        var pt = fn(R);
        if (!pt) {
          var nt = "";
          (R === void 0 || typeof R == "object" && R !== null && Object.keys(R).length === 0) && (nt += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var En = Mi();
          En ? nt += En : nt += Da();
          var nn;
          R === null ? nn = "null" : Gn(R) ? nn = "array" : R !== void 0 && R.$$typeof === A ? (nn = "<" + (ze(R.type) || "Unknown") + " />", nt = " Did you accidentally export a JSX literal instead of a component?") : nn = typeof R, ut("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", nn, nt);
        }
        var on = Kn(R, I, ie, ot, Ye);
        if (on == null)
          return on;
        if (pt) {
          var Rr = I.children;
          if (Rr !== void 0)
            if (ce)
              if (Gn(Rr)) {
                for (var qa = 0; qa < Rr.length; qa++)
                  Wl(Rr[qa], R);
                Object.freeze && Object.freeze(Rr);
              } else
                ut("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Wl(Rr, R);
        }
        if (kn.call(I, "key")) {
          var Ut = ze(R), dn = Object.keys(I).filter(function(Ui) {
            return Ui !== "key";
          }), Ke = dn.length > 0 ? "{key: someKey, " + dn.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!ir[Ut + Ke]) {
            var di = dn.length > 0 ? "{" + dn.join(": ..., ") + ": ...}" : "{}";
            ut(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Ke, Ut, di, Ut), ir[Ut + Ke] = !0;
          }
        }
        return R === gt ? pa(on) : si(on), on;
      }
    }
    function Qr(R, I, ie) {
      return va(R, I, ie, !0);
    }
    function ci(R, I, ie) {
      return va(R, I, ie, !1);
    }
    var fi = ci, zi = Qr;
    Xp.Fragment = gt, Xp.jsx = fi, Xp.jsxs = zi;
  }(), Xp;
}
var rD = {};
rD.NODE_ENV === "production" ? cE.exports = tD() : cE.exports = nD();
var Sr = cE.exports, dE = { exports: {} }, Qa = {}, Bm = { exports: {} }, oE = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var J0;
function aD() {
  return J0 || (J0 = 1, function(X) {
    function oe($, Ee) {
      var le = $.length;
      $.push(Ee);
      e: for (; 0 < le; ) {
        var b = le - 1 >>> 1, Y = $[b];
        if (0 < gt(Y, Ee)) $[b] = Ee, $[le] = Y, le = b;
        else break e;
      }
    }
    function A($) {
      return $.length === 0 ? null : $[0];
    }
    function Xe($) {
      if ($.length === 0) return null;
      var Ee = $[0], le = $.pop();
      if (le !== Ee) {
        $[0] = le;
        e: for (var b = 0, Y = $.length, Oe = Y >>> 1; b < Oe; ) {
          var Ve = 2 * (b + 1) - 1, $e = $[Ve], it = Ve + 1, Tt = $[it];
          if (0 > gt($e, le)) it < Y && 0 > gt(Tt, $e) ? ($[b] = Tt, $[it] = le, b = it) : ($[b] = $e, $[Ve] = le, b = Ve);
          else if (it < Y && 0 > gt(Tt, le)) $[b] = Tt, $[it] = le, b = it;
          else break e;
        }
      }
      return Ee;
    }
    function gt($, Ee) {
      var le = $.sortIndex - Ee.sortIndex;
      return le !== 0 ? le : $.id - Ee.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var ft = performance;
      X.unstable_now = function() {
        return ft.now();
      };
    } else {
      var lt = Date, S = lt.now();
      X.unstable_now = function() {
        return lt.now() - S;
      };
    }
    var Ze = [], Se = [], ne = 1, se = null, B = 3, ee = !1, G = !1, de = !1, Ge = typeof setTimeout == "function" ? setTimeout : null, Hn = typeof clearTimeout == "function" ? clearTimeout : null, rn = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function ut($) {
      for (var Ee = A(Se); Ee !== null; ) {
        if (Ee.callback === null) Xe(Se);
        else if (Ee.startTime <= $) Xe(Se), Ee.sortIndex = Ee.expirationTime, oe(Ze, Ee);
        else break;
        Ee = A(Se);
      }
    }
    function Ue($) {
      if (de = !1, ut($), !G) if (A(Ze) !== null) G = !0, mt(kt);
      else {
        var Ee = A(Se);
        Ee !== null && at(Ue, Ee.startTime - $);
      }
    }
    function kt($, Ee) {
      G = !1, de && (de = !1, Hn(Pe), Pe = -1), ee = !0;
      var le = B;
      try {
        for (ut(Ee), se = A(Ze); se !== null && (!(se.expirationTime > Ee) || $ && !fn()); ) {
          var b = se.callback;
          if (typeof b == "function") {
            se.callback = null, B = se.priorityLevel;
            var Y = b(se.expirationTime <= Ee);
            Ee = X.unstable_now(), typeof Y == "function" ? se.callback = Y : se === A(Ze) && Xe(Ze), ut(Ee);
          } else Xe(Ze);
          se = A(Ze);
        }
        if (se !== null) var Oe = !0;
        else {
          var Ve = A(Se);
          Ve !== null && at(Ue, Ve.startTime - Ee), Oe = !1;
        }
        return Oe;
      } finally {
        se = null, B = le, ee = !1;
      }
    }
    var xe = !1, dt = null, Pe = -1, Sn = 5, Mt = -1;
    function fn() {
      return !(X.unstable_now() - Mt < Sn);
    }
    function $t() {
      if (dt !== null) {
        var $ = X.unstable_now();
        Mt = $;
        var Ee = !0;
        try {
          Ee = dt(!0, $);
        } finally {
          Ee ? St() : (xe = !1, dt = null);
        }
      } else xe = !1;
    }
    var St;
    if (typeof rn == "function") St = function() {
      rn($t);
    };
    else if (typeof MessageChannel < "u") {
      var ze = new MessageChannel(), At = ze.port2;
      ze.port1.onmessage = $t, St = function() {
        At.postMessage(null);
      };
    } else St = function() {
      Ge($t, 0);
    };
    function mt($) {
      dt = $, xe || (xe = !0, St());
    }
    function at($, Ee) {
      Pe = Ge(function() {
        $(X.unstable_now());
      }, Ee);
    }
    X.unstable_IdlePriority = 5, X.unstable_ImmediatePriority = 1, X.unstable_LowPriority = 4, X.unstable_NormalPriority = 3, X.unstable_Profiling = null, X.unstable_UserBlockingPriority = 2, X.unstable_cancelCallback = function($) {
      $.callback = null;
    }, X.unstable_continueExecution = function() {
      G || ee || (G = !0, mt(kt));
    }, X.unstable_forceFrameRate = function($) {
      0 > $ || 125 < $ ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Sn = 0 < $ ? Math.floor(1e3 / $) : 5;
    }, X.unstable_getCurrentPriorityLevel = function() {
      return B;
    }, X.unstable_getFirstCallbackNode = function() {
      return A(Ze);
    }, X.unstable_next = function($) {
      switch (B) {
        case 1:
        case 2:
        case 3:
          var Ee = 3;
          break;
        default:
          Ee = B;
      }
      var le = B;
      B = Ee;
      try {
        return $();
      } finally {
        B = le;
      }
    }, X.unstable_pauseExecution = function() {
    }, X.unstable_requestPaint = function() {
    }, X.unstable_runWithPriority = function($, Ee) {
      switch ($) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          $ = 3;
      }
      var le = B;
      B = $;
      try {
        return Ee();
      } finally {
        B = le;
      }
    }, X.unstable_scheduleCallback = function($, Ee, le) {
      var b = X.unstable_now();
      switch (typeof le == "object" && le !== null ? (le = le.delay, le = typeof le == "number" && 0 < le ? b + le : b) : le = b, $) {
        case 1:
          var Y = -1;
          break;
        case 2:
          Y = 250;
          break;
        case 5:
          Y = 1073741823;
          break;
        case 4:
          Y = 1e4;
          break;
        default:
          Y = 5e3;
      }
      return Y = le + Y, $ = { id: ne++, callback: Ee, priorityLevel: $, startTime: le, expirationTime: Y, sortIndex: -1 }, le > b ? ($.sortIndex = le, oe(Se, $), A(Ze) === null && $ === A(Se) && (de ? (Hn(Pe), Pe = -1) : de = !0, at(Ue, le - b))) : ($.sortIndex = Y, oe(Ze, $), G || ee || (G = !0, mt(kt))), $;
    }, X.unstable_shouldYield = fn, X.unstable_wrapCallback = function($) {
      var Ee = B;
      return function() {
        var le = B;
        B = Ee;
        try {
          return $.apply(this, arguments);
        } finally {
          B = le;
        }
      };
    };
  }(oE)), oE;
}
var sE = {}, eT;
function iD() {
  return eT || (eT = 1, function(X) {
    var oe = {};
    /**
     * @license React
     * scheduler.development.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    oe.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var A = !1, Xe = 5;
      function gt(te, Me) {
        var tt = te.length;
        te.push(Me), S(te, Me, tt);
      }
      function ft(te) {
        return te.length === 0 ? null : te[0];
      }
      function lt(te) {
        if (te.length === 0)
          return null;
        var Me = te[0], tt = te.pop();
        return tt !== Me && (te[0] = tt, Ze(te, tt, 0)), Me;
      }
      function S(te, Me, tt) {
        for (var Nt = tt; Nt > 0; ) {
          var an = Nt - 1 >>> 1, ln = te[an];
          if (Se(ln, Me) > 0)
            te[an] = Me, te[Nt] = ln, Nt = an;
          else
            return;
        }
      }
      function Ze(te, Me, tt) {
        for (var Nt = tt, an = te.length, ln = an >>> 1; Nt < ln; ) {
          var un = (Nt + 1) * 2 - 1, Kn = te[un], tn = un + 1, Yt = te[tn];
          if (Se(Kn, Me) < 0)
            tn < an && Se(Yt, Kn) < 0 ? (te[Nt] = Yt, te[tn] = Me, Nt = tn) : (te[Nt] = Kn, te[un] = Me, Nt = un);
          else if (tn < an && Se(Yt, Me) < 0)
            te[Nt] = Yt, te[tn] = Me, Nt = tn;
          else
            return;
        }
      }
      function Se(te, Me) {
        var tt = te.sortIndex - Me.sortIndex;
        return tt !== 0 ? tt : te.id - Me.id;
      }
      var ne = 1, se = 2, B = 3, ee = 4, G = 5;
      function de(te, Me) {
      }
      var Ge = typeof performance == "object" && typeof performance.now == "function";
      if (Ge) {
        var Hn = performance;
        X.unstable_now = function() {
          return Hn.now();
        };
      } else {
        var rn = Date, ut = rn.now();
        X.unstable_now = function() {
          return rn.now() - ut;
        };
      }
      var Ue = 1073741823, kt = -1, xe = 250, dt = 5e3, Pe = 1e4, Sn = Ue, Mt = [], fn = [], $t = 1, St = null, ze = B, At = !1, mt = !1, at = !1, $ = typeof setTimeout == "function" ? setTimeout : null, Ee = typeof clearTimeout == "function" ? clearTimeout : null, le = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function b(te) {
        for (var Me = ft(fn); Me !== null; ) {
          if (Me.callback === null)
            lt(fn);
          else if (Me.startTime <= te)
            lt(fn), Me.sortIndex = Me.expirationTime, gt(Mt, Me);
          else
            return;
          Me = ft(fn);
        }
      }
      function Y(te) {
        if (at = !1, b(te), !mt)
          if (ft(Mt) !== null)
            mt = !0, On(Oe);
          else {
            var Me = ft(fn);
            Me !== null && ar(Y, Me.startTime - te);
          }
      }
      function Oe(te, Me) {
        mt = !1, at && (at = !1, Ir()), At = !0;
        var tt = ze;
        try {
          var Nt;
          if (!A) return Ve(te, Me);
        } finally {
          St = null, ze = tt, At = !1;
        }
      }
      function Ve(te, Me) {
        var tt = Me;
        for (b(tt), St = ft(Mt); St !== null && !(St.expirationTime > tt && (!te || Ga())); ) {
          var Nt = St.callback;
          if (typeof Nt == "function") {
            St.callback = null, ze = St.priorityLevel;
            var an = St.expirationTime <= tt, ln = Nt(an);
            tt = X.unstable_now(), typeof ln == "function" ? St.callback = ln : St === ft(Mt) && lt(Mt), b(tt);
          } else
            lt(Mt);
          St = ft(Mt);
        }
        if (St !== null)
          return !0;
        var un = ft(fn);
        return un !== null && ar(Y, un.startTime - tt), !1;
      }
      function $e(te, Me) {
        switch (te) {
          case ne:
          case se:
          case B:
          case ee:
          case G:
            break;
          default:
            te = B;
        }
        var tt = ze;
        ze = te;
        try {
          return Me();
        } finally {
          ze = tt;
        }
      }
      function it(te) {
        var Me;
        switch (ze) {
          case ne:
          case se:
          case B:
            Me = B;
            break;
          default:
            Me = ze;
            break;
        }
        var tt = ze;
        ze = Me;
        try {
          return te();
        } finally {
          ze = tt;
        }
      }
      function Tt(te) {
        var Me = ze;
        return function() {
          var tt = ze;
          ze = Me;
          try {
            return te.apply(this, arguments);
          } finally {
            ze = tt;
          }
        };
      }
      function Qe(te, Me, tt) {
        var Nt = X.unstable_now(), an;
        if (typeof tt == "object" && tt !== null) {
          var ln = tt.delay;
          typeof ln == "number" && ln > 0 ? an = Nt + ln : an = Nt;
        } else
          an = Nt;
        var un;
        switch (te) {
          case ne:
            un = kt;
            break;
          case se:
            un = xe;
            break;
          case G:
            un = Sn;
            break;
          case ee:
            un = Pe;
            break;
          case B:
          default:
            un = dt;
            break;
        }
        var Kn = an + un, tn = {
          id: $t++,
          callback: Me,
          priorityLevel: te,
          startTime: an,
          expirationTime: Kn,
          sortIndex: -1
        };
        return an > Nt ? (tn.sortIndex = an, gt(fn, tn), ft(Mt) === null && tn === ft(fn) && (at ? Ir() : at = !0, ar(Y, an - Nt))) : (tn.sortIndex = Kn, gt(Mt, tn), !mt && !At && (mt = !0, On(Oe))), tn;
      }
      function Et() {
      }
      function Pt() {
        !mt && !At && (mt = !0, On(Oe));
      }
      function bn() {
        return ft(Mt);
      }
      function Qn(te) {
        te.callback = null;
      }
      function rr() {
        return ze;
      }
      var Dn = !1, Er = null, Pn = -1, kn = Xe, ca = -1;
      function Ga() {
        var te = X.unstable_now() - ca;
        return !(te < kn);
      }
      function Dr() {
      }
      function Vn(te) {
        if (te < 0 || te > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        te > 0 ? kn = Math.floor(1e3 / te) : kn = Xe;
      }
      var Wn = function() {
        if (Er !== null) {
          var te = X.unstable_now();
          ca = te;
          var Me = !0, tt = !0;
          try {
            tt = Er(Me, te);
          } finally {
            tt ? Gn() : (Dn = !1, Er = null);
          }
        } else
          Dn = !1;
      }, Gn;
      if (typeof le == "function")
        Gn = function() {
          le(Wn);
        };
      else if (typeof MessageChannel < "u") {
        var Cr = new MessageChannel(), Ka = Cr.port2;
        Cr.port1.onmessage = Wn, Gn = function() {
          Ka.postMessage(null);
        };
      } else
        Gn = function() {
          $(Wn, 0);
        };
      function On(te) {
        Er = te, Dn || (Dn = !0, Gn());
      }
      function ar(te, Me) {
        Pn = $(function() {
          te(X.unstable_now());
        }, Me);
      }
      function Ir() {
        Ee(Pn), Pn = -1;
      }
      var Li = Dr, fa = null;
      X.unstable_IdlePriority = G, X.unstable_ImmediatePriority = ne, X.unstable_LowPriority = ee, X.unstable_NormalPriority = B, X.unstable_Profiling = fa, X.unstable_UserBlockingPriority = se, X.unstable_cancelCallback = Qn, X.unstable_continueExecution = Pt, X.unstable_forceFrameRate = Vn, X.unstable_getCurrentPriorityLevel = rr, X.unstable_getFirstCallbackNode = bn, X.unstable_next = it, X.unstable_pauseExecution = Et, X.unstable_requestPaint = Li, X.unstable_runWithPriority = $e, X.unstable_scheduleCallback = Qe, X.unstable_shouldYield = Ga, X.unstable_wrapCallback = Tt, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(sE)), sE;
}
var tT;
function lT() {
  if (tT) return Bm.exports;
  tT = 1;
  var X = {};
  return X.NODE_ENV === "production" ? Bm.exports = aD() : Bm.exports = iD(), Bm.exports;
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
function lD() {
  if (nT) return Qa;
  nT = 1;
  var X = Yr, oe = lT();
  function A(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, l = 1; l < arguments.length; l++) r += "&args[]=" + encodeURIComponent(arguments[l]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var Xe = /* @__PURE__ */ new Set(), gt = {};
  function ft(n, r) {
    lt(n, r), lt(n + "Capture", r);
  }
  function lt(n, r) {
    for (gt[n] = r, n = 0; n < r.length; n++) Xe.add(r[n]);
  }
  var S = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Ze = Object.prototype.hasOwnProperty, Se = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, ne = {}, se = {};
  function B(n) {
    return Ze.call(se, n) ? !0 : Ze.call(ne, n) ? !1 : Se.test(n) ? se[n] = !0 : (ne[n] = !0, !1);
  }
  function ee(n, r, l, o) {
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
  function G(n, r, l, o) {
    if (r === null || typeof r > "u" || ee(n, r, l, o)) return !0;
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
  function de(n, r, l, o, c, d, m) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = o, this.attributeNamespace = c, this.mustUseProperty = l, this.propertyName = n, this.type = r, this.sanitizeURL = d, this.removeEmptyString = m;
  }
  var Ge = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    Ge[n] = new de(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    Ge[r] = new de(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    Ge[n] = new de(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    Ge[n] = new de(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    Ge[n] = new de(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    Ge[n] = new de(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    Ge[n] = new de(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    Ge[n] = new de(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    Ge[n] = new de(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var Hn = /[\-:]([a-z])/g;
  function rn(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      Hn,
      rn
    );
    Ge[r] = new de(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(Hn, rn);
    Ge[r] = new de(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(Hn, rn);
    Ge[r] = new de(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    Ge[n] = new de(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), Ge.xlinkHref = new de("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    Ge[n] = new de(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function ut(n, r, l, o) {
    var c = Ge.hasOwnProperty(r) ? Ge[r] : null;
    (c !== null ? c.type !== 0 : o || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (G(r, l, c, o) && (l = null), o || c === null ? B(r) && (l === null ? n.removeAttribute(r) : n.setAttribute(r, "" + l)) : c.mustUseProperty ? n[c.propertyName] = l === null ? c.type === 3 ? !1 : "" : l : (r = c.attributeName, o = c.attributeNamespace, l === null ? n.removeAttribute(r) : (c = c.type, l = c === 3 || c === 4 && l === !0 ? "" : "" + l, o ? n.setAttributeNS(o, r, l) : n.setAttribute(r, l))));
  }
  var Ue = X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, kt = Symbol.for("react.element"), xe = Symbol.for("react.portal"), dt = Symbol.for("react.fragment"), Pe = Symbol.for("react.strict_mode"), Sn = Symbol.for("react.profiler"), Mt = Symbol.for("react.provider"), fn = Symbol.for("react.context"), $t = Symbol.for("react.forward_ref"), St = Symbol.for("react.suspense"), ze = Symbol.for("react.suspense_list"), At = Symbol.for("react.memo"), mt = Symbol.for("react.lazy"), at = Symbol.for("react.offscreen"), $ = Symbol.iterator;
  function Ee(n) {
    return n === null || typeof n != "object" ? null : (n = $ && n[$] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var le = Object.assign, b;
  function Y(n) {
    if (b === void 0) try {
      throw Error();
    } catch (l) {
      var r = l.stack.trim().match(/\n( *(at )?)/);
      b = r && r[1] || "";
    }
    return `
` + b + n;
  }
  var Oe = !1;
  function Ve(n, r) {
    if (!n || Oe) return "";
    Oe = !0;
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
        } catch (z) {
          var o = z;
        }
        Reflect.construct(n, [], r);
      } else {
        try {
          r.call();
        } catch (z) {
          o = z;
        }
        n.call(r.prototype);
      }
      else {
        try {
          throw Error();
        } catch (z) {
          o = z;
        }
        n();
      }
    } catch (z) {
      if (z && o && typeof z.stack == "string") {
        for (var c = z.stack.split(`
`), d = o.stack.split(`
`), m = c.length - 1, E = d.length - 1; 1 <= m && 0 <= E && c[m] !== d[E]; ) E--;
        for (; 1 <= m && 0 <= E; m--, E--) if (c[m] !== d[E]) {
          if (m !== 1 || E !== 1)
            do
              if (m--, E--, 0 > E || c[m] !== d[E]) {
                var T = `
` + c[m].replace(" at new ", " at ");
                return n.displayName && T.includes("<anonymous>") && (T = T.replace("<anonymous>", n.displayName)), T;
              }
            while (1 <= m && 0 <= E);
          break;
        }
      }
    } finally {
      Oe = !1, Error.prepareStackTrace = l;
    }
    return (n = n ? n.displayName || n.name : "") ? Y(n) : "";
  }
  function $e(n) {
    switch (n.tag) {
      case 5:
        return Y(n.type);
      case 16:
        return Y("Lazy");
      case 13:
        return Y("Suspense");
      case 19:
        return Y("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = Ve(n.type, !1), n;
      case 11:
        return n = Ve(n.type.render, !1), n;
      case 1:
        return n = Ve(n.type, !0), n;
      default:
        return "";
    }
  }
  function it(n) {
    if (n == null) return null;
    if (typeof n == "function") return n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case dt:
        return "Fragment";
      case xe:
        return "Portal";
      case Sn:
        return "Profiler";
      case Pe:
        return "StrictMode";
      case St:
        return "Suspense";
      case ze:
        return "SuspenseList";
    }
    if (typeof n == "object") switch (n.$$typeof) {
      case fn:
        return (n.displayName || "Context") + ".Consumer";
      case Mt:
        return (n._context.displayName || "Context") + ".Provider";
      case $t:
        var r = n.render;
        return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
      case At:
        return r = n.displayName || null, r !== null ? r : it(n.type) || "Memo";
      case mt:
        r = n._payload, n = n._init;
        try {
          return it(n(r));
        } catch {
        }
    }
    return null;
  }
  function Tt(n) {
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
        return it(r);
      case 8:
        return r === Pe ? "StrictMode" : "Mode";
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
  function Qe(n) {
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
  function Et(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function Pt(n) {
    var r = Et(n) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), o = "" + n[r];
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
  function bn(n) {
    n._valueTracker || (n._valueTracker = Pt(n));
  }
  function Qn(n) {
    if (!n) return !1;
    var r = n._valueTracker;
    if (!r) return !0;
    var l = r.getValue(), o = "";
    return n && (o = Et(n) ? n.checked ? "true" : "false" : n.value), n = o, n !== l ? (r.setValue(n), !0) : !1;
  }
  function rr(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u") return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function Dn(n, r) {
    var l = r.checked;
    return le({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: l ?? n._wrapperState.initialChecked });
  }
  function Er(n, r) {
    var l = r.defaultValue == null ? "" : r.defaultValue, o = r.checked != null ? r.checked : r.defaultChecked;
    l = Qe(r.value != null ? r.value : l), n._wrapperState = { initialChecked: o, initialValue: l, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function Pn(n, r) {
    r = r.checked, r != null && ut(n, "checked", r, !1);
  }
  function kn(n, r) {
    Pn(n, r);
    var l = Qe(r.value), o = r.type;
    if (l != null) o === "number" ? (l === 0 && n.value === "" || n.value != l) && (n.value = "" + l) : n.value !== "" + l && (n.value = "" + l);
    else if (o === "submit" || o === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? Ga(n, r.type, l) : r.hasOwnProperty("defaultValue") && Ga(n, r.type, Qe(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function ca(n, r, l) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var o = r.type;
      if (!(o !== "submit" && o !== "reset" || r.value !== void 0 && r.value !== null)) return;
      r = "" + n._wrapperState.initialValue, l || r === n.value || (n.value = r), n.defaultValue = r;
    }
    l = n.name, l !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, l !== "" && (n.name = l);
  }
  function Ga(n, r, l) {
    (r !== "number" || rr(n.ownerDocument) !== n) && (l == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + l && (n.defaultValue = "" + l));
  }
  var Dr = Array.isArray;
  function Vn(n, r, l, o) {
    if (n = n.options, r) {
      r = {};
      for (var c = 0; c < l.length; c++) r["$" + l[c]] = !0;
      for (l = 0; l < n.length; l++) c = r.hasOwnProperty("$" + n[l].value), n[l].selected !== c && (n[l].selected = c), c && o && (n[l].defaultSelected = !0);
    } else {
      for (l = "" + Qe(l), r = null, c = 0; c < n.length; c++) {
        if (n[c].value === l) {
          n[c].selected = !0, o && (n[c].defaultSelected = !0);
          return;
        }
        r !== null || n[c].disabled || (r = n[c]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function Wn(n, r) {
    if (r.dangerouslySetInnerHTML != null) throw Error(A(91));
    return le({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function Gn(n, r) {
    var l = r.value;
    if (l == null) {
      if (l = r.children, r = r.defaultValue, l != null) {
        if (r != null) throw Error(A(92));
        if (Dr(l)) {
          if (1 < l.length) throw Error(A(93));
          l = l[0];
        }
        r = l;
      }
      r == null && (r = ""), l = r;
    }
    n._wrapperState = { initialValue: Qe(l) };
  }
  function Cr(n, r) {
    var l = Qe(r.value), o = Qe(r.defaultValue);
    l != null && (l = "" + l, l !== n.value && (n.value = l), r.defaultValue == null && n.defaultValue !== l && (n.defaultValue = l)), o != null && (n.defaultValue = "" + o);
  }
  function Ka(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function On(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function ar(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? On(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
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
  var te = {
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
  }, Me = ["Webkit", "ms", "Moz", "O"];
  Object.keys(te).forEach(function(n) {
    Me.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), te[r] = te[n];
    });
  });
  function tt(n, r, l) {
    return r == null || typeof r == "boolean" || r === "" ? "" : l || typeof r != "number" || r === 0 || te.hasOwnProperty(n) && te[n] ? ("" + r).trim() : r + "px";
  }
  function Nt(n, r) {
    n = n.style;
    for (var l in r) if (r.hasOwnProperty(l)) {
      var o = l.indexOf("--") === 0, c = tt(l, r[l], o);
      l === "float" && (l = "cssFloat"), o ? n.setProperty(l, c) : n[l] = c;
    }
  }
  var an = le({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function ln(n, r) {
    if (r) {
      if (an[n] && (r.children != null || r.dangerouslySetInnerHTML != null)) throw Error(A(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null) throw Error(A(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML)) throw Error(A(61));
      }
      if (r.style != null && typeof r.style != "object") throw Error(A(62));
    }
  }
  function un(n, r) {
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
  function tn(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var Yt = null, zt = null, da = null;
  function ba(n) {
    if (n = cs(n)) {
      if (typeof Yt != "function") throw Error(A(280));
      var r = n.stateNode;
      r && (r = Ii(r), Yt(n.stateNode, n.type, r));
    }
  }
  function Da(n) {
    zt ? da ? da.push(n) : da = [n] : zt = n;
  }
  function Mi() {
    if (zt) {
      var n = zt, r = da;
      if (da = zt = null, ba(n), r) for (n = 0; n < r.length; n++) ba(r[n]);
    }
  }
  function Il(n, r) {
    return n(r);
  }
  function Ql() {
  }
  var Ni = !1;
  function Wl(n, r, l) {
    if (Ni) return n(r, l);
    Ni = !0;
    try {
      return Il(n, r, l);
    } finally {
      Ni = !1, (zt !== null || da !== null) && (Ql(), Mi());
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
    if (l && typeof l != "function") throw Error(A(231, r, typeof l));
    return l;
  }
  var pa = !1;
  if (S) try {
    var ir = {};
    Object.defineProperty(ir, "passive", { get: function() {
      pa = !0;
    } }), window.addEventListener("test", ir, ir), window.removeEventListener("test", ir, ir);
  } catch {
    pa = !1;
  }
  function va(n, r, l, o, c, d, m, E, T) {
    var z = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(l, z);
    } catch (W) {
      this.onError(W);
    }
  }
  var Qr = !1, ci = null, fi = !1, zi = null, R = { onError: function(n) {
    Qr = !0, ci = n;
  } };
  function I(n, r, l, o, c, d, m, E, T) {
    Qr = !1, ci = null, va.apply(R, arguments);
  }
  function ie(n, r, l, o, c, d, m, E, T) {
    if (I.apply(this, arguments), Qr) {
      if (Qr) {
        var z = ci;
        Qr = !1, ci = null;
      } else throw Error(A(198));
      fi || (fi = !0, zi = z);
    }
  }
  function ce(n) {
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
  function ot(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null) return r.dehydrated;
    }
    return null;
  }
  function Ye(n) {
    if (ce(n) !== n) throw Error(A(188));
  }
  function pt(n) {
    var r = n.alternate;
    if (!r) {
      if (r = ce(n), r === null) throw Error(A(188));
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
          if (d === l) return Ye(c), n;
          if (d === o) return Ye(c), r;
          d = d.sibling;
        }
        throw Error(A(188));
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
          if (!m) throw Error(A(189));
        }
      }
      if (l.alternate !== o) throw Error(A(190));
    }
    if (l.tag !== 3) throw Error(A(188));
    return l.stateNode.current === l ? n : r;
  }
  function nt(n) {
    return n = pt(n), n !== null ? En(n) : null;
  }
  function En(n) {
    if (n.tag === 5 || n.tag === 6) return n;
    for (n = n.child; n !== null; ) {
      var r = En(n);
      if (r !== null) return r;
      n = n.sibling;
    }
    return null;
  }
  var nn = oe.unstable_scheduleCallback, on = oe.unstable_cancelCallback, Rr = oe.unstable_shouldYield, qa = oe.unstable_requestPaint, Ut = oe.unstable_now, dn = oe.unstable_getCurrentPriorityLevel, Ke = oe.unstable_ImmediatePriority, di = oe.unstable_UserBlockingPriority, Ui = oe.unstable_NormalPriority, ac = oe.unstable_LowPriority, Ai = oe.unstable_IdlePriority, ol = null, Wr = null;
  function $o(n) {
    if (Wr && typeof Wr.onCommitFiberRoot == "function") try {
      Wr.onCommitFiberRoot(ol, n, void 0, (n.current.flags & 128) === 128);
    } catch {
    }
  }
  var kr = Math.clz32 ? Math.clz32 : lc, Yo = Math.log, ic = Math.LN2;
  function lc(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (Yo(n) / ic | 0) | 0;
  }
  var Fi = 64, sl = 4194304;
  function Gr(n) {
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
      E !== 0 ? o = Gr(E) : (d &= m, d !== 0 && (o = Gr(d)));
    } else m = l & ~c, m !== 0 ? o = Gr(m) : d !== 0 && (o = Gr(d));
    if (o === 0) return 0;
    if (r !== 0 && r !== o && !(r & c) && (c = o & -o, d = r & -r, c >= d || c === 16 && (d & 4194240) !== 0)) return r;
    if (o & 4 && (o |= l & 16), r = n.entangledLanes, r !== 0) for (n = n.entanglements, r &= o; 0 < r; ) l = 31 - kr(r), c = 1 << l, o |= n[l], r &= ~c;
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
  function ju(n, r) {
    for (var l = n.suspendedLanes, o = n.pingedLanes, c = n.expirationTimes, d = n.pendingLanes; 0 < d; ) {
      var m = 31 - kr(d), E = 1 << m, T = c[m];
      T === -1 ? (!(E & l) || E & o) && (c[m] = cl(E, r)) : T <= r && (n.expiredLanes |= E), d &= ~E;
    }
  }
  function ji(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function Gl() {
    var n = Fi;
    return Fi <<= 1, !(Fi & 4194240) && (Fi = 64), n;
  }
  function Kl(n) {
    for (var r = [], l = 0; 31 > l; l++) r.push(n);
    return r;
  }
  function fl(n, r, l) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - kr(r), n[r] = l;
  }
  function Io(n, r) {
    var l = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var o = n.eventTimes;
    for (n = n.expirationTimes; 0 < l; ) {
      var c = 31 - kr(l), d = 1 << c;
      r[c] = 0, o[c] = -1, n[c] = -1, l &= ~d;
    }
  }
  function Qo(n, r) {
    var l = n.entangledLanes |= r;
    for (n = n.entanglements; l; ) {
      var o = 31 - kr(l), c = 1 << o;
      c & r | n[o] & r && (n[o] |= r), l &= ~c;
    }
  }
  var wt = 0;
  function Wo(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var Hu, xt, uc, vi, Be, ql = !1, qn = [], Kr = null, Or = null, hi = null, mn = /* @__PURE__ */ new Map(), It = /* @__PURE__ */ new Map(), Xa = [], ka = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Tr(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        Kr = null;
        break;
      case "dragenter":
      case "dragleave":
        Or = null;
        break;
      case "mouseover":
      case "mouseout":
        hi = null;
        break;
      case "pointerover":
      case "pointerout":
        mn.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        It.delete(r.pointerId);
    }
  }
  function Lr(n, r, l, o, c, d) {
    return n === null || n.nativeEvent !== d ? (n = { blockedOn: r, domEventName: l, eventSystemFlags: o, nativeEvent: d, targetContainers: [c] }, r !== null && (r = cs(r), r !== null && xt(r)), n) : (n.eventSystemFlags |= o, r = n.targetContainers, c !== null && r.indexOf(c) === -1 && r.push(c), n);
  }
  function Kf(n, r, l, o, c) {
    switch (r) {
      case "focusin":
        return Kr = Lr(Kr, n, r, l, o, c), !0;
      case "dragenter":
        return Or = Lr(Or, n, r, l, o, c), !0;
      case "mouseover":
        return hi = Lr(hi, n, r, l, o, c), !0;
      case "pointerover":
        var d = c.pointerId;
        return mn.set(d, Lr(mn.get(d) || null, n, r, l, o, c)), !0;
      case "gotpointercapture":
        return d = c.pointerId, It.set(d, Lr(It.get(d) || null, n, r, l, o, c)), !0;
    }
    return !1;
  }
  function Pu(n) {
    var r = iu(n.target);
    if (r !== null) {
      var l = ce(r);
      if (l !== null) {
        if (r = l.tag, r === 13) {
          if (r = ot(l), r !== null) {
            n.blockedOn = r, Be(n.priority, function() {
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
  function Xl(n) {
    if (n.blockedOn !== null) return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var l = Yu(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (l === null) {
        l = n.nativeEvent;
        var o = new l.constructor(l.type, l);
        Kn = o, l.target.dispatchEvent(o), Kn = null;
      } else return r = cs(l), r !== null && xt(r), n.blockedOn = l, !1;
      r.shift();
    }
    return !0;
  }
  function Vu(n, r, l) {
    Xl(n) && l.delete(r);
  }
  function Bu() {
    ql = !1, Kr !== null && Xl(Kr) && (Kr = null), Or !== null && Xl(Or) && (Or = null), hi !== null && Xl(hi) && (hi = null), mn.forEach(Vu), It.forEach(Vu);
  }
  function Zl(n, r) {
    n.blockedOn === r && (n.blockedOn = null, ql || (ql = !0, oe.unstable_scheduleCallback(oe.unstable_NormalPriority, Bu)));
  }
  function Oa(n) {
    function r(c) {
      return Zl(c, n);
    }
    if (0 < qn.length) {
      Zl(qn[0], n);
      for (var l = 1; l < qn.length; l++) {
        var o = qn[l];
        o.blockedOn === n && (o.blockedOn = null);
      }
    }
    for (Kr !== null && Zl(Kr, n), Or !== null && Zl(Or, n), hi !== null && Zl(hi, n), mn.forEach(r), It.forEach(r), l = 0; l < Xa.length; l++) o = Xa[l], o.blockedOn === n && (o.blockedOn = null);
    for (; 0 < Xa.length && (l = Xa[0], l.blockedOn === null); ) Pu(l), l.blockedOn === null && Xa.shift();
  }
  var La = Ue.ReactCurrentBatchConfig, dl = !0;
  function Hi(n, r, l, o) {
    var c = wt, d = La.transition;
    La.transition = null;
    try {
      wt = 1, pl(n, r, l, o);
    } finally {
      wt = c, La.transition = d;
    }
  }
  function $u(n, r, l, o) {
    var c = wt, d = La.transition;
    La.transition = null;
    try {
      wt = 4, pl(n, r, l, o);
    } finally {
      wt = c, La.transition = d;
    }
  }
  function pl(n, r, l, o) {
    if (dl) {
      var c = Yu(n, r, l, o);
      if (c === null) od(n, r, o, Pi, l), Tr(n, o);
      else if (Kf(c, n, r, l, o)) o.stopPropagation();
      else if (Tr(n, o), r & 4 && -1 < ka.indexOf(n)) {
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
    if (Pi = null, n = tn(o), n = iu(n), n !== null) if (r = ce(n), r === null) n = null;
    else if (l = r.tag, l === 13) {
      if (n = ot(r), n !== null) return n;
      n = null;
    } else if (l === 3) {
      if (r.stateNode.current.memoizedState.isDehydrated) return r.tag === 3 ? r.stateNode.containerInfo : null;
      n = null;
    } else r !== n && (n = null);
    return Pi = n, null;
  }
  function Go(n) {
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
        switch (dn()) {
          case Ke:
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
  var Ma = null, Iu = null, h = null;
  function C() {
    if (h) return h;
    var n, r = Iu, l = r.length, o, c = "value" in Ma ? Ma.value : Ma.textContent, d = c.length;
    for (n = 0; n < l && r[n] === c[n]; n++) ;
    var m = l - n;
    for (o = 1; o <= m && r[l - o] === c[d - o]; o++) ;
    return h = c.slice(n, 1 < o ? 1 - o : void 0);
  }
  function M(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function F() {
    return !0;
  }
  function J() {
    return !1;
  }
  function ge(n) {
    function r(l, o, c, d, m) {
      this._reactName = l, this._targetInst = c, this.type = o, this.nativeEvent = d, this.target = m, this.currentTarget = null;
      for (var E in n) n.hasOwnProperty(E) && (l = n[E], this[E] = l ? l(d) : d[E]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? F : J, this.isPropagationStopped = J, this;
    }
    return le(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var l = this.nativeEvent;
      l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = F);
    }, stopPropagation: function() {
      var l = this.nativeEvent;
      l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = F);
    }, persist: function() {
    }, isPersistent: F }), r;
  }
  var pe = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Fe = ge(pe), rt = le({}, pe, { view: 0, detail: 0 }), Ft = ge(rt), Qt, Wt, Je, Zt = le({}, rt, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Za, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== Je && (Je && n.type === "mousemove" ? (Qt = n.screenX - Je.screenX, Wt = n.screenY - Je.screenY) : Wt = Qt = 0, Je = n), Qt);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : Wt;
  } }), Cn = ge(Zt), Jl = le({}, Zt, { dataTransfer: 0 }), Ko = ge(Jl), Vi = le({}, rt, { relatedTarget: 0 }), eu = ge(Vi), qo = le({}, pe, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), qf = ge(qo), oc = le({}, pe, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), Xf = ge(oc), Jp = le({}, pe, { data: 0 }), sc = ge(Jp), ev = {
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
  function Za() {
    return Ym;
  }
  var Im = le({}, rt, { key: function(n) {
    if (n.key) {
      var r = ev[n.key] || n.key;
      if (r !== "Unidentified") return r;
    }
    return n.type === "keypress" ? (n = M(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? tv[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Za, charCode: function(n) {
    return n.type === "keypress" ? M(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? M(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), Zf = ge(Im), Jf = le({}, Zt, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), cc = ge(Jf), Qm = le({}, rt, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Za }), fc = ge(Qm), rv = le({}, pe, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), qr = ge(rv), Bi = le({}, Zt, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Ln = ge(Bi), $i = [9, 13, 27, 32], Xo = S && "CompositionEvent" in window, vl = null;
  S && "documentMode" in document && (vl = document.documentMode);
  var Wm = S && "TextEvent" in window && !vl, Qu = S && (!Xo || vl && 8 < vl && 11 >= vl), av = " ", iv = !1;
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
  function Gm(n, r) {
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
    if (Wu) return n === "compositionend" || !Xo && dc(n, r) ? (n = C(), h = Iu = Ma = null, Wu = !1, n) : null;
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
  var Km = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function ov(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!Km[n.type] : r === "textarea";
  }
  function sv(n, r, l, o) {
    Da(o), r = us(r, "onChange"), 0 < r.length && (l = new Fe("onChange", "change", null, l, o), n.push({ event: l, listeners: r }));
  }
  var Gu = null, mi = null;
  function ed(n) {
    mc(n, 0);
  }
  function Zo(n) {
    var r = De(n);
    if (Qn(r)) return n;
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
    Gu && (Gu.detachEvent("onpropertychange", vv), mi = Gu = null);
  }
  function vv(n) {
    if (n.propertyName === "value" && Zo(mi)) {
      var r = [];
      sv(r, mi, n, tn(n)), Wl(ed, r);
    }
  }
  function qm(n, r, l) {
    n === "focusin" ? (pv(), Gu = r, mi = l, Gu.attachEvent("onpropertychange", vv)) : n === "focusout" && pv();
  }
  function Xm(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown") return Zo(mi);
  }
  function hv(n, r) {
    if (n === "click") return Zo(r);
  }
  function Zm(n, r) {
    if (n === "input" || n === "change") return Zo(r);
  }
  function mv(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var Ja = typeof Object.is == "function" ? Object.is : mv;
  function Jo(n, r) {
    if (Ja(n, r)) return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null) return !1;
    var l = Object.keys(n), o = Object.keys(r);
    if (l.length !== o.length) return !1;
    for (o = 0; o < l.length; o++) {
      var c = l[o];
      if (!Ze.call(r, c) || !Ja(n[c], r[c])) return !1;
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
    for (var n = window, r = rr(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var l = typeof r.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) n = r.contentWindow;
      else break;
      r = rr(n.document);
    }
    return r;
  }
  function Ku(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function Sv(n) {
    var r = hl(), l = n.focusedElem, o = n.selectionRange;
    if (r !== l && l && l.ownerDocument && pc(l.ownerDocument.documentElement, l)) {
      if (o !== null && Ku(l)) {
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
  var qu = S && "documentMode" in document && 11 >= document.documentMode, Xu = null, rd = null, es = null, ad = !1;
  function Ev(n, r, l) {
    var o = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    ad || Xu == null || Xu !== rr(o) || (o = Xu, "selectionStart" in o && Ku(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = { anchorNode: o.anchorNode, anchorOffset: o.anchorOffset, focusNode: o.focusNode, focusOffset: o.focusOffset }), es && Jo(es, o) || (es = o, o = us(rd, "onSelect"), 0 < o.length && (r = new Fe("onSelect", "select", null, r, l), n.push({ event: r, listeners: o }), r.target = Xu)));
  }
  function ts(n, r) {
    var l = {};
    return l[n.toLowerCase()] = r.toLowerCase(), l["Webkit" + n] = "webkit" + r, l["Moz" + n] = "moz" + r, l;
  }
  var Zu = { animationend: ts("Animation", "AnimationEnd"), animationiteration: ts("Animation", "AnimationIteration"), animationstart: ts("Animation", "AnimationStart"), transitionend: ts("Transition", "TransitionEnd") }, vc = {}, wr = {};
  S && (wr = document.createElement("div").style, "AnimationEvent" in window || (delete Zu.animationend.animation, delete Zu.animationiteration.animation, delete Zu.animationstart.animation), "TransitionEvent" in window || delete Zu.transitionend.transition);
  function ns(n) {
    if (vc[n]) return vc[n];
    if (!Zu[n]) return n;
    var r = Zu[n], l;
    for (l in r) if (r.hasOwnProperty(l) && l in wr) return vc[n] = r[l];
    return n;
  }
  var Cv = ns("animationend"), Rv = ns("animationiteration"), Tv = ns("animationstart"), wv = ns("transitionend"), xv = /* @__PURE__ */ new Map(), id = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function yi(n, r) {
    xv.set(n, r), ft(r, [n]);
  }
  for (var tu = 0; tu < id.length; tu++) {
    var ld = id[tu], rs = ld.toLowerCase(), Jm = ld[0].toUpperCase() + ld.slice(1);
    yi(rs, "on" + Jm);
  }
  yi(Cv, "onAnimationEnd"), yi(Rv, "onAnimationIteration"), yi(Tv, "onAnimationStart"), yi("dblclick", "onDoubleClick"), yi("focusin", "onFocus"), yi("focusout", "onBlur"), yi(wv, "onTransitionEnd"), lt("onMouseEnter", ["mouseout", "mouseover"]), lt("onMouseLeave", ["mouseout", "mouseover"]), lt("onPointerEnter", ["pointerout", "pointerover"]), lt("onPointerLeave", ["pointerout", "pointerover"]), ft("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), ft("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), ft("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), ft("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), ft("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), ft("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var as = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), ey = new Set("cancel close invalid load scroll toggle".split(" ").concat(as));
  function hc(n, r, l) {
    var o = n.type || "unknown-event";
    n.currentTarget = l, ie(o, r, void 0, n), n.currentTarget = null;
  }
  function mc(n, r) {
    r = (r & 4) !== 0;
    for (var l = 0; l < n.length; l++) {
      var o = n[l], c = o.event;
      o = o.listeners;
      e: {
        var d = void 0;
        if (r) for (var m = o.length - 1; 0 <= m; m--) {
          var E = o[m], T = E.instance, z = E.currentTarget;
          if (E = E.listener, T !== d && c.isPropagationStopped()) break e;
          hc(c, E, z), d = T;
        }
        else for (m = 0; m < o.length; m++) {
          if (E = o[m], T = E.instance, z = E.currentTarget, E = E.listener, T !== d && c.isPropagationStopped()) break e;
          hc(c, E, z), d = T;
        }
      }
    }
    if (fi) throw n = zi, fi = !1, zi = null, n;
  }
  function jt(n, r) {
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
      n[is] = !0, Xe.forEach(function(l) {
        l !== "selectionchange" && (ey.has(l) || ml(l, !1, n), ml(l, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[is] || (r[is] = !0, ml("selectionchange", !1, r));
    }
  }
  function ud(n, r, l, o) {
    switch (Go(r)) {
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
          var T = m.tag;
          if ((T === 3 || T === 4) && (T = m.stateNode.containerInfo, T === c || T.nodeType === 8 && T.parentNode === c)) return;
          m = m.return;
        }
        for (; E !== null; ) {
          if (m = iu(E), m === null) return;
          if (T = m.tag, T === 5 || T === 6) {
            o = d = m;
            continue e;
          }
          E = E.parentNode;
        }
      }
      o = o.return;
    }
    Wl(function() {
      var z = d, W = tn(l), K = [];
      e: {
        var Q = xv.get(n);
        if (Q !== void 0) {
          var ve = Fe, Ce = n;
          switch (n) {
            case "keypress":
              if (M(l) === 0) break e;
            case "keydown":
            case "keyup":
              ve = Zf;
              break;
            case "focusin":
              Ce = "focus", ve = eu;
              break;
            case "focusout":
              Ce = "blur", ve = eu;
              break;
            case "beforeblur":
            case "afterblur":
              ve = eu;
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
              ve = Cn;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              ve = Ko;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              ve = fc;
              break;
            case Cv:
            case Rv:
            case Tv:
              ve = qf;
              break;
            case wv:
              ve = qr;
              break;
            case "scroll":
              ve = Ft;
              break;
            case "wheel":
              ve = Ln;
              break;
            case "copy":
            case "cut":
            case "paste":
              ve = Xf;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              ve = cc;
          }
          var we = (r & 4) !== 0, xn = !we && n === "scroll", D = we ? Q !== null ? Q + "Capture" : null : Q;
          we = [];
          for (var x = z, L; x !== null; ) {
            L = x;
            var Z = L.stateNode;
            if (L.tag === 5 && Z !== null && (L = Z, D !== null && (Z = si(x, D), Z != null && we.push(Ju(x, Z, L)))), xn) break;
            x = x.return;
          }
          0 < we.length && (Q = new ve(Q, Ce, null, l, W), K.push({ event: Q, listeners: we }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (Q = n === "mouseover" || n === "pointerover", ve = n === "mouseout" || n === "pointerout", Q && l !== Kn && (Ce = l.relatedTarget || l.fromElement) && (iu(Ce) || Ce[Yi])) break e;
          if ((ve || Q) && (Q = W.window === W ? W : (Q = W.ownerDocument) ? Q.defaultView || Q.parentWindow : window, ve ? (Ce = l.relatedTarget || l.toElement, ve = z, Ce = Ce ? iu(Ce) : null, Ce !== null && (xn = ce(Ce), Ce !== xn || Ce.tag !== 5 && Ce.tag !== 6) && (Ce = null)) : (ve = null, Ce = z), ve !== Ce)) {
            if (we = Cn, Z = "onMouseLeave", D = "onMouseEnter", x = "mouse", (n === "pointerout" || n === "pointerover") && (we = cc, Z = "onPointerLeave", D = "onPointerEnter", x = "pointer"), xn = ve == null ? Q : De(ve), L = Ce == null ? Q : De(Ce), Q = new we(Z, x + "leave", ve, l, W), Q.target = xn, Q.relatedTarget = L, Z = null, iu(W) === z && (we = new we(D, x + "enter", Ce, l, W), we.target = L, we.relatedTarget = xn, Z = we), xn = Z, ve && Ce) t: {
              for (we = ve, D = Ce, x = 0, L = we; L; L = nu(L)) x++;
              for (L = 0, Z = D; Z; Z = nu(Z)) L++;
              for (; 0 < x - L; ) we = nu(we), x--;
              for (; 0 < L - x; ) D = nu(D), L--;
              for (; x--; ) {
                if (we === D || D !== null && we === D.alternate) break t;
                we = nu(we), D = nu(D);
              }
              we = null;
            }
            else we = null;
            ve !== null && yc(K, Q, ve, we, !1), Ce !== null && xn !== null && yc(K, xn, Ce, we, !0);
          }
        }
        e: {
          if (Q = z ? De(z) : window, ve = Q.nodeName && Q.nodeName.toLowerCase(), ve === "select" || ve === "input" && Q.type === "file") var _e = cv;
          else if (ov(Q)) if (fv) _e = Zm;
          else {
            _e = Xm;
            var Re = qm;
          }
          else (ve = Q.nodeName) && ve.toLowerCase() === "input" && (Q.type === "checkbox" || Q.type === "radio") && (_e = hv);
          if (_e && (_e = _e(n, z))) {
            sv(K, _e, l, W);
            break e;
          }
          Re && Re(n, Q, z), n === "focusout" && (Re = Q._wrapperState) && Re.controlled && Q.type === "number" && Ga(Q, "number", Q.value);
        }
        switch (Re = z ? De(z) : window, n) {
          case "focusin":
            (ov(Re) || Re.contentEditable === "true") && (Xu = Re, rd = z, es = null);
            break;
          case "focusout":
            es = rd = Xu = null;
            break;
          case "mousedown":
            ad = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ad = !1, Ev(K, l, W);
            break;
          case "selectionchange":
            if (qu) break;
          case "keydown":
          case "keyup":
            Ev(K, l, W);
        }
        var Le;
        if (Xo) e: {
          switch (n) {
            case "compositionstart":
              var He = "onCompositionStart";
              break e;
            case "compositionend":
              He = "onCompositionEnd";
              break e;
            case "compositionupdate":
              He = "onCompositionUpdate";
              break e;
          }
          He = void 0;
        }
        else Wu ? dc(n, l) && (He = "onCompositionEnd") : n === "keydown" && l.keyCode === 229 && (He = "onCompositionStart");
        He && (Qu && l.locale !== "ko" && (Wu || He !== "onCompositionStart" ? He === "onCompositionEnd" && Wu && (Le = C()) : (Ma = W, Iu = "value" in Ma ? Ma.value : Ma.textContent, Wu = !0)), Re = us(z, He), 0 < Re.length && (He = new sc(He, n, null, l, W), K.push({ event: He, listeners: Re }), Le ? He.data = Le : (Le = lv(l), Le !== null && (He.data = Le)))), (Le = Wm ? Gm(n, l) : uv(n, l)) && (z = us(z, "onBeforeInput"), 0 < z.length && (W = new sc("onBeforeInput", "beforeinput", null, l, W), K.push({ event: W, listeners: z }), W.data = Le));
      }
      mc(K, r);
    });
  }
  function Ju(n, r, l) {
    return { instance: n, listener: r, currentTarget: l };
  }
  function us(n, r) {
    for (var l = r + "Capture", o = []; n !== null; ) {
      var c = n, d = c.stateNode;
      c.tag === 5 && d !== null && (c = d, d = si(n, l), d != null && o.unshift(Ju(n, d, c)), d = si(n, r), d != null && o.push(Ju(n, d, c))), n = n.return;
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
      var E = l, T = E.alternate, z = E.stateNode;
      if (T !== null && T === o) break;
      E.tag === 5 && z !== null && (E = z, c ? (T = si(l, d), T != null && m.unshift(Ju(l, T, E))) : c || (T = si(l, d), T != null && m.push(Ju(l, T, E)))), l = l.return;
    }
    m.length !== 0 && n.push({ event: r, listeners: m });
  }
  var ty = /\r\n?/g, _v = /\u0000|\uFFFD/g;
  function bv(n) {
    return (typeof n == "string" ? n : "" + n).replace(ty, `
`).replace(_v, "");
  }
  function gc(n, r, l) {
    if (r = bv(r), bv(n) !== r && l) throw Error(A(425));
  }
  function Sc() {
  }
  var ru = null, os = null;
  function au(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var Ec = typeof setTimeout == "function" ? setTimeout : void 0, Dv = typeof clearTimeout == "function" ? clearTimeout : void 0, Cc = typeof Promise == "function" ? Promise : void 0, ny = typeof queueMicrotask == "function" ? queueMicrotask : typeof Cc < "u" ? function(n) {
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
  var no = Math.random().toString(36).slice(2), Na = "__reactFiber$" + no, ss = "__reactProps$" + no, Yi = "__reactContainer$" + no, sd = "__reactEvents$" + no, cd = "__reactListeners$" + no, ro = "__reactHandles$" + no;
  function iu(n) {
    var r = n[Na];
    if (r) return r;
    for (var l = n.parentNode; l; ) {
      if (r = l[Yi] || l[Na]) {
        if (l = r.alternate, r.child !== null || l !== null && l.child !== null) for (n = Rc(n); n !== null; ) {
          if (l = n[Na]) return l;
          n = Rc(n);
        }
        return r;
      }
      n = l, l = n.parentNode;
    }
    return null;
  }
  function cs(n) {
    return n = n[Na] || n[Yi], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function De(n) {
    if (n.tag === 5 || n.tag === 6) return n.stateNode;
    throw Error(A(33));
  }
  function Ii(n) {
    return n[ss] || null;
  }
  var Mn = [], vt = -1;
  function Xr(n) {
    return { current: n };
  }
  function Gt(n) {
    0 > vt || (n.current = Mn[vt], Mn[vt] = null, vt--);
  }
  function Jt(n, r) {
    vt++, Mn[vt] = n.current, n.current = r;
  }
  var st = {}, yn = Xr(st), Nn = Xr(!1), za = st;
  function ha(n, r) {
    var l = n.type.contextTypes;
    if (!l) return st;
    var o = n.stateNode;
    if (o && o.__reactInternalMemoizedUnmaskedChildContext === r) return o.__reactInternalMemoizedMaskedChildContext;
    var c = {}, d;
    for (d in l) c[d] = r[d];
    return o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = c), c;
  }
  function zn(n) {
    return n = n.childContextTypes, n != null;
  }
  function gi() {
    Gt(Nn), Gt(yn);
  }
  function Tc(n, r, l) {
    if (yn.current !== st) throw Error(A(168));
    Jt(yn, r), Jt(Nn, l);
  }
  function kv(n, r, l) {
    var o = n.stateNode;
    if (r = r.childContextTypes, typeof o.getChildContext != "function") return l;
    o = o.getChildContext();
    for (var c in o) if (!(c in r)) throw Error(A(108, Tt(n) || "Unknown", c));
    return le({}, l, o);
  }
  function lu(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || st, za = yn.current, Jt(yn, n), Jt(Nn, Nn.current), !0;
  }
  function Ua(n, r, l) {
    var o = n.stateNode;
    if (!o) throw Error(A(169));
    l ? (n = kv(n, r, za), o.__reactInternalMemoizedMergedChildContext = n, Gt(Nn), Gt(yn), Jt(yn, n)) : Gt(Nn), Jt(Nn, l);
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
      var n = 0, r = wt;
      try {
        var l = ti;
        for (wt = 1; n < l.length; n++) {
          var o = l[n];
          do
            o = o(!0);
          while (o !== null);
        }
        ti = null, fs = !1;
      } catch (c) {
        throw ti !== null && (ti = ti.slice(n + 1)), nn(Ke, Mr), c;
      } finally {
        wt = r, ds = !1;
      }
    }
    return null;
  }
  var gl = [], Sl = 0, ao = null, El = 0, lr = [], Un = 0, uu = null, Nr = 1, Si = "";
  function Cl(n, r) {
    gl[Sl++] = El, gl[Sl++] = ao, ao = n, El = r;
  }
  function Ov(n, r, l) {
    lr[Un++] = Nr, lr[Un++] = Si, lr[Un++] = uu, uu = n;
    var o = Nr;
    n = Si;
    var c = 32 - kr(o) - 1;
    o &= ~(1 << c), l += 1;
    var d = 32 - kr(r) + c;
    if (30 < d) {
      var m = c - c % 5;
      d = (o & (1 << m) - 1).toString(32), o >>= m, c -= m, Nr = 1 << 32 - kr(r) + c | l << c | o, Si = d + n;
    } else Nr = 1 << d | l << c | o, Si = n;
  }
  function dd(n) {
    n.return !== null && (Cl(n, 1), Ov(n, 1, 0));
  }
  function wc(n) {
    for (; n === ao; ) ao = gl[--Sl], gl[Sl] = null, El = gl[--Sl], gl[Sl] = null;
    for (; n === uu; ) uu = lr[--Un], lr[Un] = null, Si = lr[--Un], lr[Un] = null, Nr = lr[--Un], lr[Un] = null;
  }
  var Zr = null, Jr = null, sn = !1, ni = null;
  function pd(n, r) {
    var l = Pa(5, null, null, 0);
    l.elementType = "DELETED", l.stateNode = r, l.return = n, r = n.deletions, r === null ? (n.deletions = [l], n.flags |= 16) : r.push(l);
  }
  function vd(n, r) {
    switch (n.tag) {
      case 5:
        var l = n.type;
        return r = r.nodeType !== 1 || l.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, Zr = n, Jr = ei(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, Zr = n, Jr = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (l = uu !== null ? { id: Nr, overflow: Si } : null, n.memoizedState = { dehydrated: r, treeContext: l, retryLane: 1073741824 }, l = Pa(18, null, null, 0), l.stateNode = r, l.return = n, n.child = l, Zr = n, Jr = null, !0) : !1;
      default:
        return !1;
    }
  }
  function hd(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function md(n) {
    if (sn) {
      var r = Jr;
      if (r) {
        var l = r;
        if (!vd(n, r)) {
          if (hd(n)) throw Error(A(418));
          r = ei(l.nextSibling);
          var o = Zr;
          r && vd(n, r) ? pd(o, l) : (n.flags = n.flags & -4097 | 2, sn = !1, Zr = n);
        }
      } else {
        if (hd(n)) throw Error(A(418));
        n.flags = n.flags & -4097 | 2, sn = !1, Zr = n;
      }
    }
  }
  function Lv(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; ) n = n.return;
    Zr = n;
  }
  function Rn(n) {
    if (n !== Zr) return !1;
    if (!sn) return Lv(n), sn = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !au(n.type, n.memoizedProps)), r && (r = Jr)) {
      if (hd(n)) throw Mv(), Error(A(418));
      for (; r; ) pd(n, r), r = ei(r.nextSibling);
    }
    if (Lv(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(A(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var l = n.data;
            if (l === "/$") {
              if (r === 0) {
                Jr = ei(n.nextSibling);
                break e;
              }
              r--;
            } else l !== "$" && l !== "$!" && l !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        Jr = null;
      }
    } else Jr = Zr ? ei(n.stateNode.nextSibling) : null;
    return !0;
  }
  function Mv() {
    for (var n = Jr; n; ) n = ei(n.nextSibling);
  }
  function Qi() {
    Jr = Zr = null, sn = !1;
  }
  function ps(n) {
    ni === null ? ni = [n] : ni.push(n);
  }
  var ou = Ue.ReactCurrentBatchConfig;
  function vs(n, r, l) {
    if (n = l.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (l._owner) {
        if (l = l._owner, l) {
          if (l.tag !== 1) throw Error(A(309));
          var o = l.stateNode;
        }
        if (!o) throw Error(A(147, n));
        var c = o, d = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === d ? r.ref : (r = function(m) {
          var E = c.refs;
          m === null ? delete E[d] : E[d] = m;
        }, r._stringRef = d, r);
      }
      if (typeof n != "string") throw Error(A(284));
      if (!l._owner) throw Error(A(290, n));
    }
    return n;
  }
  function io(n, r) {
    throw n = Object.prototype.toString.call(r), Error(A(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function Nv(n) {
    var r = n._init;
    return r(n._payload);
  }
  function zv(n) {
    function r(D, x) {
      if (n) {
        var L = D.deletions;
        L === null ? (D.deletions = [x], D.flags |= 16) : L.push(x);
      }
    }
    function l(D, x) {
      if (!n) return null;
      for (; x !== null; ) r(D, x), x = x.sibling;
      return null;
    }
    function o(D, x) {
      for (D = /* @__PURE__ */ new Map(); x !== null; ) x.key !== null ? D.set(x.key, x) : D.set(x.index, x), x = x.sibling;
      return D;
    }
    function c(D, x) {
      return D = Ml(D, x), D.index = 0, D.sibling = null, D;
    }
    function d(D, x, L) {
      return D.index = L, n ? (L = D.alternate, L !== null ? (L = L.index, L < x ? (D.flags |= 2, x) : L) : (D.flags |= 2, x)) : (D.flags |= 1048576, x);
    }
    function m(D) {
      return n && D.alternate === null && (D.flags |= 2), D;
    }
    function E(D, x, L, Z) {
      return x === null || x.tag !== 6 ? (x = xu(L, D.mode, Z), x.return = D, x) : (x = c(x, L), x.return = D, x);
    }
    function T(D, x, L, Z) {
      var _e = L.type;
      return _e === dt ? W(D, x, L.props.children, Z, L.key) : x !== null && (x.elementType === _e || typeof _e == "object" && _e !== null && _e.$$typeof === mt && Nv(_e) === x.type) ? (Z = c(x, L.props), Z.ref = vs(D, x, L), Z.return = D, Z) : (Z = cf(L.type, L.key, L.props, null, D.mode, Z), Z.ref = vs(D, x, L), Z.return = D, Z);
    }
    function z(D, x, L, Z) {
      return x === null || x.tag !== 4 || x.stateNode.containerInfo !== L.containerInfo || x.stateNode.implementation !== L.implementation ? (x = Wd(L, D.mode, Z), x.return = D, x) : (x = c(x, L.children || []), x.return = D, x);
    }
    function W(D, x, L, Z, _e) {
      return x === null || x.tag !== 7 ? (x = Nl(L, D.mode, Z, _e), x.return = D, x) : (x = c(x, L), x.return = D, x);
    }
    function K(D, x, L) {
      if (typeof x == "string" && x !== "" || typeof x == "number") return x = xu("" + x, D.mode, L), x.return = D, x;
      if (typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case kt:
            return L = cf(x.type, x.key, x.props, null, D.mode, L), L.ref = vs(D, null, x), L.return = D, L;
          case xe:
            return x = Wd(x, D.mode, L), x.return = D, x;
          case mt:
            var Z = x._init;
            return K(D, Z(x._payload), L);
        }
        if (Dr(x) || Ee(x)) return x = Nl(x, D.mode, L, null), x.return = D, x;
        io(D, x);
      }
      return null;
    }
    function Q(D, x, L, Z) {
      var _e = x !== null ? x.key : null;
      if (typeof L == "string" && L !== "" || typeof L == "number") return _e !== null ? null : E(D, x, "" + L, Z);
      if (typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case kt:
            return L.key === _e ? T(D, x, L, Z) : null;
          case xe:
            return L.key === _e ? z(D, x, L, Z) : null;
          case mt:
            return _e = L._init, Q(
              D,
              x,
              _e(L._payload),
              Z
            );
        }
        if (Dr(L) || Ee(L)) return _e !== null ? null : W(D, x, L, Z, null);
        io(D, L);
      }
      return null;
    }
    function ve(D, x, L, Z, _e) {
      if (typeof Z == "string" && Z !== "" || typeof Z == "number") return D = D.get(L) || null, E(x, D, "" + Z, _e);
      if (typeof Z == "object" && Z !== null) {
        switch (Z.$$typeof) {
          case kt:
            return D = D.get(Z.key === null ? L : Z.key) || null, T(x, D, Z, _e);
          case xe:
            return D = D.get(Z.key === null ? L : Z.key) || null, z(x, D, Z, _e);
          case mt:
            var Re = Z._init;
            return ve(D, x, L, Re(Z._payload), _e);
        }
        if (Dr(Z) || Ee(Z)) return D = D.get(L) || null, W(x, D, Z, _e, null);
        io(x, Z);
      }
      return null;
    }
    function Ce(D, x, L, Z) {
      for (var _e = null, Re = null, Le = x, He = x = 0, tr = null; Le !== null && He < L.length; He++) {
        Le.index > He ? (tr = Le, Le = null) : tr = Le.sibling;
        var Dt = Q(D, Le, L[He], Z);
        if (Dt === null) {
          Le === null && (Le = tr);
          break;
        }
        n && Le && Dt.alternate === null && r(D, Le), x = d(Dt, x, He), Re === null ? _e = Dt : Re.sibling = Dt, Re = Dt, Le = tr;
      }
      if (He === L.length) return l(D, Le), sn && Cl(D, He), _e;
      if (Le === null) {
        for (; He < L.length; He++) Le = K(D, L[He], Z), Le !== null && (x = d(Le, x, He), Re === null ? _e = Le : Re.sibling = Le, Re = Le);
        return sn && Cl(D, He), _e;
      }
      for (Le = o(D, Le); He < L.length; He++) tr = ve(Le, D, He, L[He], Z), tr !== null && (n && tr.alternate !== null && Le.delete(tr.key === null ? He : tr.key), x = d(tr, x, He), Re === null ? _e = tr : Re.sibling = tr, Re = tr);
      return n && Le.forEach(function(zl) {
        return r(D, zl);
      }), sn && Cl(D, He), _e;
    }
    function we(D, x, L, Z) {
      var _e = Ee(L);
      if (typeof _e != "function") throw Error(A(150));
      if (L = _e.call(L), L == null) throw Error(A(151));
      for (var Re = _e = null, Le = x, He = x = 0, tr = null, Dt = L.next(); Le !== null && !Dt.done; He++, Dt = L.next()) {
        Le.index > He ? (tr = Le, Le = null) : tr = Le.sibling;
        var zl = Q(D, Le, Dt.value, Z);
        if (zl === null) {
          Le === null && (Le = tr);
          break;
        }
        n && Le && zl.alternate === null && r(D, Le), x = d(zl, x, He), Re === null ? _e = zl : Re.sibling = zl, Re = zl, Le = tr;
      }
      if (Dt.done) return l(
        D,
        Le
      ), sn && Cl(D, He), _e;
      if (Le === null) {
        for (; !Dt.done; He++, Dt = L.next()) Dt = K(D, Dt.value, Z), Dt !== null && (x = d(Dt, x, He), Re === null ? _e = Dt : Re.sibling = Dt, Re = Dt);
        return sn && Cl(D, He), _e;
      }
      for (Le = o(D, Le); !Dt.done; He++, Dt = L.next()) Dt = ve(Le, D, He, Dt.value, Z), Dt !== null && (n && Dt.alternate !== null && Le.delete(Dt.key === null ? He : Dt.key), x = d(Dt, x, He), Re === null ? _e = Dt : Re.sibling = Dt, Re = Dt);
      return n && Le.forEach(function(yy) {
        return r(D, yy);
      }), sn && Cl(D, He), _e;
    }
    function xn(D, x, L, Z) {
      if (typeof L == "object" && L !== null && L.type === dt && L.key === null && (L = L.props.children), typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case kt:
            e: {
              for (var _e = L.key, Re = x; Re !== null; ) {
                if (Re.key === _e) {
                  if (_e = L.type, _e === dt) {
                    if (Re.tag === 7) {
                      l(D, Re.sibling), x = c(Re, L.props.children), x.return = D, D = x;
                      break e;
                    }
                  } else if (Re.elementType === _e || typeof _e == "object" && _e !== null && _e.$$typeof === mt && Nv(_e) === Re.type) {
                    l(D, Re.sibling), x = c(Re, L.props), x.ref = vs(D, Re, L), x.return = D, D = x;
                    break e;
                  }
                  l(D, Re);
                  break;
                } else r(D, Re);
                Re = Re.sibling;
              }
              L.type === dt ? (x = Nl(L.props.children, D.mode, Z, L.key), x.return = D, D = x) : (Z = cf(L.type, L.key, L.props, null, D.mode, Z), Z.ref = vs(D, x, L), Z.return = D, D = Z);
            }
            return m(D);
          case xe:
            e: {
              for (Re = L.key; x !== null; ) {
                if (x.key === Re) if (x.tag === 4 && x.stateNode.containerInfo === L.containerInfo && x.stateNode.implementation === L.implementation) {
                  l(D, x.sibling), x = c(x, L.children || []), x.return = D, D = x;
                  break e;
                } else {
                  l(D, x);
                  break;
                }
                else r(D, x);
                x = x.sibling;
              }
              x = Wd(L, D.mode, Z), x.return = D, D = x;
            }
            return m(D);
          case mt:
            return Re = L._init, xn(D, x, Re(L._payload), Z);
        }
        if (Dr(L)) return Ce(D, x, L, Z);
        if (Ee(L)) return we(D, x, L, Z);
        io(D, L);
      }
      return typeof L == "string" && L !== "" || typeof L == "number" ? (L = "" + L, x !== null && x.tag === 6 ? (l(D, x.sibling), x = c(x, L), x.return = D, D = x) : (l(D, x), x = xu(L, D.mode, Z), x.return = D, D = x), m(D)) : l(D, x);
    }
    return xn;
  }
  var ri = zv(!0), ur = zv(!1), ae = Xr(null), ma = null, xr = null, yd = null;
  function gd() {
    yd = xr = ma = null;
  }
  function Sd(n) {
    var r = ae.current;
    Gt(ae), n._currentValue = r;
  }
  function Ed(n, r, l) {
    for (; n !== null; ) {
      var o = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, o !== null && (o.childLanes |= r)) : o !== null && (o.childLanes & r) !== r && (o.childLanes |= r), n === l) break;
      n = n.return;
    }
  }
  function lo(n, r) {
    ma = n, yd = xr = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (Jn = !0), n.firstContext = null);
  }
  function Vt(n) {
    var r = n._currentValue;
    if (yd !== n) if (n = { context: n, memoizedValue: r, next: null }, xr === null) {
      if (ma === null) throw Error(A(308));
      xr = n, ma.dependencies = { lanes: 0, firstContext: n };
    } else xr = xr.next = n;
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
    if (o = o.shared, ht & 2) {
      var c = o.pending;
      return c === null ? r.next = r : (r.next = c.next, c.next = r), o.pending = r, Ei(n, l);
    }
    return c = o.interleaved, c === null ? (r.next = r, Cd(o)) : (r.next = c.next, c.next = r), o.interleaved = r, Ei(n, l);
  }
  function xc(n, r, l) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (l & 4194240) !== 0)) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, Qo(n, l);
    }
  }
  function Fv(n, r) {
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
  function _c(n, r, l, o) {
    var c = n.updateQueue;
    Aa = !1;
    var d = c.firstBaseUpdate, m = c.lastBaseUpdate, E = c.shared.pending;
    if (E !== null) {
      c.shared.pending = null;
      var T = E, z = T.next;
      T.next = null, m === null ? d = z : m.next = z, m = T;
      var W = n.alternate;
      W !== null && (W = W.updateQueue, E = W.lastBaseUpdate, E !== m && (E === null ? W.firstBaseUpdate = z : E.next = z, W.lastBaseUpdate = T));
    }
    if (d !== null) {
      var K = c.baseState;
      m = 0, W = z = T = null, E = d;
      do {
        var Q = E.lane, ve = E.eventTime;
        if ((o & Q) === Q) {
          W !== null && (W = W.next = {
            eventTime: ve,
            lane: 0,
            tag: E.tag,
            payload: E.payload,
            callback: E.callback,
            next: null
          });
          e: {
            var Ce = n, we = E;
            switch (Q = r, ve = l, we.tag) {
              case 1:
                if (Ce = we.payload, typeof Ce == "function") {
                  K = Ce.call(ve, K, Q);
                  break e;
                }
                K = Ce;
                break e;
              case 3:
                Ce.flags = Ce.flags & -65537 | 128;
              case 0:
                if (Ce = we.payload, Q = typeof Ce == "function" ? Ce.call(ve, K, Q) : Ce, Q == null) break e;
                K = le({}, K, Q);
                break e;
              case 2:
                Aa = !0;
            }
          }
          E.callback !== null && E.lane !== 0 && (n.flags |= 64, Q = c.effects, Q === null ? c.effects = [E] : Q.push(E));
        } else ve = { eventTime: ve, lane: Q, tag: E.tag, payload: E.payload, callback: E.callback, next: null }, W === null ? (z = W = ve, T = K) : W = W.next = ve, m |= Q;
        if (E = E.next, E === null) {
          if (E = c.shared.pending, E === null) break;
          Q = E, E = Q.next, Q.next = null, c.lastBaseUpdate = Q, c.shared.pending = null;
        }
      } while (!0);
      if (W === null && (T = K), c.baseState = T, c.firstBaseUpdate = z, c.lastBaseUpdate = W, r = c.shared.interleaved, r !== null) {
        c = r;
        do
          m |= c.lane, c = c.next;
        while (c !== r);
      } else d === null && (c.shared.lanes = 0);
      Su |= m, n.lanes = m, n.memoizedState = K;
    }
  }
  function Rd(n, r, l) {
    if (n = r.effects, r.effects = null, n !== null) for (r = 0; r < n.length; r++) {
      var o = n[r], c = o.callback;
      if (c !== null) {
        if (o.callback = null, o = l, typeof c != "function") throw Error(A(191, c));
        c.call(o);
      }
    }
  }
  var uo = {}, Ci = Xr(uo), hs = Xr(uo), ms = Xr(uo);
  function cu(n) {
    if (n === uo) throw Error(A(174));
    return n;
  }
  function Td(n, r) {
    switch (Jt(ms, r), Jt(hs, n), Jt(Ci, uo), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : ar(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = ar(r, n);
    }
    Gt(Ci), Jt(Ci, r);
  }
  function oo() {
    Gt(Ci), Gt(hs), Gt(ms);
  }
  function wd(n) {
    cu(ms.current);
    var r = cu(Ci.current), l = ar(r, n.type);
    r !== l && (Jt(hs, n), Jt(Ci, l));
  }
  function xd(n) {
    hs.current === n && (Gt(Ci), Gt(hs));
  }
  var pn = Xr(0);
  function bc(n) {
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
  var _d = [];
  function ys() {
    for (var n = 0; n < _d.length; n++) _d[n]._workInProgressVersionPrimary = null;
    _d.length = 0;
  }
  var ke = Ue.ReactCurrentDispatcher, ct = Ue.ReactCurrentBatchConfig, Ct = 0, qe = null, Kt = null, Bn = null, Dc = !1, gs = !1, Ss = 0, bd = 0;
  function P() {
    throw Error(A(321));
  }
  function An(n, r) {
    if (r === null) return !1;
    for (var l = 0; l < r.length && l < n.length; l++) if (!Ja(n[l], r[l])) return !1;
    return !0;
  }
  function Ae(n, r, l, o, c, d) {
    if (Ct = d, qe = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, ke.current = n === null || n.memoizedState === null ? $c : Yc, n = l(o, c), gs) {
      d = 0;
      do {
        if (gs = !1, Ss = 0, 25 <= d) throw Error(A(301));
        d += 1, Bn = Kt = null, r.updateQueue = null, ke.current = ws, n = l(o, c);
      } while (gs);
    }
    if (ke.current = Bt, r = Kt !== null && Kt.next !== null, Ct = 0, Bn = Kt = qe = null, Dc = !1, r) throw Error(A(300));
    return n;
  }
  function wl() {
    var n = Ss !== 0;
    return Ss = 0, n;
  }
  function Xn() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Bn === null ? qe.memoizedState = Bn = n : Bn = Bn.next = n, Bn;
  }
  function Zn() {
    if (Kt === null) {
      var n = qe.alternate;
      n = n !== null ? n.memoizedState : null;
    } else n = Kt.next;
    var r = Bn === null ? qe.memoizedState : Bn.next;
    if (r !== null) Bn = r, Kt = n;
    else {
      if (n === null) throw Error(A(310));
      Kt = n, n = { memoizedState: Kt.memoizedState, baseState: Kt.baseState, baseQueue: Kt.baseQueue, queue: Kt.queue, next: null }, Bn === null ? qe.memoizedState = Bn = n : Bn = Bn.next = n;
    }
    return Bn;
  }
  function ea(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function fu(n) {
    var r = Zn(), l = r.queue;
    if (l === null) throw Error(A(311));
    l.lastRenderedReducer = n;
    var o = Kt, c = o.baseQueue, d = l.pending;
    if (d !== null) {
      if (c !== null) {
        var m = c.next;
        c.next = d.next, d.next = m;
      }
      o.baseQueue = c = d, l.pending = null;
    }
    if (c !== null) {
      d = c.next, o = o.baseState;
      var E = m = null, T = null, z = d;
      do {
        var W = z.lane;
        if ((Ct & W) === W) T !== null && (T = T.next = { lane: 0, action: z.action, hasEagerState: z.hasEagerState, eagerState: z.eagerState, next: null }), o = z.hasEagerState ? z.eagerState : n(o, z.action);
        else {
          var K = {
            lane: W,
            action: z.action,
            hasEagerState: z.hasEagerState,
            eagerState: z.eagerState,
            next: null
          };
          T === null ? (E = T = K, m = o) : T = T.next = K, qe.lanes |= W, Su |= W;
        }
        z = z.next;
      } while (z !== null && z !== d);
      T === null ? m = o : T.next = E, Ja(o, r.memoizedState) || (Jn = !0), r.memoizedState = o, r.baseState = m, r.baseQueue = T, l.lastRenderedState = o;
    }
    if (n = l.interleaved, n !== null) {
      c = n;
      do
        d = c.lane, qe.lanes |= d, Su |= d, c = c.next;
      while (c !== n);
    } else c === null && (l.lanes = 0);
    return [r.memoizedState, l.dispatch];
  }
  function xl(n) {
    var r = Zn(), l = r.queue;
    if (l === null) throw Error(A(311));
    l.lastRenderedReducer = n;
    var o = l.dispatch, c = l.pending, d = r.memoizedState;
    if (c !== null) {
      l.pending = null;
      var m = c = c.next;
      do
        d = n(d, m.action), m = m.next;
      while (m !== c);
      Ja(d, r.memoizedState) || (Jn = !0), r.memoizedState = d, r.baseQueue === null && (r.baseState = d), l.lastRenderedState = d;
    }
    return [d, o];
  }
  function so() {
  }
  function kc(n, r) {
    var l = qe, o = Zn(), c = r(), d = !Ja(o.memoizedState, c);
    if (d && (o.memoizedState = c, Jn = !0), o = o.queue, Es(Mc.bind(null, l, o, n), [n]), o.getSnapshot !== r || d || Bn !== null && Bn.memoizedState.tag & 1) {
      if (l.flags |= 2048, du(9, Lc.bind(null, l, o, c, r), void 0, null), Fn === null) throw Error(A(349));
      Ct & 30 || Oc(l, r, c);
    }
    return c;
  }
  function Oc(n, r, l) {
    n.flags |= 16384, n = { getSnapshot: r, value: l }, r = qe.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, qe.updateQueue = r, r.stores = [n]) : (l = r.stores, l === null ? r.stores = [n] : l.push(n));
  }
  function Lc(n, r, l, o) {
    r.value = l, r.getSnapshot = o, Nc(r) && zc(n);
  }
  function Mc(n, r, l) {
    return l(function() {
      Nc(r) && zc(n);
    });
  }
  function Nc(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var l = r();
      return !Ja(n, l);
    } catch {
      return !0;
    }
  }
  function zc(n) {
    var r = Ei(n, 1);
    r !== null && Ca(r, n, 1, -1);
  }
  function Uc(n) {
    var r = Xn();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: ea, lastRenderedState: n }, r.queue = n, n = n.dispatch = Ts.bind(null, qe, n), [r.memoizedState, n];
  }
  function du(n, r, l, o) {
    return n = { tag: n, create: r, destroy: l, deps: o, next: null }, r = qe.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, qe.updateQueue = r, r.lastEffect = n.next = n) : (l = r.lastEffect, l === null ? r.lastEffect = n.next = n : (o = l.next, l.next = n, n.next = o, r.lastEffect = n)), n;
  }
  function Ac() {
    return Zn().memoizedState;
  }
  function co(n, r, l, o) {
    var c = Xn();
    qe.flags |= n, c.memoizedState = du(1 | r, l, void 0, o === void 0 ? null : o);
  }
  function fo(n, r, l, o) {
    var c = Zn();
    o = o === void 0 ? null : o;
    var d = void 0;
    if (Kt !== null) {
      var m = Kt.memoizedState;
      if (d = m.destroy, o !== null && An(o, m.deps)) {
        c.memoizedState = du(r, l, d, o);
        return;
      }
    }
    qe.flags |= n, c.memoizedState = du(1 | r, l, d, o);
  }
  function Fc(n, r) {
    return co(8390656, 8, n, r);
  }
  function Es(n, r) {
    return fo(2048, 8, n, r);
  }
  function jc(n, r) {
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
    var l = Zn();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && An(r, o[1]) ? o[0] : (l.memoizedState = [n, r], n);
  }
  function Vc(n, r) {
    var l = Zn();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && An(r, o[1]) ? o[0] : (n = n(), l.memoizedState = [n, r], n);
  }
  function Bc(n, r, l) {
    return Ct & 21 ? (Ja(l, r) || (l = Gl(), qe.lanes |= l, Su |= l, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, Jn = !0), n.memoizedState = l);
  }
  function jv(n, r) {
    var l = wt;
    wt = l !== 0 && 4 > l ? l : 4, n(!0);
    var o = ct.transition;
    ct.transition = {};
    try {
      n(!1), r();
    } finally {
      wt = l, ct.transition = o;
    }
  }
  function po() {
    return Zn().memoizedState;
  }
  function Hv(n, r, l) {
    var o = Ea(n);
    if (l = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null }, _l(n)) ya(r, l);
    else if (l = Uv(n, r, l, o), l !== null) {
      var c = en();
      Ca(l, n, o, c), Pv(l, r, o);
    }
  }
  function Ts(n, r, l) {
    var o = Ea(n), c = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null };
    if (_l(n)) ya(r, c);
    else {
      var d = n.alternate;
      if (n.lanes === 0 && (d === null || d.lanes === 0) && (d = r.lastRenderedReducer, d !== null)) try {
        var m = r.lastRenderedState, E = d(m, l);
        if (c.hasEagerState = !0, c.eagerState = E, Ja(E, m)) {
          var T = r.interleaved;
          T === null ? (c.next = c, Cd(r)) : (c.next = T.next, T.next = c), r.interleaved = c;
          return;
        }
      } catch {
      } finally {
      }
      l = Uv(n, r, c, o), l !== null && (c = en(), Ca(l, n, o, c), Pv(l, r, o));
    }
  }
  function _l(n) {
    var r = n.alternate;
    return n === qe || r !== null && r === qe;
  }
  function ya(n, r) {
    gs = Dc = !0;
    var l = n.pending;
    l === null ? r.next = r : (r.next = l.next, l.next = r), n.pending = r;
  }
  function Pv(n, r, l) {
    if (l & 4194240) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, Qo(n, l);
    }
  }
  var Bt = { readContext: Vt, useCallback: P, useContext: P, useEffect: P, useImperativeHandle: P, useInsertionEffect: P, useLayoutEffect: P, useMemo: P, useReducer: P, useRef: P, useState: P, useDebugValue: P, useDeferredValue: P, useTransition: P, useMutableSource: P, useSyncExternalStore: P, useId: P, unstable_isNewReconciler: !1 }, $c = { readContext: Vt, useCallback: function(n, r) {
    return Xn().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: Vt, useEffect: Fc, useImperativeHandle: function(n, r, l) {
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
    var l = Xn();
    return r = r === void 0 ? null : r, n = n(), l.memoizedState = [n, r], n;
  }, useReducer: function(n, r, l) {
    var o = Xn();
    return r = l !== void 0 ? l(r) : r, o.memoizedState = o.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, o.queue = n, n = n.dispatch = Hv.bind(null, qe, n), [o.memoizedState, n];
  }, useRef: function(n) {
    var r = Xn();
    return n = { current: n }, r.memoizedState = n;
  }, useState: Uc, useDebugValue: Rs, useDeferredValue: function(n) {
    return Xn().memoizedState = n;
  }, useTransition: function() {
    var n = Uc(!1), r = n[0];
    return n = jv.bind(null, n[1]), Xn().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, l) {
    var o = qe, c = Xn();
    if (sn) {
      if (l === void 0) throw Error(A(407));
      l = l();
    } else {
      if (l = r(), Fn === null) throw Error(A(349));
      Ct & 30 || Oc(o, r, l);
    }
    c.memoizedState = l;
    var d = { value: l, getSnapshot: r };
    return c.queue = d, Fc(Mc.bind(
      null,
      o,
      d,
      n
    ), [n]), o.flags |= 2048, du(9, Lc.bind(null, o, d, l, r), void 0, null), l;
  }, useId: function() {
    var n = Xn(), r = Fn.identifierPrefix;
    if (sn) {
      var l = Si, o = Nr;
      l = (o & ~(1 << 32 - kr(o) - 1)).toString(32) + l, r = ":" + r + "R" + l, l = Ss++, 0 < l && (r += "H" + l.toString(32)), r += ":";
    } else l = bd++, r = ":" + r + "r" + l.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, Yc = {
    readContext: Vt,
    useCallback: Pc,
    useContext: Vt,
    useEffect: Es,
    useImperativeHandle: pu,
    useInsertionEffect: jc,
    useLayoutEffect: Hc,
    useMemo: Vc,
    useReducer: fu,
    useRef: Ac,
    useState: function() {
      return fu(ea);
    },
    useDebugValue: Rs,
    useDeferredValue: function(n) {
      var r = Zn();
      return Bc(r, Kt.memoizedState, n);
    },
    useTransition: function() {
      var n = fu(ea)[0], r = Zn().memoizedState;
      return [n, r];
    },
    useMutableSource: so,
    useSyncExternalStore: kc,
    useId: po,
    unstable_isNewReconciler: !1
  }, ws = { readContext: Vt, useCallback: Pc, useContext: Vt, useEffect: Es, useImperativeHandle: pu, useInsertionEffect: jc, useLayoutEffect: Hc, useMemo: Vc, useReducer: xl, useRef: Ac, useState: function() {
    return xl(ea);
  }, useDebugValue: Rs, useDeferredValue: function(n) {
    var r = Zn();
    return Kt === null ? r.memoizedState = n : Bc(r, Kt.memoizedState, n);
  }, useTransition: function() {
    var n = xl(ea)[0], r = Zn().memoizedState;
    return [n, r];
  }, useMutableSource: so, useSyncExternalStore: kc, useId: po, unstable_isNewReconciler: !1 };
  function ta(n, r) {
    if (n && n.defaultProps) {
      r = le({}, r), n = n.defaultProps;
      for (var l in n) r[l] === void 0 && (r[l] = n[l]);
      return r;
    }
    return r;
  }
  function Dd(n, r, l, o) {
    r = n.memoizedState, l = l(o, r), l = l == null ? r : le({}, r, l), n.memoizedState = l, n.lanes === 0 && (n.updateQueue.baseState = l);
  }
  var Ic = { isMounted: function(n) {
    return (n = n._reactInternals) ? ce(n) === n : !1;
  }, enqueueSetState: function(n, r, l) {
    n = n._reactInternals;
    var o = en(), c = Ea(n), d = Wi(o, c);
    d.payload = r, l != null && (d.callback = l), r = Tl(n, d, c), r !== null && (Ca(r, n, c, o), xc(r, n, c));
  }, enqueueReplaceState: function(n, r, l) {
    n = n._reactInternals;
    var o = en(), c = Ea(n), d = Wi(o, c);
    d.tag = 1, d.payload = r, l != null && (d.callback = l), r = Tl(n, d, c), r !== null && (Ca(r, n, c, o), xc(r, n, c));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var l = en(), o = Ea(n), c = Wi(l, o);
    c.tag = 2, r != null && (c.callback = r), r = Tl(n, c, o), r !== null && (Ca(r, n, o, l), xc(r, n, o));
  } };
  function Vv(n, r, l, o, c, d, m) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(o, d, m) : r.prototype && r.prototype.isPureReactComponent ? !Jo(l, o) || !Jo(c, d) : !0;
  }
  function Bv(n, r, l) {
    var o = !1, c = st, d = r.contextType;
    return typeof d == "object" && d !== null ? d = Vt(d) : (c = zn(r) ? za : yn.current, o = r.contextTypes, d = (o = o != null) ? ha(n, c) : st), r = new r(l, d), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = Ic, n.stateNode = r, r._reactInternals = n, o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = d), r;
  }
  function Qc(n, r, l, o) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(l, o), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(l, o), r.state !== n && Ic.enqueueReplaceState(r, r.state, null);
  }
  function kd(n, r, l, o) {
    var c = n.stateNode;
    c.props = l, c.state = n.memoizedState, c.refs = {}, Rl(n);
    var d = r.contextType;
    typeof d == "object" && d !== null ? c.context = Vt(d) : (d = zn(r) ? za : yn.current, c.context = ha(n, d)), c.state = n.memoizedState, d = r.getDerivedStateFromProps, typeof d == "function" && (Dd(n, r, d, l), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && Ic.enqueueReplaceState(c, c.state, null), _c(n, l, c, o), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function bl(n, r) {
    try {
      var l = "", o = r;
      do
        l += $e(o), o = o.return;
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
  function xs(n, r, l) {
    l = Wi(-1, l), l.tag = 3, l.payload = { element: null };
    var o = r.value;
    return l.callback = function() {
      kl || (kl = !0, Ns = o), Od(n, r);
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
  function Md(n) {
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
  var vu = Ue.ReactCurrentOwner, Jn = !1;
  function Tn(n, r, l, o) {
    r.child = n === null ? ur(r, null, l, o) : ri(r, n.child, l, o);
  }
  function Gc(n, r, l, o, c) {
    l = l.render;
    var d = r.ref;
    return lo(r, c), o = Ae(n, r, l, o, d, c), l = wl(), n !== null && !Jn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, or(n, r, c)) : (sn && l && dd(r), r.flags |= 1, Tn(n, r, o, c), r.child);
  }
  function na(n, r, l, o, c) {
    if (n === null) {
      var d = l.type;
      return typeof d == "function" && !Qd(d) && d.defaultProps === void 0 && l.compare === null && l.defaultProps === void 0 ? (r.tag = 15, r.type = d, hu(n, r, d, o, c)) : (n = cf(l.type, null, o, r, r.mode, c), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (d = n.child, !(n.lanes & c)) {
      var m = d.memoizedProps;
      if (l = l.compare, l = l !== null ? l : Jo, l(m, o) && n.ref === r.ref) return or(n, r, c);
    }
    return r.flags |= 1, n = Ml(d, o), n.ref = r.ref, n.return = r, r.child = n;
  }
  function hu(n, r, l, o, c) {
    if (n !== null) {
      var d = n.memoizedProps;
      if (Jo(d, o) && n.ref === r.ref) if (Jn = !1, r.pendingProps = o = d, (n.lanes & c) !== 0) n.flags & 131072 && (Jn = !0);
      else return r.lanes = n.lanes, or(n, r, c);
    }
    return Kc(n, r, l, o, c);
  }
  function et(n, r, l) {
    var o = r.pendingProps, c = o.children, d = n !== null ? n.memoizedState : null;
    if (o.mode === "hidden") if (!(r.mode & 1)) r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Jt(yo, Sa), Sa |= l;
    else {
      if (!(l & 1073741824)) return n = d !== null ? d.baseLanes | l : l, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, Jt(yo, Sa), Sa |= n, null;
      r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, o = d !== null ? d.baseLanes : l, Jt(yo, Sa), Sa |= o;
    }
    else d !== null ? (o = d.baseLanes | l, r.memoizedState = null) : o = l, Jt(yo, Sa), Sa |= o;
    return Tn(n, r, c, l), r.child;
  }
  function _s(n, r) {
    var l = r.ref;
    (n === null && l !== null || n !== null && n.ref !== l) && (r.flags |= 512, r.flags |= 2097152);
  }
  function Kc(n, r, l, o, c) {
    var d = zn(l) ? za : yn.current;
    return d = ha(r, d), lo(r, c), l = Ae(n, r, l, o, d, c), o = wl(), n !== null && !Jn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, or(n, r, c)) : (sn && o && dd(r), r.flags |= 1, Tn(n, r, l, c), r.child);
  }
  function ay(n, r, l, o, c) {
    if (zn(l)) {
      var d = !0;
      lu(r);
    } else d = !1;
    if (lo(r, c), r.stateNode === null) Fa(n, r), Bv(r, l, o), kd(r, l, o, c), o = !0;
    else if (n === null) {
      var m = r.stateNode, E = r.memoizedProps;
      m.props = E;
      var T = m.context, z = l.contextType;
      typeof z == "object" && z !== null ? z = Vt(z) : (z = zn(l) ? za : yn.current, z = ha(r, z));
      var W = l.getDerivedStateFromProps, K = typeof W == "function" || typeof m.getSnapshotBeforeUpdate == "function";
      K || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (E !== o || T !== z) && Qc(r, m, o, z), Aa = !1;
      var Q = r.memoizedState;
      m.state = Q, _c(r, o, m, c), T = r.memoizedState, E !== o || Q !== T || Nn.current || Aa ? (typeof W == "function" && (Dd(r, l, W, o), T = r.memoizedState), (E = Aa || Vv(r, l, E, o, Q, T, z)) ? (K || typeof m.UNSAFE_componentWillMount != "function" && typeof m.componentWillMount != "function" || (typeof m.componentWillMount == "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && m.UNSAFE_componentWillMount()), typeof m.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = o, r.memoizedState = T), m.props = o, m.state = T, m.context = z, o = E) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), o = !1);
    } else {
      m = r.stateNode, Av(n, r), E = r.memoizedProps, z = r.type === r.elementType ? E : ta(r.type, E), m.props = z, K = r.pendingProps, Q = m.context, T = l.contextType, typeof T == "object" && T !== null ? T = Vt(T) : (T = zn(l) ? za : yn.current, T = ha(r, T));
      var ve = l.getDerivedStateFromProps;
      (W = typeof ve == "function" || typeof m.getSnapshotBeforeUpdate == "function") || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (E !== K || Q !== T) && Qc(r, m, o, T), Aa = !1, Q = r.memoizedState, m.state = Q, _c(r, o, m, c);
      var Ce = r.memoizedState;
      E !== K || Q !== Ce || Nn.current || Aa ? (typeof ve == "function" && (Dd(r, l, ve, o), Ce = r.memoizedState), (z = Aa || Vv(r, l, z, o, Q, Ce, T) || !1) ? (W || typeof m.UNSAFE_componentWillUpdate != "function" && typeof m.componentWillUpdate != "function" || (typeof m.componentWillUpdate == "function" && m.componentWillUpdate(o, Ce, T), typeof m.UNSAFE_componentWillUpdate == "function" && m.UNSAFE_componentWillUpdate(o, Ce, T)), typeof m.componentDidUpdate == "function" && (r.flags |= 4), typeof m.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof m.componentDidUpdate != "function" || E === n.memoizedProps && Q === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || E === n.memoizedProps && Q === n.memoizedState || (r.flags |= 1024), r.memoizedProps = o, r.memoizedState = Ce), m.props = o, m.state = Ce, m.context = T, o = z) : (typeof m.componentDidUpdate != "function" || E === n.memoizedProps && Q === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || E === n.memoizedProps && Q === n.memoizedState || (r.flags |= 1024), o = !1);
    }
    return Nd(n, r, l, o, d, c);
  }
  function Nd(n, r, l, o, c, d) {
    _s(n, r);
    var m = (r.flags & 128) !== 0;
    if (!o && !m) return c && Ua(r, l, !1), or(n, r, d);
    o = r.stateNode, vu.current = r;
    var E = m && typeof l.getDerivedStateFromError != "function" ? null : o.render();
    return r.flags |= 1, n !== null && m ? (r.child = ri(r, n.child, null, d), r.child = ri(r, null, E, d)) : Tn(n, r, E, d), r.memoizedState = o.state, c && Ua(r, l, !0), r.child;
  }
  function qc(n) {
    var r = n.stateNode;
    r.pendingContext ? Tc(n, r.pendingContext, r.pendingContext !== r.context) : r.context && Tc(n, r.context, !1), Td(n, r.containerInfo);
  }
  function vo(n, r, l, o, c) {
    return Qi(), ps(c), r.flags |= 256, Tn(n, r, l, o), r.child;
  }
  var zd = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Xc(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function Iv(n, r, l) {
    var o = r.pendingProps, c = pn.current, d = !1, m = (r.flags & 128) !== 0, E;
    if ((E = m) || (E = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), E ? (d = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), Jt(pn, c & 1), n === null)
      return md(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (m = o.children, n = o.fallback, d ? (o = r.mode, d = r.child, m = { mode: "hidden", children: m }, !(o & 1) && d !== null ? (d.childLanes = 0, d.pendingProps = m) : d = To(m, o, 0, null), n = Nl(n, o, l, null), d.return = r, n.return = r, d.sibling = n, r.child = d, r.child.memoizedState = Xc(l), r.memoizedState = zd, n) : bs(r, m));
    if (c = n.memoizedState, c !== null && (E = c.dehydrated, E !== null)) return Qv(n, r, m, o, E, c, l);
    if (d) {
      d = o.fallback, m = r.mode, c = n.child, E = c.sibling;
      var T = { mode: "hidden", children: o.children };
      return !(m & 1) && r.child !== c ? (o = r.child, o.childLanes = 0, o.pendingProps = T, r.deletions = null) : (o = Ml(c, T), o.subtreeFlags = c.subtreeFlags & 14680064), E !== null ? d = Ml(E, d) : (d = Nl(d, m, l, null), d.flags |= 2), d.return = r, o.return = r, o.sibling = d, r.child = o, o = d, d = r.child, m = n.child.memoizedState, m = m === null ? Xc(l) : { baseLanes: m.baseLanes | l, cachePool: null, transitions: m.transitions }, d.memoizedState = m, d.childLanes = n.childLanes & ~l, r.memoizedState = zd, o;
    }
    return d = n.child, n = d.sibling, o = Ml(d, { mode: "visible", children: o.children }), !(r.mode & 1) && (o.lanes = l), o.return = r, o.sibling = null, n !== null && (l = r.deletions, l === null ? (r.deletions = [n], r.flags |= 16) : l.push(n)), r.child = o, r.memoizedState = null, o;
  }
  function bs(n, r) {
    return r = To({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function Zc(n, r, l, o) {
    return o !== null && ps(o), ri(r, n.child, null, l), n = bs(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function Qv(n, r, l, o, c, d, m) {
    if (l)
      return r.flags & 256 ? (r.flags &= -257, o = Wc(Error(A(422))), Zc(n, r, m, o)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (d = o.fallback, c = r.mode, o = To({ mode: "visible", children: o.children }, c, 0, null), d = Nl(d, c, m, null), d.flags |= 2, o.return = r, d.return = r, o.sibling = d, r.child = o, r.mode & 1 && ri(r, n.child, null, m), r.child.memoizedState = Xc(m), r.memoizedState = zd, d);
    if (!(r.mode & 1)) return Zc(n, r, m, null);
    if (c.data === "$!") {
      if (o = c.nextSibling && c.nextSibling.dataset, o) var E = o.dgst;
      return o = E, d = Error(A(419)), o = Wc(d, o, void 0), Zc(n, r, m, o);
    }
    if (E = (m & n.childLanes) !== 0, Jn || E) {
      if (o = Fn, o !== null) {
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
      return Bd(), o = Wc(Error(A(421))), Zc(n, r, m, o);
    }
    return c.data === "$?" ? (r.flags |= 128, r.child = n.child, r = cy.bind(null, n), c._reactRetry = r, null) : (n = d.treeContext, Jr = ei(c.nextSibling), Zr = r, sn = !0, ni = null, n !== null && (lr[Un++] = Nr, lr[Un++] = Si, lr[Un++] = uu, Nr = n.id, Si = n.overflow, uu = r), r = bs(r, o.children), r.flags |= 4096, r);
  }
  function Ud(n, r, l) {
    n.lanes |= r;
    var o = n.alternate;
    o !== null && (o.lanes |= r), Ed(n.return, r, l);
  }
  function Jc(n, r, l, o, c) {
    var d = n.memoizedState;
    d === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: o, tail: l, tailMode: c } : (d.isBackwards = r, d.rendering = null, d.renderingStartTime = 0, d.last = o, d.tail = l, d.tailMode = c);
  }
  function ra(n, r, l) {
    var o = r.pendingProps, c = o.revealOrder, d = o.tail;
    if (Tn(n, r, o.children, l), o = pn.current, o & 2) o = o & 1 | 2, r.flags |= 128;
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
    if (Jt(pn, o), !(r.mode & 1)) r.memoizedState = null;
    else switch (c) {
      case "forwards":
        for (l = r.child, c = null; l !== null; ) n = l.alternate, n !== null && bc(n) === null && (c = l), l = l.sibling;
        l = c, l === null ? (c = r.child, r.child = null) : (c = l.sibling, l.sibling = null), Jc(r, !1, c, l, d);
        break;
      case "backwards":
        for (l = null, c = r.child, r.child = null; c !== null; ) {
          if (n = c.alternate, n !== null && bc(n) === null) {
            r.child = c;
            break;
          }
          n = c.sibling, c.sibling = l, l = c, c = n;
        }
        Jc(r, !0, l, null, d);
        break;
      case "together":
        Jc(r, !1, null, null, void 0);
        break;
      default:
        r.memoizedState = null;
    }
    return r.child;
  }
  function Fa(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function or(n, r, l) {
    if (n !== null && (r.dependencies = n.dependencies), Su |= r.lanes, !(l & r.childLanes)) return null;
    if (n !== null && r.child !== n.child) throw Error(A(153));
    if (r.child !== null) {
      for (n = r.child, l = Ml(n, n.pendingProps), r.child = l, l.return = r; n.sibling !== null; ) n = n.sibling, l = l.sibling = Ml(n, n.pendingProps), l.return = r;
      l.sibling = null;
    }
    return r.child;
  }
  function ef(n, r, l) {
    switch (r.tag) {
      case 3:
        qc(r), Qi();
        break;
      case 5:
        wd(r);
        break;
      case 1:
        zn(r.type) && lu(r);
        break;
      case 4:
        Td(r, r.stateNode.containerInfo);
        break;
      case 10:
        var o = r.type._context, c = r.memoizedProps.value;
        Jt(ae, o._currentValue), o._currentValue = c;
        break;
      case 13:
        if (o = r.memoizedState, o !== null)
          return o.dehydrated !== null ? (Jt(pn, pn.current & 1), r.flags |= 128, null) : l & r.child.childLanes ? Iv(n, r, l) : (Jt(pn, pn.current & 1), n = or(n, r, l), n !== null ? n.sibling : null);
        Jt(pn, pn.current & 1);
        break;
      case 19:
        if (o = (l & r.childLanes) !== 0, n.flags & 128) {
          if (o) return ra(n, r, l);
          r.flags |= 128;
        }
        if (c = r.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), Jt(pn, pn.current), o) break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, et(n, r, l);
    }
    return or(n, r, l);
  }
  var ho, ga, $n, Wv;
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
  }, $n = function(n, r, l, o) {
    var c = n.memoizedProps;
    if (c !== o) {
      n = r.stateNode, cu(Ci.current);
      var d = null;
      switch (l) {
        case "input":
          c = Dn(n, c), o = Dn(n, o), d = [];
          break;
        case "select":
          c = le({}, c, { value: void 0 }), o = le({}, o, { value: void 0 }), d = [];
          break;
        case "textarea":
          c = Wn(n, c), o = Wn(n, o), d = [];
          break;
        default:
          typeof c.onClick != "function" && typeof o.onClick == "function" && (n.onclick = Sc);
      }
      ln(l, o);
      var m;
      l = null;
      for (z in c) if (!o.hasOwnProperty(z) && c.hasOwnProperty(z) && c[z] != null) if (z === "style") {
        var E = c[z];
        for (m in E) E.hasOwnProperty(m) && (l || (l = {}), l[m] = "");
      } else z !== "dangerouslySetInnerHTML" && z !== "children" && z !== "suppressContentEditableWarning" && z !== "suppressHydrationWarning" && z !== "autoFocus" && (gt.hasOwnProperty(z) ? d || (d = []) : (d = d || []).push(z, null));
      for (z in o) {
        var T = o[z];
        if (E = c != null ? c[z] : void 0, o.hasOwnProperty(z) && T !== E && (T != null || E != null)) if (z === "style") if (E) {
          for (m in E) !E.hasOwnProperty(m) || T && T.hasOwnProperty(m) || (l || (l = {}), l[m] = "");
          for (m in T) T.hasOwnProperty(m) && E[m] !== T[m] && (l || (l = {}), l[m] = T[m]);
        } else l || (d || (d = []), d.push(
          z,
          l
        )), l = T;
        else z === "dangerouslySetInnerHTML" ? (T = T ? T.__html : void 0, E = E ? E.__html : void 0, T != null && E !== T && (d = d || []).push(z, T)) : z === "children" ? typeof T != "string" && typeof T != "number" || (d = d || []).push(z, "" + T) : z !== "suppressContentEditableWarning" && z !== "suppressHydrationWarning" && (gt.hasOwnProperty(z) ? (T != null && z === "onScroll" && jt("scroll", n), d || E === T || (d = [])) : (d = d || []).push(z, T));
      }
      l && (d = d || []).push("style", l);
      var z = d;
      (r.updateQueue = z) && (r.flags |= 4);
    }
  }, Wv = function(n, r, l, o) {
    l !== o && (r.flags |= 4);
  };
  function Ds(n, r) {
    if (!sn) switch (n.tailMode) {
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
  function _r(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, l = 0, o = 0;
    if (r) for (var c = n.child; c !== null; ) l |= c.lanes | c.childLanes, o |= c.subtreeFlags & 14680064, o |= c.flags & 14680064, c.return = n, c = c.sibling;
    else for (c = n.child; c !== null; ) l |= c.lanes | c.childLanes, o |= c.subtreeFlags, o |= c.flags, c.return = n, c = c.sibling;
    return n.subtreeFlags |= o, n.childLanes = l, r;
  }
  function Ad(n, r, l) {
    var o = r.pendingProps;
    switch (wc(r), r.tag) {
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
        return _r(r), null;
      case 1:
        return zn(r.type) && gi(), _r(r), null;
      case 3:
        return o = r.stateNode, oo(), Gt(Nn), Gt(yn), ys(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (n === null || n.child === null) && (Rn(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, ni !== null && (Fs(ni), ni = null))), ga(n, r), _r(r), null;
      case 5:
        xd(r);
        var c = cu(ms.current);
        if (l = r.type, n !== null && r.stateNode != null) $n(n, r, l, o, c), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!o) {
            if (r.stateNode === null) throw Error(A(166));
            return _r(r), null;
          }
          if (n = cu(Ci.current), Rn(r)) {
            o = r.stateNode, l = r.type;
            var d = r.memoizedProps;
            switch (o[Na] = r, o[ss] = d, n = (r.mode & 1) !== 0, l) {
              case "dialog":
                jt("cancel", o), jt("close", o);
                break;
              case "iframe":
              case "object":
              case "embed":
                jt("load", o);
                break;
              case "video":
              case "audio":
                for (c = 0; c < as.length; c++) jt(as[c], o);
                break;
              case "source":
                jt("error", o);
                break;
              case "img":
              case "image":
              case "link":
                jt(
                  "error",
                  o
                ), jt("load", o);
                break;
              case "details":
                jt("toggle", o);
                break;
              case "input":
                Er(o, d), jt("invalid", o);
                break;
              case "select":
                o._wrapperState = { wasMultiple: !!d.multiple }, jt("invalid", o);
                break;
              case "textarea":
                Gn(o, d), jt("invalid", o);
            }
            ln(l, d), c = null;
            for (var m in d) if (d.hasOwnProperty(m)) {
              var E = d[m];
              m === "children" ? typeof E == "string" ? o.textContent !== E && (d.suppressHydrationWarning !== !0 && gc(o.textContent, E, n), c = ["children", E]) : typeof E == "number" && o.textContent !== "" + E && (d.suppressHydrationWarning !== !0 && gc(
                o.textContent,
                E,
                n
              ), c = ["children", "" + E]) : gt.hasOwnProperty(m) && E != null && m === "onScroll" && jt("scroll", o);
            }
            switch (l) {
              case "input":
                bn(o), ca(o, d, !0);
                break;
              case "textarea":
                bn(o), Ka(o);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof d.onClick == "function" && (o.onclick = Sc);
            }
            o = c, r.updateQueue = o, o !== null && (r.flags |= 4);
          } else {
            m = c.nodeType === 9 ? c : c.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = On(l)), n === "http://www.w3.org/1999/xhtml" ? l === "script" ? (n = m.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof o.is == "string" ? n = m.createElement(l, { is: o.is }) : (n = m.createElement(l), l === "select" && (m = n, o.multiple ? m.multiple = !0 : o.size && (m.size = o.size))) : n = m.createElementNS(n, l), n[Na] = r, n[ss] = o, ho(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (m = un(l, o), l) {
                case "dialog":
                  jt("cancel", n), jt("close", n), c = o;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  jt("load", n), c = o;
                  break;
                case "video":
                case "audio":
                  for (c = 0; c < as.length; c++) jt(as[c], n);
                  c = o;
                  break;
                case "source":
                  jt("error", n), c = o;
                  break;
                case "img":
                case "image":
                case "link":
                  jt(
                    "error",
                    n
                  ), jt("load", n), c = o;
                  break;
                case "details":
                  jt("toggle", n), c = o;
                  break;
                case "input":
                  Er(n, o), c = Dn(n, o), jt("invalid", n);
                  break;
                case "option":
                  c = o;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!o.multiple }, c = le({}, o, { value: void 0 }), jt("invalid", n);
                  break;
                case "textarea":
                  Gn(n, o), c = Wn(n, o), jt("invalid", n);
                  break;
                default:
                  c = o;
              }
              ln(l, c), E = c;
              for (d in E) if (E.hasOwnProperty(d)) {
                var T = E[d];
                d === "style" ? Nt(n, T) : d === "dangerouslySetInnerHTML" ? (T = T ? T.__html : void 0, T != null && Li(n, T)) : d === "children" ? typeof T == "string" ? (l !== "textarea" || T !== "") && fa(n, T) : typeof T == "number" && fa(n, "" + T) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (gt.hasOwnProperty(d) ? T != null && d === "onScroll" && jt("scroll", n) : T != null && ut(n, d, T, m));
              }
              switch (l) {
                case "input":
                  bn(n), ca(n, o, !1);
                  break;
                case "textarea":
                  bn(n), Ka(n);
                  break;
                case "option":
                  o.value != null && n.setAttribute("value", "" + Qe(o.value));
                  break;
                case "select":
                  n.multiple = !!o.multiple, d = o.value, d != null ? Vn(n, !!o.multiple, d, !1) : o.defaultValue != null && Vn(
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
        return _r(r), null;
      case 6:
        if (n && r.stateNode != null) Wv(n, r, n.memoizedProps, o);
        else {
          if (typeof o != "string" && r.stateNode === null) throw Error(A(166));
          if (l = cu(ms.current), cu(Ci.current), Rn(r)) {
            if (o = r.stateNode, l = r.memoizedProps, o[Na] = r, (d = o.nodeValue !== l) && (n = Zr, n !== null)) switch (n.tag) {
              case 3:
                gc(o.nodeValue, l, (n.mode & 1) !== 0);
                break;
              case 5:
                n.memoizedProps.suppressHydrationWarning !== !0 && gc(o.nodeValue, l, (n.mode & 1) !== 0);
            }
            d && (r.flags |= 4);
          } else o = (l.nodeType === 9 ? l : l.ownerDocument).createTextNode(o), o[Na] = r, r.stateNode = o;
        }
        return _r(r), null;
      case 13:
        if (Gt(pn), o = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (sn && Jr !== null && r.mode & 1 && !(r.flags & 128)) Mv(), Qi(), r.flags |= 98560, d = !1;
          else if (d = Rn(r), o !== null && o.dehydrated !== null) {
            if (n === null) {
              if (!d) throw Error(A(318));
              if (d = r.memoizedState, d = d !== null ? d.dehydrated : null, !d) throw Error(A(317));
              d[Na] = r;
            } else Qi(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            _r(r), d = !1;
          } else ni !== null && (Fs(ni), ni = null), d = !0;
          if (!d) return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = l, r) : (o = o !== null, o !== (n !== null && n.memoizedState !== null) && o && (r.child.flags |= 8192, r.mode & 1 && (n === null || pn.current & 1 ? Yn === 0 && (Yn = 3) : Bd())), r.updateQueue !== null && (r.flags |= 4), _r(r), null);
      case 4:
        return oo(), ga(n, r), n === null && ls(r.stateNode.containerInfo), _r(r), null;
      case 10:
        return Sd(r.type._context), _r(r), null;
      case 17:
        return zn(r.type) && gi(), _r(r), null;
      case 19:
        if (Gt(pn), d = r.memoizedState, d === null) return _r(r), null;
        if (o = (r.flags & 128) !== 0, m = d.rendering, m === null) if (o) Ds(d, !1);
        else {
          if (Yn !== 0 || n !== null && n.flags & 128) for (n = r.child; n !== null; ) {
            if (m = bc(n), m !== null) {
              for (r.flags |= 128, Ds(d, !1), o = m.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), r.subtreeFlags = 0, o = l, l = r.child; l !== null; ) d = l, n = o, d.flags &= 14680066, m = d.alternate, m === null ? (d.childLanes = 0, d.lanes = n, d.child = null, d.subtreeFlags = 0, d.memoizedProps = null, d.memoizedState = null, d.updateQueue = null, d.dependencies = null, d.stateNode = null) : (d.childLanes = m.childLanes, d.lanes = m.lanes, d.child = m.child, d.subtreeFlags = 0, d.deletions = null, d.memoizedProps = m.memoizedProps, d.memoizedState = m.memoizedState, d.updateQueue = m.updateQueue, d.type = m.type, n = m.dependencies, d.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), l = l.sibling;
              return Jt(pn, pn.current & 1 | 2), r.child;
            }
            n = n.sibling;
          }
          d.tail !== null && Ut() > So && (r.flags |= 128, o = !0, Ds(d, !1), r.lanes = 4194304);
        }
        else {
          if (!o) if (n = bc(m), n !== null) {
            if (r.flags |= 128, o = !0, l = n.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), Ds(d, !0), d.tail === null && d.tailMode === "hidden" && !m.alternate && !sn) return _r(r), null;
          } else 2 * Ut() - d.renderingStartTime > So && l !== 1073741824 && (r.flags |= 128, o = !0, Ds(d, !1), r.lanes = 4194304);
          d.isBackwards ? (m.sibling = r.child, r.child = m) : (l = d.last, l !== null ? l.sibling = m : r.child = m, d.last = m);
        }
        return d.tail !== null ? (r = d.tail, d.rendering = r, d.tail = r.sibling, d.renderingStartTime = Ut(), r.sibling = null, l = pn.current, Jt(pn, o ? l & 1 | 2 : l & 1), r) : (_r(r), null);
      case 22:
      case 23:
        return Vd(), o = r.memoizedState !== null, n !== null && n.memoizedState !== null !== o && (r.flags |= 8192), o && r.mode & 1 ? Sa & 1073741824 && (_r(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : _r(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(A(156, r.tag));
  }
  function Gv(n, r) {
    switch (wc(r), r.tag) {
      case 1:
        return zn(r.type) && gi(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return oo(), Gt(Nn), Gt(yn), ys(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return xd(r), null;
      case 13:
        if (Gt(pn), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null) throw Error(A(340));
          Qi();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return Gt(pn), null;
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
  var mu = !1, sr = !1, iy = typeof WeakSet == "function" ? WeakSet : Set, ye = null;
  function Dl(n, r) {
    var l = n.ref;
    if (l !== null) if (typeof l == "function") try {
      l(null);
    } catch (o) {
      gn(n, r, o);
    }
    else l.current = null;
  }
  function Fd(n, r, l) {
    try {
      l();
    } catch (o) {
      gn(n, r, o);
    }
  }
  var jd = !1;
  function ly(n, r) {
    if (ru = dl, n = hl(), Ku(n)) {
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
          var m = 0, E = -1, T = -1, z = 0, W = 0, K = n, Q = null;
          t: for (; ; ) {
            for (var ve; K !== l || c !== 0 && K.nodeType !== 3 || (E = m + c), K !== d || o !== 0 && K.nodeType !== 3 || (T = m + o), K.nodeType === 3 && (m += K.nodeValue.length), (ve = K.firstChild) !== null; )
              Q = K, K = ve;
            for (; ; ) {
              if (K === n) break t;
              if (Q === l && ++z === c && (E = m), Q === d && ++W === o && (T = m), (ve = K.nextSibling) !== null) break;
              K = Q, Q = K.parentNode;
            }
            K = ve;
          }
          l = E === -1 || T === -1 ? null : { start: E, end: T };
        } else l = null;
      }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (os = { focusedElem: n, selectionRange: l }, dl = !1, ye = r; ye !== null; ) if (r = ye, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null) n.return = r, ye = n;
    else for (; ye !== null; ) {
      r = ye;
      try {
        var Ce = r.alternate;
        if (r.flags & 1024) switch (r.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (Ce !== null) {
              var we = Ce.memoizedProps, xn = Ce.memoizedState, D = r.stateNode, x = D.getSnapshotBeforeUpdate(r.elementType === r.type ? we : ta(r.type, we), xn);
              D.__reactInternalSnapshotBeforeUpdate = x;
            }
            break;
          case 3:
            var L = r.stateNode.containerInfo;
            L.nodeType === 1 ? L.textContent = "" : L.nodeType === 9 && L.documentElement && L.removeChild(L.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(A(163));
        }
      } catch (Z) {
        gn(r, r.return, Z);
      }
      if (n = r.sibling, n !== null) {
        n.return = r.return, ye = n;
        break;
      }
      ye = r.return;
    }
    return Ce = jd, jd = !1, Ce;
  }
  function mo(n, r, l) {
    var o = r.updateQueue;
    if (o = o !== null ? o.lastEffect : null, o !== null) {
      var c = o = o.next;
      do {
        if ((c.tag & n) === n) {
          var d = c.destroy;
          c.destroy = void 0, d !== void 0 && Fd(r, l, d);
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
  function Kv(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, Kv(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[Na], delete r[ss], delete r[sd], delete r[cd], delete r[ro])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function rf(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function ks(n) {
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
  var vn = null, zr = !1;
  function ja(n, r, l) {
    for (l = l.child; l !== null; ) Gi(n, r, l), l = l.sibling;
  }
  function Gi(n, r, l) {
    if (Wr && typeof Wr.onCommitFiberUnmount == "function") try {
      Wr.onCommitFiberUnmount(ol, l);
    } catch {
    }
    switch (l.tag) {
      case 5:
        sr || Dl(l, r);
      case 6:
        var o = vn, c = zr;
        vn = null, ja(n, r, l), vn = o, zr = c, vn !== null && (zr ? (n = vn, l = l.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(l) : n.removeChild(l)) : vn.removeChild(l.stateNode));
        break;
      case 18:
        vn !== null && (zr ? (n = vn, l = l.stateNode, n.nodeType === 8 ? to(n.parentNode, l) : n.nodeType === 1 && to(n, l), Oa(n)) : to(vn, l.stateNode));
        break;
      case 4:
        o = vn, c = zr, vn = l.stateNode.containerInfo, zr = !0, ja(n, r, l), vn = o, zr = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!sr && (o = l.updateQueue, o !== null && (o = o.lastEffect, o !== null))) {
          c = o = o.next;
          do {
            var d = c, m = d.destroy;
            d = d.tag, m !== void 0 && (d & 2 || d & 4) && Fd(l, r, m), c = c.next;
          } while (c !== o);
        }
        ja(n, r, l);
        break;
      case 1:
        if (!sr && (Dl(l, r), o = l.stateNode, typeof o.componentWillUnmount == "function")) try {
          o.props = l.memoizedProps, o.state = l.memoizedState, o.componentWillUnmount();
        } catch (E) {
          gn(l, r, E);
        }
        ja(n, r, l);
        break;
      case 21:
        ja(n, r, l);
        break;
      case 22:
        l.mode & 1 ? (sr = (o = sr) || l.memoizedState !== null, ja(n, r, l), sr = o) : ja(n, r, l);
        break;
      default:
        ja(n, r, l);
    }
  }
  function qv(n) {
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
              vn = E.stateNode, zr = !1;
              break e;
            case 3:
              vn = E.stateNode.containerInfo, zr = !0;
              break e;
            case 4:
              vn = E.stateNode.containerInfo, zr = !0;
              break e;
          }
          E = E.return;
        }
        if (vn === null) throw Error(A(160));
        Gi(d, m, c), vn = null, zr = !1;
        var T = c.alternate;
        T !== null && (T.return = null), c.return = null;
      } catch (z) {
        gn(c, r, z);
      }
    }
    if (r.subtreeFlags & 12854) for (r = r.child; r !== null; ) Xv(r, n), r = r.sibling;
  }
  function Xv(n, r) {
    var l = n.alternate, o = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (ai(r, n), ii(n), o & 4) {
          try {
            mo(3, n, n.return), tf(3, n);
          } catch (we) {
            gn(n, n.return, we);
          }
          try {
            mo(5, n, n.return);
          } catch (we) {
            gn(n, n.return, we);
          }
        }
        break;
      case 1:
        ai(r, n), ii(n), o & 512 && l !== null && Dl(l, l.return);
        break;
      case 5:
        if (ai(r, n), ii(n), o & 512 && l !== null && Dl(l, l.return), n.flags & 32) {
          var c = n.stateNode;
          try {
            fa(c, "");
          } catch (we) {
            gn(n, n.return, we);
          }
        }
        if (o & 4 && (c = n.stateNode, c != null)) {
          var d = n.memoizedProps, m = l !== null ? l.memoizedProps : d, E = n.type, T = n.updateQueue;
          if (n.updateQueue = null, T !== null) try {
            E === "input" && d.type === "radio" && d.name != null && Pn(c, d), un(E, m);
            var z = un(E, d);
            for (m = 0; m < T.length; m += 2) {
              var W = T[m], K = T[m + 1];
              W === "style" ? Nt(c, K) : W === "dangerouslySetInnerHTML" ? Li(c, K) : W === "children" ? fa(c, K) : ut(c, W, K, z);
            }
            switch (E) {
              case "input":
                kn(c, d);
                break;
              case "textarea":
                Cr(c, d);
                break;
              case "select":
                var Q = c._wrapperState.wasMultiple;
                c._wrapperState.wasMultiple = !!d.multiple;
                var ve = d.value;
                ve != null ? Vn(c, !!d.multiple, ve, !1) : Q !== !!d.multiple && (d.defaultValue != null ? Vn(
                  c,
                  !!d.multiple,
                  d.defaultValue,
                  !0
                ) : Vn(c, !!d.multiple, d.multiple ? [] : "", !1));
            }
            c[ss] = d;
          } catch (we) {
            gn(n, n.return, we);
          }
        }
        break;
      case 6:
        if (ai(r, n), ii(n), o & 4) {
          if (n.stateNode === null) throw Error(A(162));
          c = n.stateNode, d = n.memoizedProps;
          try {
            c.nodeValue = d;
          } catch (we) {
            gn(n, n.return, we);
          }
        }
        break;
      case 3:
        if (ai(r, n), ii(n), o & 4 && l !== null && l.memoizedState.isDehydrated) try {
          Oa(r.containerInfo);
        } catch (we) {
          gn(n, n.return, we);
        }
        break;
      case 4:
        ai(r, n), ii(n);
        break;
      case 13:
        ai(r, n), ii(n), c = n.child, c.flags & 8192 && (d = c.memoizedState !== null, c.stateNode.isHidden = d, !d || c.alternate !== null && c.alternate.memoizedState !== null || (Pd = Ut())), o & 4 && qv(n);
        break;
      case 22:
        if (W = l !== null && l.memoizedState !== null, n.mode & 1 ? (sr = (z = sr) || W, ai(r, n), sr = z) : ai(r, n), ii(n), o & 8192) {
          if (z = n.memoizedState !== null, (n.stateNode.isHidden = z) && !W && n.mode & 1) for (ye = n, W = n.child; W !== null; ) {
            for (K = ye = W; ye !== null; ) {
              switch (Q = ye, ve = Q.child, Q.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  mo(4, Q, Q.return);
                  break;
                case 1:
                  Dl(Q, Q.return);
                  var Ce = Q.stateNode;
                  if (typeof Ce.componentWillUnmount == "function") {
                    o = Q, l = Q.return;
                    try {
                      r = o, Ce.props = r.memoizedProps, Ce.state = r.memoizedState, Ce.componentWillUnmount();
                    } catch (we) {
                      gn(o, l, we);
                    }
                  }
                  break;
                case 5:
                  Dl(Q, Q.return);
                  break;
                case 22:
                  if (Q.memoizedState !== null) {
                    Jv(K);
                    continue;
                  }
              }
              ve !== null ? (ve.return = Q, ye = ve) : Jv(K);
            }
            W = W.sibling;
          }
          e: for (W = null, K = n; ; ) {
            if (K.tag === 5) {
              if (W === null) {
                W = K;
                try {
                  c = K.stateNode, z ? (d = c.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none") : (E = K.stateNode, T = K.memoizedProps.style, m = T != null && T.hasOwnProperty("display") ? T.display : null, E.style.display = tt("display", m));
                } catch (we) {
                  gn(n, n.return, we);
                }
              }
            } else if (K.tag === 6) {
              if (W === null) try {
                K.stateNode.nodeValue = z ? "" : K.memoizedProps;
              } catch (we) {
                gn(n, n.return, we);
              }
            } else if ((K.tag !== 22 && K.tag !== 23 || K.memoizedState === null || K === n) && K.child !== null) {
              K.child.return = K, K = K.child;
              continue;
            }
            if (K === n) break e;
            for (; K.sibling === null; ) {
              if (K.return === null || K.return === n) break e;
              W === K && (W = null), K = K.return;
            }
            W === K && (W = null), K.sibling.return = K.return, K = K.sibling;
          }
        }
        break;
      case 19:
        ai(r, n), ii(n), o & 4 && qv(n);
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
          throw Error(A(160));
        }
        switch (o.tag) {
          case 5:
            var c = o.stateNode;
            o.flags & 32 && (fa(c, ""), o.flags &= -33);
            var d = ks(n);
            Ti(n, d, c);
            break;
          case 3:
          case 4:
            var m = o.stateNode.containerInfo, E = ks(n);
            Ri(n, E, m);
            break;
          default:
            throw Error(A(161));
        }
      } catch (T) {
        gn(n, n.return, T);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function Os(n, r, l) {
    ye = n, Zv(n);
  }
  function Zv(n, r, l) {
    for (var o = (n.mode & 1) !== 0; ye !== null; ) {
      var c = ye, d = c.child;
      if (c.tag === 22 && o) {
        var m = c.memoizedState !== null || mu;
        if (!m) {
          var E = c.alternate, T = E !== null && E.memoizedState !== null || sr;
          E = mu;
          var z = sr;
          if (mu = m, (sr = T) && !z) for (ye = c; ye !== null; ) m = ye, T = m.child, m.tag === 22 && m.memoizedState !== null ? Ls(c) : T !== null ? (T.return = m, ye = T) : Ls(c);
          for (; d !== null; ) ye = d, Zv(d), d = d.sibling;
          ye = c, mu = E, sr = z;
        }
        Hd(n);
      } else c.subtreeFlags & 8772 && d !== null ? (d.return = c, ye = d) : Hd(n);
    }
  }
  function Hd(n) {
    for (; ye !== null; ) {
      var r = ye;
      if (r.flags & 8772) {
        var l = r.alternate;
        try {
          if (r.flags & 8772) switch (r.tag) {
            case 0:
            case 11:
            case 15:
              sr || tf(5, r);
              break;
            case 1:
              var o = r.stateNode;
              if (r.flags & 4 && !sr) if (l === null) o.componentDidMount();
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
                var T = r.memoizedProps;
                switch (r.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    T.autoFocus && l.focus();
                    break;
                  case "img":
                    T.src && (l.src = T.src);
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
                var z = r.alternate;
                if (z !== null) {
                  var W = z.memoizedState;
                  if (W !== null) {
                    var K = W.dehydrated;
                    K !== null && Oa(K);
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
              throw Error(A(163));
          }
          sr || r.flags & 512 && nf(r);
        } catch (Q) {
          gn(r, r.return, Q);
        }
      }
      if (r === n) {
        ye = null;
        break;
      }
      if (l = r.sibling, l !== null) {
        l.return = r.return, ye = l;
        break;
      }
      ye = r.return;
    }
  }
  function Jv(n) {
    for (; ye !== null; ) {
      var r = ye;
      if (r === n) {
        ye = null;
        break;
      }
      var l = r.sibling;
      if (l !== null) {
        l.return = r.return, ye = l;
        break;
      }
      ye = r.return;
    }
  }
  function Ls(n) {
    for (; ye !== null; ) {
      var r = ye;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var l = r.return;
            try {
              tf(4, r);
            } catch (T) {
              gn(r, l, T);
            }
            break;
          case 1:
            var o = r.stateNode;
            if (typeof o.componentDidMount == "function") {
              var c = r.return;
              try {
                o.componentDidMount();
              } catch (T) {
                gn(r, c, T);
              }
            }
            var d = r.return;
            try {
              nf(r);
            } catch (T) {
              gn(r, d, T);
            }
            break;
          case 5:
            var m = r.return;
            try {
              nf(r);
            } catch (T) {
              gn(r, m, T);
            }
        }
      } catch (T) {
        gn(r, r.return, T);
      }
      if (r === n) {
        ye = null;
        break;
      }
      var E = r.sibling;
      if (E !== null) {
        E.return = r.return, ye = E;
        break;
      }
      ye = r.return;
    }
  }
  var eh = Math.ceil, af = Ue.ReactCurrentDispatcher, yu = Ue.ReactCurrentOwner, br = Ue.ReactCurrentBatchConfig, ht = 0, Fn = null, wn = null, cr = 0, Sa = 0, yo = Xr(0), Yn = 0, gu = null, Su = 0, Eu = 0, Ms = 0, go = null, aa = null, Pd = 0, So = 1 / 0, Ki = null, kl = !1, Ns = null, Ha = null, lf = !1, Ol = null, zs = 0, Eo = 0, Co = null, Cu = -1, Us = 0;
  function en() {
    return ht & 6 ? Ut() : Cu !== -1 ? Cu : Cu = Ut();
  }
  function Ea(n) {
    return n.mode & 1 ? ht & 2 && cr !== 0 ? cr & -cr : ou.transition !== null ? (Us === 0 && (Us = Gl()), Us) : (n = wt, n !== 0 || (n = window.event, n = n === void 0 ? 16 : Go(n.type)), n) : 1;
  }
  function Ca(n, r, l, o) {
    if (50 < Eo) throw Eo = 0, Co = null, Error(A(185));
    fl(n, l, o), (!(ht & 2) || n !== Fn) && (n === Fn && (!(ht & 2) && (Eu |= l), Yn === 4 && Ll(n, cr)), er(n, o), l === 1 && ht === 0 && !(r.mode & 1) && (So = Ut() + 500, fs && Mr()));
  }
  function er(n, r) {
    var l = n.callbackNode;
    ju(n, r);
    var o = pi(n, n === Fn ? cr : 0);
    if (o === 0) l !== null && on(l), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = o & -o, n.callbackPriority !== r) {
      if (l != null && on(l), r === 1) n.tag === 0 ? fd(Hs.bind(null, n)) : yl(Hs.bind(null, n)), ny(function() {
        !(ht & 6) && Mr();
      }), l = null;
      else {
        switch (Wo(o)) {
          case 1:
            l = Ke;
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
    if (Cu = -1, Us = 0, ht & 6) throw Error(A(327));
    var l = n.callbackNode;
    if (Ro() && n.callbackNode !== l) return null;
    var o = pi(n, n === Fn ? cr : 0);
    if (o === 0) return null;
    if (o & 30 || o & n.expiredLanes || r) r = sf(n, o);
    else {
      r = o;
      var c = ht;
      ht |= 2;
      var d = nh();
      (Fn !== n || cr !== r) && (Ki = null, So = Ut() + 500, Tu(n, r));
      do
        try {
          oy();
          break;
        } catch (E) {
          of(n, E);
        }
      while (!0);
      gd(), af.current = d, ht = c, wn !== null ? r = 0 : (Fn = null, cr = 0, r = Yn);
    }
    if (r !== 0) {
      if (r === 2 && (c = ji(n), c !== 0 && (o = c, r = As(n, c))), r === 1) throw l = gu, Tu(n, 0), Ll(n, o), er(n, Ut()), l;
      if (r === 6) Ll(n, o);
      else {
        if (c = n.current.alternate, !(o & 30) && !js(c) && (r = sf(n, o), r === 2 && (d = ji(n), d !== 0 && (o = d, r = As(n, d))), r === 1)) throw l = gu, Tu(n, 0), Ll(n, o), er(n, Ut()), l;
        switch (n.finishedWork = c, n.finishedLanes = o, r) {
          case 0:
          case 1:
            throw Error(A(345));
          case 2:
            wu(n, aa, Ki);
            break;
          case 3:
            if (Ll(n, o), (o & 130023424) === o && (r = Pd + 500 - Ut(), 10 < r)) {
              if (pi(n, 0) !== 0) break;
              if (c = n.suspendedLanes, (c & o) !== o) {
                en(), n.pingedLanes |= n.suspendedLanes & c;
                break;
              }
              n.timeoutHandle = Ec(wu.bind(null, n, aa, Ki), r);
              break;
            }
            wu(n, aa, Ki);
            break;
          case 4:
            if (Ll(n, o), (o & 4194240) === o) break;
            for (r = n.eventTimes, c = -1; 0 < o; ) {
              var m = 31 - kr(o);
              d = 1 << m, m = r[m], m > c && (c = m), o &= ~d;
            }
            if (o = c, o = Ut() - o, o = (120 > o ? 120 : 480 > o ? 480 : 1080 > o ? 1080 : 1920 > o ? 1920 : 3e3 > o ? 3e3 : 4320 > o ? 4320 : 1960 * eh(o / 1960)) - o, 10 < o) {
              n.timeoutHandle = Ec(wu.bind(null, n, aa, Ki), o);
              break;
            }
            wu(n, aa, Ki);
            break;
          case 5:
            wu(n, aa, Ki);
            break;
          default:
            throw Error(A(329));
        }
      }
    }
    return er(n, Ut()), n.callbackNode === l ? th.bind(null, n) : null;
  }
  function As(n, r) {
    var l = go;
    return n.current.memoizedState.isDehydrated && (Tu(n, r).flags |= 256), n = sf(n, r), n !== 2 && (r = aa, aa = l, r !== null && Fs(r)), n;
  }
  function Fs(n) {
    aa === null ? aa = n : aa.push.apply(aa, n);
  }
  function js(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var l = r.updateQueue;
        if (l !== null && (l = l.stores, l !== null)) for (var o = 0; o < l.length; o++) {
          var c = l[o], d = c.getSnapshot;
          c = c.value;
          try {
            if (!Ja(d(), c)) return !1;
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
    for (r &= ~Ms, r &= ~Eu, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var l = 31 - kr(r), o = 1 << l;
      n[l] = -1, r &= ~o;
    }
  }
  function Hs(n) {
    if (ht & 6) throw Error(A(327));
    Ro();
    var r = pi(n, 0);
    if (!(r & 1)) return er(n, Ut()), null;
    var l = sf(n, r);
    if (n.tag !== 0 && l === 2) {
      var o = ji(n);
      o !== 0 && (r = o, l = As(n, o));
    }
    if (l === 1) throw l = gu, Tu(n, 0), Ll(n, r), er(n, Ut()), l;
    if (l === 6) throw Error(A(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, wu(n, aa, Ki), er(n, Ut()), null;
  }
  function uf(n, r) {
    var l = ht;
    ht |= 1;
    try {
      return n(r);
    } finally {
      ht = l, ht === 0 && (So = Ut() + 500, fs && Mr());
    }
  }
  function Ru(n) {
    Ol !== null && Ol.tag === 0 && !(ht & 6) && Ro();
    var r = ht;
    ht |= 1;
    var l = br.transition, o = wt;
    try {
      if (br.transition = null, wt = 1, n) return n();
    } finally {
      wt = o, br.transition = l, ht = r, !(ht & 6) && Mr();
    }
  }
  function Vd() {
    Sa = yo.current, Gt(yo);
  }
  function Tu(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var l = n.timeoutHandle;
    if (l !== -1 && (n.timeoutHandle = -1, Dv(l)), wn !== null) for (l = wn.return; l !== null; ) {
      var o = l;
      switch (wc(o), o.tag) {
        case 1:
          o = o.type.childContextTypes, o != null && gi();
          break;
        case 3:
          oo(), Gt(Nn), Gt(yn), ys();
          break;
        case 5:
          xd(o);
          break;
        case 4:
          oo();
          break;
        case 13:
          Gt(pn);
          break;
        case 19:
          Gt(pn);
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
    if (Fn = n, wn = n = Ml(n.current, null), cr = Sa = r, Yn = 0, gu = null, Ms = Eu = Su = 0, aa = go = null, su !== null) {
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
      var l = wn;
      try {
        if (gd(), ke.current = Bt, Dc) {
          for (var o = qe.memoizedState; o !== null; ) {
            var c = o.queue;
            c !== null && (c.pending = null), o = o.next;
          }
          Dc = !1;
        }
        if (Ct = 0, Bn = Kt = qe = null, gs = !1, Ss = 0, yu.current = null, l === null || l.return === null) {
          Yn = 1, gu = r, wn = null;
          break;
        }
        e: {
          var d = n, m = l.return, E = l, T = r;
          if (r = cr, E.flags |= 32768, T !== null && typeof T == "object" && typeof T.then == "function") {
            var z = T, W = E, K = W.tag;
            if (!(W.mode & 1) && (K === 0 || K === 11 || K === 15)) {
              var Q = W.alternate;
              Q ? (W.updateQueue = Q.updateQueue, W.memoizedState = Q.memoizedState, W.lanes = Q.lanes) : (W.updateQueue = null, W.memoizedState = null);
            }
            var ve = Md(m);
            if (ve !== null) {
              ve.flags &= -257, Yv(ve, m, E, d, r), ve.mode & 1 && Ld(d, z, r), r = ve, T = z;
              var Ce = r.updateQueue;
              if (Ce === null) {
                var we = /* @__PURE__ */ new Set();
                we.add(T), r.updateQueue = we;
              } else Ce.add(T);
              break e;
            } else {
              if (!(r & 1)) {
                Ld(d, z, r), Bd();
                break e;
              }
              T = Error(A(426));
            }
          } else if (sn && E.mode & 1) {
            var xn = Md(m);
            if (xn !== null) {
              !(xn.flags & 65536) && (xn.flags |= 256), Yv(xn, m, E, d, r), ps(bl(T, E));
              break e;
            }
          }
          d = T = bl(T, E), Yn !== 4 && (Yn = 2), go === null ? go = [d] : go.push(d), d = m;
          do {
            switch (d.tag) {
              case 3:
                d.flags |= 65536, r &= -r, d.lanes |= r;
                var D = xs(d, T, r);
                Fv(d, D);
                break e;
              case 1:
                E = T;
                var x = d.type, L = d.stateNode;
                if (!(d.flags & 128) && (typeof x.getDerivedStateFromError == "function" || L !== null && typeof L.componentDidCatch == "function" && (Ha === null || !Ha.has(L)))) {
                  d.flags |= 65536, r &= -r, d.lanes |= r;
                  var Z = $v(d, E, r);
                  Fv(d, Z);
                  break e;
                }
            }
            d = d.return;
          } while (d !== null);
        }
        rh(l);
      } catch (_e) {
        r = _e, wn === l && l !== null && (wn = l = l.return);
        continue;
      }
      break;
    } while (!0);
  }
  function nh() {
    var n = af.current;
    return af.current = Bt, n === null ? Bt : n;
  }
  function Bd() {
    (Yn === 0 || Yn === 3 || Yn === 2) && (Yn = 4), Fn === null || !(Su & 268435455) && !(Eu & 268435455) || Ll(Fn, cr);
  }
  function sf(n, r) {
    var l = ht;
    ht |= 2;
    var o = nh();
    (Fn !== n || cr !== r) && (Ki = null, Tu(n, r));
    do
      try {
        uy();
        break;
      } catch (c) {
        of(n, c);
      }
    while (!0);
    if (gd(), ht = l, af.current = o, wn !== null) throw Error(A(261));
    return Fn = null, cr = 0, Yn;
  }
  function uy() {
    for (; wn !== null; ) $d(wn);
  }
  function oy() {
    for (; wn !== null && !Rr(); ) $d(wn);
  }
  function $d(n) {
    var r = Id(n.alternate, n, Sa);
    n.memoizedProps = n.pendingProps, r === null ? rh(n) : wn = r, yu.current = null;
  }
  function rh(n) {
    var r = n;
    do {
      var l = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (l = Gv(l, r), l !== null) {
          l.flags &= 32767, wn = l;
          return;
        }
        if (n !== null) n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          Yn = 6, wn = null;
          return;
        }
      } else if (l = Ad(l, r, Sa), l !== null) {
        wn = l;
        return;
      }
      if (r = r.sibling, r !== null) {
        wn = r;
        return;
      }
      wn = r = n;
    } while (r !== null);
    Yn === 0 && (Yn = 5);
  }
  function wu(n, r, l) {
    var o = wt, c = br.transition;
    try {
      br.transition = null, wt = 1, sy(n, r, l, o);
    } finally {
      br.transition = c, wt = o;
    }
    return null;
  }
  function sy(n, r, l, o) {
    do
      Ro();
    while (Ol !== null);
    if (ht & 6) throw Error(A(327));
    l = n.finishedWork;
    var c = n.finishedLanes;
    if (l === null) return null;
    if (n.finishedWork = null, n.finishedLanes = 0, l === n.current) throw Error(A(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var d = l.lanes | l.childLanes;
    if (Io(n, d), n === Fn && (wn = Fn = null, cr = 0), !(l.subtreeFlags & 2064) && !(l.flags & 2064) || lf || (lf = !0, lh(Ui, function() {
      return Ro(), null;
    })), d = (l.flags & 15990) !== 0, l.subtreeFlags & 15990 || d) {
      d = br.transition, br.transition = null;
      var m = wt;
      wt = 1;
      var E = ht;
      ht |= 4, yu.current = null, ly(n, l), Xv(l, n), Sv(os), dl = !!ru, os = ru = null, n.current = l, Os(l), qa(), ht = E, wt = m, br.transition = d;
    } else n.current = l;
    if (lf && (lf = !1, Ol = n, zs = c), d = n.pendingLanes, d === 0 && (Ha = null), $o(l.stateNode), er(n, Ut()), r !== null) for (o = n.onRecoverableError, l = 0; l < r.length; l++) c = r[l], o(c.value, { componentStack: c.stack, digest: c.digest });
    if (kl) throw kl = !1, n = Ns, Ns = null, n;
    return zs & 1 && n.tag !== 0 && Ro(), d = n.pendingLanes, d & 1 ? n === Co ? Eo++ : (Eo = 0, Co = n) : Eo = 0, Mr(), null;
  }
  function Ro() {
    if (Ol !== null) {
      var n = Wo(zs), r = br.transition, l = wt;
      try {
        if (br.transition = null, wt = 16 > n ? 16 : n, Ol === null) var o = !1;
        else {
          if (n = Ol, Ol = null, zs = 0, ht & 6) throw Error(A(331));
          var c = ht;
          for (ht |= 4, ye = n.current; ye !== null; ) {
            var d = ye, m = d.child;
            if (ye.flags & 16) {
              var E = d.deletions;
              if (E !== null) {
                for (var T = 0; T < E.length; T++) {
                  var z = E[T];
                  for (ye = z; ye !== null; ) {
                    var W = ye;
                    switch (W.tag) {
                      case 0:
                      case 11:
                      case 15:
                        mo(8, W, d);
                    }
                    var K = W.child;
                    if (K !== null) K.return = W, ye = K;
                    else for (; ye !== null; ) {
                      W = ye;
                      var Q = W.sibling, ve = W.return;
                      if (Kv(W), W === z) {
                        ye = null;
                        break;
                      }
                      if (Q !== null) {
                        Q.return = ve, ye = Q;
                        break;
                      }
                      ye = ve;
                    }
                  }
                }
                var Ce = d.alternate;
                if (Ce !== null) {
                  var we = Ce.child;
                  if (we !== null) {
                    Ce.child = null;
                    do {
                      var xn = we.sibling;
                      we.sibling = null, we = xn;
                    } while (we !== null);
                  }
                }
                ye = d;
              }
            }
            if (d.subtreeFlags & 2064 && m !== null) m.return = d, ye = m;
            else e: for (; ye !== null; ) {
              if (d = ye, d.flags & 2048) switch (d.tag) {
                case 0:
                case 11:
                case 15:
                  mo(9, d, d.return);
              }
              var D = d.sibling;
              if (D !== null) {
                D.return = d.return, ye = D;
                break e;
              }
              ye = d.return;
            }
          }
          var x = n.current;
          for (ye = x; ye !== null; ) {
            m = ye;
            var L = m.child;
            if (m.subtreeFlags & 2064 && L !== null) L.return = m, ye = L;
            else e: for (m = x; ye !== null; ) {
              if (E = ye, E.flags & 2048) try {
                switch (E.tag) {
                  case 0:
                  case 11:
                  case 15:
                    tf(9, E);
                }
              } catch (_e) {
                gn(E, E.return, _e);
              }
              if (E === m) {
                ye = null;
                break e;
              }
              var Z = E.sibling;
              if (Z !== null) {
                Z.return = E.return, ye = Z;
                break e;
              }
              ye = E.return;
            }
          }
          if (ht = c, Mr(), Wr && typeof Wr.onPostCommitFiberRoot == "function") try {
            Wr.onPostCommitFiberRoot(ol, n);
          } catch {
          }
          o = !0;
        }
        return o;
      } finally {
        wt = l, br.transition = r;
      }
    }
    return !1;
  }
  function ah(n, r, l) {
    r = bl(l, r), r = xs(n, r, 1), n = Tl(n, r, 1), r = en(), n !== null && (fl(n, 1, r), er(n, r));
  }
  function gn(n, r, l) {
    if (n.tag === 3) ah(n, n, l);
    else for (; r !== null; ) {
      if (r.tag === 3) {
        ah(r, n, l);
        break;
      } else if (r.tag === 1) {
        var o = r.stateNode;
        if (typeof r.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (Ha === null || !Ha.has(o))) {
          n = bl(l, n), n = $v(r, n, 1), r = Tl(r, n, 1), n = en(), r !== null && (fl(r, 1, n), er(r, n));
          break;
        }
      }
      r = r.return;
    }
  }
  function Yd(n, r, l) {
    var o = n.pingCache;
    o !== null && o.delete(r), r = en(), n.pingedLanes |= n.suspendedLanes & l, Fn === n && (cr & l) === l && (Yn === 4 || Yn === 3 && (cr & 130023424) === cr && 500 > Ut() - Pd ? Tu(n, 0) : Ms |= l), er(n, r);
  }
  function ih(n, r) {
    r === 0 && (n.mode & 1 ? (r = sl, sl <<= 1, !(sl & 130023424) && (sl = 4194304)) : r = 1);
    var l = en();
    n = Ei(n, r), n !== null && (fl(n, r, l), er(n, l));
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
        throw Error(A(314));
    }
    o !== null && o.delete(r), ih(n, l);
  }
  var Id;
  Id = function(n, r, l) {
    if (n !== null) if (n.memoizedProps !== r.pendingProps || Nn.current) Jn = !0;
    else {
      if (!(n.lanes & l) && !(r.flags & 128)) return Jn = !1, ef(n, r, l);
      Jn = !!(n.flags & 131072);
    }
    else Jn = !1, sn && r.flags & 1048576 && Ov(r, El, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var o = r.type;
        Fa(n, r), n = r.pendingProps;
        var c = ha(r, yn.current);
        lo(r, l), c = Ae(null, r, o, n, c, l);
        var d = wl();
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, zn(o) ? (d = !0, lu(r)) : d = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, Rl(r), c.updater = Ic, r.stateNode = c, c._reactInternals = r, kd(r, o, n, l), r = Nd(null, r, o, !0, d, l)) : (r.tag = 0, sn && d && dd(r), Tn(null, r, c, l), r = r.child), r;
      case 16:
        o = r.elementType;
        e: {
          switch (Fa(n, r), n = r.pendingProps, c = o._init, o = c(o._payload), r.type = o, c = r.tag = py(o), n = ta(o, n), c) {
            case 0:
              r = Kc(null, r, o, n, l);
              break e;
            case 1:
              r = ay(null, r, o, n, l);
              break e;
            case 11:
              r = Gc(null, r, o, n, l);
              break e;
            case 14:
              r = na(null, r, o, ta(o.type, n), l);
              break e;
          }
          throw Error(A(
            306,
            o,
            ""
          ));
        }
        return r;
      case 0:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ta(o, c), Kc(n, r, o, c, l);
      case 1:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ta(o, c), ay(n, r, o, c, l);
      case 3:
        e: {
          if (qc(r), n === null) throw Error(A(387));
          o = r.pendingProps, d = r.memoizedState, c = d.element, Av(n, r), _c(r, o, null, l);
          var m = r.memoizedState;
          if (o = m.element, d.isDehydrated) if (d = { element: o, isDehydrated: !1, cache: m.cache, pendingSuspenseBoundaries: m.pendingSuspenseBoundaries, transitions: m.transitions }, r.updateQueue.baseState = d, r.memoizedState = d, r.flags & 256) {
            c = bl(Error(A(423)), r), r = vo(n, r, o, l, c);
            break e;
          } else if (o !== c) {
            c = bl(Error(A(424)), r), r = vo(n, r, o, l, c);
            break e;
          } else for (Jr = ei(r.stateNode.containerInfo.firstChild), Zr = r, sn = !0, ni = null, l = ur(r, null, o, l), r.child = l; l; ) l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (Qi(), o === c) {
              r = or(n, r, l);
              break e;
            }
            Tn(n, r, o, l);
          }
          r = r.child;
        }
        return r;
      case 5:
        return wd(r), n === null && md(r), o = r.type, c = r.pendingProps, d = n !== null ? n.memoizedProps : null, m = c.children, au(o, c) ? m = null : d !== null && au(o, d) && (r.flags |= 32), _s(n, r), Tn(n, r, m, l), r.child;
      case 6:
        return n === null && md(r), null;
      case 13:
        return Iv(n, r, l);
      case 4:
        return Td(r, r.stateNode.containerInfo), o = r.pendingProps, n === null ? r.child = ri(r, null, o, l) : Tn(n, r, o, l), r.child;
      case 11:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ta(o, c), Gc(n, r, o, c, l);
      case 7:
        return Tn(n, r, r.pendingProps, l), r.child;
      case 8:
        return Tn(n, r, r.pendingProps.children, l), r.child;
      case 12:
        return Tn(n, r, r.pendingProps.children, l), r.child;
      case 10:
        e: {
          if (o = r.type._context, c = r.pendingProps, d = r.memoizedProps, m = c.value, Jt(ae, o._currentValue), o._currentValue = m, d !== null) if (Ja(d.value, m)) {
            if (d.children === c.children && !Nn.current) {
              r = or(n, r, l);
              break e;
            }
          } else for (d = r.child, d !== null && (d.return = r); d !== null; ) {
            var E = d.dependencies;
            if (E !== null) {
              m = d.child;
              for (var T = E.firstContext; T !== null; ) {
                if (T.context === o) {
                  if (d.tag === 1) {
                    T = Wi(-1, l & -l), T.tag = 2;
                    var z = d.updateQueue;
                    if (z !== null) {
                      z = z.shared;
                      var W = z.pending;
                      W === null ? T.next = T : (T.next = W.next, W.next = T), z.pending = T;
                    }
                  }
                  d.lanes |= l, T = d.alternate, T !== null && (T.lanes |= l), Ed(
                    d.return,
                    l,
                    r
                  ), E.lanes |= l;
                  break;
                }
                T = T.next;
              }
            } else if (d.tag === 10) m = d.type === r.type ? null : d.child;
            else if (d.tag === 18) {
              if (m = d.return, m === null) throw Error(A(341));
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
          Tn(n, r, c.children, l), r = r.child;
        }
        return r;
      case 9:
        return c = r.type, o = r.pendingProps.children, lo(r, l), c = Vt(c), o = o(c), r.flags |= 1, Tn(n, r, o, l), r.child;
      case 14:
        return o = r.type, c = ta(o, r.pendingProps), c = ta(o.type, c), na(n, r, o, c, l);
      case 15:
        return hu(n, r, r.type, r.pendingProps, l);
      case 17:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ta(o, c), Fa(n, r), r.tag = 1, zn(o) ? (n = !0, lu(r)) : n = !1, lo(r, l), Bv(r, o, c), kd(r, o, c, l), Nd(null, r, o, !0, n, l);
      case 19:
        return ra(n, r, l);
      case 22:
        return et(n, r, l);
    }
    throw Error(A(156, r.tag));
  };
  function lh(n, r) {
    return nn(n, r);
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
      if (n = n.$$typeof, n === $t) return 11;
      if (n === At) return 14;
    }
    return 2;
  }
  function Ml(n, r) {
    var l = n.alternate;
    return l === null ? (l = Pa(n.tag, r, n.key, n.mode), l.elementType = n.elementType, l.type = n.type, l.stateNode = n.stateNode, l.alternate = n, n.alternate = l) : (l.pendingProps = r, l.type = n.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = n.flags & 14680064, l.childLanes = n.childLanes, l.lanes = n.lanes, l.child = n.child, l.memoizedProps = n.memoizedProps, l.memoizedState = n.memoizedState, l.updateQueue = n.updateQueue, r = n.dependencies, l.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, l.sibling = n.sibling, l.index = n.index, l.ref = n.ref, l;
  }
  function cf(n, r, l, o, c, d) {
    var m = 2;
    if (o = n, typeof n == "function") Qd(n) && (m = 1);
    else if (typeof n == "string") m = 5;
    else e: switch (n) {
      case dt:
        return Nl(l.children, c, d, r);
      case Pe:
        m = 8, c |= 8;
        break;
      case Sn:
        return n = Pa(12, l, r, c | 2), n.elementType = Sn, n.lanes = d, n;
      case St:
        return n = Pa(13, l, r, c), n.elementType = St, n.lanes = d, n;
      case ze:
        return n = Pa(19, l, r, c), n.elementType = ze, n.lanes = d, n;
      case at:
        return To(l, c, d, r);
      default:
        if (typeof n == "object" && n !== null) switch (n.$$typeof) {
          case Mt:
            m = 10;
            break e;
          case fn:
            m = 9;
            break e;
          case $t:
            m = 11;
            break e;
          case At:
            m = 14;
            break e;
          case mt:
            m = 16, o = null;
            break e;
        }
        throw Error(A(130, n == null ? n : typeof n, ""));
    }
    return r = Pa(m, l, r, c), r.elementType = n, r.type = o, r.lanes = d, r;
  }
  function Nl(n, r, l, o) {
    return n = Pa(7, n, o, r), n.lanes = l, n;
  }
  function To(n, r, l, o) {
    return n = Pa(22, n, o, r), n.elementType = at, n.lanes = l, n.stateNode = { isHidden: !1 }, n;
  }
  function xu(n, r, l) {
    return n = Pa(6, n, null, r), n.lanes = l, n;
  }
  function Wd(n, r, l) {
    return r = Pa(4, n.children !== null ? n.children : [], n.key, r), r.lanes = l, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function uh(n, r, l, o, c) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Kl(0), this.expirationTimes = Kl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Kl(0), this.identifierPrefix = o, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function ff(n, r, l, o, c, d, m, E, T) {
    return n = new uh(n, r, l, E, T), r === 1 ? (r = 1, d === !0 && (r |= 8)) : r = 0, d = Pa(3, null, null, r), n.current = d, d.stateNode = n, d.memoizedState = { element: o, isDehydrated: l, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Rl(d), n;
  }
  function oh(n, r, l) {
    var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: xe, key: o == null ? null : "" + o, children: n, containerInfo: r, implementation: l };
  }
  function sh(n) {
    if (!n) return st;
    n = n._reactInternals;
    e: {
      if (ce(n) !== n || n.tag !== 1) throw Error(A(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (zn(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(A(171));
    }
    if (n.tag === 1) {
      var l = n.type;
      if (zn(l)) return kv(n, l, r);
    }
    return r;
  }
  function Gd(n, r, l, o, c, d, m, E, T) {
    return n = ff(l, o, !0, n, c, d, m, E, T), n.context = sh(null), l = n.current, o = en(), c = Ea(l), d = Wi(o, c), d.callback = r ?? null, Tl(l, d, c), n.current.lanes = c, fl(n, c, o), er(n, o), n;
  }
  function df(n, r, l, o) {
    var c = r.current, d = en(), m = Ea(c);
    return l = sh(l), r.context === null ? r.context = l : r.pendingContext = l, r = Wi(d, m), r.payload = { element: n }, o = o === void 0 ? null : o, o !== null && (r.callback = o), n = Tl(c, r, m), n !== null && (Ca(n, c, m, d), xc(n, c, m)), m;
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
  var Kd = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function hf(n) {
    this._internalRoot = n;
  }
  qi.prototype.render = hf.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null) throw Error(A(409));
    df(n, r, null, null);
  }, qi.prototype.unmount = hf.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Ru(function() {
        df(null, n, null, null);
      }), r[Yi] = null;
    }
  };
  function qi(n) {
    this._internalRoot = n;
  }
  qi.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = vi();
      n = { blockedOn: null, target: n, priority: r };
      for (var l = 0; l < Xa.length && r !== 0 && r < Xa[l].priority; l++) ;
      Xa.splice(l, 0, n), l === 0 && Pu(n);
    }
  };
  function qd(n) {
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
          var z = pf(m);
          d.call(z);
        };
      }
      var m = Gd(r, o, n, 0, null, !1, !1, "", fh);
      return n._reactRootContainer = m, n[Yi] = m.current, ls(n.nodeType === 8 ? n.parentNode : n), Ru(), m;
    }
    for (; c = n.lastChild; ) n.removeChild(c);
    if (typeof o == "function") {
      var E = o;
      o = function() {
        var z = pf(T);
        E.call(z);
      };
    }
    var T = ff(n, 0, !1, null, null, !1, !1, "", fh);
    return n._reactRootContainer = T, n[Yi] = T.current, ls(n.nodeType === 8 ? n.parentNode : n), Ru(function() {
      df(r, T, l, o);
    }), T;
  }
  function yf(n, r, l, o, c) {
    var d = l._reactRootContainer;
    if (d) {
      var m = d;
      if (typeof c == "function") {
        var E = c;
        c = function() {
          var T = pf(m);
          E.call(T);
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
          var l = Gr(r.pendingLanes);
          l !== 0 && (Qo(r, l | 1), er(r, Ut()), !(ht & 6) && (So = Ut() + 500, Mr()));
        }
        break;
      case 13:
        Ru(function() {
          var o = Ei(n, 1);
          if (o !== null) {
            var c = en();
            Ca(o, n, 1, c);
          }
        }), vf(n, 1);
    }
  }, xt = function(n) {
    if (n.tag === 13) {
      var r = Ei(n, 134217728);
      if (r !== null) {
        var l = en();
        Ca(r, n, 134217728, l);
      }
      vf(n, 134217728);
    }
  }, uc = function(n) {
    if (n.tag === 13) {
      var r = Ea(n), l = Ei(n, r);
      if (l !== null) {
        var o = en();
        Ca(l, n, r, o);
      }
      vf(n, r);
    }
  }, vi = function() {
    return wt;
  }, Be = function(n, r) {
    var l = wt;
    try {
      return wt = n, r();
    } finally {
      wt = l;
    }
  }, Yt = function(n, r, l) {
    switch (r) {
      case "input":
        if (kn(n, l), r = l.name, l.type === "radio" && r != null) {
          for (l = n; l.parentNode; ) l = l.parentNode;
          for (l = l.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < l.length; r++) {
            var o = l[r];
            if (o !== n && o.form === n.form) {
              var c = Ii(o);
              if (!c) throw Error(A(90));
              Qn(o), kn(o, c);
            }
          }
        }
        break;
      case "textarea":
        Cr(n, l);
        break;
      case "select":
        r = l.value, r != null && Vn(n, !!l.multiple, r, !1);
    }
  }, Il = uf, Ql = Ru;
  var hy = { usingClientEntryPoint: !1, Events: [cs, De, Ii, Da, Mi, uf] }, wo = { findFiberByHostInstance: iu, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, my = { bundleType: wo.bundleType, version: wo.version, rendererPackageName: wo.rendererPackageName, rendererConfig: wo.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Ue.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = nt(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: wo.findFiberByHostInstance, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var gf = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!gf.isDisabled && gf.supportsFiber) try {
      ol = gf.inject(my), Wr = gf;
    } catch {
    }
  }
  return Qa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = hy, Qa.createPortal = function(n, r) {
    var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!qd(r)) throw Error(A(200));
    return oh(n, r, null, l);
  }, Qa.createRoot = function(n, r) {
    if (!qd(n)) throw Error(A(299));
    var l = !1, o = "", c = Kd;
    return r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (o = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), r = ff(n, 1, !1, null, null, l, !1, o, c), n[Yi] = r.current, ls(n.nodeType === 8 ? n.parentNode : n), new hf(r);
  }, Qa.findDOMNode = function(n) {
    if (n == null) return null;
    if (n.nodeType === 1) return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(A(188)) : (n = Object.keys(n).join(","), Error(A(268, n)));
    return n = nt(r), n = n === null ? null : n.stateNode, n;
  }, Qa.flushSync = function(n) {
    return Ru(n);
  }, Qa.hydrate = function(n, r, l) {
    if (!mf(r)) throw Error(A(200));
    return yf(null, n, r, !0, l);
  }, Qa.hydrateRoot = function(n, r, l) {
    if (!qd(n)) throw Error(A(405));
    var o = l != null && l.hydratedSources || null, c = !1, d = "", m = Kd;
    if (l != null && (l.unstable_strictMode === !0 && (c = !0), l.identifierPrefix !== void 0 && (d = l.identifierPrefix), l.onRecoverableError !== void 0 && (m = l.onRecoverableError)), r = Gd(r, null, n, 1, l ?? null, c, !1, d, m), n[Yi] = r.current, ls(n), o) for (n = 0; n < o.length; n++) l = o[n], c = l._getVersion, c = c(l._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [l, c] : r.mutableSourceEagerHydrationData.push(
      l,
      c
    );
    return new qi(r);
  }, Qa.render = function(n, r, l) {
    if (!mf(r)) throw Error(A(200));
    return yf(null, n, r, !1, l);
  }, Qa.unmountComponentAtNode = function(n) {
    if (!mf(n)) throw Error(A(40));
    return n._reactRootContainer ? (Ru(function() {
      yf(null, null, n, !1, function() {
        n._reactRootContainer = null, n[Yi] = null;
      });
    }), !0) : !1;
  }, Qa.unstable_batchedUpdates = uf, Qa.unstable_renderSubtreeIntoContainer = function(n, r, l, o) {
    if (!mf(l)) throw Error(A(200));
    if (n == null || n._reactInternals === void 0) throw Error(A(38));
    return yf(n, r, l, !1, o);
  }, Qa.version = "18.3.1-next-f1338f8080-20240426", Qa;
}
var Wa = {}, rT;
function uD() {
  if (rT) return Wa;
  rT = 1;
  var X = {};
  /**
   * @license React
   * react-dom.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  return X.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var oe = Yr, A = lT(), Xe = oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, gt = !1;
    function ft(e) {
      gt = e;
    }
    function lt(e) {
      if (!gt) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        Ze("warn", e, a);
      }
    }
    function S(e) {
      if (!gt) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        Ze("error", e, a);
      }
    }
    function Ze(e, t, a) {
      {
        var i = Xe.ReactDebugCurrentFrame, u = i.getStackAddendum();
        u !== "" && (t += "%s", a = a.concat([u]));
        var s = a.map(function(f) {
          return String(f);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var Se = 0, ne = 1, se = 2, B = 3, ee = 4, G = 5, de = 6, Ge = 7, Hn = 8, rn = 9, ut = 10, Ue = 11, kt = 12, xe = 13, dt = 14, Pe = 15, Sn = 16, Mt = 17, fn = 18, $t = 19, St = 21, ze = 22, At = 23, mt = 24, at = 25, $ = !0, Ee = !1, le = !1, b = !1, Y = !1, Oe = !0, Ve = !0, $e = !0, it = !0, Tt = /* @__PURE__ */ new Set(), Qe = {}, Et = {};
    function Pt(e, t) {
      bn(e, t), bn(e + "Capture", t);
    }
    function bn(e, t) {
      Qe[e] && S("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), Qe[e] = t;
      {
        var a = e.toLowerCase();
        Et[a] = e, e === "onDoubleClick" && (Et.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        Tt.add(t[i]);
    }
    var Qn = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", rr = Object.prototype.hasOwnProperty;
    function Dn(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function Er(e) {
      try {
        return Pn(e), !1;
      } catch {
        return !0;
      }
    }
    function Pn(e) {
      return "" + e;
    }
    function kn(e, t) {
      if (Er(e))
        return S("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Dn(e)), Pn(e);
    }
    function ca(e) {
      if (Er(e))
        return S("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Dn(e)), Pn(e);
    }
    function Ga(e, t) {
      if (Er(e))
        return S("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Dn(e)), Pn(e);
    }
    function Dr(e, t) {
      if (Er(e))
        return S("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Dn(e)), Pn(e);
    }
    function Vn(e) {
      if (Er(e))
        return S("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", Dn(e)), Pn(e);
    }
    function Wn(e) {
      if (Er(e))
        return S("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", Dn(e)), Pn(e);
    }
    var Gn = 0, Cr = 1, Ka = 2, On = 3, ar = 4, Ir = 5, Li = 6, fa = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", te = fa + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", Me = new RegExp("^[" + fa + "][" + te + "]*$"), tt = {}, Nt = {};
    function an(e) {
      return rr.call(Nt, e) ? !0 : rr.call(tt, e) ? !1 : Me.test(e) ? (Nt[e] = !0, !0) : (tt[e] = !0, S("Invalid attribute name: `%s`", e), !1);
    }
    function ln(e, t, a) {
      return t !== null ? t.type === Gn : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function un(e, t, a, i) {
      if (a !== null && a.type === Gn)
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
      if (t === null || typeof t > "u" || un(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case On:
            return !t;
          case ar:
            return t === !1;
          case Ir:
            return isNaN(t);
          case Li:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function tn(e) {
      return zt.hasOwnProperty(e) ? zt[e] : null;
    }
    function Yt(e, t, a, i, u, s, f) {
      this.acceptsBooleans = t === Ka || t === On || t === ar, this.attributeName = i, this.attributeNamespace = u, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = f;
    }
    var zt = {}, da = [
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
      zt[e] = new Yt(
        e,
        Gn,
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
      zt[t] = new Yt(
        t,
        Cr,
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
      zt[e] = new Yt(
        e,
        Ka,
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
      zt[e] = new Yt(
        e,
        Ka,
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
      zt[e] = new Yt(
        e,
        On,
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
      zt[e] = new Yt(
        e,
        On,
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
      zt[e] = new Yt(
        e,
        ar,
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
      zt[e] = new Yt(
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
      zt[e] = new Yt(
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
    var ba = /[\-\:]([a-z])/g, Da = function(e) {
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
      var t = e.replace(ba, Da);
      zt[t] = new Yt(
        t,
        Cr,
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
      var t = e.replace(ba, Da);
      zt[t] = new Yt(
        t,
        Cr,
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
      var t = e.replace(ba, Da);
      zt[t] = new Yt(
        t,
        Cr,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      zt[e] = new Yt(
        e,
        Cr,
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
    var Mi = "xlinkHref";
    zt[Mi] = new Yt(
      "xlinkHref",
      Cr,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      zt[e] = new Yt(
        e,
        Cr,
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
    function Ni(e) {
      !Ql && Il.test(e) && (Ql = !0, S("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function Wl(e, t, a, i) {
      if (i.mustUseProperty) {
        var u = i.propertyName;
        return e[u];
      } else {
        kn(a, t), i.sanitizeURL && Ni("" + a);
        var s = i.attributeName, f = null;
        if (i.type === ar) {
          if (e.hasAttribute(s)) {
            var p = e.getAttribute(s);
            return p === "" ? !0 : Kn(t, a, i, !1) ? p : p === "" + a ? a : p;
          }
        } else if (e.hasAttribute(s)) {
          if (Kn(t, a, i, !1))
            return e.getAttribute(s);
          if (i.type === On)
            return a;
          f = e.getAttribute(s);
        }
        return Kn(t, a, i, !1) ? f === null ? a : f : f === "" + a ? a : f;
      }
    }
    function si(e, t, a, i) {
      {
        if (!an(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var u = e.getAttribute(t);
        return kn(a, t), u === "" + a ? a : u;
      }
    }
    function pa(e, t, a, i) {
      var u = tn(t);
      if (!ln(t, u, i)) {
        if (Kn(t, a, u, i) && (a = null), i || u === null) {
          if (an(t)) {
            var s = t;
            a === null ? e.removeAttribute(s) : (kn(a, t), e.setAttribute(s, "" + a));
          }
          return;
        }
        var f = u.mustUseProperty;
        if (f) {
          var p = u.propertyName;
          if (a === null) {
            var v = u.type;
            e[p] = v === On ? !1 : "";
          } else
            e[p] = a;
          return;
        }
        var y = u.attributeName, g = u.attributeNamespace;
        if (a === null)
          e.removeAttribute(y);
        else {
          var _ = u.type, w;
          _ === On || _ === ar && a === !0 ? w = "" : (kn(a, y), w = "" + a, u.sanitizeURL && Ni(w.toString())), g ? e.setAttributeNS(g, y, w) : e.setAttribute(y, w);
        }
      }
    }
    var ir = Symbol.for("react.element"), va = Symbol.for("react.portal"), Qr = Symbol.for("react.fragment"), ci = Symbol.for("react.strict_mode"), fi = Symbol.for("react.profiler"), zi = Symbol.for("react.provider"), R = Symbol.for("react.context"), I = Symbol.for("react.forward_ref"), ie = Symbol.for("react.suspense"), ce = Symbol.for("react.suspense_list"), ot = Symbol.for("react.memo"), Ye = Symbol.for("react.lazy"), pt = Symbol.for("react.scope"), nt = Symbol.for("react.debug_trace_mode"), En = Symbol.for("react.offscreen"), nn = Symbol.for("react.legacy_hidden"), on = Symbol.for("react.cache"), Rr = Symbol.for("react.tracing_marker"), qa = Symbol.iterator, Ut = "@@iterator";
    function dn(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = qa && e[qa] || e[Ut];
      return typeof t == "function" ? t : null;
    }
    var Ke = Object.assign, di = 0, Ui, ac, Ai, ol, Wr, $o, kr;
    function Yo() {
    }
    Yo.__reactDisabledLog = !0;
    function ic() {
      {
        if (di === 0) {
          Ui = console.log, ac = console.info, Ai = console.warn, ol = console.error, Wr = console.group, $o = console.groupCollapsed, kr = console.groupEnd;
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
            log: Ke({}, e, {
              value: Ui
            }),
            info: Ke({}, e, {
              value: ac
            }),
            warn: Ke({}, e, {
              value: Ai
            }),
            error: Ke({}, e, {
              value: ol
            }),
            group: Ke({}, e, {
              value: Wr
            }),
            groupCollapsed: Ke({}, e, {
              value: $o
            }),
            groupEnd: Ke({}, e, {
              value: kr
            })
          });
        }
        di < 0 && S("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Fi = Xe.ReactCurrentDispatcher, sl;
    function Gr(e, t, a) {
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
      var ju = typeof WeakMap == "function" ? WeakMap : Map;
      cl = new ju();
    }
    function ji(e, t) {
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
      s = Fi.current, Fi.current = null, ic();
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
            } catch (U) {
              i = U;
            }
            Reflect.construct(e, [], f);
          } else {
            try {
              f.call();
            } catch (U) {
              i = U;
            }
            e.call(f.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (U) {
            i = U;
          }
          e();
        }
      } catch (U) {
        if (U && i && typeof U.stack == "string") {
          for (var p = U.stack.split(`
`), v = i.stack.split(`
`), y = p.length - 1, g = v.length - 1; y >= 1 && g >= 0 && p[y] !== v[g]; )
            g--;
          for (; y >= 1 && g >= 0; y--, g--)
            if (p[y] !== v[g]) {
              if (y !== 1 || g !== 1)
                do
                  if (y--, g--, g < 0 || p[y] !== v[g]) {
                    var _ = `
` + p[y].replace(" at new ", " at ");
                    return e.displayName && _.includes("<anonymous>") && (_ = _.replace("<anonymous>", e.displayName)), typeof e == "function" && cl.set(e, _), _;
                  }
                while (y >= 1 && g >= 0);
              break;
            }
        }
      } finally {
        pi = !1, Fi.current = s, lc(), Error.prepareStackTrace = u;
      }
      var w = e ? e.displayName || e.name : "", N = w ? Gr(w) : "";
      return typeof e == "function" && cl.set(e, N), N;
    }
    function Gl(e, t, a) {
      return ji(e, !0);
    }
    function Kl(e, t, a) {
      return ji(e, !1);
    }
    function fl(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Io(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ji(e, fl(e));
      if (typeof e == "string")
        return Gr(e);
      switch (e) {
        case ie:
          return Gr("Suspense");
        case ce:
          return Gr("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case I:
            return Kl(e.render);
          case ot:
            return Io(e.type, t, a);
          case Ye: {
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
        case G:
          return Gr(e.type);
        case Sn:
          return Gr("Lazy");
        case xe:
          return Gr("Suspense");
        case $t:
          return Gr("SuspenseList");
        case Se:
        case se:
        case Pe:
          return Kl(e.type);
        case Ue:
          return Kl(e.type.render);
        case ne:
          return Gl(e.type);
        default:
          return "";
      }
    }
    function wt(e) {
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
    function xt(e) {
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
        case ie:
          return "Suspense";
        case ce:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case R:
            var t = e;
            return Hu(t) + ".Consumer";
          case zi:
            var a = e;
            return Hu(a._context) + ".Provider";
          case I:
            return Wo(e, e.render, "ForwardRef");
          case ot:
            var i = e.displayName || null;
            return i !== null ? i : xt(e.type) || "Memo";
          case Ye: {
            var u = e, s = u._payload, f = u._init;
            try {
              return xt(f(s));
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
    function Be(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case mt:
          return "Cache";
        case rn:
          var i = a;
          return vi(i) + ".Consumer";
        case ut:
          var u = a;
          return vi(u._context) + ".Provider";
        case fn:
          return "DehydratedFragment";
        case Ue:
          return uc(a, a.render, "ForwardRef");
        case Ge:
          return "Fragment";
        case G:
          return a;
        case ee:
          return "Portal";
        case B:
          return "Root";
        case de:
          return "Text";
        case Sn:
          return xt(a);
        case Hn:
          return a === ci ? "StrictMode" : "Mode";
        case ze:
          return "Offscreen";
        case kt:
          return "Profiler";
        case St:
          return "Scope";
        case xe:
          return "Suspense";
        case $t:
          return "SuspenseList";
        case at:
          return "TracingMarker";
        case ne:
        case Se:
        case Mt:
        case se:
        case dt:
        case Pe:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var ql = Xe.ReactDebugCurrentFrame, qn = null, Kr = !1;
    function Or() {
      {
        if (qn === null)
          return null;
        var e = qn._debugOwner;
        if (e !== null && typeof e < "u")
          return Be(e);
      }
      return null;
    }
    function hi() {
      return qn === null ? "" : wt(qn);
    }
    function mn() {
      ql.getCurrentStack = null, qn = null, Kr = !1;
    }
    function It(e) {
      ql.getCurrentStack = e === null ? null : hi, qn = e, Kr = !1;
    }
    function Xa() {
      return qn;
    }
    function ka(e) {
      Kr = e;
    }
    function Tr(e) {
      return "" + e;
    }
    function Lr(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return Wn(e), e;
        default:
          return "";
      }
    }
    var Kf = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function Pu(e, t) {
      Kf[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || S("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || S("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function Xl(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function Vu(e) {
      return e._valueTracker;
    }
    function Bu(e) {
      e._valueTracker = null;
    }
    function Zl(e) {
      var t = "";
      return e && (Xl(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function Oa(e) {
      var t = Xl(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      Wn(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var u = a.get, s = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return u.call(this);
          },
          set: function(p) {
            Wn(p), i = "" + p, s.call(this, p);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var f = {
          getValue: function() {
            return i;
          },
          setValue: function(p) {
            Wn(p), i = "" + p;
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
      var a = t.getValue(), i = Zl(e);
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
    function Go(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function Ma(e, t) {
      var a = e, i = t.checked, u = Ke({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return u;
    }
    function Iu(e, t) {
      Pu("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !pl && (S("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Or() || "A component", t.type), pl = !0), t.value !== void 0 && t.defaultValue !== void 0 && !$u && (S("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Or() || "A component", t.type), $u = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: Lr(t.value != null ? t.value : i),
        controlled: Go(t)
      };
    }
    function h(e, t) {
      var a = e, i = t.checked;
      i != null && pa(a, "checked", i, !1);
    }
    function C(e, t) {
      var a = e;
      {
        var i = Go(t);
        !a._wrapperState.controlled && i && !Yu && (S("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Yu = !0), a._wrapperState.controlled && !i && !Pi && (S("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Pi = !0);
      }
      h(e, t);
      var u = Lr(t.value), s = t.type;
      if (u != null)
        s === "number" ? (u === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != u) && (a.value = Tr(u)) : a.value !== Tr(u) && (a.value = Tr(u));
      else if (s === "submit" || s === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? ge(a, t.type, u) : t.hasOwnProperty("defaultValue") && ge(a, t.type, Lr(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function M(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var u = t.type, s = u === "submit" || u === "reset";
        if (s && (t.value === void 0 || t.value === null))
          return;
        var f = Tr(i._wrapperState.initialValue);
        a || f !== i.value && (i.value = f), i.defaultValue = f;
      }
      var p = i.name;
      p !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, p !== "" && (i.name = p);
    }
    function F(e, t) {
      var a = e;
      C(a, t), J(a, t);
    }
    function J(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        kn(a, "name");
        for (var u = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), s = 0; s < u.length; s++) {
          var f = u[s];
          if (!(f === e || f.form !== e.form)) {
            var p = Dh(f);
            if (!p)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            dl(f), C(f, p);
          }
        }
      }
    }
    function ge(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || Hi(e.ownerDocument) !== e) && (a == null ? e.defaultValue = Tr(e._wrapperState.initialValue) : e.defaultValue !== Tr(a) && (e.defaultValue = Tr(a)));
    }
    var pe = !1, Fe = !1, rt = !1;
    function Ft(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? oe.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || Fe || (Fe = !0, S("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (rt || (rt = !0, S("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !pe && (S("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), pe = !0);
    }
    function Qt(e, t) {
      t.value != null && e.setAttribute("value", Tr(Lr(t.value)));
    }
    var Wt = Array.isArray;
    function Je(e) {
      return Wt(e);
    }
    var Zt;
    Zt = !1;
    function Cn() {
      var e = Or();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var Jl = ["value", "defaultValue"];
    function Ko(e) {
      {
        Pu("select", e);
        for (var t = 0; t < Jl.length; t++) {
          var a = Jl[t];
          if (e[a] != null) {
            var i = Je(e[a]);
            e.multiple && !i ? S("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, Cn()) : !e.multiple && i && S("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, Cn());
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
        for (var g = Tr(Lr(a)), _ = null, w = 0; w < u.length; w++) {
          if (u[w].value === g) {
            u[w].selected = !0, i && (u[w].defaultSelected = !0);
            return;
          }
          _ === null && !u[w].disabled && (_ = u[w]);
        }
        _ !== null && (_.selected = !0);
      }
    }
    function eu(e, t) {
      return Ke({}, t, {
        value: void 0
      });
    }
    function qo(e, t) {
      var a = e;
      Ko(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !Zt && (S("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Zt = !0);
    }
    function qf(e, t) {
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
    function Xf(e, t) {
      var a = e, i = t.value;
      i != null && Vi(a, !!t.multiple, i, !1);
    }
    var Jp = !1;
    function sc(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = Ke({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: Tr(a._wrapperState.initialValue)
      });
      return i;
    }
    function ev(e, t) {
      var a = e;
      Pu("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !Jp && (S("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Or() || "A component"), Jp = !0);
      var i = t.value;
      if (i == null) {
        var u = t.children, s = t.defaultValue;
        if (u != null) {
          S("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (s != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (Je(u)) {
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
        initialValue: Lr(i)
      };
    }
    function tv(e, t) {
      var a = e, i = Lr(t.value), u = Lr(t.defaultValue);
      if (i != null) {
        var s = Tr(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      u != null && (a.defaultValue = Tr(u));
    }
    function nv(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function Ym(e, t) {
      tv(e, t);
    }
    var Za = "http://www.w3.org/1999/xhtml", Im = "http://www.w3.org/1998/Math/MathML", Zf = "http://www.w3.org/2000/svg";
    function Jf(e) {
      switch (e) {
        case "svg":
          return Zf;
        case "math":
          return Im;
        default:
          return Za;
      }
    }
    function cc(e, t) {
      return e == null || e === Za ? Jf(t) : e === Zf && t === "foreignObject" ? Za : e;
    }
    var Qm = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, u) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, u);
        });
      } : e;
    }, fc, rv = Qm(function(e, t) {
      if (e.namespaceURI === Zf && !("innerHTML" in e)) {
        fc = fc || document.createElement("div"), fc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = fc.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), qr = 1, Bi = 3, Ln = 8, $i = 9, Xo = 11, vl = function(e, t) {
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
    function Gm(e) {
      return e.replace(lv, "-$1").toLowerCase().replace(Wu, "-ms-");
    }
    var uv = function() {
    };
    {
      var Km = /^(?:webkit|moz|o)[A-Z]/, ov = /^-ms-/, sv = /-(.)/g, Gu = /;\s*$/, mi = {}, ed = {}, Zo = !1, cv = !1, fv = function(e) {
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
        ed.hasOwnProperty(t) && ed[t] || (ed[t] = !0, S(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(Gu, "")));
      }, pv = function(e, t) {
        Zo || (Zo = !0, S("`NaN` is an invalid value for the `%s` css style property.", e));
      }, vv = function(e, t) {
        cv || (cv = !0, S("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      uv = function(e, t) {
        e.indexOf("-") > -1 ? td(e) : Km.test(e) ? nd(e) : Gu.test(t) && dv(e, t), typeof t == "number" && (isNaN(t) ? pv(e, t) : isFinite(t) || vv(e, t));
      };
    }
    var qm = uv;
    function Xm(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var u = e[i];
            if (u != null) {
              var s = i.indexOf("--") === 0;
              t += a + (s ? i : Gm(i)) + ":", t += dc(i, u, s), a = ";";
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
          u || qm(i, t[i]);
          var s = dc(i, t[i], u);
          i === "float" && (i = "cssFloat"), u ? a.setProperty(i, s) : a[i] = s;
        }
    }
    function Zm(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function mv(e) {
      var t = {};
      for (var a in e)
        for (var i = Wm[a] || [a], u = 0; u < i.length; u++)
          t[i[u]] = a;
      return t;
    }
    function Ja(e, t) {
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
            u[v] = !0, S("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", Zm(e[f]) ? "Removing" : "Updating", f, p);
          }
        }
      }
    }
    var Jo = {
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
    }, yv = Ke({
      menuitem: !0
    }, Jo), gv = "__html";
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
    var Ku = {
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
    }, qu = {}, Xu = new RegExp("^(aria)-[" + te + "]*$"), rd = new RegExp("^(aria)[A-Z][" + te + "]*$");
    function es(e, t) {
      {
        if (rr.call(qu, t) && qu[t])
          return !0;
        if (rd.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = Sv.hasOwnProperty(a) ? a : null;
          if (i == null)
            return S("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), qu[t] = !0, !0;
          if (t !== i)
            return S("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), qu[t] = !0, !0;
        }
        if (Xu.test(t)) {
          var u = t.toLowerCase(), s = Sv.hasOwnProperty(u) ? u : null;
          if (s == null)
            return qu[t] = !0, !1;
          if (t !== s)
            return S("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), qu[t] = !0, !0;
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
    function Zu(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !ts && (ts = !0, e === "select" && t.multiple ? S("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : S("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var vc = function() {
    };
    {
      var wr = {}, ns = /^on./, Cv = /^on[^A-Z]/, Rv = new RegExp("^(aria)-[" + te + "]*$"), Tv = new RegExp("^(aria)[A-Z][" + te + "]*$");
      vc = function(e, t, a, i) {
        if (rr.call(wr, t) && wr[t])
          return !0;
        var u = t.toLowerCase();
        if (u === "onfocusin" || u === "onfocusout")
          return S("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), wr[t] = !0, !0;
        if (i != null) {
          var s = i.registrationNameDependencies, f = i.possibleRegistrationNames;
          if (s.hasOwnProperty(t))
            return !0;
          var p = f.hasOwnProperty(u) ? f[u] : null;
          if (p != null)
            return S("Invalid event handler property `%s`. Did you mean `%s`?", t, p), wr[t] = !0, !0;
          if (ns.test(t))
            return S("Unknown event handler property `%s`. It will be ignored.", t), wr[t] = !0, !0;
        } else if (ns.test(t))
          return Cv.test(t) && S("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), wr[t] = !0, !0;
        if (Rv.test(t) || Tv.test(t))
          return !0;
        if (u === "innerhtml")
          return S("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), wr[t] = !0, !0;
        if (u === "aria")
          return S("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), wr[t] = !0, !0;
        if (u === "is" && a !== null && a !== void 0 && typeof a != "string")
          return S("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), wr[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return S("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), wr[t] = !0, !0;
        var v = tn(t), y = v !== null && v.type === Gn;
        if (Ku.hasOwnProperty(u)) {
          var g = Ku[u];
          if (g !== t)
            return S("Invalid DOM property `%s`. Did you mean `%s`?", t, g), wr[t] = !0, !0;
        } else if (!y && t !== u)
          return S("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, u), wr[t] = !0, !0;
        return typeof a == "boolean" && un(t, a, v, !1) ? (a ? S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), wr[t] = !0, !0) : y ? !0 : un(t, a, v, !1) ? (wr[t] = !0, !1) : ((a === "false" || a === "true") && v !== null && v.type === On && (S("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), wr[t] = !0), !0);
      };
    }
    var wv = function(e, t, a) {
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
    function xv(e, t, a) {
      hl(e, t) || wv(e, t, a);
    }
    var id = 1, yi = 2, tu = 4, ld = id | yi | tu, rs = null;
    function Jm(e) {
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
    var mc = null, jt = null, ml = null;
    function is(e) {
      var t = bo(e);
      if (t) {
        if (typeof mc != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = Dh(a);
          mc(t.stateNode, t.type, i);
        }
      }
    }
    function ls(e) {
      mc = e;
    }
    function ud(e) {
      jt ? ml ? ml.push(e) : ml = [e] : jt = e;
    }
    function od() {
      return jt !== null || ml !== null;
    }
    function Ju() {
      if (jt) {
        var e = jt, t = ml;
        if (jt = null, ml = null, is(e), t)
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
      e && (nu(), Ju());
    }
    function _v(e, t, a) {
      if (yc)
        return e(t, a);
      yc = !0;
      try {
        return us(e, t, a);
      } finally {
        yc = !1, ty();
      }
    }
    function bv(e, t, a) {
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
      var i = Dh(a);
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
    if (Qn)
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
    var Dv = Ec;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var Cc = document.createElement("react");
      Dv = function(t, a, i, u, s, f, p, v, y) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var g = document.createEvent("Event"), _ = !1, w = !0, N = window.event, U = Object.getOwnPropertyDescriptor(window, "event");
        function j() {
          Cc.removeEventListener(H, Ne, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = N);
        }
        var ue = Array.prototype.slice.call(arguments, 3);
        function Ne() {
          _ = !0, j(), a.apply(i, ue), w = !1;
        }
        var be, bt = !1, yt = !1;
        function k(O) {
          if (be = O.error, bt = !0, be === null && O.colno === 0 && O.lineno === 0 && (yt = !0), O.defaultPrevented && be != null && typeof be == "object")
            try {
              be._suppressLogging = !0;
            } catch {
            }
        }
        var H = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", k), Cc.addEventListener(H, Ne, !1), g.initEvent(H, !1, !1), Cc.dispatchEvent(g), U && Object.defineProperty(window, "event", U), _ && w && (bt ? yt && (be = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : be = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(be)), window.removeEventListener("error", k), !_)
          return j(), Ec.apply(this, arguments);
      };
    }
    var ny = Dv, eo = !1, to = null, ei = !1, Rc = null, no = {
      onError: function(e) {
        eo = !0, to = e;
      }
    };
    function Na(e, t, a, i, u, s, f, p, v) {
      eo = !1, to = null, ny.apply(no, arguments);
    }
    function ss(e, t, a, i, u, s, f, p, v) {
      if (Na.apply(this, arguments), eo) {
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
    var De = (
      /*                      */
      0
    ), Ii = (
      /*                */
      1
    ), Mn = (
      /*                    */
      2
    ), vt = (
      /*                       */
      4
    ), Xr = (
      /*                */
      16
    ), Gt = (
      /*                 */
      32
    ), Jt = (
      /*                     */
      64
    ), st = (
      /*                   */
      128
    ), yn = (
      /*            */
      256
    ), Nn = (
      /*                          */
      512
    ), za = (
      /*                     */
      1024
    ), ha = (
      /*                      */
      2048
    ), zn = (
      /*                    */
      4096
    ), gi = (
      /*                   */
      8192
    ), Tc = (
      /*             */
      16384
    ), kv = (
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
      vt | za | 0
    ), ao = Mn | vt | Xr | Gt | Nn | zn | gi, El = vt | Jt | Nn | gi, lr = ha | Xr, Un = yl | fd | ds, uu = Xe.ReactCurrentOwner;
    function Nr(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (Mn | zn)) !== De && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === B ? a : null;
    }
    function Si(e) {
      if (e.tag === xe) {
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
      return e.tag === B ? e.stateNode.containerInfo : null;
    }
    function Ov(e) {
      return Nr(e) === e;
    }
    function dd(e) {
      {
        var t = uu.current;
        if (t !== null && t.tag === ne) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || S("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Be(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var u = ro(e);
      return u ? Nr(u) === u : !1;
    }
    function wc(e) {
      if (Nr(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function Zr(e) {
      var t = e.alternate;
      if (!t) {
        var a = Nr(e);
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
              return wc(s), e;
            if (v === u)
              return wc(s), t;
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
      if (i.tag !== B)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function Jr(e) {
      var t = Zr(e);
      return t !== null ? sn(t) : null;
    }
    function sn(e) {
      if (e.tag === G || e.tag === de)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = sn(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function ni(e) {
      var t = Zr(e);
      return t !== null ? pd(t) : null;
    }
    function pd(e) {
      if (e.tag === G || e.tag === de)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== ee) {
          var a = pd(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var vd = A.unstable_scheduleCallback, hd = A.unstable_cancelCallback, md = A.unstable_shouldYield, Lv = A.unstable_requestPaint, Rn = A.unstable_now, Mv = A.unstable_getCurrentPriorityLevel, Qi = A.unstable_ImmediatePriority, ps = A.unstable_UserBlockingPriority, ou = A.unstable_NormalPriority, vs = A.unstable_LowPriority, io = A.unstable_IdlePriority, Nv = A.unstable_yieldValue, zv = A.unstable_setDisableYieldValue, ri = null, ur = null, ae = null, ma = !1, xr = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function yd(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return S("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        Ve && (e = Ke({}, e, {
          getLaneLabelMap: Cd,
          injectProfilingHooks: su
        })), ri = t.inject(e), ur = t;
      } catch (a) {
        S("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function gd(e, t) {
      if (ur && typeof ur.onScheduleFiberRoot == "function")
        try {
          ur.onScheduleFiberRoot(ri, e, t);
        } catch (a) {
          ma || (ma = !0, S("React instrumentation encountered an error: %s", a));
        }
    }
    function Sd(e, t) {
      if (ur && typeof ur.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & st) === st;
          if ($e) {
            var i;
            switch (t) {
              case ra:
                i = Qi;
                break;
              case Fa:
                i = ps;
                break;
              case or:
                i = ou;
                break;
              case ef:
                i = io;
                break;
              default:
                i = ou;
                break;
            }
            ur.onCommitFiberRoot(ri, e, i, a);
          }
        } catch (u) {
          ma || (ma = !0, S("React instrumentation encountered an error: %s", u));
        }
    }
    function Ed(e) {
      if (ur && typeof ur.onPostCommitFiberRoot == "function")
        try {
          ur.onPostCommitFiberRoot(ri, e);
        } catch (t) {
          ma || (ma = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function lo(e) {
      if (ur && typeof ur.onCommitFiberUnmount == "function")
        try {
          ur.onCommitFiberUnmount(ri, e);
        } catch (t) {
          ma || (ma = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function Vt(e) {
      if (typeof Nv == "function" && (zv(e), ft(e)), ur && typeof ur.setStrictMode == "function")
        try {
          ur.setStrictMode(ri, e);
        } catch (t) {
          ma || (ma = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function su(e) {
      ae = e;
    }
    function Cd() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < bd; a++) {
          var i = Pv(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function Uv(e) {
      ae !== null && typeof ae.markCommitStarted == "function" && ae.markCommitStarted(e);
    }
    function Ei() {
      ae !== null && typeof ae.markCommitStopped == "function" && ae.markCommitStopped();
    }
    function Aa(e) {
      ae !== null && typeof ae.markComponentRenderStarted == "function" && ae.markComponentRenderStarted(e);
    }
    function Rl() {
      ae !== null && typeof ae.markComponentRenderStopped == "function" && ae.markComponentRenderStopped();
    }
    function Av(e) {
      ae !== null && typeof ae.markComponentPassiveEffectMountStarted == "function" && ae.markComponentPassiveEffectMountStarted(e);
    }
    function Wi() {
      ae !== null && typeof ae.markComponentPassiveEffectMountStopped == "function" && ae.markComponentPassiveEffectMountStopped();
    }
    function Tl(e) {
      ae !== null && typeof ae.markComponentPassiveEffectUnmountStarted == "function" && ae.markComponentPassiveEffectUnmountStarted(e);
    }
    function xc() {
      ae !== null && typeof ae.markComponentPassiveEffectUnmountStopped == "function" && ae.markComponentPassiveEffectUnmountStopped();
    }
    function Fv(e) {
      ae !== null && typeof ae.markComponentLayoutEffectMountStarted == "function" && ae.markComponentLayoutEffectMountStarted(e);
    }
    function _c() {
      ae !== null && typeof ae.markComponentLayoutEffectMountStopped == "function" && ae.markComponentLayoutEffectMountStopped();
    }
    function Rd(e) {
      ae !== null && typeof ae.markComponentLayoutEffectUnmountStarted == "function" && ae.markComponentLayoutEffectUnmountStarted(e);
    }
    function uo() {
      ae !== null && typeof ae.markComponentLayoutEffectUnmountStopped == "function" && ae.markComponentLayoutEffectUnmountStopped();
    }
    function Ci(e, t, a) {
      ae !== null && typeof ae.markComponentErrored == "function" && ae.markComponentErrored(e, t, a);
    }
    function hs(e, t, a) {
      ae !== null && typeof ae.markComponentSuspended == "function" && ae.markComponentSuspended(e, t, a);
    }
    function ms(e) {
      ae !== null && typeof ae.markLayoutEffectsStarted == "function" && ae.markLayoutEffectsStarted(e);
    }
    function cu() {
      ae !== null && typeof ae.markLayoutEffectsStopped == "function" && ae.markLayoutEffectsStopped();
    }
    function Td(e) {
      ae !== null && typeof ae.markPassiveEffectsStarted == "function" && ae.markPassiveEffectsStarted(e);
    }
    function oo() {
      ae !== null && typeof ae.markPassiveEffectsStopped == "function" && ae.markPassiveEffectsStopped();
    }
    function wd(e) {
      ae !== null && typeof ae.markRenderStarted == "function" && ae.markRenderStarted(e);
    }
    function xd() {
      ae !== null && typeof ae.markRenderYielded == "function" && ae.markRenderYielded();
    }
    function pn() {
      ae !== null && typeof ae.markRenderStopped == "function" && ae.markRenderStopped();
    }
    function bc(e) {
      ae !== null && typeof ae.markRenderScheduled == "function" && ae.markRenderScheduled(e);
    }
    function _d(e, t) {
      ae !== null && typeof ae.markForceUpdateScheduled == "function" && ae.markForceUpdateScheduled(e, t);
    }
    function ys(e, t) {
      ae !== null && typeof ae.markStateUpdateScheduled == "function" && ae.markStateUpdateScheduled(e, t);
    }
    var ke = (
      /*                         */
      0
    ), ct = (
      /*                 */
      1
    ), Ct = (
      /*                    */
      2
    ), qe = (
      /*               */
      8
    ), Kt = (
      /*              */
      16
    ), Bn = Math.clz32 ? Math.clz32 : Ss, Dc = Math.log, gs = Math.LN2;
    function Ss(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (Dc(t) / gs | 0) | 0;
    }
    var bd = 31, P = (
      /*                        */
      0
    ), An = (
      /*                          */
      0
    ), Ae = (
      /*                        */
      1
    ), wl = (
      /*    */
      2
    ), Xn = (
      /*             */
      4
    ), Zn = (
      /*            */
      8
    ), ea = (
      /*                     */
      16
    ), fu = (
      /*                */
      32
    ), xl = (
      /*                       */
      4194240
    ), so = (
      /*                        */
      64
    ), kc = (
      /*                        */
      128
    ), Oc = (
      /*                        */
      256
    ), Lc = (
      /*                        */
      512
    ), Mc = (
      /*                        */
      1024
    ), Nc = (
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
    ), Fc = (
      /*                       */
      262144
    ), Es = (
      /*                       */
      524288
    ), jc = (
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
    ), jv = pu, po = (
      /*          */
      134217728
    ), Hv = (
      /*                          */
      268435455
    ), Ts = (
      /*               */
      268435456
    ), _l = (
      /*                        */
      536870912
    ), ya = (
      /*                   */
      1073741824
    );
    function Pv(e) {
      {
        if (e & Ae)
          return "Sync";
        if (e & wl)
          return "InputContinuousHydration";
        if (e & Xn)
          return "InputContinuous";
        if (e & Zn)
          return "DefaultHydration";
        if (e & ea)
          return "Default";
        if (e & fu)
          return "TransitionHydration";
        if (e & xl)
          return "Transition";
        if (e & Cs)
          return "Retry";
        if (e & po)
          return "SelectiveHydration";
        if (e & Ts)
          return "IdleHydration";
        if (e & _l)
          return "Idle";
        if (e & ya)
          return "Offscreen";
      }
    }
    var Bt = -1, $c = so, Yc = pu;
    function ws(e) {
      switch (vu(e)) {
        case Ae:
          return Ae;
        case wl:
          return wl;
        case Xn:
          return Xn;
        case Zn:
          return Zn;
        case ea:
          return ea;
        case fu:
          return fu;
        case so:
        case kc:
        case Oc:
        case Lc:
        case Mc:
        case Nc:
        case zc:
        case Uc:
        case du:
        case Ac:
        case co:
        case fo:
        case Fc:
        case Es:
        case jc:
        case Hc:
          return e & xl;
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
        case _l:
          return _l;
        case ya:
          return ya;
        default:
          return S("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function ta(e, t) {
      var a = e.pendingLanes;
      if (a === P)
        return P;
      var i = P, u = e.suspendedLanes, s = e.pingedLanes, f = a & Hv;
      if (f !== P) {
        var p = f & ~u;
        if (p !== P)
          i = ws(p);
        else {
          var v = f & s;
          v !== P && (i = ws(v));
        }
      } else {
        var y = a & ~u;
        y !== P ? i = ws(y) : s !== P && (i = ws(s));
      }
      if (i === P)
        return P;
      if (t !== P && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & u) === P) {
        var g = vu(i), _ = vu(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          g >= _ || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          g === ea && (_ & xl) !== P
        )
          return t;
      }
      (i & Xn) !== P && (i |= a & ea);
      var w = e.entangledLanes;
      if (w !== P)
        for (var N = e.entanglements, U = i & w; U > 0; ) {
          var j = Tn(U), ue = 1 << j;
          i |= N[j], U &= ~ue;
        }
      return i;
    }
    function Dd(e, t) {
      for (var a = e.eventTimes, i = Bt; t > 0; ) {
        var u = Tn(t), s = 1 << u, f = a[u];
        f > i && (i = f), t &= ~s;
      }
      return i;
    }
    function Ic(e, t) {
      switch (e) {
        case Ae:
        case wl:
        case Xn:
          return t + 250;
        case Zn:
        case ea:
        case fu:
        case so:
        case kc:
        case Oc:
        case Lc:
        case Mc:
        case Nc:
        case zc:
        case Uc:
        case du:
        case Ac:
        case co:
        case fo:
        case Fc:
        case Es:
        case jc:
        case Hc:
          return t + 5e3;
        case pu:
        case Rs:
        case Pc:
        case Vc:
        case Bc:
          return Bt;
        case po:
        case Ts:
        case _l:
        case ya:
          return Bt;
        default:
          return S("Should have found matching lanes. This is a bug in React."), Bt;
      }
    }
    function Vv(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, u = e.pingedLanes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = Tn(f), v = 1 << p, y = s[p];
        y === Bt ? ((v & i) === P || (v & u) !== P) && (s[p] = Ic(v, t)) : y <= t && (e.expiredLanes |= v), f &= ~v;
      }
    }
    function Bv(e) {
      return ws(e.pendingLanes);
    }
    function Qc(e) {
      var t = e.pendingLanes & -1073741825;
      return t !== P ? t : t & ya ? ya : P;
    }
    function kd(e) {
      return (e & Ae) !== P;
    }
    function bl(e) {
      return (e & Hv) !== P;
    }
    function Wc(e) {
      return (e & Cs) === e;
    }
    function Od(e) {
      var t = Ae | Xn | ea;
      return (e & t) === P;
    }
    function ry(e) {
      return (e & xl) === e;
    }
    function xs(e, t) {
      var a = wl | Xn | Zn | ea;
      return (t & a) !== P;
    }
    function $v(e, t) {
      return (t & e.expiredLanes) !== P;
    }
    function Ld(e) {
      return (e & xl) !== P;
    }
    function Md() {
      var e = $c;
      return $c <<= 1, ($c & xl) === P && ($c = so), e;
    }
    function Yv() {
      var e = Yc;
      return Yc <<= 1, (Yc & Cs) === P && (Yc = pu), e;
    }
    function vu(e) {
      return e & -e;
    }
    function Jn(e) {
      return vu(e);
    }
    function Tn(e) {
      return 31 - Bn(e);
    }
    function Gc(e) {
      return Tn(e);
    }
    function na(e, t) {
      return (e & t) !== P;
    }
    function hu(e, t) {
      return (e & t) === t;
    }
    function et(e, t) {
      return e | t;
    }
    function _s(e, t) {
      return e & ~t;
    }
    function Kc(e, t) {
      return e & t;
    }
    function ay(e) {
      return e;
    }
    function Nd(e, t) {
      return e !== An && e < t ? e : t;
    }
    function qc(e) {
      for (var t = [], a = 0; a < bd; a++)
        t.push(e);
      return t;
    }
    function vo(e, t, a) {
      e.pendingLanes |= t, t !== _l && (e.suspendedLanes = P, e.pingedLanes = P);
      var i = e.eventTimes, u = Gc(t);
      i[u] = a;
    }
    function zd(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var u = Tn(i), s = 1 << u;
        a[u] = Bt, i &= ~s;
      }
    }
    function Xc(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function Iv(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = P, e.pingedLanes = P, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, u = e.eventTimes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = Tn(f), v = 1 << p;
        i[p] = P, u[p] = Bt, s[p] = Bt, f &= ~v;
      }
    }
    function bs(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, u = a; u; ) {
        var s = Tn(u), f = 1 << s;
        // Is this one of the newly entangled lanes?
        f & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[s] & t && (i[s] |= t), u &= ~f;
      }
    }
    function Zc(e, t) {
      var a = vu(t), i;
      switch (a) {
        case Xn:
          i = wl;
          break;
        case ea:
          i = Zn;
          break;
        case so:
        case kc:
        case Oc:
        case Lc:
        case Mc:
        case Nc:
        case zc:
        case Uc:
        case du:
        case Ac:
        case co:
        case fo:
        case Fc:
        case Es:
        case jc:
        case Hc:
        case pu:
        case Rs:
        case Pc:
        case Vc:
        case Bc:
          i = fu;
          break;
        case _l:
          i = Ts;
          break;
        default:
          i = An;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== An ? An : i;
    }
    function Qv(e, t, a) {
      if (xr)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var u = Gc(a), s = 1 << u, f = i[u];
          f.add(t), a &= ~s;
        }
    }
    function Ud(e, t) {
      if (xr)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var u = Gc(t), s = 1 << u, f = a[u];
          f.size > 0 && (f.forEach(function(p) {
            var v = p.alternate;
            (v === null || !i.has(v)) && i.add(p);
          }), f.clear()), t &= ~s;
        }
    }
    function Jc(e, t) {
      return null;
    }
    var ra = Ae, Fa = Xn, or = ea, ef = _l, ho = An;
    function ga() {
      return ho;
    }
    function $n(e) {
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
    function Ds(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function _r(e, t) {
      return e > t ? e : t;
    }
    function Ad(e, t) {
      return e !== 0 && e < t;
    }
    function Gv(e) {
      var t = vu(e);
      return Ad(ra, t) ? Ad(Fa, t) ? bl(t) ? or : ef : Fa : ra;
    }
    function mu(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var sr;
    function iy(e) {
      sr = e;
    }
    function ye(e) {
      sr(e);
    }
    var Dl;
    function Fd(e) {
      Dl = e;
    }
    var jd;
    function ly(e) {
      jd = e;
    }
    var mo;
    function tf(e) {
      mo = e;
    }
    var nf;
    function Kv(e) {
      nf = e;
    }
    var rf = !1, ks = [], Ri = null, Ti = null, vn = null, zr = /* @__PURE__ */ new Map(), ja = /* @__PURE__ */ new Map(), Gi = [], qv = [
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
      return qv.indexOf(e) > -1;
    }
    function Xv(e, t, a, i, u) {
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
          vn = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          zr.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var i = t.pointerId;
          ja.delete(i);
          break;
        }
      }
    }
    function Os(e, t, a, i, u, s) {
      if (e === null || e.nativeEvent !== s) {
        var f = Xv(t, a, i, u, s);
        if (t !== null) {
          var p = bo(t);
          p !== null && Dl(p);
        }
        return f;
      }
      e.eventSystemFlags |= i;
      var v = e.targetContainers;
      return u !== null && v.indexOf(u) === -1 && v.push(u), e;
    }
    function Zv(e, t, a, i, u) {
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
          return vn = Os(vn, e, t, a, i, p), !0;
        }
        case "pointerover": {
          var v = u, y = v.pointerId;
          return zr.set(y, Os(zr.get(y) || null, e, t, a, i, v)), !0;
        }
        case "gotpointercapture": {
          var g = u, _ = g.pointerId;
          return ja.set(_, Os(ja.get(_) || null, e, t, a, i, g)), !0;
        }
      }
      return !1;
    }
    function Hd(e) {
      var t = Bs(e.target);
      if (t !== null) {
        var a = Nr(t);
        if (a !== null) {
          var i = a.tag;
          if (i === xe) {
            var u = Si(a);
            if (u !== null) {
              e.blockedOn = u, nf(e.priority, function() {
                jd(a);
              });
              return;
            }
          } else if (i === B) {
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
    function Jv(e) {
      for (var t = mo(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < Gi.length && Ad(t, Gi[i].priority); i++)
        ;
      Gi.splice(i, 0, a), i === 0 && Hd(a);
    }
    function Ls(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = Ms(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var u = e.nativeEvent, s = new u.constructor(u.type, u);
          Jm(s), u.target.dispatchEvent(s), as();
        } else {
          var f = bo(i);
          return f !== null && Dl(f), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function eh(e, t, a) {
      Ls(e) && a.delete(t);
    }
    function af() {
      rf = !1, Ri !== null && Ls(Ri) && (Ri = null), Ti !== null && Ls(Ti) && (Ti = null), vn !== null && Ls(vn) && (vn = null), zr.forEach(eh), ja.forEach(eh);
    }
    function yu(e, t) {
      e.blockedOn === t && (e.blockedOn = null, rf || (rf = !0, A.unstable_scheduleCallback(A.unstable_NormalPriority, af)));
    }
    function br(e) {
      if (ks.length > 0) {
        yu(ks[0], e);
        for (var t = 1; t < ks.length; t++) {
          var a = ks[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      Ri !== null && yu(Ri, e), Ti !== null && yu(Ti, e), vn !== null && yu(vn, e);
      var i = function(p) {
        return yu(p, e);
      };
      zr.forEach(i), ja.forEach(i);
      for (var u = 0; u < Gi.length; u++) {
        var s = Gi[u];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; Gi.length > 0; ) {
        var f = Gi[0];
        if (f.blockedOn !== null)
          break;
        Hd(f), f.blockedOn === null && Gi.shift();
      }
    }
    var ht = Xe.ReactCurrentBatchConfig, Fn = !0;
    function wn(e) {
      Fn = !!e;
    }
    function cr() {
      return Fn;
    }
    function Sa(e, t, a) {
      var i = go(t), u;
      switch (i) {
        case ra:
          u = yo;
          break;
        case Fa:
          u = Yn;
          break;
        case or:
        default:
          u = gu;
          break;
      }
      return u.bind(null, t, a, e);
    }
    function yo(e, t, a, i) {
      var u = ga(), s = ht.transition;
      ht.transition = null;
      try {
        $n(ra), gu(e, t, a, i);
      } finally {
        $n(u), ht.transition = s;
      }
    }
    function Yn(e, t, a, i) {
      var u = ga(), s = ht.transition;
      ht.transition = null;
      try {
        $n(Fa), gu(e, t, a, i);
      } finally {
        $n(u), ht.transition = s;
      }
    }
    function gu(e, t, a, i) {
      Fn && Su(e, t, a, i);
    }
    function Su(e, t, a, i) {
      var u = Ms(e, t, a, i);
      if (u === null) {
        wy(e, t, i, Eu, a), ii(e, i);
        return;
      }
      if (Zv(u, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (ii(e, i), t & tu && ai(e)) {
        for (; u !== null; ) {
          var s = bo(u);
          s !== null && ye(s);
          var f = Ms(e, t, a, i);
          if (f === null && wy(e, t, i, Eu, a), f === u)
            break;
          u = f;
        }
        u !== null && i.stopPropagation();
        return;
      }
      wy(e, t, i, null, a);
    }
    var Eu = null;
    function Ms(e, t, a, i) {
      Eu = null;
      var u = hc(i), s = Bs(u);
      if (s !== null) {
        var f = Nr(s);
        if (f === null)
          s = null;
        else {
          var p = f.tag;
          if (p === xe) {
            var v = Si(f);
            if (v !== null)
              return v;
            s = null;
          } else if (p === B) {
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
          return Fa;
        case "message": {
          var t = Mv();
          switch (t) {
            case Qi:
              return ra;
            case ps:
              return Fa;
            case ou:
            case vs:
              return or;
            case io:
              return ef;
            default:
              return or;
          }
        }
        default:
          return or;
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
    function Ki(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var kl = null, Ns = null, Ha = null;
    function lf(e) {
      return kl = e, Ns = Eo(), !0;
    }
    function Ol() {
      kl = null, Ns = null, Ha = null;
    }
    function zs() {
      if (Ha)
        return Ha;
      var e, t = Ns, a = t.length, i, u = Eo(), s = u.length;
      for (e = 0; e < a && t[e] === u[e]; e++)
        ;
      var f = a - e;
      for (i = 1; i <= f && t[a - i] === u[s - i]; i++)
        ;
      var p = i > 1 ? 1 - i : void 0;
      return Ha = u.slice(e, p), Ha;
    }
    function Eo() {
      return "value" in kl ? kl.value : kl.textContent;
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
    function en(e) {
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
      return Ke(t.prototype, {
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
    }, Ca = en(Ea), er = Ke({}, Ea, {
      view: 0,
      detail: 0
    }), th = en(er), As, Fs, js;
    function Ll(e) {
      e !== js && (js && e.type === "mousemove" ? (As = e.screenX - js.screenX, Fs = e.screenY - js.screenY) : (As = 0, Fs = 0), js = e);
    }
    var Hs = Ke({}, er, {
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
        return "movementY" in e ? e.movementY : Fs;
      }
    }), uf = en(Hs), Ru = Ke({}, Hs, {
      dataTransfer: 0
    }), Vd = en(Ru), Tu = Ke({}, er, {
      relatedTarget: 0
    }), of = en(Tu), nh = Ke({}, Ea, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Bd = en(nh), sf = Ke({}, Ea, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), uy = en(sf), oy = Ke({}, Ea, {
      data: 0
    }), $d = en(oy), rh = $d, wu = {
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
        var t = wu[e.key] || e.key;
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
    function gn(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = ah[e];
      return i ? !!a[i] : !1;
    }
    function Yd(e) {
      return gn;
    }
    var ih = Ke({}, er, {
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
    }), cy = en(ih), fy = Ke({}, Hs, {
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
    }), Id = en(fy), lh = Ke({}, er, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Yd
    }), dy = en(lh), Pa = Ke({}, Ea, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Qd = en(Pa), py = Ke({}, Hs, {
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
    }), Ml = en(py), cf = [9, 13, 27, 32], Nl = 229, To = Qn && "CompositionEvent" in window, xu = null;
    Qn && "documentMode" in document && (xu = document.documentMode);
    var Wd = Qn && "TextEvent" in window && !xu, uh = Qn && (!To || xu && xu > 8 && xu <= 11), ff = 32, oh = String.fromCharCode(ff);
    function sh() {
      Pt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Pt("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Pt("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Pt("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var Gd = !1;
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
      return e === "keydown" && t.keyCode === Nl;
    }
    function vf(e, t) {
      switch (e) {
        case "keyup":
          return cf.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== Nl;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function Kd(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function hf(e) {
      return e.locale === "ko";
    }
    var qi = !1;
    function qd(e, t, a, i, u) {
      var s, f;
      if (To ? s = pf(t) : qi ? vf(t, i) && (s = "onCompositionEnd") : ch(t, i) && (s = "onCompositionStart"), !s)
        return null;
      uh && !hf(i) && (!qi && s === "onCompositionStart" ? qi = lf(u) : s === "onCompositionEnd" && qi && (f = zs()));
      var p = hh(a, s);
      if (p.length > 0) {
        var v = new $d(s, t, null, i, u);
        if (e.push({
          event: v,
          listeners: p
        }), f)
          v.data = f;
        else {
          var y = Kd(i);
          y !== null && (v.data = y);
        }
      }
    }
    function mf(e, t) {
      switch (e) {
        case "compositionend":
          return Kd(t);
        case "keypress":
          var a = t.which;
          return a !== ff ? null : (Gd = !0, oh);
        case "textInput":
          var i = t.data;
          return i === oh && Gd ? null : i;
        default:
          return null;
      }
    }
    function fh(e, t) {
      if (qi) {
        if (e === "compositionend" || !To && vf(e, t)) {
          var a = zs();
          return Ol(), qi = !1, a;
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
      qd(e, t, a, i, u), vy(e, t, a, i, u);
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
    function wo(e) {
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
      if (!Qn)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function gf() {
      Pt("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
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
      n(t, l, e, hc(e)), _v(d, t);
    }
    function d(e) {
      _E(e, 0);
    }
    function m(e) {
      var t = wf(e);
      if (dl(t))
        return e;
    }
    function E(e, t) {
      if (e === "change")
        return t;
    }
    var T = !1;
    Qn && (T = my("input") && (!document.documentMode || document.documentMode > 9));
    function z(e, t) {
      r = e, l = t, r.attachEvent("onpropertychange", K);
    }
    function W() {
      r && (r.detachEvent("onpropertychange", K), r = null, l = null);
    }
    function K(e) {
      e.propertyName === "value" && m(l) && c(e);
    }
    function Q(e, t, a) {
      e === "focusin" ? (W(), z(t, a)) : e === "focusout" && W();
    }
    function ve(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return m(l);
    }
    function Ce(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function we(e, t) {
      if (e === "click")
        return m(t);
    }
    function xn(e, t) {
      if (e === "input" || e === "change")
        return m(t);
    }
    function D(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || ge(e, "number", e.value);
    }
    function x(e, t, a, i, u, s, f) {
      var p = a ? wf(a) : window, v, y;
      if (o(p) ? v = E : wo(p) ? T ? v = xn : (v = ve, y = Q) : Ce(p) && (v = we), v) {
        var g = v(t, a);
        if (g) {
          n(e, g, i, u);
          return;
        }
      }
      y && y(t, p, a), t === "focusout" && D(p);
    }
    function L() {
      bn("onMouseEnter", ["mouseout", "mouseover"]), bn("onMouseLeave", ["mouseout", "mouseover"]), bn("onPointerEnter", ["pointerout", "pointerover"]), bn("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function Z(e, t, a, i, u, s, f) {
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
          var _ = u.ownerDocument;
          _ ? g = _.defaultView || _.parentWindow : g = window;
        }
        var w, N;
        if (v) {
          var U = i.relatedTarget || i.toElement;
          if (w = a, N = U ? Bs(U) : null, N !== null) {
            var j = Nr(N);
            (N !== j || N.tag !== G && N.tag !== de) && (N = null);
          }
        } else
          w = null, N = a;
        if (w !== N) {
          var ue = uf, Ne = "onMouseLeave", be = "onMouseEnter", bt = "mouse";
          (t === "pointerout" || t === "pointerover") && (ue = Id, Ne = "onPointerLeave", be = "onPointerEnter", bt = "pointer");
          var yt = w == null ? g : wf(w), k = N == null ? g : wf(N), H = new ue(Ne, bt + "leave", w, i, u);
          H.target = yt, H.relatedTarget = k;
          var O = null, q = Bs(u);
          if (q === a) {
            var me = new ue(be, bt + "enter", N, i, u);
            me.target = k, me.relatedTarget = yt, O = me;
          }
          kT(e, H, O, w, N);
        }
      }
    }
    function _e(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var Re = typeof Object.is == "function" ? Object.is : _e;
    function Le(e, t) {
      if (Re(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var u = 0; u < a.length; u++) {
        var s = a[u];
        if (!rr.call(t, s) || !Re(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function He(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function tr(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function Dt(e, t) {
      for (var a = He(e), i = 0, u = 0; a; ) {
        if (a.nodeType === Bi) {
          if (u = i + a.textContent.length, i <= t && u >= t)
            return {
              node: a,
              offset: t - i
            };
          i = u;
        }
        a = He(tr(a));
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
      var s = 0, f = -1, p = -1, v = 0, y = 0, g = e, _ = null;
      e: for (; ; ) {
        for (var w = null; g === t && (a === 0 || g.nodeType === Bi) && (f = s + a), g === i && (u === 0 || g.nodeType === Bi) && (p = s + u), g.nodeType === Bi && (s += g.nodeValue.length), (w = g.firstChild) !== null; )
          _ = g, g = w;
        for (; ; ) {
          if (g === e)
            break e;
          if (_ === t && ++v === a && (f = s), _ === i && ++y === u && (p = s), (w = g.nextSibling) !== null)
            break;
          g = _, _ = g.parentNode;
        }
        g = w;
      }
      return f === -1 || p === -1 ? null : {
        start: f,
        end: p
      };
    }
    function cT(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var u = i.getSelection(), s = e.textContent.length, f = Math.min(t.start, s), p = t.end === void 0 ? f : Math.min(t.end, s);
        if (!u.extend && f > p) {
          var v = p;
          p = f, f = v;
        }
        var y = Dt(e, f), g = Dt(e, p);
        if (y && g) {
          if (u.rangeCount === 1 && u.anchorNode === y.node && u.anchorOffset === y.offset && u.focusNode === g.node && u.focusOffset === g.offset)
            return;
          var _ = a.createRange();
          _.setStart(y.node, y.offset), u.removeAllRanges(), f > p ? (u.addRange(_), u.extend(g.node, g.offset)) : (_.setEnd(g.node, g.offset), u.addRange(_));
        }
      }
    }
    function vE(e) {
      return e && e.nodeType === Bi;
    }
    function hE(e, t) {
      return !e || !t ? !1 : e === t ? !0 : vE(e) ? !1 : vE(t) ? hE(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function fT(e) {
      return e && e.ownerDocument && hE(e.ownerDocument.documentElement, e);
    }
    function dT(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function mE() {
      for (var e = window, t = Hi(); t instanceof e.HTMLIFrameElement; ) {
        if (dT(t))
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
    function pT() {
      var e = mE();
      return {
        focusedElem: e,
        selectionRange: gy(e) ? hT(e) : null
      };
    }
    function vT(e) {
      var t = mE(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && fT(a)) {
        i !== null && gy(a) && mT(a, i);
        for (var u = [], s = a; s = s.parentNode; )
          s.nodeType === qr && u.push({
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
    function hT(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = zl(e), t || {
        start: 0,
        end: 0
      };
    }
    function mT(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : cT(e, t);
    }
    var yT = Qn && "documentMode" in document && document.documentMode <= 11;
    function gT() {
      Pt("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var Sf = null, Sy = null, Xd = null, Ey = !1;
    function ST(e) {
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
    function ET(e) {
      return e.window === e ? e.document : e.nodeType === $i ? e : e.ownerDocument;
    }
    function yE(e, t, a) {
      var i = ET(a);
      if (!(Ey || Sf == null || Sf !== Hi(i))) {
        var u = ST(Sf);
        if (!Xd || !Le(Xd, u)) {
          Xd = u;
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
    function CT(e, t, a, i, u, s, f) {
      var p = a ? wf(a) : window;
      switch (t) {
        case "focusin":
          (wo(p) || p.contentEditable === "true") && (Sf = p, Sy = a, Xd = null);
          break;
        case "focusout":
          Sf = null, Sy = null, Xd = null;
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
          if (yT)
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
    Qn && (gE = document.createElement("div").style, "AnimationEvent" in window || (delete Ef.animationend.animation, delete Ef.animationiteration.animation, delete Ef.animationstart.animation), "TransitionEvent" in window || delete Ef.transitionend.transition);
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
    var SE = ph("animationend"), EE = ph("animationiteration"), CE = ph("animationstart"), RE = ph("transitionend"), TE = /* @__PURE__ */ new Map(), wE = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function xo(e, t) {
      TE.set(e, t), Pt(t, [e]);
    }
    function RT() {
      for (var e = 0; e < wE.length; e++) {
        var t = wE[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        xo(a, "on" + i);
      }
      xo(SE, "onAnimationEnd"), xo(EE, "onAnimationIteration"), xo(CE, "onAnimationStart"), xo("dblclick", "onDoubleClick"), xo("focusin", "onFocus"), xo("focusout", "onBlur"), xo(RE, "onTransitionEnd");
    }
    function TT(e, t, a, i, u, s, f) {
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
            v = Ml;
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
          var _ = !g && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", w = bT(a, p, i.type, g, _);
          if (w.length > 0) {
            var N = new v(p, y, null, i, u);
            e.push({
              event: N,
              listeners: w
            });
          }
        }
      }
    }
    RT(), L(), gf(), gT(), sh();
    function wT(e, t, a, i, u, s, f) {
      TT(e, t, a, i, u, s);
      var p = (s & ld) === 0;
      p && (Z(e, t, a, i, u), x(e, t, a, i, u), CT(e, t, a, i, u), yf(e, t, a, i, u));
    }
    var Zd = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], Ry = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(Zd));
    function xE(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, ss(i, t, void 0, e), e.currentTarget = null;
    }
    function xT(e, t, a) {
      var i;
      if (a)
        for (var u = t.length - 1; u >= 0; u--) {
          var s = t[u], f = s.instance, p = s.currentTarget, v = s.listener;
          if (f !== i && e.isPropagationStopped())
            return;
          xE(e, v, p), i = f;
        }
      else
        for (var y = 0; y < t.length; y++) {
          var g = t[y], _ = g.instance, w = g.currentTarget, N = g.listener;
          if (_ !== i && e.isPropagationStopped())
            return;
          xE(e, N, w), i = _;
        }
    }
    function _E(e, t) {
      for (var a = (t & tu) !== 0, i = 0; i < e.length; i++) {
        var u = e[i], s = u.event, f = u.listeners;
        xT(s, f, a);
      }
      Yi();
    }
    function _T(e, t, a, i, u) {
      var s = hc(a), f = [];
      wT(f, e, i, a, s, t), _E(f, t);
    }
    function hn(e, t) {
      Ry.has(e) || S('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = nw(t), u = OT(e);
      i.has(u) || (bE(t, e, yi, a), i.add(u));
    }
    function Ty(e, t, a) {
      Ry.has(e) && !t && S('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= tu), bE(a, e, i, t);
    }
    var vh = "_reactListening" + Math.random().toString(36).slice(2);
    function Jd(e) {
      if (!e[vh]) {
        e[vh] = !0, Tt.forEach(function(a) {
          a !== "selectionchange" && (Ry.has(a) || Ty(a, !1, e), Ty(a, !0, e));
        });
        var t = e.nodeType === $i ? e : e.ownerDocument;
        t !== null && (t[vh] || (t[vh] = !0, Ty("selectionchange", !1, t)));
      }
    }
    function bE(e, t, a, i, u) {
      var s = Sa(e, t, a), f = void 0;
      os && (t === "touchstart" || t === "touchmove" || t === "wheel") && (f = !0), e = e, i ? f !== void 0 ? So(e, t, s, f) : Pd(e, t, s) : f !== void 0 ? Ki(e, t, s, f) : aa(e, t, s);
    }
    function DE(e, t) {
      return e === t || e.nodeType === Ln && e.parentNode === t;
    }
    function wy(e, t, a, i, u) {
      var s = i;
      if (!(t & id) && !(t & yi)) {
        var f = u;
        if (i !== null) {
          var p = i;
          e: for (; ; ) {
            if (p === null)
              return;
            var v = p.tag;
            if (v === B || v === ee) {
              var y = p.stateNode.containerInfo;
              if (DE(y, f))
                break;
              if (v === ee)
                for (var g = p.return; g !== null; ) {
                  var _ = g.tag;
                  if (_ === B || _ === ee) {
                    var w = g.stateNode.containerInfo;
                    if (DE(w, f))
                      return;
                  }
                  g = g.return;
                }
              for (; y !== null; ) {
                var N = Bs(y);
                if (N === null)
                  return;
                var U = N.tag;
                if (U === G || U === de) {
                  p = s = N;
                  continue e;
                }
                y = y.parentNode;
              }
            }
            p = p.return;
          }
        }
      }
      _v(function() {
        return _T(e, t, a, s);
      });
    }
    function ep(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function bT(e, t, a, i, u, s) {
      for (var f = t !== null ? t + "Capture" : null, p = i ? f : t, v = [], y = e, g = null; y !== null; ) {
        var _ = y, w = _.stateNode, N = _.tag;
        if (N === G && w !== null && (g = w, p !== null)) {
          var U = ru(y, p);
          U != null && v.push(ep(y, U, g));
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
        if (p === G && f !== null) {
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
      while (e && e.tag !== G);
      return e || null;
    }
    function DT(e, t) {
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
    function kE(e, t, a, i, u) {
      for (var s = t._reactName, f = [], p = a; p !== null && p !== i; ) {
        var v = p, y = v.alternate, g = v.stateNode, _ = v.tag;
        if (y !== null && y === i)
          break;
        if (_ === G && g !== null) {
          var w = g;
          if (u) {
            var N = ru(p, s);
            N != null && f.unshift(ep(p, N, w));
          } else if (!u) {
            var U = ru(p, s);
            U != null && f.push(ep(p, U, w));
          }
        }
        p = p.return;
      }
      f.length !== 0 && e.push({
        event: t,
        listeners: f
      });
    }
    function kT(e, t, a, i, u) {
      var s = i && u ? DT(i, u) : null;
      i !== null && kE(e, t, i, s, !1), u !== null && a !== null && kE(e, a, u, s, !0);
    }
    function OT(e, t) {
      return e + "__bubble";
    }
    var Va = !1, tp = "dangerouslySetInnerHTML", mh = "suppressContentEditableWarning", _o = "suppressHydrationWarning", OE = "autoFocus", Ps = "children", Vs = "style", yh = "__html", xy, gh, np, LE, Sh, ME, NE;
    xy = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, gh = function(e, t) {
      Ev(e, t), Zu(e, t), xv(e, t, {
        registrationNameDependencies: Qe,
        possibleRegistrationNames: Et
      });
    }, ME = Qn && !document.documentMode, np = function(e, t, a) {
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
    }, NE = function(e, t) {
      var a = e.namespaceURI === Za ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var LT = /\r\n?/g, MT = /\u0000|\uFFFD/g;
    function Eh(e) {
      Vn(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(LT, `
`).replace(MT, "");
    }
    function Ch(e, t, a, i) {
      var u = Eh(t), s = Eh(e);
      if (s !== u && (i && (Va || (Va = !0, S('Text content did not match. Server: "%s" Client: "%s"', s, u))), a && $))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function zE(e) {
      return e.nodeType === $i ? e : e.ownerDocument;
    }
    function NT() {
    }
    function Rh(e) {
      e.onclick = NT;
    }
    function zT(e, t, a, i, u) {
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
          else s === mh || s === _o || s === OE || (Qe.hasOwnProperty(s) ? f != null && (typeof f != "function" && Sh(s, f), s === "onScroll" && hn("scroll", t)) : f != null && pa(t, s, f, u));
        }
    }
    function UT(e, t, a, i) {
      for (var u = 0; u < t.length; u += 2) {
        var s = t[u], f = t[u + 1];
        s === Vs ? hv(e, f) : s === tp ? rv(e, f) : s === Ps ? vl(e, f) : pa(e, s, f, i);
      }
    }
    function AT(e, t, a, i) {
      var u, s = zE(a), f, p = i;
      if (p === Za && (p = Jf(e)), p === Za) {
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
      return p === Za && !u && Object.prototype.toString.call(f) === "[object HTMLUnknownElement]" && !rr.call(xy, e) && (xy[e] = !0, S("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), f;
    }
    function FT(e, t) {
      return zE(t).createTextNode(e);
    }
    function jT(e, t, a, i) {
      var u = hl(t, a);
      gh(t, a);
      var s;
      switch (t) {
        case "dialog":
          hn("cancel", e), hn("close", e), s = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          hn("load", e), s = a;
          break;
        case "video":
        case "audio":
          for (var f = 0; f < Zd.length; f++)
            hn(Zd[f], e);
          s = a;
          break;
        case "source":
          hn("error", e), s = a;
          break;
        case "img":
        case "image":
        case "link":
          hn("error", e), hn("load", e), s = a;
          break;
        case "details":
          hn("toggle", e), s = a;
          break;
        case "input":
          Iu(e, a), s = Ma(e, a), hn("invalid", e);
          break;
        case "option":
          Ft(e, a), s = a;
          break;
        case "select":
          qo(e, a), s = eu(e, a), hn("invalid", e);
          break;
        case "textarea":
          ev(e, a), s = sc(e, a), hn("invalid", e);
          break;
        default:
          s = a;
      }
      switch (pc(t, s), zT(t, e, i, s, u), t) {
        case "input":
          La(e), M(e, a, !1);
          break;
        case "textarea":
          La(e), nv(e);
          break;
        case "option":
          Qt(e, a);
          break;
        case "select":
          qf(e, a);
          break;
        default:
          typeof s.onClick == "function" && Rh(e);
          break;
      }
    }
    function HT(e, t, a, i, u) {
      gh(t, i);
      var s = null, f, p;
      switch (t) {
        case "input":
          f = Ma(e, a), p = Ma(e, i), s = [];
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
            var _ = f[v];
            for (y in _)
              _.hasOwnProperty(y) && (g || (g = {}), g[y] = "");
          } else v === tp || v === Ps || v === mh || v === _o || v === OE || (Qe.hasOwnProperty(v) ? s || (s = []) : (s = s || []).push(v, null));
      for (v in p) {
        var w = p[v], N = f != null ? f[v] : void 0;
        if (!(!p.hasOwnProperty(v) || w === N || w == null && N == null))
          if (v === Vs)
            if (w && Object.freeze(w), N) {
              for (y in N)
                N.hasOwnProperty(y) && (!w || !w.hasOwnProperty(y)) && (g || (g = {}), g[y] = "");
              for (y in w)
                w.hasOwnProperty(y) && N[y] !== w[y] && (g || (g = {}), g[y] = w[y]);
            } else
              g || (s || (s = []), s.push(v, g)), g = w;
          else if (v === tp) {
            var U = w ? w[yh] : void 0, j = N ? N[yh] : void 0;
            U != null && j !== U && (s = s || []).push(v, U);
          } else v === Ps ? (typeof w == "string" || typeof w == "number") && (s = s || []).push(v, "" + w) : v === mh || v === _o || (Qe.hasOwnProperty(v) ? (w != null && (typeof w != "function" && Sh(v, w), v === "onScroll" && hn("scroll", e)), !s && N !== w && (s = [])) : (s = s || []).push(v, w));
      }
      return g && (Ja(g, p[Vs]), (s = s || []).push(Vs, g)), s;
    }
    function PT(e, t, a, i, u) {
      a === "input" && u.type === "radio" && u.name != null && h(e, u);
      var s = hl(a, i), f = hl(a, u);
      switch (UT(e, t, s, f), a) {
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
    function VT(e) {
      {
        var t = e.toLowerCase();
        return Ku.hasOwnProperty(t) && Ku[t] || null;
      }
    }
    function BT(e, t, a, i, u, s, f) {
      var p, v;
      switch (p = hl(t, a), gh(t, a), t) {
        case "dialog":
          hn("cancel", e), hn("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          hn("load", e);
          break;
        case "video":
        case "audio":
          for (var y = 0; y < Zd.length; y++)
            hn(Zd[y], e);
          break;
        case "source":
          hn("error", e);
          break;
        case "img":
        case "image":
        case "link":
          hn("error", e), hn("load", e);
          break;
        case "details":
          hn("toggle", e);
          break;
        case "input":
          Iu(e, a), hn("invalid", e);
          break;
        case "option":
          Ft(e, a);
          break;
        case "select":
          qo(e, a), hn("invalid", e);
          break;
        case "textarea":
          ev(e, a), hn("invalid", e);
          break;
      }
      pc(t, a);
      {
        v = /* @__PURE__ */ new Set();
        for (var g = e.attributes, _ = 0; _ < g.length; _++) {
          var w = g[_].name.toLowerCase();
          switch (w) {
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              v.add(g[_].name);
          }
        }
      }
      var N = null;
      for (var U in a)
        if (a.hasOwnProperty(U)) {
          var j = a[U];
          if (U === Ps)
            typeof j == "string" ? e.textContent !== j && (a[_o] !== !0 && Ch(e.textContent, j, s, f), N = [Ps, j]) : typeof j == "number" && e.textContent !== "" + j && (a[_o] !== !0 && Ch(e.textContent, j, s, f), N = [Ps, "" + j]);
          else if (Qe.hasOwnProperty(U))
            j != null && (typeof j != "function" && Sh(U, j), U === "onScroll" && hn("scroll", e));
          else if (f && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof p == "boolean") {
            var ue = void 0, Ne = tn(U);
            if (a[_o] !== !0) {
              if (!(U === mh || U === _o || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              U === "value" || U === "checked" || U === "selected")) {
                if (U === tp) {
                  var be = e.innerHTML, bt = j ? j[yh] : void 0;
                  if (bt != null) {
                    var yt = NE(e, bt);
                    yt !== be && np(U, be, yt);
                  }
                } else if (U === Vs) {
                  if (v.delete(U), ME) {
                    var k = Xm(j);
                    ue = e.getAttribute("style"), k !== ue && np(U, ue, k);
                  }
                } else if (p)
                  v.delete(U.toLowerCase()), ue = si(e, U, j), j !== ue && np(U, ue, j);
                else if (!ln(U, Ne, p) && !Kn(U, j, Ne, p)) {
                  var H = !1;
                  if (Ne !== null)
                    v.delete(Ne.attributeName), ue = Wl(e, U, j, Ne);
                  else {
                    var O = i;
                    if (O === Za && (O = Jf(t)), O === Za)
                      v.delete(U.toLowerCase());
                    else {
                      var q = VT(U);
                      q !== null && q !== U && (H = !0, v.delete(q)), v.delete(U);
                    }
                    ue = si(e, U, j);
                  }
                  var me = Y;
                  !me && j !== ue && !H && np(U, ue, j);
                }
              }
            }
          }
        }
      switch (f && // $FlowFixMe - Should be inferred as not undefined.
      v.size > 0 && a[_o] !== !0 && LE(v), t) {
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
      return N;
    }
    function $T(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function _y(e, t) {
      {
        if (Va)
          return;
        Va = !0, S("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function by(e, t) {
      {
        if (Va)
          return;
        Va = !0, S('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function Dy(e, t, a) {
      {
        if (Va)
          return;
        Va = !0, S("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function ky(e, t) {
      {
        if (t === "" || Va)
          return;
        Va = !0, S('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function YT(e, t, a) {
      switch (t) {
        case "input":
          F(e, a);
          return;
        case "textarea":
          Ym(e, a);
          return;
        case "select":
          Xf(e, a);
          return;
      }
    }
    var rp = function() {
    }, ap = function() {
    };
    {
      var IT = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], UE = [
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
      ], QT = UE.concat(["button"]), WT = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], AE = {
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
        var a = Ke({}, e || AE), i = {
          tag: t
        };
        return UE.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), QT.indexOf(t) !== -1 && (a.pTagInButtonScope = null), IT.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var GT = function(e, t) {
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
            return WT.indexOf(t) === -1;
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
      }, KT = function(e, t) {
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
      }, FE = {};
      rp = function(e, t, a) {
        a = a || AE;
        var i = a.current, u = i && i.tag;
        t != null && (e != null && S("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = GT(e, u) ? null : i, f = s ? null : KT(e, a), p = s || f;
        if (p) {
          var v = p.tag, y = !!s + "|" + e + "|" + v;
          if (!FE[y]) {
            FE[y] = !0;
            var g = e, _ = "";
            if (e === "#text" ? /\S/.test(t) ? g = "Text nodes" : (g = "Whitespace text nodes", _ = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : g = "<" + e + ">", s) {
              var w = "";
              v === "table" && e === "tr" && (w += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), S("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", g, v, _, w);
            } else
              S("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", g, v);
          }
        }
      };
    }
    var Th = "suppressHydrationWarning", wh = "$", xh = "/$", ip = "$?", lp = "$!", qT = "style", Oy = null, Ly = null;
    function XT(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case $i:
        case Xo: {
          t = i === $i ? "#document" : "#fragment";
          var u = e.documentElement;
          a = u ? u.namespaceURI : cc(null, "");
          break;
        }
        default: {
          var s = i === Ln ? e.parentNode : e, f = s.namespaceURI || null;
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
    function ZT(e, t, a) {
      {
        var i = e, u = cc(i.namespace, t), s = ap(i.ancestorInfo, t);
        return {
          namespace: u,
          ancestorInfo: s
        };
      }
    }
    function hD(e) {
      return e;
    }
    function JT(e) {
      Oy = cr(), Ly = pT();
      var t = null;
      return wn(!1), t;
    }
    function e1(e) {
      vT(Ly), wn(Oy), Oy = null, Ly = null;
    }
    function t1(e, t, a, i, u) {
      var s;
      {
        var f = i;
        if (rp(e, null, f.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var p = "" + t.children, v = ap(f.ancestorInfo, e);
          rp(null, p, v);
        }
        s = f.namespace;
      }
      var y = AT(e, t, a, s);
      return sp(u, y), Hy(y, t), y;
    }
    function n1(e, t) {
      e.appendChild(t);
    }
    function r1(e, t, a, i, u) {
      switch (jT(e, t, a, i), t) {
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
    function a1(e, t, a, i, u, s) {
      {
        var f = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var p = "" + i.children, v = ap(f.ancestorInfo, t);
          rp(null, p, v);
        }
      }
      return HT(e, t, a, i);
    }
    function My(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function i1(e, t, a, i) {
      {
        var u = a;
        rp(null, e, u.ancestorInfo);
      }
      var s = FT(e, t);
      return sp(i, s), s;
    }
    function l1() {
      var e = window.event;
      return e === void 0 ? or : go(e.type);
    }
    var Ny = typeof setTimeout == "function" ? setTimeout : void 0, u1 = typeof clearTimeout == "function" ? clearTimeout : void 0, zy = -1, jE = typeof Promise == "function" ? Promise : void 0, o1 = typeof queueMicrotask == "function" ? queueMicrotask : typeof jE < "u" ? function(e) {
      return jE.resolve(null).then(e).catch(s1);
    } : Ny;
    function s1(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function c1(e, t, a, i) {
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
    function f1(e, t, a, i, u, s) {
      PT(e, t, a, i, u), Hy(e, u);
    }
    function HE(e) {
      vl(e, "");
    }
    function d1(e, t, a) {
      e.nodeValue = a;
    }
    function p1(e, t) {
      e.appendChild(t);
    }
    function v1(e, t) {
      var a;
      e.nodeType === Ln ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && Rh(a);
    }
    function h1(e, t, a) {
      e.insertBefore(t, a);
    }
    function m1(e, t, a) {
      e.nodeType === Ln ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function y1(e, t) {
      e.removeChild(t);
    }
    function g1(e, t) {
      e.nodeType === Ln ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function Uy(e, t) {
      var a = t, i = 0;
      do {
        var u = a.nextSibling;
        if (e.removeChild(a), u && u.nodeType === Ln) {
          var s = u.data;
          if (s === xh)
            if (i === 0) {
              e.removeChild(u), br(t);
              return;
            } else
              i--;
          else (s === wh || s === ip || s === lp) && i++;
        }
        a = u;
      } while (a);
      br(t);
    }
    function S1(e, t) {
      e.nodeType === Ln ? Uy(e.parentNode, t) : e.nodeType === qr && Uy(e, t), br(e);
    }
    function E1(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function C1(e) {
      e.nodeValue = "";
    }
    function R1(e, t) {
      e = e;
      var a = t[qT], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = dc("display", i);
    }
    function T1(e, t) {
      e.nodeValue = t;
    }
    function w1(e) {
      e.nodeType === qr ? e.textContent = "" : e.nodeType === $i && e.documentElement && e.removeChild(e.documentElement);
    }
    function x1(e, t, a) {
      return e.nodeType !== qr || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function _1(e, t) {
      return t === "" || e.nodeType !== Bi ? null : e;
    }
    function b1(e) {
      return e.nodeType !== Ln ? null : e;
    }
    function PE(e) {
      return e.data === ip;
    }
    function Ay(e) {
      return e.data === lp;
    }
    function D1(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, u;
      return t && (a = t.dgst, i = t.msg, u = t.stck), {
        message: i,
        digest: a,
        stack: u
      };
    }
    function k1(e, t) {
      e._reactRetry = t;
    }
    function _h(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === qr || t === Bi)
          break;
        if (t === Ln) {
          var a = e.data;
          if (a === wh || a === lp || a === ip)
            break;
          if (a === xh)
            return null;
        }
      }
      return e;
    }
    function up(e) {
      return _h(e.nextSibling);
    }
    function O1(e) {
      return _h(e.firstChild);
    }
    function L1(e) {
      return _h(e.firstChild);
    }
    function M1(e) {
      return _h(e.nextSibling);
    }
    function N1(e, t, a, i, u, s, f) {
      sp(s, e), Hy(e, a);
      var p;
      {
        var v = u;
        p = v.namespace;
      }
      var y = (s.mode & ct) !== ke;
      return BT(e, t, a, p, i, y, f);
    }
    function z1(e, t, a, i) {
      return sp(a, e), a.mode & ct, $T(e, t);
    }
    function U1(e, t) {
      sp(t, e);
    }
    function A1(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === Ln) {
          var i = t.data;
          if (i === xh) {
            if (a === 0)
              return up(t);
            a--;
          } else (i === wh || i === lp || i === ip) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function VE(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === Ln) {
          var i = t.data;
          if (i === wh || i === lp || i === ip) {
            if (a === 0)
              return t;
            a--;
          } else i === xh && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function F1(e) {
      br(e);
    }
    function j1(e) {
      br(e);
    }
    function H1(e) {
      return e !== "head" && e !== "body";
    }
    function P1(e, t, a, i) {
      var u = !0;
      Ch(t.nodeValue, a, i, u);
    }
    function V1(e, t, a, i, u, s) {
      if (t[Th] !== !0) {
        var f = !0;
        Ch(i.nodeValue, u, s, f);
      }
    }
    function B1(e, t) {
      t.nodeType === qr ? _y(e, t) : t.nodeType === Ln || by(e, t);
    }
    function $1(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === qr ? _y(a, t) : t.nodeType === Ln || by(a, t));
      }
    }
    function Y1(e, t, a, i, u) {
      (u || t[Th] !== !0) && (i.nodeType === qr ? _y(a, i) : i.nodeType === Ln || by(a, i));
    }
    function I1(e, t, a) {
      Dy(e, t);
    }
    function Q1(e, t) {
      ky(e, t);
    }
    function W1(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && Dy(i, t);
      }
    }
    function G1(e, t) {
      {
        var a = e.parentNode;
        a !== null && ky(a, t);
      }
    }
    function K1(e, t, a, i, u, s) {
      (s || t[Th] !== !0) && Dy(a, i);
    }
    function q1(e, t, a, i, u) {
      (u || t[Th] !== !0) && ky(a, i);
    }
    function X1(e) {
      S("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function Z1(e) {
      Jd(e);
    }
    var Rf = Math.random().toString(36).slice(2), Tf = "__reactFiber$" + Rf, Fy = "__reactProps$" + Rf, op = "__reactContainer$" + Rf, jy = "__reactEvents$" + Rf, J1 = "__reactListeners$" + Rf, ew = "__reactHandles$" + Rf;
    function tw(e) {
      delete e[Tf], delete e[Fy], delete e[jy], delete e[J1], delete e[ew];
    }
    function sp(e, t) {
      t[Tf] = e;
    }
    function bh(e, t) {
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
    function bo(e) {
      var t = e[Tf] || e[op];
      return t && (t.tag === G || t.tag === de || t.tag === xe || t.tag === B) ? t : null;
    }
    function wf(e) {
      if (e.tag === G || e.tag === de)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function Dh(e) {
      return e[Fy] || null;
    }
    function Hy(e, t) {
      e[Fy] = t;
    }
    function nw(e) {
      var t = e[jy];
      return t === void 0 && (t = e[jy] = /* @__PURE__ */ new Set()), t;
    }
    var $E = {}, YE = Xe.ReactDebugCurrentFrame;
    function kh(e) {
      if (e) {
        var t = e._owner, a = Io(e.type, e._source, t ? t.type : null);
        YE.setExtraStackFrame(a);
      } else
        YE.setExtraStackFrame(null);
    }
    function Xi(e, t, a, i, u) {
      {
        var s = Function.call.bind(rr);
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
            p && !(p instanceof Error) && (kh(u), S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, f, typeof p), kh(null)), p instanceof Error && !(p.message in $E) && ($E[p.message] = !0, kh(u), S("Failed %s type: %s", a, p.message), kh(null));
          }
      }
    }
    var Py = [], Oh;
    Oh = [];
    var _u = -1;
    function Do(e) {
      return {
        current: e
      };
    }
    function ia(e, t) {
      if (_u < 0) {
        S("Unexpected pop.");
        return;
      }
      t !== Oh[_u] && S("Unexpected Fiber popped."), e.current = Py[_u], Py[_u] = null, Oh[_u] = null, _u--;
    }
    function la(e, t, a) {
      _u++, Py[_u] = e.current, Oh[_u] = a, e.current = t;
    }
    var Vy;
    Vy = {};
    var li = {};
    Object.freeze(li);
    var bu = Do(li), Ul = Do(!1), By = li;
    function xf(e, t, a) {
      return a && Al(t) ? By : bu.current;
    }
    function IE(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function _f(e, t) {
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
          var p = Be(e) || "Unknown";
          Xi(i, s, "context", p);
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
    function Mh(e) {
      ia(Ul, e), ia(bu, e);
    }
    function $y(e) {
      ia(Ul, e), ia(bu, e);
    }
    function QE(e, t, a) {
      {
        if (bu.current !== li)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        la(bu, t, e), la(Ul, a, e);
      }
    }
    function WE(e, t, a) {
      {
        var i = e.stateNode, u = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = Be(e) || "Unknown";
            Vy[s] || (Vy[s] = !0, S("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var f = i.getChildContext();
        for (var p in f)
          if (!(p in u))
            throw new Error((Be(e) || "Unknown") + '.getChildContext(): key "' + p + '" is not defined in childContextTypes.');
        {
          var v = Be(e) || "Unknown";
          Xi(u, f, "child context", v);
        }
        return Ke({}, a, f);
      }
    }
    function Nh(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || li;
        return By = bu.current, la(bu, a, e), la(Ul, Ul.current, e), !0;
      }
    }
    function GE(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var u = WE(e, t, By);
          i.__reactInternalMemoizedMergedChildContext = u, ia(Ul, e), ia(bu, e), la(bu, u, e), la(Ul, a, e);
        } else
          ia(Ul, e), la(Ul, a, e);
      }
    }
    function rw(e) {
      {
        if (!Ov(e) || e.tag !== ne)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case B:
              return t.stateNode.context;
            case ne: {
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
    var ko = 0, zh = 1, Du = null, Yy = !1, Iy = !1;
    function KE(e) {
      Du === null ? Du = [e] : Du.push(e);
    }
    function aw(e) {
      Yy = !0, KE(e);
    }
    function qE() {
      Yy && Oo();
    }
    function Oo() {
      if (!Iy && Du !== null) {
        Iy = !0;
        var e = 0, t = ga();
        try {
          var a = !0, i = Du;
          for ($n(ra); e < i.length; e++) {
            var u = i[e];
            do
              u = u(a);
            while (u !== null);
          }
          Du = null, Yy = !1;
        } catch (s) {
          throw Du !== null && (Du = Du.slice(e + 1)), vd(Qi, Oo), s;
        } finally {
          $n(t), Iy = !1;
        }
      }
      return null;
    }
    var bf = [], Df = 0, Uh = null, Ah = 0, wi = [], xi = 0, $s = null, ku = 1, Ou = "";
    function iw(e) {
      return Is(), (e.flags & fs) !== De;
    }
    function lw(e) {
      return Is(), Ah;
    }
    function uw() {
      var e = Ou, t = ku, a = t & ~ow(t);
      return a.toString(32) + e;
    }
    function Ys(e, t) {
      Is(), bf[Df++] = Ah, bf[Df++] = Uh, Uh = e, Ah = t;
    }
    function XE(e, t, a) {
      Is(), wi[xi++] = ku, wi[xi++] = Ou, wi[xi++] = $s, $s = e;
      var i = ku, u = Ou, s = Fh(i) - 1, f = i & ~(1 << s), p = a + 1, v = Fh(t) + s;
      if (v > 30) {
        var y = s - s % 5, g = (1 << y) - 1, _ = (f & g).toString(32), w = f >> y, N = s - y, U = Fh(t) + N, j = p << N, ue = j | w, Ne = _ + u;
        ku = 1 << U | ue, Ou = Ne;
      } else {
        var be = p << s, bt = be | f, yt = u;
        ku = 1 << v | bt, Ou = yt;
      }
    }
    function Qy(e) {
      Is();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        Ys(e, a), XE(e, a, i);
      }
    }
    function Fh(e) {
      return 32 - Bn(e);
    }
    function ow(e) {
      return 1 << Fh(e) - 1;
    }
    function Wy(e) {
      for (; e === Uh; )
        Uh = bf[--Df], bf[Df] = null, Ah = bf[--Df], bf[Df] = null;
      for (; e === $s; )
        $s = wi[--xi], wi[xi] = null, Ou = wi[--xi], wi[xi] = null, ku = wi[--xi], wi[xi] = null;
    }
    function sw() {
      return Is(), $s !== null ? {
        id: ku,
        overflow: Ou
      } : null;
    }
    function cw(e, t) {
      Is(), wi[xi++] = ku, wi[xi++] = Ou, wi[xi++] = $s, ku = t.id, Ou = t.overflow, $s = e;
    }
    function Is() {
      Ar() || S("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Ur = null, _i = null, Zi = !1, Qs = !1, Lo = null;
    function fw() {
      Zi && S("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function ZE() {
      Qs = !0;
    }
    function dw() {
      return Qs;
    }
    function pw(e) {
      var t = e.stateNode.containerInfo;
      return _i = L1(t), Ur = e, Zi = !0, Lo = null, Qs = !1, !0;
    }
    function vw(e, t, a) {
      return _i = M1(t), Ur = e, Zi = !0, Lo = null, Qs = !1, a !== null && cw(e, a), !0;
    }
    function JE(e, t) {
      switch (e.tag) {
        case B: {
          B1(e.stateNode.containerInfo, t);
          break;
        }
        case G: {
          var a = (e.mode & ct) !== ke;
          Y1(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case xe: {
          var i = e.memoizedState;
          i.dehydrated !== null && $1(i.dehydrated, t);
          break;
        }
      }
    }
    function eC(e, t) {
      JE(e, t);
      var a = gb();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= Xr) : i.push(a);
    }
    function Gy(e, t) {
      {
        if (Qs)
          return;
        switch (e.tag) {
          case B: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case G:
                var i = t.type;
                t.pendingProps, I1(a, i);
                break;
              case de:
                var u = t.pendingProps;
                Q1(a, u);
                break;
            }
            break;
          }
          case G: {
            var s = e.type, f = e.memoizedProps, p = e.stateNode;
            switch (t.tag) {
              case G: {
                var v = t.type, y = t.pendingProps, g = (e.mode & ct) !== ke;
                K1(
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
              case de: {
                var _ = t.pendingProps, w = (e.mode & ct) !== ke;
                q1(
                  s,
                  f,
                  p,
                  _,
                  // TODO: Delete this argument when we remove the legacy root API.
                  w
                );
                break;
              }
            }
            break;
          }
          case xe: {
            var N = e.memoizedState, U = N.dehydrated;
            if (U !== null) switch (t.tag) {
              case G:
                var j = t.type;
                t.pendingProps, W1(U, j);
                break;
              case de:
                var ue = t.pendingProps;
                G1(U, ue);
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
      t.flags = t.flags & -4097 | Mn, Gy(e, t);
    }
    function nC(e, t) {
      switch (e.tag) {
        case G: {
          var a = e.type;
          e.pendingProps;
          var i = x1(t, a);
          return i !== null ? (e.stateNode = i, Ur = e, _i = O1(i), !0) : !1;
        }
        case de: {
          var u = e.pendingProps, s = _1(t, u);
          return s !== null ? (e.stateNode = s, Ur = e, _i = null, !0) : !1;
        }
        case xe: {
          var f = b1(t);
          if (f !== null) {
            var p = {
              dehydrated: f,
              treeContext: sw(),
              retryLane: ya
            };
            e.memoizedState = p;
            var v = Sb(f);
            return v.return = e, e.child = v, Ur = e, _i = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function Ky(e) {
      return (e.mode & ct) !== ke && (e.flags & st) === De;
    }
    function qy(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function Xy(e) {
      if (Zi) {
        var t = _i;
        if (!t) {
          Ky(e) && (Gy(Ur, e), qy()), tC(Ur, e), Zi = !1, Ur = e;
          return;
        }
        var a = t;
        if (!nC(e, t)) {
          Ky(e) && (Gy(Ur, e), qy()), t = up(a);
          var i = Ur;
          if (!t || !nC(e, t)) {
            tC(Ur, e), Zi = !1, Ur = e;
            return;
          }
          eC(i, a);
        }
      }
    }
    function hw(e, t, a) {
      var i = e.stateNode, u = !Qs, s = N1(i, e.type, e.memoizedProps, t, a, e, u);
      return e.updateQueue = s, s !== null;
    }
    function mw(e) {
      var t = e.stateNode, a = e.memoizedProps, i = z1(t, a, e);
      if (i) {
        var u = Ur;
        if (u !== null)
          switch (u.tag) {
            case B: {
              var s = u.stateNode.containerInfo, f = (u.mode & ct) !== ke;
              P1(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                f
              );
              break;
            }
            case G: {
              var p = u.type, v = u.memoizedProps, y = u.stateNode, g = (u.mode & ct) !== ke;
              V1(
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
    function yw(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      U1(a, e);
    }
    function gw(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return A1(a);
    }
    function rC(e) {
      for (var t = e.return; t !== null && t.tag !== G && t.tag !== B && t.tag !== xe; )
        t = t.return;
      Ur = t;
    }
    function jh(e) {
      if (e !== Ur)
        return !1;
      if (!Zi)
        return rC(e), Zi = !0, !1;
      if (e.tag !== B && (e.tag !== G || H1(e.type) && !My(e.type, e.memoizedProps))) {
        var t = _i;
        if (t)
          if (Ky(e))
            aC(e), qy();
          else
            for (; t; )
              eC(e, t), t = up(t);
      }
      return rC(e), e.tag === xe ? _i = gw(e) : _i = Ur ? up(e.stateNode) : null, !0;
    }
    function Sw() {
      return Zi && _i !== null;
    }
    function aC(e) {
      for (var t = _i; t; )
        JE(e, t), t = up(t);
    }
    function kf() {
      Ur = null, _i = null, Zi = !1, Qs = !1;
    }
    function iC() {
      Lo !== null && (ZR(Lo), Lo = null);
    }
    function Ar() {
      return Zi;
    }
    function Zy(e) {
      Lo === null ? Lo = [e] : Lo.push(e);
    }
    var Ew = Xe.ReactCurrentBatchConfig, Cw = null;
    function Rw() {
      return Ew.transition;
    }
    var Ji = {
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
      var Tw = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & qe && (t = a), a = a.return;
        return t;
      }, Ws = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, fp = [], dp = [], pp = [], vp = [], hp = [], mp = [], Gs = /* @__PURE__ */ new Set();
      Ji.recordUnsafeLifecycleWarnings = function(e, t) {
        Gs.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && fp.push(e), e.mode & qe && typeof t.UNSAFE_componentWillMount == "function" && dp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && pp.push(e), e.mode & qe && typeof t.UNSAFE_componentWillReceiveProps == "function" && vp.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && hp.push(e), e.mode & qe && typeof t.UNSAFE_componentWillUpdate == "function" && mp.push(e));
      }, Ji.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        fp.length > 0 && (fp.forEach(function(w) {
          e.add(Be(w) || "Component"), Gs.add(w.type);
        }), fp = []);
        var t = /* @__PURE__ */ new Set();
        dp.length > 0 && (dp.forEach(function(w) {
          t.add(Be(w) || "Component"), Gs.add(w.type);
        }), dp = []);
        var a = /* @__PURE__ */ new Set();
        pp.length > 0 && (pp.forEach(function(w) {
          a.add(Be(w) || "Component"), Gs.add(w.type);
        }), pp = []);
        var i = /* @__PURE__ */ new Set();
        vp.length > 0 && (vp.forEach(function(w) {
          i.add(Be(w) || "Component"), Gs.add(w.type);
        }), vp = []);
        var u = /* @__PURE__ */ new Set();
        hp.length > 0 && (hp.forEach(function(w) {
          u.add(Be(w) || "Component"), Gs.add(w.type);
        }), hp = []);
        var s = /* @__PURE__ */ new Set();
        if (mp.length > 0 && (mp.forEach(function(w) {
          s.add(Be(w) || "Component"), Gs.add(w.type);
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
          lt(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, y);
        }
        if (a.size > 0) {
          var g = Ws(a);
          lt(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, g);
        }
        if (u.size > 0) {
          var _ = Ws(u);
          lt(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, _);
        }
      };
      var Hh = /* @__PURE__ */ new Map(), lC = /* @__PURE__ */ new Set();
      Ji.recordLegacyContextWarning = function(e, t) {
        var a = Tw(e);
        if (a === null) {
          S("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!lC.has(e.type)) {
          var i = Hh.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], Hh.set(a, i)), i.push(e));
        }
      }, Ji.flushLegacyContextWarning = function() {
        Hh.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(Be(s) || "Component"), lC.add(s.type);
            });
            var u = Ws(i);
            try {
              It(a), S(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u);
            } finally {
              mn();
            }
          }
        });
      }, Ji.discardPendingWarnings = function() {
        fp = [], dp = [], pp = [], vp = [], hp = [], mp = [], Hh = /* @__PURE__ */ new Map();
      };
    }
    var Jy, eg, tg, ng, rg, uC = function(e, t) {
    };
    Jy = !1, eg = !1, tg = {}, ng = {}, rg = {}, uC = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = Be(t) || "Component";
        ng[a] || (ng[a] = !0, S('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function ww(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function yp(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & qe || Oe) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self) && // Will already throw with "Function components cannot have string refs"
        !(a._owner && a._owner.tag !== ne) && // Will already warn with "Function components cannot be given refs"
        !(typeof a.type == "function" && !ww(a.type)) && // Will already throw with "Element ref was specified as a string (someStringRef) but no owner was set"
        a._owner) {
          var u = Be(e) || "Component";
          tg[u] || (S('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', u, i), tg[u] = !0);
        }
        if (a._owner) {
          var s = a._owner, f;
          if (s) {
            var p = s;
            if (p.tag !== ne)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            f = p.stateNode;
          }
          if (!f)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var v = f;
          Ga(i, "ref");
          var y = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === y)
            return t.ref;
          var g = function(_) {
            var w = v.refs;
            _ === null ? delete w[y] : w[y] = _;
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
        var t = Be(e) || "Component";
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
      function t(k, H) {
        if (e) {
          var O = k.deletions;
          O === null ? (k.deletions = [H], k.flags |= Xr) : O.push(H);
        }
      }
      function a(k, H) {
        if (!e)
          return null;
        for (var O = H; O !== null; )
          t(k, O), O = O.sibling;
        return null;
      }
      function i(k, H) {
        for (var O = /* @__PURE__ */ new Map(), q = H; q !== null; )
          q.key !== null ? O.set(q.key, q) : O.set(q.index, q), q = q.sibling;
        return O;
      }
      function u(k, H) {
        var O = rc(k, H);
        return O.index = 0, O.sibling = null, O;
      }
      function s(k, H, O) {
        if (k.index = O, !e)
          return k.flags |= fs, H;
        var q = k.alternate;
        if (q !== null) {
          var me = q.index;
          return me < H ? (k.flags |= Mn, H) : me;
        } else
          return k.flags |= Mn, H;
      }
      function f(k) {
        return e && k.alternate === null && (k.flags |= Mn), k;
      }
      function p(k, H, O, q) {
        if (H === null || H.tag !== de) {
          var me = ZS(O, k.mode, q);
          return me.return = k, me;
        } else {
          var fe = u(H, O);
          return fe.return = k, fe;
        }
      }
      function v(k, H, O, q) {
        var me = O.type;
        if (me === Qr)
          return g(k, H, O.props.children, q, O.key);
        if (H !== null && (H.elementType === me || // Keep this check inline so it only runs on the false path:
        v0(H, O) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof me == "object" && me !== null && me.$$typeof === Ye && oC(me) === H.type)) {
          var fe = u(H, O.props);
          return fe.ref = yp(k, H, O), fe.return = k, fe._debugSource = O._source, fe._debugOwner = O._owner, fe;
        }
        var je = XS(O, k.mode, q);
        return je.ref = yp(k, H, O), je.return = k, je;
      }
      function y(k, H, O, q) {
        if (H === null || H.tag !== ee || H.stateNode.containerInfo !== O.containerInfo || H.stateNode.implementation !== O.implementation) {
          var me = JS(O, k.mode, q);
          return me.return = k, me;
        } else {
          var fe = u(H, O.children || []);
          return fe.return = k, fe;
        }
      }
      function g(k, H, O, q, me) {
        if (H === null || H.tag !== Ge) {
          var fe = Bo(O, k.mode, q, me);
          return fe.return = k, fe;
        } else {
          var je = u(H, O);
          return je.return = k, je;
        }
      }
      function _(k, H, O) {
        if (typeof H == "string" && H !== "" || typeof H == "number") {
          var q = ZS("" + H, k.mode, O);
          return q.return = k, q;
        }
        if (typeof H == "object" && H !== null) {
          switch (H.$$typeof) {
            case ir: {
              var me = XS(H, k.mode, O);
              return me.ref = yp(k, null, H), me.return = k, me;
            }
            case va: {
              var fe = JS(H, k.mode, O);
              return fe.return = k, fe;
            }
            case Ye: {
              var je = H._payload, We = H._init;
              return _(k, We(je), O);
            }
          }
          if (Je(H) || dn(H)) {
            var Xt = Bo(H, k.mode, O, null);
            return Xt.return = k, Xt;
          }
          Ph(k, H);
        }
        return typeof H == "function" && Vh(k), null;
      }
      function w(k, H, O, q) {
        var me = H !== null ? H.key : null;
        if (typeof O == "string" && O !== "" || typeof O == "number")
          return me !== null ? null : p(k, H, "" + O, q);
        if (typeof O == "object" && O !== null) {
          switch (O.$$typeof) {
            case ir:
              return O.key === me ? v(k, H, O, q) : null;
            case va:
              return O.key === me ? y(k, H, O, q) : null;
            case Ye: {
              var fe = O._payload, je = O._init;
              return w(k, H, je(fe), q);
            }
          }
          if (Je(O) || dn(O))
            return me !== null ? null : g(k, H, O, q, null);
          Ph(k, O);
        }
        return typeof O == "function" && Vh(k), null;
      }
      function N(k, H, O, q, me) {
        if (typeof q == "string" && q !== "" || typeof q == "number") {
          var fe = k.get(O) || null;
          return p(H, fe, "" + q, me);
        }
        if (typeof q == "object" && q !== null) {
          switch (q.$$typeof) {
            case ir: {
              var je = k.get(q.key === null ? O : q.key) || null;
              return v(H, je, q, me);
            }
            case va: {
              var We = k.get(q.key === null ? O : q.key) || null;
              return y(H, We, q, me);
            }
            case Ye:
              var Xt = q._payload, Ot = q._init;
              return N(k, H, O, Ot(Xt), me);
          }
          if (Je(q) || dn(q)) {
            var In = k.get(O) || null;
            return g(H, In, q, me, null);
          }
          Ph(H, q);
        }
        return typeof q == "function" && Vh(H), null;
      }
      function U(k, H, O) {
        {
          if (typeof k != "object" || k === null)
            return H;
          switch (k.$$typeof) {
            case ir:
            case va:
              uC(k, O);
              var q = k.key;
              if (typeof q != "string")
                break;
              if (H === null) {
                H = /* @__PURE__ */ new Set(), H.add(q);
                break;
              }
              if (!H.has(q)) {
                H.add(q);
                break;
              }
              S("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", q);
              break;
            case Ye:
              var me = k._payload, fe = k._init;
              U(fe(me), H, O);
              break;
          }
        }
        return H;
      }
      function j(k, H, O, q) {
        for (var me = null, fe = 0; fe < O.length; fe++) {
          var je = O[fe];
          me = U(je, me, k);
        }
        for (var We = null, Xt = null, Ot = H, In = 0, Lt = 0, jn = null; Ot !== null && Lt < O.length; Lt++) {
          Ot.index > Lt ? (jn = Ot, Ot = null) : jn = Ot.sibling;
          var oa = w(k, Ot, O[Lt], q);
          if (oa === null) {
            Ot === null && (Ot = jn);
            break;
          }
          e && Ot && oa.alternate === null && t(k, Ot), In = s(oa, In, Lt), Xt === null ? We = oa : Xt.sibling = oa, Xt = oa, Ot = jn;
        }
        if (Lt === O.length) {
          if (a(k, Ot), Ar()) {
            var $r = Lt;
            Ys(k, $r);
          }
          return We;
        }
        if (Ot === null) {
          for (; Lt < O.length; Lt++) {
            var oi = _(k, O[Lt], q);
            oi !== null && (In = s(oi, In, Lt), Xt === null ? We = oi : Xt.sibling = oi, Xt = oi);
          }
          if (Ar()) {
            var xa = Lt;
            Ys(k, xa);
          }
          return We;
        }
        for (var _a = i(k, Ot); Lt < O.length; Lt++) {
          var sa = N(_a, k, Lt, O[Lt], q);
          sa !== null && (e && sa.alternate !== null && _a.delete(sa.key === null ? Lt : sa.key), In = s(sa, In, Lt), Xt === null ? We = sa : Xt.sibling = sa, Xt = sa);
        }
        if (e && _a.forEach(function(Gf) {
          return t(k, Gf);
        }), Ar()) {
          var Fu = Lt;
          Ys(k, Fu);
        }
        return We;
      }
      function ue(k, H, O, q) {
        var me = dn(O);
        if (typeof me != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          O[Symbol.toStringTag] === "Generator" && (eg || S("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), eg = !0), O.entries === me && (Jy || S("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Jy = !0);
          var fe = me.call(O);
          if (fe)
            for (var je = null, We = fe.next(); !We.done; We = fe.next()) {
              var Xt = We.value;
              je = U(Xt, je, k);
            }
        }
        var Ot = me.call(O);
        if (Ot == null)
          throw new Error("An iterable object provided no iterator.");
        for (var In = null, Lt = null, jn = H, oa = 0, $r = 0, oi = null, xa = Ot.next(); jn !== null && !xa.done; $r++, xa = Ot.next()) {
          jn.index > $r ? (oi = jn, jn = null) : oi = jn.sibling;
          var _a = w(k, jn, xa.value, q);
          if (_a === null) {
            jn === null && (jn = oi);
            break;
          }
          e && jn && _a.alternate === null && t(k, jn), oa = s(_a, oa, $r), Lt === null ? In = _a : Lt.sibling = _a, Lt = _a, jn = oi;
        }
        if (xa.done) {
          if (a(k, jn), Ar()) {
            var sa = $r;
            Ys(k, sa);
          }
          return In;
        }
        if (jn === null) {
          for (; !xa.done; $r++, xa = Ot.next()) {
            var Fu = _(k, xa.value, q);
            Fu !== null && (oa = s(Fu, oa, $r), Lt === null ? In = Fu : Lt.sibling = Fu, Lt = Fu);
          }
          if (Ar()) {
            var Gf = $r;
            Ys(k, Gf);
          }
          return In;
        }
        for (var Kp = i(k, jn); !xa.done; $r++, xa = Ot.next()) {
          var Yl = N(Kp, k, $r, xa.value, q);
          Yl !== null && (e && Yl.alternate !== null && Kp.delete(Yl.key === null ? $r : Yl.key), oa = s(Yl, oa, $r), Lt === null ? In = Yl : Lt.sibling = Yl, Lt = Yl);
        }
        if (e && Kp.forEach(function(qb) {
          return t(k, qb);
        }), Ar()) {
          var Kb = $r;
          Ys(k, Kb);
        }
        return In;
      }
      function Ne(k, H, O, q) {
        if (H !== null && H.tag === de) {
          a(k, H.sibling);
          var me = u(H, O);
          return me.return = k, me;
        }
        a(k, H);
        var fe = ZS(O, k.mode, q);
        return fe.return = k, fe;
      }
      function be(k, H, O, q) {
        for (var me = O.key, fe = H; fe !== null; ) {
          if (fe.key === me) {
            var je = O.type;
            if (je === Qr) {
              if (fe.tag === Ge) {
                a(k, fe.sibling);
                var We = u(fe, O.props.children);
                return We.return = k, We._debugSource = O._source, We._debugOwner = O._owner, We;
              }
            } else if (fe.elementType === je || // Keep this check inline so it only runs on the false path:
            v0(fe, O) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof je == "object" && je !== null && je.$$typeof === Ye && oC(je) === fe.type) {
              a(k, fe.sibling);
              var Xt = u(fe, O.props);
              return Xt.ref = yp(k, fe, O), Xt.return = k, Xt._debugSource = O._source, Xt._debugOwner = O._owner, Xt;
            }
            a(k, fe);
            break;
          } else
            t(k, fe);
          fe = fe.sibling;
        }
        if (O.type === Qr) {
          var Ot = Bo(O.props.children, k.mode, q, O.key);
          return Ot.return = k, Ot;
        } else {
          var In = XS(O, k.mode, q);
          return In.ref = yp(k, H, O), In.return = k, In;
        }
      }
      function bt(k, H, O, q) {
        for (var me = O.key, fe = H; fe !== null; ) {
          if (fe.key === me)
            if (fe.tag === ee && fe.stateNode.containerInfo === O.containerInfo && fe.stateNode.implementation === O.implementation) {
              a(k, fe.sibling);
              var je = u(fe, O.children || []);
              return je.return = k, je;
            } else {
              a(k, fe);
              break;
            }
          else
            t(k, fe);
          fe = fe.sibling;
        }
        var We = JS(O, k.mode, q);
        return We.return = k, We;
      }
      function yt(k, H, O, q) {
        var me = typeof O == "object" && O !== null && O.type === Qr && O.key === null;
        if (me && (O = O.props.children), typeof O == "object" && O !== null) {
          switch (O.$$typeof) {
            case ir:
              return f(be(k, H, O, q));
            case va:
              return f(bt(k, H, O, q));
            case Ye:
              var fe = O._payload, je = O._init;
              return yt(k, H, je(fe), q);
          }
          if (Je(O))
            return j(k, H, O, q);
          if (dn(O))
            return ue(k, H, O, q);
          Ph(k, O);
        }
        return typeof O == "string" && O !== "" || typeof O == "number" ? f(Ne(k, H, "" + O, q)) : (typeof O == "function" && Vh(k), a(k, H));
      }
      return yt;
    }
    var Of = sC(!0), cC = sC(!1);
    function xw(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = rc(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = rc(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function _w(e, t) {
      for (var a = e.child; a !== null; )
        pb(a, t), a = a.sibling;
    }
    var ag = Do(null), ig;
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
        if (hu(i.childLanes, t) ? u !== null && !hu(u.childLanes, t) && (u.childLanes = et(u.childLanes, t)) : (i.childLanes = et(i.childLanes, t), u !== null && (u.childLanes = et(u.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && S("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function bw(e, t, a) {
      Dw(e, t, a);
    }
    function Dw(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var u = void 0, s = i.dependencies;
        if (s !== null) {
          u = i.child;
          for (var f = s.firstContext; f !== null; ) {
            if (f.context === t) {
              if (i.tag === ne) {
                var p = Jn(a), v = Lu(Bt, p);
                v.tag = Qh;
                var y = i.updateQueue;
                if (y !== null) {
                  var g = y.shared, _ = g.pending;
                  _ === null ? v.next = v : (v.next = _.next, _.next = v), g.pending = v;
                }
              }
              i.lanes = et(i.lanes, a);
              var w = i.alternate;
              w !== null && (w.lanes = et(w.lanes, a)), og(i.return, a, e), s.lanes = et(s.lanes, a);
              break;
            }
            f = f.next;
          }
        } else if (i.tag === ut)
          u = i.type === e.type ? null : i.child;
        else if (i.tag === fn) {
          var N = i.return;
          if (N === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          N.lanes = et(N.lanes, a);
          var U = N.alternate;
          U !== null && (U.lanes = et(U.lanes, a)), og(N, a, e), u = i.sibling;
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
            var j = u.sibling;
            if (j !== null) {
              j.return = u.return, u = j;
              break;
            }
            u = u.return;
          }
        i = u;
      }
    }
    function Mf(e, t) {
      Bh = e, Lf = null, lg = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (na(a.lanes, t) && Mp(), a.firstContext = null);
      }
    }
    function nr(e) {
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
            lanes: P,
            firstContext: a
          };
        } else
          Lf = Lf.next = a;
      }
      return t;
    }
    var Ks = null;
    function sg(e) {
      Ks === null ? Ks = [e] : Ks.push(e);
    }
    function kw() {
      if (Ks !== null) {
        for (var e = 0; e < Ks.length; e++) {
          var t = Ks[e], a = t.interleaved;
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
        Ks = null;
      }
    }
    function vC(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, sg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Ih(e, i);
    }
    function Ow(e, t, a, i) {
      var u = t.interleaved;
      u === null ? (a.next = a, sg(t)) : (a.next = u.next, u.next = a), t.interleaved = a;
    }
    function Lw(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, sg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Ih(e, i);
    }
    function Ba(e, t) {
      return Ih(e, t);
    }
    var Mw = Ih;
    function Ih(e, t) {
      e.lanes = et(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = et(a.lanes, t)), a === null && (e.flags & (Mn | zn)) !== De && c0(e);
      for (var i = e, u = e.return; u !== null; )
        u.childLanes = et(u.childLanes, t), a = u.alternate, a !== null ? a.childLanes = et(a.childLanes, t) : (u.flags & (Mn | zn)) !== De && c0(e), i = u, u = u.return;
      if (i.tag === B) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var hC = 0, mC = 1, Qh = 2, cg = 3, Wh = !1, fg, Gh;
    fg = !1, Gh = null;
    function dg(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: P
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
    function Mo(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var u = i.shared;
      if (Gh === u && !fg && (S("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), fg = !0), O_()) {
        var s = u.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), u.pending = t, Mw(e, a);
      } else
        return Lw(e, u, t, a);
    }
    function Kh(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var u = i.shared;
        if (Ld(a)) {
          var s = u.lanes;
          s = Kc(s, e.pendingLanes);
          var f = et(s, a);
          u.lanes = f, bs(e, f);
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
    function Nw(e, t, a, i, u, s) {
      switch (a.tag) {
        case mC: {
          var f = a.payload;
          if (typeof f == "function") {
            fC();
            var p = f.call(s, i, u);
            {
              if (e.mode & qe) {
                Vt(!0);
                try {
                  f.call(s, i, u);
                } finally {
                  Vt(!1);
                }
              }
              dC();
            }
            return p;
          }
          return f;
        }
        case cg:
          e.flags = e.flags & -65537 | st;
        case hC: {
          var v = a.payload, y;
          if (typeof v == "function") {
            fC(), y = v.call(s, i, u);
            {
              if (e.mode & qe) {
                Vt(!0);
                try {
                  v.call(s, i, u);
                } finally {
                  Vt(!1);
                }
              }
              dC();
            }
          } else
            y = v;
          return y == null ? i : Ke({}, i, y);
        }
        case Qh:
          return Wh = !0, i;
      }
      return i;
    }
    function qh(e, t, a, i) {
      var u = e.updateQueue;
      Wh = !1, Gh = u.shared;
      var s = u.firstBaseUpdate, f = u.lastBaseUpdate, p = u.shared.pending;
      if (p !== null) {
        u.shared.pending = null;
        var v = p, y = v.next;
        v.next = null, f === null ? s = y : f.next = y, f = v;
        var g = e.alternate;
        if (g !== null) {
          var _ = g.updateQueue, w = _.lastBaseUpdate;
          w !== f && (w === null ? _.firstBaseUpdate = y : w.next = y, _.lastBaseUpdate = v);
        }
      }
      if (s !== null) {
        var N = u.baseState, U = P, j = null, ue = null, Ne = null, be = s;
        do {
          var bt = be.lane, yt = be.eventTime;
          if (hu(i, bt)) {
            if (Ne !== null) {
              var H = {
                eventTime: yt,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: An,
                tag: be.tag,
                payload: be.payload,
                callback: be.callback,
                next: null
              };
              Ne = Ne.next = H;
            }
            N = Nw(e, u, be, N, t, a);
            var O = be.callback;
            if (O !== null && // If the update was already committed, we should not queue its
            // callback again.
            be.lane !== An) {
              e.flags |= Jt;
              var q = u.effects;
              q === null ? u.effects = [be] : q.push(be);
            }
          } else {
            var k = {
              eventTime: yt,
              lane: bt,
              tag: be.tag,
              payload: be.payload,
              callback: be.callback,
              next: null
            };
            Ne === null ? (ue = Ne = k, j = N) : Ne = Ne.next = k, U = et(U, bt);
          }
          if (be = be.next, be === null) {
            if (p = u.shared.pending, p === null)
              break;
            var me = p, fe = me.next;
            me.next = null, be = fe, u.lastBaseUpdate = me, u.shared.pending = null;
          }
        } while (!0);
        Ne === null && (j = N), u.baseState = j, u.firstBaseUpdate = ue, u.lastBaseUpdate = Ne;
        var je = u.shared.interleaved;
        if (je !== null) {
          var We = je;
          do
            U = et(U, We.lane), We = We.next;
          while (We !== je);
        } else s === null && (u.shared.lanes = P);
        Yp(U), e.lanes = U, e.memoizedState = N;
      }
      Gh = null;
    }
    function zw(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function gC() {
      Wh = !1;
    }
    function Xh() {
      return Wh;
    }
    function SC(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u], f = s.callback;
          f !== null && (s.callback = null, zw(f, a));
        }
    }
    var gp = {}, No = Do(gp), Sp = Do(gp), Zh = Do(gp);
    function Jh(e) {
      if (e === gp)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function EC() {
      var e = Jh(Zh.current);
      return e;
    }
    function vg(e, t) {
      la(Zh, t, e), la(Sp, e, e), la(No, gp, e);
      var a = XT(t);
      ia(No, e), la(No, a, e);
    }
    function Nf(e) {
      ia(No, e), ia(Sp, e), ia(Zh, e);
    }
    function hg() {
      var e = Jh(No.current);
      return e;
    }
    function CC(e) {
      Jh(Zh.current);
      var t = Jh(No.current), a = ZT(t, e.type);
      t !== a && (la(Sp, e, e), la(No, a, e));
    }
    function mg(e) {
      Sp.current === e && (ia(No, e), ia(Sp, e));
    }
    var Uw = 0, RC = 1, TC = 1, Ep = 2, el = Do(Uw);
    function yg(e, t) {
      return (e & t) !== 0;
    }
    function zf(e) {
      return e & RC;
    }
    function gg(e, t) {
      return e & RC | t;
    }
    function Aw(e, t) {
      return e | t;
    }
    function zo(e, t) {
      la(el, t, e);
    }
    function Uf(e) {
      ia(el, e);
    }
    function Fw(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function em(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === xe) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || PE(i) || Ay(i))
              return t;
          }
        } else if (t.tag === $t && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var u = (t.flags & st) !== De;
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
    ), fr = (
      /* */
      1
    ), Fl = (
      /*  */
      2
    ), dr = (
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
    function jw(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var he = Xe.ReactCurrentDispatcher, Cp = Xe.ReactCurrentBatchConfig, Cg, Af;
    Cg = /* @__PURE__ */ new Set();
    var qs = P, qt = null, pr = null, vr = null, tm = !1, Rp = !1, Tp = 0, Hw = 0, Pw = 25, V = null, bi = null, Uo = -1, Rg = !1;
    function Ht() {
      {
        var e = V;
        bi === null ? bi = [e] : bi.push(e);
      }
    }
    function re() {
      {
        var e = V;
        bi !== null && (Uo++, bi[Uo] !== e && Vw(e));
      }
    }
    function Ff(e) {
      e != null && !Je(e) && S("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", V, typeof e);
    }
    function Vw(e) {
      {
        var t = Be(qt);
        if (!Cg.has(t) && (Cg.add(t), bi !== null)) {
          for (var a = "", i = 30, u = 0; u <= Uo; u++) {
            for (var s = bi[u], f = u === Uo ? e : s, p = u + 1 + ". " + s; p.length < i; )
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
        return S("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", V), !1;
      e.length !== t.length && S(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, V, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!Re(e[a], t[a]))
          return !1;
      return !0;
    }
    function jf(e, t, a, i, u, s) {
      qs = s, qt = t, bi = e !== null ? e._debugHookTypes : null, Uo = -1, Rg = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = P, e !== null && e.memoizedState !== null ? he.current = IC : bi !== null ? he.current = YC : he.current = $C;
      var f = a(i, u);
      if (Rp) {
        var p = 0;
        do {
          if (Rp = !1, Tp = 0, p >= Pw)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          p += 1, Rg = !1, pr = null, vr = null, t.updateQueue = null, Uo = -1, he.current = QC, f = a(i, u);
        } while (Rp);
      }
      he.current = vm, t._debugHookTypes = bi;
      var v = pr !== null && pr.next !== null;
      if (qs = P, qt = null, pr = null, vr = null, V = null, bi = null, Uo = -1, e !== null && (e.flags & Un) !== (t.flags & Un) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & ct) !== ke && S("Internal React error: Expected static flag was missing. Please notify the React team."), tm = !1, v)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return f;
    }
    function Hf() {
      var e = Tp !== 0;
      return Tp = 0, e;
    }
    function wC(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & Kt) !== ke ? t.flags &= -50333701 : t.flags &= -2053, e.lanes = _s(e.lanes, a);
    }
    function xC() {
      if (he.current = vm, tm) {
        for (var e = qt.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        tm = !1;
      }
      qs = P, qt = null, pr = null, vr = null, bi = null, Uo = -1, V = null, jC = !1, Rp = !1, Tp = 0;
    }
    function jl() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return vr === null ? qt.memoizedState = vr = e : vr = vr.next = e, vr;
    }
    function Di() {
      var e;
      if (pr === null) {
        var t = qt.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = pr.next;
      var a;
      if (vr === null ? a = qt.memoizedState : a = vr.next, a !== null)
        vr = a, a = vr.next, pr = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        pr = e;
        var i = {
          memoizedState: pr.memoizedState,
          baseState: pr.baseState,
          baseQueue: pr.baseQueue,
          queue: pr.queue,
          next: null
        };
        vr === null ? qt.memoizedState = vr = i : vr = vr.next = i;
      }
      return vr;
    }
    function _C() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function wg(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function xg(e, t, a) {
      var i = jl(), u;
      a !== void 0 ? u = a(t) : u = t, i.memoizedState = i.baseState = u;
      var s = {
        pending: null,
        interleaved: null,
        lanes: P,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: u
      };
      i.queue = s;
      var f = s.dispatch = Iw.bind(null, qt, s);
      return [i.memoizedState, f];
    }
    function _g(e, t, a) {
      var i = Di(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = pr, f = s.baseQueue, p = u.pending;
      if (p !== null) {
        if (f !== null) {
          var v = f.next, y = p.next;
          f.next = y, p.next = v;
        }
        s.baseQueue !== f && S("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = f = p, u.pending = null;
      }
      if (f !== null) {
        var g = f.next, _ = s.baseState, w = null, N = null, U = null, j = g;
        do {
          var ue = j.lane;
          if (hu(qs, ue)) {
            if (U !== null) {
              var be = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: An,
                action: j.action,
                hasEagerState: j.hasEagerState,
                eagerState: j.eagerState,
                next: null
              };
              U = U.next = be;
            }
            if (j.hasEagerState)
              _ = j.eagerState;
            else {
              var bt = j.action;
              _ = e(_, bt);
            }
          } else {
            var Ne = {
              lane: ue,
              action: j.action,
              hasEagerState: j.hasEagerState,
              eagerState: j.eagerState,
              next: null
            };
            U === null ? (N = U = Ne, w = _) : U = U.next = Ne, qt.lanes = et(qt.lanes, ue), Yp(ue);
          }
          j = j.next;
        } while (j !== null && j !== g);
        U === null ? w = _ : U.next = N, Re(_, i.memoizedState) || Mp(), i.memoizedState = _, i.baseState = w, i.baseQueue = U, u.lastRenderedState = _;
      }
      var yt = u.interleaved;
      if (yt !== null) {
        var k = yt;
        do {
          var H = k.lane;
          qt.lanes = et(qt.lanes, H), Yp(H), k = k.next;
        } while (k !== yt);
      } else f === null && (u.lanes = P);
      var O = u.dispatch;
      return [i.memoizedState, O];
    }
    function bg(e, t, a) {
      var i = Di(), u = i.queue;
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
        Re(p, i.memoizedState) || Mp(), i.memoizedState = p, i.baseQueue === null && (i.baseState = p), u.lastRenderedState = p;
      }
      return [p, s];
    }
    function mD(e, t, a) {
    }
    function yD(e, t, a) {
    }
    function Dg(e, t, a) {
      var i = qt, u = jl(), s, f = Ar();
      if (f) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), Af || s !== a() && (S("The result of getServerSnapshot should be cached to avoid an infinite loop"), Af = !0);
      } else {
        if (s = t(), !Af) {
          var p = t();
          Re(s, p) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), Af = !0);
        }
        var v = Nm();
        if (v === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        xs(v, qs) || bC(i, t, s);
      }
      u.memoizedState = s;
      var y = {
        value: s,
        getSnapshot: t
      };
      return u.queue = y, lm(kC.bind(null, i, y, e), [e]), i.flags |= ha, wp(fr | Fr, DC.bind(null, i, y, s, t), void 0, null), s;
    }
    function nm(e, t, a) {
      var i = qt, u = Di(), s = t();
      if (!Af) {
        var f = t();
        Re(s, f) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), Af = !0);
      }
      var p = u.memoizedState, v = !Re(p, s);
      v && (u.memoizedState = s, Mp());
      var y = u.queue;
      if (_p(kC.bind(null, i, y, e), [e]), y.getSnapshot !== t || v || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      vr !== null && vr.memoizedState.tag & fr) {
        i.flags |= ha, wp(fr | Fr, DC.bind(null, i, y, s, t), void 0, null);
        var g = Nm();
        if (g === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        xs(g, qs) || bC(i, t, s);
      }
      return s;
    }
    function bC(e, t, a) {
      e.flags |= Tc;
      var i = {
        getSnapshot: t,
        value: a
      }, u = qt.updateQueue;
      if (u === null)
        u = _C(), qt.updateQueue = u, u.stores = [i];
      else {
        var s = u.stores;
        s === null ? u.stores = [i] : s.push(i);
      }
    }
    function DC(e, t, a, i) {
      t.value = a, t.getSnapshot = i, OC(t) && LC(e);
    }
    function kC(e, t, a) {
      var i = function() {
        OC(t) && LC(e);
      };
      return a(i);
    }
    function OC(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !Re(a, i);
      } catch {
        return !0;
      }
    }
    function LC(e) {
      var t = Ba(e, Ae);
      t !== null && gr(t, e, Ae, Bt);
    }
    function rm(e) {
      var t = jl();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: P,
        dispatch: null,
        lastRenderedReducer: wg,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = Qw.bind(null, qt, a);
      return [t.memoizedState, i];
    }
    function kg(e) {
      return _g(wg);
    }
    function Og(e) {
      return bg(wg);
    }
    function wp(e, t, a, i) {
      var u = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, s = qt.updateQueue;
      if (s === null)
        s = _C(), qt.updateQueue = s, s.lastEffect = u.next = u;
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
      var t = jl();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function am(e) {
      var t = Di();
      return t.memoizedState;
    }
    function xp(e, t, a, i) {
      var u = jl(), s = i === void 0 ? null : i;
      qt.flags |= e, u.memoizedState = wp(fr | t, a, void 0, s);
    }
    function im(e, t, a, i) {
      var u = Di(), s = i === void 0 ? null : i, f = void 0;
      if (pr !== null) {
        var p = pr.memoizedState;
        if (f = p.destroy, s !== null) {
          var v = p.deps;
          if (Tg(s, v)) {
            u.memoizedState = wp(t, a, f, s);
            return;
          }
        }
      }
      qt.flags |= e, u.memoizedState = wp(fr | t, a, f, s);
    }
    function lm(e, t) {
      return (qt.mode & Kt) !== ke ? xp(gl | ha | fd, Fr, e, t) : xp(ha | fd, Fr, e, t);
    }
    function _p(e, t) {
      return im(ha, Fr, e, t);
    }
    function Mg(e, t) {
      return xp(vt, Fl, e, t);
    }
    function um(e, t) {
      return im(vt, Fl, e, t);
    }
    function Ng(e, t) {
      var a = vt;
      return a |= yl, (qt.mode & Kt) !== ke && (a |= Mr), xp(a, dr, e, t);
    }
    function om(e, t) {
      return im(vt, dr, e, t);
    }
    function MC(e, t) {
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
      var i = a != null ? a.concat([e]) : null, u = vt;
      return u |= yl, (qt.mode & Kt) !== ke && (u |= Mr), xp(u, dr, MC.bind(null, t, e), i);
    }
    function sm(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return im(vt, dr, MC.bind(null, t, e), i);
    }
    function Bw(e, t) {
    }
    var cm = Bw;
    function Ug(e, t) {
      var a = jl(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function fm(e, t) {
      var a = Di(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (Tg(i, s))
          return u[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function Ag(e, t) {
      var a = jl(), i = t === void 0 ? null : t, u = e();
      return a.memoizedState = [u, i], u;
    }
    function dm(e, t) {
      var a = Di(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (Tg(i, s))
          return u[0];
      }
      var f = e();
      return a.memoizedState = [f, i], f;
    }
    function Fg(e) {
      var t = jl();
      return t.memoizedState = e, e;
    }
    function NC(e) {
      var t = Di(), a = pr, i = a.memoizedState;
      return UC(t, i, e);
    }
    function zC(e) {
      var t = Di();
      if (pr === null)
        return t.memoizedState = e, e;
      var a = pr.memoizedState;
      return UC(t, a, e);
    }
    function UC(e, t, a) {
      var i = !Od(qs);
      if (i) {
        if (!Re(a, t)) {
          var u = Md();
          qt.lanes = et(qt.lanes, u), Yp(u), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, Mp()), e.memoizedState = a, a;
    }
    function $w(e, t, a) {
      var i = ga();
      $n(Ds(i, Fa)), e(!0);
      var u = Cp.transition;
      Cp.transition = {};
      var s = Cp.transition;
      Cp.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if ($n(i), Cp.transition = u, u === null && s._updatedFibers) {
          var f = s._updatedFibers.size;
          f > 10 && lt("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function jg() {
      var e = rm(!1), t = e[0], a = e[1], i = $w.bind(null, a), u = jl();
      return u.memoizedState = i, [t, i];
    }
    function AC() {
      var e = kg(), t = e[0], a = Di(), i = a.memoizedState;
      return [t, i];
    }
    function FC() {
      var e = Og(), t = e[0], a = Di(), i = a.memoizedState;
      return [t, i];
    }
    var jC = !1;
    function Yw() {
      return jC;
    }
    function Hg() {
      var e = jl(), t = Nm(), a = t.identifierPrefix, i;
      if (Ar()) {
        var u = uw();
        i = ":" + a + "R" + u;
        var s = Tp++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var f = Hw++;
        i = ":" + a + "r" + f.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function pm() {
      var e = Di(), t = e.memoizedState;
      return t;
    }
    function Iw(e, t, a) {
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
          var f = wa();
          gr(s, e, i, f), VC(s, t, i);
        }
      }
      BC(e, i);
    }
    function Qw(e, t, a) {
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
        if (e.lanes === P && (s === null || s.lanes === P)) {
          var f = t.lastRenderedReducer;
          if (f !== null) {
            var p;
            p = he.current, he.current = tl;
            try {
              var v = t.lastRenderedState, y = f(v, a);
              if (u.hasEagerState = !0, u.eagerState = y, Re(y, v)) {
                Ow(e, t, u, i);
                return;
              }
            } catch {
            } finally {
              he.current = p;
            }
          }
        }
        var g = vC(e, t, u, i);
        if (g !== null) {
          var _ = wa();
          gr(g, e, i, _), VC(g, t, i);
        }
      }
      BC(e, i);
    }
    function HC(e) {
      var t = e.alternate;
      return e === qt || t !== null && t === qt;
    }
    function PC(e, t) {
      Rp = tm = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function VC(e, t, a) {
      if (Ld(a)) {
        var i = t.lanes;
        i = Kc(i, e.pendingLanes);
        var u = et(i, a);
        t.lanes = u, bs(e, u);
      }
    }
    function BC(e, t, a) {
      ys(e, t);
    }
    var vm = {
      readContext: nr,
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
      }, Ie = function() {
        S("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      $C = {
        readContext: function(e) {
          return nr(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", Ht(), Ff(t), Ug(e, t);
        },
        useContext: function(e) {
          return V = "useContext", Ht(), nr(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", Ht(), Ff(t), lm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", Ht(), Ff(a), zg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", Ht(), Ff(t), Mg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", Ht(), Ff(t), Ng(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", Ht(), Ff(t);
          var a = he.current;
          he.current = Hl;
          try {
            return Ag(e, t);
          } finally {
            he.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", Ht();
          var i = he.current;
          he.current = Hl;
          try {
            return xg(e, t, a);
          } finally {
            he.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", Ht(), Lg(e);
        },
        useState: function(e) {
          V = "useState", Ht();
          var t = he.current;
          he.current = Hl;
          try {
            return rm(e);
          } finally {
            he.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", Ht(), void 0;
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", Ht(), Fg(e);
        },
        useTransition: function() {
          return V = "useTransition", Ht(), jg();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", Ht(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", Ht(), Dg(e, t, a);
        },
        useId: function() {
          return V = "useId", Ht(), Hg();
        },
        unstable_isNewReconciler: Ee
      }, YC = {
        readContext: function(e) {
          return nr(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", re(), Ug(e, t);
        },
        useContext: function(e) {
          return V = "useContext", re(), nr(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", re(), lm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", re(), zg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", re(), Mg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", re(), Ng(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", re();
          var a = he.current;
          he.current = Hl;
          try {
            return Ag(e, t);
          } finally {
            he.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", re();
          var i = he.current;
          he.current = Hl;
          try {
            return xg(e, t, a);
          } finally {
            he.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", re(), Lg(e);
        },
        useState: function(e) {
          V = "useState", re();
          var t = he.current;
          he.current = Hl;
          try {
            return rm(e);
          } finally {
            he.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", re(), void 0;
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", re(), Fg(e);
        },
        useTransition: function() {
          return V = "useTransition", re(), jg();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", re(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", re(), Dg(e, t, a);
        },
        useId: function() {
          return V = "useId", re(), Hg();
        },
        unstable_isNewReconciler: Ee
      }, IC = {
        readContext: function(e) {
          return nr(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", re(), fm(e, t);
        },
        useContext: function(e) {
          return V = "useContext", re(), nr(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", re(), _p(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", re(), sm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", re(), um(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", re(), om(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", re();
          var a = he.current;
          he.current = tl;
          try {
            return dm(e, t);
          } finally {
            he.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", re();
          var i = he.current;
          he.current = tl;
          try {
            return _g(e, t, a);
          } finally {
            he.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", re(), am();
        },
        useState: function(e) {
          V = "useState", re();
          var t = he.current;
          he.current = tl;
          try {
            return kg(e);
          } finally {
            he.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", re(), cm();
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", re(), NC(e);
        },
        useTransition: function() {
          return V = "useTransition", re(), AC();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", re(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", re(), nm(e, t);
        },
        useId: function() {
          return V = "useId", re(), pm();
        },
        unstable_isNewReconciler: Ee
      }, QC = {
        readContext: function(e) {
          return nr(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", re(), fm(e, t);
        },
        useContext: function(e) {
          return V = "useContext", re(), nr(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", re(), _p(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", re(), sm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", re(), um(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", re(), om(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", re();
          var a = he.current;
          he.current = hm;
          try {
            return dm(e, t);
          } finally {
            he.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", re();
          var i = he.current;
          he.current = hm;
          try {
            return bg(e, t, a);
          } finally {
            he.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", re(), am();
        },
        useState: function(e) {
          V = "useState", re();
          var t = he.current;
          he.current = hm;
          try {
            return Og(e);
          } finally {
            he.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", re(), cm();
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", re(), zC(e);
        },
        useTransition: function() {
          return V = "useTransition", re(), FC();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", re(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", re(), nm(e, t);
        },
        useId: function() {
          return V = "useId", re(), pm();
        },
        unstable_isNewReconciler: Ee
      }, Hl = {
        readContext: function(e) {
          return Pg(), nr(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", Ie(), Ht(), Ug(e, t);
        },
        useContext: function(e) {
          return V = "useContext", Ie(), Ht(), nr(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", Ie(), Ht(), lm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", Ie(), Ht(), zg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", Ie(), Ht(), Mg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", Ie(), Ht(), Ng(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", Ie(), Ht();
          var a = he.current;
          he.current = Hl;
          try {
            return Ag(e, t);
          } finally {
            he.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", Ie(), Ht();
          var i = he.current;
          he.current = Hl;
          try {
            return xg(e, t, a);
          } finally {
            he.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", Ie(), Ht(), Lg(e);
        },
        useState: function(e) {
          V = "useState", Ie(), Ht();
          var t = he.current;
          he.current = Hl;
          try {
            return rm(e);
          } finally {
            he.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", Ie(), Ht(), void 0;
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", Ie(), Ht(), Fg(e);
        },
        useTransition: function() {
          return V = "useTransition", Ie(), Ht(), jg();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", Ie(), Ht(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", Ie(), Ht(), Dg(e, t, a);
        },
        useId: function() {
          return V = "useId", Ie(), Ht(), Hg();
        },
        unstable_isNewReconciler: Ee
      }, tl = {
        readContext: function(e) {
          return Pg(), nr(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", Ie(), re(), fm(e, t);
        },
        useContext: function(e) {
          return V = "useContext", Ie(), re(), nr(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", Ie(), re(), _p(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", Ie(), re(), sm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", Ie(), re(), um(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", Ie(), re(), om(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", Ie(), re();
          var a = he.current;
          he.current = tl;
          try {
            return dm(e, t);
          } finally {
            he.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", Ie(), re();
          var i = he.current;
          he.current = tl;
          try {
            return _g(e, t, a);
          } finally {
            he.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", Ie(), re(), am();
        },
        useState: function(e) {
          V = "useState", Ie(), re();
          var t = he.current;
          he.current = tl;
          try {
            return kg(e);
          } finally {
            he.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", Ie(), re(), cm();
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", Ie(), re(), NC(e);
        },
        useTransition: function() {
          return V = "useTransition", Ie(), re(), AC();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", Ie(), re(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", Ie(), re(), nm(e, t);
        },
        useId: function() {
          return V = "useId", Ie(), re(), pm();
        },
        unstable_isNewReconciler: Ee
      }, hm = {
        readContext: function(e) {
          return Pg(), nr(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", Ie(), re(), fm(e, t);
        },
        useContext: function(e) {
          return V = "useContext", Ie(), re(), nr(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", Ie(), re(), _p(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", Ie(), re(), sm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", Ie(), re(), um(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", Ie(), re(), om(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", Ie(), re();
          var a = he.current;
          he.current = tl;
          try {
            return dm(e, t);
          } finally {
            he.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", Ie(), re();
          var i = he.current;
          he.current = tl;
          try {
            return bg(e, t, a);
          } finally {
            he.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", Ie(), re(), am();
        },
        useState: function(e) {
          V = "useState", Ie(), re();
          var t = he.current;
          he.current = tl;
          try {
            return Og(e);
          } finally {
            he.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", Ie(), re(), cm();
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", Ie(), re(), zC(e);
        },
        useTransition: function() {
          return V = "useTransition", Ie(), re(), FC();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", Ie(), re(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", Ie(), re(), nm(e, t);
        },
        useId: function() {
          return V = "useId", Ie(), re(), pm();
        },
        unstable_isNewReconciler: Ee
      };
    }
    var Ao = A.unstable_now, WC = 0, mm = -1, bp = -1, ym = -1, Vg = !1, gm = !1;
    function GC() {
      return Vg;
    }
    function Ww() {
      gm = !0;
    }
    function Gw() {
      Vg = !1, gm = !1;
    }
    function Kw() {
      Vg = gm, gm = !1;
    }
    function KC() {
      return WC;
    }
    function qC() {
      WC = Ao();
    }
    function Bg(e) {
      bp = Ao(), e.actualStartTime < 0 && (e.actualStartTime = Ao());
    }
    function XC(e) {
      bp = -1;
    }
    function Sm(e, t) {
      if (bp >= 0) {
        var a = Ao() - bp;
        e.actualDuration += a, t && (e.selfBaseDuration = a), bp = -1;
      }
    }
    function Pl(e) {
      if (mm >= 0) {
        var t = Ao() - mm;
        mm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case B:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case kt:
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
            case B:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case kt:
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
        var a = Ke({}, t), i = e.defaultProps;
        for (var u in i)
          a[u] === void 0 && (a[u] = i[u]);
        return a;
      }
      return t;
    }
    var Qg = {}, Wg, Gg, Kg, qg, Xg, ZC, Em, Zg, Jg, eS, Dp;
    {
      Wg = /* @__PURE__ */ new Set(), Gg = /* @__PURE__ */ new Set(), Kg = /* @__PURE__ */ new Set(), qg = /* @__PURE__ */ new Set(), Zg = /* @__PURE__ */ new Set(), Xg = /* @__PURE__ */ new Set(), Jg = /* @__PURE__ */ new Set(), eS = /* @__PURE__ */ new Set(), Dp = /* @__PURE__ */ new Set();
      var JC = /* @__PURE__ */ new Set();
      Em = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          JC.has(a) || (JC.add(a), S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, ZC = function(e, t) {
        if (t === void 0) {
          var a = xt(e) || "Component";
          Xg.has(a) || (Xg.add(a), S("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
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
        if (e.mode & qe) {
          Vt(!0);
          try {
            s = a(i, u);
          } finally {
            Vt(!1);
          }
        }
        ZC(t, s);
      }
      var f = s == null ? u : Ke({}, u, s);
      if (e.memoizedState = f, e.lanes === P) {
        var p = e.updateQueue;
        p.baseState = f;
      }
    }
    var nS = {
      isMounted: dd,
      enqueueSetState: function(e, t, a) {
        var i = ro(e), u = wa(), s = Po(i), f = Lu(u, s);
        f.payload = t, a != null && (Em(a, "setState"), f.callback = a);
        var p = Mo(i, f, s);
        p !== null && (gr(p, i, s, u), Kh(p, i, s)), ys(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = ro(e), u = wa(), s = Po(i), f = Lu(u, s);
        f.tag = mC, f.payload = t, a != null && (Em(a, "replaceState"), f.callback = a);
        var p = Mo(i, f, s);
        p !== null && (gr(p, i, s, u), Kh(p, i, s)), ys(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = ro(e), i = wa(), u = Po(a), s = Lu(i, u);
        s.tag = Qh, t != null && (Em(t, "forceUpdate"), s.callback = t);
        var f = Mo(a, s, u);
        f !== null && (gr(f, a, u, i), Kh(f, a, u)), _d(a, u);
      }
    };
    function eR(e, t, a, i, u, s, f) {
      var p = e.stateNode;
      if (typeof p.shouldComponentUpdate == "function") {
        var v = p.shouldComponentUpdate(i, s, f);
        {
          if (e.mode & qe) {
            Vt(!0);
            try {
              v = p.shouldComponentUpdate(i, s, f);
            } finally {
              Vt(!1);
            }
          }
          v === void 0 && S("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", xt(t) || "Component");
        }
        return v;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !Le(a, i) || !Le(u, s) : !0;
    }
    function qw(e, t, a) {
      var i = e.stateNode;
      {
        var u = xt(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? S("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", u) : S("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", u)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && S("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", u), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && S("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", u), i.propTypes && S("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", u), i.contextType && S("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", u), t.childContextTypes && !Dp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & qe) === ke && (Dp.add(t), S(`%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), t.contextTypes && !Dp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & qe) === ke && (Dp.add(t), S(`%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), i.contextTypes && S("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", u), t.contextType && t.contextTypes && !Jg.has(t) && (Jg.add(t), S("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", u)), typeof i.componentShouldUpdate == "function" && S("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", u), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && S("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", xt(t) || "A pure component"), typeof i.componentDidUnmount == "function" && S("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", u), typeof i.componentDidReceiveProps == "function" && S("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", u), typeof i.componentWillRecieveProps == "function" && S("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", u), typeof i.UNSAFE_componentWillRecieveProps == "function" && S("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", u);
        var f = i.props !== a;
        i.props !== void 0 && f && S("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", u, u), i.defaultProps && S("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", u, u), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !Kg.has(t) && (Kg.add(t), S("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", xt(t))), typeof i.getDerivedStateFromProps == "function" && S("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof i.getDerivedStateFromError == "function" && S("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof t.getSnapshotBeforeUpdate == "function" && S("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", u);
        var p = i.state;
        p && (typeof p != "object" || Je(p)) && S("%s.state: must be set to an object or null", u), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && S("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", u);
      }
    }
    function tR(e, t) {
      t.updater = nS, e.stateNode = t, cs(t, e), t._reactInternalInstance = Qg;
    }
    function nR(e, t, a) {
      var i = !1, u = li, s = li, f = t.contextType;
      if ("contextType" in t) {
        var p = (
          // Allow null for conditional declaration
          f === null || f !== void 0 && f.$$typeof === R && f._context === void 0
        );
        if (!p && !eS.has(t)) {
          eS.add(t);
          var v = "";
          f === void 0 ? v = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? v = " However, it is set to a " + typeof f + "." : f.$$typeof === zi ? v = " Did you accidentally pass the Context.Provider instead?" : f._context !== void 0 ? v = " Did you accidentally pass the Context.Consumer instead?" : v = " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", S("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", xt(t) || "Component", v);
        }
      }
      if (typeof f == "object" && f !== null)
        s = nr(f);
      else {
        u = xf(e, t, !0);
        var y = t.contextTypes;
        i = y != null, s = i ? _f(e, u) : li;
      }
      var g = new t(a, s);
      if (e.mode & qe) {
        Vt(!0);
        try {
          g = new t(a, s);
        } finally {
          Vt(!1);
        }
      }
      var _ = e.memoizedState = g.state !== null && g.state !== void 0 ? g.state : null;
      tR(e, g);
      {
        if (typeof t.getDerivedStateFromProps == "function" && _ === null) {
          var w = xt(t) || "Component";
          Gg.has(w) || (Gg.add(w), S("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", w, g.state === null ? "null" : "undefined", w));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof g.getSnapshotBeforeUpdate == "function") {
          var N = null, U = null, j = null;
          if (typeof g.componentWillMount == "function" && g.componentWillMount.__suppressDeprecationWarning !== !0 ? N = "componentWillMount" : typeof g.UNSAFE_componentWillMount == "function" && (N = "UNSAFE_componentWillMount"), typeof g.componentWillReceiveProps == "function" && g.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? U = "componentWillReceiveProps" : typeof g.UNSAFE_componentWillReceiveProps == "function" && (U = "UNSAFE_componentWillReceiveProps"), typeof g.componentWillUpdate == "function" && g.componentWillUpdate.__suppressDeprecationWarning !== !0 ? j = "componentWillUpdate" : typeof g.UNSAFE_componentWillUpdate == "function" && (j = "UNSAFE_componentWillUpdate"), N !== null || U !== null || j !== null) {
            var ue = xt(t) || "Component", Ne = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            qg.has(ue) || (qg.add(ue), S(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, ue, Ne, N !== null ? `
  ` + N : "", U !== null ? `
  ` + U : "", j !== null ? `
  ` + j : ""));
          }
        }
      }
      return i && IE(e, u, s), g;
    }
    function Xw(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (S("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", Be(e) || "Component"), nS.enqueueReplaceState(t, t.state, null));
    }
    function rR(e, t, a, i) {
      var u = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== u) {
        {
          var s = Be(e) || "Component";
          Wg.has(s) || (Wg.add(s), S("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        nS.enqueueReplaceState(t, t.state, null);
      }
    }
    function rS(e, t, a, i) {
      qw(e, t, a);
      var u = e.stateNode;
      u.props = a, u.state = e.memoizedState, u.refs = {}, dg(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        u.context = nr(s);
      else {
        var f = xf(e, t, !0);
        u.context = _f(e, f);
      }
      {
        if (u.state === a) {
          var p = xt(t) || "Component";
          Zg.has(p) || (Zg.add(p), S("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", p));
        }
        e.mode & qe && Ji.recordLegacyContextWarning(e, u), Ji.recordUnsafeLifecycleWarnings(e, u);
      }
      u.state = e.memoizedState;
      var v = t.getDerivedStateFromProps;
      if (typeof v == "function" && (tS(e, t, v, a), u.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof u.getSnapshotBeforeUpdate != "function" && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (Xw(e, u), qh(e, a, u, i), u.state = e.memoizedState), typeof u.componentDidMount == "function") {
        var y = vt;
        y |= yl, (e.mode & Kt) !== ke && (y |= Mr), e.flags |= y;
      }
    }
    function Zw(e, t, a, i) {
      var u = e.stateNode, s = e.memoizedProps;
      u.props = s;
      var f = u.context, p = t.contextType, v = li;
      if (typeof p == "object" && p !== null)
        v = nr(p);
      else {
        var y = xf(e, t, !0);
        v = _f(e, y);
      }
      var g = t.getDerivedStateFromProps, _ = typeof g == "function" || typeof u.getSnapshotBeforeUpdate == "function";
      !_ && (typeof u.UNSAFE_componentWillReceiveProps == "function" || typeof u.componentWillReceiveProps == "function") && (s !== a || f !== v) && rR(e, u, a, v), gC();
      var w = e.memoizedState, N = u.state = w;
      if (qh(e, a, u, i), N = e.memoizedState, s === a && w === N && !Lh() && !Xh()) {
        if (typeof u.componentDidMount == "function") {
          var U = vt;
          U |= yl, (e.mode & Kt) !== ke && (U |= Mr), e.flags |= U;
        }
        return !1;
      }
      typeof g == "function" && (tS(e, t, g, a), N = e.memoizedState);
      var j = Xh() || eR(e, t, s, a, w, N, v);
      if (j) {
        if (!_ && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function") {
          var ue = vt;
          ue |= yl, (e.mode & Kt) !== ke && (ue |= Mr), e.flags |= ue;
        }
      } else {
        if (typeof u.componentDidMount == "function") {
          var Ne = vt;
          Ne |= yl, (e.mode & Kt) !== ke && (Ne |= Mr), e.flags |= Ne;
        }
        e.memoizedProps = a, e.memoizedState = N;
      }
      return u.props = a, u.state = N, u.context = v, j;
    }
    function Jw(e, t, a, i, u) {
      var s = t.stateNode;
      yC(e, t);
      var f = t.memoizedProps, p = t.type === t.elementType ? f : nl(t.type, f);
      s.props = p;
      var v = t.pendingProps, y = s.context, g = a.contextType, _ = li;
      if (typeof g == "object" && g !== null)
        _ = nr(g);
      else {
        var w = xf(t, a, !0);
        _ = _f(t, w);
      }
      var N = a.getDerivedStateFromProps, U = typeof N == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !U && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (f !== v || y !== _) && rR(t, s, i, _), gC();
      var j = t.memoizedState, ue = s.state = j;
      if (qh(t, i, s, u), ue = t.memoizedState, f === v && j === ue && !Lh() && !Xh())
        return typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || j !== e.memoizedState) && (t.flags |= vt), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || j !== e.memoizedState) && (t.flags |= za), !1;
      typeof N == "function" && (tS(t, a, N, i), ue = t.memoizedState);
      var Ne = Xh() || eR(t, a, p, i, j, ue, _) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      le;
      return Ne ? (!U && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, ue, _), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, ue, _)), typeof s.componentDidUpdate == "function" && (t.flags |= vt), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= za)) : (typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || j !== e.memoizedState) && (t.flags |= vt), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || j !== e.memoizedState) && (t.flags |= za), t.memoizedProps = i, t.memoizedState = ue), s.props = i, s.state = ue, s.context = _, Ne;
    }
    function Xs(e, t) {
      return {
        value: e,
        source: t,
        stack: wt(t),
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
    function ex(e, t) {
      return !0;
    }
    function iS(e, t) {
      try {
        var a = ex(e, t);
        if (a === !1)
          return;
        var i = t.value, u = t.source, s = t.stack, f = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === ne)
            return;
          console.error(i);
        }
        var p = u ? Be(u) : null, v = p ? "The above error occurred in the <" + p + "> component:" : "The above error occurred in one of your React components:", y;
        if (e.tag === B)
          y = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var g = Be(e) || "Anonymous";
          y = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + g + ".");
        }
        var _ = v + `
` + f + `

` + ("" + y);
        console.error(_);
      } catch (w) {
        setTimeout(function() {
          throw w;
        });
      }
    }
    var tx = typeof WeakMap == "function" ? WeakMap : Map;
    function aR(e, t, a) {
      var i = Lu(Bt, a);
      i.tag = cg, i.payload = {
        element: null
      };
      var u = t.value;
      return i.callback = function() {
        W_(u), iS(e, t);
      }, i;
    }
    function lS(e, t, a) {
      var i = Lu(Bt, a);
      i.tag = cg;
      var u = e.type.getDerivedStateFromError;
      if (typeof u == "function") {
        var s = t.value;
        i.payload = function() {
          return u(s);
        }, i.callback = function() {
          h0(e), iS(e, t);
        };
      }
      var f = e.stateNode;
      return f !== null && typeof f.componentDidCatch == "function" && (i.callback = function() {
        h0(e), iS(e, t), typeof u != "function" && I_(this);
        var v = t.value, y = t.stack;
        this.componentDidCatch(v, {
          componentStack: y !== null ? y : ""
        }), typeof u != "function" && (na(e.lanes, Ae) || S("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", Be(e) || "Unknown"));
      }), i;
    }
    function iR(e, t, a) {
      var i = e.pingCache, u;
      if (i === null ? (i = e.pingCache = new tx(), u = /* @__PURE__ */ new Set(), i.set(t, u)) : (u = i.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), i.set(t, u))), !u.has(a)) {
        u.add(a);
        var s = G_.bind(null, e, t, a);
        xr && Ip(e, a), t.then(s, s);
      }
    }
    function nx(e, t, a, i) {
      var u = e.updateQueue;
      if (u === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        u.add(a);
    }
    function rx(e, t) {
      var a = e.tag;
      if ((e.mode & ct) === ke && (a === Se || a === Ue || a === Pe)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function lR(e) {
      var t = e;
      do {
        if (t.tag === xe && Fw(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function uR(e, t, a, i, u) {
      if ((e.mode & ct) === ke) {
        if (e === t)
          e.flags |= Ua;
        else {
          if (e.flags |= st, a.flags |= ti, a.flags &= -52805, a.tag === ne) {
            var s = a.alternate;
            if (s === null)
              a.tag = Mt;
            else {
              var f = Lu(Bt, Ae);
              f.tag = Qh, Mo(a, f, Ae);
            }
          }
          a.lanes = et(a.lanes, Ae);
        }
        return e;
      }
      return e.flags |= Ua, e.lanes = u, e;
    }
    function ax(e, t, a, i, u) {
      if (a.flags |= lu, xr && Ip(e, u), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        rx(a), Ar() && a.mode & ct && ZE();
        var f = lR(t);
        if (f !== null) {
          f.flags &= -257, uR(f, t, a, e, u), f.mode & ct && iR(e, s, u), nx(f, e, s);
          return;
        } else {
          if (!kd(u)) {
            iR(e, s, u), HS();
            return;
          }
          var p = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = p;
        }
      } else if (Ar() && a.mode & ct) {
        ZE();
        var v = lR(t);
        if (v !== null) {
          (v.flags & Ua) === De && (v.flags |= yn), uR(v, t, a, e, u), Zy(Xs(i, a));
          return;
        }
      }
      i = Xs(i, a), F_(i);
      var y = t;
      do {
        switch (y.tag) {
          case B: {
            var g = i;
            y.flags |= Ua;
            var _ = Jn(u);
            y.lanes = et(y.lanes, _);
            var w = aR(y, g, _);
            pg(y, w);
            return;
          }
          case ne:
            var N = i, U = y.type, j = y.stateNode;
            if ((y.flags & st) === De && (typeof U.getDerivedStateFromError == "function" || j !== null && typeof j.componentDidCatch == "function" && !l0(j))) {
              y.flags |= Ua;
              var ue = Jn(u);
              y.lanes = et(y.lanes, ue);
              var Ne = lS(y, N, ue);
              pg(y, Ne);
              return;
            }
            break;
        }
        y = y.return;
      } while (y !== null);
    }
    function ix() {
      return null;
    }
    var kp = Xe.ReactCurrentOwner, rl = !1, uS, Op, oS, sS, cS, Zs, fS, Cm, Lp;
    uS = {}, Op = {}, oS = {}, sS = {}, cS = {}, Zs = !1, fS = {}, Cm = {}, Lp = {};
    function Ra(e, t, a, i) {
      e === null ? t.child = cC(t, null, a, i) : t.child = Of(t, e.child, a, i);
    }
    function lx(e, t, a, i) {
      t.child = Of(t, e.child, null, i), t.child = Of(t, null, a, i);
    }
    function oR(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && Xi(
          s,
          i,
          // Resolved props
          "prop",
          xt(a)
        );
      }
      var f = a.render, p = t.ref, v, y;
      Mf(t, u), Aa(t);
      {
        if (kp.current = t, ka(!0), v = jf(e, t, f, i, p, u), y = Hf(), t.mode & qe) {
          Vt(!0);
          try {
            v = jf(e, t, f, i, p, u), y = Hf();
          } finally {
            Vt(!1);
          }
        }
        ka(!1);
      }
      return Rl(), e !== null && !rl ? (wC(e, t, u), Mu(e, t, u)) : (Ar() && y && Qy(t), t.flags |= Ii, Ra(e, t, v, u), t.child);
    }
    function sR(e, t, a, i, u) {
      if (e === null) {
        var s = a.type;
        if (fb(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var f = s;
          return f = Wf(s), t.tag = Pe, t.type = f, vS(t, s), cR(e, t, f, i, u);
        }
        {
          var p = s.propTypes;
          if (p && Xi(
            p,
            i,
            // Resolved props
            "prop",
            xt(s)
          ), a.defaultProps !== void 0) {
            var v = xt(s) || "Unknown";
            Lp[v] || (S("%s: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.", v), Lp[v] = !0);
          }
        }
        var y = qS(a.type, null, i, t, t.mode, u);
        return y.ref = t.ref, y.return = t, t.child = y, y;
      }
      {
        var g = a.type, _ = g.propTypes;
        _ && Xi(
          _,
          i,
          // Resolved props
          "prop",
          xt(g)
        );
      }
      var w = e.child, N = ES(e, u);
      if (!N) {
        var U = w.memoizedProps, j = a.compare;
        if (j = j !== null ? j : Le, j(U, i) && e.ref === t.ref)
          return Mu(e, t, u);
      }
      t.flags |= Ii;
      var ue = rc(w, i);
      return ue.ref = t.ref, ue.return = t, t.child = ue, ue;
    }
    function cR(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === Ye) {
          var f = s, p = f._payload, v = f._init;
          try {
            s = v(p);
          } catch {
            s = null;
          }
          var y = s && s.propTypes;
          y && Xi(
            y,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            xt(s)
          );
        }
      }
      if (e !== null) {
        var g = e.memoizedProps;
        if (Le(g, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (rl = !1, t.pendingProps = i = g, ES(e, u))
            (e.flags & ti) !== De && (rl = !0);
          else return t.lanes = e.lanes, Mu(e, t, u);
      }
      return dS(e, t, a, i, u);
    }
    function fR(e, t, a) {
      var i = t.pendingProps, u = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || b)
        if ((t.mode & ct) === ke) {
          var f = {
            baseLanes: P,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = f, zm(t, a);
        } else if (na(a, ya)) {
          var _ = {
            baseLanes: P,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = _;
          var w = s !== null ? s.baseLanes : a;
          zm(t, w);
        } else {
          var p = null, v;
          if (s !== null) {
            var y = s.baseLanes;
            v = et(y, a);
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
        var N;
        s !== null ? (N = et(s.baseLanes, a), t.memoizedState = null) : N = a, zm(t, N);
      }
      return Ra(e, t, u, a), t.child;
    }
    function ux(e, t, a) {
      var i = t.pendingProps;
      return Ra(e, t, i, a), t.child;
    }
    function ox(e, t, a) {
      var i = t.pendingProps.children;
      return Ra(e, t, i, a), t.child;
    }
    function sx(e, t, a) {
      {
        t.flags |= vt;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var u = t.pendingProps, s = u.children;
      return Ra(e, t, s, a), t.child;
    }
    function dR(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= Nn, t.flags |= ds);
    }
    function dS(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && Xi(
          s,
          i,
          // Resolved props
          "prop",
          xt(a)
        );
      }
      var f;
      {
        var p = xf(t, a, !0);
        f = _f(t, p);
      }
      var v, y;
      Mf(t, u), Aa(t);
      {
        if (kp.current = t, ka(!0), v = jf(e, t, a, i, f, u), y = Hf(), t.mode & qe) {
          Vt(!0);
          try {
            v = jf(e, t, a, i, f, u), y = Hf();
          } finally {
            Vt(!1);
          }
        }
        ka(!1);
      }
      return Rl(), e !== null && !rl ? (wC(e, t, u), Mu(e, t, u)) : (Ar() && y && Qy(t), t.flags |= Ii, Ra(e, t, v, u), t.child);
    }
    function pR(e, t, a, i, u) {
      {
        switch (_b(t)) {
          case !1: {
            var s = t.stateNode, f = t.type, p = new f(t.memoizedProps, s.context), v = p.state;
            s.updater.enqueueSetState(s, v, null);
            break;
          }
          case !0: {
            t.flags |= st, t.flags |= Ua;
            var y = new Error("Simulated error coming from DevTools"), g = Jn(u);
            t.lanes = et(t.lanes, g);
            var _ = lS(t, Xs(y, t), g);
            pg(t, _);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var w = a.propTypes;
          w && Xi(
            w,
            i,
            // Resolved props
            "prop",
            xt(a)
          );
        }
      }
      var N;
      Al(a) ? (N = !0, Nh(t)) : N = !1, Mf(t, u);
      var U = t.stateNode, j;
      U === null ? (Tm(e, t), nR(t, a, i), rS(t, a, i, u), j = !0) : e === null ? j = Zw(t, a, i, u) : j = Jw(e, t, a, i, u);
      var ue = pS(e, t, a, j, N, u);
      {
        var Ne = t.stateNode;
        j && Ne.props !== i && (Zs || S("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", Be(t) || "a component"), Zs = !0);
      }
      return ue;
    }
    function pS(e, t, a, i, u, s) {
      dR(e, t);
      var f = (t.flags & st) !== De;
      if (!i && !f)
        return u && GE(t, a, !1), Mu(e, t, s);
      var p = t.stateNode;
      kp.current = t;
      var v;
      if (f && typeof a.getDerivedStateFromError != "function")
        v = null, XC();
      else {
        Aa(t);
        {
          if (ka(!0), v = p.render(), t.mode & qe) {
            Vt(!0);
            try {
              p.render();
            } finally {
              Vt(!1);
            }
          }
          ka(!1);
        }
        Rl();
      }
      return t.flags |= Ii, e !== null && f ? lx(e, t, v, s) : Ra(e, t, v, s), t.memoizedState = p.state, u && GE(t, a, !0), t.child;
    }
    function vR(e) {
      var t = e.stateNode;
      t.pendingContext ? QE(e, t.pendingContext, t.pendingContext !== t.context) : t.context && QE(e, t.context, !1), vg(e, t.containerInfo);
    }
    function cx(e, t, a) {
      if (vR(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, u = t.memoizedState, s = u.element;
      yC(e, t), qh(t, i, null, a);
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
        if (y.baseState = v, t.memoizedState = v, t.flags & yn) {
          var g = Xs(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return hR(e, t, p, a, g);
        } else if (p !== s) {
          var _ = Xs(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return hR(e, t, p, a, _);
        } else {
          pw(t);
          var w = cC(t, null, p, a);
          t.child = w;
          for (var N = w; N; )
            N.flags = N.flags & -3 | zn, N = N.sibling;
        }
      } else {
        if (kf(), p === s)
          return Mu(e, t, a);
        Ra(e, t, p, a);
      }
      return t.child;
    }
    function hR(e, t, a, i, u) {
      return kf(), Zy(u), t.flags |= yn, Ra(e, t, a, i), t.child;
    }
    function fx(e, t, a) {
      CC(t), e === null && Xy(t);
      var i = t.type, u = t.pendingProps, s = e !== null ? e.memoizedProps : null, f = u.children, p = My(i, u);
      return p ? f = null : s !== null && My(i, s) && (t.flags |= Gt), dR(e, t), Ra(e, t, f, a), t.child;
    }
    function dx(e, t) {
      return e === null && Xy(t), null;
    }
    function px(e, t, a, i) {
      Tm(e, t);
      var u = t.pendingProps, s = a, f = s._payload, p = s._init, v = p(f);
      t.type = v;
      var y = t.tag = db(v), g = nl(v, u), _;
      switch (y) {
        case Se:
          return vS(t, v), t.type = v = Wf(v), _ = dS(null, t, v, g, i), _;
        case ne:
          return t.type = v = YS(v), _ = pR(null, t, v, g, i), _;
        case Ue:
          return t.type = v = IS(v), _ = oR(null, t, v, g, i), _;
        case dt: {
          if (t.type !== t.elementType) {
            var w = v.propTypes;
            w && Xi(
              w,
              g,
              // Resolved for outer only
              "prop",
              xt(v)
            );
          }
          return _ = sR(
            null,
            t,
            v,
            nl(v.type, g),
            // The inner type can have defaults too
            i
          ), _;
        }
      }
      var N = "";
      throw v !== null && typeof v == "object" && v.$$typeof === Ye && (N = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + v + ". " + ("Lazy element type must resolve to a class or function." + N));
    }
    function vx(e, t, a, i, u) {
      Tm(e, t), t.tag = ne;
      var s;
      return Al(a) ? (s = !0, Nh(t)) : s = !1, Mf(t, u), nR(t, a, i), rS(t, a, i, u), pS(null, t, a, !0, s, u);
    }
    function hx(e, t, a, i) {
      Tm(e, t);
      var u = t.pendingProps, s;
      {
        var f = xf(t, a, !1);
        s = _f(t, f);
      }
      Mf(t, i);
      var p, v;
      Aa(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var y = xt(a) || "Unknown";
          uS[y] || (S("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", y, y), uS[y] = !0);
        }
        t.mode & qe && Ji.recordLegacyContextWarning(t, null), ka(!0), kp.current = t, p = jf(null, t, a, u, s, i), v = Hf(), ka(!1);
      }
      if (Rl(), t.flags |= Ii, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0) {
        var g = xt(a) || "Unknown";
        Op[g] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", g, g, g), Op[g] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0
      ) {
        {
          var _ = xt(a) || "Unknown";
          Op[_] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", _, _, _), Op[_] = !0);
        }
        t.tag = ne, t.memoizedState = null, t.updateQueue = null;
        var w = !1;
        return Al(a) ? (w = !0, Nh(t)) : w = !1, t.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, dg(t), tR(t, p), rS(t, a, u, i), pS(null, t, a, !0, w, i);
      } else {
        if (t.tag = Se, t.mode & qe) {
          Vt(!0);
          try {
            p = jf(null, t, a, u, s, i), v = Hf();
          } finally {
            Vt(!1);
          }
        }
        return Ar() && v && Qy(t), Ra(null, t, p, i), vS(t, a), t.child;
      }
    }
    function vS(e, t) {
      {
        if (t && t.childContextTypes && S("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = Or();
          i && (a += `

Check the render method of \`` + i + "`.");
          var u = i || "", s = e._debugSource;
          s && (u = s.fileName + ":" + s.lineNumber), cS[u] || (cS[u] = !0, S("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (t.defaultProps !== void 0) {
          var f = xt(t) || "Unknown";
          Lp[f] || (S("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", f), Lp[f] = !0);
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var p = xt(t) || "Unknown";
          sS[p] || (S("%s: Function components do not support getDerivedStateFromProps.", p), sS[p] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var v = xt(t) || "Unknown";
          oS[v] || (S("%s: Function components do not support contextType.", v), oS[v] = !0);
        }
      }
    }
    var hS = {
      dehydrated: null,
      treeContext: null,
      retryLane: An
    };
    function mS(e) {
      return {
        baseLanes: e,
        cachePool: ix(),
        transitions: null
      };
    }
    function mx(e, t) {
      var a = null;
      return {
        baseLanes: et(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function yx(e, t, a, i) {
      if (t !== null) {
        var u = t.memoizedState;
        if (u === null)
          return !1;
      }
      return yg(e, Ep);
    }
    function gx(e, t) {
      return _s(e.childLanes, t);
    }
    function mR(e, t, a) {
      var i = t.pendingProps;
      bb(t) && (t.flags |= st);
      var u = el.current, s = !1, f = (t.flags & st) !== De;
      if (f || yx(u, e) ? (s = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (u = Aw(u, TC)), u = zf(u), zo(t, u), e === null) {
        Xy(t);
        var p = t.memoizedState;
        if (p !== null) {
          var v = p.dehydrated;
          if (v !== null)
            return Tx(t, v);
        }
        var y = i.children, g = i.fallback;
        if (s) {
          var _ = Sx(t, y, g, a), w = t.child;
          return w.memoizedState = mS(a), t.memoizedState = hS, _;
        } else
          return yS(t, y);
      } else {
        var N = e.memoizedState;
        if (N !== null) {
          var U = N.dehydrated;
          if (U !== null)
            return wx(e, t, f, i, U, N, a);
        }
        if (s) {
          var j = i.fallback, ue = i.children, Ne = Cx(e, t, ue, j, a), be = t.child, bt = e.child.memoizedState;
          return be.memoizedState = bt === null ? mS(a) : mx(bt, a), be.childLanes = gx(e, a), t.memoizedState = hS, Ne;
        } else {
          var yt = i.children, k = Ex(e, t, yt, a);
          return t.memoizedState = null, k;
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
    function Sx(e, t, a, i) {
      var u = e.mode, s = e.child, f = {
        mode: "hidden",
        children: t
      }, p, v;
      return (u & ct) === ke && s !== null ? (p = s, p.childLanes = P, p.pendingProps = f, e.mode & Ct && (p.actualDuration = 0, p.actualStartTime = -1, p.selfBaseDuration = 0, p.treeBaseDuration = 0), v = Bo(a, u, i, null)) : (p = gS(f, u), v = Bo(a, u, i, null)), p.return = e, v.return = e, p.sibling = v, e.child = p, v;
    }
    function gS(e, t, a) {
      return y0(e, t, P, null);
    }
    function yR(e, t) {
      return rc(e, t);
    }
    function Ex(e, t, a, i) {
      var u = e.child, s = u.sibling, f = yR(u, {
        mode: "visible",
        children: a
      });
      if ((t.mode & ct) === ke && (f.lanes = i), f.return = t, f.sibling = null, s !== null) {
        var p = t.deletions;
        p === null ? (t.deletions = [s], t.flags |= Xr) : p.push(s);
      }
      return t.child = f, f;
    }
    function Cx(e, t, a, i, u) {
      var s = t.mode, f = e.child, p = f.sibling, v = {
        mode: "hidden",
        children: a
      }, y;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (s & ct) === ke && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== f
      ) {
        var g = t.child;
        y = g, y.childLanes = P, y.pendingProps = v, t.mode & Ct && (y.actualDuration = 0, y.actualStartTime = -1, y.selfBaseDuration = f.selfBaseDuration, y.treeBaseDuration = f.treeBaseDuration), t.deletions = null;
      } else
        y = yR(f, v), y.subtreeFlags = f.subtreeFlags & Un;
      var _;
      return p !== null ? _ = rc(p, i) : (_ = Bo(i, s, u, null), _.flags |= Mn), _.return = t, y.return = t, y.sibling = _, t.child = y, _;
    }
    function Rm(e, t, a, i) {
      i !== null && Zy(i), Of(t, e.child, null, a);
      var u = t.pendingProps, s = u.children, f = yS(t, s);
      return f.flags |= Mn, t.memoizedState = null, f;
    }
    function Rx(e, t, a, i, u) {
      var s = t.mode, f = {
        mode: "visible",
        children: a
      }, p = gS(f, s), v = Bo(i, s, u, null);
      return v.flags |= Mn, p.return = t, v.return = t, p.sibling = v, t.child = p, (t.mode & ct) !== ke && Of(t, e.child, null, u), v;
    }
    function Tx(e, t, a) {
      return (e.mode & ct) === ke ? (S("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = Ae) : Ay(t) ? e.lanes = Zn : e.lanes = ya, null;
    }
    function wx(e, t, a, i, u, s, f) {
      if (a)
        if (t.flags & yn) {
          t.flags &= -257;
          var k = aS(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return Rm(e, t, f, k);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= st, null;
          var H = i.children, O = i.fallback, q = Rx(e, t, H, O, f), me = t.child;
          return me.memoizedState = mS(f), t.memoizedState = hS, q;
        }
      else {
        if (fw(), (t.mode & ct) === ke)
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
            var g = D1(u);
            p = g.digest, v = g.message, y = g.stack;
          }
          var _;
          v ? _ = new Error(v) : _ = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var w = aS(_, p, y);
          return Rm(e, t, f, w);
        }
        var N = na(f, e.childLanes);
        if (rl || N) {
          var U = Nm();
          if (U !== null) {
            var j = Zc(U, f);
            if (j !== An && j !== s.retryLane) {
              s.retryLane = j;
              var ue = Bt;
              Ba(e, j), gr(U, e, j, ue);
            }
          }
          HS();
          var Ne = aS(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return Rm(e, t, f, Ne);
        } else if (PE(u)) {
          t.flags |= st, t.child = e.child;
          var be = K_.bind(null, e);
          return k1(u, be), null;
        } else {
          vw(t, u, s.treeContext);
          var bt = i.children, yt = yS(t, bt);
          return yt.flags |= zn, yt;
        }
      }
    }
    function gR(e, t, a) {
      e.lanes = et(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = et(i.lanes, t)), og(e.return, t, a);
    }
    function xx(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === xe) {
          var u = i.memoizedState;
          u !== null && gR(i, a, e);
        } else if (i.tag === $t)
          gR(i, a, e);
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
    function _x(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && em(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function bx(e) {
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
    function Dx(e, t) {
      e !== void 0 && !Cm[e] && (e !== "collapsed" && e !== "hidden" ? (Cm[e] = !0, S('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (Cm[e] = !0, S('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function SR(e, t) {
      {
        var a = Je(e), i = !a && typeof dn(e) == "function";
        if (a || i) {
          var u = a ? "array" : "iterable";
          return S("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", u, t, u), !1;
        }
      }
      return !0;
    }
    function kx(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (Je(e)) {
          for (var a = 0; a < e.length; a++)
            if (!SR(e[a], a))
              return;
        } else {
          var i = dn(e);
          if (typeof i == "function") {
            var u = i.call(e);
            if (u)
              for (var s = u.next(), f = 0; !s.done; s = u.next()) {
                if (!SR(s.value, f))
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
    function ER(e, t, a) {
      var i = t.pendingProps, u = i.revealOrder, s = i.tail, f = i.children;
      bx(u), Dx(s, u), kx(f, u), Ra(e, t, f, a);
      var p = el.current, v = yg(p, Ep);
      if (v)
        p = gg(p, Ep), t.flags |= st;
      else {
        var y = e !== null && (e.flags & st) !== De;
        y && xx(t, t.child, a), p = zf(p);
      }
      if (zo(t, p), (t.mode & ct) === ke)
        t.memoizedState = null;
      else
        switch (u) {
          case "forwards": {
            var g = _x(t.child), _;
            g === null ? (_ = t.child, t.child = null) : (_ = g.sibling, g.sibling = null), SS(
              t,
              !1,
              // isBackwards
              _,
              g,
              s
            );
            break;
          }
          case "backwards": {
            var w = null, N = t.child;
            for (t.child = null; N !== null; ) {
              var U = N.alternate;
              if (U !== null && em(U) === null) {
                t.child = N;
                break;
              }
              var j = N.sibling;
              N.sibling = w, w = N, N = j;
            }
            SS(
              t,
              !0,
              // isBackwards
              w,
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
    function Ox(e, t, a) {
      vg(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = Of(t, null, i, a) : Ra(e, t, i, a), t.child;
    }
    var CR = !1;
    function Lx(e, t, a) {
      var i = t.type, u = i._context, s = t.pendingProps, f = t.memoizedProps, p = s.value;
      {
        "value" in s || CR || (CR = !0, S("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var v = t.type.propTypes;
        v && Xi(v, s, "prop", "Context.Provider");
      }
      if (pC(t, u, p), f !== null) {
        var y = f.value;
        if (Re(y, p)) {
          if (f.children === s.children && !Lh())
            return Mu(e, t, a);
        } else
          bw(t, u, a);
      }
      var g = s.children;
      return Ra(e, t, g, a), t.child;
    }
    var RR = !1;
    function Mx(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (RR || (RR = !0, S("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var u = t.pendingProps, s = u.children;
      typeof s != "function" && S("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), Mf(t, a);
      var f = nr(i);
      Aa(t);
      var p;
      return kp.current = t, ka(!0), p = s(f), ka(!1), Rl(), t.flags |= Ii, Ra(e, t, p, a), t.child;
    }
    function Mp() {
      rl = !0;
    }
    function Tm(e, t) {
      (t.mode & ct) === ke && e !== null && (e.alternate = null, t.alternate = null, t.flags |= Mn);
    }
    function Mu(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), XC(), Yp(t.lanes), na(a, t.childLanes) ? (xw(e, t), t.child) : null;
    }
    function Nx(e, t, a) {
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
        return s === null ? (i.deletions = [e], i.flags |= Xr) : s.push(e), a.flags |= Mn, a;
      }
    }
    function ES(e, t) {
      var a = e.lanes;
      return !!na(a, t);
    }
    function zx(e, t, a) {
      switch (t.tag) {
        case B:
          vR(t), t.stateNode, kf();
          break;
        case G:
          CC(t);
          break;
        case ne: {
          var i = t.type;
          Al(i) && Nh(t);
          break;
        }
        case ee:
          vg(t, t.stateNode.containerInfo);
          break;
        case ut: {
          var u = t.memoizedProps.value, s = t.type._context;
          pC(t, s, u);
          break;
        }
        case kt:
          {
            var f = na(a, t.childLanes);
            f && (t.flags |= vt);
            {
              var p = t.stateNode;
              p.effectDuration = 0, p.passiveEffectDuration = 0;
            }
          }
          break;
        case xe: {
          var v = t.memoizedState;
          if (v !== null) {
            if (v.dehydrated !== null)
              return zo(t, zf(el.current)), t.flags |= st, null;
            var y = t.child, g = y.childLanes;
            if (na(a, g))
              return mR(e, t, a);
            zo(t, zf(el.current));
            var _ = Mu(e, t, a);
            return _ !== null ? _.sibling : null;
          } else
            zo(t, zf(el.current));
          break;
        }
        case $t: {
          var w = (e.flags & st) !== De, N = na(a, t.childLanes);
          if (w) {
            if (N)
              return ER(e, t, a);
            t.flags |= st;
          }
          var U = t.memoizedState;
          if (U !== null && (U.rendering = null, U.tail = null, U.lastEffect = null), zo(t, el.current), N)
            break;
          return null;
        }
        case ze:
        case At:
          return t.lanes = P, fR(e, t, a);
      }
      return Mu(e, t, a);
    }
    function TR(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return Nx(e, t, qS(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, u = t.pendingProps;
        if (i !== u || Lh() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          rl = !0;
        else {
          var s = ES(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & st) === De)
            return rl = !1, zx(e, t, a);
          (e.flags & ti) !== De ? rl = !0 : rl = !1;
        }
      } else if (rl = !1, Ar() && iw(t)) {
        var f = t.index, p = lw();
        XE(t, p, f);
      }
      switch (t.lanes = P, t.tag) {
        case se:
          return hx(e, t, t.type, a);
        case Sn: {
          var v = t.elementType;
          return px(e, t, v, a);
        }
        case Se: {
          var y = t.type, g = t.pendingProps, _ = t.elementType === y ? g : nl(y, g);
          return dS(e, t, y, _, a);
        }
        case ne: {
          var w = t.type, N = t.pendingProps, U = t.elementType === w ? N : nl(w, N);
          return pR(e, t, w, U, a);
        }
        case B:
          return cx(e, t, a);
        case G:
          return fx(e, t, a);
        case de:
          return dx(e, t);
        case xe:
          return mR(e, t, a);
        case ee:
          return Ox(e, t, a);
        case Ue: {
          var j = t.type, ue = t.pendingProps, Ne = t.elementType === j ? ue : nl(j, ue);
          return oR(e, t, j, Ne, a);
        }
        case Ge:
          return ux(e, t, a);
        case Hn:
          return ox(e, t, a);
        case kt:
          return sx(e, t, a);
        case ut:
          return Lx(e, t, a);
        case rn:
          return Mx(e, t, a);
        case dt: {
          var be = t.type, bt = t.pendingProps, yt = nl(be, bt);
          if (t.type !== t.elementType) {
            var k = be.propTypes;
            k && Xi(
              k,
              yt,
              // Resolved for outer only
              "prop",
              xt(be)
            );
          }
          return yt = nl(be.type, yt), sR(e, t, be, yt, a);
        }
        case Pe:
          return cR(e, t, t.type, t.pendingProps, a);
        case Mt: {
          var H = t.type, O = t.pendingProps, q = t.elementType === H ? O : nl(H, O);
          return vx(e, t, H, q, a);
        }
        case $t:
          return ER(e, t, a);
        case St:
          break;
        case ze:
          return fR(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Pf(e) {
      e.flags |= vt;
    }
    function wR(e) {
      e.flags |= Nn, e.flags |= ds;
    }
    var xR, CS, _R, bR;
    xR = function(e, t, a, i) {
      for (var u = t.child; u !== null; ) {
        if (u.tag === G || u.tag === de)
          n1(e, u.stateNode);
        else if (u.tag !== ee) {
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
    }, _R = function(e, t, a, i, u) {
      var s = e.memoizedProps;
      if (s !== i) {
        var f = t.stateNode, p = hg(), v = a1(f, a, s, i, u, p);
        t.updateQueue = v, v && Pf(t);
      }
    }, bR = function(e, t, a, i) {
      a !== i && Pf(t);
    };
    function Np(e, t) {
      if (!Ar())
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
    function jr(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = P, i = De;
      if (t) {
        if ((e.mode & Ct) !== ke) {
          for (var v = e.selfBaseDuration, y = e.child; y !== null; )
            a = et(a, et(y.lanes, y.childLanes)), i |= y.subtreeFlags & Un, i |= y.flags & Un, v += y.treeBaseDuration, y = y.sibling;
          e.treeBaseDuration = v;
        } else
          for (var g = e.child; g !== null; )
            a = et(a, et(g.lanes, g.childLanes)), i |= g.subtreeFlags & Un, i |= g.flags & Un, g.return = e, g = g.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & Ct) !== ke) {
          for (var u = e.actualDuration, s = e.selfBaseDuration, f = e.child; f !== null; )
            a = et(a, et(f.lanes, f.childLanes)), i |= f.subtreeFlags, i |= f.flags, u += f.actualDuration, s += f.treeBaseDuration, f = f.sibling;
          e.actualDuration = u, e.treeBaseDuration = s;
        } else
          for (var p = e.child; p !== null; )
            a = et(a, et(p.lanes, p.childLanes)), i |= p.subtreeFlags, i |= p.flags, p.return = e, p = p.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function Ux(e, t, a) {
      if (Sw() && (t.mode & ct) !== ke && (t.flags & st) === De)
        return aC(t), kf(), t.flags |= yn | lu | Ua, !1;
      var i = jh(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (yw(t), jr(t), (t.mode & Ct) !== ke) {
            var u = a !== null;
            if (u) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (kf(), (t.flags & st) === De && (t.memoizedState = null), t.flags |= vt, jr(t), (t.mode & Ct) !== ke) {
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
    function DR(e, t, a) {
      var i = t.pendingProps;
      switch (Wy(t), t.tag) {
        case se:
        case Sn:
        case Pe:
        case Se:
        case Ue:
        case Ge:
        case Hn:
        case kt:
        case rn:
        case dt:
          return jr(t), null;
        case ne: {
          var u = t.type;
          return Al(u) && Mh(t), jr(t), null;
        }
        case B: {
          var s = t.stateNode;
          if (Nf(t), $y(t), Eg(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var f = jh(t);
            if (f)
              Pf(t);
            else if (e !== null) {
              var p = e.memoizedState;
              // Check if this is a client root
              (!p.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & yn) !== De) && (t.flags |= za, iC());
            }
          }
          return CS(e, t), jr(t), null;
        }
        case G: {
          mg(t);
          var v = EC(), y = t.type;
          if (e !== null && t.stateNode != null)
            _R(e, t, y, i, v), e.ref !== t.ref && wR(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return jr(t), null;
            }
            var g = hg(), _ = jh(t);
            if (_)
              hw(t, v, g) && Pf(t);
            else {
              var w = t1(y, i, v, g, t);
              xR(w, t, !1, !1), t.stateNode = w, r1(w, y, i, v) && Pf(t);
            }
            t.ref !== null && wR(t);
          }
          return jr(t), null;
        }
        case de: {
          var N = i;
          if (e && t.stateNode != null) {
            var U = e.memoizedProps;
            bR(e, t, U, N);
          } else {
            if (typeof N != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var j = EC(), ue = hg(), Ne = jh(t);
            Ne ? mw(t) && Pf(t) : t.stateNode = i1(N, j, ue, t);
          }
          return jr(t), null;
        }
        case xe: {
          Uf(t);
          var be = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var bt = Ux(e, t, be);
            if (!bt)
              return t.flags & Ua ? t : null;
          }
          if ((t.flags & st) !== De)
            return t.lanes = a, (t.mode & Ct) !== ke && Ig(t), t;
          var yt = be !== null, k = e !== null && e.memoizedState !== null;
          if (yt !== k && yt) {
            var H = t.child;
            if (H.flags |= gi, (t.mode & ct) !== ke) {
              var O = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !0);
              O || yg(el.current, TC) ? A_() : HS();
            }
          }
          var q = t.updateQueue;
          if (q !== null && (t.flags |= vt), jr(t), (t.mode & Ct) !== ke && yt) {
            var me = t.child;
            me !== null && (t.treeBaseDuration -= me.treeBaseDuration);
          }
          return null;
        }
        case ee:
          return Nf(t), CS(e, t), e === null && Z1(t.stateNode.containerInfo), jr(t), null;
        case ut:
          var fe = t.type._context;
          return ug(fe, t), jr(t), null;
        case Mt: {
          var je = t.type;
          return Al(je) && Mh(t), jr(t), null;
        }
        case $t: {
          Uf(t);
          var We = t.memoizedState;
          if (We === null)
            return jr(t), null;
          var Xt = (t.flags & st) !== De, Ot = We.rendering;
          if (Ot === null)
            if (Xt)
              Np(We, !1);
            else {
              var In = j_() && (e === null || (e.flags & st) === De);
              if (!In)
                for (var Lt = t.child; Lt !== null; ) {
                  var jn = em(Lt);
                  if (jn !== null) {
                    Xt = !0, t.flags |= st, Np(We, !1);
                    var oa = jn.updateQueue;
                    return oa !== null && (t.updateQueue = oa, t.flags |= vt), t.subtreeFlags = De, _w(t, a), zo(t, gg(el.current, Ep)), t.child;
                  }
                  Lt = Lt.sibling;
                }
              We.tail !== null && Rn() > KR() && (t.flags |= st, Xt = !0, Np(We, !1), t.lanes = jv);
            }
          else {
            if (!Xt) {
              var $r = em(Ot);
              if ($r !== null) {
                t.flags |= st, Xt = !0;
                var oi = $r.updateQueue;
                if (oi !== null && (t.updateQueue = oi, t.flags |= vt), Np(We, !0), We.tail === null && We.tailMode === "hidden" && !Ot.alternate && !Ar())
                  return jr(t), null;
              } else // The time it took to render last row is greater than the remaining
              // time we have to render. So rendering one more row would likely
              // exceed it.
              Rn() * 2 - We.renderingStartTime > KR() && a !== ya && (t.flags |= st, Xt = !0, Np(We, !1), t.lanes = jv);
            }
            if (We.isBackwards)
              Ot.sibling = t.child, t.child = Ot;
            else {
              var xa = We.last;
              xa !== null ? xa.sibling = Ot : t.child = Ot, We.last = Ot;
            }
          }
          if (We.tail !== null) {
            var _a = We.tail;
            We.rendering = _a, We.tail = _a.sibling, We.renderingStartTime = Rn(), _a.sibling = null;
            var sa = el.current;
            return Xt ? sa = gg(sa, Ep) : sa = zf(sa), zo(t, sa), _a;
          }
          return jr(t), null;
        }
        case St:
          break;
        case ze:
        case At: {
          jS(t);
          var Fu = t.memoizedState, Gf = Fu !== null;
          if (e !== null) {
            var Kp = e.memoizedState, Yl = Kp !== null;
            Yl !== Gf && (t.flags |= gi);
          }
          return !Gf || (t.mode & ct) === ke ? jr(t) : na($l, ya) && (jr(t), t.subtreeFlags & (Mn | vt) && (t.flags |= gi)), null;
        }
        case mt:
          return null;
        case at:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Ax(e, t, a) {
      switch (Wy(t), t.tag) {
        case ne: {
          var i = t.type;
          Al(i) && Mh(t);
          var u = t.flags;
          return u & Ua ? (t.flags = u & -65537 | st, (t.mode & Ct) !== ke && Ig(t), t) : null;
        }
        case B: {
          t.stateNode, Nf(t), $y(t), Eg();
          var s = t.flags;
          return (s & Ua) !== De && (s & st) === De ? (t.flags = s & -65537 | st, t) : null;
        }
        case G:
          return mg(t), null;
        case xe: {
          Uf(t);
          var f = t.memoizedState;
          if (f !== null && f.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            kf();
          }
          var p = t.flags;
          return p & Ua ? (t.flags = p & -65537 | st, (t.mode & Ct) !== ke && Ig(t), t) : null;
        }
        case $t:
          return Uf(t), null;
        case ee:
          return Nf(t), null;
        case ut:
          var v = t.type._context;
          return ug(v, t), null;
        case ze:
        case At:
          return jS(t), null;
        case mt:
          return null;
        default:
          return null;
      }
    }
    function kR(e, t, a) {
      switch (Wy(t), t.tag) {
        case ne: {
          var i = t.type.childContextTypes;
          i != null && Mh(t);
          break;
        }
        case B: {
          t.stateNode, Nf(t), $y(t), Eg();
          break;
        }
        case G: {
          mg(t);
          break;
        }
        case ee:
          Nf(t);
          break;
        case xe:
          Uf(t);
          break;
        case $t:
          Uf(t);
          break;
        case ut:
          var u = t.type._context;
          ug(u, t);
          break;
        case ze:
        case At:
          jS(t);
          break;
      }
    }
    var OR = null;
    OR = /* @__PURE__ */ new Set();
    var wm = !1, Hr = !1, Fx = typeof WeakSet == "function" ? WeakSet : Set, Te = null, Vf = null, Bf = null;
    function jx(e) {
      Na(null, function() {
        throw e;
      }), cd();
    }
    var Hx = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & Ct)
        try {
          Vl(), t.componentWillUnmount();
        } finally {
          Pl(e);
        }
      else
        t.componentWillUnmount();
    };
    function LR(e, t) {
      try {
        Fo(dr, e);
      } catch (a) {
        cn(e, t, a);
      }
    }
    function RS(e, t, a) {
      try {
        Hx(e, a);
      } catch (i) {
        cn(e, t, i);
      }
    }
    function Px(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        cn(e, t, i);
      }
    }
    function MR(e, t) {
      try {
        zR(e);
      } catch (a) {
        cn(e, t, a);
      }
    }
    function $f(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if ($e && it && e.mode & Ct)
              try {
                Vl(), i = a(null);
              } finally {
                Pl(e);
              }
            else
              i = a(null);
          } catch (u) {
            cn(e, t, u);
          }
          typeof i == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Be(e));
        } else
          a.current = null;
    }
    function xm(e, t, a) {
      try {
        a();
      } catch (i) {
        cn(e, t, i);
      }
    }
    var NR = !1;
    function Vx(e, t) {
      JT(e.containerInfo), Te = t, Bx();
      var a = NR;
      return NR = !1, a;
    }
    function Bx() {
      for (; Te !== null; ) {
        var e = Te, t = e.child;
        (e.subtreeFlags & Sl) !== De && t !== null ? (t.return = e, Te = t) : $x();
      }
    }
    function $x() {
      for (; Te !== null; ) {
        var e = Te;
        It(e);
        try {
          Yx(e);
        } catch (a) {
          cn(e, e.return, a);
        }
        mn();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Te = t;
          return;
        }
        Te = e.return;
      }
    }
    function Yx(e) {
      var t = e.alternate, a = e.flags;
      if ((a & za) !== De) {
        switch (It(e), e.tag) {
          case Se:
          case Ue:
          case Pe:
            break;
          case ne: {
            if (t !== null) {
              var i = t.memoizedProps, u = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !Zs && (s.props !== e.memoizedProps && S("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Be(e) || "instance"), s.state !== e.memoizedState && S("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Be(e) || "instance"));
              var f = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : nl(e.type, i), u);
              {
                var p = OR;
                f === void 0 && !p.has(e.type) && (p.add(e.type), S("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", Be(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = f;
            }
            break;
          }
          case B: {
            {
              var v = e.stateNode;
              w1(v.containerInfo);
            }
            break;
          }
          case G:
          case de:
          case ee:
          case Mt:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        mn();
      }
    }
    function al(e, t, a) {
      var i = t.updateQueue, u = i !== null ? i.lastEffect : null;
      if (u !== null) {
        var s = u.next, f = s;
        do {
          if ((f.tag & e) === e) {
            var p = f.destroy;
            f.destroy = void 0, p !== void 0 && ((e & Fr) !== $a ? Tl(t) : (e & dr) !== $a && Rd(t), (e & Fl) !== $a && Qp(!0), xm(t, a, p), (e & Fl) !== $a && Qp(!1), (e & Fr) !== $a ? xc() : (e & dr) !== $a && uo());
          }
          f = f.next;
        } while (f !== s);
      }
    }
    function Fo(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var u = i.next, s = u;
        do {
          if ((s.tag & e) === e) {
            (e & Fr) !== $a ? Av(t) : (e & dr) !== $a && Fv(t);
            var f = s.create;
            (e & Fl) !== $a && Qp(!0), s.destroy = f(), (e & Fl) !== $a && Qp(!1), (e & Fr) !== $a ? Wi() : (e & dr) !== $a && _c();
            {
              var p = s.destroy;
              if (p !== void 0 && typeof p != "function") {
                var v = void 0;
                (s.tag & dr) !== De ? v = "useLayoutEffect" : (s.tag & Fl) !== De ? v = "useInsertionEffect" : v = "useEffect";
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
    function Ix(e, t) {
      if ((t.flags & vt) !== De)
        switch (t.tag) {
          case kt: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, u = i.id, s = i.onPostCommit, f = KC(), p = t.alternate === null ? "mount" : "update";
            GC() && (p = "nested-update"), typeof s == "function" && s(u, p, a, f);
            var v = t.return;
            e: for (; v !== null; ) {
              switch (v.tag) {
                case B:
                  var y = v.stateNode;
                  y.passiveEffectDuration += a;
                  break e;
                case kt:
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
    function Qx(e, t, a, i) {
      if ((a.flags & El) !== De)
        switch (a.tag) {
          case Se:
          case Ue:
          case Pe: {
            if (!Hr)
              if (a.mode & Ct)
                try {
                  Vl(), Fo(dr | fr, a);
                } finally {
                  Pl(a);
                }
              else
                Fo(dr | fr, a);
            break;
          }
          case ne: {
            var u = a.stateNode;
            if (a.flags & vt && !Hr)
              if (t === null)
                if (a.type === a.elementType && !Zs && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Be(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Be(a) || "instance")), a.mode & Ct)
                  try {
                    Vl(), u.componentDidMount();
                  } finally {
                    Pl(a);
                  }
                else
                  u.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : nl(a.type, t.memoizedProps), f = t.memoizedState;
                if (a.type === a.elementType && !Zs && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Be(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Be(a) || "instance")), a.mode & Ct)
                  try {
                    Vl(), u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    Pl(a);
                  }
                else
                  u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
              }
            var p = a.updateQueue;
            p !== null && (a.type === a.elementType && !Zs && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Be(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Be(a) || "instance")), SC(a, p, u));
            break;
          }
          case B: {
            var v = a.updateQueue;
            if (v !== null) {
              var y = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case G:
                    y = a.child.stateNode;
                    break;
                  case ne:
                    y = a.child.stateNode;
                    break;
                }
              SC(a, v, y);
            }
            break;
          }
          case G: {
            var g = a.stateNode;
            if (t === null && a.flags & vt) {
              var _ = a.type, w = a.memoizedProps;
              c1(g, _, w);
            }
            break;
          }
          case de:
            break;
          case ee:
            break;
          case kt: {
            {
              var N = a.memoizedProps, U = N.onCommit, j = N.onRender, ue = a.stateNode.effectDuration, Ne = KC(), be = t === null ? "mount" : "update";
              GC() && (be = "nested-update"), typeof j == "function" && j(a.memoizedProps.id, be, a.actualDuration, a.treeBaseDuration, a.actualStartTime, Ne);
              {
                typeof U == "function" && U(a.memoizedProps.id, be, ue, Ne), $_(a);
                var bt = a.return;
                e: for (; bt !== null; ) {
                  switch (bt.tag) {
                    case B:
                      var yt = bt.stateNode;
                      yt.effectDuration += ue;
                      break e;
                    case kt:
                      var k = bt.stateNode;
                      k.effectDuration += ue;
                      break e;
                  }
                  bt = bt.return;
                }
              }
            }
            break;
          }
          case xe: {
            e_(e, a);
            break;
          }
          case $t:
          case Mt:
          case St:
          case ze:
          case At:
          case at:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Hr || a.flags & Nn && zR(a);
    }
    function Wx(e) {
      switch (e.tag) {
        case Se:
        case Ue:
        case Pe: {
          if (e.mode & Ct)
            try {
              Vl(), LR(e, e.return);
            } finally {
              Pl(e);
            }
          else
            LR(e, e.return);
          break;
        }
        case ne: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && Px(e, e.return, t), MR(e, e.return);
          break;
        }
        case G: {
          MR(e, e.return);
          break;
        }
      }
    }
    function Gx(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === G) {
          if (a === null) {
            a = i;
            try {
              var u = i.stateNode;
              t ? E1(u) : R1(i.stateNode, i.memoizedProps);
            } catch (f) {
              cn(e, e.return, f);
            }
          }
        } else if (i.tag === de) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? C1(s) : T1(s, i.memoizedProps);
            } catch (f) {
              cn(e, e.return, f);
            }
        } else if (!((i.tag === ze || i.tag === At) && i.memoizedState !== null && i !== e)) {
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
    function zR(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        switch (e.tag) {
          case G:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var u;
          if (e.mode & Ct)
            try {
              Vl(), u = t(i);
            } finally {
              Pl(e);
            }
          else
            u = t(i);
          typeof u == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Be(e));
        } else
          t.hasOwnProperty("current") || S("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", Be(e)), t.current = i;
      }
    }
    function Kx(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function UR(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, UR(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === G) {
          var a = e.stateNode;
          a !== null && tw(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function qx(e) {
      for (var t = e.return; t !== null; ) {
        if (AR(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function AR(e) {
      return e.tag === G || e.tag === B || e.tag === ee;
    }
    function FR(e) {
      var t = e;
      e: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || AR(t.return))
            return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== G && t.tag !== de && t.tag !== fn; ) {
          if (t.flags & Mn || t.child === null || t.tag === ee)
            continue e;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & Mn))
          return t.stateNode;
      }
    }
    function Xx(e) {
      var t = qx(e);
      switch (t.tag) {
        case G: {
          var a = t.stateNode;
          t.flags & Gt && (HE(a), t.flags &= -33);
          var i = FR(e);
          wS(e, i, a);
          break;
        }
        case B:
        case ee: {
          var u = t.stateNode.containerInfo, s = FR(e);
          TS(e, s, u);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function TS(e, t, a) {
      var i = e.tag, u = i === G || i === de;
      if (u) {
        var s = e.stateNode;
        t ? m1(a, s, t) : v1(a, s);
      } else if (i !== ee) {
        var f = e.child;
        if (f !== null) {
          TS(f, t, a);
          for (var p = f.sibling; p !== null; )
            TS(p, t, a), p = p.sibling;
        }
      }
    }
    function wS(e, t, a) {
      var i = e.tag, u = i === G || i === de;
      if (u) {
        var s = e.stateNode;
        t ? h1(a, s, t) : p1(a, s);
      } else if (i !== ee) {
        var f = e.child;
        if (f !== null) {
          wS(f, t, a);
          for (var p = f.sibling; p !== null; )
            wS(p, t, a), p = p.sibling;
        }
      }
    }
    var Pr = null, il = !1;
    function Zx(e, t, a) {
      {
        var i = t;
        e: for (; i !== null; ) {
          switch (i.tag) {
            case G: {
              Pr = i.stateNode, il = !1;
              break e;
            }
            case B: {
              Pr = i.stateNode.containerInfo, il = !0;
              break e;
            }
            case ee: {
              Pr = i.stateNode.containerInfo, il = !0;
              break e;
            }
          }
          i = i.return;
        }
        if (Pr === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        jR(e, t, a), Pr = null, il = !1;
      }
      Kx(a);
    }
    function jo(e, t, a) {
      for (var i = a.child; i !== null; )
        jR(e, t, i), i = i.sibling;
    }
    function jR(e, t, a) {
      switch (lo(a), a.tag) {
        case G:
          Hr || $f(a, t);
        case de: {
          {
            var i = Pr, u = il;
            Pr = null, jo(e, t, a), Pr = i, il = u, Pr !== null && (il ? g1(Pr, a.stateNode) : y1(Pr, a.stateNode));
          }
          return;
        }
        case fn: {
          Pr !== null && (il ? S1(Pr, a.stateNode) : Uy(Pr, a.stateNode));
          return;
        }
        case ee: {
          {
            var s = Pr, f = il;
            Pr = a.stateNode.containerInfo, il = !0, jo(e, t, a), Pr = s, il = f;
          }
          return;
        }
        case Se:
        case Ue:
        case dt:
        case Pe: {
          if (!Hr) {
            var p = a.updateQueue;
            if (p !== null) {
              var v = p.lastEffect;
              if (v !== null) {
                var y = v.next, g = y;
                do {
                  var _ = g, w = _.destroy, N = _.tag;
                  w !== void 0 && ((N & Fl) !== $a ? xm(a, t, w) : (N & dr) !== $a && (Rd(a), a.mode & Ct ? (Vl(), xm(a, t, w), Pl(a)) : xm(a, t, w), uo())), g = g.next;
                } while (g !== y);
              }
            }
          }
          jo(e, t, a);
          return;
        }
        case ne: {
          if (!Hr) {
            $f(a, t);
            var U = a.stateNode;
            typeof U.componentWillUnmount == "function" && RS(a, t, U);
          }
          jo(e, t, a);
          return;
        }
        case St: {
          jo(e, t, a);
          return;
        }
        case ze: {
          if (
            // TODO: Remove this dead flag
            a.mode & ct
          ) {
            var j = Hr;
            Hr = j || a.memoizedState !== null, jo(e, t, a), Hr = j;
          } else
            jo(e, t, a);
          break;
        }
        default: {
          jo(e, t, a);
          return;
        }
      }
    }
    function Jx(e) {
      e.memoizedState;
    }
    function e_(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var u = i.memoizedState;
          if (u !== null) {
            var s = u.dehydrated;
            s !== null && j1(s);
          }
        }
      }
    }
    function HR(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new Fx()), t.forEach(function(i) {
          var u = q_.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), xr)
              if (Vf !== null && Bf !== null)
                Ip(Bf, Vf);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(u, u);
          }
        });
      }
    }
    function t_(e, t, a) {
      Vf = a, Bf = e, It(t), PR(t, e), It(t), Vf = null, Bf = null;
    }
    function ll(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u];
          try {
            Zx(e, t, s);
          } catch (v) {
            cn(s, t, v);
          }
        }
      var f = Xa();
      if (t.subtreeFlags & ao)
        for (var p = t.child; p !== null; )
          It(p), PR(p, e), p = p.sibling;
      It(f);
    }
    function PR(e, t, a) {
      var i = e.alternate, u = e.flags;
      switch (e.tag) {
        case Se:
        case Ue:
        case dt:
        case Pe: {
          if (ll(t, e), Bl(e), u & vt) {
            try {
              al(Fl | fr, e, e.return), Fo(Fl | fr, e);
            } catch (je) {
              cn(e, e.return, je);
            }
            if (e.mode & Ct) {
              try {
                Vl(), al(dr | fr, e, e.return);
              } catch (je) {
                cn(e, e.return, je);
              }
              Pl(e);
            } else
              try {
                al(dr | fr, e, e.return);
              } catch (je) {
                cn(e, e.return, je);
              }
          }
          return;
        }
        case ne: {
          ll(t, e), Bl(e), u & Nn && i !== null && $f(i, i.return);
          return;
        }
        case G: {
          ll(t, e), Bl(e), u & Nn && i !== null && $f(i, i.return);
          {
            if (e.flags & Gt) {
              var s = e.stateNode;
              try {
                HE(s);
              } catch (je) {
                cn(e, e.return, je);
              }
            }
            if (u & vt) {
              var f = e.stateNode;
              if (f != null) {
                var p = e.memoizedProps, v = i !== null ? i.memoizedProps : p, y = e.type, g = e.updateQueue;
                if (e.updateQueue = null, g !== null)
                  try {
                    f1(f, g, y, v, p, e);
                  } catch (je) {
                    cn(e, e.return, je);
                  }
              }
            }
          }
          return;
        }
        case de: {
          if (ll(t, e), Bl(e), u & vt) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var _ = e.stateNode, w = e.memoizedProps, N = i !== null ? i.memoizedProps : w;
            try {
              d1(_, N, w);
            } catch (je) {
              cn(e, e.return, je);
            }
          }
          return;
        }
        case B: {
          if (ll(t, e), Bl(e), u & vt && i !== null) {
            var U = i.memoizedState;
            if (U.isDehydrated)
              try {
                F1(t.containerInfo);
              } catch (je) {
                cn(e, e.return, je);
              }
          }
          return;
        }
        case ee: {
          ll(t, e), Bl(e);
          return;
        }
        case xe: {
          ll(t, e), Bl(e);
          var j = e.child;
          if (j.flags & gi) {
            var ue = j.stateNode, Ne = j.memoizedState, be = Ne !== null;
            if (ue.isHidden = be, be) {
              var bt = j.alternate !== null && j.alternate.memoizedState !== null;
              bt || U_();
            }
          }
          if (u & vt) {
            try {
              Jx(e);
            } catch (je) {
              cn(e, e.return, je);
            }
            HR(e);
          }
          return;
        }
        case ze: {
          var yt = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & ct
          ) {
            var k = Hr;
            Hr = k || yt, ll(t, e), Hr = k;
          } else
            ll(t, e);
          if (Bl(e), u & gi) {
            var H = e.stateNode, O = e.memoizedState, q = O !== null, me = e;
            if (H.isHidden = q, q && !yt && (me.mode & ct) !== ke) {
              Te = me;
              for (var fe = me.child; fe !== null; )
                Te = fe, r_(fe), fe = fe.sibling;
            }
            Gx(me, q);
          }
          return;
        }
        case $t: {
          ll(t, e), Bl(e), u & vt && HR(e);
          return;
        }
        case St:
          return;
        default: {
          ll(t, e), Bl(e);
          return;
        }
      }
    }
    function Bl(e) {
      var t = e.flags;
      if (t & Mn) {
        try {
          Xx(e);
        } catch (a) {
          cn(e, e.return, a);
        }
        e.flags &= -3;
      }
      t & zn && (e.flags &= -4097);
    }
    function n_(e, t, a) {
      Vf = a, Bf = t, Te = e, VR(e, t, a), Vf = null, Bf = null;
    }
    function VR(e, t, a) {
      for (var i = (e.mode & ct) !== ke; Te !== null; ) {
        var u = Te, s = u.child;
        if (u.tag === ze && i) {
          var f = u.memoizedState !== null, p = f || wm;
          if (p) {
            xS(e, t, a);
            continue;
          } else {
            var v = u.alternate, y = v !== null && v.memoizedState !== null, g = y || Hr, _ = wm, w = Hr;
            wm = p, Hr = g, Hr && !w && (Te = u, a_(u));
            for (var N = s; N !== null; )
              Te = N, VR(
                N,
                // New root; bubble back up to here and stop.
                t,
                a
              ), N = N.sibling;
            Te = u, wm = _, Hr = w, xS(e, t, a);
            continue;
          }
        }
        (u.subtreeFlags & El) !== De && s !== null ? (s.return = u, Te = s) : xS(e, t, a);
      }
    }
    function xS(e, t, a) {
      for (; Te !== null; ) {
        var i = Te;
        if ((i.flags & El) !== De) {
          var u = i.alternate;
          It(i);
          try {
            Qx(t, u, i, a);
          } catch (f) {
            cn(i, i.return, f);
          }
          mn();
        }
        if (i === e) {
          Te = null;
          return;
        }
        var s = i.sibling;
        if (s !== null) {
          s.return = i.return, Te = s;
          return;
        }
        Te = i.return;
      }
    }
    function r_(e) {
      for (; Te !== null; ) {
        var t = Te, a = t.child;
        switch (t.tag) {
          case Se:
          case Ue:
          case dt:
          case Pe: {
            if (t.mode & Ct)
              try {
                Vl(), al(dr, t, t.return);
              } finally {
                Pl(t);
              }
            else
              al(dr, t, t.return);
            break;
          }
          case ne: {
            $f(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && RS(t, t.return, i);
            break;
          }
          case G: {
            $f(t, t.return);
            break;
          }
          case ze: {
            var u = t.memoizedState !== null;
            if (u) {
              BR(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, Te = a) : BR(e);
      }
    }
    function BR(e) {
      for (; Te !== null; ) {
        var t = Te;
        if (t === e) {
          Te = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Te = a;
          return;
        }
        Te = t.return;
      }
    }
    function a_(e) {
      for (; Te !== null; ) {
        var t = Te, a = t.child;
        if (t.tag === ze) {
          var i = t.memoizedState !== null;
          if (i) {
            $R(e);
            continue;
          }
        }
        a !== null ? (a.return = t, Te = a) : $R(e);
      }
    }
    function $R(e) {
      for (; Te !== null; ) {
        var t = Te;
        It(t);
        try {
          Wx(t);
        } catch (i) {
          cn(t, t.return, i);
        }
        if (mn(), t === e) {
          Te = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Te = a;
          return;
        }
        Te = t.return;
      }
    }
    function i_(e, t, a, i) {
      Te = t, l_(t, e, a, i);
    }
    function l_(e, t, a, i) {
      for (; Te !== null; ) {
        var u = Te, s = u.child;
        (u.subtreeFlags & lr) !== De && s !== null ? (s.return = u, Te = s) : u_(e, t, a, i);
      }
    }
    function u_(e, t, a, i) {
      for (; Te !== null; ) {
        var u = Te;
        if ((u.flags & ha) !== De) {
          It(u);
          try {
            o_(t, u, a, i);
          } catch (f) {
            cn(u, u.return, f);
          }
          mn();
        }
        if (u === e) {
          Te = null;
          return;
        }
        var s = u.sibling;
        if (s !== null) {
          s.return = u.return, Te = s;
          return;
        }
        Te = u.return;
      }
    }
    function o_(e, t, a, i) {
      switch (t.tag) {
        case Se:
        case Ue:
        case Pe: {
          if (t.mode & Ct) {
            Yg();
            try {
              Fo(Fr | fr, t);
            } finally {
              $g(t);
            }
          } else
            Fo(Fr | fr, t);
          break;
        }
      }
    }
    function s_(e) {
      Te = e, c_();
    }
    function c_() {
      for (; Te !== null; ) {
        var e = Te, t = e.child;
        if ((Te.flags & Xr) !== De) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var u = a[i];
              Te = u, p_(u, e);
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
            Te = e;
          }
        }
        (e.subtreeFlags & lr) !== De && t !== null ? (t.return = e, Te = t) : f_();
      }
    }
    function f_() {
      for (; Te !== null; ) {
        var e = Te;
        (e.flags & ha) !== De && (It(e), d_(e), mn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Te = t;
          return;
        }
        Te = e.return;
      }
    }
    function d_(e) {
      switch (e.tag) {
        case Se:
        case Ue:
        case Pe: {
          e.mode & Ct ? (Yg(), al(Fr | fr, e, e.return), $g(e)) : al(Fr | fr, e, e.return);
          break;
        }
      }
    }
    function p_(e, t) {
      for (; Te !== null; ) {
        var a = Te;
        It(a), h_(a, t), mn();
        var i = a.child;
        i !== null ? (i.return = a, Te = i) : v_(e);
      }
    }
    function v_(e) {
      for (; Te !== null; ) {
        var t = Te, a = t.sibling, i = t.return;
        if (UR(t), t === e) {
          Te = null;
          return;
        }
        if (a !== null) {
          a.return = i, Te = a;
          return;
        }
        Te = i;
      }
    }
    function h_(e, t) {
      switch (e.tag) {
        case Se:
        case Ue:
        case Pe: {
          e.mode & Ct ? (Yg(), al(Fr, e, t), $g(e)) : al(Fr, e, t);
          break;
        }
      }
    }
    function m_(e) {
      switch (e.tag) {
        case Se:
        case Ue:
        case Pe: {
          try {
            Fo(dr | fr, e);
          } catch (a) {
            cn(e, e.return, a);
          }
          break;
        }
        case ne: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            cn(e, e.return, a);
          }
          break;
        }
      }
    }
    function y_(e) {
      switch (e.tag) {
        case Se:
        case Ue:
        case Pe: {
          try {
            Fo(Fr | fr, e);
          } catch (t) {
            cn(e, e.return, t);
          }
          break;
        }
      }
    }
    function g_(e) {
      switch (e.tag) {
        case Se:
        case Ue:
        case Pe: {
          try {
            al(dr | fr, e, e.return);
          } catch (a) {
            cn(e, e.return, a);
          }
          break;
        }
        case ne: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && RS(e, e.return, t);
          break;
        }
      }
    }
    function S_(e) {
      switch (e.tag) {
        case Se:
        case Ue:
        case Pe:
          try {
            al(Fr | fr, e, e.return);
          } catch (t) {
            cn(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var zp = Symbol.for;
      zp("selector.component"), zp("selector.has_pseudo_class"), zp("selector.role"), zp("selector.test_id"), zp("selector.text");
    }
    var E_ = [];
    function C_() {
      E_.forEach(function(e) {
        return e();
      });
    }
    var R_ = Xe.ReactCurrentActQueue;
    function T_(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function YR() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && R_.current !== null && S("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var w_ = Math.ceil, _S = Xe.ReactCurrentDispatcher, bS = Xe.ReactCurrentOwner, Vr = Xe.ReactCurrentBatchConfig, ul = Xe.ReactCurrentActQueue, hr = (
      /*             */
      0
    ), IR = (
      /*               */
      1
    ), Br = (
      /*                */
      2
    ), ki = (
      /*                */
      4
    ), Nu = 0, Up = 1, Js = 2, _m = 3, Ap = 4, QR = 5, DS = 6, _t = hr, Ta = null, _n = null, mr = P, $l = P, kS = Do(P), yr = Nu, Fp = null, bm = P, jp = P, Dm = P, Hp = null, Ya = null, OS = 0, WR = 500, GR = 1 / 0, x_ = 500, zu = null;
    function Pp() {
      GR = Rn() + x_;
    }
    function KR() {
      return GR;
    }
    var km = !1, LS = null, Yf = null, ec = !1, Ho = null, Vp = P, MS = [], NS = null, __ = 50, Bp = 0, zS = null, US = !1, Om = !1, b_ = 50, If = 0, Lm = null, $p = Bt, Mm = P, qR = !1;
    function Nm() {
      return Ta;
    }
    function wa() {
      return (_t & (Br | ki)) !== hr ? Rn() : ($p !== Bt || ($p = Rn()), $p);
    }
    function Po(e) {
      var t = e.mode;
      if ((t & ct) === ke)
        return Ae;
      if ((_t & Br) !== hr && mr !== P)
        return Jn(mr);
      var a = Rw() !== Cw;
      if (a) {
        if (Vr.transition !== null) {
          var i = Vr.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return Mm === An && (Mm = Md()), Mm;
      }
      var u = ga();
      if (u !== An)
        return u;
      var s = l1();
      return s;
    }
    function D_(e) {
      var t = e.mode;
      return (t & ct) === ke ? Ae : Yv();
    }
    function gr(e, t, a, i) {
      Z_(), qR && S("useInsertionEffect must not schedule updates."), US && (Om = !0), vo(e, a, i), (_t & Br) !== P && e === Ta ? tb(t) : (xr && Qv(e, t, a), nb(t), e === Ta && ((_t & Br) === hr && (jp = et(jp, a)), yr === Ap && Vo(e, mr)), Ia(e, i), a === Ae && _t === hr && (t.mode & ct) === ke && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !ul.isBatchingLegacy && (Pp(), qE()));
    }
    function k_(e, t, a) {
      var i = e.current;
      i.lanes = t, vo(e, t, a), Ia(e, a);
    }
    function O_(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (_t & Br) !== hr
      );
    }
    function Ia(e, t) {
      var a = e.callbackNode;
      Vv(e, t);
      var i = ta(e, e === Ta ? mr : P);
      if (i === P) {
        a !== null && d0(a), e.callbackNode = null, e.callbackPriority = An;
        return;
      }
      var u = vu(i), s = e.callbackPriority;
      if (s === u && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(ul.current !== null && a !== BS)) {
        a == null && s !== Ae && S("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && d0(a);
      var f;
      if (u === Ae)
        e.tag === ko ? (ul.isBatchingLegacy !== null && (ul.didScheduleLegacyUpdate = !0), aw(JR.bind(null, e))) : KE(JR.bind(null, e)), ul.current !== null ? ul.current.push(Oo) : o1(function() {
          (_t & (Br | ki)) === hr && Oo();
        }), f = null;
      else {
        var p;
        switch (Gv(i)) {
          case ra:
            p = Qi;
            break;
          case Fa:
            p = ps;
            break;
          case or:
            p = ou;
            break;
          case ef:
            p = io;
            break;
          default:
            p = ou;
            break;
        }
        f = $S(p, XR.bind(null, e));
      }
      e.callbackPriority = u, e.callbackNode = f;
    }
    function XR(e, t) {
      if (Gw(), $p = Bt, Mm = P, (_t & (Br | ki)) !== hr)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = Au();
      if (i && e.callbackNode !== a)
        return null;
      var u = ta(e, e === Ta ? mr : P);
      if (u === P)
        return null;
      var s = !xs(e, u) && !$v(e, u) && !t, f = s ? P_(e, u) : Um(e, u);
      if (f !== Nu) {
        if (f === Js) {
          var p = Qc(e);
          p !== P && (u = p, f = AS(e, p));
        }
        if (f === Up) {
          var v = Fp;
          throw tc(e, P), Vo(e, u), Ia(e, Rn()), v;
        }
        if (f === DS)
          Vo(e, u);
        else {
          var y = !xs(e, u), g = e.current.alternate;
          if (y && !M_(g)) {
            if (f = Um(e, u), f === Js) {
              var _ = Qc(e);
              _ !== P && (u = _, f = AS(e, _));
            }
            if (f === Up) {
              var w = Fp;
              throw tc(e, P), Vo(e, u), Ia(e, Rn()), w;
            }
          }
          e.finishedWork = g, e.finishedLanes = u, L_(e, f, u);
        }
      }
      return Ia(e, Rn()), e.callbackNode === a ? XR.bind(null, e) : null;
    }
    function AS(e, t) {
      var a = Hp;
      if (mu(e)) {
        var i = tc(e, t);
        i.flags |= yn, X1(e.containerInfo);
      }
      var u = Um(e, t);
      if (u !== Js) {
        var s = Ya;
        Ya = a, s !== null && ZR(s);
      }
      return u;
    }
    function ZR(e) {
      Ya === null ? Ya = e : Ya.push.apply(Ya, e);
    }
    function L_(e, t, a) {
      switch (t) {
        case Nu:
        case Up:
          throw new Error("Root did not complete. This is a bug in React.");
        case Js: {
          nc(e, Ya, zu);
          break;
        }
        case _m: {
          if (Vo(e, a), Wc(a) && // do not delay if we're inside an act() scope
          !p0()) {
            var i = OS + WR - Rn();
            if (i > 10) {
              var u = ta(e, P);
              if (u !== P)
                break;
              var s = e.suspendedLanes;
              if (!hu(s, a)) {
                wa(), Xc(e, s);
                break;
              }
              e.timeoutHandle = Ny(nc.bind(null, e, Ya, zu), i);
              break;
            }
          }
          nc(e, Ya, zu);
          break;
        }
        case Ap: {
          if (Vo(e, a), ry(a))
            break;
          if (!p0()) {
            var f = Dd(e, a), p = f, v = Rn() - p, y = X_(v) - v;
            if (y > 10) {
              e.timeoutHandle = Ny(nc.bind(null, e, Ya, zu), y);
              break;
            }
          }
          nc(e, Ya, zu);
          break;
        }
        case QR: {
          nc(e, Ya, zu);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function M_(e) {
      for (var t = e; ; ) {
        if (t.flags & Tc) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var u = 0; u < i.length; u++) {
                var s = i[u], f = s.getSnapshot, p = s.value;
                try {
                  if (!Re(f(), p))
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
      t = _s(t, Dm), t = _s(t, jp), zd(e, t);
    }
    function JR(e) {
      if (Kw(), (_t & (Br | ki)) !== hr)
        throw new Error("Should not already be working.");
      Au();
      var t = ta(e, P);
      if (!na(t, Ae))
        return Ia(e, Rn()), null;
      var a = Um(e, t);
      if (e.tag !== ko && a === Js) {
        var i = Qc(e);
        i !== P && (t = i, a = AS(e, i));
      }
      if (a === Up) {
        var u = Fp;
        throw tc(e, P), Vo(e, t), Ia(e, Rn()), u;
      }
      if (a === DS)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, nc(e, Ya, zu), Ia(e, Rn()), null;
    }
    function N_(e, t) {
      t !== P && (bs(e, et(t, Ae)), Ia(e, Rn()), (_t & (Br | ki)) === hr && (Pp(), Oo()));
    }
    function FS(e, t) {
      var a = _t;
      _t |= IR;
      try {
        return e(t);
      } finally {
        _t = a, _t === hr && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !ul.isBatchingLegacy && (Pp(), qE());
      }
    }
    function z_(e, t, a, i, u) {
      var s = ga(), f = Vr.transition;
      try {
        return Vr.transition = null, $n(ra), e(t, a, i, u);
      } finally {
        $n(s), Vr.transition = f, _t === hr && Pp();
      }
    }
    function Uu(e) {
      Ho !== null && Ho.tag === ko && (_t & (Br | ki)) === hr && Au();
      var t = _t;
      _t |= IR;
      var a = Vr.transition, i = ga();
      try {
        return Vr.transition = null, $n(ra), e ? e() : void 0;
      } finally {
        $n(i), Vr.transition = a, _t = t, (_t & (Br | ki)) === hr && Oo();
      }
    }
    function e0() {
      return (_t & (Br | ki)) !== hr;
    }
    function zm(e, t) {
      la(kS, $l, e), $l = et($l, t);
    }
    function jS(e) {
      $l = kS.current, ia(kS, e);
    }
    function tc(e, t) {
      e.finishedWork = null, e.finishedLanes = P;
      var a = e.timeoutHandle;
      if (a !== zy && (e.timeoutHandle = zy, u1(a)), _n !== null)
        for (var i = _n.return; i !== null; ) {
          var u = i.alternate;
          kR(u, i), i = i.return;
        }
      Ta = e;
      var s = rc(e.current, null);
      return _n = s, mr = $l = t, yr = Nu, Fp = null, bm = P, jp = P, Dm = P, Hp = null, Ya = null, kw(), Ji.discardPendingWarnings(), s;
    }
    function t0(e, t) {
      do {
        var a = _n;
        try {
          if (Yh(), xC(), mn(), bS.current = null, a === null || a.return === null) {
            yr = Up, Fp = t, _n = null;
            return;
          }
          if ($e && a.mode & Ct && Sm(a, !0), Ve)
            if (Rl(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              hs(a, i, mr);
            } else
              Ci(a, t, mr);
          ax(e, a.return, a, t, mr), i0(a);
        } catch (u) {
          t = u, _n === a && a !== null ? (a = a.return, _n = a) : a = _n;
          continue;
        }
        return;
      } while (!0);
    }
    function n0() {
      var e = _S.current;
      return _S.current = vm, e === null ? vm : e;
    }
    function r0(e) {
      _S.current = e;
    }
    function U_() {
      OS = Rn();
    }
    function Yp(e) {
      bm = et(e, bm);
    }
    function A_() {
      yr === Nu && (yr = _m);
    }
    function HS() {
      (yr === Nu || yr === _m || yr === Js) && (yr = Ap), Ta !== null && (bl(bm) || bl(jp)) && Vo(Ta, mr);
    }
    function F_(e) {
      yr !== Ap && (yr = Js), Hp === null ? Hp = [e] : Hp.push(e);
    }
    function j_() {
      return yr === Nu;
    }
    function Um(e, t) {
      var a = _t;
      _t |= Br;
      var i = n0();
      if (Ta !== e || mr !== t) {
        if (xr) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Ip(e, mr), u.clear()), Ud(e, t);
        }
        zu = Jc(), tc(e, t);
      }
      wd(t);
      do
        try {
          H_();
          break;
        } catch (s) {
          t0(e, s);
        }
      while (!0);
      if (Yh(), _t = a, r0(i), _n !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return pn(), Ta = null, mr = P, yr;
    }
    function H_() {
      for (; _n !== null; )
        a0(_n);
    }
    function P_(e, t) {
      var a = _t;
      _t |= Br;
      var i = n0();
      if (Ta !== e || mr !== t) {
        if (xr) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Ip(e, mr), u.clear()), Ud(e, t);
        }
        zu = Jc(), Pp(), tc(e, t);
      }
      wd(t);
      do
        try {
          V_();
          break;
        } catch (s) {
          t0(e, s);
        }
      while (!0);
      return Yh(), r0(i), _t = a, _n !== null ? (xd(), Nu) : (pn(), Ta = null, mr = P, yr);
    }
    function V_() {
      for (; _n !== null && !md(); )
        a0(_n);
    }
    function a0(e) {
      var t = e.alternate;
      It(e);
      var a;
      (e.mode & Ct) !== ke ? (Bg(e), a = PS(t, e, $l), Sm(e, !0)) : a = PS(t, e, $l), mn(), e.memoizedProps = e.pendingProps, a === null ? i0(e) : _n = a, bS.current = null;
    }
    function i0(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & lu) === De) {
          It(t);
          var u = void 0;
          if ((t.mode & Ct) === ke ? u = DR(a, t, $l) : (Bg(t), u = DR(a, t, $l), Sm(t, !1)), mn(), u !== null) {
            _n = u;
            return;
          }
        } else {
          var s = Ax(a, t);
          if (s !== null) {
            s.flags &= kv, _n = s;
            return;
          }
          if ((t.mode & Ct) !== ke) {
            Sm(t, !1);
            for (var f = t.actualDuration, p = t.child; p !== null; )
              f += p.actualDuration, p = p.sibling;
            t.actualDuration = f;
          }
          if (i !== null)
            i.flags |= lu, i.subtreeFlags = De, i.deletions = null;
          else {
            yr = DS, _n = null;
            return;
          }
        }
        var v = t.sibling;
        if (v !== null) {
          _n = v;
          return;
        }
        t = i, _n = t;
      } while (t !== null);
      yr === Nu && (yr = QR);
    }
    function nc(e, t, a) {
      var i = ga(), u = Vr.transition;
      try {
        Vr.transition = null, $n(ra), B_(e, t, a, i);
      } finally {
        Vr.transition = u, $n(i);
      }
      return null;
    }
    function B_(e, t, a, i) {
      do
        Au();
      while (Ho !== null);
      if (J_(), (_t & (Br | ki)) !== hr)
        throw new Error("Should not already be working.");
      var u = e.finishedWork, s = e.finishedLanes;
      if (Uv(s), u === null)
        return Ei(), null;
      if (s === P && S("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = P, u === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = An;
      var f = et(u.lanes, u.childLanes);
      Iv(e, f), e === Ta && (Ta = null, _n = null, mr = P), ((u.subtreeFlags & lr) !== De || (u.flags & lr) !== De) && (ec || (ec = !0, NS = a, $S(ou, function() {
        return Au(), null;
      })));
      var p = (u.subtreeFlags & (Sl | ao | El | lr)) !== De, v = (u.flags & (Sl | ao | El | lr)) !== De;
      if (p || v) {
        var y = Vr.transition;
        Vr.transition = null;
        var g = ga();
        $n(ra);
        var _ = _t;
        _t |= ki, bS.current = null, Vx(e, u), qC(), t_(e, u, s), e1(e.containerInfo), e.current = u, ms(s), n_(u, e, s), cu(), Lv(), _t = _, $n(g), Vr.transition = y;
      } else
        e.current = u, qC();
      var w = ec;
      if (ec ? (ec = !1, Ho = e, Vp = s) : (If = 0, Lm = null), f = e.pendingLanes, f === P && (Yf = null), w || s0(e.current, !1), Sd(u.stateNode, i), xr && e.memoizedUpdaters.clear(), C_(), Ia(e, Rn()), t !== null)
        for (var N = e.onRecoverableError, U = 0; U < t.length; U++) {
          var j = t[U], ue = j.stack, Ne = j.digest;
          N(j.value, {
            componentStack: ue,
            digest: Ne
          });
        }
      if (km) {
        km = !1;
        var be = LS;
        throw LS = null, be;
      }
      return na(Vp, Ae) && e.tag !== ko && Au(), f = e.pendingLanes, na(f, Ae) ? (Ww(), e === zS ? Bp++ : (Bp = 0, zS = e)) : Bp = 0, Oo(), Ei(), null;
    }
    function Au() {
      if (Ho !== null) {
        var e = Gv(Vp), t = _r(or, e), a = Vr.transition, i = ga();
        try {
          return Vr.transition = null, $n(t), Y_();
        } finally {
          $n(i), Vr.transition = a;
        }
      }
      return !1;
    }
    function $_(e) {
      MS.push(e), ec || (ec = !0, $S(ou, function() {
        return Au(), null;
      }));
    }
    function Y_() {
      if (Ho === null)
        return !1;
      var e = NS;
      NS = null;
      var t = Ho, a = Vp;
      if (Ho = null, Vp = P, (_t & (Br | ki)) !== hr)
        throw new Error("Cannot flush passive effects while already rendering.");
      US = !0, Om = !1, Td(a);
      var i = _t;
      _t |= ki, s_(t.current), i_(t, t.current, a, e);
      {
        var u = MS;
        MS = [];
        for (var s = 0; s < u.length; s++) {
          var f = u[s];
          Ix(t, f);
        }
      }
      oo(), s0(t.current, !0), _t = i, Oo(), Om ? t === Lm ? If++ : (If = 0, Lm = t) : If = 0, US = !1, Om = !1, Ed(t);
      {
        var p = t.current.stateNode;
        p.effectDuration = 0, p.passiveEffectDuration = 0;
      }
      return !0;
    }
    function l0(e) {
      return Yf !== null && Yf.has(e);
    }
    function I_(e) {
      Yf === null ? Yf = /* @__PURE__ */ new Set([e]) : Yf.add(e);
    }
    function Q_(e) {
      km || (km = !0, LS = e);
    }
    var W_ = Q_;
    function u0(e, t, a) {
      var i = Xs(a, t), u = aR(e, i, Ae), s = Mo(e, u, Ae), f = wa();
      s !== null && (vo(s, Ae, f), Ia(s, f));
    }
    function cn(e, t, a) {
      if (jx(a), Qp(!1), e.tag === B) {
        u0(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === B) {
          u0(i, e, a);
          return;
        } else if (i.tag === ne) {
          var u = i.type, s = i.stateNode;
          if (typeof u.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !l0(s)) {
            var f = Xs(a, e), p = lS(i, f, Ae), v = Mo(i, p, Ae), y = wa();
            v !== null && (vo(v, Ae, y), Ia(v, y));
            return;
          }
        }
        i = i.return;
      }
      S(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function G_(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var u = wa();
      Xc(e, a), rb(e), Ta === e && hu(mr, a) && (yr === Ap || yr === _m && Wc(mr) && Rn() - OS < WR ? tc(e, P) : Dm = et(Dm, a)), Ia(e, u);
    }
    function o0(e, t) {
      t === An && (t = D_(e));
      var a = wa(), i = Ba(e, t);
      i !== null && (vo(i, t, a), Ia(i, a));
    }
    function K_(e) {
      var t = e.memoizedState, a = An;
      t !== null && (a = t.retryLane), o0(e, a);
    }
    function q_(e, t) {
      var a = An, i;
      switch (e.tag) {
        case xe:
          i = e.stateNode;
          var u = e.memoizedState;
          u !== null && (a = u.retryLane);
          break;
        case $t:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), o0(e, a);
    }
    function X_(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : w_(e / 1960) * 1960;
    }
    function Z_() {
      if (Bp > __)
        throw Bp = 0, zS = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      If > b_ && (If = 0, Lm = null, S("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function J_() {
      Ji.flushLegacyContextWarning(), Ji.flushPendingUnsafeLifecycleWarnings();
    }
    function s0(e, t) {
      It(e), Am(e, Mr, g_), t && Am(e, gl, S_), Am(e, Mr, m_), t && Am(e, gl, y_), mn();
    }
    function Am(e, t, a) {
      for (var i = e, u = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== u && i.child !== null && s !== De ? i = i.child : ((i.flags & t) !== De && a(i), i.sibling !== null ? i = i.sibling : i = u = i.return);
      }
    }
    var Fm = null;
    function c0(e) {
      {
        if ((_t & Br) !== hr || !(e.mode & ct))
          return;
        var t = e.tag;
        if (t !== se && t !== B && t !== ne && t !== Se && t !== Ue && t !== dt && t !== Pe)
          return;
        var a = Be(e) || "ReactComponent";
        if (Fm !== null) {
          if (Fm.has(a))
            return;
          Fm.add(a);
        } else
          Fm = /* @__PURE__ */ new Set([a]);
        var i = qn;
        try {
          It(e), S("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? It(e) : mn();
        }
      }
    }
    var PS;
    {
      var eb = null;
      PS = function(e, t, a) {
        var i = g0(eb, t);
        try {
          return TR(e, t, a);
        } catch (s) {
          if (dw() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (Yh(), xC(), kR(e, t), g0(t, i), t.mode & Ct && Bg(t), Na(null, TR, null, e, t, a), sd()) {
            var u = cd();
            typeof u == "object" && u !== null && u._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var f0 = !1, VS;
    VS = /* @__PURE__ */ new Set();
    function tb(e) {
      if (Kr && !Yw())
        switch (e.tag) {
          case Se:
          case Ue:
          case Pe: {
            var t = _n && Be(_n) || "Unknown", a = t;
            if (!VS.has(a)) {
              VS.add(a);
              var i = Be(e) || "Unknown";
              S("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case ne: {
            f0 || (S("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), f0 = !0);
            break;
          }
        }
    }
    function Ip(e, t) {
      if (xr) {
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
    function d0(e) {
      if (e !== BS)
        return hd(e);
    }
    function p0() {
      return ul.current !== null;
    }
    function nb(e) {
      {
        if (e.mode & ct) {
          if (!YR())
            return;
        } else if (!T_() || _t !== hr || e.tag !== Se && e.tag !== Ue && e.tag !== Pe)
          return;
        if (ul.current === null) {
          var t = qn;
          try {
            It(e), S(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, Be(e));
          } finally {
            t ? It(e) : mn();
          }
        }
      }
    }
    function rb(e) {
      e.tag !== ko && YR() && ul.current === null && S(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function Qp(e) {
      qR = e;
    }
    var Oi = null, Qf = null, ab = function(e) {
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
                $$typeof: I,
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
    function v0(e, t) {
      {
        if (Oi === null)
          return !1;
        var a = e.elementType, i = t.type, u = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case ne: {
            typeof i == "function" && (u = !0);
            break;
          }
          case Se: {
            (typeof i == "function" || s === Ye) && (u = !0);
            break;
          }
          case Ue: {
            (s === I || s === Ye) && (u = !0);
            break;
          }
          case dt:
          case Pe: {
            (s === ot || s === Ye) && (u = !0);
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
    function h0(e) {
      {
        if (Oi === null || typeof WeakSet != "function")
          return;
        Qf === null && (Qf = /* @__PURE__ */ new WeakSet()), Qf.add(e);
      }
    }
    var ib = function(e, t) {
      {
        if (Oi === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        Au(), Uu(function() {
          QS(e.current, i, a);
        });
      }
    }, lb = function(e, t) {
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
          case Se:
          case Pe:
          case ne:
            v = p;
            break;
          case Ue:
            v = p.render;
            break;
        }
        if (Oi === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var y = !1, g = !1;
        if (v !== null) {
          var _ = Oi(v);
          _ !== void 0 && (a.has(_) ? g = !0 : t.has(_) && (f === ne ? g = !0 : y = !0));
        }
        if (Qf !== null && (Qf.has(e) || i !== null && Qf.has(i)) && (g = !0), g && (e._debugNeedsRemount = !0), g || y) {
          var w = Ba(e, Ae);
          w !== null && gr(w, e, Ae, Bt);
        }
        u !== null && !g && QS(u, t, a), s !== null && QS(s, t, a);
      }
    }
    var ub = function(e, t) {
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
          case Se:
          case Pe:
          case ne:
            p = f;
            break;
          case Ue:
            p = f.render;
            break;
        }
        var v = !1;
        p !== null && t.has(p) && (v = !0), v ? ob(e, a) : i !== null && WS(i, t, a), u !== null && WS(u, t, a);
      }
    }
    function ob(e, t) {
      {
        var a = sb(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case G:
              t.add(i.stateNode);
              return;
            case ee:
              t.add(i.stateNode.containerInfo);
              return;
            case B:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function sb(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === G)
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
    var GS;
    {
      GS = !1;
      try {
        var m0 = Object.preventExtensions({});
      } catch {
        GS = !0;
      }
    }
    function cb(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = De, this.subtreeFlags = De, this.deletions = null, this.lanes = P, this.childLanes = P, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !GS && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var ui = function(e, t, a, i) {
      return new cb(e, t, a, i);
    };
    function KS(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function fb(e) {
      return typeof e == "function" && !KS(e) && e.defaultProps === void 0;
    }
    function db(e) {
      if (typeof e == "function")
        return KS(e) ? ne : Se;
      if (e != null) {
        var t = e.$$typeof;
        if (t === I)
          return Ue;
        if (t === ot)
          return dt;
      }
      return se;
    }
    function rc(e, t) {
      var a = e.alternate;
      a === null ? (a = ui(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = De, a.subtreeFlags = De, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & Un, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case se:
        case Se:
        case Pe:
          a.type = Wf(e.type);
          break;
        case ne:
          a.type = YS(e.type);
          break;
        case Ue:
          a.type = IS(e.type);
          break;
      }
      return a;
    }
    function pb(e, t) {
      e.flags &= Un | Mn;
      var a = e.alternate;
      if (a === null)
        e.childLanes = P, e.lanes = t, e.child = null, e.subtreeFlags = De, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = De, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function vb(e, t, a) {
      var i;
      return e === zh ? (i = ct, t === !0 && (i |= qe, i |= Kt)) : i = ke, xr && (i |= Ct), ui(B, null, null, i);
    }
    function qS(e, t, a, i, u, s) {
      var f = se, p = e;
      if (typeof e == "function")
        KS(e) ? (f = ne, p = YS(p)) : p = Wf(p);
      else if (typeof e == "string")
        f = G;
      else
        e: switch (e) {
          case Qr:
            return Bo(a.children, u, s, t);
          case ci:
            f = Hn, u |= qe, (u & ct) !== ke && (u |= Kt);
            break;
          case fi:
            return hb(a, u, s, t);
          case ie:
            return mb(a, u, s, t);
          case ce:
            return yb(a, u, s, t);
          case En:
            return y0(a, u, s, t);
          case nn:
          case pt:
          case on:
          case Rr:
          case nt:
          default: {
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case zi:
                  f = ut;
                  break e;
                case R:
                  f = rn;
                  break e;
                case I:
                  f = Ue, p = IS(p);
                  break e;
                case ot:
                  f = dt;
                  break e;
                case Ye:
                  f = Sn, p = null;
                  break e;
              }
            var v = "";
            {
              (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
              var y = i ? Be(i) : null;
              y && (v += `

Check the render method of \`` + y + "`.");
            }
            throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + v));
          }
        }
      var g = ui(f, a, t, u);
      return g.elementType = e, g.type = p, g.lanes = s, g._debugOwner = i, g;
    }
    function XS(e, t, a) {
      var i = null;
      i = e._owner;
      var u = e.type, s = e.key, f = e.props, p = qS(u, s, f, i, t, a);
      return p._debugSource = e._source, p._debugOwner = e._owner, p;
    }
    function Bo(e, t, a, i) {
      var u = ui(Ge, e, i, t);
      return u.lanes = a, u;
    }
    function hb(e, t, a, i) {
      typeof e.id != "string" && S('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var u = ui(kt, e, i, t | Ct);
      return u.elementType = fi, u.lanes = a, u.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, u;
    }
    function mb(e, t, a, i) {
      var u = ui(xe, e, i, t);
      return u.elementType = ie, u.lanes = a, u;
    }
    function yb(e, t, a, i) {
      var u = ui($t, e, i, t);
      return u.elementType = ce, u.lanes = a, u;
    }
    function y0(e, t, a, i) {
      var u = ui(ze, e, i, t);
      u.elementType = En, u.lanes = a;
      var s = {
        isHidden: !1
      };
      return u.stateNode = s, u;
    }
    function ZS(e, t, a) {
      var i = ui(de, e, null, t);
      return i.lanes = a, i;
    }
    function gb() {
      var e = ui(G, null, null, ke);
      return e.elementType = "DELETED", e;
    }
    function Sb(e) {
      var t = ui(fn, null, null, ke);
      return t.stateNode = e, t;
    }
    function JS(e, t, a) {
      var i = e.children !== null ? e.children : [], u = ui(ee, i, e.key, t);
      return u.lanes = a, u.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, u;
    }
    function g0(e, t) {
      return e === null && (e = ui(se, null, null, ke)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function Eb(e, t, a, i, u) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = zy, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = An, this.eventTimes = qc(P), this.expirationTimes = qc(Bt), this.pendingLanes = P, this.suspendedLanes = P, this.pingedLanes = P, this.expiredLanes = P, this.mutableReadLanes = P, this.finishedLanes = P, this.entangledLanes = P, this.entanglements = qc(P), this.identifierPrefix = i, this.onRecoverableError = u, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], f = 0; f < bd; f++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case zh:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case ko:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function S0(e, t, a, i, u, s, f, p, v, y) {
      var g = new Eb(e, t, a, p, v), _ = vb(t, s);
      g.current = _, _.stateNode = g;
      {
        var w = {
          element: i,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        _.memoizedState = w;
      }
      return dg(_), g;
    }
    var eE = "18.3.1";
    function Cb(e, t, a) {
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
    function E0(e) {
      if (!e)
        return li;
      var t = ro(e), a = rw(t);
      if (t.tag === ne) {
        var i = t.type;
        if (Al(i))
          return WE(t, i, a);
      }
      return a;
    }
    function Rb(e, t) {
      {
        var a = ro(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var u = Jr(a);
        if (u === null)
          return null;
        if (u.mode & qe) {
          var s = Be(a) || "Component";
          if (!nE[s]) {
            nE[s] = !0;
            var f = qn;
            try {
              It(u), a.mode & qe ? S("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : S("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              f ? It(f) : mn();
            }
          }
        }
        return u.stateNode;
      }
    }
    function C0(e, t, a, i, u, s, f, p) {
      var v = !1, y = null;
      return S0(e, t, v, y, a, i, u, s, f);
    }
    function R0(e, t, a, i, u, s, f, p, v, y) {
      var g = !0, _ = S0(a, i, g, e, u, s, f, p, v);
      _.context = E0(null);
      var w = _.current, N = wa(), U = Po(w), j = Lu(N, U);
      return j.callback = t ?? null, Mo(w, j, U), k_(_, U, N), _;
    }
    function Wp(e, t, a, i) {
      gd(t, e);
      var u = t.current, s = wa(), f = Po(u);
      bc(f);
      var p = E0(a);
      t.context === null ? t.context = p : t.pendingContext = p, Kr && qn !== null && !tE && (tE = !0, S(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, Be(qn) || "Unknown"));
      var v = Lu(s, f);
      v.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && S("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), v.callback = i);
      var y = Mo(u, v, f);
      return y !== null && (gr(y, u, f, s), Kh(y, u, f)), f;
    }
    function jm(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case G:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function Tb(e) {
      switch (e.tag) {
        case B: {
          var t = e.stateNode;
          if (mu(t)) {
            var a = Bv(t);
            N_(t, a);
          }
          break;
        }
        case xe: {
          Uu(function() {
            var u = Ba(e, Ae);
            if (u !== null) {
              var s = wa();
              gr(u, e, Ae, s);
            }
          });
          var i = Ae;
          rE(e, i);
          break;
        }
      }
    }
    function T0(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = Nd(a.retryLane, t));
    }
    function rE(e, t) {
      T0(e, t);
      var a = e.alternate;
      a && T0(a, t);
    }
    function wb(e) {
      if (e.tag === xe) {
        var t = po, a = Ba(e, t);
        if (a !== null) {
          var i = wa();
          gr(a, e, t, i);
        }
        rE(e, t);
      }
    }
    function xb(e) {
      if (e.tag === xe) {
        var t = Po(e), a = Ba(e, t);
        if (a !== null) {
          var i = wa();
          gr(a, e, t, i);
        }
        rE(e, t);
      }
    }
    function w0(e) {
      var t = ni(e);
      return t === null ? null : t.stateNode;
    }
    var x0 = function(e) {
      return null;
    };
    function _b(e) {
      return x0(e);
    }
    var _0 = function(e) {
      return !1;
    };
    function bb(e) {
      return _0(e);
    }
    var b0 = null, D0 = null, k0 = null, O0 = null, L0 = null, M0 = null, N0 = null, z0 = null, U0 = null;
    {
      var A0 = function(e, t, a) {
        var i = t[a], u = Je(e) ? e.slice() : Ke({}, e);
        return a + 1 === t.length ? (Je(u) ? u.splice(i, 1) : delete u[i], u) : (u[i] = A0(e[i], t, a + 1), u);
      }, F0 = function(e, t) {
        return A0(e, t, 0);
      }, j0 = function(e, t, a, i) {
        var u = t[i], s = Je(e) ? e.slice() : Ke({}, e);
        if (i + 1 === t.length) {
          var f = a[i];
          s[f] = s[u], Je(s) ? s.splice(u, 1) : delete s[u];
        } else
          s[u] = j0(
            // $FlowFixMe number or string is fine here
            e[u],
            t,
            a,
            i + 1
          );
        return s;
      }, H0 = function(e, t, a) {
        if (t.length !== a.length) {
          lt("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              lt("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return j0(e, t, a, 0);
      }, P0 = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var u = t[a], s = Je(e) ? e.slice() : Ke({}, e);
        return s[u] = P0(e[u], t, a + 1, i), s;
      }, V0 = function(e, t, a) {
        return P0(e, t, 0, a);
      }, aE = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      b0 = function(e, t, a, i) {
        var u = aE(e, t);
        if (u !== null) {
          var s = V0(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = Ke({}, e.memoizedProps);
          var f = Ba(e, Ae);
          f !== null && gr(f, e, Ae, Bt);
        }
      }, D0 = function(e, t, a) {
        var i = aE(e, t);
        if (i !== null) {
          var u = F0(i.memoizedState, a);
          i.memoizedState = u, i.baseState = u, e.memoizedProps = Ke({}, e.memoizedProps);
          var s = Ba(e, Ae);
          s !== null && gr(s, e, Ae, Bt);
        }
      }, k0 = function(e, t, a, i) {
        var u = aE(e, t);
        if (u !== null) {
          var s = H0(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = Ke({}, e.memoizedProps);
          var f = Ba(e, Ae);
          f !== null && gr(f, e, Ae, Bt);
        }
      }, O0 = function(e, t, a) {
        e.pendingProps = V0(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Ba(e, Ae);
        i !== null && gr(i, e, Ae, Bt);
      }, L0 = function(e, t) {
        e.pendingProps = F0(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = Ba(e, Ae);
        a !== null && gr(a, e, Ae, Bt);
      }, M0 = function(e, t, a) {
        e.pendingProps = H0(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Ba(e, Ae);
        i !== null && gr(i, e, Ae, Bt);
      }, N0 = function(e) {
        var t = Ba(e, Ae);
        t !== null && gr(t, e, Ae, Bt);
      }, z0 = function(e) {
        x0 = e;
      }, U0 = function(e) {
        _0 = e;
      };
    }
    function Db(e) {
      var t = Jr(e);
      return t === null ? null : t.stateNode;
    }
    function kb(e) {
      return null;
    }
    function Ob() {
      return qn;
    }
    function Lb(e) {
      var t = e.findFiberByHostInstance, a = Xe.ReactCurrentDispatcher;
      return yd({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: b0,
        overrideHookStateDeletePath: D0,
        overrideHookStateRenamePath: k0,
        overrideProps: O0,
        overridePropsDeletePath: L0,
        overridePropsRenamePath: M0,
        setErrorHandler: z0,
        setSuspenseHandler: U0,
        scheduleUpdate: N0,
        currentDispatcherRef: a,
        findHostInstanceByFiber: Db,
        findFiberByHostInstance: t || kb,
        // React Refresh
        findHostInstancesForRefresh: ub,
        scheduleRefresh: ib,
        scheduleRoot: lb,
        setRefreshHandler: ab,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: Ob,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: eE
      });
    }
    var B0 = typeof reportError == "function" ? (
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
        if (a.nodeType !== Ln) {
          var i = w0(t.current);
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
        e0() && S("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Uu(function() {
          Wp(null, e, null, null);
        }), BE(t);
      }
    };
    function Mb(e, t) {
      if (!Pm(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      $0(e);
      var a = !1, i = !1, u = "", s = B0;
      t != null && (t.hydrate ? lt("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === ir && S(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var f = C0(e, zh, null, a, i, u, s);
      bh(f.current, e);
      var p = e.nodeType === Ln ? e.parentNode : e;
      return Jd(p), new iE(f);
    }
    function Hm(e) {
      this._internalRoot = e;
    }
    function Nb(e) {
      e && Jv(e);
    }
    Hm.prototype.unstable_scheduleHydration = Nb;
    function zb(e, t, a) {
      if (!Pm(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      $0(e), t === void 0 && S("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, u = a != null && a.hydratedSources || null, s = !1, f = !1, p = "", v = B0;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (p = a.identifierPrefix), a.onRecoverableError !== void 0 && (v = a.onRecoverableError));
      var y = R0(t, null, e, zh, i, s, f, p, v);
      if (bh(y.current, e), Jd(e), u)
        for (var g = 0; g < u.length; g++) {
          var _ = u[g];
          jw(y, _);
        }
      return new Hm(y);
    }
    function Pm(e) {
      return !!(e && (e.nodeType === qr || e.nodeType === $i || e.nodeType === Xo));
    }
    function Gp(e) {
      return !!(e && (e.nodeType === qr || e.nodeType === $i || e.nodeType === Xo || e.nodeType === Ln && e.nodeValue === " react-mount-point-unstable "));
    }
    function $0(e) {
      e.nodeType === qr && e.tagName && e.tagName.toUpperCase() === "BODY" && S("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), cp(e) && (e._reactRootContainer ? S("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : S("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var Ub = Xe.ReactCurrentOwner, Y0;
    Y0 = function(e) {
      if (e._reactRootContainer && e.nodeType !== Ln) {
        var t = w0(e._reactRootContainer.current);
        t && t.parentNode !== e && S("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = lE(e), u = !!(i && bo(i));
      u && !a && S("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === qr && e.tagName && e.tagName.toUpperCase() === "BODY" && S("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function lE(e) {
      return e ? e.nodeType === $i ? e.documentElement : e.firstChild : null;
    }
    function I0() {
    }
    function Ab(e, t, a, i, u) {
      if (u) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var w = jm(f);
            s.call(w);
          };
        }
        var f = R0(
          t,
          i,
          e,
          ko,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          I0
        );
        e._reactRootContainer = f, bh(f.current, e);
        var p = e.nodeType === Ln ? e.parentNode : e;
        return Jd(p), Uu(), f;
      } else {
        for (var v; v = e.lastChild; )
          e.removeChild(v);
        if (typeof i == "function") {
          var y = i;
          i = function() {
            var w = jm(g);
            y.call(w);
          };
        }
        var g = C0(
          e,
          ko,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          I0
        );
        e._reactRootContainer = g, bh(g.current, e);
        var _ = e.nodeType === Ln ? e.parentNode : e;
        return Jd(_), Uu(function() {
          Wp(t, g, a, i);
        }), g;
      }
    }
    function Fb(e, t) {
      e !== null && typeof e != "function" && S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function Vm(e, t, a, i, u) {
      Y0(a), Fb(u === void 0 ? null : u, "render");
      var s = a._reactRootContainer, f;
      if (!s)
        f = Ab(a, t, e, u, i);
      else {
        if (f = s, typeof u == "function") {
          var p = u;
          u = function() {
            var v = jm(f);
            p.call(v);
          };
        }
        Wp(t, f, e, u);
      }
      return jm(f);
    }
    var Q0 = !1;
    function jb(e) {
      {
        Q0 || (Q0 = !0, S("findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node"));
        var t = Ub.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || S("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", xt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === qr ? e : Rb(e, "findDOMNode");
    }
    function Hb(e, t, a) {
      if (S("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Gp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = cp(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return Vm(null, e, t, !0, a);
    }
    function Pb(e, t, a) {
      if (S("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Gp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = cp(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return Vm(null, e, t, !1, a);
    }
    function Vb(e, t, a, i) {
      if (S("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Gp(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !iu(e))
        throw new Error("parentComponent must be a valid React Component");
      return Vm(e, t, a, !1, i);
    }
    var W0 = !1;
    function Bb(e) {
      if (W0 || (W0 = !0, S("unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot")), !Gp(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = cp(e) && e._reactRootContainer === void 0;
        t && S("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = lE(e), i = a && !bo(a);
          i && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return Uu(function() {
          Vm(null, null, e, !1, function() {
            e._reactRootContainer = null, BE(e);
          });
        }), !0;
      } else {
        {
          var u = lE(e), s = !!(u && bo(u)), f = e.nodeType === qr && Gp(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", f ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    iy(Tb), Fd(wb), ly(xb), tf(ga), Kv(Wv), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && S("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), ls(YT), bv(FS, z_, Uu);
    function $b(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Pm(t))
        throw new Error("Target container is not a DOM element.");
      return Cb(e, t, null, a);
    }
    function Yb(e, t, a, i) {
      return Vb(e, t, a, i);
    }
    var uE = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [bo, wf, Dh, ud, Ju, FS]
    };
    function Ib(e, t) {
      return uE.usingClientEntryPoint || S('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), Mb(e, t);
    }
    function Qb(e, t, a) {
      return uE.usingClientEntryPoint || S('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), zb(e, t, a);
    }
    function Wb(e) {
      return e0() && S("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Uu(e);
    }
    var Gb = Lb({
      findFiberByHostInstance: Bs,
      bundleType: 1,
      version: eE,
      rendererPackageName: "react-dom"
    });
    if (!Gb && Qn && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var G0 = window.location.protocol;
      /^(https?|file):$/.test(G0) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (G0 === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    Wa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = uE, Wa.createPortal = $b, Wa.createRoot = Ib, Wa.findDOMNode = jb, Wa.flushSync = Wb, Wa.hydrate = Hb, Wa.hydrateRoot = Qb, Wa.render = Pb, Wa.unmountComponentAtNode = Bb, Wa.unstable_batchedUpdates = FS, Wa.unstable_renderSubtreeIntoContainer = Yb, Wa.version = eE, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }(), Wa;
}
var uT = {};
function oT() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (uT.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(oT);
    } catch (X) {
      console.error(X);
    }
  }
}
uT.NODE_ENV === "production" ? (oT(), dE.exports = lD()) : dE.exports = uD();
var oD = dE.exports, pE, sD = {}, $m = oD;
if (sD.NODE_ENV === "production")
  pE = $m.createRoot, $m.hydrateRoot;
else {
  var aT = $m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  pE = function(X, oe) {
    aT.usingClientEntryPoint = !0;
    try {
      return $m.createRoot(X, oe);
    } finally {
      aT.usingClientEntryPoint = !1;
    }
  };
}
const cD = (X) => {
  switch (X) {
    case "USD":
      return "$";
    case "EUR":
      return "€";
    case "GBP":
      return "£";
    case "JPY":
      return "¥";
    case "CNY":
      return "¥";
    case "KRW":
      return "₩";
    case "INR":
      return "₹";
    case "RUB":
      return "₽";
    case "BRL":
      return "R$";
    case "ZAR":
      return "R";
    case "AUD":
      return "A$";
    case "CAD":
      return "C$";
    case "NZD":
      return "NZ$";
    case "CHF":
      return "Fr";
    case "HKD":
      return "HK$";
    case "SGD":
      return "S$";
    case "SEK":
      return "kr";
    case "NOK":
      return "kr";
    case "DKK":
      return "kr";
    case "PLN":
      return "zł";
    case "THB":
      return "฿";
    case "MXN":
      return "Mex$";
    default:
      return X;
  }
};
var sT = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(X) {
  (function() {
    var oe = function() {
      function A() {
      }
      A.prototype = /* @__PURE__ */ Object.create(null);
      function Xe(se, B) {
        for (var ee = B.length, G = 0; G < ee; ++G)
          Se(se, B[G]);
      }
      var gt = {}.hasOwnProperty;
      function ft(se, B) {
        se[B] = !0;
      }
      function lt(se, B) {
        if (B.toString !== Object.prototype.toString && !B.toString.toString().includes("[native code]")) {
          se[B.toString()] = !0;
          return;
        }
        for (var ee in B)
          gt.call(B, ee) && (se[ee] = !!B[ee]);
      }
      var S = /\s+/;
      function Ze(se, B) {
        for (var ee = B.split(S), G = ee.length, de = 0; de < G; ++de)
          se[ee[de]] = !0;
      }
      function Se(se, B) {
        if (B) {
          var ee = typeof B;
          ee === "string" ? Ze(se, B) : Array.isArray(B) ? Xe(se, B) : ee === "object" ? lt(se, B) : ee === "number" && ft(se, B);
        }
      }
      function ne() {
        for (var se = arguments.length, B = Array(se), ee = 0; ee < se; ee++)
          B[ee] = arguments[ee];
        var G = new A();
        Xe(G, B);
        var de = [];
        for (var Ge in G)
          G[Ge] && de.push(Ge);
        return de.join(" ");
      }
      return ne;
    }();
    X.exports ? (oe.default = oe, X.exports = oe) : window.classNames = oe;
  })();
})(sT);
var fD = sT.exports;
const dD = /* @__PURE__ */ Xb(fD);
function pD({ bundleData: X }) {
  const [oe, A] = Yr.useState(null), [Xe, gt] = Yr.useState("$"), [ft, lt] = Yr.useState(null), [S, Ze] = Yr.useState("vertical"), [Se, ne] = Yr.useState([]), se = () => {
    var G, de, Ge;
    const ee = ((Ge = (de = (G = window == null ? void 0 : window.ShopifyAnalytics) == null ? void 0 : G.meta) == null ? void 0 : de.product) == null ? void 0 : Ge.variants) || [];
    return ee.length > 0 ? ee[0].price / 100 : 0;
  };
  Yr.useEffect(() => {
    ne(JSON.parse(X.volumeBundles));
  }, []);
  const B = (ee) => {
    let G = "";
    return ee.discount_type === "amount" ? G = /* @__PURE__ */ Sr.jsxs("span", { children: [
      "Save ",
      Xe,
      ee.discount
    ] }) : G = /* @__PURE__ */ Sr.jsxs("span", { children: [
      "Save ",
      ee.discount,
      "%"
    ] }), ee.discount || (G = /* @__PURE__ */ Sr.jsx("span", { children: "Regular price" })), G;
  };
  return Yr.useEffect(() => {
    var G, de;
    const ee = (de = (G = window == null ? void 0 : window.Shopify) == null ? void 0 : G.currency) == null ? void 0 : de.active;
    gt(cD(ee));
  }, []), Yr.useEffect(() => {
    lt(se());
  }, []), /* @__PURE__ */ Sr.jsxs("div", { className: "barn2-discount-bundles", children: [
    /* @__PURE__ */ Sr.jsx("div", { className: "barn2-db-main-title", children: /* @__PURE__ */ Sr.jsx("span", { children: "Buy" }) }),
    /* @__PURE__ */ Sr.jsx("div", { className: `barn2-discounts-list barn2-dbs-layout-${S} discount-columns-${Se.length}`, children: Se.map((ee, G) => /* @__PURE__ */ Sr.jsxs(
      "div",
      {
        className: dD(
          "barn2-discount-bundle",
          {
            highlighted: ee.highlighted,
            selected: oe === G
          }
        ),
        onClick: () => A(G),
        children: [
          ee.highlighted && /* @__PURE__ */ Sr.jsx("span", { className: "barn2-highlighted-text", children: "Most popular" }),
          /* @__PURE__ */ Sr.jsxs("div", { className: "barn2-dbs-top", children: [
            /* @__PURE__ */ Sr.jsx("span", { className: "barn2-input-circle" }),
            /* @__PURE__ */ Sr.jsxs("div", { className: "barn2-dbs-text-block", children: [
              /* @__PURE__ */ Sr.jsx("h4", { className: "barn2-dbs-bundle-title", children: ee.description }),
              /* @__PURE__ */ Sr.jsx("p", { children: B(ee) })
            ] })
          ] }),
          /* @__PURE__ */ Sr.jsxs("div", { className: "barn2-dbs-bottom", children: [
            /* @__PURE__ */ Sr.jsxs("span", { className: "barn2-dbs-price", children: [
              Xe,
              ft
            ] }),
            /* @__PURE__ */ Sr.jsxs("span", { className: "barn2-dbs-regular-price", children: [
              Xe,
              ft * ee.quantity
            ] })
          ] })
        ]
      },
      G
    )) })
  ] });
}
function vD() {
  var S, Ze, Se;
  const [X, oe] = Yr.useState((Se = (Ze = (S = window == null ? void 0 : window.ShopifyAnalytics) == null ? void 0 : S.meta) == null ? void 0 : Ze.product) == null ? void 0 : Se.id), [A, Xe] = Yr.useState(null), [gt, ft] = Yr.useState(!1), lt = async (ne) => {
    try {
      return await (await fetch(`/apps/barn2-quanti/discountbundle?productId=${ne}`)).json();
    } catch (se) {
      return console.error("Error fetching discount bundle:", se), null;
    }
  };
  return Yr.useEffect(() => {
    const ne = () => {
      const B = new URLSearchParams(window.location.search).get("previewPath");
      ft(B && B.startsWith("/products/"));
    };
    return ne(), window.addEventListener("popstate", ne), () => {
      window.removeEventListener("popstate", ne);
    };
  }, []), Yr.useEffect(() => {
    (async () => {
      try {
        const se = await lt(X);
        Xe(se.eligibleProductBundle);
      } catch (se) {
        console.error("Error in useEffect:", se);
      }
    })();
  }, [X, gt]), A && A.type == "volume_bundle" && /* @__PURE__ */ Sr.jsx(pD, { bundleData: A });
}
const iT = document.getElementById("barn2_discounts");
iT && pE(iT).render(/* @__PURE__ */ Sr.jsx(vD, {}));
