const hamburger = document.querySelector("#sidelogo-btn");

hamburger.addEventListener("click", function() {
    document.querySelector("#sidebar").classList.toggle("expand");
});
