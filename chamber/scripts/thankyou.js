const getinfo = window.location.search;
console.log(getinfo);
myinfo = new URLSearchParams(getinfo);
console.log(myinfo);
console.log(myinfo.get('first'));
document.querySelector('#info').innerHTML = `<p class="upper"> this Membership is for ${myinfo.get('first')}  ${myinfo.get('last')}</p >
<p>Your Phone Number is  ${myinfo.get('phone')}  and Your Email address is ${myinfo.get('email')}</p>
<p class="upper">Your Title is ${myinfo.get('title')} in ${myinfo.get('name')}</p>
<p>Your Orginazition discription is " ${myinfo.get('discription')} "</p>
<p class="upper">Thank You for being a ${myinfo.get('membership')} Member`;