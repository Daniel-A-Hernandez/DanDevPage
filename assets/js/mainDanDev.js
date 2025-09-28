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