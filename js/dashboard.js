$(document).ready(()=>{
    let token = localStorage.getItem("token")
    if(token){
        $.ajax({
            url:"http://localhost:8080/api/v1/blog/newMethod",
            method:"Get",
            contentType : "application/json",
            headers :{
                "Authorization":"Bearer "+token
            },
            success:function(result){
                $("#message").text(result)
                $('<p>'+result+'</p>').appendTo('body')
            }
        })
    }else{
        alert("please login")
        window.location.href="index.html"
    }
})
function logout(){
    localStorage.removeItem("token");
    window.location.href="index.html"
}