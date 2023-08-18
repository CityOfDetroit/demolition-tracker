System.register(["jimu-core","jimu-arcgis"],(function(t,e){var a={},o={};return{setters:[function(t){a.AbstractDataAction=t.AbstractDataAction,a.DataSourceStatus=t.DataSourceStatus,a.MutableStoreManager=t.MutableStoreManager,a.getAppStore=t.getAppStore,a.i18n=t.i18n,a.utils=t.utils},function(t){o.ActionType=t.ActionType,o.MapViewManager=t.MapViewManager,o.SHOW_ON_MAP_DATA_ID_PREFIX=t.SHOW_ON_MAP_DATA_ID_PREFIX,o.featureUtils=t.featureUtils,o.zoomToUtils=t.zoomToUtils}],execute:function(){t((()=>{"use strict";var t={26826:t=>{t.exports=o},48891:t=>{t.exports=a}},e={};function i(a){var o=e[a];if(void 0!==o)return o.exports;var n=e[a]={exports:{}};return t[a](n,n.exports,i),n.exports}i.d=(t,e)=>{for(var a in e)i.o(e,a)&&!i.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})},i.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),i.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var n={};return(()=>{i.r(n),i.d(n,{default:()=>o});var t=i(48891),e=i(26826);var a=function(t,e,a,o){return new(a||(a=Promise))((function(i,n){function r(t){try{u(o.next(t))}catch(t){n(t)}}function s(t){try{u(o.throw(t))}catch(t){n(t)}}function u(t){var e;t.done?i(t.value):(e=t.value,e instanceof a?e:new a((function(t){t(e)}))).then(r,s)}u((o=o.apply(t,e||[])).next())}))};class o extends t.AbstractDataAction{constructor(){super(...arguments),this._viewManager=e.MapViewManager.getInstance()}isSupported(e){return a(this,void 0,void 0,(function*(){const{records:a,dataSource:o}=e;return!(!o||o.getStatus()===t.DataSourceStatus.NotReady)&&a.length>0&&a.some((t=>{var e;return null===(e=t.feature)||void 0===e?void 0:e.geometry}))}))}onExecute(o,i){var n,r;return a(this,void 0,void 0,(function*(){const a=this._getActiveViewId(this.widgetId,(0,t.getAppStore)().getState().jimuMapViewsInfo),s=(null===(n=t.MutableStoreManager.getInstance().getStateValue([this.widgetId]))||void 0===n?void 0:n.showOnMapDatas)||{},u=t.i18n.getIntl(),d=o.name||u.formatMessage({id:"showOnMapData",defaultMessage:"Show on map data"});s[`${e.SHOW_ON_MAP_DATA_ID_PREFIX}dataAction_${t.utils.getUUID()}`]={mapWidgetId:this.widgetId,jimuMapViewId:a,dataSet:o,type:e.ActionType.DataAction,symbolOption:(null==i?void 0:i.isUseCustomSymbol)?i.symbolOption:!1===(null==i?void 0:i.isUseCustomSymbol)?null:void 0,title:d},t.MutableStoreManager.getInstance().updateStateValue(this.widgetId,"showOnMapDatas",s);const l=this._viewManager.getJimuMapViewById(a),c=yield e.featureUtils.convertDataRecordSetToFeatureSet(o);return l&&(null===(r=null==c?void 0:c.features)||void 0===r?void 0:r.length)>0&&e.zoomToUtils.zoomTo(null==l?void 0:l.view,c.features,null),yield Promise.resolve(!0)}))}_getActiveViewId(t,e){let a=Object.keys(e||{}).find((a=>e[a].mapWidgetId===t&&e[a].isActive));return a||(a=Object.keys(e||{}).find((a=>e[a].mapWidgetId===t))),a}}})(),n})())}}}));