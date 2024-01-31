const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder().setName('ping').setDescription("Responde com Pong!"),
    run: ({ interaction }) => {
    interaction.reply('Pong!');
    },
    devOnly: true,
};

