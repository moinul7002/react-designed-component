webpackHotUpdate_N_E("pages/speakers",{

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./node_modules/change-emitter/lib/index.js":
/*!**************************************************!*\
  !*** ./node_modules/change-emitter/lib/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var createChangeEmitter = exports.createChangeEmitter = function createChangeEmitter() {
  var currentListeners = [];
  var nextListeners = currentListeners;

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }

  function listen(listener) {
    if (typeof listener !== 'function') {
      throw new Error('Expected listener to be a function.');
    }

    var isSubscribed = true;

    ensureCanMutateNextListeners();
    nextListeners.push(listener);

    return function () {
      if (!isSubscribed) {
        return;
      }

      isSubscribed = false;

      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
    };
  }

  function emit() {
    currentListeners = nextListeners;
    var listeners = currentListeners;
    for (var i = 0; i < listeners.length; i++) {
      listeners[i].apply(listeners, arguments);
    }
  }

  return {
    listen: listen,
    emit: emit
  };
};

/***/ }),

/***/ "./node_modules/fbjs/lib/shallowEqual.js":
/*!***********************************************!*\
  !*** ./node_modules/fbjs/lib/shallowEqual.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 * 
 */

/*eslint-disable no-self-compare */



var hasOwnProperty = Object.prototype.hasOwnProperty;

/**
 * inlined Object.is polyfill to avoid requiring consumers ship their own
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 */
function is(x, y) {
  // SameValue algorithm
  if (x === y) {
    // Steps 1-5, 7-10
    // Steps 6.b-6.e: +0 != -0
    // Added the nonzero y check to make Flow happy, but it is redundant
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    // Step 6.a: NaN == NaN
    return x !== x && y !== y;
  }
}

/**
 * Performs equality by iterating through keys on an object and returning false
 * when any key has values which are not strictly equal between the arguments.
 * Returns true when the values of all keys are strictly equal.
 */
function shallowEqual(objA, objB) {
  if (is(objA, objB)) {
    return true;
  }

  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  // Test for A's keys different from B.
  for (var i = 0; i < keysA.length; i++) {
    if (!hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}

module.exports = shallowEqual;

/***/ }),

/***/ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
    childContextTypes: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    getDerivedStateFromProps: true,
    mixins: true,
    propTypes: true,
    type: true
};

var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true
};

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = getPrototypeOf && getPrototypeOf(Object);

function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components

        if (objectPrototype) {
            var inheritedComponent = getPrototypeOf(sourceComponent);
            if (inheritedComponent && inheritedComponent !== objectPrototype) {
                hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
            }
        }

        var keys = getOwnPropertyNames(sourceComponent);

        if (getOwnPropertySymbols) {
            keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }

        for (var i = 0; i < keys.length; ++i) {
            var key = keys[i];
            if (!REACT_STATICS[key] && !KNOWN_STATICS[key] && (!blacklist || !blacklist[key])) {
                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                try { // Avoid failures from read-only properties
                    defineProperty(targetComponent, key, descriptor);
                } catch (e) {}
            }
        }

        return targetComponent;
    }

    return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ "./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js":
/*!****************************************************************************!*\
  !*** ./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js ***!
  \****************************************************************************/
/*! exports provided: polyfill */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "polyfill", function() { return polyfill; });
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

function componentWillMount() {
  // Call this.constructor.gDSFP to support sub-classes.
  var state = this.constructor.getDerivedStateFromProps(this.props, this.state);
  if (state !== null && state !== undefined) {
    this.setState(state);
  }
}

function componentWillReceiveProps(nextProps) {
  // Call this.constructor.gDSFP to support sub-classes.
  // Use the setState() updater to ensure state isn't stale in certain edge cases.
  function updater(prevState) {
    var state = this.constructor.getDerivedStateFromProps(nextProps, prevState);
    return state !== null && state !== undefined ? state : null;
  }
  // Binding "this" is important for shallow renderer support.
  this.setState(updater.bind(this));
}

function componentWillUpdate(nextProps, nextState) {
  try {
    var prevProps = this.props;
    var prevState = this.state;
    this.props = nextProps;
    this.state = nextState;
    this.__reactInternalSnapshotFlag = true;
    this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(
      prevProps,
      prevState
    );
  } finally {
    this.props = prevProps;
    this.state = prevState;
  }
}

// React may warn about cWM/cWRP/cWU methods being deprecated.
// Add a flag to suppress these warnings for this special case.
componentWillMount.__suppressDeprecationWarning = true;
componentWillReceiveProps.__suppressDeprecationWarning = true;
componentWillUpdate.__suppressDeprecationWarning = true;

function polyfill(Component) {
  var prototype = Component.prototype;

  if (!prototype || !prototype.isReactComponent) {
    throw new Error('Can only polyfill class components');
  }

  if (
    typeof Component.getDerivedStateFromProps !== 'function' &&
    typeof prototype.getSnapshotBeforeUpdate !== 'function'
  ) {
    return Component;
  }

  // If new component APIs are defined, "unsafe" lifecycles won't be called.
  // Error if any of these lifecycles are present,
  // Because they would work differently between older and newer (16.3+) versions of React.
  var foundWillMountName = null;
  var foundWillReceivePropsName = null;
  var foundWillUpdateName = null;
  if (typeof prototype.componentWillMount === 'function') {
    foundWillMountName = 'componentWillMount';
  } else if (typeof prototype.UNSAFE_componentWillMount === 'function') {
    foundWillMountName = 'UNSAFE_componentWillMount';
  }
  if (typeof prototype.componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'componentWillReceiveProps';
  } else if (typeof prototype.UNSAFE_componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'UNSAFE_componentWillReceiveProps';
  }
  if (typeof prototype.componentWillUpdate === 'function') {
    foundWillUpdateName = 'componentWillUpdate';
  } else if (typeof prototype.UNSAFE_componentWillUpdate === 'function') {
    foundWillUpdateName = 'UNSAFE_componentWillUpdate';
  }
  if (
    foundWillMountName !== null ||
    foundWillReceivePropsName !== null ||
    foundWillUpdateName !== null
  ) {
    var componentName = Component.displayName || Component.name;
    var newApiName =
      typeof Component.getDerivedStateFromProps === 'function'
        ? 'getDerivedStateFromProps()'
        : 'getSnapshotBeforeUpdate()';

    throw Error(
      'Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n' +
        componentName +
        ' uses ' +
        newApiName +
        ' but also contains the following legacy lifecycles:' +
        (foundWillMountName !== null ? '\n  ' + foundWillMountName : '') +
        (foundWillReceivePropsName !== null
          ? '\n  ' + foundWillReceivePropsName
          : '') +
        (foundWillUpdateName !== null ? '\n  ' + foundWillUpdateName : '') +
        '\n\nThe above lifecycles should be removed. Learn more about this warning here:\n' +
        'https://fb.me/react-async-component-lifecycle-hooks'
    );
  }

  // React <= 16.2 does not support static getDerivedStateFromProps.
  // As a workaround, use cWM and cWRP to invoke the new static lifecycle.
  // Newer versions of React will ignore these lifecycles if gDSFP exists.
  if (typeof Component.getDerivedStateFromProps === 'function') {
    prototype.componentWillMount = componentWillMount;
    prototype.componentWillReceiveProps = componentWillReceiveProps;
  }

  // React <= 16.2 does not support getSnapshotBeforeUpdate.
  // As a workaround, use cWU to invoke the new lifecycle.
  // Newer versions of React will ignore that lifecycle if gSBU exists.
  if (typeof prototype.getSnapshotBeforeUpdate === 'function') {
    if (typeof prototype.componentDidUpdate !== 'function') {
      throw new Error(
        'Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype'
      );
    }

    prototype.componentWillUpdate = componentWillUpdate;

    var componentDidUpdate = prototype.componentDidUpdate;

    prototype.componentDidUpdate = function componentDidUpdatePolyfill(
      prevProps,
      prevState,
      maybeSnapshot
    ) {
      // 16.3+ will not execute our will-update method;
      // It will pass a snapshot value to did-update though.
      // Older versions will require our polyfilled will-update value.
      // We need to handle both cases, but can't just check for the presence of "maybeSnapshot",
      // Because for <= 15.x versions this might be a "prevContext" object.
      // We also can't just check "__reactInternalSnapshot",
      // Because get-snapshot might return a falsy value.
      // So check for the explicit __reactInternalSnapshotFlag flag to determine behavior.
      var snapshot = this.__reactInternalSnapshotFlag
        ? this.__reactInternalSnapshot
        : maybeSnapshot;

      componentDidUpdate.call(this, prevProps, prevState, snapshot);
    };
  }

  return Component;
}




/***/ }),

/***/ "./node_modules/recompose/dist/Recompose.esm.js":
/*!******************************************************!*\
  !*** ./node_modules/recompose/dist/Recompose.esm.js ***!
  \******************************************************/
/*! exports provided: mapProps, withProps, withPropsOnChange, withHandlers, defaultProps, renameProp, renameProps, flattenProp, withState, withStateHandlers, withReducer, branch, renderComponent, renderNothing, shouldUpdate, pure, onlyUpdateForKeys, onlyUpdateForPropTypes, withContext, getContext, lifecycle, toClass, toRenderProps, fromRenderProps, setStatic, setPropTypes, setDisplayName, compose, getDisplayName, wrapDisplayName, shallowEqual, isClassComponent, createSink, componentFromProp, nest, hoistStatics, componentFromStream, componentFromStreamWithConfig, mapPropsStream, mapPropsStreamWithConfig, createEventHandler, createEventHandlerWithConfig, setObservableConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapProps", function() { return mapProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withProps", function() { return withProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withPropsOnChange", function() { return withPropsOnChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withHandlers", function() { return withHandlers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultProps", function() { return defaultProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renameProp", function() { return renameProp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renameProps", function() { return renameProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flattenProp", function() { return flattenProp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withState", function() { return withState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withStateHandlers", function() { return withStateHandlers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withReducer", function() { return withReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "branch", function() { return branch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderComponent", function() { return renderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderNothing", function() { return renderNothing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shouldUpdate", function() { return shouldUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pure", function() { return pure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onlyUpdateForKeys", function() { return onlyUpdateForKeys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onlyUpdateForPropTypes", function() { return onlyUpdateForPropTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withContext", function() { return withContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getContext", function() { return getContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lifecycle", function() { return lifecycle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toClass", function() { return toClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toRenderProps", function() { return toRenderProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromRenderProps", function() { return fromRenderProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setStatic", function() { return setStatic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setPropTypes", function() { return setPropTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setDisplayName", function() { return setDisplayName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return compose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDisplayName", function() { return getDisplayName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapDisplayName", function() { return wrapDisplayName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isClassComponent", function() { return isClassComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSink", function() { return createSink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "componentFromProp", function() { return componentFromProp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nest", function() { return nest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hoistStatics", function() { return hoistStatics; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "componentFromStream", function() { return componentFromStream; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "componentFromStreamWithConfig", function() { return componentFromStreamWithConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapPropsStream", function() { return mapPropsStream; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapPropsStreamWithConfig", function() { return mapPropsStreamWithConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEventHandler", function() { return createEventHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEventHandlerWithConfig", function() { return createEventHandlerWithConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setObservableConfig", function() { return configureObservable; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var fbjs_lib_shallowEqual__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fbjs/lib/shallowEqual */ "./node_modules/fbjs/lib/shallowEqual.js");
/* harmony import */ var fbjs_lib_shallowEqual__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fbjs_lib_shallowEqual__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "shallowEqual", function() { return fbjs_lib_shallowEqual__WEBPACK_IMPORTED_MODULE_2___default.a; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react_lifecycles_compat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-lifecycles-compat */ "./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var change_emitter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! change-emitter */ "./node_modules/change-emitter/lib/index.js");
/* harmony import */ var change_emitter__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(change_emitter__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var symbol_observable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! symbol-observable */ "./node_modules/symbol-observable/es/index.js");










var setStatic = function setStatic(key, value) {
  return function (BaseComponent) {
    /* eslint-disable no-param-reassign */
    BaseComponent[key] = value;
    /* eslint-enable no-param-reassign */

    return BaseComponent;
  };
};

var setDisplayName = function setDisplayName(displayName) {
  return setStatic('displayName', displayName);
};

var getDisplayName = function getDisplayName(Component$$1) {
  if (typeof Component$$1 === 'string') {
    return Component$$1;
  }

  if (!Component$$1) {
    return undefined;
  }

  return Component$$1.displayName || Component$$1.name || 'Component';
};

var wrapDisplayName = function wrapDisplayName(BaseComponent, hocName) {
  return hocName + "(" + getDisplayName(BaseComponent) + ")";
};

var mapProps = function mapProps(propsMapper) {
  return function (BaseComponent) {
    var factory = Object(react__WEBPACK_IMPORTED_MODULE_0__["createFactory"])(BaseComponent);

    var MapProps = function MapProps(props) {
      return factory(propsMapper(props));
    };

    if (true) {
      return setDisplayName(wrapDisplayName(BaseComponent, 'mapProps'))(MapProps);
    }

    return MapProps;
  };
};

var withProps = function withProps(input) {
  var hoc = mapProps(function (props) {
    return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, typeof input === 'function' ? input(props) : input);
  });

  if (true) {
    return function (BaseComponent) {
      return setDisplayName(wrapDisplayName(BaseComponent, 'withProps'))(hoc(BaseComponent));
    };
  }

  return hoc;
};

var pick = function pick(obj, keys) {
  var result = {};

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];

    if (obj.hasOwnProperty(key)) {
      result[key] = obj[key];
    }
  }

  return result;
};

var withPropsOnChange = function withPropsOnChange(shouldMapOrKeys, propsMapper) {
  return function (BaseComponent) {
    var factory = Object(react__WEBPACK_IMPORTED_MODULE_0__["createFactory"])(BaseComponent);
    var shouldMap = typeof shouldMapOrKeys === 'function' ? shouldMapOrKeys : function (props, nextProps) {
      return !fbjs_lib_shallowEqual__WEBPACK_IMPORTED_MODULE_2___default()(pick(props, shouldMapOrKeys), pick(nextProps, shouldMapOrKeys));
    };

    var WithPropsOnChange =
    /*#__PURE__*/
    function (_Component) {
      Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(WithPropsOnChange, _Component);

      function WithPropsOnChange() {
        var _this;

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = _Component.call.apply(_Component, [this].concat(args)) || this;
        _this.state = {
          computedProps: propsMapper(_this.props),
          prevProps: _this.props
        };
        return _this;
      }

      WithPropsOnChange.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
        if (shouldMap(prevState.prevProps, nextProps)) {
          return {
            computedProps: propsMapper(nextProps),
            prevProps: nextProps
          };
        }

        return {
          prevProps: nextProps
        };
      };

      var _proto = WithPropsOnChange.prototype;

      _proto.render = function render() {
        return factory(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, this.props, this.state.computedProps));
      };

      return WithPropsOnChange;
    }(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

    Object(react_lifecycles_compat__WEBPACK_IMPORTED_MODULE_4__["polyfill"])(WithPropsOnChange);

    if (true) {
      return setDisplayName(wrapDisplayName(BaseComponent, 'withPropsOnChange'))(WithPropsOnChange);
    }

    return WithPropsOnChange;
  };
};

var mapValues = function mapValues(obj, func) {
  var result = {};
  /* eslint-disable no-restricted-syntax */

  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      result[key] = func(obj[key], key);
    }
  }
  /* eslint-enable no-restricted-syntax */


  return result;
};

var withHandlers = function withHandlers(handlers) {
  return function (BaseComponent) {
    var factory = Object(react__WEBPACK_IMPORTED_MODULE_0__["createFactory"])(BaseComponent);

    var WithHandlers =
    /*#__PURE__*/
    function (_Component) {
      Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(WithHandlers, _Component);

      function WithHandlers() {
        var _this;

        for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
          _args[_key] = arguments[_key];
        }

        _this = _Component.call.apply(_Component, [this].concat(_args)) || this;
        _this.handlers = mapValues(typeof handlers === 'function' ? handlers(_this.props) : handlers, function (createHandler) {
          return function () {
            var handler = createHandler(_this.props);

            if ( true && typeof handler !== 'function') {
              console.error( // eslint-disable-line no-console
              'withHandlers(): Expected a map of higher-order functions. ' + 'Refer to the docs for more info.');
            }

            return handler.apply(void 0, arguments);
          };
        });
        return _this;
      }

      var _proto = WithHandlers.prototype;

      _proto.render = function render() {
        return factory(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, this.props, this.handlers));
      };

      return WithHandlers;
    }(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

    if (true) {
      return setDisplayName(wrapDisplayName(BaseComponent, 'withHandlers'))(WithHandlers);
    }

    return WithHandlers;
  };
};

var defaultProps = function defaultProps(props) {
  return function (BaseComponent) {
    var factory = Object(react__WEBPACK_IMPORTED_MODULE_0__["createFactory"])(BaseComponent);

    var DefaultProps = function DefaultProps(ownerProps) {
      return factory(ownerProps);
    };

    DefaultProps.defaultProps = props;

    if (true) {
      return setDisplayName(wrapDisplayName(BaseComponent, 'defaultProps'))(DefaultProps);
    }

    return DefaultProps;
  };
};

var omit = function omit(obj, keys) {
  var rest = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, obj);

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];

    if (rest.hasOwnProperty(key)) {
      delete rest[key];
    }
  }

  return rest;
};

var renameProp = function renameProp(oldName, newName) {
  var hoc = mapProps(function (props) {
    var _extends2;

    return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, omit(props, [oldName]), (_extends2 = {}, _extends2[newName] = props[oldName], _extends2));
  });

  if (true) {
    return function (BaseComponent) {
      return setDisplayName(wrapDisplayName(BaseComponent, 'renameProp'))(hoc(BaseComponent));
    };
  }

  return hoc;
};

var keys = Object.keys;

var mapKeys = function mapKeys(obj, func) {
  return keys(obj).reduce(function (result, key) {
    var val = obj[key];
    /* eslint-disable no-param-reassign */

    result[func(val, key)] = val;
    /* eslint-enable no-param-reassign */

    return result;
  }, {});
};

var renameProps = function renameProps(nameMap) {
  var hoc = mapProps(function (props) {
    return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, omit(props, keys(nameMap)), mapKeys(pick(props, keys(nameMap)), function (_, oldName) {
      return nameMap[oldName];
    }));
  });

  if (true) {
    return function (BaseComponent) {
      return setDisplayName(wrapDisplayName(BaseComponent, 'renameProps'))(hoc(BaseComponent));
    };
  }

  return hoc;
};

var flattenProp = function flattenProp(propName) {
  return function (BaseComponent) {
    var factory = Object(react__WEBPACK_IMPORTED_MODULE_0__["createFactory"])(BaseComponent);

    var FlattenProp = function FlattenProp(props) {
      return factory(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, props[propName]));
    };

    if (true) {
      return setDisplayName(wrapDisplayName(BaseComponent, 'flattenProp'))(FlattenProp);
    }

    return FlattenProp;
  };
};

var withState = function withState(stateName, stateUpdaterName, initialState) {
  return function (BaseComponent) {
    var factory = Object(react__WEBPACK_IMPORTED_MODULE_0__["createFactory"])(BaseComponent);

    var WithState =
    /*#__PURE__*/
    function (_Component) {
      Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(WithState, _Component);

      function WithState() {
        var _this;

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = _Component.call.apply(_Component, [this].concat(args)) || this;
        _this.state = {
          stateValue: typeof initialState === 'function' ? initialState(_this.props) : initialState
        };

        _this.updateStateValue = function (updateFn, callback) {
          return _this.setState(function (_ref) {
            var stateValue = _ref.stateValue;
            return {
              stateValue: typeof updateFn === 'function' ? updateFn(stateValue) : updateFn
            };
          }, callback);
        };

        return _this;
      }

      var _proto = WithState.prototype;

      _proto.render = function render() {
        var _extends2;

        return factory(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, this.props, (_extends2 = {}, _extends2[stateName] = this.state.stateValue, _extends2[stateUpdaterName] = this.updateStateValue, _extends2)));
      };

      return WithState;
    }(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

    if (true) {
      return setDisplayName(wrapDisplayName(BaseComponent, 'withState'))(WithState);
    }

    return WithState;
  };
};

