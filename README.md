# PoppyBot
Um bot simples utilizado para um servidor privado de RPG.

## Funções
- Rolagem de Dados simples e customizada em JavaScript com sintaxe inspirada no Bot Rollem.
- Ao receber uma mensagem, o robô verifica se ela contém uma rolagem de dados no início.
- O formato básico é "ydx", onde "y" é o número de dados e "x" é o número de faces do dado. Se "y" não for especificado, assume-se que é 1.
- Modificadores são adicionados com "+", indicando adição ao resultado final.
- O identificador "y#" antes de um dado indica que os resultados serão apresentados em linhas separadas, ou seja, a rolagem de dados é repetida "y" vezes.
- Erros e acertos críticos (valores máximos ou mínimos nos dados) são colocados em negrito.
- Modificadores podem ser adicionados infinitamente, exceto após o primeiro identificador de texto "#".
