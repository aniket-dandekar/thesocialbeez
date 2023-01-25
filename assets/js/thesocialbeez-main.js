const toggle_btn = document.querySelector('#toggle-btn');
toggle_btn.addEventListener("click", () => {
    if (toggle_btn.getAttribute('aria-expanded') === "false") {
        toggle_btn.setAttribute('aria-expanded', 'true');
        // setTimeout(() => {
            // }, 300);
        header__nav.setAttribute('aria-expanded', 'true');
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

const contact_form = document.querySelector("#contact-form")
contact_form.addEventListener("submit", (e)=>{
    e.preventDefault();
})
