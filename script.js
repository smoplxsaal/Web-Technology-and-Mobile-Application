/* script.js */

// Wait until DOM is ready
document.addEventListener("DOMContentLoaded", () => {

  // 1. Dark Mode Toggle
  const toggleBtn = document.createElement("button");
  toggleBtn.textContent = "🌙 Dark Mode";
  toggleBtn.className = "dark-toggle";
  document.body.appendChild(toggleBtn);

  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });

  // 2. Search Filter
  const searchBar = document.createElement("input");
  searchBar.type = "text";
  searchBar.placeholder = "Search startups...";
  searchBar.className = "search-bar";
  document.querySelector("header").appendChild(searchBar);

  searchBar.addEventListener("keyup", () => {
    const query = searchBar.value.toLowerCase();
    document.querySelectorAll(".card").forEach(card => {
      const name = card.querySelector("h2").textContent.toLowerCase();
      card.style.display = name.includes(query) ? "block" : "none";
    });
  });

  // 3. Animated Card Reveal
  const cards = document.querySelectorAll(".card");
  cards.forEach((card, index) => {
    card.style.opacity = 0;
    setTimeout(() => {
      card.style.transition = "opacity 1s ease";
      card.style.opacity = 1;
    }, index * 200); // staggered reveal
  });

  // 4. Modal Popup for More Info
  const modal = document.createElement("div");
  modal.className = "modal";
  modal.innerHTML = `
    <div class="modal-content">
      <span class="close">&times;</span>
      <h2 id="modal-title"></h2>
      <p id="modal-desc"></p>
    </div>
  `;
  document.body.appendChild(modal);

  const closeBtn = modal.querySelector(".close");
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  cards.forEach(card => {
    card.addEventListener("click", () => {
      document.getElementById("modal-title").textContent = card.querySelector("h2").textContent;
      document.getElementById("modal-desc").textContent = card.querySelector("p").textContent;
      modal.style.display = "block";
    });
  });

  // 5. Scroll-to-Top Button
  const topBtn = document.createElement("button");
  topBtn.textContent = "⬆ Top";
  topBtn.className = "top-btn";
  document.body.appendChild(topBtn);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      topBtn.style.display = "block";
    } else {
      topBtn.style.display = "none";
    }
  });

  topBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // 6. Dynamic Footer Year
  const footer = document.querySelector("footer p");
  if (footer) {
    const year = new Date().getFullYear();
    footer.textContent = `© ${year} Startup Showcase | Designed with ❤️`;
  }
});
