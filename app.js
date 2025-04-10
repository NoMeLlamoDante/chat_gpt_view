document.body.onload = initial;

function initial() {
    const default_theme = get_theme();
    if (default_theme === null){
        //Get System default theme
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            // Dark Mode
            set_theme("dark");
        } else {
            set_theme("light");
        }
    } else {
        set_theme(default_theme);
    }
}

function toggleTheme() {
    const theme = get_theme();
    if (theme === "light") {
        set_theme("dark");
    } else {
        set_theme("light");
    }
}

function toggleSidebar() {
    const data = QS(".sidebar").classList.toggle("closed")
    if (data)
        get_by_ID_style("toggle-chat").display = "block";
    else
        get_by_ID_style("toggle-chat").display = "none";
}

QS("input").addEventListener("keyup", function (event) {
    const input = get_by_ID("question");
    const length_value = input.value.length;
    // Enter Key
    if (event.key === 'Enter') {
        if (length_value > 0) {
            // Desaparecer contenedores
            QS_style(".data-container").display = "none";
            QS_style(".buttons").display = "none";
            QS_style(".asks-hints").display = "none";
            QS_style("footer").display = "none";
            
            // Cambiar al nuevo estilo
            const container = get_by_ID("chat");
            container.style.display = "flex";
            container.style.flexDirection = "column";
            container.style.justifyContent = "space-between";

            // Container answer
            let answers_container = QS(".answers");
            answers_container.display = "flex";

            get_by_ID("1").innerText = "";
            get_by_ID("2").innerText = "";
            get_by_ID("3").innerText = "";
            get_by_ID("4").innerText = "";

            asking(input.value);
            input.value = "";
        }
    } else {
        // Alter buttons and ask-hints
        let answers_is_visible = get_css_attrib(".data-container").display;
        if (answers_is_visible === "block") {
            if (length_value === 0) {
                QS(".buttons").style.display = "flex";
                QS(".asks-hints").style.display = "none";
            } else {
                get_by_ID("1").innerText = input.value;
                get_by_ID("2").innerText = input.value;
                get_by_ID("3").innerText = input.value;
                get_by_ID("4").innerText = input.value;
                QS(".buttons").style.display = "none";
                QS(".asks-hints").style.display = "flex";
            }
        }
        
    }
});
function asking(question) {
    // Container answer
    let answers_container = QS(".answers");

    // Print question
    const p_question = document.createElement("p");
    p_question.className = "p_question";
    p_question.innerText = question;
    answers_container.append(p_question);
    
    // Print answer
    const answer = document.createElement("p");
    answer.className = "p_answer";
    answer.innerText = "Lorem ipsum dolor sit amet \
    consectetur adipisicing elit. \Excepturi ea porro unde, id debitis tempore \
    est qui quo quasi, maxime natus! Modi libero \
    architecto fugiat optio aspernatur provident deserunt error.";
    answers_container.append(answer);
}
function clear_data() {
    // vaciar Container answer
    let answers_container = QS(".answers");
    const elements = answers_container.getElementsByTagName("p");
    while(elements.length>0){
        elements[0].remove();
    }

    //Regresar contenedores
    get_by_ID("chat").style.display = "grid";
    QS_style(".data-container").display = "block";
    QS_style(".buttons").display = "flex";
    QS_style(".asks-hints").display = "none";
    QS_style("footer").display = "block";
    answers_container.display = "none";
}
function QS(class_name) {
    return document.querySelector(class_name);
}
function QS_style(class_name) {
    return QS(class_name).style;
}
function get_by_ID(class_name) {
    return document.getElementById(class_name);
}
function get_by_ID_style(class_name) {
    return get_by_ID(class_name).style;
}
function get_css_attrib(class_name) {
    return window.getComputedStyle(document.querySelector(class_name));
}
function get_theme() {
    const dblocalStorage = window.localStorage;
    return dblocalStorage.getItem("theme");
}
function set_theme(theme) {
    const dblocalStorage = window.localStorage;
    const root = document.documentElement;
    dblocalStorage.setItem("theme", theme);
    root.dataset.theme = theme;
}