let olingan = []
let tovar = []
let tovarIndex = 0
let ser

$(".mahsulot").on("click", () => {
    $(".row1").toggleClass("d-none");
    $(".row2").toggleClass("d-none");
    $(".row2").html("")
    let son = 0
    tovar.map((i, a) => {
        son = son + (i.soni*i.narxi)
    let box = `
        <div class = "col-3">
          <div class = "card">
              <img src = ${i.img} alt = "nimadur"/>
              <h4>${i.name}</h4> 
              <h4 class="text-info">${i.narxi}</h4
              >
                    <div class=" d-flex justify-content-around aligin-item-center">
                         <h4 class = "text-danger">soni:${i.soni}</h4>
                         <h4 class = "text-success">narxi:${i.soni * i.narxi}</h4>
                    </div>
            </div>
        </div>
         `
    $(".row2").append(box);
    console.log(box);
    })
    let harid = `
        <div class = "h1 text-center mt-5 text-danger-emphasis">Jami:${son} kelib turin</div>
    `
    $(".row2").append(harid)
})
$.ajax("https://api.npoint.io/63b7552892b4a5165305", {
    success: (res) => {
        run(res)
        ser = res
        olingan = res
    },
    error: (err) => {
        console.log(err);
    },
    beforeSend: () => {
        $(".box").toggleClass("d-none")
    },
    complete: () => {
        $(".box").toggleClass("d-none")
    }
})



function run(keldi) {
    $(".row1").html("")
    keldi.map((i, a) => {
        let box = `
            <div class = "col-3">
                <div class = "card">
                    <img class=cardImg " src= ${i.img} alt = "nimadur"/>
                    <h4>${i.name}</h4>
                    <p class="text-info">${i.narxi}</p>
                    <button class = "btn btn-warning" onclick="ishla(${a})">Sotib olish</button>
                </div>
            </div>
        `
        $(".row1").append(box)
    })
}



function ishla(e) {
    console.log(olingan[e]);
    let sanoq = 0
    for (i = 0; i < tovar.length; i++) {
        if (tovar[i].name === olingan[e].name) {
            sanoq++
            tovarIndex = i
        }
    }
    if (sanoq == 0) {
        tovar.push({
            name: olingan[e].name,
            img: olingan[e].img,
            narxi: olingan[e].narxi,
            soni: 1
        })
    } else if (sanoq == 1) {
        tovar[tovarIndex].soni = tovar[tovarIndex].soni + 1
    }


    console.log(tovar);
}

function searchch(val){
    let filtr = ser.filter(b=>{
        return b.name.toLowerCase().includes(val.toLowerCase())
    })
    run(filtr)
}