document.getElementById("formRegister").addEventListener('submit', async (e)=>{
    e.preventDefault();

    const user = document.getElementById('userRegister').value;
    const email = document.getElementById('emailRegister').value;
    const contra = document.getElementById('passRegister').value;
    const rol = document.getElementById('role').value;

    const checkResg = await fetch(`http://localhost:3000/users?email=${email}`);
    const users = await checkResg.json()

    if (users.length > 0){
        alert('Este usuario ya esta registrado!!')
        return;
    }

    await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-type':'application/json'
        },
        body: JSON.stringify({name: user, email, contra, rol})
    });



    alert('Registro Exitoso!!')
    window.location.href='../index.html';
});