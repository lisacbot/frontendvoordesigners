var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {

        /*Toggle tussen het toevoegen en verwijderen van de active class.*/
        this.classList.toggle("active");
        
        /*Toggle tussen het wel en niet laten zien van het actieve panel*/
        var panel = this.nextElementSibling;
//        if (panel.style.display === "block") {
//            panel.style.display = "none";
//        } else {
//            panel.style.display = "block";
//        }
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        } 
    });
}