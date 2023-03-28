
$(".btn1").on("click" , ()=>{
    let a
    if($(".password").val().length>=6){
        a = $(".password").val()
    }else{
        alert("6 talik parol yaratin")
    }
    if( $(".password").val()  == $(".password1").val()){

    }
    else{
        alert("parol hato kiritildi")
    }
    $.ajax("https://asadbek6035.pythonanywhere.com/account/register/",{
        method: "POST",
        data:{
            full_name: $(".text").val(),
            phone_number: $(".number").val(),
            password: a,
            password2: $(".password1").val(),
        },
        success: (res)=>{
            $(".row1").toggleClass("d-none");
            $(".row2").toggleClass("d-none");
            console.log(res);
        },
        error: (err)=>{
            console.log(err);
        }
    })
})
let token 

$(".btn3").on("click" , ()=>{
    $.ajax("https://asadbek6035.pythonanywhere.com/account/login/",{
        method: "POST",
        data:{
            phone_number: $(".number1").val(),
            password: $(".password2").val(),
        },
        success: (res)=>{
            console.log(res);
            token = res.data.token.access
            localStorage.setItem('token' , res.data.token.access)
        },
        error: (err)=>{
            console.log(err);
        }
    })
})