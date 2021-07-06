// Definir dados iniciais

const pessoa = {
    nome: 'Lucifer',
    sobrenome: 'Morningstar',
    idade: 41,

    sorriso: true,

    imagemSerio: 'https://img.wattpad.com/b83db5eaea29e23c6aa153a5ddb4f09ab8f118b9/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f73773149384f4c485f48573747413d3d2d3932393732313039342e313632366664633932393662343566613837363339393138303331362e676966',
    imagemSorriso: 'https://pa1.narvii.com/6563/89afd1b4d13f394a93c34c3c12d2e9bfdebcdfa1_hq.gif',
}

// Atualizar dados

const elementoNome = document.getElementById('nome');
const elementoSobrenome = document.getElementById('sobrenome');
const elementoIdade = document.getElementById('idade');

elementoNome.innerText = pessoa.nome;
elementoSobrenome.innerText = pessoa.sobrenome;
elementoIdade.innerText = pessoa.idade;

// Atualizar humor
function atualizarHumor() {
    const elementoImagem = document.getElementById('imagem');
    const blocoHumor = document.getElementById('bloco_humor');

    if (pessoa.sorriso) {
        elementoImagem.src = pessoa.imagemSorriso;
        blocoHumor.innerText = pessoa.nome + ' tá sorrindo!';
    } else {
        elementoImagem.src = pessoa.imagemSerio;
        blocoHumor.innerText = pessoa.nome + ' tá sério!';
    }
}

atualizarHumor();

// Alterar humor

const botaoAlterarHumor = document.getElementById('alterarHumor');
botaoAlterarHumor.addEventListener('click', function () {
    pessoa.sorriso = !pessoa.sorriso;

    atualizarHumor();
});
