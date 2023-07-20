const fs = require('fs');

// Função para verificar se o campo é igual a string passada"
function campoParaVerificar(obj) {
  const campoApiString = ''; // verifique se algum campo string, exemplo: sexo(m)
  return obj.unidade.includes(campoApiString);
}

// Função para filtrar o JSON com base no campo 
function filtrarJSON(jsonData) {
  const objetosFiltrados = jsonData.filter((item) => {
    return campoParaVerificar(item[1][0]); // retorna true ou false
  });
  return objetosFiltrados;
}

// Leitura do arquivo JSON
fs.readFile('caminho...', 'utf8', (err, data) => { // caminho do arquivo que precisa ser lido
  if (err) {
    console.error('Erro ao ler o arquivo:', err);
    return;
  }

  let caminhoNovo = 'caminho...'; // aqui você irá alocar o caminho do novo arquivo filtrado
 
  try {
    const jsonData = JSON.parse(data);
    const objetosFiltrados = filtrarJSON(jsonData);

    // Imprimir os objetos filtrados
    console.log(objetosFiltrados);

    // Se precisar converter o novo array de objetos em JSON novamente
    const novoJSON = JSON.stringify(objetosFiltrados, null, 2);
    console.log(novoJSON);

    // Para escrever o novo JSON em um arquivo (opcional)
    fs.writeFile(caminhoNovo, novoJSON, (err) => {
      if (err) {
        console.error('Erro ao escrever o novo arquivo JSON:', err);
      } else {
        console.log('Arquivo JSON filtrado criado com sucesso!');
      }
    });
  } catch (error) {
    console.error('Erro ao processar o arquivo JSON:', error);
  }
});
