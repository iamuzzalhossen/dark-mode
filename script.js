const icon = document.getElementById("themeIcon");

icon.onclick = () => {
    document.body.classList.toggle("darkTheme");

    if(document.body.classList.contains("darkTheme")){
        icon.src = "images/sun-icon.png";
        localStorage.setItem("theme", "dark");
    } else {
        icon.src = "images/moon-icon.png";
        localStorage.setItem("theme", "light");
    }
}

const localData = localStorage.getItem("theme");

if(localData == "light"){
    icon.src = "images/moon-icon.png";
    document.body.classList.remove("darkTheme");
} else if(localData == "dark"){
    icon.src = "images/sun-icon.png";
    document.body.classList.add("darkTheme");
}

