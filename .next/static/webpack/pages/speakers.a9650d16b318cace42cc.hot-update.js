webpackHotUpdate_N_E("pages/speakers",{

/***/ "./src/components/Speakers/indexRP.js":
/*!********************************************!*\
  !*** ./src/components/Speakers/indexRP.js ***!
  \********************************************/
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
/* harmony import */ var _RPs_request__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../RPs/request */ "./src/RPs/request.js");
/* harmony import */ var _RPs_specialMessage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../RPs/specialMessage */ "./src/RPs/specialMessage.js");






var _jsxFileName = "J:\\react-search-designed-component\\src\\components\\Speakers\\indexRP.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(J_react_search_designed_component_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




 //RPs




var Speakers = function Speakers(_ref) {
  _s();

  var bgColor = _ref.bgColor;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(""),
      searchQuery = _useState[0],
      setSearchQuery = _useState[1];

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_SearchBar__WEBPACK_IMPORTED_MODULE_5__["default"], {
      searchQuery: searchQuery,
      setSearchQuery: setSearchQuery
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_RPs_specialMessage__WEBPACK_IMPORTED_MODULE_9__["default"], {
        children: function children(_ref2) {
          var specialMessage = _ref2.specialMessage;
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_RPs_request__WEBPACK_IMPORTED_MODULE_8__["default"], {
            baseUrl: "http://localhost:4000",
            routeName: "speakers",
            children: function children(_ref3) {
              var speakers = _ref3.records,
                  status = _ref3.status,
                  error = _ref3.error,
                  put = _ref3.put;

              var onFavoriteToggleHandler = /*#__PURE__*/function () {
                var _ref4 = Object(J_react_search_designed_component_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/J_react_search_designed_component_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(speakerRec) {
                  return J_react_search_designed_component_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          put(_objectSpread(_objectSpread({}, speakerRec), {}, {
                            isFavorite: !speakerRec.isFavorite
                          }));

                        case 1:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee);
                }));

                return function onFavoriteToggleHandler(_x) {
                  return _ref4.apply(this, arguments);
                };
              }();

              var success = status === _reducers__WEBPACK_IMPORTED_MODULE_7__["REQUEST_STATUS"].SUCCESS;
              var isLoading = status === _reducers__WEBPACK_IMPORTED_MODULE_7__["REQUEST_STATUS"].LOADING;
              var hasErrored = status === _reducers__WEBPACK_IMPORTED_MODULE_7__["REQUEST_STATUS"].ERROR;
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
                children: [specialMessage && specialMessage.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "bg-orange-100 border-l-8 border-orange-500 text-orange-700 p-4 text-2xl",
                  role: "alert",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    className: "font-bold",
                    children: "Special Message"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 40,
                    columnNumber: 27
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    children: specialMessage
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 41,
                    columnNumber: 27
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 36,
                  columnNumber: 25
                }, _this), isLoading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  children: "Loading..."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 45,
                  columnNumber: 37
                }, _this), hasErrored && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  children: ["Loading error... Is the json-server running? (try \"npm run json-server\" at terminal prompt)", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 50,
                    columnNumber: 27
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
                    children: ["ERROR: ", error.message]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 51,
                    columnNumber: 27
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 47,
                  columnNumber: 25
                }, _this), success && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-12",
                  children: speakers.filter(function (rec) {
                    var targetString = "".concat(rec.firstName, " ").concat(rec.lastName).toLowerCase();
                    return searchQuery.length === 0 ? true : targetString.includes(searchQuery.toLowerCase());
                  }).map(function (speaker) {
                    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Speaker, _objectSpread(_objectSpread({}, speaker), {}, {
                      onFavoriteToggle: function onFavoriteToggle() {
                        return onFavoriteToggleHandler(speaker);
                      }
                    }), speaker.id, false, {
                      fileName: _jsxFileName,
                      lineNumber: 66,
                      columnNumber: 31
                    }, _this);
                  })
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 55,
                  columnNumber: 25
                }, _this)]
              }, void 0, true);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 15
          }, _this);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, _this)
    }, void 0, false)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, _this);
};

