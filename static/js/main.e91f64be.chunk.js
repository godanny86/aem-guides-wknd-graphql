(this["webpackJsonpaem-guides-wknd-app"]=this["webpackJsonpaem-guides-wknd-app"]||[]).push([[0],{20:function(e,t,a){e.exports=a.p+"static/media/wknd-logo-dk.36593320.svg"},21:function(e,t,a){e.exports=a.p+"static/media/icon-loading.200bc7ed.svg"},23:function(e,t,a){e.exports=a.p+"static/media/icon-close.f227c489.svg"},24:function(e,t,a){e.exports=a(37)},29:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(19),c=a.n(i),l=a(7),u=a(1),m=a(20),s=a.n(m),d=a(9),o=Object({NODE_ENV:"production",PUBLIC_URL:"/aem-guides-wknd-graphql",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_HOST_URI:"https://publish-p29702-e95905.adobeaemcloud.com",REACT_APP_GRAPHQL_ENDPOINT:"/content/graphql/global/endpoint.json"}),v=o.REACT_APP_HOST_URI,p=o.REACT_APP_GRAPHQL_ENDPOINT,E=o.REACT_APP_AUTHORIZATION;var f=function(e){var t=Object(n.useState)(null),a=Object(d.a)(t,2),r=a[0],i=a[1],c=Object(n.useState)(null),l=Object(d.a)(c,2),u=l[0],m=l[1];return Object(n.useEffect)((function(){window.fetch(v+p,function(e){var t=new Headers;t.append("Content-Type","application/json"),E&&t.append("Authorization","Basic "+btoa(E));return{method:"POST",headers:t,body:JSON.stringify({query:e})}}(e)).then((function(e){return e.json()})).then((function(e){var t=e.data,a=e.errors;a&&m(function(e){return e.map((function(e){return e.message})).join(",")}(a)),t&&i(t)})).catch((function(e){m(e)}))}),[e]),{data:r,errorMessage:u}},h=a(10),g=a(11),N=a(13),b=a(12),T=function(e){Object(N.a)(a,e);var t=Object(b.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(g.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"error"},r.a.createElement("span",{className:"error-message"},"Error: ".concat(this.props.errorMessage)))}}]),a}(n.Component),_=a(21),y=a.n(_),O=function(e){Object(N.a)(a,e);var t=Object(b.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(g.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"loading"},r.a.createElement("img",{src:y.a,alt:"Loading..."}))}}]),a}(n.Component);a(29);function P(e){return r.a.createElement("li",{className:"adventure-item"},r.a.createElement(l.b,{to:"/adventure:".concat(e._path)},r.a.createElement("img",{className:"adventure-item-image",src:e.adventurePrimaryImage._path,alt:e.adventureTitle})),r.a.createElement("div",{className:"adventure-item-length-price"},r.a.createElement("div",{className:"adventure-item-length"},e.adventureTripLength),r.a.createElement("div",{className:"adventure-item-price"},e.adventurePrice)),r.a.createElement("div",{className:"adventure-item-title"},e.adventureTitle))}var A="\n  {\n    adventureList {\n      items {\n        _path\n        adventureTitle\n        adventurePrice\n        adventureTripLength\n        adventurePrimaryImage {\n          ... on ImageRef {\n            _path\n            mimeType\n            width\n            height\n          }\n        }\n      }\n    }\n  }\n";function j(e){return'\n    {\n      adventureList (filter: {\n        adventureActivity: {\n          _expressions: [\n            {\n              value: "'.concat(e,'"\n            }\n          ]\n        }\n      }){\n        items {\n          _path\n        adventureTitle\n        adventurePrice\n        adventureTripLength\n        adventurePrimaryImage {\n          ... on ImageRef {\n            _path\n            mimeType\n            width\n            height\n          }\n        }\n      }\n    }\n  }\n  ')}var S=function(){var e=Object(n.useState)(A),t=Object(d.a)(e,2),a=t[0],i=t[1],c=f(a),l=c.data,u=c.errorMessage;return u?r.a.createElement(T,{errorMessage:u}):l?r.a.createElement("div",{className:"adventures"},r.a.createElement("button",{onClick:function(){return i(A)}},"All"),r.a.createElement("button",{onClick:function(){return i(j("Camping"))}},"Camping"),r.a.createElement("button",{onClick:function(){return i(j("Surfing"))}},"Surfing"),r.a.createElement("ul",{className:"adventure-items"},l.adventureList.items.map((function(e,t){return r.a.createElement(P,Object.assign({key:t},e))})))):r.a.createElement(O,null)},I=a(23),C=a.n(I);a(35);function R(e){if(!e)return null;var t=null;return e.pictureReference&&(t=r.a.createElement("img",{className:"contributor-image",src:e.pictureReference._path,alt:e.fullName})),r.a.createElement("div",{className:"contributor"},r.a.createElement("hr",{className:"contributor-separator"}),t,r.a.createElement("h3",{className:"contributor-name"},e.fullName),r.a.createElement("h4",{className:"contributor-occupation"},e.occupation))}var L=Object(u.f)((function(e){var t=e.location.pathname.substring(e.match.url.length),a=f('{\n    adventureByPath (_path: "'.concat(t,'") {\n      item {\n        _path\n          adventureTitle\n          adventureActivity\n          adventureType\n          adventurePrice\n          adventureTripLength\n          adventureGroupSize\n          adventureDifficulty\n          adventurePrice\n          adventurePrimaryImage {\n            ... on ImageRef {\n              _path\n              mimeType\n              width\n              height\n            }\n          }\n          adventureDescription {\n            html\n          }\n          adventureItinerary {\n            html\n          }\n      }\n    }\n  }\n  ')),n=a.data,i=a.errorMessage;if(i)return r.a.createElement(T,{errorMessage:i});if(!n)return r.a.createElement(O,null);var c=n.adventureByPath.item;return r.a.createElement("div",{className:"adventure-detail"},r.a.createElement(l.b,{className:"adventure-detail-close-button",to:"/Home"},r.a.createElement("img",{className:"Backbutton-icon",src:C.a,alt:"Return"})),r.a.createElement("h1",{className:"adventure-detail-title"},c.adventureTitle),r.a.createElement("div",{className:"adventure-detail-info"},r.a.createElement("div",{className:"adventure-detail-info-label"},"Activity"),r.a.createElement("div",{className:"adventure-detail-info-description"},c.adventureActivity),r.a.createElement("div",{className:"adventure-detail-info-label"},"Type"),r.a.createElement("div",{className:"adventure-detail-info-description"},c.adventureType),r.a.createElement("div",{className:"adventure-detail-info-label"},"Trip Length"),r.a.createElement("div",{className:"adventure-detail-info-description"},c.adventureTripLength),r.a.createElement("div",{className:"adventure-detail-info-label"},"Group Size"),r.a.createElement("div",{className:"adventure-detail-info-description"},c.adventureGroupSize),r.a.createElement("div",{className:"adventure-detail-info-label"},"Difficulty"),r.a.createElement("div",{className:"adventure-detail-info-description"},c.adventureDifficulty),r.a.createElement("div",{className:"adventure-detail-info-label"},"Price"),r.a.createElement("div",{className:"adventure-detail-info-description"},c.adventurePrice)),r.a.createElement("div",{className:"adventure-detail-content"},r.a.createElement("img",{className:"adventure-detail-primaryimage",src:c.adventurePrimaryImage._path,alt:c.adventureTitle}),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:c.adventureDescription.html}}),r.a.createElement("h2",null,"Itinerary"),r.a.createElement("hr",null),r.a.createElement("div",{className:"adventure-detail-itinerary",dangerouslySetInnerHTML:{__html:c.adventureItinerary.html}}),r.a.createElement(R,c.adventureContributor)))}));a(36);function k(){return r.a.createElement("div",{className:"Home"},r.a.createElement("h2",null,"Current Adventures"),r.a.createElement(S,null))}var w=function(){return r.a.createElement(l.a,null,r.a.createElement("div",{className:"App"},r.a.createElement("header",null,r.a.createElement("img",{src:s.a,className:"logo",alt:"WKND Logo"}),r.a.createElement("hr",null)),r.a.createElement(u.c,null,r.a.createElement(u.a,{path:"/adventure:path"},r.a.createElement(L,null)),r.a.createElement(u.a,{path:"/"},r.a.createElement(k,null)))))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.e91f64be.chunk.js.map