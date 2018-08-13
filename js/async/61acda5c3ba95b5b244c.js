(window.webpackJsonpBalmUI=window.webpackJsonpBalmUI||[]).push([[2],{WqYz:function(i,t,s){"use strict";s.r(t);var e=function(){var i=this,t=i.$createElement,s=i._self._c||t;return s("div",{class:[i.$tt("body1"),"demo--icon"]},[s("section",{staticClass:"hero component"},[s("ui-icon",[i._v("add")]),i._v(" "),s("ui-icon",[i._v("description")]),i._v(" "),s("ui-icon",[i._v("edit")]),i._v(" "),s("ui-icon",[i._v("delete")])],1),i._v(" "),s("div",{class:i.$tt("body2")},[s("h4",{class:i.$tt("headline4")},[i._v("0. Usage")]),i._v(" "),s("ui-markdown",{attrs:{text:i.code[0]}}),i._v(" "),s("h4",{class:i.$tt("headline4")},[i._v("1. Example")]),i._v(" "),s("section",{staticClass:"sizing-example"},[s("h6",{class:i.$tt("headline6")},[i._v("1.1 Sizing")]),i._v(" "),s("div",{staticClass:"icons-preview-code"},i._l([18,24,36,48],function(t){return s("div",{key:t,staticClass:"icons-preview"},[s("ui-icon",{attrs:{size:t}},[i._v("face")]),i._v(" "),s("div",{staticClass:"icon-caption"},[i._v("\n            "+i._s(t)+"px\n            "+i._s(24===t?"(default)":"")+"\n          ")])],1)}))]),i._v(" "),s("ui-accordion",[s("ui-markdown",{attrs:{text:i.code[1]}})],1),i._v(" "),s("section",{staticClass:"coloring-example"},[s("h6",{class:i.$tt("headline6")},[i._v("1.2 Coloring")]),i._v(" "),s("div",{staticClass:"icons-preview-code"},[s("div",{staticClass:"icons-preview"},[s("ui-icon",{attrs:{dark:""}},[i._v("face")]),i._v(" "),s("div",{staticClass:"icon-caption"},[i._v("Normal")])],1),i._v(" "),s("div",{staticClass:"icons-preview"},[s("ui-icon",{attrs:{dark:"",inactive:""}},[i._v("face")]),i._v(" "),s("div",{staticClass:"icon-caption"},[i._v("Disabled")])],1),i._v(" "),s("div",{staticClass:"icons-preview icons-dark-bg"},[s("ui-icon",{attrs:{light:""}},[i._v("face")]),i._v(" "),s("div",{staticClass:"icon-caption"},[i._v("Normal")])],1),i._v(" "),s("div",{staticClass:"icons-preview icons-dark-bg"},[s("ui-icon",{attrs:{light:"",inactive:""}},[i._v("face")]),i._v(" "),s("div",{staticClass:"icon-caption"},[i._v("Disabled")])],1),i._v(" "),s("div",{staticClass:"icons-preview"},[s("ui-icon",{staticClass:"orange600"},[i._v("face")]),i._v(" "),s("div",{staticClass:"icon-caption"},[i._v("orange600")])],1)])]),i._v(" "),s("ui-accordion",[s("ui-markdown",{attrs:{text:i.code[2]}})],1),i._v(" "),s("h4",{class:i.$tt("headline4")},[i._v("2. APIs")]),i._v(" "),s("ui-apidocs",{attrs:{name:"icon"}}),i._v(" "),s("h4",{class:i.$tt("headline4")},[i._v("3. Icon List")]),i._v(" "),s("p",[s("ui-textfield",{attrs:{box:"",leadingIcon:"",type:"search",id:"search",placeholder:"Icon keywords",helptextId:"my-icons",fullwidth:"",model:i.keywords},on:{input:i.onInput}},[s("template",{slot:"before"},[s("ui-textfield-icon",[i._v("search")])],1)],2),i._v(" "),s("ui-textfield-helptext",{staticClass:"search-helper",attrs:{id:"my-icons",visible:""}},[i._v("\n        TIPS: Click an icon to copy icon name, then you can use "),s("b",[i._v("`<ui-icon>${icon_name}</ui-icon>`")]),i._v(".\n      ")])],1),i._v(" "),s("ui-list",{attrs:{nonInteractive:""}},[i._l(i.groups,function(t,e){return[s("ui-item",{key:"item"+e},[s("h2",[i._v(i._s(t.name))]),i._v(" "),Object.keys(i.currentIcons).length?[s("ui-grid-list",i._l(i.currentIcons[t.id],function(t,e){return s("ui-grid-tile",{key:e,staticClass:"btn-clipboard",attrs:{noImage:"","data-clipboard-text":t.id}},[s("template",{slot:"icon"},[s("ui-icon",{attrs:{size:"48"}},[i._v(i._s(t.id))])],1),i._v(" "),t.isNew?s("div",{staticClass:"new-badge"},[i._v("New")]):i._e(),i._v(" "),s("ui-grid-tile-title",{attrs:{title:t.name}},[i._v(i._s(t.name))])],2)}))]:[s("p",[i._v("No Icons")])]],2),i._v(" "),e<t.count-1?s("ui-item-divider",{key:"divider"+e}):i._e()]})],2)],1)])};e._withStripped=!0;var n=s("14Xm"),a=s.n(n),c=s("P2sY"),o=s.n(c),r=s("D3Ub"),d=s.n(r),v=s("sxGJ"),l=s.n(v),u={metaInfo:{titleTemplate:"%s - Icons"},mixins:[s("HRpM").a],data:function(){return{number:0,groups:[],icons:{},currentIcons:{},keywords:""}},created:function(){var i=this;return d()(a.a.mark(function t(){var s,e,n,c;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return i.showCode("icon",2),t.next=3,i.$http.get(i.$domain+"/data/grid.json");case 3:s=t.sent,e=s.data,n=e.groups,c=e.icons,n.map(function(t){i.groups.push({id:t.data.id,name:t.data.name,count:t.length})}),i.groups.forEach(function(t){i.icons[t.id]=[]}),c.forEach(function(t){i.icons[t.group_id].push({id:t.ligature,name:t.name,isNew:t.is_new})}),i.currentIcons=o()({},i.icons);case 9:case"end":return t.stop()}},t,i)}))()},mounted:function(){var i=this;new l.a(".btn-clipboard").on("success",function(t){i.$toast("'"+t.text+"' copied!"),t.clearSelection()})},methods:{filterIcons:function(){var i=this;if(this.keywords)for(var t in this.icons)this.currentIcons[t]=this.icons[t].filter(function(t){return t.name.indexOf(i.keywords)>-1});else this.currentIcons=o()({},this.icons)},onInput:function(i){this.keywords=i.trim(),this.filterIcons()}}},_=s("KHd+"),p=Object(_.a)(u,e,[],!1,null,null,null);p.options.__file="docs/scripts/views/components/icon.vue";t.default=p.exports}}]);