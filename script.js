// ===============================
// InternHub - JavaScript
// ===============================

document.addEventListener("DOMContentLoaded", () => {
// ===============================
// APPLICATION FORM
// ===============================

const applicationForm =
    document.getElementById("applicationForm");

const successMessage =
    document.getElementById("successMessage");

if (applicationForm) {

    applicationForm.addEventListener("submit", function (event) {

        event.preventDefault();

        successMessage.style.display = "block";

        applicationForm.reset();

        successMessage.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    });

}
   

    // ===============================
    // APPLY NOW BUTTONS
    // ===============================

    const applyButtons =
        document.querySelectorAll(".apply-btn");

    const internshipSelect =
        document.getElementById("internship");

    applyButtons.forEach(button => {

        button.addEventListener("click", () => {

            const selectedInternship =
                button.getAttribute("data-internship");

            if (internshipSelect) {
                internshipSelect.value = selectedInternship;
            }

            document
                .getElementById("apply")
                .scrollIntoView({
                    behavior: "smooth"
                });

        });

    });


    // ===============================
    // SMOOTH NAVIGATION
    // ===============================

    const links =
        document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {

        link.addEventListener("click", function (event) {

            const targetId =
                this.getAttribute("href");

            if (targetId === "#") {
                return;
            }

            const target =
                document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    });

        // ===============================
    // SEARCH & FILTER
    // ===============================

    const searchInput =
        document.getElementById("searchInput");

    const filterSelect =
        document.getElementById("filterSelect");

    const internshipCards =
        document.querySelectorAll(".card");

    function filterInternships() {

        const searchText =
            searchInput.value.toLowerCase().trim();

        const selectedDomain =
            filterSelect.value;

        internshipCards.forEach(card => {

            const cardText =
                card.textContent.toLowerCase();

            const cardDomain =
                card.querySelector(".tag").textContent.trim();

            const matchesSearch =
                cardText.includes(searchText);

            const matchesFilter =
                selectedDomain === "all" ||
                cardDomain === selectedDomain;

            if (matchesSearch && matchesFilter) {
                card.style.display = "";
            } else {
                card.style.display = "none";
            }

        });

                const noResults =
            document.getElementById("noResults");

        const visibleCards =
            Array.from(internshipCards)
                .filter(card => card.style.display !== "none");

        noResults.style.display =
            visibleCards.length === 0
                ? "block"
                : "none";
    }

    searchInput.addEventListener(
        "input",
        filterInternships
    );

    filterSelect.addEventListener(
        "change",
        filterInternships
    );

});