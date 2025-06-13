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
          home: "Home",
          categories: "Categories",
          businesses: "Businesses",
          about: "About Us",
          searchPlaceholder: "Search",
          searchButton: "Search",
          locationSelect: "Select Location",
          businessList: "Business List",
          addBusiness: "Add New Business",
          viewActivities: "View Activities",
          aboutTitles: [
            "We connect you with the best and most trusted local businesses in your area. Whether you’re looking for a restaurant, a plumber, or a tech repair shop — we’ve got you covered.",
            "Our easy-to-use platform helps you find the services you need quickly.  With smart filters,map views, and categorized listings, navigating the business world has never been simpler.",
            "We update and verify business listings regularly to ensure accuracy, trustworthiness, and relevance. You can count on us to provide up-to-date information you can rely on.",
            "Your satisfaction is our top priority. We are committed to creating a seamless user experience so you can browse, explore, and connect with local businesses effortlessly.",
            "We believe in supporting local economies. When you use our directory, you help small businesses grow and thrive in your community.",
            "Our platform is accessible across devices, ensuring a smooth experience whether you're using a desktop, tablet, or smartphone. Convenience is just a tap away."
          ]
        },
        ar: {
          home: "الرئيسية",
          categories: "الفئات",
          businesses: "الأنشطة",
          about: "من نحن",
          searchPlaceholder: "ابحث",
          searchButton: "بحث",
          locationSelect: "اختر الموقع",
          businessList: "قائمة الأنشطة",
          addBusiness: "أضف نشاط جديد",
          viewActivities: "عرض الأنشطة",
          aboutTitles: [
            "نحن نربطك بأفضل وأثقة الشركات المحلية في منطقتك. سواء كنت تبحث عن مطعم، أو سباك، أو محل إصلاح تقني - نحن هنا لمساعدتك.",
            "منصتنا سهلة الاستخدام تساعدك في العثور على الخدمات بسرعة. مع الفلاتر الذكية، وطرق عرض الخريطة، والقوائم المصنفة، لم يكن التنقل في عالم الأعمال أسهل من أي وقت مضى.",
            "نقوم بتحديث والتحقق من دقة بيانات الأنشطة بانتظام. يمكنك الاعتماد علينا لتوفير معلومات دقيقة وموثوقة.",
            "رضاك هو أولويتنا القصوى. نحن ملتزمون بخلق تجربة مستخدم سلسة حتى تتمكن من تصفح واستكشاف والتواصل مع الشركات المحلية بكل سهولة.",
            "ندعم الاقتصاد المحلي من خلال تعزيز الأعمال الصغيرة. عندما تستخدم دليلنا، فإنك تساعد الشركات الصغيرة على النمو والازدهار في مجتمعك.",
            "منصتنا تعمل على جميع الأجهزة بسلاسة. سواء كنت تستخدم جهاز كمبيوتر مكتبي أو جهاز لوحي أو هاتف ذكي، فإن الراحة على بعد نقرة واحدة."
          ]
        }
      };
      const t = translations[lang];
      const nav = document.querySelectorAll(".main-navbar a");
      if (nav.length >= 4) {
        nav[0].textContent = t.home;
        nav[1].textContent = t.categories;
        nav[2].textContent = t.businesses;
        nav[3].textContent = t.about;
      }
      const searchInput = document.querySelector(".search-bar input");
      if (searchInput) searchInput.placeholder = t.searchPlaceholder;
      const searchBtn = document.querySelector(".search-bar button");
      if (searchBtn) searchBtn.textContent = t.searchButton;
      const locSelect = document.getElementById("location");
      if (locSelect && locSelect.options.length > 0) locSelect.options[0].text = t.locationSelect;
      const bListTitle = document.querySelector("#businesses h2");
      if (bListTitle) bListTitle.textContent = t.businessList;
      const addBtn = document.querySelector(".add-business-btn");
      if (addBtn) addBtn.textContent = t.addBusiness;
      const viewAllBtn = document.getElementById("viewAll");
      if (viewAllBtn) viewAllBtn.textContent = t.viewActivities;
      const aboutCards = document.querySelectorAll("#about .about-card p");
      if (aboutCards && aboutCards.length === t.aboutTitles.length) {
        aboutCards.forEach((p, i) => p.textContent = t.aboutTitles[i]);
      }
    }