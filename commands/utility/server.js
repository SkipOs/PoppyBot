const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('server')
        .setDescription('Responde com informações sobre este server.'),
    async execute(interaction) {
        // guild representa o server
        await interaction.reply(`Hm... ${interaction.guild.name}, esse servidor tem ${interaction.guild.memberCount} pessoas!`);
    },
};