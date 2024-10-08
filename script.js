let dark = document.getElementById("dark");
let light = document.getElementById("light");

const toggleButton = () => {
    var element = document.body;
    element.classList.toggle("dark-mode");
    // dark.style.display = "none";
}

const toggleLight = () => {
    var element = document.body;
    element.classList.toggle("dark-mode");
    dark.style.display = "none";
    light.style.display = "block";
}