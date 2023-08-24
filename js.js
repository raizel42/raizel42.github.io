function makeActive(){
    var element = document.getElementById("text");
    var see1 = document.getElementById("text2");
    var see2 = document.getElementById("text3");
    element.classList.add("active");
    see1.classList.remove("active");
    see2.classList.add("active");
}
function removeActive(){
    var element = document.getElementById("text");
    var see1 = document.getElementById("text2");
    var see2 = document.getElementById("text3");
    element.classList.remove("active");
    see1.classList.add("active");
    see2.classList.remove("active");
}