var withStateHandlers = function withStateHandlers(initialState, stateUpdaters) {
  return function (BaseComponent) {
    var factory = Object(react__WEBPACK_IMPORTED_MODULE_0__["createFactory"])(BaseComponent);

    var WithStateHandlers =
    /*#__PURE__*/
    function (_Component) {
      Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(WithStateHandlers, _Component);

      function WithStateHandlers() {
        var _this;

        for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
          _args[_key] = arguments[_key];
        }

        _this = _Component.call.apply(_Component, [this].concat(_args)) || this;
        _this.state = typeof initialState === 'function' ? initialState(_this.props) : initialState;
        _this.stateUpdaters = mapValues(stateUpdaters, function (handler) {
          return function (mayBeEvent) {
            for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
              args[_key2 - 1] = arguments[_key2];
            }

            // Having that functional form of setState can be called async
            // we need to persist SyntheticEvent
            if (mayBeEvent && typeof mayBeEvent.persist === 'function') {
              mayBeEvent.persist();
            }

            _this.setState(function (state, props) {
              return handler(state, props).apply(void 0, [mayBeEvent].concat(args));
            });
          };
        });
        return _this;
      }

      var _proto = WithStateHandlers.prototype;

      _proto.render = function render() {
        return factory(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, this.props, this.state, this.stateUpdaters));
      };

      return WithStateHandlers;
    }(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

    if (true) {
      return setDisplayName(wrapDisplayName(BaseComponent, 'withStateHandlers'))(WithStateHandlers);
    }

    return WithStateHandlers;
  };
};

var noop = function noop() {};

var withReducer = function withReducer(stateName, dispatchName, reducer, initialState) {
  return function (BaseComponent) {
    var factory = Object(react__WEBPACK_IMPORTED_MODULE_0__["createFactory"])(BaseComponent);

    var WithReducer =
    /*#__PURE__*/
    function (_Component) {
      Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(WithReducer, _Component);

      function WithReducer() {
        var _this;

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = _Component.call.apply(_Component, [this].concat(args)) || this;
        _this.state = {
          stateValue: _this.initializeStateValue()
        };

        _this.dispatch = function (action, callback) {
          if (callback === void 0) {
            callback = noop;
          }

          return _this.setState(function (_ref) {
            var stateValue = _ref.stateValue;
            return {
              stateValue: reducer(stateValue, action)
            };
          }, function () {
            return callback(_this.state.stateValue);
          });
        };

        return _this;
      }

      var _proto = WithReducer.prototype;

      _proto.initializeStateValue = function initializeStateValue() {
        if (initialState !== undefined) {
          return typeof initialState === 'function' ? initialState(this.props) : initialState;
        }

        return reducer(undefined, {
          type: '@@recompose/INIT'
        });
      };

      _proto.render = function render() {
        var _extends2;

        return factory(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, this.props, (_extends2 = {}, _extends2[stateName] = this.state.stateValue, _extends2[dispatchName] = this.dispatch, _extends2)));
      };

      return WithReducer;
    }(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

    if (true) {
      return setDisplayName(wrapDisplayName(BaseComponent, 'withReducer'))(WithReducer);
    }

    return WithReducer;
  };
};

var identity = function identity(Component$$1) {
  return Component$$1;
};

var branch = function branch(test, left, right) {
  if (right === void 0) {
    right = identity;
  }

  return function (BaseComponent) {
    var leftFactory;
    var rightFactory;

    var Branch = function Branch(props) {
      if (test(props)) {
        leftFactory = leftFactory || Object(react__WEBPACK_IMPORTED_MODULE_0__["createFactory"])(left(BaseComponent));
        return leftFactory(props);
      }

      rightFactory = rightFactory || Object(react__WEBPACK_IMPORTED_MODULE_0__["createFactory"])(right(BaseComponent));
      return rightFactory(props);
    };

    if (true) {
      return setDisplayName(wrapDisplayName(BaseComponent, 'branch'))(Branch);
    }

    return Branch;
  };
};

var renderComponent = function renderComponent(Component$$1) {
  return function (_) {
    var factory = Object(react__WEBPACK_IMPORTED_MODULE_0__["createFactory"])(Component$$1);

    var RenderComponent = function RenderComponent(props) {
      return factory(props);
    };

    if (true) {
      RenderComponent.displayName = wrapDisplayName(Component$$1, 'renderComponent');
    }

    return RenderComponent;
  };
};

var Nothing =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(Nothing, _Component);

  function Nothing() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = Nothing.prototype;

  _proto.render = function render() {
    return null;
  };

  return Nothing;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var renderNothing = function renderNothing(_) {
  return Nothing;
};

var shouldUpdate = function shouldUpdate(test) {
  return function (BaseComponent) {
    var factory = Object(react__WEBPACK_IMPORTED_MODULE_0__["createFactory"])(BaseComponent);

    var ShouldUpdate =
    /*#__PURE__*/
    function (_Component) {
      Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(ShouldUpdate, _Component);

      function ShouldUpdate() {
        return _Component.apply(this, arguments) || this;
      }

      var _proto = ShouldUpdate.prototype;

      _proto.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
        return test(this.props, nextProps);
      };

      _proto.render = function render() {
        return factory(this.props);
      };

      return ShouldUpdate;
    }(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

    if (true) {
      return setDisplayName(wrapDisplayName(BaseComponent, 'shouldUpdate'))(ShouldUpdate);
    }

    return ShouldUpdate;
  };
};

var pure = function pure(BaseComponent) {
  var hoc = shouldUpdate(function (props, nextProps) {
    return !fbjs_lib_shallowEqual__WEBPACK_IMPORTED_MODULE_2___default()(props, nextProps);
  });

  if (true) {
    return setDisplayName(wrapDisplayName(BaseComponent, 'pure'))(hoc(BaseComponent));
  }

  return hoc(BaseComponent);
};

var onlyUpdateForKeys = function onlyUpdateForKeys(propKeys) {
  var hoc = shouldUpdate(function (props, nextProps) {
    return !fbjs_lib_shallowEqual__WEBPACK_IMPORTED_MODULE_2___default()(pick(nextProps, propKeys), pick(props, propKeys));
  });

  if (true) {
    return function (BaseComponent) {
      return setDisplayName(wrapDisplayName(BaseComponent, 'onlyUpdateForKeys'))(hoc(BaseComponent));
    };
  }

  return hoc;
};

var onlyUpdateForPropTypes = function onlyUpdateForPropTypes(BaseComponent) {
  var propTypes = BaseComponent.propTypes;

  if (true) {
    if (!propTypes) {
      /* eslint-disable */
      console.error('A component without any `propTypes` was passed to ' + '`onlyUpdateForPropTypes()`. Check the implementation of the ' + ("component with display name \"" + getDisplayName(BaseComponent) + "\"."));
      /* eslint-enable */
    }
  }

  var propKeys = Object.keys(propTypes || {});
  var OnlyUpdateForPropTypes = onlyUpdateForKeys(propKeys)(BaseComponent);

  if (true) {
    return setDisplayName(wrapDisplayName(BaseComponent, 'onlyUpdateForPropTypes'))(OnlyUpdateForPropTypes);
  }

  return OnlyUpdateForPropTypes;
};

var withContext = function withContext(childContextTypes, getChildContext) {
  return function (BaseComponent) {
    var factory = Object(react__WEBPACK_IMPORTED_MODULE_0__["createFactory"])(BaseComponent);

    var WithContext =
    /*#__PURE__*/
    function (_Component) {
      Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(WithContext, _Component);

      function WithContext() {
        var _this;

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = _Component.call.apply(_Component, [this].concat(args)) || this;

        _this.getChildContext = function () {
          return getChildContext(_this.props);
        };

        return _this;
      }

      var _proto = WithContext.prototype;

      _proto.render = function render() {
        return factory(this.props);
      };

      return WithContext;
    }(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

    WithContext.childContextTypes = childContextTypes;

    if (true) {
      return setDisplayName(wrapDisplayName(BaseComponent, 'withContext'))(WithContext);
    }

    return WithContext;
  };
};

var getContext = function getContext(contextTypes) {
  return function (BaseComponent) {
    var factory = Object(react__WEBPACK_IMPORTED_MODULE_0__["createFactory"])(BaseComponent);

    var GetContext = function GetContext(ownerProps, context) {
      return factory(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, ownerProps, context));
    };

    GetContext.contextTypes = contextTypes;

    if (true) {
      return setDisplayName(wrapDisplayName(BaseComponent, 'getContext'))(GetContext);
    }

    return GetContext;
  };
};

var lifecycle = function lifecycle(spec) {
  return function (BaseComponent) {
    var factory = Object(react__WEBPACK_IMPORTED_MODULE_0__["createFactory"])(BaseComponent);

    if ( true && spec.hasOwnProperty('render')) {
      console.error('lifecycle() does not support the render method; its behavior is to ' + 'pass all props and state to the base component.');
    }

    var Lifecycle =
    /*#__PURE__*/
    function (_Component) {
      Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(Lifecycle, _Component);

      function Lifecycle() {
        return _Component.apply(this, arguments) || this;
      }

      var _proto = Lifecycle.prototype;

      _proto.render = function render() {
        return factory(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, this.props, this.state));
      };

      return Lifecycle;
    }(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

    Object.keys(spec).forEach(function (hook) {
      return Lifecycle.prototype[hook] = spec[hook];
    });

    if (true) {
      return setDisplayName(wrapDisplayName(BaseComponent, 'lifecycle'))(Lifecycle);
    }

    return Lifecycle;
  };
};

var isClassComponent = function isClassComponent(Component$$1) {
  return Boolean(Component$$1 && Component$$1.prototype && typeof Component$$1.prototype.render === 'function');
};

var toClass = function toClass(baseComponent) {
  var _class, _temp;

  return isClassComponent(baseComponent) ? baseComponent : (_temp = _class =
  /*#__PURE__*/
  function (_Component) {
    Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(ToClass, _Component);

    function ToClass() {
      return _Component.apply(this, arguments) || this;
    }

    var _proto = ToClass.prototype;

    _proto.render = function render() {
      if (typeof baseComponent === 'string') {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(baseComponent, this.props);
      }

      return baseComponent(this.props, this.context);
    };

    return ToClass;
  }(react__WEBPACK_IMPORTED_MODULE_0__["Component"]), _class.displayName = getDisplayName(baseComponent), _class.propTypes = baseComponent.propTypes, _class.contextTypes = baseComponent.contextTypes, _class.defaultProps = baseComponent.defaultProps, _temp);
};

function toRenderProps(hoc) {
  var RenderPropsComponent = function RenderPropsComponent(props) {
    return props.children(props);
  };

  return hoc(RenderPropsComponent);
}

var fromRenderProps = function fromRenderProps(RenderPropsComponent, propsMapper, renderPropName) {
  if (renderPropName === void 0) {
    renderPropName = 'children';
  }

  return function (BaseComponent) {
    var baseFactory = react__WEBPACK_IMPORTED_MODULE_0___default.a.createFactory(BaseComponent);
    var renderPropsFactory = react__WEBPACK_IMPORTED_MODULE_0___default.a.createFactory(RenderPropsComponent);

    var FromRenderProps = function FromRenderProps(ownerProps) {
      var _renderPropsFactory;

      return renderPropsFactory((_renderPropsFactory = {}, _renderPropsFactory[renderPropName] = function () {
        return baseFactory(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, ownerProps, propsMapper.apply(void 0, arguments)));
      }, _renderPropsFactory));
    };

    if (true) {
      return setDisplayName(wrapDisplayName(BaseComponent, 'fromRenderProps'))(FromRenderProps);
    }

    return FromRenderProps;
  };
};

var setPropTypes = function setPropTypes(propTypes) {
  return setStatic('propTypes', propTypes);
};

var compose = function compose() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(void 0, arguments));
    };
  }, function (arg) {
    return arg;
  });
};

var createSink = function createSink(callback) {
  var Sink =
  /*#__PURE__*/
  function (_Component) {
    Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(Sink, _Component);

    function Sink() {
      var _this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _Component.call.apply(_Component, [this].concat(args)) || this;
      _this.state = {};
      return _this;
    }

    Sink.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps) {
      callback(nextProps);
      return null;
    };

    var _proto = Sink.prototype;

    _proto.render = function render() {
      return null;
    };

    return Sink;
  }(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

  Object(react_lifecycles_compat__WEBPACK_IMPORTED_MODULE_4__["polyfill"])(Sink);
  return Sink;
};

var componentFromProp = function componentFromProp(propName) {
  var Component$$1 = function Component$$1(props) {
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(props[propName], omit(props, [propName]));
  };

  Component$$1.displayName = "componentFromProp(" + propName + ")";
  return Component$$1;
};

var nest = function nest() {
  for (var _len = arguments.length, Components = new Array(_len), _key = 0; _key < _len; _key++) {
    Components[_key] = arguments[_key];
  }

  var factories = Components.map(react__WEBPACK_IMPORTED_MODULE_0__["createFactory"]);

  var Nest = function Nest(_ref) {
    var children = _ref.children,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_5__["default"])(_ref, ["children"]);

    return factories.reduceRight(function (child, factory) {
      return factory(props, child);
    }, children);
  };

  if (true) {
    var displayNames = Components.map(getDisplayName);
    Nest.displayName = "nest(" + displayNames.join(', ') + ")";
  }

  return Nest;
};

var hoistStatics = function hoistStatics(higherOrderComponent, blacklist) {
  return function (BaseComponent) {
    var NewComponent = higherOrderComponent(BaseComponent);
    hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6___default()(NewComponent, BaseComponent, blacklist);
    return NewComponent;
  };
};

var _config = {
  fromESObservable: null,
  toESObservable: null
};

var configureObservable = function configureObservable(c) {
  _config = c;
};

var config = {
  fromESObservable: function fromESObservable(observable) {
    return typeof _config.fromESObservable === 'function' ? _config.fromESObservable(observable) : observable;
  },
  toESObservable: function toESObservable(stream) {
    return typeof _config.toESObservable === 'function' ? _config.toESObservable(stream) : stream;
  }
};

var componentFromStreamWithConfig = function componentFromStreamWithConfig(config$$1) {
  return function (propsToVdom) {
    return (
      /*#__PURE__*/
      function (_Component) {
        Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(ComponentFromStream, _Component);

        function ComponentFromStream() {
          var _config$fromESObserva;

          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.state = {
            vdom: null
          };
          _this.propsEmitter = Object(change_emitter__WEBPACK_IMPORTED_MODULE_7__["createChangeEmitter"])();
          _this.props$ = config$$1.fromESObservable((_config$fromESObserva = {
            subscribe: function subscribe(observer) {
              var unsubscribe = _this.propsEmitter.listen(function (props) {
                if (props) {
                  observer.next(props);
                } else {
                  observer.complete();
                }
              });

              return {
                unsubscribe: unsubscribe
              };
            }
          }, _config$fromESObserva[symbol_observable__WEBPACK_IMPORTED_MODULE_8__["default"]] = function () {
            return this;
          }, _config$fromESObserva));
          _this.vdom$ = config$$1.toESObservable(propsToVdom(_this.props$));
          return _this;
        }

        var _proto = ComponentFromStream.prototype;

        _proto.componentWillMount = function componentWillMount() {
          var _this2 = this;

          // Subscribe to child prop changes so we know when to re-render
          this.subscription = this.vdom$.subscribe({
            next: function next(vdom) {
              _this2.setState({
                vdom: vdom
              });
            }
          });
          this.propsEmitter.emit(this.props);
        };

        _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
          // Receive new props from the owner
          this.propsEmitter.emit(nextProps);
        };

        _proto.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
          return nextState.vdom !== this.state.vdom;
        };

        _proto.componentWillUnmount = function componentWillUnmount() {
          // Call without arguments to complete stream
          this.propsEmitter.emit(); // Clean-up subscription before un-mounting

          this.subscription.unsubscribe();
        };

        _proto.render = function render() {
          return this.state.vdom;
        };

        return ComponentFromStream;
      }(react__WEBPACK_IMPORTED_MODULE_0__["Component"])
    );
  };
};

var componentFromStream = function componentFromStream(propsToVdom) {
  return componentFromStreamWithConfig(config)(propsToVdom);
};

var identity$1 = function identity(t) {
  return t;
};

var mapPropsStreamWithConfig = function mapPropsStreamWithConfig(config$$1) {
  var componentFromStream$$1 = componentFromStreamWithConfig({
    fromESObservable: identity$1,
    toESObservable: identity$1
  });
  return function (transform) {
    return function (BaseComponent) {
      var factory = Object(react__WEBPACK_IMPORTED_MODULE_0__["createFactory"])(BaseComponent);
      var fromESObservable = config$$1.fromESObservable,
          toESObservable = config$$1.toESObservable;
      return componentFromStream$$1(function (props$) {
        var _ref;

        return _ref = {
          subscribe: function subscribe(observer) {
            var subscription = toESObservable(transform(fromESObservable(props$))).subscribe({
              next: function next(childProps) {
                return observer.next(factory(childProps));
              }
            });
            return {
              unsubscribe: function unsubscribe() {
                return subscription.unsubscribe();
              }
            };
          }
        }, _ref[symbol_observable__WEBPACK_IMPORTED_MODULE_8__["default"]] = function () {
          return this;
        }, _ref;
      });
    };
  };
};

var mapPropsStream = function mapPropsStream(transform) {
  var hoc = mapPropsStreamWithConfig(config)(transform);

  if (true) {
    return function (BaseComponent) {
      return setDisplayName(wrapDisplayName(BaseComponent, 'mapPropsStream'))(hoc(BaseComponent));
    };
  }

  return hoc;
};

var createEventHandlerWithConfig = function createEventHandlerWithConfig(config$$1) {
  return function () {
    var _config$fromESObserva;

    var emitter = Object(change_emitter__WEBPACK_IMPORTED_MODULE_7__["createChangeEmitter"])();
    var stream = config$$1.fromESObservable((_config$fromESObserva = {
      subscribe: function subscribe(observer) {
        var unsubscribe = emitter.listen(function (value) {
          return observer.next(value);
        });
        return {
          unsubscribe: unsubscribe
        };
      }
    }, _config$fromESObserva[symbol_observable__WEBPACK_IMPORTED_MODULE_8__["default"]] = function () {
      return this;
    }, _config$fromESObserva));
    return {
      handler: emitter.emit,
      stream: stream
    };
  };
};
var createEventHandler = createEventHandlerWithConfig(config);

// Higher-order component helpers




/***/ }),

/***/ "./node_modules/symbol-observable/es/index.js":
/*!****************************************************!*\
  !*** ./node_modules/symbol-observable/es/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global, module) {/* harmony import */ var _ponyfill_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ponyfill.js */ "./node_modules/symbol-observable/es/ponyfill.js");
/* global window */


var root;

if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (true) {
  root = module;
} else {}

var result = Object(_ponyfill_js__WEBPACK_IMPORTED_MODULE_0__["default"])(root);
/* harmony default export */ __webpack_exports__["default"] = (result);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../next/dist/compiled/webpack/global.js */ "./node_modules/next/dist/compiled/webpack/global.js"), __webpack_require__(/*! ./../../next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/symbol-observable/es/ponyfill.js":
/*!*******************************************************!*\
  !*** ./node_modules/symbol-observable/es/ponyfill.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return symbolObservablePonyfill; });
function symbolObservablePonyfill(root) {
	var result;
	var Symbol = root.Symbol;

	if (typeof Symbol === 'function') {
		if (Symbol.observable) {
			result = Symbol.observable;
		} else {
			result = Symbol('observable');
			Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
};


/***/ }),

/***/ "./pages/speakers.js":
/*!***************************!*\
  !*** ./pages/speakers.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_components_Speakers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/components/Speakers */ "./src/components/Speakers/index.js");
/* harmony import */ var _src_layouts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/layouts */ "./src/layouts/index.js");


var _jsxFileName = "J:\\react-search-designed-component\\pages\\speakers.js",
    _this = undefined;




var Page = function Page() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_layouts__WEBPACK_IMPORTED_MODULE_2__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_Speakers__WEBPACK_IMPORTED_MODULE_1__["default"], {
        bgColor: "bg-gray-500"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, _this);
};

_c = Page;
/* harmony default export */ __webpack_exports__["default"] = (Page);

