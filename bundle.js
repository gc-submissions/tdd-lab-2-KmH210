(()=>{var e={14:e=>{e.exports=class{constructor(e){this.amountDue=null,this.cashTendered=0}insertCoin(e){}isPaymentSufficient(){}giveChange(){return{quarters:0,dimes:0,nickels:0,pennies:0}}}},11:e=>{e.exports=function e(t){return t<0?"-"+e(-t):"$"+(t/100).toFixed(2)}}},t={};function n(i){if(t[i])return t[i].exports;var d=t[i]={exports:{}};return e[i](d,d.exports,n),d.exports}(()=>{const e=n(14),t=n(11);let i=new e(0);!function(){const n=document.getElementById("vendingForm"),d=document.getElementById("amountDue"),r=document.getElementById("coins"),s=document.getElementById("cashTendered"),u=document.getElementById("paymentSufficient"),c=document.getElementById("getChangeButton"),o=document.getElementById("change"),a=o.querySelectorAll(".change-count"),m=document.getElementById("resetButton");function l(){s.innerText=t(i.cashTendered);const e=0!==i.amountDue&&i.isPaymentSufficient();u.hidden=!e,c.disabled=!e,o.hidden=!0}d.addEventListener("change",(()=>{const t=Math.round(100*d.value);i=new e(t),l()})),r.addEventListener("click",(e=>{let t=e.target.getAttribute("data-type");t&&(i.insertCoin(t),l())})),n.addEventListener("submit",(e=>{if(e.preventDefault(),i.isPaymentSufficient){const e=i.giveChange();a[0].innerText=e.quarters,a[1].innerText=e.dimes,a[2].innerText=e.nickels,a[3].innerText=e.pennies,o.hidden=!1}})),m.addEventListener("click",(()=>{d.value="",i=new e(0),l()})),l()}()})()})();