const darktheme = document.getElementById('darktheme');

darktheme.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    if(document.body.className === 'dark'){
        darktheme.innerHTML = `<i class="fas fa-sun"></i> Light Mode`;
    }else{
        darktheme.innerHTML = `<i class="fas fa-moon"></i> Dark Mode`;
    }
});