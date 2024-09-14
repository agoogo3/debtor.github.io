debtors = document.querySelectorAll(".debtor-card");
addDebtBtn = document.getElementById("add-debt-btn");
mode = document.getElementById("mode");
debtorsCard = document.getElementById("debtors_card");
updateCard = document.getElementById("update_card");

debtList = document.querySelectorAll(".debt_list");
buttonClose = document.querySelectorAll(".btn-close");

function trans(element, mode, scaleOne, scaleTwo, index) {
  const transOne = `translateX(-50%) translateY(-50%) scale(${scaleOne})`;
  const transTwo = `translateX(-50%) translateY(-50%) scale(${scaleTwo})`;
  element.style.transform = transOne;
  mode.style.transform = transTwo;

  mode.style.zIndex = index;
}

for (let debtor of debtors) {
  debtor.addEventListener("click", () => {
    location.href = "debtor.html";
  });
}

addDebtBtn.addEventListener("click", () => {
  trans(updateCard, mode, 1, 1, "1");
  updateCard.style.transformOrigin = "top";
});

for (let close of buttonClose) {
  close.addEventListener("click", (e) => {
    const parent = e.target.parentElement;
    const superParent = parent.parentElement;
    trans(superParent, mode, 0, 0, "1");
  });
}

//An onlcik listener on mode to drop the pop off
mode.addEventListener("click", (e) => {
  const target = e.target;
  trans(updateCard, mode, 0, 0, "1");
});
//Opening a sub popup when the list of debtors are clicked
for (let addDebt of debtList) {
  addDebt.classList.remove("active");

  //using an if statement to check the value of the dataset of the debtorsCard
  addDebt.addEventListener("click", (e) => {
    let dataset = debtorsCard.dataset.active;

    trans(updateCard, mode, 1, 1, "2");

    debtList.forEach((element) => element.classList.remove("active"));
    addDebt.classList.add("active");
  });
}

//Switching between active and paid debts
navList = document.querySelectorAll(".nav-list");
 a_wrapper = document.querySelectorAll(".a-wrapper");

navList.forEach((list, index) => {
  list.addEventListener("click", () => {
    navList.forEach((list) => list.classList.remove("active"));
    a_wrapper.forEach((list) => list.classList.add("nav-switch-off"));

    switch (index) {
      case 0:
        list.classList.add("active");
        a_wrapper[0].classList.remove("nav-switch-off");
        break;
      case 1:
        list.classList.add("active");
        a_wrapper[1].classList.remove("nav-switch-off");

        break;
      default:
        break;
    }
  });
});
