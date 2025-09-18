// Lógica de la página tutoriales
function toggleLista(nivel) {
    document.getElementById('lista-basico').style.display = (nivel === 'basico') ? (document.getElementById('lista-basico').style.display === 'none' ? 'block' : 'none') : 'none';
    document.getElementById('lista-intermedio').style.display = (nivel === 'intermedio') ? (document.getElementById('lista-intermedio').style.display === 'none' ? 'block' : 'none') : 'none';
}
function cerrarLista(nivel) {
    if(nivel === 'basico') document.getElementById('lista-basico').style.display = 'none';
    if(nivel === 'intermedio') document.getElementById('lista-intermedio').style.display = 'none';
}
