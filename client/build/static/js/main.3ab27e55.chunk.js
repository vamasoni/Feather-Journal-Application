(this.webpackJsonpmern=this.webpackJsonpmern||[]).push([[0],{179:function(e,t,a){},214:function(e,t){e.exports="data:image/png;base64,UklGRmQCAABXRUJQVlA4TFgCAAAvP8APEG/jKpJsV5l77nsgBhGowP9/zpm7Y8NxJNuqMufh7rAl/3wsiM/KeXKPg0iSFKmOxZyQ83D+I/iZYabcxratKuu7EjGktEJOA9RIM94GQ+TwJADn7pK10pIA6fF8EvzrH1YDz+8HSETom39EcSaMkb7zaNGT6ztwBf6QPVADBUETygg+SCwKDkDANLj4IW7ARwhg0WSEMghLyFVzsYfio832zFD1kWdoHpVsKjtU/B69VZ/X5FUCn1/kW0nr+jjVh90ahoIAFeI/wXLc6S4xQo/K93zfpWURLD68N6ai2Ma0RdLkzz3W8V+U/gpZft1Ol9xElvTVpxwEEYbg9/wSjBywbBpFoIQwbLJKhLCOQVHprhSlTTd2q0sfFNBubTLkrBknaxuxs7Ft28b//z49Z6q6Yic1Ef134DaSIjnLcLf0CsML031j072c2gbultLq97C3TkZb2MPBDhkZDzPnZaQ9zJyTERPij3ldCaH4bK9rcmF9Qhjflkh9XWvzUygzm9tMZZv/ZzHLm0yJ/6dhC6wYE0axoOuag60r9vqFoX0k6Lo2YFuKswFh+BTvbFAYUV0XjBVXi8LSFZ6+LKzoeOcXdz2l28tzvL/Lm1LvNZ/jHV6qOsDRvi683RPh+A9H+7rweGf/6G9P38alfV1IlD1Rq+TBLsl7eozkvVE4K5Rc8n8g48/DzOXyf/CacelKDvk/+KLw3ZmNxFlhNmp2WLWJFtfAwm7SgcsCsKyn0mYhO8Ne5cnBukIe0qKdBrj2CCVfiwFTX30hXiQpmWp+MLwd+wc="},224:function(e,t,a){e.exports=a(441)},230:function(e,t,a){},317:function(e,t,a){},335:function(e,t,a){},337:function(e,t,a){},338:function(e,t,a){},339:function(e,t,a){},340:function(e,t,a){},437:function(e,t,a){},438:function(e,t,a){},439:function(e,t,a){},441:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(14),c=a.n(l),o=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function i(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}a(229),a(230);var s=a(18),u=a.n(s),m=a(25),d=a(15),p=a(28),f=a(20),g=a(86),E=a(87),b=a(105),h=a(104),v=a(472),y=a(180),x=a(218),w=a(120),j={lightSpeedIn:{animation:"x 10s",animationName:x.a.keyframes(y.lightSpeedIn,"lightSpeedIn")}},O=function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(){return Object(g.a)(this,a),t.apply(this,arguments)}return Object(E.a)(a,[{key:"render",value:function(){return r.a.createElement(w.a,null,r.a.createElement("div",{className:"animation-center",style:j.lightSpeedIn},r.a.createElement("h1",null,"Allow your words to escape you.")))}}]),a}(r.a.Component),k=a(45),N=a.n(k),S=(a(317),function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(){return Object(g.a)(this,a),t.apply(this,arguments)}return Object(E.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{className:"JumbotronStyle",fluid:"true",style:{background:"#f5f5f5",borderRadius:"5px",paddingLeft:"15px",paddingRight:"15px",paddingTop:"40px",paddingBottom:"65px",margin:"0px"}},r.a.createElement("div",null,r.a.createElement("img",{className:"logo",src:N.a,alt:"logo"}),r.a.createElement(p.b,{className:"btn btn-outline-dark btn-md float-right custom-btn",to:"/login"},"Login"))),r.a.createElement("div",{className:"landingImg"},r.a.createElement(O,null)))}}]),a}(n.Component)),C=Object(n.createContext)(null),F=a(37),T=a.n(F),D=function(e){return T.a.post("/isValidToken",null,{headers:{"x-auth-token":e}})},I=function(e){return T.a.post("/",{headers:{"x-auth-token":e}})},L=function(e){return T.a.post("/api/login",e)},B=function(e){return T.a.post("/api/signup",e)},J=function(e,t){return T.a.get("/api/notes/entrydate/"+e,{params:{userId:t}})},z=function(e){return T.a.post("/api/notes",e)},A=function(e,t){return T.a.get("/api/notes/"+e,{params:{userId:t}})},R=function(e,t,a){return T.a.put("/api/notes/"+e,a,{params:{userId:t}})},W=function(e,t,a){return console.log(" user id : "+a+"month :"+e+"year :"+t),T.a.get("/api/notes",{params:{month:e,year:t,userId:a}})},P=function(e,t){return T.a.delete("/api/notes/"+e,{params:{userId:t}})};var Y=function(e){return r.a.createElement("div",{role:"alert",className:"alert alert-".concat(e.type," alert-dismissible fade show"),style:{width:"100%",margin:"0 auto",marginTop:18}},e.message,r.a.createElement("button",{type:"button",className:"close","data-dismiss":"alert","aria-label":"Close",onClick:e.clearError},r.a.createElement("span",{"aria-hidden":"true"},"\xd7")))},V=a(473),K=a(477),q=a(478),U=a(490),M=a(442),Z=a(485),X=a(487),H=a(479),Q=a(480),G=a(488),_=a(100),$=a.n(_),ee=(a(335),Object(V.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{background:"linear-gradient(45deg, #556270 30%, #ff6b6b 90%)",margin:e.spacing(3,0,2)}}})));function te(){var e=ee(),t=Object(n.useState)(),a=Object(d.a)(t,2),l=a[0],c=a[1],o=Object(n.useState)(),i=Object(d.a)(o,2),s=i[0],p=i[1],g=Object(n.useState)(),E=Object(d.a)(g,2),b=E[0],h=E[1],y=Object(n.useContext)(C).setUserData,x=Object(f.f)(),w=function(){var e=Object(m.a)(u.a.mark((function e(t){var a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,a={email:l,password:s},e.next=5,L(a);case 5:n=e.sent,y({token:n.data.token,user:n.data.user}),localStorage.setItem("auth-token",n.data.token),localStorage.setItem("user",n.data.user),x.push("/journal"),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),e.t0.response.data.msg&&h(e.t0.response.data.msg);case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"background-img"},r.a.createElement(v.a,{className:"JumbotronStyle",fluid:"true",style:{background:"#f5f5f5",borderRadius:"5px",paddingLeft:"15px",paddingRight:"15px",paddingTop:"40px",paddingBottom:"65px",margin:"0px"}},r.a.createElement("div",null,r.a.createElement("img",{className:"logo",src:N.a,alt:"logo"}),r.a.createElement("button",{className:"btn btn-outline-dark btn-md float-right custom-btn",onClick:function(){x.push("/")}},r.a.createElement($.a,{style:{fontSize:25}})))),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"d-flex justify-content-center my-auto"},r.a.createElement(G.a,{className:"shadow z-depth-8 card-border",style:{width:"25rem"}},r.a.createElement(G.a.Body,null,r.a.createElement(K.a,{component:"main",maxWidth:"xs"},r.a.createElement(q.a,null),r.a.createElement("div",{className:e.paper},r.a.createElement(U.a,{className:e.avatar}),r.a.createElement(M.a,{component:"h1",variant:"h5"},"Login"),b&&r.a.createElement(Y,{message:b,type:"danger",clearError:function(){return h(void 0)}}),r.a.createElement("form",{className:e.form,onSubmit:w,noValidate:!0},r.a.createElement(Z.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,onChange:function(e){return c(e.target.value)}}),r.a.createElement(Z.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:function(e){return p(e.target.value)}}),r.a.createElement(X.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit},"Login"),r.a.createElement(H.a,{container:!0},r.a.createElement(H.a,{item:!0,xs:!0}),r.a.createElement(H.a,{item:!0},r.a.createElement(Q.a,{href:"/signup",variant:"body2"},"Don't have an account? Sign Up")))))))))))}a(337);var ae=Object(V.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2),background:"linear-gradient(45deg, #556270 30%, #ff6b6b 90%)"}}}));function ne(){var e=ae(),t=Object(n.useState)(),a=Object(d.a)(t,2),l=a[0],c=a[1],o=Object(n.useState)(),i=Object(d.a)(o,2),s=i[0],p=i[1],g=Object(n.useState)(),E=Object(d.a)(g,2),b=E[0],h=E[1],y=Object(n.useState)(),x=Object(d.a)(y,2),w=x[0],j=x[1],O=Object(n.useState)(),k=Object(d.a)(O,2),S=k[0],C=k[1],F=Object(n.useState)(),T=Object(d.a)(F,2),D=T[0],I=T[1],L=Object(f.f)(),J=function(){var e=Object(m.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,a={firstname:l,lastname:s,email:b,password:w,confirmPassword:S},e.next=5,B(a);case 5:L.push("/login"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),e.t0.response.data.msg&&I(e.t0.response.data.msg);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"background-img"},r.a.createElement(v.a,{className:"JumbotronStyle",fluid:"true",style:{background:"#f5f5f5",borderRadius:"5px",paddingLeft:"15px",paddingRight:"15px",paddingTop:"40px",paddingBottom:"65px",margin:"0px"}},r.a.createElement("div",null,r.a.createElement("img",{className:"signuplogo",src:N.a,alt:"logo"}),r.a.createElement("button",{className:"btn btn-outline-dark btn-md float-right custom-btn",onClick:function(){L.push("/")}},r.a.createElement($.a,{style:{fontSize:25}})))),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"d-flex justify-content-center my-auto"},r.a.createElement(G.a,{className:"shadow z-depth-8 card-border mx-2 mb-3",style:{width:"30rem"}},r.a.createElement(G.a.Body,null,r.a.createElement(K.a,{component:"main",maxWidth:"xs"},r.a.createElement(q.a,null),r.a.createElement("div",{className:e.paper},r.a.createElement(U.a,{className:e.avatar}),r.a.createElement(M.a,{component:"h1",variant:"h5"},"Sign Up"),D&&r.a.createElement(Y,{message:D,type:"danger",clearError:function(){return I(void 0)}}),r.a.createElement("form",{className:e.form,onSubmit:J,noValidate:!0},r.a.createElement(H.a,{container:!0,spacing:2},r.a.createElement(H.a,{item:!0,xs:12,sm:6},r.a.createElement(Z.a,{autoComplete:"fname",name:"firstname",variant:"outlined",required:!0,fullWidth:!0,id:"firstName",label:"First Name",autoFocus:!0,onChange:function(e){return c(e.target.value)}})),r.a.createElement(H.a,{item:!0,xs:12,sm:6},r.a.createElement(Z.a,{variant:"outlined",required:!0,fullWidth:!0,id:"lastName",label:"Last Name",name:"lastname",autoComplete:"lname",onChange:function(e){return p(e.target.value)}})),r.a.createElement(H.a,{item:!0,xs:12},r.a.createElement(Z.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",onChange:function(e){return h(e.target.value)}})),r.a.createElement(H.a,{item:!0,xs:12},r.a.createElement(Z.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:function(e){return j(e.target.value)}})),r.a.createElement(H.a,{item:!0,xs:12},r.a.createElement(Z.a,{variant:"outlined",required:!0,fullWidth:!0,name:"confirmPassword",label:"Confirm Password",type:"password",id:"confirmPassword",autoComplete:"current-password",onChange:function(e){return C(e.target.value)}}))),r.a.createElement(X.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit},"Sign Up"),r.a.createElement(H.a,{container:!0,justify:"flex-end"},r.a.createElement(H.a,{item:!0},r.a.createElement(Q.a,{href:"/login",variant:"body2"},"Already have an account? Login")))))))))))}a(338);function re(){var e=Object(n.useContext)(C),t=e.userData,a=e.setUserData,l=Object(f.f)();return r.a.createElement("div",null,t.user?r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{className:" btn btn-outline-dark btn-md mr-2 float-right custom-btn",onClick:function(){a({token:void 0,user:void 0}),localStorage.setItem("auth-token",""),localStorage.setItem("user",""),l.push("/")}},"Logout"),r.a.createElement("button",{className:" btn btn-outline-dark btn-md mr-2 float-right custom-btn",onClick:function(){l.push("/searchresults")}},"Search")):r.a.createElement(r.a.Fragment,null))}a(339);var le=function(){return r.a.createElement(v.a,{className:"JumbotronStyle",fluid:"true",style:{background:"#f5f5f5",borderRadius:"5px",paddingLeft:"10px",paddingRight:"10px",paddingTop:"40px",paddingBottom:"65px",margin:"0px"}},r.a.createElement("div",null,r.a.createElement("img",{className:"logo",src:N.a,alt:"logo"})),r.a.createElement("div",null,r.a.createElement(re,null)))};a(340);function ce(e){return r.a.createElement("button",Object.assign({},e,{style:{float:"center",marginBottom:0,marginTop:10,marginRight:5},className:"btn btnColor"}),e.children)}var oe=a(212),ie=a(40),se=a(63),ue=a.n(se),me=a(481),de=a(482),pe=a(483),fe=(a(179),a(437),Object(V.a)((function(e){return{container:{display:"flex",flexWrap:"wrap"},calendarTextField:{width:"100%",paddingLeft:"0",margin:"5"},titleTextField:{width:"70ch",paddingRight:"0",margin:"5"}}})));function ge(e){var t,a=fe(),l=Object(n.useContext)(C).userData,c=e.editId?e.editId:"",o=ue()().format("YYYY MM DD").split(" ").join("-"),i=ie.EditorState.createEmpty(),s=Object(n.useState)(""),p=Object(d.a)(s,2),f=p[0],g=p[1],E=Object(n.useState)({editorState:i}),b=Object(d.a)(E,2),h=b[0],v=b[1],y=Object(n.useState)(),x=Object(d.a)(y,2),w=x[0],j=x[1],O=Object(n.useState)(),k=Object(d.a)(O,2),N=k[0],S=k[1];function F(){return(F=Object(m.a)(u.a.mark((function e(){var a,n,r,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""===c){e.next=8;break}return e.next=3,A(c,l.user.id);case 3:a=e.sent,t=a.data.entryDate.substring(0,10),j(t),e.next=10;break;case 8:t=ue()().format("YYYY MM DD").split(" ").join("-"),j(t);case 10:return e.next=12,J(t,l.user.id);case 12:n=e.sent,"{}"!==JSON.stringify(n.data)&&(g(n.data.title),r=Object(ie.convertFromRaw)(JSON.parse(n.data.body)),o=ie.EditorState.createWithContent(r),v({editorState:o}));case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(n.useEffect)((function(){!function(){F.apply(this,arguments)}()}),[]);var T=function(){var e=Object(m.a)(u.a.mark((function e(t){var a,n,r,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g(""),v({editorState:ie.EditorState.createEmpty()}),a=(a=t.target.value).split(" ").join("-"),j(a),e.next=7,J(a,l.user.id);case 7:n=e.sent,"{}"!==JSON.stringify(n.data)&&(g(n.data.title),r=Object(ie.convertFromRaw)(JSON.parse(n.data.body)),c=ie.EditorState.createWithContent(r),v({editorState:c}));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D=function(){var e=Object(m.a)(u.a.mark((function e(t){var a,n,r,c,o,i,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),""!==f&&""!==h){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,J(w,l.user.id);case 5:if(a=e.sent,"{}"!==JSON.stringify(a.data)){e.next=14;break}return n={title:f,body:JSON.stringify(Object(ie.convertToRaw)(h.editorState.getCurrentContent())),entryDate:w,userId:l.user.id},e.next=10,z(n);case 10:r=e.sent,JSON.stringify(r)!=={}&&S("Journal Entry Created successfully!!"),e.next=21;break;case 14:return c={title:f,body:JSON.stringify(Object(ie.convertToRaw)(h.editorState.getCurrentContent()))},o=a.data._id,i=l.user.id,e.next=19,R(o,i,c);case 19:s=e.sent,JSON.stringify(s)!=={}&&S("Journal Entry Updated!! ");case 21:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(G.a,{className:"shadow z-depth-5 card-border my-2 mx-2"},r.a.createElement(G.a.Body,null,r.a.createElement(G.a.Title,null,r.a.createElement("div",{className:"text-center"},r.a.createElement("h2",{className:"headingText"},"Enter your Journal Entry"))),r.a.createElement("br",null),r.a.createElement(G.a.Text,null,r.a.createElement(me.a,{fluid:"md"},r.a.createElement("div",null,r.a.createElement(de.a,null,r.a.createElement(pe.a,{md:8,s:6,className:"pr-2 mb-2"},r.a.createElement("form",{className:a.container,noValidate:!0,autoComplete:"off"},r.a.createElement(Z.a,{id:"outlined-basic",label:"Title",variant:"outlined",name:"title",value:f,className:a.titleTextField,onChange:function(e){return g(e.target.value)}}))),r.a.createElement(pe.a,{md:4,s:6,className:"pr-2 mb-2"},r.a.createElement("form",{className:a.root,noValidate:!0,autoComplete:"off"},r.a.createElement(Z.a,{id:"date",value:w,label:"Date",type:"date",variant:"outlined",className:a.calendarTextField,InputProps:{inputProps:{max:o}},onChange:T,InputLabelProps:{shrink:!0}})))),r.a.createElement("br",null),r.a.createElement("div",{className:"form-group"},r.a.createElement(oe.Editor,{editorState:h.editorState,onEditorStateChange:function(e){v({editorState:e})},wrapperClassName:"wrapper-class",editorClassName:"editor-class",toolbarClassName:"toolbar-class"})),r.a.createElement("div",{className:"text-center"},r.a.createElement(ce,{onClick:D},"Submit"))),r.a.createElement("br",null),N&&r.a.createElement(Y,{message:N,type:"success",clearError:function(){return S(void 0)}}))))))}a(438);function Ee(e){var t=Object(n.useContext)(C).userData,a=e.location.state?e.location.state.noteId:"";return r.a.createElement(r.a.Fragment,null,r.a.createElement(le,null),t.user?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"background-img"},r.a.createElement(me.a,{fluid:"xs"},r.a.createElement(de.a,null,r.a.createElement(pe.a,{md:2}),r.a.createElement(pe.a,{md:8},r.a.createElement(ge,{editId:a})),r.a.createElement(pe.a,{md:2}))))):r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"text-center"},r.a.createElement(p.b,{to:"/"},"Please login"))))}var be=a(213),he=a.n(be),ve=a(123),ye=a(214),xe=a.n(ye),we=a(216),je=a.n(we),Oe=a(484),ke=a(489),Ne=a(486),Se=a(217),Ce=a.n(Se);a(439);function Fe(){var e=Object(n.useContext)(C).userData,t=ue()().format("YYYY"),a=ue()().subtract(10,"years").calendar().substring(6,10),l=Object(n.useState)(void 0),c=Object(d.a)(l,2),o=c[0],i=c[1],s=Object(n.useState)(void 0),f=Object(d.a)(s,2),g=f[0],E=f[1],b=Object(n.useState)([]),h=Object(d.a)(b,2),v=h[0],y=h[1],x=Object(n.useState)(),w=Object(d.a)(x,2),j=w[0],O=w[1],k=Object(n.useState)(!1),N=Object(d.a)(k,2),S=N[0],F=N[1],T=Object(n.useState)(void 0),D=Object(d.a)(T,2),I=D[0],L=D[1],B=Object(n.useState)(""),J=Object(d.a)(B,2),z=J[0],R=J[1],V=function(){var t=Object(m.a)(u.a.mark((function t(){var a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(isNaN(g)||isNaN(o))&&O("Select both month and year"),t.next=3,W(g,o,e.user.id);case 3:a=t.sent,y(a.data);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),K=function(){var t=Object(m.a)(u.a.mark((function t(a){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,P(a,e.user.id);case 2:t.sent,n=v.filter((function(e){return a!==e._id})),y(n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),q=function(){return F(!1)},U=function(){var t=Object(m.a)(u.a.mark((function t(a){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return F(!0),t.next=3,A(a,e.user.id);case 3:n=t.sent,L(n.data.title),R(n.data.body);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement(le,null),r.a.createElement("div",{className:"background-img"},r.a.createElement("br",null),e.user?r.a.createElement(r.a.Fragment,null,r.a.createElement(de.a,null,r.a.createElement(pe.a,{md:6},r.a.createElement(p.b,{to:"/journal",className:"ml-2"},"\u2190 Back to Journal Entry Page")),r.a.createElement(pe.a,{md:6},r.a.createElement("div",{className:"text-right mr-2"},r.a.createElement(ve.MonthPicker,{defaultValue:"select month",short:!0,endYearGiven:!0,year:o,required:!0,value:g,onChange:function(e){E(e)},id:"month",name:"month",classes:"classes btn btn-secondary dropdown-toggle ml-2 mr-1 mt-2",optionClasses:"option classes"}),r.a.createElement(ve.YearPicker,{defaultValue:"select year",start:a,end:t,reverse:!0,required:!0,value:o,onChange:function(e){i(e)},id:"year",name:"year",classes:"classes btn btn-secondary dropdown-toggle mr-1 mt-2",optionClasses:"option classes"}),r.a.createElement(ce,{className:"btn btn-secondary",onClick:V},"Search")))),r.a.createElement("br",null),r.a.createElement(me.a,{fluid:"xs"},r.a.createElement(de.a,null,r.a.createElement(pe.a,{md:2}),r.a.createElement(pe.a,{md:8},r.a.createElement("br",null),r.a.createElement("div",{className:"d-flex justify-content-center"},j&&r.a.createElement(Y,{message:j,type:"danger",clearError:function(){return O(void 0)},style:{width:"50%",textAlign:"center"}}),v.length?r.a.createElement(r.a.Fragment,null,r.a.createElement(me.a,null,r.a.createElement(G.a,{className:"shadow z-depth-8 card-border mx-1 my-1"},r.a.createElement(G.a.Body,null,r.a.createElement(de.a,null,r.a.createElement(pe.a,{md:12},r.a.createElement("div",{className:"text-center"},r.a.createElement("h2",{className:"headingText"},"Search Results")))),r.a.createElement("br",null),r.a.createElement(de.a,null,r.a.createElement(pe.a,{md:12},r.a.createElement(Oe.a,{striped:!0,hover:!0,responsive:"sm"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{style:{width:"20%",textAlign:"center"}},"Date"),r.a.createElement("th",{style:{width:"40%",textAlign:"center"}},"Title"),r.a.createElement("th",{style:{width:"10%"}}),r.a.createElement("th",{style:{width:"10%"}}),r.a.createElement("th",{style:{width:"10%"}}))),r.a.createElement("tbody",null,v.map((function(e){return r.a.createElement("tr",{key:e._id},r.a.createElement("td",{"data-th":"Date",style:{width:"20%",textAlign:"center"}},r.a.createElement("img",{src:xe.a,alt:"Recent\xa0Calendar"}),e.entryDate.substring(0,10)),r.a.createElement("td",{"data-th":"Title",className:"table-data",style:{width:"40%",textAlign:"center"}},e.title),r.a.createElement("td",null,r.a.createElement(ke.a,{variant:"secondary",onClick:function(){return U(e._id)}},"view"),r.a.createElement(Ne.a,{numberanimation:"true",scrollable:"true",backdropClassName:"modal-backdrop",size:"lg",show:S,onHide:q},r.a.createElement(Ne.a.Header,{closeButton:!0},r.a.createElement(Ne.a.Title,null,I)),r.a.createElement(Ne.a.Body,null,z.length>0&&r.a.createElement("div",{dangerouslySetInnerHTML:{__html:he()(JSON.parse(z))}})))),r.a.createElement("td",null,r.a.createElement(ke.a,{variant:"secondary"},r.a.createElement(p.b,{to:{pathname:"/journal",state:{noteId:e._id}},style:{color:"white"}},r.a.createElement(je.a,null)))),r.a.createElement("td",null,r.a.createElement(ke.a,{variant:"danger",onClick:function(){return K(e._id)}},r.a.createElement(Ce.a,null))))})))))))))):r.a.createElement(r.a.Fragment,null," "))),r.a.createElement(pe.a,{md:2})))):r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"text-center"},r.a.createElement(p.b,{to:"/"},"Please login"))),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null)))}var Te=function(){var e=Object(n.useState)({token:void 0,user:void 0}),t=Object(d.a)(e,2),a=t[0],l=t[1];return Object(n.useEffect)((function(){(function(){var e=Object(m.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return null===(t=localStorage.getItem("auth-token"))&&(localStorage.setItem("auth-token",""),t=""),e.next=4,D(t);case 4:if(!e.sent.data){e.next=10;break}return e.next=8,I(t);case 8:a=e.sent,l({token:t,user:a.data});case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),r.a.createElement(p.a,null,r.a.createElement(C.Provider,{value:{userData:a,setUserData:l}},r.a.createElement(f.c,null,r.a.createElement(f.a,{exact:!0,path:"/",component:S}),r.a.createElement(f.a,{path:"/login",exact:!0,component:te}),r.a.createElement(f.a,{path:"/signup",exact:!0,component:ne}),r.a.createElement(f.a,{path:"/journal",exact:!0,component:Ee}),r.a.createElement(f.a,{path:"/searchresults",exact:!0,component:Fe}))))};c.a.render(r.a.createElement(Te,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");o?function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):i(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):i(e)}))}}()},45:function(e,t,a){e.exports=a.p+"static/media/logo5.ca47de21.jpg"}},[[224,1,2]]]);
//# sourceMappingURL=main.3ab27e55.chunk.js.map