document.addEventListener('DOMContentLoaded', function() {
    const bandeiraBrasil = document.getElementById('bandeira-brasil');
    const bandeiraInglaterra = document.getElementById('bandeira-inglaterra');

    // Verifica se há um idioma selecionado no armazenamento local
    let idiomaSelecionado = localStorage.getItem('idiomaSelecionado');

    // Se não houver um idioma selecionado, define o idioma padrão como português
    if (!idiomaSelecionado) {
        idiomaSelecionado = 'portugues';
        localStorage.setItem('idiomaSelecionado', idiomaSelecionado);
    }

    // Aplica o idioma selecionado
    if (idiomaSelecionado === 'portugues') {
        traduzirParaPortugues();
    } else {
        traduzirParaIngles();
    }

    bandeiraBrasil.addEventListener('click', function() {
        if (idiomaSelecionado !== 'portugues') {
            traduzirParaPortugues();
            localStorage.setItem('idiomaSelecionado', 'portugues');
            idiomaSelecionado = 'portugues';
        }
    });

    bandeiraInglaterra.addEventListener('click', function() {
        if (idiomaSelecionado !== 'ingles') {
            traduzirParaIngles();
            localStorage.setItem('idiomaSelecionado', 'ingles');
            idiomaSelecionado = 'ingles';
        }
    });

    function traduzirParaPortugues() {
        // Seu código de tradução para português
        document.querySelectorAll('.cabecalho__menu__link')[0].innerText = 'Inicio';
        document.querySelectorAll('.cabecalho__menu__link')[1].innerText = 'Habilidades';
        document.querySelectorAll('.cabecalho__menu__link')[2].innerText = 'Projetos';

        document.querySelector('.rodape a').innerText = 'Desenvolvido por Andre Felipe';

        document.querySelector('.apresentacao__conteudo__titulo').innerHTML = 'Minhas <strong style="color: #FF3030;">Habilidades</strong>';
        document.querySelector('.apresentacao__conteudo__texto').innerText = 'Vivamus urna nisi, lobortis ut euismod in, sollicitudin ac ipsum. Mauris a libero id velit pulvinar scelerisque at quis magna. Aliquam erat volutpat. Vivamus urna nisi, lobortis ut euismod in, sollicitudin ac ipsum. Mauris a libero id velit pulvinar scelerisque at quis magna. Aliquam erat volutpat.';
        document.querySelector('.apresentacao__links__certificado').innerText = 'Certificado';
        document.querySelector('.apresentacao__links__certificado').innerHTML = '<img src="/imagens/certificado.png">Certificado';

        // Adiciona os ícones aos links do menu
        document.querySelectorAll('.cabecalho__menu__link')[0].insertAdjacentHTML('afterbegin', '<img src="/imagens/casa1.png">');
        document.querySelectorAll('.cabecalho__menu__link')[1].insertAdjacentHTML('afterbegin', '<img src="/imagens/computador .png">');
        document.querySelectorAll('.cabecalho__menu__link')[2].insertAdjacentHTML('afterbegin', '<img src="/imagens/coracao.png">');
    }

    function traduzirParaIngles() {
        // Seu código de tradução para inglês
        document.querySelectorAll('.cabecalho__menu__link')[0].innerText = 'Home';
        document.querySelectorAll('.cabecalho__menu__link')[1].innerText = 'Skills';
        document.querySelectorAll('.cabecalho__menu__link')[2].innerText = 'Projects';

        document.querySelector('.rodape a').innerText = 'Developed by Andre Felipe';

        document.querySelector('.apresentacao__conteudo__titulo').innerHTML = 'My <strong style="color: #FF3030;">Skills</strong>';
        document.querySelector('.apresentacao__conteudo__texto').innerText = 'Vivamus urna nisi, lobortis ut euismod in, sollicitudin ac ipsum. Mauris a libero id velit pulvinar scelerisque at quis magna. Aliquam erat volutpat. Vivamus urna nisi, lobortis ut euismod in, sollicitudin ac ipsum. Mauris a libero id velit pulvinar scelerisque at quis magna. Aliquam erat volutpat.';
        document.querySelector('.apresentacao__links__certificado').innerText = 'Certificate';
        document.querySelector('.apresentacao__links__certificado').innerHTML = '<img src="/imagens/certificado.png">Certificate';

        // Adiciona os ícones aos links do menu
        document.querySelectorAll('.cabecalho__menu__link')[0].insertAdjacentHTML('afterbegin', '<img src="/imagens/casa1.png">');
        document.querySelectorAll('.cabecalho__menu__link')[1].insertAdjacentHTML('afterbegin', '<img src="/imagens/computador .png">');
        document.querySelectorAll('.cabecalho__menu__link')[2].insertAdjacentHTML('afterbegin', '<img src="/imagens/coracao.png">');
    }
});
