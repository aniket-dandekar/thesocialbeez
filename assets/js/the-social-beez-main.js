toggle_btn.addEventListener("click", () => {
    if (toggle_btn.getAttribute('aria-expanded') === "false") {
        toggle_btn.setAttribute('aria-expanded', 'true');
        // setTimeout(() => {
        header__nav.setAttribute('aria-expanded', 'true');
        // }, 300);
        document.querySelector(".header__ul").classList.remove("list_animate_close")
        document.querySelector(".header__ul").classList.add("list_animate_open")

    } else {
        toggle_btn.setAttribute('aria-expanded', 'false');
        setTimeout(() => {
            header__nav.setAttribute('aria-expanded', 'false');
        }, 300);
        document.querySelector(".header__ul").classList.remove("list_animate_open")
        document.querySelector(".header__ul").classList.add("list_animate_close")

    }
})