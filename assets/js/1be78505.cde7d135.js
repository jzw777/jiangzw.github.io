"use strict";(self.webpackChunkwujiehutong_home=self.webpackChunkwujiehutong_home||[]).push([[9514,4972],{8292:(e,t,a)=>{a.r(t),a.d(t,{default:()=>Ze});var n=a(7294),l=a(6010),o=a(833),r=a(5281),i=a(3320),c=a(2802),s=a(4477),d=a(1116),m=a(2880),u=a(5999),b=a(2466),p=a(5936);const h="backToTopButton_sjWU",E="backToTopButtonShow_xfvO";function g(){const{shown:e,scrollToTop:t}=function(e){let{threshold:t}=e;const[a,l]=(0,n.useState)(!1),o=(0,n.useRef)(!1),{startScroll:r,cancelScroll:i}=(0,b.Ct)();return(0,b.RF)(((e,a)=>{let{scrollY:n}=e;const r=a?.scrollY;r&&(o.current?o.current=!1:n>=r?(i(),l(!1)):n<t?l(!1):n+window.innerHeight<document.documentElement.scrollHeight&&l(!0))})),(0,p.S)((e=>{e.location.hash&&(o.current=!0,l(!1))})),{shown:a,scrollToTop:()=>r(0)}}({threshold:300});return n.createElement("button",{"aria-label":(0,u.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,l.Z)("clean-btn",r.k.common.backToTopButton,h,e&&E),type:"button",onClick:t})}var f=a(6550),v=a(7524),_=a(6668),k=a(7462),C=a(9960),N=a(4996),S=a(2263),I=a(941);function Z(e){let{logo:t,alt:a,imageClassName:l}=e;const o={light:(0,N.Z)(t.src),dark:(0,N.Z)(t.srcDark||t.src)},r=n.createElement(I.Z,{className:t.className,sources:o,height:t.height,width:t.width,alt:a,style:t.style});return l?n.createElement("div",{className:l},r):r}function y(e){const{siteConfig:{title:t}}=(0,S.Z)(),{navbar:{title:a,logo:l}}=(0,_.L)(),{imageClassName:o,titleClassName:r,...i}=e,c=(0,N.Z)(l?.href||"/"),s=a?"":t,d=l?.alt??s;return n.createElement(C.Z,(0,k.Z)({to:c},i,l?.target&&{target:l.target}),l&&n.createElement(Z,{logo:l,alt:d,imageClassName:o}),null!=a&&n.createElement("b",{className:r},a))}function T(e){return n.createElement("svg",(0,k.Z)({width:"20",height:"20","aria-hidden":"true"},e),n.createElement("g",{fill:"#7a7a7a"},n.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),n.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}const w="collapseSidebarButton_PEFL",x="collapseSidebarButtonIcon_kv0_";function L(e){let{onClick:t}=e;return n.createElement("button",{type:"button",title:(0,u.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,l.Z)("button button--secondary button--outline",w),onClick:t},n.createElement(T,{className:x}))}var A=a(9689),M=a(902);const B=Symbol("EmptyContext"),F=n.createContext(B);function H(e){let{children:t}=e;const[a,l]=(0,n.useState)(null),o=(0,n.useMemo)((()=>({expandedItem:a,setExpandedItem:l})),[a]);return n.createElement(F.Provider,{value:o},t)}var P=a(6043),D=a(8596),W=a(2389);function R(e){let{categoryLabel:t,onClick:a}=e;return n.createElement("button",{"aria-label":(0,u.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:t}),type:"button",className:"clean-btn menu__caret",onClick:a})}function V(e){let{item:t,onItemClick:a,activePath:o,level:i,index:s,...d}=e;const{items:m,label:u,collapsible:b,className:p,href:h}=t,{docs:{sidebar:{autoCollapseCategories:E}}}=(0,_.L)(),g=function(e){const t=(0,W.Z)();return(0,n.useMemo)((()=>e.href?e.href:!t&&e.collapsible?(0,c.Wl)(e):void 0),[e,t])}(t),f=(0,c._F)(t,o),v=(0,D.Mg)(h,o),{collapsed:N,setCollapsed:S}=(0,P.u)({initialState:()=>!!b&&(!f&&t.collapsed)}),{expandedItem:I,setExpandedItem:Z}=function(){const e=(0,n.useContext)(F);if(e===B)throw new M.i6("DocSidebarItemsExpandedStateProvider");return e}(),y=function(e){void 0===e&&(e=!N),Z(e?null:s),S(e)};return function(e){let{isActive:t,collapsed:a,updateCollapsed:l}=e;const o=(0,M.D9)(t);(0,n.useEffect)((()=>{t&&!o&&a&&l(!1)}),[t,o,a,l])}({isActive:f,collapsed:N,updateCollapsed:y}),(0,n.useEffect)((()=>{b&&null!=I&&I!==s&&E&&S(!0)}),[b,I,s,S,E]),n.createElement("li",{className:(0,l.Z)(r.k.docs.docSidebarItemCategory,r.k.docs.docSidebarItemCategoryLevel(i),"menu__list-item",{"menu__list-item--collapsed":N},p)},n.createElement("div",{className:(0,l.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":v})},n.createElement(C.Z,(0,k.Z)({className:(0,l.Z)("menu__link",{"menu__link--sublist":b,"menu__link--sublist-caret":!h&&b,"menu__link--active":f}),onClick:b?e=>{a?.(t),h?y(!1):(e.preventDefault(),y())}:()=>{a?.(t)},"aria-current":v?"page":void 0,"aria-expanded":b?!N:void 0,href:b?g??"#":g},d),u),h&&b&&n.createElement(R,{categoryLabel:u,onClick:e=>{e.preventDefault(),y()}})),n.createElement(P.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:N},n.createElement(X,{items:m,tabIndex:N?-1:0,onItemClick:a,activePath:o,level:i+1})))}var z=a(3919),U=a(9471);const j="menuExternalLink_NmtK";function K(e){let{item:t,onItemClick:a,activePath:o,level:i,index:s,...d}=e;const{href:m,label:u,className:b,autoAddBaseUrl:p}=t,h=(0,c._F)(t,o),E=(0,z.Z)(m);return n.createElement("li",{className:(0,l.Z)(r.k.docs.docSidebarItemLink,r.k.docs.docSidebarItemLinkLevel(i),"menu__list-item",b),key:u},n.createElement(C.Z,(0,k.Z)({className:(0,l.Z)("menu__link",!E&&j,{"menu__link--active":h}),autoAddBaseUrl:p,"aria-current":h?"page":void 0,to:m},E&&{onClick:a?()=>a(t):void 0},d),u,!E&&n.createElement(U.Z,null)))}const G="menuHtmlItem_M9Kj";function Y(e){let{item:t,level:a,index:o}=e;const{value:i,defaultStyle:c,className:s}=t;return n.createElement("li",{className:(0,l.Z)(r.k.docs.docSidebarItemLink,r.k.docs.docSidebarItemLinkLevel(a),c&&[G,"menu__list-item"],s),key:o,dangerouslySetInnerHTML:{__html:i}})}function q(e){let{item:t,...a}=e;switch(t.type){case"category":return n.createElement(V,(0,k.Z)({item:t},a));case"html":return n.createElement(Y,(0,k.Z)({item:t},a));default:return n.createElement(K,(0,k.Z)({item:t},a))}}function O(e){let{items:t,...a}=e;return n.createElement(H,null,t.map(((e,t)=>n.createElement(q,(0,k.Z)({key:t,item:e,index:t},a)))))}const X=(0,n.memo)(O),J="menu_SIkG",Q="menuWithAnnouncementBar_GW3s";function $(e){let{path:t,sidebar:a,className:o}=e;const i=function(){const{isActive:e}=(0,A.nT)(),[t,a]=(0,n.useState)(e);return(0,b.RF)((t=>{let{scrollY:n}=t;e&&a(0===n)}),[e]),e&&t}();return n.createElement("nav",{"aria-label":(0,u.I)({id:"theme.docs.sidebar.navAriaLabel",message:"Docs sidebar",description:"The ARIA label for the sidebar navigation"}),className:(0,l.Z)("menu thin-scrollbar",J,i&&Q,o)},n.createElement("ul",{className:(0,l.Z)(r.k.docs.docSidebarMenu,"menu__list")},n.createElement(X,{items:a,activePath:t,level:1})))}const ee="sidebar_njMd",te="sidebarWithHideableNavbar_wUlq",ae="sidebarHidden_VK0M",ne="sidebarLogo_isFc";function le(e){let{path:t,sidebar:a,onCollapse:o,isHidden:r}=e;const{navbar:{hideOnScroll:i},docs:{sidebar:{hideable:c}}}=(0,_.L)();return n.createElement("div",{className:(0,l.Z)(ee,i&&te,r&&ae)},i&&n.createElement(y,{tabIndex:-1,className:ne}),n.createElement($,{path:t,sidebar:a}),c&&n.createElement(L,{onClick:o}))}const oe=n.memo(le);var re=a(3102),ie=a(2961);const ce=e=>{let{sidebar:t,path:a}=e;const o=(0,ie.e)();return n.createElement("ul",{className:(0,l.Z)(r.k.docs.docSidebarMenu,"menu__list")},n.createElement(X,{items:t,activePath:a,onItemClick:e=>{"category"===e.type&&e.href&&o.toggle(),"link"===e.type&&o.toggle()},level:1}))};function se(e){return n.createElement(re.Zo,{component:ce,props:e})}const de=n.memo(se);function me(e){const t=(0,v.i)(),a="desktop"===t||"ssr"===t,l="mobile"===t;return n.createElement(n.Fragment,null,a&&n.createElement(oe,e),l&&n.createElement(de,e))}const ue="expandButton_m80_",be="expandButtonIcon_BlDH";function pe(e){let{toggleSidebar:t}=e;return n.createElement("div",{className:ue,title:(0,u.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t},n.createElement(T,{className:be}))}const he={docSidebarContainer:"docSidebarContainer_b6E3",docSidebarContainerHidden:"docSidebarContainerHidden_b3ry",sidebarViewport:"sidebarViewport_Xe31"};function Ee(e){let{children:t}=e;const a=(0,d.V)();return n.createElement(n.Fragment,{key:a?.name??"noSidebar"},t)}function ge(e){let{sidebar:t,hiddenSidebarContainer:a,setHiddenSidebarContainer:o}=e;const{pathname:i}=(0,f.TH)(),[c,s]=(0,n.useState)(!1),d=(0,n.useCallback)((()=>{c&&s(!1),o((e=>!e))}),[o,c]);return n.createElement("aside",{className:(0,l.Z)(r.k.docs.docSidebarContainer,he.docSidebarContainer,a&&he.docSidebarContainerHidden),onTransitionEnd:e=>{e.currentTarget.classList.contains(he.docSidebarContainer)&&a&&s(!0)}},n.createElement(Ee,null,n.createElement("div",{className:(0,l.Z)(he.sidebarViewport,c&&he.sidebarViewportHidden)},n.createElement(me,{sidebar:t,path:i,onCollapse:d,isHidden:c}),c&&n.createElement(pe,{toggleSidebar:d}))))}const fe={docMainContainer:"docMainContainer_gTbr",docMainContainerEnhanced:"docMainContainerEnhanced_Uz_u",docItemWrapperEnhanced:"docItemWrapperEnhanced_czyv"};function ve(e){let{hiddenSidebarContainer:t,children:a}=e;const o=(0,d.V)();return n.createElement("main",{className:(0,l.Z)(fe.docMainContainer,(t||!o)&&fe.docMainContainerEnhanced)},n.createElement("div",{className:(0,l.Z)("container padding-top--md padding-bottom--lg",fe.docItemWrapper,t&&fe.docItemWrapperEnhanced)},a))}const _e="docPage__5DB",ke="docsWrapper_BCFX";function Ce(e){let{children:t}=e;const a=(0,d.V)(),[l,o]=(0,n.useState)(!1);return n.createElement(m.Z,{wrapperClassName:ke},n.createElement(g,null),n.createElement("div",{className:_e},a&&n.createElement(ge,{sidebar:a.items,hiddenSidebarContainer:l,setHiddenSidebarContainer:o}),n.createElement(ve,{hiddenSidebarContainer:l},t)))}var Ne=a(4972),Se=a(197);function Ie(e){const{versionMetadata:t}=e;return n.createElement(n.Fragment,null,n.createElement(Se.Z,{version:t.version,tag:(0,i.os)(t.pluginId,t.version)}),n.createElement(o.d,null,t.noIndex&&n.createElement("meta",{name:"robots",content:"noindex, nofollow"})))}function Ze(e){const{versionMetadata:t}=e,a=(0,c.hI)(e);if(!a)return n.createElement(Ne.default,null);const{docElement:i,sidebarName:m,sidebarItems:u}=a;return n.createElement(n.Fragment,null,n.createElement(Ie,e),n.createElement(o.FG,{className:(0,l.Z)(r.k.wrapper.docsPages,r.k.page.docsDocPage,e.versionMetadata.className)},n.createElement(s.q,{version:t},n.createElement(d.b,{name:m,items:u},n.createElement(Ce,null,i)))))}},4972:(e,t,a)=>{a.r(t),a.d(t,{default:()=>i});var n=a(7294),l=a(5999),o=a(833),r=a(2880);function i(){return n.createElement(n.Fragment,null,n.createElement(o.d,{title:(0,l.I)({id:"theme.NotFound.title",message:"Page Not Found"})}),n.createElement(r.Z,null,n.createElement("main",{className:"container margin-vert--xl"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col col--6 col--offset-3"},n.createElement("h1",{className:"hero__title"},n.createElement(l.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),n.createElement("p",null,n.createElement(l.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),n.createElement("p",null,n.createElement(l.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))))}}}]);