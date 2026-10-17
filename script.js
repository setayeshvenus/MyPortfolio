const projectButtons = document.querySelectorAll(".project-button");

const modal = document.getElementById("project-modal");
const modalClose = document.getElementById("modal-close");

const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const modalTech = document.getElementById("modal-tech");


const projects = {
    portfolio: {
        title: "My First Website",
        description:
            "A modern personal portfolio website built to showcase my skills, projects and journey as a web developer.",
        tech: "HTML · CSS · JavaScript"
    },

    lune: {
        title: "LUNÉ",
        description:
            "A luxury fashion brand website with an elegant and modern visual identity.",
        tech: "HTML · CSS · JavaScript"
    },

    cafe: {
        title: "NOIR CAFÉ",
        description:
            "A stylish café website designed to create a modern and welcoming digital experience.",
        tech: "HTML · CSS · JavaScript"
    }
};


projectButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const projectName = button.dataset.project;

        const project = projects[projectName];

        modalTitle.textContent = project.title;
        modalDescription.textContent = project.description;
        modalTech.textContent = project.tech;

        modal.classList.add("show");

    });

});


modalClose.addEventListener("click", function() {

    modal.classList.remove("show");

});

modal.addEventListener("click", function(event) {
    if (event.target === modal) {
        modal.classList.remove("show");
    }
});

document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        modal.classList.remove("show");
    }
});

const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", function() {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        themeToggle.textContent = "🌙";
        localStorage.setItem("theme", "light");
    } else {
        themeToggle.textContent = "☀️";
        localStorage.setItem("theme", "dark");
    }
});

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
    document.body.classList.add("light-mode");
    themeToggle.textContent = "🌙";
}

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        }
    });
}, {
    threshold: 0.15
});

revealElements.forEach(function(element) {
    revealObserver.observe(element);
});

/* =========================
   CONTACT FORM
========================= */

const contactForm = document.getElementById("contact-form");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const messageError = document.getElementById("message-error");

const formSuccess = document.getElementById("form-success");


contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    let isValid = true;


    /* NAME */

    if (nameInput.value.trim() === "") {

        nameError.textContent = "Please enter your name.";

        isValid = false;

    } else {

        nameError.textContent = "";

    }


    /* EMAIL */

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailInput.value.trim() === "") {

        emailError.textContent =
            "Please enter your email.";

        isValid = false;

    } else if (!emailPattern.test(emailInput.value.trim())) {

        emailError.textContent =
            "Please enter a valid email.";

        isValid = false;

    } else {

        emailError.textContent = "";

    }


    /* MESSAGE */

    if (messageInput.value.trim() === "") {

        messageError.textContent =
            "Please enter your message.";

        isValid = false;

    } else {

        messageError.textContent = "";

    }


    /* SUCCESS */

    if (isValid) {

        formSuccess.classList.add("show");

        contactForm.reset();

    } else {

        formSuccess.classList.remove("show");

    }

});
