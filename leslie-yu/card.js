var WID='leslie0988106002',m=document.getElementById('wc'),t=document.getElementById('toast'),tt;
function toast(s){t.textContent=s;t.hidden=false;clearTimeout(tt);tt=setTimeout(function(){t.hidden=true},4500)}
function copy(s){
  if(navigator.clipboard&&window.isSecureContext)return navigator.clipboard.writeText(s).then(function(){return true},fb);
  return Promise.resolve(fb());
  function fb(){var a=document.createElement('textarea');a.value=s;a.setAttribute('readonly','');a.style.position='fixed';a.style.opacity='0';document.body.appendChild(a);a.select();a.setSelectionRange(0,s.length);var ok=false;try{ok=document.execCommand('copy')}catch(e){}document.body.removeChild(a);return ok}
}
function copied(ok){toast(ok?'已複製微信號 '+WID+'，請在微信「新增朋友」貼上搜尋':'微信號：'+WID+'（請長按複製）')}
document.getElementById('wcBtn').onclick=function(){
  copy(WID).then(function(ok){copied(ok);m.hidden=false;setTimeout(function(){location.href='weixin://'},1200)});
};
document.getElementById('wcCopy').onclick=function(){copy(WID).then(copied)};
m.onclick=function(e){if(e.target===m||e.target.classList.contains('x'))m.hidden=true};
document.addEventListener('keydown',function(e){if(e.key==='Escape')m.hidden=true});
document.getElementById('share').onclick=function(){var d={title:document.title,url:location.href};if(navigator.share)navigator.share(d).catch(function(){});else copy(location.href).then(function(ok){toast(ok?'已複製名片連結':location.href)})};
