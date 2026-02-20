const nameInput = document.getElementById("name");
const btn = document.getElementById("btn");
const result = document.getElementById("result");

btn.addEventListener("click", () => {
    result.textContent = nameInput.value;
});



const username = document.getElementById("username");
const greetBtn = document.getElementById("greetBtn");
const message = document.getElementById("message");

greetBtn.addEventListener("click", () => {
    message.textContent = "Hello " + username.value + "!";
});



const input = document.getElementById("text");
const buton = document.getElementById("button");
const output = document.getElementById("output");

button.addEventListener("click",()=>{
    output.textContent = input.value;
    input.value = "";
});


const liveInput = document.getElementById("liveInput");
const preview = document.getElementById("preview");
liveInput.addEventListener("input" ,() => {
    preview.textContent = liveInput.value;
});


const text1 = document.getElementById("text1");
const count = document.getElementById("count");

text1.addEventListener("input", () => {
    count.textContent = text1.value.length;
});




const input1 = document.getElementById("input1");
const button2 = document.getElementById("button2");

input1.addEventListener("input", () => {
    if(input1.value === "") {
        button2.disabled = true;
    }
    else{
        button2.disabled = false;
    }
});



const numInput = document.getElementById("numInput");
const btn3 = document.getElementById("btn3");
const result1 = document.getElementById("result1");

btn3.addEventListener("click" , () =>{
    result1.textContent = Number(numInput.value) ** 0.5;
});



const form = document.getElementById("myForm");
const name1Input = document.getElementById("name1");
const result2 = document.getElementById("result2");

form.addEventListener("submit" , (event) => {
    event.preventDefault();
    result2.textContent = name1Input.value;
});



const form2 = document.getElementById("form2");
const name2 = document.getElementById("name2");
const message2 = document.getElementById("message2");
form2.addEventListener("submit", (e)=> {
e.preventDefault();
if (name2.value===""){
    message2.textContent = "Name is required";
} else{
    message2.textContent = "Form submitted";
}
});


const form1 = document.getElementById("form1");
const name2Input = document.getElementById("name2");
const ageInput = document.getElementById("age");
const result3 = document.getElementById("result3");

form1.addEventListener("submit",(e)=>{
    e.preventDefault();
    result3.textContent="Name:" +name2Input.value + ",Age:"+ageInput.value;
});



const agree = document.getElementById("agree");
const result5 = document.getElementById("result5");

agree.addEventListener("change",()=>{
    result5.textContent=agree.checked;
});



const male = document.getElementById ("male");
const female = document.getElementById("female") ("female");
const btn5 = document.getElementById ("btn5");
const result6 = document.getElementById("result6");

btn5.addEventListener("click",()=>{
    if (male.checked) {
result.textContent = male.value;
} else if (female.checked) {
result.textContent = female.value;
}
});




const agreeCheckbox = document.getElementById("agree");
const resultt = document.getElementById("result");

agreeCheckbox.addEventListener("change", () => {
    if (agreeCheckbox.checked) {
        result.textContent = "Thank you for agreeing";
    } else {
        result.textContent = "";
    }
});






const box = document.querySelector("#box");
const btnn = document.querySelector("#btn");

btn.addEventListener("click" , () => {
    box.classList.add("highlight");
});