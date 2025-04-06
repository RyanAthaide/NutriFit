import '../styles/input.css';

// tirando recarregamento do form
document.querySelector('form button[type="submit"]').addEventListener('click', function(e) {
    // Impede qualquer comportamento padrão (tipo submit)
    e.preventDefault();
  
  });
  