var _c;

$RefreshReg$(_c, "Page");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./src/HOCs/withRequest.js":
/*!*********************************!*\
  !*** ./src/HOCs/withRequest.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var J_react_search_designed_component_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var J_react_search_designed_component_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var J_react_search_designed_component_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(J_react_search_designed_component_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var J_react_search_designed_component_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reducers */ "./src/reducers/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../actions */ "./src/actions/index.js");





var _jsxFileName = "J:\\react-search-designed-component\\src\\HOCs\\withRequest.js",
    _this = undefined;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(J_react_search_designed_component_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var withRequest = function withRequest(baseUrl, routeName) {
  return function (Component) {
    var _s = $RefreshSig$();

    return _s(function (props) {
      _s();

      var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_4__["useReducer"])(_reducers__WEBPACK_IMPORTED_MODULE_6__["default"], {
        records: [],
        status: _reducers__WEBPACK_IMPORTED_MODULE_6__["REQUEST_STATUS"].LOADING,
        error: null
      }),
          _useReducer$ = _useReducer[0],
          records = _useReducer$.records,
          status = _useReducer$.status,
          error = _useReducer$.error,
          dispatch = _useReducer[1];

      Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
        var fetchData = /*#__PURE__*/function () {
          var _ref = Object(J_react_search_designed_component_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/J_react_search_designed_component_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee() {
            var response;
            return J_react_search_designed_component_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.prev = 0;
                    _context.next = 3;
                    return axios__WEBPACK_IMPORTED_MODULE_5___default.a.get("".concat(baseUrl, "/").concat(routeName));

                  case 3:
                    response = _context.sent;
                    dispatch({
                      records: response.data,
                      type: _actions__WEBPACK_IMPORTED_MODULE_7__["GET_ALL_SUCCESS"]
                    });
                    _context.next = 10;
                    break;

                  case 7:
                    _context.prev = 7;
                    _context.t0 = _context["catch"](0);
                    dispatch({
                      type: _actions__WEBPACK_IMPORTED_MODULE_7__["GET_ALL_FAILURE"],
                      error: _context.t0
                    });

                  case 10:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, null, [[0, 7]]);
          }));

          return function fetchData() {
            return _ref.apply(this, arguments);
          };
        }();

        fetchData();
      }, [baseUrl, routeName]);
      var propsLocal = {
        records: records,
        status: status,
        error: error,
        put: function () {
          var _put = Object(J_react_search_designed_component_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/J_react_search_designed_component_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee2(record) {
            return J_react_search_designed_component_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.prev = 0;
                    _context2.next = 3;
                    return axios__WEBPACK_IMPORTED_MODULE_5___default.a.put("".concat(baseUrl, "/").concat(routeName, "/").concat(record.id), record);

                  case 3:
                    dispatch({
                      type: _actions__WEBPACK_IMPORTED_MODULE_7__["PUT_SUCCESS"],
                      singleRecord: record
                    });
                    _context2.next = 9;
                    break;

                  case 6:
                    _context2.prev = 6;
                    _context2.t0 = _context2["catch"](0);
                    dispatch({
                      type: _actions__WEBPACK_IMPORTED_MODULE_7__["PUT_FAILURE"],
                      error: _context2.t0
                    });

                  case 9:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, null, [[0, 6]]);
          }));

          function put(_x) {
            return _put.apply(this, arguments);
          }

          return put;
        }()
      };
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Component, _objectSpread(_objectSpread({}, props), propsLocal), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 10
      }, _this);
    }, "to6ZE4cp0O5ABh6IXZAdwYu2Wx4=");
  };
};

/* harmony default export */ __webpack_exports__["default"] = (withRequest);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./src/HOCs/withSpecialMessage.js":
/*!****************************************!*\
  !*** ./src/HOCs/withSpecialMessage.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var J_react_search_designed_component_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



var _jsxFileName = "J:\\react-search-designed-component\\src\\HOCs\\withSpecialMessage.js",
    _this = undefined;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(J_react_search_designed_component_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var withSpecialMessage = function withSpecialMessage() {
  return function (Component) {
    return function (props) {
      var specialMessage = "Talk on Angular Cancelled at 10:30AM";
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Component, _objectSpread(_objectSpread({}, props), {}, {
        specialMessage: specialMessage
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 5,
        columnNumber: 10
      }, _this);
    };
  };
};

/* harmony default export */ __webpack_exports__["default"] = (withSpecialMessage);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./src/RPs/request.js":
false,

/***/ "./src/RPs/specialMessage.js":
false,

/***/ "./src/components/Speakers/index.js":
/*!******************************************!*\
  !*** ./src/components/Speakers/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var J_react_search_designed_component_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var J_react_search_designed_component_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(J_react_search_designed_component_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var J_react_search_designed_component_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var J_react_search_designed_component_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _SearchBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../SearchBar */ "./src/components/SearchBar/index.js");
/* harmony import */ var _singleSpeaker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./singleSpeaker */ "./src/components/Speakers/singleSpeaker.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../reducers */ "./src/reducers/index.js");
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");
/* harmony import */ var _HOCs_withRequest__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../HOCs/withRequest */ "./src/HOCs/withRequest.js");
/* harmony import */ var _HOCs_withSpecialMessage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../HOCs/withSpecialMessage */ "./src/HOCs/withSpecialMessage.js");





var _jsxFileName = "J:\\react-search-designed-component\\src\\components\\Speakers\\index.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(J_react_search_designed_component_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





 //HOCs




var Speakers = function Speakers(_ref) {
  _s();

  var speakers = _ref.records,
      status = _ref.status,
      error = _ref.error,
      put = _ref.put,
      bgColor = _ref.bgColor,
      specialMessage = _ref.specialMessage;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(""),
      searchQuery = _useState[0],
      setSearchQuery = _useState[1];

  var success = status === _reducers__WEBPACK_IMPORTED_MODULE_7__["REQUEST_STATUS"].SUCCESS;
  var isLoading = status === _reducers__WEBPACK_IMPORTED_MODULE_7__["REQUEST_STATUS"].LOADING;
  var isError = status === _reducers__WEBPACK_IMPORTED_MODULE_7__["REQUEST_STATUS"].ERROR;

  var toggleButtonHandler = /*#__PURE__*/function () {
    var _ref2 = Object(J_react_search_designed_component_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/J_react_search_designed_component_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(speakerRecord) {
      return J_react_search_designed_component_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              put(_objectSpread(_objectSpread({}, speakerRecord), {}, {
                isFavorite: !speakerRecord.isFavorite
              }));

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function toggleButtonHandler(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var mapSpeakers = speakers.filter(function (record) {
    var targetString = "".concat(record.lastName, " ").concat(record.firstName).toLowerCase();
    return searchQuery.length === 0 ? true : targetString.includes(searchQuery.toLowerCase());
  }).map(function (single) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_singleSpeaker__WEBPACK_IMPORTED_MODULE_6__["default"], _objectSpread(_objectSpread({}, single), {}, {
      toggleButton: function toggleButton() {
        return toggleButtonHandler(single);
      }
    }), single.id, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }, _this);
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_SearchBar__WEBPACK_IMPORTED_MODULE_5__["default"], {
      searchQuery: searchQuery,
      setSearchQuery: setSearchQuery
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }, _this), specialMessage && specialMessage.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "bg-orange-100 border-l-8 border-orange-500 text-orange-700 p-4 text-2xl",
      role: "alert",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "font-bold",
        children: "Special Message"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: specialMessage
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }, _this), isLoading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: "Loading..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 21
    }, _this), isError && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: ["Loading error... Is the json-server up and running? (try \"npm run json-server\" at your terminal) ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 42
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
        children: ["ERROR: ", error.message]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }, _this), success && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-12",
      children: mapSpeakers
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 50,
    columnNumber: 5
  }, _this);
};

_s(Speakers, "4/Qdl0R3tQNJqUS4eMrvY/uMU/4=");

_c = Speakers;
/* harmony default export */ __webpack_exports__["default"] = (Object(recompose__WEBPACK_IMPORTED_MODULE_8__["compose"])(Object(_HOCs_withSpecialMessage__WEBPACK_IMPORTED_MODULE_10__["default"])(), Object(_HOCs_withRequest__WEBPACK_IMPORTED_MODULE_9__["default"])("http://localhost:4000", "speakers"))(Speakers));

var _c;

