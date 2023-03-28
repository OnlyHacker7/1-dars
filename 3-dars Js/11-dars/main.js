// alert("man imtixondam")


// let a = parseInt( prompt("son kiritn"))
// let b = Math.floor(a/10)
// let d = Math.floor(a%10)
// console.log(d*10+b);



// let a = prompt("ozgaruvchi")
// let y = 0
// for(i=0 ; i<=a ; i++){
//   y=y
// }


// let a = prompt("soz krtn")
// console.log(a.toLowerCase().replaceAll(/yomon/gi,"yaxshi"));


// let a = prompt("soz krtn")
// console.log(a.match(/\d+/g));
// let x = a.match(/\d+/g)[0]
//     let k = 0
//     let l = 0
// for(i=0 ; i<=x ; i++){
//     if(i%2 == 0){
//         console.log(i , 'j');
//         k = k+i
//     }
  
//     if(i%2 == 1){
//         console.log(i , 't');
//         l = l+i
//     }
//     console.log(k-l);
// }


// let a = 0
// for(i=0 ; i<100 ;i++){
//     if( i%3 == 0 && i%5==0){
//         console.log(a=a+i)
//     }
// }


let only = [
        {
            name: 'hp',
            narxi: 500,
            soni: 30
        },
        {
            name: 'macbook',
            narxi: 4000,
            soni: 25
        },
        {
            name: 'lenova',
            narxi: 900,
            soni: 50
        },
        {
            name: 'asus',
            narxi: 1500,
            soni: 28
        },
        {
            name: 'iphone',
            narxi: 800,
            soni: 20
        },
]

function olish(){
    for (i = 0; i < only.length; i++) {
        if (only[i].name) {
         console.log(only[i].name);
        }
    }
    let s =prompt("nomi")
    let d =+prompt("narxi")
    let f =+prompt("soni")
    let das = {
        name : s,
        narxi : d,
        soni : f
    }
    only.push(das)
    console.log(only);
}
function del(){
    
}