// Lógica de la página de encuestas
function enviarEncuesta(e) {
    e.preventDefault();
    document.getElementById('modal-premio').style.display = 'flex';
    document.body.style.overflow = 'hidden';
}
function cerrarPremio() {
    document.getElementById('modal-premio').style.display = 'none';
    document.getElementById('form-encuesta').reset();
    document.body.style.overflow = '';
}
