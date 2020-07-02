(this["webpackJsonpsocial-network"]=this["webpackJsonpsocial-network"]||[]).push([[0],{104:function(e,n,t){"use strict";t.d(n,"b",(function(){return r})),t.d(n,"a",(function(){return a}));const r=e=>{if(!e)return"No empty fields accepted"},a=e=>n=>{if(n.length>e)return"Max length is ".concat(e," symbols")}},13:function(e,n,t){"use strict";t.d(n,"a",(function(){return f})),t.d(n,"c",(function(){return m})),t.d(n,"b",(function(){return g})),t.d(n,"h",(function(){return b})),t.d(n,"e",(function(){return h})),t.d(n,"f",(function(){return E})),t.d(n,"d",(function(){return O})),t.d(n,"g",(function(){return x}));var r=t(7),a=t(8),o=t(118);function c(){const e=Object(r.a)(["\n    /* width: 100%;     */\n    /* margin: 0 auto; */\n    justify-content: center;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    margin: 10px 0px 10px 0px;\n"]);return c=function(){return e},e}function s(){const e=Object(r.a)(["\n    padding: 5px;\n    margin: 3px;\n    border-radius: 100px;\n    cursor: pointer;\n    :hover {\n        color: ",";\n    }\n    .selectedPage:hover {\n        background: rgba(0, 0, 0, 0);\n        color: #000;\n    }\n"]);return s=function(){return e},e}function i(){const e=Object(r.a)(["\n    display: flex;\n    flex-direction: row;\n\n    .selectedPage {\n        color: #ffffff;\n        border-radius: 10px;\n        background-color: rgb(255, 38, 0);\n        font-weight: bold;\n    }\n"]);return i=function(){return e},e}function u(){const e=Object(r.a)(["\n    border-radius: 5px;\n    :hover {\n        border: 1px solid ",";\n        color: ",";\n    }\n\n    :focus,\n    :active {\n        background: ",";\n        border: 1px solid ",";\n        color: #fff;\n    }\n"]);return u=function(){return e},e}function l(){const e=Object(r.a)(["\n    display: flex;\n    justify-content: center;\n\n    img {\n        height: 50px;\n    }\n"]);return l=function(){return e},e}function d(){const e=Object(r.a)(["\n    border-radius: 5px;\n    color: black;\n    padding: 10px;\n    background: #fafbfc;\n    grid-area: cont;\n\n    @media screen and (max-width: 900px) {\n        border-bottom-right-radius: 0;\n    }\n"]);return d=function(){return e},e}function p(){const e=Object(r.a)(["\n    margin: 0 auto;\n    /* grid-gap: 10px; */\n    /* margin-top: 10px; */\n    margin-bottom: 10px;\n    display: grid;\n    width: 1200px;\n    grid-template-rows: 60px 1fr;\n    grid-template-columns: 2fr 10fr;\n    grid-template-areas:\n        'head head'\n        'navbar cont';\n\n    @media screen and (max-width: 900px) {\n        width: 100%;\n    }\n"]);return p=function(){return e},e}const f={mainColor:"#24292E",secondColor:"#FAFBFC",greenColor:"#28A745",lightGreen:"#40C463",redColor:"#EC6E61",blueColor:"#0366D6"},m=a.a.div(p()),g=a.a.div(d()),b=a.a.div(l()),h=Object(a.a)(o.a)(u(),f.greenColor,f.greenColor,f.greenColor,f.greenColor),E=a.a.div(i()),O=a.a.div(s(),f.redColor),x=a.a.div(c())},165:function(e,n,t){e.exports={formControl:"FormsControl_formControl__x_Lvf",error:"FormsControl_error__28ug-",formSummaryError:"FormsControl_formSummaryError__1dDnV"}},17:function(e,n,t){"use strict";t.d(n,"c",(function(){return a})),t.d(n,"b",(function(){return o})),t.d(n,"a",(function(){return c}));var r=t(247);const a=t.n(r).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"53f0549c-b924-465b-83a1-97a7e4bf03d6"}});let o,c;!function(e){e[e.Success=0]="Success",e[e.Error=1]="Error"}(o||(o={})),function(e){e[e.CaptchaIsRequired=10]="CaptchaIsRequired"}(c||(c={}))},170:function(e,n,t){e.exports={selectedPage:"Paginator_selectedPage__3OeQX"}},172:function(e,n,t){e.exports=t.p+"static/media/USER.d6759143.png"},174:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"d",(function(){return p})),t.d(n,"c",(function(){return f})),t.d(n,"g",(function(){return m})),t.d(n,"e",(function(){return g})),t.d(n,"f",(function(){return b}));var r=t(12),a=t.n(r),o=t(24),c=t(5),s=t(45),i=t(17);const u={getProfile:e=>i.c.get("profile/"+e).then(e=>e.data),getStatus:e=>i.c.get("profile/status/"+e).then(e=>e.data),updateStatus:e=>i.c.put("profile/status",{status:e}).then(e=>e.data),savePhotos(e){const n=new FormData;return n.append("image",e),i.c.put("profile/photo",n,{headers:{"Content-Type":"multipart/form-data"}}).then(e=>e.data)},saveProfile:e=>i.c.put("profile",e).then(e=>e.data)};let l={posts:[{id:0,message:"Dummy",likesCount:0},{id:1,message:"Data",likesCount:55}],profile:null,status:"",newPostText:""};const d={addPost:e=>({type:"SN/PROFILE/ADD-POST",newPostText:e}),setUserProfile:e=>({type:"SN/PROFILE/SET-USER-PROFILE",profile:e}),setStatus:e=>({type:"SN/PROFILE/SET-STATUS",status:e}),deletePost:e=>({type:"SN/PROFILE/DELETE-POST",postId:e}),savePhotoSuccess:e=>({type:"SN/PROFILE/SAVE-PHOTO-SUCCESS",photos:e})},p=e=>function(){var n=Object(o.a)(a.a.mark((function n(t){var r;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.getProfile(e);case 2:r=n.sent,t(d.setUserProfile(r));case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=e=>function(){var n=Object(o.a)(a.a.mark((function n(t){var r;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.getStatus(e);case 2:r=n.sent,t(d.setStatus(r));case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),m=e=>function(){var n=Object(o.a)(a.a.mark((function n(t){return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.updateStatus(e);case 3:0===n.sent.resultCode&&t(d.setStatus(e)),n.next=9;break;case 7:n.prev=7,n.t0=n.catch(0);case 9:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),g=e=>function(){var n=Object(o.a)(a.a.mark((function n(t){var r;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.savePhotos(e);case 2:0===(r=n.sent).resultCode&&t(d.savePhotoSuccess(r.data.photos));case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),b=e=>function(){var n=Object(o.a)(a.a.mark((function n(t,r){var o,c;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=r().auth.userId,n.next=3,u.saveProfile(e);case 3:if(0!==(c=n.sent).resultCode){n.next=12;break}if(null==o){n.next=9;break}t(p(o)),n.next=10;break;case 9:throw new Error("userId can't be null");case 10:n.next=14;break;case 12:return t(Object(s.a)("edit-profile",{_error:c.messages[0]})),n.abrupt("return",Promise.reject(c.messages[0]));case 14:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}();n.b=(e=l,n)=>{switch(n.type){case"SN/PROFILE/ADD-POST":let t={id:5,message:n.newPostText,likesCount:0};return Object(c.a)(Object(c.a)({},e),{},{posts:[...e.posts,t]});case"SN/PROFILE/SET-USER-PROFILE":return Object(c.a)(Object(c.a)({},e),{},{profile:n.profile});case"SN/PROFILE/SET-STATUS":return Object(c.a)(Object(c.a)({},e),{},{status:n.status});case"SN/PROFILE/DELETE-POST":return Object(c.a)(Object(c.a)({},e),{},{posts:e.posts.filter(e=>e.id!==n.postId)});case"SN/PROFILE/SAVE-PHOTO-SUCCESS":return Object(c.a)(Object(c.a)({},e),{},{profile:Object(c.a)(Object(c.a)({},e.profile),{},{photos:n.photos})});default:return e}}},238:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var r=t(5);let a={dialoguesData:[{id:0,name:"Dummy"},{id:1,name:"Messages"}],messagesData:[{id:0,message:"Still"},{id:1,message:"In"},{id:2,message:"Progress"}]};const o={createMessage:e=>({type:"SN/DIALOGUES/CREATE-MESSAGE",newMassageBody:e})};n.b=(e=a,n)=>{switch(n.type){case"SN/DIALOGUES/CREATE-MESSAGE":let t=n.newMassageBody;return Object(r.a)(Object(r.a)({},e),{},{messagesData:[...e.messagesData,{id:0,message:t}]});default:return e}}},242:function(e,n,t){e.exports=t.p+"static/media/giphy.1701e2f4.gif"},288:function(e,n,t){e.exports=t(556)},50:function(e,n,t){"use strict";t.d(n,"c",(function(){return f})),t.d(n,"b",(function(){return m})),t.d(n,"a",(function(){return g})),t.d(n,"d",(function(){return b}));var r=t(43),a=t(0),o=t.n(a),c=t(157),s=t(54),i=t(165),u=t.n(i),l=t(36),d=t.n(l);const p=({meta:{touched:e,error:n},children:t})=>{const r=e&&n;return o.a.createElement("div",{className:u.a.formControl+" "+(r?u.a.error:"")},o.a.createElement("div",null,o.a.createElement("div",null,t),r&&o.a.createElement("span",null,n," ")))},f=e=>{const n=e.input,t=(e.meta,Object(r.a)(e,["input","meta"]));return o.a.createElement(p,e,o.a.createElement(s.e,Object.assign({},n,t)))},m=e=>{const n=e.input,t=(e.meta,Object(r.a)(e,["input","meta"]));return o.a.createElement(p,e,o.a.createElement(s.d,Object.assign({},n,t)))},g=e=>{const n=e.input,t=(e.meta,Object(r.a)(e,["input","meta"]));return o.a.createElement(p,e,o.a.createElement(s.b,Object.assign({},n,t)))};function b(e,n,t,r,a,i){return o.a.createElement(s.c,null,i?o.a.createElement(d.a,null,i):"",o.a.createElement(c.a,Object.assign({placeholder:e,name:n,component:r,validate:t},a)))}},54:function(e,n,t){"use strict";t.d(n,"a",(function(){return g})),t.d(n,"e",(function(){return b})),t.d(n,"b",(function(){return h})),t.d(n,"d",(function(){return E})),t.d(n,"c",(function(){return O}));var r=t(7),a=t(560),o=t(559),c=t(152),s=t.n(c),i=t(8),u=t(13);function l(){const e=Object(r.a)(["\n    /* padding: 10px; */\n    display: flex;\n    align-items: flex-start;\n    justify-content: flex-start;\n    flex-direction: column;\n    font-weight: 500;\n    Text {\n        cursor: default;\n        margin-left: 0;\n    }\n    input[type='checkbox'] {\n        cursor: pointer;\n        margin-left: 5px;\n        margin-right: 5px;\n        height: 13px;\n        width: 13px;\n        min-width: 13px;\n    }\n    /* margin-bottom: 5px; */\n"]);return l=function(){return e},e}function d(){const e=Object(r.a)(["\n    border-radius: 5px;\n    transition: 0.3s ease-in-out;\n    :hover,\n    :active,\n    :focus {\n        box-shadow: none;\n        border: 1px solid ",";\n    }\n    /* margin: 0px 5px 0px 5px; */\n"]);return d=function(){return e},e}function p(){const e=Object(r.a)(["\n    .ant-checkbox-checked .ant-checkbox-inner {\n        background-color: ",";\n        border-color: ",";\n    }\n"]);return p=function(){return e},e}function f(){const e=Object(r.a)(["\n    resize: none;\n    border-radius: 5px;\n    /* margin: 0px 5px 0px 5px; */\n    :hover,\n    :active,\n    :focus {\n        box-shadow: none;\n        border: 1px solid ",";\n    }\n"]);return f=function(){return e},e}function m(){const e=Object(r.a)(["\n    display: inline;\n    border: 2px solid red;\n    border-radius: 5px;\n    color: red;\n"]);return m=function(){return e},e}const g=i.a.div(m()),b=Object(i.a)(s.a)(f(),u.a.greenColor),h=Object(i.a)(a.a)(p(),u.a.greenColor,u.a.greenColor),E=Object(i.a)(o.a)(d(),u.a.greenColor),O=i.a.div(l())},555:function(e,n,t){},556:function(e,n,t){"use strict";t.r(n);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var r=t(0),a=t.n(r),o=t(14),c=t.n(o),s=t(563),i=(t(293),t(19)),u=t(567),l=t(246),d=t(561),p=t(566),f=t(565),m=t(9),g=t(67),b=t(570),h=t(13),E=t(7),O=t(8);function x(){const e=Object(E.a)([""]);return x=function(){return e},e}function S(){const e=Object(E.a)(["\n    background-color: rgba(0, 0, 0, 0);\n    color: #fff;\n    border-radius: 5px;\n"]);return S=function(){return e},e}function v(){const e=Object(E.a)(["\n    text-decoration: none;\n    color: #ffffff;\n    margin: 0px 5px 0px 5px;\n"]);return v=function(){return e},e}function j(){const e=Object(E.a)(["\n    z-index: 1;\n    /* border-radius: 5px; */\n    flex-direction: row;\n    align-items: center;\n    display: flex;\n    justify-content: space-between;\n    grid-area: head;\n    background: #0b0c10;\n\n    img {\n        border-radius: 20px;\n        margin: 5px;\n        height: 50px;\n    }\n\n    @media screen and (max-width: 900px) {\n        border-top-left-radius: 0px;\n        border-top-right-radius: 0px;\n    }\n"]);return j=function(){return e},e}const w=O.a.div(j()),P=O.a.div(v()),C=(Object(O.a)(b.a)(S()),O.a.img(x()));var y=e=>a.a.createElement(w,null,a.a.createElement(C,{alt:"",src:"https://about.canva.com/en_in/wp-content/uploads/sites/3/2016/08/logos-1.png"}),a.a.createElement(P,null,e.isAuth?a.a.createElement(P,null,e.login," ",a.a.createElement(h.e,{onClick:e.logout},"Log out")):a.a.createElement(b.a,{to:"/login"},a.a.createElement(h.e,null,"Login")))),U=t(12),I=t.n(U),T=t(24),N=t(5),k=t(45),R=t(17);const _={me:()=>R.c.get("auth/me").then(e=>e.data),login:(e,n,t=!1,r=null)=>R.c.post("auth/login",{email:e,password:n,rememberMe:t,captcha:r}).then(e=>e.data),logout:()=>R.c.delete("auth/login").then(e=>e.data)},A={getCaptchaUrl:()=>R.c.get("security/get-captcha-url").then(e=>e.data)};let L,F;!function(e){e[e.Success=0]="Success",e[e.Error=1]="Error"}(L||(L={})),function(e){e[e.CaptchaIsRequired=10]="CaptchaIsRequired"}(F||(F={}));let D={userId:null,isAuth:!1,email:null,login:null,isFetching:!0,captchaUrl:null};const G=(e,n,t,r)=>({type:"SN/auth/SET-AUTH-USER-DATA",payload:{userId:e,login:n,email:t,isAuth:r}}),z=e=>({type:"SN/security/GET-CAPTCHA-URL-SUCCESS",payload:{captchaUrl:e}}),M=()=>function(){var e=Object(T.a)(I.a.mark((function e(n){var t,r,a,o,c;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.me();case 2:t=e.sent,console.log("getAuthUserData -> meData",t),t.resultCode===R.b.Success&&(r=t.data,a=r.id,o=r.login,c=r.email,n(G(a,o,c,!0)));case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),W=()=>function(){var e=Object(T.a)(I.a.mark((function e(n){var t,r;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.getCaptchaUrl();case 2:t=e.sent,r=t.url,n(z(r));case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();var H=(e=D,n)=>{switch(n.type){case"SN/auth/SET-AUTH-USER-DATA":case"SN/security/GET-CAPTCHA-URL-SUCCESS":return Object(N.a)(Object(N.a)({},e),n.payload);default:return e}};class B extends a.a.Component{render(){return a.a.createElement(y,this.props)}}var q=Object(i.b)(e=>({isAuth:e.auth.isAuth,login:e.auth.login,logout:()=>{}}),{logout:()=>function(){var e=Object(T.a)(I.a.mark((function e(n){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.logout();case 2:e.sent.resultCode===R.b.Success&&n(G(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()})(B),V=t(239),X=t(54),J=t(215),Z=t.n(J),K=t(118),Q=t(559),Y=t(560);function $(){const e=Object(E.a)(["\n    margin: 10px 0px 10px 0px;\n    border-radius: 10px;\n"]);return $=function(){return e},e}function ee(){const e=Object(E.a)(["\n    :hover {\n        margin-top: 5px;\n        margin-bottom: 5px;\n        user-select: none;\n        transform: scale(1.1);\n    }\n"]);return ee=function(){return e},e}function ne(){const e=Object(E.a)(["\n    margin-bottom: 10px;\n"]);return ne=function(){return e},e}function te(){const e=Object(E.a)([""]);return te=function(){return e},e}function re(){const e=Object(E.a)(["\n    margin: 0 auto;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    width: 100%;\n    Input {\n        margin: 10px 0px 10px 0px;\n    }\n"]);return re=function(){return e},e}const ae=Object(O.a)(Z.a)(re()),oe=(Object(O.a)(K.a)(te()),Object(O.a)(Q.a)(ne()),Object(O.a)(Y.a)(ee()),O.a.img($()));var ce=t(104),se=t(50);const ie=Object(V.a)({form:"login"})(({handleSubmit:e,error:n,captchaUrl:t,children:r})=>a.a.createElement(ae,null,Object(se.d)("Email","email",[ce.b],se.b,{},"Email"),Object(se.d)("Password","password",[ce.b],se.b,{type:"password"},"Password"),t&&a.a.createElement(oe,{src:t}),a.a.createElement("div",null,n&&a.a.createElement(X.a,null,n),t&&Object(se.d)("Symbols from image","captcha",[ce.b],se.b,{})),a.a.createElement("div",null,a.a.createElement(h.e,{onClick:e},"Login"))));var ue=Object(i.b)(e=>({captchaUrl:e.auth.captchaUrl,isAuth:e.auth.isAuth}),{login:(e,n,t,r)=>function(){var a=Object(T.a)(I.a.mark((function a(o){var c,s;return I.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,_.login(e,n,t,r);case 2:(c=a.sent).resultCode===R.b.Success?o(M()):(c.resultCode===R.a.CaptchaIsRequired&&o(W()),s=c.messages.length>0?c.messages[0]:"Some error",o(Object(k.a)("login",{_error:s})));case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()})(e=>e.isAuth?a.a.createElement(d.a,{to:"/profile"}):a.a.createElement("div",null,a.a.createElement(ie,{onSubmit:n=>{e.login(n.email,n.password,n.rememberMe,n.captcha)},captchaUrl:e.captchaUrl}))),le=t(85),de=t(36),pe=t.n(de);var fe=()=>a.a.createElement(pe.a,{code:!0},"In Progress");class me extends a.a.Component{render(){return a.a.createElement(fe,null)}}var ge=Object(m.d)(le.a,Object(i.b)(e=>({key:e}),{}))(me);function be(){const e=Object(E.a)(["\n    text-decoration: none;\n    color: #fffaf7;\n\n    :hover {\n        padding-left: 5px;\n        border-left: 1px solid ",";\n        transition: 0.1s ease-in;\n        color: ",";\n    }\n    :active {\n        color: ",";\n    }\n    .active {\n        padding-left: 10px;\n        border-left: 3px solid ",";\n        color: ",";\n    }\n"]);return be=function(){return e},e}function he(){const e=Object(E.a)([""]);return he=function(){return e},e}function Ee(){const e=Object(E.a)(["\n    border-bottom-left-radius: 5px;\n    padding: 20px;\n    grid-auto-flow: row;\n    background: ",";\n    grid-area: navbar;\n\n    @media screen and (max-width: 900px) {\n        border-bottom-left-radius: 0;\n    }\n"]);return Ee=function(){return e},e}const Oe=O.a.div(Ee(),h.a.mainColor),xe=O.a.div(he()),Se=Object(O.a)(b.a)(be(),h.a.lightGreen,h.a.lightGreen,h.a.lightGreen,h.a.lightGreen,h.a.lightGreen);var ve=e=>a.a.createElement(Oe,null,a.a.createElement(xe,null,a.a.createElement(Se,{to:"/profile",activeClassName:"active"},"Profile")),a.a.createElement(xe,null,a.a.createElement(Se,{to:"/dialogues",activeClassName:"active"},"Messages")),a.a.createElement(xe,null,a.a.createElement(Se,{to:"/settings",activeClassName:"active"},"Settings")),a.a.createElement(xe,null,a.a.createElement(Se,{to:"/users",activeClassName:"active"},"Users")));var je=()=>a.a.createElement(pe.a,{code:!0},"In Progress");class we extends a.a.Component{render(){return a.a.createElement(je,null)}}var Pe=Object(m.d)(le.a,Object(i.b)(e=>({key:e}),{withAuthRedirect:le.a}))(we);var Ce=e=>a.a.createElement(pe.a,{code:!0},"In Progress");const ye={getUsers:(e=1,n=10)=>R.c.get("users?page=".concat(e,"&count=").concat(n)).then(e=>e.data),follow:e=>R.c.post("follow/".concat(e)).then(e=>e.data),unfollow:e=>R.c.delete("follow/".concat(e)).then(e=>e.data)},Ue=(e,n,t,r)=>e.map(e=>e[t]===n?Object(N.a)(Object(N.a)({},e),r):e);let Ie={users:[],pageSize:5,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[]};const Te=e=>({type:"SN/USERS/FOLLOW",userId:e}),Ne=e=>({type:"SN/USERS/UNFOLLOW",userId:e}),ke=e=>({type:"SN/USERS/SET_USERS",users:e}),Re=e=>({type:"SN/USERS/SET_CURRENT_PAGE",currentPage:e}),_e=e=>({type:"SN/USERS/SET_USERS_TOTAL_COUNT",totalUsersCount:e}),Ae=e=>({type:"SN/USERS/TOGGLE_IS_FETCHING",isFetching:e}),Le=(e,n)=>({type:"SN/USERS/TOGGLE_IS_FOLLOWING_PROGRESS",isFetching:e,userId:n}),Fe=function(){var e=Object(T.a)(I.a.mark((function e(n,t,r,a){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(Le(!0,t)),e.next=3,r(t);case 3:0===e.sent.data.resultCode&&n(a(t)),n(Le(!1,t));case 6:case"end":return e.stop()}}),e)})));return function(n,t,r,a){return e.apply(this,arguments)}}();var De=(e=Ie,n)=>{switch(n.type){case"SN/USERS/FOLLOW":return Object(N.a)(Object(N.a)({},e),{},{users:Ue(e.users,n.userId,"id",{followed:!0})});case"SN/USERS/UNFOLLOW":return Object(N.a)(Object(N.a)({},e),{},{users:Ue(e.users,n.userId,"id",{followed:!1})});case"SN/USERS/SET_USERS":return Object(N.a)(Object(N.a)({},e),{},{users:n.users});case"SN/USERS/SET_CURRENT_PAGE":return Object(N.a)(Object(N.a)({},e),{},{currentPage:n.currentPage});case"SN/USERS/SET_USERS_TOTAL_COUNT":return Object(N.a)(Object(N.a)({},e),{},{totalUsersCount:n.totalUsersCount});case"SN/USERS/TOGGLE_IS_FETCHING":return Object(N.a)(Object(N.a)({},e),{},{isFetching:n.isFetching});case"SN/USERS/TOGGLE_IS_FOLLOWING_PROGRESS":return Object(N.a)(Object(N.a)({},e),{},{followingInProgress:n.isFetching?[...e.followingInProgress,n.userId]:e.followingInProgress.filter(e=>e!==n.userId)});default:return e}},Ge=t(43);function ze(){const e=Object(E.a)(["\n    display: flex;\n    flex-direction: column;\n    ::nth-child(2) {\n        margin-bottom: 3px;\n    }\n"]);return ze=function(){return e},e}function Me(){const e=Object(E.a)(["\n    margin: 10px 0px 3px 0px;\n    cursor: pointer;\n"]);return Me=function(){return e},e}function We(){const e=Object(E.a)(["\n    margin: 0 auto;\n    width: 90%;\n"]);return We=function(){return e},e}function He(){const e=Object(E.a)(["\n    display: flex;\n    flex-direction: row;\n"]);return He=function(){return e},e}function Be(){const e=Object(E.a)(["\n    display: inline-block;\n    cursor: pointer;\n    padding: 5px;\n"]);return Be=function(){return e},e}function qe(){const e=Object(E.a)(["\n    padding: 10px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    text-align: center;\n\n    Button {\n        background: rgba(0, 0, 0, 0.1);\n        border: none;\n    }\n"]);return qe=function(){return e},e}function Ve(){const e=Object(E.a)(["\n    border-radius: 10px;\n    /* box-shadow: 5px 5px 10px #cecece, -5px -5px 10px #ffffff; */\n    height: 100px;\n    transition: 0.3s;\n    :active {\n        opacity: 0.8;\n    }\n    :active,\n    :focus,\n    :hover,\n    :visited {\n        opacity: 0.3;\n    }\n"]);return Ve=function(){return e},e}const Xe=O.a.img(Ve()),Je=O.a.main(qe()),Ze=(O.a.span(Be()),O.a.div(He())),Ke=O.a.div(We()),Qe=O.a.div(Me()),Ye=O.a.div(ze());var $e=t(173),en=t(568),nn=t(569),tn=t(3),rn=t.n(tn),an=t(170),on=t.n(an);var cn=({totalItemsCount:e,pageSize:n,currentPage:t,onPageChanged:o,portionSize:c=10})=>{let s=Math.ceil(e/n),i=[];for(let r=1;r<=s;r++)i.push(r);let u=Math.ceil(s/c),l=Object(r.useState)(1),d=Object($e.a)(l,2),p=d[0],f=d[1],m=(p-1)*c+1,g=p*c;return a.a.createElement(h.g,null,p>1&&a.a.createElement(h.e,{onClick:()=>{f(p-1)}},a.a.createElement(en.a,null)),a.a.createElement(h.f,null,i.filter(e=>e>=m&&e<=g).map(e=>a.a.createElement("div",{className:rn()({[on.a.selectedPage]:t===e},on.a.pageNumber),key:e,onClick:n=>{o(e)}},a.a.createElement(h.d,null,e)))),u>p&&a.a.createElement(h.e,{onClick:()=>{f(p+1)}},a.a.createElement(nn.a,null)))},sn=t(172),un=t.n(sn);var ln=({user:e,followingInProgress:n,unfollow:t,follow:r})=>a.a.createElement(Je,null,a.a.createElement("div",null,a.a.createElement(b.a,{to:"/profile/"+e.id},a.a.createElement(Xe,{src:null!=e.photos.small?e.photos.small:un.a,alt:""}))),a.a.createElement("div",null,a.a.createElement(Ye,null,a.a.createElement(Qe,null,e.name),e.status?a.a.createElement(pe.a,{code:!0},e.status):""),e.followed?a.a.createElement(K.a,{disabled:n.some(n=>n===e.id),onClick:()=>{t(e.id)}},"Unfollow"):a.a.createElement(K.a,{disabled:n.some(n=>n===e.id),onClick:()=>{r(e.id)}},"Follow")));var dn=e=>{let n=e.currentPage,t=e.totalUsersCount,r=e.pageSize,o=e.onPageChanged,c=e.users,s=Object(Ge.a)(e,["currentPage","totalUsersCount","pageSize","onPageChanged","users"]);return a.a.createElement(Ke,null,a.a.createElement(cn,{currentPage:n,onPageChanged:o,totalItemsCount:t,pageSize:r}),a.a.createElement(Ze,null,c.map(e=>a.a.createElement(ln,{user:e,followingInProgress:s.followingInProgress,key:e.id,unfollow:s.unfollow,follow:s.follow}))))},pn=t(258);const fn=Object(pn.a)(e=>e.usersPage.users,e=>e.filter(e=>!0)),mn=e=>e.usersPage.pageSize,gn=e=>e.usersPage.totalUsersCount,bn=e=>e.usersPage.currentPage,hn=e=>e.usersPage.isFetching,En=e=>e.usersPage.followingInProgress;class On extends a.a.Component{constructor(...e){super(...e),this.onPageChanged=e=>{const n=this.props.pageSize;this.props.getUsers(e,n)}}componentDidMount(){const e=this.props,n=e.currentPage,t=e.pageSize;this.props.getUsers(n,t)}render(){return a.a.createElement(a.a.Fragment,null,this.props.isFetching?a.a.createElement(g.a,null):a.a.createElement(dn,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress}))}}var xn=Object(m.d)(Object(i.b)(e=>({users:fn(e),pageSize:mn(e),totalUsersCount:gn(e),currentPage:bn(e),isFetching:hn(e),followingInProgress:En(e)}),{follow:e=>function(){var n=Object(T.a)(I.a.mark((function n(t){return I.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:Fe(t,e,ye.follow.bind(ye),Te);case 1:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),unfollow:e=>function(){var n=Object(T.a)(I.a.mark((function n(t){return I.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:Fe(t,e,ye.unfollow.bind(ye),Ne);case 1:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),getUsers:(e,n)=>function(){var t=Object(T.a)(I.a.mark((function t(r,a){var o;return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r(Re(e)),r(Ae(!0)),t.next=4,ye.getUsers(e,n);case 4:o=t.sent,r(ke(o.items)),r(_e(o.totalCount)),r(Ae(!1));case 8:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}))(On);function Sn(e){return n=>a.a.createElement(r.Suspense,{fallback:a.a.createElement(g.a,null)},a.a.createElement(e,n))}let vn={initialized:!1};const jn=()=>({type:"SN/APP/SET-INITIALIZED"});var wn=(e=vn,n)=>{switch(n.type){case"SN/APP/SET-INITIALIZED":return Object(N.a)(Object(N.a)({},e),{},{initialized:!0});default:return e}},Pn=t(238),Cn=t(174);let yn={};var Un=(e=yn,n)=>e,In=t(259),Tn=t(240);let Nn=Object(m.c)({profilePage:Cn.b,dialoguesPage:Pn.b,friendsBar:Un,usersPage:De,auth:H,form:Tn.a,app:wn}),kn=Object(m.e)(Nn,Object(m.d)(Object(m.a)(In.a),window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__():e=>e));window.__store__=kn;var Rn=kn;const _n=a.a.lazy(()=>t.e(3).then(t.bind(null,572))),An=a.a.lazy(()=>t.e(4).then(t.bind(null,571))),Ln=Sn(_n),Fn=Sn(An);class Dn extends a.a.Component{constructor(...e){super(...e),this.catchAllUnhandledErrors=e=>{s.a.error("Some error occured")}}componentDidMount(){document.title="Social-Network",this.props.initializeApp(),window.addEventListener("unhandledrejection",this.catchAllUnhandledErrors)}componentWillUnmount(){window.removeEventListener("unhandledrejection",this.catchAllUnhandledErrors)}render(){return this.props.initialized?a.a.createElement(h.c,null,a.a.createElement(q,null),a.a.createElement(ve,null),a.a.createElement(h.b,null,a.a.createElement(u.a,null,a.a.createElement(l.a,{path:"/profile/:userId?",render:()=>a.a.createElement(Fn,null)}),a.a.createElement(l.a,{path:"/dialogues",render:()=>a.a.createElement(Ln,null)}),a.a.createElement(l.a,{path:"/news",render:()=>a.a.createElement(Pe,null)}),a.a.createElement(l.a,{path:"/music",render:()=>a.a.createElement(ge,null)}),a.a.createElement(l.a,{path:"/settings",render:()=>a.a.createElement(Ce,null)}),a.a.createElement(l.a,{path:"/users",render:()=>a.a.createElement(xn,null)}),a.a.createElement(l.a,{path:"/login",render:()=>a.a.createElement(ue,null)}),a.a.createElement(l.a,{exact:!0,path:"/",render:()=>a.a.createElement(d.a,{to:"/profile"})}),a.a.createElement(l.a,{path:"*",render:()=>a.a.createElement("div",{className:"notFoundPage"},a.a.createElement("h1",null,"404"),a.a.createElement("h3",null,"Page not found"))})))):a.a.createElement(g.a,null)}}let Gn=Object(m.d)(p.a,Object(i.b)(e=>({initialized:e.app.initialized}),{initializeApp:()=>e=>{let n=e(M());Promise.all([n]).then(()=>{e(jn())})}}))(Dn);var zn=()=>a.a.createElement(f.a,null,a.a.createElement(i.a,{store:Rn},a.a.createElement(Gn,null)));t(555);c.a.render(a.a.createElement(zn,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(e=>{e.unregister()})},67:function(e,n,t){"use strict";var r=t(0),a=t.n(r),o=t(242),c=t.n(o),s=t(13);n.a=e=>a.a.createElement(s.h,null,a.a.createElement("img",{src:c.a,alt:""}))},85:function(e,n,t){"use strict";t.d(n,"a",(function(){return u}));var r=t(43),a=t(0),o=t.n(a),c=t(561),s=t(19);let i=e=>({isAuth:e.auth.isAuth});function u(e){return Object(s.b)(i,{})(n=>{let t=n.isAuth,a=Object(r.a)(n,["isAuth"]);return t?o.a.createElement(e,a):o.a.createElement(c.a,{to:"/login"})})}}},[[288,1,2]]]);
//# sourceMappingURL=main.e7adbc2f.chunk.js.map