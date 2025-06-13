 // داخل الفورم عند الإضافة:
    if (addForm) {
      addForm.addEventListener('submit', function (e) {
        e.preventDefault();
        // جمع البيانات في كائن جديد
        const newBusiness = {
          name: this.name.value.trim(),
          category: this.category.value,
          description: this.description.value.trim(),
          location: this.location.value,
          rating: parseFloat(this.rating.value),
          image: this.image.value.trim(),
          reviews: []
        };
        businessData.push(newBusiness);
        // حدّث localStorage بمصفوفة الكائنات
        localStorage.setItem('businesses', JSON.stringify(businessData));
        displayBusinesses(businessData);
        this.reset();
      });
    }


    // Initial load
    renderBusinesses(businessData);

    // Load from localStorage
    const savedBusinesses = JSON.parse(localStorage.getItem('businessList') || '[]');
    savedBusinesses.forEach(bName => {
      const existing = businessData.find(b => b.name === bName);
      if (!existing) {
        businessData.push({ name: bName, category: "unknown", description: "Added by user", location: "", rating: 0, image: "images/retail.jpeg" });
      }
    });
    renderBusinesses(businessData);

   