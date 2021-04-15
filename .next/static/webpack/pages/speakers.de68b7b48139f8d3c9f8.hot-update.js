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
/* harmony import */ var J_react_search_designed_component_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var J_react_search_designed_component_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var J_react_search_designed_component_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(J_react_search_designed_component_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var J_react_search_designed_component_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
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

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(J_react_search_designed_component_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


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
    return {
      speakers: action.speakers
    };
  };

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(reducer, []),
      speakers = _useState[0],
      setSpeakers = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(REQUEST_STATUS.LOADING),
      status = _useState2[0],
      setStatus = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])({}),
      error = _useState3[0],
      setError = _useState3[1];

  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
    var fetchData = /*#__PURE__*/function () {
      var _ref = Object(J_react_search_designed_component_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])( /*#__PURE__*/J_react_search_designed_component_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee() {
        var response;
        return J_react_search_designed_component_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee$(_context) {
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
      lineNumber: 55,
      columnNumber: 9
    }, _this);
  });

  var toggleFavoriteStatus = function toggleFavoriteStatus(speakerRecord) {
    return _objectSpread(_objectSpread({}, speakerRecord), {}, {
      isFavorite: !speakerRecord.isFavorite
    });
  };

  var toggleButtonHandler = /*#__PURE__*/function () {
    var _ref2 = Object(J_react_search_designed_component_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])( /*#__PURE__*/J_react_search_designed_component_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee2(speakerRecord) {
      var toggledSpeakerRecord, speakerIndex;
      return J_react_search_designed_component_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee2$(_context2) {
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
      lineNumber: 94,
      columnNumber: 7
    }, _this), isLoading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: "Loading..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 21
    }, _this), isError && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: ["Loading error... Is the json-server up and running? (try \"npm run json-server\" at your terminal) ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 42
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
        children: ["ERROR: ", error.message]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 9
    }, _this), success && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-12",
      children: mapSpeakers
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 9
    }, _this)]
  }, void 0, true);
};

