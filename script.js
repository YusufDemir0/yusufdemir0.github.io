
document.getElementById("theme-toggle").onclick = () => {
  const theme = document.body.getAttribute("data-theme");
  document.body.setAttribute("data-theme", theme === "dark" ? "light" : "dark");
};

document.getElementById("lang-toggle").onclick = () => {
  document.querySelectorAll("[data-tr]").forEach(el => {
    const temp = el.textContent;
    el.textContent = el.getAttribute("data-tr");
    el.setAttribute("data-tr", temp);
  });
};

async function loadProjects() {
  const res = await fetch("data/projects.json");
  const projects = await res.json();
  const container = document.getElementById("project-list");
  projects.forEach(p => {
    const el = document.createElement("div");
    el.className = "card";
    el.innerHTML = `<h4>${p.name}</h4><p>${p.description}</p><a href="${p.link}" target="_blank">GitHub</a>`;
    container.appendChild(el);
  });
}

async function loadPosts() {
  const res = await fetch("data/posts.json");
  const posts = await res.json();
  const container = document.getElementById("post-list");
  posts.forEach(post => {
    const el = document.createElement("div");
    el.className = "card";
    el.innerHTML = `<h4>${post.title}</h4><p>${post.excerpt}</p><small>${post.date}</small>`;
    container.appendChild(el);
  });
}

loadProjects();
loadPosts();
