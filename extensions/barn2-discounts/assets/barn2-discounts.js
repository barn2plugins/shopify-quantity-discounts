var cE = { exports: {} }, qp = {}, fE = { exports: {} }, Ct = {};
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
function qb() {
  if (K0) return Ct;
  K0 = 1;
  var X = Symbol.for("react.element"), pe = Symbol.for("react.portal"), A = Symbol.for("react.fragment"), st = Symbol.for("react.strict_mode"), Rt = Symbol.for("react.profiler"), yt = Symbol.for("react.provider"), Ne = Symbol.for("react.context"), S = Symbol.for("react.forward_ref"), We = Symbol.for("react.suspense"), Te = Symbol.for("react.memo"), fe = Symbol.for("react.lazy"), $e = Symbol.iterator;
  function J(b) {
    return b === null || typeof b != "object" ? null : (b = $e && b[$e] || b["@@iterator"], typeof b == "function" ? b : null);
  }
  var je = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, le = Object.assign, xe = {};
  function ct(b, $, De) {
    this.props = b, this.context = $, this.refs = xe, this.updater = De || je;
  }
  ct.prototype.isReactComponent = {}, ct.prototype.setState = function(b, $) {
    if (typeof b != "object" && typeof b != "function" && b != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, b, $, "setState");
  }, ct.prototype.forceUpdate = function(b) {
    this.updater.enqueueForceUpdate(this, b, "forceUpdate");
  };
  function Hn() {
  }
  Hn.prototype = ct.prototype;
  function rn(b, $, De) {
    this.props = b, this.context = $, this.refs = xe, this.updater = De || je;
  }
  var it = rn.prototype = new Hn();
  it.constructor = rn, le(it, ct.prototype), it.isPureReactComponent = !0;
  var ze = Array.isArray, kt = Object.prototype.hasOwnProperty, Ce = { current: null }, ft = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Ve(b, $, De) {
    var Pe, Ye = {}, at = null, Tt = null;
    if ($ != null) for (Pe in $.ref !== void 0 && (Tt = $.ref), $.key !== void 0 && (at = "" + $.key), $) kt.call($, Pe) && !ft.hasOwnProperty(Pe) && (Ye[Pe] = $[Pe]);
    var Ge = arguments.length - 2;
    if (Ge === 1) Ye.children = De;
    else if (1 < Ge) {
      for (var St = Array(Ge), Vt = 0; Vt < Ge; Vt++) St[Vt] = arguments[Vt + 2];
      Ye.children = St;
    }
    if (b && b.defaultProps) for (Pe in Ge = b.defaultProps, Ge) Ye[Pe] === void 0 && (Ye[Pe] = Ge[Pe]);
    return { $$typeof: X, type: b, key: at, ref: Tt, props: Ye, _owner: Ce.current };
  }
  function Sn(b, $) {
    return { $$typeof: X, type: b.type, key: $, ref: b.ref, props: b.props, _owner: b._owner };
  }
  function Mt(b) {
    return typeof b == "object" && b !== null && b.$$typeof === X;
  }
  function fn(b) {
    var $ = { "=": "=0", ":": "=2" };
    return "$" + b.replace(/[=:]/g, function(De) {
      return $[De];
    });
  }
  var $t = /\/+/g;
  function gt(b, $) {
    return typeof b == "object" && b !== null && b.key != null ? fn("" + b.key) : $.toString(36);
  }
  function Me(b, $, De, Pe, Ye) {
    var at = typeof b;
    (at === "undefined" || at === "boolean") && (b = null);
    var Tt = !1;
    if (b === null) Tt = !0;
    else switch (at) {
      case "string":
      case "number":
        Tt = !0;
        break;
      case "object":
        switch (b.$$typeof) {
          case X:
          case pe:
            Tt = !0;
        }
    }
    if (Tt) return Tt = b, Ye = Ye(Tt), b = Pe === "" ? "." + gt(Tt, 0) : Pe, ze(Ye) ? (De = "", b != null && (De = b.replace($t, "$&/") + "/"), Me(Ye, $, De, "", function(Vt) {
      return Vt;
    })) : Ye != null && (Mt(Ye) && (Ye = Sn(Ye, De + (!Ye.key || Tt && Tt.key === Ye.key ? "" : ("" + Ye.key).replace($t, "$&/") + "/") + b)), $.push(Ye)), 1;
    if (Tt = 0, Pe = Pe === "" ? "." : Pe + ":", ze(b)) for (var Ge = 0; Ge < b.length; Ge++) {
      at = b[Ge];
      var St = Pe + gt(at, Ge);
      Tt += Me(at, $, De, St, Ye);
    }
    else if (St = J(b), typeof St == "function") for (b = St.call(b), Ge = 0; !(at = b.next()).done; ) at = at.value, St = Pe + gt(at, Ge++), Tt += Me(at, $, De, St, Ye);
    else if (at === "object") throw $ = String(b), Error("Objects are not valid as a React child (found: " + ($ === "[object Object]" ? "object with keys {" + Object.keys(b).join(", ") + "}" : $) + "). If you meant to render a collection of children, use an array instead.");
    return Tt;
  }
  function At(b, $, De) {
    if (b == null) return b;
    var Pe = [], Ye = 0;
    return Me(b, Pe, "", "", function(at) {
      return $.call(De, at, Ye++);
    }), Pe;
  }
  function ht(b) {
    if (b._status === -1) {
      var $ = b._result;
      $ = $(), $.then(function(De) {
        (b._status === 0 || b._status === -1) && (b._status = 1, b._result = De);
      }, function(De) {
        (b._status === 0 || b._status === -1) && (b._status = 2, b._result = De);
      }), b._status === -1 && (b._status = 0, b._result = $);
    }
    if (b._status === 1) return b._result.default;
    throw b._result;
  }
  var rt = { current: null }, B = { transition: null }, me = { ReactCurrentDispatcher: rt, ReactCurrentBatchConfig: B, ReactCurrentOwner: Ce };
  function re() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return Ct.Children = { map: At, forEach: function(b, $, De) {
    At(b, function() {
      $.apply(this, arguments);
    }, De);
  }, count: function(b) {
    var $ = 0;
    return At(b, function() {
      $++;
    }), $;
  }, toArray: function(b) {
    return At(b, function($) {
      return $;
    }) || [];
  }, only: function(b) {
    if (!Mt(b)) throw Error("React.Children.only expected to receive a single React element child.");
    return b;
  } }, Ct.Component = ct, Ct.Fragment = A, Ct.Profiler = Rt, Ct.PureComponent = rn, Ct.StrictMode = st, Ct.Suspense = We, Ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = me, Ct.act = re, Ct.cloneElement = function(b, $, De) {
    if (b == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + b + ".");
    var Pe = le({}, b.props), Ye = b.key, at = b.ref, Tt = b._owner;
    if ($ != null) {
      if ($.ref !== void 0 && (at = $.ref, Tt = Ce.current), $.key !== void 0 && (Ye = "" + $.key), b.type && b.type.defaultProps) var Ge = b.type.defaultProps;
      for (St in $) kt.call($, St) && !ft.hasOwnProperty(St) && (Pe[St] = $[St] === void 0 && Ge !== void 0 ? Ge[St] : $[St]);
    }
    var St = arguments.length - 2;
    if (St === 1) Pe.children = De;
    else if (1 < St) {
      Ge = Array(St);
      for (var Vt = 0; Vt < St; Vt++) Ge[Vt] = arguments[Vt + 2];
      Pe.children = Ge;
    }
    return { $$typeof: X, type: b.type, key: Ye, ref: at, props: Pe, _owner: Tt };
  }, Ct.createContext = function(b) {
    return b = { $$typeof: Ne, _currentValue: b, _currentValue2: b, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, b.Provider = { $$typeof: yt, _context: b }, b.Consumer = b;
  }, Ct.createElement = Ve, Ct.createFactory = function(b) {
    var $ = Ve.bind(null, b);
    return $.type = b, $;
  }, Ct.createRef = function() {
    return { current: null };
  }, Ct.forwardRef = function(b) {
    return { $$typeof: S, render: b };
  }, Ct.isValidElement = Mt, Ct.lazy = function(b) {
    return { $$typeof: fe, _payload: { _status: -1, _result: b }, _init: ht };
  }, Ct.memo = function(b, $) {
    return { $$typeof: Te, type: b, compare: $ === void 0 ? null : $ };
  }, Ct.startTransition = function(b) {
    var $ = B.transition;
    B.transition = {};
    try {
      b();
    } finally {
      B.transition = $;
    }
  }, Ct.unstable_act = re, Ct.useCallback = function(b, $) {
    return rt.current.useCallback(b, $);
  }, Ct.useContext = function(b) {
    return rt.current.useContext(b);
  }, Ct.useDebugValue = function() {
  }, Ct.useDeferredValue = function(b) {
    return rt.current.useDeferredValue(b);
  }, Ct.useEffect = function(b, $) {
    return rt.current.useEffect(b, $);
  }, Ct.useId = function() {
    return rt.current.useId();
  }, Ct.useImperativeHandle = function(b, $, De) {
    return rt.current.useImperativeHandle(b, $, De);
  }, Ct.useInsertionEffect = function(b, $) {
    return rt.current.useInsertionEffect(b, $);
  }, Ct.useLayoutEffect = function(b, $) {
    return rt.current.useLayoutEffect(b, $);
  }, Ct.useMemo = function(b, $) {
    return rt.current.useMemo(b, $);
  }, Ct.useReducer = function(b, $, De) {
    return rt.current.useReducer(b, $, De);
  }, Ct.useRef = function(b) {
    return rt.current.useRef(b);
  }, Ct.useState = function(b) {
    return rt.current.useState(b);
  }, Ct.useSyncExternalStore = function(b, $, De) {
    return rt.current.useSyncExternalStore(b, $, De);
  }, Ct.useTransition = function() {
    return rt.current.useTransition();
  }, Ct.version = "18.3.1", Ct;
}
var Zp = { exports: {} };
Zp.exports;
var q0;
function Xb() {
  return q0 || (q0 = 1, function(X, pe) {
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
      var st = "18.3.1", Rt = Symbol.for("react.element"), yt = Symbol.for("react.portal"), Ne = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), We = Symbol.for("react.profiler"), Te = Symbol.for("react.provider"), fe = Symbol.for("react.context"), $e = Symbol.for("react.forward_ref"), J = Symbol.for("react.suspense"), je = Symbol.for("react.suspense_list"), le = Symbol.for("react.memo"), xe = Symbol.for("react.lazy"), ct = Symbol.for("react.offscreen"), Hn = Symbol.iterator, rn = "@@iterator";
      function it(h) {
        if (h === null || typeof h != "object")
          return null;
        var C = Hn && h[Hn] || h[rn];
        return typeof C == "function" ? C : null;
      }
      var ze = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, kt = {
        transition: null
      }, Ce = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, ft = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, Ve = {}, Sn = null;
      function Mt(h) {
        Sn = h;
      }
      Ve.setExtraStackFrame = function(h) {
        Sn = h;
      }, Ve.getCurrentStack = null, Ve.getStackAddendum = function() {
        var h = "";
        Sn && (h += Sn);
        var C = Ve.getCurrentStack;
        return C && (h += C() || ""), h;
      };
      var fn = !1, $t = !1, gt = !1, Me = !1, At = !1, ht = {
        ReactCurrentDispatcher: ze,
        ReactCurrentBatchConfig: kt,
        ReactCurrentOwner: ft
      };
      ht.ReactDebugCurrentFrame = Ve, ht.ReactCurrentActQueue = Ce;
      function rt(h) {
        {
          for (var C = arguments.length, M = new Array(C > 1 ? C - 1 : 0), F = 1; F < C; F++)
            M[F - 1] = arguments[F];
          me("warn", h, M);
        }
      }
      function B(h) {
        {
          for (var C = arguments.length, M = new Array(C > 1 ? C - 1 : 0), F = 1; F < C; F++)
            M[F - 1] = arguments[F];
          me("error", h, M);
        }
      }
      function me(h, C, M) {
        {
          var F = ht.ReactDebugCurrentFrame, q = F.getStackAddendum();
          q !== "" && (C += "%s", M = M.concat([q]));
          var he = M.map(function(oe) {
            return String(oe);
          });
          he.unshift("Warning: " + C), Function.prototype.apply.call(console[h], console, he);
        }
      }
      var re = {};
      function b(h, C) {
        {
          var M = h.constructor, F = M && (M.displayName || M.name) || "ReactClass", q = F + "." + C;
          if (re[q])
            return;
          B("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", C, F), re[q] = !0;
        }
      }
      var $ = {
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
      }, De = Object.assign, Pe = {};
      Object.freeze(Pe);
      function Ye(h, C, M) {
        this.props = h, this.context = C, this.refs = Pe, this.updater = M || $;
      }
      Ye.prototype.isReactComponent = {}, Ye.prototype.setState = function(h, C) {
        if (typeof h != "object" && typeof h != "function" && h != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, h, C, "setState");
      }, Ye.prototype.forceUpdate = function(h) {
        this.updater.enqueueForceUpdate(this, h, "forceUpdate");
      };
      {
        var at = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, Tt = function(h, C) {
          Object.defineProperty(Ye.prototype, h, {
            get: function() {
              rt("%s(...) is deprecated in plain JavaScript React classes. %s", C[0], C[1]);
            }
          });
        };
        for (var Ge in at)
          at.hasOwnProperty(Ge) && Tt(Ge, at[Ge]);
      }
      function St() {
      }
      St.prototype = Ye.prototype;
      function Vt(h, C, M) {
        this.props = h, this.context = C, this.refs = Pe, this.updater = M || $;
      }
      var bn = Vt.prototype = new St();
      bn.constructor = Vt, De(bn, Ye.prototype), bn.isPureReactComponent = !0;
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
      function Vn(h) {
        try {
          return kn(h), !1;
        } catch {
          return !0;
        }
      }
      function kn(h) {
        return "" + h;
      }
      function sa(h) {
        if (Vn(h))
          return B("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Er(h)), kn(h);
      }
      function Wa(h, C, M) {
        var F = h.displayName;
        if (F)
          return F;
        var q = C.displayName || C.name || "";
        return q !== "" ? M + "(" + q + ")" : M;
      }
      function Dr(h) {
        return h.displayName || "Context";
      }
      function Pn(h) {
        if (h == null)
          return null;
        if (typeof h.tag == "number" && B("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof h == "function")
          return h.displayName || h.name || null;
        if (typeof h == "string")
          return h;
        switch (h) {
          case Ne:
            return "Fragment";
          case yt:
            return "Portal";
          case We:
            return "Profiler";
          case S:
            return "StrictMode";
          case J:
            return "Suspense";
          case je:
            return "SuspenseList";
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case fe:
              var C = h;
              return Dr(C) + ".Consumer";
            case Te:
              var M = h;
              return Dr(M._context) + ".Provider";
            case $e:
              return Wa(h, h.render, "ForwardRef");
            case le:
              var F = h.displayName || null;
              return F !== null ? F : Pn(h.type) || "Memo";
            case xe: {
              var q = h, he = q._payload, oe = q._init;
              try {
                return Pn(oe(he));
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
      }, Cr, Ga, On;
      On = {};
      function ar(h) {
        if (Wn.call(h, "ref")) {
          var C = Object.getOwnPropertyDescriptor(h, "ref").get;
          if (C && C.isReactWarning)
            return !1;
        }
        return h.ref !== void 0;
      }
      function Yr(h) {
        if (Wn.call(h, "key")) {
          var C = Object.getOwnPropertyDescriptor(h, "key").get;
          if (C && C.isReactWarning)
            return !1;
        }
        return h.key !== void 0;
      }
      function Oi(h, C) {
        var M = function() {
          Cr || (Cr = !0, B("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        M.isReactWarning = !0, Object.defineProperty(h, "key", {
          get: M,
          configurable: !0
        });
      }
      function ca(h, C) {
        var M = function() {
          Ga || (Ga = !0, B("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        M.isReactWarning = !0, Object.defineProperty(h, "ref", {
          get: M,
          configurable: !0
        });
      }
      function Z(h) {
        if (typeof h.ref == "string" && ft.current && h.__self && ft.current.stateNode !== h.__self) {
          var C = Pn(ft.current.type);
          On[C] || (B('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', C, h.ref), On[C] = !0);
        }
      }
      var Oe = function(h, C, M, F, q, he, oe) {
        var Ae = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: Rt,
          // Built-in properties that belong on the element
          type: h,
          key: C,
          ref: M,
          props: oe,
          // Record the component responsible for creating this element.
          _owner: he
        };
        return Ae._store = {}, Object.defineProperty(Ae._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(Ae, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: F
        }), Object.defineProperty(Ae, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: q
        }), Object.freeze && (Object.freeze(Ae.props), Object.freeze(Ae)), Ae;
      };
      function et(h, C, M) {
        var F, q = {}, he = null, oe = null, Ae = null, nt = null;
        if (C != null) {
          ar(C) && (oe = C.ref, Z(C)), Yr(C) && (sa(C.key), he = "" + C.key), Ae = C.__self === void 0 ? null : C.__self, nt = C.__source === void 0 ? null : C.__source;
          for (F in C)
            Wn.call(C, F) && !Gn.hasOwnProperty(F) && (q[F] = C[F]);
        }
        var Ft = arguments.length - 2;
        if (Ft === 1)
          q.children = M;
        else if (Ft > 1) {
          for (var Qt = Array(Ft), Wt = 0; Wt < Ft; Wt++)
            Qt[Wt] = arguments[Wt + 2];
          Object.freeze && Object.freeze(Qt), q.children = Qt;
        }
        if (h && h.defaultProps) {
          var Ze = h.defaultProps;
          for (F in Ze)
            q[F] === void 0 && (q[F] = Ze[F]);
        }
        if (he || oe) {
          var Zt = typeof h == "function" ? h.displayName || h.name || "Unknown" : h;
          he && Oi(q, Zt), oe && ca(q, Zt);
        }
        return Oe(h, he, oe, Ae, nt, ft.current, q);
      }
      function Nt(h, C) {
        var M = Oe(h.type, C, h.ref, h._self, h._source, h._owner, h.props);
        return M;
      }
      function an(h, C, M) {
        if (h == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + h + ".");
        var F, q = De({}, h.props), he = h.key, oe = h.ref, Ae = h._self, nt = h._source, Ft = h._owner;
        if (C != null) {
          ar(C) && (oe = C.ref, Ft = ft.current), Yr(C) && (sa(C.key), he = "" + C.key);
          var Qt;
          h.type && h.type.defaultProps && (Qt = h.type.defaultProps);
          for (F in C)
            Wn.call(C, F) && !Gn.hasOwnProperty(F) && (C[F] === void 0 && Qt !== void 0 ? q[F] = Qt[F] : q[F] = C[F]);
        }
        var Wt = arguments.length - 2;
        if (Wt === 1)
          q.children = M;
        else if (Wt > 1) {
          for (var Ze = Array(Wt), Zt = 0; Zt < Wt; Zt++)
            Ze[Zt] = arguments[Zt + 2];
          q.children = Ze;
        }
        return Oe(h.type, he, oe, Ae, nt, Ft, q);
      }
      function ln(h) {
        return typeof h == "object" && h !== null && h.$$typeof === Rt;
      }
      var un = ".", Kn = ":";
      function tn(h) {
        var C = /[=:]/g, M = {
          "=": "=0",
          ":": "=2"
        }, F = h.replace(C, function(q) {
          return M[q];
        });
        return "$" + F;
      }
      var Yt = !1, zt = /\/+/g;
      function fa(h) {
        return h.replace(zt, "$&/");
      }
      function _a(h, C) {
        return typeof h == "object" && h !== null && h.key != null ? (sa(h.key), tn("" + h.key)) : C.toString(36);
      }
      function ba(h, C, M, F, q) {
        var he = typeof h;
        (he === "undefined" || he === "boolean") && (h = null);
        var oe = !1;
        if (h === null)
          oe = !0;
        else
          switch (he) {
            case "string":
            case "number":
              oe = !0;
              break;
            case "object":
              switch (h.$$typeof) {
                case Rt:
                case yt:
                  oe = !0;
              }
          }
        if (oe) {
          var Ae = h, nt = q(Ae), Ft = F === "" ? un + _a(Ae, 0) : F;
          if (Dn(nt)) {
            var Qt = "";
            Ft != null && (Qt = fa(Ft) + "/"), ba(nt, C, Qt, "", function(Xf) {
              return Xf;
            });
          } else nt != null && (ln(nt) && (nt.key && (!Ae || Ae.key !== nt.key) && sa(nt.key), nt = Nt(
            nt,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            M + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (nt.key && (!Ae || Ae.key !== nt.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              fa("" + nt.key) + "/"
            ) : "") + Ft
          )), C.push(nt));
          return 1;
        }
        var Wt, Ze, Zt = 0, Cn = F === "" ? un : F + Kn;
        if (Dn(h))
          for (var Jl = 0; Jl < h.length; Jl++)
            Wt = h[Jl], Ze = Cn + _a(Wt, Jl), Zt += ba(Wt, C, M, Ze, q);
        else {
          var Ko = it(h);
          if (typeof Ko == "function") {
            var Vi = h;
            Ko === Vi.entries && (Yt || rt("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Yt = !0);
            for (var eu = Ko.call(Vi), qo, qf = 0; !(qo = eu.next()).done; )
              Wt = qo.value, Ze = Cn + _a(Wt, qf++), Zt += ba(Wt, C, M, Ze, q);
          } else if (he === "object") {
            var oc = String(h);
            throw new Error("Objects are not valid as a React child (found: " + (oc === "[object Object]" ? "object with keys {" + Object.keys(h).join(", ") + "}" : oc) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return Zt;
      }
      function Li(h, C, M) {
        if (h == null)
          return h;
        var F = [], q = 0;
        return ba(h, F, "", "", function(he) {
          return C.call(M, he, q++);
        }), F;
      }
      function Il(h) {
        var C = 0;
        return Li(h, function() {
          C++;
        }), C;
      }
      function Ql(h, C, M) {
        Li(h, function() {
          C.apply(this, arguments);
        }, M);
      }
      function Mi(h) {
        return Li(h, function(C) {
          return C;
        }) || [];
      }
      function Wl(h) {
        if (!ln(h))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return h;
      }
      function oi(h) {
        var C = {
          $$typeof: fe,
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
          $$typeof: Te,
          _context: C
        };
        var M = !1, F = !1, q = !1;
        {
          var he = {
            $$typeof: fe,
            _context: C
          };
          Object.defineProperties(he, {
            Provider: {
              get: function() {
                return F || (F = !0, B("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), C.Provider;
              },
              set: function(oe) {
                C.Provider = oe;
              }
            },
            _currentValue: {
              get: function() {
                return C._currentValue;
              },
              set: function(oe) {
                C._currentValue = oe;
              }
            },
            _currentValue2: {
              get: function() {
                return C._currentValue2;
              },
              set: function(oe) {
                C._currentValue2 = oe;
              }
            },
            _threadCount: {
              get: function() {
                return C._threadCount;
              },
              set: function(oe) {
                C._threadCount = oe;
              }
            },
            Consumer: {
              get: function() {
                return M || (M = !0, B("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), C.Consumer;
              }
            },
            displayName: {
              get: function() {
                return C.displayName;
              },
              set: function(oe) {
                q || (rt("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", oe), q = !0);
              }
            }
          }), C.Consumer = he;
        }
        return C._currentRenderer = null, C._currentRenderer2 = null, C;
      }
      var da = -1, ir = 0, pa = 1, Ir = 2;
      function si(h) {
        if (h._status === da) {
          var C = h._result, M = C();
          if (M.then(function(he) {
            if (h._status === ir || h._status === da) {
              var oe = h;
              oe._status = pa, oe._result = he;
            }
          }, function(he) {
            if (h._status === ir || h._status === da) {
              var oe = h;
              oe._status = Ir, oe._result = he;
            }
          }), h._status === da) {
            var F = h;
            F._status = ir, F._result = M;
          }
        }
        if (h._status === pa) {
          var q = h._result;
          return q === void 0 && B(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, q), "default" in q || B(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, q), q.default;
        } else
          throw h._result;
      }
      function ci(h) {
        var C = {
          // We use these fields to store the result.
          _status: da,
          _result: h
        }, M = {
          $$typeof: xe,
          _payload: C,
          _init: si
        };
        {
          var F, q;
          Object.defineProperties(M, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return F;
              },
              set: function(he) {
                B("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), F = he, Object.defineProperty(M, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return q;
              },
              set: function(he) {
                B("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), q = he, Object.defineProperty(M, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return M;
      }
      function Ni(h) {
        h != null && h.$$typeof === le ? B("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof h != "function" ? B("forwardRef requires a render function but was given %s.", h === null ? "null" : typeof h) : h.length !== 0 && h.length !== 2 && B("forwardRef render functions accept exactly two parameters: props and ref. %s", h.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), h != null && (h.defaultProps != null || h.propTypes != null) && B("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var C = {
          $$typeof: $e,
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
      function Y(h) {
        return !!(typeof h == "string" || typeof h == "function" || h === Ne || h === We || At || h === S || h === J || h === je || Me || h === ct || fn || $t || gt || typeof h == "object" && h !== null && (h.$$typeof === xe || h.$$typeof === le || h.$$typeof === Te || h.$$typeof === fe || h.$$typeof === $e || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        h.$$typeof === R || h.getModuleId !== void 0));
      }
      function ne(h, C) {
        Y(h) || B("memo: The first argument must be a component. Instead received: %s", h === null ? "null" : typeof h);
        var M = {
          $$typeof: le,
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
            set: function(q) {
              F = q, !h.name && !h.displayName && (h.displayName = q);
            }
          });
        }
        return M;
      }
      function ie() {
        var h = ze.current;
        return h === null && B(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), h;
      }
      function lt(h) {
        var C = ie();
        if (h._context !== void 0) {
          var M = h._context;
          M.Consumer === h ? B("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : M.Provider === h && B("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return C.useContext(h);
      }
      function Ie(h) {
        var C = ie();
        return C.useState(h);
      }
      function dt(h, C, M) {
        var F = ie();
        return F.useReducer(h, C, M);
      }
      function tt(h) {
        var C = ie();
        return C.useRef(h);
      }
      function En(h, C) {
        var M = ie();
        return M.useEffect(h, C);
      }
      function nn(h, C) {
        var M = ie();
        return M.useInsertionEffect(h, C);
      }
      function on(h, C) {
        var M = ie();
        return M.useLayoutEffect(h, C);
      }
      function Rr(h, C) {
        var M = ie();
        return M.useCallback(h, C);
      }
      function Ka(h, C) {
        var M = ie();
        return M.useMemo(h, C);
      }
      function Ut(h, C, M) {
        var F = ie();
        return F.useImperativeHandle(h, C, M);
      }
      function dn(h, C) {
        {
          var M = ie();
          return M.useDebugValue(h, C);
        }
      }
      function qe() {
        var h = ie();
        return h.useTransition();
      }
      function fi(h) {
        var C = ie();
        return C.useDeferredValue(h);
      }
      function zi() {
        var h = ie();
        return h.useId();
      }
      function ac(h, C, M) {
        var F = ie();
        return F.useSyncExternalStore(h, C, M);
      }
      var Ui = 0, ul, Qr, $o, kr, Yo, ic, lc;
      function Ai() {
      }
      Ai.__reactDisabledLog = !0;
      function ol() {
        {
          if (Ui === 0) {
            ul = console.log, Qr = console.info, $o = console.warn, kr = console.error, Yo = console.group, ic = console.groupCollapsed, lc = console.groupEnd;
            var h = {
              configurable: !0,
              enumerable: !0,
              value: Ai,
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
          Ui++;
        }
      }
      function Wr() {
        {
          if (Ui--, Ui === 0) {
            var h = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: De({}, h, {
                value: ul
              }),
              info: De({}, h, {
                value: Qr
              }),
              warn: De({}, h, {
                value: $o
              }),
              error: De({}, h, {
                value: kr
              }),
              group: De({}, h, {
                value: Yo
              }),
              groupCollapsed: De({}, h, {
                value: ic
              }),
              groupEnd: De({}, h, {
                value: lc
              })
            });
          }
          Ui < 0 && B("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var di = ht.ReactCurrentDispatcher, sl;
      function ju(h, C, M) {
        {
          if (sl === void 0)
            try {
              throw Error();
            } catch (q) {
              var F = q.stack.trim().match(/\n( *(at )?)/);
              sl = F && F[1] || "";
            }
          return `
` + sl + h;
        }
      }
      var Fi = !1, Gl;
      {
        var Kl = typeof WeakMap == "function" ? WeakMap : Map;
        Gl = new Kl();
      }
      function cl(h, C) {
        if (!h || Fi)
          return "";
        {
          var M = Gl.get(h);
          if (M !== void 0)
            return M;
        }
        var F;
        Fi = !0;
        var q = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var he;
        he = di.current, di.current = null, ol();
        try {
          if (C) {
            var oe = function() {
              throw Error();
            };
            if (Object.defineProperty(oe.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(oe, []);
              } catch (Cn) {
                F = Cn;
              }
              Reflect.construct(h, [], oe);
            } else {
              try {
                oe.call();
              } catch (Cn) {
                F = Cn;
              }
              h.call(oe.prototype);
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
            for (var Ae = Cn.stack.split(`
`), nt = F.stack.split(`
`), Ft = Ae.length - 1, Qt = nt.length - 1; Ft >= 1 && Qt >= 0 && Ae[Ft] !== nt[Qt]; )
              Qt--;
            for (; Ft >= 1 && Qt >= 0; Ft--, Qt--)
              if (Ae[Ft] !== nt[Qt]) {
                if (Ft !== 1 || Qt !== 1)
                  do
                    if (Ft--, Qt--, Qt < 0 || Ae[Ft] !== nt[Qt]) {
                      var Wt = `
` + Ae[Ft].replace(" at new ", " at ");
                      return h.displayName && Wt.includes("<anonymous>") && (Wt = Wt.replace("<anonymous>", h.displayName)), typeof h == "function" && Gl.set(h, Wt), Wt;
                    }
                  while (Ft >= 1 && Qt >= 0);
                break;
              }
          }
        } finally {
          Fi = !1, di.current = he, Wr(), Error.prepareStackTrace = q;
        }
        var Ze = h ? h.displayName || h.name : "", Zt = Ze ? ju(Ze) : "";
        return typeof h == "function" && Gl.set(h, Zt), Zt;
      }
      function Io(h, C, M) {
        return cl(h, !1);
      }
      function Qo(h) {
        var C = h.prototype;
        return !!(C && C.isReactComponent);
      }
      function wt(h, C, M) {
        if (h == null)
          return "";
        if (typeof h == "function")
          return cl(h, Qo(h));
        if (typeof h == "string")
          return ju(h);
        switch (h) {
          case J:
            return ju("Suspense");
          case je:
            return ju("SuspenseList");
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case $e:
              return Io(h.render);
            case le:
              return wt(h.type, C, M);
            case xe: {
              var F = h, q = F._payload, he = F._init;
              try {
                return wt(he(q), C, M);
              } catch {
              }
            }
          }
        return "";
      }
      var Wo = {}, Hu = ht.ReactDebugCurrentFrame;
      function xt(h) {
        if (h) {
          var C = h._owner, M = wt(h.type, h._source, C ? C.type : null);
          Hu.setExtraStackFrame(M);
        } else
          Hu.setExtraStackFrame(null);
      }
      function uc(h, C, M, F, q) {
        {
          var he = Function.call.bind(Wn);
          for (var oe in h)
            if (he(h, oe)) {
              var Ae = void 0;
              try {
                if (typeof h[oe] != "function") {
                  var nt = Error((F || "React class") + ": " + M + " type `" + oe + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof h[oe] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw nt.name = "Invariant Violation", nt;
                }
                Ae = h[oe](C, oe, F, M, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (Ft) {
                Ae = Ft;
              }
              Ae && !(Ae instanceof Error) && (xt(q), B("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", F || "React class", M, oe, typeof Ae), xt(null)), Ae instanceof Error && !(Ae.message in Wo) && (Wo[Ae.message] = !0, xt(q), B("Failed %s type: %s", M, Ae.message), xt(null));
            }
        }
      }
      function pi(h) {
        if (h) {
          var C = h._owner, M = wt(h.type, h._source, C ? C.type : null);
          Mt(M);
        } else
          Mt(null);
      }
      var Be;
      Be = !1;
      function ql() {
        if (ft.current) {
          var h = Pn(ft.current.type);
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
      function Gr(h) {
        return h != null ? qn(h.__source) : "";
      }
      var Or = {};
      function vi(h) {
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
          var M = vi(C);
          if (!Or[M]) {
            Or[M] = !0;
            var F = "";
            h && h._owner && h._owner !== ft.current && (F = " It was passed a child from " + Pn(h._owner.type) + "."), pi(h), B('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', M, F), pi(null);
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
            var q = it(h);
            if (typeof q == "function" && q !== h.entries)
              for (var he = q.call(h), oe; !(oe = he.next()).done; )
                ln(oe.value) && mn(oe.value, C);
          }
        }
      }
      function qa(h) {
        {
          var C = h.type;
          if (C == null || typeof C == "string")
            return;
          var M;
          if (typeof C == "function")
            M = C.propTypes;
          else if (typeof C == "object" && (C.$$typeof === $e || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          C.$$typeof === le))
            M = C.propTypes;
          else
            return;
          if (M) {
            var F = Pn(C);
            uc(M, h.props, "prop", F, h);
          } else if (C.PropTypes !== void 0 && !Be) {
            Be = !0;
            var q = Pn(C);
            B("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", q || "Unknown");
          }
          typeof C.getDefaultProps == "function" && !C.getDefaultProps.isReactClassApproved && B("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Da(h) {
        {
          for (var C = Object.keys(h.props), M = 0; M < C.length; M++) {
            var F = C[M];
            if (F !== "children" && F !== "key") {
              pi(h), B("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", F), pi(null);
              break;
            }
          }
          h.ref !== null && (pi(h), B("Invalid attribute `ref` supplied to `React.Fragment`."), pi(null));
        }
      }
      function Tr(h, C, M) {
        var F = Y(h);
        if (!F) {
          var q = "";
          (h === void 0 || typeof h == "object" && h !== null && Object.keys(h).length === 0) && (q += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var he = Gr(C);
          he ? q += he : q += ql();
          var oe;
          h === null ? oe = "null" : Dn(h) ? oe = "array" : h !== void 0 && h.$$typeof === Rt ? (oe = "<" + (Pn(h.type) || "Unknown") + " />", q = " Did you accidentally export a JSX literal instead of a component?") : oe = typeof h, B("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", oe, q);
        }
        var Ae = et.apply(this, arguments);
        if (Ae == null)
          return Ae;
        if (F)
          for (var nt = 2; nt < arguments.length; nt++)
            It(arguments[nt], h);
        return h === Ne ? Da(Ae) : qa(Ae), Ae;
      }
      var Lr = !1;
      function Kf(h) {
        var C = Tr.bind(null, h);
        return C.type = h, Lr || (Lr = !0, rt("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(C, "type", {
          enumerable: !1,
          get: function() {
            return rt("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: h
            }), h;
          }
        }), C;
      }
      function Vu(h, C, M) {
        for (var F = an.apply(this, arguments), q = 2; q < arguments.length; q++)
          It(arguments[q], F.type);
        return qa(F), F;
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
            var q = F._updatedFibers.size;
            q > 10 && rt("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), F._updatedFibers.clear();
          }
        }
      }
      var Pu = !1, Bu = null;
      function Zl(h) {
        if (Bu === null)
          try {
            var C = ("require" + Math.random()).slice(0, 7), M = X && X[C];
            Bu = M.call(X, "timers").setImmediate;
          } catch {
            Bu = function(q) {
              Pu === !1 && (Pu = !0, typeof MessageChannel > "u" && B("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var he = new MessageChannel();
              he.port1.onmessage = q, he.port2.postMessage(void 0);
            };
          }
        return Bu(h);
      }
      var ka = 0, Oa = !1;
      function fl(h) {
        {
          var C = ka;
          ka++, Ce.current === null && (Ce.current = []);
          var M = Ce.isBatchingLegacy, F;
          try {
            if (Ce.isBatchingLegacy = !0, F = h(), !M && Ce.didScheduleLegacyUpdate) {
              var q = Ce.current;
              q !== null && (Ce.didScheduleLegacyUpdate = !1, Hi(q));
            }
          } catch (Ze) {
            throw ji(C), Ze;
          } finally {
            Ce.isBatchingLegacy = M;
          }
          if (F !== null && typeof F == "object" && typeof F.then == "function") {
            var he = F, oe = !1, Ae = {
              then: function(Ze, Zt) {
                oe = !0, he.then(function(Cn) {
                  ji(C), ka === 0 ? $u(Cn, Ze, Zt) : Ze(Cn);
                }, function(Cn) {
                  ji(C), Zt(Cn);
                });
              }
            };
            return !Oa && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              oe || (Oa = !0, B("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), Ae;
          } else {
            var nt = F;
            if (ji(C), ka === 0) {
              var Ft = Ce.current;
              Ft !== null && (Hi(Ft), Ce.current = null);
              var Qt = {
                then: function(Ze, Zt) {
                  Ce.current === null ? (Ce.current = [], $u(nt, Ze, Zt)) : Ze(nt);
                }
              };
              return Qt;
            } else {
              var Wt = {
                then: function(Ze, Zt) {
                  Ze(nt);
                }
              };
              return Wt;
            }
          }
        }
      }
      function ji(h) {
        h !== ka - 1 && B("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), ka = h;
      }
      function $u(h, C, M) {
        {
          var F = Ce.current;
          if (F !== null)
            try {
              Hi(F), Zl(function() {
                F.length === 0 ? (Ce.current = null, C(h)) : $u(h, C, M);
              });
            } catch (q) {
              M(q);
            }
          else
            C(h);
        }
      }
      var dl = !1;
      function Hi(h) {
        if (!dl) {
          dl = !0;
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
            dl = !1;
          }
        }
      }
      var Yu = Tr, Go = Vu, La = Kf, Iu = {
        map: Li,
        forEach: Ql,
        count: Il,
        toArray: Mi,
        only: Wl
      };
      pe.Children = Iu, pe.Component = Ye, pe.Fragment = Ne, pe.Profiler = We, pe.PureComponent = Vt, pe.StrictMode = S, pe.Suspense = J, pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ht, pe.act = fl, pe.cloneElement = Go, pe.createContext = oi, pe.createElement = Yu, pe.createFactory = La, pe.createRef = Qn, pe.forwardRef = Ni, pe.isValidElement = ln, pe.lazy = ci, pe.memo = ne, pe.startTransition = Xl, pe.unstable_act = fl, pe.useCallback = Rr, pe.useContext = lt, pe.useDebugValue = dn, pe.useDeferredValue = fi, pe.useEffect = En, pe.useId = zi, pe.useImperativeHandle = Ut, pe.useInsertionEffect = nn, pe.useLayoutEffect = on, pe.useMemo = Ka, pe.useReducer = dt, pe.useRef = tt, pe.useState = Ie, pe.useSyncExternalStore = ac, pe.useTransition = qe, pe.version = st, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Zp, Zp.exports)), Zp.exports;
}
var Zb = {};
Zb.NODE_ENV === "production" ? fE.exports = qb() : fE.exports = Xb();
var Yl = fE.exports;
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
function Jb() {
  if (X0) return qp;
  X0 = 1;
  var X = Yl, pe = Symbol.for("react.element"), A = Symbol.for("react.fragment"), st = Object.prototype.hasOwnProperty, Rt = X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, yt = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Ne(S, We, Te) {
    var fe, $e = {}, J = null, je = null;
    Te !== void 0 && (J = "" + Te), We.key !== void 0 && (J = "" + We.key), We.ref !== void 0 && (je = We.ref);
    for (fe in We) st.call(We, fe) && !yt.hasOwnProperty(fe) && ($e[fe] = We[fe]);
    if (S && S.defaultProps) for (fe in We = S.defaultProps, We) $e[fe] === void 0 && ($e[fe] = We[fe]);
    return { $$typeof: pe, type: S, key: J, ref: je, props: $e, _owner: Rt.current };
  }
  return qp.Fragment = A, qp.jsx = Ne, qp.jsxs = Ne, qp;
}
var Xp = {}, Z0;
function eD() {
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
    var pe = Yl, A = Symbol.for("react.element"), st = Symbol.for("react.portal"), Rt = Symbol.for("react.fragment"), yt = Symbol.for("react.strict_mode"), Ne = Symbol.for("react.profiler"), S = Symbol.for("react.provider"), We = Symbol.for("react.context"), Te = Symbol.for("react.forward_ref"), fe = Symbol.for("react.suspense"), $e = Symbol.for("react.suspense_list"), J = Symbol.for("react.memo"), je = Symbol.for("react.lazy"), le = Symbol.for("react.offscreen"), xe = Symbol.iterator, ct = "@@iterator";
    function Hn(R) {
      if (R === null || typeof R != "object")
        return null;
      var Y = xe && R[xe] || R[ct];
      return typeof Y == "function" ? Y : null;
    }
    var rn = pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function it(R) {
      {
        for (var Y = arguments.length, ne = new Array(Y > 1 ? Y - 1 : 0), ie = 1; ie < Y; ie++)
          ne[ie - 1] = arguments[ie];
        ze("error", R, ne);
      }
    }
    function ze(R, Y, ne) {
      {
        var ie = rn.ReactDebugCurrentFrame, lt = ie.getStackAddendum();
        lt !== "" && (Y += "%s", ne = ne.concat([lt]));
        var Ie = ne.map(function(dt) {
          return String(dt);
        });
        Ie.unshift("Warning: " + Y), Function.prototype.apply.call(console[R], console, Ie);
      }
    }
    var kt = !1, Ce = !1, ft = !1, Ve = !1, Sn = !1, Mt;
    Mt = Symbol.for("react.module.reference");
    function fn(R) {
      return !!(typeof R == "string" || typeof R == "function" || R === Rt || R === Ne || Sn || R === yt || R === fe || R === $e || Ve || R === le || kt || Ce || ft || typeof R == "object" && R !== null && (R.$$typeof === je || R.$$typeof === J || R.$$typeof === S || R.$$typeof === We || R.$$typeof === Te || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      R.$$typeof === Mt || R.getModuleId !== void 0));
    }
    function $t(R, Y, ne) {
      var ie = R.displayName;
      if (ie)
        return ie;
      var lt = Y.displayName || Y.name || "";
      return lt !== "" ? ne + "(" + lt + ")" : ne;
    }
    function gt(R) {
      return R.displayName || "Context";
    }
    function Me(R) {
      if (R == null)
        return null;
      if (typeof R.tag == "number" && it("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof R == "function")
        return R.displayName || R.name || null;
      if (typeof R == "string")
        return R;
      switch (R) {
        case Rt:
          return "Fragment";
        case st:
          return "Portal";
        case Ne:
          return "Profiler";
        case yt:
          return "StrictMode";
        case fe:
          return "Suspense";
        case $e:
          return "SuspenseList";
      }
      if (typeof R == "object")
        switch (R.$$typeof) {
          case We:
            var Y = R;
            return gt(Y) + ".Consumer";
          case S:
            var ne = R;
            return gt(ne._context) + ".Provider";
          case Te:
            return $t(R, R.render, "ForwardRef");
          case J:
            var ie = R.displayName || null;
            return ie !== null ? ie : Me(R.type) || "Memo";
          case je: {
            var lt = R, Ie = lt._payload, dt = lt._init;
            try {
              return Me(dt(Ie));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var At = Object.assign, ht = 0, rt, B, me, re, b, $, De;
    function Pe() {
    }
    Pe.__reactDisabledLog = !0;
    function Ye() {
      {
        if (ht === 0) {
          rt = console.log, B = console.info, me = console.warn, re = console.error, b = console.group, $ = console.groupCollapsed, De = console.groupEnd;
          var R = {
            configurable: !0,
            enumerable: !0,
            value: Pe,
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
        ht++;
      }
    }
    function at() {
      {
        if (ht--, ht === 0) {
          var R = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: At({}, R, {
              value: rt
            }),
            info: At({}, R, {
              value: B
            }),
            warn: At({}, R, {
              value: me
            }),
            error: At({}, R, {
              value: re
            }),
            group: At({}, R, {
              value: b
            }),
            groupCollapsed: At({}, R, {
              value: $
            }),
            groupEnd: At({}, R, {
              value: De
            })
          });
        }
        ht < 0 && it("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Tt = rn.ReactCurrentDispatcher, Ge;
    function St(R, Y, ne) {
      {
        if (Ge === void 0)
          try {
            throw Error();
          } catch (lt) {
            var ie = lt.stack.trim().match(/\n( *(at )?)/);
            Ge = ie && ie[1] || "";
          }
        return `
` + Ge + R;
      }
    }
    var Vt = !1, bn;
    {
      var Qn = typeof WeakMap == "function" ? WeakMap : Map;
      bn = new Qn();
    }
    function rr(R, Y) {
      if (!R || Vt)
        return "";
      {
        var ne = bn.get(R);
        if (ne !== void 0)
          return ne;
      }
      var ie;
      Vt = !0;
      var lt = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Ie;
      Ie = Tt.current, Tt.current = null, Ye();
      try {
        if (Y) {
          var dt = function() {
            throw Error();
          };
          if (Object.defineProperty(dt.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(dt, []);
            } catch (dn) {
              ie = dn;
            }
            Reflect.construct(R, [], dt);
          } else {
            try {
              dt.call();
            } catch (dn) {
              ie = dn;
            }
            R.call(dt.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (dn) {
            ie = dn;
          }
          R();
        }
      } catch (dn) {
        if (dn && ie && typeof dn.stack == "string") {
          for (var tt = dn.stack.split(`
`), En = ie.stack.split(`
`), nn = tt.length - 1, on = En.length - 1; nn >= 1 && on >= 0 && tt[nn] !== En[on]; )
            on--;
          for (; nn >= 1 && on >= 0; nn--, on--)
            if (tt[nn] !== En[on]) {
              if (nn !== 1 || on !== 1)
                do
                  if (nn--, on--, on < 0 || tt[nn] !== En[on]) {
                    var Rr = `
` + tt[nn].replace(" at new ", " at ");
                    return R.displayName && Rr.includes("<anonymous>") && (Rr = Rr.replace("<anonymous>", R.displayName)), typeof R == "function" && bn.set(R, Rr), Rr;
                  }
                while (nn >= 1 && on >= 0);
              break;
            }
        }
      } finally {
        Vt = !1, Tt.current = Ie, at(), Error.prepareStackTrace = lt;
      }
      var Ka = R ? R.displayName || R.name : "", Ut = Ka ? St(Ka) : "";
      return typeof R == "function" && bn.set(R, Ut), Ut;
    }
    function Dn(R, Y, ne) {
      return rr(R, !1);
    }
    function Er(R) {
      var Y = R.prototype;
      return !!(Y && Y.isReactComponent);
    }
    function Vn(R, Y, ne) {
      if (R == null)
        return "";
      if (typeof R == "function")
        return rr(R, Er(R));
      if (typeof R == "string")
        return St(R);
      switch (R) {
        case fe:
          return St("Suspense");
        case $e:
          return St("SuspenseList");
      }
      if (typeof R == "object")
        switch (R.$$typeof) {
          case Te:
            return Dn(R.render);
          case J:
            return Vn(R.type, Y, ne);
          case je: {
            var ie = R, lt = ie._payload, Ie = ie._init;
            try {
              return Vn(Ie(lt), Y, ne);
            } catch {
            }
          }
        }
      return "";
    }
    var kn = Object.prototype.hasOwnProperty, sa = {}, Wa = rn.ReactDebugCurrentFrame;
    function Dr(R) {
      if (R) {
        var Y = R._owner, ne = Vn(R.type, R._source, Y ? Y.type : null);
        Wa.setExtraStackFrame(ne);
      } else
        Wa.setExtraStackFrame(null);
    }
    function Pn(R, Y, ne, ie, lt) {
      {
        var Ie = Function.call.bind(kn);
        for (var dt in R)
          if (Ie(R, dt)) {
            var tt = void 0;
            try {
              if (typeof R[dt] != "function") {
                var En = Error((ie || "React class") + ": " + ne + " type `" + dt + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof R[dt] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw En.name = "Invariant Violation", En;
              }
              tt = R[dt](Y, dt, ie, ne, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (nn) {
              tt = nn;
            }
            tt && !(tt instanceof Error) && (Dr(lt), it("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", ie || "React class", ne, dt, typeof tt), Dr(null)), tt instanceof Error && !(tt.message in sa) && (sa[tt.message] = !0, Dr(lt), it("Failed %s type: %s", ne, tt.message), Dr(null));
          }
      }
    }
    var Wn = Array.isArray;
    function Gn(R) {
      return Wn(R);
    }
    function Cr(R) {
      {
        var Y = typeof Symbol == "function" && Symbol.toStringTag, ne = Y && R[Symbol.toStringTag] || R.constructor.name || "Object";
        return ne;
      }
    }
    function Ga(R) {
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
      if (Ga(R))
        return it("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Cr(R)), On(R);
    }
    var Yr = rn.ReactCurrentOwner, Oi = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ca, Z;
    function Oe(R) {
      if (kn.call(R, "ref")) {
        var Y = Object.getOwnPropertyDescriptor(R, "ref").get;
        if (Y && Y.isReactWarning)
          return !1;
      }
      return R.ref !== void 0;
    }
    function et(R) {
      if (kn.call(R, "key")) {
        var Y = Object.getOwnPropertyDescriptor(R, "key").get;
        if (Y && Y.isReactWarning)
          return !1;
      }
      return R.key !== void 0;
    }
    function Nt(R, Y) {
      typeof R.ref == "string" && Yr.current;
    }
    function an(R, Y) {
      {
        var ne = function() {
          ca || (ca = !0, it("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", Y));
        };
        ne.isReactWarning = !0, Object.defineProperty(R, "key", {
          get: ne,
          configurable: !0
        });
      }
    }
    function ln(R, Y) {
      {
        var ne = function() {
          Z || (Z = !0, it("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", Y));
        };
        ne.isReactWarning = !0, Object.defineProperty(R, "ref", {
          get: ne,
          configurable: !0
        });
      }
    }
    var un = function(R, Y, ne, ie, lt, Ie, dt) {
      var tt = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: A,
        // Built-in properties that belong on the element
        type: R,
        key: Y,
        ref: ne,
        props: dt,
        // Record the component responsible for creating this element.
        _owner: Ie
      };
      return tt._store = {}, Object.defineProperty(tt._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(tt, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ie
      }), Object.defineProperty(tt, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: lt
      }), Object.freeze && (Object.freeze(tt.props), Object.freeze(tt)), tt;
    };
    function Kn(R, Y, ne, ie, lt) {
      {
        var Ie, dt = {}, tt = null, En = null;
        ne !== void 0 && (ar(ne), tt = "" + ne), et(Y) && (ar(Y.key), tt = "" + Y.key), Oe(Y) && (En = Y.ref, Nt(Y, lt));
        for (Ie in Y)
          kn.call(Y, Ie) && !Oi.hasOwnProperty(Ie) && (dt[Ie] = Y[Ie]);
        if (R && R.defaultProps) {
          var nn = R.defaultProps;
          for (Ie in nn)
            dt[Ie] === void 0 && (dt[Ie] = nn[Ie]);
        }
        if (tt || En) {
          var on = typeof R == "function" ? R.displayName || R.name || "Unknown" : R;
          tt && an(dt, on), En && ln(dt, on);
        }
        return un(R, tt, En, lt, ie, Yr.current, dt);
      }
    }
    var tn = rn.ReactCurrentOwner, Yt = rn.ReactDebugCurrentFrame;
    function zt(R) {
      if (R) {
        var Y = R._owner, ne = Vn(R.type, R._source, Y ? Y.type : null);
        Yt.setExtraStackFrame(ne);
      } else
        Yt.setExtraStackFrame(null);
    }
    var fa;
    fa = !1;
    function _a(R) {
      return typeof R == "object" && R !== null && R.$$typeof === A;
    }
    function ba() {
      {
        if (tn.current) {
          var R = Me(tn.current.type);
          if (R)
            return `

Check the render method of \`` + R + "`.";
        }
        return "";
      }
    }
    function Li(R) {
      return "";
    }
    var Il = {};
    function Ql(R) {
      {
        var Y = ba();
        if (!Y) {
          var ne = typeof R == "string" ? R : R.displayName || R.name;
          ne && (Y = `

Check the top-level render call using <` + ne + ">.");
        }
        return Y;
      }
    }
    function Mi(R, Y) {
      {
        if (!R._store || R._store.validated || R.key != null)
          return;
        R._store.validated = !0;
        var ne = Ql(Y);
        if (Il[ne])
          return;
        Il[ne] = !0;
        var ie = "";
        R && R._owner && R._owner !== tn.current && (ie = " It was passed a child from " + Me(R._owner.type) + "."), zt(R), it('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', ne, ie), zt(null);
      }
    }
    function Wl(R, Y) {
      {
        if (typeof R != "object")
          return;
        if (Gn(R))
          for (var ne = 0; ne < R.length; ne++) {
            var ie = R[ne];
            _a(ie) && Mi(ie, Y);
          }
        else if (_a(R))
          R._store && (R._store.validated = !0);
        else if (R) {
          var lt = Hn(R);
          if (typeof lt == "function" && lt !== R.entries)
            for (var Ie = lt.call(R), dt; !(dt = Ie.next()).done; )
              _a(dt.value) && Mi(dt.value, Y);
        }
      }
    }
    function oi(R) {
      {
        var Y = R.type;
        if (Y == null || typeof Y == "string")
          return;
        var ne;
        if (typeof Y == "function")
          ne = Y.propTypes;
        else if (typeof Y == "object" && (Y.$$typeof === Te || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        Y.$$typeof === J))
          ne = Y.propTypes;
        else
          return;
        if (ne) {
          var ie = Me(Y);
          Pn(ne, R.props, "prop", ie, R);
        } else if (Y.PropTypes !== void 0 && !fa) {
          fa = !0;
          var lt = Me(Y);
          it("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", lt || "Unknown");
        }
        typeof Y.getDefaultProps == "function" && !Y.getDefaultProps.isReactClassApproved && it("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function da(R) {
      {
        for (var Y = Object.keys(R.props), ne = 0; ne < Y.length; ne++) {
          var ie = Y[ne];
          if (ie !== "children" && ie !== "key") {
            zt(R), it("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", ie), zt(null);
            break;
          }
        }
        R.ref !== null && (zt(R), it("Invalid attribute `ref` supplied to `React.Fragment`."), zt(null));
      }
    }
    var ir = {};
    function pa(R, Y, ne, ie, lt, Ie) {
      {
        var dt = fn(R);
        if (!dt) {
          var tt = "";
          (R === void 0 || typeof R == "object" && R !== null && Object.keys(R).length === 0) && (tt += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var En = Li();
          En ? tt += En : tt += ba();
          var nn;
          R === null ? nn = "null" : Gn(R) ? nn = "array" : R !== void 0 && R.$$typeof === A ? (nn = "<" + (Me(R.type) || "Unknown") + " />", tt = " Did you accidentally export a JSX literal instead of a component?") : nn = typeof R, it("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", nn, tt);
        }
        var on = Kn(R, Y, ne, lt, Ie);
        if (on == null)
          return on;
        if (dt) {
          var Rr = Y.children;
          if (Rr !== void 0)
            if (ie)
              if (Gn(Rr)) {
                for (var Ka = 0; Ka < Rr.length; Ka++)
                  Wl(Rr[Ka], R);
                Object.freeze && Object.freeze(Rr);
              } else
                it("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Wl(Rr, R);
        }
        if (kn.call(Y, "key")) {
          var Ut = Me(R), dn = Object.keys(Y).filter(function(zi) {
            return zi !== "key";
          }), qe = dn.length > 0 ? "{key: someKey, " + dn.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!ir[Ut + qe]) {
            var fi = dn.length > 0 ? "{" + dn.join(": ..., ") + ": ...}" : "{}";
            it(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, qe, Ut, fi, Ut), ir[Ut + qe] = !0;
          }
        }
        return R === Rt ? da(on) : oi(on), on;
      }
    }
    function Ir(R, Y, ne) {
      return pa(R, Y, ne, !0);
    }
    function si(R, Y, ne) {
      return pa(R, Y, ne, !1);
    }
    var ci = si, Ni = Ir;
    Xp.Fragment = Rt, Xp.jsx = ci, Xp.jsxs = Ni;
  }(), Xp;
}
var tD = {};
tD.NODE_ENV === "production" ? cE.exports = Jb() : cE.exports = eD();
var Sr = cE.exports, dE = { exports: {} }, Ia = {}, Bm = { exports: {} }, oE = {};
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
function nD() {
  return J0 || (J0 = 1, function(X) {
    function pe(B, me) {
      var re = B.length;
      B.push(me);
      e: for (; 0 < re; ) {
        var b = re - 1 >>> 1, $ = B[b];
        if (0 < Rt($, me)) B[b] = me, B[re] = $, re = b;
        else break e;
      }
    }
    function A(B) {
      return B.length === 0 ? null : B[0];
    }
    function st(B) {
      if (B.length === 0) return null;
      var me = B[0], re = B.pop();
      if (re !== me) {
        B[0] = re;
        e: for (var b = 0, $ = B.length, De = $ >>> 1; b < De; ) {
          var Pe = 2 * (b + 1) - 1, Ye = B[Pe], at = Pe + 1, Tt = B[at];
          if (0 > Rt(Ye, re)) at < $ && 0 > Rt(Tt, Ye) ? (B[b] = Tt, B[at] = re, b = at) : (B[b] = Ye, B[Pe] = re, b = Pe);
          else if (at < $ && 0 > Rt(Tt, re)) B[b] = Tt, B[at] = re, b = at;
          else break e;
        }
      }
      return me;
    }
    function Rt(B, me) {
      var re = B.sortIndex - me.sortIndex;
      return re !== 0 ? re : B.id - me.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var yt = performance;
      X.unstable_now = function() {
        return yt.now();
      };
    } else {
      var Ne = Date, S = Ne.now();
      X.unstable_now = function() {
        return Ne.now() - S;
      };
    }
    var We = [], Te = [], fe = 1, $e = null, J = 3, je = !1, le = !1, xe = !1, ct = typeof setTimeout == "function" ? setTimeout : null, Hn = typeof clearTimeout == "function" ? clearTimeout : null, rn = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function it(B) {
      for (var me = A(Te); me !== null; ) {
        if (me.callback === null) st(Te);
        else if (me.startTime <= B) st(Te), me.sortIndex = me.expirationTime, pe(We, me);
        else break;
        me = A(Te);
      }
    }
    function ze(B) {
      if (xe = !1, it(B), !le) if (A(We) !== null) le = !0, ht(kt);
      else {
        var me = A(Te);
        me !== null && rt(ze, me.startTime - B);
      }
    }
    function kt(B, me) {
      le = !1, xe && (xe = !1, Hn(Ve), Ve = -1), je = !0;
      var re = J;
      try {
        for (it(me), $e = A(We); $e !== null && (!($e.expirationTime > me) || B && !fn()); ) {
          var b = $e.callback;
          if (typeof b == "function") {
            $e.callback = null, J = $e.priorityLevel;
            var $ = b($e.expirationTime <= me);
            me = X.unstable_now(), typeof $ == "function" ? $e.callback = $ : $e === A(We) && st(We), it(me);
          } else st(We);
          $e = A(We);
        }
        if ($e !== null) var De = !0;
        else {
          var Pe = A(Te);
          Pe !== null && rt(ze, Pe.startTime - me), De = !1;
        }
        return De;
      } finally {
        $e = null, J = re, je = !1;
      }
    }
    var Ce = !1, ft = null, Ve = -1, Sn = 5, Mt = -1;
    function fn() {
      return !(X.unstable_now() - Mt < Sn);
    }
    function $t() {
      if (ft !== null) {
        var B = X.unstable_now();
        Mt = B;
        var me = !0;
        try {
          me = ft(!0, B);
        } finally {
          me ? gt() : (Ce = !1, ft = null);
        }
      } else Ce = !1;
    }
    var gt;
    if (typeof rn == "function") gt = function() {
      rn($t);
    };
    else if (typeof MessageChannel < "u") {
      var Me = new MessageChannel(), At = Me.port2;
      Me.port1.onmessage = $t, gt = function() {
        At.postMessage(null);
      };
    } else gt = function() {
      ct($t, 0);
    };
    function ht(B) {
      ft = B, Ce || (Ce = !0, gt());
    }
    function rt(B, me) {
      Ve = ct(function() {
        B(X.unstable_now());
      }, me);
    }
    X.unstable_IdlePriority = 5, X.unstable_ImmediatePriority = 1, X.unstable_LowPriority = 4, X.unstable_NormalPriority = 3, X.unstable_Profiling = null, X.unstable_UserBlockingPriority = 2, X.unstable_cancelCallback = function(B) {
      B.callback = null;
    }, X.unstable_continueExecution = function() {
      le || je || (le = !0, ht(kt));
    }, X.unstable_forceFrameRate = function(B) {
      0 > B || 125 < B ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Sn = 0 < B ? Math.floor(1e3 / B) : 5;
    }, X.unstable_getCurrentPriorityLevel = function() {
      return J;
    }, X.unstable_getFirstCallbackNode = function() {
      return A(We);
    }, X.unstable_next = function(B) {
      switch (J) {
        case 1:
        case 2:
        case 3:
          var me = 3;
          break;
        default:
          me = J;
      }
      var re = J;
      J = me;
      try {
        return B();
      } finally {
        J = re;
      }
    }, X.unstable_pauseExecution = function() {
    }, X.unstable_requestPaint = function() {
    }, X.unstable_runWithPriority = function(B, me) {
      switch (B) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          B = 3;
      }
      var re = J;
      J = B;
      try {
        return me();
      } finally {
        J = re;
      }
    }, X.unstable_scheduleCallback = function(B, me, re) {
      var b = X.unstable_now();
      switch (typeof re == "object" && re !== null ? (re = re.delay, re = typeof re == "number" && 0 < re ? b + re : b) : re = b, B) {
        case 1:
          var $ = -1;
          break;
        case 2:
          $ = 250;
          break;
        case 5:
          $ = 1073741823;
          break;
        case 4:
          $ = 1e4;
          break;
        default:
          $ = 5e3;
      }
      return $ = re + $, B = { id: fe++, callback: me, priorityLevel: B, startTime: re, expirationTime: $, sortIndex: -1 }, re > b ? (B.sortIndex = re, pe(Te, B), A(We) === null && B === A(Te) && (xe ? (Hn(Ve), Ve = -1) : xe = !0, rt(ze, re - b))) : (B.sortIndex = $, pe(We, B), le || je || (le = !0, ht(kt))), B;
    }, X.unstable_shouldYield = fn, X.unstable_wrapCallback = function(B) {
      var me = J;
      return function() {
        var re = J;
        J = me;
        try {
          return B.apply(this, arguments);
        } finally {
          J = re;
        }
      };
    };
  }(oE)), oE;
}
var sE = {}, eT;
function rD() {
  return eT || (eT = 1, function(X) {
    var pe = {};
    /**
     * @license React
     * scheduler.development.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    pe.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var A = !1, st = 5;
      function Rt(Z, Oe) {
        var et = Z.length;
        Z.push(Oe), S(Z, Oe, et);
      }
      function yt(Z) {
        return Z.length === 0 ? null : Z[0];
      }
      function Ne(Z) {
        if (Z.length === 0)
          return null;
        var Oe = Z[0], et = Z.pop();
        return et !== Oe && (Z[0] = et, We(Z, et, 0)), Oe;
      }
      function S(Z, Oe, et) {
        for (var Nt = et; Nt > 0; ) {
          var an = Nt - 1 >>> 1, ln = Z[an];
          if (Te(ln, Oe) > 0)
            Z[an] = Oe, Z[Nt] = ln, Nt = an;
          else
            return;
        }
      }
      function We(Z, Oe, et) {
        for (var Nt = et, an = Z.length, ln = an >>> 1; Nt < ln; ) {
          var un = (Nt + 1) * 2 - 1, Kn = Z[un], tn = un + 1, Yt = Z[tn];
          if (Te(Kn, Oe) < 0)
            tn < an && Te(Yt, Kn) < 0 ? (Z[Nt] = Yt, Z[tn] = Oe, Nt = tn) : (Z[Nt] = Kn, Z[un] = Oe, Nt = un);
          else if (tn < an && Te(Yt, Oe) < 0)
            Z[Nt] = Yt, Z[tn] = Oe, Nt = tn;
          else
            return;
        }
      }
      function Te(Z, Oe) {
        var et = Z.sortIndex - Oe.sortIndex;
        return et !== 0 ? et : Z.id - Oe.id;
      }
      var fe = 1, $e = 2, J = 3, je = 4, le = 5;
      function xe(Z, Oe) {
      }
      var ct = typeof performance == "object" && typeof performance.now == "function";
      if (ct) {
        var Hn = performance;
        X.unstable_now = function() {
          return Hn.now();
        };
      } else {
        var rn = Date, it = rn.now();
        X.unstable_now = function() {
          return rn.now() - it;
        };
      }
      var ze = 1073741823, kt = -1, Ce = 250, ft = 5e3, Ve = 1e4, Sn = ze, Mt = [], fn = [], $t = 1, gt = null, Me = J, At = !1, ht = !1, rt = !1, B = typeof setTimeout == "function" ? setTimeout : null, me = typeof clearTimeout == "function" ? clearTimeout : null, re = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function b(Z) {
        for (var Oe = yt(fn); Oe !== null; ) {
          if (Oe.callback === null)
            Ne(fn);
          else if (Oe.startTime <= Z)
            Ne(fn), Oe.sortIndex = Oe.expirationTime, Rt(Mt, Oe);
          else
            return;
          Oe = yt(fn);
        }
      }
      function $(Z) {
        if (rt = !1, b(Z), !ht)
          if (yt(Mt) !== null)
            ht = !0, On(De);
          else {
            var Oe = yt(fn);
            Oe !== null && ar($, Oe.startTime - Z);
          }
      }
      function De(Z, Oe) {
        ht = !1, rt && (rt = !1, Yr()), At = !0;
        var et = Me;
        try {
          var Nt;
          if (!A) return Pe(Z, Oe);
        } finally {
          gt = null, Me = et, At = !1;
        }
      }
      function Pe(Z, Oe) {
        var et = Oe;
        for (b(et), gt = yt(Mt); gt !== null && !(gt.expirationTime > et && (!Z || Wa())); ) {
          var Nt = gt.callback;
          if (typeof Nt == "function") {
            gt.callback = null, Me = gt.priorityLevel;
            var an = gt.expirationTime <= et, ln = Nt(an);
            et = X.unstable_now(), typeof ln == "function" ? gt.callback = ln : gt === yt(Mt) && Ne(Mt), b(et);
          } else
            Ne(Mt);
          gt = yt(Mt);
        }
        if (gt !== null)
          return !0;
        var un = yt(fn);
        return un !== null && ar($, un.startTime - et), !1;
      }
      function Ye(Z, Oe) {
        switch (Z) {
          case fe:
          case $e:
          case J:
          case je:
          case le:
            break;
          default:
            Z = J;
        }
        var et = Me;
        Me = Z;
        try {
          return Oe();
        } finally {
          Me = et;
        }
      }
      function at(Z) {
        var Oe;
        switch (Me) {
          case fe:
          case $e:
          case J:
            Oe = J;
            break;
          default:
            Oe = Me;
            break;
        }
        var et = Me;
        Me = Oe;
        try {
          return Z();
        } finally {
          Me = et;
        }
      }
      function Tt(Z) {
        var Oe = Me;
        return function() {
          var et = Me;
          Me = Oe;
          try {
            return Z.apply(this, arguments);
          } finally {
            Me = et;
          }
        };
      }
      function Ge(Z, Oe, et) {
        var Nt = X.unstable_now(), an;
        if (typeof et == "object" && et !== null) {
          var ln = et.delay;
          typeof ln == "number" && ln > 0 ? an = Nt + ln : an = Nt;
        } else
          an = Nt;
        var un;
        switch (Z) {
          case fe:
            un = kt;
            break;
          case $e:
            un = Ce;
            break;
          case le:
            un = Sn;
            break;
          case je:
            un = Ve;
            break;
          case J:
          default:
            un = ft;
            break;
        }
        var Kn = an + un, tn = {
          id: $t++,
          callback: Oe,
          priorityLevel: Z,
          startTime: an,
          expirationTime: Kn,
          sortIndex: -1
        };
        return an > Nt ? (tn.sortIndex = an, Rt(fn, tn), yt(Mt) === null && tn === yt(fn) && (rt ? Yr() : rt = !0, ar($, an - Nt))) : (tn.sortIndex = Kn, Rt(Mt, tn), !ht && !At && (ht = !0, On(De))), tn;
      }
      function St() {
      }
      function Vt() {
        !ht && !At && (ht = !0, On(De));
      }
      function bn() {
        return yt(Mt);
      }
      function Qn(Z) {
        Z.callback = null;
      }
      function rr() {
        return Me;
      }
      var Dn = !1, Er = null, Vn = -1, kn = st, sa = -1;
      function Wa() {
        var Z = X.unstable_now() - sa;
        return !(Z < kn);
      }
      function Dr() {
      }
      function Pn(Z) {
        if (Z < 0 || Z > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        Z > 0 ? kn = Math.floor(1e3 / Z) : kn = st;
      }
      var Wn = function() {
        if (Er !== null) {
          var Z = X.unstable_now();
          sa = Z;
          var Oe = !0, et = !0;
          try {
            et = Er(Oe, Z);
          } finally {
            et ? Gn() : (Dn = !1, Er = null);
          }
        } else
          Dn = !1;
      }, Gn;
      if (typeof re == "function")
        Gn = function() {
          re(Wn);
        };
      else if (typeof MessageChannel < "u") {
        var Cr = new MessageChannel(), Ga = Cr.port2;
        Cr.port1.onmessage = Wn, Gn = function() {
          Ga.postMessage(null);
        };
      } else
        Gn = function() {
          B(Wn, 0);
        };
      function On(Z) {
        Er = Z, Dn || (Dn = !0, Gn());
      }
      function ar(Z, Oe) {
        Vn = B(function() {
          Z(X.unstable_now());
        }, Oe);
      }
      function Yr() {
        me(Vn), Vn = -1;
      }
      var Oi = Dr, ca = null;
      X.unstable_IdlePriority = le, X.unstable_ImmediatePriority = fe, X.unstable_LowPriority = je, X.unstable_NormalPriority = J, X.unstable_Profiling = ca, X.unstable_UserBlockingPriority = $e, X.unstable_cancelCallback = Qn, X.unstable_continueExecution = Vt, X.unstable_forceFrameRate = Pn, X.unstable_getCurrentPriorityLevel = rr, X.unstable_getFirstCallbackNode = bn, X.unstable_next = at, X.unstable_pauseExecution = St, X.unstable_requestPaint = Oi, X.unstable_runWithPriority = Ye, X.unstable_scheduleCallback = Ge, X.unstable_shouldYield = Wa, X.unstable_wrapCallback = Tt, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(sE)), sE;
}
var tT;
function lT() {
  if (tT) return Bm.exports;
  tT = 1;
  var X = {};
  return X.NODE_ENV === "production" ? Bm.exports = nD() : Bm.exports = rD(), Bm.exports;
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
function aD() {
  if (nT) return Ia;
  nT = 1;
  var X = Yl, pe = lT();
  function A(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, l = 1; l < arguments.length; l++) r += "&args[]=" + encodeURIComponent(arguments[l]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var st = /* @__PURE__ */ new Set(), Rt = {};
  function yt(n, r) {
    Ne(n, r), Ne(n + "Capture", r);
  }
  function Ne(n, r) {
    for (Rt[n] = r, n = 0; n < r.length; n++) st.add(r[n]);
  }
  var S = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), We = Object.prototype.hasOwnProperty, Te = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, fe = {}, $e = {};
  function J(n) {
    return We.call($e, n) ? !0 : We.call(fe, n) ? !1 : Te.test(n) ? $e[n] = !0 : (fe[n] = !0, !1);
  }
  function je(n, r, l, o) {
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
  function le(n, r, l, o) {
    if (r === null || typeof r > "u" || je(n, r, l, o)) return !0;
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
  function xe(n, r, l, o, c, d, m) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = o, this.attributeNamespace = c, this.mustUseProperty = l, this.propertyName = n, this.type = r, this.sanitizeURL = d, this.removeEmptyString = m;
  }
  var ct = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    ct[n] = new xe(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    ct[r] = new xe(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    ct[n] = new xe(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    ct[n] = new xe(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    ct[n] = new xe(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    ct[n] = new xe(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    ct[n] = new xe(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    ct[n] = new xe(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    ct[n] = new xe(n, 5, !1, n.toLowerCase(), null, !1, !1);
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
    ct[r] = new xe(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(Hn, rn);
    ct[r] = new xe(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(Hn, rn);
    ct[r] = new xe(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    ct[n] = new xe(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), ct.xlinkHref = new xe("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    ct[n] = new xe(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function it(n, r, l, o) {
    var c = ct.hasOwnProperty(r) ? ct[r] : null;
    (c !== null ? c.type !== 0 : o || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (le(r, l, c, o) && (l = null), o || c === null ? J(r) && (l === null ? n.removeAttribute(r) : n.setAttribute(r, "" + l)) : c.mustUseProperty ? n[c.propertyName] = l === null ? c.type === 3 ? !1 : "" : l : (r = c.attributeName, o = c.attributeNamespace, l === null ? n.removeAttribute(r) : (c = c.type, l = c === 3 || c === 4 && l === !0 ? "" : "" + l, o ? n.setAttributeNS(o, r, l) : n.setAttribute(r, l))));
  }
  var ze = X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, kt = Symbol.for("react.element"), Ce = Symbol.for("react.portal"), ft = Symbol.for("react.fragment"), Ve = Symbol.for("react.strict_mode"), Sn = Symbol.for("react.profiler"), Mt = Symbol.for("react.provider"), fn = Symbol.for("react.context"), $t = Symbol.for("react.forward_ref"), gt = Symbol.for("react.suspense"), Me = Symbol.for("react.suspense_list"), At = Symbol.for("react.memo"), ht = Symbol.for("react.lazy"), rt = Symbol.for("react.offscreen"), B = Symbol.iterator;
  function me(n) {
    return n === null || typeof n != "object" ? null : (n = B && n[B] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var re = Object.assign, b;
  function $(n) {
    if (b === void 0) try {
      throw Error();
    } catch (l) {
      var r = l.stack.trim().match(/\n( *(at )?)/);
      b = r && r[1] || "";
    }
    return `
` + b + n;
  }
  var De = !1;
  function Pe(n, r) {
    if (!n || De) return "";
    De = !0;
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
      De = !1, Error.prepareStackTrace = l;
    }
    return (n = n ? n.displayName || n.name : "") ? $(n) : "";
  }
  function Ye(n) {
    switch (n.tag) {
      case 5:
        return $(n.type);
      case 16:
        return $("Lazy");
      case 13:
        return $("Suspense");
      case 19:
        return $("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = Pe(n.type, !1), n;
      case 11:
        return n = Pe(n.type.render, !1), n;
      case 1:
        return n = Pe(n.type, !0), n;
      default:
        return "";
    }
  }
  function at(n) {
    if (n == null) return null;
    if (typeof n == "function") return n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case ft:
        return "Fragment";
      case Ce:
        return "Portal";
      case Sn:
        return "Profiler";
      case Ve:
        return "StrictMode";
      case gt:
        return "Suspense";
      case Me:
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
        return r = n.displayName || null, r !== null ? r : at(n.type) || "Memo";
      case ht:
        r = n._payload, n = n._init;
        try {
          return at(n(r));
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
        return at(r);
      case 8:
        return r === Ve ? "StrictMode" : "Mode";
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
  function Ge(n) {
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
  function St(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function Vt(n) {
    var r = St(n) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), o = "" + n[r];
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
    n._valueTracker || (n._valueTracker = Vt(n));
  }
  function Qn(n) {
    if (!n) return !1;
    var r = n._valueTracker;
    if (!r) return !0;
    var l = r.getValue(), o = "";
    return n && (o = St(n) ? n.checked ? "true" : "false" : n.value), n = o, n !== l ? (r.setValue(n), !0) : !1;
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
    return re({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: l ?? n._wrapperState.initialChecked });
  }
  function Er(n, r) {
    var l = r.defaultValue == null ? "" : r.defaultValue, o = r.checked != null ? r.checked : r.defaultChecked;
    l = Ge(r.value != null ? r.value : l), n._wrapperState = { initialChecked: o, initialValue: l, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function Vn(n, r) {
    r = r.checked, r != null && it(n, "checked", r, !1);
  }
  function kn(n, r) {
    Vn(n, r);
    var l = Ge(r.value), o = r.type;
    if (l != null) o === "number" ? (l === 0 && n.value === "" || n.value != l) && (n.value = "" + l) : n.value !== "" + l && (n.value = "" + l);
    else if (o === "submit" || o === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? Wa(n, r.type, l) : r.hasOwnProperty("defaultValue") && Wa(n, r.type, Ge(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function sa(n, r, l) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var o = r.type;
      if (!(o !== "submit" && o !== "reset" || r.value !== void 0 && r.value !== null)) return;
      r = "" + n._wrapperState.initialValue, l || r === n.value || (n.value = r), n.defaultValue = r;
    }
    l = n.name, l !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, l !== "" && (n.name = l);
  }
  function Wa(n, r, l) {
    (r !== "number" || rr(n.ownerDocument) !== n) && (l == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + l && (n.defaultValue = "" + l));
  }
  var Dr = Array.isArray;
  function Pn(n, r, l, o) {
    if (n = n.options, r) {
      r = {};
      for (var c = 0; c < l.length; c++) r["$" + l[c]] = !0;
      for (l = 0; l < n.length; l++) c = r.hasOwnProperty("$" + n[l].value), n[l].selected !== c && (n[l].selected = c), c && o && (n[l].defaultSelected = !0);
    } else {
      for (l = "" + Ge(l), r = null, c = 0; c < n.length; c++) {
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
    return re({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
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
    n._wrapperState = { initialValue: Ge(l) };
  }
  function Cr(n, r) {
    var l = Ge(r.value), o = Ge(r.defaultValue);
    l != null && (l = "" + l, l !== n.value && (n.value = l), r.defaultValue == null && n.defaultValue !== l && (n.defaultValue = l)), o != null && (n.defaultValue = "" + o);
  }
  function Ga(n) {
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
  var Yr, Oi = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, l, o, c) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, l, o, c);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n) n.innerHTML = r;
    else {
      for (Yr = Yr || document.createElement("div"), Yr.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = Yr.firstChild; n.firstChild; ) n.removeChild(n.firstChild);
      for (; r.firstChild; ) n.appendChild(r.firstChild);
    }
  });
  function ca(n, r) {
    if (r) {
      var l = n.firstChild;
      if (l && l === n.lastChild && l.nodeType === 3) {
        l.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var Z = {
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
  }, Oe = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Z).forEach(function(n) {
    Oe.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), Z[r] = Z[n];
    });
  });
  function et(n, r, l) {
    return r == null || typeof r == "boolean" || r === "" ? "" : l || typeof r != "number" || r === 0 || Z.hasOwnProperty(n) && Z[n] ? ("" + r).trim() : r + "px";
  }
  function Nt(n, r) {
    n = n.style;
    for (var l in r) if (r.hasOwnProperty(l)) {
      var o = l.indexOf("--") === 0, c = et(l, r[l], o);
      l === "float" && (l = "cssFloat"), o ? n.setProperty(l, c) : n[l] = c;
    }
  }
  var an = re({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
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
  var Yt = null, zt = null, fa = null;
  function _a(n) {
    if (n = cs(n)) {
      if (typeof Yt != "function") throw Error(A(280));
      var r = n.stateNode;
      r && (r = Yi(r), Yt(n.stateNode, n.type, r));
    }
  }
  function ba(n) {
    zt ? fa ? fa.push(n) : fa = [n] : zt = n;
  }
  function Li() {
    if (zt) {
      var n = zt, r = fa;
      if (fa = zt = null, _a(n), r) for (n = 0; n < r.length; n++) _a(r[n]);
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
      Mi = !1, (zt !== null || fa !== null) && (Ql(), Li());
    }
  }
  function oi(n, r) {
    var l = n.stateNode;
    if (l === null) return null;
    var o = Yi(l);
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
  var da = !1;
  if (S) try {
    var ir = {};
    Object.defineProperty(ir, "passive", { get: function() {
      da = !0;
    } }), window.addEventListener("test", ir, ir), window.removeEventListener("test", ir, ir);
  } catch {
    da = !1;
  }
  function pa(n, r, l, o, c, d, m, E, T) {
    var z = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(l, z);
    } catch (Q) {
      this.onError(Q);
    }
  }
  var Ir = !1, si = null, ci = !1, Ni = null, R = { onError: function(n) {
    Ir = !0, si = n;
  } };
  function Y(n, r, l, o, c, d, m, E, T) {
    Ir = !1, si = null, pa.apply(R, arguments);
  }
  function ne(n, r, l, o, c, d, m, E, T) {
    if (Y.apply(this, arguments), Ir) {
      if (Ir) {
        var z = si;
        Ir = !1, si = null;
      } else throw Error(A(198));
      ci || (ci = !0, Ni = z);
    }
  }
  function ie(n) {
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
  function lt(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null) return r.dehydrated;
    }
    return null;
  }
  function Ie(n) {
    if (ie(n) !== n) throw Error(A(188));
  }
  function dt(n) {
    var r = n.alternate;
    if (!r) {
      if (r = ie(n), r === null) throw Error(A(188));
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
          if (d === l) return Ie(c), n;
          if (d === o) return Ie(c), r;
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
  function tt(n) {
    return n = dt(n), n !== null ? En(n) : null;
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
  var nn = pe.unstable_scheduleCallback, on = pe.unstable_cancelCallback, Rr = pe.unstable_shouldYield, Ka = pe.unstable_requestPaint, Ut = pe.unstable_now, dn = pe.unstable_getCurrentPriorityLevel, qe = pe.unstable_ImmediatePriority, fi = pe.unstable_UserBlockingPriority, zi = pe.unstable_NormalPriority, ac = pe.unstable_LowPriority, Ui = pe.unstable_IdlePriority, ul = null, Qr = null;
  function $o(n) {
    if (Qr && typeof Qr.onCommitFiberRoot == "function") try {
      Qr.onCommitFiberRoot(ul, n, void 0, (n.current.flags & 128) === 128);
    } catch {
    }
  }
  var kr = Math.clz32 ? Math.clz32 : lc, Yo = Math.log, ic = Math.LN2;
  function lc(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (Yo(n) / ic | 0) | 0;
  }
  var Ai = 64, ol = 4194304;
  function Wr(n) {
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
  function di(n, r) {
    var l = n.pendingLanes;
    if (l === 0) return 0;
    var o = 0, c = n.suspendedLanes, d = n.pingedLanes, m = l & 268435455;
    if (m !== 0) {
      var E = m & ~c;
      E !== 0 ? o = Wr(E) : (d &= m, d !== 0 && (o = Wr(d)));
    } else m = l & ~c, m !== 0 ? o = Wr(m) : d !== 0 && (o = Wr(d));
    if (o === 0) return 0;
    if (r !== 0 && r !== o && !(r & c) && (c = o & -o, d = r & -r, c >= d || c === 16 && (d & 4194240) !== 0)) return r;
    if (o & 4 && (o |= l & 16), r = n.entangledLanes, r !== 0) for (n = n.entanglements, r &= o; 0 < r; ) l = 31 - kr(r), c = 1 << l, o |= n[l], r &= ~c;
    return o;
  }
  function sl(n, r) {
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
      T === -1 ? (!(E & l) || E & o) && (c[m] = sl(E, r)) : T <= r && (n.expiredLanes |= E), d &= ~E;
    }
  }
  function Fi(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function Gl() {
    var n = Ai;
    return Ai <<= 1, !(Ai & 4194240) && (Ai = 64), n;
  }
  function Kl(n) {
    for (var r = [], l = 0; 31 > l; l++) r.push(n);
    return r;
  }
  function cl(n, r, l) {
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
  var Hu, xt, uc, pi, Be, ql = !1, qn = [], Gr = null, Or = null, vi = null, mn = /* @__PURE__ */ new Map(), It = /* @__PURE__ */ new Map(), qa = [], Da = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Tr(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        Gr = null;
        break;
      case "dragenter":
      case "dragleave":
        Or = null;
        break;
      case "mouseover":
      case "mouseout":
        vi = null;
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
        return Gr = Lr(Gr, n, r, l, o, c), !0;
      case "dragenter":
        return Or = Lr(Or, n, r, l, o, c), !0;
      case "mouseover":
        return vi = Lr(vi, n, r, l, o, c), !0;
      case "pointerover":
        var d = c.pointerId;
        return mn.set(d, Lr(mn.get(d) || null, n, r, l, o, c)), !0;
      case "gotpointercapture":
        return d = c.pointerId, It.set(d, Lr(It.get(d) || null, n, r, l, o, c)), !0;
    }
    return !1;
  }
  function Vu(n) {
    var r = iu(n.target);
    if (r !== null) {
      var l = ie(r);
      if (l !== null) {
        if (r = l.tag, r === 13) {
          if (r = lt(l), r !== null) {
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
  function Pu(n, r, l) {
    Xl(n) && l.delete(r);
  }
  function Bu() {
    ql = !1, Gr !== null && Xl(Gr) && (Gr = null), Or !== null && Xl(Or) && (Or = null), vi !== null && Xl(vi) && (vi = null), mn.forEach(Pu), It.forEach(Pu);
  }
  function Zl(n, r) {
    n.blockedOn === r && (n.blockedOn = null, ql || (ql = !0, pe.unstable_scheduleCallback(pe.unstable_NormalPriority, Bu)));
  }
  function ka(n) {
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
    for (Gr !== null && Zl(Gr, n), Or !== null && Zl(Or, n), vi !== null && Zl(vi, n), mn.forEach(r), It.forEach(r), l = 0; l < qa.length; l++) o = qa[l], o.blockedOn === n && (o.blockedOn = null);
    for (; 0 < qa.length && (l = qa[0], l.blockedOn === null); ) Vu(l), l.blockedOn === null && qa.shift();
  }
  var Oa = ze.ReactCurrentBatchConfig, fl = !0;
  function ji(n, r, l, o) {
    var c = wt, d = Oa.transition;
    Oa.transition = null;
    try {
      wt = 1, dl(n, r, l, o);
    } finally {
      wt = c, Oa.transition = d;
    }
  }
  function $u(n, r, l, o) {
    var c = wt, d = Oa.transition;
    Oa.transition = null;
    try {
      wt = 4, dl(n, r, l, o);
    } finally {
      wt = c, Oa.transition = d;
    }
  }
  function dl(n, r, l, o) {
    if (fl) {
      var c = Yu(n, r, l, o);
      if (c === null) od(n, r, o, Hi, l), Tr(n, o);
      else if (Kf(c, n, r, l, o)) o.stopPropagation();
      else if (Tr(n, o), r & 4 && -1 < Da.indexOf(n)) {
        for (; c !== null; ) {
          var d = cs(c);
          if (d !== null && Hu(d), d = Yu(n, r, l, o), d === null && od(n, r, o, Hi, l), d === c) break;
          c = d;
        }
        c !== null && o.stopPropagation();
      } else od(n, r, o, null, l);
    }
  }
  var Hi = null;
  function Yu(n, r, l, o) {
    if (Hi = null, n = tn(o), n = iu(n), n !== null) if (r = ie(n), r === null) n = null;
    else if (l = r.tag, l === 13) {
      if (n = lt(r), n !== null) return n;
      n = null;
    } else if (l === 3) {
      if (r.stateNode.current.memoizedState.isDehydrated) return r.tag === 3 ? r.stateNode.containerInfo : null;
      n = null;
    } else r !== n && (n = null);
    return Hi = n, null;
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
          case qe:
            return 1;
          case fi:
            return 4;
          case zi:
          case ac:
            return 16;
          case Ui:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var La = null, Iu = null, h = null;
  function C() {
    if (h) return h;
    var n, r = Iu, l = r.length, o, c = "value" in La ? La.value : La.textContent, d = c.length;
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
  function q() {
    return !1;
  }
  function he(n) {
    function r(l, o, c, d, m) {
      this._reactName = l, this._targetInst = c, this.type = o, this.nativeEvent = d, this.target = m, this.currentTarget = null;
      for (var E in n) n.hasOwnProperty(E) && (l = n[E], this[E] = l ? l(d) : d[E]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? F : q, this.isPropagationStopped = q, this;
    }
    return re(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var l = this.nativeEvent;
      l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = F);
    }, stopPropagation: function() {
      var l = this.nativeEvent;
      l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = F);
    }, persist: function() {
    }, isPersistent: F }), r;
  }
  var oe = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Ae = he(oe), nt = re({}, oe, { view: 0, detail: 0 }), Ft = he(nt), Qt, Wt, Ze, Zt = re({}, nt, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Xa, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== Ze && (Ze && n.type === "mousemove" ? (Qt = n.screenX - Ze.screenX, Wt = n.screenY - Ze.screenY) : Wt = Qt = 0, Ze = n), Qt);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : Wt;
  } }), Cn = he(Zt), Jl = re({}, Zt, { dataTransfer: 0 }), Ko = he(Jl), Vi = re({}, nt, { relatedTarget: 0 }), eu = he(Vi), qo = re({}, oe, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), qf = he(qo), oc = re({}, oe, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), Xf = he(oc), Jp = re({}, oe, { data: 0 }), sc = he(Jp), ev = {
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
  function Xa() {
    return Ym;
  }
  var Im = re({}, nt, { key: function(n) {
    if (n.key) {
      var r = ev[n.key] || n.key;
      if (r !== "Unidentified") return r;
    }
    return n.type === "keypress" ? (n = M(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? tv[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Xa, charCode: function(n) {
    return n.type === "keypress" ? M(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? M(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), Zf = he(Im), Jf = re({}, Zt, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), cc = he(Jf), Qm = re({}, nt, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Xa }), fc = he(Qm), rv = re({}, oe, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Kr = he(rv), Pi = re({}, Zt, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Ln = he(Pi), Bi = [9, 13, 27, 32], Xo = S && "CompositionEvent" in window, pl = null;
  S && "documentMode" in document && (pl = document.documentMode);
  var Wm = S && "TextEvent" in window && !pl, Qu = S && (!Xo || pl && 8 < pl && 11 >= pl), av = " ", iv = !1;
  function dc(n, r) {
    switch (n) {
      case "keyup":
        return Bi.indexOf(r.keyCode) !== -1;
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
    if (Wu) return n === "compositionend" || !Xo && dc(n, r) ? (n = C(), h = Iu = La = null, Wu = !1, n) : null;
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
    ba(o), r = us(r, "onChange"), 0 < r.length && (l = new Ae("onChange", "change", null, l, o), n.push({ event: l, listeners: r }));
  }
  var Gu = null, hi = null;
  function ed(n) {
    mc(n, 0);
  }
  function Zo(n) {
    var r = _e(n);
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
    Gu && (Gu.detachEvent("onpropertychange", vv), hi = Gu = null);
  }
  function vv(n) {
    if (n.propertyName === "value" && Zo(hi)) {
      var r = [];
      sv(r, hi, n, tn(n)), Wl(ed, r);
    }
  }
  function qm(n, r, l) {
    n === "focusin" ? (pv(), Gu = r, hi = l, Gu.attachEvent("onpropertychange", vv)) : n === "focusout" && pv();
  }
  function Xm(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown") return Zo(hi);
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
  var Za = typeof Object.is == "function" ? Object.is : mv;
  function Jo(n, r) {
    if (Za(n, r)) return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null) return !1;
    var l = Object.keys(n), o = Object.keys(r);
    if (l.length !== o.length) return !1;
    for (o = 0; o < l.length; o++) {
      var c = l[o];
      if (!We.call(r, c) || !Za(n[c], r[c])) return !1;
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
  function vl() {
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
    var r = vl(), l = n.focusedElem, o = n.selectionRange;
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
    ad || Xu == null || Xu !== rr(o) || (o = Xu, "selectionStart" in o && Ku(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = { anchorNode: o.anchorNode, anchorOffset: o.anchorOffset, focusNode: o.focusNode, focusOffset: o.focusOffset }), es && Jo(es, o) || (es = o, o = us(rd, "onSelect"), 0 < o.length && (r = new Ae("onSelect", "select", null, r, l), n.push({ event: r, listeners: o }), r.target = Xu)));
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
  function mi(n, r) {
    xv.set(n, r), yt(r, [n]);
  }
  for (var tu = 0; tu < id.length; tu++) {
    var ld = id[tu], rs = ld.toLowerCase(), Jm = ld[0].toUpperCase() + ld.slice(1);
    mi(rs, "on" + Jm);
  }
  mi(Cv, "onAnimationEnd"), mi(Rv, "onAnimationIteration"), mi(Tv, "onAnimationStart"), mi("dblclick", "onDoubleClick"), mi("focusin", "onFocus"), mi("focusout", "onBlur"), mi(wv, "onTransitionEnd"), Ne("onMouseEnter", ["mouseout", "mouseover"]), Ne("onMouseLeave", ["mouseout", "mouseover"]), Ne("onPointerEnter", ["pointerout", "pointerover"]), Ne("onPointerLeave", ["pointerout", "pointerover"]), yt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), yt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), yt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), yt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), yt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), yt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var as = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), ey = new Set("cancel close invalid load scroll toggle".split(" ").concat(as));
  function hc(n, r, l) {
    var o = n.type || "unknown-event";
    n.currentTarget = l, ne(o, r, void 0, n), n.currentTarget = null;
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
    if (ci) throw n = Ni, ci = !1, Ni = null, n;
  }
  function jt(n, r) {
    var l = r[sd];
    l === void 0 && (l = r[sd] = /* @__PURE__ */ new Set());
    var o = n + "__bubble";
    l.has(o) || (ud(r, n, 2, !1), l.add(o));
  }
  function hl(n, r, l) {
    var o = 0;
    r && (o |= 4), ud(l, n, o, r);
  }
  var is = "_reactListening" + Math.random().toString(36).slice(2);
  function ls(n) {
    if (!n[is]) {
      n[is] = !0, st.forEach(function(l) {
        l !== "selectionchange" && (ey.has(l) || hl(l, !1, n), hl(l, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[is] || (r[is] = !0, hl("selectionchange", !1, r));
    }
  }
  function ud(n, r, l, o) {
    switch (Go(r)) {
      case 1:
        var c = ji;
        break;
      case 4:
        c = $u;
        break;
      default:
        c = dl;
    }
    l = c.bind(null, r, l, n), c = void 0, !da || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (c = !0), o ? c !== void 0 ? n.addEventListener(r, l, { capture: !0, passive: c }) : n.addEventListener(r, l, !0) : c !== void 0 ? n.addEventListener(r, l, { passive: c }) : n.addEventListener(r, l, !1);
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
      var z = d, Q = tn(l), W = [];
      e: {
        var I = xv.get(n);
        if (I !== void 0) {
          var se = Ae, ye = n;
          switch (n) {
            case "keypress":
              if (M(l) === 0) break e;
            case "keydown":
            case "keyup":
              se = Zf;
              break;
            case "focusin":
              ye = "focus", se = eu;
              break;
            case "focusout":
              ye = "blur", se = eu;
              break;
            case "beforeblur":
            case "afterblur":
              se = eu;
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
              se = Cn;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              se = Ko;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              se = fc;
              break;
            case Cv:
            case Rv:
            case Tv:
              se = qf;
              break;
            case wv:
              se = Kr;
              break;
            case "scroll":
              se = Ft;
              break;
            case "wheel":
              se = Ln;
              break;
            case "copy":
            case "cut":
            case "paste":
              se = Xf;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              se = cc;
          }
          var Ee = (r & 4) !== 0, xn = !Ee && n === "scroll", D = Ee ? I !== null ? I + "Capture" : null : I;
          Ee = [];
          for (var x = z, L; x !== null; ) {
            L = x;
            var K = L.stateNode;
            if (L.tag === 5 && K !== null && (L = K, D !== null && (K = oi(x, D), K != null && Ee.push(Ju(x, K, L)))), xn) break;
            x = x.return;
          }
          0 < Ee.length && (I = new se(I, ye, null, l, Q), W.push({ event: I, listeners: Ee }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (I = n === "mouseover" || n === "pointerover", se = n === "mouseout" || n === "pointerout", I && l !== Kn && (ye = l.relatedTarget || l.fromElement) && (iu(ye) || ye[$i])) break e;
          if ((se || I) && (I = Q.window === Q ? Q : (I = Q.ownerDocument) ? I.defaultView || I.parentWindow : window, se ? (ye = l.relatedTarget || l.toElement, se = z, ye = ye ? iu(ye) : null, ye !== null && (xn = ie(ye), ye !== xn || ye.tag !== 5 && ye.tag !== 6) && (ye = null)) : (se = null, ye = z), se !== ye)) {
            if (Ee = Cn, K = "onMouseLeave", D = "onMouseEnter", x = "mouse", (n === "pointerout" || n === "pointerover") && (Ee = cc, K = "onPointerLeave", D = "onPointerEnter", x = "pointer"), xn = se == null ? I : _e(se), L = ye == null ? I : _e(ye), I = new Ee(K, x + "leave", se, l, Q), I.target = xn, I.relatedTarget = L, K = null, iu(Q) === z && (Ee = new Ee(D, x + "enter", ye, l, Q), Ee.target = L, Ee.relatedTarget = xn, K = Ee), xn = K, se && ye) t: {
              for (Ee = se, D = ye, x = 0, L = Ee; L; L = nu(L)) x++;
              for (L = 0, K = D; K; K = nu(K)) L++;
              for (; 0 < x - L; ) Ee = nu(Ee), x--;
              for (; 0 < L - x; ) D = nu(D), L--;
              for (; x--; ) {
                if (Ee === D || D !== null && Ee === D.alternate) break t;
                Ee = nu(Ee), D = nu(D);
              }
              Ee = null;
            }
            else Ee = null;
            se !== null && yc(W, I, se, Ee, !1), ye !== null && xn !== null && yc(W, xn, ye, Ee, !0);
          }
        }
        e: {
          if (I = z ? _e(z) : window, se = I.nodeName && I.nodeName.toLowerCase(), se === "select" || se === "input" && I.type === "file") var Re = cv;
          else if (ov(I)) if (fv) Re = Zm;
          else {
            Re = Xm;
            var ge = qm;
          }
          else (se = I.nodeName) && se.toLowerCase() === "input" && (I.type === "checkbox" || I.type === "radio") && (Re = hv);
          if (Re && (Re = Re(n, z))) {
            sv(W, Re, l, Q);
            break e;
          }
          ge && ge(n, I, z), n === "focusout" && (ge = I._wrapperState) && ge.controlled && I.type === "number" && Wa(I, "number", I.value);
        }
        switch (ge = z ? _e(z) : window, n) {
          case "focusin":
            (ov(ge) || ge.contentEditable === "true") && (Xu = ge, rd = z, es = null);
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
            ad = !1, Ev(W, l, Q);
            break;
          case "selectionchange":
            if (qu) break;
          case "keydown":
          case "keyup":
            Ev(W, l, Q);
        }
        var ke;
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
        He && (Qu && l.locale !== "ko" && (Wu || He !== "onCompositionStart" ? He === "onCompositionEnd" && Wu && (ke = C()) : (La = Q, Iu = "value" in La ? La.value : La.textContent, Wu = !0)), ge = us(z, He), 0 < ge.length && (He = new sc(He, n, null, l, Q), W.push({ event: He, listeners: ge }), ke ? He.data = ke : (ke = lv(l), ke !== null && (He.data = ke)))), (ke = Wm ? Gm(n, l) : uv(n, l)) && (z = us(z, "onBeforeInput"), 0 < z.length && (Q = new sc("onBeforeInput", "beforeinput", null, l, Q), W.push({ event: Q, listeners: z }), Q.data = ke));
      }
      mc(W, r);
    });
  }
  function Ju(n, r, l) {
    return { instance: n, listener: r, currentTarget: l };
  }
  function us(n, r) {
    for (var l = r + "Capture", o = []; n !== null; ) {
      var c = n, d = c.stateNode;
      c.tag === 5 && d !== null && (c = d, d = oi(n, l), d != null && o.unshift(Ju(n, d, c)), d = oi(n, r), d != null && o.push(Ju(n, d, c))), n = n.return;
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
      E.tag === 5 && z !== null && (E = z, c ? (T = oi(l, d), T != null && m.unshift(Ju(l, T, E))) : c || (T = oi(l, d), T != null && m.push(Ju(l, T, E)))), l = l.return;
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
          n.removeChild(c), ka(r);
          return;
        }
        o--;
      } else l !== "$" && l !== "$?" && l !== "$!" || o++;
      l = c;
    } while (l);
    ka(r);
  }
  function Ja(n) {
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
  var no = Math.random().toString(36).slice(2), Ma = "__reactFiber$" + no, ss = "__reactProps$" + no, $i = "__reactContainer$" + no, sd = "__reactEvents$" + no, cd = "__reactListeners$" + no, ro = "__reactHandles$" + no;
  function iu(n) {
    var r = n[Ma];
    if (r) return r;
    for (var l = n.parentNode; l; ) {
      if (r = l[$i] || l[Ma]) {
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
    return n = n[Ma] || n[$i], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function _e(n) {
    if (n.tag === 5 || n.tag === 6) return n.stateNode;
    throw Error(A(33));
  }
  function Yi(n) {
    return n[ss] || null;
  }
  var Mn = [], pt = -1;
  function qr(n) {
    return { current: n };
  }
  function Gt(n) {
    0 > pt || (n.current = Mn[pt], Mn[pt] = null, pt--);
  }
  function Jt(n, r) {
    pt++, Mn[pt] = n.current, n.current = r;
  }
  var ut = {}, yn = qr(ut), Nn = qr(!1), Na = ut;
  function va(n, r) {
    var l = n.type.contextTypes;
    if (!l) return ut;
    var o = n.stateNode;
    if (o && o.__reactInternalMemoizedUnmaskedChildContext === r) return o.__reactInternalMemoizedMaskedChildContext;
    var c = {}, d;
    for (d in l) c[d] = r[d];
    return o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = c), c;
  }
  function zn(n) {
    return n = n.childContextTypes, n != null;
  }
  function yi() {
    Gt(Nn), Gt(yn);
  }
  function Tc(n, r, l) {
    if (yn.current !== ut) throw Error(A(168));
    Jt(yn, r), Jt(Nn, l);
  }
  function kv(n, r, l) {
    var o = n.stateNode;
    if (r = r.childContextTypes, typeof o.getChildContext != "function") return l;
    o = o.getChildContext();
    for (var c in o) if (!(c in r)) throw Error(A(108, Tt(n) || "Unknown", c));
    return re({}, l, o);
  }
  function lu(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || ut, Na = yn.current, Jt(yn, n), Jt(Nn, Nn.current), !0;
  }
  function za(n, r, l) {
    var o = n.stateNode;
    if (!o) throw Error(A(169));
    l ? (n = kv(n, r, Na), o.__reactInternalMemoizedMergedChildContext = n, Gt(Nn), Gt(yn), Jt(yn, n)) : Gt(Nn), Jt(Nn, l);
  }
  var ei = null, fs = !1, ds = !1;
  function ml(n) {
    ei === null ? ei = [n] : ei.push(n);
  }
  function fd(n) {
    fs = !0, ml(n);
  }
  function Mr() {
    if (!ds && ei !== null) {
      ds = !0;
      var n = 0, r = wt;
      try {
        var l = ei;
        for (wt = 1; n < l.length; n++) {
          var o = l[n];
          do
            o = o(!0);
          while (o !== null);
        }
        ei = null, fs = !1;
      } catch (c) {
        throw ei !== null && (ei = ei.slice(n + 1)), nn(qe, Mr), c;
      } finally {
        wt = r, ds = !1;
      }
    }
    return null;
  }
  var yl = [], gl = 0, ao = null, Sl = 0, lr = [], Un = 0, uu = null, Nr = 1, gi = "";
  function El(n, r) {
    yl[gl++] = Sl, yl[gl++] = ao, ao = n, Sl = r;
  }
  function Ov(n, r, l) {
    lr[Un++] = Nr, lr[Un++] = gi, lr[Un++] = uu, uu = n;
    var o = Nr;
    n = gi;
    var c = 32 - kr(o) - 1;
    o &= ~(1 << c), l += 1;
    var d = 32 - kr(r) + c;
    if (30 < d) {
      var m = c - c % 5;
      d = (o & (1 << m) - 1).toString(32), o >>= m, c -= m, Nr = 1 << 32 - kr(r) + c | l << c | o, gi = d + n;
    } else Nr = 1 << d | l << c | o, gi = n;
  }
  function dd(n) {
    n.return !== null && (El(n, 1), Ov(n, 1, 0));
  }
  function wc(n) {
    for (; n === ao; ) ao = yl[--gl], yl[gl] = null, Sl = yl[--gl], yl[gl] = null;
    for (; n === uu; ) uu = lr[--Un], lr[Un] = null, gi = lr[--Un], lr[Un] = null, Nr = lr[--Un], lr[Un] = null;
  }
  var Xr = null, Zr = null, sn = !1, ti = null;
  function pd(n, r) {
    var l = Ha(5, null, null, 0);
    l.elementType = "DELETED", l.stateNode = r, l.return = n, r = n.deletions, r === null ? (n.deletions = [l], n.flags |= 16) : r.push(l);
  }
  function vd(n, r) {
    switch (n.tag) {
      case 5:
        var l = n.type;
        return r = r.nodeType !== 1 || l.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, Xr = n, Zr = Ja(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, Xr = n, Zr = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (l = uu !== null ? { id: Nr, overflow: gi } : null, n.memoizedState = { dehydrated: r, treeContext: l, retryLane: 1073741824 }, l = Ha(18, null, null, 0), l.stateNode = r, l.return = n, n.child = l, Xr = n, Zr = null, !0) : !1;
      default:
        return !1;
    }
  }
  function hd(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function md(n) {
    if (sn) {
      var r = Zr;
      if (r) {
        var l = r;
        if (!vd(n, r)) {
          if (hd(n)) throw Error(A(418));
          r = Ja(l.nextSibling);
          var o = Xr;
          r && vd(n, r) ? pd(o, l) : (n.flags = n.flags & -4097 | 2, sn = !1, Xr = n);
        }
      } else {
        if (hd(n)) throw Error(A(418));
        n.flags = n.flags & -4097 | 2, sn = !1, Xr = n;
      }
    }
  }
  function Lv(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; ) n = n.return;
    Xr = n;
  }
  function Rn(n) {
    if (n !== Xr) return !1;
    if (!sn) return Lv(n), sn = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !au(n.type, n.memoizedProps)), r && (r = Zr)) {
      if (hd(n)) throw Mv(), Error(A(418));
      for (; r; ) pd(n, r), r = Ja(r.nextSibling);
    }
    if (Lv(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(A(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var l = n.data;
            if (l === "/$") {
              if (r === 0) {
                Zr = Ja(n.nextSibling);
                break e;
              }
              r--;
            } else l !== "$" && l !== "$!" && l !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        Zr = null;
      }
    } else Zr = Xr ? Ja(n.stateNode.nextSibling) : null;
    return !0;
  }
  function Mv() {
    for (var n = Zr; n; ) n = Ja(n.nextSibling);
  }
  function Ii() {
    Zr = Xr = null, sn = !1;
  }
  function ps(n) {
    ti === null ? ti = [n] : ti.push(n);
  }
  var ou = ze.ReactCurrentBatchConfig;
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
      return D = Ll(D, x), D.index = 0, D.sibling = null, D;
    }
    function d(D, x, L) {
      return D.index = L, n ? (L = D.alternate, L !== null ? (L = L.index, L < x ? (D.flags |= 2, x) : L) : (D.flags |= 2, x)) : (D.flags |= 1048576, x);
    }
    function m(D) {
      return n && D.alternate === null && (D.flags |= 2), D;
    }
    function E(D, x, L, K) {
      return x === null || x.tag !== 6 ? (x = xu(L, D.mode, K), x.return = D, x) : (x = c(x, L), x.return = D, x);
    }
    function T(D, x, L, K) {
      var Re = L.type;
      return Re === ft ? Q(D, x, L.props.children, K, L.key) : x !== null && (x.elementType === Re || typeof Re == "object" && Re !== null && Re.$$typeof === ht && Nv(Re) === x.type) ? (K = c(x, L.props), K.ref = vs(D, x, L), K.return = D, K) : (K = cf(L.type, L.key, L.props, null, D.mode, K), K.ref = vs(D, x, L), K.return = D, K);
    }
    function z(D, x, L, K) {
      return x === null || x.tag !== 4 || x.stateNode.containerInfo !== L.containerInfo || x.stateNode.implementation !== L.implementation ? (x = Wd(L, D.mode, K), x.return = D, x) : (x = c(x, L.children || []), x.return = D, x);
    }
    function Q(D, x, L, K, Re) {
      return x === null || x.tag !== 7 ? (x = Ml(L, D.mode, K, Re), x.return = D, x) : (x = c(x, L), x.return = D, x);
    }
    function W(D, x, L) {
      if (typeof x == "string" && x !== "" || typeof x == "number") return x = xu("" + x, D.mode, L), x.return = D, x;
      if (typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case kt:
            return L = cf(x.type, x.key, x.props, null, D.mode, L), L.ref = vs(D, null, x), L.return = D, L;
          case Ce:
            return x = Wd(x, D.mode, L), x.return = D, x;
          case ht:
            var K = x._init;
            return W(D, K(x._payload), L);
        }
        if (Dr(x) || me(x)) return x = Ml(x, D.mode, L, null), x.return = D, x;
        io(D, x);
      }
      return null;
    }
    function I(D, x, L, K) {
      var Re = x !== null ? x.key : null;
      if (typeof L == "string" && L !== "" || typeof L == "number") return Re !== null ? null : E(D, x, "" + L, K);
      if (typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case kt:
            return L.key === Re ? T(D, x, L, K) : null;
          case Ce:
            return L.key === Re ? z(D, x, L, K) : null;
          case ht:
            return Re = L._init, I(
              D,
              x,
              Re(L._payload),
              K
            );
        }
        if (Dr(L) || me(L)) return Re !== null ? null : Q(D, x, L, K, null);
        io(D, L);
      }
      return null;
    }
    function se(D, x, L, K, Re) {
      if (typeof K == "string" && K !== "" || typeof K == "number") return D = D.get(L) || null, E(x, D, "" + K, Re);
      if (typeof K == "object" && K !== null) {
        switch (K.$$typeof) {
          case kt:
            return D = D.get(K.key === null ? L : K.key) || null, T(x, D, K, Re);
          case Ce:
            return D = D.get(K.key === null ? L : K.key) || null, z(x, D, K, Re);
          case ht:
            var ge = K._init;
            return se(D, x, L, ge(K._payload), Re);
        }
        if (Dr(K) || me(K)) return D = D.get(L) || null, Q(x, D, K, Re, null);
        io(x, K);
      }
      return null;
    }
    function ye(D, x, L, K) {
      for (var Re = null, ge = null, ke = x, He = x = 0, tr = null; ke !== null && He < L.length; He++) {
        ke.index > He ? (tr = ke, ke = null) : tr = ke.sibling;
        var Dt = I(D, ke, L[He], K);
        if (Dt === null) {
          ke === null && (ke = tr);
          break;
        }
        n && ke && Dt.alternate === null && r(D, ke), x = d(Dt, x, He), ge === null ? Re = Dt : ge.sibling = Dt, ge = Dt, ke = tr;
      }
      if (He === L.length) return l(D, ke), sn && El(D, He), Re;
      if (ke === null) {
        for (; He < L.length; He++) ke = W(D, L[He], K), ke !== null && (x = d(ke, x, He), ge === null ? Re = ke : ge.sibling = ke, ge = ke);
        return sn && El(D, He), Re;
      }
      for (ke = o(D, ke); He < L.length; He++) tr = se(ke, D, He, L[He], K), tr !== null && (n && tr.alternate !== null && ke.delete(tr.key === null ? He : tr.key), x = d(tr, x, He), ge === null ? Re = tr : ge.sibling = tr, ge = tr);
      return n && ke.forEach(function(Nl) {
        return r(D, Nl);
      }), sn && El(D, He), Re;
    }
    function Ee(D, x, L, K) {
      var Re = me(L);
      if (typeof Re != "function") throw Error(A(150));
      if (L = Re.call(L), L == null) throw Error(A(151));
      for (var ge = Re = null, ke = x, He = x = 0, tr = null, Dt = L.next(); ke !== null && !Dt.done; He++, Dt = L.next()) {
        ke.index > He ? (tr = ke, ke = null) : tr = ke.sibling;
        var Nl = I(D, ke, Dt.value, K);
        if (Nl === null) {
          ke === null && (ke = tr);
          break;
        }
        n && ke && Nl.alternate === null && r(D, ke), x = d(Nl, x, He), ge === null ? Re = Nl : ge.sibling = Nl, ge = Nl, ke = tr;
      }
      if (Dt.done) return l(
        D,
        ke
      ), sn && El(D, He), Re;
      if (ke === null) {
        for (; !Dt.done; He++, Dt = L.next()) Dt = W(D, Dt.value, K), Dt !== null && (x = d(Dt, x, He), ge === null ? Re = Dt : ge.sibling = Dt, ge = Dt);
        return sn && El(D, He), Re;
      }
      for (ke = o(D, ke); !Dt.done; He++, Dt = L.next()) Dt = se(ke, D, He, Dt.value, K), Dt !== null && (n && Dt.alternate !== null && ke.delete(Dt.key === null ? He : Dt.key), x = d(Dt, x, He), ge === null ? Re = Dt : ge.sibling = Dt, ge = Dt);
      return n && ke.forEach(function(yy) {
        return r(D, yy);
      }), sn && El(D, He), Re;
    }
    function xn(D, x, L, K) {
      if (typeof L == "object" && L !== null && L.type === ft && L.key === null && (L = L.props.children), typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case kt:
            e: {
              for (var Re = L.key, ge = x; ge !== null; ) {
                if (ge.key === Re) {
                  if (Re = L.type, Re === ft) {
                    if (ge.tag === 7) {
                      l(D, ge.sibling), x = c(ge, L.props.children), x.return = D, D = x;
                      break e;
                    }
                  } else if (ge.elementType === Re || typeof Re == "object" && Re !== null && Re.$$typeof === ht && Nv(Re) === ge.type) {
                    l(D, ge.sibling), x = c(ge, L.props), x.ref = vs(D, ge, L), x.return = D, D = x;
                    break e;
                  }
                  l(D, ge);
                  break;
                } else r(D, ge);
                ge = ge.sibling;
              }
              L.type === ft ? (x = Ml(L.props.children, D.mode, K, L.key), x.return = D, D = x) : (K = cf(L.type, L.key, L.props, null, D.mode, K), K.ref = vs(D, x, L), K.return = D, D = K);
            }
            return m(D);
          case Ce:
            e: {
              for (ge = L.key; x !== null; ) {
                if (x.key === ge) if (x.tag === 4 && x.stateNode.containerInfo === L.containerInfo && x.stateNode.implementation === L.implementation) {
                  l(D, x.sibling), x = c(x, L.children || []), x.return = D, D = x;
                  break e;
                } else {
                  l(D, x);
                  break;
                }
                else r(D, x);
                x = x.sibling;
              }
              x = Wd(L, D.mode, K), x.return = D, D = x;
            }
            return m(D);
          case ht:
            return ge = L._init, xn(D, x, ge(L._payload), K);
        }
        if (Dr(L)) return ye(D, x, L, K);
        if (me(L)) return Ee(D, x, L, K);
        io(D, L);
      }
      return typeof L == "string" && L !== "" || typeof L == "number" ? (L = "" + L, x !== null && x.tag === 6 ? (l(D, x.sibling), x = c(x, L), x.return = D, D = x) : (l(D, x), x = xu(L, D.mode, K), x.return = D, D = x), m(D)) : l(D, x);
    }
    return xn;
  }
  var ni = zv(!0), ur = zv(!1), te = qr(null), ha = null, xr = null, yd = null;
  function gd() {
    yd = xr = ha = null;
  }
  function Sd(n) {
    var r = te.current;
    Gt(te), n._currentValue = r;
  }
  function Ed(n, r, l) {
    for (; n !== null; ) {
      var o = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, o !== null && (o.childLanes |= r)) : o !== null && (o.childLanes & r) !== r && (o.childLanes |= r), n === l) break;
      n = n.return;
    }
  }
  function lo(n, r) {
    ha = n, yd = xr = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (Jn = !0), n.firstContext = null);
  }
  function Pt(n) {
    var r = n._currentValue;
    if (yd !== n) if (n = { context: n, memoizedValue: r, next: null }, xr === null) {
      if (ha === null) throw Error(A(308));
      xr = n, ha.dependencies = { lanes: 0, firstContext: n };
    } else xr = xr.next = n;
    return r;
  }
  var su = null;
  function Cd(n) {
    su === null ? su = [n] : su.push(n);
  }
  function Uv(n, r, l, o) {
    var c = r.interleaved;
    return c === null ? (l.next = l, Cd(r)) : (l.next = c.next, c.next = l), r.interleaved = l, Si(n, o);
  }
  function Si(n, r) {
    n.lanes |= r;
    var l = n.alternate;
    for (l !== null && (l.lanes |= r), l = n, n = n.return; n !== null; ) n.childLanes |= r, l = n.alternate, l !== null && (l.childLanes |= r), l = n, n = n.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var Ua = !1;
  function Cl(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Av(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function Qi(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function Rl(n, r, l) {
    var o = n.updateQueue;
    if (o === null) return null;
    if (o = o.shared, vt & 2) {
      var c = o.pending;
      return c === null ? r.next = r : (r.next = c.next, c.next = r), o.pending = r, Si(n, l);
    }
    return c = o.interleaved, c === null ? (r.next = r, Cd(o)) : (r.next = c.next, c.next = r), o.interleaved = r, Si(n, l);
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
    Ua = !1;
    var d = c.firstBaseUpdate, m = c.lastBaseUpdate, E = c.shared.pending;
    if (E !== null) {
      c.shared.pending = null;
      var T = E, z = T.next;
      T.next = null, m === null ? d = z : m.next = z, m = T;
      var Q = n.alternate;
      Q !== null && (Q = Q.updateQueue, E = Q.lastBaseUpdate, E !== m && (E === null ? Q.firstBaseUpdate = z : E.next = z, Q.lastBaseUpdate = T));
    }
    if (d !== null) {
      var W = c.baseState;
      m = 0, Q = z = T = null, E = d;
      do {
        var I = E.lane, se = E.eventTime;
        if ((o & I) === I) {
          Q !== null && (Q = Q.next = {
            eventTime: se,
            lane: 0,
            tag: E.tag,
            payload: E.payload,
            callback: E.callback,
            next: null
          });
          e: {
            var ye = n, Ee = E;
            switch (I = r, se = l, Ee.tag) {
              case 1:
                if (ye = Ee.payload, typeof ye == "function") {
                  W = ye.call(se, W, I);
                  break e;
                }
                W = ye;
                break e;
              case 3:
                ye.flags = ye.flags & -65537 | 128;
              case 0:
                if (ye = Ee.payload, I = typeof ye == "function" ? ye.call(se, W, I) : ye, I == null) break e;
                W = re({}, W, I);
                break e;
              case 2:
                Ua = !0;
            }
          }
          E.callback !== null && E.lane !== 0 && (n.flags |= 64, I = c.effects, I === null ? c.effects = [E] : I.push(E));
        } else se = { eventTime: se, lane: I, tag: E.tag, payload: E.payload, callback: E.callback, next: null }, Q === null ? (z = Q = se, T = W) : Q = Q.next = se, m |= I;
        if (E = E.next, E === null) {
          if (E = c.shared.pending, E === null) break;
          I = E, E = I.next, I.next = null, c.lastBaseUpdate = I, c.shared.pending = null;
        }
      } while (!0);
      if (Q === null && (T = W), c.baseState = T, c.firstBaseUpdate = z, c.lastBaseUpdate = Q, r = c.shared.interleaved, r !== null) {
        c = r;
        do
          m |= c.lane, c = c.next;
        while (c !== r);
      } else d === null && (c.shared.lanes = 0);
      Su |= m, n.lanes = m, n.memoizedState = W;
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
  var uo = {}, Ei = qr(uo), hs = qr(uo), ms = qr(uo);
  function cu(n) {
    if (n === uo) throw Error(A(174));
    return n;
  }
  function Td(n, r) {
    switch (Jt(ms, r), Jt(hs, n), Jt(Ei, uo), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : ar(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = ar(r, n);
    }
    Gt(Ei), Jt(Ei, r);
  }
  function oo() {
    Gt(Ei), Gt(hs), Gt(ms);
  }
  function wd(n) {
    cu(ms.current);
    var r = cu(Ei.current), l = ar(r, n.type);
    r !== l && (Jt(hs, n), Jt(Ei, l));
  }
  function xd(n) {
    hs.current === n && (Gt(Ei), Gt(hs));
  }
  var pn = qr(0);
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
  var be = ze.ReactCurrentDispatcher, ot = ze.ReactCurrentBatchConfig, Et = 0, Xe = null, Kt = null, Bn = null, Dc = !1, gs = !1, Ss = 0, bd = 0;
  function V() {
    throw Error(A(321));
  }
  function An(n, r) {
    if (r === null) return !1;
    for (var l = 0; l < r.length && l < n.length; l++) if (!Za(n[l], r[l])) return !1;
    return !0;
  }
  function Ue(n, r, l, o, c, d) {
    if (Et = d, Xe = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, be.current = n === null || n.memoizedState === null ? $c : Yc, n = l(o, c), gs) {
      d = 0;
      do {
        if (gs = !1, Ss = 0, 25 <= d) throw Error(A(301));
        d += 1, Bn = Kt = null, r.updateQueue = null, be.current = ws, n = l(o, c);
      } while (gs);
    }
    if (be.current = Bt, r = Kt !== null && Kt.next !== null, Et = 0, Bn = Kt = Xe = null, Dc = !1, r) throw Error(A(300));
    return n;
  }
  function Tl() {
    var n = Ss !== 0;
    return Ss = 0, n;
  }
  function Xn() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Bn === null ? Xe.memoizedState = Bn = n : Bn = Bn.next = n, Bn;
  }
  function Zn() {
    if (Kt === null) {
      var n = Xe.alternate;
      n = n !== null ? n.memoizedState : null;
    } else n = Kt.next;
    var r = Bn === null ? Xe.memoizedState : Bn.next;
    if (r !== null) Bn = r, Kt = n;
    else {
      if (n === null) throw Error(A(310));
      Kt = n, n = { memoizedState: Kt.memoizedState, baseState: Kt.baseState, baseQueue: Kt.baseQueue, queue: Kt.queue, next: null }, Bn === null ? Xe.memoizedState = Bn = n : Bn = Bn.next = n;
    }
    return Bn;
  }
  function Jr(n, r) {
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
        var Q = z.lane;
        if ((Et & Q) === Q) T !== null && (T = T.next = { lane: 0, action: z.action, hasEagerState: z.hasEagerState, eagerState: z.eagerState, next: null }), o = z.hasEagerState ? z.eagerState : n(o, z.action);
        else {
          var W = {
            lane: Q,
            action: z.action,
            hasEagerState: z.hasEagerState,
            eagerState: z.eagerState,
            next: null
          };
          T === null ? (E = T = W, m = o) : T = T.next = W, Xe.lanes |= Q, Su |= Q;
        }
        z = z.next;
      } while (z !== null && z !== d);
      T === null ? m = o : T.next = E, Za(o, r.memoizedState) || (Jn = !0), r.memoizedState = o, r.baseState = m, r.baseQueue = T, l.lastRenderedState = o;
    }
    if (n = l.interleaved, n !== null) {
      c = n;
      do
        d = c.lane, Xe.lanes |= d, Su |= d, c = c.next;
      while (c !== n);
    } else c === null && (l.lanes = 0);
    return [r.memoizedState, l.dispatch];
  }
  function wl(n) {
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
      Za(d, r.memoizedState) || (Jn = !0), r.memoizedState = d, r.baseQueue === null && (r.baseState = d), l.lastRenderedState = d;
    }
    return [d, o];
  }
  function so() {
  }
  function kc(n, r) {
    var l = Xe, o = Zn(), c = r(), d = !Za(o.memoizedState, c);
    if (d && (o.memoizedState = c, Jn = !0), o = o.queue, Es(Mc.bind(null, l, o, n), [n]), o.getSnapshot !== r || d || Bn !== null && Bn.memoizedState.tag & 1) {
      if (l.flags |= 2048, du(9, Lc.bind(null, l, o, c, r), void 0, null), Fn === null) throw Error(A(349));
      Et & 30 || Oc(l, r, c);
    }
    return c;
  }
  function Oc(n, r, l) {
    n.flags |= 16384, n = { getSnapshot: r, value: l }, r = Xe.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Xe.updateQueue = r, r.stores = [n]) : (l = r.stores, l === null ? r.stores = [n] : l.push(n));
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
      return !Za(n, l);
    } catch {
      return !0;
    }
  }
  function zc(n) {
    var r = Si(n, 1);
    r !== null && Ea(r, n, 1, -1);
  }
  function Uc(n) {
    var r = Xn();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Jr, lastRenderedState: n }, r.queue = n, n = n.dispatch = Ts.bind(null, Xe, n), [r.memoizedState, n];
  }
  function du(n, r, l, o) {
    return n = { tag: n, create: r, destroy: l, deps: o, next: null }, r = Xe.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Xe.updateQueue = r, r.lastEffect = n.next = n) : (l = r.lastEffect, l === null ? r.lastEffect = n.next = n : (o = l.next, l.next = n, n.next = o, r.lastEffect = n)), n;
  }
  function Ac() {
    return Zn().memoizedState;
  }
  function co(n, r, l, o) {
    var c = Xn();
    Xe.flags |= n, c.memoizedState = du(1 | r, l, void 0, o === void 0 ? null : o);
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
    Xe.flags |= n, c.memoizedState = du(1 | r, l, d, o);
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
  function Vc(n, r) {
    var l = Zn();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && An(r, o[1]) ? o[0] : (l.memoizedState = [n, r], n);
  }
  function Pc(n, r) {
    var l = Zn();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && An(r, o[1]) ? o[0] : (n = n(), l.memoizedState = [n, r], n);
  }
  function Bc(n, r, l) {
    return Et & 21 ? (Za(l, r) || (l = Gl(), Xe.lanes |= l, Su |= l, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, Jn = !0), n.memoizedState = l);
  }
  function jv(n, r) {
    var l = wt;
    wt = l !== 0 && 4 > l ? l : 4, n(!0);
    var o = ot.transition;
    ot.transition = {};
    try {
      n(!1), r();
    } finally {
      wt = l, ot.transition = o;
    }
  }
  function po() {
    return Zn().memoizedState;
  }
  function Hv(n, r, l) {
    var o = Sa(n);
    if (l = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null }, xl(n)) ma(r, l);
    else if (l = Uv(n, r, l, o), l !== null) {
      var c = en();
      Ea(l, n, o, c), Vv(l, r, o);
    }
  }
  function Ts(n, r, l) {
    var o = Sa(n), c = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null };
    if (xl(n)) ma(r, c);
    else {
      var d = n.alternate;
      if (n.lanes === 0 && (d === null || d.lanes === 0) && (d = r.lastRenderedReducer, d !== null)) try {
        var m = r.lastRenderedState, E = d(m, l);
        if (c.hasEagerState = !0, c.eagerState = E, Za(E, m)) {
          var T = r.interleaved;
          T === null ? (c.next = c, Cd(r)) : (c.next = T.next, T.next = c), r.interleaved = c;
          return;
        }
      } catch {
      } finally {
      }
      l = Uv(n, r, c, o), l !== null && (c = en(), Ea(l, n, o, c), Vv(l, r, o));
    }
  }
  function xl(n) {
    var r = n.alternate;
    return n === Xe || r !== null && r === Xe;
  }
  function ma(n, r) {
    gs = Dc = !0;
    var l = n.pending;
    l === null ? r.next = r : (r.next = l.next, l.next = r), n.pending = r;
  }
  function Vv(n, r, l) {
    if (l & 4194240) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, Qo(n, l);
    }
  }
  var Bt = { readContext: Pt, useCallback: V, useContext: V, useEffect: V, useImperativeHandle: V, useInsertionEffect: V, useLayoutEffect: V, useMemo: V, useReducer: V, useRef: V, useState: V, useDebugValue: V, useDeferredValue: V, useTransition: V, useMutableSource: V, useSyncExternalStore: V, useId: V, unstable_isNewReconciler: !1 }, $c = { readContext: Pt, useCallback: function(n, r) {
    return Xn().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: Pt, useEffect: Fc, useImperativeHandle: function(n, r, l) {
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
    return r = l !== void 0 ? l(r) : r, o.memoizedState = o.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, o.queue = n, n = n.dispatch = Hv.bind(null, Xe, n), [o.memoizedState, n];
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
    var o = Xe, c = Xn();
    if (sn) {
      if (l === void 0) throw Error(A(407));
      l = l();
    } else {
      if (l = r(), Fn === null) throw Error(A(349));
      Et & 30 || Oc(o, r, l);
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
      var l = gi, o = Nr;
      l = (o & ~(1 << 32 - kr(o) - 1)).toString(32) + l, r = ":" + r + "R" + l, l = Ss++, 0 < l && (r += "H" + l.toString(32)), r += ":";
    } else l = bd++, r = ":" + r + "r" + l.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, Yc = {
    readContext: Pt,
    useCallback: Vc,
    useContext: Pt,
    useEffect: Es,
    useImperativeHandle: pu,
    useInsertionEffect: jc,
    useLayoutEffect: Hc,
    useMemo: Pc,
    useReducer: fu,
    useRef: Ac,
    useState: function() {
      return fu(Jr);
    },
    useDebugValue: Rs,
    useDeferredValue: function(n) {
      var r = Zn();
      return Bc(r, Kt.memoizedState, n);
    },
    useTransition: function() {
      var n = fu(Jr)[0], r = Zn().memoizedState;
      return [n, r];
    },
    useMutableSource: so,
    useSyncExternalStore: kc,
    useId: po,
    unstable_isNewReconciler: !1
  }, ws = { readContext: Pt, useCallback: Vc, useContext: Pt, useEffect: Es, useImperativeHandle: pu, useInsertionEffect: jc, useLayoutEffect: Hc, useMemo: Pc, useReducer: wl, useRef: Ac, useState: function() {
    return wl(Jr);
  }, useDebugValue: Rs, useDeferredValue: function(n) {
    var r = Zn();
    return Kt === null ? r.memoizedState = n : Bc(r, Kt.memoizedState, n);
  }, useTransition: function() {
    var n = wl(Jr)[0], r = Zn().memoizedState;
    return [n, r];
  }, useMutableSource: so, useSyncExternalStore: kc, useId: po, unstable_isNewReconciler: !1 };
  function ea(n, r) {
    if (n && n.defaultProps) {
      r = re({}, r), n = n.defaultProps;
      for (var l in n) r[l] === void 0 && (r[l] = n[l]);
      return r;
    }
    return r;
  }
  function Dd(n, r, l, o) {
    r = n.memoizedState, l = l(o, r), l = l == null ? r : re({}, r, l), n.memoizedState = l, n.lanes === 0 && (n.updateQueue.baseState = l);
  }
  var Ic = { isMounted: function(n) {
    return (n = n._reactInternals) ? ie(n) === n : !1;
  }, enqueueSetState: function(n, r, l) {
    n = n._reactInternals;
    var o = en(), c = Sa(n), d = Qi(o, c);
    d.payload = r, l != null && (d.callback = l), r = Rl(n, d, c), r !== null && (Ea(r, n, c, o), xc(r, n, c));
  }, enqueueReplaceState: function(n, r, l) {
    n = n._reactInternals;
    var o = en(), c = Sa(n), d = Qi(o, c);
    d.tag = 1, d.payload = r, l != null && (d.callback = l), r = Rl(n, d, c), r !== null && (Ea(r, n, c, o), xc(r, n, c));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var l = en(), o = Sa(n), c = Qi(l, o);
    c.tag = 2, r != null && (c.callback = r), r = Rl(n, c, o), r !== null && (Ea(r, n, o, l), xc(r, n, o));
  } };
  function Pv(n, r, l, o, c, d, m) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(o, d, m) : r.prototype && r.prototype.isPureReactComponent ? !Jo(l, o) || !Jo(c, d) : !0;
  }
  function Bv(n, r, l) {
    var o = !1, c = ut, d = r.contextType;
    return typeof d == "object" && d !== null ? d = Pt(d) : (c = zn(r) ? Na : yn.current, o = r.contextTypes, d = (o = o != null) ? va(n, c) : ut), r = new r(l, d), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = Ic, n.stateNode = r, r._reactInternals = n, o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = d), r;
  }
  function Qc(n, r, l, o) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(l, o), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(l, o), r.state !== n && Ic.enqueueReplaceState(r, r.state, null);
  }
  function kd(n, r, l, o) {
    var c = n.stateNode;
    c.props = l, c.state = n.memoizedState, c.refs = {}, Cl(n);
    var d = r.contextType;
    typeof d == "object" && d !== null ? c.context = Pt(d) : (d = zn(r) ? Na : yn.current, c.context = va(n, d)), c.state = n.memoizedState, d = r.getDerivedStateFromProps, typeof d == "function" && (Dd(n, r, d, l), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && Ic.enqueueReplaceState(c, c.state, null), _c(n, l, c, o), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function _l(n, r) {
    try {
      var l = "", o = r;
      do
        l += Ye(o), o = o.return;
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
    l = Qi(-1, l), l.tag = 3, l.payload = { element: null };
    var o = r.value;
    return l.callback = function() {
      Dl || (Dl = !0, Ns = o), Od(n, r);
    }, l;
  }
  function $v(n, r, l) {
    l = Qi(-1, l), l.tag = 3;
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
      Od(n, r), typeof o != "function" && (ja === null ? ja = /* @__PURE__ */ new Set([this]) : ja.add(this));
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
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = c, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, l.flags |= 131072, l.flags &= -52805, l.tag === 1 && (l.alternate === null ? l.tag = 17 : (r = Qi(-1, 1), r.tag = 2, Rl(l, r, 1))), l.lanes |= 1), n);
  }
  var vu = ze.ReactCurrentOwner, Jn = !1;
  function Tn(n, r, l, o) {
    r.child = n === null ? ur(r, null, l, o) : ni(r, n.child, l, o);
  }
  function Gc(n, r, l, o, c) {
    l = l.render;
    var d = r.ref;
    return lo(r, c), o = Ue(n, r, l, o, d, c), l = Tl(), n !== null && !Jn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, or(n, r, c)) : (sn && l && dd(r), r.flags |= 1, Tn(n, r, o, c), r.child);
  }
  function ta(n, r, l, o, c) {
    if (n === null) {
      var d = l.type;
      return typeof d == "function" && !Qd(d) && d.defaultProps === void 0 && l.compare === null && l.defaultProps === void 0 ? (r.tag = 15, r.type = d, hu(n, r, d, o, c)) : (n = cf(l.type, null, o, r, r.mode, c), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (d = n.child, !(n.lanes & c)) {
      var m = d.memoizedProps;
      if (l = l.compare, l = l !== null ? l : Jo, l(m, o) && n.ref === r.ref) return or(n, r, c);
    }
    return r.flags |= 1, n = Ll(d, o), n.ref = r.ref, n.return = r, r.child = n;
  }
  function hu(n, r, l, o, c) {
    if (n !== null) {
      var d = n.memoizedProps;
      if (Jo(d, o) && n.ref === r.ref) if (Jn = !1, r.pendingProps = o = d, (n.lanes & c) !== 0) n.flags & 131072 && (Jn = !0);
      else return r.lanes = n.lanes, or(n, r, c);
    }
    return Kc(n, r, l, o, c);
  }
  function Je(n, r, l) {
    var o = r.pendingProps, c = o.children, d = n !== null ? n.memoizedState : null;
    if (o.mode === "hidden") if (!(r.mode & 1)) r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Jt(yo, ga), ga |= l;
    else {
      if (!(l & 1073741824)) return n = d !== null ? d.baseLanes | l : l, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, Jt(yo, ga), ga |= n, null;
      r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, o = d !== null ? d.baseLanes : l, Jt(yo, ga), ga |= o;
    }
    else d !== null ? (o = d.baseLanes | l, r.memoizedState = null) : o = l, Jt(yo, ga), ga |= o;
    return Tn(n, r, c, l), r.child;
  }
  function _s(n, r) {
    var l = r.ref;
    (n === null && l !== null || n !== null && n.ref !== l) && (r.flags |= 512, r.flags |= 2097152);
  }
  function Kc(n, r, l, o, c) {
    var d = zn(l) ? Na : yn.current;
    return d = va(r, d), lo(r, c), l = Ue(n, r, l, o, d, c), o = Tl(), n !== null && !Jn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, or(n, r, c)) : (sn && o && dd(r), r.flags |= 1, Tn(n, r, l, c), r.child);
  }
  function ay(n, r, l, o, c) {
    if (zn(l)) {
      var d = !0;
      lu(r);
    } else d = !1;
    if (lo(r, c), r.stateNode === null) Aa(n, r), Bv(r, l, o), kd(r, l, o, c), o = !0;
    else if (n === null) {
      var m = r.stateNode, E = r.memoizedProps;
      m.props = E;
      var T = m.context, z = l.contextType;
      typeof z == "object" && z !== null ? z = Pt(z) : (z = zn(l) ? Na : yn.current, z = va(r, z));
      var Q = l.getDerivedStateFromProps, W = typeof Q == "function" || typeof m.getSnapshotBeforeUpdate == "function";
      W || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (E !== o || T !== z) && Qc(r, m, o, z), Ua = !1;
      var I = r.memoizedState;
      m.state = I, _c(r, o, m, c), T = r.memoizedState, E !== o || I !== T || Nn.current || Ua ? (typeof Q == "function" && (Dd(r, l, Q, o), T = r.memoizedState), (E = Ua || Pv(r, l, E, o, I, T, z)) ? (W || typeof m.UNSAFE_componentWillMount != "function" && typeof m.componentWillMount != "function" || (typeof m.componentWillMount == "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && m.UNSAFE_componentWillMount()), typeof m.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = o, r.memoizedState = T), m.props = o, m.state = T, m.context = z, o = E) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), o = !1);
    } else {
      m = r.stateNode, Av(n, r), E = r.memoizedProps, z = r.type === r.elementType ? E : ea(r.type, E), m.props = z, W = r.pendingProps, I = m.context, T = l.contextType, typeof T == "object" && T !== null ? T = Pt(T) : (T = zn(l) ? Na : yn.current, T = va(r, T));
      var se = l.getDerivedStateFromProps;
      (Q = typeof se == "function" || typeof m.getSnapshotBeforeUpdate == "function") || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (E !== W || I !== T) && Qc(r, m, o, T), Ua = !1, I = r.memoizedState, m.state = I, _c(r, o, m, c);
      var ye = r.memoizedState;
      E !== W || I !== ye || Nn.current || Ua ? (typeof se == "function" && (Dd(r, l, se, o), ye = r.memoizedState), (z = Ua || Pv(r, l, z, o, I, ye, T) || !1) ? (Q || typeof m.UNSAFE_componentWillUpdate != "function" && typeof m.componentWillUpdate != "function" || (typeof m.componentWillUpdate == "function" && m.componentWillUpdate(o, ye, T), typeof m.UNSAFE_componentWillUpdate == "function" && m.UNSAFE_componentWillUpdate(o, ye, T)), typeof m.componentDidUpdate == "function" && (r.flags |= 4), typeof m.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof m.componentDidUpdate != "function" || E === n.memoizedProps && I === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || E === n.memoizedProps && I === n.memoizedState || (r.flags |= 1024), r.memoizedProps = o, r.memoizedState = ye), m.props = o, m.state = ye, m.context = T, o = z) : (typeof m.componentDidUpdate != "function" || E === n.memoizedProps && I === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || E === n.memoizedProps && I === n.memoizedState || (r.flags |= 1024), o = !1);
    }
    return Nd(n, r, l, o, d, c);
  }
  function Nd(n, r, l, o, c, d) {
    _s(n, r);
    var m = (r.flags & 128) !== 0;
    if (!o && !m) return c && za(r, l, !1), or(n, r, d);
    o = r.stateNode, vu.current = r;
    var E = m && typeof l.getDerivedStateFromError != "function" ? null : o.render();
    return r.flags |= 1, n !== null && m ? (r.child = ni(r, n.child, null, d), r.child = ni(r, null, E, d)) : Tn(n, r, E, d), r.memoizedState = o.state, c && za(r, l, !0), r.child;
  }
  function qc(n) {
    var r = n.stateNode;
    r.pendingContext ? Tc(n, r.pendingContext, r.pendingContext !== r.context) : r.context && Tc(n, r.context, !1), Td(n, r.containerInfo);
  }
  function vo(n, r, l, o, c) {
    return Ii(), ps(c), r.flags |= 256, Tn(n, r, l, o), r.child;
  }
  var zd = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Xc(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function Iv(n, r, l) {
    var o = r.pendingProps, c = pn.current, d = !1, m = (r.flags & 128) !== 0, E;
    if ((E = m) || (E = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), E ? (d = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), Jt(pn, c & 1), n === null)
      return md(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (m = o.children, n = o.fallback, d ? (o = r.mode, d = r.child, m = { mode: "hidden", children: m }, !(o & 1) && d !== null ? (d.childLanes = 0, d.pendingProps = m) : d = To(m, o, 0, null), n = Ml(n, o, l, null), d.return = r, n.return = r, d.sibling = n, r.child = d, r.child.memoizedState = Xc(l), r.memoizedState = zd, n) : bs(r, m));
    if (c = n.memoizedState, c !== null && (E = c.dehydrated, E !== null)) return Qv(n, r, m, o, E, c, l);
    if (d) {
      d = o.fallback, m = r.mode, c = n.child, E = c.sibling;
      var T = { mode: "hidden", children: o.children };
      return !(m & 1) && r.child !== c ? (o = r.child, o.childLanes = 0, o.pendingProps = T, r.deletions = null) : (o = Ll(c, T), o.subtreeFlags = c.subtreeFlags & 14680064), E !== null ? d = Ll(E, d) : (d = Ml(d, m, l, null), d.flags |= 2), d.return = r, o.return = r, o.sibling = d, r.child = o, o = d, d = r.child, m = n.child.memoizedState, m = m === null ? Xc(l) : { baseLanes: m.baseLanes | l, cachePool: null, transitions: m.transitions }, d.memoizedState = m, d.childLanes = n.childLanes & ~l, r.memoizedState = zd, o;
    }
    return d = n.child, n = d.sibling, o = Ll(d, { mode: "visible", children: o.children }), !(r.mode & 1) && (o.lanes = l), o.return = r, o.sibling = null, n !== null && (l = r.deletions, l === null ? (r.deletions = [n], r.flags |= 16) : l.push(n)), r.child = o, r.memoizedState = null, o;
  }
  function bs(n, r) {
    return r = To({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function Zc(n, r, l, o) {
    return o !== null && ps(o), ni(r, n.child, null, l), n = bs(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function Qv(n, r, l, o, c, d, m) {
    if (l)
      return r.flags & 256 ? (r.flags &= -257, o = Wc(Error(A(422))), Zc(n, r, m, o)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (d = o.fallback, c = r.mode, o = To({ mode: "visible", children: o.children }, c, 0, null), d = Ml(d, c, m, null), d.flags |= 2, o.return = r, d.return = r, o.sibling = d, r.child = o, r.mode & 1 && ni(r, n.child, null, m), r.child.memoizedState = Xc(m), r.memoizedState = zd, d);
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
        c = c & (o.suspendedLanes | m) ? 0 : c, c !== 0 && c !== d.retryLane && (d.retryLane = c, Si(n, c), Ea(o, n, c, -1));
      }
      return Bd(), o = Wc(Error(A(421))), Zc(n, r, m, o);
    }
    return c.data === "$?" ? (r.flags |= 128, r.child = n.child, r = cy.bind(null, n), c._reactRetry = r, null) : (n = d.treeContext, Zr = Ja(c.nextSibling), Xr = r, sn = !0, ti = null, n !== null && (lr[Un++] = Nr, lr[Un++] = gi, lr[Un++] = uu, Nr = n.id, gi = n.overflow, uu = r), r = bs(r, o.children), r.flags |= 4096, r);
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
  function na(n, r, l) {
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
  function Aa(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function or(n, r, l) {
    if (n !== null && (r.dependencies = n.dependencies), Su |= r.lanes, !(l & r.childLanes)) return null;
    if (n !== null && r.child !== n.child) throw Error(A(153));
    if (r.child !== null) {
      for (n = r.child, l = Ll(n, n.pendingProps), r.child = l, l.return = r; n.sibling !== null; ) n = n.sibling, l = l.sibling = Ll(n, n.pendingProps), l.return = r;
      l.sibling = null;
    }
    return r.child;
  }
  function ef(n, r, l) {
    switch (r.tag) {
      case 3:
        qc(r), Ii();
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
        Jt(te, o._currentValue), o._currentValue = c;
        break;
      case 13:
        if (o = r.memoizedState, o !== null)
          return o.dehydrated !== null ? (Jt(pn, pn.current & 1), r.flags |= 128, null) : l & r.child.childLanes ? Iv(n, r, l) : (Jt(pn, pn.current & 1), n = or(n, r, l), n !== null ? n.sibling : null);
        Jt(pn, pn.current & 1);
        break;
      case 19:
        if (o = (l & r.childLanes) !== 0, n.flags & 128) {
          if (o) return na(n, r, l);
          r.flags |= 128;
        }
        if (c = r.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), Jt(pn, pn.current), o) break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, Je(n, r, l);
    }
    return or(n, r, l);
  }
  var ho, ya, $n, Wv;
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
  }, ya = function() {
  }, $n = function(n, r, l, o) {
    var c = n.memoizedProps;
    if (c !== o) {
      n = r.stateNode, cu(Ei.current);
      var d = null;
      switch (l) {
        case "input":
          c = Dn(n, c), o = Dn(n, o), d = [];
          break;
        case "select":
          c = re({}, c, { value: void 0 }), o = re({}, o, { value: void 0 }), d = [];
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
      } else z !== "dangerouslySetInnerHTML" && z !== "children" && z !== "suppressContentEditableWarning" && z !== "suppressHydrationWarning" && z !== "autoFocus" && (Rt.hasOwnProperty(z) ? d || (d = []) : (d = d || []).push(z, null));
      for (z in o) {
        var T = o[z];
        if (E = c != null ? c[z] : void 0, o.hasOwnProperty(z) && T !== E && (T != null || E != null)) if (z === "style") if (E) {
          for (m in E) !E.hasOwnProperty(m) || T && T.hasOwnProperty(m) || (l || (l = {}), l[m] = "");
          for (m in T) T.hasOwnProperty(m) && E[m] !== T[m] && (l || (l = {}), l[m] = T[m]);
        } else l || (d || (d = []), d.push(
          z,
          l
        )), l = T;
        else z === "dangerouslySetInnerHTML" ? (T = T ? T.__html : void 0, E = E ? E.__html : void 0, T != null && E !== T && (d = d || []).push(z, T)) : z === "children" ? typeof T != "string" && typeof T != "number" || (d = d || []).push(z, "" + T) : z !== "suppressContentEditableWarning" && z !== "suppressHydrationWarning" && (Rt.hasOwnProperty(z) ? (T != null && z === "onScroll" && jt("scroll", n), d || E === T || (d = [])) : (d = d || []).push(z, T));
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
        return zn(r.type) && yi(), _r(r), null;
      case 3:
        return o = r.stateNode, oo(), Gt(Nn), Gt(yn), ys(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (n === null || n.child === null) && (Rn(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, ti !== null && (Fs(ti), ti = null))), ya(n, r), _r(r), null;
      case 5:
        xd(r);
        var c = cu(ms.current);
        if (l = r.type, n !== null && r.stateNode != null) $n(n, r, l, o, c), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!o) {
            if (r.stateNode === null) throw Error(A(166));
            return _r(r), null;
          }
          if (n = cu(Ei.current), Rn(r)) {
            o = r.stateNode, l = r.type;
            var d = r.memoizedProps;
            switch (o[Ma] = r, o[ss] = d, n = (r.mode & 1) !== 0, l) {
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
              ), c = ["children", "" + E]) : Rt.hasOwnProperty(m) && E != null && m === "onScroll" && jt("scroll", o);
            }
            switch (l) {
              case "input":
                bn(o), sa(o, d, !0);
                break;
              case "textarea":
                bn(o), Ga(o);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof d.onClick == "function" && (o.onclick = Sc);
            }
            o = c, r.updateQueue = o, o !== null && (r.flags |= 4);
          } else {
            m = c.nodeType === 9 ? c : c.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = On(l)), n === "http://www.w3.org/1999/xhtml" ? l === "script" ? (n = m.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof o.is == "string" ? n = m.createElement(l, { is: o.is }) : (n = m.createElement(l), l === "select" && (m = n, o.multiple ? m.multiple = !0 : o.size && (m.size = o.size))) : n = m.createElementNS(n, l), n[Ma] = r, n[ss] = o, ho(n, r, !1, !1), r.stateNode = n;
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
                  n._wrapperState = { wasMultiple: !!o.multiple }, c = re({}, o, { value: void 0 }), jt("invalid", n);
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
                d === "style" ? Nt(n, T) : d === "dangerouslySetInnerHTML" ? (T = T ? T.__html : void 0, T != null && Oi(n, T)) : d === "children" ? typeof T == "string" ? (l !== "textarea" || T !== "") && ca(n, T) : typeof T == "number" && ca(n, "" + T) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (Rt.hasOwnProperty(d) ? T != null && d === "onScroll" && jt("scroll", n) : T != null && it(n, d, T, m));
              }
              switch (l) {
                case "input":
                  bn(n), sa(n, o, !1);
                  break;
                case "textarea":
                  bn(n), Ga(n);
                  break;
                case "option":
                  o.value != null && n.setAttribute("value", "" + Ge(o.value));
                  break;
                case "select":
                  n.multiple = !!o.multiple, d = o.value, d != null ? Pn(n, !!o.multiple, d, !1) : o.defaultValue != null && Pn(
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
          if (l = cu(ms.current), cu(Ei.current), Rn(r)) {
            if (o = r.stateNode, l = r.memoizedProps, o[Ma] = r, (d = o.nodeValue !== l) && (n = Xr, n !== null)) switch (n.tag) {
              case 3:
                gc(o.nodeValue, l, (n.mode & 1) !== 0);
                break;
              case 5:
                n.memoizedProps.suppressHydrationWarning !== !0 && gc(o.nodeValue, l, (n.mode & 1) !== 0);
            }
            d && (r.flags |= 4);
          } else o = (l.nodeType === 9 ? l : l.ownerDocument).createTextNode(o), o[Ma] = r, r.stateNode = o;
        }
        return _r(r), null;
      case 13:
        if (Gt(pn), o = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (sn && Zr !== null && r.mode & 1 && !(r.flags & 128)) Mv(), Ii(), r.flags |= 98560, d = !1;
          else if (d = Rn(r), o !== null && o.dehydrated !== null) {
            if (n === null) {
              if (!d) throw Error(A(318));
              if (d = r.memoizedState, d = d !== null ? d.dehydrated : null, !d) throw Error(A(317));
              d[Ma] = r;
            } else Ii(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            _r(r), d = !1;
          } else ti !== null && (Fs(ti), ti = null), d = !0;
          if (!d) return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = l, r) : (o = o !== null, o !== (n !== null && n.memoizedState !== null) && o && (r.child.flags |= 8192, r.mode & 1 && (n === null || pn.current & 1 ? Yn === 0 && (Yn = 3) : Bd())), r.updateQueue !== null && (r.flags |= 4), _r(r), null);
      case 4:
        return oo(), ya(n, r), n === null && ls(r.stateNode.containerInfo), _r(r), null;
      case 10:
        return Sd(r.type._context), _r(r), null;
      case 17:
        return zn(r.type) && yi(), _r(r), null;
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
        return Pd(), o = r.memoizedState !== null, n !== null && n.memoizedState !== null !== o && (r.flags |= 8192), o && r.mode & 1 ? ga & 1073741824 && (_r(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : _r(r), null;
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
        return zn(r.type) && yi(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return oo(), Gt(Nn), Gt(yn), ys(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return xd(r), null;
      case 13:
        if (Gt(pn), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null) throw Error(A(340));
          Ii();
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
        return Pd(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var mu = !1, sr = !1, iy = typeof WeakSet == "function" ? WeakSet : Set, ve = null;
  function bl(n, r) {
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
    if (ru = fl, n = vl(), Ku(n)) {
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
          var m = 0, E = -1, T = -1, z = 0, Q = 0, W = n, I = null;
          t: for (; ; ) {
            for (var se; W !== l || c !== 0 && W.nodeType !== 3 || (E = m + c), W !== d || o !== 0 && W.nodeType !== 3 || (T = m + o), W.nodeType === 3 && (m += W.nodeValue.length), (se = W.firstChild) !== null; )
              I = W, W = se;
            for (; ; ) {
              if (W === n) break t;
              if (I === l && ++z === c && (E = m), I === d && ++Q === o && (T = m), (se = W.nextSibling) !== null) break;
              W = I, I = W.parentNode;
            }
            W = se;
          }
          l = E === -1 || T === -1 ? null : { start: E, end: T };
        } else l = null;
      }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (os = { focusedElem: n, selectionRange: l }, fl = !1, ve = r; ve !== null; ) if (r = ve, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null) n.return = r, ve = n;
    else for (; ve !== null; ) {
      r = ve;
      try {
        var ye = r.alternate;
        if (r.flags & 1024) switch (r.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (ye !== null) {
              var Ee = ye.memoizedProps, xn = ye.memoizedState, D = r.stateNode, x = D.getSnapshotBeforeUpdate(r.elementType === r.type ? Ee : ea(r.type, Ee), xn);
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
      } catch (K) {
        gn(r, r.return, K);
      }
      if (n = r.sibling, n !== null) {
        n.return = r.return, ve = n;
        break;
      }
      ve = r.return;
    }
    return ye = jd, jd = !1, ye;
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
    r !== null && (n.alternate = null, Kv(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[Ma], delete r[ss], delete r[sd], delete r[cd], delete r[ro])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
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
  function Ci(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6) n = n.stateNode, r ? l.nodeType === 8 ? l.parentNode.insertBefore(n, r) : l.insertBefore(n, r) : (l.nodeType === 8 ? (r = l.parentNode, r.insertBefore(n, l)) : (r = l, r.appendChild(n)), l = l._reactRootContainer, l != null || r.onclick !== null || (r.onclick = Sc));
    else if (o !== 4 && (n = n.child, n !== null)) for (Ci(n, r, l), n = n.sibling; n !== null; ) Ci(n, r, l), n = n.sibling;
  }
  function Ri(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6) n = n.stateNode, r ? l.insertBefore(n, r) : l.appendChild(n);
    else if (o !== 4 && (n = n.child, n !== null)) for (Ri(n, r, l), n = n.sibling; n !== null; ) Ri(n, r, l), n = n.sibling;
  }
  var vn = null, zr = !1;
  function Fa(n, r, l) {
    for (l = l.child; l !== null; ) Wi(n, r, l), l = l.sibling;
  }
  function Wi(n, r, l) {
    if (Qr && typeof Qr.onCommitFiberUnmount == "function") try {
      Qr.onCommitFiberUnmount(ul, l);
    } catch {
    }
    switch (l.tag) {
      case 5:
        sr || bl(l, r);
      case 6:
        var o = vn, c = zr;
        vn = null, Fa(n, r, l), vn = o, zr = c, vn !== null && (zr ? (n = vn, l = l.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(l) : n.removeChild(l)) : vn.removeChild(l.stateNode));
        break;
      case 18:
        vn !== null && (zr ? (n = vn, l = l.stateNode, n.nodeType === 8 ? to(n.parentNode, l) : n.nodeType === 1 && to(n, l), ka(n)) : to(vn, l.stateNode));
        break;
      case 4:
        o = vn, c = zr, vn = l.stateNode.containerInfo, zr = !0, Fa(n, r, l), vn = o, zr = c;
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
        Fa(n, r, l);
        break;
      case 1:
        if (!sr && (bl(l, r), o = l.stateNode, typeof o.componentWillUnmount == "function")) try {
          o.props = l.memoizedProps, o.state = l.memoizedState, o.componentWillUnmount();
        } catch (E) {
          gn(l, r, E);
        }
        Fa(n, r, l);
        break;
      case 21:
        Fa(n, r, l);
        break;
      case 22:
        l.mode & 1 ? (sr = (o = sr) || l.memoizedState !== null, Fa(n, r, l), sr = o) : Fa(n, r, l);
        break;
      default:
        Fa(n, r, l);
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
  function ri(n, r) {
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
        Wi(d, m, c), vn = null, zr = !1;
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
        if (ri(r, n), ai(n), o & 4) {
          try {
            mo(3, n, n.return), tf(3, n);
          } catch (Ee) {
            gn(n, n.return, Ee);
          }
          try {
            mo(5, n, n.return);
          } catch (Ee) {
            gn(n, n.return, Ee);
          }
        }
        break;
      case 1:
        ri(r, n), ai(n), o & 512 && l !== null && bl(l, l.return);
        break;
      case 5:
        if (ri(r, n), ai(n), o & 512 && l !== null && bl(l, l.return), n.flags & 32) {
          var c = n.stateNode;
          try {
            ca(c, "");
          } catch (Ee) {
            gn(n, n.return, Ee);
          }
        }
        if (o & 4 && (c = n.stateNode, c != null)) {
          var d = n.memoizedProps, m = l !== null ? l.memoizedProps : d, E = n.type, T = n.updateQueue;
          if (n.updateQueue = null, T !== null) try {
            E === "input" && d.type === "radio" && d.name != null && Vn(c, d), un(E, m);
            var z = un(E, d);
            for (m = 0; m < T.length; m += 2) {
              var Q = T[m], W = T[m + 1];
              Q === "style" ? Nt(c, W) : Q === "dangerouslySetInnerHTML" ? Oi(c, W) : Q === "children" ? ca(c, W) : it(c, Q, W, z);
            }
            switch (E) {
              case "input":
                kn(c, d);
                break;
              case "textarea":
                Cr(c, d);
                break;
              case "select":
                var I = c._wrapperState.wasMultiple;
                c._wrapperState.wasMultiple = !!d.multiple;
                var se = d.value;
                se != null ? Pn(c, !!d.multiple, se, !1) : I !== !!d.multiple && (d.defaultValue != null ? Pn(
                  c,
                  !!d.multiple,
                  d.defaultValue,
                  !0
                ) : Pn(c, !!d.multiple, d.multiple ? [] : "", !1));
            }
            c[ss] = d;
          } catch (Ee) {
            gn(n, n.return, Ee);
          }
        }
        break;
      case 6:
        if (ri(r, n), ai(n), o & 4) {
          if (n.stateNode === null) throw Error(A(162));
          c = n.stateNode, d = n.memoizedProps;
          try {
            c.nodeValue = d;
          } catch (Ee) {
            gn(n, n.return, Ee);
          }
        }
        break;
      case 3:
        if (ri(r, n), ai(n), o & 4 && l !== null && l.memoizedState.isDehydrated) try {
          ka(r.containerInfo);
        } catch (Ee) {
          gn(n, n.return, Ee);
        }
        break;
      case 4:
        ri(r, n), ai(n);
        break;
      case 13:
        ri(r, n), ai(n), c = n.child, c.flags & 8192 && (d = c.memoizedState !== null, c.stateNode.isHidden = d, !d || c.alternate !== null && c.alternate.memoizedState !== null || (Vd = Ut())), o & 4 && qv(n);
        break;
      case 22:
        if (Q = l !== null && l.memoizedState !== null, n.mode & 1 ? (sr = (z = sr) || Q, ri(r, n), sr = z) : ri(r, n), ai(n), o & 8192) {
          if (z = n.memoizedState !== null, (n.stateNode.isHidden = z) && !Q && n.mode & 1) for (ve = n, Q = n.child; Q !== null; ) {
            for (W = ve = Q; ve !== null; ) {
              switch (I = ve, se = I.child, I.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  mo(4, I, I.return);
                  break;
                case 1:
                  bl(I, I.return);
                  var ye = I.stateNode;
                  if (typeof ye.componentWillUnmount == "function") {
                    o = I, l = I.return;
                    try {
                      r = o, ye.props = r.memoizedProps, ye.state = r.memoizedState, ye.componentWillUnmount();
                    } catch (Ee) {
                      gn(o, l, Ee);
                    }
                  }
                  break;
                case 5:
                  bl(I, I.return);
                  break;
                case 22:
                  if (I.memoizedState !== null) {
                    Jv(W);
                    continue;
                  }
              }
              se !== null ? (se.return = I, ve = se) : Jv(W);
            }
            Q = Q.sibling;
          }
          e: for (Q = null, W = n; ; ) {
            if (W.tag === 5) {
              if (Q === null) {
                Q = W;
                try {
                  c = W.stateNode, z ? (d = c.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none") : (E = W.stateNode, T = W.memoizedProps.style, m = T != null && T.hasOwnProperty("display") ? T.display : null, E.style.display = et("display", m));
                } catch (Ee) {
                  gn(n, n.return, Ee);
                }
              }
            } else if (W.tag === 6) {
              if (Q === null) try {
                W.stateNode.nodeValue = z ? "" : W.memoizedProps;
              } catch (Ee) {
                gn(n, n.return, Ee);
              }
            } else if ((W.tag !== 22 && W.tag !== 23 || W.memoizedState === null || W === n) && W.child !== null) {
              W.child.return = W, W = W.child;
              continue;
            }
            if (W === n) break e;
            for (; W.sibling === null; ) {
              if (W.return === null || W.return === n) break e;
              Q === W && (Q = null), W = W.return;
            }
            Q === W && (Q = null), W.sibling.return = W.return, W = W.sibling;
          }
        }
        break;
      case 19:
        ri(r, n), ai(n), o & 4 && qv(n);
        break;
      case 21:
        break;
      default:
        ri(
          r,
          n
        ), ai(n);
    }
  }
  function ai(n) {
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
            o.flags & 32 && (ca(c, ""), o.flags &= -33);
            var d = ks(n);
            Ri(n, d, c);
            break;
          case 3:
          case 4:
            var m = o.stateNode.containerInfo, E = ks(n);
            Ci(n, E, m);
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
    ve = n, Zv(n);
  }
  function Zv(n, r, l) {
    for (var o = (n.mode & 1) !== 0; ve !== null; ) {
      var c = ve, d = c.child;
      if (c.tag === 22 && o) {
        var m = c.memoizedState !== null || mu;
        if (!m) {
          var E = c.alternate, T = E !== null && E.memoizedState !== null || sr;
          E = mu;
          var z = sr;
          if (mu = m, (sr = T) && !z) for (ve = c; ve !== null; ) m = ve, T = m.child, m.tag === 22 && m.memoizedState !== null ? Ls(c) : T !== null ? (T.return = m, ve = T) : Ls(c);
          for (; d !== null; ) ve = d, Zv(d), d = d.sibling;
          ve = c, mu = E, sr = z;
        }
        Hd(n);
      } else c.subtreeFlags & 8772 && d !== null ? (d.return = c, ve = d) : Hd(n);
    }
  }
  function Hd(n) {
    for (; ve !== null; ) {
      var r = ve;
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
                var c = r.elementType === r.type ? l.memoizedProps : ea(r.type, l.memoizedProps);
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
                  var Q = z.memoizedState;
                  if (Q !== null) {
                    var W = Q.dehydrated;
                    W !== null && ka(W);
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
        } catch (I) {
          gn(r, r.return, I);
        }
      }
      if (r === n) {
        ve = null;
        break;
      }
      if (l = r.sibling, l !== null) {
        l.return = r.return, ve = l;
        break;
      }
      ve = r.return;
    }
  }
  function Jv(n) {
    for (; ve !== null; ) {
      var r = ve;
      if (r === n) {
        ve = null;
        break;
      }
      var l = r.sibling;
      if (l !== null) {
        l.return = r.return, ve = l;
        break;
      }
      ve = r.return;
    }
  }
  function Ls(n) {
    for (; ve !== null; ) {
      var r = ve;
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
        ve = null;
        break;
      }
      var E = r.sibling;
      if (E !== null) {
        E.return = r.return, ve = E;
        break;
      }
      ve = r.return;
    }
  }
  var eh = Math.ceil, af = ze.ReactCurrentDispatcher, yu = ze.ReactCurrentOwner, br = ze.ReactCurrentBatchConfig, vt = 0, Fn = null, wn = null, cr = 0, ga = 0, yo = qr(0), Yn = 0, gu = null, Su = 0, Eu = 0, Ms = 0, go = null, ra = null, Vd = 0, So = 1 / 0, Gi = null, Dl = !1, Ns = null, ja = null, lf = !1, kl = null, zs = 0, Eo = 0, Co = null, Cu = -1, Us = 0;
  function en() {
    return vt & 6 ? Ut() : Cu !== -1 ? Cu : Cu = Ut();
  }
  function Sa(n) {
    return n.mode & 1 ? vt & 2 && cr !== 0 ? cr & -cr : ou.transition !== null ? (Us === 0 && (Us = Gl()), Us) : (n = wt, n !== 0 || (n = window.event, n = n === void 0 ? 16 : Go(n.type)), n) : 1;
  }
  function Ea(n, r, l, o) {
    if (50 < Eo) throw Eo = 0, Co = null, Error(A(185));
    cl(n, l, o), (!(vt & 2) || n !== Fn) && (n === Fn && (!(vt & 2) && (Eu |= l), Yn === 4 && Ol(n, cr)), er(n, o), l === 1 && vt === 0 && !(r.mode & 1) && (So = Ut() + 500, fs && Mr()));
  }
  function er(n, r) {
    var l = n.callbackNode;
    ju(n, r);
    var o = di(n, n === Fn ? cr : 0);
    if (o === 0) l !== null && on(l), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = o & -o, n.callbackPriority !== r) {
      if (l != null && on(l), r === 1) n.tag === 0 ? fd(Hs.bind(null, n)) : ml(Hs.bind(null, n)), ny(function() {
        !(vt & 6) && Mr();
      }), l = null;
      else {
        switch (Wo(o)) {
          case 1:
            l = qe;
            break;
          case 4:
            l = fi;
            break;
          case 16:
            l = zi;
            break;
          case 536870912:
            l = Ui;
            break;
          default:
            l = zi;
        }
        l = lh(l, th.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = l;
    }
  }
  function th(n, r) {
    if (Cu = -1, Us = 0, vt & 6) throw Error(A(327));
    var l = n.callbackNode;
    if (Ro() && n.callbackNode !== l) return null;
    var o = di(n, n === Fn ? cr : 0);
    if (o === 0) return null;
    if (o & 30 || o & n.expiredLanes || r) r = sf(n, o);
    else {
      r = o;
      var c = vt;
      vt |= 2;
      var d = nh();
      (Fn !== n || cr !== r) && (Gi = null, So = Ut() + 500, Tu(n, r));
      do
        try {
          oy();
          break;
        } catch (E) {
          of(n, E);
        }
      while (!0);
      gd(), af.current = d, vt = c, wn !== null ? r = 0 : (Fn = null, cr = 0, r = Yn);
    }
    if (r !== 0) {
      if (r === 2 && (c = Fi(n), c !== 0 && (o = c, r = As(n, c))), r === 1) throw l = gu, Tu(n, 0), Ol(n, o), er(n, Ut()), l;
      if (r === 6) Ol(n, o);
      else {
        if (c = n.current.alternate, !(o & 30) && !js(c) && (r = sf(n, o), r === 2 && (d = Fi(n), d !== 0 && (o = d, r = As(n, d))), r === 1)) throw l = gu, Tu(n, 0), Ol(n, o), er(n, Ut()), l;
        switch (n.finishedWork = c, n.finishedLanes = o, r) {
          case 0:
          case 1:
            throw Error(A(345));
          case 2:
            wu(n, ra, Gi);
            break;
          case 3:
            if (Ol(n, o), (o & 130023424) === o && (r = Vd + 500 - Ut(), 10 < r)) {
              if (di(n, 0) !== 0) break;
              if (c = n.suspendedLanes, (c & o) !== o) {
                en(), n.pingedLanes |= n.suspendedLanes & c;
                break;
              }
              n.timeoutHandle = Ec(wu.bind(null, n, ra, Gi), r);
              break;
            }
            wu(n, ra, Gi);
            break;
          case 4:
            if (Ol(n, o), (o & 4194240) === o) break;
            for (r = n.eventTimes, c = -1; 0 < o; ) {
              var m = 31 - kr(o);
              d = 1 << m, m = r[m], m > c && (c = m), o &= ~d;
            }
            if (o = c, o = Ut() - o, o = (120 > o ? 120 : 480 > o ? 480 : 1080 > o ? 1080 : 1920 > o ? 1920 : 3e3 > o ? 3e3 : 4320 > o ? 4320 : 1960 * eh(o / 1960)) - o, 10 < o) {
              n.timeoutHandle = Ec(wu.bind(null, n, ra, Gi), o);
              break;
            }
            wu(n, ra, Gi);
            break;
          case 5:
            wu(n, ra, Gi);
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
    return n.current.memoizedState.isDehydrated && (Tu(n, r).flags |= 256), n = sf(n, r), n !== 2 && (r = ra, ra = l, r !== null && Fs(r)), n;
  }
  function Fs(n) {
    ra === null ? ra = n : ra.push.apply(ra, n);
  }
  function js(n) {
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
  function Ol(n, r) {
    for (r &= ~Ms, r &= ~Eu, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var l = 31 - kr(r), o = 1 << l;
      n[l] = -1, r &= ~o;
    }
  }
  function Hs(n) {
    if (vt & 6) throw Error(A(327));
    Ro();
    var r = di(n, 0);
    if (!(r & 1)) return er(n, Ut()), null;
    var l = sf(n, r);
    if (n.tag !== 0 && l === 2) {
      var o = Fi(n);
      o !== 0 && (r = o, l = As(n, o));
    }
    if (l === 1) throw l = gu, Tu(n, 0), Ol(n, r), er(n, Ut()), l;
    if (l === 6) throw Error(A(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, wu(n, ra, Gi), er(n, Ut()), null;
  }
  function uf(n, r) {
    var l = vt;
    vt |= 1;
    try {
      return n(r);
    } finally {
      vt = l, vt === 0 && (So = Ut() + 500, fs && Mr());
    }
  }
  function Ru(n) {
    kl !== null && kl.tag === 0 && !(vt & 6) && Ro();
    var r = vt;
    vt |= 1;
    var l = br.transition, o = wt;
    try {
      if (br.transition = null, wt = 1, n) return n();
    } finally {
      wt = o, br.transition = l, vt = r, !(vt & 6) && Mr();
    }
  }
  function Pd() {
    ga = yo.current, Gt(yo);
  }
  function Tu(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var l = n.timeoutHandle;
    if (l !== -1 && (n.timeoutHandle = -1, Dv(l)), wn !== null) for (l = wn.return; l !== null; ) {
      var o = l;
      switch (wc(o), o.tag) {
        case 1:
          o = o.type.childContextTypes, o != null && yi();
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
          Pd();
      }
      l = l.return;
    }
    if (Fn = n, wn = n = Ll(n.current, null), cr = ga = r, Yn = 0, gu = null, Ms = Eu = Su = 0, ra = go = null, su !== null) {
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
        if (gd(), be.current = Bt, Dc) {
          for (var o = Xe.memoizedState; o !== null; ) {
            var c = o.queue;
            c !== null && (c.pending = null), o = o.next;
          }
          Dc = !1;
        }
        if (Et = 0, Bn = Kt = Xe = null, gs = !1, Ss = 0, yu.current = null, l === null || l.return === null) {
          Yn = 1, gu = r, wn = null;
          break;
        }
        e: {
          var d = n, m = l.return, E = l, T = r;
          if (r = cr, E.flags |= 32768, T !== null && typeof T == "object" && typeof T.then == "function") {
            var z = T, Q = E, W = Q.tag;
            if (!(Q.mode & 1) && (W === 0 || W === 11 || W === 15)) {
              var I = Q.alternate;
              I ? (Q.updateQueue = I.updateQueue, Q.memoizedState = I.memoizedState, Q.lanes = I.lanes) : (Q.updateQueue = null, Q.memoizedState = null);
            }
            var se = Md(m);
            if (se !== null) {
              se.flags &= -257, Yv(se, m, E, d, r), se.mode & 1 && Ld(d, z, r), r = se, T = z;
              var ye = r.updateQueue;
              if (ye === null) {
                var Ee = /* @__PURE__ */ new Set();
                Ee.add(T), r.updateQueue = Ee;
              } else ye.add(T);
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
              !(xn.flags & 65536) && (xn.flags |= 256), Yv(xn, m, E, d, r), ps(_l(T, E));
              break e;
            }
          }
          d = T = _l(T, E), Yn !== 4 && (Yn = 2), go === null ? go = [d] : go.push(d), d = m;
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
                if (!(d.flags & 128) && (typeof x.getDerivedStateFromError == "function" || L !== null && typeof L.componentDidCatch == "function" && (ja === null || !ja.has(L)))) {
                  d.flags |= 65536, r &= -r, d.lanes |= r;
                  var K = $v(d, E, r);
                  Fv(d, K);
                  break e;
                }
            }
            d = d.return;
          } while (d !== null);
        }
        rh(l);
      } catch (Re) {
        r = Re, wn === l && l !== null && (wn = l = l.return);
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
    (Yn === 0 || Yn === 3 || Yn === 2) && (Yn = 4), Fn === null || !(Su & 268435455) && !(Eu & 268435455) || Ol(Fn, cr);
  }
  function sf(n, r) {
    var l = vt;
    vt |= 2;
    var o = nh();
    (Fn !== n || cr !== r) && (Gi = null, Tu(n, r));
    do
      try {
        uy();
        break;
      } catch (c) {
        of(n, c);
      }
    while (!0);
    if (gd(), vt = l, af.current = o, wn !== null) throw Error(A(261));
    return Fn = null, cr = 0, Yn;
  }
  function uy() {
    for (; wn !== null; ) $d(wn);
  }
  function oy() {
    for (; wn !== null && !Rr(); ) $d(wn);
  }
  function $d(n) {
    var r = Id(n.alternate, n, ga);
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
      } else if (l = Ad(l, r, ga), l !== null) {
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
    while (kl !== null);
    if (vt & 6) throw Error(A(327));
    l = n.finishedWork;
    var c = n.finishedLanes;
    if (l === null) return null;
    if (n.finishedWork = null, n.finishedLanes = 0, l === n.current) throw Error(A(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var d = l.lanes | l.childLanes;
    if (Io(n, d), n === Fn && (wn = Fn = null, cr = 0), !(l.subtreeFlags & 2064) && !(l.flags & 2064) || lf || (lf = !0, lh(zi, function() {
      return Ro(), null;
    })), d = (l.flags & 15990) !== 0, l.subtreeFlags & 15990 || d) {
      d = br.transition, br.transition = null;
      var m = wt;
      wt = 1;
      var E = vt;
      vt |= 4, yu.current = null, ly(n, l), Xv(l, n), Sv(os), fl = !!ru, os = ru = null, n.current = l, Os(l), Ka(), vt = E, wt = m, br.transition = d;
    } else n.current = l;
    if (lf && (lf = !1, kl = n, zs = c), d = n.pendingLanes, d === 0 && (ja = null), $o(l.stateNode), er(n, Ut()), r !== null) for (o = n.onRecoverableError, l = 0; l < r.length; l++) c = r[l], o(c.value, { componentStack: c.stack, digest: c.digest });
    if (Dl) throw Dl = !1, n = Ns, Ns = null, n;
    return zs & 1 && n.tag !== 0 && Ro(), d = n.pendingLanes, d & 1 ? n === Co ? Eo++ : (Eo = 0, Co = n) : Eo = 0, Mr(), null;
  }
  function Ro() {
    if (kl !== null) {
      var n = Wo(zs), r = br.transition, l = wt;
      try {
        if (br.transition = null, wt = 16 > n ? 16 : n, kl === null) var o = !1;
        else {
          if (n = kl, kl = null, zs = 0, vt & 6) throw Error(A(331));
          var c = vt;
          for (vt |= 4, ve = n.current; ve !== null; ) {
            var d = ve, m = d.child;
            if (ve.flags & 16) {
              var E = d.deletions;
              if (E !== null) {
                for (var T = 0; T < E.length; T++) {
                  var z = E[T];
                  for (ve = z; ve !== null; ) {
                    var Q = ve;
                    switch (Q.tag) {
                      case 0:
                      case 11:
                      case 15:
                        mo(8, Q, d);
                    }
                    var W = Q.child;
                    if (W !== null) W.return = Q, ve = W;
                    else for (; ve !== null; ) {
                      Q = ve;
                      var I = Q.sibling, se = Q.return;
                      if (Kv(Q), Q === z) {
                        ve = null;
                        break;
                      }
                      if (I !== null) {
                        I.return = se, ve = I;
                        break;
                      }
                      ve = se;
                    }
                  }
                }
                var ye = d.alternate;
                if (ye !== null) {
                  var Ee = ye.child;
                  if (Ee !== null) {
                    ye.child = null;
                    do {
                      var xn = Ee.sibling;
                      Ee.sibling = null, Ee = xn;
                    } while (Ee !== null);
                  }
                }
                ve = d;
              }
            }
            if (d.subtreeFlags & 2064 && m !== null) m.return = d, ve = m;
            else e: for (; ve !== null; ) {
              if (d = ve, d.flags & 2048) switch (d.tag) {
                case 0:
                case 11:
                case 15:
                  mo(9, d, d.return);
              }
              var D = d.sibling;
              if (D !== null) {
                D.return = d.return, ve = D;
                break e;
              }
              ve = d.return;
            }
          }
          var x = n.current;
          for (ve = x; ve !== null; ) {
            m = ve;
            var L = m.child;
            if (m.subtreeFlags & 2064 && L !== null) L.return = m, ve = L;
            else e: for (m = x; ve !== null; ) {
              if (E = ve, E.flags & 2048) try {
                switch (E.tag) {
                  case 0:
                  case 11:
                  case 15:
                    tf(9, E);
                }
              } catch (Re) {
                gn(E, E.return, Re);
              }
              if (E === m) {
                ve = null;
                break e;
              }
              var K = E.sibling;
              if (K !== null) {
                K.return = E.return, ve = K;
                break e;
              }
              ve = E.return;
            }
          }
          if (vt = c, Mr(), Qr && typeof Qr.onPostCommitFiberRoot == "function") try {
            Qr.onPostCommitFiberRoot(ul, n);
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
    r = _l(l, r), r = xs(n, r, 1), n = Rl(n, r, 1), r = en(), n !== null && (cl(n, 1, r), er(n, r));
  }
  function gn(n, r, l) {
    if (n.tag === 3) ah(n, n, l);
    else for (; r !== null; ) {
      if (r.tag === 3) {
        ah(r, n, l);
        break;
      } else if (r.tag === 1) {
        var o = r.stateNode;
        if (typeof r.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (ja === null || !ja.has(o))) {
          n = _l(l, n), n = $v(r, n, 1), r = Rl(r, n, 1), n = en(), r !== null && (cl(r, 1, n), er(r, n));
          break;
        }
      }
      r = r.return;
    }
  }
  function Yd(n, r, l) {
    var o = n.pingCache;
    o !== null && o.delete(r), r = en(), n.pingedLanes |= n.suspendedLanes & l, Fn === n && (cr & l) === l && (Yn === 4 || Yn === 3 && (cr & 130023424) === cr && 500 > Ut() - Vd ? Tu(n, 0) : Ms |= l), er(n, r);
  }
  function ih(n, r) {
    r === 0 && (n.mode & 1 ? (r = ol, ol <<= 1, !(ol & 130023424) && (ol = 4194304)) : r = 1);
    var l = en();
    n = Si(n, r), n !== null && (cl(n, r, l), er(n, l));
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
    else Jn = !1, sn && r.flags & 1048576 && Ov(r, Sl, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var o = r.type;
        Aa(n, r), n = r.pendingProps;
        var c = va(r, yn.current);
        lo(r, l), c = Ue(null, r, o, n, c, l);
        var d = Tl();
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, zn(o) ? (d = !0, lu(r)) : d = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, Cl(r), c.updater = Ic, r.stateNode = c, c._reactInternals = r, kd(r, o, n, l), r = Nd(null, r, o, !0, d, l)) : (r.tag = 0, sn && d && dd(r), Tn(null, r, c, l), r = r.child), r;
      case 16:
        o = r.elementType;
        e: {
          switch (Aa(n, r), n = r.pendingProps, c = o._init, o = c(o._payload), r.type = o, c = r.tag = py(o), n = ea(o, n), c) {
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
              r = ta(null, r, o, ea(o.type, n), l);
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
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ea(o, c), Kc(n, r, o, c, l);
      case 1:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ea(o, c), ay(n, r, o, c, l);
      case 3:
        e: {
          if (qc(r), n === null) throw Error(A(387));
          o = r.pendingProps, d = r.memoizedState, c = d.element, Av(n, r), _c(r, o, null, l);
          var m = r.memoizedState;
          if (o = m.element, d.isDehydrated) if (d = { element: o, isDehydrated: !1, cache: m.cache, pendingSuspenseBoundaries: m.pendingSuspenseBoundaries, transitions: m.transitions }, r.updateQueue.baseState = d, r.memoizedState = d, r.flags & 256) {
            c = _l(Error(A(423)), r), r = vo(n, r, o, l, c);
            break e;
          } else if (o !== c) {
            c = _l(Error(A(424)), r), r = vo(n, r, o, l, c);
            break e;
          } else for (Zr = Ja(r.stateNode.containerInfo.firstChild), Xr = r, sn = !0, ti = null, l = ur(r, null, o, l), r.child = l; l; ) l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (Ii(), o === c) {
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
        return Td(r, r.stateNode.containerInfo), o = r.pendingProps, n === null ? r.child = ni(r, null, o, l) : Tn(n, r, o, l), r.child;
      case 11:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ea(o, c), Gc(n, r, o, c, l);
      case 7:
        return Tn(n, r, r.pendingProps, l), r.child;
      case 8:
        return Tn(n, r, r.pendingProps.children, l), r.child;
      case 12:
        return Tn(n, r, r.pendingProps.children, l), r.child;
      case 10:
        e: {
          if (o = r.type._context, c = r.pendingProps, d = r.memoizedProps, m = c.value, Jt(te, o._currentValue), o._currentValue = m, d !== null) if (Za(d.value, m)) {
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
                    T = Qi(-1, l & -l), T.tag = 2;
                    var z = d.updateQueue;
                    if (z !== null) {
                      z = z.shared;
                      var Q = z.pending;
                      Q === null ? T.next = T : (T.next = Q.next, Q.next = T), z.pending = T;
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
        return c = r.type, o = r.pendingProps.children, lo(r, l), c = Pt(c), o = o(c), r.flags |= 1, Tn(n, r, o, l), r.child;
      case 14:
        return o = r.type, c = ea(o, r.pendingProps), c = ea(o.type, c), ta(n, r, o, c, l);
      case 15:
        return hu(n, r, r.type, r.pendingProps, l);
      case 17:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ea(o, c), Aa(n, r), r.tag = 1, zn(o) ? (n = !0, lu(r)) : n = !1, lo(r, l), Bv(r, o, c), kd(r, o, c, l), Nd(null, r, o, !0, n, l);
      case 19:
        return na(n, r, l);
      case 22:
        return Je(n, r, l);
    }
    throw Error(A(156, r.tag));
  };
  function lh(n, r) {
    return nn(n, r);
  }
  function dy(n, r, l, o) {
    this.tag = n, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ha(n, r, l, o) {
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
  function Ll(n, r) {
    var l = n.alternate;
    return l === null ? (l = Ha(n.tag, r, n.key, n.mode), l.elementType = n.elementType, l.type = n.type, l.stateNode = n.stateNode, l.alternate = n, n.alternate = l) : (l.pendingProps = r, l.type = n.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = n.flags & 14680064, l.childLanes = n.childLanes, l.lanes = n.lanes, l.child = n.child, l.memoizedProps = n.memoizedProps, l.memoizedState = n.memoizedState, l.updateQueue = n.updateQueue, r = n.dependencies, l.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, l.sibling = n.sibling, l.index = n.index, l.ref = n.ref, l;
  }
  function cf(n, r, l, o, c, d) {
    var m = 2;
    if (o = n, typeof n == "function") Qd(n) && (m = 1);
    else if (typeof n == "string") m = 5;
    else e: switch (n) {
      case ft:
        return Ml(l.children, c, d, r);
      case Ve:
        m = 8, c |= 8;
        break;
      case Sn:
        return n = Ha(12, l, r, c | 2), n.elementType = Sn, n.lanes = d, n;
      case gt:
        return n = Ha(13, l, r, c), n.elementType = gt, n.lanes = d, n;
      case Me:
        return n = Ha(19, l, r, c), n.elementType = Me, n.lanes = d, n;
      case rt:
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
          case ht:
            m = 16, o = null;
            break e;
        }
        throw Error(A(130, n == null ? n : typeof n, ""));
    }
    return r = Ha(m, l, r, c), r.elementType = n, r.type = o, r.lanes = d, r;
  }
  function Ml(n, r, l, o) {
    return n = Ha(7, n, o, r), n.lanes = l, n;
  }
  function To(n, r, l, o) {
    return n = Ha(22, n, o, r), n.elementType = rt, n.lanes = l, n.stateNode = { isHidden: !1 }, n;
  }
  function xu(n, r, l) {
    return n = Ha(6, n, null, r), n.lanes = l, n;
  }
  function Wd(n, r, l) {
    return r = Ha(4, n.children !== null ? n.children : [], n.key, r), r.lanes = l, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function uh(n, r, l, o, c) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Kl(0), this.expirationTimes = Kl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Kl(0), this.identifierPrefix = o, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function ff(n, r, l, o, c, d, m, E, T) {
    return n = new uh(n, r, l, E, T), r === 1 ? (r = 1, d === !0 && (r |= 8)) : r = 0, d = Ha(3, null, null, r), n.current = d, d.stateNode = n, d.memoizedState = { element: o, isDehydrated: l, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Cl(d), n;
  }
  function oh(n, r, l) {
    var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: Ce, key: o == null ? null : "" + o, children: n, containerInfo: r, implementation: l };
  }
  function sh(n) {
    if (!n) return ut;
    n = n._reactInternals;
    e: {
      if (ie(n) !== n || n.tag !== 1) throw Error(A(170));
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
    return n = ff(l, o, !0, n, c, d, m, E, T), n.context = sh(null), l = n.current, o = en(), c = Sa(l), d = Qi(o, c), d.callback = r ?? null, Rl(l, d, c), n.current.lanes = c, cl(n, c, o), er(n, o), n;
  }
  function df(n, r, l, o) {
    var c = r.current, d = en(), m = Sa(c);
    return l = sh(l), r.context === null ? r.context = l : r.pendingContext = l, r = Qi(d, m), r.payload = { element: n }, o = o === void 0 ? null : o, o !== null && (r.callback = o), n = Rl(c, r, m), n !== null && (Ea(n, c, m, d), xc(n, c, m)), m;
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
  Ki.prototype.render = hf.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null) throw Error(A(409));
    df(n, r, null, null);
  }, Ki.prototype.unmount = hf.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Ru(function() {
        df(null, n, null, null);
      }), r[$i] = null;
    }
  };
  function Ki(n) {
    this._internalRoot = n;
  }
  Ki.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = pi();
      n = { blockedOn: null, target: n, priority: r };
      for (var l = 0; l < qa.length && r !== 0 && r < qa[l].priority; l++) ;
      qa.splice(l, 0, n), l === 0 && Vu(n);
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
      return n._reactRootContainer = m, n[$i] = m.current, ls(n.nodeType === 8 ? n.parentNode : n), Ru(), m;
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
    return n._reactRootContainer = T, n[$i] = T.current, ls(n.nodeType === 8 ? n.parentNode : n), Ru(function() {
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
          var l = Wr(r.pendingLanes);
          l !== 0 && (Qo(r, l | 1), er(r, Ut()), !(vt & 6) && (So = Ut() + 500, Mr()));
        }
        break;
      case 13:
        Ru(function() {
          var o = Si(n, 1);
          if (o !== null) {
            var c = en();
            Ea(o, n, 1, c);
          }
        }), vf(n, 1);
    }
  }, xt = function(n) {
    if (n.tag === 13) {
      var r = Si(n, 134217728);
      if (r !== null) {
        var l = en();
        Ea(r, n, 134217728, l);
      }
      vf(n, 134217728);
    }
  }, uc = function(n) {
    if (n.tag === 13) {
      var r = Sa(n), l = Si(n, r);
      if (l !== null) {
        var o = en();
        Ea(l, n, r, o);
      }
      vf(n, r);
    }
  }, pi = function() {
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
              var c = Yi(o);
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
        r = l.value, r != null && Pn(n, !!l.multiple, r, !1);
    }
  }, Il = uf, Ql = Ru;
  var hy = { usingClientEntryPoint: !1, Events: [cs, _e, Yi, ba, Li, uf] }, wo = { findFiberByHostInstance: iu, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, my = { bundleType: wo.bundleType, version: wo.version, rendererPackageName: wo.rendererPackageName, rendererConfig: wo.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ze.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = tt(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: wo.findFiberByHostInstance, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var gf = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!gf.isDisabled && gf.supportsFiber) try {
      ul = gf.inject(my), Qr = gf;
    } catch {
    }
  }
  return Ia.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = hy, Ia.createPortal = function(n, r) {
    var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!qd(r)) throw Error(A(200));
    return oh(n, r, null, l);
  }, Ia.createRoot = function(n, r) {
    if (!qd(n)) throw Error(A(299));
    var l = !1, o = "", c = Kd;
    return r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (o = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), r = ff(n, 1, !1, null, null, l, !1, o, c), n[$i] = r.current, ls(n.nodeType === 8 ? n.parentNode : n), new hf(r);
  }, Ia.findDOMNode = function(n) {
    if (n == null) return null;
    if (n.nodeType === 1) return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(A(188)) : (n = Object.keys(n).join(","), Error(A(268, n)));
    return n = tt(r), n = n === null ? null : n.stateNode, n;
  }, Ia.flushSync = function(n) {
    return Ru(n);
  }, Ia.hydrate = function(n, r, l) {
    if (!mf(r)) throw Error(A(200));
    return yf(null, n, r, !0, l);
  }, Ia.hydrateRoot = function(n, r, l) {
    if (!qd(n)) throw Error(A(405));
    var o = l != null && l.hydratedSources || null, c = !1, d = "", m = Kd;
    if (l != null && (l.unstable_strictMode === !0 && (c = !0), l.identifierPrefix !== void 0 && (d = l.identifierPrefix), l.onRecoverableError !== void 0 && (m = l.onRecoverableError)), r = Gd(r, null, n, 1, l ?? null, c, !1, d, m), n[$i] = r.current, ls(n), o) for (n = 0; n < o.length; n++) l = o[n], c = l._getVersion, c = c(l._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [l, c] : r.mutableSourceEagerHydrationData.push(
      l,
      c
    );
    return new Ki(r);
  }, Ia.render = function(n, r, l) {
    if (!mf(r)) throw Error(A(200));
    return yf(null, n, r, !1, l);
  }, Ia.unmountComponentAtNode = function(n) {
    if (!mf(n)) throw Error(A(40));
    return n._reactRootContainer ? (Ru(function() {
      yf(null, null, n, !1, function() {
        n._reactRootContainer = null, n[$i] = null;
      });
    }), !0) : !1;
  }, Ia.unstable_batchedUpdates = uf, Ia.unstable_renderSubtreeIntoContainer = function(n, r, l, o) {
    if (!mf(l)) throw Error(A(200));
    if (n == null || n._reactInternals === void 0) throw Error(A(38));
    return yf(n, r, l, !1, o);
  }, Ia.version = "18.3.1-next-f1338f8080-20240426", Ia;
}
var Qa = {}, rT;
function iD() {
  if (rT) return Qa;
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
    var pe = Yl, A = lT(), st = pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Rt = !1;
    function yt(e) {
      Rt = e;
    }
    function Ne(e) {
      if (!Rt) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        We("warn", e, a);
      }
    }
    function S(e) {
      if (!Rt) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        We("error", e, a);
      }
    }
    function We(e, t, a) {
      {
        var i = st.ReactDebugCurrentFrame, u = i.getStackAddendum();
        u !== "" && (t += "%s", a = a.concat([u]));
        var s = a.map(function(f) {
          return String(f);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var Te = 0, fe = 1, $e = 2, J = 3, je = 4, le = 5, xe = 6, ct = 7, Hn = 8, rn = 9, it = 10, ze = 11, kt = 12, Ce = 13, ft = 14, Ve = 15, Sn = 16, Mt = 17, fn = 18, $t = 19, gt = 21, Me = 22, At = 23, ht = 24, rt = 25, B = !0, me = !1, re = !1, b = !1, $ = !1, De = !0, Pe = !0, Ye = !0, at = !0, Tt = /* @__PURE__ */ new Set(), Ge = {}, St = {};
    function Vt(e, t) {
      bn(e, t), bn(e + "Capture", t);
    }
    function bn(e, t) {
      Ge[e] && S("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), Ge[e] = t;
      {
        var a = e.toLowerCase();
        St[a] = e, e === "onDoubleClick" && (St.ondblclick = e);
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
        return Vn(e), !1;
      } catch {
        return !0;
      }
    }
    function Vn(e) {
      return "" + e;
    }
    function kn(e, t) {
      if (Er(e))
        return S("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Dn(e)), Vn(e);
    }
    function sa(e) {
      if (Er(e))
        return S("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Dn(e)), Vn(e);
    }
    function Wa(e, t) {
      if (Er(e))
        return S("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Dn(e)), Vn(e);
    }
    function Dr(e, t) {
      if (Er(e))
        return S("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Dn(e)), Vn(e);
    }
    function Pn(e) {
      if (Er(e))
        return S("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", Dn(e)), Vn(e);
    }
    function Wn(e) {
      if (Er(e))
        return S("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", Dn(e)), Vn(e);
    }
    var Gn = 0, Cr = 1, Ga = 2, On = 3, ar = 4, Yr = 5, Oi = 6, ca = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", Z = ca + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", Oe = new RegExp("^[" + ca + "][" + Z + "]*$"), et = {}, Nt = {};
    function an(e) {
      return rr.call(Nt, e) ? !0 : rr.call(et, e) ? !1 : Oe.test(e) ? (Nt[e] = !0, !0) : (et[e] = !0, S("Invalid attribute name: `%s`", e), !1);
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
          case Yr:
            return isNaN(t);
          case Oi:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function tn(e) {
      return zt.hasOwnProperty(e) ? zt[e] : null;
    }
    function Yt(e, t, a, i, u, s, f) {
      this.acceptsBooleans = t === Ga || t === On || t === ar, this.attributeName = i, this.attributeNamespace = u, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = f;
    }
    var zt = {}, fa = [
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
    fa.forEach(function(e) {
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
      zt[e] = new Yt(
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
        Oi,
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
        Yr,
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
    var _a = /[\-\:]([a-z])/g, ba = function(e) {
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
      var t = e.replace(_a, ba);
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
      var t = e.replace(_a, ba);
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
      var t = e.replace(_a, ba);
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
    var Li = "xlinkHref";
    zt[Li] = new Yt(
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
    function Mi(e) {
      !Ql && Il.test(e) && (Ql = !0, S("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function Wl(e, t, a, i) {
      if (i.mustUseProperty) {
        var u = i.propertyName;
        return e[u];
      } else {
        kn(a, t), i.sanitizeURL && Mi("" + a);
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
    function oi(e, t, a, i) {
      {
        if (!an(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var u = e.getAttribute(t);
        return kn(a, t), u === "" + a ? a : u;
      }
    }
    function da(e, t, a, i) {
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
          _ === On || _ === ar && a === !0 ? w = "" : (kn(a, y), w = "" + a, u.sanitizeURL && Mi(w.toString())), g ? e.setAttributeNS(g, y, w) : e.setAttribute(y, w);
        }
      }
    }
    var ir = Symbol.for("react.element"), pa = Symbol.for("react.portal"), Ir = Symbol.for("react.fragment"), si = Symbol.for("react.strict_mode"), ci = Symbol.for("react.profiler"), Ni = Symbol.for("react.provider"), R = Symbol.for("react.context"), Y = Symbol.for("react.forward_ref"), ne = Symbol.for("react.suspense"), ie = Symbol.for("react.suspense_list"), lt = Symbol.for("react.memo"), Ie = Symbol.for("react.lazy"), dt = Symbol.for("react.scope"), tt = Symbol.for("react.debug_trace_mode"), En = Symbol.for("react.offscreen"), nn = Symbol.for("react.legacy_hidden"), on = Symbol.for("react.cache"), Rr = Symbol.for("react.tracing_marker"), Ka = Symbol.iterator, Ut = "@@iterator";
    function dn(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = Ka && e[Ka] || e[Ut];
      return typeof t == "function" ? t : null;
    }
    var qe = Object.assign, fi = 0, zi, ac, Ui, ul, Qr, $o, kr;
    function Yo() {
    }
    Yo.__reactDisabledLog = !0;
    function ic() {
      {
        if (fi === 0) {
          zi = console.log, ac = console.info, Ui = console.warn, ul = console.error, Qr = console.group, $o = console.groupCollapsed, kr = console.groupEnd;
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
        fi++;
      }
    }
    function lc() {
      {
        if (fi--, fi === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: qe({}, e, {
              value: zi
            }),
            info: qe({}, e, {
              value: ac
            }),
            warn: qe({}, e, {
              value: Ui
            }),
            error: qe({}, e, {
              value: ul
            }),
            group: qe({}, e, {
              value: Qr
            }),
            groupCollapsed: qe({}, e, {
              value: $o
            }),
            groupEnd: qe({}, e, {
              value: kr
            })
          });
        }
        fi < 0 && S("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Ai = st.ReactCurrentDispatcher, ol;
    function Wr(e, t, a) {
      {
        if (ol === void 0)
          try {
            throw Error();
          } catch (u) {
            var i = u.stack.trim().match(/\n( *(at )?)/);
            ol = i && i[1] || "";
          }
        return `
` + ol + e;
      }
    }
    var di = !1, sl;
    {
      var ju = typeof WeakMap == "function" ? WeakMap : Map;
      sl = new ju();
    }
    function Fi(e, t) {
      if (!e || di)
        return "";
      {
        var a = sl.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      di = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = Ai.current, Ai.current = null, ic();
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
                    return e.displayName && _.includes("<anonymous>") && (_ = _.replace("<anonymous>", e.displayName)), typeof e == "function" && sl.set(e, _), _;
                  }
                while (y >= 1 && g >= 0);
              break;
            }
        }
      } finally {
        di = !1, Ai.current = s, lc(), Error.prepareStackTrace = u;
      }
      var w = e ? e.displayName || e.name : "", N = w ? Wr(w) : "";
      return typeof e == "function" && sl.set(e, N), N;
    }
    function Gl(e, t, a) {
      return Fi(e, !0);
    }
    function Kl(e, t, a) {
      return Fi(e, !1);
    }
    function cl(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Io(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Fi(e, cl(e));
      if (typeof e == "string")
        return Wr(e);
      switch (e) {
        case ne:
          return Wr("Suspense");
        case ie:
          return Wr("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case Y:
            return Kl(e.render);
          case lt:
            return Io(e.type, t, a);
          case Ie: {
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
        case le:
          return Wr(e.type);
        case Sn:
          return Wr("Lazy");
        case Ce:
          return Wr("Suspense");
        case $t:
          return Wr("SuspenseList");
        case Te:
        case $e:
        case Ve:
          return Kl(e.type);
        case ze:
          return Kl(e.type.render);
        case fe:
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
        case Ir:
          return "Fragment";
        case pa:
          return "Portal";
        case ci:
          return "Profiler";
        case si:
          return "StrictMode";
        case ne:
          return "Suspense";
        case ie:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case R:
            var t = e;
            return Hu(t) + ".Consumer";
          case Ni:
            var a = e;
            return Hu(a._context) + ".Provider";
          case Y:
            return Wo(e, e.render, "ForwardRef");
          case lt:
            var i = e.displayName || null;
            return i !== null ? i : xt(e.type) || "Memo";
          case Ie: {
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
    function pi(e) {
      return e.displayName || "Context";
    }
    function Be(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case ht:
          return "Cache";
        case rn:
          var i = a;
          return pi(i) + ".Consumer";
        case it:
          var u = a;
          return pi(u._context) + ".Provider";
        case fn:
          return "DehydratedFragment";
        case ze:
          return uc(a, a.render, "ForwardRef");
        case ct:
          return "Fragment";
        case le:
          return a;
        case je:
          return "Portal";
        case J:
          return "Root";
        case xe:
          return "Text";
        case Sn:
          return xt(a);
        case Hn:
          return a === si ? "StrictMode" : "Mode";
        case Me:
          return "Offscreen";
        case kt:
          return "Profiler";
        case gt:
          return "Scope";
        case Ce:
          return "Suspense";
        case $t:
          return "SuspenseList";
        case rt:
          return "TracingMarker";
        case fe:
        case Te:
        case Mt:
        case $e:
        case ft:
        case Ve:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var ql = st.ReactDebugCurrentFrame, qn = null, Gr = !1;
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
    function vi() {
      return qn === null ? "" : wt(qn);
    }
    function mn() {
      ql.getCurrentStack = null, qn = null, Gr = !1;
    }
    function It(e) {
      ql.getCurrentStack = e === null ? null : vi, qn = e, Gr = !1;
    }
    function qa() {
      return qn;
    }
    function Da(e) {
      Gr = e;
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
    function Vu(e, t) {
      Kf[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || S("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || S("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function Xl(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function Pu(e) {
      return e._valueTracker;
    }
    function Bu(e) {
      e._valueTracker = null;
    }
    function Zl(e) {
      var t = "";
      return e && (Xl(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function ka(e) {
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
    function Oa(e) {
      Pu(e) || (e._valueTracker = ka(e));
    }
    function fl(e) {
      if (!e)
        return !1;
      var t = Pu(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = Zl(e);
      return i !== a ? (t.setValue(i), !0) : !1;
    }
    function ji(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var $u = !1, dl = !1, Hi = !1, Yu = !1;
    function Go(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function La(e, t) {
      var a = e, i = t.checked, u = qe({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return u;
    }
    function Iu(e, t) {
      Vu("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !dl && (S("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Or() || "A component", t.type), dl = !0), t.value !== void 0 && t.defaultValue !== void 0 && !$u && (S("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Or() || "A component", t.type), $u = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: Lr(t.value != null ? t.value : i),
        controlled: Go(t)
      };
    }
    function h(e, t) {
      var a = e, i = t.checked;
      i != null && da(a, "checked", i, !1);
    }
    function C(e, t) {
      var a = e;
      {
        var i = Go(t);
        !a._wrapperState.controlled && i && !Yu && (S("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Yu = !0), a._wrapperState.controlled && !i && !Hi && (S("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Hi = !0);
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
      t.hasOwnProperty("value") ? he(a, t.type, u) : t.hasOwnProperty("defaultValue") && he(a, t.type, Lr(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
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
      C(a, t), q(a, t);
    }
    function q(e, t) {
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
            fl(f), C(f, p);
          }
        }
      }
    }
    function he(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || ji(e.ownerDocument) !== e) && (a == null ? e.defaultValue = Tr(e._wrapperState.initialValue) : e.defaultValue !== Tr(a) && (e.defaultValue = Tr(a)));
    }
    var oe = !1, Ae = !1, nt = !1;
    function Ft(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? pe.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || Ae || (Ae = !0, S("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (nt || (nt = !0, S("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !oe && (S("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), oe = !0);
    }
    function Qt(e, t) {
      t.value != null && e.setAttribute("value", Tr(Lr(t.value)));
    }
    var Wt = Array.isArray;
    function Ze(e) {
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
        Vu("select", e);
        for (var t = 0; t < Jl.length; t++) {
          var a = Jl[t];
          if (e[a] != null) {
            var i = Ze(e[a]);
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
      return qe({}, t, {
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
      var i = qe({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: Tr(a._wrapperState.initialValue)
      });
      return i;
    }
    function ev(e, t) {
      var a = e;
      Vu("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !Jp && (S("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Or() || "A component"), Jp = !0);
      var i = t.value;
      if (i == null) {
        var u = t.children, s = t.defaultValue;
        if (u != null) {
          S("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (s != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (Ze(u)) {
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
    var Xa = "http://www.w3.org/1999/xhtml", Im = "http://www.w3.org/1998/Math/MathML", Zf = "http://www.w3.org/2000/svg";
    function Jf(e) {
      switch (e) {
        case "svg":
          return Zf;
        case "math":
          return Im;
        default:
          return Xa;
      }
    }
    function cc(e, t) {
      return e == null || e === Xa ? Jf(t) : e === Zf && t === "foreignObject" ? Xa : e;
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
    }), Kr = 1, Pi = 3, Ln = 8, Bi = 9, Xo = 11, pl = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === Pi) {
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
      var Km = /^(?:webkit|moz|o)[A-Z]/, ov = /^-ms-/, sv = /-(.)/g, Gu = /;\s*$/, hi = {}, ed = {}, Zo = !1, cv = !1, fv = function(e) {
        return e.replace(sv, function(t, a) {
          return a.toUpperCase();
        });
      }, td = function(e) {
        hi.hasOwnProperty(e) && hi[e] || (hi[e] = !0, S(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          fv(e.replace(ov, "ms-"))
        ));
      }, nd = function(e) {
        hi.hasOwnProperty(e) && hi[e] || (hi[e] = !0, S("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
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
    }, yv = qe({
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
    function vl(e, t) {
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
    }, qu = {}, Xu = new RegExp("^(aria)-[" + Z + "]*$"), rd = new RegExp("^(aria)[A-Z][" + Z + "]*$");
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
      vl(e, t) || ad(e, t);
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
      var wr = {}, ns = /^on./, Cv = /^on[^A-Z]/, Rv = new RegExp("^(aria)-[" + Z + "]*$"), Tv = new RegExp("^(aria)[A-Z][" + Z + "]*$");
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
      vl(e, t) || wv(e, t, a);
    }
    var id = 1, mi = 2, tu = 4, ld = id | mi | tu, rs = null;
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
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === Pi ? t.parentNode : t;
    }
    var mc = null, jt = null, hl = null;
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
      jt ? hl ? hl.push(e) : hl = [e] : jt = e;
    }
    function od() {
      return jt !== null || hl !== null;
    }
    function Ju() {
      if (jt) {
        var e = jt, t = hl;
        if (jt = null, hl = null, is(e), t)
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
          Cc.removeEventListener(H, Le, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = N);
        }
        var ae = Array.prototype.slice.call(arguments, 3);
        function Le() {
          _ = !0, j(), a.apply(i, ae), w = !1;
        }
        var we, bt = !1, mt = !1;
        function k(O) {
          if (we = O.error, bt = !0, we === null && O.colno === 0 && O.lineno === 0 && (mt = !0), O.defaultPrevented && we != null && typeof we == "object")
            try {
              we._suppressLogging = !0;
            } catch {
            }
        }
        var H = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", k), Cc.addEventListener(H, Le, !1), g.initEvent(H, !1, !1), Cc.dispatchEvent(g), U && Object.defineProperty(window, "event", U), _ && w && (bt ? mt && (we = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : we = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(we)), window.removeEventListener("error", k), !_)
          return j(), Ec.apply(this, arguments);
      };
    }
    var ny = Dv, eo = !1, to = null, Ja = !1, Rc = null, no = {
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
        Ja || (Ja = !0, Rc = y);
      }
    }
    function $i() {
      if (Ja) {
        var e = Rc;
        throw Ja = !1, Rc = null, e;
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
    var _e = (
      /*                      */
      0
    ), Yi = (
      /*                */
      1
    ), Mn = (
      /*                    */
      2
    ), pt = (
      /*                       */
      4
    ), qr = (
      /*                */
      16
    ), Gt = (
      /*                 */
      32
    ), Jt = (
      /*                     */
      64
    ), ut = (
      /*                   */
      128
    ), yn = (
      /*            */
      256
    ), Nn = (
      /*                          */
      512
    ), Na = (
      /*                     */
      1024
    ), va = (
      /*                      */
      2048
    ), zn = (
      /*                    */
      4096
    ), yi = (
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
    ), za = (
      /*                */
      65536
    ), ei = (
      /* */
      131072
    ), fs = (
      /*                       */
      1048576
    ), ds = (
      /*                    */
      2097152
    ), ml = (
      /*                 */
      4194304
    ), fd = (
      /*                */
      8388608
    ), Mr = (
      /*               */
      16777216
    ), yl = (
      /*              */
      33554432
    ), gl = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      pt | Na | 0
    ), ao = Mn | pt | qr | Gt | Nn | zn | yi, Sl = pt | Jt | Nn | yi, lr = va | qr, Un = ml | fd | ds, uu = st.ReactCurrentOwner;
    function Nr(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (Mn | zn)) !== _e && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === J ? a : null;
    }
    function gi(e) {
      if (e.tag === Ce) {
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
    function El(e) {
      return e.tag === J ? e.stateNode.containerInfo : null;
    }
    function Ov(e) {
      return Nr(e) === e;
    }
    function dd(e) {
      {
        var t = uu.current;
        if (t !== null && t.tag === fe) {
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
    function Xr(e) {
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
      if (i.tag !== J)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function Zr(e) {
      var t = Xr(e);
      return t !== null ? sn(t) : null;
    }
    function sn(e) {
      if (e.tag === le || e.tag === xe)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = sn(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function ti(e) {
      var t = Xr(e);
      return t !== null ? pd(t) : null;
    }
    function pd(e) {
      if (e.tag === le || e.tag === xe)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== je) {
          var a = pd(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var vd = A.unstable_scheduleCallback, hd = A.unstable_cancelCallback, md = A.unstable_shouldYield, Lv = A.unstable_requestPaint, Rn = A.unstable_now, Mv = A.unstable_getCurrentPriorityLevel, Ii = A.unstable_ImmediatePriority, ps = A.unstable_UserBlockingPriority, ou = A.unstable_NormalPriority, vs = A.unstable_LowPriority, io = A.unstable_IdlePriority, Nv = A.unstable_yieldValue, zv = A.unstable_setDisableYieldValue, ni = null, ur = null, te = null, ha = !1, xr = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function yd(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return S("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        Pe && (e = qe({}, e, {
          getLaneLabelMap: Cd,
          injectProfilingHooks: su
        })), ni = t.inject(e), ur = t;
      } catch (a) {
        S("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function gd(e, t) {
      if (ur && typeof ur.onScheduleFiberRoot == "function")
        try {
          ur.onScheduleFiberRoot(ni, e, t);
        } catch (a) {
          ha || (ha = !0, S("React instrumentation encountered an error: %s", a));
        }
    }
    function Sd(e, t) {
      if (ur && typeof ur.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & ut) === ut;
          if (Ye) {
            var i;
            switch (t) {
              case na:
                i = Ii;
                break;
              case Aa:
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
            ur.onCommitFiberRoot(ni, e, i, a);
          }
        } catch (u) {
          ha || (ha = !0, S("React instrumentation encountered an error: %s", u));
        }
    }
    function Ed(e) {
      if (ur && typeof ur.onPostCommitFiberRoot == "function")
        try {
          ur.onPostCommitFiberRoot(ni, e);
        } catch (t) {
          ha || (ha = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function lo(e) {
      if (ur && typeof ur.onCommitFiberUnmount == "function")
        try {
          ur.onCommitFiberUnmount(ni, e);
        } catch (t) {
          ha || (ha = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function Pt(e) {
      if (typeof Nv == "function" && (zv(e), yt(e)), ur && typeof ur.setStrictMode == "function")
        try {
          ur.setStrictMode(ni, e);
        } catch (t) {
          ha || (ha = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function su(e) {
      te = e;
    }
    function Cd() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < bd; a++) {
          var i = Vv(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function Uv(e) {
      te !== null && typeof te.markCommitStarted == "function" && te.markCommitStarted(e);
    }
    function Si() {
      te !== null && typeof te.markCommitStopped == "function" && te.markCommitStopped();
    }
    function Ua(e) {
      te !== null && typeof te.markComponentRenderStarted == "function" && te.markComponentRenderStarted(e);
    }
    function Cl() {
      te !== null && typeof te.markComponentRenderStopped == "function" && te.markComponentRenderStopped();
    }
    function Av(e) {
      te !== null && typeof te.markComponentPassiveEffectMountStarted == "function" && te.markComponentPassiveEffectMountStarted(e);
    }
    function Qi() {
      te !== null && typeof te.markComponentPassiveEffectMountStopped == "function" && te.markComponentPassiveEffectMountStopped();
    }
    function Rl(e) {
      te !== null && typeof te.markComponentPassiveEffectUnmountStarted == "function" && te.markComponentPassiveEffectUnmountStarted(e);
    }
    function xc() {
      te !== null && typeof te.markComponentPassiveEffectUnmountStopped == "function" && te.markComponentPassiveEffectUnmountStopped();
    }
    function Fv(e) {
      te !== null && typeof te.markComponentLayoutEffectMountStarted == "function" && te.markComponentLayoutEffectMountStarted(e);
    }
    function _c() {
      te !== null && typeof te.markComponentLayoutEffectMountStopped == "function" && te.markComponentLayoutEffectMountStopped();
    }
    function Rd(e) {
      te !== null && typeof te.markComponentLayoutEffectUnmountStarted == "function" && te.markComponentLayoutEffectUnmountStarted(e);
    }
    function uo() {
      te !== null && typeof te.markComponentLayoutEffectUnmountStopped == "function" && te.markComponentLayoutEffectUnmountStopped();
    }
    function Ei(e, t, a) {
      te !== null && typeof te.markComponentErrored == "function" && te.markComponentErrored(e, t, a);
    }
    function hs(e, t, a) {
      te !== null && typeof te.markComponentSuspended == "function" && te.markComponentSuspended(e, t, a);
    }
    function ms(e) {
      te !== null && typeof te.markLayoutEffectsStarted == "function" && te.markLayoutEffectsStarted(e);
    }
    function cu() {
      te !== null && typeof te.markLayoutEffectsStopped == "function" && te.markLayoutEffectsStopped();
    }
    function Td(e) {
      te !== null && typeof te.markPassiveEffectsStarted == "function" && te.markPassiveEffectsStarted(e);
    }
    function oo() {
      te !== null && typeof te.markPassiveEffectsStopped == "function" && te.markPassiveEffectsStopped();
    }
    function wd(e) {
      te !== null && typeof te.markRenderStarted == "function" && te.markRenderStarted(e);
    }
    function xd() {
      te !== null && typeof te.markRenderYielded == "function" && te.markRenderYielded();
    }
    function pn() {
      te !== null && typeof te.markRenderStopped == "function" && te.markRenderStopped();
    }
    function bc(e) {
      te !== null && typeof te.markRenderScheduled == "function" && te.markRenderScheduled(e);
    }
    function _d(e, t) {
      te !== null && typeof te.markForceUpdateScheduled == "function" && te.markForceUpdateScheduled(e, t);
    }
    function ys(e, t) {
      te !== null && typeof te.markStateUpdateScheduled == "function" && te.markStateUpdateScheduled(e, t);
    }
    var be = (
      /*                         */
      0
    ), ot = (
      /*                 */
      1
    ), Et = (
      /*                    */
      2
    ), Xe = (
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
    var bd = 31, V = (
      /*                        */
      0
    ), An = (
      /*                          */
      0
    ), Ue = (
      /*                        */
      1
    ), Tl = (
      /*    */
      2
    ), Xn = (
      /*             */
      4
    ), Zn = (
      /*            */
      8
    ), Jr = (
      /*                     */
      16
    ), fu = (
      /*                */
      32
    ), wl = (
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
    ), Vc = (
      /*                             */
      16777216
    ), Pc = (
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
    ), xl = (
      /*                        */
      536870912
    ), ma = (
      /*                   */
      1073741824
    );
    function Vv(e) {
      {
        if (e & Ue)
          return "Sync";
        if (e & Tl)
          return "InputContinuousHydration";
        if (e & Xn)
          return "InputContinuous";
        if (e & Zn)
          return "DefaultHydration";
        if (e & Jr)
          return "Default";
        if (e & fu)
          return "TransitionHydration";
        if (e & wl)
          return "Transition";
        if (e & Cs)
          return "Retry";
        if (e & po)
          return "SelectiveHydration";
        if (e & Ts)
          return "IdleHydration";
        if (e & xl)
          return "Idle";
        if (e & ma)
          return "Offscreen";
      }
    }
    var Bt = -1, $c = so, Yc = pu;
    function ws(e) {
      switch (vu(e)) {
        case Ue:
          return Ue;
        case Tl:
          return Tl;
        case Xn:
          return Xn;
        case Zn:
          return Zn;
        case Jr:
          return Jr;
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
          return e & wl;
        case pu:
        case Rs:
        case Vc:
        case Pc:
        case Bc:
          return e & Cs;
        case po:
          return po;
        case Ts:
          return Ts;
        case xl:
          return xl;
        case ma:
          return ma;
        default:
          return S("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function ea(e, t) {
      var a = e.pendingLanes;
      if (a === V)
        return V;
      var i = V, u = e.suspendedLanes, s = e.pingedLanes, f = a & Hv;
      if (f !== V) {
        var p = f & ~u;
        if (p !== V)
          i = ws(p);
        else {
          var v = f & s;
          v !== V && (i = ws(v));
        }
      } else {
        var y = a & ~u;
        y !== V ? i = ws(y) : s !== V && (i = ws(s));
      }
      if (i === V)
        return V;
      if (t !== V && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & u) === V) {
        var g = vu(i), _ = vu(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          g >= _ || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          g === Jr && (_ & wl) !== V
        )
          return t;
      }
      (i & Xn) !== V && (i |= a & Jr);
      var w = e.entangledLanes;
      if (w !== V)
        for (var N = e.entanglements, U = i & w; U > 0; ) {
          var j = Tn(U), ae = 1 << j;
          i |= N[j], U &= ~ae;
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
        case Ue:
        case Tl:
        case Xn:
          return t + 250;
        case Zn:
        case Jr:
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
        case Vc:
        case Pc:
        case Bc:
          return Bt;
        case po:
        case Ts:
        case xl:
        case ma:
          return Bt;
        default:
          return S("Should have found matching lanes. This is a bug in React."), Bt;
      }
    }
    function Pv(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, u = e.pingedLanes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = Tn(f), v = 1 << p, y = s[p];
        y === Bt ? ((v & i) === V || (v & u) !== V) && (s[p] = Ic(v, t)) : y <= t && (e.expiredLanes |= v), f &= ~v;
      }
    }
    function Bv(e) {
      return ws(e.pendingLanes);
    }
    function Qc(e) {
      var t = e.pendingLanes & -1073741825;
      return t !== V ? t : t & ma ? ma : V;
    }
    function kd(e) {
      return (e & Ue) !== V;
    }
    function _l(e) {
      return (e & Hv) !== V;
    }
    function Wc(e) {
      return (e & Cs) === e;
    }
    function Od(e) {
      var t = Ue | Xn | Jr;
      return (e & t) === V;
    }
    function ry(e) {
      return (e & wl) === e;
    }
    function xs(e, t) {
      var a = Tl | Xn | Zn | Jr;
      return (t & a) !== V;
    }
    function $v(e, t) {
      return (t & e.expiredLanes) !== V;
    }
    function Ld(e) {
      return (e & wl) !== V;
    }
    function Md() {
      var e = $c;
      return $c <<= 1, ($c & wl) === V && ($c = so), e;
    }
    function Yv() {
      var e = Yc;
      return Yc <<= 1, (Yc & Cs) === V && (Yc = pu), e;
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
    function ta(e, t) {
      return (e & t) !== V;
    }
    function hu(e, t) {
      return (e & t) === t;
    }
    function Je(e, t) {
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
      e.pendingLanes |= t, t !== xl && (e.suspendedLanes = V, e.pingedLanes = V);
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
      e.pendingLanes = t, e.suspendedLanes = V, e.pingedLanes = V, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, u = e.eventTimes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = Tn(f), v = 1 << p;
        i[p] = V, u[p] = Bt, s[p] = Bt, f &= ~v;
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
          i = Tl;
          break;
        case Jr:
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
        case Vc:
        case Pc:
        case Bc:
          i = fu;
          break;
        case xl:
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
    var na = Ue, Aa = Xn, or = Jr, ef = xl, ho = An;
    function ya() {
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
      return Ad(na, t) ? Ad(Aa, t) ? _l(t) ? or : ef : Aa : na;
    }
    function mu(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var sr;
    function iy(e) {
      sr = e;
    }
    function ve(e) {
      sr(e);
    }
    var bl;
    function Fd(e) {
      bl = e;
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
    var rf = !1, ks = [], Ci = null, Ri = null, vn = null, zr = /* @__PURE__ */ new Map(), Fa = /* @__PURE__ */ new Map(), Wi = [], qv = [
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
    function ri(e) {
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
    function ai(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          Ci = null;
          break;
        case "dragenter":
        case "dragleave":
          Ri = null;
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
          Fa.delete(i);
          break;
        }
      }
    }
    function Os(e, t, a, i, u, s) {
      if (e === null || e.nativeEvent !== s) {
        var f = Xv(t, a, i, u, s);
        if (t !== null) {
          var p = bo(t);
          p !== null && bl(p);
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
          return Ci = Os(Ci, e, t, a, i, s), !0;
        }
        case "dragenter": {
          var f = u;
          return Ri = Os(Ri, e, t, a, i, f), !0;
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
          return Fa.set(_, Os(Fa.get(_) || null, e, t, a, i, g)), !0;
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
          if (i === Ce) {
            var u = gi(a);
            if (u !== null) {
              e.blockedOn = u, nf(e.priority, function() {
                jd(a);
              });
              return;
            }
          } else if (i === J) {
            var s = a.stateNode;
            if (mu(s)) {
              e.blockedOn = El(a);
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
      }, i = 0; i < Wi.length && Ad(t, Wi[i].priority); i++)
        ;
      Wi.splice(i, 0, a), i === 0 && Hd(a);
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
          return f !== null && bl(f), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function eh(e, t, a) {
      Ls(e) && a.delete(t);
    }
    function af() {
      rf = !1, Ci !== null && Ls(Ci) && (Ci = null), Ri !== null && Ls(Ri) && (Ri = null), vn !== null && Ls(vn) && (vn = null), zr.forEach(eh), Fa.forEach(eh);
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
      Ci !== null && yu(Ci, e), Ri !== null && yu(Ri, e), vn !== null && yu(vn, e);
      var i = function(p) {
        return yu(p, e);
      };
      zr.forEach(i), Fa.forEach(i);
      for (var u = 0; u < Wi.length; u++) {
        var s = Wi[u];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; Wi.length > 0; ) {
        var f = Wi[0];
        if (f.blockedOn !== null)
          break;
        Hd(f), f.blockedOn === null && Wi.shift();
      }
    }
    var vt = st.ReactCurrentBatchConfig, Fn = !0;
    function wn(e) {
      Fn = !!e;
    }
    function cr() {
      return Fn;
    }
    function ga(e, t, a) {
      var i = go(t), u;
      switch (i) {
        case na:
          u = yo;
          break;
        case Aa:
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
      var u = ya(), s = vt.transition;
      vt.transition = null;
      try {
        $n(na), gu(e, t, a, i);
      } finally {
        $n(u), vt.transition = s;
      }
    }
    function Yn(e, t, a, i) {
      var u = ya(), s = vt.transition;
      vt.transition = null;
      try {
        $n(Aa), gu(e, t, a, i);
      } finally {
        $n(u), vt.transition = s;
      }
    }
    function gu(e, t, a, i) {
      Fn && Su(e, t, a, i);
    }
    function Su(e, t, a, i) {
      var u = Ms(e, t, a, i);
      if (u === null) {
        wy(e, t, i, Eu, a), ai(e, i);
        return;
      }
      if (Zv(u, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (ai(e, i), t & tu && ri(e)) {
        for (; u !== null; ) {
          var s = bo(u);
          s !== null && ve(s);
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
          if (p === Ce) {
            var v = gi(f);
            if (v !== null)
              return v;
            s = null;
          } else if (p === J) {
            var y = f.stateNode;
            if (mu(y))
              return El(f);
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
          return na;
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
          return Aa;
        case "message": {
          var t = Mv();
          switch (t) {
            case Ii:
              return na;
            case ps:
              return Aa;
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
    function ra(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function Vd(e, t, a) {
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
    var Dl = null, Ns = null, ja = null;
    function lf(e) {
      return Dl = e, Ns = Eo(), !0;
    }
    function kl() {
      Dl = null, Ns = null, ja = null;
    }
    function zs() {
      if (ja)
        return ja;
      var e, t = Ns, a = t.length, i, u = Eo(), s = u.length;
      for (e = 0; e < a && t[e] === u[e]; e++)
        ;
      var f = a - e;
      for (i = 1; i <= f && t[a - i] === u[s - i]; i++)
        ;
      var p = i > 1 ? 1 - i : void 0;
      return ja = u.slice(e, p), ja;
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
      return qe(t.prototype, {
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
    var Sa = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, Ea = en(Sa), er = qe({}, Sa, {
      view: 0,
      detail: 0
    }), th = en(er), As, Fs, js;
    function Ol(e) {
      e !== js && (js && e.type === "mousemove" ? (As = e.screenX - js.screenX, Fs = e.screenY - js.screenY) : (As = 0, Fs = 0), js = e);
    }
    var Hs = qe({}, er, {
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
        return "movementX" in e ? e.movementX : (Ol(e), As);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : Fs;
      }
    }), uf = en(Hs), Ru = qe({}, Hs, {
      dataTransfer: 0
    }), Pd = en(Ru), Tu = qe({}, er, {
      relatedTarget: 0
    }), of = en(Tu), nh = qe({}, Sa, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Bd = en(nh), sf = qe({}, Sa, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), uy = en(sf), oy = qe({}, Sa, {
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
    var ih = qe({}, er, {
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
    }), cy = en(ih), fy = qe({}, Hs, {
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
    }), Id = en(fy), lh = qe({}, er, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Yd
    }), dy = en(lh), Ha = qe({}, Sa, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Qd = en(Ha), py = qe({}, Hs, {
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
    }), Ll = en(py), cf = [9, 13, 27, 32], Ml = 229, To = Qn && "CompositionEvent" in window, xu = null;
    Qn && "documentMode" in document && (xu = document.documentMode);
    var Wd = Qn && "TextEvent" in window && !xu, uh = Qn && (!To || xu && xu > 8 && xu <= 11), ff = 32, oh = String.fromCharCode(ff);
    function sh() {
      Vt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Vt("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Vt("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Vt("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
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
    function Kd(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function hf(e) {
      return e.locale === "ko";
    }
    var Ki = !1;
    function qd(e, t, a, i, u) {
      var s, f;
      if (To ? s = pf(t) : Ki ? vf(t, i) && (s = "onCompositionEnd") : ch(t, i) && (s = "onCompositionStart"), !s)
        return null;
      uh && !hf(i) && (!Ki && s === "onCompositionStart" ? Ki = lf(u) : s === "onCompositionEnd" && Ki && (f = zs()));
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
      if (Ki) {
        if (e === "compositionend" || !To && vf(e, t)) {
          var a = zs();
          return kl(), Ki = !1, a;
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
      Vt("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function n(e, t, a, i) {
      ud(i);
      var u = hh(t, "onChange");
      if (u.length > 0) {
        var s = new Ea("onChange", "change", null, a, i);
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
      if (fl(t))
        return e;
    }
    function E(e, t) {
      if (e === "change")
        return t;
    }
    var T = !1;
    Qn && (T = my("input") && (!document.documentMode || document.documentMode > 9));
    function z(e, t) {
      r = e, l = t, r.attachEvent("onpropertychange", W);
    }
    function Q() {
      r && (r.detachEvent("onpropertychange", W), r = null, l = null);
    }
    function W(e) {
      e.propertyName === "value" && m(l) && c(e);
    }
    function I(e, t, a) {
      e === "focusin" ? (Q(), z(t, a)) : e === "focusout" && Q();
    }
    function se(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return m(l);
    }
    function ye(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function Ee(e, t) {
      if (e === "click")
        return m(t);
    }
    function xn(e, t) {
      if (e === "input" || e === "change")
        return m(t);
    }
    function D(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || he(e, "number", e.value);
    }
    function x(e, t, a, i, u, s, f) {
      var p = a ? wf(a) : window, v, y;
      if (o(p) ? v = E : wo(p) ? T ? v = xn : (v = se, y = I) : ye(p) && (v = Ee), v) {
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
    function K(e, t, a, i, u, s, f) {
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
            (N !== j || N.tag !== le && N.tag !== xe) && (N = null);
          }
        } else
          w = null, N = a;
        if (w !== N) {
          var ae = uf, Le = "onMouseLeave", we = "onMouseEnter", bt = "mouse";
          (t === "pointerout" || t === "pointerover") && (ae = Id, Le = "onPointerLeave", we = "onPointerEnter", bt = "pointer");
          var mt = w == null ? g : wf(w), k = N == null ? g : wf(N), H = new ae(Le, bt + "leave", w, i, u);
          H.target = mt, H.relatedTarget = k;
          var O = null, G = Bs(u);
          if (G === a) {
            var de = new ae(we, bt + "enter", N, i, u);
            de.target = k, de.relatedTarget = mt, O = de;
          }
          DT(e, H, O, w, N);
        }
      }
    }
    function Re(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var ge = typeof Object.is == "function" ? Object.is : Re;
    function ke(e, t) {
      if (ge(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var u = 0; u < a.length; u++) {
        var s = a[u];
        if (!rr.call(t, s) || !ge(e[s], t[s]))
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
        if (a.nodeType === Pi) {
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
    function Nl(e) {
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
        for (var w = null; g === t && (a === 0 || g.nodeType === Pi) && (f = s + a), g === i && (u === 0 || g.nodeType === Pi) && (p = s + u), g.nodeType === Pi && (s += g.nodeValue.length), (w = g.firstChild) !== null; )
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
    function sT(e, t) {
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
      return e && e.nodeType === Pi;
    }
    function hE(e, t) {
      return !e || !t ? !1 : e === t ? !0 : vE(e) ? !1 : vE(t) ? hE(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function cT(e) {
      return e && e.ownerDocument && hE(e.ownerDocument.documentElement, e);
    }
    function fT(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function mE() {
      for (var e = window, t = ji(); t instanceof e.HTMLIFrameElement; ) {
        if (fT(t))
          e = t.contentWindow;
        else
          return t;
        t = ji(e.document);
      }
      return t;
    }
    function gy(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function dT() {
      var e = mE();
      return {
        focusedElem: e,
        selectionRange: gy(e) ? vT(e) : null
      };
    }
    function pT(e) {
      var t = mE(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && cT(a)) {
        i !== null && gy(a) && hT(a, i);
        for (var u = [], s = a; s = s.parentNode; )
          s.nodeType === Kr && u.push({
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
    function vT(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = Nl(e), t || {
        start: 0,
        end: 0
      };
    }
    function hT(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : sT(e, t);
    }
    var mT = Qn && "documentMode" in document && document.documentMode <= 11;
    function yT() {
      Vt("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var Sf = null, Sy = null, Xd = null, Ey = !1;
    function gT(e) {
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
    function ST(e) {
      return e.window === e ? e.document : e.nodeType === Bi ? e : e.ownerDocument;
    }
    function yE(e, t, a) {
      var i = ST(a);
      if (!(Ey || Sf == null || Sf !== ji(i))) {
        var u = gT(Sf);
        if (!Xd || !ke(Xd, u)) {
          Xd = u;
          var s = hh(Sy, "onSelect");
          if (s.length > 0) {
            var f = new Ea("onSelect", "select", null, t, a);
            e.push({
              event: f,
              listeners: s
            }), f.target = Sf;
          }
        }
      }
    }
    function ET(e, t, a, i, u, s, f) {
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
          if (mT)
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
      TE.set(e, t), Vt(t, [e]);
    }
    function CT() {
      for (var e = 0; e < wE.length; e++) {
        var t = wE[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        xo(a, "on" + i);
      }
      xo(SE, "onAnimationEnd"), xo(EE, "onAnimationIteration"), xo(CE, "onAnimationStart"), xo("dblclick", "onDoubleClick"), xo("focusin", "onFocus"), xo("focusout", "onBlur"), xo(RE, "onTransitionEnd");
    }
    function RT(e, t, a, i, u, s, f) {
      var p = TE.get(t);
      if (p !== void 0) {
        var v = Ea, y = t;
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
            v = Pd;
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
            v = Ll;
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
          t === "scroll", w = _T(a, p, i.type, g, _);
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
    CT(), L(), gf(), yT(), sh();
    function TT(e, t, a, i, u, s, f) {
      RT(e, t, a, i, u, s);
      var p = (s & ld) === 0;
      p && (K(e, t, a, i, u), x(e, t, a, i, u), ET(e, t, a, i, u), yf(e, t, a, i, u));
    }
    var Zd = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], Ry = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(Zd));
    function xE(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, ss(i, t, void 0, e), e.currentTarget = null;
    }
    function wT(e, t, a) {
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
        wT(s, f, a);
      }
      $i();
    }
    function xT(e, t, a, i, u) {
      var s = hc(a), f = [];
      TT(f, e, i, a, s, t), _E(f, t);
    }
    function hn(e, t) {
      Ry.has(e) || S('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = tw(t), u = kT(e);
      i.has(u) || (bE(t, e, mi, a), i.add(u));
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
        var t = e.nodeType === Bi ? e : e.ownerDocument;
        t !== null && (t[vh] || (t[vh] = !0, Ty("selectionchange", !1, t)));
      }
    }
    function bE(e, t, a, i, u) {
      var s = ga(e, t, a), f = void 0;
      os && (t === "touchstart" || t === "touchmove" || t === "wheel") && (f = !0), e = e, i ? f !== void 0 ? So(e, t, s, f) : Vd(e, t, s) : f !== void 0 ? Gi(e, t, s, f) : ra(e, t, s);
    }
    function DE(e, t) {
      return e === t || e.nodeType === Ln && e.parentNode === t;
    }
    function wy(e, t, a, i, u) {
      var s = i;
      if (!(t & id) && !(t & mi)) {
        var f = u;
        if (i !== null) {
          var p = i;
          e: for (; ; ) {
            if (p === null)
              return;
            var v = p.tag;
            if (v === J || v === je) {
              var y = p.stateNode.containerInfo;
              if (DE(y, f))
                break;
              if (v === je)
                for (var g = p.return; g !== null; ) {
                  var _ = g.tag;
                  if (_ === J || _ === je) {
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
                if (U === le || U === xe) {
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
        return xT(e, t, a, s);
      });
    }
    function ep(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function _T(e, t, a, i, u, s) {
      for (var f = t !== null ? t + "Capture" : null, p = i ? f : t, v = [], y = e, g = null; y !== null; ) {
        var _ = y, w = _.stateNode, N = _.tag;
        if (N === le && w !== null && (g = w, p !== null)) {
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
        if (p === le && f !== null) {
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
      while (e && e.tag !== le);
      return e || null;
    }
    function bT(e, t) {
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
        if (_ === le && g !== null) {
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
    function DT(e, t, a, i, u) {
      var s = i && u ? bT(i, u) : null;
      i !== null && kE(e, t, i, s, !1), u !== null && a !== null && kE(e, a, u, s, !0);
    }
    function kT(e, t) {
      return e + "__bubble";
    }
    var Va = !1, tp = "dangerouslySetInnerHTML", mh = "suppressContentEditableWarning", _o = "suppressHydrationWarning", OE = "autoFocus", Vs = "children", Ps = "style", yh = "__html", xy, gh, np, LE, Sh, ME, NE;
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
        registrationNameDependencies: Ge,
        possibleRegistrationNames: St
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
      var a = e.namespaceURI === Xa ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var OT = /\r\n?/g, LT = /\u0000|\uFFFD/g;
    function Eh(e) {
      Pn(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(OT, `
`).replace(LT, "");
    }
    function Ch(e, t, a, i) {
      var u = Eh(t), s = Eh(e);
      if (s !== u && (i && (Va || (Va = !0, S('Text content did not match. Server: "%s" Client: "%s"', s, u))), a && B))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function zE(e) {
      return e.nodeType === Bi ? e : e.ownerDocument;
    }
    function MT() {
    }
    function Rh(e) {
      e.onclick = MT;
    }
    function NT(e, t, a, i, u) {
      for (var s in i)
        if (i.hasOwnProperty(s)) {
          var f = i[s];
          if (s === Ps)
            f && Object.freeze(f), hv(t, f);
          else if (s === tp) {
            var p = f ? f[yh] : void 0;
            p != null && rv(t, p);
          } else if (s === Vs)
            if (typeof f == "string") {
              var v = e !== "textarea" || f !== "";
              v && pl(t, f);
            } else typeof f == "number" && pl(t, "" + f);
          else s === mh || s === _o || s === OE || (Ge.hasOwnProperty(s) ? f != null && (typeof f != "function" && Sh(s, f), s === "onScroll" && hn("scroll", t)) : f != null && da(t, s, f, u));
        }
    }
    function zT(e, t, a, i) {
      for (var u = 0; u < t.length; u += 2) {
        var s = t[u], f = t[u + 1];
        s === Ps ? hv(e, f) : s === tp ? rv(e, f) : s === Vs ? pl(e, f) : da(e, s, f, i);
      }
    }
    function UT(e, t, a, i) {
      var u, s = zE(a), f, p = i;
      if (p === Xa && (p = Jf(e)), p === Xa) {
        if (u = vl(e, t), !u && e !== e.toLowerCase() && S("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
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
      return p === Xa && !u && Object.prototype.toString.call(f) === "[object HTMLUnknownElement]" && !rr.call(xy, e) && (xy[e] = !0, S("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), f;
    }
    function AT(e, t) {
      return zE(t).createTextNode(e);
    }
    function FT(e, t, a, i) {
      var u = vl(t, a);
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
          Iu(e, a), s = La(e, a), hn("invalid", e);
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
      switch (pc(t, s), NT(t, e, i, s, u), t) {
        case "input":
          Oa(e), M(e, a, !1);
          break;
        case "textarea":
          Oa(e), nv(e);
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
    function jT(e, t, a, i, u) {
      gh(t, i);
      var s = null, f, p;
      switch (t) {
        case "input":
          f = La(e, a), p = La(e, i), s = [];
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
          if (v === Ps) {
            var _ = f[v];
            for (y in _)
              _.hasOwnProperty(y) && (g || (g = {}), g[y] = "");
          } else v === tp || v === Vs || v === mh || v === _o || v === OE || (Ge.hasOwnProperty(v) ? s || (s = []) : (s = s || []).push(v, null));
      for (v in p) {
        var w = p[v], N = f != null ? f[v] : void 0;
        if (!(!p.hasOwnProperty(v) || w === N || w == null && N == null))
          if (v === Ps)
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
          } else v === Vs ? (typeof w == "string" || typeof w == "number") && (s = s || []).push(v, "" + w) : v === mh || v === _o || (Ge.hasOwnProperty(v) ? (w != null && (typeof w != "function" && Sh(v, w), v === "onScroll" && hn("scroll", e)), !s && N !== w && (s = [])) : (s = s || []).push(v, w));
      }
      return g && (Za(g, p[Ps]), (s = s || []).push(Ps, g)), s;
    }
    function HT(e, t, a, i, u) {
      a === "input" && u.type === "radio" && u.name != null && h(e, u);
      var s = vl(a, i), f = vl(a, u);
      switch (zT(e, t, s, f), a) {
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
    function PT(e, t, a, i, u, s, f) {
      var p, v;
      switch (p = vl(t, a), gh(t, a), t) {
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
          if (U === Vs)
            typeof j == "string" ? e.textContent !== j && (a[_o] !== !0 && Ch(e.textContent, j, s, f), N = [Vs, j]) : typeof j == "number" && e.textContent !== "" + j && (a[_o] !== !0 && Ch(e.textContent, j, s, f), N = [Vs, "" + j]);
          else if (Ge.hasOwnProperty(U))
            j != null && (typeof j != "function" && Sh(U, j), U === "onScroll" && hn("scroll", e));
          else if (f && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof p == "boolean") {
            var ae = void 0, Le = tn(U);
            if (a[_o] !== !0) {
              if (!(U === mh || U === _o || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              U === "value" || U === "checked" || U === "selected")) {
                if (U === tp) {
                  var we = e.innerHTML, bt = j ? j[yh] : void 0;
                  if (bt != null) {
                    var mt = NE(e, bt);
                    mt !== we && np(U, we, mt);
                  }
                } else if (U === Ps) {
                  if (v.delete(U), ME) {
                    var k = Xm(j);
                    ae = e.getAttribute("style"), k !== ae && np(U, ae, k);
                  }
                } else if (p)
                  v.delete(U.toLowerCase()), ae = oi(e, U, j), j !== ae && np(U, ae, j);
                else if (!ln(U, Le, p) && !Kn(U, j, Le, p)) {
                  var H = !1;
                  if (Le !== null)
                    v.delete(Le.attributeName), ae = Wl(e, U, j, Le);
                  else {
                    var O = i;
                    if (O === Xa && (O = Jf(t)), O === Xa)
                      v.delete(U.toLowerCase());
                    else {
                      var G = VT(U);
                      G !== null && G !== U && (H = !0, v.delete(G)), v.delete(U);
                    }
                    ae = oi(e, U, j);
                  }
                  var de = $;
                  !de && j !== ae && !H && np(U, ae, j);
                }
              }
            }
          }
        }
      switch (f && // $FlowFixMe - Should be inferred as not undefined.
      v.size > 0 && a[_o] !== !0 && LE(v), t) {
        case "input":
          Oa(e), M(e, a, !0);
          break;
        case "textarea":
          Oa(e), nv(e);
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
    function BT(e, t, a) {
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
    function $T(e, t, a) {
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
      var YT = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], UE = [
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
      ], IT = UE.concat(["button"]), QT = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], AE = {
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
        var a = qe({}, e || AE), i = {
          tag: t
        };
        return UE.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), IT.indexOf(t) !== -1 && (a.pTagInButtonScope = null), YT.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var WT = function(e, t) {
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
            return QT.indexOf(t) === -1;
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
      }, GT = function(e, t) {
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
        var s = WT(e, u) ? null : i, f = s ? null : GT(e, a), p = s || f;
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
    var Th = "suppressHydrationWarning", wh = "$", xh = "/$", ip = "$?", lp = "$!", KT = "style", Oy = null, Ly = null;
    function qT(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case Bi:
        case Xo: {
          t = i === Bi ? "#document" : "#fragment";
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
    function XT(e, t, a) {
      {
        var i = e, u = cc(i.namespace, t), s = ap(i.ancestorInfo, t);
        return {
          namespace: u,
          ancestorInfo: s
        };
      }
    }
    function fD(e) {
      return e;
    }
    function ZT(e) {
      Oy = cr(), Ly = dT();
      var t = null;
      return wn(!1), t;
    }
    function JT(e) {
      pT(Ly), wn(Oy), Oy = null, Ly = null;
    }
    function e1(e, t, a, i, u) {
      var s;
      {
        var f = i;
        if (rp(e, null, f.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var p = "" + t.children, v = ap(f.ancestorInfo, e);
          rp(null, p, v);
        }
        s = f.namespace;
      }
      var y = UT(e, t, a, s);
      return sp(u, y), Hy(y, t), y;
    }
    function t1(e, t) {
      e.appendChild(t);
    }
    function n1(e, t, a, i, u) {
      switch (FT(e, t, a, i), t) {
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
    function r1(e, t, a, i, u, s) {
      {
        var f = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var p = "" + i.children, v = ap(f.ancestorInfo, t);
          rp(null, p, v);
        }
      }
      return jT(e, t, a, i);
    }
    function My(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function a1(e, t, a, i) {
      {
        var u = a;
        rp(null, e, u.ancestorInfo);
      }
      var s = AT(e, t);
      return sp(i, s), s;
    }
    function i1() {
      var e = window.event;
      return e === void 0 ? or : go(e.type);
    }
    var Ny = typeof setTimeout == "function" ? setTimeout : void 0, l1 = typeof clearTimeout == "function" ? clearTimeout : void 0, zy = -1, jE = typeof Promise == "function" ? Promise : void 0, u1 = typeof queueMicrotask == "function" ? queueMicrotask : typeof jE < "u" ? function(e) {
      return jE.resolve(null).then(e).catch(o1);
    } : Ny;
    function o1(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function s1(e, t, a, i) {
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
    function c1(e, t, a, i, u, s) {
      HT(e, t, a, i, u), Hy(e, u);
    }
    function HE(e) {
      pl(e, "");
    }
    function f1(e, t, a) {
      e.nodeValue = a;
    }
    function d1(e, t) {
      e.appendChild(t);
    }
    function p1(e, t) {
      var a;
      e.nodeType === Ln ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && Rh(a);
    }
    function v1(e, t, a) {
      e.insertBefore(t, a);
    }
    function h1(e, t, a) {
      e.nodeType === Ln ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function m1(e, t) {
      e.removeChild(t);
    }
    function y1(e, t) {
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
    function g1(e, t) {
      e.nodeType === Ln ? Uy(e.parentNode, t) : e.nodeType === Kr && Uy(e, t), br(e);
    }
    function S1(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function E1(e) {
      e.nodeValue = "";
    }
    function C1(e, t) {
      e = e;
      var a = t[KT], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = dc("display", i);
    }
    function R1(e, t) {
      e.nodeValue = t;
    }
    function T1(e) {
      e.nodeType === Kr ? e.textContent = "" : e.nodeType === Bi && e.documentElement && e.removeChild(e.documentElement);
    }
    function w1(e, t, a) {
      return e.nodeType !== Kr || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function x1(e, t) {
      return t === "" || e.nodeType !== Pi ? null : e;
    }
    function _1(e) {
      return e.nodeType !== Ln ? null : e;
    }
    function VE(e) {
      return e.data === ip;
    }
    function Ay(e) {
      return e.data === lp;
    }
    function b1(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, u;
      return t && (a = t.dgst, i = t.msg, u = t.stck), {
        message: i,
        digest: a,
        stack: u
      };
    }
    function D1(e, t) {
      e._reactRetry = t;
    }
    function _h(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === Kr || t === Pi)
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
    function k1(e) {
      return _h(e.firstChild);
    }
    function O1(e) {
      return _h(e.firstChild);
    }
    function L1(e) {
      return _h(e.nextSibling);
    }
    function M1(e, t, a, i, u, s, f) {
      sp(s, e), Hy(e, a);
      var p;
      {
        var v = u;
        p = v.namespace;
      }
      var y = (s.mode & ot) !== be;
      return PT(e, t, a, p, i, y, f);
    }
    function N1(e, t, a, i) {
      return sp(a, e), a.mode & ot, BT(e, t);
    }
    function z1(e, t) {
      sp(t, e);
    }
    function U1(e) {
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
    function PE(e) {
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
    function A1(e) {
      br(e);
    }
    function F1(e) {
      br(e);
    }
    function j1(e) {
      return e !== "head" && e !== "body";
    }
    function H1(e, t, a, i) {
      var u = !0;
      Ch(t.nodeValue, a, i, u);
    }
    function V1(e, t, a, i, u, s) {
      if (t[Th] !== !0) {
        var f = !0;
        Ch(i.nodeValue, u, s, f);
      }
    }
    function P1(e, t) {
      t.nodeType === Kr ? _y(e, t) : t.nodeType === Ln || by(e, t);
    }
    function B1(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === Kr ? _y(a, t) : t.nodeType === Ln || by(a, t));
      }
    }
    function $1(e, t, a, i, u) {
      (u || t[Th] !== !0) && (i.nodeType === Kr ? _y(a, i) : i.nodeType === Ln || by(a, i));
    }
    function Y1(e, t, a) {
      Dy(e, t);
    }
    function I1(e, t) {
      ky(e, t);
    }
    function Q1(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && Dy(i, t);
      }
    }
    function W1(e, t) {
      {
        var a = e.parentNode;
        a !== null && ky(a, t);
      }
    }
    function G1(e, t, a, i, u, s) {
      (s || t[Th] !== !0) && Dy(a, i);
    }
    function K1(e, t, a, i, u) {
      (u || t[Th] !== !0) && ky(a, i);
    }
    function q1(e) {
      S("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function X1(e) {
      Jd(e);
    }
    var Rf = Math.random().toString(36).slice(2), Tf = "__reactFiber$" + Rf, Fy = "__reactProps$" + Rf, op = "__reactContainer$" + Rf, jy = "__reactEvents$" + Rf, Z1 = "__reactListeners$" + Rf, J1 = "__reactHandles$" + Rf;
    function ew(e) {
      delete e[Tf], delete e[Fy], delete e[jy], delete e[Z1], delete e[J1];
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
            for (var u = PE(e); u !== null; ) {
              var s = u[Tf];
              if (s)
                return s;
              u = PE(u);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function bo(e) {
      var t = e[Tf] || e[op];
      return t && (t.tag === le || t.tag === xe || t.tag === Ce || t.tag === J) ? t : null;
    }
    function wf(e) {
      if (e.tag === le || e.tag === xe)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function Dh(e) {
      return e[Fy] || null;
    }
    function Hy(e, t) {
      e[Fy] = t;
    }
    function tw(e) {
      var t = e[jy];
      return t === void 0 && (t = e[jy] = /* @__PURE__ */ new Set()), t;
    }
    var $E = {}, YE = st.ReactDebugCurrentFrame;
    function kh(e) {
      if (e) {
        var t = e._owner, a = Io(e.type, e._source, t ? t.type : null);
        YE.setExtraStackFrame(a);
      } else
        YE.setExtraStackFrame(null);
    }
    function qi(e, t, a, i, u) {
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
    var Vy = [], Oh;
    Oh = [];
    var _u = -1;
    function Do(e) {
      return {
        current: e
      };
    }
    function aa(e, t) {
      if (_u < 0) {
        S("Unexpected pop.");
        return;
      }
      t !== Oh[_u] && S("Unexpected Fiber popped."), e.current = Vy[_u], Vy[_u] = null, Oh[_u] = null, _u--;
    }
    function ia(e, t, a) {
      _u++, Vy[_u] = e.current, Oh[_u] = a, e.current = t;
    }
    var Py;
    Py = {};
    var ii = {};
    Object.freeze(ii);
    var bu = Do(ii), zl = Do(!1), By = ii;
    function xf(e, t, a) {
      return a && Ul(t) ? By : bu.current;
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
          return ii;
        var u = e.stateNode;
        if (u && u.__reactInternalMemoizedUnmaskedChildContext === t)
          return u.__reactInternalMemoizedMaskedChildContext;
        var s = {};
        for (var f in i)
          s[f] = t[f];
        {
          var p = Be(e) || "Unknown";
          qi(i, s, "context", p);
        }
        return u && IE(e, t, s), s;
      }
    }
    function Lh() {
      return zl.current;
    }
    function Ul(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function Mh(e) {
      aa(zl, e), aa(bu, e);
    }
    function $y(e) {
      aa(zl, e), aa(bu, e);
    }
    function QE(e, t, a) {
      {
        if (bu.current !== ii)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        ia(bu, t, e), ia(zl, a, e);
      }
    }
    function WE(e, t, a) {
      {
        var i = e.stateNode, u = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = Be(e) || "Unknown";
            Py[s] || (Py[s] = !0, S("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var f = i.getChildContext();
        for (var p in f)
          if (!(p in u))
            throw new Error((Be(e) || "Unknown") + '.getChildContext(): key "' + p + '" is not defined in childContextTypes.');
        {
          var v = Be(e) || "Unknown";
          qi(u, f, "child context", v);
        }
        return qe({}, a, f);
      }
    }
    function Nh(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || ii;
        return By = bu.current, ia(bu, a, e), ia(zl, zl.current, e), !0;
      }
    }
    function GE(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var u = WE(e, t, By);
          i.__reactInternalMemoizedMergedChildContext = u, aa(zl, e), aa(bu, e), ia(bu, u, e), ia(zl, a, e);
        } else
          aa(zl, e), ia(zl, a, e);
      }
    }
    function nw(e) {
      {
        if (!Ov(e) || e.tag !== fe)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case J:
              return t.stateNode.context;
            case fe: {
              var a = t.type;
              if (Ul(a))
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
    function rw(e) {
      Yy = !0, KE(e);
    }
    function qE() {
      Yy && Oo();
    }
    function Oo() {
      if (!Iy && Du !== null) {
        Iy = !0;
        var e = 0, t = ya();
        try {
          var a = !0, i = Du;
          for ($n(na); e < i.length; e++) {
            var u = i[e];
            do
              u = u(a);
            while (u !== null);
          }
          Du = null, Yy = !1;
        } catch (s) {
          throw Du !== null && (Du = Du.slice(e + 1)), vd(Ii, Oo), s;
        } finally {
          $n(t), Iy = !1;
        }
      }
      return null;
    }
    var bf = [], Df = 0, Uh = null, Ah = 0, Ti = [], wi = 0, $s = null, ku = 1, Ou = "";
    function aw(e) {
      return Is(), (e.flags & fs) !== _e;
    }
    function iw(e) {
      return Is(), Ah;
    }
    function lw() {
      var e = Ou, t = ku, a = t & ~uw(t);
      return a.toString(32) + e;
    }
    function Ys(e, t) {
      Is(), bf[Df++] = Ah, bf[Df++] = Uh, Uh = e, Ah = t;
    }
    function XE(e, t, a) {
      Is(), Ti[wi++] = ku, Ti[wi++] = Ou, Ti[wi++] = $s, $s = e;
      var i = ku, u = Ou, s = Fh(i) - 1, f = i & ~(1 << s), p = a + 1, v = Fh(t) + s;
      if (v > 30) {
        var y = s - s % 5, g = (1 << y) - 1, _ = (f & g).toString(32), w = f >> y, N = s - y, U = Fh(t) + N, j = p << N, ae = j | w, Le = _ + u;
        ku = 1 << U | ae, Ou = Le;
      } else {
        var we = p << s, bt = we | f, mt = u;
        ku = 1 << v | bt, Ou = mt;
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
    function uw(e) {
      return 1 << Fh(e) - 1;
    }
    function Wy(e) {
      for (; e === Uh; )
        Uh = bf[--Df], bf[Df] = null, Ah = bf[--Df], bf[Df] = null;
      for (; e === $s; )
        $s = Ti[--wi], Ti[wi] = null, Ou = Ti[--wi], Ti[wi] = null, ku = Ti[--wi], Ti[wi] = null;
    }
    function ow() {
      return Is(), $s !== null ? {
        id: ku,
        overflow: Ou
      } : null;
    }
    function sw(e, t) {
      Is(), Ti[wi++] = ku, Ti[wi++] = Ou, Ti[wi++] = $s, ku = t.id, Ou = t.overflow, $s = e;
    }
    function Is() {
      Ar() || S("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Ur = null, xi = null, Xi = !1, Qs = !1, Lo = null;
    function cw() {
      Xi && S("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function ZE() {
      Qs = !0;
    }
    function fw() {
      return Qs;
    }
    function dw(e) {
      var t = e.stateNode.containerInfo;
      return xi = O1(t), Ur = e, Xi = !0, Lo = null, Qs = !1, !0;
    }
    function pw(e, t, a) {
      return xi = L1(t), Ur = e, Xi = !0, Lo = null, Qs = !1, a !== null && sw(e, a), !0;
    }
    function JE(e, t) {
      switch (e.tag) {
        case J: {
          P1(e.stateNode.containerInfo, t);
          break;
        }
        case le: {
          var a = (e.mode & ot) !== be;
          $1(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case Ce: {
          var i = e.memoizedState;
          i.dehydrated !== null && B1(i.dehydrated, t);
          break;
        }
      }
    }
    function eC(e, t) {
      JE(e, t);
      var a = yb();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= qr) : i.push(a);
    }
    function Gy(e, t) {
      {
        if (Qs)
          return;
        switch (e.tag) {
          case J: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case le:
                var i = t.type;
                t.pendingProps, Y1(a, i);
                break;
              case xe:
                var u = t.pendingProps;
                I1(a, u);
                break;
            }
            break;
          }
          case le: {
            var s = e.type, f = e.memoizedProps, p = e.stateNode;
            switch (t.tag) {
              case le: {
                var v = t.type, y = t.pendingProps, g = (e.mode & ot) !== be;
                G1(
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
              case xe: {
                var _ = t.pendingProps, w = (e.mode & ot) !== be;
                K1(
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
          case Ce: {
            var N = e.memoizedState, U = N.dehydrated;
            if (U !== null) switch (t.tag) {
              case le:
                var j = t.type;
                t.pendingProps, Q1(U, j);
                break;
              case xe:
                var ae = t.pendingProps;
                W1(U, ae);
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
        case le: {
          var a = e.type;
          e.pendingProps;
          var i = w1(t, a);
          return i !== null ? (e.stateNode = i, Ur = e, xi = k1(i), !0) : !1;
        }
        case xe: {
          var u = e.pendingProps, s = x1(t, u);
          return s !== null ? (e.stateNode = s, Ur = e, xi = null, !0) : !1;
        }
        case Ce: {
          var f = _1(t);
          if (f !== null) {
            var p = {
              dehydrated: f,
              treeContext: ow(),
              retryLane: ma
            };
            e.memoizedState = p;
            var v = gb(f);
            return v.return = e, e.child = v, Ur = e, xi = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function Ky(e) {
      return (e.mode & ot) !== be && (e.flags & ut) === _e;
    }
    function qy(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function Xy(e) {
      if (Xi) {
        var t = xi;
        if (!t) {
          Ky(e) && (Gy(Ur, e), qy()), tC(Ur, e), Xi = !1, Ur = e;
          return;
        }
        var a = t;
        if (!nC(e, t)) {
          Ky(e) && (Gy(Ur, e), qy()), t = up(a);
          var i = Ur;
          if (!t || !nC(e, t)) {
            tC(Ur, e), Xi = !1, Ur = e;
            return;
          }
          eC(i, a);
        }
      }
    }
    function vw(e, t, a) {
      var i = e.stateNode, u = !Qs, s = M1(i, e.type, e.memoizedProps, t, a, e, u);
      return e.updateQueue = s, s !== null;
    }
    function hw(e) {
      var t = e.stateNode, a = e.memoizedProps, i = N1(t, a, e);
      if (i) {
        var u = Ur;
        if (u !== null)
          switch (u.tag) {
            case J: {
              var s = u.stateNode.containerInfo, f = (u.mode & ot) !== be;
              H1(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                f
              );
              break;
            }
            case le: {
              var p = u.type, v = u.memoizedProps, y = u.stateNode, g = (u.mode & ot) !== be;
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
    function mw(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      z1(a, e);
    }
    function yw(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return U1(a);
    }
    function rC(e) {
      for (var t = e.return; t !== null && t.tag !== le && t.tag !== J && t.tag !== Ce; )
        t = t.return;
      Ur = t;
    }
    function jh(e) {
      if (e !== Ur)
        return !1;
      if (!Xi)
        return rC(e), Xi = !0, !1;
      if (e.tag !== J && (e.tag !== le || j1(e.type) && !My(e.type, e.memoizedProps))) {
        var t = xi;
        if (t)
          if (Ky(e))
            aC(e), qy();
          else
            for (; t; )
              eC(e, t), t = up(t);
      }
      return rC(e), e.tag === Ce ? xi = yw(e) : xi = Ur ? up(e.stateNode) : null, !0;
    }
    function gw() {
      return Xi && xi !== null;
    }
    function aC(e) {
      for (var t = xi; t; )
        JE(e, t), t = up(t);
    }
    function kf() {
      Ur = null, xi = null, Xi = !1, Qs = !1;
    }
    function iC() {
      Lo !== null && (ZR(Lo), Lo = null);
    }
    function Ar() {
      return Xi;
    }
    function Zy(e) {
      Lo === null ? Lo = [e] : Lo.push(e);
    }
    var Sw = st.ReactCurrentBatchConfig, Ew = null;
    function Cw() {
      return Sw.transition;
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
      var Rw = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & Xe && (t = a), a = a.return;
        return t;
      }, Ws = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, fp = [], dp = [], pp = [], vp = [], hp = [], mp = [], Gs = /* @__PURE__ */ new Set();
      Zi.recordUnsafeLifecycleWarnings = function(e, t) {
        Gs.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && fp.push(e), e.mode & Xe && typeof t.UNSAFE_componentWillMount == "function" && dp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && pp.push(e), e.mode & Xe && typeof t.UNSAFE_componentWillReceiveProps == "function" && vp.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && hp.push(e), e.mode & Xe && typeof t.UNSAFE_componentWillUpdate == "function" && mp.push(e));
      }, Zi.flushPendingUnsafeLifecycleWarnings = function() {
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
          Ne(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, y);
        }
        if (a.size > 0) {
          var g = Ws(a);
          Ne(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, g);
        }
        if (u.size > 0) {
          var _ = Ws(u);
          Ne(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, _);
        }
      };
      var Hh = /* @__PURE__ */ new Map(), lC = /* @__PURE__ */ new Set();
      Zi.recordLegacyContextWarning = function(e, t) {
        var a = Rw(e);
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
      }, Zi.discardPendingWarnings = function() {
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
    function Tw(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function yp(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & Xe || De) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self) && // Will already throw with "Function components cannot have string refs"
        !(a._owner && a._owner.tag !== fe) && // Will already warn with "Function components cannot be given refs"
        !(typeof a.type == "function" && !Tw(a.type)) && // Will already throw with "Element ref was specified as a string (someStringRef) but no owner was set"
        a._owner) {
          var u = Be(e) || "Component";
          tg[u] || (S('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', u, i), tg[u] = !0);
        }
        if (a._owner) {
          var s = a._owner, f;
          if (s) {
            var p = s;
            if (p.tag !== fe)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            f = p.stateNode;
          }
          if (!f)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var v = f;
          Wa(i, "ref");
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
    function Vh(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function Ph(e) {
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
          O === null ? (k.deletions = [H], k.flags |= qr) : O.push(H);
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
        for (var O = /* @__PURE__ */ new Map(), G = H; G !== null; )
          G.key !== null ? O.set(G.key, G) : O.set(G.index, G), G = G.sibling;
        return O;
      }
      function u(k, H) {
        var O = rc(k, H);
        return O.index = 0, O.sibling = null, O;
      }
      function s(k, H, O) {
        if (k.index = O, !e)
          return k.flags |= fs, H;
        var G = k.alternate;
        if (G !== null) {
          var de = G.index;
          return de < H ? (k.flags |= Mn, H) : de;
        } else
          return k.flags |= Mn, H;
      }
      function f(k) {
        return e && k.alternate === null && (k.flags |= Mn), k;
      }
      function p(k, H, O, G) {
        if (H === null || H.tag !== xe) {
          var de = ZS(O, k.mode, G);
          return de.return = k, de;
        } else {
          var ue = u(H, O);
          return ue.return = k, ue;
        }
      }
      function v(k, H, O, G) {
        var de = O.type;
        if (de === Ir)
          return g(k, H, O.props.children, G, O.key);
        if (H !== null && (H.elementType === de || // Keep this check inline so it only runs on the false path:
        v0(H, O) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof de == "object" && de !== null && de.$$typeof === Ie && oC(de) === H.type)) {
          var ue = u(H, O.props);
          return ue.ref = yp(k, H, O), ue.return = k, ue._debugSource = O._source, ue._debugOwner = O._owner, ue;
        }
        var Fe = XS(O, k.mode, G);
        return Fe.ref = yp(k, H, O), Fe.return = k, Fe;
      }
      function y(k, H, O, G) {
        if (H === null || H.tag !== je || H.stateNode.containerInfo !== O.containerInfo || H.stateNode.implementation !== O.implementation) {
          var de = JS(O, k.mode, G);
          return de.return = k, de;
        } else {
          var ue = u(H, O.children || []);
          return ue.return = k, ue;
        }
      }
      function g(k, H, O, G, de) {
        if (H === null || H.tag !== ct) {
          var ue = Bo(O, k.mode, G, de);
          return ue.return = k, ue;
        } else {
          var Fe = u(H, O);
          return Fe.return = k, Fe;
        }
      }
      function _(k, H, O) {
        if (typeof H == "string" && H !== "" || typeof H == "number") {
          var G = ZS("" + H, k.mode, O);
          return G.return = k, G;
        }
        if (typeof H == "object" && H !== null) {
          switch (H.$$typeof) {
            case ir: {
              var de = XS(H, k.mode, O);
              return de.ref = yp(k, null, H), de.return = k, de;
            }
            case pa: {
              var ue = JS(H, k.mode, O);
              return ue.return = k, ue;
            }
            case Ie: {
              var Fe = H._payload, Ke = H._init;
              return _(k, Ke(Fe), O);
            }
          }
          if (Ze(H) || dn(H)) {
            var Xt = Bo(H, k.mode, O, null);
            return Xt.return = k, Xt;
          }
          Vh(k, H);
        }
        return typeof H == "function" && Ph(k), null;
      }
      function w(k, H, O, G) {
        var de = H !== null ? H.key : null;
        if (typeof O == "string" && O !== "" || typeof O == "number")
          return de !== null ? null : p(k, H, "" + O, G);
        if (typeof O == "object" && O !== null) {
          switch (O.$$typeof) {
            case ir:
              return O.key === de ? v(k, H, O, G) : null;
            case pa:
              return O.key === de ? y(k, H, O, G) : null;
            case Ie: {
              var ue = O._payload, Fe = O._init;
              return w(k, H, Fe(ue), G);
            }
          }
          if (Ze(O) || dn(O))
            return de !== null ? null : g(k, H, O, G, null);
          Vh(k, O);
        }
        return typeof O == "function" && Ph(k), null;
      }
      function N(k, H, O, G, de) {
        if (typeof G == "string" && G !== "" || typeof G == "number") {
          var ue = k.get(O) || null;
          return p(H, ue, "" + G, de);
        }
        if (typeof G == "object" && G !== null) {
          switch (G.$$typeof) {
            case ir: {
              var Fe = k.get(G.key === null ? O : G.key) || null;
              return v(H, Fe, G, de);
            }
            case pa: {
              var Ke = k.get(G.key === null ? O : G.key) || null;
              return y(H, Ke, G, de);
            }
            case Ie:
              var Xt = G._payload, Ot = G._init;
              return N(k, H, O, Ot(Xt), de);
          }
          if (Ze(G) || dn(G)) {
            var In = k.get(O) || null;
            return g(H, In, G, de, null);
          }
          Vh(H, G);
        }
        return typeof G == "function" && Ph(H), null;
      }
      function U(k, H, O) {
        {
          if (typeof k != "object" || k === null)
            return H;
          switch (k.$$typeof) {
            case ir:
            case pa:
              uC(k, O);
              var G = k.key;
              if (typeof G != "string")
                break;
              if (H === null) {
                H = /* @__PURE__ */ new Set(), H.add(G);
                break;
              }
              if (!H.has(G)) {
                H.add(G);
                break;
              }
              S("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", G);
              break;
            case Ie:
              var de = k._payload, ue = k._init;
              U(ue(de), H, O);
              break;
          }
        }
        return H;
      }
      function j(k, H, O, G) {
        for (var de = null, ue = 0; ue < O.length; ue++) {
          var Fe = O[ue];
          de = U(Fe, de, k);
        }
        for (var Ke = null, Xt = null, Ot = H, In = 0, Lt = 0, jn = null; Ot !== null && Lt < O.length; Lt++) {
          Ot.index > Lt ? (jn = Ot, Ot = null) : jn = Ot.sibling;
          var ua = w(k, Ot, O[Lt], G);
          if (ua === null) {
            Ot === null && (Ot = jn);
            break;
          }
          e && Ot && ua.alternate === null && t(k, Ot), In = s(ua, In, Lt), Xt === null ? Ke = ua : Xt.sibling = ua, Xt = ua, Ot = jn;
        }
        if (Lt === O.length) {
          if (a(k, Ot), Ar()) {
            var $r = Lt;
            Ys(k, $r);
          }
          return Ke;
        }
        if (Ot === null) {
          for (; Lt < O.length; Lt++) {
            var ui = _(k, O[Lt], G);
            ui !== null && (In = s(ui, In, Lt), Xt === null ? Ke = ui : Xt.sibling = ui, Xt = ui);
          }
          if (Ar()) {
            var wa = Lt;
            Ys(k, wa);
          }
          return Ke;
        }
        for (var xa = i(k, Ot); Lt < O.length; Lt++) {
          var oa = N(xa, k, Lt, O[Lt], G);
          oa !== null && (e && oa.alternate !== null && xa.delete(oa.key === null ? Lt : oa.key), In = s(oa, In, Lt), Xt === null ? Ke = oa : Xt.sibling = oa, Xt = oa);
        }
        if (e && xa.forEach(function(Gf) {
          return t(k, Gf);
        }), Ar()) {
          var Fu = Lt;
          Ys(k, Fu);
        }
        return Ke;
      }
      function ae(k, H, O, G) {
        var de = dn(O);
        if (typeof de != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          O[Symbol.toStringTag] === "Generator" && (eg || S("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), eg = !0), O.entries === de && (Jy || S("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Jy = !0);
          var ue = de.call(O);
          if (ue)
            for (var Fe = null, Ke = ue.next(); !Ke.done; Ke = ue.next()) {
              var Xt = Ke.value;
              Fe = U(Xt, Fe, k);
            }
        }
        var Ot = de.call(O);
        if (Ot == null)
          throw new Error("An iterable object provided no iterator.");
        for (var In = null, Lt = null, jn = H, ua = 0, $r = 0, ui = null, wa = Ot.next(); jn !== null && !wa.done; $r++, wa = Ot.next()) {
          jn.index > $r ? (ui = jn, jn = null) : ui = jn.sibling;
          var xa = w(k, jn, wa.value, G);
          if (xa === null) {
            jn === null && (jn = ui);
            break;
          }
          e && jn && xa.alternate === null && t(k, jn), ua = s(xa, ua, $r), Lt === null ? In = xa : Lt.sibling = xa, Lt = xa, jn = ui;
        }
        if (wa.done) {
          if (a(k, jn), Ar()) {
            var oa = $r;
            Ys(k, oa);
          }
          return In;
        }
        if (jn === null) {
          for (; !wa.done; $r++, wa = Ot.next()) {
            var Fu = _(k, wa.value, G);
            Fu !== null && (ua = s(Fu, ua, $r), Lt === null ? In = Fu : Lt.sibling = Fu, Lt = Fu);
          }
          if (Ar()) {
            var Gf = $r;
            Ys(k, Gf);
          }
          return In;
        }
        for (var Kp = i(k, jn); !wa.done; $r++, wa = Ot.next()) {
          var $l = N(Kp, k, $r, wa.value, G);
          $l !== null && (e && $l.alternate !== null && Kp.delete($l.key === null ? $r : $l.key), ua = s($l, ua, $r), Lt === null ? In = $l : Lt.sibling = $l, Lt = $l);
        }
        if (e && Kp.forEach(function(Kb) {
          return t(k, Kb);
        }), Ar()) {
          var Gb = $r;
          Ys(k, Gb);
        }
        return In;
      }
      function Le(k, H, O, G) {
        if (H !== null && H.tag === xe) {
          a(k, H.sibling);
          var de = u(H, O);
          return de.return = k, de;
        }
        a(k, H);
        var ue = ZS(O, k.mode, G);
        return ue.return = k, ue;
      }
      function we(k, H, O, G) {
        for (var de = O.key, ue = H; ue !== null; ) {
          if (ue.key === de) {
            var Fe = O.type;
            if (Fe === Ir) {
              if (ue.tag === ct) {
                a(k, ue.sibling);
                var Ke = u(ue, O.props.children);
                return Ke.return = k, Ke._debugSource = O._source, Ke._debugOwner = O._owner, Ke;
              }
            } else if (ue.elementType === Fe || // Keep this check inline so it only runs on the false path:
            v0(ue, O) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof Fe == "object" && Fe !== null && Fe.$$typeof === Ie && oC(Fe) === ue.type) {
              a(k, ue.sibling);
              var Xt = u(ue, O.props);
              return Xt.ref = yp(k, ue, O), Xt.return = k, Xt._debugSource = O._source, Xt._debugOwner = O._owner, Xt;
            }
            a(k, ue);
            break;
          } else
            t(k, ue);
          ue = ue.sibling;
        }
        if (O.type === Ir) {
          var Ot = Bo(O.props.children, k.mode, G, O.key);
          return Ot.return = k, Ot;
        } else {
          var In = XS(O, k.mode, G);
          return In.ref = yp(k, H, O), In.return = k, In;
        }
      }
      function bt(k, H, O, G) {
        for (var de = O.key, ue = H; ue !== null; ) {
          if (ue.key === de)
            if (ue.tag === je && ue.stateNode.containerInfo === O.containerInfo && ue.stateNode.implementation === O.implementation) {
              a(k, ue.sibling);
              var Fe = u(ue, O.children || []);
              return Fe.return = k, Fe;
            } else {
              a(k, ue);
              break;
            }
          else
            t(k, ue);
          ue = ue.sibling;
        }
        var Ke = JS(O, k.mode, G);
        return Ke.return = k, Ke;
      }
      function mt(k, H, O, G) {
        var de = typeof O == "object" && O !== null && O.type === Ir && O.key === null;
        if (de && (O = O.props.children), typeof O == "object" && O !== null) {
          switch (O.$$typeof) {
            case ir:
              return f(we(k, H, O, G));
            case pa:
              return f(bt(k, H, O, G));
            case Ie:
              var ue = O._payload, Fe = O._init;
              return mt(k, H, Fe(ue), G);
          }
          if (Ze(O))
            return j(k, H, O, G);
          if (dn(O))
            return ae(k, H, O, G);
          Vh(k, O);
        }
        return typeof O == "string" && O !== "" || typeof O == "number" ? f(Le(k, H, "" + O, G)) : (typeof O == "function" && Ph(k), a(k, H));
      }
      return mt;
    }
    var Of = sC(!0), cC = sC(!1);
    function ww(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = rc(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = rc(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function xw(e, t) {
      for (var a = e.child; a !== null; )
        db(a, t), a = a.sibling;
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
      ia(ag, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== ig && S("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = ig;
    }
    function ug(e, t) {
      var a = ag.current;
      aa(ag, t), e._currentValue = a;
    }
    function og(e, t, a) {
      for (var i = e; i !== null; ) {
        var u = i.alternate;
        if (hu(i.childLanes, t) ? u !== null && !hu(u.childLanes, t) && (u.childLanes = Je(u.childLanes, t)) : (i.childLanes = Je(i.childLanes, t), u !== null && (u.childLanes = Je(u.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && S("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function _w(e, t, a) {
      bw(e, t, a);
    }
    function bw(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var u = void 0, s = i.dependencies;
        if (s !== null) {
          u = i.child;
          for (var f = s.firstContext; f !== null; ) {
            if (f.context === t) {
              if (i.tag === fe) {
                var p = Jn(a), v = Lu(Bt, p);
                v.tag = Qh;
                var y = i.updateQueue;
                if (y !== null) {
                  var g = y.shared, _ = g.pending;
                  _ === null ? v.next = v : (v.next = _.next, _.next = v), g.pending = v;
                }
              }
              i.lanes = Je(i.lanes, a);
              var w = i.alternate;
              w !== null && (w.lanes = Je(w.lanes, a)), og(i.return, a, e), s.lanes = Je(s.lanes, a);
              break;
            }
            f = f.next;
          }
        } else if (i.tag === it)
          u = i.type === e.type ? null : i.child;
        else if (i.tag === fn) {
          var N = i.return;
          if (N === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          N.lanes = Je(N.lanes, a);
          var U = N.alternate;
          U !== null && (U.lanes = Je(U.lanes, a)), og(N, a, e), u = i.sibling;
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
        i !== null && (ta(a.lanes, t) && Mp(), a.firstContext = null);
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
            lanes: V,
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
    function Dw() {
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
    function kw(e, t, a, i) {
      var u = t.interleaved;
      u === null ? (a.next = a, sg(t)) : (a.next = u.next, u.next = a), t.interleaved = a;
    }
    function Ow(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, sg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Ih(e, i);
    }
    function Pa(e, t) {
      return Ih(e, t);
    }
    var Lw = Ih;
    function Ih(e, t) {
      e.lanes = Je(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = Je(a.lanes, t)), a === null && (e.flags & (Mn | zn)) !== _e && c0(e);
      for (var i = e, u = e.return; u !== null; )
        u.childLanes = Je(u.childLanes, t), a = u.alternate, a !== null ? a.childLanes = Je(a.childLanes, t) : (u.flags & (Mn | zn)) !== _e && c0(e), i = u, u = u.return;
      if (i.tag === J) {
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
          lanes: V
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
      if (Gh === u && !fg && (S("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), fg = !0), k_()) {
        var s = u.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), u.pending = t, Lw(e, a);
      } else
        return Ow(e, u, t, a);
    }
    function Kh(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var u = i.shared;
        if (Ld(a)) {
          var s = u.lanes;
          s = Kc(s, e.pendingLanes);
          var f = Je(s, a);
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
    function Mw(e, t, a, i, u, s) {
      switch (a.tag) {
        case mC: {
          var f = a.payload;
          if (typeof f == "function") {
            fC();
            var p = f.call(s, i, u);
            {
              if (e.mode & Xe) {
                Pt(!0);
                try {
                  f.call(s, i, u);
                } finally {
                  Pt(!1);
                }
              }
              dC();
            }
            return p;
          }
          return f;
        }
        case cg:
          e.flags = e.flags & -65537 | ut;
        case hC: {
          var v = a.payload, y;
          if (typeof v == "function") {
            fC(), y = v.call(s, i, u);
            {
              if (e.mode & Xe) {
                Pt(!0);
                try {
                  v.call(s, i, u);
                } finally {
                  Pt(!1);
                }
              }
              dC();
            }
          } else
            y = v;
          return y == null ? i : qe({}, i, y);
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
        var N = u.baseState, U = V, j = null, ae = null, Le = null, we = s;
        do {
          var bt = we.lane, mt = we.eventTime;
          if (hu(i, bt)) {
            if (Le !== null) {
              var H = {
                eventTime: mt,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: An,
                tag: we.tag,
                payload: we.payload,
                callback: we.callback,
                next: null
              };
              Le = Le.next = H;
            }
            N = Mw(e, u, we, N, t, a);
            var O = we.callback;
            if (O !== null && // If the update was already committed, we should not queue its
            // callback again.
            we.lane !== An) {
              e.flags |= Jt;
              var G = u.effects;
              G === null ? u.effects = [we] : G.push(we);
            }
          } else {
            var k = {
              eventTime: mt,
              lane: bt,
              tag: we.tag,
              payload: we.payload,
              callback: we.callback,
              next: null
            };
            Le === null ? (ae = Le = k, j = N) : Le = Le.next = k, U = Je(U, bt);
          }
          if (we = we.next, we === null) {
            if (p = u.shared.pending, p === null)
              break;
            var de = p, ue = de.next;
            de.next = null, we = ue, u.lastBaseUpdate = de, u.shared.pending = null;
          }
        } while (!0);
        Le === null && (j = N), u.baseState = j, u.firstBaseUpdate = ae, u.lastBaseUpdate = Le;
        var Fe = u.shared.interleaved;
        if (Fe !== null) {
          var Ke = Fe;
          do
            U = Je(U, Ke.lane), Ke = Ke.next;
          while (Ke !== Fe);
        } else s === null && (u.shared.lanes = V);
        Yp(U), e.lanes = U, e.memoizedState = N;
      }
      Gh = null;
    }
    function Nw(e, t) {
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
          f !== null && (s.callback = null, Nw(f, a));
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
      ia(Zh, t, e), ia(Sp, e, e), ia(No, gp, e);
      var a = qT(t);
      aa(No, e), ia(No, a, e);
    }
    function Nf(e) {
      aa(No, e), aa(Sp, e), aa(Zh, e);
    }
    function hg() {
      var e = Jh(No.current);
      return e;
    }
    function CC(e) {
      Jh(Zh.current);
      var t = Jh(No.current), a = XT(t, e.type);
      t !== a && (ia(Sp, e, e), ia(No, a, e));
    }
    function mg(e) {
      Sp.current === e && (aa(No, e), aa(Sp, e));
    }
    var zw = 0, RC = 1, TC = 1, Ep = 2, Ji = Do(zw);
    function yg(e, t) {
      return (e & t) !== 0;
    }
    function zf(e) {
      return e & RC;
    }
    function gg(e, t) {
      return e & RC | t;
    }
    function Uw(e, t) {
      return e | t;
    }
    function zo(e, t) {
      ia(Ji, t, e);
    }
    function Uf(e) {
      aa(Ji, e);
    }
    function Aw(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function em(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === Ce) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || VE(i) || Ay(i))
              return t;
          }
        } else if (t.tag === $t && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var u = (t.flags & ut) !== _e;
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
    var Ba = (
      /*   */
      0
    ), fr = (
      /* */
      1
    ), Al = (
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
    function Fw(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var ce = st.ReactCurrentDispatcher, Cp = st.ReactCurrentBatchConfig, Cg, Af;
    Cg = /* @__PURE__ */ new Set();
    var qs = V, qt = null, pr = null, vr = null, tm = !1, Rp = !1, Tp = 0, jw = 0, Hw = 25, P = null, _i = null, Uo = -1, Rg = !1;
    function Ht() {
      {
        var e = P;
        _i === null ? _i = [e] : _i.push(e);
      }
    }
    function ee() {
      {
        var e = P;
        _i !== null && (Uo++, _i[Uo] !== e && Vw(e));
      }
    }
    function Ff(e) {
      e != null && !Ze(e) && S("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", P, typeof e);
    }
    function Vw(e) {
      {
        var t = Be(qt);
        if (!Cg.has(t) && (Cg.add(t), _i !== null)) {
          for (var a = "", i = 30, u = 0; u <= Uo; u++) {
            for (var s = _i[u], f = u === Uo ? e : s, p = u + 1 + ". " + s; p.length < i; )
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
    function la() {
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
        return S("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", P), !1;
      e.length !== t.length && S(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, P, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!ge(e[a], t[a]))
          return !1;
      return !0;
    }
    function jf(e, t, a, i, u, s) {
      qs = s, qt = t, _i = e !== null ? e._debugHookTypes : null, Uo = -1, Rg = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = V, e !== null && e.memoizedState !== null ? ce.current = IC : _i !== null ? ce.current = YC : ce.current = $C;
      var f = a(i, u);
      if (Rp) {
        var p = 0;
        do {
          if (Rp = !1, Tp = 0, p >= Hw)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          p += 1, Rg = !1, pr = null, vr = null, t.updateQueue = null, Uo = -1, ce.current = QC, f = a(i, u);
        } while (Rp);
      }
      ce.current = vm, t._debugHookTypes = _i;
      var v = pr !== null && pr.next !== null;
      if (qs = V, qt = null, pr = null, vr = null, P = null, _i = null, Uo = -1, e !== null && (e.flags & Un) !== (t.flags & Un) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & ot) !== be && S("Internal React error: Expected static flag was missing. Please notify the React team."), tm = !1, v)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return f;
    }
    function Hf() {
      var e = Tp !== 0;
      return Tp = 0, e;
    }
    function wC(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & Kt) !== be ? t.flags &= -50333701 : t.flags &= -2053, e.lanes = _s(e.lanes, a);
    }
    function xC() {
      if (ce.current = vm, tm) {
        for (var e = qt.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        tm = !1;
      }
      qs = V, qt = null, pr = null, vr = null, _i = null, Uo = -1, P = null, jC = !1, Rp = !1, Tp = 0;
    }
    function Fl() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return vr === null ? qt.memoizedState = vr = e : vr = vr.next = e, vr;
    }
    function bi() {
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
      var i = Fl(), u;
      a !== void 0 ? u = a(t) : u = t, i.memoizedState = i.baseState = u;
      var s = {
        pending: null,
        interleaved: null,
        lanes: V,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: u
      };
      i.queue = s;
      var f = s.dispatch = Yw.bind(null, qt, s);
      return [i.memoizedState, f];
    }
    function _g(e, t, a) {
      var i = bi(), u = i.queue;
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
          var ae = j.lane;
          if (hu(qs, ae)) {
            if (U !== null) {
              var we = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: An,
                action: j.action,
                hasEagerState: j.hasEagerState,
                eagerState: j.eagerState,
                next: null
              };
              U = U.next = we;
            }
            if (j.hasEagerState)
              _ = j.eagerState;
            else {
              var bt = j.action;
              _ = e(_, bt);
            }
          } else {
            var Le = {
              lane: ae,
              action: j.action,
              hasEagerState: j.hasEagerState,
              eagerState: j.eagerState,
              next: null
            };
            U === null ? (N = U = Le, w = _) : U = U.next = Le, qt.lanes = Je(qt.lanes, ae), Yp(ae);
          }
          j = j.next;
        } while (j !== null && j !== g);
        U === null ? w = _ : U.next = N, ge(_, i.memoizedState) || Mp(), i.memoizedState = _, i.baseState = w, i.baseQueue = U, u.lastRenderedState = _;
      }
      var mt = u.interleaved;
      if (mt !== null) {
        var k = mt;
        do {
          var H = k.lane;
          qt.lanes = Je(qt.lanes, H), Yp(H), k = k.next;
        } while (k !== mt);
      } else f === null && (u.lanes = V);
      var O = u.dispatch;
      return [i.memoizedState, O];
    }
    function bg(e, t, a) {
      var i = bi(), u = i.queue;
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
        ge(p, i.memoizedState) || Mp(), i.memoizedState = p, i.baseQueue === null && (i.baseState = p), u.lastRenderedState = p;
      }
      return [p, s];
    }
    function dD(e, t, a) {
    }
    function pD(e, t, a) {
    }
    function Dg(e, t, a) {
      var i = qt, u = Fl(), s, f = Ar();
      if (f) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), Af || s !== a() && (S("The result of getServerSnapshot should be cached to avoid an infinite loop"), Af = !0);
      } else {
        if (s = t(), !Af) {
          var p = t();
          ge(s, p) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), Af = !0);
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
      return u.queue = y, lm(kC.bind(null, i, y, e), [e]), i.flags |= va, wp(fr | Fr, DC.bind(null, i, y, s, t), void 0, null), s;
    }
    function nm(e, t, a) {
      var i = qt, u = bi(), s = t();
      if (!Af) {
        var f = t();
        ge(s, f) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), Af = !0);
      }
      var p = u.memoizedState, v = !ge(p, s);
      v && (u.memoizedState = s, Mp());
      var y = u.queue;
      if (_p(kC.bind(null, i, y, e), [e]), y.getSnapshot !== t || v || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      vr !== null && vr.memoizedState.tag & fr) {
        i.flags |= va, wp(fr | Fr, DC.bind(null, i, y, s, t), void 0, null);
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
        return !ge(a, i);
      } catch {
        return !0;
      }
    }
    function LC(e) {
      var t = Pa(e, Ue);
      t !== null && gr(t, e, Ue, Bt);
    }
    function rm(e) {
      var t = Fl();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: V,
        dispatch: null,
        lastRenderedReducer: wg,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = Iw.bind(null, qt, a);
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
      var t = Fl();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function am(e) {
      var t = bi();
      return t.memoizedState;
    }
    function xp(e, t, a, i) {
      var u = Fl(), s = i === void 0 ? null : i;
      qt.flags |= e, u.memoizedState = wp(fr | t, a, void 0, s);
    }
    function im(e, t, a, i) {
      var u = bi(), s = i === void 0 ? null : i, f = void 0;
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
      return (qt.mode & Kt) !== be ? xp(yl | va | fd, Fr, e, t) : xp(va | fd, Fr, e, t);
    }
    function _p(e, t) {
      return im(va, Fr, e, t);
    }
    function Mg(e, t) {
      return xp(pt, Al, e, t);
    }
    function um(e, t) {
      return im(pt, Al, e, t);
    }
    function Ng(e, t) {
      var a = pt;
      return a |= ml, (qt.mode & Kt) !== be && (a |= Mr), xp(a, dr, e, t);
    }
    function om(e, t) {
      return im(pt, dr, e, t);
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
      var i = a != null ? a.concat([e]) : null, u = pt;
      return u |= ml, (qt.mode & Kt) !== be && (u |= Mr), xp(u, dr, MC.bind(null, t, e), i);
    }
    function sm(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return im(pt, dr, MC.bind(null, t, e), i);
    }
    function Pw(e, t) {
    }
    var cm = Pw;
    function Ug(e, t) {
      var a = Fl(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function fm(e, t) {
      var a = bi(), i = t === void 0 ? null : t, u = a.memoizedState;
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
      var a = bi(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (Tg(i, s))
          return u[0];
      }
      var f = e();
      return a.memoizedState = [f, i], f;
    }
    function Fg(e) {
      var t = Fl();
      return t.memoizedState = e, e;
    }
    function NC(e) {
      var t = bi(), a = pr, i = a.memoizedState;
      return UC(t, i, e);
    }
    function zC(e) {
      var t = bi();
      if (pr === null)
        return t.memoizedState = e, e;
      var a = pr.memoizedState;
      return UC(t, a, e);
    }
    function UC(e, t, a) {
      var i = !Od(qs);
      if (i) {
        if (!ge(a, t)) {
          var u = Md();
          qt.lanes = Je(qt.lanes, u), Yp(u), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, Mp()), e.memoizedState = a, a;
    }
    function Bw(e, t, a) {
      var i = ya();
      $n(Ds(i, Aa)), e(!0);
      var u = Cp.transition;
      Cp.transition = {};
      var s = Cp.transition;
      Cp.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if ($n(i), Cp.transition = u, u === null && s._updatedFibers) {
          var f = s._updatedFibers.size;
          f > 10 && Ne("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function jg() {
      var e = rm(!1), t = e[0], a = e[1], i = Bw.bind(null, a), u = Fl();
      return u.memoizedState = i, [t, i];
    }
    function AC() {
      var e = kg(), t = e[0], a = bi(), i = a.memoizedState;
      return [t, i];
    }
    function FC() {
      var e = Og(), t = e[0], a = bi(), i = a.memoizedState;
      return [t, i];
    }
    var jC = !1;
    function $w() {
      return jC;
    }
    function Hg() {
      var e = Fl(), t = Nm(), a = t.identifierPrefix, i;
      if (Ar()) {
        var u = lw();
        i = ":" + a + "R" + u;
        var s = Tp++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var f = jw++;
        i = ":" + a + "r" + f.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function pm() {
      var e = bi(), t = e.memoizedState;
      return t;
    }
    function Yw(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Vo(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (HC(e))
        VC(t, u);
      else {
        var s = vC(e, t, u, i);
        if (s !== null) {
          var f = Ta();
          gr(s, e, i, f), PC(s, t, i);
        }
      }
      BC(e, i);
    }
    function Iw(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Vo(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (HC(e))
        VC(t, u);
      else {
        var s = e.alternate;
        if (e.lanes === V && (s === null || s.lanes === V)) {
          var f = t.lastRenderedReducer;
          if (f !== null) {
            var p;
            p = ce.current, ce.current = el;
            try {
              var v = t.lastRenderedState, y = f(v, a);
              if (u.hasEagerState = !0, u.eagerState = y, ge(y, v)) {
                kw(e, t, u, i);
                return;
              }
            } catch {
            } finally {
              ce.current = p;
            }
          }
        }
        var g = vC(e, t, u, i);
        if (g !== null) {
          var _ = Ta();
          gr(g, e, i, _), PC(g, t, i);
        }
      }
      BC(e, i);
    }
    function HC(e) {
      var t = e.alternate;
      return e === qt || t !== null && t === qt;
    }
    function VC(e, t) {
      Rp = tm = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function PC(e, t, a) {
      if (Ld(a)) {
        var i = t.lanes;
        i = Kc(i, e.pendingLanes);
        var u = Je(i, a);
        t.lanes = u, bs(e, u);
      }
    }
    function BC(e, t, a) {
      ys(e, t);
    }
    var vm = {
      readContext: nr,
      useCallback: la,
      useContext: la,
      useEffect: la,
      useImperativeHandle: la,
      useInsertionEffect: la,
      useLayoutEffect: la,
      useMemo: la,
      useReducer: la,
      useRef: la,
      useState: la,
      useDebugValue: la,
      useDeferredValue: la,
      useTransition: la,
      useMutableSource: la,
      useSyncExternalStore: la,
      useId: la,
      unstable_isNewReconciler: me
    }, $C = null, YC = null, IC = null, QC = null, jl = null, el = null, hm = null;
    {
      var Vg = function() {
        S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, Qe = function() {
        S("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      $C = {
        readContext: function(e) {
          return nr(e);
        },
        useCallback: function(e, t) {
          return P = "useCallback", Ht(), Ff(t), Ug(e, t);
        },
        useContext: function(e) {
          return P = "useContext", Ht(), nr(e);
        },
        useEffect: function(e, t) {
          return P = "useEffect", Ht(), Ff(t), lm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return P = "useImperativeHandle", Ht(), Ff(a), zg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return P = "useInsertionEffect", Ht(), Ff(t), Mg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return P = "useLayoutEffect", Ht(), Ff(t), Ng(e, t);
        },
        useMemo: function(e, t) {
          P = "useMemo", Ht(), Ff(t);
          var a = ce.current;
          ce.current = jl;
          try {
            return Ag(e, t);
          } finally {
            ce.current = a;
          }
        },
        useReducer: function(e, t, a) {
          P = "useReducer", Ht();
          var i = ce.current;
          ce.current = jl;
          try {
            return xg(e, t, a);
          } finally {
            ce.current = i;
          }
        },
        useRef: function(e) {
          return P = "useRef", Ht(), Lg(e);
        },
        useState: function(e) {
          P = "useState", Ht();
          var t = ce.current;
          ce.current = jl;
          try {
            return rm(e);
          } finally {
            ce.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return P = "useDebugValue", Ht(), void 0;
        },
        useDeferredValue: function(e) {
          return P = "useDeferredValue", Ht(), Fg(e);
        },
        useTransition: function() {
          return P = "useTransition", Ht(), jg();
        },
        useMutableSource: function(e, t, a) {
          return P = "useMutableSource", Ht(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return P = "useSyncExternalStore", Ht(), Dg(e, t, a);
        },
        useId: function() {
          return P = "useId", Ht(), Hg();
        },
        unstable_isNewReconciler: me
      }, YC = {
        readContext: function(e) {
          return nr(e);
        },
        useCallback: function(e, t) {
          return P = "useCallback", ee(), Ug(e, t);
        },
        useContext: function(e) {
          return P = "useContext", ee(), nr(e);
        },
        useEffect: function(e, t) {
          return P = "useEffect", ee(), lm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return P = "useImperativeHandle", ee(), zg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return P = "useInsertionEffect", ee(), Mg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return P = "useLayoutEffect", ee(), Ng(e, t);
        },
        useMemo: function(e, t) {
          P = "useMemo", ee();
          var a = ce.current;
          ce.current = jl;
          try {
            return Ag(e, t);
          } finally {
            ce.current = a;
          }
        },
        useReducer: function(e, t, a) {
          P = "useReducer", ee();
          var i = ce.current;
          ce.current = jl;
          try {
            return xg(e, t, a);
          } finally {
            ce.current = i;
          }
        },
        useRef: function(e) {
          return P = "useRef", ee(), Lg(e);
        },
        useState: function(e) {
          P = "useState", ee();
          var t = ce.current;
          ce.current = jl;
          try {
            return rm(e);
          } finally {
            ce.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return P = "useDebugValue", ee(), void 0;
        },
        useDeferredValue: function(e) {
          return P = "useDeferredValue", ee(), Fg(e);
        },
        useTransition: function() {
          return P = "useTransition", ee(), jg();
        },
        useMutableSource: function(e, t, a) {
          return P = "useMutableSource", ee(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return P = "useSyncExternalStore", ee(), Dg(e, t, a);
        },
        useId: function() {
          return P = "useId", ee(), Hg();
        },
        unstable_isNewReconciler: me
      }, IC = {
        readContext: function(e) {
          return nr(e);
        },
        useCallback: function(e, t) {
          return P = "useCallback", ee(), fm(e, t);
        },
        useContext: function(e) {
          return P = "useContext", ee(), nr(e);
        },
        useEffect: function(e, t) {
          return P = "useEffect", ee(), _p(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return P = "useImperativeHandle", ee(), sm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return P = "useInsertionEffect", ee(), um(e, t);
        },
        useLayoutEffect: function(e, t) {
          return P = "useLayoutEffect", ee(), om(e, t);
        },
        useMemo: function(e, t) {
          P = "useMemo", ee();
          var a = ce.current;
          ce.current = el;
          try {
            return dm(e, t);
          } finally {
            ce.current = a;
          }
        },
        useReducer: function(e, t, a) {
          P = "useReducer", ee();
          var i = ce.current;
          ce.current = el;
          try {
            return _g(e, t, a);
          } finally {
            ce.current = i;
          }
        },
        useRef: function(e) {
          return P = "useRef", ee(), am();
        },
        useState: function(e) {
          P = "useState", ee();
          var t = ce.current;
          ce.current = el;
          try {
            return kg(e);
          } finally {
            ce.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return P = "useDebugValue", ee(), cm();
        },
        useDeferredValue: function(e) {
          return P = "useDeferredValue", ee(), NC(e);
        },
        useTransition: function() {
          return P = "useTransition", ee(), AC();
        },
        useMutableSource: function(e, t, a) {
          return P = "useMutableSource", ee(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return P = "useSyncExternalStore", ee(), nm(e, t);
        },
        useId: function() {
          return P = "useId", ee(), pm();
        },
        unstable_isNewReconciler: me
      }, QC = {
        readContext: function(e) {
          return nr(e);
        },
        useCallback: function(e, t) {
          return P = "useCallback", ee(), fm(e, t);
        },
        useContext: function(e) {
          return P = "useContext", ee(), nr(e);
        },
        useEffect: function(e, t) {
          return P = "useEffect", ee(), _p(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return P = "useImperativeHandle", ee(), sm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return P = "useInsertionEffect", ee(), um(e, t);
        },
        useLayoutEffect: function(e, t) {
          return P = "useLayoutEffect", ee(), om(e, t);
        },
        useMemo: function(e, t) {
          P = "useMemo", ee();
          var a = ce.current;
          ce.current = hm;
          try {
            return dm(e, t);
          } finally {
            ce.current = a;
          }
        },
        useReducer: function(e, t, a) {
          P = "useReducer", ee();
          var i = ce.current;
          ce.current = hm;
          try {
            return bg(e, t, a);
          } finally {
            ce.current = i;
          }
        },
        useRef: function(e) {
          return P = "useRef", ee(), am();
        },
        useState: function(e) {
          P = "useState", ee();
          var t = ce.current;
          ce.current = hm;
          try {
            return Og(e);
          } finally {
            ce.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return P = "useDebugValue", ee(), cm();
        },
        useDeferredValue: function(e) {
          return P = "useDeferredValue", ee(), zC(e);
        },
        useTransition: function() {
          return P = "useTransition", ee(), FC();
        },
        useMutableSource: function(e, t, a) {
          return P = "useMutableSource", ee(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return P = "useSyncExternalStore", ee(), nm(e, t);
        },
        useId: function() {
          return P = "useId", ee(), pm();
        },
        unstable_isNewReconciler: me
      }, jl = {
        readContext: function(e) {
          return Vg(), nr(e);
        },
        useCallback: function(e, t) {
          return P = "useCallback", Qe(), Ht(), Ug(e, t);
        },
        useContext: function(e) {
          return P = "useContext", Qe(), Ht(), nr(e);
        },
        useEffect: function(e, t) {
          return P = "useEffect", Qe(), Ht(), lm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return P = "useImperativeHandle", Qe(), Ht(), zg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return P = "useInsertionEffect", Qe(), Ht(), Mg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return P = "useLayoutEffect", Qe(), Ht(), Ng(e, t);
        },
        useMemo: function(e, t) {
          P = "useMemo", Qe(), Ht();
          var a = ce.current;
          ce.current = jl;
          try {
            return Ag(e, t);
          } finally {
            ce.current = a;
          }
        },
        useReducer: function(e, t, a) {
          P = "useReducer", Qe(), Ht();
          var i = ce.current;
          ce.current = jl;
          try {
            return xg(e, t, a);
          } finally {
            ce.current = i;
          }
        },
        useRef: function(e) {
          return P = "useRef", Qe(), Ht(), Lg(e);
        },
        useState: function(e) {
          P = "useState", Qe(), Ht();
          var t = ce.current;
          ce.current = jl;
          try {
            return rm(e);
          } finally {
            ce.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return P = "useDebugValue", Qe(), Ht(), void 0;
        },
        useDeferredValue: function(e) {
          return P = "useDeferredValue", Qe(), Ht(), Fg(e);
        },
        useTransition: function() {
          return P = "useTransition", Qe(), Ht(), jg();
        },
        useMutableSource: function(e, t, a) {
          return P = "useMutableSource", Qe(), Ht(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return P = "useSyncExternalStore", Qe(), Ht(), Dg(e, t, a);
        },
        useId: function() {
          return P = "useId", Qe(), Ht(), Hg();
        },
        unstable_isNewReconciler: me
      }, el = {
        readContext: function(e) {
          return Vg(), nr(e);
        },
        useCallback: function(e, t) {
          return P = "useCallback", Qe(), ee(), fm(e, t);
        },
        useContext: function(e) {
          return P = "useContext", Qe(), ee(), nr(e);
        },
        useEffect: function(e, t) {
          return P = "useEffect", Qe(), ee(), _p(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return P = "useImperativeHandle", Qe(), ee(), sm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return P = "useInsertionEffect", Qe(), ee(), um(e, t);
        },
        useLayoutEffect: function(e, t) {
          return P = "useLayoutEffect", Qe(), ee(), om(e, t);
        },
        useMemo: function(e, t) {
          P = "useMemo", Qe(), ee();
          var a = ce.current;
          ce.current = el;
          try {
            return dm(e, t);
          } finally {
            ce.current = a;
          }
        },
        useReducer: function(e, t, a) {
          P = "useReducer", Qe(), ee();
          var i = ce.current;
          ce.current = el;
          try {
            return _g(e, t, a);
          } finally {
            ce.current = i;
          }
        },
        useRef: function(e) {
          return P = "useRef", Qe(), ee(), am();
        },
        useState: function(e) {
          P = "useState", Qe(), ee();
          var t = ce.current;
          ce.current = el;
          try {
            return kg(e);
          } finally {
            ce.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return P = "useDebugValue", Qe(), ee(), cm();
        },
        useDeferredValue: function(e) {
          return P = "useDeferredValue", Qe(), ee(), NC(e);
        },
        useTransition: function() {
          return P = "useTransition", Qe(), ee(), AC();
        },
        useMutableSource: function(e, t, a) {
          return P = "useMutableSource", Qe(), ee(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return P = "useSyncExternalStore", Qe(), ee(), nm(e, t);
        },
        useId: function() {
          return P = "useId", Qe(), ee(), pm();
        },
        unstable_isNewReconciler: me
      }, hm = {
        readContext: function(e) {
          return Vg(), nr(e);
        },
        useCallback: function(e, t) {
          return P = "useCallback", Qe(), ee(), fm(e, t);
        },
        useContext: function(e) {
          return P = "useContext", Qe(), ee(), nr(e);
        },
        useEffect: function(e, t) {
          return P = "useEffect", Qe(), ee(), _p(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return P = "useImperativeHandle", Qe(), ee(), sm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return P = "useInsertionEffect", Qe(), ee(), um(e, t);
        },
        useLayoutEffect: function(e, t) {
          return P = "useLayoutEffect", Qe(), ee(), om(e, t);
        },
        useMemo: function(e, t) {
          P = "useMemo", Qe(), ee();
          var a = ce.current;
          ce.current = el;
          try {
            return dm(e, t);
          } finally {
            ce.current = a;
          }
        },
        useReducer: function(e, t, a) {
          P = "useReducer", Qe(), ee();
          var i = ce.current;
          ce.current = el;
          try {
            return bg(e, t, a);
          } finally {
            ce.current = i;
          }
        },
        useRef: function(e) {
          return P = "useRef", Qe(), ee(), am();
        },
        useState: function(e) {
          P = "useState", Qe(), ee();
          var t = ce.current;
          ce.current = el;
          try {
            return Og(e);
          } finally {
            ce.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return P = "useDebugValue", Qe(), ee(), cm();
        },
        useDeferredValue: function(e) {
          return P = "useDeferredValue", Qe(), ee(), zC(e);
        },
        useTransition: function() {
          return P = "useTransition", Qe(), ee(), FC();
        },
        useMutableSource: function(e, t, a) {
          return P = "useMutableSource", Qe(), ee(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return P = "useSyncExternalStore", Qe(), ee(), nm(e, t);
        },
        useId: function() {
          return P = "useId", Qe(), ee(), pm();
        },
        unstable_isNewReconciler: me
      };
    }
    var Ao = A.unstable_now, WC = 0, mm = -1, bp = -1, ym = -1, Pg = !1, gm = !1;
    function GC() {
      return Pg;
    }
    function Qw() {
      gm = !0;
    }
    function Ww() {
      Pg = !1, gm = !1;
    }
    function Gw() {
      Pg = gm, gm = !1;
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
    function Hl(e) {
      if (mm >= 0) {
        var t = Ao() - mm;
        mm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case J:
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
            case J:
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
    function tl(e, t) {
      if (e && e.defaultProps) {
        var a = qe({}, t), i = e.defaultProps;
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
        if (e.mode & Xe) {
          Pt(!0);
          try {
            s = a(i, u);
          } finally {
            Pt(!1);
          }
        }
        ZC(t, s);
      }
      var f = s == null ? u : qe({}, u, s);
      if (e.memoizedState = f, e.lanes === V) {
        var p = e.updateQueue;
        p.baseState = f;
      }
    }
    var nS = {
      isMounted: dd,
      enqueueSetState: function(e, t, a) {
        var i = ro(e), u = Ta(), s = Vo(i), f = Lu(u, s);
        f.payload = t, a != null && (Em(a, "setState"), f.callback = a);
        var p = Mo(i, f, s);
        p !== null && (gr(p, i, s, u), Kh(p, i, s)), ys(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = ro(e), u = Ta(), s = Vo(i), f = Lu(u, s);
        f.tag = mC, f.payload = t, a != null && (Em(a, "replaceState"), f.callback = a);
        var p = Mo(i, f, s);
        p !== null && (gr(p, i, s, u), Kh(p, i, s)), ys(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = ro(e), i = Ta(), u = Vo(a), s = Lu(i, u);
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
          if (e.mode & Xe) {
            Pt(!0);
            try {
              v = p.shouldComponentUpdate(i, s, f);
            } finally {
              Pt(!1);
            }
          }
          v === void 0 && S("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", xt(t) || "Component");
        }
        return v;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !ke(a, i) || !ke(u, s) : !0;
    }
    function Kw(e, t, a) {
      var i = e.stateNode;
      {
        var u = xt(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? S("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", u) : S("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", u)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && S("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", u), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && S("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", u), i.propTypes && S("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", u), i.contextType && S("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", u), t.childContextTypes && !Dp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & Xe) === be && (Dp.add(t), S(`%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), t.contextTypes && !Dp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & Xe) === be && (Dp.add(t), S(`%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), i.contextTypes && S("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", u), t.contextType && t.contextTypes && !Jg.has(t) && (Jg.add(t), S("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", u)), typeof i.componentShouldUpdate == "function" && S("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", u), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && S("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", xt(t) || "A pure component"), typeof i.componentDidUnmount == "function" && S("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", u), typeof i.componentDidReceiveProps == "function" && S("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", u), typeof i.componentWillRecieveProps == "function" && S("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", u), typeof i.UNSAFE_componentWillRecieveProps == "function" && S("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", u);
        var f = i.props !== a;
        i.props !== void 0 && f && S("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", u, u), i.defaultProps && S("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", u, u), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !Kg.has(t) && (Kg.add(t), S("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", xt(t))), typeof i.getDerivedStateFromProps == "function" && S("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof i.getDerivedStateFromError == "function" && S("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof t.getSnapshotBeforeUpdate == "function" && S("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", u);
        var p = i.state;
        p && (typeof p != "object" || Ze(p)) && S("%s.state: must be set to an object or null", u), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && S("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", u);
      }
    }
    function tR(e, t) {
      t.updater = nS, e.stateNode = t, cs(t, e), t._reactInternalInstance = Qg;
    }
    function nR(e, t, a) {
      var i = !1, u = ii, s = ii, f = t.contextType;
      if ("contextType" in t) {
        var p = (
          // Allow null for conditional declaration
          f === null || f !== void 0 && f.$$typeof === R && f._context === void 0
        );
        if (!p && !eS.has(t)) {
          eS.add(t);
          var v = "";
          f === void 0 ? v = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? v = " However, it is set to a " + typeof f + "." : f.$$typeof === Ni ? v = " Did you accidentally pass the Context.Provider instead?" : f._context !== void 0 ? v = " Did you accidentally pass the Context.Consumer instead?" : v = " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", S("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", xt(t) || "Component", v);
        }
      }
      if (typeof f == "object" && f !== null)
        s = nr(f);
      else {
        u = xf(e, t, !0);
        var y = t.contextTypes;
        i = y != null, s = i ? _f(e, u) : ii;
      }
      var g = new t(a, s);
      if (e.mode & Xe) {
        Pt(!0);
        try {
          g = new t(a, s);
        } finally {
          Pt(!1);
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
            var ae = xt(t) || "Component", Le = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            qg.has(ae) || (qg.add(ae), S(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, ae, Le, N !== null ? `
  ` + N : "", U !== null ? `
  ` + U : "", j !== null ? `
  ` + j : ""));
          }
        }
      }
      return i && IE(e, u, s), g;
    }
    function qw(e, t) {
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
      Kw(e, t, a);
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
        e.mode & Xe && Zi.recordLegacyContextWarning(e, u), Zi.recordUnsafeLifecycleWarnings(e, u);
      }
      u.state = e.memoizedState;
      var v = t.getDerivedStateFromProps;
      if (typeof v == "function" && (tS(e, t, v, a), u.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof u.getSnapshotBeforeUpdate != "function" && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (qw(e, u), qh(e, a, u, i), u.state = e.memoizedState), typeof u.componentDidMount == "function") {
        var y = pt;
        y |= ml, (e.mode & Kt) !== be && (y |= Mr), e.flags |= y;
      }
    }
    function Xw(e, t, a, i) {
      var u = e.stateNode, s = e.memoizedProps;
      u.props = s;
      var f = u.context, p = t.contextType, v = ii;
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
          var U = pt;
          U |= ml, (e.mode & Kt) !== be && (U |= Mr), e.flags |= U;
        }
        return !1;
      }
      typeof g == "function" && (tS(e, t, g, a), N = e.memoizedState);
      var j = Xh() || eR(e, t, s, a, w, N, v);
      if (j) {
        if (!_ && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function") {
          var ae = pt;
          ae |= ml, (e.mode & Kt) !== be && (ae |= Mr), e.flags |= ae;
        }
      } else {
        if (typeof u.componentDidMount == "function") {
          var Le = pt;
          Le |= ml, (e.mode & Kt) !== be && (Le |= Mr), e.flags |= Le;
        }
        e.memoizedProps = a, e.memoizedState = N;
      }
      return u.props = a, u.state = N, u.context = v, j;
    }
    function Zw(e, t, a, i, u) {
      var s = t.stateNode;
      yC(e, t);
      var f = t.memoizedProps, p = t.type === t.elementType ? f : tl(t.type, f);
      s.props = p;
      var v = t.pendingProps, y = s.context, g = a.contextType, _ = ii;
      if (typeof g == "object" && g !== null)
        _ = nr(g);
      else {
        var w = xf(t, a, !0);
        _ = _f(t, w);
      }
      var N = a.getDerivedStateFromProps, U = typeof N == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !U && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (f !== v || y !== _) && rR(t, s, i, _), gC();
      var j = t.memoizedState, ae = s.state = j;
      if (qh(t, i, s, u), ae = t.memoizedState, f === v && j === ae && !Lh() && !Xh())
        return typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || j !== e.memoizedState) && (t.flags |= pt), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || j !== e.memoizedState) && (t.flags |= Na), !1;
      typeof N == "function" && (tS(t, a, N, i), ae = t.memoizedState);
      var Le = Xh() || eR(t, a, p, i, j, ae, _) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      re;
      return Le ? (!U && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, ae, _), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, ae, _)), typeof s.componentDidUpdate == "function" && (t.flags |= pt), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= Na)) : (typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || j !== e.memoizedState) && (t.flags |= pt), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || j !== e.memoizedState) && (t.flags |= Na), t.memoizedProps = i, t.memoizedState = ae), s.props = i, s.state = ae, s.context = _, Le;
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
    function Jw(e, t) {
      return !0;
    }
    function iS(e, t) {
      try {
        var a = Jw(e, t);
        if (a === !1)
          return;
        var i = t.value, u = t.source, s = t.stack, f = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === fe)
            return;
          console.error(i);
        }
        var p = u ? Be(u) : null, v = p ? "The above error occurred in the <" + p + "> component:" : "The above error occurred in one of your React components:", y;
        if (e.tag === J)
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
    var ex = typeof WeakMap == "function" ? WeakMap : Map;
    function aR(e, t, a) {
      var i = Lu(Bt, a);
      i.tag = cg, i.payload = {
        element: null
      };
      var u = t.value;
      return i.callback = function() {
        Q_(u), iS(e, t);
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
        h0(e), iS(e, t), typeof u != "function" && Y_(this);
        var v = t.value, y = t.stack;
        this.componentDidCatch(v, {
          componentStack: y !== null ? y : ""
        }), typeof u != "function" && (ta(e.lanes, Ue) || S("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", Be(e) || "Unknown"));
      }), i;
    }
    function iR(e, t, a) {
      var i = e.pingCache, u;
      if (i === null ? (i = e.pingCache = new ex(), u = /* @__PURE__ */ new Set(), i.set(t, u)) : (u = i.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), i.set(t, u))), !u.has(a)) {
        u.add(a);
        var s = W_.bind(null, e, t, a);
        xr && Ip(e, a), t.then(s, s);
      }
    }
    function tx(e, t, a, i) {
      var u = e.updateQueue;
      if (u === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        u.add(a);
    }
    function nx(e, t) {
      var a = e.tag;
      if ((e.mode & ot) === be && (a === Te || a === ze || a === Ve)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function lR(e) {
      var t = e;
      do {
        if (t.tag === Ce && Aw(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function uR(e, t, a, i, u) {
      if ((e.mode & ot) === be) {
        if (e === t)
          e.flags |= za;
        else {
          if (e.flags |= ut, a.flags |= ei, a.flags &= -52805, a.tag === fe) {
            var s = a.alternate;
            if (s === null)
              a.tag = Mt;
            else {
              var f = Lu(Bt, Ue);
              f.tag = Qh, Mo(a, f, Ue);
            }
          }
          a.lanes = Je(a.lanes, Ue);
        }
        return e;
      }
      return e.flags |= za, e.lanes = u, e;
    }
    function rx(e, t, a, i, u) {
      if (a.flags |= lu, xr && Ip(e, u), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        nx(a), Ar() && a.mode & ot && ZE();
        var f = lR(t);
        if (f !== null) {
          f.flags &= -257, uR(f, t, a, e, u), f.mode & ot && iR(e, s, u), tx(f, e, s);
          return;
        } else {
          if (!kd(u)) {
            iR(e, s, u), HS();
            return;
          }
          var p = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = p;
        }
      } else if (Ar() && a.mode & ot) {
        ZE();
        var v = lR(t);
        if (v !== null) {
          (v.flags & za) === _e && (v.flags |= yn), uR(v, t, a, e, u), Zy(Xs(i, a));
          return;
        }
      }
      i = Xs(i, a), A_(i);
      var y = t;
      do {
        switch (y.tag) {
          case J: {
            var g = i;
            y.flags |= za;
            var _ = Jn(u);
            y.lanes = Je(y.lanes, _);
            var w = aR(y, g, _);
            pg(y, w);
            return;
          }
          case fe:
            var N = i, U = y.type, j = y.stateNode;
            if ((y.flags & ut) === _e && (typeof U.getDerivedStateFromError == "function" || j !== null && typeof j.componentDidCatch == "function" && !l0(j))) {
              y.flags |= za;
              var ae = Jn(u);
              y.lanes = Je(y.lanes, ae);
              var Le = lS(y, N, ae);
              pg(y, Le);
              return;
            }
            break;
        }
        y = y.return;
      } while (y !== null);
    }
    function ax() {
      return null;
    }
    var kp = st.ReactCurrentOwner, nl = !1, uS, Op, oS, sS, cS, Zs, fS, Cm, Lp;
    uS = {}, Op = {}, oS = {}, sS = {}, cS = {}, Zs = !1, fS = {}, Cm = {}, Lp = {};
    function Ca(e, t, a, i) {
      e === null ? t.child = cC(t, null, a, i) : t.child = Of(t, e.child, a, i);
    }
    function ix(e, t, a, i) {
      t.child = Of(t, e.child, null, i), t.child = Of(t, null, a, i);
    }
    function oR(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && qi(
          s,
          i,
          // Resolved props
          "prop",
          xt(a)
        );
      }
      var f = a.render, p = t.ref, v, y;
      Mf(t, u), Ua(t);
      {
        if (kp.current = t, Da(!0), v = jf(e, t, f, i, p, u), y = Hf(), t.mode & Xe) {
          Pt(!0);
          try {
            v = jf(e, t, f, i, p, u), y = Hf();
          } finally {
            Pt(!1);
          }
        }
        Da(!1);
      }
      return Cl(), e !== null && !nl ? (wC(e, t, u), Mu(e, t, u)) : (Ar() && y && Qy(t), t.flags |= Yi, Ca(e, t, v, u), t.child);
    }
    function sR(e, t, a, i, u) {
      if (e === null) {
        var s = a.type;
        if (cb(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var f = s;
          return f = Wf(s), t.tag = Ve, t.type = f, vS(t, s), cR(e, t, f, i, u);
        }
        {
          var p = s.propTypes;
          if (p && qi(
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
        _ && qi(
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
        if (j = j !== null ? j : ke, j(U, i) && e.ref === t.ref)
          return Mu(e, t, u);
      }
      t.flags |= Yi;
      var ae = rc(w, i);
      return ae.ref = t.ref, ae.return = t, t.child = ae, ae;
    }
    function cR(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === Ie) {
          var f = s, p = f._payload, v = f._init;
          try {
            s = v(p);
          } catch {
            s = null;
          }
          var y = s && s.propTypes;
          y && qi(
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
        if (ke(g, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (nl = !1, t.pendingProps = i = g, ES(e, u))
            (e.flags & ei) !== _e && (nl = !0);
          else return t.lanes = e.lanes, Mu(e, t, u);
      }
      return dS(e, t, a, i, u);
    }
    function fR(e, t, a) {
      var i = t.pendingProps, u = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || b)
        if ((t.mode & ot) === be) {
          var f = {
            baseLanes: V,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = f, zm(t, a);
        } else if (ta(a, ma)) {
          var _ = {
            baseLanes: V,
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
            v = Je(y, a);
          } else
            v = a;
          t.lanes = t.childLanes = ma;
          var g = {
            baseLanes: v,
            cachePool: p,
            transitions: null
          };
          return t.memoizedState = g, t.updateQueue = null, zm(t, v), null;
        }
      else {
        var N;
        s !== null ? (N = Je(s.baseLanes, a), t.memoizedState = null) : N = a, zm(t, N);
      }
      return Ca(e, t, u, a), t.child;
    }
    function lx(e, t, a) {
      var i = t.pendingProps;
      return Ca(e, t, i, a), t.child;
    }
    function ux(e, t, a) {
      var i = t.pendingProps.children;
      return Ca(e, t, i, a), t.child;
    }
    function ox(e, t, a) {
      {
        t.flags |= pt;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var u = t.pendingProps, s = u.children;
      return Ca(e, t, s, a), t.child;
    }
    function dR(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= Nn, t.flags |= ds);
    }
    function dS(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && qi(
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
      Mf(t, u), Ua(t);
      {
        if (kp.current = t, Da(!0), v = jf(e, t, a, i, f, u), y = Hf(), t.mode & Xe) {
          Pt(!0);
          try {
            v = jf(e, t, a, i, f, u), y = Hf();
          } finally {
            Pt(!1);
          }
        }
        Da(!1);
      }
      return Cl(), e !== null && !nl ? (wC(e, t, u), Mu(e, t, u)) : (Ar() && y && Qy(t), t.flags |= Yi, Ca(e, t, v, u), t.child);
    }
    function pR(e, t, a, i, u) {
      {
        switch (xb(t)) {
          case !1: {
            var s = t.stateNode, f = t.type, p = new f(t.memoizedProps, s.context), v = p.state;
            s.updater.enqueueSetState(s, v, null);
            break;
          }
          case !0: {
            t.flags |= ut, t.flags |= za;
            var y = new Error("Simulated error coming from DevTools"), g = Jn(u);
            t.lanes = Je(t.lanes, g);
            var _ = lS(t, Xs(y, t), g);
            pg(t, _);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var w = a.propTypes;
          w && qi(
            w,
            i,
            // Resolved props
            "prop",
            xt(a)
          );
        }
      }
      var N;
      Ul(a) ? (N = !0, Nh(t)) : N = !1, Mf(t, u);
      var U = t.stateNode, j;
      U === null ? (Tm(e, t), nR(t, a, i), rS(t, a, i, u), j = !0) : e === null ? j = Xw(t, a, i, u) : j = Zw(e, t, a, i, u);
      var ae = pS(e, t, a, j, N, u);
      {
        var Le = t.stateNode;
        j && Le.props !== i && (Zs || S("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", Be(t) || "a component"), Zs = !0);
      }
      return ae;
    }
    function pS(e, t, a, i, u, s) {
      dR(e, t);
      var f = (t.flags & ut) !== _e;
      if (!i && !f)
        return u && GE(t, a, !1), Mu(e, t, s);
      var p = t.stateNode;
      kp.current = t;
      var v;
      if (f && typeof a.getDerivedStateFromError != "function")
        v = null, XC();
      else {
        Ua(t);
        {
          if (Da(!0), v = p.render(), t.mode & Xe) {
            Pt(!0);
            try {
              p.render();
            } finally {
              Pt(!1);
            }
          }
          Da(!1);
        }
        Cl();
      }
      return t.flags |= Yi, e !== null && f ? ix(e, t, v, s) : Ca(e, t, v, s), t.memoizedState = p.state, u && GE(t, a, !0), t.child;
    }
    function vR(e) {
      var t = e.stateNode;
      t.pendingContext ? QE(e, t.pendingContext, t.pendingContext !== t.context) : t.context && QE(e, t.context, !1), vg(e, t.containerInfo);
    }
    function sx(e, t, a) {
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
          dw(t);
          var w = cC(t, null, p, a);
          t.child = w;
          for (var N = w; N; )
            N.flags = N.flags & -3 | zn, N = N.sibling;
        }
      } else {
        if (kf(), p === s)
          return Mu(e, t, a);
        Ca(e, t, p, a);
      }
      return t.child;
    }
    function hR(e, t, a, i, u) {
      return kf(), Zy(u), t.flags |= yn, Ca(e, t, a, i), t.child;
    }
    function cx(e, t, a) {
      CC(t), e === null && Xy(t);
      var i = t.type, u = t.pendingProps, s = e !== null ? e.memoizedProps : null, f = u.children, p = My(i, u);
      return p ? f = null : s !== null && My(i, s) && (t.flags |= Gt), dR(e, t), Ca(e, t, f, a), t.child;
    }
    function fx(e, t) {
      return e === null && Xy(t), null;
    }
    function dx(e, t, a, i) {
      Tm(e, t);
      var u = t.pendingProps, s = a, f = s._payload, p = s._init, v = p(f);
      t.type = v;
      var y = t.tag = fb(v), g = tl(v, u), _;
      switch (y) {
        case Te:
          return vS(t, v), t.type = v = Wf(v), _ = dS(null, t, v, g, i), _;
        case fe:
          return t.type = v = YS(v), _ = pR(null, t, v, g, i), _;
        case ze:
          return t.type = v = IS(v), _ = oR(null, t, v, g, i), _;
        case ft: {
          if (t.type !== t.elementType) {
            var w = v.propTypes;
            w && qi(
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
            tl(v.type, g),
            // The inner type can have defaults too
            i
          ), _;
        }
      }
      var N = "";
      throw v !== null && typeof v == "object" && v.$$typeof === Ie && (N = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + v + ". " + ("Lazy element type must resolve to a class or function." + N));
    }
    function px(e, t, a, i, u) {
      Tm(e, t), t.tag = fe;
      var s;
      return Ul(a) ? (s = !0, Nh(t)) : s = !1, Mf(t, u), nR(t, a, i), rS(t, a, i, u), pS(null, t, a, !0, s, u);
    }
    function vx(e, t, a, i) {
      Tm(e, t);
      var u = t.pendingProps, s;
      {
        var f = xf(t, a, !1);
        s = _f(t, f);
      }
      Mf(t, i);
      var p, v;
      Ua(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var y = xt(a) || "Unknown";
          uS[y] || (S("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", y, y), uS[y] = !0);
        }
        t.mode & Xe && Zi.recordLegacyContextWarning(t, null), Da(!0), kp.current = t, p = jf(null, t, a, u, s, i), v = Hf(), Da(!1);
      }
      if (Cl(), t.flags |= Yi, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0) {
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
        t.tag = fe, t.memoizedState = null, t.updateQueue = null;
        var w = !1;
        return Ul(a) ? (w = !0, Nh(t)) : w = !1, t.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, dg(t), tR(t, p), rS(t, a, u, i), pS(null, t, a, !0, w, i);
      } else {
        if (t.tag = Te, t.mode & Xe) {
          Pt(!0);
          try {
            p = jf(null, t, a, u, s, i), v = Hf();
          } finally {
            Pt(!1);
          }
        }
        return Ar() && v && Qy(t), Ca(null, t, p, i), vS(t, a), t.child;
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
        cachePool: ax(),
        transitions: null
      };
    }
    function hx(e, t) {
      var a = null;
      return {
        baseLanes: Je(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function mx(e, t, a, i) {
      if (t !== null) {
        var u = t.memoizedState;
        if (u === null)
          return !1;
      }
      return yg(e, Ep);
    }
    function yx(e, t) {
      return _s(e.childLanes, t);
    }
    function mR(e, t, a) {
      var i = t.pendingProps;
      _b(t) && (t.flags |= ut);
      var u = Ji.current, s = !1, f = (t.flags & ut) !== _e;
      if (f || mx(u, e) ? (s = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (u = Uw(u, TC)), u = zf(u), zo(t, u), e === null) {
        Xy(t);
        var p = t.memoizedState;
        if (p !== null) {
          var v = p.dehydrated;
          if (v !== null)
            return Rx(t, v);
        }
        var y = i.children, g = i.fallback;
        if (s) {
          var _ = gx(t, y, g, a), w = t.child;
          return w.memoizedState = mS(a), t.memoizedState = hS, _;
        } else
          return yS(t, y);
      } else {
        var N = e.memoizedState;
        if (N !== null) {
          var U = N.dehydrated;
          if (U !== null)
            return Tx(e, t, f, i, U, N, a);
        }
        if (s) {
          var j = i.fallback, ae = i.children, Le = Ex(e, t, ae, j, a), we = t.child, bt = e.child.memoizedState;
          return we.memoizedState = bt === null ? mS(a) : hx(bt, a), we.childLanes = yx(e, a), t.memoizedState = hS, Le;
        } else {
          var mt = i.children, k = Sx(e, t, mt, a);
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
    function gx(e, t, a, i) {
      var u = e.mode, s = e.child, f = {
        mode: "hidden",
        children: t
      }, p, v;
      return (u & ot) === be && s !== null ? (p = s, p.childLanes = V, p.pendingProps = f, e.mode & Et && (p.actualDuration = 0, p.actualStartTime = -1, p.selfBaseDuration = 0, p.treeBaseDuration = 0), v = Bo(a, u, i, null)) : (p = gS(f, u), v = Bo(a, u, i, null)), p.return = e, v.return = e, p.sibling = v, e.child = p, v;
    }
    function gS(e, t, a) {
      return y0(e, t, V, null);
    }
    function yR(e, t) {
      return rc(e, t);
    }
    function Sx(e, t, a, i) {
      var u = e.child, s = u.sibling, f = yR(u, {
        mode: "visible",
        children: a
      });
      if ((t.mode & ot) === be && (f.lanes = i), f.return = t, f.sibling = null, s !== null) {
        var p = t.deletions;
        p === null ? (t.deletions = [s], t.flags |= qr) : p.push(s);
      }
      return t.child = f, f;
    }
    function Ex(e, t, a, i, u) {
      var s = t.mode, f = e.child, p = f.sibling, v = {
        mode: "hidden",
        children: a
      }, y;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (s & ot) === be && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== f
      ) {
        var g = t.child;
        y = g, y.childLanes = V, y.pendingProps = v, t.mode & Et && (y.actualDuration = 0, y.actualStartTime = -1, y.selfBaseDuration = f.selfBaseDuration, y.treeBaseDuration = f.treeBaseDuration), t.deletions = null;
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
    function Cx(e, t, a, i, u) {
      var s = t.mode, f = {
        mode: "visible",
        children: a
      }, p = gS(f, s), v = Bo(i, s, u, null);
      return v.flags |= Mn, p.return = t, v.return = t, p.sibling = v, t.child = p, (t.mode & ot) !== be && Of(t, e.child, null, u), v;
    }
    function Rx(e, t, a) {
      return (e.mode & ot) === be ? (S("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = Ue) : Ay(t) ? e.lanes = Zn : e.lanes = ma, null;
    }
    function Tx(e, t, a, i, u, s, f) {
      if (a)
        if (t.flags & yn) {
          t.flags &= -257;
          var k = aS(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return Rm(e, t, f, k);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= ut, null;
          var H = i.children, O = i.fallback, G = Cx(e, t, H, O, f), de = t.child;
          return de.memoizedState = mS(f), t.memoizedState = hS, G;
        }
      else {
        if (cw(), (t.mode & ot) === be)
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
            var g = b1(u);
            p = g.digest, v = g.message, y = g.stack;
          }
          var _;
          v ? _ = new Error(v) : _ = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var w = aS(_, p, y);
          return Rm(e, t, f, w);
        }
        var N = ta(f, e.childLanes);
        if (nl || N) {
          var U = Nm();
          if (U !== null) {
            var j = Zc(U, f);
            if (j !== An && j !== s.retryLane) {
              s.retryLane = j;
              var ae = Bt;
              Pa(e, j), gr(U, e, j, ae);
            }
          }
          HS();
          var Le = aS(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return Rm(e, t, f, Le);
        } else if (VE(u)) {
          t.flags |= ut, t.child = e.child;
          var we = G_.bind(null, e);
          return D1(u, we), null;
        } else {
          pw(t, u, s.treeContext);
          var bt = i.children, mt = yS(t, bt);
          return mt.flags |= zn, mt;
        }
      }
    }
    function gR(e, t, a) {
      e.lanes = Je(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = Je(i.lanes, t)), og(e.return, t, a);
    }
    function wx(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === Ce) {
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
    function xx(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && em(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function _x(e) {
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
    function bx(e, t) {
      e !== void 0 && !Cm[e] && (e !== "collapsed" && e !== "hidden" ? (Cm[e] = !0, S('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (Cm[e] = !0, S('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function SR(e, t) {
      {
        var a = Ze(e), i = !a && typeof dn(e) == "function";
        if (a || i) {
          var u = a ? "array" : "iterable";
          return S("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", u, t, u), !1;
        }
      }
      return !0;
    }
    function Dx(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (Ze(e)) {
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
      _x(u), bx(s, u), Dx(f, u), Ca(e, t, f, a);
      var p = Ji.current, v = yg(p, Ep);
      if (v)
        p = gg(p, Ep), t.flags |= ut;
      else {
        var y = e !== null && (e.flags & ut) !== _e;
        y && wx(t, t.child, a), p = zf(p);
      }
      if (zo(t, p), (t.mode & ot) === be)
        t.memoizedState = null;
      else
        switch (u) {
          case "forwards": {
            var g = xx(t.child), _;
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
    function kx(e, t, a) {
      vg(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = Of(t, null, i, a) : Ca(e, t, i, a), t.child;
    }
    var CR = !1;
    function Ox(e, t, a) {
      var i = t.type, u = i._context, s = t.pendingProps, f = t.memoizedProps, p = s.value;
      {
        "value" in s || CR || (CR = !0, S("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var v = t.type.propTypes;
        v && qi(v, s, "prop", "Context.Provider");
      }
      if (pC(t, u, p), f !== null) {
        var y = f.value;
        if (ge(y, p)) {
          if (f.children === s.children && !Lh())
            return Mu(e, t, a);
        } else
          _w(t, u, a);
      }
      var g = s.children;
      return Ca(e, t, g, a), t.child;
    }
    var RR = !1;
    function Lx(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (RR || (RR = !0, S("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var u = t.pendingProps, s = u.children;
      typeof s != "function" && S("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), Mf(t, a);
      var f = nr(i);
      Ua(t);
      var p;
      return kp.current = t, Da(!0), p = s(f), Da(!1), Cl(), t.flags |= Yi, Ca(e, t, p, a), t.child;
    }
    function Mp() {
      nl = !0;
    }
    function Tm(e, t) {
      (t.mode & ot) === be && e !== null && (e.alternate = null, t.alternate = null, t.flags |= Mn);
    }
    function Mu(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), XC(), Yp(t.lanes), ta(a, t.childLanes) ? (ww(e, t), t.child) : null;
    }
    function Mx(e, t, a) {
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
        return s === null ? (i.deletions = [e], i.flags |= qr) : s.push(e), a.flags |= Mn, a;
      }
    }
    function ES(e, t) {
      var a = e.lanes;
      return !!ta(a, t);
    }
    function Nx(e, t, a) {
      switch (t.tag) {
        case J:
          vR(t), t.stateNode, kf();
          break;
        case le:
          CC(t);
          break;
        case fe: {
          var i = t.type;
          Ul(i) && Nh(t);
          break;
        }
        case je:
          vg(t, t.stateNode.containerInfo);
          break;
        case it: {
          var u = t.memoizedProps.value, s = t.type._context;
          pC(t, s, u);
          break;
        }
        case kt:
          {
            var f = ta(a, t.childLanes);
            f && (t.flags |= pt);
            {
              var p = t.stateNode;
              p.effectDuration = 0, p.passiveEffectDuration = 0;
            }
          }
          break;
        case Ce: {
          var v = t.memoizedState;
          if (v !== null) {
            if (v.dehydrated !== null)
              return zo(t, zf(Ji.current)), t.flags |= ut, null;
            var y = t.child, g = y.childLanes;
            if (ta(a, g))
              return mR(e, t, a);
            zo(t, zf(Ji.current));
            var _ = Mu(e, t, a);
            return _ !== null ? _.sibling : null;
          } else
            zo(t, zf(Ji.current));
          break;
        }
        case $t: {
          var w = (e.flags & ut) !== _e, N = ta(a, t.childLanes);
          if (w) {
            if (N)
              return ER(e, t, a);
            t.flags |= ut;
          }
          var U = t.memoizedState;
          if (U !== null && (U.rendering = null, U.tail = null, U.lastEffect = null), zo(t, Ji.current), N)
            break;
          return null;
        }
        case Me:
        case At:
          return t.lanes = V, fR(e, t, a);
      }
      return Mu(e, t, a);
    }
    function TR(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return Mx(e, t, qS(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, u = t.pendingProps;
        if (i !== u || Lh() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          nl = !0;
        else {
          var s = ES(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & ut) === _e)
            return nl = !1, Nx(e, t, a);
          (e.flags & ei) !== _e ? nl = !0 : nl = !1;
        }
      } else if (nl = !1, Ar() && aw(t)) {
        var f = t.index, p = iw();
        XE(t, p, f);
      }
      switch (t.lanes = V, t.tag) {
        case $e:
          return vx(e, t, t.type, a);
        case Sn: {
          var v = t.elementType;
          return dx(e, t, v, a);
        }
        case Te: {
          var y = t.type, g = t.pendingProps, _ = t.elementType === y ? g : tl(y, g);
          return dS(e, t, y, _, a);
        }
        case fe: {
          var w = t.type, N = t.pendingProps, U = t.elementType === w ? N : tl(w, N);
          return pR(e, t, w, U, a);
        }
        case J:
          return sx(e, t, a);
        case le:
          return cx(e, t, a);
        case xe:
          return fx(e, t);
        case Ce:
          return mR(e, t, a);
        case je:
          return kx(e, t, a);
        case ze: {
          var j = t.type, ae = t.pendingProps, Le = t.elementType === j ? ae : tl(j, ae);
          return oR(e, t, j, Le, a);
        }
        case ct:
          return lx(e, t, a);
        case Hn:
          return ux(e, t, a);
        case kt:
          return ox(e, t, a);
        case it:
          return Ox(e, t, a);
        case rn:
          return Lx(e, t, a);
        case ft: {
          var we = t.type, bt = t.pendingProps, mt = tl(we, bt);
          if (t.type !== t.elementType) {
            var k = we.propTypes;
            k && qi(
              k,
              mt,
              // Resolved for outer only
              "prop",
              xt(we)
            );
          }
          return mt = tl(we.type, mt), sR(e, t, we, mt, a);
        }
        case Ve:
          return cR(e, t, t.type, t.pendingProps, a);
        case Mt: {
          var H = t.type, O = t.pendingProps, G = t.elementType === H ? O : tl(H, O);
          return px(e, t, H, G, a);
        }
        case $t:
          return ER(e, t, a);
        case gt:
          break;
        case Me:
          return fR(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Vf(e) {
      e.flags |= pt;
    }
    function wR(e) {
      e.flags |= Nn, e.flags |= ds;
    }
    var xR, CS, _R, bR;
    xR = function(e, t, a, i) {
      for (var u = t.child; u !== null; ) {
        if (u.tag === le || u.tag === xe)
          t1(e, u.stateNode);
        else if (u.tag !== je) {
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
        var f = t.stateNode, p = hg(), v = r1(f, a, s, i, u, p);
        t.updateQueue = v, v && Vf(t);
      }
    }, bR = function(e, t, a, i) {
      a !== i && Vf(t);
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
      var t = e.alternate !== null && e.alternate.child === e.child, a = V, i = _e;
      if (t) {
        if ((e.mode & Et) !== be) {
          for (var v = e.selfBaseDuration, y = e.child; y !== null; )
            a = Je(a, Je(y.lanes, y.childLanes)), i |= y.subtreeFlags & Un, i |= y.flags & Un, v += y.treeBaseDuration, y = y.sibling;
          e.treeBaseDuration = v;
        } else
          for (var g = e.child; g !== null; )
            a = Je(a, Je(g.lanes, g.childLanes)), i |= g.subtreeFlags & Un, i |= g.flags & Un, g.return = e, g = g.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & Et) !== be) {
          for (var u = e.actualDuration, s = e.selfBaseDuration, f = e.child; f !== null; )
            a = Je(a, Je(f.lanes, f.childLanes)), i |= f.subtreeFlags, i |= f.flags, u += f.actualDuration, s += f.treeBaseDuration, f = f.sibling;
          e.actualDuration = u, e.treeBaseDuration = s;
        } else
          for (var p = e.child; p !== null; )
            a = Je(a, Je(p.lanes, p.childLanes)), i |= p.subtreeFlags, i |= p.flags, p.return = e, p = p.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function zx(e, t, a) {
      if (gw() && (t.mode & ot) !== be && (t.flags & ut) === _e)
        return aC(t), kf(), t.flags |= yn | lu | za, !1;
      var i = jh(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (mw(t), jr(t), (t.mode & Et) !== be) {
            var u = a !== null;
            if (u) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (kf(), (t.flags & ut) === _e && (t.memoizedState = null), t.flags |= pt, jr(t), (t.mode & Et) !== be) {
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
        case $e:
        case Sn:
        case Ve:
        case Te:
        case ze:
        case ct:
        case Hn:
        case kt:
        case rn:
        case ft:
          return jr(t), null;
        case fe: {
          var u = t.type;
          return Ul(u) && Mh(t), jr(t), null;
        }
        case J: {
          var s = t.stateNode;
          if (Nf(t), $y(t), Eg(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var f = jh(t);
            if (f)
              Vf(t);
            else if (e !== null) {
              var p = e.memoizedState;
              // Check if this is a client root
              (!p.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & yn) !== _e) && (t.flags |= Na, iC());
            }
          }
          return CS(e, t), jr(t), null;
        }
        case le: {
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
              vw(t, v, g) && Vf(t);
            else {
              var w = e1(y, i, v, g, t);
              xR(w, t, !1, !1), t.stateNode = w, n1(w, y, i, v) && Vf(t);
            }
            t.ref !== null && wR(t);
          }
          return jr(t), null;
        }
        case xe: {
          var N = i;
          if (e && t.stateNode != null) {
            var U = e.memoizedProps;
            bR(e, t, U, N);
          } else {
            if (typeof N != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var j = EC(), ae = hg(), Le = jh(t);
            Le ? hw(t) && Vf(t) : t.stateNode = a1(N, j, ae, t);
          }
          return jr(t), null;
        }
        case Ce: {
          Uf(t);
          var we = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var bt = zx(e, t, we);
            if (!bt)
              return t.flags & za ? t : null;
          }
          if ((t.flags & ut) !== _e)
            return t.lanes = a, (t.mode & Et) !== be && Ig(t), t;
          var mt = we !== null, k = e !== null && e.memoizedState !== null;
          if (mt !== k && mt) {
            var H = t.child;
            if (H.flags |= yi, (t.mode & ot) !== be) {
              var O = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !0);
              O || yg(Ji.current, TC) ? U_() : HS();
            }
          }
          var G = t.updateQueue;
          if (G !== null && (t.flags |= pt), jr(t), (t.mode & Et) !== be && mt) {
            var de = t.child;
            de !== null && (t.treeBaseDuration -= de.treeBaseDuration);
          }
          return null;
        }
        case je:
          return Nf(t), CS(e, t), e === null && X1(t.stateNode.containerInfo), jr(t), null;
        case it:
          var ue = t.type._context;
          return ug(ue, t), jr(t), null;
        case Mt: {
          var Fe = t.type;
          return Ul(Fe) && Mh(t), jr(t), null;
        }
        case $t: {
          Uf(t);
          var Ke = t.memoizedState;
          if (Ke === null)
            return jr(t), null;
          var Xt = (t.flags & ut) !== _e, Ot = Ke.rendering;
          if (Ot === null)
            if (Xt)
              Np(Ke, !1);
            else {
              var In = F_() && (e === null || (e.flags & ut) === _e);
              if (!In)
                for (var Lt = t.child; Lt !== null; ) {
                  var jn = em(Lt);
                  if (jn !== null) {
                    Xt = !0, t.flags |= ut, Np(Ke, !1);
                    var ua = jn.updateQueue;
                    return ua !== null && (t.updateQueue = ua, t.flags |= pt), t.subtreeFlags = _e, xw(t, a), zo(t, gg(Ji.current, Ep)), t.child;
                  }
                  Lt = Lt.sibling;
                }
              Ke.tail !== null && Rn() > KR() && (t.flags |= ut, Xt = !0, Np(Ke, !1), t.lanes = jv);
            }
          else {
            if (!Xt) {
              var $r = em(Ot);
              if ($r !== null) {
                t.flags |= ut, Xt = !0;
                var ui = $r.updateQueue;
                if (ui !== null && (t.updateQueue = ui, t.flags |= pt), Np(Ke, !0), Ke.tail === null && Ke.tailMode === "hidden" && !Ot.alternate && !Ar())
                  return jr(t), null;
              } else // The time it took to render last row is greater than the remaining
              // time we have to render. So rendering one more row would likely
              // exceed it.
              Rn() * 2 - Ke.renderingStartTime > KR() && a !== ma && (t.flags |= ut, Xt = !0, Np(Ke, !1), t.lanes = jv);
            }
            if (Ke.isBackwards)
              Ot.sibling = t.child, t.child = Ot;
            else {
              var wa = Ke.last;
              wa !== null ? wa.sibling = Ot : t.child = Ot, Ke.last = Ot;
            }
          }
          if (Ke.tail !== null) {
            var xa = Ke.tail;
            Ke.rendering = xa, Ke.tail = xa.sibling, Ke.renderingStartTime = Rn(), xa.sibling = null;
            var oa = Ji.current;
            return Xt ? oa = gg(oa, Ep) : oa = zf(oa), zo(t, oa), xa;
          }
          return jr(t), null;
        }
        case gt:
          break;
        case Me:
        case At: {
          jS(t);
          var Fu = t.memoizedState, Gf = Fu !== null;
          if (e !== null) {
            var Kp = e.memoizedState, $l = Kp !== null;
            $l !== Gf && (t.flags |= yi);
          }
          return !Gf || (t.mode & ot) === be ? jr(t) : ta(Bl, ma) && (jr(t), t.subtreeFlags & (Mn | pt) && (t.flags |= yi)), null;
        }
        case ht:
          return null;
        case rt:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Ux(e, t, a) {
      switch (Wy(t), t.tag) {
        case fe: {
          var i = t.type;
          Ul(i) && Mh(t);
          var u = t.flags;
          return u & za ? (t.flags = u & -65537 | ut, (t.mode & Et) !== be && Ig(t), t) : null;
        }
        case J: {
          t.stateNode, Nf(t), $y(t), Eg();
          var s = t.flags;
          return (s & za) !== _e && (s & ut) === _e ? (t.flags = s & -65537 | ut, t) : null;
        }
        case le:
          return mg(t), null;
        case Ce: {
          Uf(t);
          var f = t.memoizedState;
          if (f !== null && f.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            kf();
          }
          var p = t.flags;
          return p & za ? (t.flags = p & -65537 | ut, (t.mode & Et) !== be && Ig(t), t) : null;
        }
        case $t:
          return Uf(t), null;
        case je:
          return Nf(t), null;
        case it:
          var v = t.type._context;
          return ug(v, t), null;
        case Me:
        case At:
          return jS(t), null;
        case ht:
          return null;
        default:
          return null;
      }
    }
    function kR(e, t, a) {
      switch (Wy(t), t.tag) {
        case fe: {
          var i = t.type.childContextTypes;
          i != null && Mh(t);
          break;
        }
        case J: {
          t.stateNode, Nf(t), $y(t), Eg();
          break;
        }
        case le: {
          mg(t);
          break;
        }
        case je:
          Nf(t);
          break;
        case Ce:
          Uf(t);
          break;
        case $t:
          Uf(t);
          break;
        case it:
          var u = t.type._context;
          ug(u, t);
          break;
        case Me:
        case At:
          jS(t);
          break;
      }
    }
    var OR = null;
    OR = /* @__PURE__ */ new Set();
    var wm = !1, Hr = !1, Ax = typeof WeakSet == "function" ? WeakSet : Set, Se = null, Pf = null, Bf = null;
    function Fx(e) {
      Ma(null, function() {
        throw e;
      }), cd();
    }
    var jx = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & Et)
        try {
          Vl(), t.componentWillUnmount();
        } finally {
          Hl(e);
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
        jx(e, a);
      } catch (i) {
        cn(e, t, i);
      }
    }
    function Hx(e, t, a) {
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
            if (Ye && at && e.mode & Et)
              try {
                Vl(), i = a(null);
              } finally {
                Hl(e);
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
      ZT(e.containerInfo), Se = t, Px();
      var a = NR;
      return NR = !1, a;
    }
    function Px() {
      for (; Se !== null; ) {
        var e = Se, t = e.child;
        (e.subtreeFlags & gl) !== _e && t !== null ? (t.return = e, Se = t) : Bx();
      }
    }
    function Bx() {
      for (; Se !== null; ) {
        var e = Se;
        It(e);
        try {
          $x(e);
        } catch (a) {
          cn(e, e.return, a);
        }
        mn();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Se = t;
          return;
        }
        Se = e.return;
      }
    }
    function $x(e) {
      var t = e.alternate, a = e.flags;
      if ((a & Na) !== _e) {
        switch (It(e), e.tag) {
          case Te:
          case ze:
          case Ve:
            break;
          case fe: {
            if (t !== null) {
              var i = t.memoizedProps, u = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !Zs && (s.props !== e.memoizedProps && S("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Be(e) || "instance"), s.state !== e.memoizedState && S("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Be(e) || "instance"));
              var f = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : tl(e.type, i), u);
              {
                var p = OR;
                f === void 0 && !p.has(e.type) && (p.add(e.type), S("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", Be(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = f;
            }
            break;
          }
          case J: {
            {
              var v = e.stateNode;
              T1(v.containerInfo);
            }
            break;
          }
          case le:
          case xe:
          case je:
          case Mt:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        mn();
      }
    }
    function rl(e, t, a) {
      var i = t.updateQueue, u = i !== null ? i.lastEffect : null;
      if (u !== null) {
        var s = u.next, f = s;
        do {
          if ((f.tag & e) === e) {
            var p = f.destroy;
            f.destroy = void 0, p !== void 0 && ((e & Fr) !== Ba ? Rl(t) : (e & dr) !== Ba && Rd(t), (e & Al) !== Ba && Qp(!0), xm(t, a, p), (e & Al) !== Ba && Qp(!1), (e & Fr) !== Ba ? xc() : (e & dr) !== Ba && uo());
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
            (e & Fr) !== Ba ? Av(t) : (e & dr) !== Ba && Fv(t);
            var f = s.create;
            (e & Al) !== Ba && Qp(!0), s.destroy = f(), (e & Al) !== Ba && Qp(!1), (e & Fr) !== Ba ? Qi() : (e & dr) !== Ba && _c();
            {
              var p = s.destroy;
              if (p !== void 0 && typeof p != "function") {
                var v = void 0;
                (s.tag & dr) !== _e ? v = "useLayoutEffect" : (s.tag & Al) !== _e ? v = "useInsertionEffect" : v = "useEffect";
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
    function Yx(e, t) {
      if ((t.flags & pt) !== _e)
        switch (t.tag) {
          case kt: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, u = i.id, s = i.onPostCommit, f = KC(), p = t.alternate === null ? "mount" : "update";
            GC() && (p = "nested-update"), typeof s == "function" && s(u, p, a, f);
            var v = t.return;
            e: for (; v !== null; ) {
              switch (v.tag) {
                case J:
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
    function Ix(e, t, a, i) {
      if ((a.flags & Sl) !== _e)
        switch (a.tag) {
          case Te:
          case ze:
          case Ve: {
            if (!Hr)
              if (a.mode & Et)
                try {
                  Vl(), Fo(dr | fr, a);
                } finally {
                  Hl(a);
                }
              else
                Fo(dr | fr, a);
            break;
          }
          case fe: {
            var u = a.stateNode;
            if (a.flags & pt && !Hr)
              if (t === null)
                if (a.type === a.elementType && !Zs && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Be(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Be(a) || "instance")), a.mode & Et)
                  try {
                    Vl(), u.componentDidMount();
                  } finally {
                    Hl(a);
                  }
                else
                  u.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : tl(a.type, t.memoizedProps), f = t.memoizedState;
                if (a.type === a.elementType && !Zs && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Be(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Be(a) || "instance")), a.mode & Et)
                  try {
                    Vl(), u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    Hl(a);
                  }
                else
                  u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
              }
            var p = a.updateQueue;
            p !== null && (a.type === a.elementType && !Zs && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Be(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Be(a) || "instance")), SC(a, p, u));
            break;
          }
          case J: {
            var v = a.updateQueue;
            if (v !== null) {
              var y = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case le:
                    y = a.child.stateNode;
                    break;
                  case fe:
                    y = a.child.stateNode;
                    break;
                }
              SC(a, v, y);
            }
            break;
          }
          case le: {
            var g = a.stateNode;
            if (t === null && a.flags & pt) {
              var _ = a.type, w = a.memoizedProps;
              s1(g, _, w);
            }
            break;
          }
          case xe:
            break;
          case je:
            break;
          case kt: {
            {
              var N = a.memoizedProps, U = N.onCommit, j = N.onRender, ae = a.stateNode.effectDuration, Le = KC(), we = t === null ? "mount" : "update";
              GC() && (we = "nested-update"), typeof j == "function" && j(a.memoizedProps.id, we, a.actualDuration, a.treeBaseDuration, a.actualStartTime, Le);
              {
                typeof U == "function" && U(a.memoizedProps.id, we, ae, Le), B_(a);
                var bt = a.return;
                e: for (; bt !== null; ) {
                  switch (bt.tag) {
                    case J:
                      var mt = bt.stateNode;
                      mt.effectDuration += ae;
                      break e;
                    case kt:
                      var k = bt.stateNode;
                      k.effectDuration += ae;
                      break e;
                  }
                  bt = bt.return;
                }
              }
            }
            break;
          }
          case Ce: {
            Jx(e, a);
            break;
          }
          case $t:
          case Mt:
          case gt:
          case Me:
          case At:
          case rt:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Hr || a.flags & Nn && zR(a);
    }
    function Qx(e) {
      switch (e.tag) {
        case Te:
        case ze:
        case Ve: {
          if (e.mode & Et)
            try {
              Vl(), LR(e, e.return);
            } finally {
              Hl(e);
            }
          else
            LR(e, e.return);
          break;
        }
        case fe: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && Hx(e, e.return, t), MR(e, e.return);
          break;
        }
        case le: {
          MR(e, e.return);
          break;
        }
      }
    }
    function Wx(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === le) {
          if (a === null) {
            a = i;
            try {
              var u = i.stateNode;
              t ? S1(u) : C1(i.stateNode, i.memoizedProps);
            } catch (f) {
              cn(e, e.return, f);
            }
          }
        } else if (i.tag === xe) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? E1(s) : R1(s, i.memoizedProps);
            } catch (f) {
              cn(e, e.return, f);
            }
        } else if (!((i.tag === Me || i.tag === At) && i.memoizedState !== null && i !== e)) {
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
          case le:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var u;
          if (e.mode & Et)
            try {
              Vl(), u = t(i);
            } finally {
              Hl(e);
            }
          else
            u = t(i);
          typeof u == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Be(e));
        } else
          t.hasOwnProperty("current") || S("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", Be(e)), t.current = i;
      }
    }
    function Gx(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function UR(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, UR(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === le) {
          var a = e.stateNode;
          a !== null && ew(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function Kx(e) {
      for (var t = e.return; t !== null; ) {
        if (AR(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function AR(e) {
      return e.tag === le || e.tag === J || e.tag === je;
    }
    function FR(e) {
      var t = e;
      e: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || AR(t.return))
            return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== le && t.tag !== xe && t.tag !== fn; ) {
          if (t.flags & Mn || t.child === null || t.tag === je)
            continue e;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & Mn))
          return t.stateNode;
      }
    }
    function qx(e) {
      var t = Kx(e);
      switch (t.tag) {
        case le: {
          var a = t.stateNode;
          t.flags & Gt && (HE(a), t.flags &= -33);
          var i = FR(e);
          wS(e, i, a);
          break;
        }
        case J:
        case je: {
          var u = t.stateNode.containerInfo, s = FR(e);
          TS(e, s, u);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function TS(e, t, a) {
      var i = e.tag, u = i === le || i === xe;
      if (u) {
        var s = e.stateNode;
        t ? h1(a, s, t) : p1(a, s);
      } else if (i !== je) {
        var f = e.child;
        if (f !== null) {
          TS(f, t, a);
          for (var p = f.sibling; p !== null; )
            TS(p, t, a), p = p.sibling;
        }
      }
    }
    function wS(e, t, a) {
      var i = e.tag, u = i === le || i === xe;
      if (u) {
        var s = e.stateNode;
        t ? v1(a, s, t) : d1(a, s);
      } else if (i !== je) {
        var f = e.child;
        if (f !== null) {
          wS(f, t, a);
          for (var p = f.sibling; p !== null; )
            wS(p, t, a), p = p.sibling;
        }
      }
    }
    var Vr = null, al = !1;
    function Xx(e, t, a) {
      {
        var i = t;
        e: for (; i !== null; ) {
          switch (i.tag) {
            case le: {
              Vr = i.stateNode, al = !1;
              break e;
            }
            case J: {
              Vr = i.stateNode.containerInfo, al = !0;
              break e;
            }
            case je: {
              Vr = i.stateNode.containerInfo, al = !0;
              break e;
            }
          }
          i = i.return;
        }
        if (Vr === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        jR(e, t, a), Vr = null, al = !1;
      }
      Gx(a);
    }
    function jo(e, t, a) {
      for (var i = a.child; i !== null; )
        jR(e, t, i), i = i.sibling;
    }
    function jR(e, t, a) {
      switch (lo(a), a.tag) {
        case le:
          Hr || $f(a, t);
        case xe: {
          {
            var i = Vr, u = al;
            Vr = null, jo(e, t, a), Vr = i, al = u, Vr !== null && (al ? y1(Vr, a.stateNode) : m1(Vr, a.stateNode));
          }
          return;
        }
        case fn: {
          Vr !== null && (al ? g1(Vr, a.stateNode) : Uy(Vr, a.stateNode));
          return;
        }
        case je: {
          {
            var s = Vr, f = al;
            Vr = a.stateNode.containerInfo, al = !0, jo(e, t, a), Vr = s, al = f;
          }
          return;
        }
        case Te:
        case ze:
        case ft:
        case Ve: {
          if (!Hr) {
            var p = a.updateQueue;
            if (p !== null) {
              var v = p.lastEffect;
              if (v !== null) {
                var y = v.next, g = y;
                do {
                  var _ = g, w = _.destroy, N = _.tag;
                  w !== void 0 && ((N & Al) !== Ba ? xm(a, t, w) : (N & dr) !== Ba && (Rd(a), a.mode & Et ? (Vl(), xm(a, t, w), Hl(a)) : xm(a, t, w), uo())), g = g.next;
                } while (g !== y);
              }
            }
          }
          jo(e, t, a);
          return;
        }
        case fe: {
          if (!Hr) {
            $f(a, t);
            var U = a.stateNode;
            typeof U.componentWillUnmount == "function" && RS(a, t, U);
          }
          jo(e, t, a);
          return;
        }
        case gt: {
          jo(e, t, a);
          return;
        }
        case Me: {
          if (
            // TODO: Remove this dead flag
            a.mode & ot
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
    function Zx(e) {
      e.memoizedState;
    }
    function Jx(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var u = i.memoizedState;
          if (u !== null) {
            var s = u.dehydrated;
            s !== null && F1(s);
          }
        }
      }
    }
    function HR(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new Ax()), t.forEach(function(i) {
          var u = K_.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), xr)
              if (Pf !== null && Bf !== null)
                Ip(Bf, Pf);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(u, u);
          }
        });
      }
    }
    function e_(e, t, a) {
      Pf = a, Bf = e, It(t), VR(t, e), It(t), Pf = null, Bf = null;
    }
    function il(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u];
          try {
            Xx(e, t, s);
          } catch (v) {
            cn(s, t, v);
          }
        }
      var f = qa();
      if (t.subtreeFlags & ao)
        for (var p = t.child; p !== null; )
          It(p), VR(p, e), p = p.sibling;
      It(f);
    }
    function VR(e, t, a) {
      var i = e.alternate, u = e.flags;
      switch (e.tag) {
        case Te:
        case ze:
        case ft:
        case Ve: {
          if (il(t, e), Pl(e), u & pt) {
            try {
              rl(Al | fr, e, e.return), Fo(Al | fr, e);
            } catch (Fe) {
              cn(e, e.return, Fe);
            }
            if (e.mode & Et) {
              try {
                Vl(), rl(dr | fr, e, e.return);
              } catch (Fe) {
                cn(e, e.return, Fe);
              }
              Hl(e);
            } else
              try {
                rl(dr | fr, e, e.return);
              } catch (Fe) {
                cn(e, e.return, Fe);
              }
          }
          return;
        }
        case fe: {
          il(t, e), Pl(e), u & Nn && i !== null && $f(i, i.return);
          return;
        }
        case le: {
          il(t, e), Pl(e), u & Nn && i !== null && $f(i, i.return);
          {
            if (e.flags & Gt) {
              var s = e.stateNode;
              try {
                HE(s);
              } catch (Fe) {
                cn(e, e.return, Fe);
              }
            }
            if (u & pt) {
              var f = e.stateNode;
              if (f != null) {
                var p = e.memoizedProps, v = i !== null ? i.memoizedProps : p, y = e.type, g = e.updateQueue;
                if (e.updateQueue = null, g !== null)
                  try {
                    c1(f, g, y, v, p, e);
                  } catch (Fe) {
                    cn(e, e.return, Fe);
                  }
              }
            }
          }
          return;
        }
        case xe: {
          if (il(t, e), Pl(e), u & pt) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var _ = e.stateNode, w = e.memoizedProps, N = i !== null ? i.memoizedProps : w;
            try {
              f1(_, N, w);
            } catch (Fe) {
              cn(e, e.return, Fe);
            }
          }
          return;
        }
        case J: {
          if (il(t, e), Pl(e), u & pt && i !== null) {
            var U = i.memoizedState;
            if (U.isDehydrated)
              try {
                A1(t.containerInfo);
              } catch (Fe) {
                cn(e, e.return, Fe);
              }
          }
          return;
        }
        case je: {
          il(t, e), Pl(e);
          return;
        }
        case Ce: {
          il(t, e), Pl(e);
          var j = e.child;
          if (j.flags & yi) {
            var ae = j.stateNode, Le = j.memoizedState, we = Le !== null;
            if (ae.isHidden = we, we) {
              var bt = j.alternate !== null && j.alternate.memoizedState !== null;
              bt || z_();
            }
          }
          if (u & pt) {
            try {
              Zx(e);
            } catch (Fe) {
              cn(e, e.return, Fe);
            }
            HR(e);
          }
          return;
        }
        case Me: {
          var mt = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & ot
          ) {
            var k = Hr;
            Hr = k || mt, il(t, e), Hr = k;
          } else
            il(t, e);
          if (Pl(e), u & yi) {
            var H = e.stateNode, O = e.memoizedState, G = O !== null, de = e;
            if (H.isHidden = G, G && !mt && (de.mode & ot) !== be) {
              Se = de;
              for (var ue = de.child; ue !== null; )
                Se = ue, n_(ue), ue = ue.sibling;
            }
            Wx(de, G);
          }
          return;
        }
        case $t: {
          il(t, e), Pl(e), u & pt && HR(e);
          return;
        }
        case gt:
          return;
        default: {
          il(t, e), Pl(e);
          return;
        }
      }
    }
    function Pl(e) {
      var t = e.flags;
      if (t & Mn) {
        try {
          qx(e);
        } catch (a) {
          cn(e, e.return, a);
        }
        e.flags &= -3;
      }
      t & zn && (e.flags &= -4097);
    }
    function t_(e, t, a) {
      Pf = a, Bf = t, Se = e, PR(e, t, a), Pf = null, Bf = null;
    }
    function PR(e, t, a) {
      for (var i = (e.mode & ot) !== be; Se !== null; ) {
        var u = Se, s = u.child;
        if (u.tag === Me && i) {
          var f = u.memoizedState !== null, p = f || wm;
          if (p) {
            xS(e, t, a);
            continue;
          } else {
            var v = u.alternate, y = v !== null && v.memoizedState !== null, g = y || Hr, _ = wm, w = Hr;
            wm = p, Hr = g, Hr && !w && (Se = u, r_(u));
            for (var N = s; N !== null; )
              Se = N, PR(
                N,
                // New root; bubble back up to here and stop.
                t,
                a
              ), N = N.sibling;
            Se = u, wm = _, Hr = w, xS(e, t, a);
            continue;
          }
        }
        (u.subtreeFlags & Sl) !== _e && s !== null ? (s.return = u, Se = s) : xS(e, t, a);
      }
    }
    function xS(e, t, a) {
      for (; Se !== null; ) {
        var i = Se;
        if ((i.flags & Sl) !== _e) {
          var u = i.alternate;
          It(i);
          try {
            Ix(t, u, i, a);
          } catch (f) {
            cn(i, i.return, f);
          }
          mn();
        }
        if (i === e) {
          Se = null;
          return;
        }
        var s = i.sibling;
        if (s !== null) {
          s.return = i.return, Se = s;
          return;
        }
        Se = i.return;
      }
    }
    function n_(e) {
      for (; Se !== null; ) {
        var t = Se, a = t.child;
        switch (t.tag) {
          case Te:
          case ze:
          case ft:
          case Ve: {
            if (t.mode & Et)
              try {
                Vl(), rl(dr, t, t.return);
              } finally {
                Hl(t);
              }
            else
              rl(dr, t, t.return);
            break;
          }
          case fe: {
            $f(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && RS(t, t.return, i);
            break;
          }
          case le: {
            $f(t, t.return);
            break;
          }
          case Me: {
            var u = t.memoizedState !== null;
            if (u) {
              BR(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, Se = a) : BR(e);
      }
    }
    function BR(e) {
      for (; Se !== null; ) {
        var t = Se;
        if (t === e) {
          Se = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Se = a;
          return;
        }
        Se = t.return;
      }
    }
    function r_(e) {
      for (; Se !== null; ) {
        var t = Se, a = t.child;
        if (t.tag === Me) {
          var i = t.memoizedState !== null;
          if (i) {
            $R(e);
            continue;
          }
        }
        a !== null ? (a.return = t, Se = a) : $R(e);
      }
    }
    function $R(e) {
      for (; Se !== null; ) {
        var t = Se;
        It(t);
        try {
          Qx(t);
        } catch (i) {
          cn(t, t.return, i);
        }
        if (mn(), t === e) {
          Se = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Se = a;
          return;
        }
        Se = t.return;
      }
    }
    function a_(e, t, a, i) {
      Se = t, i_(t, e, a, i);
    }
    function i_(e, t, a, i) {
      for (; Se !== null; ) {
        var u = Se, s = u.child;
        (u.subtreeFlags & lr) !== _e && s !== null ? (s.return = u, Se = s) : l_(e, t, a, i);
      }
    }
    function l_(e, t, a, i) {
      for (; Se !== null; ) {
        var u = Se;
        if ((u.flags & va) !== _e) {
          It(u);
          try {
            u_(t, u, a, i);
          } catch (f) {
            cn(u, u.return, f);
          }
          mn();
        }
        if (u === e) {
          Se = null;
          return;
        }
        var s = u.sibling;
        if (s !== null) {
          s.return = u.return, Se = s;
          return;
        }
        Se = u.return;
      }
    }
    function u_(e, t, a, i) {
      switch (t.tag) {
        case Te:
        case ze:
        case Ve: {
          if (t.mode & Et) {
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
    function o_(e) {
      Se = e, s_();
    }
    function s_() {
      for (; Se !== null; ) {
        var e = Se, t = e.child;
        if ((Se.flags & qr) !== _e) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var u = a[i];
              Se = u, d_(u, e);
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
            Se = e;
          }
        }
        (e.subtreeFlags & lr) !== _e && t !== null ? (t.return = e, Se = t) : c_();
      }
    }
    function c_() {
      for (; Se !== null; ) {
        var e = Se;
        (e.flags & va) !== _e && (It(e), f_(e), mn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Se = t;
          return;
        }
        Se = e.return;
      }
    }
    function f_(e) {
      switch (e.tag) {
        case Te:
        case ze:
        case Ve: {
          e.mode & Et ? (Yg(), rl(Fr | fr, e, e.return), $g(e)) : rl(Fr | fr, e, e.return);
          break;
        }
      }
    }
    function d_(e, t) {
      for (; Se !== null; ) {
        var a = Se;
        It(a), v_(a, t), mn();
        var i = a.child;
        i !== null ? (i.return = a, Se = i) : p_(e);
      }
    }
    function p_(e) {
      for (; Se !== null; ) {
        var t = Se, a = t.sibling, i = t.return;
        if (UR(t), t === e) {
          Se = null;
          return;
        }
        if (a !== null) {
          a.return = i, Se = a;
          return;
        }
        Se = i;
      }
    }
    function v_(e, t) {
      switch (e.tag) {
        case Te:
        case ze:
        case Ve: {
          e.mode & Et ? (Yg(), rl(Fr, e, t), $g(e)) : rl(Fr, e, t);
          break;
        }
      }
    }
    function h_(e) {
      switch (e.tag) {
        case Te:
        case ze:
        case Ve: {
          try {
            Fo(dr | fr, e);
          } catch (a) {
            cn(e, e.return, a);
          }
          break;
        }
        case fe: {
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
    function m_(e) {
      switch (e.tag) {
        case Te:
        case ze:
        case Ve: {
          try {
            Fo(Fr | fr, e);
          } catch (t) {
            cn(e, e.return, t);
          }
          break;
        }
      }
    }
    function y_(e) {
      switch (e.tag) {
        case Te:
        case ze:
        case Ve: {
          try {
            rl(dr | fr, e, e.return);
          } catch (a) {
            cn(e, e.return, a);
          }
          break;
        }
        case fe: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && RS(e, e.return, t);
          break;
        }
      }
    }
    function g_(e) {
      switch (e.tag) {
        case Te:
        case ze:
        case Ve:
          try {
            rl(Fr | fr, e, e.return);
          } catch (t) {
            cn(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var zp = Symbol.for;
      zp("selector.component"), zp("selector.has_pseudo_class"), zp("selector.role"), zp("selector.test_id"), zp("selector.text");
    }
    var S_ = [];
    function E_() {
      S_.forEach(function(e) {
        return e();
      });
    }
    var C_ = st.ReactCurrentActQueue;
    function R_(e) {
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
        return !e && C_.current !== null && S("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var T_ = Math.ceil, _S = st.ReactCurrentDispatcher, bS = st.ReactCurrentOwner, Pr = st.ReactCurrentBatchConfig, ll = st.ReactCurrentActQueue, hr = (
      /*             */
      0
    ), IR = (
      /*               */
      1
    ), Br = (
      /*                */
      2
    ), Di = (
      /*                */
      4
    ), Nu = 0, Up = 1, Js = 2, _m = 3, Ap = 4, QR = 5, DS = 6, _t = hr, Ra = null, _n = null, mr = V, Bl = V, kS = Do(V), yr = Nu, Fp = null, bm = V, jp = V, Dm = V, Hp = null, $a = null, OS = 0, WR = 500, GR = 1 / 0, w_ = 500, zu = null;
    function Vp() {
      GR = Rn() + w_;
    }
    function KR() {
      return GR;
    }
    var km = !1, LS = null, Yf = null, ec = !1, Ho = null, Pp = V, MS = [], NS = null, x_ = 50, Bp = 0, zS = null, US = !1, Om = !1, __ = 50, If = 0, Lm = null, $p = Bt, Mm = V, qR = !1;
    function Nm() {
      return Ra;
    }
    function Ta() {
      return (_t & (Br | Di)) !== hr ? Rn() : ($p !== Bt || ($p = Rn()), $p);
    }
    function Vo(e) {
      var t = e.mode;
      if ((t & ot) === be)
        return Ue;
      if ((_t & Br) !== hr && mr !== V)
        return Jn(mr);
      var a = Cw() !== Ew;
      if (a) {
        if (Pr.transition !== null) {
          var i = Pr.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return Mm === An && (Mm = Md()), Mm;
      }
      var u = ya();
      if (u !== An)
        return u;
      var s = i1();
      return s;
    }
    function b_(e) {
      var t = e.mode;
      return (t & ot) === be ? Ue : Yv();
    }
    function gr(e, t, a, i) {
      X_(), qR && S("useInsertionEffect must not schedule updates."), US && (Om = !0), vo(e, a, i), (_t & Br) !== V && e === Ra ? eb(t) : (xr && Qv(e, t, a), tb(t), e === Ra && ((_t & Br) === hr && (jp = Je(jp, a)), yr === Ap && Po(e, mr)), Ya(e, i), a === Ue && _t === hr && (t.mode & ot) === be && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !ll.isBatchingLegacy && (Vp(), qE()));
    }
    function D_(e, t, a) {
      var i = e.current;
      i.lanes = t, vo(e, t, a), Ya(e, a);
    }
    function k_(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (_t & Br) !== hr
      );
    }
    function Ya(e, t) {
      var a = e.callbackNode;
      Pv(e, t);
      var i = ea(e, e === Ra ? mr : V);
      if (i === V) {
        a !== null && d0(a), e.callbackNode = null, e.callbackPriority = An;
        return;
      }
      var u = vu(i), s = e.callbackPriority;
      if (s === u && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(ll.current !== null && a !== BS)) {
        a == null && s !== Ue && S("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && d0(a);
      var f;
      if (u === Ue)
        e.tag === ko ? (ll.isBatchingLegacy !== null && (ll.didScheduleLegacyUpdate = !0), rw(JR.bind(null, e))) : KE(JR.bind(null, e)), ll.current !== null ? ll.current.push(Oo) : u1(function() {
          (_t & (Br | Di)) === hr && Oo();
        }), f = null;
      else {
        var p;
        switch (Gv(i)) {
          case na:
            p = Ii;
            break;
          case Aa:
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
      if (Ww(), $p = Bt, Mm = V, (_t & (Br | Di)) !== hr)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = Au();
      if (i && e.callbackNode !== a)
        return null;
      var u = ea(e, e === Ra ? mr : V);
      if (u === V)
        return null;
      var s = !xs(e, u) && !$v(e, u) && !t, f = s ? H_(e, u) : Um(e, u);
      if (f !== Nu) {
        if (f === Js) {
          var p = Qc(e);
          p !== V && (u = p, f = AS(e, p));
        }
        if (f === Up) {
          var v = Fp;
          throw tc(e, V), Po(e, u), Ya(e, Rn()), v;
        }
        if (f === DS)
          Po(e, u);
        else {
          var y = !xs(e, u), g = e.current.alternate;
          if (y && !L_(g)) {
            if (f = Um(e, u), f === Js) {
              var _ = Qc(e);
              _ !== V && (u = _, f = AS(e, _));
            }
            if (f === Up) {
              var w = Fp;
              throw tc(e, V), Po(e, u), Ya(e, Rn()), w;
            }
          }
          e.finishedWork = g, e.finishedLanes = u, O_(e, f, u);
        }
      }
      return Ya(e, Rn()), e.callbackNode === a ? XR.bind(null, e) : null;
    }
    function AS(e, t) {
      var a = Hp;
      if (mu(e)) {
        var i = tc(e, t);
        i.flags |= yn, q1(e.containerInfo);
      }
      var u = Um(e, t);
      if (u !== Js) {
        var s = $a;
        $a = a, s !== null && ZR(s);
      }
      return u;
    }
    function ZR(e) {
      $a === null ? $a = e : $a.push.apply($a, e);
    }
    function O_(e, t, a) {
      switch (t) {
        case Nu:
        case Up:
          throw new Error("Root did not complete. This is a bug in React.");
        case Js: {
          nc(e, $a, zu);
          break;
        }
        case _m: {
          if (Po(e, a), Wc(a) && // do not delay if we're inside an act() scope
          !p0()) {
            var i = OS + WR - Rn();
            if (i > 10) {
              var u = ea(e, V);
              if (u !== V)
                break;
              var s = e.suspendedLanes;
              if (!hu(s, a)) {
                Ta(), Xc(e, s);
                break;
              }
              e.timeoutHandle = Ny(nc.bind(null, e, $a, zu), i);
              break;
            }
          }
          nc(e, $a, zu);
          break;
        }
        case Ap: {
          if (Po(e, a), ry(a))
            break;
          if (!p0()) {
            var f = Dd(e, a), p = f, v = Rn() - p, y = q_(v) - v;
            if (y > 10) {
              e.timeoutHandle = Ny(nc.bind(null, e, $a, zu), y);
              break;
            }
          }
          nc(e, $a, zu);
          break;
        }
        case QR: {
          nc(e, $a, zu);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function L_(e) {
      for (var t = e; ; ) {
        if (t.flags & Tc) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var u = 0; u < i.length; u++) {
                var s = i[u], f = s.getSnapshot, p = s.value;
                try {
                  if (!ge(f(), p))
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
    function Po(e, t) {
      t = _s(t, Dm), t = _s(t, jp), zd(e, t);
    }
    function JR(e) {
      if (Gw(), (_t & (Br | Di)) !== hr)
        throw new Error("Should not already be working.");
      Au();
      var t = ea(e, V);
      if (!ta(t, Ue))
        return Ya(e, Rn()), null;
      var a = Um(e, t);
      if (e.tag !== ko && a === Js) {
        var i = Qc(e);
        i !== V && (t = i, a = AS(e, i));
      }
      if (a === Up) {
        var u = Fp;
        throw tc(e, V), Po(e, t), Ya(e, Rn()), u;
      }
      if (a === DS)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, nc(e, $a, zu), Ya(e, Rn()), null;
    }
    function M_(e, t) {
      t !== V && (bs(e, Je(t, Ue)), Ya(e, Rn()), (_t & (Br | Di)) === hr && (Vp(), Oo()));
    }
    function FS(e, t) {
      var a = _t;
      _t |= IR;
      try {
        return e(t);
      } finally {
        _t = a, _t === hr && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !ll.isBatchingLegacy && (Vp(), qE());
      }
    }
    function N_(e, t, a, i, u) {
      var s = ya(), f = Pr.transition;
      try {
        return Pr.transition = null, $n(na), e(t, a, i, u);
      } finally {
        $n(s), Pr.transition = f, _t === hr && Vp();
      }
    }
    function Uu(e) {
      Ho !== null && Ho.tag === ko && (_t & (Br | Di)) === hr && Au();
      var t = _t;
      _t |= IR;
      var a = Pr.transition, i = ya();
      try {
        return Pr.transition = null, $n(na), e ? e() : void 0;
      } finally {
        $n(i), Pr.transition = a, _t = t, (_t & (Br | Di)) === hr && Oo();
      }
    }
    function e0() {
      return (_t & (Br | Di)) !== hr;
    }
    function zm(e, t) {
      ia(kS, Bl, e), Bl = Je(Bl, t);
    }
    function jS(e) {
      Bl = kS.current, aa(kS, e);
    }
    function tc(e, t) {
      e.finishedWork = null, e.finishedLanes = V;
      var a = e.timeoutHandle;
      if (a !== zy && (e.timeoutHandle = zy, l1(a)), _n !== null)
        for (var i = _n.return; i !== null; ) {
          var u = i.alternate;
          kR(u, i), i = i.return;
        }
      Ra = e;
      var s = rc(e.current, null);
      return _n = s, mr = Bl = t, yr = Nu, Fp = null, bm = V, jp = V, Dm = V, Hp = null, $a = null, Dw(), Zi.discardPendingWarnings(), s;
    }
    function t0(e, t) {
      do {
        var a = _n;
        try {
          if (Yh(), xC(), mn(), bS.current = null, a === null || a.return === null) {
            yr = Up, Fp = t, _n = null;
            return;
          }
          if (Ye && a.mode & Et && Sm(a, !0), Pe)
            if (Cl(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              hs(a, i, mr);
            } else
              Ei(a, t, mr);
          rx(e, a.return, a, t, mr), i0(a);
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
    function z_() {
      OS = Rn();
    }
    function Yp(e) {
      bm = Je(e, bm);
    }
    function U_() {
      yr === Nu && (yr = _m);
    }
    function HS() {
      (yr === Nu || yr === _m || yr === Js) && (yr = Ap), Ra !== null && (_l(bm) || _l(jp)) && Po(Ra, mr);
    }
    function A_(e) {
      yr !== Ap && (yr = Js), Hp === null ? Hp = [e] : Hp.push(e);
    }
    function F_() {
      return yr === Nu;
    }
    function Um(e, t) {
      var a = _t;
      _t |= Br;
      var i = n0();
      if (Ra !== e || mr !== t) {
        if (xr) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Ip(e, mr), u.clear()), Ud(e, t);
        }
        zu = Jc(), tc(e, t);
      }
      wd(t);
      do
        try {
          j_();
          break;
        } catch (s) {
          t0(e, s);
        }
      while (!0);
      if (Yh(), _t = a, r0(i), _n !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return pn(), Ra = null, mr = V, yr;
    }
    function j_() {
      for (; _n !== null; )
        a0(_n);
    }
    function H_(e, t) {
      var a = _t;
      _t |= Br;
      var i = n0();
      if (Ra !== e || mr !== t) {
        if (xr) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Ip(e, mr), u.clear()), Ud(e, t);
        }
        zu = Jc(), Vp(), tc(e, t);
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
      return Yh(), r0(i), _t = a, _n !== null ? (xd(), Nu) : (pn(), Ra = null, mr = V, yr);
    }
    function V_() {
      for (; _n !== null && !md(); )
        a0(_n);
    }
    function a0(e) {
      var t = e.alternate;
      It(e);
      var a;
      (e.mode & Et) !== be ? (Bg(e), a = VS(t, e, Bl), Sm(e, !0)) : a = VS(t, e, Bl), mn(), e.memoizedProps = e.pendingProps, a === null ? i0(e) : _n = a, bS.current = null;
    }
    function i0(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & lu) === _e) {
          It(t);
          var u = void 0;
          if ((t.mode & Et) === be ? u = DR(a, t, Bl) : (Bg(t), u = DR(a, t, Bl), Sm(t, !1)), mn(), u !== null) {
            _n = u;
            return;
          }
        } else {
          var s = Ux(a, t);
          if (s !== null) {
            s.flags &= kv, _n = s;
            return;
          }
          if ((t.mode & Et) !== be) {
            Sm(t, !1);
            for (var f = t.actualDuration, p = t.child; p !== null; )
              f += p.actualDuration, p = p.sibling;
            t.actualDuration = f;
          }
          if (i !== null)
            i.flags |= lu, i.subtreeFlags = _e, i.deletions = null;
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
      var i = ya(), u = Pr.transition;
      try {
        Pr.transition = null, $n(na), P_(e, t, a, i);
      } finally {
        Pr.transition = u, $n(i);
      }
      return null;
    }
    function P_(e, t, a, i) {
      do
        Au();
      while (Ho !== null);
      if (Z_(), (_t & (Br | Di)) !== hr)
        throw new Error("Should not already be working.");
      var u = e.finishedWork, s = e.finishedLanes;
      if (Uv(s), u === null)
        return Si(), null;
      if (s === V && S("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = V, u === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = An;
      var f = Je(u.lanes, u.childLanes);
      Iv(e, f), e === Ra && (Ra = null, _n = null, mr = V), ((u.subtreeFlags & lr) !== _e || (u.flags & lr) !== _e) && (ec || (ec = !0, NS = a, $S(ou, function() {
        return Au(), null;
      })));
      var p = (u.subtreeFlags & (gl | ao | Sl | lr)) !== _e, v = (u.flags & (gl | ao | Sl | lr)) !== _e;
      if (p || v) {
        var y = Pr.transition;
        Pr.transition = null;
        var g = ya();
        $n(na);
        var _ = _t;
        _t |= Di, bS.current = null, Vx(e, u), qC(), e_(e, u, s), JT(e.containerInfo), e.current = u, ms(s), t_(u, e, s), cu(), Lv(), _t = _, $n(g), Pr.transition = y;
      } else
        e.current = u, qC();
      var w = ec;
      if (ec ? (ec = !1, Ho = e, Pp = s) : (If = 0, Lm = null), f = e.pendingLanes, f === V && (Yf = null), w || s0(e.current, !1), Sd(u.stateNode, i), xr && e.memoizedUpdaters.clear(), E_(), Ya(e, Rn()), t !== null)
        for (var N = e.onRecoverableError, U = 0; U < t.length; U++) {
          var j = t[U], ae = j.stack, Le = j.digest;
          N(j.value, {
            componentStack: ae,
            digest: Le
          });
        }
      if (km) {
        km = !1;
        var we = LS;
        throw LS = null, we;
      }
      return ta(Pp, Ue) && e.tag !== ko && Au(), f = e.pendingLanes, ta(f, Ue) ? (Qw(), e === zS ? Bp++ : (Bp = 0, zS = e)) : Bp = 0, Oo(), Si(), null;
    }
    function Au() {
      if (Ho !== null) {
        var e = Gv(Pp), t = _r(or, e), a = Pr.transition, i = ya();
        try {
          return Pr.transition = null, $n(t), $_();
        } finally {
          $n(i), Pr.transition = a;
        }
      }
      return !1;
    }
    function B_(e) {
      MS.push(e), ec || (ec = !0, $S(ou, function() {
        return Au(), null;
      }));
    }
    function $_() {
      if (Ho === null)
        return !1;
      var e = NS;
      NS = null;
      var t = Ho, a = Pp;
      if (Ho = null, Pp = V, (_t & (Br | Di)) !== hr)
        throw new Error("Cannot flush passive effects while already rendering.");
      US = !0, Om = !1, Td(a);
      var i = _t;
      _t |= Di, o_(t.current), a_(t, t.current, a, e);
      {
        var u = MS;
        MS = [];
        for (var s = 0; s < u.length; s++) {
          var f = u[s];
          Yx(t, f);
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
    function Y_(e) {
      Yf === null ? Yf = /* @__PURE__ */ new Set([e]) : Yf.add(e);
    }
    function I_(e) {
      km || (km = !0, LS = e);
    }
    var Q_ = I_;
    function u0(e, t, a) {
      var i = Xs(a, t), u = aR(e, i, Ue), s = Mo(e, u, Ue), f = Ta();
      s !== null && (vo(s, Ue, f), Ya(s, f));
    }
    function cn(e, t, a) {
      if (Fx(a), Qp(!1), e.tag === J) {
        u0(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === J) {
          u0(i, e, a);
          return;
        } else if (i.tag === fe) {
          var u = i.type, s = i.stateNode;
          if (typeof u.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !l0(s)) {
            var f = Xs(a, e), p = lS(i, f, Ue), v = Mo(i, p, Ue), y = Ta();
            v !== null && (vo(v, Ue, y), Ya(v, y));
            return;
          }
        }
        i = i.return;
      }
      S(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function W_(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var u = Ta();
      Xc(e, a), nb(e), Ra === e && hu(mr, a) && (yr === Ap || yr === _m && Wc(mr) && Rn() - OS < WR ? tc(e, V) : Dm = Je(Dm, a)), Ya(e, u);
    }
    function o0(e, t) {
      t === An && (t = b_(e));
      var a = Ta(), i = Pa(e, t);
      i !== null && (vo(i, t, a), Ya(i, a));
    }
    function G_(e) {
      var t = e.memoizedState, a = An;
      t !== null && (a = t.retryLane), o0(e, a);
    }
    function K_(e, t) {
      var a = An, i;
      switch (e.tag) {
        case Ce:
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
    function q_(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : T_(e / 1960) * 1960;
    }
    function X_() {
      if (Bp > x_)
        throw Bp = 0, zS = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      If > __ && (If = 0, Lm = null, S("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function Z_() {
      Zi.flushLegacyContextWarning(), Zi.flushPendingUnsafeLifecycleWarnings();
    }
    function s0(e, t) {
      It(e), Am(e, Mr, y_), t && Am(e, yl, g_), Am(e, Mr, h_), t && Am(e, yl, m_), mn();
    }
    function Am(e, t, a) {
      for (var i = e, u = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== u && i.child !== null && s !== _e ? i = i.child : ((i.flags & t) !== _e && a(i), i.sibling !== null ? i = i.sibling : i = u = i.return);
      }
    }
    var Fm = null;
    function c0(e) {
      {
        if ((_t & Br) !== hr || !(e.mode & ot))
          return;
        var t = e.tag;
        if (t !== $e && t !== J && t !== fe && t !== Te && t !== ze && t !== ft && t !== Ve)
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
    var VS;
    {
      var J_ = null;
      VS = function(e, t, a) {
        var i = g0(J_, t);
        try {
          return TR(e, t, a);
        } catch (s) {
          if (fw() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (Yh(), xC(), kR(e, t), g0(t, i), t.mode & Et && Bg(t), Ma(null, TR, null, e, t, a), sd()) {
            var u = cd();
            typeof u == "object" && u !== null && u._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var f0 = !1, PS;
    PS = /* @__PURE__ */ new Set();
    function eb(e) {
      if (Gr && !$w())
        switch (e.tag) {
          case Te:
          case ze:
          case Ve: {
            var t = _n && Be(_n) || "Unknown", a = t;
            if (!PS.has(a)) {
              PS.add(a);
              var i = Be(e) || "Unknown";
              S("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case fe: {
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
        var a = ll.current;
        return a !== null ? (a.push(t), BS) : vd(e, t);
      }
    }
    function d0(e) {
      if (e !== BS)
        return hd(e);
    }
    function p0() {
      return ll.current !== null;
    }
    function tb(e) {
      {
        if (e.mode & ot) {
          if (!YR())
            return;
        } else if (!R_() || _t !== hr || e.tag !== Te && e.tag !== ze && e.tag !== Ve)
          return;
        if (ll.current === null) {
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
    function nb(e) {
      e.tag !== ko && YR() && ll.current === null && S(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

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
    var ki = null, Qf = null, rb = function(e) {
      ki = e;
    };
    function Wf(e) {
      {
        if (ki === null)
          return e;
        var t = ki(e);
        return t === void 0 ? e : t.current;
      }
    }
    function YS(e) {
      return Wf(e);
    }
    function IS(e) {
      {
        if (ki === null)
          return e;
        var t = ki(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = Wf(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: Y,
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
        if (ki === null)
          return !1;
        var a = e.elementType, i = t.type, u = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case fe: {
            typeof i == "function" && (u = !0);
            break;
          }
          case Te: {
            (typeof i == "function" || s === Ie) && (u = !0);
            break;
          }
          case ze: {
            (s === Y || s === Ie) && (u = !0);
            break;
          }
          case ft:
          case Ve: {
            (s === lt || s === Ie) && (u = !0);
            break;
          }
          default:
            return !1;
        }
        if (u) {
          var f = ki(a);
          if (f !== void 0 && f === ki(i))
            return !0;
        }
        return !1;
      }
    }
    function h0(e) {
      {
        if (ki === null || typeof WeakSet != "function")
          return;
        Qf === null && (Qf = /* @__PURE__ */ new WeakSet()), Qf.add(e);
      }
    }
    var ab = function(e, t) {
      {
        if (ki === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        Au(), Uu(function() {
          QS(e.current, i, a);
        });
      }
    }, ib = function(e, t) {
      {
        if (e.context !== ii)
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
          case Te:
          case Ve:
          case fe:
            v = p;
            break;
          case ze:
            v = p.render;
            break;
        }
        if (ki === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var y = !1, g = !1;
        if (v !== null) {
          var _ = ki(v);
          _ !== void 0 && (a.has(_) ? g = !0 : t.has(_) && (f === fe ? g = !0 : y = !0));
        }
        if (Qf !== null && (Qf.has(e) || i !== null && Qf.has(i)) && (g = !0), g && (e._debugNeedsRemount = !0), g || y) {
          var w = Pa(e, Ue);
          w !== null && gr(w, e, Ue, Bt);
        }
        u !== null && !g && QS(u, t, a), s !== null && QS(s, t, a);
      }
    }
    var lb = function(e, t) {
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
          case Te:
          case Ve:
          case fe:
            p = f;
            break;
          case ze:
            p = f.render;
            break;
        }
        var v = !1;
        p !== null && t.has(p) && (v = !0), v ? ub(e, a) : i !== null && WS(i, t, a), u !== null && WS(u, t, a);
      }
    }
    function ub(e, t) {
      {
        var a = ob(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case le:
              t.add(i.stateNode);
              return;
            case je:
              t.add(i.stateNode.containerInfo);
              return;
            case J:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function ob(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === le)
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
    function sb(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = _e, this.subtreeFlags = _e, this.deletions = null, this.lanes = V, this.childLanes = V, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !GS && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var li = function(e, t, a, i) {
      return new sb(e, t, a, i);
    };
    function KS(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function cb(e) {
      return typeof e == "function" && !KS(e) && e.defaultProps === void 0;
    }
    function fb(e) {
      if (typeof e == "function")
        return KS(e) ? fe : Te;
      if (e != null) {
        var t = e.$$typeof;
        if (t === Y)
          return ze;
        if (t === lt)
          return ft;
      }
      return $e;
    }
    function rc(e, t) {
      var a = e.alternate;
      a === null ? (a = li(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = _e, a.subtreeFlags = _e, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & Un, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case $e:
        case Te:
        case Ve:
          a.type = Wf(e.type);
          break;
        case fe:
          a.type = YS(e.type);
          break;
        case ze:
          a.type = IS(e.type);
          break;
      }
      return a;
    }
    function db(e, t) {
      e.flags &= Un | Mn;
      var a = e.alternate;
      if (a === null)
        e.childLanes = V, e.lanes = t, e.child = null, e.subtreeFlags = _e, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = _e, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function pb(e, t, a) {
      var i;
      return e === zh ? (i = ot, t === !0 && (i |= Xe, i |= Kt)) : i = be, xr && (i |= Et), li(J, null, null, i);
    }
    function qS(e, t, a, i, u, s) {
      var f = $e, p = e;
      if (typeof e == "function")
        KS(e) ? (f = fe, p = YS(p)) : p = Wf(p);
      else if (typeof e == "string")
        f = le;
      else
        e: switch (e) {
          case Ir:
            return Bo(a.children, u, s, t);
          case si:
            f = Hn, u |= Xe, (u & ot) !== be && (u |= Kt);
            break;
          case ci:
            return vb(a, u, s, t);
          case ne:
            return hb(a, u, s, t);
          case ie:
            return mb(a, u, s, t);
          case En:
            return y0(a, u, s, t);
          case nn:
          case dt:
          case on:
          case Rr:
          case tt:
          default: {
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case Ni:
                  f = it;
                  break e;
                case R:
                  f = rn;
                  break e;
                case Y:
                  f = ze, p = IS(p);
                  break e;
                case lt:
                  f = ft;
                  break e;
                case Ie:
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
      var g = li(f, a, t, u);
      return g.elementType = e, g.type = p, g.lanes = s, g._debugOwner = i, g;
    }
    function XS(e, t, a) {
      var i = null;
      i = e._owner;
      var u = e.type, s = e.key, f = e.props, p = qS(u, s, f, i, t, a);
      return p._debugSource = e._source, p._debugOwner = e._owner, p;
    }
    function Bo(e, t, a, i) {
      var u = li(ct, e, i, t);
      return u.lanes = a, u;
    }
    function vb(e, t, a, i) {
      typeof e.id != "string" && S('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var u = li(kt, e, i, t | Et);
      return u.elementType = ci, u.lanes = a, u.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, u;
    }
    function hb(e, t, a, i) {
      var u = li(Ce, e, i, t);
      return u.elementType = ne, u.lanes = a, u;
    }
    function mb(e, t, a, i) {
      var u = li($t, e, i, t);
      return u.elementType = ie, u.lanes = a, u;
    }
    function y0(e, t, a, i) {
      var u = li(Me, e, i, t);
      u.elementType = En, u.lanes = a;
      var s = {
        isHidden: !1
      };
      return u.stateNode = s, u;
    }
    function ZS(e, t, a) {
      var i = li(xe, e, null, t);
      return i.lanes = a, i;
    }
    function yb() {
      var e = li(le, null, null, be);
      return e.elementType = "DELETED", e;
    }
    function gb(e) {
      var t = li(fn, null, null, be);
      return t.stateNode = e, t;
    }
    function JS(e, t, a) {
      var i = e.children !== null ? e.children : [], u = li(je, i, e.key, t);
      return u.lanes = a, u.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, u;
    }
    function g0(e, t) {
      return e === null && (e = li($e, null, null, be)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function Sb(e, t, a, i, u) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = zy, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = An, this.eventTimes = qc(V), this.expirationTimes = qc(Bt), this.pendingLanes = V, this.suspendedLanes = V, this.pingedLanes = V, this.expiredLanes = V, this.mutableReadLanes = V, this.finishedLanes = V, this.entangledLanes = V, this.entanglements = qc(V), this.identifierPrefix = i, this.onRecoverableError = u, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
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
      var g = new Sb(e, t, a, p, v), _ = pb(t, s);
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
    function Eb(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return sa(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: pa,
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
        return ii;
      var t = ro(e), a = nw(t);
      if (t.tag === fe) {
        var i = t.type;
        if (Ul(i))
          return WE(t, i, a);
      }
      return a;
    }
    function Cb(e, t) {
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
        if (u.mode & Xe) {
          var s = Be(a) || "Component";
          if (!nE[s]) {
            nE[s] = !0;
            var f = qn;
            try {
              It(u), a.mode & Xe ? S("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : S("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
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
      var w = _.current, N = Ta(), U = Vo(w), j = Lu(N, U);
      return j.callback = t ?? null, Mo(w, j, U), D_(_, U, N), _;
    }
    function Wp(e, t, a, i) {
      gd(t, e);
      var u = t.current, s = Ta(), f = Vo(u);
      bc(f);
      var p = E0(a);
      t.context === null ? t.context = p : t.pendingContext = p, Gr && qn !== null && !tE && (tE = !0, S(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

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
        case le:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function Rb(e) {
      switch (e.tag) {
        case J: {
          var t = e.stateNode;
          if (mu(t)) {
            var a = Bv(t);
            M_(t, a);
          }
          break;
        }
        case Ce: {
          Uu(function() {
            var u = Pa(e, Ue);
            if (u !== null) {
              var s = Ta();
              gr(u, e, Ue, s);
            }
          });
          var i = Ue;
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
    function Tb(e) {
      if (e.tag === Ce) {
        var t = po, a = Pa(e, t);
        if (a !== null) {
          var i = Ta();
          gr(a, e, t, i);
        }
        rE(e, t);
      }
    }
    function wb(e) {
      if (e.tag === Ce) {
        var t = Vo(e), a = Pa(e, t);
        if (a !== null) {
          var i = Ta();
          gr(a, e, t, i);
        }
        rE(e, t);
      }
    }
    function w0(e) {
      var t = ti(e);
      return t === null ? null : t.stateNode;
    }
    var x0 = function(e) {
      return null;
    };
    function xb(e) {
      return x0(e);
    }
    var _0 = function(e) {
      return !1;
    };
    function _b(e) {
      return _0(e);
    }
    var b0 = null, D0 = null, k0 = null, O0 = null, L0 = null, M0 = null, N0 = null, z0 = null, U0 = null;
    {
      var A0 = function(e, t, a) {
        var i = t[a], u = Ze(e) ? e.slice() : qe({}, e);
        return a + 1 === t.length ? (Ze(u) ? u.splice(i, 1) : delete u[i], u) : (u[i] = A0(e[i], t, a + 1), u);
      }, F0 = function(e, t) {
        return A0(e, t, 0);
      }, j0 = function(e, t, a, i) {
        var u = t[i], s = Ze(e) ? e.slice() : qe({}, e);
        if (i + 1 === t.length) {
          var f = a[i];
          s[f] = s[u], Ze(s) ? s.splice(u, 1) : delete s[u];
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
          Ne("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              Ne("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return j0(e, t, a, 0);
      }, V0 = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var u = t[a], s = Ze(e) ? e.slice() : qe({}, e);
        return s[u] = V0(e[u], t, a + 1, i), s;
      }, P0 = function(e, t, a) {
        return V0(e, t, 0, a);
      }, aE = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      b0 = function(e, t, a, i) {
        var u = aE(e, t);
        if (u !== null) {
          var s = P0(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = qe({}, e.memoizedProps);
          var f = Pa(e, Ue);
          f !== null && gr(f, e, Ue, Bt);
        }
      }, D0 = function(e, t, a) {
        var i = aE(e, t);
        if (i !== null) {
          var u = F0(i.memoizedState, a);
          i.memoizedState = u, i.baseState = u, e.memoizedProps = qe({}, e.memoizedProps);
          var s = Pa(e, Ue);
          s !== null && gr(s, e, Ue, Bt);
        }
      }, k0 = function(e, t, a, i) {
        var u = aE(e, t);
        if (u !== null) {
          var s = H0(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = qe({}, e.memoizedProps);
          var f = Pa(e, Ue);
          f !== null && gr(f, e, Ue, Bt);
        }
      }, O0 = function(e, t, a) {
        e.pendingProps = P0(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Pa(e, Ue);
        i !== null && gr(i, e, Ue, Bt);
      }, L0 = function(e, t) {
        e.pendingProps = F0(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = Pa(e, Ue);
        a !== null && gr(a, e, Ue, Bt);
      }, M0 = function(e, t, a) {
        e.pendingProps = H0(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Pa(e, Ue);
        i !== null && gr(i, e, Ue, Bt);
      }, N0 = function(e) {
        var t = Pa(e, Ue);
        t !== null && gr(t, e, Ue, Bt);
      }, z0 = function(e) {
        x0 = e;
      }, U0 = function(e) {
        _0 = e;
      };
    }
    function bb(e) {
      var t = Zr(e);
      return t === null ? null : t.stateNode;
    }
    function Db(e) {
      return null;
    }
    function kb() {
      return qn;
    }
    function Ob(e) {
      var t = e.findFiberByHostInstance, a = st.ReactCurrentDispatcher;
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
        findHostInstanceByFiber: bb,
        findFiberByHostInstance: t || Db,
        // React Refresh
        findHostInstancesForRefresh: lb,
        scheduleRefresh: ab,
        scheduleRoot: ib,
        setRefreshHandler: rb,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: kb,
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
        typeof arguments[1] == "function" ? S("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : Vm(arguments[1]) ? S("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && S("You passed a second argument to root.render(...) but it only accepts one argument.");
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
    function Lb(e, t) {
      if (!Vm(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      $0(e);
      var a = !1, i = !1, u = "", s = B0;
      t != null && (t.hydrate ? Ne("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === ir && S(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

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
    function Mb(e) {
      e && Jv(e);
    }
    Hm.prototype.unstable_scheduleHydration = Mb;
    function Nb(e, t, a) {
      if (!Vm(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      $0(e), t === void 0 && S("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, u = a != null && a.hydratedSources || null, s = !1, f = !1, p = "", v = B0;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (p = a.identifierPrefix), a.onRecoverableError !== void 0 && (v = a.onRecoverableError));
      var y = R0(t, null, e, zh, i, s, f, p, v);
      if (bh(y.current, e), Jd(e), u)
        for (var g = 0; g < u.length; g++) {
          var _ = u[g];
          Fw(y, _);
        }
      return new Hm(y);
    }
    function Vm(e) {
      return !!(e && (e.nodeType === Kr || e.nodeType === Bi || e.nodeType === Xo));
    }
    function Gp(e) {
      return !!(e && (e.nodeType === Kr || e.nodeType === Bi || e.nodeType === Xo || e.nodeType === Ln && e.nodeValue === " react-mount-point-unstable "));
    }
    function $0(e) {
      e.nodeType === Kr && e.tagName && e.tagName.toUpperCase() === "BODY" && S("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), cp(e) && (e._reactRootContainer ? S("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : S("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var zb = st.ReactCurrentOwner, Y0;
    Y0 = function(e) {
      if (e._reactRootContainer && e.nodeType !== Ln) {
        var t = w0(e._reactRootContainer.current);
        t && t.parentNode !== e && S("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = lE(e), u = !!(i && bo(i));
      u && !a && S("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === Kr && e.tagName && e.tagName.toUpperCase() === "BODY" && S("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function lE(e) {
      return e ? e.nodeType === Bi ? e.documentElement : e.firstChild : null;
    }
    function I0() {
    }
    function Ub(e, t, a, i, u) {
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
    function Ab(e, t) {
      e !== null && typeof e != "function" && S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function Pm(e, t, a, i, u) {
      Y0(a), Ab(u === void 0 ? null : u, "render");
      var s = a._reactRootContainer, f;
      if (!s)
        f = Ub(a, t, e, u, i);
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
    function Fb(e) {
      {
        Q0 || (Q0 = !0, S("findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node"));
        var t = zb.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || S("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", xt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === Kr ? e : Cb(e, "findDOMNode");
    }
    function jb(e, t, a) {
      if (S("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Gp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = cp(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return Pm(null, e, t, !0, a);
    }
    function Hb(e, t, a) {
      if (S("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Gp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = cp(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return Pm(null, e, t, !1, a);
    }
    function Vb(e, t, a, i) {
      if (S("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Gp(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !iu(e))
        throw new Error("parentComponent must be a valid React Component");
      return Pm(e, t, a, !1, i);
    }
    var W0 = !1;
    function Pb(e) {
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
          Pm(null, null, e, !1, function() {
            e._reactRootContainer = null, BE(e);
          });
        }), !0;
      } else {
        {
          var u = lE(e), s = !!(u && bo(u)), f = e.nodeType === Kr && Gp(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", f ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    iy(Rb), Fd(Tb), ly(wb), tf(ya), Kv(Wv), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && S("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), ls($T), bv(FS, N_, Uu);
    function Bb(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Vm(t))
        throw new Error("Target container is not a DOM element.");
      return Eb(e, t, null, a);
    }
    function $b(e, t, a, i) {
      return Vb(e, t, a, i);
    }
    var uE = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [bo, wf, Dh, ud, Ju, FS]
    };
    function Yb(e, t) {
      return uE.usingClientEntryPoint || S('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), Lb(e, t);
    }
    function Ib(e, t, a) {
      return uE.usingClientEntryPoint || S('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), Nb(e, t, a);
    }
    function Qb(e) {
      return e0() && S("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Uu(e);
    }
    var Wb = Ob({
      findFiberByHostInstance: Bs,
      bundleType: 1,
      version: eE,
      rendererPackageName: "react-dom"
    });
    if (!Wb && Qn && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var G0 = window.location.protocol;
      /^(https?|file):$/.test(G0) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (G0 === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    Qa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = uE, Qa.createPortal = Bb, Qa.createRoot = Yb, Qa.findDOMNode = Fb, Qa.flushSync = Qb, Qa.hydrate = jb, Qa.hydrateRoot = Ib, Qa.render = Hb, Qa.unmountComponentAtNode = Pb, Qa.unstable_batchedUpdates = FS, Qa.unstable_renderSubtreeIntoContainer = $b, Qa.version = eE, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }(), Qa;
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
uT.NODE_ENV === "production" ? (oT(), dE.exports = aD()) : dE.exports = iD();
var lD = dE.exports, pE, uD = {}, $m = lD;
if (uD.NODE_ENV === "production")
  pE = $m.createRoot, $m.hydrateRoot;
else {
  var aT = $m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  pE = function(X, pe) {
    aT.usingClientEntryPoint = !0;
    try {
      return $m.createRoot(X, pe);
    } finally {
      aT.usingClientEntryPoint = !1;
    }
  };
}
const oD = (X) => {
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
function sD({}) {
  const [X, pe] = Yl.useState(1), [A, st] = Yl.useState("$"), Rt = {
    layout: "horizontal",
    bundles: [
      {
        id: 1,
        description: "Buy one product",
        highlighted: !1,
        price: 100,
        discountedPrice: 80,
        discount: 20,
        discount_type: "percentage"
      },
      {
        id: 2,
        description: "Buy two products",
        highlighted: !0,
        price: 300,
        discountedPrice: 240,
        discount: 20,
        discount_type: "amount"
      },
      {
        id: 3,
        description: "Buy three products",
        highlighted: !1,
        price: 500,
        discountedPrice: 240,
        discount: 20,
        discount_type: "percentage"
      }
    ]
  }, yt = (Ne) => {
    let S = "";
    return Ne.discount_type === "amount" ? S = /* @__PURE__ */ Sr.jsxs("span", { children: [
      "Save ",
      A,
      Ne.discount
    ] }) : S = /* @__PURE__ */ Sr.jsxs("span", { children: [
      "Save ",
      Ne.discount,
      "%"
    ] }), Ne.discount || (S = /* @__PURE__ */ Sr.jsx("span", { children: "Regular price" })), S;
  };
  return Yl.useEffect(() => {
    var S, We;
    const Ne = (We = (S = window == null ? void 0 : window.Shopify) == null ? void 0 : S.currency) == null ? void 0 : We.active;
    st(oD(Ne));
  }, []), /* @__PURE__ */ Sr.jsxs("div", { className: "barn2-discount-bundles", children: [
    /* @__PURE__ */ Sr.jsx("div", { className: "barn2-db-main-title", children: /* @__PURE__ */ Sr.jsx("span", { children: "Buy" }) }),
    /* @__PURE__ */ Sr.jsx("div", { className: `barn2-discounts-list barn2-dbs-layout-${Rt.layout}`, children: Rt.bundles.map((Ne) => /* @__PURE__ */ Sr.jsxs(
      "div",
      {
        className: `${Ne.highlighted ? "highlighted" : ""} ${X === Ne.id ? "selected" : ""} barn2-discount-bundle`,
        onClick: () => pe(Ne.id),
        children: [
          Ne.highlighted && /* @__PURE__ */ Sr.jsx("span", { className: "barn2-highlighted-text", children: "Most popular" }),
          /* @__PURE__ */ Sr.jsxs("div", { className: "barn2-dbs-top", children: [
            /* @__PURE__ */ Sr.jsx("span", { className: "barn2-input-circle" }),
            /* @__PURE__ */ Sr.jsxs("div", { className: "barn2-dbs-text-block", children: [
              /* @__PURE__ */ Sr.jsx("h4", { className: "barn2-dbs-bundle-title", children: Ne.description }),
              /* @__PURE__ */ Sr.jsx("p", { children: yt(Ne) })
            ] })
          ] }),
          /* @__PURE__ */ Sr.jsxs("div", { className: "barn2-dbs-bottom", children: [
            /* @__PURE__ */ Sr.jsx("span", { className: "barn2-dbs-price", children: "$150" }),
            /* @__PURE__ */ Sr.jsx("span", { className: "barn2-dbs-regular-price", children: "$450" })
          ] })
        ]
      },
      Ne.id
    )) })
  ] });
}
function cD() {
  var yt, Ne, S;
  const [X, pe] = Yl.useState((S = (Ne = (yt = window == null ? void 0 : window.ShopifyAnalytics) == null ? void 0 : yt.meta) == null ? void 0 : Ne.product) == null ? void 0 : S.id), [A, st] = Yl.useState(null), Rt = async (We) => {
    try {
      return await (await fetch(`/apps/barn2-quanti/discountbundle?productId=${We}`)).json();
    } catch (Te) {
      return console.error("Error fetching discount bundle:", Te), null;
    }
  };
  return Yl.useEffect(() => {
    X && Rt(X).then((We) => {
      st(We), console.log(We);
    });
  }, []), /* @__PURE__ */ Sr.jsx(sD, { bundleData: A });
}
const iT = document.getElementById("barn2_discounts");
iT && pE(iT).render(/* @__PURE__ */ Sr.jsx(cD, {}));