_s(Speakers, "4/Qdl0R3tQNJqUS4eMrvY/uMU/4=");

_c = Speakers;
/* harmony default export */ __webpack_exports__["default"] = (Speakers);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU3BlYWtlcnMvaW5kZXhSUC5qcyJdLCJuYW1lcyI6WyJTcGVha2VycyIsImJnQ29sb3IiLCJ1c2VTdGF0ZSIsInNlYXJjaFF1ZXJ5Iiwic2V0U2VhcmNoUXVlcnkiLCJzcGVjaWFsTWVzc2FnZSIsInNwZWFrZXJzIiwicmVjb3JkcyIsInN0YXR1cyIsImVycm9yIiwicHV0Iiwib25GYXZvcml0ZVRvZ2dsZUhhbmRsZXIiLCJzcGVha2VyUmVjIiwiaXNGYXZvcml0ZSIsInN1Y2Nlc3MiLCJSRVFVRVNUX1NUQVRVUyIsIlNVQ0NFU1MiLCJpc0xvYWRpbmciLCJMT0FESU5HIiwiaGFzRXJyb3JlZCIsIkVSUk9SIiwibGVuZ3RoIiwibWVzc2FnZSIsImZpbHRlciIsInJlYyIsInRhcmdldFN0cmluZyIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsIm1hcCIsInNwZWFrZXIiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7Q0FHQTs7QUFDQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQWlCO0FBQUE7O0FBQUEsTUFBZEMsT0FBYyxRQUFkQSxPQUFjOztBQUFBLGtCQUNNQyxzREFBUSxDQUFDLEVBQUQsQ0FEZDtBQUFBLE1BQ3pCQyxXQUR5QjtBQUFBLE1BQ1pDLGNBRFk7O0FBR2hDLHNCQUNFO0FBQUEsNEJBQ0UscUVBQUMsa0RBQUQ7QUFBVyxpQkFBVyxFQUFFRCxXQUF4QjtBQUFxQyxvQkFBYyxFQUFFQztBQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFHRTtBQUFBLDZCQUNFLHFFQUFDLDJEQUFEO0FBQUEsa0JBQ0cseUJBQXdCO0FBQUEsY0FBckJDLGNBQXFCLFNBQXJCQSxjQUFxQjtBQUN2Qiw4QkFDRSxxRUFBQyxvREFBRDtBQUFTLG1CQUFPLEVBQUMsdUJBQWpCO0FBQXlDLHFCQUFTLEVBQUMsVUFBbkQ7QUFBQSxzQkFDRyx5QkFBK0M7QUFBQSxrQkFBbkNDLFFBQW1DLFNBQTVDQyxPQUE0QztBQUFBLGtCQUF6QkMsTUFBeUIsU0FBekJBLE1BQXlCO0FBQUEsa0JBQWpCQyxLQUFpQixTQUFqQkEsS0FBaUI7QUFBQSxrQkFBVkMsR0FBVSxTQUFWQSxHQUFVOztBQUM5QyxrQkFBTUMsdUJBQXVCO0FBQUEseVNBQUcsaUJBQU9DLFVBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUM5QkYsNkJBQUcsaUNBQ0VFLFVBREY7QUFFREMsc0NBQVUsRUFBRSxDQUFDRCxVQUFVLENBQUNDO0FBRnZCLDZCQUFIOztBQUQ4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBSDs7QUFBQSxnQ0FBdkJGLHVCQUF1QjtBQUFBO0FBQUE7QUFBQSxpQkFBN0I7O0FBTUEsa0JBQU1HLE9BQU8sR0FBR04sTUFBTSxLQUFLTyx3REFBYyxDQUFDQyxPQUExQztBQUNBLGtCQUFNQyxTQUFTLEdBQUdULE1BQU0sS0FBS08sd0RBQWMsQ0FBQ0csT0FBNUM7QUFDQSxrQkFBTUMsVUFBVSxHQUFHWCxNQUFNLEtBQUtPLHdEQUFjLENBQUNLLEtBQTdDO0FBRUEsa0NBQ0U7QUFBQSwyQkFDR2YsY0FBYyxJQUFJQSxjQUFjLENBQUNnQixNQUFmLEdBQXdCLENBQTFDLGlCQUNDO0FBQ0UsMkJBQVMsRUFBQyx5RUFEWjtBQUVFLHNCQUFJLEVBQUMsT0FGUDtBQUFBLDBDQUlFO0FBQUcsNkJBQVMsRUFBQyxXQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUpGLGVBS0U7QUFBQSw4QkFBSWhCO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBRkosRUFXR1ksU0FBUyxpQkFBSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFYaEIsRUFZR0UsVUFBVSxpQkFDVDtBQUFBLDJJQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBSEYsZUFJRTtBQUFBLDBDQUFXVixLQUFLLENBQUNhLE9BQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBYkosRUFvQkdSLE9BQU8saUJBQ047QUFBSywyQkFBUyxFQUFDLHVEQUFmO0FBQUEsNEJBQ0dSLFFBQVEsQ0FDTmlCLE1BREYsQ0FDUyxVQUFDQyxHQUFELEVBQVM7QUFDZix3QkFBTUMsWUFBWSxHQUFHLFVBQUdELEdBQUcsQ0FBQ0UsU0FBUCxjQUFvQkYsR0FBRyxDQUFDRyxRQUF4QixFQUFtQ0MsV0FBbkMsRUFBckI7QUFDQSwyQkFBT3pCLFdBQVcsQ0FBQ2tCLE1BQVosS0FBdUIsQ0FBdkIsR0FDSCxJQURHLEdBRUhJLFlBQVksQ0FBQ0ksUUFBYixDQUNFMUIsV0FBVyxDQUFDeUIsV0FBWixFQURGLENBRko7QUFLRCxtQkFSRixFQVNFRSxHQVRGLENBU00sVUFBQ0MsT0FBRDtBQUFBLHdDQUNILHFFQUFDLE9BQUQsa0NBRU1BLE9BRk47QUFHRSxzQ0FBZ0IsRUFBRTtBQUFBLCtCQUNoQnBCLHVCQUF1QixDQUFDb0IsT0FBRCxDQURQO0FBQUE7QUFIcEIsd0JBQ09BLE9BQU8sQ0FBQ0MsRUFEZjtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQURHO0FBQUEsbUJBVE47QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQXJCSjtBQUFBLDhCQURGO0FBNkNEO0FBekRIO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREY7QUE2REQ7QUEvREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLHFCQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBeUVELENBNUVEOztHQUFNaEMsUTs7S0FBQUEsUTtBQThFU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc3BlYWtlcnMuYTk2NTBkMTZiMzE4Y2FjZTQyY2MuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgU2VhcmNoQmFyIGZyb20gXCIuLi9TZWFyY2hCYXJcIjtcclxuaW1wb3J0IFNpbmdsZVNwZWFrZXIgZnJvbSBcIi4vc2luZ2xlU3BlYWtlclwiO1xyXG5pbXBvcnQgeyBSRVFVRVNUX1NUQVRVUyB9IGZyb20gXCIuLi8uLi9yZWR1Y2Vyc1wiO1xyXG5cclxuLy9SUHNcclxuaW1wb3J0IFJlcXVlc3QgZnJvbSBcIi4uLy4uL1JQcy9yZXF1ZXN0XCI7XHJcbmltcG9ydCBTcGVjaWFsTWVzc2FnZVJlbmRlclByb3BzIGZyb20gXCIuLi8uLi9SUHMvc3BlY2lhbE1lc3NhZ2VcIjtcclxuXHJcbmNvbnN0IFNwZWFrZXJzID0gKHsgYmdDb2xvciB9KSA9PiB7XHJcbiAgY29uc3QgW3NlYXJjaFF1ZXJ5LCBzZXRTZWFyY2hRdWVyeV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxTZWFyY2hCYXIgc2VhcmNoUXVlcnk9e3NlYXJjaFF1ZXJ5fSBzZXRTZWFyY2hRdWVyeT17c2V0U2VhcmNoUXVlcnl9IC8+XHJcblxyXG4gICAgICA8PlxyXG4gICAgICAgIDxTcGVjaWFsTWVzc2FnZVJlbmRlclByb3BzPlxyXG4gICAgICAgICAgeyh7IHNwZWNpYWxNZXNzYWdlIH0pID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8UmVxdWVzdCBiYXNlVXJsPVwiaHR0cDovL2xvY2FsaG9zdDo0MDAwXCIgcm91dGVOYW1lPVwic3BlYWtlcnNcIj5cclxuICAgICAgICAgICAgICAgIHsoeyByZWNvcmRzOiBzcGVha2Vycywgc3RhdHVzLCBlcnJvciwgcHV0IH0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgY29uc3Qgb25GYXZvcml0ZVRvZ2dsZUhhbmRsZXIgPSBhc3luYyAoc3BlYWtlclJlYykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHB1dCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAuLi5zcGVha2VyUmVjLFxyXG4gICAgICAgICAgICAgICAgICAgICAgaXNGYXZvcml0ZTogIXNwZWFrZXJSZWMuaXNGYXZvcml0ZSxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgY29uc3Qgc3VjY2VzcyA9IHN0YXR1cyA9PT0gUkVRVUVTVF9TVEFUVVMuU1VDQ0VTUztcclxuICAgICAgICAgICAgICAgICAgY29uc3QgaXNMb2FkaW5nID0gc3RhdHVzID09PSBSRVFVRVNUX1NUQVRVUy5MT0FESU5HO1xyXG4gICAgICAgICAgICAgICAgICBjb25zdCBoYXNFcnJvcmVkID0gc3RhdHVzID09PSBSRVFVRVNUX1NUQVRVUy5FUlJPUjtcclxuXHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgIHtzcGVjaWFsTWVzc2FnZSAmJiBzcGVjaWFsTWVzc2FnZS5sZW5ndGggPiAwICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLW9yYW5nZS0xMDAgYm9yZGVyLWwtOCBib3JkZXItb3JhbmdlLTUwMCB0ZXh0LW9yYW5nZS03MDAgcC00IHRleHQtMnhsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByb2xlPVwiYWxlcnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+U3BlY2lhbCBNZXNzYWdlPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntzcGVjaWFsTWVzc2FnZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICB7aXNMb2FkaW5nICYmIDxkaXY+TG9hZGluZy4uLjwvZGl2Pn1cclxuICAgICAgICAgICAgICAgICAgICAgIHtoYXNFcnJvcmVkICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBMb2FkaW5nIGVycm9yLi4uIElzIHRoZSBqc29uLXNlcnZlciBydW5uaW5nPyAodHJ5IFwibnBtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcnVuIGpzb24tc2VydmVyXCIgYXQgdGVybWluYWwgcHJvbXB0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxiPkVSUk9SOiB7ZXJyb3IubWVzc2FnZX08L2I+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHtzdWNjZXNzICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIG1kOmdyaWQtY29scy0yIGxnOmdyaWQtY29scy0zIGdyaWQtY29scy0xIGdhcC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtzcGVha2Vyc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZpbHRlcigocmVjKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldFN0cmluZyA9IGAke3JlYy5maXJzdE5hbWV9ICR7cmVjLmxhc3ROYW1lfWAudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNlYXJjaFF1ZXJ5Lmxlbmd0aCA9PT0gMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdGFyZ2V0U3RyaW5nLmluY2x1ZGVzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2hRdWVyeS50b0xvd2VyQ2FzZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoKHNwZWFrZXIpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwZWFrZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3NwZWFrZXIuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLnNwZWFrZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25GYXZvcml0ZVRvZ2dsZT17KCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRmF2b3JpdGVUb2dnbGVIYW5kbGVyKHNwZWFrZXIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPC9SZXF1ZXN0PlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICA8L1NwZWNpYWxNZXNzYWdlUmVuZGVyUHJvcHM+XHJcbiAgICAgIDwvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNwZWFrZXJzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9