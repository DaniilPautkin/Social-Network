(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{127:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var r=n(35),a=n(0),c=n.n(a),o=n(320),u=n(10),i=function(e){return{isAuth:e.auth.isAuth}};function s(e){return Object(u.b)(i,{})(function(t){var n=t.isAuth,a=Object(r.a)(t,["isAuth"]);return n?c.a.createElement(e,a):c.a.createElement(o.a,{to:"/login"})})}},128:function(e,t,n){e.exports=n.p+"static/media/USER.d6759143.png"},129:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var r=n(38),a=n(8),c={dialoguesData:[{id:0,name:"dimych"},{id:1,name:"Sveta"},{id:2,name:"Dania"},{id:3,name:"Diana"},{id:4,name:"Velar"}],messagesData:[{id:0,message:"hi"},{id:1,message:"Nice"},{id:2,message:"Uou"}]},o={createMessage:function(e){return{type:"SN/DIALOGUES/CREATE-MESSAGE",newMassageBody:e}}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SN/DIALOGUES/CREATE-MESSAGE":var n=t.newMassageBody;return Object(a.a)({},e,{messagesData:[].concat(Object(r.a)(e.messagesData),[{id:0,message:n}])});default:return e}}},134:function(e,t,n){e.exports=n.p+"static/media/giphy.1701e2f4.gif"},138:function(e,t,n){},16:function(e,t,n){e.exports={navbar:"Navbar_navbar__2kjcl",item:"Navbar_item__28tdK",active:"Navbar_active__1IpNw"}},167:function(e,t,n){e.exports=n(305)},175:function(e,t,n){},21:function(e,t,n){"use strict";n.d(t,"b",function(){return l}),n.d(t,"a",function(){return f}),n.d(t,"c",function(){return p});var r=n(35),a=n(0),c=n.n(a),o=n(39),u=n.n(o),i=n(88),s=function(e){var t=e.meta,n=t.touched,r=t.error,a=e.children,o=n&&r;return c.a.createElement("div",{className:u.a.formControl+" "+(o?u.a.error:"")},c.a.createElement("div",null,a),o&&c.a.createElement("span",null,r," "))},l=function(e){var t=e.input,n=(e.meta,Object(r.a)(e,["input","meta"]));return c.a.createElement(s,e,c.a.createElement("textarea",Object.assign({},t,n)))},f=function(e){var t=e.input,n=(e.meta,Object(r.a)(e,["input","meta"]));return c.a.createElement(s,e,c.a.createElement("input",Object.assign({},t,n)))};function p(e,t,n,r,a,o){return c.a.createElement("div",null,c.a.createElement(i.a,Object.assign({placeholder:e,name:t,component:r,className:u.a.input,validate:n},a)),o)}},303:function(e,t,n){},305:function(e,t,n){"use strict";n.r(t);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var r,a,c=n(0),o=n.n(c),u=n(61),i=n.n(u),s=n(24),l=n(25),f=n(27),p=n(26),m=n(28),d=n(10),h=n(323),E=n(135),g=n(320),S=n(322),v=n(319),b=n(5),O=(n(175),n(37)),w=n(52),_=n.n(w),P=n(321),N=function(e){return o.a.createElement("header",{className:_.a.header},o.a.createElement("img",{alt:"",src:"https://about.canva.com/en_in/wp-content/uploads/sites/3/2016/08/logos-1.png"}),o.a.createElement("div",{className:_.a.loginBlock},e.isAuth?o.a.createElement("div",null,e.login," ",o.a.createElement("button",{className:_.a.logout,onClick:e.logout},"Log out")):o.a.createElement(P.a,{to:"/login"},o.a.createElement("button",{className:_.a.login},"Login"))))},j=n(7),C=n.n(j),U=n(13),y=n(8),I=n(9),T=n(31),R=function(){return I.c.get("auth/me").then(function(e){return e.data})},L=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return I.c.post("auth/login",{email:e,password:t,rememberMe:n,captcha:r}).then(function(e){return e.data})},x=function(){return I.c.delete("auth/login").then(function(e){return e.data})},A=function(){return I.c.get("security/get-captcha-url").then(function(e){return e.data})};!function(e){e[e.Success=0]="Success",e[e.Error=1]="Error"}(r||(r={})),function(e){e[e.CaptchaIsRequired=10]="CaptchaIsRequired"}(a||(a={}));var k={userId:null,isAuth:!1,email:null,login:null,isFetching:!0,captchaUrl:null},F=function(e,t,n,r){return{type:"SN/auth/SET-AUTH-USER-DATA",payload:{userId:e,email:t,login:n,isAuth:r}}},D=function(e){return{type:"SN/security/GET-CAPTCHA-URL-SUCCESS",payload:{captchaUrl:e}}},z=function(){return function(){var e=Object(U.a)(C.a.mark(function e(t){var n,r,a,c,o;return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R();case 2:(n=e.sent).resultCode===I.b.Success&&(r=n.data,a=r.id,c=r.login,o=r.email,t(F(a,c,o,!0)));case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},G=function(){return function(){var e=Object(U.a)(C.a.mark(function e(t){var n,r;return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A();case 2:n=e.sent,r=n.url,t(D(r));case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SN/auth/SET-AUTH-USER-DATA":case"SN/security/GET-CAPTCHA-URL-SUCCESS":return Object(y.a)({},e,t.payload);default:return e}},H=function(e){function t(){return Object(s.a)(this,t),Object(f.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement(N,this.props)}}]),t}(o.a.Component),B=Object(d.b)(function(e){return{isAuth:e.auth.isAuth,login:e.auth.login,logout:function(){}}},{logout:function(){return function(){var e=Object(U.a)(C.a.mark(function e(t){return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x();case 2:e.sent.resultCode===I.b.Success&&t(F(null,null,null,!1));case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}})(H),W=n(131),q=n(62),V=n(39),X=n.n(V),J=n(21),K=n(71),Z=n.n(K),Y=Object(W.a)({form:"login"})(function(e){var t=e.handleSubmit,n=e.error,r=e.captchaUrl;e.children;return o.a.createElement("form",{className:Z.a.form,onSubmit:t},Object(J.c)("Email","email",[q.b],J.a),Object(J.c)("Password","password",[q.b],J.a,{type:"password"}),Object(J.c)(void 0,"rememberMe",[],J.a,{type:"checkbox"},"remember me"),r&&o.a.createElement("img",{alt:"",className:Z.a.captcha,src:r}),o.a.createElement("div",null,n&&o.a.createElement("div",{className:X.a.formSummaryError},n),r&&Object(J.c)("Symbols from image","captcha",[q.b],J.a,{})),o.a.createElement("div",null,o.a.createElement("button",{className:Z.a.submitButton},"Login")))}),$=Object(d.b)(function(e){return{captchaUrl:e.auth.captchaUrl,isAuth:e.auth.isAuth}},{login:function(e,t,n,r){return function(){var a=Object(U.a)(C.a.mark(function a(c){var o,u;return C.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,L(e,t,n,r);case 2:(o=a.sent).resultCode===I.b.Success?c(z()):(o.resultCode===I.a.CaptchaIsRequired&&c(G()),u=o.messages.length>0?o.messages[0]:"Some error",c(Object(T.a)("login",{_error:u})));case 4:case"end":return a.stop()}},a)}));return function(e){return a.apply(this,arguments)}}()}})(function(e){return e.isAuth?o.a.createElement(g.a,{to:"/profile"}):o.a.createElement("div",null,o.a.createElement("h1",null,"Login"),o.a.createElement(Y,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe,t.captcha)},captchaUrl:e.captchaUrl}))}),Q=n(138),ee=n.n(Q),te=n(127),ne=function(e){function t(){return Object(s.a)(this,t),Object(f.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("a",{href:"/#",className:ee.a.name},"Music")}}]),t}(o.a.Component),re=Object(b.d)(te.a,Object(d.b)(function(e){return{key:e}},{}))(ne),ae=n(16),ce=n.n(ae),oe=function(e){return o.a.createElement("nav",{className:ce.a.navbar},o.a.createElement("div",{className:ce.a.item},o.a.createElement(P.a,{to:"/profile",activeClassName:ce.a.active},"Profile")),o.a.createElement("div",{className:ce.a.item},o.a.createElement(P.a,{to:"/dialogues",activeClassName:ce.a.active},"Messages")),o.a.createElement("div",{className:ce.a.item},o.a.createElement(P.a,{to:"/News",activeClassName:ce.a.active},"News")),o.a.createElement("div",{className:ce.a.item},o.a.createElement(P.a,{to:"/Music",activeClassName:ce.a.active},"Music")),o.a.createElement("div",{className:ce.a.item},o.a.createElement(P.a,{to:"/settings",activeClassName:ce.a.active},"Settings")),o.a.createElement("div",{className:ce.a.item},o.a.createElement(P.a,{to:"/users",activeClassName:ce.a.active},"Users")))},ue=function(e){return o.a.createElement("div",null,"Settings")},ie=n(38),se={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return I.c.get("users?page=".concat(e,"&count=").concat(t)).then(function(e){return e.data})},follow:function(e){return I.c.post("follow/".concat(e)).then(function(e){return e.data})},unfollow:function(e){return I.c.delete("follow/".concat(e)).then(function(e){return e.data})}},le=function(e,t,n,r){return e.map(function(e){return e[n]===t?Object(y.a)({},e,r):e})},fe={users:[],pageSize:5,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[]},pe=function(e){return{type:"SN/USERS/FOLLOW",userId:e}},me=function(e){return{type:"SN/USERS/UNFOLLOW",userId:e}},de=function(e){return{type:"SN/USERS/SET_USERS",users:e}},he=function(e){return{type:"SN/USERS/SET_CURRENT_PAGE",currentPage:e}},Ee=function(e){return{type:"SN/USERS/SET_USERS_TOTAL_COUNT",totalUsersCount:e}},ge=function(e){return{type:"SN/USERS/TOGGLE_IS_FETCHING",isFetching:e}},Se=function(e,t){return{type:"SN/USERS/TOGGLE_IS_FOLLOWING_PROGRESS",isFetching:e,userId:t}},ve=function(){var e=Object(U.a)(C.a.mark(function e(t,n,r,a){return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t(Se(!0,n)),e.next=3,r(n);case 3:0===e.sent.data.resultCode&&t(a(n)),t(Se(!1,n));case 6:case"end":return e.stop()}},e)}));return function(t,n,r,a){return e.apply(this,arguments)}}(),be=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SN/USERS/FOLLOW":return Object(y.a)({},e,{users:le(e.users,t.userId,"id",{followed:!0})});case"SN/USERS/UNFOLLOW":return Object(y.a)({},e,{users:le(e.users,t.userId,"id",{followed:!1})});case"SN/USERS/SET_USERS":return Object(y.a)({},e,{users:t.users});case"SN/USERS/SET_CURRENT_PAGE":return Object(y.a)({},e,{currentPage:t.currentPage});case"SN/USERS/SET_USERS_TOTAL_COUNT":return Object(y.a)({},e,{totalUsersCount:t.totalUsersCount});case"SN/USERS/TOGGLE_IS_FETCHING":return Object(y.a)({},e,{isFetching:t.isFetching});case"SN/USERS/TOGGLE_IS_FOLLOWING_PROGRESS":return Object(y.a)({},e,{followingInProgress:t.isFetching?[].concat(Object(ie.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter(function(e){return e!==t.userId})});default:return e}},Oe=n(35),we=n(69),_e=n(94),Pe=n(73),Ne=n.n(Pe),je=n(139),Ce=n.n(je),Ue=function(e){for(var t=e.totalItemsCount,n=e.pageSize,r=e.currentPage,a=e.onPageChanged,u=e.portionSize,i=void 0===u?10:u,s=Math.ceil(t/n),l=[],f=1;f<=s;f++)l.push(f);var p=Math.ceil(s/i),m=Object(c.useState)(1),d=Object(_e.a)(m,2),h=d[0],E=d[1],g=(h-1)*i+1,S=h*i;return o.a.createElement("div",{className:Ne.a.paginator},h>1&&o.a.createElement("button",{onClick:function(){E(h-1)}},"PREV"),l.filter(function(e){return e>=g&&e<=S}).map(function(e){return o.a.createElement("span",{className:Ce()(Object(we.a)({},Ne.a.selectedPage,r===e),Ne.a.pageNumber),key:e,onClick:function(t){a(e)}},e)}),p>h&&o.a.createElement("button",{onClick:function(){E(h+1)}},"NEXT"))},ye=n(93),Ie=n.n(ye),Te=n(128),Re=n.n(Te),Le=function(e){var t=e.user,n=e.followingInProgress,r=e.unfollow,a=e.follow;return o.a.createElement("div",{className:Ie.a.main},o.a.createElement("div",null,o.a.createElement(P.a,{to:"/profile/"+t.id},o.a.createElement("img",{src:null!=t.photos.small?t.photos.small:Re.a,className:Ie.a.userPhoto,alt:""}))),o.a.createElement("div",null,t.followed?o.a.createElement("button",{disabled:n.some(function(e){return e===t.id}),onClick:function(){r(t.id)}},"Unfollow"):o.a.createElement("button",{disabled:n.some(function(e){return e===t.id}),onClick:function(){a(t.id)}},"Follow")),o.a.createElement("span",null,o.a.createElement("div",null,t.name),o.a.createElement("div",null,t.status)))},xe=function(e){var t=e.currentPage,n=e.totalUsersCount,r=e.pageSize,a=e.onPageChanged,c=e.users,u=Object(Oe.a)(e,["currentPage","totalUsersCount","pageSize","onPageChanged","users"]);return o.a.createElement("div",null,o.a.createElement(Ue,{currentPage:t,onPageChanged:a,totalItemsCount:n,pageSize:r}),o.a.createElement("div",null,c.map(function(e){return o.a.createElement(Le,{user:e,followingInProgress:u.followingInProgress,key:e.id,unfollow:u.unfollow,follow:u.follow})})))},Ae=n(140),ke=Object(Ae.a)(function(e){return e.usersPage.users},function(e){return e.filter(function(e){return!0})}),Fe=function(e){return e.usersPage.pageSize},De=function(e){return e.usersPage.totalUsersCount},ze=function(e){return e.usersPage.currentPage},Ge=function(e){return e.usersPage.isFetching},Me=function(e){return e.usersPage.followingInProgress},He=function(e){function t(){var e,n;Object(s.a)(this,t);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(n=Object(f.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(a)))).onPageChanged=function(e){var t=n.props.pageSize;n.props.getUsers(e,t)},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.getUsers(t,n)}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,this.props.isFetching?o.a.createElement(O.a,null):null,o.a.createElement(xe,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress}))}}]),t}(o.a.Component),Be=Object(b.d)(Object(d.b)(function(e){return{users:ke(e),pageSize:Fe(e),totalUsersCount:De(e),currentPage:ze(e),isFetching:Ge(e),followingInProgress:Me(e)}},{follow:function(e){return function(){var t=Object(U.a)(C.a.mark(function t(n){return C.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:ve(n,e,se.follow.bind(se),pe);case 1:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(U.a)(C.a.mark(function t(n){return C.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:ve(n,e,se.unfollow.bind(se),me);case 1:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},getUsers:function(e,t){return function(){var n=Object(U.a)(C.a.mark(function n(r,a){var c;return C.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r(he(e)),r(ge(!0)),n.next=4,se.getUsers(e,t);case 4:c=n.sent,r(ge(!1)),r(de(c.items)),r(Ee(c.totalCount));case 8:case"end":return n.stop()}},n)}));return function(e,t){return n.apply(this,arguments)}}()}}))(He);function We(e){return function(t){return o.a.createElement(c.Suspense,{fallback:o.a.createElement(O.a,null)},o.a.createElement(e,t))}}var qe={initialized:!1},Ve=function(){return{type:"SN/APP/SET-INITIALIZED"}},Xe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:qe;switch((arguments.length>1?arguments[1]:void 0).type){case"SN/APP/SET-INITIALIZED":return Object(y.a)({},e,{initialized:!0});default:return e}},Je=n(129),Ke=n(95),Ze={},Ye=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ze;arguments.length>1&&arguments[1];return e},$e=n(141),Qe=n(132),et=Object(b.c)({profilePage:Ke.b,dialoguesPage:Je.b,friendsBar:Ye,usersPage:be,auth:M,form:Qe.a,app:Xe}),tt=Object(b.e)(et,Object(b.d)(Object(b.a)($e.a),window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__():function(e){return e}));window.__store__=tt;var nt=tt,rt=o.a.lazy(function(){return n.e(1).then(n.bind(null,318))}),at=o.a.lazy(function(){return n.e(2).then(n.bind(null,317))}),ct=We(rt),ot=We(at),ut=function(e){function t(){var e,n;Object(s.a)(this,t);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(n=Object(f.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(a)))).catchAllUnhandledErrors=function(e){alert("Error")},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.initializeApp(),window.addEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"render",value:function(){return this.props.initialized?o.a.createElement("div",{className:"app-wrapper"},o.a.createElement(B,null),o.a.createElement(oe,null),o.a.createElement("div",{className:"app-wrapper-content"},o.a.createElement(h.a,null,o.a.createElement(E.a,{path:"/profile/:UserId?",render:function(){return o.a.createElement(ot,null)}}),o.a.createElement(E.a,{path:"/dialogues",render:function(){return o.a.createElement(ct,null)}}),o.a.createElement(E.a,{path:"/music",render:function(){return o.a.createElement(re,null)}}),o.a.createElement(E.a,{path:"/settings",render:function(){return o.a.createElement(ue,null)}}),o.a.createElement(E.a,{path:"/users",render:function(){return o.a.createElement(Be,null)}}),o.a.createElement(E.a,{path:"/login",render:function(){return o.a.createElement($,null)}}),o.a.createElement(E.a,{exact:!0,path:"/",render:function(){return o.a.createElement(g.a,{to:"/profile"})}}),o.a.createElement(E.a,{path:"*",render:function(){return o.a.createElement("div",{className:"notFoundPage"},o.a.createElement("h1",null,"404"),o.a.createElement("h3",null,"Page not found"))}})))):o.a.createElement(O.a,null)}}]),t}(o.a.Component),it=Object(b.d)(S.a,Object(d.b)(function(e){return{initialized:e.app.initialized}},{initializeApp:function(){return function(e){var t=e(z());Promise.all([t]).then(function(){e(Ve())})}}}))(ut),st=function(){return o.a.createElement(v.a,null,o.a.createElement(d.a,{store:nt},o.a.createElement(it,null)))};n(303);i.a.render(o.a.createElement(st,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},37:function(e,t,n){"use strict";var r=n(0),a=n.n(r),c=n(90),o=n.n(c),u=n(134),i=n.n(u);t.a=function(e){return a.a.createElement("div",{className:o.a.preCont},a.a.createElement("img",{src:i.a,className:o.a.pre,alt:""}))}},39:function(e,t,n){e.exports={formControl:"FormsControl_formControl__3SIH-",error:"FormsControl_error__1pbcI",formSummaryError:"FormsControl_formSummaryError__L67C3"}},52:function(e,t,n){e.exports={header:"Header_header__36NqA",loginBlock:"Header_loginBlock__3KzqO",login:"Header_login__ZyVn2",logout:"Header_logout__27a0M"}},62:function(e,t,n){"use strict";n.d(t,"b",function(){return r}),n.d(t,"a",function(){return a});var r=function(e){if(!e)return"No empty fields accepted"},a=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},71:function(e,t,n){e.exports={form:"Login_form__1Otgr",input:"Login_input__3J7m8",checkbox:"Login_checkbox__2Otj8",submitButton:"Login_submitButton__3RD7J",captcha:"Login_captcha__1syvN"}},73:function(e,t,n){e.exports={selectedPage:"Paginator_selectedPage__2o8x0"}},9:function(e,t,n){"use strict";n.d(t,"c",function(){return o}),n.d(t,"b",function(){return r}),n.d(t,"a",function(){return a});var r,a,c=n(136),o=n.n(c).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"36b96517-179a-4aca-8588-54832599e6d7"}});!function(e){e[e.Success=0]="Success",e[e.Error=1]="Error"}(r||(r={})),function(e){e[e.CaptchaIsRequired=10]="CaptchaIsRequired"}(a||(a={}))},90:function(e,t,n){e.exports={preCont:"Preloader_preCont__2UxB6",pre:"Preloader_pre__2KZtP"}},93:function(e,t,n){e.exports={userPhoto:"users_userPhoto__350eH",main:"users_main__1Mx0T"}},95:function(e,t,n){"use strict";var r=n(7),a=n.n(r),c=n(13),o=n(38),u=n(8),i=n(9),s=function(e){return i.c.get("profile/"+e).then(function(e){return e.data})},l=function(e){return i.c.get("profile/status/"+e).then(function(e){return e.data})},f=function(e){return i.c.put("profile/status",{status:e}).then(function(e){return e.data})},p=function(e){var t=new FormData;return t.append("image",e),i.c.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}}).then(function(e){return e.data})},m=function(e){return i.c.put("profile",e).then(function(e){return e.data})},d=n(31);n.d(t,"a",function(){return E}),n.d(t,"d",function(){return g}),n.d(t,"c",function(){return S}),n.d(t,"g",function(){return v}),n.d(t,"e",function(){return b}),n.d(t,"f",function(){return O});var h={posts:[{id:0,message:"How",likesCount:0},{id:1,message:"Nice",likesCount:55}],profile:null,status:"",newPostText:""},E={addPost:function(e){return{type:"SN/PROFILE/ADD-POST",newPostText:e}},setUserProfile:function(e){return{type:"SN/PROFILE/SET-USER-PROFILE",profile:e}},setStatus:function(e){return{type:"SN/PROFILE/SET-STATUS",status:e}},deletePost:function(e){return{type:"SN/PROFILE/DELETE-POST",postId:e}},savePhotoSuccess:function(e){return{type:"SN/PROFILE/SAVE-PHOTO-SUCCESS",photos:e}}},g=function(e){return function(){var t=Object(c.a)(a.a.mark(function t(n){var r;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s(e);case 2:r=t.sent,n(E.setUserProfile(r));case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},S=function(e){return function(){var t=Object(c.a)(a.a.mark(function t(n){var r;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l(e);case 2:r=t.sent,n(E.setStatus(r));case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(c.a)(a.a.mark(function t(n){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,f(e);case 3:0===t.sent.resultCode&&n(E.setStatus(e)),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}},t,null,[[0,7]])}));return function(e){return t.apply(this,arguments)}}()},b=function(e){return function(){var t=Object(c.a)(a.a.mark(function t(n){var r;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p(e);case 2:0===(r=t.sent).resultCode&&n(E.savePhotoSuccess(r.data.photos));case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},O=function(e){return function(){var t=Object(c.a)(a.a.mark(function t(n,r){var c,o;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return c=r().auth.userId,t.next=3,m(e);case 3:if(0!==(o=t.sent).resultCode){t.next=12;break}if(null==c){t.next=9;break}n(g(c)),t.next=10;break;case 9:throw new Error("userId can't be null");case 10:t.next=14;break;case 12:return n(Object(d.a)("edit-profile",{_error:o.messages[0]})),t.abrupt("return",Promise.reject(o.messages[0]));case 14:case"end":return t.stop()}},t)}));return function(e,n){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SN/PROFILE/ADD-POST":var n={id:5,message:t.newPostText,likesCount:0};return Object(u.a)({},e,{posts:[].concat(Object(o.a)(e.posts),[n])});case"SN/PROFILE/SET-USER-PROFILE":return Object(u.a)({},e,{profile:t.profile});case"SN/PROFILE/SET-STATUS":return Object(u.a)({},e,{status:t.status});case"SN/PROFILE/DELETE-POST":return Object(u.a)({},e,{posts:e.posts.filter(function(e){return e.id!=t.postId})});case"SN/PROFILE/SAVE-PHOTO-SUCCESS":return Object(u.a)({},e,{profile:Object(u.a)({},e.profile,{photos:t.photos})});default:return e}}}},[[167,4,3]]]);
//# sourceMappingURL=main.7c9ce5cd.chunk.js.map