const user = JSON.parse(localStorage.getItem("user"));
const listProduct = document.getElementById("listProduct");

if (!user){
    window.location.href = "./index.html";
}



const productosList = document.getElementById("products");

async function fetchProductos(){
    const res  =await fetch("http://localhost:3000/products");
    const data = await res.json();

    productosList.innerHTML = ""; // 

    data.forEach((producto) => {
        let li = document.createElement("li");
        li.innerHTML = `Nombre: ${producto.name} -  Precio: ${producto.price}`;
        productosList.appendChild(li);
    });
}

fetchProductos();