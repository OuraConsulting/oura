import{k as ie,d as ge,r as n,K as ae,I as Se,g as x,u as be,a as B,c as j,w as le,h as d,v as me,b as K,n as se,f as _e,F as Pe,o as $e,s as Ve,C as Be,i as fe,j as he,_ as je}from"./entry.4c18ed87.js";import{u as ke}from"./index.4b2713b1.js";import{b as Te}from"./FunnelServices.86ac62aa.js";import{u as Ae}from"./index.32386ac0.js";import{a as Ee,u as ye}from"./v4.cfe41f22.js";import{u as Le}from"./composables.0b7cf428.js";import{$ as Ue,g as we,y as Ce,S as Re,c as qe,m as De}from"./helpers.46c0e2ed.js";import{V as Ie,o as Oe,i as Fe}from"./optimize_script.0c8b84ae.js";import"./components.da3b7a41.js";import"./HLConst.6f34af32.js";import"./Attributions.04deae61.js";import"./index.ac4270dc.js";const He=()=>({channel:"APP",source:"WEB_USER",version:"2021-04-15"}),Me=e=>{const l=ie().public;return Ue.create({baseURL:e||l.REST_API_URLS,headers:{channel:"APP",source:"WEB_USER",version:"2021-04-15"}})},Ne={getAvailableFormats:e=>Me()("/medias/formats",{params:{id:e},method:"GET"})},ze=["id","autoplay","muted"],Je=["src"],We=["src","type"],Ke=ge({__name:"EncodedVideo",props:{videoId:{type:String,required:!0},fileId:{type:String,required:!0},url:{type:String,required:!0},properties:{type:Object,required:!0},fallback:{type:Object,required:!0},checkStep:{type:Object,required:!0},thumbnail:{type:String,default:()=>""}},async setup(e){var l;let a,o;const t=e,{getNextFunnelStepURL:i}=Ae(),u=n(),r=n(""),s=n(!1);ae([u,s],(()=>{var e,l;(null==(e=null==u?void 0:u.value)?void 0:e.clientWidth)&&s.value&&t.thumbnail&&(r.value=we(t.thumbnail,null==(l=null==u?void 0:u.value)?void 0:l.clientWidth),u.value.style.background=`url(${r.value}) center center/cover`)}),{immediate:!0});const v=[53,32,16],{data:c}=([a,o]=Se((async()=>Ee(`${t.videoId}`,(async e=>{var l;try{if(!t.fileId)return{formats:v};const e=await Ne.getAvailableFormats(t.fileId);let a=v;return null!=(l=null==e?void 0:e.formats)&&l.length&&(a=e.formats),{formats:a}}catch(e){return console.error(e),{formats:v}}})))),a=await a,o(),a),p=n(null==(l=null==c?void 0:c.value)?void 0:l.formats),m=x((()=>{var e;const l=p.value||v;return null==(e=t.url)?void 0:e.replace("AVAILABLE_FORMATS",l.join(","))})),y=()=>{s.value=!0,h.value&&U()},h=x((()=>{var e,l;return void 0===(null==(e=t.properties)?void 0:e.autoplay)||(null==(l=t.properties)?void 0:l.autoplay)})),{$bus:f}=be(),g=n(0),b=ie(),k=n(),w=ke(),I=n(!1);w.value.videoExistsInPage=!0;const _=n(!0),P=n(),S=n(!1),T=n(!1),$=n(),A=n({fluid:!0,autoplay:!!h.value&&"muted",muted:h.value,controls:!0,loop:!1,playbackRates:!!t.properties.playBackSpeed&&[.5,1,1.5,2],userActions:{doubleClick:!1},controlBar:{fullscreenToggle:void 0===t.properties.showFullScreenToggle||t.properties.showFullScreenToggle,remainingTimeDisplay:t.properties.showPendingTime||!1,progressControl:void 0===t.properties.showProgressBar||t.properties.showProgressBar,playToggle:t.properties.allowPlayPause||!1,volumePanel:!0}}),L=n(!1),E=e=>(e.preventDefault(),!1),U=()=>{P.value?setTimeout((()=>{var e;null==(e=null==P?void 0:P.value)||e.play()}),50):P.value?g.value<3&&setTimeout((()=>{g.value++,U()}),1e3):C(),L.value=!0},q=["https://stcdn.leadconnectorhq.com/videojs/7.20.3/video.min.js","https://stcdn.leadconnectorhq.com/videojs/ie8/1.1.2/videojs-ie8.min.js","https://stcdn.leadconnectorhq.com/videojs/7.20.3/videojs-http-streaming.min.js","https://stcdn.leadconnectorhq.com/videojs/videojs-hls-quality-selector/1.1.4/videojs-hls-quality-selector.min.js","https://stcdn.leadconnectorhq.com/videojs/videojs-contrib-quality-levels/2.2.0/videojs-contrib-quality-levels.min.js"],C=()=>{{const e=window.videojs;Oe((()=>{Le({link:[{rel:"stylesheet",href:"https://stcdn.leadconnectorhq.com/videojs/7.20.3/video-js.css"}]}),Fe(e?[]:q,(()=>{R().then((()=>{U()}))}))}))}},R=()=>new Promise((async(e,l)=>{var a,o,n,u;k.value=JSON.parse(Ce("_ud"));const r=null==(a=t.checkStep)?void 0:a.checkStep,s=null==(n=null==(o=t.checkStep)?void 0:o.step)?void 0:n.value,d=/iPhone|iPad|iPod/i.test(navigator.userAgent)||["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod"].includes(navigator.platform),v=/Android|webOS|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent);if(d||v?d?$.value="iphone":v&&($.value="android"):$.value="desktop",(null==(u=k.value)||!u.customer_id)&&r&&s){const e=i(s);window.location.href=e}D("init","page"),document.body.onclick=()=>{},await fetch(m.value).then((e=>{(null==e?void 0:e.status)&&200!==e.status&&(_.value=!1)})).catch((e=>{console.warn("Video not available in encoded format! using fallback"),_.value=!1,l()})),P.value=videojs(`${t.videoId}-video-js`,A.value,(()=>{}));try{P.value.hlsQualitySelector()}catch(e){console.warn(e),l()}P.value.on("click",(()=>{V.value=!0,A.value.controlBar.playToggle||P.value.play()})),P.value.on("ended",(async()=>{T.value||(D("completed","player"),T.value=!0)})),P.value.on("abort",(async()=>{D("abort","player")})),P.value.on("error",(async()=>{D("error","player")})),P.value.on("play",(async()=>{if(V.value=!1,!A.value.controlBar.playToggle){if(!1!==S.value)return;S.value=!0}T.value||D("play","player")})),P.value.on("pause",(async e=>{var l,a,o,t,n,i,u,r;let s=null==(t=null==(o=null==(a=null==(l=P.value)?void 0:l.controlBar)?void 0:a.progressControl)?void 0:o.seekBar)?void 0:t.progress_;if(!s){const e=null==(i=null==(n=P.value)?void 0:n.cache_)?void 0:i.currentTime,l=null==(r=null==(u=P.value)?void 0:u.cache_)?void 0:r.duration;s=e&&l?e/l:0}s>=.98||D("pause","player")})),"desktop"!==$.value?window.addEventListener("blur",(e=>{e.preventDefault(),I.value||F("page"),I.value=!0})):(window.addEventListener("beforeunload",(e=>{I.value||F("page"),I.value=!0})),window.addEventListener("pagehide",(e=>{I.value||F("page"),I.value=!0}))),f.$on("handle-redirect",(()=>{"desktop"!==$.value&&!T.value&&(I.value||F("page"),I.value=!0)})),e(P.value)})),D=(e,l)=>{var a,o,n,i,u,r,s,d,v;try{let c=null==(i=null==(n=null==(o=null==(a=P.value)?void 0:a.controlBar)?void 0:o.progressControl)?void 0:n.seekBar)?void 0:i.progress_;if(!c){const e=null==(r=null==(u=P.value)?void 0:u.cache_)?void 0:r.currentTime,l=null==(d=null==(s=P.value)?void 0:s.cache_)?void 0:d.duration;c=e&&l?e/l:0}const p={fingerprint:ye("msgsndr_id").value,contactId:w.value.contactId||(null==(v=null==k?void 0:k.value)?void 0:v.customer_id),funnelId:w.value.funnelId,locationId:w.value.locationId,stepId:w.value.stepId,pageId:w.value.funnelPageId,domain:w.value.domain,path:w.value.pageUrl,event:e,videoUrl:t.fallback.url,videoId:t.fileId,progress:c,autoplay:h.value,userAgent:navigator.userAgent,device:$.value,eventType:l,version:1,email:w.value.email,phone:w.value.phone};Re.createFunnelVideoEvent(p)}catch(e){console.error(e)}},F=e=>{var l,a,o,n,i,u,r,s,d;if(!T.value){navigator.sendBeacon||D("close",e);try{const v=`${b.STATS_API_URL}/stats/video/event/beacon`;let c=null==(n=null==(o=null==(a=null==(l=P.value)?void 0:l.controlBar)?void 0:a.progressControl)?void 0:o.seekBar)?void 0:n.progress_;if(!c){const e=null==(u=null==(i=P.value)?void 0:i.cache_)?void 0:u.currentTime,l=null==(s=null==(r=P.value)?void 0:r.cache_)?void 0:s.duration;c=e&&l?e/l:0}const p={fingerprint:ye("msgsndr_id").value,contactId:w.value.contactId||(null==(d=null==k?void 0:k.value)?void 0:d.customer_id),funnelId:w.value.funnelId,locationId:w.value.locationId,stepId:w.value.stepId,pageId:w.value.funnelPageId,domain:w.value.domain,path:w.value.pageUrl,event:"close",videoUrl:t.fallback.url,videoId:t.fileId,progress:c,autoplay:h.value,userAgent:navigator.userAgent,device:$.value,eventType:e,version:1,email:w.value.email,phone:w.value.phone};navigator.sendBeacon(v,JSON.stringify(p))}catch{console.warn("Unload beacon failing")}}},V=n(!1);return(l,a)=>(B(),j(Pe,null,[le(K("div",{ref_key:"thumbnailContainer",ref:u,class:"hosted-video-thumbnail",onClick:a[0]||(a[0]=e=>U()),style:se({paddingBottom:"56.25%"})},null,4),[[d(Ie),y],[me,t.thumbnail&&!d(L)&&!d(h)||!d(P)]]),le(K("div",{onClick:a[1]||(a[1]=e=>V.value=!0),onTouchstart:a[2]||(a[2]=e=>V.value=!0)},[K("video",{id:`${e.videoId}-video-js`,class:_e(["vjs-big-play-centered video-js vjs-default-skin",{autoplay:d(h)}]),onContextmenu:E,playsinline:"",autoplay:d(h),muted:d(h)},[d(_)?(B(),j("source",{key:0,src:d(m),type:"application/x-mpegURL"},null,8,Je)):(B(),j("source",{key:1,src:t.fallback.url,type:t.fallback.type},null,8,We))],42,ze)],544),[[me,(!t.thumbnail||d(L)||d(h))&&d(P)]])],64))}}),Ge=["id"],Qe={key:1},Xe=["id"],Ye=["id"],Ze=["src"],xe={key:1,class:"video-icon"},et=ge({__name:"Video",props:["element","classData","popup"],setup(e){const l=e,a=ke(),o=ie(),{$bus:t}=be(),{extra:i}=l.element,{thumbnailURL:u,embedURL:r,customEmbedCode:s,autoplay:v,type:c,width:p}=i.videoProperties.value,m=n("");r&&(m.value=r);const y="custom_embed"===c,h="youtube"===c,f="selfHosted"===c,g=n(""),b=n({}),k=n({}),w=n({}),I=n("");let _=n(`${l.element.id}-${(new Date).getTime()}`);const P=n(!1),S=n(!1),T=n(),$=n(""),A=n(!1),L=n();f&&function(e){var l,t,n,i,u,r,s,d;const v=(null==(n=null==(t=null==(l=null==e?void 0:e.videoProperties)?void 0:l.value)?void 0:t.selfHostedVideo)?void 0:n.id)||"",c=a.value.locationId,p=(null==(r=null==(u=null==(i=null==e?void 0:e.videoProperties)?void 0:i.value)?void 0:u.selfHostedVideo)?void 0:r.thumbnail)||"";T.value=p,b.value=(null==(d=null==(s=null==e?void 0:e.videoProperties)?void 0:s.value)?void 0:d.selfHostedVideo)||{},I.value=v,g.value=o.HLS_URL+`/hls/medias/${c}/media/transcoded_videos/${I.value}_,AVAILABLE_FORMATS,00k.mp4.urlset/master.m3u8`,k.value=null==e?void 0:e.playBackControls,w.value=null==e?void 0:e.checkStep}(i);const E=x((()=>{var e,a,o,t;try{const n=parseInt((null==(t=null==(o=null==(a=null==(e=null==l?void 0:l.element)?void 0:e.extra)?void 0:a.videoProperties)?void 0:o.value)?void 0:t.width)||100);return 50===n?"w-1-2":75===n?"w-3-4":"w-100"}catch{return"w-100"}})),U=x((()=>56.25));function q(){if(l.popup){const e=m.value.replace("autoplay=1","autoplay=0");_.value="",setTimeout((()=>{m.value=e,_.value=`${l.element.id}-${(new Date).getTime()}`}),500)}}ae([L,A],(()=>{var e,l;(null==(e=null==L?void 0:L.value)?void 0:e.clientWidth)&&A.value&&($.value=we(u,null==(l=null==L?void 0:L.value)?void 0:l.clientWidth))}),{immediate:!0});const C=()=>A.value=!0;function R(e){e.preventDefault(),e.stopPropagation(),P.value=!0,m.value=m.value.replace("autoplay=0","autoplay=1")}return $e((async()=>{var e;t.$on("closing-popup",q);const{url:o,type:n}=null==(e=null==i?void 0:i.videoProperties)?void 0:e.value;(!m.value||qe(m.value))&&(o&&(m.value=await async function(e,l){const a=await De(e)||"";try{switch(l){case"youtube":{const l=/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,o=a.match(l);return o&&o[7]&&11===o[7].length?`https://www.youtube.com/embed/${o[7]}`:e}case"vimeo":{const e=new URL(a).pathname.split("/");if(!e.length)return a;if(e.length>2){return`https://player.vimeo.com/video/${e[1]}?h=${e[2]}&byline=0&portrait=0`}return`https://player.vimeo.com/video/${e[1]}?byline=0&portrait=0`}case"wistia":{const e=a.split("/");return`https://fast.wistia.net/embed/iframe/${e[e.length-1]}`}case"html":return a;default:throw new Error(`Unsupported video type ${l}`)}}catch(l){return console.error(l),e}}(o,n)),P.value=!0),Ve((()=>{setTimeout((()=>{S.value=!0}),2500),setTimeout((()=>{var e,o,t,n,i,u;const r=a.value.mobileDevice;r&&!(null!=(t=null==(o=null==(e=l.element.extra)?void 0:e.visibility)?void 0:o.value)&&t.hideMobile)&&1===v&&(P.value=!0),!r&&(null==(u=null==(i=null==(n=l.element.extra)?void 0:n.visibility)?void 0:i.value)||!u.hideDesktop)&&1===v&&(P.value=!0)}),3e3)}))})),Be((()=>{t.$off("closing-popup",q)})),ae((()=>a.value.mobileDevice),(e=>{e&&setTimeout((()=>{1===v&&(P.value=!0)}),2e3)})),(l,a)=>y?(B(),j("div",{key:0,id:e.element.id,class:"w-100"},[fe(Te,{id:e.element.id,code:d(s)},null,8,["id","code"])],8,Ge)):f?(B(),j("div",Qe,[fe(Ke,{thumbnail:T.value,fallback:b.value,url:g.value,properties:k.value,"file-id":I.value,"video-id":e.element.id,"check-step":w.value},null,8,["thumbnail","fallback","url","properties","file-id","video-id","check-step"])])):(B(),j("figure",{key:2,class:_e(["video-container",[d(E),h?"youtube":"","figure"]])},[P.value?he("",!0):(B(),j("span",{key:0,id:e.element.id,onClick:R,class:"w-100"},[le(K("div",{ref_key:"thumbnailContainer",ref:L,style:se({background:$.value?`url(${$.value}) no-repeat center center`:null,backgroundSize:"cover",paddingBottom:`${d(U)}%`}),onClick:R,class:"w-100"},null,4),[[d(Ie),C]])],8,Xe)),P.value?(B(),j("div",{key:1,id:e.element.id,class:"w-100"},[K("div",{class:"iframe-container",style:se({paddingBottom:`${d(U)}%`})},[m.value?(B(),j("iframe",{src:m.value,allow:"autoplay",title:"player",allowfullscreen:"",key:d(_),loading:"lazy"},null,8,Ze)):(B(),j("p",xe))],4)],8,Ye)):he("",!0)],2))}}),pt=je(et,[["__scopeId","data-v-4953b453"]]);export{pt as default};