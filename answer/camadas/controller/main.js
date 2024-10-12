import { cadastrar, getPessoasCadastradas } from '../domain/main.js'; 
const enviar = () => {
    const inputNome = document.getElementById('inputNome').value;
    const inputIdade = document.getElementById('inputIdade').value;

    if (inputNome === '' || inputIdade === '') {
        alert('Preencha todos os campos');
        return;
    }

    if (inputIdade < 18) {
        alert('Menor de idade');
        return;
    }

    const pessoa = { nome: inputNome, idade: inputIdade };
    cadastrar(pessoa);

    atualizarListaCadastrados();
}

const atualizarListaCadastrados = () => {
    const listaCadastrados = document.getElementById('listaCadastrados');
    listaCadastrados.innerHTML = '';

    const pessoas = getPessoasCadastradas(); 
    pessoas.forEach((pessoa) => {
        const li = document.createElement('li');
        li.textContent = `${pessoa.nome}, ${pessoa.idade} anos`;
        listaCadastrados.appendChild(li);
    });
}

export { enviar };
