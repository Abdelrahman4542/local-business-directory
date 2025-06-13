// Display businesses
    function displayBusinesses(businesses) {
      businessContainer.innerHTML = ''; // ✅ مسح المحتوى القديم قبل العرض

      if (businesses.length === 0) {
        businessContainer.innerHTML = '<p style="text-align:center">No businesses found.</p>';
        return;
      }

      businesses.forEach(business => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
      <img src="${business.image}" alt="${business.name}">
      <div class="card-details">
        <p class="text-title">${business.name}</p>
        <p class="text-body">${business.description}</p>
        <div class="text-body rating-stars">${renderStars(business.rating)}</div>
      </div>
      <a href="business-details.html?name=${encodeURIComponent(business.name)}" class="card-button">
        View Details
      </a>
    `;
        businessContainer.appendChild(card);
      });
    }