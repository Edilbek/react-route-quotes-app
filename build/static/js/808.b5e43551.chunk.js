"use strict";(self.webpackChunkreact_complete_guide=self.webpackChunkreact_complete_guide||[]).push([[808],{808:function(e,t,s){s.r(t),s.d(t,{default:function(){return _}});var n=s(791),c=s(995),r=s(853),i=s(880),u=s(523),o="QuoteItem_item__Q6KwW",a=s(184),d=function(e){var t=e.text,s=e.author,n=e.id;return(0,a.jsxs)("li",{className:o,children:[(0,a.jsxs)("figure",{children:[(0,a.jsx)("blockquote",{children:(0,a.jsx)("p",{children:t})}),(0,a.jsx)("figcaption",{children:s})]}),(0,a.jsx)(u.rU,{className:"btn",to:"/quotes/".concat(n),children:"View Fullscreen"})]})},l="QuoteList_list__MLz6k",h="QuoteList_sorting__GDrEn",x=function(e){var t=e.quotes,s=(0,i.k6)(),c=(0,i.TH)(),r="asc"===new URLSearchParams(c.search).get("sort"),u=function(e,t){return e.sort((function(e,s){return t?e.id>s.id?1:-1:e.id<s.id?1:-1}))}(t,r);return(0,a.jsxs)(n.Fragment,{children:[(0,a.jsx)("div",{className:h,children:(0,a.jsxs)("button",{onClick:function(){s.push({pathname:c.pathname,search:"?sort=".concat(r?"desc":"asc")})},children:["Sort ",r?"Desc":"Asc"]})}),(0,a.jsx)("ul",{className:l,children:u.map((function(e){return(0,a.jsx)(d,{id:e.id,author:e.author,text:e.text},e.id)}))})]})},f=s(556),j="NoQuotesFound_noquotes__EUQsM",m=function(){return(0,a.jsxs)("div",{className:j,children:[(0,a.jsx)("p",{children:"No quotes found!"}),(0,a.jsx)(u.rU,{to:"/new-quote",className:"btn",children:"Add a Quote"})]})},_=function(){var e=(0,c.Z)(r.Lf,!0),t=e.sendRequest,s=e.status,i=e.data,u=e.error;return(0,n.useEffect)((function(){t()}),[t]),"pending"===s?(0,a.jsx)("div",{className:"centered",children:(0,a.jsx)(f.Z,{})}):u?(0,a.jsx)("p",{className:"centered focused",children:u}):"completed"!==s||i&&0!==i.length?(0,a.jsx)(x,{quotes:i}):(0,a.jsx)(m,{})}}}]);
//# sourceMappingURL=808.b5e43551.chunk.js.map