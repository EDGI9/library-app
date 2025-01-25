const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/TextInput-CQG32R5G.js","assets/index-DO1p41Zj.js","assets/index-DzuLWgdw.css","assets/Pill-CZaOtxYS.js"])))=>i.map(i=>d[i]);
import{r as n,_ as p,b as k,c as _,u as y,j as e,d as E,C as I,U as D}from"./index-DO1p41Zj.js";const u=n.lazy(()=>p(()=>import("./TextInput-CQG32R5G.js"),__vite__mapDeps([0,1,2]))),B=n.lazy(()=>p(()=>import("./Pill-CZaOtxYS.js"),__vite__mapDeps([3,1,2]))),O=()=>{var h;let[t,r]=n.useState({name:"",description:"",genre:[],image:""}),[f,b]=n.useState(!0),[o,g]=n.useState("");const d=k(),c=_(),m=y();n.useEffect(()=>{async function s(){var x;const a=((x=d.id)==null?void 0:x.toString())||void 0;if(!a)return;b(!1);const i=await m(E(a));if(!i){console.warn(`Book with id ${a} not found`),c("/");return}r(i)}s()},[d.id,c]);const l=s=>r(a=>({...a,...s})),v=s=>{s.preventDefault(),o.trim()!==""&&(l({genre:[...t.genre,o]}),g(""))},j=(s,a)=>{s.preventDefault();const i=t.genre.filter((x,N)=>N!==a);l({genre:i})},w=async s=>{s.preventDefault();const a={...t};try{f?await m(I(a)):await m(D(d.id,a))}catch(i){console.error("A problem occurred adding or updating a book: ",i)}finally{r({name:"",description:"",genre:[],image:""}),c("/")}};return e.jsxs(e.Fragment,{children:[e.jsx("h3",{className:"text-lg font-semibold p-4",children:"Create/Update Book Record"}),e.jsxs("form",{onSubmit:w,className:"border rounded-lg overflow-hidden p-4",children:[e.jsxs("div",{className:"grid grid-cols-1 gap-x-8 gap-y-10 border-b border-slate-900/10 pb-12 md:grid-cols-2",children:[e.jsxs("div",{children:[e.jsx("h2",{className:"text-base font-semibold leading-7 text-slate-900",children:"Book Info"}),e.jsx("p",{className:"mt-1 text-sm leading-6 text-slate-600",children:"This information will be displayed publicly so be careful what you share."})]}),e.jsxs("div",{className:"grid grid-rows-4 flex flex-col max-w-2xl gap-x-6 gap-y-8 ",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"name",className:"block text-sm font-medium leading-6 text-slate-900",children:"Name"}),e.jsx("div",{className:"mt-2",children:e.jsx("div",{className:"flex shadow-sm  sm:max-w-md",children:e.jsx(u,{name:"name",value:t==null?void 0:t.name,placeholder:"Name",onChange:s=>l({name:s})})})})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"Description",className:"block text-sm font-medium leading-6 text-slate-900",children:"Description"}),e.jsx("div",{className:"mt-2",children:e.jsx("div",{className:"flex rounded-md shadow-sm ring-1 ring-inset ring-slate-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md",children:e.jsx("textarea",{placeholder:"Book description",className:"block flex-1 border-0 bg-transparent py-1.5 pl-1 text-slate-900 placeholder:text-slate-400 focus:ring-0 sm:text-sm sm:leading-6",value:t==null?void 0:t.description,onChange:s=>l({description:s.target.value})})})})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"image",className:"block text-sm font-medium leading-6 text-slate-900",children:"Image"}),e.jsx("div",{className:"mt-2",children:e.jsx("div",{className:"flex shadow-sm  sm:max-w-md",children:e.jsx(u,{name:"image",value:t==null?void 0:t.image,placeholder:"Image URL",onChange:s=>l({image:s})})})})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"genres",className:"block text-sm font-medium leading-6 text-slate-900",children:"Genres"}),e.jsx("div",{className:"flex flex-col mb-3",children:e.jsxs("div",{className:"flex w-full rounded-md shadow-sm  sm:max-w-md",children:[e.jsx(u,{name:"genres",value:o,placeholder:"Genres",onChange:s=>g(s)}),e.jsx("button",{className:"w-[100px] p-0 bg-slate-200 rounded-tr-md rounded-br-md",onClick:v,children:"Add Item"})]})}),e.jsx("div",{className:"flex gap-2",children:(h=t==null?void 0:t.genre)==null?void 0:h.map((s,a)=>e.jsx(B,{text:s,actionText:"x",isEditable:!0,onClick:i=>j(i,a)},a))})]})]})]}),e.jsx("input",{type:"submit",value:"Save Book Record",className:"inline-flex items-center justify-center whitespace-nowrap text-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-slate-100 hover:text-accent-foreground h-9 rounded-md px-3 cursor-pointer mt-4"})]})]})};export{O as default};
