document.addEventListener('DOMContentLoaded', function() {
    // 1. Encontra os elementos HTML
    const radioStream = document.getElementById('radio-stream');
    const radioBtn = document.getElementById('radio-button');
    const radioImg = radioBtn.querySelector('.radio');
    
    // 2. Define o URL do stream da rádio.
    const streamUrl = 'https://stream.antena1.com.br/stream14';
    radioStream.src = streamUrl;

    let isPlaying = false;

    // 3. Adiciona um "ouvinte de evento" para o clique no botão
    radioBtn.addEventListener('click', function() {
        if (isPlaying) {
            // Se a rádio estiver tocando, pausa
            radioStream.pause();
            isPlaying = false;
            console.log("Rádio pausada.");
            radioImg.classList.remove('active'); // Remove a classe para deixar a imagem cinza
        } else {
            // Se estiver pausada, inicia a reprodução
            radioStream.play().then(() => {
                isPlaying = true;
                console.log("Rádio tocando...");
                radioImg.classList.add('active'); // Adiciona a classe para deixar a imagem colorida
            }).catch(error => {
                console.log("Erro ao tocar a rádio:", error);
            });
        }
    });
});