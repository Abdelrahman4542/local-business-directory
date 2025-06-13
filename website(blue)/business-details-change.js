 function changeLanguage(lang) {
      document.documentElement.setAttribute('lang', lang);
      document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
      localStorage.setItem("selectedLang", lang);
      applyTranslations(lang);
    }

    document.addEventListener("DOMContentLoaded", () => {
      const savedLang = localStorage.getItem("selectedLang") || "en";
      const langSelect = document.getElementById("languageSelect");
      if (langSelect) {
        langSelect.value = savedLang;
        langSelect.addEventListener("change", function () {
          changeLanguage(this.value);
        });
      }
      changeLanguage(savedLang);
    });

    function applyTranslations(lang) {
      const translations = {
        en: {
          name: "Business Name:",
          category: "Category:",
          description: "Description:",
          location: "Location:",
          rating: "Rating (1-5):",
          image: "Image URL:",
          submit: "Add Business",
          back: "← Back to Business Directory"
        },
        ar: {
          name: "اسم النشاط:",
          category: "الفئة:",
          description: "الوصف:",
          location: "الموقع:",
          rating: "التقييم (من 1 إلى 5):",
          image: "رابط الصورة:",
          submit: "أضف النشاط",
          back: "← العودة إلى الدليل"
        }
      };
      const t = translations[lang];
      if (document.querySelector("label[for='name']")) document.querySelector("label[for='name']").textContent = t.name;
      if (document.querySelector("label[for='category']")) document.querySelector("label[for='category']").textContent = t.category;
      if (document.querySelector("label[for='description']")) document.querySelector("label[for='description']").textContent = t.description;
      if (document.querySelector("label[for='location']")) document.querySelector("label[for='location']").textContent = t.location;
      if (document.querySelector("label[for='rating']")) document.querySelector("label[for='rating']").textContent = t.rating;
      if (document.querySelector("label[for='image']")) document.querySelector("label[for='image']").textContent = t.image;
      if (document.querySelector("button[type='submit']")) document.querySelector("button[type='submit']").textContent = t.submit;
      if (document.querySelector(".back-link")) document.querySelector(".back-link").textContent = t.back;
    }