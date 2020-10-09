document.addEventListener('DOMContentLoaded', ()=>{
    const dropdown__link = document.querySelector('.dropdown__link')
    const dropdown__wrapper = document.querySelector('.dropdown__wrapper')
    const dropdown__wrapper__secondary = document.querySelector('.dropdown__wrapper__secondary')
    const dropdown__wrapper__secondary__thirtiary = document.querySelector('.dropdown__wrapper__secondary__thirtiary')
    const unShowDropdown = document.querySelector('section')
    const toggler = document.querySelector('.hamburger')
    const navigation = document.querySelector('.navigation')

    let toggle = true;

    toggler.addEventListener('click', ()=>{
        navigation.classList.toggle('active')
        toggler.classList.toggle('is-active')
        toggler.classList.toggle('active')
    })

    dropdown__link.addEventListener('click', ()=>{
        if (toggle === true){
            dropdown__wrapper.classList.add('active')
            toggle = !toggle;
        }
        else {
            dropdown__wrapper.classList.remove('active')
            toggle = !toggle;
        }
    })
    dropdown__wrapper__secondary.addEventListener('click', ()=>{
        dropdown__wrapper__secondary__thirtiary.classList.toggle('active')
    })

    unShowDropdown.addEventListener('click', ()=>{
        dropdown__wrapper.classList.remove('active')
        dropdown__wrapper__secondary__thirtiary.classList.remove('active')
        toggle = true;
    })
})

