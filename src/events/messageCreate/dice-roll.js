module.exports = (message) => {
  if (message.author.bot || !/^\s*(\d*d\d+|\d+|#)/.test(message.content))
    return;

  const regex = /(\d*d\d+|\d+|#)/g;

  const match = regex.exec(message.content);
  if (!match) return;

  const result = diceHandler(message.content);
  if (result === null) return;
  message.reply(result.join('\n'));
};

// Restante do código continua sem alterações

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

  if (!match == regex.exec(text)) return null;

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

  // Array Temporario
  const temp = [];

  // Soma final dos dados
  var val = 0;

  // Guia para encontrar os valores de dados
  const regex = /(\d*)d(\d+)/;

  expression.forEach((content, pos) => {
    const match = content.match(regex);

    if (match) {
      var rollResult = diceRoll(match[1], match[2]);
      val += rollResult.soma;
      temp.push('[' + rollResult.valores.join(', ') + '] ' + content);
    } else {
      val += parseInt(content) || 0; // Converter para número ou usar 0 se NaN
      temp.push(content);
    }
  });

  result.push('` ' + val + ' ` ⟵ ' + temp.join(' + '));
  return result;
}

function diceRoll(qtd, faces) {
  qtd = qtd || 1;

  const valores = [];
  var soma = 0;

  for (let i = 0; i < qtd; i++) {
    const roll = Math.floor(Math.random() * faces) + 1;
    if (roll === 1 || roll === faces) {
      valores.push('**' + roll + '**');
    } else {
      valores.push(roll);
    }
    soma += roll;
  }
  return { soma, valores }; //Comentario Teste
}
