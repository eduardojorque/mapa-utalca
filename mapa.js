// Inicializar el mapa
var map = L.map('map').setView([-35.404500, -71.635000], 20);
    
// Añadir capa de teselas
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© Desarrollo por Gristilo'
}).addTo(map);

// Añadir marcadores con números y eventos de clic para abrir los modales
var markers = [
    { coords: [-35.403395, -71.632550], number: 1, modal: '.modalmapa', id: 1 },
    { coords: [-35.402737, -71.630570], number: 2, modal: '.modalmapa', id: 2 },
    { coords: [-35.404800, -71.632200], number: 3, modal: '.modalmapa', id: 3 },
    { coords: [-35.403910, -71.632850], number: 4, modal: '.modalmapa', id: 4 },
    { coords: [-35.405008, -71.634381], number: 5, modal: '.modalmapa', id: 5 },
    { coords: [-35.403400, -71.631792], number: 6, modal: '.modalmapa', id: 6 },
    { coords: [-35.403741, -71.632330], number: 7, modal: '.modalmapa', id: 7 },
    { coords: [-35.403000, -71.633500], number: 8, modal: '.modalmapa', id: 8 },
    { coords: [-35.403955, -71.633380], number: 9, modal: '.modalmapa', id: 9 },
    { coords: [-35.403620, -71.630900], number: 10, modal: '.modalmapa', id: 10 },
    { coords: [-35.403898, -71.631000], number: 11, modal: '.modalmapa', id: 11 },
    { coords: [-35.404270, -71.631850], number: 12, modal: '.modalmapa', id: 12 },
    { coords: [-35.404050, -71.631400], number: 13, modal: '.modalmapa', id: 13 },
    { coords: [-35.406229, -71.638437], number: 14, modal: '.modalmapa', id: 14 },
    { coords: [-35.404650, -71.632000], number: 15, modal: '.modalmapa', id: 15 },
    { coords: [-35.404414, -71.633580], number: 16, modal: '.modalmapa', id: 16 },
    { coords: [-35.402930, -71.631746], number: 17, modal: '.modalmapa', id: 17 },
    { coords: [-35.404900, -71.632545], number: 18, modal: '.modalmapa', id: 18 },
    { coords: [-35.404510, -71.632200], number: 19, modal: '.modalmapa', id: 19 },
    { coords: [-35.404650, -71.632200], number: 20, modal: '.modalmapa', id: 20 },
    { coords: [-35.402857, -71.632590], number: 21, modal: '.modalmapa', id: 21 },
    { coords: [-35.404051, -71.633958], number: 22, modal: '.modalmapa', id: 22 },
    { coords: [-35.404435, -71.636059], number: 23, modal: '.modalmapa', id: 23 },
    { coords: [-35.404249, -71.635417], number: 24, modal: '.modalmapa', id: 24 },
    { coords: [-35.403399, -71.634750], number: 25, modal: '.modalmapa', id: 25 },
    { coords: [-35.403144, -71.634375], number: 26, modal: '.modalmapa', id: 26 },
    { coords: [-35.406231, -71.638654], number: 27, modal: '.modalmapa', id: 27 },
    { coords: [-35.405496, -71.633872], number: 28, modal: '.modalmapa', id: 28 },
    { coords: [-35.405095, -71.635714], number: 29, modal: '.modalmapa', id: 29 },
    { coords: [-35.403950, -71.634522], number: 30, modal: '.modalmapa', id: 30 },
    { coords: [-35.404386, -71.634700], number: 31, modal: '.modalmapa', id: 31 },
    { coords: [-35.405391, -71.633286], number: 32, modal: '.modalmapa', id: 32 },
    { coords: [-35.406283, -71.635150], number: 33, modal: '.modalmapa', id: 33 },
    { coords: [-35.405646, -71.632960], number: 34, modal: '.modalmapa', id: 34 },
    { coords: [-35.405315, -71.635129], number: 35, modal: '.modalmapa', id: 35 },
    { coords: [-35.405246, -71.632808], number: 36, modal: '.modalmapa', id: 36 },
    { coords: [-35.404216, -71.634102], number: 37, modal: '.modalmapa', id: 37 },
    { coords: [-35.405988, -71.637509], number: 38, modal: '.modalmapa', id: 38 },
    { coords: [-35.406600, -71.635400], number: 39, modal: '.modalmapa', id: 39 },
    { coords: [-35.406559, -71.635560], number: 40, modal: '.modalmapa', id: 40 },
    { coords: [-35.406520, -71.635740], number: 41, modal: '.modalmapa', id: 41 },
    { coords: [-35.406470, -71.635910], number: 42, modal: '.modalmapa', id: 42 },
    { coords: [-35.405795, -71.635382], number: 43, modal: '.modalmapa', id: 43 },
    { coords: [-35.406430, -71.636090], number: 44, modal: '.modalmapa', id: 44 },
    { coords: [-35.405640, -71.635800], number: 45, modal: '.modalmapa', id: 45 },
    { coords: [-35.404439, -71.632952], number: 46, modal: '.modalmapa', id: 46 },
    { coords: [-35.405926, -71.638057], number: 47, modal: '.modalmapa', id: 47 },
    { coords: [-35.404950, -71.638707], number: 48, modal: '.modalmapa', id: 48 },
    { coords: [-35.404870, -71.639673], number: 49, modal: '.modalmapa', id: 49 },
    { coords: [-35.405222, -71.638008], number: 50, modal: '.modalmapa', id: 50 },
    { coords: [-35.405360, -71.636700], number: 51, modal: '.modalmapa', id: 51 },
    { coords: [-35.405777, -71.637115], number: 52, modal: '.modalmapa', id: 52 },
    { coords: [-35.403857, -71.637231], number: 53, modal: '.modalmapa', id: 53 },
    { coords: [-35.404343, -71.638055], number: 54, modal: '.modalmapa', id: 54 },
    { coords: [-35.404555, -71.637069], number: 55, modal: '.modalmapa', id: 55 },
    { coords: [-35.405800, -71.635800], number: 57, modal: '.modalmapa', id: 57 },
    { coords: [-35.404750, -71.636520], number: 56, modal: '.modalmapa', id: 56 },
    { coords: [-35.406788, -71.636134], number: 58, modal: '.modalmapa', id: 58 },
    { coords: [-35.405291, -71.638800], number: 59, modal: '.modalmapa', id: 59 },
    { coords: [-35.404435, -71.636764], number: 60, modal: '.modalmapa', id: 60 },
    { coords: [-35.406403, -71.637620], number: 61, modal: '.modalmapa', id: 61 },
    { coords: [-35.405599, -71.636350], number: 62, modal: '.modalmapa', id: 62 },
    { coords: [-35.405424, -71.637350], number: 63, modal: '.modalmapa', id: 63 },
    { coords: [-35.405581, -71.630417], number: 65, modal: '.modalmapa', id: 65 },
    { coords: [-35.404443, -71.630150], number: 66, modal: '.modalmapa', id: 66 }
];


