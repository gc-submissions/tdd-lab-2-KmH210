(()=>{var e={14:e=>{e.exports=class{constructor(e){this.amountDue=null,this.cashTendered=0}insertCoin(e){"quarter"===e?this.cashTendered+=25:"dime"===e?this.cashTendered+=10:"nickel"===e?this.cashTendered+=5:"penny"===e&&(this.cashTendered+=1)}isPaymentSufficient(){return this.cashTendered>this.amountDue||!(this.cashTendered<this.amountDue)}giveChange(){return{quarters:0,dimes:0,nickels:0,pennies:0}}}},11:e=>{e.exports=function e(t){return t<0?"-"+e(-t):"$"+(t/100).toFixed(2)}}},t={};function n(i){if(t[i])return t[i].exports;var d=t[i]={exports:{}};return e[i](d,d.exports,n),d.exports}(()=>{const e=n(14),t=n(11);let i=new e(0);!function(){const n=document.getElementById("vendingForm"),d=document.getElementById("amountDue"),r=document.getElementById("coins"),s=document.getElementById("cashTendered"),c=document.getElementById("paymentSufficient"),u=document.getElementById("getChangeButton"),a=document.getElementById("change"),o=a.querySelectorAll(".change-count"),m=document.getElementById("resetButton");function h(){s.innerText=t(i.cashTendered);const e=0!==i.amountDue&&i.isPaymentSufficient();c.hidden=!e,u.disabled=!e,a.hidden=!0}d.addEventListener("change",(()=>{const t=Math.round(100*d.value);i=new e(t),h()})),r.addEventListener("click",(e=>{let t=e.target.getAttribute("data-type");t&&(i.insertCoin(t),h())})),n.addEventListener("submit",(e=>{if(e.preventDefault(),i.isPaymentSufficient){const e=i.giveChange();o[0].innerText=e.quarters,o[1].innerText=e.dimes,o[2].innerText=e.nickels,o[3].innerText=e.pennies,a.hidden=!1}})),m.addEventListener("click",(()=>{d.value="",i=new e(0),h()})),h()}()})()})();