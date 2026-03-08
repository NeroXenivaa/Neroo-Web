// --- Set Active Button
function setActive(el) {
    const icon = document.querySelectorAll(".navbar-togle-alternative-li");

    icon.forEach(i =>
        i.classList.remove("ACC")
    );
    el.classList.add("ACC")
}

const sections = document.querySelectorAll("section");
const icons = document.querySelectorAll(".navbar-togle-alternative-li");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 200;
        const sectionHeight = section.offsetHeight;

        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    icons.forEach(icon => {
        icon.classList.remove("ACC");

        if (icon.dataset.section === current) {
            icon.classList.add("ACC");
        }
    });
});