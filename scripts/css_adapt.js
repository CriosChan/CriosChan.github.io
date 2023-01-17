var cssPath = "./css/style.css";
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|OperaMini/i.test(navigator.userAgent))
    cssPath = "./css/phone.css";

var fileref = document.createElement("link");

fileref.setAttribute("rel", "stylesheet");
fileref.setAttribute("type", "text/css");
fileref.setAttribute("href", cssPath);

document.getElementsByTagName("head")[0].appendChild(fileref);