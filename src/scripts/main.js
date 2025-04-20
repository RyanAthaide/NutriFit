import { document } from 'postcss';
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



// tirando recarregamento do form
document.querySelector('form button[type="submit"]').addEventListener('click', function(e) {
    // Impede qualquer comportamento padrão (tipo submit)
    e.preventDefault();
  
  });
  