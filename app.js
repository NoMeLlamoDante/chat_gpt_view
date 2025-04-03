
function toggleTheme() {
    const root = document.documentElement;
    if (root.dataset.theme === "light") {
        root.dataset.theme = "dark"
    } else {
        root.dataset.theme = "light"
    }
}

function toggleSidebar() {
    let data = document.querySelector(".sidebar").classList.toggle("closed")
    if (data)
        document.getElementById("toggle-chat").style.display = "block";
    else
        document.getElementById("toggle-chat").style.display = "none";
}
