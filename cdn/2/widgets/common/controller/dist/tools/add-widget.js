System.register(["jimu-core","jimu-ui"],(function(e,t){var r={},o={};return{setters:[function(e){r.appActions=e.appActions,r.getAppStore=e.getAppStore,r.i18n=e.i18n},function(e){o.defaultMessages=e.defaultMessages}],execute:function(){e((()=>{var e={34750:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 0a.5.5 0 0 0-.5.5V7H.5a.5.5 0 0 0 0 1H7v6.5a.5.5 0 0 0 1 0V8h6.5a.5.5 0 0 0 0-1H8V.5a.5.5 0 0 0-.5-.5Z" fill="#000"></path></svg>'},48891:e=>{"use strict";e.exports=r},30726:e=>{"use strict";e.exports=o}},t={};function s(r){var o=t[r];if(void 0!==o)return o.exports;var n=t[r]={exports:{}};return e[r](n,n.exports,s),n.exports}s.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,{a:t}),t},s.d=(e,t)=>{for(var r in t)s.o(t,r)&&!s.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};return(()=>{"use strict";s.r(n),s.d(n,{default:()=>a});var e=s(48891),t=s(30726),r=s(34750),o=s.n(r);class a{constructor(){this.index=3,this.id="conttroller-add-widget1",this.name="conttroller-add-widget2",this.classes={}}getGroupId(){return"controller-tools"}getTitle(){const r=e.i18n.getIntl("_jimu");return r?r.formatMessage({id:"addWidget",defaultMessage:t.defaultMessages.previous}):"Add widget"}getIcon(){return o()}checked(t){const r=t.layoutItem.widgetId,o=(0,e.getAppStore)().getState().widgetsState[r];return!!(null==o?void 0:o.showWidgetsPanel)}onClick(t){const r=t.layoutItem.widgetId,o=(0,e.getAppStore)().getState().widgetsState[r],s=!(null==o?void 0:o.showWidgetsPanel);(0,e.getAppStore)().dispatch(e.appActions.widgetStatePropChange(r,"showWidgetsPanel",s))}getSettingPanel(e){return null}}})(),n})())}}}));