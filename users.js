const users = [
  {
    id: "0",
    name: "Batuhan",
    rights: "Admin",
    img: "assets/img/dude.jpg",
  },
  {
    id: "1",
    name: "Elijah",
    rights: "User",
    img: "assets/img/dude2.webp",
  },
];

function init() {
  render();
}

function render() {
  document.getElementById("users-overview").innerHTML = "";
  users.forEach((user) => {
    document.getElementById("users-overview").innerHTML += `
          <a class="user-box"> 

            <img class="user-img" src="${user.img}" alt="${user.name} image" />

            <h2 class="user-name">${user.name}</h2>

            <button class="${user.rights === "Admin" ? "demote" : "promote"}-button icon-button" onclick="changeRights(${user.id}, event)">
              ${
                user.rights === "Admin"
                  ? `<svg class="svg-red" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ff0000"><path d="M480-200 240-440l56-56 184 183 184-183 56 56-240 240Zm0-240L240-680l56-56 184 183 184-183 56 56-240 240Z"/></svg>`
                  : `<svg class="svg-green" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#00c500"><path d="m296-224-56-56 240-240 240 240-56 56-184-183-184 183Zm0-240-56-56 240-240 240 240-56 56-184-183-184 183Z"/></svg>`
              }
            </button>

            <button class="delete-button icon-button">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
            </button>

          </a>
    `;
  });
}

function changeRights(id, event) {
  event.stopPropagation();
  const idx = users.findIndex((user) => user.id == id);
  users[idx].rights = users[idx].rights === "Admin" ? "User" : "Admin";
  render();
}
