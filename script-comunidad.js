// Lógica de la página comunidad
// Mostrar nombre si está en localStorage
document.addEventListener('DOMContentLoaded', function() {
    var nombre = localStorage.getItem('nombreUsuario') || 'usuario';
    document.getElementById('nombre-usuario-comunidad').textContent = nombre;
});
// Ocultar tarjeta de bienvenida y quitar blur
function cerrarBienvenida() {
    document.getElementById('bienvenida-comunidad').style.display = 'none';
    document.getElementById('comunidad-feed').classList.remove('comunidad-feed-blur');
}
// Publicar un nuevo post (solo frontend)
function publicarPost() {
    var textarea = document.getElementById('nuevo-post');
    var texto = textarea.value.trim();
    if (!texto) return;
    // Aquí puedes agregar lógica para mostrar el post en la interfaz
}
