(this.webpackJsonpproject=this.webpackJsonpproject||[]).push([[0],{160:function(e,t,a){"use strict";var n=a(405),r=a(410),l=a(395),o=a(402),i=a(0),s=a.n(i),c=function(e){return Object.keys(e.translations).map((function(t){return[t,e.translations[t]]})).map((function(e){return s.a.createElement("span",null,s.a.createElement("strong",null,e[0].toUpperCase())," ",e[1],s.a.createElement("br",null))}))};t.a=function(e){var t=Object(o.a)((function(e){return{modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{padding:"1.5em",backgroundColor:"white",border:"2px solid #000",minWidth:"400px",zIndex:"0"}}}))();return s.a.createElement(n.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:t.modal,open:e.openState,onClose:e.handleClose,closeAfterTransition:!0,BackdropComponent:r.a,BackdropProps:{timeout:500}},s.a.createElement(l.a,{in:e.openState},s.a.createElement("div",{className:t.paper},s.a.createElement("h2",{id:"transition-modal-title"}," ",e.country.name),s.a.createElement("p",null,s.a.createElement("img",{src:"https://flagcdn.com/h40/".concat(e.country.iso2.toLowerCase(),".png"),alt:"".concat(e.country.name," flag")})),s.a.createElement("h4",{className:t.language_list},"Translations:"),s.a.createElement(c,{translations:e.country.translations}))))}},164:function(e,t,a){e.exports=a.p+"static/media/spinner.17243084.gif"},199:function(e,t,a){e.exports=a(343)},204:function(e,t,a){},205:function(e,t,a){},343:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(55),o=a.n(l),i=(a(204),a(205),a(18)),s=a(90),c=a(37),u=a.n(c),m=a(402),d=function(){var e,t=Object(c.useIdentityContext)(),a=Object(m.a)((function(e){return{paper:{display:"flex",alignItems:"center",justifyContent:"center",padding:"1.5em",backgroundColor:"white",border:"2px solid #000",minWidth:"400px",zIndex:"0"}}}))();return r.a.createElement("div",{className:a.paper},!t.provisionalUser&&!t.user&&r.a.createElement("h1",null,"Welcome! Please login or sign up to continue."),t.provisionalUser&&r.a.createElement("h1",null,"Thanks for signing up! Check your email to confirm."),t.user&&r.a.createElement("h1",null,"Welcome back, ",null===(e=t.user.user_metadata)||void 0===e?void 0:e.full_name,"!"))},p=a(40),f=a.n(p),h=a(64),b=a(415),E=a(407),g=a(421),v=a(97),x=a(46),w={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4},y=function(e){var t=Object(i.f)(),a=Object(c.useIdentityContext)(),n=function(){return t.push("/")};return r.a.createElement(b.a,{sx:w},r.a.createElement(v.a,{initialValues:{email:"foo@example.com",password:"Password123!"},validationSchema:x.a().shape({email:x.b().email("Must be a valid email").max(255).required("Email is required"),password:x.b().min(8,"Must be at least 8 characters").max(255).required("Password is required")}),onSubmit:function(){var e=Object(h.a)(f.a.mark((function e(t,r){var l,o,i;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l=r.setErrors,o=r.setStatus,i=r.setSubmitting,e.prev=1,o({success:!0}),i(!1),e.next=6,a.login({email:t.email,password:t.password}).then((function(){console.log("Successfully submitted!"),n()}));case 6:e.next=14;break;case 8:e.prev=8,e.t0=e.catch(1),console.error(e.t0),o({success:!1}),l({submit:e.t0.message}),i(!1);case 14:return e.prev=14,n(),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[1,8,14,17]])})));return function(t,a){return e.apply(this,arguments)}}()},(function(e){var t=e.errors,a=e.values,n=e.handleSubmit,l=e.handleBlur,o=e.handleChange,i=e.isSubmitting,s=e.touched;return r.a.createElement("form",{noValidate:!0,onSubmit:n},r.a.createElement(E.a,{error:Boolean(s.email&&t.email),fullWidth:!0,helperText:s.email&&t.email,label:"Email Address",margin:"normal",name:"email",onBlur:l,onChange:o,type:"email",variant:"outlined",value:a.email}),r.a.createElement(E.a,{error:Boolean(s.password&&t.password),fullWidth:!0,helperText:s.password&&t.password,label:"Password",margin:"normal",name:"password",onBlur:l,onChange:o,type:"password",variant:"outlined",value:a.password}),r.a.createElement(g.a,{color:"primary",disabled:i,fullWidth:!0,size:"large",variant:"contained",type:"submit"},"Log In"))})))},C={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4},j=function(e){var t=Object(i.f)(),a=Object(c.useIdentityContext)();return r.a.createElement(b.a,{sx:C},r.a.createElement(v.a,{initialValues:{userName:"Thor Anderson",email:"foo@example.com",password:"Password123!"},validationSchema:x.a().shape({userName:x.b().min(4,"Must be at least 4 characters").max(50,"Must be less than 50 characters").required("User name is required"),email:x.b().email("Must be a valid email").max(255).required("Email is required"),password:x.b().min(8,"Must be at least 8 characters").max(255).required("Password is required")}),onSubmit:function(){var e=Object(h.a)(f.a.mark((function e(n,r){var l,o,i;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l=r.setErrors,o=r.setStatus,i=r.setSubmitting,e.prev=1,o({success:!0}),i(!1),e.next=6,a.signup({email:n.email,password:n.password,user_metadata:{full_name:n.userName}}).then((function(){t.push("/"),console.log("Successfully submitted!")}));case 6:e.next=14;break;case 8:e.prev=8,e.t0=e.catch(1),console.error(e.t0),o({success:!1}),l({submit:e.t0.message}),i(!1);case 14:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,a){return e.apply(this,arguments)}}()},(function(e){var t=e.errors,a=e.values,n=e.handleSubmit,l=e.handleBlur,o=e.handleChange,i=e.isSubmitting,s=e.touched;return r.a.createElement("form",{noValidate:!0,onSubmit:n},r.a.createElement(E.a,{error:Boolean(s.userName&&t.userName),fullWidth:!0,helperText:s.userName&&t.userName,label:"User Name",margin:"normal",name:"userName",onBlur:l,onChange:o,type:"text",variant:"outlined",value:a.userName}),r.a.createElement(E.a,{error:Boolean(s.email&&t.email),fullWidth:!0,helperText:s.email&&t.email,label:"Email Address",margin:"normal",name:"email",onBlur:l,onChange:o,type:"email",variant:"outlined",value:a.email}),r.a.createElement(E.a,{error:Boolean(s.password&&t.password),fullWidth:!0,helperText:s.password&&t.password,label:"Password",margin:"normal",name:"password",onBlur:l,onChange:o,type:"password",variant:"outlined",value:a.password}),r.a.createElement(g.a,{color:"primary",disabled:i,fullWidth:!0,size:"large",variant:"contained",type:"submit"},"Sign Up"))})))},S={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:600,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4},k=function(){return r.a.createElement(b.a,{sx:S},r.a.createElement("h1",null,"Page not found"))},O=a(160),B=a(92),N=a(13),I=a(177),W=a.n(I),P=a(176),q=a.n(P),T=a(178),z=a.n(T),L=a(175),M=a.n(L),U=a(174),_=a.n(U),A=a(420),V=a(406),J=a(400),F=a(411),G=a(412),D=a(413),H=a(414),K=a(422),Q=a(424),R=a(423),X=function(){Object(s.b)();var e,t,a=Object(i.f)(),r=Object(c.useIdentityContext)(),l=n.useState(!1),o=Object(N.a)(l,2),u=o[0],m=o[1],d=function(){m(!u)},p=function(e,t){a.push("/".concat(e)),t&&d()};return n.createElement(n.Fragment,null,n.createElement(b.a,{sx:{flexGrow:1,mb:"75px"}},n.createElement(K.a,{position:"fixed"},n.createElement(R.a,null,n.createElement(Q.a,{size:"large",edge:"start",color:"inherit","aria-label":"menu",sx:{mr:2},onClick:d},n.createElement(M.a,null)),n.createElement(Q.a,{size:"large","aria-label":"home button",color:"inherit",onClick:function(){return p("welcome",!1)}},n.createElement(q.a,null)),!r.user&&!r.provisionalUser&&n.createElement(G.a,{title:"Signup"},n.createElement(Q.a,{color:"inherit",onClick:function(){return p("signup",!1)}},n.createElement(W.a,null))),!r.user&&n.createElement(G.a,{title:"Login"},n.createElement(Q.a,{color:"inherit",onClick:function(){return p("login",!1)}},n.createElement(z.a,null))),r.user&&n.createElement(G.a,{title:"Logout"},n.createElement(Q.a,{color:"inherit",onClick:r.logout},n.createElement(D.a,{sx:{width:24,height:24}},null===(e=r.user)||void 0===e||null===(t=e.user_metadata)||void 0===t?void 0:t.full_name.slice(0,1))))))),n.createElement(H.a,{anchor:"left",open:u,onClose:d},n.createElement(b.a,{sx:{width:250},role:"presentation"},n.createElement(A.a,null,n.createElement(V.a,{button:!0,onClick:function(){return p("countries",!0)}},n.createElement(J.a,null,n.createElement(_.a,null)),n.createElement(F.a,{primary:"Countries"}))))))},Y=r.a.lazy((function(){return Promise.all([a.e(3),a.e(4)]).then(a.bind(null,439))})),Z={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},$=function(){return r.a.createElement("div",{id:"main-div",className:"App"},r.a.createElement(u.a,{url:"https://ammonroberts-dgm3790project4.netlify.app/"},r.a.createElement(s.a,null,r.a.createElement(X,null),r.a.createElement(n.Suspense,{fallback:r.a.createElement(b.a,{sx:Z},r.a.createElement(B.a,null))},r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/",exact:!0},r.a.createElement(d,null)),r.a.createElement(i.a,{path:"/countries"},r.a.createElement(Y,null)),r.a.createElement(i.a,{path:"/countries/:countryId",exact:!0},r.a.createElement(O.a,null)),r.a.createElement(i.a,{path:"/login"},r.a.createElement(y,null)),r.a.createElement(i.a,{path:"/signup"},r.a.createElement(j,null)),r.a.createElement(i.a,{path:"*"},r.a.createElement(k,null)))))))},ee=a(61);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ee.a,null,r.a.createElement($,null))),document.getElementById("root"))},90:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return f}));var n=a(40),r=a.n(n),l=a(64),o=a(13),i=a(0),s=a.n(i),c=a(163),u=a.n(c),m=a(92),d=Object(i.createContext)({countries:[]}),p=function(e){var t=Object(i.useState)([]),a=Object(o.a)(t,2),n=a[0],c=a[1],p=Object(i.useState)(!0),f=Object(o.a)(p,2),h=f[0],b=f[1];return Object(i.useEffect)((function(){(function(){var e=Object(l.a)(r.a.mark((function e(){var t,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/.netlify/functions/countries",e.prev=1,e.next=4,u.a.get("/.netlify/functions/countries");case 4:return t=e.sent,e.next=7,t.data;case 7:a=e.sent,c(a),b(!1),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(){return e.apply(this,arguments)}})()()}),[]),h?s.a.createElement(m.a,null):s.a.createElement(d.Provider,{value:n,isLoading:h},e.children)},f=function(){return Object(i.useContext)(d)}},92:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(164),o=a.n(l);t.a=function(){return r.a.createElement("div",{style:{color:"white",justifyItems:"center",alignItems:"center",display:"grid",alt:"Loading"}},r.a.createElement("img",{style:{maxWidth:"100px"},src:o.a}),r.a.createElement("h1",null,"Loading..."))}}},[[199,1,2]]]);
//# sourceMappingURL=main.b07f6cdd.chunk.js.map