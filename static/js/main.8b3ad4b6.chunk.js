(this.webpackJsonpreact_note=this.webpackJsonpreact_note||[]).push([[0],{42:function(t,e,n){},55:function(t,e,n){"use strict";n.r(e);var a=n(2),r=n(20),c=n.n(r),i=(n(42),n(14)),o=n(13),s=n(17),l=n(16),d=n(15),u=n(4),b=function(t){Object(s.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).handleAdd=function(e){e.preventDefault(),t.props.status(),t.props.isAdd()},t}return Object(o.a)(n,[{key:"render",value:function(){var t=this;return Object(u.jsx)("div",{children:Object(u.jsxs)("nav",{className:"navbar navbar-expand-sm navbar-dark bg-primary",children:[Object(u.jsx)("a",{className:"navbar-brand",href:"facebook.com",children:"Navbar"}),Object(u.jsx)("button",{className:"navbar-toggler d-lg-none",type:"button","data-toggle":"collapse","data-target":"#collapsibleNavId","aria-controls":"collapsibleNavId","aria-expanded":"false","aria-label":"Toggle navigation"}),Object(u.jsx)("div",{className:"collapse navbar-collapse justify-content-end",id:"collapsibleNavId",children:Object(u.jsxs)("ul",{className:"navbar-nav mt-2 mt-lg-0",children:[Object(u.jsx)("li",{className:"nav-item active",children:Object(u.jsxs)("a",{className:"nav-link",href:"facebook.com",children:["Home ",Object(u.jsx)("span",{className:"sr-only",children:"(current)"})]})}),Object(u.jsx)("li",{className:"nav-item",children:Object(u.jsx)("a",{className:"nav-link",href:"facebook.com",onClick:function(e){return t.handleAdd(e)},children:"Add Note"})})]})})]})})}}]),n}(a.Component),j=Object(d.b)(null,(function(t,e){return{status:function(){t({type:"Edit"})},isAdd:function(){t({type:"isAdd"})}}}))(b),p=n(27),h=function(t){Object(s.a)(n,t);var e=Object(l.a)(n);function n(t){var a;return Object(i.a)(this,n),(a=e.call(this,t)).dataInput=function(t){var e=t.target.name,n=t.target.value;a.setState(Object(p.a)({},e,n))},a.getData=function(t,e){if(a.state.key){var n={};n.key=a.state.key,n.title=a.state.title,n.noteContent=a.state.noteContent,a.props.editDataStore(n),a.props.status(),a.props.Alert_on("S\u1eeda th\xe0nh c\xf4ng")}else{var r={};r.title=t,r.noteContent=e,a.props.add(r),a.props.Alert_on("Th\xeam m\u1edbi th\xe0nh c\xf4ng")}},a.title=function(){return a.props.isAdd?Object(u.jsx)("h4",{children:"Th\xeam M\u1edbi"}):Object(u.jsx)("h4",{children:"S\u1eeda"})},a.state={title:"",noteContent:"",key:""},a}return Object(o.a)(n,[{key:"componentWillMount",value:function(){this.props.item&&this.setState({title:this.props.item.title,noteContent:this.props.item.noteContent,key:this.props.item.key})}},{key:"render",value:function(){var t=this;return Object(u.jsx)("div",{className:"col-4",children:Object(u.jsxs)("div",{className:"form-group",children:[this.title(),Object(u.jsx)("input",{defaultValue:this.props.item.title,onChange:function(e){return t.dataInput(e)},type:"text",name:"title",className:"form-control",placeholder:"Tieu de Note","aria-describedby":"helpId"}),Object(u.jsx)("small",{className:"text-muted ",children:"\u0110i\u1ec1n n\u1ed9i dung"})," ",Object(u.jsx)("br",{}),Object(u.jsx)("label",{children:"N\u1ed9i dung Note"}),Object(u.jsx)("textarea",{defaultValue:this.props.item.noteContent,onChange:function(e){return t.dataInput(e)},className:"form-control",name:"noteContent",rows:3}),Object(u.jsx)("small",{className:"text-muted",children:"\u0110i\u1ec1n n\u1ed9i dung"}),Object(u.jsx)("button",{onClick:function(){return t.getData(t.state.title,t.state.noteContent)},type:"reset",className:"form-control btn btn-primary",children:"Submit"})]})})}}]),n}(a.Component),f=Object(d.b)((function(t,e){return{item:t.editItem,isAdd:t.isAdd,notIsAdd:t.notIsAdd}}),(function(t,e){return{add:function(e){t({type:"ADD",getItem:e})},status:function(){t({type:"Edit"})},editDataStore:function(e){t({type:"Edit_O",editObject:e})},Alert_on:function(e){t({type:"Alert_on",alertContent:e})}}}))(h),O=function(t){Object(s.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).action=function(){t.props.Edit(),t.props.getEditData(t.props.note),t.props.notIsAdd()},t.deleteData=function(){t.props.getDelete(t.props.note.key)},t}return Object(o.a)(n,[{key:"render",value:function(){var t=this;return Object(u.jsxs)("div",{className:"card",children:[Object(u.jsx)("div",{className:"card-header",role:"tab",id:"s"+this.props.Id,children:Object(u.jsxs)("h5",{className:"mb-0",children:[Object(u.jsx)("a",{"data-toggle":"collapse","data-parent":"#accordianId",href:"#Content"+this.props.Id,"aria-expanded":"true","aria-controls":"Content"+this.props.Id,children:this.props.title}),Object(u.jsxs)("div",{className:"btn-group float-right",children:[Object(u.jsx)("div",{className:"btn btn-outline-primary",onClick:function(){return t.deleteData()},children:"Delete"}),Object(u.jsx)("div",{className:"btn btn-outline-warning",onClick:function(){return t.action()},children:"Edit"})]})]})}),Object(u.jsx)("div",{id:"Content"+this.props.Id,className:"collapse in",role:"tabpanel","aria-labelledby":"s"+this.props.Id,children:Object(u.jsx)("div",{className:"card-body",children:Object(u.jsx)("p",{children:this.props.noteContent})})})]})}}]),n}(a.Component),m=Object(d.b)(null,(function(t,e){return{Edit:function(){t({type:"Edit"})},getEditData:function(e){t({type:"GET_EDIT",editObject:e})},getDelete:function(e){t({type:"Delete",deleteId:e})},notIsAdd:function(){t({type:"notIsAdd"})}}}))(O),v=n(28);v.a.initializeApp({apiKey:"AIzaSyBDs_MDiOJt4ixqt6nCiKjgsV_VnCMcr4U",authDomain:"notereact-15456.firebaseapp.com",databaseURL:"https://notereact-15456-default-rtdb.firebaseio.com",projectId:"notereact-15456",storageBucket:"notereact-15456.appspot.com",messagingSenderId:"879046337970",appId:"1:879046337970:web:1a9d76451911aad64df0ab",measurementId:"G-GFXCY0T7X9"}),v.a.analytics();var g=v.a.database().ref("dataNote"),y=function(t){Object(s.a)(n,t);var e=Object(l.a)(n);function n(t){var a;return Object(i.a)(this,n),(a=e.call(this,t)).getData=function(){if(a.state.firebaseData)return a.state.firebaseData.map((function(t,e){return Object(u.jsx)(m,{note:t,Id:e,title:t.title,noteContent:t.noteContent},e)}))},a.state={firebaseData:""},a}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var t=this;g.on("value",(function(e){var n=[];e.forEach((function(t){var e=t.key,a=t.val().title,r=t.val().noteContent;n.push({key:e,title:a,noteContent:r})})),t.setState({firebaseData:n})}))}},{key:"render",value:function(){return Object(u.jsx)("div",{className:"col",children:Object(u.jsx)("div",{id:"accordianId",role:"tablist","aria-multiselectable":"true",children:this.getData()})})}}]),n}(a.Component),x=n(31),C=n(57),I=function(t){Object(s.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).handleDismiss=function(){t.props.Alert_off()},t}return Object(o.a)(n,[{key:"render",value:function(){var t=this;return!1===this.props.alertShow?null:Object(u.jsx)(x.c,{children:Object(u.jsx)(C.a,{type:"info",onDismiss:function(){return t.handleDismiss()},timeout:1e3,children:this.props.alertContent})})}}]),n}(a.Component),N=Object(d.b)((function(t,e){return{alertShow:t.alertShow,alertContent:t.alertContent}}),(function(t,e){return{Alert_off:function(){t({type:"Alert_off"})}}}))(I),A=function(t){Object(s.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).showForm=function(){if(t.props.Edit)return Object(u.jsx)(f,{})},t}return Object(o.a)(n,[{key:"render",value:function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)(j,{}),Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)(N,{}),Object(u.jsx)(y,{}),this.showForm()]})})]})}}]),n}(a.Component),D=Object(d.b)((function(t,e){return{Edit:t.isEdit}}))(A),k=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,58)).then((function(e){var n=e.getCLS,a=e.getFID,r=e.getFCP,c=e.getLCP,i=e.getTTFB;n(t),a(t),r(t),c(t),i(t)}))},E=n(11),S=n(54),w={isEdit:!1,editItem:{},isAdd:!0,alertShow:!1,alertContent:""},_=S.createStore((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"ADD":return g.push(e.getItem),console.log("Th\xeam th\xe0nh c\xf4ng"+JSON.stringify(e.getItem)),t;case"Edit":return Object(E.a)(Object(E.a)({},t),{},{isEdit:!t.isEdit});case"isAdd":return Object(E.a)(Object(E.a)({},t),{},{isAdd:!0});case"notIsAdd":return Object(E.a)(Object(E.a)({},t),{},{isAdd:!1});case"Alert_on":return Object(E.a)(Object(E.a)({},t),{},{alertShow:!0,alertContent:e.alertContent});case"Alert_off":return Object(E.a)(Object(E.a)({},t),{},{alertShow:!1});case"GET_EDIT":return Object(E.a)(Object(E.a)({},t),{},{editItem:e.editObject});case"Edit_O":return g.child(e.editObject.key).update({title:e.editObject.title,noteContent:e.editObject.noteContent}),console.log("Updae tahnfh c\xf4ng"),Object(E.a)(Object(E.a)({},t),{},{editItem:{}});case"Delete":return g.child(e.deleteId).remove(),t;default:return t}}));_.subscribe((function(){return console.log(_.getState())}));var T=_;c.a.render(Object(u.jsx)(d.a,{store:T,children:Object(u.jsx)(D,{})}),document.getElementById("root")),k()}},[[55,1,2]]]);
//# sourceMappingURL=main.8b3ad4b6.chunk.js.map