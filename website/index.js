 function toggleMenu() {
      const navbar = document.getElementById("mainNavbar");
      navbar.style.display = (navbar.style.display === "block") ? "none" : "block";
    }

    function changeLanguage(lang) {
      if (lang === 'ar') {
        document.documentElement.setAttribute('lang', 'ar');
        document.documentElement.setAttribute('dir', 'rtl');
      } else {
        document.documentElement.setAttribute('lang', 'en');
        document.documentElement.setAttribute('dir', 'ltr');
      }
    }
    document.getElementById("languageSelect").addEventListener("change", function () {
      changeLanguage(this.value);
    });

    function toggleNavbar() {
      const navbar = document.getElementById("navbar");
      navbar.style.display = (navbar.style.display === "flex" || navbar.style.display === "") ? "none" : "flex";
    }
    document.querySelector(".MENU").addEventListener("click", toggleNavbar);

    // Elements
    const categories = document.querySelectorAll('.cat-link');
    const businessContainer = document.getElementById('business-container');
    const locationSelect = document.getElementById('location');
    const searchButton = document.querySelector('.search-bar button');
    const searchInput = document.querySelector('.search-bar input');
    const addForm = document.getElementById('add-business-form');
