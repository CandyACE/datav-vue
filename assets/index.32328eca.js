import{d as e,U as a,f as n,o as t,c as s,a as l,t as i,b as u}from"./index.60fabeb6.js";var m=e({name:"GInputNumber",props:{modelValue:{type:Number,default:0},label:{type:String,default:""},size:{type:String,default:"mini"},min:{type:Number,default:-1/0},max:{type:Number,default:1/0},step:{type:Number,default:1},isInline:Boolean,suffix:String},emits:[a,"change"],setup:(e,n)=>({handleInput:e=>{n.emit(a,e)},handleChange:(e,a)=>{n.emit("change",e,a)}})});const p={key:0,class:"g-input__caption"},o={key:1,class:"g-input-number__suffix"};m.render=function(e,a,m,d,f,r){const b=n("el-input-number");return t(),s("div",{class:["datav-gui g-input-number",[`--${e.size}`,{"--inline":e.isInline,"has-suffix":!!e.suffix}]]},[l(b,{"model-value":e.modelValue,size:e.size,min:e.min,max:e.max,step:e.step,class:"is-controls-right","onUpdate:modelValue":e.handleInput,onChange:e.handleChange},null,8,["model-value","size","min","max","step","onUpdate:modelValue","onChange"]),e.label?(t(),s("span",p,i(e.label),1)):u("",!0),e.suffix?(t(),s("span",o,i(e.suffix),1)):u("",!0)],2)},m.install=e=>{e.component(m.name,m)};export default m;