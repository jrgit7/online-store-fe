(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t){e.exports={checkLoggedIn:function(){return!!sessionStorage.getItem("user")&&JSON.parse(sessionStorage.getItem("user"))},signOut:function(){sessionStorage.removeItem("user"),console.log("signed out")}}},47:function(e,t,a){e.exports=a(93)},74:function(e,t){},76:function(e,t){},93:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(17),l=a.n(c),s=a(2),o=a(3),i=a(5),m=a(4),u=a(6),d=a(95),p=a(96),b=a(9),h=a.n(b),E=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={items:[]},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;h.a.get("api/items").then(function(t){e.setState({items:t.data})}).catch(function(e){console.log(e)})}},{key:"render",value:function(){var e=this.state.items;return Array.isArray(e)&&e.length>0?r.a.createElement("div",null,r.a.createElement("main",{role:"main"},r.a.createElement("div",{className:"album py-5 bg-light"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},e.map(function(e){return r.a.createElement("div",{className:"col-md-4",key:e._id},r.a.createElement("div",{className:"card mb-4 shadow-sm"},r.a.createElement("a",{href:"/#/viewItem/"+e._id+"/#",className:"card-img-top-new"},r.a.createElement("img",{src:e.imageLocation,className:"card-img-top-new"})),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",null,e.name),r.a.createElement("br",null),r.a.createElement("p",{className:"card-text"},e.description,r.a.createElement("br",null),e.price,r.a.createElement("br",null),e.owner.name),r.a.createElement("div",{className:"d-flex justify-content-between align-items-center"},r.a.createElement("div",{className:"btn-group"},r.a.createElement("a",{href:"/#/viewItem/"+e._id,type:"button",className:"btn btn-sm btn-outline-secondary"},"View"))))))})))))):r.a.createElement("div",null)}}]),t}(r.a.Component),f=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(E,null))}}]),t}(n.Component),g=a(14),v=a(7),y=a(46),O=a.n(y),j=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={isLoggedIn:!1,name:"",email:"",picture:"",accessToken:""},a.responseFacebook=function(e){e.accessToken&&(a.setState({isLoggedIn:!0,name:e.name,email:e.email,picture:e.picture.data.url,accessToken:e.accessToken}),console.log(e),a.onLoginSuccess())},a.componentClicked={},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"onLoginSuccess",value:function(){var e=this;h.a.post("/api/auth/facebook/login",{access_token:this.state.accessToken}).then(function(t){console.log(t),sessionStorage.setItem("user",JSON.stringify({jwtToken:t.data.token,userId:t.data.userId,name:t.data.name})),e.props.setUser(t.data.name),e.props.history.push("/")}).catch(function(e){return console.log(e.response.data)})}},{key:"render",value:function(){var e;return e=r.a.createElement(O.a,{appId:"129047940440558",autoLoad:!1,fields:"name,email,picture",onClick:this.componentClicked,callback:this.responseFacebook,isMobile:!1,disableMobileRedirect:!0}),r.a.createElement("div",null,e)}}]),t}(n.Component),N=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={},a.onValuChange=a.onValuChange.bind(Object(v.a)(Object(v.a)(a))),a.onSubmit=a.onSubmit.bind(Object(v.a)(Object(v.a)(a))),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"onValuChange",value:function(e){this.setState(Object(g.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){var t=this;e.preventDefault(),h.a.post("/api/auth/login",this.state).then(function(e){console.log(e),sessionStorage.setItem("user",JSON.stringify({jwtToken:e.data.token,userId:e.data.userId,name:e.data.name})),t.props.setUser(e.data.name),t.props.history.push("/")}).catch(function(e){return console.log(e.response.data)})}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-9 col-md-7 col-lg-5 mx-auto"},r.a.createElement("div",{className:"card card-signin my-5"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title text-center"},"Sign In"),r.a.createElement("form",{className:"form-signin",onSubmit:this.onSubmit},r.a.createElement("label",{for:"inputEmail",className:"sr-only"},"Email address"),r.a.createElement("input",{type:"email",id:"inputEmail",className:"form-control",placeholder:"Email address",required:!0,autofocus:!0,name:"email",onChange:this.onValuChange}),r.a.createElement("br",null),r.a.createElement("label",{for:"inputPassword",className:"sr-only"},"Password"),r.a.createElement("input",{type:"password",id:"inputPassword",className:"form-control",placeholder:"Password",required:!0,name:"password",onChange:this.onValuChange}),r.a.createElement("br",null),r.a.createElement("div",{className:"checkbox"},r.a.createElement("label",null,r.a.createElement("input",{type:"checkbox",value:"remember-me"})," Remember me")),r.a.createElement("button",{className:"btn btn-lg btn-primary btn-block",type:"submit"},"Sign in"),r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("p",null,"Or"),r.a.createElement(j,{history:this.props.history,setUser:this.props.setUser}))))))))}}]),t}(n.Component),k=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(N,{history:this.props.history,setUser:this.props.setUser}))}}]),t}(n.Component),C=a(20),S=a.n(C),w=(a(69),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={},a.onValuChange=a.onValuChange.bind(Object(v.a)(Object(v.a)(a))),a.onSubmit=a.onSubmit.bind(Object(v.a)(Object(v.a)(a))),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"onValuChange",value:function(e){this.setState(Object(g.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){var t="";e.preventDefault();var a={name:this.state.firstName+" "+this.state.lastName,email:this.state.email,password:this.state.password};h.a.post("/api/auth/register",a).then(function(e){console.log(e),t="Verification e-mail has been sent to ".concat(e.data,"."),l.a.render(t,document.getElementById("message")),console.log(e.data)}).catch(function(e){t="Oops! There is a problem. ".concat(e.response.data.message,"."),l.a.render(t,document.getElementById("message")),console.log(e.response.data)})}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{class:"row"},r.a.createElement("div",{class:"col-sm-9 col-md-7 col-lg-5 mx-auto"},r.a.createElement("div",{class:"card card-signin my-5"},r.a.createElement("div",{class:"card-body"},r.a.createElement("h5",{class:"card-title text-center"},"Register"),r.a.createElement("form",{class:"form-signin",onSubmit:this.onSubmit},r.a.createElement("label",{for:"firstName",class:"sr-only"},"First name"),r.a.createElement("input",{type:"text",id:"firstName",class:"form-control",placeholder:"First name",required:!0,autofocus:!0,onChange:this.onValuChange,name:"firstName"}),r.a.createElement("br",null),r.a.createElement("label",{for:"lastName",class:"sr-only"},"Last name"),r.a.createElement("input",{type:"text",id:"lastName",class:"form-control",placeholder:"LastName",required:!0,autofocus:!0,onChange:this.onValuChange,name:"lastName"}),r.a.createElement("br",null),r.a.createElement("label",{for:"email",class:"sr-only"},"Email address"),r.a.createElement("input",{type:"email",id:"email",class:"form-control",name:"email",placeholder:"Email address",required:!0,autofocus:!0,onChange:this.onValuChange}),r.a.createElement("br",null),r.a.createElement("label",{for:"password",class:"sr-only"},"Password"),r.a.createElement("input",{type:"password",id:"password",class:"form-control",placeholder:"Password",name:"password",required:!0,onChange:this.onValuChange}),r.a.createElement("br",null),r.a.createElement("button",{class:"btn btn-lg btn-primary btn-block",type:"submit"},"Register"),r.a.createElement("br",null),r.a.createElement("div",{id:"message"})))))))}}]),t}(n.Component)),I=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(w,null))}}]),t}(n.Component),x=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"col-sm-9 col-md-6 col-lg-5"},r.a.createElement("div",{className:"card card-signin my-5"},r.a.createElement("img",{src:this.props.imageLocation,className:"card-img-top-new"})))}}]),t}(n.Component),V=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).onDeleteClick=a.onDeleteClick.bind(Object(v.a)(Object(v.a)(a))),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){}},{key:"displayEdit",value:function(){var e=sessionStorage.getItem("user"),t=this.props.item;return e&&JSON.parse(e).userId===t.owner._id?r.a.createElement("a",{href:"/#/editItem/"+t._id,className:"btn btn-lg btn-secondary btn-block"},"Edit"):r.a.createElement("button",{className:"btn btn-lg btn-primary btn-block",type:"submit"},"Contact the seller")}},{key:"onDeleteClick",value:function(e){e.preventDefault(),h.a.delete("/api/items/"+this.state._id,{headers:{"x-access-token":JSON.parse(sessionStorage.getItem("user")).jwtToken}}).then(function(e){console.log(e.data)}).catch(function(e){console.log(e.response.data)})}},{key:"render",value:function(){var e=this.props.item;return r.a.createElement("div",{className:"col-sm-9 col-md-6 col-lg-5"},r.a.createElement("div",{className:"card card-signin my-5"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title text-center"},e.name),r.a.createElement("label",null,e.description),r.a.createElement("br",null),r.a.createElement("label",null," ","LKR ",r.a.createElement("span",null),e.price),r.a.createElement("br",null),r.a.createElement("label",null," ","From ",r.a.createElement("span",null),e.owner.name),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{id:"action"},this.displayEdit()))))}}]),t}(n.Component),D=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={"":"",owner:{name:"",id:""}},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;h.a.get("api/items/"+this.props.match.params.id).then(function(t){e.setState(t.data)}).catch(function(e){console.log(e)})}},{key:"render",value:function(){return console.log(this.state.owner.name),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(x,{imageLocation:this.state.imageLocation}),r.a.createElement(V,{item:this.state})))}}]),t}(n.Component),L=a(94),U=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={name:"",description:"",price:"",file:""},a.onValueChange=a.onValueChange.bind(Object(v.a)(Object(v.a)(a))),a.onSubmit=a.onSubmit.bind(Object(v.a)(Object(v.a)(a))),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"onValueChange",value:function(e){switch(e.target.name){case"file":this.setState({file:e.target.files[0]});break;default:this.setState(Object(g.a)({},e.target.name,e.target.value))}}},{key:"onSubmit",value:function(e){var t=this;e.preventDefault();var a=new FormData,n=this.state,r=n.name,c=n.description,l=n.price,s=n.file;a.append("name",r),a.append("description",c),a.append("price",l),a.append("file",s),console.log(this.state),h.a.post("/api/items",a,{headers:{"x-access-token":JSON.parse(sessionStorage.getItem("user")).jwtToken}}).then(function(e){console.log(e),t.props.history.push("/viewItem/"+e.data._id)}).catch(function(e){return console.log(e)})}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-9 col-md-7 col-lg-5 mx-auto"},r.a.createElement("div",{className:"card card-signin my-5"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title text-center"},"Add item"),r.a.createElement("form",{className:"form-signin",onSubmit:this.onSubmit,enctype:"multipart/form-data"},r.a.createElement("label",{for:"name",className:"sr-only"},"Name"),r.a.createElement("input",{type:"text",id:"name",className:"form-control",placeholder:"Item name",required:!0,autofocus:!0,name:"name",onChange:this.onValueChange}),r.a.createElement("br",null),r.a.createElement("label",{for:"description",className:"sr-only"},"Description"),r.a.createElement("input",{type:"text",id:"description",className:"form-control",placeholder:"Item description",required:!0,autofocus:!0,name:"description",onChange:this.onValueChange}),r.a.createElement("br",null),r.a.createElement("label",{for:"price",className:"sr-only"},"Price (LKR)"),r.a.createElement("input",{type:"text",id:"price",className:"form-control",placeholder:"Item price",required:!0,autofocus:!0,name:"price",onChange:this.onValueChange}),r.a.createElement("br",null),r.a.createElement("input",{type:"file",name:"file",accept:"image/*",id:"file",onChange:this.onValueChange}),r.a.createElement("button",{className:"btn btn-lg btn-primary btn-block",type:"submit"},"Add item")))))))}}]),t}(n.Component),q=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return S.a.checkLoggedIn()?r.a.createElement("div",null,r.a.createElement(U,{history:this.props.history})):r.a.createElement(L.a,{to:{pathname:"/"}})}}]),t}(n.Component),T=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={},a.onValuChange=a.onValuChange.bind(Object(v.a)(Object(v.a)(a))),a.onSubmit=a.onSubmit.bind(Object(v.a)(Object(v.a)(a))),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"onValuChange",value:function(e){this.setState(Object(g.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){var t=this;e.preventDefault(),console.log(this.state),h.a.put("/api/items/"+this.props.itemId,this.state,{headers:{"x-access-token":JSON.parse(sessionStorage.getItem("user")).jwtToken}}).then(function(e){console.log(e),t.props.history.push("/viewItem/"+e.data._id)}).catch(function(e){return console.log(e)})}},{key:"componentDidMount",value:function(){var e=this;h.a.get("api/items/"+this.props.itemId).then(function(t){e.setState(t.data),console.log(e.state)}).catch(function(e){console.log(e)})}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-9 col-md-7 col-lg-5 mx-auto"},r.a.createElement("div",{className:"card card-signin my-5"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title text-center"},"Edit item"),r.a.createElement("form",{className:"form-signin",onSubmit:this.onSubmit},r.a.createElement("label",{for:"name",className:"sr-only"},"Name"),r.a.createElement("input",{type:"text",id:"name",className:"form-control",placeholder:"Item name",required:!0,autofocus:!0,name:"name",onChange:this.onValuChange,value:this.state.name}),r.a.createElement("br",null),r.a.createElement("label",{for:"description",className:"sr-only"},"Description"),r.a.createElement("input",{type:"text",id:"description",className:"form-control",placeholder:"Item description",required:!0,autofocus:!0,name:"description",onChange:this.onValuChange,value:this.state.description}),r.a.createElement("br",null),r.a.createElement("label",{for:"price",className:"sr-only"},"Price (LKR)"),r.a.createElement("input",{type:"text",id:"price",className:"form-control",placeholder:"Item price",required:!0,autofocus:!0,name:"price",onChange:this.onValuChange,value:this.state.price}),r.a.createElement("br",null),r.a.createElement("button",{className:"btn btn-lg btn-primary btn-block",type:"submit"},"Save changes")))))))}}]),t}(n.Component),J=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return S.a.checkLoggedIn()?r.a.createElement("div",null,r.a.createElement(T,{history:this.props.history,itemId:this.props.match.params.id})):r.a.createElement(L.a,{to:{pathname:"/"}})}}]),t}(n.Component),M=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar navbar-expand-md navbar-dark bg-dark"},r.a.createElement("div",{className:"navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"#"},"Contact us")))),r.a.createElement("div",{className:"mx-auto order-0"},r.a.createElement("a",{className:"navbar-brand mx-auto",href:"#"},"Shop"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":".dual-collapse2"},r.a.createElement("span",{className:"navbar-toggler-icon"}))),r.a.createElement("div",{className:"navbar-collapse collapse w-100 order-3 dual-collapse2"},this.displayNavs())))}},{key:"displayNavs",value:function(){return this.props.userName?r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("li",null,r.a.createElement("a",{href:"#",className:"nav-link"},this.props.userName)),r.a.createElement("li",null,r.a.createElement("a",{href:"/#/addItem",className:"btn btn-success",style:{marginLeft:"4px",marginRight:"4px"}},"Add item")),r.a.createElement("li",null,r.a.createElement("button",{onClick:this.props.removeUser,className:"btn btn-outline-light"},"Sign out"))):r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"#/login"},"Login")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"#/register"},"Register")))}}]),t}(n.Component),A=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("footer",{className:"text-muted"},r.a.createElement("div",{className:"container"},r.a.createElement("p",{className:"float-right"},r.a.createElement("a",{href:"#"},"Back to top")),r.a.createElement("p",null,"Develped by \xa9 AW"))))}}]),t}(r.a.Component),R=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={name:""},a.setUser=function(e){a.setState({name:e})},a.removeUser=function(){a.setState({name:""}),Object(C.signOut)()},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){sessionStorage.getItem("user")&&this.setState({name:JSON.parse(sessionStorage.getItem("user")).name})}},{key:"render",value:function(){var e=this;return r.a.createElement(d.a,null,r.a.createElement("div",null,r.a.createElement(M,{userName:this.state.name,removeUser:this.removeUser}),r.a.createElement("div",{className:"content"},r.a.createElement(p.a,{exact:!0,path:"/",component:f}),r.a.createElement(p.a,{path:"/login/",render:function(t){return r.a.createElement(k,Object.assign({},t,{setUser:e.setUser}))}}),r.a.createElement(p.a,{path:"/register",component:I}),r.a.createElement(p.a,{path:"/viewItem/:id",component:D}),r.a.createElement(p.a,{path:"/addItem/",component:q}),r.a.createElement(p.a,{path:"/editItem/:id",component:J})),r.a.createElement(A,null)))}}]),t}(n.Component);l.a.render(r.a.createElement(R,null),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.4d5829e4.chunk.js.map