(function(t){function e(e){for(var s,o,n=e[0],l=e[1],c=e[2],d=0,p=[];d<n.length;d++)o=n[d],r[o]&&p.push(r[o][0]),r[o]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);u&&u(e);while(p.length)p.shift()();return a.push.apply(a,c||[]),i()}function i(){for(var t,e=0;e<a.length;e++){for(var i=a[e],s=!0,n=1;n<i.length;n++){var l=i[n];0!==r[l]&&(s=!1)}s&&(a.splice(e--,1),t=o(o.s=i[0]))}return t}var s={},r={app:0},a=[];function o(e){if(s[e])return s[e].exports;var i=s[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=t,o.c=s,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(i,s,function(e){return t[e]}.bind(null,s));return i},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],l=n.push.bind(n);n.push=e,n=n.slice();for(var c=0;c<n.length;c++)e(n[c]);var u=l;a.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"56d7":function(t,e,i){"use strict";i.r(e);var s=i("2b0e"),r=i("bb71");i("da64");s["a"].use(r["a"],{customProperties:!0,iconfont:"md"});var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app",{attrs:{id:"inspire",dark:""}},[i("v-navigation-drawer",{attrs:{fixed:"",clipped:"",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[i("v-list",{attrs:{dense:""}},[t._l(t.items,function(e){return i("v-list-tile",{key:e.text,attrs:{to:{name:"properties",params:{}}}},[i("v-list-tile-action",[i("v-icon",[t._v(t._s(e.icon))])],1),i("v-list-tile-content",[i("v-list-tile-title",[t._v("\n            "+t._s(e.text)+"\n          ")])],1)],1)}),i("v-subheader",{staticClass:"mt-3 grey--text text--darken-1"},[t._v("SUBSCRIBERS")]),i("v-list",[t._l(t.subscribers,function(e){return i("v-list-tile",{key:e.text,attrs:{avatar:"",to:{name:"subscribers",params:{subscriber_id:e.picture}}},on:{click:function(t){}}},[i("v-list-tile-avatar",[i("img",{attrs:{src:"https://ui-avatars.com/api/?name="+e.text,alt:""}})]),i("v-list-tile-title",{domProps:{textContent:t._s(e.text)}})],1)}),i("v-list-tile",{staticClass:"mt-3",attrs:{to:{name:"newSubscriber",params:{}}}},[i("v-list-tile-action",[i("v-icon",{attrs:{color:"grey darken-1"}},[t._v("add_circle_outline")])],1),i("v-list-tile-title",{staticClass:"grey--text text--darken-1"},[t._v("Add subscriber")])],1)],2),i("v-subheader",{staticClass:"mt-3 grey--text text--darken-1"},[t._v("SUBSCRIPTIONS")]),i("v-list",[t._l(t.subscriptions,function(e){return i("v-list-tile",{key:e.text,attrs:{avatar:"",to:{name:"subscriptions",params:{subscription_id:e.picture}}},on:{click:function(t){}}},[i("v-list-tile-avatar",[i("img",{attrs:{src:"https://randomuser.me/api/portraits/men/"+e.picture+".jpg",alt:""}})]),i("v-list-tile-title",{domProps:{textContent:t._s(e.text)}})],1)}),i("v-list-tile",{staticClass:"mt-3",attrs:{to:{name:"newSubscription",params:{}}}},[i("v-list-tile-action",[i("v-icon",{attrs:{color:"grey darken-1"}},[t._v("add_circle_outline")])],1),i("v-list-tile-title",{staticClass:"grey--text text--darken-1"},[t._v("Add subscription")])],1)],2)],2)],1),i("v-toolbar",{attrs:{color:"red",dense:"",fixed:"","clipped-left":"",app:""}},[i("v-toolbar-side-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),i("v-icon",{staticClass:"mx-3"},[t._v("fab fa-youtube")]),i("v-toolbar-title",{staticClass:"mr-5 align-center"},[i("router-link",{staticStyle:{color:"white","text-decoration":"none"},attrs:{to:{name:"home",params:{}},flat:""}},[i("span",{staticClass:"title"},[t._v("PWB Sync")])])],1),i("v-spacer"),i("v-layout",{staticStyle:{"max-width":"650px"},attrs:{row:"","align-center":""}},[i("v-text-field",{attrs:{"append-icon-cb":function(){},placeholder:"Search...","single-line":"","append-icon":"search",color:"white","hide-details":""}})],1)],1),i("v-content",[i("v-container",{attrs:{"fill-width":"","fill-height":""}},[i("v-layout",{attrs:{"justify-center":"","align-center":""}},[i("router-view")],1)],1)],1)],1)},o=[],n={data:()=>({drawer:null,items:[{icon:"settings",text:"Properties"}],subscribers:[{picture:28,text:"Joe Realtors"},{picture:38,text:"Pete's brokers"}],subscriptions:[{picture:48,text:"Star properties"},{picture:58,text:"REBNY feed"},{picture:78,text:"Trump homes"}]}),props:{source:String}},l=n,c=i("2877"),u=i("6544"),d=i.n(u),p=i("7496"),v=i("a523"),b=i("549c"),m=i("132d"),f=i("a722"),h=i("8860"),_=i("ba95"),y=i("40fe"),x=i("c954"),V=i("5d23"),g=i("f774"),w=i("9910"),T=i("e0c7"),S=i("2677"),C=i("71d9"),L=i("706c"),P=i("2a7f"),k=Object(c["a"])(l,a,o,!1,null,null,null);k.options.__file="App.vue";var $=k.exports;d()(k,{VApp:p["a"],VContainer:v["a"],VContent:b["a"],VIcon:m["a"],VLayout:f["a"],VList:h["a"],VListTile:_["a"],VListTileAction:y["a"],VListTileAvatar:x["a"],VListTileContent:V["a"],VListTileTitle:V["c"],VNavigationDrawer:g["a"],VSpacer:w["a"],VSubheader:T["a"],VTextField:S["a"],VToolbar:C["a"],VToolbarSideIcon:L["a"],VToolbarTitle:P["b"]});var A=i("8c4f"),M=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("Welcome")},E=[],U=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",[i("v-layout",{attrs:{"text-xs-center":"",wrap:""}},[i("v-flex",{attrs:{xs12:""}}),i("v-flex",{attrs:{"mb-4":""}},[i("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v("\n        Welcome to PropertyWebBuilder Sync\n      ")]),i("p",{staticClass:"subheading font-weight-regular"},[t._v("\n        If you like PropertyWebBuilder,\n        "),i("br"),t._v("please consider donating via \n        "),i("a",{attrs:{href:"https://opencollective.com/property_web_builder"}},[t._v("OpenCollective")])])]),i("v-flex",{staticStyle:{display:"none"},attrs:{xs12:"","mb-5":""}},[i("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v("Important Links")]),i("v-layout",{attrs:{"justify-center":""}},t._l(t.importantLinks,function(e,s){return i("a",{key:s,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v("\n          "+t._s(e.text)+"\n        ")])}))],1)],1)],1)},q=[],O={data:()=>({importantLinks:[{text:"Documentation",href:"https://vuetifyjs.com"},{text:"Chat",href:"https://community.vuetifyjs.com"},{text:"Made with Vuetify",href:"https://madewithvuetifyjs.com"},{text:"Twitter",href:"https://twitter.com/vuetifyjs"},{text:"Articles",href:"https://medium.com/vuetify"}]})},j=O,F=(i("c21d"),i("0e8f")),B=Object(c["a"])(j,U,q,!1,null,null,null);B.options.__file="Welcome.vue";var N=B.exports;d()(B,{VContainer:v["a"],VFlex:F["a"],VLayout:f["a"]});var R={components:{Welcome:N}},I=R,D=Object(c["a"])(I,M,E,!1,null,null,null);D.options.__file="Home.vue";var W=D.exports,K=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[i("h1",[t._v("Properties")]),i("v-layout",{staticClass:"mt-2",attrs:{row:"",wrap:""}},[i("v-flex",{attrs:{xs12:""}},[i("v-list",{attrs:{"two-line":"",subheader:""}},[i("v-subheader",{attrs:{inset:""}}),t._l(t.adminPropsList,function(e,s){return[i("v-list-tile",{staticStyle:{cursor:"pointer"},attrs:{to:"#"},nativeOn:{click:function(i){t.goToEdit(e)}}},[i("v-list-tile-avatar",[i("v-icon")],1),i("v-list-tile-content",[i("v-list-tile-title",[t._v(t._s(e.attributes.title))]),i("v-list-tile-sub-title",[t._v(t._s(e.attributes.description))])],1),i("v-list-tile-action",[i("v-btn",{attrs:{icon:"",ripple:""}},[e.attributes.highlighted&&e.attributes.visible?i("v-icon",{attrs:{color:"grey lighten-1"}},[t._v("home")]):t._e()],1)],1),i("v-list-tile-action",[i("v-btn",{attrs:{icon:"",ripple:""}},[e.attributes.visible?i("v-icon",{attrs:{color:"grey lighten-1"}},[t._v("visibility")]):i("v-icon",{attrs:{color:"grey lighten-1"}},[t._v("visibility_off")])],1)],1)],1)]})],2)],1)],1)],1)},J=[],z={components:{},props:[],watch:{$route:{handler(t,e){this.$store.dispatch("loadAdminProperties",t.params)},immediate:!0}},computed:{adminPropsList(){return this.$store.state.adminPropsList}}},Y=z,H=i("8336"),G=Object(c["a"])(Y,K,J,!1,null,null,null);G.options.__file="Properties.vue";var Q=G.exports;d()(G,{VBtn:H["a"],VFlex:F["a"],VIcon:m["a"],VLayout:f["a"],VList:h["a"],VListTile:_["a"],VListTileAction:y["a"],VListTileAvatar:x["a"],VListTileContent:V["a"],VListTileSubTitle:V["b"],VListTileTitle:V["c"],VSubheader:T["a"]});var X=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[i("h1",[t._v("Add a new subscriber to your site")]),i("v-layout",{staticClass:"mt-2",attrs:{row:"",wrap:""}},[i("v-flex",{attrs:{xs12:""}},[i("v-card",{staticClass:"elevation-2"},[i("v-card-title",{staticClass:"layout",attrs:{"primary-title":""}},[i("div",{staticClass:"headline ml-2"})]),i("v-card-text",[i("v-form",{ref:"enqForm",attrs:{"lazy-validation":""},on:{submit:function(e){return e.preventDefault(),t.onSubmitEnquiry(e)}},model:{value:t.formValid,callback:function(e){t.formValid=e},expression:"formValid"}},[t._l(t.contactUsFields,function(e){return i("v-layout",{key:e.fieldName,attrs:{row:""}},[i("v-flex",{attrs:{xs12:"",sm12:"","offset-sm0":""}},[i("v-text-field",{attrs:{autofocus:e.autofocus,"multi-line":e.multiLine,required:e.required,rules:e.validationRules,name:"",label:e.labelTextTKey},model:{value:t.enquiryContent[e.fieldName],callback:function(i){t.$set(t.enquiryContent,e.fieldName,i)},expression:"enquiryContent[field.fieldName]"}})],1)],1)}),t.contactUsErrors.length?i("p",[t._l(t.contactUsErrors,function(e){return[i("v-alert",{attrs:{outline:"",color:"error",icon:"warning",value:!0}},[t._v("\n              "+t._s(e)+"\n            ")])]})],2):t._e(),t.contactUsSuccess.length?i("p",[i("v-alert",{attrs:{outline:"",color:"success",dismissible:""},model:{value:t.successModel,callback:function(e){t.successModel=e},expression:"successModel"}},[t._v("\n            "+t._s(t.contactUsSuccess)+"\n          ")])],1):t._e(),i("v-flex",{attrs:{xs12:"",sm12:"","offset-sm0":""}},[t.contactUsSending?[i("v-progress-linear",{attrs:{indeterminate:!0}})]:t._e(),i("v-btn",{staticClass:"accent",attrs:{type:"submit"}},[t._v("\n            Add subscriber\n          ")])],2)],2)],1)],1),i("v-list",{attrs:{"two-line":"",subheader:""}},[i("v-subheader",{attrs:{inset:""}})],1)],1)],1)],1)},Z=[],tt={components:{},props:[],watch:{$route:{handler(t,e){this.$store.dispatch("loadAdminProperties",t.params)},immediate:!0}},data(){return{showTrans:!1,successModel:!0,formValid:!1,contactUsFields:[{labelTextTKey:"name",autofocus:!0,fieldName:"name",inputType:"text",required:!0,validationRules:[t=>!!t||"Name is required"]},{labelTextTKey:"email",fieldName:"email",inputType:"text",required:!0,validationRules:[t=>!!t||"E-mail is required",t=>/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(t)||"E-mail must be valid"]},{labelTextTKey:"tel",fieldName:"tel",inputType:"text",validationRules:[]}],enquiryContent:{name:"",message:""}}},computed:{contactUsSending(){return this.$store.state.contactUsSending||!1},contactUsSuccess(){return this.$store.state.contactUsSuccess||""},contactUsErrors(){return this.$store.state.contactUsErrors||[]}},methods:{onSubmitEnquiry(){this.formValid?this.$store.dispatch("createSubscriber",this.enquiryContent):this.$refs.enqForm.validate()}}},et=tt,it=i("0798"),st=i("b0af"),rt=i("99d9"),at=i("12b2"),ot=i("4bd4"),nt=i("8e36"),lt=Object(c["a"])(et,X,Z,!1,null,null,null);lt.options.__file="NewSubscriber.vue";var ct=lt.exports;d()(lt,{VAlert:it["a"],VBtn:H["a"],VCard:st["a"],VCardText:rt["a"],VCardTitle:at["a"],VFlex:F["a"],VForm:ot["a"],VLayout:f["a"],VList:h["a"],VProgressLinear:nt["a"],VSubheader:T["a"],VTextField:S["a"]});var ut=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[i("h1",[t._v("Subscribe to a PropertyWebBuilder site")]),i("v-layout",{staticClass:"mt-2",attrs:{row:"",wrap:""}},[i("v-flex",{attrs:{xs12:""}},[i("v-card",{staticClass:"elevation-2"},[i("v-card-title",{staticClass:"layout",attrs:{"primary-title":""}},[i("div",{staticClass:"headline ml-2"})]),i("v-card-text",[i("v-form",{ref:"enqForm",attrs:{"lazy-validation":""},on:{submit:function(e){return e.preventDefault(),t.onSubmitEnquiry(e)}},model:{value:t.formValid,callback:function(e){t.formValid=e},expression:"formValid"}},[t._l(t.contactUsFields,function(e){return i("v-layout",{key:e.fieldName,attrs:{row:""}},[i("v-flex",{attrs:{xs12:"",sm12:"","offset-sm0":""}},[i("v-text-field",{attrs:{autofocus:e.autofocus,"multi-line":e.multiLine,required:e.required,rules:e.validationRules,name:"",label:e.labelTextTKey},model:{value:t.enquiryContent[e.fieldName],callback:function(i){t.$set(t.enquiryContent,e.fieldName,i)},expression:"enquiryContent[field.fieldName]"}})],1)],1)}),t.contactUsErrors.length?i("p",[t._l(t.contactUsErrors,function(e){return[i("v-alert",{attrs:{outline:"",color:"error",icon:"warning",value:!0}},[t._v("\n              "+t._s(e)+"\n            ")])]})],2):t._e(),t.contactUsSuccess.length?i("p",[i("v-alert",{attrs:{outline:"",color:"success",dismissible:""},model:{value:t.successModel,callback:function(e){t.successModel=e},expression:"successModel"}},[t._v("\n            "+t._s(t.contactUsSuccess)+"\n          ")])],1):t._e(),i("v-flex",{attrs:{xs12:"",sm12:"","offset-sm0":""}},[t.contactUsSending?[i("v-progress-linear",{attrs:{indeterminate:!0}})]:t._e(),i("v-btn",{staticClass:"accent",attrs:{type:"submit"}},[t._v("\n            Subscribe to site\n          ")])],2)],2)],1)],1),i("v-list",{attrs:{"two-line":"",subheader:""}},[i("v-subheader",{attrs:{inset:""}})],1)],1)],1)],1)},dt=[],pt={components:{},props:[],watch:{$route:{handler(t,e){this.$store.dispatch("loadAdminProperties",t.params)},immediate:!0}},data(){return{showTrans:!1,successModel:!0,formValid:!1,contactUsFields:[{labelTextTKey:"url",autofocus:!0,fieldName:"url",inputType:"text",required:!0,validationRules:[t=>!!t||"Url is required"]},{labelTextTKey:"token",fieldName:"token",inputType:"text",validationRules:[]}],enquiryContent:{name:"",message:""}}},computed:{contactUsSending(){return this.$store.state.contactUsSending||!1},contactUsSuccess(){return this.$store.state.contactUsSuccess||""},contactUsErrors(){return this.$store.state.contactUsErrors||[]}},methods:{onSubmitEnquiry(){this.formValid?this.$store.dispatch("sendContactMessage",this.enquiryContent):this.$refs.enqForm.validate()}}},vt=pt,bt=Object(c["a"])(vt,ut,dt,!1,null,null,null);bt.options.__file="NewSubscription.vue";var mt=bt.exports;d()(bt,{VAlert:it["a"],VBtn:H["a"],VCard:st["a"],VCardText:rt["a"],VCardTitle:at["a"],VFlex:F["a"],VForm:ot["a"],VLayout:f["a"],VList:h["a"],VProgressLinear:nt["a"],VSubheader:T["a"],VTextField:S["a"]});var ft=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[i("AddPropForSubscriber",{attrs:{listPropsModalVisible:t.listPropsModalVisible,subscriberProps:t.subscriberProps},on:{hideListPropsModal:t.hideListPropsModal}}),i("h1",[t._v("Agent "+t._s(t.$route.params.subscriber_id)+" is subscribing to these properties")]),i("v-layout",{staticClass:"mt-2",attrs:{row:"",wrap:""}},[i("v-flex",{attrs:{xs12:""}},[i("v-btn",{attrs:{slot:"activator",dark:"",icon:""},nativeOn:{click:function(e){t.showListPropsModal()}},slot:"activator"},[i("v-icon",[t._v("edit")])],1)],1)],1),i("v-layout",{staticClass:"mt-2",attrs:{row:"",wrap:""}},[i("v-flex",{attrs:{xs12:""}},[i("v-list",{attrs:{"two-line":"",subheader:""}},[i("v-subheader",{attrs:{inset:""}}),t._l(t.subscriberProps,function(e,s){return[i("v-list-tile",{staticStyle:{cursor:"pointer"},attrs:{to:"#"},nativeOn:{click:function(i){t.goToEdit(e)}}},[i("v-list-tile-avatar",[i("v-icon")],1),i("v-list-tile-content",[i("v-list-tile-title",[t._v(t._s(e.title))]),i("v-list-tile-sub-title",[t._v(t._s(e.description))])],1),i("v-list-tile-action",[i("v-btn",{attrs:{icon:"",ripple:""}},[e.highlighted&&e.visible?i("v-icon",{attrs:{color:"grey lighten-1"}},[t._v("home")]):t._e()],1)],1),i("v-list-tile-action",[i("v-btn",{attrs:{icon:"",ripple:""}},[e.visible?i("v-icon",{attrs:{color:"grey lighten-1"}},[t._v("visibility")]):i("v-icon",{attrs:{color:"grey lighten-1"}},[t._v("visibility_off")])],1)],1)],1)]})],2)],1)],1)],1)},ht=[],_t=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-dialog",{on:{input:t.modalChanged},model:{value:t.showModal,callback:function(e){t.showModal=e},expression:"showModal"}},[i("v-layout",{attrs:{row:"",wrap:""}},[i("v-flex",{staticClass:"text-xs-center",attrs:{xs12:""}},[i("v-toolbar",{attrs:{dark:"",color:"primary"}},[i("v-btn",{attrs:{icon:"",dark:""},nativeOn:{click:function(e){t.modalChanged(!t.showModal)}}},[i("v-icon",[t._v("close")])],1),i("v-toolbar-title",[t._v("Select properties for subscriber")]),i("v-spacer"),i("v-toolbar-items",[i("v-btn",{attrs:{dark:"",flat:""},nativeOn:{click:function(e){t.modalChanged(!t.showModal)}}})],1)],1)],1)],1),i("v-layout",{attrs:{row:"",wrap:""}},[i("v-flex",{attrs:{xs12:""}},[i("v-list",{attrs:{"two-line":"",subheader:""}},[i("v-subheader",{attrs:{inset:""}}),t._l(t.adminPropsList,function(e,s){return[i("v-list-tile",{staticStyle:{cursor:"pointer"},attrs:{to:"#"},nativeOn:{click:function(i){t.toggleProp(e)}}},[i("v-list-tile-avatar",[i("v-icon")],1),i("v-list-tile-content",[i("v-list-tile-title",[t._v(t._s(e.attributes.title))]),i("v-list-tile-sub-title",[t._v(t._s(e.attributes.description))])],1),i("v-list-tile-action"),i("v-list-tile-action",[i("v-btn",{attrs:{icon:"",ripple:""}},[e.canBeRemoved?i("v-icon",{attrs:{color:"grey lighten-1"}},[t._v("remove_circle ")]):i("v-icon",{attrs:{color:"grey lighten-1"}},[t._v("add_circle")])],1)],1)],1)]})],2)],1)],1)],1)},yt=[],xt={components:{},props:["listPropsModalVisible","subscriberProps"],data(){return{showModal:!1}},computed:{adminPropsList(){let t=this.$store.state.adminPropsList||[],e=this.subscriberProps,i=[];return e.forEach(function(t){i.push(t.id.toString())}),t.forEach(function(t){console.log(i),i.includes(t.id)?(t.canBeRemoved=!0,t.canBeAdded=!1):t.canBeAdded=!0}),t}},methods:{toggleProp(t){let e={property:t};t.canBeAdded?e.update_action="add":e.update_action="remove",this.$store.dispatch("updateSubscriberProps",e)},modalChanged(t){t||this.$emit("hideListPropsModal")}},watch:{listPropsModalVisible(t){this.showModal=t,t&&this.$store.dispatch("loadAdminProperties")}}},Vt=xt,gt=i("169a"),wt=Object(c["a"])(Vt,_t,yt,!1,null,null,null);wt.options.__file="AddPropForSubscriber.vue";var Tt=wt.exports;d()(wt,{VBtn:H["a"],VDialog:gt["a"],VFlex:F["a"],VIcon:m["a"],VLayout:f["a"],VList:h["a"],VListTile:_["a"],VListTileAction:y["a"],VListTileAvatar:x["a"],VListTileContent:V["a"],VListTileSubTitle:V["b"],VListTileTitle:V["c"],VSpacer:w["a"],VSubheader:T["a"],VToolbar:C["a"],VToolbarItems:P["a"],VToolbarTitle:P["b"]});var St={components:{AddPropForSubscriber:Tt},props:[],watch:{$route:{handler(t,e){this.$store.dispatch("loadSubscriber",t.params)},immediate:!0}},data(){return{listPropsModalVisible:!1}},computed:{subscriberProps(){return this.$store.state.subscriberProps}},methods:{hideListPropsModal(){this.listPropsModalVisible=!1},showListPropsModal(){this.listPropsModalVisible=!0}}},Ct=St,Lt=Object(c["a"])(Ct,ft,ht,!1,null,null,null);Lt.options.__file="Subscribers.vue";var Pt=Lt.exports;d()(Lt,{VBtn:H["a"],VFlex:F["a"],VIcon:m["a"],VLayout:f["a"],VList:h["a"],VListTile:_["a"],VListTileAction:y["a"],VListTileAvatar:x["a"],VListTileContent:V["a"],VListTileSubTitle:V["b"],VListTileTitle:V["c"],VSubheader:T["a"]});var kt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[i("h1",[t._v("Your are subscribing to these properties from agent "+t._s(t.$route.params.subscription_id))]),i("v-layout",{staticClass:"mt-2",attrs:{row:"",wrap:""}},[i("v-flex",{attrs:{xs12:""}},[i("v-list",{attrs:{"two-line":"",subheader:""}},[i("v-subheader",{attrs:{inset:""}}),t._l(t.adminPropsList,function(e,s){return[i("v-list-tile",{staticStyle:{cursor:"pointer"},attrs:{to:"#"},nativeOn:{click:function(i){t.goToEdit(e)}}},[i("v-list-tile-avatar",[i("v-icon")],1),i("v-list-tile-content",[i("v-list-tile-title",[t._v(t._s(e.attributes.title))]),i("v-list-tile-sub-title",[t._v(t._s(e.attributes.description))])],1),i("v-list-tile-action",[i("v-btn",{attrs:{icon:"",ripple:""}},[e.highlighted&&e.visible?i("v-icon",{attrs:{color:"grey lighten-1"}},[t._v("home")]):t._e()],1)],1),i("v-list-tile-action",[i("v-btn",{attrs:{icon:"",ripple:""}},[e.visible?i("v-icon",{attrs:{color:"grey lighten-1"}},[t._v("visibility")]):i("v-icon",{attrs:{color:"grey lighten-1"}},[t._v("visibility_off")])],1)],1)],1)]})],2)],1)],1)],1)},$t=[],At={components:{},props:[],watch:{$route:{handler(t,e){this.$store.dispatch("loadAdminProperties",t.params)},immediate:!0}},computed:{adminPropsList(){return this.$store.state.adminPropsList}}},Mt=At,Et=Object(c["a"])(Mt,kt,$t,!1,null,null,null);Et.options.__file="Subscriptions.vue";var Ut=Et.exports;d()(Et,{VBtn:H["a"],VFlex:F["a"],VIcon:m["a"],VLayout:f["a"],VList:h["a"],VListTile:_["a"],VListTileAction:y["a"],VListTileAvatar:x["a"],VListTileContent:V["a"],VListTileSubTitle:V["b"],VListTileTitle:V["c"],VSubheader:T["a"]}),s["a"].use(A["a"]);var qt=new A["a"]({mode:"history",base:"/pwb-sync/",routes:[{path:"/",name:"home",component:W},{path:"/properties",name:"properties",component:Q},{path:"/new-subscriber",name:"newSubscriber",component:ct},{path:"/new-subscription",name:"newSubscription",component:mt},{path:"/subscriptions/:subscription_id",name:"subscriptions",component:Ut},{path:"/subscribers/:subscriber_id",name:"subscribers",component:Pt}]}),Ot=i("2f62"),jt=i("bc3a"),Ft=i.n(jt),Bt=()=>{return Ft.a.create({headers:{Accept:"application/json","Content-Type":"application/json"}})};s["a"].use(Ot["a"]);var Nt=new Ot["a"].Store({state:{adminPropsList:[],subscriber:{},subscriberContact:{},subscriberProps:[]},mutations:{setAdminPropsList:(t,{result:e})=>{t.adminPropsList=e},setSubscriberDetails:(t,{result:e})=>{t.subscriber=e.subscriber,t.subscriberContact=e.contact,t.subscriberProps=e.props}},actions:{loadAdminProperties:function({commit:t},e){let i="/api/v1/properties";Bt().get(i).then(e=>{t("setAdminPropsList",{result:e.data.data})},t=>{console.log(t)})},loadSubscriber:function({commit:t},e){let i="/api/v1/subscribers/1";Bt().get(i).then(e=>{t("setSubscriberDetails",{result:e.data})},t=>{console.log(t)})},updateSubscriberProps:function({commit:t},e){let i="/api/v1/subscriber_props";Bt().put(i,{subscriber:this.state.subscriber,property:e.property,update_action:e.update_action}).then(e=>{t("setSubscriberDetails",{result:e.data})},t=>{console.log(t)})},createSubscriber:function({commit:t},e){let i="/api/v1/subscribers";Bt().post(i,{subscriber:e}).then(e=>{t("setAdminPropsList",{result:e.data.data})},t=>{console.log(t)})}}});s["a"].config.productionTip=!1,new s["a"]({router:qt,store:Nt,render:t=>t($)}).$mount("#app")},"6bfa":function(t,e,i){},c21d:function(t,e,i){"use strict";var s=i("6bfa"),r=i.n(s);r.a}});
//# sourceMappingURL=app.4fa24e6a.js.map