class t{_data;_insert(t){this._parentElement.insertAdjacentHTML("afterbegin",t)}_clear(){this._parentElement.innerHTML=""}_render(t){const e=this._generateMarkup(t);this._clear(),this._insert(e)}}var e=new class extends t{_data={more:[{name:"Business",class:"business",icon:'<i class="fa-solid fa-briefcase"></i>',topic:"Business"},{name:"Technology",class:"technology",icon:'<i class="fa-solid fa-microchip"></i>',topic:"Technology"},{name:"Science",class:"science",icon:'<i class="fa-solid fa-atom"></i>',topic:"Science"},{name:"Education",class:"education",icon:'<i class="fa-solid fa-school"></i>',topic:"Education"},{name:"Life Style",class:"lifestyle",icon:'<i class="fa-solid fa-martini-glass-citrus"></i>',topic:"LifeStyle"},{name:"Crime",class:"crime",icon:'<i class="fa-solid fa-handcuffs"></i>',topic:"Crime"},{name:"Weather",class:"weather",icon:'<i class="fa-solid fa-cloud-sun"></i>',topic:"Weather"},{name:"Health",class:"health",icon:'<i class="fa-solid fa-heart-pulse"></i>',topic:"Health"},{name:"Environment",class:"environment",icon:'<i class="fa-solid fa-tree"></i>',topic:"Environment"},{name:"Crypto",class:"crypto",icon:'<i class="fa-brands fa-bitcoin"></i>',topic:"Crypto"},{name:"Politics",class:"politics",icon:'<i class="fa-solid fa-landmark"></i>',topic:"Politics"}],sports:[{name:"Cricket",class:"cricket",icon:"",topic:"Cricket"},{name:"FIFA",class:"fifa",icon:"",topic:"FIFA"},{name:"NFL",class:"nfl",icon:"",topic:"NFL"},{name:"MLB",class:"mlb",icon:"",topic:"MLB"},{name:"NBA",class:"nba",icon:"",topic:"NBA"},{name:"WNBA",class:"wnba",icon:"",topic:"WNBA"},{name:"NHL",class:"nhl",icon:"",topic:"NHL"},{name:"Boxing & MMA",class:"boxing",icon:"",topic:"Boxing"},{name:"Golf",class:"golf",icon:"",topic:"Golf"},{name:"Olympics",class:"olympics",icon:"",topic:"Olympics"},{name:"Tennis",class:"tennis",icon:"",topic:"Tennis"},{name:"Basketball",class:"basketball",icon:"",topic:"Basketball"},{name:"Chess",class:"chess",icon:"",topic:"Chess"}],entertainment:[{name:"Cinema",class:"cinema",icon:"",topic:"Cinema"},{name:"Music",class:"music",icon:"",topic:"Music"},{name:"Hollywood",class:"hollywood",icon:"",topic:"Hollywood"},{name:"Bollywood",class:"bollywood",icon:"",topic:"Bollywood"},{name:"Kollywood",class:"kollywood",icon:"",topic:"Kollywood"},{name:"Tollywood",class:"tollywood",icon:"",topic:"Tollywood"},{name:"Mollywood",class:"mollywood",icon:"",topic:"Mollywood"},{name:"Web Series",class:"web-series",icon:"",topic:"webseries"}],search:[{name:"Search"}],world:[{name:"International",class:"international",icon:"",topic:"International"},{name:"Europe",class:"europe",icon:"",topic:"Europe"},{name:"Asia",class:"asia",icon:"",topic:"Asia"},{name:"Middle East",class:"middle-east",icon:"",topic:"MiddleEast"},{name:"India",class:"india",icon:"",topic:"India"},{name:"Americas",class:"americas",icon:"",topic:"Americas"},{name:"United Kingdom",class:"uk",icon:"",topic:"UK"},{name:"Ukraine",class:"ukraine",icon:"",topic:"Ukraine"},{name:"Australia",class:"australia",icon:"",topic:"Australia"},{name:"China",class:"china",icon:"",topic:"China"},{name:"Japan",class:"japan",icon:"",topic:"Japan"}]};_grandParentEl=document.querySelector(".more-list");_parentElement=document.querySelector(".more-list__nav");_navBtns;_navClickBtns;_render(t){if(this._parentElement.dataset.topic==t)return;const e=this._data[t];this._parentElement.dataset.topic=t,super._render(e)}_generateMarkup(t){return t.map((t=>"Search"==t.name?'<form class="search" id="s-0">\n                            <button class="btn btn--medium search__btn">\n                                <i class="fa-solid fa-magnifying-glass search__icon"></i>\n                            </button>\n                            <input type="text" class="search__field" placeholder="Search..." />\n                        </form>':`\n            <li class="nav__item">\n                <button class="nav__btn nav__btn__${t.class}" data-topic = "${t.class}">\n                    <a href="./?name=${t.topic}">\n                        ${t.icon}\n                        <span>${t.name}</span>\n                    </a>\n                </button>\n            </li>`)).join("")}_openListOnClick(t){this._grandParentEl.classList.remove("hover"),this._grandParentEl.dataset.list_id=t,this._render(t)}_openListOnHover(t){this._grandParentEl.classList.add("hover"),this._grandParentEl.dataset.list_id=t,this._render(t)}addHandlerUrl(t){["hashchange","load"].forEach((e=>{console.log(`Event ${e} handler for loading article working`),window.addEventListener(e,(e=>t()))}))}addHandler(){window.addEventListener("click",(t=>{const e=t.target;e.closest(".more-list")||this._grandParentEl.classList.contains("hover")||e.closest(".click__btn")||([...this._navBtns].map((t=>t.classList.remove("disable"))),this._grandParentEl.classList.add("hover"),e.closest(".topic__item")&&this._openListOnHover(e.closest(".topic__item").childNodes[1].dataset.data_id))})),this._navClickBtns=document.querySelectorAll(".click__btn"),[...this._navClickBtns].map((t=>t.addEventListener("click",(t=>{const e=t.target.closest(".nav__btn").dataset.data_id;e!==this._grandParentEl.dataset.list_id||this._grandParentEl.classList.contains("hover")?([...this._navBtns].map((t=>t.classList.add("disable"))),this._openListOnClick(e)):this._grandParentEl.classList.add("hover")})))),this._navBtns=document.querySelectorAll(".topic__btn"),[...this._navBtns].map((t=>t.addEventListener("mouseover",(t=>this._openListOnHover(t.target.closest(".nav__btn").dataset.data_id)))))}};console.log(new Date);const i="https://newsapi.org/v2/top-headlines?sources=google-news-in&apiKey=9425de20df7845f3a1ea538a6af43f94",n="https://newsapi.org/v2/everything?q=",s="&from=2022-12-30&sortBy=publishedAt&apiKey=9425de20df7845f3a1ea538a6af43f94";var r={},a=function(t){var e,i=Object.prototype,n=i.hasOwnProperty,s=Object.defineProperty||function(t,e,i){t[e]=i.value},r="function"==typeof Symbol?Symbol:{},a=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",l=r.toStringTag||"@@toStringTag";function c(t,e,i){return Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,i){return t[e]=i}}function d(t,e,i,n){var r=e&&e.prototype instanceof m?e:m,a=Object.create(r.prototype),o=new $(n||[]);return s(a,"_invoke",{value:x(t,i,o)}),a}function h(t,e,i){try{return{type:"normal",arg:t.call(e,i)}}catch(t){return{type:"throw",arg:t}}}t.wrap=d;var u="suspendedStart",p="executing",_="completed",f={};function m(){}function y(){}function g(){}var v={};c(v,a,(function(){return this}));var w=Object.getPrototypeOf,b=w&&w(w(I([])));b&&b!==i&&n.call(b,a)&&(v=b);var E=g.prototype=m.prototype=Object.create(v);function L(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function S(t,e){function i(s,r,a,o){var l=h(t[s],t,r);if("throw"!==l.type){var c=l.arg,d=c.value;return d&&"object"==typeof d&&n.call(d,"__await")?e.resolve(d.__await).then((function(t){i("next",t,a,o)}),(function(t){i("throw",t,a,o)})):e.resolve(d).then((function(t){c.value=t,a(c)}),(function(t){return i("throw",t,a,o)}))}o(l.arg)}var r;s(this,"_invoke",{value:function(t,n){function s(){return new e((function(e,s){i(t,n,e,s)}))}return r=r?r.then(s,s):s()}})}function x(t,e,i){var n=u;return function(s,r){if(n===p)throw new Error("Generator is already running");if(n===_){if("throw"===s)throw r;return P()}for(i.method=s,i.arg=r;;){var a=i.delegate;if(a){var o=k(a,i);if(o){if(o===f)continue;return o}}if("next"===i.method)i.sent=i._sent=i.arg;else if("throw"===i.method){if(n===u)throw n=_,i.arg;i.dispatchException(i.arg)}else"return"===i.method&&i.abrupt("return",i.arg);n=p;var l=h(t,e,i);if("normal"===l.type){if(n=i.done?_:"suspendedYield",l.arg===f)continue;return{value:l.arg,done:i.done}}"throw"===l.type&&(n=_,i.method="throw",i.arg=l.arg)}}}function k(t,i){var n=i.method,s=t.iterator[n];if(s===e)return i.delegate=null,"throw"===n&&t.iterator.return&&(i.method="return",i.arg=e,k(t,i),"throw"===i.method)||"return"!==n&&(i.method="throw",i.arg=new TypeError("The iterator does not provide a '"+n+"' method")),f;var r=h(s,t.iterator,i.arg);if("throw"===r.type)return i.method="throw",i.arg=r.arg,i.delegate=null,f;var a=r.arg;return a?a.done?(i[t.resultName]=a.value,i.next=t.nextLoc,"return"!==i.method&&(i.method="next",i.arg=e),i.delegate=null,f):a:(i.method="throw",i.arg=new TypeError("iterator result is not an object"),i.delegate=null,f)}function A(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function B(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function $(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(A,this),this.reset(!0)}function I(t){if(t){var i=t[a];if(i)return i.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var s=-1,r=function i(){for(;++s<t.length;)if(n.call(t,s))return i.value=t[s],i.done=!1,i;return i.value=e,i.done=!0,i};return r.next=r}}return{next:P}}function P(){return{value:e,done:!0}}return y.prototype=g,s(E,"constructor",{value:g,configurable:!0}),s(g,"constructor",{value:y,configurable:!0}),y.displayName=c(g,l,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,c(t,l,"GeneratorFunction")),t.prototype=Object.create(E),t},t.awrap=function(t){return{__await:t}},L(S.prototype),c(S.prototype,o,(function(){return this})),t.AsyncIterator=S,t.async=function(e,i,n,s,r){void 0===r&&(r=Promise);var a=new S(d(e,i,n,s),r);return t.isGeneratorFunction(i)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},L(E),c(E,l,"Generator"),c(E,a,(function(){return this})),c(E,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),i=[];for(var n in e)i.push(n);return i.reverse(),function t(){for(;i.length;){var n=i.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=I,$.prototype={constructor:$,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(B),!t)for(var i in this)"t"===i.charAt(0)&&n.call(this,i)&&!isNaN(+i.slice(1))&&(this[i]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var i=this;function s(n,s){return o.type="throw",o.arg=t,i.next=n,s&&(i.method="next",i.arg=e),!!s}for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r],o=a.completion;if("root"===a.tryLoc)return s("end");if(a.tryLoc<=this.prev){var l=n.call(a,"catchLoc"),c=n.call(a,"finallyLoc");if(l&&c){if(this.prev<a.catchLoc)return s(a.catchLoc,!0);if(this.prev<a.finallyLoc)return s(a.finallyLoc)}else if(l){if(this.prev<a.catchLoc)return s(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return s(a.finallyLoc)}}}},abrupt:function(t,e){for(var i=this.tryEntries.length-1;i>=0;--i){var s=this.tryEntries[i];if(s.tryLoc<=this.prev&&n.call(s,"finallyLoc")&&this.prev<s.finallyLoc){var r=s;break}}r&&("break"===t||"continue"===t)&&r.tryLoc<=e&&e<=r.finallyLoc&&(r=null);var a=r?r.completion:{};return a.type=t,a.arg=e,r?(this.method="next",this.next=r.finallyLoc,f):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var i=this.tryEntries[e];if(i.finallyLoc===t)return this.complete(i.completion,i.afterLoc),B(i),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var i=this.tryEntries[e];if(i.tryLoc===t){var n=i.completion;if("throw"===n.type){var s=n.arg;B(i)}return s}}throw new Error("illegal catch attempt")},delegateYield:function(t,i,n){return this.delegate={iterator:I(t),resultName:i,nextLoc:n},"next"===this.method&&(this.arg=e),f}},t}(r);try{regeneratorRuntime=a}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=a:Function("r","regeneratorRuntime = r")(a)}const o=async(t,e="Something went wrong")=>{const i=await fetch(t);if(!i.ok)throw new Error(e);return i.json()};var l=new class{_clientWidthEls;_setClientWidth(t){t.style.width=`${document.body.getBoundingClientRect().width}px`}addHandler(){this._clientWidthEls=document.querySelectorAll(".view-width"),console.log("working"),console.log(this._clientWidthEls),["resize","load"].map((t=>window.addEventListener(t,(()=>{[...this._clientWidthEls].map((t=>this._setClientWidth(t)))}))))}};var c=new class extends t{_slider=document.querySelector(".slider");_sliderElem;_slideBtns;_slides=document.querySelector(".slider__slides");_dots;_dotsize=1;_dotMargin=.5;_slideshow;_dotBox=document.querySelector(".slider__dots");_dotElems;_indicatorElem;_parentElement;loadSlides(t){console.log(t),this._render(t),this._sliderElem=document.querySelectorAll(".slider__slide"),this._indicatorElem=this._slider.querySelector(".slider__indicator"),this._setStyle(t),setTimeout(this._addHandler(),100)}_setIndicator(){const t=this._slider.dataset.pos,e=this._dotsize+2*this._dotMargin,i=e*t,n=e*(this._dots-t)-e;this._indicatorElem.style.left=`${i}em`,this._indicatorElem.style.right=`${n}em`,console.log()}_setSlidesPos(){const t=100/this._dots,e=this._slider.dataset.pos;[...this._sliderElem].map((t=>t.style.width=100/this._dots+"%")),this._slides.style.transform=`translateX(-${t*e}%)`}_setStyle(t){this._dots=t.length,this._slides.style.width=100*this._dots+"%",this._setSlidesPos(),this._setIndicator()}_render(t){this._parentElement=this._dotBox,super._render(t),this._parentElement=this._slides,super._render(t)}_generateTitle(t){let e=t.slice(1).split("").findIndex((t=>/ /.test(t)));return/"/.test(t[0])&&(e=t.slice(1).split("").findIndex((t=>/"/.test(t)))+1),/'/.test(t[0])&&(e=t.slice(1).split("").findIndex((t=>/'/.test(t)))+1),/‘/.test(t[0])&&(e=t.slice(1).split("").findIndex((t=>/’/.test(t)))+1),`<span>${t.slice(0,e+1)}</span>${t.slice(e+1)}`}_generateMarkup(t){return this._parentElement==this._dotBox?'<div class="slider__indicator"></div>'+t.map((e=>`<div class="slider__dot" data-pos="${t.indexOf(e)}"></div>`)).join(""):this._parentElement==this._slides?t.map((t=>`\n            <div class="slider__slide">\n                <div class="slider__background" style="background-image: url(${t.urlToImage})"></div>\n                <img class="slider__image" src="${t.urlToImage}">\n                <div class="slider__title"><div class="slider__title__container"><h1>${this._generateTitle(t.title)}</h1><span class="slider__slide__time">Published at: ${t.publishedAt.slice(0,10)}</span></div></div>\n            </div>`)).join(""):void 0}_setDuration(t,e,i){return Math.abs(e-t)>6?6*i:i*Math.abs(e-t)}_slideFunc(t,e){const i=e>t?`left ${this._setDuration(t,e,.3)}s ${this._setDuration(t,e,.1)}s cubic-bezier(.51, .92, .24, 1.15), right ${this._setDuration(t,e,.3)}s cubic-bezier(.51, .92, .24, 1.15)`:`left ${this._setDuration(t,e,.3)}s cubic-bezier(.51, .92, .24, 1.15), right ${this._setDuration(t,e,.3)}s ${this._setDuration(t,e,.1)}s cubic-bezier(.51, .92, .24, 1.15)`;this._slides.style.transition=`transform ${this._setDuration(t,e,.3)}s cubic-bezier(.51, .92, .24, 1)`,this._indicatorElem.style.transition=i,this._slider.setAttribute("data-pos",e),this._setSlidesPos(),this._setIndicator()}_addHandler(){this._slideBtns=this._slider.querySelectorAll(".slider__btn"),[...this._slideBtns].map((t=>{t.addEventListener("click",(()=>{this.cancelSlideshow();const e=t.getAttribute("data-direction"),i=parseInt(this._slider.getAttribute("data-pos")),n="Left"==e?0==i?this._dots-1:i-1:i==this._dots-1?0:i+1;this._slideFunc(i,n),this.startSlideshow()}))})),this._dotElems=document.querySelectorAll(".slider__dot"),[...this._dotElems].map((t=>{t.addEventListener("click",(e=>{this.cancelSlideshow();let i=parseInt(this._slider.getAttribute("data-pos")),n=parseInt(t.getAttribute("data-pos"));this._slideFunc(i,n),this.startSlideshow()}))}))}cancelSlideshow(){clearInterval(this._slideshow)}startSlideshow(){this._slideshow=setInterval((()=>{const t=parseInt(this._slider.getAttribute("data-pos")),e=t==this._dots-1?0:t+1;this._slideFunc(t,e)}),5e3)}};const d=async()=>{console.log("Loading Article");const t=window.location.search.slice(6),e=await(async t=>{try{console.log(i);const e=t?await o(`${n}${t}${s}`):await o(i);return console.log(`${n}${t}${s}`),e.articles.length>10?e.articles.slice(0,10):e.articles}catch(t){return console.log(t),null}})(t);e&&(c.loadSlides(e),c.startSlideshow())};setTimeout((()=>{l.addHandler(),e.addHandlerUrl(d),e.addHandler()}),10);