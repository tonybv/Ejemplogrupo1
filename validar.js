function validar()
{
    var usuarioingresado=document.getElementById("usuario").value;
    var passwordingresada=document.getElementById("contraseña").value;

    if (usuarioingresado=="Marck" && passwordingresada=="12345") 
    { alert("Datos correctos, Bienvenido")
     window.open("https://www.youtube.com/")
    }

    else { alert("Datos incorrectos, verifique su usuario y contraseña")}
        window.open("index.html")


}