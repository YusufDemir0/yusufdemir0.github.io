
const themeToggle = document.getElementById("theme-toggle");
themeToggle.onclick = () => {
  const current = document.documentElement.getAttribute("data-theme");
  const newTheme = current === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", newTheme);
};

const langToggle = document.getElementById("lang-toggle");
langToggle.onclick = () => {
  const lang = langToggle.textContent === "EN" ? "TR" : "EN";
  langToggle.textContent = lang === "EN" ? "TR" : "EN";
  document.querySelectorAll("[data-tr]").forEach(el => {
    const tr = el.getAttribute("data-tr");
    const en = el.textContent;
    el.textContent = tr;
    el.setAttribute("data-tr", en);
  });
};

const username = "YusufDemir0";
const projectGrid = document.getElementById("project-grid");
fetch(`https://api.github.com/users/${username}/repos?sort=updated`)
  .then(res => res.json())
  .then(data => {
    data.slice(0, 6).forEach(repo => {
      const card = document.createElement("div");
      card.className = "project-card";
      card.innerHTML = `
        <h4>${repo.name}</h4>
        <p>${repo.description || "Açıklama yok"}</p>
        <a href="${repo.html_url}" target="_blank">GitHub</a>
      `;
      projectGrid.appendChild(card);
    });
  });

const blogGrid = document.getElementById("blog-grid");
fetch("data/posts.json")
  .then(res => res.json())
  .then(posts => {
    posts.forEach(post => {
      const card = document.createElement("div");
      card.className = "blog-card";
      card.innerHTML = `
        <h4>${post.title}</h4>
        <p>${post.excerpt}</p>
        <small>${post.date}</small>
      `;
      blogGrid.appendChild(card);
    });
  });
