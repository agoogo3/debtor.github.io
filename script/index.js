let pop = document.getElementById("pop");
let checkPhysical = document.getElementById("check_phys");
let checkTel = document.getElementById("check_tel");
let mtn_trans = document.getElementsByClassName("m_transfer_p");
let telecel = document.getElementsByClassName("telecel");
let debtors = document.getElementById("debtors");
let debtor_list = document.getElementById("debtor_list");
let popForm = document.getElementById("pop_form");
let addDebtWapper = document.getElementById("add_debt_wrapper");
let addDebtMain = document.getElementById("add_debtor_main");
let viewBalancing = document.getElementById("view_balancing");
let viewBalancingWrapper = document.getElementById("viewBalancingWrapper");
let popDebtor = document.getElementById("popDebtor");
let debtAdding = document.getElementById("debtAdding");
let debtorsNames = document.querySelectorAll(".debtors_names");
let amountTF = document.getElementById("amountTF");
let amount = document.querySelectorAll(".amount");

//Adding click listener to select debtor and add a debt
for (let debt of debtorsNames) {
  debt.addEventListener("click", () => {
    console.log("hello");
    debtAdding.style.transform = "translateX(-50%) translateY(-50%) scale(1)";
  });
}
//Bringing debtAdding down
function debtAddingdown() {
  debtAdding.style.transform = "translateX(-50%) translateY(-50%) scale(0)";
}

//Updating amount textBox with amount selected
for (let i = 0; i < amount.length; i++) {
  amount[i].addEventListener("click", () => {
        amountTF.value = amount[i].textContent
    // console.log(amount[i].textContent)
  });
}
window.onload = () => {
  if (!checkPhysical.checked) {
    for (let input of mtn_trans) {
      input.style.display = "none";
    }
  }
  if (!checkTel.checked) {
    for (let tel of telecel) {
      tel.style.display = "none";
    }
  }
};
checkTel.onclick = () => {
  if (checkTel.checked) {
    for (let tel of telecel) {
      tel.style.display = "inline";
    }
  } else {
    for (let tel of telecel) {
      tel.style.display = "none";
    }
  }
};
checkPhysical.onclick = () => {
  if (checkPhysical.checked) {
    for (let input of mtn_trans) {
      input.style.display = "inline";
    }
    console.log("checked phys");
  } else {
    for (let input of mtn_trans) {
      input.style.display = "none";
    }

    console.log("unchecked phys");
  }
};

//Display and close add debtor wrapper
debtors.addEventListener("click", (e) => {
  e.preventDefault();
  popDebtor.style.transform = "translateX(-50%) translateY(-50%) scale(1)";
  popForm.style.display = "none";
});
function popdown() {
  popDebtor.style.transform = "translateX(-50%) translateY(-50%) scale(0)";
}

function balance() {
  addDebtWapper.style.transform = "translateX(-50%) translateY(-50%) scale(1)";
  addDebtMain.style.transform = "translateX(-50%) translateY(-50%) scale(1)";

  popForm.style.display = "none";
}

function popup() {
  pop.style.transform = "translateX(-50%) translateY(-50%) scale(0)";
}

function closeDebtorList() {
  debtor_list.style.transform = "translateX(-50%) translateY(-50%) scale(0)";
  pop.style.transform = "translateX(-50%) translateY(-50%) scale(0)";
  popForm.style.display = "block";
}

document.getElementById("add_debt").addEventListener("click", () => {
  console.log("hey");
  addDebtMain.style.transform = "translateX(-50%) translateY(-50%) scale(1)";

  addDebtWapper.style.transform = "translateX(-50%) translateY(-50%) scale(1)";
});
function closeAddDebtor() {
  addDebtWapper.style.transform = "translateX(-50%) translateY(-50%) scale(0)";
  addDebtMain.style.transform = "translateX(-50%) translateY(-50%) scale(0)";

  pop.style.transform = "translateX(-50%) translaeY(-50%) scale(0)";
  popForm.style.display = "block";
}

function closeViewBalancing() {
  viewBalancing.style.transform = "translateX(-50%) translateY(-50%) scale(0)";
  // popForm.style.display = "block";
}
// viewBalancingWrapper.addEventListener("click", () => {
//   viewBalancing.style.transform = "translateX(-50%) translateY(-50%) scale(1)";
// });
//    function viewBalancing(){
//    viewBalancing.style.transform =
//     "translateX(-50%) translateY(-50%) scale(1)";
// }
