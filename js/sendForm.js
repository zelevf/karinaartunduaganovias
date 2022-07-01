// ----------------------------  Cambiar el correo con JS   ---------------------------------


document.getElementById('sendForm').addEventListener('click', function(e) {
    writeTo();
});

function writeTo() {   
    let datos = document.getElementById('datosForm');
    let miEmail = 'fernandoveleze@gmail.com';
    datos.action = `https://formsubmit.co/${miEmail}`;
} 