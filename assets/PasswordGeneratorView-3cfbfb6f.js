import{n as o,h as l,_,i as s}from"./index-68e95e77.js";import{_ as a,a as p}from"./VRow-dbbb0248.js";const u={props:{label:{type:String,required:!0},icon:{type:String,default:"mdi-open-in-new"},color:{type:String,default:"primary"}}};var m=function(){var n=this,e=n._self._c;return e(l,{attrs:{target:"_blank",color:n.color}},[e(_,{staticClass:"pr-1"},[n._v(" "+n._s(n.icon)+" ")]),n._v(" "+n._s(n.label)+" ")],1)},d=[],f=o(u,m,d,!1,null,null,null,null);const c=f.exports,v={name:"PasswordGenerator",components:{BaseButton:c},data(){return{password:"",length:8}},mounted(){},methods:{generatePassword(){const t={lowercase:"abcdefghijklmnopqrstuvwxyz",uppercase:"ABCDEFGHIJKLMNOPQRSTUVWXYZ",number:"0123456789",symbol:"!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"};let n="";n+=t.lowercase,n+=t.uppercase,n+=t.symbol,n+=t.number,this.password="";for(let e=0;e<this.length;e++)this.password+=n[Math.floor(Math.random()*n.length)]},copyToClipBoard(t){navigator.clipboard.writeText(t)}}};var g=function(){var n=this,e=n._self._c;return e("div",[e(a,[e(s,{attrs:{xs:"12",md:"2"}},[e(p,{attrs:{label:"Количество символов",type:"number",min:"8",max:"20"},model:{value:n.length,callback:function(r){n.length=r},expression:"length"}})],1),e(s,{staticClass:"mt-2",attrs:{xs:"12",md:"2"}},[e(c,{attrs:{label:"Генерировать",icon:"mdi-dice-multiple-outline"},nativeOn:{click:function(r){return n.generatePassword.apply(null,arguments)}}})],1)],1),e(a,[e(s,{attrs:{xs:"12",md:"2"}},[n._v(" "+n._s(n.password)+" ")]),e(s,{attrs:{xs:"12",md:"2"}},[e(l,{attrs:{icon:"",color:"secondary",title:"Скопировать",disabled:!n.password},on:{click:function(r){return n.copyToClipBoard(n.password)}}},[e(_,[n._v("mdi-content-copy")])],1)],1)],1)],1)},h=[],w=o(v,g,h,!1,null,null,null,null);const i=w.exports,b={components:{PasswordGenerator:i}};var y=function(){var n=this,e=n._self._c;return e(i)},x=[],$=o(b,y,x,!1,null,null,null,null);const P=$.exports;export{P as default};