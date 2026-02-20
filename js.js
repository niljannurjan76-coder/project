//TASK 1
const colors = document.getElementById("colors");
const defaultColor = document.body.style.background;

colors.addEventListener("click", function(event) {
    if(event.target.tagName !== "BUTTON") return;

    const color = event.target.dataset.color;

    if(color === "reset") {
        document.body.style.background = defaultColor;
    } else {
        document.body.style.background = color;
    }
});






//TASK 2
const buttons = document.querySelectorAll('nav button');
const contents = document.querySelectorAll('.content');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

const section = button.dataset.section;
contents.forEach(content => {
    if(content.dataset.content === section){
        content.classList.add('active');
    } else {
        content.classList.remove('active');
            }
        });
    });
});






// TASK 3
 const taskInput = document.getElementById('task-input');
    const addTaskBtn = document.getElementById('add-task');
    const taskList = document.getElementById('task-list');

    let taskId = 0; 

    function addTask() {
        const taskText = taskInput.value.trim();
        if (!taskText) return;

        if (taskList.children.length >= 10) {
            alert('Вы можете добавить максимум 10 задач.');
            return;
        }

        taskId++;

        const li = document.createElement('li');
        li.textContent = taskText;
        li.dataset.id = taskId;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'X';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.dataset.id = taskId;

        li.appendChild(deleteBtn);
        taskList.appendChild(li);

        taskInput.value = '';
        taskInput.focus();
    }

    addTaskBtn.addEventListener('click', addTask);

    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') addTask();
    });

    taskList.addEventListener('click', (e) => {
        const id = e.target.dataset.id;

        if (e.target.classList.contains('delete-btn')) {
            const task = taskList.querySelector(`li[data-id='${id}']`);
            if(task) task.remove();
        } else if (e.target.tagName === 'LI') {
            e.target.classList.toggle('completed');
        }
    });








// TASK4
 const stars = document.querySelectorAll('.star');
    const ratingText = document.getElementById('rating-text');

    stars.forEach(star => {
        star.addEventListener('click', () => {
            const rate = parseInt(star.dataset.rate);

            stars.forEach(s => s.classList.remove('active'));

            stars.forEach(s => {
                if (parseInt(s.dataset.rate) <= rate) {
                    s.classList.add('active');
                }
            });

            ratingText.textContent = `Your rating: ${rate}`;
        });

        star.addEventListener('mouseover', () => {
            const rate = parseInt(star.dataset.rate);
            stars.forEach(s => {
                if (parseInt(s.dataset.rate) <= rate) {
                    s.classList.add('hovered');
                } else {
                    s.classList.remove('hovered');
                }
            });
        });

        star.addEventListener('mouseout', () => {
            stars.forEach(s => s.classList.remove('hovered'));
        });
    });





// TASK5
const productList = document.getElementById('product-list');
    const cartList = document.getElementById('cart-list');
    const langBtns = document.querySelectorAll('.language-switcher button');
    const mainTitle = document.getElementById('main-title');

    const texts = {
        kz: {
            title: "Біздің өнімдер",
            Phone: "Телефон",
            Laptop: "Ноутбук",
            Tablet: "Планшет",
            PhoneDesc: "Керемет смартфон.",
            LaptopDesc: "Күшті және сәнді.",
            TabletDesc: "Портативті және жылдам."
        },
        ru: {
            title: "Наши продукты",
            Phone: "Телефон",
            Laptop: "Ноутбук",
            Tablet: "Планшет",
            PhoneDesc: "Классный смартфон.",
            LaptopDesc: "Мощный и стильный.",
            TabletDesc: "Портативный и быстрый."
        },
        en: {
            title: "Our Products",
            Phone: "Phone",
            Laptop: "Laptop",
            Tablet: "Tablet",
            PhoneDesc: "A cool smartphone.",
            LaptopDesc: "Powerful and sleek.",
            TabletDesc: "Portable and fast."
        }
    };

    productList.addEventListener('click', e => {
        if(e.target.tagName === 'BUTTON'){
            const card = e.target.closest('.card');
            const name = card.dataset.name;
            const li = document.createElement('li');
            li.textContent = name;
            cartList.appendChild(li);
        }
    });

   
    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.dataset.lang;
            mainTitle.textContent = texts[lang].title;
            document.querySelectorAll('.card').forEach(card => {
                const name = card.dataset.name;
                card.querySelector('.product-title').textContent = texts[lang][name];
                card.querySelector('.product-desc').textContent = texts[lang][name+'Desc'];
            });
        });
    });



