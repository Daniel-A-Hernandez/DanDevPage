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