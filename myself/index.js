var btn = document.getElementById('go-top');

window.addEventListener("scroll", function () {
    if (this.scrollY > 250) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
});

btn.addEventListener("click", function () {
    document.documentElement.scrollTop = 0;
});