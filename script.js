document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for internal navigation links
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        const href = anchor.getAttribute("href");

        // Only apply smooth scrolling for internal links (anchors)
        if (href.startsWith("#")) {
            anchor.addEventListener("click", function(e) {
                e.preventDefault();

                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 50, // Adjusts for navbar height
                        behavior: "smooth"
                    });
                }
            });
        }
    });

    // Highlight active menu item
    const currentPage = window.location.pathname.split("/").pop();
    document.querySelectorAll("nav ul li a").forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });

    // Read More button functionality (check if elements exist)
    const readMoreBtn = document.getElementById("read-more-btn");
    const moreText = document.getElementById("more-text");

    if (readMoreBtn && moreText) {
        readMoreBtn.addEventListener("click", function() {
            if (moreText.style.display === "none" || moreText.style.display === "") {
                moreText.style.display = "inline";
                readMoreBtn.textContent = "Read Less";
            } else {
                moreText.style.display = "none";
                readMoreBtn.textContent = "Read More";
            }
        });
    }
});
