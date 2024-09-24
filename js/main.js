const donationButton = document.getElementById("btn-donation");
const historyButton = document.getElementById("btn-history");
const historySection = document.getElementById("history-section");
const cards = document.getElementById("cards");

// Donate Toggle Button
document.getElementById("btn-donation").addEventListener("click", function () {

  historySection.classList.add("hidden");
  cards.classList.remove("hidden");
  activeButton("btn-donation");
  disableButton("btn-history");
});
//  History Toggle Button
document.getElementById("btn-history").addEventListener("click", function () {

  cards.classList.add("hidden");
  historySection.classList.remove("hidden");

  activeButton("btn-history");
  disableButton("btn-donation");
});

// Noakhali card
document
  .getElementById("noakhli-donate-now")
  .addEventListener("click", function () {
    const donateAmount = getInputValueById("input-noakhali");
    const cardAmount = getTextValueById("amount-noakhali");
    const mainBalance = getTextValueById("main-balance");
    if (isNaN(donateAmount) || donateAmount <= 0) {
      alert("Please Type a valid amount ");
      onclickDisable("noakhli-donate-now");
      return;
    }
    if (donateAmount > mainBalance) {
      document.getElementById("noakhli-donate-now").removeAttribute("onclick");
      alert("Failed to Donate ");
      return;
    }

    const totalDonateAmount = cardAmount + donateAmount;
    document.getElementById("amount-noakhali").innerText = totalDonateAmount;
    document.getElementById("input-noakhali").value = "";

    document.getElementById("main-balance").innerText =
      mainBalance - donateAmount;
      my_modal_5.showModal();
      //history add
      historyTitle = document.getElementById("noakhali-title").innerText;
      history(donateAmount, historyTitle);
  });

document
  .getElementById("feni-donate-now")
  .addEventListener("click", function () {
    const donateAmount = getInputValueById("input-feni");
    const cardAmount = getTextValueById("amount-feni");
    const mainBalance = getTextValueById("main-balance");

    if (isNaN(donateAmount) || donateAmount <= 0) {
      alert("Please Type a valid amount ");
      onclickDisable("feni-donate-now");
      return;
    }
    if (donateAmount > mainBalance) {
      onclickDisable("feni-donate-now");
      alert("Failed to Donate ");
      return;
    }

    const totalDonateAmount = cardAmount + donateAmount;
    document.getElementById("amount-feni").innerText = totalDonateAmount;
    document.getElementById("input-feni").value = "";

    document.getElementById("main-balance").innerText =
      mainBalance - donateAmount;
      my_modal_5.showModal();
      //history added
      historyTitle = document.getElementById("title-feni").innerText;
      history(donateAmount, historyTitle);
  });
document
  .getElementById("quota-donate-now")
  .addEventListener("click", function () {
    const donateAmount = getInputValueById("input-quota");
    const cardAmount = getTextValueById("amount-quota");
    const mainBalance = getTextValueById("main-balance");
    if (isNaN(donateAmount) || donateAmount <= 0) {
      alert("Please Type a valid amount ");
      onclickDisable("quota-donate-now");
      return;
    }
    if (donateAmount > mainBalance) {
      onclickDisable("quota-donate-now");
      alert("Failed to Donate ");
      return;
    }

    const totalDonateAmount = cardAmount + donateAmount;
    document.getElementById("amount-quota").innerText = totalDonateAmount;
    document.getElementById("input-quota").value = "";

    document.getElementById("main-balance").innerText =
      mainBalance - donateAmount;
      my_modal_5.showModal();
      //history add
      historyTitle = document.getElementById("title-quota").innerText;
      history(donateAmount, historyTitle);
  });