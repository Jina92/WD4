function showTab(target_str) {
    var elem;
    var menu_list = ["home", "aboutus", "service", "philosophy"];
    var i;

    for ( i=0; i<menu_list.length; i++) {
        elem = document.getElementById(menu_list[i]);
        elem.setAttribute("hidden", true);
        if (menu_list[i] == target_str) {
            console.log(menu_list[i]);
            elem.removeAttribute("hidden");
        } 
    }
}

function initTab() {
    var elem;
    var menu_list = ["home", "aboutus", "service", "philosophy"];
    var i;
    
    for ( i=0; i<menu_list.length; i++) {
        elem = document.getElementById(menu_list[i]);
        elem.setAttribute("hidden", true);
    }
    elem = document.getElementById(menu_list[0]);
    elem.removeAttribute("hidden");
}
