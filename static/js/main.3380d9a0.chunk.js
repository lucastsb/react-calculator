(this.webpackJsonpcalculadora=this.webpackJsonpcalculadora||[]).push([[0],[,function(_,e,t){"use strict";var a=t(0);t(2),t(21);e.a=function(_){var e="button ";return e+=_.operation?"operation":"",e+=_.double?"double":"",e+=_.triple?"triple":"",Object(a.jsx)("button",{className:e,onClick:function(e){return _.click&&_.click(_.label)},children:_.label})}},,,,,,,function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return Calculator}));var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__),C_Users_Lucas_Desktop_calculadora_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5),C_Users_Lucas_Desktop_calculadora_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(6),C_Users_Lucas_Desktop_calculadora_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(9),C_Users_Lucas_Desktop_calculadora_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(10),C_Users_Lucas_Desktop_calculadora_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(3),C_Users_Lucas_Desktop_calculadora_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(13),C_Users_Lucas_Desktop_calculadora_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(12),react__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(2),react__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__),_Calculator_css__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(20),_Calculator_css__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(_Calculator_css__WEBPACK_IMPORTED_MODULE_9__),_components_Button__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(1),_components_Display__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(11),initialState={displayValue:"0",clearDisplay:!1,operation:null,values:[0,0],current:0},Calculator=function(_Component){Object(C_Users_Lucas_Desktop_calculadora_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__.a)(Calculator,_Component);var _super=Object(C_Users_Lucas_Desktop_calculadora_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__.a)(Calculator);function Calculator(_){var e;return Object(C_Users_Lucas_Desktop_calculadora_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__.a)(this,Calculator),(e=_super.call(this,_)).state=Object(C_Users_Lucas_Desktop_calculadora_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__.a)({},initialState),e.clearMemory=e.clearMemory.bind(Object(C_Users_Lucas_Desktop_calculadora_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__.a)(e)),e.addDigit=e.addDigit.bind(Object(C_Users_Lucas_Desktop_calculadora_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__.a)(e)),e.setOperation=e.setOperation.bind(Object(C_Users_Lucas_Desktop_calculadora_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__.a)(e)),e}return Object(C_Users_Lucas_Desktop_calculadora_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__.a)(Calculator,[{key:"clearMemory",value:function(){this.setState(Object(C_Users_Lucas_Desktop_calculadora_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__.a)({},initialState))}},{key:"setOperation",value:function setOperation(operation){if(0===this.state.current)this.setState({operation:operation,current:1,clearDisplay:!0});else{var equals="="===operation,currentOp=this.state.operation,values=Object(C_Users_Lucas_Desktop_calculadora_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.a)(this.state.values);values[0]=eval("".concat(values[0]," ").concat(currentOp," ").concat(values[1])),values[1]=0,this.setState({displayValue:values[0],operation:equals?null:operation,current:equals?0:1,clearDisplay:!equals,values:values})}}},{key:"addDigit",value:function(_){if("."!==_||!this.state.displayValue.includes(".")){var e=("0"===this.state.displayValue||this.state.clearDisplay?"":this.state.displayValue)+_;if(this.setState({displayValue:e,clearDisplay:!1}),"."!==_){var t=this.state.current,a=parseFloat(e),s=Object(C_Users_Lucas_Desktop_calculadora_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.a)(this.state.values);s[t]=a,this.setState({values:s})}}}},{key:"render",value:function(){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"calculator",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Display__WEBPACK_IMPORTED_MODULE_11__.a,{value:this.state.displayValue}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Button__WEBPACK_IMPORTED_MODULE_10__.a,{label:"AC",click:this.clearMemory,triple:!0}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Button__WEBPACK_IMPORTED_MODULE_10__.a,{label:"/",click:this.setOperation,operation:!0}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Button__WEBPACK_IMPORTED_MODULE_10__.a,{label:"7",click:this.addDigit}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Button__WEBPACK_IMPORTED_MODULE_10__.a,{label:"8",click:this.addDigit}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Button__WEBPACK_IMPORTED_MODULE_10__.a,{label:"9",click:this.addDigit}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Button__WEBPACK_IMPORTED_MODULE_10__.a,{label:"*",click:this.setOperation,operation:!0}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Button__WEBPACK_IMPORTED_MODULE_10__.a,{label:"4",click:this.addDigit}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Button__WEBPACK_IMPORTED_MODULE_10__.a,{label:"5",click:this.addDigit}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Button__WEBPACK_IMPORTED_MODULE_10__.a,{label:"6",click:this.addDigit}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Button__WEBPACK_IMPORTED_MODULE_10__.a,{label:"-",click:this.setOperation,operation:!0}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Button__WEBPACK_IMPORTED_MODULE_10__.a,{label:"1",click:this.addDigit}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Button__WEBPACK_IMPORTED_MODULE_10__.a,{label:"2",click:this.addDigit}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Button__WEBPACK_IMPORTED_MODULE_10__.a,{label:"3",click:this.addDigit}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Button__WEBPACK_IMPORTED_MODULE_10__.a,{label:"+",click:this.setOperation,operation:!0}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Button__WEBPACK_IMPORTED_MODULE_10__.a,{label:"0",click:this.addDigit,double:!0}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Button__WEBPACK_IMPORTED_MODULE_10__.a,{label:".",click:this.addDigit}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Button__WEBPACK_IMPORTED_MODULE_10__.a,{label:"=",click:this.setOperation,operation:!0})]})}}]),Calculator}(react__WEBPACK_IMPORTED_MODULE_8__.Component)},,,function(_,e,t){"use strict";var a=t(0);t(2),t(22);e.a=function(_){return Object(a.jsx)("div",{className:"display",children:_.value})}},,,,,,,,function(_,e,t){},function(_,e,t){},function(_,e,t){},function(_,e,t){},function(_,e,t){"use strict";t.r(e);var a=t(0),s=(t(2),t(7)),r=t.n(s),l=(t(19),t(8)),c=function(_){_&&_ instanceof Function&&t.e(3).then(t.bind(null,24)).then((function(e){var t=e.getCLS,a=e.getFID,s=e.getFCP,r=e.getLCP,l=e.getTTFB;t(_),a(_),s(_),r(_),l(_)}))};r.a.render(Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"Calculadora"}),Object(a.jsx)(l.a,{})]}),document.getElementById("root")),c()}],[[23,1,2]]]);
//# sourceMappingURL=main.3380d9a0.chunk.js.map