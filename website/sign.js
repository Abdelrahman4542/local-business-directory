   document.getElementById("signup-form").addEventListener("submit", function (e) {
      e.preventDefault();

      const fullName = document.getElementById("fullname").value.trim();
      const email = document.getElementById("email").value.trim();
      const username = document.getElementById("username").value.trim();
      const password = document.getElementById("password").value;
      const confirmPassword = document.getElementById("confirm-password").value;
      const userType = document.getElementById("userType").value;
      const agreedToTerms = document.getElementById("terms").checked;

      if (!fullName || !email || !username || !password || !confirmPassword || !userType) {
        alert("Please fill in all fields.");
        return;
      }

      if (!agreedToTerms) {
        alert("You must agree to the Terms & Conditions.");
        return;
      }

      if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
      }

      const users = JSON.parse(localStorage.getItem("users")) || [];

      const userExists = users.some(user => user.email === email || user.username === username);
      if (userExists) {
        alert("Email or username is already registered.");
        return;
      }

      users.push({
        fullName,
        email,
        username,
        password,
        type: userType,
        businesses: []
      });

      localStorage.setItem("users", JSON.stringify(users));
      alert("The account has been created successfully!");
      window.location.href = "login.html";
    });