let emailInput = document.getElementById("emailInput");
let senhaInput = document.getElementById("senhaInput");

const usuarios = [
    {
        id: 1,
        nome: 'Nathan',
        idade: 28,
        email: 'nathan@gmail.com',
        senha: '1234'
    },
    {
        id: 2,
        nome: 'Alan',
        idade: 30,
        email: 'alan@gmail.com',
        senha: '4321'
    },
    {
        id: 3,
        nome: 'Alberto',
        idade: 35,
        email: 'alberto@gmail.com',
        senha: '7263'
    },
    {
        id: 4,
        nome: 'Jeferson',
        idade: 25,
        email: 'jeferson@gmail.com',
        senha: '5242'
    },
];


const verifica = (emailInput, senhaInput) => {
    const procurador = usuarios.find(usuario => usuario.email === emailInput.value && usuario.senha === senhaInput.value)

    !procurador ? alert(`Email ou senha inválido`) : alert(`Usuario acessado com sucesso!`)
    
}



