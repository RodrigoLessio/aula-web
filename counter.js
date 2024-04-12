// Função para atualizar o contador de visitas e a última data de acesso
function updateVisitCounter() {
    let visitData = localStorage.getItem('visitData');
    if (!visitData) {
      visitData = { count: 1, lastVisit: new Date() };
    } else {
      visitData = JSON.parse(visitData);
      visitData.count++;
      visitData.lastVisit = new Date();
    }
    localStorage.setItem('visitData', JSON.stringify(visitData));
  }
  
  // Função para exibir os dados de visitas e última data de acesso no rodapé
  function displayVisitInfo() {
    const visitData = JSON.parse(localStorage.getItem('visitData'));
    if (visitData) {
      const lastVisitDate = new Date(visitData.lastVisit);
      const formattedLastVisit = new Intl.DateTimeFormat('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric'
      }).format(lastVisitDate);
  
      const footer = document.querySelector('footer');
      const visitInfoParagraph = document.createElement('p');
      visitInfoParagraph.textContent = `Esta página foi visitada ${visitData.count} vezes. A última visita foi: ${formattedLastVisit}.`;
      footer.appendChild(visitInfoParagraph);
    }
  }
  
  // Chamada das funções ao carregar a página
  document.addEventListener('DOMContentLoaded', function () {
    updateVisitCounter();
    displayVisitInfo();
  });
  