var cssPath = "./css/style.css";
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|OperaMini/i.test(navigator.userAgent))
    cssPath = "./css/style.css";

var fileref = document.createElement("link");

fileref.setAttribute("rel", "stylesheet");
fileref.setAttribute("type", "text/css");
fileref.setAttribute("href", cssPath);

document.getElementsByTagName("head")[0].appendChild(fileref);

const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

theme_switch(prefersDarkScheme.matches)

function theme_switch(bool){
    const theme_changer = document.getElementById("theme_changer")
    if (bool) {
        document.body.classList.add("blacktheme");
        document.getElementById("banner_logo_image").setAttribute("src", "./medias/logo_white.png")
        theme_changer.setAttribute("onclick", "theme_switch(false)")
        theme_changer.style.backgroundImage = "url(\"./medias/soleil.png\")"
    } else {
        document.body.classList.remove("blacktheme");
        document.getElementById("banner_logo_image").setAttribute("src", "./medias/logo_black.png")
        theme_changer.setAttribute("onclick", "theme_switch(true)")
        theme_changer.style.backgroundImage = "url(\"./medias/lune.png\")"
    }
}