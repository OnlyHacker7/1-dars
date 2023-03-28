let tb = document.querySelector("tbody")
run(users)
function run(keldi){
    tb.innerHTML = ""
    keldi.map((item,index)=>{
        let tr = document.createElement("tr")

        let td1 = document.createElement("td")
        td1.innerHTML = item.name

        let td2 = document.createElement("td")
        td2.innerHTML = item.citi

        let td3 = document.createElement("td")
        td3.innerHTML = item.staus
        if(item.staus == true){
            td3.innerHTML = "Public"
            td3.classList.add("text-danger")
        }else{
            td3.innerHTML = "Private"
            td3.classList.add("text-success")
        }


        let td4 = document.createElement("td")
        td4.innerHTML = item.id

        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3)
        tr.appendChild(td4)
        tb.appendChild(tr)
        
    })
}

function searchch(val){
    let savat = users.filter((a)=>{
        return a.name.toLowerCase().includes(val.toLowerCase())
    })
    run(savat)
}

function box(val){
    let qidiruv = users.filter((a)=>{
        return a.citi == val
    })
    run(qidiruv)
    if(val == ""){
        run(users)
    }
}

function ishla(){
    let ism = document.querySelector(".gues")
    let shahar = document.querySelector(".siti1")
    let off = document.querySelector(".on")
    let son = document.querySelector(".id1")

    let objeckt = {
        name: ism.value,
        siti: shahar.value,
        staus: off.value,
        id: son.value
    }

    users.push(objeckt)
    run(users)

    ism.value = ""
    shahar.value = ""
    staus.value = ""
    id.value = ""
    
}
