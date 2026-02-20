const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const englishSelect = document.getElementById("english");
const aboutInput = document.getElementById("about");
const htmlSkill = document.getElementById("htmlSkill");
const cssSkill = document.getElementById("cssSkill");
const jsSkill = document.getElementById("jsSkill");
const agree = document.getElementById("agree");
const btn = document.getElementById("btn");
const showName = document.getElementById("showName");
const showAge = document.getElementById("showAge");
const showEnglish = document.getElementById("showEnglish");
const showSkills = document.getElementById("showSkills");
const showAbout = document.getElementById("showAbout");

nameInput.addEventListener("input", function() {
    showName.textContent = "Name: " + nameInput.value;
});
btn.addEventListener("click", function() {
    showAge.textContent = "Age: " + ageInput.value;
    showEnglish.textContent = "English: " + englishSelect.value;
    showAbout.textContent = "About: " + aboutInput.value;
    let skills = "";
    if (htmlSkill.checked) skills += "HTML ";
    if (cssSkill.checked) skills += "CSS ";
    if (jsSkill.checked) skills += "JavaScript ";

    if (skills === "") {
        showSkills.textContent = "Skills: —";
    } else {
        showSkills.textContent = "Skills: " + skills;
    }
    if (!agree.checked) {
        alert("Please confirm information!");
    }
});
