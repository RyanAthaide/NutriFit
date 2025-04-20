
import '../styles/input.css';

// Aguarde o DOM carregar completamente
document.addEventListener('DOMContentLoaded', () => {
    const btnInscricao = document.getElementById('inscricao');

    if (btnInscricao) {
        btnInscricao.addEventListener('click', () => {
            console.log('Redirecionando para página de inscrição...');
            window.location.href = 'inscrever.html';
        });
    } else {
        console.error('Botão com ID "inscricao" não encontrado!');
    }
});

// Prevenção de recarregamento do form
const formButton = document.querySelector('form button[type="submit"]');
if (formButton) {
    formButton.addEventListener('click', function(e) {
        e.preventDefault();
    });
}