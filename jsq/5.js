!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("react"),require("prop-types")):"function"==typeof define&&define.amd?define(["exports","react","prop-types"],e):e(t.ReactSpring={},t.React,t.PropTypes)}(this,function(t,e,n){"use strict";e=e&&e.hasOwnProperty("default")?e.default:e,n=n&&n.hasOwnProperty("default")?n.default:n;var r=function(){function t(){}var e=t.prototype;return e.start=function(t,e,n,r){},e.stop=function(){},e.__debouncedOnEnd=function(t){var e=this.__onEnd;this.__onEnd=null,e&&e(t)},t}();function i(){return(i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function a(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}function o(t,e){if(null==t)return{};var n,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(i[n]=t[n]);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}function s(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}var l=function(){function t(){}var e=t.prototype;return e.__attach=function(){},e.__detach=function(){},e.__getValue=function(){},e.__getAnimatedValue=function(){return this.__getValue()},e.__addChild=function(t){},e.__removeChild=function(t){},e.__getChildren=function(){return[]},t}(),u=function(t){function e(e,n,r,i,a){var o;return(o=t.call(this)||this)._value=e,o._parent=n,o._animationClass=r,o._animationConfig=i,o._callback=a,o.__attach(),o._hey=1,o}a(e,t);var n=e.prototype;return n.__getValue=function(){return this._parent.__getValue()},n.__attach=function(){this._parent.__addChild(this)},n.__detach=function(){this._parent.__removeChild(this)},n.update=function(){this._value.animate(new this._animationClass(i({},this._animationConfig,{toValue:this._animationConfig.toValue.__getValue()})),this._callback)},e}(l),c=function(t){function e(){var e;return(e=t.call(this)||this)._children=[],e}a(e,t);var n=e.prototype;return n.__addChild=function(t){t instanceof u&&(this._tracked=!0),0===this._children.length&&this.__attach(),this._children.push(t)},n.__removeChild=function(t){var e=this._children.indexOf(t);-1!==e?(this._children.splice(e,1),0===this._children.length&&this.__detach()):console.warn("Trying to remove a child that doesn't exist")},n.__getChildren=function(){return this._children},e}(l);function f(t){var e;return"number"==typeof t?t>>>0===t&&t>=0&&t<=4294967295?t:null:(e=v.hex6.exec(t))?parseInt(e[1]+"ff",16)>>>0:w.hasOwnProperty(t)?w[t]:(e=v.rgb.exec(t))?(g(e[1])<<24|g(e[2])<<16|g(e[3])<<8|255)>>>0:(e=v.rgba.exec(t))?(g(e[1])<<24|g(e[2])<<16|g(e[3])<<8|b(e[4]))>>>0:(e=v.hex3.exec(t))?parseInt(e[1]+e[1]+e[2]+e[2]+e[3]+e[3]+"ff",16)>>>0:(e=v.hex8.exec(t))?parseInt(e[1],16)>>>0:(e=v.hex4.exec(t))?parseInt(e[1]+e[1]+e[2]+e[2]+e[3]+e[3]+e[4]+e[4],16)>>>0:(e=v.hsl.exec(t))?(255|h(y(e[1]),k(e[2]),k(e[3])))>>>0:(e=v.hsla.exec(t))?(h(y(e[1]),k(e[2]),k(e[3]))|b(e[4]))>>>0:null}function p(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+6*(e-t)*n:n<.5?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function h(t,e,n){var r=n<.5?n*(1+e):n+e-n*e,i=2*n-r,a=p(i,r,t+1/3),o=p(i,r,t),s=p(i,r,t-1/3);return Math.round(255*a)<<24|Math.round(255*o)<<16|Math.round(255*s)<<8}var d="[-+]?\\d*\\.?\\d+",_=d+"%";function m(){return"\\(\\s*("+(t=arguments,Array.prototype.slice.call(t,0)).join(")\\s*,\\s*(")+")\\s*\\)";var t}var v={rgb:new RegExp("rgb"+m(d,d,d)),rgba:new RegExp("rgba"+m(d,d,d,d)),hsl:new RegExp("hsl"+m(d,_,_)),hsla:new RegExp("hsla"+m(d,_,_,d)),hex3:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex4:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#([0-9a-fA-F]{6})$/,hex8:/^#([0-9a-fA-F]{8})$/};function g(t){var e=parseInt(t,10);return e<0?0:e>255?255:e}function y(t){return(parseFloat(t)%360+360)%360/360}function b(t){var e=parseFloat(t);return e<0?0:e>1?255:Math.round(255*e)}function k(t){var e=parseFloat(t,10);return e<0?0:e>100?1:e/100}var w={transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199};f.rgba=function(t){return{r:Math.round((4278190080&t)>>>24),g:Math.round((16711680&t)>>>16),b:Math.round((65280&t)>>>8),a:((255&t)>>>0)/255}};var V=f,x=function(t){return t},A=function(){function t(){}return t.create=function(t){if("function"==typeof t)return function(){return t.apply(void 0,arguments)};if(t.outputRange&&"string"==typeof t.outputRange[0])return C(t);var e=t.outputRange,n=t.inputRange,r=t.easing||x,i="extend";void 0!==t.extrapolateLeft?i=t.extrapolateLeft:void 0!==t.extrapolate&&(i=t.extrapolate);var a="extend";return void 0!==t.extrapolateRight?a=t.extrapolateRight:void 0!==t.extrapolate&&(a=t.extrapolate),function(t){var o=function(t,e){for(var n=1;n<e.length-1&&!(e[n]>=t);++n);return n-1}(t,n);return function(t,e,n,r,i,a,o,s){var l=t;if(l<e){if("identity"===o)return l;"clamp"===o&&(l=e)}if(l>n){if("identity"===s)return l;"clamp"===s&&(l=n)}if(r===i)return r;if(e===n)return t<=e?r:i;e===-1/0?l=-l:n===1/0?l-=e:l=(l-e)/(n-e);l=a(l),r===-1/0?l=-l:i===1/0?l+=r:l=l*(i-r)+r;return l}(t,n[o],n[o+1],e[o],e[o+1],r,i,a)}},t}();function P(t){var e=V(t);return null===e?t:"rgba("+((4278190080&(e=e||0))>>>24)+", "+((16711680&e)>>>16)+", "+((65280&e)>>>8)+", "+(255&e)/255+")"}var S=/[0-9\.-]+/g;function C(t){var e=t.outputRange,n=(e=e.map(P))[0].match(S).map(function(){return[]});e.forEach(function(t){t.match(S).forEach(function(t,e){n[e].push(+t)})});var r=e[0].match(S).map(function(e,r){return A.create(i({},t,{outputRange:n[r]}))}),a=/^rgb/.test(e[0]);return function(t){var n=0;return e[0].replace(S,function(){var e=r[n++](t);return String(a&&n<4?Math.round(e):e)})}}var T=function(t){function e(e,n){var r;return(r=t.call(this)||this)._parents=Array.isArray(e)?e:[e],r._interpolation=A.create(n),r}a(e,t);var n=e.prototype;return n.__getValue=function(){return this._interpolation.apply(this,this._parents.map(function(t){return t.__getValue()}))},n.__attach=function(){for(var t=0;t<this._parents.length;++t)this._parents[t]instanceof l&&this._parents[t].__addChild(this)},n.__detach=function(){for(var t=0;t<this._parents.length;++t)this._parents[t]instanceof l&&this._parents[t].__removeChild(this)},n.interpolate=function(t){return new e(this,t)},e}(c),O=0;var E=function(t){function e(e){var n;return(n=t.call(this)||this)._value=e,n._animation=null,n._animatedStyles=new Set,n._listeners={},n}a(e,t);var n=e.prototype;return n.__detach=function(){this.stopAnimation()},n.__getValue=function(){return this._value},n._flush=function(){(0===this._animatedStyles.size||this._tracked)&&function t(e,n){"function"==typeof e.update?n.add(e):e.__getChildren().forEach(function(e){return t(e,n)})}(this,this._animatedStyles),this._animatedStyles.forEach(function(t){return t.update()})},n._updateValue=function(t){for(var e in this._value=t,this._flush(),this._listeners)this._listeners[e]({value:this.__getValue()})},n.setValue=function(t){this._animation&&(this._animation.stop(),this._animation=null),this._animatedStyles.clear(),this._updateValue(t)},n.stopAnimation=function(t){this.stopTracking(),this._animation&&this._animation.stop(),this._animation=null,t&&t(this.__getValue())},n.interpolate=function(t){return new T(this,t)},n.animate=function(t,e){var n=this,r=this._animation;this._animation&&this._animation.stop(),this._animation=t,this._animatedStyles.clear(),t.start(this._value,function(t){return n._updateValue(t)},function(t){n._animation=null,e&&e(t)},r)},n.addListener=function(t){var e=String(O++);return this._listeners[e]=t,e},n.removeListener=function(t){delete this._listeners[t]},n.removeAllListeners=function(){this._listeners={}},n.stopTracking=function(){this._tracking&&this._tracking.__detach(),this._tracking=null},n.track=function(t){this.stopTracking(),this._tracking=t},e}(c),R=function(t){function e(e){var n;return(n=t.call(this)||this)._values=e.map(function(t){return new E(t)}),n}a(e,t);var n=e.prototype;return n.setValue=function(t){var e=this;t.forEach(function(t,n){return e._values[n].setValue(t)})},n.__getValue=function(){return this._values.map(function(t){return t.__getValue()})},n.stopAnimation=function(t){this._values.forEach(function(t){return t.stopAnimation()}),t&&t(this.__getValue())},n.__attach=function(){for(var t=0;t<this._values.length;++t)this._values[t]instanceof l&&this._values[t].__addChild(this)},n.__detach=function(){for(var t=0;t<this._values.length;++t)this._values[t]instanceof l&&this._values[t].__removeChild(this)},e}(c),F=function(t){function e(e,n){var r;return(r=t.call(this)||this)._strings=e,r._values=n,console.warn("OBSOLETE: templates in react-spring will be superceded by interpolators in the next minor, so that template`${radius}deg` becomes: radius.interpolate(r => `${r}deg` or for multiple values: interpolate([x,y,z], (x,y,z) => `${x}px,${y}px,${z}px`)"),r}a(e,t);var n=e.prototype;return n.__transformValue=function(t){return t instanceof l?t.__getValue():t},n.__getValue=function(){for(var t=this._strings[0],e=0;e<this._values.length;++e)t+=this.__transformValue(this._values[e])+this._strings[1+e];return t},n.__attach=function(){for(var t=0;t<this._values.length;++t)this._values[t]instanceof l&&this._values[t].__addChild(this)},n.__detach=function(){for(var t=0;t<this._values.length;++t)this._values[t]instanceof l&&this._values[t].__removeChild(this)},e}(c),j=function(t,e){return void 0===t||null===t?e:t},M=function(t,e){return{tension:(n=t,3.62*(n-30)+194),friction:function(t){return 3*(t-8)+25}(e)};var n},z=function(t){function e(e){var n;(n=t.call(this)||this).onUpdate=function(){var t=n._lastPosition,e=n._lastVelocity,r=n._lastPosition,i=n._lastVelocity,a=Date.now();a>n._lastTime+64&&(a=n._lastTime+64);for(var o=Math.floor((a-n._lastTime)/1),s=0;s<o;++s){var l=e,u=n._tension*(n._toValue-r)-n._friction*i,c=(r=t+.001*l/2,i=e+.001*u/2),f=n._tension*(n._toValue-r)-n._friction*i;r=t+.001*c/2;var p=i=e+.001*f/2,h=n._tension*(n._toValue-r)-n._friction*i;r=t+.001*p/2;var d=i=e+.001*h/2,_=n._tension*(n._toValue-r)-n._friction*i;r=t+.001*p/2,i=e+.001*h/2,t+=.001*((l+2*(c+p)+d)/6),e+=.001*((u+2*(f+h)+_)/6)}if(n._lastTime=a,n._lastPosition=t,n._lastVelocity=e,n._onUpdate(t),n.__active){var m=!1;n._overshootClamping&&0!==n._tension&&(m=n._startPosition<n._toValue?t>n._toValue:t<n._toValue);var v=Math.abs(e)<=n._restSpeedThreshold,g=!0;if(0!==n._tension&&(g=Math.abs(n._toValue-t)<=n._restDisplacementThreshold),m||v&&g)return 0!==n._tension&&n._onUpdate(n._toValue),void n.__debouncedOnEnd({finished:!0});n._animationFrame=requestAnimationFrame(n.onUpdate)}},n._overshootClamping=j(e.overshootClamping,!1),n._restDisplacementThreshold=j(e.restDisplacementThreshold,.001),n._restSpeedThreshold=j(e.restSpeedThreshold,.001),n._initialVelocity=e.velocity,n._lastVelocity=j(e.velocity,0),n._toValue=e.toValue,n.__isInteraction=void 0===e.isInteraction||e.isInteraction;var r=M(j(e.tension,40),j(e.friction,7));return n._tension=r.tension,n._friction=r.friction,n._delay=void 0!==e.delay?e.delay:0,n}a(e,t);var n=e.prototype;return n.start=function(t,n,r,i){if(this.__active=!0,this._startPosition=t,this._lastPosition=this._startPosition,this._onUpdate=n,this.__onEnd=r,this._lastTime=Date.now(),i instanceof e){var a=i.getInternalState();this._lastPosition=a.lastPosition,this._lastVelocity=a.lastVelocity,this._lastTime=a.lastTime}void 0!==this._initialVelocity&&null!==this._initialVelocity&&(this._lastVelocity=this._initialVelocity),this._delay?this._timeout=setTimeout(this.onUpdate,this._delay):this.onUpdate()},n.getInternalState=function(){return{lastPosition:this._lastPosition,lastVelocity:this._lastVelocity,lastTime:this._lastTime}},n.stop=function(){this.__active=!1,clearTimeout(this._timeout),cancelAnimationFrame(this._animationFrame),this.__debouncedOnEnd({finished:!1})},e}(r),I=function(t){function e(e){var n;return n=t.call(this)||this,e=e||{},n._style=e,n}a(e,t);var n=e.prototype;return n.__getValue=function(){var t={};for(var e in this._style){var n=this._style[e];t[e]=n instanceof l?n.__getValue():n}return t},n.__getAnimatedValue=function(){var t={};for(var e in this._style){var n=this._style[e];n instanceof l&&(t[e]=n.__getAnimatedValue())}return t},n.__attach=function(){for(var t in this._style){var e=this._style[t];e instanceof l&&e.__addChild(this)}},n.__detach=function(){for(var t in this._style){var e=this._style[t];e instanceof l&&e.__removeChild(this)}},e}(c),W=function(t){function e(e,n){var r;return r=t.call(this)||this,e.style&&(e=i({},e,{style:new I(e.style)})),r._props=e,r._callback=n,r.__attach(),r}a(e,t);var n=e.prototype;return n.__getValue=function(){var t={};for(var e in this._props){var n=this._props[e];t[e]=n instanceof l?n.__getValue():n}return t},n.__getAnimatedValue=function(){var t={};for(var e in this._props){var n=this._props[e];n instanceof l&&(t[e]=n.__getAnimatedValue())}return t},n.__attach=function(){for(var t in this._props){var e=this._props[t];e instanceof l&&e.__addChild(this)}},n.__detach=function(){for(var t in this._props){var e=this._props[t];e instanceof l&&e.__removeChild(this)}},n.update=function(){this._callback()},e}(l),q={current:function(t,e){if(!t.setNativeProps)return!1;t.setNativeProps(e)},transformStyles:function(t){return t},inject:function(t,e){q.current=t,q.transformStyles=e}};var U=function(t,e){var n=0,r={},i=!(e&&!1===e.stopTogether),a={start:function(e){if(n===t.length)return e&&e({finished:!0});t.forEach(function(o,s){var l=function(o){if(r[s]=!0,++n===t.length)return n=0,e&&e(o);!o.finished&&i&&a.stop()};o?o.start(l):l({finished:!0})})},stop:function(){t.forEach(function(t,e){!r[e]&&t.stop(),r[e]=!0})}};return a},D={Value:E,Array:R,controller:function t(e,n,r){return function(t,e,n,r){var i=e.tension,a=e.friction,o=e.toValue;return t instanceof R?U(t._values.map(function(t,e){return n(t,{tension:i,friction:a,toValue:o[e]},r)}),{stopTogether:!1}):null}(e,n,t,r)||{start:function(t){var i=e,a=n;i.stopTracking(),n.toValue instanceof l?i.track(new u(i,n.toValue,r,a,t)):i.animate(new r(a),t)},stop:function(){e.stopAnimation()}}},template:function(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return new F(t,n)},interpolate:function(t,e){return new T(t,e)},createAnimatedComponent:function(t){return function(n){function r(){return n.apply(this,arguments)||this}a(r,n);var s=r.prototype;return s.componentWillUnmount=function(){this._propsAnimated&&this._propsAnimated.__detach()},s.setNativeProps=function(t){!1===q.current(this.refs.node,t,this)&&this.forceUpdate()},s.componentWillMount=function(){this.attachProps(this.props)},s.attachProps=function(t){var e=this,n=this._propsAnimated;this._propsAnimated=new W(t,function(){!1===q.current(e.refs.node,e._propsAnimated.__getAnimatedValue(),e)&&e.forceUpdate()}),n&&n.__detach()},s.componentWillReceiveProps=function(t){this.attachProps(t)},s.render=function(){var n=this._propsAnimated.__getValue(),r=n.style,a=o(n,["style"]);return e.createElement(t,i({},a,{style:q.transformStyles(r),ref:"node"}))},r}(e.Component)},inject:{ApplyAnimatedValues:q.inject},ApplyAnimatedValues:q,AnimatedProps:W},L={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0};var N=["Webkit","ms","Moz","O"];function $(t,e,n){return null==e||"boolean"==typeof e||""===e?"":n||"number"!=typeof e||0===e||L.hasOwnProperty(t)&&L[t]?(""+e).trim():e+"px"}Object.keys(L).forEach(function(t){N.forEach(function(e){L[function(t,e){return t+e.charAt(0).toUpperCase()+e.substring(1)}(e,t)]=L[t]})}),D.inject.ApplyAnimatedValues(function(t,e){if(t.setNativeProps)t.setNativeProps(e);else{if(!t.nodeType||void 0===t.setAttribute)return!1;!function(t,e){var n=t.style;for(var r in e)if(e.hasOwnProperty(r)){var i=0===r.indexOf("--"),a=$(r,e[r],i);"float"===r&&(r="cssFloat"),i?n.setProperty(r,a):n[r]=a}}(t,e.style),function(t,e){var n;for(var r in e)"style"!==r&&(n=e[r],t.getAttribute(r)&&t.setAttribute(r,n))}(t,e)}},function(t){return t});var G=i({},D,{elements:["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"].reduce(function(t,e){var n;return i({},t,((n={})[e]=D.createAnimatedComponent(e),n))},{})}),H=G.elements,K=G.template,B=G.interpolate,X={default:{tension:170,friction:26},gentle:{tension:120,friction:14},wobbly:{tension:180,friction:12},stiff:{tension:210,friction:20},slow:{tension:280,friction:60}},Y=function(t){function e(e){var n;return(n=t.call(this)||this).callback=function(){n.props.onFrame&&n.props.onFrame(n._propsAnimated.__getValue()),!n.props.native&&n.forceUpdate()},n._defaultAnimation=new G.Value(0),n._animations={},n._updateProps(e,!1),n}a(e,t);var n=e.prototype;return n._updateProps=function(t,e){var n=this,r=t.impl,a=t.from,o=t.to,s=t.config,l=t.attach,u=t.immediate,c=t.reset,f=(t.onFrame,t.onRest);void 0===e&&(e=!1);var p=Object.entries(i({},a,o)),h=this._defaultAnimation._value;this._interpolators={},this._defaultAnimation.setValue(0),this._animations=p.reduce(function(t,e,o){var p,d=e[0],_=e[1],m=!1===c&&n._animations[d]||(n._animations[d]={}),v="number"==typeof _,g=!v&&Array.isArray(_),y=void 0!==a[d]?a[d]:_,b=v||g?_:1;if(v&&l){var k=l(n),w=k&&k._animations[d];w&&(b=w.animation)}if(v)m.animation=m.interpolation=m.animation||new G.Value(y);else if(g)m.animation=m.interpolation=m.animation||new G.Array(y);else{var V=m.interpolation&&m.interpolation._interpolation(h);m.animation=n._defaultAnimation,m.interpolation=n._defaultAnimation.interpolate({inputRange:[0,1],outputRange:[void 0!==V?V:y,_]})}return!u||!0!==u&&-1===u.indexOf(d)||m.animation.setValue(b),m.stopped=!1,m.start=function(t){G.controller(m.animation,i({toValue:b},s),r).start(function(e){if(e.finished&&(n._animations[d].stopped=!0,Object.values(n._animations).every(function(t){return t.stopped}))){var r=i({},n.props.from,n.props.to);f&&f(r),t&&t(r)}})},m.stop=function(){m.stopped=!0,m.animation.stopAnimation()},n._interpolators[d]=m.interpolation,i({},t,((p={})[d]=m,p))},{}),e&&this.start();var d=this._propsAnimated;this._propsAnimated=new G.AnimatedProps(this._interpolators,this.callback),d&&d.__detach()},n.start=function(t){var e=this;return void 0===t&&(t=this.props),new Promise(function(t){return Object.values(e._animations).forEach(function(e){return e.start(t)})})},n.stop=function(){Object.values(this._animations).forEach(function(t){return t.stop()})},n.update=function(t){this._updateProps(i({},this.props,t),!0)},n.componentWillReceiveProps=function(t){this._updateProps(t,!0)},n.componentDidMount=function(){this.start()},n.componentWillUnmount=function(){this.stop()},n.getValues=function(){return this._propsAnimated.__getValue()},n.render=function(){var t=this.props,e=t.children,n=t.render,r=(t.from,t.to,t.config,t.native),a=o(t,["children","render","from","to","config","native"]),s=i({},r?this._interpolators:this._propsAnimated.__getValue(),a);return n?n(i({},s,{children:e})):Array.isArray(e)?e.map(function(t){return t(s)}):e(s)},e}(e.PureComponent);Y.defaultProps={from:{},to:{},config:X.default,native:!1,immediate:!1,reset:!1,impl:z};var J=function(t,e){return"function"==typeof t?t(e):t};var Q=function(t){function n(e){var n;n=t.call(this)||this;var r=e.children,i=e.render,a=e.keys,o=e.items,s=e.from,l=e.enter,u=(e.leave,e.update);return r=i||r||function(){return null},"function"==typeof a&&(a=o.map(a)),Array.isArray(r)||(r=[r],a=a?[a]:r),n.state={transitionKeys:a,transitions:r.map(function(t,e){var n=o?o[e]:a[e];return{children:t,key:a[e],item:n,to:J(l,n),from:J(s,n),update:J(u,n)}})},n}a(n,t);var r=n.prototype;return r.shouldComponentUpdate=function(t){return function(t,e){for(var n in t)if(!(n in e))return!0;for(var r in e)if(t[r]!==e[r])return!0;return!1}(t,this.props)},r.componentWillReceiveProps=function(t){var e=this,n=this.state,r=n.transitions,i=n.transitionKeys,a=t.children,o=t.render,s=t.keys,l=t.items,u=t.from,c=t.enter,f=t.leave,p=t.update;a=o||a||function(){return null},"function"==typeof s&&(s=l.map(s)),Array.isArray(a)||(a=[a],s=s?[s]:a);var h=new Set(s),d=new Set(i),_=s.filter(function(t){return!d.has(t)}),m=i.filter(function(t){return!h.has(t)}),v=s.filter(function(t){return d.has(t)});r=r.map(function(t){if(void 0===t.destroy){var e=s.indexOf(t.key),n=a[e];n&&(t.children=n),p&&-1!==v.indexOf(t.key)&&(t.to=J(p,l?l[e]:s[e])||t.to)}return t}),_.length&&_.forEach(function(t){var e=s.indexOf(t),n=a[e],i=l?l[e]:s[e],o={children:n,key:s[e],item:i,to:J(c,i),from:J(u,i)};r=r.slice(0,e).concat([o],r.slice(e))}),m.length&&m.forEach(function(t){var n=r.find(function(e){return e.key===t});if(n){var i={destroy:!0,children:n.children,key:n.key,to:J(f,n.item),from:J(u,n.item),onRest:function(){return e.setState(function(t){return{transitions:t.transitions.filter(function(t){return t!==i})}})}};r=r.map(function(t){return t===n?i:t})}}),i=r.filter(function(t){return void 0===t.destroy}).map(function(t){return t.key});var g=s.map(function(t){return r.find(function(e){return e.key===t})});r.forEach(function(t,e){t.destroy&&!g.find(function(e){return e.key===t.key})&&(g=g.slice(0,e).concat([t],g.slice(e)))}),this.setState({transitions:g,transitionKeys:i})},r.getValues=function(){},r.render=function(){var t=this,n=this.props,r=n.render,a=(n.from,n.enter,n.leave,n.native),s=n.config,l=(n.keys,n.items,n.onFrame),u=(n.onRest,i({native:a,config:s},o(n,["render","from","enter","leave","native","config","keys","items","onFrame","onRest"])));return this.state.transitions.map(function(n,a){var s=n.key,c=n.item,f=n.children,p=o(n,["key","item","children"]);return e.createElement(Y,i({key:s},p,u,{onFrame:l&&function(t){return l(c,t)},render:r&&f,children:r?t.props.children:f}))})},n}(e.Component);Q.defaultProps={from:{},enter:{},leave:{},native:!1,config:X.default};var Z,tt,et=function(t){function n(){return t.apply(this,arguments)||this}a(n,t);var r=n.prototype;return r.getValues=function(){return this.instance&&this.instance.getValues()},r.render=function(){var t=this,n=this.props,r=n.children,a=n.render,s=n.from,l=n.to,u=n.native,c=n.config,f=n.keys,p=n.onRest,h=o(n,["children","render","from","to","native","config","keys","onRest"]),d=new Set,_=i({},h,{native:u,config:c,from:s,to:l});return(a||r).map(function(n,o){return e.createElement(Y,i({ref:function(e){return 0===o&&(t.instance=e)},onRest:0===o?p:null,key:f[o]},_,{attach:function(t){return function(t,e){return d.add(e),0===t?void 0:Array.from(d)[t-1]}(o,t)},render:a&&n,children:a?r:n}))})},n}(e.PureComponent);function nt(t){return t?"scrollLeft":"scrollTop"}et.defaultProps={from:{},to:{},native:!1,config:X.default};var rt=function(t){function n(e){var n;return n=t.call(this,e)||this,it.call(s(n)),n.state={ready:!1},n.layers=[],n.space=0,n.current=0,n.offset=0,n.busy=!1,n}a(n,t);var r=n.prototype;return r.scrollTo=function(t){var e=this.props,n=e.horizontal,r=e.config,a=e.impl,o=nt(n);this.scrollStop(),this.offset=t;var s=this.refs.container;this.animatedScroll=new G.Value(s[o]),this.animatedScroll.addListener(function(t){var e=t.value;return s[o]=e}),G.controller(this.animatedScroll,i({toValue:t*this.space},r),a).start()},r.getChildContext=function(){return{parallax:this}},r.componentDidMount=function(){window.addEventListener("resize",this.updateRaf,!1),this.update(),this.setState({ready:!0})},r.componentWillUnmount=function(){window.removeEventListener("resize",this.updateRaf,!1)},r.componentDidUpdate=function(){this.update()},r.render=function(){var t,n=this.props,r=n.style,a=n.innerStyle,o=n.pages,s=n.className,l=n.scrolling,u=n.children,c=n.horizontal,f=l?"scroll":"hidden";return e.createElement("div",{ref:"container",onScroll:this.onScroll,onWheel:l?this.scrollStop:null,onTouchStart:l?this.scrollStop:null,style:i({position:"absolute",width:"100%",height:"100%",overflow:f,overflowY:c?"hidden":f,overflowX:c?f:"hidden",WebkitOverflowScrolling:"touch",WebkitTransform:"translate(0,0)",MsTransform:"translate(0,0)",transform:"translate3d(0,0,0)"},r),className:s},this.state.ready&&e.createElement("div",{ref:"content",style:i((t={position:"absolute"},t[c?"height":"width"]="100%",t.WebkitTransform="translate(0,0)",t.MsTransform="translate(0,0)",t.transform="translate3d(0,0,0)",t.overflow="hidden",t[c?"width":"height"]=this.space*o,t),a)},u))},n}(e.PureComponent);rt.defaultProps={config:X.slow,scrolling:!0,horizontal:!1,impl:z},rt.childContextTypes={parallax:n.object},rt.Layer=(tt=Z=function(t){function n(e,n){var r;r=t.call(this,e,n)||this;var i=n.parallax,a=Math.floor(e.offset)*i.space,o=i.space*e.offset+a*e.speed,s=parseFloat(-i.current*e.speed+o);return r.animatedTranslate=new G.Value(s),r.animatedSpace=new G.Value(i.space*e.factor),r}a(n,t);var r=n.prototype;return r.componentDidMount=function(){var t=this.context.parallax;t&&(t.layers=t.layers.concat(this),t.update())},r.componentWillUnmount=function(){var t=this,e=this.context.parallax;e&&(e.layers=e.layers.filter(function(e){return e!==t}),e.update())},r.setPosition=function(t,e,n){void 0===n&&(n=!1);var r=this.context.parallax.props,a=r.config,o=r.impl,s=Math.floor(this.props.offset)*t,l=t*this.props.offset+s*this.props.speed,u=parseFloat(-e*this.props.speed+l);n?this.animatedTranslate.setValue(u):G.controller(this.animatedTranslate,i({toValue:u},a),o).start()},r.setHeight=function(t,e){void 0===e&&(e=!1);var n=this.context.parallax.props,r=n.config,a=n.impl,o=parseFloat(t*this.props.factor);e?this.animatedSpace.setValue(o):G.controller(this.animatedSpace,i({toValue:o},r),a).start()},r.render=function(){var t,n=this.props,r=n.style,a=n.children,s=(n.offset,n.speed,n.factor,n.className),l=o(n,["style","children","offset","speed","factor","className"]),u=this.context.parallax.props.horizontal,c=this.animatedTranslate.interpolate({inputRange:[0,1],outputRange:u?["translate3d(0px,0,0)","translate3d(1px,0,0)"]:["translate3d(0,0px,0)","translate3d(0,1px,0)"]});return e.createElement(H.div,i({},l,{ref:"layer",className:s,style:i((t={position:"absolute",backgroundSize:"auto",backgroundRepeat:"no-repeat",willChange:"transform"},t[u?"height":"width"]="100%",t[u?"width":"height"]=this.animatedSpace,t.WebkitTransform=c,t.MsTransform=c,t.transform=c,t),r)}),a)},n}(e.PureComponent),Z.contextTypes={parallax:n.object},Z.defaultProps={factor:1,offset:0,speed:0},tt);var it=function(){var t=this;this.moveItems=function(){t.layers.forEach(function(e){return e.setPosition(t.space,t.current)}),t.busy=!1},this.scrollerRaf=function(){return requestAnimationFrame(t.moveItems)},this.onScroll=function(e){var n=t.props.horizontal;t.busy||(t.busy=!0,t.scrollerRaf(),t.current=e.target[nt(n)])},this.update=function(){var e=t.props,n=e.scrolling,r=e.horizontal,i=nt(r);t.refs.container&&(t.space=t.refs.container[r?"clientWidth":"clientHeight"],n?t.current=t.refs.container[i]:t.refs.container[i]=t.current=t.offset*t.space,t.refs.content&&(t.refs.content.style[r?"width":"height"]=t.space*t.props.pages+"px"),t.layers.forEach(function(e){e.setHeight(t.space,!0),e.setPosition(t.space,t.current,!0)}))},this.updateRaf=function(){requestAnimationFrame(t.update),setTimeout(t.update,150)},this.scrollStop=function(e){return t.animatedScroll&&t.animatedScroll.stopAnimation()}},at=function(t){function n(){for(var e,n,r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return e=n=t.call.apply(t,[this].concat(a))||this,n.state={primitive:void 0,props:{},resolve:function(){return null}},n.next=function(t,e){return new Promise(function(r){var a=n.instance&&n.instance.getValues(),o="function"==typeof e.from?e.from:i({},n.state.props.from,a,e.from);n.setState(function(n){return{primitive:t,props:i({},e,{from:o}),resolve:r}})})},e||s(n)}a(n,t);var r=n.prototype;return r.componentDidMount=function(){this.props.script&&this.props.script(this.next)},r.render=function(){var t=this,n=this.state,r=n.primitive,a=n.props,s=n.resolve,l=this.props,u=(l.script,o(l,["script"]));return r?e.createElement(r,i({ref:function(e){return t.instance=e}},u,a,{onRest:s})):null},n}(e.Component);t.Spring=Y,t.Keyframes=at,t.Transition=Q,t.Trail=et,t.Parallax=rt,t.config=X,t.template=K,t.animated=H,t.interpolate=B,t.Animation=r,t.Value=E,Object.defineProperty(t,"__esModule",{value:!0})});