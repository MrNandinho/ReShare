
// Selecionar o toggle e o texto de status
const toggleSwitch = document.getElementById('toggleSwitch');
const statusText = document.getElementById('status');

// Adicionar evento de clique ao toggle
toggleSwitch.addEventListener('click', () => {
  // Alternar a classe "active"
  toggleSwitch.classList.toggle('active');
  
});


function selecionarEstado(elemento) {
    // Remover classe 'active' de todas as bolas
    const bolas = document.querySelectorAll('.estado-bola');
    bolas.forEach(bola => bola.classList.remove('active'));

    // Adicionar classe 'active' na bola clicada
    const bolaSelecionada = elemento.querySelector('.estado-bola');
    bolaSelecionada.classList.add('active');
}


document.getElementById('botao1').addEventListener('click', function () {
  const formulario = document.getElementById('formulario1');
});

document.getElementById('botao2').addEventListener('click', function () {
  const formulario = document.getElementById('formulario2');
});

document.getElementById('botao3').addEventListener('click', function () {
  const formulario = document.getElementById('formulario3');
});

document.getElementById('botao4').addEventListener('click', function () {
  const formulario = document.getElementById('formulario4');
});



function goBack() {
  window.history.back();
}

