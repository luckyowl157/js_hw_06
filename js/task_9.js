import users from "./users.js";

// Задание 9
// Массив имен (поле name) людей, отсортированных в зависимости 
// от количества их друзей (поле friends)
const getNamesSortedByFriendsCount = users => {
  let result = users.sort((a, b) => a.friends.length - b.friends.length).reduce((result, user) => {
      result.push(user.name);
      return result;
  },[]);
  return result;
};
console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]