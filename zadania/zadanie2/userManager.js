function addUser (users, user) {
    users.push(user);
}
function removeUser (users, id) {
    delete users[id];
}
function findUser (users, id) {
    let user = users[id];
    console.log(`ID: ${user.id} Name: ${user.name}`);
}
export {addUser, removeUser, findUser};