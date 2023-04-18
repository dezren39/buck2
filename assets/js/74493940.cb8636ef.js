"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9756],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>s,MDXProvider:()=>d,mdx:()=>x,useMDXComponents:()=>p,withMDXComponents:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){return function(t){var n=p(t.components);return r.createElement(e,o({},t,{components:n}))}},p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},b="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,b=u["".concat(i,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(b,l(l({ref:t},s),{},{components:n})):r.createElement(b,l({ref:t},s))}));function x(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[b]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},4970:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={id:"bxl_actions"},i="bxl_actions type",l={unversionedId:"api/bxl/bxl_actions",id:"api/bxl/bxl_actions",title:"bxl_actions type",description:"The bxl action context for creating and running actions.",source:"@site/../docs/api/bxl/bxl_actions.generated.md",sourceDirName:"api/bxl",slug:"/api/bxl/bxl_actions",permalink:"/docs/api/bxl/bxl_actions",draft:!1,tags:[],version:"current",frontMatter:{id:"bxl_actions"},sidebar:"manualSidebar",previous:{title:"audit_ctx type",permalink:"/docs/api/bxl/audit_ctx"},next:{title:"bxl_build_result type",permalink:"/docs/api/bxl/bxl_build_result"}},c={},s=[{value:"bxl_actions.action_factory",id:"bxl_actionsaction_factory",level:2},{value:"Details",id:"details",level:4}],u={toc:s};function p(e){let{components:t,...n}=e;return(0,a.mdx)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("h1",{id:"bxl_actions-type"},(0,a.mdx)("inlineCode",{parentName:"h1"},"bxl_actions")," type"),(0,a.mdx)("p",null,"The bxl action context for creating and running actions."),(0,a.mdx)("h2",{id:"bxl_actionsaction_factory"},"bxl_actions.action_factory"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-python"},'def bxl_actions.action_factory() -> ""\n')),(0,a.mdx)("p",null,"Returns the analysis registry ","[",(0,a.mdx)("inlineCode",{parentName:"p"},"AnalysisRegistry"),"]"," to create and register actions for this bxl function. This will have the same functionality as the actions for rules."),(0,a.mdx)("h4",{id:"details"},"Details"),(0,a.mdx)("p",null,"Actions created by bxl will not be built by default. Instead, they are marked to be built\nby ",(0,a.mdx)("inlineCode",{parentName:"p"},"ctx.output.ensure(artifact)")," on the output module of the ","[",(0,a.mdx)("inlineCode",{parentName:"p"},"BxlContext"),"]",". Only artifacts\nmarked by ensure will be built."),(0,a.mdx)("p",null,"Sample usage:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-text"},'def _impl_write_action(ctx):\n    actions = ctx.bxl_actions.action_factory()\n    output = actions.write("my_output", "my_content")\n    ensured = ctx.output.ensure(output)\n    ctx.output.print(ensured)\n')))}p.isMDXComponent=!0}}]);