document.getElementById("loginForm").addEventListener("submit", async(e) => {

    e.preventDefault();

    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();

    if (username === " " || password === ""){
        alert("Por favor, complete todos los campos.")
    };

    const res =  await fetch(`http://localhost:3000/users?email=${username}&password=${password}`);

    const data = await res.json();
    if(data.length > 0){
        localStorage.setItem("user", JSON.stringify(data[0]));
        window.location.href = "./src/dashboard.html"
    }else{
        alert("Usuario o contraseña incorrectos");
    }
});