System.register(["jimu-core","jimu-arcgis"],(function(e,a){var t={},r={};return{setters:[function(e){t.AbstractMessageAction=e.AbstractMessageAction,t.DataSourceManager=e.DataSourceManager,t.DataSourcesChangeType=e.DataSourcesChangeType,t.Immutable=e.Immutable,t.MessageCarryData=e.MessageCarryData,t.MessageType=e.MessageType,t.MutableStoreManager=e.MutableStoreManager,t.RecordSetChangeType=e.RecordSetChangeType,t.getAppStore=e.getAppStore},function(e){r.loadArcGISJSAPIModules=e.loadArcGISJSAPIModules}],execute:function(){e((()=>{"use strict";var e={26826:e=>{e.exports=r},48891:e=>{e.exports=t}},a={};function o(t){var r=a[t];if(void 0!==r)return r.exports;var s=a[t]={exports:{}};return e[t](s,s.exports,o),s.exports}o.d=(e,a)=>{for(var t in a)o.o(a,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:a[t]})},o.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var s={};return(()=>{o.r(s),o.d(s,{default:()=>u});var e=o(48891),a=o(26826);function t(e,a){let t=null;return e.clone?t=e.clone():(t=a.fromJSON(Object.assign({},e)),t.attributes=Object.assign({},e.attributes)),t}function r(a,t){var r;const o=function(a,t){var r,o;const s=n(),u=null===(r=null==s?void 0:s.widgets)||void 0===r?void 0:r[a],c=null===(o=null==u?void 0:u.manifest)||void 0===o?void 0:o.publishMessages;let i=e.MessageCarryData.UseDataSource;return null==c||c.forEach((e=>{const a=e;(null==a?void 0:a.messageCarryData)&&(null==a?void 0:a.messageType)===t&&(i=null==a?void 0:a.messageCarryData)})),i}(a,t),s=n(),u=null===(r=null==s?void 0:s.widgets)||void 0===r?void 0:r[a],c=(null==u?void 0:u.useDataSources)||(0,e.Immutable)([]),i=function(a){var t;const r=null!==(t=null==a?void 0:a.map((e=>({dataSourceId:e,mainDataSourceId:e,rootDataSourceId:null}))))&&void 0!==t?t:[];return(0,e.Immutable)(r)}(null==u?void 0:u.outputDataSources)||(0,e.Immutable)([]),l=null==c?void 0:c.asMutable({deep:!0}).concat(null==i?void 0:i.asMutable({deep:!0}));switch(o){case e.MessageCarryData.OutputDataSource:return i;case e.MessageCarryData.UseDataSource:return c;case e.MessageCarryData.BothDataSource:return(0,e.Immutable)(l)}}function n(){var a,t,r;return window.jimuConfig.isBuilder?null===(t=null===(a=(0,e.getAppStore)().getState())||void 0===a?void 0:a.appStateInBuilder)||void 0===t?void 0:t.appConfig:null===(r=(0,e.getAppStore)().getState())||void 0===r?void 0:r.appConfig}class u extends e.AbstractMessageAction{constructor(){super(...arguments),this.NoLockTriggerLayerWidgets=["Map"]}filterMessageDescription(a){if(a.messageType===e.MessageType.ExtentChange)return!0;if(a.messageType===e.MessageType.DataSourcesChange)return!0;if(a.messageType!==e.MessageType.DataRecordSetChange&&a.messageType!==e.MessageType.DataRecordsSelectionChange&&a.messageType!==e.MessageType.DataSourceFilterChange)return!1;{const t=e.DataSourceManager.getInstance();return r(a.widgetId,a.messageType).some((e=>{var a;const r=t.getDataSource(e.dataSourceId);return"WEB_MAP"===r.type||"WEB_SCENE"===r.type||!!(null===(a=r.getDataSourceJson())||void 0===a?void 0:a.geometryType)}))}}filterMessage(e){return!0}getSettingComponentUri(a,t){return a===e.MessageType.DataRecordsSelectionChange||a===e.MessageType.DataSourceFilterChange?"message-actions/pan-to-action-setting":null}onExecute(r,o){return(0,a.loadArcGISJSAPIModules)(["esri/Graphic"]).then((a=>{var s;let n=null;switch([n]=a,r.type){case e.MessageType.DataRecordSetChange:const a=r;if(a.changeType===e.RecordSetChangeType.CreateUpdate){let r={};const o=[];a.dataRecordSets.forEach((e=>{if(e&&e.records)for(let a=0;a<e.records.length;a++){const r=e.records[a].feature;r&&o.push(t(r,n).geometry)}})),r={geometries:o},e.MutableStoreManager.getInstance().updateStateValue(this.widgetId,"panToActionValue.value",r)}break;case e.MessageType.DataRecordsSelectionChange:const u=(0,e.getAppStore)().getState().appConfig.widgets[r.widgetId].manifest.label,c=r;let i={};const l=[];if(c.records){if(c.records[0])if(this.NoLockTriggerLayerWidgets.includes(u)){const e=c.records[0].dataSource.getMainDataSource();if(!(null===(s=null==o?void 0:o.useDataSources)||void 0===s?void 0:s.some((a=>(null==a?void 0:a.mainDataSourceId)===e.id))))break}else{const e=c.records[0].dataSource,a=null==e?void 0:e.getMainDataSource();if(!o.useDataSources.some((e=>(null==e?void 0:e.mainDataSourceId)===a.id)))break}for(let e=0;e<c.records.length;e++){const a=c.records[e].feature;a&&l.push(t(a,n).geometry)}}i={geometries:l},e.MutableStoreManager.getInstance().updateStateValue(this.widgetId,"panToActionValue.value",i);break;case e.MessageType.ExtentChange:const d=r;if(d.getRelatedWidgetIds().includes(this.widgetId))break;const g={value:{geometries:[d.extent]},relatedWidgets:d.getRelatedWidgetIds()};e.MutableStoreManager.getInstance().updateStateValue(this.widgetId,"panToActionValue",g);break;case e.MessageType.DataSourceFilterChange:const p=r;if(!o.useDataSources.some((e=>p.dataSourceIds.some((a=>(null==e?void 0:e.dataSourceId)===a)))))break;const S={dataSourceIds:p.dataSourceIds,useDataSources:o.useDataSources||[],type:"pan-to-query-params"};e.MutableStoreManager.getInstance().updateStateValue(this.widgetId,"panToActionValue.value",S);break;case e.MessageType.DataSourcesChange:const y=r;if(y.changeType===e.DataSourcesChangeType.Create){const a=[];y.dataSources.forEach((e=>{a.push(e.id)}));const t={dataSourceIds:a,type:"pan-to-layers"};e.MutableStoreManager.getInstance().updateStateValue(this.widgetId,"panToActionValue.value",t)}}return!0}))}}})(),s})())}}}));