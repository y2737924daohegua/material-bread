var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends"));var _objectWithoutProperties2=_interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));var _getPrototypeOf2=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));var _inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits"));var _defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var _react=_interopRequireWildcard(require("react"));var _propTypes=_interopRequireDefault(require("prop-types"));var _withTheme=_interopRequireDefault(require("../../Theme/withTheme"));var _SheetBottom=_interopRequireDefault(require("../SheetBottom/SheetBottom"));var _jsxFileName="/Users/cody/projects/material-bread/src/Components/DrawerBottom/DrawerBottom.js";var DrawerBottom=function(_Component){(0,_inherits2.default)(DrawerBottom,_Component);function DrawerBottom(){(0,_classCallCheck2.default)(this,DrawerBottom);return(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(DrawerBottom).apply(this,arguments));}(0,_createClass2.default)(DrawerBottom,[{key:"render",value:function render(){var _this$props=this.props,children=_this$props.children,rest=(0,_objectWithoutProperties2.default)(_this$props,["children"]);return _react.default.createElement(_SheetBottom.default,(0,_extends2.default)({type:'modal'},rest,{__source:{fileName:_jsxFileName,lineNumber:15}}),children);}}]);return DrawerBottom;}(_react.Component);(0,_defineProperty2.default)(DrawerBottom,"propTypes",{children:_propTypes.default.node,style:_propTypes.default.oneOfType([_propTypes.default.object,_propTypes.default.array])});var _default=(0,_withTheme.default)(DrawerBottom);exports.default=_default;