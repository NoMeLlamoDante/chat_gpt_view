document.body.onload = initial;

function initial() {
    const dblocalStorage = window.localStorage;
    const default_theme = dblocalStorage.getItem("theme");
    if (default_theme === null){
        //Get System theme
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            // Dark Mode
            dblocalStorage.setItem("theme", "dark");
            root.dataset.theme = "dark";
        } else {
            root.dataset.theme = "light";
            dblocalStorage.setItem("theme", "light");
        }
    } else {
        const root = document.documentElement;
        root.dataset.theme = default_theme;
    }
}

function toggleTheme() {
    const root = document.documentElement;
    if (root.dataset.theme === "light") {
        root.dataset.theme = "dark";
        localStorage.setItem("theme", "dark");
    } else {
        root.dataset.theme = "light";
        localStorage.setItem("theme", "light");
    }
}

function toggleSidebar() {
    const data = document.querySelector(".sidebar").classList.toggle("closed")
    if (data)
        document.getElementById("toggle-chat").style.display = "block";
    else
        document.getElementById("toggle-chat").style.display = "none";
}

const entrada = document.querySelector("input");
entrada.addEventListener("keyup", function (event) {
    const input_value = document.getElementById("question").value;
    // Enter Key
    if (event.key === 'Enter') {
        alert("enter pressed");
        
    }else {
        const length_value = input_value.length;
        if (length_value == 0){
            document.querySelector(".buttons").style.display = "flex";
            document.querySelector(".answers").style.display = "none";
        }else{
            document.getElementById("1").innerText = input_value;
            document.getElementById("2").innerText = input_value;
            document.getElementById("3").innerText = input_value;
            document.getElementById("4").innerText = input_value;
            document.querySelector(".buttons").style.display = "none";
            document.querySelector(".answers").style.display = "flex";
        }
    }
})