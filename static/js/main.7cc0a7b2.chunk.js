(this["webpackJsonplearn-gates"]=this["webpackJsonplearn-gates"]||[]).push([[0],{13:function(t,e,a){t.exports=a(26)},18:function(t,e,a){},24:function(t,e,a){t.exports=a.p+"static/media/logo.25bf045c.svg"},25:function(t,e,a){},26:function(t,e,a){"use strict";a.r(e);var n=a(0),i=a.n(n),l=a(12),c=a.n(l),s=(a(18),a(4)),r=a(5),u=a(7),b=a(6),m=a(8),o=a(2),h=a(3);a(24),a(25);function v(t){return i.a.createElement("p",{className:"col-md-6 text-left"},t.value)}function E(t){return i.a.createElement("span",{className:"Gate col-md-2"},i.a.createElement(h.a,{icon:o.a}),i.a.createElement("div",{className:"btn btn-outline-info disabled"},t.value),i.a.createElement(h.a,{icon:o.a}))}function d(t){return i.a.createElement("div",{className:"col-md-2"},i.a.createElement("span",{className:"bar"},"|"),i.a.createElement("div",{className:"btn btn-outline-primary bit disabled"},t.value),i.a.createElement(h.a,{icon:o.b,size:"lg"}))}function f(t){return i.a.createElement("div",{className:"col-md-2"},i.a.createElement("span",{className:"bar"},"|"),i.a.createElement("div",{className:"btn btn-outline-primary bit disabled"},t.value[0]),i.a.createElement("div",{className:"btn btn-outline-primary bit disabled"},t.value[1]),i.a.createElement(h.a,{icon:o.b,size:"lg"}))}function q(t){return i.a.createElement("div",{className:"col-md-2"},i.a.createElement("div",{className:"btn btn-outline-primary bit disabled"},t.value))}var N=function(t){function e(t){var a;return Object(s.a)(this,e),(a=Object(u.a)(this,Object(b.a)(e).call(this,t))).state={value:0},a}return Object(m.a)(e,t),Object(r.a)(e,[{key:"handleClick",value:function(){var t=!this.state.value;this.setState({value:t})}},{key:"render",value:function(){var t=this;return i.a.createElement("div",{className:"row"},i.a.createElement(v,{value:"A qubit is the basic unit of classical information. It can either be 0 or 1. You can toggle it by clicking on it."}),i.a.createElement("div",{className:"col-md-2"},i.a.createElement("button",{className:"btn btn-outline-primary bit",onClick:function(){return t.handleClick()}},this.state.value?"1":"0")))}}]),e}(i.a.Component),k=function(t){function e(t){var a;return Object(s.a)(this,e),(a=Object(u.a)(this,Object(b.a)(e).call(this,t))).state={value:0},a}return Object(m.a)(e,t),Object(r.a)(e,[{key:"handleClick",value:function(){var t=!this.state.value;this.setState({value:t})}},{key:"render",value:function(){var t=this;return i.a.createElement("div",{className:"row"},i.a.createElement(v,{value:"NOT gate flips the bit"}),i.a.createElement("div",{className:"col-md-2"},i.a.createElement("button",{className:"btn btn-outline-primary bit",onClick:function(){return t.handleClick()}},this.state.value?"1":"0")),i.a.createElement(E,{value:"NOT"}),i.a.createElement(q,{value:this.state.value?"0":"1"}))}}]),e}(i.a.Component),O=function(t){function e(t){var a;return Object(s.a)(this,e),(a=Object(u.a)(this,Object(b.a)(e).call(this,t))).state={bitsIn:Array(2).fill(1),bitOut:1},a}return Object(m.a)(e,t),Object(r.a)(e,[{key:"handleClick",value:function(t){var e=this.state.bitsIn.slice();e[t]=1==e[t]?0:1,this.setState({bitsIn:e,bitOut:e[0]&&e[1]})}},{key:"render",value:function(){var t=this;return i.a.createElement("div",{className:"row"},i.a.createElement(v,{value:"AND gate produces true when both input bits are true"}),i.a.createElement("div",{className:"col-md-2"},i.a.createElement("button",{className:"btn btn-outline-primary bit",onClick:function(){return t.handleClick(0)}},this.state.bitsIn[0]),i.a.createElement("button",{className:"btn btn-outline-primary bit",onClick:function(){return t.handleClick(1)}},this.state.bitsIn[1])),i.a.createElement(E,{value:"AND"}),i.a.createElement(q,{value:this.state.bitOut}))}}]),e}(i.a.Component),p=function(t){function e(t){var a;return Object(s.a)(this,e),(a=Object(u.a)(this,Object(b.a)(e).call(this,t))).state={bit1:0,bit2:1,value:1},a}return Object(m.a)(e,t),Object(r.a)(e,[{key:"handleClick",value:function(t){var e=this.state.bit1,a=this.state.bit2;1==t?e=1==e?0:1:a=1==a?0:1;var n=e!=a?"1":"0";this.setState({bit1:e,bit2:a,value:n})}},{key:"render",value:function(){var t=this;return i.a.createElement("div",{className:"row"},i.a.createElement(v,{value:"XOR gate produces true when both input bits are different"}),i.a.createElement("div",{className:"col-md-2"},i.a.createElement("button",{className:"btn btn-outline-primary bit",onClick:function(){return t.handleClick(1)}},this.state.bit1),i.a.createElement("button",{className:"btn btn-outline-primary bit",onClick:function(){return t.handleClick(2)}},this.state.bit2)),i.a.createElement(E,{value:"XOR"}),i.a.createElement(q,{value:this.state.value}))}}]),e}(i.a.Component),C=function(t){function e(t){var a;return Object(s.a)(this,e),(a=Object(u.a)(this,Object(b.a)(e).call(this,t))).state={qubitIn:0,qubitsIn2:Array(2).fill(1)},a}return Object(m.a)(e,t),Object(r.a)(e,[{key:"handleClick",value:function(t){var e;2==t&&(e=!this.state.qubitIn);var a=this.state.qubitsIn2.slice();1!=t&&0!=t||(a[t]=1==a[t]?0:1),this.setState({qubitIn:e,qubitsIn2:a})}},{key:"render",value:function(){var t=this;return i.a.createElement("div",{className:"row"},i.a.createElement(v,{value:"A qubit is the basic unit of quantum information. It can either be |0>, |1> or weighted sum of both. Examples of single qubit: |0>, |1>. Examples of two qubit: |00>, |11>, |01>. You can toggle them by clicking on the digits."}),i.a.createElement("div",{className:"col-md-2"},i.a.createElement("span",{className:"bar"},"|"),i.a.createElement("button",{className:"btn btn-outline-primary bit",onClick:function(){return t.handleClick(2)}},this.state.qubitIn?"1":"0"),i.a.createElement(h.a,{icon:o.b,size:"lg"})),i.a.createElement("div",{className:"col-md-2"},i.a.createElement("span",{className:"bar"},"|"),i.a.createElement("button",{className:"btn btn-outline-primary bit",onClick:function(){return t.handleClick(0)}},this.state.qubitsIn2[0]),i.a.createElement("button",{className:"btn btn-outline-primary bit",onClick:function(){return t.handleClick(1)}},this.state.qubitsIn2[1]),i.a.createElement(h.a,{icon:o.b,size:"lg"})))}}]),e}(i.a.Component),y=function(t){function e(t){var a;return Object(s.a)(this,e),(a=Object(u.a)(this,Object(b.a)(e).call(this,t))).state={qubitIn:0},a}return Object(m.a)(e,t),Object(r.a)(e,[{key:"handleClick",value:function(){var t=!this.state.qubitIn;this.setState({qubitIn:t})}},{key:"render",value:function(){var t=this;return i.a.createElement("div",{className:"row"},i.a.createElement(v,{value:"X quantum gate flips the qubit"}),i.a.createElement("div",{className:"col-md-2"},i.a.createElement("span",{className:"bar"},"|"),i.a.createElement("button",{className:"btn btn-outline-primary bit",onClick:function(){return t.handleClick()}},this.state.qubitIn?"1":"0"),i.a.createElement(h.a,{icon:o.b,size:"lg"})),i.a.createElement(E,{value:"X"}),i.a.createElement(d,{value:this.state.qubitIn?"0":"1"}))}}]),e}(i.a.Component),j=function(t){function e(t){var a;return Object(s.a)(this,e),(a=Object(u.a)(this,Object(b.a)(e).call(this,t))).state={qubitsIn:Array(2).fill(0),qubitsOut:Array(2).fill(0)},a}return Object(m.a)(e,t),Object(r.a)(e,[{key:"handleClick",value:function(t){var e=this.state.qubitsIn.slice();e[t]=1==e[t]?0:1;var a=this.state.qubitsOut.slice();a[0]=e[1],a[1]=e[0],this.setState({qubitsIn:e,qubitsOut:a})}},{key:"render",value:function(){var t=this;return i.a.createElement("div",{className:"row"},i.a.createElement(v,{value:"SWAP quantum gate swaps two qubits"}),i.a.createElement("div",{className:"col-md-2"},i.a.createElement("span",{className:"bar"},"|"),i.a.createElement("button",{className:"btn btn-outline-primary bit",onClick:function(){return t.handleClick(0)}},this.state.qubitsIn[0]),i.a.createElement("button",{className:"btn btn-outline-primary bit",onClick:function(){return t.handleClick(1)}},this.state.qubitsIn[1]),i.a.createElement(h.a,{icon:o.b,size:"lg"})),i.a.createElement(E,{value:"SWAP"}),i.a.createElement(f,{value:this.state.qubitsOut}))}}]),e}(i.a.Component),g=function(t){function e(t){var a;return Object(s.a)(this,e),(a=Object(u.a)(this,Object(b.a)(e).call(this,t))).state={qubitsIn:Array(2).fill(0),qubitsOut:Array(2).fill(0)},a}return Object(m.a)(e,t),Object(r.a)(e,[{key:"handleClick",value:function(t){var e=this.state.qubitsIn.slice();e[t]=1==e[t]?0:1;var a=this.state.qubitsOut.slice();a[0]=e[0],1==e[0]?a[1]=1==e[1]?0:1:a[1]=e[1],this.setState({qubitsIn:e,qubitsOut:a})}},{key:"render",value:function(){var t=this;return i.a.createElement("div",{className:"row"},i.a.createElement(v,{value:"CNOT quantum gate flips the second qubit if first qubit is |1>"}),i.a.createElement("div",{className:"col-md-2"},i.a.createElement("span",{className:"bar"},"|"),i.a.createElement("button",{className:"btn btn-outline-primary bit",onClick:function(){return t.handleClick(0)}},this.state.qubitsIn[0]),i.a.createElement("button",{className:"btn btn-outline-primary bit",onClick:function(){return t.handleClick(1)}},this.state.qubitsIn[1]),i.a.createElement(h.a,{icon:o.b,size:"lg"})),i.a.createElement(E,{value:"CNOT"}),i.a.createElement(f,{value:this.state.qubitsOut}))}}]),e}(i.a.Component),I=function(t){function e(t){var a;return Object(s.a)(this,e),(a=Object(u.a)(this,Object(b.a)(e).call(this,t))).state={qubit1:0,qubit2:0,qubit3:0,qubit4:0,qubit5:0},a}return Object(m.a)(e,t),Object(r.a)(e,[{key:"handleClick",value:function(t){var e=this.state.qubit1,a=this.state.qubit2;1==t?e=!e:a=!a,this.setState({qubit1:e,qubit2:a,qubit3:a,qubit4:e?!a:a,qubit5:e?!a:a})}},{key:"render",value:function(){var t=this;return i.a.createElement("div",{className:"row"},i.a.createElement(v,{value:"CCNOT quantum gate ...."}),i.a.createElement("div",{className:"col-md-2"},i.a.createElement("span",{className:"bar"},"|"),i.a.createElement("button",{className:"btn btn-outline-primary bit",onClick:function(){return t.handleClick(1)}},this.state.qubit1?"1":"0"),i.a.createElement("button",{className:"btn btn-outline-primary bit",onClick:function(){return t.handleClick(2)}},this.state.qubit2?"1":"0"),i.a.createElement("button",{className:"btn btn-outline-primary bit",onClick:function(){return t.handleClick(3)}},this.state.qubit3?"1":"0"),i.a.createElement(h.a,{icon:o.b,size:"lg"})),i.a.createElement(E,{value:"CNOT"}),i.a.createElement("div",{className:"col-md-2"},i.a.createElement("span",{className:"bar"},"|"),i.a.createElement("div",{className:"btn btn-outline-primary bit disabled"},this.state.qubit1?"1":"0"),i.a.createElement("div",{className:"btn btn-outline-primary bit"},this.state.qubit4?"1":"0"),i.a.createElement("div",{className:"btn btn-outline-primary bit"},this.state.qubit5?"1":"0"),i.a.createElement(h.a,{icon:o.b,size:"lg"})))}}]),e}(i.a.Component),w=function(t){function e(t){var a;return Object(s.a)(this,e),(a=Object(u.a)(this,Object(b.a)(e).call(this,t))).state={qubit1:0,qubit2:0,qubit3:0,qubit4:0,qubit5:0},a}return Object(m.a)(e,t),Object(r.a)(e,[{key:"handleClick",value:function(t){var e=this.state.qubit1,a=this.state.qubit2;1==t?e=!e:a=!a,this.setState({qubit1:e,qubit2:a,qubit3:a,qubit4:e?!a:a,qubit5:e?!a:a})}},{key:"render",value:function(){var t=this;return i.a.createElement("div",{className:"row"},i.a.createElement(v,{value:"CSWAP quantum gate ...."}),i.a.createElement("div",{className:"col-md-2"},i.a.createElement("span",{className:"bar"},"|"),i.a.createElement("button",{className:"btn btn-outline-primary bit",onClick:function(){return t.handleClick(1)}},this.state.qubit1?"1":"0"),i.a.createElement("button",{className:"btn btn-outline-primary bit",onClick:function(){return t.handleClick(2)}},this.state.qubit2?"1":"0"),i.a.createElement("button",{className:"btn btn-outline-primary bit",onClick:function(){return t.handleClick(3)}},this.state.qubit3?"1":"0"),i.a.createElement(h.a,{icon:o.b,size:"lg"})),i.a.createElement(E,{value:"CNOT"}),i.a.createElement("div",{className:"col-md-2"},i.a.createElement("span",{className:"bar"},"|"),i.a.createElement("div",{className:"btn btn-outline-primary bit disabled"},this.state.qubit1?"1":"0"),i.a.createElement("div",{className:"btn btn-outline-primary bit"},this.state.qubit4?"1":"0"),i.a.createElement("div",{className:"btn btn-outline-primary bit"},this.state.qubit5?"1":"0"),i.a.createElement(h.a,{icon:o.b,size:"lg"})))}}]),e}(i.a.Component),S=function(t){function e(){return Object(s.a)(this,e),Object(u.a)(this,Object(b.a)(e).apply(this,arguments))}return Object(m.a)(e,t),Object(r.a)(e,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("h2",{className:"text-left"},"Classical bit"),i.a.createElement(N,null),i.a.createElement("h2",{className:"text-left"},"Single bit gates"),i.a.createElement(k,null),i.a.createElement("h2",{className:"text-left"},"Two bit gates"),i.a.createElement(O,null),i.a.createElement(p,null),i.a.createElement("h2",{className:"text-left"},"What's a qubit?"),i.a.createElement(C,null),i.a.createElement("h2",{className:"text-left"},"Single qubit gates"),i.a.createElement(y,null),i.a.createElement("h2",{className:"text-left"},"Two qubit gates"),i.a.createElement(j,null),i.a.createElement(g,null),i.a.createElement("h2",{className:"text-left"},"Three qubit gates"),i.a.createElement(I,null),i.a.createElement(w,null))}}]),e}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[13,1,2]]]);
//# sourceMappingURL=main.7cc0a7b2.chunk.js.map