// 社群連結：只填從 QR 解碼確認過的網址；空白者按鈕自動隱藏
var LINKS={line:"https://line.me/ti/p/PQrUE9E4Rh",lineoa:"https://lin.ee/P4LwzQb",fb:"https://www.facebook.com/share/1JTm5xDJME/?mibextid=wwXIfr",ig:""};
document.querySelectorAll('.sns').forEach(function(a){var u=LINKS[a.dataset.k];if(u){a.href=u;a.target="_blank";a.rel="noopener"}else a.style.display="none"});
