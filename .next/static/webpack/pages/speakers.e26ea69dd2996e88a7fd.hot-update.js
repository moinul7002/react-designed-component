webpackHotUpdate_N_E("pages/speakers",{

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
/* harmony import */ var _contexts_DataContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../contexts/DataContext */ "./src/contexts/DataContext.js");





var _jsxFileName = "J:\\react-search-designed-component\\src\\components\\Speakers\\index.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(J_react_search_designed_component_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




 //contexts



var SpeakersComponent = function SpeakersComponent(_ref) {
  _s();

  var bgColor = _ref.bgColor;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(""),
      searchQuery = _useState[0],
      setSearchQuery = _useState[1];

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_4__["useContext"])(_contexts_DataContext__WEBPACK_IMPORTED_MODULE_8__["DataContext"]),
      speakers = _useContext.speakers,
      status = _useContext.status;

  var success = status === _reducers__WEBPACK_IMPORTED_MODULE_7__["REQUEST_STATUS"].SUCCESS;
  var isLoading = status === _reducers__WEBPACK_IMPORTED_MODULE_7__["REQUEST_STATUS"].LOADING;
  var isError = status === _reducers__WEBPACK_IMPORTED_MODULE_7__["REQUEST_STATUS"].ERROR;
  var specialMessage = "";

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
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: bgColor,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_SearchBar__WEBPACK_IMPORTED_MODULE_5__["default"], {
      searchQuery: searchQuery,
      setSearchQuery: setSearchQuery
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }, _this), specialMessage && specialMessage.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "bg-orange-100 border-l-8 border-orange-500 text-orange-700 p-4 text-2xl",
      role: "alert",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "font-bold",
        children: "Special Message"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: specialMessage
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }, _this), isLoading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: "Loading..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 21
    }, _this), isError && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: ["Loading error... Is the json-server up and running? (try \"npm run json-server\" at your terminal) ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 42
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
        children: ["ERROR: ", error.message]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }, _this), success && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-12",
      children: mapSpeakers
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 5
  }, _this);
};

_s(SpeakersComponent, "212/myiUY/fZ5gg2drQaN8RVvG0=");

_c = SpeakersComponent;

var Speakers = function Speakers(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_contexts_DataContext__WEBPACK_IMPORTED_MODULE_8__["DataProvider"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SpeakersComponent, _objectSpread({}, props), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 78,
    columnNumber: 5
  }, _this);
};

_c2 = Speakers;
/* harmony default export */ __webpack_exports__["default"] = (Speakers);

var _c, _c2;

