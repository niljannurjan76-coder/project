// const btn1 = document.getElementById("btn1");
// const btn2 = document.getElementById("btn2");

// btn1.addEventListener("click", function() {
//     btn1.textContent = "Clicked 1";
// });

// btn2.addEventListener("click", function() {
//     btn2.textContent = "Clicked 2";
// });




// const cards = document.getElementById("cards");

// cards.addEventListener("click", function(event) {
// if (event.target.classList.contains("card")) {
//     event.target.style.background = "rgb(255, 35, 141)"
// }
// });





// const list = document.getElementById("list");

// list.addEventListener("click", function(event) {
//     if (event.target.tagName === "BUTTON") {
//         event.target.parentElement.remove();
//     }
// })






// const colors = document.getElementById("colors");

// colors.addEventListener("click", function (event) {
// if (event.target.tagName !== "BUTTON") return;
// const color = event.target.dataset.color;
// document.body.style.background = color;
// });


// const table = document.getElementById("table")

// table.addEventListener("click", function(event) {
//     if(event.target.tagName === "TD") {
//         event.target.parentElement.style.background = "rgb(255, 35, 141)"
//     }
// });






// const form = document.getElementById("todoForm");
// const input = document.getElementById("taskInput");
// const list1 = document.getElementById("list");

// form.addEventListener("submit", function(event) {

//     event.preventDefault();

//     if (input.value === "") return;

//     const li = document.createElement("li");

//     li.textContent = input.value;

//     const btn = document.createElement("button");
//     btn.textContent = "Delete";
//     btn.classList.add("delete");

//     li.appendChild(btn);

//     list.appendChild(li);

//     input.value = "";
// });

// list.addEventListener("click", function(event) {
//     if (event.target.classList.contains("delete")) {
//         event.target.parentElement.remove();
//     }
// });






// const openBtn = document.getElementById("openBtn");
// const closeBtn = document.getElementById("closeBtn");
// const modal = document.getElementById("modal");

// openBtn.addEventListener("click" , function(){
//     modal.classList.add("show");
// })

// closeBtn.addEventListener("click" , function() {
//     modal.classList.remove("show")
// });



// const openBtn = document.getElementById("openBtn");
// const modal = document.getElementById("modal");
// const closeBtn = document.getElementById("close");

// function openModal() {
//     modal.classList.add("show");
//     document.body.classList.add("no-scroll");
// }

// function closeModal() {
//     modal.classList.remove("show");
//     document.body.classList.remove("no-scroll");
// }

// openBtn.addEventListener("click", openModal);
// closeBtn.addEventListener("click" , closeModal);

// modal.addEventListener("click" , function(event) {
//     if(event.target === modal) {
//         closeModal();
//     }
// });

// document.addEventListener("keydown" , function(event) {
//     if(event.key === "Escape"){
//         closeModal();
//     }
// });



// const menu = document.getElementById("menu");
// const pages = document.querySelectorAll(".page");

// menu.addEventListener("click", function(event) {

//   if (event.target.tagName === "LI") {
    
//     // Барлық мәзір элементтерінен "active" класын алып тастау
//     document.querySelectorAll("#menu li").forEach(function(item) {
//       item.classList.remove("active");
//     });

//     // Басылған элементке "active" класын қосу
//     event.target.classList.add("active");

//     const pageName = event.target.dataset.page;

//     // Барлық беттерден "active-page" класын алып тастау және керегін қосу
//     pages.forEach(function(section) {
//       section.classList.remove("active-page");

//       if (section.dataset.content === pageName) {
//         section.classList.add("active-page");
//       }
//     });

//   }

// });





// 19.02.2026

// const students = [
//     {name: "Ali", course:1},
//     {name: "Dana", course:2},
//     {name: "Aruzhan", course:1}
// ];

// const list = document.querySelector("#list");
// const btn = document.querySelector("#btn");

// function render(arr){
//     list.innerHTML = "";

//     arr.forEach(function(student){
//         list.innerHTML += `
//             <li>
//                 ${student.name} - Course: ${student.course}
//             </li>
//         `;
//     });
// }

// render(students);

// btn.addEventListener("click", function() {
//     const filtered = students.filter(function(student){
//         return student.course === 1;
//     });
//     render(filtered);
// });





// const students = ["Aarav", "Vivaan", "Aditya", "Vihaan", "Arjun",
// "Reyansh", "Muhammad", "Sai", "Arnav", "Ayaan",
// "Krishna", "Ishaan", "Shaurya", "Atharv", "Dhruv",
// "Rohan", "Kabir", "Kian", "Rudra", "Aryan",
// "Anaya", "Diya", "Aadhya", "Myra", "Anika",
// "Ira", "Sara", "Pari", "Riya", "Navya",
// "Meera", "Saanvi", "Ishita", "Kavya", "Avni",
// "Priya", "Simran", "Tanvi", "Radhika", "Sneha",
// "Arushi", "Pooja", "Nisha", "Neha", "Lakshmi",
// "Anjali", "Shruti", "Kiran", "Varun", "Rahul"];
// const list = document.querySelector("#list");
// const search = document.querySelector("#search");

// function render(arr) {
//     list.innerHTML = "";
//     arr.forEach(function(name) {
//         list.innerHTML += `<li>${name}</li>`;
//     });
// }

// render(students);

// search.addEventListener("input", function() {
//     const value = search.value.toLowerCase();
//     const filtered = students.filter(function(name) {
//         return name.toLowerCase().includes(value);
//     });
//     render(filtered);
// });





// const students = ["Ali", "Dana", "Aruzhan", "Nursultan", "Madi", "Aigerim"];
// let current = [...students];

// const list = document.querySelector("#list");
// const azBtn = document.querySelector("#az");
// const zaBtn = document.querySelector("#za");
// const resetBtn = document.querySelector("#reset");

// function render(arr) {
//     list.innerHTML = "";
//     arr.forEach(name => {
//         list.innerHTML += `<li>${name}</li>`;
//     });
// }

// render(current);

// azBtn.addEventListener("click", function() {
//     current = [...students].sort();
//     render(current);
// });

// zaBtn.addEventListener("click", function() {
//     current = [...students].sort().reverse();
//     render(current);
// });

// resetBtn.addEventListener("click", function() {
//     current = [...students];
//     render(current);
// });
