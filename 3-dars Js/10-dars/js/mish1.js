let row = document.querySelector(".row")
function hamasi(){
    row.innerHTML  = ""
    news.map((item , index)=>{
        let col = document.createElement("div")
        col.classList.add("col-4")

        let card = document.createElement("div")
        card.classList.add("card")

        let img = document.createElement("img")
        img.src = item.photo
        img.alt = item.title

        let text = document.createElement("h2")
        text.innerHTML = item.title

        card.appendChild(img),
        card.appendChild(text),
        col.appendChild(card),
        row.appendChild(col)

    })
}
let dastur
function box(abdujalil){
    dastur = abdujalil.value
}
let img
function ol(shaxzod){
    shaxzod.src = window.URL.createObjectURL(shaxzod.files[0])
    img = shaxzod.src
}
function yangi(){
    news.push({
        photo: img,
        title: sarlavha
    })
    hamasi()
}

