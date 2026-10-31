var LINKS={line:"https://line.me/ti/p/oUurXkquRB",whatsapp:"https://wa.me/886988106002",web:"https://www.sensofar.com/"};
document.querySelectorAll('.sns').forEach(function(a){var u=LINKS[a.dataset.k];if(u){a.href=u;a.target="_blank";a.rel="noopener"}else a.style.display="none"});
var m=document.getElementById('wc');
document.getElementById('wcBtn').onclick=function(){m.hidden=false};
m.onclick=function(e){if(e.target===m||e.target.classList.contains('x'))m.hidden=true};
document.addEventListener('keydown',function(e){if(e.key==='Escape')m.hidden=true});
