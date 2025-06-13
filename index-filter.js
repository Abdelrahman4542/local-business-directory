function filterBusinesses() {
      const selectedCategory = document.querySelector('.cat-link.active')?.getAttribute('href')?.substring(1) || 'all';
      const selectedLocation = locationSelect.value.toLowerCase();
      const searchText = searchInput.value.toLowerCase();

      let filtered = businessData;

      if (selectedCategory && selectedCategory !== 'all') {
        filtered = filtered.filter(b => b.category === selectedCategory);
      }
      if (selectedLocation) {
        filtered = filtered.filter(b => b.location === selectedLocation);
      }
      if (searchText) {
        filtered = filtered.filter(b => b.name.toLowerCase().includes(searchText) || b.description.toLowerCase().includes(searchText)
          || b.category.toLowerCase().includes(searchText));

      }

      displayBusinesses(filtered);
    }

    categories.forEach(cat => {
      cat.addEventListener('click', function (e) {
        e.preventDefault();
        categories.forEach(c => c.classList.remove('active'));
        this.classList.add('active');
        filterBusinesses();
      });
    });

    locationSelect.addEventListener('change', filterBusinesses);
    searchButton.addEventListener('click', filterBusinesses);

    document.getElementById("viewAll").addEventListener("click", () => {
      categories.forEach(c => c.classList.remove('active'));
      locationSelect.value = '';
      searchInput.value = '';
      displayBusinesses(businessData);
    });
    const grouped = {};
    businessData.forEach(b => {
      if (!grouped[b.category]) grouped[b.category] = [];
      grouped[b.category].push(b);
    });

    let topBusinesses = [];
    for (const category in grouped) {
      const group = grouped[category];
      const maxRating = Math.max(...group.map(b => b.rating));
      const topInCategory = group.filter(b => b.rating === maxRating);
      topBusinesses.push(...topInCategory);
    }

    renderBusinesses(topBusinesses);
    categories.forEach(c => c.classList.remove('active'));

    document.getElementById("viewAll").addEventListener("click", () => {
      const grouped = {};
      businessData.forEach(b => {
        if (!grouped[b.category]) grouped[b.category] = [];
        grouped[b.category].push(b);
      });

      let topBusinesses = [];
      for (const category in grouped) {
        const group = grouped[category];
        const maxRating = Math.max(...group.map(b => b.rating));
        const topInCategory = group.filter(b => b.rating === maxRating);
        topBusinesses.push(...topInCategory);
      }

      renderBusinesses(topBusinesses);
      categories.forEach(c => c.classList.remove('active'));
      locationSelect.value = '';
      searchInput.value = '';
    });
