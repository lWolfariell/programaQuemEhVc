const nome = document.getElementById('nome');
        const idade = document.getElementById('idade');
        const linguagem = document.getElementById('linguagem');
        const botao = document.getElementById('confirmar')

        botao.addEventListener('click', capturarDados);

        function capturarDados() {
            let nomeCapturado = nome.value
            let idadeCapturada = idade.value
            let linguagemCapturada = linguagem.value

            document.querySelector('.mensagem').textContent = `Olá ${nomeCapturado}, você tem ${idadeCapturada} anos e já está aprendendo ${linguagemCapturada}!`

            let exibirNovaPergunta = document.querySelector('.boleano');

            exibirNovaPergunta.setAttribute('style', 'display: flex');

            document.querySelector('.novaPergunta').textContent = `Você gosta de estudar ${linguagemCapturada}?`
        }


        let opcoes = document.getElementsByName('opcao');

        // Adicione um evento de clique a cada radio button
        opcoes.forEach(function (opcao) {
            opcao.addEventListener('click', function () {
                let valorSelecionado = this.value;
                if (valorSelecionado === 'sim') {
                    document.querySelector('.resposta').textContent = `Muito bom! Continue estudando e você terá muito sucesso.`
                } else {
                    document.querySelector('.resposta').textContent = `Ahh que pena... Já tentou aprender outras linguagens?`
                }
            })
        })
