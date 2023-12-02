/*skills tabs*/
const tabs = document.querySelectorAll('[data-target]'),
        tabContent = document.querySelectorAll('[data-content]')

        tabs.forEach(tab=> {
            tab.addEventListener("click", ()=> {
                const target = document.querySelector(tab.dataset.target)

                tabContent.forEach(tabContents =>{
                    tabContents.classList.remove('skills__active')
                })

                target.classList.add('skills__active')
            

                tab.forEach(tab => {
                tab.classList.remove('skills__active')
                })

                tab.classList.add('skills__active')
            })
        })


/*mixitup filter portfolio*/
let mixerProjects = mixitup('.projects__container', {
    selectors: {
        target: '.projects__card'
    },
    animation: {
        duration: 300
    }
});
/*link active work*/
const linkProjects = document.querySelectorAll('.projects__item')

function activeProjects() {
    linkProjects.forEach(l => l.classList.remove('active-projects'))
    this.classList.add('active-projects')
}

linkProjects.forEach(l => l.addEventListener("click", activeProjects))

/*project popup*/
document.addEventListener("click", (e)=>{
    if(e.target.classList.contains("projects__button")){
        toggleProjectsPopup();
        projectItemDetails(e.target.parentElement);
    }
})

function toggleProjectsPopup(){
    document.querySelector(".projects__popup").classList.toggle("open");
}

document.querySelector(".projects__popup-close").addEventListener("click", toggleProjectsPopup)

function projectItemDetails(projectsItem){
    document.querySelector(".pp__thumbnail img").src = projectsItem.querySelector(".projects__img").src;
    document.querySelector(".projects__popup-subtitle span").innerHTML = projectsItem.querySelector(".projects__title").innerHTML;

    document.querySelector(".pp__thumbnail img").src = projectsItem.querySelector(".projects__img").src;
    document.querySelector(".projects__popup-body span").innerHTML = projectsItem.querySelector(".projects__item-details").innerHTML;
}

let ProjectsPopupContainer = document.querySelector('.pp__thumbnail');
let

/*input animation*/
const inputs = document.querySelectorAll(".input");

function focusFunc(){
    let parent = this.parentNode;
    parent.classList.add("focus");
}

function blurFunc(){
    let parent = this.parentNode;
    if(this.value==""){
        parent.classList.remove("focus");
    }
}

inputs.forEach((input) =>{
    input.addEventListener("focus",focusFunc);
    input.addEventListener("blur",blurFunc);
})
