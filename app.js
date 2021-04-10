// Test Modes


const navLinks = document.querySelector('.navLinks');
// const navLink = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');




openMenu.addEventListener('click',show);
// openMenu.addEventListener('click',close);

function show(){
    navLinks.style.display = 'flex';
    navLinks.style.top = '10%';
}
function close(){
    navLinks.style.diplay = 'none';
}


//get elements
const navLinks = document.querySelector('.navLinks .title');
const dropdownOptions = document.querySelectorAll('.dropdown .option');

//bind listeners to these elements
dropdownTitle.addEventListener('click', toggleMenuDisplay);
dropdownOptions.forEach(option => option.addEventListener('click',handleOptionSelected));
document.querySelector('.dropdown .title').addEventListener('change',handleTitleChange);