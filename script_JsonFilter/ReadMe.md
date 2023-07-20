# ScriptNodeJSFilterJson
    O "ScriptNodeJSFilterJson" é um projeto que fornece uma funcionalidade para filtrar dados de um arquivo JSON usando Node.js.

# Instalação
    Para utilizar o projeto, primeiro clone o repositório para o seu ambiente local:    
    <git clone> https://github.com/ViniciusEderman/ScriptNodeJSFilterJson.git
    cd ScriptNodeJSFilterJson

# Uso
    Para filtrar dados de um arquivo JSON, você pode seguir os seguintes passos:
    1° -> inclua um arquivo JSON dentro da pasta *script_JsonFilter* 
    2° -> na function *campoParaVerificar* você deve passar o campo do tipo string que irá ser filtrado
          exemplo: function campoParaVerificar(obj) {
                    const campoApiString = 'M'; // verifique se algum campo string, exemplo: sexo(m)
                    return obj.unidade.includes(campoApiString);
                    }
    3° -> fs.readFile('caminho...', 'utf8', (err, data) => passe o caminho do arquivo que deseja ler(no caso o json que você incluio no passo 1°)
    4° -> let caminhoNovo = 'caminho...' passe o caminho dentro de ArquivosFiltrados para que lá seja criado um novo arquivo json com o filtro aplicado

# Contato
    Se tiver dúvidas ou sugestões sobre o projeto, você pode entrar em contato pelo seguinte email: [vinicius-edermanmc@hotmail.com]    