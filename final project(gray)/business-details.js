 // Get business name from query string
    const params = new URLSearchParams(window.location.search);
    const businessName = params.get('name');

    // Get businesses from localStorage
    const businesses = JSON.parse(localStorage.getItem('businesses')) || [];

    // Find selected business
    const business = businesses.find(b => b.name.toLowerCase() === (businessName || '').toLowerCase());

    // If business not found
    if (!business) {
      document.body.innerHTML = "<h2 style='text-align:center'>Business Not Found</h2>";
    } else {
      // Basic info
      document.getElementById("biz-name").textContent = business.name;
      document.getElementById("biz-category").textContent = business.category;
      document.getElementById("biz-location").textContent = business.location || "N/A";
      document.getElementById("biz-description").textContent = business.description || "N/A";

      // Contact info
      document.getElementById("biz-address").textContent = business.address || "N/A";
      document.getElementById("biz-phone").textContent = business.phone || "N/A";
      document.getElementById("biz-email").textContent = business.email || "N/A";

      const websiteLink = document.getElementById("biz-website");
      websiteLink.href = business.website || "#";
      websiteLink.textContent = business.website || "N/A";

      // Star Rating
      const rating = Math.round(business.rating || 0);
      document.getElementById("biz-rating-stars").innerHTML =
        "★".repeat(rating) + "☆".repeat(5 - rating);

      // Map Embed
      const lat = business.latitude || 30.0444;
      const lng = business.longitude || 31.2357;
      document.getElementById("biz-map").src =
        `https://www.google.com/maps?q=${lat},${lng}&hl=es;z=14&output=embed`;

      // Image fallback
      const imageElement = document.getElementById("business-image");
      if (business.image && business.image.trim() !== "") {
        imageElement.src = business.image;
      } else {
        imageElement.src = "photo/default.jpg";
      }
      imageElement.onerror = function () {
        this.src = "photo/default.jpg";
      };
    }
    // Display Reviews (limit to 2)
    const reviewsContainer = document.getElementById("biz-reviews");
    const reviews = (business.reviews || []).slice(0, 2); // only first 2

    if (reviews.length === 0) {
      reviewsContainer.innerHTML = "<p>No reviews available.</p>";
    } else {
      reviewsContainer.innerHTML = reviews.map(r => `
    <div class="review">
      <p><strong>${r.user}</strong>: ${"★".repeat(r.rating)}${"☆".repeat(5 - r.rating)}</p>
      <p>${r.comment}</p>
    </div>
  `).join("");
    }


    // Back button function
    function goBack() {
      window.history.back();
    }