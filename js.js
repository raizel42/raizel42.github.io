var element = document.getElementById("text");
var see1 = document.getElementById("text2");
var see3 = document.getElementById("see3");

see1.addEventListener('click', function() {
    // Toggle the "active" class on the sidebar to show/hide it
    element.classList.toggle('active');

    // If the element is active the content in See "More" will be replace in "Less"
    if(element.classList.contains('active')){
        see3.textContent = "Less";
    } else {
        see3.textContent = "More";
    }
}); 