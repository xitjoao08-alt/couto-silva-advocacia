// ===============================
// ANO AUTOMÁTICO
// ===============================

const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}


// ===============================
// MENU MOBILE
// ===============================

const menuButton = document.getElementById("menuButton");
const navigation = document.getElementById("navigation");

if (menuButton && navigation) {

    menuButton.addEventListener("click", () => {

        const active = navigation.classList.toggle("active");

        menuButton.setAttribute(
            "aria-expanded",
            active ? "true" : "false"
        );

    });


    const navigationLinks =
        navigation.querySelectorAll("a");

    navigationLinks.forEach(link => {

        link.addEventListener("click", () => {

            navigation.classList.remove("active");

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });

}


// ===============================
// HEADER AO ROLAR
// ===============================

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (!header) return;

    if (window.scrollY > 40) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});


// ===============================
// ANIMAÇÃO DE ENTRADA
// ===============================

const animatedElements =
    document.querySelectorAll(
        ".area-card, .step, .highlight, .about-content, .hero-card"
    );


const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );


animatedElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(20px)";
    element.style.transition =
        "opacity 0.7s ease, transform 0.7s ease";

    observer.observe(element);

});


// ===============================
// CLASSE VISIBLE
// ===============================

const animationStyle = document.createElement("style");

animationStyle.textContent = `
    .area-card.visible,
    .step.visible,
    .highlight.visible,
    .about-content.visible,
    .hero-card.visible {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;

document.head.appendChild(animationStyle);
