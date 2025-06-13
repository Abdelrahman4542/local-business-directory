
    function renderStars(rating) {
      const fullStars = Math.floor(rating);
      const hasHalfStar = rating % 1 >= 0.5;
      let starsHTML = '';
      for (let i = 0; i < fullStars; i++) starsHTML += '<span style="color: gold;">★</span>';
      if (hasHalfStar) starsHTML += '<span style="color: gold;">☆</span>';
      const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
      for (let i = 0; i < emptyStars; i++) starsHTML += '<span style="color: lightgray;">★</span>';
      return starsHTML;
    }

    function renderBusinesses(businesses) {
      displayBusinesses(businesses);
    }