"use strict";(self.webpackChunk_uniphore_ui_framework=self.webpackChunk_uniphore_ui_framework||[]).push([[601],{"./src/storybook/foundations-documentation/colors/colors.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__page:()=>__page,default:()=>colors_stories});var react=__webpack_require__("./node_modules/react/index.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),frame_frame=__webpack_require__("./src/storybook/components/frame/frame.jsx"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),color_description=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[12].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[12].use[3]!./src/storybook/components/color-description/color-description.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(color_description.Z,options);color_description.Z&&color_description.Z.locals&&color_description.Z.locals;var visual_description=__webpack_require__("./src/storybook/components/visual-description/visual-description.jsx"),ColorDescription=function ColorDescription(_ref){var colorName=_ref.colorName,description=_ref.description,color=react.createElement("div",{className:"uniphore-storybook-color-description",style:{backgroundColor:"var(--".concat(colorName,")")}});return react.createElement(visual_description.U,{title:colorName,description,className:"uniphore-storybook-color-visual-description"},color)},colorsHashMap=[{color:"--white-color",description:"Description should go here....."},{color:"--white-grey-color",description:"Description should go here....."},{color:"--warm-grey-color",description:"Description should go here...."},{color:"--frost-grey-color",description:"Description should go here...."},{color:"--pale-grey-color",description:"Description should go here...."},{color:"--silver-color",description:"Description should go here...."},{color:"--medium-grey-color",description:"Description should go here...."},{color:"--cool-grey-color",description:"Description should go here...."},{color:"--sonic-grey-color",description:"Description should go here...."},{color:"--onix-color",description:"Description should go here...."},{color:"--jet-color",description:"Description should go here...."},{color:"--icy-blue-color",description:"Description should go here...."},{color:"--baby-blue-color",description:"Description should go here...."},{color:"--uniphore-blue-color",description:"Description should go here...."},{color:"--true-blue-color",description:"Description should go here...."},{color:"--active-blue-color",description:"Description should go here...."},{color:"--oxford-blue-color",description:"Description should go here...."},{color:"--nav-blue-color",description:"Description should go here...."},{color:"--honeydew-color",description:"Description should go here...."},{color:"--emerald-color",description:"Description should go here...."},{color:"--panton-green-color",description:"Description should go here...."},{color:"--grass-green-color",description:"Description should go here...."},{color:"--true-green-color",description:"Description should go here...."},{color:"--cosmic-latte-color",description:"Description should go here...."},{color:"--corn-silk-color",description:"Description should go here...."},{color:"--marigold-color",description:"Description should go here...."},{color:"--harvest-gold-color",description:"Description should go here...."},{color:"--orange-color",description:"Description should go here...."},{color:"--linen-color",description:"Description should go here...."},{color:"--raw-silk-color",description:"Description should go here...."},{color:"--pale-magenta-color",description:"Description should go here...."},{color:"--ultra-red-color",description:"Description should go here...."},{color:"--dark-candy-red-color",description:"Description should go here...."},{color:"--bright-lav-color",description:"Description should go here...."},{color:"--darl-lav-color",description:"Description should go here...."}].reduce((function(map,current){var newColorName=current.color.substring(2);return map.set(newColorName,current.description),map}),new Map),ColorsDescription=function ColorsDescription(_ref){var colorNames=_ref.colorNames,descriptions=(0,react.useMemo)((function(){return colorNames.map((function(color){return react.createElement(ColorDescription,{key:color,colorName:color,description:colorsHashMap.get(color)})}))}),[colorNames]);return react.createElement(frame_frame.R,null,descriptions)},colorKeys=["white-color-hila","white-grey-color","warm-grey-color","frost-grey-color","pale-grey-color","silver-color","medium-grey-color","cool-grey-color","sonic-grey-color","onix-color","jet-color"],NeutralColors=function NeutralColors(){return react.createElement(ColorsDescription,{colorNames:colorKeys})},approved_colors_colorKeys=["honeydew-color","emerald-color","panton-green-color","grass-green-color","true-green-color"],ApprovedColors=function ApprovedColors(){return react.createElement(ColorsDescription,{colorNames:approved_colors_colorKeys})},warning_colors_colorKeys=["cosmic-latte-color","corn-silk-color","marigold-color","harvest-gold-color","orange-color"],WarningColors=function WarningColors(){return react.createElement(ColorsDescription,{colorNames:warning_colors_colorKeys})},error_colors_colorKeys=["linen-color","raw-silk-color","pale-magenta-color","ultra-red-color","dark-candy-red-color"],ErrorColors=function ErrorColors(){return react.createElement(ColorsDescription,{colorNames:error_colors_colorKeys})},purpal_colors_colorKeys=["bright-lav-color","darl-lav-color"],PurpalColors=function PurpalColors(){return react.createElement(ColorsDescription,{colorNames:purpal_colors_colorKeys})},active_colors_colorKeys=["icy-blue-color","baby-blue-color","uniphore-blue-color","true-blue-color","active-blue-color","oxford-blue-color","nav-blue-color"],ActiveColors=function ActiveColors(){return react.createElement(ColorsDescription,{colorNames:active_colors_colorKeys})},component_name=__webpack_require__("./src/storybook/components/component-name/component-name.jsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Foundations/Colors",tags:["stories-mdx"],includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{})}):_createMdxContent();function _createMdxContent(){const _components=Object.assign({ul:"ul",li:"li",a:"a",h2:"h2",p:"p",h3:"h3"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Foundations/Colors"}),"\n",(0,jsx_runtime.jsx)(component_name.y,{children:"Colors"}),"\n",(0,jsx_runtime.jsx)("br",{}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#overview",children:"Overview"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#color-keys",children:"Color keys"})}),"\n"]}),"\n",(0,jsx_runtime.jsx)("br",{}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"overview",children:"Overview"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["This page details the color structure for the Uniphore Design System’s UI. ",(0,jsx_runtime.jsx)("br",{}),"\r\nCertain colors with specified usages (warning, error, etc.) should not be used outside the context of those meanings."]}),"\n",(0,jsx_runtime.jsx)("br",{}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"color-keys",children:"Color keys"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"neutral-colors",children:"Neutral colors"}),"\n",(0,jsx_runtime.jsx)(NeutralColors,{}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"active-colors",children:"Active colors"}),"\n",(0,jsx_runtime.jsx)(ActiveColors,{}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"approved-colors",children:"Approved colors"}),"\n",(0,jsx_runtime.jsx)(ApprovedColors,{}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"warning-colors",children:"Warning colors"}),"\n",(0,jsx_runtime.jsx)(WarningColors,{}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"error-colors",children:"Error colors"}),"\n",(0,jsx_runtime.jsx)(ErrorColors,{}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"purpal-colors",children:"Purpal colors"}),"\n",(0,jsx_runtime.jsx)(PurpalColors,{})]})}}};const colors_stories=componentMeta},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[12].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[12].use[3]!./src/storybook/components/color-description/color-description.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".uniphore-storybook-color-description{border-radius:2px}.uniphore-storybook-color-visual-description>figure{width:40px;height:40px}","",{version:3,sources:["webpack://./src/storybook/components/color-description/color-description.scss","webpack://./src/storybook/styles/css-settings.scss"],names:[],mappings:"AAEA,sCACE,iBCC0B,CDE5B,oDACE,UAAA,CACA,WAAA",sourcesContent:['@import "../../styles/css-settings.scss";\n\n.uniphore-storybook-color-description {\n  border-radius: $border-radius-extra-small;\n}\n\n.uniphore-storybook-color-visual-description > figure {\n  width: 40px;\n  height: 40px;\n}',"$box-shadow-small: 0 4px 8px -1px rgba(0, 0, 0, 0.2);\n$box-shadow-medium: 0px 6px 20px -2px rgba(0, 0, 0, 0.2);\n$box-shadow-large: 0px 15px 50px -10px rgba(0, 0, 0, 0.3);\n\n$border-radius-extra-small: 2px;\n$border-radius-small: 4px;\n$border-radius-medium: 8px;\n$border-radius-big: 16px;\n\n$spacing-xxs: 2px;\n$spacing-xs: 4px;\n$spacing-xs-small: 6px;\n$spacing-small: 8px;\n$spacing-small-medium: 12px;\n$spacing-medium: 16px;\n$spacing-large: 24px;\n$spacing-xl: 32px;\n$spacing-xxl: 48px;\n$spacing-xxxl: 64px;\n\n$expand-animation-timing: cubic-bezier(0, 0, 0.35, 1);\n\n$grid-auto-fit-cell-width-small: 120px;\n$grid-auto-fit-cell-width-medium: 180px;\n$grid-auto-fit-cell-width-large: 240px;\n$grid-auto-fit-cell-width-xl: 300px;\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);