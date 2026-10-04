// ==============================
// MENU MOBILE
// ==============================

const menuButton = document.getElementById("menuButton");
const navigation = document.getElementById("navigation");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("active");

    if (navigation.classList.contains("active")) {
        menuButton.innerHTML = "✕";
    } else {
        menuButton.innerHTML = "☰";
    }
});


// ==============================
// FECHAR MENU AO CLICAR
// ==============================

const navigationLinks = document.querySelectorAll(
    "#navigation a"
);

navigationLinks.forEach((link) => {

    link.addEventListener("click", () => {

        navigation.classList.remove("active");

        menuButton.innerHTML = "☰";

    });

});


// ==============================
// ANO AUTOMÁTICO NO FOOTER
// ==============================

const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}


// ==============================
// ANIMAÇÃO SUAVE AO ENTRAR
// ==============================

const animatedElements = document.querySelectorAll(
    ".area-card, .step, .hero-card, .about-symbol"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


animatedElements.forEach((element) => {

    element.style.opacity = "0";
    element.style.transform = "translateY(25px)";
    element.style.transition = "opacity .7s ease, transform .7s ease";

    observer.observe(element);

});
