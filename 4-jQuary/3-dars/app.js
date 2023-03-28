
$(".btn1").on("click" , ()=>{
    $.ajax("https://asadbek6035.pythonanywhere.com/account/register/",{
        method: "POST",
        data:{
            full_name: $(".text").val(),
            phone_number: $(".number").val(),
            password: $(".password").val(),
            password2: $(".password1").val(),
        },
        success: (res)=>{
            console.log(res);
        },
        error: (err)=>{
            console.log(err);
        }
    })
})

let token 

$(".btn2").on("click" , ()=>{
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


$(".btn3").on("click" , ()=>{
    $.ajax("https://asadbek6035.pythonanywhere.com/account/change-password-comfirmed/",{
        method: "PATCH",
        data:{
            old_password: $(".password3").val(),
            password: $(".password4").val(),
            password2: $(".password5").val()
        },
        headers:{Authorization: "Bearer " + localStorage.getItem('token')},
        success: (res)=>{
            console.log(res);
        },
        error: (err)=>{
            console.log(err);
        }
    })
})


$(".btn_blog").on("click",()=>{
    $.ajax(`https://asadbek6035.pythonanywhere.com/blog/destroy/ ${$(".id").val()}/` , {
        method: "DELETE",
        headers:{Authorization: "Bearer " + localStorage.getItem('token')},
        success: (res)=>{
            console.log(res);
        },
        error: (e)=>{
            console.log(e);
        }
    })
})