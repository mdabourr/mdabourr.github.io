const menu=document.querySelector(".menu"), links=document.querySelector(".nav-links");menu?.addEventListener("click",()=>{links.style.display=links.style.display==="flex"?"none":"flex";links.style.position="absolute";links.style.top="76px";links.style.left="0";links.style.right="0";links.style.padding="20px";links.style.background="#070b12";links.style.flexDirection="column";links.style.borderBottom="1px solid #172231"});const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("show")}),{threshold:.08});document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
const serviceGrid = document.querySelector(".service-grid");
const serviceCards = document.querySelectorAll(".service-card");

serviceCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        serviceGrid.classList.add("has-active");

        serviceCards.forEach(item => {
            item.classList.remove("active");
        });

        card.classList.add("active");

    });


    card.addEventListener("mouseleave", () => {

        serviceGrid.classList.remove("has-active");

        serviceCards.forEach(item => {
            item.classList.remove("active");
        });

    });

});
/* =========================
   LIGHT / DARK MODE
========================= */

const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.querySelector(".theme-icon");

/* Check saved theme */

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
    document.body.classList.add("light-mode");
    themeIcon.textContent = "🌙";
}


/* Toggle theme */

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {

        themeIcon.textContent = "🌙";

        localStorage.setItem("theme", "light");

    } else {

        themeIcon.textContent = "☀️";

        localStorage.setItem("theme", "dark");

    }

});

/* =========================
   CONTACT FORM
========================= */

const contactForm = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");
const sendButton = document.getElementById("send-btn");

contactForm.addEventListener("submit", async (event) => {

    event.preventDefault();

    const formData = new FormData(contactForm);

    /* Loading State */

    sendButton.disabled = true;
    sendButton.innerHTML = "Sending...";

    formMessage.textContent = "";
    formMessage.className = "form-message";

    try {

        const response = await fetch(
            contactForm.action,
            {
                method: "POST",
                body: formData,
                headers: {
                    Accept: "application/json"
                }
            }
        );

        if (response.ok) {

            contactForm.reset();

            formMessage.textContent = "Message sent successfully ✓";
            formMessage.classList.add("success");

        } else {

            formMessage.textContent =
                "Something went wrong. Please try again.";
            formMessage.classList.add("error");

        }

    } catch (error) {

        formMessage.textContent =
            "Unable to send the message. Please try again.";
        formMessage.classList.add("error");

    }

    /* Restore Button */

    sendButton.disabled = false;
    sendButton.innerHTML =
        'Send Message <span>↗</span>';

});
