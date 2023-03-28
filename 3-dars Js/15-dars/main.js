// let inp = document.querySelector("input")
// let row = document.querySelector(".row1")

// let massiv = []
// let son = 0

// function ishla(){
//     massiv.push({
//         ism: inp.value
        
//     })
//   console.log(massiv);
//   read(massiv)
// }

// function read(box){
//     row.innerHTML = ''
//     box.map((item,index)=>{
//         let coll = document.createElement("div")
//         coll.classList.add("div")

//         let inp = document.createElement("h2")
//         inp.innerHTML = item.ism
        
//         let inp2 = document.createElement("h2")
//         inp2.innerHTML = item.familya

//         let inp3 = document.createElement("h2")
//         inp3.innerHTML = item.kasbi
 
//         let btn = document.createElement("button")
//         btn.classList.add("col-2")
//         btn.innerHTML = "delet"
//         btn.setAttribute("onclick",`del(${index})`)


//         let btn1 = document.createElement("button")
//         btn1.classList.add("col-2")
//         btn1.innerHTML = "edit"

//         btn1.setAttribute("onclick",`edit(${index})`)


//         coll.appendChild(inp)
//         coll.appendChild(inp2)
//         coll.appendChild(inp3)
//         coll.appendChild(btn1)
//         coll.appendChild(btn)
//         row.appendChild(coll)

//     })
// }

// function del(index){
//     massiv.splice(index,1)
//     read(massiv)
// }


// function edit(a){
//     inp.value = massiv[a].ism
//     son = a
// }

// function editd(){
//     massiv[son].ism = inp.value
//     read(massiv)
// }






//vazifa

let massiv = []
run(massiv)
function run(keldi){
    let row = document.querySelector(".row1")

    keldi.map((item,index)=>{
        let col = document.createElement("div")
        col.classList.add("col-12", "d-flex","justify-content-between")

        let inp = document.createElement("h4")
        inp.innerHTML = item.ism
        
        let inp2 = document.createElement("h4")
        inp2.innerHTML = item.familya

        let inp3 = document.createElement("h4")
        inp3.innerHTML = item.kasbi
    
        col.appendChild(inp),
        col.appendChild(inp2),
        col.appendChild(inp3),
        row.appendChild(col)

    })
}
function ishla(){
        let massiv = []
        let nom = document.querySelector(".nom1")
        let familya = document.querySelector(".familya1")
        let soha = document.querySelector(".hobi")
    
        let objeckt = {
            ism: nom.value,
            familya: familya.value,
            kasbi: soha.value
        }
        
        massiv.push(objeckt)
        run(massiv)
        
        nom.value = ""
        familya.value = ""
        soha.value = ""
}









// let tb = document.querySelector("tbody")
// let massiv = []
// run(massiv)
// function run(keldi){
//     let row = document.querySelector(".row1")

//     keldi.map((item,index)=>{
//         let tr = document.createElement("tr")
//         tr3.classList.add("col-12", "d-flex","justify-content-between")

//         let td1 = document.createElement("td")
//         td1.innerHTML = item.ism

//         let td2 = document.createElement("td")
//         td2.innerHTML = item.familya

//         let td3 = document.createElement("td")
//         td3.innerHTML = item.kasbi
        

//         tr.appendChild(td1),
//         tr.appendChild(td2),
//         tr.appendChild(td3),
//         row.appendChild(tr)

//     })
// }
// function ishla(){
//         let massiv = []
//         let nom = document.querySelector(".nom1")
//         let familya = document.querySelector(".familya1")
//         let soha = document.querySelector(".hobi")
    
//         let objeckt = {
//             ism: nom.value,
//             familya: familya.value,
//             kasbi: soha.value
//         }
        
//         massiv.push(objeckt)
//         run(massiv)
        
//         nom.value = ""
//         familya.value = ""
//         soha.value = ""
// }


