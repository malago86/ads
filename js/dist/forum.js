module.exports=function(t){var e={};function o(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=t,o.c=e,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=15)}([function(t,e){t.exports=flarum.core.compat.app},function(t,e){t.exports=flarum.core.compat.extend},function(t,e,o){"use strict";function n(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}o.d(e,"a",(function(){return n}))},function(t,e){t.exports=flarum.core.compat["components/Page"]},,function(t,e){t.exports=flarum.core.compat["components/IndexPage"]},function(t,e){t.exports=flarum.core.compat["components/PostStream"]},,function(t,e){t.exports=flarum.core.compat["components/HeaderPrimary"]},function(t,e){t.exports=flarum.core.compat["components/EventPost"]},,,,,,function(t,e,o){"use strict";o.r(e);var n=o(0),r=o.n(n),a=o(1),i=o(8),c=o.n(i),u=function(){Object(a.extend)(c.a.prototype,"view",(function(t){if(!document.getElementsByClassName("Flagrow-Ads-under-header").length){var e=app.forum.attribute("flagrow.ads.under-header");if(e){var o=document.getElementsByClassName("App-content")[0],n=document.createElement("div");n.className="Flagrow-Ads-under-header",n.innerHTML=e,o.parentNode.insertBefore(n,o)}}}))},s=o(5),d=o.n(s),f=function(){Object(a.extend)(d.a.prototype,"sidebarItems",(function(t){var e=app.forum.attribute("flagrow.ads.under-nav-items");e&&!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&t.add("flagrow-ad",m.trust(e),-100)}))},p=o(6),l=o.n(p),g=o(2),b=o(9),y=function(t){function e(){return t.apply(this,arguments)||this}Object(g.a)(e,t);var o=e.prototype;return o.icon=function(){return"fas fa-audio-description"},o.content=function(){return m("div",{className:"Flagrow-Ads-between-posts EventPost-info"},[m.trust(this.props.post.contentHtml())])},e}(o.n(b).a),h=o(3),w=o.n(h);r.a.initializers.add("flagrow-ads",(function(t){t.postComponents.ad=y,u(),f(),Object(a.extend)(l.a.prototype,"view",(function(t){var e=r.a.forum.attribute("flagrow.ads.between-posts");if(e&&t.children.length){var o=Number(r.a.forum.attribute("flagrow.ads.start-from-post")),n=Number(r.a.forum.attribute("flagrow.ads.between-n-posts"));t.children.filter((function(t){return"comment"===t.attrs["data-type"]})).forEach((function(t,a){var i=t.attrs["data-number"];i!==o&&(i-o)%n!=0||t.children.push(r.a.postComponents.ad.component({},e))}))}})),Object(a.extend)(w.a.prototype,"config",(function(){if($(".adsbygoogle").length&&window.adsbygoogle){if(!0!==r.a.header_ad_active){try{(adsbygoogle=window.adsbygoogle||[]).push({})}catch(t){return}r.a.header_ad_active=!0}r.a.ads_index?r.a.ads_index!==r.a.history.stack.length&&(r.a.ads_index=r.a.history.stack.length,$(".adsbygoogle").each((function(t,e){$(e).html($(e).html())}))):r.a.ads_index=r.a.history.stack.length}})),Object(a.extend)(l.a.prototype,"config",(function(){if($(".adsbygoogle").length&&window.adsbygoogle)try{(adsbygoogle=window.adsbygoogle||[]).push({})}catch(t){return}})),Object(a.extend)(d.a.prototype,"config",(function(){if($(".adsbygoogle").length&&window.adsbygoogle&&!0!==r.a.index_ad_active&&!0!==window.adsbygoogle.loaded){try{(adsbygoogle=window.adsbygoogle||[]).push({})}catch(t){return}r.a.index_ad_active=!0}}))}))}]);
//# sourceMappingURL=forum.js.map