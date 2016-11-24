/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(2);
	var ContactList_1 = __webpack_require__(3);
	var Searchbar_1 = __webpack_require__(5);
	;
	;
	var ContactsApp = (function (_super) {
	    __extends(ContactsApp, _super);
	    function ContactsApp() {
	        _super.call(this);
	        this.state = {
	            filterText: ''
	        };
	    }
	    ContactsApp.prototype.handleUserInput = function (searchTerm) {
	        this.setState({ filterText: searchTerm });
	    };
	    ContactsApp.prototype.render = function () {
	        return (React.createElement("div", null, 
	            React.createElement(Searchbar_1.default, {filterText: this.state.filterText, onUserInput: this.handleUserInput.bind(this)}), 
	            React.createElement(ContactList_1.default, {contacts: this.props.contacts, filterText: this.state.filterText})));
	    };
	    return ContactsApp;
	}(React.Component));
	var contacts = [
	    { name: "Cassio Zen", email: "cassiozen@gmail.com" },
	    { name: "Dan Abramov", email: "gaearon@somewhere.com" },
	    { name: "Pete Hunt", email: "floydophone@somewhere.com" },
	    { name: "Paul O’Shannessy", email: "zpao@somewhere.com" },
	    { name: "Ryan Florence", email: "rpflorence@somewhere.com" },
	    { name: "Sebastian Markbage", email: "sebmarkbage@here.com" }
	];
	ReactDOM.render(React.createElement(ContactsApp, {contacts: contacts}), document.getElementById("example"));


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var ContactItem_1 = __webpack_require__(4);
	;
	;
	var ContactList = (function (_super) {
	    __extends(ContactList, _super);
	    function ContactList() {
	        _super.apply(this, arguments);
	    }
	    ContactList.prototype.render = function () {
	        var _this = this;
	        var filteredContracts = this.props.contacts.filter(function (contact) { return contact.name.indexOf(_this.props.filterText) != -1; });
	        return (React.createElement("ul", null, filteredContracts.map(function (contact) { return React.createElement(ContactItem_1.default, {key: contact.email, contact: contact}); })));
	    };
	    return ContactList;
	}(React.Component));
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = ContactList;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	;
	;
	var ContactItem = (function (_super) {
	    __extends(ContactItem, _super);
	    function ContactItem() {
	        _super.apply(this, arguments);
	    }
	    ContactItem.prototype.render = function () {
	        return (React.createElement("li", null, 
	            this.props.contact.name, 
	            " - ", 
	            this.props.contact.email));
	    };
	    return ContactItem;
	}(React.Component));
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = ContactItem;


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	;
	;
	var SearchBar = (function (_super) {
	    __extends(SearchBar, _super);
	    function SearchBar() {
	        _super.apply(this, arguments);
	    }
	    SearchBar.prototype.handleChange = function (event) {
	        console.log('change');
	        this.props.onUserInput(event.target.value);
	    };
	    SearchBar.prototype.render = function () {
	        return (React.createElement("input", {type: "search", onChange: this.handleChange.bind(this), value: this.props.filterText, placeholder: "search"}));
	    };
	    return SearchBar;
	}(React.Component));
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = SearchBar;


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map