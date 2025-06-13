 // Business data
    let businessData = [
      {
        name: "Suryana",
        category: "restaurant",
        description: "Authentic Mediterranean cuisine with a modern touch.",
        location: "cairo",
        rating: 4.8,
        image: "./photo/jay-wennington-N_Y88TWmGwA-unsplash.jpg",
        reviews: [
          {
            user: "Ahmed",
            comment: "Great pizza and service!",
            rating: 5
          },
          {
            user: "Sara",
            comment: "Nice place, but a bit expensive.",
            rating: 3
          }
        ]
      },
      {
        name: "Al-Andalus",
        category: "restaurant",
        description: "Authentic Mediterranean cuisine with a modern touch.",
        location: "cairo",
        rating: 4.5,
        image: "./photo/dan-gold-E6HjQaB7UEA-unsplash.jpg",
        reviews: [
          { user: "Sarah", rating: 5, comment: "Amazing food and ambiance!" },
          { user: "Khaled", rating: 4, comment: "Delicious but a bit pricey." }
        ]
      },
      {
        name: "The Bean Spot",
        category: "cafe",
        description: "Specialty coffee and workspace.",
        location: "giza",
        rating: 4.6,
        image: "./photo/petr-sevcovic-qE1jxYXiwOA-unsplash.jpg",
        reviews: [
          { user: "Mona", rating: 5, comment: "Perfect for studying!" },
          { user: "Omar", rating: 4, comment: "Great coffee, a bit noisy." }
        ]
      },
      {
        name: "Sweet Sip",
        category: "cafe",
        description: "Juices, cakes, and smiles.",
        location: "alexandria",
        rating: 4.4,
        image: "./photo/kris-atomic-3b2tADGAWnU-unsplash.jpg",
        reviews: [
          { user: "Laila", rating: 5, comment: "So sweet and fresh!" },
          { user: "Nour", rating: 4, comment: "Nice vibe and cakes." }
        ]
      },
      {
        name: "Gadget Gear",
        category: "retail",
        description: "Electronics & accessories store.",
        location: "giza",
        rating: 4.7,
        image: "./photo/clothing-store-photography.jpg",
        reviews: [
          { user: "Tamer", rating: 5, comment: "Found everything I needed!" },
          { user: "Aya", rating: 4, comment: "Helpful staff." }
        ]
      },
      {
        name: "Shoe Stop",
        category: "retail",
        description: "Stylish shoes for all.",
        location: "cairo",
        rating: 4.5,
        image: "./photo/Retail-Design-Photography-21.jpg",
        reviews: [
          { user: "Mahmoud", rating: 4, comment: "Trendy and affordable." },
          { user: "Salma", rating: 5, comment: "I love the styles!" }
        ]
      },
      {
        name: "CarePlus Clinic",
        category: "health",
        description: "Family health services.",
        location: "cairo",
        rating: 4.9,
        image: "./photo/mockup-graphics-i1iqQRLULlg-unsplash.jpg",
        reviews: [
          { user: "Dr. Ahmed", rating: 5, comment: "Professional and clean." },
          { user: "Marwa", rating: 5, comment: "Highly recommended." }
        ]
      },
      {
        name: "Vision Optics",
        category: "health",
        description: "Ophthalmology and eyewear.",
        location: "alexandria",
        rating: 4.6,
        image: "./photo/online-marketing-hIgeoQjS_iE-unsplash.jpg",
        reviews: [
          { user: "Hany", rating: 4, comment: "Wide selection of glasses." },
          { user: "Dina", rating: 5, comment: "Very friendly service." }
        ]
      },
      {
        name: "QuickFix",
        category: "services",
        description: "Home repairs & handyman services.",
        location: "cairo",
        rating: 4.7,
        image: "./photo/tim-van-der-kuip-CPs2X8JYmS8-unsplash.jpg",
        reviews: [
          { user: "Youssef", rating: 5, comment: "Fast and reliable!" },
          { user: "Nadia", rating: 4, comment: "Fixed my sink perfectly." }
        ]
      },
      {
        name: "PetZone",
        category: "services",
        description: "Pet care and grooming.",
        location: "alexandria",
        rating: 4.3,
        image: "./photo/glenn-carstens-peters-npxXWgQ33ZQ-unsplash.jpg",
        reviews: [
          { user: "Ahmed", rating: 4, comment: "My dog loved the place!" },
          { user: "Lina", rating: 5, comment: "Clean and kind staff." }
        ]
      },
      {
        name: "FunLand",
        category: "entertainment",
        description: "Indoor games and activities.",
        location: "cairo",
        rating: 4.5,
        image: "./photo/entertainment.jpg",
        reviews: [
          { user: "Tala", rating: 5, comment: "The kids had a blast!" },
          { user: "Kareem", rating: 4, comment: "Fun but crowded." }
        ]
      },
      {
        name: "Karaoke Spot",
        category: "entertainment",
        description: "Sing your heart out!",
        location: "giza",
        rating: 4.2,
        image: "./photo/behind-the-scenes-view-of-a-film-crew-setting-up-lighting-equipment-on-set-photo.jpg",
        reviews: [
          { user: "Layla", rating: 5, comment: "Unforgettable night!" },
          { user: "Sami", rating: 4, comment: "Loved the music selection." }
        ]
      },
      {
        name: "Muscle Factory",
        category: "fitness",
        description: "Strength training for pros.",
        location: "cairo",
        rating: 4.7,
        image: "./photo/anastase-maragos-FP7cfYPPUKM-unsplash.jpg",
        reviews: [
          { user: "Hassan", rating: 5, comment: "Great equipment!" },
          { user: "Mina", rating: 4, comment: "Spacious and clean." }
        ]
      },
      {
        name: "Fit Life Club",
        category: "fitness",
        description: "A complete fitness center.",
        location: "alexandria",
        rating: 4.8,
        image: "./photo/alexandra-tran-fS3tGOkp0xY-unsplash.jpg",
        reviews: [
          { user: "Farah", rating: 5, comment: "Amazing trainers!" },
          { user: "Ziad", rating: 5, comment: "Well organized gym." }
        ]
      },
      {
        name: "Art House",
        category: "art",
        description: "Art gallery & exhibitions.",
        location: "cairo",
        rating: 4.4,
        image: "./photo/birmingham-museums-trust-RXCMQFUo9Hk-unsplash.jpg",
        reviews: [
          { user: "Rana", rating: 4, comment: "Lovely pieces." },
          { user: "Sherif", rating: 5, comment: "Very inspiring place." }
        ]
      },
      {
        name: "Brush & Sip",
        category: "art",
        description: "Paint while you sip events.",
        location: "giza",
        rating: 4.1,
        image: "./photo/steve-johnson-3Sf_G9m0gcQ-unsplash.jpg",
        reviews: [
          { user: "Nada", rating: 5, comment: "Creative and fun!" },
          { user: "Fady", rating: 4, comment: "Nice experience overall." }
        ]
      }
    ];

