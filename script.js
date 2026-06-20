document.addEventListener('DOMContentLoaded', () => {

    // 1. Lógica para o Menu Mobile (Hamburguer)
    // - Usa as classes 'active' no CSS para mostrar/esconder o menu
    const menuToggle = document.getElementById('menuToggle');
    const menuLinks = document.getElementById('menuLinks');

    if (menuToggle && menuLinks) {
        // Alterna a classe 'active' ao clicar no botão
        menuToggle.addEventListener('click', () => {
            menuLinks.classList.toggle('active');
        });

        // Fecha o menu ao clicar em qualquer link (Melhora a experiência mobile)
        menuLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                // Pequeno atraso para que o scroll suave aconteça antes de fechar
                setTimeout(() => {
                    menuLinks.classList.remove('active');
                }, 300);
            });
        });
    }


    // 2. Lógica para Animação de Rolagem (Fazer as seções "aparecerem")
    // - A animação é definida no CSS (.aparecer)
    const sections = document.querySelectorAll('section');

    const checkScroll = () => {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const triggerPoint = window.innerHeight * 0.75; // Ponto de 75% da tela

            // Se o topo da seção subir além do ponto de 75% da tela
            if (sectionTop < triggerPoint) {
                section.classList.add('aparecer');
            }
        });
    };

    // Executa a checagem no scroll e logo ao carregar
    window.addEventListener('scroll', checkScroll);
    checkScroll();


    // 3. Lógica para o Botão "Voltar ao Topo"
    const btnTopo = document.getElementById('btnTopo');

    // Mostra ou esconde o botão
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) { // Se o scroll for maior que 300px
            btnTopo.style.display = 'block';
        } else {
            btnTopo.style.display = 'none';
        }
    });

    // Rola suavemente para o topo da página ao clicar
    btnTopo.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

});
