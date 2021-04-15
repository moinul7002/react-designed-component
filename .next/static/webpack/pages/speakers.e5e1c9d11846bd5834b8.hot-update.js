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
/* harmony import */ var J_react_search_designed_component_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var J_react_search_designed_component_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var J_react_search_designed_component_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(J_react_search_designed_component_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var J_react_search_designed_component_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var J_react_search_designed_component_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var J_react_search_designed_component_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _SearchBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../SearchBar */ "./src/components/SearchBar/index.js");
/* harmony import */ var _singleSpeaker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./singleSpeaker */ "./src/components/Speakers/singleSpeaker.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);








var _jsxFileName = "J:\\react-search-designed-component\\src\\components\\Speakers\\index.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(J_react_search_designed_component_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


 // import speakersData from "./data.js";




var Speakers = function Speakers() {
  _s();

  var REQUEST_STATUS = {
    LOADING: "loading",
    SUCCESS: "success",
    ERROR: "error"
  };

  var _useReducer = useReducer(""),
      _useReducer2 = Object(J_react_search_designed_component_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__["default"])(_useReducer, 2),
      searchQuery = _useReducer2[0],
      setSearchQuery = _useReducer2[1];

  var reducer = function reducer(state, action) {
    switch (action.type) {
      case "GET_ALL_SUCCESS":
        return _objectSpread(_objectSpread({}, state), {}, {
          speakers: action.speakers
        });

      case "UPDATE_STATUS":
        return _objectSpread(_objectSpread({}, state), {}, {
          status: action.status
        });
    }
  };

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(reducer, []),
      speakers = _useState[0].speakers,
      setSpeakers = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(REQUEST_STATUS.LOADING),
      status = _useState2[0],
      setStatus = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])({}),
      error = _useState3[0],
      setError = _useState3[1];

  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
    var fetchData = /*#__PURE__*/function () {
      var _ref = Object(J_react_search_designed_component_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/J_react_search_designed_component_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee() {
        var response;
        return J_react_search_designed_component_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_9___default.a.get("http://localhost:4000/speakers");

              case 3:
                response = _context.sent;
                setSpeakers({
                  speakers: response.data,
                  type: "GET_ALL_SUCCESS"
                });
                setStatus(REQUEST_STATUS.SUCCESS);
                _context.next = 12;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](0);
                setStatus(REQUEST_STATUS.ERROR);
                setError(_context.t0);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 8]]);
      }));

      return function fetchData() {
        return _ref.apply(this, arguments);
      };
    }();

    fetchData();
  }, []);
  var success = status === REQUEST_STATUS.SUCCESS;
  var isLoading = status === REQUEST_STATUS.LOADING;
  var isError = status === REQUEST_STATUS.ERROR;
  var mapSpeakers = speakers.filter(function (record) {
    var targetString = "".concat(record.lastName, " ").concat(record.firstName).toLowerCase();
    return searchQuery.length === 0 ? true : targetString.includes(searchQuery.toLowerCase());
  }).map(function (single) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_singleSpeaker__WEBPACK_IMPORTED_MODULE_8__["default"], _objectSpread(_objectSpread({}, single), {}, {
      toggleButton: function toggleButton() {
        return toggleButtonHandler(single);
      }
    }), single.id, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }, _this);
  });

  var toggleFavoriteStatus = function toggleFavoriteStatus(speakerRecord) {
    return _objectSpread(_objectSpread({}, speakerRecord), {}, {
      isFavorite: !speakerRecord.isFavorite
    });
  };

  var toggleButtonHandler = /*#__PURE__*/function () {
    var _ref2 = Object(J_react_search_designed_component_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/J_react_search_designed_component_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee2(speakerRecord) {
      var toggledSpeakerRecord, speakerIndex;
      return J_react_search_designed_component_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              toggledSpeakerRecord = toggleFavoriteStatus(speakerRecord);
              speakerIndex = speakers.map(function (single) {
                return single.id;
              }).indexOf(speakerRecord.id);
              _context2.prev = 2;
              _context2.next = 5;
              return axios__WEBPACK_IMPORTED_MODULE_9___default.a.put("http://localhost:4000/speakers/".concat(speakerRecord.id), toggledSpeakerRecord);

            case 5:
              setSpeakers([].concat(Object(J_react_search_designed_component_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(speakers.slice(0, speakerIndex)), [toggledSpeakerRecord], Object(J_react_search_designed_component_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(speakers.slice(speakerIndex + 1))));
              _context2.next = 12;
              break;

            case 8:
              _context2.prev = 8;
              _context2.t0 = _context2["catch"](2);
              setStatus(REQUEST_STATUS.ERROR);
              setError(_context2.t0);

            case 12:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[2, 8]]);
    }));

    return function toggleButtonHandler(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_SearchBar__WEBPACK_IMPORTED_MODULE_7__["default"], {
      searchQuery: searchQuery,
      setSearchQuery: setSearchQuery
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 7
    }, _this), isLoading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: "Loading..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 21
    }, _this), isError && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: ["Loading error... Is the json-server up and running? (try \"npm run json-server\" at your terminal) ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 42
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
        children: ["ERROR: ", error.message]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 9
    }, _this), success && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-12",
      children: mapSpeakers
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 9
    }, _this)]
  }, void 0, true);
};

