// Seleciona todos os links do menu que começam com #
const menuLinks = document.querySelectorAll('nav ul li a[href^="#"]');

// Função para fazer a rolagem suave
function smoothScroll(event) {
    // Previne o comportamento padrão do link
    event.preventDefault(); 
    
    // Obtém o id da seção de destino (ex: #portfolio)
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    // Rola a tela suavemente até a seção
    if (targetSection) {
        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });
    }
}

// Adiciona um "ouvinte de evento" para cada link do menu
menuLinks.forEach(link => {
    link.addEventListener('click', smoothScroll);
});
