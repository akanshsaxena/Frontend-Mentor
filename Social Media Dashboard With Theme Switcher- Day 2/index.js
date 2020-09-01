const checkbox = document.getElementById('switch')

const bigCard = document.querySelectorAll('.big-card')
const smallCard = document.querySelectorAll('.small-cards')
const dullText = document.querySelectorAll('.dullText')
const brightText = document.querySelectorAll('.brightText')

console.log(`${bigCard.length} ${smallCard.length} ${dullText.length} ${brightText.length}`)

checkbox.addEventListener('click', function(){
    if(!checkbox.checked){
        darkModeActivated()
    }
    else{
        lightModeActivated()
    }
})

function darkModeActivated(){
    document.body.style.background = "hsl(230, 17%, 14%)"
    bigCard.forEach(bCard=>bCard.style.background = "hsl(228, 28%, 20%)")
    smallCard.forEach(sCard=>sCard.style.background = "hsl(228, 28%, 20%)")
    dullText.forEach(dText=>{
        dText.classList.remove("dull-black")
        dText.classList.add("dull-white")
    })
    brightText.forEach(bText=>{
        bText.classList.remove("black-color")
        bText.classList.add("white-color")
    })
}

function lightModeActivated(){
    document.body.style.background = "white"
    bigCard.forEach(bCard=>bCard.style.background = "#dbdbdb")
    smallCard.forEach(sCard=>sCard.style.background = "#dbdbdb")
    dullText.forEach(dText=>{
        dText.classList.remove("dull-white")
        dText.classList.add("dull-black")
    })
    brightText.forEach(bText=>{
        bText.classList.remove("white-color")
        bText.classList.add("black-color")
    })
}

darkModeActivated()