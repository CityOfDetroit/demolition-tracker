System.register(["jimu-core","jimu-ui/advanced/setting-components"],(function(e,t){var r={},i={};return{setters:[function(e){r.React=e.React,r.jsx=e.jsx},function(e){i.MapWidgetSelector=e.MapWidgetSelector,i.SettingRow=e.SettingRow,i.SettingSection=e.SettingSection}],execute:function(){e((()=>{var e={891:e=>{"use strict";e.exports=r},756:e=>{"use strict";e.exports=i}},t={};function s(r){var i=t[r];if(void 0!==i)return i.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,s),o.exports}s.d=(e,t)=>{for(var r in t)s.o(t,r)&&!s.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.p="";var o={};return s.p=window.jimuConfig.baseUrl,(()=>{"use strict";s.r(o),s.d(o,{default:()=>r});var e=s(891),t=s(756);class r extends e.React.PureComponent{constructor(){super(...arguments),this.onMapWidgetSelected=e=>{this.props.onSettingChange({id:this.props.id,useMapWidgetIds:e})}}render(){return(0,e.jsx)("div",null,(0,e.jsx)("div",{className:"widget-setting-addLayers"},(0,e.jsx)(t.SettingSection,{className:"map-selector-section",title:this.props.intl.formatMessage({id:"mapWidgetLabel",defaultMessage:"Select Map widget"})},(0,e.jsx)(t.SettingRow,null,(0,e.jsx)(t.MapWidgetSelector,{onSelect:this.onMapWidgetSelected,useMapWidgetIds:this.props.useMapWidgetIds})))))}}})(),o})())}}}));