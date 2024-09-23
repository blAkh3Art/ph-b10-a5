function activeButton(id) {
    const color = document.getElementById(id).classList.add("bg-primary-color");
    const outline = document.getElementById(id).classList.remove("btn-outline");
    return color, outline;
  }
  function disableButton(id) {
    const outline = document.getElementById(id).classList.add("btn-outline");
    const color = document
      .getElementById(id)
      .classList.remove("bg-primary-color");
    return color, outline;
  }
  function getInputValueById(id) {
    return parseFloat(document.getElementById(id).value);
  }
  function getTextValueById(id) {
    return parseFloat(document.getElementById(id).innerText);
  }