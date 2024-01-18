// cursor.js

document.addEventListener("DOMContentLoaded", function () {
    const cursor = document.createElement("div");
    cursor.classList.add("cursor");
    document.body.appendChild(cursor);

    document.addEventListener("mousemove", function (e) {
        cursor.style.left = e.pageX + "px";
        cursor.style.top = e.pageY + "px";
    });

    const links = document.querySelectorAll("nav a");

    links.forEach(function (link) {
        link.addEventListener("mouseover", function () {
            cursor.classList.add("active");
        });
        link.addEventListener("mouseout", function () {
            cursor.classList.remove("active");
        });
    });
});

// This is for hamburger



document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".menu-icon");
    const nav = document.querySelector("nav");

    menuIcon.addEventListener("click", function () {
        nav.classList.toggle("active");
    });

    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            nav.classList.remove("active");
        });
    });
});

// for scrolled navbar effect


// Add this to your existing JavaScript file (cursor.js or create a new one)


document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById("mobile-menu");
    const navbar = document.querySelector(".navbar");
    const navbarLinks = document.querySelectorAll(".navbar a");

    menuIcon.addEventListener("click", function () {
        navbar.classList.toggle("active");
    });

    navbarLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            navbar.classList.remove("active");
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            targetElement.scrollIntoView({
                behavior: "smooth"
            });
        });
    });
});
