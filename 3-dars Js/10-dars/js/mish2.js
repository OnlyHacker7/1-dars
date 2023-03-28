let tb = document.querySelector("tbody")
tb.innerHTML = ""
function aaaaa() {
    news.map((xabar, index) => {
        let tr = document.createElement("tr")

        let td1 = document.createElement("td")
        td1.innerHTML = index

        let td2 = document.createElement("td")
        td2.innerHTML = xabar.id

        let td3 = document.createElement("td")
        td3.innerHTML = xabar.catigories

        let td4 = document.createElement("td")

        let img = document.createElement("img")
        img.classList.add("w-25")
        img.src = xabar.photo
        img.alt = xabar.title

        let btn = createElement("button")
        btn.innerHTML = "delet"
    

        td4.appendChild(img)
        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3)
        tr.appendChild(td4)
        tb.appendChild(tr)
    })
}
function del(son) {
    news.splice(son, 1)
    run()
}