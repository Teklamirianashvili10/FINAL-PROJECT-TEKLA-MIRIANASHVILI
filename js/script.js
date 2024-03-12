function togglemenu() {
    var menu = document.getElementById("menu");
    menu.classList.toggle ("menu-active");

    var body = document.body;
    body.classList.toggle ("overflow-hidden")
}