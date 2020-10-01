document.addEventListener("DOMContentLoaded", function() {

    const first = document.querySelectorAll(".first-attempt");

    for (let el of first) {
        el.classList.add("active");
    }

    const border = document.querySelectorAll("[data-border]");

    border.forEach(e => {
        e.dataset.elActive = true;
    })

    const hack = document.querySelectorAll(".hack");

    for (let el of hack) {
        el.setAttribute("title", "hacking");
    }

    const hijack = document.querySelectorAll(".hijack");

    for (let el of hijack) {
        el.removeAttribute("title");
    }

    const st12 = document.querySelectorAll(".st1.st2");

    for (let el of st12) {
        el.style.color = "red";
        el.style.fontSize = "15px";
    }

    const del = document.querySelectorAll(".del", ":not.hijack");

    for (let el of del) {
        el.dataset.hackActive = true;
        el.removeAttribute("data-hack-inactive");
    }

    const last = document.querySelectorAll(".last-attempt");

    for (let el of last) {
        el.firstChild.style.display = "none";
    }

});