$RefreshReg$(_c, "Speakers");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/Speakers/indexRP.js":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pbmhlcml0c0xvb3NlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2NoYW5nZS1lbWl0dGVyL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2ZianMvbGliL3NoYWxsb3dFcXVhbC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hvaXN0LW5vbi1yZWFjdC1zdGF0aWNzL2Rpc3QvaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MuY2pzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtbGlmZWN5Y2xlcy1jb21wYXQvcmVhY3QtbGlmZWN5Y2xlcy1jb21wYXQuZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWNvbXBvc2UvZGlzdC9SZWNvbXBvc2UuZXNtLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvc3ltYm9sLW9ic2VydmFibGUvZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9zeW1ib2wtb2JzZXJ2YWJsZS9lcy9wb255ZmlsbC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3BlYWtlcnMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9IT0NzL3dpdGhSZXF1ZXN0LmpzIiwid2VicGFjazovL19OX0UvLi9zcmMvSE9Dcy93aXRoU3BlY2lhbE1lc3NhZ2UuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1NwZWFrZXJzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlBhZ2UiLCJ3aXRoUmVxdWVzdCIsImJhc2VVcmwiLCJyb3V0ZU5hbWUiLCJDb21wb25lbnQiLCJwcm9wcyIsInVzZVJlZHVjZXIiLCJSZXF1ZXN0UmVkdWNlciIsInJlY29yZHMiLCJzdGF0dXMiLCJSRVFVRVNUX1NUQVRVUyIsIkxPQURJTkciLCJlcnJvciIsImRpc3BhdGNoIiwidXNlRWZmZWN0IiwiZmV0Y2hEYXRhIiwiYXhpb3MiLCJnZXQiLCJyZXNwb25zZSIsImRhdGEiLCJ0eXBlIiwiR0VUX0FMTF9TVUNDRVNTIiwiR0VUX0FMTF9GQUlMVVJFIiwicHJvcHNMb2NhbCIsInB1dCIsInJlY29yZCIsImlkIiwiUFVUX1NVQ0NFU1MiLCJzaW5nbGVSZWNvcmQiLCJQVVRfRkFJTFVSRSIsIndpdGhTcGVjaWFsTWVzc2FnZSIsInNwZWNpYWxNZXNzYWdlIiwiU3BlYWtlcnMiLCJzcGVha2VycyIsImJnQ29sb3IiLCJ1c2VTdGF0ZSIsInNlYXJjaFF1ZXJ5Iiwic2V0U2VhcmNoUXVlcnkiLCJzdWNjZXNzIiwiU1VDQ0VTUyIsImlzTG9hZGluZyIsImlzRXJyb3IiLCJFUlJPUiIsInRvZ2dsZUJ1dHRvbkhhbmRsZXIiLCJzcGVha2VyUmVjb3JkIiwiaXNGYXZvcml0ZSIsIm1hcFNwZWFrZXJzIiwiZmlsdGVyIiwidGFyZ2V0U3RyaW5nIiwibGFzdE5hbWUiLCJmaXJzdE5hbWUiLCJ0b0xvd2VyQ2FzZSIsImxlbmd0aCIsImluY2x1ZGVzIiwibWFwIiwic2luZ2xlIiwibWVzc2FnZSIsImNvbXBvc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQWU7QUFDZjtBQUNBLG1CQUFtQixzQkFBc0I7QUFDekM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUNoQkE7QUFBQTtBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDSkE7QUFBQTtBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYSx1QkFBdUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUNiYTs7QUFFYjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsc0JBQXNCO0FBQ3pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7Ozs7OztBQ2xEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRWE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLGtCQUFrQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDhCOzs7Ozs7Ozs7Ozs7QUNoRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4Q0FBOEM7O0FBRTlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsdUJBQXVCLGlCQUFpQjtBQUN4QztBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7QUNuRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRW9COzs7Ozs7Ozs7Ozs7O0FDN0pwQjtBQUFBO0FBQUE7QUFBQTtBQUFB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O0dBQU1kLFE7O0tBQUFBLFE7QUF3RVN5Qix3SEFBTyxDQUNwQjNCLHlFQUFrQixFQURFLEVBRXBCN0IsaUVBQVcsQ0FBQyx1QkFBRCxFQUEwQixVQUExQixDQUZTLENBQVAsQ0FHYitCLFFBSGEsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zcGVha2Vycy5jZTAwZTdlNjg4MWViYjBkM2Y0YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcblxuICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfaW5oZXJpdHNMb29zZShzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MucHJvdG90eXBlKTtcbiAgc3ViQ2xhc3MucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gc3ViQ2xhc3M7XG4gIHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcbiAgdmFyIHRhcmdldCA9IHt9O1xuICB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gIHZhciBrZXksIGk7XG5cbiAgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBrZXkgPSBzb3VyY2VLZXlzW2ldO1xuICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xudmFyIGNyZWF0ZUNoYW5nZUVtaXR0ZXIgPSBleHBvcnRzLmNyZWF0ZUNoYW5nZUVtaXR0ZXIgPSBmdW5jdGlvbiBjcmVhdGVDaGFuZ2VFbWl0dGVyKCkge1xuICB2YXIgY3VycmVudExpc3RlbmVycyA9IFtdO1xuICB2YXIgbmV4dExpc3RlbmVycyA9IGN1cnJlbnRMaXN0ZW5lcnM7XG5cbiAgZnVuY3Rpb24gZW5zdXJlQ2FuTXV0YXRlTmV4dExpc3RlbmVycygpIHtcbiAgICBpZiAobmV4dExpc3RlbmVycyA9PT0gY3VycmVudExpc3RlbmVycykge1xuICAgICAgbmV4dExpc3RlbmVycyA9IGN1cnJlbnRMaXN0ZW5lcnMuc2xpY2UoKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBsaXN0ZW4obGlzdGVuZXIpIHtcbiAgICBpZiAodHlwZW9mIGxpc3RlbmVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIGxpc3RlbmVyIHRvIGJlIGEgZnVuY3Rpb24uJyk7XG4gICAgfVxuXG4gICAgdmFyIGlzU3Vic2NyaWJlZCA9IHRydWU7XG5cbiAgICBlbnN1cmVDYW5NdXRhdGVOZXh0TGlzdGVuZXJzKCk7XG4gICAgbmV4dExpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcblxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoIWlzU3Vic2NyaWJlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlzU3Vic2NyaWJlZCA9IGZhbHNlO1xuXG4gICAgICBlbnN1cmVDYW5NdXRhdGVOZXh0TGlzdGVuZXJzKCk7XG4gICAgICB2YXIgaW5kZXggPSBuZXh0TGlzdGVuZXJzLmluZGV4T2YobGlzdGVuZXIpO1xuICAgICAgbmV4dExpc3RlbmVycy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBlbWl0KCkge1xuICAgIGN1cnJlbnRMaXN0ZW5lcnMgPSBuZXh0TGlzdGVuZXJzO1xuICAgIHZhciBsaXN0ZW5lcnMgPSBjdXJyZW50TGlzdGVuZXJzO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdGVuZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsaXN0ZW5lcnNbaV0uYXBwbHkobGlzdGVuZXJzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbGlzdGVuOiBsaXN0ZW4sXG4gICAgZW1pdDogZW1pdFxuICB9O1xufTsiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEB0eXBlY2hlY2tzXG4gKiBcbiAqL1xuXG4vKmVzbGludC1kaXNhYmxlIG5vLXNlbGYtY29tcGFyZSAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogaW5saW5lZCBPYmplY3QuaXMgcG9seWZpbGwgdG8gYXZvaWQgcmVxdWlyaW5nIGNvbnN1bWVycyBzaGlwIHRoZWlyIG93blxuICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvT2JqZWN0L2lzXG4gKi9cbmZ1bmN0aW9uIGlzKHgsIHkpIHtcbiAgLy8gU2FtZVZhbHVlIGFsZ29yaXRobVxuICBpZiAoeCA9PT0geSkge1xuICAgIC8vIFN0ZXBzIDEtNSwgNy0xMFxuICAgIC8vIFN0ZXBzIDYuYi02LmU6ICswICE9IC0wXG4gICAgLy8gQWRkZWQgdGhlIG5vbnplcm8geSBjaGVjayB0byBtYWtlIEZsb3cgaGFwcHksIGJ1dCBpdCBpcyByZWR1bmRhbnRcbiAgICByZXR1cm4geCAhPT0gMCB8fCB5ICE9PSAwIHx8IDEgLyB4ID09PSAxIC8geTtcbiAgfSBlbHNlIHtcbiAgICAvLyBTdGVwIDYuYTogTmFOID09IE5hTlxuICAgIHJldHVybiB4ICE9PSB4ICYmIHkgIT09IHk7XG4gIH1cbn1cblxuLyoqXG4gKiBQZXJmb3JtcyBlcXVhbGl0eSBieSBpdGVyYXRpbmcgdGhyb3VnaCBrZXlzIG9uIGFuIG9iamVjdCBhbmQgcmV0dXJuaW5nIGZhbHNlXG4gKiB3aGVuIGFueSBrZXkgaGFzIHZhbHVlcyB3aGljaCBhcmUgbm90IHN0cmljdGx5IGVxdWFsIGJldHdlZW4gdGhlIGFyZ3VtZW50cy5cbiAqIFJldHVybnMgdHJ1ZSB3aGVuIHRoZSB2YWx1ZXMgb2YgYWxsIGtleXMgYXJlIHN0cmljdGx5IGVxdWFsLlxuICovXG5mdW5jdGlvbiBzaGFsbG93RXF1YWwob2JqQSwgb2JqQikge1xuICBpZiAoaXMob2JqQSwgb2JqQikpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmICh0eXBlb2Ygb2JqQSAhPT0gJ29iamVjdCcgfHwgb2JqQSA9PT0gbnVsbCB8fCB0eXBlb2Ygb2JqQiAhPT0gJ29iamVjdCcgfHwgb2JqQiA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBrZXlzQSA9IE9iamVjdC5rZXlzKG9iakEpO1xuICB2YXIga2V5c0IgPSBPYmplY3Qua2V5cyhvYmpCKTtcblxuICBpZiAoa2V5c0EubGVuZ3RoICE9PSBrZXlzQi5sZW5ndGgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBUZXN0IGZvciBBJ3Mga2V5cyBkaWZmZXJlbnQgZnJvbSBCLlxuICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXNBLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKCFoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iakIsIGtleXNBW2ldKSB8fCAhaXMob2JqQVtrZXlzQVtpXV0sIG9iakJba2V5c0FbaV1dKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNoYWxsb3dFcXVhbDsiLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQ29weXJpZ2h0IDIwMTUsIFlhaG9vISBJbmMuXG4gKiBDb3B5cmlnaHRzIGxpY2Vuc2VkIHVuZGVyIHRoZSBOZXcgQlNEIExpY2Vuc2UuIFNlZSB0aGUgYWNjb21wYW55aW5nIExJQ0VOU0UgZmlsZSBmb3IgdGVybXMuXG4gKi9cbnZhciBSRUFDVF9TVEFUSUNTID0ge1xuICAgIGNoaWxkQ29udGV4dFR5cGVzOiB0cnVlLFxuICAgIGNvbnRleHRUeXBlczogdHJ1ZSxcbiAgICBkZWZhdWx0UHJvcHM6IHRydWUsXG4gICAgZGlzcGxheU5hbWU6IHRydWUsXG4gICAgZ2V0RGVmYXVsdFByb3BzOiB0cnVlLFxuICAgIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wczogdHJ1ZSxcbiAgICBtaXhpbnM6IHRydWUsXG4gICAgcHJvcFR5cGVzOiB0cnVlLFxuICAgIHR5cGU6IHRydWVcbn07XG5cbnZhciBLTk9XTl9TVEFUSUNTID0ge1xuICAgIG5hbWU6IHRydWUsXG4gICAgbGVuZ3RoOiB0cnVlLFxuICAgIHByb3RvdHlwZTogdHJ1ZSxcbiAgICBjYWxsZXI6IHRydWUsXG4gICAgY2FsbGVlOiB0cnVlLFxuICAgIGFyZ3VtZW50czogdHJ1ZSxcbiAgICBhcml0eTogdHJ1ZVxufTtcblxudmFyIGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xudmFyIGdldE93blByb3BlcnR5TmFtZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcztcbnZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG52YXIgZ2V0UHJvdG90eXBlT2YgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG52YXIgb2JqZWN0UHJvdG90eXBlID0gZ2V0UHJvdG90eXBlT2YgJiYgZ2V0UHJvdG90eXBlT2YoT2JqZWN0KTtcblxuZnVuY3Rpb24gaG9pc3ROb25SZWFjdFN0YXRpY3ModGFyZ2V0Q29tcG9uZW50LCBzb3VyY2VDb21wb25lbnQsIGJsYWNrbGlzdCkge1xuICAgIGlmICh0eXBlb2Ygc291cmNlQ29tcG9uZW50ICE9PSAnc3RyaW5nJykgeyAvLyBkb24ndCBob2lzdCBvdmVyIHN0cmluZyAoaHRtbCkgY29tcG9uZW50c1xuXG4gICAgICAgIGlmIChvYmplY3RQcm90b3R5cGUpIHtcbiAgICAgICAgICAgIHZhciBpbmhlcml0ZWRDb21wb25lbnQgPSBnZXRQcm90b3R5cGVPZihzb3VyY2VDb21wb25lbnQpO1xuICAgICAgICAgICAgaWYgKGluaGVyaXRlZENvbXBvbmVudCAmJiBpbmhlcml0ZWRDb21wb25lbnQgIT09IG9iamVjdFByb3RvdHlwZSkge1xuICAgICAgICAgICAgICAgIGhvaXN0Tm9uUmVhY3RTdGF0aWNzKHRhcmdldENvbXBvbmVudCwgaW5oZXJpdGVkQ29tcG9uZW50LCBibGFja2xpc3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGtleXMgPSBnZXRPd25Qcm9wZXJ0eU5hbWVzKHNvdXJjZUNvbXBvbmVudCk7XG5cbiAgICAgICAgaWYgKGdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgICAgICAgICAga2V5cyA9IGtleXMuY29uY2F0KGdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2VDb21wb25lbnQpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgdmFyIGtleSA9IGtleXNbaV07XG4gICAgICAgICAgICBpZiAoIVJFQUNUX1NUQVRJQ1Nba2V5XSAmJiAhS05PV05fU1RBVElDU1trZXldICYmICghYmxhY2tsaXN0IHx8ICFibGFja2xpc3Rba2V5XSkpIHtcbiAgICAgICAgICAgICAgICB2YXIgZGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2VDb21wb25lbnQsIGtleSk7XG4gICAgICAgICAgICAgICAgdHJ5IHsgLy8gQXZvaWQgZmFpbHVyZXMgZnJvbSByZWFkLW9ubHkgcHJvcGVydGllc1xuICAgICAgICAgICAgICAgICAgICBkZWZpbmVQcm9wZXJ0eSh0YXJnZXRDb21wb25lbnQsIGtleSwgZGVzY3JpcHRvcik7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge31cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0YXJnZXRDb21wb25lbnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldENvbXBvbmVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBob2lzdE5vblJlYWN0U3RhdGljcztcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuZnVuY3Rpb24gY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAvLyBDYWxsIHRoaXMuY29uc3RydWN0b3IuZ0RTRlAgdG8gc3VwcG9ydCBzdWItY2xhc3Nlcy5cbiAgdmFyIHN0YXRlID0gdGhpcy5jb25zdHJ1Y3Rvci5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHModGhpcy5wcm9wcywgdGhpcy5zdGF0ZSk7XG4gIGlmIChzdGF0ZSAhPT0gbnVsbCAmJiBzdGF0ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgLy8gQ2FsbCB0aGlzLmNvbnN0cnVjdG9yLmdEU0ZQIHRvIHN1cHBvcnQgc3ViLWNsYXNzZXMuXG4gIC8vIFVzZSB0aGUgc2V0U3RhdGUoKSB1cGRhdGVyIHRvIGVuc3VyZSBzdGF0ZSBpc24ndCBzdGFsZSBpbiBjZXJ0YWluIGVkZ2UgY2FzZXMuXG4gIGZ1bmN0aW9uIHVwZGF0ZXIocHJldlN0YXRlKSB7XG4gICAgdmFyIHN0YXRlID0gdGhpcy5jb25zdHJ1Y3Rvci5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMobmV4dFByb3BzLCBwcmV2U3RhdGUpO1xuICAgIHJldHVybiBzdGF0ZSAhPT0gbnVsbCAmJiBzdGF0ZSAhPT0gdW5kZWZpbmVkID8gc3RhdGUgOiBudWxsO1xuICB9XG4gIC8vIEJpbmRpbmcgXCJ0aGlzXCIgaXMgaW1wb3J0YW50IGZvciBzaGFsbG93IHJlbmRlcmVyIHN1cHBvcnQuXG4gIHRoaXMuc2V0U3RhdGUodXBkYXRlci5iaW5kKHRoaXMpKTtcbn1cblxuZnVuY3Rpb24gY29tcG9uZW50V2lsbFVwZGF0ZShuZXh0UHJvcHMsIG5leHRTdGF0ZSkge1xuICB0cnkge1xuICAgIHZhciBwcmV2UHJvcHMgPSB0aGlzLnByb3BzO1xuICAgIHZhciBwcmV2U3RhdGUgPSB0aGlzLnN0YXRlO1xuICAgIHRoaXMucHJvcHMgPSBuZXh0UHJvcHM7XG4gICAgdGhpcy5zdGF0ZSA9IG5leHRTdGF0ZTtcbiAgICB0aGlzLl9fcmVhY3RJbnRlcm5hbFNuYXBzaG90RmxhZyA9IHRydWU7XG4gICAgdGhpcy5fX3JlYWN0SW50ZXJuYWxTbmFwc2hvdCA9IHRoaXMuZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUoXG4gICAgICBwcmV2UHJvcHMsXG4gICAgICBwcmV2U3RhdGVcbiAgICApO1xuICB9IGZpbmFsbHkge1xuICAgIHRoaXMucHJvcHMgPSBwcmV2UHJvcHM7XG4gICAgdGhpcy5zdGF0ZSA9IHByZXZTdGF0ZTtcbiAgfVxufVxuXG4vLyBSZWFjdCBtYXkgd2FybiBhYm91dCBjV00vY1dSUC9jV1UgbWV0aG9kcyBiZWluZyBkZXByZWNhdGVkLlxuLy8gQWRkIGEgZmxhZyB0byBzdXBwcmVzcyB0aGVzZSB3YXJuaW5ncyBmb3IgdGhpcyBzcGVjaWFsIGNhc2UuXG5jb21wb25lbnRXaWxsTW91bnQuX19zdXBwcmVzc0RlcHJlY2F0aW9uV2FybmluZyA9IHRydWU7XG5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzLl9fc3VwcHJlc3NEZXByZWNhdGlvbldhcm5pbmcgPSB0cnVlO1xuY29tcG9uZW50V2lsbFVwZGF0ZS5fX3N1cHByZXNzRGVwcmVjYXRpb25XYXJuaW5nID0gdHJ1ZTtcblxuZnVuY3Rpb24gcG9seWZpbGwoQ29tcG9uZW50KSB7XG4gIHZhciBwcm90b3R5cGUgPSBDb21wb25lbnQucHJvdG90eXBlO1xuXG4gIGlmICghcHJvdG90eXBlIHx8ICFwcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudCkge1xuICAgIHRocm93IG5ldyBFcnJvcignQ2FuIG9ubHkgcG9seWZpbGwgY2xhc3MgY29tcG9uZW50cycpO1xuICB9XG5cbiAgaWYgKFxuICAgIHR5cGVvZiBDb21wb25lbnQuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzICE9PSAnZnVuY3Rpb24nICYmXG4gICAgdHlwZW9mIHByb3RvdHlwZS5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZSAhPT0gJ2Z1bmN0aW9uJ1xuICApIHtcbiAgICByZXR1cm4gQ29tcG9uZW50O1xuICB9XG5cbiAgLy8gSWYgbmV3IGNvbXBvbmVudCBBUElzIGFyZSBkZWZpbmVkLCBcInVuc2FmZVwiIGxpZmVjeWNsZXMgd29uJ3QgYmUgY2FsbGVkLlxuICAvLyBFcnJvciBpZiBhbnkgb2YgdGhlc2UgbGlmZWN5Y2xlcyBhcmUgcHJlc2VudCxcbiAgLy8gQmVjYXVzZSB0aGV5IHdvdWxkIHdvcmsgZGlmZmVyZW50bHkgYmV0d2VlbiBvbGRlciBhbmQgbmV3ZXIgKDE2LjMrKSB2ZXJzaW9ucyBvZiBSZWFjdC5cbiAgdmFyIGZvdW5kV2lsbE1vdW50TmFtZSA9IG51bGw7XG4gIHZhciBmb3VuZFdpbGxSZWNlaXZlUHJvcHNOYW1lID0gbnVsbDtcbiAgdmFyIGZvdW5kV2lsbFVwZGF0ZU5hbWUgPSBudWxsO1xuICBpZiAodHlwZW9mIHByb3RvdHlwZS5jb21wb25lbnRXaWxsTW91bnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBmb3VuZFdpbGxNb3VudE5hbWUgPSAnY29tcG9uZW50V2lsbE1vdW50JztcbiAgfSBlbHNlIGlmICh0eXBlb2YgcHJvdG90eXBlLlVOU0FGRV9jb21wb25lbnRXaWxsTW91bnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBmb3VuZFdpbGxNb3VudE5hbWUgPSAnVU5TQUZFX2NvbXBvbmVudFdpbGxNb3VudCc7XG4gIH1cbiAgaWYgKHR5cGVvZiBwcm90b3R5cGUuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGZvdW5kV2lsbFJlY2VpdmVQcm9wc05hbWUgPSAnY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyc7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHByb3RvdHlwZS5VTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGZvdW5kV2lsbFJlY2VpdmVQcm9wc05hbWUgPSAnVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMnO1xuICB9XG4gIGlmICh0eXBlb2YgcHJvdG90eXBlLmNvbXBvbmVudFdpbGxVcGRhdGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICBmb3VuZFdpbGxVcGRhdGVOYW1lID0gJ2NvbXBvbmVudFdpbGxVcGRhdGUnO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBwcm90b3R5cGUuVU5TQUZFX2NvbXBvbmVudFdpbGxVcGRhdGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICBmb3VuZFdpbGxVcGRhdGVOYW1lID0gJ1VOU0FGRV9jb21wb25lbnRXaWxsVXBkYXRlJztcbiAgfVxuICBpZiAoXG4gICAgZm91bmRXaWxsTW91bnROYW1lICE9PSBudWxsIHx8XG4gICAgZm91bmRXaWxsUmVjZWl2ZVByb3BzTmFtZSAhPT0gbnVsbCB8fFxuICAgIGZvdW5kV2lsbFVwZGF0ZU5hbWUgIT09IG51bGxcbiAgKSB7XG4gICAgdmFyIGNvbXBvbmVudE5hbWUgPSBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWU7XG4gICAgdmFyIG5ld0FwaU5hbWUgPVxuICAgICAgdHlwZW9mIENvbXBvbmVudC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMgPT09ICdmdW5jdGlvbidcbiAgICAgICAgPyAnZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKCknXG4gICAgICAgIDogJ2dldFNuYXBzaG90QmVmb3JlVXBkYXRlKCknO1xuXG4gICAgdGhyb3cgRXJyb3IoXG4gICAgICAnVW5zYWZlIGxlZ2FjeSBsaWZlY3ljbGVzIHdpbGwgbm90IGJlIGNhbGxlZCBmb3IgY29tcG9uZW50cyB1c2luZyBuZXcgY29tcG9uZW50IEFQSXMuXFxuXFxuJyArXG4gICAgICAgIGNvbXBvbmVudE5hbWUgK1xuICAgICAgICAnIHVzZXMgJyArXG4gICAgICAgIG5ld0FwaU5hbWUgK1xuICAgICAgICAnIGJ1dCBhbHNvIGNvbnRhaW5zIHRoZSBmb2xsb3dpbmcgbGVnYWN5IGxpZmVjeWNsZXM6JyArXG4gICAgICAgIChmb3VuZFdpbGxNb3VudE5hbWUgIT09IG51bGwgPyAnXFxuICAnICsgZm91bmRXaWxsTW91bnROYW1lIDogJycpICtcbiAgICAgICAgKGZvdW5kV2lsbFJlY2VpdmVQcm9wc05hbWUgIT09IG51bGxcbiAgICAgICAgICA/ICdcXG4gICcgKyBmb3VuZFdpbGxSZWNlaXZlUHJvcHNOYW1lXG4gICAgICAgICAgOiAnJykgK1xuICAgICAgICAoZm91bmRXaWxsVXBkYXRlTmFtZSAhPT0gbnVsbCA/ICdcXG4gICcgKyBmb3VuZFdpbGxVcGRhdGVOYW1lIDogJycpICtcbiAgICAgICAgJ1xcblxcblRoZSBhYm92ZSBsaWZlY3ljbGVzIHNob3VsZCBiZSByZW1vdmVkLiBMZWFybiBtb3JlIGFib3V0IHRoaXMgd2FybmluZyBoZXJlOlxcbicgK1xuICAgICAgICAnaHR0cHM6Ly9mYi5tZS9yZWFjdC1hc3luYy1jb21wb25lbnQtbGlmZWN5Y2xlLWhvb2tzJ1xuICAgICk7XG4gIH1cblxuICAvLyBSZWFjdCA8PSAxNi4yIGRvZXMgbm90IHN1cHBvcnQgc3RhdGljIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcy5cbiAgLy8gQXMgYSB3b3JrYXJvdW5kLCB1c2UgY1dNIGFuZCBjV1JQIHRvIGludm9rZSB0aGUgbmV3IHN0YXRpYyBsaWZlY3ljbGUuXG4gIC8vIE5ld2VyIHZlcnNpb25zIG9mIFJlYWN0IHdpbGwgaWdub3JlIHRoZXNlIGxpZmVjeWNsZXMgaWYgZ0RTRlAgZXhpc3RzLlxuICBpZiAodHlwZW9mIENvbXBvbmVudC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICBwcm90b3R5cGUuY29tcG9uZW50V2lsbE1vdW50ID0gY29tcG9uZW50V2lsbE1vdW50O1xuICAgIHByb3RvdHlwZS5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzID0gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcztcbiAgfVxuXG4gIC8vIFJlYWN0IDw9IDE2LjIgZG9lcyBub3Qgc3VwcG9ydCBnZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZS5cbiAgLy8gQXMgYSB3b3JrYXJvdW5kLCB1c2UgY1dVIHRvIGludm9rZSB0aGUgbmV3IGxpZmVjeWNsZS5cbiAgLy8gTmV3ZXIgdmVyc2lvbnMgb2YgUmVhY3Qgd2lsbCBpZ25vcmUgdGhhdCBsaWZlY3ljbGUgaWYgZ1NCVSBleGlzdHMuXG4gIGlmICh0eXBlb2YgcHJvdG90eXBlLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgaWYgKHR5cGVvZiBwcm90b3R5cGUuY29tcG9uZW50RGlkVXBkYXRlICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdDYW5ub3QgcG9seWZpbGwgZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUoKSBmb3IgY29tcG9uZW50cyB0aGF0IGRvIG5vdCBkZWZpbmUgY29tcG9uZW50RGlkVXBkYXRlKCkgb24gdGhlIHByb3RvdHlwZSdcbiAgICAgICk7XG4gICAgfVxuXG4gICAgcHJvdG90eXBlLmNvbXBvbmVudFdpbGxVcGRhdGUgPSBjb21wb25lbnRXaWxsVXBkYXRlO1xuXG4gICAgdmFyIGNvbXBvbmVudERpZFVwZGF0ZSA9IHByb3RvdHlwZS5jb21wb25lbnREaWRVcGRhdGU7XG5cbiAgICBwcm90b3R5cGUuY29tcG9uZW50RGlkVXBkYXRlID0gZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlUG9seWZpbGwoXG4gICAgICBwcmV2UHJvcHMsXG4gICAgICBwcmV2U3RhdGUsXG4gICAgICBtYXliZVNuYXBzaG90XG4gICAgKSB7XG4gICAgICAvLyAxNi4zKyB3aWxsIG5vdCBleGVjdXRlIG91ciB3aWxsLXVwZGF0ZSBtZXRob2Q7XG4gICAgICAvLyBJdCB3aWxsIHBhc3MgYSBzbmFwc2hvdCB2YWx1ZSB0byBkaWQtdXBkYXRlIHRob3VnaC5cbiAgICAgIC8vIE9sZGVyIHZlcnNpb25zIHdpbGwgcmVxdWlyZSBvdXIgcG9seWZpbGxlZCB3aWxsLXVwZGF0ZSB2YWx1ZS5cbiAgICAgIC8vIFdlIG5lZWQgdG8gaGFuZGxlIGJvdGggY2FzZXMsIGJ1dCBjYW4ndCBqdXN0IGNoZWNrIGZvciB0aGUgcHJlc2VuY2Ugb2YgXCJtYXliZVNuYXBzaG90XCIsXG4gICAgICAvLyBCZWNhdXNlIGZvciA8PSAxNS54IHZlcnNpb25zIHRoaXMgbWlnaHQgYmUgYSBcInByZXZDb250ZXh0XCIgb2JqZWN0LlxuICAgICAgLy8gV2UgYWxzbyBjYW4ndCBqdXN0IGNoZWNrIFwiX19yZWFjdEludGVybmFsU25hcHNob3RcIixcbiAgICAgIC8vIEJlY2F1c2UgZ2V0LXNuYXBzaG90IG1pZ2h0IHJldHVybiBhIGZhbHN5IHZhbHVlLlxuICAgICAgLy8gU28gY2hlY2sgZm9yIHRoZSBleHBsaWNpdCBfX3JlYWN0SW50ZXJuYWxTbmFwc2hvdEZsYWcgZmxhZyB0byBkZXRlcm1pbmUgYmVoYXZpb3IuXG4gICAgICB2YXIgc25hcHNob3QgPSB0aGlzLl9fcmVhY3RJbnRlcm5hbFNuYXBzaG90RmxhZ1xuICAgICAgICA/IHRoaXMuX19yZWFjdEludGVybmFsU25hcHNob3RcbiAgICAgICAgOiBtYXliZVNuYXBzaG90O1xuXG4gICAgICBjb21wb25lbnREaWRVcGRhdGUuY2FsbCh0aGlzLCBwcmV2UHJvcHMsIHByZXZTdGF0ZSwgc25hcHNob3QpO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gQ29tcG9uZW50O1xufVxuXG5leHBvcnQgeyBwb2x5ZmlsbCB9O1xuIiwiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUZhY3RvcnksIENvbXBvbmVudCwgY3JlYXRlRWxlbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBfZXh0ZW5kcyBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzJztcbmltcG9ydCBzaGFsbG93RXF1YWwgZnJvbSAnZmJqcy9saWIvc2hhbGxvd0VxdWFsJztcbmltcG9ydCBfaW5oZXJpdHNMb29zZSBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pbmhlcml0c0xvb3NlJztcbmltcG9ydCB7IHBvbHlmaWxsIH0gZnJvbSAncmVhY3QtbGlmZWN5Y2xlcy1jb21wYXQnO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UnO1xuaW1wb3J0IGhvaXN0Tm9uUmVhY3RTdGF0aWNzIGZyb20gJ2hvaXN0LW5vbi1yZWFjdC1zdGF0aWNzJztcbmltcG9ydCB7IGNyZWF0ZUNoYW5nZUVtaXR0ZXIgfSBmcm9tICdjaGFuZ2UtZW1pdHRlcic7XG5pbXBvcnQgJCRvYnNlcnZhYmxlIGZyb20gJ3N5bWJvbC1vYnNlcnZhYmxlJztcblxudmFyIHNldFN0YXRpYyA9IGZ1bmN0aW9uIHNldFN0YXRpYyhrZXksIHZhbHVlKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoQmFzZUNvbXBvbmVudCkge1xuICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG4gICAgQmFzZUNvbXBvbmVudFtrZXldID0gdmFsdWU7XG4gICAgLyogZXNsaW50LWVuYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuXG4gICAgcmV0dXJuIEJhc2VDb21wb25lbnQ7XG4gIH07XG59O1xuXG52YXIgc2V0RGlzcGxheU5hbWUgPSBmdW5jdGlvbiBzZXREaXNwbGF5TmFtZShkaXNwbGF5TmFtZSkge1xuICByZXR1cm4gc2V0U3RhdGljKCdkaXNwbGF5TmFtZScsIGRpc3BsYXlOYW1lKTtcbn07XG5cbnZhciBnZXREaXNwbGF5TmFtZSA9IGZ1bmN0aW9uIGdldERpc3BsYXlOYW1lKENvbXBvbmVudCQkMSkge1xuICBpZiAodHlwZW9mIENvbXBvbmVudCQkMSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gQ29tcG9uZW50JCQxO1xuICB9XG5cbiAgaWYgKCFDb21wb25lbnQkJDEpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgcmV0dXJuIENvbXBvbmVudCQkMS5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQkJDEubmFtZSB8fCAnQ29tcG9uZW50Jztcbn07XG5cbnZhciB3cmFwRGlzcGxheU5hbWUgPSBmdW5jdGlvbiB3cmFwRGlzcGxheU5hbWUoQmFzZUNvbXBvbmVudCwgaG9jTmFtZSkge1xuICByZXR1cm4gaG9jTmFtZSArIFwiKFwiICsgZ2V0RGlzcGxheU5hbWUoQmFzZUNvbXBvbmVudCkgKyBcIilcIjtcbn07XG5cbnZhciBtYXBQcm9wcyA9IGZ1bmN0aW9uIG1hcFByb3BzKHByb3BzTWFwcGVyKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoQmFzZUNvbXBvbmVudCkge1xuICAgIHZhciBmYWN0b3J5ID0gY3JlYXRlRmFjdG9yeShCYXNlQ29tcG9uZW50KTtcblxuICAgIHZhciBNYXBQcm9wcyA9IGZ1bmN0aW9uIE1hcFByb3BzKHByb3BzKSB7XG4gICAgICByZXR1cm4gZmFjdG9yeShwcm9wc01hcHBlcihwcm9wcykpO1xuICAgIH07XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgcmV0dXJuIHNldERpc3BsYXlOYW1lKHdyYXBEaXNwbGF5TmFtZShCYXNlQ29tcG9uZW50LCAnbWFwUHJvcHMnKSkoTWFwUHJvcHMpO1xuICAgIH1cblxuICAgIHJldHVybiBNYXBQcm9wcztcbiAgfTtcbn07XG5cbnZhciB3aXRoUHJvcHMgPSBmdW5jdGlvbiB3aXRoUHJvcHMoaW5wdXQpIHtcbiAgdmFyIGhvYyA9IG1hcFByb3BzKGZ1bmN0aW9uIChwcm9wcykge1xuICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgcHJvcHMsIHR5cGVvZiBpbnB1dCA9PT0gJ2Z1bmN0aW9uJyA/IGlucHV0KHByb3BzKSA6IGlucHV0KTtcbiAgfSk7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKEJhc2VDb21wb25lbnQpIHtcbiAgICAgIHJldHVybiBzZXREaXNwbGF5TmFtZSh3cmFwRGlzcGxheU5hbWUoQmFzZUNvbXBvbmVudCwgJ3dpdGhQcm9wcycpKShob2MoQmFzZUNvbXBvbmVudCkpO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gaG9jO1xufTtcblxudmFyIHBpY2sgPSBmdW5jdGlvbiBwaWNrKG9iaiwga2V5cykge1xuICB2YXIgcmVzdWx0ID0ge307XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGtleSA9IGtleXNbaV07XG5cbiAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIHJlc3VsdFtrZXldID0gb2JqW2tleV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbnZhciB3aXRoUHJvcHNPbkNoYW5nZSA9IGZ1bmN0aW9uIHdpdGhQcm9wc09uQ2hhbmdlKHNob3VsZE1hcE9yS2V5cywgcHJvcHNNYXBwZXIpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChCYXNlQ29tcG9uZW50KSB7XG4gICAgdmFyIGZhY3RvcnkgPSBjcmVhdGVGYWN0b3J5KEJhc2VDb21wb25lbnQpO1xuICAgIHZhciBzaG91bGRNYXAgPSB0eXBlb2Ygc2hvdWxkTWFwT3JLZXlzID09PSAnZnVuY3Rpb24nID8gc2hvdWxkTWFwT3JLZXlzIDogZnVuY3Rpb24gKHByb3BzLCBuZXh0UHJvcHMpIHtcbiAgICAgIHJldHVybiAhc2hhbGxvd0VxdWFsKHBpY2socHJvcHMsIHNob3VsZE1hcE9yS2V5cyksIHBpY2sobmV4dFByb3BzLCBzaG91bGRNYXBPcktleXMpKTtcbiAgICB9O1xuXG4gICAgdmFyIFdpdGhQcm9wc09uQ2hhbmdlID1cbiAgICAvKiNfX1BVUkVfXyovXG4gICAgZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgICAgIF9pbmhlcml0c0xvb3NlKFdpdGhQcm9wc09uQ2hhbmdlLCBfQ29tcG9uZW50KTtcblxuICAgICAgZnVuY3Rpb24gV2l0aFByb3BzT25DaGFuZ2UoKSB7XG4gICAgICAgIHZhciBfdGhpcztcblxuICAgICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgICB9XG5cbiAgICAgICAgX3RoaXMgPSBfQ29tcG9uZW50LmNhbGwuYXBwbHkoX0NvbXBvbmVudCwgW3RoaXNdLmNvbmNhdChhcmdzKSkgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgY29tcHV0ZWRQcm9wczogcHJvcHNNYXBwZXIoX3RoaXMucHJvcHMpLFxuICAgICAgICAgIHByZXZQcm9wczogX3RoaXMucHJvcHNcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgICAgfVxuXG4gICAgICBXaXRoUHJvcHNPbkNoYW5nZS5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMgPSBmdW5jdGlvbiBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMobmV4dFByb3BzLCBwcmV2U3RhdGUpIHtcbiAgICAgICAgaWYgKHNob3VsZE1hcChwcmV2U3RhdGUucHJldlByb3BzLCBuZXh0UHJvcHMpKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNvbXB1dGVkUHJvcHM6IHByb3BzTWFwcGVyKG5leHRQcm9wcyksXG4gICAgICAgICAgICBwcmV2UHJvcHM6IG5leHRQcm9wc1xuICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHByZXZQcm9wczogbmV4dFByb3BzXG4gICAgICAgIH07XG4gICAgICB9O1xuXG4gICAgICB2YXIgX3Byb3RvID0gV2l0aFByb3BzT25DaGFuZ2UucHJvdG90eXBlO1xuXG4gICAgICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gZmFjdG9yeShfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywgdGhpcy5zdGF0ZS5jb21wdXRlZFByb3BzKSk7XG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gV2l0aFByb3BzT25DaGFuZ2U7XG4gICAgfShDb21wb25lbnQpO1xuXG4gICAgcG9seWZpbGwoV2l0aFByb3BzT25DaGFuZ2UpO1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHJldHVybiBzZXREaXNwbGF5TmFtZSh3cmFwRGlzcGxheU5hbWUoQmFzZUNvbXBvbmVudCwgJ3dpdGhQcm9wc09uQ2hhbmdlJykpKFdpdGhQcm9wc09uQ2hhbmdlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gV2l0aFByb3BzT25DaGFuZ2U7XG4gIH07XG59O1xuXG52YXIgbWFwVmFsdWVzID0gZnVuY3Rpb24gbWFwVmFsdWVzKG9iaiwgZnVuYykge1xuICB2YXIgcmVzdWx0ID0ge307XG4gIC8qIGVzbGludC1kaXNhYmxlIG5vLXJlc3RyaWN0ZWQtc3ludGF4ICovXG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgcmVzdWx0W2tleV0gPSBmdW5jKG9ialtrZXldLCBrZXkpO1xuICAgIH1cbiAgfVxuICAvKiBlc2xpbnQtZW5hYmxlIG5vLXJlc3RyaWN0ZWQtc3ludGF4ICovXG5cblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxudmFyIHdpdGhIYW5kbGVycyA9IGZ1bmN0aW9uIHdpdGhIYW5kbGVycyhoYW5kbGVycykge1xuICByZXR1cm4gZnVuY3Rpb24gKEJhc2VDb21wb25lbnQpIHtcbiAgICB2YXIgZmFjdG9yeSA9IGNyZWF0ZUZhY3RvcnkoQmFzZUNvbXBvbmVudCk7XG5cbiAgICB2YXIgV2l0aEhhbmRsZXJzID1cbiAgICAvKiNfX1BVUkVfXyovXG4gICAgZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgICAgIF9pbmhlcml0c0xvb3NlKFdpdGhIYW5kbGVycywgX0NvbXBvbmVudCk7XG5cbiAgICAgIGZ1bmN0aW9uIFdpdGhIYW5kbGVycygpIHtcbiAgICAgICAgdmFyIF90aGlzO1xuXG4gICAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBfYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgICBfYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgICAgfVxuXG4gICAgICAgIF90aGlzID0gX0NvbXBvbmVudC5jYWxsLmFwcGx5KF9Db21wb25lbnQsIFt0aGlzXS5jb25jYXQoX2FyZ3MpKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5oYW5kbGVycyA9IG1hcFZhbHVlcyh0eXBlb2YgaGFuZGxlcnMgPT09ICdmdW5jdGlvbicgPyBoYW5kbGVycyhfdGhpcy5wcm9wcykgOiBoYW5kbGVycywgZnVuY3Rpb24gKGNyZWF0ZUhhbmRsZXIpIHtcbiAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGhhbmRsZXIgPSBjcmVhdGVIYW5kbGVyKF90aGlzLnByb3BzKTtcblxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgdHlwZW9mIGhhbmRsZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvciggLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gICAgICAgICAgICAgICd3aXRoSGFuZGxlcnMoKTogRXhwZWN0ZWQgYSBtYXAgb2YgaGlnaGVyLW9yZGVyIGZ1bmN0aW9ucy4gJyArICdSZWZlciB0byB0aGUgZG9jcyBmb3IgbW9yZSBpbmZvLicpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gaGFuZGxlci5hcHBseSh2b2lkIDAsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICAgIH1cblxuICAgICAgdmFyIF9wcm90byA9IFdpdGhIYW5kbGVycy5wcm90b3R5cGU7XG5cbiAgICAgIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiBmYWN0b3J5KF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB0aGlzLmhhbmRsZXJzKSk7XG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gV2l0aEhhbmRsZXJzO1xuICAgIH0oQ29tcG9uZW50KTtcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICByZXR1cm4gc2V0RGlzcGxheU5hbWUod3JhcERpc3BsYXlOYW1lKEJhc2VDb21wb25lbnQsICd3aXRoSGFuZGxlcnMnKSkoV2l0aEhhbmRsZXJzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gV2l0aEhhbmRsZXJzO1xuICB9O1xufTtcblxudmFyIGRlZmF1bHRQcm9wcyA9IGZ1bmN0aW9uIGRlZmF1bHRQcm9wcyhwcm9wcykge1xuICByZXR1cm4gZnVuY3Rpb24gKEJhc2VDb21wb25lbnQpIHtcbiAgICB2YXIgZmFjdG9yeSA9IGNyZWF0ZUZhY3RvcnkoQmFzZUNvbXBvbmVudCk7XG5cbiAgICB2YXIgRGVmYXVsdFByb3BzID0gZnVuY3Rpb24gRGVmYXVsdFByb3BzKG93bmVyUHJvcHMpIHtcbiAgICAgIHJldHVybiBmYWN0b3J5KG93bmVyUHJvcHMpO1xuICAgIH07XG5cbiAgICBEZWZhdWx0UHJvcHMuZGVmYXVsdFByb3BzID0gcHJvcHM7XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgcmV0dXJuIHNldERpc3BsYXlOYW1lKHdyYXBEaXNwbGF5TmFtZShCYXNlQ29tcG9uZW50LCAnZGVmYXVsdFByb3BzJykpKERlZmF1bHRQcm9wcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIERlZmF1bHRQcm9wcztcbiAgfTtcbn07XG5cbnZhciBvbWl0ID0gZnVuY3Rpb24gb21pdChvYmosIGtleXMpIHtcbiAgdmFyIHJlc3QgPSBfZXh0ZW5kcyh7fSwgb2JqKTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIga2V5ID0ga2V5c1tpXTtcblxuICAgIGlmIChyZXN0Lmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIGRlbGV0ZSByZXN0W2tleV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3Q7XG59O1xuXG52YXIgcmVuYW1lUHJvcCA9IGZ1bmN0aW9uIHJlbmFtZVByb3Aob2xkTmFtZSwgbmV3TmFtZSkge1xuICB2YXIgaG9jID0gbWFwUHJvcHMoZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgdmFyIF9leHRlbmRzMjtcblxuICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgb21pdChwcm9wcywgW29sZE5hbWVdKSwgKF9leHRlbmRzMiA9IHt9LCBfZXh0ZW5kczJbbmV3TmFtZV0gPSBwcm9wc1tvbGROYW1lXSwgX2V4dGVuZHMyKSk7XG4gIH0pO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChCYXNlQ29tcG9uZW50KSB7XG4gICAgICByZXR1cm4gc2V0RGlzcGxheU5hbWUod3JhcERpc3BsYXlOYW1lKEJhc2VDb21wb25lbnQsICdyZW5hbWVQcm9wJykpKGhvYyhCYXNlQ29tcG9uZW50KSk7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBob2M7XG59O1xuXG52YXIga2V5cyA9IE9iamVjdC5rZXlzO1xuXG52YXIgbWFwS2V5cyA9IGZ1bmN0aW9uIG1hcEtleXMob2JqLCBmdW5jKSB7XG4gIHJldHVybiBrZXlzKG9iaikucmVkdWNlKGZ1bmN0aW9uIChyZXN1bHQsIGtleSkge1xuICAgIHZhciB2YWwgPSBvYmpba2V5XTtcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuXG4gICAgcmVzdWx0W2Z1bmModmFsLCBrZXkpXSA9IHZhbDtcbiAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9LCB7fSk7XG59O1xuXG52YXIgcmVuYW1lUHJvcHMgPSBmdW5jdGlvbiByZW5hbWVQcm9wcyhuYW1lTWFwKSB7XG4gIHZhciBob2MgPSBtYXBQcm9wcyhmdW5jdGlvbiAocHJvcHMpIHtcbiAgICByZXR1cm4gX2V4dGVuZHMoe30sIG9taXQocHJvcHMsIGtleXMobmFtZU1hcCkpLCBtYXBLZXlzKHBpY2socHJvcHMsIGtleXMobmFtZU1hcCkpLCBmdW5jdGlvbiAoXywgb2xkTmFtZSkge1xuICAgICAgcmV0dXJuIG5hbWVNYXBbb2xkTmFtZV07XG4gICAgfSkpO1xuICB9KTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIHJldHVybiBmdW5jdGlvbiAoQmFzZUNvbXBvbmVudCkge1xuICAgICAgcmV0dXJuIHNldERpc3BsYXlOYW1lKHdyYXBEaXNwbGF5TmFtZShCYXNlQ29tcG9uZW50LCAncmVuYW1lUHJvcHMnKSkoaG9jKEJhc2VDb21wb25lbnQpKTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIGhvYztcbn07XG5cbnZhciBmbGF0dGVuUHJvcCA9IGZ1bmN0aW9uIGZsYXR0ZW5Qcm9wKHByb3BOYW1lKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoQmFzZUNvbXBvbmVudCkge1xuICAgIHZhciBmYWN0b3J5ID0gY3JlYXRlRmFjdG9yeShCYXNlQ29tcG9uZW50KTtcblxuICAgIHZhciBGbGF0dGVuUHJvcCA9IGZ1bmN0aW9uIEZsYXR0ZW5Qcm9wKHByb3BzKSB7XG4gICAgICByZXR1cm4gZmFjdG9yeShfZXh0ZW5kcyh7fSwgcHJvcHMsIHByb3BzW3Byb3BOYW1lXSkpO1xuICAgIH07XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgcmV0dXJuIHNldERpc3BsYXlOYW1lKHdyYXBEaXNwbGF5TmFtZShCYXNlQ29tcG9uZW50LCAnZmxhdHRlblByb3AnKSkoRmxhdHRlblByb3ApO1xuICAgIH1cblxuICAgIHJldHVybiBGbGF0dGVuUHJvcDtcbiAgfTtcbn07XG5cbnZhciB3aXRoU3RhdGUgPSBmdW5jdGlvbiB3aXRoU3RhdGUoc3RhdGVOYW1lLCBzdGF0ZVVwZGF0ZXJOYW1lLCBpbml0aWFsU3RhdGUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChCYXNlQ29tcG9uZW50KSB7XG4gICAgdmFyIGZhY3RvcnkgPSBjcmVhdGVGYWN0b3J5KEJhc2VDb21wb25lbnQpO1xuXG4gICAgdmFyIFdpdGhTdGF0ZSA9XG4gICAgLyojX19QVVJFX18qL1xuICAgIGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gICAgICBfaW5oZXJpdHNMb29zZShXaXRoU3RhdGUsIF9Db21wb25lbnQpO1xuXG4gICAgICBmdW5jdGlvbiBXaXRoU3RhdGUoKSB7XG4gICAgICAgIHZhciBfdGhpcztcblxuICAgICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgICB9XG5cbiAgICAgICAgX3RoaXMgPSBfQ29tcG9uZW50LmNhbGwuYXBwbHkoX0NvbXBvbmVudCwgW3RoaXNdLmNvbmNhdChhcmdzKSkgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgc3RhdGVWYWx1ZTogdHlwZW9mIGluaXRpYWxTdGF0ZSA9PT0gJ2Z1bmN0aW9uJyA/IGluaXRpYWxTdGF0ZShfdGhpcy5wcm9wcykgOiBpbml0aWFsU3RhdGVcbiAgICAgICAgfTtcblxuICAgICAgICBfdGhpcy51cGRhdGVTdGF0ZVZhbHVlID0gZnVuY3Rpb24gKHVwZGF0ZUZuLCBjYWxsYmFjaykge1xuICAgICAgICAgIHJldHVybiBfdGhpcy5zZXRTdGF0ZShmdW5jdGlvbiAoX3JlZikge1xuICAgICAgICAgICAgdmFyIHN0YXRlVmFsdWUgPSBfcmVmLnN0YXRlVmFsdWU7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBzdGF0ZVZhbHVlOiB0eXBlb2YgdXBkYXRlRm4gPT09ICdmdW5jdGlvbicgPyB1cGRhdGVGbihzdGF0ZVZhbHVlKSA6IHVwZGF0ZUZuXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0sIGNhbGxiYWNrKTtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgICB9XG5cbiAgICAgIHZhciBfcHJvdG8gPSBXaXRoU3RhdGUucHJvdG90eXBlO1xuXG4gICAgICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICB2YXIgX2V4dGVuZHMyO1xuXG4gICAgICAgIHJldHVybiBmYWN0b3J5KF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCAoX2V4dGVuZHMyID0ge30sIF9leHRlbmRzMltzdGF0ZU5hbWVdID0gdGhpcy5zdGF0ZS5zdGF0ZVZhbHVlLCBfZXh0ZW5kczJbc3RhdGVVcGRhdGVyTmFtZV0gPSB0aGlzLnVwZGF0ZVN0YXRlVmFsdWUsIF9leHRlbmRzMikpKTtcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBXaXRoU3RhdGU7XG4gICAgfShDb21wb25lbnQpO1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHJldHVybiBzZXREaXNwbGF5TmFtZSh3cmFwRGlzcGxheU5hbWUoQmFzZUNvbXBvbmVudCwgJ3dpdGhTdGF0ZScpKShXaXRoU3RhdGUpO1xuICAgIH1cblxuICAgIHJldHVybiBXaXRoU3RhdGU7XG4gIH07XG59O1xuXG52YXIgd2l0aFN0YXRlSGFuZGxlcnMgPSBmdW5jdGlvbiB3aXRoU3RhdGVIYW5kbGVycyhpbml0aWFsU3RhdGUsIHN0YXRlVXBkYXRlcnMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChCYXNlQ29tcG9uZW50KSB7XG4gICAgdmFyIGZhY3RvcnkgPSBjcmVhdGVGYWN0b3J5KEJhc2VDb21wb25lbnQpO1xuXG4gICAgdmFyIFdpdGhTdGF0ZUhhbmRsZXJzID1cbiAgICAvKiNfX1BVUkVfXyovXG4gICAgZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgICAgIF9pbmhlcml0c0xvb3NlKFdpdGhTdGF0ZUhhbmRsZXJzLCBfQ29tcG9uZW50KTtcblxuICAgICAgZnVuY3Rpb24gV2l0aFN0YXRlSGFuZGxlcnMoKSB7XG4gICAgICAgIHZhciBfdGhpcztcblxuICAgICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgX2FyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgICAgX2FyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICAgIH1cblxuICAgICAgICBfdGhpcyA9IF9Db21wb25lbnQuY2FsbC5hcHBseShfQ29tcG9uZW50LCBbdGhpc10uY29uY2F0KF9hcmdzKSkgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuc3RhdGUgPSB0eXBlb2YgaW5pdGlhbFN0YXRlID09PSAnZnVuY3Rpb24nID8gaW5pdGlhbFN0YXRlKF90aGlzLnByb3BzKSA6IGluaXRpYWxTdGF0ZTtcbiAgICAgICAgX3RoaXMuc3RhdGVVcGRhdGVycyA9IG1hcFZhbHVlcyhzdGF0ZVVwZGF0ZXJzLCBmdW5jdGlvbiAoaGFuZGxlcikge1xuICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAobWF5QmVFdmVudCkge1xuICAgICAgICAgICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yID4gMSA/IF9sZW4yIC0gMSA6IDApLCBfa2V5MiA9IDE7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgICAgICAgICAgYXJnc1tfa2V5MiAtIDFdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gSGF2aW5nIHRoYXQgZnVuY3Rpb25hbCBmb3JtIG9mIHNldFN0YXRlIGNhbiBiZSBjYWxsZWQgYXN5bmNcbiAgICAgICAgICAgIC8vIHdlIG5lZWQgdG8gcGVyc2lzdCBTeW50aGV0aWNFdmVudFxuICAgICAgICAgICAgaWYgKG1heUJlRXZlbnQgJiYgdHlwZW9mIG1heUJlRXZlbnQucGVyc2lzdCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICBtYXlCZUV2ZW50LnBlcnNpc3QoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgX3RoaXMuc2V0U3RhdGUoZnVuY3Rpb24gKHN0YXRlLCBwcm9wcykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlcihzdGF0ZSwgcHJvcHMpLmFwcGx5KHZvaWQgMCwgW21heUJlRXZlbnRdLmNvbmNhdChhcmdzKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgICAgfVxuXG4gICAgICB2YXIgX3Byb3RvID0gV2l0aFN0YXRlSGFuZGxlcnMucHJvdG90eXBlO1xuXG4gICAgICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gZmFjdG9yeShfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywgdGhpcy5zdGF0ZSwgdGhpcy5zdGF0ZVVwZGF0ZXJzKSk7XG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gV2l0aFN0YXRlSGFuZGxlcnM7XG4gICAgfShDb21wb25lbnQpO1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHJldHVybiBzZXREaXNwbGF5TmFtZSh3cmFwRGlzcGxheU5hbWUoQmFzZUNvbXBvbmVudCwgJ3dpdGhTdGF0ZUhhbmRsZXJzJykpKFdpdGhTdGF0ZUhhbmRsZXJzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gV2l0aFN0YXRlSGFuZGxlcnM7XG4gIH07XG59O1xuXG52YXIgbm9vcCA9IGZ1bmN0aW9uIG5vb3AoKSB7fTtcblxudmFyIHdpdGhSZWR1Y2VyID0gZnVuY3Rpb24gd2l0aFJlZHVjZXIoc3RhdGVOYW1lLCBkaXNwYXRjaE5hbWUsIHJlZHVjZXIsIGluaXRpYWxTdGF0ZSkge1xuICByZXR1cm4gZnVuY3Rpb24gKEJhc2VDb21wb25lbnQpIHtcbiAgICB2YXIgZmFjdG9yeSA9IGNyZWF0ZUZhY3RvcnkoQmFzZUNvbXBvbmVudCk7XG5cbiAgICB2YXIgV2l0aFJlZHVjZXIgPVxuICAgIC8qI19fUFVSRV9fKi9cbiAgICBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICAgICAgX2luaGVyaXRzTG9vc2UoV2l0aFJlZHVjZXIsIF9Db21wb25lbnQpO1xuXG4gICAgICBmdW5jdGlvbiBXaXRoUmVkdWNlcigpIHtcbiAgICAgICAgdmFyIF90aGlzO1xuXG4gICAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICAgIH1cblxuICAgICAgICBfdGhpcyA9IF9Db21wb25lbnQuY2FsbC5hcHBseShfQ29tcG9uZW50LCBbdGhpc10uY29uY2F0KGFyZ3MpKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICBzdGF0ZVZhbHVlOiBfdGhpcy5pbml0aWFsaXplU3RhdGVWYWx1ZSgpXG4gICAgICAgIH07XG5cbiAgICAgICAgX3RoaXMuZGlzcGF0Y2ggPSBmdW5jdGlvbiAoYWN0aW9uLCBjYWxsYmFjaykge1xuICAgICAgICAgIGlmIChjYWxsYmFjayA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgICBjYWxsYmFjayA9IG5vb3A7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIF90aGlzLnNldFN0YXRlKGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgICAgICAgICB2YXIgc3RhdGVWYWx1ZSA9IF9yZWYuc3RhdGVWYWx1ZTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIHN0YXRlVmFsdWU6IHJlZHVjZXIoc3RhdGVWYWx1ZSwgYWN0aW9uKVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soX3RoaXMuc3RhdGUuc3RhdGVWYWx1ZSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgICAgfVxuXG4gICAgICB2YXIgX3Byb3RvID0gV2l0aFJlZHVjZXIucHJvdG90eXBlO1xuXG4gICAgICBfcHJvdG8uaW5pdGlhbGl6ZVN0YXRlVmFsdWUgPSBmdW5jdGlvbiBpbml0aWFsaXplU3RhdGVWYWx1ZSgpIHtcbiAgICAgICAgaWYgKGluaXRpYWxTdGF0ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcmV0dXJuIHR5cGVvZiBpbml0aWFsU3RhdGUgPT09ICdmdW5jdGlvbicgPyBpbml0aWFsU3RhdGUodGhpcy5wcm9wcykgOiBpbml0aWFsU3RhdGU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVkdWNlcih1bmRlZmluZWQsIHtcbiAgICAgICAgICB0eXBlOiAnQEByZWNvbXBvc2UvSU5JVCdcbiAgICAgICAgfSk7XG4gICAgICB9O1xuXG4gICAgICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICB2YXIgX2V4dGVuZHMyO1xuXG4gICAgICAgIHJldHVybiBmYWN0b3J5KF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCAoX2V4dGVuZHMyID0ge30sIF9leHRlbmRzMltzdGF0ZU5hbWVdID0gdGhpcy5zdGF0ZS5zdGF0ZVZhbHVlLCBfZXh0ZW5kczJbZGlzcGF0Y2hOYW1lXSA9IHRoaXMuZGlzcGF0Y2gsIF9leHRlbmRzMikpKTtcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBXaXRoUmVkdWNlcjtcbiAgICB9KENvbXBvbmVudCk7XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgcmV0dXJuIHNldERpc3BsYXlOYW1lKHdyYXBEaXNwbGF5TmFtZShCYXNlQ29tcG9uZW50LCAnd2l0aFJlZHVjZXInKSkoV2l0aFJlZHVjZXIpO1xuICAgIH1cblxuICAgIHJldHVybiBXaXRoUmVkdWNlcjtcbiAgfTtcbn07XG5cbnZhciBpZGVudGl0eSA9IGZ1bmN0aW9uIGlkZW50aXR5KENvbXBvbmVudCQkMSkge1xuICByZXR1cm4gQ29tcG9uZW50JCQxO1xufTtcblxudmFyIGJyYW5jaCA9IGZ1bmN0aW9uIGJyYW5jaCh0ZXN0LCBsZWZ0LCByaWdodCkge1xuICBpZiAocmlnaHQgPT09IHZvaWQgMCkge1xuICAgIHJpZ2h0ID0gaWRlbnRpdHk7XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKEJhc2VDb21wb25lbnQpIHtcbiAgICB2YXIgbGVmdEZhY3Rvcnk7XG4gICAgdmFyIHJpZ2h0RmFjdG9yeTtcblxuICAgIHZhciBCcmFuY2ggPSBmdW5jdGlvbiBCcmFuY2gocHJvcHMpIHtcbiAgICAgIGlmICh0ZXN0KHByb3BzKSkge1xuICAgICAgICBsZWZ0RmFjdG9yeSA9IGxlZnRGYWN0b3J5IHx8IGNyZWF0ZUZhY3RvcnkobGVmdChCYXNlQ29tcG9uZW50KSk7XG4gICAgICAgIHJldHVybiBsZWZ0RmFjdG9yeShwcm9wcyk7XG4gICAgICB9XG5cbiAgICAgIHJpZ2h0RmFjdG9yeSA9IHJpZ2h0RmFjdG9yeSB8fCBjcmVhdGVGYWN0b3J5KHJpZ2h0KEJhc2VDb21wb25lbnQpKTtcbiAgICAgIHJldHVybiByaWdodEZhY3RvcnkocHJvcHMpO1xuICAgIH07XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgcmV0dXJuIHNldERpc3BsYXlOYW1lKHdyYXBEaXNwbGF5TmFtZShCYXNlQ29tcG9uZW50LCAnYnJhbmNoJykpKEJyYW5jaCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIEJyYW5jaDtcbiAgfTtcbn07XG5cbnZhciByZW5kZXJDb21wb25lbnQgPSBmdW5jdGlvbiByZW5kZXJDb21wb25lbnQoQ29tcG9uZW50JCQxKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoXykge1xuICAgIHZhciBmYWN0b3J5ID0gY3JlYXRlRmFjdG9yeShDb21wb25lbnQkJDEpO1xuXG4gICAgdmFyIFJlbmRlckNvbXBvbmVudCA9IGZ1bmN0aW9uIFJlbmRlckNvbXBvbmVudChwcm9wcykge1xuICAgICAgcmV0dXJuIGZhY3RvcnkocHJvcHMpO1xuICAgIH07XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgUmVuZGVyQ29tcG9uZW50LmRpc3BsYXlOYW1lID0gd3JhcERpc3BsYXlOYW1lKENvbXBvbmVudCQkMSwgJ3JlbmRlckNvbXBvbmVudCcpO1xuICAgIH1cblxuICAgIHJldHVybiBSZW5kZXJDb21wb25lbnQ7XG4gIH07XG59O1xuXG52YXIgTm90aGluZyA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHNMb29zZShOb3RoaW5nLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBOb3RoaW5nKCkge1xuICAgIHJldHVybiBfQ29tcG9uZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBOb3RoaW5nLnByb3RvdHlwZTtcblxuICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHJldHVybiBudWxsO1xuICB9O1xuXG4gIHJldHVybiBOb3RoaW5nO1xufShDb21wb25lbnQpO1xuXG52YXIgcmVuZGVyTm90aGluZyA9IGZ1bmN0aW9uIHJlbmRlck5vdGhpbmcoXykge1xuICByZXR1cm4gTm90aGluZztcbn07XG5cbnZhciBzaG91bGRVcGRhdGUgPSBmdW5jdGlvbiBzaG91bGRVcGRhdGUodGVzdCkge1xuICByZXR1cm4gZnVuY3Rpb24gKEJhc2VDb21wb25lbnQpIHtcbiAgICB2YXIgZmFjdG9yeSA9IGNyZWF0ZUZhY3RvcnkoQmFzZUNvbXBvbmVudCk7XG5cbiAgICB2YXIgU2hvdWxkVXBkYXRlID1cbiAgICAvKiNfX1BVUkVfXyovXG4gICAgZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgICAgIF9pbmhlcml0c0xvb3NlKFNob3VsZFVwZGF0ZSwgX0NvbXBvbmVudCk7XG5cbiAgICAgIGZ1bmN0aW9uIFNob3VsZFVwZGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIF9Db21wb25lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgICAgfVxuXG4gICAgICB2YXIgX3Byb3RvID0gU2hvdWxkVXBkYXRlLnByb3RvdHlwZTtcblxuICAgICAgX3Byb3RvLnNob3VsZENvbXBvbmVudFVwZGF0ZSA9IGZ1bmN0aW9uIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMpIHtcbiAgICAgICAgcmV0dXJuIHRlc3QodGhpcy5wcm9wcywgbmV4dFByb3BzKTtcbiAgICAgIH07XG5cbiAgICAgIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiBmYWN0b3J5KHRoaXMucHJvcHMpO1xuICAgICAgfTtcblxuICAgICAgcmV0dXJuIFNob3VsZFVwZGF0ZTtcbiAgICB9KENvbXBvbmVudCk7XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgcmV0dXJuIHNldERpc3BsYXlOYW1lKHdyYXBEaXNwbGF5TmFtZShCYXNlQ29tcG9uZW50LCAnc2hvdWxkVXBkYXRlJykpKFNob3VsZFVwZGF0ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIFNob3VsZFVwZGF0ZTtcbiAgfTtcbn07XG5cbnZhciBwdXJlID0gZnVuY3Rpb24gcHVyZShCYXNlQ29tcG9uZW50KSB7XG4gIHZhciBob2MgPSBzaG91bGRVcGRhdGUoZnVuY3Rpb24gKHByb3BzLCBuZXh0UHJvcHMpIHtcbiAgICByZXR1cm4gIXNoYWxsb3dFcXVhbChwcm9wcywgbmV4dFByb3BzKTtcbiAgfSk7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICByZXR1cm4gc2V0RGlzcGxheU5hbWUod3JhcERpc3BsYXlOYW1lKEJhc2VDb21wb25lbnQsICdwdXJlJykpKGhvYyhCYXNlQ29tcG9uZW50KSk7XG4gIH1cblxuICByZXR1cm4gaG9jKEJhc2VDb21wb25lbnQpO1xufTtcblxudmFyIG9ubHlVcGRhdGVGb3JLZXlzID0gZnVuY3Rpb24gb25seVVwZGF0ZUZvcktleXMocHJvcEtleXMpIHtcbiAgdmFyIGhvYyA9IHNob3VsZFVwZGF0ZShmdW5jdGlvbiAocHJvcHMsIG5leHRQcm9wcykge1xuICAgIHJldHVybiAhc2hhbGxvd0VxdWFsKHBpY2sobmV4dFByb3BzLCBwcm9wS2V5cyksIHBpY2socHJvcHMsIHByb3BLZXlzKSk7XG4gIH0pO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChCYXNlQ29tcG9uZW50KSB7XG4gICAgICByZXR1cm4gc2V0RGlzcGxheU5hbWUod3JhcERpc3BsYXlOYW1lKEJhc2VDb21wb25lbnQsICdvbmx5VXBkYXRlRm9yS2V5cycpKShob2MoQmFzZUNvbXBvbmVudCkpO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gaG9jO1xufTtcblxudmFyIG9ubHlVcGRhdGVGb3JQcm9wVHlwZXMgPSBmdW5jdGlvbiBvbmx5VXBkYXRlRm9yUHJvcFR5cGVzKEJhc2VDb21wb25lbnQpIHtcbiAgdmFyIHByb3BUeXBlcyA9IEJhc2VDb21wb25lbnQucHJvcFR5cGVzO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKCFwcm9wVHlwZXMpIHtcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlICovXG4gICAgICBjb25zb2xlLmVycm9yKCdBIGNvbXBvbmVudCB3aXRob3V0IGFueSBgcHJvcFR5cGVzYCB3YXMgcGFzc2VkIHRvICcgKyAnYG9ubHlVcGRhdGVGb3JQcm9wVHlwZXMoKWAuIENoZWNrIHRoZSBpbXBsZW1lbnRhdGlvbiBvZiB0aGUgJyArIChcImNvbXBvbmVudCB3aXRoIGRpc3BsYXkgbmFtZSBcXFwiXCIgKyBnZXREaXNwbGF5TmFtZShCYXNlQ29tcG9uZW50KSArIFwiXFxcIi5cIikpO1xuICAgICAgLyogZXNsaW50LWVuYWJsZSAqL1xuICAgIH1cbiAgfVxuXG4gIHZhciBwcm9wS2V5cyA9IE9iamVjdC5rZXlzKHByb3BUeXBlcyB8fCB7fSk7XG4gIHZhciBPbmx5VXBkYXRlRm9yUHJvcFR5cGVzID0gb25seVVwZGF0ZUZvcktleXMocHJvcEtleXMpKEJhc2VDb21wb25lbnQpO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgcmV0dXJuIHNldERpc3BsYXlOYW1lKHdyYXBEaXNwbGF5TmFtZShCYXNlQ29tcG9uZW50LCAnb25seVVwZGF0ZUZvclByb3BUeXBlcycpKShPbmx5VXBkYXRlRm9yUHJvcFR5cGVzKTtcbiAgfVxuXG4gIHJldHVybiBPbmx5VXBkYXRlRm9yUHJvcFR5cGVzO1xufTtcblxudmFyIHdpdGhDb250ZXh0ID0gZnVuY3Rpb24gd2l0aENvbnRleHQoY2hpbGRDb250ZXh0VHlwZXMsIGdldENoaWxkQ29udGV4dCkge1xuICByZXR1cm4gZnVuY3Rpb24gKEJhc2VDb21wb25lbnQpIHtcbiAgICB2YXIgZmFjdG9yeSA9IGNyZWF0ZUZhY3RvcnkoQmFzZUNvbXBvbmVudCk7XG5cbiAgICB2YXIgV2l0aENvbnRleHQgPVxuICAgIC8qI19fUFVSRV9fKi9cbiAgICBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICAgICAgX2luaGVyaXRzTG9vc2UoV2l0aENvbnRleHQsIF9Db21wb25lbnQpO1xuXG4gICAgICBmdW5jdGlvbiBXaXRoQ29udGV4dCgpIHtcbiAgICAgICAgdmFyIF90aGlzO1xuXG4gICAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICAgIH1cblxuICAgICAgICBfdGhpcyA9IF9Db21wb25lbnQuY2FsbC5hcHBseShfQ29tcG9uZW50LCBbdGhpc10uY29uY2F0KGFyZ3MpKSB8fCB0aGlzO1xuXG4gICAgICAgIF90aGlzLmdldENoaWxkQ29udGV4dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gZ2V0Q2hpbGRDb250ZXh0KF90aGlzLnByb3BzKTtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgICB9XG5cbiAgICAgIHZhciBfcHJvdG8gPSBXaXRoQ29udGV4dC5wcm90b3R5cGU7XG5cbiAgICAgIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiBmYWN0b3J5KHRoaXMucHJvcHMpO1xuICAgICAgfTtcblxuICAgICAgcmV0dXJuIFdpdGhDb250ZXh0O1xuICAgIH0oQ29tcG9uZW50KTtcblxuICAgIFdpdGhDb250ZXh0LmNoaWxkQ29udGV4dFR5cGVzID0gY2hpbGRDb250ZXh0VHlwZXM7XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgcmV0dXJuIHNldERpc3BsYXlOYW1lKHdyYXBEaXNwbGF5TmFtZShCYXNlQ29tcG9uZW50LCAnd2l0aENvbnRleHQnKSkoV2l0aENvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBXaXRoQ29udGV4dDtcbiAgfTtcbn07XG5cbnZhciBnZXRDb250ZXh0ID0gZnVuY3Rpb24gZ2V0Q29udGV4dChjb250ZXh0VHlwZXMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChCYXNlQ29tcG9uZW50KSB7XG4gICAgdmFyIGZhY3RvcnkgPSBjcmVhdGVGYWN0b3J5KEJhc2VDb21wb25lbnQpO1xuXG4gICAgdmFyIEdldENvbnRleHQgPSBmdW5jdGlvbiBHZXRDb250ZXh0KG93bmVyUHJvcHMsIGNvbnRleHQpIHtcbiAgICAgIHJldHVybiBmYWN0b3J5KF9leHRlbmRzKHt9LCBvd25lclByb3BzLCBjb250ZXh0KSk7XG4gICAgfTtcblxuICAgIEdldENvbnRleHQuY29udGV4dFR5cGVzID0gY29udGV4dFR5cGVzO1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHJldHVybiBzZXREaXNwbGF5TmFtZSh3cmFwRGlzcGxheU5hbWUoQmFzZUNvbXBvbmVudCwgJ2dldENvbnRleHQnKSkoR2V0Q29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIEdldENvbnRleHQ7XG4gIH07XG59O1xuXG52YXIgbGlmZWN5Y2xlID0gZnVuY3Rpb24gbGlmZWN5Y2xlKHNwZWMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChCYXNlQ29tcG9uZW50KSB7XG4gICAgdmFyIGZhY3RvcnkgPSBjcmVhdGVGYWN0b3J5KEJhc2VDb21wb25lbnQpO1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgc3BlYy5oYXNPd25Qcm9wZXJ0eSgncmVuZGVyJykpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ2xpZmVjeWNsZSgpIGRvZXMgbm90IHN1cHBvcnQgdGhlIHJlbmRlciBtZXRob2Q7IGl0cyBiZWhhdmlvciBpcyB0byAnICsgJ3Bhc3MgYWxsIHByb3BzIGFuZCBzdGF0ZSB0byB0aGUgYmFzZSBjb21wb25lbnQuJyk7XG4gICAgfVxuXG4gICAgdmFyIExpZmVjeWNsZSA9XG4gICAgLyojX19QVVJFX18qL1xuICAgIGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gICAgICBfaW5oZXJpdHNMb29zZShMaWZlY3ljbGUsIF9Db21wb25lbnQpO1xuXG4gICAgICBmdW5jdGlvbiBMaWZlY3ljbGUoKSB7XG4gICAgICAgIHJldHVybiBfQ29tcG9uZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICAgIH1cblxuICAgICAgdmFyIF9wcm90byA9IExpZmVjeWNsZS5wcm90b3R5cGU7XG5cbiAgICAgIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiBmYWN0b3J5KF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB0aGlzLnN0YXRlKSk7XG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gTGlmZWN5Y2xlO1xuICAgIH0oQ29tcG9uZW50KTtcblxuICAgIE9iamVjdC5rZXlzKHNwZWMpLmZvckVhY2goZnVuY3Rpb24gKGhvb2spIHtcbiAgICAgIHJldHVybiBMaWZlY3ljbGUucHJvdG90eXBlW2hvb2tdID0gc3BlY1tob29rXTtcbiAgICB9KTtcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICByZXR1cm4gc2V0RGlzcGxheU5hbWUod3JhcERpc3BsYXlOYW1lKEJhc2VDb21wb25lbnQsICdsaWZlY3ljbGUnKSkoTGlmZWN5Y2xlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gTGlmZWN5Y2xlO1xuICB9O1xufTtcblxudmFyIGlzQ2xhc3NDb21wb25lbnQgPSBmdW5jdGlvbiBpc0NsYXNzQ29tcG9uZW50KENvbXBvbmVudCQkMSkge1xuICByZXR1cm4gQm9vbGVhbihDb21wb25lbnQkJDEgJiYgQ29tcG9uZW50JCQxLnByb3RvdHlwZSAmJiB0eXBlb2YgQ29tcG9uZW50JCQxLnByb3RvdHlwZS5yZW5kZXIgPT09ICdmdW5jdGlvbicpO1xufTtcblxudmFyIHRvQ2xhc3MgPSBmdW5jdGlvbiB0b0NsYXNzKGJhc2VDb21wb25lbnQpIHtcbiAgdmFyIF9jbGFzcywgX3RlbXA7XG5cbiAgcmV0dXJuIGlzQ2xhc3NDb21wb25lbnQoYmFzZUNvbXBvbmVudCkgPyBiYXNlQ29tcG9uZW50IDogKF90ZW1wID0gX2NsYXNzID1cbiAgLyojX19QVVJFX18qL1xuICBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICAgIF9pbmhlcml0c0xvb3NlKFRvQ2xhc3MsIF9Db21wb25lbnQpO1xuXG4gICAgZnVuY3Rpb24gVG9DbGFzcygpIHtcbiAgICAgIHJldHVybiBfQ29tcG9uZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG5cbiAgICB2YXIgX3Byb3RvID0gVG9DbGFzcy5wcm90b3R5cGU7XG5cbiAgICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgaWYgKHR5cGVvZiBiYXNlQ29tcG9uZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChiYXNlQ29tcG9uZW50LCB0aGlzLnByb3BzKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGJhc2VDb21wb25lbnQodGhpcy5wcm9wcywgdGhpcy5jb250ZXh0KTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIFRvQ2xhc3M7XG4gIH0oQ29tcG9uZW50KSwgX2NsYXNzLmRpc3BsYXlOYW1lID0gZ2V0RGlzcGxheU5hbWUoYmFzZUNvbXBvbmVudCksIF9jbGFzcy5wcm9wVHlwZXMgPSBiYXNlQ29tcG9uZW50LnByb3BUeXBlcywgX2NsYXNzLmNvbnRleHRUeXBlcyA9IGJhc2VDb21wb25lbnQuY29udGV4dFR5cGVzLCBfY2xhc3MuZGVmYXVsdFByb3BzID0gYmFzZUNvbXBvbmVudC5kZWZhdWx0UHJvcHMsIF90ZW1wKTtcbn07XG5cbmZ1bmN0aW9uIHRvUmVuZGVyUHJvcHMoaG9jKSB7XG4gIHZhciBSZW5kZXJQcm9wc0NvbXBvbmVudCA9IGZ1bmN0aW9uIFJlbmRlclByb3BzQ29tcG9uZW50KHByb3BzKSB7XG4gICAgcmV0dXJuIHByb3BzLmNoaWxkcmVuKHByb3BzKTtcbiAgfTtcblxuICByZXR1cm4gaG9jKFJlbmRlclByb3BzQ29tcG9uZW50KTtcbn1cblxudmFyIGZyb21SZW5kZXJQcm9wcyA9IGZ1bmN0aW9uIGZyb21SZW5kZXJQcm9wcyhSZW5kZXJQcm9wc0NvbXBvbmVudCwgcHJvcHNNYXBwZXIsIHJlbmRlclByb3BOYW1lKSB7XG4gIGlmIChyZW5kZXJQcm9wTmFtZSA9PT0gdm9pZCAwKSB7XG4gICAgcmVuZGVyUHJvcE5hbWUgPSAnY2hpbGRyZW4nO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChCYXNlQ29tcG9uZW50KSB7XG4gICAgdmFyIGJhc2VGYWN0b3J5ID0gUmVhY3QuY3JlYXRlRmFjdG9yeShCYXNlQ29tcG9uZW50KTtcbiAgICB2YXIgcmVuZGVyUHJvcHNGYWN0b3J5ID0gUmVhY3QuY3JlYXRlRmFjdG9yeShSZW5kZXJQcm9wc0NvbXBvbmVudCk7XG5cbiAgICB2YXIgRnJvbVJlbmRlclByb3BzID0gZnVuY3Rpb24gRnJvbVJlbmRlclByb3BzKG93bmVyUHJvcHMpIHtcbiAgICAgIHZhciBfcmVuZGVyUHJvcHNGYWN0b3J5O1xuXG4gICAgICByZXR1cm4gcmVuZGVyUHJvcHNGYWN0b3J5KChfcmVuZGVyUHJvcHNGYWN0b3J5ID0ge30sIF9yZW5kZXJQcm9wc0ZhY3RvcnlbcmVuZGVyUHJvcE5hbWVdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gYmFzZUZhY3RvcnkoX2V4dGVuZHMoe30sIG93bmVyUHJvcHMsIHByb3BzTWFwcGVyLmFwcGx5KHZvaWQgMCwgYXJndW1lbnRzKSkpO1xuICAgICAgfSwgX3JlbmRlclByb3BzRmFjdG9yeSkpO1xuICAgIH07XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgcmV0dXJuIHNldERpc3BsYXlOYW1lKHdyYXBEaXNwbGF5TmFtZShCYXNlQ29tcG9uZW50LCAnZnJvbVJlbmRlclByb3BzJykpKEZyb21SZW5kZXJQcm9wcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIEZyb21SZW5kZXJQcm9wcztcbiAgfTtcbn07XG5cbnZhciBzZXRQcm9wVHlwZXMgPSBmdW5jdGlvbiBzZXRQcm9wVHlwZXMocHJvcFR5cGVzKSB7XG4gIHJldHVybiBzZXRTdGF0aWMoJ3Byb3BUeXBlcycsIHByb3BUeXBlcyk7XG59O1xuXG52YXIgY29tcG9zZSA9IGZ1bmN0aW9uIGNvbXBvc2UoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBmdW5jcyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBmdW5jc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHJldHVybiBmdW5jcy5yZWR1Y2UoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGEoYi5hcHBseSh2b2lkIDAsIGFyZ3VtZW50cykpO1xuICAgIH07XG4gIH0sIGZ1bmN0aW9uIChhcmcpIHtcbiAgICByZXR1cm4gYXJnO1xuICB9KTtcbn07XG5cbnZhciBjcmVhdGVTaW5rID0gZnVuY3Rpb24gY3JlYXRlU2luayhjYWxsYmFjaykge1xuICB2YXIgU2luayA9XG4gIC8qI19fUFVSRV9fKi9cbiAgZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgICBfaW5oZXJpdHNMb29zZShTaW5rLCBfQ29tcG9uZW50KTtcblxuICAgIGZ1bmN0aW9uIFNpbmsoKSB7XG4gICAgICB2YXIgX3RoaXM7XG5cbiAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgfVxuXG4gICAgICBfdGhpcyA9IF9Db21wb25lbnQuY2FsbC5hcHBseShfQ29tcG9uZW50LCBbdGhpc10uY29uY2F0KGFyZ3MpKSB8fCB0aGlzO1xuICAgICAgX3RoaXMuc3RhdGUgPSB7fTtcbiAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG5cbiAgICBTaW5rLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyA9IGZ1bmN0aW9uIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgIGNhbGxiYWNrKG5leHRQcm9wcyk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9O1xuXG4gICAgdmFyIF9wcm90byA9IFNpbmsucHJvdG90eXBlO1xuXG4gICAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH07XG5cbiAgICByZXR1cm4gU2luaztcbiAgfShDb21wb25lbnQpO1xuXG4gIHBvbHlmaWxsKFNpbmspO1xuICByZXR1cm4gU2luaztcbn07XG5cbnZhciBjb21wb25lbnRGcm9tUHJvcCA9IGZ1bmN0aW9uIGNvbXBvbmVudEZyb21Qcm9wKHByb3BOYW1lKSB7XG4gIHZhciBDb21wb25lbnQkJDEgPSBmdW5jdGlvbiBDb21wb25lbnQkJDEocHJvcHMpIHtcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudChwcm9wc1twcm9wTmFtZV0sIG9taXQocHJvcHMsIFtwcm9wTmFtZV0pKTtcbiAgfTtcblxuICBDb21wb25lbnQkJDEuZGlzcGxheU5hbWUgPSBcImNvbXBvbmVudEZyb21Qcm9wKFwiICsgcHJvcE5hbWUgKyBcIilcIjtcbiAgcmV0dXJuIENvbXBvbmVudCQkMTtcbn07XG5cbnZhciBuZXN0ID0gZnVuY3Rpb24gbmVzdCgpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIENvbXBvbmVudHMgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgQ29tcG9uZW50c1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHZhciBmYWN0b3JpZXMgPSBDb21wb25lbnRzLm1hcChjcmVhdGVGYWN0b3J5KTtcblxuICB2YXIgTmVzdCA9IGZ1bmN0aW9uIE5lc3QoX3JlZikge1xuICAgIHZhciBjaGlsZHJlbiA9IF9yZWYuY2hpbGRyZW4sXG4gICAgICAgIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3JlZiwgW1wiY2hpbGRyZW5cIl0pO1xuXG4gICAgcmV0dXJuIGZhY3Rvcmllcy5yZWR1Y2VSaWdodChmdW5jdGlvbiAoY2hpbGQsIGZhY3RvcnkpIHtcbiAgICAgIHJldHVybiBmYWN0b3J5KHByb3BzLCBjaGlsZCk7XG4gICAgfSwgY2hpbGRyZW4pO1xuICB9O1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgdmFyIGRpc3BsYXlOYW1lcyA9IENvbXBvbmVudHMubWFwKGdldERpc3BsYXlOYW1lKTtcbiAgICBOZXN0LmRpc3BsYXlOYW1lID0gXCJuZXN0KFwiICsgZGlzcGxheU5hbWVzLmpvaW4oJywgJykgKyBcIilcIjtcbiAgfVxuXG4gIHJldHVybiBOZXN0O1xufTtcblxudmFyIGhvaXN0U3RhdGljcyA9IGZ1bmN0aW9uIGhvaXN0U3RhdGljcyhoaWdoZXJPcmRlckNvbXBvbmVudCwgYmxhY2tsaXN0KSB7XG4gIHJldHVybiBmdW5jdGlvbiAoQmFzZUNvbXBvbmVudCkge1xuICAgIHZhciBOZXdDb21wb25lbnQgPSBoaWdoZXJPcmRlckNvbXBvbmVudChCYXNlQ29tcG9uZW50KTtcbiAgICBob2lzdE5vblJlYWN0U3RhdGljcyhOZXdDb21wb25lbnQsIEJhc2VDb21wb25lbnQsIGJsYWNrbGlzdCk7XG4gICAgcmV0dXJuIE5ld0NvbXBvbmVudDtcbiAgfTtcbn07XG5cbnZhciBfY29uZmlnID0ge1xuICBmcm9tRVNPYnNlcnZhYmxlOiBudWxsLFxuICB0b0VTT2JzZXJ2YWJsZTogbnVsbFxufTtcblxudmFyIGNvbmZpZ3VyZU9ic2VydmFibGUgPSBmdW5jdGlvbiBjb25maWd1cmVPYnNlcnZhYmxlKGMpIHtcbiAgX2NvbmZpZyA9IGM7XG59O1xuXG52YXIgY29uZmlnID0ge1xuICBmcm9tRVNPYnNlcnZhYmxlOiBmdW5jdGlvbiBmcm9tRVNPYnNlcnZhYmxlKG9ic2VydmFibGUpIHtcbiAgICByZXR1cm4gdHlwZW9mIF9jb25maWcuZnJvbUVTT2JzZXJ2YWJsZSA9PT0gJ2Z1bmN0aW9uJyA/IF9jb25maWcuZnJvbUVTT2JzZXJ2YWJsZShvYnNlcnZhYmxlKSA6IG9ic2VydmFibGU7XG4gIH0sXG4gIHRvRVNPYnNlcnZhYmxlOiBmdW5jdGlvbiB0b0VTT2JzZXJ2YWJsZShzdHJlYW0pIHtcbiAgICByZXR1cm4gdHlwZW9mIF9jb25maWcudG9FU09ic2VydmFibGUgPT09ICdmdW5jdGlvbicgPyBfY29uZmlnLnRvRVNPYnNlcnZhYmxlKHN0cmVhbSkgOiBzdHJlYW07XG4gIH1cbn07XG5cbnZhciBjb21wb25lbnRGcm9tU3RyZWFtV2l0aENvbmZpZyA9IGZ1bmN0aW9uIGNvbXBvbmVudEZyb21TdHJlYW1XaXRoQ29uZmlnKGNvbmZpZyQkMSkge1xuICByZXR1cm4gZnVuY3Rpb24gKHByb3BzVG9WZG9tKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIC8qI19fUFVSRV9fKi9cbiAgICAgIGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gICAgICAgIF9pbmhlcml0c0xvb3NlKENvbXBvbmVudEZyb21TdHJlYW0sIF9Db21wb25lbnQpO1xuXG4gICAgICAgIGZ1bmN0aW9uIENvbXBvbmVudEZyb21TdHJlYW0oKSB7XG4gICAgICAgICAgdmFyIF9jb25maWckZnJvbUVTT2JzZXJ2YTtcblxuICAgICAgICAgIHZhciBfdGhpcztcblxuICAgICAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBfdGhpcyA9IF9Db21wb25lbnQuY2FsbC5hcHBseShfQ29tcG9uZW50LCBbdGhpc10uY29uY2F0KGFyZ3MpKSB8fCB0aGlzO1xuICAgICAgICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgdmRvbTogbnVsbFxuICAgICAgICAgIH07XG4gICAgICAgICAgX3RoaXMucHJvcHNFbWl0dGVyID0gY3JlYXRlQ2hhbmdlRW1pdHRlcigpO1xuICAgICAgICAgIF90aGlzLnByb3BzJCA9IGNvbmZpZyQkMS5mcm9tRVNPYnNlcnZhYmxlKChfY29uZmlnJGZyb21FU09ic2VydmEgPSB7XG4gICAgICAgICAgICBzdWJzY3JpYmU6IGZ1bmN0aW9uIHN1YnNjcmliZShvYnNlcnZlcikge1xuICAgICAgICAgICAgICB2YXIgdW5zdWJzY3JpYmUgPSBfdGhpcy5wcm9wc0VtaXR0ZXIubGlzdGVuKGZ1bmN0aW9uIChwcm9wcykge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wcykge1xuICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dChwcm9wcyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHVuc3Vic2NyaWJlOiB1bnN1YnNjcmliZVxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIF9jb25maWckZnJvbUVTT2JzZXJ2YVskJG9ic2VydmFibGVdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgfSwgX2NvbmZpZyRmcm9tRVNPYnNlcnZhKSk7XG4gICAgICAgICAgX3RoaXMudmRvbSQgPSBjb25maWckJDEudG9FU09ic2VydmFibGUocHJvcHNUb1Zkb20oX3RoaXMucHJvcHMkKSk7XG4gICAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIF9wcm90byA9IENvbXBvbmVudEZyb21TdHJlYW0ucHJvdG90eXBlO1xuXG4gICAgICAgIF9wcm90by5jb21wb25lbnRXaWxsTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICAgICAvLyBTdWJzY3JpYmUgdG8gY2hpbGQgcHJvcCBjaGFuZ2VzIHNvIHdlIGtub3cgd2hlbiB0byByZS1yZW5kZXJcbiAgICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMudmRvbSQuc3Vic2NyaWJlKHtcbiAgICAgICAgICAgIG5leHQ6IGZ1bmN0aW9uIG5leHQodmRvbSkge1xuICAgICAgICAgICAgICBfdGhpczIuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIHZkb206IHZkb21cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdGhpcy5wcm9wc0VtaXR0ZXIuZW1pdCh0aGlzLnByb3BzKTtcbiAgICAgICAgfTtcblxuICAgICAgICBfcHJvdG8uY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICAgICAgLy8gUmVjZWl2ZSBuZXcgcHJvcHMgZnJvbSB0aGUgb3duZXJcbiAgICAgICAgICB0aGlzLnByb3BzRW1pdHRlci5lbWl0KG5leHRQcm9wcyk7XG4gICAgICAgIH07XG5cbiAgICAgICAgX3Byb3RvLnNob3VsZENvbXBvbmVudFVwZGF0ZSA9IGZ1bmN0aW9uIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMsIG5leHRTdGF0ZSkge1xuICAgICAgICAgIHJldHVybiBuZXh0U3RhdGUudmRvbSAhPT0gdGhpcy5zdGF0ZS52ZG9tO1xuICAgICAgICB9O1xuXG4gICAgICAgIF9wcm90by5jb21wb25lbnRXaWxsVW5tb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICAgIC8vIENhbGwgd2l0aG91dCBhcmd1bWVudHMgdG8gY29tcGxldGUgc3RyZWFtXG4gICAgICAgICAgdGhpcy5wcm9wc0VtaXR0ZXIuZW1pdCgpOyAvLyBDbGVhbi11cCBzdWJzY3JpcHRpb24gYmVmb3JlIHVuLW1vdW50aW5nXG5cbiAgICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICB9O1xuXG4gICAgICAgIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUudmRvbTtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gQ29tcG9uZW50RnJvbVN0cmVhbTtcbiAgICAgIH0oQ29tcG9uZW50KVxuICAgICk7XG4gIH07XG59O1xuXG52YXIgY29tcG9uZW50RnJvbVN0cmVhbSA9IGZ1bmN0aW9uIGNvbXBvbmVudEZyb21TdHJlYW0ocHJvcHNUb1Zkb20pIHtcbiAgcmV0dXJuIGNvbXBvbmVudEZyb21TdHJlYW1XaXRoQ29uZmlnKGNvbmZpZykocHJvcHNUb1Zkb20pO1xufTtcblxudmFyIGlkZW50aXR5JDEgPSBmdW5jdGlvbiBpZGVudGl0eSh0KSB7XG4gIHJldHVybiB0O1xufTtcblxudmFyIG1hcFByb3BzU3RyZWFtV2l0aENvbmZpZyA9IGZ1bmN0aW9uIG1hcFByb3BzU3RyZWFtV2l0aENvbmZpZyhjb25maWckJDEpIHtcbiAgdmFyIGNvbXBvbmVudEZyb21TdHJlYW0kJDEgPSBjb21wb25lbnRGcm9tU3RyZWFtV2l0aENvbmZpZyh7XG4gICAgZnJvbUVTT2JzZXJ2YWJsZTogaWRlbnRpdHkkMSxcbiAgICB0b0VTT2JzZXJ2YWJsZTogaWRlbnRpdHkkMVxuICB9KTtcbiAgcmV0dXJuIGZ1bmN0aW9uICh0cmFuc2Zvcm0pIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKEJhc2VDb21wb25lbnQpIHtcbiAgICAgIHZhciBmYWN0b3J5ID0gY3JlYXRlRmFjdG9yeShCYXNlQ29tcG9uZW50KTtcbiAgICAgIHZhciBmcm9tRVNPYnNlcnZhYmxlID0gY29uZmlnJCQxLmZyb21FU09ic2VydmFibGUsXG4gICAgICAgICAgdG9FU09ic2VydmFibGUgPSBjb25maWckJDEudG9FU09ic2VydmFibGU7XG4gICAgICByZXR1cm4gY29tcG9uZW50RnJvbVN0cmVhbSQkMShmdW5jdGlvbiAocHJvcHMkKSB7XG4gICAgICAgIHZhciBfcmVmO1xuXG4gICAgICAgIHJldHVybiBfcmVmID0ge1xuICAgICAgICAgIHN1YnNjcmliZTogZnVuY3Rpb24gc3Vic2NyaWJlKG9ic2VydmVyKSB7XG4gICAgICAgICAgICB2YXIgc3Vic2NyaXB0aW9uID0gdG9FU09ic2VydmFibGUodHJhbnNmb3JtKGZyb21FU09ic2VydmFibGUocHJvcHMkKSkpLnN1YnNjcmliZSh7XG4gICAgICAgICAgICAgIG5leHQ6IGZ1bmN0aW9uIG5leHQoY2hpbGRQcm9wcykge1xuICAgICAgICAgICAgICAgIHJldHVybiBvYnNlcnZlci5uZXh0KGZhY3RvcnkoY2hpbGRQcm9wcykpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIHVuc3Vic2NyaWJlOiBmdW5jdGlvbiB1bnN1YnNjcmliZSgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfVxuICAgICAgICB9LCBfcmVmWyQkb2JzZXJ2YWJsZV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH0sIF9yZWY7XG4gICAgICB9KTtcbiAgICB9O1xuICB9O1xufTtcblxudmFyIG1hcFByb3BzU3RyZWFtID0gZnVuY3Rpb24gbWFwUHJvcHNTdHJlYW0odHJhbnNmb3JtKSB7XG4gIHZhciBob2MgPSBtYXBQcm9wc1N0cmVhbVdpdGhDb25maWcoY29uZmlnKSh0cmFuc2Zvcm0pO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChCYXNlQ29tcG9uZW50KSB7XG4gICAgICByZXR1cm4gc2V0RGlzcGxheU5hbWUod3JhcERpc3BsYXlOYW1lKEJhc2VDb21wb25lbnQsICdtYXBQcm9wc1N0cmVhbScpKShob2MoQmFzZUNvbXBvbmVudCkpO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gaG9jO1xufTtcblxudmFyIGNyZWF0ZUV2ZW50SGFuZGxlcldpdGhDb25maWcgPSBmdW5jdGlvbiBjcmVhdGVFdmVudEhhbmRsZXJXaXRoQ29uZmlnKGNvbmZpZyQkMSkge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBfY29uZmlnJGZyb21FU09ic2VydmE7XG5cbiAgICB2YXIgZW1pdHRlciA9IGNyZWF0ZUNoYW5nZUVtaXR0ZXIoKTtcbiAgICB2YXIgc3RyZWFtID0gY29uZmlnJCQxLmZyb21FU09ic2VydmFibGUoKF9jb25maWckZnJvbUVTT2JzZXJ2YSA9IHtcbiAgICAgIHN1YnNjcmliZTogZnVuY3Rpb24gc3Vic2NyaWJlKG9ic2VydmVyKSB7XG4gICAgICAgIHZhciB1bnN1YnNjcmliZSA9IGVtaXR0ZXIubGlzdGVuKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgIHJldHVybiBvYnNlcnZlci5uZXh0KHZhbHVlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdW5zdWJzY3JpYmU6IHVuc3Vic2NyaWJlXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfSwgX2NvbmZpZyRmcm9tRVNPYnNlcnZhWyQkb2JzZXJ2YWJsZV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LCBfY29uZmlnJGZyb21FU09ic2VydmEpKTtcbiAgICByZXR1cm4ge1xuICAgICAgaGFuZGxlcjogZW1pdHRlci5lbWl0LFxuICAgICAgc3RyZWFtOiBzdHJlYW1cbiAgICB9O1xuICB9O1xufTtcbnZhciBjcmVhdGVFdmVudEhhbmRsZXIgPSBjcmVhdGVFdmVudEhhbmRsZXJXaXRoQ29uZmlnKGNvbmZpZyk7XG5cbi8vIEhpZ2hlci1vcmRlciBjb21wb25lbnQgaGVscGVyc1xuXG5leHBvcnQgeyBtYXBQcm9wcywgd2l0aFByb3BzLCB3aXRoUHJvcHNPbkNoYW5nZSwgd2l0aEhhbmRsZXJzLCBkZWZhdWx0UHJvcHMsIHJlbmFtZVByb3AsIHJlbmFtZVByb3BzLCBmbGF0dGVuUHJvcCwgd2l0aFN0YXRlLCB3aXRoU3RhdGVIYW5kbGVycywgd2l0aFJlZHVjZXIsIGJyYW5jaCwgcmVuZGVyQ29tcG9uZW50LCByZW5kZXJOb3RoaW5nLCBzaG91bGRVcGRhdGUsIHB1cmUsIG9ubHlVcGRhdGVGb3JLZXlzLCBvbmx5VXBkYXRlRm9yUHJvcFR5cGVzLCB3aXRoQ29udGV4dCwgZ2V0Q29udGV4dCwgbGlmZWN5Y2xlLCB0b0NsYXNzLCB0b1JlbmRlclByb3BzLCBmcm9tUmVuZGVyUHJvcHMsIHNldFN0YXRpYywgc2V0UHJvcFR5cGVzLCBzZXREaXNwbGF5TmFtZSwgY29tcG9zZSwgZ2V0RGlzcGxheU5hbWUsIHdyYXBEaXNwbGF5TmFtZSwgc2hhbGxvd0VxdWFsLCBpc0NsYXNzQ29tcG9uZW50LCBjcmVhdGVTaW5rLCBjb21wb25lbnRGcm9tUHJvcCwgbmVzdCwgaG9pc3RTdGF0aWNzLCBjb21wb25lbnRGcm9tU3RyZWFtLCBjb21wb25lbnRGcm9tU3RyZWFtV2l0aENvbmZpZywgbWFwUHJvcHNTdHJlYW0sIG1hcFByb3BzU3RyZWFtV2l0aENvbmZpZywgY3JlYXRlRXZlbnRIYW5kbGVyLCBjcmVhdGVFdmVudEhhbmRsZXJXaXRoQ29uZmlnLCBjb25maWd1cmVPYnNlcnZhYmxlIGFzIHNldE9ic2VydmFibGVDb25maWcgfTtcbiIsIi8qIGdsb2JhbCB3aW5kb3cgKi9cbmltcG9ydCBwb255ZmlsbCBmcm9tICcuL3BvbnlmaWxsLmpzJztcblxudmFyIHJvb3Q7XG5cbmlmICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgcm9vdCA9IHNlbGY7XG59IGVsc2UgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gIHJvb3QgPSB3aW5kb3c7XG59IGVsc2UgaWYgKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnKSB7XG4gIHJvb3QgPSBnbG9iYWw7XG59IGVsc2UgaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnKSB7XG4gIHJvb3QgPSBtb2R1bGU7XG59IGVsc2Uge1xuICByb290ID0gRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbn1cblxudmFyIHJlc3VsdCA9IHBvbnlmaWxsKHJvb3QpO1xuZXhwb3J0IGRlZmF1bHQgcmVzdWx0O1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3ltYm9sT2JzZXJ2YWJsZVBvbnlmaWxsKHJvb3QpIHtcblx0dmFyIHJlc3VsdDtcblx0dmFyIFN5bWJvbCA9IHJvb3QuU3ltYm9sO1xuXG5cdGlmICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0aWYgKFN5bWJvbC5vYnNlcnZhYmxlKSB7XG5cdFx0XHRyZXN1bHQgPSBTeW1ib2wub2JzZXJ2YWJsZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVzdWx0ID0gU3ltYm9sKCdvYnNlcnZhYmxlJyk7XG5cdFx0XHRTeW1ib2wub2JzZXJ2YWJsZSA9IHJlc3VsdDtcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0cmVzdWx0ID0gJ0BAb2JzZXJ2YWJsZSc7XG5cdH1cblxuXHRyZXR1cm4gcmVzdWx0O1xufTtcbiIsImltcG9ydCBTcGVha2VycyBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvU3BlYWtlcnNcIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vc3JjL2xheW91dHNcIjtcclxuXHJcbmNvbnN0IFBhZ2UgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgPFNwZWFrZXJzIGJnQ29sb3I9XCJiZy1ncmF5LTUwMFwiIC8+XHJcbiAgICAgIDwvTGF5b3V0PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhZ2U7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZHVjZXIgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgUmVxdWVzdFJlZHVjZXIsIHsgUkVRVUVTVF9TVEFUVVMgfSBmcm9tIFwiLi4vcmVkdWNlcnNcIjtcclxuaW1wb3J0IHtcclxuICBHRVRfQUxMX1NVQ0NFU1MsXHJcbiAgR0VUX0FMTF9GQUlMVVJFLFxyXG4gIFBVVF9TVUNDRVNTLFxyXG4gIFBVVF9GQUlMVVJFLFxyXG59IGZyb20gXCIuLi9hY3Rpb25zXCI7XHJcblxyXG5jb25zdCB3aXRoUmVxdWVzdCA9IChiYXNlVXJsLCByb3V0ZU5hbWUpID0+IChDb21wb25lbnQpID0+IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IFt7IHJlY29yZHMsIHN0YXR1cywgZXJyb3IgfSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihSZXF1ZXN0UmVkdWNlciwge1xyXG4gICAgcmVjb3JkczogW10sXHJcbiAgICBzdGF0dXM6IFJFUVVFU1RfU1RBVFVTLkxPQURJTkcsXHJcbiAgICBlcnJvcjogbnVsbCxcclxuICB9KTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgJHtiYXNlVXJsfS8ke3JvdXRlTmFtZX1gKTtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICByZWNvcmRzOiByZXNwb25zZS5kYXRhLFxyXG4gICAgICAgICAgdHlwZTogR0VUX0FMTF9TVUNDRVNTLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgdHlwZTogR0VUX0FMTF9GQUlMVVJFLFxyXG4gICAgICAgICAgZXJyb3I6IGUsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICBmZXRjaERhdGEoKTtcclxuICB9LCBbYmFzZVVybCwgcm91dGVOYW1lXSk7XHJcblxyXG4gIGNvbnN0IHByb3BzTG9jYWwgPSB7XHJcbiAgICByZWNvcmRzLFxyXG4gICAgc3RhdHVzLFxyXG4gICAgZXJyb3IsXHJcbiAgICBwdXQ6IGFzeW5jIChyZWNvcmQpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBhd2FpdCBheGlvcy5wdXQoYCR7YmFzZVVybH0vJHtyb3V0ZU5hbWV9LyR7cmVjb3JkLmlkfWAsIHJlY29yZCk7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgdHlwZTogUFVUX1NVQ0NFU1MsXHJcbiAgICAgICAgICBzaW5nbGVSZWNvcmQ6IHJlY29yZCxcclxuICAgICAgICB9KTtcclxuICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgIHR5cGU6IFBVVF9GQUlMVVJFLFxyXG4gICAgICAgICAgZXJyb3I6IGUsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgfTtcclxuICByZXR1cm4gPENvbXBvbmVudCB7Li4ucHJvcHN9IHsuLi5wcm9wc0xvY2FsfT48L0NvbXBvbmVudD47XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUmVxdWVzdDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3Qgd2l0aFNwZWNpYWxNZXNzYWdlID0gKCkgPT4gKENvbXBvbmVudCkgPT4gKHByb3BzKSA9PiB7XHJcbiAgY29uc3Qgc3BlY2lhbE1lc3NhZ2UgPSBcIlRhbGsgb24gQW5ndWxhciBDYW5jZWxsZWQgYXQgMTA6MzBBTVwiO1xyXG4gIHJldHVybiA8Q29tcG9uZW50IHsuLi5wcm9wc30gc3BlY2lhbE1lc3NhZ2U9e3NwZWNpYWxNZXNzYWdlfT48L0NvbXBvbmVudD47XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoU3BlY2lhbE1lc3NhZ2U7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgU2VhcmNoQmFyIGZyb20gXCIuLi9TZWFyY2hCYXJcIjtcclxuaW1wb3J0IFNpbmdsZVNwZWFrZXIgZnJvbSBcIi4vc2luZ2xlU3BlYWtlclwiO1xyXG5pbXBvcnQgeyBSRVFVRVNUX1NUQVRVUyB9IGZyb20gXCIuLi8uLi9yZWR1Y2Vyc1wiO1xyXG5pbXBvcnQgeyBjb21wb3NlIH0gZnJvbSBcInJlY29tcG9zZVwiO1xyXG5cclxuLy9IT0NzXHJcbmltcG9ydCB3aXRoUmVxdWVzdCBmcm9tIFwiLi4vLi4vSE9Dcy93aXRoUmVxdWVzdFwiO1xyXG5pbXBvcnQgd2l0aFNwZWNpYWxNZXNzYWdlIGZyb20gXCIuLi8uLi9IT0NzL3dpdGhTcGVjaWFsTWVzc2FnZVwiO1xyXG5cclxuY29uc3QgU3BlYWtlcnMgPSAoe1xyXG4gIHJlY29yZHM6IHNwZWFrZXJzLFxyXG4gIHN0YXR1cyxcclxuICBlcnJvcixcclxuICBwdXQsXHJcbiAgYmdDb2xvcixcclxuICBzcGVjaWFsTWVzc2FnZSxcclxufSkgPT4ge1xyXG4gIGNvbnN0IFtzZWFyY2hRdWVyeSwgc2V0U2VhcmNoUXVlcnldID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIGNvbnN0IHN1Y2Nlc3MgPSBzdGF0dXMgPT09IFJFUVVFU1RfU1RBVFVTLlNVQ0NFU1M7XHJcbiAgY29uc3QgaXNMb2FkaW5nID0gc3RhdHVzID09PSBSRVFVRVNUX1NUQVRVUy5MT0FESU5HO1xyXG4gIGNvbnN0IGlzRXJyb3IgPSBzdGF0dXMgPT09IFJFUVVFU1RfU1RBVFVTLkVSUk9SO1xyXG5cclxuICBjb25zdCB0b2dnbGVCdXR0b25IYW5kbGVyID0gYXN5bmMgKHNwZWFrZXJSZWNvcmQpID0+IHtcclxuICAgIHB1dCh7XHJcbiAgICAgIC4uLnNwZWFrZXJSZWNvcmQsXHJcbiAgICAgIGlzRmF2b3JpdGU6ICFzcGVha2VyUmVjb3JkLmlzRmF2b3JpdGUsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBtYXBTcGVha2VycyA9IHNwZWFrZXJzXHJcbiAgICAuZmlsdGVyKChyZWNvcmQpID0+IHtcclxuICAgICAgY29uc3QgdGFyZ2V0U3RyaW5nID0gYCR7cmVjb3JkLmxhc3ROYW1lfSAke3JlY29yZC5maXJzdE5hbWV9YC50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICByZXR1cm4gc2VhcmNoUXVlcnkubGVuZ3RoID09PSAwXHJcbiAgICAgICAgPyB0cnVlXHJcbiAgICAgICAgOiB0YXJnZXRTdHJpbmcuaW5jbHVkZXMoc2VhcmNoUXVlcnkudG9Mb3dlckNhc2UoKSk7XHJcbiAgICB9KVxyXG4gICAgLm1hcCgoc2luZ2xlKSA9PiB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPFNpbmdsZVNwZWFrZXJcclxuICAgICAgICAgIGtleT17c2luZ2xlLmlkfVxyXG4gICAgICAgICAgey4uLnNpbmdsZX1cclxuICAgICAgICAgIHRvZ2dsZUJ1dHRvbj17KCkgPT4gdG9nZ2xlQnV0dG9uSGFuZGxlcihzaW5nbGUpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxTZWFyY2hCYXIgc2VhcmNoUXVlcnk9e3NlYXJjaFF1ZXJ5fSBzZXRTZWFyY2hRdWVyeT17c2V0U2VhcmNoUXVlcnl9IC8+XHJcblxyXG4gICAgICB7c3BlY2lhbE1lc3NhZ2UgJiYgc3BlY2lhbE1lc3NhZ2UubGVuZ3RoID4gMCAmJiAoXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYmctb3JhbmdlLTEwMCBib3JkZXItbC04IGJvcmRlci1vcmFuZ2UtNTAwIHRleHQtb3JhbmdlLTcwMCBwLTQgdGV4dC0yeGxcIlxyXG4gICAgICAgICAgcm9sZT1cImFsZXJ0XCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LWJvbGRcIj5TcGVjaWFsIE1lc3NhZ2U8L3A+XHJcbiAgICAgICAgICA8cD57c3BlY2lhbE1lc3NhZ2V9PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG5cclxuICAgICAge2lzTG9hZGluZyAmJiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj59XHJcblxyXG4gICAgICB7LyogZXJyb3IgaGFuZGxpbmcgKi99XHJcbiAgICAgIHtpc0Vycm9yICYmIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgTG9hZGluZyBlcnJvci4uLiBJcyB0aGUganNvbi1zZXJ2ZXIgdXAgYW5kIHJ1bm5pbmc/ICh0cnkgXCJucG0gcnVuXHJcbiAgICAgICAgICBqc29uLXNlcnZlclwiIGF0IHlvdXIgdGVybWluYWwpIDxiciAvPlxyXG4gICAgICAgICAgPGI+RVJST1I6IHtlcnJvci5tZXNzYWdlfTwvYj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuXHJcbiAgICAgIHtzdWNjZXNzICYmIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgbWQ6Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTMgZ3JpZC1jb2xzLTEgZ2FwLTEyXCI+XHJcbiAgICAgICAgICB7bWFwU3BlYWtlcnN9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29tcG9zZShcclxuICB3aXRoU3BlY2lhbE1lc3NhZ2UoKSxcclxuICB3aXRoUmVxdWVzdChcImh0dHA6Ly9sb2NhbGhvc3Q6NDAwMFwiLCBcInNwZWFrZXJzXCIpXHJcbikoU3BlYWtlcnMpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9