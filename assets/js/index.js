// Image Change on Service section

let div = document.querySelectorAll('.service-content');
div.forEach((singleDiv)=>{
    singleDiv.addEventListener('click',(e)=>{
        console.log(singleDiv.childNodes)       
        let imgDiv = document.getElementById('default-img1')
        imgDiv.src = singleDiv.childNodes[3].currentSrc
    })
})
 