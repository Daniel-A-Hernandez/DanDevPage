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

//Opacity 0 - 1 text

//Element to desband or view
const maintext = document.querySelector('.mainText')

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


    }

    if (opacity_negative == false){
        const opacity_text_negative = (scrollTop / TotalHeight) / factor
    

    }
        
    







    
})