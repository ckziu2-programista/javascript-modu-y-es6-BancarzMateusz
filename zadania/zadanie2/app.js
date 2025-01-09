import { addUser, removeUser, findUser } from "./userManager.js";

let users = [];

addUser(users, { id: 0, name: "Jack" });
addUser(users, { id: 1, name: "John" });
addUser(users, { id: 2, name: "V" });
addUser(users, { id: 0, name: "Valerie" });

removeUser(users, 0);

findUser(users, 3);