$(".carousel").slick()

$(".btn1").on("click" , ()=>{
    let a
    if($(".password").val().length>=6){
        a = $(".password").val()
    }else{
        alert("6 talik parol yaratin")
    }

    $.ajax("https://asadbek6035.pythonanywhere.com/account/login/",{
        method: "POST",
        data:{
            phone_number: $(".number").val(),
            password: a,
        },
        success: (res)=>{
            $(".row1").toggleClass("d-none");
            $(".row2").toggleClass("d-none");
            console.log(res);
        },
        error: (err)=>{
            console.log(err);
            alert("parol xato tekshirib qaytadan yozin")
        }
    })
})

