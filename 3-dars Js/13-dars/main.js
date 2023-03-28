let row = document.querySelector(".row1")
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


        // let btn = document.createElement("button")
        // btn.textContent = "ochirish"
        // btn.setAttribute("onclick",`getDel(${index})`)

        
        card.appendChild(img),
        card.appendChild(text)
        // card.appendChild(btn)
        col.appendChild(card)
        row.appendChild(col)
    })
}

// let box
// function nomi(box1){
//     box = box1.value
// }

// let img
// function Add(val){
//     val.src = window.URL.createObjectURL(val.files[0])
//     img = val.src
//     console.log(img);
// }

// function Qosh(){
//     data.push({
//         imageUrl: Add.src,
//         title: text.value
//     })
//     hamasi()
// }


// function getDel(index){
//     data.splice(index,1)
//     hamasi(data)
// }


function as(val){
    let savat = massiv.filter((a)=>{
        return a.name.toLowerCase().includes(val.toLowerCase())
    })
    hamasi(savat)
}








