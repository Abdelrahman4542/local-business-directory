 window.addEventListener("DOMContentLoaded", function () {
      const identifierInput = document.getElementById("identifier");
      const passwordInput = document.getElementById("password");
      if (identifierInput) identifierInput.value = "";
      if (passwordInput) passwordInput.value = "";
    });

    const passwordInput = document.getElementById("password");
    const togglePassword = document.getElementById("togglePassword");

    togglePassword.addEventListener("click", () => {
      const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
      passwordInput.setAttribute("type", type);
      togglePassword.classList.toggle("bx-show");
      togglePassword.classList.toggle("bx-hide");
    });

    document.getElementById("login-form").addEventListener("submit", function(e) {
      e.preventDefault();
      const idValue = document.getElementById("identifier").value.trim();
      const password = passwordInput.value.trim();
      const errorMessage = document.getElementById("errorMessage");
      errorMessage.style.display = "none";

      const users = JSON.parse(localStorage.getItem("users")) || [];

      const foundUser = users.find(user =>
        (user.email === idValue || user.username === idValue) && user.password === password
      );

      if (foundUser) {
        const userObject = {
          name: foundUser.fullName || `${foundUser.firstName} ${foundUser.lastName}`,
          type: foundUser.type,
          businesses: foundUser.businesses || []
        };
        localStorage.setItem("user", JSON.stringify(userObject));
        window.location.href = "dashboard.html";
      } else {
        errorMessage.style.display = "block";
      }
    });