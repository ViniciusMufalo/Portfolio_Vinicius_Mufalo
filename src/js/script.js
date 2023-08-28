
//efeito de aparecer aos poucos:
window.sr = ScrollReveal({reset:true});

sr.reveal('.inicio_descricao_e_img, .inicio_link', {duration: 1000});

window.sr = ScrollReveal({reset:true});

sr.reveal('.sobre_mim_conteudo', {duration: 2000});
//efeito de aparecer aos poucos:



//efeito abas dos icones em habilidades
function abrirTabIconesHabilidade(idTab) {
    var habilidades = document.getElementsByClassName('icone_conteudo');

    for (var i = 0; i < habilidades.length; i++) {
        habilidades[i].style.display = 'none';
        document.getElementById('ativo').style.display = 'block';
    }

    document.getElementById(idTab).style.display = 'block';
    document.getElementById('ativo').style.display = 'none';
    
}//efeito abas dos icones em habilidades


//Ver Mais/Ver Menos

var mostrarProjetos = document.getElementsByClassName('maisProjetos')[0]
var verMenosBotao = document.getElementsByClassName('verMenosBotao')[0]
var verMaisBotao = document.getElementsByClassName('verMaisBotao')[0]

function mostrar(){
    
    mostrarProjetos.style.display = 'block'
    verMenosBotao.style.display = 'block'
    verMaisBotao.style.display = 'none'
}

function esconder(){
    
    mostrarProjetos.style.display = 'none'
    verMenosBotao.style.display = 'none'
    verMaisBotao.style.display = 'block'
}

//Ver Mais/Ver Menos

