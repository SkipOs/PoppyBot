const { SlashCommandBuilder } = require('discord.js');
const { exec } = require('child_process');

module.exports = {
    cooldown: 5,
    data: new SlashCommandBuilder()
        .setName('mc-status')
        .setDescription('Mostra o status do servidor Minecraft oasis.'),
    async execute(interaction) {
        await interaction.deferReply();

        exec('podman inspect --format "{{.State.Running}}" minecraft', (error, stdout) => {
            if (error) {
                interaction.editReply('❌ Não foi possível obter o status do servidor.');
                return;
            }

            const isRunning = stdout.trim() === 'true';
            if (isRunning) {
                interaction.editReply('🟢 O servidor Minecraft está **online**!');
            } else {
                interaction.editReply('🔴 O servidor Minecraft está **offline**.');
            }
        });
    },
};