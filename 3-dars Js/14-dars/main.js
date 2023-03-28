let row = document.querySelector(".row12")
hamasi(massiv)
function hamasi(soff){
    row.innerHTML = ""
    soff.map((item,index)=>{
        let col = document.createElement("div")
        col.classList.add("col-4")
        
        let card = document.createElement("div")
        card.classList.add("card")

        let img = document.createElement("iframe")
        img.src = item.img
        img.alt = item.name

        let text = document.createElement("h3")
        text.innerHTML = item.name

        card.appendChild(img),
        card.appendChild(text)
        col.appendChild(card)
        row.appendChild(col)
    })
}


function searchch(val){
    let savat = massiv.filter((a)=>{
        return a.name.toLowerCase().includes(val.toLowerCase())
    })
    hamasi(savat)
}



function box(val){
    let qidiruv = massiv.filter((a)=>{
        return a.categories == val
    })
    hamasi(qidiruv)
    if(val == ""){
        hamasi(massiv)
    }
}