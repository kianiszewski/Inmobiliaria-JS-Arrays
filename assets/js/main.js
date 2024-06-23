import propiedadesVenta from "./propiedades_venta.js";
import propiedadesAlquiler from "./propiedades_alquiler.js";


const mostrarPropiedadesVenta = () => {
    const container = document.getElementById("contenedor1");

    for(let i = 0; i < propiedadesVenta.length; i++){
        if (i < 3){
        const venta = propiedadesVenta[i];
        const card = document.createElement("div");
        card.className = "col-md-4 mb-4";
        card.innerHTML += `
            <div class="card">
                <div class="card-body">
                    <img
                    src="${venta.src}" class="card-img-top" alt="Imagen del departamento"/>
                    <h5 class="card-title">${venta.nombre}</h5>
                    <p class="card-text">${venta.descripcion}</p>
                    <p><i class="fas fa-map-marker-alt"></i> ${venta.ubicacion}</p>
                    <p>Habitaciones: <i class="fas fa-bed"></i> ${venta.habitaciones} Habitaciones</p>
                    <p>Baños: <i class="fas fa-bath"></i> ${venta.banos} Baños</p>
                    <p>Precio: <i class="fas fa-dollar-sign"></i> ${venta.costo} UF</p>
                    <p> ${venta.smoke === true ?'<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>':'<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>'}</p>
                    <p> ${venta.pets === true ?'<p class="text-success"><i class="fas fa-paw"></i> Se permiten mascotas</p>':'<p class="text-danger"><i class="fa-solid fa-ban"></i> No se permiten mascotas</p>'}</p>
                </div>
            </div>
        `;
        container.appendChild(card);
    }}; 
        
};

const mostrarPropiedadesAlquiler = () => {
    const container = document.getElementById("contenedor2");

    for(let i = 0; i < propiedadesAlquiler.length; i++){
        if (i < 3){
        const rent = propiedadesAlquiler[i];
        const card = document.createElement("div");
        card.className = "col-md-4 mb-4";
        card.innerHTML += `
            <div class="card">
                <div class="card-body">
                    <img
                    src="${rent.src}" class="card-img-top" alt="Imagen del departamento"/>
                    <h5 class="card-title">${rent.nombre}</h5>
                    <p class="card-text">${rent.descripcion}</p>
                    <p><i class="fas fa-map-marker-alt"></i> ${rent.ubicacion}</p>
                    <p>Habitaciones: <i class="fas fa-bed"></i> ${rent.habitaciones} Habitaciones</p>
                    <p>Baños: <i class="fas fa-bath"></i> ${rent.banos} Baños</p>
                    <p>Precio: <i class="fas fa-dollar-sign"></i> ${rent.costo} pesos chilenos</p>
                    <p> ${rent.smoke === true ?'<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>':'<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>'}</p>
                    <p> ${rent.pets === true ?'<p class="text-success"><i class="fas fa-paw"></i> Se permiten mascotas</p>':'<p class="text-danger"><i class="fa-solid fa-ban"></i> No se permiten mascotas</p>'}</p>
                </div>
            </div>
        `;
        container.appendChild(card);
    }}; 
        
};

mostrarPropiedadesVenta();
mostrarPropiedadesAlquiler();