import{j as ge,r as s,a as qe}from"./react-a9b6c34a.js";import{a as Me,c as $e}from"./react-dom-2c65b678.js";import{L as ze,N as ke,H as Qe}from"./react-router-dom-e5f3a2d5.js";import{O as De,d as Oe,e as ae}from"./react-router-0030e45b.js";import{S as Ae,A as Re,a as Fe,R as ie,b as je,C as He,c as Ge}from"./microsoft-cognitiveservices-speech-sdk-6e793f52.js";import{p as Le}from"./dompurify-76a5efca.js";import{S as Ue,a as I,I as ce,E as Ke,P as Ve,T as K,B as We,b as Je,c as Xe,d as le,e as Ye,f as Pe,g as Ie,h as _e,D as Ce,C as Ze,i as Se,j as X,k as et,l as tt,m as nt}from"./@fluentui-a8ae1eaa.js";import{J as ot,i as st}from"./@react-spring-1dc2420c.js";import"./bent-d4cce1f4.js";import"./scheduler-04ce0582.js";import"./@remix-run-88f74c5a.js";import"./uuid-a960c1f4.js";import"./tslib-14a4c710.js";import"./@microsoft-31b40247.js";import"./@griffel-cbe60fd0.js";import"./rtl-css-js-4ed993c7.js";import"./@emotion-8a8e73f6.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function a(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerpolicy&&(r.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?r.credentials="include":o.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(o){if(o.ep)return;o.ep=!0;const r=a(o);fetch(o.href,r)}})();const he=ge.Fragment,e=ge.jsx,d=ge.jsxs;const at="/assets/github-fab00c2d.svg",rt="_layout_o4bzc_1",it="_header_o4bzc_13",ct="_headerContainer_o4bzc_23",lt="_headerTitleContainer_o4bzc_39",ut="_headerLogo_o4bzc_55",dt="_headerTitle_o4bzc_39",ht="_headerNavList_o4bzc_73",pt="_headerNavPageLink_o4bzc_85",mt="_headerNavPageLinkActive_o4bzc_113",gt="_headerNavLeftMargin_o4bzc_123",_t="_headerRightText_o4bzc_131",Ct="_microsoftLogo_o4bzc_141",St="_githubLogo_o4bzc_151",A={layout:rt,header:it,headerContainer:ct,headerTitleContainer:lt,headerLogo:ut,headerTitle:dt,headerNavList:ht,headerNavPageLink:pt,headerNavPageLinkActive:mt,headerNavLeftMargin:gt,headerRightText:_t,microsoftLogo:Ct,githubLogo:St},ft=()=>d("div",{className:A.layout,children:[e("header",{className:A.header,role:"banner",children:d("div",{className:A.headerContainer,children:[e(ze,{to:"/",className:A.headerTitleContainer,children:e("h3",{className:A.headerTitle,children:"GPT + Enterprise data | Sample"})}),e("nav",{children:d("ul",{className:A.headerNavList,children:[e("li",{children:e(ke,{to:"/",className:({isActive:t})=>t?A.headerNavPageLinkActive:A.headerNavPageLink,children:"Chat"})}),e("li",{className:A.headerNavLeftMargin,children:e(ke,{to:"/qa",className:({isActive:t})=>t?A.headerNavPageLinkActive:A.headerNavPageLink,children:"Ask a question"})}),e("li",{className:A.headerNavLeftMargin,children:e("a",{href:"https://aka.ms/entgptsearch",target:"_blank",title:"Github repository link",children:e("img",{src:at,alt:"Github logo","aria-label":"Link to github repository",width:"20px",height:"20px",className:A.githubLogo})})})]})}),e("h4",{className:A.headerRightText,children:"Azure OpenAI + Cognitive Search"})]})}),e(De,{})]}),vt=()=>e("h1",{children:"404"}),yt="_oneshotContainer_1x7b2_1",bt="_oneshotTopSection_1x7b2_15",Tt="_oneshotBottomSection_1x7b2_29",Nt="_oneshotTitle_1x7b2_49",kt="_oneshotQuestionInput_1x7b2_77",xt="_oneshotAnswerContainer_1x7b2_91",wt="_oneshotAnalysisPanel_1x7b2_105",At="_oneshotSettingsSeparator_1x7b2_115",Rt="_settingsButton_1x7b2_123",T={oneshotContainer:yt,oneshotTopSection:bt,oneshotBottomSection:Tt,oneshotTitle:Nt,oneshotQuestionInput:kt,oneshotAnswerContainer:xt,oneshotAnalysisPanel:wt,oneshotSettingsSeparator:At,settingsButton:Rt};async function Lt(t){var i,o,r,c,y,u,g,l;const n=await fetch("/askBing",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({question:t.question,approach:t.approach,overrides:{semantic_ranker:(i=t.overrides)==null?void 0:i.semanticRanker,semantic_captions:(o=t.overrides)==null?void 0:o.semanticCaptions,top:(r=t.overrides)==null?void 0:r.top,temperature:(c=t.overrides)==null?void 0:c.temperature,prompt_template:(y=t.overrides)==null?void 0:y.promptTemplate,prompt_template_prefix:(u=t.overrides)==null?void 0:u.promptTemplatePrefix,prompt_template_suffix:(g=t.overrides)==null?void 0:g.promptTemplateSuffix,exclude_category:(l=t.overrides)==null?void 0:l.excludeCategory}})}),a=await n.json();if(n.status>299||!n.ok)throw Error(a.error||"Unknown error");return a}async function Pt(t){var i,o,r,c,y,u,g,l;const n=await fetch("/ask",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({question:t.question,approach:t.approach,overrides:{semantic_ranker:(i=t.overrides)==null?void 0:i.semanticRanker,semantic_captions:(o=t.overrides)==null?void 0:o.semanticCaptions,top:(r=t.overrides)==null?void 0:r.top,temperature:(c=t.overrides)==null?void 0:c.temperature,prompt_template:(y=t.overrides)==null?void 0:y.promptTemplate,prompt_template_prefix:(u=t.overrides)==null?void 0:u.promptTemplatePrefix,prompt_template_suffix:(g=t.overrides)==null?void 0:g.promptTemplateSuffix,exclude_category:(l=t.overrides)==null?void 0:l.excludeCategory}})}),a=await n.json();if(n.status>299||!n.ok)throw Error(a.error||"Unknown error");return a}async function It(t){var i,o,r,c,y,u,g,l,m;const n=await fetch("/chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({history:t.history,approach:t.approach,overrides:{semantic_ranker:(i=t.overrides)==null?void 0:i.semanticRanker,semantic_captions:(o=t.overrides)==null?void 0:o.semanticCaptions,top:(r=t.overrides)==null?void 0:r.top,temperature:(c=t.overrides)==null?void 0:c.temperature,prompt_template:(y=t.overrides)==null?void 0:y.promptTemplate,prompt_template_prefix:(u=t.overrides)==null?void 0:u.promptTemplatePrefix,prompt_template_suffix:(g=t.overrides)==null?void 0:g.promptTemplateSuffix,exclude_category:(l=t.overrides)==null?void 0:l.excludeCategory,suggest_followup_questions:(m=t.overrides)==null?void 0:m.suggestFollowupQuestions}})}),a=await n.json();if(n.status>299||!n.ok)throw Error(a.error||"Unknown error");return a}async function Bt(t){var n=Ae.fromSubscription("<your speech service key>","southeastasia");const a=Re.fromDefaultSpeakerOutput();n.speechSynthesisVoiceName="zh-CN-YunxiNeural";const i=new Fe(n,a),r=t.answer.replace(/\[[^\]]*\]/g,"");console.log(t.answer),i.speakTextAsync(r,function(c){c.reason===ie.SynthesizingAudioCompleted?console.log("synthesis finished."):console.error("Speech synthesis canceled, "+c.errorDetails+`
Did you set the speech resource key and region values?`),i.close()},function(c){console.trace("err - "+c),i.close()})}function Et(t){return`/content/${t}`}var F=(t=>(t.RetrieveThenRead="rtr",t.ReadRetrieveRead="rrr",t.ReadDecomposeAsk="rda",t))(F||{}),pe=(t=>(t.BingSearch="bing",t))(pe||{});const qt="_answerContainer_1tryd_1",Mt="_answerLogo_1tryd_17",$t="_answerText_1tryd_25",zt="_selected_1tryd_43",Qt="_citationLearnMore_1tryd_51",Dt="_citation_1tryd_51",Ot="_followupQuestionsList_1tryd_95",Ft="_followupQuestionLearnMore_1tryd_103",jt="_followupQuestion_1tryd_95",Ht="_supContainer_1tryd_141",Gt="_retryButton_1tryd_199",Ut="_loadingdots_1tryd_243",Kt="_loading_1tryd_243",R={answerContainer:qt,answerLogo:Mt,answerText:$t,selected:zt,citationLearnMore:Qt,citation:Dt,followupQuestionsList:Ot,followupQuestionLearnMore:Ft,followupQuestion:jt,supContainer:Ht,retryButton:Gt,loadingdots:Ut,loading:Kt};function Vt(t,n){const a=[],i=[];let o=t.replace(/<<([^>>]+)>>/g,(u,g)=>(i.push(g),""));o=o.trim();const r=o.split(/\[([^\]]+)\]+\(([^\)]+)\)/g);console.log(r);let c=o.match(/\[([^\]]+)\]+\(([^\)]+)\)/g);return console.log(c),c&&c.map((u,g)=>{const l=u.split("]")[0].replace("[",""),m=u.split("]")[1].replace("(","").replace(")","");console.log(l),console.log(m),a.push({id:g,name:l,path:m})}),{answerHtml:r.map((u,g)=>{if(g%3===0)return u;if(g%3==1){let l=a.find(D=>D.name==u),m=l?l.id:-1;m!==-1?m=l?l.id+1:-1:m=a.length;const f=Et(u);return Me(e("a",{className:"supContainer",title:u,onClick:()=>n(f),children:e("sup",{children:m})}))}else return""}).join(""),citations:a,followupQuestions:i}}const Be=()=>e(Ue,{primaryFill:"rgba(115, 118, 225, 1)","aria-hidden":"true","aria-label":"Answer logo"}),fe=({answer:t,isSelected:n,onCitationClicked:a,onThoughtProcessClicked:i,onSupportingContentClicked:o,onFollowupQuestionClicked:r,onReadAnswerClicked:c,showFollowupQuestions:y})=>{const u=s.useMemo(()=>Vt(t.answer,a),[t]),g=Le.sanitize(u.answerHtml);return d(I,{className:`${R.answerContainer} ${n&&R.selected}`,verticalAlign:"space-between",children:[e(I.Item,{children:d(I,{horizontal:!0,horizontalAlign:"space-between",children:[e(Be,{}),d("div",{children:[e(ce,{style:{color:"black"},iconProps:{iconName:"Lightbulb"},title:"Show thought process",ariaLabel:"Show thought process",onClick:()=>i(),disabled:!t.thoughts}),e(ce,{style:{color:"black"},iconProps:{iconName:"ClipboardList"},title:"Show supporting content",ariaLabel:"Show supporting content",onClick:()=>o(),disabled:!t.data_points.length}),e(ce,{style:{color:"black"},iconProps:{iconName:"ReadOutLoud"},title:"Read answer",ariaLabel:"Read answer",onClick:()=>c(),disabled:!t.answer})]})]})}),e(I.Item,{grow:!0,children:e("div",{className:R.answerText,dangerouslySetInnerHTML:{__html:g}})}),!!u.citations.length&&e(I.Item,{children:d(I,{horizontal:!0,wrap:!0,tokens:{childrenGap:5},children:[e("span",{className:R.citationLearnMore,children:"来源:"}),u.citations.map((l,m)=>{const f=l.path;return e("a",{className:R.citation,title:l.name,onClick:()=>a(f),children:`${++m}. ${l.name}`},m)})]})}),!!u.followupQuestions.length&&y&&r&&e(I.Item,{children:d(I,{horizontal:!0,wrap:!0,className:`${u.citations.length?R.followupQuestionsList:""}`,tokens:{childrenGap:6},children:[e("span",{className:R.followupQuestionLearnMore,children:"您可能还想问:"}),u.followupQuestions.map((l,m)=>e("a",{className:R.followupQuestion,title:l,onClick:()=>r(l),children:`${l}`},m))]})})]})},Wt=()=>{const t=ot({from:{opacity:0},to:{opacity:1}});return e(st.div,{style:{...t},children:d(I,{className:R.answerContainer,verticalAlign:"space-between",children:[e(Be,{}),e(I.Item,{grow:!0,children:d("p",{className:R.answerText,children:["正在生成回答",e("span",{className:R.loadingdots})]})})]})})},ve=({error:t,onRetry:n})=>d(I,{className:R.answerContainer,verticalAlign:"space-between",children:[e(Ke,{"aria-hidden":"true","aria-label":"Error icon",primaryFill:"red"}),e(I.Item,{grow:!0,children:e("p",{className:R.answerText,children:t})}),e(Ve,{className:R.retryButton,onClick:n,text:"Retry"})]}),Jt="_questionInputContainer_wokwf_1",Xt="_questionInputTextArea_wokwf_19",Yt="_questionInputButtonsContainer_wokwf_29",Zt="_questionInputSendButton_wokwf_41",en="_questionInputSendButtonDisabled_wokwf_49",J={questionInputContainer:Jt,questionInputTextArea:Xt,questionInputButtonsContainer:Yt,questionInputSendButton:Zt,questionInputSendButtonDisabled:en},ye=({onSend:t,disabled:n,placeholder:a,clearOnSend:i})=>{const[o,r]=s.useState(""),c=()=>{if(n||!o.trim()){console.log("send disabled"),console.log("question: "+o);return}t(o),i&&r("")},y=()=>{var m=Ae.fromSubscription("<your subscription key>","southeastasia");const f=Re.fromDefaultMicrophoneInput();m.speechRecognitionLanguage="zh-CN";const D=new je(m,f);D.recognizeOnceAsync(b=>{switch(b.reason){case ie.RecognizedSpeech:console.log(`RECOGNIZED: Text=${b.text}`),r(b.text);break;case ie.NoMatch:console.log("NOMATCH: Speech could not be recognized.");break;case ie.Canceled:const $=He.fromResult(b);console.log(`CANCELED: Reason=${$.reason}`),$.reason==Ge.Error&&(console.log(`CANCELED: ErrorCode=${$.ErrorCode}`),console.log(`CANCELED: ErrorDetails=${$.errorDetails}`),console.log("CANCELED: Did you set the speech resource key and region values?"));break}D.close()})},u=m=>{m.key==="Enter"&&!m.shiftKey&&(m.preventDefault(),c())},g=(m,f)=>{f?f.length<=1e3&&r(f):r("")},l=n||!o.trim();return d(I,{horizontal:!0,className:J.questionInputContainer,children:[e(K,{className:J.questionInputTextArea,placeholder:a,multiline:!0,resizable:!1,borderless:!0,value:o,onChange:g,onKeyDown:u}),d("div",{className:J.questionInputButtonsContainer,children:[e("div",{className:`${J.questionInputSendButton} ${l?J.questionInputSendButtonDisabled:""}`,"aria-label":"语音输入",onClick:y,children:e(We,{primaryFill:"rgba(115, 118, 225, 1)"})}),e("div",{className:`${J.questionInputSendButton} ${l?J.questionInputSendButtonDisabled:""}`,"aria-label":"提问按钮",onClick:c,children:e(Je,{primaryFill:"rgba(115, 118, 225, 1)"})})]})]})},tn="_examplesNavList_v5q0z_1",nn="_example_v5q0z_1",on="_exampleText_v5q0z_53",me={examplesNavList:tn,example:nn,exampleText:on},sn=({text:t,value:n,onClick:a})=>e("div",{className:me.example,onClick:()=>a(n),children:e("p",{className:me.exampleText,children:t})}),an=[{text:"九节菖蒲与石菖蒲是同一植物吗?",value:"九节菖蒲与石菖蒲是同一植物吗?"},{text:"餐饮食品吃拉肚子想要做检测，有什么标准可依?",value:"餐饮食品吃拉肚子想要做检测，有什么标准可依?"},{text:"茶叶按9833.3测试冠突散囊菌，如何知道茶叶是否长毛?",value:"茶叶按9833.3测试冠突散囊菌，如何知道茶叶是否长毛?"}],be=({onExampleClicked:t})=>e("ul",{className:me.examplesNavList,children:an.map((n,a)=>e("li",{children:e(sn,{text:n.text,value:n.value,onClick:t})},a))}),rn="_thoughtProcess_exr0t_1",cn={thoughtProcess:rn};function ln(t){const n=t.split(": "),a=n[0];var i=n.slice(1).join(": ")?n.slice(1).join(": "):"No content";const o=i.match(/<([^>]+)>/);return i=i.replace(/<([^>]+)>/g,""),{title:a,content:i,url:o?o[1]:""}}const un="_supportingContentNavList_ekyxv_1",dn="_supportingContentItem_ekyxv_17",hn="_supportingContentItemHeader_ekyxv_41",pn="_supportingContentItemText_ekyxv_49",re={supportingContentNavList:un,supportingContentItem:dn,supportingContentItemHeader:hn,supportingContentItemText:pn},mn=({supportingContent:t})=>e("ul",{className:re.supportingContentNavList,children:t.map((n,a)=>{const i=ln(n);return d("li",{className:re.supportingContentItem,children:[e("h4",{className:re.supportingContentItemHeader,children:i.title}),e("p",{className:re.supportingContentItemText,children:i.content}),e("a",{className:re.supportingContentItemText,href:i.url,target:"_blank",children:i.url})]})})});var x=(t=>(t.ThoughtProcessTab="thoughtProcess",t.SupportingContentTab="supportingContent",t.CitationTab="citation",t))(x||{});const ue={disabled:!0,style:{color:"grey"}},Te=({answer:t,activeTab:n,activeCitation:a,citationHeight:i,className:o,onActiveTabChanged:r})=>{const c=!t.thoughts,y=!t.data_points.length,u=!a,g=Le.sanitize(t.thoughts);return d(Xe,{className:o,selectedKey:n,onLinkClick:l=>l&&r(l.props.itemKey),children:[e(le,{itemKey:x.ThoughtProcessTab,headerText:"思维过程",headerButtonProps:c?ue:void 0,children:e("div",{className:cn.thoughtProcess,dangerouslySetInnerHTML:{__html:g}})}),e(le,{itemKey:x.SupportingContentTab,headerText:"支持内容",headerButtonProps:y?ue:void 0,children:e(mn,{supportingContent:t.data_points})}),e(le,{itemKey:x.CitationTab,headerText:"引用",headerButtonProps:u?ue:void 0,children:e("iframe",{title:"引用",src:a,width:"100%",height:i})})]})},gn="_container_1k5c7_1",_n={container:gn},Ne=({className:t,onClick:n})=>d("div",{className:`${_n.container} ${t??""}`,onClick:n,children:[e(Ye,{}),e(Pe,{children:"开发人员配置"})]}),Cn=()=>{const[t,n]=s.useState(!1),[a,i]=s.useState(F.ReadDecomposeAsk),[o,r]=s.useState(""),[c,y]=s.useState(""),[u,g]=s.useState(""),[l,m]=s.useState(3),[f,D]=s.useState(!1),[b,$]=s.useState(!1),[O,V]=s.useState(""),B=s.useRef(""),[E,U]=s.useState(!1),[L,z]=s.useState(),[N,j]=s.useState(),[H,q]=s.useState(),[M,k]=s.useState(void 0),G=async C=>{B.current=C,L&&z(void 0),U(!0),q(void 0),k(void 0);try{const S={question:C,approach:a,overrides:{promptTemplate:o.length===0?void 0:o,promptTemplatePrefix:c.length===0?void 0:c,promptTemplateSuffix:u.length===0?void 0:u,excludeCategory:O.length===0?void 0:O,top:l,semanticRanker:f,semanticCaptions:b}},Ee=await Pt(S);j(Ee)}catch(S){z(S)}finally{U(!1)}},Y=(C,S)=>{r(S||"")},Z=(C,S)=>{y(S||"")},ee=(C,S)=>{g(S||"")},te=(C,S)=>{m(parseInt(S||"3"))},ne=(C,S)=>{i((S==null?void 0:S.key)||F.RetrieveThenRead)},oe=(C,S)=>{D(!!S)},W=(C,S)=>{$(!!S)},se=(C,S)=>{V(S||"")},_=C=>{G(C)},w=C=>{H===C&&M===x.CitationTab?k(void 0):(q(C),k(x.CitationTab))},h=C=>{k(M===C?void 0:C)},p=()=>{alert("onReadAnswerClicked")},Q=[{key:F.RetrieveThenRead,text:"Retrieve-Then-Read"},{key:F.ReadRetrieveRead,text:"Read-Retrieve-Read"},{key:F.ReadDecomposeAsk,text:"Read-Decompose-Ask"}];return d("div",{className:T.oneshotContainer,children:[d("div",{className:T.oneshotTopSection,children:[e(Ne,{className:T.settingsButton,onClick:()=>n(!t)}),e("h1",{className:T.oneshotTitle,children:"Ask your data"}),e("div",{className:T.oneshotQuestionInput,children:e(ye,{placeholder:"示例:面条是否可以用体外模拟进行GI测试？?",disabled:E,onSend:C=>G(C)})})]}),d("div",{className:T.oneshotBottomSection,children:[E&&e(Ie,{label:"正在生成回答"}),!B.current&&e(be,{onExampleClicked:_}),!E&&N&&!L&&e("div",{className:T.oneshotAnswerContainer,children:e(fe,{answer:N,onCitationClicked:C=>w(C),onThoughtProcessClicked:()=>h(x.ThoughtProcessTab),onSupportingContentClicked:()=>h(x.SupportingContentTab),onReadAnswerClicked:()=>p()})}),L?e("div",{className:T.oneshotAnswerContainer,children:e(ve,{error:L.toString(),onRetry:()=>G(B.current)})}):null,M&&N&&e(Te,{className:T.oneshotAnalysisPanel,activeCitation:H,onActiveTabChanged:C=>h(C),citationHeight:"600px",answer:N,activeTab:M})]}),d(_e,{headerText:"配置",isOpen:t,isBlocking:!1,onDismiss:()=>n(!1),closeButtonAriaLabel:"Close",onRenderFooterContent:()=>e(Ce,{onClick:()=>n(!1),children:"Close"}),isFooterAtBottom:!0,children:[e(Ze,{className:T.oneshotSettingsSeparator,label:"方式",options:Q,defaultSelectedKey:a,onChange:ne}),(a===F.RetrieveThenRead||a===F.ReadDecomposeAsk)&&e(K,{className:T.oneshotSettingsSeparator,defaultValue:o,label:"更改提问模板",multiline:!0,autoAdjustHeight:!0,onChange:Y}),a===F.ReadRetrieveRead&&d(he,{children:[e(K,{className:T.oneshotSettingsSeparator,defaultValue:c,label:"更改提问前缀模板",multiline:!0,autoAdjustHeight:!0,onChange:Z}),e(K,{className:T.oneshotSettingsSeparator,defaultValue:u,label:"更改提问后缀模板",multiline:!0,autoAdjustHeight:!0,onChange:ee})]}),e(Se,{className:T.oneshotSettingsSeparator,label:"最多从搜索中返回的条目数量:",min:1,max:50,defaultValue:l.toString(),onChange:te}),e(K,{className:T.oneshotSettingsSeparator,label:"排除类别",onChange:se}),e(X,{className:T.oneshotSettingsSeparator,checked:f,label:"使用语义搜索",onChange:oe}),e(X,{className:T.oneshotSettingsSeparator,checked:b,label:"使用查询上下文摘要而不是整个文档",onChange:W,disabled:!f})]})]})},Sn="_container_1qf1y_1",fn="_chatRoot_1qf1y_15",vn="_chatContainer_1qf1y_25",yn="_chatEmptyState_1qf1y_41",bn="_chatEmptyStateTitle_1qf1y_61",Tn="_chatEmptyStateSubtitle_1qf1y_75",Nn="_chatMessageStream_1qf1y_107",kn="_chatMessageGpt_1qf1y_131",xn="_chatMessageGptMinWidth_1qf1y_145",wn="_chatInput_1qf1y_155",An="_chatAnalysisPanel_1qf1y_181",Rn="_chatSettingsSeparator_1qf1y_197",Ln="_loadingLogo_1qf1y_205",Pn="_commandsContainer_1qf1y_213",In="_commandButton_1qf1y_223",v={container:Sn,chatRoot:fn,chatContainer:vn,chatEmptyState:yn,chatEmptyStateTitle:bn,chatEmptyStateSubtitle:Tn,chatMessageStream:Nn,chatMessageGpt:kn,chatMessageGptMinWidth:xn,chatInput:wn,chatAnalysisPanel:An,chatSettingsSeparator:Rn,loadingLogo:Ln,commandsContainer:Pn,commandButton:In},Bn="_container_u4tj7_1",En="_message_u4tj7_17",xe={container:Bn,message:En},de=({message:t})=>e("div",{className:xe.container,children:e("div",{className:xe.message,children:t})}),qn="_container_7708a_1",Mn="_disabled_7708a_15",we={container:qn,disabled:Mn},$n=({className:t,disabled:n,onClick:a})=>d("div",{className:`${we.container} ${t??""} ${n&&we.disabled}`,onClick:a,children:[e(et,{}),e(Pe,{children:"清空对话"})]}),zn=()=>{const[t,n]=s.useState(!1),[a,i]=s.useState(""),[o,r]=s.useState(3),[c,y]=s.useState(!1),[u,g]=s.useState(!1),[l,m]=s.useState(""),[f,D]=s.useState(!0),b=s.useRef(""),$=s.useRef(null),[O,V]=s.useState(!1),[B,E]=s.useState(),[U,L]=s.useState(),[z,N]=s.useState(void 0),[j,H]=s.useState(0),[q,M]=s.useState([]),k=async h=>{b.current=h,B&&E(void 0),V(!0),L(void 0),N(void 0);try{const Q={history:[...q.map(S=>({user:S[0],bot:S[1].answer})),{user:h,bot:void 0}],approach:F.ReadRetrieveRead,overrides:{promptTemplate:a.length===0?void 0:a,excludeCategory:l.length===0?void 0:l,top:o,semanticRanker:c,semanticCaptions:u,suggestFollowupQuestions:f}},C=await It(Q);M([...q,[h,C]])}catch(p){E(p)}finally{V(!1)}},G=()=>{b.current="",B&&E(void 0),L(void 0),N(void 0),M([])};s.useEffect(()=>{var h;return(h=$.current)==null?void 0:h.scrollIntoView({behavior:"smooth"})},[O]);const Y=(h,p)=>{i(p||"")},Z=(h,p)=>{r(parseInt(p||"3"))},ee=(h,p)=>{y(!!p)},te=(h,p)=>{g(!!p)},ne=(h,p)=>{m(p||"")},oe=(h,p)=>{D(!!p)},W=h=>{k(h)},se=(h,p)=>{U===h&&z===x.CitationTab&&j===p?N(void 0):(L(h),N(x.CitationTab)),H(p)},_=(h,p)=>{N(z===h&&j===p?void 0:h),H(p)},w=async(h,p)=>{H(p);try{const Q={answer:h.answer};await Bt(Q)}catch(Q){E(Q)}finally{V(!1)}};return d("div",{className:v.container,children:[d("div",{className:v.commandsContainer,children:[e($n,{className:v.commandButton,onClick:G,disabled:!b.current||O}),e(Ne,{className:v.commandButton,onClick:()=>n(!t)})]}),d("div",{className:v.chatRoot,children:[d("div",{className:v.chatContainer,children:[b.current?d("div",{className:v.chatMessageStream,children:[q.map((h,p)=>d("div",{children:[e(de,{message:h[0]}),e("div",{className:v.chatMessageGpt,children:e(fe,{answer:h[1],isSelected:j===p&&z!==void 0,onCitationClicked:Q=>se(Q,p),onThoughtProcessClicked:()=>_(x.ThoughtProcessTab,p),onSupportingContentClicked:()=>_(x.SupportingContentTab,p),onFollowupQuestionClicked:Q=>k(Q),onReadAnswerClicked:()=>w(h[1],p),showFollowupQuestions:f&&q.length-1===p},p)})]},p)),O&&d(he,{children:[e(de,{message:b.current}),e("div",{className:v.chatMessageGptMinWidth,children:e(Wt,{})})]}),B?d(he,{children:[e(de,{message:b.current}),e("div",{className:v.chatMessageGptMinWidth,children:e(ve,{error:B.toString(),onRetry:()=>k(b.current)})})]}):null,e("div",{ref:$})]}):d("div",{className:v.chatEmptyState,children:[e(tt,{fontSize:"120px",primaryFill:"rgba(115, 118, 225, 1)","aria-hidden":"true","aria-label":"Chat logo"}),e("h1",{className:v.chatEmptyStateTitle,children:"Chat with your data"}),e("h2",{className:v.chatEmptyStateSubtitle,children:"Ask anything or try an example"}),e(be,{onExampleClicked:W})]}),e("div",{className:v.chatInput,children:e(ye,{clearOnSend:!0,placeholder:"输入问题",disabled:O,onSend:h=>k(h)})})]}),q.length>0&&z&&e(Te,{className:v.chatAnalysisPanel,activeCitation:U,onActiveTabChanged:h=>_(h,j),citationHeight:"810px",answer:q[j][1],activeTab:z}),d(_e,{headerText:"配置",isOpen:t,isBlocking:!1,onDismiss:()=>n(!1),closeButtonAriaLabel:"Close",onRenderFooterContent:()=>e(Ce,{onClick:()=>n(!1),children:"Close"}),isFooterAtBottom:!0,children:[e(K,{className:v.chatSettingsSeparator,defaultValue:a,label:"更改提问模板",multiline:!0,autoAdjustHeight:!0,onChange:Y}),e(Se,{className:v.chatSettingsSeparator,label:"最多从搜索中返回的条目数量:",min:1,max:50,defaultValue:o.toString(),onChange:Z}),e(K,{className:v.chatSettingsSeparator,label:"排除类别",onChange:ne}),e(X,{className:v.chatSettingsSeparator,checked:c,label:"使用语义搜索",onChange:ee}),e(X,{className:v.chatSettingsSeparator,checked:u,label:"使用查询上下文摘要而不是整个文档",onChange:te,disabled:!c}),e(X,{className:v.chatSettingsSeparator,checked:f,label:"建议后续问题",onChange:oe})]})]})]})},Qn="_oneshotContainer_1x7b2_1",Dn="_oneshotTopSection_1x7b2_15",On="_oneshotBottomSection_1x7b2_29",Fn="_oneshotTitle_1x7b2_49",jn="_oneshotQuestionInput_1x7b2_77",Hn="_oneshotAnswerContainer_1x7b2_91",Gn="_oneshotAnalysisPanel_1x7b2_105",Un="_oneshotSettingsSeparator_1x7b2_115",Kn="_settingsButton_1x7b2_123",P={oneshotContainer:Qn,oneshotTopSection:Dn,oneshotBottomSection:On,oneshotTitle:Fn,oneshotQuestionInput:jn,oneshotAnswerContainer:Hn,oneshotAnalysisPanel:Gn,oneshotSettingsSeparator:Un,settingsButton:Kn},Vn=()=>{const[t,n]=s.useState(!1),[a,i]=s.useState(pe.BingSearch),[o,r]=s.useState(""),[c,y]=s.useState(""),[u,g]=s.useState(""),[l,m]=s.useState(3),[f,D]=s.useState(!1),[b,$]=s.useState(!1),[O,V]=s.useState(""),B=s.useRef(""),[E,U]=s.useState(!1),[L,z]=s.useState(),[N,j]=s.useState(),[H,q]=s.useState(),[M,k]=s.useState(void 0),G=async _=>{B.current=_,L&&z(void 0),U(!0),q(void 0),k(void 0);try{const w={question:_,approach:a,overrides:{promptTemplate:o.length===0?void 0:o,promptTemplatePrefix:c.length===0?void 0:c,promptTemplateSuffix:u.length===0?void 0:u,excludeCategory:O.length===0?void 0:O,top:l,semanticRanker:f,semanticCaptions:b}},h=await Lt(w);j(h)}catch(w){z(w)}finally{U(!1)}},Y=(_,w)=>{m(parseInt(w||"3"))},Z=(_,w)=>{D(!!w)},ee=(_,w)=>{$(!!w)},te=(_,w)=>{V(w||"")},ne=_=>{G(_)},oe=_=>{H===_&&M===x.CitationTab?k(void 0):(q(_),k(x.CitationTab))},W=_=>{k(M===_?void 0:_)},se=()=>{alert("onReadAnswerClicked")};return pe.BingSearch,d("div",{className:P.oneshotContainer,children:[d("div",{className:P.oneshotTopSection,children:[e(Ne,{className:P.settingsButton,onClick:()=>n(!t)}),e("h1",{className:P.oneshotTitle,children:"Ask Bing"}),e("div",{className:P.oneshotQuestionInput,children:e(ye,{placeholder:"示例:面条是否可以用体外模拟进行GI测试？?",disabled:E,onSend:_=>G(_)})})]}),d("div",{className:P.oneshotBottomSection,children:[E&&e(Ie,{label:"正在生成回答"}),!B.current&&e(be,{onExampleClicked:ne}),!E&&N&&!L&&e("div",{className:P.oneshotAnswerContainer,children:e(fe,{answer:N,onCitationClicked:_=>oe(_),onThoughtProcessClicked:()=>W(x.ThoughtProcessTab),onSupportingContentClicked:()=>W(x.SupportingContentTab),onReadAnswerClicked:()=>se()})}),L?e("div",{className:P.oneshotAnswerContainer,children:e(ve,{error:L.toString(),onRetry:()=>G(B.current)})}):null,M&&N&&e(Te,{className:P.oneshotAnalysisPanel,activeCitation:H,onActiveTabChanged:_=>W(_),citationHeight:"600px",answer:N,activeTab:M})]}),d(_e,{headerText:"配置",isOpen:t,isBlocking:!1,onDismiss:()=>n(!1),closeButtonAriaLabel:"Close",onRenderFooterContent:()=>e(Ce,{onClick:()=>n(!1),children:"Close"}),isFooterAtBottom:!0,children:[e(Se,{className:P.oneshotSettingsSeparator,label:"最多从搜索中返回的条目数量:",min:1,max:50,defaultValue:l.toString(),onChange:Y}),e(K,{className:P.oneshotSettingsSeparator,label:"排除类别",onChange:te}),e(X,{className:P.oneshotSettingsSeparator,checked:f,label:"使用语义搜索",onChange:Z}),e(X,{className:P.oneshotSettingsSeparator,checked:b,label:"使用查询上下文摘要而不是整个文档",onChange:ee,disabled:!f})]})]})};nt();function Wn(){return e(Qe,{children:e(Oe,{children:d(ae,{path:"/",element:e(ft,{}),children:[e(ae,{index:!0,element:e(zn,{})}),e(ae,{path:"qa",element:e(Cn,{})}),e(ae,{path:"bing",element:e(Vn,{})}),e(ae,{path:"*",element:e(vt,{})})]})})})}$e.createRoot(document.getElementById("root")).render(e(qe.StrictMode,{children:e(Wn,{})}));
//# sourceMappingURL=index-f76c3bdb.js.map
