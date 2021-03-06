import users from "./users.js";

// Задание 10
// Получить массив всех умений всех пользователей (поле skills), 
// при этом не должно быть повторяющихся умений и они должны быть отсортированы в алфавитном порядке.
const getSortedUniqueSkills = users => {
  // твой код
  let result = users.reduce((skill, user) => {
    let usersSkill = user.skills;
    usersSkill.forEach((userSkill) => {
        skill.push(userSkill);
    });
    return skill;
  }, []);
  return result.sort()

};
console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]