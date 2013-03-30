/**
 * almond 0.2.0 Copyright (c) 2011, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/jrburke/almond for details
 */

/**
 * @license RequireJS text 2.0.3 Copyright (c) 2010-2012, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/requirejs/text for details 
 */

(function(){var e,t,n;(function(i){function o(e,t){var n,i,o,r,a,s,c,u,l,d,f=t&&t.split("/"),v=w.map,p=v&&v["*"]||{};if(e&&"."===e.charAt(0)&&t){for(f=f.slice(0,f.length-1),e=f.concat(e.split("/")),u=0;e.length>u;u+=1)if(d=e[u],"."===d)e.splice(u,1),u-=1;else if(".."===d){if(1===u&&(".."===e[2]||".."===e[0]))break;u>0&&(e.splice(u-1,2),u-=2)}e=e.join("/")}if((f||p)&&v){for(n=e.split("/"),u=n.length;u>0;u-=1){if(i=n.slice(0,u).join("/"),f)for(l=f.length;l>0;l-=1)if(o=v[f.slice(0,l).join("/")],o&&(o=o[i])){r=o,a=u;break}if(r)break;!s&&p&&p[i]&&(s=p[i],c=u)}!r&&s&&(r=s,a=c),r&&(n.splice(0,a,r),e=n.join("/"))}return e}function r(e,t){return function(){return v.apply(i,b.call(arguments,0).concat([e,t]))}}function a(e){return function(t){return o(t,e)}}function s(e){return function(t){g[e]=t}}function c(e){if(h.hasOwnProperty(e)){var t=h[e];delete h[e],y[e]=!0,f.apply(i,t)}if(!g.hasOwnProperty(e)&&!y.hasOwnProperty(e))throw Error("No "+e);return g[e]}function u(e){var t,n=e?e.indexOf("!"):-1;return n>-1&&(t=e.substring(0,n),e=e.substring(n+1,e.length)),[t,e]}function l(t,n,i){e.onResourceLoad&&t&&e.onResourceLoad({defined:n},{id:t},i)}function d(e){return function(){return w&&w.config&&w.config[e]||{}}}var f,v,p,m,g={},h={},w={},y={},b=[].slice;p=function(e,t){var n,i=u(e),r=i[0];return e=i[1],r&&(r=o(r,t),n=c(r)),r?e=n&&n.normalize?n.normalize(e,a(t)):o(e,t):(e=o(e,t),i=u(e),r=i[0],e=i[1],r&&(n=c(r))),{f:r?r+"!"+e:e,n:e,pr:r,p:n}},m={require:function(e){return r(e)},exports:function(e){var t=g[e];return t!==void 0?t:g[e]={}},module:function(e){return{id:e,uri:"",exports:g[e],config:d(e)}}},f=function(e,t,n,o){var a,u,d,f,v,w,b=[];if(o=o||e,"function"==typeof n){for(t=!t.length&&n.length?["require","exports","module"]:t,v=0;t.length>v;v+=1)if(f=p(t[v],o),u=f.f,"require"===u)b[v]=m.require(e);else if("exports"===u)b[v]=m.exports(e),w=!0;else if("module"===u)a=b[v]=m.module(e);else if(g.hasOwnProperty(u)||h.hasOwnProperty(u)||y.hasOwnProperty(u))b[v]=c(u);else{if(!f.p)throw Error(e+" missing "+u);f.p.load(f.n,r(o,!0),s(u),{}),b[v]=g[u]}d=n.apply(g[e],b),e&&(a&&a.exports!==i&&a.exports!==g[e]?g[e]=a.exports:d===i&&w||(g[e]=d))}else e&&(g[e]=n);l(e,g,b)},e=t=v=function(e,t,n,o,r){return"string"==typeof e?m[e]?m[e](t):c(p(e,t).f):(e.splice||(w=e,t.splice?(e=t,t=n,n=null):e=i),t=t||function(){},"function"==typeof n&&(n=o,o=r),o?f(i,e,t,n):setTimeout(function(){f(i,e,t,n)},15),v)},v.config=function(e){return w=e,v},n=function(e,t,n){t.splice||(n=t,t=[]),h[e]=[e,t,n]},n.amd={jQuery:!0}})(),n("durandal/amd/almond-custom",function(){}),n("durandal/system",["require"],function(t){var n,i=!1,o=Object.keys,r=Object.prototype.hasOwnProperty,a=Object.prototype.toString,s=!1;if(Function.prototype.bind&&("object"==typeof console||"function"==typeof console)&&"object"==typeof console.log)try{["log","info","warn","error","assert","dir","clear","profile","profileEnd"].forEach(function(e){console[e]=this.call(console[e],console)},Function.prototype.bind)}catch(c){s=!0}e.onResourceLoad=function(e,t){n.setModuleId(e.defined[t.id],t.id)};var u=function(){},l=function(){try{if("undefined"!=typeof console&&"function"==typeof console.log)if(window.opera)for(var e=0;arguments.length>e;)console.log("Item "+(e+1)+": "+arguments[e]),e++;else 1==Array.prototype.slice.call(arguments).length&&"string"==typeof Array.prototype.slice.call(arguments)[0]?console.log(""+Array.prototype.slice.call(arguments)):console.log(Array.prototype.slice.call(arguments));else Function.prototype.bind&&!s||"undefined"==typeof console||"object"!=typeof console.log||Function.prototype.call.call(console.log,console,Array.prototype.slice.call(arguments))}catch(t){}};return n={version:"1.1.1",noop:u,getModuleId:function(e){return e?"function"==typeof e?e.prototype.__moduleId__:"string"==typeof e?null:e.__moduleId__:null},setModuleId:function(e,t){return e?"function"==typeof e?(e.prototype.__moduleId__=t,void 0):("string"!=typeof e&&(e.__moduleId__=t),void 0):void 0},debug:function(e){return 1!=arguments.length?i:(i=e,i?(this.log=l,this.log("Debug mode enabled.")):(this.log("Debug mode disabled."),this.log=u),void 0)},isArray:function(e){return"[object Array]"===a.call(e)},log:u,defer:function(e){return $.Deferred(e)},guid:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=0|16*Math.random(),n="x"==e?t:8|3&t;return n.toString(16)})},acquire:function(){var e=Array.prototype.slice.call(arguments,0);return this.defer(function(n){t(e,function(){var e=arguments;setTimeout(function(){n.resolve.apply(n,e)},1)})}).promise()}},n.keys=o||function(e){if(e!==Object(e))throw new TypeError("Invalid object");var t=[];for(var n in e)r.call(e,n)&&(t[t.length]=n);return t},n}),n("durandal/viewEngine",["require","./system"],function(e){var t,n=e("./system");return t=$.parseHTML?function(e){return $.parseHTML(e)}:function(e){return $(e).get()},{viewExtension:".html",viewPlugin:"text",isViewUrl:function(e){return-1!==e.indexOf(this.viewExtension,e.length-this.viewExtension.length)},convertViewUrlToViewId:function(e){return e.substring(0,e.length-this.viewExtension.length)},convertViewIdToRequirePath:function(e){return this.viewPlugin+"!"+e+this.viewExtension},parseMarkup:function(e){var n=t(e);if(1==n.length)return n[0];for(var i=[],o=0;n.length>o;o++){var r=n[o];8!=r.nodeType&&i.push(r)}return i.length>1?$(i).wrapAll('<div class="durandal-wrapper"></div').parent().get(0):i[0]},createView:function(e){var t=this,i=this.convertViewIdToRequirePath(e);return n.defer(function(o){n.acquire(i).then(function(n){var i=t.parseMarkup(n);i.setAttribute("data-view",e),o.resolve(i)})}).promise()}}}),n("durandal/viewLocator",["require","./system","./viewEngine"],function(e){function t(e,t){for(var n=0;e.length>n;n++){var i=e[n],o=i.getAttribute("data-view");if(o==t)return i}}function n(e){return(e+"").replace(/([\\\.\+\*\?\[\^\]\$\(\)\{\}\=\!\<\>\|\:])/g,"\\$1")}var i=e("./system"),o=e("./viewEngine");return{useConvention:function(e,t,i){e=e||"viewmodels",t=t||"views",i=i||t;var o=RegExp(n(e),"gi");this.convertModuleIdToViewId=function(e){return e.replace(o,t)},this.translateViewIdToArea=function(e,t){return t&&"partial"!=t?i+"/"+t+"/"+e:i+"/"+e}},locateViewForObject:function(e,t){var n;if(e.getView&&(n=e.getView()))return this.locateView(n,null,t);if(e.viewUrl)return this.locateView(e.viewUrl,null,t);var o=i.getModuleId(e);return o?this.locateView(this.convertModuleIdToViewId(o),null,t):this.locateView(this.determineFallbackViewId(e),null,t)},convertModuleIdToViewId:function(e){return e},determineFallbackViewId:function(e){var t=/function (.{1,})\(/,n=t.exec(""+e.constructor),i=n&&n.length>1?n[1]:"";return"views/"+i},translateViewIdToArea:function(e){return e},locateView:function(e,n,r){if("string"==typeof e){var a;if(a=o.isViewUrl(e)?o.convertViewUrlToViewId(e):e,n&&(a=this.translateViewIdToArea(a,n)),r){var s=t(r,a);if(s)return i.defer(function(e){e.resolve(s)}).promise()}return o.createView(a)}return i.defer(function(t){t.resolve(e)}).promise()}}}),n("durandal/viewModelBinder",["require","./system"],function(e){function t(e,t,i){if(!t||!e)return n.log("Insufficent Information to Bind",t,e),void 0;if(!t.getAttribute)return n.log("Unexpected View Type",t,e),void 0;var o=t.getAttribute("data-view");try{n.log("Binding",o,e),i()}catch(r){n.log(r.message,o,e)}}var n=e("./system");return{bindContext:function(e,n,i){i&&(e=e.createChildContext(i)),t(e,n,function(){ko.applyBindings(e,n),i&&i.setView&&i.setView(n)})},bind:function(e,n){t(e,n,function(){ko.applyBindings(e,n),e.setView&&e.setView(n)})}}}),n("durandal/viewModel",["require","./system"],function(e){function t(e){return void 0==e&&(e={}),e.closeOnDeactivate||(e.closeOnDeactivate=s.defaults.closeOnDeactivate),e.beforeActivate||(e.beforeActivate=s.defaults.beforeActivate),e.afterDeactivate||(e.afterDeactivate=s.defaults.afterDeactivate),e.interpretResponse||(e.interpretResponse=s.defaults.interpretResponse),e.areSameItem||(e.areSameItem=s.defaults.areSameItem),e}function n(e,t,n,i,o){if(e&&e.deactivate){c.log("Deactivating",e);var r;try{r=e.deactivate(t)}catch(a){return c.log(a),i.resolve(!1),void 0}r&&r.then?r.then(function(){n.afterDeactivate(e,t,o),i.resolve(!0)},function(e){c.log(e),i.resolve(!1)}):(n.afterDeactivate(e,t,o),i.resolve(!0))}else e&&n.afterDeactivate(e,t,o),i.resolve(!0)}function i(e,t,n,i){if(e)if(e.activate){c.log("Activating",e);var o;try{o=e.activate(i)}catch(r){return c.log(r),n(!1),void 0}o&&o.then?o.then(function(){t(e),n(!0)},function(e){c.log(e),n(!1)}):(t(e),n(!0))}else t(e),n(!0);else n(!0)}function o(e,t,n){return c.defer(function(i){if(e&&e.canDeactivate){var o;try{o=e.canDeactivate(t)}catch(r){return c.log(r),i.resolve(!1),void 0}o.then?o.then(function(e){i.resolve(n.interpretResponse(e))},function(e){c.log(e),i.resolve(!1)}):i.resolve(n.interpretResponse(o))}else i.resolve(!0)}).promise()}function r(e,t,n,i){return c.defer(function(o){if(e==t())return o.resolve(!0),void 0;if(e&&e.canActivate){var r;try{r=e.canActivate(i)}catch(a){return c.log(a),o.resolve(!1),void 0}r.then?r.then(function(e){o.resolve(n.interpretResponse(e))},function(e){c.log(e),o.resolve(!1)}):o.resolve(n.interpretResponse(r))}else o.resolve(!0)}).promise()}function a(e,a){var s=ko.observable(null);a=t(a);var u=ko.computed({read:function(){return s()},write:function(e){u.viaSetter=!0,u.activateItem(e)}});return u.settings=a,a.activator=u,u.isActivating=ko.observable(!1),u.canDeactivateItem=function(e,t){return o(e,t,a)},u.deactivateItem=function(e,t){return c.defer(function(i){u.canDeactivateItem(e,t).then(function(o){o?n(e,t,a,i,s):(u.notifySubscribers(),i.resolve(!1))})})},u.canActivateItem=function(e,t){return r(e,s,a,t)},u.activateItem=function(e,t){var o=u.viaSetter;return u.viaSetter=!1,c.defer(function(r){if(u.isActivating())return r.resolve(!1),void 0;u.isActivating(!0);var l=s();return a.areSameItem(l,e,t)?(u.isActivating(!1),r.resolve(!0),void 0):(u.canDeactivateItem(l,a.closeOnDeactivate).then(function(d){d?u.canActivateItem(e,t).then(function(d){d?c.defer(function(e){n(l,a.closeOnDeactivate,a,e)}).promise().then(function(){e=a.beforeActivate(e),i(e,s,function(e){u.isActivating(!1),r.resolve(e)},t)}):(o&&u.notifySubscribers(),u.isActivating(!1),r.resolve(!1))}):(o&&u.notifySubscribers(),u.isActivating(!1),r.resolve(!1))}),void 0)}).promise()},u.canActivate=function(){var t;return e?(t=e,e=!1):t=u(),u.canActivateItem(t)},u.activate=function(){var t;return e?(t=e,e=!1):t=u(),u.activateItem(t)},u.canDeactivate=function(e){return u.canDeactivateItem(u(),e)},u.deactivate=function(e){return u.deactivateItem(u(),e)},u.includeIn=function(e){e.canActivate=function(){return u.canActivate()},e.activate=function(){return u.activate()},e.canDeactivate=function(e){return u.canDeactivate(e)},e.deactivate=function(e){return u.deactivate(e)}},a.includeIn?u.includeIn(a.includeIn):e&&u.activate(),u.forItems=function(e){a.closeOnDeactivate=!1,a.determineNextItemToActivate=function(e,t){var n=t-1;return-1==n&&e.length>1?e[1]:n>-1&&e.length-1>n?e[n]:null},a.beforeActivate=function(t){var n=u();if(t){var i=e.indexOf(t);-1==i?e.push(t):t=e()[i]}else t=a.determineNextItemToActivate(e,n?e.indexOf(n):0);return t},a.afterDeactivate=function(t,n){n&&e.remove(t)};var t=u.canDeactivate;u.canDeactivate=function(n){return n?c.defer(function(t){function i(){for(var e=0;r.length>e;e++)if(!r[e])return t.resolve(!1),void 0;t.resolve(!0)}for(var o=e(),r=[],a=0;o.length>a;a++)u.canDeactivateItem(o[a],n).then(function(e){r.push(e),r.length==o.length&&i()})}).promise():t()};var n=u.deactivate;return u.deactivate=function(t){return t?c.defer(function(n){function i(i){u.deactivateItem(i,t).then(function(){r++,e.remove(i),r==a&&n.resolve()})}for(var o=e(),r=0,a=o.length,s=0;a>s;s++)i(o[s])}).promise():n()},u},u}var s,c=e("./system");return s={defaults:{closeOnDeactivate:!0,interpretResponse:function(e){if("string"==typeof e){var t=e.toLowerCase();return"yes"==t||"ok"==t}return e},areSameItem:function(e,t){return e==t},beforeActivate:function(e){return e},afterDeactivate:function(e,t,n){t&&n&&n(null)}},activator:a}}),n("durandal/composition",["require","./viewLocator","./viewModelBinder","./viewEngine","./system","./viewModel"],function(e){function t(e){return e.model&&e.model.activate&&(v.activateDuringComposition&&void 0==e.activate||e.activate)}function n(e,n){t(e)?l.activator().activateItem(e.model).then(function(e){e&&n()}):n()}function i(e){for(var t=[],n={childElements:t,activeView:null},i=ko.virtualElements.firstChild(e);i;)1==i.nodeType&&(t.push(i),i.getAttribute(f)&&(n.activeView=i)),i=ko.virtualElements.nextSibling(i);return n}function o(e,t,n){n.activeView&&n.activeView.removeAttribute(f),t&&(n.model&&n.model.viewAttached&&(n.composingNewView||n.alwaysAttachView)&&n.model.viewAttached(t),t.setAttribute(f,!0)),n.afterCompose&&n.afterCompose(e,t,n)}function r(e,t){if("string"==typeof t.transition&&e){if(t.activeView){if(t.activeView==e)return!1;if(t.skipTransitionOnSameViewId){var n=t.activeView.getAttribute("data-view"),i=e.getAttribute("data-view");return n!=i}return!0}return!0}return!1}var a=e("./viewLocator"),s=e("./viewModelBinder"),c=e("./viewEngine"),u=e("./system"),l=e("./viewModel"),d={},f="data-active-view",v={activateDuringComposition:!1,convertTransitionToModuleId:function(e){return"durandal/transitions/"+e},switchContent:function(e,t,n){if(n.transition=n.transition||this.defaultTransitionName,r(t,n)){var i=this.convertTransitionToModuleId(n.transition);u.acquire(i).then(function(i){n.transition=i,i(e,t,n).then(function(){o(e,t,n)})})}else t!=n.activeView&&(n.cacheViews&&n.activeView&&$(n.activeView).css("display","none"),t?n.cacheViews?n.composingNewView?(n.viewElements.push(t),ko.virtualElements.prepend(e,t)):$(t).css("display",""):(ko.virtualElements.emptyNode(e),ko.virtualElements.prepend(e,t)):n.cacheViews||ko.virtualElements.emptyNode(e)),o(e,t,n)},bindAndShow:function(e,t,i){i.composingNewView=i.cacheViews?-1==ko.utils.arrayIndexOf(i.viewElements,t):!0,n(i,function(){if(i.beforeBind&&i.beforeBind(e,t,i),i.preserveContext&&i.bindingContext)i.composingNewView&&s.bindContext(i.bindingContext,t,i.model);else if(t){var n=i.model||d,o=ko.dataFor(t);if(o!=n){if(!i.composingNewView)return $(t).remove(),c.createView(t.getAttribute("data-view")).then(function(t){v.bindAndShow(e,t,i)}),void 0;s.bind(n,t)}}v.switchContent(e,t,i)})},defaultStrategy:function(e){return a.locateViewForObject(e.model,e.viewElements)},getSettings:function(e){var t={},n=ko.utils.unwrapObservable(e())||{};if("string"==typeof n)return n;var i=u.getModuleId(n);if(i)return{model:n};for(var o in n)if("string"==typeof o){var r=ko.utils.unwrapObservable(n[o]);t[o]=r}return t},executeStrategy:function(e,t){t.strategy(t).then(function(n){v.bindAndShow(e,n,t)})},inject:function(e,t){return t.model?t.view?(a.locateView(t.view,t.area,t.viewElements).then(function(n){v.bindAndShow(e,n,t)}),void 0):((void 0===t.view||t.view)&&(t.strategy||(t.strategy=this.defaultStrategy),"string"==typeof t.strategy?u.acquire(t.strategy).then(function(n){t.strategy=n,v.executeStrategy(e,t)}):this.executeStrategy(e,t)),void 0):(this.bindAndShow(e,null,t),void 0)},compose:function(e,t,n){"string"==typeof t&&(t=c.isViewUrl(t)?{view:t}:{model:t});var o=u.getModuleId(t);o&&(t={model:t});var r=i(e);t.bindingContext=n,t.activeView=r.activeView,t.cacheViews&&!t.viewElements&&(t.viewElements=r.childElements),t.model?"string"==typeof t.model?u.acquire(t.model).then(function(n){t.model="function"==typeof n?new n(e,t):n,v.inject(e,t)}):v.inject(e,t):t.view?(t.area=t.area||"partial",t.preserveContext=!0,a.locateView(t.view,t.area,t.viewElements).then(function(n){v.bindAndShow(e,n,t)})):this.bindAndShow(e,null,t)}};return ko.bindingHandlers.compose={update:function(e,t,n,i,o){var r=v.getSettings(t);v.compose(e,r,o)}},ko.virtualElements.allowedBindings.compose=!0,v}),n("durandal/widget",["require","./system","./composition"],function(e){var t=e("./system"),n=e("./composition"),i="data-part",o="["+i+"]",r={},a={},s={getParts:function(e){var n={};t.isArray(e)||(e=[e]);for(var r=0;e.length>r;r++){var a=e[r];if(a.getAttribute){var s=a.getAttribute(i);s&&(n[s]=a);for(var c=$(o,a),u=0;c.length>u;u++){var l=c.get(u);n[l.getAttribute(i)]=l}}}return n},getSettings:function(e){var t={},n=ko.utils.unwrapObservable(e())||{};if("string"==typeof n)t=n;else for(var i in n)if("string"==typeof i){var o=ko.utils.unwrapObservable(n[i]);t[i]=o}return t},registerKind:function(e){ko.bindingHandlers[e]={init:function(){return{controlsDescendantBindings:!0}},update:function(t,n,i,o,r){var a=s.getSettings(n);a.kind=e,s.create(t,a,r)}},ko.virtualElements.allowedBindings[e]=!0},mapKind:function(e,t,n){t&&(a[e]=t),n&&(r[e]=n)},convertKindToModuleId:function(e){return r[e]||"durandal/widgets/"+e+"/controller"},convertKindToViewId:function(e){return a[e]||"durandal/widgets/"+e+"/view"},beforeBind:function(e,t){var n=s.getParts(e),i=s.getParts(t);for(var o in n)$(i[o]).replaceWith(n[o])},createCompositionSettings:function(e){return e.model||(e.model=this.convertKindToModuleId(e.kind)),e.view||(e.view=this.convertKindToViewId(e.kind)),e.preserveContext=!0,e.beforeBind=this.beforeBind,e},create:function(e,t,i){"string"==typeof t&&(t={kind:t});var o=s.createCompositionSettings(t);n.compose(e,o,i)}};return ko.bindingHandlers.widget={init:function(){return{controlsDescendantBindings:!0}},update:function(e,t,n,i,o){var r=s.getSettings(t);s.create(e,r,o)}},ko.virtualElements.allowedBindings.widget=!0,s}),n("durandal/modalDialog",["require","./composition","./system","./viewModel"],function(e){function t(e){return i.defer(function(t){"string"==typeof e?i.acquire(e).then(function(e){"function"==typeof e?t.resolve(new e):t.resolve(e)}):t.resolve(e)}).promise()}var n=e("./composition"),i=e("./system"),o=e("./viewModel"),r={},a=0,s={currentZIndex:1e3,getNextZIndex:function(){return++this.currentZIndex},isModalOpen:function(){return a>0},getContext:function(e){return r[e||"default"]},addContext:function(e,t){t.name=e,r[e]=t;var n="show"+e.substr(0,1).toUpperCase()+e.substr(1);this[n]=function(t,n){return this.show(t,n,e)}},createCompositionSettings:function(e,t){var n={model:e,activate:!1};return t.afterCompose&&(n.afterCompose=t.afterCompose),n},show:function(e,s,c){var u=this,l=r[c||"default"];return i.defer(function(i){t(e).then(function(e){var t=o.activator();t.activateItem(e,s).then(function(o){if(o){var r=e.modal={owner:e,context:l,activator:t,close:function(n){t.deactivateItem(e,!0).then(function(t){t&&(a--,l.removeHost(r),delete e.modal,i.resolve(n))})}};r.settings=u.createCompositionSettings(e,l),l.addHost(r),a++,n.compose(r.host,r.settings)}else i.resolve(!1)})})}).promise()}};return s.addContext("default",{blockoutOpacity:.2,removeDelay:200,addHost:function(e){var t=$("body"),n=$('<div class="modalBlockout"></div>').css({"z-index":s.getNextZIndex(),opacity:this.blockoutOpacity}).appendTo(t),i=$('<div class="modalHost"></div>').css({"z-index":s.getNextZIndex()}).appendTo(t);if(e.host=i.get(0),e.blockout=n.get(0),!s.isModalOpen()){e.oldBodyMarginRight=$("body").css("margin-right");var o=$("html"),r=t.outerWidth(!0),a=o.scrollTop();$("html").css("overflow-y","hidden");var c=$("body").outerWidth(!0);t.css("margin-right",c-r+parseInt(e.oldBodyMarginRight)+"px"),o.scrollTop(a),$("#simplemodal-overlay").css("width",c+"px")}},removeHost:function(e){if($(e.host).css("opacity",0),$(e.blockout).css("opacity",0),setTimeout(function(){$(e.host).remove(),$(e.blockout).remove()},this.removeDelay),!s.isModalOpen()){var t=$("html"),n=t.scrollTop();t.css("overflow-y","").scrollTop(n),$("body").css("margin-right",e.oldBodyMarginRight)}},afterCompose:function(e,t,n){var i=$(t),o=i.width(),r=i.height();i.css({"margin-top":""+-r/2+"px","margin-left":""+-o/2+"px"}),$(n.model.modal.host).css("opacity",1),$(t).hasClass("autoclose")&&$(n.model.modal.blockout).click(function(){n.model.modal.close()}),$(".autofocus",t).each(function(){$(this).focus()})}}),s}),n("durandal/events",["require","./system"],function(e){var t=e("./system"),n=/\s+/,i=function(){},o=function(e,t){this.owner=e,this.events=t};return o.prototype.then=function(e,t){return this.callback=e||this.callback,this.context=t||this.context,this.callback?(this.owner.on(this.events,this.callback,this.context),this):this},o.prototype.on=o.prototype.then,o.prototype.off=function(){return this.owner.off(this.events,this.callback,this.context),this},i.prototype.on=function(e,t,i){var r,a,s;if(t){for(r=this.callbacks||(this.callbacks={}),e=e.split(n);a=e.shift();)s=r[a]||(r[a]=[]),s.push(t,i);return this}return new o(this,e)},i.prototype.off=function(e,i,o){var r,a,s,c;if(!(a=this.callbacks))return this;if(!(e||i||o))return delete this.callbacks,this;for(e=e?e.split(n):t.keys(a);r=e.shift();)if((s=a[r])&&(i||o))for(c=s.length-2;c>=0;c-=2)i&&s[c]!==i||o&&s[c+1]!==o||s.splice(c,2);else delete a[r];return this},i.prototype.trigger=function(e){var t,i,o,r,a,s,c,u;if(!(i=this.callbacks))return this;for(u=[],e=e.split(n),r=1,a=arguments.length;a>r;r++)u[r-1]=arguments[r];for(;t=e.shift();){if((c=i.all)&&(c=c.slice()),(o=i[t])&&(o=o.slice()),o)for(r=0,a=o.length;a>r;r+=2)o[r].apply(o[r+1]||this,u);if(c)for(s=[t].concat(u),r=0,a=c.length;a>r;r+=2)c[r].apply(c[r+1]||this,s)}return this},i.prototype.proxy=function(e){var t=this;return function(n){t.trigger(e,n)}},i.includeIn=function(e){e.on=i.prototype.on,e.off=i.prototype.off,e.trigger=i.prototype.trigger,e.proxy=i.prototype.proxy},i}),n("durandal/app",["require","./system","./viewEngine","./composition","./widget","./modalDialog","./events"],function(e){var t,n=e("./system"),i=e("./viewEngine"),o=e("./composition"),r=(e("./widget"),e("./modalDialog")),a=e("./events"),s="Application",c={title:s,showModal:function(e,t,n){return r.show(e,t,n)},showMessage:function(e,n,i){return r.show(new t(e,n,i))},start:function(){var e=this;return e.title&&(document.title=e.title),n.defer(function(i){$(function(){n.log("Starting Application"),n.acquire("./messageBox").then(function(o){t=o,t.defaultTitle=e.title||s,i.resolve(),n.log("Started Application")})})}).promise()},setRoot:function(e,t,n){var r,a={activate:!0,transition:t};r=n&&"string"!=typeof n?n:document.getElementById(n||"applicationHost"),"string"==typeof e?i.isViewUrl(e)?a.view=e:a.model=e:a.model=e,o.compose(r,a)},adaptToDevice:function(){document.body.ontouchmove&&(document.body.ontouchmove=function(e){e.preventDefault()})}};return a.includeIn(c),c}),n("durandal/plugins/router",["require","../system","../viewModel","../app"],function(e){function t(){k=!0,m.log("Cancelling Navigation"),f&&l.setLocation(f),k=!1,I(!1);var e=l.last_location[1].split("#/")[1];f||!e?T():e!=p?window.location.replace("#/"+p):T()}function n(e,t,n){V(e),d.onNavigationComplete(e,t,n),v=n,f=l.last_location[1].replace("/",""),T()}function i(e,i,o){i.routeInfo=e,i.router=d,m.log("Activating Route",e,o,i),A.activateItem(o,i).then(function(r){r?n(e,i,o):t()})}function o(){return k||l.last_location[1].replace("/","")==f}function r(e,t){var n=w[e];if(!o()){if(!n){if(!d.autoConvertRouteToModuleId)return d.handleInvalidRoute(e,t),void 0;n={moduleId:d.autoConvertRouteToModuleId(e,t),name:d.convertRouteToName(e)}}I(!0),m.acquire(n.moduleId).then(function(e){var o=d.getActivatableInstance(n,t,e);i(n,t,o)})}}function a(){r(p,this.params||{})}function s(){r(""+this.app.last_route.path,this.params||{})}function c(){var e,t=this.params||{};if(d.autoConvertRouteToModuleId){var n=this.path.split("#/");if(2==n.length){var i=n[1].split("/");return e=i[0],t.splat=i.splice(1),r(e,t),void 0}}d.handleInvalidRoute(this.app.last_location[1],t)}function u(e){return d.prepareRouteInfo(e),w[e.url]=e,y.push(e),e.visible&&(e.isActive=ko.computed(function(){return x()&&A()&&A().__moduleId__==e.moduleId}),b.push(e)),e}var l,d,f,v,p,m=e("../system"),g=e("../viewModel"),h=e("../app"),w={},y=ko.observableArray([]),b=ko.observableArray([]),x=ko.observable(!1),I=ko.observable(!1),k=!1,A=g.activator(),V=ko.observable(),T=function(){T=m.noop,x(!0),d.dfd.resolve(),delete d.dfd};return A.settings.areSameItem=function(){return!1},d={ready:x,allRoutes:y,visibleRoutes:b,isNavigating:I,activeItem:A,activeRoute:V,afterCompose:function(){setTimeout(function(){I(!1)},10)},getActivatableInstance:function(e,t,n){return"function"==typeof n?new n:n},useConvention:function(e){e=null==e?"viewmodels":e,e&&(e+="/"),d.convertRouteToModuleId=function(t){return e+d.stripParameter(t)}},stripParameter:function(e){var t=e.indexOf(":"),n=t>0?t-1:e.length;return e.substring(0,n)},handleInvalidRoute:function(e,t){m.log("No Route Found",e,t)},onNavigationComplete:function(e){document.title=h.title?e.name+" | "+h.title:e.name},navigateBack:function(){window.history.back()},navigateTo:function(e){l.setLocation(e)},replaceLocation:function(e){window.location.replace(e)},convertRouteToName:function(e){var t=d.stripParameter(e);return t.substring(0,1).toUpperCase()+t.substring(1)},convertRouteToModuleId:function(e){return d.stripParameter(e)},prepareRouteInfo:function(e){e.url instanceof RegExp||(e.name=e.name||d.convertRouteToName(e.url),e.moduleId=e.moduleId||d.convertRouteToModuleId(e.url),e.hash=e.hash||"#/"+e.url),e.caption=e.caption||e.name,e.settings=e.settings||{}},mapAuto:function(e){e=e||"viewmodels",e+="/",d.autoConvertRouteToModuleId=function(t){return e+d.stripParameter(t)}},mapNav:function(e,t,n){return"string"==typeof e?this.mapRoute(e,t,n,!0):(e.visible=!0,u(e))},mapRoute:function(e,t,n,i){return"string"==typeof e?u({url:e,moduleId:t,name:n,visible:i}):u(e)},map:function(e){if(!m.isArray(e))return u(e);for(var t=[],n=0;e.length>n;n++)t.push(u(e[n]));return t},activate:function(e){return m.defer(function(t){var n;d.dfd=t,p=e,l=Sammy(function(e){for(var t=y(),i=0;t.length>i;i++){var o=t[i];e.get(o.url,s),n=this.routes.get[i],w[""+n.path]=o}e.get(/\#\/(.*)/,c),e.get("",a)}),l._checkFormSubmission=function(){return!1},l.log=function(){var e=Array.prototype.slice.call(arguments,0);e.unshift("Sammy"),m.log.apply(m,e)},l.run()}).promise()}}}),n("services/logger",["durandal/system"],function(e){function t(e,t,n,o){i(e,t,n,o,"info")}function n(e,t,n,o){i(e,t,n,o,"error")}function i(t,n,i,o,r){i=i?"["+i+"] ":"",n?e.log(i,t,n):e.log(i,t),o&&("error"===r?toastr.error(t):toastr.info(t))}var o={log:t,logError:n};return o}),t.config({paths:{text:"durandal/amd/text"}}),n("main",["durandal/app","durandal/viewLocator","durandal/system","durandal/plugins/router","services/logger"],function(e,t,n,i,o){n.debug(!0),e.start().then(function(){toastr.options.positionClass="toast-bottom-right",toastr.options.backgroundpositionClass="toast-bottom-right",i.handleInvalidRoute=function(e){o.logError("No Route Found",e,"main",!0)},i.useConvention(),t.useConvention(),e.adaptToDevice(),e.setRoot("viewmodels/shell","entrance")})}),n("durandal/http",[],function(){return{defaultJSONPCallbackParam:"callback",get:function(e,t){return $.ajax(e,{data:t})},jsonp:function(e,t,n){return-1==e.indexOf("=?")&&(n=n||this.defaultJSONPCallbackParam,e+=-1==e.indexOf("?")?"?":"&",e+=n+"=?"),$.ajax({url:e,dataType:"jsonp",data:t})},post:function(e,t){return $.ajax({url:e,data:ko.toJSON(t),type:"POST",contentType:"application/json",dataType:"json"})}}}),n("text",["module"],function(e){var n,i,o=["Msxml2.XMLHTTP","Microsoft.XMLHTTP","Msxml2.XMLHTTP.4.0"],r=/^\s*<\?xml(\s)+version=[\'\"](\d)*.(\d)*[\'\"](\s)*\?>/im,a=/<body[^>]*>\s*([\s\S]+)\s*<\/body>/im,s="undefined"!=typeof location&&location.href,c=s&&location.protocol&&location.protocol.replace(/\:/,""),u=s&&location.hostname,l=s&&(location.port||void 0),d=[],f=e.config&&e.config()||{};return n={version:"2.0.3",strip:function(e){if(e){e=e.replace(r,"");var t=e.match(a);t&&(e=t[1])}else e="";return e},jsEscape:function(e){return e.replace(/(['\\])/g,"\\$1").replace(/[\f]/g,"\\f").replace(/[\b]/g,"\\b").replace(/[\n]/g,"\\n").replace(/[\t]/g,"\\t").replace(/[\r]/g,"\\r").replace(/[\u2028]/g,"\\u2028").replace(/[\u2029]/g,"\\u2029")},createXhr:f.createXhr||function(){var e,t,n;if("undefined"!=typeof XMLHttpRequest)return new XMLHttpRequest;if("undefined"!=typeof ActiveXObject)for(t=0;3>t;t+=1){n=o[t];try{e=new ActiveXObject(n)}catch(i){}if(e){o=[n];break}}return e},parseName:function(e){var t=!1,n=e.indexOf("."),i=e.substring(0,n),o=e.substring(n+1,e.length);return n=o.indexOf("!"),-1!==n&&(t=o.substring(n+1,o.length),t="strip"===t,o=o.substring(0,n)),{moduleName:i,ext:o,strip:t}},xdRegExp:/^((\w+)\:)?\/\/([^\/\\]+)/,useXhr:function(e,t,i,o){var r,a,s,c=n.xdRegExp.exec(e);return c?(r=c[2],a=c[3],a=a.split(":"),s=a[1],a=a[0],!(r&&r!==t||a&&a.toLowerCase()!==i.toLowerCase()||(s||a)&&s!==o)):!0},finishLoad:function(e,t,i,o){i=t?n.strip(i):i,f.isBuild&&(d[e]=i),o(i)},load:function(e,t,i,o){if(o.isBuild&&!o.inlineText)return i(),void 0;f.isBuild=o.isBuild;var r=n.parseName(e),a=r.moduleName+"."+r.ext,d=t.toUrl(a),v=f.useXhr||n.useXhr;!s||v(d,c,u,l)?n.get(d,function(t){n.finishLoad(e,r.strip,t,i)},function(e){i.error&&i.error(e)}):t([a],function(e){n.finishLoad(r.moduleName+"."+r.ext,r.strip,e,i)})},write:function(e,t,i){if(d.hasOwnProperty(t)){var o=n.jsEscape(d[t]);i.asModule(e+"!"+t,"define(function () { return '"+o+"';});\n")}},writeFile:function(e,t,i,o,r){var a=n.parseName(t),s=a.moduleName+"."+a.ext,c=i.toUrl(a.moduleName+"."+a.ext)+".js";n.load(s,i,function(){var t=function(e){return o(c,e)};t.asModule=function(e,t){return o.asModule(e,c,t)},n.write(e,s,t,r)},r)}},"node"===f.env||!f.env&&"undefined"!=typeof process&&process.versions&&process.versions.node?(i=t.nodeRequire("fs"),n.get=function(e,t){var n=i.readFileSync(e,"utf8");0===n.indexOf("﻿")&&(n=n.substring(1)),t(n)}):"xhr"===f.env||!f.env&&n.createXhr()?n.get=function(e,t,i){var o=n.createXhr();o.open("GET",e,!0),f.onXhr&&f.onXhr(o,e),o.onreadystatechange=function(){var n,r;4===o.readyState&&(n=o.status,n>399&&600>n?(r=Error(e+" HTTP status: "+n),r.xhr=o,i(r)):t(o.responseText))},o.send(null)}:("rhino"===f.env||!f.env&&"undefined"!=typeof Packages&&"undefined"!=typeof java)&&(n.get=function(e,t){var n,i,o="utf-8",r=new java.io.File(e),a=java.lang.System.getProperty("line.separator"),s=new java.io.BufferedReader(new java.io.InputStreamReader(new java.io.FileInputStream(r),o)),c="";try{for(n=new java.lang.StringBuffer,i=s.readLine(),i&&i.length()&&65279===i.charAt(0)&&(i=i.substring(1)),n.append(i);null!==(i=s.readLine());)n.append(a),n.append(i);c=""+n+""}finally{s.close()}t(c)}),n}),n("text!durandal/messageBox.html",[],function(){return'<div class="messageBox">\r\n    <div class="modal-header">\r\n        <h3 data-bind="html: title"></h3>\r\n    </div>\r\n    <div class="modal-body">\r\n        <p class="message" data-bind="html: message"></p>\r\n    </div>\r\n    <div class="modal-footer" data-bind="foreach: options">\r\n        <button class="btn" data-bind="click: function () { $parent.selectOption($data); }, html: $data, css: { \'btn-primary\': $index() == 0, autofocus: $index() == 0 }"></button>\r\n    </div>\r\n</div>'}),n("durandal/messageBox",[],function(){var e=function(t,n,i){this.message=t,this.title=n||e.defaultTitle,this.options=i||e.defaultOptions};return e.prototype.selectOption=function(e){this.modal.close(e)},e.defaultTitle="",e.defaultOptions=["Ok"],e}),n("durandal/transitions/entrance",["require","../system"],function(e){var t=e("../system"),n=100,i=function(e,i,o){return t.defer(function(t){function r(){t.resolve()}function a(){o.cacheViews?o.composingNewView&&ko.virtualElements.prepend(e,i):(ko.virtualElements.emptyNode(e),ko.virtualElements.prepend(e,i));var t={marginLeft:"20px",marginRight:"-20px",opacity:0,display:"block"},n={marginRight:0,marginLeft:0,opacity:1};$(i).css(t),$(i).animate(n,c,"swing",r)}if(o.keepScrollPosition||$(document).scrollTop(0),i){var s=$(o.activeView),c=o.duration||500;s.length?s.fadeOut(n,a):a()}else o.activeView?$(o.activeView).fadeOut(n,function(){o.cacheViews||ko.virtualElements.emptyNode(e),r()}):(o.cacheViews||ko.virtualElements.emptyNode(e),r())}).promise()};return i
}),n("viewmodels/details",["services/logger"],function(e){function t(){return e.log("Details View Activated",null,"details",!0),!0}var n={activate:t,title:"Details View"};return n}),n("viewmodels/home",["services/logger"],function(e){function t(){return e.log("Home View Activated",null,"home",!0),!0}var n={activate:t,title:"Home View"};return n}),n("viewmodels/shell",["durandal/system","durandal/plugins/router","services/logger"],function(e,t,n){function i(){return o()}function o(){return t.mapNav("home"),t.mapNav("details"),r("Hot Towel SPA Loaded!",null,!0),t.activate("home")}function r(t,i,o){n.log(t,i,e.getModuleId(a),o)}var a={activate:i,router:t};return a}),n("text!views/details.html",[],function(){return'<section>\r\n    <h2 class="page-title" data-bind="text: title"></h2>\r\n</section>'}),n("text!views/footer.html",[],function(){return'<nav class="navbar navbar-fixed-bottom">\r\n    <div class="navbar-inner navbar-content-center">\r\n        <span class="pull-left"><a href="http://johnpapa.net/spa" target="_blank">Learn how to build a SPA </a></span>\r\n        <span class="pull-right"><a href="http://johnpapa.net/hottowel" target="_blank">Hot Towel SPA - © 2013 JohnPapa.net</a></span>\r\n    </div>\r\n</nav>\r\n'}),n("text!views/home.html",[],function(){return'<section>\r\n    <h2 class="page-title" data-bind="text: title"></h2>\r\n</section>'}),n("text!views/nav.html",[],function(){return'<nav class="navbar navbar-fixed-top">\r\n    <div class="navbar-inner">\r\n        <a class="brand" href="/">\r\n            <span class="title">Hot Towel SPA</span> \r\n        </a>\r\n        <div class="btn-group" data-bind="foreach: router.visibleRoutes">\r\n            <a data-bind="css: { active: isActive }, attr: { href: hash }, text: name" \r\n                class="btn btn-info" href="#"></a>\r\n        </div>\r\n        <div class="loader pull-right" data-bind="css: { active: router.isNavigating }">\r\n            <div class="progress progress-striped active page-progress-bar">\r\n                <div class="bar" style="width: 100px;"></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</nav>'}),n("text!views/shell.html",[],function(){return"<div>\r\n    <header>\r\n        <!--ko compose: {view: 'nav'} --><!--/ko-->\r\n    </header>\r\n     <section id=\"content\" class=\"main container-fluid\">\r\n        <!--ko compose: {model: router.activeItem, \r\n            afterCompose: router.afterCompose, \r\n            transition: 'entrance'} -->\r\n        <!--/ko-->\r\n    </section>\r\n    <footer>\r\n        <!--ko compose: {view: 'footer'} --><!--/ko-->\r\n    </footer>\r\n</div>\r\n"}),t(["main"])})();