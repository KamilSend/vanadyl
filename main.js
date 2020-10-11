document.addEventListener('DOMContentLoaded', ()=>{


    //MENU------------------------------------------------------------------------------------------------
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
    //MENU-END-----------------------------------------------------------------------------------------------

    //VIDEO--------------------------------------------------------------------------------------------------
    const video_background = document.querySelector('.video')
    const img1 = document.querySelector('.people__wrapper__cover:nth-child(1)')
    const img2 = document.querySelector('.people__wrapper__cover:nth-child(2)')
    const img3 = document.querySelector('.people__wrapper__cover:nth-child(3)')
    const img4 = document.querySelector('.people__wrapper__cover:nth-child(4)')
    const img5 = document.querySelector('.people__wrapper__cover:nth-child(5)')

    img1.addEventListener('click', ()=>{
        video_background.style.backgroundImage = "url('../img/people/Warstwa9.png')"
        img1.style.opacity = "0";
        img2.style.opacity = "0.5";
        img3.style.opacity = "0.5";
        img4.style.opacity = "0.5";
        img5.style.opacity = "0.5";
    })

    img2.addEventListener('click', ()=>{
        video_background.style.backgroundImage = "url('../img/people/pexelsphoto251829.png')"
        img1.style.opacity = "0.5";
        img2.style.opacity = "0";
        img3.style.opacity = "0.5";
        img4.style.opacity = "0.5";
        img5.style.opacity = "0.5";    })

    img3.addEventListener('click', ()=>{
        video_background.style.backgroundImage = "url('../img/people/pexelsphoto26939kopi.png')"
        img1.style.opacity = "0.5";
        img2.style.opacity = "0.5";
        img3.style.opacity = "0";
        img4.style.opacity = "0.5";
        img5.style.opacity = "0.5";
    })

    img4.addEventListener('click', ()=>{
        video_background.style.backgroundImage = "url('../img/people/233H.png')"
        img1.style.opacity = "0.5";
        img2.style.opacity = "0.5";
        img3.style.opacity = "0.5";
        img4.style.opacity = "0";
        img5.style.opacity = "0.5";
    })

    img5.addEventListener('click', ()=>{
        video_background.style.backgroundImage = "url('../img/people/Warstwa8.png')"
        img1.style.opacity = "0.5";
        img2.style.opacity = "0.5";
        img3.style.opacity = "0.5";
        img4.style.opacity = "0.5";
        img5.style.opacity = "0";
    })
    //VIDEO-END----------------------------------------------------------------------------------------------

    //SEARCH----------------------------------------------------------------------------------------------

    const search = document.querySelector('.navigation__searchbtn')
    const searchWrapper = document.querySelector('.navigation__searchWrapper')

    search.addEventListener('click', ()=>{
        searchWrapper.classList.toggle('active')
    })


    //SEARCH-END------------------------------------------------------------------------------------------

})

