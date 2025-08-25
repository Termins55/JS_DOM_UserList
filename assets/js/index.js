"use strict";

// const user = {
//   firstName: "Test1",
//   lastName: "Testovich1",
//   age: 28,
//   photoSrc:
//     "https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg",
// };

const users = [
  {
    firstName: "Test1",
    lastName: "Testovich1",
    age: 28,
    photoSrc: "https://sigc.edu/sigc/ad-sigc/datas/images/userimg.jpg",
  },
  {
    firstName: "Test2",
    lastName: "Testovich2",
    age: 31,
    photoSrc:
      "https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    firstName: "Test3",
    lastName: "Testovich3",
    age: 70,
    photoSrc:
      "https://images.pexels.com/photos/573299/pexels-photo-573299.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    firstName: "Test4",
    lastName: "Testovich4",
    age: 20,
    photoSrc:
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    firstName: "Test5",
    lastName: "Testovich5",
    age: 28,
    photoSrc:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

const userCards = users.map((u) => createUserCard(u));
document.body.append(...userCards);

function createUserCard(user) {
  const userCardEl = document.createElement("article");
  userCardEl.classList.add("userCard");

  const userImg = createImg(user);
  const userInfoEl = createUserInfo(user);
  const trashIcon = createTrashIcon();

  userCardEl.append(userImg, userInfoEl, trashIcon);
  return userCardEl;
}

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
