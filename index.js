// array de fotos
const array_imagenes = [

    {id: 1, ruta: './img/galeria1.jpeg'},

    {id: 2, ruta: './img/galeria2.jpeg'},

    {id: 3, ruta: './img/galeria3.jpeg'},

    {id: 4, ruta: './img/galeria4.jpeg'},

    {id: 5, ruta: './img/galeria1.jpeg'},

    {id: 6, ruta: './img/galeria2.jpeg'},

    {id: 7, ruta: './img/galeria3.jpeg'},

    {id: 8, ruta: './img/galeria4.jpeg'},
    
    {id: 9, ruta: './img/galeria1.jpeg'},
];

const imagenesHTML = document.querySelector('#galeria');

for (const foto of array_imagenes) {

    imagenesHTML.innerHTML += `

        <img id=${foto.id} src="${foto.ruta}" alt="galeria de imagenes">   

    `;

}


// lightbox

const btnCierra = document.querySelector('#btn-cierra');
const btnAdelanta = document.querySelector('#btn-adelanta');
const btnRetrocede = document.querySelector('#btn-retrocede');
const imagenes = document.querySelectorAll('#galeria img');
const lightbox = document.querySelector('#contenedor-principal');
const imagenActiva = document.querySelector('#img-activa');
let indiceImagen = 0;


const abreLightbox = (event) => {
    imagenActiva.src = event.target.src;
    lightbox.style.display = 'flex';
    indiceImagen = Array.from(imagenes).indexOf(event.target);
};

imagenes.forEach((imagen) => {
    imagen.addEventListener('click', abreLightbox);
});


btnCierra.addEventListener('click', () => {
    lightbox.style.display = 'none';
});


const adelantaImagen = () => {
    if (indiceImagen === imagenes.length - 1) {
    indiceImagen = -1;
    }
    imagenActiva.src = imagenes[indiceImagen + 1].src;
    indiceImagen++;
};

btnAdelanta.addEventListener('click', adelantaImagen);


const retrocederImagen = () => {
    if (indiceImagen === 0) {
    indiceImagen = imagenes.length;
    }
    imagenActiva.src = imagenes[indiceImagen - 1].src;
    indiceImagen--;
};

btnRetrocede.addEventListener('click', retrocederImagen);





