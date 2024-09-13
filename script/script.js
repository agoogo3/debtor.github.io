const quickAccessList = document.querySelectorAll(".quick_access");
const buttonClose = document.querySelectorAll(".btn-close");
const debtList = document.querySelectorAll(".debt_list");

const add_debtor_card = document.getElementById("add_debtor_card");
const debtorsCard = document.getElementById("debtors_card");

const mode = document.getElementById("mode");
const updateCard = document.getElementById("update_card");

//function to switch scale on and off of the parent element after clicked
function trans(element, mode, scaleOne, scaleTwo, index) {
  const transOne = `translateX(-50%) translateY(-50%) scale(${scaleOne})`;
  const transTwo = `translateX(-50%) translateY(-50%) scale(${scaleTwo})`;
  element.style.transform = transOne;
  mode.style.transform = transTwo;

  mode.style.zIndex = index;
}

//Looping over quick access list to get an on click listener
for (let i = 0; i < quickAccessList.length; i++) {
  quickAccessList[i].addEventListener("click", (e) => {
    quickAccessList.forEach((list) => list.classList.remove("active"));
    e.target.classList.add("active");
    //switch statement to select the index of list selected to display the pop up element accordingly
    switch (i) {
      case 0:
        trans(add_debtor_card, mode, 1, 1, "1");
        break;
      case 1:
        trans(debtorsCard, mode, 1, 1, "1");

        break;
      default:
        break;
    }
  });
}

//Opening a sub popup when the list of debtors are clicked
for (let addDebt of debtList) {
  addDebt.classList.remove("active");
  addDebt.addEventListener("click", (e) => {
    trans(updateCard, mode, 1, 1, "2");

    debtList.forEach((element) => element.classList.remove("active"));
    addDebt.classList.add("active");
  });
}

//An event listener for exiting popups
for (let close of buttonClose) {
  close.addEventListener("click", (e) => {
    const parent = e.target.parentElement;
    const superParent = parent.parentElement;
    if (mode.style.zIndex == "2") {
      trans(superParent, mode, 0, 1, "1");
    } else {
      trans(superParent, mode, 0, 0, "1");
    }
  });
}

//An onlcik listener on mode to drop the pop off
mode.addEventListener("click", (e) => {
  const target = e.target;
  if (target.style.zIndex == "2") {
    trans(updateCard, mode, 0, 1, "1");
  } else {
    trans(add_debtor_card, mode, 0, 0, "1");
  }
});
