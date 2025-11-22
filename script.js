// ============================================
// DADOS DOS PRODUTOS
// ============================================
const produtos = {
  bolos: [
    {
      id: 1,
      nome: "Bolo Red Velvet",
      descricao: "Bolo aveludado com cobertura de cream cheese, perfeito para ocasiões especiais.",
      preco: "A consultar",
    },
    {
      id: 2,
      nome: "Bolo de Chocolate Premium",
      descricao: "Bolo de chocolate belga com recheio cremoso e ganache brilhante.",
      preco: "A consultar",
    },
    {
      id: 3,
      nome: "Bolo de Limão Siciliano",
      descricao: "Massa leve e aromática com cobertura de limão siciliano e raspas cítricas.",
      preco: "A consultar",
    },
    {
      id: 4,
      nome: "Bolo de Cenoura Gourmet",
      descricao: "Clássico brasileiro com cobertura de chocolate meio amargo.",
      preco: "A consultar",
    },
    {
      id: 5,
      nome: "Bolo de Frutas Vermelhas",
      descricao: "Massa branca com recheio de frutas vermelhas frescas e chantilly.",
      preco: "A consultar",
    },
    {
      id: 6,
      nome: "Bolo Naked Cake",
      descricao: "Estilo rústico-elegante com camadas visíveis e decoração floral.",
      preco: "A consultar",
    },
  ],
  cestas: [
    {
      id: 7,
      nome: "Cesta Clássica",
      descricao: "Pães artesanais, geleias, queijos e café especial em embalagem elegante.",
      preco: "A consultar",
    },
    {
      id: 8,
      nome: "Cesta Premium",
      descricao: "Seleção premium com produtos importados, vinhos e chocolates finos.",
      preco: "A consultar",
    },
    {
      id: 9,
      nome: "Cesta Romântica",
      descricao: "Perfeita para datas especiais com champanhe, morangos e doces gourmet.",
      preco: "A consultar",
    },
    {
      id: 10,
      nome: "Cesta Saudável",
      descricao: "Opções integrais, frutas frescas, granola e sucos naturais.",
      preco: "A consultar",
    },
    {
      id: 11,
      nome: "Cesta Personalizada",
      descricao: "Monte sua cesta com os produtos de sua preferência.",
      preco: "A consultar",
    },
    {
      id: 12,
      nome: "Cesta Corporativa",
      descricao: "Ideal para presentear clientes e colaboradores com elegância.",
      preco: "A consultar",
    },
  ],
};

// ============================================
// NAVEGAÇÃO MOBILE
// ============================================
function initMobileMenu() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navMobile = document.querySelector('.nav-mobile');

  if (menuToggle && navMobile) {
    menuToggle.addEventListener('click', () => {
      navMobile.classList.toggle('active');
      menuToggle.textContent = navMobile.classList.contains('active') ? '✕' : '☰';
    });

    // Fechar menu ao clicar em um link
    const navLinks = navMobile.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMobile.classList.remove('active');
        menuToggle.textContent = '☰';
      });
    });
  }
}

// ============================================
// RENDERIZAR PRODUTOS
// ============================================
function renderProductCard(produto) {
  return `
    <div class="card fade-in">
      <div class="card-image">🎂</div>
      <div class="card-header">
        <h3 class="card-title">${produto.nome}</h3>
        <p class="card-description">${produto.descricao}</p>
      </div>
      <div class="card-footer">
        <span class="card-price">${produto.preco}</span>
        <a href="contato.html" class="btn btn-primary">Encomendar</a>
      </div>
    </div>
  `;
}

function renderCatalogo() {
  const bolosContainer = document.getElementById('bolos-container');
  const cestasContainer = document.getElementById('cestas-container');

  if (bolosContainer) {
    bolosContainer.innerHTML = produtos.bolos.map(renderProductCard).join('');
  }

  if (cestasContainer) {
    cestasContainer.innerHTML = produtos.cestas.map(renderProductCard).join('');
  }
}

// ============================================
// FORMULÁRIO DE CONTATO
// ============================================
function initContactForm() {
  const form = document.getElementById('contact-form');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const nome = document.getElementById('nome').value.trim();
      const email = document.getElementById('email').value.trim();
      const telefone = document.getElementById('telefone').value.trim();
      const mensagem = document.getElementById('mensagem').value.trim();

      // Validação
      if (!nome || !email || !mensagem) {
        showNotification('Por favor, preencha todos os campos obrigatórios.', 'error');
        return;
      }

      // Validar email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        showNotification('Por favor, insira um email válido.', 'error');
        return;
      }

      // Simular envio
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.textContent = 'Enviando...';
      submitBtn.disabled = true;

      setTimeout(() => {
        showNotification('Mensagem enviada com sucesso! Entraremos em contato em breve.', 'success');
        form.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
      }, 1500);
    });
  }
}

// ============================================
// NOTIFICAÇÕES
// ============================================
function showNotification(message, type = 'info') {
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.textContent = message;
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 1rem 1.5rem;
    background-color: ${type === 'success' ? '#10B981' : type === 'error' ? '#EF4444' : '#3B82F6'};
    color: white;
    border-radius: 0.5rem;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    z-index: 1000;
    animation: slideIn 0.3s ease-out;
    max-width: 400px;
  `;

  document.body.appendChild(notification);

  // Remover após 3 segundos
  setTimeout(() => {
    notification.style.animation = 'slideOut 0.3s ease-out';
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

// ============================================
// SCROLL SUAVE
// ============================================
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

// ============================================
// ANIMAÇÕES AO SCROLL
// ============================================
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px',
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.card').forEach(card => {
    observer.observe(card);
  });
}

// ============================================
// INICIALIZAÇÃO
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  renderCatalogo();
  initContactForm();
  initSmoothScroll();
  initScrollAnimations();
});

// Adicionar estilos de animação
const style = document.createElement('style');
style.textContent = `
  @keyframes slideIn {
    from {
      transform: translateX(400px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes slideOut {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(400px);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);