 // Scroll to top button
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");
    window.onscroll = function () {
      if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollToTopBtn.style.display = "block";
      } else {
        scrollToTopBtn.style.display = "none";
      }
    };
    scrollToTopBtn.addEventListener("click", function (e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });

    // Navbar menu toggle
    document.addEventListener("DOMContentLoaded", function () {
      const menuBtn = document.querySelector(".MENU");
      const navbar = document.querySelector(".main-navbar");

      menuBtn.addEventListener("click", function () {
        navbar.classList.toggle("active");
      });

      document.addEventListener("click", function (e) {
        if (!navbar.contains(e.target) && !menuBtn.contains(e.target)) {
          navbar.classList.remove("active");
        }
      });
    });