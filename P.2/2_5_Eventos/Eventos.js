document.addEventListener('DOMContentLoaded', function() {
    const imagenesMonstruo = document.querySelectorAll('.imagen-video-trigger');
    const modalVideo = document.getElementById('modal-video');
    const botonCerrar = document.querySelector('.cerrar-modal');
    const videoPlayer = document.getElementById('video-player');
    const modalTitulo = document.getElementById('modal-titulo');

    function cerrarModal() {
        console.log("Cerrando el video.");
        modalVideo.style.display = 'none';
        videoPlayer.pause();
        videoPlayer.src = "";
    }
    imagenesMonstruo.forEach(function(imagen) {
        imagen.addEventListener('click', function() {
            const videoSrc = imagen.dataset.videoSrc;
            const nombreMonstruo = imagen.alt;
            videoPlayer.src = videoSrc;
            modalVideo.style.display = 'flex';
            videoPlayer.play();
        });
    });
    botonCerrar.addEventListener('click', cerrarModal);
    
    window.addEventListener('click', function(evento) {
        if (evento.target == modalVideo) {
            cerrarModal();
        }
    });
});