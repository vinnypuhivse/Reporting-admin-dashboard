/* @ds-bundle: {"namespace":"NewselaAngelou","components":[{"name":"AlertBanner","sourcePath":"components/components/AlertBanner/AlertBanner.jsx"},{"name":"ArticleCard","sourcePath":"components/components/ArticleCard/ArticleCard.jsx"},{"name":"Badge","sourcePath":"components/components/Badge/Badge.jsx"},{"name":"BarChartRow","sourcePath":"components/components/BarChartRow/BarChartRow.jsx"},{"name":"Button","sourcePath":"components/components/Button/Button.jsx"},{"name":"Chip","sourcePath":"components/components/Chip/Chip.jsx"},{"name":"Divider","sourcePath":"components/components/Divider/Divider.jsx"},{"name":"Icon","sourcePath":"components/components/Icon/Icon.jsx"},{"name":"InfoCard","sourcePath":"components/components/InfoCard/InfoCard.jsx"},{"name":"Link","sourcePath":"components/components/Link/Link.jsx"},{"name":"ListItem","sourcePath":"components/components/ListItem/ListItem.jsx"},{"name":"Modal","sourcePath":"components/components/Modal/Modal.jsx"},{"name":"Popout","sourcePath":"components/components/Popout/Popout.jsx"},{"name":"Table","sourcePath":"components/components/Table/Table.jsx"},{"name":"Tabs","sourcePath":"components/components/Tabs/Tabs.jsx"},{"name":"TextInput","sourcePath":"components/components/TextInput/TextInput.jsx"},{"name":"Toast","sourcePath":"components/components/Toast/Toast.jsx"},{"name":"Toggletip","sourcePath":"components/components/Toggletip/Toggletip.jsx"}],"sourceHashes":{"components/components/AlertBanner/AlertBanner.jsx":"426cdd0699f9","components/components/AlertBanner/AlertBanner.d.ts":"47b40f09811e","components/components/AlertBanner/AlertBanner.prompt.md":"d9b68b5d2448","components/components/ArticleCard/ArticleCard.jsx":"97c7b072e4e7","components/components/ArticleCard/ArticleCard.d.ts":"dd7be1e093ae","components/components/ArticleCard/ArticleCard.prompt.md":"276354a7ff32","components/components/Badge/Badge.jsx":"29b77e89b792","components/components/Badge/Badge.d.ts":"a33727b1c666","components/components/Badge/Badge.prompt.md":"d8e66577e030","components/components/BarChartRow/BarChartRow.jsx":"e2b7b3395172","components/components/BarChartRow/BarChartRow.d.ts":"eeecde2e2302","components/components/BarChartRow/BarChartRow.prompt.md":"36328a8bbd89","components/components/Button/Button.jsx":"1c437f363bc6","components/components/Button/Button.d.ts":"9ea1ad71afb7","components/components/Button/Button.prompt.md":"b1d6dfe191c8","components/components/Chip/Chip.jsx":"be6337c0d048","components/components/Chip/Chip.d.ts":"afe857de26d4","components/components/Chip/Chip.prompt.md":"ab872801f48e","components/components/Divider/Divider.jsx":"d40c67e77e99","components/components/Divider/Divider.d.ts":"5263be36036a","components/components/Divider/Divider.prompt.md":"142664678572","components/components/Icon/Icon.jsx":"ed83cf491610","components/components/Icon/Icon.d.ts":"0d7715659930","components/components/Icon/Icon.prompt.md":"75f6927795e6","components/components/InfoCard/InfoCard.jsx":"be066ba37f56","components/components/InfoCard/InfoCard.d.ts":"5a7d42326a44","components/components/InfoCard/InfoCard.prompt.md":"6b4b4c825b9b","components/components/Link/Link.jsx":"9a5156fbb7bf","components/components/Link/Link.d.ts":"e5de0f4c4147","components/components/Link/Link.prompt.md":"7b964bee8394","components/components/ListItem/ListItem.jsx":"fdee2cd537bc","components/components/ListItem/ListItem.d.ts":"54303929f8aa","components/components/ListItem/ListItem.prompt.md":"cd3662b00b30","components/components/Modal/Modal.jsx":"c55fa4d7fe59","components/components/Modal/Modal.d.ts":"bbe9b4cfb95f","components/components/Modal/Modal.prompt.md":"b5136cfc4780","components/components/Popout/Popout.jsx":"5d7ab0232439","components/components/Popout/Popout.d.ts":"eb24be1fbdc6","components/components/Popout/Popout.prompt.md":"d560484ca176","components/components/Table/Table.jsx":"c2a3f2984364","components/components/Table/Table.d.ts":"1a3cd4d1fdeb","components/components/Table/Table.prompt.md":"2efd08657466","components/components/Tabs/Tabs.jsx":"be438b4e79b8","components/components/Tabs/Tabs.d.ts":"2dd887dba65a","components/components/Tabs/Tabs.prompt.md":"1b2ea9ef3860","components/components/TextInput/TextInput.jsx":"03297c0f710b","components/components/TextInput/TextInput.d.ts":"420559cba3f6","components/components/TextInput/TextInput.prompt.md":"7161e5d329ea","components/components/Toast/Toast.jsx":"a014aa08598e","components/components/Toast/Toast.d.ts":"4ca1924e4a0b","components/components/Toast/Toast.prompt.md":"58afba300068","components/components/Toggletip/Toggletip.jsx":"fc93bc11ad20","components/components/Toggletip/Toggletip.d.ts":"db1133d8f20c","components/components/Toggletip/Toggletip.prompt.md":"2c5fb92755fc"},"inlinedExternals":["@babel/runtime","@emotion/cache","@emotion/hash","@emotion/memoize","@emotion/react","@emotion/serialize","@emotion/sheet","@emotion/unitless","@emotion/use-insertion-effect-with-fallbacks","@emotion/utils","@emotion/weak-memoize","hoist-non-react-statics","stylis"],"builtBy":"cc-design-sync"} */
"use strict";
var NewselaAngelou = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __esm = (fn, res, err) => function __init() {
    if (err) throw err[0];
    try {
      return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
    } catch (e) {
      throw err = [e], e;
    }
  };
  var __commonJS = (cb, mod) => function __require() {
    try {
      return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
    } catch (e) {
      throw mod = 0, e;
    }
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from2, except, desc) => {
    if (from2 && typeof from2 === "object" || typeof from2 === "function") {
      for (let key of __getOwnPropNames(from2))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from2[key], enumerable: !(desc = __getOwnPropDesc(from2, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // <define:import.meta.env>
  var init_define_import_meta_env = __esm({
    "<define:import.meta.env>"() {
    }
  });

  // shim:react-shim
  var require_react_shim = __commonJS({
    "shim:react-shim"(exports, module) {
      init_define_import_meta_env();
      var R = window.React;
      function np(p, k) {
        var o = {};
        for (var x in p) if (x !== "children") o[x] = p[x];
        if (k !== void 0) o.key = k;
        return o;
      }
      function jsx2(t, p, k) {
        var c = p && p.children;
        return c === void 0 ? R.createElement(t, np(p, k)) : R.createElement(t, np(p, k), c);
      }
      function jsxs2(t, p, k) {
        return R.createElement.apply(R, [t, np(p, k)].concat(p.children));
      }
      module.exports = R;
      module.exports.jsx = jsx2;
      module.exports.jsxs = jsxs2;
      module.exports.jsxDEV = function(t, p, k, s) {
        return (s ? jsxs2 : jsx2)(t, p, k);
      };
      module.exports.Fragment = R.Fragment;
    }
  });

  // shim:react-is-shim
  var require_react_is_shim = __commonJS({
    "shim:react-is-shim"(exports) {
      init_define_import_meta_env();
      var R = window.React;
      var FWD = /* @__PURE__ */ Symbol.for("react.forward_ref");
      var MEMO = /* @__PURE__ */ Symbol.for("react.memo");
      var PORTAL = /* @__PURE__ */ Symbol.for("react.portal");
      var LAZY = /* @__PURE__ */ Symbol.for("react.lazy");
      function tt(o) {
        return o != null && typeof o === "object" ? R.isValidElement(o) ? o.type && o.type.$$typeof || o.type : o.$$typeof : void 0;
      }
      exports.typeOf = tt;
      exports.isElement = R.isValidElement;
      exports.isValidElementType = function(t) {
        return typeof t === "string" || typeof t === "function" || t === R.Fragment || t === R.Suspense || t === R.StrictMode || t === R.Profiler || t != null && typeof t === "object" && t.$$typeof != null;
      };
      exports.isFragment = function(o) {
        return R.isValidElement(o) && o.type === R.Fragment;
      };
      exports.isSuspense = function(o) {
        return R.isValidElement(o) && o.type === R.Suspense;
      };
      exports.isPortal = function(o) {
        return o != null && o.$$typeof === PORTAL;
      };
      exports.isForwardRef = function(o) {
        return tt(o) === FWD;
      };
      exports.isMemo = function(o) {
        return tt(o) === MEMO;
      };
      exports.isLazy = function(o) {
        return tt(o) === LAZY;
      };
      exports.isContextProvider = exports.isContextConsumer = exports.isProfiler = exports.isStrictMode = function() {
        return false;
      };
      exports.ForwardRef = FWD;
      exports.Memo = MEMO;
      exports.Portal = PORTAL;
      exports.Lazy = LAZY;
      exports.Fragment = R.Fragment;
      exports.Suspense = R.Suspense;
      exports.StrictMode = R.StrictMode;
      exports.Profiler = R.Profiler;
    }
  });

  // node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js
  var require_hoist_non_react_statics_cjs = __commonJS({
    "node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"(exports, module) {
      "use strict";
      init_define_import_meta_env();
      var reactIs = require_react_is_shim();
      var REACT_STATICS = {
        childContextTypes: true,
        contextType: true,
        contextTypes: true,
        defaultProps: true,
        displayName: true,
        getDefaultProps: true,
        getDerivedStateFromError: true,
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
      var FORWARD_REF_STATICS = {
        "$$typeof": true,
        render: true,
        defaultProps: true,
        displayName: true,
        propTypes: true
      };
      var MEMO_STATICS = {
        "$$typeof": true,
        compare: true,
        defaultProps: true,
        displayName: true,
        propTypes: true,
        type: true
      };
      var TYPE_STATICS = {};
      TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
      TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;
      function getStatics(component) {
        if (reactIs.isMemo(component)) {
          return MEMO_STATICS;
        }
        return TYPE_STATICS[component["$$typeof"]] || REACT_STATICS;
      }
      var defineProperty = Object.defineProperty;
      var getOwnPropertyNames = Object.getOwnPropertyNames;
      var getOwnPropertySymbols = Object.getOwnPropertySymbols;
      var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
      var getPrototypeOf = Object.getPrototypeOf;
      var objectPrototype = Object.prototype;
      function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
        if (typeof sourceComponent !== "string") {
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
          var targetStatics = getStatics(targetComponent);
          var sourceStatics = getStatics(sourceComponent);
          for (var i = 0; i < keys.length; ++i) {
            var key = keys[i];
            if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
              var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
              try {
                defineProperty(targetComponent, key, descriptor);
              } catch (e) {
              }
            }
          }
        }
        return targetComponent;
      }
      module.exports = hoistNonReactStatics;
    }
  });

  // shim:react-dom-shim
  var require_react_dom_shim = __commonJS({
    "shim:react-dom-shim"(exports, module) {
      init_define_import_meta_env();
      var D = window.ReactDOM;
      var n = function() {
      };
      module.exports = Object.assign({ preload: n, preinit: n, preconnect: n, prefetchDNS: n, preloadModule: n, preinitModule: n }, D);
    }
  });

  // packages/angelou/dist/index.mjs
  var index_exports = {};
  __export(index_exports, {
    AlertBanner: () => AlertBanner_default,
    ArticleCard: () => ArticleCard_default,
    Badge: () => Badge_default,
    Bar: () => Bar,
    BarChartRow: () => BarChartRow_default,
    Button: () => Button_default,
    Chip: () => Chip_default,
    Divider: () => Divider_default,
    Icon: () => Icon_default,
    InfoCard: () => InfoCard_default,
    Link: () => Link_default,
    ListItem: () => ListItem_default,
    Modal: () => Modal_default,
    Popout: () => Popout_default,
    Table: () => Table_default,
    Tabs: () => Tabs_default,
    TextInput: () => TextInput_default,
    Toast: () => Toast_default,
    Toggletip: () => Toggletip_default,
    tokens: () => tokens_exports
  });
  init_define_import_meta_env();
  var import_react5 = __toESM(require_react_shim(), 1);

  // node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js
  init_define_import_meta_env();
  var import_react3 = __toESM(require_react_shim());

  // node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js
  init_define_import_meta_env();

  // node_modules/@emotion/sheet/dist/emotion-sheet.browser.esm.js
  init_define_import_meta_env();
  function sheetForTag(tag) {
    if (tag.sheet) {
      return tag.sheet;
    }
    for (var i = 0; i < document.styleSheets.length; i++) {
      if (document.styleSheets[i].ownerNode === tag) {
        return document.styleSheets[i];
      }
    }
  }
  function createStyleElement(options) {
    var tag = document.createElement("style");
    tag.setAttribute("data-emotion", options.key);
    if (options.nonce !== void 0) {
      tag.setAttribute("nonce", options.nonce);
    }
    tag.appendChild(document.createTextNode(""));
    tag.setAttribute("data-s", "");
    return tag;
  }
  var StyleSheet = /* @__PURE__ */ (function() {
    function StyleSheet2(options) {
      var _this = this;
      this._insertTag = function(tag) {
        var before;
        if (_this.tags.length === 0) {
          if (_this.insertionPoint) {
            before = _this.insertionPoint.nextSibling;
          } else if (_this.prepend) {
            before = _this.container.firstChild;
          } else {
            before = _this.before;
          }
        } else {
          before = _this.tags[_this.tags.length - 1].nextSibling;
        }
        _this.container.insertBefore(tag, before);
        _this.tags.push(tag);
      };
      this.isSpeedy = options.speedy === void 0 ? false : options.speedy;
      this.tags = [];
      this.ctr = 0;
      this.nonce = options.nonce;
      this.key = options.key;
      this.container = options.container;
      this.prepend = options.prepend;
      this.insertionPoint = options.insertionPoint;
      this.before = null;
    }
    var _proto = StyleSheet2.prototype;
    _proto.hydrate = function hydrate(nodes) {
      nodes.forEach(this._insertTag);
    };
    _proto.insert = function insert(rule) {
      if (this.ctr % (this.isSpeedy ? 65e3 : 1) === 0) {
        this._insertTag(createStyleElement(this));
      }
      var tag = this.tags[this.tags.length - 1];
      if (true) {
        var isImportRule3 = rule.charCodeAt(0) === 64 && rule.charCodeAt(1) === 105;
        if (isImportRule3 && this._alreadyInsertedOrderInsensitiveRule) {
          console.error("You're attempting to insert the following rule:\n" + rule + "\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules.");
        }
        this._alreadyInsertedOrderInsensitiveRule = this._alreadyInsertedOrderInsensitiveRule || !isImportRule3;
      }
      if (this.isSpeedy) {
        var sheet = sheetForTag(tag);
        try {
          sheet.insertRule(rule, sheet.cssRules.length);
        } catch (e) {
          if (!/:(-moz-placeholder|-moz-focus-inner|-moz-focusring|-ms-input-placeholder|-moz-read-write|-moz-read-only|-ms-clear|-ms-expand|-ms-reveal){/.test(rule)) {
            console.error('There was a problem inserting the following rule: "' + rule + '"', e);
          }
        }
      } else {
        tag.appendChild(document.createTextNode(rule));
      }
      this.ctr++;
    };
    _proto.flush = function flush() {
      this.tags.forEach(function(tag) {
        return tag.parentNode && tag.parentNode.removeChild(tag);
      });
      this.tags = [];
      this.ctr = 0;
      if (true) {
        this._alreadyInsertedOrderInsensitiveRule = false;
      }
    };
    return StyleSheet2;
  })();

  // node_modules/stylis/src/Enum.js
  init_define_import_meta_env();
  var MS = "-ms-";
  var MOZ = "-moz-";
  var WEBKIT = "-webkit-";
  var COMMENT = "comm";
  var RULESET = "rule";
  var DECLARATION = "decl";
  var IMPORT = "@import";
  var KEYFRAMES = "@keyframes";
  var LAYER = "@layer";

  // node_modules/stylis/src/Utility.js
  init_define_import_meta_env();
  var abs = Math.abs;
  var from = String.fromCharCode;
  var assign = Object.assign;
  function hash(value, length2) {
    return charat(value, 0) ^ 45 ? (((length2 << 2 ^ charat(value, 0)) << 2 ^ charat(value, 1)) << 2 ^ charat(value, 2)) << 2 ^ charat(value, 3) : 0;
  }
  function trim(value) {
    return value.trim();
  }
  function match(value, pattern) {
    return (value = pattern.exec(value)) ? value[0] : value;
  }
  function replace(value, pattern, replacement) {
    return value.replace(pattern, replacement);
  }
  function indexof(value, search) {
    return value.indexOf(search);
  }
  function charat(value, index) {
    return value.charCodeAt(index) | 0;
  }
  function substr(value, begin, end) {
    return value.slice(begin, end);
  }
  function strlen(value) {
    return value.length;
  }
  function sizeof(value) {
    return value.length;
  }
  function append(value, array) {
    return array.push(value), value;
  }
  function combine(array, callback) {
    return array.map(callback).join("");
  }

  // node_modules/stylis/src/Parser.js
  init_define_import_meta_env();

  // node_modules/stylis/src/Tokenizer.js
  init_define_import_meta_env();
  var line = 1;
  var column = 1;
  var length = 0;
  var position = 0;
  var character = 0;
  var characters = "";
  function node(value, root, parent, type, props, children, length2) {
    return { value, root, parent, type, props, children, line, column, length: length2, return: "" };
  }
  function copy(root, props) {
    return assign(node("", null, null, "", null, null, 0), root, { length: -root.length }, props);
  }
  function char() {
    return character;
  }
  function prev() {
    character = position > 0 ? charat(characters, --position) : 0;
    if (column--, character === 10)
      column = 1, line--;
    return character;
  }
  function next() {
    character = position < length ? charat(characters, position++) : 0;
    if (column++, character === 10)
      column = 1, line++;
    return character;
  }
  function peek() {
    return charat(characters, position);
  }
  function caret() {
    return position;
  }
  function slice(begin, end) {
    return substr(characters, begin, end);
  }
  function token(type) {
    switch (type) {
      // \0 \t \n \r \s whitespace token
      case 0:
      case 9:
      case 10:
      case 13:
      case 32:
        return 5;
      // ! + , / > @ ~ isolate token
      case 33:
      case 43:
      case 44:
      case 47:
      case 62:
      case 64:
      case 126:
      // ; { } breakpoint token
      case 59:
      case 123:
      case 125:
        return 4;
      // : accompanied token
      case 58:
        return 3;
      // " ' ( [ opening delimit token
      case 34:
      case 39:
      case 40:
      case 91:
        return 2;
      // ) ] closing delimit token
      case 41:
      case 93:
        return 1;
    }
    return 0;
  }
  function alloc(value) {
    return line = column = 1, length = strlen(characters = value), position = 0, [];
  }
  function dealloc(value) {
    return characters = "", value;
  }
  function delimit(type) {
    return trim(slice(position - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)));
  }
  function whitespace(type) {
    while (character = peek())
      if (character < 33)
        next();
      else
        break;
    return token(type) > 2 || token(character) > 3 ? "" : " ";
  }
  function escaping(index, count) {
    while (--count && next())
      if (character < 48 || character > 102 || character > 57 && character < 65 || character > 70 && character < 97)
        break;
    return slice(index, caret() + (count < 6 && peek() == 32 && next() == 32));
  }
  function delimiter(type) {
    while (next())
      switch (character) {
        // ] ) " '
        case type:
          return position;
        // " '
        case 34:
        case 39:
          if (type !== 34 && type !== 39)
            delimiter(character);
          break;
        // (
        case 40:
          if (type === 41)
            delimiter(type);
          break;
        // \
        case 92:
          next();
          break;
      }
    return position;
  }
  function commenter(type, index) {
    while (next())
      if (type + character === 47 + 10)
        break;
      else if (type + character === 42 + 42 && peek() === 47)
        break;
    return "/*" + slice(index, position - 1) + "*" + from(type === 47 ? type : next());
  }
  function identifier(index) {
    while (!token(peek()))
      next();
    return slice(index, position);
  }

  // node_modules/stylis/src/Parser.js
  function compile(value) {
    return dealloc(parse("", null, null, null, [""], value = alloc(value), 0, [0], value));
  }
  function parse(value, root, parent, rule, rules, rulesets, pseudo, points, declarations) {
    var index = 0;
    var offset = 0;
    var length2 = pseudo;
    var atrule = 0;
    var property = 0;
    var previous = 0;
    var variable = 1;
    var scanning = 1;
    var ampersand = 1;
    var character2 = 0;
    var type = "";
    var props = rules;
    var children = rulesets;
    var reference = rule;
    var characters2 = type;
    while (scanning)
      switch (previous = character2, character2 = next()) {
        // (
        case 40:
          if (previous != 108 && charat(characters2, length2 - 1) == 58) {
            if (indexof(characters2 += replace(delimit(character2), "&", "&\f"), "&\f") != -1)
              ampersand = -1;
            break;
          }
        // " ' [
        case 34:
        case 39:
        case 91:
          characters2 += delimit(character2);
          break;
        // \t \n \r \s
        case 9:
        case 10:
        case 13:
        case 32:
          characters2 += whitespace(previous);
          break;
        // \
        case 92:
          characters2 += escaping(caret() - 1, 7);
          continue;
        // /
        case 47:
          switch (peek()) {
            case 42:
            case 47:
              append(comment(commenter(next(), caret()), root, parent), declarations);
              break;
            default:
              characters2 += "/";
          }
          break;
        // {
        case 123 * variable:
          points[index++] = strlen(characters2) * ampersand;
        // } ; \0
        case 125 * variable:
        case 59:
        case 0:
          switch (character2) {
            // \0 }
            case 0:
            case 125:
              scanning = 0;
            // ;
            case 59 + offset:
              if (ampersand == -1) characters2 = replace(characters2, /\f/g, "");
              if (property > 0 && strlen(characters2) - length2)
                append(property > 32 ? declaration(characters2 + ";", rule, parent, length2 - 1) : declaration(replace(characters2, " ", "") + ";", rule, parent, length2 - 2), declarations);
              break;
            // @ ;
            case 59:
              characters2 += ";";
            // { rule/at-rule
            default:
              append(reference = ruleset(characters2, root, parent, index, offset, rules, points, type, props = [], children = [], length2), rulesets);
              if (character2 === 123)
                if (offset === 0)
                  parse(characters2, root, reference, reference, props, rulesets, length2, points, children);
                else
                  switch (atrule === 99 && charat(characters2, 3) === 110 ? 100 : atrule) {
                    // d l m s
                    case 100:
                    case 108:
                    case 109:
                    case 115:
                      parse(value, reference, reference, rule && append(ruleset(value, reference, reference, 0, 0, rules, points, type, rules, props = [], length2), children), rules, children, length2, points, rule ? props : children);
                      break;
                    default:
                      parse(characters2, reference, reference, reference, [""], children, 0, points, children);
                  }
          }
          index = offset = property = 0, variable = ampersand = 1, type = characters2 = "", length2 = pseudo;
          break;
        // :
        case 58:
          length2 = 1 + strlen(characters2), property = previous;
        default:
          if (variable < 1) {
            if (character2 == 123)
              --variable;
            else if (character2 == 125 && variable++ == 0 && prev() == 125)
              continue;
          }
          switch (characters2 += from(character2), character2 * variable) {
            // &
            case 38:
              ampersand = offset > 0 ? 1 : (characters2 += "\f", -1);
              break;
            // ,
            case 44:
              points[index++] = (strlen(characters2) - 1) * ampersand, ampersand = 1;
              break;
            // @
            case 64:
              if (peek() === 45)
                characters2 += delimit(next());
              atrule = peek(), offset = length2 = strlen(type = characters2 += identifier(caret())), character2++;
              break;
            // -
            case 45:
              if (previous === 45 && strlen(characters2) == 2)
                variable = 0;
          }
      }
    return rulesets;
  }
  function ruleset(value, root, parent, index, offset, rules, points, type, props, children, length2) {
    var post = offset - 1;
    var rule = offset === 0 ? rules : [""];
    var size = sizeof(rule);
    for (var i = 0, j = 0, k = 0; i < index; ++i)
      for (var x = 0, y = substr(value, post + 1, post = abs(j = points[i])), z = value; x < size; ++x)
        if (z = trim(j > 0 ? rule[x] + " " + y : replace(y, /&\f/g, rule[x])))
          props[k++] = z;
    return node(value, root, parent, offset === 0 ? RULESET : type, props, children, length2);
  }
  function comment(value, root, parent) {
    return node(value, root, parent, COMMENT, from(char()), substr(value, 2, -2), 0);
  }
  function declaration(value, root, parent, length2) {
    return node(value, root, parent, DECLARATION, substr(value, 0, length2), substr(value, length2 + 1, -1), length2);
  }

  // node_modules/stylis/src/Serializer.js
  init_define_import_meta_env();
  function serialize(children, callback) {
    var output = "";
    var length2 = sizeof(children);
    for (var i = 0; i < length2; i++)
      output += callback(children[i], i, children, callback) || "";
    return output;
  }
  function stringify(element, index, children, callback) {
    switch (element.type) {
      case LAYER:
        if (element.children.length) break;
      case IMPORT:
      case DECLARATION:
        return element.return = element.return || element.value;
      case COMMENT:
        return "";
      case KEYFRAMES:
        return element.return = element.value + "{" + serialize(element.children, callback) + "}";
      case RULESET:
        element.value = element.props.join(",");
    }
    return strlen(children = serialize(element.children, callback)) ? element.return = element.value + "{" + children + "}" : "";
  }

  // node_modules/stylis/src/Middleware.js
  init_define_import_meta_env();
  function middleware(collection) {
    var length2 = sizeof(collection);
    return function(element, index, children, callback) {
      var output = "";
      for (var i = 0; i < length2; i++)
        output += collection[i](element, index, children, callback) || "";
      return output;
    };
  }

  // node_modules/@emotion/weak-memoize/dist/emotion-weak-memoize.esm.js
  init_define_import_meta_env();

  // node_modules/@emotion/memoize/dist/emotion-memoize.esm.js
  init_define_import_meta_env();
  function memoize(fn) {
    var cache = /* @__PURE__ */ Object.create(null);
    return function(arg) {
      if (cache[arg] === void 0) cache[arg] = fn(arg);
      return cache[arg];
    };
  }

  // node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js
  var identifierWithPointTracking = function identifierWithPointTracking2(begin, points, index) {
    var previous = 0;
    var character2 = 0;
    while (true) {
      previous = character2;
      character2 = peek();
      if (previous === 38 && character2 === 12) {
        points[index] = 1;
      }
      if (token(character2)) {
        break;
      }
      next();
    }
    return slice(begin, position);
  };
  var toRules = function toRules2(parsed, points) {
    var index = -1;
    var character2 = 44;
    do {
      switch (token(character2)) {
        case 0:
          if (character2 === 38 && peek() === 12) {
            points[index] = 1;
          }
          parsed[index] += identifierWithPointTracking(position - 1, points, index);
          break;
        case 2:
          parsed[index] += delimit(character2);
          break;
        case 4:
          if (character2 === 44) {
            parsed[++index] = peek() === 58 ? "&\f" : "";
            points[index] = parsed[index].length;
            break;
          }
        // fallthrough
        default:
          parsed[index] += from(character2);
      }
    } while (character2 = next());
    return parsed;
  };
  var getRules = function getRules2(value, points) {
    return dealloc(toRules(alloc(value), points));
  };
  var fixedElements = /* @__PURE__ */ new WeakMap();
  var compat = function compat2(element) {
    if (element.type !== "rule" || !element.parent || // positive .length indicates that this rule contains pseudo
    // negative .length indicates that this rule has been already prefixed
    element.length < 1) {
      return;
    }
    var value = element.value, parent = element.parent;
    var isImplicitRule = element.column === parent.column && element.line === parent.line;
    while (parent.type !== "rule") {
      parent = parent.parent;
      if (!parent) return;
    }
    if (element.props.length === 1 && value.charCodeAt(0) !== 58 && !fixedElements.get(parent)) {
      return;
    }
    if (isImplicitRule) {
      return;
    }
    fixedElements.set(element, true);
    var points = [];
    var rules = getRules(value, points);
    var parentRules = parent.props;
    for (var i = 0, k = 0; i < rules.length; i++) {
      for (var j = 0; j < parentRules.length; j++, k++) {
        element.props[k] = points[i] ? rules[i].replace(/&\f/g, parentRules[j]) : parentRules[j] + " " + rules[i];
      }
    }
  };
  var removeLabel = function removeLabel2(element) {
    if (element.type === "decl") {
      var value = element.value;
      if (
        // charcode for l
        value.charCodeAt(0) === 108 && // charcode for b
        value.charCodeAt(2) === 98
      ) {
        element["return"] = "";
        element.value = "";
      }
    }
  };
  var ignoreFlag = "emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason";
  var isIgnoringComment = function isIgnoringComment2(element) {
    return element.type === "comm" && element.children.indexOf(ignoreFlag) > -1;
  };
  var createUnsafeSelectorsAlarm = function createUnsafeSelectorsAlarm2(cache) {
    return function(element, index, children) {
      if (element.type !== "rule" || cache.compat) return;
      var unsafePseudoClasses = element.value.match(/(:first|:nth|:nth-last)-child/g);
      if (unsafePseudoClasses) {
        var isNested = !!element.parent;
        var commentContainer = isNested ? element.parent.children : (
          // global rule at the root level
          children
        );
        for (var i = commentContainer.length - 1; i >= 0; i--) {
          var node2 = commentContainer[i];
          if (node2.line < element.line) {
            break;
          }
          if (node2.column < element.column) {
            if (isIgnoringComment(node2)) {
              return;
            }
            break;
          }
        }
        unsafePseudoClasses.forEach(function(unsafePseudoClass) {
          console.error('The pseudo class "' + unsafePseudoClass + '" is potentially unsafe when doing server-side rendering. Try changing it to "' + unsafePseudoClass.split("-child")[0] + '-of-type".');
        });
      }
    };
  };
  var isImportRule = function isImportRule2(element) {
    return element.type.charCodeAt(1) === 105 && element.type.charCodeAt(0) === 64;
  };
  var isPrependedWithRegularRules = function isPrependedWithRegularRules2(index, children) {
    for (var i = index - 1; i >= 0; i--) {
      if (!isImportRule(children[i])) {
        return true;
      }
    }
    return false;
  };
  var nullifyElement = function nullifyElement2(element) {
    element.type = "";
    element.value = "";
    element["return"] = "";
    element.children = "";
    element.props = "";
  };
  var incorrectImportAlarm = function incorrectImportAlarm2(element, index, children) {
    if (!isImportRule(element)) {
      return;
    }
    if (element.parent) {
      console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles.");
      nullifyElement(element);
    } else if (isPrependedWithRegularRules(index, children)) {
      console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules.");
      nullifyElement(element);
    }
  };
  function prefix(value, length2) {
    switch (hash(value, length2)) {
      // color-adjust
      case 5103:
        return WEBKIT + "print-" + value + value;
      // animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)
      case 5737:
      case 4201:
      case 3177:
      case 3433:
      case 1641:
      case 4457:
      case 2921:
      // text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break
      case 5572:
      case 6356:
      case 5844:
      case 3191:
      case 6645:
      case 3005:
      // mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position, mask-composite,
      case 6391:
      case 5879:
      case 5623:
      case 6135:
      case 4599:
      case 4855:
      // background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)
      case 4215:
      case 6389:
      case 5109:
      case 5365:
      case 5621:
      case 3829:
        return WEBKIT + value + value;
      // appearance, user-select, transform, hyphens, text-size-adjust
      case 5349:
      case 4246:
      case 4810:
      case 6968:
      case 2756:
        return WEBKIT + value + MOZ + value + MS + value + value;
      // flex, flex-direction
      case 6828:
      case 4268:
        return WEBKIT + value + MS + value + value;
      // order
      case 6165:
        return WEBKIT + value + MS + "flex-" + value + value;
      // align-items
      case 5187:
        return WEBKIT + value + replace(value, /(\w+).+(:[^]+)/, WEBKIT + "box-$1$2" + MS + "flex-$1$2") + value;
      // align-self
      case 5443:
        return WEBKIT + value + MS + "flex-item-" + replace(value, /flex-|-self/, "") + value;
      // align-content
      case 4675:
        return WEBKIT + value + MS + "flex-line-pack" + replace(value, /align-content|flex-|-self/, "") + value;
      // flex-shrink
      case 5548:
        return WEBKIT + value + MS + replace(value, "shrink", "negative") + value;
      // flex-basis
      case 5292:
        return WEBKIT + value + MS + replace(value, "basis", "preferred-size") + value;
      // flex-grow
      case 6060:
        return WEBKIT + "box-" + replace(value, "-grow", "") + WEBKIT + value + MS + replace(value, "grow", "positive") + value;
      // transition
      case 4554:
        return WEBKIT + replace(value, /([^-])(transform)/g, "$1" + WEBKIT + "$2") + value;
      // cursor
      case 6187:
        return replace(replace(replace(value, /(zoom-|grab)/, WEBKIT + "$1"), /(image-set)/, WEBKIT + "$1"), value, "") + value;
      // background, background-image
      case 5495:
      case 3959:
        return replace(value, /(image-set\([^]*)/, WEBKIT + "$1$`$1");
      // justify-content
      case 4968:
        return replace(replace(value, /(.+:)(flex-)?(.*)/, WEBKIT + "box-pack:$3" + MS + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + WEBKIT + value + value;
      // (margin|padding)-inline-(start|end)
      case 4095:
      case 3583:
      case 4068:
      case 2532:
        return replace(value, /(.+)-inline(.+)/, WEBKIT + "$1$2") + value;
      // (min|max)?(width|height|inline-size|block-size)
      case 8116:
      case 7059:
      case 5753:
      case 5535:
      case 5445:
      case 5701:
      case 4933:
      case 4677:
      case 5533:
      case 5789:
      case 5021:
      case 4765:
        if (strlen(value) - 1 - length2 > 6) switch (charat(value, length2 + 1)) {
          // (m)ax-content, (m)in-content
          case 109:
            if (charat(value, length2 + 4) !== 45) break;
          // (f)ill-available, (f)it-content
          case 102:
            return replace(value, /(.+:)(.+)-([^]+)/, "$1" + WEBKIT + "$2-$3$1" + MOZ + (charat(value, length2 + 3) == 108 ? "$3" : "$2-$3")) + value;
          // (s)tretch
          case 115:
            return ~indexof(value, "stretch") ? prefix(replace(value, "stretch", "fill-available"), length2) + value : value;
        }
        break;
      // position: sticky
      case 4949:
        if (charat(value, length2 + 1) !== 115) break;
      // display: (flex|inline-flex)
      case 6444:
        switch (charat(value, strlen(value) - 3 - (~indexof(value, "!important") && 10))) {
          // stic(k)y
          case 107:
            return replace(value, ":", ":" + WEBKIT) + value;
          // (inline-)?fl(e)x
          case 101:
            return replace(value, /(.+:)([^;!]+)(;|!.+)?/, "$1" + WEBKIT + (charat(value, 14) === 45 ? "inline-" : "") + "box$3$1" + WEBKIT + "$2$3$1" + MS + "$2box$3") + value;
        }
        break;
      // writing-mode
      case 5936:
        switch (charat(value, length2 + 11)) {
          // vertical-l(r)
          case 114:
            return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "tb") + value;
          // vertical-r(l)
          case 108:
            return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "tb-rl") + value;
          // horizontal(-)tb
          case 45:
            return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "lr") + value;
        }
        return WEBKIT + value + MS + value + value;
    }
    return value;
  }
  var prefixer = function prefixer2(element, index, children, callback) {
    if (element.length > -1) {
      if (!element["return"]) switch (element.type) {
        case DECLARATION:
          element["return"] = prefix(element.value, element.length);
          break;
        case KEYFRAMES:
          return serialize([copy(element, {
            value: replace(element.value, "@", "@" + WEBKIT)
          })], callback);
        case RULESET:
          if (element.length) return combine(element.props, function(value) {
            switch (match(value, /(::plac\w+|:read-\w+)/)) {
              // :read-(only|write)
              case ":read-only":
              case ":read-write":
                return serialize([copy(element, {
                  props: [replace(value, /:(read-\w+)/, ":" + MOZ + "$1")]
                })], callback);
              // :placeholder
              case "::placeholder":
                return serialize([copy(element, {
                  props: [replace(value, /:(plac\w+)/, ":" + WEBKIT + "input-$1")]
                }), copy(element, {
                  props: [replace(value, /:(plac\w+)/, ":" + MOZ + "$1")]
                }), copy(element, {
                  props: [replace(value, /:(plac\w+)/, MS + "input-$1")]
                })], callback);
            }
            return "";
          });
      }
    }
  };
  var defaultStylisPlugins = [prefixer];
  var createCache = function createCache2(options) {
    var key = options.key;
    if (!key) {
      throw new Error("You have to configure `key` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for linking styles to your cache.\nIf multiple caches share the same key they might \"fight\" for each other's style elements.");
    }
    if (key === "css") {
      var ssrStyles = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(ssrStyles, function(node2) {
        var dataEmotionAttribute = node2.getAttribute("data-emotion");
        if (dataEmotionAttribute.indexOf(" ") === -1) {
          return;
        }
        document.head.appendChild(node2);
        node2.setAttribute("data-s", "");
      });
    }
    var stylisPlugins = options.stylisPlugins || defaultStylisPlugins;
    if (true) {
      if (/[^a-z-]/.test(key)) {
        throw new Error('Emotion key must only contain lower case alphabetical characters and - but "' + key + '" was passed');
      }
    }
    var inserted = {};
    var container;
    var nodesToHydrate = [];
    {
      container = options.container || document.head;
      Array.prototype.forEach.call(
        // this means we will ignore elements which don't have a space in them which
        // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
        document.querySelectorAll('style[data-emotion^="' + key + ' "]'),
        function(node2) {
          var attrib = node2.getAttribute("data-emotion").split(" ");
          for (var i = 1; i < attrib.length; i++) {
            inserted[attrib[i]] = true;
          }
          nodesToHydrate.push(node2);
        }
      );
    }
    var _insert;
    var omnipresentPlugins = [compat, removeLabel];
    if (true) {
      omnipresentPlugins.push(createUnsafeSelectorsAlarm({
        get compat() {
          return cache.compat;
        }
      }), incorrectImportAlarm);
    }
    {
      var currentSheet;
      var finalizingPlugins = [stringify, true ? function(element) {
        if (!element.root) {
          if (element["return"]) {
            currentSheet.insert(element["return"]);
          } else if (element.value && element.type !== COMMENT) {
            currentSheet.insert(element.value + "{}");
          }
        }
      } : rulesheet(function(rule) {
        currentSheet.insert(rule);
      })];
      var serializer = middleware(omnipresentPlugins.concat(stylisPlugins, finalizingPlugins));
      var stylis = function stylis2(styles) {
        return serialize(compile(styles), serializer);
      };
      _insert = function insert(selector, serialized, sheet, shouldCache) {
        currentSheet = sheet;
        if (serialized.map !== void 0) {
          currentSheet = {
            insert: function insert2(rule) {
              sheet.insert(rule + serialized.map);
            }
          };
        }
        stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);
        if (shouldCache) {
          cache.inserted[serialized.name] = true;
        }
      };
    }
    var cache = {
      key,
      sheet: new StyleSheet({
        key,
        container,
        nonce: options.nonce,
        speedy: options.speedy,
        prepend: options.prepend,
        insertionPoint: options.insertionPoint
      }),
      nonce: options.nonce,
      inserted,
      registered: {},
      insert: _insert
    };
    cache.sheet.hydrate(nodesToHydrate);
    return cache;
  };

  // node_modules/@emotion/react/dist/emotion-element-6a883da9.browser.esm.js
  init_define_import_meta_env();
  var import_react2 = __toESM(require_react_shim());

  // node_modules/@babel/runtime/helpers/esm/extends.js
  init_define_import_meta_env();

  // node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js
  init_define_import_meta_env();
  var isBrowser = true;
  function getRegisteredStyles(registered, registeredStyles, classNames) {
    var rawClassName = "";
    classNames.split(" ").forEach(function(className) {
      if (registered[className] !== void 0) {
        registeredStyles.push(registered[className] + ";");
      } else {
        rawClassName += className + " ";
      }
    });
    return rawClassName;
  }
  var registerStyles = function registerStyles2(cache, serialized, isStringTag) {
    var className = cache.key + "-" + serialized.name;
    if (
      // we only need to add the styles to the registered cache if the
      // class name could be used further down
      // the tree but if it's a string tag, we know it won't
      // so we don't have to add it to registered cache.
      // this improves memory usage since we can avoid storing the whole style string
      (isStringTag === false || // we need to always store it if we're in compat mode and
      // in node since emotion-server relies on whether a style is in
      // the registered cache to know whether a style is global or not
      // also, note that this check will be dead code eliminated in the browser
      isBrowser === false) && cache.registered[className] === void 0
    ) {
      cache.registered[className] = serialized.styles;
    }
  };
  var insertStyles = function insertStyles2(cache, serialized, isStringTag) {
    registerStyles(cache, serialized, isStringTag);
    var className = cache.key + "-" + serialized.name;
    if (cache.inserted[serialized.name] === void 0) {
      var current = serialized;
      do {
        cache.insert(serialized === current ? "." + className : "", current, cache.sheet, true);
        current = current.next;
      } while (current !== void 0);
    }
  };

  // node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js
  init_define_import_meta_env();

  // node_modules/@emotion/hash/dist/emotion-hash.esm.js
  init_define_import_meta_env();
  function murmur2(str) {
    var h = 0;
    var k, i = 0, len = str.length;
    for (; len >= 4; ++i, len -= 4) {
      k = str.charCodeAt(i) & 255 | (str.charCodeAt(++i) & 255) << 8 | (str.charCodeAt(++i) & 255) << 16 | (str.charCodeAt(++i) & 255) << 24;
      k = /* Math.imul(k, m): */
      (k & 65535) * 1540483477 + ((k >>> 16) * 59797 << 16);
      k ^= /* k >>> r: */
      k >>> 24;
      h = /* Math.imul(k, m): */
      (k & 65535) * 1540483477 + ((k >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
      (h & 65535) * 1540483477 + ((h >>> 16) * 59797 << 16);
    }
    switch (len) {
      case 3:
        h ^= (str.charCodeAt(i + 2) & 255) << 16;
      case 2:
        h ^= (str.charCodeAt(i + 1) & 255) << 8;
      case 1:
        h ^= str.charCodeAt(i) & 255;
        h = /* Math.imul(h, m): */
        (h & 65535) * 1540483477 + ((h >>> 16) * 59797 << 16);
    }
    h ^= h >>> 13;
    h = /* Math.imul(h, m): */
    (h & 65535) * 1540483477 + ((h >>> 16) * 59797 << 16);
    return ((h ^ h >>> 15) >>> 0).toString(36);
  }

  // node_modules/@emotion/unitless/dist/emotion-unitless.esm.js
  init_define_import_meta_env();
  var unitlessKeys = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    // SVG-related properties
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1
  };

  // node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js
  var ILLEGAL_ESCAPE_SEQUENCE_ERROR = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`;
  var UNDEFINED_AS_OBJECT_KEY_ERROR = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).";
  var hyphenateRegex = /[A-Z]|^ms/g;
  var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;
  var isCustomProperty = function isCustomProperty2(property) {
    return property.charCodeAt(1) === 45;
  };
  var isProcessableValue = function isProcessableValue2(value) {
    return value != null && typeof value !== "boolean";
  };
  var processStyleName = /* @__PURE__ */ memoize(function(styleName) {
    return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, "-$&").toLowerCase();
  });
  var processStyleValue = function processStyleValue2(key, value) {
    switch (key) {
      case "animation":
      case "animationName": {
        if (typeof value === "string") {
          return value.replace(animationRegex, function(match2, p1, p2) {
            cursor = {
              name: p1,
              styles: p2,
              next: cursor
            };
            return p1;
          });
        }
      }
    }
    if (unitlessKeys[key] !== 1 && !isCustomProperty(key) && typeof value === "number" && value !== 0) {
      return value + "px";
    }
    return value;
  };
  if (true) {
    contentValuePattern = /(var|attr|counters?|url|element|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/;
    contentValues = ["normal", "none", "initial", "inherit", "unset"];
    oldProcessStyleValue = processStyleValue;
    msPattern = /^-ms-/;
    hyphenPattern = /-(.)/g;
    hyphenatedCache = {};
    processStyleValue = function processStyleValue3(key, value) {
      if (key === "content") {
        if (typeof value !== "string" || contentValues.indexOf(value) === -1 && !contentValuePattern.test(value) && (value.charAt(0) !== value.charAt(value.length - 1) || value.charAt(0) !== '"' && value.charAt(0) !== "'")) {
          throw new Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + value + "\"'`");
        }
      }
      var processed = oldProcessStyleValue(key, value);
      if (processed !== "" && !isCustomProperty(key) && key.indexOf("-") !== -1 && hyphenatedCache[key] === void 0) {
        hyphenatedCache[key] = true;
        console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + key.replace(msPattern, "ms-").replace(hyphenPattern, function(str, _char) {
          return _char.toUpperCase();
        }) + "?");
      }
      return processed;
    };
  }
  var contentValuePattern;
  var contentValues;
  var oldProcessStyleValue;
  var msPattern;
  var hyphenPattern;
  var hyphenatedCache;
  var noComponentSelectorMessage = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
  function handleInterpolation(mergedProps, registered, interpolation) {
    if (interpolation == null) {
      return "";
    }
    if (interpolation.__emotion_styles !== void 0) {
      if (interpolation.toString() === "NO_COMPONENT_SELECTOR") {
        throw new Error(noComponentSelectorMessage);
      }
      return interpolation;
    }
    switch (typeof interpolation) {
      case "boolean": {
        return "";
      }
      case "object": {
        if (interpolation.anim === 1) {
          cursor = {
            name: interpolation.name,
            styles: interpolation.styles,
            next: cursor
          };
          return interpolation.name;
        }
        if (interpolation.styles !== void 0) {
          var next2 = interpolation.next;
          if (next2 !== void 0) {
            while (next2 !== void 0) {
              cursor = {
                name: next2.name,
                styles: next2.styles,
                next: cursor
              };
              next2 = next2.next;
            }
          }
          var styles = interpolation.styles + ";";
          if (interpolation.map !== void 0) {
            styles += interpolation.map;
          }
          return styles;
        }
        return createStringFromObject(mergedProps, registered, interpolation);
      }
      case "function": {
        if (mergedProps !== void 0) {
          var previousCursor = cursor;
          var result = interpolation(mergedProps);
          cursor = previousCursor;
          return handleInterpolation(mergedProps, registered, result);
        } else if (true) {
          console.error("Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`");
        }
        break;
      }
      case "string":
        if (true) {
          var matched = [];
          var replaced = interpolation.replace(animationRegex, function(match2, p1, p2) {
            var fakeVarName = "animation" + matched.length;
            matched.push("const " + fakeVarName + " = keyframes`" + p2.replace(/^@keyframes animation-\w+/, "") + "`");
            return "${" + fakeVarName + "}";
          });
          if (matched.length) {
            console.error("`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\nInstead of doing this:\n\n" + [].concat(matched, ["`" + replaced + "`"]).join("\n") + "\n\nYou should wrap it with `css` like this:\n\n" + ("css`" + replaced + "`"));
          }
        }
        break;
    }
    if (registered == null) {
      return interpolation;
    }
    var cached = registered[interpolation];
    return cached !== void 0 ? cached : interpolation;
  }
  function createStringFromObject(mergedProps, registered, obj) {
    var string = "";
    if (Array.isArray(obj)) {
      for (var i = 0; i < obj.length; i++) {
        string += handleInterpolation(mergedProps, registered, obj[i]) + ";";
      }
    } else {
      for (var _key in obj) {
        var value = obj[_key];
        if (typeof value !== "object") {
          if (registered != null && registered[value] !== void 0) {
            string += _key + "{" + registered[value] + "}";
          } else if (isProcessableValue(value)) {
            string += processStyleName(_key) + ":" + processStyleValue(_key, value) + ";";
          }
        } else {
          if (_key === "NO_COMPONENT_SELECTOR" && true) {
            throw new Error(noComponentSelectorMessage);
          }
          if (Array.isArray(value) && typeof value[0] === "string" && (registered == null || registered[value[0]] === void 0)) {
            for (var _i = 0; _i < value.length; _i++) {
              if (isProcessableValue(value[_i])) {
                string += processStyleName(_key) + ":" + processStyleValue(_key, value[_i]) + ";";
              }
            }
          } else {
            var interpolated = handleInterpolation(mergedProps, registered, value);
            switch (_key) {
              case "animation":
              case "animationName": {
                string += processStyleName(_key) + ":" + interpolated + ";";
                break;
              }
              default: {
                if (_key === "undefined") {
                  console.error(UNDEFINED_AS_OBJECT_KEY_ERROR);
                }
                string += _key + "{" + interpolated + "}";
              }
            }
          }
        }
      }
    }
    return string;
  }
  var labelPattern = /label:\s*([^\s;\n{]+)\s*(;|$)/g;
  var sourceMapPattern;
  if (true) {
    sourceMapPattern = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g;
  }
  var cursor;
  var serializeStyles = function serializeStyles2(args, registered, mergedProps) {
    if (args.length === 1 && typeof args[0] === "object" && args[0] !== null && args[0].styles !== void 0) {
      return args[0];
    }
    var stringMode = true;
    var styles = "";
    cursor = void 0;
    var strings = args[0];
    if (strings == null || strings.raw === void 0) {
      stringMode = false;
      styles += handleInterpolation(mergedProps, registered, strings);
    } else {
      if (strings[0] === void 0) {
        console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
      }
      styles += strings[0];
    }
    for (var i = 1; i < args.length; i++) {
      styles += handleInterpolation(mergedProps, registered, args[i]);
      if (stringMode) {
        if (strings[i] === void 0) {
          console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
        }
        styles += strings[i];
      }
    }
    var sourceMap;
    if (true) {
      styles = styles.replace(sourceMapPattern, function(match3) {
        sourceMap = match3;
        return "";
      });
    }
    labelPattern.lastIndex = 0;
    var identifierName = "";
    var match2;
    while ((match2 = labelPattern.exec(styles)) !== null) {
      identifierName += "-" + // $FlowFixMe we know it's not null
      match2[1];
    }
    var name = murmur2(styles) + identifierName;
    if (true) {
      return {
        name,
        styles,
        map: sourceMap,
        next: cursor,
        toString: function toString() {
          return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
        }
      };
    }
    return {
      name,
      styles,
      next: cursor
    };
  };

  // node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js
  init_define_import_meta_env();
  var React = __toESM(require_react_shim());
  var import_react = __toESM(require_react_shim());
  var syncFallback = function syncFallback2(create) {
    return create();
  };
  var useInsertionEffect2 = React["useInsertionEffect"] ? React["useInsertionEffect"] : false;
  var useInsertionEffectAlwaysWithSyncFallback = useInsertionEffect2 || syncFallback;
  var useInsertionEffectWithLayoutFallback = useInsertionEffect2 || import_react.useLayoutEffect;

  // node_modules/@emotion/react/dist/emotion-element-6a883da9.browser.esm.js
  var hasOwnProperty = {}.hasOwnProperty;
  var EmotionCacheContext = /* @__PURE__ */ (0, import_react2.createContext)(
    // we're doing this to avoid preconstruct's dead code elimination in this one case
    // because this module is primarily intended for the browser and node
    // but it's also required in react native and similar environments sometimes
    // and we could have a special build just for that
    // but this is much easier and the native packages
    // might use a different theme context in the future anyway
    typeof HTMLElement !== "undefined" ? /* @__PURE__ */ createCache({
      key: "css"
    }) : null
  );
  if (true) {
    EmotionCacheContext.displayName = "EmotionCacheContext";
  }
  var CacheProvider = EmotionCacheContext.Provider;
  var withEmotionCache = function withEmotionCache2(func) {
    return /* @__PURE__ */ (0, import_react2.forwardRef)(function(props, ref) {
      var cache = (0, import_react2.useContext)(EmotionCacheContext);
      return func(props, cache, ref);
    });
  };
  var ThemeContext = /* @__PURE__ */ (0, import_react2.createContext)({});
  if (true) {
    ThemeContext.displayName = "EmotionThemeContext";
  }
  var getLastPart = function getLastPart2(functionName) {
    var parts = functionName.split(".");
    return parts[parts.length - 1];
  };
  var getFunctionNameFromStackTraceLine = function getFunctionNameFromStackTraceLine2(line2) {
    var match2 = /^\s+at\s+([A-Za-z0-9$.]+)\s/.exec(line2);
    if (match2) return getLastPart(match2[1]);
    match2 = /^([A-Za-z0-9$.]+)@/.exec(line2);
    if (match2) return getLastPart(match2[1]);
    return void 0;
  };
  var internalReactFunctionNames = /* @__PURE__ */ new Set(["renderWithHooks", "processChild", "finishClassComponent", "renderToString"]);
  var sanitizeIdentifier = function sanitizeIdentifier2(identifier2) {
    return identifier2.replace(/\$/g, "-");
  };
  var getLabelFromStackTrace = function getLabelFromStackTrace2(stackTrace) {
    if (!stackTrace) return void 0;
    var lines = stackTrace.split("\n");
    for (var i = 0; i < lines.length; i++) {
      var functionName = getFunctionNameFromStackTraceLine(lines[i]);
      if (!functionName) continue;
      if (internalReactFunctionNames.has(functionName)) break;
      if (/^[A-Z]/.test(functionName)) return sanitizeIdentifier(functionName);
    }
    return void 0;
  };
  var typePropName = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__";
  var labelPropName = "__EMOTION_LABEL_PLEASE_DO_NOT_USE__";
  var createEmotionProps = function createEmotionProps2(type, props) {
    if (typeof props.css === "string" && // check if there is a css declaration
    props.css.indexOf(":") !== -1) {
      throw new Error("Strings are not allowed as css prop values, please wrap it in a css template literal from '@emotion/react' like this: css`" + props.css + "`");
    }
    var newProps = {};
    for (var key in props) {
      if (hasOwnProperty.call(props, key)) {
        newProps[key] = props[key];
      }
    }
    newProps[typePropName] = type;
    if (!!props.css && (typeof props.css !== "object" || typeof props.css.name !== "string" || props.css.name.indexOf("-") === -1)) {
      var label = getLabelFromStackTrace(new Error().stack);
      if (label) newProps[labelPropName] = label;
    }
    return newProps;
  };
  var Insertion = function Insertion2(_ref) {
    var cache = _ref.cache, serialized = _ref.serialized, isStringTag = _ref.isStringTag;
    registerStyles(cache, serialized, isStringTag);
    var rules = useInsertionEffectAlwaysWithSyncFallback(function() {
      return insertStyles(cache, serialized, isStringTag);
    });
    return null;
  };
  var Emotion = /* @__PURE__ */ withEmotionCache(function(props, cache, ref) {
    var cssProp = props.css;
    if (typeof cssProp === "string" && cache.registered[cssProp] !== void 0) {
      cssProp = cache.registered[cssProp];
    }
    var WrappedComponent = props[typePropName];
    var registeredStyles = [cssProp];
    var className = "";
    if (typeof props.className === "string") {
      className = getRegisteredStyles(cache.registered, registeredStyles, props.className);
    } else if (props.className != null) {
      className = props.className + " ";
    }
    var serialized = serializeStyles(registeredStyles, void 0, (0, import_react2.useContext)(ThemeContext));
    if (serialized.name.indexOf("-") === -1) {
      var labelFromStack = props[labelPropName];
      if (labelFromStack) {
        serialized = serializeStyles([serialized, "label:" + labelFromStack + ";"]);
      }
    }
    className += cache.key + "-" + serialized.name;
    var newProps = {};
    for (var key in props) {
      if (hasOwnProperty.call(props, key) && key !== "css" && key !== typePropName && key !== labelPropName) {
        newProps[key] = props[key];
      }
    }
    newProps.ref = ref;
    newProps.className = className;
    return /* @__PURE__ */ (0, import_react2.createElement)(import_react2.Fragment, null, /* @__PURE__ */ (0, import_react2.createElement)(Insertion, {
      cache,
      serialized,
      isStringTag: typeof WrappedComponent === "string"
    }), /* @__PURE__ */ (0, import_react2.createElement)(WrappedComponent, newProps));
  });
  if (true) {
    Emotion.displayName = "EmotionCssPropInternal";
  }

  // node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js
  var import_hoist_non_react_statics = __toESM(require_hoist_non_react_statics_cjs());
  var import_jsx_runtime = __toESM(require_react_shim());
  var Fragment2 = import_jsx_runtime.Fragment;
  function jsx(type, props, key) {
    if (!hasOwnProperty.call(props, "css")) {
      return (0, import_jsx_runtime.jsx)(type, props, key);
    }
    return (0, import_jsx_runtime.jsx)(Emotion, createEmotionProps(type, props), key);
  }
  function jsxs(type, props, key) {
    if (!hasOwnProperty.call(props, "css")) {
      return (0, import_jsx_runtime.jsxs)(type, props, key);
    }
    return (0, import_jsx_runtime.jsxs)(Emotion, createEmotionProps(type, props), key);
  }

  // packages/angelou/dist/index.mjs
  var import_react6 = __toESM(require_react_shim(), 1);
  var import_react7 = __toESM(require_react_shim(), 1);
  var import_react8 = __toESM(require_react_shim(), 1);
  var import_react9 = __toESM(require_react_shim(), 1);
  var import_react10 = __toESM(require_react_shim(), 1);
  var import_react11 = __toESM(require_react_shim(), 1);
  var import_react12 = __toESM(require_react_shim(), 1);
  var import_react13 = __toESM(require_react_shim(), 1);

  // node_modules/@emotion/react/dist/emotion-react.browser.esm.js
  init_define_import_meta_env();
  var import_react4 = __toESM(require_react_shim());
  var import_hoist_non_react_statics2 = __toESM(require_hoist_non_react_statics_cjs());
  var pkg = {
    name: "@emotion/react",
    version: "11.10.6",
    main: "dist/emotion-react.cjs.js",
    module: "dist/emotion-react.esm.js",
    browser: {
      "./dist/emotion-react.esm.js": "./dist/emotion-react.browser.esm.js"
    },
    exports: {
      ".": {
        module: {
          worker: "./dist/emotion-react.worker.esm.js",
          browser: "./dist/emotion-react.browser.esm.js",
          "default": "./dist/emotion-react.esm.js"
        },
        "default": "./dist/emotion-react.cjs.js"
      },
      "./jsx-runtime": {
        module: {
          worker: "./jsx-runtime/dist/emotion-react-jsx-runtime.worker.esm.js",
          browser: "./jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js",
          "default": "./jsx-runtime/dist/emotion-react-jsx-runtime.esm.js"
        },
        "default": "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.js"
      },
      "./_isolated-hnrs": {
        module: {
          worker: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.worker.esm.js",
          browser: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.esm.js",
          "default": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.esm.js"
        },
        "default": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.js"
      },
      "./jsx-dev-runtime": {
        module: {
          worker: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.worker.esm.js",
          browser: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js",
          "default": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.esm.js"
        },
        "default": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.js"
      },
      "./package.json": "./package.json",
      "./types/css-prop": "./types/css-prop.d.ts",
      "./macro": "./macro.js"
    },
    types: "types/index.d.ts",
    files: [
      "src",
      "dist",
      "jsx-runtime",
      "jsx-dev-runtime",
      "_isolated-hnrs",
      "types/*.d.ts",
      "macro.js",
      "macro.d.ts",
      "macro.js.flow"
    ],
    sideEffects: false,
    author: "Emotion Contributors",
    license: "MIT",
    scripts: {
      "test:typescript": "dtslint types"
    },
    dependencies: {
      "@babel/runtime": "^7.18.3",
      "@emotion/babel-plugin": "^11.10.6",
      "@emotion/cache": "^11.10.5",
      "@emotion/serialize": "^1.1.1",
      "@emotion/use-insertion-effect-with-fallbacks": "^1.0.0",
      "@emotion/utils": "^1.2.0",
      "@emotion/weak-memoize": "^0.3.0",
      "hoist-non-react-statics": "^3.3.1"
    },
    peerDependencies: {
      react: ">=16.8.0"
    },
    peerDependenciesMeta: {
      "@types/react": {
        optional: true
      }
    },
    devDependencies: {
      "@definitelytyped/dtslint": "0.0.112",
      "@emotion/css": "11.10.6",
      "@emotion/css-prettifier": "1.1.1",
      "@emotion/server": "11.10.0",
      "@emotion/styled": "11.10.6",
      "html-tag-names": "^1.1.2",
      react: "16.14.0",
      "svg-tag-names": "^1.1.1",
      typescript: "^4.5.5"
    },
    repository: "https://github.com/emotion-js/emotion/tree/main/packages/react",
    publishConfig: {
      access: "public"
    },
    "umd:main": "dist/emotion-react.umd.min.js",
    preconstruct: {
      entrypoints: [
        "./index.js",
        "./jsx-runtime.js",
        "./jsx-dev-runtime.js",
        "./_isolated-hnrs.js"
      ],
      umdName: "emotionReact",
      exports: {
        envConditions: [
          "browser",
          "worker"
        ],
        extra: {
          "./types/css-prop": "./types/css-prop.d.ts",
          "./macro": "./macro.js"
        }
      }
    }
  };
  var warnedAboutCssPropForGlobal = false;
  var Global = /* @__PURE__ */ withEmotionCache(function(props, cache) {
    if (!warnedAboutCssPropForGlobal && // check for className as well since the user is
    // probably using the custom createElement which
    // means it will be turned into a className prop
    // $FlowFixMe I don't really want to add it to the type since it shouldn't be used
    (props.className || props.css)) {
      console.error("It looks like you're using the css prop on Global, did you mean to use the styles prop instead?");
      warnedAboutCssPropForGlobal = true;
    }
    var styles = props.styles;
    var serialized = serializeStyles([styles], void 0, (0, import_react4.useContext)(ThemeContext));
    var sheetRef = (0, import_react4.useRef)();
    useInsertionEffectWithLayoutFallback(function() {
      var key = cache.key + "-global";
      var sheet = new cache.sheet.constructor({
        key,
        nonce: cache.sheet.nonce,
        container: cache.sheet.container,
        speedy: cache.sheet.isSpeedy
      });
      var rehydrating = false;
      var node2 = document.querySelector('style[data-emotion="' + key + " " + serialized.name + '"]');
      if (cache.sheet.tags.length) {
        sheet.before = cache.sheet.tags[0];
      }
      if (node2 !== null) {
        rehydrating = true;
        node2.setAttribute("data-emotion", key);
        sheet.hydrate([node2]);
      }
      sheetRef.current = [sheet, rehydrating];
      return function() {
        sheet.flush();
      };
    }, [cache]);
    useInsertionEffectWithLayoutFallback(function() {
      var sheetRefCurrent = sheetRef.current;
      var sheet = sheetRefCurrent[0], rehydrating = sheetRefCurrent[1];
      if (rehydrating) {
        sheetRefCurrent[1] = false;
        return;
      }
      if (serialized.next !== void 0) {
        insertStyles(cache, serialized.next, true);
      }
      if (sheet.tags.length) {
        var element = sheet.tags[sheet.tags.length - 1].nextElementSibling;
        sheet.before = element;
        sheet.flush();
      }
      cache.insert("", serialized, sheet, false);
    }, [cache, serialized.name]);
    return null;
  });
  if (true) {
    Global.displayName = "EmotionGlobal";
  }
  function css() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return serializeStyles(args);
  }
  var keyframes = function keyframes2() {
    var insertable = css.apply(void 0, arguments);
    var name = "animation-" + insertable.name;
    return {
      name,
      styles: "@keyframes " + name + "{" + insertable.styles + "}",
      anim: 1,
      toString: function toString() {
        return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
      }
    };
  };
  var classnames = function classnames2(args) {
    var len = args.length;
    var i = 0;
    var cls = "";
    for (; i < len; i++) {
      var arg = args[i];
      if (arg == null) continue;
      var toAdd = void 0;
      switch (typeof arg) {
        case "boolean":
          break;
        case "object": {
          if (Array.isArray(arg)) {
            toAdd = classnames2(arg);
          } else {
            if (arg.styles !== void 0 && arg.name !== void 0) {
              console.error("You have passed styles created with `css` from `@emotion/react` package to the `cx`.\n`cx` is meant to compose class names (strings) so you should convert those styles to a class name by passing them to the `css` received from <ClassNames/> component.");
            }
            toAdd = "";
            for (var k in arg) {
              if (arg[k] && k) {
                toAdd && (toAdd += " ");
                toAdd += k;
              }
            }
          }
          break;
        }
        default: {
          toAdd = arg;
        }
      }
      if (toAdd) {
        cls && (cls += " ");
        cls += toAdd;
      }
    }
    return cls;
  };
  function merge(registered, css2, className) {
    var registeredStyles = [];
    var rawClassName = getRegisteredStyles(registered, registeredStyles, className);
    if (registeredStyles.length < 2) {
      return className;
    }
    return rawClassName + css2(registeredStyles);
  }
  var Insertion3 = function Insertion4(_ref) {
    var cache = _ref.cache, serializedArr = _ref.serializedArr;
    var rules = useInsertionEffectAlwaysWithSyncFallback(function() {
      for (var i = 0; i < serializedArr.length; i++) {
        var res = insertStyles(cache, serializedArr[i], false);
      }
    });
    return null;
  };
  var ClassNames = /* @__PURE__ */ withEmotionCache(function(props, cache) {
    var hasRendered = false;
    var serializedArr = [];
    var css2 = function css3() {
      if (hasRendered && true) {
        throw new Error("css can only be used during render");
      }
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      var serialized = serializeStyles(args, cache.registered);
      serializedArr.push(serialized);
      registerStyles(cache, serialized, false);
      return cache.key + "-" + serialized.name;
    };
    var cx = function cx2() {
      if (hasRendered && true) {
        throw new Error("cx can only be used during render");
      }
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      return merge(cache.registered, css2, classnames(args));
    };
    var content = {
      css: css2,
      cx,
      theme: (0, import_react4.useContext)(ThemeContext)
    };
    var ele = props.children(content);
    hasRendered = true;
    return /* @__PURE__ */ (0, import_react4.createElement)(import_react4.Fragment, null, /* @__PURE__ */ (0, import_react4.createElement)(Insertion3, {
      cache,
      serializedArr
    }), ele);
  });
  if (true) {
    ClassNames.displayName = "EmotionClassNames";
  }
  if (true) {
    isBrowser2 = true;
    isTestEnv = typeof jest !== "undefined" || typeof vi !== "undefined";
    if (isBrowser2 && !isTestEnv) {
      globalContext = // $FlowIgnore
      typeof globalThis !== "undefined" ? globalThis : isBrowser2 ? window : global;
      globalKey = "__EMOTION_REACT_" + pkg.version.split(".")[0] + "__";
      if (globalContext[globalKey]) {
        console.warn("You are loading @emotion/react when it is already loaded. Running multiple instances may cause problems. This can happen if multiple versions are used, or if multiple builds of the same version are used.");
      }
      globalContext[globalKey] = true;
    }
  }
  var isBrowser2;
  var isTestEnv;
  var globalContext;
  var globalKey;

  // packages/angelou/dist/index.mjs
  var import_react15 = __toESM(require_react_shim(), 1);
  var import_react16 = __toESM(require_react_shim(), 1);
  var import_react17 = __toESM(require_react_shim(), 1);
  var import_react18 = __toESM(require_react_shim(), 1);
  var import_react19 = __toESM(require_react_shim(), 1);
  var import_react21 = __toESM(require_react_shim(), 1);
  var import_react22 = __toESM(require_react_shim(), 1);
  var import_react_dom = __toESM(require_react_dom_shim(), 1);
  var import_react24 = __toESM(require_react_shim(), 1);
  var import_react25 = __toESM(require_react_shim(), 1);
  var import_react26 = __toESM(require_react_shim(), 1);
  var __defProp2 = Object.defineProperty;
  var __export2 = (target, all) => {
    for (var name in all)
      __defProp2(target, name, { get: all[name], enumerable: true });
  };
  var tokens_exports = {};
  __export2(tokens_exports, {
    breakpoint: () => breakpoint,
    color: () => color,
    duration: () => duration,
    easing: () => easing,
    fontFamily: () => fontFamily,
    fontSize: () => fontSize,
    fontWeight: () => fontWeight,
    layout: () => layout,
    lineHeight: () => lineHeight,
    radius: () => radius,
    shadow: () => shadow,
    space: () => space,
    tokenValues: () => tokenValues
  });
  var color = {
    uiBlack: "var(--ui-black)",
    uiWhite: "var(--ui-white)",
    uiCore25: "var(--ui-core-25)",
    uiCore50: "var(--ui-core-50)",
    uiCore100: "var(--ui-core-100)",
    uiCore200: "var(--ui-core-200)",
    uiCore300: "var(--ui-core-300)",
    uiCore500: "var(--ui-core-500)",
    uiCore600: "var(--ui-core-600)",
    uiCore700: "var(--ui-core-700)",
    uiCore800: "var(--ui-core-800)",
    uiBlue50: "var(--ui-blue-50)",
    uiBlue100: "var(--ui-blue-100)",
    uiBlue300: "var(--ui-blue-300)",
    uiBlue500: "var(--ui-blue-500)",
    uiBlue600: "var(--ui-blue-600)",
    uiBlue700: "var(--ui-blue-700)",
    uiBlue800: "var(--ui-blue-800)",
    uiTeal25: "var(--ui-teal-25)",
    uiTeal50: "var(--ui-teal-50)",
    uiTeal100: "var(--ui-teal-100)",
    uiTeal300: "var(--ui-teal-300)",
    uiTeal500: "var(--ui-teal-500)",
    uiTeal600: "var(--ui-teal-600)",
    uiTeal700: "var(--ui-teal-700)",
    uiTeal800: "var(--ui-teal-800)",
    uiBeige25: "var(--ui-beige-25)",
    uiBeige50: "var(--ui-beige-50)",
    uiBeige100: "var(--ui-beige-100)",
    uiBeige300: "var(--ui-beige-300)",
    uiBeige500: "var(--ui-beige-500)",
    uiBeige600: "var(--ui-beige-600)",
    uiBeige700: "var(--ui-beige-700)",
    uiBeige800: "var(--ui-beige-800)",
    uiRed50: "var(--ui-red-50)",
    uiRed100: "var(--ui-red-100)",
    uiRed300: "var(--ui-red-300)",
    uiRed400: "var(--ui-red-400)",
    uiRed500: "var(--ui-red-500)",
    uiRed600: "var(--ui-red-600)",
    uiRed700: "var(--ui-red-700)",
    uiRed800: "var(--ui-red-800)",
    uiGreen50: "var(--ui-green-50)",
    uiGreen100: "var(--ui-green-100)",
    uiGreen300: "var(--ui-green-300)",
    uiGreen400: "var(--ui-green-400)",
    uiGreen500: "var(--ui-green-500)",
    uiGreen600: "var(--ui-green-600)",
    uiGreen700: "var(--ui-green-700)",
    uiGreen800: "var(--ui-green-800)",
    uiYellow50: "var(--ui-yellow-50)",
    uiYellow100: "var(--ui-yellow-100)",
    uiYellow300: "var(--ui-yellow-300)",
    uiYellow400: "var(--ui-yellow-400)",
    uiYellow500: "var(--ui-yellow-500)",
    uiYellow600: "var(--ui-yellow-600)",
    uiYellow700: "var(--ui-yellow-700)",
    uiYellow800: "var(--ui-yellow-800)",
    uiPink25: "var(--ui-pink-25)",
    uiPink50: "var(--ui-pink-50)",
    uiPink100: "var(--ui-pink-100)",
    uiPink300: "var(--ui-pink-300)",
    uiPink500: "var(--ui-pink-500)",
    uiPink600: "var(--ui-pink-600)",
    uiPink700: "var(--ui-pink-700)",
    uiPink800: "var(--ui-pink-800)",
    uiPurple25: "var(--ui-purple-25)",
    uiPurple50: "var(--ui-purple-50)",
    uiPurple100: "var(--ui-purple-100)",
    uiPurple200: "var(--ui-purple-200)",
    uiPurple300: "var(--ui-purple-300)",
    uiPurple400: "var(--ui-purple-400)",
    uiPurple500: "var(--ui-purple-500)",
    uiPurple600: "var(--ui-purple-600)",
    uiPurple700: "var(--ui-purple-700)",
    uiPurple800: "var(--ui-purple-800)",
    uiNeutral25: "var(--ui-neutral-25)",
    uiNeutral50: "var(--ui-neutral-50)",
    uiNeutral100: "var(--ui-neutral-100)",
    uiNeutral200: "var(--ui-neutral-200)",
    uiNeutral300: "var(--ui-neutral-300)",
    uiNeutral400: "var(--ui-neutral-400)",
    uiNeutral500: "var(--ui-neutral-500)",
    uiNeutral600: "var(--ui-neutral-600)",
    uiNeutral700: "var(--ui-neutral-700)",
    uiNeutral800: "var(--ui-neutral-800)",
    statusSuccess50: "var(--status-success-50)",
    statusSuccess100: "var(--status-success-100)",
    statusSuccess300: "var(--status-success-300)",
    statusSuccess400: "var(--status-success-400)",
    statusSuccess500: "var(--status-success-500)",
    statusSuccess600: "var(--status-success-600)",
    statusSuccess700: "var(--status-success-700)",
    statusInfo50: "var(--status-info-50)",
    statusInfo100: "var(--status-info-100)",
    statusInfo300: "var(--status-info-300)",
    statusInfo500: "var(--status-info-500)",
    statusInfo600: "var(--status-info-600)",
    statusInfo700: "var(--status-info-700)",
    statusDanger50: "var(--status-danger-50)",
    statusDanger100: "var(--status-danger-100)",
    statusDanger300: "var(--status-danger-300)",
    statusDanger400: "var(--status-danger-400)",
    statusDanger500: "var(--status-danger-500)",
    statusDanger600: "var(--status-danger-600)",
    statusDanger700: "var(--status-danger-700)",
    statusWarning50: "var(--status-warning-50)",
    statusWarning100: "var(--status-warning-100)",
    statusWarning300: "var(--status-warning-300)",
    statusWarning400: "var(--status-warning-400)",
    statusWarning500: "var(--status-warning-500)",
    statusWarning600: "var(--status-warning-600)",
    statusWarning700: "var(--status-warning-700)",
    brandBlue25: "var(--brand-blue-25)",
    brandBlue50: "var(--brand-blue-50)",
    brandBlue100: "var(--brand-blue-100)",
    brandBlue200: "var(--brand-blue-200)",
    brandBlue300: "var(--brand-blue-300)",
    brandBlue500: "var(--brand-blue-500)",
    brandBlue600: "var(--brand-blue-600)",
    brandBlue700: "var(--brand-blue-700)",
    brandAqua25: "var(--brand-aqua-25)",
    brandAqua50: "var(--brand-aqua-50)",
    brandAqua100: "var(--brand-aqua-100)",
    brandAqua200: "var(--brand-aqua-200)",
    brandAqua300: "var(--brand-aqua-300)",
    brandAqua500: "var(--brand-aqua-500)",
    brandAqua600: "var(--brand-aqua-600)",
    brandAqua700: "var(--brand-aqua-700)",
    brandBisque50: "var(--brand-bisque-50)",
    brandBisque100: "var(--brand-bisque-100)",
    brandBisque200: "var(--brand-bisque-200)",
    brandBisque300: "var(--brand-bisque-300)",
    brandBisque500: "var(--brand-bisque-500)",
    brandBisque600: "var(--brand-bisque-600)",
    brandBisque700: "var(--brand-bisque-700)",
    productEla25: "var(--product-ela-25)",
    productEla50: "var(--product-ela-50)",
    productEla100: "var(--product-ela-100)",
    productEla200: "var(--product-ela-200)",
    productEla300: "var(--product-ela-300)",
    productEla500: "var(--product-ela-500)",
    productEla600: "var(--product-ela-600)",
    productEla700: "var(--product-ela-700)",
    productSocialstudies25: "var(--product-socialstudies-25)",
    productSocialstudies50: "var(--product-socialstudies-50)",
    productSocialstudies100: "var(--product-socialstudies-100)",
    productSocialstudies200: "var(--product-socialstudies-200)",
    productSocialstudies300: "var(--product-socialstudies-300)",
    productSocialstudies500: "var(--product-socialstudies-500)",
    productSocialstudies600: "var(--product-socialstudies-600)",
    productSocialstudies700: "var(--product-socialstudies-700)",
    productScience25: "var(--product-science-25)",
    productScience50: "var(--product-science-50)",
    productScience100: "var(--product-science-100)",
    productScience200: "var(--product-science-200)",
    productScience300: "var(--product-science-300)",
    productScience500: "var(--product-science-500)",
    productScience600: "var(--product-science-600)",
    productScience700: "var(--product-science-700)",
    productFormative25: "var(--product-formative-25)",
    productFormative50: "var(--product-formative-50)",
    productFormative100: "var(--product-formative-100)",
    productFormative300: "var(--product-formative-300)",
    productFormative500: "var(--product-formative-500)",
    productFormative600: "var(--product-formative-600)",
    productFormative700: "var(--product-formative-700)",
    productEverwrite25: "var(--product-everwrite-25)",
    productEverwrite50: "var(--product-everwrite-50)",
    productEverwrite100: "var(--product-everwrite-100)",
    productEverwrite200: "var(--product-everwrite-200)",
    productEverwrite300: "var(--product-everwrite-300)",
    productEverwrite500: "var(--product-everwrite-500)",
    productEverwrite600: "var(--product-everwrite-600)",
    productEverwrite700: "var(--product-everwrite-700)",
    fgPrimary: "var(--fg-primary)",
    fgSecondary: "var(--fg-secondary)",
    fgTertiary: "var(--fg-tertiary)",
    fgDisabled: "var(--fg-disabled)",
    fgInverse: "var(--fg-inverse)",
    fgLink: "var(--fg-link)",
    fgLinkHover: "var(--fg-link-hover)",
    bgPage: "var(--bg-page)",
    bgSurface: "var(--bg-surface)",
    bgSubtle: "var(--bg-subtle)",
    bgMuted: "var(--bg-muted)",
    bgInverse: "var(--bg-inverse)",
    bgAccent: "var(--bg-accent)",
    borderSubtle: "var(--border-subtle)",
    borderDefault: "var(--border-default)",
    borderStrong: "var(--border-strong)",
    borderInverse: "var(--border-inverse)",
    borderFocus: "var(--border-focus)"
  };
  var fontFamily = {
    sans: "var(--font-sans)",
    display: "var(--font-display)",
    mono: "var(--font-mono)"
  };
  var fontWeight = {
    book: "var(--fw-book)",
    medium: "var(--fw-medium)",
    bold: "var(--fw-bold)"
  };
  var fontSize = {
    "12": "var(--fs-12)",
    "14": "var(--fs-14)",
    "16": "var(--fs-16)",
    "18": "var(--fs-18)",
    "20": "var(--fs-20)",
    "24": "var(--fs-24)",
    "32": "var(--fs-32)",
    "40": "var(--fs-40)"
  };
  var lineHeight = {
    "16": "var(--lh-16)",
    "20": "var(--lh-20)",
    "24": "var(--lh-24)",
    "32": "var(--lh-32)",
    "40": "var(--lh-40)",
    "48": "var(--lh-48)"
  };
  var space = {
    "1": "var(--space-1)",
    "2": "var(--space-2)",
    "3": "var(--space-3)",
    "4": "var(--space-4)",
    "5": "var(--space-5)",
    "6": "var(--space-6)",
    "7": "var(--space-7)",
    "8": "var(--space-8)",
    "9": "var(--space-9)",
    "10": "var(--space-10)"
  };
  var breakpoint = {
    infinity: "var(--bp-infinity)",
    large: "var(--bp-large)",
    medium: "var(--bp-medium)",
    small: "var(--bp-small)"
  };
  var radius = {
    xs: "var(--radius-xs)",
    sm: "var(--radius-sm)",
    md: "var(--radius-md)",
    lg: "var(--radius-lg)",
    xl: "var(--radius-xl)",
    pill: "var(--radius-pill)"
  };
  var shadow = {
    xs: "var(--shadow-xs)",
    sm: "var(--shadow-sm)",
    md: "var(--shadow-md)",
    lg: "var(--shadow-lg)",
    xl: "var(--shadow-xl)",
    focus: "var(--shadow-focus)"
  };
  var duration = {
    fast: "var(--dur-fast)",
    base: "var(--dur-base)",
    slow: "var(--dur-slow)"
  };
  var easing = {
    standard: "var(--ease-standard)",
    emphasis: "var(--ease-emphasis)"
  };
  var layout = {
    maxWidth: "var(--content-max-width)"
  };
  var tokenValues = {
    "--ui-black": "#000000",
    "--ui-white": "#FFFFFF",
    "--ui-core-25": "#E5EFFF",
    "--ui-core-50": "#CCE1FF",
    "--ui-core-100": "#A6CCFF",
    "--ui-core-200": "#6BA8FF",
    "--ui-core-300": "#3688FD",
    "--ui-core-500": "#0A6EFA",
    "--ui-core-600": "#0F3FDE",
    "--ui-core-700": "#082C88",
    "--ui-core-800": "#060A49",
    "--ui-blue-50": "#CCE1FF",
    "--ui-blue-100": "#A6CCFF",
    "--ui-blue-300": "#6BA8FF",
    "--ui-blue-500": "#0A6EFA",
    "--ui-blue-600": "#0F3FDE",
    "--ui-blue-700": "#082C88",
    "--ui-blue-800": "#060A49",
    "--ui-teal-25": "#F4FDFF",
    "--ui-teal-50": "#E9FCFF",
    "--ui-teal-100": "#ABF0FD",
    "--ui-teal-300": "#6AE0F8",
    "--ui-teal-500": "#42CAE7",
    "--ui-teal-600": "#31AFCB",
    "--ui-teal-700": "#208095",
    "--ui-teal-800": "#0E5767",
    "--ui-beige-25": "#FFF8EE",
    "--ui-beige-50": "#FFF4E5",
    "--ui-beige-100": "#FDE7C7",
    "--ui-beige-300": "#F8D6A7",
    "--ui-beige-500": "#E5C08C",
    "--ui-beige-600": "#C7A475",
    "--ui-beige-700": "#8B7351",
    "--ui-beige-800": "#644F31",
    "--ui-red-50": "#FFE2E2",
    "--ui-red-100": "#FEC4C5",
    "--ui-red-300": "#FF6B6B",
    "--ui-red-400": "#EA5252",
    "--ui-red-500": "#DD3636",
    "--ui-red-600": "#C32113",
    "--ui-red-700": "#A50000",
    "--ui-red-800": "#6E0000",
    "--ui-green-50": "#D3FBF2",
    "--ui-green-100": "#B9F9EA",
    "--ui-green-300": "#25C09B",
    "--ui-green-400": "#0C9F84",
    "--ui-green-500": "#0F8670",
    "--ui-green-600": "#17786C",
    "--ui-green-700": "#085E4A",
    "--ui-green-800": "#033F31",
    "--ui-yellow-50": "#FFF8D2",
    "--ui-yellow-100": "#FFF1AB",
    "--ui-yellow-300": "#FFE45B",
    "--ui-yellow-400": "#FEC800",
    "--ui-yellow-500": "#DFA102",
    "--ui-yellow-600": "#BC8100",
    "--ui-yellow-700": "#A06A00",
    "--ui-yellow-800": "#6E4900",
    "--ui-pink-25": "#FEEAF9",
    "--ui-pink-50": "#FFDCF5",
    "--ui-pink-100": "#FFBCE4",
    "--ui-pink-300": "#FF80BD",
    "--ui-pink-500": "#DA2C81",
    "--ui-pink-600": "#A20154",
    "--ui-pink-700": "#7D0145",
    "--ui-pink-800": "#620036",
    "--ui-purple-25": "#F2EDFA",
    "--ui-purple-50": "#E7DCF6",
    "--ui-purple-100": "#D3BCEC",
    "--ui-purple-200": "#B582DA",
    "--ui-purple-300": "#B582DA",
    "--ui-purple-400": "#8B1EA4",
    "--ui-purple-500": "#8B1EA4",
    "--ui-purple-600": "#720780",
    "--ui-purple-700": "#54005C",
    "--ui-purple-800": "#3D0043",
    "--ui-neutral-25": "#F7F8F8",
    "--ui-neutral-50": "#F0F1F2",
    "--ui-neutral-100": "#E1E3E5",
    "--ui-neutral-200": "#A8AAB0",
    "--ui-neutral-300": "#8D8D96",
    "--ui-neutral-400": "#77767A",
    "--ui-neutral-500": "#5B5A61",
    "--ui-neutral-600": "#424147",
    "--ui-neutral-700": "#1D1D1D",
    "--ui-neutral-800": "#1D1D1D",
    "--status-success-50": "#D3FBF2",
    "--status-success-100": "#B9F9EA",
    "--status-success-300": "#25C09B",
    "--status-success-400": "#0C9F84",
    "--status-success-500": "#0F8670",
    "--status-success-600": "#17786C",
    "--status-success-700": "#085E4A",
    "--status-info-50": "#E5EFFF",
    "--status-info-100": "#A6CCFF",
    "--status-info-300": "#6BA8FF",
    "--status-info-500": "#0A6EFA",
    "--status-info-600": "#0438E5",
    "--status-info-700": "#0B1386",
    "--status-danger-50": "#FFE2E2",
    "--status-danger-100": "#FEC4C5",
    "--status-danger-300": "#FF6B6B",
    "--status-danger-400": "#EA5252",
    "--status-danger-500": "#DD3636",
    "--status-danger-600": "#C32113",
    "--status-danger-700": "#A50000",
    "--status-warning-50": "#FFF8D2",
    "--status-warning-100": "#FFF1AB",
    "--status-warning-300": "#FFE45B",
    "--status-warning-400": "#FEC800",
    "--status-warning-500": "#DFA102",
    "--status-warning-600": "#BC8100",
    "--status-warning-700": "#A06A00",
    "--brand-blue-25": "#E5EFFF",
    "--brand-blue-50": "#CCE1FF",
    "--brand-blue-100": "#A6CCFF",
    "--brand-blue-200": "#6BA8FF",
    "--brand-blue-300": "#3688FD",
    "--brand-blue-500": "#0A6EFA",
    "--brand-blue-600": "#0438E5",
    "--brand-blue-700": "#0B1386",
    "--brand-aqua-25": "#E9FCFF",
    "--brand-aqua-50": "#D4F8FE",
    "--brand-aqua-100": "#ABF0FD",
    "--brand-aqua-200": "#87E8FB",
    "--brand-aqua-300": "#6AE0F8",
    "--brand-aqua-500": "#42CAE7",
    "--brand-aqua-600": "#31AFCB",
    "--brand-aqua-700": "#208095",
    "--brand-bisque-50": "#FFF4E5",
    "--brand-bisque-100": "#FDE7C7",
    "--brand-bisque-200": "#F8D6A7",
    "--brand-bisque-300": "#E5C08C",
    "--brand-bisque-500": "#C7A475",
    "--brand-bisque-600": "#8B7351",
    "--brand-bisque-700": "#564732",
    "--product-ela-25": "#FFF0F0",
    "--product-ela-50": "#FFE2E2",
    "--product-ela-100": "#FEC4C5",
    "--product-ela-200": "#FD8C8D",
    "--product-ela-300": "#FC5B5D",
    "--product-ela-500": "#EB0404",
    "--product-ela-600": "#D30000",
    "--product-ela-700": "#A50000",
    "--product-socialstudies-25": "#FEEAF9",
    "--product-socialstudies-50": "#FFDCF5",
    "--product-socialstudies-100": "#FFBCE4",
    "--product-socialstudies-200": "#FF80BD",
    "--product-socialstudies-300": "#EC4E9B",
    "--product-socialstudies-500": "#DA2C81",
    "--product-socialstudies-600": "#A20154",
    "--product-socialstudies-700": "#7D0145",
    "--product-science-25": "#FFF4EC",
    "--product-science-50": "#FFE9D8",
    "--product-science-100": "#FED0AD",
    "--product-science-200": "#F5A15C",
    "--product-science-300": "#EB7E19",
    "--product-science-500": "#DA6D00",
    "--product-science-600": "#B85E00",
    "--product-science-700": "#944E00",
    "--product-formative-25": "#FFF8E8",
    "--product-formative-50": "#FFF1D1",
    "--product-formative-100": "#FEE3A4",
    "--product-formative-300": "#F6C852",
    "--product-formative-500": "#E8AB14",
    "--product-formative-600": "#BC8100",
    "--product-formative-700": "#A06A00",
    "--product-everwrite-25": "#F2EDFA",
    "--product-everwrite-50": "#E7DCF6",
    "--product-everwrite-100": "#D3BCEC",
    "--product-everwrite-200": "#B582DA",
    "--product-everwrite-300": "#A354C9",
    "--product-everwrite-500": "#8B1EA4",
    "--product-everwrite-600": "#720780",
    "--product-everwrite-700": "#54005C",
    "--fg-primary": "var(--ui-neutral-700)",
    "--fg-secondary": "var(--ui-neutral-500)",
    "--fg-tertiary": "var(--ui-neutral-400)",
    "--fg-disabled": "var(--ui-neutral-300)",
    "--fg-inverse": "var(--ui-white)",
    "--fg-link": "var(--ui-core-500)",
    "--fg-link-hover": "var(--ui-core-600)",
    "--bg-page": "var(--ui-white)",
    "--bg-surface": "var(--ui-white)",
    "--bg-subtle": "var(--ui-neutral-25)",
    "--bg-muted": "var(--ui-neutral-50)",
    "--bg-inverse": "var(--ui-neutral-700)",
    "--bg-accent": "var(--ui-core-500)",
    "--border-subtle": "rgba(29, 29, 29, 0.16)",
    "--border-default": "var(--ui-neutral-100)",
    "--border-strong": "var(--ui-neutral-300)",
    "--border-inverse": "rgba(255, 255, 255, 0.16)",
    "--border-focus": "var(--ui-core-500)",
    "--font-sans": "'Circular', 'Nunito', system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
    "--font-display": "'Noto Serif', Georgia, 'Times New Roman', serif",
    "--font-mono": "ui-monospace, SFMono-Regular, 'SF Mono', Menlo, Monaco, Consolas, monospace",
    "--fw-book": "400",
    "--fw-medium": "500",
    "--fw-bold": "700",
    "--fs-12": "0.75rem",
    "--fs-14": "0.875rem",
    "--fs-16": "1rem",
    "--fs-18": "1.125rem",
    "--fs-20": "1.25rem",
    "--fs-24": "1.5rem",
    "--fs-32": "2rem",
    "--fs-40": "2.5rem",
    "--lh-16": "1rem",
    "--lh-20": "1.25rem",
    "--lh-24": "1.5rem",
    "--lh-32": "2rem",
    "--lh-40": "2.5rem",
    "--lh-48": "3rem",
    "--space-1": "4px",
    "--space-2": "8px",
    "--space-3": "16px",
    "--space-4": "24px",
    "--space-5": "32px",
    "--space-6": "40px",
    "--space-7": "48px",
    "--space-8": "64px",
    "--space-9": "80px",
    "--space-10": "120px",
    "--bp-infinity": "1441px",
    "--bp-large": "1025px",
    "--bp-medium": "769px",
    "--bp-small": "569px",
    "--content-max-width": "1680px",
    "--radius-xs": "4px",
    "--radius-sm": "8px",
    "--radius-md": "12px",
    "--radius-lg": "16px",
    "--radius-xl": "24px",
    "--radius-pill": "999px",
    "--shadow-xs": "0 1px 2px rgba(29, 29, 29, 0.06)",
    "--shadow-sm": "0 2px 4px rgba(29, 29, 29, 0.08)",
    "--shadow-md": "0 4px 12px rgba(29, 29, 29, 0.10)",
    "--shadow-lg": "0 8px 24px rgba(29, 29, 29, 0.12)",
    "--shadow-xl": "0 16px 40px rgba(29, 29, 29, 0.16)",
    "--shadow-focus": "0 0 0 3px rgba(10, 110, 250, 0.35)",
    "--ease-standard": "cubic-bezier(0.2, 0, 0, 1)",
    "--ease-emphasis": "cubic-bezier(0.3, 0, 0, 1)",
    "--dur-fast": "120ms",
    "--dur-base": "200ms",
    "--dur-slow": "320ms"
  };
  var THICKNESS = "1px";
  var sixteenPercent = (token2) => `color-mix(in srgb, ${token2} 16%, transparent)`;
  var rootCss = {
    display: "block",
    flex: "none",
    boxSizing: "border-box",
    margin: 0,
    padding: 0,
    border: 0,
    borderRadius: 0,
    boxShadow: "none",
    backgroundImage: "none",
    pointerEvents: "none"
  };
  var tintCss = {
    light: { backgroundColor: sixteenPercent(color.uiNeutral700) },
    dark: { backgroundColor: sixteenPercent(color.fgInverse) }
  };
  var orientationCss = (orientation, length2) => orientation === "horizontal" ? { width: length2, height: THICKNESS } : { width: THICKNESS, height: length2, alignSelf: "stretch" };
  var Divider = (0, import_react5.forwardRef)(function Divider2(props, ref) {
    const {
      tint: tint3 = "light",
      orientation = "horizontal",
      length: length2 = "100%",
      decorative = true,
      css: consumerCss,
      ...rest
    } = props;
    const resolvedLength = typeof length2 === "number" ? `${length2}px` : length2;
    const ariaProps = decorative ? { "aria-hidden": true } : { role: "separator", "aria-orientation": orientation };
    return /* @__PURE__ */ jsx(
      "div",
      {
        ref,
        ...rest,
        ...ariaProps,
        "data-tint": tint3,
        "data-orientation": orientation,
        css: [
          rootCss,
          tintCss[tint3],
          orientationCss(orientation, resolvedLength),
          consumerCss
        ]
      }
    );
  });
  var Divider_default = Divider;
  var HEIGHT = {
    lg: "48px",
    md: "32px",
    sm: "24px"
  };
  var TOUCH_TARGET = "44px";
  var SM_RADIUS = "6px";
  var ICON_LABEL_MIN_WIDTH = "80px";
  var ICON_LABEL_MAX_WIDTH = "536px";
  var ICON_SIZE_WITH_LABEL = 16;
  var ICON_SIZE_ONLY = {
    lg: 24,
    md: 24,
    sm: 16
  };
  var OVERLAY_DARK = `color-mix(in srgb, ${color.uiNeutral700} 8%, transparent)`;
  var OVERLAY_LIGHT = `color-mix(in srgb, ${color.uiWhite} 8%, transparent)`;
  var DISABLED_OPACITY = 0.4;
  var BORDER = "1px";
  var inset = (value) => `calc(${value} - ${BORDER})`;
  var TWELVE = `calc(${space["2"]} + ${space["1"]})`;
  var rootCss2 = {
    position: "relative",
    isolation: "isolate",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: space["2"],
    boxSizing: "border-box",
    margin: 0,
    borderWidth: BORDER,
    borderStyle: "solid",
    borderColor: "transparent",
    borderRadius: radius.sm,
    fontFamily: fontFamily.sans,
    fontWeight: fontWeight.book,
    fontSize: fontSize["16"],
    lineHeight: lineHeight["16"],
    textAlign: "center",
    textDecoration: "none",
    cursor: "pointer",
    appearance: "none",
    // The hover and press overlay: under the label, over the fill.
    "&::before": {
      content: '""',
      position: "absolute",
      inset: 0,
      zIndex: -1,
      borderRadius: "inherit",
      backgroundColor: OVERLAY_DARK,
      opacity: 0,
      pointerEvents: "none",
      transitionProperty: "opacity",
      transitionDuration: duration.fast,
      transitionTimingFunction: easing.standard
    },
    // Hover is decoration on touch; only a real pointer shows it.
    "@media (hover: hover)": {
      "&:enabled:hover::before": { opacity: 1 }
    },
    "&:enabled:active::before": { opacity: 1 },
    "@media (prefers-reduced-motion: reduce)": {
      "&::before": { transition: "none" }
    },
    "&:focus-visible": {
      outline: `2px solid ${color.uiCore700}`,
      outlineOffset: "2px"
    },
    "&:disabled": {
      opacity: DISABLED_OPACITY,
      cursor: "not-allowed"
    },
    '&[aria-busy="true"]': {
      cursor: "progress"
    },
    '&[aria-busy="true"]::before': { opacity: 0 },
    // Touch surfaces get a 44px hit area without changing the visual box.
    "@media (pointer: coarse)": {
      "&::after": {
        content: '""',
        position: "absolute",
        top: "50%",
        left: "50%",
        width: `max(100%, ${TOUCH_TARGET})`,
        height: `max(100%, ${TOUCH_TARGET})`,
        transform: "translate(-50%, -50%)"
      }
    }
  };
  var sizeCss = {
    lg: {
      minHeight: HEIGHT.lg,
      paddingBlock: inset(space["3"]),
      paddingInline: inset(space["3"])
    },
    md: {
      minHeight: HEIGHT.md,
      paddingBlock: inset(space["2"]),
      paddingInline: inset(space["3"])
    },
    sm: {
      minHeight: HEIGHT.sm,
      paddingBlock: inset(space["1"]),
      paddingInline: inset(space["3"]),
      borderRadius: SM_RADIUS
    }
  };
  var withIconCss = {
    lg: { minWidth: ICON_LABEL_MIN_WIDTH, maxWidth: ICON_LABEL_MAX_WIDTH },
    md: {
      minWidth: ICON_LABEL_MIN_WIDTH,
      maxWidth: ICON_LABEL_MAX_WIDTH,
      paddingInline: inset(space["2"])
    },
    sm: {
      minWidth: ICON_LABEL_MIN_WIDTH,
      maxWidth: ICON_LABEL_MAX_WIDTH,
      paddingInline: inset(space["2"])
    }
  };
  var iconOnlyCss = {
    lg: { width: HEIGHT.lg, padding: inset(TWELVE) },
    md: { width: HEIGHT.md, padding: inset(space["1"]) },
    sm: { width: HEIGHT.sm, padding: inset(space["1"]) }
  };
  var fullWidthCss = {
    display: "flex",
    width: "100%",
    maxWidth: "none"
  };
  var variantCss = {
    primary: { backgroundColor: color.uiCore700, color: color.uiWhite },
    secondary: {
      backgroundColor: "transparent",
      borderColor: color.uiCore700,
      color: color.uiCore700
    },
    ghost: { backgroundColor: "transparent", color: color.uiCore700 },
    muted: {
      backgroundColor: color.uiNeutral25,
      borderColor: color.uiNeutral100,
      color: color.uiCore700
    },
    destructive: { backgroundColor: color.uiRed600, color: color.uiWhite },
    polarPrimary: {
      backgroundColor: color.uiNeutral700,
      color: color.uiWhite,
      "&::before": { backgroundColor: OVERLAY_LIGHT }
    },
    polarSecondary: {
      backgroundColor: "transparent",
      borderColor: color.uiNeutral700,
      color: color.uiNeutral700
    },
    polarTertiary: { backgroundColor: "transparent", color: color.uiNeutral700 },
    polarMuted: {
      backgroundColor: color.uiNeutral25,
      borderColor: color.uiNeutral100,
      color: color.uiNeutral700
    }
  };
  var forcedStateCss = (state) => state === "focus" ? { outline: `2px solid ${color.uiCore700}`, outlineOffset: "2px" } : { "&::before": { opacity: 1 } };
  var comboCss = {
    lg: { gap: space["3"], paddingInline: inset(space["3"]) },
    md: { gap: space["2"], paddingInline: inset(space["2"]) },
    sm: { gap: space["2"], paddingInline: inset(space["2"]) }
  };
  var iconCss = (px) => ({
    display: "inline-flex",
    flex: "none",
    alignItems: "center",
    justifyContent: "center",
    width: `${px}px`,
    height: `${px}px`,
    // The box follows the contract; a caller's explicit Icon size still sets the glyph.
    "& > svg": { display: "block" }
  });
  var DIVIDER_COLOR = {
    secondary: color.uiCore700,
    muted: color.uiNeutral100,
    polarSecondary: color.uiNeutral700,
    polarMuted: color.uiNeutral100
  };
  var dividerCss = (variant) => {
    var _a;
    return {
      alignSelf: "stretch",
      width: BORDER,
      flex: "none",
      backgroundColor: (_a = DIVIDER_COLOR[variant]) != null ? _a : "currentColor"
    };
  };
  var Button = (0, import_react6.forwardRef)(
    function Button2(props, ref) {
      const {
        variant = "primary",
        size = "lg",
        icon,
        iconPosition = "right",
        state,
        loading = false,
        disabled = false,
        fullWidth = false,
        type = "button",
        children,
        onClick,
        css: consumerCss,
        ...rest
      } = props;
      const iconOnly = iconPosition === "only";
      const combo = Boolean(icon) && iconPosition === "combo";
      if (iconOnly && !rest["aria-label"] && !rest["aria-labelledby"]) {
        console.error(
          'Angelou Button: iconPosition="only" needs an aria-label, otherwise the button has no accessible name.'
        );
      }
      const handleClick = (event) => {
        if (loading) {
          event.preventDefault();
          return;
        }
        onClick == null ? void 0 : onClick(event);
      };
      const iconNode = icon ? /* @__PURE__ */ jsx(
        "span",
        {
          "aria-hidden": "true",
          css: iconCss(iconOnly ? ICON_SIZE_ONLY[size] : ICON_SIZE_WITH_LABEL),
          children: icon
        }
      ) : null;
      let content;
      if (!iconNode) content = children;
      else if (iconOnly) content = iconNode;
      else if (iconPosition === "left")
        content = /* @__PURE__ */ jsxs(Fragment2, { children: [
          iconNode,
          children
        ] });
      else if (combo)
        content = /* @__PURE__ */ jsxs(Fragment2, { children: [
          children,
          /* @__PURE__ */ jsx("span", { "aria-hidden": "true", css: dividerCss(variant) }),
          iconNode
        ] });
      else
        content = /* @__PURE__ */ jsxs(Fragment2, { children: [
          children,
          iconNode
        ] });
      return /* @__PURE__ */ jsx(
        "button",
        {
          ref,
          ...rest,
          type,
          disabled,
          "aria-busy": loading ? "true" : void 0,
          "data-variant": variant,
          "data-size": size,
          "data-full-width": fullWidth ? "true" : void 0,
          css: [
            rootCss2,
            sizeCss[size],
            variantCss[variant],
            state && !disabled ? forcedStateCss(state) : null,
            iconNode && !iconOnly && !combo ? withIconCss[size] : null,
            iconOnly ? iconOnlyCss[size] : null,
            combo ? comboCss[size] : null,
            fullWidth && !iconOnly ? fullWidthCss : null,
            consumerCss
          ],
          onClick: handleClick,
          children: content
        }
      );
    }
  );
  var Button_default = Button;
  var ICON_PATHS = {
    "ai-filled": '<path fill-rule="evenodd" clip-rule="evenodd" d="M5 3C3.89543 3 3 3.89543 3 5V27C3 28.1046 3.89543 29 5 29H27C28.1046 29 29 28.1046 29 27V5C29 3.89543 28.1046 3 27 3H5ZM10.78 18.752H15.388L16.332 21.344H18.732L14.412 10H11.852L7.5 21.344H9.836L10.78 18.752ZM14.652 16.736H11.516L13.084 12.448L14.652 16.736ZM21.1829 10V21.344H23.4229V10H21.1829Z" fill="currentColor"></path>',
    "ai-hollow": '<path fill-rule="evenodd" clip-rule="evenodd" d="M5 3C3.89543 3 3 3.89543 3 5V27C3 28.1046 3.89543 29 5 29H27C28.1046 29 29 28.1046 29 27V5C29 3.89543 28.1046 3 27 3H5ZM5 5L27 5V27H5V5ZM10.78 18.752H15.388L16.332 21.344H18.732L14.412 10H11.852L7.5 21.344H9.836L10.78 18.752ZM14.652 16.736H11.516L13.084 12.448L14.652 16.736ZM21.1829 10V21.344H23.4229V10H21.1829Z" fill="currentColor"></path>',
    "align-center": '<path fill-rule="evenodd" clip-rule="evenodd" d="M9 8H23V6H9V8ZM5 14H26V12H5V14ZM24 20H7V18H24V20ZM5 26H27V24H5V26Z" fill="currentColor"></path>',
    "align-justified": '<path fill-rule="evenodd" clip-rule="evenodd" d="M5 8H27V6H5V8ZM5 14H27V12H5V14ZM27 20H5V18H27V20ZM5 26H27V24H5V26Z" fill="currentColor"></path>',
    "align-left": '<path fill-rule="evenodd" clip-rule="evenodd" d="M5 8H19V6H5V8ZM5 14H26V12H5V14ZM22 20H5V18H22V20ZM5 26H27V24H5V26Z" fill="currentColor"></path>',
    "align-right": '<path fill-rule="evenodd" clip-rule="evenodd" d="M13 8H27V6H13V8ZM6 14H27V12H6V14ZM27 20H10V18H27V20ZM5 26H27V24H5V26Z" fill="currentColor"></path>',
    annotate: '<path fill-rule="evenodd" clip-rule="evenodd" d="M25.0676 7.48106L23.5196 5.93346C23.1677 5.58163 22.6106 5.54209 22.2125 5.84071L12.4701 13.1488L17.853 18.5317L25.1606 8.78826C25.4592 8.3901 25.4196 7.83295 25.0676 7.48106ZM16.2877 19.6089L11.393 14.7141L10.4197 17.1473C10.2712 17.5187 10.3582 17.943 10.6411 18.2258L12.776 20.3608C13.0589 20.6436 13.4831 20.7307 13.8545 20.5821L16.2877 19.6089ZM24.9337 4.51908L26.4816 6.06668C27.5375 7.12232 27.6564 8.79379 26.7606 9.98826L19.138 20.1517C18.8078 20.5919 18.363 20.9328 17.8521 21.1372L14.5973 22.4391C13.4831 22.8848 12.2104 22.6236 11.3618 21.775L11.2879 21.701L10.2847 22.6944C10.0986 22.8787 9.84764 22.9826 9.58574 22.9838L8.422 22.9893C7.52858 22.9934 7.07853 21.9131 7.71063 21.2818L9.29051 19.7037L9.22689 19.64C8.3783 18.7915 8.11708 17.5188 8.56278 16.4045L9.86474 13.1497C10.0691 12.6389 10.4099 12.1941 10.85 11.864L21.0124 4.24081C22.2067 3.34496 23.8779 3.46356 24.9337 4.51908ZM5 28.9999H27V26.9999H5V28.9999Z" fill="currentColor"></path>',
    archive: '<path fill-rule="evenodd" clip-rule="evenodd" d="M7 5C5.89543 5 5 5.89543 5 7V12V13H6H26H27V12V7C27 5.89543 26.1046 5 25 5H7ZM7 7H25V11H7V7ZM7 16V25H25V16H27V25C27 26.1046 26.1046 27 25 27H7C5.89543 27 5 26.1046 5 25V16H7ZM21 19H11V17H21V19Z" fill="currentColor"></path>',
    "arrow-down": '<path fill-rule="evenodd" clip-rule="evenodd" d="M17 3.99998C17 3.4477 16.5523 2.99998 16 2.99998C15.4477 2.99998 15 3.4477 15 3.99998V20H9L16 29L23 20H17V3.99998Z" fill="currentColor"></path>',
    "arrow-left": '<path fill-rule="evenodd" clip-rule="evenodd" d="M3 15.9999L12 22.9999V17.0002H28C28.5523 17.0002 29 16.5525 29 16.0002C29 15.4479 28.5523 15.0002 28 15.0002H12V8.99994L3 15.9999Z" fill="currentColor"></path>',
    "arrow-right": '<path fill-rule="evenodd" clip-rule="evenodd" d="M29.0001 15.9999L20.0001 22.9999V17.0002H4C3.44772 17.0002 3 16.5525 3 16.0002C3 15.4479 3.44772 15.0002 4 15.0002H20.0001V8.99994L29.0001 15.9999Z" fill="currentColor"></path>',
    "arrow-up": '<path fill-rule="evenodd" clip-rule="evenodd" d="M16 2.99995L9 11.9999H15V28C15 28.5523 15.4477 29 16 29C16.5523 29 17 28.5523 17 28V11.9999H23L16 2.99995Z" fill="currentColor"></path>',
    article: '<path fill-rule="evenodd" clip-rule="evenodd" d="M7 29C5.89543 29 5 28.1046 5 27V5C5 3.89543 5.89543 3 7 3H22C22.2652 3 22.5196 3.10536 22.7071 3.29289L26.7071 7.29289C26.8946 7.48043 27 7.73479 27 8V27C27 28.1046 26.1046 29 25 29H7ZM7 27H25V10H20V5H7V27Z" fill="currentColor"></path>',
    "article-edit": '<path fill-rule="evenodd" clip-rule="evenodd" d="M7 29C5.89543 29 5 28.1046 5 27V5C5 3.89543 5.89543 3 7 3H22C22.2652 3 22.5196 3.10536 22.7071 3.29289L26.7071 7.29289C26.8946 7.48043 27 7.73478 27 8V27C27 28.1046 26.1046 29 25 29H7ZM7 27H25V10H20V5H7V27ZM17 12C17.5523 11.4477 18.4477 11.4477 19 12C19.5523 12.5523 19.5523 13.4477 19 14L13 20H11V18L17 12ZM21 21H11V23H21V21Z" fill="currentColor"></path>',
    "article-header": '<path fill-rule="evenodd" clip-rule="evenodd" d="M5 27C5 28.1046 5.89543 29 7 29H25C26.1046 29 27 28.1046 27 27V8V5C27 3.89543 26.1046 3 25 3H7C5.89543 3 5 3.89543 5 5V27ZM25 27H7V5H25V8V27ZM9 7.00001H23V11H9V7.00001ZM23 13H9V14H23V13ZM9 16H19V17H9V16ZM21 19H9V20H21V19Z" fill="currentColor"></path>',
    assignments: '<path fill-rule="evenodd" clip-rule="evenodd" d="M5 5C5 3.89543 5.89543 3 7 3H25C26.1046 3 27 3.89543 27 5V23.5654C27 24.1198 26.7699 24.6493 26.3646 25.0276L22.6848 28.4621C22.3144 28.8078 21.8267 29 21.3201 29H7C5.89543 29 5 28.1046 5 27V5ZM25 5L7 5V27H19V21H25V5ZM20.8742 11.4856C21.1424 11.0029 20.9684 10.3941 20.4856 10.1258C20.0029 9.85763 19.3941 10.0316 19.1258 10.5144L14.8748 18.1663L12.8 15.4C12.4686 14.9581 11.8418 14.8686 11.4 15.2C10.9582 15.5313 10.8686 16.1581 11.2 16.6L14.2 20.6C14.4033 20.8711 14.7301 21.0208 15.0681 20.9977C15.4062 20.9746 15.7096 20.7819 15.8742 20.4856L20.8742 11.4856Z" fill="currentColor"></path>',
    "assignments-complete": '<path fill-rule="evenodd" clip-rule="evenodd" d="M5 3C3.89543 3 3 3.89543 3 5V25C3 26.1046 3.89543 27 5 27H14.3427C15.8884 28.2508 17.8567 29 20 29C24.9706 29 29 24.9706 29 20C29 16.4663 26.9634 13.4082 24 11.9355V5C24 3.89543 23.1046 3 22 3H5ZM11.0549 21C11.2173 22.4689 11.7332 23.8312 12.5155 25H5V5L22 5V11.223C21.3568 11.0771 20.6874 11 20 11C17.3179 11 14.9099 12.1732 13.261 14.0344C13.1778 14.012 13.0903 14 13 14H9C8.44772 14 8 14.4477 8 15C8 15.5523 8.44772 16 9 16H11.9355C11.4776 16.9215 11.1729 17.9326 11.0549 19H9C8.44772 19 8 19.4477 8 20C8 20.5523 8.44772 21 9 21H11.0549ZM20 27C16.134 27 13 23.866 13 20C13 16.134 16.134 13 20 13C23.866 13 27 16.134 27 20C27 23.866 23.866 27 20 27ZM9 9C8.44772 9 8 9.44772 8 10C8 10.5523 8.44772 11 9 11H18C18.5523 11 19 10.5523 19 10C19 9.44772 18.5523 9 18 9H9ZM22.8944 17.4472C23.1414 16.9532 22.9412 16.3526 22.4472 16.1056C21.9532 15.8586 21.3526 16.0588 21.1056 16.5528L18.726 21.3118L17.7071 20.2929C17.3166 19.9024 16.6834 19.9024 16.2929 20.2929C15.9024 20.6834 15.9024 21.3166 16.2929 21.7071L18.2929 23.7071C18.5202 23.9344 18.8429 24.0386 19.1602 23.9871C19.4775 23.9356 19.7507 23.7347 19.8944 23.4472L22.8944 17.4472Z" fill="currentColor"></path>',
    attachment: '<path fill-rule="evenodd" clip-rule="evenodd" d="M10 7C6.13401 7 3 10.134 3 14V18C3 21.866 6.13401 25 10 25H24C26.7614 25 29 22.7614 29 20V17C29 14.2386 26.7614 12 24 12H11C9.34315 12 8 13.3431 8 15V17C8 18.6569 9.34315 20 11 20H23C23.5523 20 24 19.5523 24 19C24 18.4477 23.5523 18 23 18H11C10.4477 18 10 17.5523 10 17V15C10 14.4477 10.4477 14 11 14H24C25.6569 14 27 15.3431 27 17V20C27 21.6569 25.6569 23 24 23H10C7.23858 23 5 20.7614 5 18V14C5 11.2386 7.23858 9 10 9H24C24.5523 9 25 8.55228 25 8C25 7.44772 24.5523 7 24 7H10Z" fill="currentColor"></path>',
    "auto-play-on": '<path fill-rule="evenodd" clip-rule="evenodd" d="M14 16C14 17.8919 14.6567 19.6304 15.7546 21H9C6.23858 21 4 18.7614 4 16C4 13.2386 6.23858 11 9 11H15.7546C14.6567 12.3696 14 14.1081 14 16ZM18 23V22.9297C19.1767 23.6104 20.5429 24 22 24C26.4183 24 30 20.4183 30 16C30 11.5817 26.4183 8 22 8C20.5429 8 19.1767 8.38958 18 9.07026V9H9C5.13401 9 2 12.134 2 16C2 19.866 5.13401 23 9 23H18ZM22 22C18.6863 22 16 19.3137 16 16C16 12.6863 18.6863 10 22 10C25.3137 10 28 12.6863 28 16C28 19.3137 25.3137 22 22 22ZM20.7773 12.5177C20.4451 12.2962 20 12.5344 20 12.9338V19.0653C20 19.4646 20.4451 19.7028 20.7773 19.4813L25.376 16.4155C25.6728 16.2176 25.6728 15.7814 25.376 15.5835L20.7773 12.5177Z" fill="currentColor"></path>',
    backward: '<path fill-rule="evenodd" clip-rule="evenodd" d="M3 16L15 7V16V25L3 16ZM15 16L27 25V7L15 16Z" fill="currentColor"></path>',
    "backward-10": '<path fill-rule="evenodd" clip-rule="evenodd" d="M3.00017 6L9.00017 10V7.01105C9.90435 7.00972 10.8309 7.00776 11.7306 7.00586L11.7315 7.00586C14.6566 6.99968 17.2989 6.9941 17.973 7.01237C22.3864 7.13197 26.4644 10.0808 27.6514 14.4304C29.1005 19.7406 25.8959 25.2229 20.4497 26.6558C14.9969 28.0904 9.41594 24.9084 7.96485 19.5909C7.81945 19.0581 7.26966 18.7441 6.73686 18.8895C6.20406 19.0349 5.89 19.5847 6.0354 20.1175C7.78313 26.522 14.4731 30.2963 20.9585 28.59C27.4505 26.882 31.3305 20.3156 29.5808 13.9038C28.1442 8.63955 23.2537 5.15474 18.0272 5.0131C17.3239 4.99404 14.6067 4.99976 11.6431 5.00599L11.6426 5.00599C10.7681 5.00783 9.87216 5.00972 9.00017 5.01102V2L3.00017 6ZM18.6333 17.1059C18.561 16.7686 18.5249 16.4 18.5249 16C18.5249 15.6 18.561 15.2353 18.6333 14.9059C18.7056 14.5686 18.8276 14.2863 18.9992 14.0588C19.1347 13.8706 19.3109 13.7216 19.5278 13.6118C19.7446 13.4941 20.0111 13.4353 20.3274 13.4353C20.6526 13.4353 20.9192 13.4941 21.127 13.6118C21.3348 13.7216 21.5064 13.8706 21.642 14.0588C21.8227 14.2863 21.9492 14.5686 22.0214 14.9059C22.0937 15.2353 22.1299 15.6 22.1299 16C22.1299 16.4 22.0937 16.7686 22.0214 17.1059C21.9492 17.4353 21.8227 17.7137 21.642 17.9412C21.5064 18.1294 21.3348 18.2824 21.127 18.4C20.9192 18.5098 20.6526 18.5647 20.3274 18.5647C20.0111 18.5647 19.7446 18.5098 19.5278 18.4C19.3109 18.2824 19.1347 18.1294 18.9992 17.9412C18.8276 17.7137 18.7056 17.4353 18.6333 17.1059ZM16.8173 14.5765C16.7088 15.0314 16.6546 15.5059 16.6546 16C16.6546 16.4941 16.7088 16.9725 16.8173 17.4353C16.9257 17.8902 17.129 18.3176 17.4271 18.7176C17.7162 19.0941 18.1002 19.4039 18.5791 19.6471C19.0579 19.8824 19.6407 20 20.3274 20C21.014 20 21.5923 19.8824 22.0621 19.6471C22.541 19.4039 22.9249 19.0941 23.2141 18.7176C23.5122 18.3176 23.7155 17.8902 23.8239 17.4353C23.9414 16.9725 24.0001 16.4941 24.0001 16C24.0001 15.5059 23.9414 15.0314 23.8239 14.5765C23.7155 14.1137 23.5122 13.6824 23.2141 13.2824C22.9249 12.9059 22.541 12.6 22.0621 12.3647C21.5923 12.1216 21.014 12 20.3274 12C19.6407 12 19.0579 12.1216 18.5791 12.3647C18.1002 12.6 17.7162 12.9059 17.4271 13.2824C17.129 13.6824 16.9257 14.1137 16.8173 14.5765ZM13.1143 14.7059V19.8118H14.971V12.1765H13.3583C13.2679 12.5765 13.0104 12.9137 12.5858 13.1882C12.1702 13.4627 11.6416 13.6039 11.0001 13.6118V14.7059H13.1143Z" fill="currentColor"></path>',
    "backward-15": '<path fill-rule="evenodd" clip-rule="evenodd" d="M3 6.00002L9 10V7.01107C9.90407 7.00973 10.8305 7.00778 11.7302 7.00588L11.7313 7.00587H11.7314C14.6564 6.9997 17.2988 6.99412 17.9729 7.01238C22.3863 7.13198 26.4643 10.0808 27.6512 14.4304C29.1003 19.7406 25.8957 25.223 20.4495 26.6558C14.9968 28.0904 9.41582 24.9084 7.96473 19.591C7.81933 19.0581 7.26954 18.7441 6.73674 18.8895C6.20393 19.0349 5.88988 19.5847 6.03528 20.1175C7.78301 26.522 14.473 30.2963 20.9584 28.59C27.4504 26.882 31.3304 20.3156 29.5807 13.9039C28.1441 8.63957 23.2536 5.15475 18.0271 5.01312C17.3238 4.99406 14.6066 4.99978 11.643 5.00601L11.6425 5.00601C10.768 5.00785 9.872 5.00973 9 5.01104V2.00002L3 6.00002ZM14.2441 14.792V20H15.8881V12.212H14.4601C14.3801 12.62 14.1521 12.964 13.7761 13.244C13.4081 13.524 12.9401 13.668 12.3721 13.676V14.792H14.2441ZM18.8794 17.984C18.8074 17.824 18.7674 17.652 18.7594 17.468L17.2114 17.816C17.2354 18.12 17.3234 18.416 17.4754 18.704C17.6274 18.992 17.8314 19.248 18.0874 19.472C18.3514 19.688 18.6594 19.864 19.0114 20C19.3634 20.128 19.7514 20.192 20.1754 20.192C20.6394 20.192 21.0554 20.12 21.4234 19.976C21.7994 19.824 22.1154 19.624 22.3714 19.376C22.6274 19.128 22.8234 18.84 22.9594 18.512C23.0954 18.184 23.1634 17.84 23.1634 17.48C23.1634 17.064 23.0954 16.696 22.9594 16.376C22.8314 16.048 22.6474 15.776 22.4074 15.56C22.1754 15.336 21.8954 15.168 21.5674 15.056C21.2474 14.936 20.8914 14.876 20.4994 14.876C20.2434 14.876 19.9874 14.916 19.7314 14.996C19.4754 15.076 19.2634 15.196 19.0954 15.356L19.4794 13.64H22.7434V12.212H18.3514L17.4274 16.208C17.4674 16.224 17.5594 16.256 17.7034 16.304C17.8554 16.352 18.0154 16.404 18.1834 16.46C18.3514 16.516 18.5074 16.572 18.6514 16.628C18.8034 16.676 18.8994 16.708 18.9394 16.724C19.0674 16.58 19.2314 16.456 19.4314 16.352C19.6394 16.248 19.8754 16.196 20.1394 16.196C20.3154 16.196 20.4874 16.224 20.6554 16.28C20.8234 16.328 20.9714 16.408 21.0994 16.52C21.2274 16.624 21.3274 16.76 21.3994 16.928C21.4794 17.088 21.5194 17.28 21.5194 17.504C21.5194 17.896 21.3874 18.208 21.1234 18.44C20.8674 18.664 20.5514 18.776 20.1754 18.776C19.9674 18.776 19.7794 18.744 19.6114 18.68C19.4434 18.608 19.2954 18.512 19.1674 18.392C19.0474 18.272 18.9514 18.136 18.8794 17.984Z" fill="currentColor"></path>',
    "backward-30": '<path fill-rule="evenodd" clip-rule="evenodd" d="M3.00005 6L9.00005 10V7.01105C9.90423 7.00972 10.8307 7.00776 11.7305 7.00586L11.7314 7.00586C14.6564 6.99968 17.2988 6.9941 17.9729 7.01237C22.3863 7.13197 26.4643 10.0808 27.6512 14.4304C29.1003 19.7406 25.8957 25.2229 20.4495 26.6558C14.9968 28.0904 9.41582 24.9084 7.96472 19.5909C7.81933 19.0581 7.26954 18.7441 6.73674 18.8895C6.20393 19.0349 5.88988 19.5847 6.03528 20.1175C7.783 26.522 14.473 30.2963 20.9584 28.59C27.4504 26.882 31.3304 20.3156 29.5807 13.9038C28.1441 8.63955 23.2536 5.15474 18.0271 5.0131C17.3238 4.99404 14.6066 4.99976 11.643 5.00599L11.6425 5.00599C10.768 5.00783 9.87203 5.00972 9.00005 5.01102V2L3.00005 6ZM19.7946 17.24C19.7306 16.896 19.6986 16.52 19.6986 16.112C19.6986 15.704 19.7306 15.332 19.7946 14.996C19.8586 14.652 19.9666 14.364 20.1186 14.132C20.2386 13.94 20.3946 13.788 20.5866 13.676C20.7786 13.556 21.0146 13.496 21.2946 13.496C21.5826 13.496 21.8186 13.556 22.0026 13.676C22.1866 13.788 22.3386 13.94 22.4586 14.132C22.6186 14.364 22.7306 14.652 22.7946 14.996C22.8586 15.332 22.8906 15.704 22.8906 16.112C22.8906 16.52 22.8586 16.896 22.7946 17.24C22.7306 17.576 22.6186 17.86 22.4586 18.092C22.3386 18.284 22.1866 18.44 22.0026 18.56C21.8186 18.672 21.5826 18.728 21.2946 18.728C21.0146 18.728 20.7786 18.672 20.5866 18.56C20.3946 18.44 20.2386 18.284 20.1186 18.092C19.9666 17.86 19.8586 17.576 19.7946 17.24ZM18.1866 14.66C18.0906 15.124 18.0426 15.608 18.0426 16.112C18.0426 16.616 18.0906 17.104 18.1866 17.576C18.2826 18.04 18.4626 18.476 18.7266 18.884C18.9826 19.268 19.3226 19.584 19.7466 19.832C20.1706 20.072 20.6866 20.192 21.2946 20.192C21.9026 20.192 22.4146 20.072 22.8306 19.832C23.2546 19.584 23.5946 19.268 23.8506 18.884C24.1146 18.476 24.2946 18.04 24.3906 17.576C24.4946 17.104 24.5466 16.616 24.5466 16.112C24.5466 15.608 24.4946 15.124 24.3906 14.66C24.2946 14.188 24.1146 13.748 23.8506 13.34C23.5946 12.956 23.2546 12.644 22.8306 12.404C22.4146 12.156 21.9026 12.032 21.2946 12.032C20.6866 12.032 20.1706 12.156 19.7466 12.404C19.3226 12.644 18.9826 12.956 18.7266 13.34C18.4626 13.748 18.2826 14.188 18.1866 14.66ZM14.8758 13.64L12.8358 15.392L13.5678 16.544C13.6558 16.512 13.7518 16.484 13.8558 16.46C13.9678 16.436 14.1078 16.424 14.2758 16.424C14.6518 16.424 14.9558 16.524 15.1878 16.724C15.4278 16.924 15.5478 17.208 15.5478 17.576C15.5478 17.904 15.4318 18.184 15.1998 18.416C14.9678 18.64 14.6438 18.752 14.2278 18.752C13.8198 18.752 13.4838 18.624 13.2198 18.368C12.9638 18.112 12.8278 17.784 12.8118 17.384L11.2158 17.696C11.2398 18.024 11.3238 18.34 11.4678 18.644C11.6198 18.94 11.8238 19.204 12.0798 19.436C12.3358 19.66 12.6438 19.84 13.0038 19.976C13.3638 20.112 13.7718 20.18 14.2278 20.18C14.6998 20.18 15.1198 20.108 15.4878 19.964C15.8558 19.82 16.1678 19.632 16.4238 19.4C16.6798 19.16 16.8758 18.884 17.0118 18.572C17.1478 18.26 17.2158 17.936 17.2158 17.6C17.2158 17.24 17.1518 16.916 17.0238 16.628C16.9038 16.34 16.7398 16.096 16.5318 15.896C16.3238 15.688 16.0838 15.528 15.8118 15.416C15.5398 15.304 15.2558 15.24 14.9598 15.224L16.9758 13.544V12.212H11.4678V13.64H14.8758Z" fill="currentColor"></path>',
    "backward-5": '<path fill-rule="evenodd" clip-rule="evenodd" d="M4 6.00002L10 10V7.00938L11.7305 7.00588L11.7314 7.00587C14.6564 6.9997 17.2988 6.99412 17.9729 7.01238C22.3863 7.13198 26.4643 10.0808 27.6512 14.4304C29.1003 19.7406 25.8957 25.223 20.4495 26.6558C14.9968 28.0904 9.41582 24.9084 7.96472 19.591C7.81933 19.0581 7.26954 18.7441 6.73674 18.8895C6.20393 19.0349 5.88988 19.5847 6.03528 20.1175C7.78301 26.522 14.473 30.2963 20.9584 28.59C27.4504 26.882 31.3304 20.3156 29.5807 13.9039C28.1441 8.63957 23.2536 5.15475 18.0271 5.01312C17.3238 4.99406 14.6066 4.99977 11.643 5.00601L11.6425 5.00601L10 5.00934V2.00002L4 6.00002ZM17.0161 18.984C16.9441 18.824 16.9041 18.652 16.8961 18.468L15.3481 18.816C15.3721 19.12 15.4601 19.416 15.6121 19.704C15.7641 19.992 15.9681 20.248 16.2241 20.472C16.4881 20.688 16.7961 20.864 17.1481 21C17.5001 21.128 17.8881 21.192 18.3121 21.192C18.7761 21.192 19.1921 21.12 19.5601 20.976C19.9361 20.824 20.2521 20.624 20.5081 20.376C20.7641 20.128 20.9601 19.84 21.0961 19.512C21.2321 19.184 21.3001 18.84 21.3001 18.48C21.3001 18.064 21.2321 17.696 21.0961 17.376C20.9681 17.048 20.7841 16.776 20.5441 16.56C20.3121 16.336 20.0321 16.168 19.7041 16.056C19.3841 15.936 19.0281 15.876 18.6361 15.876C18.3801 15.876 18.1241 15.916 17.8681 15.996C17.6121 16.076 17.4001 16.196 17.2321 16.356L17.6161 14.64H20.8801V13.212H16.4881L15.5641 17.208C15.6041 17.224 15.6961 17.256 15.8401 17.304C15.9921 17.352 16.1521 17.404 16.3201 17.46C16.4881 17.516 16.6441 17.572 16.7881 17.628C16.9401 17.676 17.0361 17.708 17.0761 17.724C17.2041 17.58 17.3681 17.456 17.5681 17.352C17.7761 17.248 18.0121 17.196 18.2761 17.196C18.4521 17.196 18.6241 17.224 18.7921 17.28C18.9601 17.328 19.1081 17.408 19.2361 17.52C19.3641 17.624 19.4641 17.76 19.5361 17.928C19.6161 18.088 19.6561 18.28 19.6561 18.504C19.6561 18.896 19.5241 19.208 19.2601 19.44C19.0041 19.664 18.6881 19.776 18.3121 19.776C18.1041 19.776 17.9161 19.744 17.7481 19.68C17.5801 19.608 17.4321 19.512 17.3041 19.392C17.1841 19.272 17.0881 19.136 17.0161 18.984Z" fill="currentColor"></path>',
    bars: '<path fill-rule="evenodd" clip-rule="evenodd" d="M6 7.99988C6 7.44759 6.44772 6.99988 7 6.99988H25C25.5523 6.99988 26 7.44759 26 7.99988C26 8.55216 25.5523 8.99988 25 8.99988H7C6.44772 8.99988 6 8.55216 6 7.99988ZM6 15.9999C6 15.4476 6.44772 14.9999 7 14.9999H25C25.5523 14.9999 26 15.4476 26 15.9999C26 16.5522 25.5523 16.9999 25 16.9999H7C6.44772 16.9999 6 16.5522 6 15.9999ZM7 22.9999C6.44772 22.9999 6 23.4476 6 23.9999C6 24.5522 6.44772 24.9999 7 24.9999H25C25.5523 24.9999 26 24.5522 26 23.9999C26 23.4476 25.5523 22.9999 25 22.9999H7Z" fill="currentColor"></path>',
    "bell-filled": '<path fill-rule="evenodd" clip-rule="evenodd" d="M16 4C12.134 4 9 7.13401 9 11V17L7 22H25L23 17V11C23 7.13401 19.866 4 16 4ZM16 30C13.7909 30 12 28.2091 12 26H20C20 28.2091 18.2091 30 16 30Z" fill="currentColor"></path>',
    "bell-hollow": '<path fill-rule="evenodd" clip-rule="evenodd" d="M16 3C12.134 3 8.99999 6.13401 8.99999 10V16.7639L7.10556 20.5528L6.38196 22H7.99999H24H25.618L24.8944 20.5528L23 16.7639V10C23 6.13401 19.866 3 16 3ZM11 10C11 7.23858 13.2386 5 16 5C18.7614 5 21 7.23858 21 10V17V17.2361L21.1056 17.4472L22.382 20H9.61803L10.8944 17.4472L11 17.2361V17V10ZM16 30C13.7909 30 12 28.2091 12 26H20C20 28.2091 18.2091 30 16 30Z" fill="currentColor"></path>',
    bold: '<path fill-rule="evenodd" clip-rule="evenodd" d="M12 7H16.6364C18.5184 7 19.8995 7.64979 20.7974 8.67414C21.6721 9.67187 22 10.9237 22 12C22 13.0763 21.6721 14.3281 20.7974 15.3259C20.7617 15.3666 20.7252 15.4068 20.6879 15.4464C21.4504 15.7254 22.0814 16.1255 22.5855 16.6183C23.5994 17.6098 24 18.8808 24 20C24 21.1192 23.5994 22.3902 22.5855 23.3817C21.5624 24.382 20.0164 25 17.9091 25H12H10H9V24V23V17V15V9V8V7H10H12ZM12 9H11V15H16.6364C18.0271 15 18.8278 14.5387 19.2935 14.0075C19.7825 13.4496 20 12.7015 20 12C20 11.2985 19.7825 10.5504 19.2935 9.99253C18.8278 9.46133 18.0271 9 16.6364 9H12ZM11 17V23H12H17.9091C19.62 23 20.6194 22.5069 21.1872 21.9517C21.7642 21.3875 22 20.6586 22 20C22 19.3414 21.7642 18.6125 21.1872 18.0483C20.6194 17.4931 19.62 17 17.9091 17H16.6364H11Z" fill="currentColor"></path>',
    book: '<path fill-rule="evenodd" clip-rule="evenodd" d="M9.16675 5C8.33832 5 7.66675 5.67157 7.66675 6.5C7.66675 7.32843 8.33832 8 9.16675 8H9.33342L23.5 8V5L9.16675 5ZM25.5 8.01381V4C25.5 3.44772 25.0523 3 24.5 3L9.16675 3C7.23375 3 5.66675 4.567 5.66675 6.5C5.66675 6.55587 5.66806 6.61144 5.67065 6.66667H5.66675V26C5.66675 27.6569 7.00989 29 8.66675 29H25.3334C25.5986 29 25.853 28.8946 26.0405 28.7071C26.2281 28.5196 26.3334 28.2652 26.3334 28V13.3333V9C26.3334 8.50447 25.973 8.09312 25.5 8.01381ZM7.66675 9.66318V26C7.66675 26.5523 8.11446 27 8.66675 27H9V10V9.9961C8.52462 9.9738 8.07403 9.85666 7.66675 9.66318ZM24.3334 27H11V10L24.3334 10V13.3333V27ZM21.7 15C22.2522 15 22.7 14.5523 22.7 14C22.7 13.4477 22.2522 13 21.7 13L13.7 13C13.1477 13 12.7 13.4477 12.7 14C12.7 14.5523 13.1477 15 13.7 15L21.7 15Z" fill="currentColor"></path>',
    "bookmark-filled": '<path fill-rule="evenodd" clip-rule="evenodd" d="M7 4C7 3.44772 7.44772 3 8 3H24C24.5523 3 25 3.44772 25 4V27L16 23L7 27V4Z" fill="currentColor"></path>',
    "bookmark-hollow": '<path fill-rule="evenodd" clip-rule="evenodd" d="M9 3C7.89543 3 7 3.89543 7 5V26V27.618L8.44721 26.8944L16 23.118L23.5528 26.8944L25 27.618V26V5C25 3.89543 24.1046 3 23 3H9ZM9 5L23 5V24.382L16.4472 21.1056L16 20.882L15.5528 21.1056L9 24.382V5Z" fill="currentColor"></path>',
    books: '<path fill-rule="evenodd" clip-rule="evenodd" d="M14.8209 7.97063C14.6029 7.37175 14.6889 6.73633 15 6.23334V5.99971L11 5.99971V5.99996V8.99996H15V8.46269L14.8209 7.97063ZM15 3.99971C15.79 3.99971 16.473 4.45773 16.798 5.12269L19.775 4.03913C20.813 3.66134 21.9607 4.19652 22.3384 5.23447L29.1788 24.0283C29.5566 25.0663 29.0215 26.214 27.9835 26.5918L24.2247 27.9598C23.1868 28.3376 22.0391 27.8024 21.6613 26.7645L17 13.9576V22V25.9997C17 27.1043 16.1046 27.9997 15 27.9997H11C10.6358 27.9997 10.2943 27.9024 10.0002 27.7323C9.70599 27.9025 9.36438 28 9 28H5C3.89543 28 3 27.1045 3 26V22V9.99996V5.99996C3 4.89539 3.89543 3.99996 5 3.99996H9C9.3642 3.99996 9.70566 4.0973 9.99979 4.2674C10.294 4.09715 10.6356 3.99971 11 3.99971H15ZM5 23V26H9V25.9997V23H5ZM9 21H5V11H9V21ZM11 23V25.9997H15V23H11ZM15 21H11V11H15V21ZM17 7.17751V8.11004L18.0097 10.884L21.7684 9.51595L20.4591 5.91851L17 7.17751ZM22.4525 11.3953L18.6937 12.7634L21.5578 20.6325L25.3166 19.2644L22.4525 11.3953ZM23.5407 26.0804L22.2419 22.5119L26.0006 21.1438L27.2995 24.7124L23.5407 26.0804ZM9 5.99996L5 5.99996V8.99996H9V5.99996Z" fill="currentColor"></path>',
    "books-2": '<path fill-rule="evenodd" clip-rule="evenodd" d="M28 25.9998C28 27.1043 27.1046 27.9998 26 27.9998L20.6654 27.9998C20.3011 27.9998 19.9595 27.9023 19.6653 27.7321C19.3711 27.9023 19.0296 27.9998 18.6653 27.9998L13.3307 27.9998C12.9665 27.9998 12.625 27.9024 12.3308 27.7323C12.0367 27.9024 11.6952 27.9998 11.331 27.9998L5.99643 27.9998C4.89186 27.9998 3.99643 27.1043 3.99643 25.9998L3.99643 6.60725C3.99643 5.50268 4.89186 4.60726 5.99643 4.60726L11.331 4.60726C12.0852 4.60726 12.7419 5.02472 13.0826 5.64118C13.1639 5.63113 13.2467 5.62595 13.3307 5.62595L18.6653 5.62595L18.6654 5.62595L18.6654 5.58856C18.6654 4.484 19.5609 3.58856 20.6654 3.58856L26 3.58856C27.1046 3.58856 28 4.48399 28 5.58856L28 12L28 22L28 25.9998ZM26 11L26 5.58856L20.6654 5.58856L20.6654 11L26 11ZM20.6654 13L26 13L26 21L20.6654 21L20.6654 13ZM11.331 6.60726L11.331 7.59C11.3308 7.60196 11.3307 7.61394 11.3307 7.62595L11.3307 11L5.99643 11L5.99643 6.60725L11.331 6.60726ZM5.99643 13L5.99643 21L11.3307 21L11.3307 13L5.99643 13ZM11.3307 23L5.99643 23L5.99643 25.9998L11.3307 25.9998L11.3307 23ZM18.6653 25.9998L13.331 25.9998L13.331 23L17.999 23L18 23L18.6653 23L18.6653 25.9998ZM18 21L13.331 21L13.331 13L18.6653 13L18.6653 21L18 21ZM18.6653 11L13.331 11L13.331 7.62595L18.6653 7.62595L18.6653 11ZM20.6654 25.9998L20.6654 23L26 23L26 25.9998L20.6654 25.9998Z" fill="currentColor"></path>',
    "bullet-list": '<path fill-rule="evenodd" clip-rule="evenodd" d="M13 7C12.4477 7 12 7.44772 12 8C12 8.55228 12.4477 9 13 9H26C26.5523 9 27 8.55228 27 8C27 7.44772 26.5523 7 26 7H13ZM13 19C12.4477 19 12 19.4477 12 20C12 20.5523 12.4477 21 13 21H26C26.5523 21 27 20.5523 27 20C27 19.4477 26.5523 19 26 19H13ZM5 20C5 19.4477 5.44772 19 6 19H7C7.55228 19 8 19.4477 8 20C8 20.5523 7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20ZM6 7C5.44772 7 5 7.44772 5 8C5 8.55228 5.44772 9 6 9H7C7.55228 9 8 8.55228 8 8C8 7.44772 7.55228 7 7 7H6Z" fill="currentColor"></path>',
    button: '<path fill-rule="evenodd" clip-rule="evenodd" d="M5 3C3.89543 3 3 3.89543 3 5V15C3 16.1046 3.89543 17 5 17H12V15H5V5L27 5V15H20.5V17H27C28.1046 17 29 16.1046 29 15V5C29 3.89543 28.1046 3 27 3H5ZM18.8682 20.5039C18.5942 20.0243 17.9834 19.8577 17.5039 20.1318C17.0243 20.4058 16.8577 21.0166 17.1318 21.4961L21.1318 28.4961C21.4058 28.9757 22.0166 29.1423 22.4961 28.8682C22.9757 28.5942 23.1423 27.9834 22.8682 27.5039L18.8682 20.5039Z" fill="currentColor"></path><path d="M13 25.5L12 11L25 18.9091L17.5714 20.2273L13 25.5Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"></path>',
    "calendar-1": '<path fill-rule="evenodd" clip-rule="evenodd" d="M19 27H13V21H19V27ZM21 27H26V21H21V27ZM21 19H26V12H21V19ZM19 12H13L13 19H19L19 12ZM19 7H13V4H11V7H6C4.89543 7 4 7.89543 4 9V27C4 28.1046 4.89543 29 6 29H26C27.1046 29 28 28.1046 28 27V9C28 7.89543 27.1046 7 26 7H21V4H19V7ZM11 19V12H6V19H11ZM11 27L11 21H6V27H11Z" fill="currentColor"></path>',
    "calendar-2": '<path fill-rule="evenodd" clip-rule="evenodd" d="M11 7L11 4H13V7H19V4H21V7H26C27.1046 7 28 7.89543 28 9V27C28 28.1046 27.1046 29 26 29H6C4.89543 29 4 28.1046 4 27V9C4 7.89543 4.89543 7 6 7H11ZM21 12H19H13H11H6V27H26V12H21ZM24 21H20V25H24V21Z" fill="currentColor"></path>',
    "calendar-check": '<path fill-rule="evenodd" clip-rule="evenodd" d="M11 7L11 4H13V7H19V4H21V7H26C27.1046 7 28 7.89543 28 9V27C28 28.1046 27.1046 29 26 29H6C4.89543 29 4 28.1046 4 27V9C4 7.89543 4.89543 7 6 7H11ZM21 12H19H13H11H6V27H26V12H21ZM19.5547 16.1679C20.0142 16.4743 20.1384 17.0952 19.8321 17.5547L15.8321 23.5547C15.6659 23.804 15.3967 23.9656 15.0985 23.9951C14.8004 24.0247 14.5047 23.919 14.2929 23.7071L12.2929 21.7071C11.9024 21.3166 11.9024 20.6834 12.2929 20.2929C12.6834 19.9024 13.3166 19.9024 13.7071 20.2929L14.8446 21.4304L18.1679 16.4453C18.4743 15.9858 19.0952 15.8616 19.5547 16.1679Z" fill="currentColor"></path>',
    "carat-down": '<path fill-rule="evenodd" clip-rule="evenodd" d="M5 10L16 25L27 10H5Z" fill="currentColor"></path>',
    "carat-left": '<path fill-rule="evenodd" clip-rule="evenodd" d="M22 27L7 16L22 5L22 27Z" fill="currentColor"></path>',
    "carat-right": '<path fill-rule="evenodd" clip-rule="evenodd" d="M10 27L25 16L10 5L10 27Z" fill="currentColor"></path>',
    "carat-up": '<path fill-rule="evenodd" clip-rule="evenodd" d="M5 22L16 7L27 22H5Z" fill="currentColor"></path>',
    "cc-filled": '<path fill-rule="evenodd" clip-rule="evenodd" d="M5 3C3.89543 3 3 3.89543 3 5V27C3 28.1046 3.89543 29 5 29H27C28.1046 29 29 28.1046 29 27V5C29 3.89543 28.1046 3 27 3H5ZM14.5088 21.5657C15.0251 21.2654 15.4425 20.8954 15.7611 20.4558L14.2945 18.6702C14.1407 18.9062 13.932 19.1099 13.6684 19.2815C13.4047 19.4531 13.0972 19.5389 12.7456 19.5389C12.3941 19.5389 12.0865 19.4477 11.8229 19.2654C11.5592 19.0831 11.334 18.8311 11.1473 18.5094C10.9715 18.1877 10.8397 17.8123 10.7518 17.3834C10.6639 16.9544 10.62 16.4933 10.62 16C10.62 15.5067 10.6639 15.0456 10.7518 14.6166C10.8397 14.1769 10.9715 13.8016 11.1473 13.4906C11.334 13.1689 11.5537 12.9169 11.8064 12.7346C12.07 12.5523 12.3776 12.4611 12.7291 12.4611C13.1026 12.4611 13.4102 12.5362 13.6519 12.6863C13.9046 12.8365 14.1298 13.0402 14.3275 13.2976L15.7446 11.4316C15.426 11.0241 15.0031 10.6863 14.4758 10.4182C13.9595 10.1394 13.3114 10 12.5314 10C11.8503 10 11.2297 10.1448 10.6694 10.4343C10.1202 10.7239 9.64779 11.1314 9.25232 11.6568C8.85685 12.1823 8.54926 12.815 8.32956 13.555C8.10985 14.2949 8 15.1099 8 16C8 16.8794 8.10985 17.689 8.32956 18.429C8.54926 19.1582 8.85685 19.7909 9.25232 20.3271C9.64779 20.8525 10.1202 21.2654 10.6694 21.5657C11.2297 21.8552 11.8503 22 12.5314 22C13.3333 22 13.9924 21.8552 14.5088 21.5657ZM22.7477 21.5657C23.264 21.2654 23.6814 20.8954 24 20.4558L22.5335 18.6702C22.3797 18.9062 22.171 19.1099 21.9073 19.2815C21.6437 19.4531 21.3361 19.5389 20.9846 19.5389C20.633 19.5389 20.3254 19.4477 20.0618 19.2654C19.7981 19.0831 19.573 18.8311 19.3862 18.5094C19.2104 18.1877 19.0786 17.8123 18.9907 17.3834C18.9029 16.9544 18.8589 16.4933 18.8589 16C18.8589 15.5067 18.9029 15.0456 18.9907 14.6166C19.0786 14.1769 19.2104 13.8016 19.3862 13.4906C19.573 13.1689 19.7927 12.9169 20.0453 12.7346C20.309 12.5523 20.6165 12.4611 20.9681 12.4611C21.3416 12.4611 21.6492 12.5362 21.8908 12.6863C22.1435 12.8365 22.3687 13.0402 22.5664 13.2976L23.9835 11.4316C23.665 11.0241 23.242 10.6863 22.7147 10.4182C22.1984 10.1394 21.5503 10 20.7703 10C20.0893 10 19.4686 10.1448 18.9083 10.4343C18.3591 10.7239 17.8867 11.1314 17.4912 11.6568C17.0958 12.1823 16.7882 12.815 16.5685 13.555C16.3488 14.2949 16.2389 15.1099 16.2389 16C16.2389 16.8794 16.3488 17.689 16.5685 18.429C16.7882 19.1582 17.0958 19.7909 17.4912 20.3271C17.8867 20.8525 18.3591 21.2654 18.9083 21.5657C19.4686 21.8552 20.0893 22 20.7703 22C21.5723 22 22.2314 21.8552 22.7477 21.5657Z" fill="currentColor"></path>',
    chalkboard: '<path fill-rule="evenodd" clip-rule="evenodd" d="M6 4C4.89543 4 4 4.89543 4 6V19C4 20.1046 4.89543 21 6 21H25C26.1046 21 27 20.1046 27 19V6C27 4.89543 26.1046 4 25 4H6ZM6 6H25V19H6V6ZM4 26C3.44772 26 3 26.4477 3 27C3 27.5523 3.44772 28 4 28H27C27.5523 28 28 27.5523 28 27C28 26.4477 27.5523 26 27 26H24V24C24 23.4477 23.5523 23 23 23H18C17.4477 23 17 23.4477 17 24V26H4ZM14.2929 12.293C14.6834 12.6835 14.6834 13.3167 14.2929 13.7072L13.7071 14.293C13.3166 14.6835 12.6834 14.6835 12.2929 14.293L9 11.0001V9.00006L11 9.00012L14.2929 12.293Z" fill="currentColor"></path>',
    check: '<path fill-rule="evenodd" clip-rule="evenodd" d="M24.8532 7.52135C25.1412 7.05009 24.9926 6.43461 24.5213 6.14662C24.0501 5.85863 23.4346 6.00719 23.1466 6.47845L12.9903 23.0978L8.84789 16.4699C8.55518 16.0016 7.93823 15.8592 7.46989 16.1519C7.00155 16.4446 6.85918 17.0616 7.15189 17.5299L12.1519 25.5299C12.3356 25.8238 12.6583 26.0016 13.0049 25.9999C13.3515 25.9981 13.6724 25.8171 13.8532 25.5213L24.8532 7.52135Z" fill="currentColor"></path>',
    "check-circle-filled": '<path fill-rule="evenodd" clip-rule="evenodd" d="M16 29C23.1797 29 29 23.1797 29 16C29 8.8203 23.1797 3 16 3C8.8203 3 3 8.8203 3 16C3 23.1797 8.8203 29 16 29ZM20.8742 11.4856C21.1424 11.0029 20.9684 10.3941 20.4856 10.1258C20.0029 9.85763 19.3941 10.0316 19.1258 10.5144L14.8747 18.1663L12.8 15.4C12.4686 14.9582 11.8418 14.8686 11.4 15.2C10.9582 15.5314 10.8686 16.1582 11.2 16.6L14.2 20.6C14.4033 20.8711 14.7301 21.0208 15.0681 20.9977C15.4062 20.9746 15.7096 20.7819 15.8742 20.4856L20.8742 11.4856Z" fill="currentColor"></path>',
    "check-circle-hollow": '<path fill-rule="evenodd" clip-rule="evenodd" d="M5 16C5 9.92487 9.92487 5 16 5C22.0751 5 27 9.92487 27 16C27 22.0751 22.0751 27 16 27C9.92487 27 5 22.0751 5 16ZM16 3C8.8203 3 3 8.8203 3 16C3 23.1797 8.8203 29 16 29C23.1797 29 29 23.1797 29 16C29 8.8203 23.1797 3 16 3ZM20.8742 11.4856C21.1424 11.0029 20.9684 10.3941 20.4856 10.1258C20.0029 9.85763 19.3941 10.0316 19.1258 10.5144L14.8747 18.1663L12.8 15.4C12.4686 14.9582 11.8418 14.8687 11.4 15.2C10.9582 15.5314 10.8686 16.1582 11.2 16.6L14.2 20.6C14.4033 20.8711 14.7301 21.0208 15.0681 20.9977C15.4062 20.9746 15.7096 20.7819 15.8742 20.4856L20.8742 11.4856Z" fill="currentColor"></path>',
    "check-list": '<path fill-rule="evenodd" clip-rule="evenodd" d="M10.8 6.59981C11.1314 6.15799 11.0418 5.53119 10.6 5.19981C10.1582 4.86844 9.53137 4.95799 9.2 5.39981L6.89181 8.47741L5.70711 7.29271C5.31658 6.90218 4.68342 6.90218 4.29289 7.29271C3.90237 7.68323 3.90237 8.3164 4.29289 8.70692L6.29289 10.7069C6.49788 10.9119 6.78173 11.0178 7.07089 10.9973C7.36005 10.9767 7.62607 10.8317 7.8 10.5998L10.8 6.59981ZM14 8C13.4477 8 13 8.44771 13 9C13 9.55228 13.4477 10 14 10H27C27.5523 10 28 9.55228 28 9C28 8.44771 27.5523 8 27 8H14ZM14 16C13.4477 16 13 16.4477 13 17C13 17.5523 13.4477 18 14 18H27C27.5523 18 28 17.5523 28 17C28 16.4477 27.5523 16 27 16H14ZM13 25C13 24.4477 13.4477 24 14 24H27C27.5523 24 28 24.4477 28 25C28 25.5523 27.5523 26 27 26H14C13.4477 26 13 25.5523 13 25ZM10.6 13.2001C11.0418 13.5314 11.1314 14.1582 10.8 14.6001L7.8 18.6001C7.62607 18.832 7.36005 18.977 7.07089 18.9975C6.78173 19.0181 6.49788 18.9121 6.29289 18.7072L4.29289 16.7072C3.90237 16.3166 3.90237 15.6835 4.29289 15.293C4.68342 14.9024 5.31658 14.9024 5.70711 15.293L6.89181 16.4777L9.2 13.4001C9.53137 12.9582 10.1582 12.8687 10.6 13.2001ZM10.8 22.6001C11.1314 22.1582 11.0418 21.5314 10.6 21.2001C10.1582 20.8687 9.53137 20.9582 9.2 21.4001L6.89181 24.4776L5.70711 23.2929C5.31658 22.9024 4.68342 22.9024 4.29289 23.2929C3.90237 23.6835 3.90237 24.3166 4.29289 24.7072L6.29289 26.7072C6.49788 26.9121 6.78173 27.0181 7.07089 26.9975C7.36005 26.977 7.62607 26.832 7.8 26.6001L10.8 22.6001Z" fill="currentColor"></path>',
    "checkbox-filled": '<path fill-rule="evenodd" clip-rule="evenodd" d="M8 6C6.89543 6 6 6.89543 6 8V24C6 25.1046 6.89543 26 8 26H24C25.1046 26 26 25.1046 26 24V8C26 6.89543 25.1046 6 24 6H8ZM20.8742 11.4856C21.1424 11.0029 20.9684 10.3941 20.4856 10.1258C20.0029 9.85763 19.3941 10.0316 19.1258 10.5144L14.8747 18.1663L12.8 15.4001C12.4686 14.9582 11.8418 14.8687 11.4 15.2001C10.9582 15.5315 10.8686 16.1583 11.2 16.6001L14.2 20.6C14.4033 20.8711 14.7301 21.0208 15.0682 20.9977C15.4062 20.9746 15.7096 20.7819 15.8742 20.4856L20.8742 11.4856Z" fill="currentColor"></path>',
    "checkbox-hollow": '<path fill-rule="evenodd" clip-rule="evenodd" d="M8 5.5C6.61929 5.5 5.5 6.61929 5.5 8V24C5.5 25.3807 6.61929 26.5 8 26.5H24C25.3807 26.5 26.5 25.3807 26.5 24V8C26.5 6.61929 25.3807 5.5 24 5.5H8ZM6.5 8C6.5 7.17157 7.17157 6.5 8 6.5H24C24.8284 6.5 25.5 7.17157 25.5 8V24C25.5 24.8284 24.8284 25.5 24 25.5H8C7.17157 25.5 6.5 24.8284 6.5 24V8Z" fill="currentColor"></path>',
    "checkbox-unselectable": '<path fill-rule="evenodd" clip-rule="evenodd" d="M7 26.5C6.17157 26.5 5.5 25.8284 5.5 25V7C5.5 6.17157 6.17157 5.5 7 5.5H25C25.8284 5.5 26.5 6.17157 26.5 7V9.33334V25C26.5 25.8284 25.8284 26.5 25 26.5H7ZM6.5 25C6.5 25.2761 6.72386 25.5 7 25.5H25C25.2761 25.5 25.5 25.2761 25.5 25V9.33334V7C25.5 6.72386 25.2761 6.5 25 6.5H7C6.72386 6.5 6.5 6.72386 6.5 7V25ZM12 15C11.4477 15 11 15.4477 11 16C11 16.5523 11.4477 17 12 17H20C20.5523 17 21 16.5523 21 16C21 15.4477 20.5523 15 20 15H12Z" fill="currentColor"></path>',
    "checkbox-unselectable-filled": '<path fill-rule="evenodd" clip-rule="evenodd" d="M8 6C6.89543 6 6 6.89543 6 8V24C6 25.1046 6.89543 26 8 26H24C25.1046 26 26 25.1046 26 24V8C26 6.89543 25.1046 6 24 6H8ZM12 15C11.4477 15 11 15.4477 11 16C11 16.5523 11.4477 17 12 17H20C20.5523 17 21 16.5523 21 16C21 15.4477 20.5523 15 20 15H12Z" fill="currentColor"></path>',
    "chevron-down": '<path fill-rule="evenodd" clip-rule="evenodd" d="M5.70711 10.2929C5.31658 9.90237 4.68342 9.90237 4.29289 10.2929C3.90237 10.6834 3.90237 11.3166 4.29289 11.7071L15.2921 22.7063C15.2923 22.7066 15.2926 22.7068 15.2929 22.7071C15.6834 23.0976 16.3166 23.0976 16.7071 22.7071C16.7074 22.7068 16.7077 22.7066 16.7079 22.7063L27.7071 11.7071C28.0976 11.3166 28.0976 10.6834 27.7071 10.2929C27.3166 9.90237 26.6834 9.90237 26.2929 10.2929L16 20.5858L5.70711 10.2929Z" fill="currentColor"></path>',
    "chevron-left": '<path fill-rule="evenodd" clip-rule="evenodd" d="M20.2929 4.29289C20.6834 3.90237 21.3166 3.90237 21.7071 4.29289C22.0976 4.68342 22.0976 5.31658 21.7071 5.70711L11.4142 16L21.7071 26.2929C22.0976 26.6834 22.0976 27.3166 21.7071 27.7071C21.3166 28.0976 20.6834 28.0976 20.2929 27.7071L9.29289 16.7071C9 16.4142 8.92678 15.9848 9.07322 15.6237C9.12204 15.5033 9.19526 15.3905 9.29289 15.2929C9.29326 15.2925 9.29362 15.2922 9.29398 15.2918L20.2929 4.29289Z" fill="currentColor"></path>',
    "chevron-left-with-stop": '<path fill-rule="evenodd" clip-rule="evenodd" d="M15.4142 16L25.7071 5.70711C26.0976 5.31658 26.0976 4.68342 25.7071 4.29289C25.3166 3.90237 24.6834 3.90237 24.2929 4.29289L13.2929 15.2929L12.5858 16L13.2929 16.7071L24.2929 27.7071C24.6834 28.0976 25.3166 28.0976 25.7071 27.7071C26.0976 27.3166 26.0976 26.6834 25.7071 26.2929L15.4142 16ZM10 5C10 4.44772 9.55228 4 9 4C8.44772 4 8 4.44772 8 5V27C8 27.5523 8.44772 28 9 28C9.55228 28 10 27.5523 10 27V5Z" fill="currentColor"></path>',
    "chevron-right": '<path fill-rule="evenodd" clip-rule="evenodd" d="M10.7071 4.29289C10.3166 3.90237 9.68342 3.90237 9.29289 4.29289C8.90237 4.68342 8.90237 5.31658 9.29289 5.70711L19.5858 16L9.29289 26.2929C8.90237 26.6834 8.90237 27.3166 9.29289 27.7071C9.68342 28.0976 10.3166 28.0976 10.7071 27.7071L21.7063 16.7079C21.7066 16.7077 21.7068 16.7074 21.7071 16.7071C22.0976 16.3166 22.0976 15.6834 21.7071 15.2929C21.7068 15.2926 21.7066 15.2923 21.7063 15.2921L10.7071 4.29289Z" fill="currentColor"></path>',
    "chevron-right-with-stop": '<path fill-rule="evenodd" clip-rule="evenodd" d="M7.70711 4.29289C7.31658 3.90237 6.68342 3.90237 6.29289 4.29289C5.90237 4.68342 5.90237 5.31658 6.29289 5.70711L16.5858 16L6.29289 26.2929C5.90237 26.6834 5.90237 27.3166 6.29289 27.7071C6.68342 28.0976 7.31658 28.0976 7.70711 27.7071L18.7071 16.7071L19.4142 16L18.7071 15.2929L7.70711 4.29289ZM24 5C24 4.44772 23.5523 4 23 4C22.4477 4 22 4.44772 22 5V27C22 27.5523 22.4477 28 23 28C23.5523 28 24 27.5523 24 27V5Z" fill="currentColor"></path>',
    "chevron-up": '<path fill-rule="evenodd" clip-rule="evenodd" d="M15.2929 9.29289C15.6834 8.90237 16.3166 8.90237 16.7071 9.29289L27.7071 20.2929C28.0976 20.6834 28.0976 21.3166 27.7071 21.7071C27.3166 22.0976 26.6834 22.0976 26.2929 21.7071L16 11.4142L5.70711 21.7071C5.31658 22.0976 4.68342 22.0976 4.29289 21.7071C3.90237 21.3166 3.90237 20.6834 4.29289 20.2929L15.2929 9.29289Z" fill="currentColor"></path>',
    "circle-filled": '<circle cx="16" cy="16" r="13" fill="currentColor"></circle>',
    "circle-hollow": '<path fill-rule="evenodd" clip-rule="evenodd" d="M5 16C5 9.92487 9.92487 5 16 5C22.0751 5 27 9.92487 27 16C27 22.0751 22.0751 27 16 27C9.92487 27 5 22.0751 5 16ZM16 3C8.8203 3 3 8.8203 3 16C3 23.1797 8.8203 29 16 29C23.1797 29 29 23.1797 29 16C29 8.8203 23.1797 3 16 3Z" fill="currentColor"></path>',
    "clipboard-check": '<path fill-rule="evenodd" clip-rule="evenodd" d="M5 5C5 3.89543 5.89543 3 7 3H25C26.1046 3 27 3.89543 27 5V27C27 28.1046 26.1046 29 25 29H7C5.89543 29 5 28.1046 5 27V5ZM11 5L7 5V27H25V5H21V7C21 7.55228 20.5523 8 20 8H12C11.4477 8 11 7.55228 11 7V5ZM20.4856 11.1258C20.9684 11.3941 21.1424 12.0029 20.8742 12.4856L15.8742 21.4856C15.7096 21.7819 15.4062 21.9746 15.0681 21.9977C14.7301 22.0208 14.4033 21.8711 14.2 21.6L11.2 17.6C10.8686 17.1581 10.9582 16.5313 11.4 16.2C11.8418 15.8686 12.4686 15.9581 12.8 16.4L14.8748 19.1663L19.1258 11.5144C19.3941 11.0316 20.0029 10.8576 20.4856 11.1258Z" fill="currentColor"></path>',
    close: '<path fill-rule="evenodd" clip-rule="evenodd" d="M8.70711 7.29289C8.31658 6.90237 7.68342 6.90237 7.29289 7.29289C6.90237 7.68342 6.90237 8.31658 7.29289 8.70711L14.5858 16L7.29289 23.2929C6.90237 23.6834 6.90237 24.3166 7.29289 24.7071C7.68342 25.0976 8.31658 25.0976 8.70711 24.7071L16 17.4142L23.2929 24.7071C23.6834 25.0976 24.3166 25.0976 24.7071 24.7071C25.0976 24.3166 25.0976 23.6834 24.7071 23.2929L17.4142 16L24.7071 8.70711C25.0976 8.31658 25.0976 7.68342 24.7071 7.2929C24.3166 6.90237 23.6834 6.90237 23.2929 7.2929L16 14.5858L8.70711 7.29289Z" fill="currentColor"></path>',
    "close-circle-filled": '<path fill-rule="evenodd" clip-rule="evenodd" d="M16 29C23.1797 29 29 23.1797 29 16C29 8.8203 23.1797 3 16 3C8.8203 3 3 8.8203 3 16C3 23.1797 8.8203 29 16 29ZM11.2929 11.2929C11.6834 10.9024 12.3166 10.9024 12.7071 11.2929L16 14.5858L19.2929 11.2929C19.6834 10.9024 20.3166 10.9024 20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L17.4142 16L20.7071 19.2929C21.0976 19.6834 21.0976 20.3166 20.7071 20.7071C20.3166 21.0976 19.6834 21.0976 19.2929 20.7071L16 17.4142L12.7071 20.7071C12.3166 21.0976 11.6834 21.0976 11.2929 20.7071C10.9024 20.3166 10.9024 19.6834 11.2929 19.2929L14.5858 16L11.2929 12.7071C10.9024 12.3166 10.9024 11.6834 11.2929 11.2929Z" fill="currentColor"></path>',
    "close-circle-hollow": '<path fill-rule="evenodd" clip-rule="evenodd" d="M16 5C9.92487 5 5 9.92487 5 16C5 22.0751 9.92487 27 16 27C22.0751 27 27 22.0751 27 16C27 9.92487 22.0751 5 16 5ZM3 16C3 8.8203 8.8203 3 16 3C23.1797 3 29 8.8203 29 16C29 23.1797 23.1797 29 16 29C8.8203 29 3 23.1797 3 16ZM11.2929 11.2929C11.6834 10.9024 12.3166 10.9024 12.7071 11.2929L16 14.5858L19.2929 11.2929C19.6834 10.9024 20.3166 10.9024 20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L17.4142 16L20.7071 19.2929C21.0976 19.6834 21.0976 20.3166 20.7071 20.7071C20.3166 21.0976 19.6834 21.0976 19.2929 20.7071L16 17.4142L12.7071 20.7071C12.3166 21.0976 11.6834 21.0976 11.2929 20.7071C10.9024 20.3166 10.9024 19.6834 11.2929 19.2929L14.5858 16L11.2929 12.7071C10.9024 12.3166 10.9024 11.6834 11.2929 11.2929Z" fill="currentColor"></path>',
    "closed-caption": '<path fill-rule="evenodd" clip-rule="evenodd" d="M5 3C3.89543 3 3 3.89543 3 5V27C3 28.1046 3.89543 29 5 29H27C28.1046 29 29 28.1046 29 27V5C29 3.89543 28.1046 3 27 3H5ZM5 5L27 5V27H5V5ZM14.5088 21.5657C15.0251 21.2654 15.4425 20.8954 15.7611 20.4558L14.2945 18.6702C14.1407 18.9062 13.932 19.1099 13.6684 19.2815C13.4047 19.4531 13.0972 19.5389 12.7456 19.5389C12.3941 19.5389 12.0865 19.4477 11.8229 19.2654C11.5592 19.0831 11.334 18.8311 11.1473 18.5094C10.9715 18.1877 10.8397 17.8123 10.7518 17.3834C10.6639 16.9544 10.62 16.4933 10.62 16C10.62 15.5067 10.6639 15.0456 10.7518 14.6166C10.8397 14.1769 10.9715 13.8016 11.1473 13.4906C11.334 13.1689 11.5537 12.9169 11.8064 12.7346C12.07 12.5523 12.3776 12.4611 12.7291 12.4611C13.1026 12.4611 13.4102 12.5362 13.6519 12.6863C13.9046 12.8365 14.1298 13.0402 14.3275 13.2976L15.7446 11.4316C15.426 11.0241 15.0031 10.6863 14.4758 10.4182C13.9595 10.1394 13.3114 10 12.5314 10C11.8503 10 11.2297 10.1448 10.6694 10.4343C10.1202 10.7239 9.64779 11.1314 9.25232 11.6568C8.85685 12.1823 8.54926 12.815 8.32956 13.555C8.10985 14.2949 8 15.1099 8 16C8 16.8794 8.10985 17.689 8.32956 18.429C8.54926 19.1582 8.85685 19.7909 9.25232 20.3271C9.64779 20.8525 10.1202 21.2654 10.6694 21.5657C11.2297 21.8552 11.8503 22 12.5314 22C13.3333 22 13.9924 21.8552 14.5088 21.5657ZM22.7477 21.5657C23.264 21.2654 23.6814 20.8954 24 20.4558L22.5335 18.6702C22.3797 18.9062 22.171 19.1099 21.9073 19.2815C21.6437 19.4531 21.3361 19.5389 20.9846 19.5389C20.633 19.5389 20.3254 19.4477 20.0618 19.2654C19.7981 19.0831 19.573 18.8311 19.3862 18.5094C19.2104 18.1877 19.0786 17.8123 18.9907 17.3834C18.9029 16.9544 18.8589 16.4933 18.8589 16C18.8589 15.5067 18.9029 15.0456 18.9907 14.6166C19.0786 14.1769 19.2104 13.8016 19.3862 13.4906C19.573 13.1689 19.7927 12.9169 20.0453 12.7346C20.309 12.5523 20.6165 12.4611 20.9681 12.4611C21.3416 12.4611 21.6492 12.5362 21.8908 12.6863C22.1435 12.8365 22.3687 13.0402 22.5664 13.2976L23.9835 11.4316C23.665 11.0241 23.242 10.6863 22.7147 10.4182C22.1984 10.1394 21.5503 10 20.7703 10C20.0893 10 19.4686 10.1448 18.9083 10.4343C18.3591 10.7239 17.8867 11.1314 17.4912 11.6568C17.0958 12.1823 16.7882 12.815 16.5685 13.555C16.3488 14.2949 16.2389 15.1099 16.2389 16C16.2389 16.8794 16.3488 17.689 16.5685 18.429C16.7882 19.1582 17.0958 19.7909 17.4912 20.3271C17.8867 20.8525 18.3591 21.2654 18.9083 21.5657C19.4686 21.8552 20.0893 22 20.7703 22C21.5723 22 22.2314 21.8552 22.7477 21.5657Z" fill="currentColor"></path>',
    "cog-filled": '<path fill-rule="evenodd" clip-rule="evenodd" d="M19.8333 3L20.3938 5.78652C21.2912 6.14647 22.1302 6.62127 22.8926 7.19276L25.5872 6.12444L29.2181 11.7156L27.0822 13.8052C27.2258 14.5145 27.3012 15.2484 27.3012 16C27.3012 16.7517 27.2258 17.4858 27.0821 18.1951L29.2181 20.2849L25.5872 25.876L22.8922 24.8075C22.1299 25.3789 21.2911 25.8536 20.3938 26.2135L19.8333 29H13.1666L12.6387 26.3755C11.6339 26.0209 10.6961 25.5244 9.84931 24.9101L7.41267 25.8762L3.78174 20.2851L5.59019 18.5157C5.40116 17.7078 5.30119 16.8656 5.30119 16C5.30119 15.1346 5.40113 14.2925 5.59011 13.4846L3.78175 11.7154L7.41268 6.12426L9.84891 7.09015C10.6958 6.47576 11.6338 5.97918 12.6387 5.62445L13.1666 3H19.8333ZM16.3012 20C18.5103 20 20.3012 18.2091 20.3012 16C20.3012 13.7909 18.5103 12 16.3012 12C14.0921 12 12.3012 13.7909 12.3012 16C12.3012 18.2091 14.0921 20 16.3012 20Z" fill="currentColor"></path>',
    "cog-hollow": '<path fill-rule="evenodd" clip-rule="evenodd" d="M14.1667 3H13.3806L13.195 3.76382L12.7522 5.58539C11.6772 5.95162 10.6775 6.47933 9.78206 7.13917L7.93923 6.50594L7.20083 6.25221L6.77559 6.90702L4.16133 10.9326L3.73608 11.5875L4.26821 12.1588L5.57308 13.5599C5.39507 14.3455 5.30127 15.1623 5.30127 16C5.30127 16.8377 5.39509 17.6546 5.57313 18.4403L4.26821 19.8415L3.73608 20.4128L4.16133 21.0676L6.77559 25.0933L7.20083 25.7481L7.93923 25.4943L9.78231 24.861C10.6777 25.5208 11.6773 26.0484 12.7522 26.4146L13.195 28.2362L13.3806 29H14.1667H18.8333H19.6194L19.805 28.2362L20.2864 26.2556C21.2137 25.895 22.0796 25.4126 22.8645 24.8282L24.8031 25.4943L25.5415 25.7481L25.9668 25.0933L28.581 21.0676L29.0063 20.4128L28.4741 19.8415L27.0562 18.319C27.2168 17.5706 27.3013 16.7947 27.3013 16C27.3013 15.2054 27.2169 14.4296 27.0562 13.6813L28.4741 12.1588L29.0063 11.5875L28.581 10.9326L25.9668 6.90702L25.5415 6.25221L24.8031 6.50594L22.8648 7.17199C22.0798 6.58752 21.2138 6.10499 20.2864 5.74438L19.805 3.76382L19.6194 3H18.8333H14.1667ZM14.5619 6.60804L14.9527 5H18.0473L18.47 6.73924L18.6011 7.27843L19.1279 7.45255C20.2007 7.80711 21.1849 8.35847 22.0376 9.06463L22.4697 9.42251L23.0004 9.24017L24.7147 8.65111L26.4784 11.3671L25.2263 12.7116L24.8482 13.1175L24.9925 13.6531C25.1937 14.4002 25.3013 15.1868 25.3013 16C25.3013 16.8133 25.1936 17.5999 24.9924 18.347L24.8482 18.8827L25.2262 19.2886L26.4784 20.6332L24.7147 23.3492L23.0002 22.76L22.4695 22.5777L22.0374 22.9355C21.1847 23.6416 20.2006 24.1929 19.1279 24.5474L18.6011 24.7216L18.47 25.2608L18.0473 27H14.9527L14.5619 25.392L14.4237 24.8236L13.8607 24.6654C12.6534 24.3262 11.548 23.7409 10.6022 22.9661L10.1709 22.6127L9.64354 22.7939L8.02769 23.3492L6.26391 20.6332L7.40825 19.4045L7.79173 18.9927L7.63884 18.4512C7.41914 17.6731 7.30127 16.8511 7.30127 16C7.30127 15.1489 7.41912 14.3271 7.63878 13.549L7.79166 13.0075L7.40819 12.5957L6.26391 11.3671L8.02769 8.65111L9.6433 9.20627L10.1707 9.38748L10.602 9.0341C11.5478 8.25922 12.6533 7.67386 13.8607 7.33457L14.4237 7.17635L14.5619 6.60804ZM13.3013 16C13.3013 14.3431 14.6444 13 16.3013 13C17.9581 13 19.3013 14.3431 19.3013 16C19.3013 17.6569 17.9581 19 16.3013 19C14.6444 19 13.3013 17.6569 13.3013 16ZM16.3013 11C13.5398 11 11.3013 13.2386 11.3013 16C11.3013 18.7614 13.5398 21 16.3013 21C19.0627 21 21.3013 18.7614 21.3013 16C21.3013 13.2386 19.0627 11 16.3013 11Z" fill="currentColor"></path>',
    collection: '<path fill-rule="evenodd" clip-rule="evenodd" d="M23 23H26V5H20V3H27C27.5523 3 28 3.44772 28 4V24C28 24.5523 27.5523 25 27 25H23V28C23 28.5523 22.5523 29 22 29H6C5.73478 29 5.48043 28.8946 5.29289 28.7071C5.10536 28.5196 5 28.2652 5 28V8H7V27H21V13.3333V10H15V8H22C22.5523 8 23 8.44772 23 9V13.3333V23ZM12 15.5C12 16.3284 12.6716 17 13.5 17C14.3284 17 15 16.3284 15 15.5V13H17V15.5C17 17.433 15.433 19 13.5 19C11.567 19 10 17.433 10 15.5V6C10 4.34315 11.3431 3 13 3H17V5H13C12.4477 5 12 5.44772 12 6V15.5Z" fill="currentColor"></path>',
    "comment-add-filled": '<path fill-rule="evenodd" clip-rule="evenodd" d="M3 4C3 3.44772 3.44772 3 4 3H28C28.5523 3 29 3.44772 29 4V22C29 22.5523 28.5523 23 28 23H16H15L8 30V23H4C3.44772 23 3 22.5523 3 22V4ZM16 8C16.5523 8 17 8.44772 17 9V12H20C20.5523 12 21 12.4477 21 13C21 13.5523 20.5523 14 20 14H17V17C17 17.5523 16.5523 18 16 18C15.4477 18 15 17.5523 15 17V14H12C11.4477 14 11 13.5523 11 13C11 12.4477 11.4477 12 12 12H15V9C15 8.44772 15.4477 8 16 8Z" fill="currentColor"></path>',
    "comment-add-hollow": '<path fill-rule="evenodd" clip-rule="evenodd" d="M5 3C3.89543 3 3 3.89543 3 5V21C3 22.1046 3.89543 23 5 23H8V30L15 23H16H27C28.1046 23 29 22.1046 29 21V5C29 3.89543 28.1046 3 27 3H5ZM5 5L27 5V21H16H13H11H5V5ZM11 13C11 12.4477 11.4477 12 12 12H15V9C15 8.44772 15.4477 8 16 8C16.5523 8 17 8.44772 17 9V12H20C20.5523 12 21 12.4477 21 13C21 13.5523 20.5523 14 20 14H17V17C17 17.5523 16.5523 18 16 18C15.4477 18 15 17.5523 15 17V14H12C11.4477 14 11 13.5523 11 13Z" fill="currentColor"></path>',
    "comment-filled": '<path fill-rule="evenodd" clip-rule="evenodd" d="M3 6C3 5.44772 3.44772 5 4 5H28C28.5523 5 29 5.44772 29 6V21C29 21.5523 28.5523 22 28 22H17L10 28V22H4C3.44772 22 3 21.5523 3 21V6Z" fill="currentColor"></path>',
    "comment-hollow": '<path fill-rule="evenodd" clip-rule="evenodd" d="M5 5C3.89543 5 3 5.89543 3 7V20C3 21.1046 3.89543 22 5 22H10V26V28.135L11.6402 26.7682L17.3621 22H27C28.1046 22 29 21.1046 29 20V7C29 5.89543 28.1046 5 27 5H5ZM5 7L27 7V20H17H16.6379L16.3598 20.2318L12 23.865V21V20H11H5V7Z" fill="currentColor"></path>',
    "commenting-filled": '<path fill-rule="evenodd" clip-rule="evenodd" d="M5 4.43018C3.89543 4.43018 3 5.3256 3 6.43017V19.4302C3 20.5347 3.89543 21.4302 5 21.4302H10V25.4302V27.5652L11.6402 26.1984L17.3621 21.4302H27C28.1046 21.4302 29 20.5347 29 19.4302V6.43018C29 5.32561 28.1046 4.43018 27 4.43018H5ZM5 6.43017L27 6.43018V19.4302L17 19.4302H16.6379L16.3598 19.6619L12 23.2951V20.4302V19.4302H11H5V6.43017ZM9.5 14.4302C10.3284 14.4302 11 13.7586 11 12.9302C11 12.1017 10.3284 11.4302 9.5 11.4302C8.67157 11.4302 8 12.1017 8 12.9302C8 13.7586 8.67157 14.4302 9.5 14.4302ZM17 12.9302C17 13.7586 16.3284 14.4302 15.5 14.4302C14.6716 14.4302 14 13.7586 14 12.9302C14 12.1017 14.6716 11.4302 15.5 11.4302C16.3284 11.4302 17 12.1017 17 12.9302ZM21.5 14.4302C22.3284 14.4302 23 13.7586 23 12.9302C23 12.1017 22.3284 11.4302 21.5 11.4302C20.6716 11.4302 20 12.1017 20 12.9302C20 13.7586 20.6716 14.4302 21.5 14.4302Z" fill="currentColor"></path>',
    "commenting-hollow": '<path fill-rule="evenodd" clip-rule="evenodd" d="M4 4C3.44772 4 3 4.44772 3 5V20C3 20.5523 3.44772 21 4 21H10V27L17 21H28C28.5523 21 29 20.5523 29 20V5C29 4.44772 28.5523 4 28 4H4ZM9.5 14C10.3284 14 11 13.3284 11 12.5C11 11.6716 10.3284 11 9.5 11C8.67157 11 8 11.6716 8 12.5C8 13.3284 8.67157 14 9.5 14ZM15.5 14C16.3284 14 17 13.3284 17 12.5C17 11.6716 16.3284 11 15.5 11C14.6716 11 14 11.6716 14 12.5C14 13.3284 14.6716 14 15.5 14ZM23 12.5C23 13.3284 22.3284 14 21.5 14C20.6716 14 20 13.3284 20 12.5C20 11.6716 20.6716 11 21.5 11C22.3284 11 23 11.6716 23 12.5Z" fill="currentColor"></path>',
    "comments-filled": '<path fill-rule="evenodd" clip-rule="evenodd" d="M4 3C3.44772 3 3 3.44772 3 4V19C3 19.5523 3.44771 20 4 20H7V25L12 20L14.1765 20H15V23.9997C15 25.1042 15.8954 25.9997 17 25.9997H20.1996L25 30V25.9997H27C28.1046 25.9997 29 25.1042 29 23.9997V11C29 9.89543 28.1046 9 27 9H22V4C22 3.44772 21.5523 3 21 3H4ZM22 11V19C22 19.5523 21.5523 20 21 20H17V23.9997L27 23.9997V11H22Z" fill="currentColor"></path>',
    "comments-hollow": '<path fill-rule="evenodd" clip-rule="evenodd" d="M5 3C3.89543 3 3 3.89543 3 5V18C3 19.1046 3.89543 20 5 20H7V25L12 20L14 20H15V23.9997C15 25.1042 15.8954 25.9997 17 25.9997H20.1996L25 30V25.9997H27C28.1046 25.9997 29 25.1042 29 23.9997V11C29 9.89543 28.1046 9 27 9H22V5C22 3.89543 21.1046 3 20 3H5ZM22 11V18C22 19.1046 21.1046 20 20 20H17V23.9997L27 23.9997V11H22ZM5 5L20 5V18L14 18L11 18L9 18H5V5Z" fill="currentColor"></path>',
    contract: '<path fill-rule="evenodd" clip-rule="evenodd" d="M13 12C13 12.5523 12.5522 13 12 13L4.00415 13L4.00415 11L11 11L11 4L13 4L13 12ZM13 20C13 19.4477 12.5523 19 12 19H4.00419V21H11L11 28H13V20ZM20.0027 19C19.4504 19 19.0027 19.4477 19.0027 20V28H21.0027V21H27.9985V19H20.0027ZM19 12C19 12.5523 19.4477 13 20 13H27.9958V11H21V4H19V12Z" fill="currentColor"></path>',
    copy: '<path fill-rule="evenodd" clip-rule="evenodd" d="M7.41421 3C6.88378 3 6.37507 3.21071 6 3.58579L3.58579 6C3.21071 6.37507 3 6.88378 3 7.41421V20C3 20.3233 3.11121 20.6014 3.21484 20.7944C3.32501 20.9996 3.46869 21.1868 3.62333 21.3452C3.88514 21.6134 4.38008 22 5 22H13L13 27C13 28.1046 13.8954 29 15 29H26C27.1046 29 28 28.1046 28 27V12C28 10.8954 27.1046 10 26 10H18V5C18 3.89543 17.1046 3 16 3H7.41421ZM13 14.4142V20H5.11211L5.11091 19.9991C5.09324 19.9852 5.0739 19.968 5.0545 19.9482C5.03511 19.9283 5.01797 19.9081 5.00388 19.8893L5 19.884V10H10V5H16V10.5858L13.5858 13C13.2107 13.3751 13 13.8838 13 14.4142ZM15 17V20L15 27H26V12H20V17H15Z" fill="currentColor"></path>',
    "copy-clipboard": '<path fill-rule="evenodd" clip-rule="evenodd" d="M5 3C3.89543 3 3 3.89543 3 5V20C3 21.1046 3.89543 22 5 22H13L13 27C13 28.1046 13.8954 29 15 29H26C27.1046 29 28 28.1046 28 27V12C28 10.8954 27.1046 10 26 10H18V5C18 3.89543 17.1046 3 16 3H5ZM13 14.4142V20H5V5H7V8H14V5H16V10.5858L13.5858 13C13.2107 13.3751 13 13.8838 13 14.4142ZM15 17V20L15 27H26V12H20V17H15Z" fill="currentColor"></path>',
    "decodables-filled": '<path d="M14.5 5C16.5 5 17 6.66667 17 7.5V10H22V15H24.5C25.3333 15 27 15.5 27 17.5C27 19.5 25.3333 20 24.5 20H22V25H7V20H9.5C10.3333 20 12 19.5 12 17.5C12 15.5 10.3333 15 9.5 15H7V10H12V7.5C12 6.66667 12.5 5 14.5 5Z" fill="currentColor"></path>',
    "decodables-hollow": '<path d="M14.5 4C15.8259 4 16.7511 4.57519 17.3115 5.35352C17.8351 6.08081 18 6.92336 18 7.5V9H22C22.5523 9 23 9.44772 23 10V14H24.5C25.0766 14 25.9192 14.1649 26.6465 14.6885C27.4248 15.2489 28 16.1741 28 17.5C28 18.8259 27.4248 19.7511 26.6465 20.3115C25.9192 20.8351 25.0766 21 24.5 21H23V25C23 25.5523 22.5523 26 22 26H7C6.44772 26 6 25.5523 6 25V20L6.00488 19.8975C6.05621 19.3933 6.48232 19 7 19H9.5C9.75664 19 10.1642 18.9148 10.4785 18.6885C10.7418 18.4989 11 18.1739 11 17.5C11 16.8261 10.7418 16.5011 10.4785 16.3115C10.1642 16.0852 9.75664 16 9.5 16H7C6.44772 16 6 15.5523 6 15V10L6.00488 9.89746C6.05621 9.39333 6.48232 9 7 9H11V7.5C11 6.92336 11.1649 6.08081 11.6885 5.35352C12.2489 4.57519 13.1741 4 14.5 4ZM14.5 6C13.8261 6 13.5011 6.25822 13.3115 6.52148C13.0852 6.83581 13 7.24336 13 7.5V10C13 10.5523 12.5523 11 12 11H8V14H9.5C10.0766 14 10.9192 14.1649 11.6465 14.6885C12.4248 15.2489 13 16.1741 13 17.5C13 18.8259 12.4248 19.7511 11.6465 20.3115C10.9192 20.8351 10.0766 21 9.5 21H8V24H21V20C21 19.4477 21.4477 19 22 19H24.5C24.7566 19 25.1642 18.9148 25.4785 18.6885C25.7418 18.4989 26 18.1739 26 17.5C26 16.8261 25.7418 16.5011 25.4785 16.3115C25.1642 16.0852 24.7566 16 24.5 16H22C21.4477 16 21 15.5523 21 15V11H17C16.4477 11 16 10.5523 16 10V7.5C16 7.24336 15.9148 6.83581 15.6885 6.52148C15.4989 6.25822 15.1739 6 14.5 6Z" fill="currentColor"></path>',
    desktop: '<path fill-rule="evenodd" clip-rule="evenodd" d="M3 5C3 4.44772 3.44772 4 4 4H28C28.5523 4 29 4.44772 29 5V21C29 21.5523 28.5523 22 28 22H17V27H25C25.5523 27 26 27.4477 26 28C26 28.5523 25.5523 29 25 29H7C6.44772 29 6 28.5523 6 28C6 27.4477 6.44772 27 7 27H15V22H4C3.44772 22 3 21.5523 3 21V5ZM5 6V20H27V6H5Z" fill="currentColor"></path>',
    details: '<path fill-rule="evenodd" clip-rule="evenodd" d="M5 3C3.89543 3 3 3.89543 3 5V27C3 28.1046 3.89543 29 5 29H21C22.1046 29 23 28.1046 23 27V22.4142L27.2929 26.7071C27.6834 27.0976 28.3166 27.0976 28.7071 26.7071C29.0976 26.3166 29.0976 25.6834 28.7071 25.2929L24.4447 21.0305C25.4111 19.9654 26 18.5515 26 17C26 14.7792 24.7934 12.8401 23 11.8027V5C23 3.89543 22.1046 3 21 3H5ZM22.4196 20.1854C23.38 19.4548 24 18.2998 24 17C24 14.7909 22.2091 13 20 13C17.7909 13 16 14.7909 16 17C16 19.2091 17.7909 21 20 21C20.892 21 21.7159 20.708 22.3812 20.2143C22.3938 20.2044 22.4066 20.1947 22.4196 20.1854ZM20 23C20.3407 23 20.6748 22.9716 21 22.917V27H5V5L21 5V11.083C20.6748 11.0284 20.3407 11 20 11C17.3876 11 15.1651 12.6696 14.3414 15H9C8.44772 15 8 15.4477 8 16C8 16.5523 8.44772 17 9 17H14C14 18.5367 14.5777 19.9385 15.5278 21H9C8.44772 21 8 21.4477 8 22C8 22.5523 8.44772 23 9 23H17C17.3327 23 17.6275 22.8375 17.8093 22.5875C18.488 22.8538 19.2269 23 20 23ZM9 9C8.44772 9 8 9.44772 8 10C8 10.5523 8.44772 11 9 11H17C17.5523 11 18 10.5523 18 10C18 9.44772 17.5523 9 17 9H9Z" fill="currentColor"></path>',
    district: '<path d="M15.9998 11V4L21.9998 6L15.9998 8M15.9998 11H12.0001V14.6667L4.66675 17.3333V28H12.9998V23C12.9998 21.8954 13.8953 21 14.9998 21H16.9998C18.1044 21 18.9998 21.8954 18.9998 23V28H27.3334V17.3333L20.0001 14.6667V11H15.9998Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"></path>',
    "dot-filled": '<circle cx="16" cy="16" r="5" fill="currentColor"></circle>',
    "dot-hollow": '<path fill-rule="evenodd" clip-rule="evenodd" d="M13 16C13 14.3431 14.3431 13 16 13C17.6569 13 19 14.3431 19 16C19 17.6569 17.6569 19 16 19C14.3431 19 13 17.6569 13 16ZM16 11C13.2386 11 11 13.2386 11 16C11 18.7614 13.2386 21 16 21C18.7614 21 21 18.7614 21 16C21 13.2386 18.7614 11 16 11Z" fill="currentColor"></path>',
    "dotted-menu": '<path fill-rule="evenodd" clip-rule="evenodd" d="M10 8C10 9.10457 9.10457 10 8 10C6.89543 10 6 9.10457 6 8C6 6.89543 6.89543 6 8 6C9.10457 6 10 6.89543 10 8ZM10 16C10 17.1046 9.10457 18 8 18C6.89543 18 6 17.1046 6 16C6 14.8954 6.89543 14 8 14C9.10457 14 10 14.8954 10 16ZM8 26C9.10457 26 10 25.1046 10 24C10 22.8954 9.10457 22 8 22C6.89543 22 6 22.8954 6 24C6 25.1046 6.89543 26 8 26ZM18 8C18 9.10457 17.1046 10 16 10C14.8954 10 14 9.10457 14 8C14 6.89543 14.8954 6 16 6C17.1046 6 18 6.89543 18 8ZM24 10C25.1046 10 26 9.10457 26 8C26 6.89543 25.1046 6 24 6C22.8954 6 22 6.89543 22 8C22 9.10457 22.8954 10 24 10ZM18 16C18 17.1046 17.1046 18 16 18C14.8954 18 14 17.1046 14 16C14 14.8954 14.8954 14 16 14C17.1046 14 18 14.8954 18 16ZM24 18C25.1046 18 26 17.1046 26 16C26 14.8954 25.1046 14 24 14C22.8954 14 22 14.8954 22 16C22 17.1046 22.8954 18 24 18ZM18 24C18 25.1046 17.1046 26 16 26C14.8954 26 14 25.1046 14 24C14 22.8954 14.8954 22 16 22C17.1046 22 18 22.8954 18 24ZM24 26C25.1046 26 26 25.1046 26 24C26 22.8954 25.1046 22 24 22C22.8954 22 22 22.8954 22 24C22 25.1046 22.8954 26 24 26Z" fill="currentColor"></path>',
    "double-chevron-left": '<path fill-rule="evenodd" clip-rule="evenodd" d="M16.707 5.70711C17.0975 5.31658 17.0975 4.68342 16.707 4.29289C16.3165 3.90237 15.6833 3.90237 15.2928 4.29289L4.2928 15.2929L3.58569 16L4.2928 16.7071L15.2928 27.7071C15.6833 28.0976 16.3165 28.0976 16.707 27.7071C17.0975 27.3166 17.0975 26.6834 16.707 26.2929L6.41412 16L16.707 5.70711ZM27.707 5.70711C28.0975 5.31658 28.0975 4.68342 27.707 4.29289C27.3165 3.90237 26.6833 3.90237 26.2928 4.29289L15.2928 15.2929L14.5857 16L15.2928 16.7071L26.2928 27.7071C26.6833 28.0976 27.3165 28.0976 27.707 27.7071C28.0975 27.3166 28.0975 26.6834 27.707 26.2929L17.4141 16L27.707 5.70711Z" fill="currentColor"></path>',
    "double-chevron-right": '<path fill-rule="evenodd" clip-rule="evenodd" d="M5.70711 4.29289C5.31658 3.90237 4.68342 3.90237 4.29289 4.29289C3.90237 4.68342 3.90237 5.31658 4.29289 5.70711L14.5858 16L4.29289 26.2929C3.90237 26.6834 3.90237 27.3166 4.29289 27.7071C4.68342 28.0976 5.31658 28.0976 5.70711 27.7071L16.7071 16.7071L17.4142 16L16.7071 15.2929L5.70711 4.29289ZM16.7071 4.29289C16.3166 3.90237 15.6834 3.90237 15.2929 4.29289C14.9024 4.68342 14.9024 5.31658 15.2929 5.70711L25.5858 16L15.2929 26.2929C14.9024 26.6834 14.9024 27.3166 15.2929 27.7071C15.6834 28.0976 16.3166 28.0976 16.7071 27.7071L27.7071 16.7071L28.4142 16L27.7071 15.2929L16.7071 4.29289Z" fill="currentColor"></path>',
    download: '<path fill-rule="evenodd" clip-rule="evenodd" d="M16 6C16.5523 6 17 6.44772 17 7V15H22L16 23L10 15H15V7C15 6.44772 15.4477 6 16 6ZM7 19C7.55228 19 8 19.4477 8 20V26H24V20C24 19.4477 24.4477 19 25 19C25.5523 19 26 19.4477 26 20V27C26 27.5523 25.5523 28 25 28H7C6.44772 28 6 27.5523 6 27V20C6 19.4477 6.44772 19 7 19Z" fill="currentColor"></path>',
    draft: '<path fill-rule="evenodd" clip-rule="evenodd" d="M5 27C5 28.1046 5.89543 29 7 29H25C26.1046 29 27 28.1046 27 27V8C27 7.73479 26.8946 7.48043 26.7071 7.29289L22.7071 3.29289C22.5196 3.10536 22.2652 3 22 3H7C5.89543 3 5 3.89543 5 5V27ZM25 10V27H7V5H20V10H25ZM16 12.6668C16 12.1145 15.5523 11.6668 15 11.6668C14.4477 11.6668 14 12.1145 14 12.6668V17.2382V17.6981L14.3492 17.9974L18.3492 21.426C18.7685 21.7854 19.3998 21.7369 19.7593 21.3175C20.1187 20.8982 20.0701 20.2669 19.6508 19.9075L16 16.7782V12.6668Z" fill="currentColor"></path>',
    "edit-filled": '<path fill-rule="evenodd" clip-rule="evenodd" d="M23.4142 4.4144C22.6332 3.63335 21.3668 3.63335 20.5858 4.4144L6 19.0002L6 24.0002L11 24.0002L25.5858 9.4144C26.3668 8.63335 26.3668 7.36702 25.5858 6.58597L23.4142 4.4144ZM5 29.0002H27V27.0002H5V29.0002Z" fill="currentColor"></path>',
    "edit-hollow": '<path fill-rule="evenodd" clip-rule="evenodd" d="M20.8787 3.70729C22.0503 2.53572 23.9498 2.53572 25.1214 3.70729L26.293 4.87887C27.4645 6.05044 27.4645 7.94994 26.293 9.12151L11.7072 23.7073L11.4143 24.0002H11.0001L7.00007 24.0002H6.00007L6.00007 23.0002L6.00006 19.0002L6.00006 18.586L6.29296 18.2931L20.8787 3.70729ZM23.7072 5.12151C23.3166 4.73098 22.6835 4.73098 22.293 5.12151L20.4143 7.00019L23.0001 9.58597L24.8787 7.70729C25.2693 7.31677 25.2693 6.68361 24.8787 6.29308L23.7072 5.12151ZM21.5859 11.0002L19.0001 8.4144L8.00006 19.4144L8.00007 22.0002H10.5858L21.5859 11.0002ZM27 29.0002H5V27.0002H27V29.0002Z" fill="currentColor"></path>',
    "ela-detail": '<path fill-rule="evenodd" clip-rule="evenodd" d="M7.00011 6.51861L7 20.24L7.00004 20.2406L7.00031 20.2417C7.0008 20.2434 7.00268 20.2491 7.00842 20.2587C7.02074 20.2792 7.04822 20.3124 7.09763 20.3457C7.20876 20.4203 7.32603 20.4296 7.38624 20.4136C8.28675 20.1752 9.49682 19.9714 11.0001 19.9714C12.7307 19.9714 14.0723 20.2415 15.0001 20.5233V6.51862C14.8323 6.41566 14.6053 6.29031 14.3205 6.16327C13.592 5.83831 12.4802 5.5 11.0001 5.5C9.51997 5.5 8.40824 5.83831 7.67968 6.16327C7.39488 6.2903 7.1679 6.41566 7.00011 6.51861ZM17.0001 6.46867V20.5792C17.0477 20.5653 17.0964 20.5513 17.146 20.5373C18.0998 20.2691 19.4428 20 21.0001 20C22.5155 20 23.8277 20.2548 24.7758 20.5155C24.818 20.5272 24.8869 20.5209 24.9496 20.4773C24.9775 20.4579 24.9913 20.4393 24.9967 20.4299C24.999 20.4258 24.9997 20.4237 25 20.4222V6.46861C24.8684 6.37847 24.6853 6.2678 24.4447 6.15393C23.7916 5.84494 22.6884 5.5 21.0001 5.5C19.3118 5.5 18.2086 5.84494 17.5555 6.15393C17.3148 6.26783 17.1317 6.37852 17.0001 6.46867ZM30 5H26.3779L26.343 4.97291C26.1066 4.7911 25.764 4.5656 25.3 4.34607C24.3679 3.90506 22.9711 3.5 21.0001 3.5C19.0291 3.5 17.6323 3.90506 16.7002 4.34607C16.4045 4.48598 16.1581 4.62831 15.957 4.76021C15.735 4.62846 15.4608 4.48195 15.1352 4.33673C14.1823 3.91169 12.794 3.5 11.0001 3.5C9.20617 3.5 7.8179 3.91169 6.86498 4.33673C6.38959 4.54877 6.02367 4.76358 5.76991 4.93114C5.73364 4.95509 5.69963 4.9781 5.66791 5H2H1V6V25V26H2H12.8747C12.4913 27.4781 13.6012 29 15.2071 29H17.7334C19.34 29 20.4241 27.4561 20.0068 26H30H31V25V6V5H30ZM29 7H27.0001V20.4198L27 20.4419V22V23H26H16.2249L15.9462 23.132L15.7247 23H6H5V22V7H3V24H13.2965C14.5423 24 15.3664 25.294 14.8395 26.4229C14.714 26.6918 14.9103 27 15.2071 27H17.7334C18.0051 27 18.1789 26.7104 18.051 26.4706C17.4542 25.3515 18.2651 24 19.5334 24H29V7ZM9.26468 13.6855C8.78051 13.9397 8.18062 13.7576 7.92008 13.2751C7.65766 12.7892 7.83888 12.1825 8.32484 11.9201L8.79998 12.8C8.32484 11.9201 8.32514 11.9199 8.32545 11.9198L8.32609 11.9194L8.32742 11.9187L8.3303 11.9172L8.33691 11.9137L8.35355 11.905C8.36616 11.8986 8.3818 11.8908 8.40042 11.8818C8.43765 11.8639 8.48684 11.8413 8.54756 11.8158C8.66892 11.7647 8.8368 11.7016 9.04756 11.6401C9.46924 11.517 10.0638 11.4 10.8 11.4C11.5361 11.4 12.1307 11.517 12.5524 11.6401C12.7632 11.7016 12.9311 11.7647 13.0524 11.8158C13.1131 11.8413 13.1623 11.8639 13.1995 11.8818C13.2182 11.8908 13.2338 11.8986 13.2464 11.905L13.2631 11.9137L13.2697 11.9172L13.2725 11.9187L13.2739 11.9194L13.2745 11.9198C13.2748 11.9199 13.2751 11.9201 12.8 12.8L13.2751 11.9201C13.7611 12.1825 13.9423 12.7892 13.6799 13.2751C13.4193 13.7576 12.8195 13.9397 12.3353 13.6855L12.3318 13.6838C12.3236 13.6798 12.3051 13.6712 12.2767 13.6592C12.2198 13.6353 12.1238 13.5984 11.992 13.5599C11.7285 13.483 11.3231 13.4 10.8 13.4C10.2769 13.4 9.87147 13.483 9.60796 13.5599C9.47613 13.5984 9.38013 13.6353 9.32324 13.6592C9.29484 13.6712 9.27632 13.6798 9.26812 13.6838L9.26468 13.6855ZM7.92002 9.27514C8.18056 9.75762 8.78045 9.93971 9.26462 9.68547L9.26807 9.68379C9.27627 9.67984 9.29478 9.67117 9.32319 9.65922C9.38007 9.63528 9.47607 9.59842 9.6079 9.55994C9.87141 9.48302 10.2768 9.39999 10.7999 9.39999C11.323 9.39999 11.7284 9.48302 11.992 9.55994C12.1238 9.59842 12.2198 9.63528 12.2767 9.65922C12.3051 9.67117 12.3236 9.67984 12.3318 9.68379L12.3352 9.68546C12.8194 9.93971 13.4193 9.75762 13.6798 9.27514C13.9422 8.78918 13.761 8.18251 13.2751 7.92009L12.7999 8.79999C13.2751 7.92009 13.2748 7.91992 13.2745 7.91975L13.2738 7.91941L13.2725 7.9187L13.2696 7.91716L13.263 7.91366L13.2464 7.90504C13.2338 7.8986 13.2181 7.89079 13.1995 7.88182C13.1623 7.86389 13.1131 7.84132 13.0524 7.81577C12.931 7.7647 12.7631 7.70157 12.5523 7.64005C12.1307 7.51697 11.5361 7.39999 10.7999 7.39999C10.0638 7.39999 9.46919 7.51697 9.04751 7.64005C8.83674 7.70157 8.66886 7.7647 8.5475 7.81577C8.48679 7.84132 8.43759 7.86389 8.40036 7.88182C8.38175 7.89079 8.3661 7.8986 8.35349 7.90504L8.33685 7.91366L8.33024 7.91716L8.32736 7.9187L8.32604 7.91941L8.3254 7.91975C8.32509 7.91992 8.32478 7.92009 8.79993 8.79999L8.32478 7.92009C7.83882 8.18251 7.6576 8.78918 7.92002 9.27514ZM9.26462 17.6855C8.78045 17.9397 8.18056 17.7576 7.92002 17.2751C7.6576 16.7892 7.83882 16.1825 8.32478 15.9201L8.79993 16.8C8.32478 15.9201 8.32509 15.9199 8.3254 15.9198L8.32604 15.9194L8.32736 15.9187L8.33024 15.9172L8.33685 15.9137L8.35349 15.905C8.3661 15.8986 8.38175 15.8908 8.40036 15.8818C8.43759 15.8639 8.48679 15.8413 8.5475 15.8158C8.66886 15.7647 8.83674 15.7016 9.04751 15.6401C9.46919 15.517 10.0638 15.4 10.7999 15.4C11.5361 15.4 12.1307 15.517 12.5523 15.6401C12.7631 15.7016 12.931 15.7647 13.0524 15.8158C13.1131 15.8413 13.1623 15.8639 13.1995 15.8818C13.2181 15.8908 13.2338 15.8986 13.2464 15.905L13.263 15.9137L13.2696 15.9172L13.2725 15.9187L13.2738 15.9194L13.2745 15.9198C13.2748 15.9199 13.2751 15.9201 12.7999 16.8L13.2751 15.9201C13.761 16.1825 13.9423 16.7892 13.6799 17.2751C13.4193 17.7576 12.8194 17.9397 12.3352 17.6855L12.3318 17.6838C12.3236 17.6798 12.3051 17.6712 12.2767 17.6592C12.2198 17.6353 12.1238 17.5984 11.992 17.5599C11.7284 17.483 11.323 17.4 10.7999 17.4C10.2768 17.4 9.87141 17.483 9.6079 17.5599C9.47607 17.5984 9.38007 17.6353 9.32319 17.6592C9.29478 17.6712 9.27627 17.6798 9.26807 17.6838L9.26462 17.6855ZM18.3201 13.2751C18.5806 13.7576 19.1805 13.9397 19.6647 13.6855L19.6681 13.6838C19.6763 13.6798 19.6948 13.6712 19.7232 13.6592C19.7801 13.6353 19.8761 13.5984 20.008 13.5599C20.2715 13.483 20.6769 13.4 21.2 13.4C21.7231 13.4 22.1285 13.483 22.392 13.5599C22.5238 13.5984 22.6198 13.6353 22.6767 13.6592C22.7051 13.6712 22.7236 13.6798 22.7318 13.6838L22.7353 13.6855C23.2195 13.9397 23.8194 13.7576 24.0799 13.2751C24.3423 12.7892 24.1611 12.1825 23.6751 11.9201L23.2 12.8C23.6751 11.9201 23.6748 11.9199 23.6745 11.9198L23.6739 11.9194L23.6725 11.9187L23.6697 11.9172L23.6631 11.9137L23.6464 11.905C23.6338 11.8986 23.6182 11.8908 23.5995 11.8818C23.5623 11.8639 23.5131 11.8413 23.4524 11.8158C23.3311 11.7647 23.1632 11.7016 22.9524 11.6401C22.5307 11.517 21.9361 11.4 21.2 11.4C20.4638 11.4 19.8692 11.517 19.4476 11.6401C19.2368 11.7016 19.0689 11.7647 18.9476 11.8158C18.8868 11.8413 18.8377 11.8639 18.8004 11.8818C18.7818 11.8908 18.7662 11.8986 18.7535 11.905L18.7369 11.9137L18.7303 11.9172L18.7274 11.9187L18.7261 11.9194L18.7255 11.9198C18.7251 11.9199 18.7248 11.9201 19.2 12.8L18.7248 11.9201C18.2389 12.1825 18.0577 12.7892 18.3201 13.2751ZM19.6646 9.68547C19.1805 9.93971 18.5806 9.75762 18.32 9.27514C18.0576 8.78918 18.2388 8.18251 18.7248 7.92009L19.2 8.79999C18.7248 7.92009 18.7251 7.91992 18.7254 7.91975L18.7261 7.91941L18.7274 7.9187L18.7303 7.91716L18.7369 7.91366L18.7535 7.90504C18.7661 7.8986 18.7818 7.89079 18.8004 7.88182C18.8376 7.86389 18.8868 7.84132 18.9475 7.81577C19.0689 7.7647 19.2368 7.70157 19.4475 7.64005C19.8692 7.51697 20.4638 7.39999 21.2 7.39999C21.9361 7.39999 22.5307 7.51697 22.9524 7.64005C23.1631 7.70157 23.331 7.7647 23.4524 7.81577C23.5131 7.84132 23.5623 7.86389 23.5995 7.88182C23.6181 7.89079 23.6338 7.8986 23.6464 7.90504L23.663 7.91366L23.6696 7.91716L23.6725 7.9187L23.6738 7.91941L23.6745 7.91975C23.6748 7.91992 23.6751 7.92009 23.2 8.79999L23.6751 7.92009C24.1611 8.18251 24.3423 8.78918 24.0799 9.27514C23.8193 9.75762 23.2194 9.93971 22.7353 9.68546L22.7318 9.68379C22.7236 9.67984 22.7051 9.67117 22.6767 9.65922C22.6198 9.63528 22.5238 9.59842 22.392 9.55994C22.1285 9.48302 21.7231 9.39999 21.2 9.39999C20.6768 9.39999 20.2714 9.48302 20.0079 9.55994C19.8761 9.59842 19.7801 9.63528 19.7232 9.65922C19.6948 9.67117 19.6763 9.67984 19.6681 9.68379L19.6646 9.68547ZM18.32 17.2751C18.5806 17.7576 19.1805 17.9397 19.6646 17.6855L19.6681 17.6838C19.6763 17.6798 19.6948 17.6712 19.7232 17.6592C19.7801 17.6353 19.8761 17.5984 20.0079 17.5599C20.2714 17.483 20.6768 17.4 21.2 17.4C21.7231 17.4 22.1285 17.483 22.392 17.5599C22.5238 17.5984 22.6198 17.6353 22.6767 17.6592C22.7051 17.6712 22.7236 17.6798 22.7318 17.6838L22.7353 17.6855C23.2194 17.9397 23.8193 17.7576 24.0799 17.2751C24.3423 16.7892 24.1611 16.1825 23.6751 15.9201L23.2 16.8C23.6751 15.9201 23.6748 15.9199 23.6745 15.9198L23.6738 15.9194L23.6725 15.9187L23.6696 15.9172L23.663 15.9137L23.6464 15.905C23.6338 15.8986 23.6181 15.8908 23.5995 15.8818C23.5623 15.8639 23.5131 15.8413 23.4524 15.8158C23.331 15.7647 23.1631 15.7016 22.9524 15.6401C22.5307 15.517 21.9361 15.4 21.2 15.4C20.4638 15.4 19.8692 15.517 19.4475 15.6401C19.2368 15.7016 19.0689 15.7647 18.9475 15.8158C18.8868 15.8413 18.8376 15.8639 18.8004 15.8818C18.7818 15.8908 18.7661 15.8986 18.7535 15.905L18.7369 15.9137L18.7303 15.9172L18.7274 15.9187L18.7261 15.9194L18.7254 15.9198C18.7251 15.9199 18.7248 15.9201 19.2 16.8L18.7248 15.9201C18.2388 16.1825 18.0576 16.7892 18.32 17.2751Z" fill="currentColor"></path>',
    "envelope-closed": '<path fill-rule="evenodd" clip-rule="evenodd" d="M3.00004 7.98711C3.00001 7.99142 3 7.99573 3 8.00005V11.382V24C3 25.1046 3.89543 26 5 26H27C28.1046 26 29 25.1046 29 24V11.382V8.00005C29 6.89548 28.1046 6.00005 27 6.00005H5C3.89974 6.00005 3.007 6.8885 3.00004 7.98711ZM27 11.382V8.00005L5 8.00005V11.382L16 16.882L27 11.382ZM5 13.6181L15.5528 18.8945C15.8343 19.0352 16.1657 19.0352 16.4472 18.8945L27 13.6181V24H5V13.6181Z" fill="currentColor"></path>',
    "envelope-open": '<path fill-rule="evenodd" clip-rule="evenodd" d="M15.5528 6.34164C15.8343 6.20088 16.1657 6.20088 16.4472 6.34164L26.4472 11.3416C26.786 11.511 27 11.8573 27 12.2361V13.3333L16 17.9167L5 13.3333V12.2361C5 11.8573 5.214 11.511 5.55279 11.3416L15.5528 6.34164ZM5 15.5V25H27V15.5L16.3846 19.9231C16.1385 20.0257 15.8615 20.0257 15.6154 19.9231L5 15.5ZM17.3416 4.55279C16.4971 4.1305 15.5029 4.1305 14.6584 4.55279L4.65836 9.55279C3.64201 10.061 3 11.0998 3 12.2361V25C3 26.1046 3.89543 27 5 27H27C28.1046 27 29 26.1046 29 25V12.2361C29 11.0998 28.358 10.061 27.3416 9.55279L17.3416 4.55279Z" fill="currentColor"></path>',
    equal: '<path fill-rule="evenodd" clip-rule="evenodd" d="M6 11C5.44772 11 5 11.4477 5 12C5 12.5523 5.44772 13 6 13H26C26.5523 13 27 12.5523 27 12C27 11.4477 26.5523 11 26 11H6ZM6 19C5.44772 19 5 19.4477 5 20C5 20.5523 5.44772 21 6 21H26C26.5523 21 27 20.5523 27 20C27 19.4477 26.5523 19 26 19H6Z" fill="currentColor"></path>',
    "error-filled": '<path fill-rule="evenodd" clip-rule="evenodd" d="M28 11L21 4H11L4 11V21L11 28H21L28 21V11ZM16 8C16.5523 8 17 8.44772 17 9V17C17 17.5523 16.5523 18 16 18C15.4477 18 15 17.5523 15 17V9C15 8.44772 15.4477 8 16 8ZM16 21C16.5523 21 17 21.4477 17 22V23C17 23.5523 16.5523 24 16 24C15.4477 24 15 23.5523 15 23V22C15 21.4477 15.4477 21 16 21Z" fill="currentColor"></path>',
    "error-hollow": '<path fill-rule="evenodd" clip-rule="evenodd" d="M10.5858 4H11H21H21.4142L21.7071 4.29289L27.7071 10.2929L28 10.5858V11V21V21.4142L27.7071 21.7071L21.7071 27.7071L21.4142 28H21H11H10.5858L10.2929 27.7071L4.29289 21.7071L4 21.4142V21V11V10.5858L4.29289 10.2929L10.2929 4.29289L10.5858 4ZM11.4142 6L6 11.4142V20.5858L11.4142 26H20.5858L26 20.5858V11.4142L20.5858 6H11.4142ZM16 9C16.5523 9 17 9.44772 17 10V16C17 16.5523 16.5523 17 16 17C15.4477 17 15 16.5523 15 16V10C15 9.44772 15.4477 9 16 9ZM17 21C17 20.4477 16.5523 20 16 20C15.4477 20 15 20.4477 15 21V22C15 22.5523 15.4477 23 16 23C16.5523 23 17 22.5523 17 22V21Z" fill="currentColor"></path>',
    expand: '<path fill-rule="evenodd" clip-rule="evenodd" d="M28 5C28 4.44772 27.5523 4 27 4L19.0042 4V6L26 6V13H28V5ZM5.00269 4C4.4504 4 4.00269 4.44772 4.00269 5V13H6.00269V6H12.9985V4H5.00269ZM28 27C28 27.5523 27.5523 28 27 28H19.0042V26H26V19H28V27ZM4 27C4 27.5523 4.44772 28 5 28H12.9958V26H6V19H4L4 27Z" fill="currentColor"></path>',
    "expand-text": '<path fill-rule="evenodd" clip-rule="evenodd" d="M6.64645 28.3535C6.45118 28.1583 6.45118 27.8417 6.64645 27.6464L27.6464 6.64645C27.8417 6.45119 28.1583 6.45119 28.3536 6.64645C28.5488 6.84171 28.5488 7.15829 28.3536 7.35355L7.35355 28.3535C7.15829 28.5488 6.84171 28.5488 6.64645 28.3535ZM14.6464 28.3535C14.4512 28.1583 14.4512 27.8417 14.6464 27.6464L27.6464 14.6464C27.8417 14.4512 28.1583 14.4512 28.3536 14.6464C28.5488 14.8417 28.5488 15.1583 28.3536 15.3535L15.3536 28.3535C15.1583 28.5488 14.8417 28.5488 14.6464 28.3535ZM22.6464 27.6464C22.4512 27.8417 22.4512 28.1583 22.6464 28.3535C22.8417 28.5488 23.1583 28.5488 23.3536 28.3535L28.3536 23.3535C28.5488 23.1583 28.5488 22.8417 28.3536 22.6464C28.1583 22.4512 27.8417 22.4512 27.6464 22.6464L22.6464 27.6464Z" fill="currentColor"></path>',
    "external-link": '<path fill-rule="evenodd" clip-rule="evenodd" d="M7.25 7C7.11193 7 7 7.11193 7 7.25V24.75C7 24.8881 7.11193 25 7.25 25H24.75C24.8881 25 25 24.8881 25 24.75V18.5H27V24.75C27 25.9926 25.9926 27 24.75 27H7.25C6.00736 27 5 25.9926 5 24.75V7.25C5 6.00736 6.00736 5 7.25 5H13.5V7H7.25ZM17 5H27V15L22.7071 10.7071L13.7071 19.7071L12.2929 18.2929L21.2929 9.29289L17 5Z" fill="currentColor"></path>',
    facebook: '<path d="M28 16.0733C28 9.40541 22.6274 4 16 4C9.37258 4 4 9.40541 4 16.0733C4 22.0995 8.38823 27.0943 14.125 28V19.5633H11.0781V16.0733H14.125V13.4134C14.125 10.3876 15.9165 8.71615 18.6576 8.71615C19.9705 8.71615 21.3438 8.95196 21.3438 8.95196V11.9231H19.8306C18.3399 11.9231 17.875 12.8538 17.875 13.8086V16.0733H21.2031L20.6711 19.5633H17.875V28C23.6118 27.0943 28 22.0995 28 16.0733Z" fill="currentColor"></path>',
    file: '<path fill-rule="evenodd" clip-rule="evenodd" d="M7 29C5.89543 29 5 28.1046 5 27V5C5 3.89543 5.89543 3 7 3H25C26.1046 3 27 3.89543 27 5V8V27C27 28.1046 26.1046 29 25 29H7ZM7 27H25V8V5H7V27ZM11 10C10.4477 10 10 10.4477 10 11C10 11.5523 10.4477 12 11 12H21C21.5523 12 22 11.5523 22 11C22 10.4477 21.5523 10 21 10H11ZM10 16C10 15.4477 10.4477 15 11 15H21C21.5523 15 22 15.4477 22 16C22 16.5523 21.5523 17 21 17H11C10.4477 17 10 16.5523 10 16ZM11 20C10.4477 20 10 20.4477 10 21C10 21.5523 10.4477 22 11 22H21C21.5523 22 22 21.5523 22 21C22 20.4477 21.5523 20 21 20H11Z" fill="currentColor"></path>',
    files: '<path fill-rule="evenodd" clip-rule="evenodd" d="M4 24C4 25.1046 4.89543 26 6 26H10V28C10 29.1046 10.8954 30 12 30H26C27.1046 30 28 29.1046 28 28V12.3333V10C28 8.89543 27.1046 8 26 8H22V4C22 2.89543 21.1046 2 20 2H6C4.89543 2 4 2.89543 4 4V24ZM10 10V24H6V4H20V8H12C10.8954 8 10 8.89543 10 10ZM12 10H21H26V12.3333V28H12V25V10ZM16 13C15.4477 13 15 13.4477 15 14C15 14.5523 15.4477 15 16 15H22C22.5523 15 23 14.5523 23 14C23 13.4477 22.5523 13 22 13H16ZM15 19C15 18.4477 15.4477 18 16 18H22C22.5523 18 23 18.4477 23 19C23 19.5523 22.5523 20 22 20H16C15.4477 20 15 19.5523 15 19ZM16 23C15.4477 23 15 23.4477 15 24C15 24.5523 15.4477 25 16 25H22C22.5523 25 23 24.5523 23 24C23 23.4477 22.5523 23 22 23H16Z" fill="currentColor"></path>',
    "filter-alt-filled": '<path fill-rule="evenodd" clip-rule="evenodd" d="M8 5C6.89543 5 6 5.89543 6 7V10.5912C6 11.1152 6.20571 11.6184 6.57287 11.9923L12 17.52V26C12 26.3214 12.1545 26.6233 12.4153 26.8112C12.6761 26.9992 13.0113 27.0503 13.3162 26.9487L19.3162 24.9487C19.7246 24.8126 20 24.4304 20 24V17.4142L25.4142 12C25.7893 11.6249 26 11.1162 26 10.5858V7C26 5.89543 25.1046 5 24 5H8ZM8 7H24V10.4485C22.8052 10.9399 21.1226 11.5 20 11.5C18.5 11.5 17.5 11.125 16.5 10.75C15.5 10.375 14.5 10 13 10C11.2284 10 9.71101 10.7266 8.76976 11.3752L8 10.5912V7Z" fill="currentColor"></path>',
    "filter-alt-hollow": '<path fill-rule="evenodd" clip-rule="evenodd" d="M8 5C6.89543 5 6 5.89543 6 7V10.5912C6 11.1152 6.20571 11.6184 6.57287 11.9923L12 17.52V26C12 26.3214 12.1545 26.6233 12.4153 26.8112C12.6761 26.9992 13.0113 27.0503 13.3162 26.9487L19.3162 24.9487C19.7246 24.8126 20 24.4304 20 24V17.4142L25.4142 12C25.7893 11.6249 26 11.1162 26 10.5858V7C26 5.89543 25.1046 5 24 5H8ZM8 7H24V10.5858L18.2929 16.2929C18.1054 16.4804 18 16.7348 18 17V23.2792L14 24.6126V17.1111C14 16.8491 13.8971 16.5975 13.7136 16.4105L8 10.5912V7Z" fill="currentColor"></path>',
    "filter-filled": '<path fill-rule="evenodd" clip-rule="evenodd" d="M13 4H17V7H26C26.5523 7 27 7.44772 27 8C27 8.55228 26.5523 9 26 9H17V12H13V9H6C5.44772 9 5 8.55228 5 8C5 7.44772 5.44772 7 6 7H13V4ZM23 12H19V15H6C5.44772 15 5 15.4477 5 16C5 16.5523 5.44772 17 6 17H19V20H23V17H26C26.5523 17 27 16.5523 27 16C27 15.4477 26.5523 15 26 15H23V12ZM14 20H10V23H6C5.44772 23 5 23.4477 5 24C5 24.5523 5.44772 25 6 25H10V28H14V25H26C26.5523 25 27 24.5523 27 24C27 23.4477 26.5523 23 26 23H14V20Z" fill="currentColor"></path>',
    "filter-hollow": '<path fill-rule="evenodd" clip-rule="evenodd" d="M17 4H13V7H6C5.44772 7 5 7.44772 5 8C5 8.55228 5.44772 9 6 9H13V12H17V4ZM26 9H19V7H26C26.5523 7 27 7.44772 27 8C27 8.55228 26.5523 9 26 9ZM23 12H19V20H23V17H26C26.5523 17 27 16.5523 27 16C27 15.4477 26.5523 15 26 15H23V12ZM10 20H14V28H10V25H6C5.44772 25 5 24.5523 5 24C5 23.4477 5.44772 23 6 23H10V20ZM6 15C5.44772 15 5 15.4477 5 16C5 16.5523 5.44772 17 6 17H17V15H6ZM26 25H16V23H26C26.5523 23 27 23.4477 27 24C27 24.5523 26.5523 25 26 25Z" fill="currentColor"></path>',
    "flag-filled": '<path fill-rule="evenodd" clip-rule="evenodd" d="M8 3C8.55228 3 9 3.44772 9 4V5C9 5.55228 8.55228 6 8 6C7.44772 6 7 5.55228 7 5V4C7 3.44772 7.44772 3 8 3ZM9 21V28C9 28.5523 8.55228 29 8 29C7.44772 29 7 28.5523 7 28V10C7 9.44772 7.44772 9 8 9C8.55228 9 9 9.44772 9 10V11H14.7639C14.9192 11 15.0723 11.0361 15.2111 11.1056L18.7889 12.8944C18.9277 12.9639 19.0808 13 19.2361 13H24C24.5523 13 25 13.4477 25 14V22C25 22.5523 24.5523 23 24 23H19.2361C19.0808 23 18.9277 22.9639 18.7889 22.8944L15.2111 21.1056C15.0723 21.0361 14.9192 21 14.7639 21H9Z" fill="currentColor"></path>',
    "flag-hollow": '<path fill-rule="evenodd" clip-rule="evenodd" d="M8 3C8.55228 3 9 3.44772 9 4V5C9 5.55228 8.55228 6 8 6C7.44772 6 7 5.55228 7 5V4C7 3.44772 7.44772 3 8 3ZM9 11V10C9 9.44772 8.55228 9 8 9C7.44772 9 7 9.44772 7 10V12V20V28C7 28.5523 7.44772 29 8 29C8.55228 29 9 28.5523 9 28V21H14.7639L18.5528 22.8944C18.6916 22.9639 18.8448 23 19 23H24C24.5523 23 25 22.5523 25 22V14C25 13.4477 24.5523 13 24 13H19.2361L15.4472 11.1056C15.3084 11.0361 15.1552 11 15 11H9ZM9 13V19H15C15.1552 19 15.3084 19.0361 15.4472 19.1056L19.2361 21H23V15H19C18.8448 15 18.6916 14.9639 18.5528 14.8944L14.7639 13H9Z" fill="currentColor"></path>',
    "floppy-filled": '<path fill-rule="evenodd" clip-rule="evenodd" d="M21.5 3H4V29H28V10.6667L21.5 3ZM12 6H19V11H12V6ZM20 20C20 22.2091 18.2091 24 16 24C13.7909 24 12 22.2091 12 20C12 17.7909 13.7909 16 16 16C18.2091 16 20 17.7909 20 20Z" fill="currentColor"></path>',
    "floppy-hollow": '<path fill-rule="evenodd" clip-rule="evenodd" d="M4 3H5H10H11H20H21H21.5H21.9714L22.2714 3.36362L27.7714 10.0303L28 10.3074V10.6667V28V29H27H5H4V28V4V3ZM6 5H10V11V12H11H20H21V11V5H21.0286L26 11.0259V27H6V5ZM12 5H19V10H12V5ZM14 20C14 18.8954 14.8954 18 16 18C17.1046 18 18 18.8954 18 20C18 21.1046 17.1046 22 16 22C14.8954 22 14 21.1046 14 20ZM16 16C13.7909 16 12 17.7909 12 20C12 22.2091 13.7909 24 16 24C18.2091 24 20 22.2091 20 20C20 17.7909 18.2091 16 16 16Z" fill="currentColor"></path>',
    "folder-filled": '<path d="M3 7C3 6.44772 3.44772 6 4 6H15.5C15.8148 6 16.1111 6.14819 16.3 6.4L18.7 9.6C18.8889 9.85181 19.1852 10 19.5 10H28C28.5523 10 29 10.4477 29 11V25C29 25.5523 28.5523 26 28 26H4C3.44772 26 3 25.5523 3 25V7Z" fill="currentColor"></path>',
    "folder-hollow": '<path fill-rule="evenodd" clip-rule="evenodd" d="M5 6C3.89543 6 3 6.89543 3 8V24C3 25.1046 3.89543 26 5 26H27C28.1046 26 29 25.1046 29 24V12C29 10.8954 28.1046 10 27 10H18.5L16.1 6.8C15.7223 6.29639 15.1295 6 14.5 6H5ZM5 8L14.5 8L16.9 11.2C17.2777 11.7036 17.8705 12 18.5 12H27V24H5V8Z" fill="currentColor"></path>',
    "folder-smart": '<path fill-rule="evenodd" clip-rule="evenodd" d="M3 8C3 6.89543 3.89543 6 5 6H14.5C15.1295 6 15.7223 6.29639 16.1 6.8L18.5 10H27C28.1046 10 29 10.8954 29 12V24C29 25.1046 28.1046 26 27 26H16V24H27V12H18.5C17.8705 12 17.2777 11.7036 16.9 11.2L14.5 8L5 8V24H8V26H5C3.89543 26 3 25.1046 3 24V8ZM14.0001 20.0203L14.0411 19.8889L15.9788 20.4911L15.6146 18.495L17.6102 18.1276L16.36 16.5294L17.9563 15.2768L16.1066 14.4426L16.938 12.5916L14.9125 12.7125L14.7884 10.6873L13.0511 11.7356L12.0001 10L10.949 11.7356L9.21172 10.6873L9.08763 12.7125L7.06216 12.5916L7.89347 14.4426L6.04381 15.2768L7.64008 16.5294L6.38996 18.1276L8.38552 18.495L8.02132 20.4911L9.959 19.8889L10.0001 20.0204L10.0001 28L12.0001 26L14.0001 28V20.0203Z" fill="currentColor"></path>',
    // Brand mark: the kit bakes its own colours into this one symbol (contract variants.brandMarks).
    /* eslint-disable no-restricted-syntax */
    "formative-check": '<path d="M25.1585 4.93631C24.7137 4.93631 24.3265 5.07713 24.0577 5.24995C23.5138 5.5988 22.9026 6.3509 22.7363 6.50772C21.1588 8.01513 19.6197 9.87458 18.3622 11.5292C17.5271 12.6333 16.5671 14.0768 15.4856 15.8594C14.7432 14.9889 14.1545 14.2976 13.7193 13.7887C13.3513 13.3566 12.817 13.1102 12.2347 13.1102C11.7867 13.1102 11.3163 13.2575 10.8747 13.5775C9.86361 14.3136 9.87641 15.8146 10.3436 16.4419C10.8107 17.0724 13.345 19.9879 13.9337 20.7977C14.3881 21.4186 15.1112 21.7994 15.8376 21.7994C16.0552 21.7994 16.2759 21.7642 16.4871 21.6874C17.3958 21.3673 17.607 20.9001 17.975 20.1896C18.3462 19.4727 18.9253 18.2885 20.49 15.9618C21.0147 15.1809 22.0195 13.6479 23.9298 11.4716C25.8432 9.2953 26.3904 9.02967 26.8704 8.48239C27.3503 7.93192 27.6959 6.42771 26.6144 5.50278C26.1216 5.08033 25.6096 4.93311 25.1521 4.93311L25.1585 4.93631Z" fill="#FFB500"></path><path d="M20.4066 4.83793C19.9458 4.6555 19.4722 4.50188 18.989 4.37706C17.9011 4.09543 16.778 3.97061 15.6517 4.00581C14.0775 4.05062 12.548 4.39947 11.1113 5.03955C10.3945 5.3596 9.70977 5.74685 9.06982 6.20131C9.26501 6.30052 9.45379 6.42214 9.63297 6.56296C10.1065 6.93421 10.4585 7.40468 10.6825 7.92315C11.1209 7.63511 11.5784 7.38228 12.0584 7.17105C13.2167 6.65577 14.4486 6.37413 15.7189 6.33893C16.6277 6.31333 17.53 6.41254 18.4068 6.63657C18.6915 6.71018 18.9699 6.79659 19.2451 6.89261C19.4658 6.97262 19.6834 7.05903 19.901 7.15504L21.4849 5.33079C21.133 5.14837 20.7746 4.98515 20.4066 4.84113V4.83793ZM21.3153 24.0822C20.0802 24.8951 18.6659 25.4167 17.1589 25.5991C15.6517 25.7816 14.1574 25.612 12.7687 25.1159C11.8024 24.7734 10.8905 24.2709 10.0585 23.6245C10.0521 23.6213 10.0489 23.6149 10.0426 23.6117C10.0329 23.6053 10.0266 23.5989 10.0169 23.5925C9.51139 23.2148 8.79464 23.3108 8.40427 23.8069C8.0107 24.3094 8.09389 25.0327 8.58665 25.4328C8.59306 25.436 8.59625 25.4424 8.60265 25.4455C8.61225 25.4551 8.62505 25.4616 8.63465 25.4712C9.54979 26.1848 10.5481 26.7545 11.6136 27.1706C12.0168 27.3306 12.4296 27.4682 12.8519 27.5803C14.3494 27.9867 15.8917 28.0987 17.4404 27.9131C18.9859 27.7275 20.461 27.2506 21.8177 26.4985C22.2049 26.2841 22.5761 26.0504 22.9312 25.7976C22.736 25.6984 22.5472 25.5768 22.368 25.436C21.8944 25.0647 21.5425 24.5942 21.3185 24.079L21.3153 24.0822ZM6.33722 15.7258C6.36602 14.708 6.55161 13.7127 6.89078 12.759C6.92278 12.6694 6.95477 12.5766 6.98997 12.487C7.32915 11.6132 7.79951 10.7939 8.38187 10.0482C8.38827 10.0418 8.39147 10.0354 8.39787 10.029C8.40107 10.0226 8.40747 10.0194 8.41067 10.013C8.79464 9.50736 8.70185 8.78407 8.19949 8.39041C7.70032 7.99996 6.98357 8.07997 6.5804 8.56323C6.574 8.56964 6.56761 8.57924 6.5612 8.58564C6.55481 8.59524 6.54841 8.60484 6.54201 8.61445C5.83166 9.52657 5.2557 10.5283 4.83653 11.5973C4.83014 11.6101 4.82693 11.6229 4.82053 11.6357C4.31817 12.9254 4.04299 14.2792 4.00459 15.6618C3.9534 17.4956 4.33097 19.3455 5.09251 21.013C5.40289 21.6883 5.77406 22.3316 6.20603 22.9364C6.30523 22.7412 6.42682 22.5523 6.56761 22.3731C6.93878 21.8994 7.40594 21.5506 7.9243 21.3266C7.65552 20.9202 7.41874 20.4912 7.21396 20.0432C6.5996 18.7022 6.29562 17.2076 6.33722 15.729V15.7258ZM27.9292 14.708C28.0093 15.4506 28.022 16.1899 27.9644 16.926C27.9037 17.7133 27.766 18.4942 27.5517 19.2623C27.4429 19.6496 27.3149 20.0304 27.1676 20.4016C26.7485 21.4642 26.179 22.4627 25.4654 23.3781C25.4558 23.3877 25.4494 23.4005 25.4398 23.4101C25.4302 23.4196 25.4206 23.4325 25.4142 23.4421C25.011 23.9189 24.3007 23.9958 23.8048 23.6085C23.3023 23.2148 23.2127 22.4947 23.5936 21.9891C23.5967 21.9826 23.6031 21.9763 23.6063 21.9731C23.6096 21.9667 23.6159 21.9635 23.6191 21.957C24.2655 21.1314 24.7647 20.2193 25.1102 19.2463C25.1806 19.0447 25.2479 18.8399 25.3054 18.6318C25.4334 18.1773 25.5262 17.7165 25.587 17.2492C25.6862 16.494 25.6926 15.729 25.6094 14.9609C25.5358 14.276 25.3918 13.6103 25.1775 12.9638C25.1518 12.8839 25.1231 12.807 25.0974 12.7302L26.8701 10.922C27.1293 11.4788 27.3468 12.0549 27.5196 12.6438C27.7148 13.3159 27.8524 14.0039 27.9292 14.708Z" fill="black"></path>',
    /* eslint-enable no-restricted-syntax */
    forward: '<path fill-rule="evenodd" clip-rule="evenodd" d="M17 16L5 7V25L17 16ZM17 16V7L29 16L17 25V16Z" fill="currentColor"></path>',
    "forward-10": '<path fill-rule="evenodd" clip-rule="evenodd" d="M29.9999 6L23.9999 10V7.01225C22.791 7.01118 21.5055 7.00847 20.2704 7.00586L20.2694 7.00586L20.2685 7.00586C17.3435 6.99968 14.7011 6.9941 14.027 7.01237C9.61362 7.13197 5.53562 10.0808 4.34867 14.4304C2.89956 19.7406 6.10417 25.2229 11.5504 26.6558C17.0031 28.0904 22.5841 24.9084 24.0352 19.5909C24.1806 19.0581 24.7304 18.7441 25.2632 18.8895C25.796 19.0349 26.11 19.5847 25.9646 20.1175C24.2169 26.522 17.527 30.2963 11.0415 28.59C4.54954 26.882 0.669506 20.3156 2.41922 13.9038C3.8558 8.63955 8.74635 5.15474 13.9728 5.0131C14.6761 4.99404 17.3933 4.99976 20.3569 5.00599L20.3574 5.00599C21.5707 5.00854 22.8253 5.01118 23.9999 5.01224V2L29.9999 6ZM15.6332 18.1059C15.5609 17.7686 15.5248 17.4 15.5248 17C15.5248 16.6 15.5609 16.2353 15.6332 15.9059C15.7055 15.5686 15.8274 15.2863 15.9991 15.0588C16.1346 14.8706 16.3108 14.7216 16.5276 14.6118C16.7445 14.4941 17.011 14.4353 17.3272 14.4353C17.6525 14.4353 17.919 14.4941 18.1269 14.6118C18.3347 14.7216 18.5063 14.8706 18.6418 15.0588C18.8226 15.2863 18.949 15.5686 19.0213 15.9059C19.0936 16.2353 19.1297 16.6 19.1297 17C19.1297 17.4 19.0936 17.7686 19.0213 18.1059C18.949 18.4353 18.8226 18.7137 18.6418 18.9412C18.5063 19.1294 18.3347 19.2824 18.1269 19.4C17.919 19.5098 17.6525 19.5647 17.3272 19.5647C17.011 19.5647 16.7445 19.5098 16.5276 19.4C16.3108 19.2824 16.1346 19.1294 15.9991 18.9412C15.8274 18.7137 15.7055 18.4353 15.6332 18.1059ZM13.8171 15.5765C13.7087 16.0314 13.6545 16.5059 13.6545 17C13.6545 17.4941 13.7087 17.9725 13.8171 18.4353C13.9256 18.8902 14.1288 19.3176 14.427 19.7176C14.7161 20.0941 15.1001 20.4039 15.579 20.6471C16.0578 20.8824 16.6406 21 17.3272 21C18.0139 21 18.5922 20.8824 19.062 20.6471C19.5408 20.4039 19.9248 20.0941 20.214 19.7176C20.5121 19.3176 20.7154 18.8902 20.8238 18.4353C20.9413 17.9725 21 17.4941 21 17C21 16.5059 20.9413 16.0314 20.8238 15.5765C20.7154 15.1137 20.5121 14.6824 20.214 14.2824C19.9248 13.9059 19.5408 13.6 19.062 13.3647C18.5922 13.1216 18.0139 13 17.3272 13C16.6406 13 16.0578 13.1216 15.579 13.3647C15.1001 13.6 14.7161 13.9059 14.427 14.2824C14.1288 14.6824 13.9256 15.1137 13.8171 15.5765ZM10.1142 15.7059V20.8118H11.9709V13.1765H10.3582C10.2678 13.5765 10.0103 13.9137 9.58565 14.1882C9.17004 14.4627 8.64149 14.6039 8 14.6118V15.7059H10.1142Z" fill="currentColor"></path>',
    "forward-15": '<path fill-rule="evenodd" clip-rule="evenodd" d="M29.9999 6L23.9999 10V7.01225C22.791 7.01118 21.5055 7.00847 20.2704 7.00586L20.2694 7.00586L20.2685 7.00586C17.3435 6.99968 14.7011 6.9941 14.027 7.01237C9.61362 7.13197 5.53562 10.0808 4.34867 14.4304C2.89956 19.7406 6.10417 25.2229 11.5504 26.6558C17.0031 28.0904 22.5841 24.9084 24.0352 19.5909C24.1806 19.0581 24.7304 18.7441 25.2632 18.8895C25.796 19.0349 26.11 19.5847 25.9646 20.1175C24.2169 26.522 17.527 30.2963 11.0415 28.59C4.54954 26.882 0.669506 20.3156 2.41922 13.9038C3.8558 8.63955 8.74635 5.15474 13.9728 5.0131C14.6761 4.99404 17.3933 4.99976 20.3569 5.00599L20.3574 5.00599C21.5707 5.00854 22.8253 5.01118 23.9999 5.01224V2L29.9999 6ZM10.2438 15.792V21H11.8878V13.212H10.4598C10.3798 13.62 10.1518 13.964 9.77583 14.244C9.40783 14.524 8.93983 14.668 8.37183 14.676V15.792H10.2438ZM14.8791 18.984C14.8071 18.824 14.7671 18.652 14.7591 18.468L13.2111 18.816C13.2351 19.12 13.3231 19.416 13.4751 19.704C13.6271 19.992 13.8311 20.248 14.0871 20.472C14.3511 20.688 14.6591 20.864 15.0111 21C15.3631 21.128 15.7511 21.192 16.1751 21.192C16.6391 21.192 17.0551 21.12 17.4231 20.976C17.7991 20.824 18.1151 20.624 18.3711 20.376C18.6271 20.128 18.8231 19.84 18.9591 19.512C19.0951 19.184 19.1631 18.84 19.1631 18.48C19.1631 18.064 19.0951 17.696 18.9591 17.376C18.8311 17.048 18.6471 16.776 18.4071 16.56C18.1751 16.336 17.8951 16.168 17.5671 16.056C17.2471 15.936 16.8911 15.876 16.4991 15.876C16.2431 15.876 15.9871 15.916 15.7311 15.996C15.4751 16.076 15.2631 16.196 15.0951 16.356L15.4791 14.64H18.7431V13.212H14.3511L13.4271 17.208C13.4671 17.224 13.5591 17.256 13.7031 17.304C13.8551 17.352 14.0151 17.404 14.1831 17.46C14.3511 17.516 14.5071 17.572 14.6511 17.628C14.8031 17.676 14.8991 17.708 14.9391 17.724C15.0671 17.58 15.2311 17.456 15.4311 17.352C15.6391 17.248 15.8751 17.196 16.1391 17.196C16.3151 17.196 16.4871 17.224 16.6551 17.28C16.8231 17.328 16.9711 17.408 17.0991 17.52C17.2271 17.624 17.3271 17.76 17.3991 17.928C17.4791 18.088 17.5191 18.28 17.5191 18.504C17.5191 18.896 17.3871 19.208 17.1231 19.44C16.8671 19.664 16.5511 19.776 16.1751 19.776C15.9671 19.776 15.7791 19.744 15.6111 19.68C15.4431 19.608 15.2951 19.512 15.1671 19.392C15.0471 19.272 14.9511 19.136 14.8791 18.984Z" fill="currentColor"></path>',
    "forward-30": '<path fill-rule="evenodd" clip-rule="evenodd" d="M29.9999 6L23.9999 10V7.01225C22.791 7.01118 21.5055 7.00847 20.2704 7.00586L20.2694 7.00586L20.2685 7.00586C17.3435 6.99968 14.7011 6.9941 14.027 7.01237C9.61362 7.13197 5.53562 10.0808 4.34867 14.4304C2.89956 19.7406 6.10417 25.2229 11.5504 26.6558C17.0031 28.0904 22.5841 24.9084 24.0352 19.5909C24.1806 19.0581 24.7304 18.7441 25.2632 18.8895C25.796 19.0349 26.11 19.5847 25.9646 20.1175C24.2169 26.522 17.527 30.2963 11.0415 28.59C4.54954 26.882 0.669506 20.3156 2.41922 13.9038C3.8558 8.63955 8.74635 5.15474 13.9728 5.0131C14.6761 4.99404 17.3933 4.99976 20.3569 5.00599L20.3574 5.00599C21.5707 5.00854 22.8253 5.01118 23.9999 5.01224V2L29.9999 6ZM15.7948 18.24C15.7308 17.896 15.6988 17.52 15.6988 17.112C15.6988 16.704 15.7308 16.332 15.7948 15.996C15.8588 15.652 15.9668 15.364 16.1188 15.132C16.2388 14.94 16.3948 14.788 16.5868 14.676C16.7788 14.556 17.0148 14.496 17.2948 14.496C17.5828 14.496 17.8188 14.556 18.0028 14.676C18.1868 14.788 18.3388 14.94 18.4588 15.132C18.6188 15.364 18.7308 15.652 18.7948 15.996C18.8588 16.332 18.8908 16.704 18.8908 17.112C18.8908 17.52 18.8588 17.896 18.7948 18.24C18.7308 18.576 18.6188 18.86 18.4588 19.092C18.3388 19.284 18.1868 19.44 18.0028 19.56C17.8188 19.672 17.5828 19.728 17.2948 19.728C17.0148 19.728 16.7788 19.672 16.5868 19.56C16.3948 19.44 16.2388 19.284 16.1188 19.092C15.9668 18.86 15.8588 18.576 15.7948 18.24ZM14.1868 15.66C14.0908 16.124 14.0428 16.608 14.0428 17.112C14.0428 17.616 14.0908 18.104 14.1868 18.576C14.2828 19.04 14.4628 19.476 14.7268 19.884C14.9828 20.268 15.3228 20.584 15.7468 20.832C16.1708 21.072 16.6868 21.192 17.2948 21.192C17.9028 21.192 18.4148 21.072 18.8308 20.832C19.2548 20.584 19.5948 20.268 19.8508 19.884C20.1148 19.476 20.2948 19.04 20.3908 18.576C20.4948 18.104 20.5468 17.616 20.5468 17.112C20.5468 16.608 20.4948 16.124 20.3908 15.66C20.2948 15.188 20.1148 14.748 19.8508 14.34C19.5948 13.956 19.2548 13.644 18.8308 13.404C18.4148 13.156 17.9028 13.032 17.2948 13.032C16.6868 13.032 16.1708 13.156 15.7468 13.404C15.3228 13.644 14.9828 13.956 14.7268 14.34C14.4628 14.748 14.2828 15.188 14.1868 15.66ZM10.8761 14.64L8.83606 16.392L9.56806 17.544C9.65606 17.512 9.75206 17.484 9.85606 17.46C9.96806 17.436 10.1081 17.424 10.2761 17.424C10.6521 17.424 10.9561 17.524 11.1881 17.724C11.4281 17.924 11.5481 18.208 11.5481 18.576C11.5481 18.904 11.4321 19.184 11.2001 19.416C10.9681 19.64 10.6441 19.752 10.2281 19.752C9.82006 19.752 9.48406 19.624 9.22006 19.368C8.96406 19.112 8.82806 18.784 8.81206 18.384L7.21606 18.696C7.24006 19.024 7.32406 19.34 7.46806 19.644C7.62006 19.94 7.82406 20.204 8.08006 20.436C8.33606 20.66 8.64406 20.84 9.00406 20.976C9.36406 21.112 9.77206 21.18 10.2281 21.18C10.7001 21.18 11.1201 21.108 11.4881 20.964C11.8561 20.82 12.1681 20.632 12.4241 20.4C12.6801 20.16 12.8761 19.884 13.0121 19.572C13.1481 19.26 13.2161 18.936 13.2161 18.6C13.2161 18.24 13.1521 17.916 13.0241 17.628C12.9041 17.34 12.7401 17.096 12.5321 16.896C12.3241 16.688 12.0841 16.528 11.8121 16.416C11.5401 16.304 11.2561 16.24 10.9601 16.224L12.9761 14.544V13.212H7.46806V14.64H10.8761Z" fill="currentColor"></path>',
    "forward-5": '<path fill-rule="evenodd" clip-rule="evenodd" d="M29.9999 6L23.9999 10V7.01225C22.791 7.01118 21.5055 7.00847 20.2704 7.00586L20.2694 7.00586L20.2685 7.00586C17.3435 6.99968 14.7011 6.9941 14.027 7.01237C9.61362 7.13197 5.53562 10.0808 4.34867 14.4304C2.89956 19.7406 6.10417 25.2229 11.5504 26.6558C17.0031 28.0904 22.5841 24.9084 24.0352 19.5909C24.1806 19.0581 24.7304 18.7441 25.2632 18.8895C25.796 19.0349 26.11 19.5847 25.9646 20.1175C24.2169 26.522 17.527 30.2963 11.0415 28.59C4.54954 26.882 0.669506 20.3156 2.41922 13.9038C3.8558 8.63955 8.74635 5.15474 13.9728 5.0131C14.6761 4.99404 17.3933 4.99976 20.3569 5.00599L20.3574 5.00599C21.5707 5.00854 22.8253 5.01118 23.9999 5.01224V2L29.9999 6ZM13.0161 18.984C12.9441 18.824 12.9041 18.652 12.8961 18.468L11.3481 18.816C11.3721 19.12 11.4601 19.416 11.6121 19.704C11.7641 19.992 11.9681 20.248 12.2241 20.472C12.4881 20.688 12.7961 20.864 13.1481 21C13.5001 21.128 13.8881 21.192 14.3121 21.192C14.7761 21.192 15.1921 21.12 15.5601 20.976C15.9361 20.824 16.2521 20.624 16.5081 20.376C16.7641 20.128 16.9601 19.84 17.0961 19.512C17.2321 19.184 17.3001 18.84 17.3001 18.48C17.3001 18.064 17.2321 17.696 17.0961 17.376C16.9681 17.048 16.7841 16.776 16.5441 16.56C16.3121 16.336 16.0321 16.168 15.7041 16.056C15.3841 15.936 15.0281 15.876 14.6361 15.876C14.3801 15.876 14.1241 15.916 13.8681 15.996C13.6121 16.076 13.4001 16.196 13.2321 16.356L13.6161 14.64H16.8801V13.212H12.4881L11.5641 17.208C11.6041 17.224 11.6961 17.256 11.8401 17.304C11.9921 17.352 12.1521 17.404 12.3201 17.46C12.4881 17.516 12.6441 17.572 12.7881 17.628C12.9401 17.676 13.0361 17.708 13.0761 17.724C13.2041 17.58 13.3681 17.456 13.5681 17.352C13.7761 17.248 14.0121 17.196 14.2761 17.196C14.4521 17.196 14.6241 17.224 14.7921 17.28C14.9601 17.328 15.1081 17.408 15.2361 17.52C15.3641 17.624 15.4641 17.76 15.5361 17.928C15.6161 18.088 15.6561 18.28 15.6561 18.504C15.6561 18.896 15.5241 19.208 15.2601 19.44C15.0041 19.664 14.6881 19.776 14.3121 19.776C14.1041 19.776 13.9161 19.744 13.7481 19.68C13.5801 19.608 13.4321 19.512 13.3041 19.392C13.1841 19.272 13.0881 19.136 13.0161 18.984Z" fill="currentColor"></path>',
    "forward-slash": '<path fill-rule="evenodd" clip-rule="evenodd" d="M21.4473 6.22359C21.5708 5.9766 21.4707 5.67627 21.2237 5.55277C20.9767 5.42928 20.6764 5.52939 20.5529 5.77638L10.5529 25.7764C10.4294 26.0234 10.5295 26.3237 10.7765 26.4472C11.0235 26.5707 11.3238 26.4706 11.4473 26.2236L21.4473 6.22359Z" fill="currentColor"></path>',
    globe: '<path fill-rule="evenodd" clip-rule="evenodd" d="M15.2284 5.56199C15.6172 5.06873 15.8854 5 16 5C16.1146 5 16.3828 5.06873 16.7716 5.56199C17.1514 6.04398 17.5372 6.80339 17.8797 7.83095C18.4903 9.66249 18.9059 12.1709 18.9859 15H13.0141C13.0941 12.1709 13.5097 9.66249 14.1203 7.83095C14.4628 6.80339 14.8486 6.04398 15.2284 5.56199ZM11.0133 15C11.0936 11.9996 11.5327 9.26908 12.2229 7.19849C12.4377 6.55418 12.6825 5.9562 12.9585 5.42588C8.67135 6.65677 5.45717 10.4244 5.04484 15H11.0133ZM5.04484 17H11.0133C11.0936 20.0004 11.5327 22.7309 12.2229 24.8015C12.4377 25.4458 12.6825 26.0438 12.9585 26.5741C8.67135 25.3432 5.45717 21.5756 5.04484 17ZM3 16C3 8.8203 8.8203 3 16 3C23.1797 3 29 8.8203 29 16C29 23.1797 23.1797 29 16 29C8.8203 29 3 23.1797 3 16ZM26.9552 15C26.5428 10.4244 23.3286 6.65677 19.0415 5.42588C19.3175 5.9562 19.5623 6.55418 19.7771 7.19849C20.4673 9.26908 20.9064 11.9996 20.9867 15H26.9552ZM20.9867 17H26.9552C26.5428 21.5756 23.3286 25.3432 19.0415 26.5741C19.3175 26.0438 19.5623 25.4458 19.7771 24.8015C20.4673 22.7309 20.9064 20.0004 20.9867 17ZM18.9859 17C18.9059 19.8291 18.4903 22.3375 17.8797 24.1691C17.5372 25.1966 17.1514 25.956 16.7716 26.438C16.3828 26.9313 16.1146 27 16 27C15.8854 27 15.6172 26.9313 15.2284 26.438C14.8486 25.956 14.4628 25.1966 14.1203 24.1691C13.5097 22.3375 13.0941 19.8291 13.0141 17H18.9859Z" fill="currentColor"></path>',
    googleclassroom: '<path fill-rule="evenodd" clip-rule="evenodd" d="M5 3C3.89543 3 3 3.89543 3 5V27C3 28.1046 3.89543 29 5 29H27C28.1046 29 29 28.1046 29 27V5C29 3.89543 28.1046 3 27 3H5ZM5 5L27 5V27H24V24H16V27H5V5ZM12 17.9852C12 17.5478 12.2843 17.1612 12.7018 17.0308L16 16L19.2983 17.0308C19.7158 17.1612 20 17.5478 20 17.9852V20.75C20 20.8881 19.8881 21 19.75 21H12.25C12.112 21 12 20.8881 12 20.75V17.9852ZM16 15.0001C17.6569 15.0001 19 13.657 19 12.0001C19 10.3433 17.6569 9.00012 16 9.00012C14.3432 9.00012 13 10.3433 13 12.0001C13 13.657 14.3432 15.0001 16 15.0001ZM7 18.6198C7 18.1432 7.33646 17.7327 7.80388 17.6393L11 17V20.75C11 20.8881 10.8881 21 10.75 21H7.25C7.11193 21 7 20.8881 7 20.75V18.6198ZM10 16C11.1046 16 12 15.1046 12 14C12 12.8955 11.1046 12 10 12C8.89546 12 8.00003 12.8955 8.00003 14C8.00003 15.1046 8.89546 16 10 16ZM25 18.6198C25 18.1432 24.6635 17.7327 24.1961 17.6393L21 17V20.75C21 20.8881 21.1119 21 21.25 21H24.75C24.88 21 25 20.8881 25 20.75V18.6198ZM22 16C20.8954 16 20 15.1046 20 14C20 12.8955 20.8954 12 22 12C23.1046 12 24 12.8955 24 14C24 15.1046 23.1046 16 22 16Z" fill="currentColor"></path>',
    "grid-view": '<path fill-rule="evenodd" clip-rule="evenodd" d="M4 6C4 4.89543 4.89543 4 6 4H26C27.1046 4 28 4.89543 28 6V26C28 27.1046 27.1046 28 26 28H6C4.89543 28 4 27.1046 4 26V6ZM14.9999 6L6 6V15H14.9999V6ZM16.9999 6V15H26V6L16.9999 6ZM14.9999 17H6V26H14.9999V17ZM16.9999 26V17H26V26H16.9999Z" fill="currentColor"></path>',
    "guided-highlighting": '<path fill-rule="evenodd" clip-rule="evenodd" d="M7 7C6.5 7.5 3 9 3 9C3 9 6.5 11.1667 7 11.6667C7.5 12.1667 9 15 9 15C9 15 10.5 12.1667 11 11.6667C11.5 11.1667 15 9 15 9C15 9 11.5 7.5 11 7C10.5 6.5 9 3 9 3C9 3 7.5 6.5 7 7ZM26.5178 10.5191C25.462 9.46355 23.7908 9.34495 22.5965 10.2408L12.4341 17.864C11.994 18.1941 11.6532 18.6389 11.4488 19.1496L10.1469 22.4045C9.70118 23.5188 9.9624 24.7914 10.811 25.64L10.8746 25.7037L9.29533 27.2811C8.66323 27.9125 9.11328 28.9928 10.0067 28.9886L11.1704 28.9832C11.4323 28.982 11.6833 28.8781 11.8694 28.6938L12.872 27.701L12.9459 27.775C13.7945 28.6236 15.0672 28.8848 16.1814 28.4391L19.4362 27.1372C19.9471 26.9328 20.3919 26.5919 20.7221 26.1517L28.3447 15.9882C29.2405 14.7938 29.1217 13.1223 28.0657 12.0667L26.5178 10.5191ZM23.7966 11.8407C24.1947 11.5421 24.7518 11.5816 25.1037 11.9335L26.6517 13.4811C27.0037 13.8329 27.0433 14.3901 26.7447 14.7882L19.4769 24.4787L14.1072 19.109L23.7966 11.8407ZM12.9505 20.7807L17.8053 25.6355L15.4386 26.5821C15.0672 26.7307 14.643 26.6436 14.3601 26.3608L12.2252 24.2258C11.9423 23.943 11.8553 23.5187 12.0038 23.1473L12.9505 20.7807Z" fill="currentColor"></path>',
    hashtag: '<path fill-rule="evenodd" clip-rule="evenodd" d="M22.9806 6.19631C23.0889 5.65475 22.7377 5.12792 22.1961 5.01961C21.6546 4.9113 21.1277 5.26252 21.0194 5.80408L19.9803 10.9999H14.0199L14.9806 6.19631C15.0889 5.65475 14.7377 5.12792 14.1961 5.01961C13.6546 4.9113 13.1277 5.26252 13.0194 5.80408L11.9803 10.9999H8C7.44771 10.9999 7 11.4476 7 11.9999C7 12.5522 7.44771 12.9999 8 12.9999H11.5803L10.3802 19.0001L7 19.0001C6.44772 19.0001 6 19.4479 6 20.0001C6 20.5524 6.44772 21.0001 7 21.0001H9.98021L9.01942 25.8041C8.91111 26.3456 9.26232 26.8725 9.80388 26.9808C10.3454 27.0891 10.8723 26.7379 10.9806 26.1963L12.0198 21.0001H17.9802L17.0194 25.8041C16.9111 26.3456 17.2623 26.8725 17.8039 26.9808C18.3454 27.0891 18.8723 26.7379 18.9806 26.1963L20.0198 21.0001L25 21.0001C25.5523 21.0001 26 20.5524 26 20.0001C26 19.4479 25.5523 19.0001 25 19.0001L20.4198 19.0001L21.6199 12.9999H26C26.5523 12.9999 27 12.5522 27 11.9999C27 11.4476 26.5523 10.9999 26 10.9999H22.0199L22.9806 6.19631ZM18.3802 19.0001L19.5803 12.9999H13.6199L12.4198 19.0001L18.3802 19.0001Z" fill="currentColor"></path>',
    header: '<path fill-rule="evenodd" clip-rule="evenodd" d="M7 5C6.44772 5 6 5.44772 6 6C6 6.55228 6.44772 7 7 7H9L9 14V16V24H7C6.44772 24 6 24.4477 6 25C6 25.5523 6.44772 26 7 26H13C13.5523 26 14 25.5523 14 25C14 24.4477 13.5523 24 13 24H11L11 16H21V24H19C18.4477 24 18 24.4477 18 25C18 25.5523 18.4477 26 19 26H25C25.5523 26 26 25.5523 26 25C26 24.4477 25.5523 24 25 24H23V7H25C25.5523 7 26 6.55228 26 6C26 5.44772 25.5523 5 25 5H19C18.4477 5 18 5.44772 18 6C18 6.55228 18.4477 7 19 7H21V14H11L11 7H13C13.5523 7 14 6.55228 14 6C14 5.44772 13.5523 5 13 5H7Z" fill="currentColor"></path>',
    "header-1": '<path fill-rule="evenodd" clip-rule="evenodd" d="M15 6H17C17.5523 6 18 6.44772 18 7C18 7.55228 17.5523 8 17 8H16L16 22H17C17.5523 22 18 22.4477 18 23C18 23.5523 17.5523 24 17 24H15H13C12.4477 24 12 23.5523 12 23C12 22.4477 12.4477 22 13 22H14V16.0001H7L7 22.0001H8C8.55228 22.0001 9 22.4478 9 23.0001C9 23.5523 8.55228 24.0001 8 24.0001H6H4C3.44772 24.0001 3 23.5523 3 23.0001C3 22.4478 3.44772 22.0001 4 22.0001H5L5 15.001L5 15.0001L5 14.9991L5 8.00006H4C3.44772 8.00006 3 7.55234 3 7.00006C3 6.44777 3.44772 6.00006 4 6.00006H6H8C8.55228 6.00006 9 6.44777 9 7.00006C9 7.55234 8.55228 8.00006 8 8.00006H7L7 14.0001H14L14 8H13C12.4477 8 12 7.55228 12 7C12 6.44772 12.4477 6 13 6H15ZM25 13V22.0001H23C22.4477 22.0001 22 22.4478 22 23.0001C22 23.5523 22.4477 24.0001 23 24.0001H26H29C29.5523 24.0001 30 23.5523 30 23.0001C30 22.4478 29.5523 22.0001 29 22.0001H27V11.0101C27.0014 10.8764 26.9762 10.7418 26.9231 10.6148C26.8878 10.5304 26.8413 10.4519 26.7855 10.3811C26.6835 10.2515 26.5555 10.1538 26.4145 10.0897C26.3146 10.0442 26.2059 10.0146 26.0917 10.0042C25.9041 9.98688 25.7112 10.0222 25.5368 10.1136C25.4876 10.1393 25.4408 10.1691 25.3969 10.2023L21.4 13.2C20.9582 13.5314 20.8686 14.1582 21.2 14.6C21.5314 15.0418 22.1582 15.1314 22.6 14.8L25 13Z" fill="currentColor"></path>',
    "header-2": '<path fill-rule="evenodd" clip-rule="evenodd" d="M15 6H17C17.5523 6 18 6.44772 18 7C18 7.55228 17.5523 8 17 8H16L16 22H17C17.5523 22 18 22.4477 18 23C18 23.5523 17.5523 24 17 24H15H13C12.4477 24 12 23.5523 12 23C12 22.4477 12.4477 22 13 22H14V16.0001H7L7 22.0001H8C8.55228 22.0001 9 22.4478 9 23.0001C9 23.5523 8.55228 24.0001 8 24.0001H6H4C3.44772 24.0001 3 23.5523 3 23.0001C3 22.4478 3.44772 22.0001 4 22.0001H5L5 15.001L5 15.0001L5 14.9991L5 8.00006H4C3.44772 8.00006 3 7.55234 3 7.00006C3 6.44777 3.44772 6.00006 4 6.00006H6H8C8.55228 6.00006 9 6.44777 9 7.00006C9 7.55234 8.55228 8.00006 8 8.00006H7L7 14.0001H14L14 8H13C12.4477 8 12 7.55228 12 7C12 6.44772 12.4477 6 13 6H15ZM22.5309 12.7497C22.1483 13.2279 22 13.7632 22 14C22 14.5523 21.5523 15 21 15C20.4477 15 20 14.5523 20 14C20 13.2368 20.3517 12.2721 20.9691 11.5003C21.6119 10.6968 22.6283 10 24 10C25.1486 10 26.4043 10.2852 27.3902 11.1068C28.4082 11.9551 29 13.2595 29 15C29 16.0281 28.5739 16.975 28.0141 17.7972C27.4513 18.6238 26.6998 19.4026 25.9257 20.1122C25.1937 20.7832 24.4073 21.4226 23.6964 22H29C29.5523 22 30 22.4477 30 23C30 23.5523 29.5523 24 29 24H21C20.5955 24 20.2309 23.7564 20.0761 23.3827C19.9213 23.009 20.0069 22.5789 20.2929 22.2929C20.8367 21.749 21.5682 21.1522 22.3069 20.552L22.4021 20.4747C23.129 19.8842 23.8809 19.2734 24.5743 18.6378C25.3002 17.9724 25.9237 17.3137 26.3609 16.6716C26.8011 16.025 27 15.4719 27 15C27 13.7405 26.5918 13.0449 26.1098 12.6432C25.5957 12.2148 24.8514 12 24 12C23.3717 12 22.8881 12.3032 22.5309 12.7497Z" fill="currentColor"></path>',
    "heart-filled": '<path fill-rule="evenodd" clip-rule="evenodd" d="M14.8902 6.99584C12.1703 4.33473 7.76915 4.33471 5.04915 6.99584C2.31694 9.66892 2.31696 14.0121 5.04915 16.6852L16 27.399L26.9508 16.6852C29.6831 14.0121 29.683 9.66889 26.9508 6.99584C24.2309 4.33473 19.8298 4.33471 17.1098 6.99584L16 8.08158L14.8902 6.99584Z" fill="currentColor"></path>',
    "heart-hollow": '<path fill-rule="evenodd" clip-rule="evenodd" d="M6.44781 8.42544C8.39044 6.52485 11.549 6.52486 13.4916 8.42544L15.3007 10.1954L16 10.8796L16.6993 10.1954L18.5084 8.42544C20.4511 6.52485 23.6096 6.52486 25.5522 8.42544C27.4826 10.3141 27.4826 13.3669 25.5522 15.2556L16 24.601L6.44781 15.2556C4.5174 13.3669 4.51739 10.3141 6.44781 8.42544ZM14.8902 6.99584C12.1703 4.33473 7.76915 4.33471 5.04915 6.99584C2.31694 9.66892 2.31696 14.0121 5.04915 16.6852L15.3007 26.7148L16 27.399L16.6993 26.7148L26.9508 16.6852C29.6831 14.0121 29.683 9.66889 26.9508 6.99584C24.2309 4.33473 19.8298 4.33471 17.1098 6.99584L16 8.08158L14.8902 6.99584Z" fill="currentColor"></path>',
    "hidden-input": '<path fill-rule="evenodd" clip-rule="evenodd" d="M3 10C3 9.44772 3.44772 9 4 9H5V11H4H3V10ZM7 9H9V11H7V9ZM11 9H13V11H11V9ZM15 9H17V11H15V9ZM19 9H21V11H19V9ZM23 9H25V11H23V9ZM27 9H28C28.5523 9 29 9.44772 29 10V11L28 11H27V10V9ZM3 15V13H5V15H3ZM29 13V15H27V13H29ZM3 19V17H5V19H3ZM29 17V19H27V17H29ZM3 22V21H4H5V22V23H4C3.44772 23 3 22.5523 3 22ZM9 23H7V21H9V23ZM13 23H11V21H13V23ZM17 23H15V21H17V23ZM21 23H19V21H21V23ZM25 23H23V21H25V23ZM28 23H27V22V21H28H29V22C29 22.5523 28.5523 23 28 23Z" fill="currentColor"></path>',
    hide: '<path fill-rule="evenodd" clip-rule="evenodd" d="M7.7071 6.29289C7.31657 5.90237 6.68341 5.90237 6.29288 6.29289C5.90236 6.68342 5.90236 7.31658 6.29288 7.70711L8.47659 9.89082C7.88357 10.3392 7.33506 10.806 6.83726 11.2644C5.70674 12.3056 4.79492 13.3437 4.16581 14.1207C3.85063 14.51 3.60482 14.8358 3.43639 15.0662C3.35213 15.1815 3.28714 15.2732 3.2424 15.3371C3.22003 15.3691 3.20271 15.3942 3.19057 15.412L3.17627 15.4329L3.17206 15.4392L3.17069 15.4412L3.1702 15.4419C3.17 15.4422 3.16982 15.4425 3.99999 16L3.16982 15.4425L2.79541 16L3.16982 16.5575L3.99999 16C3.16982 16.5575 3.17 16.5578 3.1702 16.5581L3.17069 16.5588L3.17206 16.5608L3.17627 16.5671L3.19057 16.588C3.20271 16.6058 3.22003 16.6309 3.2424 16.6629C3.28714 16.7268 3.35213 16.8185 3.43639 16.9338C3.60482 17.1642 3.85063 17.49 4.16581 17.8793C4.79492 18.6563 5.70674 19.6944 6.83726 20.7356C9.06256 22.7851 12.3011 25 16 25C18.1327 25 20.1124 24.2637 21.833 23.2472L24.2929 25.7071C24.6834 26.0976 25.3166 26.0976 25.7071 25.7071C26.0976 25.3166 26.0976 24.6834 25.7071 24.2929L23.5234 22.1092C24.1164 21.6608 24.6649 21.194 25.1627 20.7356C26.2932 19.6944 27.2051 18.6563 27.8342 17.8793C28.1493 17.49 28.3952 17.1642 28.5636 16.9338C28.6478 16.8185 28.7128 16.7268 28.7576 16.6629C28.78 16.6309 28.7973 16.6058 28.8094 16.588L28.8237 16.5671L28.8279 16.5608L28.8293 16.5588L28.8298 16.5581C28.83 16.5578 28.8302 16.5575 28 16L28.8302 16.5575L29.2046 16L28.8302 15.4425L28 16C28.8302 15.4425 28.83 15.4422 28.8298 15.4419L28.8293 15.4412L28.8279 15.4392L28.8237 15.4329L28.8094 15.412C28.7973 15.3942 28.78 15.3691 28.7576 15.3371C28.7128 15.2732 28.6478 15.1815 28.5636 15.0662C28.3952 14.8358 28.1493 14.51 27.8342 14.1207C27.2051 13.3437 26.2932 12.3056 25.1627 11.2644C22.9374 9.21494 19.6989 7 16 7C13.8673 7 11.8876 7.73635 10.167 8.75276L7.7071 6.29289ZM9.90591 11.3201C9.29895 11.7642 8.72517 12.2447 8.19216 12.7356C7.1511 13.6944 6.30556 14.6563 5.72021 15.3793C5.52903 15.6154 5.36628 15.8252 5.23424 16C5.36628 16.1748 5.52903 16.3846 5.72021 16.6207C6.30556 17.3437 7.1511 18.3056 8.19216 19.2644C10.31 21.2149 13.0715 23 16 23C17.5227 23 19.0002 22.5174 20.3656 21.7799L18.032 19.4462C17.4364 19.7981 16.7418 20 16 20C13.7908 20 12 18.2091 12 16C12 15.2582 12.2019 14.5635 12.5538 13.968L9.90591 11.3201ZM13.968 12.5538L11.6343 10.2201C12.9997 9.48261 14.4773 9 16 9C18.9285 9 21.69 10.7851 23.8078 12.7356C24.8489 13.6944 25.6944 14.6563 26.2798 15.3793C26.4709 15.6154 26.6337 15.8252 26.7657 16C26.6337 16.1748 26.4709 16.3846 26.2798 16.6207C25.6944 17.3437 24.8489 18.3056 23.8078 19.2644C23.2748 19.7553 22.701 20.2358 22.0941 20.6799L19.4462 18.032C19.7981 17.4365 20 16.7418 20 16C20 13.7909 18.2091 12 16 12C15.2582 12 14.5635 12.2019 13.968 12.5538Z" fill="currentColor"></path>',
    history: '<path fill-rule="evenodd" clip-rule="evenodd" d="M26.0029 14.1634C24.6212 9.00653 19.3206 5.94624 14.1637 7.32801C12.2181 7.84932 10.5713 8.92774 9.34835 10.3468L13 13.9984L5 13.9984V5.99845L7.93101 8.92946C9.39628 7.27214 11.349 6.01166 13.6461 5.39616C19.8699 3.7285 26.2671 7.42196 27.9348 13.6457C29.6024 19.8695 25.909 26.2668 19.6852 27.9344C13.4614 29.6021 7.06415 25.9086 5.3965 19.6848C5.25356 19.1514 5.57014 18.603 6.10361 18.4601C6.63707 18.3172 7.18541 18.6337 7.32835 19.1672C8.71012 24.3241 14.0107 27.3843 19.1676 26.0026C24.3244 24.6208 27.3847 19.3202 26.0029 14.1634ZM17.0001 12.0003C17.0001 11.448 16.5524 11.0003 16.0001 11.0002C15.4478 11.0002 15.0001 11.448 15.0001 12.0002L15 17.0002L15 17.4145L15.2929 17.7074L19.2929 21.7074C19.6834 22.0979 20.3166 22.0979 20.7071 21.7074C21.0976 21.3168 21.0976 20.6837 20.7071 20.2931L17 16.586L17.0001 12.0003Z" fill="currentColor"></path>',
    "home-filled": '<path d="M28 29C28.5523 29 29 28.5523 29 28V16.4142C29 16.149 28.8946 15.8946 28.7071 15.7071L16.7071 3.70711C16.3166 3.31659 15.6834 3.31659 15.2929 3.70712L3.29313 15.7071C3.1056 15.8946 3.00024 16.149 3.00024 16.4142V28C3.00024 28.5523 3.44796 29 4.00024 29H12C12.5523 29 13 28.5523 13 28V20C13 18.8954 13.8954 18 15 18H17C18.1046 18 19 18.8954 19 20V28C19 28.5523 19.4477 29 20 29H28Z" fill="currentColor"></path>',
    "home-hollow": '<path fill-rule="evenodd" clip-rule="evenodd" d="M16.7071 3.29289C16.5196 3.10536 16.2652 3 16 3C15.7348 3 15.4804 3.10536 15.2929 3.2929L3.29313 15.2929C3.1056 15.4804 3.00024 15.7348 3.00024 16V28C3.00024 28.5523 3.44796 29 4.00024 29H13C13.5523 29 14 28.5523 14 28V20C14 19.4477 14.4477 19 15 19H17C17.5523 19 18 19.4477 18 20V28C18 28.5523 18.4477 29 19 29H28C28.5523 29 29 28.5523 29 28V16C29 15.7348 28.8946 15.4804 28.7071 15.2929L16.7071 3.29289ZM5.00024 16.4142L16 5.41422L27 16.4142V27H20V20C20 18.3431 18.6569 17 17 17H15C13.3431 17 12 18.3431 12 20V27H5.00024V16.4142Z" fill="currentColor"></path>',
    "horizontal-dots": '<path fill-rule="evenodd" clip-rule="evenodd" d="M10 16C10 17.1046 9.10457 18 8 18C6.89543 18 6 17.1046 6 16C6 14.8954 6.89543 14 8 14C9.10457 14 10 14.8954 10 16ZM18 16C18 17.1046 17.1046 18 16 18C14.8954 18 14 17.1046 14 16C14 14.8954 14.8954 14 16 14C17.1046 14 18 14.8954 18 16ZM24 18C25.1046 18 26 17.1046 26 16C26 14.8954 25.1046 14 24 14C22.8954 14 22 14.8954 22 16C22 17.1046 22.8954 18 24 18Z" fill="currentColor"></path>',
    iframe: '<path fill-rule="evenodd" clip-rule="evenodd" d="M4 4C3.44772 4 3 4.44772 3 5V27C3 27.5523 3.44772 28 4 28H28C28.5523 28 29 27.5523 29 27V5C29 4.44772 28.5523 4 28 4H4ZM5 26V6H27V26H5ZM10.7071 14.7071L9.41418 16L10.7071 17.2929C11.0976 17.6834 11.0976 18.3166 10.7071 18.7071C10.3166 19.0976 9.68343 19.0976 9.2929 18.7071L7.29287 16.7071C6.90234 16.3166 6.90233 15.6835 7.29285 15.2929L9.29285 13.2929C9.68336 12.9023 10.3165 12.9023 10.7071 13.2929C11.0976 13.6834 11.0976 14.3165 10.7071 14.7071ZM22.5858 16L21.2929 14.7071C20.9023 14.3165 20.9023 13.6834 21.2929 13.2929C21.6834 12.9023 22.3166 12.9023 22.7071 13.2929L24.7071 15.2929C25.0976 15.6835 25.0976 16.3166 24.7071 16.7071L22.707 18.7071C22.3165 19.0976 21.6833 19.0976 21.2928 18.7071C20.9023 18.3166 20.9023 17.6834 21.2928 17.2929L22.5858 16ZM18.9702 10.2425C19.1041 9.70672 18.7784 9.16378 18.2426 9.02983C17.7068 8.89588 17.1638 9.22164 17.0299 9.75744L14.0299 21.7575C13.8959 22.2933 14.2217 22.8362 14.7575 22.9701C15.2933 23.1041 15.8362 22.7783 15.9701 22.2425L18.9702 10.2425Z" fill="currentColor"></path>',
    "image-capture": '<path fill-rule="evenodd" clip-rule="evenodd" d="M7.00269 6C6.4504 6 6.00269 6.44772 6.00269 7V12H4.00269V7C4.00269 5.34315 5.34583 4 7.00269 4H11.9985V6L7.00269 6ZM16 12C13.7909 12 12 13.7909 12 16C12 18.2091 13.7909 20 16 20C18.2091 20 20 18.2091 20 16C20 13.7909 18.2091 12 16 12ZM17 10.083V6H15V10.083C12.4875 10.5045 10.5045 12.4875 10.083 15H6V17H10.083C10.5045 19.5125 12.4875 21.4955 15 21.917V26H17V21.917C19.5125 21.4955 21.4955 19.5125 21.917 17H26V15H21.917C21.4955 12.4875 19.5125 10.5045 17 10.083ZM25 6C25.553 6 26 6.44732 26 6.99886V12H28V6.99886C28 5.34127 26.6561 4 25 4H20.0042V6L25 6ZM25 26C25.5523 26 26 25.5523 26 25V20H28V25C28 26.6569 26.6569 28 25 28H20.0042V26H25ZM7 26C6.44772 26 6 25.5523 6 25V20H4V25C4 26.6569 5.34315 28 7 28H11.9958V26H7Z" fill="currentColor"></path>',
    "image-filled": '<path fill-rule="evenodd" clip-rule="evenodd" d="M3 27C3 28.1046 3.89543 29 5 29H27C28.1046 29 29 28.1046 29 27V8V5C29 3.89543 28.1046 3 27 3H5C3.89543 3 3 3.89543 3 5V27ZM5 22L10 17L15 22L23 12L27 16V8V5H5V22ZM17 11.5C17 13.433 15.433 15 13.5 15C11.567 15 10 13.433 10 11.5C10 9.56701 11.567 8.00001 13.5 8.00001C15.433 8.00001 17 9.56701 17 11.5Z" fill="currentColor"></path>',
    "image-hollow": '<path fill-rule="evenodd" clip-rule="evenodd" d="M3 27C3 28.1046 3.89543 29 5 29H27C28.1046 29 29 28.1046 29 27V8V5C29 3.89543 28.1046 3 27 3H5C3.89543 3 3 3.89543 3 5V27ZM27 27H5V24.4142L10 19.4142L14.2929 23.7071C14.494 23.9082 14.7713 24.0142 15.0553 23.9985C15.3393 23.9827 15.6032 23.8468 15.7809 23.6247L23.0829 14.4971L27 18.4142V27ZM27 15.5858L23.7071 12.2929C23.506 12.0918 23.2287 11.9858 22.9447 12.0015C22.6607 12.0173 22.3968 12.1532 22.2191 12.3753L14.9171 21.5029L10.7071 17.2929C10.3166 16.9024 9.68342 16.9024 9.29289 17.2929L5 21.5858V5H27V8V15.5858ZM13.5 10C12.6716 10 12 10.6716 12 11.5C12 12.3284 12.6716 13 13.5 13C14.3284 13 15 12.3284 15 11.5C15 10.6716 14.3284 10 13.5 10ZM10 11.5C10 9.56701 11.567 8.00001 13.5 8.00001C15.433 8.00001 17 9.56701 17 11.5C17 13.433 15.433 15 13.5 15C11.567 15 10 13.433 10 11.5Z" fill="currentColor"></path>',
    indent: '<path fill-rule="evenodd" clip-rule="evenodd" d="M5 9C5 8.44772 5.44772 8 6 8H26C26.5523 8 27 8.44772 27 9C27 9.55228 26.5523 10 26 10H6C5.44772 10 5 9.55228 5 9ZM6.53 12.9563C5.86395 12.5401 5 13.0189 5 13.8043V20.1958C5 20.9813 5.86395 21.4601 6.53 21.0438L11.6432 17.8481C12.2699 17.4564 12.2699 16.5438 11.6432 16.1521L6.53 12.9563ZM16 16C15.4477 16 15 16.4477 15 17C15 17.5523 15.4477 18 16 18H26C26.5523 18 27 17.5523 27 17C27 16.4477 26.5523 16 26 16H16ZM6 24C5.44772 24 5 24.4477 5 25C5 25.5523 5.44772 26 6 26H26C26.5523 26 27 25.5523 27 25C27 24.4477 26.5523 24 26 24H6Z" fill="currentColor"></path>',
    "info-circle-filled": '<path fill-rule="evenodd" clip-rule="evenodd" d="M16 29C23.1797 29 29 23.1797 29 16C29 8.8203 23.1797 3 16 3C8.8203 3 3 8.8203 3 16C3 23.1797 8.8203 29 16 29ZM16 8C16.5523 8 17 8.44771 17 9V10C17 10.5523 16.5523 11 16 11C15.4477 11 15 10.5523 15 10V9C15 8.44772 15.4477 8 16 8ZM16 15C16.5523 15 17 15.4477 17 16V23C17 23.5523 16.5523 24 16 24C15.4477 24 15 23.5523 15 23V16C15 15.4477 15.4477 15 16 15Z" fill="currentColor"></path>',
    "info-circle-hollow": '<path fill-rule="evenodd" clip-rule="evenodd" d="M16 5C9.92487 5 5 9.92487 5 16C5 22.0751 9.92487 27 16 27C22.0751 27 27 22.0751 27 16C27 9.92487 22.0751 5 16 5ZM3 16C3 8.8203 8.8203 3 16 3C23.1797 3 29 8.8203 29 16C29 23.1797 23.1797 29 16 29C8.8203 29 3 23.1797 3 16ZM16 15C16.5523 15 17 15.4477 17 16V23C17 23.5523 16.5523 24 16 24C15.4477 24 15 23.5523 15 23V16C15 15.4477 15.4477 15 16 15ZM17 9C17 8.44771 16.5523 8 16 8C15.4477 8 15 8.44772 15 9V10C15 10.5523 15.4477 11 16 11C16.5523 11 17 10.5523 17 10V9Z" fill="currentColor"></path>',
    insights: '<path fill-rule="evenodd" clip-rule="evenodd" d="M28 29C28.5523 29 29 28.5523 29 28C29 27.4478 28.5523 27 28 27H5V5C5 4.44772 4.55228 4 4 4C3.44772 4 3 4.44772 3 5V28V29H4H28ZM11 15C11 14.4477 10.5523 14 10 14C9.44772 14 9 14.4477 9 15V22C9 22.5523 9.44772 23 10 23C10.5523 23 11 22.5523 11 22V15ZM17 6C17.5523 6 18 6.44772 18 7V22.0001C18 22.5524 17.5523 23.0001 17 23.0001C16.4477 23.0001 16 22.5524 16 22.0001V7C16 6.44772 16.4477 6 17 6ZM25 11C25 10.4477 24.5523 10 24 10C23.4477 10 23 10.4477 23 11V22C23 22.5523 23.4477 23 24 23C24.5523 23 25 22.5523 25 22V11Z" fill="currentColor"></path>',
    instagram: '<path fill-rule="evenodd" clip-rule="evenodd" d="M16 4C12.741 4 12.3323 4.01381 11.0524 4.07221C9.77516 4.13047 8.90283 4.33334 8.13953 4.62996C7.35042 4.93663 6.68122 5.34695 6.01408 6.01407C5.34696 6.68118 4.93664 7.35044 4.62998 8.13955C4.33335 8.90283 4.13049 9.77516 4.0722 11.0524C4.01381 12.3323 4 12.741 4 16C4 19.259 4.01381 19.6677 4.0722 20.9476C4.13049 22.2248 4.33335 23.0972 4.62998 23.8605C4.93664 24.6496 5.34696 25.3188 6.01408 25.9859C6.68122 26.6531 7.35042 27.0634 8.13953 27.37C8.90283 27.6667 9.77516 27.8695 11.0524 27.9278C12.3323 27.9862 12.741 28 16 28C19.259 28 19.6677 27.9862 20.9476 27.9278C22.2248 27.8695 23.0972 27.6667 23.8605 27.37C24.6496 27.0634 25.3188 26.6531 25.9859 25.9859C26.653 25.3188 27.0634 24.6496 27.37 23.8605C27.6667 23.0972 27.8695 22.2248 27.9278 20.9476C27.9862 19.6677 28 19.259 28 16C28 12.741 27.9862 12.3323 27.9278 11.0524C27.8695 9.77516 27.6667 8.90283 27.37 8.13955C27.0634 7.35044 26.653 6.68118 25.9859 6.01407C25.3188 5.34695 24.6496 4.93663 23.8605 4.62996C23.0972 4.33334 22.2248 4.13047 20.9476 4.07221C19.6677 4.01381 19.259 4 16 4ZM16 6.16216C19.2041 6.16216 19.5837 6.1744 20.849 6.23213C22.019 6.28548 22.6544 6.48098 23.0773 6.64531C23.6374 6.863 24.0371 7.12304 24.457 7.54293C24.877 7.96287 25.137 8.36262 25.3547 8.92274C25.519 9.34559 25.7145 9.98098 25.7679 11.151C25.8256 12.4163 25.8378 12.7959 25.8378 16C25.8378 19.2041 25.8256 19.5837 25.7679 20.849C25.7145 22.019 25.519 22.6544 25.3547 23.0773C25.137 23.6374 24.877 24.0371 24.457 24.457C24.0371 24.877 23.6374 25.137 23.0773 25.3547C22.6544 25.519 22.019 25.7145 20.849 25.7679C19.5839 25.8256 19.2044 25.8378 16 25.8378C12.7956 25.8378 12.4162 25.8256 11.151 25.7679C9.98098 25.7145 9.34559 25.519 8.92274 25.3547C8.36261 25.137 7.96287 24.877 7.54297 24.457C7.12307 24.0371 6.86299 23.6374 6.64531 23.0773C6.48097 22.6544 6.28551 22.019 6.23212 20.849C6.17439 19.5837 6.16216 19.2041 6.16216 16C6.16216 12.7959 6.17439 12.4163 6.23212 11.151C6.28551 9.98098 6.48097 9.34559 6.64531 8.92274C6.86299 8.36262 7.12305 7.96287 7.54295 7.54298C7.96287 7.12303 8.36261 6.863 8.92274 6.64531C9.34559 6.48098 9.98098 6.28548 11.151 6.23213C12.4163 6.1744 12.7959 6.16216 16 6.16216ZM16.0001 20C13.7909 20 12 18.2091 12 16C12 13.7908 13.7909 12 16.0001 12C18.2092 12 20 13.7908 20 16C20 18.2091 18.2092 20 16.0001 20ZM16.0001 9.83779C12.5968 9.83779 9.83789 12.5967 9.83789 16C9.83789 19.4032 12.5968 22.1621 16.0001 22.1621C19.4033 22.1621 22.1622 19.4032 22.1622 16C22.1622 12.5967 19.4033 9.83779 16.0001 9.83779ZM22.4056 11.0342C23.2009 11.0342 23.8456 10.3895 23.8456 9.5942C23.8456 8.7989 23.2009 8.15417 22.4056 8.15417C21.6103 8.15417 20.9656 8.7989 20.9656 9.5942C20.9656 10.3895 21.6103 11.0342 22.4056 11.0342Z" fill="currentColor"></path>',
    italic: '<path fill-rule="evenodd" clip-rule="evenodd" d="M12 8C12 7.44772 12.4477 7 13 7H25C25.5523 7 26 7.44772 26 8C26 8.55228 25.5523 9 25 9H20.6346L13.5758 24H19C19.5523 24 20 24.4477 20 25C20 25.5523 19.5523 26 19 26H7C6.44772 26 6 25.5523 6 25C6 24.4477 6.44772 24 7 24H11.3654L18.4242 9H13C12.4477 9 12 8.55228 12 8Z" fill="currentColor"></path>',
    kanban: '<path fill-rule="evenodd" clip-rule="evenodd" d="M29 5C29 3.89543 28.1046 3 27 3H20H12H5C3.89543 3 3 3.89543 3 5V27C3 28.1046 3.89543 29 5 29H11.998C11.9987 29 11.9993 29 12 29C12.0007 29 12.0013 29 12.002 29H19.998L20 29L20.002 29H27C28.1046 29 29 28.1046 29 27L29 5ZM13 27H19L19 13H13L13 27ZM13 11L19 11V5L13 5V11ZM11 5V11L5 11L5 5L11 5ZM11 13L11 27H5L5 13H11ZM27 27H21V13L27 13L27 27ZM27 11L21 11V5L27 5V11Z" fill="currentColor"></path>',
    keyboard: '<path fill-rule="evenodd" clip-rule="evenodd" d="M5 6C3.89543 6 3 6.89543 3 8V13V19V24C3 25.1046 3.89543 26 5 26H27C28.1046 26 29 25.1046 29 24V19V13V8C29 6.89543 28.1046 6 27 6H5ZM27 18V14H23H21H20V18H22H24H27ZM24 20H27V24H24V20ZM22 20H20H18H14H12H11V24H22V20ZM9 20L9 24H5V20H9ZM5 18H9H11H12V14H11H9H5V18ZM14 18H18V14H17H15H14V18ZM5 12H9L9 8H5V12ZM15 12H11V8H15V12ZM21 12H17V8H21V12ZM27 12H23V8H27V12Z" fill="currentColor"></path>',
    language: '<path fill-rule="evenodd" clip-rule="evenodd" d="M12.8944 3.55276C12.6474 3.05878 12.0468 2.85856 11.5528 3.10555C11.0588 3.35254 10.8586 3.95321 11.1056 4.44719L12.3819 6.99992H4C3.44772 6.99992 3 7.44764 3 7.99992C3 8.55221 3.44772 8.99992 4 8.99992H13.9776C13.993 9.00028 14.0085 9.00028 14.024 8.99992H15.1315L10.5524 15.8687L8.89443 12.5528C8.64744 12.0588 8.04676 11.8586 7.55279 12.1056C7.05881 12.3526 6.85858 12.9532 7.10557 13.4472L9.10557 17.4472L9.21115 17.6584L9.30988 17.7324L6.16795 22.4453C5.8616 22.9048 5.98577 23.5257 6.4453 23.8321C6.90483 24.1384 7.5257 24.0142 7.83205 23.5547L10.9123 18.9343L13.4 20.8C13.8418 21.1314 14.4686 21.0418 14.8 20.6C15.1314 20.1582 15.0418 19.5314 14.6 19.2L12.0235 17.2676L17.5352 8.99992H22C22.5523 8.99992 23 8.55221 23 7.99992C23 7.44764 22.5523 6.99992 22 6.99992H17.0087H16.9931H14.618L12.8944 3.55276ZM22.4999 12.1339C22.4592 12.1104 22.4163 12.0896 22.3714 12.0716C21.8586 11.8665 21.2766 12.1159 21.0715 12.6287L15.0715 27.6287C14.8664 28.1415 15.1158 28.7234 15.6286 28.9285C16.1414 29.1337 16.7234 28.8842 16.9285 28.3715L18.6959 23.9529C18.7918 23.9835 18.894 24 19 24H25.6125L27.0513 28.3163C27.226 28.8402 27.7923 29.1234 28.3162 28.9487C28.8402 28.7741 29.1233 28.2078 28.9487 27.6838L23.9487 12.6838C23.774 12.1599 23.2077 11.8767 22.6838 12.0514C22.6186 12.0731 22.5572 12.1009 22.4999 12.1339ZM24.9459 22L22.4601 14.5425L19.4771 22H24.9459Z" fill="currentColor"></path>',
    laptop: '<path fill-rule="evenodd" clip-rule="evenodd" d="M7 7C6.44772 7 6 7.44772 6 8V19.7561C5.94618 19.8239 5.89643 19.8956 5.8512 19.971L3.14251 24.4855C2.95715 24.7944 2.95229 25.1792 3.1298 25.4927C3.30731 25.8062 3.63973 26 4 26H28C28.3603 26 28.6927 25.8062 28.8702 25.4927C29.0477 25.1792 29.0429 24.7944 28.8575 24.4855L26.1488 19.971C26.1036 19.8956 26.0538 19.8239 26 19.7561V8C26 7.44772 25.5523 7 25 7H7ZM24.4338 21H7.56619L5.76619 24H26.2338L24.4338 21ZM24 19V9H8V19H24Z" fill="currentColor"></path>',
    lasso: '<path fill-rule="evenodd" clip-rule="evenodd" d="M6.49223 6.27904C8.76071 5.40521 11.3242 6.3672 12.4577 8.5177L17.7627 18.5819L22.0274 17.0077L21.6543 16.3627C20.5021 14.3711 21.3708 11.8206 23.4991 10.9463L23.6555 10.882C25.2386 10.2317 27.0607 10.7883 28.01 12.2123C29.2978 14.144 28.4428 16.7716 26.2648 17.5755L24.9476 18.0617L25.8837 19.68C27.2298 22.0069 26.1569 24.9854 23.6361 25.9195C21.5939 26.6762 19.3072 25.8013 18.2917 23.8747L16.8108 21.0652L15.1958 21.6613C11.8178 22.9082 8.04492 21.389 6.47355 18.1492L3.90148 12.8462C2.67661 10.3208 3.87307 7.28795 6.49223 6.27904ZM7.21115 8.14536C5.68442 8.73346 4.987 10.5013 5.70099 11.9734L8.27305 17.2764C9.39546 19.5905 12.0904 20.6757 14.5032 19.785L15.8701 19.2805L10.6885 9.45029C10.0277 8.19675 8.53346 7.636 7.21115 8.14536ZM18.7034 20.3666L20.0609 22.9421C20.6082 23.9804 21.8406 24.4519 22.9412 24.0441C24.2997 23.5407 24.878 21.9355 24.1525 20.6814L23.0436 18.7645L18.7034 20.3666ZM23.9313 16.3049L25.5723 15.6992C26.5378 15.3429 26.9168 14.178 26.3459 13.3217C25.9251 12.6904 25.1173 12.4437 24.4155 12.732L24.2591 12.7963C23.2512 13.2103 22.8399 14.4181 23.3855 15.3613L23.9313 16.3049Z" fill="currentColor"></path>',
    layout: '<path fill-rule="evenodd" clip-rule="evenodd" d="M5 4C4.44772 4 4 4.44772 4 5V9V20V27C4 27.5523 4.44772 28 5 28H27C27.5523 28 28 27.5523 28 27V20V9V5C28 4.44772 27.5523 4 27 4H5ZM26 10H21V19H26V10ZM20 8H26V6H6V8H20ZM6 10H19V19H6V10ZM6 26V21H20H26V26H6Z" fill="currentColor"></path>',
    "lesson-spark": '<path fill-rule="evenodd" clip-rule="evenodd" d="M3 12C3 12 3.95746 11.5 5.06305 10.8846C6.33115 10.1788 7.79414 9.3211 8.23077 8.89181C8.6794 8.45073 9.62053 6.71867 10.3783 5.24579C11.0011 4.03538 11.5 3 11.5 3C11.5 3 11.9989 4.03538 12.6217 5.24579C13.3795 6.71867 14.3206 8.45073 14.7692 8.89181C15.2059 9.3211 16.6688 10.1788 17.9369 10.8846C19.0425 11.5 20 12 20 12C20 12 19.065 12.5332 17.9759 13.1871C16.699 13.9539 15.2103 14.8867 14.7692 15.3204C14.3225 15.7596 13.3874 17.4156 12.6313 18.8269C12.004 19.9976 11.5 21 11.5 21C11.5 21 10.996 19.9976 10.3687 18.8269C9.61262 17.4156 8.67751 15.7596 8.23077 15.3204C7.78966 14.8867 6.301 13.9539 5.02406 13.1871C3.93504 12.5332 3 12 3 12ZM7.03131 12.0681C7.4257 12.3123 7.81666 12.5599 8.17038 12.7934C8.6735 13.1254 9.26769 13.5351 9.63295 13.8942C10.0478 14.3022 10.4788 14.9844 10.7978 15.5118C11.0251 15.8877 11.2645 16.3043 11.5 16.726C11.7355 16.3043 11.9749 15.8877 12.2022 15.5118C12.5212 14.9844 12.9522 14.3022 13.3671 13.8942C13.7323 13.5351 14.3265 13.1254 14.8296 12.7934C15.1833 12.5599 15.5743 12.3123 15.9687 12.0681C15.5903 11.8492 15.2156 11.6267 14.8745 11.4145C14.3733 11.1025 13.754 10.6984 13.3671 10.318C12.9382 9.89629 12.5023 9.18107 12.1868 8.64131C11.9644 8.26073 11.7305 7.83888 11.5 7.4107C11.2695 7.83888 11.0356 8.26073 10.8132 8.64131C10.4977 9.18107 10.0618 9.89629 9.63295 10.318C9.24603 10.6984 8.62674 11.1025 8.12548 11.4145C7.78441 11.6267 7.40975 11.8492 7.03131 12.0681ZM14 23C14 23 17.5 21.5 18 21C18.5 20.5 20 17 20 17C20 17 21.5 20.5 22 21C22.5 21.5 26 23 26 23C26 23 22.5 25.1667 22 25.6667C21.5 26.1667 20 29 20 29C20 29 18.5 26.1667 18 25.6667C17.5 25.1667 14 23 14 23ZM24.3333 14.3333C24.0417 14.625 22 15.5 22 15.5C22 15.5 24.0417 16.7639 24.3333 17.0556C24.625 17.3472 25.5 19 25.5 19C25.5 19 26.375 17.3472 26.6667 17.0556C26.9583 16.7639 29 15.5 29 15.5C29 15.5 26.9583 14.625 26.6667 14.3333C26.375 14.0417 25.5 12 25.5 12C25.5 12 24.625 14.0417 24.3333 14.3333Z" fill="currentColor"></path>',
    "lightbulb-filled": '<path fill-rule="evenodd" clip-rule="evenodd" d="M25 10.7143C25 13.1878 23.6972 14.9153 22.4217 16.6067C21.1983 18.229 20 19.818 20 22H12C12 19.8864 10.8757 18.3585 9.69334 16.7517C8.38233 14.97 7 13.0914 7 10.21C7 6.35286 10.5 2 16 2C21.5 2 25 6.36 25 10.7143ZM12 26C12 27.5 12.5 30 16 30C19.5 30 20 27.5 20 26H12ZM13 10C13 8.96724 13.7529 8 15 8C15.5523 8 16 7.55228 16 7C16 6.44772 15.5523 6 15 6C12.4856 6 11 8.03276 11 10C11 10.5523 11.4477 11 12 11C12.5523 11 13 10.5523 13 10Z" fill="currentColor"></path>',
    "lightbulb-hollow": '<path fill-rule="evenodd" clip-rule="evenodd" d="M9 10.7143C9 7.35976 11.5854 4 16 4C20.4146 4 23 7.35976 23 10.7143C23 12.4669 22.0224 13.6557 20.7379 15.1675L20.6936 15.2197C19.6391 16.4605 18.3895 17.9307 18.0748 20H13.9239C13.6144 18.0149 12.4172 16.6864 11.3932 15.5501L11.244 15.3844C10.0034 14.0028 9 12.7953 9 10.7143ZM16 2C10.3841 2 7 6.35452 7 10.7143C7 13.6114 8.49658 15.3182 9.75594 16.7206L9.78046 16.7479C11.0545 18.1666 12 19.2195 12 21L12 22H20L20 21C20 19.1856 20.9871 17.963 22.262 16.4625L22.3509 16.358C23.5504 14.9478 25 13.2437 25 10.7143C25 6.35452 21.6159 2 16 2ZM13 26H12V27C12 27.9907 12.6023 28.7651 13.324 29.2463C14.0526 29.732 15.0017 30 16 30C16.9983 30 17.9474 29.732 18.676 29.2463C19.3977 28.7651 20 27.9907 20 27V26H19H13Z" fill="currentColor"></path>',
    link: '<path fill-rule="evenodd" clip-rule="evenodd" d="M8.53554 15.1213L11.7071 18.2929L10.2929 19.7071L7.12134 16.5356C5.1687 14.5829 5.1687 11.4171 7.12135 9.46444L9.46453 7.1213C11.4172 5.1687 14.583 5.16872 16.5356 7.12133L19.7071 10.2929L18.2929 11.7071L15.1214 8.53554C13.9498 7.36397 12.0503 7.36397 10.8787 8.53552L8.53556 10.8787C7.36396 12.0502 7.36396 13.9498 8.53554 15.1213ZM13.7071 20.2929L16.8787 23.4645C18.0503 24.6361 19.9498 24.6361 21.1214 23.4645L23.4645 21.1213C24.6361 19.9498 24.6361 18.0503 23.4645 16.8787L20.2929 13.7071L21.7071 12.2929L24.8787 15.4645C26.8313 17.4171 26.8313 20.5829 24.8787 22.5355L22.5356 24.8787C20.5829 26.8313 17.4171 26.8313 15.4645 24.8787L12.2929 21.7071L13.7071 20.2929ZM13.7071 12.2929C13.3166 11.9024 12.6835 11.9024 12.2929 12.2929C11.9024 12.6834 11.9024 13.3166 12.2929 13.7071L18.2929 19.7071C18.6835 20.0976 19.3166 20.0976 19.7071 19.7071C20.0977 19.3166 20.0977 18.6834 19.7071 18.2929L13.7071 12.2929Z" fill="currentColor"></path>',
    linkedin: '<path d="M24.4495 24.4497H20.8934V18.8805C20.8934 17.5525 20.8697 15.843 19.0439 15.843C17.1917 15.843 16.9083 17.2898 16.9083 18.7838V24.4492H13.3522V12.9969H16.766V14.5619H16.8139C17.509 13.3735 18.8062 12.661 20.1822 12.7121C23.7864 12.7121 24.451 15.0828 24.451 18.1671L24.4495 24.4497ZM9.33975 11.4314C9.33954 11.4314 9.33932 11.4314 9.33932 11.4314C8.20722 11.4314 7.27564 10.4999 7.27564 9.36779C7.27564 8.23567 8.20722 7.30408 9.33932 7.30408C10.4713 7.30408 11.4028 8.23545 11.403 9.36736C11.403 9.36736 11.403 9.36757 11.403 9.36779C11.403 10.4997 10.4716 11.4313 9.33975 11.4314ZM11.1178 24.4497H7.55797V12.9969H11.1178V24.4497ZM26.2223 4.00015L5.77094 4.00166C4.81092 3.99081 4.0117 4.77146 4 5.7315V26.2681C4.01127 27.2287 4.81038 28.0102 5.77094 27.9999H26.2223C27.1852 28.012 27.9871 27.2306 28 26.2681V5.7301C27.9871 4.76803 27.1841 3.98748 26.2223 4.00015Z" fill="currentColor"></path>',
    "list-view": '<path fill-rule="evenodd" clip-rule="evenodd" d="M4 6C4 4.89543 4.89543 4 6 4H26C27.1046 4 28 4.89543 28 6V26C28 27.1046 27.1046 28 26 28H6C4.89543 28 4 27.1046 4 26V6ZM26 6L6 6V11H26V6ZM26 13H6V19H26V13ZM6 26V21H26V26H6Z" fill="currentColor"></path>',
    "location-filled": '<path fill-rule="evenodd" clip-rule="evenodd" d="M16 29C16 29 25 17.4183 25 12C25 7.03 20.97 3 16 3C11.03 3 7 7.03 7 12C7 17.4183 16 29 16 29ZM16 15C17.6569 15 19 13.6569 19 12C19 10.3431 17.6569 9 16 9C14.3431 9 13 10.3431 13 12C13 13.6569 14.3431 15 16 15Z" fill="currentColor"></path>',
    "location-hollow": '<path fill-rule="evenodd" clip-rule="evenodd" d="M9 12C9 8.13401 12.134 5 16 5C19.866 5 23 8.13401 23 12C23 12.8774 22.5814 14.2617 21.8345 15.9617C21.1056 17.6207 20.126 19.4467 19.135 21.1551C18.1459 22.8601 17.1554 24.431 16.4113 25.5767C16.2638 25.8039 16.126 26.0142 16 26.2054C15.874 26.0142 15.7362 25.8039 15.5887 25.5767C14.8446 24.431 13.8541 22.8601 12.865 21.1551C11.874 19.4467 10.8944 17.6207 10.1655 15.9617C9.41863 14.2617 9 12.8774 9 12ZM15.177 28.5681C15.1771 28.5682 15.1772 28.5683 16 28L15.1772 28.5683L16 29.7595L16.8228 28.5683L16 28C16.8228 28.5683 16.8229 28.5682 16.823 28.5681L16.8234 28.5675L16.8246 28.5657L16.8294 28.5588L16.8474 28.5326L16.916 28.4323C16.9757 28.3447 17.0629 28.2163 17.1736 28.0517C17.3949 27.7226 17.7104 27.2484 18.0887 26.666C18.8446 25.502 19.8541 23.9013 20.865 22.1586C21.874 20.4193 22.8944 18.5214 23.6655 16.7662C24.4186 15.052 25 13.3317 25 12C25 7.02944 20.9706 3 16 3C11.0294 3 7 7.02944 7 12C7 13.3317 7.58137 15.052 8.33446 16.7662C9.10559 18.5214 10.126 20.4193 11.135 22.1586C12.1459 23.9013 13.1554 25.502 13.9113 26.666C14.2896 27.2484 14.6051 27.7226 14.8264 28.0517C14.9371 28.2163 15.0243 28.3447 15.084 28.4323L15.1526 28.5326L15.1706 28.5588L15.1754 28.5657L15.1766 28.5675L15.177 28.5681ZM16 15C17.6569 15 19 13.6569 19 12C19 10.3431 17.6569 9 16 9C14.3431 9 13 10.3431 13 12C13 13.6569 14.3431 15 16 15Z" fill="currentColor"></path>',
    "lock-filled": '<path fill-rule="evenodd" clip-rule="evenodd" d="M11 7C11 4.79086 12.7909 3 15 3H17C19.2091 3 21 4.79086 21 7V9H25C25.5523 9 26 9.44772 26 10V28C26 28.5523 25.5523 29 25 29H7C6.44772 29 6 28.5523 6 28V10C6 9.44772 6.44772 9 7 9H11V7ZM19 7V9H13V7C13 5.89543 13.8954 5 15 5H17C18.1046 5 19 5.89543 19 7ZM19 17C19 18.4865 17.9189 19.7205 16.5 19.9585V24C16.5 24.2761 16.2761 24.5 16 24.5C15.7239 24.5 15.5 24.2761 15.5 24V19.9585C14.0811 19.7205 13 18.4865 13 17C13 15.3431 14.3431 14 16 14C17.6569 14 19 15.3431 19 17Z" fill="currentColor"></path>',
    "lock-hollow": '<path fill-rule="evenodd" clip-rule="evenodd" d="M15 3C12.7909 3 11 4.79086 11 7V9H7C6.44772 9 6 9.44772 6 10V28C6 28.5523 6.44772 29 7 29H25C25.5523 29 26 28.5523 26 28V10C26 9.44772 25.5523 9 25 9H21V7C21 4.79086 19.2091 3 17 3H15ZM19 9V7C19 5.89543 18.1046 5 17 5H15C13.8954 5 13 5.89543 13 7V9H19ZM11 11H8V27H24V11H21H20H12H11ZM16.5 19.9585C17.9189 19.7205 19 18.4865 19 17C19 15.3431 17.6569 14 16 14C14.3431 14 13 15.3431 13 17C13 18.4865 14.0811 19.7205 15.5 19.9585V24C15.5 24.2761 15.7239 24.5 16 24.5C16.2761 24.5 16.5 24.2761 16.5 24V19.9585Z" fill="currentColor"></path>',
    minus: '<path fill-rule="evenodd" clip-rule="evenodd" d="M7 15C6.44772 15 6 15.4477 6 16C6 16.5523 6.44772 17 7 17H25C25.5523 17 26 16.5523 26 16C26 15.4477 25.5523 15 25 15H7Z" fill="currentColor"></path>',
    "minus-circle-filled": '<path fill-rule="evenodd" clip-rule="evenodd" d="M16 29C23.1797 29 29 23.1797 29 16C29 8.8203 23.1797 3 16 3C8.8203 3 3 8.8203 3 16C3 23.1797 8.8203 29 16 29ZM10 15C9.44772 15 9 15.4477 9 16C9 16.5523 9.44772 17 10 17H22C22.5523 17 23 16.5523 23 16C23 15.4477 22.5523 15 22 15H10Z" fill="currentColor"></path>',
    "minus-circle-hollow": '<path fill-rule="evenodd" clip-rule="evenodd" d="M5 16C5 9.92487 9.92487 5 16 5C22.0751 5 27 9.92487 27 16C27 22.0751 22.0751 27 16 27C9.92487 27 5 22.0751 5 16ZM16 3C8.8203 3 3 8.8203 3 16C3 23.1797 8.8203 29 16 29C23.1797 29 29 23.1797 29 16C29 8.8203 23.1797 3 16 3ZM10.6667 15.0002C10.1144 15.0002 9.66669 15.4479 9.66669 16.0002C9.66669 16.5524 10.1144 17.0002 10.6667 17.0002H21.3334C21.8856 17.0002 22.3334 16.5524 22.3334 16.0002C22.3334 15.4479 21.8856 15.0002 21.3334 15.0002H10.6667Z" fill="currentColor"></path>',
    move: '<path fill-rule="evenodd" clip-rule="evenodd" d="M11 10C12.1046 10 13 9.10457 13 8C13 6.89543 12.1046 6 11 6C9.89543 6 9 6.89543 9 8C9 9.10457 9.89543 10 11 10ZM11 18C12.1046 18 13 17.1046 13 16C13 14.8954 12.1046 14 11 14C9.89543 14 9 14.8954 9 16C9 17.1046 9.89543 18 11 18ZM13 24C13 25.1046 12.1046 26 11 26C9.89543 26 9 25.1046 9 24C9 22.8954 9.89543 22 11 22C12.1046 22 13 22.8954 13 24ZM21 10C22.1046 10 23 9.10457 23 8C23 6.89543 22.1046 6 21 6C19.8954 6 19 6.89543 19 8C19 9.10457 19.8954 10 21 10ZM23 16C23 17.1046 22.1046 18 21 18C19.8954 18 19 17.1046 19 16C19 14.8954 19.8954 14 21 14C22.1046 14 23 14.8954 23 16ZM21 26C22.1046 26 23 25.1046 23 24C23 22.8954 22.1046 22 21 22C19.8954 22 19 22.8954 19 24C19 25.1046 19.8954 26 21 26Z" fill="currentColor"></path>',
    nested: '<path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 6V17C7.5 18.933 9.067 20.5 11 20.5H18V25L25 20L18 15V19.5H11C9.61929 19.5 8.5 18.3807 8.5 17V6H7.5Z" fill="currentColor"></path>',
    newsela: '<path fill-rule="evenodd" clip-rule="evenodd" d="M29 3H3V29H29V3ZM15 24H8V8H15V24ZM24 24H17V8H19.6859C22 8 24 9.7931 24 11.9911V24Z" fill="currentColor"></path>',
    "no-panels": '<path fill-rule="evenodd" clip-rule="evenodd" d="M6 4C4.89543 4 4 4.89543 4 6V10V26C4 27.1046 4.89543 28 6 28H26C27.1046 28 28 27.1046 28 26V10V6C28 4.89543 27.1046 4 26 4H6ZM26 10V6L6 6V10H26ZM6 12L6 26H26V12H6Z" fill="currentColor"></path>',
    "numbered-list": '<path fill-rule="evenodd" clip-rule="evenodd" d="M7.79863 6.98767V11H9V5L7.79863 4.97656C7.79803 4.98077 7.79742 4.98498 7.79681 4.98918C7.75205 5.29861 7.71101 5.58224 7.5 5.79507C7.29067 6.01079 6.82309 6.13405 6.5 6.14022V7L7.79863 6.98767ZM13 7C12.4477 7 12 7.44772 12 8C12 8.55228 12.4477 9 13 9H25C25.5523 9 26 8.55228 26 8C26 7.44772 25.5523 7 25 7H13ZM13 19C12.4477 19 12 19.4477 12 20C12 20.5523 12.4477 21 13 21H25C25.5523 21 26 20.5523 26 20C26 19.4477 25.5523 19 25 19H13ZM6.08333 19.3675C6.07222 19.3253 6.06111 19.2651 6.05 19.1867C6.04444 19.1084 6.04167 19.0331 6.04167 18.9608C6.04167 18.7018 6.08611 18.4548 6.175 18.2199C6.26389 17.9849 6.39167 17.7771 6.55833 17.5964C6.725 17.4157 6.93056 17.2711 7.175 17.1627C7.41944 17.0542 7.7 17 8.01667 17C8.31667 17 8.58611 17.0512 8.825 17.1536C9.06944 17.256 9.275 17.3946 9.44167 17.5693C9.61389 17.738 9.74444 17.9367 9.83333 18.1657C9.92222 18.3946 9.96667 18.6355 9.96667 18.8886C9.96667 19.2681 9.875 19.6114 9.69167 19.9187C9.50833 20.2199 9.25 20.4819 8.91667 20.7048L7.875 21.3916C7.76944 21.4639 7.675 21.5422 7.59167 21.6265C7.51389 21.7108 7.45278 21.8102 7.40833 21.9247H10V23H6C6 22.741 6.02222 22.497 6.06667 22.2681C6.11111 22.0331 6.18056 21.8102 6.275 21.5994C6.375 21.3886 6.50556 21.1928 6.66667 21.012C6.82778 20.8253 7.03056 20.6536 7.275 20.497L8.16667 19.9187C8.4 19.7681 8.56389 19.6145 8.65833 19.4578C8.75833 19.2952 8.80833 19.1114 8.80833 18.9066C8.80833 18.6958 8.73889 18.509 8.6 18.3464C8.46667 18.1837 8.26389 18.1024 7.99167 18.1024C7.70278 18.1024 7.48611 18.1958 7.34167 18.3825C7.20278 18.5693 7.13333 18.8012 7.13333 19.0783C7.13333 19.1867 7.14722 19.2952 7.175 19.4036L6.08333 19.3675Z" fill="currentColor"></path>',
    offline: '<path fill-rule="evenodd" clip-rule="evenodd" d="M9.83205 6.44541C9.5257 5.98588 8.90483 5.8617 8.4453 6.16806C7.98577 6.47441 7.8616 7.09528 8.16795 7.55481L10.5041 11.059C10.3758 11.0589 10.2443 11.0589 10.1095 11.0589H10.1074H10.1071C6.75998 11.0589 4 13.7067 4 17.0295C4 20.3169 6.70129 22.9434 10 22.9992V23.0001H10.0932L10.1071 23.0001H10.1085L10.3178 23.0001H11H18.4648L20.1679 25.5548C20.4743 26.0143 21.0952 26.1385 21.5547 25.8322C22.0142 25.5258 22.1384 24.9049 21.8321 24.4454L20.8685 23.0001H22H23H23.0675H23.0714C25.7676 23.0001 28 20.8659 28 18.1766C28 15.5103 25.8057 13.3897 23.1406 13.3535C22.4858 10.2798 19.6958 8.00011 16.3929 8.00011C14.6962 8.00011 13.1383 8.60003 11.9343 9.59871L9.83205 6.44541ZM11.8029 13.0072L11.7715 13.065L11.1719 13.0611C10.8477 13.0589 10.495 13.0589 10.1074 13.0589H10.1071C7.81311 13.0589 6 14.862 6 17.0295C6 19.1971 7.81311 21.0001 10.1071 21.0001C10.4255 21.0001 10.7201 21.0001 10.9951 20.9988L12 20.9938V21.0001H17.1315L11.8029 13.0072ZM19.5352 21.0001L13.0522 11.2757C13.9245 10.4863 15.0973 10.0001 16.3929 10.0001C19.0119 10.0001 21.1145 11.98 21.2757 14.4289L21.3389 15.3899L22.3017 15.3628C22.5372 15.3562 22.7931 15.353 23.0714 15.353C24.7145 15.353 26 16.6426 26 18.1766C26 19.7106 24.7145 21.0001 23.0714 21.0001C22.6758 21.0001 22.326 21.0001 22.0113 20.9965L21 20.9851V21.0001H19.5352Z" fill="currentColor"></path>',
    outdent: '<path fill-rule="evenodd" clip-rule="evenodd" d="M4.99992 9C4.99992 8.44772 5.44764 8 5.99992 8H25.9999C26.5522 8 26.9999 8.44772 26.9999 9C26.9999 9.55228 26.5522 10 25.9999 10H5.99992C5.44764 10 4.99992 9.55228 4.99992 9ZM10.5832 12.9563C11.2493 12.5401 12.1132 13.0189 12.1132 13.8043V20.1958C12.1132 20.9813 11.2493 21.4601 10.5832 21.0438L5.47 17.8481C4.84333 17.4564 4.84333 16.5438 5.47 16.1521L10.5832 12.9563ZM15.9999 16C15.4476 16 14.9999 16.4477 14.9999 17C14.9999 17.5523 15.4476 18 15.9999 18H25.9999C26.5522 18 26.9999 17.5523 26.9999 17C26.9999 16.4477 26.5522 16 25.9999 16H15.9999ZM5.99992 24C5.44764 24 4.99992 24.4477 4.99992 25C4.99992 25.5523 5.44764 26 5.99992 26H25.9999C26.5522 26 26.9999 25.5523 26.9999 25C26.9999 24.4477 26.5522 24 25.9999 24H5.99992Z" fill="currentColor"></path>',
    panels: '<path fill-rule="evenodd" clip-rule="evenodd" d="M6 4C4.89543 4 4 4.89543 4 6V10V12V26C4 27.1046 4.89543 28 6 28H10H22H26C27.1046 28 28 27.1046 28 26V12V10V6C28 4.89543 27.1046 4 26 4H6ZM26 12H22V26H26V12ZM22 10H26V6L6 6V10H10H22ZM12 12H20V26H12V12ZM10 12H6V26H10V12Z" fill="currentColor"></path>',
    "paper-filled": '<path fill-rule="evenodd" clip-rule="evenodd" d="M4 3C3.44772 3 3 3.44772 3 4V28C3 28.5523 3.44772 29 4 29H28C28.5523 29 29 28.5523 29 28V4C29 3.44772 28.5523 3 28 3H4ZM9 9C8.44772 9 8 9.44772 8 10C8 10.5523 8.44772 11 9 11H23C23.5523 11 24 10.5523 24 10C24 9.44772 23.5523 9 23 9H9ZM9 15C8.44772 15 8 15.4477 8 16C8 16.5523 8.44772 17 9 17H23C23.5523 17 24 16.5523 24 16C24 15.4477 23.5523 15 23 15H9ZM8 22C8 21.4477 8.44772 21 9 21H17C17.5523 21 18 21.4477 18 22C18 22.5523 17.5523 23 17 23H9C8.44772 23 8 22.5523 8 22Z" fill="currentColor"></path>',
    "paper-hollow": '<path fill-rule="evenodd" clip-rule="evenodd" d="M5 3C3.89543 3 3 3.89543 3 5V27C3 28.1046 3.89543 29 5 29H27C28.1046 29 29 28.1046 29 27V5C29 3.89543 28.1046 3 27 3H5ZM5 5L27 5V27H5V5ZM9 9C8.44772 9 8 9.44772 8 10C8 10.5523 8.44772 11 9 11H23C23.5523 11 24 10.5523 24 10C24 9.44772 23.5523 9 23 9H9ZM8 16C8 15.4477 8.44772 15 9 15H23C23.5523 15 24 15.4477 24 16C24 16.5523 23.5523 17 23 17H9C8.44772 17 8 16.5523 8 16ZM9 21C8.44772 21 8 21.4477 8 22C8 22.5523 8.44772 23 9 23H17C17.5523 23 18 22.5523 18 22C18 21.4477 17.5523 21 17 21H9Z" fill="currentColor"></path>',
    paragraph: '<path fill-rule="evenodd" clip-rule="evenodd" d="M12.4546 4L14.9979 4L15 4L15.0021 4L20.9982 4C20.9988 4 20.9994 4 21 4C21.0006 4 21.0012 4 21.0018 4L24 4C24.5523 4 25 4.44772 25 5C25 5.55229 24.5523 6 24 6L22 6V26L24 26C24.5523 26 25 26.4477 25 27C25 27.5523 24.5523 28 24 28H12C11.4477 28 11 27.5523 11 27C11 26.4477 11.4477 26 12 26L14 26V16H12.4546C10.1635 16 8.50964 15.2113 7.44122 13.9925C6.39613 12.8004 6 11.2985 6 10C6 8.70146 6.39613 7.19964 7.44122 6.00747C8.50964 4.78868 10.1635 4 12.4546 4ZM20 26V15.9975C19.9764 15.9992 19.9526 16 19.9286 16H16V26H20ZM20 14.0025V6L16 6V14H19.9286C19.9526 14 19.9764 14.0008 20 14.0025ZM14 6V14H12.4546C10.6547 14 9.58128 13.3998 8.94516 12.6741C8.2857 11.9219 8 10.9237 8 10C8 9.07632 8.2857 8.07814 8.94516 7.32586C9.58128 6.60022 10.6547 6 12.4546 6L14 6Z" fill="currentColor"></path>',
    pause: '<path fill-rule="evenodd" clip-rule="evenodd" d="M8 5C7.44772 5 7 5.44772 7 6V26C7 26.5523 7.44772 27 8 27H13C13.5523 27 14 26.5523 14 26V6C14 5.44772 13.5523 5 13 5H8ZM19 5C18.4477 5 18 5.44772 18 6V26C18 26.5523 18.4477 27 19 27H24C24.5523 27 25 26.5523 25 26V6C25 5.44772 24.5523 5 24 5H19Z" fill="currentColor"></path>',
    pencil: '<path fill-rule="evenodd" clip-rule="evenodd" d="M13.9999 5H13.3405L13.0808 5.60608L7.08079 19.6061L6.4834 21H7.99994H13.9999V26V28.7621L15.7682 26.6402L25.7682 14.6402L27.135 13H24.9999H18.618L21.8944 6.44721L22.618 5H20.9999H13.9999ZM9.51648 19L14.6593 7H19.3819L16.1055 13.5528L15.3819 15H16.9999H22.8649L15.9999 23.2379V20V19H14.9999H9.51648Z" fill="currentColor"></path>',
    "person-directory": '<path fill-rule="evenodd" clip-rule="evenodd" d="M3 4C3 2.89543 3.89543 2 5 2H27C28.1046 2 29 2.89543 29 4V28C29 29.1046 28.1046 30 27 30H5C3.89543 30 3 29.1046 3 28V24V22V17V15V10V8V4ZM5 24H10V22H5V17H10V15H5V10H10V8H5V4L27 4V28H5V24ZM19.3945 16.6569C20.3491 16.1548 21 15.1534 21 14C21 12.3431 19.6569 11 18 11C16.3431 11 15 12.3431 15 14C15 15.1534 15.6509 16.1548 16.6055 16.6569L14.2 17.7899C13.4889 18.0162 13 18.7273 13 19.5354V20C13 20.5523 13.4477 21 14 21H22C22.5523 21 23 20.5523 23 20V19.5354C23 18.7273 22.5111 18.0162 21.8 17.7899L19.3945 16.6569Z" fill="currentColor"></path>',
    phone: '<path fill-rule="evenodd" clip-rule="evenodd" d="M8 4C8 3.44772 8.44772 3 9 3H23C23.5523 3 24 3.44772 24 4V28C24 28.5523 23.5523 29 23 29H9C8.44772 29 8 28.5523 8 28V4ZM10 5V27H22V5H20V6C20 6.55228 19.5523 7 19 7H13C12.4477 7 12 6.55228 12 6V5H10ZM16 25C17.1046 25 18 24.1046 18 23C18 21.8954 17.1046 21 16 21C14.8954 21 14 21.8954 14 23C14 24.1046 14.8954 25 16 25Z" fill="currentColor"></path>',
    pinterest: '<path d="M15.9951 4C9.36076 4 4 9.37062 4 15.9951C4 21.0794 7.15919 25.4233 11.6216 27.1707C11.513 26.2229 11.4241 24.7618 11.661 23.7252C11.8782 22.7873 13.0629 17.7622 13.0629 17.7622C13.0629 17.7622 12.7075 17.0416 12.7075 15.9852C12.7075 14.3167 13.675 13.0728 14.8795 13.0728C15.9062 13.0728 16.3998 13.8429 16.3998 14.761C16.3998 15.7877 15.7482 17.3278 15.4027 18.7594C15.1164 19.9539 16.0049 20.9313 17.1798 20.9313C19.3122 20.9313 20.9511 18.6804 20.9511 15.4422C20.9511 12.5693 18.8877 10.5652 15.9358 10.5652C12.52 10.5652 10.5158 13.1222 10.5158 15.768C10.5158 16.7947 10.9107 17.9004 11.4044 18.5027C11.5031 18.6211 11.513 18.7297 11.4833 18.8482C11.3945 19.2234 11.1872 20.0428 11.1477 20.2106C11.0983 20.4278 10.97 20.4772 10.7429 20.3686C9.26202 19.6577 8.33402 17.4661 8.33402 15.7088C8.33402 11.9276 11.0786 8.45248 16.2616 8.45248C20.4179 8.45248 23.6561 11.4142 23.6561 15.383C23.6561 19.5195 21.0498 22.8466 17.4364 22.8466C16.2221 22.8466 15.0769 22.2147 14.6919 21.4644C14.6919 21.4644 14.0897 23.7548 13.9416 24.3176C13.675 25.3641 12.9445 26.6672 12.4508 27.4669C13.5763 27.8124 14.761 28 16.0049 28C22.6294 28 28 22.6294 28 16.0049C27.9901 9.37062 22.6195 4 15.9951 4Z" fill="currentColor"></path>',
    "play-alt-filled": '<path fill-rule="evenodd" clip-rule="evenodd" d="M8 6.73445C8 5.96412 8.83437 5.48306 9.50104 5.86902L25.5052 15.1346C26.1705 15.5197 26.1705 16.4803 25.5052 16.8654L9.50103 26.131C8.83437 26.5169 8 26.0359 8 25.2656L8 6.73445Z" fill="currentColor"></path>',
    "play-alt-hollow": '<path fill-rule="evenodd" clip-rule="evenodd" d="M8 7.74815C8 6.20132 9.68077 5.24001 11.014 6.02428L25.0417 14.2759C26.3563 15.0492 26.3563 16.9503 25.0417 17.7236L11.014 25.9752C9.68077 26.7595 8 25.7982 8 24.2513V7.74815ZM24.0277 15.9997L10 7.74815V24.2513L24.0277 15.9997Z" fill="currentColor"></path>',
    "play-filled": '<path fill-rule="evenodd" clip-rule="evenodd" d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28ZM13.5369 9.97801C12.8712 9.55437 12 10.0326 12 10.8217V21.1783C12 21.9674 12.8712 22.4456 13.5369 22.022L21.6742 16.8437C22.2917 16.4507 22.2917 15.5493 21.6742 15.1563L13.5369 9.97801Z" fill="currentColor"></path>',
    "play-hollow": '<path fill-rule="evenodd" clip-rule="evenodd" d="M5 16C5 9.92487 9.92487 5 16 5C22.0751 5 27 9.92487 27 16C27 22.0751 22.0751 27 16 27C9.92487 27 5 22.0751 5 16ZM16 3C8.8203 3 3 8.8203 3 16C3 23.1797 8.8203 29 16 29C23.1797 29 29 23.1797 29 16C29 8.8203 23.1797 3 16 3ZM13.5369 9.97801C12.8712 9.55437 12 10.0326 12 10.8217V21.1783C12 21.9674 12.8712 22.4456 13.5369 22.022L21.6742 16.8437C22.2917 16.4507 22.2917 15.5493 21.6742 15.1563L13.5369 9.97801Z" fill="currentColor"></path>',
    playlist: '<path fill-rule="evenodd" clip-rule="evenodd" d="M6.53 4.95624C5.86395 4.53996 5 5.01881 5 5.80424V12.1957C5 12.9812 5.86395 13.46 6.53 13.0437L11.6432 9.84799C12.2699 9.45633 12.2699 8.54366 11.6432 8.152L6.53 4.95624ZM6 16C5.44772 16 5 16.4477 5 17C5 17.5523 5.44772 18 6 18H26C26.5523 18 27 17.5523 27 17C27 16.4477 26.5523 16 26 16H6ZM15 9C15 8.44772 15.4477 8 16 8H26C26.5523 8 27 8.44772 27 9C27 9.55228 26.5523 10 26 10H16C15.4477 10 15 9.55228 15 9ZM6 24C5.44772 24 5 24.4477 5 25C5 25.5523 5.44772 26 6 26H26C26.5523 26 27 25.5523 27 25C27 24.4477 26.5523 24 26 24H6Z" fill="currentColor"></path>',
    plus: '<path fill-rule="evenodd" clip-rule="evenodd" d="M17 7C17 6.44772 16.5523 6 16 6C15.4477 6 15 6.44772 15 7V15H7C6.44772 15 6 15.4477 6 16C6 16.5523 6.44772 17 7 17H15V25C15 25.5523 15.4477 26 16 26C16.5523 26 17 25.5523 17 25V17H25C25.5523 17 26 16.5523 26 16C26 15.4477 25.5523 15 25 15H17V7Z" fill="currentColor"></path>',
    "plus-circle-filled": '<path fill-rule="evenodd" clip-rule="evenodd" d="M16 29C23.1797 29 29 23.1797 29 16C29 8.8203 23.1797 3 16 3C8.8203 3 3 8.8203 3 16C3 23.1797 8.8203 29 16 29ZM16 9C16.5523 9 17 9.44772 17 10V15H22C22.5523 15 23 15.4477 23 16C23 16.5523 22.5523 17 22 17H17V22C17 22.5523 16.5523 23 16 23C15.4477 23 15 22.5523 15 22V17H10C9.44772 17 9 16.5523 9 16C9 15.4477 9.44772 15 10 15H15V10C15 9.44772 15.4477 9 16 9Z" fill="currentColor"></path>',
    "plus-circle-hollow": '<path fill-rule="evenodd" clip-rule="evenodd" d="M16 29C23.1797 29 29 23.1797 29 16C29 8.8203 23.1797 3 16 3C8.8203 3 3 8.8203 3 16C3 23.1797 8.8203 29 16 29ZM20.8742 11.4856C21.1424 11.0029 20.9684 10.3941 20.4856 10.1258C20.0029 9.85763 19.3941 10.0316 19.1258 10.5144L14.8747 18.1663L12.8 15.4C12.4686 14.9582 11.8418 14.8686 11.4 15.2C10.9582 15.5314 10.8686 16.1582 11.2 16.6L14.2 20.6C14.4033 20.8711 14.7301 21.0208 15.0681 20.9977C15.4062 20.9746 15.7096 20.7819 15.8742 20.4856L20.8742 11.4856Z" fill="currentColor"></path>',
    "power-word-filled": '<path fill-rule="evenodd" clip-rule="evenodd" d="M13 5L6 21H14V29L27 13H19L23 5H13Z" fill="currentColor"></path>',
    "power-word-hollow": '<path fill-rule="evenodd" clip-rule="evenodd" d="M13.9999 5H13.3405L13.0808 5.60608L7.08079 19.6061L6.4834 21H7.99994H13.9999V26V28.7621L15.7682 26.6402L25.7682 14.6402L27.135 13H24.9999H18.618L21.8944 6.44721L22.618 5H20.9999H13.9999ZM9.51648 19L14.6593 7H19.3819L16.1055 13.5528L15.3819 15H16.9999H22.8649L15.9999 23.2379V20V19H14.9999H9.51648Z" fill="currentColor"></path>',
    "present-filled": '<path fill-rule="evenodd" clip-rule="evenodd" d="M16 3C16.5523 3 17 3.44772 17 4V6H28C28.5523 6 29 6.44772 29 7V23C29 23.5523 28.5523 24 28 24H17.4142L20.7071 27.2929C21.0976 27.6834 21.0976 28.3166 20.7071 28.7071C20.3166 29.0976 19.6834 29.0976 19.2929 28.7071L16 25.4142L12.7071 28.7071C12.3166 29.0976 11.6834 29.0976 11.2929 28.7071C10.9024 28.3166 10.9024 27.6834 11.2929 27.2929L14.5858 24H4C3.44772 24 3 23.5523 3 23V7C3 6.44772 3.44772 6 4 6H15V4C15 3.44772 15.4477 3 16 3ZM8 12C8 11.4477 8.44772 11 9 11H18C18.5523 11 19 11.4477 19 12C19 12.5523 18.5523 13 18 13H9C8.44772 13 8 12.5523 8 12ZM8 17C8 16.4477 8.44772 16 9 16H22C22.5523 16 23 16.4477 23 17C23 17.5523 22.5523 18 22 18H9C8.44772 18 8 17.5523 8 17Z" fill="currentColor"></path>',
    "present-hollow": '<path fill-rule="evenodd" clip-rule="evenodd" d="M17 4C17 3.44772 16.5523 3 16 3C15.4477 3 15 3.44772 15 4V6H5C3.89543 6 3 6.89543 3 8V22C3 23.1046 3.89543 24 5 24H14.5858L11.2929 27.2929C10.9024 27.6834 10.9024 28.3166 11.2929 28.7071C11.6834 29.0976 12.3166 29.0976 12.7071 28.7071L16 25.4142L19.2929 28.7071C19.6834 29.0976 20.3166 29.0976 20.7071 28.7071C21.0976 28.3166 21.0976 27.6834 20.7071 27.2929L17.4142 24H27C28.1046 24 29 23.1046 29 22V8C29 6.89543 28.1046 6 27 6H17V4ZM27 22V8H5V22H27ZM9 11C8.44772 11 8 11.4477 8 12C8 12.5523 8.44772 13 9 13H18C18.5523 13 19 12.5523 19 12C19 11.4477 18.5523 11 18 11H9ZM8 17C8 16.4477 8.44772 16 9 16H22C22.5523 16 23 16.4477 23 17C23 17.5523 22.5523 18 22 18H9C8.44772 18 8 17.5523 8 17Z" fill="currentColor"></path>',
    "preview-card": '<path fill-rule="evenodd" clip-rule="evenodd" d="M5 3C3.89543 3 3 3.89543 3 5V13V27C3 28.1046 3.89543 29 5 29H21C22.1046 29 23 28.1046 23 27V22.4142L27.2929 26.7071C27.6834 27.0976 28.3166 27.0976 28.7071 26.7071C29.0976 26.3166 29.0976 25.6834 28.7071 25.2929L24.4447 21.0305C25.4111 19.9654 26 18.5515 26 17C26 14.7792 24.7934 12.8401 23 11.8027V5C23 3.89543 22.1046 3 21 3H5ZM22.4196 20.1854C23.38 19.4548 24 18.2998 24 17C24 14.7909 22.2091 13 20 13C19.1072 13 18.2828 13.2925 17.6172 13.7869C17.6059 13.7958 17.5943 13.8044 17.5826 13.8129C16.6209 14.5434 16 15.6992 16 17C16 19.2091 17.7909 21 20 21C20.892 21 21.7159 20.708 22.3812 20.2143C22.3938 20.2044 22.4066 20.1947 22.4196 20.1854ZM20 23C20.3407 23 20.6748 22.9716 21 22.917V27H5V14H14.8027C14.2922 14.8825 14 15.9071 14 17H9C8.44772 17 8 17.4477 8 18C8 18.5523 8.44772 19 9 19H14.3414C15.1651 21.3304 17.3876 23 20 23ZM5 12H16.6822C17.6325 11.3682 18.7733 11 20 11C20.3407 11 20.6748 11.0284 21 11.083V5L5 5V12ZM9 22C8.44772 22 8 22.4477 8 23C8 23.5523 8.44772 24 9 24H13C13.5523 24 14 23.5523 14 23C14 22.4477 13.5523 22 13 22H9Z" fill="currentColor"></path>',
    print: '<path fill-rule="evenodd" clip-rule="evenodd" d="M6 5C6 3.89543 6.89543 3 8 3H20C20.2652 3 20.5196 3.10536 20.7071 3.29289L25.7071 8.29289C25.8946 8.48043 26 8.73478 26 9V13H27C28.1046 13 29 13.8954 29 15V22V23H28H26V26C26 27.1046 25.1046 28 24 28H8C6.89543 28 6 27.1046 6 26V23H4H3V22V15C3 13.8954 3.89543 13 5 13H6V5ZM8 23H24V26H8V23ZM27 21L25 21H7L5 21V15H7H25H27V21ZM8 13H24V10H19V5L8 5V13ZM24 19C24.5523 19 25 18.5523 25 18C25 17.4477 24.5523 17 24 17C23.4477 17 23 17.4477 23 18C23 18.5523 23.4477 19 24 19Z" fill="currentColor"></path>',
    progress: '<path fill-rule="evenodd" clip-rule="evenodd" d="M14.3033 3.10983C14.8591 3.03734 15.4254 3 16 3C23.1797 3 29 8.8203 29 16C29 23.1797 23.1797 29 16 29C15.4254 29 14.8591 28.9627 14.3033 28.8902L14.562 26.907C15.0322 26.9683 15.5122 27 16 27C22.0751 27 27 22.0751 27 16C27 9.92487 22.0751 5 16 5C15.5122 5 15.0322 5.0317 14.562 5.09303L14.3033 3.10983ZM8.08526 5.68629C8.9795 4.9991 9.96608 4.42533 11.0235 3.98684L11.7896 5.83429C10.8959 6.20491 10.0612 6.69021 9.30392 7.27213L8.08526 5.68629ZM3.98684 11.0235C4.42533 9.96608 4.9991 8.9795 5.68629 8.08526L7.27213 9.30392C6.69021 10.0612 6.20491 10.8959 5.83429 11.7896L3.98684 11.0235ZM3 16C3 15.4254 3.03734 14.8591 3.10983 14.3033L5.09303 14.562C5.0317 15.0322 5 15.5122 5 16C5 16.4878 5.0317 16.9678 5.09303 17.438L3.10983 17.6967C3.03734 17.1409 3 16.5746 3 16ZM5.68629 23.9147C4.9991 23.0205 4.42533 22.0339 3.98684 20.9765L5.83429 20.2104C6.20491 21.1041 6.69021 21.9388 7.27213 22.6961L5.68629 23.9147ZM11.0235 28.0132C9.96608 27.5747 8.9795 27.0009 8.08526 26.3137L9.30392 24.7279C10.0612 25.3098 10.8959 25.7951 11.7896 26.1657L11.0235 28.0132ZM20.8742 11.4856C21.1424 11.0029 20.9684 10.3941 20.4856 10.1258C20.0029 9.85763 19.3941 10.0316 19.1258 10.5144L14.8747 18.1663L12.8 15.4C12.4686 14.9582 11.8418 14.8687 11.4 15.2C10.9582 15.5314 10.8686 16.1582 11.2 16.6L14.2 20.6C14.4033 20.8711 14.7301 21.0208 15.0681 20.9977C15.4062 20.9746 15.7096 20.7819 15.8742 20.4856L20.8742 11.4856Z" fill="currentColor"></path>',
    question: '<path fill-rule="evenodd" clip-rule="evenodd" d="M16 3C11.5708 3 8 6.71105 8 11C8 11.5523 8.44772 12 9 12C9.55228 12 10 11.5523 10 11C10 7.79366 12.6972 5 16 5C19.3028 5 22 7.79366 22 11C22 14.2063 19.3028 17 16 17C15.4477 17 15 17.4477 15 18L15 22C15 22.5523 15.4477 23 16 23C16.5523 23 17 22.5523 17 22V18.9363C20.9545 18.429 24 14.9609 24 11C24 6.71105 20.4292 3 16 3ZM17 27C17 26.4477 16.5523 26 16 26C15.4477 26 15 26.4477 15 27V28C15 28.5523 15.4477 29 16 29C16.5523 29 17 28.5523 17 28V27Z" fill="currentColor"></path>',
    "question-filled": '<path fill-rule="evenodd" clip-rule="evenodd" d="M16 30C23.732 30 30 23.732 30 16C30 8.26801 23.732 2 16 2C8.26801 2 2 8.26801 2 16C2 23.732 8.26801 30 16 30ZM11 12C11 9.36082 13.2217 7 16 7C18.7783 7 21 9.36082 21 12C21 14.3135 19.2928 16.4131 17 16.8961V19C17 19.5523 16.5523 20 16 20C15.4477 20 15 19.5523 15 19V16C15 15.4477 15.4477 15 16 15C17.64 15 19 13.5687 19 12C19 10.4313 17.64 9 16 9C14.36 9 13 10.4313 13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12ZM16 22C16.5523 22 17 22.4477 17 23V24C17 24.5523 16.5523 25 16 25C15.4477 25 15 24.5523 15 24V23C15 22.4477 15.4477 22 16 22Z" fill="currentColor"></path>',
    "question-hollow": '<path fill-rule="evenodd" clip-rule="evenodd" d="M16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4ZM2 16C2 8.26801 8.26801 2 16 2C23.732 2 30 8.26801 30 16C30 23.732 23.732 30 16 30C8.26801 30 2 23.732 2 16ZM11 12C11 9.36082 13.2217 7 16 7C18.7783 7 21 9.36082 21 12C21 14.3135 19.2928 16.4131 17 16.8961V19C17 19.5523 16.5523 20 16 20C15.4477 20 15 19.5523 15 19V16C15 15.4477 15.4477 15 16 15C17.64 15 19 13.5687 19 12C19 10.4313 17.64 9 16 9C14.36 9 13 10.4313 13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12ZM17 23C17 22.4477 16.5523 22 16 22C15.4477 22 15 22.4477 15 23V24C15 24.5523 15.4477 25 16 25C16.5523 25 17 24.5523 17 24V23Z" fill="currentColor"></path>',
    quiz: '<path fill-rule="evenodd" clip-rule="evenodd" d="M7 9C8.10457 9 9 8.10457 9 7C9 5.89543 8.10457 5 7 5C5.89543 5 5 5.89543 5 7C5 8.10457 5.89543 9 7 9ZM14 6C13.4477 6 13 6.44771 13 7C13 7.55228 13.4477 8 14 8H27C27.5523 8 28 7.55228 28 7C28 6.44771 27.5523 6 27 6H14ZM14 15C13.4477 15 13 15.4477 13 16C13 16.5523 13.4477 17 14 17H27C27.5523 17 28 16.5523 28 16C28 15.4477 27.5523 15 27 15H14ZM13 25C13 24.4477 13.4477 24 14 24H27C27.5523 24 28 24.4477 28 25C28 25.5523 27.5523 26 27 26H14C13.4477 26 13 25.5523 13 25ZM9 16C9 17.1046 8.10457 18 7 18C5.89543 18 5 17.1046 5 16C5 14.8954 5.89543 14 7 14C8.10457 14 9 14.8954 9 16ZM10.8 22.6C11.1314 22.1582 11.0418 21.5314 10.6 21.2C10.1582 20.8686 9.53137 20.9582 9.2 21.4L6.89181 24.4776L5.70711 23.2929C5.31658 22.9024 4.68342 22.9024 4.29289 23.2929C3.90237 23.6834 3.90237 24.3166 4.29289 24.7071L6.29289 26.7071C6.49788 26.9121 6.78173 27.018 7.07089 26.9975C7.36005 26.9769 7.62607 26.8319 7.8 26.6L10.8 22.6Z" fill="currentColor"></path>',
    "radio-filled": '<path fill-rule="evenodd" clip-rule="evenodd" d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28ZM16 20C18.2091 20 20 18.2091 20 16C20 13.7909 18.2091 12 16 12C13.7909 12 12 13.7909 12 16C12 18.2091 13.7909 20 16 20Z" fill="currentColor"></path>',
    "radio-hollow": '<path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 16C4.5 9.64873 9.64873 4.5 16 4.5C22.3513 4.5 27.5 9.64873 27.5 16C27.5 22.3513 22.3513 27.5 16 27.5C9.64873 27.5 4.5 22.3513 4.5 16ZM16 3.5C9.09644 3.5 3.5 9.09644 3.5 16C3.5 22.9036 9.09644 28.5 16 28.5C22.9036 28.5 28.5 22.9036 28.5 16C28.5 9.09644 22.9036 3.5 16 3.5Z" fill="currentColor"></path>',
    redo: '<path fill-rule="evenodd" clip-rule="evenodd" d="M20.0001 15L28.0001 9L20.0001 3V8.00656C19.7356 8.00602 19.4716 8.00547 19.2098 8.00492L19.2088 8.00491H19.2086C16.7805 7.99981 14.5506 7.99512 13.9726 8.01079C9.62245 8.12867 5.54723 11.0286 4.34915 15.4189C2.89024 20.765 6.12621 26.2361 11.5329 27.6586C16.9331 29.0793 22.5075 25.9374 23.9644 20.5985C24.1098 20.0657 23.7957 19.5159 23.2629 19.3705C22.7301 19.2251 22.1803 19.5392 22.0349 20.072C20.8746 24.3238 16.4092 26.8734 12.0418 25.7244C7.68084 24.577 5.12029 20.19 6.2786 15.9454C7.22705 12.4699 10.4897 10.1059 14.0267 10.0101C14.5756 9.99518 16.7308 9.99973 19.1203 10.0048C19.411 10.0054 19.7051 10.006 20.0001 10.0066V15Z" fill="currentColor"></path>',
    refresh: '<path fill-rule="evenodd" clip-rule="evenodd" d="M16 4.33325C10.3032 4.33325 5.5619 8.41545 4.53802 13.8139C4.43511 14.3565 4.79156 14.8798 5.33417 14.9827C5.87678 15.0856 6.40008 14.7292 6.50299 14.1866C7.35115 9.7146 11.2818 6.33325 16 6.33325C18.9231 6.33325 21.5438 7.6302 23.3174 9.68277L20 13.0001H28V5.00012L24.7345 8.26558C22.5981 5.85471 19.4771 4.33325 16 4.33325ZM4 19.0001V27.0001L7.26558 23.7345C9.40188 26.1451 12.5231 27.6667 16 27.6667C21.6967 27.6667 26.4379 23.5847 27.462 18.1864C27.5649 17.6438 27.2084 17.1205 26.6658 17.0176C26.1232 16.9146 25.5999 17.2711 25.497 17.8137C24.6487 22.2855 20.7181 25.6667 16 25.6667C13.0769 25.6667 10.4565 24.37 8.68282 22.3173L12 19.0001H4Z" fill="currentColor"></path>',
    reply: '<path fill-rule="evenodd" clip-rule="evenodd" d="M3 5C3 3.89543 3.89543 3 5 3H27C28.1046 3 29 3.89543 29 5V21C29 22.1046 28.1046 23 27 23H16.3699L9.65079 28.7593L8 30.1742V28V23H5C3.89543 23 3 22.1046 3 21V5ZM27 5L5 5V21H9H10V22V25.8258L15.3492 21.2407L15.6301 21H16H27V5ZM8 10C8 9.44772 8.44772 9 9 9H23C23.5523 9 24 9.44772 24 10C24 10.5523 23.5523 11 23 11H9C8.44772 11 8 10.5523 8 10ZM9 15C8.44772 15 8 15.4477 8 16C8 16.5523 8.44772 17 9 17H19C19.5523 17 20 16.5523 20 16C20 15.4477 19.5523 15 19 15H9Z" fill="currentColor"></path>',
    rewind: '<path fill-rule="evenodd" clip-rule="evenodd" d="M17 3.99998C17 3.4477 16.5523 2.99998 16 2.99998C15.4477 2.99998 15 3.4477 15 3.99998V20H9L16 29L23 20H17V3.99998Z" fill="currentColor"></path>',
    "rewind-15": '<path fill-rule="evenodd" clip-rule="evenodd" d="M3 6.00002L9 10V7.01107C9.90407 7.00973 10.8305 7.00778 11.7302 7.00588L11.7313 7.00587H11.7314C14.6564 6.9997 17.2988 6.99412 17.9729 7.01238C22.3863 7.13198 26.4643 10.0808 27.6512 14.4304C29.1003 19.7406 25.8957 25.223 20.4495 26.6558C14.9968 28.0904 9.41582 24.9084 7.96473 19.591C7.81933 19.0581 7.26954 18.7441 6.73674 18.8895C6.20393 19.0349 5.88988 19.5847 6.03528 20.1175C7.78301 26.522 14.473 30.2963 20.9584 28.59C27.4504 26.882 31.3304 20.3156 29.5807 13.9039C28.1441 8.63957 23.2536 5.15475 18.0271 5.01312C17.3238 4.99406 14.6066 4.99978 11.643 5.00601L11.6425 5.00601C10.768 5.00785 9.872 5.00973 9 5.01104V2.00002L3 6.00002ZM14.2441 14.792V20H15.8881V12.212H14.4601C14.3801 12.62 14.1521 12.964 13.7761 13.244C13.4081 13.524 12.9401 13.668 12.3721 13.676V14.792H14.2441ZM18.8794 17.984C18.8074 17.824 18.7674 17.652 18.7594 17.468L17.2114 17.816C17.2354 18.12 17.3234 18.416 17.4754 18.704C17.6274 18.992 17.8314 19.248 18.0874 19.472C18.3514 19.688 18.6594 19.864 19.0114 20C19.3634 20.128 19.7514 20.192 20.1754 20.192C20.6394 20.192 21.0554 20.12 21.4234 19.976C21.7994 19.824 22.1154 19.624 22.3714 19.376C22.6274 19.128 22.8234 18.84 22.9594 18.512C23.0954 18.184 23.1634 17.84 23.1634 17.48C23.1634 17.064 23.0954 16.696 22.9594 16.376C22.8314 16.048 22.6474 15.776 22.4074 15.56C22.1754 15.336 21.8954 15.168 21.5674 15.056C21.2474 14.936 20.8914 14.876 20.4994 14.876C20.2434 14.876 19.9874 14.916 19.7314 14.996C19.4754 15.076 19.2634 15.196 19.0954 15.356L19.4794 13.64H22.7434V12.212H18.3514L17.4274 16.208C17.4674 16.224 17.5594 16.256 17.7034 16.304C17.8554 16.352 18.0154 16.404 18.1834 16.46C18.3514 16.516 18.5074 16.572 18.6514 16.628C18.8034 16.676 18.8994 16.708 18.9394 16.724C19.0674 16.58 19.2314 16.456 19.4314 16.352C19.6394 16.248 19.8754 16.196 20.1394 16.196C20.3154 16.196 20.4874 16.224 20.6554 16.28C20.8234 16.328 20.9714 16.408 21.0994 16.52C21.2274 16.624 21.3274 16.76 21.3994 16.928C21.4794 17.088 21.5194 17.28 21.5194 17.504C21.5194 17.896 21.3874 18.208 21.1234 18.44C20.8674 18.664 20.5514 18.776 20.1754 18.776C19.9674 18.776 19.7794 18.744 19.6114 18.68C19.4434 18.608 19.2954 18.512 19.1674 18.392C19.0474 18.272 18.9514 18.136 18.8794 17.984Z" fill="currentColor"></path>',
    "rewind-30": '<path fill-rule="evenodd" clip-rule="evenodd" d="M7.70711 4.29289C7.31658 3.90237 6.68342 3.90237 6.29289 4.29289C5.90237 4.68342 5.90237 5.31658 6.29289 5.70711L16.5858 16L6.29289 26.2929C5.90237 26.6834 5.90237 27.3166 6.29289 27.7071C6.68342 28.0976 7.31658 28.0976 7.70711 27.7071L18.7071 16.7071L19.4142 16L18.7071 15.2929L7.70711 4.29289ZM24 5C24 4.44772 23.5523 4 23 4C22.4477 4 22 4.44772 22 5V27C22 27.5523 22.4477 28 23 28C23.5523 28 24 27.5523 24 27V5Z" fill="currentColor"></path>',
    "rich-text": '<path fill-rule="evenodd" clip-rule="evenodd" d="M5 2.99976H6H10H14H15V3.99976V6C15 6.55228 14.5523 7 14 7C13.4477 7 13 6.55228 13 6V4.99976H11V10.9998C11.5523 10.9998 12 11.4475 12 11.9998C12 12.552 11.5523 12.9998 11 12.9998H10H9C8.44772 12.9998 8 12.552 8 11.9998C8 11.4475 8.44772 10.9998 9 10.9998V4.99976H7V6C7 6.55228 6.55228 7 6 7C5.44772 7 5 6.55228 5 6V3.99976V2.99976ZM6 15.9999C5.44772 15.9999 5 16.4476 5 16.9999C5 17.5522 5.44772 17.9999 6 17.9999H26C26.5523 17.9999 27 17.5522 27 16.9999C27 16.4476 26.5523 15.9999 26 15.9999H6ZM17 8.99976C17 8.44747 17.4477 7.99976 18 7.99976H26C26.5523 7.99976 27 8.44747 27 8.99976C27 9.55204 26.5523 9.99976 26 9.99976H18C17.4477 9.99976 17 9.55204 17 8.99976ZM6 23.9999C5.44772 23.9999 5 24.4476 5 24.9999C5 25.5522 5.44772 25.9999 6 25.9999H26C26.5523 25.9999 27 25.5522 27 24.9999C27 24.4476 26.5523 23.9999 26 23.9999H6Z" fill="currentColor"></path>',
    "school-hollow": '<path fill-rule="evenodd" clip-rule="evenodd" d="M16.3162 3.05132C16.0113 2.94967 15.6761 3.00081 15.4153 3.18877C15.1545 3.37672 15 3.67856 15 4.00001V10.5L3.40024 19.2C3.14844 19.3889 3.00024 19.6853 3.00024 20V28C3.00024 28.5523 3.44796 29 4.00024 29H13C13.5523 29 14 28.5523 14 28V23C14 22.4477 14.4477 22 15 22H17C17.5523 22 18 22.4477 18 23V28C18 28.5523 18.4477 29 19 29H28C28.5523 29 29 28.5523 29 28V20C29 19.6852 28.8518 19.3889 28.6 19.2L17 10.5V8.72077L22.3162 6.94869C22.7246 6.81258 23 6.43044 23 6.00001C23 5.56958 22.7246 5.18744 22.3162 5.05132L16.3162 3.05132ZM5.00024 20.5L16 12.25L27 20.5V27H20V23C20 21.3432 18.6569 20 17 20H15C13.3431 20 12 21.3432 12 23V27H5.00024V20.5ZM18.8377 6.00001L17 6.61258V5.38743L18.8377 6.00001Z" fill="currentColor"></path>',
    "scroll-old": '<path fill-rule="evenodd" clip-rule="evenodd" d="M2 7C2 4.79086 3.79086 3 6 3H14.5H25C26.1046 3 27 3.89543 27 5V19H28C29.1046 19 30 19.8954 30 21V25C30 27.2091 28.2091 29 26 29H19H12H11.5V28.9691C9.52684 28.723 8 27.0398 8 25V13H4C2.89543 13 2 12.1046 2 11V7ZM15.4649 27H19H26C27.1046 27 28 26.1046 28 25V21H25H16V25C16 25.7286 15.8052 26.4117 15.4649 27ZM25 19V5H14.5H9.46487C9.80521 5.58835 10 6.27143 10 7V11V25C10 26.1046 10.8954 27 12 27C13.1046 27 14 26.1046 14 25V21C14 19.8954 14.8954 19 16 19H25ZM4 7C4 5.89543 4.89543 5 6 5C7.10457 5 8 5.89543 8 7V11H4V7Z" fill="currentColor"></path>',
    search: '<path fill-rule="evenodd" clip-rule="evenodd" d="M5 13C5 8.58172 8.58172 5 13 5C17.4183 5 21 8.58172 21 13C21 17.4183 17.4183 21 13 21C8.58172 21 5 17.4183 5 13ZM13 3C7.47715 3 3 7.47715 3 13C3 18.5228 7.47715 23 13 23C15.4013 23 17.6049 22.1536 19.3287 20.7429L26.2929 27.7071C26.6834 28.0976 27.3166 28.0976 27.7071 27.7071C28.0976 27.3166 28.0976 26.6834 27.7071 26.2929L20.7429 19.3287C22.1536 17.6049 23 15.4013 23 13C23 7.47715 18.5228 3 13 3Z" fill="currentColor"></path>',
    section: '<path fill-rule="evenodd" clip-rule="evenodd" d="M7 3C5.89543 3 5 3.89543 5 5V27C5 28.1046 5.89543 29 7 29H25C26.1046 29 27 28.1046 27 27V5C27 3.89543 26.1046 3 25 3H7ZM7 5L25 5V27H7V5ZM23 10H9V16H23V10Z" fill="currentColor"></path>',
    select: '<path fill-rule="evenodd" clip-rule="evenodd" d="M5 5C3.89543 5 3 5.89543 3 7V20V25C3 26.1046 3.89543 27 5 27H21C22.1046 27 23 26.1046 23 25V20V12H27C28.1046 12 29 11.1046 29 10V7C29 5.89543 28.1046 5 27 5H22H5ZM21 19V16H5V19H21ZM5 21H21V25H5V21ZM23 7V10H27V7H23ZM21 7L5 7V10H21V7Z" fill="currentColor"></path>',
    "shapes-filled": '<path fill-rule="evenodd" clip-rule="evenodd" d="M17.3609 4.45709C16.9739 3.80206 16.0261 3.80206 15.6391 4.45709L10.8915 12.4914C10.4976 13.158 10.9781 14.0001 11.7524 14.0001H21.2476C22.0219 14.0001 22.5024 13.158 22.1085 12.4914L17.3609 4.45709ZM18 28.0001C18 28.5524 18.4477 29.0001 19 29.0001H28C28.5523 29.0001 29 28.5524 29 28.0001V19.8335V19.0001C29 18.4478 28.5523 18.0001 28 18.0001H19C18.4477 18.0001 18 18.4478 18 19.0001V28.0001ZM14 23.5001C14 26.5377 11.5376 29.0001 8.5 29.0001C5.46243 29.0001 3 26.5377 3 23.5001C3 20.4626 5.46243 18.0001 8.5 18.0001C11.5376 18.0001 14 20.4626 14 23.5001Z" fill="currentColor"></path>',
    "shapes-hollow": '<path fill-rule="evenodd" clip-rule="evenodd" d="M17.3533 3.47855C17.1716 3.1813 16.8484 3 16.5 3C16.1516 3 15.8284 3.1813 15.6467 3.47855L10.1467 12.4785C9.9581 12.7872 9.95086 13.1737 10.1278 13.4892C10.3047 13.8047 10.6383 14 11 14H22C22.3617 14 22.6953 13.8047 22.8722 13.4892C23.0491 13.1737 23.0419 12.7872 22.8533 12.4785L17.3533 3.47855ZM16.5 5.91773L20.2169 12H12.7831L16.5 5.91773ZM18.2929 28.7071C18.4804 28.8946 18.7348 29 19 29H28C28.2652 29 28.5196 28.8946 28.7071 28.7071C28.8946 28.5196 29 28.2652 29 28V20.5V19C29 18.4477 28.5523 18 28 18H19C18.4477 18 18 18.4477 18 19V28C18 28.2652 18.1054 28.5196 18.2929 28.7071ZM20 27V20H27V20.5V27H20ZM8.5 20C6.567 20 5 21.567 5 23.5C5 25.433 6.567 27 8.5 27C10.433 27 12 25.433 12 23.5C12 21.567 10.433 20 8.5 20ZM3 23.5C3 20.4624 5.46243 18 8.5 18C11.5376 18 14 20.4624 14 23.5C14 26.5376 11.5376 29 8.5 29C5.46243 29 3 26.5376 3 23.5Z" fill="currentColor"></path>',
    share: '<path fill-rule="evenodd" clip-rule="evenodd" d="M21 9L16 3L11 9H15V19V20H17V19V9H21ZM8 14L8.00933 14H12.0467V12H8.00933C7.55759 12 6.89824 12.0478 6.44035 12.5503C6.00528 13.0277 6 13.6635 6 14V27C6 27.3365 6.00529 27.9723 6.44038 28.4497C6.89828 28.9522 7.55762 29 8.00935 29H23.9346C24.397 29 25.0355 28.9473 25.4995 28.4833C25.9681 28.0147 26 27.384 26 27V14C26 13.6635 25.9947 13.0277 25.5596 12.5503C25.1017 12.0478 24.4424 12 23.9906 12H20.1215V14H23.9906H24V26.9993C23.9796 26.9997 23.9578 27 23.9346 27H8.00935L8 27V14Z" fill="currentColor"></path>',
    show: '<path fill-rule="evenodd" clip-rule="evenodd" d="M5.72021 16.6207C5.52903 16.3846 5.36628 16.1748 5.23424 16C5.36628 15.8252 5.52903 15.6154 5.72021 15.3793C6.30556 14.6563 7.1511 13.6944 8.19216 12.7356C10.31 10.7851 13.0715 9 16 9C18.9285 9 21.69 10.7851 23.8078 12.7356C24.8489 13.6944 25.6944 14.6563 26.2798 15.3793C26.4709 15.6154 26.6337 15.8252 26.7657 16C26.6337 16.1748 26.4709 16.3846 26.2798 16.6207C25.6944 17.3437 24.8489 18.3056 23.8078 19.2644C21.69 21.2149 18.9285 23 16 23C13.0715 23 10.31 21.2149 8.19216 19.2644C7.1511 18.3056 6.30556 17.3437 5.72021 16.6207ZM28.8298 15.4419C28.83 15.4422 28.8302 15.4425 28 16C28.8302 16.5575 28.83 16.5578 28.8298 16.5581L28.8293 16.5588L28.8279 16.5608L28.8237 16.5671L28.8094 16.588C28.7973 16.6058 28.78 16.6309 28.7576 16.6629C28.7128 16.7268 28.6478 16.8185 28.5636 16.9338C28.3952 17.1642 28.1493 17.49 27.8342 17.8793C27.2051 18.6563 26.2932 19.6944 25.1627 20.7356C22.9374 22.7851 19.6989 25 16 25C12.3011 25 9.06256 22.7851 6.83726 20.7356C5.70674 19.6944 4.79492 18.6563 4.16581 17.8793C3.85063 17.49 3.60482 17.1642 3.43639 16.9338C3.35213 16.8185 3.28714 16.7268 3.2424 16.6629C3.22003 16.6309 3.20271 16.6058 3.19057 16.588L3.17627 16.5671L3.17206 16.5608L3.17069 16.5588L3.1702 16.5581C3.17 16.5578 3.16982 16.5575 3.99999 16C3.16982 15.4425 3.17 15.4422 3.1702 15.4419L3.17069 15.4412L3.17206 15.4392L3.17627 15.4329L3.19057 15.412C3.20271 15.3942 3.22003 15.3691 3.2424 15.3371C3.28714 15.2732 3.35213 15.1815 3.43639 15.0662C3.60482 14.8358 3.85063 14.51 4.16581 14.1207C4.79492 13.3437 5.70674 12.3056 6.83726 11.2644C9.06256 9.21494 12.3011 7 16 7C19.6989 7 22.9374 9.21494 25.1627 11.2644C26.2932 12.3056 27.2051 13.3437 27.8342 14.1207C28.1493 14.51 28.3952 14.8358 28.5636 15.0662C28.6478 15.1815 28.7128 15.2732 28.7576 15.3371C28.78 15.3691 28.7973 15.3942 28.8094 15.412L28.8237 15.4329L28.8279 15.4392L28.8293 15.4412L28.8298 15.4419ZM28 16L28.8302 15.4425L29.2046 16L28.8302 16.5575L28 16ZM3.16982 15.4425L3.99999 16L3.16982 16.5575L2.79541 16L3.16982 15.4425ZM16 20C18.2091 20 20 18.2091 20 16C20 13.7909 18.2091 12 16 12C13.7908 12 12 13.7909 12 16C12 18.2091 13.7908 20 16 20Z" fill="currentColor"></path>',
    "social-studies": '<path fill-rule="evenodd" clip-rule="evenodd" d="M23.0606 18.91C27.5823 14.3883 27.362 6.9479 22.7071 2.29297L21.2928 3.70718C25.2294 7.64379 25.3257 13.8164 21.6464 17.4958C17.9671 21.1751 11.7944 21.0788 7.85782 17.1422L6.4436 18.5564C8.5641 20.6769 11.2626 21.8772 14 22.1281V27.0006H8.99995C8.44767 27.0006 7.99995 27.4483 7.99995 28.0006C7.99995 28.5528 8.44767 29.0006 8.99995 29.0006H20C20.5522 29.0006 21 28.5528 21 28.0006C21 27.4483 20.5522 27.0006 20 27.0006H16V22.142C18.5922 21.939 21.1006 20.87 23.0606 18.91ZM8.99995 11.0001C8.99995 7.68637 11.6862 5.00008 15 5.00008C18.3137 5.00008 21 7.68637 21 11.0001C21 14.3138 18.3137 17.0001 15 17.0001C11.6862 17.0001 8.99995 14.3138 8.99995 11.0001ZM15 3.00008C10.5817 3.00008 6.99995 6.58179 6.99995 11.0001C6.99995 15.4183 10.5817 19.0001 15 19.0001C19.4182 19.0001 23 15.4183 23 11.0001C23 6.58179 19.4182 3.00008 15 3.00008Z" fill="currentColor"></path>',
    "social-studies-detail": '<path fill-rule="evenodd" clip-rule="evenodd" d="M23.7068 3.29289C23.3163 2.90237 22.6831 2.90237 22.2926 3.29289C21.9021 3.68342 21.9021 4.31658 22.2926 4.70711C26.5884 9.00287 26.5884 15.9677 22.2926 20.2635C17.9968 24.5592 11.032 24.5592 6.73624 20.2635C6.34571 19.8729 5.71255 19.8729 5.32202 20.2635C4.9315 20.654 4.9315 21.2871 5.32202 21.6777C7.72957 24.0852 10.8465 25.3511 14 25.4752V27.5H10.9999C10.4477 27.5 9.99994 27.9477 9.99994 28.5C9.99994 29.0523 10.4477 29.5 10.9999 29.5H18.9999C19.5522 29.5 19.9999 29.0523 19.9999 28.5C19.9999 27.9477 19.5522 27.5 18.9999 27.5H16V25.4006C18.816 25.0786 21.5469 23.8376 23.7068 21.6777C28.7836 16.6009 28.7836 8.36971 23.7068 3.29289ZM14.5 5C10.3579 5 7 8.35786 7 12.5C7 16.6421 10.3579 20 14.5 20C18.6421 20 22 16.6421 22 12.5C22 8.35786 18.6421 5 14.5 5ZM5 12.5C5 7.25329 9.25329 3 14.5 3C19.7467 3 24 7.25329 24 12.5C24 17.7467 19.7467 22 14.5 22C9.25329 22 5 17.7467 5 12.5ZM11.8542 11.8633C12.0749 12.0031 12.3665 12.0769 12.6516 12.149C12.8293 12.194 13.0046 12.2383 13.1586 12.2976C14.173 12.6902 14.4261 13.2452 14.2452 14.2202C14.1908 14.5129 14.0954 15.7922 15.3674 15.983C16.1086 16.0938 16.7271 15.674 17.4054 14.3952C17.7472 13.7503 18.2472 13.4759 18.7599 13.1947C19.0095 13.0577 19.2622 12.9191 19.501 12.7352C20.0425 12.3172 20.0855 11.6025 19.433 11.1249C19.0749 10.8624 18.9548 10.4053 19.5924 10.2569C20.1086 10.1368 20.022 9.58947 19.9309 9.37222C19.8918 9.27877 19.8493 9.18705 19.8065 9.09605C19.2864 7.99031 18.0443 6.95995 16.8857 6.44749C15.7271 5.93503 13.8411 5.72886 13.2359 6.56516C12.9811 6.91719 13.1674 7.40245 13.5449 7.70973C13.9865 8.06769 14.534 8.90894 13.0715 8.71043C11.4325 8.4872 10.0417 10.7155 11.8542 11.8633Z" fill="currentColor"></path>',
    sort: '<path fill-rule="evenodd" clip-rule="evenodd" d="M22 4C22 3.44772 21.5523 3 21 3C20.4477 3 20 3.44772 20 4V21H15L21 28L27 21H22V4ZM11 4L5 11H10V28C10 28.5523 10.4477 29 11 29C11.5523 29 12 28.5523 12 28V11H17L11 4Z" fill="currentColor"></path>',
    "spanish-filled": '<path fill-rule="evenodd" clip-rule="evenodd" d="M3 5C3 3.89543 3.89543 3 5 3H27C28.1046 3 29 3.89543 29 5V27C29 28.1046 28.1046 29 27 29H5C3.89543 29 3 28.1046 3 27V5ZM23.4494 13.6466C23.4187 13.4932 23.3624 13.3295 23.2806 13.1556C23.209 12.9714 23.0965 12.8026 22.943 12.6492C22.7896 12.4957 22.5901 12.3678 22.3446 12.2655C22.1093 12.1632 21.8177 12.1121 21.4699 12.1121C21.2141 12.1121 20.9788 12.153 20.764 12.2349C20.5594 12.3065 20.3804 12.4088 20.2269 12.5418C20.0837 12.6645 19.9712 12.8077 19.8894 12.9714C19.8075 13.1351 19.7666 13.309 19.7666 13.4932C19.7666 13.7898 19.8638 14.0507 20.0581 14.2758C20.2525 14.4906 20.5492 14.6389 20.9482 14.7208L22.4673 15.0123C22.9584 15.1044 23.3931 15.2527 23.7717 15.4573C24.1502 15.6619 24.4673 15.9074 24.723 16.1939C24.9788 16.4701 25.1732 16.7821 25.3062 17.1299C25.4391 17.4778 25.5056 17.8409 25.5056 18.2194C25.5056 18.6389 25.4187 19.0532 25.2448 19.4624C25.0709 19.8614 24.8151 20.2194 24.4775 20.5365C24.1502 20.8434 23.741 21.0941 23.2499 21.2884C22.7691 21.4828 22.2116 21.58 21.5773 21.58C20.851 21.58 20.2269 21.4777 19.7052 21.2731C19.1835 21.0583 18.7436 20.7872 18.3855 20.4598C18.0377 20.1324 17.7717 19.7693 17.5876 19.3703C17.4035 18.9611 17.2909 18.5621 17.25 18.1734L19.2142 17.6517C19.2346 17.9176 19.296 18.1734 19.3983 18.4189C19.5108 18.6644 19.6643 18.8844 19.8587 19.0788C20.053 19.2629 20.2934 19.4112 20.5799 19.5238C20.8663 19.6363 21.2039 19.6926 21.5927 19.6926C22.1655 19.6926 22.6003 19.5698 22.897 19.3243C23.2039 19.0685 23.3573 18.7463 23.3573 18.3575C23.3573 18.0404 23.2448 17.7693 23.0197 17.5442C22.7947 17.309 22.4673 17.1504 22.0377 17.0686L20.5185 16.7617C19.6489 16.5877 18.9533 16.2348 18.4316 15.7028C17.9201 15.1606 17.6643 14.4752 17.6643 13.6466C17.6643 13.1658 17.7615 12.7208 17.9559 12.3116C18.1605 11.8922 18.4367 11.529 18.7845 11.2221C19.1323 10.9152 19.5364 10.6748 19.9968 10.5009C20.4571 10.327 20.943 10.24 21.4545 10.24C22.1093 10.24 22.6668 10.3321 23.1272 10.5162C23.5977 10.6901 23.9865 10.9152 24.2934 11.1914C24.6003 11.4676 24.8356 11.7745 24.9993 12.1121C25.1732 12.4395 25.2908 12.7566 25.3522 13.0635L23.4494 13.6466ZM8 10.2402V21.5802H15.2164V19.501H10.2429V16.8779H14.745V14.9106H10.2429V12.3195H15.2164V10.2402H8Z" fill="currentColor"></path>',
    "spanish-hollow": '<path fill-rule="evenodd" clip-rule="evenodd" d="M3 5C3 3.89543 3.89543 3 5 3H27C28.1046 3 29 3.89543 29 5V27C29 28.1046 28.1046 29 27 29H5C3.89543 29 3 28.1046 3 27V5ZM27 5L5 5V27H27V5ZM22.4494 13.6468C22.4187 13.4934 22.3624 13.3297 22.2806 13.1558C22.209 12.9717 22.0965 12.8029 21.943 12.6494C21.7896 12.496 21.5901 12.3681 21.3446 12.2658C21.1093 12.1635 20.8177 12.1123 20.4699 12.1123C20.2141 12.1123 19.9788 12.1533 19.764 12.2351C19.5594 12.3067 19.3804 12.409 19.2269 12.542C19.0837 12.6648 18.9712 12.808 18.8894 12.9717C18.8075 13.1353 18.7666 13.3092 18.7666 13.4934C18.7666 13.7901 18.8638 14.0509 19.0581 14.276C19.2525 14.4908 19.5492 14.6392 19.9482 14.721L21.4673 15.0125C21.9584 15.1046 22.3931 15.253 22.7717 15.4576C23.1502 15.6622 23.4673 15.9077 23.723 16.1941C23.9788 16.4703 24.1732 16.7823 24.3062 17.1302C24.4391 17.478 24.5056 17.8412 24.5056 18.2197C24.5056 18.6391 24.4187 19.0534 24.2448 19.4626C24.0709 19.8616 23.8151 20.2196 23.4775 20.5368C23.1502 20.8437 22.741 21.0943 22.2499 21.2887C21.7691 21.483 21.2116 21.5802 20.5773 21.5802C19.851 21.5802 19.2269 21.4779 18.7052 21.2733C18.1835 21.0585 17.7436 20.7874 17.3855 20.46C17.0377 20.1327 16.7717 19.7695 16.5876 19.3705C16.4035 18.9613 16.2909 18.5624 16.25 18.1736L18.2142 17.6519C18.2346 17.9179 18.296 18.1736 18.3983 18.4192C18.5108 18.6647 18.6643 18.8846 18.8587 19.079C19.053 19.2631 19.2934 19.4115 19.5799 19.524C19.8663 19.6365 20.2039 19.6928 20.5927 19.6928C21.1655 19.6928 21.6003 19.57 21.897 19.3245C22.2039 19.0688 22.3573 18.7465 22.3573 18.3578C22.3573 18.0406 22.2448 17.7695 22.0197 17.5445C21.7947 17.3092 21.4673 17.1506 21.0377 17.0688L19.5185 16.7619C18.6489 16.588 17.9533 16.235 17.4316 15.7031C16.9201 15.1609 16.6643 14.4755 16.6643 13.6468C16.6643 13.166 16.7615 12.721 16.9559 12.3118C17.1605 11.8924 17.4367 11.5292 17.7845 11.2223C18.1323 10.9154 18.5364 10.675 18.9968 10.5011C19.4571 10.3272 19.943 10.2402 20.4545 10.2402C21.1093 10.2402 21.6668 10.3323 22.1272 10.5164C22.5977 10.6904 22.9865 10.9154 23.2934 11.1916C23.6003 11.4678 23.8356 11.7747 23.9993 12.1123C24.1732 12.4397 24.2908 12.7568 24.3522 13.0637L22.4494 13.6468ZM8 10.2402V21.5802H15.2164V19.501H10.2429V16.8779H14.745V14.9106H10.2429V12.3195H15.2164V10.2402H8Z" fill="currentColor"></path>',
    spinner: '<path fill-rule="evenodd" clip-rule="evenodd" d="M9.24974 10.0472C10.9003 8.17707 13.3121 7 16 7C20.9706 7 25 11.0294 25 16C25 20.9706 20.9706 25 16 25C11.0294 25 7 20.9706 7 16C7 15.4477 6.55228 15 6 15C5.44772 15 5 15.4477 5 16C5 22.0751 9.92487 27 16 27C22.0751 27 27 22.0751 27 16C27 9.92487 22.0751 5 16 5C12.7145 5 9.76439 6.44171 7.75026 8.72371C7.3848 9.13777 7.4242 9.76971 7.83827 10.1352C8.25234 10.5006 8.88427 10.4612 9.24974 10.0472Z" fill="currentColor"></path>',
    "star-filled": '<path fill-rule="evenodd" clip-rule="evenodd" d="M20.1908 10.2317L16 1.74023L11.8092 10.2317L2.43835 11.5933L9.21917 18.203L7.61844 27.536L16 23.1296L24.3815 27.536L22.7808 18.203L29.5616 11.5933L20.1908 10.2317Z" fill="currentColor"></path>',
    "star-hollow": '<path fill-rule="evenodd" clip-rule="evenodd" d="M16.1281 2L16.8967 3.55743L20.1908 10.2319L27.5565 11.3022L29.5616 11.5936L28.1107 13.0079L22.7808 18.2032L24.039 25.5392L24.3815 27.5362L22.5881 26.5933L16 23.1298L9.41191 26.5933L7.61844 27.5362L7.96096 25.5392L9.21917 18.2032L3.8893 13.0079L2.43835 11.5936L4.44352 11.3022L11.8092 10.2319L15.1033 3.55743L15.8719 2H16.1281ZM13.37 11.5885L16 6.25955L18.63 11.5885L18.8626 12.0599L19.3829 12.1355L25.2637 12.99L21.0083 17.138L20.6319 17.505L20.7207 18.0231L21.7253 23.8802L16.4653 21.1149L16 20.8702L15.5347 21.1149L10.2747 23.8802L11.2793 18.0231L11.3681 17.505L10.9917 17.138L6.73628 12.99L12.6171 12.1355L13.1373 12.0599L13.37 11.5885Z" fill="currentColor"></path>',
    "sticky-note": '<path fill-rule="evenodd" clip-rule="evenodd" d="M25 25H28C28.343 25 28.662 24.8242 28.8453 24.5343C29.0286 24.2444 29.0504 23.8808 28.9033 23.5709L27.0409 19.6502L25.9793 15.7899L25.2949 11.3897L24.9978 6.93348C24.9628 6.40818 24.5265 6 24 6H5C4.72323 6 4.45884 6.11471 4.26975 6.31682C4.18623 6.40609 4.1207 6.5089 4.07515 6.61966C3.90351 6.60641 3.72424 6.63788 3.55279 6.72361C3.214 6.893 3 7.23926 3 7.61803V27C3 27.5523 3.44772 28 4 28H24C24.5523 28 25 27.5523 25 27V25ZM8.04093 19.6502L9.63208 23H26.4179L25.1967 20.4291C25.1717 20.3763 25.1513 20.3215 25.1358 20.2652L24.0358 16.2652C24.0257 16.2285 24.0177 16.1913 24.0119 16.1537L23.3119 11.6537C23.3074 11.6248 23.3042 11.5957 23.3022 11.5665L23.0644 8H6.06889L6.29486 11.3897L6.97934 15.7899L8.04093 19.6502Z" fill="currentColor"></path>',
    stop: '<path fill-rule="evenodd" clip-rule="evenodd" d="M6 16C6 10.4772 10.4772 6 16 6C18.4017 6 20.6057 6.84669 22.3297 8.25786C22.3172 8.26917 22.3049 8.28084 22.2929 8.29289L8.29289 22.2929C8.28084 22.3049 8.26917 22.3172 8.25786 22.3297C6.84669 20.6057 6 18.4017 6 16ZM9.67028 23.7421C11.3943 25.1533 13.5983 26 16 26C21.5228 26 26 21.5228 26 16C26 13.5983 25.1533 11.3943 23.7421 9.67028C23.7308 9.68278 23.7192 9.69506 23.7071 9.70711L9.70711 23.7071C9.69506 23.7192 9.68278 23.7308 9.67028 23.7421ZM16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4Z" fill="currentColor"></path>',
    stream: '<path fill-rule="evenodd" clip-rule="evenodd" d="M7.66173 7.31277C8.0758 7.67824 8.1152 8.31018 7.74974 8.72425C6.03771 10.664 5 13.2096 5 16C5 18.7904 6.03771 21.336 7.74974 23.2757C8.1152 23.6898 8.0758 24.3217 7.66173 24.6872C7.24766 25.0527 6.61573 25.0133 6.25026 24.5992C4.22811 22.3081 3 19.2963 3 16C3 12.7037 4.22811 9.69186 6.25026 7.40078C6.61573 6.98671 7.24766 6.94731 7.66173 7.31277ZM24.3383 7.31277C24.7523 6.94731 25.3843 6.98671 25.7497 7.40078C27.7719 9.69186 29 12.7037 29 16C29 19.2963 27.7719 22.3081 25.7497 24.5992C25.3843 25.0133 24.7523 25.0527 24.3383 24.6872C23.9242 24.3217 23.8848 23.6898 24.2503 23.2757C25.9623 21.336 27 18.7904 27 16C27 13.2096 25.9623 10.664 24.2503 8.72425C23.8848 8.31018 23.9242 7.67824 24.3383 7.31277ZM12.1617 11.2815C12.5758 11.647 12.6152 12.2789 12.2497 12.693C11.4713 13.575 11 14.7313 11 16C11 17.2687 11.4713 18.425 12.2497 19.307C12.6152 19.7211 12.5758 20.353 12.1617 20.7185C11.7477 21.0839 11.1157 21.0445 10.7503 20.6305C9.66166 19.3971 9 17.7746 9 16C9 14.2254 9.66166 12.6029 10.7503 11.3695C11.1157 10.9555 11.7477 10.9161 12.1617 11.2815ZM19.8383 11.2815C20.2523 10.9161 20.8843 10.9555 21.2497 11.3695C22.3383 12.6029 23 14.2254 23 16C23 17.7746 22.3383 19.3971 21.2497 20.6305C20.8843 21.0445 20.2523 21.0839 19.8383 20.7185C19.4242 20.353 19.3848 19.7211 19.7503 19.307C20.5287 18.425 21 17.2687 21 16C21 14.7313 20.5287 13.575 19.7503 12.693C19.3848 12.2789 19.4242 11.647 19.8383 11.2815ZM16 18C17.1046 18 18 17.1046 18 16C18 14.8954 17.1046 14 16 14C14.8954 14 14 14.8954 14 16C14 17.1046 14.8954 18 16 18Z" fill="currentColor"></path>',
    strikethrough: '<path fill-rule="evenodd" clip-rule="evenodd" d="M11 5H10V6V8.66667C10 9.21895 10.4478 9.66667 11 9.66667C11.5523 9.66667 12 9.21895 12 8.66667V7H18.6356L16.0279 15.2577L5.6115 7.20872C5.17448 6.87102 4.54646 6.95154 4.20876 7.38855C3.87107 7.82557 3.95159 8.45359 4.3886 8.79129L15.3863 17.2895L13.2672 24H12C11.4478 24 11 24.4477 11 25C11 25.5523 11.4478 26 12 26H17C17.5523 26 18 25.5523 18 25C18 24.4477 17.5523 24 17 24H15.3645L17.0722 18.5923L26.3886 25.7913C26.8256 26.129 27.4536 26.0485 27.7913 25.6115C28.129 25.1744 28.0485 24.5464 27.6115 24.2087L17.7138 16.5605L20.7329 7H26V8.66667C26 9.21895 26.4478 9.66667 27 9.66667C27.5523 9.66667 28 9.21895 28 8.66667V6V5H27H11Z" fill="currentColor"></path>',
    "subject-ela-new": '<g clip-path="url(#clip0_15816_16103)"><path d="M29.677 6.19667C29.4755 6.0512 29.2158 6.0027 28.9716 6.06608L28.1422 6.28994V2.77962C28.1422 2.52223 28.0104 2.28348 27.7933 2.138C27.5724 1.99251 27.2934 1.95894 27.0453 2.0522C26.7197 2.17157 19.503 4.86119 16.0768 8.54682C12.6468 4.86119 5.43007 2.17157 5.1045 2.0522C4.85646 1.95894 4.5774 1.99251 4.35648 2.138C4.13556 2.28348 4.00766 2.52223 4.00766 2.77962V6.33467L3.02708 6.06982C2.78291 6.0027 2.52323 6.0512 2.32169 6.2004C2.12015 6.34587 2 6.57718 2 6.81966V26.1618C2 26.5124 2.2403 26.8183 2.58912 26.9116L13.856 29.9518C13.9297 29.9705 13.9994 29.9817 14.0731 29.9817C14.0886 29.9817 14.1002 29.9817 14.1118 29.9817H17.8752C17.8752 29.9817 17.9023 29.9817 17.914 29.9817C17.9876 29.9817 18.0613 29.9705 18.131 29.9518L29.3979 26.9116C29.7468 26.8183 29.9871 26.5124 29.9871 26.1618V6.81593C29.9871 6.57345 29.8669 6.34214 29.6654 6.19667H29.677ZM18.7279 10.4456L28.3786 7.84552V25.5723L18.7279 28.1762V10.4456ZM26.526 6.72638L17.8093 9.07654H17.7822C20.2898 6.71519 24.5299 4.77539 26.5221 3.94351V6.72638H26.526ZM5.62386 3.94351C7.61987 4.77539 11.86 6.71519 14.3638 9.07654H14.1855L5.62386 6.76743V3.94351ZM3.6162 7.84178L13.2669 10.4419V28.1724L3.6162 25.5686V7.84178ZM14.887 10.6321H17.1156V28.4186H14.887V10.6321Z" fill="currentColor"></path><path d="M26.964 14.7729L20.6194 16.4814C20.3829 16.5449 20.1504 16.3733 20.1504 16.1382V11.8446C20.1504 11.6842 20.2589 11.5461 20.4217 11.5013L26.7663 9.79284C27.0028 9.72941 27.2353 9.901 27.2353 10.136V14.4297C27.2353 14.5901 27.1268 14.7282 26.964 14.7729Z" fill="currentColor"></path></g><defs><clipPath id="clip0_15816_16103"><rect width="28" height="28" fill="white" transform="translate(2 2)"></rect></clipPath></defs>',
    "subject-essentials": '<path d="M23.6252 4L9.16675 4C7.78604 4 6.66675 5.11929 6.66675 6.5C6.66675 7.88071 7.78604 9 9.16675 9L9.33341 9" stroke="currentColor" stroke-width="2" stroke-linejoin="round"></path><path d="M6.66675 6.66667L6.66675 26C6.66675 27.1046 7.56218 28 8.66675 28L25.3334 28L25.3334 13.3333V9L20.0001 9" stroke="currentColor" stroke-width="2" stroke-linejoin="round"></path><path d="M12 16V8.5C12 8.22386 12.2239 8 12.5 8H16.8333C17.1095 8 17.3333 8.22386 17.3333 8.5V16L14.6667 14L12 16Z" stroke="currentColor" stroke-width="2"></path>',
    "subject-news": '<path fill-rule="evenodd" clip-rule="evenodd" d="M25 29H7C4.79086 29 3 27.2091 3 25V9C3 7.89543 3.89543 7 5 7H9V5C9 3.89543 9.89543 3 11 3H27C28.1046 3 29 3.89543 29 5V8V25C29 27.2091 27.2091 29 25 29ZM11 9V5H27V8V25C27 26.1046 26.1046 27 25 27H10.4649C10.8052 26.4117 11 25.7286 11 25V11.3333V9ZM9 9H5V25C5 26.1046 5.89543 27 7 27C8.10457 27 9 26.1046 9 25V11.3333V9ZM13 7.00001H25V11H13V7.00001ZM25 13H13V14H25V13ZM13 16H21V17H13V16ZM23 19H13V20H23V19Z" fill="currentColor"></path>',
    "subject-science": '<path fill-rule="evenodd" clip-rule="evenodd" d="M22 3H19.5H18.5H13.5H12.5H10C9.44772 3 9 3.44772 9 4C9 4.55228 9.44772 5 10 5H12.5V11.9554C12.5 12.2517 12.4707 12.5473 12.4126 12.8379L12.3013 13.3945C12.1501 14.1505 11.8071 14.8551 11.3053 15.4405L7.47089 19.914C6.52173 21.0214 6 22.4318 6 23.8902C6 27.2646 8.73544 30 12.1098 30H19.8902C23.2646 30 26 27.2646 26 23.8902C26 22.4318 25.4783 21.0214 24.5291 19.914L20.6947 15.4405C20.1929 14.8551 19.8499 14.1505 19.6987 13.3945L19.5874 12.8379L18.6068 13.034L19.5874 12.8379C19.5293 12.5473 19.5 12.2517 19.5 11.9554V5H22C22.5523 5 23 4.55228 23 4C23 3.44772 22.5523 3 22 3ZM14.5 11.9554V5H17.5V11.9554C17.5 12.3834 17.5423 12.8104 17.6262 13.2301L17.7375 13.7867L18.7181 13.5906L17.7375 13.7867C17.956 14.8788 18.4513 15.8965 19.1761 16.7421L23.0106 21.2156C23.6491 21.9605 24 22.9092 24 23.8902C24 26.16 22.16 28 19.8902 28H12.1098C9.84001 28 8 26.16 8 23.8902C8 22.9092 8.35094 21.9605 8.9894 21.2156L12.8239 16.7421C13.5487 15.8965 14.044 14.8788 14.2625 13.7867L14.3738 13.2301C14.4577 12.8104 14.5 12.3834 14.5 11.9554ZM12.0333 26.1009H20.0463C21.3038 26.1009 22.0796 25.226 22.0796 24.3337C22.0796 23.705 21.5793 22.8582 20.5948 22.7673C20.0178 22.7143 19.6373 22.8446 19.1398 23.0149C19.0468 23.0468 18.9496 23.08 18.8464 23.1137C18.7767 23.1363 18.708 23.1589 18.64 23.1814C18.0661 23.3707 17.5401 23.5442 16.9254 23.4963C16.1826 23.4398 15.4918 23.0973 14.8001 22.7543C14.1826 22.4482 13.5645 22.1417 12.9082 22.0382C12.7209 22.0088 12.543 21.9967 12.3758 22.0007C11.1986 22.0222 10 22.786 10 24.1023C10.0023 24.3671 10.0567 24.6288 10.1601 24.8725C10.2635 25.1162 10.4139 25.3371 10.6027 25.5227C10.7915 25.7083 11.0151 25.8549 11.2605 25.9541C11.506 26.0533 11.7686 26.1032 12.0333 26.1009Z" fill="currentColor"></path>',
    table: '<path fill-rule="evenodd" clip-rule="evenodd" d="M3 5C3 3.89543 3.89543 3 5 3H11H27C28.1046 3 29 3.89543 29 5V13V19V27C29 28.1046 28.1046 29 27 29H11H5C4.99569 29 4.99137 29 4.98707 29C3.88845 28.993 3 28.1003 3 27V19V13V5ZM13 27H27V21H13V27ZM13 19H27V13H13V19ZM11 13V19H5V13H11ZM13 11H27V5H13V11ZM11 5L5 5V11H11V5ZM5 27H11V21H5L5 27Z" fill="currentColor"></path>',
    tablet: '<path fill-rule="evenodd" clip-rule="evenodd" d="M7 3C6.44772 3 6 3.44772 6 4V28C6 28.5523 6.44772 29 7 29H25C25.5523 29 26 28.5523 26 28V4C26 3.44772 25.5523 3 25 3H7ZM8 27V5H24V27H8ZM16 25C17.1046 25 18 24.1046 18 23C18 21.8954 17.1046 21 16 21C14.8954 21 14 21.8954 14 23C14 24.1046 14.8954 25 16 25Z" fill="currentColor"></path>',
    "tag-filled": '<path fill-rule="evenodd" clip-rule="evenodd" d="M5 3C3.89543 3 3 3.89543 3 5V16.1716C3 16.702 3.21071 17.2107 3.58579 17.5858L14.5858 28.5858C15.3668 29.3668 16.6332 29.3668 17.4142 28.5858L28.5858 17.4142C29.3668 16.6332 29.3668 15.3668 28.5858 14.5858L17.5858 3.58579C17.2108 3.21071 16.7021 3 16.1716 3H5ZM10 12C11.1046 12 12 11.1046 12 10C12 8.89543 11.1046 8 10 8C8.89543 8 8 8.89543 8 10C8 11.1046 8.89543 12 10 12Z" fill="currentColor"></path>',
    "tag-hollow": '<path fill-rule="evenodd" clip-rule="evenodd" d="M5 3C3.89543 3 3 3.89543 3 5V15.5858C3 16.1162 3.21071 16.6249 3.58579 17L14.5858 28C15.3668 28.781 16.6332 28.781 17.4142 28L28 17.4142C28.781 16.6332 28.781 15.3668 28 14.5858L17.0001 3.58579C16.625 3.21071 16.1163 3 15.5858 3H5ZM5 5H15.5858L26.5858 16L16 26.5858L5 15.5858V5ZM10 12C11.1046 12 12 11.1046 12 10C12 8.89543 11.1046 8 10 8C8.89543 8 8 8.89543 8 10C8 11.1046 8.89543 12 10 12Z" fill="currentColor"></path>',
    "text-field": '<path fill-rule="evenodd" clip-rule="evenodd" d="M9 22V24H7C6.44772 24 6 24.4477 6 25C6 25.5523 6.44771 26 7 26H9H11L13 26C13.5523 26 14 25.5523 14 25C14 24.4477 13.5523 24 13 24H11V22H27C28.1046 22 29 21.1046 29 20V12C29 10.8954 28.1046 10 27 10H11V8H13C13.5523 8 14 7.55228 14 7C14 6.44772 13.5523 6 13 6H11H9H7C6.44772 6 6 6.44772 6 7C6 7.55228 6.44772 8 7 8H9V10H5C3.89543 10 3 10.8954 3 12V20C3 21.1046 3.89543 22 5 22H9ZM11 20H27V12H11L11 20ZM9 12V20H5V12H9Z" fill="currentColor"></path>',
    "text-height": '<path fill-rule="evenodd" clip-rule="evenodd" d="M4 5H3V6V9C3 9.55228 3.44772 10 4 10C4.55228 10 5 9.55228 5 9V7H10L10 24H8C7.44772 24 7 24.4477 7 25C7 25.5523 7.44772 26 8 26H14C14.5523 26 15 25.5523 15 25C15 24.4477 14.5523 24 14 24H12L12 7H17V9C17 9.55228 17.4477 10 18 10C18.5523 10 19 9.55228 19 9V6V5H18H4ZM20 24C19.4477 24 19 24.4477 19 25C19 25.5523 19.4477 26 20 26H26C26.5523 26 27 25.5523 27 25C27 24.4477 26.5523 24 26 24H24V15H27V17C27 17.5523 27.4477 18 28 18C28.5523 18 29 17.5523 29 17V14V13H28H18H17V14V17C17 17.5523 17.4477 18 18 18C18.5523 18 19 17.5523 19 17V15H22V24H20Z" fill="currentColor"></path>',
    "thumb-down": '<path fill-rule="evenodd" clip-rule="evenodd" d="M16.1729 28.9863C17.0689 29.0943 17.8099 28.5393 18.1189 27.8443L21.5909 20.0313H26.9409C27.4714 20.0313 27.9801 19.8205 28.3551 19.4455C28.7302 19.0704 28.9409 18.5617 28.9409 18.0313V5.03126C28.9409 3.94026 28.0679 3.03126 26.9509 3.03126H7.94092C6.71792 3.03126 5.71492 3.41626 4.99092 4.07126C4.31666 4.68475 3.89554 5.52771 3.80992 6.43526C3.72992 7.24926 3.92192 8.10126 4.41492 8.78426C4.28392 8.88026 4.15992 8.98626 4.04492 9.10026C3.36292 9.77026 3.04692 10.6463 3.00492 11.4813C2.96292 12.3093 3.18692 13.1623 3.66692 13.8333C3.71592 13.9013 3.76762 13.9674 3.82192 14.0313C3.76792 14.0963 3.71592 14.1623 3.66692 14.2303C3.18692 14.9003 2.96292 15.7543 3.00492 16.5813C3.04592 17.4173 3.36292 18.2923 4.04492 18.9633C4.73592 19.6443 5.72192 20.0313 6.94092 20.0313H12.7229V20.0323C12.7236 20.0332 12.7243 20.0342 12.7249 20.0353L12.7259 20.0363V20.0403C12.5769 20.8163 12.3839 21.8533 12.2269 22.7863C12.0779 23.6763 11.9409 24.5863 11.9409 25.0313C11.9409 26.4913 13.3679 28.6513 16.1729 28.9863ZM5.44692 10.5263C5.70692 10.2693 6.15892 10.0313 6.94092 10.0313H9.94092C10.2061 10.0313 10.4605 9.92591 10.648 9.73837C10.8356 9.55083 10.9409 9.29648 10.9409 9.03126C10.9409 8.76605 10.8356 8.51169 10.648 8.32416C10.4605 8.13662 10.2061 8.03126 9.94092 8.03126H6.90892C6.48392 8.02326 6.22192 7.85426 6.05692 7.63926C5.86892 7.39626 5.76092 7.03226 5.79992 6.62826C5.83769 6.21589 6.02814 5.8325 6.33392 5.55326C6.64392 5.27226 7.14992 5.03126 7.94092 5.03126H21.9409V18.0313H21.5909C21.204 18.0312 20.8253 18.1434 20.5008 18.3543C20.1764 18.5652 19.92 18.8656 19.7629 19.2193L16.3109 26.9873C14.5189 26.7273 13.9409 25.4023 13.9409 25.0313C13.9409 24.7913 14.0399 24.0723 14.1999 23.1173C14.3529 22.2073 14.5429 21.1863 14.6899 20.4173C14.7459 20.1272 14.7371 19.8284 14.6642 19.5421C14.5912 19.2558 14.456 18.9892 14.2681 18.7612C14.0802 18.5333 13.8442 18.3497 13.5771 18.2235C13.31 18.0973 13.0183 18.0317 12.7229 18.0313H6.94092C6.15892 18.0313 5.70692 17.7933 5.44692 17.5373C5.17592 17.2703 5.02292 16.8963 5.00192 16.4813C4.98192 16.0593 5.10192 15.6623 5.29192 15.3953C5.47192 15.1453 5.68792 15.0313 5.94092 15.0313H9.94092C10.2061 15.0313 10.4605 14.9259 10.648 14.7384C10.8356 14.5508 10.9409 14.2965 10.9409 14.0313C10.9409 13.766 10.8356 13.5117 10.648 13.3242C10.4605 13.1366 10.2061 13.0313 9.94092 13.0313H5.91792C5.67492 13.0243 5.46692 12.9103 5.29292 12.6683C5.10092 12.4003 4.98092 12.0043 5.00292 11.5813C5.02292 11.1673 5.17592 10.7923 5.44692 10.5253V10.5263ZM23.9409 18.0313H26.9409V5.03126H23.9409V18.0313Z" fill="currentColor"></path>',
    "thumb-tack-filled": '<path fill-rule="evenodd" clip-rule="evenodd" d="M8 4C8 3.44772 8.44772 3 9 3H23C23.5523 3 24 3.44772 24 4C24 4.55228 23.5523 5 23 5H21V12L23.4142 14.4142C23.7893 14.7893 24 15.298 24 15.8284V20H8V15.8284C8 15.298 8.21071 14.7893 8.58579 14.4142L11 12V5H9C8.44772 5 8 4.55228 8 4ZM13 22L16.0002 29.3333L19 22H13Z" fill="currentColor"></path>',
    "thumb-tack-hollow": '<path fill-rule="evenodd" clip-rule="evenodd" d="M8 4C8 3.44772 8.44772 3 9 3H11H12H20H21H23C23.5523 3 24 3.44772 24 4C24 4.55228 23.5523 5 23 5H21V11.5858L23.1213 13.7071C23.6839 14.2697 24 15.0328 24 15.8284V19V20H23H9H8V19V15.8284C8 15.0328 8.31607 14.2697 8.87868 13.7071L11 11.5858V5H9C8.44772 5 8 4.55228 8 4ZM13 5V12V12.4142L12.7071 12.7071L10.2929 15.1213C10.1054 15.3089 10 15.5632 10 15.8284V18H22V15.8284C22 15.5632 21.8946 15.3089 21.7071 15.1213L19.2929 12.7071L19 12.4142V12V5H13ZM13 22L16.0002 29.3333L19 22H13Z" fill="currentColor"></path>',
    "thumb-up": '<path fill-rule="evenodd" clip-rule="evenodd" d="M15.768 3.04474C14.872 2.93674 14.131 3.49174 13.822 4.18674L10.35 11.9997H5C4.46957 11.9997 3.96086 12.2105 3.58579 12.5855C3.21071 12.9606 3 13.4693 3 13.9997V26.9997C3 28.0907 3.873 28.9997 4.99 28.9997H24C25.223 28.9997 26.226 28.6147 26.95 27.9597C27.6243 27.3463 28.0454 26.5033 28.131 25.5957C28.211 24.7817 28.019 23.9297 27.526 23.2467C27.657 23.1507 27.781 23.0447 27.896 22.9307C28.578 22.2607 28.894 21.3847 28.936 20.5497C28.978 19.7217 28.754 18.8687 28.274 18.1977C28.225 18.1297 28.1733 18.0636 28.119 17.9997C28.173 17.9347 28.225 17.8687 28.274 17.8007C28.754 17.1307 28.978 16.2767 28.936 15.4497C28.895 14.6137 28.578 13.7387 27.896 13.0677C27.205 12.3867 26.219 11.9997 25 11.9997H19.218V11.9987C19.2173 11.9978 19.2166 11.9968 19.216 11.9957L19.215 11.9947V11.9907C19.364 11.2147 19.557 10.1777 19.714 9.24474C19.863 8.35474 20 7.44474 20 6.99974C20 5.53974 18.573 3.37974 15.768 3.04474ZM26.494 21.5047C26.234 21.7617 25.782 21.9997 25 21.9997H22C21.7348 21.9997 21.4804 22.1051 21.2929 22.2926C21.1054 22.4802 21 22.7345 21 22.9997C21 23.265 21.1054 23.5193 21.2929 23.7069C21.4804 23.8944 21.7348 23.9997 22 23.9997H25.032C25.457 24.0077 25.719 24.1767 25.884 24.3917C26.072 24.6347 26.18 24.9987 26.141 25.4027C26.1032 25.8151 25.9128 26.1985 25.607 26.4777C25.297 26.7587 24.791 26.9997 24 26.9997H10V13.9997H10.35C10.737 13.9998 11.1156 13.8876 11.4401 13.6767C11.7646 13.4658 12.0209 13.1654 12.178 12.8117L15.63 5.04374C17.422 5.30374 18 6.62874 18 6.99974C18 7.23974 17.901 7.95874 17.741 8.91374C17.588 9.82374 17.398 10.8447 17.251 11.6137C17.195 11.9038 17.2038 12.2027 17.2768 12.4889C17.3497 12.7752 17.4849 13.0418 17.6728 13.2698C17.8608 13.4977 18.0967 13.6813 18.3638 13.8075C18.6309 13.9337 18.9226 13.9993 19.218 13.9997H25C25.782 13.9997 26.234 14.2377 26.494 14.4937C26.765 14.7607 26.918 15.1347 26.939 15.5497C26.959 15.9717 26.839 16.3687 26.649 16.6357C26.469 16.8857 26.253 16.9997 26 16.9997H22C21.7348 16.9997 21.4804 17.1051 21.2929 17.2926C21.1054 17.4802 21 17.7345 21 17.9997C21 18.265 21.1054 18.5193 21.2929 18.7068C21.4804 18.8944 21.7348 18.9997 22 18.9997H26.023C26.266 19.0067 26.474 19.1207 26.648 19.3627C26.84 19.6307 26.96 20.0267 26.938 20.4497C26.918 20.8637 26.765 21.2387 26.494 21.5057V21.5047ZM8 13.9997H5V26.9997H8V13.9997Z" fill="currentColor"></path>',
    time: '<path fill-rule="evenodd" clip-rule="evenodd" d="M5 16C5 9.92487 9.92487 5 16 5C22.0751 5 27 9.92487 27 16C27 22.0751 22.0751 27 16 27C9.92487 27 5 22.0751 5 16ZM16 3C8.8203 3 3 8.8203 3 16C3 23.1797 8.8203 29 16 29C23.1797 29 29 23.1797 29 16C29 8.8203 23.1797 3 16 3ZM17 11.0001C17 10.4478 16.5523 10.0001 16 10.0001C15.4477 10.0001 15 10.4478 15 11.0001V16V16.4142L15.2929 16.7071L19.2929 20.7071C19.6834 21.0977 20.3166 21.0977 20.7071 20.7071C21.0976 20.3166 21.0976 19.6834 20.7071 19.2929L17 15.5858V11.0001Z" fill="currentColor"></path>',
    "trash-filled": '<path fill-rule="evenodd" clip-rule="evenodd" d="M10 3C8.89543 3 8 3.67157 8 4.5V6H4C3.44772 6 3 6.44772 3 7C3 7.55228 3.44772 8 4 8H6V25.3333C6 27.1667 7.66667 29 9.33333 29H22.6667C24.3333 29 26 27.1667 26 25.3333V8H28C28.5523 8 29 7.55228 29 7C29 6.44772 28.5523 6 28 6H24V4.5C24 3.67157 23.1046 3 22 3H10ZM12 23V12H14V23H12ZM18 23V12H20V23H18Z" fill="currentColor"></path>',
    "trash-hollow": '<path fill-rule="evenodd" clip-rule="evenodd" d="M9 4.5C9 3.67157 9.7835 3 10.75 3H21.25C22.2165 3 23 3.67157 23 4.5V6H25H26H28C28.5523 6 29 6.44772 29 7C29 7.55228 28.5523 8 28 8H26V24.5C26 25.6496 25.5145 26.7488 24.8218 27.557C24.1384 28.3543 23.1336 29 22 29H10C8.86637 29 7.8616 28.3543 7.17824 27.557C6.48548 26.7488 6 25.6496 6 24.5V8H4C3.44772 8 3 7.55228 3 7C3 6.44772 3.44772 6 4 6H6H7H9V4.5ZM8 8V24.5C8 25.1004 8.26452 25.7512 8.69676 26.2555C9.1384 26.7707 9.63363 27 10 27H22C22.3664 27 22.8616 26.7707 23.3032 26.2555C23.7355 25.7512 24 25.1004 24 24.5V8H8ZM12 23V12H14V23H12ZM18 12V23H20V12H18Z" fill="currentColor"></path>',
    trending: '<path fill-rule="evenodd" clip-rule="evenodd" d="M28 5L19 7L22.4515 10.0201L17.1238 18.0116L14.8944 13.5528C14.7364 13.2368 14.4233 13.0276 14.0709 13.0026C13.7184 12.9775 13.3789 13.1403 13.1778 13.4309L4.17778 26.4309C3.86341 26.8849 3.97667 27.5079 4.43076 27.8223C4.88484 28.1366 5.50779 28.0234 5.82216 27.5693L13.8608 15.9579L16.1055 20.4473C16.265 20.7661 16.582 20.976 16.9378 20.9981C17.2936 21.0203 17.6343 20.8514 17.832 20.5548L23.9696 11.3484L27 14L28 5Z" fill="currentColor"></path>',
    twitter: '<path d="M16 4C22.6274 4 28 9.37258 28 16C28 22.6274 22.6274 28 16 28C9.37258 28 4 22.6274 4 16C4 9.37258 9.37258 4 16 4ZM9.33301 9.33301L14.374 16.625L9.59668 22.666H11.6426L15.3301 18.0039L18.5518 22.666H22.666L17.4111 14.9805L21.8779 9.33301H19.833L16.4648 13.5938L13.5518 9.33301H9.33301ZM12.9355 10.6162L20.25 21.3125H19.1162L11.7207 10.6162H12.9355Z" fill="currentColor"></path>',
    "un-nested": '<path fill-rule="evenodd" clip-rule="evenodd" d="M7 14L12 7L17 14L12.5 14V20.9998C12.5 22.3805 13.6193 23.4998 15 23.4998H26V24.4998H15C13.067 24.4998 11.5 22.9328 11.5 20.9998V14L7 14Z" fill="currentColor"></path>',
    unarchive: '<path fill-rule="evenodd" clip-rule="evenodd" d="M10.908 2.58094C10.6765 2.07949 10.0824 1.8606 9.58094 2.09204C9.07949 2.32348 8.8606 2.9176 9.09204 3.41906L9.82171 5H7C5.89543 5 5 5.89543 5 7V12V13H6H13.514L15.3602 17H11V19H16.2832L19.0525 25H7V16H5V25C5 26.1046 5.89543 27 7 27H19.9756L21.092 29.4191C21.3235 29.9205 21.9176 30.1394 22.4191 29.908C22.9205 29.6765 23.1394 29.0824 22.908 28.5809L22.1783 27H25C26.1046 27 27 26.1046 27 25V16H25V25H21.2552L18.486 19H21V17H17.5629L15.7168 13H26H27V12V7C27 5.89543 26.1046 5 25 5H12.0244L10.908 2.58094ZM10.7448 7H7V11H12.5909L10.7448 7ZM14.7937 11L12.9475 7H25V11H14.7937Z" fill="currentColor"></path>',
    "uncheck-circle": '<path fill-rule="evenodd" clip-rule="evenodd" d="M6.73849 3.32574C6.3661 2.91788 5.73358 2.88913 5.32573 3.26152C4.91788 3.63391 4.88913 4.26642 5.26151 4.67428L7.01988 6.60011C4.54291 8.96714 3 12.3034 3 16C3 23.1797 8.8203 29 16 29C19.2719 29 22.2615 27.7913 24.5466 25.796L26.2615 27.6743C26.6339 28.0821 27.2664 28.1109 27.6743 27.7385C28.0821 27.3661 28.1109 26.7336 27.7385 26.3257L25.95 24.3669C27.8533 22.1058 29 19.1868 29 16C29 8.8203 23.1797 3.00001 16 3.00001C13.2372 3.00001 10.6757 3.86185 8.5697 5.33135L6.73849 3.32574ZM8.36884 8.07753C6.29201 10.0785 5 12.8883 5 16C5 22.0751 9.92487 27 16 27C18.7523 27 21.2685 25.9892 23.1976 24.3186L17.3675 17.9332L14.8192 21.5735C14.6497 21.8156 14.3817 21.9704 14.0872 21.9962C13.7927 22.022 13.5019 21.9161 13.2929 21.7071L9.29289 17.7071C8.90237 17.3166 8.90237 16.6834 9.29289 16.2929C9.68341 15.9024 10.3166 15.9024 10.7071 16.2929L13.8643 19.4501L15.9856 16.4197L8.36884 8.07753ZM17.1609 14.7407L9.93214 6.82354C11.6714 5.67115 13.7573 5.00001 16 5.00001C22.0751 5.00001 27 9.92487 27 16C27 18.6012 26.0971 20.9916 24.5876 22.8748L18.5427 16.2542L21.8192 11.5735C22.1359 11.121 22.0259 10.4975 21.5735 10.1808C21.121 9.86406 20.4975 9.97409 20.1808 10.4265L17.1609 14.7407Z" fill="currentColor"></path>',
    underline: '<path fill-rule="evenodd" clip-rule="evenodd" d="M12 5C12 4.44772 11.5523 4 11 4C10.4477 4 10 4.44772 10 5V13.4C10 15.7369 10.7824 17.4246 11.9977 18.5183C13.1894 19.5908 14.6947 20 16 20C17.3053 20 18.8106 19.5908 20.0023 18.5183C21.2176 17.4246 22 15.7369 22 13.4V5C22 4.44772 21.5523 4 21 4C20.4477 4 20 4.44772 20 5V13.4C20 15.2631 19.3935 16.3754 18.6644 17.0317C17.9116 17.7092 16.917 18 16 18C15.083 18 14.0884 17.7092 13.3356 17.0317C12.6065 16.3754 12 15.2631 12 13.4V5ZM10 25C9.44772 25 9 25.4477 9 26C9 26.5523 9.44772 27 10 27H22C22.5523 27 23 26.5523 23 26C23 25.4477 22.5523 25 22 25H10Z" fill="currentColor"></path>',
    undo: '<path fill-rule="evenodd" clip-rule="evenodd" d="M12 15L4 9L12 3V8.00656C12.2644 8.00602 12.5283 8.00547 12.7899 8.00492L12.7909 8.00491H12.7911C15.2192 7.99981 17.449 7.99512 18.0271 8.01079C22.3772 8.12867 26.4524 11.0286 27.6505 15.4189C29.1094 20.765 25.8734 26.2361 20.4668 27.6586C15.0666 29.0793 9.4922 25.9374 8.03528 20.5985C7.88988 20.0657 8.20393 19.5159 8.73674 19.3705C9.26954 19.2251 9.81933 19.5392 9.96472 20.072C11.125 24.3238 15.5905 26.8734 19.9579 25.7244C24.3188 24.577 26.8794 20.19 25.7211 15.9454C24.7726 12.4699 21.5099 10.1059 17.9729 10.0101C17.424 9.99518 15.2689 9.99973 12.8793 10.0048C12.5889 10.0054 12.2949 10.006 12 10.0066V15Z" fill="currentColor"></path>',
    unlink: '<path fill-rule="evenodd" clip-rule="evenodd" d="M19 5.33337V10.6667H21V5.33337H19ZM9.87863 14.1213C8.70706 12.9498 8.70706 11.0503 9.87863 9.8787C11.0502 8.70713 12.9497 8.70713 14.1213 9.8787L16.9497 12.7071L18.3639 11.2929L15.5355 8.46449C13.5829 6.51187 10.417 6.51187 8.46442 8.46449C6.5118 10.4171 6.5118 13.5829 8.46442 15.5356L11.2928 18.364L12.7071 16.9498L9.87863 14.1213ZM21.3333 11H26.6667L26.6667 13H21.3333V11ZM13 26.6667L13 21.3333H11L11 26.6667H13ZM10.6667 21H5.33337V19H10.6667V21ZM22.1212 22.1213C20.9496 23.2929 19.0501 23.2929 17.8785 22.1213L15.0501 19.2929L13.6359 20.7071L16.4643 23.5356C18.4169 25.4882 21.5827 25.4882 23.5354 23.5356C25.488 21.5829 25.488 18.4171 23.5354 16.4645L20.7069 13.6361L19.2927 15.0503L22.1212 17.8787C23.2927 19.0503 23.2927 20.9498 22.1212 22.1213Z" fill="currentColor"></path>',
    "unlock-filled": '<path fill-rule="evenodd" clip-rule="evenodd" d="M19 7C19 4.79086 20.7909 3 23 3H25C27.2091 3 29 4.79086 29 7H27C27 5.89543 26.1046 5 25 5H23C21.8954 5 21 5.89543 21 7V9H25C25.5523 9 26 9.44772 26 10V28C26 28.5523 25.5523 29 25 29H7C6.44772 29 6 28.5523 6 28V10C6 9.44772 6.44772 9 7 9H19V7ZM19 17C19 18.4865 17.9189 19.7205 16.5 19.9585V24C16.5 24.2761 16.2761 24.5 16 24.5C15.7239 24.5 15.5 24.2761 15.5 24V19.9585C14.0811 19.7205 13 18.4865 13 17C13 15.3431 14.3431 14 16 14C17.6569 14 19 15.3431 19 17Z" fill="currentColor"></path>',
    "unlock-hollow": '<path fill-rule="evenodd" clip-rule="evenodd" d="M23 3C20.7909 3 19 4.79086 19 7V9H7C6.44772 9 6 9.44772 6 10V28C6 28.5523 6.44772 29 7 29H25C25.5523 29 26 28.5523 26 28V10C26 9.44772 25.5523 9 25 9H21V7C21 5.89543 21.8954 5 23 5H25C26.1046 5 27 5.89543 27 7H29C29 4.79086 27.2091 3 25 3H23ZM8 27V11H24V27H8ZM16.5 19.9585C17.9189 19.7205 19 18.4865 19 17C19 15.3431 17.6569 14 16 14C14.3431 14 13 15.3431 13 17C13 18.4865 14.0811 19.7205 15.5 19.9585V24C15.5 24.2761 15.7239 24.5 16 24.5C16.2761 24.5 16.5 24.2761 16.5 24V19.9585Z" fill="currentColor"></path>',
    upload: '<path fill-rule="evenodd" clip-rule="evenodd" d="M16 4L10 12H15V21C15 21.5523 15.4477 22 16 22C16.5523 22 17 21.5523 17 21V12H22L16 4ZM7 19C7.55228 19 8 19.4477 8 20V26H24V20C24 19.4477 24.4477 19 25 19C25.5523 19 26 19.4477 26 20V27C26 27.5523 25.5523 28 25 28H7C6.44772 28 6 27.5523 6 27V20C6 19.4477 6.44772 19 7 19Z" fill="currentColor"></path>',
    "user-filled": '<path fill-rule="evenodd" clip-rule="evenodd" d="M16 15C19.3137 15 22 12.3137 22 9C22 5.68629 19.3137 3 16 3C12.6863 3 10 5.68629 10 9C10 12.3137 12.6863 15 16 15ZM4 27.0001C4 27.5524 4.44772 28.0001 5 28.0001H27C27.5523 28.0001 28 27.5524 28 27.0001V24.7779C28 23.0001 26.8267 21.4356 25.12 20.9379L16 17L6.88 20.9379C5.17333 21.4356 4 23.0001 4 24.7779V27.0001Z" fill="currentColor"></path>',
    "user-group": '<path fill-rule="evenodd" clip-rule="evenodd" d="M21 14C23.2091 14 25 12.2091 25 10C25 7.79086 23.2091 6 21 6C18.7909 6 17 7.79086 17 10C17 12.2091 18.7909 14 21 14ZM19.5333 18.5743L16.1277 17.1038L21 15L27.08 17.6252C28.2178 17.9571 29 19.0001 29 20.1852V21.3334C29 21.8857 28.5523 22.3334 28 22.3334H22.8993C22.5434 20.5869 21.2713 19.1338 19.5333 18.5743ZM4 25.7501C3.44772 25.7501 3 25.3023 3 24.7501V23.3334C3 22.0001 3.88 20.8267 5.16 20.4534L12 17.5L18.84 20.4534C20.12 20.8267 21 22.0001 21 23.3334V24.7501C21 25.3023 20.5523 25.7501 20 25.7501H4ZM12 16C14.4853 16 16.5 13.9853 16.5 11.5C16.5 9.01472 14.4853 7 12 7C9.51472 7 7.5 9.01472 7.5 11.5C7.5 13.9853 9.51472 16 12 16Z" fill="currentColor"></path>',
    "user-hollow": '<path fill-rule="evenodd" clip-rule="evenodd" d="M12 9C12 6.79086 13.7909 5 16 5C18.2091 5 20 6.79086 20 9C20 11.2091 18.2091 13 16 13C13.7909 13 12 11.2091 12 9ZM16 3C12.6863 3 10 5.68629 10 9C10 12.3137 12.6863 15 16 15C19.3137 15 22 12.3137 22 9C22 5.68629 19.3137 3 16 3ZM16.3403 17.0597C16.1204 16.9801 15.8797 16.9801 15.6598 17.0597L7.56793 19.9873C5.45198 20.6197 4 22.5668 4 24.7779V28.0001C4 28.5524 4.44772 29.0001 5 29.0001C5.55228 29.0001 6 28.5524 6 28.0001V24.7779C6 23.4445 6.88 22.2712 8.16 21.8979C8.18028 21.8919 8.20036 21.8854 8.22022 21.8782L16 19.0634L23.7798 21.8782C23.7996 21.8854 23.8197 21.8919 23.84 21.8979C25.12 22.2712 26 23.4445 26 24.7779V28.0001C26 28.5524 26.4477 29.0001 27 29.0001C27.5523 29.0001 28 28.5524 28 28.0001V24.7779C28 22.5668 26.548 20.6197 24.4321 19.9873L16.3403 17.0597Z" fill="currentColor"></path>',
    "vertical-dots": '<path fill-rule="evenodd" clip-rule="evenodd" d="M18 8C18 9.10457 17.1046 10 16 10C14.8954 10 14 9.10457 14 8C14 6.89543 14.8954 6 16 6C17.1046 6 18 6.89543 18 8ZM18 16C18 17.1046 17.1046 18 16 18C14.8954 18 14 17.1046 14 16C14 14.8954 14.8954 14 16 14C17.1046 14 18 14.8954 18 16ZM16 26C17.1046 26 18 25.1046 18 24C18 22.8954 17.1046 22 16 22C14.8954 22 14 22.8954 14 24C14 25.1046 14.8954 26 16 26Z" fill="currentColor"></path>',
    video: '<path fill-rule="evenodd" clip-rule="evenodd" d="M6 26C4.89543 26 4 25.1046 4 24V8C4 6.89543 4.89543 6 6 6H19C20.1046 6 21 6.89543 21 8V12.4835L26.6061 10.0809C26.915 9.94844 27.2699 9.98012 27.5505 10.1652C27.8311 10.3502 28 10.6639 28 11V21C28 21.3361 27.8311 21.6498 27.5505 21.8348C27.2699 22.0199 26.915 22.0516 26.6061 21.9191L21 19.5165V24C21 25.1046 20.1046 26 19 26H6ZM19 18.0014C19 18.0009 19 18.0005 19 18V14C19 13.9995 19 13.9991 19 13.9986V8H6V24H19V18.0014ZM21 17.3406L26 19.4835V12.5165L21 14.6594V17.3406Z" fill="currentColor"></path>',
    "video-controls": '<path fill-rule="evenodd" clip-rule="evenodd" d="M5 29C3.89543 29 3 28.1046 3 27V5C3 3.89543 3.89543 3 5 3H27C28.1046 3 29 3.89543 29 5V8V27C29 28.1046 28.1046 29 27 29H5ZM5 5V27H27V8V5H5ZM14.5056 9.14638C13.8502 8.74967 13 9.206 13 9.95451V16.0455C13 16.794 13.8502 17.2503 14.5056 16.8536L19.5375 13.8081C20.1542 13.4349 20.1542 12.5651 19.5375 12.1919L14.5056 9.14638ZM20 21H21H23C23.5523 21 24 21.4477 24 22C24 22.5523 23.5523 23 23 23H21H20V21ZM9 21C8.44772 21 8 21.4477 8 22C8 22.5523 8.44772 23 9 23H16H17V21H16H9Z" fill="currentColor"></path>',
    "video-speed-1x": '<path d="M9.88355 24V12.716H6V11.0123C7.12136 10.9794 8.04484 10.6914 8.77043 10.1481C9.49602 9.58848 9.94951 8.87243 10.1309 8H12.2582V24H9.88355Z" fill="currentColor"></path><path d="M18.7771 17.9506L14.4978 12.1235H17.3177L20.2365 16.2963L23.1059 12.1235H25.8516L21.6217 17.9506C21.7372 18.1152 21.9103 18.3539 22.1412 18.6667C22.3721 18.9794 22.6277 19.3333 22.908 19.7284C23.2048 20.1235 23.5017 20.5432 23.7985 20.9877C24.1118 21.4156 24.4087 21.8272 24.689 22.2222C24.9858 22.6173 25.2497 22.9712 25.4805 23.284C25.7114 23.5967 25.8846 23.8354 26 24H23.2048L20.1376 19.6296L17.1198 24H14.3494L18.7771 17.9506Z" fill="currentColor"></path>',
    "vocab-level": '<path fill-rule="evenodd" clip-rule="evenodd" d="M9.53877 8H11C11.5523 8 12 7.55228 12 7C12 6.44771 11.5523 6 11 6H8.02148C8.00682 5.99968 7.99214 5.99967 7.97743 6H5C4.44772 6 4 6.44771 4 7C4 7.55228 4.44772 8 5 8H7.35013L15.0862 25.4061C15.2467 25.7673 15.6048 26 16 26C16.3952 26 16.7533 25.7673 16.9138 25.4061L24.6499 8H27C27.5523 8 28 7.55228 28 7C28 6.44771 27.5523 6 27 6H24.0226C24.0079 5.99967 23.9932 5.99968 23.9785 6H21C20.4477 6 20 6.44771 20 7C20 7.55228 20.4477 8 21 8H22.4612L16 22.5378L9.53877 8Z" fill="currentColor"></path>',
    "voice-filled": '<path fill-rule="evenodd" clip-rule="evenodd" d="M16.0002 3C13.7911 3 12.0002 4.79086 12.0002 7V14C12.0002 16.2091 13.7911 18 16.0002 18C18.2094 18 20.0002 16.2091 20.0002 14V7C20.0002 4.79086 18.2094 3 16.0002 3ZM9 14C9 13.4477 8.55228 13 8 13C7.44772 13 7 13.4477 7 14C7 19.2119 10.88 22.4845 15 22.9441V27H10C9.44772 27 9 27.4477 9 28C9 28.5523 9.44772 29 10 29H22C22.5523 29 23 28.5523 23 28C23 27.4477 22.5523 27 22 27H17V22.9441C21.12 22.4845 25 19.2119 25 14C25 13.4477 24.5523 13 24 13C23.4477 13 23 13.4477 23 14C23 18.3676 19.5314 21 16 21C12.4686 21 9 18.3676 9 14Z" fill="currentColor"></path>',
    "voice-hollow": '<path fill-rule="evenodd" clip-rule="evenodd" d="M16.0002 3C13.7911 3 12.0002 4.79086 12.0002 7V14C12.0002 16.2091 13.7911 18 16.0002 18C18.2094 18 20.0002 16.2091 20.0002 14V7C20.0002 4.79086 18.2094 3 16.0002 3ZM14.0002 7C14.0002 5.89543 14.8957 5 16.0002 5C17.1048 5 18.0002 5.89543 18.0002 7V14C18.0002 15.1046 17.1048 16 16.0002 16C14.8957 16 14.0002 15.1046 14.0002 14V7ZM9 14C9 13.4477 8.55228 13 8 13C7.44772 13 7 13.4477 7 14C7 19.2119 10.88 22.4845 15 22.9441V27H10C9.44772 27 9 27.4477 9 28C9 28.5523 9.44772 29 10 29H22C22.5523 29 23 28.5523 23 28C23 27.4477 22.5523 27 22 27H17V22.9441C21.12 22.4845 25 19.2119 25 14C25 13.4477 24.5523 13 24 13C23.4477 13 23 13.4477 23 14C23 18.3676 19.5314 21 16 21C12.4686 21 9 18.3676 9 14Z" fill="currentColor"></path>',
    "volume-down": '<path fill-rule="evenodd" clip-rule="evenodd" d="M3 16C3 18.7614 5.23858 21 8 21H11L16 24V8L11 11H8C5.23858 11 3 13.2386 3 16ZM19 21C21.7614 21 24 18.7614 24 16C24 13.2386 21.7614 11 19 11L19 16L19 21Z" fill="currentColor"></path>',
    "volume-up": '<path fill-rule="evenodd" clip-rule="evenodd" d="M19 8C23.4183 8 27 11.5817 27 16C27 20.4183 23.4183 24 19 24V26C24.5228 26 29 21.5228 29 16C29 10.4772 24.5228 6 19 6V8ZM8 21C5.23858 21 3 18.7614 3 16C3 13.2386 5.23858 11 8 11H11L16 8V24L11 21H8ZM24 16C24 18.7614 21.7614 21 19 21L19 16L19 11C21.7614 11 24 13.2386 24 16Z" fill="currentColor"></path>',
    "warning-filled": '<path fill-rule="evenodd" clip-rule="evenodd" d="M15.0984 4.8783C15.4614 4.12194 16.5384 4.12195 16.9014 4.87831L27.3122 26.5674C27.6308 27.2313 27.147 28.0002 26.4107 28.0002H5.58912C4.85277 28.0002 4.36896 27.2313 4.6876 26.5674L15.0984 4.8783ZM16.9999 14.0001C16.9999 13.4478 16.5522 13.0001 15.9999 13.0001C15.4476 13.0001 14.9999 13.4478 14.9999 14.0001V18.0001C14.9999 18.5524 15.4476 19.0001 15.9999 19.0001C16.5522 19.0001 16.9999 18.5524 16.9999 18.0001V14.0001ZM16.9999 23.0001C16.9999 22.4478 16.5522 22.0001 15.9999 22.0001C15.4476 22.0001 14.9999 22.4478 14.9999 23.0001V23.0268C14.9999 23.5791 15.4476 24.0268 15.9999 24.0268C16.5522 24.0268 16.9999 23.5791 16.9999 23.0268V23.0001Z" fill="currentColor"></path>',
    "warning-hollow": '<path fill-rule="evenodd" clip-rule="evenodd" d="M14.1971 4.44557C14.9232 2.93285 17.0771 2.93286 17.8032 4.44557L28.214 26.1347C28.8512 27.4624 27.8836 29.0002 26.4109 29.0002H5.58938C4.11668 29.0002 3.14905 27.4624 3.78633 26.1347L14.1971 4.44557ZM16.0001 5.31103L5.58938 27.0002H26.4109L16.0001 5.31103ZM16.0001 22.0001C16.5524 22.0001 17.0001 22.4478 17.0001 23.0001V23.0268C17.0001 23.5791 16.5524 24.0268 16.0001 24.0268C15.4479 24.0268 15.0001 23.5791 15.0001 23.0268V23.0001C15.0001 22.4478 15.4479 22.0001 16.0001 22.0001ZM17.0001 14.0001C17.0001 13.4478 16.5524 13.0001 16.0001 13.0001C15.4479 13.0001 15.0001 13.4478 15.0001 14.0001V18.0001C15.0001 18.5524 15.4479 19.0001 16.0001 19.0001C16.5524 19.0001 17.0001 18.5524 17.0001 18.0001V14.0001Z" fill="currentColor"></path>',
    wire: '<path fill-rule="evenodd" clip-rule="evenodd" d="M29.44 2.10234C29.9359 2.34548 30.1408 2.94458 29.8977 3.44046C27.4936 8.34366 24.1767 14.8761 20.972 20.1905C19.3721 22.8436 17.7802 25.2269 16.3274 26.9582C15.6024 27.8222 14.8862 28.5553 14.1967 29.0804C13.531 29.5874 12.7617 30.0002 11.952 30.0002C11.4406 30.0002 10.9366 29.8407 10.5474 29.4481C10.1805 29.0781 10.0195 28.6047 9.95235 28.1739C9.82219 27.3389 9.98791 26.2806 10.2583 25.194C10.8106 22.9747 11.959 20.0546 13.0984 17.2201C13.2128 16.9355 13.3272 16.6517 13.441 16.3692C14.4775 13.7964 15.4668 11.3407 16.0297 9.46348C16.3364 8.44066 16.4815 7.69788 16.4815 7.24032C16.3043 7.30189 16.0703 7.42406 15.7743 7.64708C15.3022 8.00275 14.7718 8.5395 14.1949 9.23371C13.0421 10.621 11.8182 12.4954 10.6172 14.4224C10.2758 14.9702 9.93532 15.5238 9.59974 16.0695C8.77266 17.4144 7.97517 18.7112 7.2657 19.7547C6.76665 20.4887 6.28107 21.1431 5.83039 21.6231C5.60549 21.8627 5.36261 22.0878 5.10616 22.2592C4.86228 22.4223 4.5114 22.601 4.09151 22.601C3.62284 22.601 3.22405 22.3812 2.96556 22.0305C2.74526 21.7316 2.66016 21.3863 2.62142 21.1157C2.54282 20.5669 2.59802 19.8775 2.69923 19.1777C2.90609 17.7475 3.37111 15.87 3.832 14.0581C3.88377 13.8545 3.93551 13.6517 3.98692 13.4503C4.40133 11.826 4.7941 10.2866 5.01182 9.1068C5.04965 8.90182 5.08069 8.71514 5.10526 8.54672C5.02481 8.64457 4.94318 8.75464 4.86131 8.8764C4.43983 9.50324 4.1161 10.2825 3.95427 10.8004C3.78956 11.3276 3.2287 11.6214 2.70155 11.4567C2.17439 11.292 1.88058 10.7311 2.04529 10.204C2.24737 9.55719 2.64418 8.58944 3.20162 7.76042C3.48076 7.34527 3.82603 6.92589 4.24122 6.60191C4.65884 6.27604 5.19905 6.00813 5.83828 6.00813C6.07735 6.00813 6.3241 6.07398 6.54355 6.22339C6.75435 6.36692 6.88828 6.55204 6.97203 6.71507C7.12688 7.0165 7.16434 7.3478 7.17436 7.59459C7.19541 8.11287 7.10655 8.77647 6.97861 9.46974C6.74767 10.7212 6.3362 12.3332 5.92582 13.941C5.87383 14.1447 5.82186 14.3483 5.77028 14.5511C5.30319 16.3874 4.86753 18.158 4.67864 19.464C4.6513 19.653 4.63039 19.8246 4.61525 19.9791C4.90468 19.6339 5.23776 19.1803 5.61177 18.6302C6.29405 17.6267 7.05267 16.393 7.86799 15.0673C8.20916 14.5125 8.56026 13.9415 8.91984 13.3646C10.1206 11.4379 11.4077 9.45852 12.6567 7.95547C13.2807 7.20453 13.924 6.53698 14.5709 6.04964C15.2023 5.57399 15.9475 5.186 16.7556 5.186C17.2798 5.186 17.7831 5.39725 18.1136 5.86564C18.3982 6.26887 18.4706 6.74806 18.4803 7.14169C18.4998 7.93672 18.2688 8.95963 17.9454 10.038C17.3542 12.0097 16.3275 14.5573 15.3012 17.1041C15.1853 17.3917 15.0694 17.6793 14.9541 17.9661C13.8008 20.8351 12.7113 23.6187 12.1991 25.677C11.9373 26.7292 11.8642 27.4533 11.9285 27.8659C11.938 27.927 11.949 27.9705 11.9584 28.0002C12.1123 27.9975 12.4445 27.9008 12.9849 27.4893C13.5091 27.0901 14.1173 26.4807 14.7954 25.6726C16.1488 24.0598 17.6779 21.7801 19.2593 19.1577C22.4168 13.9215 25.7024 7.4539 28.1019 2.55999C28.345 2.0641 28.9441 1.85921 29.44 2.10234ZM3.94513 20.6257C3.94516 20.6255 3.94705 20.6246 3.95075 20.6231C3.94697 20.625 3.94511 20.6258 3.94513 20.6257Z" fill="currentColor"></path>',
    write: '<path fill-rule="evenodd" clip-rule="evenodd" d="M19.8786 3.70705C21.0502 2.53548 22.9497 2.53547 24.1213 3.70705L25.2928 4.87862C26.4644 6.0502 26.4644 7.94969 25.2928 9.12126L13.707 20.7071L13.4142 20.9999L12.9999 20.9999L8.99994 21L7.99994 21L7.99994 20L7.99994 15.9999L7.99994 15.5857L8.29284 15.2928L19.8786 3.70705ZM22.707 5.12126C22.3165 4.73074 21.6834 4.73074 21.2928 5.12126L19.4142 6.99991L22 9.5857L23.8786 7.70705C24.2691 7.31652 24.2691 6.68336 23.8786 6.29284L22.707 5.12126ZM9.99994 16.4142L18 8.41413L20.5858 10.9999L12.5857 18.9999L9.99994 19V16.4142ZM17.5978 24.3173C18.4945 23.6485 19.1685 23.3099 19.8407 23.1432C20.5221 22.9741 21.2842 22.9606 22.4009 23.0718C22.9835 23.1298 23.7754 23.6106 24.5842 24.349C25.357 25.0545 25.9589 25.8212 26.1567 26.1316C26.4535 26.5973 27.0717 26.7343 27.5374 26.4375C28.0032 26.1406 28.1401 25.5225 27.8433 25.0567C27.541 24.5825 26.821 23.6829 25.9327 22.8719C25.0805 22.094 23.8724 21.2084 22.599 21.0816C21.3957 20.9618 20.3678 20.9518 19.3592 21.202C18.3414 21.4545 17.4254 21.9508 16.4021 22.714C15.8097 23.1558 15.3576 23.6985 14.9723 24.1854C14.898 24.2793 14.8263 24.3708 14.7564 24.4601L14.7564 24.4602C14.4446 24.8584 14.1661 25.2142 13.8312 25.5512C13.0886 26.2986 12.0644 26.9535 9.97861 26.9981C9.31944 27.0122 8.56949 26.6742 7.95932 26.0601C7.34953 25.4464 6.99998 24.6771 7 24C7.00002 23.4477 6.55232 23 6.00003 22.9999C5.44775 22.9999 5.00002 23.4476 5 23.9999C4.99996 25.3228 5.65037 26.5738 6.54058 27.4698C7.43041 28.3653 8.68049 29.0263 10.0214 28.9976C12.6305 28.9418 14.1463 28.0716 15.2499 26.9609C15.6764 26.5317 16.0414 26.0645 16.3554 25.6626C16.4192 25.5809 16.4809 25.5019 16.5406 25.4265C16.9141 24.9545 17.2302 24.5914 17.5978 24.3173Z" fill="currentColor"></path>',
    youtube: '<path fill-rule="evenodd" clip-rule="evenodd" d="M25.3768 8.5075C26.4095 8.78675 27.2226 9.60973 27.4986 10.6546C28 12.5485 28 16.4999 28 16.4999C28 16.4999 28 20.4515 27.4986 22.3454C27.2226 23.3901 26.4095 24.2132 25.3768 24.4923C23.5051 25 16 25 16 25C16 25 8.49503 25 6.62334 24.4923C5.5908 24.2132 4.7775 23.3901 4.50153 22.3454C4 20.4515 4 16.4999 4 16.4999C4 16.4999 4 12.5485 4.50153 10.6546C4.7775 9.60973 5.5908 8.78675 6.62334 8.5075C8.49503 8 16 8 16 8C16 8 23.5051 8 25.3768 8.5075ZM13.6001 12.8569V20.1426L19.8353 16.4998L13.6001 12.8569Z" fill="currentColor"></path>'
  };
  var ICON_ALIASES = {
    error: "error-filled",
    warning: "warning-filled",
    info: "info-circle-hollow",
    success: "check-circle-filled"
  };
  var rootCss3 = {
    display: "inline-block",
    flex: "none",
    verticalAlign: "middle"
  };
  var FRAME = "0 0 32 32";
  var FALLBACK = "info-circle-hollow";
  var ICON_NAMES = Object.keys(ICON_PATHS);
  var isIconName = (name) => name in ICON_PATHS;
  var isAlias = (name) => name in ICON_ALIASES;
  var resolveName = (name) => {
    if (isIconName(name)) return name;
    if (isAlias(name)) return ICON_ALIASES[name];
    return FALLBACK;
  };
  var IconComponent = (0, import_react8.forwardRef)(
    function Icon(props, ref) {
      const {
        name = FALLBACK,
        size = 24,
        label,
        css: consumerCss,
        ...rest
      } = props;
      const markup = ICON_PATHS[resolveName(name)];
      return /* @__PURE__ */ jsx(
        "svg",
        {
          ref,
          ...rest,
          viewBox: FRAME,
          width: size,
          height: size,
          focusable: "false",
          role: label ? "img" : void 0,
          "aria-label": label,
          "aria-hidden": label ? void 0 : "true",
          css: [rootCss3, consumerCss],
          dangerouslySetInnerHTML: { __html: markup }
        }
      );
    }
  );
  var Icon2 = Object.assign(IconComponent, { names: ICON_NAMES });
  var Icon_default = Icon2;
  var HEIGHT_LG = "32px";
  var HEIGHT_SM = "24px";
  var ICON_BOX = "16px";
  var TOUCH_TARGET2 = "44px";
  var inactiveFill = `color-mix(in srgb, ${color.uiNeutral50} 40%, transparent)`;
  var darkHoverFill = `color-mix(in srgb, ${color.uiWhite} 8%, ${color.uiNeutral600})`;
  var focusRing = {
    outline: `2px solid ${color.borderFocus}`,
    outlineOffset: "2px"
  };
  var lightHover = { backgroundColor: color.uiNeutral100 };
  var darkHover = { backgroundColor: darkHoverFill };
  var touchHitArea = {
    "@media (pointer: coarse)": {
      "&::after": {
        content: '""',
        position: "absolute",
        top: "50%",
        left: "50%",
        width: `max(100%, ${TOUCH_TARGET2})`,
        height: `max(100%, ${TOUCH_TARGET2})`,
        transform: "translate(-50%, -50%)"
      }
    }
  };
  var rootCss4 = {
    position: "relative",
    display: "inline-flex",
    alignItems: "center",
    gap: space["1"],
    boxSizing: "border-box",
    height: HEIGHT_LG,
    margin: 0,
    paddingBlock: 0,
    paddingInline: space["2"],
    // The 1px ring is a box-shadow so the pill's box never changes size.
    border: 0,
    boxShadow: `inset 0 0 0 1px ${color.uiNeutral700}`,
    borderRadius: radius.pill,
    backgroundColor: color.uiNeutral50,
    color: color.uiNeutral700,
    fontFamily: fontFamily.sans,
    fontSize: fontSize["14"],
    lineHeight: lineHeight["20"],
    fontWeight: fontWeight.book,
    // The contract forbids wrapping and truncation: the pill grows to fit.
    whiteSpace: "nowrap",
    textAlign: "center",
    appearance: "none",
    transitionProperty: "background-color, box-shadow, opacity",
    transitionDuration: duration.fast,
    transitionTimingFunction: easing.standard,
    "@media (prefers-reduced-motion: reduce)": {
      transition: "none"
    },
    '&[data-size="sm"]': { height: HEIGHT_SM },
    // Inactive: same fill at 40%, no ring, muted label. One painted state for both types.
    '&[data-inactive="true"]': {
      backgroundColor: inactiveFill,
      boxShadow: "none",
      color: color.uiNeutral500
    },
    '&[data-theme="dark"]': {
      backgroundColor: color.uiNeutral600,
      boxShadow: `inset 0 0 0 1px ${color.uiWhite}`,
      color: color.uiWhite
    },
    '&[data-theme="dark"][data-inactive="true"]': {
      backgroundColor: color.uiNeutral600,
      boxShadow: "none",
      color: color.uiWhite,
      opacity: 0.4
    }
  };
  var filterCss = {
    cursor: "pointer",
    "&:hover": lightHover,
    '&[data-theme="dark"]:hover': darkHover,
    "&:focus-visible": focusRing,
    ...touchHitArea
  };
  var inputLabelCss = {
    display: "inline-flex",
    alignItems: "center"
  };
  var dismissCss = {
    position: "relative",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: ICON_BOX,
    height: ICON_BOX,
    margin: 0,
    padding: 0,
    border: 0,
    borderRadius: radius.pill,
    background: "transparent",
    color: "inherit",
    cursor: "pointer",
    appearance: "none",
    "&:focus-visible": focusRing,
    "&:disabled": { cursor: "default" },
    ...touchHitArea
  };
  var inputCss = {
    "&:hover": lightHover,
    '&[data-theme="dark"]:hover': darkHover
  };
  var iconCss2 = {
    display: "inline-flex",
    width: ICON_BOX,
    height: ICON_BOX,
    flexShrink: 0
  };
  var forcedStateCss2 = (state, dark) => {
    if (state === "focus") return focusRing;
    return dark ? darkHover : lightHover;
  };
  var CHIP_ATTR = "data-chip";
  var focusTarget = (chip) => chip.matches("button") ? chip : chip.querySelector("button:not(:disabled)");
  var moveFocusAfterDismiss = (root) => {
    const row = root.parentElement;
    const siblings = row ? Array.from(row.querySelectorAll(`[${CHIP_ATTR}]`)).filter(
      (chip) => chip !== root
    ) : [];
    const index = row ? Array.from(row.querySelectorAll(`[${CHIP_ATTR}]`)).indexOf(root) : -1;
    const candidates = [siblings[index], siblings[index - 1]].filter(
      (chip) => Boolean(chip)
    );
    for (const candidate of candidates) {
      const target = focusTarget(candidate);
      if (target) {
        target.focus();
        return;
      }
    }
    if (row) {
      if (!row.hasAttribute("tabindex")) row.setAttribute("tabindex", "-1");
      row.focus();
    }
  };
  var useDevelopmentWarnings = (props) => {
    const { size, type, children } = props;
    const isInput = type === "input";
    const strayInactive = !isInput && props.inactive !== void 0;
    const missingOnClick = !isInput && !props.onClick;
    const missingDismissLabel = isInput && !props.dismissLabel && typeof children !== "string" && typeof children !== "number";
    (0, import_react7.useEffect)(() => {
      var _a;
      if (false) return;
      if (size === "sm" && typeof window !== "undefined" && ((_a = window.matchMedia) == null ? void 0 : _a.call(window, "(pointer: coarse)").matches)) {
        console.error(
          'Angelou Chip: size="sm" is barred from touch-first surfaces; the hit area cannot reach 44px.'
        );
      }
      if (strayInactive) {
        console.error(
          'Angelou Chip: inactive applies to type="input" only. A filter chip is inactive when active={false}.'
        );
      }
      if (missingOnClick) {
        console.error(
          "Angelou Chip: a filter chip needs onClick. An inert pill is a Badge."
        );
      }
      if (missingDismissLabel) {
        console.error(
          'Angelou Chip: type="input" needs dismissLabel when the label is not plain text, so the close button names the value it removes.'
        );
      }
    }, [size, strayInactive, missingOnClick, missingDismissLabel]);
  };
  var FilterChip = (0, import_react7.forwardRef)(
    function FilterChip2(props, ref) {
      const {
        type: _type,
        active = false,
        size = "lg",
        theme = "light",
        icon,
        state,
        children,
        inactive: _inactive,
        onDismiss: _onDismiss,
        dismissLabel: _dismissLabel,
        css: consumerCss,
        ...rest
      } = props;
      return /* @__PURE__ */ jsxs(
        "button",
        {
          ref,
          ...rest,
          ...{ [CHIP_ATTR]: "filter" },
          type: "button",
          "aria-pressed": active,
          "data-active": active ? "true" : void 0,
          "data-inactive": active ? void 0 : "true",
          "data-size": size,
          "data-theme": theme,
          css: [
            rootCss4,
            filterCss,
            state ? forcedStateCss2(state, theme === "dark") : null,
            consumerCss
          ],
          children: [
            icon ? /* @__PURE__ */ jsx("span", { css: iconCss2, children: /* @__PURE__ */ jsx(Icon_default, { name: icon, size: 16 }) }) : null,
            children
          ]
        }
      );
    }
  );
  var InputChip = (0, import_react7.forwardRef)(
    function InputChip2(props, ref) {
      const {
        type: _type,
        inactive = false,
        onDismiss,
        dismissLabel,
        size = "lg",
        theme = "light",
        icon,
        state,
        children,
        active: _active,
        css: consumerCss,
        ...rest
      } = props;
      const innerRef = (0, import_react7.useRef)(null);
      const valueText = typeof children === "string" || typeof children === "number" ? String(children) : dismissLabel == null ? void 0 : dismissLabel.replace(/^Remove\s+/i, "");
      const name = dismissLabel != null ? dismissLabel : valueText !== void 0 ? `Remove ${valueText}` : void 0;
      const handleDismiss = (event) => {
        event.stopPropagation();
        if (innerRef.current) moveFocusAfterDismiss(innerRef.current);
        onDismiss();
      };
      const setRefs4 = (node2) => {
        innerRef.current = node2;
        if (typeof ref === "function") ref(node2);
        else if (ref)
          ref.current = node2;
      };
      return /* @__PURE__ */ jsxs(
        "span",
        {
          ref: setRefs4,
          ...rest,
          ...{ [CHIP_ATTR]: "input" },
          role: "group",
          "aria-label": valueText,
          "data-inactive": inactive ? "true" : void 0,
          "data-size": size,
          "data-theme": theme,
          css: [
            rootCss4,
            inputCss,
            state ? forcedStateCss2(state, theme === "dark") : null,
            consumerCss
          ],
          children: [
            icon ? /* @__PURE__ */ jsx("span", { css: iconCss2, children: /* @__PURE__ */ jsx(Icon_default, { name: icon, size: 16 }) }) : null,
            /* @__PURE__ */ jsx("span", { css: inputLabelCss, children }),
            /* @__PURE__ */ jsx(
              "button",
              {
                type: "button",
                css: dismissCss,
                "aria-label": name != null ? name : "Remove",
                disabled: inactive,
                onClick: handleDismiss,
                children: /* @__PURE__ */ jsx(Icon_default, { name: "close-circle-filled", size: 16 })
              }
            )
          ]
        }
      );
    }
  );
  var Chip = (0, import_react7.forwardRef)(
    function Chip2(props, ref) {
      useDevelopmentWarnings(props);
      if (props.type === "input") {
        return /* @__PURE__ */ jsx(InputChip, { ...props, ref });
      }
      return /* @__PURE__ */ jsx(
        FilterChip,
        {
          ...props,
          ref
        }
      );
    }
  );
  var Chip_default = Chip;
  var PADDING_BLOCK = "4px";
  var PADDING_INLINE = "10px";
  var DOT_SIZE = "6px";
  var DOT_GAP = "6px";
  var rootCss5 = {
    display: "inline-flex",
    alignItems: "center",
    gap: DOT_GAP,
    boxSizing: "border-box",
    margin: 0,
    paddingBlock: PADDING_BLOCK,
    paddingInline: PADDING_INLINE,
    border: 0,
    borderRadius: radius.pill,
    fontFamily: fontFamily.sans,
    fontSize: fontSize["12"],
    fontWeight: fontWeight.bold,
    lineHeight: lineHeight["16"],
    // The contract forbids wrapping and truncation: the pill grows to fit.
    whiteSpace: "nowrap",
    verticalAlign: "middle"
  };
  var pairs = {
    success: { fill: color.statusSuccess50, text: color.statusSuccess700 },
    info: { fill: color.statusInfo50, text: color.statusInfo700 },
    danger: { fill: color.statusDanger50, text: color.statusDanger700 },
    warning: { fill: color.statusWarning50, text: color.statusWarning700 },
    neutral: { fill: color.uiNeutral50, text: color.uiNeutral600 },
    ela: { fill: color.productEla50, text: color.productEla700 },
    socialstudies: {
      fill: color.productSocialstudies50,
      text: color.productSocialstudies700
    },
    science: { fill: color.productScience50, text: color.productScience700 },
    formative: {
      fill: color.productFormative50,
      text: color.productFormative700
    },
    everwrite: {
      fill: color.productEverwrite50,
      text: color.productEverwrite700
    }
  };
  var colorCss = (value) => ({
    backgroundColor: pairs[value].fill,
    color: pairs[value].text
  });
  var dotCss = {
    flex: "none",
    display: "inline-block",
    width: DOT_SIZE,
    height: DOT_SIZE,
    borderRadius: radius.pill,
    backgroundColor: "currentColor"
  };
  var Badge = (0, import_react9.forwardRef)(
    function Badge2(props, ref) {
      const {
        color: color2 = "info",
        dot = true,
        children,
        css: consumerCss,
        ...rest
      } = props;
      return /* @__PURE__ */ jsxs(
        "span",
        {
          ref,
          ...rest,
          "data-color": color2,
          "data-dot": dot ? "true" : "false",
          css: [rootCss5, colorCss(color2), consumerCss],
          children: [
            dot ? /* @__PURE__ */ jsx("span", { "aria-hidden": "true", "data-part": "dot", css: dotCss }) : null,
            children
          ]
        }
      );
    }
  );
  var Badge_default = Badge;
  var TOUCH_TARGET3 = "44px";
  var rootCss6 = {
    display: "inline",
    position: "relative",
    margin: 0,
    padding: 0,
    border: 0,
    background: "none",
    fontFamily: fontFamily.sans,
    fontWeight: fontWeight.book,
    textDecorationLine: "underline",
    // anatomy.focusRing: the 2px ring reads as a rounded rectangle with a 4px radius.
    borderRadius: radius.xs,
    cursor: "pointer",
    transitionProperty: "color",
    transitionDuration: duration.fast,
    transitionTimingFunction: easing.standard,
    "@media (prefers-reduced-motion: reduce)": {
      transition: "none"
    },
    "&:hover": {
      textDecorationLine: "underline"
    },
    "&:active": {
      textDecorationLine: "underline"
    },
    "&:focus-visible": {
      outline: `2px solid ${color.borderFocus}`,
      outlineOffset: "2px",
      textDecorationLine: "underline"
    }
  };
  var sizeCss2 = {
    xsmall: { fontSize: fontSize["12"], lineHeight: lineHeight["16"] },
    small: { fontSize: fontSize["14"], lineHeight: lineHeight["20"] },
    medium: { fontSize: fontSize["16"], lineHeight: lineHeight["24"] },
    large: { fontSize: fontSize["20"], lineHeight: lineHeight["24"] }
  };
  var palette = {
    navy: { rest: color.uiCore700, hover: color.uiCore600 },
    blue: { rest: color.uiBlue500, hover: color.uiBlue600 },
    black: { rest: color.fgPrimary, hover: color.uiNeutral600 },
    white: { rest: color.fgInverse, hover: color.uiNeutral50 }
  };
  var withStates = (name) => ({
    color: palette[name].rest,
    "&:visited": { color: palette[name].rest },
    "&:hover": { color: palette[name].hover },
    "&:active": { color: palette[name].hover }
  });
  var colorCss2 = {
    navy: withStates("navy"),
    blue: withStates("blue"),
    black: withStates("black"),
    white: withStates("white")
  };
  var standaloneCss = {
    display: "inline-block",
    "@media (pointer: coarse)": {
      "&::after": {
        content: '""',
        position: "absolute",
        top: "50%",
        left: "50%",
        width: `max(100%, ${TOUCH_TARGET3})`,
        height: `max(100%, ${TOUCH_TARGET3})`,
        transform: "translate(-50%, -50%)"
      }
    }
  };
  var iconCss3 = {
    display: "inline-flex",
    alignItems: "center",
    verticalAlign: "middle",
    // The icon follows the type size.
    "& > svg": { display: "block", width: "1em", height: "1em" }
  };
  var leadingIconCss = {
    ...iconCss3,
    marginInlineEnd: space["2"]
  };
  var trailingIconCss = {
    ...iconCss3,
    marginInlineStart: space["2"]
  };
  var GENERIC_LABELS = /* @__PURE__ */ new Set(["click here", "learn more", "read more"]);
  var isDevelopment = true;
  var Link = (0, import_react10.forwardRef)(
    function Link2(props, ref) {
      const {
        size = "medium",
        color: color2 = "navy",
        href,
        icon,
        iconPlacement = "leading",
        standalone = false,
        target,
        rel,
        children,
        css: consumerCss,
        ...rest
      } = props;
      if (isDevelopment) {
        if (!href || href === "#") {
          console.error(
            "Angelou Link: href must be a real, navigable URL. A control with no destination is a Button."
          );
        }
        if (typeof children === "string" && GENERIC_LABELS.has(
          children.trim().replace(/[.!…]+$/, "").toLowerCase()
        )) {
          console.error(
            `Angelou Link: "${children}" is not an accessible name. Name the destination instead.`
          );
        }
      }
      const resolvedRel = rel != null ? rel : target === "_blank" ? "noopener noreferrer" : void 0;
      const iconNode = icon ? /* @__PURE__ */ jsx(
        "span",
        {
          "aria-hidden": "true",
          css: iconPlacement === "trailing" ? trailingIconCss : leadingIconCss,
          children: icon
        }
      ) : null;
      return /* @__PURE__ */ jsxs(
        "a",
        {
          ref,
          ...rest,
          href,
          target,
          rel: resolvedRel,
          "data-size": size,
          "data-color": color2,
          "data-standalone": standalone ? "true" : void 0,
          css: [
            rootCss6,
            sizeCss2[size],
            colorCss2[color2],
            standalone ? standaloneCss : null,
            consumerCss
          ],
          children: [
            iconPlacement === "leading" ? iconNode : null,
            children,
            iconPlacement === "trailing" ? iconNode : null
          ]
        }
      );
    }
  );
  var Link_default = Link;
  var THICKNESS2 = {
    thin: 16,
    medium: 24,
    thick: 32
  };
  var VALUE_GAP = "9px";
  var THICKNESS_VAR = "--angelou-bar-thickness";
  var thicknessSize = (thickness) => {
    if (thickness === "flex") return "100%";
    return `${typeof thickness === "number" ? thickness : THICKNESS2[thickness]}px`;
  };
  var ramps = {
    darkBlue: { fill: color.uiCore600, track: color.uiCore50 },
    blue: { fill: color.uiCore500, track: color.uiCore25 },
    purple: { fill: color.uiPurple600, track: color.uiPurple25 },
    green: { fill: color.uiGreen600, track: color.uiGreen50 },
    teal: { fill: color.uiTeal600, track: color.uiTeal50 },
    yellow: { fill: color.uiYellow600, track: color.uiYellow50 },
    red: { fill: color.uiRed500, track: color.uiRed50 },
    neutral: { fill: color.uiNeutral500, track: color.uiNeutral25 }
  };
  var capRadiusCss = (orientation, cap, radius2) => {
    const r = `${radius2}px`;
    const none = {
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
      borderBottomLeftRadius: 0
    };
    if (cap === "none") return none;
    if (cap === "one") return { ...none, borderTopRightRadius: r };
    return orientation === "horizontal" ? { ...none, borderTopRightRadius: r, borderBottomRightRadius: r } : { ...none, borderTopLeftRadius: r, borderTopRightRadius: r };
  };
  var motionCss = {
    transitionDuration: duration.slow,
    transitionTimingFunction: easing.standard,
    "@media (prefers-reduced-motion: reduce)": {
      transition: "none"
    }
  };
  var rootCss7 = {
    boxSizing: "border-box",
    display: "flex",
    fontFamily: fontFamily.sans,
    '&[data-orientation="horizontal"]': {
      flexDirection: "row",
      alignItems: "center",
      gap: space["3"],
      width: "100%"
    },
    '&[data-orientation="vertical"]': {
      flexDirection: "column",
      alignItems: "center",
      height: "100%"
    },
    // labelledRowTop: the label stacks above the bar box, which then spans the
    // row. Compounded so it outranks the horizontal rule whatever the key order.
    '&[data-orientation="horizontal"][data-label-position="top"]': {
      flexDirection: "column",
      alignItems: "stretch",
      gap: space["2"]
    },
    // 'flex' fills the container's cross axis, so the root must span it too;
    // otherwise the bar box takes 100% of a content-sized root, which is 0.
    '&[data-orientation="vertical"][data-thickness="flex"]': { width: "100%" },
    '&[data-orientation="horizontal"][data-thickness="flex"]': { height: "100%" }
  };
  var barCss = ({
    orientation,
    thickness,
    labelled,
    barMaxWidth
  }) => {
    const base = {
      position: "relative",
      boxSizing: "border-box",
      flex: "1 1 auto",
      minWidth: 0,
      minHeight: 0
    };
    if (orientation === "horizontal") {
      return labelled ? {
        ...base,
        // The row's grid: fill · number · remainder (reconciliation
        // "valueLabel positioning"). The template is set inline from value.
        display: "grid",
        alignItems: "center",
        width: "100%",
        height: thicknessSize(thickness),
        transitionProperty: "grid-template-columns",
        ...motionCss
      } : {
        ...base,
        display: "flex",
        flexDirection: "row",
        alignItems: "stretch",
        justifyContent: "flex-start",
        width: "100%",
        height: thicknessSize(thickness)
      };
    }
    return {
      ...base,
      display: "flex",
      flexDirection: "column",
      alignItems: "stretch",
      justifyContent: "flex-end",
      height: "100%",
      // A labelled column takes the width its container gives it, so a set laid
      // out in equal fractions comes out equal width (api.rowLabel); barMaxWidth
      // caps it at the widest label.
      width: labelled ? "100%" : thicknessSize(thickness),
      maxWidth: labelled && barMaxWidth !== void 0 ? `${barMaxWidth}px` : void 0
    };
  };
  var trackCss = (orientation, color2, radius2) => ({
    backgroundColor: ramps[color2].track,
    ...capRadiusCss(orientation, "two", radius2)
  });
  var fillCss = (orientation, color2, cap, radius2) => ({
    position: "relative",
    flex: "none",
    minWidth: 0,
    backgroundColor: ramps[color2].fill,
    ...capRadiusCss(orientation, cap, radius2),
    ...orientation === "horizontal" ? { height: "100%" } : { width: "100%" },
    transitionProperty: "width, height",
    ...motionCss
  });
  var rowLabelCss = (orientation, labelWidth, top) => ({
    flex: "none",
    boxSizing: "border-box",
    fontWeight: fontWeight.book,
    fontSize: fontSize["14"],
    lineHeight: lineHeight["16"],
    color: color.uiNeutral600,
    ...top ? { textAlign: "left" } : orientation === "horizontal" ? {
      width: `${labelWidth}px`,
      textAlign: "right"
    } : {
      width: "100%",
      marginTop: space["3"],
      textAlign: "center"
    }
  });
  var valueLabelCss = (orientation) => ({
    fontWeight: fontWeight.bold,
    fontSize: fontSize["20"],
    lineHeight: lineHeight["24"],
    color: color.uiNeutral700,
    whiteSpace: "nowrap",
    ...orientation === "horizontal" ? {
      // Grid column 2, riding the fill's end.
      marginLeft: VALUE_GAP
    } : {
      // Above the fill's top: `bottom` is set inline from value.
      position: "absolute",
      left: 0,
      right: 0,
      textAlign: "center",
      marginBottom: VALUE_GAP,
      transitionProperty: "bottom",
      ...motionCss
    }
  });
  var clamp = (value) => Number.isFinite(value) ? Math.min(100, Math.max(0, value)) : 0;
  var BarChartRow = (0, import_react11.forwardRef)(
    function BarChartRow2(props, ref) {
      const {
        value = 0,
        orientation = "vertical",
        color: color2 = "blue",
        cap = "one",
        radius: radius2 = 8,
        thickness = "thick",
        track = false,
        label,
        rowLabel,
        valueLabel,
        barMaxWidth,
        labelWidth = 120,
        labelPosition = "start",
        className,
        style,
        css: consumerCss,
        ...rest
      } = props;
      const percent = clamp(value);
      const horizontal = orientation === "horizontal";
      const hasRowLabel = rowLabel !== void 0 && rowLabel !== null;
      const hasValueText = valueLabel !== void 0 && valueLabel !== null;
      const labelled = hasRowLabel || hasValueText;
      const labelOnTop = horizontal && hasRowLabel && labelPosition === "top";
      const barAria = label ? { role: "img", "aria-label": label } : hasValueText ? {} : { "aria-hidden": true };
      const barStyle = horizontal && labelled ? {
        gridTemplateColumns: `minmax(0, ${percent}fr) max-content minmax(0, ${100 - percent}fr)`
      } : void 0;
      const fillStyle = horizontal && labelled ? {} : horizontal ? { width: `${percent}%` } : { height: `${percent}%` };
      const valueNode = hasValueText ? /* @__PURE__ */ jsx(
        "span",
        {
          "data-part": "value",
          css: valueLabelCss(orientation),
          style: horizontal ? void 0 : { bottom: `${percent}%` },
          children: valueLabel
        }
      ) : null;
      const bar = /* @__PURE__ */ jsxs(
        "div",
        {
          ...barAria,
          "data-part": "bar",
          css: [
            barCss({ orientation, thickness, labelled, barMaxWidth }),
            track ? trackCss(orientation, color2, radius2) : null
          ],
          style: barStyle,
          children: [
            /* @__PURE__ */ jsx(
              "div",
              {
                "data-part": "fill",
                css: fillCss(orientation, color2, cap, radius2),
                style: fillStyle
              }
            ),
            valueNode
          ]
        }
      );
      const rowLabelNode = hasRowLabel ? /* @__PURE__ */ jsx(
        "span",
        {
          "data-part": "label",
          css: rowLabelCss(orientation, labelWidth, labelOnTop),
          children: rowLabel
        }
      ) : null;
      return /* @__PURE__ */ jsx(
        "div",
        {
          ...rest,
          ref,
          className,
          style: thickness === "flex" ? style : {
            [THICKNESS_VAR]: thicknessSize(thickness),
            ...style
          },
          css: [rootCss7, consumerCss],
          "data-orientation": orientation,
          "data-cap": cap,
          "data-color": color2,
          "data-thickness": typeof thickness === "number" ? "custom" : thickness,
          "data-track": track ? "true" : void 0,
          "data-labelled": labelled ? "true" : void 0,
          "data-label-position": horizontal && hasRowLabel ? labelPosition : void 0,
          children: horizontal ? /* @__PURE__ */ jsxs(Fragment2, { children: [
            rowLabelNode,
            bar
          ] }) : /* @__PURE__ */ jsxs(Fragment2, { children: [
            bar,
            rowLabelNode
          ] })
        }
      );
    }
  );
  var Bar = BarChartRow;
  var BarChartRow_default = BarChartRow;
  var TRIGGER_SIZE = 44;
  var GLYPH_SIZE = 24;
  var ARROW_DEPTH = 9;
  var ARROW_SQUARE = ARROW_DEPTH * 2 / Math.SQRT2;
  var ARROW_OFFSET = ARROW_DEPTH - ARROW_SQUARE / 2;
  var ARROW_INSET_VERTICAL = 20;
  var ARROW_INSET_HORIZONTAL = 16;
  var ARROW_CROSS_VERTICAL = ARROW_INSET_VERTICAL + ARROW_DEPTH - ARROW_SQUARE / 2;
  var ARROW_CROSS_HORIZONTAL = ARROW_INSET_HORIZONTAL + ARROW_DEPTH - ARROW_SQUARE / 2;
  var BUBBLE_PADDING = 12;
  var CLOSE_SIZE = 24;
  var CLOSE_GLYPH_SIZE = 16;
  var themes = {
    grey: {
      fill: color.bgMuted,
      ring: color.borderDefault,
      heading: color.fgPrimary,
      body: color.uiNeutral600,
      bodyHover: color.uiNeutral700
    },
    white: {
      fill: color.bgSurface,
      ring: color.borderDefault,
      heading: color.fgPrimary,
      body: color.uiNeutral600,
      bodyHover: color.uiNeutral700
    },
    dark: {
      fill: color.bgInverse,
      ring: color.borderInverse,
      heading: color.fgInverse,
      body: color.fgInverse,
      bodyHover: color.uiNeutral50
    }
  };
  var focusRing2 = {
    outline: `2px solid ${color.borderFocus}`,
    outlineOffset: "2px"
  };
  var rootCss8 = {
    position: "relative",
    display: "inline-flex",
    verticalAlign: "middle"
  };
  var triggerCss = (surface) => {
    const rest = surface === "dark" ? color.fgInverse : color.uiNeutral600;
    const hover = surface === "dark" ? color.uiNeutral50 : color.uiNeutral700;
    return {
      boxSizing: "border-box",
      width: `${TRIGGER_SIZE}px`,
      height: `${TRIGGER_SIZE}px`,
      margin: 0,
      padding: 0,
      border: 0,
      borderRadius: radius.pill,
      background: "transparent",
      color: rest,
      cursor: "pointer",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      appearance: "none",
      fontFamily: fontFamily.sans,
      transitionProperty: "color",
      transitionDuration: duration.fast,
      transitionTimingFunction: easing.standard,
      "@media (prefers-reduced-motion: reduce)": {
        transition: "none"
      },
      "&:hover": { color: hover },
      "&:active": { color: hover },
      '&[aria-expanded="true"]': { color: hover },
      "&:focus-visible": focusRing2
    };
  };
  var glyphCss = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: `${GLYPH_SIZE}px`,
    height: `${GLYPH_SIZE}px`,
    "& > svg": { display: "block" }
  };
  var vertical = (arrow) => arrow === "top" || arrow === "bottom";
  var outerCss = (arrow, arrowPosition, width) => {
    const centre = TRIGGER_SIZE / 2;
    const arrowCentreFromEdge = vertical(arrow) ? ARROW_INSET_HORIZONTAL + ARROW_DEPTH : ARROW_INSET_VERTICAL + ARROW_DEPTH;
    const endShift = `${centre - arrowCentreFromEdge}px`;
    const css2 = {
      position: "absolute",
      zIndex: 1,
      boxSizing: "border-box",
      width: `${vertical(arrow) ? width : width + ARROW_DEPTH}px`,
      paddingLeft: arrow === "left" ? `${ARROW_DEPTH}px` : 0,
      paddingRight: arrow === "right" ? `${ARROW_DEPTH}px` : 0,
      paddingTop: arrow === "top" ? `${ARROW_DEPTH}px` : 0,
      paddingBottom: arrow === "bottom" ? `${ARROW_DEPTH}px` : 0,
      // Contract motion.enter: opacity only, --dur-fast, --ease-standard.
      "@keyframes angelou-toggletip-fade": {
        from: { opacity: 0 },
        to: { opacity: 1 }
      },
      animation: `angelou-toggletip-fade ${duration.fast} ${easing.standard}`,
      "@media (prefers-reduced-motion: reduce)": {
        transition: "none",
        animation: "none"
      }
    };
    if (arrow === "left") css2.left = "100%";
    if (arrow === "right") css2.right = "100%";
    if (arrow === "top") css2.top = "100%";
    if (arrow === "bottom") css2.bottom = "100%";
    if (vertical(arrow)) {
      if (arrowPosition === "right") css2.right = endShift;
      else if (arrowPosition === "left") css2.left = endShift;
      else {
        css2.left = "50%";
        css2.transform = "translateX(-50%)";
      }
    } else if (arrowPosition === "bottom") css2.bottom = endShift;
    else if (arrowPosition === "top") css2.top = endShift;
    else {
      css2.top = "50%";
      css2.transform = "translateY(-50%)";
    }
    return css2;
  };
  var OUTWARD_SIDES = {
    left: ["borderLeft", "borderBottom"],
    right: ["borderTop", "borderRight"],
    top: ["borderLeft", "borderTop"],
    bottom: ["borderBottom", "borderRight"]
  };
  var arrowCss = (arrow, arrowPosition, theme) => {
    const css2 = {
      position: "absolute",
      zIndex: 1,
      boxSizing: "border-box",
      width: `${ARROW_SQUARE}px`,
      height: `${ARROW_SQUARE}px`,
      background: theme.fill,
      transform: "rotate(45deg)"
    };
    for (const side of OUTWARD_SIDES[arrow])
      css2[side] = `1px solid ${theme.ring}`;
    if (arrow === "left") css2.left = `${ARROW_OFFSET}px`;
    if (arrow === "right") css2.right = `${ARROW_OFFSET}px`;
    if (arrow === "top") css2.top = `${ARROW_OFFSET}px`;
    if (arrow === "bottom") css2.bottom = `${ARROW_OFFSET}px`;
    if (vertical(arrow)) {
      if (arrowPosition === "right") css2.right = `${ARROW_CROSS_HORIZONTAL}px`;
      else if (arrowPosition === "left") css2.left = `${ARROW_CROSS_HORIZONTAL}px`;
      else {
        css2.left = "50%";
        css2.transform = "translateX(-50%) rotate(45deg)";
      }
    } else if (arrowPosition === "bottom")
      css2.bottom = `${ARROW_CROSS_VERTICAL}px`;
    else if (arrowPosition === "top") css2.top = `${ARROW_CROSS_VERTICAL}px`;
    else {
      css2.top = "50%";
      css2.transform = "translateY(-50%) rotate(45deg)";
    }
    return css2;
  };
  var bubbleCss = (theme) => ({
    boxSizing: "border-box",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: space["2"],
    padding: `${BUBBLE_PADDING}px`,
    borderRadius: radius.sm,
    background: theme.fill,
    boxShadow: `inset 0 0 0 1px ${theme.ring}`,
    fontFamily: fontFamily.sans,
    textAlign: "left"
  });
  var rowCss = {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    gap: space["2"],
    alignSelf: "stretch"
  };
  var headingCss = (theme) => ({
    flex: "1 1 auto",
    margin: 0,
    paddingBlock: space["1"],
    fontFamily: fontFamily.sans,
    fontWeight: fontWeight.bold,
    fontSize: fontSize["14"],
    lineHeight: lineHeight["16"],
    color: theme.heading
  });
  var bodyCss = (theme) => ({
    flex: "1 1 auto",
    alignSelf: "stretch",
    margin: 0,
    fontFamily: fontFamily.sans,
    fontWeight: fontWeight.book,
    fontSize: fontSize["12"],
    lineHeight: lineHeight["16"],
    color: theme.body,
    textWrap: "pretty"
  });
  var closeCss = (theme) => ({
    position: "relative",
    flex: "none",
    boxSizing: "border-box",
    width: `${CLOSE_SIZE}px`,
    height: `${CLOSE_SIZE}px`,
    margin: 0,
    padding: 0,
    border: 0,
    borderRadius: radius.xs,
    background: "transparent",
    color: theme.body,
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    appearance: "none",
    transitionProperty: "color",
    transitionDuration: duration.fast,
    transitionTimingFunction: easing.standard,
    "@media (prefers-reduced-motion: reduce)": {
      transition: "none"
    },
    "& > svg": { display: "block" },
    "&:hover": { color: theme.bodyHover },
    "&:active": { color: theme.bodyHover },
    "&:focus-visible": focusRing2,
    // Contract responsive.touch: the 24px close button gets a 44px target on touch, glyph unchanged.
    "@media (pointer: coarse)": {
      "&::after": {
        content: '""',
        position: "absolute",
        top: "50%",
        left: "50%",
        width: `${TRIGGER_SIZE}px`,
        height: `${TRIGGER_SIZE}px`,
        transform: "translate(-50%, -50%)"
      }
    }
  });
  var VIEWPORT_MARGIN = 16;
  var isVertical = (arrow) => arrow === "top" || arrow === "bottom";
  var OPPOSITE = {
    top: "bottom",
    bottom: "top",
    left: "right",
    right: "left"
  };
  var SIDE_ORDER = ["bottom", "top", "right", "left"];
  var bubbleBox = (anchor, { arrow, position: position2 }, size) => {
    const vertical2 = isVertical(arrow);
    const width = vertical2 ? size.width : size.width + ARROW_DEPTH;
    const height = vertical2 ? size.height + ARROW_DEPTH : size.height;
    const inset2 = vertical2 ? ARROW_INSET_HORIZONTAL : ARROW_INSET_VERTICAL;
    const shift = TRIGGER_SIZE / 2 - (inset2 + ARROW_DEPTH);
    let top;
    let left;
    if (vertical2) {
      top = arrow === "bottom" ? anchor.top - height : anchor.top + anchor.height;
      if (position2 === "right") left = anchor.left + anchor.width - shift - width;
      else if (position2 === "left") left = anchor.left + shift;
      else left = anchor.left + anchor.width / 2 - width / 2;
    } else {
      left = arrow === "right" ? anchor.left - width : anchor.left + anchor.width;
      if (position2 === "bottom")
        top = anchor.top + anchor.height - shift - height;
      else if (position2 === "top") top = anchor.top + shift;
      else top = anchor.top + anchor.height / 2 - height / 2;
    }
    return { top, left, width, height };
  };
  var fits = (box, viewport) => box.top >= VIEWPORT_MARGIN && box.left >= VIEWPORT_MARGIN && box.top + box.height <= viewport.height - VIEWPORT_MARGIN && box.left + box.width <= viewport.width - VIEWPORT_MARGIN;
  var choosePlacement = (preferred, anchor, size, viewport) => {
    const sides = [
      preferred.arrow,
      OPPOSITE[preferred.arrow],
      ...SIDE_ORDER.filter(
        (s) => s !== preferred.arrow && s !== OPPOSITE[preferred.arrow]
      )
    ];
    for (const arrow of sides) {
      const sameAxis = isVertical(arrow) === isVertical(preferred.arrow);
      const position2 = sameAxis ? preferred.position : isVertical(arrow) ? "left" : "top";
      const candidate = { arrow, position: position2 };
      if (fits(bubbleBox(anchor, candidate, size), viewport)) return candidate;
    }
    return preferred;
  };
  var POSITIONS = {
    vertical: ["left", "middle", "right"],
    horizontal: ["top", "middle", "bottom"]
  };
  var openToggletips = /* @__PURE__ */ new Set();
  var useIsomorphicLayoutEffect = typeof window === "undefined" ? import_react12.useEffect : import_react12.useLayoutEffect;
  var setRefs = (...refs) => (node2) => {
    for (const ref of refs) {
      if (typeof ref === "function") ref(node2);
      else if (ref && "current" in ref)
        ref.current = node2;
    }
  };
  var Toggletip = (0, import_react12.forwardRef)(
    function Toggletip2(props, ref) {
      var _a, _b;
      const {
        label,
        children,
        heading,
        arrow = "left",
        arrowPosition = "middle",
        color: color2 = "grey",
        ctaLabel,
        ctaHref,
        onCtaClick,
        open: openProp,
        defaultOpen = false,
        onOpenChange,
        onClose,
        showClose = true,
        dismissOnOutsideClick = true,
        autoFocus = true,
        width = 300,
        flip = false,
        triggerTheme = color2 === "dark" ? "dark" : "light",
        trigger,
        className,
        css: consumerCss,
        ...rest
      } = props;
      const isControlled = openProp !== void 0;
      const [uncontrolledOpen, setUncontrolledOpen] = (0, import_react12.useState)(defaultOpen);
      const open = isControlled ? openProp : uncontrolledOpen;
      const rootRef = (0, import_react12.useRef)(null);
      const triggerRef = (0, import_react12.useRef)(null);
      const closeRef = (0, import_react12.useRef)(null);
      const bubbleRef = (0, import_react12.useRef)(null);
      const [flipped, setFlipped] = (0, import_react12.useState)(null);
      const bubbleId = (0, import_react12.useId)();
      const setOpen = (0, import_react12.useCallback)(
        (next2) => {
          if (!isControlled) setUncontrolledOpen(next2);
          onOpenChange == null ? void 0 : onOpenChange(next2);
        },
        [isControlled, onOpenChange]
      );
      const dismiss = (0, import_react12.useCallback)(
        (returnFocus) => {
          var _a2;
          setOpen(false);
          onClose == null ? void 0 : onClose();
          if (returnFocus) (_a2 = triggerRef.current) == null ? void 0 : _a2.focus();
        },
        [setOpen, onClose]
      );
      const dismissRef = (0, import_react12.useRef)(dismiss);
      dismissRef.current = dismiss;
      const requestOpen = () => {
        for (const closeOther of openToggletips) closeOther();
        setOpen(true);
      };
      (0, import_react12.useEffect)(() => {
        if (!open) return void 0;
        const closeSelf = () => dismissRef.current(false);
        openToggletips.add(closeSelf);
        return () => {
          openToggletips.delete(closeSelf);
        };
      }, [open]);
      (0, import_react12.useEffect)(() => {
        if (!open) return void 0;
        const onKeyDown = (event) => {
          if (event.key !== "Escape") return;
          event.stopPropagation();
          dismissRef.current(true);
        };
        const onPointerDown = (event) => {
          if (!dismissOnOutsideClick) return;
          const root = rootRef.current;
          if (!root || !(event.target instanceof Node) || root.contains(event.target)) {
            return;
          }
          dismissRef.current(root.contains(document.activeElement));
        };
        document.addEventListener("keydown", onKeyDown, true);
        document.addEventListener("pointerdown", onPointerDown, true);
        return () => {
          document.removeEventListener("keydown", onKeyDown, true);
          document.removeEventListener("pointerdown", onPointerDown, true);
        };
      }, [open, dismissOnOutsideClick]);
      const hasCta = ctaLabel !== void 0 && ctaLabel !== null;
      const closeVisible = showClose || hasCta;
      const interactive = closeVisible || hasCta;
      (0, import_react12.useEffect)(() => {
        var _a2;
        if (open && autoFocus && closeVisible) (_a2 = closeRef.current) == null ? void 0 : _a2.focus();
      }, [open, autoFocus, closeVisible]);
      const vertical2 = arrow === "top" || arrow === "bottom";
      const allowed = POSITIONS[vertical2 ? "vertical" : "horizontal"];
      const preferredPosition = allowed.includes(
        arrowPosition
      ) ? arrowPosition : "middle";
      const theme = themes[color2];
      useIsomorphicLayoutEffect(() => {
        if (!open || !flip) {
          setFlipped(null);
          return;
        }
        const root = rootRef.current;
        const bubble = bubbleRef.current;
        if (!root || !bubble) return;
        setFlipped(
          choosePlacement(
            { arrow, position: preferredPosition },
            root.getBoundingClientRect(),
            { width, height: bubble.offsetHeight },
            { width: window.innerWidth, height: window.innerHeight }
          )
        );
      }, [open, flip]);
      const placedArrow = (_a = flipped == null ? void 0 : flipped.arrow) != null ? _a : arrow;
      const position2 = (_b = flipped == null ? void 0 : flipped.position) != null ? _b : preferredPosition;
      const closeButton = closeVisible ? /* @__PURE__ */ jsx(
        "button",
        {
          ref: closeRef,
          type: "button",
          "aria-label": "Dismiss",
          css: closeCss(theme),
          onClick: () => dismiss(true),
          "data-part": "close",
          children: /* @__PURE__ */ jsx(Icon_default, { name: "close", size: CLOSE_GLYPH_SIZE })
        }
      ) : null;
      const body = /* @__PURE__ */ jsx("p", { css: bodyCss(theme), "data-part": "body", children });
      const bubbleName = typeof heading === "string" && heading.length > 0 ? heading : label;
      return /* @__PURE__ */ jsxs(
        "div",
        {
          ...rest,
          ref: setRefs(ref, rootRef),
          css: [rootCss8, consumerCss],
          className,
          "data-color": color2,
          children: [
            /* @__PURE__ */ jsx(
              "button",
              {
                ref: triggerRef,
                type: "button",
                css: triggerCss(triggerTheme),
                "aria-label": label,
                "aria-expanded": open,
                "aria-controls": open ? bubbleId : void 0,
                onClick: () => open ? dismiss(false) : requestOpen(),
                "data-part": "trigger",
                children: /* @__PURE__ */ jsx("span", { "aria-hidden": "true", css: glyphCss, children: trigger != null ? trigger : /* @__PURE__ */ jsx(Icon_default, { name: "info-circle-hollow", size: GLYPH_SIZE }) })
              }
            ),
            open ? /* @__PURE__ */ jsxs(
              "div",
              {
                id: bubbleId,
                role: interactive ? "dialog" : "status",
                "aria-live": interactive ? void 0 : "polite",
                "aria-label": interactive ? bubbleName : void 0,
                css: outerCss(placedArrow, position2, width),
                "data-part": "bubble",
                "data-arrow": placedArrow,
                "data-arrow-position": position2,
                children: [
                  /* @__PURE__ */ jsxs("div", { ref: bubbleRef, css: bubbleCss(theme), children: [
                    heading ? /* @__PURE__ */ jsxs("div", { css: rowCss, children: [
                      /* @__PURE__ */ jsx("p", { css: headingCss(theme), "data-part": "heading", children: heading }),
                      closeButton
                    ] }) : null,
                    heading ? body : /* @__PURE__ */ jsxs("div", { css: rowCss, children: [
                      body,
                      closeButton
                    ] }),
                    hasCta && ctaHref !== void 0 ? /* @__PURE__ */ jsx(
                      Link_default,
                      {
                        href: ctaHref,
                        onClick: onCtaClick,
                        size: "xsmall",
                        color: color2 === "dark" ? "white" : "navy",
                        "data-part": "cta",
                        children: ctaLabel
                      }
                    ) : null
                  ] }),
                  /* @__PURE__ */ jsx(
                    "span",
                    {
                      "aria-hidden": "true",
                      css: arrowCss(placedArrow, position2, theme),
                      "data-part": "arrow"
                    }
                  )
                ]
              }
            ) : null
          ]
        }
      );
    }
  );
  var Toggletip_default = Toggletip;
  var TOAST_HEIGHT = "40px";
  var DISMISS_SIZE = "24px";
  var TOUCH_TARGET4 = "44px";
  var REGION_MAX_WIDTH = "800px";
  var REGION_BOTTOM_INSET = "24px";
  var TOUCH_MEDIA = "@media (pointer: coarse), (max-width: 768px)";
  var REDUCED_MOTION = "@media (prefers-reduced-motion: reduce)";
  var fadeIn = keyframes({ from: { opacity: 0 }, to: { opacity: 1 } });
  var rootCss9 = {
    display: "flex",
    alignItems: "center",
    alignSelf: "stretch",
    // 12px gap between the message group and the dismiss button (tokens.spacing).
    gap: `calc(${space["2"]} + ${space["1"]})`,
    boxSizing: "border-box",
    height: TOAST_HEIGHT,
    paddingBlock: 0,
    paddingInline: space["3"],
    borderRadius: radius.sm,
    boxShadow: shadow.md,
    fontFamily: fontFamily.sans,
    fontWeight: fontWeight.medium,
    fontSize: fontSize["14"],
    lineHeight: lineHeight["20"],
    opacity: 1,
    animationName: fadeIn,
    animationDuration: duration.fast,
    animationTimingFunction: easing.standard,
    animationFillMode: "both",
    transitionProperty: "opacity",
    transitionDuration: duration.fast,
    transitionTimingFunction: easing.standard,
    '&[data-state="exiting"]': {
      opacity: 0
    },
    [REDUCED_MOTION]: {
      animation: "none",
      transition: "none"
    }
  };
  var statusCss = {
    success: { backgroundColor: color.statusSuccess500, color: color.fgInverse },
    error: { backgroundColor: color.statusDanger500, color: color.fgInverse },
    info: { backgroundColor: color.statusInfo500, color: color.fgInverse },
    // White on Yellow 400 fails 4.5:1; the warning label is Neutral 700.
    warning: { backgroundColor: color.statusWarning400, color: color.fgPrimary }
  };
  var bodyCss2 = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: space["2"],
    flex: 1,
    minWidth: 0
  };
  var iconCss4 = {
    flex: "none",
    display: "block"
  };
  var messageCss = {
    minWidth: 0,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis"
  };
  var hoverTint = (tint3, percent) => `color-mix(in srgb, ${tint3} ${percent}, transparent)`;
  var dismissCss2 = {
    position: "relative",
    flex: "none",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    boxSizing: "border-box",
    width: DISMISS_SIZE,
    height: DISMISS_SIZE,
    margin: 0,
    padding: 0,
    border: "none",
    borderRadius: radius.xs,
    backgroundColor: "transparent",
    color: "inherit",
    cursor: "pointer",
    appearance: "none",
    transitionProperty: "background-color",
    transitionDuration: duration.fast,
    transitionTimingFunction: easing.standard,
    "&:hover": {
      backgroundColor: hoverTint(color.uiWhite, "18%")
    },
    "&:focus-visible": {
      outline: `2px solid ${color.borderFocus}`,
      outlineOffset: "2px"
    },
    [REDUCED_MOTION]: {
      transition: "none"
    },
    // The glyph stays 16px; the hit area grows to 44px on touch surfaces.
    [TOUCH_MEDIA]: {
      "&::after": {
        content: '""',
        position: "absolute",
        top: "50%",
        left: "50%",
        width: `max(100%, ${TOUCH_TARGET4})`,
        height: `max(100%, ${TOUCH_TARGET4})`,
        transform: "translate(-50%, -50%)"
      }
    }
  };
  var dismissTintCss = {
    success: {},
    error: {},
    info: {},
    warning: {
      "&:hover": {
        backgroundColor: hoverTint(color.uiNeutral700, "12%")
      }
    }
  };
  var regionCss = {
    position: "fixed",
    left: "50%",
    bottom: REGION_BOTTOM_INSET,
    transform: "translateX(-50%)",
    zIndex: 1e3,
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    gap: space["2"],
    width: `min(${REGION_MAX_WIDTH}, calc(100vw - 2 * ${space["3"]}))`,
    // The empty region must never block the page beneath it.
    pointerEvents: "none",
    "& > *": {
      pointerEvents: "auto"
    }
  };
  var MIN_DURATION = 5e3;
  var DEFAULT_DURATION = 5e3;
  var EXIT_MS = parseInt(tokenValues["--dur-fast"], 10);
  var STATUS_ICON = {
    success: "check-circle-filled",
    error: "error-filled",
    info: "info-circle-filled",
    warning: "warning-filled"
  };
  var prefersReducedMotion = () => typeof window !== "undefined" && typeof window.matchMedia === "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var ToastComponent = (0, import_react13.forwardRef)(
    function Toast(props, ref) {
      const {
        status = "info",
        children,
        onDismiss,
        dismissLabel = "Dismiss notification",
        duration: duration2 = DEFAULT_DURATION,
        onExpire,
        onPointerEnter,
        onPointerLeave,
        onFocus,
        onBlur,
        css: consumerCss,
        ...rest
      } = props;
      const [exiting, setExiting] = (0, import_react13.useState)(false);
      const [hovered, setHovered] = (0, import_react13.useState)(false);
      const [focusWithin, setFocusWithin] = (0, import_react13.useState)(false);
      const dismissRef = (0, import_react13.useRef)(onDismiss);
      const expireRef = (0, import_react13.useRef)(onExpire);
      dismissRef.current = onDismiss;
      expireRef.current = onExpire;
      const previouslyFocused = (0, import_react13.useRef)(null);
      const exitTimer = (0, import_react13.useRef)(null);
      const remaining = (0, import_react13.useRef)(null);
      (0, import_react13.useEffect)(() => {
        previouslyFocused.current = document.activeElement;
        return () => {
          if (exitTimer.current) clearTimeout(exitTimer.current);
        };
      }, []);
      (0, import_react13.useEffect)(() => {
        remaining.current = duration2 === null ? null : Math.max(MIN_DURATION, duration2);
      }, [duration2]);
      const beginExit = (0, import_react13.useCallback)((reason) => {
        setExiting(true);
        const notify = () => {
          var _a, _b, _c;
          exitTimer.current = null;
          if (reason === "expire") (_b = (_a = expireRef.current) != null ? _a : dismissRef.current) == null ? void 0 : _b();
          else (_c = dismissRef.current) == null ? void 0 : _c.call(dismissRef);
        };
        exitTimer.current = setTimeout(
          notify,
          prefersReducedMotion() ? 0 : EXIT_MS
        );
      }, []);
      const timerRuns = status !== "error" && duration2 !== null && !exiting && !hovered && !focusWithin;
      (0, import_react13.useEffect)(() => {
        if (!timerRuns || remaining.current === null) return void 0;
        const startedAt = Date.now();
        const timer = setTimeout(() => {
          remaining.current = 0;
          beginExit("expire");
        }, remaining.current);
        return () => {
          clearTimeout(timer);
          if (remaining.current !== null) {
            remaining.current = Math.max(
              0,
              remaining.current - (Date.now() - startedAt)
            );
          }
        };
      }, [timerRuns, beginExit]);
      const handleDismiss = () => {
        if (exiting) return;
        const previous = previouslyFocused.current;
        if (previous instanceof HTMLElement && previous.isConnected) {
          previous.focus();
        } else if (document.activeElement instanceof HTMLElement) {
          document.activeElement.blur();
        }
        beginExit("dismiss");
      };
      const handlePointerEnter = (event) => {
        setHovered(true);
        onPointerEnter == null ? void 0 : onPointerEnter(event);
      };
      const handlePointerLeave = (event) => {
        setHovered(false);
        onPointerLeave == null ? void 0 : onPointerLeave(event);
      };
      const handleFocus = (event) => {
        setFocusWithin(true);
        onFocus == null ? void 0 : onFocus(event);
      };
      const handleBlur = (event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setFocusWithin(false);
        }
        onBlur == null ? void 0 : onBlur(event);
      };
      return /* @__PURE__ */ jsxs(
        "div",
        {
          ref,
          ...rest,
          role: status === "error" ? "alert" : "status",
          "data-status": status,
          "data-state": exiting ? "exiting" : "open",
          css: [rootCss9, statusCss[status], consumerCss],
          onPointerEnter: handlePointerEnter,
          onPointerLeave: handlePointerLeave,
          onFocus: handleFocus,
          onBlur: handleBlur,
          children: [
            /* @__PURE__ */ jsxs("div", { css: bodyCss2, "data-part": "body", children: [
              /* @__PURE__ */ jsx(Icon_default, { name: STATUS_ICON[status], size: 24, css: iconCss4 }),
              /* @__PURE__ */ jsx("span", { css: messageCss, "data-part": "message", children })
            ] }),
            onDismiss ? /* @__PURE__ */ jsx(
              "button",
              {
                type: "button",
                "aria-label": dismissLabel,
                "data-part": "dismiss",
                css: [dismissCss2, dismissTintCss[status]],
                onClick: handleDismiss,
                children: /* @__PURE__ */ jsx(Icon_default, { name: "close", size: 16 })
              }
            ) : null
          ]
        }
      );
    }
  );
  var ToastRegion = (0, import_react13.forwardRef)(
    function ToastRegion2(props, ref) {
      const {
        label = "Notifications",
        children,
        css: consumerCss,
        ...rest
      } = props;
      return /* @__PURE__ */ jsx(
        "div",
        {
          ref,
          ...rest,
          role: "region",
          "aria-label": label,
          css: [regionCss, consumerCss],
          children
        }
      );
    }
  );
  var Toast2 = Object.assign(ToastComponent, { Region: ToastRegion });
  var Toast_default = Toast2;
  var FIELD_HEIGHT = "48px";
  var FIELD_PADDING_X = "12px";
  var ERROR_ROW = "20px";
  var TOUCH_TARGET5 = "44px";
  var INFO_ICON_SIZE = 16;
  var ring = (width, ringColor) => `inset 0 0 0 ${width} ${ringColor}`;
  var rootCss10 = {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    boxSizing: "border-box",
    fontFamily: fontFamily.sans,
    color: color.fgPrimary
  };
  var labelRowCss = {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    gap: space["1"],
    paddingBlock: space["1"],
    paddingInline: 0,
    marginBottom: space["1"],
    boxSizing: "border-box"
  };
  var labelCss = {
    fontFamily: fontFamily.sans,
    fontWeight: fontWeight.bold,
    fontSize: fontSize["14"],
    lineHeight: lineHeight["20"],
    color: color.fgPrimary
  };
  var asteriskCss = {
    fontWeight: fontWeight.bold,
    fontSize: fontSize["14"],
    lineHeight: lineHeight["20"],
    color: color.uiBlue500
  };
  var optionalTextCss = {
    fontWeight: fontWeight.book,
    fontSize: fontSize["14"],
    lineHeight: lineHeight["20"],
    color: color.uiNeutral500
  };
  var infoButtonCss = {
    position: "relative",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: `${INFO_ICON_SIZE}px`,
    height: `${INFO_ICON_SIZE}px`,
    margin: 0,
    padding: 0,
    border: 0,
    borderRadius: radius.xs,
    background: "transparent",
    color: color.fgPrimary,
    cursor: "pointer",
    appearance: "none",
    "&:hover": { color: color.uiCore600 },
    "&:active": { color: color.uiCore700 },
    "&:focus-visible": {
      outline: `2px solid ${color.borderFocus}`,
      outlineOffset: "2px"
    },
    // The 16px glyph keeps its size; touch surfaces get a 44px hit area.
    "@media (pointer: coarse)": {
      "&::after": {
        content: '""',
        position: "absolute",
        top: "50%",
        left: "50%",
        width: `max(100%, ${TOUCH_TARGET5})`,
        height: `max(100%, ${TOUCH_TARGET5})`,
        transform: "translate(-50%, -50%)"
      }
    }
  };
  var fieldCss = {
    display: "block",
    width: "100%",
    boxSizing: "border-box",
    margin: 0,
    paddingBlock: 0,
    paddingInline: FIELD_PADDING_X,
    border: 0,
    borderRadius: radius.sm,
    backgroundColor: color.bgSurface,
    boxShadow: ring("1px", color.borderDefault),
    fontFamily: fontFamily.sans,
    fontWeight: fontWeight.book,
    fontSize: fontSize["16"],
    lineHeight: lineHeight["24"],
    color: color.fgPrimary,
    appearance: "none",
    transitionProperty: "box-shadow",
    transitionDuration: duration.fast,
    transitionTimingFunction: easing.standard,
    "@media (prefers-reduced-motion: reduce)": {
      transition: "none"
    },
    "&::placeholder": {
      color: color.uiNeutral500,
      opacity: 1
    },
    "&:hover:not(:disabled)": {
      boxShadow: ring("1px", color.uiNeutral200)
    },
    '&[aria-invalid="true"]': {
      boxShadow: ring("1px", color.uiRed500)
    },
    '&[aria-invalid="true"]:hover': {
      boxShadow: ring("1px", color.uiRed500)
    },
    "&:focus-visible": {
      outline: "none",
      boxShadow: ring("2px", color.uiBlue500)
    },
    "&:focus-visible:hover": {
      boxShadow: ring("2px", color.uiBlue500)
    },
    "&:disabled": {
      backgroundColor: color.bgMuted,
      color: color.uiNeutral500,
      cursor: "not-allowed"
    },
    "&:disabled::placeholder": {
      color: color.uiNeutral500
    }
  };
  var singleLineCss = {
    height: FIELD_HEIGHT
  };
  var textareaCss = {
    minHeight: FIELD_HEIGHT,
    paddingBlock: FIELD_PADDING_X,
    resize: "vertical"
  };
  var errorRowCss = {
    minHeight: ERROR_ROW,
    boxSizing: "border-box",
    marginTop: space["1"]
  };
  var errorMessageCss = {
    display: "block",
    fontWeight: fontWeight.book,
    fontSize: fontSize["12"],
    lineHeight: lineHeight["16"],
    color: color.uiRed500
  };
  var isDevelopment2 = true;
  var TextInput = (0, import_react15.forwardRef)(
    function TextInput2(props, ref) {
      const {
        label,
        inputType = "input",
        state = "default",
        required = false,
        tooltip = false,
        onTooltipClick,
        tooltipLabel,
        optionalText,
        errorMessage,
        retainErrorSpace = true,
        rows = 4,
        id: idProp,
        className,
        css: consumerCss,
        "aria-describedby": describedByProp,
        ...rest
      } = props;
      const generatedId = (0, import_react15.useId)();
      const id = idProp != null ? idProp : generatedId;
      const errorId = `${id}-error`;
      const hasLabel = label !== "" && label !== null && label !== void 0;
      const isError = state === "error";
      const isDisabled = state === "disabled";
      const showMessage = isError && Boolean(errorMessage);
      if (isDevelopment2) {
        if (isError && !errorMessage) {
          console.error(
            'Angelou TextInput: state="error" needs an errorMessage, otherwise the red ring is the only signal.'
          );
        }
        if (!hasLabel && !rest["aria-label"] && !rest["aria-labelledby"]) {
          console.error(
            'Angelou TextInput: label="" needs an aria-label or aria-labelledby, otherwise the field has no accessible name.'
          );
        }
        if (tooltip && !tooltipLabel && typeof label !== "string") {
          console.error(
            "Angelou TextInput: tooltip needs a tooltipLabel when label is not a string, so the info button names its subject."
          );
        }
      }
      const infoName = tooltipLabel != null ? tooltipLabel : typeof label === "string" ? `About ${label}` : "";
      const describedBy = [showMessage ? errorId : null, describedByProp].filter(Boolean).join(" ") || void 0;
      const fieldProps = {
        id,
        required,
        disabled: isDisabled,
        "aria-invalid": isError ? "true" : void 0,
        "aria-describedby": describedBy,
        "data-state": state
      };
      const field = inputType === "textarea" ? /* @__PURE__ */ jsx(
        "textarea",
        {
          ref,
          rows,
          ...rest,
          ...fieldProps,
          css: [fieldCss, textareaCss]
        }
      ) : /* @__PURE__ */ jsx(
        "input",
        {
          type: "text",
          ref,
          ...rest,
          ...fieldProps,
          css: [fieldCss, singleLineCss]
        }
      );
      return /* @__PURE__ */ jsxs(
        "div",
        {
          className,
          "data-input-type": inputType,
          css: [rootCss10, consumerCss],
          children: [
            hasLabel && /* @__PURE__ */ jsxs("div", { css: labelRowCss, children: [
              /* @__PURE__ */ jsx("label", { htmlFor: id, css: labelCss, children: label }),
              required && /* @__PURE__ */ jsx("span", { "aria-hidden": "true", css: asteriskCss, children: "*" }),
              optionalText !== void 0 && optionalText !== null && /* @__PURE__ */ jsx("span", { css: optionalTextCss, children: optionalText }),
              tooltip && /* @__PURE__ */ jsx(
                "button",
                {
                  type: "button",
                  "aria-label": infoName,
                  onClick: onTooltipClick,
                  css: infoButtonCss,
                  children: /* @__PURE__ */ jsx(Icon_default, { name: "info-circle-hollow", size: INFO_ICON_SIZE })
                }
              )
            ] }),
            field,
            (retainErrorSpace || showMessage) && /* @__PURE__ */ jsx("div", { css: errorRowCss, children: showMessage && /* @__PURE__ */ jsx("span", { id: errorId, css: errorMessageCss, children: errorMessage }) })
          ]
        }
      );
    }
  );
  var TextInput_default = TextInput;
  var ICON_SIZE = { simple: 24, compound: 48 };
  var DISMISS_SIZE2 = "24px";
  var DISMISS_GLYPH = 16;
  var TOUCH_TARGET6 = "44px";
  var XSMALL = "@media (max-width: 568px)";
  var rootCss11 = {
    position: "relative",
    boxSizing: "border-box",
    display: "flex",
    justifyContent: "center",
    width: "100%",
    margin: 0,
    // Contract: full-bleed, no radius, no shadow.
    borderRadius: 0,
    boxShadow: "none",
    paddingBlock: space["3"],
    paddingInline: space["4"],
    fontFamily: fontFamily.sans,
    fontWeight: fontWeight.book,
    fontSize: fontSize["16"],
    lineHeight: lineHeight["24"],
    [XSMALL]: {
      paddingInline: space["3"]
    }
  };
  var palette2 = {
    info: { fill: color.uiBlue500, type: color.fgInverse },
    success: { fill: color.uiGreen600, type: color.fgInverse },
    // The yellow fill cannot carry white text (contract: warning-uses-dark-type).
    warning: { fill: color.uiYellow400, type: color.fgPrimary },
    error: { fill: color.uiRed500, type: color.fgInverse }
  };
  var statusCss2 = {
    info: { backgroundColor: palette2.info.fill, color: palette2.info.type },
    success: {
      backgroundColor: palette2.success.fill,
      color: palette2.success.type
    },
    warning: {
      backgroundColor: palette2.warning.fill,
      color: palette2.warning.type
    },
    error: { backgroundColor: palette2.error.fill, color: palette2.error.type }
  };
  var innerCss = {
    boxSizing: "border-box",
    display: "flex",
    alignItems: "flex-start",
    gap: space["3"],
    width: "100%",
    maxWidth: layout.maxWidth
  };
  var compoundInnerCss = {
    [XSMALL]: {
      // The compound icon drops to 24px and sits above the title at X-small.
      flexDirection: "column",
      gap: space["2"]
    }
  };
  var iconCss5 = {
    display: "inline-flex",
    flex: "none",
    "& > svg": { display: "block" }
  };
  var compoundIconCss = {
    [XSMALL]: {
      "& > svg": {
        width: `${ICON_SIZE.simple}px`,
        height: `${ICON_SIZE.simple}px`
      }
    }
  };
  var stackCss = {
    display: "flex",
    flex: "1 1 auto",
    flexDirection: "column",
    gap: space["2"],
    minWidth: 0
  };
  var alignmentCss = {
    left: { alignItems: "flex-start", textAlign: "left" },
    center: { alignItems: "center", textAlign: "center" }
  };
  var rowCss2 = {
    display: "flex",
    alignItems: "flex-start",
    alignSelf: "stretch",
    gap: space["2"]
  };
  var titleCss = {
    alignSelf: "stretch",
    margin: 0,
    fontFamily: fontFamily.sans,
    fontWeight: fontWeight.bold,
    fontSize: fontSize["20"],
    lineHeight: lineHeight["24"]
  };
  var bodyCss3 = {
    flex: "1 1 auto",
    minWidth: 0,
    margin: 0,
    fontWeight: fontWeight.book,
    fontSize: fontSize["16"],
    lineHeight: lineHeight["24"],
    textWrap: "pretty"
  };
  var actionsCss = {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    gap: space["2"],
    [XSMALL]: {
      // The action row stacks full width at X-small; stacked buttons stay tappable.
      flexDirection: "column",
      alignItems: "stretch",
      alignSelf: "stretch",
      "& > button": { minHeight: TOUCH_TARGET6 }
    }
  };
  var dismissCss3 = {
    position: "relative",
    display: "inline-flex",
    flex: "none",
    alignItems: "center",
    justifyContent: "center",
    boxSizing: "border-box",
    width: DISMISS_SIZE2,
    height: DISMISS_SIZE2,
    margin: 0,
    padding: 0,
    border: 0,
    borderRadius: radius.xs,
    backgroundColor: "transparent",
    color: "inherit",
    cursor: "pointer",
    appearance: "none",
    "&:hover": {
      backgroundColor: "color-mix(in srgb, currentColor 16%, transparent)"
    },
    "&:active": {
      backgroundColor: "color-mix(in srgb, currentColor 28%, transparent)"
    },
    /*
     * --border-focus is the same blue as the info fill, so the outline alone
     * would vanish there; a white halo in the offset gap keeps the ring visible
     * on all four fills.
     */
    "&:focus-visible": {
      outline: `2px solid ${color.borderFocus}`,
      outlineOffset: "2px",
      boxShadow: `0 0 0 2px ${color.uiWhite}`
    },
    "& > svg": { display: "block" },
    // Touch surfaces get a 44px hit area without changing the visual box.
    "@media (pointer: coarse)": {
      "&::after": {
        content: '""',
        position: "absolute",
        top: "50%",
        left: "50%",
        width: `max(100%, ${TOUCH_TARGET6})`,
        height: `max(100%, ${TOUCH_TARGET6})`,
        transform: "translate(-50%, -50%)"
      }
    }
  };
  var STATUS_ICON2 = {
    info: "info-circle-hollow",
    success: "check-circle-filled",
    warning: "warning-filled",
    error: "error-filled"
  };
  var TABBABLE = 'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';
  var setRefs2 = (...refs) => (node2) => {
    for (const ref of refs) {
      if (typeof ref === "function") ref(node2);
      else if (ref && "current" in ref)
        ref.current = node2;
    }
  };
  var moveFocusOut = (banner, target) => {
    var _a;
    if (target == null ? void 0 : target.isConnected) {
      target.focus();
      return;
    }
    if (banner) {
      const tabbables = Array.from(
        document.querySelectorAll(TABBABLE)
      );
      const next2 = tabbables.find(
        (el) => !banner.contains(el) && Boolean(
          banner.compareDocumentPosition(el) & Node.DOCUMENT_POSITION_FOLLOWING
        )
      );
      if (next2) {
        next2.focus();
        return;
      }
    }
    (_a = document.activeElement) == null ? void 0 : _a.blur();
  };
  var AlertBanner = (0, import_react16.forwardRef)(
    function AlertBanner2(props, ref) {
      const {
        status = "info",
        bannerType = "simple",
        title,
        alignment = "left",
        dismissable = false,
        onDismiss,
        focusAfterDismiss,
        standing = false,
        actions,
        children,
        css: consumerCss,
        ...rest
      } = props;
      const rootRef = (0, import_react16.useRef)(null);
      const compound = bannerType === "compound";
      if (dismissable && !onDismiss) {
        console.error(
          "Angelou AlertBanner: dismissable needs onDismiss, otherwise the dismiss button cannot remove the banner."
        );
      }
      const handleDismiss = () => {
        moveFocusOut(rootRef.current, focusAfterDismiss == null ? void 0 : focusAfterDismiss.current);
        onDismiss == null ? void 0 : onDismiss();
      };
      const iconName = STATUS_ICON2[status];
      const iconNode = /* @__PURE__ */ jsx(
        "span",
        {
          "aria-hidden": "true",
          "data-part": "icon",
          "data-icon": iconName,
          css: [iconCss5, compound ? compoundIconCss : null],
          children: /* @__PURE__ */ jsx(
            Icon_default,
            {
              name: iconName,
              size: compound ? ICON_SIZE.compound : ICON_SIZE.simple
            }
          )
        }
      );
      return /* @__PURE__ */ jsx(
        "div",
        {
          ref: setRefs2(ref, rootRef),
          ...rest,
          role: standing ? "status" : "alert",
          "aria-live": standing ? "polite" : void 0,
          "data-status": status,
          "data-banner-type": bannerType,
          "data-alignment": alignment,
          css: [rootCss11, statusCss2[status], consumerCss],
          children: /* @__PURE__ */ jsxs("div", { css: [innerCss, compound ? compoundInnerCss : null], children: [
            compound ? iconNode : null,
            /* @__PURE__ */ jsxs("div", { css: [stackCss, alignmentCss[alignment]], children: [
              compound && title ? /* @__PURE__ */ jsx("p", { "data-part": "title", css: titleCss, children: title }) : null,
              /* @__PURE__ */ jsxs("div", { css: rowCss2, children: [
                compound ? null : iconNode,
                /* @__PURE__ */ jsx("p", { "data-part": "body", css: bodyCss3, children })
              ] }),
              actions ? /* @__PURE__ */ jsx("div", { role: "group", "data-part": "actions", css: actionsCss, children: actions }) : null
            ] }),
            dismissable ? /* @__PURE__ */ jsx(
              "button",
              {
                type: "button",
                "aria-label": "Dismiss",
                "data-part": "dismiss",
                css: dismissCss3,
                onClick: handleDismiss,
                children: /* @__PURE__ */ jsx(Icon_default, { name: "close", size: DISMISS_GLYPH })
              }
            ) : null
          ] })
        }
      );
    }
  );
  var AlertBanner_default = AlertBanner;
  var TAB_HEIGHT = "48px";
  var ACTIVE_LINE_CONTENT_HEIGHT = "46px";
  var INDICATOR_HEIGHT = "2px";
  var INDICATOR_RADIUS = "50px";
  var PADDING_BLOCK2 = "12px";
  var PADDING_INLINE2 = "16px";
  var ACTIVE_LINE_PADDING_BOTTOM = "10px";
  var tint = (percent) => `color-mix(in srgb, ${color.fgPrimary} ${percent}%, transparent)`;
  var rootCss12 = {
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    boxSizing: "border-box",
    margin: 0,
    padding: 0,
    fontFamily: fontFamily.sans,
    color: color.fgPrimary
  };
  var tablistCss = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
    height: TAB_HEIGHT,
    flexShrink: 0,
    boxSizing: "border-box",
    margin: 0,
    padding: 0
  };
  var tablistWidthCss = {
    fixed: {
      justifyContent: "space-between",
      gap: 0
    },
    scrollable: {
      justifyContent: "flex-start",
      gap: space["1"],
      overflowX: "auto",
      overflowY: "hidden",
      scrollbarWidth: "none",
      "&::-webkit-scrollbar": { display: "none" }
    }
  };
  var tabCss = {
    position: "relative",
    boxSizing: "border-box",
    height: TAB_HEIGHT,
    minWidth: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "stretch",
    margin: 0,
    padding: 0,
    border: "none",
    borderRadius: 0,
    backgroundColor: "transparent",
    fontFamily: "inherit",
    color: color.fgPrimary,
    cursor: "pointer",
    appearance: "none",
    transitionProperty: "background-color",
    transitionDuration: duration.fast,
    transitionTimingFunction: easing.standard,
    "@media (prefers-reduced-motion: reduce)": {
      transition: "none"
    },
    "&:focus-visible": {
      outline: `2px solid ${color.borderFocus}`,
      outlineOffset: "2px"
    },
    "&:disabled": {
      color: color.fgDisabled,
      cursor: "not-allowed"
    }
  };
  var tabWidthCss = {
    fixed: { flex: "1 1 0" },
    scrollable: { flex: "0 0 auto" }
  };
  var tabTypeCss = {
    line: {
      '&:hover:not(:disabled):not([aria-selected="true"])': {
        backgroundColor: tint(8)
      }
    },
    box: {
      backgroundColor: tint(8),
      borderTopLeftRadius: radius.sm,
      borderTopRightRadius: radius.sm,
      '&:hover:not(:disabled):not([aria-selected="true"])': {
        backgroundColor: tint(12)
      },
      '&[aria-selected="true"]': {
        backgroundColor: color.bgSurface
      }
    }
  };
  var tabLargeRadiusCss = {
    borderTopLeftRadius: radius.sm,
    borderTopRightRadius: radius.sm
  };
  var contentCss = {
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: space["2"],
    height: TAB_HEIGHT,
    padding: `${PADDING_BLOCK2} ${PADDING_INLINE2}`,
    fontWeight: fontWeight.book,
    whiteSpace: "nowrap",
    textAlign: "center",
    color: "inherit"
  };
  var contentSelectedCss = {
    fontWeight: fontWeight.bold
  };
  var contentActiveLineCss = {
    height: ACTIVE_LINE_CONTENT_HEIGHT,
    paddingBottom: ACTIVE_LINE_PADDING_BOTTOM
  };
  var contentSizeCss = {
    small: { fontSize: fontSize["16"], lineHeight: lineHeight["24"] },
    large: { fontSize: fontSize["20"], lineHeight: lineHeight["24"] }
  };
  var iconCss6 = {
    display: "inline-flex",
    flexShrink: 0,
    color: "currentColor",
    "& > svg": { display: "block" }
  };
  var indicatorCss = {
    height: INDICATOR_HEIGHT,
    flexShrink: 0,
    alignSelf: "stretch",
    borderRadius: INDICATOR_RADIUS,
    backgroundColor: color.uiCore700
  };
  var panelCss = {
    "&:focus-visible": {
      outline: `2px solid ${color.borderFocus}`,
      outlineOffset: "2px"
    }
  };
  var tabElementId = (idPrefix, tabId) => `${idPrefix}-tab-${tabId}`;
  var panelElementId = (idPrefix, tabId) => `${idPrefix}-panel-${tabId}`;
  var readUrlParam = (urlParam) => typeof window === "undefined" ? null : new URLSearchParams(window.location.search).get(urlParam);
  var TabPanel = (0, import_react17.forwardRef)(
    function TabPanel2(props, ref) {
      const {
        tabId,
        value,
        idPrefix = "tabs",
        children,
        css: consumerCss,
        ...rest
      } = props;
      const selected = tabId === value;
      return /* @__PURE__ */ jsx(
        "div",
        {
          ref,
          ...rest,
          role: "tabpanel",
          id: panelElementId(idPrefix, tabId),
          "aria-labelledby": tabElementId(idPrefix, tabId),
          tabIndex: 0,
          hidden: !selected,
          css: [panelCss, consumerCss],
          children: selected ? children : null
        }
      );
    }
  );
  var TabsRoot = (0, import_react17.forwardRef)(
    function Tabs(props, ref) {
      const {
        tabs,
        value,
        onChange,
        type = "line",
        widthFunction = "fixed",
        textSize = "small",
        label,
        idPrefix = "tabs",
        urlParam,
        urlHistory = "replace",
        css: consumerCss,
        ...rest
      } = props;
      const tabRefs = (0, import_react17.useRef)([]);
      const enabledIndexes = tabs.map((tab, index) => tab.disabled ? -1 : index).filter((index) => index >= 0);
      const currentIndex = tabs.findIndex((tab) => tab.id === value);
      if (true) {
        if (tabs.length < 2) {
          console.error(
            `Angelou Tabs: a tablist needs at least two tabs, received ${tabs.length}.`
          );
        }
        const withIcon = tabs.filter((tab) => tab.icon).length;
        if (withIcon > 0 && withIcon < tabs.length) {
          console.error(
            "Angelou Tabs: icons are all-or-nothing across the set; either every tab has an icon or none does."
          );
        }
      }
      const selectFromUrl = (0, import_react17.useCallback)(
        (id) => {
          if (id && id !== value && tabs.some((tab) => tab.id === id && !tab.disabled)) {
            onChange == null ? void 0 : onChange(id);
          }
        },
        [tabs, value, onChange]
      );
      const selectFromUrlRef = (0, import_react17.useRef)(selectFromUrl);
      selectFromUrlRef.current = selectFromUrl;
      (0, import_react17.useEffect)(() => {
        if (!urlParam) return;
        selectFromUrlRef.current(readUrlParam(urlParam));
      }, [urlParam]);
      (0, import_react17.useEffect)(() => {
        if (!urlParam || typeof window === "undefined") return;
        const url = new URL(window.location.href);
        if (url.searchParams.get(urlParam) === value) return;
        url.searchParams.set(urlParam, value);
        if (urlHistory === "push") window.history.pushState({}, "", url);
        else window.history.replaceState({}, "", url);
      }, [urlParam, urlHistory, value]);
      (0, import_react17.useEffect)(() => {
        if (!urlParam || urlHistory !== "push" || typeof window === "undefined")
          return;
        const onPopState = () => selectFromUrlRef.current(readUrlParam(urlParam));
        window.addEventListener("popstate", onPopState);
        return () => window.removeEventListener("popstate", onPopState);
      }, [urlParam, urlHistory]);
      const moveTo = (index) => {
        var _a;
        const tab = tabs[index];
        if (!tab || tab.disabled) return;
        onChange == null ? void 0 : onChange(tab.id);
        (_a = tabRefs.current[index]) == null ? void 0 : _a.focus();
      };
      const handleKeyDown = (event) => {
        const at = enabledIndexes.indexOf(currentIndex);
        if (at < 0 || enabledIndexes.length === 0) return;
        let next2;
        if (event.key === "ArrowRight")
          next2 = enabledIndexes[(at + 1) % enabledIndexes.length];
        else if (event.key === "ArrowLeft")
          next2 = enabledIndexes[(at - 1 + enabledIndexes.length) % enabledIndexes.length];
        else if (event.key === "Home") next2 = enabledIndexes[0];
        else if (event.key === "End")
          next2 = enabledIndexes[enabledIndexes.length - 1];
        if (next2 === void 0) return;
        event.preventDefault();
        moveTo(next2);
      };
      const line2 = type === "line";
      return /* @__PURE__ */ jsxs(
        "div",
        {
          ref,
          ...rest,
          "data-type": type,
          "data-width-function": widthFunction,
          "data-text-size": textSize,
          css: [rootCss12, consumerCss],
          children: [
            /* @__PURE__ */ jsx(
              "div",
              {
                role: "tablist",
                "aria-label": label,
                "aria-orientation": "horizontal",
                onKeyDown: handleKeyDown,
                css: [tablistCss, tablistWidthCss[widthFunction]],
                children: tabs.map((tab, index) => {
                  const selected = tab.id === value;
                  return /* @__PURE__ */ jsxs(
                    "button",
                    {
                      ref: (element) => {
                        tabRefs.current[index] = element;
                      },
                      type: "button",
                      role: "tab",
                      id: tabElementId(idPrefix, tab.id),
                      "aria-selected": selected,
                      "aria-controls": panelElementId(idPrefix, tab.id),
                      tabIndex: selected ? 0 : -1,
                      disabled: tab.disabled,
                      onClick: () => {
                        if (!tab.disabled) onChange == null ? void 0 : onChange(tab.id);
                      },
                      css: [
                        tabCss,
                        tabWidthCss[widthFunction],
                        tabTypeCss[type],
                        line2 && textSize === "large" ? tabLargeRadiusCss : null
                      ],
                      children: [
                        /* @__PURE__ */ jsxs(
                          "span",
                          {
                            css: [
                              contentCss,
                              contentSizeCss[textSize],
                              selected ? contentSelectedCss : null,
                              line2 && selected ? contentActiveLineCss : null
                            ],
                            children: [
                              tab.icon ? /* @__PURE__ */ jsx("span", { "aria-hidden": "true", css: iconCss6, children: tab.icon }) : null,
                              tab.label
                            ]
                          }
                        ),
                        line2 && selected ? /* @__PURE__ */ jsx(
                          "span",
                          {
                            "aria-hidden": "true",
                            "data-indicator": "true",
                            css: indicatorCss
                          }
                        ) : null
                      ]
                    },
                    tab.id
                  );
                })
              }
            ),
            line2 ? /* @__PURE__ */ jsx(Divider_default, { "data-row-rule": "true" }) : null
          ]
        }
      );
    }
  );
  var Tabs2 = Object.assign(TabsRoot, { Panel: TabPanel });
  var Tabs_default = Tabs2;
  var ROW_HEIGHT = "40px";
  var ICON_SIZE2 = "24px";
  var MARKER_RADIUS = "2px";
  var TOUCH_TARGET7 = "44px";
  var NOT_DISABLED = ':not(:disabled):not([aria-disabled="true"])';
  var rootCss13 = {
    position: "relative",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: space["2"],
    width: "100%",
    height: ROW_HEIGHT,
    margin: 0,
    padding: `${space["2"]} ${space["3"]}`,
    border: 0,
    borderRadius: 0,
    textAlign: "left",
    backgroundColor: color.bgSurface,
    color: color.uiNeutral500,
    fontFamily: fontFamily.sans,
    fontWeight: fontWeight.book,
    fontSize: fontSize["16"],
    lineHeight: lineHeight["24"],
    cursor: "default",
    appearance: "none",
    transitionProperty: "background-color",
    transitionDuration: duration.fast,
    transitionTimingFunction: easing.standard,
    "@media (prefers-reduced-motion: reduce)": {
      transition: "none"
    },
    [`&:hover${NOT_DISABLED}`]: {
      backgroundColor: color.uiNeutral25
    },
    "&:focus-visible": {
      outline: `2px solid ${color.borderFocus}`,
      outlineOffset: "2px"
    },
    // Touch surfaces get a 44px hit area without changing the 40px row.
    "@media (pointer: coarse)": {
      "&::after": {
        content: '""',
        position: "absolute",
        top: "50%",
        left: "50%",
        width: `max(100%, ${TOUCH_TARGET7})`,
        height: `max(100%, ${TOUCH_TARGET7})`,
        transform: "translate(-50%, -50%)"
      }
    }
  };
  var interactiveCss = {
    cursor: "pointer"
  };
  var selectedCss = {
    backgroundColor: color.uiNeutral25,
    color: color.fgPrimary
  };
  var markerRowCss = {
    padding: `${space["1"]} ${space["3"]} ${space["1"]} ${space["1"]}`
  };
  var disabledCss = {
    color: color.fgDisabled,
    cursor: "not-allowed"
  };
  var markerCss = {
    flex: "none",
    alignSelf: "stretch",
    width: space["1"],
    borderRadius: MARKER_RADIUS,
    backgroundColor: color.uiCore700
  };
  var contentCss2 = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: space["3"],
    flexGrow: 1,
    minWidth: 0
  };
  var contentWithMarkerCss = {
    paddingBlock: space["1"]
  };
  var labelGroupCss = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: space["2"],
    flexGrow: 1,
    minWidth: 0
  };
  var labelCss2 = {
    flexGrow: 1,
    minWidth: 0,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    color: color.uiNeutral500
  };
  var labelSelectedCss = {
    color: color.fgPrimary
  };
  var labelDisabledCss = {
    color: color.fgDisabled
  };
  var altTextCss = {
    flex: "none",
    whiteSpace: "nowrap",
    textAlign: "right",
    color: color.uiNeutral500
  };
  var iconCss7 = {
    display: "inline-flex",
    flex: "none",
    alignItems: "center",
    justifyContent: "center",
    width: ICON_SIZE2,
    height: ICON_SIZE2,
    color: "currentColor",
    "& > svg": { display: "block" }
  };
  var CHECKBOX_GLYPH_SIZE = 24;
  var isDevelopment3 = true;
  var ListItem = (0, import_react18.forwardRef)(
    function ListItem2(props, ref) {
      const {
        type = "text",
        selected = false,
        leftIcon,
        rightIcon,
        altText,
        disabled = false,
        role,
        as,
        onClick,
        children,
        css: consumerCss,
        ...rest
      } = props;
      const option = role === "option";
      const checkbox = type === "checkbox";
      const marker = selected && !checkbox;
      const element = as != null ? as : option ? "div" : "button";
      const isButton = element === "button";
      const acceptsClick = isButton || option;
      if (isDevelopment3 && onClick && !acceptsClick) {
        console.error(
          `Angelou ListItem: as="${element}" cannot take an onClick. A row that acts renders as a button (the default).`
        );
      }
      const handleClick = onClick && acceptsClick ? (event) => {
        if (disabled) {
          event.preventDefault();
          return;
        }
        onClick(event);
      } : void 0;
      let resolvedRole = role;
      if (checkbox && role === "menuitem") resolvedRole = "menuitemcheckbox";
      const selectionAria = {};
      if (option) {
        selectionAria["aria-selected"] = selected;
      } else {
        if (selected) selectionAria["aria-current"] = "true";
        if (checkbox && resolvedRole === "menuitemcheckbox")
          selectionAria["aria-checked"] = selected;
        if (checkbox && !role && isButton)
          selectionAria["aria-pressed"] = selected;
      }
      const leading = checkbox || leftIcon ? /* @__PURE__ */ jsx("span", { "aria-hidden": "true", css: iconCss7, "data-part": "left-icon", children: checkbox ? /* @__PURE__ */ jsx(
        Icon_default,
        {
          name: selected ? "checkbox-filled" : "checkbox-hollow",
          size: CHECKBOX_GLYPH_SIZE
        }
      ) : leftIcon }) : null;
      const Root = element;
      const rootRef = ref;
      return /* @__PURE__ */ jsxs(
        Root,
        {
          ref: rootRef,
          ...rest,
          ...selectionAria,
          type: isButton ? "button" : void 0,
          role: resolvedRole,
          disabled: isButton && disabled ? true : void 0,
          "aria-disabled": !isButton && disabled ? "true" : void 0,
          "data-type": type,
          "data-selected": selected ? "true" : void 0,
          "data-disabled": disabled ? "true" : void 0,
          css: [
            rootCss13,
            handleClick ? interactiveCss : null,
            selected ? selectedCss : null,
            marker ? markerRowCss : null,
            disabled ? disabledCss : null,
            consumerCss
          ],
          onClick: handleClick,
          children: [
            marker ? /* @__PURE__ */ jsx("span", { "aria-hidden": "true", css: markerCss, "data-part": "marker" }) : null,
            /* @__PURE__ */ jsxs("span", { css: [contentCss2, marker ? contentWithMarkerCss : null], children: [
              /* @__PURE__ */ jsxs("span", { css: labelGroupCss, children: [
                leading,
                /* @__PURE__ */ jsx(
                  "span",
                  {
                    css: [
                      labelCss2,
                      selected ? labelSelectedCss : null,
                      disabled ? labelDisabledCss : null
                    ],
                    "data-part": "label",
                    children
                  }
                )
              ] }),
              altText ? /* @__PURE__ */ jsx(
                "span",
                {
                  css: [altTextCss, disabled ? labelDisabledCss : null],
                  "data-part": "alt-text",
                  children: altText
                }
              ) : null,
              rightIcon ? /* @__PURE__ */ jsx("span", { "aria-hidden": "true", css: iconCss7, "data-part": "right-icon", children: rightIcon }) : null
            ] })
          ]
        }
      );
    }
  );
  var ListItem_default = ListItem;
  var REGION_MAX_HEIGHT = "420px";
  var TOUCH_TARGET8 = "44px";
  var CHECKBOX_SIZE = "18px";
  var CARD_BREAKPOINT = "(max-width: 768px)";
  var PADDING_BLOCK3 = {
    comfortable: "14px",
    compact: space["2"]
  };
  var focusRing3 = {
    "&:focus-visible": {
      outline: `2px solid ${color.borderFocus}`,
      outlineOffset: "2px"
    }
  };
  var visuallyHidden = {
    position: "absolute",
    width: "1px",
    height: "1px",
    padding: 0,
    margin: "-1px",
    overflow: "hidden",
    clip: "rect(0 0 0 0)",
    whiteSpace: "nowrap",
    border: 0
  };
  var rootCss14 = {
    display: "flex",
    flexDirection: "column",
    gap: space["3"],
    boxSizing: "border-box",
    width: "100%",
    maxWidth: "100%",
    fontFamily: fontFamily.sans,
    fontSize: fontSize["14"],
    lineHeight: lineHeight["20"],
    color: color.uiNeutral600
  };
  var liveRegionCss = visuallyHidden;
  var filterGroupCss = {
    display: "flex",
    flexWrap: "wrap",
    gap: space["2"]
  };
  var regionCss2 = {
    position: "relative",
    boxSizing: "border-box",
    maxWidth: "100%",
    maxHeight: REGION_MAX_HEIGHT,
    overflow: "auto",
    border: `1px solid ${color.uiNeutral100}`,
    borderRadius: radius.sm,
    backgroundColor: color.uiWhite,
    ...focusRing3
  };
  var tableCss = {
    width: "100%",
    borderCollapse: "separate",
    borderSpacing: 0,
    captionSide: "top"
  };
  var captionCss = {
    padding: `${space["2"]} ${space["3"]}`,
    textAlign: "left",
    fontSize: fontSize["14"],
    lineHeight: lineHeight["20"],
    color: color.uiNeutral600
  };
  var headCss = (sticky) => ({
    ...sticky ? { position: "sticky", top: 0, zIndex: 1 } : {},
    "& th": {
      padding: 0,
      borderBottom: `1px solid ${color.uiNeutral100}`,
      backgroundColor: color.uiNeutral25,
      fontSize: fontSize["14"],
      lineHeight: lineHeight["20"],
      fontWeight: fontWeight.bold,
      color: color.uiNeutral600,
      textAlign: "left",
      verticalAlign: "middle"
    },
    '& th[data-align="right"]': {
      textAlign: "right"
    }
  });
  var headerLabelCss = (density) => ({
    display: "block",
    padding: `${PADDING_BLOCK3[density]} ${space["3"]}`
  });
  var sortButtonCss = (density) => ({
    position: "relative",
    display: "flex",
    alignItems: "center",
    gap: space["1"],
    width: "100%",
    boxSizing: "border-box",
    margin: 0,
    padding: `${PADDING_BLOCK3[density]} ${space["3"]}`,
    border: 0,
    background: "transparent",
    font: "inherit",
    color: "inherit",
    textAlign: "inherit",
    cursor: "pointer",
    appearance: "none",
    transitionProperty: "background-color",
    transitionDuration: duration.fast,
    transitionTimingFunction: easing.standard,
    "@media (prefers-reduced-motion: reduce)": {
      transition: "none"
    },
    "&:hover": {
      backgroundColor: color.uiNeutral50
    },
    '&[data-align="right"]': {
      justifyContent: "flex-end"
    },
    ...focusRing3,
    // Touch surfaces get a 44px hit area without changing the visual box.
    "@media (pointer: coarse)": {
      "&::after": {
        content: '""',
        position: "absolute",
        top: "50%",
        left: "50%",
        width: `max(100%, ${TOUCH_TARGET8})`,
        height: `max(100%, ${TOUCH_TARGET8})`,
        transform: "translate(-50%, -50%)"
      }
    }
  });
  var sortIconCss = (active) => ({
    display: "inline-flex",
    flex: "none",
    color: active ? color.uiCore500 : color.uiNeutral300
  });
  var bodyCss4 = (density) => ({
    "& td, & th": {
      padding: `${PADDING_BLOCK3[density]} ${space["3"]}`,
      borderBottom: `1px solid ${color.uiNeutral100}`,
      fontSize: fontSize["14"],
      lineHeight: lineHeight["20"],
      fontWeight: fontWeight.book,
      color: color.uiNeutral600,
      textAlign: "left",
      verticalAlign: "middle",
      transitionProperty: "background-color",
      transitionDuration: duration.fast,
      transitionTimingFunction: easing.standard,
      "@media (prefers-reduced-motion: reduce)": {
        transition: "none"
      }
    },
    "& tr:last-of-type > td, & tr:last-of-type > th": {
      borderBottom: 0
    },
    '& th[scope="row"]': {
      fontWeight: fontWeight.medium
    },
    '& [data-align="right"]': {
      textAlign: "right"
    },
    '& [data-numeric="true"]': {
      fontVariantNumeric: "tabular-nums"
    },
    '& tr[data-selected="true"] > td, & tr[data-selected="true"] > th': {
      backgroundColor: color.uiCore25
    }
  });
  var selectionCellCss = {
    width: TOUCH_TARGET8,
    "&&": { padding: 0 }
  };
  var checkboxLabelCss = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    minWidth: TOUCH_TARGET8,
    minHeight: TOUCH_TARGET8,
    cursor: "pointer"
  };
  var checkboxCss = {
    width: CHECKBOX_SIZE,
    height: CHECKBOX_SIZE,
    margin: 0,
    accentColor: color.uiCore500,
    cursor: "pointer",
    ...focusRing3
  };
  var messageCellCss = {
    "&&": {
      padding: `${space["5"]} ${space["3"]}`,
      textAlign: "center",
      borderBottom: 0
    }
  };
  var messageCss2 = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: space["3"],
    margin: 0,
    color: color.uiNeutral600
  };
  var pulse = keyframes({
    "0%, 100%": { opacity: 1 },
    "50%": { opacity: 0.5 }
  });
  var skeletonCss = {
    display: "block",
    width: "100%",
    height: lineHeight["20"],
    borderRadius: radius.xs,
    backgroundColor: color.uiNeutral100,
    animationName: pulse,
    animationDuration: `calc(${duration.slow} * 4)`,
    animationTimingFunction: easing.standard,
    animationIterationCount: "infinite",
    "@media (prefers-reduced-motion: reduce)": {
      animation: "none"
    }
  };
  var cardCaptionCss = {
    margin: 0,
    fontSize: fontSize["14"],
    lineHeight: lineHeight["20"],
    color: color.uiNeutral600
  };
  var cardToolbarCss = {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    gap: space["3"]
  };
  var sortSelectLabelCss = {
    display: "flex",
    alignItems: "center",
    gap: space["2"],
    fontSize: fontSize["14"],
    lineHeight: lineHeight["20"],
    color: color.uiNeutral600
  };
  var sortSelectCss = {
    height: TOUCH_TARGET8,
    minWidth: 0,
    boxSizing: "border-box",
    padding: `0 ${space["3"]}`,
    border: `1px solid ${color.uiNeutral100}`,
    borderRadius: radius.sm,
    backgroundColor: color.uiWhite,
    fontFamily: fontFamily.sans,
    fontSize: fontSize["16"],
    lineHeight: lineHeight["24"],
    color: color.uiNeutral700,
    ...focusRing3
  };
  var selectAllCardLabelCss = {
    ...checkboxLabelCss,
    justifyContent: "flex-start",
    gap: space["2"],
    paddingInline: space["1"],
    color: color.uiNeutral600
  };
  var cardListCss = {
    display: "flex",
    flexDirection: "column",
    gap: space["2"],
    margin: 0,
    padding: 0,
    maxWidth: "100%",
    listStyle: "none",
    overflowWrap: "anywhere"
  };
  var cardCss = {
    boxSizing: "border-box",
    padding: space["3"],
    border: `1px solid ${color.uiNeutral100}`,
    borderRadius: radius.sm,
    backgroundColor: color.uiWhite,
    transitionProperty: "background-color",
    transitionDuration: duration.fast,
    transitionTimingFunction: easing.standard,
    "@media (prefers-reduced-motion: reduce)": {
      transition: "none"
    },
    '&[data-selected="true"]': {
      backgroundColor: color.uiCore25
    }
  };
  var cardHeadCss = {
    display: "flex",
    alignItems: "center",
    gap: space["2"],
    minHeight: TOUCH_TARGET8
  };
  var cardTitleCss = {
    flex: "1 1 auto",
    margin: 0,
    fontSize: fontSize["16"],
    lineHeight: lineHeight["24"],
    fontWeight: fontWeight.medium,
    color: color.uiNeutral700
  };
  var cardStatusCss = {
    flex: "none",
    fontSize: fontSize["14"],
    lineHeight: lineHeight["20"],
    color: color.uiNeutral500
  };
  var cardFieldsCss = {
    display: "grid",
    gridTemplateColumns: "minmax(0, 1fr) auto",
    gap: `${space["1"]} ${space["3"]}`,
    margin: `${space["2"]} 0 0`,
    "& > div": {
      display: "contents"
    },
    "& dt": {
      color: color.uiNeutral500
    },
    "& dd": {
      margin: 0,
      textAlign: "right",
      color: color.uiNeutral600
    },
    '& dd[data-numeric="true"]': {
      fontVariantNumeric: "tabular-nums"
    }
  };
  var cardMessageCss = {
    ...messageCss2,
    padding: `${space["5"]} ${space["3"]}`,
    border: `1px solid ${color.uiNeutral100}`,
    borderRadius: radius.sm,
    backgroundColor: color.uiWhite,
    textAlign: "center"
  };
  var matches = () => typeof window !== "undefined" && typeof window.matchMedia === "function" && window.matchMedia(CARD_BREAKPOINT).matches;
  var useCardLayout = (force) => {
    const [narrow, setNarrow] = (0, import_react21.useState)(matches);
    (0, import_react21.useEffect)(() => {
      if (typeof window === "undefined" || typeof window.matchMedia !== "function")
        return void 0;
      const query = window.matchMedia(CARD_BREAKPOINT);
      const update = () => setNarrow(query.matches);
      update();
      query.addEventListener("change", update);
      return () => query.removeEventListener("change", update);
    }, []);
    return force || narrow;
  };
  var SKELETON_ROWS = 5;
  var SORT_ICON_SIZE = 14;
  var DEFAULT_EMPTY = "Nothing to show yet.";
  var ERROR_MESSAGE = "We could not load this data. Nothing has been lost.";
  var directionWord = (direction) => direction === "asc" ? "ascending" : "descending";
  var cellText = (value) => typeof value === "string" || typeof value === "number" ? String(value) : "";
  var compareValues = (a, b) => {
    if (typeof a === "number" && typeof b === "number") return a - b;
    return cellText(a).localeCompare(cellText(b), void 0, {
      numeric: true,
      sensitivity: "base"
    });
  };
  var sortRows = (rows, sort) => {
    if (!sort) return rows;
    const sign = sort.direction === "asc" ? 1 : -1;
    return [...rows].sort(
      (a, b) => sign * compareValues(a[sort.key], b[sort.key])
    );
  };
  var cellContent = (column2, row) => column2.render ? column2.render(row) : row[column2.key];
  var alignOf = (column2) => {
    var _a;
    return (_a = column2.align) != null ? _a : column2.numeric ? "right" : "left";
  };
  var SelectAllCheckbox = ({
    visibleIds,
    selected,
    onToggle
  }) => {
    const ref = (0, import_react19.useRef)(null);
    const selectedVisible = visibleIds.filter((id) => selected.has(id)).length;
    const all = visibleIds.length > 0 && selectedVisible === visibleIds.length;
    const partial = selectedVisible > 0 && !all;
    (0, import_react19.useEffect)(() => {
      if (ref.current) ref.current.indeterminate = partial;
    }, [partial]);
    return /* @__PURE__ */ jsx(
      "input",
      {
        ref,
        type: "checkbox",
        "aria-label": "Select all rows",
        checked: all,
        disabled: visibleIds.length === 0,
        onChange: onToggle,
        css: checkboxCss
      }
    );
  };
  var Skeleton = () => /* @__PURE__ */ jsx("span", { "aria-hidden": "true", "data-part": "skeleton", css: skeletonCss });
  var Table = (0, import_react19.forwardRef)(
    function Table2(props, ref) {
      const {
        columns,
        rows,
        caption,
        rowHeaderKey,
        sort,
        onSortChange,
        selectable = false,
        selectedIds,
        onSelectionChange,
        density = "comfortable",
        stickyHeader = true,
        state = "ready",
        emptyMessage,
        onRetry,
        statusFilters,
        onStatusFilterChange,
        statusKey,
        statusOptions,
        forceCards = false,
        css: consumerCss,
        ...rest
      } = props;
      const cards = useCardLayout(forceCards);
      const captionId = (0, import_react19.useId)();
      const [announcement, setAnnouncement] = (0, import_react19.useState)("");
      const selected = (0, import_react19.useMemo)(() => new Set(selectedIds != null ? selectedIds : []), [selectedIds]);
      const activeFilters = statusFilters != null ? statusFilters : [];
      const visibleRows = (0, import_react19.useMemo)(() => {
        const filtered2 = statusKey && activeFilters.length > 0 ? rows.filter(
          (row) => activeFilters.includes(cellText(row[statusKey]))
        ) : rows;
        return sortRows(filtered2, sort);
      }, [rows, statusKey, activeFilters, sort]);
      const visibleIds = (0, import_react19.useMemo)(
        () => visibleRows.map((row) => row.id),
        [visibleRows]
      );
      const sortColumn = sort ? columns.find((column2) => column2.key === sort.key) : void 0;
      const filtered = Boolean(statusKey) && activeFilters.length > 0;
      const captionText = [
        caption,
        sort && sortColumn ? `, sorted by ${sortColumn.label.toLocaleLowerCase()}, ${directionWord(sort.direction)}` : "",
        filtered ? ` \u2014 ${visibleRows.length} of ${rows.length} rows, filtered by ${activeFilters.join(", ")}` : ""
      ].join("");
      (0, import_react19.useEffect)(() => {
        if (state === "error") setAnnouncement(ERROR_MESSAGE);
      }, [state]);
      const requestSort = (0, import_react19.useCallback)(
        (column2) => {
          const next2 = (sort == null ? void 0 : sort.key) === column2.key ? {
            key: column2.key,
            direction: sort.direction === "asc" ? "desc" : "asc"
          } : { key: column2.key, direction: "asc" };
          onSortChange == null ? void 0 : onSortChange(next2);
          setAnnouncement(
            `Sorted by ${column2.label.toLocaleLowerCase()}, ${directionWord(next2.direction)}`
          );
        },
        [sort, onSortChange]
      );
      const commitSelection = (0, import_react19.useCallback)(
        (ids) => {
          onSelectionChange == null ? void 0 : onSelectionChange(ids);
          const count = ids.filter((id) => visibleIds.includes(id)).length;
          setAnnouncement(`${count} of ${visibleIds.length} rows selected`);
        },
        [onSelectionChange, visibleIds]
      );
      const toggleRow = (id) => {
        const next2 = selected.has(id) ? (selectedIds != null ? selectedIds : []).filter((selectedId) => selectedId !== id) : [...selectedIds != null ? selectedIds : [], id];
        commitSelection(next2);
      };
      const toggleAll = () => {
        const allVisible = visibleIds.every((id) => selected.has(id));
        const outside = (selectedIds != null ? selectedIds : []).filter(
          (id) => !visibleIds.includes(id)
        );
        commitSelection(allVisible ? outside : [...outside, ...visibleIds]);
      };
      const toggleFilter = (status) => {
        const next2 = activeFilters.includes(status) ? activeFilters.filter((value) => value !== status) : [...activeFilters, status];
        onStatusFilterChange == null ? void 0 : onStatusFilterChange(next2);
      };
      const rowHeaderText = (row) => cellText(row[rowHeaderKey]);
      const filterGroup = statusOptions && statusOptions.length > 0 ? /* @__PURE__ */ jsx("div", { role: "group", "aria-label": "Filter by status", css: filterGroupCss, children: statusOptions.map((status) => /* @__PURE__ */ jsx(
        Chip_default,
        {
          active: activeFilters.includes(status),
          onClick: () => toggleFilter(status),
          children: status
        },
        status
      )) }) : null;
      const liveRegion = /* @__PURE__ */ jsx(
        "div",
        {
          role: "status",
          "aria-live": "polite",
          "aria-atomic": "true",
          css: liveRegionCss,
          children: announcement
        }
      );
      const bodyMessage = (variant) => variant === "error" ? /* @__PURE__ */ jsxs(Fragment2, { children: [
        /* @__PURE__ */ jsx("span", { children: ERROR_MESSAGE }),
        onRetry ? /* @__PURE__ */ jsx(Button_default, { variant: "secondary", size: "md", onClick: onRetry, children: "Retry" }) : null
      ] }) : /* @__PURE__ */ jsx("span", { children: emptyMessage != null ? emptyMessage : DEFAULT_EMPTY });
      const rowCheckbox = (row) => /* @__PURE__ */ jsx("label", { css: checkboxLabelCss, children: /* @__PURE__ */ jsx(
        "input",
        {
          type: "checkbox",
          "aria-label": `Select ${rowHeaderText(row)}`,
          checked: selected.has(row.id),
          onChange: () => toggleRow(row.id),
          css: checkboxCss
        }
      ) });
      if (cards) {
        return /* @__PURE__ */ jsxs(
          "div",
          {
            ref,
            ...rest,
            "data-layout": "cards",
            css: [rootCss14, consumerCss],
            children: [
              filterGroup,
              liveRegion,
              /* @__PURE__ */ jsx("p", { id: captionId, css: cardCaptionCss, children: captionText }),
              /* @__PURE__ */ jsx(
                CardToolbar,
                {
                  columns,
                  sort,
                  onSortChange,
                  announce: setAnnouncement,
                  selectable,
                  visibleIds,
                  selected,
                  onToggleAll: toggleAll
                }
              ),
              state === "ready" || state === "loading" ? /* @__PURE__ */ jsx(
                "ul",
                {
                  "aria-labelledby": captionId,
                  "aria-busy": state === "loading" ? "true" : void 0,
                  css: cardListCss,
                  children: state === "loading" ? Array.from({ length: SKELETON_ROWS }, (_, index) => /* @__PURE__ */ jsx("li", { css: cardCss, children: /* @__PURE__ */ jsx(Skeleton, {}) }, index)) : visibleRows.map((row) => {
                    var _a;
                    return /* @__PURE__ */ jsxs(
                      "li",
                      {
                        "data-selected": selected.has(row.id) ? "true" : void 0,
                        css: cardCss,
                        children: [
                          /* @__PURE__ */ jsxs("div", { css: cardHeadCss, children: [
                            selectable ? rowCheckbox(row) : null,
                            /* @__PURE__ */ jsx("p", { css: cardTitleCss, children: cellContent(
                              (_a = columns.find((c) => c.key === rowHeaderKey)) != null ? _a : {
                                key: rowHeaderKey,
                                label: rowHeaderKey
                              },
                              row
                            ) }),
                            statusKey ? /* @__PURE__ */ jsx("span", { css: cardStatusCss, children: cellText(row[statusKey]) }) : null
                          ] }),
                          /* @__PURE__ */ jsx("dl", { css: cardFieldsCss, children: columns.filter(
                            (column2) => column2.key !== rowHeaderKey && column2.key !== statusKey
                          ).map((column2) => /* @__PURE__ */ jsxs("div", { children: [
                            /* @__PURE__ */ jsx("dt", { children: column2.label }),
                            /* @__PURE__ */ jsx(
                              "dd",
                              {
                                "data-numeric": column2.numeric ? "true" : void 0,
                                children: cellContent(column2, row)
                              }
                            )
                          ] }, column2.key)) })
                        ]
                      },
                      row.id
                    );
                  })
                }
              ) : /* @__PURE__ */ jsx("div", { css: cardMessageCss, children: bodyMessage(state) })
            ]
          }
        );
      }
      const columnCount = columns.length + (selectable ? 1 : 0);
      return /* @__PURE__ */ jsxs("div", { ref, ...rest, "data-layout": "table", css: [rootCss14, consumerCss], children: [
        filterGroup,
        liveRegion,
        /* @__PURE__ */ jsx(
          "div",
          {
            role: "region",
            "aria-label": caption,
            "aria-busy": state === "loading" ? "true" : void 0,
            tabIndex: 0,
            "data-density": density,
            css: regionCss2,
            children: /* @__PURE__ */ jsxs("table", { css: tableCss, children: [
              /* @__PURE__ */ jsx("caption", { css: captionCss, children: captionText }),
              /* @__PURE__ */ jsx("thead", { css: headCss(stickyHeader), children: /* @__PURE__ */ jsxs("tr", { children: [
                selectable ? /* @__PURE__ */ jsx("th", { scope: "col", css: selectionCellCss, children: /* @__PURE__ */ jsx("span", { css: checkboxLabelCss, children: /* @__PURE__ */ jsx(
                  SelectAllCheckbox,
                  {
                    visibleIds,
                    selected,
                    onToggle: toggleAll
                  }
                ) }) }) : null,
                columns.map((column2) => {
                  const active = (sort == null ? void 0 : sort.key) === column2.key;
                  const align = alignOf(column2);
                  return /* @__PURE__ */ jsx(
                    "th",
                    {
                      scope: "col",
                      "data-align": align,
                      "aria-sort": column2.sortable ? active && sort ? sort.direction === "asc" ? "ascending" : "descending" : "none" : void 0,
                      style: column2.width ? { width: column2.width } : void 0,
                      children: column2.sortable ? /* @__PURE__ */ jsxs(
                        "button",
                        {
                          type: "button",
                          "data-align": align,
                          onClick: () => requestSort(column2),
                          css: sortButtonCss(density),
                          children: [
                            column2.label,
                            /* @__PURE__ */ jsx("span", { css: sortIconCss(Boolean(active)), children: /* @__PURE__ */ jsx(
                              Icon_default,
                              {
                                name: active && sort ? sort.direction === "asc" ? "arrow-up" : "arrow-down" : "sort",
                                size: SORT_ICON_SIZE
                              }
                            ) })
                          ]
                        }
                      ) : /* @__PURE__ */ jsx("span", { css: headerLabelCss(density), children: column2.label })
                    },
                    column2.key
                  );
                })
              ] }) }),
              /* @__PURE__ */ jsx("tbody", { css: bodyCss4(density), children: state === "loading" ? Array.from({ length: SKELETON_ROWS }, (_, index) => /* @__PURE__ */ jsxs("tr", { children: [
                selectable ? /* @__PURE__ */ jsx("td", { css: selectionCellCss }) : null,
                columns.map(
                  (column2) => column2.key === rowHeaderKey ? /* @__PURE__ */ jsxs("th", { scope: "row", children: [
                    /* @__PURE__ */ jsx("span", { css: liveRegionCss, children: "Loading" }),
                    /* @__PURE__ */ jsx(Skeleton, {})
                  ] }, column2.key) : /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx(Skeleton, {}) }, column2.key)
                )
              ] }, index)) : state === "ready" ? visibleRows.map((row) => /* @__PURE__ */ jsxs(
                "tr",
                {
                  "data-selected": selected.has(row.id) ? "true" : void 0,
                  children: [
                    selectable ? /* @__PURE__ */ jsx("td", { css: selectionCellCss, children: rowCheckbox(row) }) : null,
                    columns.map((column2) => {
                      const align = alignOf(column2);
                      const numeric = column2.numeric ? "true" : void 0;
                      return column2.key === rowHeaderKey ? /* @__PURE__ */ jsx(
                        "th",
                        {
                          scope: "row",
                          "data-align": align,
                          "data-numeric": numeric,
                          children: cellContent(column2, row)
                        },
                        column2.key
                      ) : /* @__PURE__ */ jsx(
                        "td",
                        {
                          "data-align": align,
                          "data-numeric": numeric,
                          children: cellContent(column2, row)
                        },
                        column2.key
                      );
                    })
                  ]
                },
                row.id
              )) : /* @__PURE__ */ jsx("tr", { children: /* @__PURE__ */ jsx("td", { colSpan: columnCount, css: messageCellCss, children: /* @__PURE__ */ jsx("div", { css: messageCss2, children: bodyMessage(state) }) }) }) })
            ] })
          }
        )
      ] });
    }
  );
  var CardToolbar = ({
    columns,
    sort,
    onSortChange,
    announce,
    selectable,
    visibleIds,
    selected,
    onToggleAll
  }) => {
    const sortable = columns.filter((column2) => column2.sortable);
    if (sortable.length === 0 && !selectable) return null;
    const value = sort ? `${sort.key}:${sort.direction}` : "";
    const handleChange = (event) => {
      const [key, direction] = event.target.value.split(":");
      const column2 = sortable.find((c) => c.key === key);
      if (!column2 || direction !== "asc" && direction !== "desc") return;
      onSortChange == null ? void 0 : onSortChange({ key: column2.key, direction });
      announce(
        `Sorted by ${column2.label.toLocaleLowerCase()}, ${directionWord(direction)}`
      );
    };
    return /* @__PURE__ */ jsxs("div", { css: cardToolbarCss, children: [
      sortable.length > 0 ? /* @__PURE__ */ jsxs("label", { css: sortSelectLabelCss, children: [
        "Sort by",
        /* @__PURE__ */ jsxs("select", { value, onChange: handleChange, css: sortSelectCss, children: [
          !sort ? /* @__PURE__ */ jsx("option", { value: "", children: "Default order" }) : null,
          sortable.flatMap((column2) => [
            /* @__PURE__ */ jsxs("option", { value: `${column2.key}:asc`, children: [
              column2.label,
              ", ascending"
            ] }, `${column2.key}:asc`),
            /* @__PURE__ */ jsxs("option", { value: `${column2.key}:desc`, children: [
              column2.label,
              ", descending"
            ] }, `${column2.key}:desc`)
          ])
        ] })
      ] }) : null,
      selectable ? /* @__PURE__ */ jsxs("label", { css: selectAllCardLabelCss, children: [
        /* @__PURE__ */ jsx(
          SelectAllCheckbox,
          {
            visibleIds,
            selected,
            onToggle: onToggleAll
          }
        ),
        "Select all"
      ] }) : null
    ] });
  };
  var Table_default = Table;
  var WIDTH = {
    sm: "400px",
    md: "560px",
    lg: "720px"
  };
  var WIDTH_CAP = "calc(100vw - 32px)";
  var BODY_MAX_HEIGHT = "calc(100vh - 128px)";
  var CLOSE_BOX = "32px";
  var TOUCH_TARGET9 = "44px";
  var LG_ACTION_HEIGHT = "48px";
  var SHEET_SCRIM_GAP = "24px";
  var SHEET_MEDIA = "@media (max-width: 768px)";
  var COARSE_MEDIA = "@media (pointer: coarse)";
  var REDUCED_MOTION_MEDIA = "@media (prefers-reduced-motion: reduce)";
  var fadeIn2 = keyframes({
    from: { opacity: 0 },
    to: { opacity: 1 }
  });
  var surfaceIn = keyframes({
    from: { opacity: 0, transform: "scale(0.97)" },
    to: { opacity: 1, transform: "scale(1)" }
  });
  var sheetIn = keyframes({
    from: { opacity: 0, transform: `translateY(${SHEET_SCRIM_GAP})` },
    to: { opacity: 1, transform: "translateY(0)" }
  });
  var motion = {
    animationDuration: duration.base,
    animationTimingFunction: easing.standard,
    animationFillMode: "both",
    '&[data-state="closing"]': {
      animationDirection: "reverse",
      pointerEvents: "none"
    }
  };
  var scrimCss = {
    position: "fixed",
    inset: 0,
    zIndex: 1e3,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxSizing: "border-box",
    padding: space["3"],
    // anatomy.scrim: --ui-neutral-700 at 48%
    backgroundColor: `color-mix(in srgb, ${color.uiNeutral700} 48%, transparent)`,
    animationName: fadeIn2,
    ...motion,
    [SHEET_MEDIA]: {
      alignItems: "flex-end",
      padding: `${SHEET_SCRIM_GAP} 0 0`
    }
  };
  var inlineScrimCss = {
    position: "relative",
    inset: "auto",
    zIndex: "auto",
    minHeight: "100%"
  };
  var surfaceCss = {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    boxSizing: "border-box",
    maxWidth: WIDTH_CAP,
    maxHeight: "100%",
    margin: 0,
    padding: 0,
    border: 0,
    borderRadius: radius.lg,
    backgroundColor: color.uiWhite,
    color: color.fgPrimary,
    boxShadow: shadow.lg,
    fontFamily: fontFamily.sans,
    overflow: "hidden",
    outline: "none",
    animationName: surfaceIn,
    ...motion,
    "&:focus-visible": {
      outline: `2px solid ${color.borderFocus}`,
      outlineOffset: "2px"
    },
    [REDUCED_MOTION_MEDIA]: {
      animationName: fadeIn2,
      transform: "none"
    },
    [SHEET_MEDIA]: {
      width: "100%",
      maxWidth: "100%",
      maxHeight: `calc(100vh - ${SHEET_SCRIM_GAP})`,
      alignSelf: "flex-end",
      borderRadius: `${radius.lg} ${radius.lg} 0 0`,
      animationName: sheetIn,
      [REDUCED_MOTION_MEDIA]: {
        animationName: fadeIn2
      }
    }
  };
  var widthCss = {
    sm: { width: WIDTH.sm },
    md: { width: WIDTH.md },
    lg: { width: WIDTH.lg }
  };
  var headerCss = {
    display: "flex",
    alignItems: "flex-start",
    gap: space["3"],
    flex: "none",
    padding: `${space["4"]} ${space["4"]} ${space["3"]}`
  };
  var titleCss2 = {
    flex: 1,
    minWidth: 0,
    margin: 0,
    fontFamily: fontFamily.display,
    fontSize: fontSize["24"],
    lineHeight: lineHeight["32"],
    fontWeight: fontWeight.bold,
    color: color.fgPrimary,
    overflowWrap: "anywhere"
  };
  var closeCss2 = {
    position: "relative",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    flex: "none",
    boxSizing: "border-box",
    width: CLOSE_BOX,
    height: CLOSE_BOX,
    margin: 0,
    padding: 0,
    border: 0,
    borderRadius: radius.sm,
    backgroundColor: "transparent",
    color: color.fgPrimary,
    cursor: "pointer",
    appearance: "none",
    transitionProperty: "background-color",
    transitionDuration: duration.fast,
    transitionTimingFunction: easing.standard,
    [REDUCED_MOTION_MEDIA]: {
      transition: "none"
    },
    "&:hover:not(:disabled)": {
      backgroundColor: color.uiNeutral50
    },
    "&:active:not(:disabled)": {
      backgroundColor: color.uiNeutral100
    },
    "&:focus-visible": {
      outline: `2px solid ${color.borderFocus}`,
      outlineOffset: "2px"
    },
    "&:disabled": {
      color: color.fgDisabled,
      cursor: "not-allowed"
    },
    // responsive.touch: the box grows to 44px below Medium; the 20px icon does not.
    [SHEET_MEDIA]: {
      width: TOUCH_TARGET9,
      height: TOUCH_TARGET9
    },
    [COARSE_MEDIA]: {
      width: TOUCH_TARGET9,
      height: TOUCH_TARGET9
    }
  };
  var bodyCss5 = {
    flex: "1 1 auto",
    minHeight: 0,
    maxHeight: BODY_MAX_HEIGHT,
    padding: `0 ${space["4"]} ${space["4"]}`,
    overflowY: "auto",
    overflowX: "hidden",
    overflowWrap: "anywhere",
    fontFamily: fontFamily.sans,
    fontSize: fontSize["16"],
    lineHeight: lineHeight["24"],
    fontWeight: fontWeight.book,
    color: color.uiNeutral600,
    "& > p:first-of-type": { marginTop: 0 },
    "& > p:last-of-type": { marginBottom: 0 }
  };
  var errorCss = {
    flex: "none",
    margin: 0,
    padding: `0 ${space["4"]} ${space["3"]}`,
    fontSize: fontSize["14"],
    lineHeight: lineHeight["20"],
    color: color.statusDanger600
  };
  var footerCss = {
    display: "flex",
    flex: "none",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: space["2"],
    padding: `${space["3"]} ${space["4"]}`,
    // Cancel then confirm in DOM order; below Medium the column reverses so
    // confirm sits on top without changing that order.
    [SHEET_MEDIA]: {
      flexDirection: "column-reverse",
      alignItems: "stretch"
    }
  };
  var actionCss = {
    [SHEET_MEDIA]: {
      width: "100%",
      minHeight: LG_ACTION_HEIGHT
    }
  };
  var visuallyHiddenCss = {
    position: "absolute",
    width: "1px",
    height: "1px",
    margin: "-1px",
    padding: 0,
    border: 0,
    overflow: "hidden",
    clip: "rect(0 0 0 0)",
    whiteSpace: "nowrap"
  };
  var EXIT_MS2 = parseInt(tokenValues["--dur-base"], 10);
  var FOCUSABLE = [
    "a[href]",
    "button:not(:disabled)",
    "input:not(:disabled):not([type='hidden'])",
    "select:not(:disabled)",
    "textarea:not(:disabled)",
    "[tabindex]:not([tabindex='-1'])"
  ].join(",");
  var openCount = 0;
  var setRefs3 = (...refs) => (node2) => {
    for (const ref of refs) {
      if (typeof ref === "function") ref(node2);
      else if (ref && "current" in ref)
        ref.current = node2;
    }
  };
  var focusables = (root) => Array.from(root.querySelectorAll(FOCUSABLE)).filter(
    (el) => !el.closest("[hidden]") && el.getAttribute("aria-hidden") !== "true"
  );
  var inertPage = (portalNode) => {
    const body = document.body;
    const siblings = Array.from(body.children).filter(
      (el) => el instanceof HTMLElement && !(portalNode && el.contains(portalNode)) && el.tagName !== "SCRIPT" && el.tagName !== "STYLE"
    );
    const previous = siblings.map((el) => ({
      el,
      ariaHidden: el.getAttribute("aria-hidden"),
      inert: el.hasAttribute("inert")
    }));
    for (const el of siblings) {
      el.setAttribute("aria-hidden", "true");
      el.setAttribute("inert", "");
    }
    const previousOverflow = body.style.overflow;
    body.style.overflow = "hidden";
    return () => {
      for (const { el, ariaHidden, inert } of previous) {
        if (ariaHidden === null) el.removeAttribute("aria-hidden");
        else el.setAttribute("aria-hidden", ariaHidden);
        if (!inert) el.removeAttribute("inert");
      }
      body.style.overflow = previousOverflow;
    };
  };
  var Modal = (0, import_react22.forwardRef)(
    function Modal2(props, ref) {
      const {
        open,
        onClose,
        title,
        children,
        tone = "default",
        width = "md",
        confirmLabel,
        onConfirm,
        cancelLabel = "Cancel",
        dismissible = true,
        isSaving = false,
        error,
        portal = true,
        css: consumerCss,
        ...rest
      } = props;
      const titleId = (0, import_react22.useId)();
      const bodyId = (0, import_react22.useId)();
      const surfaceRef = (0, import_react22.useRef)(null);
      const scrimRef = (0, import_react22.useRef)(null);
      const pressedOnScrim = (0, import_react22.useRef)(false);
      const previousFocus = (0, import_react22.useRef)(null);
      const [pendingConfirm, setPendingConfirm] = (0, import_react22.useState)(false);
      const saving = isSaving || pendingConfirm;
      const canDismiss = dismissible && !saving;
      const [closing, setClosing] = (0, import_react22.useState)(false);
      const wasOpen = (0, import_react22.useRef)(open);
      (0, import_react22.useEffect)(() => {
        if (open) {
          wasOpen.current = true;
          setClosing(false);
          return void 0;
        }
        if (!wasOpen.current) return void 0;
        wasOpen.current = false;
        setClosing(true);
        const timer = window.setTimeout(() => setClosing(false), EXIT_MS2);
        return () => window.clearTimeout(timer);
      }, [open]);
      const present = open || closing;
      (0, import_react22.useEffect)(() => {
        if (!open) return void 0;
        openCount += 1;
        if (openCount > 1) {
          console.error(
            "Angelou Modal: a second Modal opened while one is already open. Modals never stack; replace the open modal's content or move the flow to a page."
          );
        }
        return () => {
          openCount -= 1;
        };
      }, [open]);
      (0, import_react22.useEffect)(() => {
        if (!open) return void 0;
        const surface = surfaceRef.current;
        const active = document.activeElement;
        previousFocus.current = active instanceof HTMLElement && active !== document.body ? active : null;
        if (surface && !surface.contains(document.activeElement)) {
          const [first] = focusables(surface);
          (first != null ? first : surface).focus();
        }
        return () => {
          const target = previousFocus.current;
          if (target && target.isConnected) target.focus();
        };
      }, [open]);
      (0, import_react22.useEffect)(() => {
        if (!open || !portal) return void 0;
        return inertPage(scrimRef.current);
      }, [open, portal]);
      const close = (0, import_react22.useCallback)(() => {
        if (canDismiss) onClose();
      }, [canDismiss, onClose]);
      (0, import_react22.useEffect)(() => {
        if (!open) return void 0;
        const handleKeyDown = (event) => {
          var _a;
          const surface = surfaceRef.current;
          if (!surface || event.defaultPrevented) return;
          if (event.key === "Escape") {
            event.stopPropagation();
            if (canDismiss) {
              event.preventDefault();
              onClose();
            }
            return;
          }
          if (event.key !== "Tab") return;
          const items = focusables(surface);
          const active = document.activeElement;
          const inside = surface.contains(active);
          if (items.length === 0) {
            event.preventDefault();
            surface.focus();
            return;
          }
          const first = items[0];
          const last = items[items.length - 1];
          if (!inside) {
            event.preventDefault();
            (_a = event.shiftKey ? last : first) == null ? void 0 : _a.focus();
          } else if (event.shiftKey && (active === first || active === surface)) {
            event.preventDefault();
            last == null ? void 0 : last.focus();
          } else if (!event.shiftKey && active === last) {
            event.preventDefault();
            first == null ? void 0 : first.focus();
          }
        };
        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
      }, [open, canDismiss, onClose]);
      const handleScrimMouseDown = (event) => {
        pressedOnScrim.current = event.target === event.currentTarget;
      };
      const handleScrimClick = (event) => {
        const onScrim = event.target === event.currentTarget;
        const pressed = pressedOnScrim.current;
        pressedOnScrim.current = false;
        if (onScrim && pressed) close();
      };
      const handleConfirm = () => {
        if (saving) return;
        const result = onConfirm == null ? void 0 : onConfirm();
        if (result && typeof result.then === "function") {
          setPendingConfirm(true);
          const settle = () => setPendingConfirm(false);
          result.then(settle, settle);
        }
      };
      if (!present) return null;
      const state = open ? "open" : "closing";
      const content = /* @__PURE__ */ jsx(
        "div",
        {
          ref: scrimRef,
          "data-part": "scrim",
          "data-state": state,
          css: [scrimCss, portal ? null : inlineScrimCss],
          onMouseDown: handleScrimMouseDown,
          onClick: handleScrimClick,
          children: /* @__PURE__ */ jsxs(
            "div",
            {
              ref: setRefs3(ref, surfaceRef),
              ...rest,
              role: tone === "destructive" ? "alertdialog" : "dialog",
              "aria-modal": "true",
              "aria-labelledby": titleId,
              "aria-describedby": bodyId,
              "aria-hidden": open ? void 0 : "true",
              tabIndex: -1,
              "data-tone": tone,
              "data-width": width,
              "data-state": state,
              "data-saving": saving ? "true" : void 0,
              css: [surfaceCss, widthCss[width], consumerCss],
              children: [
                /* @__PURE__ */ jsxs("header", { css: headerCss, children: [
                  /* @__PURE__ */ jsx("h2", { id: titleId, css: titleCss2, children: title }),
                  dismissible ? /* @__PURE__ */ jsx(
                    "button",
                    {
                      type: "button",
                      "aria-label": "Close",
                      disabled: saving,
                      "data-part": "close",
                      css: closeCss2,
                      onClick: close,
                      children: /* @__PURE__ */ jsx(Icon_default, { name: "close", size: 20 })
                    }
                  ) : null
                ] }),
                /* @__PURE__ */ jsx("div", { id: bodyId, "data-part": "body", css: bodyCss5, children }),
                error ? /* @__PURE__ */ jsx("p", { role: "alert", "data-part": "error", css: errorCss, children: error }) : null,
                /* @__PURE__ */ jsx("span", { role: "status", css: visuallyHiddenCss, children: saving ? "Saving" : "" }),
                /* @__PURE__ */ jsx(Divider_default, {}),
                /* @__PURE__ */ jsxs("footer", { "data-part": "footer", css: footerCss, children: [
                  /* @__PURE__ */ jsx(
                    Button_default,
                    {
                      variant: "secondary",
                      size: "md",
                      disabled: saving,
                      css: actionCss,
                      onClick: () => onClose(),
                      children: cancelLabel
                    }
                  ),
                  confirmLabel ? /* @__PURE__ */ jsx(
                    Button_default,
                    {
                      variant: tone === "destructive" ? "destructive" : "primary",
                      size: "md",
                      loading: saving,
                      css: actionCss,
                      onClick: handleConfirm,
                      children: confirmLabel
                    }
                  ) : null
                ] })
              ]
            }
          )
        }
      );
      return portal ? (0, import_react_dom.createPortal)(content, document.body) : content;
    }
  );
  var Modal_default = Modal;
  var BORDER2 = "1px";
  var TAG_RADIUS = "2px";
  var FEATURE_TAG_HEIGHT = "16px";
  var TOUCH_TARGET10 = "44px";
  var BELOW_SMALL = "@media (max-width: 568px)";
  var COARSE = "@media (pointer: coarse)";
  var HEADLINE_LINES = 3;
  var rootCss15 = {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    boxSizing: "border-box",
    width: "100%",
    minWidth: 0,
    margin: 0,
    backgroundColor: color.bgSurface,
    border: `${BORDER2} solid ${color.uiNeutral100}`,
    borderRadius: radius.sm,
    overflow: "hidden",
    fontFamily: fontFamily.sans,
    color: color.fgPrimary,
    // states.hover: subtle surface change only, at --dur-fast; no transform.
    transitionProperty: "border-color",
    transitionDuration: duration.fast,
    transitionTimingFunction: easing.standard,
    "@media (prefers-reduced-motion: reduce)": {
      transition: "none"
    },
    "&:hover": {
      borderColor: color.uiNeutral200
    }
  };
  var ACCENT = {
    ELA: [color.productEla100, color.productEla200],
    "Social Studies": [
      color.productSocialstudies100,
      color.productSocialstudies200
    ],
    Science: [color.productScience100, color.productScience200],
    News: [color.uiCore100, color.uiCore200]
  };
  var thumbnailCss = (subject) => ({
    position: "relative",
    // anatomy.Thumbnail: 16:9 regardless of the source image.
    aspectRatio: "16 / 9",
    overflow: "hidden",
    backgroundImage: `linear-gradient(135deg, ${ACCENT[subject][0]}, ${ACCENT[subject][1]})`
  });
  var imageCss = {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block"
  };
  var badgeSlotCss = {
    position: "absolute",
    top: space["2"],
    left: space["2"]
  };
  var tagBaseCss = {
    display: "inline-flex",
    alignItems: "center",
    gap: space["1"],
    boxSizing: "border-box",
    // anatomy.Thumbnail contentTypeTag: 6px 8px padding, 2px radius.
    paddingBlock: "6px",
    paddingInline: space["2"],
    borderRadius: TAG_RADIUS,
    backgroundColor: color.uiNeutral700,
    color: color.fgInverse,
    fontFamily: fontFamily.sans,
    fontWeight: fontWeight.book,
    fontSize: fontSize["14"],
    lineHeight: lineHeight["16"],
    whiteSpace: "nowrap"
  };
  var contentTypeTagCss = {
    ...tagBaseCss,
    position: "absolute",
    bottom: space["2"],
    left: space["2"]
  };
  var metaTagCss = {
    ...tagBaseCss,
    position: "absolute",
    bottom: space["2"],
    right: space["2"],
    "& > svg": { display: "block" }
  };
  var bookmarkCss = {
    position: "absolute",
    top: space["2"],
    right: space["2"],
    backgroundColor: color.bgSurface,
    borderRadius: radius.pill
  };
  var bodyCss6 = {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    gap: space["2"],
    padding: space["3"]
  };
  var dateLineCss = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: space["2"],
    minHeight: FEATURE_TAG_HEIGHT,
    color: color.uiNeutral600,
    fontSize: fontSize["12"],
    lineHeight: lineHeight["16"]
  };
  var FEATURE_FILL = {
    Espa\u00F1ol: color.uiNeutral700,
    "Power Words": color.uiNeutral700,
    // Nearest token to the Generation Genius orange (reconciliation).
    "Generation Genius": color.productScience500
  };
  var featureTagCss = (tag) => ({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    boxSizing: "border-box",
    height: FEATURE_TAG_HEIGHT,
    paddingInline: space["1"],
    marginLeft: "auto",
    borderRadius: TAG_RADIUS,
    backgroundColor: FEATURE_FILL[tag],
    color: color.fgInverse,
    fontWeight: fontWeight.bold,
    fontSize: fontSize["12"],
    lineHeight: lineHeight["16"],
    textTransform: "uppercase",
    letterSpacing: "0.04em",
    whiteSpace: "nowrap"
  });
  var headlineCss = {
    position: "relative",
    display: "block",
    margin: 0,
    color: color.fgPrimary,
    fontFamily: fontFamily.sans,
    fontWeight: fontWeight.bold,
    fontSize: fontSize["16"],
    lineHeight: lineHeight["24"],
    textDecoration: "none",
    borderRadius: radius.xs,
    "&:hover": {
      textDecorationLine: "underline"
    },
    "&:visited": {
      color: color.fgPrimary
    },
    "&:focus-visible": {
      outline: `2px solid ${color.borderFocus}`,
      outlineOffset: "2px"
    },
    // responsive.touch: a 44px hit area for a one-line headline on touch.
    [COARSE]: {
      "&::after": {
        content: '""',
        position: "absolute",
        // Extends to at least 44px tall, centred, with no transform.
        top: `min(0px, calc(50% - ${TOUCH_TARGET10} / 2))`,
        bottom: `min(0px, calc(50% - ${TOUCH_TARGET10} / 2))`,
        left: 0,
        width: "100%"
      }
    }
  };
  var headlineTextCss = {
    // anatomy.Headline: clamps rather than reflowing the card's height.
    display: "-webkit-box",
    WebkitLineClamp: HEADLINE_LINES,
    WebkitBoxOrient: "vertical",
    overflow: "hidden"
  };
  var metaRowCss = {
    display: "flex",
    flexDirection: "column",
    gap: space["1"],
    margin: 0,
    padding: 0,
    listStyle: "none",
    color: color.uiNeutral600,
    fontSize: fontSize["12"],
    lineHeight: lineHeight["16"],
    "& strong": { fontWeight: fontWeight.bold }
  };
  var actionRowCss = {
    display: "flex",
    gap: space["2"],
    marginTop: "auto",
    paddingTop: space["1"],
    "& > button": {
      flex: 1
    },
    [BELOW_SMALL]: {
      flexDirection: "column",
      "& > button": {
        width: "100%"
      }
    }
  };
  var skeletonBarCss = (width) => ({
    display: "block",
    width,
    height: lineHeight["16"],
    borderRadius: radius.xs,
    backgroundColor: color.bgMuted
  });
  var skeletonHeadlineCss = {
    ...skeletonBarCss("100%"),
    height: `calc(${lineHeight["24"]} * 2)`
  };
  var SUBJECT_BADGE = {
    ELA: "ela",
    "Social Studies": "socialstudies",
    Science: "science",
    News: "info"
  };
  var META_TAG_TYPES = /* @__PURE__ */ new Set([
    "Video",
    "Audio",
    "Text set",
    "Collection"
  ]);
  var BOOKMARK_ICON_SIZE = 16;
  var META_ICON_SIZE = 16;
  var ArticleCard = (0, import_react24.forwardRef)(
    function ArticleCard2(props, ref) {
      const {
        title,
        href,
        subject = "News",
        date,
        levels,
        maturity = "4th-12th",
        readingLevel = "480L-1340L",
        contentType = "News",
        metaTag,
        cardType = "teacher",
        showButtons = true,
        featureTag = null,
        showBadge = true,
        badgeColor,
        badgeStyle,
        badgeIcon,
        image,
        onOpen,
        onAssign,
        onBookmark,
        bookmarked = false,
        loading = false,
        css: consumerCss,
        ...rest
      } = props;
      if (badgeStyle !== void 0 || badgeIcon !== void 0) {
        console.error(
          "Angelou ArticleCard: badgeStyle and badgeIcon are accepted for spec compatibility but ignored; the package Badge has one treatment and no icon."
        );
      }
      const isTeacher = cardType === "teacher";
      const showActions = isTeacher && showButtons;
      const showMetaTag = META_TAG_TYPES.has(contentType) && Boolean(metaTag);
      const handleOpen = (_event) => {
        onOpen == null ? void 0 : onOpen();
      };
      if (loading) {
        return /* @__PURE__ */ jsxs(
          "article",
          {
            ref,
            ...rest,
            "aria-busy": "true",
            "data-card-type": cardType,
            "data-subject": subject,
            "data-loading": "true",
            css: [rootCss15, consumerCss],
            children: [
              /* @__PURE__ */ jsx("div", { css: thumbnailCss(subject) }),
              /* @__PURE__ */ jsxs("div", { css: bodyCss6, children: [
                /* @__PURE__ */ jsx("span", { css: skeletonBarCss("35%") }),
                /* @__PURE__ */ jsx("span", { css: skeletonHeadlineCss }),
                /* @__PURE__ */ jsx("span", { css: skeletonBarCss("55%") }),
                /* @__PURE__ */ jsx("span", { css: skeletonBarCss("65%") })
              ] })
            ]
          }
        );
      }
      return /* @__PURE__ */ jsxs(
        "article",
        {
          ref,
          ...rest,
          "data-card-type": cardType,
          "data-subject": subject,
          "data-content-type": contentType,
          "data-bookmarked": bookmarked ? "true" : "false",
          css: [rootCss15, consumerCss],
          children: [
            /* @__PURE__ */ jsxs("div", { css: thumbnailCss(subject), "data-part": "thumbnail", children: [
              image ? /* @__PURE__ */ jsx("img", { src: image, alt: "", css: imageCss }) : null,
              showBadge ? /* @__PURE__ */ jsx("span", { css: badgeSlotCss, children: /* @__PURE__ */ jsx(Badge_default, { color: badgeColor != null ? badgeColor : SUBJECT_BADGE[subject], dot: false, children: subject }) }) : null,
              /* @__PURE__ */ jsx("span", { css: contentTypeTagCss, "data-part": "content-type", children: contentType }),
              showMetaTag ? /* @__PURE__ */ jsxs("span", { css: metaTagCss, "data-part": "meta-tag", children: [
                /* @__PURE__ */ jsx(Icon_default, { name: "play-filled", size: META_ICON_SIZE }),
                metaTag
              ] }) : null
            ] }),
            /* @__PURE__ */ jsxs("div", { css: bodyCss6, children: [
              date || featureTag ? /* @__PURE__ */ jsxs("div", { css: dateLineCss, children: [
                date ? /* @__PURE__ */ jsx("span", { "data-part": "date", children: date }) : null,
                featureTag ? /* @__PURE__ */ jsx("span", { css: featureTagCss(featureTag), "data-part": "feature-tag", children: featureTag }) : null
              ] }) : null,
              /* @__PURE__ */ jsx("a", { href, css: headlineCss, onClick: handleOpen, children: /* @__PURE__ */ jsx("span", { css: headlineTextCss, children: title }) }),
              /* @__PURE__ */ jsx(
                Button_default,
                {
                  variant: "muted",
                  size: "md",
                  iconPosition: "only",
                  icon: /* @__PURE__ */ jsx(
                    Icon_default,
                    {
                      name: bookmarked ? "bookmark-filled" : "bookmark-hollow",
                      size: BOOKMARK_ICON_SIZE
                    }
                  ),
                  "aria-label": bookmarked ? "Remove from saved" : "Save article",
                  onClick: () => onBookmark == null ? void 0 : onBookmark(),
                  css: bookmarkCss
                }
              ),
              /* @__PURE__ */ jsxs("ul", { css: metaRowCss, "data-part": "meta-row", children: [
                levels !== void 0 ? /* @__PURE__ */ jsxs("li", { children: [
                  "Levels: ",
                  /* @__PURE__ */ jsx("strong", { children: levels })
                ] }) : null,
                /* @__PURE__ */ jsxs("li", { children: [
                  "Maturity level: ",
                  /* @__PURE__ */ jsx("strong", { children: maturity })
                ] }),
                /* @__PURE__ */ jsxs("li", { children: [
                  "Reading level: ",
                  /* @__PURE__ */ jsx("strong", { children: readingLevel })
                ] })
              ] }),
              showActions ? /* @__PURE__ */ jsxs("div", { css: actionRowCss, role: "group", "data-part": "actions", children: [
                /* @__PURE__ */ jsx(
                  Button_default,
                  {
                    variant: "muted",
                    size: "md",
                    "aria-label": `Preview ${title}`,
                    onClick: handleOpen,
                    children: "Preview"
                  }
                ),
                /* @__PURE__ */ jsx(
                  Button_default,
                  {
                    variant: "muted",
                    size: "md",
                    "aria-label": `Assign ${title}`,
                    onClick: () => onAssign == null ? void 0 : onAssign(),
                    children: "Assign"
                  }
                )
              ] }) : null
            ] })
          ]
        }
      );
    }
  );
  var ArticleCard_default = ArticleCard;
  var HEADER_MIN_HEIGHT = 28;
  var ICON_SIZE3 = 24;
  var INFO_GLYPH_SIZE = 16;
  var INFO_BUTTON_SIZE = 24;
  var TRIGGER_SIZE2 = 44;
  var INFO_TRIGGER_MARGIN = (INFO_BUTTON_SIZE - TRIGGER_SIZE2) / 2;
  var tint2 = {
    core: color.uiCore25,
    neutral: color.uiNeutral25
  };
  var rootCss16 = (tone) => ({
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    gap: space["3"],
    width: "100%",
    height: "100%",
    minWidth: 0,
    margin: 0,
    padding: space["3"],
    borderRadius: radius.lg,
    backgroundColor: tint2[tone],
    fontFamily: fontFamily.sans,
    color: color.fgPrimary
  });
  var headerCss2 = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "stretch",
    minHeight: `${HEADER_MIN_HEIGHT}px`,
    flexShrink: 0
  };
  var titleGroupCss = {
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: space["1"],
    flexGrow: 1,
    minWidth: 0,
    padding: space["1"]
  };
  var iconCss8 = {
    display: "inline-flex",
    flexShrink: 0,
    width: `${ICON_SIZE3}px`,
    height: `${ICON_SIZE3}px`,
    color: color.fgPrimary,
    "& > svg": { display: "block" }
  };
  var titleCss3 = {
    flexGrow: 1,
    minWidth: 0,
    margin: 0,
    fontFamily: fontFamily.sans,
    fontWeight: fontWeight.bold,
    fontSize: fontSize["16"],
    lineHeight: lineHeight["24"],
    color: color.fgPrimary,
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 2,
    overflow: "hidden"
  };
  var infoCss = {
    flexShrink: 0,
    margin: `${INFO_TRIGGER_MARGIN}px`
  };
  var wellCss = {
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    flexGrow: 1,
    minHeight: 0,
    minWidth: 0,
    padding: `${space["3"]} ${space["3"]} ${space["2"]}`,
    borderRadius: radius.sm,
    backgroundColor: color.bgSurface
  };
  var wellsCss = {
    display: "grid",
    gridAutoRows: "minmax(0, 1fr)",
    gap: space["3"],
    flexGrow: 1,
    minHeight: 0,
    minWidth: 0
  };
  var CHART_BAR_MAX = 48;
  var barThickness = `var(${THICKNESS_VAR}, 0px)`;
  var barCap = `max(${CHART_BAR_MAX}px, ${barThickness})`;
  var chartRow = '& > [data-orientation="horizontal"]';
  var chartWellCss = {
    gap: space["3"],
    justifyContent: "center",
    [chartRow]: { flex: "1 1 auto", maxHeight: barCap },
    [`${chartRow}[data-label-position="top"]`]: {
      maxHeight: `calc(${barCap} + ${lineHeight["16"]} + ${space["2"]})`
    },
    [`${chartRow} > [data-part="bar"]`]: {
      alignSelf: "stretch",
      height: "auto",
      minHeight: barThickness,
      maxHeight: barCap
    },
    [`${chartRow}:not([data-label-position="top"]) > [data-part="label"]`]: {
      alignSelf: "center"
    }
  };
  var stackedWellCss = { padding: space["3"] };
  var ROWS_VALUE_COLUMN = 160;
  var ROWS_NARROW_BELOW = 360;
  var WELL_SIDE_PADDING = 16;
  var ROWS_NARROW_QUERY = `@container (max-width: ${ROWS_NARROW_BELOW - 2 * WELL_SIDE_PADDING - 1}px)`;
  var rowsWellCss = { containerType: "inline-size" };
  var accentColor = {
    blue: color.uiCore600,
    purple: color.uiPurple600,
    green: color.uiGreen600,
    teal: color.uiTeal700
  };
  var stackedCss = (count) => ({
    display: "grid",
    gridTemplateRows: Array.from({ length: count }, () => "minmax(0, 1fr)").join(
      " auto "
    ),
    rowGap: space["4"],
    flexGrow: 1,
    minHeight: 0
  });
  var stackedPointCss = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    minWidth: 0
  };
  var rowsPointCss = {
    display: "grid",
    gridTemplateColumns: `${ROWS_VALUE_COLUMN}px minmax(0, 1fr)`,
    alignItems: "center",
    gap: space["3"],
    textAlign: "left",
    [ROWS_NARROW_QUERY]: {
      gridTemplateColumns: "minmax(0, 1fr)",
      alignItems: "start",
      gap: space["1"]
    }
  };
  var valueBase = (accent) => ({
    display: "inline-flex",
    alignItems: "center",
    gap: space["1"],
    margin: 0,
    fontFamily: fontFamily.sans,
    fontWeight: fontWeight.bold,
    color: accentColor[accent]
  });
  var headlineValueCss = (accent) => ({
    ...valueBase(accent),
    fontSize: fontSize["40"],
    lineHeight: lineHeight["48"],
    whiteSpace: "nowrap"
  });
  var secondaryValueCss = (accent) => ({
    ...valueBase(accent),
    fontSize: fontSize["24"],
    lineHeight: lineHeight["32"]
  });
  var descriptionCss = {
    margin: 0,
    fontFamily: fontFamily.sans,
    fontWeight: fontWeight.book,
    fontSize: fontSize["16"],
    lineHeight: lineHeight["24"],
    color: color.fgPrimary
  };
  var valueIconCss = {
    display: "inline-flex",
    flexShrink: 0,
    "& > svg": { display: "block" }
  };
  var rowCss3 = (min, gap) => ({
    display: "grid",
    gridTemplateColumns: `repeat(auto-fit, minmax(min(${min}px, 100%), 1fr))`,
    alignItems: "stretch",
    gap
  });
  var InfoCardRow = (0, import_react25.forwardRef)(
    function InfoCardRow2(props, ref) {
      const {
        min = 280,
        gap = "var(--space-3)",
        children,
        css: consumerCss,
        ...rest
      } = props;
      return /* @__PURE__ */ jsx("div", { ref, ...rest, css: [rowCss3(min, gap), consumerCss], children });
    }
  );
  var InfoCardWell = (0, import_react25.forwardRef)(
    function InfoCardWell2(props, ref) {
      const { children, css: consumerCss, ...rest } = props;
      return /* @__PURE__ */ jsx("div", { ref, "data-part": "well", ...rest, css: [wellCss, consumerCss], children });
    }
  );
  var MAX_DATAPOINTS = 3;
  var Value = ({
    point,
    accent,
    headline
  }) => /* @__PURE__ */ jsxs(
    "p",
    {
      css: headline ? headlineValueCss(accent) : secondaryValueCss(accent),
      "data-part": "value",
      children: [
        point.icon ? /* @__PURE__ */ jsx("span", { "aria-hidden": "true", css: valueIconCss, "data-part": "value-icon", children: /* @__PURE__ */ jsx(Icon_default, { name: point.icon, size: ICON_SIZE3 }) }) : null,
        point.value
      ]
    }
  );
  var Description = ({ children }) => /* @__PURE__ */ jsx("p", { css: descriptionCss, "data-part": "description", children });
  var isWell = (child) => (0, import_react25.isValidElement)(child) && child.type === InfoCardWell;
  var InfoCardRoot = (0, import_react25.forwardRef)(
    function InfoCard(props, ref) {
      const {
        title,
        icon,
        info,
        infoHeading,
        infoLabel,
        tone = "core",
        headingLevel: Heading = "h3",
        infoDefaultOpen = false,
        layout: layout2 = "custom",
        datapoints,
        accent = "blue",
        children,
        css: consumerCss,
        ...rest
      } = props;
      const hasInfo = info !== void 0 && info !== null && info !== false;
      const triggerLabel = infoLabel != null ? infoLabel : typeof title === "string" ? `About ${title}` : void 0;
      if (hasInfo && triggerLabel === void 0) {
        console.error(
          "Angelou InfoCard: info needs an infoLabel when title is not a string, otherwise the trigger has no accessible name."
        );
      }
      const drawsDatapoints = layout2 === "stacked" || layout2 === "rows";
      const points = drawsDatapoints ? datapoints != null ? datapoints : [] : [];
      if (drawsDatapoints) {
        if (points.length === 0)
          console.error(
            `Angelou InfoCard: layout '${layout2}' needs datapoints; the well renders empty.`
          );
        if (points.length > MAX_DATAPOINTS)
          console.error(
            `Angelou InfoCard: layout '${layout2}' takes at most ${MAX_DATAPOINTS} datapoints.`
          );
        if (import_react25.Children.count(children) > 0)
          console.error(
            `Angelou InfoCard: children are ignored with layout '${layout2}'; pass datapoints.`
          );
      }
      const childList = import_react25.Children.toArray(children);
      const customWells = layout2 === "custom" && childList.some(isWell);
      if (customWells && !childList.every(isWell)) {
        console.error(
          "Angelou InfoCard: with InfoCard.Well children, every child must be an InfoCard.Well."
        );
      }
      let body;
      if (layout2 === "stacked") {
        body = /* @__PURE__ */ jsx(InfoCardWell, { css: stackedWellCss, "data-layout": "stacked", children: /* @__PURE__ */ jsx("div", { css: stackedCss(Math.max(points.length, 1)), children: points.map((point, index) => /* @__PURE__ */ jsxs(import_react25.Fragment, { children: [
          index > 0 ? /* @__PURE__ */ jsx(Divider_default, {}) : null,
          /* @__PURE__ */ jsxs("div", { css: stackedPointCss, "data-part": "datapoint", children: [
            /* @__PURE__ */ jsx(Value, { point, accent, headline: index === 0 }),
            /* @__PURE__ */ jsx(Description, { children: point.description })
          ] })
        ] }, index)) }) });
      } else if (layout2 === "rows") {
        body = /* @__PURE__ */ jsx("div", { css: wellsCss, "data-part": "wells", children: points.map((point, index) => /* @__PURE__ */ jsx(InfoCardWell, { css: rowsWellCss, "data-layout": "rows", children: /* @__PURE__ */ jsxs("div", { css: rowsPointCss, "data-part": "datapoint", children: [
          /* @__PURE__ */ jsx(Value, { point, accent, headline: true }),
          /* @__PURE__ */ jsx(Description, { children: point.description })
        ] }) }, index)) });
      } else if (customWells) {
        body = /* @__PURE__ */ jsx("div", { css: wellsCss, "data-part": "wells", children });
      } else {
        body = /* @__PURE__ */ jsx(
          InfoCardWell,
          {
            css: layout2 === "chart" ? chartWellCss : void 0,
            "data-layout": layout2,
            children
          }
        );
      }
      return /* @__PURE__ */ jsxs(
        "section",
        {
          ref,
          ...rest,
          "data-tone": tone,
          "data-accent": accent,
          css: [rootCss16(tone), consumerCss],
          children: [
            /* @__PURE__ */ jsxs("div", { css: headerCss2, "data-part": "header", children: [
              /* @__PURE__ */ jsxs("div", { css: titleGroupCss, children: [
                icon ? /* @__PURE__ */ jsx("span", { "aria-hidden": "true", css: iconCss8, "data-part": "icon", children: icon }) : null,
                /* @__PURE__ */ jsx(Heading, { css: titleCss3, "data-part": "title", children: title })
              ] }),
              hasInfo ? /* @__PURE__ */ jsx(
                Toggletip_default,
                {
                  label: triggerLabel != null ? triggerLabel : "",
                  heading: infoHeading,
                  color: "dark",
                  triggerTheme: "light",
                  arrow: "bottom",
                  arrowPosition: "right",
                  flip: true,
                  defaultOpen: infoDefaultOpen,
                  autoFocus: !infoDefaultOpen,
                  trigger: /* @__PURE__ */ jsx(Icon_default, { name: "info-circle-hollow", size: INFO_GLYPH_SIZE }),
                  css: infoCss,
                  "data-part": "info",
                  children: info
                }
              ) : null
            ] }),
            body
          ]
        }
      );
    }
  );
  var InfoCard2 = Object.assign(InfoCardRoot, {
    Row: InfoCardRow,
    Well: InfoCardWell
  });
  var InfoCard_default = InfoCard2;
  var PANEL_MIN_HEIGHT = "72px";
  var SEARCH_HEADER_HEIGHT = "72px";
  var CTA_FOOTER_HEIGHT = "64px";
  var SLOT_BORDER = `1px solid ${color.uiNeutral100}`;
  var rootCss17 = {
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    gap: space["2"],
    minHeight: PANEL_MIN_HEIGHT,
    // responsive.forbidden: never overflow the viewport horizontally.
    maxWidth: "100%",
    margin: 0,
    paddingTop: space["3"],
    paddingBottom: space["3"],
    paddingLeft: 0,
    paddingRight: 0,
    overflow: "hidden",
    borderRadius: radius.sm,
    backgroundColor: color.bgSurface,
    boxShadow: shadow.sm
  };
  var dimensionCss = (width, maxHeight) => ({
    width: typeof width === "number" ? `${width}px` : width,
    maxHeight: typeof maxHeight === "number" ? `${maxHeight}px` : maxHeight
  });
  var withSearchCss = {
    paddingTop: 0
  };
  var withCtaCss = {
    paddingBottom: 0
  };
  var listCss = {
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    gap: space["2"],
    minHeight: 0,
    overflowY: "auto",
    "&:focus-visible": {
      outline: `2px solid ${color.borderFocus}`,
      outlineOffset: "2px"
    }
  };
  var searchHeaderCss = {
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    justifyContent: "center",
    flexShrink: 0,
    height: SEARCH_HEADER_HEIGHT,
    padding: `${space["2"]} ${space["2"]} ${space["3"]}`,
    border: SLOT_BORDER,
    backgroundColor: color.bgSurface
  };
  var ctaFooterCss = {
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    flexShrink: 0,
    height: CTA_FOOTER_HEIGHT,
    padding: space["2"],
    border: SLOT_BORDER,
    backgroundColor: color.bgSurface
  };
  var isDevelopment4 = true;
  var InsidePopoutContext = (0, import_react26.createContext)(false);
  var splitRest = (rest) => {
    const list = {};
    const panel = {};
    for (const [key, value] of Object.entries(rest)) {
      if (key === "id" || key.startsWith("aria-")) list[key] = value;
      else panel[key] = value;
    }
    return { list, panel };
  };
  var Popout = (0, import_react26.forwardRef)(
    function Popout2(props, ref) {
      const {
        label,
        labelledBy,
        search,
        cta,
        width = 320,
        maxHeight = 336,
        role = "listbox",
        activeId,
        multiSelect = false,
        children,
        css: consumerCss,
        ...rest
      } = props;
      const nested = (0, import_react26.useContext)(InsidePopoutContext);
      if (isDevelopment4 && nested) {
        console.error(
          "Angelou Popout: a Popout must not render inside another Popout. Close the first and open the second from its trigger."
        );
      }
      const listbox = role === "listbox";
      const { list: listRest, panel: panelRest } = splitRest(rest);
      return /* @__PURE__ */ jsx(InsidePopoutContext.Provider, { value: true, children: /* @__PURE__ */ jsxs(
        "div",
        {
          ref,
          ...panelRest,
          "data-part": "panel",
          "data-role": role,
          "data-has-search": search ? "true" : void 0,
          "data-has-cta": cta ? "true" : void 0,
          css: [
            rootCss17,
            dimensionCss(width, maxHeight),
            search ? withSearchCss : null,
            cta ? withCtaCss : null,
            consumerCss
          ],
          children: [
            search ? /* @__PURE__ */ jsx("div", { css: searchHeaderCss, "data-part": "search", children: search }) : null,
            /* @__PURE__ */ jsx(
              "div",
              {
                ...listRest,
                role,
                "aria-label": labelledBy ? void 0 : label,
                "aria-labelledby": labelledBy,
                "aria-multiselectable": listbox && multiSelect ? true : void 0,
                "aria-activedescendant": listbox ? activeId : void 0,
                tabIndex: listbox ? -1 : void 0,
                css: listCss,
                "data-part": "rows",
                children
              }
            ),
            cta ? /* @__PURE__ */ jsx("div", { css: ctaFooterCss, "data-part": "cta", children: cta }) : null
          ]
        }
      ) });
    }
  );
  var Popout_default = Popout;
  return __toCommonJS(index_exports);
})();
window.NewselaAngelou=NewselaAngelou.__dsMainNs?Object.assign({},NewselaAngelou,NewselaAngelou.__dsMainNs,{__dsMainNs:undefined}):NewselaAngelou;
