    const firebaseConfig = {
    apiKey: "AIzaSyB9C2gXZXX4lpBQ_CLZHm9bLFTFmtgpJB8",
    authDomain: "datos-de-formulario-f75cb.firebaseapp.com",
    projectId: "datos-de-formulario-f75cb",
    storageBucket: "datos-de-formulario-f75cb.appspot.com",
    messagingSenderId: "336848977930",
    appId: "1:336848977930:web:58e3c75c2c1e4b3ee05ff3",
    measurementId: "G-K8V86JLSQ6"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();

document.getElementById('formulario').addEventListener('submit', (event) => {
    event.preventDefault()


    let entradaNombre = document.getElementById('name')
    let errorNombre = document.getElementById('nameError')

    if (entradaNombre.value.trim() == '') {
        errorNombre.textContent = 'Por favor, introducí tu nombre'
        errorNombre.classList.add('error-message')
    } else {
        errorNombre.textContent = ''
        errorNombre.classList.remove('error-message')
    }

    let emailEntrada = document.getElementById('email')
    let emailError = document.getElementById('emailError')
    let emailPattern = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    if (!emailPattern.test(emailEntrada.value)) {
        emailError.textContent = 'Por favor, introducí un mail valido'
        emailError.classList.add('error-message')
    } else {
        emailError.textContent = ''
        emailError.classList.remove('error-message')
    }


    let contrasenaEntrada = document.getElementById('password')
    let errorContrasena = document.getElementById('passwordError')
    let contrasenaPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;
    if (!contrasenaPattern.test(contrasenaEntrada.value)) {
        errorContrasena.textContent = ('La contraseña debe tener al menos 8 caracteres, números, mayúsculas, minúsculas y caracteres especiales')
        errorContrasena.classList.add('error-message')
    } else {
        errorContrasena.textContent = ''
        errorContrasena.classList.remove('error-message')
    }

    if (!errorContrasena.textContent && !errorNombre.textContent && !emailError.textContent) {
        
        db.collection("users").add({
            nombre: entradaNombre.value,
            email:emailEntrada.value,
            password:contrasenaEntrada.value
        })
        .then((docRef)=>{
            alert('El formulario se ha enviado con éxito', docRef.id);
            document.getElementById('formulario').reset();
        })
        .catch((error)=> {
            alert(error);
        });

    }
})

document.getElementById("segundo").style.display = "none";
document.getElementById("labelsalida").style.display = "none";
document.getElementById("inputsalida").style.display = "none";

function idaVuelta() {
    document.getElementById("labelvuelta").style.display = "flex";
    document.getElementById("inputvuelta").style.display = "flex";
    document.getElementById("segundo").style.display = "none";
    document.getElementById("inputvuelta").disabled = false;
    document.getElementById("dividayvuelta").style.display = "flex";
    document.getElementById("labelsalida").style.display = "none";
    document.getElementById("inputsalida").style.display = "none";
}

function soloIda() {

    document.getElementById("inputvuelta").disabled = true;
    document.getElementById("segundo").style.display = "none";
    document.getElementById("labelsalida").style.display = "none";
    document.getElementById("inputsalida").style.display = "none";
    document.getElementById("dividayvuelta").style.display = "flex";
}

function multipleDestinos() {
    document.getElementById("labelsalida").style.display = "flex";
    document.getElementById("inputsalida").style.display = "flex";
    document.getElementById("segundo").style.display = "flex";
    document.getElementById("dividayvuelta").style.display = "none";
}

function validarBusquedaVuelo() {
    var origen1 = document.getElementById("origen").value;
    var destino1 = document.getElementById("destino").value;
    var origen2 = document.getElementById("origen2").value;
    var destino2 = document.getElementById("destino2").value;
    var salida1 = document.getElementById("inputsalida").value;
    var salida2 = document.getElementById("inputsalida2").value;
    var ida = document.getElementById("inputida").value;
    var vuelta = document.getElementById("inputvuelta").value;
    var adultos = document.getElementById("adultos").value;
    var bebes = document.getElementById("bebes").value;

    if (document.buscarvuelo.seleccion[0].checked) {
        if (origen1 === "" || destino1 === "" || ida === "" || vuelta === "") {
            alert("Por favor, complete todos los campos de la búsqueda.");
            return false;
        }
        if (origen1 === destino1) {
            alert("El origen y el destino no pueden ser iguales");
            return false;
        }

        if (ida === vuelta) {
            alert("Las fechas de ida y de vuelta no pueden ser iguales");
            return false;
        }

        if (bebes > adultos) { 
        alert("El número de bebés no puede ser mayor al de adultos");
        return false;
    }
}

if (document.buscarvuelo.seleccion[1].checked) {
    if (origen1 === "" || destino1 === "" || ida === "") {
        alert("Por favor, complete todos los campos de la búsqueda.");
        return false;
    }

    if (origen1 === destino1) {
        alert("El origen y el destino no pueden ser igualess");
        return false;
    }

    if (bebes > adultos) { 
        alert("El número de bebés no puede ser mayor al de adultos");
        return false;
}
}

if (document.buscarvuelo.seleccion[2].checked) {
    if (origen1 === "" || destino1 === "" || origen2 === "" || destino2 === "" || salida1 === "" || salida2 === "") {
        alert("Por favor, complete todos los campos de la búsqueda.");
        return false;
    }

    if (origen1 === destino1) {
        alert("El origen y el destino no pueden ser iguales");
        return false;
    }
    if (origen2 === destino2) {
        alert("El origen y el destino no pueden ser iguales");
        return false;
    }

    if (salida1 === salida2) {
        alert("Las fechas de salida de ambos tramos deben ser distintas");
        return false;
    }
    if (bebes > adultos) { 
        console.log(bebes);
        console.log(adultos);
        alert("El número de bebés no puede ser mayor al de adultos");
        
        return false;
}

    
}
alert("Búsqueda completa.");
return true;


}


