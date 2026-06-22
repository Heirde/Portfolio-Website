const projects = document.querySelectorAll(".website-example");
const infoTitle = document.querySelector(".info-title");
const infoDate = document.querySelector(".info-date");
const infoClient = document.querySelector(".info-client");
const infoLink = document.querySelector(".info-link");
const infoContent = document.querySelector(".project-info-content");



const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const card = entry.target;

            infoContent.style.opacity = "0";
            setTimeout(() => {
                infoTitle.textContent = card.dataset.title;
                infoDate.textContent = card.dataset.date;
                infoClient.textContent = card.dataset.client;
                infoContent.style.opacity = "0.07";
            }, 200);
        }
    });
}, {
    threshold: 0.5
});

projects.forEach((project) => {
    observer.observe(project);
});