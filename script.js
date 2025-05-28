document.addEventListener('DOMContentLoaded', function() {
  /**
   * Formatea un precio numérico a formato monetario
   * @param {number} price - Precio numérico
   * @returns {string} Precio formateado como "$1,234.56 MXN"
   */
  function formatPrice(price) {
    const numPrice = typeof price === 'number' ? price : parseFloat(price);
    if (isNaN(numPrice)) {
      console.warn('El precio no es un número válido:', price);
      return '$0.00 MXN';
    }
    return '$' + numPrice.toLocaleString('es-MX', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }) + ' MXN';
  }

  // Lista completa de productos con imágenes corregidas
  const productos = [
    { 
      nombre: "Bolsa Guess", 
      precio: 1600.00, 
      imagen: "https://i.imgur.com/fQjdl97.jpg",
      categoria: "bolsas",
      destacado: true
    },
    { 
      nombre: "Bolsa tote Tommy", 
      precio: 1300.00, 
      imagen: "https://i.imgur.com/Gso0fw1.jpg",
      categoria: "bolsas",
      destacado: false
    },
    { 
      nombre: "Cosmequitera", 
      precio: 900.00, 
      imagen: "https://i.imgur.com/k996mJ7.jpg",
      categoria: "bolsas",
      destacado: true
    },
    { 
      nombre: "Cinturon Caballero", 
      precio: 379.99, 
      imagen: "https://i.imgur.com/nTtYeWz.jpg",
      categoria: "cinturones",
      destacado: false
    },
    { 
      nombre: "Clutch Dorado Dama", 
      precio: 800.00, 
      imagen: "https://i.imgur.com/uYLNtMu.jpg",
      categoria: "cinturones",
      destacado: true
    },
    { 
      nombre: "Cremas", 
      precio: 429.00, 
      imagen: "https://i.imgur.com/dXINGne.jpg",
      categoria: "otros",
      destacado: false
    },
    { 
      nombre: "Morral Minimalista", 
      precio: 800.00, 
      imagen: "https://i.imgur.com/2io5pil.jpg",
      categoria: "mochilas",
      destacado: false
    },
    { 
      nombre: "Bolsa de Noche", 
      precio: 1500.00, 
      imagen: "https://i.imgur.com/QyKIiZY.jpg",
      categoria: "bolsas",
      destacado: true
    },
    { 
      nombre: "Sandalias", 
      precio: 350.00, 
      imagen: "https://i.imgur.com/DoahAZ4.jpg",
      categoria: "otros",
      destacado: false
    },
    { 
      nombre: "Cinturon Doble Vista", 
      precio: 750.00, 
      imagen: "https://i.imgur.com/Z9hG0uB.jpg",
      categoria: "cinturones",
      destacado: false
    },
    { 
      nombre: "Riñonera", 
      precio: 1100.00, 
      imagen: "https://i.imgur.com/auoBz7P.jpg",
      categoria: "carteras",
      destacado: true
    },
    { 
      nombre: "Riñonera", 
      precio: 1000.00, 
      imagen: "https://i.imgur.com/aqK2BPI.jpg",
      categoria: "carteras",
      destacado: false
    },
    { 
      nombre: "Cosmequitera", 
      precio: 800.00, 
      imagen: "https://i.imgur.com/igL0kWq.jpg",
      categoria: "bolsas",
      destacado: false
    },
    { 
      nombre: "Muñequera Guess", 
      precio: 750.00, 
      imagen: "https://i.imgur.com/0bKprJK.jpg",
      categoria: "accesorios",
      destacado: false
    },
    { 
      nombre: "Cosmequitera Guess", 
      precio: 600.00, 
      imagen: "https://i.imgur.com/Rd4dfjQ.jpg",
      categoria: "bolsas",
      destacado: true
    },
    { 
      nombre: "Sandalias", 
      precio: 1000.00, 
      imagen: "https://i.imgur.com/rJOMKWH.jpg",
      categoria: "otros",
      destacado: false
    },
    { 
      nombre: "Bolsa para Dama", 
      precio: 2800.50, 
      imagen: "https://i.imgur.com/LGHDEA7.jpg",
      categoria: "bolsas",
      destacado: false
    },
    { 
      nombre: "Riñonera", 
      precio: 1100.95, 
      imagen: "https://i.imgur.com/PqeMNAb.jpg",
      categoria: "carteras",
      destacado: true
    },
    { 
      nombre: "Bolsa de Mano", 
      precio: 1100.00, 
      imagen: "https://i.imgur.com/ewPyRQN.jpg",
      categoria: "bolsas",
      destacado: false
    },
    { 
      nombre: "Riñonera", 
      precio: 1100.50, 
      imagen: "https://i.imgur.com/2LdLSNF.jpg",
      categoria: "carteras",
      destacado: false
    },
    { 
      nombre: "Lonchera", 
      precio: 900.99, 
      imagen: "https://i.imgur.com/YBvDa5o.jpg",
      categoria: "bolsas",
      destacado: true
    },
    { 
      nombre: "Bolsa Guess", 
      precio: 1600.00, 
      imagen: "https://i.imgur.com/M2v07eC.jpg",
      categoria: "carteras",
      destacado: false
    },
    { 
      nombre: "Cosmequitera Guess", 
      precio: 600.50, 
      imagen: "https://i.imgur.com/w9xtLOB.jpg",
      categoria: "bolsas",
      destacado: true
    },
    { 
      nombre: "Camisa Blanca", 
      precio: 499.00, 
      imagen: "https://i.imgur.com/RcU9Ipa.jpg",
      categoria: "camisas",
      destacado: false
    },
    { 
      nombre: "Camisa Negra", 
      precio: 499.95, 
      imagen: "https://i.imgur.com/7GG2ECw.jpg",
      categoria: "camisas",
      destacado: false
    },
    { 
      nombre: "Camisa Blanca", 
      precio: 499.50, 
      imagen: "https://i.imgur.com/3dTA75V.jpg",
      categoria: "camisas",
      destacado: true
    },
    { 
      nombre: "Camisa Negra", 
      precio: 499.00, 
      imagen: "https://i.imgur.com/jrPLOZx.jpg",
      categoria: "camisas",
      destacado: false
    },
    { 
      nombre: "Paquete de Boxers Calvin Klein", 
      precio: 299.99, 
      imagen: "https://i.imgur.com/AGCyrrq.jpg",
      categoria: "otros",
      destacado: false
    },
    { 
      nombre: "Paquete de Boxers Lev´s", 
      precio: 299.50, 
      imagen: "https://i.imgur.com/rcYYGej.jpg",
      categoria: "otros",
      destacado: true
    }
  ];

  // Elementos del DOM
  const productosContainer = document.getElementById('productos');
  const searchInput = document.getElementById('search-input');
  const categoryButtons = document.querySelectorAll('.category-btn');
  
  // Variables de estado
  let currentCategory = 'all';
  let currentSearchTerm = '';
  let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

  // Función para renderizar productos
  function renderProducts() {
    if (!productosContainer) {
      console.error('Error: No se encontró el contenedor de productos');
      return;
    }
    
    const filteredProducts = productos.filter(producto => {
      const matchesCategory = currentCategory === 'all' || producto.categoria === currentCategory;
      const matchesSearch = producto.nombre.toLowerCase().includes(currentSearchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
    
    productosContainer.innerHTML = '';
    
    if (filteredProducts.length === 0) {
      productosContainer.innerHTML = `
        <div class="no-results">
          <p>No se encontraron productos que coincidan con tu búsqueda.</p>
          <p>Intenta con otros términos o selecciona una categoría diferente.</p>
        </div>
      `;
      return;
    }
    
    filteredProducts.forEach(producto => {
      const isFavorite = favorites.includes(producto.nombre);
      const productoElement = document.createElement('div');
      productoElement.className = `producto ${producto.destacado ? 'destacado' : ''}`;
      
      productoElement.innerHTML = `
        <div class="favorite ${isFavorite ? 'active' : ''}">${isFavorite ? '❤️' : '🤍'}</div>
        <img src="${producto.imagen}" alt="${producto.nombre}" 
             onerror="this.onerror=null;this.src='https://via.placeholder.com/200x160/F5F5F5/555555?text=Imagen+no+disponible'"
             loading="lazy">
        <h3>${producto.nombre}</h3>
        <p class="price">${formatPrice(producto.precio)}</p>
        ${producto.destacado ? '<span class="badge-destacado">🌟 Destacado</span>' : ''}
      `;
      
      productosContainer.appendChild(productoElement);
    });
    
    setupIntersectionObserver();
    setupFavoritesEvents();
  }

  // Configurar IntersectionObserver para animaciones
  function setupIntersectionObserver() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.producto').forEach(el => {
      observer.observe(el);
    });
  }

  // Configurar eventos de favoritos
  function setupFavoritesEvents() {
    document.querySelectorAll('.favorite').forEach(btn => {
      btn.addEventListener('click', function(e) {
        e.stopPropagation();
        const productName = this.closest('.producto').querySelector('h3').textContent;
        
        const index = favorites.indexOf(productName);
        if (index === -1) {
          favorites.push(productName);
        } else {
          favorites.splice(index, 1);
        }
        
        localStorage.setItem('favorites', JSON.stringify(favorites));
        
        this.classList.toggle('active');
        this.textContent = this.classList.contains('active') ? '❤️' : '🤍';
      });
    });
  }

  // Evento de búsqueda
  searchInput.addEventListener('input', function() {
    currentSearchTerm = this.value;
    renderProducts();
  });

  // Eventos de categorías
  categoryButtons.forEach(btn => {
    btn.addEventListener('click', function() {
      categoryButtons.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      currentCategory = this.dataset.category;
      renderProducts();
    });
  });

  // Smooth scroll para navegación
  document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 20,
          behavior: 'smooth'
        });
      }
    });
  });

  // Renderizar productos inicialmente
  renderProducts();

  // Observar elementos que deben aparecer
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });
  
  document.querySelectorAll('#nosotros, #contacto').forEach(el => {
    sectionObserver.observe(el);
  });

  // Verificador de imágenes
  function checkImages() {
    console.log("=== VERIFICACIÓN DE IMÁGENES ===");
    productos.forEach((producto, index) => {
      const img = new Image();
      img.onload = () => console.log(`✅ ${index + 1}. ${producto.nombre} - CARGA CORRECTA`);
      img.onerror = () => console.error(`❌ ${index + 1}. ${producto.nombre} - ERROR AL CARGAR`);
      img.src = producto.imagen;
    });
  }
  setTimeout(checkImages, 2000);
});