document.addEventListener('keydown', e => {
    if (document.getElementById('searcher') == document.activeElement && e.key == 'Enter') {
        verifique()
    }
})

/* Função que vai verificar tudo */
function verifique() {

    if (document.getElementById('searcher').value == '') return

    let natsukiAn = document.getElementsByClassName('n')[0]
    let yuriAn = document.getElementsByClassName('y')[0]
    let sayoriAn = document.getElementsByClassName('s')[0]

    natsukiAn.classList.remove('jump')
    yuriAn.classList.remove('jump')
    sayoriAn.classList.remove('jump')

    let timer = setTimeout(cb, 10)
    let timer2 = setTimeout(cb2, 1200)

    function cb2() {
        document.querySelector('.girls > .s > img').src = 'imagem/stickers/s_sticker_1.png'
        document.querySelector('.girls > .n > img').src = 'imagem/stickers/n_sticker_1.png'
        document.querySelector('.girls > .y > img').src = 'imagem/stickers/y_sticker_1.png'
        clearTimeout(cb2)
    }

    function cb() {
        /* Pega e atualiza o valor da resposta */
        let answer = document.getElementById('answer')
        document.getElementsByClassName('return')[0].style.display = 'block'
        /* Lista dos poemas */
        let poemYuriList = ['agonia', 'ambiente', 'análise', 'ansiedade', 'apavorante', 'aura', 'cativo', 'cemitério', 'clímax', 'ambição', 'contaminação', 'decisão', 'desastre', 'desejo', 'transtorno', 'desorientado', 'desprezar', 'destino', 'discreto', 'eletricidade', 'entropia', 'escarlata', 'essência', 'estrelas', 'eternidade', 'enviado dos céus', 'magro', 'existência', 'expiar', 'explorar', 'extremo', 'filosofia', 'gotas', 'huir', 'ilimitado', 'imaginação', 'incapacidade', 'incongruente', 'incontrolável', 'instável', 'infalível', 'inferno', 'infinito', 'sem fim', 'anormal', 'intelectual', 'ira', 'gaiola', 'julgamento', 'luxúria', 'massacre', 'melancolia', 'milagroso', 'paisagem', 'percepção', 'prazer', 'pergunta', 'apodrecer', 'reflexão', 'refulgente', 'remolino', 'negar', 'descanso', 'retrato', 'sentimento', 'sonho', 'suicídio', 'teimoso', 'terror', 'tempo', 'universo', 'corajoso', 'variação', 'vertigem', 'viagem', 'radiante', 'vitalidade', 'vivaz', 'vívido']

        let poemNatsukiList = ['adorável', 'algodão', 'anime', 'apavorante', 'açúcar', 'maiô', 'beijo', 'mole', 'lançar', 'brilhante', 'brinco', 'bup', 'bolhas', 'cachorrinho', 'meias', 'camisa', 'camisola', 'doce', 'cachoeira', 'capacetes', 'chocolate', 'compras', 'coelhinho', 'doki-doki', 'elástico', 'raiva', 'fantasia', 'morango', 'gatinho', 'virar', 'jogos', 'kawaii', 'batida do coração', 'laço', 'leite', 'bochecha', 'melodia', 'e-mail', 'mordidela', 'nuvens', 'papai', 'pátio', 'paz', 'pegajoso', 'pelo', 'batom', 'pirulito', 'sobremesa', 'sopa', 'pufe', 'puro', 'mouse', 'risadinha', 'rosa', 'lençol', 'pular', 'apito', 'sussurro', 'torção', 'baunilha', 'namorado', 'verano']

        let poemSayoriList = ['aceitar', 'mente soprando', 'amigos', 'amor', 'anime-se', 'arco-irís', 'anoitecer', 'tesouro', 'aventura', 'babia', 'dançar', 'beleza', 'casamento', 'brilho', 'acalmar', 'calor', 'cama', 'cantar', 'cego', 'cicatriz', 'cor', 'conforto', 'coração', 'depressão', 'derrota', 'resto', 'sem esperança', 'benção', 'diversão', 'doce', 'emoção', 'encanto', 'especial', 'esperança', 'extraordinário', 'família', 'felicidade', 'festa', 'flor', 'ferida', 'indiferença', 'prejuízo', 'alegria', 'jogar', 'juntos', 'pranto', 'lamentar', 'vaga-lumes', 'luto', 'maravilhoso', 'medo', 'miséria', 'morte', 'música', 'natureza', 'infância', 'nebuloso', 'oceano', 'trevas', 'pacífico', 'paixão', 'perdão', 'preguiça', 'pirotecnia', 'oração', 'pena', 'valorizado', 'promessa', 'relação', 'riso', 'romance', 'rosa', 'barulhento', 'sensacional', 'ensolarado', 'solidão', 'sorrir', 'sortudo', 'sofrimento', 'loucura', 'desajeitado', 'tragédia', 'tristeza', 'férias', 'vazio', 'vergonha', 'voar']

        /* Pega a palavra digitada pelo usuário */
        let word = document.getElementById('searcher').value.toLowerCase()
        /* Pega a garota selecionada após o processo de verificação (callback) */
        let selGirl = document.querySelector('.ddlc-selected').id
        /* Pega a garota correspondente e envia uma mensagem para usuário */
        if (selGirl == "y") {
            if (poemYuriList.find(item => word == item)) {
                answer.innerHTML = 'A palavra ' + word + ' <strong>é</strong> da Yuri.'
                yuriAn.classList.add('jump')
                document.querySelector('.girls > .y > img').src = 'imagem/stickers/y_sticker_2.png'
            }
            else {
                answer.innerHTML = 'A palavra ' + word + ' <strong>não é</strong> da Yuri.'
            }
        } else if (selGirl == "s") {
            if (poemSayoriList.find(item => word == item)) {
                answer.innerHTML = 'A palavra ' + word + ' <strong>é</strong> da Sayori.'
                sayoriAn.classList.add('jump')
                document.querySelector('.girls > .s > img').src = 'imagem/stickers/s_sticker_2.png'
            }
            else {
                answer.innerHTML = 'A palavra ' + word + ' <strong>não é</strong> da Sayori.'
            }
        } else if (selGirl == "n") {
            if (poemNatsukiList.find(item => word == item)) {
                answer.innerHTML = 'A palavra ' + word + ' <strong>é</strong> da Natsuki.'
                natsukiAn.classList.add('jump')
                document.querySelector('.girls > .n > img').src = 'imagem/stickers/n_sticker_2.png'
            }
            else {
                answer.innerHTML = 'A palavra ' + word + ' <strong>não é</strong> da Natsuki.'
            }
        } else {
            answer.innerHTML = 'Você não escolheu nenhuma garota!'
        }
        clearTimeout(timer)
    }
}