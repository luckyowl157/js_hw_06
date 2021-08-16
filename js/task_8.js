import users from "./users.js";

// Массив имен всех пользователей у которых есть друг с 
// указанным именем.
const getUsersWithFriend = (users, friendName) => {
    return users.filter(({friends}) => friends.includes(friendName) );
    // let usersHasFriends = users.filter(({friends}) => {
    //     friends.includes(friendName)
    // });
    // return usersHasFriends;
};
console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]