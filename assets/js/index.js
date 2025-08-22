"use strict";

const user = {
  firstName: "Test1",
  lastName: "Testovich1",
  age: 28,
  photoSrc:
    "https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg",
};

// 1 + Створити елемент
// 3 - Задати значення атребутами
// 4 - Додати класи
// 5 - Додати контент
// 6 - Додати обробник на подію
// 2 + Вбудувати на потрібне місце

const userCardEl = document.createElement("article");
userCardEl.classList.add("userCard");
document.body.append(userCardEl);

const userImg = document.createElement("img");
userImg.src = user.photoSrc;
userImg.alt = `${user.firstName} ${user.lastName}`;
userImg.classList.add("userImg");
userCardEl.append(userImg);

const userInfoEl = document.createElement("div");
userInfoEl.classList.add("userInfo");
userCardEl.append(userInfoEl);

const userNameEl = document.createElement("p");
userNameEl.classList.add("userName");
userNameEl.textContent = `${user.firstName} ${user.lastName}`;
userInfoEl.append(userNameEl);

const userAgeEl = document.createElement("span");
userAgeEl.classList.add("userAge");
userAgeEl.textContent = user.age;
userInfoEl.append(userAgeEl);

const trashItem = document.createElement("i");
trashItem.classList.add("fa-solid");
trashItem.classList.add("fa-trash");
trashItem.classList.add("trashItem");

function deleteUser(e) {
  // userCardEl.remove();
  // e.target.parentElement.remove();
  e.target.closest(".userCard").remove();
}
trashItem.onclick = deleteUser;
userCardEl.append(trashItem);
