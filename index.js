// const testDOM = document.getElementById("testDOM");
const colorOne = document.getElementById("colorOne");
const colorTwo = document.getElementById("colorTwo");
colorOne.addEventListener("change", event => {
  document.body.style.backgroundColor = colorOne.value;
})
colorTwo.addEventListener("change", event => {
  // testDOM.style.color = colorTwo.value;
  document.body.style.color = colorTwo.value;

})