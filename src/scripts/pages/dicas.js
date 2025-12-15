 // SCRIPT DO FILTRO FUNCIONAL

  function filtrarDicas(categoria) {
    const cards = document.querySelectorAll(".card-dica");
    const botoes = document.querySelectorAll(".filtro-btn");

    // Reseta estilo dos botões
    botoes.forEach(btn => {
      btn.classList.remove("bg-purple-600", "text-white");
      btn.classList.add("bg-white", "text-purple-700");
    });

    // Marca o botão selecionado
    event.target.classList.add("bg-purple-600", "text-white");
    event.target.classList.remove("bg-white", "text-purple-700");

    cards.forEach(card => {
      const categorias = card.dataset.categoria.split(" ");

      if (categoria === "todos" || categorias.includes(categoria)) {
        card.classList.remove("hidden");
      } else {
        card.classList.add("hidden");
      }
    });
  }
