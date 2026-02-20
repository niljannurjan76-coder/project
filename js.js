let count = 0;

const minusBtn = document.getElementById("minus");
const plusBtn = document.getElementById("plus");
const countEl = document.getElementById("count");

plusBtn.addEventListener("click", () => {
  count++;
  countEl.textContent = count;
});

minusBtn.addEventListener("click", () => {
  if (count > 0) {
    count--;
    countEl.textContent = count;
  }
});
