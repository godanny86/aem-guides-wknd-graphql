(this["webpackJsonpaem-guides-wknd-app"]=this["webpackJsonpaem-guides-wknd-app"]||[]).push([[0],{32:function(e,t,n){e.exports=n.p+"static/media/wknd-logo-dk.36593320.svg"},33:function(e,t,n){e.exports=n.p+"static/media/icon-close.f227c489.svg"},34:function(e,t,n){e.exports=n.p+"static/media/icon-loading.200bc7ed.svg"},36:function(e,t,n){e.exports=n(76)},59:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(31),c=n.n(i),l=n(7),u=n(1),o=n(32),s=n.n(o),d=n(6),m=n(8),v=Object({NODE_ENV:"production",PUBLIC_URL:"https://godanny86.github.io/aem-guides-wknd-graphql",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_HOST_URI:"http://localhost:4503",REACT_APP_GRAPHQL_ENDPOINT:"/content/graphql/endpoint.gql",REACT_APP_AEM_PROJECT_ROOT:"wknd-spa/us/en/",REACT_APP_AEM_ENVIRONMENT:"publish"}),p=v.REACT_APP_HOST_URI,h=v.REACT_APP_GRAPHQL_ENDPOINT,E=v.REACT_APP_AUTHORIZATION;function _(){var e=new Headers;return e.append("Content-Type","application/json"),E&&e.append("Authorization","Basic "+btoa(E)),e}var f=function(e,t){var n=Object(a.useState)(null),r=Object(m.a)(n,2),i=r[0],c=r[1],l=Object(a.useState)(null),u=Object(m.a)(l,2),o=u[0],s=u[1];return Object(a.useEffect)((function(){t||window.fetch(p+h,{method:"POST",headers:_(),body:JSON.stringify({query:e})}).then((function(e){return e.json()})).then((function(e){var t=e.data,n=e.errors;n&&s(function(e){return e.map((function(e){return e.message})).join(",")}(n)),t&&c(t)})).catch((function(e){s(e)}))}),[e,t]),{data:i,errorMessage:o}},T=n(33),g=n.n(T),O=n(11),P=n(12),b=n(14),N=n(13),A=function(e){Object(b.a)(n,e);var t=Object(N.a)(n);function n(){return Object(O.a)(this,n),t.apply(this,arguments)}return Object(P.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"error"},r.a.createElement("span",{className:"error-message"},"Error: ".concat(this.props.errorMessage)))}}]),n}(a.Component),R=n(34),y=n.n(R),C=function(e){Object(b.a)(n,e);var t=Object(N.a)(n);function n(){return Object(O.a)(this,n),t.apply(this,arguments)}return Object(P.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"loading"},r.a.createElement("img",{src:y.a,alt:"Loading..."}))}}]),n}(a.Component),S=(n(59),n(15)),j=n(16),I={emptyLabel:"Text",isEmpty:j.TextV2IsEmptyFn,resourceType:"wknd-spa/components/text"},w=Object(S.withMappable)(j.TextV2,I);Object(S.MapTo)("wknd-spa/components/text")(j.TextV2,I);var L=function(e){var t=e._path;return e._publishUrl&&(t=e._publishUrl),r.a.createElement("img",{className:e.className,src:t,alt:e.alt})};var k="\n  {\n    adventureList {\n      items {\n        _path\n      }\n    }\n  }\n";function M(e){if(!e)return null;var t=null;return e.pictureReference&&(t=r.a.createElement("img",{className:"contributor-image",src:e.pictureReference._path,alt:e.fullName})),r.a.createElement("div",{className:"contributor"},r.a.createElement("hr",{className:"contributor-separator"}),t,r.a.createElement("h3",{className:"contributor-name"},e.fullName),r.a.createElement("h4",{className:"contributor-occupation"},e.occupation))}var H=Object(u.o)((function(e){var t,n=Object(a.useState)(null===(t=e.location)||void 0===t?void 0:t.data),i=Object(m.a)(n,2),c=i[0],u=i[1],o=f(k,c).data;Object(a.useEffect)((function(){if(o){var e,t,n=null===(e=o.adventureList)||void 0===e||null===(t=e.items)||void 0===t?void 0:t.map((function(e){return e._path})),a=window.location.pathname;a=(a=a.substring(a.lastIndexOf("/")+1,a.length)).replace(/(.html)/,""),n.forEach((function(e){return e.indexOf(a)>=0&&u(e)}))}}),[o]);var s,d=f((s=c)&&'{\n    adventureByPath (_path: "'.concat(s,'") {\n      item {\n        _path\n          adventureTitle\n          adventureActivity\n          adventureType\n          adventurePrice\n          adventureTripLength\n          adventureGroupSize\n          adventureDifficulty\n          adventurePrice\n          adventurePrimaryImage {\n            ... on ImageRef {\n              _path\n              _authorUrl\n              _publishUrl\n              mimeType\n              width\n              height\n            }\n          }\n          adventureDescription {\n            html\n          }\n          adventureItinerary {\n            html\n          }\n      }\n    }\n  }\n  '),!c),v=d.data,p=d.errorMessage;if(p)return r.a.createElement(A,{errorMessage:p});if(!v)return r.a.createElement(C,null);var h=v.adventureByPath.item,E=c.substring(c.lastIndexOf("/")+1,c.length);return r.a.createElement("div",{className:"adventure-detail"},r.a.createElement(l.Link,{className:"adventure-detail-close-button",to:"/home"},r.a.createElement("img",{className:"Backbutton-icon",src:g.a,alt:"Return"})),r.a.createElement("h1",{className:"adventure-detail-title"},h.adventureTitle),r.a.createElement(w,{pagePath:"/content/wknd-spa/home/adventures/".concat(E),itemPath:"text21"}),r.a.createElement("div",{className:"adventure-detail-info"},r.a.createElement("div",{className:"adventure-detail-info-label"},"Activity"),r.a.createElement("div",{className:"adventure-detail-info-description"},h.adventureActivity),r.a.createElement("div",{className:"adventure-detail-info-label"},"Type"),r.a.createElement("div",{className:"adventure-detail-info-description"},h.adventureType),r.a.createElement("div",{className:"adventure-detail-info-label"},"Trip Length"),r.a.createElement("div",{className:"adventure-detail-info-description"},h.adventureTripLength),r.a.createElement("div",{className:"adventure-detail-info-label"},"Group Size"),r.a.createElement("div",{className:"adventure-detail-info-description"},h.adventureGroupSize),r.a.createElement("div",{className:"adventure-detail-info-label"},"Difficulty"),r.a.createElement("div",{className:"adventure-detail-info-description"},h.adventureDifficulty),r.a.createElement("div",{className:"adventure-detail-info-label"},"Price"),r.a.createElement("div",{className:"adventure-detail-info-description"},h.adventurePrice)),r.a.createElement("div",{className:"adventure-detail-content"},r.a.createElement(L,Object.assign({className:"adventure-detail-primaryimage",alt:h.adventureTitle},h.adventurePrimaryImage)),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:h.adventureDescription.html}}),r.a.createElement("h2",null,"Itinerary"),r.a.createElement("hr",null),r.a.createElement("div",{className:"adventure-detail-itinerary",dangerouslySetInnerHTML:{__html:h.adventureItinerary.html}}),r.a.createElement(M,h.adventureContributor)))}));n(74);function U(e){var t=e._path,n=t.split("/");return n=n[n.length-1],r.a.createElement("li",{className:"adventure-item"},r.a.createElement(l.Link,{to:{pathname:"/adventures/".concat(n),data:t}},r.a.createElement(L,Object.assign({className:"adventure-item-image",alt:e.adventureTitle},e.adventurePrimaryImage))),r.a.createElement("div",{className:"adventure-item-length-price"},r.a.createElement("div",{className:"adventure-item-length"},e.adventureTripLength),r.a.createElement("div",{className:"adventure-item-price"},e.adventurePrice)),r.a.createElement("div",{className:"adventure-item-title"},e.adventureTitle))}var D="\n  {\n    adventureList {\n      items {\n        _path\n        adventureTitle\n        adventurePrice\n        adventureTripLength\n        adventurePrimaryImage {\n          ... on ImageRef {\n            _path\n            _authorUrl\n            _publishUrl\n            mimeType\n            width\n            height\n          }\n        }\n      }\n    }\n  }\n";function x(e){return'\n    {\n      adventureList (filter: {\n        adventureActivity: {\n          _expressions: [\n            {\n              value: "'.concat(e,'"\n            }\n          ]\n        }\n      }){\n        items {\n          _path\n        adventureTitle\n        adventurePrice\n        adventureTripLength\n        adventurePrimaryImage {\n          ... on ImageRef {\n            _path\n            _authorUrl\n            _publishUrl\n            mimeType\n            width\n            height\n          }\n        }\n      }\n    }\n  }\n  ')}var z=function(){var e=Object(a.useState)(D),t=Object(m.a)(e,2),n=t[0],i=t[1],c=f(n),l=c.data,u=c.errorMessage;return u?r.a.createElement(A,{errorMessage:u}):l?r.a.createElement("div",{className:"adventures"},r.a.createElement("button",{onClick:function(){return i(D)}},"All"),r.a.createElement("button",{onClick:function(){return i(x("Camping"))}},"Camping"),r.a.createElement("button",{onClick:function(){return i(x("Surfing"))}},"Surfing"),r.a.createElement("ul",{className:"adventure-items"},l.adventureList.items.map((function(e,t){return r.a.createElement(U,Object.assign({key:t},e))})))):r.a.createElement(C,null)},q=Object(S.withMappable)(S.Page);var B=function(){return r.a.createElement("div",{className:"Home"},r.a.createElement("h2",null,"Current Adventures"),r.a.createElement(q,{pagePath:"/content/wknd-spa/home"}),r.a.createElement(z,null))},K=(n(75),Object({NODE_ENV:"production",PUBLIC_URL:"https://godanny86.github.io/aem-guides-wknd-graphql",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_HOST_URI:"http://localhost:4503",REACT_APP_GRAPHQL_ENDPOINT:"/content/graphql/endpoint.gql",REACT_APP_AEM_PROJECT_ROOT:"wknd-spa/us/en/",REACT_APP_AEM_ENVIRONMENT:"publish"})),W=K.REACT_APP_HOST_URI,V=K.REACT_APP_AEM_PROJECT_ROOT;var G=function(){var e;return r.a.createElement(l.BrowserRouter,null,r.a.createElement("div",{className:"App"},r.a.createElement("header",null,r.a.createElement("img",{src:s.a,className:"logo",alt:"WKND Logo"}),r.a.createElement("hr",null)),r.a.createElement(u.g,null,r.a.createElement(u.d,{path:(e="/adventures/:path",d.PathUtils.toAEMPath(e,W,V))},r.a.createElement(H,null)),r.a.createElement(u.d,{path:"/"},r.a.createElement(B,null)))))},J=function(e){Object(b.a)(n,e);var t=Object(N.a)(n);function n(e,a){var r;return Object(O.a)(this,n),(r=t.call(this,e))._authorization=void 0,r._authorization=a||null,r}return Object(P.a)(n,[{key:"fetch",value:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(e){if(!e){var t="Fetching model rejected for path: "+e;return Promise.reject(new Error(t))}var n="".concat(this.apiHost).concat(e),a=new Headers;return a.append("Content-Type","application/json"),this.authorization&&a.append("Authorization","Basic "+btoa(this.authorization)),fetch(n,{headers:a}).then((function(e){if(e.status>=200&&e.status<300)return e.json();throw{response:e}})).catch((function(e){return Promise.reject(e)}))}))},{key:"authorization",get:function(){return this._authorization?this._authorization:""}}]),n}(d.ModelClient),Q=Object({NODE_ENV:"production",PUBLIC_URL:"https://godanny86.github.io/aem-guides-wknd-graphql",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_HOST_URI:"http://localhost:4503",REACT_APP_GRAPHQL_ENDPOINT:"/content/graphql/endpoint.gql",REACT_APP_AEM_PROJECT_ROOT:"wknd-spa/us/en/",REACT_APP_AEM_ENVIRONMENT:"publish"}),F=new J(Q.REACT_APP_HOST_URI,Q.REACT_APP_AUTHORIZATION);d.ModelManager.initializeAsync({modelClient:F}),c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(G,null)),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.ce4f0056.chunk.js.map