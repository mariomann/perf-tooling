!function(t,e){function n(t,e,n){t.attachEvent?(t["e"+e+n]=n,t[e+n]=function(){t["e"+e+n](window.event)},t.attachEvent("on"+e,t[e+n])):t.addEventListener(e,n,!1)}function o(){var e=new XMLHttpRequest,n={},o=t.querySelectorAll("#contributors")[0],r="<p>...with a little help from his friends:</p>";e.open("GET","https://api.github.com/repos/stefanjudis/perf-tooling/contributors",!0),e.onload=function(){200==e.status?(n=JSON.parse(e.responseText),r+="<ul>",n.forEach(function(t){"stefanjudis"!==t.login&&(r+='<li><a href="'+t.url.replace("api.","").replace("users/","")+'"><img src="'+t.avatar_url+'&s=42" alt="'+t.login+'" class="contributor-avatar"></a></li>')}),r+="</ul>",o.innerHTML=r):403==e.status&&console.log("We found GH, but it returned an error. No contributors list this time :(")},e.onerror=function(){console.log("Could not load contributors JSON. Not sure why :(")},e.send()}function r(){var e=t.getElementById("filters");n(e,"change",function(t){var e;t.target.checked?i.push(t.target.dataset.type):(e=i.indexOf(t.target.dataset.type),i.splice(e,1)),a(i)})}function a(n){var o=(t.querySelectorAll(".posts > li"),n.length);e.forEach(function(e){var r=!1;void 0===e.elem&&(e.elem=t.getElementById(e.name.replace(" ","-")));for(var a=0;o>a;++a)e[n[a]]&&(r=!0);e.elem.style.display=r||0===n.length?"inline-block":"none"})}var i=[];o(),r()}(document,tools);