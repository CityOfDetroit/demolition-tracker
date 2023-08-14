System.register(["jimu-core","jimu-ui","jimu-ui/advanced/setting-components","jimu-ui/advanced/data-source-selector","jimu-for-builder","jimu-arcgis","jimu-ui/basic/list-tree","jimu-core/react"],(function(e,t){var s={},i={},a={},o={},r={},n={},l={},p={};return{setters:[function(e){s.AllDataSourceTypes=e.AllDataSourceTypes,s.DataSourceManager=e.DataSourceManager,s.FormattedMessage=e.FormattedMessage,s.Immutable=e.Immutable,s.React=e.React,s.SessionManager=e.SessionManager,s.css=e.css,s.defaultMessages=e.defaultMessages,s.esri=e.esri,s.getAppStore=e.getAppStore,s.jsx=e.jsx,s.polished=e.polished},function(e){i.Alert=e.Alert,i.Button=e.Button,i.Icon=e.Icon,i.ImageWithParam=e.ImageWithParam,i.Label=e.Label,i.Radio=e.Radio,i.Switch=e.Switch,i.hooks=e.hooks},function(e){a.JimuLayerViewSelector=e.JimuLayerViewSelector,a.MapWidgetSelector=e.MapWidgetSelector,a.SettingRow=e.SettingRow,a.SettingSection=e.SettingSection,a.SidePopper=e.SidePopper},function(e){o.DataSourceSelector=e.DataSourceSelector},function(e){r.getAppConfigAction=e.getAppConfigAction},function(e){n.JimuMapViewComponent=e.JimuMapViewComponent,n.MapViewManager=e.MapViewManager},function(e){l.List=e.List},function(e){p.createRef=e.createRef,p.useCallback=e.useCallback,p.useState=e.useState}],execute:function(){e((()=>{var e={55339:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m8.745 8 6.1 6.1a.527.527 0 1 1-.745.746L8 8.746l-6.1 6.1a.527.527 0 1 1-.746-.746l6.1-6.1-6.1-6.1a.527.527 0 0 1 .746-.746l6.1 6.1 6.1-6.1a.527.527 0 0 1 .746.746L8.746 8Z" fill="#000"></path></svg>'},26826:e=>{"use strict";e.exports=n},48891:e=>{"use strict";e.exports=s},51315:e=>{"use strict";e.exports=p},23137:e=>{"use strict";e.exports=r},30726:e=>{"use strict";e.exports=i},338:e=>{"use strict";e.exports=o},77756:e=>{"use strict";e.exports=a},59587:e=>{"use strict";e.exports=l}},t={};function c(s){var i=t[s];if(void 0!==i)return i.exports;var a=t[s]={exports:{}};return e[s](a,a.exports,c),a.exports}c.d=(e,t)=>{for(var s in t)c.o(t,s)&&!c.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},c.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),c.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.p="";var d={};return c.p=window.jimuConfig.baseUrl,(()=>{"use strict";c.r(d),c.d(d,{default:()=>m});var e=c(48891),t=c(30726),s=c(77756),i=c(338),a=c(23137);const o={sourceLabel:"Source",sourceDescript:"A web map or web scene, or any combination of the two.",goto:"Zoom to",layerTransparency:"Adjust layer transparency",information:"View layer details",options:"Options",setVisibility:"Toggle layer visibility",showOrHideLabels:"Show or hide labels",showLayerForMap:"Show layers for map data only",interactWithMap:"Interact with a Map widget",customizeLayers:"Customize layers",enableCustomizeLayers:"Enable customize layers",customizeLayerDesc:"Select the layers to display for users.",customizeLayerWarnings:"The selected Map widget does not contain a web map or web scene."};class r extends e.React.PureComponent{constructor(t){super(t),this.unmount=!1,this.setMapThumbUrl=t=>{if(t||this.setState({mapThumbUrl:null}),this.props.portUrl&&this.props.portUrl!==(0,e.getAppStore)().getState().portalUrl)e.esri.restPortal.searchItems({q:`id:${t}`,portal:this.props.portUrl+"/sharing/rest"}).then((e=>{if(!this.unmount)if(e.results[0]){const t=`${this.props.portUrl}/sharing/rest/content/items/${e.results[0].id}/info/${e.results[0].thumbnail}`;this.setState({mapThumbUrl:t})}else this.setState({mapThumbUrl:null})}));else{const s=(0,e.getAppStore)().getState().portalUrl,i=e.SessionManager.getInstance().getSessionByUrl(s);e.esri.restPortal.searchItems({q:`id:${t}`,authentication:e.SessionManager.getInstance().getSessionByUrl(s),portal:s+"/sharing/rest"}).then((e=>{if(!this.unmount)if(e.results[0]){const t=`${s}/sharing/rest/content/items/${e.results[0].id}/info/${e.results[0].thumbnail}?token=${null==i?void 0:i.token}`;this.setState({mapThumbUrl:t})}else this.setState({mapThumbUrl:null})}))}},this.state={mapThumbUrl:null}}componentDidMount(){this.unmount=!1,this.setMapThumbUrl(this.props.mapItemId)}componentDidUpdate(e,t){e.mapItemId!==this.props.mapItemId&&this.setMapThumbUrl(this.props.mapItemId)}componentWillUnmount(){this.unmount=!0}render(){return this.state.mapThumbUrl?e.React.createElement(t.ImageWithParam,{imageParam:{url:this.state.mapThumbUrl}}):e.React.createElement(t.ImageWithParam,{imageParam:{}})}}var n=c(26826),l=c(59587),p=c(51315);const u=c(55339);function h(i){var a;const{mapView:r,isCustomizeEnabled:n,onToggle:l,onClose:c,trigger:d,title:h,settingProps:m}=i,g=t.hooks.useTranslate(o,e.defaultMessages),y=e=>{const t=[];for(const s of Object.keys(e.jimuLayerViews))t.push(s);return t},S=(0,p.useCallback)((()=>{var e,t,s;const i=y(r),a=new Set(null===(s=null===(t=null===(e=m.config)||void 0===e?void 0:e.customizeLayerOptions)||void 0===t?void 0:t[r.id])||void 0===s?void 0:s.hiddenJimuLayerViewIds);return i.filter((e=>!a.has(e)))}),[r,null===(a=m.config)||void 0===a?void 0:a.customizeLayerOptions]),w=S(),[f,v]=(0,p.useState)(w);return(0,e.jsx)(s.SidePopper,{isOpen:!0,position:"right",toggle:l,trigger:d},(0,e.jsx)("div",{className:"w-100 h-100",css:(b=m.theme,e.css`
    .layer-item-panel {
      .setting-header {
        padding: ${e.polished.rem(10)} ${e.polished.rem(16)} ${e.polished.rem(0)} ${e.polished.rem(16)}
      }
      .setting-title {
        font-size: ${e.polished.rem(16)};
        .layer-item-label{
          color: ${b.colors.palette.dark[600]};
        }
      }
      .setting-container {
        height: calc(100% - ${e.polished.rem(50)});
        overflow: auto;

        .title-desc {
          color: ${b.colors.palette.dark[200]};
        }

        .ep-divider-bottom {
          border-bottom: 1px solid var(--light-800)
        }

        .ep-divider-hide {
          border-bottom: none !important
        }

        .ep-section-title {
          max-width: 80%;
          color: var(--dark-800);
        }
      }
    }
  `)},(0,e.jsx)("div",{className:"w-100 h-100 layer-item-panel"},(0,e.jsx)("div",{className:"w-100 d-flex align-items-center justify-content-between setting-header setting-title"},(0,e.jsx)("h5",{title:h,className:"text-truncate layer-item-label mt-2"},h),(0,e.jsx)(t.Button,{role:"button",title:g("close"),"aria-label":g("close"),className:"ml-2",icon:!0,type:"tertiary",size:"sm",onClick:c},(0,e.jsx)(t.Icon,{icon:u}))),(0,e.jsx)("div",{className:"setting-container"},(0,e.jsx)(s.SettingSection,null,(0,e.jsx)(s.SettingRow,{label:g("enableCustomizeLayers")},(0,e.jsx)(t.Switch,{className:"can-x-switch",checked:n,"data-key":"enableCustomizeLayers",onChange:e=>{((e,t)=>{var s;const i=y(r),a=new Set(i);if(t){const e=Array.from(a);v(e)}else{const e=new Set(f),t=i.filter((t=>!e.has(t)));for(const e of t)(null===(s=r.jimuLayerViews)||void 0===s?void 0:s[e].layer).listMode="show";v([])}m.onSettingChange({id:m.id,config:m.config.setIn(["customizeLayerOptions",e],{isEnabled:t,hiddenJimuLayerViewIds:[]})})})(r.id,e.target.checked)},"aria-label":g("enableCustomizeLayers")})),n&&(0,e.jsx)(s.SettingRow,null,(0,e.jsx)(s.JimuLayerViewSelector,{key:r.id,jimuMapViewId:r.id,onChange:e=>{const t=y(r),s=new Set(e),i=[];for(const e of t)s.has(e)||i.push(e);v(e),((e,t)=>{const s=m.config.set("selectedJimuLayerIds",t).setIn(["customizeLayerOptions",r.id,"hiddenJimuLayerViewIds"],e);m.onSettingChange({id:m.id,config:s})})(i,e)},isMultiSelection:!0,defaultSelectedValues:w})))))));var b}class m extends e.React.PureComponent{constructor(i){super(i),this.supportedDsTypes=(0,e.Immutable)([e.AllDataSourceTypes.WebMap,e.AllDataSourceTypes.WebScene]),this.customizeLayersTrigger=(0,p.createRef)(),this.activeDataSourceKey="",this.isCustomizeOptionValid=()=>{var e,t;const s=null===(e=this.props.useMapWidgetIds)||void 0===e?void 0:e[0],i=(0,a.getAppConfigAction)().appConfig;for(const e of Object.keys(i.widgets)){const a=i.widgets[e];if("map-layers"===a.manifest.name&&a.id!==this.props.widgetId&&(null===(t=a.useMapWidgetIds)||void 0===t?void 0:t[0])===s)return!1}return!0},this.getPortUrl=()=>(0,e.getAppStore)().getState().portalUrl,this.shouldShowCustomizeLayerOptions=()=>{var e;return(null===(e=this.props.useMapWidgetIds)||void 0===e?void 0:e.length)>0},this.shouldShowLayerList=()=>!this.isDataSourceEmpty(),this.isCustomizeOptionEmpty=()=>this.isDataSourceEmpty()&&!this.shouldShowCustomizeWarning(),this.onRadioChange=e=>{this.props.onSettingChange({id:this.props.id,config:this.props.config.set("useMapWidget",e)}),this.setState({useMapWidget:e})},this.onToolsChanged=(e,t)=>{this.props.onSettingChange({id:this.props.id,config:this.props.config.set(t,e)})},this.onOptionsChanged=(e,t)=>{this.props.onSettingChange({id:this.props.id,config:this.props.config.set(t,e)})},this.onToggleUseDataEnabled=e=>{this.props.onSettingChange({id:this.props.id,useDataSourcesEnabled:e})},this.onDataSourceChange=e=>{e&&this.props.onSettingChange({id:this.props.id,useDataSources:e})},this.onMapWidgetSelected=e=>{var t,s,i,a,o,r,l,p;const c=(null===(t=n.MapViewManager.getInstance().getJimuMapViewGroup(e[0]))||void 0===t?void 0:t.jimuMapViews)||{};this.setState({mapViews:c}),this.props.onSettingChange({id:this.props.id,useMapWidgetIds:e});const d=(null===(i=n.MapViewManager.getInstance().getJimuMapViewGroup(null===(s=this.props.useMapWidgetIds)||void 0===s?void 0:s[0]))||void 0===i?void 0:i.jimuMapViews)||{};if((null===(a=this.props.useMapWidgetIds)||void 0===a?void 0:a.length)>0&&d){const e=null===(o=Object.values(d))||void 0===o?void 0:o[0],t=null===(l=null===(r=this.props.config)||void 0===r?void 0:r.customizeLayerOptions)||void 0===l?void 0:l[null==e?void 0:e.id];if(null==t?void 0:t.isEnabled){const s=new Set(null==t?void 0:t.hiddenJimuLayerViewIds);for(const t of Object.keys(null==e?void 0:e.jimuLayerViews)){const i=null===(p=null==e?void 0:e.jimuLayerViews[t])||void 0===p?void 0:p.layer;s.has(t)&&(i.listMode="show")}}}},this.onToggleCustomizeLayer=(e,t)=>{this.props.onSettingChange({id:this.props.id,config:this.props.config.setIn(["customizeLayerOptions",e,"isEnabled"],t)})},this.onViewsCreate=e=>{const t=Object.keys(e),s=t.map((t=>this.getDataSourceLabel(e[t].dataSourceId)));this.setState({mapViews:e,viewIdsFromMapWidget:t,dataSourceLabels:s,isViewLoaded:!0})},this.onListItemBodyClick=(e,t)=>{const{itemJsons:s}=t.props,i=s[0];i.itemStateDisabled||(i.itemKey===this.activeDataSourceKey?(this.activeDataSourceKey="",this.setState({showCustomizeLayerPanel:!1,activeCustomizeView:null})):(""===this.activeDataSourceKey?this.setState({showCustomizeLayerPanel:!0,currentCustomizeLayerTitle:null==i?void 0:i.itemStateTitle,activeCustomizeView:this.state.mapViews[i.itemKey]}):this.setState({currentCustomizeLayerTitle:null==i?void 0:i.itemStateTitle,activeCustomizeView:this.state.mapViews[i.itemKey]}),this.activeDataSourceKey=i.itemKey))},this.onCloseCustomizePanel=()=>{this.activeDataSourceKey="",this.setState({showCustomizeLayerPanel:!1,activeCustomizeView:null},(()=>{this.customizeLayersRef.tabIndex=0,this.customizeLayersRef.focus()}))},this.getActiveCustomizeStatus=()=>{var e,t,s;return(null===(s=null===(t=null===(e=this.props.config)||void 0===e?void 0:e.customizeLayerOptions)||void 0===t?void 0:t[this.state.activeCustomizeView.id])||void 0===s?void 0:s.isEnabled)||!1},this.getDataSourceLabel=t=>{if(!t)return"";const s=e.DataSourceManager.getInstance().getDataSource(t);return s.getLabel()||(null==s?void 0:s.getDataSourceJson().sourceLabel)||t},this.getCustomizeLayerList=(t=!1)=>{var s;return this.state.isViewLoaded?(0,e.jsx)("div",{ref:this.customizeLayersTrigger,className:"w-100"},(0,e.jsx)(l.List,{forwardRef:e=>{this.customizeLayersRef=e},itemsJson:null===(s=Object.keys(this.state.mapViews))||void 0===s?void 0:s.map(((e,s)=>{var i,a;const o=this.state.mapViews[e];return{itemStateTitle:this.getDataSourceLabel(o.dataSourceId),itemStateChecked:(null===(a=null===(i=this.state)||void 0===i?void 0:i.activeCustomizeView)||void 0===a?void 0:a.id)===o.id,itemStateDisabled:t,itemKey:`${o.id}`}})),dndEnabled:!1,handleClickItemBody:this.onListItemBodyClick})):this.getSkeletonList()},this.getSkeletonList=()=>{const t=[];for(let e=0;e<2;e++)t.push({itemKey:e.toString(),itemStateCommands:[{iconProps:()=>({icon:null,size:12,style:{opacity:0}})}]});return(0,e.jsx)(l.List,{className:"w-100",forwardRef:e=>{this.customizeLayersRef=e},itemsJson:t,dndEnabled:!1,handleClickItemBody:()=>{}})},this.getCustomizeSettingContent=()=>this.shouldShowCustomizeLayerOptions()&&(0,e.jsx)(e.React.Fragment,null,(0,e.jsx)(s.SettingRow,{label:this.props.intl.formatMessage({id:"customizeLayers",defaultMessage:o.customizeLayers})},!this.isCustomizeOptionValid()&&(0,e.jsx)(t.Alert,{text:"Map widgets connected with more than one Map Layers widget cannot be customized.",form:"tooltip",buttonType:"tertiary",type:"warning",placement:"right",size:"small",className:"warning-tooltip"})),(0,e.jsx)(s.SettingRow,{"aria-label":this.props.intl.formatMessage({id:"customizeLayers",defaultMessage:o.customizeLayers}),className:this.isCustomizeOptionEmpty()?"empty-customize-layer-list":"customize-layer-list"},this.shouldShowCustomizeWarning()&&(0,e.jsx)(t.Alert,{tabIndex:0,className:"warningMsg",open:!0,text:this.props.intl.formatMessage({id:"customizeLayerWarnings",defaultMessage:o.customizeLayerWarnings}),type:"warning"}),this.shouldShowLayerList()&&this.getCustomizeLayerList(!this.isCustomizeOptionValid())),""!==this.activeDataSourceKey&&(0,e.jsx)(h,{mapView:this.state.activeCustomizeView,title:this.state.currentCustomizeLayerTitle,isCustomizeEnabled:this.getActiveCustomizeStatus(),onToggle:this.onCloseCustomizePanel,onClose:this.onCloseCustomizePanel,trigger:this.customizeLayersTrigger.current,settingProps:this.props})),this.shouldShowCustomizeWarning=()=>!!this.isCustomizeOptionValid()&&(!this.state.useMapWidget||this.isDataSourceEmpty()),this.isDataSourceEmpty=()=>{var e,t,s;const i=(null===(e=n.MapViewManager.getInstance().getJimuMapViewGroup(this.props.useMapWidgetIds[0]))||void 0===e?void 0:e.jimuMapViews)||{};return 1===Object.keys(i).length&&null===(null===(s=null===(t=Object.values(i))||void 0===t?void 0:t[0])||void 0===s?void 0:s.dataSourceId)},this.state={mapViews:null,useMapWidget:this.props.config.useMapWidget||!1,viewIdsFromMapWidget:null,dataSourceLabels:null,showCustomizeLayerPanel:!1,isViewLoaded:!1,currentCustomizeLayerTitle:"",activeCustomizeView:null}}render(){var a,l;const p=this.getPortUrl();let c=null,d=null,u=null,h=null,m=null;return d=(0,e.jsx)("div",{className:"data-selector-section"},(0,e.jsx)(s.SettingRow,null,(0,e.jsx)(i.DataSourceSelector,{types:this.supportedDsTypes,useDataSources:this.props.useDataSources,useDataSourcesEnabled:!0,mustUseDataSource:!0,onChange:this.onDataSourceChange,widgetId:this.props.id})),p&&this.props.dsJsons&&this.props.useDataSources&&1===this.props.useDataSources.length&&(0,e.jsx)(s.SettingRow,null,(0,e.jsx)("div",{className:"w-100"},(0,e.jsx)("div",{className:"webmap-thumbnail",title:null===(a=this.props.dsJsons[this.props.useDataSources[0].dataSourceId])||void 0===a?void 0:a.label},(0,e.jsx)(r,{mapItemId:this.props.dsJsons[this.props.useDataSources[0].dataSourceId]?this.props.dsJsons[this.props.useDataSources[0].dataSourceId].itemId:null,portUrl:this.props.dsJsons[this.props.useDataSources[0].dataSourceId]?this.props.dsJsons[this.props.useDataSources[0].dataSourceId].portalUrl:null}))))),u=(0,e.jsx)("div",{className:"map-selector-section"},(0,e.jsx)(s.SettingRow,null,(0,e.jsx)(s.MapWidgetSelector,{onSelect:this.onMapWidgetSelected,useMapWidgetIds:this.props.useMapWidgetIds})),(0,e.jsx)(n.JimuMapViewComponent,{useMapWidgetId:null===(l=this.props.useMapWidgetIds)||void 0===l?void 0:l[0],onViewsCreate:this.onViewsCreate}),this.getCustomizeSettingContent()),this.state.useMapWidget?(c=u,h=(0,e.jsx)(e.React.Fragment,null,(0,e.jsx)(s.SettingRow,{label:(0,e.jsx)(e.FormattedMessage,{id:"goto",defaultMessage:o.goto})},(0,e.jsx)(t.Switch,{className:"can-x-switch",checked:this.props.config&&this.props.config.goto||!1,"data-key":"goto",onChange:e=>{this.onToolsChanged(e.target.checked,"goto")},"aria-label":this.props.intl.formatMessage({id:"goto",defaultMessage:o.goto})})),(0,e.jsx)(s.SettingRow,{label:(0,e.jsx)(e.FormattedMessage,{id:"showOrHideLabels",defaultMessage:o.showOrHideLabels})},(0,e.jsx)(t.Switch,{className:"can-x-switch",checked:this.props.config&&this.props.config.label||!1,"data-key":"goto",onChange:e=>{this.onToolsChanged(e.target.checked,"label")},"aria-label":this.props.intl.formatMessage({id:"showOrHideLabels",defaultMessage:o.showOrHideLabels})})),(0,e.jsx)(s.SettingRow,{label:(0,e.jsx)(e.FormattedMessage,{id:"transparency",defaultMessage:o.layerTransparency})},(0,e.jsx)(t.Switch,{className:"can-x-switch",checked:this.props.config&&this.props.config.opacity||!1,"data-key":"opacity",onChange:e=>{this.onToolsChanged(e.target.checked,"opacity")},"aria-label":this.props.intl.formatMessage({id:"transparency",defaultMessage:o.layerTransparency})}))),m=(0,e.jsx)(s.SettingRow,{label:(0,e.jsx)(e.FormattedMessage,{id:"setVisibility",defaultMessage:o.setVisibility})},(0,e.jsx)(t.Switch,{className:"can-x-switch",checked:this.props.config&&this.props.config.setVisibility||!1,"data-key":"setVisibility",onChange:e=>{this.onOptionsChanged(e.target.checked,"setVisibility")},"aria-label":this.props.intl.formatMessage({id:"setVisibility",defaultMessage:o.setVisibility})}))):c=d,(0,e.jsx)("div",{css:(g=this.props.theme,e.css`
    .widget-setting-layerlist{
      font-weight: lighter;
      font-size: 13px;

      .source-descript {
        color: ${g.colors.palette.dark[600]};
      }

      .webmap-thumbnail{
        cursor: auto;
        width: 100%;
        height: 120px;
        overflow: hidden;
        padding: 1px;
        border: ${e.polished.rem(2)} solid initial;
        img, div{
          width: 100%;
          height: 100%;
        }
      }

      .warning-tooltip{
        .jimu-icon-component {
          color: ${g.colors.palette.warning[600]}
        }
      }

      .customize-layer-list{
        margin-top: ${e.polished.rem(12)};
        .jimu-tree-item_disabled-false .jimu-tree-item__main-line {
          cursor: pointer;
        }
      }

      .empty-customize-layer-list{
        margin-top: 0;
      }

      .layerlist-tools{
        .layerlist-tools-item{
          display: flex;
          /* justify-content: space-between; */
          margin-bottom: 8px;
        }
      }

      .map-selector-section .component-map-selector .form-control{
        width: 100%;
      }

      .data-selector-section, .map-selector-section{
        padding-top: 10px;
      }

    }
  `)},(0,e.jsx)("div",{className:"widget-setting-layerlist"},(0,e.jsx)(s.SettingSection,{title:this.props.intl.formatMessage({id:"sourceLabel",defaultMessage:o.sourceLabel}),role:"group","aria-label":this.props.intl.formatMessage({id:"sourceLabel",defaultMessage:o.sourceLabel})},(0,e.jsx)(s.SettingRow,null,(0,e.jsx)("div",{className:"layerlist-tools w-100"},(0,e.jsx)("div",{className:"w-100"},(0,e.jsx)("div",{className:"layerlist-tools-item radio"},(0,e.jsx)(t.Radio,{id:"map-data",style:{cursor:"pointer"},name:"source-option",onChange:e=>this.onRadioChange(!1),checked:!this.state.useMapWidget}),(0,e.jsx)(t.Label,{style:{cursor:"pointer"},for:"map-data",className:"ml-1"},this.props.intl.formatMessage({id:"showLayerForMap",defaultMessage:o.showLayerForMap})))),(0,e.jsx)("div",{className:"w-100"},(0,e.jsx)("div",{className:"layerlist-tools-item radio"},(0,e.jsx)(t.Radio,{id:"map-view",style:{cursor:"pointer"},name:"source-option",onChange:e=>this.onRadioChange(!0),checked:this.state.useMapWidget}),(0,e.jsx)(t.Label,{style:{cursor:"pointer"},for:"map-view",className:"ml-1"},this.props.intl.formatMessage({id:"interactWithMap",defaultMessage:o.interactWithMap})))))),c),(0,e.jsx)(s.SettingSection,{title:this.props.intl.formatMessage({id:"options",defaultMessage:o.options}),role:"group","aria-label":this.props.intl.formatMessage({id:"options",defaultMessage:o.options})},h,(0,e.jsx)(s.SettingRow,{label:(0,e.jsx)(e.FormattedMessage,{id:"information",defaultMessage:o.information})},(0,e.jsx)(t.Switch,{className:"can-x-switch",checked:this.props.config&&this.props.config.information||!1,"data-key":"information",onChange:e=>{this.onToolsChanged(e.target.checked,"information")},"aria-label":this.props.intl.formatMessage({id:"information",defaultMessage:o.information})})),m)));var g}}m.mapExtraStateProps=e=>({dsJsons:e.appStateInBuilder.appConfig.dataSources})})(),d})())}}}));