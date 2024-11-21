/* Description: Custom JS file */

/* Navigation */
// Collapse the navbar by adding the top-nav-collapse class
window.onscroll = function () {
    scrollFunction();
    scrollFunctionBTT(); // back to top button
};

window.onload = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.documentElement.scrollTop > 30) {
        document.getElementById("navbar").classList.add("top-nav-collapse");
    } else if (document.documentElement.scrollTop < 30) {
        document.getElementById("navbar").classList.remove("top-nav-collapse");
    }
}

// Navbar on mobile
let elements = document.querySelectorAll(".nav-link:not(.dropdown-toggle)");

elements.forEach((element) => {
    element.addEventListener("click", () => {
        document.querySelector(".offcanvas-collapse").classList.toggle("open");
    });
});

document.querySelector(".navbar-toggler").addEventListener("click", () => {
    document.querySelector(".offcanvas-collapse").classList.toggle("open");
});

/* Dropdown Functionality */
// Hover on desktop
function toggleDropdown(e) {
    const _d = e.target.closest(".dropdown");
    let _m = _d.querySelector(".dropdown-menu");

    setTimeout(() => {
        const shouldOpen = _d.matches(":hover");
        _m.classList.toggle("show", shouldOpen);
        _d.classList.toggle("show", shouldOpen);

        _d.setAttribute("aria-expanded", shouldOpen);
    }, e.type === "mouseleave" ? 200 : 0);
}

// Apply dropdown logic
document.querySelectorAll(".dropdown").forEach((dropdown) => {
    // Hover functionality
    dropdown.addEventListener("mouseleave", toggleDropdown);
    dropdown.addEventListener("mouseover", toggleDropdown);

    // Click functionality
    dropdown.addEventListener("click", (e) => {
        const _d = e.target.closest(".dropdown");
        let _m = _d.querySelector(".dropdown-menu");
        if (_d.classList.contains("show")) {
            _m.classList.remove("show");
            _d.classList.remove("show");
        } else {
            _m.classList.add("show");
            _d.classList.add("show");
        }
    });
});

/* Card Slider - Swiper */
var cardSlider = new Swiper(".card-slider", {
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

/* Filter - Isotope */
const gridCheck = document.querySelector(".grid");

if (gridCheck !== null) {
    // Init Isotope
    var iso = new Isotope(".grid", {
        itemSelector: ".element-item",
        layoutMode: "fitRows",
    });

    // Bind filter button click
    var filtersElem = document.querySelector(".filters-button-group");
    filtersElem.addEventListener("click", function (event) {
        // Only work with buttons
        if (!matchesSelector(event.target, "button")) {
            return;
        }
        var filterValue = event.target.getAttribute("data-filter");
        // Use matching filter function
        iso.arrange({ filter: filterValue });
    });

    // Change is-checked class on buttons
    var buttonGroups = document.querySelectorAll(".button-group");
    for (var i = 0, len = buttonGroups.length; i < len; i++) {
        var buttonGroup = buttonGroups[i];
        radioButtonGroup(buttonGroup);
    }

    function radioButtonGroup(buttonGroup) {
        buttonGroup.addEventListener("click", function (event) {
            // Only work with buttons
            if (!matchesSelector(event.target, "button")) {
                return;
            }
            buttonGroup.querySelector(".is-checked").classList.remove("is-checked");
            event.target.classList.add("is-checked");
        });
    }
}

/* Back To Top Button */
// Get the button
let myButton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
function scrollFunctionBTT() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        myButton.style.display = "block";
    } else {
        myButton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}
