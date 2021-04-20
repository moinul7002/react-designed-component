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
      put = _ref.put;

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
      lineNumber: 34,
      columnNumber: 9
    }, _this);
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_SearchBar__WEBPACK_IMPORTED_MODULE_5__["default"], {
      searchQuery: searchQuery,
      setSearchQuery: setSearchQuery
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }, _this), isLoading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: "Loading..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 21
    }, _this), isError && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: ["Loading error... Is the json-server up and running? (try \"npm run json-server\" at your terminal) ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 42
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
        children: ["ERROR: ", error.message]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }, _this), success && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-12",
      children: mapSpeakers
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }, _this)]
  }, void 0, true);
};

_s(Speakers, "4/Qdl0R3tQNJqUS4eMrvY/uMU/4=");

_c = Speakers;
/* harmony default export */ __webpack_exports__["default"] = (Object(recompose__WEBPACK_IMPORTED_MODULE_8__["compose"])(Object(_HOCs_withSpecialMessage__WEBPACK_IMPORTED_MODULE_10__["default"])(), Object(_HOCs_withRequest__WEBPACK_IMPORTED_MODULE_9__["default"])("http://localhost:4000", "speakers")(Speakers)));

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pbmhlcml0c0xvb3NlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2NoYW5nZS1lbWl0dGVyL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2ZianMvbGliL3NoYWxsb3dFcXVhbC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hvaXN0LW5vbi1yZWFjdC1zdGF0aWNzL2Rpc3QvaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MuY2pzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtbGlmZWN5Y2xlcy1jb21wYXQvcmVhY3QtbGlmZWN5Y2xlcy1jb21wYXQuZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWNvbXBvc2UvZGlzdC9SZWNvbXBvc2UuZXNtLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvc3ltYm9sLW9ic2VydmFibGUvZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9zeW1ib2wtb2JzZXJ2YWJsZS9lcy9wb255ZmlsbC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU3BlYWtlcnMvaW5kZXguanMiXSwibmFtZXMiOlsiU3BlYWtlcnMiLCJzcGVha2VycyIsInJlY29yZHMiLCJzdGF0dXMiLCJlcnJvciIsInB1dCIsInVzZVN0YXRlIiwic2VhcmNoUXVlcnkiLCJzZXRTZWFyY2hRdWVyeSIsInN1Y2Nlc3MiLCJSRVFVRVNUX1NUQVRVUyIsIlNVQ0NFU1MiLCJpc0xvYWRpbmciLCJMT0FESU5HIiwiaXNFcnJvciIsIkVSUk9SIiwidG9nZ2xlQnV0dG9uSGFuZGxlciIsInNwZWFrZXJSZWNvcmQiLCJpc0Zhdm9yaXRlIiwibWFwU3BlYWtlcnMiLCJmaWx0ZXIiLCJyZWNvcmQiLCJ0YXJnZXRTdHJpbmciLCJsYXN0TmFtZSIsImZpcnN0TmFtZSIsInRvTG93ZXJDYXNlIiwibGVuZ3RoIiwiaW5jbHVkZXMiLCJtYXAiLCJzaW5nbGUiLCJpZCIsIm1lc3NhZ2UiLCJjb21wb3NlIiwid2l0aFNwZWNpYWxNZXNzYWdlIiwid2l0aFJlcXVlc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQWU7QUFDZjtBQUNBLG1CQUFtQixzQkFBc0I7QUFDekM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUNoQkE7QUFBQTtBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDSkE7QUFBQTtBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYSx1QkFBdUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUNiYTs7QUFFYjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsc0JBQXNCO0FBQ3pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7Ozs7OztBQ2xEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRWE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLGtCQUFrQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDhCOzs7Ozs7Ozs7Ozs7QUNoRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4Q0FBOEM7O0FBRTlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsdUJBQXVCLGlCQUFpQjtBQUN4QztBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7QUNuRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRW9COzs7Ozs7Ozs7Ozs7O0FDN0pwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBdUU7QUFDYjtBQUNUO0FBQ3FCO0FBQ25CO0FBQ2lEO0FBQ3pDO0FBQ047QUFDUjs7QUFFN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7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Q0FGSjtBQUdELEdBTmlCLEVBT2pCRyxHQVBpQixDQU9iLFVBQUNDLE1BQUQsRUFBWTtBQUNmLHdCQUNFLHFFQUFDLHNEQUFELGtDQUVNQSxNQUZOO0FBR0Usa0JBQVksRUFBRTtBQUFBLGVBQU1iLG1CQUFtQixDQUFDYSxNQUFELENBQXpCO0FBQUE7QUFIaEIsUUFDT0EsTUFBTSxDQUFDQyxFQURkO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjtBQU9ELEdBZmlCLENBQXBCO0FBaUJBLHNCQUNFO0FBQUEsNEJBQ0UscUVBQUMsa0RBQUQ7QUFBVyxpQkFBVyxFQUFFdkIsV0FBeEI7QUFBcUMsb0JBQWMsRUFBRUM7QUFBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLEVBRUdJLFNBQVMsaUJBQUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGaEIsRUFJR0UsT0FBTyxpQkFDTjtBQUFBLHFJQUVpQztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRmpDLGVBR0U7QUFBQSw4QkFBV1YsS0FBSyxDQUFDMkIsT0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTEosRUFXR3RCLE9BQU8saUJBQ047QUFBSyxlQUFTLEVBQUMsdURBQWY7QUFBQSxnQkFDR1U7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBWko7QUFBQSxrQkFERjtBQW1CRCxDQWxERDs7R0FBTW5CLFE7O0tBQUFBLFE7QUFvRFNnQyx3SEFBTyxDQUNwQkMseUVBQWtCLEVBREUsRUFFcEJDLGlFQUFXLENBQUMsdUJBQUQsRUFBMEIsVUFBMUIsQ0FBWCxDQUFpRGxDLFFBQWpELENBRm9CLENBQXRCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NwZWFrZXJzLmRiNmFmZGJkYWU4MDkyZDA2OWY4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9pbmhlcml0c0xvb3NlKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcy5wcm90b3R5cGUpO1xuICBzdWJDbGFzcy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBzdWJDbGFzcztcbiAgc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzcztcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0ge307XG4gIHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgdmFyIGtleSwgaTtcblxuICBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGtleSA9IHNvdXJjZUtleXNbaV07XG4gICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn0iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG52YXIgY3JlYXRlQ2hhbmdlRW1pdHRlciA9IGV4cG9ydHMuY3JlYXRlQ2hhbmdlRW1pdHRlciA9IGZ1bmN0aW9uIGNyZWF0ZUNoYW5nZUVtaXR0ZXIoKSB7XG4gIHZhciBjdXJyZW50TGlzdGVuZXJzID0gW107XG4gIHZhciBuZXh0TGlzdGVuZXJzID0gY3VycmVudExpc3RlbmVycztcblxuICBmdW5jdGlvbiBlbnN1cmVDYW5NdXRhdGVOZXh0TGlzdGVuZXJzKCkge1xuICAgIGlmIChuZXh0TGlzdGVuZXJzID09PSBjdXJyZW50TGlzdGVuZXJzKSB7XG4gICAgICBuZXh0TGlzdGVuZXJzID0gY3VycmVudExpc3RlbmVycy5zbGljZSgpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGxpc3RlbihsaXN0ZW5lcikge1xuICAgIGlmICh0eXBlb2YgbGlzdGVuZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgbGlzdGVuZXIgdG8gYmUgYSBmdW5jdGlvbi4nKTtcbiAgICB9XG5cbiAgICB2YXIgaXNTdWJzY3JpYmVkID0gdHJ1ZTtcblxuICAgIGVuc3VyZUNhbk11dGF0ZU5leHRMaXN0ZW5lcnMoKTtcbiAgICBuZXh0TGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghaXNTdWJzY3JpYmVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaXNTdWJzY3JpYmVkID0gZmFsc2U7XG5cbiAgICAgIGVuc3VyZUNhbk11dGF0ZU5leHRMaXN0ZW5lcnMoKTtcbiAgICAgIHZhciBpbmRleCA9IG5leHRMaXN0ZW5lcnMuaW5kZXhPZihsaXN0ZW5lcik7XG4gICAgICBuZXh0TGlzdGVuZXJzLnNwbGljZShpbmRleCwgMSk7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGVtaXQoKSB7XG4gICAgY3VycmVudExpc3RlbmVycyA9IG5leHRMaXN0ZW5lcnM7XG4gICAgdmFyIGxpc3RlbmVycyA9IGN1cnJlbnRMaXN0ZW5lcnM7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0ZW5lcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxpc3RlbmVyc1tpXS5hcHBseShsaXN0ZW5lcnMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBsaXN0ZW46IGxpc3RlbixcbiAgICBlbWl0OiBlbWl0XG4gIH07XG59OyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQHR5cGVjaGVja3NcbiAqIFxuICovXG5cbi8qZXNsaW50LWRpc2FibGUgbm8tc2VsZi1jb21wYXJlICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBpbmxpbmVkIE9iamVjdC5pcyBwb2x5ZmlsbCB0byBhdm9pZCByZXF1aXJpbmcgY29uc3VtZXJzIHNoaXAgdGhlaXIgb3duXG4gKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9PYmplY3QvaXNcbiAqL1xuZnVuY3Rpb24gaXMoeCwgeSkge1xuICAvLyBTYW1lVmFsdWUgYWxnb3JpdGhtXG4gIGlmICh4ID09PSB5KSB7XG4gICAgLy8gU3RlcHMgMS01LCA3LTEwXG4gICAgLy8gU3RlcHMgNi5iLTYuZTogKzAgIT0gLTBcbiAgICAvLyBBZGRlZCB0aGUgbm9uemVybyB5IGNoZWNrIHRvIG1ha2UgRmxvdyBoYXBweSwgYnV0IGl0IGlzIHJlZHVuZGFudFxuICAgIHJldHVybiB4ICE9PSAwIHx8IHkgIT09IDAgfHwgMSAvIHggPT09IDEgLyB5O1xuICB9IGVsc2Uge1xuICAgIC8vIFN0ZXAgNi5hOiBOYU4gPT0gTmFOXG4gICAgcmV0dXJuIHggIT09IHggJiYgeSAhPT0geTtcbiAgfVxufVxuXG4vKipcbiAqIFBlcmZvcm1zIGVxdWFsaXR5IGJ5IGl0ZXJhdGluZyB0aHJvdWdoIGtleXMgb24gYW4gb2JqZWN0IGFuZCByZXR1cm5pbmcgZmFsc2VcbiAqIHdoZW4gYW55IGtleSBoYXMgdmFsdWVzIHdoaWNoIGFyZSBub3Qgc3RyaWN0bHkgZXF1YWwgYmV0d2VlbiB0aGUgYXJndW1lbnRzLlxuICogUmV0dXJucyB0cnVlIHdoZW4gdGhlIHZhbHVlcyBvZiBhbGwga2V5cyBhcmUgc3RyaWN0bHkgZXF1YWwuXG4gKi9cbmZ1bmN0aW9uIHNoYWxsb3dFcXVhbChvYmpBLCBvYmpCKSB7XG4gIGlmIChpcyhvYmpBLCBvYmpCKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBvYmpBICE9PSAnb2JqZWN0JyB8fCBvYmpBID09PSBudWxsIHx8IHR5cGVvZiBvYmpCICE9PSAnb2JqZWN0JyB8fCBvYmpCID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIGtleXNBID0gT2JqZWN0LmtleXMob2JqQSk7XG4gIHZhciBrZXlzQiA9IE9iamVjdC5rZXlzKG9iakIpO1xuXG4gIGlmIChrZXlzQS5sZW5ndGggIT09IGtleXNCLmxlbmd0aCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIFRlc3QgZm9yIEEncyBrZXlzIGRpZmZlcmVudCBmcm9tIEIuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwga2V5c0EubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoIWhhc093blByb3BlcnR5LmNhbGwob2JqQiwga2V5c0FbaV0pIHx8ICFpcyhvYmpBW2tleXNBW2ldXSwgb2JqQltrZXlzQVtpXV0pKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2hhbGxvd0VxdWFsOyIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBDb3B5cmlnaHQgMjAxNSwgWWFob28hIEluYy5cbiAqIENvcHlyaWdodHMgbGljZW5zZWQgdW5kZXIgdGhlIE5ldyBCU0QgTGljZW5zZS4gU2VlIHRoZSBhY2NvbXBhbnlpbmcgTElDRU5TRSBmaWxlIGZvciB0ZXJtcy5cbiAqL1xudmFyIFJFQUNUX1NUQVRJQ1MgPSB7XG4gICAgY2hpbGRDb250ZXh0VHlwZXM6IHRydWUsXG4gICAgY29udGV4dFR5cGVzOiB0cnVlLFxuICAgIGRlZmF1bHRQcm9wczogdHJ1ZSxcbiAgICBkaXNwbGF5TmFtZTogdHJ1ZSxcbiAgICBnZXREZWZhdWx0UHJvcHM6IHRydWUsXG4gICAgZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzOiB0cnVlLFxuICAgIG1peGluczogdHJ1ZSxcbiAgICBwcm9wVHlwZXM6IHRydWUsXG4gICAgdHlwZTogdHJ1ZVxufTtcblxudmFyIEtOT1dOX1NUQVRJQ1MgPSB7XG4gICAgbmFtZTogdHJ1ZSxcbiAgICBsZW5ndGg6IHRydWUsXG4gICAgcHJvdG90eXBlOiB0cnVlLFxuICAgIGNhbGxlcjogdHJ1ZSxcbiAgICBjYWxsZWU6IHRydWUsXG4gICAgYXJndW1lbnRzOiB0cnVlLFxuICAgIGFyaXR5OiB0cnVlXG59O1xuXG52YXIgZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG52YXIgZ2V0T3duUHJvcGVydHlOYW1lcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO1xudmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbnZhciBnZXRQcm90b3R5cGVPZiA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbnZhciBvYmplY3RQcm90b3R5cGUgPSBnZXRQcm90b3R5cGVPZiAmJiBnZXRQcm90b3R5cGVPZihPYmplY3QpO1xuXG5mdW5jdGlvbiBob2lzdE5vblJlYWN0U3RhdGljcyh0YXJnZXRDb21wb25lbnQsIHNvdXJjZUNvbXBvbmVudCwgYmxhY2tsaXN0KSB7XG4gICAgaWYgKHR5cGVvZiBzb3VyY2VDb21wb25lbnQgIT09ICdzdHJpbmcnKSB7IC8vIGRvbid0IGhvaXN0IG92ZXIgc3RyaW5nIChodG1sKSBjb21wb25lbnRzXG5cbiAgICAgICAgaWYgKG9iamVjdFByb3RvdHlwZSkge1xuICAgICAgICAgICAgdmFyIGluaGVyaXRlZENvbXBvbmVudCA9IGdldFByb3RvdHlwZU9mKHNvdXJjZUNvbXBvbmVudCk7XG4gICAgICAgICAgICBpZiAoaW5oZXJpdGVkQ29tcG9uZW50ICYmIGluaGVyaXRlZENvbXBvbmVudCAhPT0gb2JqZWN0UHJvdG90eXBlKSB7XG4gICAgICAgICAgICAgICAgaG9pc3ROb25SZWFjdFN0YXRpY3ModGFyZ2V0Q29tcG9uZW50LCBpbmhlcml0ZWRDb21wb25lbnQsIGJsYWNrbGlzdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB2YXIga2V5cyA9IGdldE93blByb3BlcnR5TmFtZXMoc291cmNlQ29tcG9uZW50KTtcblxuICAgICAgICBpZiAoZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgICAgICAgICBrZXlzID0ga2V5cy5jb25jYXQoZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZUNvbXBvbmVudCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICAgICAgICAgIGlmICghUkVBQ1RfU1RBVElDU1trZXldICYmICFLTk9XTl9TVEFUSUNTW2tleV0gJiYgKCFibGFja2xpc3QgfHwgIWJsYWNrbGlzdFtrZXldKSkge1xuICAgICAgICAgICAgICAgIHZhciBkZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZUNvbXBvbmVudCwga2V5KTtcbiAgICAgICAgICAgICAgICB0cnkgeyAvLyBBdm9pZCBmYWlsdXJlcyBmcm9tIHJlYWQtb25seSBwcm9wZXJ0aWVzXG4gICAgICAgICAgICAgICAgICAgIGRlZmluZVByb3BlcnR5KHRhcmdldENvbXBvbmVudCwga2V5LCBkZXNjcmlwdG9yKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7fVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRhcmdldENvbXBvbmVudDtcbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0Q29tcG9uZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhvaXN0Tm9uUmVhY3RTdGF0aWNzO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5mdW5jdGlvbiBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gIC8vIENhbGwgdGhpcy5jb25zdHJ1Y3Rvci5nRFNGUCB0byBzdXBwb3J0IHN1Yi1jbGFzc2VzLlxuICB2YXIgc3RhdGUgPSB0aGlzLmNvbnN0cnVjdG9yLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyh0aGlzLnByb3BzLCB0aGlzLnN0YXRlKTtcbiAgaWYgKHN0YXRlICE9PSBudWxsICYmIHN0YXRlICE9PSB1bmRlZmluZWQpIHtcbiAgICB0aGlzLnNldFN0YXRlKHN0YXRlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAvLyBDYWxsIHRoaXMuY29uc3RydWN0b3IuZ0RTRlAgdG8gc3VwcG9ydCBzdWItY2xhc3Nlcy5cbiAgLy8gVXNlIHRoZSBzZXRTdGF0ZSgpIHVwZGF0ZXIgdG8gZW5zdXJlIHN0YXRlIGlzbid0IHN0YWxlIGluIGNlcnRhaW4gZWRnZSBjYXNlcy5cbiAgZnVuY3Rpb24gdXBkYXRlcihwcmV2U3RhdGUpIHtcbiAgICB2YXIgc3RhdGUgPSB0aGlzLmNvbnN0cnVjdG9yLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhuZXh0UHJvcHMsIHByZXZTdGF0ZSk7XG4gICAgcmV0dXJuIHN0YXRlICE9PSBudWxsICYmIHN0YXRlICE9PSB1bmRlZmluZWQgPyBzdGF0ZSA6IG51bGw7XG4gIH1cbiAgLy8gQmluZGluZyBcInRoaXNcIiBpcyBpbXBvcnRhbnQgZm9yIHNoYWxsb3cgcmVuZGVyZXIgc3VwcG9ydC5cbiAgdGhpcy5zZXRTdGF0ZSh1cGRhdGVyLmJpbmQodGhpcykpO1xufVxuXG5mdW5jdGlvbiBjb21wb25lbnRXaWxsVXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XG4gIHRyeSB7XG4gICAgdmFyIHByZXZQcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgdmFyIHByZXZTdGF0ZSA9IHRoaXMuc3RhdGU7XG4gICAgdGhpcy5wcm9wcyA9IG5leHRQcm9wcztcbiAgICB0aGlzLnN0YXRlID0gbmV4dFN0YXRlO1xuICAgIHRoaXMuX19yZWFjdEludGVybmFsU25hcHNob3RGbGFnID0gdHJ1ZTtcbiAgICB0aGlzLl9fcmVhY3RJbnRlcm5hbFNuYXBzaG90ID0gdGhpcy5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZShcbiAgICAgIHByZXZQcm9wcyxcbiAgICAgIHByZXZTdGF0ZVxuICAgICk7XG4gIH0gZmluYWxseSB7XG4gICAgdGhpcy5wcm9wcyA9IHByZXZQcm9wcztcbiAgICB0aGlzLnN0YXRlID0gcHJldlN0YXRlO1xuICB9XG59XG5cbi8vIFJlYWN0IG1heSB3YXJuIGFib3V0IGNXTS9jV1JQL2NXVSBtZXRob2RzIGJlaW5nIGRlcHJlY2F0ZWQuXG4vLyBBZGQgYSBmbGFnIHRvIHN1cHByZXNzIHRoZXNlIHdhcm5pbmdzIGZvciB0aGlzIHNwZWNpYWwgY2FzZS5cbmNvbXBvbmVudFdpbGxNb3VudC5fX3N1cHByZXNzRGVwcmVjYXRpb25XYXJuaW5nID0gdHJ1ZTtcbmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMuX19zdXBwcmVzc0RlcHJlY2F0aW9uV2FybmluZyA9IHRydWU7XG5jb21wb25lbnRXaWxsVXBkYXRlLl9fc3VwcHJlc3NEZXByZWNhdGlvbldhcm5pbmcgPSB0cnVlO1xuXG5mdW5jdGlvbiBwb2x5ZmlsbChDb21wb25lbnQpIHtcbiAgdmFyIHByb3RvdHlwZSA9IENvbXBvbmVudC5wcm90b3R5cGU7XG5cbiAgaWYgKCFwcm90b3R5cGUgfHwgIXByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdDYW4gb25seSBwb2x5ZmlsbCBjbGFzcyBjb21wb25lbnRzJyk7XG4gIH1cblxuICBpZiAoXG4gICAgdHlwZW9mIENvbXBvbmVudC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMgIT09ICdmdW5jdGlvbicgJiZcbiAgICB0eXBlb2YgcHJvdG90eXBlLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlICE9PSAnZnVuY3Rpb24nXG4gICkge1xuICAgIHJldHVybiBDb21wb25lbnQ7XG4gIH1cblxuICAvLyBJZiBuZXcgY29tcG9uZW50IEFQSXMgYXJlIGRlZmluZWQsIFwidW5zYWZlXCIgbGlmZWN5Y2xlcyB3b24ndCBiZSBjYWxsZWQuXG4gIC8vIEVycm9yIGlmIGFueSBvZiB0aGVzZSBsaWZlY3ljbGVzIGFyZSBwcmVzZW50LFxuICAvLyBCZWNhdXNlIHRoZXkgd291bGQgd29yayBkaWZmZXJlbnRseSBiZXR3ZWVuIG9sZGVyIGFuZCBuZXdlciAoMTYuMyspIHZlcnNpb25zIG9mIFJlYWN0LlxuICB2YXIgZm91bmRXaWxsTW91bnROYW1lID0gbnVsbDtcbiAgdmFyIGZvdW5kV2lsbFJlY2VpdmVQcm9wc05hbWUgPSBudWxsO1xuICB2YXIgZm91bmRXaWxsVXBkYXRlTmFtZSA9IG51bGw7XG4gIGlmICh0eXBlb2YgcHJvdG90eXBlLmNvbXBvbmVudFdpbGxNb3VudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGZvdW5kV2lsbE1vdW50TmFtZSA9ICdjb21wb25lbnRXaWxsTW91bnQnO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBwcm90b3R5cGUuVU5TQUZFX2NvbXBvbmVudFdpbGxNb3VudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGZvdW5kV2lsbE1vdW50TmFtZSA9ICdVTlNBRkVfY29tcG9uZW50V2lsbE1vdW50JztcbiAgfVxuICBpZiAodHlwZW9mIHByb3RvdHlwZS5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZm91bmRXaWxsUmVjZWl2ZVByb3BzTmFtZSA9ICdjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJztcbiAgfSBlbHNlIGlmICh0eXBlb2YgcHJvdG90eXBlLlVOU0FGRV9jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZm91bmRXaWxsUmVjZWl2ZVByb3BzTmFtZSA9ICdVTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyc7XG4gIH1cbiAgaWYgKHR5cGVvZiBwcm90b3R5cGUuY29tcG9uZW50V2lsbFVwZGF0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGZvdW5kV2lsbFVwZGF0ZU5hbWUgPSAnY29tcG9uZW50V2lsbFVwZGF0ZSc7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHByb3RvdHlwZS5VTlNBRkVfY29tcG9uZW50V2lsbFVwZGF0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGZvdW5kV2lsbFVwZGF0ZU5hbWUgPSAnVU5TQUZFX2NvbXBvbmVudFdpbGxVcGRhdGUnO1xuICB9XG4gIGlmIChcbiAgICBmb3VuZFdpbGxNb3VudE5hbWUgIT09IG51bGwgfHxcbiAgICBmb3VuZFdpbGxSZWNlaXZlUHJvcHNOYW1lICE9PSBudWxsIHx8XG4gICAgZm91bmRXaWxsVXBkYXRlTmFtZSAhPT0gbnVsbFxuICApIHtcbiAgICB2YXIgY29tcG9uZW50TmFtZSA9IENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZTtcbiAgICB2YXIgbmV3QXBpTmFtZSA9XG4gICAgICB0eXBlb2YgQ29tcG9uZW50LmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICA/ICdnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMoKSdcbiAgICAgICAgOiAnZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUoKSc7XG5cbiAgICB0aHJvdyBFcnJvcihcbiAgICAgICdVbnNhZmUgbGVnYWN5IGxpZmVjeWNsZXMgd2lsbCBub3QgYmUgY2FsbGVkIGZvciBjb21wb25lbnRzIHVzaW5nIG5ldyBjb21wb25lbnQgQVBJcy5cXG5cXG4nICtcbiAgICAgICAgY29tcG9uZW50TmFtZSArXG4gICAgICAgICcgdXNlcyAnICtcbiAgICAgICAgbmV3QXBpTmFtZSArXG4gICAgICAgICcgYnV0IGFsc28gY29udGFpbnMgdGhlIGZvbGxvd2luZyBsZWdhY3kgbGlmZWN5Y2xlczonICtcbiAgICAgICAgKGZvdW5kV2lsbE1vdW50TmFtZSAhPT0gbnVsbCA/ICdcXG4gICcgKyBmb3VuZFdpbGxNb3VudE5hbWUgOiAnJykgK1xuICAgICAgICAoZm91bmRXaWxsUmVjZWl2ZVByb3BzTmFtZSAhPT0gbnVsbFxuICAgICAgICAgID8gJ1xcbiAgJyArIGZvdW5kV2lsbFJlY2VpdmVQcm9wc05hbWVcbiAgICAgICAgICA6ICcnKSArXG4gICAgICAgIChmb3VuZFdpbGxVcGRhdGVOYW1lICE9PSBudWxsID8gJ1xcbiAgJyArIGZvdW5kV2lsbFVwZGF0ZU5hbWUgOiAnJykgK1xuICAgICAgICAnXFxuXFxuVGhlIGFib3ZlIGxpZmVjeWNsZXMgc2hvdWxkIGJlIHJlbW92ZWQuIExlYXJuIG1vcmUgYWJvdXQgdGhpcyB3YXJuaW5nIGhlcmU6XFxuJyArXG4gICAgICAgICdodHRwczovL2ZiLm1lL3JlYWN0LWFzeW5jLWNvbXBvbmVudC1saWZlY3ljbGUtaG9va3MnXG4gICAgKTtcbiAgfVxuXG4gIC8vIFJlYWN0IDw9IDE2LjIgZG9lcyBub3Qgc3VwcG9ydCBzdGF0aWMgZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzLlxuICAvLyBBcyBhIHdvcmthcm91bmQsIHVzZSBjV00gYW5kIGNXUlAgdG8gaW52b2tlIHRoZSBuZXcgc3RhdGljIGxpZmVjeWNsZS5cbiAgLy8gTmV3ZXIgdmVyc2lvbnMgb2YgUmVhY3Qgd2lsbCBpZ25vcmUgdGhlc2UgbGlmZWN5Y2xlcyBpZiBnRFNGUCBleGlzdHMuXG4gIGlmICh0eXBlb2YgQ29tcG9uZW50LmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHByb3RvdHlwZS5jb21wb25lbnRXaWxsTW91bnQgPSBjb21wb25lbnRXaWxsTW91bnQ7XG4gICAgcHJvdG90eXBlLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgPSBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzO1xuICB9XG5cbiAgLy8gUmVhY3QgPD0gMTYuMiBkb2VzIG5vdCBzdXBwb3J0IGdldFNuYXBzaG90QmVmb3JlVXBkYXRlLlxuICAvLyBBcyBhIHdvcmthcm91bmQsIHVzZSBjV1UgdG8gaW52b2tlIHRoZSBuZXcgbGlmZWN5Y2xlLlxuICAvLyBOZXdlciB2ZXJzaW9ucyBvZiBSZWFjdCB3aWxsIGlnbm9yZSB0aGF0IGxpZmVjeWNsZSBpZiBnU0JVIGV4aXN0cy5cbiAgaWYgKHR5cGVvZiBwcm90b3R5cGUuZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICBpZiAodHlwZW9mIHByb3RvdHlwZS5jb21wb25lbnREaWRVcGRhdGUgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ0Nhbm5vdCBwb2x5ZmlsbCBnZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZSgpIGZvciBjb21wb25lbnRzIHRoYXQgZG8gbm90IGRlZmluZSBjb21wb25lbnREaWRVcGRhdGUoKSBvbiB0aGUgcHJvdG90eXBlJ1xuICAgICAgKTtcbiAgICB9XG5cbiAgICBwcm90b3R5cGUuY29tcG9uZW50V2lsbFVwZGF0ZSA9IGNvbXBvbmVudFdpbGxVcGRhdGU7XG5cbiAgICB2YXIgY29tcG9uZW50RGlkVXBkYXRlID0gcHJvdG90eXBlLmNvbXBvbmVudERpZFVwZGF0ZTtcblxuICAgIHByb3RvdHlwZS5jb21wb25lbnREaWRVcGRhdGUgPSBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGVQb2x5ZmlsbChcbiAgICAgIHByZXZQcm9wcyxcbiAgICAgIHByZXZTdGF0ZSxcbiAgICAgIG1heWJlU25hcHNob3RcbiAgICApIHtcbiAgICAgIC8vIDE2LjMrIHdpbGwgbm90IGV4ZWN1dGUgb3VyIHdpbGwtdXBkYXRlIG1ldGhvZDtcbiAgICAgIC8vIEl0IHdpbGwgcGFzcyBhIHNuYXBzaG90IHZhbHVlIHRvIGRpZC11cGRhdGUgdGhvdWdoLlxuICAgICAgLy8gT2xkZXIgdmVyc2lvbnMgd2lsbCByZXF1aXJlIG91ciBwb2x5ZmlsbGVkIHdpbGwtdXBkYXRlIHZhbHVlLlxuICAgICAgLy8gV2UgbmVlZCB0byBoYW5kbGUgYm90aCBjYXNlcywgYnV0IGNhbid0IGp1c3QgY2hlY2sgZm9yIHRoZSBwcmVzZW5jZSBvZiBcIm1heWJlU25hcHNob3RcIixcbiAgICAgIC8vIEJlY2F1c2UgZm9yIDw9IDE1LnggdmVyc2lvbnMgdGhpcyBtaWdodCBiZSBhIFwicHJldkNvbnRleHRcIiBvYmplY3QuXG4gICAgICAvLyBXZSBhbHNvIGNhbid0IGp1c3QgY2hlY2sgXCJfX3JlYWN0SW50ZXJuYWxTbmFwc2hvdFwiLFxuICAgICAgLy8gQmVjYXVzZSBnZXQtc25hcHNob3QgbWlnaHQgcmV0dXJuIGEgZmFsc3kgdmFsdWUuXG4gICAgICAvLyBTbyBjaGVjayBmb3IgdGhlIGV4cGxpY2l0IF9fcmVhY3RJbnRlcm5hbFNuYXBzaG90RmxhZyBmbGFnIHRvIGRldGVybWluZSBiZWhhdmlvci5cbiAgICAgIHZhciBzbmFwc2hvdCA9IHRoaXMuX19yZWFjdEludGVybmFsU25hcHNob3RGbGFnXG4gICAgICAgID8gdGhpcy5fX3JlYWN0SW50ZXJuYWxTbmFwc2hvdFxuICAgICAgICA6IG1heWJlU25hcHNob3Q7XG5cbiAgICAgIGNvbXBvbmVudERpZFVwZGF0ZS5jYWxsKHRoaXMsIHByZXZQcm9wcywgcHJldlN0YXRlLCBzbmFwc2hvdCk7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBDb21wb25lbnQ7XG59XG5cbmV4cG9ydCB7IHBvbHlmaWxsIH07XG4iLCJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlRmFjdG9yeSwgQ29tcG9uZW50LCBjcmVhdGVFbGVtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IF9leHRlbmRzIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHMnO1xuaW1wb3J0IHNoYWxsb3dFcXVhbCBmcm9tICdmYmpzL2xpYi9zaGFsbG93RXF1YWwnO1xuaW1wb3J0IF9pbmhlcml0c0xvb3NlIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzTG9vc2UnO1xuaW1wb3J0IHsgcG9seWZpbGwgfSBmcm9tICdyZWFjdC1saWZlY3ljbGVzLWNvbXBhdCc7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSc7XG5pbXBvcnQgaG9pc3ROb25SZWFjdFN0YXRpY3MgZnJvbSAnaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MnO1xuaW1wb3J0IHsgY3JlYXRlQ2hhbmdlRW1pdHRlciB9IGZyb20gJ2NoYW5nZS1lbWl0dGVyJztcbmltcG9ydCAkJG9ic2VydmFibGUgZnJvbSAnc3ltYm9sLW9ic2VydmFibGUnO1xuXG52YXIgc2V0U3RhdGljID0gZnVuY3Rpb24gc2V0U3RhdGljKGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChCYXNlQ29tcG9uZW50KSB7XG4gICAgLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbiAgICBCYXNlQ29tcG9uZW50W2tleV0gPSB2YWx1ZTtcbiAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG5cbiAgICByZXR1cm4gQmFzZUNvbXBvbmVudDtcbiAgfTtcbn07XG5cbnZhciBzZXREaXNwbGF5TmFtZSA9IGZ1bmN0aW9uIHNldERpc3BsYXlOYW1lKGRpc3BsYXlOYW1lKSB7XG4gIHJldHVybiBzZXRTdGF0aWMoJ2Rpc3BsYXlOYW1lJywgZGlzcGxheU5hbWUpO1xufTtcblxudmFyIGdldERpc3BsYXlOYW1lID0gZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWUoQ29tcG9uZW50JCQxKSB7XG4gIGlmICh0eXBlb2YgQ29tcG9uZW50JCQxID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBDb21wb25lbnQkJDE7XG4gIH1cblxuICBpZiAoIUNvbXBvbmVudCQkMSkge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICByZXR1cm4gQ29tcG9uZW50JCQxLmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudCQkMS5uYW1lIHx8ICdDb21wb25lbnQnO1xufTtcblxudmFyIHdyYXBEaXNwbGF5TmFtZSA9IGZ1bmN0aW9uIHdyYXBEaXNwbGF5TmFtZShCYXNlQ29tcG9uZW50LCBob2NOYW1lKSB7XG4gIHJldHVybiBob2NOYW1lICsgXCIoXCIgKyBnZXREaXNwbGF5TmFtZShCYXNlQ29tcG9uZW50KSArIFwiKVwiO1xufTtcblxudmFyIG1hcFByb3BzID0gZnVuY3Rpb24gbWFwUHJvcHMocHJvcHNNYXBwZXIpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChCYXNlQ29tcG9uZW50KSB7XG4gICAgdmFyIGZhY3RvcnkgPSBjcmVhdGVGYWN0b3J5KEJhc2VDb21wb25lbnQpO1xuXG4gICAgdmFyIE1hcFByb3BzID0gZnVuY3Rpb24gTWFwUHJvcHMocHJvcHMpIHtcbiAgICAgIHJldHVybiBmYWN0b3J5KHByb3BzTWFwcGVyKHByb3BzKSk7XG4gICAgfTtcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICByZXR1cm4gc2V0RGlzcGxheU5hbWUod3JhcERpc3BsYXlOYW1lKEJhc2VDb21wb25lbnQsICdtYXBQcm9wcycpKShNYXBQcm9wcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIE1hcFByb3BzO1xuICB9O1xufTtcblxudmFyIHdpdGhQcm9wcyA9IGZ1bmN0aW9uIHdpdGhQcm9wcyhpbnB1dCkge1xuICB2YXIgaG9jID0gbWFwUHJvcHMoZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgcmV0dXJuIF9leHRlbmRzKHt9LCBwcm9wcywgdHlwZW9mIGlucHV0ID09PSAnZnVuY3Rpb24nID8gaW5wdXQocHJvcHMpIDogaW5wdXQpO1xuICB9KTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIHJldHVybiBmdW5jdGlvbiAoQmFzZUNvbXBvbmVudCkge1xuICAgICAgcmV0dXJuIHNldERpc3BsYXlOYW1lKHdyYXBEaXNwbGF5TmFtZShCYXNlQ29tcG9uZW50LCAnd2l0aFByb3BzJykpKGhvYyhCYXNlQ29tcG9uZW50KSk7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBob2M7XG59O1xuXG52YXIgcGljayA9IGZ1bmN0aW9uIHBpY2sob2JqLCBrZXlzKSB7XG4gIHZhciByZXN1bHQgPSB7fTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIga2V5ID0ga2V5c1tpXTtcblxuICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgcmVzdWx0W2tleV0gPSBvYmpba2V5XTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxudmFyIHdpdGhQcm9wc09uQ2hhbmdlID0gZnVuY3Rpb24gd2l0aFByb3BzT25DaGFuZ2Uoc2hvdWxkTWFwT3JLZXlzLCBwcm9wc01hcHBlcikge1xuICByZXR1cm4gZnVuY3Rpb24gKEJhc2VDb21wb25lbnQpIHtcbiAgICB2YXIgZmFjdG9yeSA9IGNyZWF0ZUZhY3RvcnkoQmFzZUNvbXBvbmVudCk7XG4gICAgdmFyIHNob3VsZE1hcCA9IHR5cGVvZiBzaG91bGRNYXBPcktleXMgPT09ICdmdW5jdGlvbicgPyBzaG91bGRNYXBPcktleXMgOiBmdW5jdGlvbiAocHJvcHMsIG5leHRQcm9wcykge1xuICAgICAgcmV0dXJuICFzaGFsbG93RXF1YWwocGljayhwcm9wcywgc2hvdWxkTWFwT3JLZXlzKSwgcGljayhuZXh0UHJvcHMsIHNob3VsZE1hcE9yS2V5cykpO1xuICAgIH07XG5cbiAgICB2YXIgV2l0aFByb3BzT25DaGFuZ2UgPVxuICAgIC8qI19fUFVSRV9fKi9cbiAgICBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICAgICAgX2luaGVyaXRzTG9vc2UoV2l0aFByb3BzT25DaGFuZ2UsIF9Db21wb25lbnQpO1xuXG4gICAgICBmdW5jdGlvbiBXaXRoUHJvcHNPbkNoYW5nZSgpIHtcbiAgICAgICAgdmFyIF90aGlzO1xuXG4gICAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICAgIH1cblxuICAgICAgICBfdGhpcyA9IF9Db21wb25lbnQuY2FsbC5hcHBseShfQ29tcG9uZW50LCBbdGhpc10uY29uY2F0KGFyZ3MpKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICBjb21wdXRlZFByb3BzOiBwcm9wc01hcHBlcihfdGhpcy5wcm9wcyksXG4gICAgICAgICAgcHJldlByb3BzOiBfdGhpcy5wcm9wc1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgICB9XG5cbiAgICAgIFdpdGhQcm9wc09uQ2hhbmdlLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyA9IGZ1bmN0aW9uIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhuZXh0UHJvcHMsIHByZXZTdGF0ZSkge1xuICAgICAgICBpZiAoc2hvdWxkTWFwKHByZXZTdGF0ZS5wcmV2UHJvcHMsIG5leHRQcm9wcykpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY29tcHV0ZWRQcm9wczogcHJvcHNNYXBwZXIobmV4dFByb3BzKSxcbiAgICAgICAgICAgIHByZXZQcm9wczogbmV4dFByb3BzXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgcHJldlByb3BzOiBuZXh0UHJvcHNcbiAgICAgICAgfTtcbiAgICAgIH07XG5cbiAgICAgIHZhciBfcHJvdG8gPSBXaXRoUHJvcHNPbkNoYW5nZS5wcm90b3R5cGU7XG5cbiAgICAgIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiBmYWN0b3J5KF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB0aGlzLnN0YXRlLmNvbXB1dGVkUHJvcHMpKTtcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBXaXRoUHJvcHNPbkNoYW5nZTtcbiAgICB9KENvbXBvbmVudCk7XG5cbiAgICBwb2x5ZmlsbChXaXRoUHJvcHNPbkNoYW5nZSk7XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgcmV0dXJuIHNldERpc3BsYXlOYW1lKHdyYXBEaXNwbGF5TmFtZShCYXNlQ29tcG9uZW50LCAnd2l0aFByb3BzT25DaGFuZ2UnKSkoV2l0aFByb3BzT25DaGFuZ2UpO1xuICAgIH1cblxuICAgIHJldHVybiBXaXRoUHJvcHNPbkNoYW5nZTtcbiAgfTtcbn07XG5cbnZhciBtYXBWYWx1ZXMgPSBmdW5jdGlvbiBtYXBWYWx1ZXMob2JqLCBmdW5jKSB7XG4gIHZhciByZXN1bHQgPSB7fTtcbiAgLyogZXNsaW50LWRpc2FibGUgbm8tcmVzdHJpY3RlZC1zeW50YXggKi9cblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICByZXN1bHRba2V5XSA9IGZ1bmMob2JqW2tleV0sIGtleSk7XG4gICAgfVxuICB9XG4gIC8qIGVzbGludC1lbmFibGUgbm8tcmVzdHJpY3RlZC1zeW50YXggKi9cblxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG52YXIgd2l0aEhhbmRsZXJzID0gZnVuY3Rpb24gd2l0aEhhbmRsZXJzKGhhbmRsZXJzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoQmFzZUNvbXBvbmVudCkge1xuICAgIHZhciBmYWN0b3J5ID0gY3JlYXRlRmFjdG9yeShCYXNlQ29tcG9uZW50KTtcblxuICAgIHZhciBXaXRoSGFuZGxlcnMgPVxuICAgIC8qI19fUFVSRV9fKi9cbiAgICBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICAgICAgX2luaGVyaXRzTG9vc2UoV2l0aEhhbmRsZXJzLCBfQ29tcG9uZW50KTtcblxuICAgICAgZnVuY3Rpb24gV2l0aEhhbmRsZXJzKCkge1xuICAgICAgICB2YXIgX3RoaXM7XG5cbiAgICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIF9hcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICAgIF9hcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgICB9XG5cbiAgICAgICAgX3RoaXMgPSBfQ29tcG9uZW50LmNhbGwuYXBwbHkoX0NvbXBvbmVudCwgW3RoaXNdLmNvbmNhdChfYXJncykpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLmhhbmRsZXJzID0gbWFwVmFsdWVzKHR5cGVvZiBoYW5kbGVycyA9PT0gJ2Z1bmN0aW9uJyA/IGhhbmRsZXJzKF90aGlzLnByb3BzKSA6IGhhbmRsZXJzLCBmdW5jdGlvbiAoY3JlYXRlSGFuZGxlcikge1xuICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgaGFuZGxlciA9IGNyZWF0ZUhhbmRsZXIoX3RoaXMucHJvcHMpO1xuXG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB0eXBlb2YgaGFuZGxlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiAgICAgICAgICAgICAgJ3dpdGhIYW5kbGVycygpOiBFeHBlY3RlZCBhIG1hcCBvZiBoaWdoZXItb3JkZXIgZnVuY3Rpb25zLiAnICsgJ1JlZmVyIHRvIHRoZSBkb2NzIGZvciBtb3JlIGluZm8uJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBoYW5kbGVyLmFwcGx5KHZvaWQgMCwgYXJndW1lbnRzKTtcbiAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgICAgfVxuXG4gICAgICB2YXIgX3Byb3RvID0gV2l0aEhhbmRsZXJzLnByb3RvdHlwZTtcblxuICAgICAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIGZhY3RvcnkoX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHRoaXMuaGFuZGxlcnMpKTtcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBXaXRoSGFuZGxlcnM7XG4gICAgfShDb21wb25lbnQpO1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHJldHVybiBzZXREaXNwbGF5TmFtZSh3cmFwRGlzcGxheU5hbWUoQmFzZUNvbXBvbmVudCwgJ3dpdGhIYW5kbGVycycpKShXaXRoSGFuZGxlcnMpO1xuICAgIH1cblxuICAgIHJldHVybiBXaXRoSGFuZGxlcnM7XG4gIH07XG59O1xuXG52YXIgZGVmYXVsdFByb3BzID0gZnVuY3Rpb24gZGVmYXVsdFByb3BzKHByb3BzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoQmFzZUNvbXBvbmVudCkge1xuICAgIHZhciBmYWN0b3J5ID0gY3JlYXRlRmFjdG9yeShCYXNlQ29tcG9uZW50KTtcblxuICAgIHZhciBEZWZhdWx0UHJvcHMgPSBmdW5jdGlvbiBEZWZhdWx0UHJvcHMob3duZXJQcm9wcykge1xuICAgICAgcmV0dXJuIGZhY3Rvcnkob3duZXJQcm9wcyk7XG4gICAgfTtcblxuICAgIERlZmF1bHRQcm9wcy5kZWZhdWx0UHJvcHMgPSBwcm9wcztcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICByZXR1cm4gc2V0RGlzcGxheU5hbWUod3JhcERpc3BsYXlOYW1lKEJhc2VDb21wb25lbnQsICdkZWZhdWx0UHJvcHMnKSkoRGVmYXVsdFByb3BzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gRGVmYXVsdFByb3BzO1xuICB9O1xufTtcblxudmFyIG9taXQgPSBmdW5jdGlvbiBvbWl0KG9iaiwga2V5cykge1xuICB2YXIgcmVzdCA9IF9leHRlbmRzKHt9LCBvYmopO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuXG4gICAgaWYgKHJlc3QuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgZGVsZXRlIHJlc3Rba2V5XTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdDtcbn07XG5cbnZhciByZW5hbWVQcm9wID0gZnVuY3Rpb24gcmVuYW1lUHJvcChvbGROYW1lLCBuZXdOYW1lKSB7XG4gIHZhciBob2MgPSBtYXBQcm9wcyhmdW5jdGlvbiAocHJvcHMpIHtcbiAgICB2YXIgX2V4dGVuZHMyO1xuXG4gICAgcmV0dXJuIF9leHRlbmRzKHt9LCBvbWl0KHByb3BzLCBbb2xkTmFtZV0pLCAoX2V4dGVuZHMyID0ge30sIF9leHRlbmRzMltuZXdOYW1lXSA9IHByb3BzW29sZE5hbWVdLCBfZXh0ZW5kczIpKTtcbiAgfSk7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKEJhc2VDb21wb25lbnQpIHtcbiAgICAgIHJldHVybiBzZXREaXNwbGF5TmFtZSh3cmFwRGlzcGxheU5hbWUoQmFzZUNvbXBvbmVudCwgJ3JlbmFtZVByb3AnKSkoaG9jKEJhc2VDb21wb25lbnQpKTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIGhvYztcbn07XG5cbnZhciBrZXlzID0gT2JqZWN0LmtleXM7XG5cbnZhciBtYXBLZXlzID0gZnVuY3Rpb24gbWFwS2V5cyhvYmosIGZ1bmMpIHtcbiAgcmV0dXJuIGtleXMob2JqKS5yZWR1Y2UoZnVuY3Rpb24gKHJlc3VsdCwga2V5KSB7XG4gICAgdmFyIHZhbCA9IG9ialtrZXldO1xuICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG5cbiAgICByZXN1bHRbZnVuYyh2YWwsIGtleSldID0gdmFsO1xuICAgIC8qIGVzbGludC1lbmFibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH0sIHt9KTtcbn07XG5cbnZhciByZW5hbWVQcm9wcyA9IGZ1bmN0aW9uIHJlbmFtZVByb3BzKG5hbWVNYXApIHtcbiAgdmFyIGhvYyA9IG1hcFByb3BzKGZ1bmN0aW9uIChwcm9wcykge1xuICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgb21pdChwcm9wcywga2V5cyhuYW1lTWFwKSksIG1hcEtleXMocGljayhwcm9wcywga2V5cyhuYW1lTWFwKSksIGZ1bmN0aW9uIChfLCBvbGROYW1lKSB7XG4gICAgICByZXR1cm4gbmFtZU1hcFtvbGROYW1lXTtcbiAgICB9KSk7XG4gIH0pO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChCYXNlQ29tcG9uZW50KSB7XG4gICAgICByZXR1cm4gc2V0RGlzcGxheU5hbWUod3JhcERpc3BsYXlOYW1lKEJhc2VDb21wb25lbnQsICdyZW5hbWVQcm9wcycpKShob2MoQmFzZUNvbXBvbmVudCkpO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gaG9jO1xufTtcblxudmFyIGZsYXR0ZW5Qcm9wID0gZnVuY3Rpb24gZmxhdHRlblByb3AocHJvcE5hbWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChCYXNlQ29tcG9uZW50KSB7XG4gICAgdmFyIGZhY3RvcnkgPSBjcmVhdGVGYWN0b3J5KEJhc2VDb21wb25lbnQpO1xuXG4gICAgdmFyIEZsYXR0ZW5Qcm9wID0gZnVuY3Rpb24gRmxhdHRlblByb3AocHJvcHMpIHtcbiAgICAgIHJldHVybiBmYWN0b3J5KF9leHRlbmRzKHt9LCBwcm9wcywgcHJvcHNbcHJvcE5hbWVdKSk7XG4gICAgfTtcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICByZXR1cm4gc2V0RGlzcGxheU5hbWUod3JhcERpc3BsYXlOYW1lKEJhc2VDb21wb25lbnQsICdmbGF0dGVuUHJvcCcpKShGbGF0dGVuUHJvcCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIEZsYXR0ZW5Qcm9wO1xuICB9O1xufTtcblxudmFyIHdpdGhTdGF0ZSA9IGZ1bmN0aW9uIHdpdGhTdGF0ZShzdGF0ZU5hbWUsIHN0YXRlVXBkYXRlck5hbWUsIGluaXRpYWxTdGF0ZSkge1xuICByZXR1cm4gZnVuY3Rpb24gKEJhc2VDb21wb25lbnQpIHtcbiAgICB2YXIgZmFjdG9yeSA9IGNyZWF0ZUZhY3RvcnkoQmFzZUNvbXBvbmVudCk7XG5cbiAgICB2YXIgV2l0aFN0YXRlID1cbiAgICAvKiNfX1BVUkVfXyovXG4gICAgZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgICAgIF9pbmhlcml0c0xvb3NlKFdpdGhTdGF0ZSwgX0NvbXBvbmVudCk7XG5cbiAgICAgIGZ1bmN0aW9uIFdpdGhTdGF0ZSgpIHtcbiAgICAgICAgdmFyIF90aGlzO1xuXG4gICAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICAgIH1cblxuICAgICAgICBfdGhpcyA9IF9Db21wb25lbnQuY2FsbC5hcHBseShfQ29tcG9uZW50LCBbdGhpc10uY29uY2F0KGFyZ3MpKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICBzdGF0ZVZhbHVlOiB0eXBlb2YgaW5pdGlhbFN0YXRlID09PSAnZnVuY3Rpb24nID8gaW5pdGlhbFN0YXRlKF90aGlzLnByb3BzKSA6IGluaXRpYWxTdGF0ZVxuICAgICAgICB9O1xuXG4gICAgICAgIF90aGlzLnVwZGF0ZVN0YXRlVmFsdWUgPSBmdW5jdGlvbiAodXBkYXRlRm4sIGNhbGxiYWNrKSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzLnNldFN0YXRlKGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgICAgICAgICB2YXIgc3RhdGVWYWx1ZSA9IF9yZWYuc3RhdGVWYWx1ZTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIHN0YXRlVmFsdWU6IHR5cGVvZiB1cGRhdGVGbiA9PT0gJ2Z1bmN0aW9uJyA/IHVwZGF0ZUZuKHN0YXRlVmFsdWUpIDogdXBkYXRlRm5cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSwgY2FsbGJhY2spO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICAgIH1cblxuICAgICAgdmFyIF9wcm90byA9IFdpdGhTdGF0ZS5wcm90b3R5cGU7XG5cbiAgICAgIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgIHZhciBfZXh0ZW5kczI7XG5cbiAgICAgICAgcmV0dXJuIGZhY3RvcnkoX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIChfZXh0ZW5kczIgPSB7fSwgX2V4dGVuZHMyW3N0YXRlTmFtZV0gPSB0aGlzLnN0YXRlLnN0YXRlVmFsdWUsIF9leHRlbmRzMltzdGF0ZVVwZGF0ZXJOYW1lXSA9IHRoaXMudXBkYXRlU3RhdGVWYWx1ZSwgX2V4dGVuZHMyKSkpO1xuICAgICAgfTtcblxuICAgICAgcmV0dXJuIFdpdGhTdGF0ZTtcbiAgICB9KENvbXBvbmVudCk7XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgcmV0dXJuIHNldERpc3BsYXlOYW1lKHdyYXBEaXNwbGF5TmFtZShCYXNlQ29tcG9uZW50LCAnd2l0aFN0YXRlJykpKFdpdGhTdGF0ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIFdpdGhTdGF0ZTtcbiAgfTtcbn07XG5cbnZhciB3aXRoU3RhdGVIYW5kbGVycyA9IGZ1bmN0aW9uIHdpdGhTdGF0ZUhhbmRsZXJzKGluaXRpYWxTdGF0ZSwgc3RhdGVVcGRhdGVycykge1xuICByZXR1cm4gZnVuY3Rpb24gKEJhc2VDb21wb25lbnQpIHtcbiAgICB2YXIgZmFjdG9yeSA9IGNyZWF0ZUZhY3RvcnkoQmFzZUNvbXBvbmVudCk7XG5cbiAgICB2YXIgV2l0aFN0YXRlSGFuZGxlcnMgPVxuICAgIC8qI19fUFVSRV9fKi9cbiAgICBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICAgICAgX2luaGVyaXRzTG9vc2UoV2l0aFN0YXRlSGFuZGxlcnMsIF9Db21wb25lbnQpO1xuXG4gICAgICBmdW5jdGlvbiBXaXRoU3RhdGVIYW5kbGVycygpIHtcbiAgICAgICAgdmFyIF90aGlzO1xuXG4gICAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBfYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgICBfYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgICAgfVxuXG4gICAgICAgIF90aGlzID0gX0NvbXBvbmVudC5jYWxsLmFwcGx5KF9Db21wb25lbnQsIFt0aGlzXS5jb25jYXQoX2FyZ3MpKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5zdGF0ZSA9IHR5cGVvZiBpbml0aWFsU3RhdGUgPT09ICdmdW5jdGlvbicgPyBpbml0aWFsU3RhdGUoX3RoaXMucHJvcHMpIDogaW5pdGlhbFN0YXRlO1xuICAgICAgICBfdGhpcy5zdGF0ZVVwZGF0ZXJzID0gbWFwVmFsdWVzKHN0YXRlVXBkYXRlcnMsIGZ1bmN0aW9uIChoYW5kbGVyKSB7XG4gICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChtYXlCZUV2ZW50KSB7XG4gICAgICAgICAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjIgPiAxID8gX2xlbjIgLSAxIDogMCksIF9rZXkyID0gMTsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgICAgICAgICBhcmdzW19rZXkyIC0gMV0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBIYXZpbmcgdGhhdCBmdW5jdGlvbmFsIGZvcm0gb2Ygc2V0U3RhdGUgY2FuIGJlIGNhbGxlZCBhc3luY1xuICAgICAgICAgICAgLy8gd2UgbmVlZCB0byBwZXJzaXN0IFN5bnRoZXRpY0V2ZW50XG4gICAgICAgICAgICBpZiAobWF5QmVFdmVudCAmJiB0eXBlb2YgbWF5QmVFdmVudC5wZXJzaXN0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgIG1heUJlRXZlbnQucGVyc2lzdCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBfdGhpcy5zZXRTdGF0ZShmdW5jdGlvbiAoc3RhdGUsIHByb3BzKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGVyKHN0YXRlLCBwcm9wcykuYXBwbHkodm9pZCAwLCBbbWF5QmVFdmVudF0uY29uY2F0KGFyZ3MpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgICB9XG5cbiAgICAgIHZhciBfcHJvdG8gPSBXaXRoU3RhdGVIYW5kbGVycy5wcm90b3R5cGU7XG5cbiAgICAgIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiBmYWN0b3J5KF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB0aGlzLnN0YXRlLCB0aGlzLnN0YXRlVXBkYXRlcnMpKTtcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBXaXRoU3RhdGVIYW5kbGVycztcbiAgICB9KENvbXBvbmVudCk7XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgcmV0dXJuIHNldERpc3BsYXlOYW1lKHdyYXBEaXNwbGF5TmFtZShCYXNlQ29tcG9uZW50LCAnd2l0aFN0YXRlSGFuZGxlcnMnKSkoV2l0aFN0YXRlSGFuZGxlcnMpO1xuICAgIH1cblxuICAgIHJldHVybiBXaXRoU3RhdGVIYW5kbGVycztcbiAgfTtcbn07XG5cbnZhciBub29wID0gZnVuY3Rpb24gbm9vcCgpIHt9O1xuXG52YXIgd2l0aFJlZHVjZXIgPSBmdW5jdGlvbiB3aXRoUmVkdWNlcihzdGF0ZU5hbWUsIGRpc3BhdGNoTmFtZSwgcmVkdWNlciwgaW5pdGlhbFN0YXRlKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoQmFzZUNvbXBvbmVudCkge1xuICAgIHZhciBmYWN0b3J5ID0gY3JlYXRlRmFjdG9yeShCYXNlQ29tcG9uZW50KTtcblxuICAgIHZhciBXaXRoUmVkdWNlciA9XG4gICAgLyojX19QVVJFX18qL1xuICAgIGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gICAgICBfaW5oZXJpdHNMb29zZShXaXRoUmVkdWNlciwgX0NvbXBvbmVudCk7XG5cbiAgICAgIGZ1bmN0aW9uIFdpdGhSZWR1Y2VyKCkge1xuICAgICAgICB2YXIgX3RoaXM7XG5cbiAgICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgICAgfVxuXG4gICAgICAgIF90aGlzID0gX0NvbXBvbmVudC5jYWxsLmFwcGx5KF9Db21wb25lbnQsIFt0aGlzXS5jb25jYXQoYXJncykpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgICAgIHN0YXRlVmFsdWU6IF90aGlzLmluaXRpYWxpemVTdGF0ZVZhbHVlKClcbiAgICAgICAgfTtcblxuICAgICAgICBfdGhpcy5kaXNwYXRjaCA9IGZ1bmN0aW9uIChhY3Rpb24sIGNhbGxiYWNrKSB7XG4gICAgICAgICAgaWYgKGNhbGxiYWNrID09PSB2b2lkIDApIHtcbiAgICAgICAgICAgIGNhbGxiYWNrID0gbm9vcDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gX3RoaXMuc2V0U3RhdGUoZnVuY3Rpb24gKF9yZWYpIHtcbiAgICAgICAgICAgIHZhciBzdGF0ZVZhbHVlID0gX3JlZi5zdGF0ZVZhbHVlO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgc3RhdGVWYWx1ZTogcmVkdWNlcihzdGF0ZVZhbHVlLCBhY3Rpb24pXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhfdGhpcy5zdGF0ZS5zdGF0ZVZhbHVlKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgICB9XG5cbiAgICAgIHZhciBfcHJvdG8gPSBXaXRoUmVkdWNlci5wcm90b3R5cGU7XG5cbiAgICAgIF9wcm90by5pbml0aWFsaXplU3RhdGVWYWx1ZSA9IGZ1bmN0aW9uIGluaXRpYWxpemVTdGF0ZVZhbHVlKCkge1xuICAgICAgICBpZiAoaW5pdGlhbFN0YXRlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICByZXR1cm4gdHlwZW9mIGluaXRpYWxTdGF0ZSA9PT0gJ2Z1bmN0aW9uJyA/IGluaXRpYWxTdGF0ZSh0aGlzLnByb3BzKSA6IGluaXRpYWxTdGF0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZWR1Y2VyKHVuZGVmaW5lZCwge1xuICAgICAgICAgIHR5cGU6ICdAQHJlY29tcG9zZS9JTklUJ1xuICAgICAgICB9KTtcbiAgICAgIH07XG5cbiAgICAgIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgIHZhciBfZXh0ZW5kczI7XG5cbiAgICAgICAgcmV0dXJuIGZhY3RvcnkoX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIChfZXh0ZW5kczIgPSB7fSwgX2V4dGVuZHMyW3N0YXRlTmFtZV0gPSB0aGlzLnN0YXRlLnN0YXRlVmFsdWUsIF9leHRlbmRzMltkaXNwYXRjaE5hbWVdID0gdGhpcy5kaXNwYXRjaCwgX2V4dGVuZHMyKSkpO1xuICAgICAgfTtcblxuICAgICAgcmV0dXJuIFdpdGhSZWR1Y2VyO1xuICAgIH0oQ29tcG9uZW50KTtcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICByZXR1cm4gc2V0RGlzcGxheU5hbWUod3JhcERpc3BsYXlOYW1lKEJhc2VDb21wb25lbnQsICd3aXRoUmVkdWNlcicpKShXaXRoUmVkdWNlcik7XG4gICAgfVxuXG4gICAgcmV0dXJuIFdpdGhSZWR1Y2VyO1xuICB9O1xufTtcblxudmFyIGlkZW50aXR5ID0gZnVuY3Rpb24gaWRlbnRpdHkoQ29tcG9uZW50JCQxKSB7XG4gIHJldHVybiBDb21wb25lbnQkJDE7XG59O1xuXG52YXIgYnJhbmNoID0gZnVuY3Rpb24gYnJhbmNoKHRlc3QsIGxlZnQsIHJpZ2h0KSB7XG4gIGlmIChyaWdodCA9PT0gdm9pZCAwKSB7XG4gICAgcmlnaHQgPSBpZGVudGl0eTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoQmFzZUNvbXBvbmVudCkge1xuICAgIHZhciBsZWZ0RmFjdG9yeTtcbiAgICB2YXIgcmlnaHRGYWN0b3J5O1xuXG4gICAgdmFyIEJyYW5jaCA9IGZ1bmN0aW9uIEJyYW5jaChwcm9wcykge1xuICAgICAgaWYgKHRlc3QocHJvcHMpKSB7XG4gICAgICAgIGxlZnRGYWN0b3J5ID0gbGVmdEZhY3RvcnkgfHwgY3JlYXRlRmFjdG9yeShsZWZ0KEJhc2VDb21wb25lbnQpKTtcbiAgICAgICAgcmV0dXJuIGxlZnRGYWN0b3J5KHByb3BzKTtcbiAgICAgIH1cblxuICAgICAgcmlnaHRGYWN0b3J5ID0gcmlnaHRGYWN0b3J5IHx8IGNyZWF0ZUZhY3RvcnkocmlnaHQoQmFzZUNvbXBvbmVudCkpO1xuICAgICAgcmV0dXJuIHJpZ2h0RmFjdG9yeShwcm9wcyk7XG4gICAgfTtcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICByZXR1cm4gc2V0RGlzcGxheU5hbWUod3JhcERpc3BsYXlOYW1lKEJhc2VDb21wb25lbnQsICdicmFuY2gnKSkoQnJhbmNoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gQnJhbmNoO1xuICB9O1xufTtcblxudmFyIHJlbmRlckNvbXBvbmVudCA9IGZ1bmN0aW9uIHJlbmRlckNvbXBvbmVudChDb21wb25lbnQkJDEpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChfKSB7XG4gICAgdmFyIGZhY3RvcnkgPSBjcmVhdGVGYWN0b3J5KENvbXBvbmVudCQkMSk7XG5cbiAgICB2YXIgUmVuZGVyQ29tcG9uZW50ID0gZnVuY3Rpb24gUmVuZGVyQ29tcG9uZW50KHByb3BzKSB7XG4gICAgICByZXR1cm4gZmFjdG9yeShwcm9wcyk7XG4gICAgfTtcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBSZW5kZXJDb21wb25lbnQuZGlzcGxheU5hbWUgPSB3cmFwRGlzcGxheU5hbWUoQ29tcG9uZW50JCQxLCAncmVuZGVyQ29tcG9uZW50Jyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIFJlbmRlckNvbXBvbmVudDtcbiAgfTtcbn07XG5cbnZhciBOb3RoaW5nID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0c0xvb3NlKE5vdGhpbmcsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIE5vdGhpbmcoKSB7XG4gICAgcmV0dXJuIF9Db21wb25lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IE5vdGhpbmcucHJvdG90eXBlO1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG5cbiAgcmV0dXJuIE5vdGhpbmc7XG59KENvbXBvbmVudCk7XG5cbnZhciByZW5kZXJOb3RoaW5nID0gZnVuY3Rpb24gcmVuZGVyTm90aGluZyhfKSB7XG4gIHJldHVybiBOb3RoaW5nO1xufTtcblxudmFyIHNob3VsZFVwZGF0ZSA9IGZ1bmN0aW9uIHNob3VsZFVwZGF0ZSh0ZXN0KSB7XG4gIHJldHVybiBmdW5jdGlvbiAoQmFzZUNvbXBvbmVudCkge1xuICAgIHZhciBmYWN0b3J5ID0gY3JlYXRlRmFjdG9yeShCYXNlQ29tcG9uZW50KTtcblxuICAgIHZhciBTaG91bGRVcGRhdGUgPVxuICAgIC8qI19fUFVSRV9fKi9cbiAgICBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICAgICAgX2luaGVyaXRzTG9vc2UoU2hvdWxkVXBkYXRlLCBfQ29tcG9uZW50KTtcblxuICAgICAgZnVuY3Rpb24gU2hvdWxkVXBkYXRlKCkge1xuICAgICAgICByZXR1cm4gX0NvbXBvbmVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgICB9XG5cbiAgICAgIHZhciBfcHJvdG8gPSBTaG91bGRVcGRhdGUucHJvdG90eXBlO1xuXG4gICAgICBfcHJvdG8uc2hvdWxkQ29tcG9uZW50VXBkYXRlID0gZnVuY3Rpb24gc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcykge1xuICAgICAgICByZXR1cm4gdGVzdCh0aGlzLnByb3BzLCBuZXh0UHJvcHMpO1xuICAgICAgfTtcblxuICAgICAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIGZhY3RvcnkodGhpcy5wcm9wcyk7XG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gU2hvdWxkVXBkYXRlO1xuICAgIH0oQ29tcG9uZW50KTtcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICByZXR1cm4gc2V0RGlzcGxheU5hbWUod3JhcERpc3BsYXlOYW1lKEJhc2VDb21wb25lbnQsICdzaG91bGRVcGRhdGUnKSkoU2hvdWxkVXBkYXRlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gU2hvdWxkVXBkYXRlO1xuICB9O1xufTtcblxudmFyIHB1cmUgPSBmdW5jdGlvbiBwdXJlKEJhc2VDb21wb25lbnQpIHtcbiAgdmFyIGhvYyA9IHNob3VsZFVwZGF0ZShmdW5jdGlvbiAocHJvcHMsIG5leHRQcm9wcykge1xuICAgIHJldHVybiAhc2hhbGxvd0VxdWFsKHByb3BzLCBuZXh0UHJvcHMpO1xuICB9KTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIHJldHVybiBzZXREaXNwbGF5TmFtZSh3cmFwRGlzcGxheU5hbWUoQmFzZUNvbXBvbmVudCwgJ3B1cmUnKSkoaG9jKEJhc2VDb21wb25lbnQpKTtcbiAgfVxuXG4gIHJldHVybiBob2MoQmFzZUNvbXBvbmVudCk7XG59O1xuXG52YXIgb25seVVwZGF0ZUZvcktleXMgPSBmdW5jdGlvbiBvbmx5VXBkYXRlRm9yS2V5cyhwcm9wS2V5cykge1xuICB2YXIgaG9jID0gc2hvdWxkVXBkYXRlKGZ1bmN0aW9uIChwcm9wcywgbmV4dFByb3BzKSB7XG4gICAgcmV0dXJuICFzaGFsbG93RXF1YWwocGljayhuZXh0UHJvcHMsIHByb3BLZXlzKSwgcGljayhwcm9wcywgcHJvcEtleXMpKTtcbiAgfSk7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKEJhc2VDb21wb25lbnQpIHtcbiAgICAgIHJldHVybiBzZXREaXNwbGF5TmFtZSh3cmFwRGlzcGxheU5hbWUoQmFzZUNvbXBvbmVudCwgJ29ubHlVcGRhdGVGb3JLZXlzJykpKGhvYyhCYXNlQ29tcG9uZW50KSk7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBob2M7XG59O1xuXG52YXIgb25seVVwZGF0ZUZvclByb3BUeXBlcyA9IGZ1bmN0aW9uIG9ubHlVcGRhdGVGb3JQcm9wVHlwZXMoQmFzZUNvbXBvbmVudCkge1xuICB2YXIgcHJvcFR5cGVzID0gQmFzZUNvbXBvbmVudC5wcm9wVHlwZXM7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoIXByb3BUeXBlcykge1xuICAgICAgLyogZXNsaW50LWRpc2FibGUgKi9cbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0EgY29tcG9uZW50IHdpdGhvdXQgYW55IGBwcm9wVHlwZXNgIHdhcyBwYXNzZWQgdG8gJyArICdgb25seVVwZGF0ZUZvclByb3BUeXBlcygpYC4gQ2hlY2sgdGhlIGltcGxlbWVudGF0aW9uIG9mIHRoZSAnICsgKFwiY29tcG9uZW50IHdpdGggZGlzcGxheSBuYW1lIFxcXCJcIiArIGdldERpc3BsYXlOYW1lKEJhc2VDb21wb25lbnQpICsgXCJcXFwiLlwiKSk7XG4gICAgICAvKiBlc2xpbnQtZW5hYmxlICovXG4gICAgfVxuICB9XG5cbiAgdmFyIHByb3BLZXlzID0gT2JqZWN0LmtleXMocHJvcFR5cGVzIHx8IHt9KTtcbiAgdmFyIE9ubHlVcGRhdGVGb3JQcm9wVHlwZXMgPSBvbmx5VXBkYXRlRm9yS2V5cyhwcm9wS2V5cykoQmFzZUNvbXBvbmVudCk7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICByZXR1cm4gc2V0RGlzcGxheU5hbWUod3JhcERpc3BsYXlOYW1lKEJhc2VDb21wb25lbnQsICdvbmx5VXBkYXRlRm9yUHJvcFR5cGVzJykpKE9ubHlVcGRhdGVGb3JQcm9wVHlwZXMpO1xuICB9XG5cbiAgcmV0dXJuIE9ubHlVcGRhdGVGb3JQcm9wVHlwZXM7XG59O1xuXG52YXIgd2l0aENvbnRleHQgPSBmdW5jdGlvbiB3aXRoQ29udGV4dChjaGlsZENvbnRleHRUeXBlcywgZ2V0Q2hpbGRDb250ZXh0KSB7XG4gIHJldHVybiBmdW5jdGlvbiAoQmFzZUNvbXBvbmVudCkge1xuICAgIHZhciBmYWN0b3J5ID0gY3JlYXRlRmFjdG9yeShCYXNlQ29tcG9uZW50KTtcblxuICAgIHZhciBXaXRoQ29udGV4dCA9XG4gICAgLyojX19QVVJFX18qL1xuICAgIGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gICAgICBfaW5oZXJpdHNMb29zZShXaXRoQ29udGV4dCwgX0NvbXBvbmVudCk7XG5cbiAgICAgIGZ1bmN0aW9uIFdpdGhDb250ZXh0KCkge1xuICAgICAgICB2YXIgX3RoaXM7XG5cbiAgICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgICAgfVxuXG4gICAgICAgIF90aGlzID0gX0NvbXBvbmVudC5jYWxsLmFwcGx5KF9Db21wb25lbnQsIFt0aGlzXS5jb25jYXQoYXJncykpIHx8IHRoaXM7XG5cbiAgICAgICAgX3RoaXMuZ2V0Q2hpbGRDb250ZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBnZXRDaGlsZENvbnRleHQoX3RoaXMucHJvcHMpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICAgIH1cblxuICAgICAgdmFyIF9wcm90byA9IFdpdGhDb250ZXh0LnByb3RvdHlwZTtcblxuICAgICAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIGZhY3RvcnkodGhpcy5wcm9wcyk7XG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gV2l0aENvbnRleHQ7XG4gICAgfShDb21wb25lbnQpO1xuXG4gICAgV2l0aENvbnRleHQuY2hpbGRDb250ZXh0VHlwZXMgPSBjaGlsZENvbnRleHRUeXBlcztcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICByZXR1cm4gc2V0RGlzcGxheU5hbWUod3JhcERpc3BsYXlOYW1lKEJhc2VDb21wb25lbnQsICd3aXRoQ29udGV4dCcpKShXaXRoQ29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIFdpdGhDb250ZXh0O1xuICB9O1xufTtcblxudmFyIGdldENvbnRleHQgPSBmdW5jdGlvbiBnZXRDb250ZXh0KGNvbnRleHRUeXBlcykge1xuICByZXR1cm4gZnVuY3Rpb24gKEJhc2VDb21wb25lbnQpIHtcbiAgICB2YXIgZmFjdG9yeSA9IGNyZWF0ZUZhY3RvcnkoQmFzZUNvbXBvbmVudCk7XG5cbiAgICB2YXIgR2V0Q29udGV4dCA9IGZ1bmN0aW9uIEdldENvbnRleHQob3duZXJQcm9wcywgY29udGV4dCkge1xuICAgICAgcmV0dXJuIGZhY3RvcnkoX2V4dGVuZHMoe30sIG93bmVyUHJvcHMsIGNvbnRleHQpKTtcbiAgICB9O1xuXG4gICAgR2V0Q29udGV4dC5jb250ZXh0VHlwZXMgPSBjb250ZXh0VHlwZXM7XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgcmV0dXJuIHNldERpc3BsYXlOYW1lKHdyYXBEaXNwbGF5TmFtZShCYXNlQ29tcG9uZW50LCAnZ2V0Q29udGV4dCcpKShHZXRDb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gR2V0Q29udGV4dDtcbiAgfTtcbn07XG5cbnZhciBsaWZlY3ljbGUgPSBmdW5jdGlvbiBsaWZlY3ljbGUoc3BlYykge1xuICByZXR1cm4gZnVuY3Rpb24gKEJhc2VDb21wb25lbnQpIHtcbiAgICB2YXIgZmFjdG9yeSA9IGNyZWF0ZUZhY3RvcnkoQmFzZUNvbXBvbmVudCk7XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBzcGVjLmhhc093blByb3BlcnR5KCdyZW5kZXInKSkge1xuICAgICAgY29uc29sZS5lcnJvcignbGlmZWN5Y2xlKCkgZG9lcyBub3Qgc3VwcG9ydCB0aGUgcmVuZGVyIG1ldGhvZDsgaXRzIGJlaGF2aW9yIGlzIHRvICcgKyAncGFzcyBhbGwgcHJvcHMgYW5kIHN0YXRlIHRvIHRoZSBiYXNlIGNvbXBvbmVudC4nKTtcbiAgICB9XG5cbiAgICB2YXIgTGlmZWN5Y2xlID1cbiAgICAvKiNfX1BVUkVfXyovXG4gICAgZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgICAgIF9pbmhlcml0c0xvb3NlKExpZmVjeWNsZSwgX0NvbXBvbmVudCk7XG5cbiAgICAgIGZ1bmN0aW9uIExpZmVjeWNsZSgpIHtcbiAgICAgICAgcmV0dXJuIF9Db21wb25lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgICAgfVxuXG4gICAgICB2YXIgX3Byb3RvID0gTGlmZWN5Y2xlLnByb3RvdHlwZTtcblxuICAgICAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIGZhY3RvcnkoX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHRoaXMuc3RhdGUpKTtcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBMaWZlY3ljbGU7XG4gICAgfShDb21wb25lbnQpO1xuXG4gICAgT2JqZWN0LmtleXMoc3BlYykuZm9yRWFjaChmdW5jdGlvbiAoaG9vaykge1xuICAgICAgcmV0dXJuIExpZmVjeWNsZS5wcm90b3R5cGVbaG9va10gPSBzcGVjW2hvb2tdO1xuICAgIH0pO1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHJldHVybiBzZXREaXNwbGF5TmFtZSh3cmFwRGlzcGxheU5hbWUoQmFzZUNvbXBvbmVudCwgJ2xpZmVjeWNsZScpKShMaWZlY3ljbGUpO1xuICAgIH1cblxuICAgIHJldHVybiBMaWZlY3ljbGU7XG4gIH07XG59O1xuXG52YXIgaXNDbGFzc0NvbXBvbmVudCA9IGZ1bmN0aW9uIGlzQ2xhc3NDb21wb25lbnQoQ29tcG9uZW50JCQxKSB7XG4gIHJldHVybiBCb29sZWFuKENvbXBvbmVudCQkMSAmJiBDb21wb25lbnQkJDEucHJvdG90eXBlICYmIHR5cGVvZiBDb21wb25lbnQkJDEucHJvdG90eXBlLnJlbmRlciA9PT0gJ2Z1bmN0aW9uJyk7XG59O1xuXG52YXIgdG9DbGFzcyA9IGZ1bmN0aW9uIHRvQ2xhc3MoYmFzZUNvbXBvbmVudCkge1xuICB2YXIgX2NsYXNzLCBfdGVtcDtcblxuICByZXR1cm4gaXNDbGFzc0NvbXBvbmVudChiYXNlQ29tcG9uZW50KSA/IGJhc2VDb21wb25lbnQgOiAoX3RlbXAgPSBfY2xhc3MgPVxuICAvKiNfX1BVUkVfXyovXG4gIGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gICAgX2luaGVyaXRzTG9vc2UoVG9DbGFzcywgX0NvbXBvbmVudCk7XG5cbiAgICBmdW5jdGlvbiBUb0NsYXNzKCkge1xuICAgICAgcmV0dXJuIF9Db21wb25lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cblxuICAgIHZhciBfcHJvdG8gPSBUb0NsYXNzLnByb3RvdHlwZTtcblxuICAgIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICBpZiAodHlwZW9mIGJhc2VDb21wb25lbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KGJhc2VDb21wb25lbnQsIHRoaXMucHJvcHMpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gYmFzZUNvbXBvbmVudCh0aGlzLnByb3BzLCB0aGlzLmNvbnRleHQpO1xuICAgIH07XG5cbiAgICByZXR1cm4gVG9DbGFzcztcbiAgfShDb21wb25lbnQpLCBfY2xhc3MuZGlzcGxheU5hbWUgPSBnZXREaXNwbGF5TmFtZShiYXNlQ29tcG9uZW50KSwgX2NsYXNzLnByb3BUeXBlcyA9IGJhc2VDb21wb25lbnQucHJvcFR5cGVzLCBfY2xhc3MuY29udGV4dFR5cGVzID0gYmFzZUNvbXBvbmVudC5jb250ZXh0VHlwZXMsIF9jbGFzcy5kZWZhdWx0UHJvcHMgPSBiYXNlQ29tcG9uZW50LmRlZmF1bHRQcm9wcywgX3RlbXApO1xufTtcblxuZnVuY3Rpb24gdG9SZW5kZXJQcm9wcyhob2MpIHtcbiAgdmFyIFJlbmRlclByb3BzQ29tcG9uZW50ID0gZnVuY3Rpb24gUmVuZGVyUHJvcHNDb21wb25lbnQocHJvcHMpIHtcbiAgICByZXR1cm4gcHJvcHMuY2hpbGRyZW4ocHJvcHMpO1xuICB9O1xuXG4gIHJldHVybiBob2MoUmVuZGVyUHJvcHNDb21wb25lbnQpO1xufVxuXG52YXIgZnJvbVJlbmRlclByb3BzID0gZnVuY3Rpb24gZnJvbVJlbmRlclByb3BzKFJlbmRlclByb3BzQ29tcG9uZW50LCBwcm9wc01hcHBlciwgcmVuZGVyUHJvcE5hbWUpIHtcbiAgaWYgKHJlbmRlclByb3BOYW1lID09PSB2b2lkIDApIHtcbiAgICByZW5kZXJQcm9wTmFtZSA9ICdjaGlsZHJlbic7XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKEJhc2VDb21wb25lbnQpIHtcbiAgICB2YXIgYmFzZUZhY3RvcnkgPSBSZWFjdC5jcmVhdGVGYWN0b3J5KEJhc2VDb21wb25lbnQpO1xuICAgIHZhciByZW5kZXJQcm9wc0ZhY3RvcnkgPSBSZWFjdC5jcmVhdGVGYWN0b3J5KFJlbmRlclByb3BzQ29tcG9uZW50KTtcblxuICAgIHZhciBGcm9tUmVuZGVyUHJvcHMgPSBmdW5jdGlvbiBGcm9tUmVuZGVyUHJvcHMob3duZXJQcm9wcykge1xuICAgICAgdmFyIF9yZW5kZXJQcm9wc0ZhY3Rvcnk7XG5cbiAgICAgIHJldHVybiByZW5kZXJQcm9wc0ZhY3RvcnkoKF9yZW5kZXJQcm9wc0ZhY3RvcnkgPSB7fSwgX3JlbmRlclByb3BzRmFjdG9yeVtyZW5kZXJQcm9wTmFtZV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBiYXNlRmFjdG9yeShfZXh0ZW5kcyh7fSwgb3duZXJQcm9wcywgcHJvcHNNYXBwZXIuYXBwbHkodm9pZCAwLCBhcmd1bWVudHMpKSk7XG4gICAgICB9LCBfcmVuZGVyUHJvcHNGYWN0b3J5KSk7XG4gICAgfTtcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICByZXR1cm4gc2V0RGlzcGxheU5hbWUod3JhcERpc3BsYXlOYW1lKEJhc2VDb21wb25lbnQsICdmcm9tUmVuZGVyUHJvcHMnKSkoRnJvbVJlbmRlclByb3BzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gRnJvbVJlbmRlclByb3BzO1xuICB9O1xufTtcblxudmFyIHNldFByb3BUeXBlcyA9IGZ1bmN0aW9uIHNldFByb3BUeXBlcyhwcm9wVHlwZXMpIHtcbiAgcmV0dXJuIHNldFN0YXRpYygncHJvcFR5cGVzJywgcHJvcFR5cGVzKTtcbn07XG5cbnZhciBjb21wb3NlID0gZnVuY3Rpb24gY29tcG9zZSgpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGZ1bmNzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGZ1bmNzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmNzLnJlZHVjZShmdW5jdGlvbiAoYSwgYikge1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gYShiLmFwcGx5KHZvaWQgMCwgYXJndW1lbnRzKSk7XG4gICAgfTtcbiAgfSwgZnVuY3Rpb24gKGFyZykge1xuICAgIHJldHVybiBhcmc7XG4gIH0pO1xufTtcblxudmFyIGNyZWF0ZVNpbmsgPSBmdW5jdGlvbiBjcmVhdGVTaW5rKGNhbGxiYWNrKSB7XG4gIHZhciBTaW5rID1cbiAgLyojX19QVVJFX18qL1xuICBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICAgIF9pbmhlcml0c0xvb3NlKFNpbmssIF9Db21wb25lbnQpO1xuXG4gICAgZnVuY3Rpb24gU2luaygpIHtcbiAgICAgIHZhciBfdGhpcztcblxuICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICB9XG5cbiAgICAgIF90aGlzID0gX0NvbXBvbmVudC5jYWxsLmFwcGx5KF9Db21wb25lbnQsIFt0aGlzXS5jb25jYXQoYXJncykpIHx8IHRoaXM7XG4gICAgICBfdGhpcy5zdGF0ZSA9IHt9O1xuICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cblxuICAgIFNpbmsuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzID0gZnVuY3Rpb24gZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKG5leHRQcm9wcykge1xuICAgICAgY2FsbGJhY2sobmV4dFByb3BzKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH07XG5cbiAgICB2YXIgX3Byb3RvID0gU2luay5wcm90b3R5cGU7XG5cbiAgICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfTtcblxuICAgIHJldHVybiBTaW5rO1xuICB9KENvbXBvbmVudCk7XG5cbiAgcG9seWZpbGwoU2luayk7XG4gIHJldHVybiBTaW5rO1xufTtcblxudmFyIGNvbXBvbmVudEZyb21Qcm9wID0gZnVuY3Rpb24gY29tcG9uZW50RnJvbVByb3AocHJvcE5hbWUpIHtcbiAgdmFyIENvbXBvbmVudCQkMSA9IGZ1bmN0aW9uIENvbXBvbmVudCQkMShwcm9wcykge1xuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KHByb3BzW3Byb3BOYW1lXSwgb21pdChwcm9wcywgW3Byb3BOYW1lXSkpO1xuICB9O1xuXG4gIENvbXBvbmVudCQkMS5kaXNwbGF5TmFtZSA9IFwiY29tcG9uZW50RnJvbVByb3AoXCIgKyBwcm9wTmFtZSArIFwiKVwiO1xuICByZXR1cm4gQ29tcG9uZW50JCQxO1xufTtcblxudmFyIG5lc3QgPSBmdW5jdGlvbiBuZXN0KCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgQ29tcG9uZW50cyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBDb21wb25lbnRzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgdmFyIGZhY3RvcmllcyA9IENvbXBvbmVudHMubWFwKGNyZWF0ZUZhY3RvcnkpO1xuXG4gIHZhciBOZXN0ID0gZnVuY3Rpb24gTmVzdChfcmVmKSB7XG4gICAgdmFyIGNoaWxkcmVuID0gX3JlZi5jaGlsZHJlbixcbiAgICAgICAgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfcmVmLCBbXCJjaGlsZHJlblwiXSk7XG5cbiAgICByZXR1cm4gZmFjdG9yaWVzLnJlZHVjZVJpZ2h0KGZ1bmN0aW9uIChjaGlsZCwgZmFjdG9yeSkge1xuICAgICAgcmV0dXJuIGZhY3RvcnkocHJvcHMsIGNoaWxkKTtcbiAgICB9LCBjaGlsZHJlbik7XG4gIH07XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICB2YXIgZGlzcGxheU5hbWVzID0gQ29tcG9uZW50cy5tYXAoZ2V0RGlzcGxheU5hbWUpO1xuICAgIE5lc3QuZGlzcGxheU5hbWUgPSBcIm5lc3QoXCIgKyBkaXNwbGF5TmFtZXMuam9pbignLCAnKSArIFwiKVwiO1xuICB9XG5cbiAgcmV0dXJuIE5lc3Q7XG59O1xuXG52YXIgaG9pc3RTdGF0aWNzID0gZnVuY3Rpb24gaG9pc3RTdGF0aWNzKGhpZ2hlck9yZGVyQ29tcG9uZW50LCBibGFja2xpc3QpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChCYXNlQ29tcG9uZW50KSB7XG4gICAgdmFyIE5ld0NvbXBvbmVudCA9IGhpZ2hlck9yZGVyQ29tcG9uZW50KEJhc2VDb21wb25lbnQpO1xuICAgIGhvaXN0Tm9uUmVhY3RTdGF0aWNzKE5ld0NvbXBvbmVudCwgQmFzZUNvbXBvbmVudCwgYmxhY2tsaXN0KTtcbiAgICByZXR1cm4gTmV3Q29tcG9uZW50O1xuICB9O1xufTtcblxudmFyIF9jb25maWcgPSB7XG4gIGZyb21FU09ic2VydmFibGU6IG51bGwsXG4gIHRvRVNPYnNlcnZhYmxlOiBudWxsXG59O1xuXG52YXIgY29uZmlndXJlT2JzZXJ2YWJsZSA9IGZ1bmN0aW9uIGNvbmZpZ3VyZU9ic2VydmFibGUoYykge1xuICBfY29uZmlnID0gYztcbn07XG5cbnZhciBjb25maWcgPSB7XG4gIGZyb21FU09ic2VydmFibGU6IGZ1bmN0aW9uIGZyb21FU09ic2VydmFibGUob2JzZXJ2YWJsZSkge1xuICAgIHJldHVybiB0eXBlb2YgX2NvbmZpZy5mcm9tRVNPYnNlcnZhYmxlID09PSAnZnVuY3Rpb24nID8gX2NvbmZpZy5mcm9tRVNPYnNlcnZhYmxlKG9ic2VydmFibGUpIDogb2JzZXJ2YWJsZTtcbiAgfSxcbiAgdG9FU09ic2VydmFibGU6IGZ1bmN0aW9uIHRvRVNPYnNlcnZhYmxlKHN0cmVhbSkge1xuICAgIHJldHVybiB0eXBlb2YgX2NvbmZpZy50b0VTT2JzZXJ2YWJsZSA9PT0gJ2Z1bmN0aW9uJyA/IF9jb25maWcudG9FU09ic2VydmFibGUoc3RyZWFtKSA6IHN0cmVhbTtcbiAgfVxufTtcblxudmFyIGNvbXBvbmVudEZyb21TdHJlYW1XaXRoQ29uZmlnID0gZnVuY3Rpb24gY29tcG9uZW50RnJvbVN0cmVhbVdpdGhDb25maWcoY29uZmlnJCQxKSB7XG4gIHJldHVybiBmdW5jdGlvbiAocHJvcHNUb1Zkb20pIHtcbiAgICByZXR1cm4gKFxuICAgICAgLyojX19QVVJFX18qL1xuICAgICAgZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgICAgICAgX2luaGVyaXRzTG9vc2UoQ29tcG9uZW50RnJvbVN0cmVhbSwgX0NvbXBvbmVudCk7XG5cbiAgICAgICAgZnVuY3Rpb24gQ29tcG9uZW50RnJvbVN0cmVhbSgpIHtcbiAgICAgICAgICB2YXIgX2NvbmZpZyRmcm9tRVNPYnNlcnZhO1xuXG4gICAgICAgICAgdmFyIF90aGlzO1xuXG4gICAgICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIF90aGlzID0gX0NvbXBvbmVudC5jYWxsLmFwcGx5KF9Db21wb25lbnQsIFt0aGlzXS5jb25jYXQoYXJncykpIHx8IHRoaXM7XG4gICAgICAgICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICB2ZG9tOiBudWxsXG4gICAgICAgICAgfTtcbiAgICAgICAgICBfdGhpcy5wcm9wc0VtaXR0ZXIgPSBjcmVhdGVDaGFuZ2VFbWl0dGVyKCk7XG4gICAgICAgICAgX3RoaXMucHJvcHMkID0gY29uZmlnJCQxLmZyb21FU09ic2VydmFibGUoKF9jb25maWckZnJvbUVTT2JzZXJ2YSA9IHtcbiAgICAgICAgICAgIHN1YnNjcmliZTogZnVuY3Rpb24gc3Vic2NyaWJlKG9ic2VydmVyKSB7XG4gICAgICAgICAgICAgIHZhciB1bnN1YnNjcmliZSA9IF90aGlzLnByb3BzRW1pdHRlci5saXN0ZW4oZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzKSB7XG4gICAgICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KHByb3BzKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdW5zdWJzY3JpYmU6IHVuc3Vic2NyaWJlXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgX2NvbmZpZyRmcm9tRVNPYnNlcnZhWyQkb2JzZXJ2YWJsZV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICB9LCBfY29uZmlnJGZyb21FU09ic2VydmEpKTtcbiAgICAgICAgICBfdGhpcy52ZG9tJCA9IGNvbmZpZyQkMS50b0VTT2JzZXJ2YWJsZShwcm9wc1RvVmRvbShfdGhpcy5wcm9wcyQpKTtcbiAgICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgX3Byb3RvID0gQ29tcG9uZW50RnJvbVN0cmVhbS5wcm90b3R5cGU7XG5cbiAgICAgICAgX3Byb3RvLmNvbXBvbmVudFdpbGxNb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICAgIC8vIFN1YnNjcmliZSB0byBjaGlsZCBwcm9wIGNoYW5nZXMgc28gd2Uga25vdyB3aGVuIHRvIHJlLXJlbmRlclxuICAgICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy52ZG9tJC5zdWJzY3JpYmUoe1xuICAgICAgICAgICAgbmV4dDogZnVuY3Rpb24gbmV4dCh2ZG9tKSB7XG4gICAgICAgICAgICAgIF90aGlzMi5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgdmRvbTogdmRvbVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0aGlzLnByb3BzRW1pdHRlci5lbWl0KHRoaXMucHJvcHMpO1xuICAgICAgICB9O1xuXG4gICAgICAgIF9wcm90by5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgICAgICAvLyBSZWNlaXZlIG5ldyBwcm9wcyBmcm9tIHRoZSBvd25lclxuICAgICAgICAgIHRoaXMucHJvcHNFbWl0dGVyLmVtaXQobmV4dFByb3BzKTtcbiAgICAgICAgfTtcblxuICAgICAgICBfcHJvdG8uc2hvdWxkQ29tcG9uZW50VXBkYXRlID0gZnVuY3Rpb24gc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XG4gICAgICAgICAgcmV0dXJuIG5leHRTdGF0ZS52ZG9tICE9PSB0aGlzLnN0YXRlLnZkb207XG4gICAgICAgIH07XG5cbiAgICAgICAgX3Byb3RvLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgICAgLy8gQ2FsbCB3aXRob3V0IGFyZ3VtZW50cyB0byBjb21wbGV0ZSBzdHJlYW1cbiAgICAgICAgICB0aGlzLnByb3BzRW1pdHRlci5lbWl0KCk7IC8vIENsZWFuLXVwIHN1YnNjcmlwdGlvbiBiZWZvcmUgdW4tbW91bnRpbmdcblxuICAgICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS52ZG9tO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBDb21wb25lbnRGcm9tU3RyZWFtO1xuICAgICAgfShDb21wb25lbnQpXG4gICAgKTtcbiAgfTtcbn07XG5cbnZhciBjb21wb25lbnRGcm9tU3RyZWFtID0gZnVuY3Rpb24gY29tcG9uZW50RnJvbVN0cmVhbShwcm9wc1RvVmRvbSkge1xuICByZXR1cm4gY29tcG9uZW50RnJvbVN0cmVhbVdpdGhDb25maWcoY29uZmlnKShwcm9wc1RvVmRvbSk7XG59O1xuXG52YXIgaWRlbnRpdHkkMSA9IGZ1bmN0aW9uIGlkZW50aXR5KHQpIHtcbiAgcmV0dXJuIHQ7XG59O1xuXG52YXIgbWFwUHJvcHNTdHJlYW1XaXRoQ29uZmlnID0gZnVuY3Rpb24gbWFwUHJvcHNTdHJlYW1XaXRoQ29uZmlnKGNvbmZpZyQkMSkge1xuICB2YXIgY29tcG9uZW50RnJvbVN0cmVhbSQkMSA9IGNvbXBvbmVudEZyb21TdHJlYW1XaXRoQ29uZmlnKHtcbiAgICBmcm9tRVNPYnNlcnZhYmxlOiBpZGVudGl0eSQxLFxuICAgIHRvRVNPYnNlcnZhYmxlOiBpZGVudGl0eSQxXG4gIH0pO1xuICByZXR1cm4gZnVuY3Rpb24gKHRyYW5zZm9ybSkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoQmFzZUNvbXBvbmVudCkge1xuICAgICAgdmFyIGZhY3RvcnkgPSBjcmVhdGVGYWN0b3J5KEJhc2VDb21wb25lbnQpO1xuICAgICAgdmFyIGZyb21FU09ic2VydmFibGUgPSBjb25maWckJDEuZnJvbUVTT2JzZXJ2YWJsZSxcbiAgICAgICAgICB0b0VTT2JzZXJ2YWJsZSA9IGNvbmZpZyQkMS50b0VTT2JzZXJ2YWJsZTtcbiAgICAgIHJldHVybiBjb21wb25lbnRGcm9tU3RyZWFtJCQxKGZ1bmN0aW9uIChwcm9wcyQpIHtcbiAgICAgICAgdmFyIF9yZWY7XG5cbiAgICAgICAgcmV0dXJuIF9yZWYgPSB7XG4gICAgICAgICAgc3Vic2NyaWJlOiBmdW5jdGlvbiBzdWJzY3JpYmUob2JzZXJ2ZXIpIHtcbiAgICAgICAgICAgIHZhciBzdWJzY3JpcHRpb24gPSB0b0VTT2JzZXJ2YWJsZSh0cmFuc2Zvcm0oZnJvbUVTT2JzZXJ2YWJsZShwcm9wcyQpKSkuc3Vic2NyaWJlKHtcbiAgICAgICAgICAgICAgbmV4dDogZnVuY3Rpb24gbmV4dChjaGlsZFByb3BzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9ic2VydmVyLm5leHQoZmFjdG9yeShjaGlsZFByb3BzKSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgdW5zdWJzY3JpYmU6IGZ1bmN0aW9uIHVuc3Vic2NyaWJlKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIF9yZWZbJCRvYnNlcnZhYmxlXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfSwgX3JlZjtcbiAgICAgIH0pO1xuICAgIH07XG4gIH07XG59O1xuXG52YXIgbWFwUHJvcHNTdHJlYW0gPSBmdW5jdGlvbiBtYXBQcm9wc1N0cmVhbSh0cmFuc2Zvcm0pIHtcbiAgdmFyIGhvYyA9IG1hcFByb3BzU3RyZWFtV2l0aENvbmZpZyhjb25maWcpKHRyYW5zZm9ybSk7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKEJhc2VDb21wb25lbnQpIHtcbiAgICAgIHJldHVybiBzZXREaXNwbGF5TmFtZSh3cmFwRGlzcGxheU5hbWUoQmFzZUNvbXBvbmVudCwgJ21hcFByb3BzU3RyZWFtJykpKGhvYyhCYXNlQ29tcG9uZW50KSk7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBob2M7XG59O1xuXG52YXIgY3JlYXRlRXZlbnRIYW5kbGVyV2l0aENvbmZpZyA9IGZ1bmN0aW9uIGNyZWF0ZUV2ZW50SGFuZGxlcldpdGhDb25maWcoY29uZmlnJCQxKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF9jb25maWckZnJvbUVTT2JzZXJ2YTtcblxuICAgIHZhciBlbWl0dGVyID0gY3JlYXRlQ2hhbmdlRW1pdHRlcigpO1xuICAgIHZhciBzdHJlYW0gPSBjb25maWckJDEuZnJvbUVTT2JzZXJ2YWJsZSgoX2NvbmZpZyRmcm9tRVNPYnNlcnZhID0ge1xuICAgICAgc3Vic2NyaWJlOiBmdW5jdGlvbiBzdWJzY3JpYmUob2JzZXJ2ZXIpIHtcbiAgICAgICAgdmFyIHVuc3Vic2NyaWJlID0gZW1pdHRlci5saXN0ZW4oZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgcmV0dXJuIG9ic2VydmVyLm5leHQodmFsdWUpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB1bnN1YnNjcmliZTogdW5zdWJzY3JpYmVcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9LCBfY29uZmlnJGZyb21FU09ic2VydmFbJCRvYnNlcnZhYmxlXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sIF9jb25maWckZnJvbUVTT2JzZXJ2YSkpO1xuICAgIHJldHVybiB7XG4gICAgICBoYW5kbGVyOiBlbWl0dGVyLmVtaXQsXG4gICAgICBzdHJlYW06IHN0cmVhbVxuICAgIH07XG4gIH07XG59O1xudmFyIGNyZWF0ZUV2ZW50SGFuZGxlciA9IGNyZWF0ZUV2ZW50SGFuZGxlcldpdGhDb25maWcoY29uZmlnKTtcblxuLy8gSGlnaGVyLW9yZGVyIGNvbXBvbmVudCBoZWxwZXJzXG5cbmV4cG9ydCB7IG1hcFByb3BzLCB3aXRoUHJvcHMsIHdpdGhQcm9wc09uQ2hhbmdlLCB3aXRoSGFuZGxlcnMsIGRlZmF1bHRQcm9wcywgcmVuYW1lUHJvcCwgcmVuYW1lUHJvcHMsIGZsYXR0ZW5Qcm9wLCB3aXRoU3RhdGUsIHdpdGhTdGF0ZUhhbmRsZXJzLCB3aXRoUmVkdWNlciwgYnJhbmNoLCByZW5kZXJDb21wb25lbnQsIHJlbmRlck5vdGhpbmcsIHNob3VsZFVwZGF0ZSwgcHVyZSwgb25seVVwZGF0ZUZvcktleXMsIG9ubHlVcGRhdGVGb3JQcm9wVHlwZXMsIHdpdGhDb250ZXh0LCBnZXRDb250ZXh0LCBsaWZlY3ljbGUsIHRvQ2xhc3MsIHRvUmVuZGVyUHJvcHMsIGZyb21SZW5kZXJQcm9wcywgc2V0U3RhdGljLCBzZXRQcm9wVHlwZXMsIHNldERpc3BsYXlOYW1lLCBjb21wb3NlLCBnZXREaXNwbGF5TmFtZSwgd3JhcERpc3BsYXlOYW1lLCBzaGFsbG93RXF1YWwsIGlzQ2xhc3NDb21wb25lbnQsIGNyZWF0ZVNpbmssIGNvbXBvbmVudEZyb21Qcm9wLCBuZXN0LCBob2lzdFN0YXRpY3MsIGNvbXBvbmVudEZyb21TdHJlYW0sIGNvbXBvbmVudEZyb21TdHJlYW1XaXRoQ29uZmlnLCBtYXBQcm9wc1N0cmVhbSwgbWFwUHJvcHNTdHJlYW1XaXRoQ29uZmlnLCBjcmVhdGVFdmVudEhhbmRsZXIsIGNyZWF0ZUV2ZW50SGFuZGxlcldpdGhDb25maWcsIGNvbmZpZ3VyZU9ic2VydmFibGUgYXMgc2V0T2JzZXJ2YWJsZUNvbmZpZyB9O1xuIiwiLyogZ2xvYmFsIHdpbmRvdyAqL1xuaW1wb3J0IHBvbnlmaWxsIGZyb20gJy4vcG9ueWZpbGwuanMnO1xuXG52YXIgcm9vdDtcblxuaWYgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJykge1xuICByb290ID0gc2VsZjtcbn0gZWxzZSBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgcm9vdCA9IHdpbmRvdztcbn0gZWxzZSBpZiAodHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgcm9vdCA9IGdsb2JhbDtcbn0gZWxzZSBpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgcm9vdCA9IG1vZHVsZTtcbn0gZWxzZSB7XG4gIHJvb3QgPSBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xufVxuXG52YXIgcmVzdWx0ID0gcG9ueWZpbGwocm9vdCk7XG5leHBvcnQgZGVmYXVsdCByZXN1bHQ7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzeW1ib2xPYnNlcnZhYmxlUG9ueWZpbGwocm9vdCkge1xuXHR2YXIgcmVzdWx0O1xuXHR2YXIgU3ltYm9sID0gcm9vdC5TeW1ib2w7XG5cblx0aWYgKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicpIHtcblx0XHRpZiAoU3ltYm9sLm9ic2VydmFibGUpIHtcblx0XHRcdHJlc3VsdCA9IFN5bWJvbC5vYnNlcnZhYmxlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXN1bHQgPSBTeW1ib2woJ29ic2VydmFibGUnKTtcblx0XHRcdFN5bWJvbC5vYnNlcnZhYmxlID0gcmVzdWx0O1xuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRyZXN1bHQgPSAnQEBvYnNlcnZhYmxlJztcblx0fVxuXG5cdHJldHVybiByZXN1bHQ7XG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBTZWFyY2hCYXIgZnJvbSBcIi4uL1NlYXJjaEJhclwiO1xyXG5pbXBvcnQgU2luZ2xlU3BlYWtlciBmcm9tIFwiLi9zaW5nbGVTcGVha2VyXCI7XHJcbmltcG9ydCB7IFJFUVVFU1RfU1RBVFVTIH0gZnJvbSBcIi4uLy4uL3JlZHVjZXJzXCI7XHJcbmltcG9ydCB7IGNvbXBvc2UgfSBmcm9tIFwicmVjb21wb3NlXCI7XHJcblxyXG4vL0hPQ3NcclxuaW1wb3J0IHdpdGhSZXF1ZXN0IGZyb20gXCIuLi8uLi9IT0NzL3dpdGhSZXF1ZXN0XCI7XHJcbmltcG9ydCB3aXRoU3BlY2lhbE1lc3NhZ2UgZnJvbSBcIi4uLy4uL0hPQ3Mvd2l0aFNwZWNpYWxNZXNzYWdlXCI7XHJcblxyXG5jb25zdCBTcGVha2VycyA9ICh7IHJlY29yZHM6IHNwZWFrZXJzLCBzdGF0dXMsIGVycm9yLCBwdXQgfSkgPT4ge1xyXG4gIGNvbnN0IFtzZWFyY2hRdWVyeSwgc2V0U2VhcmNoUXVlcnldID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIGNvbnN0IHN1Y2Nlc3MgPSBzdGF0dXMgPT09IFJFUVVFU1RfU1RBVFVTLlNVQ0NFU1M7XHJcbiAgY29uc3QgaXNMb2FkaW5nID0gc3RhdHVzID09PSBSRVFVRVNUX1NUQVRVUy5MT0FESU5HO1xyXG4gIGNvbnN0IGlzRXJyb3IgPSBzdGF0dXMgPT09IFJFUVVFU1RfU1RBVFVTLkVSUk9SO1xyXG5cclxuICBjb25zdCB0b2dnbGVCdXR0b25IYW5kbGVyID0gYXN5bmMgKHNwZWFrZXJSZWNvcmQpID0+IHtcclxuICAgIHB1dCh7XHJcbiAgICAgIC4uLnNwZWFrZXJSZWNvcmQsXHJcbiAgICAgIGlzRmF2b3JpdGU6ICFzcGVha2VyUmVjb3JkLmlzRmF2b3JpdGUsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBtYXBTcGVha2VycyA9IHNwZWFrZXJzXHJcbiAgICAuZmlsdGVyKChyZWNvcmQpID0+IHtcclxuICAgICAgY29uc3QgdGFyZ2V0U3RyaW5nID0gYCR7cmVjb3JkLmxhc3ROYW1lfSAke3JlY29yZC5maXJzdE5hbWV9YC50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICByZXR1cm4gc2VhcmNoUXVlcnkubGVuZ3RoID09PSAwXHJcbiAgICAgICAgPyB0cnVlXHJcbiAgICAgICAgOiB0YXJnZXRTdHJpbmcuaW5jbHVkZXMoc2VhcmNoUXVlcnkudG9Mb3dlckNhc2UoKSk7XHJcbiAgICB9KVxyXG4gICAgLm1hcCgoc2luZ2xlKSA9PiB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPFNpbmdsZVNwZWFrZXJcclxuICAgICAgICAgIGtleT17c2luZ2xlLmlkfVxyXG4gICAgICAgICAgey4uLnNpbmdsZX1cclxuICAgICAgICAgIHRvZ2dsZUJ1dHRvbj17KCkgPT4gdG9nZ2xlQnV0dG9uSGFuZGxlcihzaW5nbGUpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxTZWFyY2hCYXIgc2VhcmNoUXVlcnk9e3NlYXJjaFF1ZXJ5fSBzZXRTZWFyY2hRdWVyeT17c2V0U2VhcmNoUXVlcnl9IC8+XHJcbiAgICAgIHtpc0xvYWRpbmcgJiYgPGRpdj5Mb2FkaW5nLi4uPC9kaXY+fVxyXG4gICAgICB7LyogZXJyb3IgaGFuZGxpbmcgKi99XHJcbiAgICAgIHtpc0Vycm9yICYmIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgTG9hZGluZyBlcnJvci4uLiBJcyB0aGUganNvbi1zZXJ2ZXIgdXAgYW5kIHJ1bm5pbmc/ICh0cnkgXCJucG0gcnVuXHJcbiAgICAgICAgICBqc29uLXNlcnZlclwiIGF0IHlvdXIgdGVybWluYWwpIDxiciAvPlxyXG4gICAgICAgICAgPGI+RVJST1I6IHtlcnJvci5tZXNzYWdlfTwvYj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgICAge3N1Y2Nlc3MgJiYgKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBtZDpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtMyBncmlkLWNvbHMtMSBnYXAtMTJcIj5cclxuICAgICAgICAgIHttYXBTcGVha2Vyc31cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb21wb3NlKFxyXG4gIHdpdGhTcGVjaWFsTWVzc2FnZSgpLFxyXG4gIHdpdGhSZXF1ZXN0KFwiaHR0cDovL2xvY2FsaG9zdDo0MDAwXCIsIFwic3BlYWtlcnNcIikoU3BlYWtlcnMpXHJcbik7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=