let tb = document.querySelector("tbody")
function hamasi(){
    news.map((xabar , index)=>{
        let tr = document.createElement("tr")
        
        let td1 = document.createElement("td")
        td1.innerHTML = index
        
        let td2 = document.createElement("td")
        td2.innerHTML = xabar.id
        
        let td3 = document.createElement("td")
        td3.innerHTML = xabar.categories
        
        let td4 = document.createElement("td")
        let img = document.createElement("img")
        img.src = xabar.photo
        img.alt = xabar.title


        


    })
}