_s(Speakers, "RtBeeUQgYmCrO9TI4IKW1qmZA7s=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU3BlYWtlcnMvaW5kZXguanMiXSwibmFtZXMiOlsiU3BlYWtlcnMiLCJSRVFVRVNUX1NUQVRVUyIsIkxPQURJTkciLCJTVUNDRVNTIiwiRVJST1IiLCJ1c2VSZWR1Y2VyIiwic2VhcmNoUXVlcnkiLCJzZXRTZWFyY2hRdWVyeSIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInNwZWFrZXJzIiwidXNlU3RhdGUiLCJzZXRTcGVha2VycyIsInN0YXR1cyIsInNldFN0YXR1cyIsImVycm9yIiwic2V0RXJyb3IiLCJ1c2VFZmZlY3QiLCJmZXRjaERhdGEiLCJheGlvcyIsImdldCIsInJlc3BvbnNlIiwiZGF0YSIsInR5cGUiLCJzdWNjZXNzIiwiaXNMb2FkaW5nIiwiaXNFcnJvciIsIm1hcFNwZWFrZXJzIiwiZmlsdGVyIiwicmVjb3JkIiwidGFyZ2V0U3RyaW5nIiwibGFzdE5hbWUiLCJmaXJzdE5hbWUiLCJ0b0xvd2VyQ2FzZSIsImxlbmd0aCIsImluY2x1ZGVzIiwibWFwIiwic2luZ2xlIiwidG9nZ2xlQnV0dG9uSGFuZGxlciIsImlkIiwidG9nZ2xlRmF2b3JpdGVTdGF0dXMiLCJzcGVha2VyUmVjb3JkIiwiaXNGYXZvcml0ZSIsInRvZ2dsZWRTcGVha2VyUmVjb3JkIiwic3BlYWtlckluZGV4IiwiaW5kZXhPZiIsInB1dCIsInNsaWNlIiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUVBOztBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUFBOztBQUNyQixNQUFNQyxjQUFjLEdBQUc7QUFDckJDLFdBQU8sRUFBRSxTQURZO0FBRXJCQyxXQUFPLEVBQUUsU0FGWTtBQUdyQkMsU0FBSyxFQUFFO0FBSGMsR0FBdkI7O0FBRHFCLG9CQU1pQkMsVUFBVSxDQUFDLEVBQUQsQ0FO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IiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NwZWFrZXJzLmRlNjhiN2I0ODEzOWY4ZDNjOWY4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgU2VhcmNoQmFyIGZyb20gXCIuLi9TZWFyY2hCYXJcIjtcclxuLy8gaW1wb3J0IHNwZWFrZXJzRGF0YSBmcm9tIFwiLi9kYXRhLmpzXCI7XHJcbmltcG9ydCBTaW5nbGVTcGVha2VyIGZyb20gXCIuL3NpbmdsZVNwZWFrZXJcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuY29uc3QgU3BlYWtlcnMgPSAoKSA9PiB7XHJcbiAgY29uc3QgUkVRVUVTVF9TVEFUVVMgPSB7XHJcbiAgICBMT0FESU5HOiBcImxvYWRpbmdcIixcclxuICAgIFNVQ0NFU1M6IFwic3VjY2Vzc1wiLFxyXG4gICAgRVJST1I6IFwiZXJyb3JcIixcclxuICB9O1xyXG4gIGNvbnN0IFtzZWFyY2hRdWVyeSwgc2V0U2VhcmNoUXVlcnldID0gdXNlUmVkdWNlcihcIlwiKTtcclxuXHJcbiAgY29uc3QgcmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzcGVha2VyczogYWN0aW9uLnNwZWFrZXJzLFxyXG4gICAgfTtcclxuICB9O1xyXG4gIGNvbnN0IFtzcGVha2Vycywgc2V0U3BlYWtlcnNdID0gdXNlU3RhdGUocmVkdWNlciwgW10pO1xyXG5cclxuICBjb25zdCBbc3RhdHVzLCBzZXRTdGF0dXNdID0gdXNlU3RhdGUoUkVRVUVTVF9TVEFUVVMuTE9BRElORyk7XHJcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZSh7fSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoXCJodHRwOi8vbG9jYWxob3N0OjQwMDAvc3BlYWtlcnNcIik7XHJcbiAgICAgICAgc2V0U3BlYWtlcnMoe1xyXG4gICAgICAgICAgc3BlYWtlcnM6IHJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgICB0eXBlOiBcIkdFVF9BTExfU1VDQ0VTU1wiLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNldFN0YXR1cyhSRVFVRVNUX1NUQVRVUy5TVUNDRVNTKTtcclxuICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIHNldFN0YXR1cyhSRVFVRVNUX1NUQVRVUy5FUlJPUik7XHJcbiAgICAgICAgc2V0RXJyb3IoZSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICBmZXRjaERhdGEoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IHN1Y2Nlc3MgPSBzdGF0dXMgPT09IFJFUVVFU1RfU1RBVFVTLlNVQ0NFU1M7XHJcbiAgY29uc3QgaXNMb2FkaW5nID0gc3RhdHVzID09PSBSRVFVRVNUX1NUQVRVUy5MT0FESU5HO1xyXG4gIGNvbnN0IGlzRXJyb3IgPSBzdGF0dXMgPT09IFJFUVVFU1RfU1RBVFVTLkVSUk9SO1xyXG5cclxuICBjb25zdCBtYXBTcGVha2VycyA9IHNwZWFrZXJzXHJcbiAgICAuZmlsdGVyKChyZWNvcmQpID0+IHtcclxuICAgICAgY29uc3QgdGFyZ2V0U3RyaW5nID0gYCR7cmVjb3JkLmxhc3ROYW1lfSAke3JlY29yZC5maXJzdE5hbWV9YC50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICByZXR1cm4gc2VhcmNoUXVlcnkubGVuZ3RoID09PSAwXHJcbiAgICAgICAgPyB0cnVlXHJcbiAgICAgICAgOiB0YXJnZXRTdHJpbmcuaW5jbHVkZXMoc2VhcmNoUXVlcnkudG9Mb3dlckNhc2UoKSk7XHJcbiAgICB9KVxyXG4gICAgLm1hcCgoc2luZ2xlKSA9PiB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPFNpbmdsZVNwZWFrZXJcclxuICAgICAgICAgIGtleT17c2luZ2xlLmlkfVxyXG4gICAgICAgICAgey4uLnNpbmdsZX1cclxuICAgICAgICAgIHRvZ2dsZUJ1dHRvbj17KCkgPT4gdG9nZ2xlQnV0dG9uSGFuZGxlcihzaW5nbGUpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuXHJcbiAgY29uc3QgdG9nZ2xlRmF2b3JpdGVTdGF0dXMgPSAoc3BlYWtlclJlY29yZCkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgLi4uc3BlYWtlclJlY29yZCxcclxuICAgICAgaXNGYXZvcml0ZTogIXNwZWFrZXJSZWNvcmQuaXNGYXZvcml0ZSxcclxuICAgIH07XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdG9nZ2xlQnV0dG9uSGFuZGxlciA9IGFzeW5jIChzcGVha2VyUmVjb3JkKSA9PiB7XHJcbiAgICBjb25zdCB0b2dnbGVkU3BlYWtlclJlY29yZCA9IHRvZ2dsZUZhdm9yaXRlU3RhdHVzKHNwZWFrZXJSZWNvcmQpO1xyXG4gICAgY29uc3Qgc3BlYWtlckluZGV4ID0gc3BlYWtlcnNcclxuICAgICAgLm1hcCgoc2luZ2xlKSA9PiBzaW5nbGUuaWQpXHJcbiAgICAgIC5pbmRleE9mKHNwZWFrZXJSZWNvcmQuaWQpO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IGF4aW9zLnB1dChcclxuICAgICAgICBgaHR0cDovL2xvY2FsaG9zdDo0MDAwL3NwZWFrZXJzLyR7c3BlYWtlclJlY29yZC5pZH1gLFxyXG4gICAgICAgIHRvZ2dsZWRTcGVha2VyUmVjb3JkXHJcbiAgICAgICk7XHJcbiAgICAgIHNldFNwZWFrZXJzKFtcclxuICAgICAgICAuLi5zcGVha2Vycy5zbGljZSgwLCBzcGVha2VySW5kZXgpLFxyXG4gICAgICAgIHRvZ2dsZWRTcGVha2VyUmVjb3JkLFxyXG4gICAgICAgIC4uLnNwZWFrZXJzLnNsaWNlKHNwZWFrZXJJbmRleCArIDEpLFxyXG4gICAgICBdKTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgc2V0U3RhdHVzKFJFUVVFU1RfU1RBVFVTLkVSUk9SKTtcclxuICAgICAgc2V0RXJyb3IoZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxTZWFyY2hCYXIgc2VhcmNoUXVlcnk9e3NlYXJjaFF1ZXJ5fSBzZXRTZWFyY2hRdWVyeT17c2V0U2VhcmNoUXVlcnl9IC8+XHJcbiAgICAgIHtpc0xvYWRpbmcgJiYgPGRpdj5Mb2FkaW5nLi4uPC9kaXY+fVxyXG4gICAgICB7LyogZXJyb3IgaGFuZGxpbmcgKi99XHJcbiAgICAgIHtpc0Vycm9yICYmIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgTG9hZGluZyBlcnJvci4uLiBJcyB0aGUganNvbi1zZXJ2ZXIgdXAgYW5kIHJ1bm5pbmc/ICh0cnkgXCJucG0gcnVuXHJcbiAgICAgICAgICBqc29uLXNlcnZlclwiIGF0IHlvdXIgdGVybWluYWwpIDxiciAvPlxyXG4gICAgICAgICAgPGI+RVJST1I6IHtlcnJvci5tZXNzYWdlfTwvYj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgICAge3N1Y2Nlc3MgJiYgKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBtZDpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtMyBncmlkLWNvbHMtMSBnYXAtMTJcIj5cclxuICAgICAgICAgIHttYXBTcGVha2Vyc31cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IFNwZWFrZXJzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9