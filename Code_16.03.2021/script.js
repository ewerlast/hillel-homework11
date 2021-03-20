// const button = document.querySelector("#wrapper button");
//
// button.addEventListener("click", function () {
//     console.log("CLICK");
// });
//
// const container = document.querySelector("#container");
// const wrapper = document.querySelector("#wrapper");
//
// container.addEventListener("click", function () {
//     console.log("Red click");
// });
//
// wrapper.addEventListener("click", function () {
//     console.log("Blue click");
// })

const counters = {};

document.body.addEventListener("click", function (event) {
    if (event.target.tagName !== "BUTTON") {
        return;
    }

    const id = event.target.getAttribute('data-id');
    const currentValue = counters[id] ?? 0;

    counters[id] = currentValue + 1;
});

document.body.addEventListener("keydown", function (event) {
    if (event.key.toLowerCase() === "r") {
        console.log(counters);
    }
});

///

function createUser() {
    return {
        id: faker.random.uuid(),
        email: faker.internet.email(),
        name: faker.internet.userName()
    }
}

const users = [];
for (let i = 0; i < 10; i++) {
    const user = createUser();
    users.push(user);
}

console.table(users);

function createUserRow(user) {
    const container = document.createElement("div");
    container.className = "user-row";
    container.dataset.id = user.id;

    const span = document.createElement("span");
    span.innerText = user.email;

    const button = document.createElement("button");
    button.innerText = "Select";

    container.appendChild(span);
    container.appendChild(button);
    return container;
}

const wrapper = document.createElement("div");
wrapper.className = "users-list";

const userInfoContainer = document.createElement("p");
userInfoContainer.className = "selected-user-info";
userInfoContainer.hidden = true;

// users.map(createUserRow).forEach(function (row) {
//     wrapper.appendChild(row);
// });

// const rows = users.map(createUserRow);
// rows.forEach(function (row) {
//     wrapper.appendChild(row);
// });

const rows = users.map(createUserRow);
for (const row of rows) {
    wrapper.appendChild(row);
}

document.body.appendChild(wrapper);
document.body.appendChild(userInfoContainer);

const SELECTED_USER_ROW_CLASS = "selected-user-row";

wrapper.addEventListener("click", function (event) {
    // rows
    //     .filter(function(row) {
    //         return row.classList.contains(SELECTED_USER_ROW_CLASS);
    //     })
    //     .forEach(function (row) {
    //         row.classList.remove(SELECTED_USER_ROW_CLASS);
    //     });

    // const selectedRow = rows.find(function(row) {
    //     return row.classList.contains(SELECTED_USER_ROW_CLASS);
    // });
    //
    // if (selectedRow !== undefined) {
    //     selectedRow.classList.remove(SELECTED_USER_ROW_CLASS);
    // }

    // event.target.classList.add(SELECTED_USER_ROW_CLASS)

    if (event.target.tagName.toLowerCase() !== "button") {
        return;
    }

    const userRow = event.target.closest(".user-row");

    for (const row of rows) {
        if (row !== userRow) {
            row.classList.remove(SELECTED_USER_ROW_CLASS);
        }
    }

    userRow.classList.add(SELECTED_USER_ROW_CLASS);

    const selectedUserId = userRow.dataset.id;
    const selectedUser = users.find(function (user) {
        return user.id === selectedUserId;
    });

    userInfoContainer.innerText = `Id: ${selectedUser.id}; Email: ${selectedUser.email}; Name: ${selectedUser.name}`;
    userInfoContainer.hidden = false;
});

