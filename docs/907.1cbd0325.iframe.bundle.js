/*! For license information please see 907.1cbd0325.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_uniphore_ui_framework=self.webpackChunk_uniphore_ui_framework||[]).push([[907],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/storybook/components/component-name/component-name.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{y:()=>ComponentName});var classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),component_name=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[12].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[12].use[3]!./src/storybook/components/component-name/component-name.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(component_name.Z,options);component_name.Z&&component_name.Z.locals&&component_name.Z.locals;var react=__webpack_require__("./node_modules/react/index.js"),ComponentName=function ComponentName(_ref){var children=_ref.children,className=_ref.className;return react.createElement("h1",{className:classnames_default()("uniphore-storybook-component-name",className)},children)}},"./src/storybook/components/frame/frame.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>Frame});var classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),frame_frame=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[12].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[12].use[3]!./src/storybook/components/frame/frame.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(frame_frame.Z,options);frame_frame.Z&&frame_frame.Z.locals&&frame_frame.Z.locals;var react=__webpack_require__("./node_modules/react/index.js"),Frame=function Frame(_ref){var children=_ref.children,className=_ref.className,noGutter=_ref.noGutter,noBorder=_ref.noBorder;return react.createElement("div",{className:classnames_default()("uniphore-storybook-frame",className,{"uniphore-storybook-frame--no-gutter":noGutter,"uniphore-storybook-frame--no-border":noBorder})},children)}},"./src/storybook/components/visual-description/visual-description.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{U:()=>VisualDescription});var react=__webpack_require__("./node_modules/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),visual_description=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[12].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[12].use[3]!./src/storybook/components/visual-description/visual-description.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(visual_description.Z,options);visual_description.Z&&visual_description.Z.locals&&visual_description.Z.locals;var VisualDescription=function VisualDescription(_ref){var title=_ref.title,ariaLabel=_ref.ariaLabel,children=_ref.children,description=_ref.description,className=_ref.className;return react.createElement("div",{className:classnames_default()("uniphore-storybook-visual-description",className),"aria-label":ariaLabel},react.createElement("figure",{className:"uniphore-storybook-visual-description_visual","aria-hidden":!0},children),react.createElement("section",{className:"uniphore-storybook-visual-description_text"},react.createElement("h5",null,title),description))}},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[12].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[12].use[3]!./src/storybook/components/component-name/component-name.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".font-h1{font-family:var(--font-bold);letter-spacing:-1px;font-size:64px}.font-h2{font-family:var(--font-bold);letter-spacing:-1px;font-size:48px}.font-h3{font-family:var(--font-bold);letter-spacing:-1px;font-size:32px}.font-subtitle-h1{font-family:var(--font-bold);letter-spacing:-1px;font-size:24px}.font-subtitle-h2{font-family:var(--font-normal);letter-spacing:-1px;font-size:24px}.font-subtitle-h3{font-family:var(--font-bold);letter-spacing:-1px;font-size:18px}.font-subtitle-h4{font-family:var(--font-normal);letter-spacing:-1px;font-size:18px}.font-body-h1{font-family:var(--font-bold);letter-spacing:-1px;font-size:16px}.font-body-h2{font-family:var(--font-normal);letter-spacing:-1px;font-size:16px}.font-body-h3{font-family:var(--font-bold);letter-spacing:-1px;font-size:14px}.font-body-h4{font-family:var(--font-normal);letter-spacing:-1px;font-size:14px}.font-body-h5{font-family:var(--font-bold);letter-spacing:-1px;font-size:12px}.font-body-h6{font-family:var(--font-normal);letter-spacing:-1px;font-size:12px}.uniphore-storybook-component-name{width:100%;margin-top:0;margin-bottom:32px;font-family:var(--title-font-family);font-size:40px;line-height:48px;font-weight:600;letter-spacing:-0.24px;text-align:left;display:grid;border-radius:4px;padding:40px 24px !important;background-image:linear-gradient(rgb(247, 221, 175), rgb(248, 163, 223))}","",{version:3,sources:["webpack://./src/storybook/styles/typography.scss","webpack://./src/storybook/components/component-name/component-name.scss","webpack://./src/storybook/styles/content-spacing.scss","webpack://./src/storybook/styles/css-settings.scss"],names:[],mappings:"AAgBA,SAZE,4BAKmB,CAJnB,mBAAA,CAaA,cAAA,CAGF,SAjBE,4BAKmB,CAJnB,mBAAA,CAkBA,cAAA,CAGF,SAtBE,4BAKmB,CAJnB,mBAAA,CAuBA,cAAA,CAOF,kBA/BE,4BAKmB,CAJnB,mBAAA,CA2BA,cAAA,CAQF,kBApCE,8BASmB,CARnB,mBAAA,CA2BA,cAAA,CAiBF,kBA7CE,4BAKmB,CAJnB,mBAAA,CAyCA,cAAA,CAQF,kBAlDE,8BASmB,CARnB,mBAAA,CAyCA,cAAA,CAiBF,cA3DE,4BAKmB,CAJnB,mBAAA,CAuDA,cAAA,CAQF,cAhEE,8BASmB,CARnB,mBAAA,CAuDA,cAAA,CAiBF,cAzEE,4BAKmB,CAJnB,mBAAA,CAqEA,cAAA,CAQF,cA9EE,8BASmB,CARnB,mBAAA,CAqEA,cAAA,CAiBF,cAvFE,4BAKmB,CAJnB,mBAAA,CAmFA,cAAA,CAQF,cA5FE,8BASmB,CARnB,mBAAA,CAmFA,cAAA,CCpFF,mCACE,UAAA,CACA,YAAA,CACA,kBCN8B,CDO9B,oCDPoB,CCQpB,cDTa,CCUb,gBAAA,CACA,eAAA,CACA,sBAAA,CACA,eAAA,CACA,YAAA,CACA,iBEVoB,CFWpB,4BAAA,CACA,wEAAA",sourcesContent:["$h1-font-size: 40px;\r\n$header-primary-font: var(--title-font-family);\r\n\r\n@mixin base-font($font-variable) {\r\n  font-family: $font-variable;\r\n  letter-spacing: -1px;\r\n}\r\n\r\n@mixin base-bold-font {\r\n  @include base-font(var(--font-bold));\r\n}\r\n\r\n@mixin base-normal-font {\r\n  @include base-font(var(--font-normal));\r\n}\r\n\r\n.font-h1 {\r\n  @include base-bold-font;\r\n  font-size: 64px;\r\n}\r\n\r\n.font-h2 {\r\n  @include base-bold-font;\r\n  font-size: 48px;\r\n}\r\n\r\n.font-h3 {\r\n  @include base-bold-font;\r\n  font-size: 32px;\r\n}\r\n\r\n@mixin base-big-font-subtitle {\r\n  font-size: 24px;\r\n}\r\n\r\n.font-subtitle-h1 {\r\n  @include base-bold-font;\r\n  @include base-big-font-subtitle;\r\n}\r\n\r\n.font-subtitle-h2 {\r\n  @include base-normal-font;\r\n  @include base-big-font-subtitle;\r\n}\r\n\r\n@mixin base-small-font-subtitle {\r\n  font-size: 18px;\r\n}\r\n\r\n.font-subtitle-h3 {\r\n  @include base-bold-font;\r\n  @include base-small-font-subtitle;\r\n}\r\n\r\n.font-subtitle-h4 {\r\n  @include base-normal-font;\r\n  @include base-small-font-subtitle;\r\n}\r\n\r\n@mixin base-big-font-body {\r\n  font-size: 16px;\r\n}\r\n\r\n.font-body-h1 {\r\n  @include base-bold-font;\r\n  @include base-big-font-body;\r\n}\r\n\r\n.font-body-h2 {\r\n  @include base-normal-font;\r\n  @include base-big-font-body;\r\n}\r\n\r\n@mixin base-medium-font-body {\r\n  font-size: 14px;\r\n}\r\n\r\n.font-body-h3 {\r\n  @include base-bold-font;\r\n  @include base-medium-font-body;\r\n}\r\n\r\n.font-body-h4 {\r\n  @include base-normal-font;\r\n  @include base-medium-font-body;\r\n}\r\n\r\n@mixin base-small-font-body {\r\n  font-size: 12px;\r\n}\r\n\r\n.font-body-h5 {\r\n  @include base-bold-font;\r\n  @include base-small-font-body;\r\n}\r\n\r\n.font-body-h6 {\r\n  @include base-normal-font;\r\n  @include base-small-font-body;\r\n}",'@import "../../styles/typography";\r\n@import "../../styles/content-spacing";\r\n@import "../../styles/css-settings";\r\n\r\n.uniphore-storybook-component-name {\r\n  width: 100%;\r\n  margin-top: 0;\r\n  margin-bottom: $spacing-between-section-items;\r\n  font-family: $header-primary-font;\r\n  font-size: $h1-font-size;\r\n  line-height: 48px;\r\n  font-weight: 600;\r\n  letter-spacing: -0.24px;\r\n  text-align: left;\r\n  display: grid;\r\n  border-radius: $border-radius-small;\r\n  padding: 40px 24px !important;\r\n  background-image: linear-gradient(rgb(247, 221, 175), rgb(248, 163, 223));\r\n//   background-image: url(\'./assets/1.png\');\r\n//   background-repeat: no-repeat;\r\n//   background-size: cover;\r\n}',"$spacing-between-sections: 72px;\n$spacing-between-section-items: 32px;\n$spacing-between-title-to-content: 16px;","$box-shadow-small: 0 4px 8px -1px rgba(0, 0, 0, 0.2);\n$box-shadow-medium: 0px 6px 20px -2px rgba(0, 0, 0, 0.2);\n$box-shadow-large: 0px 15px 50px -10px rgba(0, 0, 0, 0.3);\n\n$border-radius-extra-small: 2px;\n$border-radius-small: 4px;\n$border-radius-medium: 8px;\n$border-radius-big: 16px;\n\n$spacing-xxs: 2px;\n$spacing-xs: 4px;\n$spacing-xs-small: 6px;\n$spacing-small: 8px;\n$spacing-small-medium: 12px;\n$spacing-medium: 16px;\n$spacing-large: 24px;\n$spacing-xl: 32px;\n$spacing-xxl: 48px;\n$spacing-xxxl: 64px;\n\n$expand-animation-timing: cubic-bezier(0, 0, 0.35, 1);\n\n$grid-auto-fit-cell-width-small: 120px;\n$grid-auto-fit-cell-width-medium: 180px;\n$grid-auto-fit-cell-width-large: 240px;\n$grid-auto-fit-cell-width-xl: 300px;\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[12].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[12].use[3]!./src/storybook/components/frame/frame.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".uniphore-storybook-frame{border:var(--layout-border-color) 1px solid;border-radius:8px;border-color:#e6e9ef;border-color:var(--layout-border-color);padding:32px;margin:32px 0}.uniphore-storybook-frame--no-border{border:0}.uniphore-storybook-frame--no-gutter{padding-right:0;padding-left:0}","",{version:3,sources:["webpack://./src/storybook/components/frame/frame.scss","webpack://./src/storybook/styles/mixins.scss","webpack://./src/storybook/styles/css-settings.scss","webpack://./src/storybook/styles/theme-mixins.scss"],names:[],mappings:"AAIA,0BAAA,2CAAA,CCCE,iBCCqB,CC+BnB,oBAAA,CACA,uCAAA,CHhCA,YAAA,CACA,aAAA,CAEA,qCACE,QAAA,CAGF,qCACE,eAAA,CACA,cAAA",sourcesContent:['\n@import "../../styles/mixins";\n@import "../../styles/content-spacing";\n\n.uniphore-storybook-frame {\n    @include frame;\n    padding: 32px;\n    margin: $spacing-between-section-items 0;\n  \n    &--no-border {\n      border: 0;\n    }\n  \n    &--no-gutter {\n      padding-right: 0;\n      padding-left: 0;\n    }\n  }','@import "./theme-mixins";\n@import "./css-settings";\n\n@mixin frame() {\n  border: var(--layout-border-color) 1px solid;\n  border-radius: $border-radius-medium;\n  @include theme-prop(border-color, layout-border-color);\n}',"$box-shadow-small: 0 4px 8px -1px rgba(0, 0, 0, 0.2);\n$box-shadow-medium: 0px 6px 20px -2px rgba(0, 0, 0, 0.2);\n$box-shadow-large: 0px 15px 50px -10px rgba(0, 0, 0, 0.3);\n\n$border-radius-extra-small: 2px;\n$border-radius-small: 4px;\n$border-radius-medium: 8px;\n$border-radius-big: 16px;\n\n$spacing-xxs: 2px;\n$spacing-xs: 4px;\n$spacing-xs-small: 6px;\n$spacing-small: 8px;\n$spacing-small-medium: 12px;\n$spacing-medium: 16px;\n$spacing-large: 24px;\n$spacing-xl: 32px;\n$spacing-xxl: 48px;\n$spacing-xxxl: 64px;\n\n$expand-animation-timing: cubic-bezier(0, 0, 0.35, 1);\n\n$grid-auto-fit-cell-width-small: 120px;\n$grid-auto-fit-cell-width-medium: 180px;\n$grid-auto-fit-cell-width-large: 240px;\n$grid-auto-fit-cell-width-xl: 300px;\n",'$basic-blue: #0085ff;\n$primary: #0085ff;\n$primary-hover: #0071d9;\n$link-color: #1f76c2;\n$gainsboro: #e1e1e1;\n$snow-white: #fff;\n$dark-blue: #0071d9;\n$success: #00ca72;\n$purple: #a358df;\n$error: #e44258;\n$private: #f65f7c;\n$share: #a358df;\n$surface: #292f4c;\n$wolf-gray: #c5c7d0;\n$mud-black: #323338;\n$dark: #323338;\n$riverstone-gray: #f5f6f8;\n$ui-grey: #e6e9ef;\n$asphalt: #676879;\n$higlight: #dff0ff;\n\n$theme: (\n  "layout-border-color": $ui-grey,\n  "primary-text-color": $mud-black,\n  "secondary-text-color": $mud-black,\n);\n$theme-var: (\n  "layout-border-color": var(--layout-border-color),\n  "primary-text-color": var(--primary-text-color),\n  "secondary-text-color": var(--secondary-text-color)\n);\n\n@mixin theme-prop($property: color, $color-variable: primary-text-color, $important: false) {\n  @if $important {\n    #{$property}: theme-value-default($color-variable) !important;\n    #{$property}: theme-value-var($color-variable) !important;\n  } @else {\n    #{$property}: theme-value-default($color-variable);\n    #{$property}: theme-value-var($color-variable);\n  }\n}\n\n@function theme-value-default($color-variable: primary-text-color) {\n  @return map-get($theme, $color-variable);\n}\n\n@function theme-value-var($color-variable: primary-text-color) {\n  @return map-get($theme-var, $color-variable);\n}\n'],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[12].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[12].use[3]!./src/storybook/components/visual-description/visual-description.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".uniphore-storybook-visual-description{display:flex;align-items:center}.uniphore-storybook-visual-description:not(:last-child){margin-bottom:24px}.uniphore-storybook-visual-description_visual{margin:0 5px 0 0}.uniphore-storybook-visual-description_visual>*{width:100%;height:100%}.uniphore-storybook-visual-description_text{display:flex;flex-direction:column;font-size:16px;line-height:24px;font-weight:400}.uniphore-storybook-visual-description_text:not(:last-child){margin-bottom:24px}.uniphore-storybook-visual-description h5{margin:0;font-size:16px;line-height:24px;font-weight:400}","",{version:3,sources:["webpack://./src/storybook/components/visual-description/visual-description.scss"],names:[],mappings:"AAAA,uCACE,YAAA,CACA,kBAAA,CAEA,wDACE,kBAAA,CAGF,8CACE,gBAAA,CACA,gDACE,UAAA,CACA,WAAA,CAIJ,4CACE,YAAA,CACA,qBAAA,CACA,cAAA,CACA,gBAAA,CACA,eAAA,CACA,6DACE,kBAAA,CAIJ,0CACE,QAAA,CACA,cAAA,CACA,gBAAA,CACA,eAAA",sourcesContent:[".uniphore-storybook-visual-description {\r\n  display: flex;\r\n  align-items: center;\r\n  \r\n  &:not(:last-child) {\r\n    margin-bottom: 24px;\r\n  }\r\n\r\n  &_visual {\r\n    margin: 0 5px 0 0;\r\n    & > * {\r\n      width: 100%;\r\n      height: 100%;\r\n    }\r\n  }\r\n\r\n  &_text {\r\n    display: flex;\r\n    flex-direction: column;\r\n    font-size: 16px;\r\n    line-height: 24px;\r\n    font-weight: 400;\r\n    &:not(:last-child) {\r\n      margin-bottom: 24px;\r\n    }\r\n  }\r\n\r\n  h5 {\r\n    margin: 0;\r\n    font-size: 16px;\r\n    line-height: 24px;\r\n    font-weight: 400;\r\n  }\r\n}"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);