// Carta de Gelateria Voramar - Cunit
const menuData = [
  {
    category: "Helados artesanos",
    description: "Helados artesanos servidos en tarrina, cucurucho o copas. Sabores destacados: Kinder Bueno, frutales y horchata artesana.",
    items: [
      {
        name: "Cucurucho 1 bola",
        description: "Elige entre nuestros sabores artesanos.",
        price: "2,50 €",
      },
      {
        name: "Cucurucho 2 bolas",
        description: "Combina tus sabores favoritos.",
        price: "3,80 €",
      },
      {
        name: "Cucurucho 3 bolas",
        description: "Para los más golosos.",
        price: "4,80 €",
      },
      {
        name: "Tarrina pequeña",
        description: "Helado cremoso artesano.",
        price: "3,20 €",
      },
      {
        name: "Tarrina mediana",
        description: "Ideal para disfrutar con calma.",
        price: "4,20 €",
      },
      {
        name: "Tarrina grande",
        description: "Perfecto para compartir.",
        price: "5,50 €",
        tag: "Perfecto para compartir",
      },
      {
        name: "Copa especial",
        description: "Helado con toppings y siropes.",
        price: "5,80 €",
        tag: "Recomendado",
      },
      {
        name: "Kinder Bueno",
        description: "Uno de nuestros sabores más populares.",
        price: "3,50 €",
        tag: "Más vendido",
      },
      {
        name: "Horchata artesana",
        description: "Horchata tradicional elaborada artesanalmente.",
        price: "3,20 €",
        tag: "Especialidad",
      },
    ],
  },
  {
    category: "Crepes y gofres",
    description: "Dulces recién hechos para disfrutar frente al mar.",
    items: [
      {
        name: "Crêpe Amore",
        description: "Crêpe relleno con nuestra receta especial Amore.",
        price: "4,50 €",
      },
      {
        name: "Crêpe Nutella",
        description: "Relleno de Nutella, perfecto para los amantes del chocolate.",
        price: "4,80 €",
        tag: "Más vendido",
      },
      {
        name: "Crêpe con fruta",
        description: "Relleno de fruta fresca de temporada.",
        price: "4,50 €",
      },
      {
        name: "Gofre con chocolate",
        description: "Gofre recién hecho con chocolate caliente y nata.",
        price: "5,20 €",
      },
      {
        name: "Gofre con nata",
        description: "Gofre crujiente con nata montada y sirope.",
        price: "4,80 €",
      },
      {
        name: "Gofre con helado",
        description: "Gofre caliente con bola de helado artesano.",
        price: "5,50 €",
        tag: "Recomendado",
      },
    ],
  },
  {
    category: "Bebidas y cafetería",
    description: "Bebidas frías, batidos, cócteles y cafetería especializada.",
    items: [
      {
        name: "Batido de helado",
        description: "Batido cremoso con el sabor de helado que prefieras.",
        price: "4,50 €",
        tag: "Muy demandado",
      },
      {
        name: "Granizado de limón",
        description: "Refrescante granizado con sabor intenso a limón natural.",
        price: "3,20 €",
      },
      {
        name: "Granizado de naranja",
        description: "Sabor afrutado y refrescante.",
        price: "3,20 €",
      },
      {
        name: "Granizado de horchata",
        description: "Granizado de horchata artesana.",
        price: "3,50 €",
      },
      {
        name: "Cóctel sin alcohol",
        description: "Cócteles refrescantes sin alcohol.",
        price: "4,80 €",
      },
      {
        name: "Café expreso",
        description: "Café recién hecho.",
        price: "1,50 €",
      },
      {
        name: "Café con leche",
        description: "Café con leche caliente.",
        price: "2,20 €",
      },
      {
        name: "Café con hielo",
        description: "Café recién hecho servido con hielo.",
        price: "2,50 €",
      },
      {
        name: "Cortado",
        description: "Café cortado con leche.",
        price: "2,00 €",
      },
    ],
  },
  {
    category: "Salado",
    description: "Bocadillos y tapas variadas para acompañar tu visita.",
    items: [
      {
        name: "Bocadillo variado",
        description: "Bocadillos con ingredientes frescos.",
        price: "4,50 €",
      },
      {
        name: "Tapas variadas",
        description: "Selección de tapas para compartir.",
        price: "6,50 €",
        tag: "Para compartir",
      },
    ],
  },
];

function createMenuCard(item) {
  const card = document.createElement("article");
  card.className = "menu-card";

  const name = document.createElement("h3");
  name.className = "menu-card__name";
  name.textContent = item.name;

  const price = document.createElement("span");
  price.className = "menu-card__price";
  price.textContent = item.price;

  const desc = document.createElement("p");
  desc.className = "menu-card__desc";
  desc.textContent = item.description;

  card.appendChild(name);
  card.appendChild(price);
  card.appendChild(desc);

  if (item.tag) {
    const tag = document.createElement("span");
    tag.className = "menu-card__tag";
    tag.textContent = item.tag;
    card.appendChild(tag);
  }

  return card;
}

function renderMenu(filterCategory = "all") {
  const container = document.getElementById("menu-container");
  if (!container) return;

  container.innerHTML = "";

  menuData.forEach((section) => {
    const isVisible =
      filterCategory === "all" || section.category === filterCategory;
    if (!isVisible) return;

    const sectionEl = document.createElement("section");
    sectionEl.className = "menu-section";

    const header = document.createElement("header");
    header.className = "menu-section__header";

    const title = document.createElement("h3");
    title.className = "menu-section__title";
    title.textContent = section.category;

    const subtitle = document.createElement("p");
    subtitle.className = "menu-section__subtitle";
    subtitle.textContent = section.description;

    header.appendChild(title);
    header.appendChild(subtitle);

    const list = document.createElement("div");
    list.className = "menu-items";

    section.items.forEach((item) => {
      list.appendChild(createMenuCard(item));
    });

    sectionEl.appendChild(header);
    sectionEl.appendChild(list);
    container.appendChild(sectionEl);
  });
}

function setupFilters() {
  const chips = document.querySelectorAll(".chip");
  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      const category = chip.dataset.category;

      chips.forEach((c) => c.classList.remove("chip--active"));
      chip.classList.add("chip--active");

      renderMenu(category);
    });
  });
}

function setupNavToggle() {
  const toggle = document.querySelector(".nav__toggle");
  const links = document.querySelector(".nav__links");
  if (!toggle || !links) return;

  toggle.addEventListener("click", () => {
    links.classList.toggle("nav__links--open");
  });

  links.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      links.classList.remove("nav__links--open");
    });
  });
}

function setCurrentYear() {
  const yearSpan = document.getElementById("year");
  if (!yearSpan) return;
  yearSpan.textContent = new Date().getFullYear();
}

document.addEventListener("DOMContentLoaded", () => {
  renderMenu();
  setupFilters();
  setupNavToggle();
  setCurrentYear();
});

