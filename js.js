const themeBtn = document.getElementById('themeToggle');
themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  const hero = document.getElementById('hero');
  const heroH1 = document.getElementById('heroH1');
  const heroP = document.getElementById('heroP');
  const heroBtn = document.getElementById('heroBtn');
  const find = document.getElementById('find');

  if(document.body.classList.contains('dark-mode')){
    hero.style.background = '#ffffff';
    heroH1.style.color = '#2d2b3f';
    heroP.style.color = '#2d2b3f';
    heroBtn.style.color = '#2d2b3f';
    heroBtn.style.borderColor = '#2d2b3f';
    themeBtn.style.color = '#ffffff';
    themeBtn.style.borderColor = '#ffffff';

    find.style.background = '#ffffff';
    find.style.color = '#2d2b3f';
  } else {
    hero.style.background = '#2d2b3f';
    heroH1.style.color = '#ffffff';
    heroP.style.color = '#ffffff';
    heroBtn.style.color = '#ffffff';
    heroBtn.style.borderColor = '#ffffff';

    find.style.background = '#ffffff';
    find.style.color = '#ffffff';
  }
});

const modal = document.getElementById('modal');
const overlay = document.querySelector('.overlay');
const modalTitle = document.getElementById('modalTitle');
const modalText = document.getElementById('modalText');
const closeModal = document.getElementById('closeModal');

function showModal(title,text){
  modalTitle.textContent = title;
  modalText.textContent = text;
  modal.style.display = 'block';
  overlay.style.display = 'block';
}

function closeModalFunc(){
  modal.style.display = 'none';
  overlay.style.display = 'none';
}

closeModal.addEventListener('click', closeModalFunc);
overlay.addEventListener('click', closeModalFunc);

document.querySelectorAll('.feature').forEach(f => {
  f.addEventListener('click', ()=>{
    showModal(f.dataset.title,f.dataset.text);
  });
});

document.getElementById('themeToggle').addEventListener('click', ()=>{
  showModal('Theme changed');
});
document.getElementById('btnHow').addEventListener('click',(e)=>{
  e.preventDefault();
  showModal('At INSURE, we combine innovative technology with human expertise to deliver fast, transparent, and affordable insurance solutions. Our team is dedicated to understanding your needs and providing plans that truly protect what matters most.');
});
document.getElementById('btnView').addEventListener('click',(e)=>{
  e.preventDefault();
  showModal('Explore our range of insurance plans tailored to your lifestyle and needs. From basic coverage to comprehensive protection, INSURE makes it easy to find the plan that fits you best.');
});
