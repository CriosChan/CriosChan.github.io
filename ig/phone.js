var cssPath = "style.css";
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|OperaMini/i.test(navigator.userAgent))
    cssPath = "style.css";

var fileref = document.createElement("link");

fileref.setAttribute("rel", "stylesheet");
fileref.setAttribute("type", "text/css");
fileref.setAttribute("href", cssPath);

document.getElementsByTagName("head")[0].appendChild(fileref);