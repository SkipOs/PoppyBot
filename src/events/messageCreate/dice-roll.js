module.exports = (message) => {
  if (message.author.bot) return;

  const result = diceHandler(message.content);
  console.log(result);
};

function diceHandler(text) {
  // Expressão regular para identificar números, '#', e 'xdy'
  const regex = /(\d*d\d+|\d+|#)/g;

  // Array para armazenar os resultados
  const val = [];

  //Executar a expressão regular na string
  var match;
  while ((match = regex.exec(text)) !== null) {
    // Adicionar correspondência ao array de resultados
    val.push(match[0]);
  }

  return val;
}