markers.forEach(function(marker) {
    // Crear un div con el número para usarlo como ícono personalizado
    var icon = L.divIcon({
        className: 'numbered-icon',
        html: marker.number,
        iconSize: [30, 30]
    });


    L.marker(marker.coords, { icon: icon }).addTo(map)
        .on('click', function() {
            $(marker.modal).modal('show');

            mostrarDatos(marker.id); // le pasas el marker id
        });
});

function mostrarDatos(id) {
// Buscar el objeto con el ID proporcionado
const dato = datos.find(d => d.id === id);

// Si el objeto existe
if (dato) {
    let contenidoHTML = '';

    // Iterar sobre las claves y valores del objeto
    for (const [clave, valor] of Object.entries(dato)) {
        // Mostrar solo los valores que son true y que no sean 'id'
        if (valor[0] && clave !== 'id') {
            if (clave === 'nombre') {
                contenidoHTML += `
                    <div class="col-12">
                        <div class="depen-titulo">
                            <h2>${valor[1]}</h2>
                        </div>
                    </div>`;
            } else if (clave === 'descripcion') {
                contenidoHTML += `
                    <div class="col-12">
                        <div class="depen-parrafo">
                            <p>${valor[1]}</p>
                        </div>
                    </div>`;
            } else {
                contenidoHTML += `
                    <div class="col-6">
                        <div class="lista text-center">
                            <img class="mx-auto" src="img/iconos/png-100px/${clave}.png" alt="">
                            <span>${valor[1]}</span>
                        </div>
                    </div>`;
            }
        }
    }
    
    // Insertar el contenido HTML en el div con id 'contenido'
    document.getElementById('contenido').innerHTML = contenidoHTML;
} else {
    // Si el objeto no se encuentra, mostramos un mensaje de error
    document.getElementById('contenido').innerHTML = `<p style="background-color: red; padding:10px; color:#fff" class="mx-auto">Datos no encontrados</p>`;
}
}

//Función llamada cuando se encuentra la ubicación
function onLocationFound(e) {
    var radius = e.accuracy;
    L.marker(e.latlng).addTo(map)
        .bindPopup("Estás adentro de " + radius + " metros de este punto").openPopup();
    L.circle(e.latlng, radius).addTo(map);
}

// Función llamada cuando hay un error al obtener la ubicación
function onLocationError(e) {
    alert(e.message);
}

// Configurar eventos de localización
map.on('locationfound', onLocationFound);
map.on('locationerror', onLocationError);

// Solicitar la ubicación del usuario
map.locate({setView: true, maxZoom: 16}); 

