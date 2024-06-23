import propiedadesVenta from "./propiedades_venta.js";

/* for(const venta of propiedadesVenta){} */

const mostrarPropiedadesVenta = () => {
    const container = document.getElementById("contenedor1");
    for (const venta of propiedadesVenta) {
        const card = document.createElement("div");
        /* card.className = "col-md-4 mb-4"; */
        card.innerHTML = `
            <div class="card">
                <div class="card-body">
                    <img src="${venta.src}" class="card-img-top" alt="Imagen del departamento"/>
                    <h5 class="card-title">${venta.nombre}</h5>
                    <p class="card-text">${venta.descripcion}</p>
                    <p><i class="fas fa-map-marker-alt"></i> ${venta.ubicacion}</p>
                    <p>Habitaciones: <i class="fas fa-bed"></i> ${venta.habitaciones} Habitaciones</p>
                    <p>Baños: <i class="fas fa-bath"></i> ${venta.banos} Baños</p>
                    <p>Precio: <i class="fas fa-dollar-sign"></i> ${venta.costo} UF</p>
                    <p>${venta.smoke === true ? '<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>' : '<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>'}</p>
                    <p>${venta.pets === true ? '<p class="text-success"><i class="fas fa-paw"></i> Se permiten mascotas</p>' : '<p class="text-danger"><i class="fa-solid fa-ban"></i> No se permiten mascotas</p>'}</p>
                </div>
            </div>
        `;

container.appendChild(card);
    }
};

mostrarPropiedadesVenta();