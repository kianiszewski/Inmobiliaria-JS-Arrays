import propiedadesAlquiler from "./propiedades_alquiler.js";

const mostrarPropiedadesAlquiler = () => {
    const container = document.getElementById("contenedor1");
    for (const alquiler of propiedadesAlquiler) {
        const card = document.createElement("div");
        /* card.className = "col-md-4 mb-4"; */
        card.innerHTML = `
            <div class="card">
                <div class="card-body">
                    <img src="${alquiler.src}" class="card-img-top" alt="Imagen del departamento"/>
                    <h5 class="card-title">${alquiler.nombre}</h5>
                    <p class="card-text">${alquiler.descripcion}</p>
                    <p><i class="fas fa-map-marker-alt"></i> ${alquiler.ubicacion}</p>
                    <p>Habitaciones: <i class="fas fa-bed"></i> ${alquiler.habitaciones} Habitaciones</p>
                    <p>Baños: <i class="fas fa-bath"></i> ${alquiler.banos} Baños</p>
                    <p>Precio: <i class="fas fa-dollar-sign"></i> ${alquiler.costo} pesos chilenos</p>
                    <p>${alquiler.smoke === true ? '<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>' : '<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>'}</p>
                    <p>${alquiler.pets === true ? '<p class="text-success"><i class="fas fa-paw"></i> Se permiten mascotas</p>' : '<p class="text-danger"><i class="fa-solid fa-ban"></i> No se permiten mascotas</p>'}</p>
                </div>
            </div>
        `;

container.appendChild(card);
    }
};

mostrarPropiedadesAlquiler();