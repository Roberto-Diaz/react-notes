(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{33:function(e,t,a){},35:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(26),s=a.n(r),o=(a(33),a(9)),i=a(2),u=(a(34),a(35),a(10)),l=a(11),d=a(13),j=a(12),b=a(0),O=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(b.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:Object(b.jsxs)("div",{className:"container-fluid",children:[Object(b.jsx)(o.b,{className:"navbar-brand",to:"/",children:"NotesApp"}),Object(b.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(b.jsx)("span",{className:"navbar-toggler-icon"})}),Object(b.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNavAltMarkup",children:Object(b.jsxs)("ul",{className:"navbar-nav",children:[Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(o.b,{className:"nav-link active","aria-current":"page",to:"/",children:"Notes"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(o.b,{className:"nav-link",to:"/create",children:"Create Note"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(o.b,{className:"nav-link",to:"/user",children:"Create User"})})]})})]})})}}]),a}(n.Component),v=a(3),p=a.n(v),m=a(7),h=a(8),S=a.n(h),f=a(28),_=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={notes:[]},e.deleteNote=function(){var t=Object(m.a)(p.a.mark((function t(a){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S.a.delete("".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/react-notes",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).API_URL,"/notes/").concat(a));case 2:e.getNotes();case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.getNotes()}},{key:"getNotes",value:function(){var e=Object(m.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.a.get("".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/react-notes",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).API_URL,"/notes"));case 2:t=e.sent,this.setState({notes:t.data});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(b.jsx)("div",{className:"row",children:this.state.notes.map((function(t){return Object(b.jsx)("div",{className:"col-md-4 p-2",children:Object(b.jsxs)("div",{className:"card",children:[Object(b.jsxs)("div",{className:"card-header d-flex justify-content-between ",children:[Object(b.jsx)("h4",{children:t.title}),Object(b.jsx)(o.b,{className:"btn btn-secondary",to:"/edit/".concat(t._id),children:"Edit"})]}),Object(b.jsxs)("div",{className:"card-body",children:[Object(b.jsx)("p",{children:t.content}),Object(b.jsx)("p",{children:t.author}),Object(b.jsx)("p",{children:Object(f.a)(t.date)})]}),Object(b.jsx)("div",{className:"card-footer",children:Object(b.jsx)("button",{className:"btn btn-danger",onClick:function(){return e.deleteNote(t._id)},children:"Delete"})})]})},t._id)}))})}}]),a}(n.Component),x=a(6),N=a(27),E=a.n(N),T=function(){var e=Object(i.g)(),t=Object(n.useState)([]),a=Object(x.a)(t,2),c=a[0],r=a[1],s=Object(n.useState)(""),o=Object(x.a)(s,2),u=o[0],l=o[1],d=Object(n.useState)(""),j=Object(x.a)(d,2),O=j[0],v=j[1],h=Object(n.useState)(""),f=Object(x.a)(h,2),_=f[0],N=f[1],T=Object(n.useState)(""),C=Object(x.a)(T,2),g=C[0],R=C[1],D=Object(n.useState)(!1),y=Object(x.a)(D,2),U=y[0],P=y[1];Object(n.useEffect)((function(){A()}),[]),Object(n.useEffect)((function(){e.id&&k(e.id)}),[e.id]);var A=function(){var e=Object(m.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.a.get("".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/react-notes",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).API_URL,"/users"));case 2:t=e.sent,r(t.data.map((function(e){return e.username})));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),k=function(){var e=Object(m.a)(p.a.mark((function e(t){var a,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.a.get("".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/react-notes",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).API_URL,"/notes/").concat(t));case 2:a=e.sent,n=E()(a.data.date).format("yyyy-MM-DD"),l(a.data.author),v(a.data.title),N(a.data.content),R(n),P(!0);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(e){switch(e.target.name){case"userSelected":l(e.target.value);break;case"title":v(e.target.value);break;case"content":N(e.target.value);break;case"date":R(e.target.value)}},H=function(){var t=Object(m.a)(p.a.mark((function t(a){var n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),n={title:O,content:_,date:g,author:u},!U){t.next=7;break}return t.next=5,S.a.put("".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/react-notes",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).API_URL,"/notes/").concat(e.id),n);case 5:t.next=9;break;case 7:return t.next=9,S.a.post("".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/react-notes",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).API_URL,"/notes"),n);case 9:window.location.href="/";case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(b.jsx)("div",{className:"col-md-6 offset-md-3",children:Object(b.jsxs)("div",{className:"card card-body",children:[Object(b.jsx)("h4",{children:"Create Note"}),Object(b.jsx)("div",{className:"mb-2",children:Object(b.jsx)("select",{className:"form-control",name:"userSelected",value:u,onChange:w,children:c.map((function(e){return Object(b.jsx)("option",{children:e},e)}))})}),Object(b.jsx)("div",{className:"mb-2",children:Object(b.jsx)("input",{className:"form-control",type:"text",placeholder:"Title",name:"title",value:O,onChange:w,required:!0})}),Object(b.jsx)("div",{className:"mb-2",children:Object(b.jsx)("textarea",{className:"form-control",type:"textarea",placeholder:"Content",name:"content",value:_,onChange:w,required:!0})}),Object(b.jsx)("div",{className:"mb-2",children:Object(b.jsx)("input",{className:"form-control",type:"date",name:"date",value:g,onChange:w})}),Object(b.jsx)("form",{onSubmit:H,children:Object(b.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Save"})})]})})},C=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={users:[],username:""},e.onChangeUsername=function(t){e.setState({username:t.target.value})},e.getUsers=Object(m.a)(p.a.mark((function t(){var a;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S.a.get("".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/react-notes",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).API_URL,"/users"));case 2:a=t.sent,e.setState({users:a.data});case 4:case"end":return t.stop()}}),t)}))),e.deleteUser=function(){var t=Object(m.a)(p.a.mark((function t(a){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(a),t.next=3,S.a.delete("".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/react-notes",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).API_URL,"/users/").concat(a));case 3:e.getUsers();case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.onSubmit=function(){var t=Object(m.a)(p.a.mark((function t(a){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.next=3,S.a.post("".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/react-notes",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).API_URL,"/users"),{username:e.state.username});case 3:e.setState({username:""}),e.getUsers();case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=Object(m.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.getUsers(),console.log(this.state.users);case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"col-md-4",children:Object(b.jsxs)("div",{className:"card card-body",children:[Object(b.jsx)("h3",{children:"Create New User"}),Object(b.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{className:"form-label"}),Object(b.jsx)("input",{type:"text",className:"form-control",value:this.state.username,onChange:this.onChangeUsername})]}),Object(b.jsx)("button",{type:"submit",className:"btn btn-primary mt-4",children:"Save"})]})]})}),Object(b.jsx)("div",{className:"col-md-4",children:Object(b.jsx)("ul",{className:"list-group",children:this.state.users.map((function(t){return Object(b.jsx)("li",{className:"list-group-item list-group-item-action",onDoubleClick:function(){return e.deleteUser(t._id)},children:t.username},t._id)}))})})]})}}]),a}(n.Component);var g=function(){return Object(b.jsxs)(o.a,{children:[Object(b.jsx)(O,{}),Object(b.jsx)("div",{className:"container p-4",children:Object(b.jsxs)(i.c,{children:[Object(b.jsx)(i.a,{path:"/",element:Object(b.jsx)(_,{})}),Object(b.jsx)(i.a,{path:"/edit/:id",element:Object(b.jsx)(T,{users:""})}),Object(b.jsx)(i.a,{path:"/create",element:Object(b.jsx)(T,{})}),Object(b.jsx)(i.a,{path:"/user",element:Object(b.jsx)(C,{})})]})})]})};s.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(g,{})}),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.b55e102b.chunk.js.map