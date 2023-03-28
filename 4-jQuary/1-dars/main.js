// let quti = $(".box")
// quti.html("salom")   



// function run(main) {
//     main.map((item, index) => {
//         user = `
//         <div class ="col-4">
//             <div class = "card">
//                 <img src = ${item.avatar} alt = ${item.name}/>
//                 <h3>${item.name}</h3>
//             </div>

//         </div>
//         `
//         $(".row").append(user);
//     })
// }
// $(".box").on("click" , ()=>{
//     run(users)
//     $(".box").toggleClass("d-none")
// })



// $(".yon").on("click",()=>{
//     $(".div").attr("src", "./img/on.jpg")
// })
// $(".och").on("click",()=>{
//     $(".div").attr( "src" ,"./img/off.jpg")
// })


// 1-vazifa

// $(".box").on("click",()=>{
//     $.ajax("https://reqres.in/api/users?page=2", {
//         success: function(box1){
//             console.log(box1.data);

//             run(box1.data)
//         },
//         error: function(err){
//             console.log(err);
//         }
//     })
// })

// function run(massiv){
//     massiv.map((a,x)=>{
//         let card1 = `
//             <div class = "col-4">
//                 <div class = "card">
//                     <img src=${a.avatar} alt = "nom"/>
//                     <h1>${a.first_name}</h1>
//                 </div>
//             </div>
//         `
//         $(".row").append(card1)
//     })
// }
// $(".box").on("click" , ()=>{
//     run()
//     $(".box").toggleClass("d-none")
// })



// 2-vazifa

// $(".box").on("click",()=>{
//     $.ajax("https://reqres.in/api/users2" , {
//         success:function(main){
//             console.log(main.data);
//             ishla(main.data)
//         },
//         error:function(err){
//             console.log(err);
//         }
//     })
// })
// function ishla(massiv){
//     massiv.map((a,d)=>{
//         let cardd = `
//             <div class = "col-4">
//                 <div class = "card">
//                     <img src = ${a.avatar} alt = "rasm"/>
//                     <h1>${a.first_name}</h1>
//                 </div>
//             </div>
//         `
//         $(".row").append(cardd)
//     })
// }







// 3-vazifa
// let b = document.querySelector("spinner-border")
// $(".box").on("click", () => {
//     $.ajax("https://reqres.in/api/users?delay=3", { 
//         success: function (userr) {
//             console.log(userr.data);
//             run(userr.data)
            
//         },

//         error: function (err) {
//             console.log(err);
//         },
//         beforeSend: ()=>{
//             $(".spinner-border").toggleClass("d-none")
//         },
//         complete: ()=>{
//             $(".spinner-border").toggleClass("d-none")
//         }
   
//     })
    
// })

// function run(massiv) {
//     massiv.map((a, x) => {
   
//         let card1 = `
//         <div class = "col-4">
//             <div class = "card">
//                 <img src=${a.avatar} alt = "nom"/>
//                 <h1>${a.first_name}</h1>
//             </div>
//         </div> 
//     `
//      $(".row").append(card1)       
//     })
// }

