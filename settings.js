const settings = [
  {
    name: "Profile",
    icon: "assets/img/icon_burger.svg",
    link: "/profile.html",
    group: "profile",
  },
  {
    name: "Users",
    icon: "assets/img/icon_burger.svg",
    link: "/users.html",
    group: "user_management",
  },
  {
    name: "Groups",
    icon: "assets/img/icon_burger.svg",
    link: "/groups.html",
    group: "general",
  },
  {
    name: "General",
    icon: "assets/img/icon_burger.svg",
    link: "/",
    group: "general",
  },
  {
    name: "Legal",
    icon: "assets/img/icon_burger.svg",
    link: "/",
    group: "legal",
  },
  {
    name: "Imprint",
    icon: "assets/img/icon_burger.svg",
    link: "/",
    group: "legal",
  },
  {
    name: "Logout",
    icon: "assets/img/icon_burger.svg",
    link: "/",
    group: "logout",
  },
];

function init() {
  document.getElementById("settings-selection").innerHTML = "";
  settings.forEach((setting) => {
    document.getElementById("settings-selection").innerHTML += `
      <a class="setting-link" href="${setting.link}">
        <img class="setting-icon" src="${setting.icon}" alt="${setting.name} icon" />
        <h2 class="setting-name">${setting.name}</h2>
        <img class="chevron-icon" src="assets/img/icon_chevron_right.svg" alt="Arrow right" />
      </a>
  `;
  });
}
