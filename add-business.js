 document.getElementById('businessForm').addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Clear previous errors
      document.querySelectorAll('.error').forEach(el => el.textContent = '');
      
      // Get form values
      const name = document.getElementById('name').value.trim();
      const category = document.getElementById('category').value;
      const description = document.getElementById('description').value.trim();
      const location = document.getElementById('location').value;
      const rating = parseFloat(document.getElementById('rating').value);
      const image = document.getElementById('image').value.trim();
      
      // Validate form
      let isValid = true;
      
      if (!name) {
        document.getElementById('nameError').textContent = 'Business name is required';
        isValid = false;
      }
      
      if (!category) {
        document.getElementById('categoryError').textContent = 'Category is required';
        isValid = false;
      }
      
      if (!description) {
        document.getElementById('descriptionError').textContent = 'Description is required';
        isValid = false;
      }
      
      if (!location) {
        document.getElementById('locationError').textContent = 'Location is required';
        isValid = false;
      }
      
      if (isNaN(rating)) {
        document.getElementById('ratingError').textContent = 'Valid rating is required';
        isValid = false;
      } else if (rating < 1 || rating > 5) {
        document.getElementById('ratingError').textContent = 'Rating must be between 1 and 5';
        isValid = false;
      }
      
      if (!image) {
        document.getElementById('imageError').textContent = 'Image URL is required';
        isValid = false;
      } else if (!isValidUrl(image)) {
        document.getElementById('imageError').textContent = 'Please enter a valid URL';
        isValid = false;
      }
      
      if (!isValid) return;
      
      // Create business object
      const newBusiness = {
        id: Date.now(), // Unique ID
        name,
        category,
        description,
        location,
        rating,
        image
      };
      
      // Get existing businesses from localStorage
      let businesses = JSON.parse(localStorage.getItem('businessList')) || [];
      
      // Add new business
      businesses.push(newBusiness);
      
      // Save back to localStorage
      localStorage.setItem('businessList', JSON.stringify(businesses));
      
      // Show success message
      alert('Business added successfully!');
      
      // Redirect back to main page
      window.location.href = 'index.html';
    });
    
    function isValidUrl(string) {
      try {
        new URL(string);
        return true;
      } catch (_) {
        return false;
      }
    }
 /* </script>
  <script>*/
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