const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Pill-CZaOtxYS.js","assets/index-DO1p41Zj.js","assets/index-DzuLWgdw.css","assets/Loading-DeRNbgMo.js"])))=>i.map(i=>d[i]);
import{r as l,_ as r,b as f,c as m,u,a as h,j as e,d as j}from"./index-DO1p41Zj.js";const p=l.lazy(()=>r(()=>import("./Pill-CZaOtxYS.js"),__vite__mapDeps([0,1,2]))),g=l.lazy(()=>r(()=>import("./Loading-DeRNbgMo.js"),__vite__mapDeps([3,1,2]))),v=()=>{const i=f(),o=m(),x=u(),a=h(s=>s.book.data);l.useEffect(()=>{async function s(){var n;const t=((n=i.id)==null?void 0:n.toString())||void 0;if(!await x(j(t))){console.warn(`Book with id ${t} not found`),o("/");return}}s()},[i.id,o]);function d(){var s;return(s=a.genre)==null?void 0:s.map((t,c)=>e.jsx(p,{text:t},c))}return e.jsx("section",{className:"flex justify-center w-full",children:e.jsx("div",{className:"flex justify-center w-10/12",children:e.jsx(l.Suspense,{fallback:e.jsx(g,{}),children:e.jsxs("div",{className:"flex flex-col w-11/12 max-w-4xl",children:[e.jsxs("div",{className:"flex flex-col gap-2 mb-9",children:[e.jsx("h1",{className:"text-4xl",children:a.name}),e.jsx("div",{className:"flex gap-2",children:d()})]}),e.jsxs("div",{className:"flex justify-between flex-col flex-col-reverse md:flex-row gap-12",children:[e.jsx("p",{className:"max-w-lg text-slate-400",children:a.description}),e.jsx("img",{src:a.image,alt:"",loading:"lazy",height:500,width:300})]})]})})})})};export{v as default};
