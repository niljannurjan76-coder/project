// const buttons = document.querySelectorAll(".btn");
// const result = document.querySelector("#result");
// buttons.forEach((btn) => {
// btn. addEventListener("click", () => {
// result.textContent = btn.textContent;
// btn.style.color= "yellow";
// }) ;
// }) ;


// const texts = document.querySelectorAll(".text");
// texts. forEach((text) => {
// text.addEventListener("click", () => {
// texts.forEach((t) => t.classList.remove("active"));
// text.classList.add("active");
// }) ;
// });


// const tabs = document.querySelectorAll(".tab");
// tabs. forEach((tab) => {
// tab.addEventListener("click", () => {
// tabs.forEach((t) => t.classList.remove("active"));
// tab.classList.add("active");
// }) ;
// });


// let count = 0;
// const minusBtn = document.getElementById("minus");
// const plusBtn = document.getElementById("plus");
// const countEl = document.getElementById("count");
// plusBtn.addEventListener("click", () => {
// count++;
// countEl.textContent = count;
// }) ;
// minusBtn.addEventListener("click", () => {
//     count--;
//     countEl.textContent = count;
// });




// let count = 0;
// const minusBtn = document.getElementById("minus");
// const plusBtn = document.getElementById("plus");
// const resetBtn = document.getElementById("reset");
// const countEl = document.getElementById("count");
// plusBtn.addEventListener("click", () => {
// count++;
// countEl.textContent = count;
// }) ;
// minusBtn.addEventListener("click", () => {
//     count--;
//     countEl.textContent = count;
// });
// resetBtn.addEventListener("click", ()=>{
//     count = 0;
//     countEl.textContent = count;
// })





let count1 = 0;
let count2 = 0;
let count3 = 0;

const countEl1 = document.getElementById("count1");
const countEl2 = document.getElementById("count2");
const countEl3 = document.getElementById("count3");
const totalEl = document.getElementById("total");
const submitBtn = document.getElementById("submit");
const form = document.getElementById("form");

function updateTotal() {
  const total = count1 + count2 + count3;
  totalEl.textContent = total;
  submitBtn.disabled = total === 0;
}

/* Counter 1 */
document.querySelector(".plus1").addEventListener("click", () => {
  count1++;
  countEl1.textContent = count1;
  updateTotal();
});

document.querySelector(".minus1").addEventListener("click", () => {
  if (count1 > 0) {
    count1--;
  }
  countEl1.textContent = count1;
  updateTotal();
});

/* Counter 2 */
document.querySelector(".plus2").addEventListener("click", () => {
  count2++;
  countEl2.textContent = count2;
  updateTotal();
});

document.querySelector(".minus2").addEventListener("click", () => {
  if (count2 > 0) {
    count2--;
  }
  countEl2.textContent = count2;
  updateTotal();
});

/* Counter 3 */
document.querySelector(".plus3").addEventListener("click", () => {
  count3++;
  countEl3.textContent = count3;
  updateTotal();
});

document.querySelector(".minus3").addEventListener("click", () => {
  if (count3 > 0) {
    count3--;
  }
  countEl3.textContent = count3;
  updateTotal();
});

/* Submit */
form.addEventListener("submit", (event) => {
  event.preventDefault();
  alert("Form submitted!");
});