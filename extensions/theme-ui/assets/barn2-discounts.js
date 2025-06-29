function nk(H) {
  return H && H.__esModule && Object.prototype.hasOwnProperty.call(H, "default") ? H.default : H;
}
var vE = { exports: {} }, Kp = {}, hE = { exports: {} }, bt = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ZR;
function rk() {
  if (ZR) return bt;
  ZR = 1;
  var H = Symbol.for("react.element"), Q = Symbol.for("react.portal"), w = Symbol.for("react.fragment"), Se = Symbol.for("react.strict_mode"), be = Symbol.for("react.profiler"), Ge = Symbol.for("react.provider"), Me = Symbol.for("react.context"), S = Symbol.for("react.forward_ref"), We = Symbol.for("react.suspense"), he = Symbol.for("react.memo"), Z = Symbol.for("react.lazy"), ae = Symbol.iterator;
  function F(C) {
    return C === null || typeof C != "object" ? null : (C = ae && C[ae] || C["@@iterator"], typeof C == "function" ? C : null);
  }
  var ee = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, q = Object.assign, fe = {};
  function ue(C, M, ne) {
    this.props = C, this.context = M, this.refs = fe, this.updater = ne || ee;
  }
  ue.prototype.isReactComponent = {}, ue.prototype.setState = function(C, M) {
    if (typeof C != "object" && typeof C != "function" && C != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, C, M, "setState");
  }, ue.prototype.forceUpdate = function(C) {
    this.updater.enqueueForceUpdate(this, C, "forceUpdate");
  };
  function mn() {
  }
  mn.prototype = ue.prototype;
  function jt(C, M, ne) {
    this.props = C, this.context = M, this.refs = fe, this.updater = ne || ee;
  }
  var st = jt.prototype = new mn();
  st.constructor = jt, q(st, ue.prototype), st.isPureReactComponent = !0;
  var Qe = Array.isArray, Ot = Object.prototype.hasOwnProperty, Oe = { current: null }, ft = { key: !0, ref: !0, __self: !0, __source: !0 };
  function $e(C, M, ne) {
    var Re, _e = {}, Ue = null, Ae = null;
    if (M != null) for (Re in M.ref !== void 0 && (Ae = M.ref), M.key !== void 0 && (Ue = "" + M.key), M) Ot.call(M, Re) && !ft.hasOwnProperty(Re) && (_e[Re] = M[Re]);
    var Pe = arguments.length - 2;
    if (Pe === 1) _e.children = ne;
    else if (1 < Pe) {
      for (var nt = Array(Pe), _t = 0; _t < Pe; _t++) nt[_t] = arguments[_t + 2];
      _e.children = nt;
    }
    if (C && C.defaultProps) for (Re in Pe = C.defaultProps, Pe) _e[Re] === void 0 && (_e[Re] = Pe[Re]);
    return { $$typeof: H, type: C, key: Ue, ref: Ae, props: _e, _owner: Oe.current };
  }
  function En(C, M) {
    return { $$typeof: H, type: C.type, key: M, ref: C.ref, props: C.props, _owner: C._owner };
  }
  function Lt(C) {
    return typeof C == "object" && C !== null && C.$$typeof === H;
  }
  function ln(C) {
    var M = { "=": "=0", ":": "=2" };
    return "$" + C.replace(/[=:]/g, function(ne) {
      return M[ne];
    });
  }
  var Vt = /\/+/g;
  function gt(C, M) {
    return typeof C == "object" && C !== null && C.key != null ? ln("" + C.key) : M.toString(36);
  }
  function Ye(C, M, ne, Re, _e) {
    var Ue = typeof C;
    (Ue === "undefined" || Ue === "boolean") && (C = null);
    var Ae = !1;
    if (C === null) Ae = !0;
    else switch (Ue) {
      case "string":
      case "number":
        Ae = !0;
        break;
      case "object":
        switch (C.$$typeof) {
          case H:
          case Q:
            Ae = !0;
        }
    }
    if (Ae) return Ae = C, _e = _e(Ae), C = Re === "" ? "." + gt(Ae, 0) : Re, Qe(_e) ? (ne = "", C != null && (ne = C.replace(Vt, "$&/") + "/"), Ye(_e, M, ne, "", function(_t) {
      return _t;
    })) : _e != null && (Lt(_e) && (_e = En(_e, ne + (!_e.key || Ae && Ae.key === _e.key ? "" : ("" + _e.key).replace(Vt, "$&/") + "/") + C)), M.push(_e)), 1;
    if (Ae = 0, Re = Re === "" ? "." : Re + ":", Qe(C)) for (var Pe = 0; Pe < C.length; Pe++) {
      Ue = C[Pe];
      var nt = Re + gt(Ue, Pe);
      Ae += Ye(Ue, M, ne, nt, _e);
    }
    else if (nt = F(C), typeof nt == "function") for (C = nt.call(C), Pe = 0; !(Ue = C.next()).done; ) Ue = Ue.value, nt = Re + gt(Ue, Pe++), Ae += Ye(Ue, M, ne, nt, _e);
    else if (Ue === "object") throw M = String(C), Error("Objects are not valid as a React child (found: " + (M === "[object Object]" ? "object with keys {" + Object.keys(C).join(", ") + "}" : M) + "). If you meant to render a collection of children, use an array instead.");
    return Ae;
  }
  function Nt(C, M, ne) {
    if (C == null) return C;
    var Re = [], _e = 0;
    return Ye(C, Re, "", "", function(Ue) {
      return M.call(ne, Ue, _e++);
    }), Re;
  }
  function vt(C) {
    if (C._status === -1) {
      var M = C._result;
      M = M(), M.then(function(ne) {
        (C._status === 0 || C._status === -1) && (C._status = 1, C._result = ne);
      }, function(ne) {
        (C._status === 0 || C._status === -1) && (C._status = 2, C._result = ne);
      }), C._status === -1 && (C._status = 0, C._result = M);
    }
    if (C._status === 1) return C._result.default;
    throw C._result;
  }
  var lt = { current: null }, I = { transition: null }, Ce = { ReactCurrentDispatcher: lt, ReactCurrentBatchConfig: I, ReactCurrentOwner: Oe };
  function oe() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return bt.Children = { map: Nt, forEach: function(C, M, ne) {
    Nt(C, function() {
      M.apply(this, arguments);
    }, ne);
  }, count: function(C) {
    var M = 0;
    return Nt(C, function() {
      M++;
    }), M;
  }, toArray: function(C) {
    return Nt(C, function(M) {
      return M;
    }) || [];
  }, only: function(C) {
    if (!Lt(C)) throw Error("React.Children.only expected to receive a single React element child.");
    return C;
  } }, bt.Component = ue, bt.Fragment = w, bt.Profiler = be, bt.PureComponent = jt, bt.StrictMode = Se, bt.Suspense = We, bt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ce, bt.act = oe, bt.cloneElement = function(C, M, ne) {
    if (C == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + C + ".");
    var Re = q({}, C.props), _e = C.key, Ue = C.ref, Ae = C._owner;
    if (M != null) {
      if (M.ref !== void 0 && (Ue = M.ref, Ae = Oe.current), M.key !== void 0 && (_e = "" + M.key), C.type && C.type.defaultProps) var Pe = C.type.defaultProps;
      for (nt in M) Ot.call(M, nt) && !ft.hasOwnProperty(nt) && (Re[nt] = M[nt] === void 0 && Pe !== void 0 ? Pe[nt] : M[nt]);
    }
    var nt = arguments.length - 2;
    if (nt === 1) Re.children = ne;
    else if (1 < nt) {
      Pe = Array(nt);
      for (var _t = 0; _t < nt; _t++) Pe[_t] = arguments[_t + 2];
      Re.children = Pe;
    }
    return { $$typeof: H, type: C.type, key: _e, ref: Ue, props: Re, _owner: Ae };
  }, bt.createContext = function(C) {
    return C = { $$typeof: Me, _currentValue: C, _currentValue2: C, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, C.Provider = { $$typeof: Ge, _context: C }, C.Consumer = C;
  }, bt.createElement = $e, bt.createFactory = function(C) {
    var M = $e.bind(null, C);
    return M.type = C, M;
  }, bt.createRef = function() {
    return { current: null };
  }, bt.forwardRef = function(C) {
    return { $$typeof: S, render: C };
  }, bt.isValidElement = Lt, bt.lazy = function(C) {
    return { $$typeof: Z, _payload: { _status: -1, _result: C }, _init: vt };
  }, bt.memo = function(C, M) {
    return { $$typeof: he, type: C, compare: M === void 0 ? null : M };
  }, bt.startTransition = function(C) {
    var M = I.transition;
    I.transition = {};
    try {
      C();
    } finally {
      I.transition = M;
    }
  }, bt.unstable_act = oe, bt.useCallback = function(C, M) {
    return lt.current.useCallback(C, M);
  }, bt.useContext = function(C) {
    return lt.current.useContext(C);
  }, bt.useDebugValue = function() {
  }, bt.useDeferredValue = function(C) {
    return lt.current.useDeferredValue(C);
  }, bt.useEffect = function(C, M) {
    return lt.current.useEffect(C, M);
  }, bt.useId = function() {
    return lt.current.useId();
  }, bt.useImperativeHandle = function(C, M, ne) {
    return lt.current.useImperativeHandle(C, M, ne);
  }, bt.useInsertionEffect = function(C, M) {
    return lt.current.useInsertionEffect(C, M);
  }, bt.useLayoutEffect = function(C, M) {
    return lt.current.useLayoutEffect(C, M);
  }, bt.useMemo = function(C, M) {
    return lt.current.useMemo(C, M);
  }, bt.useReducer = function(C, M, ne) {
    return lt.current.useReducer(C, M, ne);
  }, bt.useRef = function(C) {
    return lt.current.useRef(C);
  }, bt.useState = function(C) {
    return lt.current.useState(C);
  }, bt.useSyncExternalStore = function(C, M, ne) {
    return lt.current.useSyncExternalStore(C, M, ne);
  }, bt.useTransition = function() {
    return lt.current.useTransition();
  }, bt.version = "18.3.1", bt;
}
var Zp = { exports: {} };
Zp.exports;
var eT;
function ak() {
  return eT || (eT = 1, function(H, Q) {
    var w = {};
    /**
     * @license React
     * react.development.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    w.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var Se = "18.3.1", be = Symbol.for("react.element"), Ge = Symbol.for("react.portal"), Me = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), We = Symbol.for("react.profiler"), he = Symbol.for("react.provider"), Z = Symbol.for("react.context"), ae = Symbol.for("react.forward_ref"), F = Symbol.for("react.suspense"), ee = Symbol.for("react.suspense_list"), q = Symbol.for("react.memo"), fe = Symbol.for("react.lazy"), ue = Symbol.for("react.offscreen"), mn = Symbol.iterator, jt = "@@iterator";
      function st(h) {
        if (h === null || typeof h != "object")
          return null;
        var R = mn && h[mn] || h[jt];
        return typeof R == "function" ? R : null;
      }
      var Qe = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, Ot = {
        transition: null
      }, Oe = {
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
      }, $e = {}, En = null;
      function Lt(h) {
        En = h;
      }
      $e.setExtraStackFrame = function(h) {
        En = h;
      }, $e.getCurrentStack = null, $e.getStackAddendum = function() {
        var h = "";
        En && (h += En);
        var R = $e.getCurrentStack;
        return R && (h += R() || ""), h;
      };
      var ln = !1, Vt = !1, gt = !1, Ye = !1, Nt = !1, vt = {
        ReactCurrentDispatcher: Qe,
        ReactCurrentBatchConfig: Ot,
        ReactCurrentOwner: ft
      };
      vt.ReactDebugCurrentFrame = $e, vt.ReactCurrentActQueue = Oe;
      function lt(h) {
        {
          for (var R = arguments.length, z = new Array(R > 1 ? R - 1 : 0), P = 1; P < R; P++)
            z[P - 1] = arguments[P];
          Ce("warn", h, z);
        }
      }
      function I(h) {
        {
          for (var R = arguments.length, z = new Array(R > 1 ? R - 1 : 0), P = 1; P < R; P++)
            z[P - 1] = arguments[P];
          Ce("error", h, z);
        }
      }
      function Ce(h, R, z) {
        {
          var P = vt.ReactDebugCurrentFrame, re = P.getStackAddendum();
          re !== "" && (R += "%s", z = z.concat([re]));
          var we = z.map(function(me) {
            return String(me);
          });
          we.unshift("Warning: " + R), Function.prototype.apply.call(console[h], console, we);
        }
      }
      var oe = {};
      function C(h, R) {
        {
          var z = h.constructor, P = z && (z.displayName || z.name) || "ReactClass", re = P + "." + R;
          if (oe[re])
            return;
          I("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", R, P), oe[re] = !0;
        }
      }
      var M = {
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
        enqueueForceUpdate: function(h, R, z) {
          C(h, "forceUpdate");
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
        enqueueReplaceState: function(h, R, z, P) {
          C(h, "replaceState");
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
        enqueueSetState: function(h, R, z, P) {
          C(h, "setState");
        }
      }, ne = Object.assign, Re = {};
      Object.freeze(Re);
      function _e(h, R, z) {
        this.props = h, this.context = R, this.refs = Re, this.updater = z || M;
      }
      _e.prototype.isReactComponent = {}, _e.prototype.setState = function(h, R) {
        if (typeof h != "object" && typeof h != "function" && h != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, h, R, "setState");
      }, _e.prototype.forceUpdate = function(h) {
        this.updater.enqueueForceUpdate(this, h, "forceUpdate");
      };
      {
        var Ue = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, Ae = function(h, R) {
          Object.defineProperty(_e.prototype, h, {
            get: function() {
              lt("%s(...) is deprecated in plain JavaScript React classes. %s", R[0], R[1]);
            }
          });
        };
        for (var Pe in Ue)
          Ue.hasOwnProperty(Pe) && Ae(Pe, Ue[Pe]);
      }
      function nt() {
      }
      nt.prototype = _e.prototype;
      function _t(h, R, z) {
        this.props = h, this.context = R, this.refs = Re, this.updater = z || M;
      }
      var Cn = _t.prototype = new nt();
      Cn.constructor = _t, ne(Cn, _e.prototype), Cn.isPureReactComponent = !0;
      function Yn() {
        var h = {
          current: null
        };
        return Object.seal(h), h;
      }
      var In = Array.isArray;
      function Tn(h) {
        return In(h);
      }
      function Bt(h) {
        {
          var R = typeof Symbol == "function" && Symbol.toStringTag, z = R && h[Symbol.toStringTag] || h.constructor.name || "Object";
          return z;
        }
      }
      function sn(h) {
        try {
          return zn(h), !1;
        } catch {
          return !0;
        }
      }
      function zn(h) {
        return "" + h;
      }
      function ca(h) {
        if (sn(h))
          return I("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Bt(h)), zn(h);
      }
      function qa(h, R, z) {
        var P = h.displayName;
        if (P)
          return P;
        var re = R.displayName || R.name || "";
        return re !== "" ? z + "(" + re + ")" : z;
      }
      function Dr(h) {
        return h.displayName || "Context";
      }
      function Qn(h) {
        if (h == null)
          return null;
        if (typeof h.tag == "number" && I("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof h == "function")
          return h.displayName || h.name || null;
        if (typeof h == "string")
          return h;
        switch (h) {
          case Me:
            return "Fragment";
          case Ge:
            return "Portal";
          case We:
            return "Profiler";
          case S:
            return "StrictMode";
          case F:
            return "Suspense";
          case ee:
            return "SuspenseList";
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case Z:
              var R = h;
              return Dr(R) + ".Consumer";
            case he:
              var z = h;
              return Dr(z._context) + ".Provider";
            case ae:
              return qa(h, h.render, "ForwardRef");
            case q:
              var P = h.displayName || null;
              return P !== null ? P : Qn(h.type) || "Memo";
            case fe: {
              var re = h, we = re._payload, me = re._init;
              try {
                return Qn(me(we));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var Kn = Object.prototype.hasOwnProperty, Jn = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, Rr, Ga, Un;
      Un = {};
      function ur(h) {
        if (Kn.call(h, "ref")) {
          var R = Object.getOwnPropertyDescriptor(h, "ref").get;
          if (R && R.isReactWarning)
            return !1;
        }
        return h.ref !== void 0;
      }
      function Ir(h) {
        if (Kn.call(h, "key")) {
          var R = Object.getOwnPropertyDescriptor(h, "key").get;
          if (R && R.isReactWarning)
            return !1;
        }
        return h.key !== void 0;
      }
      function Li(h, R) {
        var z = function() {
          Rr || (Rr = !0, I("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", R));
        };
        z.isReactWarning = !0, Object.defineProperty(h, "key", {
          get: z,
          configurable: !0
        });
      }
      function fa(h, R) {
        var z = function() {
          Ga || (Ga = !0, I("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", R));
        };
        z.isReactWarning = !0, Object.defineProperty(h, "ref", {
          get: z,
          configurable: !0
        });
      }
      function ie(h) {
        if (typeof h.ref == "string" && ft.current && h.__self && ft.current.stateNode !== h.__self) {
          var R = Qn(ft.current.type);
          Un[R] || (I('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', R, h.ref), Un[R] = !0);
        }
      }
      var Ve = function(h, R, z, P, re, we, me) {
        var Xe = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: be,
          // Built-in properties that belong on the element
          type: h,
          key: R,
          ref: z,
          props: me,
          // Record the component responsible for creating this element.
          _owner: we
        };
        return Xe._store = {}, Object.defineProperty(Xe._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(Xe, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: P
        }), Object.defineProperty(Xe, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: re
        }), Object.freeze && (Object.freeze(Xe.props), Object.freeze(Xe)), Xe;
      };
      function ct(h, R, z) {
        var P, re = {}, we = null, me = null, Xe = null, pt = null;
        if (R != null) {
          ur(R) && (me = R.ref, ie(R)), Ir(R) && (ca(R.key), we = "" + R.key), Xe = R.__self === void 0 ? null : R.__self, pt = R.__source === void 0 ? null : R.__source;
          for (P in R)
            Kn.call(R, P) && !Jn.hasOwnProperty(P) && (re[P] = R[P]);
        }
        var $t = arguments.length - 2;
        if ($t === 1)
          re.children = z;
        else if ($t > 1) {
          for (var Xt = Array($t), Kt = 0; Kt < $t; Kt++)
            Xt[Kt] = arguments[Kt + 2];
          Object.freeze && Object.freeze(Xt), re.children = Xt;
        }
        if (h && h.defaultProps) {
          var ut = h.defaultProps;
          for (P in ut)
            re[P] === void 0 && (re[P] = ut[P]);
        }
        if (we || me) {
          var nn = typeof h == "function" ? h.displayName || h.name || "Unknown" : h;
          we && Li(re, nn), me && fa(re, nn);
        }
        return Ve(h, we, me, Xe, pt, ft.current, re);
      }
      function Ft(h, R) {
        var z = Ve(h.type, R, h.ref, h._self, h._source, h._owner, h.props);
        return z;
      }
      function cn(h, R, z) {
        if (h == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + h + ".");
        var P, re = ne({}, h.props), we = h.key, me = h.ref, Xe = h._self, pt = h._source, $t = h._owner;
        if (R != null) {
          ur(R) && (me = R.ref, $t = ft.current), Ir(R) && (ca(R.key), we = "" + R.key);
          var Xt;
          h.type && h.type.defaultProps && (Xt = h.type.defaultProps);
          for (P in R)
            Kn.call(R, P) && !Jn.hasOwnProperty(P) && (R[P] === void 0 && Xt !== void 0 ? re[P] = Xt[P] : re[P] = R[P]);
        }
        var Kt = arguments.length - 2;
        if (Kt === 1)
          re.children = z;
        else if (Kt > 1) {
          for (var ut = Array(Kt), nn = 0; nn < Kt; nn++)
            ut[nn] = arguments[nn + 2];
          re.children = ut;
        }
        return Ve(h.type, we, me, Xe, pt, $t, re);
      }
      function fn(h) {
        return typeof h == "object" && h !== null && h.$$typeof === be;
      }
      var dn = ".", Zn = ":";
      function un(h) {
        var R = /[=:]/g, z = {
          "=": "=0",
          ":": "=2"
        }, P = h.replace(R, function(re) {
          return z[re];
        });
        return "$" + P;
      }
      var qt = !1, Ht = /\/+/g;
      function da(h) {
        return h.replace(Ht, "$&/");
      }
      function xa(h, R) {
        return typeof h == "object" && h !== null && h.key != null ? (ca(h.key), un("" + h.key)) : R.toString(36);
      }
      function ka(h, R, z, P, re) {
        var we = typeof h;
        (we === "undefined" || we === "boolean") && (h = null);
        var me = !1;
        if (h === null)
          me = !0;
        else
          switch (we) {
            case "string":
            case "number":
              me = !0;
              break;
            case "object":
              switch (h.$$typeof) {
                case be:
                case Ge:
                  me = !0;
              }
          }
        if (me) {
          var Xe = h, pt = re(Xe), $t = P === "" ? dn + xa(Xe, 0) : P;
          if (Tn(pt)) {
            var Xt = "";
            $t != null && (Xt = da($t) + "/"), ka(pt, R, Xt, "", function(Jf) {
              return Jf;
            });
          } else pt != null && (fn(pt) && (pt.key && (!Xe || Xe.key !== pt.key) && ca(pt.key), pt = Ft(
            pt,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            z + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (pt.key && (!Xe || Xe.key !== pt.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              da("" + pt.key) + "/"
            ) : "") + $t
          )), R.push(pt));
          return 1;
        }
        var Kt, ut, nn = 0, kn = P === "" ? dn : P + Zn;
        if (Tn(h))
          for (var Zl = 0; Zl < h.length; Zl++)
            Kt = h[Zl], ut = kn + xa(Kt, Zl), nn += ka(Kt, R, z, ut, re);
        else {
          var Xo = st(h);
          if (typeof Xo == "function") {
            var Vi = h;
            Xo === Vi.entries && (qt || lt("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), qt = !0);
            for (var eu = Xo.call(Vi), Ko, Kf = 0; !(Ko = eu.next()).done; )
              Kt = Ko.value, ut = kn + xa(Kt, Kf++), nn += ka(Kt, R, z, ut, re);
          } else if (we === "object") {
            var sc = String(h);
            throw new Error("Objects are not valid as a React child (found: " + (sc === "[object Object]" ? "object with keys {" + Object.keys(h).join(", ") + "}" : sc) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return nn;
      }
      function Ni(h, R, z) {
        if (h == null)
          return h;
        var P = [], re = 0;
        return ka(h, P, "", "", function(we) {
          return R.call(z, we, re++);
        }), P;
      }
      function Il(h) {
        var R = 0;
        return Ni(h, function() {
          R++;
        }), R;
      }
      function Ql(h, R, z) {
        Ni(h, function() {
          R.apply(this, arguments);
        }, z);
      }
      function Mi(h) {
        return Ni(h, function(R) {
          return R;
        }) || [];
      }
      function Wl(h) {
        if (!fn(h))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return h;
      }
      function si(h) {
        var R = {
          $$typeof: Z,
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
        R.Provider = {
          $$typeof: he,
          _context: R
        };
        var z = !1, P = !1, re = !1;
        {
          var we = {
            $$typeof: Z,
            _context: R
          };
          Object.defineProperties(we, {
            Provider: {
              get: function() {
                return P || (P = !0, I("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), R.Provider;
              },
              set: function(me) {
                R.Provider = me;
              }
            },
            _currentValue: {
              get: function() {
                return R._currentValue;
              },
              set: function(me) {
                R._currentValue = me;
              }
            },
            _currentValue2: {
              get: function() {
                return R._currentValue2;
              },
              set: function(me) {
                R._currentValue2 = me;
              }
            },
            _threadCount: {
              get: function() {
                return R._threadCount;
              },
              set: function(me) {
                R._threadCount = me;
              }
            },
            Consumer: {
              get: function() {
                return z || (z = !0, I("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), R.Consumer;
              }
            },
            displayName: {
              get: function() {
                return R.displayName;
              },
              set: function(me) {
                re || (lt("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", me), re = !0);
              }
            }
          }), R.Consumer = we;
        }
        return R._currentRenderer = null, R._currentRenderer2 = null, R;
      }
      var pa = -1, or = 0, va = 1, Qr = 2;
      function ci(h) {
        if (h._status === pa) {
          var R = h._result, z = R();
          if (z.then(function(we) {
            if (h._status === or || h._status === pa) {
              var me = h;
              me._status = va, me._result = we;
            }
          }, function(we) {
            if (h._status === or || h._status === pa) {
              var me = h;
              me._status = Qr, me._result = we;
            }
          }), h._status === pa) {
            var P = h;
            P._status = or, P._result = z;
          }
        }
        if (h._status === va) {
          var re = h._result;
          return re === void 0 && I(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, re), "default" in re || I(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, re), re.default;
        } else
          throw h._result;
      }
      function fi(h) {
        var R = {
          // We use these fields to store the result.
          _status: pa,
          _result: h
        }, z = {
          $$typeof: fe,
          _payload: R,
          _init: ci
        };
        {
          var P, re;
          Object.defineProperties(z, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return P;
              },
              set: function(we) {
                I("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), P = we, Object.defineProperty(z, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return re;
              },
              set: function(we) {
                I("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), re = we, Object.defineProperty(z, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return z;
      }
      function zi(h) {
        h != null && h.$$typeof === q ? I("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof h != "function" ? I("forwardRef requires a render function but was given %s.", h === null ? "null" : typeof h) : h.length !== 0 && h.length !== 2 && I("forwardRef render functions accept exactly two parameters: props and ref. %s", h.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), h != null && (h.defaultProps != null || h.propTypes != null) && I("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var R = {
          $$typeof: ae,
          render: h
        };
        {
          var z;
          Object.defineProperty(R, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return z;
            },
            set: function(P) {
              z = P, !h.name && !h.displayName && (h.displayName = P);
            }
          });
        }
        return R;
      }
      var T;
      T = Symbol.for("react.module.reference");
      function W(h) {
        return !!(typeof h == "string" || typeof h == "function" || h === Me || h === We || Nt || h === S || h === F || h === ee || Ye || h === ue || ln || Vt || gt || typeof h == "object" && h !== null && (h.$$typeof === fe || h.$$typeof === q || h.$$typeof === he || h.$$typeof === Z || h.$$typeof === ae || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        h.$$typeof === T || h.getModuleId !== void 0));
      }
      function ce(h, R) {
        W(h) || I("memo: The first argument must be a component. Instead received: %s", h === null ? "null" : typeof h);
        var z = {
          $$typeof: q,
          type: h,
          compare: R === void 0 ? null : R
        };
        {
          var P;
          Object.defineProperty(z, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return P;
            },
            set: function(re) {
              P = re, !h.name && !h.displayName && (h.displayName = re);
            }
          });
        }
        return z;
      }
      function pe() {
        var h = Qe.current;
        return h === null && I(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), h;
      }
      function ht(h) {
        var R = pe();
        if (h._context !== void 0) {
          var z = h._context;
          z.Consumer === h ? I("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : z.Provider === h && I("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return R.useContext(h);
      }
      function et(h) {
        var R = pe();
        return R.useState(h);
      }
      function St(h, R, z) {
        var P = pe();
        return P.useReducer(h, R, z);
      }
      function dt(h) {
        var R = pe();
        return R.useRef(h);
      }
      function xn(h, R) {
        var z = pe();
        return z.useEffect(h, R);
      }
      function on(h, R) {
        var z = pe();
        return z.useInsertionEffect(h, R);
      }
      function pn(h, R) {
        var z = pe();
        return z.useLayoutEffect(h, R);
      }
      function Tr(h, R) {
        var z = pe();
        return z.useCallback(h, R);
      }
      function Xa(h, R) {
        var z = pe();
        return z.useMemo(h, R);
      }
      function Pt(h, R, z) {
        var P = pe();
        return P.useImperativeHandle(h, R, z);
      }
      function yn(h, R) {
        {
          var z = pe();
          return z.useDebugValue(h, R);
        }
      }
      function at() {
        var h = pe();
        return h.useTransition();
      }
      function di(h) {
        var R = pe();
        return R.useDeferredValue(h);
      }
      function Ui() {
        var h = pe();
        return h.useId();
      }
      function ic(h, R, z) {
        var P = pe();
        return P.useSyncExternalStore(h, R, z);
      }
      var Ai = 0, ol, Wr, Yo, Or, Io, lc, uc;
      function ji() {
      }
      ji.__reactDisabledLog = !0;
      function sl() {
        {
          if (Ai === 0) {
            ol = console.log, Wr = console.info, Yo = console.warn, Or = console.error, Io = console.group, lc = console.groupCollapsed, uc = console.groupEnd;
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
              log: ne({}, h, {
                value: ol
              }),
              info: ne({}, h, {
                value: Wr
              }),
              warn: ne({}, h, {
                value: Yo
              }),
              error: ne({}, h, {
                value: Or
              }),
              group: ne({}, h, {
                value: Io
              }),
              groupCollapsed: ne({}, h, {
                value: lc
              }),
              groupEnd: ne({}, h, {
                value: uc
              })
            });
          }
          Ai < 0 && I("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var pi = vt.ReactCurrentDispatcher, cl;
      function Fu(h, R, z) {
        {
          if (cl === void 0)
            try {
              throw Error();
            } catch (re) {
              var P = re.stack.trim().match(/\n( *(at )?)/);
              cl = P && P[1] || "";
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
      function fl(h, R) {
        if (!h || Fi)
          return "";
        {
          var z = ql.get(h);
          if (z !== void 0)
            return z;
        }
        var P;
        Fi = !0;
        var re = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var we;
        we = pi.current, pi.current = null, sl();
        try {
          if (R) {
            var me = function() {
              throw Error();
            };
            if (Object.defineProperty(me.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(me, []);
              } catch (kn) {
                P = kn;
              }
              Reflect.construct(h, [], me);
            } else {
              try {
                me.call();
              } catch (kn) {
                P = kn;
              }
              h.call(me.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (kn) {
              P = kn;
            }
            h();
          }
        } catch (kn) {
          if (kn && P && typeof kn.stack == "string") {
            for (var Xe = kn.stack.split(`
`), pt = P.stack.split(`
`), $t = Xe.length - 1, Xt = pt.length - 1; $t >= 1 && Xt >= 0 && Xe[$t] !== pt[Xt]; )
              Xt--;
            for (; $t >= 1 && Xt >= 0; $t--, Xt--)
              if (Xe[$t] !== pt[Xt]) {
                if ($t !== 1 || Xt !== 1)
                  do
                    if ($t--, Xt--, Xt < 0 || Xe[$t] !== pt[Xt]) {
                      var Kt = `
` + Xe[$t].replace(" at new ", " at ");
                      return h.displayName && Kt.includes("<anonymous>") && (Kt = Kt.replace("<anonymous>", h.displayName)), typeof h == "function" && ql.set(h, Kt), Kt;
                    }
                  while ($t >= 1 && Xt >= 0);
                break;
              }
          }
        } finally {
          Fi = !1, pi.current = we, qr(), Error.prepareStackTrace = re;
        }
        var ut = h ? h.displayName || h.name : "", nn = ut ? Fu(ut) : "";
        return typeof h == "function" && ql.set(h, nn), nn;
      }
      function Qo(h, R, z) {
        return fl(h, !1);
      }
      function Wo(h) {
        var R = h.prototype;
        return !!(R && R.isReactComponent);
      }
      function wt(h, R, z) {
        if (h == null)
          return "";
        if (typeof h == "function")
          return fl(h, Wo(h));
        if (typeof h == "string")
          return Fu(h);
        switch (h) {
          case F:
            return Fu("Suspense");
          case ee:
            return Fu("SuspenseList");
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case ae:
              return Qo(h.render);
            case q:
              return wt(h.type, R, z);
            case fe: {
              var P = h, re = P._payload, we = P._init;
              try {
                return wt(we(re), R, z);
              } catch {
              }
            }
          }
        return "";
      }
      var qo = {}, Hu = vt.ReactDebugCurrentFrame;
      function xt(h) {
        if (h) {
          var R = h._owner, z = wt(h.type, h._source, R ? R.type : null);
          Hu.setExtraStackFrame(z);
        } else
          Hu.setExtraStackFrame(null);
      }
      function oc(h, R, z, P, re) {
        {
          var we = Function.call.bind(Kn);
          for (var me in h)
            if (we(h, me)) {
              var Xe = void 0;
              try {
                if (typeof h[me] != "function") {
                  var pt = Error((P || "React class") + ": " + z + " type `" + me + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof h[me] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw pt.name = "Invariant Violation", pt;
                }
                Xe = h[me](R, me, P, z, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch ($t) {
                Xe = $t;
              }
              Xe && !(Xe instanceof Error) && (xt(re), I("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", P || "React class", z, me, typeof Xe), xt(null)), Xe instanceof Error && !(Xe.message in qo) && (qo[Xe.message] = !0, xt(re), I("Failed %s type: %s", z, Xe.message), xt(null));
            }
        }
      }
      function vi(h) {
        if (h) {
          var R = h._owner, z = wt(h.type, h._source, R ? R.type : null);
          Lt(z);
        } else
          Lt(null);
      }
      var Ze;
      Ze = !1;
      function Xl() {
        if (ft.current) {
          var h = Qn(ft.current.type);
          if (h)
            return `

Check the render method of \`` + h + "`.";
        }
        return "";
      }
      function er(h) {
        if (h !== void 0) {
          var R = h.fileName.replace(/^.*[\\\/]/, ""), z = h.lineNumber;
          return `

Check your code at ` + R + ":" + z + ".";
        }
        return "";
      }
      function Gr(h) {
        return h != null ? er(h.__source) : "";
      }
      var Lr = {};
      function hi(h) {
        var R = Xl();
        if (!R) {
          var z = typeof h == "string" ? h : h.displayName || h.name;
          z && (R = `

Check the top-level render call using <` + z + ">.");
        }
        return R;
      }
      function bn(h, R) {
        if (!(!h._store || h._store.validated || h.key != null)) {
          h._store.validated = !0;
          var z = hi(R);
          if (!Lr[z]) {
            Lr[z] = !0;
            var P = "";
            h && h._owner && h._owner !== ft.current && (P = " It was passed a child from " + Qn(h._owner.type) + "."), vi(h), I('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', z, P), vi(null);
          }
        }
      }
      function Gt(h, R) {
        if (typeof h == "object") {
          if (Tn(h))
            for (var z = 0; z < h.length; z++) {
              var P = h[z];
              fn(P) && bn(P, R);
            }
          else if (fn(h))
            h._store && (h._store.validated = !0);
          else if (h) {
            var re = st(h);
            if (typeof re == "function" && re !== h.entries)
              for (var we = re.call(h), me; !(me = we.next()).done; )
                fn(me.value) && bn(me.value, R);
          }
        }
      }
      function Ka(h) {
        {
          var R = h.type;
          if (R == null || typeof R == "string")
            return;
          var z;
          if (typeof R == "function")
            z = R.propTypes;
          else if (typeof R == "object" && (R.$$typeof === ae || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          R.$$typeof === q))
            z = R.propTypes;
          else
            return;
          if (z) {
            var P = Qn(R);
            oc(z, h.props, "prop", P, h);
          } else if (R.PropTypes !== void 0 && !Ze) {
            Ze = !0;
            var re = Qn(R);
            I("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", re || "Unknown");
          }
          typeof R.getDefaultProps == "function" && !R.getDefaultProps.isReactClassApproved && I("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Da(h) {
        {
          for (var R = Object.keys(h.props), z = 0; z < R.length; z++) {
            var P = R[z];
            if (P !== "children" && P !== "key") {
              vi(h), I("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", P), vi(null);
              break;
            }
          }
          h.ref !== null && (vi(h), I("Invalid attribute `ref` supplied to `React.Fragment`."), vi(null));
        }
      }
      function br(h, R, z) {
        var P = W(h);
        if (!P) {
          var re = "";
          (h === void 0 || typeof h == "object" && h !== null && Object.keys(h).length === 0) && (re += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var we = Gr(R);
          we ? re += we : re += Xl();
          var me;
          h === null ? me = "null" : Tn(h) ? me = "array" : h !== void 0 && h.$$typeof === be ? (me = "<" + (Qn(h.type) || "Unknown") + " />", re = " Did you accidentally export a JSX literal instead of a component?") : me = typeof h, I("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", me, re);
        }
        var Xe = ct.apply(this, arguments);
        if (Xe == null)
          return Xe;
        if (P)
          for (var pt = 2; pt < arguments.length; pt++)
            Gt(arguments[pt], h);
        return h === Me ? Da(Xe) : Ka(Xe), Xe;
      }
      var Nr = !1;
      function Xf(h) {
        var R = br.bind(null, h);
        return R.type = h, Nr || (Nr = !0, lt("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(R, "type", {
          enumerable: !1,
          get: function() {
            return lt("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: h
            }), h;
          }
        }), R;
      }
      function Pu(h, R, z) {
        for (var P = cn.apply(this, arguments), re = 2; re < arguments.length; re++)
          Gt(arguments[re], P.type);
        return Ka(P), P;
      }
      function Kl(h, R) {
        var z = Ot.transition;
        Ot.transition = {};
        var P = Ot.transition;
        Ot.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          h();
        } finally {
          if (Ot.transition = z, z === null && P._updatedFibers) {
            var re = P._updatedFibers.size;
            re > 10 && lt("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), P._updatedFibers.clear();
          }
        }
      }
      var Vu = !1, Bu = null;
      function Jl(h) {
        if (Bu === null)
          try {
            var R = ("require" + Math.random()).slice(0, 7), z = H && H[R];
            Bu = z.call(H, "timers").setImmediate;
          } catch {
            Bu = function(re) {
              Vu === !1 && (Vu = !0, typeof MessageChannel > "u" && I("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var we = new MessageChannel();
              we.port1.onmessage = re, we.port2.postMessage(void 0);
            };
          }
        return Bu(h);
      }
      var Oa = 0, La = !1;
      function dl(h) {
        {
          var R = Oa;
          Oa++, Oe.current === null && (Oe.current = []);
          var z = Oe.isBatchingLegacy, P;
          try {
            if (Oe.isBatchingLegacy = !0, P = h(), !z && Oe.didScheduleLegacyUpdate) {
              var re = Oe.current;
              re !== null && (Oe.didScheduleLegacyUpdate = !1, Pi(re));
            }
          } catch (ut) {
            throw Hi(R), ut;
          } finally {
            Oe.isBatchingLegacy = z;
          }
          if (P !== null && typeof P == "object" && typeof P.then == "function") {
            var we = P, me = !1, Xe = {
              then: function(ut, nn) {
                me = !0, we.then(function(kn) {
                  Hi(R), Oa === 0 ? $u(kn, ut, nn) : ut(kn);
                }, function(kn) {
                  Hi(R), nn(kn);
                });
              }
            };
            return !La && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              me || (La = !0, I("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), Xe;
          } else {
            var pt = P;
            if (Hi(R), Oa === 0) {
              var $t = Oe.current;
              $t !== null && (Pi($t), Oe.current = null);
              var Xt = {
                then: function(ut, nn) {
                  Oe.current === null ? (Oe.current = [], $u(pt, ut, nn)) : ut(pt);
                }
              };
              return Xt;
            } else {
              var Kt = {
                then: function(ut, nn) {
                  ut(pt);
                }
              };
              return Kt;
            }
          }
        }
      }
      function Hi(h) {
        h !== Oa - 1 && I("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Oa = h;
      }
      function $u(h, R, z) {
        {
          var P = Oe.current;
          if (P !== null)
            try {
              Pi(P), Jl(function() {
                P.length === 0 ? (Oe.current = null, R(h)) : $u(h, R, z);
              });
            } catch (re) {
              z(re);
            }
          else
            R(h);
        }
      }
      var pl = !1;
      function Pi(h) {
        if (!pl) {
          pl = !0;
          var R = 0;
          try {
            for (; R < h.length; R++) {
              var z = h[R];
              do
                z = z(!0);
              while (z !== null);
            }
            h.length = 0;
          } catch (P) {
            throw h = h.slice(R + 1), P;
          } finally {
            pl = !1;
          }
        }
      }
      var Yu = br, Go = Pu, Na = Xf, Iu = {
        map: Ni,
        forEach: Ql,
        count: Il,
        toArray: Mi,
        only: Wl
      };
      Q.Children = Iu, Q.Component = _e, Q.Fragment = Me, Q.Profiler = We, Q.PureComponent = _t, Q.StrictMode = S, Q.Suspense = F, Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = vt, Q.act = dl, Q.cloneElement = Go, Q.createContext = si, Q.createElement = Yu, Q.createFactory = Na, Q.createRef = Yn, Q.forwardRef = zi, Q.isValidElement = fn, Q.lazy = fi, Q.memo = ce, Q.startTransition = Kl, Q.unstable_act = dl, Q.useCallback = Tr, Q.useContext = ht, Q.useDebugValue = yn, Q.useDeferredValue = di, Q.useEffect = xn, Q.useId = Ui, Q.useImperativeHandle = Pt, Q.useInsertionEffect = on, Q.useLayoutEffect = pn, Q.useMemo = Xa, Q.useReducer = St, Q.useRef = dt, Q.useState = et, Q.useSyncExternalStore = ic, Q.useTransition = at, Q.version = Se, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Zp, Zp.exports)), Zp.exports;
}
var ik = {};
ik.NODE_ENV === "production" ? hE.exports = rk() : hE.exports = ak();
var At = hE.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tT;
function lk() {
  if (tT) return Kp;
  tT = 1;
  var H = At, Q = Symbol.for("react.element"), w = Symbol.for("react.fragment"), Se = Object.prototype.hasOwnProperty, be = H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Ge = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Me(S, We, he) {
    var Z, ae = {}, F = null, ee = null;
    he !== void 0 && (F = "" + he), We.key !== void 0 && (F = "" + We.key), We.ref !== void 0 && (ee = We.ref);
    for (Z in We) Se.call(We, Z) && !Ge.hasOwnProperty(Z) && (ae[Z] = We[Z]);
    if (S && S.defaultProps) for (Z in We = S.defaultProps, We) ae[Z] === void 0 && (ae[Z] = We[Z]);
    return { $$typeof: Q, type: S, key: F, ref: ee, props: ae, _owner: be.current };
  }
  return Kp.Fragment = w, Kp.jsx = Me, Kp.jsxs = Me, Kp;
}
var Jp = {}, nT;
function uk() {
  if (nT) return Jp;
  nT = 1;
  var H = {};
  /**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  return H.NODE_ENV !== "production" && function() {
    var Q = At, w = Symbol.for("react.element"), Se = Symbol.for("react.portal"), be = Symbol.for("react.fragment"), Ge = Symbol.for("react.strict_mode"), Me = Symbol.for("react.profiler"), S = Symbol.for("react.provider"), We = Symbol.for("react.context"), he = Symbol.for("react.forward_ref"), Z = Symbol.for("react.suspense"), ae = Symbol.for("react.suspense_list"), F = Symbol.for("react.memo"), ee = Symbol.for("react.lazy"), q = Symbol.for("react.offscreen"), fe = Symbol.iterator, ue = "@@iterator";
    function mn(T) {
      if (T === null || typeof T != "object")
        return null;
      var W = fe && T[fe] || T[ue];
      return typeof W == "function" ? W : null;
    }
    var jt = Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function st(T) {
      {
        for (var W = arguments.length, ce = new Array(W > 1 ? W - 1 : 0), pe = 1; pe < W; pe++)
          ce[pe - 1] = arguments[pe];
        Qe("error", T, ce);
      }
    }
    function Qe(T, W, ce) {
      {
        var pe = jt.ReactDebugCurrentFrame, ht = pe.getStackAddendum();
        ht !== "" && (W += "%s", ce = ce.concat([ht]));
        var et = ce.map(function(St) {
          return String(St);
        });
        et.unshift("Warning: " + W), Function.prototype.apply.call(console[T], console, et);
      }
    }
    var Ot = !1, Oe = !1, ft = !1, $e = !1, En = !1, Lt;
    Lt = Symbol.for("react.module.reference");
    function ln(T) {
      return !!(typeof T == "string" || typeof T == "function" || T === be || T === Me || En || T === Ge || T === Z || T === ae || $e || T === q || Ot || Oe || ft || typeof T == "object" && T !== null && (T.$$typeof === ee || T.$$typeof === F || T.$$typeof === S || T.$$typeof === We || T.$$typeof === he || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      T.$$typeof === Lt || T.getModuleId !== void 0));
    }
    function Vt(T, W, ce) {
      var pe = T.displayName;
      if (pe)
        return pe;
      var ht = W.displayName || W.name || "";
      return ht !== "" ? ce + "(" + ht + ")" : ce;
    }
    function gt(T) {
      return T.displayName || "Context";
    }
    function Ye(T) {
      if (T == null)
        return null;
      if (typeof T.tag == "number" && st("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof T == "function")
        return T.displayName || T.name || null;
      if (typeof T == "string")
        return T;
      switch (T) {
        case be:
          return "Fragment";
        case Se:
          return "Portal";
        case Me:
          return "Profiler";
        case Ge:
          return "StrictMode";
        case Z:
          return "Suspense";
        case ae:
          return "SuspenseList";
      }
      if (typeof T == "object")
        switch (T.$$typeof) {
          case We:
            var W = T;
            return gt(W) + ".Consumer";
          case S:
            var ce = T;
            return gt(ce._context) + ".Provider";
          case he:
            return Vt(T, T.render, "ForwardRef");
          case F:
            var pe = T.displayName || null;
            return pe !== null ? pe : Ye(T.type) || "Memo";
          case ee: {
            var ht = T, et = ht._payload, St = ht._init;
            try {
              return Ye(St(et));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Nt = Object.assign, vt = 0, lt, I, Ce, oe, C, M, ne;
    function Re() {
    }
    Re.__reactDisabledLog = !0;
    function _e() {
      {
        if (vt === 0) {
          lt = console.log, I = console.info, Ce = console.warn, oe = console.error, C = console.group, M = console.groupCollapsed, ne = console.groupEnd;
          var T = {
            configurable: !0,
            enumerable: !0,
            value: Re,
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
        vt++;
      }
    }
    function Ue() {
      {
        if (vt--, vt === 0) {
          var T = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Nt({}, T, {
              value: lt
            }),
            info: Nt({}, T, {
              value: I
            }),
            warn: Nt({}, T, {
              value: Ce
            }),
            error: Nt({}, T, {
              value: oe
            }),
            group: Nt({}, T, {
              value: C
            }),
            groupCollapsed: Nt({}, T, {
              value: M
            }),
            groupEnd: Nt({}, T, {
              value: ne
            })
          });
        }
        vt < 0 && st("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Ae = jt.ReactCurrentDispatcher, Pe;
    function nt(T, W, ce) {
      {
        if (Pe === void 0)
          try {
            throw Error();
          } catch (ht) {
            var pe = ht.stack.trim().match(/\n( *(at )?)/);
            Pe = pe && pe[1] || "";
          }
        return `
` + Pe + T;
      }
    }
    var _t = !1, Cn;
    {
      var Yn = typeof WeakMap == "function" ? WeakMap : Map;
      Cn = new Yn();
    }
    function In(T, W) {
      if (!T || _t)
        return "";
      {
        var ce = Cn.get(T);
        if (ce !== void 0)
          return ce;
      }
      var pe;
      _t = !0;
      var ht = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var et;
      et = Ae.current, Ae.current = null, _e();
      try {
        if (W) {
          var St = function() {
            throw Error();
          };
          if (Object.defineProperty(St.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(St, []);
            } catch (yn) {
              pe = yn;
            }
            Reflect.construct(T, [], St);
          } else {
            try {
              St.call();
            } catch (yn) {
              pe = yn;
            }
            T.call(St.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (yn) {
            pe = yn;
          }
          T();
        }
      } catch (yn) {
        if (yn && pe && typeof yn.stack == "string") {
          for (var dt = yn.stack.split(`
`), xn = pe.stack.split(`
`), on = dt.length - 1, pn = xn.length - 1; on >= 1 && pn >= 0 && dt[on] !== xn[pn]; )
            pn--;
          for (; on >= 1 && pn >= 0; on--, pn--)
            if (dt[on] !== xn[pn]) {
              if (on !== 1 || pn !== 1)
                do
                  if (on--, pn--, pn < 0 || dt[on] !== xn[pn]) {
                    var Tr = `
` + dt[on].replace(" at new ", " at ");
                    return T.displayName && Tr.includes("<anonymous>") && (Tr = Tr.replace("<anonymous>", T.displayName)), typeof T == "function" && Cn.set(T, Tr), Tr;
                  }
                while (on >= 1 && pn >= 0);
              break;
            }
        }
      } finally {
        _t = !1, Ae.current = et, Ue(), Error.prepareStackTrace = ht;
      }
      var Xa = T ? T.displayName || T.name : "", Pt = Xa ? nt(Xa) : "";
      return typeof T == "function" && Cn.set(T, Pt), Pt;
    }
    function Tn(T, W, ce) {
      return In(T, !1);
    }
    function Bt(T) {
      var W = T.prototype;
      return !!(W && W.isReactComponent);
    }
    function sn(T, W, ce) {
      if (T == null)
        return "";
      if (typeof T == "function")
        return In(T, Bt(T));
      if (typeof T == "string")
        return nt(T);
      switch (T) {
        case Z:
          return nt("Suspense");
        case ae:
          return nt("SuspenseList");
      }
      if (typeof T == "object")
        switch (T.$$typeof) {
          case he:
            return Tn(T.render);
          case F:
            return sn(T.type, W, ce);
          case ee: {
            var pe = T, ht = pe._payload, et = pe._init;
            try {
              return sn(et(ht), W, ce);
            } catch {
            }
          }
        }
      return "";
    }
    var zn = Object.prototype.hasOwnProperty, ca = {}, qa = jt.ReactDebugCurrentFrame;
    function Dr(T) {
      if (T) {
        var W = T._owner, ce = sn(T.type, T._source, W ? W.type : null);
        qa.setExtraStackFrame(ce);
      } else
        qa.setExtraStackFrame(null);
    }
    function Qn(T, W, ce, pe, ht) {
      {
        var et = Function.call.bind(zn);
        for (var St in T)
          if (et(T, St)) {
            var dt = void 0;
            try {
              if (typeof T[St] != "function") {
                var xn = Error((pe || "React class") + ": " + ce + " type `" + St + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof T[St] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw xn.name = "Invariant Violation", xn;
              }
              dt = T[St](W, St, pe, ce, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (on) {
              dt = on;
            }
            dt && !(dt instanceof Error) && (Dr(ht), st("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", pe || "React class", ce, St, typeof dt), Dr(null)), dt instanceof Error && !(dt.message in ca) && (ca[dt.message] = !0, Dr(ht), st("Failed %s type: %s", ce, dt.message), Dr(null));
          }
      }
    }
    var Kn = Array.isArray;
    function Jn(T) {
      return Kn(T);
    }
    function Rr(T) {
      {
        var W = typeof Symbol == "function" && Symbol.toStringTag, ce = W && T[Symbol.toStringTag] || T.constructor.name || "Object";
        return ce;
      }
    }
    function Ga(T) {
      try {
        return Un(T), !1;
      } catch {
        return !0;
      }
    }
    function Un(T) {
      return "" + T;
    }
    function ur(T) {
      if (Ga(T))
        return st("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Rr(T)), Un(T);
    }
    var Ir = jt.ReactCurrentOwner, Li = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, fa, ie;
    function Ve(T) {
      if (zn.call(T, "ref")) {
        var W = Object.getOwnPropertyDescriptor(T, "ref").get;
        if (W && W.isReactWarning)
          return !1;
      }
      return T.ref !== void 0;
    }
    function ct(T) {
      if (zn.call(T, "key")) {
        var W = Object.getOwnPropertyDescriptor(T, "key").get;
        if (W && W.isReactWarning)
          return !1;
      }
      return T.key !== void 0;
    }
    function Ft(T, W) {
      typeof T.ref == "string" && Ir.current;
    }
    function cn(T, W) {
      {
        var ce = function() {
          fa || (fa = !0, st("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", W));
        };
        ce.isReactWarning = !0, Object.defineProperty(T, "key", {
          get: ce,
          configurable: !0
        });
      }
    }
    function fn(T, W) {
      {
        var ce = function() {
          ie || (ie = !0, st("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", W));
        };
        ce.isReactWarning = !0, Object.defineProperty(T, "ref", {
          get: ce,
          configurable: !0
        });
      }
    }
    var dn = function(T, W, ce, pe, ht, et, St) {
      var dt = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: w,
        // Built-in properties that belong on the element
        type: T,
        key: W,
        ref: ce,
        props: St,
        // Record the component responsible for creating this element.
        _owner: et
      };
      return dt._store = {}, Object.defineProperty(dt._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(dt, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: pe
      }), Object.defineProperty(dt, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ht
      }), Object.freeze && (Object.freeze(dt.props), Object.freeze(dt)), dt;
    };
    function Zn(T, W, ce, pe, ht) {
      {
        var et, St = {}, dt = null, xn = null;
        ce !== void 0 && (ur(ce), dt = "" + ce), ct(W) && (ur(W.key), dt = "" + W.key), Ve(W) && (xn = W.ref, Ft(W, ht));
        for (et in W)
          zn.call(W, et) && !Li.hasOwnProperty(et) && (St[et] = W[et]);
        if (T && T.defaultProps) {
          var on = T.defaultProps;
          for (et in on)
            St[et] === void 0 && (St[et] = on[et]);
        }
        if (dt || xn) {
          var pn = typeof T == "function" ? T.displayName || T.name || "Unknown" : T;
          dt && cn(St, pn), xn && fn(St, pn);
        }
        return dn(T, dt, xn, ht, pe, Ir.current, St);
      }
    }
    var un = jt.ReactCurrentOwner, qt = jt.ReactDebugCurrentFrame;
    function Ht(T) {
      if (T) {
        var W = T._owner, ce = sn(T.type, T._source, W ? W.type : null);
        qt.setExtraStackFrame(ce);
      } else
        qt.setExtraStackFrame(null);
    }
    var da;
    da = !1;
    function xa(T) {
      return typeof T == "object" && T !== null && T.$$typeof === w;
    }
    function ka() {
      {
        if (un.current) {
          var T = Ye(un.current.type);
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
        var W = ka();
        if (!W) {
          var ce = typeof T == "string" ? T : T.displayName || T.name;
          ce && (W = `

Check the top-level render call using <` + ce + ">.");
        }
        return W;
      }
    }
    function Mi(T, W) {
      {
        if (!T._store || T._store.validated || T.key != null)
          return;
        T._store.validated = !0;
        var ce = Ql(W);
        if (Il[ce])
          return;
        Il[ce] = !0;
        var pe = "";
        T && T._owner && T._owner !== un.current && (pe = " It was passed a child from " + Ye(T._owner.type) + "."), Ht(T), st('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', ce, pe), Ht(null);
      }
    }
    function Wl(T, W) {
      {
        if (typeof T != "object")
          return;
        if (Jn(T))
          for (var ce = 0; ce < T.length; ce++) {
            var pe = T[ce];
            xa(pe) && Mi(pe, W);
          }
        else if (xa(T))
          T._store && (T._store.validated = !0);
        else if (T) {
          var ht = mn(T);
          if (typeof ht == "function" && ht !== T.entries)
            for (var et = ht.call(T), St; !(St = et.next()).done; )
              xa(St.value) && Mi(St.value, W);
        }
      }
    }
    function si(T) {
      {
        var W = T.type;
        if (W == null || typeof W == "string")
          return;
        var ce;
        if (typeof W == "function")
          ce = W.propTypes;
        else if (typeof W == "object" && (W.$$typeof === he || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        W.$$typeof === F))
          ce = W.propTypes;
        else
          return;
        if (ce) {
          var pe = Ye(W);
          Qn(ce, T.props, "prop", pe, T);
        } else if (W.PropTypes !== void 0 && !da) {
          da = !0;
          var ht = Ye(W);
          st("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ht || "Unknown");
        }
        typeof W.getDefaultProps == "function" && !W.getDefaultProps.isReactClassApproved && st("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function pa(T) {
      {
        for (var W = Object.keys(T.props), ce = 0; ce < W.length; ce++) {
          var pe = W[ce];
          if (pe !== "children" && pe !== "key") {
            Ht(T), st("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", pe), Ht(null);
            break;
          }
        }
        T.ref !== null && (Ht(T), st("Invalid attribute `ref` supplied to `React.Fragment`."), Ht(null));
      }
    }
    var or = {};
    function va(T, W, ce, pe, ht, et) {
      {
        var St = ln(T);
        if (!St) {
          var dt = "";
          (T === void 0 || typeof T == "object" && T !== null && Object.keys(T).length === 0) && (dt += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var xn = Ni();
          xn ? dt += xn : dt += ka();
          var on;
          T === null ? on = "null" : Jn(T) ? on = "array" : T !== void 0 && T.$$typeof === w ? (on = "<" + (Ye(T.type) || "Unknown") + " />", dt = " Did you accidentally export a JSX literal instead of a component?") : on = typeof T, st("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", on, dt);
        }
        var pn = Zn(T, W, ce, ht, et);
        if (pn == null)
          return pn;
        if (St) {
          var Tr = W.children;
          if (Tr !== void 0)
            if (pe)
              if (Jn(Tr)) {
                for (var Xa = 0; Xa < Tr.length; Xa++)
                  Wl(Tr[Xa], T);
                Object.freeze && Object.freeze(Tr);
              } else
                st("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Wl(Tr, T);
        }
        if (zn.call(W, "key")) {
          var Pt = Ye(T), yn = Object.keys(W).filter(function(Ui) {
            return Ui !== "key";
          }), at = yn.length > 0 ? "{key: someKey, " + yn.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!or[Pt + at]) {
            var di = yn.length > 0 ? "{" + yn.join(": ..., ") + ": ...}" : "{}";
            st(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, at, Pt, di, Pt), or[Pt + at] = !0;
          }
        }
        return T === be ? pa(pn) : si(pn), pn;
      }
    }
    function Qr(T, W, ce) {
      return va(T, W, ce, !0);
    }
    function ci(T, W, ce) {
      return va(T, W, ce, !1);
    }
    var fi = ci, zi = Qr;
    Jp.Fragment = be, Jp.jsx = fi, Jp.jsxs = zi;
  }(), Jp;
}
var ok = {};
ok.NODE_ENV === "production" ? vE.exports = lk() : vE.exports = uk();
var Be = vE.exports, mE = { exports: {} }, Qa = {}, $m = { exports: {} }, cE = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rT;
function sk() {
  return rT || (rT = 1, function(H) {
    function Q(I, Ce) {
      var oe = I.length;
      I.push(Ce);
      e: for (; 0 < oe; ) {
        var C = oe - 1 >>> 1, M = I[C];
        if (0 < be(M, Ce)) I[C] = Ce, I[oe] = M, oe = C;
        else break e;
      }
    }
    function w(I) {
      return I.length === 0 ? null : I[0];
    }
    function Se(I) {
      if (I.length === 0) return null;
      var Ce = I[0], oe = I.pop();
      if (oe !== Ce) {
        I[0] = oe;
        e: for (var C = 0, M = I.length, ne = M >>> 1; C < ne; ) {
          var Re = 2 * (C + 1) - 1, _e = I[Re], Ue = Re + 1, Ae = I[Ue];
          if (0 > be(_e, oe)) Ue < M && 0 > be(Ae, _e) ? (I[C] = Ae, I[Ue] = oe, C = Ue) : (I[C] = _e, I[Re] = oe, C = Re);
          else if (Ue < M && 0 > be(Ae, oe)) I[C] = Ae, I[Ue] = oe, C = Ue;
          else break e;
        }
      }
      return Ce;
    }
    function be(I, Ce) {
      var oe = I.sortIndex - Ce.sortIndex;
      return oe !== 0 ? oe : I.id - Ce.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var Ge = performance;
      H.unstable_now = function() {
        return Ge.now();
      };
    } else {
      var Me = Date, S = Me.now();
      H.unstable_now = function() {
        return Me.now() - S;
      };
    }
    var We = [], he = [], Z = 1, ae = null, F = 3, ee = !1, q = !1, fe = !1, ue = typeof setTimeout == "function" ? setTimeout : null, mn = typeof clearTimeout == "function" ? clearTimeout : null, jt = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function st(I) {
      for (var Ce = w(he); Ce !== null; ) {
        if (Ce.callback === null) Se(he);
        else if (Ce.startTime <= I) Se(he), Ce.sortIndex = Ce.expirationTime, Q(We, Ce);
        else break;
        Ce = w(he);
      }
    }
    function Qe(I) {
      if (fe = !1, st(I), !q) if (w(We) !== null) q = !0, vt(Ot);
      else {
        var Ce = w(he);
        Ce !== null && lt(Qe, Ce.startTime - I);
      }
    }
    function Ot(I, Ce) {
      q = !1, fe && (fe = !1, mn($e), $e = -1), ee = !0;
      var oe = F;
      try {
        for (st(Ce), ae = w(We); ae !== null && (!(ae.expirationTime > Ce) || I && !ln()); ) {
          var C = ae.callback;
          if (typeof C == "function") {
            ae.callback = null, F = ae.priorityLevel;
            var M = C(ae.expirationTime <= Ce);
            Ce = H.unstable_now(), typeof M == "function" ? ae.callback = M : ae === w(We) && Se(We), st(Ce);
          } else Se(We);
          ae = w(We);
        }
        if (ae !== null) var ne = !0;
        else {
          var Re = w(he);
          Re !== null && lt(Qe, Re.startTime - Ce), ne = !1;
        }
        return ne;
      } finally {
        ae = null, F = oe, ee = !1;
      }
    }
    var Oe = !1, ft = null, $e = -1, En = 5, Lt = -1;
    function ln() {
      return !(H.unstable_now() - Lt < En);
    }
    function Vt() {
      if (ft !== null) {
        var I = H.unstable_now();
        Lt = I;
        var Ce = !0;
        try {
          Ce = ft(!0, I);
        } finally {
          Ce ? gt() : (Oe = !1, ft = null);
        }
      } else Oe = !1;
    }
    var gt;
    if (typeof jt == "function") gt = function() {
      jt(Vt);
    };
    else if (typeof MessageChannel < "u") {
      var Ye = new MessageChannel(), Nt = Ye.port2;
      Ye.port1.onmessage = Vt, gt = function() {
        Nt.postMessage(null);
      };
    } else gt = function() {
      ue(Vt, 0);
    };
    function vt(I) {
      ft = I, Oe || (Oe = !0, gt());
    }
    function lt(I, Ce) {
      $e = ue(function() {
        I(H.unstable_now());
      }, Ce);
    }
    H.unstable_IdlePriority = 5, H.unstable_ImmediatePriority = 1, H.unstable_LowPriority = 4, H.unstable_NormalPriority = 3, H.unstable_Profiling = null, H.unstable_UserBlockingPriority = 2, H.unstable_cancelCallback = function(I) {
      I.callback = null;
    }, H.unstable_continueExecution = function() {
      q || ee || (q = !0, vt(Ot));
    }, H.unstable_forceFrameRate = function(I) {
      0 > I || 125 < I ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : En = 0 < I ? Math.floor(1e3 / I) : 5;
    }, H.unstable_getCurrentPriorityLevel = function() {
      return F;
    }, H.unstable_getFirstCallbackNode = function() {
      return w(We);
    }, H.unstable_next = function(I) {
      switch (F) {
        case 1:
        case 2:
        case 3:
          var Ce = 3;
          break;
        default:
          Ce = F;
      }
      var oe = F;
      F = Ce;
      try {
        return I();
      } finally {
        F = oe;
      }
    }, H.unstable_pauseExecution = function() {
    }, H.unstable_requestPaint = function() {
    }, H.unstable_runWithPriority = function(I, Ce) {
      switch (I) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          I = 3;
      }
      var oe = F;
      F = I;
      try {
        return Ce();
      } finally {
        F = oe;
      }
    }, H.unstable_scheduleCallback = function(I, Ce, oe) {
      var C = H.unstable_now();
      switch (typeof oe == "object" && oe !== null ? (oe = oe.delay, oe = typeof oe == "number" && 0 < oe ? C + oe : C) : oe = C, I) {
        case 1:
          var M = -1;
          break;
        case 2:
          M = 250;
          break;
        case 5:
          M = 1073741823;
          break;
        case 4:
          M = 1e4;
          break;
        default:
          M = 5e3;
      }
      return M = oe + M, I = { id: Z++, callback: Ce, priorityLevel: I, startTime: oe, expirationTime: M, sortIndex: -1 }, oe > C ? (I.sortIndex = oe, Q(he, I), w(We) === null && I === w(he) && (fe ? (mn($e), $e = -1) : fe = !0, lt(Qe, oe - C))) : (I.sortIndex = M, Q(We, I), q || ee || (q = !0, vt(Ot))), I;
    }, H.unstable_shouldYield = ln, H.unstable_wrapCallback = function(I) {
      var Ce = F;
      return function() {
        var oe = F;
        F = Ce;
        try {
          return I.apply(this, arguments);
        } finally {
          F = oe;
        }
      };
    };
  }(cE)), cE;
}
var fE = {}, aT;
function ck() {
  return aT || (aT = 1, function(H) {
    var Q = {};
    /**
     * @license React
     * scheduler.development.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    Q.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var w = !1, Se = 5;
      function be(ie, Ve) {
        var ct = ie.length;
        ie.push(Ve), S(ie, Ve, ct);
      }
      function Ge(ie) {
        return ie.length === 0 ? null : ie[0];
      }
      function Me(ie) {
        if (ie.length === 0)
          return null;
        var Ve = ie[0], ct = ie.pop();
        return ct !== Ve && (ie[0] = ct, We(ie, ct, 0)), Ve;
      }
      function S(ie, Ve, ct) {
        for (var Ft = ct; Ft > 0; ) {
          var cn = Ft - 1 >>> 1, fn = ie[cn];
          if (he(fn, Ve) > 0)
            ie[cn] = Ve, ie[Ft] = fn, Ft = cn;
          else
            return;
        }
      }
      function We(ie, Ve, ct) {
        for (var Ft = ct, cn = ie.length, fn = cn >>> 1; Ft < fn; ) {
          var dn = (Ft + 1) * 2 - 1, Zn = ie[dn], un = dn + 1, qt = ie[un];
          if (he(Zn, Ve) < 0)
            un < cn && he(qt, Zn) < 0 ? (ie[Ft] = qt, ie[un] = Ve, Ft = un) : (ie[Ft] = Zn, ie[dn] = Ve, Ft = dn);
          else if (un < cn && he(qt, Ve) < 0)
            ie[Ft] = qt, ie[un] = Ve, Ft = un;
          else
            return;
        }
      }
      function he(ie, Ve) {
        var ct = ie.sortIndex - Ve.sortIndex;
        return ct !== 0 ? ct : ie.id - Ve.id;
      }
      var Z = 1, ae = 2, F = 3, ee = 4, q = 5;
      function fe(ie, Ve) {
      }
      var ue = typeof performance == "object" && typeof performance.now == "function";
      if (ue) {
        var mn = performance;
        H.unstable_now = function() {
          return mn.now();
        };
      } else {
        var jt = Date, st = jt.now();
        H.unstable_now = function() {
          return jt.now() - st;
        };
      }
      var Qe = 1073741823, Ot = -1, Oe = 250, ft = 5e3, $e = 1e4, En = Qe, Lt = [], ln = [], Vt = 1, gt = null, Ye = F, Nt = !1, vt = !1, lt = !1, I = typeof setTimeout == "function" ? setTimeout : null, Ce = typeof clearTimeout == "function" ? clearTimeout : null, oe = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function C(ie) {
        for (var Ve = Ge(ln); Ve !== null; ) {
          if (Ve.callback === null)
            Me(ln);
          else if (Ve.startTime <= ie)
            Me(ln), Ve.sortIndex = Ve.expirationTime, be(Lt, Ve);
          else
            return;
          Ve = Ge(ln);
        }
      }
      function M(ie) {
        if (lt = !1, C(ie), !vt)
          if (Ge(Lt) !== null)
            vt = !0, Un(ne);
          else {
            var Ve = Ge(ln);
            Ve !== null && ur(M, Ve.startTime - ie);
          }
      }
      function ne(ie, Ve) {
        vt = !1, lt && (lt = !1, Ir()), Nt = !0;
        var ct = Ye;
        try {
          var Ft;
          if (!w) return Re(ie, Ve);
        } finally {
          gt = null, Ye = ct, Nt = !1;
        }
      }
      function Re(ie, Ve) {
        var ct = Ve;
        for (C(ct), gt = Ge(Lt); gt !== null && !(gt.expirationTime > ct && (!ie || qa())); ) {
          var Ft = gt.callback;
          if (typeof Ft == "function") {
            gt.callback = null, Ye = gt.priorityLevel;
            var cn = gt.expirationTime <= ct, fn = Ft(cn);
            ct = H.unstable_now(), typeof fn == "function" ? gt.callback = fn : gt === Ge(Lt) && Me(Lt), C(ct);
          } else
            Me(Lt);
          gt = Ge(Lt);
        }
        if (gt !== null)
          return !0;
        var dn = Ge(ln);
        return dn !== null && ur(M, dn.startTime - ct), !1;
      }
      function _e(ie, Ve) {
        switch (ie) {
          case Z:
          case ae:
          case F:
          case ee:
          case q:
            break;
          default:
            ie = F;
        }
        var ct = Ye;
        Ye = ie;
        try {
          return Ve();
        } finally {
          Ye = ct;
        }
      }
      function Ue(ie) {
        var Ve;
        switch (Ye) {
          case Z:
          case ae:
          case F:
            Ve = F;
            break;
          default:
            Ve = Ye;
            break;
        }
        var ct = Ye;
        Ye = Ve;
        try {
          return ie();
        } finally {
          Ye = ct;
        }
      }
      function Ae(ie) {
        var Ve = Ye;
        return function() {
          var ct = Ye;
          Ye = Ve;
          try {
            return ie.apply(this, arguments);
          } finally {
            Ye = ct;
          }
        };
      }
      function Pe(ie, Ve, ct) {
        var Ft = H.unstable_now(), cn;
        if (typeof ct == "object" && ct !== null) {
          var fn = ct.delay;
          typeof fn == "number" && fn > 0 ? cn = Ft + fn : cn = Ft;
        } else
          cn = Ft;
        var dn;
        switch (ie) {
          case Z:
            dn = Ot;
            break;
          case ae:
            dn = Oe;
            break;
          case q:
            dn = En;
            break;
          case ee:
            dn = $e;
            break;
          case F:
          default:
            dn = ft;
            break;
        }
        var Zn = cn + dn, un = {
          id: Vt++,
          callback: Ve,
          priorityLevel: ie,
          startTime: cn,
          expirationTime: Zn,
          sortIndex: -1
        };
        return cn > Ft ? (un.sortIndex = cn, be(ln, un), Ge(Lt) === null && un === Ge(ln) && (lt ? Ir() : lt = !0, ur(M, cn - Ft))) : (un.sortIndex = Zn, be(Lt, un), !vt && !Nt && (vt = !0, Un(ne))), un;
      }
      function nt() {
      }
      function _t() {
        !vt && !Nt && (vt = !0, Un(ne));
      }
      function Cn() {
        return Ge(Lt);
      }
      function Yn(ie) {
        ie.callback = null;
      }
      function In() {
        return Ye;
      }
      var Tn = !1, Bt = null, sn = -1, zn = Se, ca = -1;
      function qa() {
        var ie = H.unstable_now() - ca;
        return !(ie < zn);
      }
      function Dr() {
      }
      function Qn(ie) {
        if (ie < 0 || ie > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        ie > 0 ? zn = Math.floor(1e3 / ie) : zn = Se;
      }
      var Kn = function() {
        if (Bt !== null) {
          var ie = H.unstable_now();
          ca = ie;
          var Ve = !0, ct = !0;
          try {
            ct = Bt(Ve, ie);
          } finally {
            ct ? Jn() : (Tn = !1, Bt = null);
          }
        } else
          Tn = !1;
      }, Jn;
      if (typeof oe == "function")
        Jn = function() {
          oe(Kn);
        };
      else if (typeof MessageChannel < "u") {
        var Rr = new MessageChannel(), Ga = Rr.port2;
        Rr.port1.onmessage = Kn, Jn = function() {
          Ga.postMessage(null);
        };
      } else
        Jn = function() {
          I(Kn, 0);
        };
      function Un(ie) {
        Bt = ie, Tn || (Tn = !0, Jn());
      }
      function ur(ie, Ve) {
        sn = I(function() {
          ie(H.unstable_now());
        }, Ve);
      }
      function Ir() {
        Ce(sn), sn = -1;
      }
      var Li = Dr, fa = null;
      H.unstable_IdlePriority = q, H.unstable_ImmediatePriority = Z, H.unstable_LowPriority = ee, H.unstable_NormalPriority = F, H.unstable_Profiling = fa, H.unstable_UserBlockingPriority = ae, H.unstable_cancelCallback = Yn, H.unstable_continueExecution = _t, H.unstable_forceFrameRate = Qn, H.unstable_getCurrentPriorityLevel = In, H.unstable_getFirstCallbackNode = Cn, H.unstable_next = Ue, H.unstable_pauseExecution = nt, H.unstable_requestPaint = Li, H.unstable_runWithPriority = _e, H.unstable_scheduleCallback = Pe, H.unstable_shouldYield = qa, H.unstable_wrapCallback = Ae, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(fE)), fE;
}
var iT;
function cT() {
  if (iT) return $m.exports;
  iT = 1;
  var H = {};
  return H.NODE_ENV === "production" ? $m.exports = sk() : $m.exports = ck(), $m.exports;
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
var lT;
function fk() {
  if (lT) return Qa;
  lT = 1;
  var H = At, Q = cT();
  function w(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, l = 1; l < arguments.length; l++) r += "&args[]=" + encodeURIComponent(arguments[l]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var Se = /* @__PURE__ */ new Set(), be = {};
  function Ge(n, r) {
    Me(n, r), Me(n + "Capture", r);
  }
  function Me(n, r) {
    for (be[n] = r, n = 0; n < r.length; n++) Se.add(r[n]);
  }
  var S = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), We = Object.prototype.hasOwnProperty, he = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Z = {}, ae = {};
  function F(n) {
    return We.call(ae, n) ? !0 : We.call(Z, n) ? !1 : he.test(n) ? ae[n] = !0 : (Z[n] = !0, !1);
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
  function q(n, r, l, o) {
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
  function fe(n, r, l, o, c, d, m) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = o, this.attributeNamespace = c, this.mustUseProperty = l, this.propertyName = n, this.type = r, this.sanitizeURL = d, this.removeEmptyString = m;
  }
  var ue = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    ue[n] = new fe(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    ue[r] = new fe(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    ue[n] = new fe(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    ue[n] = new fe(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    ue[n] = new fe(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    ue[n] = new fe(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    ue[n] = new fe(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    ue[n] = new fe(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    ue[n] = new fe(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var mn = /[\-:]([a-z])/g;
  function jt(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      mn,
      jt
    );
    ue[r] = new fe(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(mn, jt);
    ue[r] = new fe(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(mn, jt);
    ue[r] = new fe(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    ue[n] = new fe(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), ue.xlinkHref = new fe("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    ue[n] = new fe(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function st(n, r, l, o) {
    var c = ue.hasOwnProperty(r) ? ue[r] : null;
    (c !== null ? c.type !== 0 : o || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (q(r, l, c, o) && (l = null), o || c === null ? F(r) && (l === null ? n.removeAttribute(r) : n.setAttribute(r, "" + l)) : c.mustUseProperty ? n[c.propertyName] = l === null ? c.type === 3 ? !1 : "" : l : (r = c.attributeName, o = c.attributeNamespace, l === null ? n.removeAttribute(r) : (c = c.type, l = c === 3 || c === 4 && l === !0 ? "" : "" + l, o ? n.setAttributeNS(o, r, l) : n.setAttribute(r, l))));
  }
  var Qe = H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Ot = Symbol.for("react.element"), Oe = Symbol.for("react.portal"), ft = Symbol.for("react.fragment"), $e = Symbol.for("react.strict_mode"), En = Symbol.for("react.profiler"), Lt = Symbol.for("react.provider"), ln = Symbol.for("react.context"), Vt = Symbol.for("react.forward_ref"), gt = Symbol.for("react.suspense"), Ye = Symbol.for("react.suspense_list"), Nt = Symbol.for("react.memo"), vt = Symbol.for("react.lazy"), lt = Symbol.for("react.offscreen"), I = Symbol.iterator;
  function Ce(n) {
    return n === null || typeof n != "object" ? null : (n = I && n[I] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var oe = Object.assign, C;
  function M(n) {
    if (C === void 0) try {
      throw Error();
    } catch (l) {
      var r = l.stack.trim().match(/\n( *(at )?)/);
      C = r && r[1] || "";
    }
    return `
` + C + n;
  }
  var ne = !1;
  function Re(n, r) {
    if (!n || ne) return "";
    ne = !0;
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
        } catch (A) {
          var o = A;
        }
        Reflect.construct(n, [], r);
      } else {
        try {
          r.call();
        } catch (A) {
          o = A;
        }
        n.call(r.prototype);
      }
      else {
        try {
          throw Error();
        } catch (A) {
          o = A;
        }
        n();
      }
    } catch (A) {
      if (A && o && typeof A.stack == "string") {
        for (var c = A.stack.split(`
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
      ne = !1, Error.prepareStackTrace = l;
    }
    return (n = n ? n.displayName || n.name : "") ? M(n) : "";
  }
  function _e(n) {
    switch (n.tag) {
      case 5:
        return M(n.type);
      case 16:
        return M("Lazy");
      case 13:
        return M("Suspense");
      case 19:
        return M("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = Re(n.type, !1), n;
      case 11:
        return n = Re(n.type.render, !1), n;
      case 1:
        return n = Re(n.type, !0), n;
      default:
        return "";
    }
  }
  function Ue(n) {
    if (n == null) return null;
    if (typeof n == "function") return n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case ft:
        return "Fragment";
      case Oe:
        return "Portal";
      case En:
        return "Profiler";
      case $e:
        return "StrictMode";
      case gt:
        return "Suspense";
      case Ye:
        return "SuspenseList";
    }
    if (typeof n == "object") switch (n.$$typeof) {
      case ln:
        return (n.displayName || "Context") + ".Consumer";
      case Lt:
        return (n._context.displayName || "Context") + ".Provider";
      case Vt:
        var r = n.render;
        return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
      case Nt:
        return r = n.displayName || null, r !== null ? r : Ue(n.type) || "Memo";
      case vt:
        r = n._payload, n = n._init;
        try {
          return Ue(n(r));
        } catch {
        }
    }
    return null;
  }
  function Ae(n) {
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
        return Ue(r);
      case 8:
        return r === $e ? "StrictMode" : "Mode";
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
  function Pe(n) {
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
  function nt(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function _t(n) {
    var r = nt(n) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), o = "" + n[r];
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
  function Cn(n) {
    n._valueTracker || (n._valueTracker = _t(n));
  }
  function Yn(n) {
    if (!n) return !1;
    var r = n._valueTracker;
    if (!r) return !0;
    var l = r.getValue(), o = "";
    return n && (o = nt(n) ? n.checked ? "true" : "false" : n.value), n = o, n !== l ? (r.setValue(n), !0) : !1;
  }
  function In(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u") return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function Tn(n, r) {
    var l = r.checked;
    return oe({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: l ?? n._wrapperState.initialChecked });
  }
  function Bt(n, r) {
    var l = r.defaultValue == null ? "" : r.defaultValue, o = r.checked != null ? r.checked : r.defaultChecked;
    l = Pe(r.value != null ? r.value : l), n._wrapperState = { initialChecked: o, initialValue: l, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function sn(n, r) {
    r = r.checked, r != null && st(n, "checked", r, !1);
  }
  function zn(n, r) {
    sn(n, r);
    var l = Pe(r.value), o = r.type;
    if (l != null) o === "number" ? (l === 0 && n.value === "" || n.value != l) && (n.value = "" + l) : n.value !== "" + l && (n.value = "" + l);
    else if (o === "submit" || o === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? qa(n, r.type, l) : r.hasOwnProperty("defaultValue") && qa(n, r.type, Pe(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
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
    (r !== "number" || In(n.ownerDocument) !== n) && (l == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + l && (n.defaultValue = "" + l));
  }
  var Dr = Array.isArray;
  function Qn(n, r, l, o) {
    if (n = n.options, r) {
      r = {};
      for (var c = 0; c < l.length; c++) r["$" + l[c]] = !0;
      for (l = 0; l < n.length; l++) c = r.hasOwnProperty("$" + n[l].value), n[l].selected !== c && (n[l].selected = c), c && o && (n[l].defaultSelected = !0);
    } else {
      for (l = "" + Pe(l), r = null, c = 0; c < n.length; c++) {
        if (n[c].value === l) {
          n[c].selected = !0, o && (n[c].defaultSelected = !0);
          return;
        }
        r !== null || n[c].disabled || (r = n[c]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function Kn(n, r) {
    if (r.dangerouslySetInnerHTML != null) throw Error(w(91));
    return oe({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function Jn(n, r) {
    var l = r.value;
    if (l == null) {
      if (l = r.children, r = r.defaultValue, l != null) {
        if (r != null) throw Error(w(92));
        if (Dr(l)) {
          if (1 < l.length) throw Error(w(93));
          l = l[0];
        }
        r = l;
      }
      r == null && (r = ""), l = r;
    }
    n._wrapperState = { initialValue: Pe(l) };
  }
  function Rr(n, r) {
    var l = Pe(r.value), o = Pe(r.defaultValue);
    l != null && (l = "" + l, l !== n.value && (n.value = l), r.defaultValue == null && n.defaultValue !== l && (n.defaultValue = l)), o != null && (n.defaultValue = "" + o);
  }
  function Ga(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function Un(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function ur(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? Un(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
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
  var ie = {
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
  }, Ve = ["Webkit", "ms", "Moz", "O"];
  Object.keys(ie).forEach(function(n) {
    Ve.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), ie[r] = ie[n];
    });
  });
  function ct(n, r, l) {
    return r == null || typeof r == "boolean" || r === "" ? "" : l || typeof r != "number" || r === 0 || ie.hasOwnProperty(n) && ie[n] ? ("" + r).trim() : r + "px";
  }
  function Ft(n, r) {
    n = n.style;
    for (var l in r) if (r.hasOwnProperty(l)) {
      var o = l.indexOf("--") === 0, c = ct(l, r[l], o);
      l === "float" && (l = "cssFloat"), o ? n.setProperty(l, c) : n[l] = c;
    }
  }
  var cn = oe({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function fn(n, r) {
    if (r) {
      if (cn[n] && (r.children != null || r.dangerouslySetInnerHTML != null)) throw Error(w(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null) throw Error(w(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML)) throw Error(w(61));
      }
      if (r.style != null && typeof r.style != "object") throw Error(w(62));
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
  var Zn = null;
  function un(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var qt = null, Ht = null, da = null;
  function xa(n) {
    if (n = fs(n)) {
      if (typeof qt != "function") throw Error(w(280));
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
    if (l && typeof l != "function") throw Error(w(231, r, typeof l));
    return l;
  }
  var pa = !1;
  if (S) try {
    var or = {};
    Object.defineProperty(or, "passive", { get: function() {
      pa = !0;
    } }), window.addEventListener("test", or, or), window.removeEventListener("test", or, or);
  } catch {
    pa = !1;
  }
  function va(n, r, l, o, c, d, m, E, b) {
    var A = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(l, A);
    } catch (X) {
      this.onError(X);
    }
  }
  var Qr = !1, ci = null, fi = !1, zi = null, T = { onError: function(n) {
    Qr = !0, ci = n;
  } };
  function W(n, r, l, o, c, d, m, E, b) {
    Qr = !1, ci = null, va.apply(T, arguments);
  }
  function ce(n, r, l, o, c, d, m, E, b) {
    if (W.apply(this, arguments), Qr) {
      if (Qr) {
        var A = ci;
        Qr = !1, ci = null;
      } else throw Error(w(198));
      fi || (fi = !0, zi = A);
    }
  }
  function pe(n) {
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
  function ht(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null) return r.dehydrated;
    }
    return null;
  }
  function et(n) {
    if (pe(n) !== n) throw Error(w(188));
  }
  function St(n) {
    var r = n.alternate;
    if (!r) {
      if (r = pe(n), r === null) throw Error(w(188));
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
          if (d === l) return et(c), n;
          if (d === o) return et(c), r;
          d = d.sibling;
        }
        throw Error(w(188));
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
          if (!m) throw Error(w(189));
        }
      }
      if (l.alternate !== o) throw Error(w(190));
    }
    if (l.tag !== 3) throw Error(w(188));
    return l.stateNode.current === l ? n : r;
  }
  function dt(n) {
    return n = St(n), n !== null ? xn(n) : null;
  }
  function xn(n) {
    if (n.tag === 5 || n.tag === 6) return n;
    for (n = n.child; n !== null; ) {
      var r = xn(n);
      if (r !== null) return r;
      n = n.sibling;
    }
    return null;
  }
  var on = Q.unstable_scheduleCallback, pn = Q.unstable_cancelCallback, Tr = Q.unstable_shouldYield, Xa = Q.unstable_requestPaint, Pt = Q.unstable_now, yn = Q.unstable_getCurrentPriorityLevel, at = Q.unstable_ImmediatePriority, di = Q.unstable_UserBlockingPriority, Ui = Q.unstable_NormalPriority, ic = Q.unstable_LowPriority, Ai = Q.unstable_IdlePriority, ol = null, Wr = null;
  function Yo(n) {
    if (Wr && typeof Wr.onCommitFiberRoot == "function") try {
      Wr.onCommitFiberRoot(ol, n, void 0, (n.current.flags & 128) === 128);
    } catch {
    }
  }
  var Or = Math.clz32 ? Math.clz32 : uc, Io = Math.log, lc = Math.LN2;
  function uc(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (Io(n) / lc | 0) | 0;
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
  function Qo(n, r) {
    var l = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var o = n.eventTimes;
    for (n = n.expirationTimes; 0 < l; ) {
      var c = 31 - Or(l), d = 1 << c;
      r[c] = 0, o[c] = -1, n[c] = -1, l &= ~d;
    }
  }
  function Wo(n, r) {
    var l = n.entangledLanes |= r;
    for (n = n.entanglements; l; ) {
      var o = 31 - Or(l), c = 1 << o;
      c & r | n[o] & r && (n[o] |= r), l &= ~c;
    }
  }
  var wt = 0;
  function qo(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var Hu, xt, oc, vi, Ze, Xl = !1, er = [], Gr = null, Lr = null, hi = null, bn = /* @__PURE__ */ new Map(), Gt = /* @__PURE__ */ new Map(), Ka = [], Da = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
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
        bn.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Gt.delete(r.pointerId);
    }
  }
  function Nr(n, r, l, o, c, d) {
    return n === null || n.nativeEvent !== d ? (n = { blockedOn: r, domEventName: l, eventSystemFlags: o, nativeEvent: d, targetContainers: [c] }, r !== null && (r = fs(r), r !== null && xt(r)), n) : (n.eventSystemFlags |= o, r = n.targetContainers, c !== null && r.indexOf(c) === -1 && r.push(c), n);
  }
  function Xf(n, r, l, o, c) {
    switch (r) {
      case "focusin":
        return Gr = Nr(Gr, n, r, l, o, c), !0;
      case "dragenter":
        return Lr = Nr(Lr, n, r, l, o, c), !0;
      case "mouseover":
        return hi = Nr(hi, n, r, l, o, c), !0;
      case "pointerover":
        var d = c.pointerId;
        return bn.set(d, Nr(bn.get(d) || null, n, r, l, o, c)), !0;
      case "gotpointercapture":
        return d = c.pointerId, Gt.set(d, Nr(Gt.get(d) || null, n, r, l, o, c)), !0;
    }
    return !1;
  }
  function Pu(n) {
    var r = iu(n.target);
    if (r !== null) {
      var l = pe(r);
      if (l !== null) {
        if (r = l.tag, r === 13) {
          if (r = ht(l), r !== null) {
            n.blockedOn = r, Ze(n.priority, function() {
              oc(l);
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
        Zn = o, l.target.dispatchEvent(o), Zn = null;
      } else return r = fs(l), r !== null && xt(r), n.blockedOn = l, !1;
      r.shift();
    }
    return !0;
  }
  function Vu(n, r, l) {
    Kl(n) && l.delete(r);
  }
  function Bu() {
    Xl = !1, Gr !== null && Kl(Gr) && (Gr = null), Lr !== null && Kl(Lr) && (Lr = null), hi !== null && Kl(hi) && (hi = null), bn.forEach(Vu), Gt.forEach(Vu);
  }
  function Jl(n, r) {
    n.blockedOn === r && (n.blockedOn = null, Xl || (Xl = !0, Q.unstable_scheduleCallback(Q.unstable_NormalPriority, Bu)));
  }
  function Oa(n) {
    function r(c) {
      return Jl(c, n);
    }
    if (0 < er.length) {
      Jl(er[0], n);
      for (var l = 1; l < er.length; l++) {
        var o = er[l];
        o.blockedOn === n && (o.blockedOn = null);
      }
    }
    for (Gr !== null && Jl(Gr, n), Lr !== null && Jl(Lr, n), hi !== null && Jl(hi, n), bn.forEach(r), Gt.forEach(r), l = 0; l < Ka.length; l++) o = Ka[l], o.blockedOn === n && (o.blockedOn = null);
    for (; 0 < Ka.length && (l = Ka[0], l.blockedOn === null); ) Pu(l), l.blockedOn === null && Ka.shift();
  }
  var La = Qe.ReactCurrentBatchConfig, dl = !0;
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
      if (c === null) sd(n, r, o, Pi, l), br(n, o);
      else if (Xf(c, n, r, l, o)) o.stopPropagation();
      else if (br(n, o), r & 4 && -1 < Da.indexOf(n)) {
        for (; c !== null; ) {
          var d = fs(c);
          if (d !== null && Hu(d), d = Yu(n, r, l, o), d === null && sd(n, r, o, Pi, l), d === c) break;
          c = d;
        }
        c !== null && o.stopPropagation();
      } else sd(n, r, o, null, l);
    }
  }
  var Pi = null;
  function Yu(n, r, l, o) {
    if (Pi = null, n = un(o), n = iu(n), n !== null) if (r = pe(n), r === null) n = null;
    else if (l = r.tag, l === 13) {
      if (n = ht(r), n !== null) return n;
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
        switch (yn()) {
          case at:
            return 1;
          case di:
            return 4;
          case Ui:
          case ic:
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
  function R() {
    if (h) return h;
    var n, r = Iu, l = r.length, o, c = "value" in Na ? Na.value : Na.textContent, d = c.length;
    for (n = 0; n < l && r[n] === c[n]; n++) ;
    var m = l - n;
    for (o = 1; o <= m && r[l - o] === c[d - o]; o++) ;
    return h = c.slice(n, 1 < o ? 1 - o : void 0);
  }
  function z(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function P() {
    return !0;
  }
  function re() {
    return !1;
  }
  function we(n) {
    function r(l, o, c, d, m) {
      this._reactName = l, this._targetInst = c, this.type = o, this.nativeEvent = d, this.target = m, this.currentTarget = null;
      for (var E in n) n.hasOwnProperty(E) && (l = n[E], this[E] = l ? l(d) : d[E]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? P : re, this.isPropagationStopped = re, this;
    }
    return oe(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var l = this.nativeEvent;
      l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = P);
    }, stopPropagation: function() {
      var l = this.nativeEvent;
      l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = P);
    }, persist: function() {
    }, isPersistent: P }), r;
  }
  var me = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Xe = we(me), pt = oe({}, me, { view: 0, detail: 0 }), $t = we(pt), Xt, Kt, ut, nn = oe({}, pt, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Ja, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== ut && (ut && n.type === "mousemove" ? (Xt = n.screenX - ut.screenX, Kt = n.screenY - ut.screenY) : Kt = Xt = 0, ut = n), Xt);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : Kt;
  } }), kn = we(nn), Zl = oe({}, nn, { dataTransfer: 0 }), Xo = we(Zl), Vi = oe({}, pt, { relatedTarget: 0 }), eu = we(Vi), Ko = oe({}, me, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Kf = we(Ko), sc = oe({}, me, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), Jf = we(sc), ev = oe({}, me, { data: 0 }), cc = we(ev), tv = {
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
  }, nv = {
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
  }, rv = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Qm(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = rv[n]) ? !!r[n] : !1;
  }
  function Ja() {
    return Qm;
  }
  var Wm = oe({}, pt, { key: function(n) {
    if (n.key) {
      var r = tv[n.key] || n.key;
      if (r !== "Unidentified") return r;
    }
    return n.type === "keypress" ? (n = z(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? nv[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Ja, charCode: function(n) {
    return n.type === "keypress" ? z(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? z(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), Zf = we(Wm), ed = oe({}, nn, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), fc = we(ed), qm = oe({}, pt, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Ja }), dc = we(qm), av = oe({}, me, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Xr = we(av), Bi = oe({}, nn, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), An = we(Bi), $i = [9, 13, 27, 32], Jo = S && "CompositionEvent" in window, vl = null;
  S && "documentMode" in document && (vl = document.documentMode);
  var Gm = S && "TextEvent" in window && !vl, Qu = S && (!Jo || vl && 8 < vl && 11 >= vl), iv = " ", lv = !1;
  function pc(n, r) {
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
  function uv(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var Wu = !1;
  function Xm(n, r) {
    switch (n) {
      case "compositionend":
        return uv(r);
      case "keypress":
        return r.which !== 32 ? null : (lv = !0, iv);
      case "textInput":
        return n = r.data, n === iv && lv ? null : n;
      default:
        return null;
    }
  }
  function ov(n, r) {
    if (Wu) return n === "compositionend" || !Jo && pc(n, r) ? (n = R(), h = Iu = Na = null, Wu = !1, n) : null;
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
  function sv(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!Km[n.type] : r === "textarea";
  }
  function cv(n, r, l, o) {
    ka(o), r = os(r, "onChange"), 0 < r.length && (l = new Xe("onChange", "change", null, l, o), n.push({ event: l, listeners: r }));
  }
  var qu = null, mi = null;
  function td(n) {
    yc(n, 0);
  }
  function Zo(n) {
    var r = je(n);
    if (Yn(r)) return n;
  }
  function fv(n, r) {
    if (n === "change") return r;
  }
  var dv = !1;
  if (S) {
    var nd;
    if (S) {
      var rd = "oninput" in document;
      if (!rd) {
        var pv = document.createElement("div");
        pv.setAttribute("oninput", "return;"), rd = typeof pv.oninput == "function";
      }
      nd = rd;
    } else nd = !1;
    dv = nd && (!document.documentMode || 9 < document.documentMode);
  }
  function vv() {
    qu && (qu.detachEvent("onpropertychange", hv), mi = qu = null);
  }
  function hv(n) {
    if (n.propertyName === "value" && Zo(mi)) {
      var r = [];
      cv(r, mi, n, un(n)), Wl(td, r);
    }
  }
  function Jm(n, r, l) {
    n === "focusin" ? (vv(), qu = r, mi = l, qu.attachEvent("onpropertychange", hv)) : n === "focusout" && vv();
  }
  function Zm(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown") return Zo(mi);
  }
  function mv(n, r) {
    if (n === "click") return Zo(r);
  }
  function ey(n, r) {
    if (n === "input" || n === "change") return Zo(r);
  }
  function yv(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var Za = typeof Object.is == "function" ? Object.is : yv;
  function es(n, r) {
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
  function gv(n) {
    for (; n && n.firstChild; ) n = n.firstChild;
    return n;
  }
  function Sv(n, r) {
    var l = gv(n);
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
      l = gv(l);
    }
  }
  function vc(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? vc(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function hl() {
    for (var n = window, r = In(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var l = typeof r.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) n = r.contentWindow;
      else break;
      r = In(n.document);
    }
    return r;
  }
  function Gu(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function Ev(n) {
    var r = hl(), l = n.focusedElem, o = n.selectionRange;
    if (r !== l && l && l.ownerDocument && vc(l.ownerDocument.documentElement, l)) {
      if (o !== null && Gu(l)) {
        if (r = o.start, n = o.end, n === void 0 && (n = r), "selectionStart" in l) l.selectionStart = r, l.selectionEnd = Math.min(n, l.value.length);
        else if (n = (r = l.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var c = l.textContent.length, d = Math.min(o.start, c);
          o = o.end === void 0 ? d : Math.min(o.end, c), !n.extend && d > o && (c = o, o = d, d = c), c = Sv(l, d);
          var m = Sv(
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
  var Xu = S && "documentMode" in document && 11 >= document.documentMode, Ku = null, ad = null, ts = null, id = !1;
  function Cv(n, r, l) {
    var o = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    id || Ku == null || Ku !== In(o) || (o = Ku, "selectionStart" in o && Gu(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = { anchorNode: o.anchorNode, anchorOffset: o.anchorOffset, focusNode: o.focusNode, focusOffset: o.focusOffset }), ts && es(ts, o) || (ts = o, o = os(ad, "onSelect"), 0 < o.length && (r = new Xe("onSelect", "select", null, r, l), n.push({ event: r, listeners: o }), r.target = Ku)));
  }
  function ns(n, r) {
    var l = {};
    return l[n.toLowerCase()] = r.toLowerCase(), l["Webkit" + n] = "webkit" + r, l["Moz" + n] = "moz" + r, l;
  }
  var Ju = { animationend: ns("Animation", "AnimationEnd"), animationiteration: ns("Animation", "AnimationIteration"), animationstart: ns("Animation", "AnimationStart"), transitionend: ns("Transition", "TransitionEnd") }, hc = {}, _r = {};
  S && (_r = document.createElement("div").style, "AnimationEvent" in window || (delete Ju.animationend.animation, delete Ju.animationiteration.animation, delete Ju.animationstart.animation), "TransitionEvent" in window || delete Ju.transitionend.transition);
  function rs(n) {
    if (hc[n]) return hc[n];
    if (!Ju[n]) return n;
    var r = Ju[n], l;
    for (l in r) if (r.hasOwnProperty(l) && l in _r) return hc[n] = r[l];
    return n;
  }
  var Rv = rs("animationend"), Tv = rs("animationiteration"), bv = rs("animationstart"), _v = rs("transitionend"), wv = /* @__PURE__ */ new Map(), ld = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function yi(n, r) {
    wv.set(n, r), Ge(r, [n]);
  }
  for (var tu = 0; tu < ld.length; tu++) {
    var ud = ld[tu], as = ud.toLowerCase(), ty = ud[0].toUpperCase() + ud.slice(1);
    yi(as, "on" + ty);
  }
  yi(Rv, "onAnimationEnd"), yi(Tv, "onAnimationIteration"), yi(bv, "onAnimationStart"), yi("dblclick", "onDoubleClick"), yi("focusin", "onFocus"), yi("focusout", "onBlur"), yi(_v, "onTransitionEnd"), Me("onMouseEnter", ["mouseout", "mouseover"]), Me("onMouseLeave", ["mouseout", "mouseover"]), Me("onPointerEnter", ["pointerout", "pointerover"]), Me("onPointerLeave", ["pointerout", "pointerover"]), Ge("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Ge("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Ge("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Ge("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Ge("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Ge("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var is = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), ny = new Set("cancel close invalid load scroll toggle".split(" ").concat(is));
  function mc(n, r, l) {
    var o = n.type || "unknown-event";
    n.currentTarget = l, ce(o, r, void 0, n), n.currentTarget = null;
  }
  function yc(n, r) {
    r = (r & 4) !== 0;
    for (var l = 0; l < n.length; l++) {
      var o = n[l], c = o.event;
      o = o.listeners;
      e: {
        var d = void 0;
        if (r) for (var m = o.length - 1; 0 <= m; m--) {
          var E = o[m], b = E.instance, A = E.currentTarget;
          if (E = E.listener, b !== d && c.isPropagationStopped()) break e;
          mc(c, E, A), d = b;
        }
        else for (m = 0; m < o.length; m++) {
          if (E = o[m], b = E.instance, A = E.currentTarget, E = E.listener, b !== d && c.isPropagationStopped()) break e;
          mc(c, E, A), d = b;
        }
      }
    }
    if (fi) throw n = zi, fi = !1, zi = null, n;
  }
  function Yt(n, r) {
    var l = r[cd];
    l === void 0 && (l = r[cd] = /* @__PURE__ */ new Set());
    var o = n + "__bubble";
    l.has(o) || (od(r, n, 2, !1), l.add(o));
  }
  function ml(n, r, l) {
    var o = 0;
    r && (o |= 4), od(l, n, o, r);
  }
  var ls = "_reactListening" + Math.random().toString(36).slice(2);
  function us(n) {
    if (!n[ls]) {
      n[ls] = !0, Se.forEach(function(l) {
        l !== "selectionchange" && (ny.has(l) || ml(l, !1, n), ml(l, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[ls] || (r[ls] = !0, ml("selectionchange", !1, r));
    }
  }
  function od(n, r, l, o) {
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
  function sd(n, r, l, o, c) {
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
      var A = d, X = un(l), K = [];
      e: {
        var G = wv.get(n);
        if (G !== void 0) {
          var ye = Xe, xe = n;
          switch (n) {
            case "keypress":
              if (z(l) === 0) break e;
            case "keydown":
            case "keyup":
              ye = Zf;
              break;
            case "focusin":
              xe = "focus", ye = eu;
              break;
            case "focusout":
              xe = "blur", ye = eu;
              break;
            case "beforeblur":
            case "afterblur":
              ye = eu;
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
              ye = kn;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              ye = Xo;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              ye = dc;
              break;
            case Rv:
            case Tv:
            case bv:
              ye = Kf;
              break;
            case _v:
              ye = Xr;
              break;
            case "scroll":
              ye = $t;
              break;
            case "wheel":
              ye = An;
              break;
            case "copy":
            case "cut":
            case "paste":
              ye = Jf;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              ye = fc;
          }
          var Le = (r & 4) !== 0, Nn = !Le && n === "scroll", D = Le ? G !== null ? G + "Capture" : null : G;
          Le = [];
          for (var x = A, N; x !== null; ) {
            N = x;
            var te = N.stateNode;
            if (N.tag === 5 && te !== null && (N = te, D !== null && (te = si(x, D), te != null && Le.push(Zu(x, te, N)))), Nn) break;
            x = x.return;
          }
          0 < Le.length && (G = new ye(G, xe, null, l, X), K.push({ event: G, listeners: Le }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (G = n === "mouseover" || n === "pointerover", ye = n === "mouseout" || n === "pointerout", G && l !== Zn && (xe = l.relatedTarget || l.fromElement) && (iu(xe) || xe[Yi])) break e;
          if ((ye || G) && (G = X.window === X ? X : (G = X.ownerDocument) ? G.defaultView || G.parentWindow : window, ye ? (xe = l.relatedTarget || l.toElement, ye = A, xe = xe ? iu(xe) : null, xe !== null && (Nn = pe(xe), xe !== Nn || xe.tag !== 5 && xe.tag !== 6) && (xe = null)) : (ye = null, xe = A), ye !== xe)) {
            if (Le = kn, te = "onMouseLeave", D = "onMouseEnter", x = "mouse", (n === "pointerout" || n === "pointerover") && (Le = fc, te = "onPointerLeave", D = "onPointerEnter", x = "pointer"), Nn = ye == null ? G : je(ye), N = xe == null ? G : je(xe), G = new Le(te, x + "leave", ye, l, X), G.target = Nn, G.relatedTarget = N, te = null, iu(X) === A && (Le = new Le(D, x + "enter", xe, l, X), Le.target = N, Le.relatedTarget = Nn, te = Le), Nn = te, ye && xe) t: {
              for (Le = ye, D = xe, x = 0, N = Le; N; N = nu(N)) x++;
              for (N = 0, te = D; te; te = nu(te)) N++;
              for (; 0 < x - N; ) Le = nu(Le), x--;
              for (; 0 < N - x; ) D = nu(D), N--;
              for (; x--; ) {
                if (Le === D || D !== null && Le === D.alternate) break t;
                Le = nu(Le), D = nu(D);
              }
              Le = null;
            }
            else Le = null;
            ye !== null && gc(K, G, ye, Le, !1), xe !== null && Nn !== null && gc(K, Nn, xe, Le, !0);
          }
        }
        e: {
          if (G = A ? je(A) : window, ye = G.nodeName && G.nodeName.toLowerCase(), ye === "select" || ye === "input" && G.type === "file") var Ne = fv;
          else if (sv(G)) if (dv) Ne = ey;
          else {
            Ne = Zm;
            var ke = Jm;
          }
          else (ye = G.nodeName) && ye.toLowerCase() === "input" && (G.type === "checkbox" || G.type === "radio") && (Ne = mv);
          if (Ne && (Ne = Ne(n, A))) {
            cv(K, Ne, l, X);
            break e;
          }
          ke && ke(n, G, A), n === "focusout" && (ke = G._wrapperState) && ke.controlled && G.type === "number" && qa(G, "number", G.value);
        }
        switch (ke = A ? je(A) : window, n) {
          case "focusin":
            (sv(ke) || ke.contentEditable === "true") && (Ku = ke, ad = A, ts = null);
            break;
          case "focusout":
            ts = ad = Ku = null;
            break;
          case "mousedown":
            id = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            id = !1, Cv(K, l, X);
            break;
          case "selectionchange":
            if (Xu) break;
          case "keydown":
          case "keyup":
            Cv(K, l, X);
        }
        var He;
        if (Jo) e: {
          switch (n) {
            case "compositionstart":
              var Je = "onCompositionStart";
              break e;
            case "compositionend":
              Je = "onCompositionEnd";
              break e;
            case "compositionupdate":
              Je = "onCompositionUpdate";
              break e;
          }
          Je = void 0;
        }
        else Wu ? pc(n, l) && (Je = "onCompositionEnd") : n === "keydown" && l.keyCode === 229 && (Je = "onCompositionStart");
        Je && (Qu && l.locale !== "ko" && (Wu || Je !== "onCompositionStart" ? Je === "onCompositionEnd" && Wu && (He = R()) : (Na = X, Iu = "value" in Na ? Na.value : Na.textContent, Wu = !0)), ke = os(A, Je), 0 < ke.length && (Je = new cc(Je, n, null, l, X), K.push({ event: Je, listeners: ke }), He ? Je.data = He : (He = uv(l), He !== null && (Je.data = He)))), (He = Gm ? Xm(n, l) : ov(n, l)) && (A = os(A, "onBeforeInput"), 0 < A.length && (X = new cc("onBeforeInput", "beforeinput", null, l, X), K.push({ event: X, listeners: A }), X.data = He));
      }
      yc(K, r);
    });
  }
  function Zu(n, r, l) {
    return { instance: n, listener: r, currentTarget: l };
  }
  function os(n, r) {
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
  function gc(n, r, l, o, c) {
    for (var d = r._reactName, m = []; l !== null && l !== o; ) {
      var E = l, b = E.alternate, A = E.stateNode;
      if (b !== null && b === o) break;
      E.tag === 5 && A !== null && (E = A, c ? (b = si(l, d), b != null && m.unshift(Zu(l, b, E))) : c || (b = si(l, d), b != null && m.push(Zu(l, b, E)))), l = l.return;
    }
    m.length !== 0 && n.push({ event: r, listeners: m });
  }
  var ry = /\r\n?/g, xv = /\u0000|\uFFFD/g;
  function kv(n) {
    return (typeof n == "string" ? n : "" + n).replace(ry, `
`).replace(xv, "");
  }
  function Sc(n, r, l) {
    if (r = kv(r), kv(n) !== r && l) throw Error(w(425));
  }
  function Ec() {
  }
  var ru = null, ss = null;
  function au(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var Cc = typeof setTimeout == "function" ? setTimeout : void 0, Dv = typeof clearTimeout == "function" ? clearTimeout : void 0, Rc = typeof Promise == "function" ? Promise : void 0, ay = typeof queueMicrotask == "function" ? queueMicrotask : typeof Rc < "u" ? function(n) {
    return Rc.resolve(null).then(n).catch(eo);
  } : Cc;
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
  function Tc(n) {
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
  var no = Math.random().toString(36).slice(2), Ma = "__reactFiber$" + no, cs = "__reactProps$" + no, Yi = "__reactContainer$" + no, cd = "__reactEvents$" + no, fd = "__reactListeners$" + no, ro = "__reactHandles$" + no;
  function iu(n) {
    var r = n[Ma];
    if (r) return r;
    for (var l = n.parentNode; l; ) {
      if (r = l[Yi] || l[Ma]) {
        if (l = r.alternate, r.child !== null || l !== null && l.child !== null) for (n = Tc(n); n !== null; ) {
          if (l = n[Ma]) return l;
          n = Tc(n);
        }
        return r;
      }
      n = l, l = n.parentNode;
    }
    return null;
  }
  function fs(n) {
    return n = n[Ma] || n[Yi], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function je(n) {
    if (n.tag === 5 || n.tag === 6) return n.stateNode;
    throw Error(w(33));
  }
  function Ii(n) {
    return n[cs] || null;
  }
  var jn = [], Et = -1;
  function Kr(n) {
    return { current: n };
  }
  function Jt(n) {
    0 > Et || (n.current = jn[Et], jn[Et] = null, Et--);
  }
  function rn(n, r) {
    Et++, jn[Et] = n.current, n.current = r;
  }
  var mt = {}, _n = Kr(mt), Fn = Kr(!1), za = mt;
  function ha(n, r) {
    var l = n.type.contextTypes;
    if (!l) return mt;
    var o = n.stateNode;
    if (o && o.__reactInternalMemoizedUnmaskedChildContext === r) return o.__reactInternalMemoizedMaskedChildContext;
    var c = {}, d;
    for (d in l) c[d] = r[d];
    return o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = c), c;
  }
  function Hn(n) {
    return n = n.childContextTypes, n != null;
  }
  function gi() {
    Jt(Fn), Jt(_n);
  }
  function bc(n, r, l) {
    if (_n.current !== mt) throw Error(w(168));
    rn(_n, r), rn(Fn, l);
  }
  function Ov(n, r, l) {
    var o = n.stateNode;
    if (r = r.childContextTypes, typeof o.getChildContext != "function") return l;
    o = o.getChildContext();
    for (var c in o) if (!(c in r)) throw Error(w(108, Ae(n) || "Unknown", c));
    return oe({}, l, o);
  }
  function lu(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || mt, za = _n.current, rn(_n, n), rn(Fn, Fn.current), !0;
  }
  function Ua(n, r, l) {
    var o = n.stateNode;
    if (!o) throw Error(w(169));
    l ? (n = Ov(n, r, za), o.__reactInternalMemoizedMergedChildContext = n, Jt(Fn), Jt(_n), rn(_n, n)) : Jt(Fn), rn(Fn, l);
  }
  var ti = null, ds = !1, ps = !1;
  function yl(n) {
    ti === null ? ti = [n] : ti.push(n);
  }
  function dd(n) {
    ds = !0, yl(n);
  }
  function Mr() {
    if (!ps && ti !== null) {
      ps = !0;
      var n = 0, r = wt;
      try {
        var l = ti;
        for (wt = 1; n < l.length; n++) {
          var o = l[n];
          do
            o = o(!0);
          while (o !== null);
        }
        ti = null, ds = !1;
      } catch (c) {
        throw ti !== null && (ti = ti.slice(n + 1)), on(at, Mr), c;
      } finally {
        wt = r, ps = !1;
      }
    }
    return null;
  }
  var gl = [], Sl = 0, ao = null, El = 0, sr = [], Pn = 0, uu = null, zr = 1, Si = "";
  function Cl(n, r) {
    gl[Sl++] = El, gl[Sl++] = ao, ao = n, El = r;
  }
  function Lv(n, r, l) {
    sr[Pn++] = zr, sr[Pn++] = Si, sr[Pn++] = uu, uu = n;
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
  function pd(n) {
    n.return !== null && (Cl(n, 1), Lv(n, 1, 0));
  }
  function _c(n) {
    for (; n === ao; ) ao = gl[--Sl], gl[Sl] = null, El = gl[--Sl], gl[Sl] = null;
    for (; n === uu; ) uu = sr[--Pn], sr[Pn] = null, Si = sr[--Pn], sr[Pn] = null, zr = sr[--Pn], sr[Pn] = null;
  }
  var Jr = null, Zr = null, vn = !1, ni = null;
  function vd(n, r) {
    var l = Pa(5, null, null, 0);
    l.elementType = "DELETED", l.stateNode = r, l.return = n, r = n.deletions, r === null ? (n.deletions = [l], n.flags |= 16) : r.push(l);
  }
  function hd(n, r) {
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
  function md(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function yd(n) {
    if (vn) {
      var r = Zr;
      if (r) {
        var l = r;
        if (!hd(n, r)) {
          if (md(n)) throw Error(w(418));
          r = ei(l.nextSibling);
          var o = Jr;
          r && hd(n, r) ? vd(o, l) : (n.flags = n.flags & -4097 | 2, vn = !1, Jr = n);
        }
      } else {
        if (md(n)) throw Error(w(418));
        n.flags = n.flags & -4097 | 2, vn = !1, Jr = n;
      }
    }
  }
  function Nv(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; ) n = n.return;
    Jr = n;
  }
  function Dn(n) {
    if (n !== Jr) return !1;
    if (!vn) return Nv(n), vn = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !au(n.type, n.memoizedProps)), r && (r = Zr)) {
      if (md(n)) throw Mv(), Error(w(418));
      for (; r; ) vd(n, r), r = ei(r.nextSibling);
    }
    if (Nv(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(w(317));
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
  function Mv() {
    for (var n = Zr; n; ) n = ei(n.nextSibling);
  }
  function Qi() {
    Zr = Jr = null, vn = !1;
  }
  function vs(n) {
    ni === null ? ni = [n] : ni.push(n);
  }
  var ou = Qe.ReactCurrentBatchConfig;
  function hs(n, r, l) {
    if (n = l.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (l._owner) {
        if (l = l._owner, l) {
          if (l.tag !== 1) throw Error(w(309));
          var o = l.stateNode;
        }
        if (!o) throw Error(w(147, n));
        var c = o, d = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === d ? r.ref : (r = function(m) {
          var E = c.refs;
          m === null ? delete E[d] : E[d] = m;
        }, r._stringRef = d, r);
      }
      if (typeof n != "string") throw Error(w(284));
      if (!l._owner) throw Error(w(290, n));
    }
    return n;
  }
  function io(n, r) {
    throw n = Object.prototype.toString.call(r), Error(w(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function zv(n) {
    var r = n._init;
    return r(n._payload);
  }
  function Uv(n) {
    function r(D, x) {
      if (n) {
        var N = D.deletions;
        N === null ? (D.deletions = [x], D.flags |= 16) : N.push(x);
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
      return D = Nl(D, x), D.index = 0, D.sibling = null, D;
    }
    function d(D, x, N) {
      return D.index = N, n ? (N = D.alternate, N !== null ? (N = N.index, N < x ? (D.flags |= 2, x) : N) : (D.flags |= 2, x)) : (D.flags |= 1048576, x);
    }
    function m(D) {
      return n && D.alternate === null && (D.flags |= 2), D;
    }
    function E(D, x, N, te) {
      return x === null || x.tag !== 6 ? (x = _u(N, D.mode, te), x.return = D, x) : (x = c(x, N), x.return = D, x);
    }
    function b(D, x, N, te) {
      var Ne = N.type;
      return Ne === ft ? X(D, x, N.props.children, te, N.key) : x !== null && (x.elementType === Ne || typeof Ne == "object" && Ne !== null && Ne.$$typeof === vt && zv(Ne) === x.type) ? (te = c(x, N.props), te.ref = hs(D, x, N), te.return = D, te) : (te = ff(N.type, N.key, N.props, null, D.mode, te), te.ref = hs(D, x, N), te.return = D, te);
    }
    function A(D, x, N, te) {
      return x === null || x.tag !== 4 || x.stateNode.containerInfo !== N.containerInfo || x.stateNode.implementation !== N.implementation ? (x = qd(N, D.mode, te), x.return = D, x) : (x = c(x, N.children || []), x.return = D, x);
    }
    function X(D, x, N, te, Ne) {
      return x === null || x.tag !== 7 ? (x = Ml(N, D.mode, te, Ne), x.return = D, x) : (x = c(x, N), x.return = D, x);
    }
    function K(D, x, N) {
      if (typeof x == "string" && x !== "" || typeof x == "number") return x = _u("" + x, D.mode, N), x.return = D, x;
      if (typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case Ot:
            return N = ff(x.type, x.key, x.props, null, D.mode, N), N.ref = hs(D, null, x), N.return = D, N;
          case Oe:
            return x = qd(x, D.mode, N), x.return = D, x;
          case vt:
            var te = x._init;
            return K(D, te(x._payload), N);
        }
        if (Dr(x) || Ce(x)) return x = Ml(x, D.mode, N, null), x.return = D, x;
        io(D, x);
      }
      return null;
    }
    function G(D, x, N, te) {
      var Ne = x !== null ? x.key : null;
      if (typeof N == "string" && N !== "" || typeof N == "number") return Ne !== null ? null : E(D, x, "" + N, te);
      if (typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case Ot:
            return N.key === Ne ? b(D, x, N, te) : null;
          case Oe:
            return N.key === Ne ? A(D, x, N, te) : null;
          case vt:
            return Ne = N._init, G(
              D,
              x,
              Ne(N._payload),
              te
            );
        }
        if (Dr(N) || Ce(N)) return Ne !== null ? null : X(D, x, N, te, null);
        io(D, N);
      }
      return null;
    }
    function ye(D, x, N, te, Ne) {
      if (typeof te == "string" && te !== "" || typeof te == "number") return D = D.get(N) || null, E(x, D, "" + te, Ne);
      if (typeof te == "object" && te !== null) {
        switch (te.$$typeof) {
          case Ot:
            return D = D.get(te.key === null ? N : te.key) || null, b(x, D, te, Ne);
          case Oe:
            return D = D.get(te.key === null ? N : te.key) || null, A(x, D, te, Ne);
          case vt:
            var ke = te._init;
            return ye(D, x, N, ke(te._payload), Ne);
        }
        if (Dr(te) || Ce(te)) return D = D.get(N) || null, X(x, D, te, Ne, null);
        io(x, te);
      }
      return null;
    }
    function xe(D, x, N, te) {
      for (var Ne = null, ke = null, He = x, Je = x = 0, ir = null; He !== null && Je < N.length; Je++) {
        He.index > Je ? (ir = He, He = null) : ir = He.sibling;
        var Mt = G(D, He, N[Je], te);
        if (Mt === null) {
          He === null && (He = ir);
          break;
        }
        n && He && Mt.alternate === null && r(D, He), x = d(Mt, x, Je), ke === null ? Ne = Mt : ke.sibling = Mt, ke = Mt, He = ir;
      }
      if (Je === N.length) return l(D, He), vn && Cl(D, Je), Ne;
      if (He === null) {
        for (; Je < N.length; Je++) He = K(D, N[Je], te), He !== null && (x = d(He, x, Je), ke === null ? Ne = He : ke.sibling = He, ke = He);
        return vn && Cl(D, Je), Ne;
      }
      for (He = o(D, He); Je < N.length; Je++) ir = ye(He, D, Je, N[Je], te), ir !== null && (n && ir.alternate !== null && He.delete(ir.key === null ? Je : ir.key), x = d(ir, x, Je), ke === null ? Ne = ir : ke.sibling = ir, ke = ir);
      return n && He.forEach(function(zl) {
        return r(D, zl);
      }), vn && Cl(D, Je), Ne;
    }
    function Le(D, x, N, te) {
      var Ne = Ce(N);
      if (typeof Ne != "function") throw Error(w(150));
      if (N = Ne.call(N), N == null) throw Error(w(151));
      for (var ke = Ne = null, He = x, Je = x = 0, ir = null, Mt = N.next(); He !== null && !Mt.done; Je++, Mt = N.next()) {
        He.index > Je ? (ir = He, He = null) : ir = He.sibling;
        var zl = G(D, He, Mt.value, te);
        if (zl === null) {
          He === null && (He = ir);
          break;
        }
        n && He && zl.alternate === null && r(D, He), x = d(zl, x, Je), ke === null ? Ne = zl : ke.sibling = zl, ke = zl, He = ir;
      }
      if (Mt.done) return l(
        D,
        He
      ), vn && Cl(D, Je), Ne;
      if (He === null) {
        for (; !Mt.done; Je++, Mt = N.next()) Mt = K(D, Mt.value, te), Mt !== null && (x = d(Mt, x, Je), ke === null ? Ne = Mt : ke.sibling = Mt, ke = Mt);
        return vn && Cl(D, Je), Ne;
      }
      for (He = o(D, He); !Mt.done; Je++, Mt = N.next()) Mt = ye(He, D, Je, Mt.value, te), Mt !== null && (n && Mt.alternate !== null && He.delete(Mt.key === null ? Je : Mt.key), x = d(Mt, x, Je), ke === null ? Ne = Mt : ke.sibling = Mt, ke = Mt);
      return n && He.forEach(function(Sy) {
        return r(D, Sy);
      }), vn && Cl(D, Je), Ne;
    }
    function Nn(D, x, N, te) {
      if (typeof N == "object" && N !== null && N.type === ft && N.key === null && (N = N.props.children), typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case Ot:
            e: {
              for (var Ne = N.key, ke = x; ke !== null; ) {
                if (ke.key === Ne) {
                  if (Ne = N.type, Ne === ft) {
                    if (ke.tag === 7) {
                      l(D, ke.sibling), x = c(ke, N.props.children), x.return = D, D = x;
                      break e;
                    }
                  } else if (ke.elementType === Ne || typeof Ne == "object" && Ne !== null && Ne.$$typeof === vt && zv(Ne) === ke.type) {
                    l(D, ke.sibling), x = c(ke, N.props), x.ref = hs(D, ke, N), x.return = D, D = x;
                    break e;
                  }
                  l(D, ke);
                  break;
                } else r(D, ke);
                ke = ke.sibling;
              }
              N.type === ft ? (x = Ml(N.props.children, D.mode, te, N.key), x.return = D, D = x) : (te = ff(N.type, N.key, N.props, null, D.mode, te), te.ref = hs(D, x, N), te.return = D, D = te);
            }
            return m(D);
          case Oe:
            e: {
              for (ke = N.key; x !== null; ) {
                if (x.key === ke) if (x.tag === 4 && x.stateNode.containerInfo === N.containerInfo && x.stateNode.implementation === N.implementation) {
                  l(D, x.sibling), x = c(x, N.children || []), x.return = D, D = x;
                  break e;
                } else {
                  l(D, x);
                  break;
                }
                else r(D, x);
                x = x.sibling;
              }
              x = qd(N, D.mode, te), x.return = D, D = x;
            }
            return m(D);
          case vt:
            return ke = N._init, Nn(D, x, ke(N._payload), te);
        }
        if (Dr(N)) return xe(D, x, N, te);
        if (Ce(N)) return Le(D, x, N, te);
        io(D, N);
      }
      return typeof N == "string" && N !== "" || typeof N == "number" ? (N = "" + N, x !== null && x.tag === 6 ? (l(D, x.sibling), x = c(x, N), x.return = D, D = x) : (l(D, x), x = _u(N, D.mode, te), x.return = D, D = x), m(D)) : l(D, x);
    }
    return Nn;
  }
  var ri = Uv(!0), cr = Uv(!1), se = Kr(null), ma = null, wr = null, gd = null;
  function Sd() {
    gd = wr = ma = null;
  }
  function Ed(n) {
    var r = se.current;
    Jt(se), n._currentValue = r;
  }
  function Cd(n, r, l) {
    for (; n !== null; ) {
      var o = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, o !== null && (o.childLanes |= r)) : o !== null && (o.childLanes & r) !== r && (o.childLanes |= r), n === l) break;
      n = n.return;
    }
  }
  function lo(n, r) {
    ma = n, gd = wr = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (rr = !0), n.firstContext = null);
  }
  function Qt(n) {
    var r = n._currentValue;
    if (gd !== n) if (n = { context: n, memoizedValue: r, next: null }, wr === null) {
      if (ma === null) throw Error(w(308));
      wr = n, ma.dependencies = { lanes: 0, firstContext: n };
    } else wr = wr.next = n;
    return r;
  }
  var su = null;
  function Rd(n) {
    su === null ? su = [n] : su.push(n);
  }
  function Av(n, r, l, o) {
    var c = r.interleaved;
    return c === null ? (l.next = l, Rd(r)) : (l.next = c.next, c.next = l), r.interleaved = l, Ei(n, o);
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
  function jv(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function Wi(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function Tl(n, r, l) {
    var o = n.updateQueue;
    if (o === null) return null;
    if (o = o.shared, Ct & 2) {
      var c = o.pending;
      return c === null ? r.next = r : (r.next = c.next, c.next = r), o.pending = r, Ei(n, l);
    }
    return c = o.interleaved, c === null ? (r.next = r, Rd(o)) : (r.next = c.next, c.next = r), o.interleaved = r, Ei(n, l);
  }
  function wc(n, r, l) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (l & 4194240) !== 0)) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, Wo(n, l);
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
  function xc(n, r, l, o) {
    var c = n.updateQueue;
    Aa = !1;
    var d = c.firstBaseUpdate, m = c.lastBaseUpdate, E = c.shared.pending;
    if (E !== null) {
      c.shared.pending = null;
      var b = E, A = b.next;
      b.next = null, m === null ? d = A : m.next = A, m = b;
      var X = n.alternate;
      X !== null && (X = X.updateQueue, E = X.lastBaseUpdate, E !== m && (E === null ? X.firstBaseUpdate = A : E.next = A, X.lastBaseUpdate = b));
    }
    if (d !== null) {
      var K = c.baseState;
      m = 0, X = A = b = null, E = d;
      do {
        var G = E.lane, ye = E.eventTime;
        if ((o & G) === G) {
          X !== null && (X = X.next = {
            eventTime: ye,
            lane: 0,
            tag: E.tag,
            payload: E.payload,
            callback: E.callback,
            next: null
          });
          e: {
            var xe = n, Le = E;
            switch (G = r, ye = l, Le.tag) {
              case 1:
                if (xe = Le.payload, typeof xe == "function") {
                  K = xe.call(ye, K, G);
                  break e;
                }
                K = xe;
                break e;
              case 3:
                xe.flags = xe.flags & -65537 | 128;
              case 0:
                if (xe = Le.payload, G = typeof xe == "function" ? xe.call(ye, K, G) : xe, G == null) break e;
                K = oe({}, K, G);
                break e;
              case 2:
                Aa = !0;
            }
          }
          E.callback !== null && E.lane !== 0 && (n.flags |= 64, G = c.effects, G === null ? c.effects = [E] : G.push(E));
        } else ye = { eventTime: ye, lane: G, tag: E.tag, payload: E.payload, callback: E.callback, next: null }, X === null ? (A = X = ye, b = K) : X = X.next = ye, m |= G;
        if (E = E.next, E === null) {
          if (E = c.shared.pending, E === null) break;
          G = E, E = G.next, G.next = null, c.lastBaseUpdate = G, c.shared.pending = null;
        }
      } while (!0);
      if (X === null && (b = K), c.baseState = b, c.firstBaseUpdate = A, c.lastBaseUpdate = X, r = c.shared.interleaved, r !== null) {
        c = r;
        do
          m |= c.lane, c = c.next;
        while (c !== r);
      } else d === null && (c.shared.lanes = 0);
      Su |= m, n.lanes = m, n.memoizedState = K;
    }
  }
  function Td(n, r, l) {
    if (n = r.effects, r.effects = null, n !== null) for (r = 0; r < n.length; r++) {
      var o = n[r], c = o.callback;
      if (c !== null) {
        if (o.callback = null, o = l, typeof c != "function") throw Error(w(191, c));
        c.call(o);
      }
    }
  }
  var uo = {}, Ci = Kr(uo), ms = Kr(uo), ys = Kr(uo);
  function cu(n) {
    if (n === uo) throw Error(w(174));
    return n;
  }
  function bd(n, r) {
    switch (rn(ys, r), rn(ms, n), rn(Ci, uo), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : ur(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = ur(r, n);
    }
    Jt(Ci), rn(Ci, r);
  }
  function oo() {
    Jt(Ci), Jt(ms), Jt(ys);
  }
  function _d(n) {
    cu(ys.current);
    var r = cu(Ci.current), l = ur(r, n.type);
    r !== l && (rn(ms, n), rn(Ci, l));
  }
  function wd(n) {
    ms.current === n && (Jt(Ci), Jt(ms));
  }
  var gn = Kr(0);
  function kc(n) {
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
  var xd = [];
  function gs() {
    for (var n = 0; n < xd.length; n++) xd[n]._workInProgressVersionPrimary = null;
    xd.length = 0;
  }
  var Fe = Qe.ReactCurrentDispatcher, yt = Qe.ReactCurrentBatchConfig, Tt = 0, it = null, Zt = null, Wn = null, Dc = !1, Ss = !1, Es = 0, kd = 0;
  function $() {
    throw Error(w(321));
  }
  function Vn(n, r) {
    if (r === null) return !1;
    for (var l = 0; l < r.length && l < n.length; l++) if (!Za(n[l], r[l])) return !1;
    return !0;
  }
  function qe(n, r, l, o, c, d) {
    if (Tt = d, it = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, Fe.current = n === null || n.memoizedState === null ? Yc : Ic, n = l(o, c), Ss) {
      d = 0;
      do {
        if (Ss = !1, Es = 0, 25 <= d) throw Error(w(301));
        d += 1, Wn = Zt = null, r.updateQueue = null, Fe.current = _s, n = l(o, c);
      } while (Ss);
    }
    if (Fe.current = Wt, r = Zt !== null && Zt.next !== null, Tt = 0, Wn = Zt = it = null, Dc = !1, r) throw Error(w(300));
    return n;
  }
  function bl() {
    var n = Es !== 0;
    return Es = 0, n;
  }
  function tr() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Wn === null ? it.memoizedState = Wn = n : Wn = Wn.next = n, Wn;
  }
  function nr() {
    if (Zt === null) {
      var n = it.alternate;
      n = n !== null ? n.memoizedState : null;
    } else n = Zt.next;
    var r = Wn === null ? it.memoizedState : Wn.next;
    if (r !== null) Wn = r, Zt = n;
    else {
      if (n === null) throw Error(w(310));
      Zt = n, n = { memoizedState: Zt.memoizedState, baseState: Zt.baseState, baseQueue: Zt.baseQueue, queue: Zt.queue, next: null }, Wn === null ? it.memoizedState = Wn = n : Wn = Wn.next = n;
    }
    return Wn;
  }
  function ea(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function fu(n) {
    var r = nr(), l = r.queue;
    if (l === null) throw Error(w(311));
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
      var E = m = null, b = null, A = d;
      do {
        var X = A.lane;
        if ((Tt & X) === X) b !== null && (b = b.next = { lane: 0, action: A.action, hasEagerState: A.hasEagerState, eagerState: A.eagerState, next: null }), o = A.hasEagerState ? A.eagerState : n(o, A.action);
        else {
          var K = {
            lane: X,
            action: A.action,
            hasEagerState: A.hasEagerState,
            eagerState: A.eagerState,
            next: null
          };
          b === null ? (E = b = K, m = o) : b = b.next = K, it.lanes |= X, Su |= X;
        }
        A = A.next;
      } while (A !== null && A !== d);
      b === null ? m = o : b.next = E, Za(o, r.memoizedState) || (rr = !0), r.memoizedState = o, r.baseState = m, r.baseQueue = b, l.lastRenderedState = o;
    }
    if (n = l.interleaved, n !== null) {
      c = n;
      do
        d = c.lane, it.lanes |= d, Su |= d, c = c.next;
      while (c !== n);
    } else c === null && (l.lanes = 0);
    return [r.memoizedState, l.dispatch];
  }
  function _l(n) {
    var r = nr(), l = r.queue;
    if (l === null) throw Error(w(311));
    l.lastRenderedReducer = n;
    var o = l.dispatch, c = l.pending, d = r.memoizedState;
    if (c !== null) {
      l.pending = null;
      var m = c = c.next;
      do
        d = n(d, m.action), m = m.next;
      while (m !== c);
      Za(d, r.memoizedState) || (rr = !0), r.memoizedState = d, r.baseQueue === null && (r.baseState = d), l.lastRenderedState = d;
    }
    return [d, o];
  }
  function so() {
  }
  function Oc(n, r) {
    var l = it, o = nr(), c = r(), d = !Za(o.memoizedState, c);
    if (d && (o.memoizedState = c, rr = !0), o = o.queue, Cs(Mc.bind(null, l, o, n), [n]), o.getSnapshot !== r || d || Wn !== null && Wn.memoizedState.tag & 1) {
      if (l.flags |= 2048, du(9, Nc.bind(null, l, o, c, r), void 0, null), Bn === null) throw Error(w(349));
      Tt & 30 || Lc(l, r, c);
    }
    return c;
  }
  function Lc(n, r, l) {
    n.flags |= 16384, n = { getSnapshot: r, value: l }, r = it.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, it.updateQueue = r, r.stores = [n]) : (l = r.stores, l === null ? r.stores = [n] : l.push(n));
  }
  function Nc(n, r, l, o) {
    r.value = l, r.getSnapshot = o, zc(r) && Uc(n);
  }
  function Mc(n, r, l) {
    return l(function() {
      zc(r) && Uc(n);
    });
  }
  function zc(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var l = r();
      return !Za(n, l);
    } catch {
      return !0;
    }
  }
  function Uc(n) {
    var r = Ei(n, 1);
    r !== null && Ca(r, n, 1, -1);
  }
  function Ac(n) {
    var r = tr();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: ea, lastRenderedState: n }, r.queue = n, n = n.dispatch = bs.bind(null, it, n), [r.memoizedState, n];
  }
  function du(n, r, l, o) {
    return n = { tag: n, create: r, destroy: l, deps: o, next: null }, r = it.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, it.updateQueue = r, r.lastEffect = n.next = n) : (l = r.lastEffect, l === null ? r.lastEffect = n.next = n : (o = l.next, l.next = n, n.next = o, r.lastEffect = n)), n;
  }
  function jc() {
    return nr().memoizedState;
  }
  function co(n, r, l, o) {
    var c = tr();
    it.flags |= n, c.memoizedState = du(1 | r, l, void 0, o === void 0 ? null : o);
  }
  function fo(n, r, l, o) {
    var c = nr();
    o = o === void 0 ? null : o;
    var d = void 0;
    if (Zt !== null) {
      var m = Zt.memoizedState;
      if (d = m.destroy, o !== null && Vn(o, m.deps)) {
        c.memoizedState = du(r, l, d, o);
        return;
      }
    }
    it.flags |= n, c.memoizedState = du(1 | r, l, d, o);
  }
  function Fc(n, r) {
    return co(8390656, 8, n, r);
  }
  function Cs(n, r) {
    return fo(2048, 8, n, r);
  }
  function Hc(n, r) {
    return fo(4, 2, n, r);
  }
  function Pc(n, r) {
    return fo(4, 4, n, r);
  }
  function Rs(n, r) {
    if (typeof r == "function") return n = n(), r(n), function() {
      r(null);
    };
    if (r != null) return n = n(), r.current = n, function() {
      r.current = null;
    };
  }
  function pu(n, r, l) {
    return l = l != null ? l.concat([n]) : null, fo(4, 4, Rs.bind(null, r, n), l);
  }
  function Ts() {
  }
  function Vc(n, r) {
    var l = nr();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && Vn(r, o[1]) ? o[0] : (l.memoizedState = [n, r], n);
  }
  function Bc(n, r) {
    var l = nr();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && Vn(r, o[1]) ? o[0] : (n = n(), l.memoizedState = [n, r], n);
  }
  function $c(n, r, l) {
    return Tt & 21 ? (Za(l, r) || (l = ql(), it.lanes |= l, Su |= l, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, rr = !0), n.memoizedState = l);
  }
  function Hv(n, r) {
    var l = wt;
    wt = l !== 0 && 4 > l ? l : 4, n(!0);
    var o = yt.transition;
    yt.transition = {};
    try {
      n(!1), r();
    } finally {
      wt = l, yt.transition = o;
    }
  }
  function po() {
    return nr().memoizedState;
  }
  function Pv(n, r, l) {
    var o = Ea(n);
    if (l = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null }, wl(n)) ya(r, l);
    else if (l = Av(n, r, l, o), l !== null) {
      var c = an();
      Ca(l, n, o, c), Vv(l, r, o);
    }
  }
  function bs(n, r, l) {
    var o = Ea(n), c = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null };
    if (wl(n)) ya(r, c);
    else {
      var d = n.alternate;
      if (n.lanes === 0 && (d === null || d.lanes === 0) && (d = r.lastRenderedReducer, d !== null)) try {
        var m = r.lastRenderedState, E = d(m, l);
        if (c.hasEagerState = !0, c.eagerState = E, Za(E, m)) {
          var b = r.interleaved;
          b === null ? (c.next = c, Rd(r)) : (c.next = b.next, b.next = c), r.interleaved = c;
          return;
        }
      } catch {
      } finally {
      }
      l = Av(n, r, c, o), l !== null && (c = an(), Ca(l, n, o, c), Vv(l, r, o));
    }
  }
  function wl(n) {
    var r = n.alternate;
    return n === it || r !== null && r === it;
  }
  function ya(n, r) {
    Ss = Dc = !0;
    var l = n.pending;
    l === null ? r.next = r : (r.next = l.next, l.next = r), n.pending = r;
  }
  function Vv(n, r, l) {
    if (l & 4194240) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, Wo(n, l);
    }
  }
  var Wt = { readContext: Qt, useCallback: $, useContext: $, useEffect: $, useImperativeHandle: $, useInsertionEffect: $, useLayoutEffect: $, useMemo: $, useReducer: $, useRef: $, useState: $, useDebugValue: $, useDeferredValue: $, useTransition: $, useMutableSource: $, useSyncExternalStore: $, useId: $, unstable_isNewReconciler: !1 }, Yc = { readContext: Qt, useCallback: function(n, r) {
    return tr().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: Qt, useEffect: Fc, useImperativeHandle: function(n, r, l) {
    return l = l != null ? l.concat([n]) : null, co(
      4194308,
      4,
      Rs.bind(null, r, n),
      l
    );
  }, useLayoutEffect: function(n, r) {
    return co(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return co(4, 2, n, r);
  }, useMemo: function(n, r) {
    var l = tr();
    return r = r === void 0 ? null : r, n = n(), l.memoizedState = [n, r], n;
  }, useReducer: function(n, r, l) {
    var o = tr();
    return r = l !== void 0 ? l(r) : r, o.memoizedState = o.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, o.queue = n, n = n.dispatch = Pv.bind(null, it, n), [o.memoizedState, n];
  }, useRef: function(n) {
    var r = tr();
    return n = { current: n }, r.memoizedState = n;
  }, useState: Ac, useDebugValue: Ts, useDeferredValue: function(n) {
    return tr().memoizedState = n;
  }, useTransition: function() {
    var n = Ac(!1), r = n[0];
    return n = Hv.bind(null, n[1]), tr().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, l) {
    var o = it, c = tr();
    if (vn) {
      if (l === void 0) throw Error(w(407));
      l = l();
    } else {
      if (l = r(), Bn === null) throw Error(w(349));
      Tt & 30 || Lc(o, r, l);
    }
    c.memoizedState = l;
    var d = { value: l, getSnapshot: r };
    return c.queue = d, Fc(Mc.bind(
      null,
      o,
      d,
      n
    ), [n]), o.flags |= 2048, du(9, Nc.bind(null, o, d, l, r), void 0, null), l;
  }, useId: function() {
    var n = tr(), r = Bn.identifierPrefix;
    if (vn) {
      var l = Si, o = zr;
      l = (o & ~(1 << 32 - Or(o) - 1)).toString(32) + l, r = ":" + r + "R" + l, l = Es++, 0 < l && (r += "H" + l.toString(32)), r += ":";
    } else l = kd++, r = ":" + r + "r" + l.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, Ic = {
    readContext: Qt,
    useCallback: Vc,
    useContext: Qt,
    useEffect: Cs,
    useImperativeHandle: pu,
    useInsertionEffect: Hc,
    useLayoutEffect: Pc,
    useMemo: Bc,
    useReducer: fu,
    useRef: jc,
    useState: function() {
      return fu(ea);
    },
    useDebugValue: Ts,
    useDeferredValue: function(n) {
      var r = nr();
      return $c(r, Zt.memoizedState, n);
    },
    useTransition: function() {
      var n = fu(ea)[0], r = nr().memoizedState;
      return [n, r];
    },
    useMutableSource: so,
    useSyncExternalStore: Oc,
    useId: po,
    unstable_isNewReconciler: !1
  }, _s = { readContext: Qt, useCallback: Vc, useContext: Qt, useEffect: Cs, useImperativeHandle: pu, useInsertionEffect: Hc, useLayoutEffect: Pc, useMemo: Bc, useReducer: _l, useRef: jc, useState: function() {
    return _l(ea);
  }, useDebugValue: Ts, useDeferredValue: function(n) {
    var r = nr();
    return Zt === null ? r.memoizedState = n : $c(r, Zt.memoizedState, n);
  }, useTransition: function() {
    var n = _l(ea)[0], r = nr().memoizedState;
    return [n, r];
  }, useMutableSource: so, useSyncExternalStore: Oc, useId: po, unstable_isNewReconciler: !1 };
  function ta(n, r) {
    if (n && n.defaultProps) {
      r = oe({}, r), n = n.defaultProps;
      for (var l in n) r[l] === void 0 && (r[l] = n[l]);
      return r;
    }
    return r;
  }
  function Dd(n, r, l, o) {
    r = n.memoizedState, l = l(o, r), l = l == null ? r : oe({}, r, l), n.memoizedState = l, n.lanes === 0 && (n.updateQueue.baseState = l);
  }
  var Qc = { isMounted: function(n) {
    return (n = n._reactInternals) ? pe(n) === n : !1;
  }, enqueueSetState: function(n, r, l) {
    n = n._reactInternals;
    var o = an(), c = Ea(n), d = Wi(o, c);
    d.payload = r, l != null && (d.callback = l), r = Tl(n, d, c), r !== null && (Ca(r, n, c, o), wc(r, n, c));
  }, enqueueReplaceState: function(n, r, l) {
    n = n._reactInternals;
    var o = an(), c = Ea(n), d = Wi(o, c);
    d.tag = 1, d.payload = r, l != null && (d.callback = l), r = Tl(n, d, c), r !== null && (Ca(r, n, c, o), wc(r, n, c));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var l = an(), o = Ea(n), c = Wi(l, o);
    c.tag = 2, r != null && (c.callback = r), r = Tl(n, c, o), r !== null && (Ca(r, n, o, l), wc(r, n, o));
  } };
  function Bv(n, r, l, o, c, d, m) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(o, d, m) : r.prototype && r.prototype.isPureReactComponent ? !es(l, o) || !es(c, d) : !0;
  }
  function $v(n, r, l) {
    var o = !1, c = mt, d = r.contextType;
    return typeof d == "object" && d !== null ? d = Qt(d) : (c = Hn(r) ? za : _n.current, o = r.contextTypes, d = (o = o != null) ? ha(n, c) : mt), r = new r(l, d), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = Qc, n.stateNode = r, r._reactInternals = n, o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = d), r;
  }
  function Wc(n, r, l, o) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(l, o), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(l, o), r.state !== n && Qc.enqueueReplaceState(r, r.state, null);
  }
  function Od(n, r, l, o) {
    var c = n.stateNode;
    c.props = l, c.state = n.memoizedState, c.refs = {}, Rl(n);
    var d = r.contextType;
    typeof d == "object" && d !== null ? c.context = Qt(d) : (d = Hn(r) ? za : _n.current, c.context = ha(n, d)), c.state = n.memoizedState, d = r.getDerivedStateFromProps, typeof d == "function" && (Dd(n, r, d, l), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && Qc.enqueueReplaceState(c, c.state, null), xc(n, l, c, o), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function xl(n, r) {
    try {
      var l = "", o = r;
      do
        l += _e(o), o = o.return;
      while (o);
      var c = l;
    } catch (d) {
      c = `
Error generating stack: ` + d.message + `
` + d.stack;
    }
    return { value: n, source: r, stack: c, digest: null };
  }
  function qc(n, r, l) {
    return { value: n, source: null, stack: l ?? null, digest: r ?? null };
  }
  function Ld(n, r) {
    try {
      console.error(r.value);
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  var iy = typeof WeakMap == "function" ? WeakMap : Map;
  function ws(n, r, l) {
    l = Wi(-1, l), l.tag = 3, l.payload = { element: null };
    var o = r.value;
    return l.callback = function() {
      Dl || (Dl = !0, zs = o), Ld(n, r);
    }, l;
  }
  function Yv(n, r, l) {
    l = Wi(-1, l), l.tag = 3;
    var o = n.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var c = r.value;
      l.payload = function() {
        return o(c);
      }, l.callback = function() {
        Ld(n, r);
      };
    }
    var d = n.stateNode;
    return d !== null && typeof d.componentDidCatch == "function" && (l.callback = function() {
      Ld(n, r), typeof o != "function" && (Ha === null ? Ha = /* @__PURE__ */ new Set([this]) : Ha.add(this));
      var m = r.stack;
      this.componentDidCatch(r.value, { componentStack: m !== null ? m : "" });
    }), l;
  }
  function Nd(n, r, l) {
    var o = n.pingCache;
    if (o === null) {
      o = n.pingCache = new iy();
      var c = /* @__PURE__ */ new Set();
      o.set(r, c);
    } else c = o.get(r), c === void 0 && (c = /* @__PURE__ */ new Set(), o.set(r, c));
    c.has(l) || (c.add(l), n = Id.bind(null, n, r, l), r.then(n, n));
  }
  function Md(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r) return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function Iv(n, r, l, o, c) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = c, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, l.flags |= 131072, l.flags &= -52805, l.tag === 1 && (l.alternate === null ? l.tag = 17 : (r = Wi(-1, 1), r.tag = 2, Tl(l, r, 1))), l.lanes |= 1), n);
  }
  var vu = Qe.ReactCurrentOwner, rr = !1;
  function On(n, r, l, o) {
    r.child = n === null ? cr(r, null, l, o) : ri(r, n.child, l, o);
  }
  function Gc(n, r, l, o, c) {
    l = l.render;
    var d = r.ref;
    return lo(r, c), o = qe(n, r, l, o, d, c), l = bl(), n !== null && !rr ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, fr(n, r, c)) : (vn && l && pd(r), r.flags |= 1, On(n, r, o, c), r.child);
  }
  function na(n, r, l, o, c) {
    if (n === null) {
      var d = l.type;
      return typeof d == "function" && !Wd(d) && d.defaultProps === void 0 && l.compare === null && l.defaultProps === void 0 ? (r.tag = 15, r.type = d, hu(n, r, d, o, c)) : (n = ff(l.type, null, o, r, r.mode, c), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (d = n.child, !(n.lanes & c)) {
      var m = d.memoizedProps;
      if (l = l.compare, l = l !== null ? l : es, l(m, o) && n.ref === r.ref) return fr(n, r, c);
    }
    return r.flags |= 1, n = Nl(d, o), n.ref = r.ref, n.return = r, r.child = n;
  }
  function hu(n, r, l, o, c) {
    if (n !== null) {
      var d = n.memoizedProps;
      if (es(d, o) && n.ref === r.ref) if (rr = !1, r.pendingProps = o = d, (n.lanes & c) !== 0) n.flags & 131072 && (rr = !0);
      else return r.lanes = n.lanes, fr(n, r, c);
    }
    return Xc(n, r, l, o, c);
  }
  function ot(n, r, l) {
    var o = r.pendingProps, c = o.children, d = n !== null ? n.memoizedState : null;
    if (o.mode === "hidden") if (!(r.mode & 1)) r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, rn(yo, Sa), Sa |= l;
    else {
      if (!(l & 1073741824)) return n = d !== null ? d.baseLanes | l : l, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, rn(yo, Sa), Sa |= n, null;
      r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, o = d !== null ? d.baseLanes : l, rn(yo, Sa), Sa |= o;
    }
    else d !== null ? (o = d.baseLanes | l, r.memoizedState = null) : o = l, rn(yo, Sa), Sa |= o;
    return On(n, r, c, l), r.child;
  }
  function xs(n, r) {
    var l = r.ref;
    (n === null && l !== null || n !== null && n.ref !== l) && (r.flags |= 512, r.flags |= 2097152);
  }
  function Xc(n, r, l, o, c) {
    var d = Hn(l) ? za : _n.current;
    return d = ha(r, d), lo(r, c), l = qe(n, r, l, o, d, c), o = bl(), n !== null && !rr ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, fr(n, r, c)) : (vn && o && pd(r), r.flags |= 1, On(n, r, l, c), r.child);
  }
  function ly(n, r, l, o, c) {
    if (Hn(l)) {
      var d = !0;
      lu(r);
    } else d = !1;
    if (lo(r, c), r.stateNode === null) ja(n, r), $v(r, l, o), Od(r, l, o, c), o = !0;
    else if (n === null) {
      var m = r.stateNode, E = r.memoizedProps;
      m.props = E;
      var b = m.context, A = l.contextType;
      typeof A == "object" && A !== null ? A = Qt(A) : (A = Hn(l) ? za : _n.current, A = ha(r, A));
      var X = l.getDerivedStateFromProps, K = typeof X == "function" || typeof m.getSnapshotBeforeUpdate == "function";
      K || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (E !== o || b !== A) && Wc(r, m, o, A), Aa = !1;
      var G = r.memoizedState;
      m.state = G, xc(r, o, m, c), b = r.memoizedState, E !== o || G !== b || Fn.current || Aa ? (typeof X == "function" && (Dd(r, l, X, o), b = r.memoizedState), (E = Aa || Bv(r, l, E, o, G, b, A)) ? (K || typeof m.UNSAFE_componentWillMount != "function" && typeof m.componentWillMount != "function" || (typeof m.componentWillMount == "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && m.UNSAFE_componentWillMount()), typeof m.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = o, r.memoizedState = b), m.props = o, m.state = b, m.context = A, o = E) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), o = !1);
    } else {
      m = r.stateNode, jv(n, r), E = r.memoizedProps, A = r.type === r.elementType ? E : ta(r.type, E), m.props = A, K = r.pendingProps, G = m.context, b = l.contextType, typeof b == "object" && b !== null ? b = Qt(b) : (b = Hn(l) ? za : _n.current, b = ha(r, b));
      var ye = l.getDerivedStateFromProps;
      (X = typeof ye == "function" || typeof m.getSnapshotBeforeUpdate == "function") || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (E !== K || G !== b) && Wc(r, m, o, b), Aa = !1, G = r.memoizedState, m.state = G, xc(r, o, m, c);
      var xe = r.memoizedState;
      E !== K || G !== xe || Fn.current || Aa ? (typeof ye == "function" && (Dd(r, l, ye, o), xe = r.memoizedState), (A = Aa || Bv(r, l, A, o, G, xe, b) || !1) ? (X || typeof m.UNSAFE_componentWillUpdate != "function" && typeof m.componentWillUpdate != "function" || (typeof m.componentWillUpdate == "function" && m.componentWillUpdate(o, xe, b), typeof m.UNSAFE_componentWillUpdate == "function" && m.UNSAFE_componentWillUpdate(o, xe, b)), typeof m.componentDidUpdate == "function" && (r.flags |= 4), typeof m.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof m.componentDidUpdate != "function" || E === n.memoizedProps && G === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || E === n.memoizedProps && G === n.memoizedState || (r.flags |= 1024), r.memoizedProps = o, r.memoizedState = xe), m.props = o, m.state = xe, m.context = b, o = A) : (typeof m.componentDidUpdate != "function" || E === n.memoizedProps && G === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || E === n.memoizedProps && G === n.memoizedState || (r.flags |= 1024), o = !1);
    }
    return zd(n, r, l, o, d, c);
  }
  function zd(n, r, l, o, c, d) {
    xs(n, r);
    var m = (r.flags & 128) !== 0;
    if (!o && !m) return c && Ua(r, l, !1), fr(n, r, d);
    o = r.stateNode, vu.current = r;
    var E = m && typeof l.getDerivedStateFromError != "function" ? null : o.render();
    return r.flags |= 1, n !== null && m ? (r.child = ri(r, n.child, null, d), r.child = ri(r, null, E, d)) : On(n, r, E, d), r.memoizedState = o.state, c && Ua(r, l, !0), r.child;
  }
  function Kc(n) {
    var r = n.stateNode;
    r.pendingContext ? bc(n, r.pendingContext, r.pendingContext !== r.context) : r.context && bc(n, r.context, !1), bd(n, r.containerInfo);
  }
  function vo(n, r, l, o, c) {
    return Qi(), vs(c), r.flags |= 256, On(n, r, l, o), r.child;
  }
  var Ud = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Jc(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function Qv(n, r, l) {
    var o = r.pendingProps, c = gn.current, d = !1, m = (r.flags & 128) !== 0, E;
    if ((E = m) || (E = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), E ? (d = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), rn(gn, c & 1), n === null)
      return yd(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (m = o.children, n = o.fallback, d ? (o = r.mode, d = r.child, m = { mode: "hidden", children: m }, !(o & 1) && d !== null ? (d.childLanes = 0, d.pendingProps = m) : d = To(m, o, 0, null), n = Ml(n, o, l, null), d.return = r, n.return = r, d.sibling = n, r.child = d, r.child.memoizedState = Jc(l), r.memoizedState = Ud, n) : ks(r, m));
    if (c = n.memoizedState, c !== null && (E = c.dehydrated, E !== null)) return Wv(n, r, m, o, E, c, l);
    if (d) {
      d = o.fallback, m = r.mode, c = n.child, E = c.sibling;
      var b = { mode: "hidden", children: o.children };
      return !(m & 1) && r.child !== c ? (o = r.child, o.childLanes = 0, o.pendingProps = b, r.deletions = null) : (o = Nl(c, b), o.subtreeFlags = c.subtreeFlags & 14680064), E !== null ? d = Nl(E, d) : (d = Ml(d, m, l, null), d.flags |= 2), d.return = r, o.return = r, o.sibling = d, r.child = o, o = d, d = r.child, m = n.child.memoizedState, m = m === null ? Jc(l) : { baseLanes: m.baseLanes | l, cachePool: null, transitions: m.transitions }, d.memoizedState = m, d.childLanes = n.childLanes & ~l, r.memoizedState = Ud, o;
    }
    return d = n.child, n = d.sibling, o = Nl(d, { mode: "visible", children: o.children }), !(r.mode & 1) && (o.lanes = l), o.return = r, o.sibling = null, n !== null && (l = r.deletions, l === null ? (r.deletions = [n], r.flags |= 16) : l.push(n)), r.child = o, r.memoizedState = null, o;
  }
  function ks(n, r) {
    return r = To({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function Zc(n, r, l, o) {
    return o !== null && vs(o), ri(r, n.child, null, l), n = ks(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function Wv(n, r, l, o, c, d, m) {
    if (l)
      return r.flags & 256 ? (r.flags &= -257, o = qc(Error(w(422))), Zc(n, r, m, o)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (d = o.fallback, c = r.mode, o = To({ mode: "visible", children: o.children }, c, 0, null), d = Ml(d, c, m, null), d.flags |= 2, o.return = r, d.return = r, o.sibling = d, r.child = o, r.mode & 1 && ri(r, n.child, null, m), r.child.memoizedState = Jc(m), r.memoizedState = Ud, d);
    if (!(r.mode & 1)) return Zc(n, r, m, null);
    if (c.data === "$!") {
      if (o = c.nextSibling && c.nextSibling.dataset, o) var E = o.dgst;
      return o = E, d = Error(w(419)), o = qc(d, o, void 0), Zc(n, r, m, o);
    }
    if (E = (m & n.childLanes) !== 0, rr || E) {
      if (o = Bn, o !== null) {
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
      return $d(), o = qc(Error(w(421))), Zc(n, r, m, o);
    }
    return c.data === "$?" ? (r.flags |= 128, r.child = n.child, r = dy.bind(null, n), c._reactRetry = r, null) : (n = d.treeContext, Zr = ei(c.nextSibling), Jr = r, vn = !0, ni = null, n !== null && (sr[Pn++] = zr, sr[Pn++] = Si, sr[Pn++] = uu, zr = n.id, Si = n.overflow, uu = r), r = ks(r, o.children), r.flags |= 4096, r);
  }
  function Ad(n, r, l) {
    n.lanes |= r;
    var o = n.alternate;
    o !== null && (o.lanes |= r), Cd(n.return, r, l);
  }
  function ef(n, r, l, o, c) {
    var d = n.memoizedState;
    d === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: o, tail: l, tailMode: c } : (d.isBackwards = r, d.rendering = null, d.renderingStartTime = 0, d.last = o, d.tail = l, d.tailMode = c);
  }
  function ra(n, r, l) {
    var o = r.pendingProps, c = o.revealOrder, d = o.tail;
    if (On(n, r, o.children, l), o = gn.current, o & 2) o = o & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && n.flags & 128) e: for (n = r.child; n !== null; ) {
        if (n.tag === 13) n.memoizedState !== null && Ad(n, l, r);
        else if (n.tag === 19) Ad(n, l, r);
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
        for (l = r.child, c = null; l !== null; ) n = l.alternate, n !== null && kc(n) === null && (c = l), l = l.sibling;
        l = c, l === null ? (c = r.child, r.child = null) : (c = l.sibling, l.sibling = null), ef(r, !1, c, l, d);
        break;
      case "backwards":
        for (l = null, c = r.child, r.child = null; c !== null; ) {
          if (n = c.alternate, n !== null && kc(n) === null) {
            r.child = c;
            break;
          }
          n = c.sibling, c.sibling = l, l = c, c = n;
        }
        ef(r, !0, l, null, d);
        break;
      case "together":
        ef(r, !1, null, null, void 0);
        break;
      default:
        r.memoizedState = null;
    }
    return r.child;
  }
  function ja(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function fr(n, r, l) {
    if (n !== null && (r.dependencies = n.dependencies), Su |= r.lanes, !(l & r.childLanes)) return null;
    if (n !== null && r.child !== n.child) throw Error(w(153));
    if (r.child !== null) {
      for (n = r.child, l = Nl(n, n.pendingProps), r.child = l, l.return = r; n.sibling !== null; ) n = n.sibling, l = l.sibling = Nl(n, n.pendingProps), l.return = r;
      l.sibling = null;
    }
    return r.child;
  }
  function tf(n, r, l) {
    switch (r.tag) {
      case 3:
        Kc(r), Qi();
        break;
      case 5:
        _d(r);
        break;
      case 1:
        Hn(r.type) && lu(r);
        break;
      case 4:
        bd(r, r.stateNode.containerInfo);
        break;
      case 10:
        var o = r.type._context, c = r.memoizedProps.value;
        rn(se, o._currentValue), o._currentValue = c;
        break;
      case 13:
        if (o = r.memoizedState, o !== null)
          return o.dehydrated !== null ? (rn(gn, gn.current & 1), r.flags |= 128, null) : l & r.child.childLanes ? Qv(n, r, l) : (rn(gn, gn.current & 1), n = fr(n, r, l), n !== null ? n.sibling : null);
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
        return r.lanes = 0, ot(n, r, l);
    }
    return fr(n, r, l);
  }
  var ho, ga, qn, qv;
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
  }, qn = function(n, r, l, o) {
    var c = n.memoizedProps;
    if (c !== o) {
      n = r.stateNode, cu(Ci.current);
      var d = null;
      switch (l) {
        case "input":
          c = Tn(n, c), o = Tn(n, o), d = [];
          break;
        case "select":
          c = oe({}, c, { value: void 0 }), o = oe({}, o, { value: void 0 }), d = [];
          break;
        case "textarea":
          c = Kn(n, c), o = Kn(n, o), d = [];
          break;
        default:
          typeof c.onClick != "function" && typeof o.onClick == "function" && (n.onclick = Ec);
      }
      fn(l, o);
      var m;
      l = null;
      for (A in c) if (!o.hasOwnProperty(A) && c.hasOwnProperty(A) && c[A] != null) if (A === "style") {
        var E = c[A];
        for (m in E) E.hasOwnProperty(m) && (l || (l = {}), l[m] = "");
      } else A !== "dangerouslySetInnerHTML" && A !== "children" && A !== "suppressContentEditableWarning" && A !== "suppressHydrationWarning" && A !== "autoFocus" && (be.hasOwnProperty(A) ? d || (d = []) : (d = d || []).push(A, null));
      for (A in o) {
        var b = o[A];
        if (E = c != null ? c[A] : void 0, o.hasOwnProperty(A) && b !== E && (b != null || E != null)) if (A === "style") if (E) {
          for (m in E) !E.hasOwnProperty(m) || b && b.hasOwnProperty(m) || (l || (l = {}), l[m] = "");
          for (m in b) b.hasOwnProperty(m) && E[m] !== b[m] && (l || (l = {}), l[m] = b[m]);
        } else l || (d || (d = []), d.push(
          A,
          l
        )), l = b;
        else A === "dangerouslySetInnerHTML" ? (b = b ? b.__html : void 0, E = E ? E.__html : void 0, b != null && E !== b && (d = d || []).push(A, b)) : A === "children" ? typeof b != "string" && typeof b != "number" || (d = d || []).push(A, "" + b) : A !== "suppressContentEditableWarning" && A !== "suppressHydrationWarning" && (be.hasOwnProperty(A) ? (b != null && A === "onScroll" && Yt("scroll", n), d || E === b || (d = [])) : (d = d || []).push(A, b));
      }
      l && (d = d || []).push("style", l);
      var A = d;
      (r.updateQueue = A) && (r.flags |= 4);
    }
  }, qv = function(n, r, l, o) {
    l !== o && (r.flags |= 4);
  };
  function Ds(n, r) {
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
  function jd(n, r, l) {
    var o = r.pendingProps;
    switch (_c(r), r.tag) {
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
        return Hn(r.type) && gi(), xr(r), null;
      case 3:
        return o = r.stateNode, oo(), Jt(Fn), Jt(_n), gs(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (n === null || n.child === null) && (Dn(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, ni !== null && (Fs(ni), ni = null))), ga(n, r), xr(r), null;
      case 5:
        wd(r);
        var c = cu(ys.current);
        if (l = r.type, n !== null && r.stateNode != null) qn(n, r, l, o, c), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!o) {
            if (r.stateNode === null) throw Error(w(166));
            return xr(r), null;
          }
          if (n = cu(Ci.current), Dn(r)) {
            o = r.stateNode, l = r.type;
            var d = r.memoizedProps;
            switch (o[Ma] = r, o[cs] = d, n = (r.mode & 1) !== 0, l) {
              case "dialog":
                Yt("cancel", o), Yt("close", o);
                break;
              case "iframe":
              case "object":
              case "embed":
                Yt("load", o);
                break;
              case "video":
              case "audio":
                for (c = 0; c < is.length; c++) Yt(is[c], o);
                break;
              case "source":
                Yt("error", o);
                break;
              case "img":
              case "image":
              case "link":
                Yt(
                  "error",
                  o
                ), Yt("load", o);
                break;
              case "details":
                Yt("toggle", o);
                break;
              case "input":
                Bt(o, d), Yt("invalid", o);
                break;
              case "select":
                o._wrapperState = { wasMultiple: !!d.multiple }, Yt("invalid", o);
                break;
              case "textarea":
                Jn(o, d), Yt("invalid", o);
            }
            fn(l, d), c = null;
            for (var m in d) if (d.hasOwnProperty(m)) {
              var E = d[m];
              m === "children" ? typeof E == "string" ? o.textContent !== E && (d.suppressHydrationWarning !== !0 && Sc(o.textContent, E, n), c = ["children", E]) : typeof E == "number" && o.textContent !== "" + E && (d.suppressHydrationWarning !== !0 && Sc(
                o.textContent,
                E,
                n
              ), c = ["children", "" + E]) : be.hasOwnProperty(m) && E != null && m === "onScroll" && Yt("scroll", o);
            }
            switch (l) {
              case "input":
                Cn(o), ca(o, d, !0);
                break;
              case "textarea":
                Cn(o), Ga(o);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof d.onClick == "function" && (o.onclick = Ec);
            }
            o = c, r.updateQueue = o, o !== null && (r.flags |= 4);
          } else {
            m = c.nodeType === 9 ? c : c.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = Un(l)), n === "http://www.w3.org/1999/xhtml" ? l === "script" ? (n = m.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof o.is == "string" ? n = m.createElement(l, { is: o.is }) : (n = m.createElement(l), l === "select" && (m = n, o.multiple ? m.multiple = !0 : o.size && (m.size = o.size))) : n = m.createElementNS(n, l), n[Ma] = r, n[cs] = o, ho(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (m = dn(l, o), l) {
                case "dialog":
                  Yt("cancel", n), Yt("close", n), c = o;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Yt("load", n), c = o;
                  break;
                case "video":
                case "audio":
                  for (c = 0; c < is.length; c++) Yt(is[c], n);
                  c = o;
                  break;
                case "source":
                  Yt("error", n), c = o;
                  break;
                case "img":
                case "image":
                case "link":
                  Yt(
                    "error",
                    n
                  ), Yt("load", n), c = o;
                  break;
                case "details":
                  Yt("toggle", n), c = o;
                  break;
                case "input":
                  Bt(n, o), c = Tn(n, o), Yt("invalid", n);
                  break;
                case "option":
                  c = o;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!o.multiple }, c = oe({}, o, { value: void 0 }), Yt("invalid", n);
                  break;
                case "textarea":
                  Jn(n, o), c = Kn(n, o), Yt("invalid", n);
                  break;
                default:
                  c = o;
              }
              fn(l, c), E = c;
              for (d in E) if (E.hasOwnProperty(d)) {
                var b = E[d];
                d === "style" ? Ft(n, b) : d === "dangerouslySetInnerHTML" ? (b = b ? b.__html : void 0, b != null && Li(n, b)) : d === "children" ? typeof b == "string" ? (l !== "textarea" || b !== "") && fa(n, b) : typeof b == "number" && fa(n, "" + b) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (be.hasOwnProperty(d) ? b != null && d === "onScroll" && Yt("scroll", n) : b != null && st(n, d, b, m));
              }
              switch (l) {
                case "input":
                  Cn(n), ca(n, o, !1);
                  break;
                case "textarea":
                  Cn(n), Ga(n);
                  break;
                case "option":
                  o.value != null && n.setAttribute("value", "" + Pe(o.value));
                  break;
                case "select":
                  n.multiple = !!o.multiple, d = o.value, d != null ? Qn(n, !!o.multiple, d, !1) : o.defaultValue != null && Qn(
                    n,
                    !!o.multiple,
                    o.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof c.onClick == "function" && (n.onclick = Ec);
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
        if (n && r.stateNode != null) qv(n, r, n.memoizedProps, o);
        else {
          if (typeof o != "string" && r.stateNode === null) throw Error(w(166));
          if (l = cu(ys.current), cu(Ci.current), Dn(r)) {
            if (o = r.stateNode, l = r.memoizedProps, o[Ma] = r, (d = o.nodeValue !== l) && (n = Jr, n !== null)) switch (n.tag) {
              case 3:
                Sc(o.nodeValue, l, (n.mode & 1) !== 0);
                break;
              case 5:
                n.memoizedProps.suppressHydrationWarning !== !0 && Sc(o.nodeValue, l, (n.mode & 1) !== 0);
            }
            d && (r.flags |= 4);
          } else o = (l.nodeType === 9 ? l : l.ownerDocument).createTextNode(o), o[Ma] = r, r.stateNode = o;
        }
        return xr(r), null;
      case 13:
        if (Jt(gn), o = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (vn && Zr !== null && r.mode & 1 && !(r.flags & 128)) Mv(), Qi(), r.flags |= 98560, d = !1;
          else if (d = Dn(r), o !== null && o.dehydrated !== null) {
            if (n === null) {
              if (!d) throw Error(w(318));
              if (d = r.memoizedState, d = d !== null ? d.dehydrated : null, !d) throw Error(w(317));
              d[Ma] = r;
            } else Qi(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            xr(r), d = !1;
          } else ni !== null && (Fs(ni), ni = null), d = !0;
          if (!d) return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = l, r) : (o = o !== null, o !== (n !== null && n.memoizedState !== null) && o && (r.child.flags |= 8192, r.mode & 1 && (n === null || gn.current & 1 ? Gn === 0 && (Gn = 3) : $d())), r.updateQueue !== null && (r.flags |= 4), xr(r), null);
      case 4:
        return oo(), ga(n, r), n === null && us(r.stateNode.containerInfo), xr(r), null;
      case 10:
        return Ed(r.type._context), xr(r), null;
      case 17:
        return Hn(r.type) && gi(), xr(r), null;
      case 19:
        if (Jt(gn), d = r.memoizedState, d === null) return xr(r), null;
        if (o = (r.flags & 128) !== 0, m = d.rendering, m === null) if (o) Ds(d, !1);
        else {
          if (Gn !== 0 || n !== null && n.flags & 128) for (n = r.child; n !== null; ) {
            if (m = kc(n), m !== null) {
              for (r.flags |= 128, Ds(d, !1), o = m.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), r.subtreeFlags = 0, o = l, l = r.child; l !== null; ) d = l, n = o, d.flags &= 14680066, m = d.alternate, m === null ? (d.childLanes = 0, d.lanes = n, d.child = null, d.subtreeFlags = 0, d.memoizedProps = null, d.memoizedState = null, d.updateQueue = null, d.dependencies = null, d.stateNode = null) : (d.childLanes = m.childLanes, d.lanes = m.lanes, d.child = m.child, d.subtreeFlags = 0, d.deletions = null, d.memoizedProps = m.memoizedProps, d.memoizedState = m.memoizedState, d.updateQueue = m.updateQueue, d.type = m.type, n = m.dependencies, d.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), l = l.sibling;
              return rn(gn, gn.current & 1 | 2), r.child;
            }
            n = n.sibling;
          }
          d.tail !== null && Pt() > So && (r.flags |= 128, o = !0, Ds(d, !1), r.lanes = 4194304);
        }
        else {
          if (!o) if (n = kc(m), n !== null) {
            if (r.flags |= 128, o = !0, l = n.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), Ds(d, !0), d.tail === null && d.tailMode === "hidden" && !m.alternate && !vn) return xr(r), null;
          } else 2 * Pt() - d.renderingStartTime > So && l !== 1073741824 && (r.flags |= 128, o = !0, Ds(d, !1), r.lanes = 4194304);
          d.isBackwards ? (m.sibling = r.child, r.child = m) : (l = d.last, l !== null ? l.sibling = m : r.child = m, d.last = m);
        }
        return d.tail !== null ? (r = d.tail, d.rendering = r, d.tail = r.sibling, d.renderingStartTime = Pt(), r.sibling = null, l = gn.current, rn(gn, o ? l & 1 | 2 : l & 1), r) : (xr(r), null);
      case 22:
      case 23:
        return Bd(), o = r.memoizedState !== null, n !== null && n.memoizedState !== null !== o && (r.flags |= 8192), o && r.mode & 1 ? Sa & 1073741824 && (xr(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : xr(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(w(156, r.tag));
  }
  function Gv(n, r) {
    switch (_c(r), r.tag) {
      case 1:
        return Hn(r.type) && gi(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return oo(), Jt(Fn), Jt(_n), gs(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return wd(r), null;
      case 13:
        if (Jt(gn), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null) throw Error(w(340));
          Qi();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return Jt(gn), null;
      case 4:
        return oo(), null;
      case 10:
        return Ed(r.type._context), null;
      case 22:
      case 23:
        return Bd(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var mu = !1, dr = !1, uy = typeof WeakSet == "function" ? WeakSet : Set, Te = null;
  function kl(n, r) {
    var l = n.ref;
    if (l !== null) if (typeof l == "function") try {
      l(null);
    } catch (o) {
      wn(n, r, o);
    }
    else l.current = null;
  }
  function Fd(n, r, l) {
    try {
      l();
    } catch (o) {
      wn(n, r, o);
    }
  }
  var Hd = !1;
  function oy(n, r) {
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
          var m = 0, E = -1, b = -1, A = 0, X = 0, K = n, G = null;
          t: for (; ; ) {
            for (var ye; K !== l || c !== 0 && K.nodeType !== 3 || (E = m + c), K !== d || o !== 0 && K.nodeType !== 3 || (b = m + o), K.nodeType === 3 && (m += K.nodeValue.length), (ye = K.firstChild) !== null; )
              G = K, K = ye;
            for (; ; ) {
              if (K === n) break t;
              if (G === l && ++A === c && (E = m), G === d && ++X === o && (b = m), (ye = K.nextSibling) !== null) break;
              K = G, G = K.parentNode;
            }
            K = ye;
          }
          l = E === -1 || b === -1 ? null : { start: E, end: b };
        } else l = null;
      }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (ss = { focusedElem: n, selectionRange: l }, dl = !1, Te = r; Te !== null; ) if (r = Te, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null) n.return = r, Te = n;
    else for (; Te !== null; ) {
      r = Te;
      try {
        var xe = r.alternate;
        if (r.flags & 1024) switch (r.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (xe !== null) {
              var Le = xe.memoizedProps, Nn = xe.memoizedState, D = r.stateNode, x = D.getSnapshotBeforeUpdate(r.elementType === r.type ? Le : ta(r.type, Le), Nn);
              D.__reactInternalSnapshotBeforeUpdate = x;
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
            throw Error(w(163));
        }
      } catch (te) {
        wn(r, r.return, te);
      }
      if (n = r.sibling, n !== null) {
        n.return = r.return, Te = n;
        break;
      }
      Te = r.return;
    }
    return xe = Hd, Hd = !1, xe;
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
  function nf(n, r) {
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
  function rf(n) {
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
  function Xv(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, Xv(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[Ma], delete r[cs], delete r[cd], delete r[fd], delete r[ro])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function af(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function Os(n) {
    e: for (; ; ) {
      for (; n.sibling === null; ) {
        if (n.return === null || af(n.return)) return null;
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
    if (o === 5 || o === 6) n = n.stateNode, r ? l.nodeType === 8 ? l.parentNode.insertBefore(n, r) : l.insertBefore(n, r) : (l.nodeType === 8 ? (r = l.parentNode, r.insertBefore(n, l)) : (r = l, r.appendChild(n)), l = l._reactRootContainer, l != null || r.onclick !== null || (r.onclick = Ec));
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
        dr || kl(l, r);
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
        if (!dr && (o = l.updateQueue, o !== null && (o = o.lastEffect, o !== null))) {
          c = o = o.next;
          do {
            var d = c, m = d.destroy;
            d = d.tag, m !== void 0 && (d & 2 || d & 4) && Fd(l, r, m), c = c.next;
          } while (c !== o);
        }
        Fa(n, r, l);
        break;
      case 1:
        if (!dr && (kl(l, r), o = l.stateNode, typeof o.componentWillUnmount == "function")) try {
          o.props = l.memoizedProps, o.state = l.memoizedState, o.componentWillUnmount();
        } catch (E) {
          wn(l, r, E);
        }
        Fa(n, r, l);
        break;
      case 21:
        Fa(n, r, l);
        break;
      case 22:
        l.mode & 1 ? (dr = (o = dr) || l.memoizedState !== null, Fa(n, r, l), dr = o) : Fa(n, r, l);
        break;
      default:
        Fa(n, r, l);
    }
  }
  function Kv(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var l = n.stateNode;
      l === null && (l = n.stateNode = new uy()), r.forEach(function(o) {
        var c = py.bind(null, n, o);
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
        if (Sn === null) throw Error(w(160));
        qi(d, m, c), Sn = null, Ur = !1;
        var b = c.alternate;
        b !== null && (b.return = null), c.return = null;
      } catch (A) {
        wn(c, r, A);
      }
    }
    if (r.subtreeFlags & 12854) for (r = r.child; r !== null; ) Jv(r, n), r = r.sibling;
  }
  function Jv(n, r) {
    var l = n.alternate, o = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (ai(r, n), ii(n), o & 4) {
          try {
            mo(3, n, n.return), nf(3, n);
          } catch (Le) {
            wn(n, n.return, Le);
          }
          try {
            mo(5, n, n.return);
          } catch (Le) {
            wn(n, n.return, Le);
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
          } catch (Le) {
            wn(n, n.return, Le);
          }
        }
        if (o & 4 && (c = n.stateNode, c != null)) {
          var d = n.memoizedProps, m = l !== null ? l.memoizedProps : d, E = n.type, b = n.updateQueue;
          if (n.updateQueue = null, b !== null) try {
            E === "input" && d.type === "radio" && d.name != null && sn(c, d), dn(E, m);
            var A = dn(E, d);
            for (m = 0; m < b.length; m += 2) {
              var X = b[m], K = b[m + 1];
              X === "style" ? Ft(c, K) : X === "dangerouslySetInnerHTML" ? Li(c, K) : X === "children" ? fa(c, K) : st(c, X, K, A);
            }
            switch (E) {
              case "input":
                zn(c, d);
                break;
              case "textarea":
                Rr(c, d);
                break;
              case "select":
                var G = c._wrapperState.wasMultiple;
                c._wrapperState.wasMultiple = !!d.multiple;
                var ye = d.value;
                ye != null ? Qn(c, !!d.multiple, ye, !1) : G !== !!d.multiple && (d.defaultValue != null ? Qn(
                  c,
                  !!d.multiple,
                  d.defaultValue,
                  !0
                ) : Qn(c, !!d.multiple, d.multiple ? [] : "", !1));
            }
            c[cs] = d;
          } catch (Le) {
            wn(n, n.return, Le);
          }
        }
        break;
      case 6:
        if (ai(r, n), ii(n), o & 4) {
          if (n.stateNode === null) throw Error(w(162));
          c = n.stateNode, d = n.memoizedProps;
          try {
            c.nodeValue = d;
          } catch (Le) {
            wn(n, n.return, Le);
          }
        }
        break;
      case 3:
        if (ai(r, n), ii(n), o & 4 && l !== null && l.memoizedState.isDehydrated) try {
          Oa(r.containerInfo);
        } catch (Le) {
          wn(n, n.return, Le);
        }
        break;
      case 4:
        ai(r, n), ii(n);
        break;
      case 13:
        ai(r, n), ii(n), c = n.child, c.flags & 8192 && (d = c.memoizedState !== null, c.stateNode.isHidden = d, !d || c.alternate !== null && c.alternate.memoizedState !== null || (Vd = Pt())), o & 4 && Kv(n);
        break;
      case 22:
        if (X = l !== null && l.memoizedState !== null, n.mode & 1 ? (dr = (A = dr) || X, ai(r, n), dr = A) : ai(r, n), ii(n), o & 8192) {
          if (A = n.memoizedState !== null, (n.stateNode.isHidden = A) && !X && n.mode & 1) for (Te = n, X = n.child; X !== null; ) {
            for (K = Te = X; Te !== null; ) {
              switch (G = Te, ye = G.child, G.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  mo(4, G, G.return);
                  break;
                case 1:
                  kl(G, G.return);
                  var xe = G.stateNode;
                  if (typeof xe.componentWillUnmount == "function") {
                    o = G, l = G.return;
                    try {
                      r = o, xe.props = r.memoizedProps, xe.state = r.memoizedState, xe.componentWillUnmount();
                    } catch (Le) {
                      wn(o, l, Le);
                    }
                  }
                  break;
                case 5:
                  kl(G, G.return);
                  break;
                case 22:
                  if (G.memoizedState !== null) {
                    eh(K);
                    continue;
                  }
              }
              ye !== null ? (ye.return = G, Te = ye) : eh(K);
            }
            X = X.sibling;
          }
          e: for (X = null, K = n; ; ) {
            if (K.tag === 5) {
              if (X === null) {
                X = K;
                try {
                  c = K.stateNode, A ? (d = c.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none") : (E = K.stateNode, b = K.memoizedProps.style, m = b != null && b.hasOwnProperty("display") ? b.display : null, E.style.display = ct("display", m));
                } catch (Le) {
                  wn(n, n.return, Le);
                }
              }
            } else if (K.tag === 6) {
              if (X === null) try {
                K.stateNode.nodeValue = A ? "" : K.memoizedProps;
              } catch (Le) {
                wn(n, n.return, Le);
              }
            } else if ((K.tag !== 22 && K.tag !== 23 || K.memoizedState === null || K === n) && K.child !== null) {
              K.child.return = K, K = K.child;
              continue;
            }
            if (K === n) break e;
            for (; K.sibling === null; ) {
              if (K.return === null || K.return === n) break e;
              X === K && (X = null), K = K.return;
            }
            X === K && (X = null), K.sibling.return = K.return, K = K.sibling;
          }
        }
        break;
      case 19:
        ai(r, n), ii(n), o & 4 && Kv(n);
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
            if (af(l)) {
              var o = l;
              break e;
            }
            l = l.return;
          }
          throw Error(w(160));
        }
        switch (o.tag) {
          case 5:
            var c = o.stateNode;
            o.flags & 32 && (fa(c, ""), o.flags &= -33);
            var d = Os(n);
            Ti(n, d, c);
            break;
          case 3:
          case 4:
            var m = o.stateNode.containerInfo, E = Os(n);
            Ri(n, E, m);
            break;
          default:
            throw Error(w(161));
        }
      } catch (b) {
        wn(n, n.return, b);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function Ls(n, r, l) {
    Te = n, Zv(n);
  }
  function Zv(n, r, l) {
    for (var o = (n.mode & 1) !== 0; Te !== null; ) {
      var c = Te, d = c.child;
      if (c.tag === 22 && o) {
        var m = c.memoizedState !== null || mu;
        if (!m) {
          var E = c.alternate, b = E !== null && E.memoizedState !== null || dr;
          E = mu;
          var A = dr;
          if (mu = m, (dr = b) && !A) for (Te = c; Te !== null; ) m = Te, b = m.child, m.tag === 22 && m.memoizedState !== null ? Ns(c) : b !== null ? (b.return = m, Te = b) : Ns(c);
          for (; d !== null; ) Te = d, Zv(d), d = d.sibling;
          Te = c, mu = E, dr = A;
        }
        Pd(n);
      } else c.subtreeFlags & 8772 && d !== null ? (d.return = c, Te = d) : Pd(n);
    }
  }
  function Pd(n) {
    for (; Te !== null; ) {
      var r = Te;
      if (r.flags & 8772) {
        var l = r.alternate;
        try {
          if (r.flags & 8772) switch (r.tag) {
            case 0:
            case 11:
            case 15:
              dr || nf(5, r);
              break;
            case 1:
              var o = r.stateNode;
              if (r.flags & 4 && !dr) if (l === null) o.componentDidMount();
              else {
                var c = r.elementType === r.type ? l.memoizedProps : ta(r.type, l.memoizedProps);
                o.componentDidUpdate(c, l.memoizedState, o.__reactInternalSnapshotBeforeUpdate);
              }
              var d = r.updateQueue;
              d !== null && Td(r, d, o);
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
                Td(r, m, l);
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
                var A = r.alternate;
                if (A !== null) {
                  var X = A.memoizedState;
                  if (X !== null) {
                    var K = X.dehydrated;
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
              throw Error(w(163));
          }
          dr || r.flags & 512 && rf(r);
        } catch (G) {
          wn(r, r.return, G);
        }
      }
      if (r === n) {
        Te = null;
        break;
      }
      if (l = r.sibling, l !== null) {
        l.return = r.return, Te = l;
        break;
      }
      Te = r.return;
    }
  }
  function eh(n) {
    for (; Te !== null; ) {
      var r = Te;
      if (r === n) {
        Te = null;
        break;
      }
      var l = r.sibling;
      if (l !== null) {
        l.return = r.return, Te = l;
        break;
      }
      Te = r.return;
    }
  }
  function Ns(n) {
    for (; Te !== null; ) {
      var r = Te;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var l = r.return;
            try {
              nf(4, r);
            } catch (b) {
              wn(r, l, b);
            }
            break;
          case 1:
            var o = r.stateNode;
            if (typeof o.componentDidMount == "function") {
              var c = r.return;
              try {
                o.componentDidMount();
              } catch (b) {
                wn(r, c, b);
              }
            }
            var d = r.return;
            try {
              rf(r);
            } catch (b) {
              wn(r, d, b);
            }
            break;
          case 5:
            var m = r.return;
            try {
              rf(r);
            } catch (b) {
              wn(r, m, b);
            }
        }
      } catch (b) {
        wn(r, r.return, b);
      }
      if (r === n) {
        Te = null;
        break;
      }
      var E = r.sibling;
      if (E !== null) {
        E.return = r.return, Te = E;
        break;
      }
      Te = r.return;
    }
  }
  var th = Math.ceil, lf = Qe.ReactCurrentDispatcher, yu = Qe.ReactCurrentOwner, kr = Qe.ReactCurrentBatchConfig, Ct = 0, Bn = null, Ln = null, pr = 0, Sa = 0, yo = Kr(0), Gn = 0, gu = null, Su = 0, Eu = 0, Ms = 0, go = null, aa = null, Vd = 0, So = 1 / 0, Gi = null, Dl = !1, zs = null, Ha = null, uf = !1, Ol = null, Us = 0, Eo = 0, Co = null, Cu = -1, As = 0;
  function an() {
    return Ct & 6 ? Pt() : Cu !== -1 ? Cu : Cu = Pt();
  }
  function Ea(n) {
    return n.mode & 1 ? Ct & 2 && pr !== 0 ? pr & -pr : ou.transition !== null ? (As === 0 && (As = ql()), As) : (n = wt, n !== 0 || (n = window.event, n = n === void 0 ? 16 : Go(n.type)), n) : 1;
  }
  function Ca(n, r, l, o) {
    if (50 < Eo) throw Eo = 0, Co = null, Error(w(185));
    fl(n, l, o), (!(Ct & 2) || n !== Bn) && (n === Bn && (!(Ct & 2) && (Eu |= l), Gn === 4 && Ll(n, pr)), ar(n, o), l === 1 && Ct === 0 && !(r.mode & 1) && (So = Pt() + 500, ds && Mr()));
  }
  function ar(n, r) {
    var l = n.callbackNode;
    Fu(n, r);
    var o = pi(n, n === Bn ? pr : 0);
    if (o === 0) l !== null && pn(l), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = o & -o, n.callbackPriority !== r) {
      if (l != null && pn(l), r === 1) n.tag === 0 ? dd(Ps.bind(null, n)) : yl(Ps.bind(null, n)), ay(function() {
        !(Ct & 6) && Mr();
      }), l = null;
      else {
        switch (qo(o)) {
          case 1:
            l = at;
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
        l = uh(l, nh.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = l;
    }
  }
  function nh(n, r) {
    if (Cu = -1, As = 0, Ct & 6) throw Error(w(327));
    var l = n.callbackNode;
    if (Ro() && n.callbackNode !== l) return null;
    var o = pi(n, n === Bn ? pr : 0);
    if (o === 0) return null;
    if (o & 30 || o & n.expiredLanes || r) r = cf(n, o);
    else {
      r = o;
      var c = Ct;
      Ct |= 2;
      var d = rh();
      (Bn !== n || pr !== r) && (Gi = null, So = Pt() + 500, Tu(n, r));
      do
        try {
          cy();
          break;
        } catch (E) {
          sf(n, E);
        }
      while (!0);
      Sd(), lf.current = d, Ct = c, Ln !== null ? r = 0 : (Bn = null, pr = 0, r = Gn);
    }
    if (r !== 0) {
      if (r === 2 && (c = Fi(n), c !== 0 && (o = c, r = js(n, c))), r === 1) throw l = gu, Tu(n, 0), Ll(n, o), ar(n, Pt()), l;
      if (r === 6) Ll(n, o);
      else {
        if (c = n.current.alternate, !(o & 30) && !Hs(c) && (r = cf(n, o), r === 2 && (d = Fi(n), d !== 0 && (o = d, r = js(n, d))), r === 1)) throw l = gu, Tu(n, 0), Ll(n, o), ar(n, Pt()), l;
        switch (n.finishedWork = c, n.finishedLanes = o, r) {
          case 0:
          case 1:
            throw Error(w(345));
          case 2:
            bu(n, aa, Gi);
            break;
          case 3:
            if (Ll(n, o), (o & 130023424) === o && (r = Vd + 500 - Pt(), 10 < r)) {
              if (pi(n, 0) !== 0) break;
              if (c = n.suspendedLanes, (c & o) !== o) {
                an(), n.pingedLanes |= n.suspendedLanes & c;
                break;
              }
              n.timeoutHandle = Cc(bu.bind(null, n, aa, Gi), r);
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
            if (o = c, o = Pt() - o, o = (120 > o ? 120 : 480 > o ? 480 : 1080 > o ? 1080 : 1920 > o ? 1920 : 3e3 > o ? 3e3 : 4320 > o ? 4320 : 1960 * th(o / 1960)) - o, 10 < o) {
              n.timeoutHandle = Cc(bu.bind(null, n, aa, Gi), o);
              break;
            }
            bu(n, aa, Gi);
            break;
          case 5:
            bu(n, aa, Gi);
            break;
          default:
            throw Error(w(329));
        }
      }
    }
    return ar(n, Pt()), n.callbackNode === l ? nh.bind(null, n) : null;
  }
  function js(n, r) {
    var l = go;
    return n.current.memoizedState.isDehydrated && (Tu(n, r).flags |= 256), n = cf(n, r), n !== 2 && (r = aa, aa = l, r !== null && Fs(r)), n;
  }
  function Fs(n) {
    aa === null ? aa = n : aa.push.apply(aa, n);
  }
  function Hs(n) {
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
    for (r &= ~Ms, r &= ~Eu, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var l = 31 - Or(r), o = 1 << l;
      n[l] = -1, r &= ~o;
    }
  }
  function Ps(n) {
    if (Ct & 6) throw Error(w(327));
    Ro();
    var r = pi(n, 0);
    if (!(r & 1)) return ar(n, Pt()), null;
    var l = cf(n, r);
    if (n.tag !== 0 && l === 2) {
      var o = Fi(n);
      o !== 0 && (r = o, l = js(n, o));
    }
    if (l === 1) throw l = gu, Tu(n, 0), Ll(n, r), ar(n, Pt()), l;
    if (l === 6) throw Error(w(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, bu(n, aa, Gi), ar(n, Pt()), null;
  }
  function of(n, r) {
    var l = Ct;
    Ct |= 1;
    try {
      return n(r);
    } finally {
      Ct = l, Ct === 0 && (So = Pt() + 500, ds && Mr());
    }
  }
  function Ru(n) {
    Ol !== null && Ol.tag === 0 && !(Ct & 6) && Ro();
    var r = Ct;
    Ct |= 1;
    var l = kr.transition, o = wt;
    try {
      if (kr.transition = null, wt = 1, n) return n();
    } finally {
      wt = o, kr.transition = l, Ct = r, !(Ct & 6) && Mr();
    }
  }
  function Bd() {
    Sa = yo.current, Jt(yo);
  }
  function Tu(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var l = n.timeoutHandle;
    if (l !== -1 && (n.timeoutHandle = -1, Dv(l)), Ln !== null) for (l = Ln.return; l !== null; ) {
      var o = l;
      switch (_c(o), o.tag) {
        case 1:
          o = o.type.childContextTypes, o != null && gi();
          break;
        case 3:
          oo(), Jt(Fn), Jt(_n), gs();
          break;
        case 5:
          wd(o);
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
          Ed(o.type._context);
          break;
        case 22:
        case 23:
          Bd();
      }
      l = l.return;
    }
    if (Bn = n, Ln = n = Nl(n.current, null), pr = Sa = r, Gn = 0, gu = null, Ms = Eu = Su = 0, aa = go = null, su !== null) {
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
  function sf(n, r) {
    do {
      var l = Ln;
      try {
        if (Sd(), Fe.current = Wt, Dc) {
          for (var o = it.memoizedState; o !== null; ) {
            var c = o.queue;
            c !== null && (c.pending = null), o = o.next;
          }
          Dc = !1;
        }
        if (Tt = 0, Wn = Zt = it = null, Ss = !1, Es = 0, yu.current = null, l === null || l.return === null) {
          Gn = 1, gu = r, Ln = null;
          break;
        }
        e: {
          var d = n, m = l.return, E = l, b = r;
          if (r = pr, E.flags |= 32768, b !== null && typeof b == "object" && typeof b.then == "function") {
            var A = b, X = E, K = X.tag;
            if (!(X.mode & 1) && (K === 0 || K === 11 || K === 15)) {
              var G = X.alternate;
              G ? (X.updateQueue = G.updateQueue, X.memoizedState = G.memoizedState, X.lanes = G.lanes) : (X.updateQueue = null, X.memoizedState = null);
            }
            var ye = Md(m);
            if (ye !== null) {
              ye.flags &= -257, Iv(ye, m, E, d, r), ye.mode & 1 && Nd(d, A, r), r = ye, b = A;
              var xe = r.updateQueue;
              if (xe === null) {
                var Le = /* @__PURE__ */ new Set();
                Le.add(b), r.updateQueue = Le;
              } else xe.add(b);
              break e;
            } else {
              if (!(r & 1)) {
                Nd(d, A, r), $d();
                break e;
              }
              b = Error(w(426));
            }
          } else if (vn && E.mode & 1) {
            var Nn = Md(m);
            if (Nn !== null) {
              !(Nn.flags & 65536) && (Nn.flags |= 256), Iv(Nn, m, E, d, r), vs(xl(b, E));
              break e;
            }
          }
          d = b = xl(b, E), Gn !== 4 && (Gn = 2), go === null ? go = [d] : go.push(d), d = m;
          do {
            switch (d.tag) {
              case 3:
                d.flags |= 65536, r &= -r, d.lanes |= r;
                var D = ws(d, b, r);
                Fv(d, D);
                break e;
              case 1:
                E = b;
                var x = d.type, N = d.stateNode;
                if (!(d.flags & 128) && (typeof x.getDerivedStateFromError == "function" || N !== null && typeof N.componentDidCatch == "function" && (Ha === null || !Ha.has(N)))) {
                  d.flags |= 65536, r &= -r, d.lanes |= r;
                  var te = Yv(d, E, r);
                  Fv(d, te);
                  break e;
                }
            }
            d = d.return;
          } while (d !== null);
        }
        ah(l);
      } catch (Ne) {
        r = Ne, Ln === l && l !== null && (Ln = l = l.return);
        continue;
      }
      break;
    } while (!0);
  }
  function rh() {
    var n = lf.current;
    return lf.current = Wt, n === null ? Wt : n;
  }
  function $d() {
    (Gn === 0 || Gn === 3 || Gn === 2) && (Gn = 4), Bn === null || !(Su & 268435455) && !(Eu & 268435455) || Ll(Bn, pr);
  }
  function cf(n, r) {
    var l = Ct;
    Ct |= 2;
    var o = rh();
    (Bn !== n || pr !== r) && (Gi = null, Tu(n, r));
    do
      try {
        sy();
        break;
      } catch (c) {
        sf(n, c);
      }
    while (!0);
    if (Sd(), Ct = l, lf.current = o, Ln !== null) throw Error(w(261));
    return Bn = null, pr = 0, Gn;
  }
  function sy() {
    for (; Ln !== null; ) Yd(Ln);
  }
  function cy() {
    for (; Ln !== null && !Tr(); ) Yd(Ln);
  }
  function Yd(n) {
    var r = Qd(n.alternate, n, Sa);
    n.memoizedProps = n.pendingProps, r === null ? ah(n) : Ln = r, yu.current = null;
  }
  function ah(n) {
    var r = n;
    do {
      var l = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (l = Gv(l, r), l !== null) {
          l.flags &= 32767, Ln = l;
          return;
        }
        if (n !== null) n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          Gn = 6, Ln = null;
          return;
        }
      } else if (l = jd(l, r, Sa), l !== null) {
        Ln = l;
        return;
      }
      if (r = r.sibling, r !== null) {
        Ln = r;
        return;
      }
      Ln = r = n;
    } while (r !== null);
    Gn === 0 && (Gn = 5);
  }
  function bu(n, r, l) {
    var o = wt, c = kr.transition;
    try {
      kr.transition = null, wt = 1, fy(n, r, l, o);
    } finally {
      kr.transition = c, wt = o;
    }
    return null;
  }
  function fy(n, r, l, o) {
    do
      Ro();
    while (Ol !== null);
    if (Ct & 6) throw Error(w(327));
    l = n.finishedWork;
    var c = n.finishedLanes;
    if (l === null) return null;
    if (n.finishedWork = null, n.finishedLanes = 0, l === n.current) throw Error(w(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var d = l.lanes | l.childLanes;
    if (Qo(n, d), n === Bn && (Ln = Bn = null, pr = 0), !(l.subtreeFlags & 2064) && !(l.flags & 2064) || uf || (uf = !0, uh(Ui, function() {
      return Ro(), null;
    })), d = (l.flags & 15990) !== 0, l.subtreeFlags & 15990 || d) {
      d = kr.transition, kr.transition = null;
      var m = wt;
      wt = 1;
      var E = Ct;
      Ct |= 4, yu.current = null, oy(n, l), Jv(l, n), Ev(ss), dl = !!ru, ss = ru = null, n.current = l, Ls(l), Xa(), Ct = E, wt = m, kr.transition = d;
    } else n.current = l;
    if (uf && (uf = !1, Ol = n, Us = c), d = n.pendingLanes, d === 0 && (Ha = null), Yo(l.stateNode), ar(n, Pt()), r !== null) for (o = n.onRecoverableError, l = 0; l < r.length; l++) c = r[l], o(c.value, { componentStack: c.stack, digest: c.digest });
    if (Dl) throw Dl = !1, n = zs, zs = null, n;
    return Us & 1 && n.tag !== 0 && Ro(), d = n.pendingLanes, d & 1 ? n === Co ? Eo++ : (Eo = 0, Co = n) : Eo = 0, Mr(), null;
  }
  function Ro() {
    if (Ol !== null) {
      var n = qo(Us), r = kr.transition, l = wt;
      try {
        if (kr.transition = null, wt = 16 > n ? 16 : n, Ol === null) var o = !1;
        else {
          if (n = Ol, Ol = null, Us = 0, Ct & 6) throw Error(w(331));
          var c = Ct;
          for (Ct |= 4, Te = n.current; Te !== null; ) {
            var d = Te, m = d.child;
            if (Te.flags & 16) {
              var E = d.deletions;
              if (E !== null) {
                for (var b = 0; b < E.length; b++) {
                  var A = E[b];
                  for (Te = A; Te !== null; ) {
                    var X = Te;
                    switch (X.tag) {
                      case 0:
                      case 11:
                      case 15:
                        mo(8, X, d);
                    }
                    var K = X.child;
                    if (K !== null) K.return = X, Te = K;
                    else for (; Te !== null; ) {
                      X = Te;
                      var G = X.sibling, ye = X.return;
                      if (Xv(X), X === A) {
                        Te = null;
                        break;
                      }
                      if (G !== null) {
                        G.return = ye, Te = G;
                        break;
                      }
                      Te = ye;
                    }
                  }
                }
                var xe = d.alternate;
                if (xe !== null) {
                  var Le = xe.child;
                  if (Le !== null) {
                    xe.child = null;
                    do {
                      var Nn = Le.sibling;
                      Le.sibling = null, Le = Nn;
                    } while (Le !== null);
                  }
                }
                Te = d;
              }
            }
            if (d.subtreeFlags & 2064 && m !== null) m.return = d, Te = m;
            else e: for (; Te !== null; ) {
              if (d = Te, d.flags & 2048) switch (d.tag) {
                case 0:
                case 11:
                case 15:
                  mo(9, d, d.return);
              }
              var D = d.sibling;
              if (D !== null) {
                D.return = d.return, Te = D;
                break e;
              }
              Te = d.return;
            }
          }
          var x = n.current;
          for (Te = x; Te !== null; ) {
            m = Te;
            var N = m.child;
            if (m.subtreeFlags & 2064 && N !== null) N.return = m, Te = N;
            else e: for (m = x; Te !== null; ) {
              if (E = Te, E.flags & 2048) try {
                switch (E.tag) {
                  case 0:
                  case 11:
                  case 15:
                    nf(9, E);
                }
              } catch (Ne) {
                wn(E, E.return, Ne);
              }
              if (E === m) {
                Te = null;
                break e;
              }
              var te = E.sibling;
              if (te !== null) {
                te.return = E.return, Te = te;
                break e;
              }
              Te = E.return;
            }
          }
          if (Ct = c, Mr(), Wr && typeof Wr.onPostCommitFiberRoot == "function") try {
            Wr.onPostCommitFiberRoot(ol, n);
          } catch {
          }
          o = !0;
        }
        return o;
      } finally {
        wt = l, kr.transition = r;
      }
    }
    return !1;
  }
  function ih(n, r, l) {
    r = xl(l, r), r = ws(n, r, 1), n = Tl(n, r, 1), r = an(), n !== null && (fl(n, 1, r), ar(n, r));
  }
  function wn(n, r, l) {
    if (n.tag === 3) ih(n, n, l);
    else for (; r !== null; ) {
      if (r.tag === 3) {
        ih(r, n, l);
        break;
      } else if (r.tag === 1) {
        var o = r.stateNode;
        if (typeof r.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (Ha === null || !Ha.has(o))) {
          n = xl(l, n), n = Yv(r, n, 1), r = Tl(r, n, 1), n = an(), r !== null && (fl(r, 1, n), ar(r, n));
          break;
        }
      }
      r = r.return;
    }
  }
  function Id(n, r, l) {
    var o = n.pingCache;
    o !== null && o.delete(r), r = an(), n.pingedLanes |= n.suspendedLanes & l, Bn === n && (pr & l) === l && (Gn === 4 || Gn === 3 && (pr & 130023424) === pr && 500 > Pt() - Vd ? Tu(n, 0) : Ms |= l), ar(n, r);
  }
  function lh(n, r) {
    r === 0 && (n.mode & 1 ? (r = sl, sl <<= 1, !(sl & 130023424) && (sl = 4194304)) : r = 1);
    var l = an();
    n = Ei(n, r), n !== null && (fl(n, r, l), ar(n, l));
  }
  function dy(n) {
    var r = n.memoizedState, l = 0;
    r !== null && (l = r.retryLane), lh(n, l);
  }
  function py(n, r) {
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
        throw Error(w(314));
    }
    o !== null && o.delete(r), lh(n, l);
  }
  var Qd;
  Qd = function(n, r, l) {
    if (n !== null) if (n.memoizedProps !== r.pendingProps || Fn.current) rr = !0;
    else {
      if (!(n.lanes & l) && !(r.flags & 128)) return rr = !1, tf(n, r, l);
      rr = !!(n.flags & 131072);
    }
    else rr = !1, vn && r.flags & 1048576 && Lv(r, El, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var o = r.type;
        ja(n, r), n = r.pendingProps;
        var c = ha(r, _n.current);
        lo(r, l), c = qe(null, r, o, n, c, l);
        var d = bl();
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, Hn(o) ? (d = !0, lu(r)) : d = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, Rl(r), c.updater = Qc, r.stateNode = c, c._reactInternals = r, Od(r, o, n, l), r = zd(null, r, o, !0, d, l)) : (r.tag = 0, vn && d && pd(r), On(null, r, c, l), r = r.child), r;
      case 16:
        o = r.elementType;
        e: {
          switch (ja(n, r), n = r.pendingProps, c = o._init, o = c(o._payload), r.type = o, c = r.tag = hy(o), n = ta(o, n), c) {
            case 0:
              r = Xc(null, r, o, n, l);
              break e;
            case 1:
              r = ly(null, r, o, n, l);
              break e;
            case 11:
              r = Gc(null, r, o, n, l);
              break e;
            case 14:
              r = na(null, r, o, ta(o.type, n), l);
              break e;
          }
          throw Error(w(
            306,
            o,
            ""
          ));
        }
        return r;
      case 0:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ta(o, c), Xc(n, r, o, c, l);
      case 1:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ta(o, c), ly(n, r, o, c, l);
      case 3:
        e: {
          if (Kc(r), n === null) throw Error(w(387));
          o = r.pendingProps, d = r.memoizedState, c = d.element, jv(n, r), xc(r, o, null, l);
          var m = r.memoizedState;
          if (o = m.element, d.isDehydrated) if (d = { element: o, isDehydrated: !1, cache: m.cache, pendingSuspenseBoundaries: m.pendingSuspenseBoundaries, transitions: m.transitions }, r.updateQueue.baseState = d, r.memoizedState = d, r.flags & 256) {
            c = xl(Error(w(423)), r), r = vo(n, r, o, l, c);
            break e;
          } else if (o !== c) {
            c = xl(Error(w(424)), r), r = vo(n, r, o, l, c);
            break e;
          } else for (Zr = ei(r.stateNode.containerInfo.firstChild), Jr = r, vn = !0, ni = null, l = cr(r, null, o, l), r.child = l; l; ) l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (Qi(), o === c) {
              r = fr(n, r, l);
              break e;
            }
            On(n, r, o, l);
          }
          r = r.child;
        }
        return r;
      case 5:
        return _d(r), n === null && yd(r), o = r.type, c = r.pendingProps, d = n !== null ? n.memoizedProps : null, m = c.children, au(o, c) ? m = null : d !== null && au(o, d) && (r.flags |= 32), xs(n, r), On(n, r, m, l), r.child;
      case 6:
        return n === null && yd(r), null;
      case 13:
        return Qv(n, r, l);
      case 4:
        return bd(r, r.stateNode.containerInfo), o = r.pendingProps, n === null ? r.child = ri(r, null, o, l) : On(n, r, o, l), r.child;
      case 11:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ta(o, c), Gc(n, r, o, c, l);
      case 7:
        return On(n, r, r.pendingProps, l), r.child;
      case 8:
        return On(n, r, r.pendingProps.children, l), r.child;
      case 12:
        return On(n, r, r.pendingProps.children, l), r.child;
      case 10:
        e: {
          if (o = r.type._context, c = r.pendingProps, d = r.memoizedProps, m = c.value, rn(se, o._currentValue), o._currentValue = m, d !== null) if (Za(d.value, m)) {
            if (d.children === c.children && !Fn.current) {
              r = fr(n, r, l);
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
                    var A = d.updateQueue;
                    if (A !== null) {
                      A = A.shared;
                      var X = A.pending;
                      X === null ? b.next = b : (b.next = X.next, X.next = b), A.pending = b;
                    }
                  }
                  d.lanes |= l, b = d.alternate, b !== null && (b.lanes |= l), Cd(
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
              if (m = d.return, m === null) throw Error(w(341));
              m.lanes |= l, E = m.alternate, E !== null && (E.lanes |= l), Cd(m, l, r), m = d.sibling;
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
          On(n, r, c.children, l), r = r.child;
        }
        return r;
      case 9:
        return c = r.type, o = r.pendingProps.children, lo(r, l), c = Qt(c), o = o(c), r.flags |= 1, On(n, r, o, l), r.child;
      case 14:
        return o = r.type, c = ta(o, r.pendingProps), c = ta(o.type, c), na(n, r, o, c, l);
      case 15:
        return hu(n, r, r.type, r.pendingProps, l);
      case 17:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ta(o, c), ja(n, r), r.tag = 1, Hn(o) ? (n = !0, lu(r)) : n = !1, lo(r, l), $v(r, o, c), Od(r, o, c, l), zd(null, r, o, !0, n, l);
      case 19:
        return ra(n, r, l);
      case 22:
        return ot(n, r, l);
    }
    throw Error(w(156, r.tag));
  };
  function uh(n, r) {
    return on(n, r);
  }
  function vy(n, r, l, o) {
    this.tag = n, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Pa(n, r, l, o) {
    return new vy(n, r, l, o);
  }
  function Wd(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function hy(n) {
    if (typeof n == "function") return Wd(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === Vt) return 11;
      if (n === Nt) return 14;
    }
    return 2;
  }
  function Nl(n, r) {
    var l = n.alternate;
    return l === null ? (l = Pa(n.tag, r, n.key, n.mode), l.elementType = n.elementType, l.type = n.type, l.stateNode = n.stateNode, l.alternate = n, n.alternate = l) : (l.pendingProps = r, l.type = n.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = n.flags & 14680064, l.childLanes = n.childLanes, l.lanes = n.lanes, l.child = n.child, l.memoizedProps = n.memoizedProps, l.memoizedState = n.memoizedState, l.updateQueue = n.updateQueue, r = n.dependencies, l.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, l.sibling = n.sibling, l.index = n.index, l.ref = n.ref, l;
  }
  function ff(n, r, l, o, c, d) {
    var m = 2;
    if (o = n, typeof n == "function") Wd(n) && (m = 1);
    else if (typeof n == "string") m = 5;
    else e: switch (n) {
      case ft:
        return Ml(l.children, c, d, r);
      case $e:
        m = 8, c |= 8;
        break;
      case En:
        return n = Pa(12, l, r, c | 2), n.elementType = En, n.lanes = d, n;
      case gt:
        return n = Pa(13, l, r, c), n.elementType = gt, n.lanes = d, n;
      case Ye:
        return n = Pa(19, l, r, c), n.elementType = Ye, n.lanes = d, n;
      case lt:
        return To(l, c, d, r);
      default:
        if (typeof n == "object" && n !== null) switch (n.$$typeof) {
          case Lt:
            m = 10;
            break e;
          case ln:
            m = 9;
            break e;
          case Vt:
            m = 11;
            break e;
          case Nt:
            m = 14;
            break e;
          case vt:
            m = 16, o = null;
            break e;
        }
        throw Error(w(130, n == null ? n : typeof n, ""));
    }
    return r = Pa(m, l, r, c), r.elementType = n, r.type = o, r.lanes = d, r;
  }
  function Ml(n, r, l, o) {
    return n = Pa(7, n, o, r), n.lanes = l, n;
  }
  function To(n, r, l, o) {
    return n = Pa(22, n, o, r), n.elementType = lt, n.lanes = l, n.stateNode = { isHidden: !1 }, n;
  }
  function _u(n, r, l) {
    return n = Pa(6, n, null, r), n.lanes = l, n;
  }
  function qd(n, r, l) {
    return r = Pa(4, n.children !== null ? n.children : [], n.key, r), r.lanes = l, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function oh(n, r, l, o, c) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Gl(0), this.expirationTimes = Gl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Gl(0), this.identifierPrefix = o, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function df(n, r, l, o, c, d, m, E, b) {
    return n = new oh(n, r, l, E, b), r === 1 ? (r = 1, d === !0 && (r |= 8)) : r = 0, d = Pa(3, null, null, r), n.current = d, d.stateNode = n, d.memoizedState = { element: o, isDehydrated: l, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Rl(d), n;
  }
  function sh(n, r, l) {
    var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: Oe, key: o == null ? null : "" + o, children: n, containerInfo: r, implementation: l };
  }
  function ch(n) {
    if (!n) return mt;
    n = n._reactInternals;
    e: {
      if (pe(n) !== n || n.tag !== 1) throw Error(w(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (Hn(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(w(171));
    }
    if (n.tag === 1) {
      var l = n.type;
      if (Hn(l)) return Ov(n, l, r);
    }
    return r;
  }
  function Gd(n, r, l, o, c, d, m, E, b) {
    return n = df(l, o, !0, n, c, d, m, E, b), n.context = ch(null), l = n.current, o = an(), c = Ea(l), d = Wi(o, c), d.callback = r ?? null, Tl(l, d, c), n.current.lanes = c, fl(n, c, o), ar(n, o), n;
  }
  function pf(n, r, l, o) {
    var c = r.current, d = an(), m = Ea(c);
    return l = ch(l), r.context === null ? r.context = l : r.pendingContext = l, r = Wi(d, m), r.payload = { element: n }, o = o === void 0 ? null : o, o !== null && (r.callback = o), n = Tl(c, r, m), n !== null && (Ca(n, c, m, d), wc(n, c, m)), m;
  }
  function vf(n) {
    if (n = n.current, !n.child) return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function fh(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var l = n.retryLane;
      n.retryLane = l !== 0 && l < r ? l : r;
    }
  }
  function hf(n, r) {
    fh(n, r), (n = n.alternate) && fh(n, r);
  }
  var Xd = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function mf(n) {
    this._internalRoot = n;
  }
  Xi.prototype.render = mf.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null) throw Error(w(409));
    pf(n, r, null, null);
  }, Xi.prototype.unmount = mf.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Ru(function() {
        pf(null, n, null, null);
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
  function Kd(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function yf(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function dh() {
  }
  function my(n, r, l, o, c) {
    if (c) {
      if (typeof o == "function") {
        var d = o;
        o = function() {
          var A = vf(m);
          d.call(A);
        };
      }
      var m = Gd(r, o, n, 0, null, !1, !1, "", dh);
      return n._reactRootContainer = m, n[Yi] = m.current, us(n.nodeType === 8 ? n.parentNode : n), Ru(), m;
    }
    for (; c = n.lastChild; ) n.removeChild(c);
    if (typeof o == "function") {
      var E = o;
      o = function() {
        var A = vf(b);
        E.call(A);
      };
    }
    var b = df(n, 0, !1, null, null, !1, !1, "", dh);
    return n._reactRootContainer = b, n[Yi] = b.current, us(n.nodeType === 8 ? n.parentNode : n), Ru(function() {
      pf(r, b, l, o);
    }), b;
  }
  function gf(n, r, l, o, c) {
    var d = l._reactRootContainer;
    if (d) {
      var m = d;
      if (typeof c == "function") {
        var E = c;
        c = function() {
          var b = vf(m);
          E.call(b);
        };
      }
      pf(r, m, n, c);
    } else m = my(l, r, n, c, o);
    return vf(m);
  }
  Hu = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var l = qr(r.pendingLanes);
          l !== 0 && (Wo(r, l | 1), ar(r, Pt()), !(Ct & 6) && (So = Pt() + 500, Mr()));
        }
        break;
      case 13:
        Ru(function() {
          var o = Ei(n, 1);
          if (o !== null) {
            var c = an();
            Ca(o, n, 1, c);
          }
        }), hf(n, 1);
    }
  }, xt = function(n) {
    if (n.tag === 13) {
      var r = Ei(n, 134217728);
      if (r !== null) {
        var l = an();
        Ca(r, n, 134217728, l);
      }
      hf(n, 134217728);
    }
  }, oc = function(n) {
    if (n.tag === 13) {
      var r = Ea(n), l = Ei(n, r);
      if (l !== null) {
        var o = an();
        Ca(l, n, r, o);
      }
      hf(n, r);
    }
  }, vi = function() {
    return wt;
  }, Ze = function(n, r) {
    var l = wt;
    try {
      return wt = n, r();
    } finally {
      wt = l;
    }
  }, qt = function(n, r, l) {
    switch (r) {
      case "input":
        if (zn(n, l), r = l.name, l.type === "radio" && r != null) {
          for (l = n; l.parentNode; ) l = l.parentNode;
          for (l = l.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < l.length; r++) {
            var o = l[r];
            if (o !== n && o.form === n.form) {
              var c = Ii(o);
              if (!c) throw Error(w(90));
              Yn(o), zn(o, c);
            }
          }
        }
        break;
      case "textarea":
        Rr(n, l);
        break;
      case "select":
        r = l.value, r != null && Qn(n, !!l.multiple, r, !1);
    }
  }, Il = of, Ql = Ru;
  var yy = { usingClientEntryPoint: !1, Events: [fs, je, Ii, ka, Ni, of] }, bo = { findFiberByHostInstance: iu, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, gy = { bundleType: bo.bundleType, version: bo.version, rendererPackageName: bo.rendererPackageName, rendererConfig: bo.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Qe.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = dt(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: bo.findFiberByHostInstance, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Sf = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Sf.isDisabled && Sf.supportsFiber) try {
      ol = Sf.inject(gy), Wr = Sf;
    } catch {
    }
  }
  return Qa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = yy, Qa.createPortal = function(n, r) {
    var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Kd(r)) throw Error(w(200));
    return sh(n, r, null, l);
  }, Qa.createRoot = function(n, r) {
    if (!Kd(n)) throw Error(w(299));
    var l = !1, o = "", c = Xd;
    return r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (o = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), r = df(n, 1, !1, null, null, l, !1, o, c), n[Yi] = r.current, us(n.nodeType === 8 ? n.parentNode : n), new mf(r);
  }, Qa.findDOMNode = function(n) {
    if (n == null) return null;
    if (n.nodeType === 1) return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(w(188)) : (n = Object.keys(n).join(","), Error(w(268, n)));
    return n = dt(r), n = n === null ? null : n.stateNode, n;
  }, Qa.flushSync = function(n) {
    return Ru(n);
  }, Qa.hydrate = function(n, r, l) {
    if (!yf(r)) throw Error(w(200));
    return gf(null, n, r, !0, l);
  }, Qa.hydrateRoot = function(n, r, l) {
    if (!Kd(n)) throw Error(w(405));
    var o = l != null && l.hydratedSources || null, c = !1, d = "", m = Xd;
    if (l != null && (l.unstable_strictMode === !0 && (c = !0), l.identifierPrefix !== void 0 && (d = l.identifierPrefix), l.onRecoverableError !== void 0 && (m = l.onRecoverableError)), r = Gd(r, null, n, 1, l ?? null, c, !1, d, m), n[Yi] = r.current, us(n), o) for (n = 0; n < o.length; n++) l = o[n], c = l._getVersion, c = c(l._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [l, c] : r.mutableSourceEagerHydrationData.push(
      l,
      c
    );
    return new Xi(r);
  }, Qa.render = function(n, r, l) {
    if (!yf(r)) throw Error(w(200));
    return gf(null, n, r, !1, l);
  }, Qa.unmountComponentAtNode = function(n) {
    if (!yf(n)) throw Error(w(40));
    return n._reactRootContainer ? (Ru(function() {
      gf(null, null, n, !1, function() {
        n._reactRootContainer = null, n[Yi] = null;
      });
    }), !0) : !1;
  }, Qa.unstable_batchedUpdates = of, Qa.unstable_renderSubtreeIntoContainer = function(n, r, l, o) {
    if (!yf(l)) throw Error(w(200));
    if (n == null || n._reactInternals === void 0) throw Error(w(38));
    return gf(n, r, l, !1, o);
  }, Qa.version = "18.3.1-next-f1338f8080-20240426", Qa;
}
var Wa = {}, uT;
function dk() {
  if (uT) return Wa;
  uT = 1;
  var H = {};
  /**
   * @license React
   * react-dom.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  return H.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var Q = At, w = cT(), Se = Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, be = !1;
    function Ge(e) {
      be = e;
    }
    function Me(e) {
      if (!be) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        We("warn", e, a);
      }
    }
    function S(e) {
      if (!be) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        We("error", e, a);
      }
    }
    function We(e, t, a) {
      {
        var i = Se.ReactDebugCurrentFrame, u = i.getStackAddendum();
        u !== "" && (t += "%s", a = a.concat([u]));
        var s = a.map(function(f) {
          return String(f);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var he = 0, Z = 1, ae = 2, F = 3, ee = 4, q = 5, fe = 6, ue = 7, mn = 8, jt = 9, st = 10, Qe = 11, Ot = 12, Oe = 13, ft = 14, $e = 15, En = 16, Lt = 17, ln = 18, Vt = 19, gt = 21, Ye = 22, Nt = 23, vt = 24, lt = 25, I = !0, Ce = !1, oe = !1, C = !1, M = !1, ne = !0, Re = !0, _e = !0, Ue = !0, Ae = /* @__PURE__ */ new Set(), Pe = {}, nt = {};
    function _t(e, t) {
      Cn(e, t), Cn(e + "Capture", t);
    }
    function Cn(e, t) {
      Pe[e] && S("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), Pe[e] = t;
      {
        var a = e.toLowerCase();
        nt[a] = e, e === "onDoubleClick" && (nt.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        Ae.add(t[i]);
    }
    var Yn = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", In = Object.prototype.hasOwnProperty;
    function Tn(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function Bt(e) {
      try {
        return sn(e), !1;
      } catch {
        return !0;
      }
    }
    function sn(e) {
      return "" + e;
    }
    function zn(e, t) {
      if (Bt(e))
        return S("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Tn(e)), sn(e);
    }
    function ca(e) {
      if (Bt(e))
        return S("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Tn(e)), sn(e);
    }
    function qa(e, t) {
      if (Bt(e))
        return S("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Tn(e)), sn(e);
    }
    function Dr(e, t) {
      if (Bt(e))
        return S("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Tn(e)), sn(e);
    }
    function Qn(e) {
      if (Bt(e))
        return S("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", Tn(e)), sn(e);
    }
    function Kn(e) {
      if (Bt(e))
        return S("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", Tn(e)), sn(e);
    }
    var Jn = 0, Rr = 1, Ga = 2, Un = 3, ur = 4, Ir = 5, Li = 6, fa = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", ie = fa + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", Ve = new RegExp("^[" + fa + "][" + ie + "]*$"), ct = {}, Ft = {};
    function cn(e) {
      return In.call(Ft, e) ? !0 : In.call(ct, e) ? !1 : Ve.test(e) ? (Ft[e] = !0, !0) : (ct[e] = !0, S("Invalid attribute name: `%s`", e), !1);
    }
    function fn(e, t, a) {
      return t !== null ? t.type === Jn : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function dn(e, t, a, i) {
      if (a !== null && a.type === Jn)
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
    function Zn(e, t, a, i) {
      if (t === null || typeof t > "u" || dn(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case Un:
            return !t;
          case ur:
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
      this.acceptsBooleans = t === Ga || t === Un || t === ur, this.attributeName = i, this.attributeNamespace = u, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = f;
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
        Jn,
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
        Un,
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
        Un,
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
        ur,
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
        zn(a, t), i.sanitizeURL && Mi("" + a);
        var s = i.attributeName, f = null;
        if (i.type === ur) {
          if (e.hasAttribute(s)) {
            var p = e.getAttribute(s);
            return p === "" ? !0 : Zn(t, a, i, !1) ? p : p === "" + a ? a : p;
          }
        } else if (e.hasAttribute(s)) {
          if (Zn(t, a, i, !1))
            return e.getAttribute(s);
          if (i.type === Un)
            return a;
          f = e.getAttribute(s);
        }
        return Zn(t, a, i, !1) ? f === null ? a : f : f === "" + a ? a : f;
      }
    }
    function si(e, t, a, i) {
      {
        if (!cn(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var u = e.getAttribute(t);
        return zn(a, t), u === "" + a ? a : u;
      }
    }
    function pa(e, t, a, i) {
      var u = un(t);
      if (!fn(t, u, i)) {
        if (Zn(t, a, u, i) && (a = null), i || u === null) {
          if (cn(t)) {
            var s = t;
            a === null ? e.removeAttribute(s) : (zn(a, t), e.setAttribute(s, "" + a));
          }
          return;
        }
        var f = u.mustUseProperty;
        if (f) {
          var p = u.propertyName;
          if (a === null) {
            var v = u.type;
            e[p] = v === Un ? !1 : "";
          } else
            e[p] = a;
          return;
        }
        var y = u.attributeName, g = u.attributeNamespace;
        if (a === null)
          e.removeAttribute(y);
        else {
          var k = u.type, _;
          k === Un || k === ur && a === !0 ? _ = "" : (zn(a, y), _ = "" + a, u.sanitizeURL && Mi(_.toString())), g ? e.setAttributeNS(g, y, _) : e.setAttribute(y, _);
        }
      }
    }
    var or = Symbol.for("react.element"), va = Symbol.for("react.portal"), Qr = Symbol.for("react.fragment"), ci = Symbol.for("react.strict_mode"), fi = Symbol.for("react.profiler"), zi = Symbol.for("react.provider"), T = Symbol.for("react.context"), W = Symbol.for("react.forward_ref"), ce = Symbol.for("react.suspense"), pe = Symbol.for("react.suspense_list"), ht = Symbol.for("react.memo"), et = Symbol.for("react.lazy"), St = Symbol.for("react.scope"), dt = Symbol.for("react.debug_trace_mode"), xn = Symbol.for("react.offscreen"), on = Symbol.for("react.legacy_hidden"), pn = Symbol.for("react.cache"), Tr = Symbol.for("react.tracing_marker"), Xa = Symbol.iterator, Pt = "@@iterator";
    function yn(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = Xa && e[Xa] || e[Pt];
      return typeof t == "function" ? t : null;
    }
    var at = Object.assign, di = 0, Ui, ic, Ai, ol, Wr, Yo, Or;
    function Io() {
    }
    Io.__reactDisabledLog = !0;
    function lc() {
      {
        if (di === 0) {
          Ui = console.log, ic = console.info, Ai = console.warn, ol = console.error, Wr = console.group, Yo = console.groupCollapsed, Or = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Io,
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
    function uc() {
      {
        if (di--, di === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: at({}, e, {
              value: Ui
            }),
            info: at({}, e, {
              value: ic
            }),
            warn: at({}, e, {
              value: Ai
            }),
            error: at({}, e, {
              value: ol
            }),
            group: at({}, e, {
              value: Wr
            }),
            groupCollapsed: at({}, e, {
              value: Yo
            }),
            groupEnd: at({}, e, {
              value: Or
            })
          });
        }
        di < 0 && S("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ji = Se.ReactCurrentDispatcher, sl;
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
      s = ji.current, ji.current = null, lc();
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
            } catch (j) {
              i = j;
            }
            Reflect.construct(e, [], f);
          } else {
            try {
              f.call();
            } catch (j) {
              i = j;
            }
            e.call(f.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (j) {
            i = j;
          }
          e();
        }
      } catch (j) {
        if (j && i && typeof j.stack == "string") {
          for (var p = j.stack.split(`
`), v = i.stack.split(`
`), y = p.length - 1, g = v.length - 1; y >= 1 && g >= 0 && p[y] !== v[g]; )
            g--;
          for (; y >= 1 && g >= 0; y--, g--)
            if (p[y] !== v[g]) {
              if (y !== 1 || g !== 1)
                do
                  if (y--, g--, g < 0 || p[y] !== v[g]) {
                    var k = `
` + p[y].replace(" at new ", " at ");
                    return e.displayName && k.includes("<anonymous>") && (k = k.replace("<anonymous>", e.displayName)), typeof e == "function" && cl.set(e, k), k;
                  }
                while (y >= 1 && g >= 0);
              break;
            }
        }
      } finally {
        pi = !1, ji.current = s, uc(), Error.prepareStackTrace = u;
      }
      var _ = e ? e.displayName || e.name : "", U = _ ? qr(_) : "";
      return typeof e == "function" && cl.set(e, U), U;
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
    function Qo(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Fi(e, fl(e));
      if (typeof e == "string")
        return qr(e);
      switch (e) {
        case ce:
          return qr("Suspense");
        case pe:
          return qr("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case W:
            return Gl(e.render);
          case ht:
            return Qo(e.type, t, a);
          case et: {
            var i = e, u = i._payload, s = i._init;
            try {
              return Qo(s(u), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function Wo(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case q:
          return qr(e.type);
        case En:
          return qr("Lazy");
        case Oe:
          return qr("Suspense");
        case Vt:
          return qr("SuspenseList");
        case he:
        case ae:
        case $e:
          return Gl(e.type);
        case Qe:
          return Gl(e.type.render);
        case Z:
          return ql(e.type);
        default:
          return "";
      }
    }
    function wt(e) {
      try {
        var t = "", a = e;
        do
          t += Wo(a), a = a.return;
        while (a);
        return t;
      } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack;
      }
    }
    function qo(e, t, a) {
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
        case ce:
          return "Suspense";
        case pe:
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
          case W:
            return qo(e, e.render, "ForwardRef");
          case ht:
            var i = e.displayName || null;
            return i !== null ? i : xt(e.type) || "Memo";
          case et: {
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
    function oc(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function vi(e) {
      return e.displayName || "Context";
    }
    function Ze(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case vt:
          return "Cache";
        case jt:
          var i = a;
          return vi(i) + ".Consumer";
        case st:
          var u = a;
          return vi(u._context) + ".Provider";
        case ln:
          return "DehydratedFragment";
        case Qe:
          return oc(a, a.render, "ForwardRef");
        case ue:
          return "Fragment";
        case q:
          return a;
        case ee:
          return "Portal";
        case F:
          return "Root";
        case fe:
          return "Text";
        case En:
          return xt(a);
        case mn:
          return a === ci ? "StrictMode" : "Mode";
        case Ye:
          return "Offscreen";
        case Ot:
          return "Profiler";
        case gt:
          return "Scope";
        case Oe:
          return "Suspense";
        case Vt:
          return "SuspenseList";
        case lt:
          return "TracingMarker";
        case Z:
        case he:
        case Lt:
        case ae:
        case ft:
        case $e:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var Xl = Se.ReactDebugCurrentFrame, er = null, Gr = !1;
    function Lr() {
      {
        if (er === null)
          return null;
        var e = er._debugOwner;
        if (e !== null && typeof e < "u")
          return Ze(e);
      }
      return null;
    }
    function hi() {
      return er === null ? "" : wt(er);
    }
    function bn() {
      Xl.getCurrentStack = null, er = null, Gr = !1;
    }
    function Gt(e) {
      Xl.getCurrentStack = e === null ? null : hi, er = e, Gr = !1;
    }
    function Ka() {
      return er;
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
          return Kn(e), e;
        default:
          return "";
      }
    }
    var Xf = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function Pu(e, t) {
      Xf[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || S("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || S("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
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
      Kn(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var u = a.get, s = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return u.call(this);
          },
          set: function(p) {
            Kn(p), i = "" + p, s.call(this, p);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var f = {
          getValue: function() {
            return i;
          },
          setValue: function(p) {
            Kn(p), i = "" + p;
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
    function Go(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function Na(e, t) {
      var a = e, i = t.checked, u = at({}, t, {
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
        controlled: Go(t)
      };
    }
    function h(e, t) {
      var a = e, i = t.checked;
      i != null && pa(a, "checked", i, !1);
    }
    function R(e, t) {
      var a = e;
      {
        var i = Go(t);
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
      t.hasOwnProperty("value") ? we(a, t.type, u) : t.hasOwnProperty("defaultValue") && we(a, t.type, Nr(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function z(e, t, a) {
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
    function P(e, t) {
      var a = e;
      R(a, t), re(a, t);
    }
    function re(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        zn(a, "name");
        for (var u = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), s = 0; s < u.length; s++) {
          var f = u[s];
          if (!(f === e || f.form !== e.form)) {
            var p = Dh(f);
            if (!p)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            dl(f), R(f, p);
          }
        }
      }
    }
    function we(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || Hi(e.ownerDocument) !== e) && (a == null ? e.defaultValue = br(e._wrapperState.initialValue) : e.defaultValue !== br(a) && (e.defaultValue = br(a)));
    }
    var me = !1, Xe = !1, pt = !1;
    function $t(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? Q.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || Xe || (Xe = !0, S("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (pt || (pt = !0, S("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !me && (S("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), me = !0);
    }
    function Xt(e, t) {
      t.value != null && e.setAttribute("value", br(Nr(t.value)));
    }
    var Kt = Array.isArray;
    function ut(e) {
      return Kt(e);
    }
    var nn;
    nn = !1;
    function kn() {
      var e = Lr();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var Zl = ["value", "defaultValue"];
    function Xo(e) {
      {
        Pu("select", e);
        for (var t = 0; t < Zl.length; t++) {
          var a = Zl[t];
          if (e[a] != null) {
            var i = ut(e[a]);
            e.multiple && !i ? S("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, kn()) : !e.multiple && i && S("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, kn());
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
        for (var g = br(Nr(a)), k = null, _ = 0; _ < u.length; _++) {
          if (u[_].value === g) {
            u[_].selected = !0, i && (u[_].defaultSelected = !0);
            return;
          }
          k === null && !u[_].disabled && (k = u[_]);
        }
        k !== null && (k.selected = !0);
      }
    }
    function eu(e, t) {
      return at({}, t, {
        value: void 0
      });
    }
    function Ko(e, t) {
      var a = e;
      Xo(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !nn && (S("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), nn = !0);
    }
    function Kf(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? Vi(a, !!t.multiple, i, !1) : t.defaultValue != null && Vi(a, !!t.multiple, t.defaultValue, !0);
    }
    function sc(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var u = t.value;
      u != null ? Vi(a, !!t.multiple, u, !1) : i !== !!t.multiple && (t.defaultValue != null ? Vi(a, !!t.multiple, t.defaultValue, !0) : Vi(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function Jf(e, t) {
      var a = e, i = t.value;
      i != null && Vi(a, !!t.multiple, i, !1);
    }
    var ev = !1;
    function cc(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = at({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: br(a._wrapperState.initialValue)
      });
      return i;
    }
    function tv(e, t) {
      var a = e;
      Pu("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !ev && (S("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Lr() || "A component"), ev = !0);
      var i = t.value;
      if (i == null) {
        var u = t.children, s = t.defaultValue;
        if (u != null) {
          S("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (s != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (ut(u)) {
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
    function nv(e, t) {
      var a = e, i = Nr(t.value), u = Nr(t.defaultValue);
      if (i != null) {
        var s = br(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      u != null && (a.defaultValue = br(u));
    }
    function rv(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function Qm(e, t) {
      nv(e, t);
    }
    var Ja = "http://www.w3.org/1999/xhtml", Wm = "http://www.w3.org/1998/Math/MathML", Zf = "http://www.w3.org/2000/svg";
    function ed(e) {
      switch (e) {
        case "svg":
          return Zf;
        case "math":
          return Wm;
        default:
          return Ja;
      }
    }
    function fc(e, t) {
      return e == null || e === Ja ? ed(t) : e === Zf && t === "foreignObject" ? Ja : e;
    }
    var qm = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, u) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, u);
        });
      } : e;
    }, dc, av = qm(function(e, t) {
      if (e.namespaceURI === Zf && !("innerHTML" in e)) {
        dc = dc || document.createElement("div"), dc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = dc.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), Xr = 1, Bi = 3, An = 8, $i = 9, Jo = 11, vl = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === Bi) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, Gm = {
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
    function iv(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var lv = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Qu).forEach(function(e) {
      lv.forEach(function(t) {
        Qu[iv(t, e)] = Qu[e];
      });
    });
    function pc(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(Qu.hasOwnProperty(e) && Qu[e]) ? t + "px" : (Dr(t, e), ("" + t).trim());
    }
    var uv = /([A-Z])/g, Wu = /^ms-/;
    function Xm(e) {
      return e.replace(uv, "-$1").toLowerCase().replace(Wu, "-ms-");
    }
    var ov = function() {
    };
    {
      var Km = /^(?:webkit|moz|o)[A-Z]/, sv = /^-ms-/, cv = /-(.)/g, qu = /;\s*$/, mi = {}, td = {}, Zo = !1, fv = !1, dv = function(e) {
        return e.replace(cv, function(t, a) {
          return a.toUpperCase();
        });
      }, nd = function(e) {
        mi.hasOwnProperty(e) && mi[e] || (mi[e] = !0, S(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          dv(e.replace(sv, "ms-"))
        ));
      }, rd = function(e) {
        mi.hasOwnProperty(e) && mi[e] || (mi[e] = !0, S("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, pv = function(e, t) {
        td.hasOwnProperty(t) && td[t] || (td[t] = !0, S(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(qu, "")));
      }, vv = function(e, t) {
        Zo || (Zo = !0, S("`NaN` is an invalid value for the `%s` css style property.", e));
      }, hv = function(e, t) {
        fv || (fv = !0, S("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      ov = function(e, t) {
        e.indexOf("-") > -1 ? nd(e) : Km.test(e) ? rd(e) : qu.test(t) && pv(e, t), typeof t == "number" && (isNaN(t) ? vv(e, t) : isFinite(t) || hv(e, t));
      };
    }
    var Jm = ov;
    function Zm(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var u = e[i];
            if (u != null) {
              var s = i.indexOf("--") === 0;
              t += a + (s ? i : Xm(i)) + ":", t += pc(i, u, s), a = ";";
            }
          }
        return t || null;
      }
    }
    function mv(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var u = i.indexOf("--") === 0;
          u || Jm(i, t[i]);
          var s = pc(i, t[i], u);
          i === "float" && (i = "cssFloat"), u ? a.setProperty(i, s) : a[i] = s;
        }
    }
    function ey(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function yv(e) {
      var t = {};
      for (var a in e)
        for (var i = Gm[a] || [a], u = 0; u < i.length; u++)
          t[i[u]] = a;
      return t;
    }
    function Za(e, t) {
      {
        if (!t)
          return;
        var a = yv(e), i = yv(t), u = {};
        for (var s in a) {
          var f = a[s], p = i[s];
          if (p && f !== p) {
            var v = f + "," + p;
            if (u[v])
              continue;
            u[v] = !0, S("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", ey(e[f]) ? "Removing" : "Updating", f, p);
          }
        }
      }
    }
    var es = {
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
    }, gv = at({
      menuitem: !0
    }, es), Sv = "__html";
    function vc(e, t) {
      if (t) {
        if (gv[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(Sv in t.dangerouslySetInnerHTML))
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
    }, Ev = {
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
    }, Xu = {}, Ku = new RegExp("^(aria)-[" + ie + "]*$"), ad = new RegExp("^(aria)[A-Z][" + ie + "]*$");
    function ts(e, t) {
      {
        if (In.call(Xu, t) && Xu[t])
          return !0;
        if (ad.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = Ev.hasOwnProperty(a) ? a : null;
          if (i == null)
            return S("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), Xu[t] = !0, !0;
          if (t !== i)
            return S("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), Xu[t] = !0, !0;
        }
        if (Ku.test(t)) {
          var u = t.toLowerCase(), s = Ev.hasOwnProperty(u) ? u : null;
          if (s == null)
            return Xu[t] = !0, !1;
          if (t !== s)
            return S("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), Xu[t] = !0, !0;
        }
      }
      return !0;
    }
    function id(e, t) {
      {
        var a = [];
        for (var i in t) {
          var u = ts(e, i);
          u || a.push(i);
        }
        var s = a.map(function(f) {
          return "`" + f + "`";
        }).join(", ");
        a.length === 1 ? S("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e) : a.length > 1 && S("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e);
      }
    }
    function Cv(e, t) {
      hl(e, t) || id(e, t);
    }
    var ns = !1;
    function Ju(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !ns && (ns = !0, e === "select" && t.multiple ? S("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : S("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var hc = function() {
    };
    {
      var _r = {}, rs = /^on./, Rv = /^on[^A-Z]/, Tv = new RegExp("^(aria)-[" + ie + "]*$"), bv = new RegExp("^(aria)[A-Z][" + ie + "]*$");
      hc = function(e, t, a, i) {
        if (In.call(_r, t) && _r[t])
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
          if (rs.test(t))
            return S("Unknown event handler property `%s`. It will be ignored.", t), _r[t] = !0, !0;
        } else if (rs.test(t))
          return Rv.test(t) && S("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), _r[t] = !0, !0;
        if (Tv.test(t) || bv.test(t))
          return !0;
        if (u === "innerhtml")
          return S("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), _r[t] = !0, !0;
        if (u === "aria")
          return S("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), _r[t] = !0, !0;
        if (u === "is" && a !== null && a !== void 0 && typeof a != "string")
          return S("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), _r[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return S("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), _r[t] = !0, !0;
        var v = un(t), y = v !== null && v.type === Jn;
        if (Gu.hasOwnProperty(u)) {
          var g = Gu[u];
          if (g !== t)
            return S("Invalid DOM property `%s`. Did you mean `%s`?", t, g), _r[t] = !0, !0;
        } else if (!y && t !== u)
          return S("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, u), _r[t] = !0, !0;
        return typeof a == "boolean" && dn(t, a, v, !1) ? (a ? S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), _r[t] = !0, !0) : y ? !0 : dn(t, a, v, !1) ? (_r[t] = !0, !1) : ((a === "false" || a === "true") && v !== null && v.type === Un && (S("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), _r[t] = !0), !0);
      };
    }
    var _v = function(e, t, a) {
      {
        var i = [];
        for (var u in t) {
          var s = hc(e, u, t[u], a);
          s || i.push(u);
        }
        var f = i.map(function(p) {
          return "`" + p + "`";
        }).join(", ");
        i.length === 1 ? S("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e) : i.length > 1 && S("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e);
      }
    };
    function wv(e, t, a) {
      hl(e, t) || _v(e, t, a);
    }
    var ld = 1, yi = 2, tu = 4, ud = ld | yi | tu, as = null;
    function ty(e) {
      as !== null && S("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), as = e;
    }
    function is() {
      as === null && S("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), as = null;
    }
    function ny(e) {
      return e === as;
    }
    function mc(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === Bi ? t.parentNode : t;
    }
    var yc = null, Yt = null, ml = null;
    function ls(e) {
      var t = xo(e);
      if (t) {
        if (typeof yc != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = Dh(a);
          yc(t.stateNode, t.type, i);
        }
      }
    }
    function us(e) {
      yc = e;
    }
    function od(e) {
      Yt ? ml ? ml.push(e) : ml = [e] : Yt = e;
    }
    function sd() {
      return Yt !== null || ml !== null;
    }
    function Zu() {
      if (Yt) {
        var e = Yt, t = ml;
        if (Yt = null, ml = null, ls(e), t)
          for (var a = 0; a < t.length; a++)
            ls(t[a]);
      }
    }
    var os = function(e, t) {
      return e(t);
    }, nu = function() {
    }, gc = !1;
    function ry() {
      var e = sd();
      e && (nu(), Zu());
    }
    function xv(e, t, a) {
      if (gc)
        return e(t, a);
      gc = !0;
      try {
        return os(e, t, a);
      } finally {
        gc = !1, ry();
      }
    }
    function kv(e, t, a) {
      os = e, nu = a;
    }
    function Sc(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function Ec(e, t, a) {
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
          return !!(a.disabled && Sc(t));
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
      if (Ec(t, e.type, i))
        return null;
      if (u && typeof u != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof u + "` type.");
      return u;
    }
    var ss = !1;
    if (Yn)
      try {
        var au = {};
        Object.defineProperty(au, "passive", {
          get: function() {
            ss = !0;
          }
        }), window.addEventListener("test", au, au), window.removeEventListener("test", au, au);
      } catch {
        ss = !1;
      }
    function Cc(e, t, a, i, u, s, f, p, v) {
      var y = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, y);
      } catch (g) {
        this.onError(g);
      }
    }
    var Dv = Cc;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var Rc = document.createElement("react");
      Dv = function(t, a, i, u, s, f, p, v, y) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var g = document.createEvent("Event"), k = !1, _ = !0, U = window.event, j = Object.getOwnPropertyDescriptor(window, "event");
        function V() {
          Rc.removeEventListener(B, Ie, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = U);
        }
        var de = Array.prototype.slice.call(arguments, 3);
        function Ie() {
          k = !0, V(), a.apply(i, de), _ = !1;
        }
        var ze, Dt = !1, Rt = !1;
        function O(L) {
          if (ze = L.error, Dt = !0, ze === null && L.colno === 0 && L.lineno === 0 && (Rt = !0), L.defaultPrevented && ze != null && typeof ze == "object")
            try {
              ze._suppressLogging = !0;
            } catch {
            }
        }
        var B = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", O), Rc.addEventListener(B, Ie, !1), g.initEvent(B, !1, !1), Rc.dispatchEvent(g), j && Object.defineProperty(window, "event", j), k && _ && (Dt ? Rt && (ze = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : ze = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(ze)), window.removeEventListener("error", O), !k)
          return V(), Cc.apply(this, arguments);
      };
    }
    var ay = Dv, eo = !1, to = null, ei = !1, Tc = null, no = {
      onError: function(e) {
        eo = !0, to = e;
      }
    };
    function Ma(e, t, a, i, u, s, f, p, v) {
      eo = !1, to = null, ay.apply(no, arguments);
    }
    function cs(e, t, a, i, u, s, f, p, v) {
      if (Ma.apply(this, arguments), eo) {
        var y = fd();
        ei || (ei = !0, Tc = y);
      }
    }
    function Yi() {
      if (ei) {
        var e = Tc;
        throw ei = !1, Tc = null, e;
      }
    }
    function cd() {
      return eo;
    }
    function fd() {
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
    function fs(e, t) {
      e._reactInternals = t;
    }
    var je = (
      /*                      */
      0
    ), Ii = (
      /*                */
      1
    ), jn = (
      /*                    */
      2
    ), Et = (
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
    ), mt = (
      /*                   */
      128
    ), _n = (
      /*            */
      256
    ), Fn = (
      /*                          */
      512
    ), za = (
      /*                     */
      1024
    ), ha = (
      /*                      */
      2048
    ), Hn = (
      /*                    */
      4096
    ), gi = (
      /*                   */
      8192
    ), bc = (
      /*             */
      16384
    ), Ov = (
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
    ), ds = (
      /*                       */
      1048576
    ), ps = (
      /*                    */
      2097152
    ), yl = (
      /*                 */
      4194304
    ), dd = (
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
      Et | za | 0
    ), ao = jn | Et | Kr | Jt | Fn | Hn | gi, El = Et | rn | Fn | gi, sr = ha | Kr, Pn = yl | dd | ps, uu = Se.ReactCurrentOwner;
    function zr(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (jn | Hn)) !== je && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === F ? a : null;
    }
    function Si(e) {
      if (e.tag === Oe) {
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
      return e.tag === F ? e.stateNode.containerInfo : null;
    }
    function Lv(e) {
      return zr(e) === e;
    }
    function pd(e) {
      {
        var t = uu.current;
        if (t !== null && t.tag === Z) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || S("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Ze(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var u = ro(e);
      return u ? zr(u) === u : !1;
    }
    function _c(e) {
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
              return _c(s), e;
            if (v === u)
              return _c(s), t;
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
      if (i.tag !== F)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function Zr(e) {
      var t = Jr(e);
      return t !== null ? vn(t) : null;
    }
    function vn(e) {
      if (e.tag === q || e.tag === fe)
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
      return t !== null ? vd(t) : null;
    }
    function vd(e) {
      if (e.tag === q || e.tag === fe)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== ee) {
          var a = vd(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var hd = w.unstable_scheduleCallback, md = w.unstable_cancelCallback, yd = w.unstable_shouldYield, Nv = w.unstable_requestPaint, Dn = w.unstable_now, Mv = w.unstable_getCurrentPriorityLevel, Qi = w.unstable_ImmediatePriority, vs = w.unstable_UserBlockingPriority, ou = w.unstable_NormalPriority, hs = w.unstable_LowPriority, io = w.unstable_IdlePriority, zv = w.unstable_yieldValue, Uv = w.unstable_setDisableYieldValue, ri = null, cr = null, se = null, ma = !1, wr = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function gd(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return S("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        Re && (e = at({}, e, {
          getLaneLabelMap: Rd,
          injectProfilingHooks: su
        })), ri = t.inject(e), cr = t;
      } catch (a) {
        S("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function Sd(e, t) {
      if (cr && typeof cr.onScheduleFiberRoot == "function")
        try {
          cr.onScheduleFiberRoot(ri, e, t);
        } catch (a) {
          ma || (ma = !0, S("React instrumentation encountered an error: %s", a));
        }
    }
    function Ed(e, t) {
      if (cr && typeof cr.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & mt) === mt;
          if (_e) {
            var i;
            switch (t) {
              case ra:
                i = Qi;
                break;
              case ja:
                i = vs;
                break;
              case fr:
                i = ou;
                break;
              case tf:
                i = io;
                break;
              default:
                i = ou;
                break;
            }
            cr.onCommitFiberRoot(ri, e, i, a);
          }
        } catch (u) {
          ma || (ma = !0, S("React instrumentation encountered an error: %s", u));
        }
    }
    function Cd(e) {
      if (cr && typeof cr.onPostCommitFiberRoot == "function")
        try {
          cr.onPostCommitFiberRoot(ri, e);
        } catch (t) {
          ma || (ma = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function lo(e) {
      if (cr && typeof cr.onCommitFiberUnmount == "function")
        try {
          cr.onCommitFiberUnmount(ri, e);
        } catch (t) {
          ma || (ma = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function Qt(e) {
      if (typeof zv == "function" && (Uv(e), Ge(e)), cr && typeof cr.setStrictMode == "function")
        try {
          cr.setStrictMode(ri, e);
        } catch (t) {
          ma || (ma = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function su(e) {
      se = e;
    }
    function Rd() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < kd; a++) {
          var i = Vv(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function Av(e) {
      se !== null && typeof se.markCommitStarted == "function" && se.markCommitStarted(e);
    }
    function Ei() {
      se !== null && typeof se.markCommitStopped == "function" && se.markCommitStopped();
    }
    function Aa(e) {
      se !== null && typeof se.markComponentRenderStarted == "function" && se.markComponentRenderStarted(e);
    }
    function Rl() {
      se !== null && typeof se.markComponentRenderStopped == "function" && se.markComponentRenderStopped();
    }
    function jv(e) {
      se !== null && typeof se.markComponentPassiveEffectMountStarted == "function" && se.markComponentPassiveEffectMountStarted(e);
    }
    function Wi() {
      se !== null && typeof se.markComponentPassiveEffectMountStopped == "function" && se.markComponentPassiveEffectMountStopped();
    }
    function Tl(e) {
      se !== null && typeof se.markComponentPassiveEffectUnmountStarted == "function" && se.markComponentPassiveEffectUnmountStarted(e);
    }
    function wc() {
      se !== null && typeof se.markComponentPassiveEffectUnmountStopped == "function" && se.markComponentPassiveEffectUnmountStopped();
    }
    function Fv(e) {
      se !== null && typeof se.markComponentLayoutEffectMountStarted == "function" && se.markComponentLayoutEffectMountStarted(e);
    }
    function xc() {
      se !== null && typeof se.markComponentLayoutEffectMountStopped == "function" && se.markComponentLayoutEffectMountStopped();
    }
    function Td(e) {
      se !== null && typeof se.markComponentLayoutEffectUnmountStarted == "function" && se.markComponentLayoutEffectUnmountStarted(e);
    }
    function uo() {
      se !== null && typeof se.markComponentLayoutEffectUnmountStopped == "function" && se.markComponentLayoutEffectUnmountStopped();
    }
    function Ci(e, t, a) {
      se !== null && typeof se.markComponentErrored == "function" && se.markComponentErrored(e, t, a);
    }
    function ms(e, t, a) {
      se !== null && typeof se.markComponentSuspended == "function" && se.markComponentSuspended(e, t, a);
    }
    function ys(e) {
      se !== null && typeof se.markLayoutEffectsStarted == "function" && se.markLayoutEffectsStarted(e);
    }
    function cu() {
      se !== null && typeof se.markLayoutEffectsStopped == "function" && se.markLayoutEffectsStopped();
    }
    function bd(e) {
      se !== null && typeof se.markPassiveEffectsStarted == "function" && se.markPassiveEffectsStarted(e);
    }
    function oo() {
      se !== null && typeof se.markPassiveEffectsStopped == "function" && se.markPassiveEffectsStopped();
    }
    function _d(e) {
      se !== null && typeof se.markRenderStarted == "function" && se.markRenderStarted(e);
    }
    function wd() {
      se !== null && typeof se.markRenderYielded == "function" && se.markRenderYielded();
    }
    function gn() {
      se !== null && typeof se.markRenderStopped == "function" && se.markRenderStopped();
    }
    function kc(e) {
      se !== null && typeof se.markRenderScheduled == "function" && se.markRenderScheduled(e);
    }
    function xd(e, t) {
      se !== null && typeof se.markForceUpdateScheduled == "function" && se.markForceUpdateScheduled(e, t);
    }
    function gs(e, t) {
      se !== null && typeof se.markStateUpdateScheduled == "function" && se.markStateUpdateScheduled(e, t);
    }
    var Fe = (
      /*                         */
      0
    ), yt = (
      /*                 */
      1
    ), Tt = (
      /*                    */
      2
    ), it = (
      /*               */
      8
    ), Zt = (
      /*              */
      16
    ), Wn = Math.clz32 ? Math.clz32 : Es, Dc = Math.log, Ss = Math.LN2;
    function Es(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (Dc(t) / Ss | 0) | 0;
    }
    var kd = 31, $ = (
      /*                        */
      0
    ), Vn = (
      /*                          */
      0
    ), qe = (
      /*                        */
      1
    ), bl = (
      /*    */
      2
    ), tr = (
      /*             */
      4
    ), nr = (
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
    ), Oc = (
      /*                        */
      128
    ), Lc = (
      /*                        */
      256
    ), Nc = (
      /*                        */
      512
    ), Mc = (
      /*                        */
      1024
    ), zc = (
      /*                        */
      2048
    ), Uc = (
      /*                        */
      4096
    ), Ac = (
      /*                        */
      8192
    ), du = (
      /*                        */
      16384
    ), jc = (
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
    ), Cs = (
      /*                       */
      524288
    ), Hc = (
      /*                       */
      1048576
    ), Pc = (
      /*                       */
      2097152
    ), Rs = (
      /*                            */
      130023424
    ), pu = (
      /*                             */
      4194304
    ), Ts = (
      /*                             */
      8388608
    ), Vc = (
      /*                             */
      16777216
    ), Bc = (
      /*                             */
      33554432
    ), $c = (
      /*                             */
      67108864
    ), Hv = pu, po = (
      /*          */
      134217728
    ), Pv = (
      /*                          */
      268435455
    ), bs = (
      /*               */
      268435456
    ), wl = (
      /*                        */
      536870912
    ), ya = (
      /*                   */
      1073741824
    );
    function Vv(e) {
      {
        if (e & qe)
          return "Sync";
        if (e & bl)
          return "InputContinuousHydration";
        if (e & tr)
          return "InputContinuous";
        if (e & nr)
          return "DefaultHydration";
        if (e & ea)
          return "Default";
        if (e & fu)
          return "TransitionHydration";
        if (e & _l)
          return "Transition";
        if (e & Rs)
          return "Retry";
        if (e & po)
          return "SelectiveHydration";
        if (e & bs)
          return "IdleHydration";
        if (e & wl)
          return "Idle";
        if (e & ya)
          return "Offscreen";
      }
    }
    var Wt = -1, Yc = so, Ic = pu;
    function _s(e) {
      switch (vu(e)) {
        case qe:
          return qe;
        case bl:
          return bl;
        case tr:
          return tr;
        case nr:
          return nr;
        case ea:
          return ea;
        case fu:
          return fu;
        case so:
        case Oc:
        case Lc:
        case Nc:
        case Mc:
        case zc:
        case Uc:
        case Ac:
        case du:
        case jc:
        case co:
        case fo:
        case Fc:
        case Cs:
        case Hc:
        case Pc:
          return e & _l;
        case pu:
        case Ts:
        case Vc:
        case Bc:
        case $c:
          return e & Rs;
        case po:
          return po;
        case bs:
          return bs;
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
      if (a === $)
        return $;
      var i = $, u = e.suspendedLanes, s = e.pingedLanes, f = a & Pv;
      if (f !== $) {
        var p = f & ~u;
        if (p !== $)
          i = _s(p);
        else {
          var v = f & s;
          v !== $ && (i = _s(v));
        }
      } else {
        var y = a & ~u;
        y !== $ ? i = _s(y) : s !== $ && (i = _s(s));
      }
      if (i === $)
        return $;
      if (t !== $ && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & u) === $) {
        var g = vu(i), k = vu(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          g >= k || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          g === ea && (k & _l) !== $
        )
          return t;
      }
      (i & tr) !== $ && (i |= a & ea);
      var _ = e.entangledLanes;
      if (_ !== $)
        for (var U = e.entanglements, j = i & _; j > 0; ) {
          var V = On(j), de = 1 << V;
          i |= U[V], j &= ~de;
        }
      return i;
    }
    function Dd(e, t) {
      for (var a = e.eventTimes, i = Wt; t > 0; ) {
        var u = On(t), s = 1 << u, f = a[u];
        f > i && (i = f), t &= ~s;
      }
      return i;
    }
    function Qc(e, t) {
      switch (e) {
        case qe:
        case bl:
        case tr:
          return t + 250;
        case nr:
        case ea:
        case fu:
        case so:
        case Oc:
        case Lc:
        case Nc:
        case Mc:
        case zc:
        case Uc:
        case Ac:
        case du:
        case jc:
        case co:
        case fo:
        case Fc:
        case Cs:
        case Hc:
        case Pc:
          return t + 5e3;
        case pu:
        case Ts:
        case Vc:
        case Bc:
        case $c:
          return Wt;
        case po:
        case bs:
        case wl:
        case ya:
          return Wt;
        default:
          return S("Should have found matching lanes. This is a bug in React."), Wt;
      }
    }
    function Bv(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, u = e.pingedLanes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = On(f), v = 1 << p, y = s[p];
        y === Wt ? ((v & i) === $ || (v & u) !== $) && (s[p] = Qc(v, t)) : y <= t && (e.expiredLanes |= v), f &= ~v;
      }
    }
    function $v(e) {
      return _s(e.pendingLanes);
    }
    function Wc(e) {
      var t = e.pendingLanes & -1073741825;
      return t !== $ ? t : t & ya ? ya : $;
    }
    function Od(e) {
      return (e & qe) !== $;
    }
    function xl(e) {
      return (e & Pv) !== $;
    }
    function qc(e) {
      return (e & Rs) === e;
    }
    function Ld(e) {
      var t = qe | tr | ea;
      return (e & t) === $;
    }
    function iy(e) {
      return (e & _l) === e;
    }
    function ws(e, t) {
      var a = bl | tr | nr | ea;
      return (t & a) !== $;
    }
    function Yv(e, t) {
      return (t & e.expiredLanes) !== $;
    }
    function Nd(e) {
      return (e & _l) !== $;
    }
    function Md() {
      var e = Yc;
      return Yc <<= 1, (Yc & _l) === $ && (Yc = so), e;
    }
    function Iv() {
      var e = Ic;
      return Ic <<= 1, (Ic & Rs) === $ && (Ic = pu), e;
    }
    function vu(e) {
      return e & -e;
    }
    function rr(e) {
      return vu(e);
    }
    function On(e) {
      return 31 - Wn(e);
    }
    function Gc(e) {
      return On(e);
    }
    function na(e, t) {
      return (e & t) !== $;
    }
    function hu(e, t) {
      return (e & t) === t;
    }
    function ot(e, t) {
      return e | t;
    }
    function xs(e, t) {
      return e & ~t;
    }
    function Xc(e, t) {
      return e & t;
    }
    function ly(e) {
      return e;
    }
    function zd(e, t) {
      return e !== Vn && e < t ? e : t;
    }
    function Kc(e) {
      for (var t = [], a = 0; a < kd; a++)
        t.push(e);
      return t;
    }
    function vo(e, t, a) {
      e.pendingLanes |= t, t !== wl && (e.suspendedLanes = $, e.pingedLanes = $);
      var i = e.eventTimes, u = Gc(t);
      i[u] = a;
    }
    function Ud(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var u = On(i), s = 1 << u;
        a[u] = Wt, i &= ~s;
      }
    }
    function Jc(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function Qv(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = $, e.pingedLanes = $, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, u = e.eventTimes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = On(f), v = 1 << p;
        i[p] = $, u[p] = Wt, s[p] = Wt, f &= ~v;
      }
    }
    function ks(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, u = a; u; ) {
        var s = On(u), f = 1 << s;
        // Is this one of the newly entangled lanes?
        f & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[s] & t && (i[s] |= t), u &= ~f;
      }
    }
    function Zc(e, t) {
      var a = vu(t), i;
      switch (a) {
        case tr:
          i = bl;
          break;
        case ea:
          i = nr;
          break;
        case so:
        case Oc:
        case Lc:
        case Nc:
        case Mc:
        case zc:
        case Uc:
        case Ac:
        case du:
        case jc:
        case co:
        case fo:
        case Fc:
        case Cs:
        case Hc:
        case Pc:
        case pu:
        case Ts:
        case Vc:
        case Bc:
        case $c:
          i = fu;
          break;
        case wl:
          i = bs;
          break;
        default:
          i = Vn;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== Vn ? Vn : i;
    }
    function Wv(e, t, a) {
      if (wr)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var u = Gc(a), s = 1 << u, f = i[u];
          f.add(t), a &= ~s;
        }
    }
    function Ad(e, t) {
      if (wr)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var u = Gc(t), s = 1 << u, f = a[u];
          f.size > 0 && (f.forEach(function(p) {
            var v = p.alternate;
            (v === null || !i.has(v)) && i.add(p);
          }), f.clear()), t &= ~s;
        }
    }
    function ef(e, t) {
      return null;
    }
    var ra = qe, ja = tr, fr = ea, tf = wl, ho = Vn;
    function ga() {
      return ho;
    }
    function qn(e) {
      ho = e;
    }
    function qv(e, t) {
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
    function xr(e, t) {
      return e > t ? e : t;
    }
    function jd(e, t) {
      return e !== 0 && e < t;
    }
    function Gv(e) {
      var t = vu(e);
      return jd(ra, t) ? jd(ja, t) ? xl(t) ? fr : tf : ja : ra;
    }
    function mu(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var dr;
    function uy(e) {
      dr = e;
    }
    function Te(e) {
      dr(e);
    }
    var kl;
    function Fd(e) {
      kl = e;
    }
    var Hd;
    function oy(e) {
      Hd = e;
    }
    var mo;
    function nf(e) {
      mo = e;
    }
    var rf;
    function Xv(e) {
      rf = e;
    }
    var af = !1, Os = [], Ri = null, Ti = null, Sn = null, Ur = /* @__PURE__ */ new Map(), Fa = /* @__PURE__ */ new Map(), qi = [], Kv = [
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
      return Kv.indexOf(e) > -1;
    }
    function Jv(e, t, a, i, u) {
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
    function Ls(e, t, a, i, u, s) {
      if (e === null || e.nativeEvent !== s) {
        var f = Jv(t, a, i, u, s);
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
    function Zv(e, t, a, i, u) {
      switch (t) {
        case "focusin": {
          var s = u;
          return Ri = Ls(Ri, e, t, a, i, s), !0;
        }
        case "dragenter": {
          var f = u;
          return Ti = Ls(Ti, e, t, a, i, f), !0;
        }
        case "mouseover": {
          var p = u;
          return Sn = Ls(Sn, e, t, a, i, p), !0;
        }
        case "pointerover": {
          var v = u, y = v.pointerId;
          return Ur.set(y, Ls(Ur.get(y) || null, e, t, a, i, v)), !0;
        }
        case "gotpointercapture": {
          var g = u, k = g.pointerId;
          return Fa.set(k, Ls(Fa.get(k) || null, e, t, a, i, g)), !0;
        }
      }
      return !1;
    }
    function Pd(e) {
      var t = $s(e.target);
      if (t !== null) {
        var a = zr(t);
        if (a !== null) {
          var i = a.tag;
          if (i === Oe) {
            var u = Si(a);
            if (u !== null) {
              e.blockedOn = u, rf(e.priority, function() {
                Hd(a);
              });
              return;
            }
          } else if (i === F) {
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
    function eh(e) {
      for (var t = mo(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < qi.length && jd(t, qi[i].priority); i++)
        ;
      qi.splice(i, 0, a), i === 0 && Pd(a);
    }
    function Ns(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = Ms(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var u = e.nativeEvent, s = new u.constructor(u.type, u);
          ty(s), u.target.dispatchEvent(s), is();
        } else {
          var f = xo(i);
          return f !== null && kl(f), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function th(e, t, a) {
      Ns(e) && a.delete(t);
    }
    function lf() {
      af = !1, Ri !== null && Ns(Ri) && (Ri = null), Ti !== null && Ns(Ti) && (Ti = null), Sn !== null && Ns(Sn) && (Sn = null), Ur.forEach(th), Fa.forEach(th);
    }
    function yu(e, t) {
      e.blockedOn === t && (e.blockedOn = null, af || (af = !0, w.unstable_scheduleCallback(w.unstable_NormalPriority, lf)));
    }
    function kr(e) {
      if (Os.length > 0) {
        yu(Os[0], e);
        for (var t = 1; t < Os.length; t++) {
          var a = Os[t];
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
        Pd(f), f.blockedOn === null && qi.shift();
      }
    }
    var Ct = Se.ReactCurrentBatchConfig, Bn = !0;
    function Ln(e) {
      Bn = !!e;
    }
    function pr() {
      return Bn;
    }
    function Sa(e, t, a) {
      var i = go(t), u;
      switch (i) {
        case ra:
          u = yo;
          break;
        case ja:
          u = Gn;
          break;
        case fr:
        default:
          u = gu;
          break;
      }
      return u.bind(null, t, a, e);
    }
    function yo(e, t, a, i) {
      var u = ga(), s = Ct.transition;
      Ct.transition = null;
      try {
        qn(ra), gu(e, t, a, i);
      } finally {
        qn(u), Ct.transition = s;
      }
    }
    function Gn(e, t, a, i) {
      var u = ga(), s = Ct.transition;
      Ct.transition = null;
      try {
        qn(ja), gu(e, t, a, i);
      } finally {
        qn(u), Ct.transition = s;
      }
    }
    function gu(e, t, a, i) {
      Bn && Su(e, t, a, i);
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
          var s = xo(u);
          s !== null && Te(s);
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
      var u = mc(i), s = $s(u);
      if (s !== null) {
        var f = zr(s);
        if (f === null)
          s = null;
        else {
          var p = f.tag;
          if (p === Oe) {
            var v = Si(f);
            if (v !== null)
              return v;
            s = null;
          } else if (p === F) {
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
          var t = Mv();
          switch (t) {
            case Qi:
              return ra;
            case vs:
              return ja;
            case ou:
            case hs:
              return fr;
            case io:
              return tf;
            default:
              return fr;
          }
        }
        default:
          return fr;
      }
    }
    function aa(e, t, a) {
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
    var Dl = null, zs = null, Ha = null;
    function uf(e) {
      return Dl = e, zs = Eo(), !0;
    }
    function Ol() {
      Dl = null, zs = null, Ha = null;
    }
    function Us() {
      if (Ha)
        return Ha;
      var e, t = zs, a = t.length, i, u = Eo(), s = u.length;
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
    function As() {
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
        return y ? this.isDefaultPrevented = Cu : this.isDefaultPrevented = As, this.isPropagationStopped = As, this;
      }
      return at(t.prototype, {
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
    }, Ca = an(Ea), ar = at({}, Ea, {
      view: 0,
      detail: 0
    }), nh = an(ar), js, Fs, Hs;
    function Ll(e) {
      e !== Hs && (Hs && e.type === "mousemove" ? (js = e.screenX - Hs.screenX, Fs = e.screenY - Hs.screenY) : (js = 0, Fs = 0), Hs = e);
    }
    var Ps = at({}, ar, {
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
      getModifierState: Id,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (Ll(e), js);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : Fs;
      }
    }), of = an(Ps), Ru = at({}, Ps, {
      dataTransfer: 0
    }), Bd = an(Ru), Tu = at({}, ar, {
      relatedTarget: 0
    }), sf = an(Tu), rh = at({}, Ea, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), $d = an(rh), cf = at({}, Ea, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), sy = an(cf), cy = at({}, Ea, {
      data: 0
    }), Yd = an(cy), ah = Yd, bu = {
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
    }, fy = {
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
      return e.type === "keydown" || e.type === "keyup" ? fy[e.keyCode] || "Unidentified" : "";
    }
    var ih = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function wn(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = ih[e];
      return i ? !!a[i] : !1;
    }
    function Id(e) {
      return wn;
    }
    var lh = at({}, ar, {
      key: Ro,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Id,
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
    }), dy = an(lh), py = at({}, Ps, {
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
    }), Qd = an(py), uh = at({}, ar, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Id
    }), vy = an(uh), Pa = at({}, Ea, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Wd = an(Pa), hy = at({}, Ps, {
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
    }), Nl = an(hy), ff = [9, 13, 27, 32], Ml = 229, To = Yn && "CompositionEvent" in window, _u = null;
    Yn && "documentMode" in document && (_u = document.documentMode);
    var qd = Yn && "TextEvent" in window && !_u, oh = Yn && (!To || _u && _u > 8 && _u <= 11), df = 32, sh = String.fromCharCode(df);
    function ch() {
      _t("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), _t("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), _t("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), _t("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var Gd = !1;
    function pf(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function vf(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function fh(e, t) {
      return e === "keydown" && t.keyCode === Ml;
    }
    function hf(e, t) {
      switch (e) {
        case "keyup":
          return ff.indexOf(t.keyCode) !== -1;
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
    function Xd(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function mf(e) {
      return e.locale === "ko";
    }
    var Xi = !1;
    function Kd(e, t, a, i, u) {
      var s, f;
      if (To ? s = vf(t) : Xi ? hf(t, i) && (s = "onCompositionEnd") : fh(t, i) && (s = "onCompositionStart"), !s)
        return null;
      oh && !mf(i) && (!Xi && s === "onCompositionStart" ? Xi = uf(u) : s === "onCompositionEnd" && Xi && (f = Us()));
      var p = mh(a, s);
      if (p.length > 0) {
        var v = new Yd(s, t, null, i, u);
        if (e.push({
          event: v,
          listeners: p
        }), f)
          v.data = f;
        else {
          var y = Xd(i);
          y !== null && (v.data = y);
        }
      }
    }
    function yf(e, t) {
      switch (e) {
        case "compositionend":
          return Xd(t);
        case "keypress":
          var a = t.which;
          return a !== df ? null : (Gd = !0, sh);
        case "textInput":
          var i = t.data;
          return i === sh && Gd ? null : i;
        default:
          return null;
      }
    }
    function dh(e, t) {
      if (Xi) {
        if (e === "compositionend" || !To && hf(e, t)) {
          var a = Us();
          return Ol(), Xi = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!pf(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return oh && !mf(t) ? null : t.data;
        default:
          return null;
      }
    }
    function my(e, t, a, i, u) {
      var s;
      if (qd ? s = yf(t, i) : s = dh(t, i), !s)
        return null;
      var f = mh(a, "onBeforeInput");
      if (f.length > 0) {
        var p = new ah("onBeforeInput", "beforeinput", null, i, u);
        e.push({
          event: p,
          listeners: f
        }), p.data = s;
      }
    }
    function gf(e, t, a, i, u, s, f) {
      Kd(e, t, a, i, u), my(e, t, a, i, u);
    }
    var yy = {
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
      return t === "input" ? !!yy[e.type] : t === "textarea";
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
    function gy(e) {
      if (!Yn)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function Sf() {
      _t("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function n(e, t, a, i) {
      od(i);
      var u = mh(t, "onChange");
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
      n(t, l, e, mc(e)), xv(d, t);
    }
    function d(e) {
      OE(e, 0);
    }
    function m(e) {
      var t = _f(e);
      if (dl(t))
        return e;
    }
    function E(e, t) {
      if (e === "change")
        return t;
    }
    var b = !1;
    Yn && (b = gy("input") && (!document.documentMode || document.documentMode > 9));
    function A(e, t) {
      r = e, l = t, r.attachEvent("onpropertychange", K);
    }
    function X() {
      r && (r.detachEvent("onpropertychange", K), r = null, l = null);
    }
    function K(e) {
      e.propertyName === "value" && m(l) && c(e);
    }
    function G(e, t, a) {
      e === "focusin" ? (X(), A(t, a)) : e === "focusout" && X();
    }
    function ye(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return m(l);
    }
    function xe(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function Le(e, t) {
      if (e === "click")
        return m(t);
    }
    function Nn(e, t) {
      if (e === "input" || e === "change")
        return m(t);
    }
    function D(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || we(e, "number", e.value);
    }
    function x(e, t, a, i, u, s, f) {
      var p = a ? _f(a) : window, v, y;
      if (o(p) ? v = E : bo(p) ? b ? v = Nn : (v = ye, y = G) : xe(p) && (v = Le), v) {
        var g = v(t, a);
        if (g) {
          n(e, g, i, u);
          return;
        }
      }
      y && y(t, p, a), t === "focusout" && D(p);
    }
    function N() {
      Cn("onMouseEnter", ["mouseout", "mouseover"]), Cn("onMouseLeave", ["mouseout", "mouseover"]), Cn("onPointerEnter", ["pointerout", "pointerover"]), Cn("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function te(e, t, a, i, u, s, f) {
      var p = t === "mouseover" || t === "pointerover", v = t === "mouseout" || t === "pointerout";
      if (p && !ny(i)) {
        var y = i.relatedTarget || i.fromElement;
        if (y && ($s(y) || fp(y)))
          return;
      }
      if (!(!v && !p)) {
        var g;
        if (u.window === u)
          g = u;
        else {
          var k = u.ownerDocument;
          k ? g = k.defaultView || k.parentWindow : g = window;
        }
        var _, U;
        if (v) {
          var j = i.relatedTarget || i.toElement;
          if (_ = a, U = j ? $s(j) : null, U !== null) {
            var V = zr(U);
            (U !== V || U.tag !== q && U.tag !== fe) && (U = null);
          }
        } else
          _ = null, U = a;
        if (_ !== U) {
          var de = of, Ie = "onMouseLeave", ze = "onMouseEnter", Dt = "mouse";
          (t === "pointerout" || t === "pointerover") && (de = Qd, Ie = "onPointerLeave", ze = "onPointerEnter", Dt = "pointer");
          var Rt = _ == null ? g : _f(_), O = U == null ? g : _f(U), B = new de(Ie, Dt + "leave", _, i, u);
          B.target = Rt, B.relatedTarget = O;
          var L = null, J = $s(u);
          if (J === a) {
            var Ee = new de(ze, Dt + "enter", U, i, u);
            Ee.target = O, Ee.relatedTarget = Rt, L = Ee;
          }
          zT(e, B, L, _, U);
        }
      }
    }
    function Ne(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var ke = typeof Object.is == "function" ? Object.is : Ne;
    function He(e, t) {
      if (ke(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var u = 0; u < a.length; u++) {
        var s = a[u];
        if (!In.call(t, s) || !ke(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function Je(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function ir(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function Mt(e, t) {
      for (var a = Je(e), i = 0, u = 0; a; ) {
        if (a.nodeType === Bi) {
          if (u = i + a.textContent.length, i <= t && u >= t)
            return {
              node: a,
              offset: t - i
            };
          i = u;
        }
        a = Je(ir(a));
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
      return Sy(e, u, s, f, p);
    }
    function Sy(e, t, a, i, u) {
      var s = 0, f = -1, p = -1, v = 0, y = 0, g = e, k = null;
      e: for (; ; ) {
        for (var _ = null; g === t && (a === 0 || g.nodeType === Bi) && (f = s + a), g === i && (u === 0 || g.nodeType === Bi) && (p = s + u), g.nodeType === Bi && (s += g.nodeValue.length), (_ = g.firstChild) !== null; )
          k = g, g = _;
        for (; ; ) {
          if (g === e)
            break e;
          if (k === t && ++v === a && (f = s), k === i && ++y === u && (p = s), (_ = g.nextSibling) !== null)
            break;
          g = k, k = g.parentNode;
        }
        g = _;
      }
      return f === -1 || p === -1 ? null : {
        start: f,
        end: p
      };
    }
    function hT(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var u = i.getSelection(), s = e.textContent.length, f = Math.min(t.start, s), p = t.end === void 0 ? f : Math.min(t.end, s);
        if (!u.extend && f > p) {
          var v = p;
          p = f, f = v;
        }
        var y = Mt(e, f), g = Mt(e, p);
        if (y && g) {
          if (u.rangeCount === 1 && u.anchorNode === y.node && u.anchorOffset === y.offset && u.focusNode === g.node && u.focusOffset === g.offset)
            return;
          var k = a.createRange();
          k.setStart(y.node, y.offset), u.removeAllRanges(), f > p ? (u.addRange(k), u.extend(g.node, g.offset)) : (k.setEnd(g.node, g.offset), u.addRange(k));
        }
      }
    }
    function gE(e) {
      return e && e.nodeType === Bi;
    }
    function SE(e, t) {
      return !e || !t ? !1 : e === t ? !0 : gE(e) ? !1 : gE(t) ? SE(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function mT(e) {
      return e && e.ownerDocument && SE(e.ownerDocument.documentElement, e);
    }
    function yT(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function EE() {
      for (var e = window, t = Hi(); t instanceof e.HTMLIFrameElement; ) {
        if (yT(t))
          e = t.contentWindow;
        else
          return t;
        t = Hi(e.document);
      }
      return t;
    }
    function Ey(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function gT() {
      var e = EE();
      return {
        focusedElem: e,
        selectionRange: Ey(e) ? ET(e) : null
      };
    }
    function ST(e) {
      var t = EE(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && mT(a)) {
        i !== null && Ey(a) && CT(a, i);
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
    function ET(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = zl(e), t || {
        start: 0,
        end: 0
      };
    }
    function CT(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : hT(e, t);
    }
    var RT = Yn && "documentMode" in document && document.documentMode <= 11;
    function TT() {
      _t("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var Ef = null, Cy = null, Jd = null, Ry = !1;
    function bT(e) {
      if ("selectionStart" in e && Ey(e))
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
    function _T(e) {
      return e.window === e ? e.document : e.nodeType === $i ? e : e.ownerDocument;
    }
    function CE(e, t, a) {
      var i = _T(a);
      if (!(Ry || Ef == null || Ef !== Hi(i))) {
        var u = bT(Ef);
        if (!Jd || !He(Jd, u)) {
          Jd = u;
          var s = mh(Cy, "onSelect");
          if (s.length > 0) {
            var f = new Ca("onSelect", "select", null, t, a);
            e.push({
              event: f,
              listeners: s
            }), f.target = Ef;
          }
        }
      }
    }
    function wT(e, t, a, i, u, s, f) {
      var p = a ? _f(a) : window;
      switch (t) {
        case "focusin":
          (bo(p) || p.contentEditable === "true") && (Ef = p, Cy = a, Jd = null);
          break;
        case "focusout":
          Ef = null, Cy = null, Jd = null;
          break;
        case "mousedown":
          Ry = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Ry = !1, CE(e, i, u);
          break;
        case "selectionchange":
          if (RT)
            break;
        case "keydown":
        case "keyup":
          CE(e, i, u);
      }
    }
    function ph(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var Cf = {
      animationend: ph("Animation", "AnimationEnd"),
      animationiteration: ph("Animation", "AnimationIteration"),
      animationstart: ph("Animation", "AnimationStart"),
      transitionend: ph("Transition", "TransitionEnd")
    }, Ty = {}, RE = {};
    Yn && (RE = document.createElement("div").style, "AnimationEvent" in window || (delete Cf.animationend.animation, delete Cf.animationiteration.animation, delete Cf.animationstart.animation), "TransitionEvent" in window || delete Cf.transitionend.transition);
    function vh(e) {
      if (Ty[e])
        return Ty[e];
      if (!Cf[e])
        return e;
      var t = Cf[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in RE)
          return Ty[e] = t[a];
      return e;
    }
    var TE = vh("animationend"), bE = vh("animationiteration"), _E = vh("animationstart"), wE = vh("transitionend"), xE = /* @__PURE__ */ new Map(), kE = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function _o(e, t) {
      xE.set(e, t), _t(t, [e]);
    }
    function xT() {
      for (var e = 0; e < kE.length; e++) {
        var t = kE[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        _o(a, "on" + i);
      }
      _o(TE, "onAnimationEnd"), _o(bE, "onAnimationIteration"), _o(_E, "onAnimationStart"), _o("dblclick", "onDoubleClick"), _o("focusin", "onFocus"), _o("focusout", "onBlur"), _o(wE, "onTransitionEnd");
    }
    function kT(e, t, a, i, u, s, f) {
      var p = xE.get(t);
      if (p !== void 0) {
        var v = Ca, y = t;
        switch (t) {
          case "keypress":
            if (Co(i) === 0)
              return;
          case "keydown":
          case "keyup":
            v = dy;
            break;
          case "focusin":
            y = "focus", v = sf;
            break;
          case "focusout":
            y = "blur", v = sf;
            break;
          case "beforeblur":
          case "afterblur":
            v = sf;
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
            v = of;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = Bd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = vy;
            break;
          case TE:
          case bE:
          case _E:
            v = $d;
            break;
          case wE:
            v = Wd;
            break;
          case "scroll":
            v = nh;
            break;
          case "wheel":
            v = Nl;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = sy;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = Qd;
            break;
        }
        var g = (s & tu) !== 0;
        {
          var k = !g && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", _ = NT(a, p, i.type, g, k);
          if (_.length > 0) {
            var U = new v(p, y, null, i, u);
            e.push({
              event: U,
              listeners: _
            });
          }
        }
      }
    }
    xT(), N(), Sf(), TT(), ch();
    function DT(e, t, a, i, u, s, f) {
      kT(e, t, a, i, u, s);
      var p = (s & ud) === 0;
      p && (te(e, t, a, i, u), x(e, t, a, i, u), wT(e, t, a, i, u), gf(e, t, a, i, u));
    }
    var Zd = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], by = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(Zd));
    function DE(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, cs(i, t, void 0, e), e.currentTarget = null;
    }
    function OT(e, t, a) {
      var i;
      if (a)
        for (var u = t.length - 1; u >= 0; u--) {
          var s = t[u], f = s.instance, p = s.currentTarget, v = s.listener;
          if (f !== i && e.isPropagationStopped())
            return;
          DE(e, v, p), i = f;
        }
      else
        for (var y = 0; y < t.length; y++) {
          var g = t[y], k = g.instance, _ = g.currentTarget, U = g.listener;
          if (k !== i && e.isPropagationStopped())
            return;
          DE(e, U, _), i = k;
        }
    }
    function OE(e, t) {
      for (var a = (t & tu) !== 0, i = 0; i < e.length; i++) {
        var u = e[i], s = u.event, f = u.listeners;
        OT(s, f, a);
      }
      Yi();
    }
    function LT(e, t, a, i, u) {
      var s = mc(a), f = [];
      DT(f, e, i, a, s, t), OE(f, t);
    }
    function Rn(e, t) {
      by.has(e) || S('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = u_(t), u = UT(e);
      i.has(u) || (LE(t, e, yi, a), i.add(u));
    }
    function _y(e, t, a) {
      by.has(e) && !t && S('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= tu), LE(a, e, i, t);
    }
    var hh = "_reactListening" + Math.random().toString(36).slice(2);
    function ep(e) {
      if (!e[hh]) {
        e[hh] = !0, Ae.forEach(function(a) {
          a !== "selectionchange" && (by.has(a) || _y(a, !1, e), _y(a, !0, e));
        });
        var t = e.nodeType === $i ? e : e.ownerDocument;
        t !== null && (t[hh] || (t[hh] = !0, _y("selectionchange", !1, t)));
      }
    }
    function LE(e, t, a, i, u) {
      var s = Sa(e, t, a), f = void 0;
      ss && (t === "touchstart" || t === "touchmove" || t === "wheel") && (f = !0), e = e, i ? f !== void 0 ? So(e, t, s, f) : Vd(e, t, s) : f !== void 0 ? Gi(e, t, s, f) : aa(e, t, s);
    }
    function NE(e, t) {
      return e === t || e.nodeType === An && e.parentNode === t;
    }
    function wy(e, t, a, i, u) {
      var s = i;
      if (!(t & ld) && !(t & yi)) {
        var f = u;
        if (i !== null) {
          var p = i;
          e: for (; ; ) {
            if (p === null)
              return;
            var v = p.tag;
            if (v === F || v === ee) {
              var y = p.stateNode.containerInfo;
              if (NE(y, f))
                break;
              if (v === ee)
                for (var g = p.return; g !== null; ) {
                  var k = g.tag;
                  if (k === F || k === ee) {
                    var _ = g.stateNode.containerInfo;
                    if (NE(_, f))
                      return;
                  }
                  g = g.return;
                }
              for (; y !== null; ) {
                var U = $s(y);
                if (U === null)
                  return;
                var j = U.tag;
                if (j === q || j === fe) {
                  p = s = U;
                  continue e;
                }
                y = y.parentNode;
              }
            }
            p = p.return;
          }
        }
      }
      xv(function() {
        return LT(e, t, a, s);
      });
    }
    function tp(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function NT(e, t, a, i, u, s) {
      for (var f = t !== null ? t + "Capture" : null, p = i ? f : t, v = [], y = e, g = null; y !== null; ) {
        var k = y, _ = k.stateNode, U = k.tag;
        if (U === q && _ !== null && (g = _, p !== null)) {
          var j = ru(y, p);
          j != null && v.push(tp(y, j, g));
        }
        if (u)
          break;
        y = y.return;
      }
      return v;
    }
    function mh(e, t) {
      for (var a = t + "Capture", i = [], u = e; u !== null; ) {
        var s = u, f = s.stateNode, p = s.tag;
        if (p === q && f !== null) {
          var v = f, y = ru(u, a);
          y != null && i.unshift(tp(u, y, v));
          var g = ru(u, t);
          g != null && i.push(tp(u, g, v));
        }
        u = u.return;
      }
      return i;
    }
    function Rf(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== q);
      return e || null;
    }
    function MT(e, t) {
      for (var a = e, i = t, u = 0, s = a; s; s = Rf(s))
        u++;
      for (var f = 0, p = i; p; p = Rf(p))
        f++;
      for (; u - f > 0; )
        a = Rf(a), u--;
      for (; f - u > 0; )
        i = Rf(i), f--;
      for (var v = u; v--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = Rf(a), i = Rf(i);
      }
      return null;
    }
    function ME(e, t, a, i, u) {
      for (var s = t._reactName, f = [], p = a; p !== null && p !== i; ) {
        var v = p, y = v.alternate, g = v.stateNode, k = v.tag;
        if (y !== null && y === i)
          break;
        if (k === q && g !== null) {
          var _ = g;
          if (u) {
            var U = ru(p, s);
            U != null && f.unshift(tp(p, U, _));
          } else if (!u) {
            var j = ru(p, s);
            j != null && f.push(tp(p, j, _));
          }
        }
        p = p.return;
      }
      f.length !== 0 && e.push({
        event: t,
        listeners: f
      });
    }
    function zT(e, t, a, i, u) {
      var s = i && u ? MT(i, u) : null;
      i !== null && ME(e, t, i, s, !1), u !== null && a !== null && ME(e, a, u, s, !0);
    }
    function UT(e, t) {
      return e + "__bubble";
    }
    var Va = !1, np = "dangerouslySetInnerHTML", yh = "suppressContentEditableWarning", wo = "suppressHydrationWarning", zE = "autoFocus", Vs = "children", Bs = "style", gh = "__html", xy, Sh, rp, UE, Eh, AE, jE;
    xy = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, Sh = function(e, t) {
      Cv(e, t), Ju(e, t), wv(e, t, {
        registrationNameDependencies: Pe,
        possibleRegistrationNames: nt
      });
    }, AE = Yn && !document.documentMode, rp = function(e, t, a) {
      if (!Va) {
        var i = Ch(a), u = Ch(t);
        u !== i && (Va = !0, S("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(u), JSON.stringify(i)));
      }
    }, UE = function(e) {
      if (!Va) {
        Va = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), S("Extra attributes from the server: %s", t);
      }
    }, Eh = function(e, t) {
      t === !1 ? S("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : S("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, jE = function(e, t) {
      var a = e.namespaceURI === Ja ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var AT = /\r\n?/g, jT = /\u0000|\uFFFD/g;
    function Ch(e) {
      Qn(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(AT, `
`).replace(jT, "");
    }
    function Rh(e, t, a, i) {
      var u = Ch(t), s = Ch(e);
      if (s !== u && (i && (Va || (Va = !0, S('Text content did not match. Server: "%s" Client: "%s"', s, u))), a && I))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function FE(e) {
      return e.nodeType === $i ? e : e.ownerDocument;
    }
    function FT() {
    }
    function Th(e) {
      e.onclick = FT;
    }
    function HT(e, t, a, i, u) {
      for (var s in i)
        if (i.hasOwnProperty(s)) {
          var f = i[s];
          if (s === Bs)
            f && Object.freeze(f), mv(t, f);
          else if (s === np) {
            var p = f ? f[gh] : void 0;
            p != null && av(t, p);
          } else if (s === Vs)
            if (typeof f == "string") {
              var v = e !== "textarea" || f !== "";
              v && vl(t, f);
            } else typeof f == "number" && vl(t, "" + f);
          else s === yh || s === wo || s === zE || (Pe.hasOwnProperty(s) ? f != null && (typeof f != "function" && Eh(s, f), s === "onScroll" && Rn("scroll", t)) : f != null && pa(t, s, f, u));
        }
    }
    function PT(e, t, a, i) {
      for (var u = 0; u < t.length; u += 2) {
        var s = t[u], f = t[u + 1];
        s === Bs ? mv(e, f) : s === np ? av(e, f) : s === Vs ? vl(e, f) : pa(e, s, f, i);
      }
    }
    function VT(e, t, a, i) {
      var u, s = FE(a), f, p = i;
      if (p === Ja && (p = ed(e)), p === Ja) {
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
      return p === Ja && !u && Object.prototype.toString.call(f) === "[object HTMLUnknownElement]" && !In.call(xy, e) && (xy[e] = !0, S("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), f;
    }
    function BT(e, t) {
      return FE(t).createTextNode(e);
    }
    function $T(e, t, a, i) {
      var u = hl(t, a);
      Sh(t, a);
      var s;
      switch (t) {
        case "dialog":
          Rn("cancel", e), Rn("close", e), s = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          Rn("load", e), s = a;
          break;
        case "video":
        case "audio":
          for (var f = 0; f < Zd.length; f++)
            Rn(Zd[f], e);
          s = a;
          break;
        case "source":
          Rn("error", e), s = a;
          break;
        case "img":
        case "image":
        case "link":
          Rn("error", e), Rn("load", e), s = a;
          break;
        case "details":
          Rn("toggle", e), s = a;
          break;
        case "input":
          Iu(e, a), s = Na(e, a), Rn("invalid", e);
          break;
        case "option":
          $t(e, a), s = a;
          break;
        case "select":
          Ko(e, a), s = eu(e, a), Rn("invalid", e);
          break;
        case "textarea":
          tv(e, a), s = cc(e, a), Rn("invalid", e);
          break;
        default:
          s = a;
      }
      switch (vc(t, s), HT(t, e, i, s, u), t) {
        case "input":
          La(e), z(e, a, !1);
          break;
        case "textarea":
          La(e), rv(e);
          break;
        case "option":
          Xt(e, a);
          break;
        case "select":
          Kf(e, a);
          break;
        default:
          typeof s.onClick == "function" && Th(e);
          break;
      }
    }
    function YT(e, t, a, i, u) {
      Sh(t, i);
      var s = null, f, p;
      switch (t) {
        case "input":
          f = Na(e, a), p = Na(e, i), s = [];
          break;
        case "select":
          f = eu(e, a), p = eu(e, i), s = [];
          break;
        case "textarea":
          f = cc(e, a), p = cc(e, i), s = [];
          break;
        default:
          f = a, p = i, typeof f.onClick != "function" && typeof p.onClick == "function" && Th(e);
          break;
      }
      vc(t, p);
      var v, y, g = null;
      for (v in f)
        if (!(p.hasOwnProperty(v) || !f.hasOwnProperty(v) || f[v] == null))
          if (v === Bs) {
            var k = f[v];
            for (y in k)
              k.hasOwnProperty(y) && (g || (g = {}), g[y] = "");
          } else v === np || v === Vs || v === yh || v === wo || v === zE || (Pe.hasOwnProperty(v) ? s || (s = []) : (s = s || []).push(v, null));
      for (v in p) {
        var _ = p[v], U = f != null ? f[v] : void 0;
        if (!(!p.hasOwnProperty(v) || _ === U || _ == null && U == null))
          if (v === Bs)
            if (_ && Object.freeze(_), U) {
              for (y in U)
                U.hasOwnProperty(y) && (!_ || !_.hasOwnProperty(y)) && (g || (g = {}), g[y] = "");
              for (y in _)
                _.hasOwnProperty(y) && U[y] !== _[y] && (g || (g = {}), g[y] = _[y]);
            } else
              g || (s || (s = []), s.push(v, g)), g = _;
          else if (v === np) {
            var j = _ ? _[gh] : void 0, V = U ? U[gh] : void 0;
            j != null && V !== j && (s = s || []).push(v, j);
          } else v === Vs ? (typeof _ == "string" || typeof _ == "number") && (s = s || []).push(v, "" + _) : v === yh || v === wo || (Pe.hasOwnProperty(v) ? (_ != null && (typeof _ != "function" && Eh(v, _), v === "onScroll" && Rn("scroll", e)), !s && U !== _ && (s = [])) : (s = s || []).push(v, _));
      }
      return g && (Za(g, p[Bs]), (s = s || []).push(Bs, g)), s;
    }
    function IT(e, t, a, i, u) {
      a === "input" && u.type === "radio" && u.name != null && h(e, u);
      var s = hl(a, i), f = hl(a, u);
      switch (PT(e, t, s, f), a) {
        case "input":
          R(e, u);
          break;
        case "textarea":
          nv(e, u);
          break;
        case "select":
          sc(e, u);
          break;
      }
    }
    function QT(e) {
      {
        var t = e.toLowerCase();
        return Gu.hasOwnProperty(t) && Gu[t] || null;
      }
    }
    function WT(e, t, a, i, u, s, f) {
      var p, v;
      switch (p = hl(t, a), Sh(t, a), t) {
        case "dialog":
          Rn("cancel", e), Rn("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          Rn("load", e);
          break;
        case "video":
        case "audio":
          for (var y = 0; y < Zd.length; y++)
            Rn(Zd[y], e);
          break;
        case "source":
          Rn("error", e);
          break;
        case "img":
        case "image":
        case "link":
          Rn("error", e), Rn("load", e);
          break;
        case "details":
          Rn("toggle", e);
          break;
        case "input":
          Iu(e, a), Rn("invalid", e);
          break;
        case "option":
          $t(e, a);
          break;
        case "select":
          Ko(e, a), Rn("invalid", e);
          break;
        case "textarea":
          tv(e, a), Rn("invalid", e);
          break;
      }
      vc(t, a);
      {
        v = /* @__PURE__ */ new Set();
        for (var g = e.attributes, k = 0; k < g.length; k++) {
          var _ = g[k].name.toLowerCase();
          switch (_) {
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              v.add(g[k].name);
          }
        }
      }
      var U = null;
      for (var j in a)
        if (a.hasOwnProperty(j)) {
          var V = a[j];
          if (j === Vs)
            typeof V == "string" ? e.textContent !== V && (a[wo] !== !0 && Rh(e.textContent, V, s, f), U = [Vs, V]) : typeof V == "number" && e.textContent !== "" + V && (a[wo] !== !0 && Rh(e.textContent, V, s, f), U = [Vs, "" + V]);
          else if (Pe.hasOwnProperty(j))
            V != null && (typeof V != "function" && Eh(j, V), j === "onScroll" && Rn("scroll", e));
          else if (f && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof p == "boolean") {
            var de = void 0, Ie = un(j);
            if (a[wo] !== !0) {
              if (!(j === yh || j === wo || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              j === "value" || j === "checked" || j === "selected")) {
                if (j === np) {
                  var ze = e.innerHTML, Dt = V ? V[gh] : void 0;
                  if (Dt != null) {
                    var Rt = jE(e, Dt);
                    Rt !== ze && rp(j, ze, Rt);
                  }
                } else if (j === Bs) {
                  if (v.delete(j), AE) {
                    var O = Zm(V);
                    de = e.getAttribute("style"), O !== de && rp(j, de, O);
                  }
                } else if (p)
                  v.delete(j.toLowerCase()), de = si(e, j, V), V !== de && rp(j, de, V);
                else if (!fn(j, Ie, p) && !Zn(j, V, Ie, p)) {
                  var B = !1;
                  if (Ie !== null)
                    v.delete(Ie.attributeName), de = Wl(e, j, V, Ie);
                  else {
                    var L = i;
                    if (L === Ja && (L = ed(t)), L === Ja)
                      v.delete(j.toLowerCase());
                    else {
                      var J = QT(j);
                      J !== null && J !== j && (B = !0, v.delete(J)), v.delete(j);
                    }
                    de = si(e, j, V);
                  }
                  var Ee = M;
                  !Ee && V !== de && !B && rp(j, de, V);
                }
              }
            }
          }
        }
      switch (f && // $FlowFixMe - Should be inferred as not undefined.
      v.size > 0 && a[wo] !== !0 && UE(v), t) {
        case "input":
          La(e), z(e, a, !0);
          break;
        case "textarea":
          La(e), rv(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && Th(e);
          break;
      }
      return U;
    }
    function qT(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function ky(e, t) {
      {
        if (Va)
          return;
        Va = !0, S("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function Dy(e, t) {
      {
        if (Va)
          return;
        Va = !0, S('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function Oy(e, t, a) {
      {
        if (Va)
          return;
        Va = !0, S("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function Ly(e, t) {
      {
        if (t === "" || Va)
          return;
        Va = !0, S('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function GT(e, t, a) {
      switch (t) {
        case "input":
          P(e, a);
          return;
        case "textarea":
          Qm(e, a);
          return;
        case "select":
          Jf(e, a);
          return;
      }
    }
    var ap = function() {
    }, ip = function() {
    };
    {
      var XT = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], HE = [
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
      ], KT = HE.concat(["button"]), JT = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], PE = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      ip = function(e, t) {
        var a = at({}, e || PE), i = {
          tag: t
        };
        return HE.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), KT.indexOf(t) !== -1 && (a.pTagInButtonScope = null), XT.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var ZT = function(e, t) {
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
            return JT.indexOf(t) === -1;
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
      }, eb = function(e, t) {
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
      }, VE = {};
      ap = function(e, t, a) {
        a = a || PE;
        var i = a.current, u = i && i.tag;
        t != null && (e != null && S("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = ZT(e, u) ? null : i, f = s ? null : eb(e, a), p = s || f;
        if (p) {
          var v = p.tag, y = !!s + "|" + e + "|" + v;
          if (!VE[y]) {
            VE[y] = !0;
            var g = e, k = "";
            if (e === "#text" ? /\S/.test(t) ? g = "Text nodes" : (g = "Whitespace text nodes", k = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : g = "<" + e + ">", s) {
              var _ = "";
              v === "table" && e === "tr" && (_ += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), S("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", g, v, k, _);
            } else
              S("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", g, v);
          }
        }
      };
    }
    var bh = "suppressHydrationWarning", _h = "$", wh = "/$", lp = "$?", up = "$!", tb = "style", Ny = null, My = null;
    function nb(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case $i:
        case Jo: {
          t = i === $i ? "#document" : "#fragment";
          var u = e.documentElement;
          a = u ? u.namespaceURI : fc(null, "");
          break;
        }
        default: {
          var s = i === An ? e.parentNode : e, f = s.namespaceURI || null;
          t = s.tagName, a = fc(f, t);
          break;
        }
      }
      {
        var p = t.toLowerCase(), v = ip(null, p);
        return {
          namespace: a,
          ancestorInfo: v
        };
      }
    }
    function rb(e, t, a) {
      {
        var i = e, u = fc(i.namespace, t), s = ip(i.ancestorInfo, t);
        return {
          namespace: u,
          ancestorInfo: s
        };
      }
    }
    function Ck(e) {
      return e;
    }
    function ab(e) {
      Ny = pr(), My = gT();
      var t = null;
      return Ln(!1), t;
    }
    function ib(e) {
      ST(My), Ln(Ny), Ny = null, My = null;
    }
    function lb(e, t, a, i, u) {
      var s;
      {
        var f = i;
        if (ap(e, null, f.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var p = "" + t.children, v = ip(f.ancestorInfo, e);
          ap(null, p, v);
        }
        s = f.namespace;
      }
      var y = VT(e, t, a, s);
      return cp(u, y), Vy(y, t), y;
    }
    function ub(e, t) {
      e.appendChild(t);
    }
    function ob(e, t, a, i, u) {
      switch ($T(e, t, a, i), t) {
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
    function sb(e, t, a, i, u, s) {
      {
        var f = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var p = "" + i.children, v = ip(f.ancestorInfo, t);
          ap(null, p, v);
        }
      }
      return YT(e, t, a, i);
    }
    function zy(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function cb(e, t, a, i) {
      {
        var u = a;
        ap(null, e, u.ancestorInfo);
      }
      var s = BT(e, t);
      return cp(i, s), s;
    }
    function fb() {
      var e = window.event;
      return e === void 0 ? fr : go(e.type);
    }
    var Uy = typeof setTimeout == "function" ? setTimeout : void 0, db = typeof clearTimeout == "function" ? clearTimeout : void 0, Ay = -1, BE = typeof Promise == "function" ? Promise : void 0, pb = typeof queueMicrotask == "function" ? queueMicrotask : typeof BE < "u" ? function(e) {
      return BE.resolve(null).then(e).catch(vb);
    } : Uy;
    function vb(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function hb(e, t, a, i) {
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
    function mb(e, t, a, i, u, s) {
      IT(e, t, a, i, u), Vy(e, u);
    }
    function $E(e) {
      vl(e, "");
    }
    function yb(e, t, a) {
      e.nodeValue = a;
    }
    function gb(e, t) {
      e.appendChild(t);
    }
    function Sb(e, t) {
      var a;
      e.nodeType === An ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && Th(a);
    }
    function Eb(e, t, a) {
      e.insertBefore(t, a);
    }
    function Cb(e, t, a) {
      e.nodeType === An ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function Rb(e, t) {
      e.removeChild(t);
    }
    function Tb(e, t) {
      e.nodeType === An ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function jy(e, t) {
      var a = t, i = 0;
      do {
        var u = a.nextSibling;
        if (e.removeChild(a), u && u.nodeType === An) {
          var s = u.data;
          if (s === wh)
            if (i === 0) {
              e.removeChild(u), kr(t);
              return;
            } else
              i--;
          else (s === _h || s === lp || s === up) && i++;
        }
        a = u;
      } while (a);
      kr(t);
    }
    function bb(e, t) {
      e.nodeType === An ? jy(e.parentNode, t) : e.nodeType === Xr && jy(e, t), kr(e);
    }
    function _b(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function wb(e) {
      e.nodeValue = "";
    }
    function xb(e, t) {
      e = e;
      var a = t[tb], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = pc("display", i);
    }
    function kb(e, t) {
      e.nodeValue = t;
    }
    function Db(e) {
      e.nodeType === Xr ? e.textContent = "" : e.nodeType === $i && e.documentElement && e.removeChild(e.documentElement);
    }
    function Ob(e, t, a) {
      return e.nodeType !== Xr || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function Lb(e, t) {
      return t === "" || e.nodeType !== Bi ? null : e;
    }
    function Nb(e) {
      return e.nodeType !== An ? null : e;
    }
    function YE(e) {
      return e.data === lp;
    }
    function Fy(e) {
      return e.data === up;
    }
    function Mb(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, u;
      return t && (a = t.dgst, i = t.msg, u = t.stck), {
        message: i,
        digest: a,
        stack: u
      };
    }
    function zb(e, t) {
      e._reactRetry = t;
    }
    function xh(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === Xr || t === Bi)
          break;
        if (t === An) {
          var a = e.data;
          if (a === _h || a === up || a === lp)
            break;
          if (a === wh)
            return null;
        }
      }
      return e;
    }
    function op(e) {
      return xh(e.nextSibling);
    }
    function Ub(e) {
      return xh(e.firstChild);
    }
    function Ab(e) {
      return xh(e.firstChild);
    }
    function jb(e) {
      return xh(e.nextSibling);
    }
    function Fb(e, t, a, i, u, s, f) {
      cp(s, e), Vy(e, a);
      var p;
      {
        var v = u;
        p = v.namespace;
      }
      var y = (s.mode & yt) !== Fe;
      return WT(e, t, a, p, i, y, f);
    }
    function Hb(e, t, a, i) {
      return cp(a, e), a.mode & yt, qT(e, t);
    }
    function Pb(e, t) {
      cp(t, e);
    }
    function Vb(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === An) {
          var i = t.data;
          if (i === wh) {
            if (a === 0)
              return op(t);
            a--;
          } else (i === _h || i === up || i === lp) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function IE(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === An) {
          var i = t.data;
          if (i === _h || i === up || i === lp) {
            if (a === 0)
              return t;
            a--;
          } else i === wh && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function Bb(e) {
      kr(e);
    }
    function $b(e) {
      kr(e);
    }
    function Yb(e) {
      return e !== "head" && e !== "body";
    }
    function Ib(e, t, a, i) {
      var u = !0;
      Rh(t.nodeValue, a, i, u);
    }
    function Qb(e, t, a, i, u, s) {
      if (t[bh] !== !0) {
        var f = !0;
        Rh(i.nodeValue, u, s, f);
      }
    }
    function Wb(e, t) {
      t.nodeType === Xr ? ky(e, t) : t.nodeType === An || Dy(e, t);
    }
    function qb(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === Xr ? ky(a, t) : t.nodeType === An || Dy(a, t));
      }
    }
    function Gb(e, t, a, i, u) {
      (u || t[bh] !== !0) && (i.nodeType === Xr ? ky(a, i) : i.nodeType === An || Dy(a, i));
    }
    function Xb(e, t, a) {
      Oy(e, t);
    }
    function Kb(e, t) {
      Ly(e, t);
    }
    function Jb(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && Oy(i, t);
      }
    }
    function Zb(e, t) {
      {
        var a = e.parentNode;
        a !== null && Ly(a, t);
      }
    }
    function e_(e, t, a, i, u, s) {
      (s || t[bh] !== !0) && Oy(a, i);
    }
    function t_(e, t, a, i, u) {
      (u || t[bh] !== !0) && Ly(a, i);
    }
    function n_(e) {
      S("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function r_(e) {
      ep(e);
    }
    var Tf = Math.random().toString(36).slice(2), bf = "__reactFiber$" + Tf, Hy = "__reactProps$" + Tf, sp = "__reactContainer$" + Tf, Py = "__reactEvents$" + Tf, a_ = "__reactListeners$" + Tf, i_ = "__reactHandles$" + Tf;
    function l_(e) {
      delete e[bf], delete e[Hy], delete e[Py], delete e[a_], delete e[i_];
    }
    function cp(e, t) {
      t[bf] = e;
    }
    function kh(e, t) {
      t[sp] = e;
    }
    function QE(e) {
      e[sp] = null;
    }
    function fp(e) {
      return !!e[sp];
    }
    function $s(e) {
      var t = e[bf];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[sp] || a[bf], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var u = IE(e); u !== null; ) {
              var s = u[bf];
              if (s)
                return s;
              u = IE(u);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function xo(e) {
      var t = e[bf] || e[sp];
      return t && (t.tag === q || t.tag === fe || t.tag === Oe || t.tag === F) ? t : null;
    }
    function _f(e) {
      if (e.tag === q || e.tag === fe)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function Dh(e) {
      return e[Hy] || null;
    }
    function Vy(e, t) {
      e[Hy] = t;
    }
    function u_(e) {
      var t = e[Py];
      return t === void 0 && (t = e[Py] = /* @__PURE__ */ new Set()), t;
    }
    var WE = {}, qE = Se.ReactDebugCurrentFrame;
    function Oh(e) {
      if (e) {
        var t = e._owner, a = Qo(e.type, e._source, t ? t.type : null);
        qE.setExtraStackFrame(a);
      } else
        qE.setExtraStackFrame(null);
    }
    function Ki(e, t, a, i, u) {
      {
        var s = Function.call.bind(In);
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
            p && !(p instanceof Error) && (Oh(u), S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, f, typeof p), Oh(null)), p instanceof Error && !(p.message in WE) && (WE[p.message] = !0, Oh(u), S("Failed %s type: %s", a, p.message), Oh(null));
          }
      }
    }
    var By = [], Lh;
    Lh = [];
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
      t !== Lh[wu] && S("Unexpected Fiber popped."), e.current = By[wu], By[wu] = null, Lh[wu] = null, wu--;
    }
    function la(e, t, a) {
      wu++, By[wu] = e.current, Lh[wu] = a, e.current = t;
    }
    var $y;
    $y = {};
    var li = {};
    Object.freeze(li);
    var xu = ko(li), Ul = ko(!1), Yy = li;
    function wf(e, t, a) {
      return a && Al(t) ? Yy : xu.current;
    }
    function GE(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function xf(e, t) {
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
          var p = Ze(e) || "Unknown";
          Ki(i, s, "context", p);
        }
        return u && GE(e, t, s), s;
      }
    }
    function Nh() {
      return Ul.current;
    }
    function Al(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function Mh(e) {
      ia(Ul, e), ia(xu, e);
    }
    function Iy(e) {
      ia(Ul, e), ia(xu, e);
    }
    function XE(e, t, a) {
      {
        if (xu.current !== li)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        la(xu, t, e), la(Ul, a, e);
      }
    }
    function KE(e, t, a) {
      {
        var i = e.stateNode, u = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = Ze(e) || "Unknown";
            $y[s] || ($y[s] = !0, S("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var f = i.getChildContext();
        for (var p in f)
          if (!(p in u))
            throw new Error((Ze(e) || "Unknown") + '.getChildContext(): key "' + p + '" is not defined in childContextTypes.');
        {
          var v = Ze(e) || "Unknown";
          Ki(u, f, "child context", v);
        }
        return at({}, a, f);
      }
    }
    function zh(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || li;
        return Yy = xu.current, la(xu, a, e), la(Ul, Ul.current, e), !0;
      }
    }
    function JE(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var u = KE(e, t, Yy);
          i.__reactInternalMemoizedMergedChildContext = u, ia(Ul, e), ia(xu, e), la(xu, u, e), la(Ul, a, e);
        } else
          ia(Ul, e), la(Ul, a, e);
      }
    }
    function o_(e) {
      {
        if (!Lv(e) || e.tag !== Z)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case F:
              return t.stateNode.context;
            case Z: {
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
    var Do = 0, Uh = 1, ku = null, Qy = !1, Wy = !1;
    function ZE(e) {
      ku === null ? ku = [e] : ku.push(e);
    }
    function s_(e) {
      Qy = !0, ZE(e);
    }
    function eC() {
      Qy && Oo();
    }
    function Oo() {
      if (!Wy && ku !== null) {
        Wy = !0;
        var e = 0, t = ga();
        try {
          var a = !0, i = ku;
          for (qn(ra); e < i.length; e++) {
            var u = i[e];
            do
              u = u(a);
            while (u !== null);
          }
          ku = null, Qy = !1;
        } catch (s) {
          throw ku !== null && (ku = ku.slice(e + 1)), hd(Qi, Oo), s;
        } finally {
          qn(t), Wy = !1;
        }
      }
      return null;
    }
    var kf = [], Df = 0, Ah = null, jh = 0, bi = [], _i = 0, Ys = null, Du = 1, Ou = "";
    function c_(e) {
      return Qs(), (e.flags & ds) !== je;
    }
    function f_(e) {
      return Qs(), jh;
    }
    function d_() {
      var e = Ou, t = Du, a = t & ~p_(t);
      return a.toString(32) + e;
    }
    function Is(e, t) {
      Qs(), kf[Df++] = jh, kf[Df++] = Ah, Ah = e, jh = t;
    }
    function tC(e, t, a) {
      Qs(), bi[_i++] = Du, bi[_i++] = Ou, bi[_i++] = Ys, Ys = e;
      var i = Du, u = Ou, s = Fh(i) - 1, f = i & ~(1 << s), p = a + 1, v = Fh(t) + s;
      if (v > 30) {
        var y = s - s % 5, g = (1 << y) - 1, k = (f & g).toString(32), _ = f >> y, U = s - y, j = Fh(t) + U, V = p << U, de = V | _, Ie = k + u;
        Du = 1 << j | de, Ou = Ie;
      } else {
        var ze = p << s, Dt = ze | f, Rt = u;
        Du = 1 << v | Dt, Ou = Rt;
      }
    }
    function qy(e) {
      Qs();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        Is(e, a), tC(e, a, i);
      }
    }
    function Fh(e) {
      return 32 - Wn(e);
    }
    function p_(e) {
      return 1 << Fh(e) - 1;
    }
    function Gy(e) {
      for (; e === Ah; )
        Ah = kf[--Df], kf[Df] = null, jh = kf[--Df], kf[Df] = null;
      for (; e === Ys; )
        Ys = bi[--_i], bi[_i] = null, Ou = bi[--_i], bi[_i] = null, Du = bi[--_i], bi[_i] = null;
    }
    function v_() {
      return Qs(), Ys !== null ? {
        id: Du,
        overflow: Ou
      } : null;
    }
    function h_(e, t) {
      Qs(), bi[_i++] = Du, bi[_i++] = Ou, bi[_i++] = Ys, Du = t.id, Ou = t.overflow, Ys = e;
    }
    function Qs() {
      jr() || S("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Ar = null, wi = null, Ji = !1, Ws = !1, Lo = null;
    function m_() {
      Ji && S("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function nC() {
      Ws = !0;
    }
    function y_() {
      return Ws;
    }
    function g_(e) {
      var t = e.stateNode.containerInfo;
      return wi = Ab(t), Ar = e, Ji = !0, Lo = null, Ws = !1, !0;
    }
    function S_(e, t, a) {
      return wi = jb(t), Ar = e, Ji = !0, Lo = null, Ws = !1, a !== null && h_(e, a), !0;
    }
    function rC(e, t) {
      switch (e.tag) {
        case F: {
          Wb(e.stateNode.containerInfo, t);
          break;
        }
        case q: {
          var a = (e.mode & yt) !== Fe;
          Gb(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case Oe: {
          var i = e.memoizedState;
          i.dehydrated !== null && qb(i.dehydrated, t);
          break;
        }
      }
    }
    function aC(e, t) {
      rC(e, t);
      var a = Tx();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= Kr) : i.push(a);
    }
    function Xy(e, t) {
      {
        if (Ws)
          return;
        switch (e.tag) {
          case F: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case q:
                var i = t.type;
                t.pendingProps, Xb(a, i);
                break;
              case fe:
                var u = t.pendingProps;
                Kb(a, u);
                break;
            }
            break;
          }
          case q: {
            var s = e.type, f = e.memoizedProps, p = e.stateNode;
            switch (t.tag) {
              case q: {
                var v = t.type, y = t.pendingProps, g = (e.mode & yt) !== Fe;
                e_(
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
              case fe: {
                var k = t.pendingProps, _ = (e.mode & yt) !== Fe;
                t_(
                  s,
                  f,
                  p,
                  k,
                  // TODO: Delete this argument when we remove the legacy root API.
                  _
                );
                break;
              }
            }
            break;
          }
          case Oe: {
            var U = e.memoizedState, j = U.dehydrated;
            if (j !== null) switch (t.tag) {
              case q:
                var V = t.type;
                t.pendingProps, Jb(j, V);
                break;
              case fe:
                var de = t.pendingProps;
                Zb(j, de);
                break;
            }
            break;
          }
          default:
            return;
        }
      }
    }
    function iC(e, t) {
      t.flags = t.flags & -4097 | jn, Xy(e, t);
    }
    function lC(e, t) {
      switch (e.tag) {
        case q: {
          var a = e.type;
          e.pendingProps;
          var i = Ob(t, a);
          return i !== null ? (e.stateNode = i, Ar = e, wi = Ub(i), !0) : !1;
        }
        case fe: {
          var u = e.pendingProps, s = Lb(t, u);
          return s !== null ? (e.stateNode = s, Ar = e, wi = null, !0) : !1;
        }
        case Oe: {
          var f = Nb(t);
          if (f !== null) {
            var p = {
              dehydrated: f,
              treeContext: v_(),
              retryLane: ya
            };
            e.memoizedState = p;
            var v = bx(f);
            return v.return = e, e.child = v, Ar = e, wi = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function Ky(e) {
      return (e.mode & yt) !== Fe && (e.flags & mt) === je;
    }
    function Jy(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function Zy(e) {
      if (Ji) {
        var t = wi;
        if (!t) {
          Ky(e) && (Xy(Ar, e), Jy()), iC(Ar, e), Ji = !1, Ar = e;
          return;
        }
        var a = t;
        if (!lC(e, t)) {
          Ky(e) && (Xy(Ar, e), Jy()), t = op(a);
          var i = Ar;
          if (!t || !lC(e, t)) {
            iC(Ar, e), Ji = !1, Ar = e;
            return;
          }
          aC(i, a);
        }
      }
    }
    function E_(e, t, a) {
      var i = e.stateNode, u = !Ws, s = Fb(i, e.type, e.memoizedProps, t, a, e, u);
      return e.updateQueue = s, s !== null;
    }
    function C_(e) {
      var t = e.stateNode, a = e.memoizedProps, i = Hb(t, a, e);
      if (i) {
        var u = Ar;
        if (u !== null)
          switch (u.tag) {
            case F: {
              var s = u.stateNode.containerInfo, f = (u.mode & yt) !== Fe;
              Ib(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                f
              );
              break;
            }
            case q: {
              var p = u.type, v = u.memoizedProps, y = u.stateNode, g = (u.mode & yt) !== Fe;
              Qb(
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
    function R_(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      Pb(a, e);
    }
    function T_(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return Vb(a);
    }
    function uC(e) {
      for (var t = e.return; t !== null && t.tag !== q && t.tag !== F && t.tag !== Oe; )
        t = t.return;
      Ar = t;
    }
    function Hh(e) {
      if (e !== Ar)
        return !1;
      if (!Ji)
        return uC(e), Ji = !0, !1;
      if (e.tag !== F && (e.tag !== q || Yb(e.type) && !zy(e.type, e.memoizedProps))) {
        var t = wi;
        if (t)
          if (Ky(e))
            oC(e), Jy();
          else
            for (; t; )
              aC(e, t), t = op(t);
      }
      return uC(e), e.tag === Oe ? wi = T_(e) : wi = Ar ? op(e.stateNode) : null, !0;
    }
    function b_() {
      return Ji && wi !== null;
    }
    function oC(e) {
      for (var t = wi; t; )
        rC(e, t), t = op(t);
    }
    function Of() {
      Ar = null, wi = null, Ji = !1, Ws = !1;
    }
    function sC() {
      Lo !== null && (nR(Lo), Lo = null);
    }
    function jr() {
      return Ji;
    }
    function eg(e) {
      Lo === null ? Lo = [e] : Lo.push(e);
    }
    var __ = Se.ReactCurrentBatchConfig, w_ = null;
    function x_() {
      return __.transition;
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
      var k_ = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & it && (t = a), a = a.return;
        return t;
      }, qs = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, dp = [], pp = [], vp = [], hp = [], mp = [], yp = [], Gs = /* @__PURE__ */ new Set();
      Zi.recordUnsafeLifecycleWarnings = function(e, t) {
        Gs.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && dp.push(e), e.mode & it && typeof t.UNSAFE_componentWillMount == "function" && pp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && vp.push(e), e.mode & it && typeof t.UNSAFE_componentWillReceiveProps == "function" && hp.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && mp.push(e), e.mode & it && typeof t.UNSAFE_componentWillUpdate == "function" && yp.push(e));
      }, Zi.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        dp.length > 0 && (dp.forEach(function(_) {
          e.add(Ze(_) || "Component"), Gs.add(_.type);
        }), dp = []);
        var t = /* @__PURE__ */ new Set();
        pp.length > 0 && (pp.forEach(function(_) {
          t.add(Ze(_) || "Component"), Gs.add(_.type);
        }), pp = []);
        var a = /* @__PURE__ */ new Set();
        vp.length > 0 && (vp.forEach(function(_) {
          a.add(Ze(_) || "Component"), Gs.add(_.type);
        }), vp = []);
        var i = /* @__PURE__ */ new Set();
        hp.length > 0 && (hp.forEach(function(_) {
          i.add(Ze(_) || "Component"), Gs.add(_.type);
        }), hp = []);
        var u = /* @__PURE__ */ new Set();
        mp.length > 0 && (mp.forEach(function(_) {
          u.add(Ze(_) || "Component"), Gs.add(_.type);
        }), mp = []);
        var s = /* @__PURE__ */ new Set();
        if (yp.length > 0 && (yp.forEach(function(_) {
          s.add(Ze(_) || "Component"), Gs.add(_.type);
        }), yp = []), t.size > 0) {
          var f = qs(t);
          S(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, f);
        }
        if (i.size > 0) {
          var p = qs(i);
          S(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, p);
        }
        if (s.size > 0) {
          var v = qs(s);
          S(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, v);
        }
        if (e.size > 0) {
          var y = qs(e);
          Me(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, y);
        }
        if (a.size > 0) {
          var g = qs(a);
          Me(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, g);
        }
        if (u.size > 0) {
          var k = qs(u);
          Me(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, k);
        }
      };
      var Ph = /* @__PURE__ */ new Map(), cC = /* @__PURE__ */ new Set();
      Zi.recordLegacyContextWarning = function(e, t) {
        var a = k_(e);
        if (a === null) {
          S("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!cC.has(e.type)) {
          var i = Ph.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], Ph.set(a, i)), i.push(e));
        }
      }, Zi.flushLegacyContextWarning = function() {
        Ph.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(Ze(s) || "Component"), cC.add(s.type);
            });
            var u = qs(i);
            try {
              Gt(a), S(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u);
            } finally {
              bn();
            }
          }
        });
      }, Zi.discardPendingWarnings = function() {
        dp = [], pp = [], vp = [], hp = [], mp = [], yp = [], Ph = /* @__PURE__ */ new Map();
      };
    }
    var tg, ng, rg, ag, ig, fC = function(e, t) {
    };
    tg = !1, ng = !1, rg = {}, ag = {}, ig = {}, fC = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = Ze(t) || "Component";
        ag[a] || (ag[a] = !0, S('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function D_(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function gp(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & it || ne) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self) && // Will already throw with "Function components cannot have string refs"
        !(a._owner && a._owner.tag !== Z) && // Will already warn with "Function components cannot be given refs"
        !(typeof a.type == "function" && !D_(a.type)) && // Will already throw with "Element ref was specified as a string (someStringRef) but no owner was set"
        a._owner) {
          var u = Ze(e) || "Component";
          rg[u] || (S('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', u, i), rg[u] = !0);
        }
        if (a._owner) {
          var s = a._owner, f;
          if (s) {
            var p = s;
            if (p.tag !== Z)
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
          var g = function(k) {
            var _ = v.refs;
            k === null ? delete _[y] : _[y] = k;
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
    function Bh(e) {
      {
        var t = Ze(e) || "Component";
        if (ig[t])
          return;
        ig[t] = !0, S("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function dC(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function pC(e) {
      function t(O, B) {
        if (e) {
          var L = O.deletions;
          L === null ? (O.deletions = [B], O.flags |= Kr) : L.push(B);
        }
      }
      function a(O, B) {
        if (!e)
          return null;
        for (var L = B; L !== null; )
          t(O, L), L = L.sibling;
        return null;
      }
      function i(O, B) {
        for (var L = /* @__PURE__ */ new Map(), J = B; J !== null; )
          J.key !== null ? L.set(J.key, J) : L.set(J.index, J), J = J.sibling;
        return L;
      }
      function u(O, B) {
        var L = ac(O, B);
        return L.index = 0, L.sibling = null, L;
      }
      function s(O, B, L) {
        if (O.index = L, !e)
          return O.flags |= ds, B;
        var J = O.alternate;
        if (J !== null) {
          var Ee = J.index;
          return Ee < B ? (O.flags |= jn, B) : Ee;
        } else
          return O.flags |= jn, B;
      }
      function f(O) {
        return e && O.alternate === null && (O.flags |= jn), O;
      }
      function p(O, B, L, J) {
        if (B === null || B.tag !== fe) {
          var Ee = eE(L, O.mode, J);
          return Ee.return = O, Ee;
        } else {
          var ve = u(B, L);
          return ve.return = O, ve;
        }
      }
      function v(O, B, L, J) {
        var Ee = L.type;
        if (Ee === Qr)
          return g(O, B, L.props.children, J, L.key);
        if (B !== null && (B.elementType === Ee || // Keep this check inline so it only runs on the false path:
        gR(B, L) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof Ee == "object" && Ee !== null && Ee.$$typeof === et && dC(Ee) === B.type)) {
          var ve = u(B, L.props);
          return ve.ref = gp(O, B, L), ve.return = O, ve._debugSource = L._source, ve._debugOwner = L._owner, ve;
        }
        var Ke = ZS(L, O.mode, J);
        return Ke.ref = gp(O, B, L), Ke.return = O, Ke;
      }
      function y(O, B, L, J) {
        if (B === null || B.tag !== ee || B.stateNode.containerInfo !== L.containerInfo || B.stateNode.implementation !== L.implementation) {
          var Ee = tE(L, O.mode, J);
          return Ee.return = O, Ee;
        } else {
          var ve = u(B, L.children || []);
          return ve.return = O, ve;
        }
      }
      function g(O, B, L, J, Ee) {
        if (B === null || B.tag !== ue) {
          var ve = Bo(L, O.mode, J, Ee);
          return ve.return = O, ve;
        } else {
          var Ke = u(B, L);
          return Ke.return = O, Ke;
        }
      }
      function k(O, B, L) {
        if (typeof B == "string" && B !== "" || typeof B == "number") {
          var J = eE("" + B, O.mode, L);
          return J.return = O, J;
        }
        if (typeof B == "object" && B !== null) {
          switch (B.$$typeof) {
            case or: {
              var Ee = ZS(B, O.mode, L);
              return Ee.ref = gp(O, null, B), Ee.return = O, Ee;
            }
            case va: {
              var ve = tE(B, O.mode, L);
              return ve.return = O, ve;
            }
            case et: {
              var Ke = B._payload, rt = B._init;
              return k(O, rt(Ke), L);
            }
          }
          if (ut(B) || yn(B)) {
            var tn = Bo(B, O.mode, L, null);
            return tn.return = O, tn;
          }
          Vh(O, B);
        }
        return typeof B == "function" && Bh(O), null;
      }
      function _(O, B, L, J) {
        var Ee = B !== null ? B.key : null;
        if (typeof L == "string" && L !== "" || typeof L == "number")
          return Ee !== null ? null : p(O, B, "" + L, J);
        if (typeof L == "object" && L !== null) {
          switch (L.$$typeof) {
            case or:
              return L.key === Ee ? v(O, B, L, J) : null;
            case va:
              return L.key === Ee ? y(O, B, L, J) : null;
            case et: {
              var ve = L._payload, Ke = L._init;
              return _(O, B, Ke(ve), J);
            }
          }
          if (ut(L) || yn(L))
            return Ee !== null ? null : g(O, B, L, J, null);
          Vh(O, L);
        }
        return typeof L == "function" && Bh(O), null;
      }
      function U(O, B, L, J, Ee) {
        if (typeof J == "string" && J !== "" || typeof J == "number") {
          var ve = O.get(L) || null;
          return p(B, ve, "" + J, Ee);
        }
        if (typeof J == "object" && J !== null) {
          switch (J.$$typeof) {
            case or: {
              var Ke = O.get(J.key === null ? L : J.key) || null;
              return v(B, Ke, J, Ee);
            }
            case va: {
              var rt = O.get(J.key === null ? L : J.key) || null;
              return y(B, rt, J, Ee);
            }
            case et:
              var tn = J._payload, zt = J._init;
              return U(O, B, L, zt(tn), Ee);
          }
          if (ut(J) || yn(J)) {
            var Xn = O.get(L) || null;
            return g(B, Xn, J, Ee, null);
          }
          Vh(B, J);
        }
        return typeof J == "function" && Bh(B), null;
      }
      function j(O, B, L) {
        {
          if (typeof O != "object" || O === null)
            return B;
          switch (O.$$typeof) {
            case or:
            case va:
              fC(O, L);
              var J = O.key;
              if (typeof J != "string")
                break;
              if (B === null) {
                B = /* @__PURE__ */ new Set(), B.add(J);
                break;
              }
              if (!B.has(J)) {
                B.add(J);
                break;
              }
              S("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", J);
              break;
            case et:
              var Ee = O._payload, ve = O._init;
              j(ve(Ee), B, L);
              break;
          }
        }
        return B;
      }
      function V(O, B, L, J) {
        for (var Ee = null, ve = 0; ve < L.length; ve++) {
          var Ke = L[ve];
          Ee = j(Ke, Ee, O);
        }
        for (var rt = null, tn = null, zt = B, Xn = 0, Ut = 0, $n = null; zt !== null && Ut < L.length; Ut++) {
          zt.index > Ut ? ($n = zt, zt = null) : $n = zt.sibling;
          var oa = _(O, zt, L[Ut], J);
          if (oa === null) {
            zt === null && (zt = $n);
            break;
          }
          e && zt && oa.alternate === null && t(O, zt), Xn = s(oa, Xn, Ut), tn === null ? rt = oa : tn.sibling = oa, tn = oa, zt = $n;
        }
        if (Ut === L.length) {
          if (a(O, zt), jr()) {
            var Yr = Ut;
            Is(O, Yr);
          }
          return rt;
        }
        if (zt === null) {
          for (; Ut < L.length; Ut++) {
            var oi = k(O, L[Ut], J);
            oi !== null && (Xn = s(oi, Xn, Ut), tn === null ? rt = oi : tn.sibling = oi, tn = oi);
          }
          if (jr()) {
            var _a = Ut;
            Is(O, _a);
          }
          return rt;
        }
        for (var wa = i(O, zt); Ut < L.length; Ut++) {
          var sa = U(wa, O, Ut, L[Ut], J);
          sa !== null && (e && sa.alternate !== null && wa.delete(sa.key === null ? Ut : sa.key), Xn = s(sa, Xn, Ut), tn === null ? rt = sa : tn.sibling = sa, tn = sa);
        }
        if (e && wa.forEach(function(Gf) {
          return t(O, Gf);
        }), jr()) {
          var ju = Ut;
          Is(O, ju);
        }
        return rt;
      }
      function de(O, B, L, J) {
        var Ee = yn(L);
        if (typeof Ee != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          L[Symbol.toStringTag] === "Generator" && (ng || S("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), ng = !0), L.entries === Ee && (tg || S("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), tg = !0);
          var ve = Ee.call(L);
          if (ve)
            for (var Ke = null, rt = ve.next(); !rt.done; rt = ve.next()) {
              var tn = rt.value;
              Ke = j(tn, Ke, O);
            }
        }
        var zt = Ee.call(L);
        if (zt == null)
          throw new Error("An iterable object provided no iterator.");
        for (var Xn = null, Ut = null, $n = B, oa = 0, Yr = 0, oi = null, _a = zt.next(); $n !== null && !_a.done; Yr++, _a = zt.next()) {
          $n.index > Yr ? (oi = $n, $n = null) : oi = $n.sibling;
          var wa = _(O, $n, _a.value, J);
          if (wa === null) {
            $n === null && ($n = oi);
            break;
          }
          e && $n && wa.alternate === null && t(O, $n), oa = s(wa, oa, Yr), Ut === null ? Xn = wa : Ut.sibling = wa, Ut = wa, $n = oi;
        }
        if (_a.done) {
          if (a(O, $n), jr()) {
            var sa = Yr;
            Is(O, sa);
          }
          return Xn;
        }
        if ($n === null) {
          for (; !_a.done; Yr++, _a = zt.next()) {
            var ju = k(O, _a.value, J);
            ju !== null && (oa = s(ju, oa, Yr), Ut === null ? Xn = ju : Ut.sibling = ju, Ut = ju);
          }
          if (jr()) {
            var Gf = Yr;
            Is(O, Gf);
          }
          return Xn;
        }
        for (var Xp = i(O, $n); !_a.done; Yr++, _a = zt.next()) {
          var Yl = U(Xp, O, Yr, _a.value, J);
          Yl !== null && (e && Yl.alternate !== null && Xp.delete(Yl.key === null ? Yr : Yl.key), oa = s(Yl, oa, Yr), Ut === null ? Xn = Yl : Ut.sibling = Yl, Ut = Yl);
        }
        if (e && Xp.forEach(function(tk) {
          return t(O, tk);
        }), jr()) {
          var ek = Yr;
          Is(O, ek);
        }
        return Xn;
      }
      function Ie(O, B, L, J) {
        if (B !== null && B.tag === fe) {
          a(O, B.sibling);
          var Ee = u(B, L);
          return Ee.return = O, Ee;
        }
        a(O, B);
        var ve = eE(L, O.mode, J);
        return ve.return = O, ve;
      }
      function ze(O, B, L, J) {
        for (var Ee = L.key, ve = B; ve !== null; ) {
          if (ve.key === Ee) {
            var Ke = L.type;
            if (Ke === Qr) {
              if (ve.tag === ue) {
                a(O, ve.sibling);
                var rt = u(ve, L.props.children);
                return rt.return = O, rt._debugSource = L._source, rt._debugOwner = L._owner, rt;
              }
            } else if (ve.elementType === Ke || // Keep this check inline so it only runs on the false path:
            gR(ve, L) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof Ke == "object" && Ke !== null && Ke.$$typeof === et && dC(Ke) === ve.type) {
              a(O, ve.sibling);
              var tn = u(ve, L.props);
              return tn.ref = gp(O, ve, L), tn.return = O, tn._debugSource = L._source, tn._debugOwner = L._owner, tn;
            }
            a(O, ve);
            break;
          } else
            t(O, ve);
          ve = ve.sibling;
        }
        if (L.type === Qr) {
          var zt = Bo(L.props.children, O.mode, J, L.key);
          return zt.return = O, zt;
        } else {
          var Xn = ZS(L, O.mode, J);
          return Xn.ref = gp(O, B, L), Xn.return = O, Xn;
        }
      }
      function Dt(O, B, L, J) {
        for (var Ee = L.key, ve = B; ve !== null; ) {
          if (ve.key === Ee)
            if (ve.tag === ee && ve.stateNode.containerInfo === L.containerInfo && ve.stateNode.implementation === L.implementation) {
              a(O, ve.sibling);
              var Ke = u(ve, L.children || []);
              return Ke.return = O, Ke;
            } else {
              a(O, ve);
              break;
            }
          else
            t(O, ve);
          ve = ve.sibling;
        }
        var rt = tE(L, O.mode, J);
        return rt.return = O, rt;
      }
      function Rt(O, B, L, J) {
        var Ee = typeof L == "object" && L !== null && L.type === Qr && L.key === null;
        if (Ee && (L = L.props.children), typeof L == "object" && L !== null) {
          switch (L.$$typeof) {
            case or:
              return f(ze(O, B, L, J));
            case va:
              return f(Dt(O, B, L, J));
            case et:
              var ve = L._payload, Ke = L._init;
              return Rt(O, B, Ke(ve), J);
          }
          if (ut(L))
            return V(O, B, L, J);
          if (yn(L))
            return de(O, B, L, J);
          Vh(O, L);
        }
        return typeof L == "string" && L !== "" || typeof L == "number" ? f(Ie(O, B, "" + L, J)) : (typeof L == "function" && Bh(O), a(O, B));
      }
      return Rt;
    }
    var Lf = pC(!0), vC = pC(!1);
    function O_(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = ac(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = ac(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function L_(e, t) {
      for (var a = e.child; a !== null; )
        gx(a, t), a = a.sibling;
    }
    var lg = ko(null), ug;
    ug = {};
    var $h = null, Nf = null, og = null, Yh = !1;
    function Ih() {
      $h = null, Nf = null, og = null, Yh = !1;
    }
    function hC() {
      Yh = !0;
    }
    function mC() {
      Yh = !1;
    }
    function yC(e, t, a) {
      la(lg, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== ug && S("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = ug;
    }
    function sg(e, t) {
      var a = lg.current;
      ia(lg, t), e._currentValue = a;
    }
    function cg(e, t, a) {
      for (var i = e; i !== null; ) {
        var u = i.alternate;
        if (hu(i.childLanes, t) ? u !== null && !hu(u.childLanes, t) && (u.childLanes = ot(u.childLanes, t)) : (i.childLanes = ot(i.childLanes, t), u !== null && (u.childLanes = ot(u.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && S("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function N_(e, t, a) {
      M_(e, t, a);
    }
    function M_(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var u = void 0, s = i.dependencies;
        if (s !== null) {
          u = i.child;
          for (var f = s.firstContext; f !== null; ) {
            if (f.context === t) {
              if (i.tag === Z) {
                var p = rr(a), v = Lu(Wt, p);
                v.tag = Wh;
                var y = i.updateQueue;
                if (y !== null) {
                  var g = y.shared, k = g.pending;
                  k === null ? v.next = v : (v.next = k.next, k.next = v), g.pending = v;
                }
              }
              i.lanes = ot(i.lanes, a);
              var _ = i.alternate;
              _ !== null && (_.lanes = ot(_.lanes, a)), cg(i.return, a, e), s.lanes = ot(s.lanes, a);
              break;
            }
            f = f.next;
          }
        } else if (i.tag === st)
          u = i.type === e.type ? null : i.child;
        else if (i.tag === ln) {
          var U = i.return;
          if (U === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          U.lanes = ot(U.lanes, a);
          var j = U.alternate;
          j !== null && (j.lanes = ot(j.lanes, a)), cg(U, a, e), u = i.sibling;
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
            var V = u.sibling;
            if (V !== null) {
              V.return = u.return, u = V;
              break;
            }
            u = u.return;
          }
        i = u;
      }
    }
    function Mf(e, t) {
      $h = e, Nf = null, og = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (na(a.lanes, t) && Mp(), a.firstContext = null);
      }
    }
    function lr(e) {
      Yh && S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (og !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (Nf === null) {
          if ($h === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          Nf = a, $h.dependencies = {
            lanes: $,
            firstContext: a
          };
        } else
          Nf = Nf.next = a;
      }
      return t;
    }
    var Xs = null;
    function fg(e) {
      Xs === null ? Xs = [e] : Xs.push(e);
    }
    function z_() {
      if (Xs !== null) {
        for (var e = 0; e < Xs.length; e++) {
          var t = Xs[e], a = t.interleaved;
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
        Xs = null;
      }
    }
    function gC(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, fg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Qh(e, i);
    }
    function U_(e, t, a, i) {
      var u = t.interleaved;
      u === null ? (a.next = a, fg(t)) : (a.next = u.next, u.next = a), t.interleaved = a;
    }
    function A_(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, fg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Qh(e, i);
    }
    function Ba(e, t) {
      return Qh(e, t);
    }
    var j_ = Qh;
    function Qh(e, t) {
      e.lanes = ot(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = ot(a.lanes, t)), a === null && (e.flags & (jn | Hn)) !== je && vR(e);
      for (var i = e, u = e.return; u !== null; )
        u.childLanes = ot(u.childLanes, t), a = u.alternate, a !== null ? a.childLanes = ot(a.childLanes, t) : (u.flags & (jn | Hn)) !== je && vR(e), i = u, u = u.return;
      if (i.tag === F) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var SC = 0, EC = 1, Wh = 2, dg = 3, qh = !1, pg, Gh;
    pg = !1, Gh = null;
    function vg(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: $
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function CC(e, t) {
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
        tag: SC,
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
      if (Gh === u && !pg && (S("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), pg = !0), U1()) {
        var s = u.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), u.pending = t, j_(e, a);
      } else
        return A_(e, u, t, a);
    }
    function Xh(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var u = i.shared;
        if (Nd(a)) {
          var s = u.lanes;
          s = Xc(s, e.pendingLanes);
          var f = ot(s, a);
          u.lanes = f, ks(e, f);
        }
      }
    }
    function hg(e, t) {
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
    function F_(e, t, a, i, u, s) {
      switch (a.tag) {
        case EC: {
          var f = a.payload;
          if (typeof f == "function") {
            hC();
            var p = f.call(s, i, u);
            {
              if (e.mode & it) {
                Qt(!0);
                try {
                  f.call(s, i, u);
                } finally {
                  Qt(!1);
                }
              }
              mC();
            }
            return p;
          }
          return f;
        }
        case dg:
          e.flags = e.flags & -65537 | mt;
        case SC: {
          var v = a.payload, y;
          if (typeof v == "function") {
            hC(), y = v.call(s, i, u);
            {
              if (e.mode & it) {
                Qt(!0);
                try {
                  v.call(s, i, u);
                } finally {
                  Qt(!1);
                }
              }
              mC();
            }
          } else
            y = v;
          return y == null ? i : at({}, i, y);
        }
        case Wh:
          return qh = !0, i;
      }
      return i;
    }
    function Kh(e, t, a, i) {
      var u = e.updateQueue;
      qh = !1, Gh = u.shared;
      var s = u.firstBaseUpdate, f = u.lastBaseUpdate, p = u.shared.pending;
      if (p !== null) {
        u.shared.pending = null;
        var v = p, y = v.next;
        v.next = null, f === null ? s = y : f.next = y, f = v;
        var g = e.alternate;
        if (g !== null) {
          var k = g.updateQueue, _ = k.lastBaseUpdate;
          _ !== f && (_ === null ? k.firstBaseUpdate = y : _.next = y, k.lastBaseUpdate = v);
        }
      }
      if (s !== null) {
        var U = u.baseState, j = $, V = null, de = null, Ie = null, ze = s;
        do {
          var Dt = ze.lane, Rt = ze.eventTime;
          if (hu(i, Dt)) {
            if (Ie !== null) {
              var B = {
                eventTime: Rt,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Vn,
                tag: ze.tag,
                payload: ze.payload,
                callback: ze.callback,
                next: null
              };
              Ie = Ie.next = B;
            }
            U = F_(e, u, ze, U, t, a);
            var L = ze.callback;
            if (L !== null && // If the update was already committed, we should not queue its
            // callback again.
            ze.lane !== Vn) {
              e.flags |= rn;
              var J = u.effects;
              J === null ? u.effects = [ze] : J.push(ze);
            }
          } else {
            var O = {
              eventTime: Rt,
              lane: Dt,
              tag: ze.tag,
              payload: ze.payload,
              callback: ze.callback,
              next: null
            };
            Ie === null ? (de = Ie = O, V = U) : Ie = Ie.next = O, j = ot(j, Dt);
          }
          if (ze = ze.next, ze === null) {
            if (p = u.shared.pending, p === null)
              break;
            var Ee = p, ve = Ee.next;
            Ee.next = null, ze = ve, u.lastBaseUpdate = Ee, u.shared.pending = null;
          }
        } while (!0);
        Ie === null && (V = U), u.baseState = V, u.firstBaseUpdate = de, u.lastBaseUpdate = Ie;
        var Ke = u.shared.interleaved;
        if (Ke !== null) {
          var rt = Ke;
          do
            j = ot(j, rt.lane), rt = rt.next;
          while (rt !== Ke);
        } else s === null && (u.shared.lanes = $);
        Ip(j), e.lanes = j, e.memoizedState = U;
      }
      Gh = null;
    }
    function H_(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function RC() {
      qh = !1;
    }
    function Jh() {
      return qh;
    }
    function TC(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u], f = s.callback;
          f !== null && (s.callback = null, H_(f, a));
        }
    }
    var Sp = {}, Mo = ko(Sp), Ep = ko(Sp), Zh = ko(Sp);
    function em(e) {
      if (e === Sp)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function bC() {
      var e = em(Zh.current);
      return e;
    }
    function mg(e, t) {
      la(Zh, t, e), la(Ep, e, e), la(Mo, Sp, e);
      var a = nb(t);
      ia(Mo, e), la(Mo, a, e);
    }
    function zf(e) {
      ia(Mo, e), ia(Ep, e), ia(Zh, e);
    }
    function yg() {
      var e = em(Mo.current);
      return e;
    }
    function _C(e) {
      em(Zh.current);
      var t = em(Mo.current), a = rb(t, e.type);
      t !== a && (la(Ep, e, e), la(Mo, a, e));
    }
    function gg(e) {
      Ep.current === e && (ia(Mo, e), ia(Ep, e));
    }
    var P_ = 0, wC = 1, xC = 1, Cp = 2, el = ko(P_);
    function Sg(e, t) {
      return (e & t) !== 0;
    }
    function Uf(e) {
      return e & wC;
    }
    function Eg(e, t) {
      return e & wC | t;
    }
    function V_(e, t) {
      return e | t;
    }
    function zo(e, t) {
      la(el, t, e);
    }
    function Af(e) {
      ia(el, e);
    }
    function B_(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function tm(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === Oe) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || YE(i) || Fy(i))
              return t;
          }
        } else if (t.tag === Vt && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var u = (t.flags & mt) !== je;
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
    ), vr = (
      /* */
      1
    ), jl = (
      /*  */
      2
    ), hr = (
      /*    */
      4
    ), Fr = (
      /*   */
      8
    ), Cg = [];
    function Rg() {
      for (var e = 0; e < Cg.length; e++) {
        var t = Cg[e];
        t._workInProgressVersionPrimary = null;
      }
      Cg.length = 0;
    }
    function $_(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var ge = Se.ReactCurrentDispatcher, Rp = Se.ReactCurrentBatchConfig, Tg, jf;
    Tg = /* @__PURE__ */ new Set();
    var Ks = $, en = null, mr = null, yr = null, nm = !1, Tp = !1, bp = 0, Y_ = 0, I_ = 25, Y = null, xi = null, Uo = -1, bg = !1;
    function It() {
      {
        var e = Y;
        xi === null ? xi = [e] : xi.push(e);
      }
    }
    function le() {
      {
        var e = Y;
        xi !== null && (Uo++, xi[Uo] !== e && Q_(e));
      }
    }
    function Ff(e) {
      e != null && !ut(e) && S("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", Y, typeof e);
    }
    function Q_(e) {
      {
        var t = Ze(en);
        if (!Tg.has(t) && (Tg.add(t), xi !== null)) {
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
    function _g(e, t) {
      if (bg)
        return !1;
      if (t === null)
        return S("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", Y), !1;
      e.length !== t.length && S(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, Y, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!ke(e[a], t[a]))
          return !1;
      return !0;
    }
    function Hf(e, t, a, i, u, s) {
      Ks = s, en = t, xi = e !== null ? e._debugHookTypes : null, Uo = -1, bg = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = $, e !== null && e.memoizedState !== null ? ge.current = GC : xi !== null ? ge.current = qC : ge.current = WC;
      var f = a(i, u);
      if (Tp) {
        var p = 0;
        do {
          if (Tp = !1, bp = 0, p >= I_)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          p += 1, bg = !1, mr = null, yr = null, t.updateQueue = null, Uo = -1, ge.current = XC, f = a(i, u);
        } while (Tp);
      }
      ge.current = hm, t._debugHookTypes = xi;
      var v = mr !== null && mr.next !== null;
      if (Ks = $, en = null, mr = null, yr = null, Y = null, xi = null, Uo = -1, e !== null && (e.flags & Pn) !== (t.flags & Pn) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & yt) !== Fe && S("Internal React error: Expected static flag was missing. Please notify the React team."), nm = !1, v)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return f;
    }
    function Pf() {
      var e = bp !== 0;
      return bp = 0, e;
    }
    function kC(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & Zt) !== Fe ? t.flags &= -50333701 : t.flags &= -2053, e.lanes = xs(e.lanes, a);
    }
    function DC() {
      if (ge.current = hm, nm) {
        for (var e = en.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        nm = !1;
      }
      Ks = $, en = null, mr = null, yr = null, xi = null, Uo = -1, Y = null, BC = !1, Tp = !1, bp = 0;
    }
    function Fl() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return yr === null ? en.memoizedState = yr = e : yr = yr.next = e, yr;
    }
    function ki() {
      var e;
      if (mr === null) {
        var t = en.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = mr.next;
      var a;
      if (yr === null ? a = en.memoizedState : a = yr.next, a !== null)
        yr = a, a = yr.next, mr = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        mr = e;
        var i = {
          memoizedState: mr.memoizedState,
          baseState: mr.baseState,
          baseQueue: mr.baseQueue,
          queue: mr.queue,
          next: null
        };
        yr === null ? en.memoizedState = yr = i : yr = yr.next = i;
      }
      return yr;
    }
    function OC() {
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
        lanes: $,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: u
      };
      i.queue = s;
      var f = s.dispatch = X_.bind(null, en, s);
      return [i.memoizedState, f];
    }
    function kg(e, t, a) {
      var i = ki(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = mr, f = s.baseQueue, p = u.pending;
      if (p !== null) {
        if (f !== null) {
          var v = f.next, y = p.next;
          f.next = y, p.next = v;
        }
        s.baseQueue !== f && S("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = f = p, u.pending = null;
      }
      if (f !== null) {
        var g = f.next, k = s.baseState, _ = null, U = null, j = null, V = g;
        do {
          var de = V.lane;
          if (hu(Ks, de)) {
            if (j !== null) {
              var ze = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Vn,
                action: V.action,
                hasEagerState: V.hasEagerState,
                eagerState: V.eagerState,
                next: null
              };
              j = j.next = ze;
            }
            if (V.hasEagerState)
              k = V.eagerState;
            else {
              var Dt = V.action;
              k = e(k, Dt);
            }
          } else {
            var Ie = {
              lane: de,
              action: V.action,
              hasEagerState: V.hasEagerState,
              eagerState: V.eagerState,
              next: null
            };
            j === null ? (U = j = Ie, _ = k) : j = j.next = Ie, en.lanes = ot(en.lanes, de), Ip(de);
          }
          V = V.next;
        } while (V !== null && V !== g);
        j === null ? _ = k : j.next = U, ke(k, i.memoizedState) || Mp(), i.memoizedState = k, i.baseState = _, i.baseQueue = j, u.lastRenderedState = k;
      }
      var Rt = u.interleaved;
      if (Rt !== null) {
        var O = Rt;
        do {
          var B = O.lane;
          en.lanes = ot(en.lanes, B), Ip(B), O = O.next;
        } while (O !== Rt);
      } else f === null && (u.lanes = $);
      var L = u.dispatch;
      return [i.memoizedState, L];
    }
    function Dg(e, t, a) {
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
        ke(p, i.memoizedState) || Mp(), i.memoizedState = p, i.baseQueue === null && (i.baseState = p), u.lastRenderedState = p;
      }
      return [p, s];
    }
    function Rk(e, t, a) {
    }
    function Tk(e, t, a) {
    }
    function Og(e, t, a) {
      var i = en, u = Fl(), s, f = jr();
      if (f) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), jf || s !== a() && (S("The result of getServerSnapshot should be cached to avoid an infinite loop"), jf = !0);
      } else {
        if (s = t(), !jf) {
          var p = t();
          ke(s, p) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), jf = !0);
        }
        var v = zm();
        if (v === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        ws(v, Ks) || LC(i, t, s);
      }
      u.memoizedState = s;
      var y = {
        value: s,
        getSnapshot: t
      };
      return u.queue = y, um(MC.bind(null, i, y, e), [e]), i.flags |= ha, _p(vr | Fr, NC.bind(null, i, y, s, t), void 0, null), s;
    }
    function rm(e, t, a) {
      var i = en, u = ki(), s = t();
      if (!jf) {
        var f = t();
        ke(s, f) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), jf = !0);
      }
      var p = u.memoizedState, v = !ke(p, s);
      v && (u.memoizedState = s, Mp());
      var y = u.queue;
      if (xp(MC.bind(null, i, y, e), [e]), y.getSnapshot !== t || v || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      yr !== null && yr.memoizedState.tag & vr) {
        i.flags |= ha, _p(vr | Fr, NC.bind(null, i, y, s, t), void 0, null);
        var g = zm();
        if (g === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        ws(g, Ks) || LC(i, t, s);
      }
      return s;
    }
    function LC(e, t, a) {
      e.flags |= bc;
      var i = {
        getSnapshot: t,
        value: a
      }, u = en.updateQueue;
      if (u === null)
        u = OC(), en.updateQueue = u, u.stores = [i];
      else {
        var s = u.stores;
        s === null ? u.stores = [i] : s.push(i);
      }
    }
    function NC(e, t, a, i) {
      t.value = a, t.getSnapshot = i, zC(t) && UC(e);
    }
    function MC(e, t, a) {
      var i = function() {
        zC(t) && UC(e);
      };
      return a(i);
    }
    function zC(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !ke(a, i);
      } catch {
        return !0;
      }
    }
    function UC(e) {
      var t = Ba(e, qe);
      t !== null && Cr(t, e, qe, Wt);
    }
    function am(e) {
      var t = Fl();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: $,
        dispatch: null,
        lastRenderedReducer: wg,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = K_.bind(null, en, a);
      return [t.memoizedState, i];
    }
    function Lg(e) {
      return kg(wg);
    }
    function Ng(e) {
      return Dg(wg);
    }
    function _p(e, t, a, i) {
      var u = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, s = en.updateQueue;
      if (s === null)
        s = OC(), en.updateQueue = s, s.lastEffect = u.next = u;
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
    function Mg(e) {
      var t = Fl();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function im(e) {
      var t = ki();
      return t.memoizedState;
    }
    function wp(e, t, a, i) {
      var u = Fl(), s = i === void 0 ? null : i;
      en.flags |= e, u.memoizedState = _p(vr | t, a, void 0, s);
    }
    function lm(e, t, a, i) {
      var u = ki(), s = i === void 0 ? null : i, f = void 0;
      if (mr !== null) {
        var p = mr.memoizedState;
        if (f = p.destroy, s !== null) {
          var v = p.deps;
          if (_g(s, v)) {
            u.memoizedState = _p(t, a, f, s);
            return;
          }
        }
      }
      en.flags |= e, u.memoizedState = _p(vr | t, a, f, s);
    }
    function um(e, t) {
      return (en.mode & Zt) !== Fe ? wp(gl | ha | dd, Fr, e, t) : wp(ha | dd, Fr, e, t);
    }
    function xp(e, t) {
      return lm(ha, Fr, e, t);
    }
    function zg(e, t) {
      return wp(Et, jl, e, t);
    }
    function om(e, t) {
      return lm(Et, jl, e, t);
    }
    function Ug(e, t) {
      var a = Et;
      return a |= yl, (en.mode & Zt) !== Fe && (a |= Mr), wp(a, hr, e, t);
    }
    function sm(e, t) {
      return lm(Et, hr, e, t);
    }
    function AC(e, t) {
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
    function Ag(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, u = Et;
      return u |= yl, (en.mode & Zt) !== Fe && (u |= Mr), wp(u, hr, AC.bind(null, t, e), i);
    }
    function cm(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return lm(Et, hr, AC.bind(null, t, e), i);
    }
    function W_(e, t) {
    }
    var fm = W_;
    function jg(e, t) {
      var a = Fl(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function dm(e, t) {
      var a = ki(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (_g(i, s))
          return u[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function Fg(e, t) {
      var a = Fl(), i = t === void 0 ? null : t, u = e();
      return a.memoizedState = [u, i], u;
    }
    function pm(e, t) {
      var a = ki(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (_g(i, s))
          return u[0];
      }
      var f = e();
      return a.memoizedState = [f, i], f;
    }
    function Hg(e) {
      var t = Fl();
      return t.memoizedState = e, e;
    }
    function jC(e) {
      var t = ki(), a = mr, i = a.memoizedState;
      return HC(t, i, e);
    }
    function FC(e) {
      var t = ki();
      if (mr === null)
        return t.memoizedState = e, e;
      var a = mr.memoizedState;
      return HC(t, a, e);
    }
    function HC(e, t, a) {
      var i = !Ld(Ks);
      if (i) {
        if (!ke(a, t)) {
          var u = Md();
          en.lanes = ot(en.lanes, u), Ip(u), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, Mp()), e.memoizedState = a, a;
    }
    function q_(e, t, a) {
      var i = ga();
      qn(Ds(i, ja)), e(!0);
      var u = Rp.transition;
      Rp.transition = {};
      var s = Rp.transition;
      Rp.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (qn(i), Rp.transition = u, u === null && s._updatedFibers) {
          var f = s._updatedFibers.size;
          f > 10 && Me("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function Pg() {
      var e = am(!1), t = e[0], a = e[1], i = q_.bind(null, a), u = Fl();
      return u.memoizedState = i, [t, i];
    }
    function PC() {
      var e = Lg(), t = e[0], a = ki(), i = a.memoizedState;
      return [t, i];
    }
    function VC() {
      var e = Ng(), t = e[0], a = ki(), i = a.memoizedState;
      return [t, i];
    }
    var BC = !1;
    function G_() {
      return BC;
    }
    function Vg() {
      var e = Fl(), t = zm(), a = t.identifierPrefix, i;
      if (jr()) {
        var u = d_();
        i = ":" + a + "R" + u;
        var s = bp++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var f = Y_++;
        i = ":" + a + "r" + f.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function vm() {
      var e = ki(), t = e.memoizedState;
      return t;
    }
    function X_(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Po(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if ($C(e))
        YC(t, u);
      else {
        var s = gC(e, t, u, i);
        if (s !== null) {
          var f = ba();
          Cr(s, e, i, f), IC(s, t, i);
        }
      }
      QC(e, i);
    }
    function K_(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Po(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if ($C(e))
        YC(t, u);
      else {
        var s = e.alternate;
        if (e.lanes === $ && (s === null || s.lanes === $)) {
          var f = t.lastRenderedReducer;
          if (f !== null) {
            var p;
            p = ge.current, ge.current = tl;
            try {
              var v = t.lastRenderedState, y = f(v, a);
              if (u.hasEagerState = !0, u.eagerState = y, ke(y, v)) {
                U_(e, t, u, i);
                return;
              }
            } catch {
            } finally {
              ge.current = p;
            }
          }
        }
        var g = gC(e, t, u, i);
        if (g !== null) {
          var k = ba();
          Cr(g, e, i, k), IC(g, t, i);
        }
      }
      QC(e, i);
    }
    function $C(e) {
      var t = e.alternate;
      return e === en || t !== null && t === en;
    }
    function YC(e, t) {
      Tp = nm = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function IC(e, t, a) {
      if (Nd(a)) {
        var i = t.lanes;
        i = Xc(i, e.pendingLanes);
        var u = ot(i, a);
        t.lanes = u, ks(e, u);
      }
    }
    function QC(e, t, a) {
      gs(e, t);
    }
    var hm = {
      readContext: lr,
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
      unstable_isNewReconciler: Ce
    }, WC = null, qC = null, GC = null, XC = null, Hl = null, tl = null, mm = null;
    {
      var Bg = function() {
        S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, tt = function() {
        S("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      WC = {
        readContext: function(e) {
          return lr(e);
        },
        useCallback: function(e, t) {
          return Y = "useCallback", It(), Ff(t), jg(e, t);
        },
        useContext: function(e) {
          return Y = "useContext", It(), lr(e);
        },
        useEffect: function(e, t) {
          return Y = "useEffect", It(), Ff(t), um(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return Y = "useImperativeHandle", It(), Ff(a), Ag(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return Y = "useInsertionEffect", It(), Ff(t), zg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return Y = "useLayoutEffect", It(), Ff(t), Ug(e, t);
        },
        useMemo: function(e, t) {
          Y = "useMemo", It(), Ff(t);
          var a = ge.current;
          ge.current = Hl;
          try {
            return Fg(e, t);
          } finally {
            ge.current = a;
          }
        },
        useReducer: function(e, t, a) {
          Y = "useReducer", It();
          var i = ge.current;
          ge.current = Hl;
          try {
            return xg(e, t, a);
          } finally {
            ge.current = i;
          }
        },
        useRef: function(e) {
          return Y = "useRef", It(), Mg(e);
        },
        useState: function(e) {
          Y = "useState", It();
          var t = ge.current;
          ge.current = Hl;
          try {
            return am(e);
          } finally {
            ge.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return Y = "useDebugValue", It(), void 0;
        },
        useDeferredValue: function(e) {
          return Y = "useDeferredValue", It(), Hg(e);
        },
        useTransition: function() {
          return Y = "useTransition", It(), Pg();
        },
        useMutableSource: function(e, t, a) {
          return Y = "useMutableSource", It(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return Y = "useSyncExternalStore", It(), Og(e, t, a);
        },
        useId: function() {
          return Y = "useId", It(), Vg();
        },
        unstable_isNewReconciler: Ce
      }, qC = {
        readContext: function(e) {
          return lr(e);
        },
        useCallback: function(e, t) {
          return Y = "useCallback", le(), jg(e, t);
        },
        useContext: function(e) {
          return Y = "useContext", le(), lr(e);
        },
        useEffect: function(e, t) {
          return Y = "useEffect", le(), um(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return Y = "useImperativeHandle", le(), Ag(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return Y = "useInsertionEffect", le(), zg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return Y = "useLayoutEffect", le(), Ug(e, t);
        },
        useMemo: function(e, t) {
          Y = "useMemo", le();
          var a = ge.current;
          ge.current = Hl;
          try {
            return Fg(e, t);
          } finally {
            ge.current = a;
          }
        },
        useReducer: function(e, t, a) {
          Y = "useReducer", le();
          var i = ge.current;
          ge.current = Hl;
          try {
            return xg(e, t, a);
          } finally {
            ge.current = i;
          }
        },
        useRef: function(e) {
          return Y = "useRef", le(), Mg(e);
        },
        useState: function(e) {
          Y = "useState", le();
          var t = ge.current;
          ge.current = Hl;
          try {
            return am(e);
          } finally {
            ge.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return Y = "useDebugValue", le(), void 0;
        },
        useDeferredValue: function(e) {
          return Y = "useDeferredValue", le(), Hg(e);
        },
        useTransition: function() {
          return Y = "useTransition", le(), Pg();
        },
        useMutableSource: function(e, t, a) {
          return Y = "useMutableSource", le(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return Y = "useSyncExternalStore", le(), Og(e, t, a);
        },
        useId: function() {
          return Y = "useId", le(), Vg();
        },
        unstable_isNewReconciler: Ce
      }, GC = {
        readContext: function(e) {
          return lr(e);
        },
        useCallback: function(e, t) {
          return Y = "useCallback", le(), dm(e, t);
        },
        useContext: function(e) {
          return Y = "useContext", le(), lr(e);
        },
        useEffect: function(e, t) {
          return Y = "useEffect", le(), xp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return Y = "useImperativeHandle", le(), cm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return Y = "useInsertionEffect", le(), om(e, t);
        },
        useLayoutEffect: function(e, t) {
          return Y = "useLayoutEffect", le(), sm(e, t);
        },
        useMemo: function(e, t) {
          Y = "useMemo", le();
          var a = ge.current;
          ge.current = tl;
          try {
            return pm(e, t);
          } finally {
            ge.current = a;
          }
        },
        useReducer: function(e, t, a) {
          Y = "useReducer", le();
          var i = ge.current;
          ge.current = tl;
          try {
            return kg(e, t, a);
          } finally {
            ge.current = i;
          }
        },
        useRef: function(e) {
          return Y = "useRef", le(), im();
        },
        useState: function(e) {
          Y = "useState", le();
          var t = ge.current;
          ge.current = tl;
          try {
            return Lg(e);
          } finally {
            ge.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return Y = "useDebugValue", le(), fm();
        },
        useDeferredValue: function(e) {
          return Y = "useDeferredValue", le(), jC(e);
        },
        useTransition: function() {
          return Y = "useTransition", le(), PC();
        },
        useMutableSource: function(e, t, a) {
          return Y = "useMutableSource", le(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return Y = "useSyncExternalStore", le(), rm(e, t);
        },
        useId: function() {
          return Y = "useId", le(), vm();
        },
        unstable_isNewReconciler: Ce
      }, XC = {
        readContext: function(e) {
          return lr(e);
        },
        useCallback: function(e, t) {
          return Y = "useCallback", le(), dm(e, t);
        },
        useContext: function(e) {
          return Y = "useContext", le(), lr(e);
        },
        useEffect: function(e, t) {
          return Y = "useEffect", le(), xp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return Y = "useImperativeHandle", le(), cm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return Y = "useInsertionEffect", le(), om(e, t);
        },
        useLayoutEffect: function(e, t) {
          return Y = "useLayoutEffect", le(), sm(e, t);
        },
        useMemo: function(e, t) {
          Y = "useMemo", le();
          var a = ge.current;
          ge.current = mm;
          try {
            return pm(e, t);
          } finally {
            ge.current = a;
          }
        },
        useReducer: function(e, t, a) {
          Y = "useReducer", le();
          var i = ge.current;
          ge.current = mm;
          try {
            return Dg(e, t, a);
          } finally {
            ge.current = i;
          }
        },
        useRef: function(e) {
          return Y = "useRef", le(), im();
        },
        useState: function(e) {
          Y = "useState", le();
          var t = ge.current;
          ge.current = mm;
          try {
            return Ng(e);
          } finally {
            ge.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return Y = "useDebugValue", le(), fm();
        },
        useDeferredValue: function(e) {
          return Y = "useDeferredValue", le(), FC(e);
        },
        useTransition: function() {
          return Y = "useTransition", le(), VC();
        },
        useMutableSource: function(e, t, a) {
          return Y = "useMutableSource", le(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return Y = "useSyncExternalStore", le(), rm(e, t);
        },
        useId: function() {
          return Y = "useId", le(), vm();
        },
        unstable_isNewReconciler: Ce
      }, Hl = {
        readContext: function(e) {
          return Bg(), lr(e);
        },
        useCallback: function(e, t) {
          return Y = "useCallback", tt(), It(), jg(e, t);
        },
        useContext: function(e) {
          return Y = "useContext", tt(), It(), lr(e);
        },
        useEffect: function(e, t) {
          return Y = "useEffect", tt(), It(), um(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return Y = "useImperativeHandle", tt(), It(), Ag(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return Y = "useInsertionEffect", tt(), It(), zg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return Y = "useLayoutEffect", tt(), It(), Ug(e, t);
        },
        useMemo: function(e, t) {
          Y = "useMemo", tt(), It();
          var a = ge.current;
          ge.current = Hl;
          try {
            return Fg(e, t);
          } finally {
            ge.current = a;
          }
        },
        useReducer: function(e, t, a) {
          Y = "useReducer", tt(), It();
          var i = ge.current;
          ge.current = Hl;
          try {
            return xg(e, t, a);
          } finally {
            ge.current = i;
          }
        },
        useRef: function(e) {
          return Y = "useRef", tt(), It(), Mg(e);
        },
        useState: function(e) {
          Y = "useState", tt(), It();
          var t = ge.current;
          ge.current = Hl;
          try {
            return am(e);
          } finally {
            ge.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return Y = "useDebugValue", tt(), It(), void 0;
        },
        useDeferredValue: function(e) {
          return Y = "useDeferredValue", tt(), It(), Hg(e);
        },
        useTransition: function() {
          return Y = "useTransition", tt(), It(), Pg();
        },
        useMutableSource: function(e, t, a) {
          return Y = "useMutableSource", tt(), It(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return Y = "useSyncExternalStore", tt(), It(), Og(e, t, a);
        },
        useId: function() {
          return Y = "useId", tt(), It(), Vg();
        },
        unstable_isNewReconciler: Ce
      }, tl = {
        readContext: function(e) {
          return Bg(), lr(e);
        },
        useCallback: function(e, t) {
          return Y = "useCallback", tt(), le(), dm(e, t);
        },
        useContext: function(e) {
          return Y = "useContext", tt(), le(), lr(e);
        },
        useEffect: function(e, t) {
          return Y = "useEffect", tt(), le(), xp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return Y = "useImperativeHandle", tt(), le(), cm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return Y = "useInsertionEffect", tt(), le(), om(e, t);
        },
        useLayoutEffect: function(e, t) {
          return Y = "useLayoutEffect", tt(), le(), sm(e, t);
        },
        useMemo: function(e, t) {
          Y = "useMemo", tt(), le();
          var a = ge.current;
          ge.current = tl;
          try {
            return pm(e, t);
          } finally {
            ge.current = a;
          }
        },
        useReducer: function(e, t, a) {
          Y = "useReducer", tt(), le();
          var i = ge.current;
          ge.current = tl;
          try {
            return kg(e, t, a);
          } finally {
            ge.current = i;
          }
        },
        useRef: function(e) {
          return Y = "useRef", tt(), le(), im();
        },
        useState: function(e) {
          Y = "useState", tt(), le();
          var t = ge.current;
          ge.current = tl;
          try {
            return Lg(e);
          } finally {
            ge.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return Y = "useDebugValue", tt(), le(), fm();
        },
        useDeferredValue: function(e) {
          return Y = "useDeferredValue", tt(), le(), jC(e);
        },
        useTransition: function() {
          return Y = "useTransition", tt(), le(), PC();
        },
        useMutableSource: function(e, t, a) {
          return Y = "useMutableSource", tt(), le(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return Y = "useSyncExternalStore", tt(), le(), rm(e, t);
        },
        useId: function() {
          return Y = "useId", tt(), le(), vm();
        },
        unstable_isNewReconciler: Ce
      }, mm = {
        readContext: function(e) {
          return Bg(), lr(e);
        },
        useCallback: function(e, t) {
          return Y = "useCallback", tt(), le(), dm(e, t);
        },
        useContext: function(e) {
          return Y = "useContext", tt(), le(), lr(e);
        },
        useEffect: function(e, t) {
          return Y = "useEffect", tt(), le(), xp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return Y = "useImperativeHandle", tt(), le(), cm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return Y = "useInsertionEffect", tt(), le(), om(e, t);
        },
        useLayoutEffect: function(e, t) {
          return Y = "useLayoutEffect", tt(), le(), sm(e, t);
        },
        useMemo: function(e, t) {
          Y = "useMemo", tt(), le();
          var a = ge.current;
          ge.current = tl;
          try {
            return pm(e, t);
          } finally {
            ge.current = a;
          }
        },
        useReducer: function(e, t, a) {
          Y = "useReducer", tt(), le();
          var i = ge.current;
          ge.current = tl;
          try {
            return Dg(e, t, a);
          } finally {
            ge.current = i;
          }
        },
        useRef: function(e) {
          return Y = "useRef", tt(), le(), im();
        },
        useState: function(e) {
          Y = "useState", tt(), le();
          var t = ge.current;
          ge.current = tl;
          try {
            return Ng(e);
          } finally {
            ge.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return Y = "useDebugValue", tt(), le(), fm();
        },
        useDeferredValue: function(e) {
          return Y = "useDeferredValue", tt(), le(), FC(e);
        },
        useTransition: function() {
          return Y = "useTransition", tt(), le(), VC();
        },
        useMutableSource: function(e, t, a) {
          return Y = "useMutableSource", tt(), le(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return Y = "useSyncExternalStore", tt(), le(), rm(e, t);
        },
        useId: function() {
          return Y = "useId", tt(), le(), vm();
        },
        unstable_isNewReconciler: Ce
      };
    }
    var Ao = w.unstable_now, KC = 0, ym = -1, kp = -1, gm = -1, $g = !1, Sm = !1;
    function JC() {
      return $g;
    }
    function J_() {
      Sm = !0;
    }
    function Z_() {
      $g = !1, Sm = !1;
    }
    function ew() {
      $g = Sm, Sm = !1;
    }
    function ZC() {
      return KC;
    }
    function e0() {
      KC = Ao();
    }
    function Yg(e) {
      kp = Ao(), e.actualStartTime < 0 && (e.actualStartTime = Ao());
    }
    function t0(e) {
      kp = -1;
    }
    function Em(e, t) {
      if (kp >= 0) {
        var a = Ao() - kp;
        e.actualDuration += a, t && (e.selfBaseDuration = a), kp = -1;
      }
    }
    function Pl(e) {
      if (ym >= 0) {
        var t = Ao() - ym;
        ym = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case F:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case Ot:
              var u = a.stateNode;
              u.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function Ig(e) {
      if (gm >= 0) {
        var t = Ao() - gm;
        gm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case F:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case Ot:
              var u = a.stateNode;
              u !== null && (u.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function Vl() {
      ym = Ao();
    }
    function Qg() {
      gm = Ao();
    }
    function Wg(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function nl(e, t) {
      if (e && e.defaultProps) {
        var a = at({}, t), i = e.defaultProps;
        for (var u in i)
          a[u] === void 0 && (a[u] = i[u]);
        return a;
      }
      return t;
    }
    var qg = {}, Gg, Xg, Kg, Jg, Zg, n0, Cm, eS, tS, nS, Dp;
    {
      Gg = /* @__PURE__ */ new Set(), Xg = /* @__PURE__ */ new Set(), Kg = /* @__PURE__ */ new Set(), Jg = /* @__PURE__ */ new Set(), eS = /* @__PURE__ */ new Set(), Zg = /* @__PURE__ */ new Set(), tS = /* @__PURE__ */ new Set(), nS = /* @__PURE__ */ new Set(), Dp = /* @__PURE__ */ new Set();
      var r0 = /* @__PURE__ */ new Set();
      Cm = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          r0.has(a) || (r0.add(a), S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, n0 = function(e, t) {
        if (t === void 0) {
          var a = xt(e) || "Component";
          Zg.has(a) || (Zg.add(a), S("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(qg, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(qg);
    }
    function rS(e, t, a, i) {
      var u = e.memoizedState, s = a(i, u);
      {
        if (e.mode & it) {
          Qt(!0);
          try {
            s = a(i, u);
          } finally {
            Qt(!1);
          }
        }
        n0(t, s);
      }
      var f = s == null ? u : at({}, u, s);
      if (e.memoizedState = f, e.lanes === $) {
        var p = e.updateQueue;
        p.baseState = f;
      }
    }
    var aS = {
      isMounted: pd,
      enqueueSetState: function(e, t, a) {
        var i = ro(e), u = ba(), s = Po(i), f = Lu(u, s);
        f.payload = t, a != null && (Cm(a, "setState"), f.callback = a);
        var p = No(i, f, s);
        p !== null && (Cr(p, i, s, u), Xh(p, i, s)), gs(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = ro(e), u = ba(), s = Po(i), f = Lu(u, s);
        f.tag = EC, f.payload = t, a != null && (Cm(a, "replaceState"), f.callback = a);
        var p = No(i, f, s);
        p !== null && (Cr(p, i, s, u), Xh(p, i, s)), gs(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = ro(e), i = ba(), u = Po(a), s = Lu(i, u);
        s.tag = Wh, t != null && (Cm(t, "forceUpdate"), s.callback = t);
        var f = No(a, s, u);
        f !== null && (Cr(f, a, u, i), Xh(f, a, u)), xd(a, u);
      }
    };
    function a0(e, t, a, i, u, s, f) {
      var p = e.stateNode;
      if (typeof p.shouldComponentUpdate == "function") {
        var v = p.shouldComponentUpdate(i, s, f);
        {
          if (e.mode & it) {
            Qt(!0);
            try {
              v = p.shouldComponentUpdate(i, s, f);
            } finally {
              Qt(!1);
            }
          }
          v === void 0 && S("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", xt(t) || "Component");
        }
        return v;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !He(a, i) || !He(u, s) : !0;
    }
    function tw(e, t, a) {
      var i = e.stateNode;
      {
        var u = xt(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? S("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", u) : S("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", u)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && S("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", u), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && S("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", u), i.propTypes && S("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", u), i.contextType && S("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", u), t.childContextTypes && !Dp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & it) === Fe && (Dp.add(t), S(`%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), t.contextTypes && !Dp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & it) === Fe && (Dp.add(t), S(`%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), i.contextTypes && S("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", u), t.contextType && t.contextTypes && !tS.has(t) && (tS.add(t), S("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", u)), typeof i.componentShouldUpdate == "function" && S("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", u), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && S("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", xt(t) || "A pure component"), typeof i.componentDidUnmount == "function" && S("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", u), typeof i.componentDidReceiveProps == "function" && S("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", u), typeof i.componentWillRecieveProps == "function" && S("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", u), typeof i.UNSAFE_componentWillRecieveProps == "function" && S("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", u);
        var f = i.props !== a;
        i.props !== void 0 && f && S("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", u, u), i.defaultProps && S("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", u, u), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !Kg.has(t) && (Kg.add(t), S("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", xt(t))), typeof i.getDerivedStateFromProps == "function" && S("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof i.getDerivedStateFromError == "function" && S("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof t.getSnapshotBeforeUpdate == "function" && S("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", u);
        var p = i.state;
        p && (typeof p != "object" || ut(p)) && S("%s.state: must be set to an object or null", u), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && S("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", u);
      }
    }
    function i0(e, t) {
      t.updater = aS, e.stateNode = t, fs(t, e), t._reactInternalInstance = qg;
    }
    function l0(e, t, a) {
      var i = !1, u = li, s = li, f = t.contextType;
      if ("contextType" in t) {
        var p = (
          // Allow null for conditional declaration
          f === null || f !== void 0 && f.$$typeof === T && f._context === void 0
        );
        if (!p && !nS.has(t)) {
          nS.add(t);
          var v = "";
          f === void 0 ? v = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? v = " However, it is set to a " + typeof f + "." : f.$$typeof === zi ? v = " Did you accidentally pass the Context.Provider instead?" : f._context !== void 0 ? v = " Did you accidentally pass the Context.Consumer instead?" : v = " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", S("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", xt(t) || "Component", v);
        }
      }
      if (typeof f == "object" && f !== null)
        s = lr(f);
      else {
        u = wf(e, t, !0);
        var y = t.contextTypes;
        i = y != null, s = i ? xf(e, u) : li;
      }
      var g = new t(a, s);
      if (e.mode & it) {
        Qt(!0);
        try {
          g = new t(a, s);
        } finally {
          Qt(!1);
        }
      }
      var k = e.memoizedState = g.state !== null && g.state !== void 0 ? g.state : null;
      i0(e, g);
      {
        if (typeof t.getDerivedStateFromProps == "function" && k === null) {
          var _ = xt(t) || "Component";
          Xg.has(_) || (Xg.add(_), S("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", _, g.state === null ? "null" : "undefined", _));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof g.getSnapshotBeforeUpdate == "function") {
          var U = null, j = null, V = null;
          if (typeof g.componentWillMount == "function" && g.componentWillMount.__suppressDeprecationWarning !== !0 ? U = "componentWillMount" : typeof g.UNSAFE_componentWillMount == "function" && (U = "UNSAFE_componentWillMount"), typeof g.componentWillReceiveProps == "function" && g.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? j = "componentWillReceiveProps" : typeof g.UNSAFE_componentWillReceiveProps == "function" && (j = "UNSAFE_componentWillReceiveProps"), typeof g.componentWillUpdate == "function" && g.componentWillUpdate.__suppressDeprecationWarning !== !0 ? V = "componentWillUpdate" : typeof g.UNSAFE_componentWillUpdate == "function" && (V = "UNSAFE_componentWillUpdate"), U !== null || j !== null || V !== null) {
            var de = xt(t) || "Component", Ie = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            Jg.has(de) || (Jg.add(de), S(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, de, Ie, U !== null ? `
  ` + U : "", j !== null ? `
  ` + j : "", V !== null ? `
  ` + V : ""));
          }
        }
      }
      return i && GE(e, u, s), g;
    }
    function nw(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (S("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", Ze(e) || "Component"), aS.enqueueReplaceState(t, t.state, null));
    }
    function u0(e, t, a, i) {
      var u = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== u) {
        {
          var s = Ze(e) || "Component";
          Gg.has(s) || (Gg.add(s), S("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        aS.enqueueReplaceState(t, t.state, null);
      }
    }
    function iS(e, t, a, i) {
      tw(e, t, a);
      var u = e.stateNode;
      u.props = a, u.state = e.memoizedState, u.refs = {}, vg(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        u.context = lr(s);
      else {
        var f = wf(e, t, !0);
        u.context = xf(e, f);
      }
      {
        if (u.state === a) {
          var p = xt(t) || "Component";
          eS.has(p) || (eS.add(p), S("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", p));
        }
        e.mode & it && Zi.recordLegacyContextWarning(e, u), Zi.recordUnsafeLifecycleWarnings(e, u);
      }
      u.state = e.memoizedState;
      var v = t.getDerivedStateFromProps;
      if (typeof v == "function" && (rS(e, t, v, a), u.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof u.getSnapshotBeforeUpdate != "function" && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (nw(e, u), Kh(e, a, u, i), u.state = e.memoizedState), typeof u.componentDidMount == "function") {
        var y = Et;
        y |= yl, (e.mode & Zt) !== Fe && (y |= Mr), e.flags |= y;
      }
    }
    function rw(e, t, a, i) {
      var u = e.stateNode, s = e.memoizedProps;
      u.props = s;
      var f = u.context, p = t.contextType, v = li;
      if (typeof p == "object" && p !== null)
        v = lr(p);
      else {
        var y = wf(e, t, !0);
        v = xf(e, y);
      }
      var g = t.getDerivedStateFromProps, k = typeof g == "function" || typeof u.getSnapshotBeforeUpdate == "function";
      !k && (typeof u.UNSAFE_componentWillReceiveProps == "function" || typeof u.componentWillReceiveProps == "function") && (s !== a || f !== v) && u0(e, u, a, v), RC();
      var _ = e.memoizedState, U = u.state = _;
      if (Kh(e, a, u, i), U = e.memoizedState, s === a && _ === U && !Nh() && !Jh()) {
        if (typeof u.componentDidMount == "function") {
          var j = Et;
          j |= yl, (e.mode & Zt) !== Fe && (j |= Mr), e.flags |= j;
        }
        return !1;
      }
      typeof g == "function" && (rS(e, t, g, a), U = e.memoizedState);
      var V = Jh() || a0(e, t, s, a, _, U, v);
      if (V) {
        if (!k && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function") {
          var de = Et;
          de |= yl, (e.mode & Zt) !== Fe && (de |= Mr), e.flags |= de;
        }
      } else {
        if (typeof u.componentDidMount == "function") {
          var Ie = Et;
          Ie |= yl, (e.mode & Zt) !== Fe && (Ie |= Mr), e.flags |= Ie;
        }
        e.memoizedProps = a, e.memoizedState = U;
      }
      return u.props = a, u.state = U, u.context = v, V;
    }
    function aw(e, t, a, i, u) {
      var s = t.stateNode;
      CC(e, t);
      var f = t.memoizedProps, p = t.type === t.elementType ? f : nl(t.type, f);
      s.props = p;
      var v = t.pendingProps, y = s.context, g = a.contextType, k = li;
      if (typeof g == "object" && g !== null)
        k = lr(g);
      else {
        var _ = wf(t, a, !0);
        k = xf(t, _);
      }
      var U = a.getDerivedStateFromProps, j = typeof U == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !j && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (f !== v || y !== k) && u0(t, s, i, k), RC();
      var V = t.memoizedState, de = s.state = V;
      if (Kh(t, i, s, u), de = t.memoizedState, f === v && V === de && !Nh() && !Jh())
        return typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || V !== e.memoizedState) && (t.flags |= Et), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || V !== e.memoizedState) && (t.flags |= za), !1;
      typeof U == "function" && (rS(t, a, U, i), de = t.memoizedState);
      var Ie = Jh() || a0(t, a, p, i, V, de, k) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      oe;
      return Ie ? (!j && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, de, k), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, de, k)), typeof s.componentDidUpdate == "function" && (t.flags |= Et), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= za)) : (typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || V !== e.memoizedState) && (t.flags |= Et), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || V !== e.memoizedState) && (t.flags |= za), t.memoizedProps = i, t.memoizedState = de), s.props = i, s.state = de, s.context = k, Ie;
    }
    function Js(e, t) {
      return {
        value: e,
        source: t,
        stack: wt(t),
        digest: null
      };
    }
    function lS(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function iw(e, t) {
      return !0;
    }
    function uS(e, t) {
      try {
        var a = iw(e, t);
        if (a === !1)
          return;
        var i = t.value, u = t.source, s = t.stack, f = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === Z)
            return;
          console.error(i);
        }
        var p = u ? Ze(u) : null, v = p ? "The above error occurred in the <" + p + "> component:" : "The above error occurred in one of your React components:", y;
        if (e.tag === F)
          y = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var g = Ze(e) || "Anonymous";
          y = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + g + ".");
        }
        var k = v + `
` + f + `

` + ("" + y);
        console.error(k);
      } catch (_) {
        setTimeout(function() {
          throw _;
        });
      }
    }
    var lw = typeof WeakMap == "function" ? WeakMap : Map;
    function o0(e, t, a) {
      var i = Lu(Wt, a);
      i.tag = dg, i.payload = {
        element: null
      };
      var u = t.value;
      return i.callback = function() {
        J1(u), uS(e, t);
      }, i;
    }
    function oS(e, t, a) {
      var i = Lu(Wt, a);
      i.tag = dg;
      var u = e.type.getDerivedStateFromError;
      if (typeof u == "function") {
        var s = t.value;
        i.payload = function() {
          return u(s);
        }, i.callback = function() {
          SR(e), uS(e, t);
        };
      }
      var f = e.stateNode;
      return f !== null && typeof f.componentDidCatch == "function" && (i.callback = function() {
        SR(e), uS(e, t), typeof u != "function" && X1(this);
        var v = t.value, y = t.stack;
        this.componentDidCatch(v, {
          componentStack: y !== null ? y : ""
        }), typeof u != "function" && (na(e.lanes, qe) || S("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", Ze(e) || "Unknown"));
      }), i;
    }
    function s0(e, t, a) {
      var i = e.pingCache, u;
      if (i === null ? (i = e.pingCache = new lw(), u = /* @__PURE__ */ new Set(), i.set(t, u)) : (u = i.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), i.set(t, u))), !u.has(a)) {
        u.add(a);
        var s = Z1.bind(null, e, t, a);
        wr && Qp(e, a), t.then(s, s);
      }
    }
    function uw(e, t, a, i) {
      var u = e.updateQueue;
      if (u === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        u.add(a);
    }
    function ow(e, t) {
      var a = e.tag;
      if ((e.mode & yt) === Fe && (a === he || a === Qe || a === $e)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function c0(e) {
      var t = e;
      do {
        if (t.tag === Oe && B_(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function f0(e, t, a, i, u) {
      if ((e.mode & yt) === Fe) {
        if (e === t)
          e.flags |= Ua;
        else {
          if (e.flags |= mt, a.flags |= ti, a.flags &= -52805, a.tag === Z) {
            var s = a.alternate;
            if (s === null)
              a.tag = Lt;
            else {
              var f = Lu(Wt, qe);
              f.tag = Wh, No(a, f, qe);
            }
          }
          a.lanes = ot(a.lanes, qe);
        }
        return e;
      }
      return e.flags |= Ua, e.lanes = u, e;
    }
    function sw(e, t, a, i, u) {
      if (a.flags |= lu, wr && Qp(e, u), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        ow(a), jr() && a.mode & yt && nC();
        var f = c0(t);
        if (f !== null) {
          f.flags &= -257, f0(f, t, a, e, u), f.mode & yt && s0(e, s, u), uw(f, e, s);
          return;
        } else {
          if (!Od(u)) {
            s0(e, s, u), VS();
            return;
          }
          var p = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = p;
        }
      } else if (jr() && a.mode & yt) {
        nC();
        var v = c0(t);
        if (v !== null) {
          (v.flags & Ua) === je && (v.flags |= _n), f0(v, t, a, e, u), eg(Js(i, a));
          return;
        }
      }
      i = Js(i, a), B1(i);
      var y = t;
      do {
        switch (y.tag) {
          case F: {
            var g = i;
            y.flags |= Ua;
            var k = rr(u);
            y.lanes = ot(y.lanes, k);
            var _ = o0(y, g, k);
            hg(y, _);
            return;
          }
          case Z:
            var U = i, j = y.type, V = y.stateNode;
            if ((y.flags & mt) === je && (typeof j.getDerivedStateFromError == "function" || V !== null && typeof V.componentDidCatch == "function" && !cR(V))) {
              y.flags |= Ua;
              var de = rr(u);
              y.lanes = ot(y.lanes, de);
              var Ie = oS(y, U, de);
              hg(y, Ie);
              return;
            }
            break;
        }
        y = y.return;
      } while (y !== null);
    }
    function cw() {
      return null;
    }
    var Op = Se.ReactCurrentOwner, rl = !1, sS, Lp, cS, fS, dS, Zs, pS, Rm, Np;
    sS = {}, Lp = {}, cS = {}, fS = {}, dS = {}, Zs = !1, pS = {}, Rm = {}, Np = {};
    function Ra(e, t, a, i) {
      e === null ? t.child = vC(t, null, a, i) : t.child = Lf(t, e.child, a, i);
    }
    function fw(e, t, a, i) {
      t.child = Lf(t, e.child, null, i), t.child = Lf(t, null, a, i);
    }
    function d0(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && Ki(
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
        if (Op.current = t, Da(!0), v = Hf(e, t, f, i, p, u), y = Pf(), t.mode & it) {
          Qt(!0);
          try {
            v = Hf(e, t, f, i, p, u), y = Pf();
          } finally {
            Qt(!1);
          }
        }
        Da(!1);
      }
      return Rl(), e !== null && !rl ? (kC(e, t, u), Nu(e, t, u)) : (jr() && y && qy(t), t.flags |= Ii, Ra(e, t, v, u), t.child);
    }
    function p0(e, t, a, i, u) {
      if (e === null) {
        var s = a.type;
        if (mx(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var f = s;
          return f = qf(s), t.tag = $e, t.type = f, mS(t, s), v0(e, t, f, i, u);
        }
        {
          var p = s.propTypes;
          if (p && Ki(
            p,
            i,
            // Resolved props
            "prop",
            xt(s)
          ), a.defaultProps !== void 0) {
            var v = xt(s) || "Unknown";
            Np[v] || (S("%s: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.", v), Np[v] = !0);
          }
        }
        var y = JS(a.type, null, i, t, t.mode, u);
        return y.ref = t.ref, y.return = t, t.child = y, y;
      }
      {
        var g = a.type, k = g.propTypes;
        k && Ki(
          k,
          i,
          // Resolved props
          "prop",
          xt(g)
        );
      }
      var _ = e.child, U = RS(e, u);
      if (!U) {
        var j = _.memoizedProps, V = a.compare;
        if (V = V !== null ? V : He, V(j, i) && e.ref === t.ref)
          return Nu(e, t, u);
      }
      t.flags |= Ii;
      var de = ac(_, i);
      return de.ref = t.ref, de.return = t, t.child = de, de;
    }
    function v0(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === et) {
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
            xt(s)
          );
        }
      }
      if (e !== null) {
        var g = e.memoizedProps;
        if (He(g, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (rl = !1, t.pendingProps = i = g, RS(e, u))
            (e.flags & ti) !== je && (rl = !0);
          else return t.lanes = e.lanes, Nu(e, t, u);
      }
      return vS(e, t, a, i, u);
    }
    function h0(e, t, a) {
      var i = t.pendingProps, u = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || C)
        if ((t.mode & yt) === Fe) {
          var f = {
            baseLanes: $,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = f, Um(t, a);
        } else if (na(a, ya)) {
          var k = {
            baseLanes: $,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = k;
          var _ = s !== null ? s.baseLanes : a;
          Um(t, _);
        } else {
          var p = null, v;
          if (s !== null) {
            var y = s.baseLanes;
            v = ot(y, a);
          } else
            v = a;
          t.lanes = t.childLanes = ya;
          var g = {
            baseLanes: v,
            cachePool: p,
            transitions: null
          };
          return t.memoizedState = g, t.updateQueue = null, Um(t, v), null;
        }
      else {
        var U;
        s !== null ? (U = ot(s.baseLanes, a), t.memoizedState = null) : U = a, Um(t, U);
      }
      return Ra(e, t, u, a), t.child;
    }
    function dw(e, t, a) {
      var i = t.pendingProps;
      return Ra(e, t, i, a), t.child;
    }
    function pw(e, t, a) {
      var i = t.pendingProps.children;
      return Ra(e, t, i, a), t.child;
    }
    function vw(e, t, a) {
      {
        t.flags |= Et;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var u = t.pendingProps, s = u.children;
      return Ra(e, t, s, a), t.child;
    }
    function m0(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= Fn, t.flags |= ps);
    }
    function vS(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && Ki(
          s,
          i,
          // Resolved props
          "prop",
          xt(a)
        );
      }
      var f;
      {
        var p = wf(t, a, !0);
        f = xf(t, p);
      }
      var v, y;
      Mf(t, u), Aa(t);
      {
        if (Op.current = t, Da(!0), v = Hf(e, t, a, i, f, u), y = Pf(), t.mode & it) {
          Qt(!0);
          try {
            v = Hf(e, t, a, i, f, u), y = Pf();
          } finally {
            Qt(!1);
          }
        }
        Da(!1);
      }
      return Rl(), e !== null && !rl ? (kC(e, t, u), Nu(e, t, u)) : (jr() && y && qy(t), t.flags |= Ii, Ra(e, t, v, u), t.child);
    }
    function y0(e, t, a, i, u) {
      {
        switch (Lx(t)) {
          case !1: {
            var s = t.stateNode, f = t.type, p = new f(t.memoizedProps, s.context), v = p.state;
            s.updater.enqueueSetState(s, v, null);
            break;
          }
          case !0: {
            t.flags |= mt, t.flags |= Ua;
            var y = new Error("Simulated error coming from DevTools"), g = rr(u);
            t.lanes = ot(t.lanes, g);
            var k = oS(t, Js(y, t), g);
            hg(t, k);
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
            xt(a)
          );
        }
      }
      var U;
      Al(a) ? (U = !0, zh(t)) : U = !1, Mf(t, u);
      var j = t.stateNode, V;
      j === null ? (bm(e, t), l0(t, a, i), iS(t, a, i, u), V = !0) : e === null ? V = rw(t, a, i, u) : V = aw(e, t, a, i, u);
      var de = hS(e, t, a, V, U, u);
      {
        var Ie = t.stateNode;
        V && Ie.props !== i && (Zs || S("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", Ze(t) || "a component"), Zs = !0);
      }
      return de;
    }
    function hS(e, t, a, i, u, s) {
      m0(e, t);
      var f = (t.flags & mt) !== je;
      if (!i && !f)
        return u && JE(t, a, !1), Nu(e, t, s);
      var p = t.stateNode;
      Op.current = t;
      var v;
      if (f && typeof a.getDerivedStateFromError != "function")
        v = null, t0();
      else {
        Aa(t);
        {
          if (Da(!0), v = p.render(), t.mode & it) {
            Qt(!0);
            try {
              p.render();
            } finally {
              Qt(!1);
            }
          }
          Da(!1);
        }
        Rl();
      }
      return t.flags |= Ii, e !== null && f ? fw(e, t, v, s) : Ra(e, t, v, s), t.memoizedState = p.state, u && JE(t, a, !0), t.child;
    }
    function g0(e) {
      var t = e.stateNode;
      t.pendingContext ? XE(e, t.pendingContext, t.pendingContext !== t.context) : t.context && XE(e, t.context, !1), mg(e, t.containerInfo);
    }
    function hw(e, t, a) {
      if (g0(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, u = t.memoizedState, s = u.element;
      CC(e, t), Kh(t, i, null, a);
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
        if (y.baseState = v, t.memoizedState = v, t.flags & _n) {
          var g = Js(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return S0(e, t, p, a, g);
        } else if (p !== s) {
          var k = Js(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return S0(e, t, p, a, k);
        } else {
          g_(t);
          var _ = vC(t, null, p, a);
          t.child = _;
          for (var U = _; U; )
            U.flags = U.flags & -3 | Hn, U = U.sibling;
        }
      } else {
        if (Of(), p === s)
          return Nu(e, t, a);
        Ra(e, t, p, a);
      }
      return t.child;
    }
    function S0(e, t, a, i, u) {
      return Of(), eg(u), t.flags |= _n, Ra(e, t, a, i), t.child;
    }
    function mw(e, t, a) {
      _C(t), e === null && Zy(t);
      var i = t.type, u = t.pendingProps, s = e !== null ? e.memoizedProps : null, f = u.children, p = zy(i, u);
      return p ? f = null : s !== null && zy(i, s) && (t.flags |= Jt), m0(e, t), Ra(e, t, f, a), t.child;
    }
    function yw(e, t) {
      return e === null && Zy(t), null;
    }
    function gw(e, t, a, i) {
      bm(e, t);
      var u = t.pendingProps, s = a, f = s._payload, p = s._init, v = p(f);
      t.type = v;
      var y = t.tag = yx(v), g = nl(v, u), k;
      switch (y) {
        case he:
          return mS(t, v), t.type = v = qf(v), k = vS(null, t, v, g, i), k;
        case Z:
          return t.type = v = QS(v), k = y0(null, t, v, g, i), k;
        case Qe:
          return t.type = v = WS(v), k = d0(null, t, v, g, i), k;
        case ft: {
          if (t.type !== t.elementType) {
            var _ = v.propTypes;
            _ && Ki(
              _,
              g,
              // Resolved for outer only
              "prop",
              xt(v)
            );
          }
          return k = p0(
            null,
            t,
            v,
            nl(v.type, g),
            // The inner type can have defaults too
            i
          ), k;
        }
      }
      var U = "";
      throw v !== null && typeof v == "object" && v.$$typeof === et && (U = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + v + ". " + ("Lazy element type must resolve to a class or function." + U));
    }
    function Sw(e, t, a, i, u) {
      bm(e, t), t.tag = Z;
      var s;
      return Al(a) ? (s = !0, zh(t)) : s = !1, Mf(t, u), l0(t, a, i), iS(t, a, i, u), hS(null, t, a, !0, s, u);
    }
    function Ew(e, t, a, i) {
      bm(e, t);
      var u = t.pendingProps, s;
      {
        var f = wf(t, a, !1);
        s = xf(t, f);
      }
      Mf(t, i);
      var p, v;
      Aa(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var y = xt(a) || "Unknown";
          sS[y] || (S("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", y, y), sS[y] = !0);
        }
        t.mode & it && Zi.recordLegacyContextWarning(t, null), Da(!0), Op.current = t, p = Hf(null, t, a, u, s, i), v = Pf(), Da(!1);
      }
      if (Rl(), t.flags |= Ii, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0) {
        var g = xt(a) || "Unknown";
        Lp[g] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", g, g, g), Lp[g] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0
      ) {
        {
          var k = xt(a) || "Unknown";
          Lp[k] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", k, k, k), Lp[k] = !0);
        }
        t.tag = Z, t.memoizedState = null, t.updateQueue = null;
        var _ = !1;
        return Al(a) ? (_ = !0, zh(t)) : _ = !1, t.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, vg(t), i0(t, p), iS(t, a, u, i), hS(null, t, a, !0, _, i);
      } else {
        if (t.tag = he, t.mode & it) {
          Qt(!0);
          try {
            p = Hf(null, t, a, u, s, i), v = Pf();
          } finally {
            Qt(!1);
          }
        }
        return jr() && v && qy(t), Ra(null, t, p, i), mS(t, a), t.child;
      }
    }
    function mS(e, t) {
      {
        if (t && t.childContextTypes && S("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = Lr();
          i && (a += `

Check the render method of \`` + i + "`.");
          var u = i || "", s = e._debugSource;
          s && (u = s.fileName + ":" + s.lineNumber), dS[u] || (dS[u] = !0, S("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (t.defaultProps !== void 0) {
          var f = xt(t) || "Unknown";
          Np[f] || (S("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", f), Np[f] = !0);
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var p = xt(t) || "Unknown";
          fS[p] || (S("%s: Function components do not support getDerivedStateFromProps.", p), fS[p] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var v = xt(t) || "Unknown";
          cS[v] || (S("%s: Function components do not support contextType.", v), cS[v] = !0);
        }
      }
    }
    var yS = {
      dehydrated: null,
      treeContext: null,
      retryLane: Vn
    };
    function gS(e) {
      return {
        baseLanes: e,
        cachePool: cw(),
        transitions: null
      };
    }
    function Cw(e, t) {
      var a = null;
      return {
        baseLanes: ot(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function Rw(e, t, a, i) {
      if (t !== null) {
        var u = t.memoizedState;
        if (u === null)
          return !1;
      }
      return Sg(e, Cp);
    }
    function Tw(e, t) {
      return xs(e.childLanes, t);
    }
    function E0(e, t, a) {
      var i = t.pendingProps;
      Nx(t) && (t.flags |= mt);
      var u = el.current, s = !1, f = (t.flags & mt) !== je;
      if (f || Rw(u, e) ? (s = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (u = V_(u, xC)), u = Uf(u), zo(t, u), e === null) {
        Zy(t);
        var p = t.memoizedState;
        if (p !== null) {
          var v = p.dehydrated;
          if (v !== null)
            return kw(t, v);
        }
        var y = i.children, g = i.fallback;
        if (s) {
          var k = bw(t, y, g, a), _ = t.child;
          return _.memoizedState = gS(a), t.memoizedState = yS, k;
        } else
          return SS(t, y);
      } else {
        var U = e.memoizedState;
        if (U !== null) {
          var j = U.dehydrated;
          if (j !== null)
            return Dw(e, t, f, i, j, U, a);
        }
        if (s) {
          var V = i.fallback, de = i.children, Ie = ww(e, t, de, V, a), ze = t.child, Dt = e.child.memoizedState;
          return ze.memoizedState = Dt === null ? gS(a) : Cw(Dt, a), ze.childLanes = Tw(e, a), t.memoizedState = yS, Ie;
        } else {
          var Rt = i.children, O = _w(e, t, Rt, a);
          return t.memoizedState = null, O;
        }
      }
    }
    function SS(e, t, a) {
      var i = e.mode, u = {
        mode: "visible",
        children: t
      }, s = ES(u, i);
      return s.return = e, e.child = s, s;
    }
    function bw(e, t, a, i) {
      var u = e.mode, s = e.child, f = {
        mode: "hidden",
        children: t
      }, p, v;
      return (u & yt) === Fe && s !== null ? (p = s, p.childLanes = $, p.pendingProps = f, e.mode & Tt && (p.actualDuration = 0, p.actualStartTime = -1, p.selfBaseDuration = 0, p.treeBaseDuration = 0), v = Bo(a, u, i, null)) : (p = ES(f, u), v = Bo(a, u, i, null)), p.return = e, v.return = e, p.sibling = v, e.child = p, v;
    }
    function ES(e, t, a) {
      return CR(e, t, $, null);
    }
    function C0(e, t) {
      return ac(e, t);
    }
    function _w(e, t, a, i) {
      var u = e.child, s = u.sibling, f = C0(u, {
        mode: "visible",
        children: a
      });
      if ((t.mode & yt) === Fe && (f.lanes = i), f.return = t, f.sibling = null, s !== null) {
        var p = t.deletions;
        p === null ? (t.deletions = [s], t.flags |= Kr) : p.push(s);
      }
      return t.child = f, f;
    }
    function ww(e, t, a, i, u) {
      var s = t.mode, f = e.child, p = f.sibling, v = {
        mode: "hidden",
        children: a
      }, y;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (s & yt) === Fe && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== f
      ) {
        var g = t.child;
        y = g, y.childLanes = $, y.pendingProps = v, t.mode & Tt && (y.actualDuration = 0, y.actualStartTime = -1, y.selfBaseDuration = f.selfBaseDuration, y.treeBaseDuration = f.treeBaseDuration), t.deletions = null;
      } else
        y = C0(f, v), y.subtreeFlags = f.subtreeFlags & Pn;
      var k;
      return p !== null ? k = ac(p, i) : (k = Bo(i, s, u, null), k.flags |= jn), k.return = t, y.return = t, y.sibling = k, t.child = y, k;
    }
    function Tm(e, t, a, i) {
      i !== null && eg(i), Lf(t, e.child, null, a);
      var u = t.pendingProps, s = u.children, f = SS(t, s);
      return f.flags |= jn, t.memoizedState = null, f;
    }
    function xw(e, t, a, i, u) {
      var s = t.mode, f = {
        mode: "visible",
        children: a
      }, p = ES(f, s), v = Bo(i, s, u, null);
      return v.flags |= jn, p.return = t, v.return = t, p.sibling = v, t.child = p, (t.mode & yt) !== Fe && Lf(t, e.child, null, u), v;
    }
    function kw(e, t, a) {
      return (e.mode & yt) === Fe ? (S("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = qe) : Fy(t) ? e.lanes = nr : e.lanes = ya, null;
    }
    function Dw(e, t, a, i, u, s, f) {
      if (a)
        if (t.flags & _n) {
          t.flags &= -257;
          var O = lS(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return Tm(e, t, f, O);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= mt, null;
          var B = i.children, L = i.fallback, J = xw(e, t, B, L, f), Ee = t.child;
          return Ee.memoizedState = gS(f), t.memoizedState = yS, J;
        }
      else {
        if (m_(), (t.mode & yt) === Fe)
          return Tm(
            e,
            t,
            f,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (Fy(u)) {
          var p, v, y;
          {
            var g = Mb(u);
            p = g.digest, v = g.message, y = g.stack;
          }
          var k;
          v ? k = new Error(v) : k = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var _ = lS(k, p, y);
          return Tm(e, t, f, _);
        }
        var U = na(f, e.childLanes);
        if (rl || U) {
          var j = zm();
          if (j !== null) {
            var V = Zc(j, f);
            if (V !== Vn && V !== s.retryLane) {
              s.retryLane = V;
              var de = Wt;
              Ba(e, V), Cr(j, e, V, de);
            }
          }
          VS();
          var Ie = lS(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return Tm(e, t, f, Ie);
        } else if (YE(u)) {
          t.flags |= mt, t.child = e.child;
          var ze = ex.bind(null, e);
          return zb(u, ze), null;
        } else {
          S_(t, u, s.treeContext);
          var Dt = i.children, Rt = SS(t, Dt);
          return Rt.flags |= Hn, Rt;
        }
      }
    }
    function R0(e, t, a) {
      e.lanes = ot(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = ot(i.lanes, t)), cg(e.return, t, a);
    }
    function Ow(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === Oe) {
          var u = i.memoizedState;
          u !== null && R0(i, a, e);
        } else if (i.tag === Vt)
          R0(i, a, e);
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
    function Lw(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && tm(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function Nw(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !pS[e])
        if (pS[e] = !0, typeof e == "string")
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
    function Mw(e, t) {
      e !== void 0 && !Rm[e] && (e !== "collapsed" && e !== "hidden" ? (Rm[e] = !0, S('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (Rm[e] = !0, S('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function T0(e, t) {
      {
        var a = ut(e), i = !a && typeof yn(e) == "function";
        if (a || i) {
          var u = a ? "array" : "iterable";
          return S("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", u, t, u), !1;
        }
      }
      return !0;
    }
    function zw(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (ut(e)) {
          for (var a = 0; a < e.length; a++)
            if (!T0(e[a], a))
              return;
        } else {
          var i = yn(e);
          if (typeof i == "function") {
            var u = i.call(e);
            if (u)
              for (var s = u.next(), f = 0; !s.done; s = u.next()) {
                if (!T0(s.value, f))
                  return;
                f++;
              }
          } else
            S('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function CS(e, t, a, i, u) {
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
    function b0(e, t, a) {
      var i = t.pendingProps, u = i.revealOrder, s = i.tail, f = i.children;
      Nw(u), Mw(s, u), zw(f, u), Ra(e, t, f, a);
      var p = el.current, v = Sg(p, Cp);
      if (v)
        p = Eg(p, Cp), t.flags |= mt;
      else {
        var y = e !== null && (e.flags & mt) !== je;
        y && Ow(t, t.child, a), p = Uf(p);
      }
      if (zo(t, p), (t.mode & yt) === Fe)
        t.memoizedState = null;
      else
        switch (u) {
          case "forwards": {
            var g = Lw(t.child), k;
            g === null ? (k = t.child, t.child = null) : (k = g.sibling, g.sibling = null), CS(
              t,
              !1,
              // isBackwards
              k,
              g,
              s
            );
            break;
          }
          case "backwards": {
            var _ = null, U = t.child;
            for (t.child = null; U !== null; ) {
              var j = U.alternate;
              if (j !== null && tm(j) === null) {
                t.child = U;
                break;
              }
              var V = U.sibling;
              U.sibling = _, _ = U, U = V;
            }
            CS(
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
            CS(
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
    function Uw(e, t, a) {
      mg(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = Lf(t, null, i, a) : Ra(e, t, i, a), t.child;
    }
    var _0 = !1;
    function Aw(e, t, a) {
      var i = t.type, u = i._context, s = t.pendingProps, f = t.memoizedProps, p = s.value;
      {
        "value" in s || _0 || (_0 = !0, S("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var v = t.type.propTypes;
        v && Ki(v, s, "prop", "Context.Provider");
      }
      if (yC(t, u, p), f !== null) {
        var y = f.value;
        if (ke(y, p)) {
          if (f.children === s.children && !Nh())
            return Nu(e, t, a);
        } else
          N_(t, u, a);
      }
      var g = s.children;
      return Ra(e, t, g, a), t.child;
    }
    var w0 = !1;
    function jw(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (w0 || (w0 = !0, S("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var u = t.pendingProps, s = u.children;
      typeof s != "function" && S("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), Mf(t, a);
      var f = lr(i);
      Aa(t);
      var p;
      return Op.current = t, Da(!0), p = s(f), Da(!1), Rl(), t.flags |= Ii, Ra(e, t, p, a), t.child;
    }
    function Mp() {
      rl = !0;
    }
    function bm(e, t) {
      (t.mode & yt) === Fe && e !== null && (e.alternate = null, t.alternate = null, t.flags |= jn);
    }
    function Nu(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), t0(), Ip(t.lanes), na(a, t.childLanes) ? (O_(e, t), t.child) : null;
    }
    function Fw(e, t, a) {
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
        return s === null ? (i.deletions = [e], i.flags |= Kr) : s.push(e), a.flags |= jn, a;
      }
    }
    function RS(e, t) {
      var a = e.lanes;
      return !!na(a, t);
    }
    function Hw(e, t, a) {
      switch (t.tag) {
        case F:
          g0(t), t.stateNode, Of();
          break;
        case q:
          _C(t);
          break;
        case Z: {
          var i = t.type;
          Al(i) && zh(t);
          break;
        }
        case ee:
          mg(t, t.stateNode.containerInfo);
          break;
        case st: {
          var u = t.memoizedProps.value, s = t.type._context;
          yC(t, s, u);
          break;
        }
        case Ot:
          {
            var f = na(a, t.childLanes);
            f && (t.flags |= Et);
            {
              var p = t.stateNode;
              p.effectDuration = 0, p.passiveEffectDuration = 0;
            }
          }
          break;
        case Oe: {
          var v = t.memoizedState;
          if (v !== null) {
            if (v.dehydrated !== null)
              return zo(t, Uf(el.current)), t.flags |= mt, null;
            var y = t.child, g = y.childLanes;
            if (na(a, g))
              return E0(e, t, a);
            zo(t, Uf(el.current));
            var k = Nu(e, t, a);
            return k !== null ? k.sibling : null;
          } else
            zo(t, Uf(el.current));
          break;
        }
        case Vt: {
          var _ = (e.flags & mt) !== je, U = na(a, t.childLanes);
          if (_) {
            if (U)
              return b0(e, t, a);
            t.flags |= mt;
          }
          var j = t.memoizedState;
          if (j !== null && (j.rendering = null, j.tail = null, j.lastEffect = null), zo(t, el.current), U)
            break;
          return null;
        }
        case Ye:
        case Nt:
          return t.lanes = $, h0(e, t, a);
      }
      return Nu(e, t, a);
    }
    function x0(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return Fw(e, t, JS(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, u = t.pendingProps;
        if (i !== u || Nh() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          rl = !0;
        else {
          var s = RS(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & mt) === je)
            return rl = !1, Hw(e, t, a);
          (e.flags & ti) !== je ? rl = !0 : rl = !1;
        }
      } else if (rl = !1, jr() && c_(t)) {
        var f = t.index, p = f_();
        tC(t, p, f);
      }
      switch (t.lanes = $, t.tag) {
        case ae:
          return Ew(e, t, t.type, a);
        case En: {
          var v = t.elementType;
          return gw(e, t, v, a);
        }
        case he: {
          var y = t.type, g = t.pendingProps, k = t.elementType === y ? g : nl(y, g);
          return vS(e, t, y, k, a);
        }
        case Z: {
          var _ = t.type, U = t.pendingProps, j = t.elementType === _ ? U : nl(_, U);
          return y0(e, t, _, j, a);
        }
        case F:
          return hw(e, t, a);
        case q:
          return mw(e, t, a);
        case fe:
          return yw(e, t);
        case Oe:
          return E0(e, t, a);
        case ee:
          return Uw(e, t, a);
        case Qe: {
          var V = t.type, de = t.pendingProps, Ie = t.elementType === V ? de : nl(V, de);
          return d0(e, t, V, Ie, a);
        }
        case ue:
          return dw(e, t, a);
        case mn:
          return pw(e, t, a);
        case Ot:
          return vw(e, t, a);
        case st:
          return Aw(e, t, a);
        case jt:
          return jw(e, t, a);
        case ft: {
          var ze = t.type, Dt = t.pendingProps, Rt = nl(ze, Dt);
          if (t.type !== t.elementType) {
            var O = ze.propTypes;
            O && Ki(
              O,
              Rt,
              // Resolved for outer only
              "prop",
              xt(ze)
            );
          }
          return Rt = nl(ze.type, Rt), p0(e, t, ze, Rt, a);
        }
        case $e:
          return v0(e, t, t.type, t.pendingProps, a);
        case Lt: {
          var B = t.type, L = t.pendingProps, J = t.elementType === B ? L : nl(B, L);
          return Sw(e, t, B, J, a);
        }
        case Vt:
          return b0(e, t, a);
        case gt:
          break;
        case Ye:
          return h0(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Vf(e) {
      e.flags |= Et;
    }
    function k0(e) {
      e.flags |= Fn, e.flags |= ps;
    }
    var D0, TS, O0, L0;
    D0 = function(e, t, a, i) {
      for (var u = t.child; u !== null; ) {
        if (u.tag === q || u.tag === fe)
          ub(e, u.stateNode);
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
    }, TS = function(e, t) {
    }, O0 = function(e, t, a, i, u) {
      var s = e.memoizedProps;
      if (s !== i) {
        var f = t.stateNode, p = yg(), v = sb(f, a, s, i, u, p);
        t.updateQueue = v, v && Vf(t);
      }
    }, L0 = function(e, t, a, i) {
      a !== i && Vf(t);
    };
    function zp(e, t) {
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
      var t = e.alternate !== null && e.alternate.child === e.child, a = $, i = je;
      if (t) {
        if ((e.mode & Tt) !== Fe) {
          for (var v = e.selfBaseDuration, y = e.child; y !== null; )
            a = ot(a, ot(y.lanes, y.childLanes)), i |= y.subtreeFlags & Pn, i |= y.flags & Pn, v += y.treeBaseDuration, y = y.sibling;
          e.treeBaseDuration = v;
        } else
          for (var g = e.child; g !== null; )
            a = ot(a, ot(g.lanes, g.childLanes)), i |= g.subtreeFlags & Pn, i |= g.flags & Pn, g.return = e, g = g.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & Tt) !== Fe) {
          for (var u = e.actualDuration, s = e.selfBaseDuration, f = e.child; f !== null; )
            a = ot(a, ot(f.lanes, f.childLanes)), i |= f.subtreeFlags, i |= f.flags, u += f.actualDuration, s += f.treeBaseDuration, f = f.sibling;
          e.actualDuration = u, e.treeBaseDuration = s;
        } else
          for (var p = e.child; p !== null; )
            a = ot(a, ot(p.lanes, p.childLanes)), i |= p.subtreeFlags, i |= p.flags, p.return = e, p = p.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function Pw(e, t, a) {
      if (b_() && (t.mode & yt) !== Fe && (t.flags & mt) === je)
        return oC(t), Of(), t.flags |= _n | lu | Ua, !1;
      var i = Hh(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (R_(t), Hr(t), (t.mode & Tt) !== Fe) {
            var u = a !== null;
            if (u) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (Of(), (t.flags & mt) === je && (t.memoizedState = null), t.flags |= Et, Hr(t), (t.mode & Tt) !== Fe) {
            var f = a !== null;
            if (f) {
              var p = t.child;
              p !== null && (t.treeBaseDuration -= p.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return sC(), !0;
    }
    function N0(e, t, a) {
      var i = t.pendingProps;
      switch (Gy(t), t.tag) {
        case ae:
        case En:
        case $e:
        case he:
        case Qe:
        case ue:
        case mn:
        case Ot:
        case jt:
        case ft:
          return Hr(t), null;
        case Z: {
          var u = t.type;
          return Al(u) && Mh(t), Hr(t), null;
        }
        case F: {
          var s = t.stateNode;
          if (zf(t), Iy(t), Rg(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var f = Hh(t);
            if (f)
              Vf(t);
            else if (e !== null) {
              var p = e.memoizedState;
              // Check if this is a client root
              (!p.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & _n) !== je) && (t.flags |= za, sC());
            }
          }
          return TS(e, t), Hr(t), null;
        }
        case q: {
          gg(t);
          var v = bC(), y = t.type;
          if (e !== null && t.stateNode != null)
            O0(e, t, y, i, v), e.ref !== t.ref && k0(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return Hr(t), null;
            }
            var g = yg(), k = Hh(t);
            if (k)
              E_(t, v, g) && Vf(t);
            else {
              var _ = lb(y, i, v, g, t);
              D0(_, t, !1, !1), t.stateNode = _, ob(_, y, i, v) && Vf(t);
            }
            t.ref !== null && k0(t);
          }
          return Hr(t), null;
        }
        case fe: {
          var U = i;
          if (e && t.stateNode != null) {
            var j = e.memoizedProps;
            L0(e, t, j, U);
          } else {
            if (typeof U != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var V = bC(), de = yg(), Ie = Hh(t);
            Ie ? C_(t) && Vf(t) : t.stateNode = cb(U, V, de, t);
          }
          return Hr(t), null;
        }
        case Oe: {
          Af(t);
          var ze = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var Dt = Pw(e, t, ze);
            if (!Dt)
              return t.flags & Ua ? t : null;
          }
          if ((t.flags & mt) !== je)
            return t.lanes = a, (t.mode & Tt) !== Fe && Wg(t), t;
          var Rt = ze !== null, O = e !== null && e.memoizedState !== null;
          if (Rt !== O && Rt) {
            var B = t.child;
            if (B.flags |= gi, (t.mode & yt) !== Fe) {
              var L = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !0);
              L || Sg(el.current, xC) ? V1() : VS();
            }
          }
          var J = t.updateQueue;
          if (J !== null && (t.flags |= Et), Hr(t), (t.mode & Tt) !== Fe && Rt) {
            var Ee = t.child;
            Ee !== null && (t.treeBaseDuration -= Ee.treeBaseDuration);
          }
          return null;
        }
        case ee:
          return zf(t), TS(e, t), e === null && r_(t.stateNode.containerInfo), Hr(t), null;
        case st:
          var ve = t.type._context;
          return sg(ve, t), Hr(t), null;
        case Lt: {
          var Ke = t.type;
          return Al(Ke) && Mh(t), Hr(t), null;
        }
        case Vt: {
          Af(t);
          var rt = t.memoizedState;
          if (rt === null)
            return Hr(t), null;
          var tn = (t.flags & mt) !== je, zt = rt.rendering;
          if (zt === null)
            if (tn)
              zp(rt, !1);
            else {
              var Xn = $1() && (e === null || (e.flags & mt) === je);
              if (!Xn)
                for (var Ut = t.child; Ut !== null; ) {
                  var $n = tm(Ut);
                  if ($n !== null) {
                    tn = !0, t.flags |= mt, zp(rt, !1);
                    var oa = $n.updateQueue;
                    return oa !== null && (t.updateQueue = oa, t.flags |= Et), t.subtreeFlags = je, L_(t, a), zo(t, Eg(el.current, Cp)), t.child;
                  }
                  Ut = Ut.sibling;
                }
              rt.tail !== null && Dn() > Z0() && (t.flags |= mt, tn = !0, zp(rt, !1), t.lanes = Hv);
            }
          else {
            if (!tn) {
              var Yr = tm(zt);
              if (Yr !== null) {
                t.flags |= mt, tn = !0;
                var oi = Yr.updateQueue;
                if (oi !== null && (t.updateQueue = oi, t.flags |= Et), zp(rt, !0), rt.tail === null && rt.tailMode === "hidden" && !zt.alternate && !jr())
                  return Hr(t), null;
              } else // The time it took to render last row is greater than the remaining
              // time we have to render. So rendering one more row would likely
              // exceed it.
              Dn() * 2 - rt.renderingStartTime > Z0() && a !== ya && (t.flags |= mt, tn = !0, zp(rt, !1), t.lanes = Hv);
            }
            if (rt.isBackwards)
              zt.sibling = t.child, t.child = zt;
            else {
              var _a = rt.last;
              _a !== null ? _a.sibling = zt : t.child = zt, rt.last = zt;
            }
          }
          if (rt.tail !== null) {
            var wa = rt.tail;
            rt.rendering = wa, rt.tail = wa.sibling, rt.renderingStartTime = Dn(), wa.sibling = null;
            var sa = el.current;
            return tn ? sa = Eg(sa, Cp) : sa = Uf(sa), zo(t, sa), wa;
          }
          return Hr(t), null;
        }
        case gt:
          break;
        case Ye:
        case Nt: {
          PS(t);
          var ju = t.memoizedState, Gf = ju !== null;
          if (e !== null) {
            var Xp = e.memoizedState, Yl = Xp !== null;
            Yl !== Gf && (t.flags |= gi);
          }
          return !Gf || (t.mode & yt) === Fe ? Hr(t) : na($l, ya) && (Hr(t), t.subtreeFlags & (jn | Et) && (t.flags |= gi)), null;
        }
        case vt:
          return null;
        case lt:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Vw(e, t, a) {
      switch (Gy(t), t.tag) {
        case Z: {
          var i = t.type;
          Al(i) && Mh(t);
          var u = t.flags;
          return u & Ua ? (t.flags = u & -65537 | mt, (t.mode & Tt) !== Fe && Wg(t), t) : null;
        }
        case F: {
          t.stateNode, zf(t), Iy(t), Rg();
          var s = t.flags;
          return (s & Ua) !== je && (s & mt) === je ? (t.flags = s & -65537 | mt, t) : null;
        }
        case q:
          return gg(t), null;
        case Oe: {
          Af(t);
          var f = t.memoizedState;
          if (f !== null && f.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            Of();
          }
          var p = t.flags;
          return p & Ua ? (t.flags = p & -65537 | mt, (t.mode & Tt) !== Fe && Wg(t), t) : null;
        }
        case Vt:
          return Af(t), null;
        case ee:
          return zf(t), null;
        case st:
          var v = t.type._context;
          return sg(v, t), null;
        case Ye:
        case Nt:
          return PS(t), null;
        case vt:
          return null;
        default:
          return null;
      }
    }
    function M0(e, t, a) {
      switch (Gy(t), t.tag) {
        case Z: {
          var i = t.type.childContextTypes;
          i != null && Mh(t);
          break;
        }
        case F: {
          t.stateNode, zf(t), Iy(t), Rg();
          break;
        }
        case q: {
          gg(t);
          break;
        }
        case ee:
          zf(t);
          break;
        case Oe:
          Af(t);
          break;
        case Vt:
          Af(t);
          break;
        case st:
          var u = t.type._context;
          sg(u, t);
          break;
        case Ye:
        case Nt:
          PS(t);
          break;
      }
    }
    var z0 = null;
    z0 = /* @__PURE__ */ new Set();
    var _m = !1, Pr = !1, Bw = typeof WeakSet == "function" ? WeakSet : Set, De = null, Bf = null, $f = null;
    function $w(e) {
      Ma(null, function() {
        throw e;
      }), fd();
    }
    var Yw = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & Tt)
        try {
          Vl(), t.componentWillUnmount();
        } finally {
          Pl(e);
        }
      else
        t.componentWillUnmount();
    };
    function U0(e, t) {
      try {
        jo(hr, e);
      } catch (a) {
        hn(e, t, a);
      }
    }
    function bS(e, t, a) {
      try {
        Yw(e, a);
      } catch (i) {
        hn(e, t, i);
      }
    }
    function Iw(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        hn(e, t, i);
      }
    }
    function A0(e, t) {
      try {
        F0(e);
      } catch (a) {
        hn(e, t, a);
      }
    }
    function Yf(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (_e && Ue && e.mode & Tt)
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
          typeof i == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Ze(e));
        } else
          a.current = null;
    }
    function wm(e, t, a) {
      try {
        a();
      } catch (i) {
        hn(e, t, i);
      }
    }
    var j0 = !1;
    function Qw(e, t) {
      ab(e.containerInfo), De = t, Ww();
      var a = j0;
      return j0 = !1, a;
    }
    function Ww() {
      for (; De !== null; ) {
        var e = De, t = e.child;
        (e.subtreeFlags & Sl) !== je && t !== null ? (t.return = e, De = t) : qw();
      }
    }
    function qw() {
      for (; De !== null; ) {
        var e = De;
        Gt(e);
        try {
          Gw(e);
        } catch (a) {
          hn(e, e.return, a);
        }
        bn();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, De = t;
          return;
        }
        De = e.return;
      }
    }
    function Gw(e) {
      var t = e.alternate, a = e.flags;
      if ((a & za) !== je) {
        switch (Gt(e), e.tag) {
          case he:
          case Qe:
          case $e:
            break;
          case Z: {
            if (t !== null) {
              var i = t.memoizedProps, u = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !Zs && (s.props !== e.memoizedProps && S("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ze(e) || "instance"), s.state !== e.memoizedState && S("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ze(e) || "instance"));
              var f = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : nl(e.type, i), u);
              {
                var p = z0;
                f === void 0 && !p.has(e.type) && (p.add(e.type), S("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", Ze(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = f;
            }
            break;
          }
          case F: {
            {
              var v = e.stateNode;
              Db(v.containerInfo);
            }
            break;
          }
          case q:
          case fe:
          case ee:
          case Lt:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        bn();
      }
    }
    function al(e, t, a) {
      var i = t.updateQueue, u = i !== null ? i.lastEffect : null;
      if (u !== null) {
        var s = u.next, f = s;
        do {
          if ((f.tag & e) === e) {
            var p = f.destroy;
            f.destroy = void 0, p !== void 0 && ((e & Fr) !== $a ? Tl(t) : (e & hr) !== $a && Td(t), (e & jl) !== $a && Wp(!0), wm(t, a, p), (e & jl) !== $a && Wp(!1), (e & Fr) !== $a ? wc() : (e & hr) !== $a && uo());
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
            (e & Fr) !== $a ? jv(t) : (e & hr) !== $a && Fv(t);
            var f = s.create;
            (e & jl) !== $a && Wp(!0), s.destroy = f(), (e & jl) !== $a && Wp(!1), (e & Fr) !== $a ? Wi() : (e & hr) !== $a && xc();
            {
              var p = s.destroy;
              if (p !== void 0 && typeof p != "function") {
                var v = void 0;
                (s.tag & hr) !== je ? v = "useLayoutEffect" : (s.tag & jl) !== je ? v = "useInsertionEffect" : v = "useEffect";
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
    function Xw(e, t) {
      if ((t.flags & Et) !== je)
        switch (t.tag) {
          case Ot: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, u = i.id, s = i.onPostCommit, f = ZC(), p = t.alternate === null ? "mount" : "update";
            JC() && (p = "nested-update"), typeof s == "function" && s(u, p, a, f);
            var v = t.return;
            e: for (; v !== null; ) {
              switch (v.tag) {
                case F:
                  var y = v.stateNode;
                  y.passiveEffectDuration += a;
                  break e;
                case Ot:
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
    function Kw(e, t, a, i) {
      if ((a.flags & El) !== je)
        switch (a.tag) {
          case he:
          case Qe:
          case $e: {
            if (!Pr)
              if (a.mode & Tt)
                try {
                  Vl(), jo(hr | vr, a);
                } finally {
                  Pl(a);
                }
              else
                jo(hr | vr, a);
            break;
          }
          case Z: {
            var u = a.stateNode;
            if (a.flags & Et && !Pr)
              if (t === null)
                if (a.type === a.elementType && !Zs && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ze(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ze(a) || "instance")), a.mode & Tt)
                  try {
                    Vl(), u.componentDidMount();
                  } finally {
                    Pl(a);
                  }
                else
                  u.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : nl(a.type, t.memoizedProps), f = t.memoizedState;
                if (a.type === a.elementType && !Zs && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ze(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ze(a) || "instance")), a.mode & Tt)
                  try {
                    Vl(), u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    Pl(a);
                  }
                else
                  u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
              }
            var p = a.updateQueue;
            p !== null && (a.type === a.elementType && !Zs && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ze(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ze(a) || "instance")), TC(a, p, u));
            break;
          }
          case F: {
            var v = a.updateQueue;
            if (v !== null) {
              var y = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case q:
                    y = a.child.stateNode;
                    break;
                  case Z:
                    y = a.child.stateNode;
                    break;
                }
              TC(a, v, y);
            }
            break;
          }
          case q: {
            var g = a.stateNode;
            if (t === null && a.flags & Et) {
              var k = a.type, _ = a.memoizedProps;
              hb(g, k, _);
            }
            break;
          }
          case fe:
            break;
          case ee:
            break;
          case Ot: {
            {
              var U = a.memoizedProps, j = U.onCommit, V = U.onRender, de = a.stateNode.effectDuration, Ie = ZC(), ze = t === null ? "mount" : "update";
              JC() && (ze = "nested-update"), typeof V == "function" && V(a.memoizedProps.id, ze, a.actualDuration, a.treeBaseDuration, a.actualStartTime, Ie);
              {
                typeof j == "function" && j(a.memoizedProps.id, ze, de, Ie), q1(a);
                var Dt = a.return;
                e: for (; Dt !== null; ) {
                  switch (Dt.tag) {
                    case F:
                      var Rt = Dt.stateNode;
                      Rt.effectDuration += de;
                      break e;
                    case Ot:
                      var O = Dt.stateNode;
                      O.effectDuration += de;
                      break e;
                  }
                  Dt = Dt.return;
                }
              }
            }
            break;
          }
          case Oe: {
            i1(e, a);
            break;
          }
          case Vt:
          case Lt:
          case gt:
          case Ye:
          case Nt:
          case lt:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Pr || a.flags & Fn && F0(a);
    }
    function Jw(e) {
      switch (e.tag) {
        case he:
        case Qe:
        case $e: {
          if (e.mode & Tt)
            try {
              Vl(), U0(e, e.return);
            } finally {
              Pl(e);
            }
          else
            U0(e, e.return);
          break;
        }
        case Z: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && Iw(e, e.return, t), A0(e, e.return);
          break;
        }
        case q: {
          A0(e, e.return);
          break;
        }
      }
    }
    function Zw(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === q) {
          if (a === null) {
            a = i;
            try {
              var u = i.stateNode;
              t ? _b(u) : xb(i.stateNode, i.memoizedProps);
            } catch (f) {
              hn(e, e.return, f);
            }
          }
        } else if (i.tag === fe) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? wb(s) : kb(s, i.memoizedProps);
            } catch (f) {
              hn(e, e.return, f);
            }
        } else if (!((i.tag === Ye || i.tag === Nt) && i.memoizedState !== null && i !== e)) {
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
    function F0(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        switch (e.tag) {
          case q:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var u;
          if (e.mode & Tt)
            try {
              Vl(), u = t(i);
            } finally {
              Pl(e);
            }
          else
            u = t(i);
          typeof u == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Ze(e));
        } else
          t.hasOwnProperty("current") || S("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", Ze(e)), t.current = i;
      }
    }
    function e1(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function H0(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, H0(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === q) {
          var a = e.stateNode;
          a !== null && l_(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function t1(e) {
      for (var t = e.return; t !== null; ) {
        if (P0(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function P0(e) {
      return e.tag === q || e.tag === F || e.tag === ee;
    }
    function V0(e) {
      var t = e;
      e: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || P0(t.return))
            return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== q && t.tag !== fe && t.tag !== ln; ) {
          if (t.flags & jn || t.child === null || t.tag === ee)
            continue e;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & jn))
          return t.stateNode;
      }
    }
    function n1(e) {
      var t = t1(e);
      switch (t.tag) {
        case q: {
          var a = t.stateNode;
          t.flags & Jt && ($E(a), t.flags &= -33);
          var i = V0(e);
          wS(e, i, a);
          break;
        }
        case F:
        case ee: {
          var u = t.stateNode.containerInfo, s = V0(e);
          _S(e, s, u);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function _S(e, t, a) {
      var i = e.tag, u = i === q || i === fe;
      if (u) {
        var s = e.stateNode;
        t ? Cb(a, s, t) : Sb(a, s);
      } else if (i !== ee) {
        var f = e.child;
        if (f !== null) {
          _S(f, t, a);
          for (var p = f.sibling; p !== null; )
            _S(p, t, a), p = p.sibling;
        }
      }
    }
    function wS(e, t, a) {
      var i = e.tag, u = i === q || i === fe;
      if (u) {
        var s = e.stateNode;
        t ? Eb(a, s, t) : gb(a, s);
      } else if (i !== ee) {
        var f = e.child;
        if (f !== null) {
          wS(f, t, a);
          for (var p = f.sibling; p !== null; )
            wS(p, t, a), p = p.sibling;
        }
      }
    }
    var Vr = null, il = !1;
    function r1(e, t, a) {
      {
        var i = t;
        e: for (; i !== null; ) {
          switch (i.tag) {
            case q: {
              Vr = i.stateNode, il = !1;
              break e;
            }
            case F: {
              Vr = i.stateNode.containerInfo, il = !0;
              break e;
            }
            case ee: {
              Vr = i.stateNode.containerInfo, il = !0;
              break e;
            }
          }
          i = i.return;
        }
        if (Vr === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        B0(e, t, a), Vr = null, il = !1;
      }
      e1(a);
    }
    function Fo(e, t, a) {
      for (var i = a.child; i !== null; )
        B0(e, t, i), i = i.sibling;
    }
    function B0(e, t, a) {
      switch (lo(a), a.tag) {
        case q:
          Pr || Yf(a, t);
        case fe: {
          {
            var i = Vr, u = il;
            Vr = null, Fo(e, t, a), Vr = i, il = u, Vr !== null && (il ? Tb(Vr, a.stateNode) : Rb(Vr, a.stateNode));
          }
          return;
        }
        case ln: {
          Vr !== null && (il ? bb(Vr, a.stateNode) : jy(Vr, a.stateNode));
          return;
        }
        case ee: {
          {
            var s = Vr, f = il;
            Vr = a.stateNode.containerInfo, il = !0, Fo(e, t, a), Vr = s, il = f;
          }
          return;
        }
        case he:
        case Qe:
        case ft:
        case $e: {
          if (!Pr) {
            var p = a.updateQueue;
            if (p !== null) {
              var v = p.lastEffect;
              if (v !== null) {
                var y = v.next, g = y;
                do {
                  var k = g, _ = k.destroy, U = k.tag;
                  _ !== void 0 && ((U & jl) !== $a ? wm(a, t, _) : (U & hr) !== $a && (Td(a), a.mode & Tt ? (Vl(), wm(a, t, _), Pl(a)) : wm(a, t, _), uo())), g = g.next;
                } while (g !== y);
              }
            }
          }
          Fo(e, t, a);
          return;
        }
        case Z: {
          if (!Pr) {
            Yf(a, t);
            var j = a.stateNode;
            typeof j.componentWillUnmount == "function" && bS(a, t, j);
          }
          Fo(e, t, a);
          return;
        }
        case gt: {
          Fo(e, t, a);
          return;
        }
        case Ye: {
          if (
            // TODO: Remove this dead flag
            a.mode & yt
          ) {
            var V = Pr;
            Pr = V || a.memoizedState !== null, Fo(e, t, a), Pr = V;
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
    function a1(e) {
      e.memoizedState;
    }
    function i1(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var u = i.memoizedState;
          if (u !== null) {
            var s = u.dehydrated;
            s !== null && $b(s);
          }
        }
      }
    }
    function $0(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new Bw()), t.forEach(function(i) {
          var u = tx.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), wr)
              if (Bf !== null && $f !== null)
                Qp($f, Bf);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(u, u);
          }
        });
      }
    }
    function l1(e, t, a) {
      Bf = a, $f = e, Gt(t), Y0(t, e), Gt(t), Bf = null, $f = null;
    }
    function ll(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u];
          try {
            r1(e, t, s);
          } catch (v) {
            hn(s, t, v);
          }
        }
      var f = Ka();
      if (t.subtreeFlags & ao)
        for (var p = t.child; p !== null; )
          Gt(p), Y0(p, e), p = p.sibling;
      Gt(f);
    }
    function Y0(e, t, a) {
      var i = e.alternate, u = e.flags;
      switch (e.tag) {
        case he:
        case Qe:
        case ft:
        case $e: {
          if (ll(t, e), Bl(e), u & Et) {
            try {
              al(jl | vr, e, e.return), jo(jl | vr, e);
            } catch (Ke) {
              hn(e, e.return, Ke);
            }
            if (e.mode & Tt) {
              try {
                Vl(), al(hr | vr, e, e.return);
              } catch (Ke) {
                hn(e, e.return, Ke);
              }
              Pl(e);
            } else
              try {
                al(hr | vr, e, e.return);
              } catch (Ke) {
                hn(e, e.return, Ke);
              }
          }
          return;
        }
        case Z: {
          ll(t, e), Bl(e), u & Fn && i !== null && Yf(i, i.return);
          return;
        }
        case q: {
          ll(t, e), Bl(e), u & Fn && i !== null && Yf(i, i.return);
          {
            if (e.flags & Jt) {
              var s = e.stateNode;
              try {
                $E(s);
              } catch (Ke) {
                hn(e, e.return, Ke);
              }
            }
            if (u & Et) {
              var f = e.stateNode;
              if (f != null) {
                var p = e.memoizedProps, v = i !== null ? i.memoizedProps : p, y = e.type, g = e.updateQueue;
                if (e.updateQueue = null, g !== null)
                  try {
                    mb(f, g, y, v, p, e);
                  } catch (Ke) {
                    hn(e, e.return, Ke);
                  }
              }
            }
          }
          return;
        }
        case fe: {
          if (ll(t, e), Bl(e), u & Et) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var k = e.stateNode, _ = e.memoizedProps, U = i !== null ? i.memoizedProps : _;
            try {
              yb(k, U, _);
            } catch (Ke) {
              hn(e, e.return, Ke);
            }
          }
          return;
        }
        case F: {
          if (ll(t, e), Bl(e), u & Et && i !== null) {
            var j = i.memoizedState;
            if (j.isDehydrated)
              try {
                Bb(t.containerInfo);
              } catch (Ke) {
                hn(e, e.return, Ke);
              }
          }
          return;
        }
        case ee: {
          ll(t, e), Bl(e);
          return;
        }
        case Oe: {
          ll(t, e), Bl(e);
          var V = e.child;
          if (V.flags & gi) {
            var de = V.stateNode, Ie = V.memoizedState, ze = Ie !== null;
            if (de.isHidden = ze, ze) {
              var Dt = V.alternate !== null && V.alternate.memoizedState !== null;
              Dt || P1();
            }
          }
          if (u & Et) {
            try {
              a1(e);
            } catch (Ke) {
              hn(e, e.return, Ke);
            }
            $0(e);
          }
          return;
        }
        case Ye: {
          var Rt = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & yt
          ) {
            var O = Pr;
            Pr = O || Rt, ll(t, e), Pr = O;
          } else
            ll(t, e);
          if (Bl(e), u & gi) {
            var B = e.stateNode, L = e.memoizedState, J = L !== null, Ee = e;
            if (B.isHidden = J, J && !Rt && (Ee.mode & yt) !== Fe) {
              De = Ee;
              for (var ve = Ee.child; ve !== null; )
                De = ve, o1(ve), ve = ve.sibling;
            }
            Zw(Ee, J);
          }
          return;
        }
        case Vt: {
          ll(t, e), Bl(e), u & Et && $0(e);
          return;
        }
        case gt:
          return;
        default: {
          ll(t, e), Bl(e);
          return;
        }
      }
    }
    function Bl(e) {
      var t = e.flags;
      if (t & jn) {
        try {
          n1(e);
        } catch (a) {
          hn(e, e.return, a);
        }
        e.flags &= -3;
      }
      t & Hn && (e.flags &= -4097);
    }
    function u1(e, t, a) {
      Bf = a, $f = t, De = e, I0(e, t, a), Bf = null, $f = null;
    }
    function I0(e, t, a) {
      for (var i = (e.mode & yt) !== Fe; De !== null; ) {
        var u = De, s = u.child;
        if (u.tag === Ye && i) {
          var f = u.memoizedState !== null, p = f || _m;
          if (p) {
            xS(e, t, a);
            continue;
          } else {
            var v = u.alternate, y = v !== null && v.memoizedState !== null, g = y || Pr, k = _m, _ = Pr;
            _m = p, Pr = g, Pr && !_ && (De = u, s1(u));
            for (var U = s; U !== null; )
              De = U, I0(
                U,
                // New root; bubble back up to here and stop.
                t,
                a
              ), U = U.sibling;
            De = u, _m = k, Pr = _, xS(e, t, a);
            continue;
          }
        }
        (u.subtreeFlags & El) !== je && s !== null ? (s.return = u, De = s) : xS(e, t, a);
      }
    }
    function xS(e, t, a) {
      for (; De !== null; ) {
        var i = De;
        if ((i.flags & El) !== je) {
          var u = i.alternate;
          Gt(i);
          try {
            Kw(t, u, i, a);
          } catch (f) {
            hn(i, i.return, f);
          }
          bn();
        }
        if (i === e) {
          De = null;
          return;
        }
        var s = i.sibling;
        if (s !== null) {
          s.return = i.return, De = s;
          return;
        }
        De = i.return;
      }
    }
    function o1(e) {
      for (; De !== null; ) {
        var t = De, a = t.child;
        switch (t.tag) {
          case he:
          case Qe:
          case ft:
          case $e: {
            if (t.mode & Tt)
              try {
                Vl(), al(hr, t, t.return);
              } finally {
                Pl(t);
              }
            else
              al(hr, t, t.return);
            break;
          }
          case Z: {
            Yf(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && bS(t, t.return, i);
            break;
          }
          case q: {
            Yf(t, t.return);
            break;
          }
          case Ye: {
            var u = t.memoizedState !== null;
            if (u) {
              Q0(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, De = a) : Q0(e);
      }
    }
    function Q0(e) {
      for (; De !== null; ) {
        var t = De;
        if (t === e) {
          De = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, De = a;
          return;
        }
        De = t.return;
      }
    }
    function s1(e) {
      for (; De !== null; ) {
        var t = De, a = t.child;
        if (t.tag === Ye) {
          var i = t.memoizedState !== null;
          if (i) {
            W0(e);
            continue;
          }
        }
        a !== null ? (a.return = t, De = a) : W0(e);
      }
    }
    function W0(e) {
      for (; De !== null; ) {
        var t = De;
        Gt(t);
        try {
          Jw(t);
        } catch (i) {
          hn(t, t.return, i);
        }
        if (bn(), t === e) {
          De = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, De = a;
          return;
        }
        De = t.return;
      }
    }
    function c1(e, t, a, i) {
      De = t, f1(t, e, a, i);
    }
    function f1(e, t, a, i) {
      for (; De !== null; ) {
        var u = De, s = u.child;
        (u.subtreeFlags & sr) !== je && s !== null ? (s.return = u, De = s) : d1(e, t, a, i);
      }
    }
    function d1(e, t, a, i) {
      for (; De !== null; ) {
        var u = De;
        if ((u.flags & ha) !== je) {
          Gt(u);
          try {
            p1(t, u, a, i);
          } catch (f) {
            hn(u, u.return, f);
          }
          bn();
        }
        if (u === e) {
          De = null;
          return;
        }
        var s = u.sibling;
        if (s !== null) {
          s.return = u.return, De = s;
          return;
        }
        De = u.return;
      }
    }
    function p1(e, t, a, i) {
      switch (t.tag) {
        case he:
        case Qe:
        case $e: {
          if (t.mode & Tt) {
            Qg();
            try {
              jo(Fr | vr, t);
            } finally {
              Ig(t);
            }
          } else
            jo(Fr | vr, t);
          break;
        }
      }
    }
    function v1(e) {
      De = e, h1();
    }
    function h1() {
      for (; De !== null; ) {
        var e = De, t = e.child;
        if ((De.flags & Kr) !== je) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var u = a[i];
              De = u, g1(u, e);
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
            De = e;
          }
        }
        (e.subtreeFlags & sr) !== je && t !== null ? (t.return = e, De = t) : m1();
      }
    }
    function m1() {
      for (; De !== null; ) {
        var e = De;
        (e.flags & ha) !== je && (Gt(e), y1(e), bn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, De = t;
          return;
        }
        De = e.return;
      }
    }
    function y1(e) {
      switch (e.tag) {
        case he:
        case Qe:
        case $e: {
          e.mode & Tt ? (Qg(), al(Fr | vr, e, e.return), Ig(e)) : al(Fr | vr, e, e.return);
          break;
        }
      }
    }
    function g1(e, t) {
      for (; De !== null; ) {
        var a = De;
        Gt(a), E1(a, t), bn();
        var i = a.child;
        i !== null ? (i.return = a, De = i) : S1(e);
      }
    }
    function S1(e) {
      for (; De !== null; ) {
        var t = De, a = t.sibling, i = t.return;
        if (H0(t), t === e) {
          De = null;
          return;
        }
        if (a !== null) {
          a.return = i, De = a;
          return;
        }
        De = i;
      }
    }
    function E1(e, t) {
      switch (e.tag) {
        case he:
        case Qe:
        case $e: {
          e.mode & Tt ? (Qg(), al(Fr, e, t), Ig(e)) : al(Fr, e, t);
          break;
        }
      }
    }
    function C1(e) {
      switch (e.tag) {
        case he:
        case Qe:
        case $e: {
          try {
            jo(hr | vr, e);
          } catch (a) {
            hn(e, e.return, a);
          }
          break;
        }
        case Z: {
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
    function R1(e) {
      switch (e.tag) {
        case he:
        case Qe:
        case $e: {
          try {
            jo(Fr | vr, e);
          } catch (t) {
            hn(e, e.return, t);
          }
          break;
        }
      }
    }
    function T1(e) {
      switch (e.tag) {
        case he:
        case Qe:
        case $e: {
          try {
            al(hr | vr, e, e.return);
          } catch (a) {
            hn(e, e.return, a);
          }
          break;
        }
        case Z: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && bS(e, e.return, t);
          break;
        }
      }
    }
    function b1(e) {
      switch (e.tag) {
        case he:
        case Qe:
        case $e:
          try {
            al(Fr | vr, e, e.return);
          } catch (t) {
            hn(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var Up = Symbol.for;
      Up("selector.component"), Up("selector.has_pseudo_class"), Up("selector.role"), Up("selector.test_id"), Up("selector.text");
    }
    var _1 = [];
    function w1() {
      _1.forEach(function(e) {
        return e();
      });
    }
    var x1 = Se.ReactCurrentActQueue;
    function k1(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function q0() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && x1.current !== null && S("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var D1 = Math.ceil, kS = Se.ReactCurrentDispatcher, DS = Se.ReactCurrentOwner, Br = Se.ReactCurrentBatchConfig, ul = Se.ReactCurrentActQueue, gr = (
      /*             */
      0
    ), G0 = (
      /*               */
      1
    ), $r = (
      /*                */
      2
    ), Di = (
      /*                */
      4
    ), Mu = 0, Ap = 1, ec = 2, xm = 3, jp = 4, X0 = 5, OS = 6, kt = gr, Ta = null, Mn = null, Sr = $, $l = $, LS = ko($), Er = Mu, Fp = null, km = $, Hp = $, Dm = $, Pp = null, Ya = null, NS = 0, K0 = 500, J0 = 1 / 0, O1 = 500, zu = null;
    function Vp() {
      J0 = Dn() + O1;
    }
    function Z0() {
      return J0;
    }
    var Om = !1, MS = null, If = null, tc = !1, Ho = null, Bp = $, zS = [], US = null, L1 = 50, $p = 0, AS = null, jS = !1, Lm = !1, N1 = 50, Qf = 0, Nm = null, Yp = Wt, Mm = $, eR = !1;
    function zm() {
      return Ta;
    }
    function ba() {
      return (kt & ($r | Di)) !== gr ? Dn() : (Yp !== Wt || (Yp = Dn()), Yp);
    }
    function Po(e) {
      var t = e.mode;
      if ((t & yt) === Fe)
        return qe;
      if ((kt & $r) !== gr && Sr !== $)
        return rr(Sr);
      var a = x_() !== w_;
      if (a) {
        if (Br.transition !== null) {
          var i = Br.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return Mm === Vn && (Mm = Md()), Mm;
      }
      var u = ga();
      if (u !== Vn)
        return u;
      var s = fb();
      return s;
    }
    function M1(e) {
      var t = e.mode;
      return (t & yt) === Fe ? qe : Iv();
    }
    function Cr(e, t, a, i) {
      rx(), eR && S("useInsertionEffect must not schedule updates."), jS && (Lm = !0), vo(e, a, i), (kt & $r) !== $ && e === Ta ? lx(t) : (wr && Wv(e, t, a), ux(t), e === Ta && ((kt & $r) === gr && (Hp = ot(Hp, a)), Er === jp && Vo(e, Sr)), Ia(e, i), a === qe && kt === gr && (t.mode & yt) === Fe && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !ul.isBatchingLegacy && (Vp(), eC()));
    }
    function z1(e, t, a) {
      var i = e.current;
      i.lanes = t, vo(e, t, a), Ia(e, a);
    }
    function U1(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (kt & $r) !== gr
      );
    }
    function Ia(e, t) {
      var a = e.callbackNode;
      Bv(e, t);
      var i = ta(e, e === Ta ? Sr : $);
      if (i === $) {
        a !== null && mR(a), e.callbackNode = null, e.callbackPriority = Vn;
        return;
      }
      var u = vu(i), s = e.callbackPriority;
      if (s === u && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(ul.current !== null && a !== YS)) {
        a == null && s !== qe && S("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && mR(a);
      var f;
      if (u === qe)
        e.tag === Do ? (ul.isBatchingLegacy !== null && (ul.didScheduleLegacyUpdate = !0), s_(rR.bind(null, e))) : ZE(rR.bind(null, e)), ul.current !== null ? ul.current.push(Oo) : pb(function() {
          (kt & ($r | Di)) === gr && Oo();
        }), f = null;
      else {
        var p;
        switch (Gv(i)) {
          case ra:
            p = Qi;
            break;
          case ja:
            p = vs;
            break;
          case fr:
            p = ou;
            break;
          case tf:
            p = io;
            break;
          default:
            p = ou;
            break;
        }
        f = IS(p, tR.bind(null, e));
      }
      e.callbackPriority = u, e.callbackNode = f;
    }
    function tR(e, t) {
      if (Z_(), Yp = Wt, Mm = $, (kt & ($r | Di)) !== gr)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = Au();
      if (i && e.callbackNode !== a)
        return null;
      var u = ta(e, e === Ta ? Sr : $);
      if (u === $)
        return null;
      var s = !ws(e, u) && !Yv(e, u) && !t, f = s ? I1(e, u) : Am(e, u);
      if (f !== Mu) {
        if (f === ec) {
          var p = Wc(e);
          p !== $ && (u = p, f = FS(e, p));
        }
        if (f === Ap) {
          var v = Fp;
          throw nc(e, $), Vo(e, u), Ia(e, Dn()), v;
        }
        if (f === OS)
          Vo(e, u);
        else {
          var y = !ws(e, u), g = e.current.alternate;
          if (y && !j1(g)) {
            if (f = Am(e, u), f === ec) {
              var k = Wc(e);
              k !== $ && (u = k, f = FS(e, k));
            }
            if (f === Ap) {
              var _ = Fp;
              throw nc(e, $), Vo(e, u), Ia(e, Dn()), _;
            }
          }
          e.finishedWork = g, e.finishedLanes = u, A1(e, f, u);
        }
      }
      return Ia(e, Dn()), e.callbackNode === a ? tR.bind(null, e) : null;
    }
    function FS(e, t) {
      var a = Pp;
      if (mu(e)) {
        var i = nc(e, t);
        i.flags |= _n, n_(e.containerInfo);
      }
      var u = Am(e, t);
      if (u !== ec) {
        var s = Ya;
        Ya = a, s !== null && nR(s);
      }
      return u;
    }
    function nR(e) {
      Ya === null ? Ya = e : Ya.push.apply(Ya, e);
    }
    function A1(e, t, a) {
      switch (t) {
        case Mu:
        case Ap:
          throw new Error("Root did not complete. This is a bug in React.");
        case ec: {
          rc(e, Ya, zu);
          break;
        }
        case xm: {
          if (Vo(e, a), qc(a) && // do not delay if we're inside an act() scope
          !yR()) {
            var i = NS + K0 - Dn();
            if (i > 10) {
              var u = ta(e, $);
              if (u !== $)
                break;
              var s = e.suspendedLanes;
              if (!hu(s, a)) {
                ba(), Jc(e, s);
                break;
              }
              e.timeoutHandle = Uy(rc.bind(null, e, Ya, zu), i);
              break;
            }
          }
          rc(e, Ya, zu);
          break;
        }
        case jp: {
          if (Vo(e, a), iy(a))
            break;
          if (!yR()) {
            var f = Dd(e, a), p = f, v = Dn() - p, y = nx(v) - v;
            if (y > 10) {
              e.timeoutHandle = Uy(rc.bind(null, e, Ya, zu), y);
              break;
            }
          }
          rc(e, Ya, zu);
          break;
        }
        case X0: {
          rc(e, Ya, zu);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function j1(e) {
      for (var t = e; ; ) {
        if (t.flags & bc) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var u = 0; u < i.length; u++) {
                var s = i[u], f = s.getSnapshot, p = s.value;
                try {
                  if (!ke(f(), p))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var v = t.child;
        if (t.subtreeFlags & bc && v !== null) {
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
      t = xs(t, Dm), t = xs(t, Hp), Ud(e, t);
    }
    function rR(e) {
      if (ew(), (kt & ($r | Di)) !== gr)
        throw new Error("Should not already be working.");
      Au();
      var t = ta(e, $);
      if (!na(t, qe))
        return Ia(e, Dn()), null;
      var a = Am(e, t);
      if (e.tag !== Do && a === ec) {
        var i = Wc(e);
        i !== $ && (t = i, a = FS(e, i));
      }
      if (a === Ap) {
        var u = Fp;
        throw nc(e, $), Vo(e, t), Ia(e, Dn()), u;
      }
      if (a === OS)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, rc(e, Ya, zu), Ia(e, Dn()), null;
    }
    function F1(e, t) {
      t !== $ && (ks(e, ot(t, qe)), Ia(e, Dn()), (kt & ($r | Di)) === gr && (Vp(), Oo()));
    }
    function HS(e, t) {
      var a = kt;
      kt |= G0;
      try {
        return e(t);
      } finally {
        kt = a, kt === gr && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !ul.isBatchingLegacy && (Vp(), eC());
      }
    }
    function H1(e, t, a, i, u) {
      var s = ga(), f = Br.transition;
      try {
        return Br.transition = null, qn(ra), e(t, a, i, u);
      } finally {
        qn(s), Br.transition = f, kt === gr && Vp();
      }
    }
    function Uu(e) {
      Ho !== null && Ho.tag === Do && (kt & ($r | Di)) === gr && Au();
      var t = kt;
      kt |= G0;
      var a = Br.transition, i = ga();
      try {
        return Br.transition = null, qn(ra), e ? e() : void 0;
      } finally {
        qn(i), Br.transition = a, kt = t, (kt & ($r | Di)) === gr && Oo();
      }
    }
    function aR() {
      return (kt & ($r | Di)) !== gr;
    }
    function Um(e, t) {
      la(LS, $l, e), $l = ot($l, t);
    }
    function PS(e) {
      $l = LS.current, ia(LS, e);
    }
    function nc(e, t) {
      e.finishedWork = null, e.finishedLanes = $;
      var a = e.timeoutHandle;
      if (a !== Ay && (e.timeoutHandle = Ay, db(a)), Mn !== null)
        for (var i = Mn.return; i !== null; ) {
          var u = i.alternate;
          M0(u, i), i = i.return;
        }
      Ta = e;
      var s = ac(e.current, null);
      return Mn = s, Sr = $l = t, Er = Mu, Fp = null, km = $, Hp = $, Dm = $, Pp = null, Ya = null, z_(), Zi.discardPendingWarnings(), s;
    }
    function iR(e, t) {
      do {
        var a = Mn;
        try {
          if (Ih(), DC(), bn(), DS.current = null, a === null || a.return === null) {
            Er = Ap, Fp = t, Mn = null;
            return;
          }
          if (_e && a.mode & Tt && Em(a, !0), Re)
            if (Rl(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              ms(a, i, Sr);
            } else
              Ci(a, t, Sr);
          sw(e, a.return, a, t, Sr), sR(a);
        } catch (u) {
          t = u, Mn === a && a !== null ? (a = a.return, Mn = a) : a = Mn;
          continue;
        }
        return;
      } while (!0);
    }
    function lR() {
      var e = kS.current;
      return kS.current = hm, e === null ? hm : e;
    }
    function uR(e) {
      kS.current = e;
    }
    function P1() {
      NS = Dn();
    }
    function Ip(e) {
      km = ot(e, km);
    }
    function V1() {
      Er === Mu && (Er = xm);
    }
    function VS() {
      (Er === Mu || Er === xm || Er === ec) && (Er = jp), Ta !== null && (xl(km) || xl(Hp)) && Vo(Ta, Sr);
    }
    function B1(e) {
      Er !== jp && (Er = ec), Pp === null ? Pp = [e] : Pp.push(e);
    }
    function $1() {
      return Er === Mu;
    }
    function Am(e, t) {
      var a = kt;
      kt |= $r;
      var i = lR();
      if (Ta !== e || Sr !== t) {
        if (wr) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Qp(e, Sr), u.clear()), Ad(e, t);
        }
        zu = ef(), nc(e, t);
      }
      _d(t);
      do
        try {
          Y1();
          break;
        } catch (s) {
          iR(e, s);
        }
      while (!0);
      if (Ih(), kt = a, uR(i), Mn !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return gn(), Ta = null, Sr = $, Er;
    }
    function Y1() {
      for (; Mn !== null; )
        oR(Mn);
    }
    function I1(e, t) {
      var a = kt;
      kt |= $r;
      var i = lR();
      if (Ta !== e || Sr !== t) {
        if (wr) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Qp(e, Sr), u.clear()), Ad(e, t);
        }
        zu = ef(), Vp(), nc(e, t);
      }
      _d(t);
      do
        try {
          Q1();
          break;
        } catch (s) {
          iR(e, s);
        }
      while (!0);
      return Ih(), uR(i), kt = a, Mn !== null ? (wd(), Mu) : (gn(), Ta = null, Sr = $, Er);
    }
    function Q1() {
      for (; Mn !== null && !yd(); )
        oR(Mn);
    }
    function oR(e) {
      var t = e.alternate;
      Gt(e);
      var a;
      (e.mode & Tt) !== Fe ? (Yg(e), a = BS(t, e, $l), Em(e, !0)) : a = BS(t, e, $l), bn(), e.memoizedProps = e.pendingProps, a === null ? sR(e) : Mn = a, DS.current = null;
    }
    function sR(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & lu) === je) {
          Gt(t);
          var u = void 0;
          if ((t.mode & Tt) === Fe ? u = N0(a, t, $l) : (Yg(t), u = N0(a, t, $l), Em(t, !1)), bn(), u !== null) {
            Mn = u;
            return;
          }
        } else {
          var s = Vw(a, t);
          if (s !== null) {
            s.flags &= Ov, Mn = s;
            return;
          }
          if ((t.mode & Tt) !== Fe) {
            Em(t, !1);
            for (var f = t.actualDuration, p = t.child; p !== null; )
              f += p.actualDuration, p = p.sibling;
            t.actualDuration = f;
          }
          if (i !== null)
            i.flags |= lu, i.subtreeFlags = je, i.deletions = null;
          else {
            Er = OS, Mn = null;
            return;
          }
        }
        var v = t.sibling;
        if (v !== null) {
          Mn = v;
          return;
        }
        t = i, Mn = t;
      } while (t !== null);
      Er === Mu && (Er = X0);
    }
    function rc(e, t, a) {
      var i = ga(), u = Br.transition;
      try {
        Br.transition = null, qn(ra), W1(e, t, a, i);
      } finally {
        Br.transition = u, qn(i);
      }
      return null;
    }
    function W1(e, t, a, i) {
      do
        Au();
      while (Ho !== null);
      if (ax(), (kt & ($r | Di)) !== gr)
        throw new Error("Should not already be working.");
      var u = e.finishedWork, s = e.finishedLanes;
      if (Av(s), u === null)
        return Ei(), null;
      if (s === $ && S("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = $, u === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = Vn;
      var f = ot(u.lanes, u.childLanes);
      Qv(e, f), e === Ta && (Ta = null, Mn = null, Sr = $), ((u.subtreeFlags & sr) !== je || (u.flags & sr) !== je) && (tc || (tc = !0, US = a, IS(ou, function() {
        return Au(), null;
      })));
      var p = (u.subtreeFlags & (Sl | ao | El | sr)) !== je, v = (u.flags & (Sl | ao | El | sr)) !== je;
      if (p || v) {
        var y = Br.transition;
        Br.transition = null;
        var g = ga();
        qn(ra);
        var k = kt;
        kt |= Di, DS.current = null, Qw(e, u), e0(), l1(e, u, s), ib(e.containerInfo), e.current = u, ys(s), u1(u, e, s), cu(), Nv(), kt = k, qn(g), Br.transition = y;
      } else
        e.current = u, e0();
      var _ = tc;
      if (tc ? (tc = !1, Ho = e, Bp = s) : (Qf = 0, Nm = null), f = e.pendingLanes, f === $ && (If = null), _ || pR(e.current, !1), Ed(u.stateNode, i), wr && e.memoizedUpdaters.clear(), w1(), Ia(e, Dn()), t !== null)
        for (var U = e.onRecoverableError, j = 0; j < t.length; j++) {
          var V = t[j], de = V.stack, Ie = V.digest;
          U(V.value, {
            componentStack: de,
            digest: Ie
          });
        }
      if (Om) {
        Om = !1;
        var ze = MS;
        throw MS = null, ze;
      }
      return na(Bp, qe) && e.tag !== Do && Au(), f = e.pendingLanes, na(f, qe) ? (J_(), e === AS ? $p++ : ($p = 0, AS = e)) : $p = 0, Oo(), Ei(), null;
    }
    function Au() {
      if (Ho !== null) {
        var e = Gv(Bp), t = xr(fr, e), a = Br.transition, i = ga();
        try {
          return Br.transition = null, qn(t), G1();
        } finally {
          qn(i), Br.transition = a;
        }
      }
      return !1;
    }
    function q1(e) {
      zS.push(e), tc || (tc = !0, IS(ou, function() {
        return Au(), null;
      }));
    }
    function G1() {
      if (Ho === null)
        return !1;
      var e = US;
      US = null;
      var t = Ho, a = Bp;
      if (Ho = null, Bp = $, (kt & ($r | Di)) !== gr)
        throw new Error("Cannot flush passive effects while already rendering.");
      jS = !0, Lm = !1, bd(a);
      var i = kt;
      kt |= Di, v1(t.current), c1(t, t.current, a, e);
      {
        var u = zS;
        zS = [];
        for (var s = 0; s < u.length; s++) {
          var f = u[s];
          Xw(t, f);
        }
      }
      oo(), pR(t.current, !0), kt = i, Oo(), Lm ? t === Nm ? Qf++ : (Qf = 0, Nm = t) : Qf = 0, jS = !1, Lm = !1, Cd(t);
      {
        var p = t.current.stateNode;
        p.effectDuration = 0, p.passiveEffectDuration = 0;
      }
      return !0;
    }
    function cR(e) {
      return If !== null && If.has(e);
    }
    function X1(e) {
      If === null ? If = /* @__PURE__ */ new Set([e]) : If.add(e);
    }
    function K1(e) {
      Om || (Om = !0, MS = e);
    }
    var J1 = K1;
    function fR(e, t, a) {
      var i = Js(a, t), u = o0(e, i, qe), s = No(e, u, qe), f = ba();
      s !== null && (vo(s, qe, f), Ia(s, f));
    }
    function hn(e, t, a) {
      if ($w(a), Wp(!1), e.tag === F) {
        fR(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === F) {
          fR(i, e, a);
          return;
        } else if (i.tag === Z) {
          var u = i.type, s = i.stateNode;
          if (typeof u.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !cR(s)) {
            var f = Js(a, e), p = oS(i, f, qe), v = No(i, p, qe), y = ba();
            v !== null && (vo(v, qe, y), Ia(v, y));
            return;
          }
        }
        i = i.return;
      }
      S(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function Z1(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var u = ba();
      Jc(e, a), ox(e), Ta === e && hu(Sr, a) && (Er === jp || Er === xm && qc(Sr) && Dn() - NS < K0 ? nc(e, $) : Dm = ot(Dm, a)), Ia(e, u);
    }
    function dR(e, t) {
      t === Vn && (t = M1(e));
      var a = ba(), i = Ba(e, t);
      i !== null && (vo(i, t, a), Ia(i, a));
    }
    function ex(e) {
      var t = e.memoizedState, a = Vn;
      t !== null && (a = t.retryLane), dR(e, a);
    }
    function tx(e, t) {
      var a = Vn, i;
      switch (e.tag) {
        case Oe:
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
      i !== null && i.delete(t), dR(e, a);
    }
    function nx(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : D1(e / 1960) * 1960;
    }
    function rx() {
      if ($p > L1)
        throw $p = 0, AS = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      Qf > N1 && (Qf = 0, Nm = null, S("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function ax() {
      Zi.flushLegacyContextWarning(), Zi.flushPendingUnsafeLifecycleWarnings();
    }
    function pR(e, t) {
      Gt(e), jm(e, Mr, T1), t && jm(e, gl, b1), jm(e, Mr, C1), t && jm(e, gl, R1), bn();
    }
    function jm(e, t, a) {
      for (var i = e, u = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== u && i.child !== null && s !== je ? i = i.child : ((i.flags & t) !== je && a(i), i.sibling !== null ? i = i.sibling : i = u = i.return);
      }
    }
    var Fm = null;
    function vR(e) {
      {
        if ((kt & $r) !== gr || !(e.mode & yt))
          return;
        var t = e.tag;
        if (t !== ae && t !== F && t !== Z && t !== he && t !== Qe && t !== ft && t !== $e)
          return;
        var a = Ze(e) || "ReactComponent";
        if (Fm !== null) {
          if (Fm.has(a))
            return;
          Fm.add(a);
        } else
          Fm = /* @__PURE__ */ new Set([a]);
        var i = er;
        try {
          Gt(e), S("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? Gt(e) : bn();
        }
      }
    }
    var BS;
    {
      var ix = null;
      BS = function(e, t, a) {
        var i = RR(ix, t);
        try {
          return x0(e, t, a);
        } catch (s) {
          if (y_() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (Ih(), DC(), M0(e, t), RR(t, i), t.mode & Tt && Yg(t), Ma(null, x0, null, e, t, a), cd()) {
            var u = fd();
            typeof u == "object" && u !== null && u._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var hR = !1, $S;
    $S = /* @__PURE__ */ new Set();
    function lx(e) {
      if (Gr && !G_())
        switch (e.tag) {
          case he:
          case Qe:
          case $e: {
            var t = Mn && Ze(Mn) || "Unknown", a = t;
            if (!$S.has(a)) {
              $S.add(a);
              var i = Ze(e) || "Unknown";
              S("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case Z: {
            hR || (S("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), hR = !0);
            break;
          }
        }
    }
    function Qp(e, t) {
      if (wr) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          Wv(e, i, t);
        });
      }
    }
    var YS = {};
    function IS(e, t) {
      {
        var a = ul.current;
        return a !== null ? (a.push(t), YS) : hd(e, t);
      }
    }
    function mR(e) {
      if (e !== YS)
        return md(e);
    }
    function yR() {
      return ul.current !== null;
    }
    function ux(e) {
      {
        if (e.mode & yt) {
          if (!q0())
            return;
        } else if (!k1() || kt !== gr || e.tag !== he && e.tag !== Qe && e.tag !== $e)
          return;
        if (ul.current === null) {
          var t = er;
          try {
            Gt(e), S(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, Ze(e));
          } finally {
            t ? Gt(e) : bn();
          }
        }
      }
    }
    function ox(e) {
      e.tag !== Do && q0() && ul.current === null && S(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function Wp(e) {
      eR = e;
    }
    var Oi = null, Wf = null, sx = function(e) {
      Oi = e;
    };
    function qf(e) {
      {
        if (Oi === null)
          return e;
        var t = Oi(e);
        return t === void 0 ? e : t.current;
      }
    }
    function QS(e) {
      return qf(e);
    }
    function WS(e) {
      {
        if (Oi === null)
          return e;
        var t = Oi(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = qf(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: W,
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
    function gR(e, t) {
      {
        if (Oi === null)
          return !1;
        var a = e.elementType, i = t.type, u = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case Z: {
            typeof i == "function" && (u = !0);
            break;
          }
          case he: {
            (typeof i == "function" || s === et) && (u = !0);
            break;
          }
          case Qe: {
            (s === W || s === et) && (u = !0);
            break;
          }
          case ft:
          case $e: {
            (s === ht || s === et) && (u = !0);
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
    function SR(e) {
      {
        if (Oi === null || typeof WeakSet != "function")
          return;
        Wf === null && (Wf = /* @__PURE__ */ new WeakSet()), Wf.add(e);
      }
    }
    var cx = function(e, t) {
      {
        if (Oi === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        Au(), Uu(function() {
          qS(e.current, i, a);
        });
      }
    }, fx = function(e, t) {
      {
        if (e.context !== li)
          return;
        Au(), Uu(function() {
          qp(t, e, null, null);
        });
      }
    };
    function qS(e, t, a) {
      {
        var i = e.alternate, u = e.child, s = e.sibling, f = e.tag, p = e.type, v = null;
        switch (f) {
          case he:
          case $e:
          case Z:
            v = p;
            break;
          case Qe:
            v = p.render;
            break;
        }
        if (Oi === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var y = !1, g = !1;
        if (v !== null) {
          var k = Oi(v);
          k !== void 0 && (a.has(k) ? g = !0 : t.has(k) && (f === Z ? g = !0 : y = !0));
        }
        if (Wf !== null && (Wf.has(e) || i !== null && Wf.has(i)) && (g = !0), g && (e._debugNeedsRemount = !0), g || y) {
          var _ = Ba(e, qe);
          _ !== null && Cr(_, e, qe, Wt);
        }
        u !== null && !g && qS(u, t, a), s !== null && qS(s, t, a);
      }
    }
    var dx = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(u) {
          return u.current;
        }));
        return GS(e.current, i, a), a;
      }
    };
    function GS(e, t, a) {
      {
        var i = e.child, u = e.sibling, s = e.tag, f = e.type, p = null;
        switch (s) {
          case he:
          case $e:
          case Z:
            p = f;
            break;
          case Qe:
            p = f.render;
            break;
        }
        var v = !1;
        p !== null && t.has(p) && (v = !0), v ? px(e, a) : i !== null && GS(i, t, a), u !== null && GS(u, t, a);
      }
    }
    function px(e, t) {
      {
        var a = vx(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case q:
              t.add(i.stateNode);
              return;
            case ee:
              t.add(i.stateNode.containerInfo);
              return;
            case F:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function vx(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === q)
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
    var XS;
    {
      XS = !1;
      try {
        var ER = Object.preventExtensions({});
      } catch {
        XS = !0;
      }
    }
    function hx(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = je, this.subtreeFlags = je, this.deletions = null, this.lanes = $, this.childLanes = $, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !XS && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var ui = function(e, t, a, i) {
      return new hx(e, t, a, i);
    };
    function KS(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function mx(e) {
      return typeof e == "function" && !KS(e) && e.defaultProps === void 0;
    }
    function yx(e) {
      if (typeof e == "function")
        return KS(e) ? Z : he;
      if (e != null) {
        var t = e.$$typeof;
        if (t === W)
          return Qe;
        if (t === ht)
          return ft;
      }
      return ae;
    }
    function ac(e, t) {
      var a = e.alternate;
      a === null ? (a = ui(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = je, a.subtreeFlags = je, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & Pn, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case ae:
        case he:
        case $e:
          a.type = qf(e.type);
          break;
        case Z:
          a.type = QS(e.type);
          break;
        case Qe:
          a.type = WS(e.type);
          break;
      }
      return a;
    }
    function gx(e, t) {
      e.flags &= Pn | jn;
      var a = e.alternate;
      if (a === null)
        e.childLanes = $, e.lanes = t, e.child = null, e.subtreeFlags = je, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = je, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function Sx(e, t, a) {
      var i;
      return e === Uh ? (i = yt, t === !0 && (i |= it, i |= Zt)) : i = Fe, wr && (i |= Tt), ui(F, null, null, i);
    }
    function JS(e, t, a, i, u, s) {
      var f = ae, p = e;
      if (typeof e == "function")
        KS(e) ? (f = Z, p = QS(p)) : p = qf(p);
      else if (typeof e == "string")
        f = q;
      else
        e: switch (e) {
          case Qr:
            return Bo(a.children, u, s, t);
          case ci:
            f = mn, u |= it, (u & yt) !== Fe && (u |= Zt);
            break;
          case fi:
            return Ex(a, u, s, t);
          case ce:
            return Cx(a, u, s, t);
          case pe:
            return Rx(a, u, s, t);
          case xn:
            return CR(a, u, s, t);
          case on:
          case St:
          case pn:
          case Tr:
          case dt:
          default: {
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case zi:
                  f = st;
                  break e;
                case T:
                  f = jt;
                  break e;
                case W:
                  f = Qe, p = WS(p);
                  break e;
                case ht:
                  f = ft;
                  break e;
                case et:
                  f = En, p = null;
                  break e;
              }
            var v = "";
            {
              (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
              var y = i ? Ze(i) : null;
              y && (v += `

Check the render method of \`` + y + "`.");
            }
            throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + v));
          }
        }
      var g = ui(f, a, t, u);
      return g.elementType = e, g.type = p, g.lanes = s, g._debugOwner = i, g;
    }
    function ZS(e, t, a) {
      var i = null;
      i = e._owner;
      var u = e.type, s = e.key, f = e.props, p = JS(u, s, f, i, t, a);
      return p._debugSource = e._source, p._debugOwner = e._owner, p;
    }
    function Bo(e, t, a, i) {
      var u = ui(ue, e, i, t);
      return u.lanes = a, u;
    }
    function Ex(e, t, a, i) {
      typeof e.id != "string" && S('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var u = ui(Ot, e, i, t | Tt);
      return u.elementType = fi, u.lanes = a, u.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, u;
    }
    function Cx(e, t, a, i) {
      var u = ui(Oe, e, i, t);
      return u.elementType = ce, u.lanes = a, u;
    }
    function Rx(e, t, a, i) {
      var u = ui(Vt, e, i, t);
      return u.elementType = pe, u.lanes = a, u;
    }
    function CR(e, t, a, i) {
      var u = ui(Ye, e, i, t);
      u.elementType = xn, u.lanes = a;
      var s = {
        isHidden: !1
      };
      return u.stateNode = s, u;
    }
    function eE(e, t, a) {
      var i = ui(fe, e, null, t);
      return i.lanes = a, i;
    }
    function Tx() {
      var e = ui(q, null, null, Fe);
      return e.elementType = "DELETED", e;
    }
    function bx(e) {
      var t = ui(ln, null, null, Fe);
      return t.stateNode = e, t;
    }
    function tE(e, t, a) {
      var i = e.children !== null ? e.children : [], u = ui(ee, i, e.key, t);
      return u.lanes = a, u.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, u;
    }
    function RR(e, t) {
      return e === null && (e = ui(ae, null, null, Fe)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function _x(e, t, a, i, u) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = Ay, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = Vn, this.eventTimes = Kc($), this.expirationTimes = Kc(Wt), this.pendingLanes = $, this.suspendedLanes = $, this.pingedLanes = $, this.expiredLanes = $, this.mutableReadLanes = $, this.finishedLanes = $, this.entangledLanes = $, this.entanglements = Kc($), this.identifierPrefix = i, this.onRecoverableError = u, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], f = 0; f < kd; f++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case Uh:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case Do:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function TR(e, t, a, i, u, s, f, p, v, y) {
      var g = new _x(e, t, a, p, v), k = Sx(t, s);
      g.current = k, k.stateNode = g;
      {
        var _ = {
          element: i,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        k.memoizedState = _;
      }
      return vg(k), g;
    }
    var nE = "18.3.1";
    function wx(e, t, a) {
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
    var rE, aE;
    rE = !1, aE = {};
    function bR(e) {
      if (!e)
        return li;
      var t = ro(e), a = o_(t);
      if (t.tag === Z) {
        var i = t.type;
        if (Al(i))
          return KE(t, i, a);
      }
      return a;
    }
    function xx(e, t) {
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
        if (u.mode & it) {
          var s = Ze(a) || "Component";
          if (!aE[s]) {
            aE[s] = !0;
            var f = er;
            try {
              Gt(u), a.mode & it ? S("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : S("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              f ? Gt(f) : bn();
            }
          }
        }
        return u.stateNode;
      }
    }
    function _R(e, t, a, i, u, s, f, p) {
      var v = !1, y = null;
      return TR(e, t, v, y, a, i, u, s, f);
    }
    function wR(e, t, a, i, u, s, f, p, v, y) {
      var g = !0, k = TR(a, i, g, e, u, s, f, p, v);
      k.context = bR(null);
      var _ = k.current, U = ba(), j = Po(_), V = Lu(U, j);
      return V.callback = t ?? null, No(_, V, j), z1(k, j, U), k;
    }
    function qp(e, t, a, i) {
      Sd(t, e);
      var u = t.current, s = ba(), f = Po(u);
      kc(f);
      var p = bR(a);
      t.context === null ? t.context = p : t.pendingContext = p, Gr && er !== null && !rE && (rE = !0, S(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, Ze(er) || "Unknown"));
      var v = Lu(s, f);
      v.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && S("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), v.callback = i);
      var y = No(u, v, f);
      return y !== null && (Cr(y, u, f, s), Xh(y, u, f)), f;
    }
    function Hm(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case q:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function kx(e) {
      switch (e.tag) {
        case F: {
          var t = e.stateNode;
          if (mu(t)) {
            var a = $v(t);
            F1(t, a);
          }
          break;
        }
        case Oe: {
          Uu(function() {
            var u = Ba(e, qe);
            if (u !== null) {
              var s = ba();
              Cr(u, e, qe, s);
            }
          });
          var i = qe;
          iE(e, i);
          break;
        }
      }
    }
    function xR(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = zd(a.retryLane, t));
    }
    function iE(e, t) {
      xR(e, t);
      var a = e.alternate;
      a && xR(a, t);
    }
    function Dx(e) {
      if (e.tag === Oe) {
        var t = po, a = Ba(e, t);
        if (a !== null) {
          var i = ba();
          Cr(a, e, t, i);
        }
        iE(e, t);
      }
    }
    function Ox(e) {
      if (e.tag === Oe) {
        var t = Po(e), a = Ba(e, t);
        if (a !== null) {
          var i = ba();
          Cr(a, e, t, i);
        }
        iE(e, t);
      }
    }
    function kR(e) {
      var t = ni(e);
      return t === null ? null : t.stateNode;
    }
    var DR = function(e) {
      return null;
    };
    function Lx(e) {
      return DR(e);
    }
    var OR = function(e) {
      return !1;
    };
    function Nx(e) {
      return OR(e);
    }
    var LR = null, NR = null, MR = null, zR = null, UR = null, AR = null, jR = null, FR = null, HR = null;
    {
      var PR = function(e, t, a) {
        var i = t[a], u = ut(e) ? e.slice() : at({}, e);
        return a + 1 === t.length ? (ut(u) ? u.splice(i, 1) : delete u[i], u) : (u[i] = PR(e[i], t, a + 1), u);
      }, VR = function(e, t) {
        return PR(e, t, 0);
      }, BR = function(e, t, a, i) {
        var u = t[i], s = ut(e) ? e.slice() : at({}, e);
        if (i + 1 === t.length) {
          var f = a[i];
          s[f] = s[u], ut(s) ? s.splice(u, 1) : delete s[u];
        } else
          s[u] = BR(
            // $FlowFixMe number or string is fine here
            e[u],
            t,
            a,
            i + 1
          );
        return s;
      }, $R = function(e, t, a) {
        if (t.length !== a.length) {
          Me("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              Me("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return BR(e, t, a, 0);
      }, YR = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var u = t[a], s = ut(e) ? e.slice() : at({}, e);
        return s[u] = YR(e[u], t, a + 1, i), s;
      }, IR = function(e, t, a) {
        return YR(e, t, 0, a);
      }, lE = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      LR = function(e, t, a, i) {
        var u = lE(e, t);
        if (u !== null) {
          var s = IR(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = at({}, e.memoizedProps);
          var f = Ba(e, qe);
          f !== null && Cr(f, e, qe, Wt);
        }
      }, NR = function(e, t, a) {
        var i = lE(e, t);
        if (i !== null) {
          var u = VR(i.memoizedState, a);
          i.memoizedState = u, i.baseState = u, e.memoizedProps = at({}, e.memoizedProps);
          var s = Ba(e, qe);
          s !== null && Cr(s, e, qe, Wt);
        }
      }, MR = function(e, t, a, i) {
        var u = lE(e, t);
        if (u !== null) {
          var s = $R(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = at({}, e.memoizedProps);
          var f = Ba(e, qe);
          f !== null && Cr(f, e, qe, Wt);
        }
      }, zR = function(e, t, a) {
        e.pendingProps = IR(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Ba(e, qe);
        i !== null && Cr(i, e, qe, Wt);
      }, UR = function(e, t) {
        e.pendingProps = VR(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = Ba(e, qe);
        a !== null && Cr(a, e, qe, Wt);
      }, AR = function(e, t, a) {
        e.pendingProps = $R(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Ba(e, qe);
        i !== null && Cr(i, e, qe, Wt);
      }, jR = function(e) {
        var t = Ba(e, qe);
        t !== null && Cr(t, e, qe, Wt);
      }, FR = function(e) {
        DR = e;
      }, HR = function(e) {
        OR = e;
      };
    }
    function Mx(e) {
      var t = Zr(e);
      return t === null ? null : t.stateNode;
    }
    function zx(e) {
      return null;
    }
    function Ux() {
      return er;
    }
    function Ax(e) {
      var t = e.findFiberByHostInstance, a = Se.ReactCurrentDispatcher;
      return gd({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: LR,
        overrideHookStateDeletePath: NR,
        overrideHookStateRenamePath: MR,
        overrideProps: zR,
        overridePropsDeletePath: UR,
        overridePropsRenamePath: AR,
        setErrorHandler: FR,
        setSuspenseHandler: HR,
        scheduleUpdate: jR,
        currentDispatcherRef: a,
        findHostInstanceByFiber: Mx,
        findFiberByHostInstance: t || zx,
        // React Refresh
        findHostInstancesForRefresh: dx,
        scheduleRefresh: cx,
        scheduleRoot: fx,
        setRefreshHandler: sx,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: Ux,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: nE
      });
    }
    var QR = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function uE(e) {
      this._internalRoot = e;
    }
    Pm.prototype.render = uE.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? S("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : Vm(arguments[1]) ? S("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && S("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== An) {
          var i = kR(t.current);
          i && i.parentNode !== a && S("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      qp(e, t, null, null);
    }, Pm.prototype.unmount = uE.prototype.unmount = function() {
      typeof arguments[0] == "function" && S("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        aR() && S("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Uu(function() {
          qp(null, e, null, null);
        }), QE(t);
      }
    };
    function jx(e, t) {
      if (!Vm(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      WR(e);
      var a = !1, i = !1, u = "", s = QR;
      t != null && (t.hydrate ? Me("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === or && S(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var f = _R(e, Uh, null, a, i, u, s);
      kh(f.current, e);
      var p = e.nodeType === An ? e.parentNode : e;
      return ep(p), new uE(f);
    }
    function Pm(e) {
      this._internalRoot = e;
    }
    function Fx(e) {
      e && eh(e);
    }
    Pm.prototype.unstable_scheduleHydration = Fx;
    function Hx(e, t, a) {
      if (!Vm(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      WR(e), t === void 0 && S("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, u = a != null && a.hydratedSources || null, s = !1, f = !1, p = "", v = QR;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (p = a.identifierPrefix), a.onRecoverableError !== void 0 && (v = a.onRecoverableError));
      var y = wR(t, null, e, Uh, i, s, f, p, v);
      if (kh(y.current, e), ep(e), u)
        for (var g = 0; g < u.length; g++) {
          var k = u[g];
          $_(y, k);
        }
      return new Pm(y);
    }
    function Vm(e) {
      return !!(e && (e.nodeType === Xr || e.nodeType === $i || e.nodeType === Jo));
    }
    function Gp(e) {
      return !!(e && (e.nodeType === Xr || e.nodeType === $i || e.nodeType === Jo || e.nodeType === An && e.nodeValue === " react-mount-point-unstable "));
    }
    function WR(e) {
      e.nodeType === Xr && e.tagName && e.tagName.toUpperCase() === "BODY" && S("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), fp(e) && (e._reactRootContainer ? S("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : S("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var Px = Se.ReactCurrentOwner, qR;
    qR = function(e) {
      if (e._reactRootContainer && e.nodeType !== An) {
        var t = kR(e._reactRootContainer.current);
        t && t.parentNode !== e && S("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = oE(e), u = !!(i && xo(i));
      u && !a && S("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === Xr && e.tagName && e.tagName.toUpperCase() === "BODY" && S("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function oE(e) {
      return e ? e.nodeType === $i ? e.documentElement : e.firstChild : null;
    }
    function GR() {
    }
    function Vx(e, t, a, i, u) {
      if (u) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var _ = Hm(f);
            s.call(_);
          };
        }
        var f = wR(
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
          GR
        );
        e._reactRootContainer = f, kh(f.current, e);
        var p = e.nodeType === An ? e.parentNode : e;
        return ep(p), Uu(), f;
      } else {
        for (var v; v = e.lastChild; )
          e.removeChild(v);
        if (typeof i == "function") {
          var y = i;
          i = function() {
            var _ = Hm(g);
            y.call(_);
          };
        }
        var g = _R(
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
          GR
        );
        e._reactRootContainer = g, kh(g.current, e);
        var k = e.nodeType === An ? e.parentNode : e;
        return ep(k), Uu(function() {
          qp(t, g, a, i);
        }), g;
      }
    }
    function Bx(e, t) {
      e !== null && typeof e != "function" && S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function Bm(e, t, a, i, u) {
      qR(a), Bx(u === void 0 ? null : u, "render");
      var s = a._reactRootContainer, f;
      if (!s)
        f = Vx(a, t, e, u, i);
      else {
        if (f = s, typeof u == "function") {
          var p = u;
          u = function() {
            var v = Hm(f);
            p.call(v);
          };
        }
        qp(t, f, e, u);
      }
      return Hm(f);
    }
    var XR = !1;
    function $x(e) {
      {
        XR || (XR = !0, S("findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node"));
        var t = Px.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || S("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", xt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === Xr ? e : xx(e, "findDOMNode");
    }
    function Yx(e, t, a) {
      if (S("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Gp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = fp(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return Bm(null, e, t, !0, a);
    }
    function Ix(e, t, a) {
      if (S("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Gp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = fp(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return Bm(null, e, t, !1, a);
    }
    function Qx(e, t, a, i) {
      if (S("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Gp(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !iu(e))
        throw new Error("parentComponent must be a valid React Component");
      return Bm(e, t, a, !1, i);
    }
    var KR = !1;
    function Wx(e) {
      if (KR || (KR = !0, S("unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot")), !Gp(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = fp(e) && e._reactRootContainer === void 0;
        t && S("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = oE(e), i = a && !xo(a);
          i && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return Uu(function() {
          Bm(null, null, e, !1, function() {
            e._reactRootContainer = null, QE(e);
          });
        }), !0;
      } else {
        {
          var u = oE(e), s = !!(u && xo(u)), f = e.nodeType === Xr && Gp(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", f ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    uy(kx), Fd(Dx), oy(Ox), nf(ga), Xv(qv), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && S("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), us(GT), kv(HS, H1, Uu);
    function qx(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Vm(t))
        throw new Error("Target container is not a DOM element.");
      return wx(e, t, null, a);
    }
    function Gx(e, t, a, i) {
      return Qx(e, t, a, i);
    }
    var sE = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [xo, _f, Dh, od, Zu, HS]
    };
    function Xx(e, t) {
      return sE.usingClientEntryPoint || S('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), jx(e, t);
    }
    function Kx(e, t, a) {
      return sE.usingClientEntryPoint || S('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), Hx(e, t, a);
    }
    function Jx(e) {
      return aR() && S("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Uu(e);
    }
    var Zx = Ax({
      findFiberByHostInstance: $s,
      bundleType: 1,
      version: nE,
      rendererPackageName: "react-dom"
    });
    if (!Zx && Yn && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var JR = window.location.protocol;
      /^(https?|file):$/.test(JR) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (JR === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    Wa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = sE, Wa.createPortal = qx, Wa.createRoot = Xx, Wa.findDOMNode = $x, Wa.flushSync = Jx, Wa.hydrate = Yx, Wa.hydrateRoot = Kx, Wa.render = Ix, Wa.unmountComponentAtNode = Wx, Wa.unstable_batchedUpdates = HS, Wa.unstable_renderSubtreeIntoContainer = Gx, Wa.version = nE, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }(), Wa;
}
var fT = {};
function dT() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (fT.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(dT);
    } catch (H) {
      console.error(H);
    }
  }
}
fT.NODE_ENV === "production" ? (dT(), mE.exports = fk()) : mE.exports = dk();
var pk = mE.exports, yE, vk = {}, Ym = pk;
if (vk.NODE_ENV === "production")
  yE = Ym.createRoot, Ym.hydrateRoot;
else {
  var oT = Ym.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  yE = function(H, Q) {
    oT.usingClientEntryPoint = !0;
    try {
      return Ym.createRoot(H, Q);
    } finally {
      oT.usingClientEntryPoint = !1;
    }
  };
}
const hk = (H) => {
  if (!H.designOptions || H.designOptions !== "custom_design") return;
  const Q = JSON.parse(H.customDesigns);
  document.documentElement.style.setProperty("--barn2-bundles-bundle-text-color", Q.bundleTextColor), document.documentElement.style.setProperty("--barn2-bundles-highlighted-text-color", Q.highlightedTextColor), document.documentElement.style.setProperty("--barn2-bundles-bundle-border-color", Q.bundleBorderColor), document.documentElement.style.setProperty("--barn2-bundles-highlighted-border-color", Q.highlightedBorderColor), document.documentElement.style.setProperty("--barn2-bundles-highlighted-color", Q.highlightedColor), document.documentElement.style.setProperty("--barn2-bundles-selected-text-color", Q.selectedTextColor), document.documentElement.style.setProperty("--barn2-bundles-selected-border-color", Q.selectedBorderColor), document.documentElement.style.setProperty("--barn2-bundles-selected-color", Q.selectedColor), document.documentElement.style.setProperty("--barn2-bundles-bundle-badge-color", Q.badgeBackgroundColor), document.documentElement.style.setProperty("--barn2-bundles-badge-text-color", Q.badgeTextColor), document.documentElement.style.setProperty("--barn2-bundles-table-color", Q.tableColor), document.documentElement.style.setProperty("--barn2-bundles-header-text-color", Q.headerTextColor), document.documentElement.style.setProperty("--barn2-bundles-background-color", Q.backgroundColor), document.documentElement.style.setProperty("--barn2-bundles-text-color", Q.textColor), document.documentElement.style.setProperty("--barn2-bundles-label-color", Q.labelColor), document.documentElement.style.setProperty("--barn2-bundles-label-text-color", Q.lebelTextColor), document.documentElement.style.setProperty("--barn2-bundles-border-color", Q.borderColor);
  let w = "0";
  switch (Q.cornerRadius) {
    case "slightlyRounded":
      w = "8px";
      break;
    case "fullyRounded":
      w = "15px";
      break;
    case "square":
    default:
      w = "0";
  }
  document.documentElement.style.setProperty("--barn2-bundles-corner-radius", w);
}, pT = () => {
  const H = document.querySelector(".product-form__input.product-form__quantity, quantity-selector-component.quantity-selector");
  H && H.style.removeProperty("display");
  const Q = document.querySelector(".product__info-container variant-selects, .product__info-wrapper variant-selects, .product-page-section variant-selects, .product__info-wrapper variant-radios, variant-picker.variant-picker");
  Q && Q.style.removeProperty("display");
}, $o = (H, Q) => {
  const w = document.querySelector('product-form.product-form form, product-form-component [action="/cart/add"]');
  if (!w) return;
  let Se = w.querySelector(`input[name="${H}"]`);
  Se ? Se.value = Q : (Se = document.createElement("input"), Se.type = "hidden", Se.name = H, Se.value = Q, w.appendChild(Se));
}, Im = (H, Q) => {
  const w = typeof Q == "number" ? Q : parseFloat(Q);
  if (isNaN(w)) return Q;
  const Se = {
    "{{amount}}": () => w % 1 === 0 ? w.toString() : w.toFixed(2),
    "{{amount_no_decimals}}": () => Math.round(w).toString(),
    "{{amount_with_comma_separator}}": () => (w % 1 === 0 ? w.toString() : w.toFixed(2)).replace(/\B(?=(\d{3})+(?!\d))/g, ","),
    "{{amount_no_decimals_with_comma_separator}}": () => Math.round(w).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
    "{{amount_with_apostrophe_separator}}": () => (w % 1 === 0 ? w.toString() : w.toFixed(2)).replace(/\B(?=(\d{3})+(?!\d))/g, "'"),
    "{{amount_no_decimals_with_space_separator}}": () => Math.round(w).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " "),
    "{{amount_with_space_separator}}": () => (w % 1 === 0 ? w.toString() : w.toFixed(2)).replace(/\B(?=(\d{3})+(?!\d))/g, " "),
    "{{amount_with_period_and_space_separator}}": () => (w % 1 === 0 ? w.toString() : w.toFixed(2)).replace(/\B(?=(\d{3})+(?!\d))/g, ". ")
  };
  for (const [Ge, Me] of Object.entries(Se))
    if (H.includes(Ge))
      return H.replace(Ge, Me());
  const be = w % 1 === 0 ? w.toString() : w.toFixed(2);
  return H.replace("{{amount}}", be);
};
var vT = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(H) {
  (function() {
    var Q = function() {
      function w() {
      }
      w.prototype = /* @__PURE__ */ Object.create(null);
      function Se(ae, F) {
        for (var ee = F.length, q = 0; q < ee; ++q)
          he(ae, F[q]);
      }
      var be = {}.hasOwnProperty;
      function Ge(ae, F) {
        ae[F] = !0;
      }
      function Me(ae, F) {
        if (F.toString !== Object.prototype.toString && !F.toString.toString().includes("[native code]")) {
          ae[F.toString()] = !0;
          return;
        }
        for (var ee in F)
          be.call(F, ee) && (ae[ee] = !!F[ee]);
      }
      var S = /\s+/;
      function We(ae, F) {
        for (var ee = F.split(S), q = ee.length, fe = 0; fe < q; ++fe)
          ae[ee[fe]] = !0;
      }
      function he(ae, F) {
        if (F) {
          var ee = typeof F;
          ee === "string" ? We(ae, F) : Array.isArray(F) ? Se(ae, F) : ee === "object" ? Me(ae, F) : ee === "number" && Ge(ae, F);
        }
      }
      function Z() {
        for (var ae = arguments.length, F = Array(ae), ee = 0; ee < ae; ee++)
          F[ee] = arguments[ee];
        var q = new w();
        Se(q, F);
        var fe = [];
        for (var ue in q)
          q[ue] && fe.push(ue);
        return fe.join(" ");
      }
      return Z;
    }();
    H.exports ? (Q.default = Q, H.exports = Q) : window.classNames = Q;
  })();
})(vT);
var mk = vT.exports;
const dE = /* @__PURE__ */ nk(mk);
function yk({
  bundleData: H,
  isInEditor: Q,
  currentVariant: w,
  storeDetails: Se
}) {
  var lt, I, Ce, oe;
  const [be, Ge] = At.useState(null), [Me, S] = At.useState([]), [We, he] = At.useState(), [Z, ae] = At.useState([]), [F, ee] = At.useState(((I = (lt = window.b2ProductData) == null ? void 0 : lt.product) == null ? void 0 : I.options) || []), [q, fe] = At.useState(((oe = (Ce = window.b2ProductData) == null ? void 0 : Ce.product) == null ? void 0 : oe.variants) || []), [ue, mn] = At.useState([]), jt = At.useRef(ue), st = At.useRef(be), Qe = (C) => {
    let M = "";
    return C.discount_type === "amount" ? M = /* @__PURE__ */ Be.jsxs("span", { children: [
      "Save ",
      Im(Se == null ? void 0 : Se.moneyFormat, C.discount)
    ] }) : M = /* @__PURE__ */ Be.jsxs("span", { children: [
      "Save ",
      C.discount,
      "%"
    ] }), C.discount || (M = /* @__PURE__ */ Be.jsx("span", { children: "Regular price" })), M;
  }, Ot = (C) => (Q ? window.b2ProductData.product.price : w.price) / 100, Oe = (C, M = "discounted") => {
    let ne = 0;
    if (be && ue && C.id === (be == null ? void 0 : be.id) ? ne = ue.reduce((Ue, Ae) => Ue + Ae.price / 100, 0) : ne = Ot() * C.quantity, M === "regular")
      return ft(ne);
    let Re = ne;
    if (C.discount_type === "percentage" && C.discount) {
      const _e = ne * C.discount / 100;
      Re = ne - _e;
    } else C.discount_type === "amount" && C.discount && (Re = ne - C.discount);
    return ft(Re);
  }, ft = (C) => {
    const M = Number(C), ne = Number(M.toFixed(2));
    return Im(Se == null ? void 0 : Se.moneyFormat, ne);
  }, $e = (C) => {
    const M = document.querySelector('.product-form__input.product-form__quantity input[type="number"], input[name="quantity"]');
    M ? (M.value = C, M.dispatchEvent(new Event("change", { bubbles: !0 }))) : $o("quantity", C);
  }, En = () => {
    const C = document.querySelector('.product-variant-id, [ref="variantId"]');
    C && (C.value = w.id, C.dispatchEvent(new Event("change", { bubbles: !0 })));
  }, Lt = (C) => be ? be.id === C.id : !1, ln = (C, M) => {
    if (!(ue != null && ue[C])) return "";
    const ne = ue[C].options;
    return (ne == null ? void 0 : ne[M]) || "";
  }, Vt = () => {
    if (be === null) return;
    const C = Array.from({ length: be.quantity }, () => ({
      available: w.available,
      id: w.id,
      options: [...w.options],
      price: w.price
    }));
    mn(C);
  }, gt = (C) => {
    new URL(window.location.href).searchParams.set("variant", C), window.dispatchEvent(new Event("popstate"));
    const ne = document.querySelector('.product-variant-id, [ref="variantId"]');
    ne && (ne.value = C, ne.dispatchEvent(new Event("change", { bubbles: !0 })));
  }, Ye = (C, M, ne) => {
    mn((Re) => {
      const _e = Re.map((Ae, Pe) => Pe === M ? {
        ...Ae,
        options: Ae.options.map(
          (nt, _t) => _t === ne ? C.target.value : nt
        )
      } : Ae), Ue = q.find((Ae) => Ae.options.every(
        (Pe, nt) => Pe === _e[M].options[nt]
      ));
      return gt(Ue.id), _e[M].id = Ue.id, _e[M].available = Ue.available, _e[M].price = Ue.price, _e;
    });
  };
  At.useEffect(() => {
    const C = Me.find((M) => M.highlighted);
    C && ($e(C.quantity), q.length > 1 ? Ge(C) : ($e(C.quantity), Nt()));
  }, [Me]), At.useEffect(() => {
    Vt();
  }, [be, w]), At.useEffect(() => {
    be !== null && ($e(be.quantity), Nt(), st.current = be);
  }, [be]), At.useEffect(() => {
    const C = (Re, _e = 5e3) => new Promise((Ue, Ae) => {
      const Pe = Date.now(), nt = () => {
        const _t = document.querySelector(Re);
        _t ? Ue(_t) : Date.now() - Pe > _e ? Ae(new Error(`Element ${Re} not found within ${_e}ms`)) : setTimeout(nt, 100);
      };
      nt();
    }), M = async () => {
      try {
        const Re = await C('form[action="/cart/add"] [type="submit"]'), _e = (Ue) => {
          const Ae = document.querySelector('[action="/cart/add"] [type="submit"]');
          if (!(Ae != null && Ae.classList.contains("b2-different-variants-selected")))
            return;
          Ue.preventDefault(), Ue.target.setAttribute("disabled", "disabled");
          const Pe = document.querySelector('.product-variant-id, [ref="variantId"]'), nt = jt.current, _t = st.current;
          let Cn = !1;
          const In = nt.filter((Bt) => Bt.id === parseInt(Pe.value) && !Cn ? (Cn = !0, !1) : !0).filter((Bt) => Bt.available).map((Bt) => Bt.id).reduce((Bt, sn) => (Bt[sn] = (Bt[sn] || 0) + 1, Bt), {}), Tn = {
            items: Object.entries(In).map(([Bt, sn]) => ({
              id: parseInt(Bt),
              quantity: sn,
              properties: {
                _barn2_discount_campaign_name: H.name,
                _barn2_discount_bundle_type: "volume_discount",
                _barn2_discount_volume_bundles: H.volumeBundles || ""
              }
            }))
          };
          fetch("/cart/add.js", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(Tn)
          }).then(() => {
            Ae.removeAttribute("disabled");
            const Bt = new SubmitEvent("submit", {
              bubbles: !0,
              cancelable: !0
            });
            (Ae == null ? void 0 : Ae.closest("form")).dispatchEvent(Bt);
          });
        };
        return Re.addEventListener("click", _e), () => {
          Re.removeEventListener("click", _e);
        };
      } catch {
        return () => {
        };
      }
    };
    let ne = null;
    return M().then((Re) => {
      ne = Re;
    }), () => {
      ne && ne();
    };
  }, []), At.useEffect(() => {
    if (ue.length === 0) return;
    jt.current = ue;
    const C = ue.every(
      (Re, _e, Ue) => Re.id === Ue[0].id
    ), M = document.querySelector('[action="/cart/add"] [type="submit"]'), ne = document.querySelector(".shopify-payment-button");
    C ? ($e(ue.length), M == null || M.classList.remove("b2-different-variants-selected"), ne && (ne.style.display = "")) : ($e(1), M == null || M.classList.add("b2-different-variants-selected"), ne && (ne.style.display = "none"));
  }, [ue]), At.useEffect(() => {
    S(JSON.parse(H.volumeBundles || [])), ae(JSON.parse(H.previewOptions || {})), he(H.layout);
  }, []);
  const Nt = (C) => {
    document.querySelector('product-form.product-form form, product-form-component [action="/cart/add"]') && ($o(
      "properties[_barn2_discount_campaign_name]",
      H.name || ""
    ), $o(
      "properties[_barn2_discount_bundle_type]",
      "volume_discount"
    ), $o(
      "properties[_barn2_discount_volume_bundles]",
      H.volumeBundles || ""
    ));
  };
  return /* @__PURE__ */ Be.jsxs("div", { className: "barn2-discount-bundles", children: [
    H.previewEnabled && /* @__PURE__ */ Be.jsxs(Be.Fragment, { children: [
      (Z == null ? void 0 : Z.title) && /* @__PURE__ */ Be.jsx("div", { className: "barn2-db-main-title", children: /* @__PURE__ */ Be.jsx("span", { children: Z == null ? void 0 : Z.title }) }),
      (Z == null ? void 0 : Z.description) && /* @__PURE__ */ Be.jsx("div", { className: "barn2-db-main-description", children: /* @__PURE__ */ Be.jsx("span", { children: Z == null ? void 0 : Z.description }) })
    ] }),
    /* @__PURE__ */ Be.jsx(
      "div",
      {
        className: dE(
          "barn2-discount-bundles-list",
          `barn2-dbs-layout-${We}`,
          `discount-columns-${Me.length}`
        ),
        children: Me.map((C, M) => /* @__PURE__ */ Be.jsxs(
          "div",
          {
            className: dE(
              "barn2-discount-bundle",
              {
                highlighted: C.highlighted,
                selected: Lt(C)
              }
            ),
            onClick: () => {
              Ge(C), (be == null ? void 0 : be.id) !== (C == null ? void 0 : C.id) && ($e(C.quantity), En());
            },
            children: [
              C.label.length > 0 && /* @__PURE__ */ Be.jsx("span", { className: "barn2-highlighted-text", children: C.label }),
              /* @__PURE__ */ Be.jsxs("div", { className: "barn2-dbs-top", children: [
                /* @__PURE__ */ Be.jsx("span", { className: "barn2-input-circle" }),
                /* @__PURE__ */ Be.jsxs("div", { className: "barn2-dbs-text-block-wrapper", children: [
                  /* @__PURE__ */ Be.jsxs("div", { className: "barn2-dbs-text-block", children: [
                    /* @__PURE__ */ Be.jsx("h4", { className: "barn2-dbs-bundle-title", children: C.description }),
                    Z.amountSaved && /* @__PURE__ */ Be.jsx("p", { children: Qe(C) })
                  ] }),
                  H.layout === "horizontal" && Lt(C) && q.length > 1 && vt()
                ] })
              ] }),
              /* @__PURE__ */ Be.jsxs("div", { className: "barn2-dbs-bottom", children: [
                /* @__PURE__ */ Be.jsx("span", { className: "barn2-dbs-price", children: Oe(C, "discounted") }),
                Z.showOriginalPrice && parseFloat(C.discount) !== 0 && /* @__PURE__ */ Be.jsx(
                  "span",
                  {
                    className: dE(
                      "barn2-dbs-regular-price",
                      {
                        "price-strike-through": parseFloat(C.discount) !== 0
                      }
                    ),
                    children: Oe(C, "regular")
                  }
                )
              ] })
            ]
          },
          M
        ))
      }
    ),
    H.layout === "vertical" && q.length > 1 && /* @__PURE__ */ Be.jsx("div", { className: "barn2-db-bars-wrapper", children: vt() })
  ] });
  function vt() {
    return /* @__PURE__ */ Be.jsx("div", { className: "barn2-db-bars", children: Array.from({ length: be == null ? void 0 : be.quantity }).map((C, M) => {
      var ne, Re;
      return /* @__PURE__ */ Be.jsxs("div", { children: [
        /* @__PURE__ */ Be.jsxs("div", { className: "barn2-db-bar", "data-variant-available": (ne = ue[M]) == null ? void 0 : ne.available, children: [
          /* @__PURE__ */ Be.jsx("span", { className: "barn2-db-bar-number", children: M + 1 }),
          /* @__PURE__ */ Be.jsx("div", { className: `barn2-dbs-select-variants barn2-dbs-variants-number-${F.length}`, children: F.map((_e, Ue) => /* @__PURE__ */ Be.jsx("div", { className: "barn2-dbs-variant", children: /* @__PURE__ */ Be.jsx(
            "select",
            {
              value: ln(M, Ue),
              onChange: (Ae) => {
                Ye(Ae, M, Ue);
              },
              children: _e.values.map((Ae, Pe) => /* @__PURE__ */ Be.jsx("option", { value: Ae, children: Ae }, Pe))
            }
          ) }, Ue)) })
        ] }),
        !((Re = ue[M]) != null && Re.available) && /* @__PURE__ */ Be.jsx("p", { className: "barn2-dbs-stock-unavailable", children: "Sorry, this is currently unavailable." })
      ] }, M);
    }) });
  }
}
function gk({
  bundleData: H,
  isInEditor: Q,
  currentVariant: w,
  storeDetails: Se
}) {
  const [be, Ge] = At.useState([]), [Me, S] = At.useState([]);
  At.useEffect(() => {
    Ge(JSON.parse(H.pricingTiers || [])), S(JSON.parse(H.previewOptions || {})), H && ae(), pT();
  }, []);
  const We = (F) => {
    let ee;
    return F.discount_type === "percentage" ? ee = F.discount + "% off" : ee = Im(Se == null ? void 0 : Se.moneyFormat, F.discount) + " off", /* @__PURE__ */ Be.jsx("span", { className: "b2-pricing-tier-discount", children: ee });
  }, he = () => (Q ? window.b2ProductData.product.price : w.price) / 100, Z = (F) => {
    let ee = he();
    if (F.discount_type === "percentage" && F.discount) {
      const q = he() * F.discount / 100;
      ee = he() - q;
    } else F.discount_type === "amount" && F.discount && (ee = he() - F.discount);
    return Math.max(0, ee.toFixed(2));
  }, ae = () => {
    document.querySelector('product-form.product-form form, product-form-component [action="/cart/add"]') && ($o(
      "properties[_barn2_discount_campaign_name]",
      H.name || ""
    ), $o(
      "properties[_barn2_discount_bundle_type]",
      "bulk_pricing"
    ), $o(
      "properties[_barn2_discount_pricing_tiers]",
      H.pricingTiers || ""
    ), $o(
      "properties[_barn2_discount_applies_to]",
      H.discountCalculation || "individual_products"
    ));
  };
  return H.previewEnabled ? /* @__PURE__ */ Be.jsxs("div", { className: "barn2-bulk-table-wrapper", children: [
    H.previewEnabled && /* @__PURE__ */ Be.jsxs(Be.Fragment, { children: [
      (Me == null ? void 0 : Me.title) && /* @__PURE__ */ Be.jsx("div", { className: "barn2-db-main-title", children: /* @__PURE__ */ Be.jsx("span", { children: Me == null ? void 0 : Me.title }) }),
      (Me == null ? void 0 : Me.description) && /* @__PURE__ */ Be.jsx("div", { className: "barn2-db-main-description", children: /* @__PURE__ */ Be.jsx("span", { children: Me == null ? void 0 : Me.description }) })
    ] }),
    /* @__PURE__ */ Be.jsx("div", { className: "barn2-bulk-table-container", children: /* @__PURE__ */ Be.jsxs("table", { className: "barn2-bulk-table", children: [
      /* @__PURE__ */ Be.jsx("thead", { children: /* @__PURE__ */ Be.jsxs("tr", { children: [
        /* @__PURE__ */ Be.jsx("th", { children: "Quantity" }),
        /* @__PURE__ */ Be.jsx("th", { children: "Discount" }),
        /* @__PURE__ */ Be.jsx("th", { children: "Price per item" })
      ] }) }),
      /* @__PURE__ */ Be.jsx("tbody", { children: be.length > 0 && be.map((F, ee) => /* @__PURE__ */ Be.jsxs("tr", { children: [
        /* @__PURE__ */ Be.jsxs("td", { children: [
          F.min_quantity,
          "-",
          F.max_quantity
        ] }),
        /* @__PURE__ */ Be.jsx("td", { children: /* @__PURE__ */ Be.jsx("span", { className: "discount-pill", children: We(F) }) }),
        /* @__PURE__ */ Be.jsx("td", { children: Im(Se == null ? void 0 : Se.moneyFormat, Z(F)) })
      ] }, ee)) })
    ] }) })
  ] }) : null;
}
function Sk({ bundleData: H, isInEditor: Q, storeDetails: w }) {
  const [Se, be] = At.useState(null), [Ge, Me] = At.useState(!1), S = () => {
    var F, ee;
    const ae = ((ee = (F = window.b2ProductData) == null ? void 0 : F.product) == null ? void 0 : ee.variants) || [];
    return ae.length > 0 ? ae[0] : 0;
  }, We = (ae) => {
    var q, fe;
    const ee = (((fe = (q = window.b2ProductData) == null ? void 0 : q.product) == null ? void 0 : fe.variants) || []).find((ue) => ue.id === Number(ae));
    ee && be(ee);
  }, he = () => {
    const ae = document.querySelector(".product-form__input.product-form__quantity, quantity-selector-component.quantity-selector");
    ae && (ae.style.display = "none");
  }, Z = () => {
    const ae = document.querySelector(".product__info-container variant-selects, .product__info-wrapper variant-selects, .product-page-section variant-selects, .product__info-wrapper variant-radios, variant-picker.variant-picker");
    ae && (ae.style.display = "none");
  };
  if (At.useEffect(() => {
    const F = new URLSearchParams(window.location.search).get("variant");
    F ? We(F) : be(S());
    const ee = new MutationObserver((fe) => {
      fe.forEach((ue) => {
        if (ue.type === "attributes" || ue.type === "childList") {
          const jt = new URLSearchParams(window.location.search).get("variant");
          jt && We(jt);
        }
      });
    }), q = document.querySelector("form[action*='/cart/add']");
    return q && ee.observe(q, { attributes: !0, childList: !0, subtree: !0 }), () => {
      ee.disconnect();
    };
  }, []), At.useEffect(() => {
    const ae = new MutationObserver((ee) => {
      ee.forEach((q) => {
        var ue;
        q.target.closest('form[action*="/cart/add"]') && q.type === "attributes" && q.attributeName === "class" && !q.target.classList.contains("loading") && (ue = q.oldValue) != null && ue.includes("loading") && Me(!0);
      });
    }), F = document.querySelector('form[action*="/cart/add"] button[type="submit"]');
    return F && ae.observe(F, {
      attributes: !0,
      attributeOldValue: !0
    }), () => {
      ae.disconnect();
    };
  }, []), At.useEffect(() => {
    hk(H), H.type === "volume_bundle" && (he(), Z());
  }, []), Se !== null) {
    if (Se !== null && H.type === "volume_bundle")
      return /* @__PURE__ */ Be.jsx(
        yk,
        {
          bundleData: H,
          isInEditor: Q,
          currentVariant: Se,
          storeDetails: w
        }
      );
    if (Se !== null && H.type === "bulk_pricing")
      return /* @__PURE__ */ Be.jsx(
        gk,
        {
          bundleData: H,
          isInEditor: Q,
          currentVariant: Se,
          storeDetails: w
        }
      );
  }
}
function Ek() {
  var ae, F, ee, q;
  const [H, Q] = At.useState((ee = (F = (ae = window == null ? void 0 : window.ShopifyAnalytics) == null ? void 0 : ae.meta) == null ? void 0 : F.product) == null ? void 0 : ee.id), [w, Se] = At.useState(null), [be, Ge] = At.useState(((q = window == null ? void 0 : window.b2ProductData) == null ? void 0 : q.isDesignMode) || !1), [Me, S] = At.useState({}), [We, he] = At.useState(!1), Z = async (fe) => {
    try {
      return await (await fetch("/apps/barn2-bundles-bulk-discounts/discountbundle", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          productId: fe,
          isInEditor: be
        })
      })).json();
    } catch {
      return he(!0), null;
    }
  };
  return At.useEffect(() => {
    (async () => {
      try {
        const ue = await Z(H);
        if ((ue == null ? void 0 : ue.success) === !1) {
          he(!0);
          return;
        } else
          Se(ue == null ? void 0 : ue.eligibleProductBundle), S(ue == null ? void 0 : ue.store);
      } catch {
      }
    })();
  }, [H, be]), At.useEffect(() => {
    We && pT();
  }, [We]), w && /* @__PURE__ */ Be.jsx(
    Sk,
    {
      bundleData: w,
      isInEditor: be,
      storeDetails: Me,
      unHideQuantityVariantBlocks: We
    }
  );
}
const pE = (H) => {
  yE(H).render(/* @__PURE__ */ Be.jsx(Ek, {}));
}, sT = document.getElementById("barn2_discounts_block");
if (sT)
  pE(sT);
else {
  const H = document.querySelector("product-form-component"), Q = document.querySelector('form[action="/cart/add"]');
  if (H) {
    const w = document.createElement("div");
    w.id = "barn2_discounts", w.classList.add("barn2_discounts"), H.insertBefore(w, H.firstChild), pE(w);
  } else if (Q) {
    const w = document.createElement("div");
    w.id = "barn2_discounts", w.classList.add("barn2_discounts"), Q.parentNode.insertBefore(w, Q), pE(w);
  }
}
