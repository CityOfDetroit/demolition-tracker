System.register(["jimu-core","jimu-ui/advanced/setting-components","jimu-ui","jimu-ui/advanced/data-source-selector","jimu-ui/advanced/sql-expression-builder","jimu-ui/advanced/resource-selector","jimu-ui/basic/sql-expression-runtime","jimu-ui/basic/list-tree"],(function(e,t){var i={},s={},a={},g={},I={},o={},n={},r={};return{setters:[function(e){i.AllDataSourceTypes=e.AllDataSourceTypes,i.ClauseLogic=e.ClauseLogic,i.DataSourceComponent=e.DataSourceComponent,i.DataSourceManager=e.DataSourceManager,i.Immutable=e.Immutable,i.React=e.React,i.classNames=e.classNames,i.css=e.css,i.defaultMessages=e.defaultMessages,i.jsx=e.jsx,i.polished=e.polished,i.urlUtils=e.urlUtils},function(e){s.SettingRow=e.SettingRow,s.SettingSection=e.SettingSection,s.SidePopper=e.SidePopper},function(e){a.AdvancedButtonGroup=e.AdvancedButtonGroup,a.Alert=e.Alert,a.Button=e.Button,a.Checkbox=e.Checkbox,a.Icon=e.Icon,a.Label=e.Label,a.Switch=e.Switch,a.TextArea=e.TextArea,a.TextInput=e.TextInput,a.Tooltip=e.Tooltip,a.defaultMessages=e.defaultMessages},function(e){g.DataSourceSelector=e.DataSourceSelector},function(e){I.SqlExpressionBuilderPopup=e.SqlExpressionBuilderPopup},function(e){o.IconPicker=e.IconPicker},function(e){n.getJimuFieldNamesBySqlExpression=e.getJimuFieldNamesBySqlExpression},function(e){r.List=e.List,r.TreeItemActionType=e.TreeItemActionType}],execute:function(){e((()=>{var e={67294:(e,t,i)=>{var s={"./trigger_button.svg":39700,"./trigger_toggle.svg":78838};function a(e){var t=g(e);return i(t)}function g(e){if(!i.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}a.keys=function(){return Object.keys(s)},a.resolve=g,e.exports=a,a.id=67294},748:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.5c0 .527-.074 1.036-.212 1.518l.912.438a6.5 6.5 0 1 0-6.586 4.533l-.077-1.008A5.5 5.5 0 1 1 12 6.5Zm-9 0a3.501 3.501 0 0 0 2.88 3.445L5.8 8.901a2.501 2.501 0 1 1 3.194-2.224l.949.456A3.5 3.5 0 1 0 3 6.5ZM15.5 11l-5 1-3 4-1-9.5 9 4.5Zm-5.57.094-1.702 2.269-.542-5.152 4.76 2.38-2.517.503Z" fill="#000"></path></svg>'},55339:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m8.745 8 6.1 6.1a.527.527 0 1 1-.745.746L8 8.746l-6.1 6.1a.527.527 0 1 1-.746-.746l6.1-6.1-6.1-6.1a.527.527 0 0 1 .746-.746l6.1 6.1 6.1-6.1a.527.527 0 0 1 .746.746L8.746 8Z" fill="#000"></path></svg>'},95749:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15 1.53V0H1v1.53h.07l5.374 5.288v6.121l2.26 2.224a.5.5 0 0 0 .852-.356V6.825l5.382-5.295H15ZM2 1h12v.049L8.556 6.406l-.001 7.207-1.111-1.093V6.399L2 1.042V1Z" fill="#000"></path></svg>'},34750:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 0a.5.5 0 0 0-.5.5V7H.5a.5.5 0 0 0 0 1H7v6.5a.5.5 0 0 0 1 0V8h6.5a.5.5 0 0 0 0-1H8V.5a.5.5 0 0 0-.5-.5Z" fill="#000"></path></svg>'},88866:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM6.5 7.5A.5.5 0 0 1 7 7h1.5v4.5h1a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1h1V8H7a.5.5 0 0 1-.5-.5Z" fill="#000"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16Zm0-1A7 7 0 1 0 8 1a7 7 0 0 0 0 14Z" fill="#000"></path></svg>'},60789:e=>{e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjY4cHgiIGhlaWdodD0iNjhweCIgdmlld0JveD0iMCAwIDY4IDY4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KICAgIDx0aXRsZT50aHVtYm5haWxfc3R5bGVfaW5saW5lX3ZlcnRpY2FsPC90aXRsZT4NCiAgICA8ZyBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4NCiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTExOTYuMDAwMDAwLCAtMzM2LjAwMDAwMCkiIGZpbGwtcnVsZT0ibm9uemVybyI+DQogICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMTk2LjAwMDAwMCwgMzM2LjAwMDAwMCkiPg0KICAgICAgICAgICAgICAgIDxnPg0KICAgICAgICAgICAgICAgICAgICA8cmVjdCBmaWxsPSIjMjgyODI4IiB4PSI0IiB5PSI0IiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHJ4PSIxIj48L3JlY3Q+DQogICAgICAgICAgICAgICAgICAgIDxyZWN0IGZpbGw9IiMzNjM2MzYiIHg9IjgiIHk9IjUyIiB3aWR0aD0iNTIiIGhlaWdodD0iOCIgcng9IjEiPjwvcmVjdD4NCiAgICAgICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOC4wMDAwMDAsIDguMDAwMDAwKSI+DQogICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCBmaWxsPSIjMzYzNjM2IiB4PSIwIiB5PSIwIiB3aWR0aD0iNTIiIGhlaWdodD0iMTkiIHJ4PSIxIj48L3JlY3Q+DQogICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCBmaWxsPSIjNTI1MjUyIiB4PSIzIiB5PSI4IiB3aWR0aD0iNDYiIGhlaWdodD0iMiI+PC9yZWN0Pg0KICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgZmlsbD0iIzUyNTI1MiIgeD0iMyIgeT0iMTMiIHdpZHRoPSIzNSIgaGVpZ2h0PSIyIj48L3JlY3Q+DQogICAgICAgICAgICAgICAgICAgICAgICA8cG9seWdvbiBmaWxsPSIjNkE2QTZBIiBwb2ludHM9IjIgMyA2IDMgNCA1Ij48L3BvbHlnb24+DQogICAgICAgICAgICAgICAgICAgIDwvZz4NCiAgICAgICAgICAgICAgICAgICAgPHJlY3QgZmlsbD0iIzM2MzYzNiIgeD0iOCIgeT0iNDEiIHdpZHRoPSI1MiIgaGVpZ2h0PSI4IiByeD0iMSI+PC9yZWN0Pg0KICAgICAgICAgICAgICAgICAgICA8cmVjdCBmaWxsPSIjMzYzNjM2IiB4PSI4IiB5PSIzMCIgd2lkdGg9IjUyIiBoZWlnaHQ9IjgiIHJ4PSIxIj48L3JlY3Q+DQogICAgICAgICAgICAgICAgICAgIDxwb2x5Z29uIGZpbGw9IiM2QTZBNkEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEyLjAwMDAwMCwgNDUuMDAwMDAwKSByb3RhdGUoLTkwLjAwMDAwMCkgdHJhbnNsYXRlKC0xMi4wMDAwMDAsIC00NS4wMDAwMDApICIgcG9pbnRzPSIxMCA0NCAxNCA0NCAxMiA0NiI+PC9wb2x5Z29uPg0KICAgICAgICAgICAgICAgIDwvZz4NCiAgICAgICAgICAgIDwvZz4NCiAgICAgICAgPC9nPg0KICAgIDwvZz4NCjwvc3ZnPg=="},2297:e=>{e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjcwcHgiIGhlaWdodD0iNzBweCIgdmlld0JveD0iMCAwIDcwIDcwIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KICAgIDx0aXRsZT50aHVtYm5haWxfc3R5bGVfaW5saW5lX2hvcml6b250YWw8L3RpdGxlPg0KICAgIDxnIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPg0KICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTI3NS4wMDAwMDAsIC0zMzUuMDAwMDAwKSIgZmlsbC1ydWxlPSJub256ZXJvIj4NCiAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEyNzUuMDAwMDAwLCAzMzUuMDAwMDAwKSI+DQogICAgICAgICAgICAgICAgPGc+DQogICAgICAgICAgICAgICAgICAgIDxyZWN0IGZpbGw9IiMyODI4MjgiIHg9IjUiIHk9IjUiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcng9IjEiPjwvcmVjdD4NCiAgICAgICAgICAgICAgICAgICAgPHJlY3QgZmlsbD0iIzZBNkE2QSIgeD0iOSIgeT0iOSIgd2lkdGg9IjE1IiBoZWlnaHQ9IjgiIHJ4PSIyIj48L3JlY3Q+DQogICAgICAgICAgICAgICAgICAgIDxyZWN0IGZpbGw9IiM1MjUyNTIiIHg9IjI2IiB5PSI5IiB3aWR0aD0iMTkiIGhlaWdodD0iOCIgcng9IjIiPjwvcmVjdD4NCiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTE3LDE5IEwxOSwyMS4xMjc2NTk2IEw1MiwyMS4xMjc2NTk2IEM1Mi41NTIyODQ3LDIxLjEyNzY1OTYgNTMsMjEuNTc1Mzc0OCA1MywyMi4xMjc2NTk2IEw1Myw0Mi4xMjc2NTk2IEM1Myw0Mi42Nzk5NDQzIDUyLjU1MjI4NDcsNDMuMTI3NjU5NiA1Miw0My4xMjc2NTk2IEwxMCw0My4xMjc2NTk2IEM5LjQ0NzcxNTI1LDQzLjEyNzY1OTYgOSw0Mi42Nzk5NDQzIDksNDIuMTI3NjU5NiBMOSwyMi4xMjc2NTk2IEM5LDIxLjU3NTM3NDggOS40NDc3MTUyNSwyMS4xMjc2NTk2IDEwLDIxLjEyNzY1OTYgTDE1LDIxLjEyNzY1OTYgTDE3LDE5IFoiIGZpbGw9IiMzNjM2MzYiPjwvcGF0aD4NCiAgICAgICAgICAgICAgICAgICAgPHJlY3QgZmlsbD0iIzUyNTI1MiIgeD0iMTMiIHk9IjI1IiB3aWR0aD0iMzYiIGhlaWdodD0iMiI+PC9yZWN0Pg0KICAgICAgICAgICAgICAgICAgICA8cmVjdCBmaWxsPSIjNTI1MjUyIiB4PSIxMyIgeT0iMzEiIHdpZHRoPSIzNiIgaGVpZ2h0PSIyIj48L3JlY3Q+DQogICAgICAgICAgICAgICAgICAgIDxyZWN0IGZpbGw9IiM1MjUyNTIiIHg9IjEzIiB5PSIzNyIgd2lkdGg9IjI3IiBoZWlnaHQ9IjIiPjwvcmVjdD4NCiAgICAgICAgICAgICAgICAgICAgPHJlY3QgZmlsbD0iIzZBNkE2QSIgeD0iNDciIHk9IjkiIHdpZHRoPSIxNCIgaGVpZ2h0PSI4IiByeD0iMiI+PC9yZWN0Pg0KICAgICAgICAgICAgICAgIDwvZz4NCiAgICAgICAgICAgIDwvZz4NCiAgICAgICAgPC9nPg0KICAgIDwvZz4NCjwvc3ZnPg=="},35516:e=>{e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjY4cHgiIGhlaWdodD0iNjhweCIgdmlld0JveD0iMCAwIDY4IDY4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KICAgIDx0aXRsZT50aHVtYm5haWxfc3R5bGVfcG9wdXA8L3RpdGxlPg0KICAgIDxnIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPg0KICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTM1Ni4wMDAwMDAsIC0zMzYuMDAwMDAwKSIgZmlsbC1ydWxlPSJub256ZXJvIj4NCiAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEzNTYuMDAwMDAwLCAzMzYuMDAwMDAwKSI+DQogICAgICAgICAgICAgICAgPGc+DQogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMCwxNCBMMTIsMTYgTDYzLDE2IEM2My41NTIyODQ3LDE2IDY0LDE2LjQ0NzcxNTMgNjQsMTcgTDY0LDYzIEM2NCw2My41NTIyODQ3IDYzLjU1MjI4NDcsNjQgNjMsNjQgTDUsNjQgQzQuNDQ3NzE1MjUsNjQgNCw2My41NTIyODQ3IDQsNjMgTDQsMTcgQzQsMTYuNDQ3NzE1MyA0LjQ0NzcxNTI1LDE2IDUsMTYgTDgsMTYgTDEwLDE0IFoiIGZpbGw9IiMyODI4MjgiPjwvcGF0aD4NCiAgICAgICAgICAgICAgICAgICAgPHJlY3QgZmlsbD0iIzM2MzYzNiIgeD0iOCIgeT0iMjAiIHdpZHRoPSI1MiIgaGVpZ2h0PSIxOSIgcng9IjEiPjwvcmVjdD4NCiAgICAgICAgICAgICAgICAgICAgPHBvbHlnb24gZmlsbD0iIzZBNkE2QSIgcG9pbnRzPSIxMCAyMyAxNCAyMyAxMiAyNSI+PC9wb2x5Z29uPg0KICAgICAgICAgICAgICAgICAgICA8cmVjdCBmaWxsPSIjMzYzNjM2IiB4PSI4IiB5PSI0MiIgd2lkdGg9IjUyIiBoZWlnaHQ9IjgiIHJ4PSIxIj48L3JlY3Q+DQogICAgICAgICAgICAgICAgICAgIDxyZWN0IGZpbGw9IiMzNjM2MzYiIHg9IjgiIHk9IjUzIiB3aWR0aD0iNTIiIGhlaWdodD0iNyIgcng9IjEiPjwvcmVjdD4NCiAgICAgICAgICAgICAgICAgICAgPHBvbHlnb24gZmlsbD0iIzZBNkE2QSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTIuMDAwMDAwLCA1Ni4wMDAwMDApIHJvdGF0ZSgtOTAuMDAwMDAwKSB0cmFuc2xhdGUoLTEyLjAwMDAwMCwgLTU2LjAwMDAwMCkgIiBwb2ludHM9IjEwIDU1IDE0IDU1IDEyIDU3Ij48L3BvbHlnb24+DQogICAgICAgICAgICAgICAgICAgIDxyZWN0IGZpbGw9IiM1MjUyNTIiIHg9IjExIiB5PSIyOSIgd2lkdGg9IjQ2IiBoZWlnaHQ9IjIiPjwvcmVjdD4NCiAgICAgICAgICAgICAgICAgICAgPHJlY3QgZmlsbD0iIzUyNTI1MiIgeD0iMTEiIHk9IjM0IiB3aWR0aD0iMzUiIGhlaWdodD0iMiI+PC9yZWN0Pg0KICAgICAgICAgICAgICAgICAgICA8cmVjdCBmaWxsPSIjNkE2QTZBIiB4PSI2IiB5PSI0IiB3aWR0aD0iOCIgaGVpZ2h0PSI4IiByeD0iMiI+PC9yZWN0Pg0KICAgICAgICAgICAgICAgIDwvZz4NCiAgICAgICAgICAgIDwvZz4NCiAgICAgICAgPC9nPg0KICAgIDwvZz4NCjwvc3ZnPg=="},39700:e=>{e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjY4cHgiIGhlaWdodD0iNDhweCIgdmlld0JveD0iMCAwIDY4IDQ4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KICAgIDx0aXRsZT50aHVtYm5haWxfbWV0aG9kc19idXR0b248L3RpdGxlPg0KICAgIDxnIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPg0KICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTI3Ni4wMDAwMDAsIC00ODQuMDAwMDAwKSIgZmlsbD0iIzZBNkE2QSIgZmlsbC1ydWxlPSJub256ZXJvIj4NCiAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDExODAuMDAwMDAwLCAzNi4wMDAwMDApIj4NCiAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg5Ni4wMDAwMDAsIDQ0OC4wMDAwMDApIj4NCiAgICAgICAgICAgICAgICAgICAgPGc+DQogICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCB4PSI0IiB5PSI1IiB3aWR0aD0iNjAiIGhlaWdodD0iNCI+PC9yZWN0Pg0KICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgeD0iNCIgeT0iMTMiIHdpZHRoPSI2MCIgaGVpZ2h0PSI0Ij48L3JlY3Q+DQogICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCB4PSI0IiB5PSIyMSIgd2lkdGg9IjYwIiBoZWlnaHQ9IjQiPjwvcmVjdD4NCiAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IHg9IjQiIHk9IjI5IiB3aWR0aD0iMzIiIGhlaWdodD0iNCI+PC9yZWN0Pg0KICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgeD0iNDQiIHk9IjM2IiB3aWR0aD0iMjAiIGhlaWdodD0iOCIgcng9IjQiPjwvcmVjdD4NCiAgICAgICAgICAgICAgICAgICAgPC9nPg0KICAgICAgICAgICAgICAgIDwvZz4NCiAgICAgICAgICAgIDwvZz4NCiAgICAgICAgPC9nPg0KICAgIDwvZz4NCjwvc3ZnPg=="},78838:e=>{e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjcwcHgiIGhlaWdodD0iNTBweCIgdmlld0JveD0iMCAwIDcwIDUwIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KICAgIDx0aXRsZT50aHVtYm5haWxfbWV0aG9kc190b2dnbGU8L3RpdGxlPg0KICAgIDxnIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPg0KICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTE5NS4wMDAwMDAsIC00ODMuMDAwMDAwKSI+DQogICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMTgwLjAwMDAwMCwgMzYuMDAwMDAwKSI+DQogICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTUuMDAwMDAwLCA0NDcuMDAwMDAwKSI+DQogICAgICAgICAgICAgICAgICAgIDxnPg0KICAgICAgICAgICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTMuMDAwMDAwLCA1LjAwMDAwMCkiPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IGZpbGw9IiM2QTZBNkEiIHg9IjAiIHk9IjAiIHdpZHRoPSIxMiIgaGVpZ2h0PSI2IiByeD0iMyI+PC9yZWN0Pg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IGZpbGw9IiMxODE4MTgiIHg9IjciIHk9IjEiIHdpZHRoPSI0IiBoZWlnaHQ9IjQiIHJ4PSIyIj48L3JlY3Q+DQogICAgICAgICAgICAgICAgICAgICAgICA8L2c+DQogICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCBmaWxsPSIjNkE2QTZBIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHg9IjUiIHk9IjYiIHdpZHRoPSI0MiIgaGVpZ2h0PSI0Ij48L3JlY3Q+DQogICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCBmaWxsPSIjNkE2QTZBIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHg9IjUiIHk9IjE0IiB3aWR0aD0iNDIiIGhlaWdodD0iNCI+PC9yZWN0Pg0KICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgZmlsbD0iIzZBNkE2QSIgZmlsbC1ydWxlPSJub256ZXJvIiB4PSI1IiB5PSIyMiIgd2lkdGg9IjQyIiBoZWlnaHQ9IjQiPjwvcmVjdD4NCiAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IGZpbGw9IiM2QTZBNkEiIGZpbGwtcnVsZT0ibm9uemVybyIgeD0iNSIgeT0iMzAiIHdpZHRoPSI0MiIgaGVpZ2h0PSI0Ij48L3JlY3Q+DQogICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCBmaWxsPSIjNkE2QTZBIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHg9IjUiIHk9IjM4IiB3aWR0aD0iMzEiIGhlaWdodD0iNCI+PC9yZWN0Pg0KICAgICAgICAgICAgICAgICAgICA8L2c+DQogICAgICAgICAgICAgICAgPC9nPg0KICAgICAgICAgICAgPC9nPg0KICAgICAgICA8L2c+DQogICAgPC9nPg0KPC9zdmc+"},48891:e=>{"use strict";e.exports=i},30726:e=>{"use strict";e.exports=a},338:e=>{"use strict";e.exports=g},20663:e=>{"use strict";e.exports=o},77756:e=>{"use strict";e.exports=s},43484:e=>{"use strict";e.exports=I},59587:e=>{"use strict";e.exports=r},15506:e=>{"use strict";e.exports=n}},t={};function l(i){var s=t[i];if(void 0!==s)return s.exports;var a=t[i]={exports:{}};return e[i](a,a.exports,l),a.exports}l.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return l.d(t,{a:t}),t},l.d=(e,t)=>{for(var i in t)l.o(t,i)&&!l.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),l.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.p="";var c={};return l.p=window.jimuConfig.baseUrl,(()=>{"use strict";l.r(c),l.d(c,{default:()=>v});var e=l(48891),t=l(77756),i=l(30726),s=l(338),a=l(43484);const g={selectTemplateTip:"Select a template",selectAnotherTemplateTip:"Select another template",filtersDesc:"Add new filters and customize options.",newFilter:"New filter",setFilterItem:"Create new filter",sqlExpr:"SQL Expressions",sqlExprDesc:"Add SQL expressions to your filter.",setExprTips:"Please add your SQL expressions first.",options:"Options",autoApplyWhenWidgetOpen:"Apply this filter automatically",collapseFilterExprs:"Collapse filter details (if any) automatically",arrangeAndStyle:"Arrangement style",activationMethods:"Activation style",toggleTooltip:"Toggle switch",buttonTooltip:"Button",omitInternalStyle:"Exclude activation styles for single clause",omitInternalStyleTip:"If there is only one clause in each filter, and it is asking for values (or displaying label), this option allows you to exclude the activation styles (along with the label and the icon), display the clause content directly, and auto-apply it.",wrapFilters:"Wrap items",advancedTools:"Advanced tools",blankStatusMsg:'Click the "{newFilter}" button to add and configure filters.'};var I,o,n=l(20663);class r extends e.React.PureComponent{constructor(t){super(t),this.dsManager=(window&&window.jimuConfig&&window.jimuConfig.isBuilder,e.DataSourceManager.getInstance()),this.supportedDsTypes=(0,e.Immutable)([e.AllDataSourceTypes.FeatureLayer,e.AllDataSourceTypes.SceneLayer]),this.showSqlExprPopup=()=>{this.setState({isSqlExprShow:!0})},this.toggleSqlExprPopup=()=>{this.setState({isSqlExprShow:!this.state.isSqlExprShow})},this.nameChange=e=>{const t=e.target.value;this.setState({itemLabel:t})},this.nameAccept=e=>{(e=""===(e=null==e?void 0:e.trim())?this.props.name:e)!==this.state.itemLabel&&this.setState({itemLabel:e}),this.props.optionChange("name",e)},this.autoApplyChange=()=>{this.props.optionChange("autoApplyWhenWidgetOpen",!this.props.autoApplyWhenWidgetOpen)},this.collapseChange=()=>{this.props.optionChange("collapseFilterExprs",!this.props.collapseFilterExprs)},this.i18nMessage=(e,t)=>(t=t||g,this.props.intl.formatMessage({id:e,defaultMessage:t[e]})),this.state={isSqlExprShow:!1,itemLabel:this.props.name||""}}componentDidUpdate(e,t){this.props.name!==e.name&&this.setState({itemLabel:this.props.name||""})}render(){const{useDataSource:g,dataSource:I,sqlExprObj:o}=this.props,r=!I;return(0,e.jsx)("div",{className:"w-100 h-100",css:(l=this.props.theme,e.css`
    .filter-item-panel{
      .setting-header {
        padding: ${e.polished.rem(10)} ${e.polished.rem(16)} ${e.polished.rem(0)} ${e.polished.rem(16)}
      }

      .setting-title {
        font-size: ${e.polished.rem(16)};
        .filter-item-label{
          color: ${l.colors.palette.dark[600]};
        }
      }

      .setting-container {
        height: calc(100% - ${e.polished.rem(50)});
        overflow: auto;

        .title-desc{
          color: ${l.colors.palette.dark[200]};
        }


      }
    }
  `)},(0,e.jsx)("div",{className:"w-100 h-100 filter-item-panel"},(0,e.jsx)("div",{className:"setting-container"},(0,e.jsx)(t.SettingSection,{title:this.i18nMessage("data"),className:"pt-0"},(0,e.jsx)(t.SettingRow,null,(0,e.jsx)(s.DataSourceSelector,{types:this.supportedDsTypes,disableRemove:()=>!0,useDataSources:g&&I?(0,e.Immutable)([g]):(0,e.Immutable)([]),mustUseDataSource:!0,onChange:this.props.dataSourceChange,closeDataSourceListOnChange:!0}))),(0,e.jsx)(t.SettingSection,{title:this.i18nMessage("label",i.defaultMessages)},(0,e.jsx)(t.SettingRow,null,(0,e.jsx)(i.TextInput,{size:"sm",type:"text",className:"w-100",value:this.state.itemLabel,onChange:this.nameChange,onAcceptValue:this.nameAccept,"aria-label":this.i18nMessage("label",i.defaultMessages)}))),(0,e.jsx)(t.SettingSection,null,(0,e.jsx)(t.SettingRow,{role:"group",label:this.props.intl.formatMessage({id:"icon",defaultMessage:e.defaultMessages.icon}),"aria-label":this.props.intl.formatMessage({id:"icon",defaultMessage:e.defaultMessages.icon})},(0,e.jsx)(n.IconPicker,{icon:this.props.icon?this.props.icon:null,onChange:e=>this.props.optionChange("icon",e),configurableOption:"none",setButtonUseColor:!1}))),(0,e.jsx)(t.SettingSection,{title:this.i18nMessage("sqlExpr"),role:"group","aria-label":this.i18nMessage("sqlExpr")},(0,e.jsx)(t.SettingRow,{label:this.i18nMessage("sqlExprDesc"),flow:"wrap"}),(0,e.jsx)("div",{id:"sql-expr-desc",className:"sr-only"},this.i18nMessage("sqlExprDesc")),(0,e.jsx)(t.SettingRow,null,(0,e.jsx)("div",{className:"d-flex justify-content-between w-100 align-items-center"},(0,e.jsx)(i.Button,{className:"w-100 text-dark set-link-btn",type:r?"secondary":"primary",disabled:r,onClick:this.showSqlExprPopup,title:this.i18nMessage("builderName",i.defaultMessages),"aria-describedby":"sql-expr-desc"},(0,e.jsx)("div",{className:"w-100 px-2 text-truncate"},this.i18nMessage("builderName",i.defaultMessages))))),(0,e.jsx)(t.SettingRow,null,(0,e.jsx)(i.TextArea,{height:80,className:"w-100",spellCheck:!1,placeholder:this.i18nMessage("setExprTips"),value:o&&o.displaySQL?o.displaySQL:"",onClick:e=>e.currentTarget.select(),readOnly:!0}))),(0,e.jsx)(t.SettingSection,{role:"grpup",className:"border-0",title:this.i18nMessage("options"),"aria-label":this.i18nMessage("options")},(0,e.jsx)(t.SettingRow,{label:this.i18nMessage("autoApplyWhenWidgetOpen")},(0,e.jsx)(i.Switch,{checked:!!this.props.autoApplyWhenWidgetOpen,onChange:this.autoApplyChange,"aria-label":this.i18nMessage("autoApplyWhenWidgetOpen")})),(0,e.jsx)(t.SettingRow,{label:this.i18nMessage("collapseFilterExprs")},(0,e.jsx)(i.Switch,{checked:!!this.props.collapseFilterExprs,onChange:this.collapseChange,"aria-label":this.i18nMessage("collapseFilterExprs")}))),!r&&(0,e.jsx)(a.SqlExpressionBuilderPopup,{dataSource:I,isOpen:this.state.isSqlExprShow,toggle:this.toggleSqlExprPopup,expression:o,onChange:this.props.onSqlExprBuilderChange}))));var l}}!function(e){e.Block="BLOCK",e.Inline="INLINE",e.Popper="POPPER"}(I||(I={})),function(e){e.Toggle="TOGGLE",e.Button="BUTTON"}(o||(o={}));var d=l(15506);class p extends e.React.PureComponent{constructor(){super(...arguments),this.onDataSourceCreated=e=>{this.props.onCreateDataSourceCreatedOrFailed(this.props.useDataSource.dataSourceId,e)},this.onCreateDataSourceFailed=()=>{this.props.onCreateDataSourceCreatedOrFailed(this.props.useDataSource.dataSourceId,null)}}componentWillUnmount(){}render(){return(0,e.jsx)(e.DataSourceComponent,{useDataSource:this.props.useDataSource,onDataSourceCreated:this.onDataSourceCreated,onCreateDataSourceFailed:this.onCreateDataSourceFailed})}}var C=l(59587),A=l(748),m=l.n(A);const u=t=>{const i=window.SVG,{className:s}=t,a=function(e,t){var i={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(i[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(s=Object.getOwnPropertySymbols(e);a<s.length;a++)t.indexOf(s[a])<0&&Object.prototype.propertyIsEnumerable.call(e,s[a])&&(i[s[a]]=e[s[a]])}return i}(t,["className"]),g=(0,e.classNames)("jimu-icon jimu-icon-component",s);return i?e.React.createElement(i,Object.assign({className:g,src:m()},a)):e.React.createElement("svg",Object.assign({className:g},a))};var h=l(55339),S=l.n(h);const D=t=>{const i=window.SVG,{className:s}=t,a=function(e,t){var i={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(i[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(s=Object.getOwnPropertySymbols(e);a<s.length;a++)t.indexOf(s[a])<0&&Object.prototype.propertyIsEnumerable.call(e,s[a])&&(i[s[a]]=e[s[a]])}return i}(t,["className"]),g=(0,e.classNames)("jimu-icon jimu-icon-component",s);return i?e.React.createElement(i,Object.assign({className:g,src:S()},a)):e.React.createElement("svg",Object.assign({className:g},a))};var x=l(34750),M=l.n(x);const y=t=>{const i=window.SVG,{className:s}=t,a=function(e,t){var i={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(i[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(s=Object.getOwnPropertySymbols(e);a<s.length;a++)t.indexOf(s[a])<0&&Object.prototype.propertyIsEnumerable.call(e,s[a])&&(i[s[a]]=e[s[a]])}return i}(t,["className"]),g=(0,e.classNames)("jimu-icon jimu-icon-component",s);return i?e.React.createElement(i,Object.assign({className:g,src:M()},a)):e.React.createElement("svg",Object.assign({className:g},a))};var w=l(88866),j=l.n(w);const b=t=>{const i=window.SVG,{className:s}=t,a=function(e,t){var i={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(i[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(s=Object.getOwnPropertySymbols(e);a<s.length;a++)t.indexOf(s[a])<0&&Object.prototype.propertyIsEnumerable.call(e,s[a])&&(i[s[a]]=e[s[a]])}return i}(t,["className"]),g=(0,e.classNames)("jimu-icon jimu-icon-component",s);return i?e.React.createElement(i,Object.assign({className:g,src:j()},a)):e.React.createElement("svg",Object.assign({className:g},a))},N=l(95749),f=(0,e.Immutable)({svg:N,properties:{color:"",filename:"filter.svg",originalName:"filter.svg",inlineSvg:!0,path:["general","filter"],size:14}});class v extends e.React.PureComponent{constructor(t){super(t),this.sidePopperTrigger=e.React.createRef(),this.i18nMessage=(e,t,i)=>(t=t||g,this.props.intl.formatMessage({id:e,defaultMessage:t[e]},i)),this.onShowFilterItemPanel=(e,t=!1)=>{this.settSidePopperAnchor(e,t),e===this.index?this.setState({showFilterItemPanel:!this.state.showFilterItemPanel}):(this.setState({showFilterItemPanel:!0,refreshFilterItemPanel:!this.state.refreshFilterItemPanel}),this.index=e)},this.settSidePopperAnchor=(e,t=!1)=>{let i;i=t?this.sidePopperTrigger.current.getElementsByClassName("add-filter-btn")[0]:this.sidePopperTrigger.current.getElementsByClassName("jimu-tree-item__body")[e],this.setState({popperFocusNode:i})},this.onCloseFilterItemPanel=()=>{this.setState({showFilterItemPanel:!1}),this.index=0},this.updateConfigForOptions=(e,t)=>{const i={id:this.props.id,config:this.props.config.set(e,t)};this.props.onSettingChange(i)},this.removeFilterItem=e=>{this.index===e&&this.onCloseFilterItemPanel();const t=this.props.config.filterItems[e].useDataSource.dataSourceId,i=this.props.config.filterItems.asMutable({deep:!0});i.splice(e,1);const s=this.props.config.set("filterItems",i),a={id:this.props.id,config:s},g=this.getUseDataSourcesByRemoved(i,t);g&&(a.useDataSources=g),this.props.onSettingChange(a),this.index>e&&this.index--},this.optionChangeForFI=(t,i)=>{if(this.props.config.filterItems[this.index]){const s=this.props.config.filterItems.asMutable({deep:!0}),a=(0,e.Immutable)(s[this.index]).set(t,i);s.splice(this.index,1,a.asMutable({deep:!0}));const g={id:this.props.id,config:this.props.config.set("filterItems",s)};this.props.onSettingChange(g)}},this.optionChangeByDrag=e=>{const t={id:this.props.id,config:this.props.config.set("filterItems",e)};this.props.onSettingChange(t)},this.dataSourceChangeForFI=t=>{if(!t)return;const i=(0,e.Immutable)(t[0]);this.dsManager.createDataSourceByUseDataSource((0,e.Immutable)(t[0])).then((s=>{const a={icon:f,name:s.getLabel(),useDataSource:i,sqlExprObj:null,autoApplyWhenWidgetOpen:!1,collapseFilterExprs:!1},g=this.props.config.filterItems[this.index];let I;if(g){const t=this.props.config.filterItems.asMutable({deep:!0});t.splice(this.index,1,a),I=(0,e.Immutable)(t)}else I=this.props.config.filterItems.concat((0,e.Immutable)([(0,e.Immutable)(a)]));const o={id:this.props.id,config:this.props.config.set("filterItems",I)},n=this.getUseDataSourcesByDsAdded(t[0],null==g?void 0:g.useDataSource.dataSourceId);n&&(o.useDataSources=n),this.props.onSettingChange(o)}))},this.sqlExprBuilderChange=t=>{var i;let s=[];(null===(i=null==t?void 0:t.parts)||void 0===i?void 0:i.length)>0?s=(0,d.getJimuFieldNamesBySqlExpression)(t):t=null;const a=this.props.config.filterItems[this.index].useDataSource,g={dataSourceId:a.dataSourceId,mainDataSourceId:a.mainDataSourceId,dataViewId:a.dataViewId,rootDataSourceId:a.rootDataSourceId,fields:s},I=this.props.config.filterItems.asMutable({deep:!0}),o=Object.assign({},I[this.index],{sqlExprObj:t,useDataSource:g});I.splice(this.index,1,o);const n={id:this.props.id,config:this.props.config.set("filterItems",(0,e.Immutable)(I))},r=this.getUseDataSourcesByFieldsChanged(I,g.dataSourceId);r&&(n.useDataSources=r),this.props.onSettingChange(n)},this.getAllUsedFieldsByDataSourceId=(e,t)=>{let i=[];return e.forEach((e=>{e.useDataSource.dataSourceId===t&&e.useDataSource.fields&&(i=i.concat(e.useDataSource.fields))})),i=Array.from(new Set(i)).sort(),i},this.getUpdatedUseDsArray=(e,t)=>{const i=[];return this.props.useDataSources.forEach((s=>{s.dataSourceId===t?i.push(s.set("fields",e)):i.push(s)})),i},this.getUseDataSourcesByRemoved=(e,t)=>e.filter((e=>t===e.useDataSource.dataSourceId)).length>0?this.getUseDataSourcesByFieldsChanged(e,t):this.props.useDataSources.asMutable({deep:!0}).filter((e=>e.dataSourceId!==t)),this.getUseDataSourcesByFieldsChanged=(e,t)=>{var i,s;const a=this.getAllUsedFieldsByDataSourceId(e,t),g=(null===(s=null===(i=this.props.useDataSources.filter((e=>t===e.dataSourceId))[0])||void 0===i?void 0:i.fields)||void 0===s?void 0:s.asMutable({deep:!0}))||[];return JSON.stringify(a)!==JSON.stringify(g)?this.getUpdatedUseDsArray(a,t):null},this.getUseDataSourcesByDsAdded=(e,t)=>{var i;let s=(null===(i=this.props.useDataSources)||void 0===i?void 0:i.asMutable({deep:!0}))||[];return t&&1===this.props.config.filterItems.filter((e=>e.useDataSource.dataSourceId===t)).length&&(s=s.filter((e=>e.dataSourceId!==t))),s.filter((t=>e.dataSourceId===t.dataSourceId)).length>0?s=t?s:null:s.push(e),s},this.getUniqueValues=(e=[],t=[])=>e.concat(t).filter((function(e,t,i){return i.indexOf(e)===t})),this.getDataSourceById=(t,i)=>{const s=t.filter((e=>e.dataSourceId===i));return(0,e.Immutable)(s[0])},this.changeAndOR=e=>{this.updateConfigForOptions("logicalOperator",e)},this.changeUseWrap=e=>{this.updateConfigForOptions("wrap",e)},this.changeArrangeType=e=>{e!==this.props.config.arrangeType&&this.updateConfigForOptions("arrangeType",e)},this.changeTriggerType=e=>{this.updateConfigForOptions("triggerType",e)},this.changeOmitInternalStyle=e=>{this.updateConfigForOptions("omitInternalStyle",e)},this.onCreateDataSourceCreatedOrFailed=(e,t)=>{this.setState((i=>{const s=Object.assign({},i.dataSources);return s[e]=t,{dataSources:s}}))},this.isDataSourceCreated=e=>null!==this.state.dataSources[e]&&this.props.useDataSources.filter((t=>e===t.dataSourceId)).length>0,this.CreateFilterItemElement=(t,s)=>{var a;return(0,e.jsx)("div",{key:s,className:"filter-item align-items-center"},t.icon&&(0,e.jsx)("div",{className:"filter-item-icon"},(0,e.jsx)(i.Icon,{icon:t.icon.svg,size:14})),(0,e.jsx)("div",{className:"filter-item-name flex-grow-1"},t.name),!this.isDataSourceCreated(null===(a=this.props.config.filterItems[s])||void 0===a?void 0:a.useDataSource.dataSourceId)&&(0,e.jsx)(i.Alert,{buttonType:"tertiary",form:"tooltip",size:"small",type:"error",text:this.i18nMessage("dataSourceCreateError",e.defaultMessages)}),(0,e.jsx)(i.Button,{size:"sm",type:"tertiary",icon:!0,className:"p-0",title:this.i18nMessage("delete",e.defaultMessages),"aria-label":this.i18nMessage("delete",e.defaultMessages),onClick:e=>{e.stopPropagation(),this.removeFilterItem(s)}},(0,e.jsx)(D,null)))},this.createFilterItems=t=>(0,e.jsx)("div",{className:"filter-items-container "+(this.props.config.filterItems.length>1?"mt-2":"mt-3")},(0,e.jsx)(C.List,{className:"setting-ui-unit-list",itemsJson:this.props.config.filterItems.asMutable().map(((e,t)=>({itemStateDetailContent:e,itemKey:`${t}`,itemStateChecked:this.state.showFilterItemPanel&&this.index===t}))),dndEnabled:!0,onDidDrop:(e,t)=>{const{itemJsons:[,i]}=t.props;this.optionChangeByDrag(i.map((e=>e.itemStateDetailContent)))},onClickItemBody:(e,t)=>{const{itemJsons:i}=t.props,s=i[0],a=i[1];this.onShowFilterItemPanel(a.indexOf(s))},overrideItemBlockInfo:({itemBlockInfo:e})=>({name:C.TreeItemActionType.RenderOverrideItem,children:[{name:C.TreeItemActionType.RenderOverrideItemDroppableContainer,children:[{name:C.TreeItemActionType.RenderOverrideItemDraggableContainer,children:[{name:C.TreeItemActionType.RenderOverrideItemBody,children:[{name:C.TreeItemActionType.RenderOverrideItemDragHandle},{name:C.TreeItemActionType.RenderOverrideItemMainLine}]}]}]}]}),renderOverrideItemMainLine:(e,t)=>{const{itemJsons:i}=t.props,s=i[0],a=i[1];return this.CreateFilterItemElement(s.itemStateDetailContent,a.indexOf(s))}}),t&&(0,e.jsx)(C.List,{className:"mt-1",itemsJson:[{itemKey:this.index+"",itemStateChecked:!0,itemStateIcon:()=>({icon:N,size:14}),itemStateTitle:"......",itemStateCommands:[]}],dndEnabled:!1,isItemFocused:()=>!0,overrideItemBlockInfo:e=>({name:C.TreeItemActionType.RenderOverrideItem,children:[{name:C.TreeItemActionType.RenderOverrideItemDroppableContainer,children:[{name:C.TreeItemActionType.RenderOverrideItemDraggableContainer,children:[{name:C.TreeItemActionType.RenderOverrideItemBody,children:[{name:C.TreeItemActionType.RenderOverrideItemMainLine,children:[{name:C.TreeItemActionType.RenderOverrideItemDragHandle},{name:C.TreeItemActionType.RenderOverrideItemIcon},{name:C.TreeItemActionType.RenderOverrideItemTitle}]}]}]}]}]})})),this.index=0,this.dsManager=e.DataSourceManager.getInstance(),this.state={popperFocusNode:null,showFilterItemPanel:!1,refreshFilterItemPanel:!1,dataSources:{}}}render(){var s,a,g,n;const{config:c}=this.props,d=c.filterItems.length===this.index&&this.state.showFilterItemPanel,C=c.filterItems.length>0||d;return(0,e.jsx)("div",{className:"jimu-widget-setting widget-setting-filter h-100",css:(A=this.props.theme,e.css`
    .and-or-group .max-width-50{
      max-width: 50%;
    }
    .filter-item {
      display: flex;
      flex: 1;
      padding: 0.375rem 0.25rem;
      cursor: pointer;

      .filter-item-icon{
        width: 14px;
        margin-right: 0.5rem;
      }
      .filter-item-name{
        /* word-break: break-word; */
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        word-break: break-word;
        -webkit-line-clamp: 2;
        line-height: ${A.typography.lineHeights.sm};
      }
    }

    .empty-placeholder {
      display: flex;
      flex-flow: column;
      justify-content: center;
      height: calc(100% - 120px);
      overflow: hidden;
      .empty-placeholder-inner {
        padding: 0px 20px;
        flex-direction: column;
        align-items: center;
        display: flex;

        .empty-placeholder-text {
          color: ${A.colors.palette.dark[500]};
          font-size: ${e.polished.rem(14)};
          margin-top: 16px;
          text-align: center;
        }
        .empty-placeholder-icon {
          color: ${A.colors.palette.dark[200]};
        }
      }
    }

    .arrange-style-container{

      .arrange_container, .trigger_container{
        margin-top: 10px;
        display: flex;
        justify-content: space-between;
        .jimu-btn {
          padding: 0;
          background: ${A.colors.palette.light[200]};
          &.active{
            border: 2px solid ${A.colors.palette.primary[600]};
          }
        }
      }
      .trigger_container{
        justify-content: flex-start;
        .jimu-btn:last-of-type{
          margin-left: 0.5rem;
        }
      }

      .omit-label{
        color: ${A.colors.palette.dark[400]};
      }
    }

    .options-container {
      .use-wrap{
        .jimu-widget-setting--row-label{
          margin-right: 5px;
        }
      }
    }
  `)},null===(s=this.props.useDataSources)||void 0===s?void 0:s.map(((t,i)=>(0,e.jsx)(p,{key:i,useDataSource:t,onCreateDataSourceCreatedOrFailed:this.onCreateDataSourceCreatedOrFailed}))),(0,e.jsx)(t.SettingSection,{className:C?"":"border-0",role:"group"},(0,e.jsx)("div",{ref:this.sidePopperTrigger},(0,e.jsx)(t.SettingRow,{label:(0,e.jsx)("span",{id:"newFilterDesc"},this.i18nMessage("filtersDesc")),flow:"wrap"}),(0,e.jsx)(t.SettingRow,{className:"mt-2"},(0,e.jsx)(i.Button,{type:"primary",className:"w-100 text-dark add-filter-btn","aria-label":this.i18nMessage("newFilter"),"aria-describedby":"newFilterDesc filter-blank-msg",onClick:()=>{this.onShowFilterItemPanel(c.filterItems.length,!0)}},(0,e.jsx)("div",{className:"w-100 px-2 text-truncate"},(0,e.jsx)(y,{className:"mr-1"}),this.i18nMessage("newFilter")))),C&&(0,e.jsx)(e.React.Fragment,null,c.filterItems.length>1&&(0,e.jsx)(t.SettingRow,null,(0,e.jsx)(i.AdvancedButtonGroup,{className:"w-100 and-or-group"},(0,e.jsx)(i.Button,{onClick:()=>{this.changeAndOR(e.ClauseLogic.And)},className:"btn-secondary max-width-50",size:"sm",active:c.logicalOperator===e.ClauseLogic.And},(0,e.jsx)("div",{className:"text-truncate"},this.i18nMessage("and"))),(0,e.jsx)(i.Button,{onClick:()=>{this.changeAndOR(e.ClauseLogic.Or)},className:"btn-secondary max-width-50",size:"sm",active:c.logicalOperator===e.ClauseLogic.Or},(0,e.jsx)("div",{className:"text-truncate"},this.i18nMessage("or"))))),this.createFilterItems(d)))),c.filterItems.length>0?(0,e.jsx)(e.React.Fragment,null,(0,e.jsx)(t.SettingSection,{className:"arrange-style-container",title:this.i18nMessage("arrangeAndStyle"),role:"group","aria-label":this.i18nMessage("arrangeAndStyle")},(0,e.jsx)(t.SettingRow,{className:"arrange_container"},(0,e.jsx)(i.Tooltip,{title:this.i18nMessage("vertical",i.defaultMessages),placement:"bottom"},(0,e.jsx)(i.Button,{onClick:()=>this.changeArrangeType(I.Block),icon:!0,size:"sm",type:"tertiary",active:c.arrangeType===I.Block,"aria-pressed":c.arrangeType===I.Block,"aria-label":this.i18nMessage("vertical",i.defaultMessages)},(0,e.jsx)(i.Icon,{width:68,height:68,icon:l(60789),autoFlip:!0}))),(0,e.jsx)(i.Tooltip,{title:this.i18nMessage("horizontal",i.defaultMessages),placement:"bottom"},(0,e.jsx)(i.Button,{onClick:()=>this.changeArrangeType(I.Inline),icon:!0,size:"sm",type:"tertiary",active:c.arrangeType===I.Inline,"aria-pressed":c.arrangeType===I.Inline,"aria-label":this.i18nMessage("horizontal",i.defaultMessages)},(0,e.jsx)(i.Icon,{width:68,height:68,icon:l(2297),autoFlip:!0}))),(0,e.jsx)(i.Tooltip,{title:this.i18nMessage("icon",e.defaultMessages),placement:"bottom"},(0,e.jsx)(i.Button,{onClick:()=>this.changeArrangeType(I.Popper),icon:!0,size:"sm",type:"tertiary",active:c.arrangeType===I.Popper,"aria-pressed":c.arrangeType===I.Popper,"aria-label":this.i18nMessage("icon",i.defaultMessages)},(0,e.jsx)(i.Icon,{width:68,height:68,icon:l(35516),autoFlip:!0})))),c.arrangeType===I.Inline&&(0,e.jsx)(t.SettingRow,{label:this.i18nMessage("wrapFilters")},(0,e.jsx)(i.Switch,{checked:c.wrap,"aria-label":this.i18nMessage("wrapFilters"),onChange:()=>this.changeUseWrap(!c.wrap)})),(0,e.jsx)(t.SettingRow,{className:"trigger_container",label:this.i18nMessage("activationMethods"),flow:"wrap",role:"group","aria-label":this.i18nMessage("activationMethods")},[{type:o.Toggle,icon:"toggle"},{type:o.Button,icon:"button"}].map(((t,s)=>(0,e.jsx)(i.Tooltip,{key:s,title:this.i18nMessage(`${t.icon}Tooltip`),placement:"bottom"},(0,e.jsx)(i.Button,{onClick:()=>this.changeTriggerType(t.type),icon:!0,size:"sm",type:"tertiary",active:t.type===c.triggerType,"aria-pressed":t.type===c.triggerType,"aria-label":this.i18nMessage(`${t.icon}Tooltip`)},(0,e.jsx)(i.Icon,{width:70,height:50,icon:l(67294)(`./trigger_${t.icon}.svg`),autoFlip:!0})))))),(0,e.jsx)(t.SettingRow,null,(0,e.jsx)(i.Label,{className:"w-100 d-flex"},(0,e.jsx)(i.Checkbox,{style:{cursor:"pointer",marginTop:"2px"},checked:c.omitInternalStyle,"aria-label":this.i18nMessage("omitInternalStyle"),onChange:()=>this.changeOmitInternalStyle(!c.omitInternalStyle)}),(0,e.jsx)("div",{className:"m-0 ml-2 flex-grow-1 omit-label"},this.i18nMessage("omitInternalStyle"),(0,e.jsx)(i.Tooltip,{title:this.i18nMessage("omitInternalStyleTip"),showArrow:!0,placement:"left"},(0,e.jsx)(i.Button,{icon:!0,type:"tertiary",size:"sm",className:"ml-2 p-0"},(0,e.jsx)(b,null))))))),(0,e.jsx)(t.SettingSection,{title:this.i18nMessage("advancedTools"),role:"group","aria-label":this.i18nMessage("advancedTools")},(0,e.jsx)(t.SettingRow,{label:this.i18nMessage("resetAllFilters")},(0,e.jsx)(i.Switch,{checked:c.resetAll,"aria-label":this.i18nMessage("resetAllFilters"),onChange:()=>this.updateConfigForOptions("resetAll",!c.resetAll)})))):(0,e.jsx)(e.React.Fragment,null,d?null:(0,e.jsx)("div",{className:"empty-placeholder w-100"},(0,e.jsx)("div",{className:"empty-placeholder-inner"},(0,e.jsx)("div",{className:"empty-placeholder-icon"},(0,e.jsx)(u,{size:48})),(0,e.jsx)("div",{className:"empty-placeholder-text",id:"filter-blank-msg",dangerouslySetInnerHTML:{__html:this.i18nMessage("blankStatusMsg",null,{newFilter:this.i18nMessage("newFilter")})}})))),(0,e.jsx)(t.SidePopper,{position:"right",title:this.i18nMessage("setFilterItem"),isOpen:this.state.showFilterItemPanel&&!e.urlUtils.getAppIdPageIdFromUrl().pageId,trigger:null===(a=this.sidePopperTrigger)||void 0===a?void 0:a.current,backToFocusNode:this.state.popperFocusNode,toggle:this.onCloseFilterItemPanel},(0,e.jsx)(r,Object.assign({},c.filterItems[this.index],{intl:this.props.intl,theme:this.props.theme,useDataSource:null===(g=c.filterItems[this.index])||void 0===g?void 0:g.useDataSource,dataSource:this.state.dataSources[null===(n=c.filterItems[this.index])||void 0===n?void 0:n.useDataSource.dataSourceId],dataSourceChange:this.dataSourceChangeForFI,optionChange:this.optionChangeForFI,onSqlExprBuilderChange:this.sqlExprBuilderChange}))));var A}}})(),c})())}}}));