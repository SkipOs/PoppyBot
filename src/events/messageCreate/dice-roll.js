module.exports = (message) => {
  if (message.author.bot) return;

  const result = diceHandler(message.content);
  if (result === null) return;
  message.reply(result.join('\n'));
  console.log('\n');
  //console.log(result.join('\n'));
};

function diceHandler(text) {
  //Identifica a existência de dados e a quantidade de vezes que deve realizar uma rolagem
  // Expressão regular para identificar números, '#', e 'xdy'
  const regex = /(\d*d\d+|\d+|#)/g;

  // Array para armazenar os dados
  const dice = [];

  // Array para armazenar os resultados processados
  const result = [];

  //Executar a expressão regular na string
  var match;
  while ((match = regex.exec(text)) !== null) {
    // Adicionar correspondência ao array de resultados
    dice.push(match[0]);
  }

  if (!dice) return null;

  switch (dice[1]) {
    case '#':
      for (i = 0; i < dice[0]; i++) {
        x = dice.slice(2); // Separa a expressão apenas
        result.push(diceRollManager(x));
      }
      break;
    default:
      result.push(diceRollManager(dice));
      break;
  }
  return result;
}

function diceRollManager(expression) {
  // Gerenciador de rolagem de dados e soma de valores
  // Array para armazenar o resultado de uma iteração
  const result = [];

  // Soma final dos dados
  const val = [];

  // Guia para encontrar os valores de dados
  const regex = /(\d*)d(\d+)/;

  expression.forEach((content, pos) => {
    console.log('Valor: ' + content + '| Posição: ' + pos);
  });

  result.push('` x `  ⟵  ' + expression.join(' + '));

  return result;
}
