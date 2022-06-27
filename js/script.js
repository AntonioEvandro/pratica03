let novaJanela;

function abrirJanela() {
  novaJanela = window.open("", "novaJanela", "width=200,height=200");
  novaJanela.document.write("<p>Uma nova janela foi criada</p>");
}
function fecharJanela() {
  novaJanela.close();
}