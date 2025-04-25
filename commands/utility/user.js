const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('user')
        .setDescription('Responde com as informações sobre o usuário'),
    async execute(interaction){
        //user é quem invocou o comando.
        //member representa o user dentro do servidor (guild)
        await interaction.reply(`Esse comando foi usado por ${interaction.user.username}, que entrou no servidor em ${interaction.member.joinedAt}.`);
    },
};