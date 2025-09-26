function login() {
    const user = document.getElementById('username').value.trim();
    const pass = document.getElementById('password').value.trim();

    if(user !== "" && pass !== "") {
        // Esconde login, mostra fórum
        document.getElementById('login-container').style.display = 'none';
        document.getElementById('forum-container').style.display = 'block';
      } else {
        alert("Preencha usuário e senha!");
      }
}

function comentar() {
    const comentario = document.getElementById('comment');
    const user = document.getElementById('username').value;
    
    if(comentario.value.trim() !== "") {
        const comentariolog = comentario.value;
        const commentList = document.getElementById('comment-list');
        const novoComentario = document.createElement('li');

        novoComentario.classList.add('comment-item');
        
        // Usa classes para estilização e remove o <br>
        novoComentario.innerHTML = `<span class="comment-user">${user}</span><span class="comment-body">${comentariolog}</span>`;
        
        // Inverte a ordem: insere o novo comentário no início da lista
        commentList.insertBefore(novoComentario, commentList.firstChild);

        document.getElementById("comment").value = '';
    } else {
        alert("Comente alguma coisa.");
    }
}