_s(Speakers, "Y6uTMdzQ/ZfAIE1ZxnRdz1Mt/jk=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU3BlYWtlcnMvaW5kZXguanMiXSwibmFtZXMiOlsiU3BlYWtlcnMiLCJSRVFVRVNUX1NUQVRVUyIsIkxPQURJTkciLCJTVUNDRVNTIiwiRVJST1IiLCJ1c2VSZWR1Y2VyIiwic2VhcmNoUXVlcnkiLCJzZXRTZWFyY2hRdWVyeSIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJzcGVha2VycyIsInN0YXR1cyIsInVzZVN0YXRlIiwic2V0U3BlYWtlcnMiLCJzZXRTdGF0dXMiLCJlcnJvciIsInNldEVycm9yIiwidXNlRWZmZWN0IiwiZmV0Y2hEYXRhIiwiYXhpb3MiLCJnZXQiLCJyZXNwb25zZSIsImRhdGEiLCJzdWNjZXNzIiwiaXNMb2FkaW5nIiwiaXNFcnJvciIsIm1hcFNwZWFrZXJzIiwiZmlsdGVyIiwicmVjb3JkIiwidGFyZ2V0U3RyaW5nIiwibGFzdE5hbWUiLCJmaXJzdE5hbWUiLCJ0b0xvd2VyQ2FzZSIsImxlbmd0aCIsImluY2x1ZGVzIiwibWFwIiwic2luZ2xlIiwidG9nZ2xlQnV0dG9uSGFuZGxlciIsImlkIiwidG9nZ2xlRmF2b3JpdGVTdGF0dXMiLCJzcGVha2VyUmVjb3JkIiwiaXNGYXZvcml0ZSIsInRvZ2dsZWRTcGVha2VyUmVjb3JkIiwic3BlYWtlckluZGV4IiwiaW5kZXhPZiIsInB1dCIsInNsaWNlIiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUVBOztBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUFBOztBQUNyQixNQUFNQyxjQUFjLEdBQUc7QUFDckJDLFdBQU8sRUFBRSxTQURZO0FBRXJCQyxXQUFPLEVBQUUsU0FGWTtBQUdyQkMsU0FBSyxFQUFFO0FBSGMsR0FBdkI7O0FBRHFCLG9CQU1pQkMsVUFBVSxDQUFDLEVBQUQsQ0FO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O0FBQUEsYUFMSixFQVdHeEIsT0FBTyxpQkFDTjtBQUFLLGVBQVMsRUFBQyx1REFBZjtBQUFBLGdCQUNHRztBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFaSjtBQUFBLGtCQURGO0FBbUJELENBakhEOztHQUFNNUIsUTs7S0FBQUEsUTtBQWtIU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc3BlYWtlcnMuZTVlMWM5ZDExODQ2YmQ1ODM0YjguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBTZWFyY2hCYXIgZnJvbSBcIi4uL1NlYXJjaEJhclwiO1xyXG4vLyBpbXBvcnQgc3BlYWtlcnNEYXRhIGZyb20gXCIuL2RhdGEuanNcIjtcclxuaW1wb3J0IFNpbmdsZVNwZWFrZXIgZnJvbSBcIi4vc2luZ2xlU3BlYWtlclwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5jb25zdCBTcGVha2VycyA9ICgpID0+IHtcclxuICBjb25zdCBSRVFVRVNUX1NUQVRVUyA9IHtcclxuICAgIExPQURJTkc6IFwibG9hZGluZ1wiLFxyXG4gICAgU1VDQ0VTUzogXCJzdWNjZXNzXCIsXHJcbiAgICBFUlJPUjogXCJlcnJvclwiLFxyXG4gIH07XHJcbiAgY29uc3QgW3NlYXJjaFF1ZXJ5LCBzZXRTZWFyY2hRdWVyeV0gPSB1c2VSZWR1Y2VyKFwiXCIpO1xyXG5cclxuICBjb25zdCByZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgY2FzZSBcIkdFVF9BTExfU1VDQ0VTU1wiOlxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgIHNwZWFrZXJzOiBhY3Rpb24uc3BlYWtlcnMsXHJcbiAgICAgICAgfTtcclxuICAgICAgY2FzZSBcIlVQREFURV9TVEFUVVNcIjpcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICBzdGF0dXM6IGFjdGlvbi5zdGF0dXMsXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICB9O1xyXG4gIGNvbnN0IFt7IHNwZWFrZXJzIH0sIHNldFNwZWFrZXJzXSA9IHVzZVN0YXRlKHJlZHVjZXIsIFtdKTtcclxuXHJcbiAgY29uc3QgW3N0YXR1cywgc2V0U3RhdHVzXSA9IHVzZVN0YXRlKFJFUVVFU1RfU1RBVFVTLkxPQURJTkcpO1xyXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoe30pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KFwiaHR0cDovL2xvY2FsaG9zdDo0MDAwL3NwZWFrZXJzXCIpO1xyXG4gICAgICAgIHNldFNwZWFrZXJzKHtcclxuICAgICAgICAgIHNwZWFrZXJzOiByZXNwb25zZS5kYXRhLFxyXG4gICAgICAgICAgdHlwZTogXCJHRVRfQUxMX1NVQ0NFU1NcIixcclxuICAgICAgICB9KTtcclxuICAgICAgICBzZXRTdGF0dXMoUkVRVUVTVF9TVEFUVVMuU1VDQ0VTUyk7XHJcbiAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICBzZXRTdGF0dXMoUkVRVUVTVF9TVEFUVVMuRVJST1IpO1xyXG4gICAgICAgIHNldEVycm9yKGUpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgZmV0Y2hEYXRhKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBzdWNjZXNzID0gc3RhdHVzID09PSBSRVFVRVNUX1NUQVRVUy5TVUNDRVNTO1xyXG4gIGNvbnN0IGlzTG9hZGluZyA9IHN0YXR1cyA9PT0gUkVRVUVTVF9TVEFUVVMuTE9BRElORztcclxuICBjb25zdCBpc0Vycm9yID0gc3RhdHVzID09PSBSRVFVRVNUX1NUQVRVUy5FUlJPUjtcclxuXHJcbiAgY29uc3QgbWFwU3BlYWtlcnMgPSBzcGVha2Vyc1xyXG4gICAgLmZpbHRlcigocmVjb3JkKSA9PiB7XHJcbiAgICAgIGNvbnN0IHRhcmdldFN0cmluZyA9IGAke3JlY29yZC5sYXN0TmFtZX0gJHtyZWNvcmQuZmlyc3ROYW1lfWAudG9Mb3dlckNhc2UoKTtcclxuICAgICAgcmV0dXJuIHNlYXJjaFF1ZXJ5Lmxlbmd0aCA9PT0gMFxyXG4gICAgICAgID8gdHJ1ZVxyXG4gICAgICAgIDogdGFyZ2V0U3RyaW5nLmluY2x1ZGVzKHNlYXJjaFF1ZXJ5LnRvTG93ZXJDYXNlKCkpO1xyXG4gICAgfSlcclxuICAgIC5tYXAoKHNpbmdsZSkgPT4ge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxTaW5nbGVTcGVha2VyXHJcbiAgICAgICAgICBrZXk9e3NpbmdsZS5pZH1cclxuICAgICAgICAgIHsuLi5zaW5nbGV9XHJcbiAgICAgICAgICB0b2dnbGVCdXR0b249eygpID0+IHRvZ2dsZUJ1dHRvbkhhbmRsZXIoc2luZ2xlKX1cclxuICAgICAgICAvPlxyXG4gICAgICApO1xyXG4gICAgfSk7XHJcblxyXG4gIGNvbnN0IHRvZ2dsZUZhdm9yaXRlU3RhdHVzID0gKHNwZWFrZXJSZWNvcmQpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIC4uLnNwZWFrZXJSZWNvcmQsXHJcbiAgICAgIGlzRmF2b3JpdGU6ICFzcGVha2VyUmVjb3JkLmlzRmF2b3JpdGUsXHJcbiAgICB9O1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHRvZ2dsZUJ1dHRvbkhhbmRsZXIgPSBhc3luYyAoc3BlYWtlclJlY29yZCkgPT4ge1xyXG4gICAgY29uc3QgdG9nZ2xlZFNwZWFrZXJSZWNvcmQgPSB0b2dnbGVGYXZvcml0ZVN0YXR1cyhzcGVha2VyUmVjb3JkKTtcclxuICAgIGNvbnN0IHNwZWFrZXJJbmRleCA9IHNwZWFrZXJzXHJcbiAgICAgIC5tYXAoKHNpbmdsZSkgPT4gc2luZ2xlLmlkKVxyXG4gICAgICAuaW5kZXhPZihzcGVha2VyUmVjb3JkLmlkKTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCBheGlvcy5wdXQoXHJcbiAgICAgICAgYGh0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9zcGVha2Vycy8ke3NwZWFrZXJSZWNvcmQuaWR9YCxcclxuICAgICAgICB0b2dnbGVkU3BlYWtlclJlY29yZFxyXG4gICAgICApO1xyXG4gICAgICBzZXRTcGVha2VycyhbXHJcbiAgICAgICAgLi4uc3BlYWtlcnMuc2xpY2UoMCwgc3BlYWtlckluZGV4KSxcclxuICAgICAgICB0b2dnbGVkU3BlYWtlclJlY29yZCxcclxuICAgICAgICAuLi5zcGVha2Vycy5zbGljZShzcGVha2VySW5kZXggKyAxKSxcclxuICAgICAgXSk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIHNldFN0YXR1cyhSRVFVRVNUX1NUQVRVUy5FUlJPUik7XHJcbiAgICAgIHNldEVycm9yKGUpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8U2VhcmNoQmFyIHNlYXJjaFF1ZXJ5PXtzZWFyY2hRdWVyeX0gc2V0U2VhcmNoUXVlcnk9e3NldFNlYXJjaFF1ZXJ5fSAvPlxyXG4gICAgICB7aXNMb2FkaW5nICYmIDxkaXY+TG9hZGluZy4uLjwvZGl2Pn1cclxuICAgICAgey8qIGVycm9yIGhhbmRsaW5nICovfVxyXG4gICAgICB7aXNFcnJvciAmJiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIExvYWRpbmcgZXJyb3IuLi4gSXMgdGhlIGpzb24tc2VydmVyIHVwIGFuZCBydW5uaW5nPyAodHJ5IFwibnBtIHJ1blxyXG4gICAgICAgICAganNvbi1zZXJ2ZXJcIiBhdCB5b3VyIHRlcm1pbmFsKSA8YnIgLz5cclxuICAgICAgICAgIDxiPkVSUk9SOiB7ZXJyb3IubWVzc2FnZX08L2I+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICAgIHtzdWNjZXNzICYmIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgbWQ6Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTMgZ3JpZC1jb2xzLTEgZ2FwLTEyXCI+XHJcbiAgICAgICAgICB7bWFwU3BlYWtlcnN9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBTcGVha2VycztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==