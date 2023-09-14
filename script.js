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

