function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();
    let resultados = "";
  
    if (!campoPesquisa) {
      section.innerHTML = "<h3>Nada foi encontrado. Você precisa digitar o nome de uma classe<h3>";
      return;
    }
  
    for (let classe of classes) {
      if (
        classe.titulo.toLowerCase().includes(campoPesquisa) ||
        classe.descricao.some(desc => desc.toLowerCase().includes(campoPesquisa))
      ) {
        let listaDescricoes = classe.descricao.map(desc => `<li>${desc}</li>`).join('');
  
        resultados += `
          <div class="item-resultado">
            <h2>${classe.titulo}</h2>
            <h3>Descrição:</h3>
            <ul>${listaDescricoes}</ul>
            ${classe.habilidades ? `<h3>Habilidades:</h3><p>${classe.habilidades.join(', ')}</p>` : ''}
            ${classe.proficiências ? `<h3>Proficiências:</h3><p>${classe.proficiências.join(', ')}</p>` : ''}
            ${classe.magias ? `<h3>Magias:</h3><p>${classe.magias.join(', ')}</p>` : ''}
          </div>
        `;
      }
    }
  
    section.innerHTML = resultados || "<h3>Nada foi encontrado</h3>";
  }