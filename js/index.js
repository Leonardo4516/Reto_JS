// Declaración de objetos

const perfilBasico = {
    nombre : "Leonardo",
    apellido : "Hernández",
    email : "lehernan.07@gmail.com",
    ciudad : "Bucaramanga",
    pais : "Colombia"
}

const perfilExtendido = {
    email : "leo.pro@gmail.com",
    telefono : "3168598300",
    ciudad : "Piedecuesta",
    pais : "Colombia",
    ocupacion : "Estudiante"
}

// Combinar los objetos con spread

const perfilFinal = {
    ...perfilBasico, 
    ...perfilExtendido
};

// Desestructuración

const {nombre, ciudad} = perfilFinal;

// Imprimir en consola

console.log("Perfil Básico: ", perfilBasico)
console.log("Perfil Extendido: ", perfilExtendido)
console.log("Perfil Final: ", perfilFinal)

console.log(`El usuario ${nombre} vive en ${ciudad}`)