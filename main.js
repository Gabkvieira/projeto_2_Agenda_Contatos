const form = document.getElementById('form-atividade');
const nomes = [];
const tel = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha(){
    const inputNomePessoa = document.getElementById('nome-pessoa');
    const inputTelPessoa = document.getElementById('tel-pessoa');

    if (nomes.includes(inputNomePessoa.value)) {
        alert(`Esse nome "${inputNomePessoa.value}" já está cadastrado`);
    } else {
        nomes.push(inputNomePessoa.value);
        tel.push(parseFloat(inputTelPessoa.value));
    
        let linha = '<tr>';
        linha += `<td>${inputNomePessoa.value}</td>`;
        linha += `<td>${inputTelPessoa.value}</td>`;
        linha += '</tr>';
    
        linhas += linha;
    }
    inputNomePessoa.value = '';
    inputTelPessoa.value = '';
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}