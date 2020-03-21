!function(e,t){for(var n in t)e[n]=t[n]}(exports,function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){e.exports=require("path")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(2),o=n(3),a=n(4).loadMessageBundle(n(0).join(__dirname,"extension.ts")),s="listening on.* (https?://\\S+|[0-9]+)",i="http://localhost:%s",l="%s",c="${workspaceFolder}";class u extends r.Disposable{constructor(e){super(()=>this.internalDispose()),this.session=e,this.hasFired=!1,this.disposables=[],this.regexp=new RegExp(e.configuration.serverReadyAction.pattern||s,"i")}static start(e){if(e.configuration.serverReadyAction){let t=u.detectors.get(e);return t||(t=new u(e),u.detectors.set(e,t)),t}}static stop(e){let t=u.detectors.get(e);t&&(u.detectors.delete(e),t.dispose())}static rememberShellPid(e,t){let n=u.detectors.get(e);n&&(n.shellPid=t)}static async startListeningTerminalData(){this.terminalDataListener||(this.terminalDataListener=r.window.onDidWriteTerminalData(async e=>{const t=await e.terminal.processId;for(let[,n]of this.detectors)if(n.shellPid===t)return void n.detectPattern(e.data);for(let[,t]of this.detectors)if(t.detectPattern(e.data))return}))}internalDispose(){this.disposables.forEach(e=>e.dispose()),this.disposables=[]}detectPattern(e){if(!this.hasFired){const t=this.regexp.exec(e);if(t&&t.length>=1)return this.openExternalWithString(this.session,t.length>1?t[1]:""),this.hasFired=!0,this.internalDispose(),!0}return!1}openExternalWithString(e,t){const n=e.configuration.serverReadyAction;let s;if(""===t){const e=n.uriFormat||"";if(e.indexOf("%s")>=0){const t=a(0,null,e);return void r.window.showErrorMessage(t,{modal:!0}).then(e=>void 0)}s=e}else{const e=n.uriFormat||(/^[0-9]+$/.test(t)?i:l);if(2!==e.split("%s").length){const t=a(1,null,e);return void r.window.showErrorMessage(t,{modal:!0}).then(e=>void 0)}s=o.format(e,t)}this.openExternalWithUri(e,s)}openExternalWithUri(e,t){const n=e.configuration.serverReadyAction;switch(n.action||"openExternally"){case"openExternally":r.env.openExternal(r.Uri.parse(t));break;case"debugWithChrome":if("wsl"===r.env.remoteName||r.extensions.getExtension("msjsdiag.debugger-for-chrome"))r.debug.startDebugging(e.workspaceFolder,{type:"chrome",name:"Chrome Debug",request:"launch",url:t,webRoot:n.webRoot||c},e);else{const e=a(2,null,"debugWithChrome","Debugger for Chrome");r.window.showErrorMessage(e,{modal:!0}).then(e=>void 0)}}}}u.detectors=new Map,t.activate=function(e){e.subscriptions.push(r.debug.onDidChangeActiveDebugSession(e=>{e&&e.configuration.serverReadyAction&&u.start(e)&&u.startListeningTerminalData()})),e.subscriptions.push(r.debug.onDidTerminateDebugSession(e=>{u.stop(e)}));const t=new Set;e.subscriptions.push(r.debug.registerDebugConfigurationProvider("*",{resolveDebugConfiguration:(n,o)=>(o.type&&o.serverReadyAction&&(t.has(o.type)||(t.add(o.type),function(e,t){e.subscriptions.push(r.debug.registerDebugAdapterTrackerFactory(t,{createDebugAdapterTracker(e){const t=u.start(e);if(t){let n;return{onDidSendMessage:e=>{if("event"===e.type&&"output"===e.event&&e.body)switch(e.body.category){case"console":case"stderr":case"stdout":e.body.output&&t.detectPattern(e.body.output)}"request"===e.type&&"runInTerminal"===e.command&&e.arguments&&"integrated"===e.arguments.kind&&(n=e.seq)},onWillReceiveMessage:t=>{n&&"response"===t.type&&"runInTerminal"===t.command&&t.body&&n===t.request_seq&&(n=void 0,u.rememberShellPid(e,t.body.shellProcessId))}}}}}))}(e,o.type))),o)}))}},function(e,t){e.exports=require("vscode")},function(e,t){e.exports=require("util")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o,a,s,i,l=n(0),c=n(5),u=Object.prototype.toString;function d(e){return void 0!==e}function f(e){return"[object String]"===u.call(e)}function g(e){return JSON.parse(c.readFileSync(e,"utf8"))}function p(e,t){return i&&(e="［"+e.replace(/[aouei]/g,"$&$&")+"］"),0===t.length?e:e.replace(/\{(\d+)\}/g,function(e,n){var r=n[0],o=t[r],a=e;return"string"==typeof o?a=o:"number"!=typeof o&&"boolean"!=typeof o&&void 0!==o&&null!==o||(a=String(o)),a})}function h(e){return function(t,n){for(var r=[],o=2;o<arguments.length;o++)r[o-2]=arguments[o];return function(e){return"[object Number]"===u.call(e)}(t)?t>=e.length?void console.error("Broken localize call found. Index out of bounds. Stacktrace is\n: "+new Error("").stack):p(e[t],r):f(n)?(console.warn("Message "+n+" didn't get externalized correctly."),p(n,r)):void console.error("Broken localize call found. Stacktrace is\n: "+new Error("").stack)}}function b(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];return p(t,n)}function v(e,t){return a[e]=t,t}function m(e,t){var n,r=l.join(s.cacheRoot,e.id+"-"+e.hash+".json"),o=!1,a=!1;try{return n=JSON.parse(c.readFileSync(r,{encoding:"utf8",flag:"r"})),function(e){var t=new Date;c.utimes(e,t,t,function(){})}(r),n}catch(e){if("ENOENT"===e.code)a=!0;else{if(!(e instanceof SyntaxError))throw e;console.log("Syntax error parsing message bundle: "+e.message+"."),c.unlink(r,function(e){e&&console.error("Deleting corrupted bundle "+r+" failed.")}),o=!0}}if(!(n=function(e,t){var n=s.translationsConfig[e.id];if(n){var r=g(n).contents,o=g(l.join(t,"nls.metadata.json")),a=Object.create(null);for(var i in o){var c=o[i],u=r[e.outDir+"/"+i];if(u){for(var d=[],p=0;p<c.keys.length;p++){var h=c.keys[p],b=u[f(h)?h:h.key];void 0===b&&(b=c.messages[p]),d.push(b)}a[i]=d}else a[i]=c.messages}return a}}(e,t))||o)return n;if(a)try{c.writeFileSync(r,JSON.stringify(n),{encoding:"utf8",flag:"wx"})}catch(e){if("EEXIST"===e.code)return n;throw e}return n}function y(e){try{return function(e){var t=g(l.join(e,"nls.metadata.json")),n=Object.create(null);for(var r in t){var o=t[r];n[r]=o.messages}return n}(e)}catch(e){return void console.log("Generating default bundle from meta data failed.",e)}}function S(e,t){var n;if(!0===s.languagePackSupport&&void 0!==s.cacheRoot&&void 0!==s.languagePackId&&void 0!==s.translationsConfigFile&&void 0!==s.translationsConfig)try{n=m(e,t)}catch(e){console.log("Load or create bundle failed ",e)}if(!n){if(s.languagePackSupport)return y(t);var r=function(e){for(var t=s.locale;t;){var n=l.join(e,"nls.bundle."+t+".json");if(c.existsSync(n))return n;var r=t.lastIndexOf("-");t=r>0?t.substring(0,r):void 0}if(void 0===t&&(n=l.join(e,"nls.bundle.json"),c.existsSync(n)))return n}(t);if(r)try{return g(r)}catch(e){console.log("Loading in the box message bundle failed.",e)}n=y(t)}return n}function x(e){if(!e)return b;var t=l.extname(e);if(t&&(e=e.substr(0,e.length-t.length)),s.messageFormat===r.both||s.messageFormat===r.bundle){var n=function(e){for(var t,n=l.dirname(e);t=l.join(n,"nls.metadata.header.json"),!c.existsSync(t);){var r=l.dirname(n);if(r===n){t=void 0;break}n=r}return t}(e);if(n){var o=l.dirname(n),u=a[o];if(void 0===u)try{var f=JSON.parse(c.readFileSync(n,"utf8"));try{var p=S(f,o);u=v(o,p?{header:f,nlsBundle:p}:null)}catch(e){console.error("Failed to load nls bundle",e),u=v(o,null)}}catch(e){console.error("Failed to read header file",e),u=v(o,null)}if(u){var m=e.substr(o.length+1).replace(/\\/g,"/"),y=u.nlsBundle[m];return void 0===y?(console.error("Messages for file "+e+" not found. See console for details."),function(){return"Messages not found."}):h(y)}}}if(s.messageFormat===r.both||s.messageFormat===r.file)try{var x=g(function(e){var t;if(s.cacheLanguageResolution&&t)t=t;else{if(i||!s.locale)t=".nls.json";else for(var n=s.locale;n;){var r=".nls."+n+".json";if(c.existsSync(e+r)){t=r;break}var o=n.lastIndexOf("-");o>0?n=n.substring(0,o):(t=".nls.json",n=null)}s.cacheLanguageResolution&&(t=t)}return e+t}(e));return Array.isArray(x)?h(x):d(x.messages)&&d(x.keys)?h(x.messages):(console.error("String bundle '"+e+"' uses an unsupported format."),function(){return"File bundle has unsupported format. See console for details"})}catch(e){"ENOENT"!==e.code&&console.error("Failed to load single file bundle",e)}return console.error("Failed to load message bundle for file "+e),function(){return"Failed to load message bundle. See console for details."}}!function(e){e.file="file",e.bundle="bundle",e.both="both"}(r=t.MessageFormat||(t.MessageFormat={})),function(e){e.is=function(e){var t=e;return t&&d(t.key)&&d(t.comment)}}(o||(o={})),function(){if(s={locale:void 0,languagePackSupport:!1,cacheLanguageResolution:!0,messageFormat:r.bundle},f(process.env.VSCODE_NLS_CONFIG))try{var e=JSON.parse(process.env.VSCODE_NLS_CONFIG);if(f(e.locale)&&(s.locale=e.locale.toLowerCase()),function(e){return!0===e||!1===e}(e._languagePackSupport)&&(s.languagePackSupport=e._languagePackSupport),f(e._cacheRoot)&&(s.cacheRoot=e._cacheRoot),f(e._languagePackId)&&(s.languagePackId=e._languagePackId),f(e._translationsConfigFile)){s.translationsConfigFile=e._translationsConfigFile;try{s.translationsConfig=g(s.translationsConfigFile)}catch(t){e._corruptedFile&&c.writeFile(e._corruptedFile,"corrupted","utf8",function(e){console.error(e)})}}}catch(e){}i="pseudo"===s.locale,void 0,a=Object.create(null)}(),t.loadMessageBundle=x,t.config=function(e){return e&&(f(e.locale)&&(s.locale=e.locale.toLowerCase(),void 0,a=Object.create(null)),void 0!==e.messageFormat&&(s.messageFormat=e.messageFormat)),i="pseudo"===s.locale,x}},function(e,t){e.exports=require("fs")}]));
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/fe22a9645b44368865c0ba92e2fb881ff1afce94/extensions/debug-server-ready/dist/extension.js.map