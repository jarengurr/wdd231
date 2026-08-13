const getinfo = window.location.search;
console.log(getinfo);
myinfo = new URLSearchParams(getinfo);
console.log(myinfo);
console.log(myinfo.get('first'));
document.querySelector('#info').innerHTML = `<p class="upper"> The first color you picked came out to be the number  ${myinfo.get('first')} and the second color you picked gave a number of  ${myinfo.get('second')}</p>
<p>The above numbers were multiplied by " ${myinfo.get('times')} "</p>
 and the forth color band gave a tolerance number of ${myinfo.get('tol')}</p>

<p class="upper"> ${myinfo.get('answer')} </p>
<p>Thank you for trying the Resistor Color Code Converter</p>`;


//http://127.0.0.1:5500/final/review.html?first=2&second=2&times=100&tol=2&answer=Your+Resistor+Value+is+2200+ohms+with+a+Tolerance+of+2%25