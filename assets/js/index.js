"use strict";

const user = {
  firstName: "Test1",
  lastName: "Testovich1",
  age: 28,
  photoSrc:
    "https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg",
};

const userCardEl = document.createElement("article");
userCardEl.classList.add("userCard");
document.body.append(userCardEl);

const userImg = createImg(user);
const userInfoEl = createUserInfo(user);
const trashIcon = createTrashIcon();

userCardEl.append(userImg, userInfoEl, trashIcon);

// userCardEl.append(createImg(user), createUserInfo(user), createTrashIcon());

function createImg({ photoSrc, firstName, lastName }) {
  const userImg = document.createElement("img");
  userImg.src = photoSrc;
  userImg.alt = `${firstName} ${lastName}`;
  userImg.classList.add("userImg");
  return userImg;
}

function createUserInfo({ firstName, lastName, age }) {
  const userInfoEl = document.createElement("div");
  userInfoEl.classList.add("userInfo");

  const userNameEl = document.createElement("p");
  userNameEl.classList.add("userName");
  userNameEl.textContent = `${firstName} ${lastName}`;
  userInfoEl.append(userNameEl);

  const userAgeEl = document.createElement("span");
  userAgeEl.classList.add("userAge");
  userAgeEl.textContent = age;
  userInfoEl.append(userAgeEl);
  return userInfoEl;
}

function createTrashIcon() {
  const trashIcon = document.createElement("i");
  trashIcon.classList.add("fa-solid");
  trashIcon.classList.add("fa-trash");
  trashIcon.classList.add("trashItem");

  function deleteUser(e) {
    // userCardEl.remove();
    // e.target.parentElement.remove();
    e.target.closest(".userCard").remove();
  }
  trashIcon.onclick = deleteUser;
  return trashIcon;
}