$RefreshReg$(_c, "SpeakersComponent");
$RefreshReg$(_c2, "Speakers");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU3BlYWtlcnMvaW5kZXguanMiXSwibmFtZXMiOlsiU3BlYWtlcnNDb21wb25lbnQiLCJiZ0NvbG9yIiwidXNlU3RhdGUiLCJzZWFyY2hRdWVyeSIsInNldFNlYXJjaFF1ZXJ5IiwidXNlQ29udGV4dCIsIkRhdGFDb250ZXh0Iiwic3BlYWtlcnMiLCJzdGF0dXMiLCJzdWNjZXNzIiwiUkVRVUVTVF9TVEFUVVMiLCJTVUNDRVNTIiwiaXNMb2FkaW5nIiwiTE9BRElORyIsImlzRXJyb3IiLCJFUlJPUiIsInNwZWNpYWxNZXNzYWdlIiwidG9nZ2xlQnV0dG9uSGFuZGxlciIsInNwZWFrZXJSZWNvcmQiLCJwdXQiLCJpc0Zhdm9yaXRlIiwibWFwU3BlYWtlcnMiLCJmaWx0ZXIiLCJyZWNvcmQiLCJ0YXJnZXRTdHJpbmciLCJsYXN0TmFtZSIsImZpcnN0TmFtZSIsInRvTG93ZXJDYXNlIiwibGVuZ3RoIiwiaW5jbHVkZXMiLCJtYXAiLCJzaW5nbGUiLCJpZCIsImVycm9yIiwibWVzc2FnZSIsIlNwZWFrZXJzIiwicHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtDQUdBOztBQUNBOztBQUVBLElBQU1BLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsT0FBaUI7QUFBQTs7QUFBQSxNQUFkQyxPQUFjLFFBQWRBLE9BQWM7O0FBQUEsa0JBQ0hDLHNEQUFRLENBQUMsRUFBRCxDQURMO0FBQUEsTUFDbENDLFdBRGtDO0FBQUEsTUFDckJDLGNBRHFCOztBQUFBLG9CQUVaQyx3REFBVSxDQUFDQyxpRUFBRCxDQUZFO0FBQUEsTUFFakNDLFFBRmlDLGVBRWpDQSxRQUZpQztBQUFBLE1BRXZCQyxNQUZ1QixlQUV2QkEsTUFGdUI7O0FBSXpDLE1BQU1DLE9BQU8sR0FBR0QsTUFBTSxLQUFLRSx3REFBYyxDQUFDQyxPQUExQztBQUNBLE1BQU1DLFNBQVMsR0FBR0osTUFBTSxLQUFLRSx3REFBYyxDQUFDRyxPQUE1QztBQUNBLE1BQU1DLE9BQU8sR0FBR04sTUFBTSxLQUFLRSx3REFBYyxDQUFDSyxLQUExQztBQUNBLE1BQU1DLGNBQWMsR0FBRyxFQUF2Qjs7QUFFQSxNQUFNQyxtQkFBbUI7QUFBQSw2UkFBRyxpQkFBT0MsYUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQzFCQyxpQkFBRyxpQ0FDRUQsYUFERjtBQUVERSwwQkFBVSxFQUFFLENBQUNGLGFBQWEsQ0FBQ0U7QUFGMUIsaUJBQUg7O0FBRDBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQW5CSCxtQkFBbUI7QUFBQTtBQUFBO0FBQUEsS0FBekI7O0FBT0EsTUFBTUksV0FBVyxHQUFHZCxRQUFRLENBQ3pCZSxNQURpQixDQUNWLFVBQUNDLE1BQUQsRUFBWTtBQUNsQixRQUFNQyxZQUFZLEdBQUcsVUFBR0QsTUFBTSxDQUFDRSxRQUFWLGNBQXNCRixNQUFNLENBQUNHLFNBQTdCLEVBQXlDQyxXQUF6QyxFQUFyQjtBQUNBLFdBQU94QixXQUFXLENBQUN5QixNQUFaLEtBQXVCLENBQXZCLEdBQ0gsSUFERyxHQUVISixZQUFZLENBQUNLLFFBQWIsQ0FBc0IxQixXQUFXLENBQUN3QixXQUFaLEVBQXRCLENBRko7QUFHRCxHQU5pQixFQU9qQkcsR0FQaUIsQ0FPYixVQUFDQyxNQUFELEVBQVk7QUFDZix3QkFDRSxxRUFBQyxzREFBRCxrQ0FFTUEsTUFGTjtBQUdFLGtCQUFZLEVBQUU7QUFBQSxlQUFNZCxtQkFBbUIsQ0FBQ2MsTUFBRCxDQUF6QjtBQUFBO0FBSGhCLFFBQ09BLE1BQU0sQ0FBQ0MsRUFEZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREY7QUFPRCxHQWZpQixDQUFwQjtBQWlCQSxzQkFDRTtBQUFLLGFBQVMsRUFBRS9CLE9BQWhCO0FBQUEsNEJBQ0UscUVBQUMsa0RBQUQ7QUFBVyxpQkFBVyxFQUFFRSxXQUF4QjtBQUFxQyxvQkFBYyxFQUFFQztBQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsRUFHR1ksY0FBYyxJQUFJQSxjQUFjLENBQUNZLE1BQWYsR0FBd0IsQ0FBMUMsaUJBQ0M7QUFDRSxlQUFTLEVBQUMseUVBRFo7QUFFRSxVQUFJLEVBQUMsT0FGUDtBQUFBLDhCQUlFO0FBQUcsaUJBQVMsRUFBQyxXQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkYsZUFLRTtBQUFBLGtCQUFJWjtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKSixFQWFHSixTQUFTLGlCQUFJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBYmhCLEVBZ0JHRSxPQUFPLGlCQUNOO0FBQUEscUlBRWlDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGakMsZUFHRTtBQUFBLDhCQUFXbUIsS0FBSyxDQUFDQyxPQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFqQkosRUF3Qkd6QixPQUFPLGlCQUNOO0FBQUssZUFBUyxFQUFDLHVEQUFmO0FBQUEsZ0JBQ0dZO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXpCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWdDRCxDQWpFRDs7R0FBTXJCLGlCOztLQUFBQSxpQjs7QUFtRU4sSUFBTW1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLEtBQUQsRUFBVztBQUMxQixzQkFDRSxxRUFBQyxrRUFBRDtBQUFBLDJCQUNFLHFFQUFDLGlCQUFELG9CQUF1QkEsS0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQUtELENBTkQ7O01BQU1ELFE7QUFRU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc3BlYWtlcnMuZTI2ZWE2OWRkMjk5NmU4OGE3ZmQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgU2VhcmNoQmFyIGZyb20gXCIuLi9TZWFyY2hCYXJcIjtcclxuaW1wb3J0IFNpbmdsZVNwZWFrZXIgZnJvbSBcIi4vc2luZ2xlU3BlYWtlclwiO1xyXG5pbXBvcnQgeyBSRVFVRVNUX1NUQVRVUyB9IGZyb20gXCIuLi8uLi9yZWR1Y2Vyc1wiO1xyXG5cclxuLy9jb250ZXh0c1xyXG5pbXBvcnQgeyBEYXRhUHJvdmlkZXIsIERhdGFDb250ZXh0IH0gZnJvbSBcIi4uLy4uL2NvbnRleHRzL0RhdGFDb250ZXh0XCI7XHJcblxyXG5jb25zdCBTcGVha2Vyc0NvbXBvbmVudCA9ICh7IGJnQ29sb3IgfSkgPT4ge1xyXG4gIGNvbnN0IFtzZWFyY2hRdWVyeSwgc2V0U2VhcmNoUXVlcnldID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgeyBzcGVha2Vycywgc3RhdHVzIH0gPSB1c2VDb250ZXh0KERhdGFDb250ZXh0KTtcclxuXHJcbiAgY29uc3Qgc3VjY2VzcyA9IHN0YXR1cyA9PT0gUkVRVUVTVF9TVEFUVVMuU1VDQ0VTUztcclxuICBjb25zdCBpc0xvYWRpbmcgPSBzdGF0dXMgPT09IFJFUVVFU1RfU1RBVFVTLkxPQURJTkc7XHJcbiAgY29uc3QgaXNFcnJvciA9IHN0YXR1cyA9PT0gUkVRVUVTVF9TVEFUVVMuRVJST1I7XHJcbiAgY29uc3Qgc3BlY2lhbE1lc3NhZ2UgPSBcIlwiO1xyXG5cclxuICBjb25zdCB0b2dnbGVCdXR0b25IYW5kbGVyID0gYXN5bmMgKHNwZWFrZXJSZWNvcmQpID0+IHtcclxuICAgIHB1dCh7XHJcbiAgICAgIC4uLnNwZWFrZXJSZWNvcmQsXHJcbiAgICAgIGlzRmF2b3JpdGU6ICFzcGVha2VyUmVjb3JkLmlzRmF2b3JpdGUsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBtYXBTcGVha2VycyA9IHNwZWFrZXJzXHJcbiAgICAuZmlsdGVyKChyZWNvcmQpID0+IHtcclxuICAgICAgY29uc3QgdGFyZ2V0U3RyaW5nID0gYCR7cmVjb3JkLmxhc3ROYW1lfSAke3JlY29yZC5maXJzdE5hbWV9YC50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICByZXR1cm4gc2VhcmNoUXVlcnkubGVuZ3RoID09PSAwXHJcbiAgICAgICAgPyB0cnVlXHJcbiAgICAgICAgOiB0YXJnZXRTdHJpbmcuaW5jbHVkZXMoc2VhcmNoUXVlcnkudG9Mb3dlckNhc2UoKSk7XHJcbiAgICB9KVxyXG4gICAgLm1hcCgoc2luZ2xlKSA9PiB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPFNpbmdsZVNwZWFrZXJcclxuICAgICAgICAgIGtleT17c2luZ2xlLmlkfVxyXG4gICAgICAgICAgey4uLnNpbmdsZX1cclxuICAgICAgICAgIHRvZ2dsZUJ1dHRvbj17KCkgPT4gdG9nZ2xlQnV0dG9uSGFuZGxlcihzaW5nbGUpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtiZ0NvbG9yfT5cclxuICAgICAgPFNlYXJjaEJhciBzZWFyY2hRdWVyeT17c2VhcmNoUXVlcnl9IHNldFNlYXJjaFF1ZXJ5PXtzZXRTZWFyY2hRdWVyeX0gLz5cclxuXHJcbiAgICAgIHtzcGVjaWFsTWVzc2FnZSAmJiBzcGVjaWFsTWVzc2FnZS5sZW5ndGggPiAwICYmIChcclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJiZy1vcmFuZ2UtMTAwIGJvcmRlci1sLTggYm9yZGVyLW9yYW5nZS01MDAgdGV4dC1vcmFuZ2UtNzAwIHAtNCB0ZXh0LTJ4bFwiXHJcbiAgICAgICAgICByb2xlPVwiYWxlcnRcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPlNwZWNpYWwgTWVzc2FnZTwvcD5cclxuICAgICAgICAgIDxwPntzcGVjaWFsTWVzc2FnZX08L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcblxyXG4gICAgICB7aXNMb2FkaW5nICYmIDxkaXY+TG9hZGluZy4uLjwvZGl2Pn1cclxuXHJcbiAgICAgIHsvKiBlcnJvciBoYW5kbGluZyAqL31cclxuICAgICAge2lzRXJyb3IgJiYgKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICBMb2FkaW5nIGVycm9yLi4uIElzIHRoZSBqc29uLXNlcnZlciB1cCBhbmQgcnVubmluZz8gKHRyeSBcIm5wbSBydW5cclxuICAgICAgICAgIGpzb24tc2VydmVyXCIgYXQgeW91ciB0ZXJtaW5hbCkgPGJyIC8+XHJcbiAgICAgICAgICA8Yj5FUlJPUjoge2Vycm9yLm1lc3NhZ2V9PC9iPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG5cclxuICAgICAge3N1Y2Nlc3MgJiYgKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBtZDpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtMyBncmlkLWNvbHMtMSBnYXAtMTJcIj5cclxuICAgICAgICAgIHttYXBTcGVha2Vyc31cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBTcGVha2VycyA9IChwcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8RGF0YVByb3ZpZGVyPlxyXG4gICAgICA8U3BlYWtlcnNDb21wb25lbnQgey4uLnByb3BzfT48L1NwZWFrZXJzQ29tcG9uZW50PlxyXG4gICAgPC9EYXRhUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNwZWFrZXJzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9