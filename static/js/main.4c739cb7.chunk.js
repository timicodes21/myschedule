(this.webpackJsonpmyschedule=this.webpackJsonpmyschedule||[]).push([[0],{53:function(e,t,n){},84:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(39),o=n.n(s),d=(n(52),n(53),n(13)),l=n(5),r=n(0),i=function(){return Object(r.jsx)("div",{children:Object(r.jsx)("div",{className:"bg-white p-2 px-md-2 px-lg-5 py-lg-3",children:Object(r.jsx)(d.b,{to:"",children:Object(r.jsx)("h3",{className:"text-success logo",children:"My Schedule!"})})})})},j=n(19),m=n(4),b=n(87),h=n(85),x=n(41),u=n.p+"static/media/profile.2bb79640.png",O=n.p+"static/media/calender.38817852.png",f=n.p+"static/media/notebook.54c271af.png",p=n.p+"static/media/todolist.d401918d.png",N=n.p+"static/media/delete1.f4c0de48.png",y=n.p+"static/media/profilegreen.59cbbbe3.png",g=n.p+"static/media/calendergreen.bab80040.png",v=n.p+"static/media/notebookgreen.3b515b93.png",k=n.p+"static/media/todolistgreen.68fccc39.png",S=n(21),C=n.n(S);var w=function(e,t){var n=Object(a.useState)((function(){try{var n=window.localStorage.getItem(e);return n?JSON.parse(n):t}catch(a){return console.log(a),t}})),c=Object(m.a)(n,2),s=c[0],o=c[1];return[s,function(t){try{var n=t instanceof Function?t(s):t;o(n),window.localStorage.setItem(e,JSON.stringify(n))}catch(a){console.log(a)}}]},T=n(86),I=function(e){var t=e.display,n=e.handleProfile,a=e.handleCalender,c=e.handleNotebook,s=e.handleTodolist,o=e.profileImg,d=e.calenderImg,l=e.notebookImg,i=e.todolistImg;return Object(r.jsx)("div",{children:t?Object(r.jsx)(h.a,{className:"bg-white",children:Object(r.jsxs)("div",{className:"d-flex justify-content-between shadow-sm poss d-md-none bg-white",children:[Object(r.jsx)(T.a,{src:o,onClick:n,className:"iconsm my-3",fluid:!0}),Object(r.jsx)(T.a,{src:d,onClick:a,className:"iconsm my-3",fluid:!0}),Object(r.jsx)(T.a,{src:l,onClick:c,className:"iconsm my-3",fluid:!0}),Object(r.jsx)(T.a,{src:i,onClick:s,className:"iconsm my-3",fluid:!0})]})}):Object(r.jsx)("div",{})})},D=function(e){var t=e.profileImg,n=e.calenderImg,a=e.notebookImg,c=e.todolistImg,s=e.handleProfile,o=e.handleCalender,d=e.handleNotebook,l=e.handleTodolist;return Object(r.jsx)(x.a,{xs:12,md:2,lg:2,children:Object(r.jsxs)("div",{className:"d-none d-md-flex justify-content-between flex-md-column align-items-center shadow-sm p-4",children:[Object(r.jsx)(T.a,{src:t,onClick:s,className:"icon my-3",fluid:!0}),Object(r.jsx)(T.a,{src:n,onClick:o,className:"icon my-3",fluid:!0}),Object(r.jsx)(T.a,{src:a,onClick:d,className:"icon my-3",fluid:!0}),Object(r.jsx)(T.a,{src:c,onClick:l,className:"icon my-3",fluid:!0})]})})},M=function(e){var t=e.profile,n=e.calender,a=e.notebook,c=e.todolist,s=e.handleProfileTodo,o=e.handleCalenderTodo,d=e.handleNotebookTodo,l=e.handleListtodo,i=e.handleAddtodo;return Object(r.jsxs)(x.a,{xs:12,sm:6,md:2,lg:2,className:"shadow-sm bg-white",children:[t&&Object(r.jsxs)("div",{children:[Object(r.jsx)("p",{className:"font-500 font-20 pointer d-none d-md-block text-secondary",onClick:s,children:"Profile"}),Object(r.jsx)("p",{className:"font-500 font-16 pointer d-md-none text-secondary",onClick:s,children:"Profile"})]}),n&&Object(r.jsxs)("div",{children:[Object(r.jsx)("p",{className:"font-500 font-20 pointer text-secondary d-none d-md-block",onClick:o,children:"Set Reminder"}),Object(r.jsx)("p",{className:"font-500 font-16 pointer text-secondary d-md-none",onClick:o,children:"Set Reminder"})]}),a&&Object(r.jsxs)("div",{children:[Object(r.jsx)("p",{className:"font-500 font-20 pointer text-secondary d-none d-md-block",onClick:d,children:"Notebook"}),Object(r.jsx)("p",{className:"font-500 font-16 pointer text-secondary d-md-none",onClick:d,children:"Notebook"})]}),c&&Object(r.jsxs)("div",{children:[Object(r.jsx)("p",{className:"font-500 font-20 pointer text-secondary d-none d-md-block",onClick:l,children:"Todolist"}),Object(r.jsx)("p",{className:"font-500 font-20 pointer text-black d-none d-md-block",onClick:i,children:"Create"}),Object(r.jsx)("p",{className:"font-500 font-16 pointer text-secondary d-md-none",onClick:l,children:"Todolist"}),Object(r.jsx)("p",{className:"font-500 font-16 pointer text-black d-md-none",onClick:i,children:"Create"})]})]})},R=n(88),Y=n(42),P=n(89),B=function(e){var t=e.addtodo,n=e.handleSubmit,a=e.note,c=e.day,s=e.setNote,o=e.setDay;return Object(r.jsx)(h.a,{children:t?Object(r.jsx)(x.a,{xs:12,sm:6,md:8,lg:6,className:"d-md-flex justify-content-center",children:Object(r.jsxs)(R.a,{onSubmit:n,children:[Object(r.jsx)(Y.a,{controlId:"floatingTextarea2",label:"Todo?",children:Object(r.jsx)(R.a.Control,{as:"textarea",required:!0,placeholder:"Leave a comment here",className:"mb-3",value:a,onChange:function(e){return s(e.target.value)},style:{height:"100px"}})}),Object(r.jsxs)(R.a.Select,{className:"mb-3",value:c,onChange:function(e){return o(e.target.value)},required:!0,children:[Object(r.jsx)("option",{value:"Sunday",className:"text-secondary",children:"Sunday"}),Object(r.jsx)("option",{value:"Monday",className:"text-secondary",children:"Monday"}),Object(r.jsx)("option",{value:"Tuesday",className:"text-secondary",children:"Tuesday"}),Object(r.jsx)("option",{value:"Wednesday",className:"text-secondary",children:"Wednesday"}),Object(r.jsx)("option",{value:"Thursday",className:"text-secondary",children:"Thursday"}),Object(r.jsx)("option",{value:"Friday",className:"text-secondary",children:"Friday"}),Object(r.jsx)("option",{value:"Saturday",className:"text-secondary",children:"Saturday"})]}),Object(r.jsx)(P.a,{variant:"success",className:"text-center w-100",type:"submit",children:"Update list"})]})}):""})},L=function(e){var t=e.listtodo,n=e.todolists,a=e.handleAddtodo,c=e.delete1,s=e.handleDelete;return Object(r.jsx)("div",{children:t&&Object(r.jsx)("div",{className:"p-2",children:0===n.length?Object(r.jsxs)("div",{children:[Object(r.jsx)("p",{className:"font-500 font-18 text-danger my-2 d-none d-md-block",children:"You have nothing on your todolist"}),Object(r.jsx)("p",{className:"font-500 font-14 text-danger my-2 d-md-none",children:"You have nothing on your todolist"}),Object(r.jsx)(P.a,{variant:"success",className:"text-center",onClick:a,children:"Create todolist"})]}):n.map((function(e){return Object(r.jsxs)(h.a,{className:"my-2",children:[Object(r.jsx)(x.a,{className:"font-300 font-14 pointer text-secondary",children:e.day}),Object(r.jsx)(x.a,{className:"font-300 font-14 pointer text-secondary",children:e.note}),Object(r.jsx)(x.a,{children:Object(r.jsx)(T.a,{src:c,className:"font-300 font-14 delete",id:e.id,onClick:s,fluid:!0})})]},e.id)}))})})},F=n(28),A=function(e){var t=e.calenderTodo,n=e.dateState,a=e.changeDate,c=e.handleSubmittt,s=e.reminder,o=e.setReminder,d=e.reminderRef,l=e.reminders,i=e.handleRef1,j=e.delete1,m=e.handleDeleteee;return Object(r.jsx)("div",{children:t&&Object(r.jsxs)("div",{className:"calender",children:[Object(r.jsxs)("p",{className:"d-md-none d-flex justify-content-center font-300 font-14",children:["Set a reminder for\xa0",Object(r.jsx)("span",{className:"fw-bold text-success",children:C()(n).format("Do MMMM YYYY")})]}),Object(r.jsx)("div",{className:"d-none d-md-flex justify-content-center",children:Object(r.jsx)(F.a,{value:n,onChange:a,className:"text-success m-5 border rounded"})}),Object(r.jsx)("div",{className:"d-md-none d-flex justify-content-center",children:Object(r.jsx)(F.a,{value:n,onChange:a,className:"text-success m-5 border rounded"})}),Object(r.jsxs)("p",{className:"d-none d-md-flex justify-content-center",children:["Set a reminder for\xa0",Object(r.jsx)("span",{className:"fw-bold text-success",children:C()(n).format("Do MMMM YYYY")})]}),Object(r.jsx)("div",{className:"m-2 m-md-5 mb-5 calender-form",children:Object(r.jsxs)(R.a,{onSubmit:c,className:"calender-form",children:[Object(r.jsx)(Y.a,{controlId:"floatingTextarea2",label:"Reminder",children:Object(r.jsx)(R.a.Control,{as:"textarea",className:"calender-form",placeholder:"Leave a comment here",value:s,required:!0,onChange:function(e){return o(e.target.value)},ref:d,style:{height:"200px"}})}),Object(r.jsx)(P.a,{variant:"success",className:"text-center w-100",type:"submit",children:"Save"})]})}),Object(r.jsxs)("div",{className:"m-2 m-md-5",children:[Object(r.jsx)("p",{className:"font-500 font-18 text-secondary my-2 d-none d-md-block",children:"Reminders"}),Object(r.jsx)("p",{className:"font-500 font-14 text-secondary my-2 d-md-none",children:"Reminders"}),0===l.length?Object(r.jsxs)("div",{className:"mb-7",children:[Object(r.jsx)("p",{className:"font-500 font-18 text-danger my-2 d-none d-md-block",children:"You have nothing on reminders"}),Object(r.jsx)("p",{className:"font-500 font-14 text-danger my-2 d-md-none",children:"You have nothing on reminders"}),Object(r.jsx)(P.a,{variant:"success",className:"text-center",onClick:i,children:"Set Reminder"})]}):Object(r.jsx)("div",{className:"mb-10",children:l.map((function(e){return Object(r.jsxs)(h.a,{className:"my-2 d-flex justify-content-between",children:[Object(r.jsx)(x.a,{className:"font-500 font-18 d-none d-md-block text-secondary",children:e.date}),Object(r.jsx)(x.a,{className:"font-300 font-14 d-md-none text-secondary",children:e.date}),Object(r.jsx)(x.a,{className:"font-500 font-18 d-none d-md-block text-secondary",children:e.remind}),Object(r.jsx)(x.a,{className:"font-300 font-14 d-md-none text-secondary",children:e.remind}),Object(r.jsx)(x.a,{children:Object(r.jsx)(T.a,{src:j,id:e.id,className:"delete",onClick:m,fluid:!0})})]},e.id)}))})]})]})})},U=n(14),q=n.n(U),G=function(e){var t=e.notebookTodo,n=e.handleSubmitt,c=e.notebookk,s=e.setNotebookk,o=e.notebookRef,d=(e.notes,e.handleRef2),l=e.delete1,i=e.handleDeletee,j=e.noteData,b=e.setNoteData,u=Object(a.useState)(!0),O=Object(m.a)(u,2),f=(O[0],O[1],Object(a.useState)(!1)),p=Object(m.a)(f,2);p[0],p[1];return Object(a.useEffect)((function(){var e=localStorage.getItem("token"),t={headers:{"Content-type":"application/json; charset=UTF-8",Authorization:"Bearer ".concat(e)}};q.a.get("https://myschedule-api.herokuapp.com/api/v1/notes",t).then((function(e){console.log(e),b(e.data.notes)}))}),[b]),Object(r.jsx)("div",{children:t&&Object(r.jsxs)("div",{className:"notebook p-3",children:[Object(r.jsx)("div",{className:"my-4",children:Object(r.jsxs)(R.a,{onSubmit:n,children:[Object(r.jsx)(Y.a,{controlId:"floatingTextarea2",label:"Note",children:Object(r.jsx)(R.a.Control,{as:"textarea",placeholder:"Leave a comment here",value:c,required:!0,onChange:function(e){return s(e.target.value)},ref:o,style:{height:"200px"}})}),Object(r.jsx)(P.a,{variant:"success",className:"text-center w-100",type:"submit",children:"Save"})]})}),Object(r.jsx)("p",{className:"font-500 font-18 text-secondary my-2 d-none d-md-block",children:"My Notes"}),Object(r.jsx)("p",{className:"font-500 font-14 text-secondary my-2 d-md-none",children:"My Notes"}),j?0===j.length?Object(r.jsxs)("div",{children:[Object(r.jsx)("p",{className:"font-500 font-18 text-danger my-2 d-none d-md-block",children:"You have no notes"}),Object(r.jsx)("p",{className:"font-500 font-14 text-danger my-2 d-md-none",children:"You have no notes"}),Object(r.jsx)(P.a,{variant:"success",className:"text-center",onClick:d,children:"Write a note"})]}):j.map((function(e){return Object(r.jsxs)(h.a,{className:"my-2",children:[Object(r.jsx)(x.a,{className:"font-500 font-18 d-none d-md-block text-secondary",children:e.note}),Object(r.jsx)(x.a,{className:"font-300 font-14 d-md-none text-secondary",children:e.note}),Object(r.jsx)(x.a,{children:Object(r.jsx)(T.a,{src:l,id:e._id,className:"delete",onClick:i,fluid:!0})})]},e._id)})):""]})})},E=function(e){var t=e.profileTodo,n=e.todolists,a=e.handleTodolist,c=e.delete1,s=e.handleDelete,o=e.notes,d=e.handleNotebook,l=e.handleDeletee,i=e.reminders,j=e.handleCalender,m=e.handleDeleteee;return Object(r.jsx)("div",{children:t&&Object(r.jsxs)("div",{className:"profile",children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("p",{className:"font-500 font-18 text-secondary my-2 d-none d-md-block"}),Object(r.jsx)("p",{className:"font-500 font-14 text-secondary my-2 d-md-none"})]}),Object(r.jsxs)("div",{className:"p-2",children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("p",{className:"font-500 font-18 text-secondary my-2 d-none d-md-block",children:"Todolist"}),Object(r.jsx)("p",{className:"font-500 font-14 text-secondary my-2 d-md-none",children:"Todolist"}),0===n.length?Object(r.jsxs)("div",{children:[Object(r.jsx)("p",{className:"font-500 font-18 text-danger my-2 d-none d-md-block",children:"You have nothing on your todolist"}),Object(r.jsx)("p",{className:"font-500 font-14 text-danger my-2 d-md-none",children:"You have nothing on your todolist"}),Object(r.jsx)(P.a,{variant:"success",className:"text-center",onClick:a,children:"Create todolist"})]}):n.map((function(e){return Object(r.jsxs)(h.a,{className:"my-2",children:[Object(r.jsx)(x.a,{className:"font-300 font-14 pointer text-secondary",children:e.day}),Object(r.jsx)(x.a,{className:"font-300 font-14 pointer text-secondary",children:e.note}),Object(r.jsx)(x.a,{children:Object(r.jsx)(T.a,{src:c,className:"font-300 font-14 delete",id:e.id,onClick:s,fluid:!0})})]},e.id)}))]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("p",{className:"font-500 font-18 text-secondary my-2 d-none d-md-block",children:"My notes"}),Object(r.jsx)("p",{className:"font-500 font-14 text-secondary my-2 d-md-none",children:"My notes"}),0===o.length?Object(r.jsxs)("div",{children:[Object(r.jsx)("p",{className:"font-500 font-18 text-danger my-2 d-none d-md-block",children:"You have no notes"}),Object(r.jsx)("p",{className:"font-500 font-14 text-danger my-2 d-md-none",children:"You have no notes"}),Object(r.jsx)(P.a,{variant:"success",className:"text-center",onClick:d,children:"Write a note"})]}):o.map((function(e){return Object(r.jsxs)(h.a,{className:"my-2",children:[Object(r.jsx)(x.a,{className:"font-500 font-18 d-none d-md-block text-secondary",children:e.note}),Object(r.jsx)(x.a,{className:"font-300 font-14 d-md-none text-secondary",children:e.note}),Object(r.jsx)(x.a,{children:Object(r.jsx)(T.a,{src:c,id:e.id,className:"delete",onClick:l,fluid:!0})})]},e.id)}))]}),Object(r.jsxs)("div",{className:"mb-10",children:[Object(r.jsx)("p",{className:"font-500 font-18 text-secondary my-2 d-none d-md-block",children:"Reminders"}),Object(r.jsx)("p",{className:"font-500 font-14 text-secondary my-2 d-md-none",children:"Reminders"}),0===i.length?Object(r.jsxs)("div",{children:[Object(r.jsx)("p",{className:"font-500 font-18 text-danger my-2 d-none d-md-block",children:"You have nothing on reminders"}),Object(r.jsx)("p",{className:"font-500 font-14 text-danger my-2 d-md-none",children:"You have nothing on reminders"}),Object(r.jsx)(P.a,{variant:"success",className:"text-center",onClick:j,children:"Set Reminder"})]}):i.map((function(e){return Object(r.jsxs)(h.a,{className:"my-2 d-flex justify-content-between",children:[Object(r.jsx)(x.a,{className:"font-500 font-18 d-none d-md-block text-secondary",children:e.date}),Object(r.jsx)(x.a,{className:"font-300 font-14 d-md-none text-secondary",children:e.date}),Object(r.jsx)(x.a,{className:"font-500 font-18 d-none d-md-block text-secondary",children:e.remind}),Object(r.jsx)(x.a,{className:"font-300 font-14 d-md-none text-secondary",children:e.remind}),Object(r.jsx)(x.a,{children:Object(r.jsx)(T.a,{src:c,id:e.id,className:"delete",onClick:m,fluid:!0})})]},e.id)}))]})]})]})})},J=function(){var e=Object(a.useRef)(null),t=Object(a.useRef)(null),n=Object(a.useState)(y),c=Object(m.a)(n,2),s=c[0],o=c[1],d=Object(a.useState)(O),l=Object(m.a)(d,2),i=l[0],S=l[1],T=Object(a.useState)(f),R=Object(m.a)(T,2),Y=R[0],P=R[1],F=Object(a.useState)(p),U=Object(m.a)(F,2),J=U[0],W=U[1],z=Object(a.useState)(!0),_=Object(m.a)(z,2),K=_[0],H=_[1],Q=Object(a.useState)(!1),V=Object(m.a)(Q,2),X=V[0],Z=V[1],$=Object(a.useState)(!1),ee=Object(m.a)($,2),te=ee[0],ne=ee[1],ae=Object(a.useState)(!1),ce=Object(m.a)(ae,2),se=ce[0],oe=ce[1],de=Object(a.useState)(!1),le=Object(m.a)(de,2),re=le[0],ie=le[1],je=Object(a.useState)(!1),me=Object(m.a)(je,2),be=me[0],he=me[1],xe=Object(a.useState)(!1),ue=Object(m.a)(xe,2),Oe=ue[0],fe=ue[1],pe=Object(a.useState)(!1),Ne=Object(m.a)(pe,2),ye=Ne[0],ge=Ne[1],ve=Object(a.useState)(!1),ke=Object(m.a)(ve,2),Se=ke[0],Ce=ke[1],we=Object(a.useState)(""),Te=Object(m.a)(we,2),Ie=Te[0],De=Te[1],Me=Object(a.useState)(!0),Re=Object(m.a)(Me,2),Ye=Re[0],Pe=Re[1],Be=Object(a.useState)(""),Le=Object(m.a)(Be,2),Fe=Le[0],Ae=Le[1],Ue=Object(a.useState)("Sunday"),qe=Object(m.a)(Ue,2),Ge=qe[0],Ee=qe[1],Je=Object(a.useState)(""),We=Object(m.a)(Je,2),ze=We[0],_e=We[1],Ke=Object(a.useState)(new Date),He=Object(m.a)(Ke,2),Qe=He[0],Ve=He[1],Xe=w("todos",[]),Ze=Object(m.a)(Xe,2),$e=Ze[0],et=Ze[1],tt=w("notes",[]),nt=Object(m.a)(tt,2),at=nt[0],ct=(nt[1],w("reminders",[])),st=Object(m.a)(ct,2),ot=st[0],dt=st[1],lt=Object(a.useState)(null),rt=Object(m.a)(lt,2),it=rt[0],jt=rt[1],mt=function(e){var t=$e.filter((function(t){return t.id!=e.target.id}));et(t)},bt=function(e){var t=localStorage.getItem("token"),n={headers:{"Content-type":"application/json; charset=UTF-8",Authorization:"Bearer ".concat(t)}},a="https://myschedule-api.herokuapp.com/api/v1/notes/".concat(e.target.id),c=it.filter((function(t){return t._id!=e.target.id}));jt(c),q.a.delete(a,n).then((function(e){console.log(e)})),_e("")},ht=function(e){console.log(e.target.id);var t=ot.filter((function(t){return t.id!=e.target.id}));dt(t)},xt=function(){Ce(!1),ie(!0),ge(!1),he(!1),fe(!1)},ut=function(){Ce(!1),ie(!1),ge(!0),he(!1),fe(!1)},Ot=function(){Ce(!0),ie(!1),ge(!1),he(!1),fe(!1)},ft=function(){Ce(!1),ie(!1),ge(!1),he(!0),fe(!1)},pt=function(){Ce(!1),ie(!1),ge(!1),he(!1),fe(!0)},Nt=function(){H(!0),Z(!1),ne(!1),oe(!1),Ot(),o(y),S(O),P(f),W(p)},yt=function(){H(!1),Z(!0),ne(!1),oe(!1),ft(),o(u),S(g),P(f),W(p)},gt=function(){H(!1),Z(!1),ne(!0),oe(!1),pt(),o(u),S(O),P(v),W(p)},vt=function(){H(!1),Z(!1),ne(!1),oe(!0),ut(),o(u),S(O),P(f),W(k)},kt=function(e){window.scrollY<100?Pe(!0):Pe(!1)};return window.addEventListener("scroll",kt),Object(r.jsx)("div",{onScroll:kt,children:Object(r.jsxs)(b.a,{fluid:!0,classname:"bg-light",children:[Object(r.jsx)(I,{display:Ye,handleProfile:Nt,handleCalender:yt,handleNotebook:gt,handleTodolist:vt,profileImg:s,calenderImg:i,notebookImg:Y,todolistImg:J}),Object(r.jsxs)(h.a,{className:"bg-white",children:[Object(r.jsx)(D,{profileImg:s,calenderImg:i,notebookImg:Y,todolistImg:J,handleProfile:Nt,handleCalender:yt,handleNotebook:gt,handleTodolist:vt}),Object(r.jsx)(M,{profile:K,calender:X,notebook:te,todolist:se,handleProfileTodo:Ot,handleCalenderTodo:ft,handleNotebookTodo:pt,handleListtodo:ut,handleAddtodo:xt}),Object(r.jsxs)(x.a,{xs:12,sm:6,md:8,lg:8,className:"py-md-1 ps-md-2 py-3 shadow-sm",children:[Object(r.jsx)(B,{addtodo:re,handleSubmit:function(e){e.preventDefault();var t={id:$e.length>0?Math.max.apply(Math,Object(j.a)($e.map((function(e){return e.id}))))+1:0,note:Ie,day:Ge};et([].concat(Object(j.a)($e),[t])),ut(),De(""),Ee("")},note:Ie,day:Ge,setNote:De,setDay:Ee}),Object(r.jsx)(L,{listtodo:ye,todolists:$e,handleAddtodo:xt,delete1:N,handleDelete:mt}),Object(r.jsx)(A,{calenderTodo:be,dateState:Qe,changeDate:function(e){Ve(e);var t=new Date;Qe.getTime()===t.getTime()&&console.log("hello there")},handleSubmittt:function(e){e.preventDefault();var t={id:ot.length>0?Math.max.apply(Math,Object(j.a)(ot.map((function(e){return e.id}))))+1:0,date:C()(Qe).format("Do MMMM YYYY"),remind:Fe};dt([].concat(Object(j.a)(ot),[t])),Ae("")},reminder:Fe,setReminder:Ae,reminderRef:e,reminders:ot,handleRef1:function(){e.current.focus()},delete1:N,handleDeleteee:ht}),Object(r.jsx)(G,{notebookTodo:Oe,handleSubmitt:function(e){e.preventDefault();var t=localStorage.getItem("token"),n={headers:{"Content-type":"application/json; charset=UTF-8",Authorization:"Bearer ".concat(t)}},a={note:ze};q.a.post("https://myschedule-api.herokuapp.com/api/v1/notes",a,n).then((function(e){console.log(e);var t=e.data.note;jt([].concat(Object(j.a)(it),[t]))})),_e("")},notebookk:ze,setNotebookk:_e,notebookRef:t,notes:at,handleRef2:function(){t.current.focus()},delete1:N,handleDeletee:bt,noteData:it,setNoteData:jt}),Object(r.jsx)(E,{profileTodo:Se,todolists:$e,handleTodolist:vt,delete1:N,handleDelete:mt,notes:at,handleNotebook:gt,handleDeletee:bt,reminders:ot,handleCalender:yt,handleDeleteee:ht})]})]})]})})},W=function(){return Object(r.jsxs)("div",{className:"home",children:[Object(r.jsx)(i,{}),Object(r.jsx)(J,{})]})},z=function(){var e=Object(a.useState)(!1),t=Object(m.a)(e,2),n=t[0],c=t[1];return{passwordShow:n,showPassword:function(){c(!n)}}},_=function(){var e=z(),t=e.passwordShow,n=e.showPassword,c=Object(l.f)(),s=Object(a.useState)(""),o=Object(m.a)(s,2),j=o[0],x=o[1],u=Object(a.useState)(""),O=Object(m.a)(u,2),f=O[0],p=O[1],N=Object(a.useState)(""),y=Object(m.a)(N,2),g=y[0],v=y[1],k=Object(a.useState)(!1),S=Object(m.a)(k,2),C=S[0],w=S[1];return Object(r.jsxs)("div",{className:"login bg-light",children:[Object(r.jsx)(i,{}),Object(r.jsx)(b.a,{className:"",children:Object(r.jsx)("div",{className:"p-md-2 py-lg-5 bg-light",children:Object(r.jsxs)(h.a,{children:[Object(r.jsxs)("div",{className:"col-12 col-md-6 col-lg-7 px-md-5 mt-5",children:[Object(r.jsx)("h5",{className:"font-700 pb-2 d-none d-md-block",children:"My Schedule makes life easier by helping you plan your task and schedule ahead of time and also a platform for time management tips."}),Object(r.jsx)("h5",{className:"font-500 font-14 pb-2 d-md-none",children:"My Schedule makes life easierby helping you plan your task and schedule ahead of time and also a platform for time management tips."}),Object(r.jsx)("p",{className:"d-none d-md-block",children:"Notebook, calender, presentation Platform, Reminders, Appointments, Resolutions."}),Object(r.jsx)("p",{className:"d-md-none font-14 font-300",children:"Notebook, calender, presentation Platform, Reminders, Appointments, Resolutions."})]}),Object(r.jsx)("div",{className:"col-12 col-md-6 col-lg-5",children:Object(r.jsxs)("div",{className:"shadow px-3 py-3 bg-white border-10",children:[Object(r.jsx)("h4",{className:"text-success logo text-center",children:"My Schedule!"}),Object(r.jsx)("h5",{className:"font-500 pb-2 text-center mt-5",children:"Sign in to your account"}),Object(r.jsx)("div",{children:Object(r.jsxs)(R.a,{onSubmit:function(e){w(!0),e.preventDefault();var t={email:j,password:f};q.a.post("https://myschedule-api.herokuapp.com/api/v1/auth/login",t,{headers:{"Content-type":"application/json; charset=UTF-8"}}).then((function(e){w(!1),localStorage.setItem("token",e.data.token),console.log(e),c("/home")})).catch((function(e){w(!1),v(e.response.data.msg)}))},children:[Object(r.jsxs)(R.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(r.jsx)(R.a.Label,{className:"font-15",children:"email"}),Object(r.jsx)(R.a.Control,{type:"email",placeholder:"email",required:!0,value:j,onChange:function(e){return x(e.target.value)}}),Object(r.jsx)(R.a.Text,{className:"text-muted"})]}),Object(r.jsxs)(R.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:[Object(r.jsx)(R.a.Label,{className:"font-15",children:"Password"}),Object(r.jsx)(R.a.Control,{type:t?"text":"password",className:"border-bottom",placeholder:"Password",required:!0,value:f,onChange:function(e){return p(e.target.value)}})]}),Object(r.jsx)(R.a.Group,{className:"mb-3",controlId:"formBasicCheckbox",children:Object(r.jsx)(R.a.Check,{type:"checkbox",className:"font-15",onClick:n,label:"show password"})}),Object(r.jsx)("p",{className:"font-14 text-danger",children:g}),Object(r.jsx)(P.a,{variant:"success",type:"submit",className:"text-center w-100",children:C?"Logging in...":"Login"}),Object(r.jsx)(d.b,{to:"/signup",children:Object(r.jsx)(P.a,{variant:"",className:"text-center w-100 text-success border-1 border-success border-rounded my-3 hover",children:"Create an account"})})]})})]})})]})})})]})},K=function(){var e=z(),t=e.passwordShow,n=e.showPassword,c=Object(l.f)(),s=Object(a.useState)(""),o=Object(m.a)(s,2),j=o[0],x=o[1],u=Object(a.useState)(""),O=Object(m.a)(u,2),f=O[0],p=O[1],N=Object(a.useState)(""),y=Object(m.a)(N,2),g=y[0],v=y[1],k=Object(a.useState)(""),S=Object(m.a)(k,2),C=S[0],w=S[1],T=Object(a.useState)(null),I=Object(m.a)(T,2),D=I[0],M=I[1],Y=Object(a.useState)(""),B=Object(m.a)(Y,2),L=B[0],F=B[1],A=Object(a.useState)(""),U=Object(m.a)(A,2),G=U[0],E=U[1],J=Object(a.useState)(!1),W=Object(m.a)(J,2),_=W[0],K=W[1],H=function(){g===C?M(!0):(M(!1),F("password does not match"))};return Object(r.jsxs)("div",{className:"login bg-light",children:[Object(r.jsx)(i,{}),Object(r.jsx)(b.a,{children:Object(r.jsxs)(h.a,{className:"mt-3",children:[Object(r.jsx)("div",{className:"col-12 col-md-3 col-lg-4"}),Object(r.jsx)("div",{className:"col-12 col-md-6 col-lg-4",children:Object(r.jsxs)("div",{className:"shadow px-3 py-3 rounded border-10 bg-white",children:[Object(r.jsx)("h4",{className:"text-success logo text-center",children:"My Schedule!"}),Object(r.jsxs)("h5",{className:"font-500 pb-2 text-center mt-5 font-",children:["Sign Up for ",Object(r.jsx)("span",{className:"text-success logo",children:"My Schedule!"})]}),Object(r.jsx)("div",{children:Object(r.jsxs)(R.a,{onSubmit:function(e){K(!0),e.preventDefault();var t={name:j,email:f,password:g};q.a.post("https://myschedule-api.herokuapp.com/api/v1/auth/register",t,{headers:{"Content-type":"application/json; charset=UTF-8"}}).then((function(e){localStorage.setItem("token",e.data.token),K(!1),c("/")})).catch((function(e){K(!1),"Duplicate valued entered for email field, please choose another value"===e.response.data.msg?E("User already exists"):E(e.response.data.msg)}))},children:[Object(r.jsx)(R.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:Object(r.jsx)(R.a.Control,{type:"text",placeholder:"name",value:j,onChange:function(e){return x(e.target.value)},required:!0})}),Object(r.jsx)(R.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:Object(r.jsx)(R.a.Control,{type:"email",placeholder:"email",value:f,onChange:function(e){return p(e.target.value)},required:!0})}),Object(r.jsx)(R.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:Object(r.jsx)(R.a.Control,{type:t?"text":"password",className:"border-bottom",placeholder:"password",value:g,onKeyUp:H,onChange:function(e){return v(e.target.value)},required:!0})}),Object(r.jsx)(R.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:Object(r.jsx)(R.a.Control,{type:t?"text":"password",className:"border-bottom",placeholder:" Confirm password",value:C,onKeyUp:H,onChange:function(e){return w(e.target.value)},required:!0})}),D?Object(r.jsx)("p",{className:"font-14 text-success",children:"correct password"}):Object(r.jsx)("p",{className:"font-14 text-danger",children:L}),Object(r.jsx)(R.a.Group,{className:"mb-3",controlId:"formBasicCheckbox",children:Object(r.jsx)(R.a.Check,{type:"checkbox",className:"font-15",onClick:n,label:"show password"})}),Object(r.jsx)("p",{className:"font-14 text-danger",children:G}),Object(r.jsx)(P.a,{disabled:!D,variant:"success",type:"submit",className:"text-center w-100",children:_?"Creating account...":"Sign Up"}),Object(r.jsx)(d.b,{to:"/",children:Object(r.jsx)(P.a,{variant:"",className:"text-center w-100 text-success border-1 border-success border-rounded my-3 hover",children:"Already have an account? Login"})})]})})]})}),Object(r.jsx)("div",{className:"col-12 col-md-3 col-lg-4"})]})})]})},H=n(43),Q=n(44),V=n(47),X=n(46),Z=n(45),$=n.n(Z),ee=function(e){Object(V.a)(n,e);var t=Object(X.a)(n);function n(e){var a;return Object(H.a)(this,n),(a=t.call(this,e)).state={options:{chart:{id:"basic-bar"},xaxis:{categories:[1991,1992,1993,1994,1995,1996,1997,1998]}},series:[{name:"series-1",data:[30,40,45,50,49,60,70,91]}]},a}return Object(Q.a)(n,[{key:"render",value:function(){return Object(r.jsx)("div",{className:"app",children:Object(r.jsx)("div",{className:"row",children:Object(r.jsx)("div",{className:"mixed-chart",children:Object(r.jsx)($.a,{options:this.state.options,series:this.state.series,type:"bar",width:"500"})})})})}}]),n}(a.Component);var te=function(){return Object(r.jsx)(d.a,{children:Object(r.jsx)("div",{className:"App",children:Object(r.jsxs)(l.c,{children:[Object(r.jsx)(l.a,{path:"/",element:Object(r.jsx)(_,{})}),Object(r.jsx)(l.a,{path:"/signup",element:Object(r.jsx)(K,{})}),Object(r.jsx)(l.a,{path:"/home",element:Object(r.jsx)(W,{})}),Object(r.jsx)(l.a,{path:"/graph",element:Object(r.jsx)(ee,{})})]})})})},ne=(n(83),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,90)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),s(e),o(e)}))});o.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(te,{})}),document.getElementById("root")),ne()}},[[84,1,2]]]);
//# sourceMappingURL=main.4c739cb7.chunk.js.map