var t=document.getElementById('toast'),tt;function toast(s){t.textContent=s;t.hidden=false;clearTimeout(tt);tt=setTimeout(function(){t.hidden=true},3500)}
function copy(s){if(navigator.clipboard&&window.isSecureContext)return navigator.clipboard.writeText(s).then(function(){return true},function(){return false});return Promise.resolve(false)}
document.getElementById('share').onclick=function(){var d={title:document.title,url:location.href};if(navigator.share)navigator.share(d).catch(function(){});else copy(location.href).then(function(ok){toast(ok?'已複製名片連結':location.href)})};
