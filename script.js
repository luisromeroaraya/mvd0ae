function toggleMenu() {
    if (menu.className === "menu") {
        menu.className += " responsive";
    } else {
        menu.className = "menu";
    }
}
  
icon.addEventListener("click", toggleMenu);

