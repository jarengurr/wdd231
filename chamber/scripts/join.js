const getinfo = window.location.search;
console.log(getinfo);
myinfo = new URLSearchParams(getinfo);
console.log(myinfo);
console.log(myinfo.get('first'));
document.querySelector('#info').innerHTML = `<p> Appointment for ${myinfo.get('first')}  ${myinfo.get('last')}</p >
<p>Proxy ${myinfo.get('ordinance')}           `