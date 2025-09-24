function toggleMode() {
    const html = document.documentElement

    html.classList.toggle('light');

    const todosOsBotoes = document.querySelectorAll('ul li a');

    const primeiroBotao = todosOsBotoes[0];

    if(html.classList.contains('light')) {
        primeiroBotao.textContent = "Conheça meu trabalho";
    } else {
        primeiroBotao.textContent = "Conheça meu trabalho 😎";
    }
}