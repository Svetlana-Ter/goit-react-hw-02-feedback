(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{11:function(e,t,a){e.exports={message:"Notification_message__eciZi"}},19:function(e,t,a){},20:function(e,t,a){},29:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(1),o=a.n(c),i=a(4),r=a.n(i),s=(a(19),a(5)),d=a(6),l=a(7),u=a(13),b=a(12),j=(a(20),a(8)),v=a.n(j);var h=function(e){var t=e.good,a=void 0===t?0:t,c=e.neutral,o=void 0===c?0:c,i=e.bad,r=void 0===i?0:i,s=e.total,d=void 0===s?0:s,l=e.positivePercent,u=void 0===l?0:l;return Object(n.jsxs)("div",{className:v.a.feedbackBlock,children:[Object(n.jsxs)("p",{children:["Good: ",a]}),Object(n.jsxs)("p",{children:["Neutral: ",o]}),Object(n.jsxs)("p",{children:["Bad: ",r]}),Object(n.jsxs)("p",{children:["Total: ",d]}),Object(n.jsxs)("p",{children:["Positive feedback: ",u,"%"]})]})},p=a(9),f=a.n(p),g=a(10),k=a.n(g);var O=function(e){var t=e.options,a=void 0===t?[]:t,c=e.onLeaveFeedback;return a.map((function(e){return Object(n.jsx)("button",{className:f.a.btn,name:e.toLowerCase(e),onClick:c,children:e},k.a.generate())}))};var x=function(e){var t=e.title,a=void 0===t?"":t,c=e.children;return Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{children:a}),c]})},m=a(11),F=a.n(m);var P=function(e){var t=e.message,a=void 0===t?"":t;return Object(n.jsx)("h1",{className:F.a.message,children:a})},_=function(e){Object(u.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={good:e.props.goodInitialValue,neutral:e.props.neutralInitialValue,bad:e.props.badInitialValue},e.handleChangeOption=function(t){var a=t.target.name;e.setState((function(e){return Object(s.a)({},a,e[a]+1)}))},e}return Object(l.a)(a,[{key:"countTotalFeedback",value:function(){var e=this.state;return e.good+e.neutral+e.bad}},{key:"countPositiveFeedbackPercentage",value:function(){var e=this.state,t=e.good,a=e.neutral,n=e.bad;return Math.round(t/(t+a+n)*100)||0}},{key:"render",value:function(){var e=this.state,t=e.good,a=e.neutral,c=e.bad;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(x,{title:"Please leave feedback",children:Object(n.jsx)(O,{options:["Good","Neutral","Bad"],onLeaveFeedback:this.handleChangeOption})}),Object(n.jsx)(x,{title:"Statistics",children:this.countTotalFeedback()?Object(n.jsx)(h,{good:t,neutral:a,bad:c,total:this.countTotalFeedback(),positivePercent:this.countPositiveFeedbackPercentage()}):Object(n.jsx)(P,{message:"No feedback given"})})]})}}]),a}(o.a.Component);_.defaultProps={goodInitialValue:0,neutralInitialValue:0,badInitialValue:0};var B=_;r.a.render(Object(n.jsx)(o.a.StrictMode,{children:Object(n.jsx)(B,{})}),document.getElementById("root"))},8:function(e,t,a){e.exports={feedbackBlock:"Statistics_feedbackBlock__2CpFA"}},9:function(e,t,a){e.exports={btn:"Feedback_btn__2l22B"}}},[[29,1,2]]]);
//# sourceMappingURL=main.6aa170e7.chunk.js.map