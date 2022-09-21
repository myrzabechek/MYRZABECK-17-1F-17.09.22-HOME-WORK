const tabs = document.querySelectorAll(".tabheader__item");
const tabsParent = document.querySelector(".tabheader__items");
const tabContent = document.querySelectorAll(".tabcontent");

const hideTabContent = () => {
    tabContent.forEach((item) => {
        item.style.display = "none";
    });
    tabs.forEach((item) => {
        item.classList.remove("tabheader__item_active");
    })
};



const showTabContent = (i = 0) => {
    tabContent[i].style.display = "block"
    tabs[i].classList.add("tabheader__item_active")
}

hideTabContent();
showTabContent();


tabsParent.addEventListener("click", (e) => {
    const target = e.target;

    if(target.classList.contains("tabheader__item")){
        tabs.forEach((item, i) => {
            if(target === item){
                hideTabContent();
                showTabContent(i);
            }
        })
    }
})
tabsParent.addEventListener("click", (e) => {
    const target = e.target;

    if(target.classList.contains("tabheader__item")){
        tabs.forEach((item, i) => {
            if(target === item){
                slideIndex = i
                hideTabContent();
                showTabContent(slideIndex);
            }
        })
    }
})




let slideIndex = 0;

const autoSlide = () => {
    slideIndex++
    if(slideIndex>3){
        slideIndex=0
    }
    hideTabContent()
    showTabContent(slideIndex)
}
setInterval(autoSlide, 2000);




const modal = document.querySelector(".modal");
const modalTrigger = document.querySelector(".btn_white");
const closeModalBtn = document.querySelector(".modal__close");


const openModal = () => {
    modal.classList.add("show");
    modal.classList.remove("hide");
    document.body.style.overflow = "hidden";
}

modalTrigger.addEventListener("click", openModal);

const closeModal = () => {
    modal.classList.add("hide");
    modal.classList.remove("show");
    document.body.style.overflow = "";
};

closeModalBtn.addEventListener("click", closeModal);

modal.addEventListener("click", (e)=>{
    if(e.target == modal){
        closeModal();
    }
})



const openScroll = () => {
    const page = document.documentElement;
    if(page.scrollTop+page.clientHeight>=page.scrollHeight){
        openModal()
        window.removeEventListener("scroll", openScroll)
    }
}

window.addEventListener("scroll", openScroll)