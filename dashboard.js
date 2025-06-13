const user = JSON.parse(localStorage.getItem('user'));

if (!user) {
  window.location.href = "login.html";
}

document.getElementById('username').textContent = user.name || user.firstName + " " + user.lastName;
document.getElementById('userType').textContent = user.type === "business" ? "Businessman" : "Regular User";

const content = document.querySelector('#contentArea .card-body');

function saveToGlobalList() {
  localStorage.setItem('businessList', JSON.stringify(user.businesses));
}

if (user.type === "business") {
  user.businesses = user.businesses || [];
  content.innerHTML = `
      <h4>My Businesses</h4>
      ${user.businesses.length === 0 ? "<p>No businesses yet.</p>" : `
      <ul class="list-group">
        ${user.businesses.map((b, i) => `
          <li class="list-group-item d-flex justify-content-between align-items-center">
            ${b}
            <button class="btn btn-sm btn-outline-secondary" onclick="editBusiness(${i})">Edit</button>
          </li>
        `).join('')}
      </ul>`}
      <div class="mt-3 text-center">
        <button class="btn btn-success" onclick="addBusiness()">Add New Business</button>
      </div>
    `;
} else {
  content.innerHTML = `
      <h4>Saved Activities</h4>
      <ul class="list-group">
        <li class="list-group-item">Saved Activity 1</li>
        <li class="list-group-item">Saved Activity 2</li>
      </ul>
    `;
}

function addBusiness() {
  const newBusiness = prompt("Enter your new business name:");
  if (newBusiness) {
    user.businesses.push(newBusiness);
    localStorage.setItem('user', JSON.stringify(user));
    saveToGlobalList();
    location.reload();
  }
}

function editBusiness(index) {
  const newName = prompt("Edit business name:", user.businesses[index]);
  if (newName) {
    user.businesses[index] = newName;
    localStorage.setItem('user', JSON.stringify(user));
    saveToGlobalList();
    location.reload();
  }
}

function goHome() {
  window.location.href = "index.html";
}

function logout() {
  localStorage.removeItem('user');
  window.location.href = "login.html";
}