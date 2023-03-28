// let only = [
//     {
//         name: 'hp',
//         narxi: 500,
//         soni: 30
//     },
//     {
//         name: 'macbook',
//         narxi: 4000,
//         soni: 25
//     },
//     {
//         name: 'lenova',
//         narxi: 900,
//         soni: 50
//     },
//     {
//         name: 'asus',
//         narxi: 1500,
//         soni: 28
//     },
//     {
//         name: 'iphone',
//         narxi: 800,
//         soni: 20
//     },
//     {
//         name: 'iphone 14',
//         narxi: 1500,
//         soni: 10
//     },
//     {
//         name: 'televizor',
//         narxi: 1200,
//         soni: 20
//     },
//     {
//         name: 'soat',
//         narxi: 300,
//         soni: 60
//     },
//     {
//         name: 'airpods',
//         narxi: 100,
//         soni: 80
//     },
//     {
//         name: 'manitor',
//         narxi: 400,
//         soni: 15
//     },
//     {
//         name: 'samsung',
//         narxi: 650,
//         soni: 8
//     },
// ]
// let savat = []
// function olish() {
//     let a = 0
//     let maxsulot = prompt("nima xarid qilas")
//     let nechta
//     if (maxsulot == "") {
//         let hamasi = 0
//         let box = 0
//         alert("yana kelib turin")
//         console.log(savat);
//         for(x=0;x<savat.length;x++){
//             hamasi=savat[x].soni*savat[x].narxi
//             console.log(hamasi);
//             box=box+hamasi
//             console.log(box);
//         }
//         alert("sizdan"+box+"shuncha boldi")
//     }
//     for (i = 0; i < only.length; i++) {
//         if (only[i].name == maxsulot) {
//             a++
//             nechta = i
//         }
//     }
//     if (a == 0) {
//         alert("bizda bu maxsulot yo edi");
//     } else {
//         console.log(only[nechta]);
//         alert("xozir");
//     }
//     let miqdori = +prompt(`nechta ${only[nechta].name} olmoqchisz`)
//     if (miqdori > only[nechta].soni) {
//         alert("buncha yo ekan" + only[nechta] + "shuncha bo");
//     }
//     else {
//         only[nechta].soni=only[nechta].soni-miqdori
           
//             savat.push({
//                 name: only[nechta].name,
//                 narxi: only[nechta].narxi,
//                 soni: miqdori
//             })
//         alert("yana olasizmi")
//         olish()
//     }
// }







// //oyin
let a=prompt("talang(tosh qaychi qogoz)")
let box=[
    {
        name:"tosh"
    },
    {
        name:"qaychi"
    },
    {
        name:"qogoz"
    },
]
let b=parseInt(Math.random()*3)
// if(a=="tosh" && b=="qogoz"){
//     alert("siz yutkazdiz ")
// }else{
//     alert("siz yutdiz")
// }
// if(a=="qaychi" && b=="tosh"){
//     alert("siz yutkazdiz ")
// }else{
//     alert("siz yutdiz")
// }
// if(a=="qogoz" && b=="qaychi"){
//     alert("siz yutkazdiz ")
// }else{
//     alert("siz yutdiz")
// }
if(a=="tosh"){
    if(Math.random()=="qogoz"){
        alert("yutkazdiz")
    }else{
        alert("yutkazdiz")
    }
}
if(a=="qogoz"){
    if(Math.random()=="qaychi"){
        alert("yutkazdiz")
    }else{
        alert("yutkazdiz")
    }
}




