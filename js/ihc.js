function openMenu(){
    var x = document.getElementById("myTopNav");
    var y = document.getElementById("my-logo");
    if (x.className === "topNav") {
        y.className += " noVisibility";
        x.className += " responsive";
    } else {
        y.className = "logo";
        x.className = "topNav";
    }
}
