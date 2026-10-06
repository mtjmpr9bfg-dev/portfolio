/* =====================================================
   MENU MOBILE
===================================================== */

const menuToggle = document.getElementById("menu-toggle");
const navigation = document.getElementById("navigation");

if (menuToggle && navigation) {

    menuToggle.addEventListener("click", () => {

        navigation.classList.toggle("active");

    });

}


/* =====================================================
   FERMER LE MENU APRÈS UN CLIC
===================================================== */

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navigation.classList.remove("active");

    });

});


/* =====================================================
   ANNÉE DU FOOTER
===================================================== */

const year = document.getElementById("year");

if (year) {

    year.textContent = new Date().getFullYear();

}


/* =====================================================
   APPARITION LÉGÈRE
===================================================== */

const animatedElements = document.querySelectorAll(
    ".section-title, .about-grid, .skill-card, .project-card, .journey-card, .cv-box, .contact-grid"
);

animatedElements.forEach(element => {

    element.classList.add("hidden");

});


const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.12
    }

);


animatedElements.forEach(element => {

    observer.observe(element);

});


/* =====================================================
   NAVIGATION ACTIVE
===================================================== */

const sections = document.querySelectorAll("section[id]");

function updateActiveLink() {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 160;

        const sectionBottom =
            sectionTop + section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionBottom
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        const href =
            link.getAttribute("href");

        if (href === `#${currentSection}`) {

            link.classList.add("active");

        }

    });

}

window.addEventListener(
    "scroll",
    updateActiveLink
);

updateActiveLink();


/* =====================================================
   LIENS PROJETS TEMPORAIRES
===================================================== */

const temporaryLinks =
    document.querySelectorAll(
        '.project-link[href="#"], .github-link[href="#"], .contact-socials a[href="#"]'
    );

temporaryLinks.forEach(link => {

    link.addEventListener("click", event => {

        event.preventDefault();

        alert(
            "Ce lien sera ajouté prochainement."
        );

    });

});


/* =====================================================
   CONSOLE
===================================================== */

console.log(
    "Portfolio de Yekini Kouboura chargé avec succès."
);
/* =====================================================
   MESSAGE APRÈS ENVOI DU FORMULAIRE
===================================================== */

const urlParams = new URLSearchParams(window.location.search);

if (urlParams.get("success") === "1") {

    const successMessage = document.createElement("div");

    successMessage.textContent =
        "✓ Votre message a bien été envoyé !";

    successMessage.style.position = "fixed";
    successMessage.style.top = "90px";
    successMessage.style.right = "25px";
    successMessage.style.zIndex = "9999";
    successMessage.style.padding = "16px 22px";
    successMessage.style.background = "#111111";
    successMessage.style.color = "#ffffff";
    successMessage.style.borderRadius = "12px";
    successMessage.style.fontSize = "15px";
    successMessage.style.boxShadow =
        "0 10px 30px rgba(0, 0, 0, 0.18)";

    document.body.appendChild(successMessage);

    setTimeout(() => {

        successMessage.remove();

        window.history.replaceState(
            {},
            document.title,
            window.location.pathname
        );

    }, 4000);
}