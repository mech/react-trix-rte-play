!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("react")):"function"==typeof define&&define.amd?define(["react"],e):"object"==typeof exports?exports["react-trix-rte"]=e(require("react")):t["react-trix-rte"]=e(t.react)}(this,(function(t){return function(t){var e={};function r(o){if(e[o])return e[o].exports;var n=e[o]={i:o,l:!1,exports:{}};return t[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=t,r.c=e,r.d=function(t,e,o){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(o,n,function(e){return t[e]}.bind(null,n));return o},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=9)}([function(t,e,r){t.exports=r(2)()},function(e,r){e.exports=t},function(t,e,r){"use strict";var o=r(3);function n(){}function i(){}i.resetWarningCache=n,t.exports=function(){function t(t,e,r,n,i,a){if(a!==o){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function e(){return t}t.isRequired=t;var r={array:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:i,resetWarningCache:n};return r.PropTypes=r,r}},function(t,e,r){"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(t,e,r){var o=r(5);"string"==typeof o&&(o=[[t.i,o,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};r(7)(o,n);o.locals&&(t.exports=o.locals)},function(t,e,r){(t.exports=r(6)(!1)).push([t.i,'trix-editor{border:1px solid #bbb;border-radius:3px;margin:0;padding:0.4em 0.6em;min-height:5em;outline:none}trix-toolbar *{box-sizing:border-box}trix-toolbar .trix-button-row{display:flex;flex-wrap:nowrap;justify-content:space-between;overflow-x:auto}trix-toolbar .trix-button-group{display:flex;margin-bottom:10px;border:1px solid #bbb;border-top-color:#ccc;border-bottom-color:#888;border-radius:3px}trix-toolbar .trix-button-group:not(:first-child){margin-left:1.5vw}@media (max-device-width: 768px){trix-toolbar .trix-button-group:not(:first-child){margin-left:0}}trix-toolbar .trix-button-group-spacer{flex-grow:1}@media (max-device-width: 768px){trix-toolbar .trix-button-group-spacer{display:none}}trix-toolbar .trix-button{position:relative;float:left;color:rgba(0,0,0,0.6);font-size:0.75em;font-weight:600;white-space:nowrap;padding:0 0.5em;margin:0;outline:none;border:none;border-bottom:1px solid #ddd;border-radius:0;background:transparent}trix-toolbar .trix-button:not(:first-child){border-left:1px solid #ccc}trix-toolbar .trix-button.trix-active{background:#cbeefa;color:black}trix-toolbar .trix-button:not(:disabled){cursor:pointer}trix-toolbar .trix-button:disabled{color:rgba(0,0,0,0.125)}@media (max-device-width: 768px){trix-toolbar .trix-button{letter-spacing:-0.01em;padding:0 0.3em}}trix-toolbar .trix-button--icon{font-size:inherit;width:2.6em;height:1.6em;max-width:calc(0.8em + 4vw);text-indent:-9999px}@media (max-device-width: 768px){trix-toolbar .trix-button--icon{height:2em;max-width:calc(0.8em + 3.5vw)}}trix-toolbar .trix-button--icon::before{display:inline-block;position:absolute;top:0;right:0;bottom:0;left:0;opacity:0.6;content:"";background-position:center;background-repeat:no-repeat;background-size:contain}@media (max-device-width: 768px){trix-toolbar .trix-button--icon::before{right:6%;left:6%}}trix-toolbar .trix-button--icon.trix-active::before{opacity:1}trix-toolbar .trix-button--icon:disabled::before{opacity:0.125}trix-toolbar .trix-button--icon-attach::before{background-image:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%3E%3Cpath%20d%3D%22M16.5%206v11.5a4%204%200%201%201-8%200V5a2.5%202.5%200%200%201%205%200v10.5a1%201%200%201%201-2%200V6H10v9.5a2.5%202.5%200%200%200%205%200V5a4%204%200%201%200-8%200v12.5a5.5%205.5%200%200%200%2011%200V6h-1.5z%22%2F%3E%3C%2Fsvg%3E);top:8%;bottom:4%}trix-toolbar .trix-button--icon-bold::before{background-image:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%3E%3Cpath%20d%3D%22M15.6%2011.8c1-.7%201.6-1.8%201.6-2.8a4%204%200%200%200-4-4H7v14h7c2.1%200%203.7-1.7%203.7-3.8%200-1.5-.8-2.8-2.1-3.4zM10%207.5h3a1.5%201.5%200%201%201%200%203h-3v-3zm3.5%209H10v-3h3.5a1.5%201.5%200%201%201%200%203z%22%2F%3E%3C%2Fsvg%3E)}trix-toolbar .trix-button--icon-italic::before{background-image:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%3E%3Cpath%20d%3D%22M10%205v3h2.2l-3.4%208H6v3h8v-3h-2.2l3.4-8H18V5h-8z%22%2F%3E%3C%2Fsvg%3E)}trix-toolbar .trix-button--icon-link::before{background-image:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%3E%3Cpath%20d%3D%22M9.88%2013.7a4.3%204.3%200%200%201%200-6.07l3.37-3.37a4.26%204.26%200%200%201%206.07%200%204.3%204.3%200%200%201%200%206.06l-1.96%201.72a.91.91%200%201%201-1.3-1.3l1.97-1.71a2.46%202.46%200%200%200-3.48-3.48l-3.38%203.37a2.46%202.46%200%200%200%200%203.48.91.91%200%201%201-1.3%201.3z%22%2F%3E%3Cpath%20d%3D%22M4.25%2019.46a4.3%204.3%200%200%201%200-6.07l1.93-1.9a.91.91%200%201%201%201.3%201.3l-1.93%201.9a2.46%202.46%200%200%200%203.48%203.48l3.37-3.38c.96-.96.96-2.52%200-3.48a.91.91%200%201%201%201.3-1.3%204.3%204.3%200%200%201%200%206.07l-3.38%203.38a4.26%204.26%200%200%201-6.07%200z%22%2F%3E%3C%2Fsvg%3E)}trix-toolbar .trix-button--icon-strike::before{background-image:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%3E%3Cpath%20d%3D%22M12.73%2014l.28.14c.26.15.45.3.57.44.12.14.18.3.18.5%200%20.3-.15.56-.44.75-.3.2-.76.3-1.39.3A13.52%2013.52%200%200%201%207%2014.95v3.37a10.64%2010.64%200%200%200%204.84.88c1.26%200%202.35-.19%203.28-.56.93-.37%201.64-.9%202.14-1.57s.74-1.45.74-2.32c0-.26-.02-.51-.06-.75h-5.21zm-5.5-4c-.08-.34-.12-.7-.12-1.1%200-1.29.52-2.3%201.58-3.02%201.05-.72%202.5-1.08%204.34-1.08%201.62%200%203.28.34%204.97%201l-1.3%202.93c-1.47-.6-2.73-.9-3.8-.9-.55%200-.96.08-1.2.26-.26.17-.38.38-.38.64%200%20.27.16.52.48.74.17.12.53.3%201.05.53H7.23zM3%2013h18v-2H3v2z%22%2F%3E%3C%2Fsvg%3E)}trix-toolbar .trix-button--icon-quote::before{background-image:url(data:image/svg+xml,%3Csvg%20version%3D%221%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%3E%3Cpath%20d%3D%22M6%2017h3l2-4V7H5v6h3zm8%200h3l2-4V7h-6v6h3z%22%2F%3E%3C%2Fsvg%3E)}trix-toolbar .trix-button--icon-heading-1::before{background-image:url(data:image/svg+xml,%3Csvg%20version%3D%221%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%3E%3Cpath%20d%3D%22M12%209v3H9v7H6v-7H3V9h9zM8%204h14v3h-6v12h-3V7H8V4z%22%2F%3E%3C%2Fsvg%3E)}trix-toolbar .trix-button--icon-code::before{background-image:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%3E%3Cpath%20d%3D%22M18.2%2012L15%2015.2l1.4%201.4L21%2012l-4.6-4.6L15%208.8l3.2%203.2zM5.8%2012L9%208.8%207.6%207.4%203%2012l4.6%204.6L9%2015.2%205.8%2012z%22%2F%3E%3C%2Fsvg%3E)}trix-toolbar .trix-button--icon-bullet-list::before{background-image:url(data:image/svg+xml,%3Csvg%20version%3D%221%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%3E%3Cpath%20d%3D%22M4%204a2%202%200%201%200%200%204%202%202%200%200%200%200-4zm0%206a2%202%200%201%200%200%204%202%202%200%200%200%200-4zm0%206a2%202%200%201%200%200%204%202%202%200%200%200%200-4zm4%203h14v-2H8v2zm0-6h14v-2H8v2zm0-8v2h14V5H8z%22%2F%3E%3C%2Fsvg%3E)}trix-toolbar .trix-button--icon-number-list::before{background-image:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%3E%3Cpath%20d%3D%22M2%2017h2v.5H3v1h1v.5H2v1h3v-4H2v1zm1-9h1V4H2v1h1v3zm-1%203h1.8L2%2013.1v.9h3v-1H3.2L5%2010.9V10H2v1zm5-6v2h14V5H7zm0%2014h14v-2H7v2zm0-6h14v-2H7v2z%22%2F%3E%3C%2Fsvg%3E)}trix-toolbar .trix-button--icon-undo::before{background-image:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%3E%3Cpath%20d%3D%22M12.5%208c-2.6%200-5%201-6.9%202.6L2%207v9h9l-3.6-3.6A8%208%200%200%201%2020%2016l2.4-.8a10.5%2010.5%200%200%200-10-7.2z%22%2F%3E%3C%2Fsvg%3E)}trix-toolbar .trix-button--icon-redo::before{background-image:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%3E%3Cpath%20d%3D%22M18.4%2010.6a10.5%2010.5%200%200%200-16.9%204.6L4%2016a8%208%200%200%201%2012.7-3.6L13%2016h9V7l-3.6%203.6z%22%2F%3E%3C%2Fsvg%3E)}trix-toolbar .trix-button--icon-decrease-nesting-level::before{background-image:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%3E%3Cpath%20d%3D%22M3%2019h19v-2H3v2zm7-6h12v-2H10v2zm-8.3-.3l2.8%202.9L6%2014.2%204%2012l2-2-1.4-1.5L1%2012l.7.7zM3%205v2h19V5H3z%22%2F%3E%3C%2Fsvg%3E)}trix-toolbar .trix-button--icon-increase-nesting-level::before{background-image:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%3E%3Cpath%20d%3D%22M3%2019h19v-2H3v2zm7-6h12v-2H10v2zm-6.9-1L1%2014.2l1.4%201.4L6%2012l-.7-.7-2.8-2.8L1%209.9%203.1%2012zM3%205v2h19V5H3z%22%2F%3E%3C%2Fsvg%3E)}trix-toolbar .trix-dialogs{position:relative}trix-toolbar .trix-dialog{position:absolute;top:0;left:0;right:0;font-size:0.75em;padding:15px 10px;background:#fff;box-shadow:0 0.3em 1em #ccc;border-top:2px solid #888;border-radius:5px;z-index:5}trix-toolbar .trix-input--dialog{font-size:inherit;font-weight:normal;padding:0.5em 0.8em;margin:0 10px 0 0;border-radius:3px;border:1px solid #bbb;background-color:#fff;box-shadow:none;outline:none;-webkit-appearance:none;-moz-appearance:none}trix-toolbar .trix-input--dialog.validate:invalid{box-shadow:#F00 0px 0px 1.5px 1px}trix-toolbar .trix-button--dialog{font-size:inherit;padding:0.5em;border-bottom:none}trix-toolbar .trix-dialog--link{max-width:600px}trix-toolbar .trix-dialog__link-fields{display:flex;align-items:baseline}trix-toolbar .trix-dialog__link-fields .trix-input{flex:1}trix-toolbar .trix-dialog__link-fields .trix-button-group{flex:0 0 content;margin:0}trix-editor [data-trix-mutable]:not(.attachment__caption-editor){-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}trix-editor [data-trix-mutable]::-moz-selection,trix-editor [data-trix-cursor-target]::-moz-selection,trix-editor [data-trix-mutable] ::-moz-selection{background:none}trix-editor [data-trix-mutable]::selection,trix-editor [data-trix-cursor-target]::selection,trix-editor [data-trix-mutable] ::selection{background:none}trix-editor [data-trix-mutable].attachment__caption-editor:focus::-moz-selection{background:highlight}trix-editor [data-trix-mutable].attachment__caption-editor:focus::selection{background:highlight}trix-editor [data-trix-mutable].attachment.attachment--file{box-shadow:0 0 0 2px highlight;border-color:transparent}trix-editor [data-trix-mutable].attachment img{box-shadow:0 0 0 2px highlight}trix-editor .attachment{position:relative}trix-editor .attachment:hover{cursor:default}trix-editor .attachment--preview .attachment__caption:hover{cursor:text}trix-editor .attachment__progress{position:absolute;z-index:1;height:20px;top:calc(50% - 10px);left:5%;width:90%;opacity:0.9;transition:opacity 200ms ease-in}trix-editor .attachment__progress[value="100"]{opacity:0}trix-editor .attachment__caption-editor{display:inline-block;width:100%;margin:0;padding:0;font-size:inherit;font-family:inherit;line-height:inherit;color:inherit;text-align:center;vertical-align:top;border:none;outline:none;-webkit-appearance:none;-moz-appearance:none}trix-editor .attachment__toolbar{position:absolute;z-index:1;top:-0.9em;left:0;width:100%;text-align:center}trix-editor .trix-button-group{display:inline-flex}trix-editor .trix-button{position:relative;float:left;color:#666;white-space:nowrap;font-size:80%;padding:0 0.8em;margin:0;outline:none;border:none;border-radius:0;background:transparent}trix-editor .trix-button:not(:first-child){border-left:1px solid #ccc}trix-editor .trix-button.trix-active{background:#cbeefa}trix-editor .trix-button:not(:disabled){cursor:pointer}trix-editor .trix-button--remove{text-indent:-9999px;display:inline-block;padding:0;outline:none;width:1.8em;height:1.8em;line-height:1.8em;border-radius:50%;background-color:#fff;border:2px solid highlight;box-shadow:1px 1px 6px rgba(0,0,0,0.25)}trix-editor .trix-button--remove::before{display:inline-block;position:absolute;top:0;right:0;bottom:0;left:0;opacity:0.7;content:"";background-image:url(data:image/svg+xml,%3Csvg%20height%3D%2224%22%20width%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M19%206.4L17.6%205%2012%2010.6%206.4%205%205%206.4l5.6%205.6L5%2017.6%206.4%2019l5.6-5.6%205.6%205.6%201.4-1.4-5.6-5.6z%22%2F%3E%3Cpath%20d%3D%22M0%200h24v24H0z%22%20fill%3D%22none%22%2F%3E%3C%2Fsvg%3E);background-position:center;background-repeat:no-repeat;background-size:90%}trix-editor .trix-button--remove:hover{border-color:#333}trix-editor .trix-button--remove:hover::before{opacity:1}trix-editor .attachment__metadata-container{position:relative}trix-editor .attachment__metadata{position:absolute;left:50%;top:2em;transform:translate(-50%, 0);max-width:90%;padding:0.1em 0.6em;font-size:0.8em;color:#fff;background-color:rgba(0,0,0,0.7);border-radius:3px}trix-editor .attachment__metadata .attachment__name{display:inline-block;max-width:100%;vertical-align:bottom;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}trix-editor .attachment__metadata .attachment__size{margin-left:0.2em;white-space:nowrap}.trix-content{line-height:1.5}.trix-content *{box-sizing:border-box;margin:0;padding:0}.trix-content h1{font-size:1.2em;line-height:1.2}.trix-content blockquote{border:0 solid #ccc;border-left-width:0.3em;margin-left:0.3em;padding-left:0.6em}.trix-content [dir=rtl] blockquote,.trix-content blockquote[dir=rtl]{border-width:0;border-right-width:0.3em;margin-right:0.3em;padding-right:0.6em}.trix-content li{margin-left:1em}.trix-content [dir=rtl] li{margin-right:1em}.trix-content pre{display:inline-block;width:100%;vertical-align:top;font-family:monospace;font-size:0.9em;padding:0.5em;white-space:pre;background-color:#eee;overflow-x:auto}.trix-content img{max-width:100%;height:auto}.trix-content .attachment{display:inline-block;position:relative;max-width:100%}.trix-content .attachment a{color:inherit;text-decoration:none}.trix-content .attachment a:hover,.trix-content .attachment a:visited:hover{color:inherit}.trix-content .attachment__caption{text-align:center}.trix-content .attachment__caption .attachment__name+.attachment__size::before{content:\' \\B7   \'}.trix-content .attachment--preview{width:100%;text-align:center}.trix-content .attachment--preview .attachment__caption{color:#666;font-size:0.9em;line-height:1.2}.trix-content .attachment--file{color:#333;line-height:1;margin:0 2px 2px 2px;padding:0.4em 1em;border:1px solid #bbb;border-radius:5px}.trix-content .attachment-gallery{display:flex;flex-wrap:wrap;position:relative}.trix-content .attachment-gallery .attachment{flex:1 0 33%;padding:0 0.5em;max-width:33%}.trix-content .attachment-gallery.attachment-gallery--2 .attachment,.trix-content .attachment-gallery.attachment-gallery--4 .attachment{flex-basis:50%;max-width:50%}\n',""])},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var r=function(t,e){var r=t[1]||"",o=t[3];if(!o)return r;if(e&&"function"==typeof btoa){var n=(a=o,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=o.sources.map((function(t){return"/*# sourceURL="+o.sourceRoot+t+" */"}));return[r].concat(i).concat([n]).join("\n")}var a;return[r].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+r+"}":r})).join("")},e.i=function(t,r){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},n=0;n<this.length;n++){var i=this[n][0];"number"==typeof i&&(o[i]=!0)}for(n=0;n<t.length;n++){var a=t[n];"number"==typeof a[0]&&o[a[0]]||(r&&!a[2]?a[2]=r:r&&(a[2]="("+a[2]+") and ("+r+")"),e.push(a))}},e}},function(t,e,r){var o,n,i={},a=(o=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===n&&(n=o.apply(this,arguments)),n}),l=function(t,e){return e?e.querySelector(t):document.querySelector(t)},c=function(t){var e={};return function(t,r){if("function"==typeof t)return t();if(void 0===e[t]){var o=l.call(this,t,r);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(t){o=null}e[t]=o}return e[t]}}(),s=null,u=0,d=[],b=r(8);function p(t,e){for(var r=0;r<t.length;r++){var o=t[r],n=i[o.id];if(n){n.refs++;for(var a=0;a<n.parts.length;a++)n.parts[a](o.parts[a]);for(;a<o.parts.length;a++)n.parts.push(v(o.parts[a],e))}else{var l=[];for(a=0;a<o.parts.length;a++)l.push(v(o.parts[a],e));i[o.id]={id:o.id,refs:1,parts:l}}}}function x(t,e){for(var r=[],o={},n=0;n<t.length;n++){var i=t[n],a=e.base?i[0]+e.base:i[0],l={css:i[1],media:i[2],sourceMap:i[3]};o[a]?o[a].parts.push(l):r.push(o[a]={id:a,parts:[l]})}return r}function g(t,e){var r=c(t.insertInto);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=d[d.length-1];if("top"===t.insertAt)o?o.nextSibling?r.insertBefore(e,o.nextSibling):r.appendChild(e):r.insertBefore(e,r.firstChild),d.push(e);else if("bottom"===t.insertAt)r.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var n=c(t.insertAt.before,r);r.insertBefore(e,n)}}function h(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=d.indexOf(t);e>=0&&d.splice(e,1)}function m(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var o=function(){0;return r.nc}();o&&(t.attrs.nonce=o)}return f(e,t.attrs),g(t,e),e}function f(t,e){Object.keys(e).forEach((function(r){t.setAttribute(r,e[r])}))}function v(t,e){var r,o,n,i;if(e.transform&&t.css){if(!(i="function"==typeof e.transform?e.transform(t.css):e.transform.default(t.css)))return function(){};t.css=i}if(e.singleton){var a=u++;r=s||(s=m(e)),o=F.bind(null,r,a,!1),n=F.bind(null,r,a,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(r=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",f(e,t.attrs),g(t,e),e}(e),o=E.bind(null,r,e),n=function(){h(r),r.href&&URL.revokeObjectURL(r.href)}):(r=m(e),o=k.bind(null,r),n=function(){h(r)});return o(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;o(t=e)}else n()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=a()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var r=x(t,e);return p(r,e),function(t){for(var o=[],n=0;n<r.length;n++){var a=r[n];(l=i[a.id]).refs--,o.push(l)}t&&p(x(t,e),e);for(n=0;n<o.length;n++){var l;if(0===(l=o[n]).refs){for(var c=0;c<l.parts.length;c++)l.parts[c]();delete i[l.id]}}}};var y,w=(y=[],function(t,e){return y[t]=e,y.filter(Boolean).join("\n")});function F(t,e,r,o){var n=r?"":o.css;if(t.styleSheet)t.styleSheet.cssText=w(e,n);else{var i=document.createTextNode(n),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}function k(t,e){var r=e.css,o=e.media;if(o&&t.setAttribute("media",o),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}function E(t,e,r){var o=r.css,n=r.sourceMap,i=void 0===e.convertToAbsoluteUrls&&n;(e.convertToAbsoluteUrls||i)&&(o=b(o)),n&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */");var a=new Blob([o],{type:"text/css"}),l=t.href;t.href=URL.createObjectURL(a),l&&URL.revokeObjectURL(l)}},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var r=e.protocol+"//"+e.host,o=r+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,(function(t,e){var n,i=e.trim().replace(/^"(.*)"$/,(function(t,e){return e})).replace(/^'(.*)'$/,(function(t,e){return e}));return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?t:(n=0===i.indexOf("//")?i:0===i.indexOf("/")?r+i:o+i.replace(/^\.\//,""),"url("+JSON.stringify(n)+")")}))}},function(t,e,r){"use strict";r.r(e),r.d(e,"ReactTrixRTEInput",(function(){return d})),r.d(e,"ReactTrixRTEToolbar",(function(){return D}));var o=r(0),n=r.n(o),i=r(1),a=r.n(i);r(4);function l(){return(l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t}).apply(this,arguments)}function c(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var r=[],o=!0,n=!1,i=void 0;try{for(var a,l=t[Symbol.iterator]();!(o=(a=l.next()).done)&&(r.push(a.value),!e||r.length!==e);o=!0);}catch(t){n=!0,i=t}finally{try{o||null==l.return||l.return()}finally{if(n)throw i}}return r}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return s(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return s(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,o=new Array(e);r<e;r++)o[r]=t[r];return o}function u(t){var e=t.defaultValue,r=t.toolbarId,o=t.onBlur,n=t.onFocus,s=t.onChange,u=t.onInitialize,d=t.onFileAccepted,b=t.onAttachmentAdd,p=t.onAttachmentRemove,x=t.onSelectionChange,g=t.onBeforeInitialize,h=t.trixInputRef,m=t.isRailsDirectUpload,f=t.placeholder,v=t.autofocus,y=t.className,w=t.railsDirectUploadUrl,F=t.railsBlobUrl,k=h||Object(i.useRef)(),E=c(Object(i.useState)(e),2),D=E[0],z=E[1],A=t.id||function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"react-trix-rte-input-",e=(new Date).getTime(),r=Math.random().toFixed(9).slice(2);return"".concat(t).concat(e,"-").concat(r)}(),C=t.name||"content",_=m?{"data-direct-upload-url":w||"/rails/active_storage/direct_uploads","data-blob-url-template":F||"/rails/active_storage/blobs/:signed_id/*filename"}:{},O={};function j(t){var e=t.target.value;console.log("TESTING-2",k),z(e),s&&s(t,e)}return v&&(O.autofocus=!0),y&&(O.class=y),Object(i.useEffect)((function(){console.log("1. mount",k);var t=k;if(k&&k.current){var e=k.current.addEventListener;e("trix-change",j),n&&e("trix-focus",n),o&&e("trix-blur",o),u&&e("trix-initialize",u),d&&e("trix-file-accept",d),b&&e("trix-attachment-add",b),p&&e("trix-attachment-remove",p),x&&e("trix-selection-change",x),g&&e("trix-before-initialize",g)}return function(){if(console.log("2. unmount",t),t&&t.current){var e=t.current.removeEventListener;console.log("is removeEventListener been called?",t.current),e("trix-change",j),n&&e("trix-focus",n),o&&e("trix-blur",o),u&&e("trix-initialize",u),d&&e("trix-file-accept",d),b&&e("trix-attachment-add",b),x&&e("trix-selection-change",x),p&&e("trix-attachment-remove",p),g&&e("trix-before-initialize",g)}}}),[]),a.a.createElement(a.a.Fragment,null,a.a.createElement("input",{id:A,value:D,type:"hidden",name:C}),a.a.createElement("trix-editor",l({toolbar:r,placeholder:f,ref:k,input:A},_,O)))}u.defaultProps={isRailsDirectUpload:!1,defaultValue:""},u.propTypes={id:n.a.string,toolbarId:n.a.string,defaultValue:n.a.string,name:n.a.string,onChange:n.a.func,onBlur:n.a.func,onFocus:n.a.func,onFileAccepted:n.a.func,onAttachmentAdd:n.a.func,onAttachmentRemove:n.a.func,onSelectionChange:n.a.func,onInitialize:n.a.func,onBeforeInitialize:n.a.func,trixInputRef:n.a.func,isRailsDirectUpload:n.a.bool,placeholder:n.a.string,autofocus:n.a.bool,className:n.a.string,railsDirectUploadUrl:n.a.string,railsBlobUrl:n.a.string};var d=u,b={bold:{type:"button",classNames:"trix-button trix-button--icon trix-button--icon-bold",languageKey:"bold",tabIndex:"-1",trixButtonGroup:"text-tools",data:{trixAttribute:"bold",trixKey:"b"}},italic:{type:"button",classNames:"trix-button trix-button--icon trix-button--icon-italic",languageKey:"italic",tabIndex:"-1",trixButtonGroup:"text-tools",data:{trixAttribute:"italic",trixKey:"i"}},strike:{type:"button",classNames:"trix-button trix-button--icon trix-button--icon-strike",languageKey:"strike",tabIndex:"-1",trixButtonGroup:"text-tools",data:{trixAttribute:"strike"}},link:{type:"button",classNames:"trix-button trix-button--icon trix-button--icon-link",languageKey:"link",tabIndex:"-1",trixButtonGroup:"text-tools",data:{trixAttribute:"href",trixKey:"k",trixAction:"link"}},heading1:{type:"button",classNames:"trix-button trix-button--icon trix-button--icon-heading-1",languageKey:"heading1",tabIndex:"-1",trixButtonGroup:"block-tools",data:{trixAttribute:"heading1"}},quote:{type:"button",classNames:"trix-button trix-button--icon trix-button--icon-quote",languageKey:"quote",tabIndex:"-1",trixButtonGroup:"block-tools",data:{trixAttribute:"quote"}},code:{type:"button",classNames:"trix-button trix-button--icon trix-button--icon-code",languageKey:"code",tabIndex:"-1",trixButtonGroup:"block-tools",data:{trixAttribute:"code"}},bullet:{type:"button",classNames:"trix-button trix-button--icon trix-button--icon-bullet-list",languageKey:"bullets",tabIndex:"-1",trixButtonGroup:"block-tools",data:{trixAttribute:"bullet"}},number:{type:"button",classNames:"trix-button trix-button--icon trix-button--icon-number-list",languageKey:"numbers",tabIndex:"-1",trixButtonGroup:"block-tools",data:{trixAttribute:"number"}},outdent:{type:"button",classNames:"trix-button trix-button--icon trix-button--icon-decrease-nesting-level",languageKey:"outdent",tabIndex:"-1",trixButtonGroup:"block-tools",data:{trixAction:"decreaseNestingLevel"}},indent:{type:"button",classNames:"trix-button trix-button--icon trix-button--icon-increase-nesting-level",languageKey:"indent",tabIndex:"-1",trixButtonGroup:"block-tools",data:{trixAction:"increaseNestingLevel"}},attachFiles:{type:"button",classNames:"trix-button trix-button--icon trix-button--icon-attach",languageKey:"attachFiles",tabIndex:"-1",trixButtonGroup:"file-tools",data:{trixAction:"attachFiles"}},undo:{type:"button",classNames:"trix-button trix-button--icon trix-button--icon-undo",languageKey:"undo",tabIndex:"-1",trixButtonGroup:"history-tools",data:{trixAction:"undo",trixKey:"z"}},redo:{type:"button",classNames:"trix-button trix-button--icon trix-button--icon-redo",languageKey:"redo",tabIndex:"-1",trixButtonGroup:"history-tools",data:{trixAction:"redo",trixKey:"shift+z"}}},p={attachFiles:"Attach Files",bold:"Bold",bullets:"Bullets",byte:"Byte",bytes:"Bytes",captionPlaceholder:"Add a caption…",code:"Code",heading1:"Heading",indent:"Increase Level",italic:"Italic",link:"Link",numbers:"Numbers",outdent:"Decrease Level",quote:"Quote",redo:"Redo",remove:"Remove",strike:"Strikethrough",undo:"Undo",unlink:"Unlink",url:"URL",urlPlaceholder:"Enter a URL…",GB:"GB",KB:"KB",MB:"MB",PB:"PB",TB:"TB"},x={"text-tools":"trix-button-group trix-button-group--text-tools","block-tools":"trix-button-group trix-button-group--block-tools","file-tools":"trix-button-group trix-button-group--file-tools","history-tools":"trix-button-group trix-button-group--history-tools"};function g(){return(g=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t}).apply(this,arguments)}function h(t){var e=t.type,r=t.classNames,o=t.data,n=t.tabIndex,i=t.languageKey,l=t.elementProps,c={};if(o){var s=o.trixAttribute,u=o.trixKey,d=o.trixAction;s&&(c["data-trix-attribute"]=s),d&&(c["data-trix-action"]=d),s&&(c["data-trix-key"]=u)}return a.a.createElement("button",g({type:e},c,{tabIndex:n,className:r,title:p[i]},l),p[i])}h.defaultProps={elementProps:{}},h.propTypes={type:n.a.string.isRequired,classNames:n.a.string.isRequired,data:n.a.object,tabIndex:n.a.string,languageKey:n.a.string.isRequired,elementProps:n.a.object};var m=h;var f=function(){return a.a.createElement("span",{className:"trix-button-group-spacer"})};var v=function(){return a.a.createElement("div",{"data-trix-dialogs":!0,className:"trix-dialogs"},a.a.createElement("div",{className:"trix-dialog trix-dialog--link","data-trix-dialog":"href","data-trix-dialog-attribute":"href"},a.a.createElement("div",{className:"trix-dialog__link-fields"},a.a.createElement("input",{type:"url",name:"href",className:"trix-input trix-input--dialog",placeholder:p.urlPlaceholder,"aria-label":p.url,required:!0,"data-trix-input":!0}),a.a.createElement("div",{className:"trix-button-group"},a.a.createElement("input",{type:"button",className:"trix-button trix-button--dialog",value:p.link,"data-trix-method":"setAttribute"}),a.a.createElement("input",{type:"button",className:"trix-button trix-button--dialog",value:p.unlink,"data-trix-method":"removeAttribute"})))))};function y(){return(y=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t}).apply(this,arguments)}function w(t){var e,r=t.groupName,o=t.toolbarActionOptions;return a.a.createElement("span",{className:x[r],"data-trix-button-group":r},(e=[],o.forEach((function(t,r){e.push(a.a.createElement(m,y({key:r},t)))})),e))}w.propTypes={groupName:n.a.string.isRequired,toolbarActionOptions:n.a.array.isRequired};var F=w;function k(){return(k=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t}).apply(this,arguments)}function E(t){var e=t.disableGroupingAction,r=void 0!==e&&e,o=t.toolbarId,n=t.toolbarActions,i=t.customToolbarActions,l=n&&0!==n.length,c=Object.assign(b,i);function s(){var t,e,r=(t=c,e="trixButtonGroup",Object.keys(t).reduce((function(r,o){var n=t[o][e];return r[n]=r[n]||[],r[n].push(t[o]),r}),{})),o=[];for(var n in r){var i=r[n];if("history-tools"===n){var l=(new Date).getTime();o.push(a.a.createElement(f,{key:l}))}o.push(a.a.createElement(F,{key:n,toolbarActionOptions:i,groupName:n}))}return o}return l&&(c=n.reduce((function(t,e){var r=b[e];return r&&(t[e]=r),t}),{})),a.a.createElement("trix-toolbar",{id:o},a.a.createElement("div",{className:"trix-button-row"},r?a.a.createElement("span",{className:"trix-button-group"},function(){var t=[];for(var e in c)t.push(a.a.createElement(m,k({key:e},c[e])));return t}()):s()),l&&n.includes("link")?a.a.createElement(v,null):l?void 0:a.a.createElement(v,null))}E.propTypes={disableGroupingAction:n.a.bool,toolbarId:n.a.string,toolbarActions:n.a.array,customToolbarActions:n.a.object};var D=E}])}));