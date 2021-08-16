// Задание 3
import users from "./users.js";
// Получить массив имен пользователей по полу (поле gender).
const findMale = 'male';
const getUsersWithGender = (users, gender) => {
    return users.filter(({gender}) => gender === findMale);
};
console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]