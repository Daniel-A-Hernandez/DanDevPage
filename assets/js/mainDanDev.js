//Manejo de eventos scroll
//scroll events


//function for not scroll on loader
window.onload = function () {

    const loader = document.querySelector('.background_loader')

    setTimeout(()=>{
        loader.style.display = 'none'
        document.body.style.overflow = 'auto'
    }, 3500)
}
//End

//Header Animation

const header = document.querySelector('.head')
window.addEventListener('scroll', ()=>{
    if(window.scrollY > 20){
        header.classList.add('scrolled') 
    }
    else{
        header.classList.remove('scrolled')
    }

})
//END


//Element to desband or show
const maintext = document.querySelector('.mainText')
const sobre_mi = document.querySelector('.sobre-mi')
const develop = document.querySelector('.develop')

const opacity_negative = false
const opacity_positive = true
window.addEventListener('scroll', ()=>{    
    const factor = 0.18
    const scrollTop = window.scrollY
    const TotalHeight = document.body.scrollHeight - window.innerHeight

    const progress = scrollTop / TotalHeight
    
    if(opacity_positive == true){
        
        const opacity_text = 1 - (scrollTop / TotalHeight) / factor
        
        maintext.style.opacity = Math.max(0, Math.min(1, opacity_text))
        sobre_mi.style.opacity = Math.max(0, Math.min(1, opacity_text))
        
        if(opacity_text <= 0.5){
            sobre_mi.style.opacity = 0
            develop.style.opacity = 1
            
        }else{
            sobre_mi.textContent = "Un poco sobre mí"
            sobre_mi.style.opacity = Math.max(0, Math.min(1, opacity_text))
            develop.style.opacity = 0
        }
        
    }
    if (opacity_negative == false){
        
        const opacity_text_negative = (scrollTop / TotalHeight) / factor   
    }
})
//END

//Transitions animation main content
const info_aboutme1 = document.querySelector('.info1')
const mis_intereses_title = document.querySelector('.mis-intereses-title')
const info_aboutme2 = document.querySelector('.info2')

const profile_pic = document.querySelector('.profile-pic')
const title_tecnology_container = document.querySelector('.title-tecnology-container')


//Observer section aboutme
const section_aboutme = document.querySelector(".section.aboutme")

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            profile_pic.classList.add("move-left")
            info_aboutme1.classList.add("info1-visible")     
            info_aboutme2.classList.add("visible")
            mis_intereses_title.classList.add("topVisible")

            
        }else{
            profile_pic.classList.remove("move-left")
            info_aboutme1.classList.remove("info1-visible")

            info_aboutme2.classList.remove("visible")
            
            mis_intereses_title.classList.remove("topVisible")
        }
    })
}, {
    threshold: 0.5 // el % de visibilidad necesario
})
observer.observe(section_aboutme)

//END


//Observer section tecnology
const icons = document.querySelectorAll('.ico')
const section_tecnology = document.querySelector(".section.tecnology")
const observer2 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            
            title_tecnology_container.classList.add("topVisible2")
            
            icons.forEach((icon, i)=>{
                setTimeout(()=>{
                    icon.classList.add('visibleIco')
                },i * 200)
            })

        }else{
            
            title_tecnology_container.classList.remove("topVisible2")
            icons.forEach((icon => icon.classList.remove('visibleIco')))
        }
    })
}, {threshold: 0.2})


observer2.observe(section_tecnology)
