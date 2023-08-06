//Dropdown 


const menu = document.getElementById("menu");
const dropdown = document.getElementById("dropdown");
const closee = document.getElementById("close");




document.addEventListener('keyup', function (e) {
    if (e.key == "Escape") {
        closeDropDown();
        hideClosebtn();
        showMenu();
    }
})

closee.addEventListener('click', event => {
    closeDropDown();
    hideClosebtn();
    showMenu();

})


menu.addEventListener('click', event => {
    dropDown();
    hideMenu();
    closebtn();
})

function dropDown() {
    dropdown.style.display = 'block';

}

function closeDropDown() {
    dropdown.style.display = 'none';
}

function hideMenu() {
    menu.style.display = 'none';
}

function closebtn () {
    closee.style.display = 'block';
}

function hideClosebtn() {
    closee.style.display = 'none';
}

function showMenu() {
    menu.style.display = 'block';
}
