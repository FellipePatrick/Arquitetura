const bd = [];

export const cadastrar = (pessoa) => {
    bd.push(pessoa);
    alert('Cadastrado com sucesso!', bd);
};

export const getPessoasCadastradas = () => {
    return bd;
};
