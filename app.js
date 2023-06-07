// console.log(hectareas);

let filteredSectores = [...sectores];
// console.log(filterHectareas);

const cortesContainer = document.querySelector('.cortes-container');

const displayCortes = () => {
  // if statement PART 3 Empty Array
  if (filteredSectores.length < 1) {
    cortesContainer.innerHTML = `<h6>Sorry, no products matched your search</h6>`;
    return;
  }

  // si es veradera la declaracion
  cortesContainer.innerHTML = filteredSectores
    .map(({
      id,
      image,
      nameCorte,
      sector,
      superficie
    }) => {
      return `<article class="corte" data-id="${id}">
          <img
            src="${image}"
            class="corte-img img"
            alt=""
          />
          <footer class="corte-footer">
            <h5 class="corte-name">Corte número: ${nameCorte}</h5>
            <h4 class="corte-name">Sector: ${sector}</h4>
            <span class="corte-dimension">superficie: ${superficie} ha</span>
            <button type="button" class="sector-btn" id="btn-sector-aplicado" data-id="${superficie}">Aplicar Sector</button>
          </footer>
        </article>`;
    })
    .join("");
};

displayCortes();

// filtrar basado en el texto

const form = document.querySelector(".input-form");
const searchInput = document.querySelector(".search-input");

form.addEventListener("keyup", () => {
  const inputValue = searchInput.value;
  console.log(inputValue);

  filteredSectores = sectores.filter((sector) => {
    return sector.nameCorte.toLowerCase().includes(inputValue);
  });
  displayCortes();
});

// mostrar botones
const sectoresDOM = document.querySelector('.sectores');

const displayButtons = () => {
  const buttons = ['all',...new Set(sectores.map(
    (sector) => sector.sector))];
  console.log(buttons);
  sectoresDOM.innerHTML = buttons.map((sector) => {
    return `<button data-id="${sector}" class="sector-btn">${sector}</button>`;
  }).join('');
}

displayButtons();

// filtrar basado en el sector
sectoresDOM.addEventListener('click', (e) => {
  console.log(e.target);
  const element = e.target;
  if (element.classList.contains('sector-btn')) {
    if (element.dataset.id === 'all') {
      filteredSectores = [...sectores]
    } else {
      filteredSectores = sectores.filter((sector) => {
        return sector.sector === element.dataset.id;
      });
    }
    searchInput.value = '';
    displayCortes();
  }
})

// calcular dinero semanal
//
const btnAddSuma = document.getElementById("btn-sector-aplicado");
function sumarHecAplicadas() {
  btnAddSuma.addEventListener('click', () => {
    let btnValue = btnAddSuma.value;
    console.log(btnValue);
  });
}
sumarHecAplicadas();




