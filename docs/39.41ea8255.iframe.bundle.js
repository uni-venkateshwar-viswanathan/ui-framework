"use strict";(self.webpackChunk_uniphore_ui_framework=self.webpackChunk_uniphore_ui_framework||[]).push([[39],{"./node_modules/@storybook/addon-actions/dist/decorator.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{R:()=>withActions});var chunk_OPEUWD42=__webpack_require__("./node_modules/@storybook/addon-actions/dist/chunk-OPEUWD42.mjs"),actions=(...args)=>{let options=chunk_OPEUWD42.vc,names=args;1===names.length&&Array.isArray(names[0])&&([names]=names),1!==names.length&&"string"!=typeof names[names.length-1]&&(options={...chunk_OPEUWD42.vc,...names.pop()});let namesObject=names[0];(1!==names.length||"string"==typeof namesObject)&&(namesObject={},names.forEach((name=>{namesObject[name]=name})));let actionsObject={};return Object.keys(namesObject).forEach((name=>{actionsObject[name]=(0,chunk_OPEUWD42.aD)(namesObject[name],options)})),actionsObject},chunk_VWCVBQ22=__webpack_require__("./node_modules/@storybook/addon-actions/dist/chunk-VWCVBQ22.mjs"),dist=__webpack_require__("./node_modules/@storybook/global/dist/index.mjs"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),{document:decorator_document,Element}=dist.global,delegateEventSplitter=/^(\S+)\s*(.*)$/,matchesMethod=null!=Element&&!Element.prototype.matches?"msMatchesSelector":"matches",hasMatchInAncestry=(element,selector)=>{if(element[matchesMethod](selector))return!0;let parent=element.parentElement;return!!parent&&hasMatchInAncestry(parent,selector)},applyEventHandlers=(actionsFn,...handles)=>{let root=decorator_document&&decorator_document.getElementById("storybook-root");(0,external_STORYBOOK_MODULE_PREVIEW_API_.useEffect)((()=>{if(null!=root){let handlers=((actionsFn,...handles)=>{let actionsObject=actionsFn(...handles);return Object.entries(actionsObject).map((([key,action])=>{let[_,eventName,selector]=key.match(delegateEventSplitter)||[];return{eventName,handler:e=>{(!selector||hasMatchInAncestry(e.target,selector))&&action(e)}}}))})(actionsFn,...handles);return handlers.forEach((({eventName,handler})=>root.addEventListener(eventName,handler))),()=>handlers.forEach((({eventName,handler})=>root.removeEventListener(eventName,handler)))}}),[root,actionsFn,handles])},withActions=(0,external_STORYBOOK_MODULE_PREVIEW_API_.makeDecorator)({name:"withActions",parameterName:chunk_VWCVBQ22.Sz,skipIfNoParametersOrOptions:!0,wrapper:(getStory,context,{parameters})=>(parameters?.handles&&applyEventHandlers(actions,...parameters.handles),getStory(context))})},"./src/common.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function dispatchWebComponentEvent(element,name,details){var webComponentCustomEvent=new CustomEvent(name,{detail:details,bubbles:!(arguments.length>3&&void 0!==arguments[3])||arguments[3],composed:!(arguments.length>4&&void 0!==arguments[4])||arguments[4]});element.dispatchEvent(webComponentCustomEvent)}__webpack_require__.d(__webpack_exports__,{A:()=>dispatchWebComponentEvent})},"./src/components/tags/uniphore-tag/uniphore-tag.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var _templateObject,lit=__webpack_require__("./node_modules/lit/index.js");var uniphore_label_templateObject,uniphoreLabelStyles=(0,lit.iv)(_templateObject||(_templateObject=function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(["\n  .uniphore-label {\n    color: var(--uniphore-label-text-color, #606266);\n    font-size: var(--uniphore-label-text-font-size, 16px);\n    line-height: var(--uniphore-label-text-line-height, 1.5);\n    position: relative;\n    white-space: nowrap;\n  }\n\n  .uniphore-label-ellipsis {\n    width: var(--uniphore-label-width, 100%);\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: inline-block;\n  }\n"]))),common=__webpack_require__("./src/common.js");function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,(arg=descriptor.key,key=void 0,key=function _toPrimitive2(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string"),"symbol"===_typeof(key)?key:String(key)),descriptor)}var arg,key}function _get(){return _get="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function _get(target,property,receiver){var base=function _superPropBase(object,property){for(;!Object.prototype.hasOwnProperty.call(object,property)&&null!==(object=_getPrototypeOf(object)););return object}(target,property);if(base){var desc=Object.getOwnPropertyDescriptor(base,property);return desc.get?desc.get.call(arguments.length<3?target:receiver):desc.value}},_get.apply(this,arguments)}function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var result,Super=_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return function _possibleConstructorReturn(self,call){if(call&&("object"===_typeof(call)||"function"==typeof call))return call;if(void 0!==call)throw new TypeError("Derived constructors may only return object or undefined");return function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}(self)}(this,result)}}function _getPrototypeOf(o){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)},_getPrototypeOf(o)}function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var uniphore_tag_styles_templateObject,UniphoreLabel=function(_LitElement){!function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),Object.defineProperty(subClass,"prototype",{writable:!1}),superClass&&_setPrototypeOf(subClass,superClass)}(UniphoreLabel,_LitElement);var _super=_createSuper(UniphoreLabel);function UniphoreLabel(){var _this;return function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,UniphoreLabel),(_this=_super.call(this)).text="",_this.showEllipsis=!0,_this}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(UniphoreLabel,[{key:"render",value:function render(){return(0,lit.dy)(uniphore_label_templateObject||(uniphore_label_templateObject=function uniphore_label_taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(['\n      <span\n        id="uniphore-label"\n        class="uniphore-label"\n        @click=',"\n        >","</span\n      >\n    "])),this._onLabelClick,this.text)}},{key:"span",get:function get(){var _this$renderRoot$quer;return null!==(_this$renderRoot$quer=this.renderRoot.querySelector(".uniphore-label"))&&void 0!==_this$renderRoot$quer?_this$renderRoot$quer:null}},{key:"firstUpdated",value:function firstUpdated(changedProperties){var labelSpan=this.span;labelSpan.addEventListener("mouseenter",this._setTitleIfNecessary.bind(labelSpan)),this.showEllipsis&&this.renderRoot.querySelector(".uniphore-label").classList.add("uniphore-label-ellipsis")}},{key:"_setTitleIfNecessary",value:function _setTitleIfNecessary(){this.offsetWidth<this.scrollWidth&&this.className.includes("uniphore-label-ellipsis")&&!this.hasAttribute("title")&&this.setAttribute("title",this.innerText)}},{key:"_setTagColor",value:function _setTagColor(color){color&&this.style.setProperty("--uniphore-label-text-color",color)}},{key:"_onLabelClick",value:function _onLabelClick(event){(0,common.A)(this,"uniphore-label-click",event)}},{key:"connectedCallback",value:function connectedCallback(){_get(_getPrototypeOf(UniphoreLabel.prototype),"connectedCallback",this).call(this),this._setTagColor(this.color)}},{key:"disconnectedCallback",value:function disconnectedCallback(){var labelSpan=this.span;labelSpan.removeEventListener("mouseenter",this._setTitleIfNecessary.bind(labelSpan)),_get(_getPrototypeOf(UniphoreLabel.prototype),"disconnectedCallback",this)&&_get(_getPrototypeOf(UniphoreLabel.prototype),"disconnectedCallback",this).call(this)}}]),UniphoreLabel}(lit.oi);_defineProperty(UniphoreLabel,"properties",{text:{type:String},color:{type:String},showEllipsis:{type:Boolean}}),_defineProperty(UniphoreLabel,"styles",uniphoreLabelStyles),customElements.define("uniphore-label",UniphoreLabel);var uniphore_tag_templateObject,_templateObject2,uniphoreTagStyles=(0,lit.iv)(uniphore_tag_styles_templateObject||(uniphore_tag_styles_templateObject=function uniphore_tag_styles_taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(["\n  .uniphore-tag {\n    position: relative;\n    display: inline-block;\n    min-width: 20px;\n    max-width: 180px;\n    height: 30px;\n    font-size: 13px;\n    background-color: var(\n      --uniphore-tag-background-color,\n      rgba(2, 136, 209, 0.15)\n    );\n    border: var(--uniphore-tag-border, 1px solid #dcdfe6);\n    border-radius: 4px;\n    color: var(--uniphore-tag-color, #606266);\n    padding-left: 6px;\n    padding-right: var(--uniphore-tag-padding-right, 6px);\n    box-sizing: border-box;\n  }\n\n  button[id^='remove-tag-'] {\n    position: absolute;\n    top: 8px;\n    right: 6px;\n    height: 12px;\n    width: 12px;\n  }\n\n  button {\n    width: 12px;\n    height: 12px;\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-family: inherit;\n    font-size: 1em;\n    cursor: pointer;\n    background: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTYuMDAwMzMgMC4xNjY5OTJDMi43NzQ0OSAwLjE2Njk5MiAwLjE2Njk5MiAyLjc3NDQ5IDAuMTY2OTkyIDYuMDAwMzNDMC4xNjY5OTIgOS4yMjYxNiAyLjc3NDQ5IDExLjgzMzcgNi4wMDAzMyAxMS44MzM3QzkuMjI2MTYgMTEuODMzNyAxMS44MzM3IDkuMjI2MTYgMTEuODMzNyA2LjAwMDMzQzExLjgzMzcgMi43NzQ0OSA5LjIyNjE2IDAuMTY2OTkyIDYuMDAwMzMgMC4xNjY5OTJaTTguNTA4NjYgOC41MDg2NkM4LjI4MTE2IDguNzM2MTYgNy45MTM2NiA4LjczNjE2IDcuNjg2MTYgOC41MDg2Nkw2LjAwMDMzIDYuODIyODNMNC4zMTQ0OSA4LjUwODY2QzQuMDg2OTkgOC43MzYxNiAzLjcxOTQ5IDguNzM2MTYgMy40OTE5OSA4LjUwODY2QzMuMjY0NDkgOC4yODExNiAzLjI2NDQ5IDcuOTEzNjYgMy40OTE5OSA3LjY4NjE2TDUuMTc3ODMgNi4wMDAzM0wzLjQ5MTk5IDQuMzE0NDlDMy4yNjQ0OSA0LjA4Njk5IDMuMjY0NDkgMy43MTk0OSAzLjQ5MTk5IDMuNDkxOTlDMy43MTk0OSAzLjI2NDQ5IDQuMDg2OTkgMy4yNjQ0OSA0LjMxNDQ5IDMuNDkxOTlMNi4wMDAzMyA1LjE3NzgzTDcuNjg2MTYgMy40OTE5OUM3LjkxMzY2IDMuMjY0NDkgOC4yODExNiAzLjI2NDQ5IDguNTA4NjYgMy40OTE5OUM4LjczNjE2IDMuNzE5NDkgOC43MzYxNiA0LjA4Njk5IDguNTA4NjYgNC4zMTQ0OUw2LjgyMjgzIDYuMDAwMzNMOC41MDg2NiA3LjY4NjE2QzguNzMwMzMgNy45MDc4MyA4LjczMDMzIDguMjgxMTYgOC41MDg2NiA4LjUwODY2WiIgZmlsbD0iIzAyODhEMSIvPgo8L3N2Zz4K')\n      transparent;\n  }\n"])));function uniphore_tag_defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,(arg=descriptor.key,key=void 0,key=function uniphore_tag_toPrimitive2(input,hint){if("object"!==uniphore_tag_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==uniphore_tag_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string"),"symbol"===uniphore_tag_typeof(key)?key:String(key)),descriptor)}var arg,key}function uniphore_tag_get(){return uniphore_tag_get="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function _get(target,property,receiver){var base=function uniphore_tag_superPropBase(object,property){for(;!Object.prototype.hasOwnProperty.call(object,property)&&null!==(object=uniphore_tag_getPrototypeOf(object)););return object}(target,property);if(base){var desc=Object.getOwnPropertyDescriptor(base,property);return desc.get?desc.get.call(arguments.length<3?target:receiver):desc.value}},uniphore_tag_get.apply(this,arguments)}function uniphore_tag_setPrototypeOf(o,p){return uniphore_tag_setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function _setPrototypeOf(o,p){return o.__proto__=p,o},uniphore_tag_setPrototypeOf(o,p)}function uniphore_tag_createSuper(Derived){var hasNativeReflectConstruct=function uniphore_tag_isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var result,Super=uniphore_tag_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=uniphore_tag_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return function uniphore_tag_possibleConstructorReturn(self,call){if(call&&("object"===uniphore_tag_typeof(call)||"function"==typeof call))return call;if(void 0!==call)throw new TypeError("Derived constructors may only return object or undefined");return function uniphore_tag_assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}(self)}(this,result)}}function uniphore_tag_getPrototypeOf(o){return uniphore_tag_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)},uniphore_tag_getPrototypeOf(o)}function uniphore_tag_typeof(obj){return uniphore_tag_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},uniphore_tag_typeof(obj)}function uniphore_tag_taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function uniphore_tag_defineProperty(obj,key,value){return(key=function uniphore_tag_toPropertyKey(arg){var key=function uniphore_tag_toPrimitive(input,hint){if("object"!==uniphore_tag_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==uniphore_tag_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===uniphore_tag_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var UniphoreTag=function(_LitElement){!function uniphore_tag_inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),Object.defineProperty(subClass,"prototype",{writable:!1}),superClass&&uniphore_tag_setPrototypeOf(subClass,superClass)}(UniphoreTag,_LitElement);var _super=uniphore_tag_createSuper(UniphoreTag);function UniphoreTag(){var _this;return function uniphore_tag_classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,UniphoreTag),(_this=_super.call(this)).id=0,_this.removable=!1,_this}return function uniphore_tag_createClass(Constructor,protoProps,staticProps){return protoProps&&uniphore_tag_defineProperties(Constructor.prototype,protoProps),staticProps&&uniphore_tag_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(UniphoreTag,[{key:"render",value:function render(){return(0,lit.dy)(uniphore_tag_templateObject||(uniphore_tag_templateObject=uniphore_tag_taggedTemplateLiteral(['\n      <span class="uniphore-tag">\n        <uniphore-label\n          id=','\n          class="uniphore-label"\n          text=','\n          color="','"\n        ></uniphore-label>\n        ',"\n      </span>\n    "])),"uniphore-label".concat(this.id),this.label,this.color,this._getRemovableButton())}},{key:"_getRemovableButton",value:function _getRemovableButton(){var _this2=this;if(this.removable)return(0,lit.dy)(_templateObject2||(_templateObject2=uniphore_tag_taggedTemplateLiteral(['<button\n        id="','"\n        @click="','"\n      ></button>'])),"remove-tag-".concat(this.id),(function(){return _this2._removeTag()}))}},{key:"_setTagColor",value:function _setTagColor(background){background&&(this.style.setProperty("--tag-background-color",background),this.style.setProperty("--tag-border","1px solid "+background))}},{key:"_setRemovable",value:function _setRemovable(){this.removable&&this.style.setProperty("--tag-padding-right","22px")}},{key:"_removeTag",value:function _removeTag(){var details={message:"remove tag",removeTag:this.label,tagId:this.id};(0,common.A)(this,"on-remove-tag",details)}},{key:"connectedCallback",value:function connectedCallback(){uniphore_tag_get(uniphore_tag_getPrototypeOf(UniphoreTag.prototype),"connectedCallback",this).call(this),this._setTagColor(this.background),this._setRemovable(this.removable)}}]),UniphoreTag}(lit.oi);uniphore_tag_defineProperty(UniphoreTag,"properties",{id:{type:Number},label:{type:String},color:{type:String},background:{type:String},removable:{type:Boolean}}),uniphore_tag_defineProperty(UniphoreTag,"styles",uniphoreTagStyles),customElements.define("uniphore-tag",UniphoreTag)}}]);