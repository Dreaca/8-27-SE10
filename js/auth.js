function userRegisration (){
    console.log("clocked")
    let username = $("#userName").val();
    let email =$("#email").val();
    let password =$("#password").val();
    console.log(username, email, password)
    $.ajax({
        url :"http://localhost:8080/api/v1/auth/register",
        method : "POST",
        contentType: "application/json",
        "data":JSON.stringify({
          "name":username,
          "email":email,
          "password":password
        }),
        success : function (result){
            localStorage.setItem("token",result.data.token)
        },
        error:function (error){
            console.error(error)
            alert("try again")
        }
    })
}
function login(){
    let email =$("#emailLog").val();
    let password =$("#passLog").val();
    console.log( email, password)
    $.ajax({
        url :"http://localhost:8080/api/v1/auth/authenticate",
        method : "POST",
        contentType: "application/json",
        "data":JSON.stringify({
            "email":email,
            "password":password
        }),
        requestHeader : localStorage.getItem("token"),
        success : function (result){
            localStorage.setItem("token",result.data.token)
            window.location.href ="./dashboard.html"
        },
        error:function (error){
            console.error(error)
            alert("try again")
        }
    })
}
