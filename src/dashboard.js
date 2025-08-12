import { showLoader } from "../loading";

const user = JSON.parse(localStorage.getItem("user"));
const listProduct = document.getElementById("listProduct");

if (!user){
    window.location.href = "./index.html";
}

if (user.rol == 'admin') {
  document.getElementById('adminPanel').style.display = 'block';
}

document.getElementById('welcome').textContent = `Bienvenido ${user.user || user.name}!`;

console.log(user);

const productosList = document.getElementById("products");

async function fetchProductos(){
    showLoader();
    setTimeout(async() => {
        const res  =await fetch("http://localhost:3000/products");
        const data = await res.json();
    
        productosList.innerHTML = ""; // 
    
        data.forEach((producto) => {
            let li = document.createElement("li");
            li.innerHTML = `Nombre: ${producto.name} -  Precio: ${producto.price}`;
    
            if(user.role == 'admin'){
                const btn = document.createElement('button');
                btn.textContent = 'Eliminar';
                btn.onclick = async ()=>{
                await fetch(`http://localhost:3000/products/${producto.id}`, {
                    method : 'DELETE'
                });
                    fetchProductos();    
                }
                li.appendChild(btn);
            }
            productosList.appendChild(li);
        });

    }, 2000);
    
}

fetchProductos();

if(user.role == 'admin'){
    document.getElementById('adminPanel').addEventListener('submit', async (event)=>{
        event.preventDefault();
        const name = document.getElementById('productName').value;
        const price = document.getElementById('productPrice').value;

        if(name && price) {
            await fetch('http://localhost:3000/products',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({name, price})
            });
            fetchProductos();
        }
    });
}


document.getElementById('logout').addEventListener('click', ()=>{
    showLoader();
    setTimeout(() => {
        localStorage.removeItem('user');
        window.location.href = '../index.html'
    },1500);
})

